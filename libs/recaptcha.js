(function (window, document) {
  "use strict";
  // SDK 配置
  const SDK_CONFIG = {
    recaptchaKey: "", // reCAPTCHA 密钥
    recaptchaRatio: 50, // 抽样比例
    recaptchaType: 1, // 检测类型，默认为 DAU 检测
    isAdFilled: false, // 广告是否填充
    isClickBlocked: false, // 广告点击是否被屏蔽
    // 是否请求完成
    isRequestCompleted: false,
  };

  // 工具函数
  const utils = {
    // 根据名称获取 Cookie 值
    getCookie: function (name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(";").shift();
      return null;
    },

    // 设置 Cookie，带过期时间（天数）
    setCookie: function (name, value, days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      const expires = `expires=${date.toUTCString()}`;
      document.cookie = `${name}=${value}; ${expires}; path=/`;
    },

    // 删除 Cookie
    deleteCookie: function (name) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    },

    // 获取当前日期，格式为 YYYY-MM-DD
    getCurrentDate: function () {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, "0");
      const day = String(today.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    },

    // 生成 1 到 100 的随机数
    getRandomNumber: function () {
      return Math.ceil(Math.random() * 100);
    },

    // 动态加载 reCAPTCHA 脚本
    loadRecaptchaScript: function (key, callback) {
      const script = document.createElement("script");
      script.src = `https://www.google.com/recaptcha/api.js?render=${key}`;
      script.onload = callback;
      document.head.appendChild(script);
    },

    insertCss: function (css) {
      const style = document.createElement("style");
      style.type = "text/css";
      style.innerHTML = css;
      document.head.appendChild(style);
    },

    createScriptUrl: function (parent, url = "", dataSet, fn) {
      if (typeof parent == "undefined") {
        return;
      }
      let scriptEle = document.createElement("script");
      scriptEle.defer = true;
      scriptEle.src = url;
      if (dataSet) {
        scriptEle.dataset.id = dataSet;
      }
      scriptEle.onload = fn || function () { };
      parent.insertBefore(scriptEle, parent.lastChild);
    },

    // 控制 iframe 点击状态
    controlIframeClick: function (containerId, enable = false) {
      const container = document.getElementById(containerId);
      if (!container) return;

      const iframe = container.querySelector('iframe');
      if (!iframe) return;

      if (enable) {
        // 启用点击
        iframe.style.pointerEvents = 'auto';
        // 移除点击事件监听器
        if (iframe._clickHandler) {
          iframe.removeEventListener('click', iframe._clickHandler);
        }
      } else {
        // 禁用点击
        iframe.style.pointerEvents = 'none';
        // 添加点击事件监听器
        iframe._clickHandler = function (e) {
          e.preventDefault();
          e.stopPropagation();
        };
        iframe.addEventListener('click', iframe._clickHandler);
      }
    },
    // 获取 iframe 内的广告链接
    getAdLink: function (containerId) {
      const container = document.getElementById(containerId);
      if (!container) return null;

      const iframe = container.querySelector('iframe');
      if (!iframe) return null;

      try {
        // 尝试获取 iframe 内的文档
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        // 查找广告链接
        const adLink = iframeDoc.querySelector('a[href*="googleadservices.com"]') ||
          iframeDoc.querySelector('a[href*="doubleclick.net"]');
        return adLink ? adLink.href : null;
      } catch (e) {
        // console.error('无法访问 iframe 内容:', e);
        return null;
      }
    },

    // 执行广告链接跳转
    executeAdRedirect: function (containerId) {
      const adLink = this.getAdLink(containerId);
      if (adLink) {
        window.open(adLink, '_blank');
      }
    },

    // 执行 reCAPTCHA 并返回 token
    executeRecaptcha: function (key, action) {
      return new Promise((resolve, reject) => {
        const url = location.href;
        const domain = new URL(url).hostname.replace('www.', '').split('.')[0];
        var prefix = location.origin + "/" + domain.substring(0, 1) + ".gif?s=reCAPTCHA&a=" + domain + "&t=";

        var status = ["Failed", "", "Error", "requstFailed"];
        grecaptcha.ready(function () {
          grecaptcha
            .execute(key, { action: "submit" })
            .then(function (token) {
              var client = new XMLHttpRequest();
              client.timeout = 60000;
              client.onerror = function (error) {
                var url = prefix + status[status.length - 1];
                utils.createImage(url);
                return reject(error);
              };
              client.onreadystatechange = function () {
                if (client.readyState === 4 && client.status === 200) {
                  var response = JSON.parse(client.responseText);
                  var codeIndex = response.result > status.length ? status.length : response.result;
                  const statusCode = (codeIndex === 1 ? response.score : status[codeIndex]);

                  const isOnemob = document.cookie.indexOf("onemob") !== -1; // 判断是否是onemob
                  if (isOnemob) {
                    // if (SDK_CONFIG.recaptchaType == 6 || SDK_CONFIG.recaptchaType == 5) {
                    let prefixHostName = location.hostname;
                    let cookieUrl = location.origin + "/" + domain.substring(0, 1) + ".gif?s=reCAPTCHA&a=" + prefixHostName + "&t=" + statusCode + "&_=" + Date.now();
                    utils.createImage(cookieUrl);
                    const cookieId = utils.getCookie("onemob") || "获取失败！";
                    const tmkTkUrl = `https://gtmk.gamehkconcept.com/api/recaptcha?id=${cookieId}&score=${response.score}`;
                    utils.createImage(tmkTkUrl);
                    // }
                  }

                  const currentDate = utils.getCurrentDate();
                  utils.setCookie("recaptchaScore", response.score, 1); // 记录分数
                  utils.setCookie("queryDate", currentDate, 1); // 记录处理日期

                  if (response && response.result === 1 && response.score < 0.5) {
                    if (SDK_CONFIG.recaptchaType === 1) {
                    }
                    // return reject(response);
                  } else {
                    // 校验通过，启用 iframe 点击并执行跳转
                    utils.enableAdContainerInteraction();
                  }

                  return resolve(response);
                }
              };

              client.open("POST", location.origin + "/recap?response=" + token);
              client.send();
            });
        });
      });
    },

    // 上报 reCAPTCHA 结果
    reportResult: function (url) {
      const valueScore = document.cookie.indexOf("recaptchaScore") !== -1;
      if (valueScore) {
        const score = parseFloat(utils.getCookie("recaptchaScore"));
        const cookieId = utils.getCookie("onemob") || "获取失败！";
        const tmkTkUrl = `https://gtmk.gamehkconcept.com/api/recaptcha?id=${cookieId}&score=${score}`;
        utils.createImage(tmkTkUrl);
      }
    },
    // 创建图片并返回 Promise
    createImage: function (url) {
      return new Promise(function (resolve, reject) {
        var img = document.createElement("img");
        img.src = url;
        img.style.display = "none";
        document.body.appendChild(img);
        resolve();
        img.onload = function () { };
        img.onerror = function () {
          reject();
        }
      });
    },
    // 自动点击指定区域
    autoClickArea: function (selector, options = {}) {
      const {
        interval = 1000, // 点击间隔时间(ms)
        maxClicks = 1,   // 最大点击次数
        callback = null  // 点击回调函数
      } = options;

      let clickCount = 0;
      const element = document.querySelector(selector);

      if (!element) {
        console.warn(`Element not found: ${selector}`);
        return;
      }

      const clickInterval = setInterval(() => {
        if (clickCount >= maxClicks) {
          clearInterval(clickInterval);
          return;
        }

        // 创建并触发点击事件
        const clickEvent = new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window
        });

        element.dispatchEvent(clickEvent);
        clickCount++;

        // 执行回调函数
        if (callback && typeof callback === 'function') {
          callback(clickCount);
        }
      }, interval);

      // 返回停止函数
      return () => {
        clearInterval(clickInterval);
      };
    },
    // 启用广告容器点击和样式
    enableAdContainerInteraction: function () {
      SDK_CONFIG.isRequestCompleted = true;
      // 启用所有广告容器的点击和重定向
      const containers = document.querySelectorAll('[id^="ad-filled-container-"]');
      containers.forEach(container => {
        this.controlIframeClick(container.id, true);
        // this.executeAdRedirect(container.id);
      });

      // 添加必要的样式
      const style = document.createElement('style');
      style.innerHTML = `
            iframe { pointer-events: auto !important; }
            #ad-filled-container-1 iframe { pointer-events: auto !important; }
            .trc_related_container * {
              pointer-events: auto !important;
            }
            #taboola-homepage-widget_hkgameworld > div {
              pointer-events: auto !important;
            }
          `;
      document.head.appendChild(style);
    },
  };

  // SDK 核心逻辑
  const RecaptchaSDK = {
    // 初始化 SDK
    init: function (config) {
      Object.assign(SDK_CONFIG, config); // 合并配置
      this.handleRecaptchaFlow(); // 开始处理 reCAPTCHA 流程
      this.handleAdDisplay(); // 根据分数判断显示广告
      utils.reportResult(); // 上报结果
    },
    // 根据分数判断显示广告
    handleAdDisplay: function (enable = false) {
      const { recaptchaKey, recaptchaType, recaptchaRatio } = SDK_CONFIG;
      const score = parseFloat(utils.getCookie("recaptchaScore"));
      // 添加特定的 CSS 样式，禁用 Taboola 相关容器的点击事件
      const css = `
          .trc_related_container * {
              pointer-events: none !important;
          }
          #taboola-homepage-widget_hkgameworld > div {
              pointer-events: none !important;
          }
        `;
      const style = document.createElement('style');
      style.innerHTML = css;
      document.head.appendChild(style);

      const clickCheckDate = utils.getCookie("clickCheckDate");
      const currentDate = utils.getCurrentDate();

      if (recaptchaType == 2) {
        utils.enableAdContainerInteraction();
      }

      if (clickCheckDate === currentDate && score >= 0.5) {
        utils.enableAdContainerInteraction();
      }

      if (enable) {
        utils.enableAdContainerInteraction();
      }
    },
    // 根据类型处理 reCAPTCHA 流程
    handleRecaptchaFlow: function () {
      const { recaptchaKey, recaptchaType, recaptchaRatio } = SDK_CONFIG;
      // console.log(recaptchaKey, recaptchaType, recaptchaRatio)
      // 检查 reCAPTCHA 密钥是否存在
      if (!recaptchaKey) {
        console.error("reCAPTCHA 密钥缺失。");
        return;
      }

      // 根据类型调用不同的处理函数
      switch (parseInt(recaptchaType)) {
        case 1:
          this.handleDAUDetection(); // DAU 检测
          break;
        case 2:
          this.handleClickDetection(); // 点击检测
          break;
        case 3:
          this.handleClickFiltering(); // 点击过滤
          break;
        case 4:
          this.handleAdRequestFiltering(); // 广告请求过滤
          break;
        case 5:
          this.handleZhiziDAUDetection(); // 智子 DAU 检测
          break;
        case 6:
          this.handleZhiziAdRequestFiltering(); // 智子展示过滤广告请求
          break;
        default:
          console.error("无效的 reCAPTCHA 类型。");
      }
    },

    // 情况一：DAU 检测
    handleDAUDetection: function () {
      const { recaptchaKey, recaptchaRatio } = SDK_CONFIG;
      // console.log(recaptchaKey, recaptchaRatio)
      // 步骤 2：检查当天是否已经处理过
      const queryDate = utils.getCookie("queryDate");
      const currentDate = utils.getCurrentDate();
      if (queryDate === currentDate) return;

      // 步骤 3：生成随机数并与抽样比例比较
      const randomNumber = utils.getRandomNumber();
      if (randomNumber > recaptchaRatio) return;

      // 步骤 4：加载 reCAPTCHA 并执行
      utils.loadRecaptchaScript(recaptchaKey, () => {
        utils.executeRecaptcha(recaptchaKey, "dau").then((token) => {
          utils.setCookie("queryDate", currentDate, 1); // 记录处理日期
        });
      });
    },

    // 情况二：点击检测
    handleClickDetection: function () {
      const { recaptchaKey, recaptchaRatio, isAdFilled, isClickBlocked, eventList, isRequestCompleted } = SDK_CONFIG;

      // 添加点击锁变量
      let isClickLocked = false;
      const CLICK_LOCK_TIME = 3000; // 点击锁定时间（毫秒）

      // 步骤 2：检查广告是否填充且未被屏蔽
      if (!isAdFilled || isClickBlocked) return;

      let isAdClick = false;
      const currentDate = utils.getCurrentDate();

      document.body.addEventListener('click', function (event) {
        if (event.target.tagName === 'IFRAME' || event.target.closest('iframe')) {
          console.log('用户点击了 iframe 元素或内部');
        }
      });

      // 方法3：检测通过 iframe 内容获取焦点
      window.addEventListener('blur', function () {
        const iframes = document.querySelectorAll('iframe');
        const activeElement = document.activeElement;

        if (Array.from(iframes).includes(activeElement)) {
          console.log('用户与 iframe 内容交互了');
          // 步骤 4：检查当天是否已经处理过
          const clickCheckDate = utils.getCookie("clickCheckDate");
          if (clickCheckDate === currentDate) {
            return;
          }

          // 步骤 5：生成随机数并与抽样比例比较
          const randomNumber = utils.getRandomNumber();
          if (randomNumber > recaptchaRatio) return;

          // 步骤 6：加载 reCAPTCHA 并执行
          utils.loadRecaptchaScript(recaptchaKey, () => {
            utils.executeRecaptcha(recaptchaKey, "click").then((token) => {
              utils.enableAdContainerInteraction();
              utils.setCookie("clickCheckDate", currentDate, 1); // 记录处理日期
              const href = document.querySelector(".item-thumbnail-href");
              if (href) {
                window.open(href.href, '_blank');
              }
            }).catch((res) => {
              console.log(res);
              utils.enableAdContainerInteraction();
              utils.setCookie("clickCheckDate", currentDate, 1); // 记录处理日期
            });
          });
        }
      });
    },

    // 情况三：点击过滤
    handleClickFiltering: function () {
      const { recaptchaKey, recaptchaRatio, isAdFilled, isClickBlocked, isRequestCompleted } = SDK_CONFIG;

      // 添加点击锁变量
      let isClickLocked = false;
      const CLICK_LOCK_TIME = 3000; // 点击锁定时间（毫秒）

      // 步骤 2：检查广告是否填充且未被屏蔽
      if (!isAdFilled || isClickBlocked) return;

      let isAdClick = false;
      // 步骤 3：添加点击事件监听器
      document.addEventListener("click", (event) => {
        const score = parseFloat(utils.getCookie("recaptchaScore"));
        // 步骤 4：检查历史分数
        if (score >= 0.5) {
          return; // 分数合格，允许点击
        }

        // 如果点击被锁定，直接返回
        if (isClickLocked) {
          event.preventDefault();
          event.stopPropagation();
          console.log('点击太频繁，请稍后再试');
          return;
        }

        // for (let i = 0; i < 4; i++) {
        // 动态生成广告容器的 ID
        let elid = `ad-filled-container-${i + 1}`;
        const adElement = document.getElementById(elid);

        // 如果广告容器存在且包含点击目标
        if (adElement && adElement.contains(event.target)) {
          console.log(adElement);
          isAdClick = true;
          // break;
        }
        // }

        if (!isAdClick) {
          return;
        }

        // 设置点击锁
        isClickLocked = true;
        setTimeout(() => {
          isClickLocked = false;
        }, CLICK_LOCK_TIME);

        if (score < 0.5) {
          event.preventDefault();
          event.stopPropagation();
          return; // 分数不合格，拦截点击
        }

        // 步骤 5：生成随机数并与抽样比例比较
        const randomNumber = utils.getRandomNumber();
        if (randomNumber > recaptchaRatio) return;

        // 步骤 6：加载 reCAPTCHA 并执行
        utils.loadRecaptchaScript(recaptchaKey, () => {
          utils.executeRecaptcha(recaptchaKey, "click").then((token) => {
            const currentDate = utils.getCurrentDate();
            utils.setCookie("clickCheckDate", currentDate, 1); // 记录处理日期
            const href = document.querySelector(".item-thumbnail-href");
            if (href) {
              window.open(href.href, '_blank');
            }
          }).catch((res) => {
            const currentDate = utils.getCurrentDate();
            utils.setCookie("clickCheckDate", currentDate, 1); // 记录处理日期
            console.log(res);
          });
        });
      });
    },

    // 情况四：广告请求过滤
    handleAdRequestFiltering: function () {
      const { recaptchaKey, recaptchaRatio } = SDK_CONFIG;

      // 步骤 2：检查历史分数 
      const score = parseFloat(utils.getCookie("recaptchaScore"));
      if (score >= 0.5) return; // 分数合格，允许广告请求
      if (score < 0.5) return; // 分数不合格，拦截广告请求
      console.log("score", score);
      // 步骤 3：生成随机数并与抽样比例比较
      const randomNumber = utils.getRandomNumber();
      if (randomNumber > recaptchaRatio) return;

      // 步骤 4：加载 reCAPTCHA 并执行
      utils.loadRecaptchaScript(recaptchaKey, () => {
        utils.executeRecaptcha(recaptchaKey, "ad_request").then((token) => {
        });
      });
    },
    // 情况五：智子 DAU 检测
    handleZhiziDAUDetection: function () {
      const { recaptchaKey, recaptchaRatio } = SDK_CONFIG;

      // 检查是否有 onemob cookie
      const isOnemob = document.cookie.indexOf("onemob") !== -1;
      if (!isOnemob) {
        return; // 如果没有 onemob cookie，直接返回
      }

      // 检查当天是否已经处理过
      const zhiziQueryDate = utils.getCookie("zhiziQueryDate");
      const currentDate = utils.getCurrentDate();
      if (zhiziQueryDate === currentDate) {
        return; // 如果当天已经检测过，直接返回
      }

      // 生成随机数并与抽样比例比较
      const randomNumber = utils.getRandomNumber();
      if (randomNumber > recaptchaRatio) {
        return; // 如果不在抽样范围内，直接返回
      }

      // 加载 reCAPTCHA 并执行
      utils.loadRecaptchaScript(recaptchaKey, () => {
        utils.executeRecaptcha(recaptchaKey, "zhizi_dau").then((token) => {
          // 记录处理日期
          utils.setCookie("zhiziQueryDate", currentDate, 1);
        }).catch((error) => {
          utils.setCookie("zhiziQueryDate", currentDate, 1);
          // console.log("智子 DAU 检测失败:", error);
        });
      });
    },
    // 情况六：智子展示过滤广告请求
    handleZhiziAdRequestFiltering: function () {
      const { recaptchaKey, recaptchaRatio } = SDK_CONFIG;

      // 检查是否有 onemob cookie
      const isOnemob = document.cookie.indexOf("onemob") !== -1;
      if (!isOnemob) {
        return; // 如果没有 onemob cookie，直接返回
      }

      // 检查当天是否已经处理过
      const zhiziAdRequestDate = utils.getCookie("zhiziAdRequestDate");
      const currentDate = utils.getCurrentDate();
      if (zhiziAdRequestDate === currentDate) {
        return; // 如果当天已经检测过，直接返回
      }

      // 生成随机数并与抽样比例比较
      const randomNumber = utils.getRandomNumber();
      if (randomNumber > recaptchaRatio) {
        setTimeout(() => {
          eventBus.emit('event_recapData', 999);
        }, 1000);
        return; // 如果不在抽样范围内，直接返回
      }

      // 加载 reCAPTCHA 并执行
      utils.loadRecaptchaScript(recaptchaKey, () => {
        utils.executeRecaptcha(recaptchaKey, "zhizi_ad_request").then((response) => {
          // 记录处理日期
          utils.setCookie("zhiziAdRequestDate", currentDate, 1);
          const score = parseFloat(utils.getCookie("recaptchaScore"));
          if (score < 0.5) {
            // 分数小于 0.5，不请求广告
            console.log("广告请求被过滤，分数小于 0.5");
          } else {
            // utils.createScriptUrl(document.body);
            eventBus.emit('event_recapData', response.score);
            // 继续请求广告
            console.log("继续请求广告");
          }
        }).catch((error) => {
          eventBus.emit('event_recapData', 999);
          utils.setCookie("zhiziAdRequestDate", currentDate, 1);
          console.error("智子展示过滤广告失败:", error);
        });
      });
    },
    // 自动点击指定区域
    autoClick: function (selector, options = {}) {
      return utils.autoClickArea(selector, options);
    },
  };

  // 将 SDK 暴露到全局
  window.RecaptchaSDK = RecaptchaSDK;
})(window, document);


(function (window, document) {
  "use strict";

  // 配置参数
  const CONFIG = {
    // 特定ID前缀，可根据需要修改
    idPrefix: "ad-filled-",
    // id计数检测次数，根据需要修改
    adCount: 0,
    // 检测间隔时间(ms)
    checkInterval: 200,
    // 最大检测次数
    maxChecks: 20,
    // 广告类型
    adTypes: {
      ADX: "adx",
      ADSENSE: "adsense",
      TB: "tb",
      UME: "ume",
    },
  };

  // 工具函数
  const utils = {
    /**
     * 生成唯一ID
     * @param {string} prefix - ID前缀
     * @param {string} type - 广告类型
     * @returns {string} 唯一ID
     */
    generateId: function (prefix, type) {
      CONFIG.adCount = 1;
      return `${prefix}container-${CONFIG.adCount}`;
      // return `${prefix}${type}-${Math.random().toString(36).substr(2, 9)}`;
    },
    /**
     * 插入CSS代码
     * @param {string} css - CSS代码
     */
    insertCss: function (css) {
      const style = document.createElement("style");
      style.type = "text/css";
      style.innerHTML = css;
      document.head.appendChild(style);
    },
    /**
     * 包装广告元素
     * @param {HTMLElement} adElement - 广告元素
     * @returns {HTMLElement} 包装后的元素
     */
    wrapElement: function (adElement) {
      if (!adElement || adElement.parentNode.classList.contains("ad-wrapper")) {
        return adElement.parentNode;
      }

      const wrapper = document.createElement("div");
      wrapper.className = "ad-wrapper";
      wrapper.style.cssText = "width:100%;position:relative;";

      adElement.parentNode.insertBefore(wrapper, adElement);
      wrapper.appendChild(adElement);

      return wrapper;
    },

    /**
     * 设置元素ID
     * @param {HTMLElement} element - 目标元素
     * @param {string} id - 要设置的ID
     */
    setElementId: function (element, id) {
      if (element) {
        element.id = id;
        console.log(`ID已设置: ${id}`);
        return id;
      }
    },
    /**
     * 处理广告位收缩
     * @param {HTMLElement} element - 广告元素
     * @param {boolean} shouldCollapse - 是否应该收缩
     */
    handleCollapse: function (element, shouldCollapse) {
      if (!element) return;

      if (shouldCollapse) {
        element.id = "";
        element.style.height = "0";
        element.style.overflow = "hidden";
      } else {
        element.style.height = "";
        element.style.overflow = "";
      }
    },
    // 控制 iframe 点击状态
    controlIframeClick: function (containerId, enable = false) {
      const container = document.getElementById(containerId);
      if (!container) return;

      const iframe = container.querySelector('iframe');
      if (!iframe) return;

      if (enable) {
        // 启用点击
        iframe.style.pointerEvents = 'auto';
        // 移除点击事件监听器
        if (iframe._clickHandler) {
          iframe.removeEventListener('click', iframe._clickHandler);
        }
      } else {
        // 禁用点击
        iframe.style.pointerEvents = 'none';
        // 添加点击事件监听器
        iframe._clickHandler = function (e) {
          e.preventDefault();
          e.stopPropagation();
        };
        iframe.addEventListener('click', iframe._clickHandler);
      }
    },
    createScriptUrl: function (parent, url = "", dataSet, fn) {
      if (typeof parent == "undefined") {
        return;
      }
      let scriptEle = document.createElement("script");
      scriptEle.defer = true;
      scriptEle.src = url;
      if (dataSet) {
        scriptEle.dataset.id = dataSet;
      }
      scriptEle.onload = fn || function () { };
      parent.insertBefore(scriptEle, parent.lastChild);
    },
  };

  // 广告处理器
  const adHandlers = {
    /**
     * 处理ADX广告(MX、GS)
     * @param {Object} options - 配置选项
     */
    handleAdx: function (options) {
      const { adElementSelector, idPrefix } = options;
      const adElements = document.querySelectorAll('div[id^="div-gpt-ad-"]');

      //   console.log("ADX广告处理中...", adElements);
      if (!adElements.length) return;
      window.isLoaded = true;
      // 设置Google广告事件监听
      window.googletag = window.googletag || { cmd: [] };
      window.googletag.cmd.push(function () {
        window.googletag
          .pubads()
          .addEventListener("slotRenderEnded", function (event) {
            // 查找对应的广告元素
            adElements.forEach(function (adElement, index) {
              const slotId = adElement.id;
              const slotElementId = event.slot.getSlotElementId();
              if (!event.isEmpty && slotElementId === slotId) {
                const wrapper = utils.wrapElement(adElement);
                // 广告有填充，给外层div赋值特定id
                utils.setElementId(
                  wrapper,
                  utils.generateId(idPrefix, CONFIG.adTypes.ADX)
                );
                window.isLoaded && AdFillDetector.handleQuery({ isAdFilled: true, eventList: [slotId] });
              } else {
                window.isLoaded && AdFillDetector.handleQuery({ isAdFilled: false, eventList: [""] });
              }
            });
          });
      });
    },

    /**
     * 处理Adsense固定广告
     * @param {Object} options - 配置选项
     */
    handleAdsense: function (options) {
      const { adElementSelector, idPrefix } = options;
      const adElements = document.querySelectorAll(adElementSelector);
      console.log('adElements', adElements);
      if (!adElements.length) return;
      window.isLoaded = true;
      adElements.forEach(function (adElement) {
        // console.log("Adsense广告处理中...", adElement, adElementSelector);
        let checkCount = 0;
        if (typeof MutationObserver !== 'undefined') {
          const observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
              if (
                mutation.type === "attributes" &&
                mutation.attributeName === "data-ad-status"
              ) {
                const status = adElement.getAttribute("data-ad-status");

                if (status === "filled") {
                  // 广告有填充，赋值特定id
                  const eleid = utils.setElementId(
                    adElement,
                    utils.generateId(idPrefix, CONFIG.adTypes.ADSENSE)
                  );
                  window.isLoaded && AdFillDetector.handleQuery({ isAdFilled: true, eventList: [adElement.id] });
                  observer.disconnect();
                } else if (status === "unfilled") {
                  window.isLoaded && AdFillDetector.handleQuery({ isAdFilled: false, eventList: [""] });
                  // 广告无填充，收缩广告位
                  observer.disconnect();
                }
              }
            });
          });
          // 开始观察
          observer.observe(adElement, { attributes: true });
        } else {
          // 备用方案：定时检查
          const intervalId = setInterval(function () {
            checkCount++;
            const status = adElement.getAttribute("data-ad-status");

            if (status === "filled") {
              utils.setElementId(
                adElement,
                utils.generateId(idPrefix, CONFIG.adTypes.ADSENSE)
              );
              window.isLoaded && AdFillDetector.handleQuery({ isAdFilled: true, eventList: [adElement.id] });
              // utils.handleCollapse(adElement, false);
              clearInterval(intervalId);
            } else if (status === "unfilled" || checkCount >= CONFIG.maxChecks) {
              // utils.handleCollapse(adElement, true);
              clearInterval(intervalId);
            }
          }, CONFIG.checkInterval);
        }
      });
    },

    /**
     * 处理TB广告
     * @param {Object} options - 配置选项
     */
    handleTb: function (options) {
      const { adElementSelector, idPrefix } = options;
      const adElements = document.querySelectorAll(adElementSelector);

      if (!adElements.length) return;
      window.isLoaded = true;
      adElements.forEach(function (adElement) {
        // TB广告默认填充100%，直接包装并赋值ID
        // const wrapper = utils.wrapElement(adElement);
        utils.setElementId(
          adElement,
          utils.generateId(idPrefix, CONFIG.adTypes.TB)
        );
        window.isLoaded && AdFillDetector.handleQuery({ isAdFilled: true, eventList: [adElement.id] });
      });
    },

    /**
     * 处理UME广告
     * @param {Object} options - 配置选项
     */
    handleUme: function (options) {
      const { adElementSelector, newsElementSelector, idPrefix } = options;
      window.isLoaded = true;
      if (typeof MutationObserver === 'undefined') {
        window.isLoaded && AdFillDetector.handleQuery({ isAdFilled: true, eventList: [] });
        return;
      }
      const observer = new MutationObserver((mutationsList, observer) => {
        const adElements = document.querySelectorAll(newsElementSelector);
        if (adElements.length > 0) {
          observer.disconnect(); // 找到元素后停止监听
          // console.log("UME广告处理中...", adElements);
          window.isLoaded && AdFillDetector.handleQuery({ isAdFilled: true, eventList: [] });
        }
      });

      window.isLoaded && AdFillDetector.handleQuery({ isAdFilled: true, eventList: [] });

      // 开始监听整个文档的变化
      observer.observe(document.body, {
        childList: true, // 监听子节点的添加或移除
        subtree: true, // 监听所有后代节点
      });
    },
  };

  // 主插件对象
  const AdFillDetector = {
    /**
     * 初始化插件
     * @param {Object} options - 配置选项
     */
    init: function (options = {}) {
      const mergedOptions = {
        idPrefix: options.idPrefix || CONFIG.idPrefix,
        adxSelector: options.adxSelector || ".adx-ad",
        adsenseSelector: options.adsenseSelector || ".adsbygoogle",
        tbSelector: options.tbSelector || "#ad-1",
        umeSelector: ".goods",
        newsSelector: ".goods",
      };

      utils.insertCss(
        `ins.adsbygoogle[data-ad-status="unfilled"] {display: none !important;}`
      );

      setTimeout(() => {
        // 处理各类型广告
        adHandlers.handleAdx({
          adElementSelector: mergedOptions.adxSelector,
          idPrefix: mergedOptions.idPrefix,
        });

        adHandlers.handleAdsense({
          adElementSelector: mergedOptions.adsenseSelector,
          idPrefix: mergedOptions.idPrefix,
        });

        adHandlers.handleTb({
          adElementSelector: mergedOptions.tbSelector,
          idPrefix: mergedOptions.idPrefix,
        });

        adHandlers.handleUme({
          adElementSelector: mergedOptions.umeSelector,
          newsElementSelector: mergedOptions.newsSelector,
          idPrefix: mergedOptions.idPrefix,
        });
      }, 0);
      return this;
    },

    handleQuery(option = {}) {
      return;
      window.isLoaded = false;
      const url = location.href;
      const domain = new URL(url).hostname.replace('www.', '').split('.')[0];
      var prefix =
        location.origin + "/" + domain.substring(0, 1) + ".json?ver=2.0";
      const isOnemob = document.cookie.indexOf("onemob") === -1;

      var xhr = new XMLHttpRequest();
      xhr.open("GET", prefix, true);

      xhr.onload = function () {
        if (xhr.status === 200) {
          var response = JSON.parse(xhr.responseText);
          if (response.recaptcha) {
            // console.log("Recaptcha key fetched: " + response.recaptcha);
            let REQUEST_KEY = response.recaptcha || "REQUEST_KEY";
            let recaptchaRatio = response.recaptcha_ratio || 150;
            let recaptchaType = response.recaptcha_type || 1;
            let clickblockArray = response.clickblock || [];
            if (recaptchaType == 3) {
              option.eventList[0] !== undefined
              // 初始禁用 iframe 点击
              utils.controlIframeClick(option.eventList[0] || "ad-filled-container-1", false);
            }
            if (recaptchaType == 6 && isOnemob) {
              // utils.createScriptUrl(document.body);
            }

            RecaptchaSDK.init({
              recaptchaKey: REQUEST_KEY, // reCAPTCHA 密钥
              recaptchaRatio: recaptchaRatio, // 抽样比例
              recaptchaType: recaptchaType, // 检测类型
              isAdFilled: option.isAdFilled, // 广告是否填充
              isClickBlocked: option.isClickBlocked, // 广告点击是否被屏蔽
              eventList: option.eventList, // 广告点击是否被屏蔽
            });
          } else {
            if (isOnemob) {
              // utils.createScriptUrl(document.body);
            }
            window.RecaptchaSDK.handleAdDisplay(true);
          }
        };
      }

      xhr.onerror = function () {
        if (isOnemob) {
          // utils.createScriptUrl(document.body);
        }
        console.error("Request failed.");
      };

      xhr.send();
    }
  };

  // 暴露到全局
  window.AdFillDetector = AdFillDetector;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      AdFillDetector.init();
    });
  } else {
    AdFillDetector.init();
  }
})(window, document);