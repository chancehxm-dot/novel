(() => {
    var e = {
            564: (e, t, n) => {
                var i, r, a;
                ! function(n, o) {
                    if (n) {
                        var s = {},
                            d = n.TraceKit,
                            A = [].slice,
                            c = "?",
                            l = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;
                        s.noConflict = function() {
                                return n.TraceKit = d,
                                    s
                            },
                            s.wrap = function(e) {
                                return function() {
                                    try {
                                        return e.apply(this, arguments)
                                    } catch (e) {
                                        throw s.report(e),
                                            e
                                    }
                                }
                            },
                            s.report = function() {
                                var e, t, i = [],
                                    r = null,
                                    a = null;

                                function o(e, t, n) {
                                    var r = null;
                                    if (!t || s.collectWindowErrors) {
                                        for (var a in i)
                                            if (u(i, a))
                                                try {
                                                    i[a](e, t, n)
                                                } catch (e) {
                                                    r = e
                                                }
                                        if (r)
                                            throw r
                                    }
                                }

                                function d(t, n, i, r, d) {
                                    if (a)
                                        s.computeStackTrace.augmentStackTraceWithInitialElement(a, n, i, t),
                                        A();
                                    else if (d)
                                        o(s.computeStackTrace(d), !0, d);
                                    else {
                                        var c, u = {
                                                url: n,
                                                line: i,
                                                column: r
                                            },
                                            p = t;
                                        if ("[object String]" === {}.toString.call(t)) {
                                            var m = t.match(l);
                                            m && (c = m[1],
                                                p = m[2])
                                        }
                                        u.func = s.computeStackTrace.guessFunctionName(u.url, u.line),
                                            u.context = s.computeStackTrace.gatherContext(u.url, u.line),
                                            o({
                                                name: c,
                                                message: p,
                                                mode: "onerror",
                                                stack: [u]
                                            }, !0, null)
                                    }
                                    return !!e && e.apply(this, arguments)
                                }

                                function A() {
                                    var e = a,
                                        t = r;
                                    a = null,
                                        r = null,
                                        o(e, !1, t)
                                }

                                function c(e) {
                                    if (a) {
                                        if (r === e)
                                            return;
                                        A()
                                    }
                                    var t = s.computeStackTrace(e);
                                    throw a = t,
                                        r = e,
                                        setTimeout((function() {
                                            r === e && A()
                                        }), t.incomplete ? 2e3 : 0),
                                        e
                                }
                                return c.subscribe = function(r) {
                                        ! function() {
                                            if (!0 === t)
                                                return;
                                            e = n.onerror,
                                                n.onerror = d,
                                                t = !0
                                        }(),
                                        i.push(r)
                                    },
                                    c.unsubscribe = function(r) {
                                        for (var a = i.length - 1; a >= 0; --a)
                                            i[a] === r && i.splice(a, 1);
                                        0 === i.length && (n.onerror = e,
                                            t = !1)
                                    },
                                    c
                            }(),
                            s.computeStackTrace = function() {
                                var e = !1,
                                    t = {};

                                function i(e) {
                                    if ("string" != typeof e)
                                        return [];
                                    if (!u(t, e)) {
                                        var i = "",
                                            r = "";
                                        try {
                                            r = n.document.domain
                                        } catch (e) {}
                                        var a = /(.*)\:\/\/([^:\/]+)([:\d]*)\/{0,1}([\s\S]*)/.exec(e);
                                        a && a[2] === r && (i = function(e) {
                                                if (!s.remoteFetching)
                                                    return "";
                                                try {
                                                    var t = function() {
                                                        try {
                                                            return new n.XMLHttpRequest
                                                        } catch (e) {
                                                            return new n.ActiveXObject("Microsoft.XMLHTTP")
                                                        }
                                                    }();
                                                    return t.open("GET", e, !1),
                                                        t.send(""),
                                                        t.responseText
                                                } catch (e) {
                                                    return ""
                                                }
                                            }(e)),
                                            t[e] = i ? i.split("\n") : []
                                    }
                                    return t[e]
                                }

                                function r(e, t) {
                                    var n, r = /function ([^(]*)\(([^)]*)\)/,
                                        a = /['"]?([0-9A-Za-z$_]+)['"]?\s*[:=]\s*(function|eval|new Function)/,
                                        o = "",
                                        s = i(e);
                                    if (!s.length)
                                        return c;
                                    for (var d = 0; d < 10; ++d)
                                        if (!p(o = s[t - d] + o)) {
                                            if (n = a.exec(o))
                                                return n[1];
                                            if (n = r.exec(o))
                                                return n[1]
                                        }
                                    return c
                                }

                                function a(e, t) {
                                    var n = i(e);
                                    if (!n.length)
                                        return null;
                                    var r = [],
                                        a = Math.floor(s.linesOfContext / 2),
                                        o = a + s.linesOfContext % 2,
                                        d = Math.max(0, t - a - 1),
                                        A = Math.min(n.length, t + o - 1);
                                    t -= 1;
                                    for (var c = d; c < A; ++c)
                                        p(n[c]) || r.push(n[c]);
                                    return r.length > 0 ? r : null
                                }

                                function o(e) {
                                    return e.replace(/[\-\[\]{}()*+?.,\\\^$|#]/g, "\\$&")
                                }

                                function d(e) {
                                    return o(e).replace("<", "(?:<|&lt;)").replace(">", "(?:>|&gt;)").replace("&", "(?:&|&amp;)").replace('"', '(?:"|&quot;)').replace(/\s+/g, "\\s+")
                                }

                                function A(e, t) {
                                    for (var n, r, a = 0, o = t.length; a < o; ++a)
                                        if ((n = i(t[a])).length && (n = n.join("\n"),
                                                r = e.exec(n)))
                                            return {
                                                url: t[a],
                                                line: n.substring(0, r.index).split("\n").length,
                                                column: r.index - n.lastIndexOf("\n", r.index) - 1
                                            };
                                    return null
                                }

                                function l(e, t, n) {
                                    var r, a = i(t),
                                        s = new RegExp("\\b" + o(e) + "\\b");
                                    return n -= 1,
                                        a && a.length > n && (r = s.exec(a[n])) ? r.index : null
                                }

                                function m(e) {
                                    if (!p(n && n.document)) {
                                        for (var t, i, r, a, s = [n.location.href], c = n.document.getElementsByTagName("script"), l = "" + e, u = 0; u < c.length; ++u) {
                                            var m = c[u];
                                            m.src && s.push(m.src)
                                        }
                                        if (r = /^function(?:\s+([\w$]+))?\s*\(([\w\s,]*)\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/.exec(l)) {
                                            var h = r[1] ? "\\s+" + r[1] : "",
                                                g = r[2].split(",").join("\\s*,\\s*");
                                            t = o(r[3]).replace(/;$/, ";?"),
                                                i = new RegExp("function" + h + "\\s*\\(\\s*" + g + "\\s*\\)\\s*{\\s*" + t + "\\s*}")
                                        } else
                                            i = new RegExp(o(l).replace(/\s+/g, "\\s+"));
                                        if (a = A(i, s))
                                            return a;
                                        if (r = /^function on([\w$]+)\s*\(event\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/.exec(l)) {
                                            var f = r[1];
                                            if (t = d(r[2]),
                                                a = A(i = new RegExp("on" + f + "=[\\'\"]\\s*" + t + "\\s*[\\'\"]", "i"), s[0]))
                                                return a;
                                            if (a = A(i = new RegExp(t), s))
                                                return a
                                        }
                                        return null
                                    }
                                }

                                function h(e) {
                                    if (!e.stack)
                                        return null;
                                    for (var t, n, i, o = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, s = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i, d = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i, A = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, u = /\((\S*)(?::(\d+))(?::(\d+))\)/, m = e.stack.split("\n"), h = [], g = /^(.*) is undefined$/.exec(e.message), f = 0, b = m.length; f < b; ++f) {
                                        if (n = o.exec(m[f])) {
                                            var v = n[2] && 0 === n[2].indexOf("native");
                                            n[2] && 0 === n[2].indexOf("eval") && (t = u.exec(n[2])) && (n[2] = t[1],
                                                    n[3] = t[2],
                                                    n[4] = t[3]),
                                                i = {
                                                    url: v ? null : n[2],
                                                    func: n[1] || c,
                                                    args: v ? [n[2]] : [],
                                                    line: n[3] ? +n[3] : null,
                                                    column: n[4] ? +n[4] : null
                                                }
                                        } else if (n = d.exec(m[f]))
                                            i = {
                                                url: n[2],
                                                func: n[1] || c,
                                                args: [],
                                                line: +n[3],
                                                column: n[4] ? +n[4] : null
                                            };
                                        else {
                                            if (!(n = s.exec(m[f])))
                                                continue;
                                            n[3] && n[3].indexOf(" > eval") > -1 && (t = A.exec(n[3])) ? (n[3] = t[1],
                                                    n[4] = t[2],
                                                    n[5] = null) : 0 !== f || n[5] || p(e.columnNumber) || (h[0].column = e.columnNumber + 1),
                                                i = {
                                                    url: n[3],
                                                    func: n[1] || c,
                                                    args: n[2] ? n[2].split(",") : [],
                                                    line: n[4] ? +n[4] : null,
                                                    column: n[5] ? +n[5] : null
                                                }
                                        }!i.func && i.line && (i.func = r(i.url, i.line)),
                                            i.context = i.line ? a(i.url, i.line) : null,
                                            h.push(i)
                                    }
                                    return h.length ? (h[0] && h[0].line && !h[0].column && g && (h[0].column = l(g[1], h[0].url, h[0].line)), {
                                        mode: "stack",
                                        name: e.name,
                                        message: e.message,
                                        stack: h
                                    }) : null
                                }

                                function g(e, t, n, i) {
                                    var o = {
                                        url: t,
                                        line: n
                                    };
                                    if (o.url && o.line) {
                                        e.incomplete = !1,
                                            o.func || (o.func = r(o.url, o.line)),
                                            o.context || (o.context = a(o.url, o.line));
                                        var s = / '([^']+)' /.exec(i);
                                        if (s && (o.column = l(s[1], o.url, o.line)),
                                            e.stack.length > 0 && e.stack[0].url === o.url) {
                                            if (e.stack[0].line === o.line)
                                                return !1;
                                            if (!e.stack[0].line && e.stack[0].func === o.func)
                                                return e.stack[0].line = o.line,
                                                    e.stack[0].context = o.context, !1
                                        }
                                        return e.stack.unshift(o),
                                            e.partial = !0, !0
                                    }
                                    return e.incomplete = !0, !1
                                }

                                function f(e, t) {
                                    for (var n, i, a, o = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i, d = [], A = {}, u = !1, p = f.caller; p && !u; p = p.caller)
                                        if (p !== b && p !== s.report) {
                                            if (i = {
                                                    url: null,
                                                    func: c,
                                                    args: [],
                                                    line: null,
                                                    column: null
                                                },
                                                p.name ? i.func = p.name : (n = o.exec(p.toString())) && (i.func = n[1]),
                                                void 0 === i.func)
                                                try {
                                                    i.func = n.input.substring(0, n.input.indexOf("{"))
                                                } catch (e) {}
                                            if (a = m(p)) {
                                                i.url = a.url,
                                                    i.line = a.line,
                                                    i.func === c && (i.func = r(i.url, i.line));
                                                var h = / '([^']+)' /.exec(e.message || e.description);
                                                h && (i.column = l(h[1], a.url, a.line))
                                            }
                                            A["" + p] ? u = !0 : A["" + p] = !0,
                                                d.push(i)
                                        }
                                    t && d.splice(0, t);
                                    var v = {
                                        mode: "callers",
                                        name: e.name,
                                        message: e.message,
                                        stack: d
                                    };
                                    return g(v, e.sourceURL || e.fileName, e.line || e.lineNumber, e.message || e.description),
                                        v
                                }

                                function b(t, o) {
                                    var s = null;
                                    o = null == o ? 0 : +o;
                                    try {
                                        if (s = function(e) {
                                                var t = e.stacktrace;
                                                if (t) {
                                                    for (var n, i = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i, o = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\))? in (.*):\s*$/i, s = t.split("\n"), d = [], A = 0; A < s.length; A += 2) {
                                                        var c = null;
                                                        if ((n = i.exec(s[A])) ? c = {
                                                                url: n[2],
                                                                line: +n[1],
                                                                column: null,
                                                                func: n[3],
                                                                args: []
                                                            } : (n = o.exec(s[A])) && (c = {
                                                                url: n[6],
                                                                line: +n[1],
                                                                column: +n[2],
                                                                func: n[3] || n[4],
                                                                args: n[5] ? n[5].split(",") : []
                                                            }),
                                                            c) {
                                                            if (!c.func && c.line && (c.func = r(c.url, c.line)),
                                                                c.line)
                                                                try {
                                                                    c.context = a(c.url, c.line)
                                                                } catch (e) {}
                                                            c.context || (c.context = [s[A + 1]]),
                                                                d.push(c)
                                                        }
                                                    }
                                                    return d.length ? {
                                                        mode: "stacktrace",
                                                        name: e.name,
                                                        message: e.message,
                                                        stack: d
                                                    } : null
                                                }
                                            }(t))
                                            return s
                                    } catch (t) {
                                        e
                                    }
                                    try {
                                        if (s = h(t))
                                            return s
                                    } catch (t) {
                                        e
                                    }
                                    try {
                                        if (s = function(e) {
                                                var t = e.message.split("\n");
                                                if (t.length < 4)
                                                    return null;
                                                var o, s = /^\s*Line (\d+) of linked script ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,
                                                    c = /^\s*Line (\d+) of inline#(\d+) script in ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,
                                                    l = /^\s*Line (\d+) of function script\s*$/i,
                                                    p = [],
                                                    m = n && n.document && n.document.getElementsByTagName("script"),
                                                    h = [];
                                                for (var g in m)
                                                    u(m, g) && !m[g].src && h.push(m[g]);
                                                for (var f = 2; f < t.length; f += 2) {
                                                    var b = null;
                                                    if (o = s.exec(t[f]))
                                                        b = {
                                                            url: o[2],
                                                            func: o[3],
                                                            args: [],
                                                            line: +o[1],
                                                            column: null
                                                        };
                                                    else if (o = c.exec(t[f])) {
                                                        b = {
                                                            url: o[3],
                                                            func: o[4],
                                                            args: [],
                                                            line: +o[1],
                                                            column: null
                                                        };
                                                        var v = +o[1],
                                                            k = h[o[2] - 1];
                                                        if (k) {
                                                            var y = i(b.url);
                                                            if (y) {
                                                                var w = (y = y.join("\n")).indexOf(k.innerText);
                                                                w >= 0 && (b.line = v + y.substring(0, w).split("\n").length)
                                                            }
                                                        }
                                                    } else if (o = l.exec(t[f])) {
                                                        var S = n.location.href.replace(/#.*$/, ""),
                                                            I = A(new RegExp(d(t[f + 1])), [S]);
                                                        b = {
                                                            url: S,
                                                            func: "",
                                                            args: [],
                                                            line: I ? I.line : o[1],
                                                            column: null
                                                        }
                                                    }
                                                    if (b) {
                                                        b.func || (b.func = r(b.url, b.line));
                                                        var E = a(b.url, b.line),
                                                            x = E ? E[Math.floor(E.length / 2)] : null;
                                                        E && x.replace(/^\s*/, "") === t[f + 1].replace(/^\s*/, "") ? b.context = E : b.context = [t[f + 1]],
                                                            p.push(b)
                                                    }
                                                }
                                                return p.length ? {
                                                    mode: "multiline",
                                                    name: e.name,
                                                    message: t[0],
                                                    stack: p
                                                } : null
                                            }(t))
                                            return s
                                    } catch (t) {
                                        e
                                    }
                                    try {
                                        if (s = f(t, o + 1))
                                            return s
                                    } catch (t) {
                                        e
                                    }
                                    return {
                                        name: t.name,
                                        message: t.message,
                                        mode: "failed"
                                    }
                                }
                                return b.augmentStackTraceWithInitialElement = g,
                                    b.computeStackTraceFromStackProp = h,
                                    b.guessFunctionName = r,
                                    b.gatherContext = a,
                                    b.ofCaller = function(e) {
                                        e = 1 + (null == e ? 0 : +e);
                                        try {
                                            throw new Error
                                        } catch (t) {
                                            return b(t, e + 1)
                                        }
                                    },
                                    b.getSource = i,
                                    b
                            }(),
                            s.extendToAsynchronousCallbacks = function() {
                                var e = function(e) {
                                    var t = n[e];
                                    n[e] = function() {
                                        var e = A.call(arguments),
                                            n = e[0];
                                        return "function" == typeof n && (e[0] = s.wrap(n)),
                                            t.apply ? t.apply(this, e) : t(e[0], e[1])
                                    }
                                };
                                e("setTimeout"),
                                    e("setInterval")
                            },
                            s.remoteFetching || (s.remoteFetching = !0),
                            s.collectWindowErrors || (s.collectWindowErrors = !0),
                            (!s.linesOfContext || s.linesOfContext < 1) && (s.linesOfContext = 11),
                            r = [],
                            void 0 === (a = "function" == typeof(i = s) ? i.apply(t, r) : i) || (e.exports = a)
                    }

                    function u(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }

                    function p(e) {
                        return void 0 === e
                    }
                }("undefined" != typeof window ? window : n.g)
            }
        },
        t = {};

    function n(i) {
        if (t[i])
            return t[i].exports;
        var r = t[i] = {
            exports: {}
        };
        return e[i](r, r.exports, n),
            r.exports
    }
    n.n = e => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return n.d(t, {
                    a: t
                }),
                t
        },
        n.d = (e, t) => {
            for (var i in t)
                n.o(t, i) && !n.o(e, i) && Object.defineProperty(e, i, {
                    enumerable: !0,
                    get: t[i]
                })
        },
        n.g = function() {
            if ("object" == typeof globalThis)
                return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" == typeof window)
                    return window
            }
        }(),
        n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
        (() => {
            "use strict";
            var e = n(564),
                t = n.n(e);
            const i = {
                ready: "pokiAppReady",
                adblocked: "pokiAppAdblocked",
                ads: {
                    completed: "pokiAdsCompleted",
                    error: "pokiAdsError",
                    impression: "pokiAdsImpression",
                    durationChange: "pokiAdsDurationChange",
                    limit: "pokiAdsLimit",
                    ready: "pokiAdsReady",
                    requested: "pokiAdsRequested",
                    prebidRequested: "pokiAdsPrebidRequested",
                    skipped: "pokiAdsSkipped",
                    started: "pokiAdsStarted",
                    stopped: "pokiAdsStopped",
                    busy: "pokiAdsBusy",
                    position: {
                        preroll: "PP",
                        midroll: "PM",
                        rewarded: "PR",
                        display: "DP"
                    },
                    video: {
                        clicked: "pokiVideoAdsClicked",
                        firstQuartile: "pokiVideoAdsFirstQuartile",
                        midPoint: "pokiVideoAdsMidPoint",
                        thirdQuartile: "pokiVideoAdsThirdQuartile",
                        error: "pokiVideoAdsError",
                        loaderError: "pokiVideoAdsLoaderError",
                        paused: "pokiVideoAdsPauseTriggered",
                        resumed: "pokiVideoAdsResumedTriggered",
                        progress: "pokiVideoAdsProgress",
                        buffering: "pokiVideoAdsBuffering"
                    }
                },
                info: {
                    messages: {
                        timeLimit: "The ad-request was not processed, because of a time constraint",
                        prerollLimit: "The ad-request was cancelled, because we're not allowed to show a preroll"
                    }
                },
                message: {
                    event: "pokiMessageEvent",
                    sdkDetails: "pokiMessageSdkDetails",
                    toggleProgrammaticAds: "pokiMessageToggleProgrammaticAds"
                },
                tracking: {
                    custom: "pokiTrackingCustom",
                    togglePlayerAdvertisingConsent: "pokiTrackingTogglePlayerAdvertisingConsent",
                    debugTrueInProduction: "pokiMessageDebugTrueProduction",
                    screen: {
                        gameplayStart: "pokiTrackingScreenGameplayStart",
                        gameplayStop: "pokiTrackingScreenGameplayStop",
                        gameLoadingStarted: "pokiTrackingScreenGameLoadingStarted",
                        gameLoadingProgress: "pokiTrackingScreenGameLoadingProgress",
                        gameLoadingFinished: "pokiTrackingScreenGameLoadingFinished",
                        commercialBreak: "pokiTrackingScreenCommercialBreak",
                        rewardedBreak: "pokiTrackingScreenRewardedBreak",
                        happyTime: "pokiTrackingScreenHappyTime",
                        firstRound: "pokiTrackingScreenFirstRound",
                        roundStart: "pokiTrackingScreenRoundStart",
                        roundEnd: "pokiTrackingScreenRoundEnd",
                        gameInteractive: "pokiTrackingScreenGameInteractive",
                        displayAd: "pokiTrackingScreenDisplayAdRequest",
                        destroyAd: "pokiTrackingScreenDisplayAdDestroy"
                    },
                    sdk: {
                        status: {
                            initialized: "pokiTrackingSdkStatusInitialized",
                            failed: "pokiTrackingSdkStatusFailed"
                        }
                    },
                    ads: {
                        status: {
                            busy: "pokiTrackingAdsStatusBusy",
                            completed: "pokiTrackingAdsStatusCompleted",
                            error: "pokiTrackingAdsStatusError",
                            displayError: "pokiTrackingAdsStatusDisplayError",
                            impression: "pokiTrackingAdsStatusImpression",
                            limit: "pokiTrackingAdsStatusLimit",
                            ready: "pokiTrackingAdsStatusReady",
                            requested: "pokiTrackingAdsStatusRequested",
                            prebidRequested: "pokiTrackingAdsStatusPrebidRequested",
                            skipped: "pokiTrackingAdsStatusSkipped",
                            started: "pokiTrackingAdsStatusStarted",
                            buffering: "pokiTrackingAdsStatusBuffering"
                        },
                        video: {
                            clicked: "pokiTrackingAdsVideoClicked",
                            error: "pokiTrackingAdsVideoError",
                            loaderError: "pokiTrackingAdsVideoLoaderError",
                            progress: "pokiTrackingAdsVideoProgress",
                            paused: "pokiTrackingAdsVideoPaused",
                            resumed: "pokiTrackingAdsVideoResumed"
                        },
                        display: {
                            requested: "pokiTrackingScreenDisplayAdRequested",
                            impression: "pokiTrackingScreenDisplayAdImpression",
                            viewable: "pokiTrackingScreenDisplayAdViewable"
                        }
                    }
                }
            };
            var r = function() {
                return (r = Object.assign || function(e) {
                    for (var t, n = 1, i = arguments.length; n < i; n++)
                        for (var r in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }).apply(this, arguments)
            };
            const a = function() {
                function e() {}
                return e.clearEventListeners = function() {
                        this.listeners = {}
                    },
                    e.removeEventListener = function(e, t) {
                        if (Object.prototype.hasOwnProperty.call(this.listeners, e)) {
                            var n = this.listeners[e].indexOf(t); -
                            1 !== n && this.listeners[e].splice(n, 1)
                        }
                    },
                    e.addEventListener = function(e, t, n) {
                        var i = this;
                        if (void 0 === n && (n = !1),
                            n = !!n,
                            Object.prototype.hasOwnProperty.call(this.listeners, e) || (this.listeners[e] = []),
                            n) {
                            var r = function(n) {
                                i.removeEventListener.bind(i)(e, r),
                                    t(n)
                            };
                            this.listeners[e].push(r)
                        } else
                            this.listeners[e].push(t)
                    },
                    e.dispatchEvent = function(e, t) {
                        void 0 === t && (t = {}), !this.debug || window.process && window.process.env && "test" === window.process.env.NODE_ENV || console.info(e, t);
                        for (var n = Object.keys(this.listeners), i = 0; i < n.length; i++) {
                            var a = n[i];
                            if (e === a)
                                for (var o = this.listeners[a], s = 0; s < o.length; s++)
                                    o[s](r(r({}, this.dataAnnotations), t))
                        }
                    },
                    e.setDebug = function(e) {
                        this.debug = e
                    },
                    e.setDataAnnotations = function(e) {
                        this.dataAnnotations = r(r({}, this.dataAnnotations), e)
                    },
                    e.getDataAnnotations = function() {
                        return this.dataAnnotations
                    },
                    e.clearAnnotations = function() {
                        this.dataAnnotations = {}
                    },
                    e.listeners = {},
                    e.debug = !1,
                    e.dataAnnotations = {},
                    e
            }();
            const o = function(e, t) {
                var n = !1;
                return Object.keys(t).forEach((function(i) {
                        t[i] === e && (n = !0)
                    })),
                    n
            };
            const s = function() {
                function e() {}
                return e.sendMessage = function(e, t) {
                        void 0 === t && (t = {});
                        var n = window.parent;
                        if (!o(e, i.message)) {
                            var r = Object.keys(i.message).map((function(e) {
                                return "poki.message." + e
                            }));
                            throw new TypeError("Argument 'type' must be one of " + r.join(", "))
                        }
                        n.postMessage({
                            type: e,
                            content: t
                        }, "*")
                    },
                    e
            }();
            var d = function(e) {
                var t = new Array;
                return Object.keys(e).forEach((function(n) {
                        "object" == typeof e[n] ? t = t.concat(d(e[n])) : t.push(e[n])
                    })),
                    t
            };
            var A = d(i.tracking);
            const c = function() {
                function e() {}
                return e.setDebug = function(e) {
                        this.debug = e
                    },
                    e.track = function(e, t) {
                        if (void 0 === t && (t = {}), -1 === A.indexOf(e))
                            throw new TypeError("Invalid 'event', must be one of " + A.join(", "));
                        if ("object" != typeof t)
                            throw new TypeError("Invalid data, must be an object");
                        if (this.debug) {
                            if (window.process && window.process.env && "test" === window.process.env.NODE_ENV)
                                return;
                            Object.keys(t).length ? console.info("%cPOKI_TRACKER: %cTracked event '" + e + "' with data:", "font-weight: bold", "", t) : console.info("%cPOKI_TRACKER: %cTracked event '" + e + "'", "font-weight: bold", "")
                        }
                        s.sendMessage(i.message.event, {
                            event: e,
                            data: t
                        })
                    },
                    e.setupDefaultEvents = function() {
                        var t, n = ((t = {})[i.ready] = i.tracking.sdk.status.initialized,
                            t[i.adblocked] = i.tracking.sdk.status.failed,
                            t[i.ads.busy] = i.tracking.ads.status.busy,
                            t[i.ads.completed] = i.tracking.ads.status.completed,
                            t[i.ads.error] = i.tracking.ads.status.error,
                            t[i.ads.displayError] = i.tracking.ads.status.displayError,
                            t[i.ads.impression] = i.tracking.ads.status.impression,
                            t[i.ads.limit] = i.tracking.ads.status.limit,
                            t[i.ads.ready] = i.tracking.ads.status.ready,
                            t[i.ads.requested] = i.tracking.ads.status.requested,
                            t[i.ads.prebidRequested] = i.tracking.ads.status.prebidRequested,
                            t[i.ads.skipped] = i.tracking.ads.status.skipped,
                            t[i.ads.started] = i.tracking.ads.status.started,
                            t[i.ads.video.clicked] = i.tracking.ads.video.clicked,
                            t[i.ads.video.error] = i.tracking.ads.video.error,
                            t[i.ads.video.loaderError] = i.tracking.ads.video.loaderError,
                            t[i.ads.video.buffering] = i.tracking.ads.status.buffering,
                            t[i.ads.video.progress] = i.tracking.ads.video.progress,
                            t[i.ads.video.paused] = i.tracking.ads.video.paused,
                            t[i.ads.video.resumed] = i.tracking.ads.video.resumed,
                            t[i.tracking.screen.gameplayStart] = i.tracking.screen.gameplayStart,
                            t[i.tracking.screen.gameplayStop] = i.tracking.screen.gameplayStop,
                            t[i.tracking.screen.loadingProgress] = i.tracking.screen.loadingProgress,
                            t[i.tracking.screen.commercialBreak] = i.tracking.screen.commercialBreak,
                            t[i.tracking.screen.rewardedBreak] = i.tracking.screen.rewardedBreak,
                            t[i.tracking.screen.happyTime] = i.tracking.screen.happyTime,
                            t);
                        Object.keys(n).forEach((function(t) {
                            a.addEventListener(t, (function(i) {
                                e.track(n[t], i)
                            }))
                        }))
                    },
                    e.debug = !1,
                    e
            }();
            const l = {
                adTagUrl: "//pubads.g.doubleclick.net/gampad/ads?sz=640x360|640x480&iu=/1053551/Pub-Poki-Generic&ciu_szs&impl=s&gdfp_req=1&env=vp&output=xml_vast2&unviewed_position_start=1&url={url}&description_url={descriptionUrl}&correlator={timestamp}",
                adTiming: {
                    preroll: !1,
                    timeBetweenAds: 12e4,
                    timePerTry: 7e3,
                    startAdsAfter: 12e4
                },
                waterfallRetries: 2
            };
            const u = function(e) {
                return e instanceof Array ? e : [e]
            };
            const p = function() {
                function e(e) {
                    void 0 === e && (e = {}),
                        this.setTimings(e),
                        this.timingIdx = {
                            timePerTry: 0
                        },
                        this.timers = {
                            timePerTry: void 0,
                            timeBetweenAds: void 0,
                            startAdsAfter: void 0
                        },
                        a.addEventListener(i.ads.requested, this.startTimeBetweenAdsTimer.bind(this)),
                        a.addEventListener(i.ads.completed, this.startTimeBetweenAdsTimer.bind(this)),
                        a.addEventListener(i.ads.stopped, this.startTimeBetweenAdsTimer.bind(this))
                }
                return e.prototype.setTimings = function(e) {
                        var t = l.adTiming,
                            n = e.preroll,
                            i = void 0 === n ? t.preroll : n,
                            r = e.timePerTry,
                            a = void 0 === r ? t.timePerTry : r,
                            o = e.timeBetweenAds,
                            s = void 0 === o ? t.timeBetweenAds : o,
                            d = e.startAdsAfter,
                            A = void 0 === d ? t.startAdsAfter : d;
                        this.timings = {
                            preroll: !1 !== i,
                            timePerTry: u(a),
                            timeBetweenAds: s,
                            startAdsAfter: A
                        }
                    },
                    e.prototype.startTimeBetweenAdsTimer = function() {
                        this.startTimer("timeBetweenAds")
                    },
                    e.prototype.startStartAdsAfterTimer = function() {
                        this.startTimer("startAdsAfter")
                    },
                    e.prototype.requestPossible = function() {
                        return !this.timers.timeBetweenAds && !this.timers.startAdsAfter
                    },
                    e.prototype.startWaterfallTimer = function(e) {
                        this.startTimer("timePerTry", e)
                    },
                    e.prototype.stopWaterfallTimer = function() {
                        this.stopTimer("timePerTry")
                    },
                    e.prototype.nextWaterfallTimer = function() {
                        this.nextTiming("timePerTry")
                    },
                    e.prototype.resetWaterfallTimerIdx = function() {
                        this.resetTimingIdx("timePerTry")
                    },
                    e.prototype.stopTimer = function(e) {
                        this.timers[e] && (clearTimeout(this.timers[e]),
                            this.timers[e] = void 0)
                    },
                    e.prototype.startTimer = function(e, t) {
                        var n = this;
                        void 0 === t && (t = function() {}),
                            this.getTiming(e) <= 0 ? t() : (this.timers[e] && clearTimeout(this.timers[e]),
                                this.timers[e] = window.setTimeout((function() {
                                    n.stopTimer(e),
                                        t()
                                }), this.getTiming(e)))
                    },
                    e.prototype.getTiming = function(e) {
                        var t = this.timings[e];
                        return t instanceof Array ? t[this.timingIdx[e]] : t
                    },
                    e.prototype.nextTiming = function(e) {
                        if (void 0 === this.timingIdx[e])
                            throw new Error("AdTimings Error: " + e + " does not have multiple timers");
                        this.timingIdx[e] = (this.timingIdx[e] + 1) % this.timings[e].length
                    },
                    e.prototype.resetTimingIdx = function(e) {
                        if (void 0 === this.timingIdx[e])
                            throw new Error("AdTimings Error: " + e + " does not have multiple timers");
                        this.timingIdx[e] = 0
                    },
                    e.prototype.prerollPossible = function() {
                        return this.timings.preroll
                    },
                    e
            }();
            var m = document.location.hostname;

            function h(e) {
                var t = new RegExp(e + "=([^;]+)(?:;|$)").exec(document.cookie);
                return t ? t[1] : ""
            }

            function g(e, t) {
                document.cookie = e + "=" + t + "; path=/; samesite=lax; max-age=15552000; domain=" + m
            }
            m.endsWith("poki-gdn.com") && (m = "poki-gdn.com");
            var f = function(e, t, n, i) {
                    return new(n || (n = Promise))((function(r, a) {
                        function o(e) {
                            try {
                                d(i.next(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function s(e) {
                            try {
                                d(i.throw(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function d(e) {
                            var t;
                            e.done ? r(e.value) : (t = e.value,
                                t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(o, s)
                        }
                        d((i = i.apply(e, t || [])).next())
                    }))
                },
                b = function(e, t) {
                    var n, i, r, a, o = {
                        label: 0,
                        sent: function() {
                            if (1 & r[0])
                                throw r[1];
                            return r[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                            next: s(0),
                            throw: s(1),
                            return: s(2)
                        },
                        "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                            return this
                        }),
                        a;

                    function s(a) {
                        return function(s) {
                            return function(a) {
                                if (n)
                                    throw new TypeError("Generator is already executing.");
                                for (; o;)
                                    try {
                                        if (n = 1,
                                            i && (r = 2 & a[0] ? i.return : a[0] ? i.throw || ((r = i.return) && r.call(i),
                                                0) : i.next) && !(r = r.call(i, a[1])).done)
                                            return r;
                                        switch (i = 0,
                                            r && (a = [2 & a[0], r.value]),
                                            a[0]) {
                                            case 0:
                                            case 1:
                                                r = a;
                                                break;
                                            case 4:
                                                return o.label++, {
                                                    value: a[1],
                                                    done: !1
                                                };
                                            case 5:
                                                o.label++,
                                                    i = a[1],
                                                    a = [0];
                                                continue;
                                            case 7:
                                                a = o.ops.pop(),
                                                    o.trys.pop();
                                                continue;
                                            default:
                                                if (!(r = o.trys,
                                                        (r = r.length > 0 && r[r.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                                    o = 0;
                                                    continue
                                                }
                                                if (3 === a[0] && (!r || a[1] > r[0] && a[1] < r[3])) {
                                                    o.label = a[1];
                                                    break
                                                }
                                                if (6 === a[0] && o.label < r[1]) {
                                                    o.label = r[1],
                                                        r = a;
                                                    break
                                                }
                                                if (r && o.label < r[2]) {
                                                    o.label = r[2],
                                                        o.ops.push(a);
                                                    break
                                                }
                                                r[2] && o.ops.pop(),
                                                    o.trys.pop();
                                                continue
                                        }
                                        a = t.call(e, o)
                                    } catch (e) {
                                        a = [6, e],
                                            i = 0
                                    } finally {
                                        n = r = 0
                                    }
                                if (5 & a[0])
                                    throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, s])
                        }
                    }
                },
                v = function() {
                    for (var e = 0, t = 0, n = arguments.length; t < n; t++)
                        e += arguments[t].length;
                    var i = Array(e),
                        r = 0;
                    for (t = 0; t < n; t++)
                        for (var a = arguments[t], o = 0, s = a.length; o < s; o++,
                            r++)
                            i[r] = a[o];
                    return i
                },
                k = "poki_gcuid",
                y = h(k);
            const w = function() {
                    function e() {}
                    return e.collectAndLog = function() {
                            return f(this, void 0, void 0, (function() {
                                var e, t, n, i, r;
                                return b(this, (function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return a.trys.push([0, 5, , 6]), [4, window.cookieStore.getAll()];
                                        case 1:
                                            return e = a.sent(),
                                                window.indexedDB.databases ? [4, window.indexedDB.databases()] : [3, 3];
                                        case 2:
                                            return n = a.sent(), [3, 4];
                                        case 3:
                                            n = [],
                                                a.label = 4;
                                        case 4:
                                            return t = n,
                                                i = v(e.map((function(e) {
                                                    return {
                                                        name: e.name,
                                                        expire_seconds: Math.round((e.expires - Date.now()) / 1e3),
                                                        type: "cookie"
                                                    }
                                                })), Object.keys(window.localStorage).map((function(e) {
                                                    return {
                                                        name: e,
                                                        expire_seconds: 15552e3,
                                                        type: "localStorage"
                                                    }
                                                })), t.map((function(e) {
                                                    return {
                                                        name: e.name,
                                                        expire_seconds: 0,
                                                        type: "idb"
                                                    }
                                                }))),
                                                r = {
                                                    cookies: i,
                                                    p4d_game_id: Ne.gameId,
                                                    user_id: y
                                                },
                                                window.fetch("https://t.poki.io/game-cookies", {
                                                    method: "post",
                                                    body: JSON.stringify(r)
                                                }).catch(), [3, 6];
                                        case 5:
                                            return a.sent(), [3, 6];
                                        case 6:
                                            return [2]
                                    }
                                }))
                            }))
                        },
                        e.trackSavegames = function() {
                            window.cookieStore && window.cookieStore.getAll && Ne.gameId && (Math.random() > .01 || (y || (y = Math.random().toString(36).substr(2, 9),
                                    g(k, y)),
                                e.collectAndLog(),
                                setInterval(e.collectAndLog, 12e4)))
                        },
                        e
                }(),
                S = function() {
                    return window.location.href
                },
                I = function() {
                    return "undefined" != typeof navigator && /(?:phone|windows\s+phone|ipod|blackberry|(?:android|bb\d+|meego|silk|googlebot) .+? mobile|palm|windows\s+ce|opera\smini|avantgo|mobilesafari|docomo)/i.test(navigator.userAgent)
                },
                E = function() {
                    return "undefined" != typeof navigator && /(?:ipad|playbook|(?:android|bb\d+|meego|silk)(?! .+? mobile))/i.test(navigator.userAgent)
                },
                x = function(e, t) {
                    if ("undefined" == typeof window)
                        return "";
                    e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                    var n = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(t || window.location.search);
                    return null === n ? "" : decodeURIComponent(n[1].replace(/\+/g, " "))
                },
                C = function() {
                    return "undefined" != typeof navigator && /MSIE \\d|Trident.*rv:/i.test(navigator.userAgent)
                };
            var T = {
                1: "eNjDw1AVTr",
                2: "HkuQJaWnBa",
                3: "AfRKClvdYk",
                4: "Db7uYbsnlW",
                5: "UprdYKe74r",
                6: "eHFDjD5npr",
                7: "mm1jSFJjLl",
                8: "tJ44vpLpuM",
                9: "mF5ASaga4A",
                10: "rKV8rMwiwk",
                11: "SvK8BH5qS5",
                12: "qjcaVGp8Hs",
                13: "ysxIcmt3tW",
                14: "fz6aK9wMQe",
                15: "RU6ebIFLw9",
                16: "r9G4tVMYw7",
                17: "SgcDa5B8s1",
                18: "9wDNMnChv6",
                19: "DNZX8XdJXV",
                20: "39o4YUyZTX",
                21: "5sb2HFpz5a",
                22: "pgXzCJZipE",
                23: "Oani8EAGI9",
                24: "IzCeh7d7vW",
                25: "I5vRNtjoMr",
                26: "KpySvG7luq",
                27: "dK42J4rI14",
                28: "HuYorw3fRg",
                29: "mf84cGYc1h",
                30: "I2v6sQKXVD",
                31: "lBzSdVGY8F",
                32: "hKYgk9Wb8q",
                33: "xPBr8E54eE",
                34: "ZvIK2WKC7G",
                35: "7kiYi3zlIX",
                36: "VpygYMTDgm",
                37: "mis9Mt4np4",
                38: "451KJIoEIh",
                41: "Fqmjp9Hit3",
                42: "lS2XGg058L",
                43: "3uFf2PlICy",
                46: "voeIq5uRvl",
                47: "21OybbiIdc",
                48: "9i3RwPHzWW",
                49: "CMVoMvvEmu",
                50: "IoQrhRb3wU"
            };
            const B = function(e) {
                    return T[e] || ""
                },
                P = function() {
                    try {
                        return window.self !== window.top
                    } catch (e) {
                        return !0
                    }
                };
            var _ = function() {
                    return (_ = Object.assign || function(e) {
                        for (var t, n = 1, i = arguments.length; n < i; n++)
                            for (var r in t = arguments[n])
                                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                        return e
                    }).apply(this, arguments)
                },
                D = function() {
                    for (var e = 0, t = 0, n = arguments.length; t < n; t++)
                        e += arguments[t].length;
                    var i = Array(e),
                        r = 0;
                    for (t = 0; t < n; t++)
                        for (var a = arguments[t], o = 0, s = a.length; o < s; o++,
                            r++)
                            i[r] = a[o];
                    return i
                },
                L = parseInt(x("site_id"), 10) || 0,
                M = "desktop";
            I() && (M = "mobile"),
                E() && (M = "tablet");
            var R, O, z, j = "rewarded",
                Q = "video",
                G = {
                    "728x90": "/21682198607/" + M + "_ingame_728x90/" + L + "_" + M + "_ingame_728x90",
                    "300x250": "/21682198607/" + M + "_ingame_300x250/" + L + "_" + M + "_ingame_300x250",
                    "970x250": "/21682198607/" + M + "_ingame_970x250/" + L + "_" + M + "_ingame_970x250",
                    "160x600": "/21682198607/" + M + "_ingame_160x600/" + L + "_" + M + "_ingame_160x600",
                    "320x50": "/21682198607/" + M + "_ingame_320x50/" + L + "_" + M + "_ingame_320x50",
                    "728x90_external": "/21682198607/external_" + M + "_display_ingame/external_" + M + "_ingame_728x90",
                    "300x250_external": "/21682198607/external_" + M + "_display_ingame/external_" + M + "_ingame_300x250",
                    "970x250_external": "/21682198607/external_" + M + "_display_ingame/external_" + M + "_ingame_970x250",
                    "160x600_external": "/21682198607/external_" + M + "_display_ingame/external_" + M + "_ingame_160x600",
                    "320x50_external": "/21682198607/external_" + M + "_display_ingame/external_" + M + "_ingame_320x50"
                },
                X = (R = parseInt(x("site_id"), 10) || 0,
                    O = C() || I() || E() ? ["video/mp4"] : ["video/mp4", "video/webm", "video/ogg"], {
                        bids: [{
                            bidder: "appnexus",
                            params: _(_({
                                placementId: 13184250,
                                maxduration: 15
                            }, z = {
                                allowSmallerSizes: !0,
                                frameworks: [2],
                                h: 480,
                                w: 640,
                                video: {
                                    playback_method: ["auto_play_sound_on", "auto_play_sound_off", "auto_play_sound_unknown"]
                                }
                            }), {
                                video: _(_({}, z.video), {
                                    skippable: !0
                                })
                            })
                        }, {
                            bidder: "appnexus",
                            params: _(_({
                                placementId: 13184309,
                                maxduration: 15
                            }, z), {
                                video: _(_({}, z.video), {
                                    skippable: !1,
                                    maxduration: 15
                                })
                            })
                        }, {
                            bidder: "openx",
                            params: {
                                unit: "540105196",
                                delDomain: "poki-d.openx.net",
                                openrtb: {
                                    imp: [{
                                        video: {
                                            mimes: [O.join(",")],
                                            protocols: [2, 3, 5, 6, 7, 8],
                                            maxduration: 15,
                                            skip: 1,
                                            skipafter: 5,
                                            w: 640,
                                            h: 480
                                        }
                                    }]
                                }
                            }
                        }, {
                            bidder: "openx",
                            params: {
                                unit: "540719065",
                                delDomain: "poki-d.openx.net",
                                openrtb: {
                                    imp: [{
                                        video: {
                                            mimes: [O.join(",")],
                                            protocols: [2, 3, 5, 6, 7, 8],
                                            maxduration: 15,
                                            skip: 0,
                                            w: 640,
                                            h: 480
                                        }
                                    }]
                                }
                            }
                        }, {
                            bidder: "districtm",
                            params: _(_({
                                placementId: 12906789,
                                maxduration: 15
                            }, z), {
                                video: _(_({}, z.video), {
                                    skippable: !1,
                                    maxduration: 15
                                })
                            })
                        }, {
                            bidder: "spotx",
                            params: {
                                channel_id: "265590",
                                ad_unit: "instream",
                                secure: !0,
                                mimes: O,
                                hide_skin: !0
                            }
                        }, {
                            bidder: "ix",
                            params: {
                                siteId: "436284",
                                size: [640, 480],
                                video: {
                                    mimes: O,
                                    protocols: [2, 3, 5, 6, 7, 8],
                                    minduration: 0,
                                    maxduration: 15,
                                    api: [1, 2]
                                }
                            }
                        }, {
                            bidder: "richaudience",
                            params: {
                                pid: B(R),
                                supplyType: "site"
                            }
                        }],
                        mediaTypes: {
                            video: {
                                context: "instream",
                                playerSize: [640, 480],
                                mimes: O,
                                protocols: [2, 3, 5, 6, 7, 8],
                                maxduration: 15,
                                skip: 1,
                                linearity: 1,
                                api: [2]
                            }
                        }
                    }),
                Z = [{
                    code: Q,
                    mediaTypes: X.mediaTypes,
                    bids: D(X.bids, [{
                        bidder: "rubicon",
                        params: {
                            accountId: "18608",
                            siteId: "266914",
                            zoneId: "1322034",
                            video: {
                                size_id: 204
                            }
                        }
                    }])
                }, {
                    code: j,
                    mediaTypes: X.mediaTypes,
                    bids: D(X.bids, [{
                        bidder: "rubicon",
                        params: {
                            accountId: "18608",
                            siteId: "266916",
                            zoneId: "1322048",
                            video: {
                                size_id: 202
                            }
                        }
                    }])
                }, {
                    code: G["728x90"],
                    mediaTypes: {
                        banner: {
                            sizes: [
                                [728, 90]
                            ]
                        }
                    },
                    bids: [{
                        bidder: "districtm",
                        params: {
                            placementId: "12906789"
                        }
                    }, {
                        bidder: "appnexus",
                        params: {
                            placementId: "12940427"
                        }
                    }, {
                        bidder: "openx",
                        params: {
                            unit: "539859872",
                            delDomain: "poki-d.openx.net"
                        }
                    }, {
                        bidder: "ix",
                        params: {
                            siteId: "268177",
                            size: [728, 90]
                        }
                    }, {
                        bidder: "pubmatic",
                        params: {
                            publisherId: "156838",
                            adSlot: "1374895@728x90"
                        }
                    }, {
                        bidder: "emx_digital",
                        params: {
                            tagid: "80117"
                        }
                    }, {
                        bidder: "conversant",
                        params: {
                            site_id: "117477",
                            secure: 1,
                            position: 1
                        }
                    }, {
                        bidder: "rubicon",
                        params: {
                            accountId: "18608",
                            siteId: "204596",
                            zoneId: "1008080"
                        }
                    }, {
                        bidder: "onetag",
                        params: {
                            pubId: "6da09f566a9dc06"
                        }
                    }]
                }, {
                    code: G["300x250"],
                    mediaTypes: {
                        banner: {
                            sizes: [
                                [300, 250]
                            ]
                        }
                    },
                    bids: [{
                        bidder: "districtm",
                        params: {
                            placementId: "12906789"
                        }
                    }, {
                        bidder: "appnexus",
                        params: {
                            placementId: "12935252"
                        }
                    }, {
                        bidder: "openx",
                        params: {
                            unit: "539859873",
                            delDomain: "poki-d.openx.net"
                        }
                    }, {
                        bidder: "ix",
                        params: {
                            siteId: "268178",
                            size: [300, 250]
                        }
                    }, {
                        bidder: "pubmatic",
                        params: {
                            publisherId: "156838",
                            adSlot: "1374896@300x250"
                        }
                    }, {
                        bidder: "emx_digital",
                        params: {
                            tagid: "80118"
                        }
                    }, {
                        bidder: "conversant",
                        params: {
                            site_id: "117477",
                            secure: 1,
                            position: 1
                        }
                    }, {
                        bidder: "rubicon",
                        params: {
                            accountId: "18608",
                            siteId: "204596",
                            zoneId: "1008080"
                        }
                    }, {
                        bidder: "onetag",
                        params: {
                            pubId: "6da09f566a9dc06"
                        }
                    }]
                }, {
                    code: G["970x250"],
                    mediaTypes: {
                        banner: {
                            sizes: [
                                [970, 250]
                            ]
                        }
                    },
                    bids: [{
                        bidder: "districtm",
                        params: {
                            placementId: "12906789"
                        }
                    }, {
                        bidder: "appnexus",
                        params: {
                            placementId: "20595278"
                        }
                    }, {
                        bidder: "openx",
                        params: {
                            unit: "543540497",
                            delDomain: "poki-d.openx.net"
                        }
                    }, {
                        bidder: "ix",
                        params: {
                            siteId: "597527",
                            size: [970, 250]
                        }
                    }, {
                        bidder: "pubmatic",
                        params: {
                            publisherId: "156838",
                            adSlot: "3344351@970x250"
                        }
                    }, {
                        bidder: "emx_digital",
                        params: {
                            tagid: "123738"
                        }
                    }, {
                        bidder: "conversant",
                        params: {
                            site_id: "117477",
                            secure: 1,
                            position: 1
                        }
                    }, {
                        bidder: "onetag",
                        params: {
                            pubId: "6da09f566a9dc06"
                        }
                    }]
                }, {
                    code: G["160x600"],
                    mediaTypes: {
                        banner: {
                            sizes: [
                                [160, 600]
                            ]
                        }
                    },
                    bids: [{
                        bidder: "districtm",
                        params: {
                            placementId: "12906789"
                        }
                    }, {
                        bidder: "appnexus",
                        params: {
                            placementId: "12940425"
                        }
                    }, {
                        bidder: "openx",
                        params: {
                            unit: "539859871",
                            delDomain: "poki-d.openx.net"
                        }
                    }, {
                        bidder: "ix",
                        params: {
                            siteId: "268175",
                            size: [160, 600]
                        }
                    }, {
                        bidder: "pubmatic",
                        params: {
                            publisherId: "156838",
                            adSlot: "1374893@160x600"
                        }
                    }, {
                        bidder: "emx_digital",
                        params: {
                            tagid: "80119"
                        }
                    }, {
                        bidder: "conversant",
                        params: {
                            site_id: "117477",
                            secure: 1,
                            position: 1
                        }
                    }, {
                        bidder: "rubicon",
                        params: {
                            accountId: "18608",
                            siteId: "204596",
                            zoneId: "1008080"
                        }
                    }, {
                        bidder: "onetag",
                        params: {
                            pubId: "6da09f566a9dc06"
                        }
                    }]
                }, {
                    code: G["320x50"],
                    mediaTypes: {
                        banner: {
                            sizes: [
                                [320, 50]
                            ]
                        }
                    },
                    bids: [{
                        bidder: "districtm",
                        params: {
                            placementId: "12906789"
                        }
                    }, {
                        bidder: "appnexus",
                        params: {
                            placementId: "20595224"
                        }
                    }, {
                        bidder: "openx",
                        params: {
                            unit: "543540495",
                            delDomain: "poki-d.openx.net"
                        }
                    }, {
                        bidder: "ix",
                        params: {
                            siteId: "597529",
                            size: [320, 50]
                        }
                    }, {
                        bidder: "pubmatic",
                        params: {
                            publisherId: "156838",
                            adSlot: "3344350@320x50"
                        }
                    }, {
                        bidder: "conversant",
                        params: {
                            site_id: "117477",
                            secure: 1,
                            position: 1
                        }
                    }, {
                        bidder: "rubicon",
                        params: {
                            accountId: "18608",
                            siteId: "204596",
                            zoneId: "1008080"
                        }
                    }, {
                        bidder: "emx_digital",
                        params: {
                            tagid: "123737"
                        }
                    }, {
                        bidder: "onetag",
                        params: {
                            pubId: "6da09f566a9dc06"
                        }
                    }]
                }, {
                    code: G["728x90_external"],
                    mediaTypes: {
                        banner: {
                            sizes: [
                                [728, 90]
                            ]
                        }
                    },
                    bids: [{
                        bidder: "districtm",
                        params: {
                            placementId: "12906789"
                        }
                    }, {
                        bidder: "appnexus",
                        params: {
                            placementId: "20973406"
                        }
                    }, {
                        bidder: "openx",
                        params: {
                            unit: "543885656",
                            delDomain: "poki-d.openx.net"
                        }
                    }, {
                        bidder: "ix",
                        params: {
                            siteId: "268177",
                            placementId: "625562",
                            size: [728, 90]
                        }
                    }, {
                        bidder: "pubmatic",
                        params: {
                            publisherId: "156838",
                            adSlot: "3457872"
                        }
                    }, {
                        bidder: "emx_digital",
                        params: {
                            tagid: "132973"
                        }
                    }, {
                        bidder: "conversant",
                        params: {
                            site_id: "117477",
                            tag_id: "96373699",
                            secure: 1,
                            position: 1
                        }
                    }, {
                        bidder: "rubicon",
                        params: {
                            accountId: "18608",
                            siteId: "362566",
                            zoneId: "1962680-2"
                        }
                    }, {
                        bidder: "onetag",
                        params: {
                            pubId: "6da09f566a9dc06"
                        }
                    }]
                }, {
                    code: G["300x250_external"],
                    mediaTypes: {
                        banner: {
                            sizes: [
                                [300, 250]
                            ]
                        }
                    },
                    bids: [{
                        bidder: "districtm",
                        params: {
                            placementId: "12906789"
                        }
                    }, {
                        bidder: "appnexus",
                        params: {
                            placementId: "20973408"
                        }
                    }, {
                        bidder: "openx",
                        params: {
                            unit: "543885657",
                            delDomain: "poki-d.openx.net"
                        }
                    }, {
                        bidder: "ix",
                        params: {
                            siteId: "625564",
                            size: [300, 250]
                        }
                    }, {
                        bidder: "pubmatic",
                        params: {
                            publisherId: "156838",
                            adSlot: "3457874"
                        }
                    }, {
                        bidder: "emx_digital",
                        params: {
                            tagid: "132975"
                        }
                    }, {
                        bidder: "conversant",
                        params: {
                            site_id: "117477",
                            tag_id: "94f55c24",
                            secure: 1,
                            position: 1
                        }
                    }, {
                        bidder: "rubicon",
                        params: {
                            accountId: "18608",
                            siteId: "362566",
                            zoneId: "1962680-15"
                        }
                    }, {
                        bidder: "onetag",
                        params: {
                            pubId: "6da09f566a9dc06"
                        }
                    }]
                }, {
                    code: G["970x250_external"],
                    mediaTypes: {
                        banner: {
                            sizes: [
                                [970, 250]
                            ]
                        }
                    },
                    bids: [{
                        bidder: "districtm",
                        params: {
                            placementId: "12906789"
                        }
                    }, {
                        bidder: "appnexus",
                        params: {
                            placementId: "20973415"
                        }
                    }, {
                        bidder: "openx",
                        params: {
                            unit: "543885650",
                            delDomain: "poki-d.openx.net"
                        }
                    }, {
                        bidder: "ix",
                        params: {
                            siteId: "625560",
                            size: [970, 250]
                        }
                    }, {
                        bidder: "pubmatic",
                        params: {
                            publisherId: "156838",
                            adSlot: "3457879"
                        }
                    }, {
                        bidder: "emx_digital",
                        params: {
                            tagid: "132979"
                        }
                    }, {
                        bidder: "conversant",
                        params: {
                            site_id: "117477",
                            tag_id: "62235ccb",
                            secure: 1,
                            position: 1
                        }
                    }, {
                        bidder: "rubicon",
                        params: {
                            accountId: "18608",
                            siteId: "362566",
                            zoneId: "1962680-57"
                        }
                    }, {
                        bidder: "onetag",
                        params: {
                            pubId: "6da09f566a9dc06"
                        }
                    }]
                }, {
                    code: G["160x600_external"],
                    mediaTypes: {
                        banner: {
                            sizes: [
                                [160, 600]
                            ]
                        }
                    },
                    bids: [{
                        bidder: "districtm",
                        params: {
                            placementId: "12906789"
                        }
                    }, {
                        bidder: "appnexus",
                        params: {
                            placementId: "20973407"
                        }
                    }, {
                        bidder: "openx",
                        params: {
                            unit: "543885653",
                            delDomain: "poki-d.openx.net"
                        }
                    }, {
                        bidder: "ix",
                        params: {
                            siteId: "625563",
                            size: [160, 600]
                        }
                    }, {
                        bidder: "pubmatic",
                        params: {
                            publisherId: "156838",
                            adSlot: "3457877"
                        }
                    }, {
                        bidder: "emx_digital",
                        params: {
                            tagid: "132974"
                        }
                    }, {
                        bidder: "conversant",
                        params: {
                            site_id: "117477",
                            tag_id: "9960183e",
                            secure: 1,
                            position: 1
                        }
                    }, {
                        bidder: "rubicon",
                        params: {
                            accountId: "18608",
                            siteId: "362566",
                            zoneId: "1962680-9"
                        }
                    }, {
                        bidder: "onetag",
                        params: {
                            pubId: "6da09f566a9dc06"
                        }
                    }]
                }, {
                    code: G["320x50_external"],
                    mediaTypes: {
                        banner: {
                            sizes: [
                                [320, 50]
                            ]
                        }
                    },
                    bids: [{
                        bidder: "districtm",
                        params: {
                            placementId: "12906789"
                        }
                    }, {
                        bidder: "appnexus",
                        params: {
                            placementId: "20973413"
                        }
                    }, {
                        bidder: "openx",
                        params: {
                            unit: "543885649",
                            delDomain: "poki-d.openx.net"
                        }
                    }, {
                        bidder: "ix",
                        params: {
                            siteId: "625559",
                            size: [320, 50]
                        }
                    }, {
                        bidder: "pubmatic",
                        params: {
                            publisherId: "156838",
                            adSlot: "3457875"
                        }
                    }, {
                        bidder: "conversant",
                        params: {
                            site_id: "117477",
                            tag_id: "402db827",
                            secure: 1,
                            position: 1
                        }
                    }, {
                        bidder: "rubicon",
                        params: {
                            accountId: "18608",
                            siteId: "362566",
                            zoneId: "1962680-43"
                        }
                    }, {
                        bidder: "emx_digital",
                        params: {
                            tagid: "132978"
                        }
                    }, {
                        bidder: "onetag",
                        params: {
                            pubId: "6da09f566a9dc06"
                        }
                    }]
                }, {
                    code: G["468x60_external"],
                    mediaTypes: {
                        banner: {
                            sizes: [
                                [480, 60]
                            ]
                        }
                    },
                    bids: [{
                        bidder: "districtm",
                        params: {
                            placementId: "12906789"
                        }
                    }, {
                        bidder: "appnexus",
                        params: {
                            placementId: "20973409"
                        }
                    }, {
                        bidder: "openx",
                        params: {
                            unit: "543885658",
                            delDomain: "poki-d.openx.net"
                        }
                    }, {
                        bidder: "ix",
                        params: {
                            siteId: "625565",
                            size: [480, 60]
                        }
                    }, {
                        bidder: "pubmatic",
                        params: {
                            publisherId: "156838",
                            adSlot: "3457880"
                        }
                    }, {
                        bidder: "conversant",
                        params: {
                            site_id: "117477",
                            tag_id: "e8872afe",
                            secure: 1,
                            position: 1
                        }
                    }, {
                        bidder: "rubicon",
                        params: {
                            accountId: "18608",
                            siteId: "362566",
                            zoneId: "1962680-1"
                        }
                    }, {
                        bidder: "emx_digital",
                        params: {
                            tagid: "132976"
                        }
                    }, {
                        bidder: "onetag",
                        params: {
                            pubId: "6da09f566a9dc06"
                        }
                    }]
                }, {
                    code: G["320x100_external"],
                    mediaTypes: {
                        banner: {
                            sizes: [
                                [320, 100]
                            ]
                        }
                    },
                    bids: [{
                        bidder: "districtm",
                        params: {
                            placementId: "12906789"
                        }
                    }, {
                        bidder: "appnexus",
                        params: {
                            placementId: "20973412"
                        }
                    }, {
                        bidder: "openx",
                        params: {
                            unit: "543885655",
                            delDomain: "poki-d.openx.net"
                        }
                    }, {
                        bidder: "ix",
                        params: {
                            siteId: "625561",
                            size: [320, 100]
                        }
                    }, {
                        bidder: "pubmatic",
                        params: {
                            publisherId: "156838",
                            adSlot: "3457876"
                        }
                    }, {
                        bidder: "conversant",
                        params: {
                            site_id: "117477",
                            tag_id: "c2a891f3",
                            secure: 1,
                            position: 1
                        }
                    }, {
                        bidder: "rubicon",
                        params: {
                            accountId: "18608",
                            siteId: "362566",
                            zoneId: "1962680-117"
                        }
                    }, {
                        bidder: "emx_digital",
                        params: {
                            tagid: "132977"
                        }
                    }, {
                        bidder: "onetag",
                        params: {
                            pubId: "6da09f566a9dc06"
                        }
                    }]
                }],
                N = {
                    EUR: {
                        EUR: 1,
                        GBP: .858595,
                        USD: 1.13151
                    },
                    GBP: {
                        EUR: 1.164693481792929,
                        GBP: 1,
                        USD: 1.3178623215835172
                    },
                    USD: {
                        EUR: .8837747788353616,
                        GBP: .7588046062341472,
                        USD: 1
                    }
                },
                F = {
                    debug: !1,
                    enableSendAllBids: !0,
                    usePrebidCache: !0,
                    bidderTimeout: 1500,
                    priceGranularity: {
                        buckets: [{
                            precision: 2,
                            min: .01,
                            max: 3,
                            increment: .01
                        }, {
                            precision: 2,
                            min: 3,
                            max: 8,
                            increment: .05
                        }, {
                            precision: 2,
                            min: 8,
                            max: 20,
                            increment: .5
                        }, {
                            precision: 2,
                            min: 20,
                            max: 45,
                            increment: 1
                        }]
                    },
                    currency: {
                        adServerCurrency: "EUR",
                        rates: N,
                        defaultRates: N,
                        bidderCurrencyDefault: {
                            openx: "EUR"
                        }
                    },
                    cache: {
                        url: "https://prebid.adnxs.com/pbc/v1/cache"
                    },
                    userSync: {
                        filterSettings: {
                            all: {
                                bidders: "*",
                                filter: "include"
                            }
                        },
                        syncsPerBidder: 1e3,
                        syncDelay: 100,
                        userIds: [{
                            name: "pubCommonId",
                            storage: {
                                type: "cookie",
                                name: "poki_pubcid",
                                expires: 180
                            }
                        }]
                    }
                },
                W = !1,
                H = function() {
                    ! function() {
                        if (!window.__tcfapi) {
                            var e = window.parent;
                            Fe.GetIsPokiIFrame() && (e = window.top);
                            var t = {};
                            window.__tcfapi = function(n, i, r, a) {
                                    if (!Fe.GetIsPokiIFrame() && !P())
                                        return r({
                                                msg: "CMP not found"
                                            }, !1),
                                            void console.error("A TCFv2 compliant CMP should be added to this game");
                                    var o = "" + Math.random(),
                                        s = {
                                            __tcfapiCall: {
                                                command: n,
                                                parameter: a,
                                                version: i,
                                                callId: o
                                            }
                                        };
                                    t[o] = r,
                                        e.postMessage(s, "*")
                                },
                                window.addEventListener("message", (function(e) {
                                    var n = {};
                                    try {
                                        n = "string" == typeof e.data ? JSON.parse(e.data) : e.data
                                    } catch (e) {}
                                    var i = n.__tcfapiReturn;
                                    i && "function" == typeof t[i.callId] && (t[i.callId](i.returnValue, i.success),
                                        t[i.callId] = null)
                                }), !1)
                        }
                    }(),
                    window.pbjs.que.push((function() {
                        window.pbjs.setConfig({
                            consentManagement: {
                                gdpr: {
                                    cmpApi: "iab",
                                    timeout: 8e3,
                                    defaultGdprScope: !0
                                }
                            }
                        })
                    }))
                },
                U = function() {
                    ! function() {
                        if (!window.__uspapi) {
                            var e = {};
                            window.__uspapi = function(t, n, i) {
                                    if (!Fe.GetIsPokiIFrame() && !P())
                                        return i({
                                                msg: "CMP not found"
                                            }, !1),
                                            void console.error("A US privacy (__uspapi) compliant CMP should be added to this game");
                                    var r = "" + Math.random(),
                                        a = {
                                            __uspapiCall: {
                                                command: t,
                                                version: n,
                                                callId: r
                                            }
                                        };
                                    e[r] = i,
                                        window.parent.postMessage(a, "*")
                                },
                                window.addEventListener("message", (function(t) {
                                    var n = t && t.data && t.data.__uspapiReturn;
                                    n && n.callId && "function" == typeof e[n.callId] && (e[n.callId](n.returnValue, n.success),
                                        e[n.callId] = null)
                                }), !1)
                        }
                    }(),
                    window.pbjs.que.push((function() {
                        window.pbjs.setConfig({
                            consentManagement: {
                                usp: {
                                    cmpApi: "iab",
                                    timeout: 8e3
                                }
                            }
                        })
                    }))
                };

            function V(e) {
                try {
                    var t = window.pbjs.getBidResponsesForAdUnitCode(e).bids;
                    window.pokiAuctionsSeen || (window.pokiAuctionsSeen = {}),
                        window.pokiAuctionsSeen[e] || (window.pokiAuctionsSeen[e] = {});
                    var n = 0;
                    if (t) {
                        for (var i = 0; i < t.length; i++)
                            if (!window.pokiAuctionsSeen[e][t[i].auctionId]) {
                                var r = t[i].cpm;
                                r && r > n && (n = r)
                            }
                        for (i = 0; i < t.length; i++)
                            window.pokiAuctionsSeen[e][t[i].auctionId] = !0
                    }
                    return n
                } catch (e) {
                    console.error(e)
                }
                return 0
            }
            const K = function() {
                function e(e, t) {
                    void 0 === t && (t = {}),
                        this.retries = 0,
                        this.running = !1,
                        this.ima = e,
                        this.siteID = t.siteID || 3,
                        0 === t.siteID && (t.siteID = 3),
                        this.totalRetries = t.totalRetries || l.waterfallRetries || 1,
                        this.timing = t.timing || new p(l.adTiming),
                        this.overwriteAdTagUrls = t.adTagUrl ? u(t.adTagUrl) : [],
                        a.addEventListener(i.ads.video.error, this.moveThroughWaterfall.bind(this)),
                        a.addEventListener(i.ads.video.loaderError, this.moveThroughWaterfall.bind(this)),
                        a.addEventListener(i.ads.ready, this.timing.stopWaterfallTimer.bind(this.timing)),
                        a.addEventListener(i.ads.started, this.stopWaterfall.bind(this))
                }
                return e.prototype.moveThroughWaterfall = function() {
                        if (!1 !== this.running) {
                            if (this.timing.stopWaterfallTimer(),
                                this.retries < this.totalRetries)
                                return this.timing.nextWaterfallTimer(),
                                    void this.requestAd();
                            this.running = !1,
                                this.timing.resetWaterfallTimerIdx(),
                                a.dispatchEvent(i.ads.error, {
                                    message: "No ads"
                                })
                        }
                    },
                    e.prototype.cutOffWaterfall = function() {
                        this.ima.tearDown(),
                            this.moveThroughWaterfall()
                    },
                    e.prototype.buildAdTagUrls = function(e) {
                        var t = "&ciu_szs&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&url={url}&description_url={descriptionUrl}&correlator={timestamp}";
                        if (this.debug) {
                            var n = "https://securepubads.g.doubleclick.net/gampad/ads?sz=640x360|640x480&iu=/21682198607/debug-video/";
                            return e === i.ads.position.rewarded ? [n + "debug-video-rewarded" + t] : e === i.ads.position.preroll ? [n + "debug-video-preroll" + t] : [n + "debug-video-midroll" + t]
                        }
                        if (this.overwriteAdTagUrls.length > 0 && Fe.GetIsPokiPlatform())
                            return this.overwriteAdTagUrls;
                        var r = "desktop",
                            a = "midroll";
                        I() ? r = "mobile" : E() && (r = "tablet"),
                            e === i.ads.position.rewarded && (a = "rewarded");
                        var o = "https://securepubads.g.doubleclick.net/gampad/ads?sz=640x360|640x480&iu=/21682198607/";
                        return Fe.GetIsPokiIFrame() ? ["" + o + r + "_ingame_" + a + "_1/" + this.siteID + "_" + r + "_ingame_" + a + "_1" + t, "" + o + r + "_ingame_" + a + "_2/" + this.siteID + "_" + r + "_ingame_" + a + "_2" + t] : [o + "external_" + r + "_video_1/external_" + r + "_ingame_" + a + "_1" + t, o + "external_" + r + "_video_2/external_" + r + "_ingame_" + a + "_2" + t]
                    },
                    e.prototype.start = function(e, t) {
                        void 0 === e && (e = {}),
                            this.running = !0,
                            this.retries = 0,
                            this.criteria = e,
                            this.timing.resetWaterfallTimerIdx(),
                            this.rewarded = t === i.ads.position.rewarded,
                            this.adTagUrls = this.buildAdTagUrls(t),
                            this.requestAd()
                    },
                    e.prototype.requestAd = function() {
                        this.timing.startWaterfallTimer(this.cutOffWaterfall.bind(this)),
                            this.retries++,
                            Fe.GetIsPokiPlatform() || (this.criteria.waterfall = this.retries);
                        var e = (this.retries - 1) % this.adTagUrls.length,
                            t = this.adTagUrls[e];
                        Fe.consentString && Fe.consentString.length > 0 && (this.criteria.consent_string = Fe.consentString);
                        var n, r, o = function(e) {
                            var t = S().split("?"),
                                n = encodeURIComponent(t[0]);
                            return (e = e.split("{descriptionUrl}").join(n)).split("{timestamp}").join((new Date).getTime().toString())
                        }(t) + (n = this.criteria,
                            r = "",
                            Object.keys(n).forEach((function(e) {
                                if (Object.prototype.hasOwnProperty.call(n, e)) {
                                    var t = n[e];
                                    Array.isArray(t) && (t = t.join()),
                                        r += e + "=" + t + "&"
                                }
                            })),
                            "&cust_params=" + (r = encodeURIComponent(r)) + "&");
                        Fe.childDirected && (o += "&tfcd=1"),
                            Fe.nonPersonalized && (o += "&npa=1"),
                            a.setDataAnnotations({
                                adTagUrl: o,
                                waterfall: this.retries
                            }),
                            a.dispatchEvent(i.ads.requested),
                            1 !== this.retries || I() || E() ? (console.debug("adRequest started in plain mode"),
                                this.ima.requestAd(o)) : (console.debug("adRequest started with Prebid Video enabled"),
                                function(e, t, n, r) {
                                    if (window.pbjs && window.pbjs.que && window.pbjs.getConfig) {
                                        var o, s = S().split("?"),
                                            d = encodeURIComponent(s[0]),
                                            A = r ? j : Q,
                                            c = 1,
                                            l = function() {
                                                if (!(--c > 0))
                                                    try {
                                                        a.dispatchEvent(i.ads.prebidRequested);
                                                        var r = window.pbjs.adUnits.filter((function(e) {
                                                            return e.code === A
                                                        }))[0];
                                                        if ("undefined" === r)
                                                            return console.error("Video-ad-unit not found, did you give it the adunit.code='video' value?"),
                                                                void e.requestAd(t);
                                                        var s = window.pbjs.adServers.dfp.buildVideoUrl({
                                                            adUnit: r,
                                                            params: {
                                                                iu: x("iu", t),
                                                                sz: "640x360|640x480",
                                                                output: "vast",
                                                                cust_params: n,
                                                                description_url: d
                                                            }
                                                        });
                                                        window.pbjs.markWinningBidAsUsed({
                                                                adUnitCode: A
                                                            }),
                                                            o && (s = s.replace("cust_params=", "cust_params=" + o + "%26")),
                                                            e.requestAd(s)
                                                    } catch (n) {
                                                        e.requestAd(t)
                                                    }
                                            };
                                        W && (c++,
                                                window.apstag.fetchBids({
                                                    slots: [{
                                                        slotID: r ? "Rewarded" : "Midroll",
                                                        mediaType: "video"
                                                    }],
                                                    timeout: F.bidderTimeout
                                                }, (function(e) {
                                                    e.length > 0 && (o = e[0].encodedQsParams),
                                                        l()
                                                }))),
                                            window.pbjs.que.push((function() {
                                                window.pbjs.requestBids({
                                                    adUnitCodes: [A],
                                                    bidsBackHandler: function() {
                                                        l()
                                                    }
                                                })
                                            }))
                                    } else
                                        e.requestAd(t)
                                }(this.ima, o, this.criteria, this.rewarded))
                    },
                    e.prototype.isRunning = function() {
                        return this.running
                    },
                    e.prototype.stopWaterfall = function() {
                        this.running = !1,
                            this.timing.stopWaterfallTimer(),
                            this.timing.resetWaterfallTimerIdx()
                    },
                    e.prototype.setDebug = function(e) {
                        this.debug = e
                    },
                    e
            }();
            var J = "pokiSdkContainer",
                q = "pokiSdkFixed",
                Y = "pokiSdkOverlay",
                $ = "pokiSdkHidden",
                ee = "pokiSdkInsideContainer",
                te = "pokiSdkPauseButton",
                ne = "pokiSdkPauseButtonBG",
                ie = "pokiSdkStartAdButton",
                re = "pokiSdkProgressBar",
                ae = "pokiSdkProgressContainer",
                oe = "pokiSdkSpinnerContainer",
                se = "pokiSdkVideoContainer",
                de = "pokiSdkVisible",
                Ae = "pokiSDKAdContainer";
            var ce = function() {
                for (var e = 0, t = 0, n = arguments.length; t < n; t++)
                    e += arguments[t].length;
                var i = Array(e),
                    r = 0;
                for (t = 0; t < n; t++)
                    for (var a = arguments[t], o = 0, s = a.length; o < s; o++,
                        r++)
                        i[r] = a[o];
                return i
            };
            const le = function() {
                function e(e) {
                    var t = this;
                    if (this.hideElement = function(e) {
                            e.classList.add($),
                                e.classList.remove(de)
                        },
                        this.showElement = function(e) {
                            e.classList.add(de),
                                e.classList.remove($)
                        },
                        this.wrapper = e.wrapper,
                        this.progressFaker = new ue((function(e) {
                            return t.updateProgressBar(e)
                        })),
                        this.progressFaker.queueFakeProgress(10, 1e3, i.ads.prebidRequested),
                        this.progressFaker.queueFakeProgress(20, 2e3, i.ads.started),
                        this.wrapper instanceof HTMLElement || (console.error("POKI-SDK: wrapper is not a HTMLElement, falling back to document.body"),
                            this.wrapper = document.body),
                        this.createElements(),
                        "undefined" != typeof window && document) {
                        var n = document.createElement("style");
                        n.innerHTML = "\n.pokiSdkContainer {\n\toverflow: hidden;\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\twidth: 100%;\n\theight: 100%;\n\tz-index: 1000;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n.pokiSdkContainer.pokiSdkFixed {\n\tposition: fixed;\n}\n\n.pokiSdkContainer.pokiSdkVisible {\n\tdisplay: block;\n}\n\n.pokiSdkContainer.pokiSdkHidden,\n.pokiSdkSpinnerContainer.pokiSdkHidden {\n\tdisplay: none;\n}\n\n.pokiSdkContainer.pokiSdkHidden,\n.pokiSdkSpinnerContainer {\n\tpointer-events: none;\n}\n\n.pokiSdkSpinnerContainer {\n\tz-index: 10;\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbackground: url('https://a.poki.com/images/thumb_anim_2x.gif') 50% 50% no-repeat;\n\tuser-select: none;\n}\n\n.pokiSdkInsideContainer {\n\tbackground: #000;\n\tposition: relative;\n\tz-index: 1;\n\twidth: 100%;\n\theight: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\n\topacity: 0;\n\t-webkit-transition: opacity 0.5s ease-in-out;\n\t-moz-transition: opacity 0.5s ease-in-out;\n\t-ms-transition: opacity 0.5s ease-in-out;\n\t-o-transition: opacity 0.5s ease-in-out;\n\ttransition: opacity 0.5s ease-in-out;\n}\n\n.pokiSdkContainer.pokiSdkVisible .pokiSdkInsideContainer {\n\topacity: 1;\n}\n\n.pokiSDKAdContainer, .pokiSdkVideoContainer {\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n}\n\n.pokiSdkStartAdButton {\n\tposition: absolute;\n\tz-index: 9999;\n\ttop: 0;\n\n\tpadding-top: 10%;\n\twidth: 100%;\n\theight: 100%;\n\ttext-align: center;\n\tcolor: #FFF;\n\n\tfont: 700 15pt 'Arial', sans-serif;\n\tfont-weight: bold;\n\tletter-spacing: 1px;\n\ttransition: 0.1s ease-in-out;\n\tline-height: 1em;\n}\n\n.pokiSdkPauseButton {\n\tcursor:pointer;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    z-index: 1;\n}\n\n.pokiSdkPauseButton:before {\n\tcontent: '';\n\tposition: absolute;\n\twidth: 100px;\n\theight: 100px;\n\tdisplay: block;\n\tborder: 2px solid #fff;\n\tborder-radius: 50%;\n\tuser-select: none;\n\tbackground-color: rgba(0, 0, 0, 0.6);\n\ttransition: background-color 0.5s ease;\n\tanimation: 1s linear infinite pulse;\n}\n\n.pokiSdkPauseButton:after {\n\tcontent: '';\n\tposition: absolute;\n\tdisplay: block;\n\tbox-sizing: border-box;\n\tborder-color: transparent transparent transparent #fff;\n\tborder-style: solid;\n\tborder-width: 26px 0 26px 40px;\n\tpointer-events: none;\n\tanimation: 1s linear infinite pulse;\n\tleft: 6px;\n}\n.pokiSdkPauseButtonBG {\n    position: fixed;\n    top: 0;\n    left: 0;\n    display: block;\n    content: '';\n    background: rgba(0, 43, 80, 0.5);\n    width: 100%;\n    height: 100%;\n}\n\n.pokiSdkPauseButtonBG:hover{\n\tbackground: rgba(0, 43, 80, 0.7);\n}\n\n@keyframes pulse {\n\t0% {\n\t\ttransform: translate(-50%, -50%) scale(0.95);\n\t}\n\t70% {\n\t\ttransform: translate(-50%, -50%) scale(1.1);\n\t}\n\t100% {\n\t\ttransform: translate(-50%, -50%) scale(0.95);\n\t}\n}\n\n.pokiSdkProgressContainer {\n\tbackground: #B8C7DD;\n\twidth: 100%;\n\theight: 5px;\n\tposition: absolute;\n\tbottom: 0;\n\tz-index: 9999;\n}\n\n.pokiSdkProgressBar {\n\tposition:relative;\n\tbottom:0px;\n\tbackground: #FFDC00;\n\theight: 100%;\n\twidth: 0%;\n\ttransition: width 0.5s;\n\ttransition-timing-function: linear;\n}\n\n.pokiSdkProgressBar.pokiSdkVisible, .pokiSdkPauseButton.pokiSdkVisible, .pokiSdkStartAdButton.pokiSdkVisible {\n\tdisplay: block;\n\tpointer-events: auto;\n}\n\n.pokiSdkProgressBar.pokiSdkHidden, .pokiSdkPauseButton.pokiSdkHidden, .pokiSdkStartAdButton.pokiSdkHidden {\n\tdisplay: none;\n\tpointer-events: none;\n}\n",
                            document.head.appendChild(n)
                    }
                }
                return e.prototype.updateProgressBar = function(e) {
                        this.progressBar.style.width = e + "%"
                    },
                    e.prototype.setupEvents = function(e) {
                        this.internalSDK = e
                    },
                    e.prototype.hide = function() {
                        this.hideElement(this.containerDiv),
                            this.hideElement(this.progressContainer),
                            this.hidePauseButton(),
                            this.hideElement(this.startAdButton),
                            this.containerDiv.classList.remove(Y),
                            this.progressBar.style.width = "0%",
                            this.progressFaker.reset()
                    },
                    e.prototype.hideSpinner = function() {
                        this.hideElement(this.spinnerContainer)
                    },
                    e.prototype.show = function() {
                        this.containerDiv.classList.add(Y),
                            this.showElement(this.containerDiv),
                            this.showElement(this.progressContainer),
                            this.progressFaker.start()
                    },
                    e.prototype.getVideoBounds = function() {
                        return this.adContainer.getBoundingClientRect()
                    },
                    e.prototype.getAdContainer = function() {
                        return this.adContainer
                    },
                    e.prototype.getVideoContainer = function() {
                        return this.videoContainer
                    },
                    e.prototype.showPauseButton = function() {
                        this.showElement(this.pauseButton),
                            this.internalSDK && this.pauseButton.addEventListener("click", this.internalSDK.resumeAd.bind(this.internalSDK))
                    },
                    e.prototype.hidePauseButton = function() {
                        this.hideElement(this.pauseButton),
                            this.internalSDK && this.pauseButton.removeEventListener("click", this.internalSDK.resumeAd.bind(this.internalSDK))
                    },
                    e.prototype.showStartAdButton = function() {
                        this.showElement(this.startAdButton),
                            this.internalSDK && this.startAdButton.addEventListener("click", this.internalSDK.startAdClicked.bind(this.internalSDK))
                    },
                    e.prototype.hideStartAdButton = function() {
                        this.hideElement(this.startAdButton),
                            this.internalSDK && this.startAdButton.removeEventListener("click", this.internalSDK.startAdClicked.bind(this.internalSDK))
                    },
                    e.prototype.createElements = function() {
                        if (this.containerDiv = document.createElement("div"),
                            this.insideContainer = document.createElement("div"),
                            this.pauseButton = document.createElement("div"),
                            this.pauseButtonBG = document.createElement("div"),
                            this.startAdButton = document.createElement("div"),
                            this.progressBar = document.createElement("div"),
                            this.progressContainer = document.createElement("div"),
                            this.spinnerContainer = document.createElement("div"),
                            this.adContainer = document.createElement("div"),
                            this.videoContainer = document.createElement("video"),
                            this.adContainer.id = "pokiSDKAdContainer",
                            this.videoContainer.id = "pokiSDKVideoContainer",
                            this.containerDiv.className = J,
                            this.insideContainer.className = ee,
                            this.pauseButton.className = te,
                            this.pauseButtonBG.className = ne,
                            this.pauseButton.appendChild(this.pauseButtonBG),
                            this.startAdButton.className = ie,
                            this.startAdButton.innerHTML = "Tap anywhere to play ad",
                            this.progressBar.className = re,
                            this.progressContainer.className = ae,
                            this.spinnerContainer.className = oe,
                            this.adContainer.className = Ae,
                            this.videoContainer.className = se,
                            this.hide(),
                            this.videoContainer.setAttribute("playsinline", "playsinline"),
                            this.videoContainer.setAttribute("muted", "muted"),
                            this.containerDiv.appendChild(this.insideContainer),
                            this.containerDiv.appendChild(this.spinnerContainer),
                            this.insideContainer.appendChild(this.progressContainer),
                            this.insideContainer.appendChild(this.videoContainer),
                            this.insideContainer.appendChild(this.adContainer),
                            this.containerDiv.appendChild(this.pauseButton),
                            this.containerDiv.appendChild(this.startAdButton),
                            this.progressContainer.appendChild(this.progressBar),
                            this.wrapper.appendChild(this.containerDiv),
                            this.wrapper === document.body)
                            this.containerDiv.classList.add(q);
                        else {
                            var e = window.getComputedStyle(this.wrapper).position;
                            e && -1 !== ["absolute", "fixed", "relative"].indexOf(e) || (this.wrapper.style.position = "relative")
                        }
                    },
                    e
            }();
            var ue = function() {
                    function e(e) {
                        var t = this;
                        this.storedQueue = [],
                            this.progressCallback = e,
                            this.reset(),
                            a.addEventListener(i.ads.video.progress, (function(e) {
                                var n = 100 - t.currentProgress,
                                    i = e.currentTime / e.duration * n;
                                i < n && t.progressCallback(t.currentProgress + i)
                            })),
                            this.initializeNoProgressFix()
                    }
                    return e.prototype.queueFakeProgress = function(e, t, n) {
                            var i = this;
                            this.storedQueue.push({
                                    progressToFake: e,
                                    duration: t,
                                    stopEvent: n
                                }),
                                a.addEventListener(n, (function() {
                                    i.eventWatcher[n] = !0,
                                        i.currentProgress = i.startProgress + e,
                                        i.startProgress = i.currentProgress,
                                        i.progressCallback(i.currentProgress),
                                        i.activeQueue.shift(),
                                        i.activeQueue.length > 0 ? i.continue() : i.pause()
                                }))
                        },
                        e.prototype.fakeProgress = function(e, t, n) {
                            this.activeQueue.push({
                                    progressToFake: e,
                                    duration: t,
                                    stopEvent: n
                                }),
                                this.fakeProgressEvents = !0,
                                this.continue()
                        },
                        e.prototype.start = function() {
                            this.activeQueue.length > 0 || (this.activeQueue = ce(this.storedQueue),
                                this.active = !0,
                                this.continue())
                        },
                        e.prototype.continue = function() {
                            if (this.activeQueue.length > 0 && !this.tickInterval) {
                                this.startTime = Date.now();
                                this.tickInterval = window.setInterval(this.tick.bind(this), 50),
                                    this.active = !0
                            }
                        },
                        e.prototype.pause = function() {
                            this.clearInterval()
                        },
                        e.prototype.tick = function() {
                            var e = this.activeQueue[0],
                                t = Date.now() - this.startTime,
                                n = Math.min(t / e.duration, 1);
                            this.currentProgress = this.startProgress + e.progressToFake * n,
                                this.fakeProgressEvents && a.dispatchEvent(i.ads.video.progress, {
                                    duration: e.duration / 1e3,
                                    currentTime: t / 1e3
                                }),
                                this.progressCallback(this.currentProgress),
                                (this.eventWatcher[e.stopEvent] || 1 === n) && this.pause()
                        },
                        e.prototype.clearInterval = function() {
                            this.tickInterval && (clearInterval(this.tickInterval),
                                this.tickInterval = 0)
                        },
                        e.prototype.initializeNoProgressFix = function() {
                            var e = this;
                            a.addEventListener(i.ads.started, (function(t) {
                                    e.progressWatcherTimeout = window.setTimeout((function() {
                                        if (e.active) {
                                            var n = 100 - e.currentProgress,
                                                r = 1e3 * t.duration - 1e3;
                                            e.fakeProgress(n, r, i.ads.completed)
                                        }
                                    }), 1e3)
                                })),
                                a.addEventListener(i.ads.video.progress, (function() {
                                    e.progressWatcherTimeout && (clearTimeout(e.progressWatcherTimeout),
                                        e.progressWatcherTimeout = 0)
                                }))
                        },
                        e.prototype.reset = function() {
                            this.eventWatcher = {},
                                this.startProgress = 0,
                                this.startTime = 0,
                                this.currentProgress = 0,
                                this.activeQueue = [],
                                this.active = !1,
                                this.fakeProgressEvents = !1,
                                this.clearInterval()
                        },
                        e
                }(),
                pe = !0,
                me = {};

            function he() {
                if (document.body && document.body.appendChild) {
                    var e = document.createElement("iframe");
                    e.style.display = "none",
                        document.body.appendChild(e),
                        e.contentWindow && (e.contentWindow.document.open(),
                            e.contentWindow.document.write("<script>\nconst lsKey = 'poki_lsexpire';\nconst lifetime = 1000*60*60*24*30*6;\n\nwindow.addEventListener('storage', function(event) {\n    try {\n        const key = event.key;\n\n        // key is null when localStorage.clear() is called.\n        if (key === null) {\n            localStorage.removeItem(lsKey);\n            return;\n        }\n\n        if (key === lsKey) return;\n\n        const updates = JSON.parse(localStorage.getItem(lsKey)) || {};\n\n        // newValue is null when localStorage.removeItem() is called.\n        if (event.newValue === null) {\n            delete updates[key];\n        } else {\n            updates[key] = Date.now();\n        }\n        localStorage.setItem(lsKey, JSON.stringify(updates));\n    } catch (e) {}\n});\n\nfunction expire() {\n    const updates = JSON.parse(localStorage.getItem(lsKey)) || {};\n    const expireBefore = Date.now() - lifetime;\n    var removed = false;\n\n    Object.keys(updates).map(function(key) {\n       if (updates[key] < expireBefore) {\n           localStorage.removeItem(key);\n           delete updates[key];\n           removed = true;\n       }\n    });\n\n    if (removed) {\n        localStorage.setItem(lsKey, JSON.stringify(updates));\n    }\n}\n\ntry {\n    expire();\n} catch (e) {}\n<\/script>"),
                            e.contentWindow.document.close())
                } else
                    document.addEventListener("DOMContentLoaded", he)
            }
            var ge = ["AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE", "IS", "LI", "NO"],
                fe = ["US"],
                be = ["ZZ"];

            function ve(e) {
                return ge.includes(e)
            }

            function ke(e) {
                return be.includes(e)
            }
            var ye = function(e, t, n, i) {
                    return new(n || (n = Promise))((function(r, a) {
                        function o(e) {
                            try {
                                d(i.next(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function s(e) {
                            try {
                                d(i.throw(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function d(e) {
                            var t;
                            e.done ? r(e.value) : (t = e.value,
                                t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(o, s)
                        }
                        d((i = i.apply(e, t || [])).next())
                    }))
                },
                we = function(e, t) {
                    var n, i, r, a, o = {
                        label: 0,
                        sent: function() {
                            if (1 & r[0])
                                throw r[1];
                            return r[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                            next: s(0),
                            throw: s(1),
                            return: s(2)
                        },
                        "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                            return this
                        }),
                        a;

                    function s(a) {
                        return function(s) {
                            return function(a) {
                                if (n)
                                    throw new TypeError("Generator is already executing.");
                                for (; o;)
                                    try {
                                        if (n = 1,
                                            i && (r = 2 & a[0] ? i.return : a[0] ? i.throw || ((r = i.return) && r.call(i),
                                                0) : i.next) && !(r = r.call(i, a[1])).done)
                                            return r;
                                        switch (i = 0,
                                            r && (a = [2 & a[0], r.value]),
                                            a[0]) {
                                            case 0:
                                            case 1:
                                                r = a;
                                                break;
                                            case 4:
                                                return o.label++, {
                                                    value: a[1],
                                                    done: !1
                                                };
                                            case 5:
                                                o.label++,
                                                    i = a[1],
                                                    a = [0];
                                                continue;
                                            case 7:
                                                a = o.ops.pop(),
                                                    o.trys.pop();
                                                continue;
                                            default:
                                                if (!(r = o.trys,
                                                        (r = r.length > 0 && r[r.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                                    o = 0;
                                                    continue
                                                }
                                                if (3 === a[0] && (!r || a[1] > r[0] && a[1] < r[3])) {
                                                    o.label = a[1];
                                                    break
                                                }
                                                if (6 === a[0] && o.label < r[1]) {
                                                    o.label = r[1],
                                                        r = a;
                                                    break
                                                }
                                                if (r && o.label < r[2]) {
                                                    o.label = r[2],
                                                        o.ops.push(a);
                                                    break
                                                }
                                                r[2] && o.ops.pop(),
                                                    o.trys.pop();
                                                continue
                                        }
                                        a = t.call(e, o)
                                    } catch (e) {
                                        a = [6, e],
                                            i = 0
                                    } finally {
                                        n = r = 0
                                    }
                                if (5 & a[0])
                                    throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, s])
                        }
                    }
                };
            const Se = function() {
                function e(e) {
                    var t = this;
                    this.bannerTimeout = null,
                        this.allowedToPlayAd = !1,
                        this.runningAd = !1,
                        this.currentWidth = 640,
                        this.currentHeight = 480,
                        this.currentRequestIsMuted = !1,
                        this.volume = 1,
                        this.canWeAutoPlayWithSound = function() {
                            return ye(t, void 0, void 0, (function() {
                                return we(this, (function(e) {
                                    switch (e.label) {
                                        case 0:
                                            if (!this.blankVideo)
                                                return [2, !1];
                                            e.label = 1;
                                        case 1:
                                            return e.trys.push([1, 3, , 4]), [4, this.blankVideo.play()];
                                        case 2:
                                            return e.sent(), [2, !0];
                                        case 3:
                                            return e.sent(), [2, !1];
                                        case 4:
                                            return [2]
                                    }
                                }))
                            }))
                        },
                        this.videoElement = document.getElementById("pokiSDKVideoContainer"),
                        this.adsManager = null,
                        this.volume = e,
                        this.initAdDisplayContainer(),
                        this.initBlankVideo(),
                        this.initAdsLoader()
                }
                return e.prototype.initAdDisplayContainer = function() {
                        this.adDisplayContainer || (this.adDisplayContainer = new google.ima.AdDisplayContainer(document.getElementById("pokiSDKAdContainer"), this.videoElement))
                    },
                    e.prototype.initBlankVideo = function() {
                        this.blankVideo = document.createElement("video"),
                            this.blankVideo.setAttribute("playsinline", "playsinline");
                        var e = document.createElement("source");
                        e.src = "data:video/mp4;base64, AAAAHGZ0eXBNNFYgAAACAGlzb21pc28yYXZjMQAAAAhmcmVlAAAGF21kYXTeBAAAbGliZmFhYyAxLjI4AABCAJMgBDIARwAAArEGBf//rdxF6b3m2Ui3lizYINkj7u94MjY0IC0gY29yZSAxNDIgcjIgOTU2YzhkOCAtIEguMjY0L01QRUctNCBBVkMgY29kZWMgLSBDb3B5bGVmdCAyMDAzLTIwMTQgLSBodHRwOi8vd3d3LnZpZGVvbGFuLm9yZy94MjY0Lmh0bWwgLSBvcHRpb25zOiBjYWJhYz0wIHJlZj0zIGRlYmxvY2s9MTowOjAgYW5hbHlzZT0weDE6MHgxMTEgbWU9aGV4IHN1Ym1lPTcgcHN5PTEgcHN5X3JkPTEuMDA6MC4wMCBtaXhlZF9yZWY9MSBtZV9yYW5nZT0xNiBjaHJvbWFfbWU9MSB0cmVsbGlzPTEgOHg4ZGN0PTAgY3FtPTAgZGVhZHpvbmU9MjEsMTEgZmFzdF9wc2tpcD0xIGNocm9tYV9xcF9vZmZzZXQ9LTIgdGhyZWFkcz02IGxvb2thaGVhZF90aHJlYWRzPTEgc2xpY2VkX3RocmVhZHM9MCBucj0wIGRlY2ltYXRlPTEgaW50ZXJsYWNlZD0wIGJsdXJheV9jb21wYXQ9MCBjb25zdHJhaW5lZF9pbnRyYT0wIGJmcmFtZXM9MCB3ZWlnaHRwPTAga2V5aW50PTI1MCBrZXlpbnRfbWluPTI1IHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCB2YnZfbWF4cmF0ZT03NjggdmJ2X2J1ZnNpemU9MzAwMCBjcmZfbWF4PTAuMCBuYWxfaHJkPW5vbmUgZmlsbGVyPTAgaXBfcmF0aW89MS40MCBhcT0xOjEuMDAAgAAAAFZliIQL8mKAAKvMnJycnJycnJycnXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXiEASZACGQAjgCEASZACGQAjgAAAAAdBmjgX4GSAIQBJkAIZACOAAAAAB0GaVAX4GSAhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZpgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGagC/AySEASZACGQAjgAAAAAZBmqAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZrAL8DJIQBJkAIZACOAAAAABkGa4C/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmwAvwMkhAEmQAhkAI4AAAAAGQZsgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGbQC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBm2AvwMkhAEmQAhkAI4AAAAAGQZuAL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGboC/AySEASZACGQAjgAAAAAZBm8AvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZvgL8DJIQBJkAIZACOAAAAABkGaAC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmiAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZpAL8DJIQBJkAIZACOAAAAABkGaYC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmoAvwMkhAEmQAhkAI4AAAAAGQZqgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGawC/AySEASZACGQAjgAAAAAZBmuAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZsAL8DJIQBJkAIZACOAAAAABkGbIC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBm0AvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZtgL8DJIQBJkAIZACOAAAAABkGbgCvAySEASZACGQAjgCEASZACGQAjgAAAAAZBm6AnwMkhAEmQAhkAI4AhAEmQAhkAI4AhAEmQAhkAI4AhAEmQAhkAI4AAAAhubW9vdgAAAGxtdmhkAAAAAAAAAAAAAAAAAAAD6AAABDcAAQAAAQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAzB0cmFrAAAAXHRraGQAAAADAAAAAAAAAAAAAAABAAAAAAAAA+kAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAALAAAACQAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAAPpAAAAAAABAAAAAAKobWRpYQAAACBtZGhkAAAAAAAAAAAAAAAAAAB1MAAAdU5VxAAAAAAALWhkbHIAAAAAAAAAAHZpZGUAAAAAAAAAAAAAAABWaWRlb0hhbmRsZXIAAAACU21pbmYAAAAUdm1oZAAAAAEAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAhNzdGJsAAAAr3N0c2QAAAAAAAAAAQAAAJ9hdmMxAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAALAAkABIAAAASAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGP//AAAALWF2Y0MBQsAN/+EAFWdCwA3ZAsTsBEAAAPpAADqYA8UKkgEABWjLg8sgAAAAHHV1aWRraEDyXyRPxbo5pRvPAyPzAAAAAAAAABhzdHRzAAAAAAAAAAEAAAAeAAAD6QAAABRzdHNzAAAAAAAAAAEAAAABAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAAIxzdHN6AAAAAAAAAAAAAAAeAAADDwAAAAsAAAALAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAAiHN0Y28AAAAAAAAAHgAAAEYAAANnAAADewAAA5gAAAO0AAADxwAAA+MAAAP2AAAEEgAABCUAAARBAAAEXQAABHAAAASMAAAEnwAABLsAAATOAAAE6gAABQYAAAUZAAAFNQAABUgAAAVkAAAFdwAABZMAAAWmAAAFwgAABd4AAAXxAAAGDQAABGh0cmFrAAAAXHRraGQAAAADAAAAAAAAAAAAAAACAAAAAAAABDcAAAAAAAAAAAAAAAEBAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAAQkAAADcAABAAAAAAPgbWRpYQAAACBtZGhkAAAAAAAAAAAAAAAAAAC7gAAAykBVxAAAAAAALWhkbHIAAAAAAAAAAHNvdW4AAAAAAAAAAAAAAABTb3VuZEhhbmRsZXIAAAADi21pbmYAAAAQc21oZAAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAADT3N0YmwAAABnc3RzZAAAAAAAAAABAAAAV21wNGEAAAAAAAAAAQAAAAAAAAAAAAIAEAAAAAC7gAAAAAAAM2VzZHMAAAAAA4CAgCIAAgAEgICAFEAVBbjYAAu4AAAADcoFgICAAhGQBoCAgAECAAAAIHN0dHMAAAAAAAAAAgAAADIAAAQAAAAAAQAAAkAAAAFUc3RzYwAAAAAAAAAbAAAAAQAAAAEAAAABAAAAAgAAAAIAAAABAAAAAwAAAAEAAAABAAAABAAAAAIAAAABAAAABgAAAAEAAAABAAAABwAAAAIAAAABAAAACAAAAAEAAAABAAAACQAAAAIAAAABAAAACgAAAAEAAAABAAAACwAAAAIAAAABAAAADQAAAAEAAAABAAAADgAAAAIAAAABAAAADwAAAAEAAAABAAAAEAAAAAIAAAABAAAAEQAAAAEAAAABAAAAEgAAAAIAAAABAAAAFAAAAAEAAAABAAAAFQAAAAIAAAABAAAAFgAAAAEAAAABAAAAFwAAAAIAAAABAAAAGAAAAAEAAAABAAAAGQAAAAIAAAABAAAAGgAAAAEAAAABAAAAGwAAAAIAAAABAAAAHQAAAAEAAAABAAAAHgAAAAIAAAABAAAAHwAAAAQAAAABAAAA4HN0c3oAAAAAAAAAAAAAADMAAAAaAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAACMc3RjbwAAAAAAAAAfAAAALAAAA1UAAANyAAADhgAAA6IAAAO+AAAD0QAAA+0AAAQAAAAEHAAABC8AAARLAAAEZwAABHoAAASWAAAEqQAABMUAAATYAAAE9AAABRAAAAUjAAAFPwAABVIAAAVuAAAFgQAABZ0AAAWwAAAFzAAABegAAAX7AAAGFwAAAGJ1ZHRhAAAAWm1ldGEAAAAAAAAAIWhkbHIAAAAAAAAAAG1kaXJhcHBsAAAAAAAAAAAAAAAALWlsc3QAAAAlqXRvbwAAAB1kYXRhAAAAAQAAAABMYXZmNTUuMzMuMTAw",
                            this.blankVideo.appendChild(e)
                    },
                    e.prototype.initAdsLoader = function() {
                        var e = this;
                        this.adsLoader || (this.adsLoader = new google.ima.AdsLoader(this.adDisplayContainer),
                            this.adsLoader.getSettings().setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.INSECURE),
                            this.adsLoader.getSettings().setDisableCustomPlaybackForIOS10Plus(!0),
                            this.adsLoader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, this.onAdsManagerLoaded, !1, this),
                            this.adsLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, this.onAdLoaderError, !1, this),
                            this.videoElement.addEventListener("onended", (function() {
                                return e.adsLoader.contentComplete()
                            })))
                    },
                    e.prototype.requestAd = function(e) {
                        return ye(this, void 0, void 0, (function() {
                            var t;
                            return we(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.runningAd ? [2] : (this.runningAd = !0,
                                            this.adDisplayContainer.initialize(),
                                            this.videoElement.src = "",
                                            (t = new google.ima.AdsRequest).adTagUrl = e,
                                            t.linearAdSlotWidth = this.currentWidth,
                                            t.linearAdSlotHeight = this.currentHeight,
                                            t.nonLinearAdSlotWidth = this.currentWidth,
                                            t.nonLinearAdSlotHeight = this.currentHeight,
                                            t.forceNonLinearFullSlot = !0, [4, this.canWeAutoPlayWithSound()]);
                                    case 1:
                                        return n.sent() ? (t.setAdWillPlayMuted(!1),
                                                this.currentRequestIsMuted = !1) : (t.setAdWillPlayMuted(!0),
                                                this.currentRequestIsMuted = !0),
                                            this.allowedToPlayAd = !0,
                                            this.adsLoader.requestAds(t), [2]
                                }
                            }))
                        }))
                    },
                    e.prototype.resize = function(e, t, n) {
                        void 0 === n && (n = google.ima.ViewMode.NORMAL),
                            this.currentWidth = e,
                            this.currentHeight = t,
                            this.adsManager && this.adsManager.resize(e, t, n)
                    },
                    e.prototype.onAdsManagerLoaded = function(e) {
                        var t = new google.ima.AdsRenderingSettings;
                        t.enablePreloading = !0,
                            t.restoreCustomPlaybackStateOnAdBreakComplete = !0,
                            t.mimeTypes = C() || I() || E() ? ["video/mp4"] : ["video/mp4", "video/webm", "video/ogg"],
                            this.adsManager = e.getAdsManager(this.videoElement, t),
                            this.adsManager.setVolume(Math.max(0, Math.min(1, this.volume))),
                            this.currentRequestIsMuted && this.adsManager.setVolume(0),
                            this.allowedToPlayAd ? (this.attachAdEvents(),
                                a.dispatchEvent(i.ads.ready)) : this.tearDown()
                    },
                    e.prototype.setVolume = function(e) {
                        this.volume = e,
                            this.adsManager && this.adsManager.setVolume(Math.max(0, Math.min(1, this.volume)))
                    },
                    e.prototype.startPlayback = function() {
                        try {
                            this.adsManager.init(this.currentWidth, this.currentHeight, google.ima.ViewMode.NORMAL),
                                this.adsManager.start()
                        } catch (e) {
                            this.videoElement.play()
                        }
                    },
                    e.prototype.startIOSPlayback = function() {
                        this.adsManager.start()
                    },
                    e.prototype.stopPlayback = function() {
                        a.dispatchEvent(i.ads.stopped),
                            this.tearDown()
                    },
                    e.prototype.resumeAd = function() {
                        a.dispatchEvent(i.ads.video.resumed),
                            this.adsManager && this.adsManager.resume()
                    },
                    e.prototype.tearDown = function() {
                        this.adsManager && (this.adsManager.stop(),
                                this.adsManager.destroy(),
                                this.adsManager = null),
                            null !== this.bannerTimeout && (clearTimeout(this.bannerTimeout),
                                this.bannerTimeout = null),
                            this.adsLoader && (this.adsLoader.contentComplete(),
                                this.adsLoader.destroy(),
                                this.adsLoader = null,
                                this.initAdsLoader()),
                            this.runningAd = !1
                    },
                    e.prototype.attachAdEvents = function() {
                        var e = this,
                            t = google.ima.AdEvent.Type;
                        this.adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, this.onAdError, !1, this), [t.AD_PROGRESS, t.ALL_ADS_COMPLETED, t.CLICK, t.COMPLETE, t.IMPRESSION, t.PAUSED, t.SKIPPED, t.STARTED, t.USER_CLOSE, t.AD_BUFFERING].forEach((function(t) {
                            e.adsManager.addEventListener(t, e.onAdEvent, !1, e)
                        }))
                    },
                    e.prototype.onAdEvent = function(e) {
                        var t = this,
                            n = e.getAd();
                        switch (e.type) {
                            case google.ima.AdEvent.Type.AD_PROGRESS:
                                a.dispatchEvent(i.ads.video.progress, e.getAdData());
                                break;
                            case google.ima.AdEvent.Type.STARTED:
                                e.remainingTime = this.adsManager.getRemainingTime(),
                                    e.remainingTime <= 0 && (e.remainingTime = 15),
                                    n.isLinear() || (this.bannerTimeout = window.setTimeout((function() {
                                        a.dispatchEvent(i.ads.completed, {
                                                rewardAllowed: !!e.rewardAllowed
                                            }),
                                            t.tearDown()
                                    }), 1e3 * (e.remainingTime + 1))),
                                    a.dispatchEvent(i.ads.started, {
                                        creativeId: n.getCreativeId(),
                                        adId: n.getAdId(),
                                        duration: n.getDuration()
                                    });
                                break;
                            case google.ima.AdEvent.Type.COMPLETE:
                                a.dispatchEvent(i.ads.completed, {
                                        rewardAllowed: !0
                                    }),
                                    this.tearDown();
                                break;
                            case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                            case google.ima.AdEvent.Type.USER_CLOSE:
                                this.tearDown();
                                break;
                            case google.ima.AdEvent.Type.PAUSED:
                                this.adsManager.pause(),
                                    a.dispatchEvent(i.ads.video.paused);
                                break;
                            case google.ima.AdEvent.Type.AD_BUFFERING:
                                a.dispatchEvent(i.ads.video.buffering);
                                break;
                            case google.ima.AdEvent.Type.CLICK:
                                a.dispatchEvent(i.ads.video.clicked);
                                break;
                            case google.ima.AdEvent.Type.SKIPPED:
                                a.dispatchEvent(i.ads.skipped),
                                    a.dispatchEvent(i.ads.completed),
                                    document.activeElement && document.activeElement.blur();
                                break;
                            case google.ima.AdEvent.Type.IMPRESSION:
                                a.dispatchEvent(i.ads.impression, {
                                    userValueIndicator: V(a.getDataAnnotations().position === i.ads.position.rewarded ? j : Q)
                                })
                        }
                    },
                    e.prototype.onAdLoaderError = function(e) {
                        this.tearDown();
                        var t = e.getError && e.getError().toString() || "Unknown";
                        a.dispatchEvent(i.ads.video.loaderError, {
                            message: t
                        })
                    },
                    e.prototype.onAdError = function(e) {
                        this.tearDown();
                        var t = e.getError && e.getError().toString() || "Unknown";
                        a.dispatchEvent(i.ads.video.error, {
                            message: t
                        })
                    },
                    e.prototype.muteAd = function() {
                        void 0 !== this.adsManager && null != this.adsManager && this.adsManager.setVolume(0)
                    },
                    e.prototype.isAdRunning = function() {
                        return this.runningAd
                    },
                    e
            }();
            const Ie = function(e) {
                return new Promise((function(t, n) {
                    var i = document.createElement("script");
                    i.type = "text/javascript",
                        i.async = !0,
                        i.src = e;
                    var r = function() {
                        i.readyState && "loaded" !== i.readyState && "complete" !== i.readyState || (t(),
                            i.onload = null,
                            i.onreadystatechange = null)
                    };
                    i.onload = r,
                        i.onreadystatechange = r,
                        i.onerror = n,
                        document.head.appendChild(i)
                }))
            };
            var Ee = function(e, t, n, i) {
                    return new(n || (n = Promise))((function(r, a) {
                        function o(e) {
                            try {
                                d(i.next(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function s(e) {
                            try {
                                d(i.throw(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function d(e) {
                            var t;
                            e.done ? r(e.value) : (t = e.value,
                                t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(o, s)
                        }
                        d((i = i.apply(e, t || [])).next())
                    }))
                },
                xe = function(e, t) {
                    var n, i, r, a, o = {
                        label: 0,
                        sent: function() {
                            if (1 & r[0])
                                throw r[1];
                            return r[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                            next: s(0),
                            throw: s(1),
                            return: s(2)
                        },
                        "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                            return this
                        }),
                        a;

                    function s(a) {
                        return function(s) {
                            return function(a) {
                                if (n)
                                    throw new TypeError("Generator is already executing.");
                                for (; o;)
                                    try {
                                        if (n = 1,
                                            i && (r = 2 & a[0] ? i.return : a[0] ? i.throw || ((r = i.return) && r.call(i),
                                                0) : i.next) && !(r = r.call(i, a[1])).done)
                                            return r;
                                        switch (i = 0,
                                            r && (a = [2 & a[0], r.value]),
                                            a[0]) {
                                            case 0:
                                            case 1:
                                                r = a;
                                                break;
                                            case 4:
                                                return o.label++, {
                                                    value: a[1],
                                                    done: !1
                                                };
                                            case 5:
                                                o.label++,
                                                    i = a[1],
                                                    a = [0];
                                                continue;
                                            case 7:
                                                a = o.ops.pop(),
                                                    o.trys.pop();
                                                continue;
                                            default:
                                                if (!(r = o.trys,
                                                        (r = r.length > 0 && r[r.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                                    o = 0;
                                                    continue
                                                }
                                                if (3 === a[0] && (!r || a[1] > r[0] && a[1] < r[3])) {
                                                    o.label = a[1];
                                                    break
                                                }
                                                if (6 === a[0] && o.label < r[1]) {
                                                    o.label = r[1],
                                                        r = a;
                                                    break
                                                }
                                                if (r && o.label < r[2]) {
                                                    o.label = r[2],
                                                        o.ops.push(a);
                                                    break
                                                }
                                                r[2] && o.ops.pop(),
                                                    o.trys.pop();
                                                continue
                                        }
                                        a = t.call(e, o)
                                    } catch (e) {
                                        a = [6, e],
                                            i = 0
                                    } finally {
                                        n = r = 0
                                    }
                                if (5 & a[0])
                                    throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, s])
                        }
                    }
                };
            const Ce = function() {
                var e = window.location.pathname;
                "/" !== e[0] && (e = "/" + e);
                var t = encodeURIComponent(window.location.protocol + "//" + window.location.host + e + window.location.search),
                    n = encodeURIComponent(document.referrer);
                return fetch("", {
                    method: "GET",
                    headers: {
                        "Content-Type": "text/plain"
                    }
                }).then((function(e) {
                    return Ee(void 0, void 0, void 0, (function() {
                        var t;
                        return xe(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return e.status >= 200 && e.status < 400 ? [4, e.json()] : [3, 2];
                                case 1:
                                    return (t = n.sent()).game_id ? [2, {
                                        gameId: t.game_id,
                                        adTiming: {
                                            preroll: t.ad_settings.preroll,
                                            timePerTry: t.ad_settings.time_per_try,
                                            timeBetweenAds: t.ad_settings.time_between_ads,
                                            startAdsAfter: t.ad_settings.start_ads_after
                                        }
                                    }] : [2, void 0];
                                case 2:
                                    throw e
                            }
                        }))
                    }))
                })).catch((function(e) {
                    return function(e) {
                        return Ee(this, void 0, void 0, (function() {
                            var t, n, i, r, a, o, s, d, A, c, l, u;
                            return xe(this, (function(p) {
                                switch (p.label) {
                                    case 0:
                                        return p.trys.push([0, 3, , 4]),
                                            "/" !== (t = window.location.pathname)[0] && (t = "/" + t),
                                            r = (i = JSON).stringify,
                                            c = {
                                                c: "sdk-p4d-error",
                                                ve: 7
                                            },
                                            l = {
                                                k: "error"
                                            },
                                            o = (a = JSON).stringify,
                                            u = {
                                                status: e.status
                                            },
                                            (s = e.json) ? [4, e.json()] : [3, 2];
                                    case 1:
                                        s = p.sent(),
                                            p.label = 2;
                                    case 2:
                                        if (n = r.apply(i, [(c.d = [(l.v = o.apply(a, [(u.json = s,
                                                        u.body = JSON.stringify({
                                                            href: window.location.protocol + "//" + window.location.host + t + window.location.search
                                                        }),
                                                        u.name = e.name,
                                                        u.message = e.message,
                                                        u)]),
                                                    l)],
                                                c)]),
                                            d = "https://t.poki.io/l",
                                            navigator.sendBeacon)
                                            navigator.sendBeacon(d, n);
                                        else
                                            try {
                                                (A = new XMLHttpRequest).open("POST", d, !0),
                                                    A.send(n)
                                            } catch (e) {}
                                        return [3, 4];
                                    case 3:
                                        return p.sent(), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            }))
                        }))
                    }(e)
                }))
            };
            var Te = function(e, t, n, i) {
                    return new(n || (n = Promise))((function(r, a) {
                        function o(e) {
                            try {
                                d(i.next(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function s(e) {
                            try {
                                d(i.throw(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function d(e) {
                            var t;
                            e.done ? r(e.value) : (t = e.value,
                                t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(o, s)
                        }
                        d((i = i.apply(e, t || [])).next())
                    }))
                },
                Be = function(e, t) {
                    var n, i, r, a, o = {
                        label: 0,
                        sent: function() {
                            if (1 & r[0])
                                throw r[1];
                            return r[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                            next: s(0),
                            throw: s(1),
                            return: s(2)
                        },
                        "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                            return this
                        }),
                        a;

                    function s(a) {
                        return function(s) {
                            return function(a) {
                                if (n)
                                    throw new TypeError("Generator is already executing.");
                                for (; o;)
                                    try {
                                        if (n = 1,
                                            i && (r = 2 & a[0] ? i.return : a[0] ? i.throw || ((r = i.return) && r.call(i),
                                                0) : i.next) && !(r = r.call(i, a[1])).done)
                                            return r;
                                        switch (i = 0,
                                            r && (a = [2 & a[0], r.value]),
                                            a[0]) {
                                            case 0:
                                            case 1:
                                                r = a;
                                                break;
                                            case 4:
                                                return o.label++, {
                                                    value: a[1],
                                                    done: !1
                                                };
                                            case 5:
                                                o.label++,
                                                    i = a[1],
                                                    a = [0];
                                                continue;
                                            case 7:
                                                a = o.ops.pop(),
                                                    o.trys.pop();
                                                continue;
                                            default:
                                                if (!(r = o.trys,
                                                        (r = r.length > 0 && r[r.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                                    o = 0;
                                                    continue
                                                }
                                                if (3 === a[0] && (!r || a[1] > r[0] && a[1] < r[3])) {
                                                    o.label = a[1];
                                                    break
                                                }
                                                if (6 === a[0] && o.label < r[1]) {
                                                    o.label = r[1],
                                                        r = a;
                                                    break
                                                }
                                                if (r && o.label < r[2]) {
                                                    o.label = r[2],
                                                        o.ops.push(a);
                                                    break
                                                }
                                                r[2] && o.ops.pop(),
                                                    o.trys.pop();
                                                continue
                                        }
                                        a = t.call(e, o)
                                    } catch (e) {
                                        a = [6, e],
                                            i = 0
                                    } finally {
                                        n = r = 0
                                    }
                                if (5 & a[0])
                                    throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, s])
                        }
                    }
                };

            function Pe() {
                return Te(this, void 0, Promise, (function() {
                    var e;
                    return Be(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return t.trys.push([0, 3, , 4]), [4, fetch("", {
                                    method: "GET",
                                    headers: {
                                        "Content-Type": "text/plain"
                                    }
                                })];
                            case 1:
                                return [4, t.sent().json()];
                            case 2:
                                return [2, t.sent().ISO];
                            case 3:
                                return e = t.sent(),
                                    console.error(e), [2, "ZZ"];
                            case 4:
                                return [2]
                        }
                    }))
                }))
            }
            var _e = function(e, t, n, i) {
                    return new(n || (n = Promise))((function(r, a) {
                        function o(e) {
                            try {
                                d(i.next(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function s(e) {
                            try {
                                d(i.throw(e))
                            } catch (e) {
                                a(e)
                            }
                        }

                        function d(e) {
                            var t;
                            e.done ? r(e.value) : (t = e.value,
                                t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(o, s)
                        }
                        d((i = i.apply(e, t || [])).next())
                    }))
                },
                De = function(e, t) {
                    var n, i, r, a, o = {
                        label: 0,
                        sent: function() {
                            if (1 & r[0])
                                throw r[1];
                            return r[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                            next: s(0),
                            throw: s(1),
                            return: s(2)
                        },
                        "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                            return this
                        }),
                        a;

                    function s(a) {
                        return function(s) {
                            return function(a) {
                                if (n)
                                    throw new TypeError("Generator is already executing.");
                                for (; o;)
                                    try {
                                        if (n = 1,
                                            i && (r = 2 & a[0] ? i.return : a[0] ? i.throw || ((r = i.return) && r.call(i),
                                                0) : i.next) && !(r = r.call(i, a[1])).done)
                                            return r;
                                        switch (i = 0,
                                            r && (a = [2 & a[0], r.value]),
                                            a[0]) {
                                            case 0:
                                            case 1:
                                                r = a;
                                                break;
                                            case 4:
                                                return o.label++, {
                                                    value: a[1],
                                                    done: !1
                                                };
                                            case 5:
                                                o.label++,
                                                    i = a[1],
                                                    a = [0];
                                                continue;
                                            case 7:
                                                a = o.ops.pop(),
                                                    o.trys.pop();
                                                continue;
                                            default:
                                                if (!(r = o.trys,
                                                        (r = r.length > 0 && r[r.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                                    o = 0;
                                                    continue
                                                }
                                                if (3 === a[0] && (!r || a[1] > r[0] && a[1] < r[3])) {
                                                    o.label = a[1];
                                                    break
                                                }
                                                if (6 === a[0] && o.label < r[1]) {
                                                    o.label = r[1],
                                                        r = a;
                                                    break
                                                }
                                                if (r && o.label < r[2]) {
                                                    o.label = r[2],
                                                        o.ops.push(a);
                                                    break
                                                }
                                                r[2] && o.ops.pop(),
                                                    o.trys.pop();
                                                continue
                                        }
                                        a = t.call(e, o)
                                    } catch (e) {
                                        a = [6, e],
                                            i = 0
                                    } finally {
                                        n = r = 0
                                    }
                                if (5 & a[0])
                                    throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, s])
                        }
                    }
                },
                Le = !1,
                Me = function() {
                    return _e(void 0, void 0, void 0, (function() {
                        var e, t, n;
                        return De(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    if (Le)
                                        return [2];
                                    i.label = 1;
                                case 1:
                                    return i.trys.push([1, 4, , 5]), [4, fetch("./touchControllerConfig.json")];
                                case 2:
                                    return [4, i.sent().json()];
                                case 3:
                                    return (e = i.sent()) && ((t = document.createElement("script")).src = "//game-cdn.poki.com/scripts/touchOverlayController.js",
                                        t.onload = function() {
                                            new window.OverlayController(document.body, e)
                                        },
                                        document.head.appendChild(t),
                                        Le = !0), [3, 5];
                                case 4:
                                    return n = i.sent(),
                                        console.log(n), [3, 5];
                                case 5:
                                    return [2]
                            }
                        }))
                    }))
                };
            const Re = function() {
                for (var e = Math.floor(Date.now() / 1e3), t = "", n = 0; n < 4; n++)
                    t = String.fromCharCode(255 & e) + t,
                    e >>= 8;
                if (window.crypto && crypto.getRandomValues && Uint32Array) {
                    var i = new Uint32Array(12);
                    crypto.getRandomValues(i);
                    for (n = 0; n < 12; n++)
                        t += String.fromCharCode(255 & i[n])
                } else
                    for (n = 0; n < 12; n++)
                        t += String.fromCharCode(Math.floor(256 * Math.random()));
                return btoa(t).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
            };
            var Oe = !1,
                ze = new Map,
                je = function(e) {
                    if (!e)
                        return null;
                    for (var t = 0, n = Array.from(e.getElementsByClassName("poki-ad-slot")); t < n.length; t++) {
                        var i = n[t],
                            r = ze.get(i.id);
                        if (r)
                            return r.id
                    }
                    return null
                },
                Qe = function(e, t) {
                    var n = je(e),
                        i = ze.get(n || "") || null;
                    if (i) {
                        var r = t.split("x").map((function(e) {
                            return parseInt(e, 10)
                        })) || [0, 0];
                        if (i.width === r[0] && i.height === r[1])
                            return i.id;
                        Xe(e)
                    }
                    var a = function(e) {
                        var t = e.split("x").map((function(e) {
                                return parseInt(e, 10)
                            })),
                            n = "/21682198607/debug-display/debug-display-" + e,
                            i = "desktop";
                        I() && (i = "mobile"),
                            E() && (i = "tablet");
                        var r = parseInt(x("site_id"), 10) || 0;
                        return Oe || (n = Fe.GetIsPokiIFrame() ? "/21682198607/" + i + "_ingame_" + e + "/" + r + "_" + i + "_ingame_" + e : "/21682198607/external_" + i + "_display_ingame/external_" + i + "_ingame_" + e), {
                            id: "poki-" + Re(),
                            adUnitPath: n,
                            size: e,
                            width: t[0],
                            height: t[1],
                            refresh: !1
                        }
                    }(t);
                    return ze.set(a.id, a),
                        window.googletag.cmd.push((function() {
                            var t = document.createElement("div");
                            t.id = a.id,
                                t.className = "poki-ad-slot",
                                t.style.width = a.width + "px",
                                t.style.height = a.height + "px",
                                t.setAttribute("data-poki-ad-size", a.size),
                                e.appendChild(t),
                                e.setAttribute("data-poki-ad-id", a.id),
                                a.gptSlot = window.googletag.defineSlot(a.adUnitPath, [a.width, a.height], a.id).addService(window.googletag.pubads()),
                                window.googletag.enableServices(),
                                ze.set(a.id, a)
                        })),
                        a.id
                },
                Ge = function(e, t) {
                    var n = ze.get(e);
                    n && (n.opportunityId = t,
                        c.track(i.tracking.ads.display.requested, {
                            size: n.size,
                            opportunityId: n.opportunityId,
                            adUnitPath: n.adUnitPath
                        }),
                        window.pbjs.que.push((function() {
                            window.pbjs.requestBids({
                                adUnitCodes: [n.adUnitPath],
                                bidsBackHandler: function() {
                                    ! function(e) {
                                        window.googletag.cmd.push((function() {
                                            var t = ze.get(e);
                                            t && t.gptSlot && (window.pbjs.setTargetingForGPTAsync([t.adUnitPath]),
                                                t.refresh ? window.googletag.pubads().refresh([t.gptSlot]) : (t.refresh = !0,
                                                    window.googletag.display(t.id),
                                                    ze.set(t.id, t)))
                                        }))
                                    }(e)
                                }
                            })
                        })))
                },
                Xe = function(e) {
                    window.googletag.cmd.push((function() {
                        var t, n = je(e),
                            r = ze.get(n || "") || null;
                        r && r.gptSlot && (c.track(i.tracking.screen.destroyAd, {
                                opportunityId: r.opportunityId
                            }),
                            googletag.destroySlots([r.gptSlot]),
                            null === (t = e.querySelector("div#" + r.id)) || void 0 === t || t.remove(),
                            e.removeAttribute("data-poki-ad-id"),
                            ze.delete(r.id))
                    }))
                },
                Ze = function() {
                    return (Ze = Object.assign || function(e) {
                        for (var t, n = 1, i = arguments.length; n < i; n++)
                            for (var r in t = arguments[n])
                                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                        return e
                    }).apply(this, arguments)
                },
                Ne = {
                    gameId: x("game_id"),
                    versionId: x("game_version_id")
                };
            const Fe = function() {
                function e() {
                    this.autoStartOnReady = !1,
                        this.criteria = {},
                        this.debugIsOverwritten = !1,
                        this.handlers = {},
                        this.initializingPromise = null,
                        this.isInitialized = !1,
                        this.programmaticAdsEnabled = !0,
                        this.sdkBooted = !1,
                        this.sdkImaError = !1,
                        this.startAdEnabled = !1,
                        this.startStartAdsAfterTimerOnInit = !1,
                        this.initOptions = {},
                        this.forceDisableCommercialBreak = !1,
                        this.debug = !1,
                        this.adReady = !1,
                        this.debugTouchOverlayController = !1,
                        this.setPlayerAge = function(e) {
                            e && function(e, t) {
                                if (pe)
                                    try {
                                        localStorage.setItem(e, t)
                                    } catch (n) {
                                        pe = !1,
                                            me[e] = t
                                    }
                                else
                                    me[e] = t
                            }("playerAge", e)
                        },
                        this.toggleNonPersonalized = function(t) {
                            e.nonPersonalized = t
                        },
                        this.setConsentString = function(t) {
                            e.consentString = t
                        },
                        this.sdkNotBootedButCalled = function() {
                            console.error("The Poki SDK has not yet been initialized")
                        };
                    var t = x("pokiDebug");
                    "" !== t && (this.setDebug("true" === t),
                        this.debugIsOverwritten = !0)
                }
                return e.prototype.init = function(e) {
                        if (void 0 === e && (e = {}),
                            "undefined" != typeof window) {
                            var t = e.onReady,
                                n = void 0 === t ? null : t,
                                i = e.onAdblocked,
                                r = void 0 === i ? null : i;
                            return this.initOptions = e,
                                n && this.registerHandler("onReady", n),
                                r && this.registerHandler("onAdblocked", r),
                                this.isInitialized ? console.error("Poki SDK has already been initialized") : (this.initializingPromise || (this.initializingPromise = this.lazyLoadInit()),
                                    this.initializingPromise)
                        }
                    },
                    e.prototype.lazyLoadInit = function() {
                        var t, n = this,
                            r = this.initOptions,
                            o = r.adTagUrl,
                            s = r.adTiming,
                            d = void 0 === s ? {} : s,
                            A = r.customCriteria,
                            u = void 0 === A ? {} : A,
                            p = r.debug,
                            m = void 0 !== p && p,
                            h = r.prebid,
                            g = void 0 === h ? {} : h,
                            f = r.a9,
                            b = void 0 === f ? {} : f,
                            v = r.volume,
                            k = void 0 === v ? 1 : v,
                            y = r.waterfallRetries,
                            S = r.wrapper,
                            C = void 0 === S ? document.body : S,
                            T = parseInt(x("site_id"), 10) || 0;
                        window.googletag = window.googletag || {
                                cmd: []
                            },
                            this.setupDefaultEvents(),
                            c.setupDefaultEvents(),
                            he(),
                            setTimeout(w.trackSavegames, 1e4),
                            t = g,
                            window.pbjs = window.pbjs || {},
                            window.pbjs.que = window.pbjs.que || [],
                            window.pbjs.que.push((function() {
                                window.pbjs.aliasBidder("appnexus", "districtm"),
                                    window.pbjs.addAdUnits(t.adUnits || Z),
                                    window.pbjs.setConfig(_(_({}, F), t.config)),
                                    window.pbjs.bidderSettings = {
                                        districtm: {
                                            bidCpmAdjustment: function(e) {
                                                return .85 * e
                                            }
                                        },
                                        richaudience: {
                                            bidCpmAdjustment: function(e, t) {
                                                return "video" === t.mediaType ? .9 * e : e
                                            }
                                        }
                                    }
                            }));
                        var B = Ze({}, l);
                        o ? (e.isPokiPlatform = !0,
                            B = Ze(Ze({}, B), {
                                adTagUrl: o,
                                customCriteria: u,
                                adTiming: d
                            })) : e.isPokiPlatform = !1;
                        var P = Ce;
                        (e.isPokiPlatform || this.debug) && (P = function() {
                            return Promise.resolve()
                        });
                        var D = Pe,
                            L = this.initOptions.country || x("country");
                        return L && (D = function() {
                                return Promise.resolve(L)
                            }),
                            window.addEventListener("resize", this.resize.bind(this), !1),
                            window.addEventListener("message", this.onMessage.bind(this), !1),
                            this.debugIsOverwritten || this.setDebug(this.debug || m),
                            this.debugTouchOverlayController && (I() || E()) && Me(),
                            Promise.all([P(), D(), Ie(""), Ie(""), Ie(""), Ie("")]).catch((function() {
                                a.dispatchEvent(i.adblocked)
                            })).then((function(t) {
                                if (void 0 !== t) {
                                    var r = t[0],
                                        o = t[1];
                                    if (n.country = o,
                                        n.isCCPA = void 0 !== n.initOptions.isCCPA ? n.initOptions.isCCPA : !!x("ccpaApplies"),
                                        r) {
                                        Ne.gameId || (Ne.gameId = r.gameId);
                                        ["7fb1fd45-24ce-4ade-b5c4-9ee55ec99526"].includes(Ne.gameId) && (I() || E()) && Me(),
                                            B.adTiming = r.adTiming,
                                            B.customCriteria = Ze(Ze({}, B.customCriteria), {
                                                p4d_game_id: Ne.gameId
                                            })
                                    }
                                    n.debug && (B.adTiming.startAdsAfter = 0),
                                        n.enableSettings(B);
                                    var s = ve(n.country);
                                    (e.GetIsPokiPlatform() || e.GetIsPokiIFrame()) && (s && H(),
                                        n.isCCPA && U()),
                                    n.playerSkin = new le({
                                            wrapper: C
                                        }),
                                        n.ima = new Se(k),
                                        n.playerSkin.setupEvents(n),
                                        n.startStartAdsAfterTimerOnInit && n.adTimings.startStartAdsAfterTimer(),
                                        n.waterfall = new K(n.ima, {
                                            timing: n.adTimings,
                                            totalRetries: y,
                                            adTagUrl: B.adTagUrl,
                                            siteID: T
                                        }),
                                        window.googletag.cmd.push((function() {
                                            window.googletag.pubads().addEventListener("slotRenderEnded", (function(e) {
                                                    var t = e.slot.getSlotElementId(),
                                                        n = ze.get(t);
                                                    n && n.gptSlot && c.track(i.tracking.ads.display.impression, {
                                                        size: n.size,
                                                        opportunityId: n.opportunityId,
                                                        adUnitPath: n.adUnitPath
                                                    })
                                                })),
                                                window.googletag.pubads().addEventListener("impressionViewable", (function(e) {
                                                    var t = e.slot.getSlotElementId(),
                                                        n = ze.get(t);
                                                    n && n.gptSlot && c.track(i.tracking.ads.display.viewable, {
                                                        size: n.size,
                                                        opportunityId: n.opportunityId,
                                                        adUnitPath: n.adUnitPath
                                                    })
                                                }))
                                        })),
                                        function(e, t) {
                                            window.apstag && window.apstag.init(e.settings || _({
                                                pubID: "e32f1423-28bc-43ed-8ab0-5ae6b4449cf8",
                                                adServer: "googletag",
                                                videoAdServer: "DFP"
                                            }, t ? {
                                                gdpr: {
                                                    cmpTimeout: 1e4
                                                }
                                            } : {}), (function() {
                                                W = !0,
                                                    e.callback && e.callback()
                                            }))
                                        }(b, s),
                                        n.isInitialized = !0,
                                        a.dispatchEvent(i.ready)
                                }
                            }))
                    },
                    e.prototype.requestAd = function(t) {
                        void 0 === t && (t = {});
                        var n = t.autoStart,
                            r = void 0 === n || n,
                            s = t.customCriteria,
                            d = void 0 === s ? {} : s,
                            A = t.onFinish,
                            c = void 0 === A ? null : A,
                            l = t.onStart,
                            u = void 0 === l ? null : l,
                            p = t.position,
                            m = void 0 === p ? null : p;
                        if (this.autoStartOnReady = !1 !== r,
                            c && this.registerHandler("onFinish", c),
                            u && this.registerHandler("onStart", u),
                            this.forceDisableCommercialBreak && [i.ads.position.midroll, i.ads.position.preroll].includes(m))
                            c && c();
                        else {
                            if (!this.sdkBooted)
                                return a.dispatchEvent(i.ads.error, {
                                        message: "Requesting ad on unbooted SDK"
                                    }),
                                    void this.sdkNotBootedButCalled();
                            if (this.sdkImaError)
                                a.dispatchEvent(i.ads.error, {
                                    message: "Adblocker has been detected"
                                });
                            else if (!I() && !E() || m === i.ads.position.rewarded)
                                if (null !== m && o(m, i.ads.position))
                                    if (!ve(this.country) || window.__tcfapi || this.debug)
                                        if (!this.isCCPA || window.__uspapi)
                                            if (this.ima.isAdRunning() || this.waterfall.isRunning())
                                                a.dispatchEvent(i.ads.busy);
                                            else if (this.adReady)
                                a.dispatchEvent(i.ads.ready);
                            else if (m !== i.ads.position.preroll || this.adTimings.prerollPossible())
                                if (m === i.ads.position.rewarded || this.adTimings.requestPossible()) {
                                    var h = Ze(Ze(Ze({}, this.genericCriteria()), this.criteria), {
                                        position: m
                                    });
                                    (e.isPokiPlatform || m === i.ads.position.rewarded) && (h = Ze(Ze({}, h), d)),
                                    this.playerSkin.show(),
                                        this.resize(),
                                        this.waterfall.start(h, m)
                                } else
                                    a.dispatchEvent(i.ads.limit, {
                                        reason: i.info.messages.timeLimit
                                    });
                            else
                                a.dispatchEvent(i.ads.limit, {
                                    reason: i.info.messages.prerollLimit
                                });
                            else
                                a.dispatchEvent(i.ads.error, {
                                    message: "No USP detected, please contact developersupport@poki.com for more information"
                                });
                            else
                                a.dispatchEvent(i.ads.error, {
                                    message: "No CMP detected, please contact developersupport@poki.com for more information"
                                });
                            else
                                console.error("POKI-SDK: Invalid position");
                            else
                                a.dispatchEvent(i.ads.error, {
                                    reason: "Interstitials are disabled on mobile"
                                })
                        }
                    },
                    e.prototype.displayAd = function(e, t) {
                        a.clearAnnotations();
                        var n = Re(),
                            r = i.ads.position.display;
                        if (!ve(this.country) || window.__tcfapi || this.debug)
                            if (!this.isCCPA || window.__uspapi)
                                if (t) {
                                    if (!this.sdkBooted)
                                        return a.dispatchEvent(i.ads.error, {
                                                message: "Requesting ad on unbooted SDK",
                                                position: r
                                            }),
                                            void this.sdkNotBootedButCalled();
                                    if (e)
                                        if (this.sdkImaError)
                                            a.dispatchEvent(i.ads.error, {
                                                message: "Adblocker has been detected",
                                                position: r
                                            });
                                        else {
                                            if (! function(e) {
                                                    return !(!(I() || E() || ["970x250", "300x250", "728x90", "160x600", "320x50"].includes(e)) || (I() || E()) && !["320x50"].includes(e))
                                                }(t))
                                                return a.dispatchEvent(i.ads.error, {
                                                    reason: "Display size " + t + " is not supported on this device",
                                                    position: r
                                                });
                                            var o = Ze(Ze({}, this.genericCriteria()), this.criteria),
                                                s = Qe(e, t);
                                            ! function(e, t) {
                                                window.googletag.cmd.push((function() {
                                                    var n, i = ze.get(e);
                                                    i && i.gptSlot && (null === (n = i.gptSlot) || void 0 === n || n.clearTargeting(),
                                                        Object.keys(t).forEach((function(e) {
                                                            var n;
                                                            null === (n = i.gptSlot) || void 0 === n || n.setTargeting(e, t[e])
                                                        })))
                                                }))
                                            }(s, o),
                                            Ge(s, n)
                                        }
                                    else
                                        a.dispatchEvent(i.ads.error, {
                                            message: "Provided container does not exist",
                                            position: r
                                        })
                                } else
                                    a.dispatchEvent(i.ads.error, {
                                        message: "No ad size given, usage: displayAd(<container>, <size>)",
                                        position: r
                                    });
                        else
                            a.dispatchEvent(i.ads.error, {
                                message: "No USP detected, please contact developersupport@poki.com for more information",
                                position: r
                            });
                        else
                            a.dispatchEvent(i.ads.error, {
                                message: "No CMP detected, please contact developersupport@poki.com for more information",
                                position: r
                            })
                    },
                    e.prototype.destroyAd = function(e) {
                        if (!this.sdkBooted)
                            return a.dispatchEvent(i.ads.displayError, {
                                    message: "Attempting destroyAd on unbooted SDK"
                                }),
                                void this.sdkNotBootedButCalled();
                        this.sdkImaError ? a.dispatchEvent(i.ads.displayError, {
                            message: "Adblocker has been detected"
                        }) : (e = e || document.body,
                            Xe(e))
                    },
                    e.prototype.startStartAdsAfterTimer = function() {
                        this.sdkBooted && !this.sdkImaError ? this.adTimings.startStartAdsAfterTimer() : this.startStartAdsAfterTimerOnInit = !0
                    },
                    e.prototype.enableSettings = function(e) {
                        this.criteria = Ze({}, e.customCriteria),
                            this.adTimings = new p(e.adTiming)
                    },
                    e.prototype.togglePlayerAdvertisingConsent = function(e) {
                        if (e) {
                            var t, n = parseInt(function(e) {
                                    if (!pe)
                                        return me[e];
                                    try {
                                        return localStorage.getItem(e)
                                    } catch (t) {
                                        return me[e]
                                    }
                                }("playerAge"), 10) || 0,
                                i = this.country,
                                r = ve(i),
                                a = (t = i,
                                    fe.includes(t)),
                                o = ke(i);
                            (r || a || ke) && (r && n <= 12 || a && n <= 16 || o && n <= 16) ? this.disableProgrammatic(): this.enableProgrammatic()
                        } else
                            this.disableProgrammatic()
                    },
                    e.prototype.disableProgrammatic = function() {
                        e.childDirected = !0,
                            this.programmaticAdsEnabled = !1
                    },
                    e.prototype.enableProgrammatic = function() {
                        e.childDirected = !1,
                            this.programmaticAdsEnabled = !0
                    },
                    e.prototype.getProgrammaticAdsEnabled = function() {
                        return this.programmaticAdsEnabled
                    },
                    e.prototype.setDebug = function(e) {
                        var t = this;
                        this.debugIsOverwritten ? e && c.track(i.tracking.debugTrueInProduction) : (c.setDebug(e),
                            a.setDebug(e),
                            this.waterfall ? this.waterfall.setDebug(e) : a.addEventListener(i.ready, (function() {
                                t.waterfall && t.waterfall.setDebug(e)
                            })),
                            Oe = e,
                            this.debug = e)
                    },
                    e.prototype.resize = function() {
                        var e = this;
                        if (!this.sdkBooted)
                            return this.sdkNotBootedButCalled();
                        if (!this.sdkImaError) {
                            var t = this.playerSkin.getVideoBounds();
                            0 !== t.width && 0 !== t.height ? this.ima.resize(t.width, t.height) : setTimeout((function() {
                                e.resize()
                            }), 100)
                        }
                    },
                    e.prototype.onMessage = function(e) {
                        if ("string" == typeof e.data.type)
                            switch (e.data.type) {
                                case "toggleNonPersonalized":
                                    this.toggleNonPersonalized(!(!e.data.content || !e.data.content.nonPersonalized));
                                    break;
                                case "setPersonalizedADConsent":
                                    this.toggleNonPersonalized(!(e.data.content && e.data.content.consent)),
                                        this.setConsentString(e.data.content ? e.data.content.consentString : "");
                                    break;
                                case "forceDisableCommercialBreak":
                                    this.forceDisableCommercialBreak = !0
                            }
                    },
                    e.prototype.startAd = function() {
                        if (!this.sdkBooted)
                            return this.sdkNotBootedButCalled();
                        this.sdkImaError || (this.adReady ? (this.resize(),
                            this.ima.startPlayback()) : a.dispatchEvent(i.ads.error, {
                            message: "No ads ready to start"
                        }))
                    },
                    e.prototype.startAdClicked = function() {
                        "undefined" != typeof navigator && /(iPad|iPhone|iPod)/gi.test(navigator.userAgent) && this.startAdEnabled && (this.startAdEnabled = !1,
                            this.playerSkin.hideStartAdButton(),
                            this.ima.startIOSPlayback())
                    },
                    e.prototype.stopAd = function() {
                        if (!this.sdkBooted)
                            return this.sdkNotBootedButCalled();
                        this.sdkImaError || (this.waterfall.stopWaterfall(),
                            this.ima.stopPlayback(),
                            this.playerSkin.hide())
                    },
                    e.prototype.resumeAd = function() {
                        if (!this.sdkBooted)
                            return this.sdkNotBootedButCalled();
                        this.sdkImaError || (this.playerSkin.hidePauseButton(),
                            this.ima.resumeAd())
                    },
                    e.prototype.skipAd = function() {
                        this.stopAd(),
                            this.callHandler("onFinish", {
                                type: i.ads.completed,
                                rewardAllowed: !0
                            })
                    },
                    e.prototype.muteAd = function() {
                        if (!this.sdkBooted)
                            return this.sdkNotBootedButCalled();
                        this.sdkImaError || this.ima.muteAd()
                    },
                    e.prototype.registerHandler = function(e, t) {
                        this.handlers[e] = t
                    },
                    e.prototype.callHandler = function(e) {
                        for (var t = [], n = 1; n < arguments.length; n++)
                            t[n - 1] = arguments[n];
                        "function" == typeof this.handlers[e] && this.handlers[e](t)
                    },
                    e.prototype.setupDefaultEvents = function() {
                        var e = this;
                        a.addEventListener(i.ready, (function() {
                                e.sdkBooted = !0,
                                    e.callHandler("onReady")
                            })),
                            a.addEventListener(i.adblocked, (function() {
                                e.sdkBooted = !0,
                                    e.sdkImaError = !0,
                                    e.callHandler("onAdblocked")
                            })),
                            a.addEventListener(i.ads.ready, (function() {
                                e.adReady = !0,
                                    e.autoStartOnReady && e.startAd()
                            })),
                            a.addEventListener(i.ads.started, (function() {
                                e.playerSkin.hideSpinner(),
                                    e.callHandler("onStart", {
                                        type: i.ads.limit
                                    })
                            })),
                            a.addEventListener(i.ads.video.paused, (function() {
                                e.playerSkin.showPauseButton()
                            })),
                            a.addEventListener(i.ads.limit, (function() {
                                e.callHandler("onFinish", {
                                    type: i.ads.limit,
                                    rewardAllowed: !1
                                })
                            })),
                            a.addEventListener(i.ads.stopped, (function() {
                                e.callHandler("onFinish", {
                                    type: i.ads.stopped,
                                    rewardAllowed: !1
                                })
                            })),
                            a.addEventListener(i.ads.error, (function() {
                                e.callHandler("onFinish", {
                                    type: i.ads.error,
                                    rewardAllowed: !1
                                })
                            })),
                            a.addEventListener(i.ads.busy, (function() {
                                e.callHandler("onFinish", {
                                    type: i.ads.busy,
                                    rewardAllowed: !1
                                })
                            })),
                            a.addEventListener(i.ads.completed, (function(t) {
                                e.callHandler("onFinish", {
                                    type: i.ads.completed,
                                    rewardAllowed: !!t.rewardAllowed
                                })
                            })), [i.ads.limit, i.ads.stopped, i.ads.error, i.ads.busy, i.ads.completed].forEach((function(t) {
                                a.addEventListener(t, (function() {
                                    e.playerSkin && e.playerSkin.hide(),
                                        e.adReady = !1
                                }))
                            }))
                    },
                    e.prototype.genericCriteria = function() {
                        var e = {},
                            t = encodeURIComponent(x("tag") || ""),
                            n = encodeURIComponent(x("site_id") || ""),
                            i = encodeURIComponent(x("experiment") || ""),
                            r = encodeURIComponent(x("categories") || "");
                        return e.tag = t,
                            e.tag_site = t + "|" + n,
                            e.site_id = n,
                            e.experiment = i,
                            e.categories = r,
                            this.programmaticAdsEnabled || (e.disable_programmatic = 1),
                            e
                    },
                    e.prototype.setVolume = function(e) {
                        this.ima && this.ima.setVolume(e)
                    },
                    e.GetIsPokiPlatform = function() {
                        return e.isPokiPlatform
                    },
                    e.GetIsPokiIFrame = function() {
                        return (parseInt(x("site_id"), 10) || 0) > 0
                    },
                    e.childDirected = !1,
                    e.isPokiPlatform = !1,
                    e.nonPersonalized = !1,
                    e.consentString = "",
                    e
            }();

            function We(e) {
                switch (Object.prototype.toString.call(e)) {
                    case "[object Error]":
                    case "[object Exception]":
                    case "[object DOMException]":
                        return !0;
                    default:
                        return e instanceof Error
                }
            }
            var He = "poki_erruid",
                Ue = Date.now(),
                Ve = h(He);

            function Ke(e) {
                if (Ne.gameId && Ne.versionId) {
                    if (!(Date.now() < Ue)) {
                        Ve || (Ve = Math.random().toString(36).substr(2, 9),
                            g(He, Ve));
                        try {
                            var t = JSON.stringify({
                                    gid: Ne.gameId,
                                    vid: Ne.versionId,
                                    ve: 7,
                                    n: e.name,
                                    m: e.message,
                                    s: JSON.stringify(e.stack),
                                    ui: Ve
                                }),
                                n = "https://t.poki.io/ge";
                            if (navigator.sendBeacon)
                                navigator.sendBeacon(n, t);
                            else {
                                var i = new XMLHttpRequest;
                                i.open("POST", n, !0),
                                    i.send(t)
                            }
                            Ue = Date.now() + 100
                        } catch (e) {
                            console.error(e)
                        }
                    }
                } else
                    console.log(e)
            }
            "undefined" != typeof window && (t().remoteFetching = !1,
                t().report.subscribe((function(e) {
                    if ("Script error." === e.message && window.pokiLastCatch) {
                        var n = window.pokiLastCatch;
                        window.pokiLastCatch = null,
                            t().report(n)
                    } else
                        Ke(e)
                })),
                window.onunhandledrejection = function(e) {
                    We(e.reason) ? t().report(e.reason) : Ke({
                        name: "unhandledrejection",
                        message: JSON.stringify(e.reason)
                    })
                }
            );
            var Je = function() {
                return (Je = Object.assign || function(e) {
                    for (var t, n = 1, i = arguments.length; n < i; n++)
                        for (var r in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }).apply(this, arguments)
            };
            var qe = new(function() {
                function t() {
                    var t = this;
                    this.gameStarted = !1,
                        this.SDK = new Fe,
                        this.gameplayStartCounter = 0,
                        this.gameplayStopCounter = 0,
                        this.init = function(e) {
                            return void 0 === e && (e = {}),
                                new Promise((function(n, r) {
                                    e && e.adTagUrl && window && (window.__InternalSDK = t.SDK),
                                        t.SDK.init(Je({
                                            onReady: n,
                                            onAdblocked: r
                                        }, e)),
                                        s.sendMessage(i.message.sdkDetails, {
                                            version: "2.172.0"
                                        })
                                }))
                        },
                        this.initWithVideoHB = function() {
                            return t.init()
                        },
                        this.gameLoadingProgress = function(e) {
                            var t = {};
                            void 0 !== e.percentageDone && (t.percentageDone = Number(e.percentageDone)),
                                void 0 !== e.kbLoaded && (t.kbLoaded = Number(e.kbLoaded)),
                                void 0 !== e.kbTotal && (t.kbTotal = Number(e.kbTotal)),
                                void 0 !== e.fileNameLoaded && (t.fileNameLoaded = String(e.fileNameLoaded)),
                                void 0 !== e.filesLoaded && (t.filesLoaded = Number(e.filesLoaded)),
                                void 0 !== e.filesTotal && (t.filesTotal = Number(e.filesTotal)),
                                c.track(i.tracking.screen.gameLoadingProgress, t)
                        },
                        this.gameLoadingStart = function() {
                            c.track(i.tracking.screen.gameLoadingStarted)
                        },
                        this.gameLoadingFinished = function() {
                            c.track(i.tracking.screen.gameLoadingFinished)
                        },
                        this.gameplayStart = function(e) {
                            t.gameplayStartCounter++,
                                t.gameStarted || (t.gameStarted = !0,
                                    c.track(i.tracking.screen.firstRound),
                                    t.SDK.startStartAdsAfterTimer()),
                                c.track(i.tracking.screen.gameplayStart, Je(Je({}, e), {
                                    playId: t.gameplayStartCounter
                                }))
                        },
                        this.gameInteractive = function() {
                            c.track(i.tracking.screen.gameInteractive)
                        },
                        this.gameplayStop = function(e) {
                            t.gameplayStopCounter++,
                                c.track(i.tracking.screen.gameplayStop, Je(Je({}, e), {
                                    playId: t.gameplayStartCounter,
                                    stopId: t.gameplayStopCounter
                                }))
                        },
                        this.roundStart = function(e) {
                            void 0 === e && (e = ""),
                                e = String(e),
                                c.track(i.tracking.screen.roundStart, {
                                    identifier: e
                                })
                        },
                        this.roundEnd = function(e) {
                            void 0 === e && (e = ""),
                                e = String(e),
                                c.track(i.tracking.screen.roundEnd, {
                                    identifier: e
                                })
                        },
                        this.customEvent = function(e, n, r) {
                            void 0 === r && (r = {}),
                                e && n ? (e = String(e),
                                    n = String(n),
                                    r = Je({}, r),
                                    c.track(i.tracking.custom, {
                                        eventNoun: e,
                                        eventVerb: n,
                                        eventData: r
                                    })) : t.error("customEvent", "customEvent needs at least a noun and a verb")
                        },
                        this.commercialBreak = function() {
                            return new Promise((function(e) {
                                var n = t.gameStarted ? i.ads.position.midroll : i.ads.position.preroll;
                                a.clearAnnotations(),
                                    a.setDataAnnotations({
                                        opportunityId: Re(),
                                        position: n
                                    }),
                                    c.track(i.tracking.screen.commercialBreak),
                                    t.SDK.requestAd({
                                        position: n,
                                        onFinish: e
                                    })
                            }))
                        },
                        this.rewardedBreak = function() {
                            return new Promise((function(e) {
                                var n = i.ads.position.rewarded;
                                a.clearAnnotations(),
                                    a.setDataAnnotations({
                                        opportunityId: Re(),
                                        position: n
                                    }),
                                    c.track(i.tracking.screen.rewardedBreak),
                                    t.SDK.requestAd({
                                        position: n,
                                        onFinish: function(t) {
                                            t.length > 0 ? e(t[0].rewardAllowed) : e(!1)
                                        }
                                    })
                            }))
                        },
                        this.happyTime = function(e) {
                            void 0 === e && (e = 1),
                                ((e = Number(e)) < 0 || e > 1) && (e = Math.max(0, Math.min(1, e)),
                                    t.warning("happyTime", "Intensity should be a value between 0 and 1, adjusted to " + e)),
                                c.track(i.tracking.screen.happyTime, {
                                    intensity: e
                                })
                        },
                        this.muteAd = function() {
                            t.SDK.muteAd()
                        },
                        this.setPlayerAge = function(e) {
                            e && t.SDK.setPlayerAge(e)
                        },
                        this.togglePlayerAdvertisingConsent = function(e) {
                            c.track(i.tracking.togglePlayerAdvertisingConsent, {
                                    didConsent: e
                                }),
                                t.SDK.togglePlayerAdvertisingConsent(e),
                                s.sendMessage(i.message.toggleProgrammaticAds, {
                                    enabled: t.SDK.getProgrammaticAdsEnabled()
                                })
                        },
                        this.logError = function(t) {
                            We(t) ? e.report(t) : Ke({
                                name: "logError",
                                message: JSON.stringify(t)
                            })
                        },
                        this.sendHighscore = function() {},
                        this.setDebugTouchOverlayController = function(e) {
                            t.SDK.debugTouchOverlayController = e
                        },
                        this.getLeaderboard = function() {
                            return Promise.resolve([])
                        },
                        this.warning = function(e, t) {
                            console.warn("PokiSDK." + e + ": " + t)
                        },
                        this.error = function(e, t) {
                            console.error("PokiSDK." + e + ": " + t)
                        }
                }
                return t.prototype.setDebug = function(e) {
                        void 0 === e && (e = !0),
                            this.SDK.setDebug(e)
                    },
                    t.prototype.disableProgrammatic = function() {
                        this.SDK.disableProgrammatic()
                    },
                    t.prototype.toggleNonPersonalized = function(e) {
                        void 0 === e && (e = !1),
                            this.SDK.toggleNonPersonalized(e)
                    },
                    t.prototype.setConsentString = function(e) {
                        this.SDK.setConsentString(e)
                    },
                    t.prototype.displayAd = function(e, t) {
                        c.track(i.tracking.screen.displayAd, {
                                size: t
                            }),
                            this.SDK.displayAd(e, t)
                    },
                    t.prototype.destroyAd = function(e) {
                        this.SDK.destroyAd(e)
                    },
                    t.prototype.setVolume = function(e) {
                        this.SDK.setVolume(e)
                    },
                    t
            }());
            for (var Ye in qe)
                window.PokiSDK[Ye] = qe[Ye]
        })()
})();