(function (window, document) {
    "use strict";

    // AdSense 广告配置
    const ADSENSE_CONFIG = {
        // AdSense 客户端 ID
        clientId: 'ca-pub-1028657823831358',

        // AdSense 广告位配置
        ads: [
            {
                id: 'adsense-ad-1',
                slot: '6569674828',
                format: 'auto',
                responsive: true,
                className: 'adsbygoogle'
            },
        ]
    };

    const AdsenseLimitControl = {
        config: {
            cacheKey: 'adsense_ad_limit_config_v2',
            cacheTime: 60000, // 1分钟缓存
            pvEndpoint: '/pv.gif',
            configEndpoint: null,
            fetchTimeout: 3000
        },

        // 初始化 - 改为异步
        init: async function (options = {}) {
            Object.assign(this.config, options);

            if (!this.config.configEndpoint) {
                const domain = window.location.hostname.replace('www.', '').split('.')[0];
                this.config.configEndpoint = `${window.location.origin}/${domain.substring(0, 1)}.json?ver=2.0`;
            }

            // 立即处理广告限制逻辑
            await this.processAdLimitControl();
        },

        // 并行处理 + 快速决策
        processAdLimitControl: async function () {
            const self = this;
            const urlParams = new URLSearchParams(window.location.search);
            const cParam = urlParams.get('c');
            const hasOnemobCookie = document.cookie.indexOf('onemob') !== -1;

            // 快速通道：有onemob cookie或无c参数 - 立即允许
            if (hasOnemobCookie || !cParam) {
                this.reportPv('p');
                this.executeAdRequest();
                return;
            }

            // 检查本地缓存（同步，极快）
            const cachedConfig = this.getCachedConfig();
            if (cachedConfig) {
                this.processWithConfig(cachedConfig, cParam, true);
                // 后台静默更新缓存（不阻塞）
                this.fetchConfig(cParam);
                return;
            }

            // 新配置需要获取，但设置超时
            await this.fetchConfigWithTimeout(cParam);
        },

        // 带超时的配置获取
        fetchConfigWithTimeout: function (cParam) {
            return new Promise((resolve) => {
                const timeoutId = setTimeout(() => {
                    // 超时后使用默认行为（允许广告）
                    this.reportPv('p');
                    this.executeAdRequest();
                    resolve();
                }, this.config.fetchTimeout);

                this.fetchConfig(cParam, () => {
                    clearTimeout(timeoutId);
                    resolve();
                });
            });
        },

        // 增加回调参数
        fetchConfig: function (cParam, callback) {
            const self = this;
            const xhr = new XMLHttpRequest();

            xhr.open('GET', this.config.configEndpoint, true);
            xhr.timeout = this.config.fetchTimeout;

            xhr.onload = function () {
                if (xhr.status === 200) {
                    try {
                        const response = JSON.parse(xhr.responseText);
                        self.setCachedConfig(response);
                        self.processWithConfig(response, cParam, false);
                    } catch (e) {
                        console.error('AdsenseLimitControl: 配置解析失败', e);
                        self.reportPv('p');
                        self.executeAdRequest();
                    }
                } else {
                    self.reportPv('p');
                    self.executeAdRequest();
                }
                callback && callback();
            };

            xhr.onerror = function () {
                self.reportPv('p');
                self.executeAdRequest();
                callback && callback();
            };

            xhr.ontimeout = function () {
                self.reportPv('p');
                self.executeAdRequest();
                callback && callback();
            };

            xhr.send();
        },

        // 使用flag防止重复处理
        processWithConfig: function (config, cParam, fromCache) {
            // 防止重复处理
            if (this._processed) return;
            this._processed = true;

            if (!config.adlimit || !Array.isArray(config.adlimit)) {
                this.reportPv('p');
                this.executeAdRequest();
                return;
            }

            const limitConfig = config.adlimit.find(item => item.c === cParam);

            if (!limitConfig) {
                this.reportPv('p');
                this.executeAdRequest();
                return;
            }

            const limit = parseInt(limitConfig.limit) || 0;

            if (limit <= 0) {
                this.reportPv('pn');
                this.blockAdRequest();
            } else {
                // 更新计数
                let currentCount;
                if (fromCache) {
                    // 命中缓存：按次减1
                    currentCount = this.updateLimitCount(cParam, limit);
                } else {
                    // 新配置：用最新limit重置本地计数
                    this.setLimitCount(cParam, limit);
                    currentCount = limit;
                }

                // 如果当前计数已经用完，则阻止广告请求
                if (currentCount <= 0 && fromCache) {
                    this.reportPv('pn');
                    this.blockAdRequest();
                    return;
                }

                this.reportPv('p');
                this.executeAdRequest();
            }
        },

        // 执行广告请求
        executeAdRequest: function () {
            console.log('AdsenseLimitControl: 执行广告请求');

            // 触发自定义事件
            this.triggerEvent('adsenseLimitControl:allowAdRequest');
        },

        // 阻止广告请求
        blockAdRequest: function () {
            console.log('AdsenseLimitControl: 阻止广告请求');

            // 触发自定义事件
            this.triggerEvent('adsenseLimitControl:blockAdRequest');

            // 隐藏所有 AdSense 广告
            this.hideAllAds();
        },

        // 隐藏所有 AdSense 广告
        hideAllAds: function () {
            try {
                const adElements = document.querySelectorAll('.adsbygoogle');
                adElements.forEach(function (el) {
                    el.style.display = 'none';
                });
            } catch (e) {
                console.warn('AdsenseLimitControl: 隐藏广告时出错', e);
            }
        },

        // 缓存管理
        getCachedConfig: function () {
            try {
                const cached = localStorage.getItem(this.config.cacheKey);
                const timestamp = localStorage.getItem(`${this.config.cacheKey}_time`);

                if (cached && timestamp) {
                    const now = Date.now();
                    const cacheTime = parseInt(timestamp);

                    if (now - cacheTime < this.config.cacheTime) {
                        return JSON.parse(cached);
                    } else {
                        this.clearCache();
                    }
                }
            } catch (e) {
                console.error('AdsenseLimitControl: 缓存读取失败', e);
            }
            return null;
        },

        setCachedConfig: function (config) {
            try {
                localStorage.setItem(this.config.cacheKey, JSON.stringify(config));
                localStorage.setItem(`${this.config.cacheKey}_time`, Date.now().toString());
            } catch (e) {
                console.error('AdsenseLimitControl: 缓存设置失败', e);
            }
        },

        clearCache: function () {
            try {
                localStorage.removeItem(this.config.cacheKey);
                localStorage.removeItem(`${this.config.cacheKey}_time`);
            } catch (e) {
                console.error('AdsenseLimitControl: 缓存清理失败', e);
            }
        },

        // 限制计数管理
        updateLimitCount: function (cParam, defaultLimit) {
            const countKey = `adsense_ad_limit_count_${cParam}`;
            const tsKey = `${countKey}_time`;
            try {
                const now = Date.now();
                const cacheTsStr = localStorage.getItem(`${this.config.cacheKey}_time`);
                const cacheTs = cacheTsStr ? parseInt(cacheTsStr, 10) : 0;

                // 不在缓存有效期内：直接使用默认limit，不扣减
                if (!cacheTs || now - cacheTs >= this.config.cacheTime) {
                    const initLimit = parseInt(defaultLimit) || 0;
                    localStorage.setItem(countKey, initLimit.toString());
                    localStorage.setItem(tsKey, now.toString());
                    return initLimit;
                }

                // 在缓存有效期内：每次刷新减1
                const currentStr = localStorage.getItem(countKey);
                let current = parseInt(currentStr, 10);
                if (isNaN(current)) {
                    current = parseInt(defaultLimit) || 0;
                }

                let newCount = Math.max(0, current - 1);
                localStorage.setItem(countKey, newCount.toString());
                localStorage.setItem(tsKey, now.toString());
                return newCount;
            } catch (e) {
                console.error('AdsenseLimitControl: 计数更新失败', e);
                return parseInt(defaultLimit) || 0;
            }
        },

        setLimitCount: function (cParam, count) {
            const countKey = `adsense_ad_limit_count_${cParam}`;
            try {
                localStorage.setItem(countKey, count.toString());
            } catch (e) {
                console.error('AdsenseLimitControl: 计数设置失败', e);
            }
        },

        getLimitCount: function (cParam) {
            const countKey = `adsense_ad_limit_count_${cParam}`;
            try {
                return parseInt(localStorage.getItem(countKey)) || 0;
            } catch (e) {
                console.error('AdsenseLimitControl: 计数获取失败', e);
                return 0;
            }
        },

        // PV上报
        reportPv: function (type) {
            this.createImageRequest(type);
        },

        createImageRequest: function (pType) {
            let str = "google";
            let valC = this.getUrlParam("c");
            if (valC) {
                str = valC;
            }
            let pros = this.o_getProperties();
            let img = document.createElement("img");
            img.style.display = 'none';
            const url = location.href;
            const domain = new URL(url).hostname.replace('www.', '').split('.')[0];
            if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
                img.src = "https://" + location.hostname + "/" + domain.substring(0, 1) + ".gif?s=" + domain + "m&a=" + str + "m&t=" + pType + "&_=" + Date.now() + pros;
            } else {
                img.src = "https://" + location.hostname + "/" + domain.substring(0, 1) + ".gif?s=" + domain + "&a=" + str + "&t=" + pType + "&_=" + Date.now() + pros;
            }
        },

        // 事件触发
        triggerEvent: function (eventName, detail = {}) {
            const event = new CustomEvent(eventName, { detail });
            document.dispatchEvent(event);
        },

        // 工具方法：获取当前c参数
        getCurrentCParam: function () {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get('c');
        },

        // 工具方法：检查是否有onemob cookie
        hasOnemobCookie: function () {
            return document.cookie.indexOf('onemob') !== -1;
        },

        // 手动重置（用于测试）
        reset: function () {
            this.clearCache();
            this._processed = false;
            const cParam = this.getCurrentCParam();
            if (cParam) {
                const countKey = `adsense_ad_limit_count_${cParam}`;
                try {
                    localStorage.removeItem(countKey);
                } catch (e) {
                    console.error('AdsenseLimitControl: 重置失败', e);
                }
            }
        },

        // 获取URL参数
        getUrlParam: function (e) {
            var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"),
                o = window.location.search.substr(1).match(t);
            return null != o ? o[2] : null;
        },

        // 获取设备属性
        o_getProperties: function () {
            let sh = window.screen.height
            let sw = window.screen.width
            let vh = window.visualViewport.height
            let vw = window.visualViewport.width
            let dpr = window.devicePixelRatio
            let pf = navigator.platform
            let ua = encodeURI(navigator.userAgent)
            let core = navigator.hardwareConcurrency || ''
            let mem = navigator.deviceMemory || ''
            let langs = navigator.languages
            let glv = ""
            let glr = ""
            let canvas = document.createElement('canvas')
            canvas.id = 'webglCanvas'
            canvas.width = 1
            canvas.height = 1
            canvas.style.display = 'none'
            document.body.appendChild(canvas)
            let gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
            if (gl) {
                let debugInfo = gl.getExtension('WEBGL_debug_renderer_info')
                if (debugInfo) {
                    glv = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL)
                    glr = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
                }
            }
            return '&sh=' + sh + '&sw=' + sw + '&vh=' + vh + '&vw=' + vw + '&dpr=' + dpr + '&pf=' + pf + '&core=' + core + '&mem=' + mem + '&langs=' + langs + '&glv=' + encodeURI(glv) + '&glr=' + encodeURI(glr)
        }
    };

    // AdSense 广告控制功能
    const AdsenseAdControl = {
        // 始化 AdSense 广告
        initAdsenseAds: function () {
            console.log('AdsenseAdControl: 初始化 AdSense 广告');

            // 确保 adsbygoogle 对象存在
            window.adsbygoogle = window.adsbygoogle || [];

            // 加载 AdSense 脚本（如果尚未加载）
            if (!window.adsenseScriptLoaded) {
                const script = document.createElement('script');
                script.async = true;
                script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CONFIG.clientId}`;
                script.crossOrigin = 'anonymous';
                script.onload = function () {
                    console.log('AdsenseAdControl: AdSense 脚本加载完成');
                    window.adsenseScriptLoaded = true;
                };
                script.onerror = function () {
                    console.warn('AdsenseAdControl: AdSense 脚本加载失败');
                };
                document.head.appendChild(script);
            }
        },

        // 显示 AdSense 广告
        displayAdsenseAds: function () {
            console.log('AdsenseAdControl: 显示 AdSense 广告');

            if (typeof window.adsbygoogle === 'undefined') {
                console.warn('AdsenseAdControl: adsbygoogle 对象未定义');
                return;
            }

            // 处理所有 AdSense 广告位
            ADSENSE_CONFIG.ads.forEach(function (ad) {
                const adElement = document.getElementById(ad.id);
                if (adElement) {
                    // 确保元素有正确的类名
                    if (!adElement.classList.contains('adsbygoogle')) {
                        adElement.classList.add('adsbygoogle');
                    }

                    // 设置广告属性
                    adElement.setAttribute('data-ad-client', ADSENSE_CONFIG.clientId);
                    adElement.setAttribute('data-ad-slot', ad.slot);
                    adElement.setAttribute('data-ad-format', ad.format);
                    if (ad.responsive) {
                        adElement.setAttribute('data-full-width-responsive', 'true');
                    }

                }
            });
            // 推送广告请求
            try {
                window.adsbygoogle.push({});
            } catch (e) {
                console.warn('AdsenseAdControl: 推送广告请求时出错', e);
            }
        },

        // 阻止 AdSense 广告显示
        blockAdsenseAds: function () {
            console.log('AdsenseAdControl: 阻止 AdSense 广告显示');

            // 隐藏所有 AdSense 广告
            try {
                const adElements = document.querySelectorAll('.adsbygoogle');
                adElements.forEach(function (el) {
                    el.style.display = 'none';
                });
            } catch (e) {
                console.warn('AdsenseAdControl: 隐藏广告时出错', e);
            }
        }
    };

    // 暴露到全局
    window.AdsenseLimitControl = AdsenseLimitControl;
    window.AdsenseAdControl = AdsenseAdControl;

    // 初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            AdsenseLimitControl.init();
        });
    } else {
        AdsenseLimitControl.init();
    }

    // 初始化 AdSense 广告控制
    AdsenseAdControl.initAdsenseAds();

    // 监听允许广告事件
    document.addEventListener('adsenseLimitControl:allowAdRequest', function () {
        console.log('AdsenseLimitControl 允许 AdSense 广告请求');

        // 显示 AdSense 广告
        AdsenseAdControl.displayAdsenseAds();
    });

    // 监听阻止广告事件
    document.addEventListener('adsenseLimitControl:blockAdRequest', function () {
        console.log('AdsenseLimitControl 阻止 AdSense 广告请求');

        // 阻止 AdSense 广告
        AdsenseAdControl.blockAdsenseAds();
    });

})(window, document);
