var QuickAds = function() {
    "use strict";
    var n, i, o, a, d, l, r, s, c, g, E, p = !0,
        e = navigator.userAgent,
        t = /(?:Windows Phone)/.test(e),
        u = /(?:SymbianOS)/.test(e) || t,
        m = /(?:Android)/.test(e),
        A = /(?:Firefox)/.test(e),
        v = (/(?:Chrome|CriOS)/.test(e), /(?:iPad|PlayBook)/.test(e) || m && !/(?:Mobile)/.test(e) || A && /(?:Tablet)/.test(e)),
        y = !(/(?:iPhone)/.test(e) && !v) && !m && !u,
        h = function() {},
        f = function() {},
        T = function() {},
        L = function() {};
    function C() {
        s.style.zIndex = -1, s.style.display = "none"
    }
    function w() {
        a.style.zIndex = 999999999, a.style.display = "block"
    }
    function _(e, t) {
        t || (t = window.location.href), e = e.replace(/[\[\]]/g, "\\$&");
        var n = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)").exec(t);
        return n && n[2] ? decodeURIComponent(n[2].replace(/\+/g, " ")) : null
    }
    function S() {
    }
    function b() {
        d.pause()
    }
    function R() {}
    function D(e) {
        try {
            var t = new google.ima.AdsRenderingSettings;
            t.enablePreloading = !0, t.restoreCustomPlaybackStateOnAdBreakComplete = !1, (n = e.getAdsManager(d, t)).init(a.scrollWidth, a.scrollHeight, google.ima.ViewMode.NORMAL), n.addEventListener(google.ima.AdEvent.Type.USER_CLOSE, P), n.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, I), n.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, b), n.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, R), n.addEventListener(google.ima.AdEvent.Type.ALL_ADS_COMPLETED, k), n.addEventListener(google.ima.AdEvent.Type.LOADED, k), n.addEventListener(google.ima.AdEvent.Type.SKIPPED, k), n.addEventListener(google.ima.AdEvent.Type.STARTED, k), n.addEventListener(google.ima.AdEvent.Type.COMPLETE, k), n.addEventListener(google.ima.AdEvent.Type.CLICK, k)
        } catch (e) {
            console.log(e)
        }
    }
    function k(e) {
        var t = e.getAd();
        switch (e.type) {
            case google.ima.AdEvent.Type.LOADED:
                "image" === t.g.title ? (p = !1, C(), n.start()) : (s.style.zIndex = 999999999, s.style.display = "block", w());
                break;
            case google.ima.AdEvent.Type.STARTED:
                t.isLinear() && (g = setInterval(function() {
                    n.getRemainingTime()
                }, 300));
                break;
            case google.ima.AdEvent.Type.COMPLETE:
                f(), P(), t.isLinear() && (C(), clearInterval(g));
                break;
            case google.ima.AdEvent.Type.SKIPPED:
                h(), P();
                break;
            case google.ima.AdEvent.Type.CLICK:
                T(), P()
        }
    }
    function O() {
        if (p) {
            C();
            try {
                d.height = a.scrollHeight, d.width = a.scrollWidth, d.load(), n.start()
            } catch (e) {
                console.log(e)
            }
        } else console.log("The AD did not load successfully")
    }
    function P() {
        a.style.zIndex = -1, a.style.display = "none", C()
    }
    function I(e) {
        L(), console.log(e.getError()), P()
    }
    return document.write('<script src="https://cdn.jsdelivr.net/gh/threebenji/iframeintercept@master/filter.min.js"><\/script>'), {
        initAdError: function(e) {
            L = e
        },
        initSkipped: function(e) {
            h = e
        },
        initComplete: function(e) {
            f = e
        },
        initClick: function(e) {
            T = e
        }
    }
}();