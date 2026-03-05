(function (win) {
    class Inex {
        constructor(runtime) {
            this.runtime = runtime
        }
    }
    function createScriptCode(parent, code) {
        if (typeof parent == "undefined") {
            return;
        }
        var script = document.createElement("script");
        script.type = "text/javascript";
        try {
            script.appendChild(document.createTextNode(code));
        } catch (ex) {
            script.text = code;
        }
        parent.appendChild(script);
    }
    function createScriptUrl(parent, url, dataSet, fn) {
        if (typeof parent == "undefined") {
            return;
        }
        var scriptEle = document.createElement("script");
        scriptEle.async = true;
        scriptEle.src = url;
        if (dataSet) {
            scriptEle.dataset.id = dataSet;
        }
        parent.insertBefore(scriptEle, parent.lastChild);
        scriptEle.onload = fn || function () { };
    }
    createScriptUrl(document.head, "https://www.googletagmanager.com/gtag/js?id=G-JYQXN247P3");
    createScriptCode(document.head, `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-JYQXN247P3');`);
})(window)