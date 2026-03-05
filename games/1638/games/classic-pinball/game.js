var _SETTINGS = {
    API: {
        Enabled: !1,
        Log: {
            Events: {
                InitializeGame: !0,
                EndGame: !0,
                Level: {
                    Begin: !0,
                    End: !0,
                    Win: !0,
                    Lose: !0,
                    Draw: !0
                }
            }
        }
    },
    Ad: {
        Mobile: {
            Preroll: {
                Enabled: !1,
                Duration: 5,
                Width: 300,
                Height: 250,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGamePreroll: 40,
                        MobileAdInGamePreroll2: 40,
                        MobileAdInGamePreroll3: 20
                    }
                }
            },
            Header: {
                Enabled: !1,
                Duration: 5,
                Width: 320,
                Height: 50,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGameHeader: 40,
                        MobileAdInGameHeader2: 40,
                        MobileAdInGameHeader3: 20
                    }
                }
            },
            Footer: {
                Enabled: !1,
                Duration: 5,
                Width: 320,
                Height: 50,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGameFooter: 40,
                        MobileAdInGameFooter2: 40,
                        MobileAdInGameFooter3: 20
                    }
                }
            },
            End: {
                Enabled: !1,
                Duration: 1,
                Width: 300,
                Height: 250,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGameEnd: 40,
                        MobileAdInGameEnd2: 40,
                        MobileAdInGameEnd3: 20
                    }
                }
            }
        }
    },
    Language: {
        Default: "en"
    },
    DeveloperBranding: {
        Splash: {
            Enabled: !1
        },
        Logo: {
            Enabled: !1,
            Link: "http://google.com",
            LinkEnabled: !1,
            NewWindow: !0,
            Width: 166,
            Height: 61
        }
    },
    Branding: {
        Splash: {
            Enabled: !1
        },
        Logo: {
            Enabled: !1,
            Link: "http://google.com",
            LinkEnabled: !1,
            NewWindow: !0,
            Width: 166,
            Height: 61
        }
    },
    MoreGames: {
        Enabled: !1,
        Link: "http://www.marketjs.com/game/links/mobile",
        NewWindow: !0
    }
};
var _STRINGS = {
    Ad: {
        Mobile: {
            Preroll: {
                ReadyIn: "The game is ready in ",
                Loading: "Your game is loading...",
                Close: "Close"
            },
            Header: {
                ReadyIn: "The game is ready in ",
                Loading: "Your game is loading...",
                Close: "Close"
            },
            End: {
                ReadyIn: "Advertisement ends in ",
                Loading: "Please wait ...",
                Close: "Close"
            }
        }
    },
    Splash: {
        TapToStart: "TAP TO START"
    },
    Menu: {
        ButtonStart: "START",
        ButtonSettings: "SETTINGS",
        ButtonMoreGames: "MORE GAMES"
    },
    Game: {
        Pause: "PAUSE",
        Highscore: "HIGH SCORE",
        Score: "YOUR SCORE",
        Numbers: ["1st", "2nd", "3rd", "4th", "5th"],
        TutorialDesktop: 'Welcome to Classic Pinball;Press "RIGHT" to move right paddle;Press "LEFT" to move left paddle;You have 3 balls to launch;Press and hold "Spacebar" to pull launcher;Release "Spacebar" to launch the ball'.split(";"),
        TutorialMobile: "Welcome to Classic Pinball;Touch this side to move right paddle;Touch this side to move left paddle;You have 3 balls to launch;Press and hold launcher to pull it;Release to launch the ball".split(";")
    }
};
var MobileAdInGamePreroll = {};
var MobileAdInGameHeader = {};
var MobileAdInGameFooter = {};
var MobileAdInGameEnd = {};
! function(b, c) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = b.document ? c(b, !0) : function(b) {
        if (!b.document) throw Error("jQuery requires a window with a document");
        return c(b)
    } : c(b)
}("undefined" != typeof window ? window : this, function(b, c) {
    function d(b, c) {
        c = c || X;
        var d = c.createElement("script");
        d.text = b;
        c.head.appendChild(d).parentNode.removeChild(d)
    }

    function e(b) {
        var c = !!b && "length" in b && b.length,
            d = p.type(b);
        return "function" !== d && !p.isWindow(b) && ("array" === d || 0 === c || "number" ==
            typeof c && 0 < c && c - 1 in b)
    }

    function f(b, c) {
        return b.nodeName && b.nodeName.toLowerCase() === c.toLowerCase()
    }

    function j(b, c, d) {
        return p.isFunction(c) ? p.grep(b, function(b, Z) {
            return !!c.call(b, Z, b) !== d
        }) : c.nodeType ? p.grep(b, function(b) {
            return b === c !== d
        }) : "string" != typeof c ? p.grep(b, function(b) {
            return -1 < Ka.call(c, b) !== d
        }) : Hc.test(c) ? p.filter(c, b, d) : (c = p.filter(c, b), p.grep(b, function(b) {
            return -1 < Ka.call(c, b) !== d && 1 === b.nodeType
        }))
    }

    function n(b, c) {
        for (;
            (b = b[c]) && 1 !== b.nodeType;);
        return b
    }

    function l(b) {
        return b
    }

    function g(b) {
        throw b;
    }

    function r(b, c, d, g) {
        var m;
        try {
            b && p.isFunction(m = b.promise) ? m.call(b).done(c).fail(d) : b && p.isFunction(m = b.then) ? m.call(b, c, d) : c.apply(void 0, [b].slice(g))
        } catch (e) {
            d.apply(void 0, [e])
        }
    }

    function y() {
        X.removeEventListener("DOMContentLoaded", y);
        b.removeEventListener("load", y);
        p.ready()
    }

    function z() {
        this.expando = p.expando + z.uid++
    }

    function A(b, c, d) {
        var g;
        if (void 0 === d && 1 === b.nodeType)
            if (g = "data-" + c.replace(Ic, "-$&").toLowerCase(), d = b.getAttribute(g), "string" == typeof d) {
                try {
                    d = "true" ===
                        d || "false" !== d && ("null" === d ? null : d === +d + "" ? +d : Jc.test(d) ? JSON.parse(d) : d)
                } catch (m) {}
                qa.set(b, c, d)
            } else d = void 0;
        return d
    }

    function B(b, c, d, g) {
        var m, e = 1,
            t = 20,
            f = g ? function() {
                return g.cur()
            } : function() {
                return p.css(b, c, "")
            },
            q = f(),
            s = d && d[3] || (p.cssNumber[c] ? "" : "px"),
            j = (p.cssNumber[c] || "px" !== s && +q) && nb.exec(p.css(b, c));
        if (j && j[3] !== s) {
            s = s || j[3];
            d = d || [];
            j = +q || 1;
            do e = e || ".5", j /= e, p.style(b, c, j + s); while (e !== (e = f() / q) && 1 !== e && --t)
        }
        return d && (j = +j || +q || 0, m = d[1] ? j + (d[1] + 1) * d[2] : +d[2], g && (g.unit = s, g.start = j,
            g.end = m)), m
    }

    function E(b, c) {
        for (var d, g, m = [], e = 0, t = b.length; e < t; e++)
            if (g = b[e], g.style)
                if (d = g.style.display, c) {
                    if ("none" === d && (m[e] = S.get(g, "display") || null, m[e] || (g.style.display = "")), "" === g.style.display && Bb(g)) {
                        d = m;
                        var f = e,
                            q, s = void 0;
                        q = g.ownerDocument;
                        var j = g.nodeName;
                        q = (g = Zb[j]) ? g : (s = q.body.appendChild(q.createElement(j)), g = p.css(s, "display"), s.parentNode.removeChild(s), "none" === g && (g = "block"), Zb[j] = g, g);
                        d[f] = q
                    }
                } else "none" !== d && (m[e] = "none", S.set(g, "display", d));
        for (e = 0; e < t; e++) null != m[e] && (b[e].style.display =
            m[e]);
        return b
    }

    function D(b, c) {
        var d;
        return d = "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(c || "*") : "undefined" != typeof b.querySelectorAll ? b.querySelectorAll(c || "*") : [], void 0 === c || c && f(b, c) ? p.merge([b], d) : d
    }

    function u(b, c) {
        for (var d = 0, g = b.length; d < g; d++) S.set(b[d], "globalEval", !c || S.get(c[d], "globalEval"))
    }

    function G(b, c, d, g, m) {
        for (var e, t, f, q, s = c.createDocumentFragment(), j = [], l = 0, M = b.length; l < M; l++)
            if (e = b[l], e || 0 === e)
                if ("object" === p.type(e)) p.merge(j, e.nodeType ? [e] : e);
                else if (Kc.test(e)) {
            t =
                t || s.appendChild(c.createElement("div"));
            f = ($b.exec(e) || ["", ""])[1].toLowerCase();
            f = ta[f] || ta._default;
            t.innerHTML = f[1] + p.htmlPrefilter(e) + f[2];
            for (f = f[0]; f--;) t = t.lastChild;
            p.merge(j, t.childNodes);
            t = s.firstChild;
            t.textContent = ""
        } else j.push(c.createTextNode(e));
        s.textContent = "";
        for (l = 0; e = j[l++];)
            if (g && -1 < p.inArray(e, g)) m && m.push(e);
            else if (q = p.contains(e.ownerDocument, e), t = D(s.appendChild(e), "script"), q && u(t), d)
            for (f = 0; e = t[f++];) ac.test(e.type || "") && d.push(e);
        return s
    }

    function K() {
        return !0
    }

    function L() {
        return !1
    }

    function N() {
        try {
            return X.activeElement
        } catch (b) {}
    }

    function Q(b, c, d, g, m, e) {
        var t, f;
        if ("object" == typeof c) {
            "string" != typeof d && (g = g || d, d = void 0);
            for (f in c) Q(b, f, d, g, c[f], e);
            return b
        }
        if (null == g && null == m ? (m = d, g = d = void 0) : null == m && ("string" == typeof d ? (m = g, g = void 0) : (m = g, g = d, d = void 0)), !1 === m) m = L;
        else if (!m) return b;
        return 1 === e && (t = m, m = function(b) {
            return p().off(b), t.apply(this, arguments)
        }, m.guid = t.guid || (t.guid = p.guid++)), b.each(function() {
            p.event.add(this, c, m, g, d)
        })
    }

    function I(b, c) {
        return f(b, "table") &&
            f(11 !== c.nodeType ? c : c.firstChild, "tr") ? p(">tbody", b)[0] || b : b
    }

    function fa(b) {
        return b.type = (null !== b.getAttribute("type")) + "/" + b.type, b
    }

    function O(b) {
        var c = Lc.exec(b.type);
        return c ? b.type = c[1] : b.removeAttribute("type"), b
    }

    function P(b, c) {
        var d, g, m, e, t, f;
        if (1 === c.nodeType) {
            if (S.hasData(b) && (d = S.access(b), g = S.set(c, d), f = d.events))
                for (m in delete g.handle, g.events = {}, f) {
                    d = 0;
                    for (g = f[m].length; d < g; d++) p.event.add(c, m, f[m][d])
                }
            qa.hasData(b) && (e = qa.access(b), t = p.extend({}, e), qa.set(c, t))
        }
    }

    function ba(b, c,
        g, m) {
        c = bb.apply([], c);
        var e, t, f, q, s = 0,
            j = b.length,
            l = j - 1,
            M = c[0],
            x = p.isFunction(M);
        if (x || 1 < j && "string" == typeof M && !da.checkClone && Mc.test(M)) return b.each(function(d) {
            var e = b.eq(d);
            x && (c[0] = M.call(this, d, e.html()));
            ba(e, c, g, m)
        });
        if (j && (e = G(c, b[0].ownerDocument, !1, b, m), t = e.firstChild, 1 === e.childNodes.length && (e = t), t || m)) {
            t = p.map(D(e, "script"), fa);
            for (f = t.length; s < j; s++) q = e, s !== l && (q = p.clone(q, !0, !0), f && p.merge(t, D(q, "script"))), g.call(b[s], q, s);
            if (f) {
                e = t[t.length - 1].ownerDocument;
                p.map(t, O);
                for (s = 0; s <
                    f; s++) q = t[s], ac.test(q.type || "") && !S.access(q, "globalEval") && p.contains(e, q) && (q.src ? p._evalUrl && p._evalUrl(q.src) : d(q.textContent.replace(Oc, ""), e))
            }
        }
        return b
    }

    function U(b, c, d) {
        for (var g = c ? p.filter(c, b) : b, m = 0; null != (c = g[m]); m++) d || 1 !== c.nodeType || p.cleanData(D(c)), c.parentNode && (d && p.contains(c.ownerDocument, c) && u(D(c, "script")), c.parentNode.removeChild(c));
        return b
    }

    function s(b, c, d) {
        var g, m, e, t, f = b.style;
        return d = d || Cb(b), d && (t = d.getPropertyValue(c) || d[c], "" !== t || p.contains(b.ownerDocument, b) ||
            (t = p.style(b, c)), !da.pixelMarginRight() && Rb.test(t) && bc.test(c) && (g = f.width, m = f.minWidth, e = f.maxWidth, f.minWidth = f.maxWidth = f.width = t, t = d.width, f.width = g, f.minWidth = m, f.maxWidth = e)), void 0 !== t ? t + "" : t
    }

    function x(b, c) {
        return {
            get: function() {
                return b() ? void delete this.get : (this.get = c).apply(this, arguments)
            }
        }
    }

    function F(b) {
        var c = p.cssProps[b];
        if (!c) {
            var c = p.cssProps,
                d;
            a: if (d = b, !(d in cc)) {
                for (var g = d[0].toUpperCase() + d.slice(1), m = dc.length; m--;)
                    if (d = dc[m] + g, d in cc) break a;
                d = void 0
            }
            c = c[b] = d || b
        }
        return c
    }

    function C(b, c, d) {
        return (b = nb.exec(c)) ? Math.max(0, b[2] - (d || 0)) + (b[3] || "px") : c
    }

    function H(b, c, d, g, m) {
        var e = 0;
        for (c = d === (g ? "border" : "content") ? 4 : "width" === c ? 1 : 0; 4 > c; c += 2) "margin" === d && (e += p.css(b, d + Ta[c], !0, m)), g ? ("content" === d && (e -= p.css(b, "padding" + Ta[c], !0, m)), "margin" !== d && (e -= p.css(b, "border" + Ta[c] + "Width", !0, m))) : (e += p.css(b, "padding" + Ta[c], !0, m), "padding" !== d && (e += p.css(b, "border" + Ta[c] + "Width", !0, m)));
        return e
    }

    function aa(b, c, d) {
        var g, m = Cb(b),
            e = s(b, c, m),
            t = "border-box" === p.css(b, "boxSizing", !1, m);
        return Rb.test(e) ? e : (g = t && (da.boxSizingReliable() || e === b.style[c]), "auto" === e && (e = b["offset" + c[0].toUpperCase() + c.slice(1)]), e = parseFloat(e) || 0, e + H(b, c, d || (t ? "border" : "content"), g, m) + "px")
    }

    function R(b, c, d, g, m) {
        return new R.prototype.init(b, c, d, g, m)
    }

    function m() {
        Db && (!1 === X.hidden && b.requestAnimationFrame ? b.requestAnimationFrame(m) : b.setTimeout(m, p.fx.interval), p.fx.tick())
    }

    function q() {
        return b.setTimeout(function() {
            cb = void 0
        }), cb = p.now()
    }

    function J(b, c) {
        var d, g = 0,
            m = {
                height: b
            };
        for (c = c ? 1 : 0; 4 >
            g; g += 2 - c) d = Ta[g], m["margin" + d] = m["padding" + d] = b;
        return c && (m.opacity = m.width = b), m
    }

    function t(b, c, d) {
        for (var g, m = (M.tweeners[c] || []).concat(M.tweeners["*"]), e = 0, t = m.length; e < t; e++)
            if (g = m[e].call(d, c, b)) return g
    }

    function M(b, c, d) {
        var g, m, e = 0,
            f = M.prefilters.length,
            s = p.Deferred().always(function() {
                delete j.elem
            }),
            j = function() {
                if (m) return !1;
                for (var c = cb || q(), c = Math.max(0, l.startTime + l.duration - c), d = 1 - (c / l.duration || 0), g = 0, e = l.tweens.length; g < e; g++) l.tweens[g].run(d);
                return s.notifyWith(b, [l, d, c]), 1 > d &&
                    e ? c : (e || s.notifyWith(b, [l, 1, 0]), s.resolveWith(b, [l]), !1)
            },
            l = s.promise({
                elem: b,
                props: p.extend({}, c),
                opts: p.extend(!0, {
                    specialEasing: {},
                    easing: p.easing._default
                }, d),
                originalProperties: c,
                originalOptions: d,
                startTime: cb || q(),
                duration: d.duration,
                tweens: [],
                createTween: function(c, d) {
                    var g = p.Tween(b, l.opts, c, d, l.opts.specialEasing[c] || l.opts.easing);
                    return l.tweens.push(g), g
                },
                stop: function(c) {
                    var d = 0,
                        g = c ? l.tweens.length : 0;
                    if (m) return this;
                    for (m = !0; d < g; d++) l.tweens[d].run(1);
                    return c ? (s.notifyWith(b, [l, 1, 0]),
                        s.resolveWith(b, [l, c])) : s.rejectWith(b, [l, c]), this
                }
            });
        c = l.props;
        d = l.opts.specialEasing;
        var x, r, C, V;
        for (g in c)
            if (x = p.camelCase(g), r = d[x], C = c[g], Array.isArray(C) && (r = C[1], C = c[g] = C[0]), g !== x && (c[x] = C, delete c[g]), V = p.cssHooks[x], V && "expand" in V)
                for (g in C = V.expand(C), delete c[x], C) g in c || (c[g] = C[g], d[g] = r);
            else d[x] = r;
        for (; e < f; e++)
            if (g = M.prefilters[e].call(l, b, c, l.opts)) return p.isFunction(g.stop) && (p._queueHooks(l.elem, l.opts.queue).stop = p.proxy(g.stop, g)), g;
        return p.map(c, t, l), p.isFunction(l.opts.start) &&
            l.opts.start.call(b, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), p.fx.timer(p.extend(j, {
                elem: b,
                anim: l,
                queue: l.opts.queue
            })), l
    }

    function V(b) {
        return (b.match(ua) || []).join(" ")
    }

    function ha(b) {
        return b.getAttribute && b.getAttribute("class") || ""
    }

    function ia(b, c, d, g) {
        var m;
        if (Array.isArray(c)) p.each(c, function(c, m) {
            d || Pc.test(b) ? g(b, m) : ia(b + "[" + ("object" == typeof m && null != m ? c : "") + "]", m, d, g)
        });
        else if (d || "object" !== p.type(c)) g(b, c);
        else
            for (m in c) ia(b +
                "[" + m + "]", c[m], d, g)
    }

    function la(b) {
        return function(c, d) {
            "string" != typeof c && (d = c, c = "*");
            var g, m = 0,
                e = c.toLowerCase().match(ua) || [];
            if (p.isFunction(d))
                for (; g = e[m++];) "+" === g[0] ? (g = g.slice(1) || "*", (b[g] = b[g] || []).unshift(d)) : (b[g] = b[g] || []).push(d)
        }
    }

    function ra(b, c, d, g) {
        function m(f) {
            var q;
            return e[f] = !0, p.each(b[f] || [], function(b, Z) {
                var f = Z(c, d, g);
                return "string" != typeof f || t || e[f] ? t ? !(q = f) : void 0 : (c.dataTypes.unshift(f), m(f), !1)
            }), q
        }
        var e = {},
            t = b === Sb;
        return m(c.dataTypes[0]) || !e["*"] && m("*")
    }

    function oa(b,
        c) {
        var d, g, m = p.ajaxSettings.flatOptions || {};
        for (d in c) void 0 !== c[d] && ((m[d] ? b : g || (g = {}))[d] = c[d]);
        return g && p.extend(!0, b, g), b
    }
    var va = [],
        X = b.document,
        Eb = Object.getPrototypeOf,
        za = va.slice,
        bb = va.concat,
        db = va.push,
        Ka = va.indexOf,
        La = {},
        eb = La.toString,
        Ma = La.hasOwnProperty,
        ob = Ma.toString,
        pb = ob.call(Object),
        da = {},
        p = function(b, c) {
            return new p.fn.init(b, c)
        },
        qb = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        Fb = /^-ms-/,
        Gb = /-([a-z])/g,
        rb = function(b, c) {
            return c.toUpperCase()
        };
    p.fn = p.prototype = {
        jquery: "3.2.1",
        constructor: p,
        length: 0,
        toArray: function() {
            return za.call(this)
        },
        get: function(b) {
            return null == b ? za.call(this) : 0 > b ? this[b + this.length] : this[b]
        },
        pushStack: function(b) {
            b = p.merge(this.constructor(), b);
            return b.prevObject = this, b
        },
        each: function(b) {
            return p.each(this, b)
        },
        map: function(b) {
            return this.pushStack(p.map(this, function(c, d) {
                return b.call(c, d, c)
            }))
        },
        slice: function() {
            return this.pushStack(za.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(b) {
            var c = this.length;
            b = +b + (0 > b ? c : 0);
            return this.pushStack(0 <= b && b < c ? [this[b]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: db,
        sort: va.sort,
        splice: va.splice
    };
    p.extend = p.fn.extend = function() {
        var b, c, d, g, m, e, t = arguments[0] || {},
            f = 1,
            q = arguments.length,
            s = !1;
        "boolean" == typeof t && (s = t, t = arguments[f] || {}, f++);
        "object" == typeof t || p.isFunction(t) || (t = {});
        for (f === q && (t = this, f--); f < q; f++)
            if (null != (b = arguments[f]))
                for (c in b) d = t[c], g = b[c], t !== g && (s && g && (p.isPlainObject(g) || (m = Array.isArray(g))) ? (m ? (m = !1, e = d &&
                    Array.isArray(d) ? d : []) : e = d && p.isPlainObject(d) ? d : {}, t[c] = p.extend(s, e, g)) : void 0 !== g && (t[c] = g));
        return t
    };
    p.extend({
        expando: "jQuery" + ("3.2.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(b) {
            throw Error(b);
        },
        noop: function() {},
        isFunction: function(b) {
            return "function" === p.type(b)
        },
        isWindow: function(b) {
            return null != b && b === b.window
        },
        isNumeric: function(b) {
            var c = p.type(b);
            return ("number" === c || "string" === c) && !isNaN(b - parseFloat(b))
        },
        isPlainObject: function(b) {
            var c, d;
            return !(!b || "[object Object]" !==
                eb.call(b)) && (!(c = Eb(b)) || (d = Ma.call(c, "constructor") && c.constructor, "function" == typeof d && ob.call(d) === pb))
        },
        isEmptyObject: function(b) {
            for (var c in b) return !1;
            return !0
        },
        type: function(b) {
            return null == b ? b + "" : "object" == typeof b || "function" == typeof b ? La[eb.call(b)] || "object" : typeof b
        },
        globalEval: function(b) {
            d(b)
        },
        camelCase: function(b) {
            return b.replace(Fb, "ms-").replace(Gb, rb)
        },
        each: function(b, c) {
            var d, g = 0;
            if (e(b))
                for (d = b.length; g < d && !1 !== c.call(b[g], g, b[g]); g++);
            else
                for (g in b)
                    if (!1 === c.call(b[g], g,
                            b[g])) break;
            return b
        },
        trim: function(b) {
            return null == b ? "" : (b + "").replace(qb, "")
        },
        makeArray: function(b, c) {
            var d = c || [];
            return null != b && (e(Object(b)) ? p.merge(d, "string" == typeof b ? [b] : b) : db.call(d, b)), d
        },
        inArray: function(b, c, d) {
            return null == c ? -1 : Ka.call(c, b, d)
        },
        merge: function(b, c) {
            for (var d = +c.length, g = 0, m = b.length; g < d; g++) b[m++] = c[g];
            return b.length = m, b
        },
        grep: function(b, c, d) {
            for (var g = [], m = 0, e = b.length, t = !d; m < e; m++) d = !c(b[m], m), d !== t && g.push(b[m]);
            return g
        },
        map: function(b, c, d) {
            var g, m, t = 0,
                f = [];
            if (e(b))
                for (g =
                    b.length; t < g; t++) m = c(b[t], t, d), null != m && f.push(m);
            else
                for (t in b) m = c(b[t], t, d), null != m && f.push(m);
            return bb.apply([], f)
        },
        guid: 1,
        proxy: function(b, c) {
            var d, g, m;
            if ("string" == typeof c && (d = b[c], c = b, b = d), p.isFunction(b)) return g = za.call(arguments, 2), m = function() {
                return b.apply(c || this, g.concat(za.call(arguments)))
            }, m.guid = b.guid = b.guid || p.guid++, m
        },
        now: Date.now,
        support: da
    });
    "function" == typeof Symbol && (p.fn[Symbol.iterator] = va[Symbol.iterator]);
    p.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
        function(b, c) {
            La["[object " + c + "]"] = c.toLowerCase()
        });
    var Aa, fb = b,
        ca = function(b, c, d, g) {
            var m, e, t, f, q, s = c && c.ownerDocument,
                l = c ? c.nodeType : 9;
            if (d = d || [], "string" != typeof b || !b || 1 !== l && 9 !== l && 11 !== l) return d;
            if (!g && ((c ? c.ownerDocument || c : wa) !== Y && xa(c), c = c || Y, ma)) {
                if (11 !== l && (f = Qc.exec(b)))
                    if (m = f[1])
                        if (9 === l) {
                            if (!(e = c.getElementById(m))) return d;
                            if (e.id === m) return d.push(e), d
                        } else {
                            if (s && (e = s.getElementById(m)) && sb(c, e) && e.id === m) return d.push(e), d
                        }
                else {
                    if (f[2]) return Na.apply(d, c.getElementsByTagName(b)),
                        d;
                    if ((m = f[3]) && ea.getElementsByClassName && c.getElementsByClassName) return Na.apply(d, c.getElementsByClassName(m)), d
                }
                if (ea.qsa && !Hb[b + " "] && (!ka || !ka.test(b))) {
                    if (1 !== l) s = c, q = b;
                    else if ("object" !== c.nodeName.toLowerCase()) {
                        (t = c.getAttribute("id")) ? t = t.replace(ec, fc): c.setAttribute("id", t = ja);
                        e = Oa(b);
                        for (m = e.length; m--;) e[m] = "#" + t + " " + Ua(e[m]);
                        q = e.join(",");
                        s = Tb.test(b) && gb(c.parentNode) || c
                    }
                    if (q) try {
                        return Na.apply(d, s.querySelectorAll(q)), d
                    } catch (j) {} finally {
                        t === ja && c.removeAttribute("id")
                    }
                }
            }
            return hb(b.replace(Ib,
                "$1"), c, d, g)
        },
        ib = function() {
            function b(d, g) {
                return c.push(d + " ") > W.cacheLength && delete b[c.shift()], b[d + " "] = g
            }
            var c = [];
            return b
        },
        pa = function(b) {
            return b[ja] = !0, b
        },
        sa = function(b) {
            var c = Y.createElement("fieldset");
            try {
                return !!b(c)
            } catch (d) {
                return !1
            } finally {
                c.parentNode && c.parentNode.removeChild(c)
            }
        },
        jb = function(b, c) {
            for (var d = b.split("|"), g = d.length; g--;) W.attrHandle[d[g]] = c
        },
        tb = function(b, c) {
            var d = c && b,
                g = d && 1 === b.nodeType && 1 === c.nodeType && b.sourceIndex - c.sourceIndex;
            if (g) return g;
            if (d)
                for (; d = d.nextSibling;)
                    if (d ===
                        c) return -1;
            return b ? 1 : -1
        },
        ub = function(b) {
            return function(c) {
                return "input" === c.nodeName.toLowerCase() && c.type === b
            }
        },
        Jb = function(b) {
            return function(c) {
                var d = c.nodeName.toLowerCase();
                return ("input" === d || "button" === d) && c.type === b
            }
        },
        vb = function(b) {
            return function(c) {
                return "form" in c ? c.parentNode && !1 === c.disabled ? "label" in c ? "label" in c.parentNode ? c.parentNode.disabled === b : c.disabled === b : c.isDisabled === b || c.isDisabled !== !b && Rc(c) === b : c.disabled === b : "label" in c && c.disabled === b
            }
        },
        Da = function(b) {
            return pa(function(c) {
                return c = +c, pa(function(d, g) {
                    for (var m, e = b([], d.length, c), t = e.length; t--;) d[m = e[t]] && (d[m] = !(g[m] = d[m]))
                })
            })
        },
        gb = function(b) {
            return b && "undefined" != typeof b.getElementsByTagName && b
        },
        wb = function() {},
        Ua = function(b) {
            for (var c = 0, d = b.length, g = ""; c < d; c++) g += b[c].value;
            return g
        },
        Va = function(b, c, d) {
            var g = c.dir,
                m = c.next,
                e = m || g,
                t = d && "parentNode" === e,
                f = Sc++;
            return c.first ? function(c, d, m) {
                for (; c = c[g];)
                    if (1 === c.nodeType || t) return b(c, d, m);
                return !1
            } : function(c, d, q) {
                var s, l, T, j = [Ea, f];
                if (q)
                    for (; c = c[g];) {
                        if ((1 === c.nodeType ||
                                t) && b(c, d, q)) return !0
                    } else
                        for (; c = c[g];)
                            if (1 === c.nodeType || t)
                                if (T = c[ja] || (c[ja] = {}), l = T[c.uniqueID] || (T[c.uniqueID] = {}), m && m === c.nodeName.toLowerCase()) c = c[g] || c;
                                else {
                                    if ((s = l[e]) && s[0] === Ea && s[1] === f) return j[2] = s[2];
                                    if (l[e] = j, j[2] = b(c, d, q)) return !0
                                }
                return !1
            }
        },
        Wa = function(b) {
            return 1 < b.length ? function(c, d, g) {
                for (var m = b.length; m--;)
                    if (!b[m](c, d, g)) return !1;
                return !0
            } : b[0]
        },
        Pa = function(b, c, d, g, m) {
            for (var e, t = [], f = 0, q = b.length, s = null != c; f < q; f++)(e = b[f]) && (d && !d(e, g, m) || (t.push(e), s && c.push(f)));
            return t
        },
        Xa = function(b, c, d, g, m, e) {
            return g && !g[ja] && (g = Xa(g)), m && !m[ja] && (m = Xa(m, e)), pa(function(e, t, f, q) {
                var s, l, j = [],
                    M = [],
                    p = t.length,
                    x;
                if (!(x = e)) {
                    x = c || "*";
                    for (var r = f.nodeType ? [f] : f, C = [], V = 0, J = r.length; V < J; V++) ca(x, r[V], C);
                    x = C
                }
                x = !b || !e && c ? x : Pa(x, j, b, f, q);
                r = d ? m || (e ? b : p || g) ? [] : t : x;
                if (d && d(x, r, f, q), g) {
                    s = Pa(r, M);
                    g(s, [], f, q);
                    for (f = s.length; f--;)(l = s[f]) && (r[M[f]] = !(x[M[f]] = l))
                }
                if (e) {
                    if (m || b) {
                        if (m) {
                            s = [];
                            for (f = r.length; f--;)(l = r[f]) && s.push(x[f] = l);
                            m(null, r = [], s, q)
                        }
                        for (f = r.length; f--;)(l = r[f]) && -1 < (s = m ? Ya(e, l) :
                            j[f]) && (e[s] = !(t[s] = l))
                    }
                } else r = Pa(r === t ? r.splice(p, r.length) : r), m ? m(null, t, r, q) : Na.apply(t, r)
            })
        },
        Za = function(b) {
            var c, d, g, m = b.length,
                e = W.relative[b[0].type];
            d = e || W.relative[" "];
            for (var t = e ? 1 : 0, f = Va(function(b) {
                    return b === c
                }, d, !0), s = Va(function(b) {
                    return -1 < Ya(c, b)
                }, d, !0), q = [function(b, d, g) {
                    b = !e && (g || d !== Qa) || ((c = d).nodeType ? f(b, d, g) : s(b, d, g));
                    return c = null, b
                }]; t < m; t++)
                if (d = W.relative[b[t].type]) q = [Va(Wa(q), d)];
                else {
                    if (d = W.filter[b[t].type].apply(null, b[t].matches), d[ja]) {
                        for (g = ++t; g < m && !W.relative[b[g].type]; g++);
                        return Xa(1 < t && Wa(q), 1 < t && Ua(b.slice(0, t - 1).concat({
                            value: " " === b[t - 2].type ? "*" : ""
                        })).replace(Ib, "$1"), d, t < g && Za(b.slice(t, g)), g < m && Za(b = b.slice(g)), g < m && Ua(b))
                    }
                    q.push(d)
                }
            return Wa(q)
        },
        Fa, ea, W, Ra, kb, Oa, $a, hb, Qa, ya, Ga, xa, Y, na, ma, ka, Ba, Sa, sb, ja = "sizzle" + 1 * new Date,
        wa = fb.document,
        Ea = 0,
        Sc = 0,
        gc = ib(),
        hc = ib(),
        Hb = ib(),
        Ub = function(b, c) {
            return b === c && (Ga = !0), 0
        },
        Tc = {}.hasOwnProperty,
        ab = [],
        Uc = ab.pop,
        Vc = ab.push,
        Na = ab.push,
        ic = ab.slice,
        Ya = function(b, c) {
            for (var d = 0, g = b.length; d < g; d++)
                if (b[d] === c) return d;
            return -1
        },
        Wc = /[\x20\t\r\n\f]+/g,
        Ib = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
        Xc = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
        Yc = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
        Zc = /=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g,
        $c = RegExp(":((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)"),
        ad = /^(?:\\.|[\w-]|[^\x00-\xa0])+$/,
        Kb = {
            ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
            CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
            TAG: /^((?:\\.|[\w-]|[^\x00-\xa0])+|[*])/,
            ATTR: RegExp("^\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\]"),
            PSEUDO: RegExp("^:((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)"),
            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"),
            bool: RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$", "i"),
            needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)",
                "i")
        },
        bd = /^(?:input|select|textarea|button)$/i,
        cd = /^h\d$/i,
        xb = /^[^{]+\{\s*\[native \w/,
        Qc = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        Tb = /[+~]/,
        Ha = /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/ig,
        Ia = function(b, c, d) {
            b = "0x" + c - 65536;
            return b !== b || d ? c : 0 > b ? String.fromCharCode(b + 65536) : String.fromCharCode(b >> 10 | 55296, 1023 & b | 56320)
        },
        ec = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        fc = function(b, c) {
            return c ? "\x00" === b ? "\ufffd" : b.slice(0, -1) + "\\" + b.charCodeAt(b.length - 1).toString(16) + " " : "\\" + b
        },
        jc = function() {
            xa()
        },
        Rc = Va(function(b) {
            return !0 === b.disabled && ("form" in b || "label" in b)
        }, {
            dir: "parentNode",
            next: "legend"
        });
    try {
        Na.apply(ab = ic.call(wa.childNodes), wa.childNodes), ab[wa.childNodes.length].nodeType
    } catch (Fd) {
        Na = {
            apply: ab.length ? function(b, c) {
                Vc.apply(b, ic.call(c))
            } : function(b, c) {
                for (var d = b.length, g = 0; b[d++] = c[g++];);
                b.length = d - 1
            }
        }
    }
    ea = ca.support = {};
    kb = ca.isXML = function(b) {
        b = b && (b.ownerDocument || b).documentElement;
        return !!b && "HTML" !== b.nodeName
    };
    xa = ca.setDocument = function(b) {
        var c, d;
        b = b ? b.ownerDocument || b :
            wa;
        return b !== Y && 9 === b.nodeType && b.documentElement ? (Y = b, na = Y.documentElement, ma = !kb(Y), wa !== Y && (d = Y.defaultView) && d.top !== d && (d.addEventListener ? d.addEventListener("unload", jc, !1) : d.attachEvent && d.attachEvent("onunload", jc)), ea.attributes = sa(function(b) {
                return b.className = "i", !b.getAttribute("className")
            }), ea.getElementsByTagName = sa(function(b) {
                return b.appendChild(Y.createComment("")), !b.getElementsByTagName("*").length
            }), ea.getElementsByClassName = xb.test(Y.getElementsByClassName), ea.getById = sa(function(b) {
                return na.appendChild(b).id =
                    ja, !Y.getElementsByName || !Y.getElementsByName(ja).length
            }), ea.getById ? (W.filter.ID = function(b) {
                var c = b.replace(Ha, Ia);
                return function(b) {
                    return b.getAttribute("id") === c
                }
            }, W.find.ID = function(b, c) {
                if ("undefined" != typeof c.getElementById && ma) {
                    var d = c.getElementById(b);
                    return d ? [d] : []
                }
            }) : (W.filter.ID = function(b) {
                var c = b.replace(Ha, Ia);
                return function(b) {
                    return (b = "undefined" != typeof b.getAttributeNode && b.getAttributeNode("id")) && b.value === c
                }
            }, W.find.ID = function(b, c) {
                if ("undefined" != typeof c.getElementById &&
                    ma) {
                    var d, g, m, Z = c.getElementById(b);
                    if (Z) {
                        if (d = Z.getAttributeNode("id"), d && d.value === b) return [Z];
                        m = c.getElementsByName(b);
                        for (g = 0; Z = m[g++];)
                            if (d = Z.getAttributeNode("id"), d && d.value === b) return [Z]
                    }
                    return []
                }
            }), W.find.TAG = ea.getElementsByTagName ? function(b, c) {
                return "undefined" != typeof c.getElementsByTagName ? c.getElementsByTagName(b) : ea.qsa ? c.querySelectorAll(b) : void 0
            } : function(b, c) {
                var d, g = [],
                    m = 0,
                    Z = c.getElementsByTagName(b);
                if ("*" === b) {
                    for (; d = Z[m++];) 1 === d.nodeType && g.push(d);
                    return g
                }
                return Z
            }, W.find.CLASS =
            ea.getElementsByClassName && function(b, c) {
                if ("undefined" != typeof c.getElementsByClassName && ma) return c.getElementsByClassName(b)
            }, Ba = [], ka = [], (ea.qsa = xb.test(Y.querySelectorAll)) && (sa(function(b) {
                na.appendChild(b).innerHTML = "<a id='" + ja + "'></a><select id='" + ja + "-\r\\' msallowcapture=''><option selected=''></option></select>";
                b.querySelectorAll("[msallowcapture^='']").length && ka.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
                b.querySelectorAll("[selected]").length || ka.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
                b.querySelectorAll("[id~=" + ja + "-]").length || ka.push("~=");
                b.querySelectorAll(":checked").length || ka.push(":checked");
                b.querySelectorAll("a#" + ja + "+*").length || ka.push(".#.+[+~]")
            }), sa(function(b) {
                b.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var c = Y.createElement("input");
                c.setAttribute("type", "hidden");
                b.appendChild(c).setAttribute("name", "D");
                b.querySelectorAll("[name=d]").length && ka.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?=");
                2 !== b.querySelectorAll(":enabled").length &&
                    ka.push(":enabled", ":disabled");
                na.appendChild(b).disabled = !0;
                2 !== b.querySelectorAll(":disabled").length && ka.push(":enabled", ":disabled");
                b.querySelectorAll("*,:x");
                ka.push(",.*:")
            })), (ea.matchesSelector = xb.test(Sa = na.matches || na.webkitMatchesSelector || na.mozMatchesSelector || na.oMatchesSelector || na.msMatchesSelector)) && sa(function(b) {
                ea.disconnectedMatch = Sa.call(b, "*");
                Sa.call(b, "[s!='']:x");
                Ba.push("!=", ":((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)")
            }),
            ka = ka.length && RegExp(ka.join("|")), Ba = Ba.length && RegExp(Ba.join("|")), c = xb.test(na.compareDocumentPosition), sb = c || xb.test(na.contains) ? function(b, c) {
                var d = 9 === b.nodeType ? b.documentElement : b,
                    g = c && c.parentNode;
                return b === g || !(!g || 1 !== g.nodeType || !(d.contains ? d.contains(g) : b.compareDocumentPosition && 16 & b.compareDocumentPosition(g)))
            } : function(b, c) {
                if (c)
                    for (; c = c.parentNode;)
                        if (c === b) return !0;
                return !1
            }, Ub = c ? function(b, c) {
                if (b === c) return Ga = !0, 0;
                var d = !b.compareDocumentPosition - !c.compareDocumentPosition;
                return d ? d : (d = (b.ownerDocument || b) === (c.ownerDocument || c) ? b.compareDocumentPosition(c) : 1, 1 & d || !ea.sortDetached && c.compareDocumentPosition(b) === d ? b === Y || b.ownerDocument === wa && sb(wa, b) ? -1 : c === Y || c.ownerDocument === wa && sb(wa, c) ? 1 : ya ? Ya(ya, b) - Ya(ya, c) : 0 : 4 & d ? -1 : 1)
            } : function(b, c) {
                if (b === c) return Ga = !0, 0;
                var d, g = 0;
                d = b.parentNode;
                var m = c.parentNode,
                    Z = [b],
                    e = [c];
                if (!d || !m) return b === Y ? -1 : c === Y ? 1 : d ? -1 : m ? 1 : ya ? Ya(ya, b) - Ya(ya, c) : 0;
                if (d === m) return tb(b, c);
                for (d = b; d = d.parentNode;) Z.unshift(d);
                for (d = c; d = d.parentNode;) e.unshift(d);
                for (; Z[g] === e[g];) g++;
                return g ? tb(Z[g], e[g]) : Z[g] === wa ? -1 : e[g] === wa ? 1 : 0
            }, Y) : Y
    };
    ca.matches = function(b, c) {
        return ca(b, null, null, c)
    };
    ca.matchesSelector = function(b, c) {
        if ((b.ownerDocument || b) !== Y && xa(b), c = c.replace(Zc, "='$1']"), ea.matchesSelector && ma && !Hb[c + " "] && (!Ba || !Ba.test(c)) && (!ka || !ka.test(c))) try {
            var d = Sa.call(b, c);
            if (d || ea.disconnectedMatch || b.document && 11 !== b.document.nodeType) return d
        } catch (g) {}
        return 0 < ca(c, Y, null, [b]).length
    };
    ca.contains = function(b, c) {
        return (b.ownerDocument || b) !== Y && xa(b),
            sb(b, c)
    };
    ca.attr = function(b, c) {
        (b.ownerDocument || b) !== Y && xa(b);
        var d = W.attrHandle[c.toLowerCase()],
            d = d && Tc.call(W.attrHandle, c.toLowerCase()) ? d(b, c, !ma) : void 0;
        return void 0 !== d ? d : ea.attributes || !ma ? b.getAttribute(c) : (d = b.getAttributeNode(c)) && d.specified ? d.value : null
    };
    ca.escape = function(b) {
        return (b + "").replace(ec, fc)
    };
    ca.error = function(b) {
        throw Error("Syntax error, unrecognized expression: " + b);
    };
    ca.uniqueSort = function(b) {
        var c, d = [],
            g = 0,
            m = 0;
        if (Ga = !ea.detectDuplicates, ya = !ea.sortStable && b.slice(0),
            b.sort(Ub), Ga) {
            for (; c = b[m++];) c === b[m] && (g = d.push(m));
            for (; g--;) b.splice(d[g], 1)
        }
        return ya = null, b
    };
    Ra = ca.getText = function(b) {
        var c, d = "",
            g = 0;
        if (c = b.nodeType)
            if (1 === c || 9 === c || 11 === c) {
                if ("string" == typeof b.textContent) return b.textContent;
                for (b = b.firstChild; b; b = b.nextSibling) d += Ra(b)
            } else {
                if (3 === c || 4 === c) return b.nodeValue
            }
        else
            for (; c = b[g++];) d += Ra(c);
        return d
    };
    W = ca.selectors = {
        cacheLength: 50,
        createPseudo: pa,
        match: Kb,
        attrHandle: {},
        find: {},
        relative: {
            ">": {
                dir: "parentNode",
                first: !0
            },
            " ": {
                dir: "parentNode"
            },
            "+": {
                dir: "previousSibling",
                first: !0
            },
            "~": {
                dir: "previousSibling"
            }
        },
        preFilter: {
            ATTR: function(b) {
                return b[1] = b[1].replace(Ha, Ia), b[3] = (b[3] || b[4] || b[5] || "").replace(Ha, Ia), "~=" === b[2] && (b[3] = " " + b[3] + " "), b.slice(0, 4)
            },
            CHILD: function(b) {
                return b[1] = b[1].toLowerCase(), "nth" === b[1].slice(0, 3) ? (b[3] || ca.error(b[0]), b[4] = +(b[4] ? b[5] + (b[6] || 1) : 2 * ("even" === b[3] || "odd" === b[3])), b[5] = +(b[7] + b[8] || "odd" === b[3])) : b[3] && ca.error(b[0]), b
            },
            PSEUDO: function(b) {
                var c, d = !b[6] && b[2];
                return Kb.CHILD.test(b[0]) ? null : (b[3] ?
                    b[2] = b[4] || b[5] || "" : d && $c.test(d) && (c = Oa(d, !0)) && (c = d.indexOf(")", d.length - c) - d.length) && (b[0] = b[0].slice(0, c), b[2] = d.slice(0, c)), b.slice(0, 3))
            }
        },
        filter: {
            TAG: function(b) {
                var c = b.replace(Ha, Ia).toLowerCase();
                return "*" === b ? function() {
                    return !0
                } : function(b) {
                    return b.nodeName && b.nodeName.toLowerCase() === c
                }
            },
            CLASS: function(b) {
                var c = gc[b + " "];
                return c || (c = RegExp("(^|[\\x20\\t\\r\\n\\f])" + b + "([\\x20\\t\\r\\n\\f]|$)")) && gc(b, function(b) {
                    return c.test("string" == typeof b.className && b.className || "undefined" !=
                        typeof b.getAttribute && b.getAttribute("class") || "")
                })
            },
            ATTR: function(b, c, d) {
                return function(g) {
                    g = ca.attr(g, b);
                    return null == g ? "!=" === c : !c || (g += "", "=" === c ? g === d : "!=" === c ? g !== d : "^=" === c ? d && 0 === g.indexOf(d) : "*=" === c ? d && -1 < g.indexOf(d) : "$=" === c ? d && g.slice(-d.length) === d : "~=" === c ? -1 < (" " + g.replace(Wc, " ") + " ").indexOf(d) : "|=" === c && (g === d || g.slice(0, d.length + 1) === d + "-"))
                }
            },
            CHILD: function(b, c, d, g, m) {
                var e = "nth" !== b.slice(0, 3),
                    t = "last" !== b.slice(-4),
                    f = "of-type" === c;
                return 1 === g && 0 === m ? function(b) {
                        return !!b.parentNode
                    } :
                    function(c, d, q) {
                        var s, l, j, T, M, x;
                        d = e !== t ? "nextSibling" : "previousSibling";
                        var r = c.parentNode,
                            p = f && c.nodeName.toLowerCase();
                        q = !q && !f;
                        var C = !1;
                        if (r) {
                            if (e) {
                                for (; d;) {
                                    for (T = c; T = T[d];)
                                        if (f ? T.nodeName.toLowerCase() === p : 1 === T.nodeType) return !1;
                                    x = d = "only" === b && !x && "nextSibling"
                                }
                                return !0
                            }
                            if (x = [t ? r.firstChild : r.lastChild], t && q) {
                                T = r;
                                j = T[ja] || (T[ja] = {});
                                l = j[T.uniqueID] || (j[T.uniqueID] = {});
                                s = l[b] || [];
                                C = (M = s[0] === Ea && s[1]) && s[2];
                                for (T = M && r.childNodes[M]; T = ++M && T && T[d] || (C = M = 0) || x.pop();)
                                    if (1 === T.nodeType && ++C && T ===
                                        c) {
                                        l[b] = [Ea, M, C];
                                        break
                                    }
                            } else if (q && (T = c, j = T[ja] || (T[ja] = {}), l = j[T.uniqueID] || (j[T.uniqueID] = {}), s = l[b] || [], M = s[0] === Ea && s[1], C = M), !1 === C)
                                for (;
                                    (T = ++M && T && T[d] || (C = M = 0) || x.pop()) && (!(f ? T.nodeName.toLowerCase() === p : 1 === T.nodeType) || !++C || !(q && (j = T[ja] || (T[ja] = {}), l = j[T.uniqueID] || (j[T.uniqueID] = {}), l[b] = [Ea, C]), T === c)););
                            return C -= m, C === g || 0 === C % g && 0 <= C / g
                        }
                    }
            },
            PSEUDO: function(b, c) {
                var d, g = W.pseudos[b] || W.setFilters[b.toLowerCase()] || ca.error("unsupported pseudo: " + b);
                return g[ja] ? g(c) : 1 < g.length ? (d = [b,
                    b, "", c
                ], W.setFilters.hasOwnProperty(b.toLowerCase()) ? pa(function(b, d) {
                    for (var m, e = g(b, c), t = e.length; t--;) m = Ya(b, e[t]), b[m] = !(d[m] = e[t])
                }) : function(b) {
                    return g(b, 0, d)
                }) : g
            }
        },
        pseudos: {
            not: pa(function(b) {
                var c = [],
                    d = [],
                    g = $a(b.replace(Ib, "$1"));
                return g[ja] ? pa(function(b, c, d, m) {
                    var e;
                    d = g(b, null, m, []);
                    for (m = b.length; m--;)(e = d[m]) && (b[m] = !(c[m] = e))
                }) : function(b, m, e) {
                    return c[0] = b, g(c, null, e, d), c[0] = null, !d.pop()
                }
            }),
            has: pa(function(b) {
                return function(c) {
                    return 0 < ca(b, c).length
                }
            }),
            contains: pa(function(b) {
                return b =
                    b.replace(Ha, Ia),
                    function(c) {
                        return -1 < (c.textContent || c.innerText || Ra(c)).indexOf(b)
                    }
            }),
            lang: pa(function(b) {
                return ad.test(b || "") || ca.error("unsupported lang: " + b), b = b.replace(Ha, Ia).toLowerCase(),
                    function(c) {
                        var d;
                        do
                            if (d = ma ? c.lang : c.getAttribute("xml:lang") || c.getAttribute("lang")) return d = d.toLowerCase(), d === b || 0 === d.indexOf(b + "-"); while ((c = c.parentNode) && 1 === c.nodeType);
                        return !1
                    }
            }),
            target: function(b) {
                var c = fb.location && fb.location.hash;
                return c && c.slice(1) === b.id
            },
            root: function(b) {
                return b ===
                    na
            },
            focus: function(b) {
                return b === Y.activeElement && (!Y.hasFocus || Y.hasFocus()) && !(!b.type && !b.href && !~b.tabIndex)
            },
            enabled: vb(!1),
            disabled: vb(!0),
            checked: function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && !!b.checked || "option" === c && !!b.selected
            },
            selected: function(b) {
                return b.parentNode && b.parentNode.selectedIndex, !0 === b.selected
            },
            empty: function(b) {
                for (b = b.firstChild; b; b = b.nextSibling)
                    if (6 > b.nodeType) return !1;
                return !0
            },
            parent: function(b) {
                return !W.pseudos.empty(b)
            },
            header: function(b) {
                return cd.test(b.nodeName)
            },
            input: function(b) {
                return bd.test(b.nodeName)
            },
            button: function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && "button" === b.type || "button" === c
            },
            text: function(b) {
                var c;
                return "input" === b.nodeName.toLowerCase() && "text" === b.type && (null == (c = b.getAttribute("type")) || "text" === c.toLowerCase())
            },
            first: Da(function() {
                return [0]
            }),
            last: Da(function(b, c) {
                return [c - 1]
            }),
            eq: Da(function(b, c, d) {
                return [0 > d ? d + c : d]
            }),
            even: Da(function(b, c) {
                for (var d = 0; d < c; d += 2) b.push(d);
                return b
            }),
            odd: Da(function(b, c) {
                for (var d = 1; d <
                    c; d += 2) b.push(d);
                return b
            }),
            lt: Da(function(b, c, d) {
                for (c = 0 > d ? d + c : d; 0 <= --c;) b.push(c);
                return b
            }),
            gt: Da(function(b, c, d) {
                for (d = 0 > d ? d + c : d; ++d < c;) b.push(d);
                return b
            })
        }
    };
    W.pseudos.nth = W.pseudos.eq;
    for (Fa in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) W.pseudos[Fa] = ub(Fa);
    for (Fa in {
            submit: !0,
            reset: !0
        }) W.pseudos[Fa] = Jb(Fa);
    wb.prototype = W.filters = W.pseudos;
    W.setFilters = new wb;
    Oa = ca.tokenize = function(b, c) {
        var d, g, m, e, t, f, s;
        if (t = hc[b + " "]) return c ? 0 : t.slice(0);
        t = b;
        f = [];
        for (s = W.preFilter; t;) {
            d && !(g = Xc.exec(t)) ||
                (g && (t = t.slice(g[0].length) || t), f.push(m = []));
            d = !1;
            (g = Yc.exec(t)) && (d = g.shift(), m.push({
                value: d,
                type: g[0].replace(Ib, " ")
            }), t = t.slice(d.length));
            for (e in W.filter) !(g = Kb[e].exec(t)) || s[e] && !(g = s[e](g)) || (d = g.shift(), m.push({
                value: d,
                type: e,
                matches: g
            }), t = t.slice(d.length));
            if (!d) break
        }
        return c ? t.length : t ? ca.error(b) : hc(b, f).slice(0)
    };
    Aa = ($a = ca.compile = function(b, c) {
        var d, g = [],
            m = [],
            e = Hb[b + " "];
        if (!e) {
            c || (c = Oa(b));
            for (d = c.length; d--;) e = Za(c[d]), e[ja] ? g.push(e) : m.push(e);
            d = Hb;
            var t = 0 < g.length,
                f = 0 < m.length,
                e = function(b, c, d, e, Z) {
                    var s, q, l, j = 0,
                        M = "0",
                        T = b && [],
                        x = [],
                        r = Qa,
                        p = b || f && W.find.TAG("*", Z),
                        C = Ea += null == r ? 1 : Math.random() || 0.1,
                        V = p.length;
                    for (Z && (Qa = c === Y || c || Z); M !== V && null != (s = p[M]); M++) {
                        if (f && s) {
                            q = 0;
                            for (c || s.ownerDocument === Y || (xa(s), d = !ma); l = m[q++];)
                                if (l(s, c || Y, d)) {
                                    e.push(s);
                                    break
                                }
                            Z && (Ea = C)
                        }
                        t && ((s = !l && s) && j--, b && T.push(s))
                    }
                    if (j += M, t && M !== j) {
                        for (q = 0; l = g[q++];) l(T, x, c, d);
                        if (b) {
                            if (0 < j)
                                for (; M--;) T[M] || x[M] || (x[M] = Uc.call(e));
                            x = Pa(x)
                        }
                        Na.apply(e, x);
                        Z && !b && 0 < x.length && 1 < j + g.length && ca.uniqueSort(e)
                    }
                    return Z &&
                        (Ea = C, Qa = r), T
                },
                e = t ? pa(e) : e,
                e = d(b, e);
            e.selector = b
        }
        return e
    }, hb = ca.select = function(b, c, d, g) {
        var m, e, t, f, s, q = "function" == typeof b && b,
            l = !g && Oa(b = q.selector || b);
        if (d = d || [], 1 === l.length) {
            if (e = l[0] = l[0].slice(0), 2 < e.length && "ID" === (t = e[0]).type && 9 === c.nodeType && ma && W.relative[e[1].type]) {
                if (c = (W.find.ID(t.matches[0].replace(Ha, Ia), c) || [])[0], !c) return d;
                q && (c = c.parentNode);
                b = b.slice(e.shift().value.length)
            }
            for (m = Kb.needsContext.test(b) ? 0 : e.length; m-- && !(t = e[m], W.relative[f = t.type]);)
                if ((s = W.find[f]) && (g =
                        s(t.matches[0].replace(Ha, Ia), Tb.test(e[0].type) && gb(c.parentNode) || c))) {
                    if (e.splice(m, 1), b = g.length && Ua(e), !b) return Na.apply(d, g), d;
                    break
                }
        }
        return (q || $a(b, l))(g, c, !ma, d, !c || Tb.test(b) && gb(c.parentNode) || c), d
    }, ea.sortStable = ja.split("").sort(Ub).join("") === ja, ea.detectDuplicates = !!Ga, xa(), ea.sortDetached = sa(function(b) {
        return 1 & b.compareDocumentPosition(Y.createElement("fieldset"))
    }), sa(function(b) {
        return b.innerHTML = "<a href='#'></a>", "#" === b.firstChild.getAttribute("href")
    }) || jb("type|href|height|width",
        function(b, c, d) {
            if (!d) return b.getAttribute(c, "type" === c.toLowerCase() ? 1 : 2)
        }), ea.attributes && sa(function(b) {
        return b.innerHTML = "<input/>", b.firstChild.setAttribute("value", ""), "" === b.firstChild.getAttribute("value")
    }) || jb("value", function(b, c, d) {
        if (!d && "input" === b.nodeName.toLowerCase()) return b.defaultValue
    }), sa(function(b) {
        return null == b.getAttribute("disabled")
    }) || jb("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function(b,
        c, d) {
        var g;
        if (!d) return !0 === b[c] ? c.toLowerCase() : (g = b.getAttributeNode(c)) && g.specified ? g.value : null
    }), ca);
    p.find = Aa;
    p.expr = Aa.selectors;
    p.expr[":"] = p.expr.pseudos;
    p.uniqueSort = p.unique = Aa.uniqueSort;
    p.text = Aa.getText;
    p.isXMLDoc = Aa.isXML;
    p.contains = Aa.contains;
    p.escapeSelector = Aa.escape;
    var lb = function(b, c, d) {
            for (var g = [], m = void 0 !== d;
                (b = b[c]) && 9 !== b.nodeType;)
                if (1 === b.nodeType) {
                    if (m && p(b).is(d)) break;
                    g.push(b)
                }
            return g
        },
        kc = function(b, c) {
            for (var d = []; b; b = b.nextSibling) 1 === b.nodeType && b !== c && d.push(b);
            return d
        },
        lc = p.expr.match.needsContext,
        mc = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        Hc = /^.[^:#\[\.,]*$/;
    p.filter = function(b, c, d) {
        var g = c[0];
        return d && (b = ":not(" + b + ")"), 1 === c.length && 1 === g.nodeType ? p.find.matchesSelector(g, b) ? [g] : [] : p.find.matches(b, p.grep(c, function(b) {
            return 1 === b.nodeType
        }))
    };
    p.fn.extend({
        find: function(b) {
            var c, d, g = this.length,
                m = this;
            if ("string" != typeof b) return this.pushStack(p(b).filter(function() {
                for (c = 0; c < g; c++)
                    if (p.contains(m[c], this)) return !0
            }));
            d =
                this.pushStack([]);
            for (c = 0; c < g; c++) p.find(b, m[c], d);
            return 1 < g ? p.uniqueSort(d) : d
        },
        filter: function(b) {
            return this.pushStack(j(this, b || [], !1))
        },
        not: function(b) {
            return this.pushStack(j(this, b || [], !0))
        },
        is: function(b) {
            return !!j(this, "string" == typeof b && lc.test(b) ? p(b) : b || [], !1).length
        }
    });
    var nc, dd = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (p.fn.init = function(b, c, d) {
        var g, m;
        if (!b) return this;
        if (d = d || nc, "string" == typeof b) {
            if (g = "<" === b[0] && ">" === b[b.length - 1] && 3 <= b.length ? [null, b, null] : dd.exec(b), !g || !g[1] &&
                c) return !c || c.jquery ? (c || d).find(b) : this.constructor(c).find(b);
            if (g[1]) {
                if (c = c instanceof p ? c[0] : c, p.merge(this, p.parseHTML(g[1], c && c.nodeType ? c.ownerDocument || c : X, !0)), mc.test(g[1]) && p.isPlainObject(c))
                    for (g in c) p.isFunction(this[g]) ? this[g](c[g]) : this.attr(g, c[g]);
                return this
            }
            return m = X.getElementById(g[2]), m && (this[0] = m, this.length = 1), this
        }
        return b.nodeType ? (this[0] = b, this.length = 1, this) : p.isFunction(b) ? void 0 !== d.ready ? d.ready(b) : b(p) : p.makeArray(b, this)
    }).prototype = p.fn;
    nc = p(X);
    var ed = /^(?:parents|prev(?:Until|All))/,
        fd = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    p.fn.extend({
        has: function(b) {
            var c = p(b, this),
                d = c.length;
            return this.filter(function() {
                for (var b = 0; b < d; b++)
                    if (p.contains(this, c[b])) return !0
            })
        },
        closest: function(b, c) {
            var d, g = 0,
                m = this.length,
                e = [],
                t = "string" != typeof b && p(b);
            if (!lc.test(b))
                for (; g < m; g++)
                    for (d = this[g]; d && d !== c; d = d.parentNode)
                        if (11 > d.nodeType && (t ? -1 < t.index(d) : 1 === d.nodeType && p.find.matchesSelector(d, b))) {
                            e.push(d);
                            break
                        }
            return this.pushStack(1 < e.length ? p.uniqueSort(e) : e)
        },
        index: function(b) {
            return b ?
                "string" == typeof b ? Ka.call(p(b), this[0]) : Ka.call(this, b.jquery ? b[0] : b) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(b, c) {
            return this.pushStack(p.uniqueSort(p.merge(this.get(), p(b, c))))
        },
        addBack: function(b) {
            return this.add(null == b ? this.prevObject : this.prevObject.filter(b))
        }
    });
    p.each({
            parent: function(b) {
                return (b = b.parentNode) && 11 !== b.nodeType ? b : null
            },
            parents: function(b) {
                return lb(b, "parentNode")
            },
            parentsUntil: function(b, c, d) {
                return lb(b, "parentNode", d)
            },
            next: function(b) {
                return n(b,
                    "nextSibling")
            },
            prev: function(b) {
                return n(b, "previousSibling")
            },
            nextAll: function(b) {
                return lb(b, "nextSibling")
            },
            prevAll: function(b) {
                return lb(b, "previousSibling")
            },
            nextUntil: function(b, c, d) {
                return lb(b, "nextSibling", d)
            },
            prevUntil: function(b, c, d) {
                return lb(b, "previousSibling", d)
            },
            siblings: function(b) {
                return kc((b.parentNode || {}).firstChild, b)
            },
            children: function(b) {
                return kc(b.firstChild)
            },
            contents: function(b) {
                return f(b, "iframe") ? b.contentDocument : (f(b, "template") && (b = b.content || b), p.merge([], b.childNodes))
            }
        },
        function(b, c) {
            p.fn[b] = function(d, g) {
                var m = p.map(this, c, d);
                return "Until" !== b.slice(-5) && (g = d), g && "string" == typeof g && (m = p.filter(g, m)), 1 < this.length && (fd[b] || p.uniqueSort(m), ed.test(b) && m.reverse()), this.pushStack(m)
            }
        });
    var ua = /[^\x20\t\r\n\f]+/g;
    p.Callbacks = function(b) {
        var c;
        if ("string" == typeof b) {
            var d = {};
            c = (p.each(b.match(ua) || [], function(b, c) {
                d[c] = !0
            }), d)
        } else c = p.extend({}, b);
        b = c;
        var g, m, e, t, f = [],
            s = [],
            q = -1,
            l = function() {
                t = t || b.once;
                for (e = g = !0; s.length; q = -1)
                    for (m = s.shift(); ++q < f.length;) !1 === f[q].apply(m[0],
                        m[1]) && b.stopOnFalse && (q = f.length, m = !1);
                b.memory || (m = !1);
                g = !1;
                t && (f = m ? [] : "")
            },
            j = {
                add: function() {
                    return f && (m && !g && (q = f.length - 1, s.push(m)), function Nc(c) {
                        p.each(c, function(c, d) {
                            p.isFunction(d) ? b.unique && j.has(d) || f.push(d) : d && d.length && "string" !== p.type(d) && Nc(d)
                        })
                    }(arguments), m && !g && l()), this
                },
                remove: function() {
                    return p.each(arguments, function(b, c) {
                        for (var d; - 1 < (d = p.inArray(c, f, d));) f.splice(d, 1), d <= q && q--
                    }), this
                },
                has: function(b) {
                    return b ? -1 < p.inArray(b, f) : 0 < f.length
                },
                empty: function() {
                    return f &&
                        (f = []), this
                },
                disable: function() {
                    return t = s = [], f = m = "", this
                },
                disabled: function() {
                    return !f
                },
                lock: function() {
                    return t = s = [], m || g || (f = m = ""), this
                },
                locked: function() {
                    return !!t
                },
                fireWith: function(b, c) {
                    return t || (c = c || [], c = [b, c.slice ? c.slice() : c], s.push(c), g || l()), this
                },
                fire: function() {
                    return j.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!e
                }
            };
        return j
    };
    p.extend({
        Deferred: function(c) {
            var d = [
                    ["notify", "progress", p.Callbacks("memory"), p.Callbacks("memory"), 2],
                    ["resolve", "done", p.Callbacks("once memory"),
                        p.Callbacks("once memory"), 0, "resolved"
                    ],
                    ["reject", "fail", p.Callbacks("once memory"), p.Callbacks("once memory"), 1, "rejected"]
                ],
                m = "pending",
                e = {
                    state: function() {
                        return m
                    },
                    always: function() {
                        return t.done(arguments).fail(arguments), this
                    },
                    "catch": function(b) {
                        return e.then(null, b)
                    },
                    pipe: function() {
                        var b = arguments;
                        return p.Deferred(function(c) {
                            p.each(d, function(d, g) {
                                var m = p.isFunction(b[g[4]]) && b[g[4]];
                                t[g[1]](function() {
                                    var b = m && m.apply(this, arguments);
                                    b && p.isFunction(b.promise) ? b.promise().progress(c.notify).done(c.resolve).fail(c.reject) :
                                        c[g[0] + "With"](this, m ? [b] : arguments)
                                })
                            });
                            b = null
                        }).promise()
                    },
                    then: function(c, m, e) {
                        function t(c, d, m, e) {
                            return function() {
                                var s = this,
                                    q = arguments,
                                    j = function() {
                                        var b, Z;
                                        if (!(c < f)) {
                                            if (b = m.apply(s, q), b === d.promise()) throw new TypeError("Thenable self-resolution");
                                            Z = b && ("object" == typeof b || "function" == typeof b) && b.then;
                                            p.isFunction(Z) ? e ? Z.call(b, t(f, d, l, e), t(f, d, g, e)) : (f++, Z.call(b, t(f, d, l, e), t(f, d, g, e), t(f, d, l, d.notifyWith))) : (m !== l && (s = void 0, q = [b]), (e || d.resolveWith)(s, q))
                                        }
                                    },
                                    Z = e ? j : function() {
                                        try {
                                            j()
                                        } catch (b) {
                                            p.Deferred.exceptionHook &&
                                                p.Deferred.exceptionHook(b, Z.stackTrace), c + 1 >= f && (m !== g && (s = void 0, q = [b]), d.rejectWith(s, q))
                                        }
                                    };
                                c ? Z() : (p.Deferred.getStackHook && (Z.stackTrace = p.Deferred.getStackHook()), b.setTimeout(Z))
                            }
                        }
                        var f = 0;
                        return p.Deferred(function(b) {
                            d[0][3].add(t(0, b, p.isFunction(e) ? e : l, b.notifyWith));
                            d[1][3].add(t(0, b, p.isFunction(c) ? c : l));
                            d[2][3].add(t(0, b, p.isFunction(m) ? m : g))
                        }).promise()
                    },
                    promise: function(b) {
                        return null != b ? p.extend(b, e) : e
                    }
                },
                t = {};
            return p.each(d, function(b, c) {
                var g = c[2],
                    f = c[5];
                e[c[1]] = g.add;
                f && g.add(function() {
                    m =
                        f
                }, d[3 - b][2].disable, d[0][2].lock);
                g.add(c[3].fire);
                t[c[0]] = function() {
                    return t[c[0] + "With"](this === t ? void 0 : this, arguments), this
                };
                t[c[0] + "With"] = g.fireWith
            }), e.promise(t), c && c.call(t, t), t
        },
        when: function(b) {
            var c = arguments.length,
                d = c,
                g = Array(d),
                m = za.call(arguments),
                e = p.Deferred(),
                t = function(b) {
                    return function(d) {
                        g[b] = this;
                        m[b] = 1 < arguments.length ? za.call(arguments) : d;
                        --c || e.resolveWith(g, m)
                    }
                };
            if (1 >= c && (r(b, e.done(t(d)).resolve, e.reject, !c), "pending" === e.state() || p.isFunction(m[d] && m[d].then))) return e.then();
            for (; d--;) r(m[d], t(d), e.reject);
            return e.promise()
        }
    });
    var gd = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    p.Deferred.exceptionHook = function(c, d) {
        b.console && b.console.warn && c && gd.test(c.name) && b.console.warn("jQuery.Deferred exception: " + c.message, c.stack, d)
    };
    p.readyException = function(c) {
        b.setTimeout(function() {
            throw c;
        })
    };
    var Vb = p.Deferred();
    p.fn.ready = function(b) {
        return Vb.then(b)["catch"](function(b) {
            p.readyException(b)
        }), this
    };
    p.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(b) {
            (!0 ===
                b ? --p.readyWait : p.isReady) || (p.isReady = !0, !0 !== b && 0 < --p.readyWait || Vb.resolveWith(X, [p]))
        }
    });
    p.ready.then = Vb.then;
    "complete" === X.readyState || "loading" !== X.readyState && !X.documentElement.doScroll ? b.setTimeout(p.ready) : (X.addEventListener("DOMContentLoaded", y), b.addEventListener("load", y));
    var Ja = function(b, c, d, g, m, e, t) {
            var f = 0,
                s = b.length,
                q = null == d;
            if ("object" === p.type(d))
                for (f in m = !0, d) Ja(b, c, f, d[f], !0, e, t);
            else if (void 0 !== g && (m = !0, p.isFunction(g) || (t = !0), q && (t ? (c.call(b, g), c = null) : (q = c, c = function(b,
                    c, d) {
                    return q.call(p(b), d)
                })), c))
                for (; f < s; f++) c(b[f], d, t ? g : g.call(b[f], f, c(b[f], d)));
            return m ? b : q ? c.call(b) : s ? c(b[0], d) : e
        },
        Lb = function(b) {
            return 1 === b.nodeType || 9 === b.nodeType || !+b.nodeType
        };
    z.uid = 1;
    z.prototype = {
        cache: function(b) {
            var c = b[this.expando];
            return c || (c = {}, Lb(b) && (b.nodeType ? b[this.expando] = c : Object.defineProperty(b, this.expando, {
                value: c,
                configurable: !0
            }))), c
        },
        set: function(b, c, d) {
            var g;
            b = this.cache(b);
            if ("string" == typeof c) b[p.camelCase(c)] = d;
            else
                for (g in c) b[p.camelCase(g)] = c[g];
            return b
        },
        get: function(b, c) {
            return void 0 === c ? this.cache(b) : b[this.expando] && b[this.expando][p.camelCase(c)]
        },
        access: function(b, c, d) {
            return void 0 === c || c && "string" == typeof c && void 0 === d ? this.get(b, c) : (this.set(b, c, d), void 0 !== d ? d : c)
        },
        remove: function(b, c) {
            var d, g = b[this.expando];
            if (void 0 !== g) {
                if (void 0 !== c) {
                    Array.isArray(c) ? c = c.map(p.camelCase) : (c = p.camelCase(c), c = c in g ? [c] : c.match(ua) || []);
                    for (d = c.length; d--;) delete g[c[d]]
                }(void 0 === c || p.isEmptyObject(g)) && (b.nodeType ? b[this.expando] = void 0 : delete b[this.expando])
            }
        },
        hasData: function(b) {
            b = b[this.expando];
            return void 0 !== b && !p.isEmptyObject(b)
        }
    };
    var S = new z,
        qa = new z,
        Jc = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ic = /[A-Z]/g;
    p.extend({
        hasData: function(b) {
            return qa.hasData(b) || S.hasData(b)
        },
        data: function(b, c, d) {
            return qa.access(b, c, d)
        },
        removeData: function(b, c) {
            qa.remove(b, c)
        },
        _data: function(b, c, d) {
            return S.access(b, c, d)
        },
        _removeData: function(b, c) {
            S.remove(b, c)
        }
    });
    p.fn.extend({
        data: function(b, c) {
            var d, g, m, e = this[0],
                t = e && e.attributes;
            if (void 0 === b) {
                if (this.length && (m = qa.get(e),
                        1 === e.nodeType && !S.get(e, "hasDataAttrs"))) {
                    for (d = t.length; d--;) t[d] && (g = t[d].name, 0 === g.indexOf("data-") && (g = p.camelCase(g.slice(5)), A(e, g, m[g])));
                    S.set(e, "hasDataAttrs", !0)
                }
                return m
            }
            return "object" == typeof b ? this.each(function() {
                qa.set(this, b)
            }) : Ja(this, function(c) {
                var d;
                if (e && void 0 === c) {
                    if ((d = qa.get(e, b), void 0 !== d) || (d = A(e, b), void 0 !== d)) return d
                } else this.each(function() {
                    qa.set(this, b, c)
                })
            }, null, c, 1 < arguments.length, null, !0)
        },
        removeData: function(b) {
            return this.each(function() {
                qa.remove(this, b)
            })
        }
    });
    p.extend({
        queue: function(b, c, d) {
            var g;
            if (b) return c = (c || "fx") + "queue", g = S.get(b, c), d && (!g || Array.isArray(d) ? g = S.access(b, c, p.makeArray(d)) : g.push(d)), g || []
        },
        dequeue: function(b, c) {
            c = c || "fx";
            var d = p.queue(b, c),
                g = d.length,
                m = d.shift(),
                e = p._queueHooks(b, c),
                t = function() {
                    p.dequeue(b, c)
                };
            "inprogress" === m && (m = d.shift(), g--);
            m && ("fx" === c && d.unshift("inprogress"), delete e.stop, m.call(b, t, e));
            !g && e && e.empty.fire()
        },
        _queueHooks: function(b, c) {
            var d = c + "queueHooks";
            return S.get(b, d) || S.access(b, d, {
                empty: p.Callbacks("once memory").add(function() {
                    S.remove(b, [c + "queue", d])
                })
            })
        }
    });
    p.fn.extend({
        queue: function(b, c) {
            var d = 2;
            return "string" != typeof b && (c = b, b = "fx", d--), arguments.length < d ? p.queue(this[0], b) : void 0 === c ? this : this.each(function() {
                var d = p.queue(this, b, c);
                p._queueHooks(this, b);
                "fx" === b && "inprogress" !== d[0] && p.dequeue(this, b)
            })
        },
        dequeue: function(b) {
            return this.each(function() {
                p.dequeue(this, b)
            })
        },
        clearQueue: function(b) {
            return this.queue(b || "fx", [])
        },
        promise: function(b, c) {
            var d, g = 1,
                m = p.Deferred(),
                e = this,
                t = this.length,
                f = function() {
                    --g || m.resolveWith(e, [e])
                };
            "string" != typeof b && (c = b, b = void 0);
            for (b = b || "fx"; t--;)(d = S.get(e[t], b + "queueHooks")) && d.empty && (g++, d.empty.add(f));
            return f(), m.promise(c)
        }
    });
    var oc = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        nb = RegExp("^(?:([+-])=|)(" + oc + ")([a-z%]*)$", "i"),
        Ta = ["Top", "Right", "Bottom", "Left"],
        Bb = function(b, c) {
            return b = c || b, "none" === b.style.display || "" === b.style.display && p.contains(b.ownerDocument, b) && "none" === p.css(b, "display")
        },
        pc = function(b, c, d, g) {
            var m, e = {};
            for (m in c) e[m] = b.style[m], b.style[m] = c[m];
            d =
                d.apply(b, g || []);
            for (m in c) b.style[m] = e[m];
            return d
        },
        Zb = {};
    p.fn.extend({
        show: function() {
            return E(this, !0)
        },
        hide: function() {
            return E(this)
        },
        toggle: function(b) {
            return "boolean" == typeof b ? b ? this.show() : this.hide() : this.each(function() {
                Bb(this) ? p(this).show() : p(this).hide()
            })
        }
    });
    var qc = /^(?:checkbox|radio)$/i,
        $b = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        ac = /^$|\/(?:java|ecma)script/i,
        ta = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    ta.optgroup = ta.option;
    ta.tbody = ta.tfoot = ta.colgroup = ta.caption = ta.thead;
    ta.th = ta.td;
    var Kc = /<|&#?\w+;/,
        Mb = X.createDocumentFragment().appendChild(X.createElement("div")),
        Nb = X.createElement("input");
    Nb.setAttribute("type", "radio");
    Nb.setAttribute("checked", "checked");
    Nb.setAttribute("name", "t");
    Mb.appendChild(Nb);
    da.checkClone = Mb.cloneNode(!0).cloneNode(!0).lastChild.checked;
    Mb.innerHTML =
        "<textarea>x</textarea>";
    da.noCloneChecked = !!Mb.cloneNode(!0).lastChild.defaultValue;
    !0;
    var Ob = X.documentElement,
        hd = /^key/,
        id = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        rc = /^([^.]*)(?:\.(.+)|)/;
    p.event = {
        global: {},
        add: function(b, c, d, g, m) {
            var e, t, f, s, q, l, j, M, x, r;
            if (q = S.get(b)) {
                d.handler && (e = d, d = e.handler, m = e.selector);
                m && p.find.matchesSelector(Ob, m);
                d.guid || (d.guid = p.guid++);
                (s = q.events) || (s = q.events = {});
                (t = q.handle) || (t = q.handle = function(c) {
                    return "undefined" != typeof p && p.event.triggered !== c.type ?
                        p.event.dispatch.apply(b, arguments) : void 0
                });
                c = (c || "").match(ua) || [""];
                for (q = c.length; q--;) f = rc.exec(c[q]) || [], x = r = f[1], f = (f[2] || "").split(".").sort(), x && (j = p.event.special[x] || {}, x = (m ? j.delegateType : j.bindType) || x, j = p.event.special[x] || {}, l = p.extend({
                    type: x,
                    origType: r,
                    data: g,
                    handler: d,
                    guid: d.guid,
                    selector: m,
                    needsContext: m && p.expr.match.needsContext.test(m),
                    namespace: f.join(".")
                }, e), (M = s[x]) || (M = s[x] = [], M.delegateCount = 0, j.setup && !1 !== j.setup.call(b, g, f, t) || b.addEventListener && b.addEventListener(x,
                    t)), j.add && (j.add.call(b, l), l.handler.guid || (l.handler.guid = d.guid)), m ? M.splice(M.delegateCount++, 0, l) : M.push(l), p.event.global[x] = !0)
            }
        },
        remove: function(b, c, d, g, m) {
            var e, t, f, s, q, l, j, M, x, r, C, V = S.hasData(b) && S.get(b);
            if (V && (s = V.events)) {
                c = (c || "").match(ua) || [""];
                for (q = c.length; q--;)
                    if (f = rc.exec(c[q]) || [], x = C = f[1], r = (f[2] || "").split(".").sort(), x) {
                        j = p.event.special[x] || {};
                        x = (g ? j.delegateType : j.bindType) || x;
                        M = s[x] || [];
                        f = f[2] && RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)");
                        for (t = e = M.length; e--;) l =
                            M[e], !m && C !== l.origType || d && d.guid !== l.guid || f && !f.test(l.namespace) || g && g !== l.selector && ("**" !== g || !l.selector) || (M.splice(e, 1), l.selector && M.delegateCount--, j.remove && j.remove.call(b, l));
                        t && !M.length && (j.teardown && !1 !== j.teardown.call(b, r, V.handle) || p.removeEvent(b, x, V.handle), delete s[x])
                    } else
                        for (x in s) p.event.remove(b, x + c[q], d, g, !0);
                p.isEmptyObject(s) && S.remove(b, "handle events")
            }
        },
        dispatch: function(b) {
            var c = p.event.fix(b),
                d, g, m, e, t, f, s = Array(arguments.length);
            g = (S.get(this, "events") || {})[c.type] || [];
            var q = p.event.special[c.type] || {};
            s[0] = c;
            for (d = 1; d < arguments.length; d++) s[d] = arguments[d];
            if (c.delegateTarget = this, !q.preDispatch || !1 !== q.preDispatch.call(this, c)) {
                f = p.event.handlers.call(this, c, g);
                for (d = 0;
                    (e = f[d++]) && !c.isPropagationStopped();) {
                    c.currentTarget = e.elem;
                    for (g = 0;
                        (t = e.handlers[g++]) && !c.isImmediatePropagationStopped();) c.rnamespace && !c.rnamespace.test(t.namespace) || (c.handleObj = t, c.data = t.data, m = ((p.event.special[t.origType] || {}).handle || t.handler).apply(e.elem, s), void 0 !== m && !1 ===
                        (c.result = m) && (c.preventDefault(), c.stopPropagation()))
                }
                return q.postDispatch && q.postDispatch.call(this, c), c.result
            }
        },
        handlers: function(b, c) {
            var d, g, m, e, t, f = [],
                s = c.delegateCount,
                q = b.target;
            if (s && q.nodeType && !("click" === b.type && 1 <= b.button))
                for (; q !== this; q = q.parentNode || this)
                    if (1 === q.nodeType && ("click" !== b.type || !0 !== q.disabled)) {
                        e = [];
                        t = {};
                        for (d = 0; d < s; d++) g = c[d], m = g.selector + " ", void 0 === t[m] && (t[m] = g.needsContext ? -1 < p(m, this).index(q) : p.find(m, this, null, [q]).length), t[m] && e.push(g);
                        e.length && f.push({
                            elem: q,
                            handlers: e
                        })
                    }
            return q = this, s < c.length && f.push({
                elem: q,
                handlers: c.slice(s)
            }), f
        },
        addProp: function(b, c) {
            Object.defineProperty(p.Event.prototype, b, {
                enumerable: !0,
                configurable: !0,
                get: p.isFunction(c) ? function() {
                    if (this.originalEvent) return c(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[b]
                },
                set: function(c) {
                    Object.defineProperty(this, b, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: c
                    })
                }
            })
        },
        fix: function(b) {
            return b[p.expando] ? b : new p.Event(b)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== N() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === N() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && f(this, "input")) return this.click(), !1
                },
                _default: function(b) {
                    return f(b.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(b) {
                    void 0 !== b.result && b.originalEvent && (b.originalEvent.returnValue = b.result)
                }
            }
        }
    };
    p.removeEvent = function(b, c, d) {
        b.removeEventListener &&
            b.removeEventListener(c, d)
    };
    p.Event = function(b, c) {
        return this instanceof p.Event ? (b && b.type ? (this.originalEvent = b, this.type = b.type, this.isDefaultPrevented = b.defaultPrevented || void 0 === b.defaultPrevented && !1 === b.returnValue ? K : L, this.target = b.target && 3 === b.target.nodeType ? b.target.parentNode : b.target, this.currentTarget = b.currentTarget, this.relatedTarget = b.relatedTarget) : this.type = b, c && p.extend(this, c), this.timeStamp = b && b.timeStamp || p.now(), void(this[p.expando] = !0)) : new p.Event(b, c)
    };
    p.Event.prototype = {
        constructor: p.Event,
        isDefaultPrevented: L,
        isPropagationStopped: L,
        isImmediatePropagationStopped: L,
        isSimulated: !1,
        preventDefault: function() {
            var b = this.originalEvent;
            this.isDefaultPrevented = K;
            b && !this.isSimulated && b.preventDefault()
        },
        stopPropagation: function() {
            var b = this.originalEvent;
            this.isPropagationStopped = K;
            b && !this.isSimulated && b.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var b = this.originalEvent;
            this.isImmediatePropagationStopped = K;
            b && !this.isSimulated && b.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    p.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(b) {
            var c = b.button;
            return null == b.which && hd.test(b.type) ? null != b.charCode ? b.charCode : b.keyCode : !b.which && void 0 !== c && id.test(b.type) ?
                1 & c ? 1 : 2 & c ? 3 : 4 & c ? 2 : 0 : b.which
        }
    }, p.event.addProp);
    p.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(b, c) {
        p.event.special[b] = {
            delegateType: c,
            bindType: c,
            handle: function(b) {
                var d, g = b.relatedTarget,
                    m = b.handleObj;
                return g && (g === this || p.contains(this, g)) || (b.type = m.origType, d = m.handler.apply(this, arguments), b.type = c), d
            }
        }
    });
    p.fn.extend({
        on: function(b, c, d, g) {
            return Q(this, b, c, d, g)
        },
        one: function(b, c, d, g) {
            return Q(this, b, c, d, g, 1)
        },
        off: function(b,
            c, d) {
            var g, m;
            if (b && b.preventDefault && b.handleObj) return g = b.handleObj, p(b.delegateTarget).off(g.namespace ? g.origType + "." + g.namespace : g.origType, g.selector, g.handler), this;
            if ("object" == typeof b) {
                for (m in b) this.off(m, c, b[m]);
                return this
            }
            return !1 !== c && "function" != typeof c || (d = c, c = void 0), !1 === d && (d = L), this.each(function() {
                p.event.remove(this, b, d, c)
            })
        }
    });
    var jd = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        kd = /<script|<style|<link/i,
        Mc = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Lc = /^true\/(.*)/,
        Oc = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    p.extend({
        htmlPrefilter: function(b) {
            return b.replace(jd, "<$1></$2>")
        },
        clone: function(b, c, d) {
            var g, m, e, t, f = b.cloneNode(!0),
                q = p.contains(b.ownerDocument, b);
            if (!da.noCloneChecked && !(1 !== b.nodeType && 11 !== b.nodeType || p.isXMLDoc(b))) {
                t = D(f);
                e = D(b);
                g = 0;
                for (m = e.length; g < m; g++) {
                    var s = e[g],
                        l = t[g],
                        j = l.nodeName.toLowerCase();
                    "input" === j && qc.test(s.type) ? l.checked = s.checked : "input" !== j && "textarea" !== j || (l.defaultValue = s.defaultValue)
                }
            }
            if (c)
                if (d) {
                    e =
                        e || D(b);
                    t = t || D(f);
                    g = 0;
                    for (m = e.length; g < m; g++) P(e[g], t[g])
                } else P(b, f);
            return t = D(f, "script"), 0 < t.length && u(t, !q && D(b, "script")), f
        },
        cleanData: function(b) {
            for (var c, d, g, m = p.event.special, e = 0; void 0 !== (d = b[e]); e++)
                if (Lb(d)) {
                    if (c = d[S.expando]) {
                        if (c.events)
                            for (g in c.events) m[g] ? p.event.remove(d, g) : p.removeEvent(d, g, c.handle);
                        d[S.expando] = void 0
                    }
                    d[qa.expando] && (d[qa.expando] = void 0)
                }
        }
    });
    p.fn.extend({
        detach: function(b) {
            return U(this, b, !0)
        },
        remove: function(b) {
            return U(this, b)
        },
        text: function(b) {
            return Ja(this,
                function(b) {
                    return void 0 === b ? p.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = b)
                    })
                }, null, b, arguments.length)
        },
        append: function() {
            return ba(this, arguments, function(b) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && I(this, b).appendChild(b)
            })
        },
        prepend: function() {
            return ba(this, arguments, function(b) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var c = I(this, b);
                    c.insertBefore(b, c.firstChild)
                }
            })
        },
        before: function() {
            return ba(this,
                arguments,
                function(b) {
                    this.parentNode && this.parentNode.insertBefore(b, this)
                })
        },
        after: function() {
            return ba(this, arguments, function(b) {
                this.parentNode && this.parentNode.insertBefore(b, this.nextSibling)
            })
        },
        empty: function() {
            for (var b, c = 0; null != (b = this[c]); c++) 1 === b.nodeType && (p.cleanData(D(b, !1)), b.textContent = "");
            return this
        },
        clone: function(b, c) {
            return b = null != b && b, c = null == c ? b : c, this.map(function() {
                return p.clone(this, b, c)
            })
        },
        html: function(b) {
            return Ja(this, function(b) {
                var c = this[0] || {},
                    d = 0,
                    g = this.length;
                if (void 0 === b && 1 === c.nodeType) return c.innerHTML;
                if ("string" == typeof b && !kd.test(b) && !ta[($b.exec(b) || ["", ""])[1].toLowerCase()]) {
                    b = p.htmlPrefilter(b);
                    try {
                        for (; d < g; d++) c = this[d] || {}, 1 === c.nodeType && (p.cleanData(D(c, !1)), c.innerHTML = b);
                        c = 0
                    } catch (m) {}
                }
                c && this.empty().append(b)
            }, null, b, arguments.length)
        },
        replaceWith: function() {
            var b = [];
            return ba(this, arguments, function(c) {
                var d = this.parentNode;
                0 > p.inArray(this, b) && (p.cleanData(D(this)), d && d.replaceChild(c, this))
            }, b)
        }
    });
    p.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(b, c) {
        p.fn[b] = function(b) {
            for (var d = [], g = p(b), m = g.length - 1, e = 0; e <= m; e++) b = e === m ? this : this.clone(!0), p(g[e])[c](b), db.apply(d, b.get());
            return this.pushStack(d)
        }
    });
    var bc = /^margin/,
        Rb = RegExp("^(" + oc + ")(?!px)[a-z%]+$", "i"),
        Cb = function(c) {
            var d = c.ownerDocument.defaultView;
            return d && d.opener || (d = b), d.getComputedStyle(c)
        },
        Qb = function() {
            if (Ca) {
                Ca.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";
                Ca.innerHTML = "";
                Ob.appendChild(Pb);
                var c = b.getComputedStyle(Ca);
                sc = "1%" !== c.top;
                tc = "2px" === c.marginLeft;
                uc = "4px" === c.width;
                Ca.style.marginRight = "50%";
                vc = "4px" === c.marginRight;
                Ob.removeChild(Pb);
                Ca = null
            }
        },
        sc, uc, vc, tc, Pb = X.createElement("div"),
        Ca = X.createElement("div");
    Ca.style && (Ca.style.backgroundClip = "content-box", Ca.cloneNode(!0).style.backgroundClip = "", da.clearCloneStyle = "content-box" === Ca.style.backgroundClip, Pb.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
        Pb.appendChild(Ca), p.extend(da, {
            pixelPosition: function() {
                return Qb(), sc
            },
            boxSizingReliable: function() {
                return Qb(), uc
            },
            pixelMarginRight: function() {
                return Qb(), vc
            },
            reliableMarginLeft: function() {
                return Qb(), tc
            }
        }));
    !0;
    var ld = /^(none|table(?!-c[ea]).+)/,
        wc = /^--/,
        md = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        xc = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        dc = ["Webkit", "Moz", "ms"],
        cc = X.createElement("div").style;
    p.extend({
        cssHooks: {
            opacity: {
                get: function(b, c) {
                    if (c) {
                        var d = s(b, "opacity");
                        return "" ===
                            d ? "1" : d
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(b, c, d, g) {
            if (b && 3 !== b.nodeType && 8 !== b.nodeType && b.style) {
                var m, e, t, f = p.camelCase(c),
                    q = wc.test(c),
                    s = b.style;
                return q || (c = F(f)), t = p.cssHooks[c] || p.cssHooks[f], void 0 === d ? t && "get" in t && void 0 !== (m = t.get(b, !1, g)) ? m : s[c] : (e = typeof d, "string" === e && (m = nb.exec(d)) && m[1] &&
                    (d = B(b, c, m), e = "number"), null != d && d === d && ("number" === e && (d += m && m[3] || (p.cssNumber[f] ? "" : "px")), da.clearCloneStyle || "" !== d || 0 !== c.indexOf("background") || (s[c] = "inherit"), t && "set" in t && void 0 === (d = t.set(b, d, g)) || (q ? s.setProperty(c, d) : s[c] = d)), void 0)
            }
        },
        css: function(b, c, d, g) {
            var m, e, t, f = p.camelCase(c);
            return wc.test(c) || (c = F(f)), t = p.cssHooks[c] || p.cssHooks[f], t && "get" in t && (m = t.get(b, !0, d)), void 0 === m && (m = s(b, c, g)), "normal" === m && c in xc && (m = xc[c]), "" === d || d ? (e = parseFloat(m), !0 === d || isFinite(e) ? e || 0 : m) :
                m
        }
    });
    p.each(["height", "width"], function(b, c) {
        p.cssHooks[c] = {
            get: function(b, d, g) {
                if (d) return !ld.test(p.css(b, "display")) || b.getClientRects().length && b.getBoundingClientRect().width ? aa(b, c, g) : pc(b, md, function() {
                    return aa(b, c, g)
                })
            },
            set: function(b, d, g) {
                var m, e = g && Cb(b);
                g = g && H(b, c, g, "border-box" === p.css(b, "boxSizing", !1, e), e);
                return g && (m = nb.exec(d)) && "px" !== (m[3] || "px") && (b.style[c] = d, d = p.css(b, c)), C(b, d, g)
            }
        }
    });
    p.cssHooks.marginLeft = x(da.reliableMarginLeft, function(b, c) {
        if (c) return (parseFloat(s(b, "marginLeft")) ||
            b.getBoundingClientRect().left - pc(b, {
                marginLeft: 0
            }, function() {
                return b.getBoundingClientRect().left
            })) + "px"
    });
    p.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(b, c) {
        p.cssHooks[b + c] = {
            expand: function(d) {
                var g = 0,
                    m = {};
                for (d = "string" == typeof d ? d.split(" ") : [d]; 4 > g; g++) m[b + Ta[g] + c] = d[g] || d[g - 2] || d[0];
                return m
            }
        };
        bc.test(b) || (p.cssHooks[b + c].set = C)
    });
    p.fn.extend({
        css: function(b, c) {
            return Ja(this, function(b, c, d) {
                var g, m = {},
                    e = 0;
                if (Array.isArray(c)) {
                    d = Cb(b);
                    for (g = c.length; e < g; e++) m[c[e]] = p.css(b, c[e], !1,
                        d);
                    return m
                }
                return void 0 !== d ? p.style(b, c, d) : p.css(b, c)
            }, b, c, 1 < arguments.length)
        }
    });
    p.Tween = R;
    R.prototype = {
        constructor: R,
        init: function(b, c, d, g, m, e) {
            this.elem = b;
            this.prop = d;
            this.easing = m || p.easing._default;
            this.options = c;
            this.start = this.now = this.cur();
            this.end = g;
            this.unit = e || (p.cssNumber[d] ? "" : "px")
        },
        cur: function() {
            var b = R.propHooks[this.prop];
            return b && b.get ? b.get(this) : R.propHooks._default.get(this)
        },
        run: function(b) {
            var c, d = R.propHooks[this.prop];
            return this.options.duration ? this.pos = c = p.easing[this.easing](b,
                this.options.duration * b, 0, 1, this.options.duration) : this.pos = c = b, this.now = (this.end - this.start) * c + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), d && d.set ? d.set(this) : R.propHooks._default.set(this), this
        }
    };
    R.prototype.init.prototype = R.prototype;
    R.propHooks = {
        _default: {
            get: function(b) {
                var c;
                return 1 !== b.elem.nodeType || null != b.elem[b.prop] && null == b.elem.style[b.prop] ? b.elem[b.prop] : (c = p.css(b.elem, b.prop, ""), c && "auto" !== c ? c : 0)
            },
            set: function(b) {
                p.fx.step[b.prop] ? p.fx.step[b.prop](b) :
                    1 !== b.elem.nodeType || null == b.elem.style[p.cssProps[b.prop]] && !p.cssHooks[b.prop] ? b.elem[b.prop] = b.now : p.style(b.elem, b.prop, b.now + b.unit)
            }
        }
    };
    R.propHooks.scrollTop = R.propHooks.scrollLeft = {
        set: function(b) {
            b.elem.nodeType && b.elem.parentNode && (b.elem[b.prop] = b.now)
        }
    };
    p.easing = {
        linear: function(b) {
            return b
        },
        swing: function(b) {
            return 0.5 - Math.cos(b * Math.PI) / 2
        },
        _default: "swing"
    };
    p.fx = R.prototype.init;
    p.fx.step = {};
    var cb, Db, nd = /^(?:toggle|show|hide)$/,
        od = /queueHooks$/;
    p.Animation = p.extend(M, {
        tweeners: {
            "*": [function(b,
                c) {
                var d = this.createTween(b, c);
                return B(d.elem, b, nb.exec(c), d), d
            }]
        },
        tweener: function(b, c) {
            p.isFunction(b) ? (c = b, b = ["*"]) : b = b.match(ua);
            for (var d, g = 0, m = b.length; g < m; g++) d = b[g], M.tweeners[d] = M.tweeners[d] || [], M.tweeners[d].unshift(c)
        },
        prefilters: [function(b, c, d) {
            var g, m, e, f, q, s, l, j, M = "width" in c || "height" in c,
                x = this,
                r = {},
                C = b.style,
                V = b.nodeType && Bb(b),
                J = S.get(b, "fxshow");
            d.queue || (f = p._queueHooks(b, "fx"), null == f.unqueued && (f.unqueued = 0, q = f.empty.fire, f.empty.fire = function() {
                    f.unqueued || q()
                }), f.unqueued++,
                x.always(function() {
                    x.always(function() {
                        f.unqueued--;
                        p.queue(b, "fx").length || f.empty.fire()
                    })
                }));
            for (g in c)
                if (m = c[g], nd.test(m)) {
                    if (delete c[g], e = e || "toggle" === m, m === (V ? "hide" : "show")) {
                        if ("show" !== m || !J || void 0 === J[g]) continue;
                        V = !0
                    }
                    r[g] = J && J[g] || p.style(b, g)
                }
            if (s = !p.isEmptyObject(c), s || !p.isEmptyObject(r))
                for (g in M && 1 === b.nodeType && (d.overflow = [C.overflow, C.overflowX, C.overflowY], l = J && J.display, null == l && (l = S.get(b, "display")), j = p.css(b, "display"), "none" === j && (l ? j = l : (E([b], !0), l = b.style.display ||
                        l, j = p.css(b, "display"), E([b]))), ("inline" === j || "inline-block" === j && null != l) && "none" === p.css(b, "float") && (s || (x.done(function() {
                        C.display = l
                    }), null == l && (j = C.display, l = "none" === j ? "" : j)), C.display = "inline-block")), d.overflow && (C.overflow = "hidden", x.always(function() {
                        C.overflow = d.overflow[0];
                        C.overflowX = d.overflow[1];
                        C.overflowY = d.overflow[2]
                    })), s = !1, r) s || (J ? "hidden" in J && (V = J.hidden) : J = S.access(b, "fxshow", {
                    display: l
                }), e && (J.hidden = !V), V && E([b], !0), x.done(function() {
                    V || E([b]);
                    S.remove(b, "fxshow");
                    for (g in r) p.style(b,
                        g, r[g])
                })), s = t(V ? J[g] : 0, g, x), g in J || (J[g] = s.start, V && (s.end = s.start, s.start = 0))
        }],
        prefilter: function(b, c) {
            c ? M.prefilters.unshift(b) : M.prefilters.push(b)
        }
    });
    p.speed = function(b, c, d) {
        var g = b && "object" == typeof b ? p.extend({}, b) : {
            complete: d || !d && c || p.isFunction(b) && b,
            duration: b,
            easing: d && c || c && !p.isFunction(c) && c
        };
        return p.fx.off ? g.duration = 0 : "number" != typeof g.duration && (g.duration in p.fx.speeds ? g.duration = p.fx.speeds[g.duration] : g.duration = p.fx.speeds._default), null != g.queue && !0 !== g.queue || (g.queue =
            "fx"), g.old = g.complete, g.complete = function() {
            p.isFunction(g.old) && g.old.call(this);
            g.queue && p.dequeue(this, g.queue)
        }, g
    };
    p.fn.extend({
        fadeTo: function(b, c, d, g) {
            return this.filter(Bb).css("opacity", 0).show().end().animate({
                opacity: c
            }, b, d, g)
        },
        animate: function(b, c, d, g) {
            var m = p.isEmptyObject(b),
                e = p.speed(c, d, g);
            c = function() {
                var c = M(this, p.extend({}, b), e);
                (m || S.get(this, "finish")) && c.stop(!0)
            };
            return c.finish = c, m || !1 === e.queue ? this.each(c) : this.queue(e.queue, c)
        },
        stop: function(b, c, d) {
            var g = function(b) {
                var c =
                    b.stop;
                delete b.stop;
                c(d)
            };
            return "string" != typeof b && (d = c, c = b, b = void 0), c && !1 !== b && this.queue(b || "fx", []), this.each(function() {
                var c = !0,
                    m = null != b && b + "queueHooks",
                    e = p.timers,
                    t = S.get(this);
                if (m) t[m] && t[m].stop && g(t[m]);
                else
                    for (m in t) t[m] && t[m].stop && od.test(m) && g(t[m]);
                for (m = e.length; m--;) e[m].elem !== this || null != b && e[m].queue !== b || (e[m].anim.stop(d), c = !1, e.splice(m, 1));
                !c && d || p.dequeue(this, b)
            })
        },
        finish: function(b) {
            return !1 !== b && (b = b || "fx"), this.each(function() {
                var c, d = S.get(this),
                    g = d[b + "queue"];
                c = d[b + "queueHooks"];
                var m = p.timers,
                    e = g ? g.length : 0;
                d.finish = !0;
                p.queue(this, b, []);
                c && c.stop && c.stop.call(this, !0);
                for (c = m.length; c--;) m[c].elem === this && m[c].queue === b && (m[c].anim.stop(!0), m.splice(c, 1));
                for (c = 0; c < e; c++) g[c] && g[c].finish && g[c].finish.call(this);
                delete d.finish
            })
        }
    });
    p.each(["toggle", "show", "hide"], function(b, c) {
        var d = p.fn[c];
        p.fn[c] = function(b, g, m) {
            return null == b || "boolean" == typeof b ? d.apply(this, arguments) : this.animate(J(c, !0), b, g, m)
        }
    });
    p.each({
        slideDown: J("show"),
        slideUp: J("hide"),
        slideToggle: J("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(b, c) {
        p.fn[b] = function(b, d, g) {
            return this.animate(c, b, d, g)
        }
    });
    p.timers = [];
    p.fx.tick = function() {
        var b, c = 0,
            d = p.timers;
        for (cb = p.now(); c < d.length; c++) b = d[c], b() || d[c] !== b || d.splice(c--, 1);
        d.length || p.fx.stop();
        cb = void 0
    };
    p.fx.timer = function(b) {
        p.timers.push(b);
        p.fx.start()
    };
    p.fx.interval = 13;
    p.fx.start = function() {
        Db || (Db = !0, m())
    };
    p.fx.stop = function() {
        Db = null
    };
    p.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    p.fn.delay = function(c, d) {
        return c = p.fx ? p.fx.speeds[c] || c : c, d = d || "fx", this.queue(d, function(d, g) {
            var m = b.setTimeout(d, c);
            g.stop = function() {
                b.clearTimeout(m)
            }
        })
    };
    var mb = X.createElement("input"),
        pd = X.createElement("select").appendChild(X.createElement("option"));
    mb.type = "checkbox";
    da.checkOn = "" !== mb.value;
    da.optSelected = pd.selected;
    mb = X.createElement("input");
    mb.value = "t";
    mb.type = "radio";
    da.radioValue = "t" === mb.value;
    var yc, yb = p.expr.attrHandle;
    p.fn.extend({
        attr: function(b, c) {
            return Ja(this, p.attr, b,
                c, 1 < arguments.length)
        },
        removeAttr: function(b) {
            return this.each(function() {
                p.removeAttr(this, b)
            })
        }
    });
    p.extend({
        attr: function(b, c, d) {
            var g, m, e = b.nodeType;
            if (3 !== e && 8 !== e && 2 !== e) return "undefined" == typeof b.getAttribute ? p.prop(b, c, d) : (1 === e && p.isXMLDoc(b) || (m = p.attrHooks[c.toLowerCase()] || (p.expr.match.bool.test(c) ? yc : void 0)), void 0 !== d ? null === d ? void p.removeAttr(b, c) : m && "set" in m && void 0 !== (g = m.set(b, d, c)) ? g : (b.setAttribute(c, d + ""), d) : m && "get" in m && null !== (g = m.get(b, c)) ? g : (g = p.find.attr(b, c), null ==
                g ? void 0 : g))
        },
        attrHooks: {
            type: {
                set: function(b, c) {
                    if (!da.radioValue && "radio" === c && f(b, "input")) {
                        var d = b.value;
                        return b.setAttribute("type", c), d && (b.value = d), c
                    }
                }
            }
        },
        removeAttr: function(b, c) {
            var d, g = 0,
                m = c && c.match(ua);
            if (m && 1 === b.nodeType)
                for (; d = m[g++];) b.removeAttribute(d)
        }
    });
    yc = {
        set: function(b, c, d) {
            return !1 === c ? p.removeAttr(b, d) : b.setAttribute(d, d), d
        }
    };
    p.each(p.expr.match.bool.source.match(/\w+/g), function(b, c) {
        var d = yb[c] || p.find.attr;
        yb[c] = function(b, c, g) {
            var m, e, t = c.toLowerCase();
            return g || (e = yb[t],
                yb[t] = m, m = null != d(b, c, g) ? t : null, yb[t] = e), m
        }
    });
    var qd = /^(?:input|select|textarea|button)$/i,
        rd = /^(?:a|area)$/i;
    p.fn.extend({
        prop: function(b, c) {
            return Ja(this, p.prop, b, c, 1 < arguments.length)
        },
        removeProp: function(b) {
            return this.each(function() {
                delete this[p.propFix[b] || b]
            })
        }
    });
    p.extend({
        prop: function(b, c, d) {
            var g, m, e = b.nodeType;
            if (3 !== e && 8 !== e && 2 !== e) return 1 === e && p.isXMLDoc(b) || (c = p.propFix[c] || c, m = p.propHooks[c]), void 0 !== d ? m && "set" in m && void 0 !== (g = m.set(b, d, c)) ? g : b[c] = d : m && "get" in m && null !== (g = m.get(b,
                c)) ? g : b[c]
        },
        propHooks: {
            tabIndex: {
                get: function(b) {
                    var c = p.find.attr(b, "tabindex");
                    return c ? parseInt(c, 10) : qd.test(b.nodeName) || rd.test(b.nodeName) && b.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    });
    da.optSelected || (p.propHooks.selected = {
        get: function(b) {
            b = b.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        },
        set: function(b) {
            b = b.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        }
    });
    p.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "),
        function() {
            p.propFix[this.toLowerCase()] = this
        });
    p.fn.extend({
        addClass: function(b) {
            var c, d, g, m, e, t, f = 0;
            if (p.isFunction(b)) return this.each(function(c) {
                p(this).addClass(b.call(this, c, ha(this)))
            });
            if ("string" == typeof b && b)
                for (c = b.match(ua) || []; d = this[f++];)
                    if (m = ha(d), g = 1 === d.nodeType && " " + V(m) + " ") {
                        for (t = 0; e = c[t++];) 0 > g.indexOf(" " + e + " ") && (g += e + " ");
                        g = V(g);
                        m !== g && d.setAttribute("class", g)
                    }
            return this
        },
        removeClass: function(b) {
            var c, d, g, m, e, t, f = 0;
            if (p.isFunction(b)) return this.each(function(c) {
                p(this).removeClass(b.call(this,
                    c, ha(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof b && b)
                for (c = b.match(ua) || []; d = this[f++];)
                    if (m = ha(d), g = 1 === d.nodeType && " " + V(m) + " ") {
                        for (t = 0; e = c[t++];)
                            for (; - 1 < g.indexOf(" " + e + " ");) g = g.replace(" " + e + " ", " ");
                        g = V(g);
                        m !== g && d.setAttribute("class", g)
                    }
            return this
        },
        toggleClass: function(b, c) {
            var d = typeof b;
            return "boolean" == typeof c && "string" === d ? c ? this.addClass(b) : this.removeClass(b) : p.isFunction(b) ? this.each(function(d) {
                    p(this).toggleClass(b.call(this, d, ha(this), c), c)
                }) :
                this.each(function() {
                    var c, g, m, e;
                    if ("string" === d) {
                        g = 0;
                        m = p(this);
                        for (e = b.match(ua) || []; c = e[g++];) m.hasClass(c) ? m.removeClass(c) : m.addClass(c)
                    } else void 0 !== b && "boolean" !== d || (c = ha(this), c && S.set(this, "__className__", c), this.setAttribute && this.setAttribute("class", c || !1 === b ? "" : S.get(this, "__className__") || ""))
                })
        },
        hasClass: function(b) {
            var c, d = 0;
            for (b = " " + b + " "; c = this[d++];)
                if (1 === c.nodeType && -1 < (" " + V(ha(c)) + " ").indexOf(b)) return !0;
            return !1
        }
    });
    var sd = /\r/g;
    p.fn.extend({
        val: function(b) {
            var c, d, g, m = this[0];
            if (arguments.length) return g = p.isFunction(b), this.each(function(d) {
                var m;
                1 === this.nodeType && (m = g ? b.call(this, d, p(this).val()) : b, null == m ? m = "" : "number" == typeof m ? m += "" : Array.isArray(m) && (m = p.map(m, function(b) {
                    return null == b ? "" : b + ""
                })), c = p.valHooks[this.type] || p.valHooks[this.nodeName.toLowerCase()], c && "set" in c && void 0 !== c.set(this, m, "value") || (this.value = m))
            });
            if (m) return c = p.valHooks[m.type] || p.valHooks[m.nodeName.toLowerCase()], c && "get" in c && void 0 !== (d = c.get(m, "value")) ? d : (d = m.value, "string" == typeof d ?
                d.replace(sd, "") : null == d ? "" : d)
        }
    });
    p.extend({
        valHooks: {
            option: {
                get: function(b) {
                    var c = p.find.attr(b, "value");
                    return null != c ? c : V(p.text(b))
                }
            },
            select: {
                get: function(b) {
                    var c, d, g = b.options,
                        m = b.selectedIndex,
                        e = "select-one" === b.type,
                        t = e ? null : [],
                        s = e ? m + 1 : g.length;
                    for (d = 0 > m ? s : e ? m : 0; d < s; d++)
                        if (c = g[d], (c.selected || d === m) && !c.disabled && (!c.parentNode.disabled || !f(c.parentNode, "optgroup"))) {
                            if (b = p(c).val(), e) return b;
                            t.push(b)
                        }
                    return t
                },
                set: function(b, c) {
                    for (var d, g, m = b.options, e = p.makeArray(c), t = m.length; t--;) g =
                        m[t], (g.selected = -1 < p.inArray(p.valHooks.option.get(g), e)) && (d = !0);
                    return d || (b.selectedIndex = -1), e
                }
            }
        }
    });
    p.each(["radio", "checkbox"], function() {
        p.valHooks[this] = {
            set: function(b, c) {
                if (Array.isArray(c)) return b.checked = -1 < p.inArray(p(b).val(), c)
            }
        };
        da.checkOn || (p.valHooks[this].get = function(b) {
            return null === b.getAttribute("value") ? "on" : b.value
        })
    });
    var zc = /^(?:focusinfocus|focusoutblur)$/;
    p.extend(p.event, {
        trigger: function(c, d, g, m) {
            var e, t, f, s, q, l, j, M = [g || X],
                x = Ma.call(c, "type") ? c.type : c;
            e = Ma.call(c, "namespace") ?
                c.namespace.split(".") : [];
            if (t = f = g = g || X, 3 !== g.nodeType && 8 !== g.nodeType && !zc.test(x + p.event.triggered) && (-1 < x.indexOf(".") && (e = x.split("."), x = e.shift(), e.sort()), q = 0 > x.indexOf(":") && "on" + x, c = c[p.expando] ? c : new p.Event(x, "object" == typeof c && c), c.isTrigger = m ? 2 : 3, c.namespace = e.join("."), c.rnamespace = c.namespace ? RegExp("(^|\\.)" + e.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, c.result = void 0, c.target || (c.target = g), d = null == d ? [c] : p.makeArray(d, [c]), j = p.event.special[x] || {}, m || !j.trigger || !1 !== j.trigger.apply(g,
                    d))) {
                if (!m && !j.noBubble && !p.isWindow(g)) {
                    s = j.delegateType || x;
                    for (zc.test(s + x) || (t = t.parentNode); t; t = t.parentNode) M.push(t), f = t;
                    f === (g.ownerDocument || X) && M.push(f.defaultView || f.parentWindow || b)
                }
                for (e = 0;
                    (t = M[e++]) && !c.isPropagationStopped();) c.type = 1 < e ? s : j.bindType || x, (l = (S.get(t, "events") || {})[c.type] && S.get(t, "handle")) && l.apply(t, d), (l = q && t[q]) && l.apply && Lb(t) && (c.result = l.apply(t, d), !1 === c.result && c.preventDefault());
                return c.type = x, m || c.isDefaultPrevented() || j._default && !1 !== j._default.apply(M.pop(),
                    d) || !Lb(g) || q && p.isFunction(g[x]) && !p.isWindow(g) && (f = g[q], f && (g[q] = null), p.event.triggered = x, g[x](), p.event.triggered = void 0, f && (g[q] = f)), c.result
            }
        },
        simulate: function(b, c, d) {
            b = p.extend(new p.Event, d, {
                type: b,
                isSimulated: !0
            });
            p.event.trigger(b, null, c)
        }
    });
    p.fn.extend({
        trigger: function(b, c) {
            return this.each(function() {
                p.event.trigger(b, c, this)
            })
        },
        triggerHandler: function(b, c) {
            var d = this[0];
            if (d) return p.event.trigger(b, c, d, !0)
        }
    });
    p.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
        function(b, c) {
            p.fn[c] = function(b, d) {
                return 0 < arguments.length ? this.on(c, null, b, d) : this.trigger(c)
            }
        });
    p.fn.extend({
        hover: function(b, c) {
            return this.mouseenter(b).mouseleave(c || b)
        }
    });
    da.focusin = "onfocusin" in b;
    da.focusin || p.each({
        focus: "focusin",
        blur: "focusout"
    }, function(b, c) {
        var d = function(b) {
            p.event.simulate(c, b.target, p.event.fix(b))
        };
        p.event.special[c] = {
            setup: function() {
                var g = this.ownerDocument || this,
                    m = S.access(g, c);
                m || g.addEventListener(b, d, !0);
                S.access(g, c, (m || 0) + 1)
            },
            teardown: function() {
                var g =
                    this.ownerDocument || this,
                    m = S.access(g, c) - 1;
                m ? S.access(g, c, m) : (g.removeEventListener(b, d, !0), S.remove(g, c))
            }
        }
    });
    var zb = b.location,
        Ac = p.now(),
        Wb = /\?/;
    p.parseXML = function(c) {
        var d;
        if (!c || "string" != typeof c) return null;
        try {
            d = (new b.DOMParser).parseFromString(c, "text/xml")
        } catch (g) {
            d = void 0
        }
        return d && !d.getElementsByTagName("parsererror").length || p.error("Invalid XML: " + c), d
    };
    var Pc = /\[\]$/,
        Bc = /\r?\n/g,
        td = /^(?:submit|button|image|reset|file)$/i,
        ud = /^(?:input|select|textarea|keygen)/i;
    p.param = function(b,
        c) {
        var d, g = [],
            m = function(b, c) {
                var d = p.isFunction(c) ? c() : c;
                g[g.length] = encodeURIComponent(b) + "=" + encodeURIComponent(null == d ? "" : d)
            };
        if (Array.isArray(b) || b.jquery && !p.isPlainObject(b)) p.each(b, function() {
            m(this.name, this.value)
        });
        else
            for (d in b) ia(d, b[d], c, m);
        return g.join("&")
    };
    p.fn.extend({
        serialize: function() {
            return p.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var b = p.prop(this, "elements");
                return b ? p.makeArray(b) : this
            }).filter(function() {
                var b = this.type;
                return this.name &&
                    !p(this).is(":disabled") && ud.test(this.nodeName) && !td.test(b) && (this.checked || !qc.test(b))
            }).map(function(b, c) {
                var d = p(this).val();
                return null == d ? null : Array.isArray(d) ? p.map(d, function(b) {
                    return {
                        name: c.name,
                        value: b.replace(Bc, "\r\n")
                    }
                }) : {
                    name: c.name,
                    value: d.replace(Bc, "\r\n")
                }
            }).get()
        }
    });
    var vd = /%20/g,
        wd = /#.*$/,
        xd = /([?&])_=[^&]*/,
        yd = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        zd = /^(?:GET|HEAD)$/,
        Ad = /^\/\//,
        Cc = {},
        Sb = {},
        Dc = "*/".concat("*"),
        Xb = X.createElement("a");
    Xb.href = zb.href;
    p.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: zb.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(zb.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Dc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": p.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(b, c) {
            return c ? oa(oa(b, p.ajaxSettings), c) : oa(p.ajaxSettings, b)
        },
        ajaxPrefilter: la(Cc),
        ajaxTransport: la(Sb),
        ajax: function(c, d) {
            function g(c, d, f, q) {
                var M, x, y, R, ha = d;
                if (!l) {
                    l = !0;
                    s && b.clearTimeout(s);
                    m = void 0;
                    t = q || "";
                    H.readyState = 0 < c ? 4 : 0;
                    q = 200 <= c && 300 > c || 304 === c;
                    if (f) {
                        y = r;
                        for (var z = H, n, A, aa, ia, B = y.contents, K = y.dataTypes;
                            "*" === K[0];) K.shift(), void 0 === n && (n = y.mimeType || z.getResponseHeader("Content-Type"));
                        if (n)
                            for (A in B)
                                if (B[A] && B[A].test(n)) {
                                    K.unshift(A);
                                    break
                                }
                        if (K[0] in f) aa = K[0];
                        else {
                            for (A in f) {
                                if (!K[0] || y.converters[A + " " + K[0]]) {
                                    aa = A;
                                    break
                                }
                                ia || (ia = A)
                            }
                            aa = aa || ia
                        }
                        f = aa ? (aa !== K[0] && K.unshift(aa), f[aa]) : void 0;
                        y = f
                    }
                    var oa;
                    a: {
                        f = r;n = y;A = H;aa = q;
                        var la, ra, G;y = {};z = f.dataTypes.slice();
                        if (z[1])
                            for (la in f.converters) y[la.toLowerCase()] = f.converters[la];
                        for (ia = z.shift(); ia;)
                            if (f.responseFields[ia] && (A[f.responseFields[ia]] = n), !G && aa && f.dataFilter && (n = f.dataFilter(n, f.dataType)), G = ia, ia = z.shift())
                                if ("*" === ia) ia =
                                    G;
                                else if ("*" !== G && G !== ia) {
                            if (la = y[G + " " + ia] || y["* " + ia], !la)
                                for (oa in y)
                                    if (ra = oa.split(" "), ra[1] === ia && (la = y[G + " " + ra[0]] || y["* " + ra[0]])) {
                                        !0 === la ? la = y[oa] : !0 !== y[oa] && (ia = ra[0], z.unshift(ra[1]));
                                        break
                                    }
                            if (!0 !== la)
                                if (la && f["throws"]) n = la(n);
                                else try {
                                    n = la(n)
                                } catch (va) {
                                    oa = {
                                        state: "parsererror",
                                        error: la ? va : "No conversion from " + G + " to " + ia
                                    };
                                    break a
                                }
                        }
                        oa = {
                            state: "success",
                            data: n
                        }
                    }
                    y = oa;
                    q ? (r.ifModified && (R = H.getResponseHeader("Last-Modified"), R && (p.lastModified[e] = R), R = H.getResponseHeader("etag"), R && (p.etag[e] =
                        R)), 204 === c || "HEAD" === r.type ? ha = "nocontent" : 304 === c ? ha = "notmodified" : (ha = y.state, M = y.data, x = y.error, q = !x)) : (x = ha, !c && ha || (ha = "error", 0 > c && (c = 0)));
                    H.status = c;
                    H.statusText = (d || ha) + "";
                    q ? J.resolveWith(C, [M, ha, H]) : J.rejectWith(C, [H, ha, x]);
                    H.statusCode(F);
                    F = void 0;
                    j && V.trigger(q ? "ajaxSuccess" : "ajaxError", [H, r, q ? M : x]);
                    u.fireWith(C, [H, ha]);
                    j && (V.trigger("ajaxComplete", [H, r]), --p.active || p.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof c && (d = c, c = void 0);
            d = d || {};
            var m, e, t, f, s, q, l, j, M, x, r = p.ajaxSetup({}, d),
                C =
                r.context || r,
                V = r.context && (C.nodeType || C.jquery) ? p(C) : p.event,
                J = p.Deferred(),
                u = p.Callbacks("once memory"),
                F = r.statusCode || {},
                y = {},
                R = {},
                ha = "canceled",
                H = {
                    readyState: 0,
                    getResponseHeader: function(b) {
                        var c;
                        if (l) {
                            if (!f)
                                for (f = {}; c = yd.exec(t);) f[c[1].toLowerCase()] = c[2];
                            c = f[b.toLowerCase()]
                        }
                        return null == c ? null : c
                    },
                    getAllResponseHeaders: function() {
                        return l ? t : null
                    },
                    setRequestHeader: function(b, c) {
                        return null == l && (b = R[b.toLowerCase()] = R[b.toLowerCase()] || b, y[b] = c), this
                    },
                    overrideMimeType: function(b) {
                        return null ==
                            l && (r.mimeType = b), this
                    },
                    statusCode: function(b) {
                        var c;
                        if (b)
                            if (l) H.always(b[H.status]);
                            else
                                for (c in b) F[c] = [F[c], b[c]];
                        return this
                    },
                    abort: function(b) {
                        b = b || ha;
                        return m && m.abort(b), g(0, b), this
                    }
                };
            if (J.promise(H), r.url = ((c || r.url || zb.href) + "").replace(Ad, zb.protocol + "//"), r.type = d.method || d.type || r.method || r.type, r.dataTypes = (r.dataType || "*").toLowerCase().match(ua) || [""], null == r.crossDomain) {
                q = X.createElement("a");
                try {
                    q.href = r.url, q.href = q.href, r.crossDomain = Xb.protocol + "//" + Xb.host != q.protocol + "//" +
                        q.host
                } catch (z) {
                    r.crossDomain = !0
                }
            }
            if (r.data && r.processData && "string" != typeof r.data && (r.data = p.param(r.data, r.traditional)), ra(Cc, r, d, H), l) return H;
            (j = p.event && r.global) && 0 === p.active++ && p.event.trigger("ajaxStart");
            r.type = r.type.toUpperCase();
            r.hasContent = !zd.test(r.type);
            e = r.url.replace(wd, "");
            r.hasContent ? r.data && r.processData && 0 === (r.contentType || "").indexOf("application/x-www-form-urlencoded") && (r.data = r.data.replace(vd, "+")) : (x = r.url.slice(e.length), r.data && (e += (Wb.test(e) ? "&" : "?") + r.data, delete r.data), !1 === r.cache && (e = e.replace(xd, "$1"), x = (Wb.test(e) ? "&" : "?") + "_=" + Ac++ + x), r.url = e + x);
            r.ifModified && (p.lastModified[e] && H.setRequestHeader("If-Modified-Since", p.lastModified[e]), p.etag[e] && H.setRequestHeader("If-None-Match", p.etag[e]));
            (r.data && r.hasContent && !1 !== r.contentType || d.contentType) && H.setRequestHeader("Content-Type", r.contentType);
            H.setRequestHeader("Accept", r.dataTypes[0] && r.accepts[r.dataTypes[0]] ? r.accepts[r.dataTypes[0]] + ("*" !== r.dataTypes[0] ? ", " + Dc + "; q=0.01" : "") : r.accepts["*"]);
            for (M in r.headers) H.setRequestHeader(M,
                r.headers[M]);
            if (r.beforeSend && (!1 === r.beforeSend.call(C, H, r) || l)) return H.abort();
            if (ha = "abort", u.add(r.complete), H.done(r.success), H.fail(r.error), m = ra(Sb, r, d, H)) {
                if (H.readyState = 1, j && V.trigger("ajaxSend", [H, r]), l) return H;
                r.async && 0 < r.timeout && (s = b.setTimeout(function() {
                    H.abort("timeout")
                }, r.timeout));
                try {
                    l = !1, m.send(y, g)
                } catch (n) {
                    if (l) throw n;
                    g(-1, n)
                }
            } else g(-1, "No Transport");
            return H
        },
        getJSON: function(b, c, d) {
            return p.get(b, c, d, "json")
        },
        getScript: function(b, c) {
            return p.get(b, void 0, c, "script")
        }
    });
    p.each(["get", "post"], function(b, c) {
        p[c] = function(b, d, g, m) {
            return p.isFunction(d) && (m = m || g, g = d, d = void 0), p.ajax(p.extend({
                url: b,
                type: c,
                dataType: m,
                data: d,
                success: g
            }, p.isPlainObject(b) && b))
        }
    });
    p._evalUrl = function(b) {
        return p.ajax({
            url: b,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    };
    p.fn.extend({
        wrapAll: function(b) {
            var c;
            return this[0] && (p.isFunction(b) && (b = b.call(this[0])), c = p(b, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && c.insertBefore(this[0]), c.map(function() {
                for (var b =
                        this; b.firstElementChild;) b = b.firstElementChild;
                return b
            }).append(this)), this
        },
        wrapInner: function(b) {
            return p.isFunction(b) ? this.each(function(c) {
                p(this).wrapInner(b.call(this, c))
            }) : this.each(function() {
                var c = p(this),
                    d = c.contents();
                d.length ? d.wrapAll(b) : c.append(b)
            })
        },
        wrap: function(b) {
            var c = p.isFunction(b);
            return this.each(function(d) {
                p(this).wrapAll(c ? b.call(this, d) : b)
            })
        },
        unwrap: function(b) {
            return this.parent(b).not("body").each(function() {
                p(this).replaceWith(this.childNodes)
            }), this
        }
    });
    p.expr.pseudos.hidden =
        function(b) {
            return !p.expr.pseudos.visible(b)
        };
    p.expr.pseudos.visible = function(b) {
        return !(!b.offsetWidth && !b.offsetHeight && !b.getClientRects().length)
    };
    p.ajaxSettings.xhr = function() {
        try {
            return new b.XMLHttpRequest
        } catch (c) {}
    };
    var Bd = {
            "0": 200,
            1223: 204
        },
        Ab = p.ajaxSettings.xhr();
    da.cors = !!Ab && "withCredentials" in Ab;
    da.ajax = Ab = !!Ab;
    p.ajaxTransport(function(c) {
        var d, g;
        if (da.cors || Ab && !c.crossDomain) return {
            send: function(m, e) {
                var t, f = c.xhr();
                if (f.open(c.type, c.url, c.async, c.username, c.password), c.xhrFields)
                    for (t in c.xhrFields) f[t] =
                        c.xhrFields[t];
                c.mimeType && f.overrideMimeType && f.overrideMimeType(c.mimeType);
                c.crossDomain || m["X-Requested-With"] || (m["X-Requested-With"] = "XMLHttpRequest");
                for (t in m) f.setRequestHeader(t, m[t]);
                d = function(b) {
                    return function() {
                        d && (d = g = f.onload = f.onerror = f.onabort = f.onreadystatechange = null, "abort" === b ? f.abort() : "error" === b ? "number" != typeof f.status ? e(0, "error") : e(f.status, f.statusText) : e(Bd[f.status] || f.status, f.statusText, "text" !== (f.responseType || "text") || "string" != typeof f.responseText ? {
                            binary: f.response
                        } : {
                            text: f.responseText
                        }, f.getAllResponseHeaders()))
                    }
                };
                f.onload = d();
                g = f.onerror = d("error");
                void 0 !== f.onabort ? f.onabort = g : f.onreadystatechange = function() {
                    4 === f.readyState && b.setTimeout(function() {
                        d && g()
                    })
                };
                d = d("abort");
                try {
                    f.send(c.hasContent && c.data || null)
                } catch (q) {
                    if (d) throw q;
                }
            },
            abort: function() {
                d && d()
            }
        }
    });
    p.ajaxPrefilter(function(b) {
        b.crossDomain && (b.contents.script = !1)
    });
    p.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(b) {
                return p.globalEval(b), b
            }
        }
    });
    p.ajaxPrefilter("script", function(b) {
        void 0 === b.cache && (b.cache = !1);
        b.crossDomain && (b.type = "GET")
    });
    p.ajaxTransport("script", function(b) {
        if (b.crossDomain) {
            var c, d;
            return {
                send: function(g, m) {
                    c = p("<script>").prop({
                        charset: b.scriptCharset,
                        src: b.url
                    }).on("load error", d = function(b) {
                        c.remove();
                        d = null;
                        b && m("error" === b.type ? 404 : 200, b.type)
                    });
                    X.head.appendChild(c[0])
                },
                abort: function() {
                    d && d()
                }
            }
        }
    });
    var Ec = [],
        Yb = /(=)\?(?=&|$)|\?\?/;
    p.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var b = Ec.pop() || p.expando + "_" + Ac++;
            return this[b] = !0, b
        }
    });
    p.ajaxPrefilter("json jsonp", function(c, d, g) {
        var m, e, t, f = !1 !== c.jsonp && (Yb.test(c.url) ? "url" : "string" == typeof c.data && 0 === (c.contentType || "").indexOf("application/x-www-form-urlencoded") && Yb.test(c.data) && "data");
        if (f || "jsonp" === c.dataTypes[0]) return m = c.jsonpCallback = p.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, f ? c[f] = c[f].replace(Yb, "$1" + m) : !1 !== c.jsonp && (c.url += (Wb.test(c.url) ? "&" : "?") + c.jsonp +
            "=" + m), c.converters["script json"] = function() {
            return t || p.error(m + " was not called"), t[0]
        }, c.dataTypes[0] = "json", e = b[m], b[m] = function() {
            t = arguments
        }, g.always(function() {
            void 0 === e ? p(b).removeProp(m) : b[m] = e;
            c[m] && (c.jsonpCallback = d.jsonpCallback, Ec.push(m));
            t && p.isFunction(e) && e(t[0]);
            t = e = void 0
        }), "script"
    });
    var Cd = da,
        Fc, Gc = X.implementation.createHTMLDocument("").body;
    Fc = (Gc.innerHTML = "<form></form><form></form>", 2 === Gc.childNodes.length);
    Cd.createHTMLDocument = Fc;
    p.parseHTML = function(b, c, d) {
        if ("string" !=
            typeof b) return [];
        "boolean" == typeof c && (d = c, c = !1);
        var g, m, e;
        return c || (da.createHTMLDocument ? (c = X.implementation.createHTMLDocument(""), g = c.createElement("base"), g.href = X.location.href, c.head.appendChild(g)) : c = X), m = mc.exec(b), e = !d && [], m ? [c.createElement(m[1])] : (m = G([b], c, e), e && e.length && p(e).remove(), p.merge([], m.childNodes))
    };
    p.fn.load = function(b, c, d) {
        var g, m, e, t = this,
            f = b.indexOf(" ");
        return -1 < f && (g = V(b.slice(f)), b = b.slice(0, f)), p.isFunction(c) ? (d = c, c = void 0) : c && "object" == typeof c && (m = "POST"), 0 <
            t.length && p.ajax({
                url: b,
                type: m || "GET",
                dataType: "html",
                data: c
            }).done(function(b) {
                e = arguments;
                t.html(g ? p("<div>").append(p.parseHTML(b)).find(g) : b)
            }).always(d && function(b, c) {
                t.each(function() {
                    d.apply(this, e || [b.responseText, c, b])
                })
            }), this
    };
    p.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(b, c) {
        p.fn[c] = function(b) {
            return this.on(c, b)
        }
    });
    p.expr.pseudos.animated = function(b) {
        return p.grep(p.timers, function(c) {
            return b === c.elem
        }).length
    };
    p.offset = {
        setOffset: function(b,
            c, d) {
            var g, m, e, t, f, q, s = p.css(b, "position"),
                l = p(b),
                j = {};
            "static" === s && (b.style.position = "relative");
            f = l.offset();
            e = p.css(b, "top");
            q = p.css(b, "left");
            ("absolute" === s || "fixed" === s) && -1 < (e + q).indexOf("auto") ? (g = l.position(), t = g.top, m = g.left) : (t = parseFloat(e) || 0, m = parseFloat(q) || 0);
            p.isFunction(c) && (c = c.call(b, d, p.extend({}, f)));
            null != c.top && (j.top = c.top - f.top + t);
            null != c.left && (j.left = c.left - f.left + m);
            "using" in c ? c.using.call(b, j) : l.css(j)
        }
    };
    p.fn.extend({
        offset: function(b) {
            if (arguments.length) return void 0 ===
                b ? this : this.each(function(c) {
                    p.offset.setOffset(this, b, c)
                });
            var c, d, g, m, e = this[0];
            if (e) return e.getClientRects().length ? (g = e.getBoundingClientRect(), c = e.ownerDocument, d = c.documentElement, m = c.defaultView, {
                top: g.top + m.pageYOffset - d.clientTop,
                left: g.left + m.pageXOffset - d.clientLeft
            }) : {
                top: 0,
                left: 0
            }
        },
        position: function() {
            if (this[0]) {
                var b, c, d = this[0],
                    g = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === p.css(d, "position") ? c = d.getBoundingClientRect() : (b = this.offsetParent(), c = this.offset(), f(b[0], "html") || (g = b.offset()), g = {
                    top: g.top +
                        p.css(b[0], "borderTopWidth", !0),
                    left: g.left + p.css(b[0], "borderLeftWidth", !0)
                }), {
                    top: c.top - g.top - p.css(d, "marginTop", !0),
                    left: c.left - g.left - p.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var b = this.offsetParent; b && "static" === p.css(b, "position");) b = b.offsetParent;
                return b || Ob
            })
        }
    });
    p.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, c) {
        var d = "pageYOffset" === c;
        p.fn[b] = function(g) {
            return Ja(this, function(b, g, m) {
                var e;
                return p.isWindow(b) ? e = b : 9 === b.nodeType &&
                    (e = b.defaultView), void 0 === m ? e ? e[c] : b[g] : void(e ? e.scrollTo(d ? e.pageXOffset : m, d ? m : e.pageYOffset) : b[g] = m)
            }, b, g, arguments.length)
        }
    });
    p.each(["top", "left"], function(b, c) {
        p.cssHooks[c] = x(da.pixelPosition, function(b, d) {
            if (d) return d = s(b, c), Rb.test(d) ? p(b).position()[c] + "px" : d
        })
    });
    p.each({
        Height: "height",
        Width: "width"
    }, function(b, c) {
        p.each({
            padding: "inner" + b,
            content: c,
            "": "outer" + b
        }, function(d, g) {
            p.fn[g] = function(m, e) {
                var t = arguments.length && (d || "boolean" != typeof m),
                    f = d || (!0 === m || !0 === e ? "margin" : "border");
                return Ja(this, function(c, d, m) {
                    var e;
                    return p.isWindow(c) ? 0 === g.indexOf("outer") ? c["inner" + b] : c.document.documentElement["client" + b] : 9 === c.nodeType ? (e = c.documentElement, Math.max(c.body["scroll" + b], e["scroll" + b], c.body["offset" + b], e["offset" + b], e["client" + b])) : void 0 === m ? p.css(c, d, f) : p.style(c, d, m, f)
                }, c, t ? m : void 0, t)
            }
        })
    });
    p.fn.extend({
        bind: function(b, c, d) {
            return this.on(b, null, c, d)
        },
        unbind: function(b, c) {
            return this.off(b, null, c)
        },
        delegate: function(b, c, d, g) {
            return this.on(c, b, d, g)
        },
        undelegate: function(b,
            c, d) {
            return 1 === arguments.length ? this.off(b, "**") : this.off(c, b || "**", d)
        }
    });
    p.holdReady = function(b) {
        b ? p.readyWait++ : p.ready(!0)
    };
    p.isArray = Array.isArray;
    p.parseJSON = JSON.parse;
    p.nodeName = f;
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return p
    });
    var Dd = b.jQuery,
        Ed = b.$;
    return p.noConflict = function(c) {
        return b.$ === p && (b.$ = Ed), c && b.jQuery === p && (b.jQuery = Dd), p
    }, c || (b.jQuery = b.$ = p), p
});

function getInternetExplorerVersion() {
    var b = -1;
    "Microsoft Internet Explorer" == navigator.appName && null != /MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent) && (b = parseFloat(RegExp.$1));
    return b
}
var ie = getInternetExplorerVersion();

function getQueryVariable(b) {
    for (var c = window.location.search.substring(1).split("&"), d = 0; d < c.length; d++) {
        var e = c[d].split("=");
        if (decodeURIComponent(e[0]) == b) return decodeURIComponent(e[1])
    }
};
this.jukebox = {};
jukebox.Player = function(b, c) {
    this.id = ++jukebox.__jukeboxId;
    this.origin = c || null;
    this.settings = {};
    for (var d in this.defaults) this.settings[d] = this.defaults[d];
    if ("[object Object]" === Object.prototype.toString.call(b))
        for (var e in b) this.settings[e] = b[e];
    "[object Function]" === Object.prototype.toString.call(jukebox.Manager) && (jukebox.Manager = new jukebox.Manager);
    this.resource = this.isPlaying = null;
    this.resource = "[object Object]" === Object.prototype.toString.call(jukebox.Manager) ? jukebox.Manager.getPlayableResource(this.settings.resources) : this.settings.resources[0] ||
        null;
    if (null === this.resource) throw "Your browser can't playback the given resources - or you have missed to include jukebox.Manager";
    this.__init();
    return this
};
jukebox.__jukeboxId = 0;
jukebox.Player.prototype = {
    defaults: {
        resources: [],
        autoplay: !1,
        spritemap: {},
        flashMediaElement: "./swf/FlashMediaElement.swf",
        timeout: 1E3
    },
    __addToManager: function() {
        !0 !== this.__wasAddedToManager && (jukebox.Manager.add(this), this.__wasAddedToManager = !0)
    },
    __init: function() {
        var b = this,
            c = this.settings,
            d = {},
            e;
        jukebox.Manager && void 0 !== jukebox.Manager.features && (d = jukebox.Manager.features);
        if (!0 === d.html5audio) {
            this.context = new Audio;
            this.context.src = this.resource;
            if (null === this.origin) {
                var f = function(c) {
                    b.__addToManager(c)
                };
                this.context.addEventListener("canplaythrough", f, !0);
                window.setTimeout(function() {
                    b.context.removeEventListener("canplaythrough", f, !0);
                    f("timeout")
                }, c.timeout)
            }
            this.context.autobuffer = !0;
            this.context.preload = !0;
            for (e in this.HTML5API) this[e] = this.HTML5API[e];
            1 < d.channels ? !0 === c.autoplay ? this.context.autoplay = !0 : void 0 !== c.spritemap[c.autoplay] && this.play(c.autoplay) : 1 === d.channels && void 0 !== c.spritemap[c.autoplay] && (this.backgroundMusic = c.spritemap[c.autoplay], this.backgroundMusic.started = Date.now ?
                Date.now() : +new Date, this.play(c.autoplay));
            1 == d.channels && !0 !== c.canPlayBackground && (window.addEventListener("pagehide", function() {
                null !== b.isPlaying && (b.pause(), b.__wasAutoPaused = !0)
            }), window.addEventListener("pageshow", function() {
                b.__wasAutoPaused && (b.resume(), delete b._wasAutoPaused)
            }))
        } else if (!0 === d.flashaudio) {
            for (e in this.FLASHAPI) this[e] = this.FLASHAPI[e];
            d = ["id=jukebox-flashstream-" + this.id, "autoplay=" + c.autoplay, "file=" + window.encodeURIComponent(this.resource)];
            this.__initFlashContext(d);
            !0 === c.autoplay ? this.play(0) : c.spritemap[c.autoplay] && this.play(c.autoplay)
        } else throw "Your Browser does not support Flash Audio or HTML5 Audio.";
    },
    __initFlashContext: function(b) {
        var c, d = this.settings.flashMediaElement,
            e, f = {
                flashvars: b.join("&"),
                quality: "high",
                bgcolor: "#000000",
                wmode: "transparent",
                allowscriptaccess: "always",
                allowfullscreen: "true"
            };
        if (navigator.userAgent.match(/MSIE/)) {
            c = document.createElement("div");
            document.getElementsByTagName("body")[0].appendChild(c);
            var j = document.createElement("object");
            j.id = "jukebox-flashstream-" + this.id;
            j.setAttribute("type", "application/x-shockwave-flash");
            j.setAttribute("classid", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000");
            j.setAttribute("width", "0");
            j.setAttribute("height", "0");
            f.movie = d + "?x=" + (Date.now ? Date.now() : +new Date);
            f.flashvars = b.join("&amp;");
            for (e in f) b = document.createElement("param"), b.setAttribute("name", e), b.setAttribute("value", f[e]), j.appendChild(b);
            c.outerHTML = j.outerHTML;
            this.context = document.getElementById("jukebox-flashstream-" + this.id)
        } else {
            c =
                document.createElement("embed");
            c.id = "jukebox-flashstream-" + this.id;
            c.setAttribute("type", "application/x-shockwave-flash");
            c.setAttribute("width", "100");
            c.setAttribute("height", "100");
            f.play = !1;
            f.loop = !1;
            f.src = d + "?x=" + (Date.now ? Date.now() : +new Date);
            for (e in f) c.setAttribute(e, f[e]);
            document.getElementsByTagName("body")[0].appendChild(c);
            this.context = c
        }
    },
    backgroundHackForiOS: function() {
        if (void 0 !== this.backgroundMusic) {
            var b = Date.now ? Date.now() : +new Date;
            void 0 === this.backgroundMusic.started ? (this.backgroundMusic.started =
                b, this.setCurrentTime(this.backgroundMusic.start)) : (this.backgroundMusic.lastPointer = (b - this.backgroundMusic.started) / 1E3 % (this.backgroundMusic.end - this.backgroundMusic.start) + this.backgroundMusic.start, this.play(this.backgroundMusic.lastPointer))
        }
    },
    play: function(b, c) {
        if (null !== this.isPlaying && !0 !== c) void 0 !== jukebox.Manager && jukebox.Manager.addToQueue(b, this.id);
        else {
            var d = this.settings.spritemap,
                e;
            if (void 0 !== d[b]) e = d[b].start;
            else if ("number" === typeof b) {
                e = b;
                for (var f in d)
                    if (e >= d[f].start && e <=
                        d[f].end) {
                        b = f;
                        break
                    }
            }
            void 0 !== e && "[object Object]" === Object.prototype.toString.call(d[b]) && (this.isPlaying = this.settings.spritemap[b], this.context.play && this.context.play(), this.wasReady = this.setCurrentTime(e))
        }
    },
    stop: function() {
        this.__lastPosition = 0;
        this.isPlaying = null;
        this.backgroundMusic ? this.backgroundHackForiOS() : this.context.pause();
        return !0
    },
    pause: function() {
        this.isPlaying = null;
        this.__lastPosition = this.getCurrentTime();
        this.context.pause();
        return this.__lastPosition
    },
    resume: function(b) {
        b = "number" ===
            typeof b ? b : this.__lastPosition;
        if (null !== b) return this.play(b), this.__lastPosition = null, !0;
        this.context.play();
        return !1
    },
    HTML5API: {
        getVolume: function() {
            return this.context.volume || 1
        },
        setVolume: function(b) {
            this.context.volume = b;
            return 1E-4 > Math.abs(this.context.volume - b) ? !0 : !1
        },
        getCurrentTime: function() {
            return this.context.currentTime || 0
        },
        setCurrentTime: function(b) {
            try {
                return this.context.currentTime = b, !0
            } catch (c) {
                return !1
            }
        }
    },
    FLASHAPI: {
        getVolume: function() {
            return this.context && "function" === typeof this.context.getVolume ?
                this.context.getVolume() : 1
        },
        setVolume: function(b) {
            return this.context && "function" === typeof this.context.setVolume ? (this.context.setVolume(b), !0) : !1
        },
        getCurrentTime: function() {
            return this.context && "function" === typeof this.context.getCurrentTime ? this.context.getCurrentTime() : 0
        },
        setCurrentTime: function(b) {
            return this.context && "function" === typeof this.context.setCurrentTime ? this.context.setCurrentTime(b) : !1
        }
    }
};
if (void 0 === this.jukebox) throw "jukebox.Manager requires jukebox.Player (Player.js) to run properly.";
jukebox.Manager = function(b) {
    this.features = {};
    this.codecs = {};
    this.__players = {};
    this.__playersLength = 0;
    this.__clones = {};
    this.__queue = [];
    this.settings = {};
    for (var c in this.defaults) this.settings[c] = this.defaults[c];
    if ("[object Object]" === Object.prototype.toString.call(b))
        for (var d in b) this.settings[d] = b[d];
    this.__detectFeatures();
    jukebox.Manager.__initialized = !1 === this.settings.useGameLoop ? window.setInterval(function() {
        jukebox.Manager.loop()
    }, 20) : !0
};
jukebox.Manager.prototype = {
    defaults: {
        useFlash: !1,
        useGameLoop: !1
    },
    __detectFeatures: function() {
        var b = window.Audio && new Audio;
        if (b && b.canPlayType && !1 === this.settings.useFlash) {
            for (var c = [{
                        e: "3gp",
                        m: ["audio/3gpp", "audio/amr"]
                    }, {
                        e: "aac",
                        m: ["audio/aac", "audio/aacp"]
                    }, {
                        e: "amr",
                        m: ["audio/amr", "audio/3gpp"]
                    }, {
                        e: "caf",
                        m: ["audio/IMA-ADPCM", "audio/x-adpcm", 'audio/x-aiff; codecs="IMA-ADPCM, ADPCM"']
                    }, {
                        e: "m4a",
                        m: 'audio/mp4{audio/mp4; codecs="mp4a.40.2,avc1.42E01E"{audio/mpeg4{audio/mpeg4-generic{audio/mp4a-latm{audio/MP4A-LATM{audio/x-m4a'.split("{")
                    }, {
                        e: "mp3",
                        m: ["audio/mp3", "audio/mpeg", 'audio/mpeg; codecs="mp3"', "audio/MPA", "audio/mpa-robust"]
                    }, {
                        e: "mpga",
                        m: ["audio/MPA", "audio/mpa-robust", "audio/mpeg", "video/mpeg"]
                    }, {
                        e: "mp4",
                        m: ["audio/mp4", "video/mp4"]
                    }, {
                        e: "ogg",
                        m: ["application/ogg", "audio/ogg", 'audio/ogg; codecs="theora, vorbis"', "video/ogg", 'video/ogg; codecs="theora, vorbis"']
                    }, {
                        e: "wav",
                        m: ["audio/wave", "audio/wav", 'audio/wav; codecs="1"', "audio/x-wav", "audio/x-pn-wav"]
                    }, {
                        e: "webm",
                        m: ["audio/webm", 'audio/webm; codecs="vorbis"', "video/webm"]
                    }],
                    d, e, f = 0, j = c.length; f < j; f++)
                if (e = c[f].e, c[f].m.length && "object" === typeof c[f].m)
                    for (var n = 0, l = c[f].m.length; n < l; n++)
                        if (d = c[f].m[n], "" !== b.canPlayType(d)) {
                            this.codecs[e] = d;
                            break
                        } else this.codecs[e] || (this.codecs[e] = !1);
            this.features.html5audio = !(!this.codecs.mp3 && !this.codecs.ogg && !this.codecs.webm && !this.codecs.wav);
            this.features.channels = 8;
            b.volume = 0.1337;
            this.features.volume = !!(1E-4 > Math.abs(b.volume - 0.1337));
            navigator.userAgent.match(/iPhone|iPod|iPad/i) && (this.features.channels = 1)
        }
        this.features.flashaudio = !!navigator.mimeTypes["application/x-shockwave-flash"] || !!navigator.plugins["Shockwave Flash"] || !1;
        if (window.ActiveXObject) try {
            new ActiveXObject("ShockwaveFlash.ShockwaveFlash.10"), this.features.flashaudio = !0
        } catch (g) {}!0 === this.settings.useFlash && (this.features.flashaudio = !0);
        !0 === this.features.flashaudio && !this.features.html5audio && (this.codecs.mp3 = "audio/mp3", this.codecs.mpga = "audio/mpeg", this.codecs.mp4 = "audio/mp4", this.codecs.m4a = "audio/mp4", this.codecs["3gp"] = "audio/3gpp", this.codecs.amr = "audio/amr",
            this.features.volume = !0, this.features.channels = 1)
    },
    __getPlayerById: function(b) {
        return this.__players && void 0 !== this.__players[b] ? this.__players[b] : null
    },
    __getClone: function(b, c) {
        for (var d in this.__clones) {
            var e = this.__clones[d];
            if (null === e.isPlaying && e.origin === b) return e
        }
        if ("[object Object]" === Object.prototype.toString.call(c)) {
            d = {};
            for (var f in c) d[f] = c[f];
            d.autoplay = !1;
            f = new jukebox.Player(d, b);
            f.isClone = !0;
            f.wasReady = !1;
            return this.__clones[f.id] = f
        }
        return null
    },
    loop: function() {
        if (0 !== this.__playersLength)
            if (this.__queue.length &&
                this.__playersLength < this.features.channels) {
                var b = this.__queue[0],
                    c = this.__getPlayerById(b.origin);
                if (null !== c) {
                    var d = this.__getClone(b.origin, c.settings);
                    null !== d && (!0 === this.features.volume && (c = this.__players[b.origin]) && d.setVolume(c.getVolume()), this.add(d), d.play(b.pointer, !0))
                }
                this.__queue.splice(0, 1)
            } else
                for (d in this.__queue.length && 1 === this.features.channels && (b = this.__queue[0], c = this.__getPlayerById(b.origin), null !== c && c.play(b.pointer, !0), this.__queue.splice(0, 1)), this.__players) b = this.__players[d],
                    c = b.getCurrentTime() || 0, b.isPlaying && !1 === b.wasReady ? b.wasReady = b.setCurrentTime(b.isPlaying.start) : b.isPlaying && !0 === b.wasReady ? c > b.isPlaying.end && (!0 === b.isPlaying.loop ? b.play(b.isPlaying.start, !0) : b.stop()) : b.isClone && null === b.isPlaying ? this.remove(b) : void 0 !== b.backgroundMusic && null === b.isPlaying && c > b.backgroundMusic.end && b.backgroundHackForiOS()
    },
    getPlayableResource: function(b) {
        "[object Array]" !== Object.prototype.toString.call(b) && (b = [b]);
        for (var c = 0, d = b.length; c < d; c++) {
            var e = b[c],
                f = e.match(/\.([^\.]*)$/)[1];
            if (f && this.codecs[f]) return e
        }
        return null
    },
    add: function(b) {
        return b instanceof jukebox.Player && void 0 === this.__players[b.id] ? (this.__playersLength++, this.__players[b.id] = b, !0) : !1
    },
    remove: function(b) {
        return b instanceof jukebox.Player && void 0 !== this.__players[b.id] ? (this.__playersLength--, delete this.__players[b.id], !0) : !1
    },
    addToQueue: function(b, c) {
        return ("string" === typeof b || "number" === typeof b) && void 0 !== this.__players[c] ? (this.__queue.push({
            pointer: b,
            origin: c
        }), !0) : !1
    }
};
(function() {
    var b = function() {
        this.init()
    };
    b.prototype = {
        init: function() {
            var b = this || c;
            b._counter = 1E3;
            b._codecs = {};
            b._howls = [];
            b._muted = !1;
            b._volume = 1;
            b._canPlayEvent = "canplaythrough";
            b._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null;
            b.masterGain = null;
            b.noAudio = !1;
            b.usingWebAudio = !0;
            b.autoSuspend = !0;
            b.ctx = null;
            b.mobileAutoEnable = !0;
            b._setup();
            return b
        },
        volume: function(b) {
            var d = this || c;
            b = parseFloat(b);
            d.ctx || l();
            if ("undefined" !== typeof b && 0 <= b && 1 >= b) {
                d._volume = b;
                if (d._muted) return d;
                d.usingWebAudio && d.masterGain.gain.setValueAtTime(b, c.ctx.currentTime);
                for (var e = 0; e < d._howls.length; e++)
                    if (!d._howls[e]._webAudio)
                        for (var f = d._howls[e]._getSoundIds(), j = 0; j < f.length; j++) {
                            var n = d._howls[e]._soundById(f[j]);
                            n && n._node && (n._node.volume = n._volume * b)
                        }
                return d
            }
            return d._volume
        },
        mute: function(b) {
            var d = this || c;
            d.ctx || l();
            d._muted = b;
            d.usingWebAudio && d.masterGain.gain.setValueAtTime(b ? 0 : d._volume, c.ctx.currentTime);
            for (var e = 0; e < d._howls.length; e++)
                if (!d._howls[e]._webAudio)
                    for (var f = d._howls[e]._getSoundIds(),
                            j = 0; j < f.length; j++) {
                        var n = d._howls[e]._soundById(f[j]);
                        n && n._node && (n._node.muted = b ? !0 : n._muted)
                    }
            return d
        },
        unload: function() {
            for (var b = this || c, d = b._howls.length - 1; 0 <= d; d--) b._howls[d].unload();
            b.usingWebAudio && (b.ctx && "undefined" !== typeof b.ctx.close) && (b.ctx.close(), b.ctx = null, l());
            return b
        },
        codecs: function(b) {
            return (this || c)._codecs[b.replace(/^x-/, "")]
        },
        _setup: function() {
            var b = this || c;
            b.state = b.ctx ? b.ctx.state || "running" : "running";
            b._autoSuspend();
            if (!b.usingWebAudio)
                if ("undefined" !== typeof Audio) try {
                    var d =
                        new Audio;
                    "undefined" === typeof d.oncanplaythrough && (b._canPlayEvent = "canplay")
                } catch (e) {
                    b.noAudio = !0
                } else b.noAudio = !0;
            try {
                d = new Audio, d.muted && (b.noAudio = !0)
            } catch (f) {}
            b.noAudio || b._setupCodecs();
            return b
        },
        _setupCodecs: function() {
            var b = this || c,
                d = null;
            try {
                d = "undefined" !== typeof Audio ? new Audio : null
            } catch (e) {
                return b
            }
            if (!d || "function" !== typeof d.canPlayType) return b;
            var f = d.canPlayType("audio/mpeg;").replace(/^no$/, ""),
                l = b._navigator && b._navigator.userAgent.match(/OPR\/([0-6].)/g),
                l = l && 33 > parseInt(l[0].split("/")[1],
                    10);
            b._codecs = {
                mp3: !(l || !f && !d.canPlayType("audio/mp3;").replace(/^no$/, "")),
                mpeg: !!f,
                opus: !!d.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                ogg: !!d.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                oga: !!d.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                wav: !!d.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
                aac: !!d.canPlayType("audio/aac;").replace(/^no$/, ""),
                caf: !!d.canPlayType("audio/x-caf;").replace(/^no$/, ""),
                m4a: !!(d.canPlayType("audio/x-m4a;") ||
                    d.canPlayType("audio/m4a;") || d.canPlayType("audio/aac;")).replace(/^no$/, ""),
                mp4: !!(d.canPlayType("audio/x-mp4;") || d.canPlayType("audio/mp4;") || d.canPlayType("audio/aac;")).replace(/^no$/, ""),
                weba: !!d.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
                webm: !!d.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
                dolby: !!d.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
                flac: !!(d.canPlayType("audio/x-flac;") || d.canPlayType("audio/flac;")).replace(/^no$/, "")
            };
            return b
        },
        _enableMobileAudio: function() {
            var b = this || c,
                d = /iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(b._navigator && b._navigator.userAgent),
                e = !!("ontouchend" in window || b._navigator && 0 < b._navigator.maxTouchPoints || b._navigator && 0 < b._navigator.msMaxTouchPoints);
            if (!b._mobileEnabled && b.ctx && (d || e)) {
                b._mobileEnabled = !1;
                !b._mobileUnloaded && 44100 !== b.ctx.sampleRate && (b._mobileUnloaded = !0, b.unload());
                b._scratchBuffer = b.ctx.createBuffer(1, 1, 22050);
                var f = function() {
                    c._autoResume();
                    var d = b.ctx.createBufferSource();
                    d.buffer = b._scratchBuffer;
                    d.connect(b.ctx.destination);
                    "undefined" === typeof d.start ? d.noteOn(0) : d.start(0);
                    "function" === typeof b.ctx.resume && b.ctx.resume();
                    d.onended = function() {
                        d.disconnect(0);
                        b._mobileEnabled = !0;
                        b.mobileAutoEnable = !1;
                        document.removeEventListener("touchstart", f, !0);
                        document.removeEventListener("touchend", f, !0)
                    }
                };
                document.addEventListener("touchstart", f, !0);
                document.addEventListener("touchend", f, !0);
                return b
            }
        },
        _autoSuspend: function() {
            var b = this;
            if (b.autoSuspend && b.ctx && "undefined" !==
                typeof b.ctx.suspend && c.usingWebAudio) {
                for (var d = 0; d < b._howls.length; d++)
                    if (b._howls[d]._webAudio)
                        for (var e = 0; e < b._howls[d]._sounds.length; e++)
                            if (!b._howls[d]._sounds[e]._paused) return b;
                b._suspendTimer && clearTimeout(b._suspendTimer);
                b._suspendTimer = setTimeout(function() {
                    b.autoSuspend && (b._suspendTimer = null, b.state = "suspending", b.ctx.suspend().then(function() {
                        b.state = "suspended";
                        b._resumeAfterSuspend && (delete b._resumeAfterSuspend, b._autoResume())
                    }))
                }, 3E4);
                return b
            }
        },
        _autoResume: function() {
            var b =
                this;
            if (b.ctx && "undefined" !== typeof b.ctx.resume && c.usingWebAudio) return "running" === b.state && b._suspendTimer ? (clearTimeout(b._suspendTimer), b._suspendTimer = null) : "suspended" === b.state ? (b.ctx.resume().then(function() {
                b.state = "running";
                for (var c = 0; c < b._howls.length; c++) b._howls[c]._emit("resume")
            }), b._suspendTimer && (clearTimeout(b._suspendTimer), b._suspendTimer = null)) : "suspending" === b.state && (b._resumeAfterSuspend = !0), b
        }
    };
    var c = new b,
        d = function(b) {
            !b.src || 0 === b.src.length ? console.error("An array of source files must be passed with any new Howl.") :
                this.init(b)
        };
    d.prototype = {
        init: function(b) {
            var d = this;
            c.ctx || l();
            d._autoplay = b.autoplay || !1;
            d._format = "string" !== typeof b.format ? b.format : [b.format];
            d._html5 = b.html5 || !1;
            d._muted = b.mute || !1;
            d._loop = b.loop || !1;
            d._pool = b.pool || 5;
            d._preload = "boolean" === typeof b.preload ? b.preload : !0;
            d._rate = b.rate || 1;
            d._sprite = b.sprite || {};
            d._src = "string" !== typeof b.src ? b.src : [b.src];
            d._volume = void 0 !== b.volume ? b.volume : 1;
            d._xhrWithCredentials = b.xhrWithCredentials || !1;
            d._duration = 0;
            d._state = "unloaded";
            d._sounds = [];
            d._endTimers = {};
            d._queue = [];
            d._playLock = !1;
            d._onend = b.onend ? [{
                fn: b.onend
            }] : [];
            d._onfade = b.onfade ? [{
                fn: b.onfade
            }] : [];
            d._onload = b.onload ? [{
                fn: b.onload
            }] : [];
            d._onloaderror = b.onloaderror ? [{
                fn: b.onloaderror
            }] : [];
            d._onplayerror = b.onplayerror ? [{
                fn: b.onplayerror
            }] : [];
            d._onpause = b.onpause ? [{
                fn: b.onpause
            }] : [];
            d._onplay = b.onplay ? [{
                fn: b.onplay
            }] : [];
            d._onstop = b.onstop ? [{
                fn: b.onstop
            }] : [];
            d._onmute = b.onmute ? [{
                fn: b.onmute
            }] : [];
            d._onvolume = b.onvolume ? [{
                fn: b.onvolume
            }] : [];
            d._onrate = b.onrate ? [{
                fn: b.onrate
            }] : [];
            d._onseek = b.onseek ? [{
                fn: b.onseek
            }] : [];
            d._onresume = [];
            d._webAudio = c.usingWebAudio && !d._html5;
            "undefined" !== typeof c.ctx && (c.ctx && c.mobileAutoEnable) && c._enableMobileAudio();
            c._howls.push(d);
            d._autoplay && d._queue.push({
                event: "play",
                action: function() {
                    d.play()
                }
            });
            d._preload && d.load();
            return d
        },
        load: function() {
            var b = null;
            if (c.noAudio) this._emit("loaderror", null, "No audio support.");
            else {
                "string" === typeof this._src && (this._src = [this._src]);
                for (var d = 0; d < this._src.length; d++) {
                    var l, z;
                    if (this._format && this._format[d]) l = this._format[d];
                    else {
                        z = this._src[d];
                        if ("string" !== typeof z) {
                            this._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                            continue
                        }(l = /^data:audio\/([^;,]+);/i.exec(z)) || (l = /\.([^.]+)$/.exec(z.split("?", 1)[0]));
                        l && (l = l[1].toLowerCase())
                    }
                    l || console.warn('No file extension was found. Consider using the "format" property or specify an extension.');
                    if (l && c.codecs(l)) {
                        b = this._src[d];
                        break
                    }
                }
                if (b) {
                    this._src = b;
                    this._state = "loading";
                    "https:" === window.location.protocol && "http:" === b.slice(0, 5) && (this._html5 = !0, this._webAudio = !1);
                    new e(this);
                    if (this._webAudio) {
                        var A = this,
                            B = A._src;
                        if (f[B]) A._duration = f[B].duration, n(A);
                        else if (/^data:[^;]+;base64,/.test(B)) {
                            b = atob(B.split(",")[1]);
                            d = new Uint8Array(b.length);
                            for (l = 0; l < b.length; ++l) d[l] = b.charCodeAt(l);
                            j(d.buffer, A)
                        } else {
                            var E = new XMLHttpRequest;
                            E.open("GET", B, !0);
                            E.withCredentials = A._xhrWithCredentials;
                            E.responseType = "arraybuffer";
                            E.onload = function() {
                                var b = (E.status + "")[0];
                                "0" !== b && "2" !== b && "3" !== b ? A._emit("loaderror", null, "Failed loading audio file with status: " +
                                    E.status + ".") : j(E.response, A)
                            };
                            E.onerror = function() {
                                A._webAudio && (A._html5 = !0, A._webAudio = !1, A._sounds = [], delete f[B], A.load())
                            };
                            try {
                                E.send()
                            } catch (D) {
                                E.onerror()
                            }
                        }
                    }
                    return this
                }
                this._emit("loaderror", null, "No codec support for selected audio sources.")
            }
        },
        play: function(b, d) {
            var e = this,
                f = null;
            if ("number" === typeof b) f = b, b = null;
            else {
                if ("string" === typeof b && "loaded" === e._state && !e._sprite[b]) return null;
                if ("undefined" === typeof b) {
                    b = "__default";
                    for (var l = 0, j = 0; j < e._sounds.length; j++) e._sounds[j]._paused &&
                        !e._sounds[j]._ended && (l++, f = e._sounds[j]._id);
                    1 === l ? b = null : f = null
                }
            }
            var n = f ? e._soundById(f) : e._inactiveSound();
            if (!n) return null;
            f && !b && (b = n._sprite || "__default");
            if ("loaded" !== e._state) {
                n._sprite = b;
                n._ended = !1;
                var D = n._id;
                e._queue.push({
                    event: "play",
                    action: function() {
                        e.play(D)
                    }
                });
                return D
            }
            if (f && !n._paused) return d || e._loadQueue("play"), n._id;
            e._webAudio && c._autoResume();
            var u = Math.max(0, 0 < n._seek ? n._seek : e._sprite[b][0] / 1E3),
                G = Math.max(0, (e._sprite[b][0] + e._sprite[b][1]) / 1E3 - u),
                K = 1E3 * G / Math.abs(n._rate);
            n._paused = !1;
            n._ended = !1;
            n._sprite = b;
            n._seek = u;
            n._start = e._sprite[b][0] / 1E3;
            n._stop = (e._sprite[b][0] + e._sprite[b][1]) / 1E3;
            n._loop = !(!n._loop && !e._sprite[b][2]);
            var L = n._node;
            if (e._webAudio) f = function() {
                e._refreshBuffer(n);
                L.gain.setValueAtTime(n._muted || e._muted ? 0 : n._volume, c.ctx.currentTime);
                n._playStart = c.ctx.currentTime;
                "undefined" === typeof L.bufferSource.start ? n._loop ? L.bufferSource.noteGrainOn(0, u, 86400) : L.bufferSource.noteGrainOn(0, u, G) : n._loop ? L.bufferSource.start(0, u, 86400) : L.bufferSource.start(0,
                    u, G);
                Infinity !== K && (e._endTimers[n._id] = setTimeout(e._ended.bind(e, n), K));
                d || setTimeout(function() {
                    e._emit("play", n._id)
                }, 0)
            }, "running" === c.state ? f() : (e.once("resume", f), e._clearTimer(n._id));
            else {
                var N = function() {
                        L.currentTime = u;
                        L.muted = n._muted || e._muted || c._muted || L.muted;
                        L.volume = n._volume * c.volume();
                        L.playbackRate = n._rate;
                        try {
                            var f = L.play();
                            if ("undefined" !== typeof Promise && f instanceof Promise) {
                                e._playLock = !0;
                                var l = function() {
                                    e._playLock = !1;
                                    d || e._emit("play", n._id)
                                };
                                f.then(l, l)
                            } else d || e._emit("play",
                                n._id);
                            L.playbackRate = n._rate;
                            L.paused ? e._emit("playerror", n._id, "Playback was unable to start. This is most commonly an issue on mobile devices where playback was not within a user interaction.") : "__default" !== b || n._loop ? e._endTimers[n._id] = setTimeout(e._ended.bind(e, n), K) : (e._endTimers[n._id] = function() {
                                e._ended(n);
                                L.removeEventListener("ended", e._endTimers[n._id], !1)
                            }, L.addEventListener("ended", e._endTimers[n._id], !1))
                        } catch (j) {
                            e._emit("playerror", n._id, j)
                        }
                    },
                    f = window && window.ejecta || !L.readyState &&
                    c._navigator.isCocoonJS;
                if (3 <= L.readyState || f) N();
                else {
                    var Q = function() {
                        N();
                        L.removeEventListener(c._canPlayEvent, Q, !1)
                    };
                    L.addEventListener(c._canPlayEvent, Q, !1);
                    e._clearTimer(n._id)
                }
            }
            return n._id
        },
        pause: function(b, c) {
            var d = this;
            if ("loaded" !== d._state || d._playLock) return d._queue.push({
                event: "pause",
                action: function() {
                    d.pause(b)
                }
            }), d;
            for (var e = d._getSoundIds(b), f = 0; f < e.length; f++) {
                d._clearTimer(e[f]);
                var l = d._soundById(e[f]);
                if (l && !l._paused && (l._seek = d.seek(e[f]), l._rateSeek = 0, l._paused = !0, d._stopFade(e[f]),
                        l._node))
                    if (d._webAudio) {
                        if (!l._node.bufferSource) continue;
                        "undefined" === typeof l._node.bufferSource.stop ? l._node.bufferSource.noteOff(0) : l._node.bufferSource.stop(0);
                        d._cleanBuffer(l._node)
                    } else(!isNaN(l._node.duration) || Infinity === l._node.duration) && l._node.pause();
                c || d._emit("pause", l ? l._id : null)
            }
            return d
        },
        stop: function(b, c) {
            var d = this;
            if ("loaded" !== d._state) return d._queue.push({
                event: "stop",
                action: function() {
                    d.stop(b)
                }
            }), d;
            for (var e = d._getSoundIds(b), f = 0; f < e.length; f++) {
                d._clearTimer(e[f]);
                var l =
                    d._soundById(e[f]);
                if (l) {
                    l._seek = l._start || 0;
                    l._rateSeek = 0;
                    l._paused = !0;
                    l._ended = !0;
                    d._stopFade(e[f]);
                    if (l._node)
                        if (d._webAudio) l._node.bufferSource && ("undefined" === typeof l._node.bufferSource.stop ? l._node.bufferSource.noteOff(0) : l._node.bufferSource.stop(0), d._cleanBuffer(l._node));
                        else if (!isNaN(l._node.duration) || Infinity === l._node.duration) l._node.currentTime = l._start || 0, l._node.pause();
                    c || d._emit("stop", l._id)
                }
            }
            return d
        },
        mute: function(b, d) {
            var e = this;
            if ("loaded" !== e._state) return e._queue.push({
                event: "mute",
                action: function() {
                    e.mute(b, d)
                }
            }), e;
            if ("undefined" === typeof d)
                if ("boolean" === typeof b) e._muted = b;
                else return e._muted;
            for (var f = e._getSoundIds(d), l = 0; l < f.length; l++) {
                var j = e._soundById(f[l]);
                j && (j._muted = b, j._interval && e._stopFade(j._id), e._webAudio && j._node ? j._node.gain.setValueAtTime(b ? 0 : j._volume, c.ctx.currentTime) : j._node && (j._node.muted = c._muted ? !0 : b), e._emit("mute", j._id))
            }
            return e
        },
        volume: function() {
            var b = this,
                d = arguments,
                e, f;
            if (0 === d.length) return b._volume;
            1 === d.length || 2 === d.length && "undefined" ===
                typeof d[1] ? 0 <= b._getSoundIds().indexOf(d[0]) ? f = parseInt(d[0], 10) : e = parseFloat(d[0]) : 2 <= d.length && (e = parseFloat(d[0]), f = parseInt(d[1], 10));
            var l;
            if ("undefined" !== typeof e && 0 <= e && 1 >= e) {
                if ("loaded" !== b._state) return b._queue.push({
                    event: "volume",
                    action: function() {
                        b.volume.apply(b, d)
                    }
                }), b;
                "undefined" === typeof f && (b._volume = e);
                f = b._getSoundIds(f);
                for (var j = 0; j < f.length; j++)
                    if (l = b._soundById(f[j])) l._volume = e, d[2] || b._stopFade(f[j]), b._webAudio && l._node && !l._muted ? l._node.gain.setValueAtTime(e, c.ctx.currentTime) :
                        l._node && !l._muted && (l._node.volume = e * c.volume()), b._emit("volume", l._id)
            } else return (l = f ? b._soundById(f) : b._sounds[0]) ? l._volume : 0;
            return b
        },
        fade: function(b, d, e, f) {
            var l = this;
            if ("loaded" !== l._state) return l._queue.push({
                event: "fade",
                action: function() {
                    l.fade(b, d, e, f)
                }
            }), l;
            l.volume(b, f);
            for (var j = l._getSoundIds(f), n = 0; n < j.length; n++) {
                var D = l._soundById(j[n]);
                if (D) {
                    f || l._stopFade(j[n]);
                    if (l._webAudio && !D._muted) {
                        var u = c.ctx.currentTime,
                            G = u + e / 1E3;
                        D._volume = b;
                        D._node.gain.setValueAtTime(b, u);
                        D._node.gain.linearRampToValueAtTime(d,
                            G)
                    }
                    l._startFadeInterval(D, b, d, e, j[n], "undefined" === typeof f)
                }
            }
            return l
        },
        _startFadeInterval: function(b, c, d, e, f, l) {
            var j = this,
                n = c,
                u = d - c;
            f = Math.abs(u / 0.01);
            f = Math.max(4, 0 < f ? e / f : e);
            var G = Date.now();
            b._fadeTo = d;
            b._interval = setInterval(function() {
                var f = (Date.now() - G) / e;
                G = Date.now();
                n += u * f;
                n = Math.max(0, n);
                n = Math.min(1, n);
                n = Math.round(100 * n) / 100;
                j._webAudio ? b._volume = n : j.volume(n, b._id, !0);
                l && (j._volume = n);
                if (d < c && n <= d || d > c && n >= d) clearInterval(b._interval), b._interval = null, b._fadeTo = null, j.volume(d, b._id),
                    j._emit("fade", b._id)
            }, f)
        },
        _stopFade: function(b) {
            var d = this._soundById(b);
            d && d._interval && (this._webAudio && d._node.gain.cancelScheduledValues(c.ctx.currentTime), clearInterval(d._interval), d._interval = null, this.volume(d._fadeTo, b), d._fadeTo = null, this._emit("fade", b));
            return this
        },
        loop: function() {
            var b = arguments,
                c, d;
            if (0 === b.length) return this._loop;
            if (1 === b.length)
                if ("boolean" === typeof b[0]) this._loop = c = b[0];
                else return (b = this._soundById(parseInt(b[0], 10))) ? b._loop : !1;
            else 2 === b.length && (c = b[0], d =
                parseInt(b[1], 10));
            d = this._getSoundIds(d);
            for (var e = 0; e < d.length; e++)
                if (b = this._soundById(d[e]))
                    if (b._loop = c, this._webAudio && (b._node && b._node.bufferSource) && (b._node.bufferSource.loop = c)) b._node.bufferSource.loopStart = b._start || 0, b._node.bufferSource.loopEnd = b._stop;
            return this
        },
        rate: function() {
            var b = this,
                d = arguments,
                e, f;
            0 === d.length ? f = b._sounds[0]._id : 1 === d.length ? 0 <= b._getSoundIds().indexOf(d[0]) ? f = parseInt(d[0], 10) : e = parseFloat(d[0]) : 2 === d.length && (e = parseFloat(d[0]), f = parseInt(d[1], 10));
            var l;
            if ("number" === typeof e) {
                if ("loaded" !== b._state) return b._queue.push({
                    event: "rate",
                    action: function() {
                        b.rate.apply(b, d)
                    }
                }), b;
                "undefined" === typeof f && (b._rate = e);
                f = b._getSoundIds(f);
                for (var j = 0; j < f.length; j++)
                    if (l = b._soundById(f[j])) {
                        l._rateSeek = b.seek(f[j]);
                        l._playStart = b._webAudio ? c.ctx.currentTime : l._playStart;
                        l._rate = e;
                        b._webAudio && l._node && l._node.bufferSource ? l._node.bufferSource.playbackRate.setValueAtTime(e, c.ctx.currentTime) : l._node && (l._node.playbackRate = e);
                        var n = b.seek(f[j]),
                            n = 1E3 * ((b._sprite[l._sprite][0] +
                                b._sprite[l._sprite][1]) / 1E3 - n) / Math.abs(l._rate);
                        if (b._endTimers[f[j]] || !l._paused) b._clearTimer(f[j]), b._endTimers[f[j]] = setTimeout(b._ended.bind(b, l), n);
                        b._emit("rate", l._id)
                    }
            } else return (l = b._soundById(f)) ? l._rate : b._rate;
            return b
        },
        seek: function() {
            var b = this,
                d = arguments,
                e, f;
            0 === d.length ? f = b._sounds[0]._id : 1 === d.length ? 0 <= b._getSoundIds().indexOf(d[0]) ? f = parseInt(d[0], 10) : b._sounds.length && (f = b._sounds[0]._id, e = parseFloat(d[0])) : 2 === d.length && (e = parseFloat(d[0]), f = parseInt(d[1], 10));
            if ("undefined" ===
                typeof f) return b;
            if ("loaded" !== b._state) return b._queue.push({
                event: "seek",
                action: function() {
                    b.seek.apply(b, d)
                }
            }), b;
            var l = b._soundById(f);
            if (l)
                if ("number" === typeof e && 0 <= e) {
                    var j = b.playing(f);
                    j && b.pause(f, !0);
                    l._seek = e;
                    l._ended = !1;
                    b._clearTimer(f);
                    j && b.play(f, !0);
                    !b._webAudio && l._node && (l._node.currentTime = e);
                    if (j && !b._webAudio) {
                        var n = function() {
                            b._playLock ? setTimeout(n, 0) : b._emit("seek", f)
                        };
                        setTimeout(n, 0)
                    } else b._emit("seek", f)
                } else return b._webAudio ? (e = b.playing(f) ? c.ctx.currentTime - l._playStart :
                    0, l._seek + ((l._rateSeek ? l._rateSeek - l._seek : 0) + e * Math.abs(l._rate))) : l._node.currentTime;
            return b
        },
        playing: function(b) {
            if ("number" === typeof b) return (b = this._soundById(b)) ? !b._paused : !1;
            for (b = 0; b < this._sounds.length; b++)
                if (!this._sounds[b]._paused) return !0;
            return !1
        },
        duration: function(b) {
            var c = this._duration;
            (b = this._soundById(b)) && (c = this._sprite[b._sprite][1] / 1E3);
            return c
        },
        state: function() {
            return this._state
        },
        unload: function() {
            for (var b = this._sounds, d = 0; d < b.length; d++) {
                b[d]._paused || this.stop(b[d]._id);
                this._webAudio || (/MSIE |Trident\//.test(c._navigator && c._navigator.userAgent) || (b[d]._node.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"), b[d]._node.removeEventListener("error", b[d]._errorFn, !1), b[d]._node.removeEventListener(c._canPlayEvent, b[d]._loadFn, !1));
                delete b[d]._node;
                this._clearTimer(b[d]._id);
                var e = c._howls.indexOf(this);
                0 <= e && c._howls.splice(e, 1)
            }
            b = !0;
            for (d = 0; d < c._howls.length; d++)
                if (c._howls[d]._src === this._src) {
                    b = !1;
                    break
                }
            f && b && delete f[this._src];
            c.noAudio = !1;
            this._state = "unloaded";
            this._sounds = [];
            return null
        },
        on: function(b, c, d, e) {
            b = this["_on" + b];
            "function" === typeof c && b.push(e ? {
                id: d,
                fn: c,
                once: e
            } : {
                id: d,
                fn: c
            });
            return this
        },
        off: function(b, c, d) {
            var e = this["_on" + b],
                f = 0;
            "number" === typeof c && (d = c, c = null);
            if (c || d)
                for (f = 0; f < e.length; f++) {
                    if (b = d === e[f].id, c === e[f].fn && b || !c && b) {
                        e.splice(f, 1);
                        break
                    }
                } else if (b) this["_on" + b] = [];
                else {
                    c = Object.keys(this);
                    for (f = 0; f < c.length; f++) 0 === c[f].indexOf("_on") && Array.isArray(this[c[f]]) && (this[c[f]] = [])
                }
            return this
        },
        once: function(b, c, d) {
            this.on(b, c, d, 1);
            return this
        },
        _emit: function(b, c, d) {
            for (var e = this["_on" + b], f = e.length - 1; 0 <= f; f--)
                if (!e[f].id || e[f].id === c || "load" === b) setTimeout(function(b) {
                    b.call(this, c, d)
                }.bind(this, e[f].fn), 0), e[f].once && this.off(b, e[f].fn, e[f].id);
            this._loadQueue(b);
            return this
        },
        _loadQueue: function(b) {
            if (0 < this._queue.length) {
                var c = this._queue[0];
                c.event === b && (this._queue.shift(), this._loadQueue());
                b || c.action()
            }
            return this
        },
        _ended: function(b) {
            var d = b._sprite;
            if (!this._webAudio && b._node &&
                !b._node.paused && !b._node.ended && b._node.currentTime < b._stop) return setTimeout(this._ended.bind(this, b), 100), this;
            d = !(!b._loop && !this._sprite[d][2]);
            this._emit("end", b._id);
            !this._webAudio && d && this.stop(b._id, !0).play(b._id);
            if (this._webAudio && d) {
                this._emit("play", b._id);
                b._seek = b._start || 0;
                b._rateSeek = 0;
                b._playStart = c.ctx.currentTime;
                var e = 1E3 * (b._stop - b._start) / Math.abs(b._rate);
                this._endTimers[b._id] = setTimeout(this._ended.bind(this, b), e)
            }
            this._webAudio && !d && (b._paused = !0, b._ended = !0, b._seek = b._start ||
                0, b._rateSeek = 0, this._clearTimer(b._id), this._cleanBuffer(b._node), c._autoSuspend());
            !this._webAudio && !d && this.stop(b._id);
            return this
        },
        _clearTimer: function(b) {
            if (this._endTimers[b]) {
                if ("function" !== typeof this._endTimers[b]) clearTimeout(this._endTimers[b]);
                else {
                    var c = this._soundById(b);
                    c && c._node && c._node.removeEventListener("ended", this._endTimers[b], !1)
                }
                delete this._endTimers[b]
            }
            return this
        },
        _soundById: function(b) {
            for (var c = 0; c < this._sounds.length; c++)
                if (b === this._sounds[c]._id) return this._sounds[c];
            return null
        },
        _inactiveSound: function() {
            this._drain();
            for (var b = 0; b < this._sounds.length; b++)
                if (this._sounds[b]._ended) return this._sounds[b].reset();
            return new e(this)
        },
        _drain: function() {
            var b = this._pool,
                c = 0,
                d = 0;
            if (!(this._sounds.length < b)) {
                for (d = 0; d < this._sounds.length; d++) this._sounds[d]._ended && c++;
                for (d = this._sounds.length - 1; 0 <= d && !(c <= b); d--) this._sounds[d]._ended && (this._webAudio && this._sounds[d]._node && this._sounds[d]._node.disconnect(0), this._sounds.splice(d, 1), c--)
            }
        },
        _getSoundIds: function(b) {
            if ("undefined" ===
                typeof b) {
                b = [];
                for (var c = 0; c < this._sounds.length; c++) b.push(this._sounds[c]._id);
                return b
            }
            return [b]
        },
        _refreshBuffer: function(b) {
            b._node.bufferSource = c.ctx.createBufferSource();
            b._node.bufferSource.buffer = f[this._src];
            b._panner ? b._node.bufferSource.connect(b._panner) : b._node.bufferSource.connect(b._node);
            if (b._node.bufferSource.loop = b._loop) b._node.bufferSource.loopStart = b._start || 0, b._node.bufferSource.loopEnd = b._stop;
            b._node.bufferSource.playbackRate.setValueAtTime(b._rate, c.ctx.currentTime);
            return this
        },
        _cleanBuffer: function(b) {
            if (c._scratchBuffer) {
                b.bufferSource.onended = null;
                b.bufferSource.disconnect(0);
                try {
                    b.bufferSource.buffer = c._scratchBuffer
                } catch (d) {}
            }
            b.bufferSource = null;
            return this
        }
    };
    var e = function(b) {
        this._parent = b;
        this.init()
    };
    e.prototype = {
        init: function() {
            var b = this._parent;
            this._muted = b._muted;
            this._loop = b._loop;
            this._volume = b._volume;
            this._rate = b._rate;
            this._seek = 0;
            this._ended = this._paused = !0;
            this._sprite = "__default";
            this._id = ++c._counter;
            b._sounds.push(this);
            this.create();
            return this
        },
        create: function() {
            var b = this._parent,
                d = c._muted || this._muted || this._parent._muted ? 0 : this._volume;
            b._webAudio ? (this._node = "undefined" === typeof c.ctx.createGain ? c.ctx.createGainNode() : c.ctx.createGain(), this._node.gain.setValueAtTime(d, c.ctx.currentTime), this._node.paused = !0, this._node.connect(c.masterGain)) : (this._node = new Audio, this._errorFn = this._errorListener.bind(this), this._node.addEventListener("error", this._errorFn, !1), this._loadFn = this._loadListener.bind(this), this._node.addEventListener(c._canPlayEvent,
                this._loadFn, !1), this._node.src = b._src, this._node.preload = "auto", this._node.volume = d * c.volume(), this._node.load());
            return this
        },
        reset: function() {
            var b = this._parent;
            this._muted = b._muted;
            this._loop = b._loop;
            this._volume = b._volume;
            this._rate = b._rate;
            this._rateSeek = this._seek = 0;
            this._ended = this._paused = !0;
            this._sprite = "__default";
            this._id = ++c._counter;
            return this
        },
        _errorListener: function() {
            this._parent._emit("loaderror", this._id, this._node.error ? this._node.error.code : 0);
            this._node.removeEventListener("error",
                this._errorFn, !1)
        },
        _loadListener: function() {
            var b = this._parent;
            b._duration = Math.ceil(10 * this._node.duration) / 10;
            0 === Object.keys(b._sprite).length && (b._sprite = {
                __default: [0, 1E3 * b._duration]
            });
            "loaded" !== b._state && (b._state = "loaded", b._emit("load"), b._loadQueue());
            this._node.removeEventListener(c._canPlayEvent, this._loadFn, !1)
        }
    };
    var f = {},
        j = function(b, d) {
            c.ctx.decodeAudioData(b, function(b) {
                b && 0 < d._sounds.length && (f[d._src] = b, n(d, b))
            }, function() {
                d._emit("loaderror", null, "Decoding audio data failed.")
            })
        },
        n = function(b, c) {
            c && !b._duration && (b._duration = c.duration);
            0 === Object.keys(b._sprite).length && (b._sprite = {
                __default: [0, 1E3 * b._duration]
            });
            "loaded" !== b._state && (b._state = "loaded", b._emit("load"), b._loadQueue())
        },
        l = function() {
            try {
                "undefined" !== typeof AudioContext ? c.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? c.ctx = new webkitAudioContext : c.usingWebAudio = !1
            } catch (b) {
                c.usingWebAudio = !1
            }
            var d = /iP(hone|od|ad)/.test(c._navigator && c._navigator.platform),
                e = c._navigator && c._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
                e = e ? parseInt(e[1], 10) : null;
            if (d && (e && 9 > e) && (d = /safari/.test(c._navigator && c._navigator.userAgent.toLowerCase()), c._navigator && c._navigator.standalone && !d || c._navigator && !c._navigator.standalone && !d)) c.usingWebAudio = !1;
            c.usingWebAudio && (c.masterGain = "undefined" === typeof c.ctx.createGain ? c.ctx.createGainNode() : c.ctx.createGain(), c.masterGain.gain.setValueAtTime(c._muted ? 0 : 1, c.ctx.currentTime), c.masterGain.connect(c.ctx.destination));
            c._setup()
        };
    "function" === typeof define && define.amd && define([], function() {
        return {
            Howler: c,
            Howl: d
        }
    });
    "undefined" !== typeof exports && (exports.Howler = c, exports.Howl = d);
    "undefined" !== typeof window ? (window.HowlerGlobal = b, window.Howler = c, window.Howl = d, window.Sound = e) : "undefined" !== typeof global && (global.HowlerGlobal = b, global.Howler = c, global.Howl = d, global.Sound = e)
})();
(function() {
    HowlerGlobal.prototype._pos = [0, 0, 0];
    HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0];
    HowlerGlobal.prototype.stereo = function(b) {
        if (!this.ctx || !this.ctx.listener) return this;
        for (var c = this._howls.length - 1; 0 <= c; c--) this._howls[c].stereo(b);
        return this
    };
    HowlerGlobal.prototype.pos = function(b, c, d) {
        if (!this.ctx || !this.ctx.listener) return this;
        c = "number" !== typeof c ? this._pos[1] : c;
        d = "number" !== typeof d ? this._pos[2] : d;
        if ("number" === typeof b) this._pos = [b, c, d], "undefined" !== typeof this.ctx.listener.positionX ?
            (this.ctx.listener.positionX.setTargetAtTime(this._pos[0], Howler.ctx.currentTime, 0.1), this.ctx.listener.positionY.setTargetAtTime(this._pos[1], Howler.ctx.currentTime, 0.1), this.ctx.listener.positionZ.setTargetAtTime(this._pos[2], Howler.ctx.currentTime, 0.1)) : this.ctx.listener.setPosition(this._pos[0], this._pos[1], this._pos[2]);
        else return this._pos;
        return this
    };
    HowlerGlobal.prototype.orientation = function(b, c, d, e, g, r) {
        if (!this.ctx || !this.ctx.listener) return this;
        var y = this._orientation;
        c = "number" !==
            typeof c ? y[1] : c;
        d = "number" !== typeof d ? y[2] : d;
        e = "number" !== typeof e ? y[3] : e;
        g = "number" !== typeof g ? y[4] : g;
        r = "number" !== typeof r ? y[5] : r;
        if ("number" === typeof b) this._orientation = [b, c, d, e, g, r], "undefined" !== typeof this.ctx.listener.forwardX ? (this.ctx.listener.forwardX.setTargetAtTime(b, Howler.ctx.currentTime, 0.1), this.ctx.listener.forwardY.setTargetAtTime(c, Howler.ctx.currentTime, 0.1), this.ctx.listener.forwardZ.setTargetAtTime(d, Howler.ctx.currentTime, 0.1), this.ctx.listener.upX.setTargetAtTime(b, Howler.ctx.currentTime,
            0.1), this.ctx.listener.upY.setTargetAtTime(c, Howler.ctx.currentTime, 0.1), this.ctx.listener.upZ.setTargetAtTime(d, Howler.ctx.currentTime, 0.1)) : this.ctx.listener.setOrientation(b, c, d, e, g, r);
        else return y;
        return this
    };
    var b = Howl.prototype.init;
    Howl.prototype.init = function(c) {
        this._orientation = c.orientation || [1, 0, 0];
        this._stereo = c.stereo || null;
        this._pos = c.pos || null;
        this._pannerAttr = {
            coneInnerAngle: "undefined" !== typeof c.coneInnerAngle ? c.coneInnerAngle : 360,
            coneOuterAngle: "undefined" !== typeof c.coneOuterAngle ?
                c.coneOuterAngle : 360,
            coneOuterGain: "undefined" !== typeof c.coneOuterGain ? c.coneOuterGain : 0,
            distanceModel: "undefined" !== typeof c.distanceModel ? c.distanceModel : "inverse",
            maxDistance: "undefined" !== typeof c.maxDistance ? c.maxDistance : 1E4,
            panningModel: "undefined" !== typeof c.panningModel ? c.panningModel : "HRTF",
            refDistance: "undefined" !== typeof c.refDistance ? c.refDistance : 1,
            rolloffFactor: "undefined" !== typeof c.rolloffFactor ? c.rolloffFactor : 1
        };
        this._onstereo = c.onstereo ? [{
            fn: c.onstereo
        }] : [];
        this._onpos = c.onpos ? [{
            fn: c.onpos
        }] : [];
        this._onorientation = c.onorientation ? [{
            fn: c.onorientation
        }] : [];
        return b.call(this, c)
    };
    Howl.prototype.stereo = function(b, c) {
        var d = this;
        if (!d._webAudio) return d;
        if ("loaded" !== d._state) return d._queue.push({
            event: "stereo",
            action: function() {
                d.stereo(b, c)
            }
        }), d;
        var l = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
        if ("undefined" === typeof c)
            if ("number" === typeof b) d._stereo = b, d._pos = [b, 0, 0];
            else return d._stereo;
        for (var g = d._getSoundIds(c), r = 0; r < g.length; r++) {
            var y = d._soundById(g[r]);
            if (y)
                if ("number" === typeof b) y._stereo = b, y._pos = [b, 0, 0], y._node && (y._pannerAttr.panningModel = "equalpower", (!y._panner || !y._panner.pan) && e(y, l), "spatial" === l ? "undefined" !== typeof y._panner.positionX ? (y._panner.positionX.setValueAtTime(b, Howler.ctx.currentTime), y._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), y._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : y._panner.setPosition(b, 0, 0) : y._panner.pan.setValueAtTime(b, Howler.ctx.currentTime)), d._emit("stereo", y._id);
                else return y._stereo
        }
        return d
    };
    Howl.prototype.pos = function(b, c, d, l) {
        var g = this;
        if (!g._webAudio) return g;
        if ("loaded" !== g._state) return g._queue.push({
            event: "pos",
            action: function() {
                g.pos(b, c, d, l)
            }
        }), g;
        c = "number" !== typeof c ? 0 : c;
        d = "number" !== typeof d ? -0.5 : d;
        if ("undefined" === typeof l)
            if ("number" === typeof b) g._pos = [b, c, d];
            else return g._pos;
        for (var r = g._getSoundIds(l), y = 0; y < r.length; y++) {
            var z = g._soundById(r[y]);
            if (z)
                if ("number" === typeof b) z._pos = [b, c, d], z._node && ((!z._panner || z._panner.pan) && e(z, "spatial"), "undefined" !== typeof z._panner.positionX ?
                    (z._panner.positionX.setValueAtTime(b, Howler.ctx.currentTime), z._panner.positionY.setValueAtTime(c, Howler.ctx.currentTime), z._panner.positionZ.setValueAtTime(d, Howler.ctx.currentTime)) : z._panner.setOrientation(b, c, d)), g._emit("pos", z._id);
                else return z._pos
        }
        return g
    };
    Howl.prototype.orientation = function(b, c, d, l) {
        var g = this;
        if (!g._webAudio) return g;
        if ("loaded" !== g._state) return g._queue.push({
            event: "orientation",
            action: function() {
                g.orientation(b, c, d, l)
            }
        }), g;
        c = "number" !== typeof c ? g._orientation[1] : c;
        d = "number" !== typeof d ? g._orientation[2] : d;
        if ("undefined" === typeof l)
            if ("number" === typeof b) g._orientation = [b, c, d];
            else return g._orientation;
        for (var r = g._getSoundIds(l), y = 0; y < r.length; y++) {
            var z = g._soundById(r[y]);
            if (z)
                if ("number" === typeof b) z._orientation = [b, c, d], z._node && (z._panner || (z._pos || (z._pos = g._pos || [0, 0, -0.5]), e(z, "spatial")), z._panner.orientationX.setValueAtTime(b, Howler.ctx.currentTime), z._panner.orientationY.setValueAtTime(c, Howler.ctx.currentTime), z._panner.orientationZ.setValueAtTime(d,
                    Howler.ctx.currentTime)), g._emit("orientation", z._id);
                else return z._orientation
        }
        return g
    };
    Howl.prototype.pannerAttr = function() {
        var b = arguments,
            c, d;
        if (!this._webAudio) return this;
        if (0 === b.length) return this._pannerAttr;
        if (1 === b.length)
            if ("object" === typeof b[0]) c = b[0], "undefined" === typeof d && (c.pannerAttr || (c.pannerAttr = {
                coneInnerAngle: c.coneInnerAngle,
                coneOuterAngle: c.coneOuterAngle,
                coneOuterGain: c.coneOuterGain,
                distanceModel: c.distanceModel,
                maxDistance: c.maxDistance,
                refDistance: c.refDistance,
                rolloffFactor: c.rolloffFactor,
                panningModel: c.panningModel
            }), this._pannerAttr = {
                coneInnerAngle: "undefined" !== typeof c.pannerAttr.coneInnerAngle ? c.pannerAttr.coneInnerAngle : this._coneInnerAngle,
                coneOuterAngle: "undefined" !== typeof c.pannerAttr.coneOuterAngle ? c.pannerAttr.coneOuterAngle : this._coneOuterAngle,
                coneOuterGain: "undefined" !== typeof c.pannerAttr.coneOuterGain ? c.pannerAttr.coneOuterGain : this._coneOuterGain,
                distanceModel: "undefined" !== typeof c.pannerAttr.distanceModel ? c.pannerAttr.distanceModel : this._distanceModel,
                maxDistance: "undefined" !==
                    typeof c.pannerAttr.maxDistance ? c.pannerAttr.maxDistance : this._maxDistance,
                refDistance: "undefined" !== typeof c.pannerAttr.refDistance ? c.pannerAttr.refDistance : this._refDistance,
                rolloffFactor: "undefined" !== typeof c.pannerAttr.rolloffFactor ? c.pannerAttr.rolloffFactor : this._rolloffFactor,
                panningModel: "undefined" !== typeof c.pannerAttr.panningModel ? c.pannerAttr.panningModel : this._panningModel
            });
            else return (b = this._soundById(parseInt(b[0], 10))) ? b._pannerAttr : this._pannerAttr;
        else 2 === b.length && (c = b[0], d =
            parseInt(b[1], 10));
        d = this._getSoundIds(d);
        for (var l = 0; l < d.length; l++)
            if (b = this._soundById(d[l])) {
                var g = b._pannerAttr,
                    g = {
                        coneInnerAngle: "undefined" !== typeof c.coneInnerAngle ? c.coneInnerAngle : g.coneInnerAngle,
                        coneOuterAngle: "undefined" !== typeof c.coneOuterAngle ? c.coneOuterAngle : g.coneOuterAngle,
                        coneOuterGain: "undefined" !== typeof c.coneOuterGain ? c.coneOuterGain : g.coneOuterGain,
                        distanceModel: "undefined" !== typeof c.distanceModel ? c.distanceModel : g.distanceModel,
                        maxDistance: "undefined" !== typeof c.maxDistance ?
                            c.maxDistance : g.maxDistance,
                        refDistance: "undefined" !== typeof c.refDistance ? c.refDistance : g.refDistance,
                        rolloffFactor: "undefined" !== typeof c.rolloffFactor ? c.rolloffFactor : g.rolloffFactor,
                        panningModel: "undefined" !== typeof c.panningModel ? c.panningModel : g.panningModel
                    },
                    r = b._panner;
                r ? (r.coneInnerAngle = g.coneInnerAngle, r.coneOuterAngle = g.coneOuterAngle, r.coneOuterGain = g.coneOuterGain, r.distanceModel = g.distanceModel, r.maxDistance = g.maxDistance, r.refDistance = g.refDistance, r.rolloffFactor = g.rolloffFactor,
                    r.panningModel = g.panningModel) : (b._pos || (b._pos = this._pos || [0, 0, -0.5]), e(b, "spatial"))
            }
        return this
    };
    var c = Sound.prototype.init;
    Sound.prototype.init = function() {
        var b = this._parent;
        this._orientation = b._orientation;
        this._stereo = b._stereo;
        this._pos = b._pos;
        this._pannerAttr = b._pannerAttr;
        c.call(this);
        this._stereo ? b.stereo(this._stereo) : this._pos && b.pos(this._pos[0], this._pos[1], this._pos[2], this._id)
    };
    var d = Sound.prototype.reset;
    Sound.prototype.reset = function() {
        var b = this._parent;
        this._orientation = b._orientation;
        this._pos = b._pos;
        this._pannerAttr = b._pannerAttr;
        return d.call(this)
    };
    var e = function(b, c) {
        "spatial" === (c || "spatial") ? (b._panner = Howler.ctx.createPanner(), b._panner.coneInnerAngle = b._pannerAttr.coneInnerAngle, b._panner.coneOuterAngle = b._pannerAttr.coneOuterAngle, b._panner.coneOuterGain = b._pannerAttr.coneOuterGain, b._panner.distanceModel = b._pannerAttr.distanceModel, b._panner.maxDistance = b._pannerAttr.maxDistance, b._panner.refDistance = b._pannerAttr.refDistance, b._panner.rolloffFactor = b._pannerAttr.rolloffFactor,
            b._panner.panningModel = b._pannerAttr.panningModel, "undefined" !== typeof b._panner.positionX ? (b._panner.positionX.setValueAtTime(b._pos[0], Howler.ctx.currentTime), b._panner.positionY.setValueAtTime(b._pos[1], Howler.ctx.currentTime), b._panner.positionZ.setValueAtTime(b._pos[2], Howler.ctx.currentTime)) : b._panner.setPosition(b._pos[0], b._pos[1], b._pos[2]), "undefined" !== typeof b._panner.orientationX ? (b._panner.orientationX.setValueAtTime(b._orientation[0], Howler.ctx.currentTime), b._panner.orientationY.setValueAtTime(b._orientation[1],
                Howler.ctx.currentTime), b._panner.orientationZ.setValueAtTime(b._orientation[2], Howler.ctx.currentTime)) : b._panner.setOrientation(b._orientation[0], b._orientation[1], b._orientation[2])) : (b._panner = Howler.ctx.createStereoPanner(), b._panner.pan.setValueAtTime(b._stereo, Howler.ctx.currentTime));
        b._panner.connect(b._node);
        b._paused || b._parent.pause(b._id, !0).play(b._id, !0)
    }
})();
(function(b) {
    Number.prototype.map = function(b, c, d, e) {
        return d + (e - d) * ((this - b) / (c - b))
    };
    Number.prototype.limit = function(b, c) {
        return Math.min(c, Math.max(b, this))
    };
    Number.prototype.round = function(b) {
        b = Math.pow(10, b || 0);
        return Math.round(this * b) / b
    };
    Number.prototype.floor = function() {
        return Math.floor(this)
    };
    Number.prototype.ceil = function() {
        return Math.ceil(this)
    };
    Number.prototype.toInt = function() {
        return this | 0
    };
    Number.prototype.toRad = function() {
        return this / 180 * Math.PI
    };
    Number.prototype.toDeg = function() {
        return 180 *
            this / Math.PI
    };
    Array.prototype.erase = function(b) {
        for (var c = this.length; c--;) this[c] === b && this.splice(c, 1);
        return this
    };
    Array.prototype.random = function() {
        return this[Math.floor(Math.random() * this.length)]
    };
    Function.prototype.bind = Function.prototype.bind || function(b) {
        if ("function" !== typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var c = Array.prototype.slice.call(arguments, 1),
            d = this,
            e = function() {},
            f = function() {
                return d.apply(this instanceof e && b ?
                    this : b, c.concat(Array.prototype.slice.call(arguments)))
            };
        e.prototype = this.prototype;
        f.prototype = new e;
        return f
    };
    b.ig = {
        game: null,
        debug: null,
        version: "1.23",
        global: b,
        modules: {},
        resources: [],
        ready: !1,
        baked: !1,
        nocache: "",
        ua: {},
        prefix: b.ImpactPrefix || "",
        lib: "lib/",
        _current: null,
        _loadQueue: [],
        _waitForOnload: 0,
        $: function(b) {
            return "#" == b.charAt(0) ? document.getElementById(b.substr(1)) : document.getElementsByTagName(b)
        },
        $new: function(b) {
            return document.createElement(b)
        },
        copy: function(b) {
            if (!b || "object" != typeof b ||
                b instanceof HTMLElement || b instanceof ig.Class) return b;
            if (b instanceof Array)
                for (var c = [], d = 0, e = b.length; d < e; d++) c[d] = ig.copy(b[d]);
            else
                for (d in c = {}, b) c[d] = ig.copy(b[d]);
            return c
        },
        merge: function(b, c) {
            for (var d in c) {
                var e = c[d];
                if ("object" != typeof e || e instanceof HTMLElement || e instanceof ig.Class || null === e) b[d] = e;
                else {
                    if (!b[d] || "object" != typeof b[d]) b[d] = e instanceof Array ? [] : {};
                    ig.merge(b[d], e)
                }
            }
            return b
        },
        ksort: function(b) {
            if (!b || "object" != typeof b) return [];
            var c = [],
                d = [],
                e;
            for (e in b) c.push(e);
            c.sort();
            for (e = 0; e < c.length; e++) d.push(b[c[e]]);
            return d
        },
        setVendorAttribute: function(b, c, d) {
            var e = c.charAt(0).toUpperCase() + c.substr(1);
            b[c] = "undefined" !== typeof b.imageSmoothingEnabled ? b["ms" + e] = b["moz" + e] = b["o" + e] = d : b["ms" + e] = b["moz" + e] = b["webkit" + e] = b["o" + e] = d
        },
        getVendorAttribute: function(b, c) {
            var d = c.charAt(0).toUpperCase() + c.substr(1);
            return "undefined" !== typeof b.imageSmoothingEnabled ? b[c] || b["ms" + d] || b["moz" + d] || b["o" + d] : b[c] || b["ms" + d] || b["moz" + d] || b["webkit" + d] || b["o" + d]
        },
        normalizeVendorAttribute: function(b,
            c) {
            var d = ig.getVendorAttribute(b, c);
            !b[c] && d && (b[c] = d)
        },
        getImagePixels: function(b, c, d, e, f) {
            var j = ig.$new("canvas");
            j.width = b.width;
            j.height = b.height;
            var n = j.getContext("2d");
            ig.System.SCALE.CRISP(j, n);
            var E = ig.getVendorAttribute(n, "backingStorePixelRatio") || 1;
            ig.normalizeVendorAttribute(n, "getImageDataHD");
            var D = b.width / E,
                u = b.height / E;
            j.width = Math.ceil(D);
            j.height = Math.ceil(u);
            n.drawImage(b, 0, 0, D, u);
            return 1 === E ? n.getImageData(c, d, e, f) : n.getImageDataHD(c, d, e, f)
        },
        module: function(b) {
            if (ig._current) throw "Module '" +
                ig._current.name + "' defines nothing";
            if (ig.modules[b] && ig.modules[b].body) throw "Module '" + b + "' is already defined";
            ig._current = {
                name: b,
                requires: [],
                loaded: !1,
                body: null
            };
            ig.modules[b] = ig._current;
            ig._loadQueue.push(ig._current);
            return ig
        },
        requires: function() {
            ig._current.requires = Array.prototype.slice.call(arguments);
            return ig
        },
        defines: function(b) {
            ig._current.body = b;
            ig._current = null;
            ig._initDOMReady()
        },
        addResource: function(b) {
            ig.resources.push(b)
        },
        setNocache: function(b) {
            ig.nocache = b ? "?" + Date.now() : ""
        },
        log: function() {},
        assert: function() {},
        show: function() {},
        mark: function() {},
        _loadScript: function(b, c) {
            ig.modules[b] = {
                name: b,
                requires: [],
                loaded: !1,
                body: null
            };
            ig._waitForOnload++;
            var d = ig.prefix + ig.lib + b.replace(/\./g, "/") + ".js" + ig.nocache,
                e = ig.$new("script");
            e.type = "text/javascript";
            e.src = d;
            e.onload = function() {
                ig._waitForOnload--;
                ig._execModules()
            };
            e.onerror = function() {
                throw "Failed to load module " + b + " at " + d + " required from " + c;
            };
            ig.$("head")[0].appendChild(e)
        },
        _execModules: function() {
            for (var b = !1, c =
                    0; c < ig._loadQueue.length; c++) {
                for (var d = ig._loadQueue[c], e = !0, f = 0; f < d.requires.length; f++) {
                    var j = d.requires[f];
                    ig.modules[j] ? ig.modules[j].loaded || (e = !1) : (e = !1, ig._loadScript(j, d.name))
                }
                e && d.body && (ig._loadQueue.splice(c, 1), d.loaded = !0, d.body(), b = !0, c--)
            }
            if (b) ig._execModules();
            else if (!ig.baked && 0 == ig._waitForOnload && 0 != ig._loadQueue.length) {
                b = [];
                for (c = 0; c < ig._loadQueue.length; c++) {
                    e = [];
                    j = ig._loadQueue[c].requires;
                    for (f = 0; f < j.length; f++) d = ig.modules[j[f]], (!d || !d.loaded) && e.push(j[f]);
                    b.push(ig._loadQueue[c].name +
                        " (requires: " + e.join(", ") + ")")
                }
                throw "Unresolved (or circular?) dependencies. Most likely there's a name/path mismatch for one of the listed modules or a previous syntax error prevents a module from loading:\n" + b.join("\n");
            }
        },
        _DOMReady: function() {
            if (!ig.modules["dom.ready"].loaded) {
                if (!document.body) return setTimeout(ig._DOMReady, 13);
                ig.modules["dom.ready"].loaded = !0;
                ig._waitForOnload--;
                ig._execModules()
            }
            return 0
        },
        _boot: function() {
            document.location.href.match(/\?nocache/) && ig.setNocache(!0);
            ig.ua.pixelRatio =
                b.devicePixelRatio || 1;
            ig.ua.viewport = {
                width: b.innerWidth,
                height: b.innerHeight
            };
            ig.ua.screen = {
                width: b.screen.availWidth * ig.ua.pixelRatio,
                height: b.screen.availHeight * ig.ua.pixelRatio
            };
            ig.ua.iPhone = /iPhone/i.test(navigator.userAgent);
            ig.ua.iPhone4 = ig.ua.iPhone && 2 == ig.ua.pixelRatio;
            ig.ua.iPad = /iPad/i.test(navigator.userAgent);
            ig.ua.android = /android/i.test(navigator.userAgent);
            ig.ua.winPhone = /Windows Phone/i.test(navigator.userAgent);
            ig.ua.is_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
            ig.ua.is_safari_or_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit/i.test(navigator.userAgent);
            ig.ua.iOS = ig.ua.iPhone || ig.ua.iPad;
            ig.ua.iOS6_tag = /OS 6_/i.test(navigator.userAgent);
            ig.ua.iOS6 = (ig.ua.iPhone || ig.ua.iPad) && ig.ua.iOS6_tag;
            ig.ua.iOSgt5 = ig.ua.iOS && 5 < parseInt(navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1]);
            ig.ua.HTCONE = /HTC_One/i.test(navigator.userAgent);
            ig.ua.winPhone = /Windows Phone/i.test(navigator.userAgent);
            ig.ua.Kindle = /Silk/i.test(navigator.userAgent);
            ig.ua.touchDevice = "ontouchstart" in
                b || b.navigator.msMaxTouchPoints;
            ig.ua.mobile = ig.ua.iOS || ig.ua.android || ig.ua.iOS6 || ig.ua.winPhone || ig.ua.Kindle || /mobile/i.test(navigator.userAgent)
        },
        _initDOMReady: function() {
            ig.modules["dom.ready"] ? ig._execModules() : (ig._boot(), ig.modules["dom.ready"] = {
                requires: [],
                loaded: !1,
                body: null
            }, ig._waitForOnload++, "complete" === document.readyState ? ig._DOMReady() : (document.addEventListener("DOMContentLoaded", ig._DOMReady, !1), b.addEventListener("load", ig._DOMReady, !1)))
        }
    };
    ig.normalizeVendorAttribute(b, "requestAnimationFrame");
    if (b.requestAnimationFrame) {
        var c = 1,
            d = {};
        b.ig.setAnimation = function(e, f) {
            var j = c++;
            d[j] = !0;
            var n = function() {
                d[j] && (b.requestAnimationFrame(n, f), e())
            };
            b.requestAnimationFrame(n, f);
            return j
        };
        b.ig.clearAnimation = function(b) {
            delete d[b]
        }
    } else b.ig.setAnimation = function(c) {
        return b.setInterval(c, 1E3 / 60)
    }, b.ig.clearAnimation = function(c) {
        b.clearInterval(c)
    };
    var e = !1,
        f = /xyz/.test(function() {
            xyz
        }) ? /\bparent\b/ : /.*/,
        j = 0;
    b.ig.Class = function() {};
    var n = function(b) {
        var c = this.prototype,
            d = {},
            e;
        for (e in b) "function" ==
            typeof b[e] && "function" == typeof c[e] && f.test(b[e]) ? (d[e] = c[e], c[e] = function(b, c) {
                return function() {
                    var e = this.parent;
                    this.parent = d[b];
                    var f = c.apply(this, arguments);
                    this.parent = e;
                    return f
                }
            }(e, b[e])) : c[e] = b[e]
    };
    b.ig.Class.extend = function(c) {
        function d() {
            if (!e) {
                if (this.staticInstantiate) {
                    var b = this.staticInstantiate.apply(this, arguments);
                    if (b) return b
                }
                for (var c in this) "object" == typeof this[c] && (this[c] = ig.copy(this[c]));
                this.init && this.init.apply(this, arguments)
            }
            return this
        }
        var r = this.prototype;
        e = !0;
        var y = new this;
        e = !1;
        for (var z in c) y[z] = "function" == typeof c[z] && "function" == typeof r[z] && f.test(c[z]) ? function(b, c) {
            return function() {
                var d = this.parent;
                this.parent = r[b];
                var e = c.apply(this, arguments);
                this.parent = d;
                return e
            }
        }(z, c[z]) : c[z];
        d.prototype = y;
        d.prototype.constructor = d;
        d.extend = b.ig.Class.extend;
        d.inject = n;
        d.classId = y.classId = ++j;
        return d
    };
    b.ImpactMixin && ig.merge(ig, b.ImpactMixin)
})(window);
ig.baked = !0;
ig.module("impact.image").defines(function() {
    ig.Image = ig.Class.extend({
        data: null,
        width: 0,
        height: 0,
        loaded: !1,
        failed: !1,
        loadCallback: null,
        path: "",
        staticInstantiate: function(b) {
            return ig.Image.cache[b] || null
        },
        init: function(b) {
            this.path = b;
            this.load()
        },
        load: function(b) {
            this.loaded ? b && b(this.path, !0) : (!this.loaded && ig.ready ? (this.loadCallback = b || null, this.data = new Image, this.data.onload = this.onload.bind(this), this.data.onerror = this.onerror.bind(this), this.data.src = ig.prefix + this.path + ig.nocache) : ig.addResource(this),
                ig.Image.cache[this.path] = this)
        },
        reload: function() {
            this.loaded = !1;
            this.data = new Image;
            this.data.onload = this.onload.bind(this);
            this.data.src = this.path + "?" + Date.now()
        },
        onload: function() {
            this.width = this.data.width;
            this.height = this.data.height;
            this.loaded = !0;
            1 != ig.system.scale && this.resize(ig.system.scale);
            this.loadCallback && this.loadCallback(this.path, !0)
        },
        onerror: function() {
            this.failed = !0;
            this.loadCallback && this.loadCallback(this.path, !1)
        },
        resize: function(b) {
            var c = ig.getImagePixels(this.data, 0, 0, this.width,
                    this.height),
                d = this.width * b,
                e = this.height * b,
                f = ig.$new("canvas");
            f.width = d;
            f.height = e;
            for (var j = f.getContext("2d"), n = j.getImageData(0, 0, d, e), l = 0; l < e; l++)
                for (var g = 0; g < d; g++) {
                    var r = 4 * (Math.floor(l / b) * this.width + Math.floor(g / b)),
                        y = 4 * (l * d + g);
                    n.data[y] = c.data[r];
                    n.data[y + 1] = c.data[r + 1];
                    n.data[y + 2] = c.data[r + 2];
                    n.data[y + 3] = c.data[r + 3]
                }
            j.putImageData(n, 0, 0);
            this.data = f
        },
        draw: function(b, c, d, e, f, j) {
            if (this.loaded) {
                var n = ig.system.scale;
                f = (f ? f : this.width) * n;
                j = (j ? j : this.height) * n;
                ig.system.context.drawImage(this.data,
                    d ? d * n : 0, e ? e * n : 0, f, j, ig.system.getDrawPos(b), ig.system.getDrawPos(c), f, j);
                ig.Image.drawCount++
            }
        },
        drawTile: function(b, c, d, e, f, j, n) {
            f = f ? f : e;
            if (this.loaded && !(e > this.width || f > this.height)) {
                var l = ig.system.scale,
                    g = Math.floor(e * l),
                    r = Math.floor(f * l),
                    y = j ? -1 : 1,
                    z = n ? -1 : 1;
                if (j || n) ig.system.context.save(), ig.system.context.scale(y, z);
                ig.system.context.drawImage(this.data, Math.floor(d * e) % this.width * l, Math.floor(d * e / this.width) * f * l, g, r, ig.system.getDrawPos(b) * y - (j ? g : 0), ig.system.getDrawPos(c) * z - (n ? r : 0), g, r);
                (j ||
                    n) && ig.system.context.restore();
                ig.Image.drawCount++
            }
        }
    });
    ig.Image.drawCount = 0;
    ig.Image.cache = {};
    ig.Image.reloadCache = function() {
        for (var b in ig.Image.cache) ig.Image.cache[b].reload()
    }
});
ig.baked = !0;
ig.module("impact.font").requires("impact.image").defines(function() {
    ig.Font = ig.Image.extend({
        widthMap: [],
        indices: [],
        firstChar: 32,
        alpha: 1,
        letterSpacing: 1,
        lineSpacing: 0,
        onload: function(b) {
            this._loadMetrics(this.data);
            this.parent(b)
        },
        widthForString: function(b) {
            if (-1 !== b.indexOf("\n")) {
                b = b.split("\n");
                for (var c = 0, d = 0; d < b.length; d++) c = Math.max(c, this._widthForLine(b[d]));
                return c
            }
            return this._widthForLine(b)
        },
        _widthForLine: function(b) {
            for (var c = 0, d = 0; d < b.length; d++) c += this.widthMap[b.charCodeAt(d) - this.firstChar] +
                this.letterSpacing;
            return c
        },
        heightForString: function(b) {
            return b.split("\n").length * (this.height + this.lineSpacing)
        },
        draw: function(b, c, d, e) {
            "string" != typeof b && (b = b.toString());
            if (-1 !== b.indexOf("\n")) {
                b = b.split("\n");
                for (var f = this.height + this.lineSpacing, j = 0; j < b.length; j++) this.draw(b[j], c, d + j * f, e)
            } else {
                if (e == ig.Font.ALIGN.RIGHT || e == ig.Font.ALIGN.CENTER) j = this._widthForLine(b), c -= e == ig.Font.ALIGN.CENTER ? j / 2 : j;
                1 !== this.alpha && (ig.system.context.globalAlpha = this.alpha);
                for (j = 0; j < b.length; j++) e = b.charCodeAt(j),
                    c += this._drawChar(e - this.firstChar, c, d);
                1 !== this.alpha && (ig.system.context.globalAlpha = 1);
                ig.Image.drawCount += b.length
            }
        },
        _drawChar: function(b, c, d) {
            if (!this.loaded || 0 > b || b >= this.indices.length) return 0;
            var e = ig.system.scale,
                f = this.widthMap[b] * e,
                j = (this.height - 2) * e;
            ig.system.context.drawImage(this.data, this.indices[b] * e, 0, f, j, ig.system.getDrawPos(c), ig.system.getDrawPos(d), f, j);
            return this.widthMap[b] + this.letterSpacing
        },
        _loadMetrics: function(b) {
            this.height = b.height - 1;
            this.widthMap = [];
            this.indices = [];
            for (var c = ig.getImagePixels(b, 0, b.height - 1, b.width, 1), d = 0, e = 0, f = 0; f < b.width; f++) {
                var j = 4 * f + 3;
                127 < c.data[j] ? e++ : 128 > c.data[j] && e && (this.widthMap.push(e), this.indices.push(f - e), d++, e = 0)
            }
            this.widthMap.push(e);
            this.indices.push(f - e)
        }
    });
    ig.Font.ALIGN = {
        LEFT: 0,
        RIGHT: 1,
        CENTER: 2
    }
});
ig.baked = !0;
ig.module("impact.sound").defines(function() {
    ig.SoundManager = ig.Class.extend({
        clips: {},
        volume: 1,
        format: null,
        init: function() {
            if (!ig.Sound.enabled || !window.Audio) ig.Sound.enabled = !1;
            else {
                for (var b = new Audio, c = 0; c < ig.Sound.use.length; c++) {
                    var d = ig.Sound.use[c];
                    if (b.canPlayType(d.mime)) {
                        this.format = d;
                        break
                    }
                }
                this.format || (ig.Sound.enabled = !1)
            }
        },
        load: function(b, c, d) {
            var e = ig.prefix + b.replace(/[^\.]+$/, this.format.ext) + ig.nocache;
            if (this.clips[b]) {
                if (c && this.clips[b].length < ig.Sound.channels)
                    for (c = this.clips[b].length; c <
                        ig.Sound.channels; c++) {
                        var f = new Audio(e);
                        f.load();
                        this.clips[b].push(f)
                    }
                return this.clips[b][0]
            }
            var j = new Audio(e);
            d && (j.addEventListener("canplaythrough", function l(c) {
                j.removeEventListener("canplaythrough", l, !1);
                d(b, !0, c)
            }, !1), j.addEventListener("error", function(c) {
                d(b, !1, c)
            }, !1));
            j.preload = "auto";
            j.load();
            this.clips[b] = [j];
            if (c)
                for (c = 1; c < ig.Sound.channels; c++) f = new Audio(e), f.load(), this.clips[b].push(f);
            return j
        },
        get: function(b) {
            b = this.clips[b];
            for (var c = 0, d; d = b[c++];)
                if (d.paused || d.ended) return d.ended &&
                    (d.currentTime = 0), d;
            b[0].pause();
            b[0].currentTime = 0;
            return b[0]
        }
    });
    ig.Music = ig.Class.extend({
        tracks: [],
        namedTracks: {},
        currentTrack: null,
        currentIndex: 0,
        random: !1,
        _volume: 1,
        _loop: !1,
        _fadeInterval: 0,
        _fadeTimer: null,
        _endedCallbackBound: null,
        init: function() {
            this._endedCallbackBound = this._endedCallback.bind(this);
            Object.defineProperty ? (Object.defineProperty(this, "volume", {
                    get: this.getVolume.bind(this),
                    set: this.setVolume.bind(this)
                }), Object.defineProperty(this, "loop", {
                    get: this.getLooping.bind(this),
                    set: this.setLooping.bind(this)
                })) :
                this.__defineGetter__ && (this.__defineGetter__("volume", this.getVolume.bind(this)), this.__defineSetter__("volume", this.setVolume.bind(this)), this.__defineGetter__("loop", this.getLooping.bind(this)), this.__defineSetter__("loop", this.setLooping.bind(this)))
        },
        add: function(b, c) {
            if (ig.Sound.enabled) {
                var d = ig.soundManager.load(b instanceof ig.Sound ? b.path : b, !1);
                d.loop = this._loop;
                d.volume = this._volume;
                d.addEventListener("ended", this._endedCallbackBound, !1);
                this.tracks.push(d);
                c && (this.namedTracks[c] = d);
                this.currentTrack ||
                    (this.currentTrack = d)
            }
        },
        next: function() {
            this.tracks.length && (this.stop(), this.currentIndex = this.random ? Math.floor(Math.random() * this.tracks.length) : (this.currentIndex + 1) % this.tracks.length, this.currentTrack = this.tracks[this.currentIndex], this.play())
        },
        pause: function() {
            this.currentTrack && this.currentTrack.pause()
        },
        stop: function() {
            this.currentTrack && (this.currentTrack.pause(), this.currentTrack.currentTime = 0)
        },
        play: function(b) {
            if (b && this.namedTracks[b]) b = this.namedTracks[b], b != this.currentTrack && (this.stop(),
                this.currentTrack = b);
            else if (!this.currentTrack) return;
            this.currentTrack.play()
        },
        getLooping: function() {
            return this._loop
        },
        setLooping: function(b) {
            this._loop = b;
            for (var c in this.tracks) this.tracks[c].loop = b
        },
        getVolume: function() {
            return this._volume
        },
        setVolume: function(b) {
            this._volume = b.limit(0, 1);
            for (var c in this.tracks) this.tracks[c].volume = this._volume
        },
        fadeOut: function(b) {
            this.currentTrack && (clearInterval(this._fadeInterval), this.fadeTimer = new ig.Timer(b), this._fadeInterval = setInterval(this._fadeStep.bind(this),
                50))
        },
        _fadeStep: function() {
            var b = this.fadeTimer.delta().map(-this.fadeTimer.target, 0, 1, 0).limit(0, 1) * this._volume;
            0.01 >= b ? (this.stop(), this.currentTrack.volume = this._volume, clearInterval(this._fadeInterval)) : this.currentTrack.volume = b
        },
        _endedCallback: function() {
            this._loop ? this.play() : this.next()
        }
    });
    ig.Sound = ig.Class.extend({
        path: "",
        volume: 1,
        currentClip: null,
        multiChannel: !0,
        init: function(b, c) {
            this.path = b;
            this.multiChannel = !1 !== c;
            this.load()
        },
        load: function(b) {
            ig.Sound.enabled ? ig.ready ? ig.soundManager.load(this.path,
                this.multiChannel, b) : ig.addResource(this) : b && b(this.path, !0)
        },
        play: function() {
            ig.Sound.enabled && (this.currentClip = ig.soundManager.get(this.path), this.currentClip.volume = ig.soundManager.volume * this.volume, this.currentClip.play())
        },
        stop: function() {
            this.currentClip && (this.currentClip.pause(), this.currentClip.currentTime = 0)
        }
    });
    ig.Sound.FORMAT = {
        MP3: {
            ext: "mp3",
            mime: "audio/mpeg"
        },
        M4A: {
            ext: "m4a",
            mime: "audio/mp4; codecs=mp4a"
        },
        OGG: {
            ext: "ogg",
            mime: "audio/ogg; codecs=vorbis"
        },
        WEBM: {
            ext: "webm",
            mime: "audio/webm; codecs=vorbis"
        },
        CAF: {
            ext: "caf",
            mime: "audio/x-caf"
        }
    };
    ig.Sound.use = [ig.Sound.FORMAT.OGG, ig.Sound.FORMAT.MP3];
    ig.Sound.channels = 4;
    ig.Sound.enabled = !0
});
ig.baked = !0;
ig.module("impact.loader").requires("impact.image", "impact.font", "impact.sound").defines(function() {
    ig.Loader = ig.Class.extend({
        resources: [],
        gameClass: null,
        status: 0,
        done: !1,
        _unloaded: [],
        _drawStatus: 0,
        _intervalId: 0,
        _loadCallbackBound: null,
        init: function(b, c) {
            this.gameClass = b;
            this.resources = c;
            this._loadCallbackBound = this._loadCallback.bind(this);
            for (var d = 0; d < this.resources.length; d++) this._unloaded.push(this.resources[d].path)
        },
        load: function() {
            ig.system.clear("#000");
            if (this.resources.length) {
                for (var b =
                        0; b < this.resources.length; b++) this.loadResource(this.resources[b]);
                this._intervalId = setInterval(this.draw.bind(this), 16)
            } else this.end()
        },
        loadResource: function(b) {
            b.load(this._loadCallbackBound)
        },
        end: function() {
            this.done || (this.done = !0, clearInterval(this._intervalId))
        },
        draw: function() {},
        _loadCallback: function(b, c) {
            if (c) this._unloaded.erase(b);
            else throw "Failed to load resource: " + b;
            this.status = 1 - this._unloaded.length / this.resources.length;
            0 == this._unloaded.length && setTimeout(this.end.bind(this), 250)
        }
    })
});
ig.baked = !0;
ig.module("impact.timer").defines(function() {
    ig.Timer = ig.Class.extend({
        target: 0,
        base: 0,
        last: 0,
        pausedAt: 0,
        init: function(b) {
            this.last = this.base = ig.Timer.time;
            this.target = b || 0
        },
        set: function(b) {
            this.target = b || 0;
            this.base = ig.Timer.time;
            this.pausedAt = 0
        },
        reset: function() {
            this.base = ig.Timer.time;
            this.pausedAt = 0
        },
        tick: function() {
            var b = ig.Timer.time - this.last;
            this.last = ig.Timer.time;
            return this.pausedAt ? 0 : b
        },
        delta: function() {
            return (this.pausedAt || ig.Timer.time) - this.base - this.target
        },
        pause: function() {
            this.pausedAt || (this.pausedAt =
                ig.Timer.time)
        },
        unpause: function() {
            this.pausedAt && (this.base += ig.Timer.time - this.pausedAt, this.pausedAt = 0)
        }
    });
    ig.Timer._last = 0;
    ig.Timer.time = Number.MIN_VALUE;
    ig.Timer.timeScale = 1;
    ig.Timer.maxStep = 0.05;
    ig.Timer.step = function() {
        var b = Date.now();
        ig.Timer.time += Math.min((b - ig.Timer._last) / 1E3, ig.Timer.maxStep) * ig.Timer.timeScale;
        ig.Timer._last = b
    }
});
ig.baked = !0;
ig.module("impact.system").requires("impact.timer", "impact.image").defines(function() {
    ig.System = ig.Class.extend({
        fps: 30,
        width: 320,
        height: 240,
        realWidth: 320,
        realHeight: 240,
        scale: 1,
        tick: 0,
        animationId: 0,
        newGameClass: null,
        running: !1,
        delegate: null,
        clock: null,
        canvas: null,
        context: null,
        init: function(b, c, d, e, f) {
            this.fps = c;
            this.clock = new ig.Timer;
            this.canvas = ig.$(b);
            this.resize(d, e, f);
            this.context = this.canvas.getContext("2d");
            this.getDrawPos = ig.System.drawMode;
            1 != this.scale && (ig.System.scaleMode = ig.System.SCALE.CRISP);
            ig.System.scaleMode(this.canvas, this.context)
        },
        resize: function(b, c, d) {
            this.width = b;
            this.height = c;
            this.scale = d || this.scale;
            this.realWidth = this.width * this.scale;
            this.realHeight = this.height * this.scale;
            this.canvas.width = this.realWidth;
            this.canvas.height = this.realHeight
        },
        setGame: function(b) {
            this.running ? this.newGameClass = b : this.setGameNow(b)
        },
        setGameNow: function(b) {
            ig.game = new b;
            ig.system.setDelegate(ig.game)
        },
        setDelegate: function(b) {
            if ("function" == typeof b.run) this.delegate = b, this.startRunLoop();
            else throw "System.setDelegate: No run() function in object";
        },
        stopRunLoop: function() {
            ig.clearAnimation(this.animationId);
            this.running = !1
        },
        startRunLoop: function() {
            this.stopRunLoop();
            this.animationId = ig.setAnimation(this.run.bind(this), this.canvas);
            this.running = !0
        },
        clear: function(b) {
            this.context.fillStyle = b;
            this.context.fillRect(0, 0, this.realWidth, this.realHeight)
        },
        run: function() {
            ig.Timer.step();
            this.tick = this.clock.tick();
            this.delegate.run();
            ig.input.clearPressed();
            this.newGameClass && (this.setGameNow(this.newGameClass), this.newGameClass = null)
        },
        getDrawPos: null
    });
    ig.System.DRAW = {
        AUTHENTIC: function(b) {
            return Math.round(b) * this.scale
        },
        SMOOTH: function(b) {
            return Math.round(b * this.scale)
        },
        SUBPIXEL: function(b) {
            return b * this.scale
        }
    };
    ig.System.drawMode = ig.System.DRAW.SMOOTH;
    ig.System.SCALE = {
        CRISP: function(b, c) {
            ig.setVendorAttribute(c, "imageSmoothingEnabled", !1);
            b.style.imageRendering = "-moz-crisp-edges";
            b.style.imageRendering = "-o-crisp-edges";
            b.style.imageRendering = "-webkit-optimize-contrast";
            b.style.imageRendering = "crisp-edges";
            b.style.msInterpolationMode = "nearest-neighbor"
        },
        SMOOTH: function(b, c) {
            ig.setVendorAttribute(c, "imageSmoothingEnabled", !0);
            b.style.imageRendering = "";
            b.style.msInterpolationMode = ""
        }
    };
    ig.System.scaleMode = ig.System.SCALE.SMOOTH
});
ig.baked = !0;
ig.module("impact.input").defines(function() {
    ig.KEY = {
        MOUSE1: -1,
        MOUSE2: -3,
        MWHEEL_UP: -4,
        MWHEEL_DOWN: -5,
        BACKSPACE: 8,
        TAB: 9,
        ENTER: 13,
        PAUSE: 19,
        CAPS: 20,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT_ARROW: 37,
        UP_ARROW: 38,
        RIGHT_ARROW: 39,
        DOWN_ARROW: 40,
        INSERT: 45,
        DELETE: 46,
        _0: 48,
        _1: 49,
        _2: 50,
        _3: 51,
        _4: 52,
        _5: 53,
        _6: 54,
        _7: 55,
        _8: 56,
        _9: 57,
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
        NUMPAD_0: 96,
        NUMPAD_1: 97,
        NUMPAD_2: 98,
        NUMPAD_3: 99,
        NUMPAD_4: 100,
        NUMPAD_5: 101,
        NUMPAD_6: 102,
        NUMPAD_7: 103,
        NUMPAD_8: 104,
        NUMPAD_9: 105,
        MULTIPLY: 106,
        ADD: 107,
        SUBSTRACT: 109,
        DECIMAL: 110,
        DIVIDE: 111,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        PLUS: 187,
        COMMA: 188,
        MINUS: 189,
        PERIOD: 190
    };
    ig.Input = ig.Class.extend({
        bindings: {},
        actions: {},
        presses: {},
        locks: {},
        delayedKeyup: {},
        isUsingMouse: !1,
        isUsingKeyboard: !1,
        isUsingAccelerometer: !1,
        mouse: {
            x: 0,
            y: 0
        },
        accel: {
            x: 0,
            y: 0,
            z: 0
        },
        initMouse: function() {
            if (!this.isUsingMouse) {
                this.isUsingMouse = !0;
                var b = this.mousewheel.bind(this);
                ig.system.canvas.addEventListener("mousewheel", b, !1);
                ig.system.canvas.addEventListener("DOMMouseScroll", b, !1);
                ig.system.canvas.addEventListener("contextmenu", this.contextmenu.bind(this), !1);
                ig.system.canvas.addEventListener("mousedown", this.keydown.bind(this), !1);
                ig.system.canvas.addEventListener("mouseup", this.keyup.bind(this), !1);
                ig.system.canvas.addEventListener("mousemove", this.mousemove.bind(this), !1);
                ig.ua.touchDevice && (ig.system.canvas.addEventListener("touchstart",
                    this.keydown.bind(this), !1), ig.system.canvas.addEventListener("touchend", this.keyup.bind(this), !1), ig.system.canvas.addEventListener("touchmove", this.mousemove.bind(this), !1), ig.system.canvas.addEventListener("MSPointerDown", this.keydown.bind(this), !1), ig.system.canvas.addEventListener("MSPointerUp", this.keyup.bind(this), !1), ig.system.canvas.addEventListener("MSPointerMove", this.mousemove.bind(this), !1), ig.system.canvas.style.msTouchAction = "none")
            }
        },
        initKeyboard: function() {
            this.isUsingKeyboard || (this.isUsingKeyboard = !0, window.addEventListener("keydown", this.keydown.bind(this), !1), window.addEventListener("keyup", this.keyup.bind(this), !1))
        },
        initAccelerometer: function() {
            this.isUsingAccelerometer || window.addEventListener("devicemotion", this.devicemotion.bind(this), !1)
        },
        mousewheel: function(b) {
            var c = this.bindings[0 < (b.wheelDelta ? b.wheelDelta : -1 * b.detail) ? ig.KEY.MWHEEL_UP : ig.KEY.MWHEEL_DOWN];
            c && (this.actions[c] = !0, this.presses[c] = !0, this.delayedKeyup[c] = !0, b.stopPropagation(), b.preventDefault())
        },
        mousemove: function(b) {
            var c =
                parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth;
            ig.ua.mobile && (c = ig.system.realWidth);
            var c = ig.system.scale * (c / ig.system.realWidth),
                d = {
                    left: 0,
                    top: 0
                };
            ig.system.canvas.getBoundingClientRect && (d = ig.system.canvas.getBoundingClientRect());
            b = b.touches ? b.touches[0] : b;
            this.mouse.x = (b.clientX - d.left) / c;
            this.mouse.y = (b.clientY - d.top) / c
        },
        contextmenu: function(b) {
            this.bindings[ig.KEY.MOUSE2] && (b.stopPropagation(), b.preventDefault())
        },
        keydown: function(b) {
            var c = b.target.tagName;
            if (!("INPUT" == c || "TEXTAREA" ==
                    c))
                if (c = "keydown" == b.type ? b.keyCode : 2 == b.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1, ("touchstart" == b.type || "mousedown" == b.type) && this.mousemove(b), c = this.bindings[c]) this.actions[c] = !0, this.locks[c] || (this.presses[c] = !0, this.locks[c] = !0), b.stopPropagation(), b.preventDefault()
        },
        keyup: function(b) {
            var c = b.target.tagName;
            if (!("INPUT" == c || "TEXTAREA" == c))
                if (c = this.bindings["keyup" == b.type ? b.keyCode : 2 == b.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1]) this.delayedKeyup[c] = !0, b.stopPropagation(), b.preventDefault()
        },
        devicemotion: function(b) {
            this.accel =
                b.accelerationIncludingGravity
        },
        bind: function(b, c) {
            0 > b ? this.initMouse() : 0 < b && this.initKeyboard();
            this.bindings[b] = c
        },
        bindTouch: function(b, c) {
            var d = ig.$(b),
                e = this;
            d.addEventListener("touchstart", function(b) {
                e.touchStart(b, c)
            }, !1);
            d.addEventListener("touchend", function(b) {
                e.touchEnd(b, c)
            }, !1);
            d.addEventListener("MSPointerDown", function(b) {
                e.touchStart(b, c)
            }, !1);
            d.addEventListener("MSPointerUp", function(b) {
                e.touchEnd(b, c)
            }, !1)
        },
        unbind: function(b) {
            this.delayedKeyup[this.bindings[b]] = !0;
            this.bindings[b] =
                null
        },
        unbindAll: function() {
            this.bindings = {};
            this.actions = {};
            this.presses = {};
            this.locks = {};
            this.delayedKeyup = {}
        },
        state: function(b) {
            return this.actions[b]
        },
        pressed: function(b) {
            return this.presses[b]
        },
        released: function(b) {
            return !!this.delayedKeyup[b]
        },
        clearPressed: function() {
            for (var b in this.delayedKeyup) this.actions[b] = !1, this.locks[b] = !1;
            this.delayedKeyup = {};
            this.presses = {}
        },
        touchStart: function(b, c) {
            this.actions[c] = !0;
            this.presses[c] = !0;
            b.stopPropagation();
            b.preventDefault();
            return !1
        },
        touchEnd: function(b,
            c) {
            this.delayedKeyup[c] = !0;
            b.stopPropagation();
            b.preventDefault();
            return !1
        }
    })
});
ig.baked = !0;
ig.module("impact.impact").requires("dom.ready", "impact.loader", "impact.system", "impact.input", "impact.sound").defines(function() {
    ig.main = function(b, c, d, e, f, j, n) {
        ig.system = new ig.System(b, d, e, f, j || 1);
        ig.input = new ig.Input;
        ig.soundManager = new ig.SoundManager;
        ig.music = new ig.Music;
        ig.ready = !0;
        (new(n || ig.Loader)(c, ig.resources)).load()
    }
});
ig.baked = !0;
ig.module("plugins.patches.webkit-image-smoothing-patch").defines(function() {
    ig.System && (ig.System.SCALE = {
        CRISP: function(b, c) {
            c.imageSmoothingEnabled = c.msImageSmoothingEnabled = c.mozImageSmoothingEnabled = c.oImageSmoothingEnabled = !1;
            b.style.imageRendering = "-moz-crisp-edges";
            b.style.imageRendering = "-o-crisp-edges";
            b.style.imageRendering = "-webkit-optimize-contrast";
            b.style.imageRendering = "crisp-edges";
            b.style.msInterpolationMode = "nearest-neighbor"
        },
        SMOOTH: function(b, c) {
            c.imageSmoothingEnabled = c.msImageSmoothingEnabled =
                c.mozImageSmoothingEnabled = c.oImageSmoothingEnabled = !0;
            b.style.imageRendering = "";
            b.style.msInterpolationMode = ""
        }
    }, ig.System.scaleMode = ig.System.SCALE.SMOOTH)
});
ig.baked = !0;
ig.module("plugins.patches.windowfocus-onMouseDown-patch").defines(function() {
    var b = !1;
    try {
        b = window.self !== window.top, !1 === b && (b = 0 < window.frames.length)
    } catch (c) {
        b = !0
    }
    ig.Input.inject({
        keydown: function(c) {
            var e = c.target.tagName;
            if (!("INPUT" == e || "TEXTAREA" == e))
                if (e = "keydown" == c.type ? c.keyCode : 2 == c.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1, b && 0 > e && window.focus(), ("touchstart" == c.type || "mousedown" == c.type) && this.mousemove(c), e = this.bindings[e]) this.actions[e] = !0, this.locks[e] || (this.presses[e] = !0, this.locks[e] = !0), c.stopPropagation(), c.preventDefault()
        }
    })
});
ig.baked = !0;
ig.module("plugins.handlers.dom-handler").defines(function() {
    ig.DomHandler = ig.Class.extend({
        JQUERYAVAILABLE: !1,
        init: function() {
            this.JQUERYAVAILABLE = this._jqueryAvailable()
        },
        _jqueryAvailable: function() {
            return "undefined" !== typeof jQuery
        },
        addEvent: function(b, c, d, e) {
            if (this.JQUERYAVAILABLE) b.on(c, d);
            else b.addEventListener(c, d, e)
        },
        create: function(b) {
            return this.JQUERYAVAILABLE ? $("<" + b + ">") : ig.$new(b)
        },
        getElementByClass: function(b) {
            return this.JQUERYAVAILABLE ? $("." + b) : document.getElementsByClassName(b)
        },
        getElementById: function(b) {
            return this.JQUERYAVAILABLE ? 0 < $(b).length ? $(b) : null : ig.$(b)
        },
        appendChild: function(b, c) {
            this.JQUERYAVAILABLE ? b.append(c) : b.appendChild(c)
        },
        appendToBody: function(b) {
            this.JQUERYAVAILABLE ? $("body").append(b) : document.body.appendChild(b)
        },
        resize: function(b, c, d) {
            if (this.JQUERYAVAILABLE) b.width(c.toFixed(2)), b.height(d.toFixed(2));
            else {
                var e = b.style.visibility;
                c = "width:" + c.toFixed(2) + "px; height:" + d.toFixed(2) + "px;";
                this.attr(b, "style", c);
                b.style.visibility = e
            }
        },
        resizeOffsetLeft: function(b,
            c, d, e) {
            if (this.JQUERYAVAILABLE) b.width(c.toFixed(2)), b.height(d.toFixed(2)), b.css("left", e);
            else {
                var f = b.style.visibility;
                c = "width:" + c.toFixed(2) + "px; height:" + d.toFixed(2) + "px; left: " + e.toFixed(2) + "px;";
                this.attr(b, "style", c);
                b.style.visibility = f
            }
        },
        resizeOffset: function(b, c, d, e, f) {
            if (this.JQUERYAVAILABLE) b.width(c.toFixed(2)), b.height(d.toFixed(2)), b.css("left", e), b.css("top", f);
            else {
                var j = b.style.visibility;
                c = "width:" + c.toFixed(2) + "px; height:" + d.toFixed(2) + "px; left: " + e.toFixed(2) + "px; top: " +
                    f.toFixed(2) + "px;";
                this.attr(b, "style", c);
                b.style.visibility = j
            }
        },
        css: function(b, c) {
            if (this.JQUERYAVAILABLE) b.css(c);
            else {
                var d = "",
                    e;
                for (e in c) d += e + ":" + c[e] + ";";
                this.attr(b, "style", d)
            }
        },
        getOffsets: function(b) {
            return this.JQUERYAVAILABLE ? (b = b.offset(), {
                left: b.left,
                top: b.top
            }) : {
                left: b.offsetLeft,
                top: b.offsetTop
            }
        },
        attr: function(b, c, d) {
            if ("undefined" === typeof d) return this.JQUERYAVAILABLE ? b.attr(c) : b.getAttribute(c);
            this.JQUERYAVAILABLE ? b.attr(c, d) : b.setAttribute(c, d)
        },
        show: function(b) {
            this.JQUERYAVAILABLE ?
                (b.show(), b.css("visibility", "visible")) : b && (b.style ? b.style.visibility = "visible" : b[0] && (b[0].style.visibility = "visible"))
        },
        hide: function(b) {
            this.JQUERYAVAILABLE ? (b.hide(), b.css("visibility", "hidden")) : b && (b.style ? b.style.visibility = "hidden" : b[0] && (b[0].style.visibility = "hidden"))
        },
        getQueryVariable: function(b) {
            for (var c = window.location.search.substring(1).split("&"), d = 0; d < c.length; d++) {
                var e = c[d].split("=");
                if (decodeURIComponent(e[0]) == b) return decodeURIComponent(e[1])
            }
        },
        forcedDeviceDetection: function() {
            var b =
                this.getQueryVariable("device");
            if (b) switch (b) {
                case "mobile":
                    console.log("serving mobile version ...");
                    ig.ua.mobile = !0;
                    break;
                case "desktop":
                    console.log("serving desktop version ...");
                    ig.ua.mobile = !1;
                    break;
                default:
                    console.log("serving universal version ...")
            } else console.log("serving universal version ...")
        },
        forcedDeviceRotation: function() {
            var b = this.getQueryVariable("force-rotate");
            if (b) switch (b) {
                case "portrait":
                    console.log("force rotate to portrait");
                    window.orientation = 0;
                    break;
                case "landscape":
                    console.log("force rotate to horizontal");
                    window.orientation = 90;
                    break;
                default:
                    alert("wrong command/type in param force-rotate. Defaulting value to portrait"), window.orientation = 0
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.data.vector").defines(function() {
    Vector2 = function(b, c) {
        this.x = b || 0;
        this.y = c || 0
    };
    Vector2.prototype = {
        valType: "number",
        neg: function() {
            this.x = -this.x;
            this.y = -this.y;
            return this
        },
        row: function(b) {
            typeof b === this.valType && (this.y = b);
            return this.y
        },
        col: function(b) {
            typeof b === this.valType && (this.x = b);
            return this.x
        },
        add: function(b) {
            b instanceof Vector2 ? (this.x += b.x, this.y += b.y) : (this.x += b, this.y += b);
            return this
        },
        sub: function(b) {
            b instanceof Vector2 ? (this.x -= b.x, this.y -= b.y) : (this.x -= b, this.y -=
                b);
            return this
        },
        mul: function(b) {
            b instanceof Vector2 ? (this.x *= b.x, this.y *= b.y) : (this.x *= b, this.y *= b);
            return this
        },
        div: function(b) {
            b instanceof Vector2 ? (0 != b.x && (this.x /= b.x), 0 != b.y && (this.y /= b.y)) : 0 != b && (this.x /= b, this.y /= b);
            return this
        },
        equals: function(b) {
            return this.x == b.x && this.y == b.y
        },
        dot: function(b) {
            return this.x * b.x + this.y * b.y
        },
        cross: function(b) {
            return this.x * b.y - this.y * b.x
        },
        length: function() {
            return Math.sqrt(this.dot(this))
        },
        norm: function() {
            return this.divide(this.length())
        },
        min: function() {
            return Math.min(this.x,
                this.y)
        },
        max: function() {
            return Math.max(this.x, this.y)
        },
        toAngles: function() {
            return -Math.atan2(-this.y, this.x)
        },
        angleTo: function(b) {
            return Math.acos(this.dot(b) / (this.length() * b.length()))
        },
        toArray: function(b) {
            return [this.x, this.y].slice(0, b || 2)
        },
        clone: function() {
            return new Vector2(this.x, this.y)
        },
        set: function(b, c) {
            this.x = b;
            this.y = c;
            return this
        },
        unit: function() {
            var b = this.length();
            if (0 < b) return new Vector2(this.x / b, this.y / b);
            throw "Divide by 0 error in unitVector function of vector:" + this;
        },
        turnRight: function() {
            var b =
                this.x;
            this.x = -this.y;
            this.y = b;
            return this
        },
        turnLeft: function() {
            var b = this.x;
            this.x = this.y;
            this.y = -b;
            return this
        },
        rotate: function(b) {
            var c = this.clone();
            this.x = c.x * Math.cos(b) - c.y * Math.sin(b);
            this.y = c.x * Math.sin(b) + c.y * Math.cos(b);
            return this
        }
    };
    Vector2.negative = function(b) {
        return new Vector2(-b.x, -b.y)
    };
    Vector2.add = function(b, c) {
        return c instanceof Vector2 ? new Vector2(b.x + c.x, b.y + c.y) : new Vector2(b.x + v, b.y + v)
    };
    Vector2.subtract = function(b, c) {
        return c instanceof Vector2 ? new Vector2(b.x - c.x, b.y - c.y) :
            new Vector2(b.x - v, b.y - v)
    };
    Vector2.multiply = function(b, c) {
        return c instanceof Vector2 ? new Vector2(b.x * c.x, b.y * c.y) : new Vector2(b.x * v, b.y * v)
    };
    Vector2.divide = function(b, c) {
        return c instanceof Vector2 ? new Vector2(b.x / c.x, b.y / c.y) : new Vector2(b.x / v, b.y / v)
    };
    Vector2.equals = function(b, c) {
        return b.x == c.x && b.y == c.y
    };
    Vector2.dot = function(b, c) {
        return b.x * c.x + b.y * c.y
    };
    Vector2.cross = function(b, c) {
        return b.x * c.y - b.y * c.x
    }
});
ig.baked = !0;
ig.module("plugins.handlers.size-handler").requires("plugins.data.vector").defines(function() {
    ig.SizeHandler = ig.Class.extend({
        portraitMode: !0,
        disableStretchToFitOnMobileFlag: !1,
        enableStretchToFitOnAntiPortraitModeFlag: !0,
        enableScalingLimitsOnMobileFlag: !1,
        minScalingOnMobile: 0,
        maxScalingOnMobile: 1,
        enableStretchToFitOnDesktopFlag: !1,
        enableScalingLimitsOnDesktopFlag: !1,
        minScalingOnDesktop: 0,
        maxScalingOnDesktop: 1,
        desktop: {
            actualSize: new Vector2(window.innerWidth, window.innerHeight),
            actualResolution: new Vector2(540,
                960)
        },
        mobile: {
            actualSize: new Vector2(window.innerWidth, window.innerHeight),
            actualResolution: new Vector2(540, 960)
        },
        windowSize: new Vector2(window.innerWidth, window.innerHeight),
        scaleRatioMultiplier: new Vector2(1, 1),
        sizeRatio: new Vector2(1, 1),
        scale: 1,
        domHandler: null,
        dynamicClickableEntityDivs: {},
        coreDivsToResize: ["#canvas", "#play", "#orientate"],
        adsToResize: {},
        init: function(b) {
            this.domHandler = b;
            if ("undefined" === typeof b) throw "undefined Dom Handler for Size Handler";
            this.sizeCalcs();
            this.eventListenerSetup();
            this.samsungFix();
            b = this.domHandler.getElementById("#preloadText");
            this.domHandler.hide(b)
        },
        sizeCalcs: function() {
            this.windowSize = new Vector2(window.innerWidth, window.innerHeight);
            if (ig.ua.mobile) {
                this.mobile.actualSize = new Vector2(window.innerWidth, window.innerHeight);
                var b = new Vector2(this.mobile.actualResolution.x, this.mobile.actualResolution.y);
                this.scaleRatioMultiplier = new Vector2(this.mobile.actualSize.x / b.x, this.mobile.actualSize.y / b.y);
                if (this.disableStretchToFitOnMobileFlag) {
                    var c = Math.min(this.scaleRatioMultiplier.x, this.scaleRatioMultiplier.y);
                    this.enableScalingLimitsOnMobileFlag && (c > this.maxScalingOnMobile && (c = this.maxScalingOnMobile), c < this.maxScalingOnMobile && (c = this.maxScalingOnMobile));
                    this.mobile.actualSize.x = b.x * c;
                    this.mobile.actualSize.y = b.y * c;
                    this.scaleRatioMultiplier.x = c;
                    this.scaleRatioMultiplier.y = c
                } else this.sizeRatio.x =
                    this.scaleRatioMultiplier.x, this.sizeRatio.y = this.scaleRatioMultiplier.y, this.scaleRatioMultiplier.x = 1, this.scaleRatioMultiplier.y = 1
            } else this.desktop.actualSize = new Vector2(window.innerWidth, window.innerHeight), b = new Vector2(this.desktop.actualResolution.x, this.desktop.actualResolution.y), this.scaleRatioMultiplier = new Vector2(this.desktop.actualSize.x / b.x, this.desktop.actualSize.y / b.y), this.enableStretchToFitOnDesktopFlag ? (this.sizeRatio.x = this.scaleRatioMultiplier.x, this.sizeRatio.y = this.scaleRatioMultiplier.y,
                this.scaleRatioMultiplier.x = 1, this.scaleRatioMultiplier.y = 1) : (c = Math.min(this.scaleRatioMultiplier.x, this.scaleRatioMultiplier.y), this.enableScalingLimitsOnDesktopFlag && (c > this.maxScalingOnDesktop && (c = this.maxScalingOnDesktop), c < this.minScalingOnDesktop && (c = this.minScalingOnDesktop)), this.desktop.actualSize.x = b.x * c, this.desktop.actualSize.y = b.y * c, this.scaleRatioMultiplier.x = c, this.scaleRatioMultiplier.y = c)
        },
        resizeLayers: function() {
            for (var b = 0; b < this.coreDivsToResize.length; b++) {
                var c = ig.domHandler.getElementById(this.coreDivsToResize[b]);
                if (ig.ua.mobile)
                    if (this.disableStretchToFitOnMobileFlag) {
                        var d = Math.floor(ig.sizeHandler.windowSize.x / 2 - ig.sizeHandler.mobile.actualSize.x / 2),
                            e = Math.floor(ig.sizeHandler.windowSize.y / 2 - ig.sizeHandler.mobile.actualSize.y / 2);
                        0 > d && (d = 0);
                        0 > e && (e = 0);
                        ig.domHandler.resizeOffset(c, Math.floor(ig.sizeHandler.mobile.actualSize.x), Math.floor(ig.sizeHandler.mobile.actualSize.y), d, e);
                        var f = !1;
                        if (f = this.portraitMode ? window.innerHeight < window.innerWidth : window.innerHeight > window.innerWidth)
                            if (this.enableStretchToFitOnAntiPortraitModeFlag) ig.domHandler.resizeOffset(c,
                                Math.floor(window.innerWidth), Math.floor(window.innerHeight), 0, 0);
                            else {
                                var f = new Vector2(window.innerWidth / this.mobile.actualResolution.y, window.innerHeight / this.mobile.actualResolution.x),
                                    d = Math.min(f.x, f.y),
                                    f = this.mobile.actualResolution.y * d,
                                    j = this.mobile.actualResolution.x * d,
                                    d = Math.floor(ig.sizeHandler.windowSize.x / 2 - f / 2),
                                    e = Math.floor(ig.sizeHandler.windowSize.y / 2 - j / 2);
                                0 > d && (d = 0);
                                0 > e && (e = 0);
                                ig.domHandler.resizeOffset(c, Math.floor(f), Math.floor(j), d, e)
                            }
                    } else ig.domHandler.resize(c, Math.floor(ig.sizeHandler.mobile.actualSize.x),
                        Math.floor(ig.sizeHandler.mobile.actualSize.y));
                else this.enableStretchToFitOnDesktopFlag ? ig.domHandler.resize(c, Math.floor(ig.sizeHandler.desktop.actualSize.x), Math.floor(ig.sizeHandler.desktop.actualSize.y)) : (d = Math.floor(ig.sizeHandler.windowSize.x / 2 - ig.sizeHandler.desktop.actualSize.x / 2), e = Math.floor(ig.sizeHandler.windowSize.y / 2 - ig.sizeHandler.desktop.actualSize.y / 2), 0 > d && (d = 0), 0 > e && (e = 0), ig.domHandler.resizeOffset(c, Math.floor(ig.sizeHandler.desktop.actualSize.x), Math.floor(ig.sizeHandler.desktop.actualSize.y),
                    d, e))
            }
            for (var n in this.adsToResize) b = ig.domHandler.getElementById("#" + n), c = ig.domHandler.getElementById("#" + n + "-Box"), f = (window.innerWidth - this.adsToResize[n]["box-width"]) / 2 + "px", d = (window.innerHeight - this.adsToResize[n]["box-height"]) / 2 + "px", b && ig.domHandler.css(b, {
                width: window.innerWidth,
                height: window.innerHeight
            }), c && ig.domHandler.css(c, {
                left: f,
                top: d
            });
            for (n in this.dynamicClickableEntityDivs) {
                b = Math.min(ig.sizeHandler.scaleRatioMultiplier.x, ig.sizeHandler.scaleRatioMultiplier.y);
                c = ig.domHandler.getElementById("#" +
                    n);
                if (ig.ua.mobile) var l = this.dynamicClickableEntityDivs[n].entity_pos_x,
                    j = this.dynamicClickableEntityDivs[n].entity_pos_y,
                    d = this.dynamicClickableEntityDivs[n].width,
                    f = this.dynamicClickableEntityDivs[n].height,
                    e = Math.floor(l * this.scaleRatioMultiplier.x) + "px",
                    j = Math.floor(j * this.scaleRatioMultiplier.y) + "px",
                    d = Math.floor(d * this.scaleRatioMultiplier.x) + "px",
                    f = Math.floor(f * this.scaleRatioMultiplier.y) + "px";
                else var f = ig.domHandler.getElementById("#canvas"),
                    f = ig.domHandler.getOffsets(f),
                    e = f.left,
                    g = f.top,
                    l = this.dynamicClickableEntityDivs[n].entity_pos_x,
                    j = this.dynamicClickableEntityDivs[n].entity_pos_y,
                    d = this.dynamicClickableEntityDivs[n].width,
                    f = this.dynamicClickableEntityDivs[n].height,
                    e = Math.floor(e + l * b) + "px",
                    j = Math.floor(g + j * b) + "px",
                    d = Math.floor(d * b) + "px",
                    f = Math.floor(f * b) + "px";
                ig.domHandler.css(c, {
                    "float": "left",
                    position: "absolute",
                    left: e,
                    top: j,
                    width: d,
                    height: f,
                    "z-index": 3
                });
                this.dynamicClickableEntityDivs[n]["font-size"] && ig.domHandler.css(c, {
                    "font-size": this.dynamicClickableEntityDivs[n]["font-size"] *
                        b + "px"
                })
            }
            $("#ajaxbar").width(this.windowSize.x);
            $("#ajaxbar").height(this.windowSize.y)
        },
        resize: function() {
            this.sizeCalcs();
            this.resizeLayers()
        },
        reorient: function() {
            console.log("changing orientation ...");
            if (ig.ua.mobile) {
                var b = !1,
                    b = this.portraitMode ? window.innerHeight < window.innerWidth : window.innerHeight > window.innerWidth,
                    c = this.domHandler.getElementById("#orientate"),
                    d = this.domHandler.getElementById("#game");
                b ? (this.domHandler.show(c), this.domHandler.hide(d), console.log("portrait" + window.innerWidth +
                    "," + window.innerHeight)) : (this.domHandler.show(d), this.domHandler.hide(c), console.log("landscape" + window.innerWidth + "," + window.innerHeight))
            }
            ig.ua.mobile ? (this.resize(), this.resizeAds()) : this.resize()
        },
        resizeAds: function() {
            for (var b in this.adsToResize) {
                var c = ig.domHandler.getElementById("#" + b),
                    d = ig.domHandler.getElementById("#" + b + "-Box"),
                    e = (window.innerWidth - this.adsToResize[b]["box-width"]) / 2 + "px",
                    f = (window.innerHeight - this.adsToResize[b]["box-height"]) / 2 + "px";
                c && ig.domHandler.css(c, {
                    width: window.innerWidth,
                    height: window.innerHeight
                });
                d && ig.domHandler.css(d, {
                    left: e,
                    top: f
                })
            }
        },
        samsungFix: function() {
            ig.ua.android && (!(4.2 > parseFloat(navigator.userAgent.slice(navigator.userAgent.indexOf("Android") + 8, navigator.userAgent.indexOf("Android") + 11))) && !(0 > navigator.userAgent.indexOf("GT")) && !(0 < navigator.userAgent.indexOf("Chrome")) && !(0 < navigator.userAgent.indexOf("Firefox"))) && (document.addEventListener("touchstart", function(b) {
                b.preventDefault();
                return !1
            }, !1), document.addEventListener("touchmove", function(b) {
                b.preventDefault();
                return !1
            }, !1), document.addEventListener("touchend", function(b) {
                b.preventDefault();
                return !1
            }, !1))
        },
        orientationInterval: null,
        orientationTimeout: null,
        orientationHandler: function() {
            this.reorient();
            window.scrollTo(0, 1)
        },
        orientationDelayHandler: function() {
            null == this.orientationInterval && (this.orientationInterval = window.setInterval(this.orientationHandler.bind(this), 100));
            null == this.orientationTimeout && (this.orientationTimeout = window.setTimeout(function() {
                this.clearAllIntervals()
            }.bind(this), 2E3))
        },
        clearAllIntervals: function() {
            window.clearInterval(this.orientationInterval);
            this.orientationInterval = null;
            window.clearTimeout(this.orientationTimeout);
            this.orientationTimeout = null
        },
        eventListenerSetup: function() {
            ig.ua.iOS ? (window.addEventListener("orientationchange", this.orientationDelayHandler.bind(this)), window.addEventListener("resize", this.orientationDelayHandler.bind(this))) : (window.addEventListener("orientationchange", this.orientationHandler.bind(this)), window.addEventListener("resize", this.orientationHandler.bind(this)));
            document.ontouchmove = function(b) {
                window.scrollTo(0,
                    1);
                b.preventDefault()
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.handlers.api-handler").defines(function() {
    ig.ApiHandler = ig.Class.extend({
        apiAvailable: {
            // MJSPreroll: function() {
            // 	ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE && _SETTINGS && _SETTINGS.Ad.Mobile.Preroll.Enabled && MobileAdInGamePreroll.Initialize()
            // },
            // MJSHeader: function() {
            // 	ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE && _SETTINGS.Ad.Mobile.Header.Enabled && MobileAdInGameHeader.Initialize()
            // },
            // MJSFooter: function() {
            // 	ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE && _SETTINGS.Ad.Mobile.Footer.Enabled && MobileAdInGameFooter.Initialize()
            // },
            // MJSEnd: function() {
            // 	ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE && _SETTINGS.Ad.Mobile.End.Enabled && MobileAdInGameEnd.Initialize()
            // }
        },
        run: function(b, c) {
            if (this.apiAvailable[b]) this.apiAvailable[b](c)
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.sound-player").defines(function() {
    SoundPlayer = ig.Class.extend({
        tagName: "SoundPlayer",
        stayMuteFlag: !1,
        debug: !1,
        init: function() {
            this.debug && console.log(this.tagName)
        },
        play: function(b) {
            this.debug && console.log("play sound ", b)
        },
        stop: function() {
            this.debug && console.log("stop sound ")
        },
        volume: function() {
            this.debug && console.log("set volume")
        },
        mute: function(b) {
            this.debug && console.log("mute");
            "undefined" === typeof b ? this.stayMuteFlag = !0 : b && (this.stayMuteFlag = !0)
        },
        unmute: function(b) {
            this.debug &&
                console.log("unmute");
            "undefined" === typeof b ? this.stayMuteFlag = !1 : b && (this.stayMuteFlag = !1)
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.impact-music-player").requires("plugins.audio.sound-player").defines(function() {
    ImpactMusicPlayer = SoundPlayer.extend({
        tagName: "ImpactMusicPlayer",
        bgmPlaying: !1,
        soundList: {},
        init: function(b, c) {
            this.parent(b, c);
            for (var d in b) this.soundList[d] = d, ig.music.add(b[d].path + ".*", d);
            c && c.loop && (ig.music.loop = c.loop)
        },
        play: function(b) {
            this.stayMuteFlag || (this.bgmPlaying = !0, "undefined" === typeof b ? ig.music.play(b) : ig.music.play())
        },
        stop: function() {
            this.bgmPlaying = !1;
            ig.music.pause()
        },
        volume: function(b) {
            console.log("impactmusic:", b);
            ig.music.volume = 0 > b ? 0 : isNaN(b) ? 1 : 1 < b ? 1 : b
        },
        getVolume: function() {
            return ig.music.volume
        },
        mute: function(b) {
            this.parent(b);
            this.bgmPlaying && this.stop()
        },
        unmute: function(b) {
            this.parent(b);
            this.play()
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.impact-sound-player").requires("plugins.audio.sound-player").defines(function() {
    ImpactSoundPlayer = SoundPlayer.extend({
        tagName: "ImpactSoundPlayer",
        soundList: {},
        init: function(b, c) {
            this.parent(b, c);
            for (var d in b) {
                var e = new ig.Sound(b[d].path + ".*");
                this.soundList[d] = e
            }
        },
        play: function(b) {
            this.stayMuteFlag || ("object" === typeof b ? (console.log(b + " exists"), b.play()) : "string" === typeof b && this.soundList[b].play())
        },
        stop: function(b) {
            this.parent(b);
            b.stop()
        },
        volume: function(b) {
            ig.soundManager.volume =
                0 > b ? 0 : isNaN(b) ? 1 : 1 < b ? 1 : b
        },
        getVolume: function() {
            return ig.soundManager.volume
        },
        mute: function(b) {
            this.parent(b);
            ig.Sound.enabled = !1
        },
        unmute: function(b) {
            this.parent(b);
            ig.Sound.enabled = !0
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.howler-player").requires("plugins.audio.sound-player").defines(function() {
    HowlerPlayer = SoundPlayer.extend({
        tagName: "HowlerPlayer",
        soundList: {},
        init: function(b, c) {
            this.parent(b, c);
            for (var d in b) {
                var e = b[d].path,
                    e = new Howl({
                        src: [e + "." + ig.Sound.FORMAT.OGG.ext, e + "." + ig.Sound.FORMAT.MP3.ext]
                    });
                this.soundList[d] = e
            }
        },
        play: function(b) {
            this.stayMuteFlag || ("object" === typeof b ? b.play() : "string" === typeof b && this.soundList[b].play())
        },
        stop: function(b) {
            this.parent(b);
            "object" === typeof b ?
                b.stop() : "string" === typeof b && this.soundList[b].stop()
        },
        volume: function(b) {
            for (var c in this.soundList) {
                if (0 > b) {
                    this.soundList[c].volume(0);
                    break
                }
                isNaN(b) ? this.soundList[c].volume(1) : 1 < b ? this.soundList[c].volume(1) : this.soundList[c].volume(b)
            }
        },
        getVolume: function() {
            for (var b in this.soundList) return this.soundList[b].volume()
        },
        mute: function(b) {
            this.parent(b);
            Howler.mute(!0)
        },
        unmute: function(b) {
            this.parent(b);
            Howler.mute(!1)
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.howler-music-player").requires("plugins.audio.sound-player").defines(function() {
    HowlerMusicPlayer = SoundPlayer.extend({
        tagName: "HowlerMusicPlayer",
        bgmPlaying: !1,
        soundList: {},
        init: function(b, c) {
            this.parent(b, c);
            for (var d in b) {
                var e = b[d].path,
                    e = new Howl({
                        src: [e + "." + ig.Sound.FORMAT.OGG.ext, e + "." + ig.Sound.FORMAT.MP3.ext],
                        loop: !0,
                        autoplay: !1,
                        onend: function() {}.bind(this)
                    });
                this.soundList[d] = e
            }
        },
        play: function(b) {
            if (!this.stayMuteFlag && !this.bgmPlaying)
                if ("object" === typeof b) this.bgmPlaying = !0, b.play();
                else if ("string" === typeof b) this.bgmPlaying = !0, this.soundList[b].play();
            else
                for (var c in this.soundList) {
                    this.soundList[c].play();
                    this.bgmPlaying = !0;
                    break
                }
        },
        stop: function(b) {
            this.parent(b);
            if (this.bgmPlaying) {
                for (var c in this.soundList) this.soundList[c].stop();
                this.bgmPlaying = !1
            }
        },
        volume: function(b) {
            console.log("howler", b);
            for (var c in this.soundList) {
                if (0 > b) {
                    this.soundList[c].volume(0);
                    break
                }
                isNaN(b) ? this.soundList[c].volume(1) : 1 < b ? this.soundList[c].volume(1) : this.soundList[c].volume(b)
            }
        },
        getVolume: function() {
            for (var b in this.soundList) return this.soundList[b].volume()
        },
        mute: function(b) {
            this.parent(b);
            Howler.mute(!0)
        },
        unmute: function(b) {
            this.parent(b);
            Howler.mute(!1)
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.jukebox-player").requires("plugins.audio.sound-player").defines(function() {
    JukeboxPlayer = SoundPlayer.extend({
        tagName: "JukeboxPlayer",
        bgmPlaying: !1,
        soundList: {},
        jukeboxPlayer: null,
        pausePosition: 0,
        premuteVolume: 0,
        minVolume: 0.001,
        init: function(b, c) {
            this.parent(b, c);
            for (var d in b) {
                this.soundList[d] = d;
                var e = b[d].path;
                this.jukeboxPlayer = new jukebox.Player({
                    resources: [e + "." + ig.Sound.FORMAT.OGG.ext, e + "." + ig.Sound.FORMAT.MP3.ext],
                    autoplay: !1,
                    spritemap: {
                        music: {
                            start: b[d].startMp3,
                            end: b[d].endMp3,
                            loop: !0
                        }
                    }
                })
            }
        },
        play: function() {
            this.stayMuteFlag || (this.bgmPlaying = !0, this.pausePosition ? (console.log("resume"), this.jukeboxPlayer.resume(this.pausePosition)) : (console.log("play"), this.jukeboxPlayer.play(this.jukeboxPlayer.settings.spritemap.music.start, !0)), this.premuteVolume = this.getVolume())
        },
        stop: function() {
            this.bgmPlaying = !1;
            this.pausePosition = this.jukeboxPlayer.pause()
        },
        volume: function(b) {
            console.log("jukebox:", b);
            0 >= b ? this.jukeboxPlayer.setVolume(this.minVolume) : isNaN(b) ? this.jukeboxPlayer.setVolume(1) :
                1 < b ? this.jukeboxPlayer.setVolume(1) : this.jukeboxPlayer.setVolume(b)
        },
        getVolume: function() {
            return this.jukeboxPlayer.getVolume()
        },
        mute: function(b) {
            this.parent(b);
            this.bgmPlaying && (console.log("jukebox", this.premuteVolume), this.stayMuteFlag || (this.premuteVolume = this.getVolume()), this.jukeboxPlayer.pause(), this.jukeboxPlayer.setVolume(this.minVolume))
        },
        unmute: function(b) {
            this.parent(b);
            this.stayMuteFlag || (console.log("jukebox", this.premuteVolume), this.jukeboxPlayer.setVolume(this.premuteVolume), this.jukeboxPlayer.resume())
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.webaudio-music-player").requires("plugins.audio.sound-player").defines(function() {
    WebaudioMusicPlayer = SoundPlayer.extend({
        tagName: "WebaudioMusicPlayer",
        bgmPlaying: !1,
        isSupported: !1,
        muteFlag: !1,
        pausedTime: 0,
        webaudio: null,
        useHTML5Audio: !1,
        audio: null,
        inactiveAudio: null,
        codecs: null,
        reinitOnPlay: !1,
        inputList: null,
        _volume: 1,
        soundList: {},
        init: function(b) {
            this.webaudio = {
                compatibility: {},
                gainNode: null,
                buffer: null,
                source_loop: {},
                source_once: {}
            };
            try {
                Howler && Howler.ctx ? this.webaudio.context = Howler.ctx :
                    ig && ig.webaudio_ctx ? this.webaudio.context = ig.webaudio_ctx : (this.AudioContext = window.AudioContext || window.webkitAudioContext, this.webaudio.context = new this.AudioContext, ig.webaudio_ctx = this.webaudio.context), this.isSupported = !0
            } catch (c) {
                console.log("Web Audio API not supported in this browser."), this.webaudio = null, this.useHTML5Audio = !0
            }
            if (this.useHTML5Audio)
                if ("undefined" !== typeof Audio) try {
                    new Audio
                } catch (d) {
                    this.useHTML5Audio = !1
                } else this.useHTML5Audio = !1;
            this.useHTML5Audio && (this.audio = new Audio,
                this.isSupported = !0, this.initHTML5Audio(b));
            if (!this.isSupported) return null;
            this.webaudio && (this.inputList = b, this.initWebAudio(b))
        },
        initWebAudio: function(b) {
            ig.ua.iOS && this.initIOSWebAudioUnlock();
            this.webaudio.gainNode = this.webaudio.context.createGain();
            this.webaudio.gainNode.connect(this.webaudio.context.destination);
            this.webaudio.gainNode.gain.value = this._volume;
            this.webaudio.buffer = null;
            var c = "start",
                d = "stop",
                e = this.webaudio.context.createBufferSource();
            "function" !== typeof e.start && (c = "noteOn");
            this.webaudio.compatibility.start = c;
            "function" !== typeof e.stop && (d = "noteOff");
            this.webaudio.compatibility.stop = d;
            for (var f in b) {
                this.soundList[f] = f;
                var d = b[f].path,
                    c = d + "." + ig.Sound.FORMAT.MP3.ext,
                    j = d + "." + ig.Sound.FORMAT.OGG.ext;
                ig.ua.mobile ? ig.ua.iOS && (j = c) : (d = navigator.userAgent.toLowerCase(), -1 != d.indexOf("safari") && -1 >= d.indexOf("chrome") && (j = c), d.indexOf("win64") && (j = c));
                var n = new XMLHttpRequest;
                n.open("GET", j, !0);
                n.responseType = "arraybuffer";
                n.onload = function() {
                    this.webaudio.context.decodeAudioData(n.response,
                        function(b) {
                            this.webaudio.buffer = b;
                            this.webaudio.source_loop = {};
                            this.bgmPlaying ? this.play(null, !0) : this.stop()
                        }.bind(this),
                        function() {
                            console.log('Error decoding audio "' + j + '".')
                        })
                }.bind(this);
                n.send();
                if (4 == n.readyState && "undefined" !== typeof Audio) {
                    this.useHTML5Audio = !0;
                    try {
                        new Audio
                    } catch (l) {
                        this.useHTML5Audio = !1
                    }
                    this.useHTML5Audio && (console.log("Using HTML5 Audio"), this.webaudio = null, this.audio = new Audio, this.isSupported = !0, this.initHTML5Audio(b))
                }
                break
            }
        },
        initIOSWebAudioUnlock: function() {
            if (this.webaudio) {
                webaudio =
                    this.webaudio;
                var b = function() {
                    var c = webaudio.context,
                        d = c.createBuffer(1, 1, 22050),
                        e = c.createBufferSource();
                    e.buffer = d;
                    e.connect(c.destination);
                    "undefined" === typeof e.start ? e.noteOn(0) : e.start(0);
                    setTimeout(function() {
                        (e.playbackState === e.PLAYING_STATE || e.playbackState === e.FINISHED_STATE) && window.removeEventListener("touchend", b, !1)
                    }.bind(this), 0)
                };
                window.addEventListener("touchend", b, !1)
            }
        },
        initHTML5Audio: function(b) {
            if (this.useHTML5Audio && this.audio) {
                var c = this.audio;
                this.codecs = {};
                this.codecs = {
                    mp3: !!c.canPlayType("audio/mpeg;").replace(/^no$/,
                        ""),
                    opus: !!c.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                    ogg: !!c.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                    wav: !!c.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
                    aac: !!c.canPlayType("audio/aac;").replace(/^no$/, ""),
                    m4a: !!(c.canPlayType("audio/x-m4a;") || c.canPlayType("audio/m4a;") || c.canPlayType("audio/aac;")).replace(/^no$/, ""),
                    mp4: !!(c.canPlayType("audio/x-mp4;") || c.canPlayType("audio/mp4;") || c.canPlayType("audio/aac;")).replace(/^no$/, ""),
                    weba: !!c.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,
                        "")
                };
                this.is = {
                    ff: Boolean(null != window.mozInnerScreenX && /firefox/.test(navigator.userAgent.toLowerCase())),
                    ie: Boolean(document.all && !window.opera),
                    opera: Boolean(window.opera),
                    chrome: Boolean(window.chrome),
                    safari: Boolean(!window.chrome && /safari/.test(navigator.userAgent.toLowerCase()) && window.getComputedStyle && !window.globalStorage && !window.opera)
                };
                this.playDelay = -60;
                this.stopDelay = 30;
                this.is.chrome && (this.playDelay = -25);
                this.is.chrome && (this.stopDelay = 25);
                this.is.ff && (this.playDelay = -25);
                this.is.ff &&
                    (this.stopDelay = 85);
                this.is.opera && (this.playDelay = 5);
                this.is.opera && (this.stopDelay = 0);
                for (var d in b) {
                    this.soundList[d] = d;
                    var e = b[d].path,
                        c = e + "." + ig.Sound.FORMAT.OGG.ext,
                        e = e + "." + ig.Sound.FORMAT.MP3.ext,
                        f = null;
                    this.codecs[ig.Sound.FORMAT.OGG.ext.toLowerCase()] ? f = c : this.codecs[ig.Sound.FORMAT.MP3.ext.toLowerCase()] && (f = e);
                    if (f) {
                        ig.ua.mobile ? ig.ua.iOS && (f = e) : (b = navigator.userAgent.toLowerCase(), -1 != b.indexOf("safari") && -1 >= b.indexOf("chrome") && (f = e));
                        this.audio.addEventListener("error", function() {
                            this.audio.error &&
                                4 === this.audio.error.code && (this.isSupported = !1)
                        }, !1);
                        this.audio.src = f;
                        this.audio._pos = 0;
                        this.audio.preload = "auto";
                        this.audio.volume = this._volume;
                        this.inactiveAudio = new Audio;
                        this.inactiveAudio.src = f;
                        this.inactiveAudio._pos = 0;
                        this.inactiveAudio.preload = "auto";
                        this.inactiveAudio.volume = this._volume;
                        this.inactiveAudio.load();
                        var j = function() {
                            this._duration = this.audio.duration;
                            this._loaded || (this._loaded = !0);
                            this.bgmPlaying ? this.play(null, !0) : this.stop();
                            this.audio.removeEventListener("canplaythrough",
                                j, !1)
                        }.bind(this);
                        this.audio.addEventListener("canplaythrough", j, !1);
                        this.audio.load();
                        break
                    }
                }
            }
        },
        play: function(b, c) {
            if (this.isSupported)
                if (this.bgmPlaying = !0, this.webaudio) {
                    if (!c && this.reinitOnPlay && this.webaudio.source_loop.buffer == this.webaudio.buffer) {
                        if (this.webaudio.source_loop._playing && (this.webaudio.source_loop[this.webaudio.compatibility.stop](0), this.webaudio.source_loop._playing = !1, this.pausedTime += this.webaudio.context.currentTime - this.webaudio.source_loop._startTime, this.pausedTime %=
                                this.webaudio.source_loop.buffer.duration, this.webaudio.source_loop._startTime = 0, "noteOn" === this.webaudio.compatibility.start)) this.webaudio.source_once[this.webaudio.compatibility.stop](0);
                        try {
                            this.webaudio.context.close();
                            this.webaudio.context = new this.AudioContext;
                            this.webaudio.gainNode = this.webaudio.context.createGain();
                            this.webaudio.gainNode.connect(this.webaudio.context.destination);
                            this.webaudio.gainNode.gain.value = this._volume;
                            var d = "start",
                                e = "stop",
                                f = this.webaudio.context.createBufferSource();
                            "function" !== typeof f.start && (d = "noteOn");
                            this.webaudio.compatibility.start = d;
                            "function" !== typeof f.stop && (e = "noteOff");
                            this.webaudio.compatibility.stop = e;
                            this.webaudio.source_loop = {};
                            this.play(null, !0)
                        } catch (j) {}
                    }
                    if (this.webaudio.buffer) {
                        if (!this.muteFlag && (this.bgmPlaying = !0, !this.webaudio.source_loop._playing)) {
                            this.webaudio.source_loop = this.webaudio.context.createBufferSource();
                            this.webaudio.source_loop.buffer = this.webaudio.buffer;
                            this.webaudio.source_loop.loop = !0;
                            this.webaudio.source_loop.connect(this.webaudio.gainNode);
                            if (null == b || isNaN(b)) b = 0, this.pausedTime && (b = this.pausedTime);
                            this.webaudio.source_loop._startTime = this.webaudio.context.currentTime;
                            if ("noteOn" === this.webaudio.compatibility.start) this.webaudio.source_once = this.webaudio.context.createBufferSource(), this.webaudio.source_once.buffer = this.webaudio.buffer, this.webaudio.source_once.connect(this.webaudio.gainNode), this.webaudio.source_once.noteGrainOn(0, b, this.webaudio.buffer.duration - b), this.webaudio.source_loop[this.webaudio.compatibility.start](this.webaudio.context.currentTime +
                                (this.webaudio.buffer.duration - b));
                            else this.webaudio.source_loop[this.webaudio.compatibility.start](0, b);
                            this.webaudio.source_loop._playing = !0
                        }
                    } else this.bgmPlaying = !0
                } else if (this.audio) {
                var n = this.audio;
                if (!this.muteFlag)
                    if (this.bgmPlaying = !0, isNaN(b) && (b = 0, this.pausedTime && (b = this.pausedTime)), d = this._duration - b, this._onEndTimer && (clearTimeout(this._onEndTimer), this._onEndTimer = null), this._onEndTimer = setTimeout(function() {
                            this.audio.currentTime = 0;
                            this.audio.pause();
                            this.pausedTime = 0;
                            if (this.inactiveAudio) {
                                var b =
                                    this.audio;
                                this.audio = this.inactiveAudio;
                                this.inactiveAudio = b
                            }
                            this.play()
                        }.bind(this), 1E3 * d + this.playDelay), 4 === n.readyState || !n.readyState && navigator.isCocoonJS) n.readyState = 4, n.currentTime = b, n.muted = this.muteFlag || n.muted, n.volume = this._volume, setTimeout(function() {
                        n.play()
                    }, 0);
                    else {
                        clearTimeout(this._onEndTimer);
                        this._onEndTimer = null;
                        var l = function() {
                            typeof("function" == this.play) && (this.play(), n.removeEventListener("canplaythrough", l, !1))
                        }.bind(this);
                        n.addEventListener("canplaythrough", l, !1)
                    }
            }
        },
        stop: function() {
            this.bgmPlaying = !1;
            if (this.isSupported)
                if (this.webaudio) {
                    if (this.webaudio.source_loop._playing && (this.webaudio.source_loop[this.webaudio.compatibility.stop](0), this.webaudio.source_loop._playing = !1, this.pausedTime += this.webaudio.context.currentTime - this.webaudio.source_loop._startTime, this.pausedTime %= this.webaudio.source_loop.buffer.duration, this.webaudio.source_loop._startTime = 0, "noteOn" === this.webaudio.compatibility.start)) this.webaudio.source_once[this.webaudio.compatibility.stop](0)
                } else if (this.audio) {
                var b =
                    this.audio;
                4 == b.readyState && (this.pausedTime = b.currentTime, b.currentTime = 0, b.pause(), clearTimeout(this._onEndTimer), this._onEndTimer = null)
            }
        },
        volume: function(b) {
            if (isNaN(b) || null == b) return this.getVolume();
            this.isSupported && (this._volume = b, 0 > this._volume ? this._volume = 0 : 1 < this._volume && (this._volume = 1), this.webaudio ? this.webaudio.gainNode && (this.webaudio.gainNode.gain.value = this._volume) : this.audio && (this.audio.volume = this._volume, this.inactiveAudio && (this.inactiveAudio.volume = this._volume)))
        },
        getVolume: function() {
            return !this.isSupported ?
                0 : this._volume
        },
        mute: function(b) {
            this.parent(b);
            !1 == this.muteFlag && (this.muteFlag = !0, this.bgmPlaying && (this.stop(), this.bgmPlaying = !0))
        },
        unmute: function(b) {
            this.parent(b);
            !this.stayMuteFlag && !0 == this.muteFlag && (this.muteFlag = !1, this.bgmPlaying && this.play())
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.sound-info").defines(function() {
    SoundInfo = ig.Class.extend({
        FORMATS: {
            OGG: ".ogg",
            MP3: ".mp3"
        },
        sfx: {
            kittyopeningSound: {
                path: "media/audio/opening/kittyopening"
            },
            staticSound: {
                path: "media/audio/play/static"
            },
            openingSound: {
                path: "media/audio/opening/opening"
            },
            arrowDec: {
                path: "media/audio/sfx/arrowDec"
            },
            button: {
                path: "media/audio/sfx/button"
            },
            circleDec: {
                path: "media/audio/sfx/circleDec"
            },
            countFinish: {
                path: "media/audio/sfx/countFinish"
            },
            countStart: {
                path: "media/audio/sfx/countStart"
            },
            createBall: {
                path: "media/audio/sfx/createBall"
            },
            obstacleEffect: {
                path: "media/audio/sfx/obstacleEffect"
            },
            paddle: {
                path: "media/audio/sfx/paddle"
            },
            starDec: {
                path: "media/audio/sfx/starDec"
            },
            tutorialTransition: {
                path: "media/audio/sfx/tutorialTransition"
            },
            launchStart: {
                path: "media/audio/sfx/launchStart"
            },
            launchFinish: {
                path: "media/audio/sfx/launchFinish"
            }
        },
        bgm: {
            background: {
                path: "media/audio/bgm",
                startOgg: 0,
                endOgg: 12.181,
                startMp3: 0,
                endMp3: 12.181
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.sound-handler").requires("plugins.audio.impact-music-player", "plugins.audio.impact-sound-player", "plugins.audio.howler-player", "plugins.audio.howler-music-player", "plugins.audio.jukebox-player", "plugins.audio.webaudio-music-player", "plugins.audio.sound-info").defines(function() {
    ig.SoundHandler = ig.Class.extend({
        bgmPlayer: null,
        sfxPlayer: null,
        focusBlurMute: !1,
        soundInfo: new SoundInfo,
        init: function() {
            console.log("Initiating sound handler");
            this.initWindowHandler();
            ig.ua.mobile ?
                (this.initPowerButtonFix(), this.bgmPlayer = new WebaudioMusicPlayer(this.soundInfo.bgm, {
                    loop: !0
                }), this.bgmPlayer.isSupported || (this.bgmPlayer = new JukeboxPlayer(this.soundInfo.bgm, {
                    loop: !0
                }))) : (this.bgmPlayer = new WebaudioMusicPlayer(this.soundInfo.bgm, {
                    loop: !0
                }), this.bgmPlayer.isSupported || (this.bgmPlayer = new ImpactMusicPlayer(this.soundInfo.bgm, {
                    loop: !0
                })));
            this.sfxPlayer = new HowlerPlayer(this.soundInfo.sfx)
        },
        checkBGM: function() {
            return this.bgmPlayer.stayMuteFlag
        },
        checkSFX: function() {
            return this.sfxPlayer.stayMuteFlag
        },
        muteSFX: function(b) {
            this.sfxPlayer && this.sfxPlayer.mute(b)
        },
        muteBGM: function(b) {
            this.bgmPlayer && this.bgmPlayer.mute(b)
        },
        unmuteSFX: function(b) {
            1 != ig.gd.isFreez && this.sfxPlayer && this.sfxPlayer.unmute(b)
        },
        unmuteBGM: function(b) {
            1 != ig.gd.isFreez && this.bgmPlayer && this.bgmPlayer.unmute(b)
        },
        muteAll: function(b) {
            this.muteSFX(b);
            this.muteBGM(b)
        },
        unmuteAll: function(b) {
            1 != ig.gd.isFreez && (this.unmuteSFX(b), this.unmuteBGM(b))
        },
        forceMuteAll: function() {
            this.focusBlurMute || this.muteAll(!1);
            this.focusBlurMute = !0
        },
        forceUnMuteAll: function() {
            1 !=
                ig.gd.isFreez && this.focusBlurMute && (this.unmuteAll(!1), this.focusBlurMute = !1)
        },
        initWindowHandler: function() {
            "true" === ig.domHandler.getQueryVariable("webview") ? ($(window).focus(function() {
                ig.soundHandler && ig.soundHandler.forceUnMuteAll()
            }), $(window).blur(function() {
                ig.soundHandler && ig.soundHandler.forceMuteAll()
            })) : (window.onfocus = function() {
                ig.soundHandler && ig.soundHandler.forceUnMuteAll()
            }, window.onblur = function() {
                ig.soundHandler && ig.soundHandler.forceMuteAll()
            })
        },
        initPowerButtonFix: function() {
            var b =
                this.getHiddenProp();
            b && (b = b.replace(/[H|h]idden/, "") + "visibilitychange", document.addEventListener(b, this.visChange));
            window.addEventListener("pagehide", function() {
                ig.soundHandler && ig.soundHandler.forceMuteAll()
            }, !1);
            window.addEventListener("pageshow", function() {
                ig.soundHandler && ig.soundHandler.forceUnMuteAll()
            }, !1)
        },
        getHiddenProp: function() {
            var b = ["webkit", "moz", "ms", "o"];
            if ("hidden" in document) return "hidden";
            for (var c = 0; c < b.length; c++)
                if (b[c] + "Hidden" in document) return b[c] + "Hidden";
            return null
        },
        isHidden: function() {
            var b = this.getHiddenProp();
            return !b ? !1 : document[b]
        },
        visChange: function() {
            ig.soundHandler.isHidden() ? ig.soundHandler && ig.soundHandler.forceMuteAll() : ig.soundHandler && ig.soundHandler.forceUnMuteAll()
        },
        saveVolume: function() {
            this.sfxPlayer && ig.game.io.storageSet("soundVolume", this.sfxPlayer.getVolume());
            this.bgmPlayer && ig.game.io.storageSet("musicVolume", this.bgmPlayer.getVolume())
        },
        forceLoopBGM: function() {
            var b;
            if (!this.focusBlurMute && this.bgmPlayer.bgmPlaying && this.bgmPlayer) {
                var c =
                    this.bgmPlayer.jukeboxPlayer;
                if (c) {
                    null != window.mozInnerScreenX && /firefox/.test(navigator.userAgent.toLowerCase());
                    b = Boolean(window.chrome);
                    !window.chrome && /safari/.test(navigator.userAgent.toLowerCase());
                    var d = 0.1;
                    ig.ua.mobile && (d = 0.115, ig.ua.android && (d = 0.45, b && (d = 0.3)));
                    c.settings.spritemap.music && (b = c.settings.spritemap.music.end - d, c.getCurrentTime() >= b && (b = c.settings.spritemap.music.start, ig.ua.android ? this.forcelooped || (c.play(b, !0), this.forcelooped = !0, setTimeout(function() {
                        ig.soundHandler.forcelooped = !1
                    }, d)) : c.setCurrentTime(b)))
                } else "ImpactMusicPlayer" == this.bgmPlayer.tagName && (null != window.mozInnerScreenX && /firefox/.test(navigator.userAgent.toLowerCase()), b = Boolean(window.chrome), !window.chrome && /safari/.test(navigator.userAgent.toLowerCase()), d = 0.1, ig.ua.mobile && (d = 0.115, ig.ua.android && (d = 0.45, b && (d = 0.3))), c = 0, "mp3" == ig.soundManager.format.ext && (c = 0.05), ig.music.currentTrack && (b = ig.music.currentTrack.duration - d, ig.music.currentTrack.currentTime >= b && (ig.ua.android ? this.forcelooped || (ig.music.currentTrack.pause(),
                    ig.music.currentTrack.currentTime = c, ig.music.currentTrack.play(), this.forcelooped = !0, setTimeout(function() {
                        ig.soundHandler.forcelooped = !1
                    }, d)) : ig.music.currentTrack.currentTime = c)))
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.storage").defines(function() {
    ig.Storage = ig.Class.extend({
        staticInstantiate: function() {
            return !ig.Storage.instance ? null : ig.Storage.instance
        },
        init: function() {
            ig.Storage.instance = this
        },
        isCapable: function() {
            return "undefined" !== typeof window.localStorage
        },
        isSet: function(b) {
            return null !== this.get(b)
        },
        initUnset: function(b, c) {
            null === this.get(b) && this.set(b, c)
        },
        get: function(b) {
            if (!this.isCapable()) return null;
            try {
                return JSON.parse(localStorage.getItem(b))
            } catch (c) {
                return window.localStorage.getItem(b)
            }
        },
        getInt: function(b) {
            return ~~this.get(b)
        },
        getFloat: function(b) {
            return parseFloat(this.get(b))
        },
        getBool: function(b) {
            return !!this.get(b)
        },
        key: function(b) {
            return this.isCapable() ? window.localStorage.key(b) : null
        },
        set: function(b, c) {
            if (!this.isCapable()) return null;
            try {
                window.localStorage.setItem(b, JSON.stringify(c))
            } catch (d) {
                console.log(d)
            }
        },
        setHighest: function(b, c) {
            c > this.getFloat(b) && this.set(b, c)
        },
        remove: function(b) {
            if (!this.isCapable()) return null;
            window.localStorage.removeItem(b)
        },
        clear: function() {
            if (!this.isCapable()) return null;
            window.localStorage.clear()
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.mouse").defines(function() {
    Mouse = ig.Class.extend({
        bindings: {
            click: [ig.KEY.MOUSE1]
        },
        init: function() {
            ig.input.initMouse();
            for (var b in this.bindings) {
                this[b] = b;
                for (var c = 0; c < this.bindings[b].length; c++) ig.input.bind(this.bindings[b][c], b)
            }
        },
        getPos: function() {
            if (ig.ua.mobile) {
                var b = ig.input.mouse.x / ig.sizeHandler.sizeRatio.x,
                    c = ig.input.mouse.y / ig.sizeHandler.sizeRatio.y;
                return new Vector2(b / ig.sizeHandler.scaleRatioMultiplier.x, c / ig.sizeHandler.scaleRatioMultiplier.y)
            }
            b = ig.input.mouse.x /
                ig.sizeHandler.sizeRatio.x;
            c = ig.input.mouse.y / ig.sizeHandler.sizeRatio.y;
            return new Vector2(b, c)
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.keyboard").defines(function() {
    Keyboard = ig.Class.extend({
        bindings: {
            jump: [ig.KEY.W, ig.KEY.UP_ARROW],
            moveright: [ig.KEY.D, ig.KEY.RIGHT_ARROW],
            moveleft: [ig.KEY.A, ig.KEY.LEFT_ARROW],
            shoot: [ig.KEY.S, ig.KEY.DOWN_ARROW, ig.KEY.SPACE]
        },
        init: function() {
            for (var b in this.bindings) {
                this[b] = b;
                for (var c = 0; c < this.bindings[b].length; c++) ig.input.bind(this.bindings[b][c], b)
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.gamepad-input").defines(function() {
    ig.PADKEY = {
        BUTTON_0: 0,
        PADBUTTON_1: 1,
        BUTTON_2: 2,
        BUTTON_3: 3,
        BUTTON_LEFT_BUMPER: 4,
        BUTTON_RIGHT_BUMPER: 5,
        BUTTON_LEFT_TRIGGER: 6,
        BUTTON_RIGHT_TRIGGER: 7,
        BUTTON_LEFT_JOYSTICK: 10,
        BUTTON_RIGHT_JOYSTICK: 11,
        BUTTON_DPAD_UP: 12,
        BUTTON_DPAD_DOWN: 13,
        BUTTON_DPAD_LEFT: 14,
        BUTTON_DPAD_RIGHT: 15,
        BUTTON_MENU: 16,
        AXIS_LEFT_JOYSTICK_X: 0,
        AXIS_LEFT_JOYSTICK_Y: 1,
        AXIS_RIGHT_JOYSTICK_X: 2,
        AXIS_RIGHT_JOYSTICK_Y: 3
    };
    ig.GamepadInput = ig.Class.extend({
        isInit: !1,
        isSupported: !1,
        list: [],
        bindings: {},
        states: {},
        presses: {},
        releases: {},
        downLocks: {},
        upLocks: {},
        leftStick: {
            x: 0,
            y: 0
        },
        rightStick: {
            x: 0,
            y: 0
        },
        start: function() {
            if (!this.isInit) {
                this.isInit = !0;
                var b = navigator.getGamepads || navigator.webkitGetGamepads;
                b && (!navigator.getGamepads && navigator.webkitGetGamepads && (navigator.getGamepads = navigator.webkitGetGamepads), this.list = navigator.getGamepads());
                this.isSupported = b
            }
        },
        isAvailable: function() {
            return this.isInit && this.isSupported
        },
        buttonPressed: function(b) {
            return "object" == typeof b ? b.pressed :
                1 == b
        },
        buttonDown: function(b) {
            if (b = this.bindings[b]) this.states[b] = !0, this.downLocks[b] || (this.presses[b] = !0, this.downLocks[b] = !0)
        },
        buttonUp: function(b) {
            if ((b = this.bindings[b]) && this.downLocks[b] && !this.upLocks[b]) this.states[b] = !1, this.releases[b] = !0, this.upLocks[b] = !0
        },
        clearPressed: function() {
            for (var b in this.releases) this.states[b] = !1, this.downLocks[b] = !1;
            this.releases = {};
            this.presses = {};
            this.upLocks = {}
        },
        bind: function(b, c) {
            this.bindings[b] = c
        },
        unbind: function(b) {
            this.releases[this.bindings[b]] = !0;
            this.bindings[b] = null
        },
        unbindAll: function() {
            this.bindings = {};
            this.states = {};
            this.presses = {};
            this.releases = {};
            this.downLocks = {};
            this.upLocks = {}
        },
        state: function(b) {
            return this.states[b]
        },
        pressed: function(b) {
            return this.presses[b]
        },
        released: function(b) {
            return this.releases[b]
        },
        clamp: function(b, c, d) {
            return b < c ? c : b > d ? d : b
        },
        pollGamepads: function() {
            if (this.isSupported) {
                this.leftStick.x = 0;
                this.leftStick.y = 0;
                this.rightStick.x = 0;
                this.rightStick.y = 0;
                this.list = navigator.getGamepads();
                for (var b in this.bindings) {
                    for (var c = !1, d = 0; d < this.list.length; d++) {
                        var e = this.list[d];
                        if (e && e.buttons && this.buttonPressed(e.buttons[b])) {
                            c = !0;
                            break
                        }
                    }
                    c ? this.buttonDown(b) : this.buttonUp(b)
                }
                for (d = 0; d < this.list.length; d++)
                    if ((e = this.list[d]) && e.axes) {
                        b = e.axes[ig.GAMEPADINPUT.AXIS_LEFT_JOYSTICK_X];
                        var c = e.axes[ig.GAMEPADINPUT.AXIS_LEFT_JOYSTICK_Y],
                            f = e.axes[ig.GAMEPADINPUT.AXIS_RIGHT_JOYSTICK_X],
                            e = e.axes[ig.GAMEPADINPUT.AXIS_RIGHT_JOYSTICK_Y];
                        this.leftStick.x += isNaN(b) ? 0 : b;
                        this.leftStick.y += isNaN(c) ? 0 : c;
                        this.rightStick.x += isNaN(f) ? 0 : f;
                        this.rightStick.y +=
                            isNaN(e) ? 0 : e
                    }
                0 < this.list.length && (this.leftStick.x = this.clamp(this.leftStick.x, -1, 1), this.leftStick.y = this.clamp(this.leftStick.y, -1, 1), this.rightStick.x = this.clamp(this.rightStick.x, -1, 1), this.rightStick.y = this.clamp(this.rightStick.y, -1, 1))
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.gamepad").requires("plugins.io.gamepad-input").defines(function() {
    Gamepad = ig.Class.extend({
        bindings: {
            padJump: [ig.PADKEY.BUTTON_0]
        },
        init: function() {
            ig.gamepadInput.start();
            for (var b in this.bindings)
                for (var c = 0; c < this.bindings[b].length; c++) ig.gamepadInput.bind(this.bindings[b][c], b)
        },
        press: function() {},
        held: function() {},
        release: function() {}
    })
});
ig.baked = !0;
ig.module("plugins.io.multitouch").defines(function() {
    Multitouch = ig.Class.extend({
        init: function() {
            ig.multitouchInput.start()
        },
        getTouchesPos: function() {
            if (ig.ua.mobile) {
                if (0 < ig.multitouchInput.touches.length) {
                    for (var b = [], c = 0; c < ig.multitouchInput.touches.length; c++) {
                        var d = ig.multitouchInput.touches[c];
                        b.push({
                            x: d.x,
                            y: d.y
                        })
                    }
                    return b
                }
                return null
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.multitouch-input").defines(function() {
    ig.MultitouchInput = ig.Class.extend({
        isStart: !1,
        touches: [],
        multitouchCapable: !1,
        lastEventUp: null,
        start: function() {
            this.isStart || (this.isStart = !0, navigator.maxTouchPoints && 1 < navigator.maxTouchPoints && (this.multitouchCapable = !0), ig.ua.touchDevice && (window.navigator.msPointerEnabled && (ig.system.canvas.addEventListener("MSPointerDown", this.touchdown.bind(this), !1), ig.system.canvas.addEventListener("MSPointerUp", this.touchup.bind(this), !1), ig.system.canvas.addEventListener("MSPointerMove",
                this.touchmove.bind(this), !1), ig.system.canvas.style.msContentZooming = "none", ig.system.canvas.style.msTouchAction = "none"), ig.system.canvas.addEventListener("touchstart", this.touchdown.bind(this), !1), ig.system.canvas.addEventListener("touchend", this.touchup.bind(this), !1), ig.system.canvas.addEventListener("touchmove", this.touchmove.bind(this), !1)))
        },
        touchmove: function(b) {
            if (ig.ua.touchDevice) {
                var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
                    d = parseInt(ig.system.canvas.offsetHeight) ||
                    ig.system.realHeight,
                    c = ig.system.scale * (c / ig.system.realWidth),
                    d = ig.system.scale * (d / ig.system.realHeight);
                if (b.touches) {
                    for (; 0 < this.touches.length;) this.touches.pop();
                    !this.multitouchCapable && 1 < b.touches.length && (this.multitouchCapable = !0);
                    var e = {
                        left: 0,
                        top: 0
                    };
                    ig.system.canvas.getBoundingClientRect && (e = ig.system.canvas.getBoundingClientRect());
                    for (var f = 0; f < b.touches.length; f++) {
                        var j = b.touches[f];
                        j && this.touches.push({
                            x: (j.clientX - e.left) / c,
                            y: (j.clientY - e.top) / d
                        })
                    }
                } else this.windowMove(b)
            }
        },
        touchdown: function(b) {
            var c =
                parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
                d = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
                c = ig.system.scale * (c / ig.system.realWidth),
                d = ig.system.scale * (d / ig.system.realHeight);
            if (window.navigator.msPointerEnabled) this.windowKeyDown(b);
            else if (ig.ua.touchDevice && b.touches) {
                for (; 0 < this.touches.length;) this.touches.pop();
                !this.multitouchCapable && 1 < b.touches.length && (this.multitouchCapable = !0);
                var e = {
                    left: 0,
                    top: 0
                };
                ig.system.canvas.getBoundingClientRect && (e = ig.system.canvas.getBoundingClientRect());
                for (var f = 0; f < b.touches.length; f++) {
                    var j = b.touches[f];
                    j && this.touches.push({
                        x: (j.clientX - e.left) / c,
                        y: (j.clientY - e.top) / d
                    })
                }
            }
        },
        touchup: function(b) {
            var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth;
            parseInt(ig.system.canvas.offsetHeight);
            c = ig.system.scale * (c / ig.system.realWidth);
            if (window.navigator.msPointerEnabled) this.windowKeyUp(b);
            else {
                this.lastEventUp = b;
                var d = {
                    left: 0,
                    top: 0
                };
                ig.system.canvas.getBoundingClientRect && (d = ig.system.canvas.getBoundingClientRect());
                if (ig.ua.touchDevice) {
                    b =
                        (b.changedTouches[0].clientX - d.left) / c;
                    for (c = 0; c < this.touches.length; c++) this.touches[c].x >= b - 40 && this.touches[c].x <= b + 40 && this.touches.splice(c, 1)
                }
            }
        },
        windowKeyDown: function(b) {
            var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
                d = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
                c = ig.system.scale * (c / ig.system.realWidth),
                d = ig.system.scale * (d / ig.system.realHeight);
            if (window.navigator.msPointerEnabled) {
                var e = {
                    left: 0,
                    top: 0
                };
                ig.system.canvas.getBoundingClientRect && (e = ig.system.canvas.getBoundingClientRect());
                b = b.changedTouches ? b.changedTouches : [b];
                for (var f = 0; f < b.length; ++f) {
                    for (var j = b[f], n = "undefined" != typeof j.identifier ? j.identifier : "undefined" != typeof j.pointerId ? j.pointerId : 1, l = (j.clientX - e.left) / c, j = (j.clientY - e.top) / d, g = 0; g < this.touches.length; ++g) this.touches[g].identifier == n && this.touches.splice(g, 1);
                    this.touches.push({
                        x: l,
                        y: j,
                        identifier: n
                    })
                }
                for (c = 0; c < this.touches.length; c++);
            }
        },
        windowKeyUp: function(b) {
            b = "undefined" != typeof b.identifier ? b.identifier : "undefined" != typeof b.pointerId ? b.pointerId :
                1;
            for (var c = 0; c < this.touches.length; ++c) this.touches[c].identifier == b && this.touches.splice(c, 1);
            for (; 0 < this.touches.length;) this.touches.pop()
        },
        windowMove: function(b) {
            var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
                d = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
                c = ig.system.scale * (c / ig.system.realWidth),
                d = ig.system.scale * (d / ig.system.realHeight),
                e = {
                    left: 0,
                    top: 0
                };
            ig.system.canvas.getBoundingClientRect && (e = ig.system.canvas.getBoundingClientRect());
            if (window.navigator.msPointerEnabled)
                for (var f =
                        "undefined" != typeof b.identifier ? b.identifier : "undefined" != typeof b.pointerId ? b.pointerId : 1, j = 0; j < this.touches.length; ++j)
                    if (this.touches[j].identifier == f) {
                        var n = (b.clientY - e.top) / d;
                        this.touches[j].x = (b.clientX - e.left) / c;
                        this.touches[j].y = n
                    }
        }
    })
});
ig.baked = !0;
ig.module("impact.animation").requires("impact.timer", "impact.image").defines(function() {
    ig.AnimationSheet = ig.Class.extend({
        width: 8,
        height: 8,
        image: null,
        init: function(b, c, d) {
            this.width = c;
            this.height = d;
            this.image = new ig.Image(b)
        }
    });
    ig.Animation = ig.Class.extend({
        sheet: null,
        timer: null,
        sequence: [],
        flip: {
            x: !1,
            y: !1
        },
        pivot: {
            x: 0,
            y: 0
        },
        frame: 0,
        tile: 0,
        loopCount: 0,
        alpha: 1,
        angle: 0,
        init: function(b, c, d, e) {
            this.sheet = b;
            this.pivot = {
                x: b.width / 2,
                y: b.height / 2
            };
            this.timer = new ig.Timer;
            this.frameTime = c;
            this.sequence = d;
            this.stop = !!e;
            this.tile = this.sequence[0]
        },
        rewind: function() {
            this.timer.set();
            this.frame = this.loopCount = 0;
            this.tile = this.sequence[0];
            return this
        },
        gotoFrame: function(b) {
            this.timer.set(this.frameTime * -b - 1E-4);
            this.update()
        },
        gotoRandomFrame: function() {
            this.gotoFrame(Math.floor(Math.random() * this.sequence.length))
        },
        update: function() {
            var b = Math.floor(this.timer.delta() / this.frameTime);
            this.loopCount = Math.floor(b / this.sequence.length);
            this.frame = this.stop && 0 < this.loopCount ? this.sequence.length - 1 : b % this.sequence.length;
            this.tile = this.sequence[this.frame]
        },
        draw: function(b, c) {
            var d = Math.max(this.sheet.width, this.sheet.height);
            b > ig.system.width || (c > ig.system.height || 0 > b + d || 0 > c + d) || (1 != this.alpha && (ig.system.context.globalAlpha = this.alpha), 0 == this.angle ? this.sheet.image.drawTile(b, c, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y) : (ig.system.context.save(), ig.system.context.translate(ig.system.getDrawPos(b + this.pivot.x), ig.system.getDrawPos(c + this.pivot.y)), ig.system.context.rotate(this.angle),
                this.sheet.image.drawTile(-this.pivot.x, -this.pivot.y, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y), ig.system.context.restore()), 1 != this.alpha && (ig.system.context.globalAlpha = 1))
        }
    })
});
ig.baked = !0;
ig.module("impact.entity").requires("impact.animation", "impact.impact").defines(function() {
    ig.Entity = ig.Class.extend({
        id: 0,
        settings: {},
        size: {
            x: 16,
            y: 16
        },
        offset: {
            x: 0,
            y: 0
        },
        pos: {
            x: 0,
            y: 0
        },
        last: {
            x: 0,
            y: 0
        },
        vel: {
            x: 0,
            y: 0
        },
        accel: {
            x: 0,
            y: 0
        },
        friction: {
            x: 0,
            y: 0
        },
        maxVel: {
            x: 100,
            y: 100
        },
        zIndex: 0,
        gravityFactor: 0,
        standing: !1,
        bounciness: 0,
        minBounceVelocity: 40,
        anims: {},
        animSheet: null,
        currentAnim: null,
        health: 10,
        type: 0,
        checkAgainst: 0,
        collides: 0,
        _killed: !1,
        slopeStanding: {
            min: (44).toRad(),
            max: (136).toRad()
        },
        init: function(b,
            c, d) {
            this.id = ++ig.Entity._lastId;
            this.pos.x = this.last.x = b;
            this.pos.y = this.last.y = c;
            ig.merge(this, d)
        },
        reset: function(b, c, d) {
            var e = this.constructor.prototype;
            this.pos.x = b;
            this.pos.y = c;
            this.last.x = b;
            this.last.y = c;
            this.vel.x = e.vel.x;
            this.vel.y = e.vel.y;
            this.accel.x = e.accel.x;
            this.accel.y = e.accel.y;
            this.health = e.health;
            this._killed = e._killed;
            this.standing = e.standing;
            this.type = e.type;
            this.checkAgainst = e.checkAgainst;
            this.collides = e.collides;
            ig.merge(this, d)
        },
        addAnim: function(b, c, d, e) {
            if (!this.animSheet) throw "No animSheet to add the animation " +
                b + " to.";
            c = new ig.Animation(this.animSheet, c, d, e);
            this.anims[b] = c;
            this.currentAnim || (this.currentAnim = c);
            return c
        },
        update: function() {
            this.last.x = this.pos.x;
            this.last.y = this.pos.y;
            this.vel.y += ig.game.gravity * ig.system.tick * this.gravityFactor;
            this.vel.x = this.getNewVelocity(this.vel.x, this.accel.x, this.friction.x, this.maxVel.x);
            this.vel.y = this.getNewVelocity(this.vel.y, this.accel.y, this.friction.y, this.maxVel.y);
            var b = ig.game.collisionMap.trace(this.pos.x, this.pos.y, this.vel.x * ig.system.tick, this.vel.y *
                ig.system.tick, this.size.x, this.size.y);
            this.handleMovementTrace(b);
            this.currentAnim && this.currentAnim.update()
        },
        getNewVelocity: function(b, c, d, e) {
            return c ? (b + c * ig.system.tick).limit(-e, e) : d ? (c = d * ig.system.tick, 0 < b - c ? b - c : 0 > b + c ? b + c : 0) : b.limit(-e, e)
        },
        handleMovementTrace: function(b) {
            this.standing = !1;
            b.collision.y && (0 < this.bounciness && Math.abs(this.vel.y) > this.minBounceVelocity ? this.vel.y *= -this.bounciness : (0 < this.vel.y && (this.standing = !0), this.vel.y = 0));
            b.collision.x && (this.vel.x = 0 < this.bounciness && Math.abs(this.vel.x) >
                this.minBounceVelocity ? this.vel.x * -this.bounciness : 0);
            if (b.collision.slope) {
                var c = b.collision.slope;
                if (0 < this.bounciness) {
                    var d = this.vel.x * c.nx + this.vel.y * c.ny;
                    this.vel.x = (this.vel.x - 2 * c.nx * d) * this.bounciness;
                    this.vel.y = (this.vel.y - 2 * c.ny * d) * this.bounciness
                } else d = (this.vel.x * c.x + this.vel.y * c.y) / (c.x * c.x + c.y * c.y), this.vel.x = c.x * d, this.vel.y = c.y * d, c = Math.atan2(c.x, c.y), c > this.slopeStanding.min && c < this.slopeStanding.max && (this.standing = !0)
            }
            this.pos = b.pos
        },
        draw: function() {
            this.currentAnim && this.currentAnim.draw(this.pos.x -
                this.offset.x - ig.game._rscreen.x, this.pos.y - this.offset.y - ig.game._rscreen.y)
        },
        kill: function() {
            ig.game.removeEntity(this)
        },
        receiveDamage: function(b) {
            this.health -= b;
            0 >= this.health && this.kill()
        },
        touches: function(b) {
            return !(this.pos.x >= b.pos.x + b.size.x || this.pos.x + this.size.x <= b.pos.x || this.pos.y >= b.pos.y + b.size.y || this.pos.y + this.size.y <= b.pos.y)
        },
        distanceTo: function(b) {
            var c = this.pos.x + this.size.x / 2 - (b.pos.x + b.size.x / 2);
            b = this.pos.y + this.size.y / 2 - (b.pos.y + b.size.y / 2);
            return Math.sqrt(c * c + b * b)
        },
        angleTo: function(b) {
            return Math.atan2(b.pos.y +
                b.size.y / 2 - (this.pos.y + this.size.y / 2), b.pos.x + b.size.x / 2 - (this.pos.x + this.size.x / 2))
        },
        check: function() {},
        collideWith: function() {},
        ready: function() {},
        erase: function() {}
    });
    ig.Entity._lastId = 0;
    ig.Entity.COLLIDES = {
        NEVER: 0,
        LITE: 1,
        PASSIVE: 2,
        ACTIVE: 4,
        FIXED: 8
    };
    ig.Entity.TYPE = {
        NONE: 0,
        A: 1,
        B: 2,
        BOTH: 3
    };
    ig.Entity.checkPair = function(b, c) {
        b.checkAgainst & c.type && b.check(c);
        c.checkAgainst & b.type && c.check(b);
        b.collides && (c.collides && b.collides + c.collides > ig.Entity.COLLIDES.ACTIVE) && ig.Entity.solveCollision(b, c)
    };
    ig.Entity.solveCollision =
        function(b, c) {
            var d = null;
            if (b.collides == ig.Entity.COLLIDES.LITE || c.collides == ig.Entity.COLLIDES.FIXED) d = b;
            else if (c.collides == ig.Entity.COLLIDES.LITE || b.collides == ig.Entity.COLLIDES.FIXED) d = c;
            b.last.x + b.size.x > c.last.x && b.last.x < c.last.x + c.size.x ? (b.last.y < c.last.y ? ig.Entity.seperateOnYAxis(b, c, d) : ig.Entity.seperateOnYAxis(c, b, d), b.collideWith(c, "y"), c.collideWith(b, "y")) : b.last.y + b.size.y > c.last.y && b.last.y < c.last.y + c.size.y && (b.last.x < c.last.x ? ig.Entity.seperateOnXAxis(b, c, d) : ig.Entity.seperateOnXAxis(c,
                b, d), b.collideWith(c, "x"), c.collideWith(b, "x"))
        };
    ig.Entity.seperateOnXAxis = function(b, c, d) {
        var e = b.pos.x + b.size.x - c.pos.x;
        d ? (d.vel.x = -d.vel.x * d.bounciness + (b === d ? c : b).vel.x, c = ig.game.collisionMap.trace(d.pos.x, d.pos.y, d == b ? -e : e, 0, d.size.x, d.size.y), d.pos.x = c.pos.x) : (d = (b.vel.x - c.vel.x) / 2, b.vel.x = -d, c.vel.x = d, d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, -e / 2, 0, b.size.x, b.size.y), b.pos.x = Math.floor(d.pos.x), b = ig.game.collisionMap.trace(c.pos.x, c.pos.y, e / 2, 0, c.size.x, c.size.y), c.pos.x = Math.ceil(b.pos.x))
    };
    ig.Entity.seperateOnYAxis = function(b, c, d) {
        var e = b.pos.y + b.size.y - c.pos.y;
        if (d) {
            c = b === d ? c : b;
            d.vel.y = -d.vel.y * d.bounciness + c.vel.y;
            var f = 0;
            d == b && Math.abs(d.vel.y - c.vel.y) < d.minBounceVelocity && (d.standing = !0, f = c.vel.x * ig.system.tick);
            b = ig.game.collisionMap.trace(d.pos.x, d.pos.y, f, d == b ? -e : e, d.size.x, d.size.y);
            d.pos.y = b.pos.y;
            d.pos.x = b.pos.x
        } else ig.game.gravity && (c.standing || 0 < b.vel.y) ? (d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, 0, -(b.pos.y + b.size.y - c.pos.y), b.size.x, b.size.y), b.pos.y = d.pos.y, 0 < b.bounciness &&
            b.vel.y > b.minBounceVelocity ? b.vel.y *= -b.bounciness : (b.standing = !0, b.vel.y = 0)) : (d = (b.vel.y - c.vel.y) / 2, b.vel.y = -d, c.vel.y = d, f = c.vel.x * ig.system.tick, d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, f, -e / 2, b.size.x, b.size.y), b.pos.y = d.pos.y, b = ig.game.collisionMap.trace(c.pos.x, c.pos.y, 0, e / 2, c.size.x, c.size.y), c.pos.y = b.pos.y)
    }
});
ig.baked = !0;
ig.module("impact.map").defines(function() {
    ig.Map = ig.Class.extend({
        tilesize: 8,
        width: 1,
        height: 1,
        data: [
            []
        ],
        name: null,
        init: function(b, c) {
            this.tilesize = b;
            this.data = c;
            this.height = c.length;
            this.width = c[0].length;
            this.pxWidth = this.width * this.tilesize;
            this.pxHeight = this.height * this.tilesize
        },
        getTile: function(b, c) {
            var d = Math.floor(b / this.tilesize),
                e = Math.floor(c / this.tilesize);
            return 0 <= d && d < this.width && 0 <= e && e < this.height ? this.data[e][d] : 0
        },
        setTile: function(b, c, d) {
            b = Math.floor(b / this.tilesize);
            c = Math.floor(c /
                this.tilesize);
            0 <= b && b < this.width && (0 <= c && c < this.height) && (this.data[c][b] = d)
        }
    })
});
ig.baked = !0;
ig.module("impact.collision-map").requires("impact.map").defines(function() {
    ig.CollisionMap = ig.Map.extend({
        lastSlope: 1,
        tiledef: null,
        init: function(b, c, f) {
            this.parent(b, c);
            this.tiledef = f || ig.CollisionMap.defaultTileDef;
            for (var j in this.tiledef) j | 0 > this.lastSlope && (this.lastSlope = j | 0)
        },
        trace: function(b, c, f, j, n, l) {
            var g = {
                    collision: {
                        x: !1,
                        y: !1,
                        slope: !1
                    },
                    pos: {
                        x: b,
                        y: c
                    },
                    tile: {
                        x: 0,
                        y: 0
                    }
                },
                r = Math.ceil(Math.max(Math.abs(f), Math.abs(j)) / this.tilesize);
            if (1 < r)
                for (var y = f / r, z = j / r, A = 0; A < r && (y || z) && !(this._traceStep(g,
                        b, c, y, z, n, l, f, j, A), b = g.pos.x, c = g.pos.y, g.collision.x && (f = y = 0), g.collision.y && (j = z = 0), g.collision.slope); A++);
            else this._traceStep(g, b, c, f, j, n, l, f, j, 0);
            return g
        },
        _traceStep: function(b, c, f, j, n, l, g, r, y, z) {
            b.pos.x += j;
            b.pos.y += n;
            var A = 0;
            if (j) {
                var B = 0 < j ? l : 0,
                    E = 0 > j ? this.tilesize : 0,
                    A = Math.max(Math.floor(f / this.tilesize), 0),
                    D = Math.min(Math.ceil((f + g) / this.tilesize), this.height);
                j = Math.floor((b.pos.x + B) / this.tilesize);
                var u = Math.floor((c + B) / this.tilesize);
                if (0 < z || j == u || 0 > u || u >= this.width) u = -1;
                if (0 <= j && j < this.width)
                    for (var G =
                            A; G < D && !(-1 != u && (A = this.data[G][u], 1 < A && A <= this.lastSlope && this._checkTileDef(b, A, c, f, r, y, l, g, u, G))); G++)
                        if (A = this.data[G][j], 1 == A || A > this.lastSlope || 1 < A && this._checkTileDef(b, A, c, f, r, y, l, g, j, G)) {
                            if (1 < A && A <= this.lastSlope && b.collision.slope) break;
                            b.collision.x = !0;
                            b.tile.x = A;
                            c = b.pos.x = j * this.tilesize - B + E;
                            r = 0;
                            break
                        }
            }
            if (n) {
                B = 0 < n ? g : 0;
                n = 0 > n ? this.tilesize : 0;
                A = Math.max(Math.floor(b.pos.x / this.tilesize), 0);
                E = Math.min(Math.ceil((b.pos.x + l) / this.tilesize), this.width);
                G = Math.floor((b.pos.y + B) / this.tilesize);
                D = Math.floor((f + B) / this.tilesize);
                if (0 < z || G == D || 0 > D || D >= this.height) D = -1;
                if (0 <= G && G < this.height)
                    for (j = A; j < E && !(-1 != D && (A = this.data[D][j], 1 < A && A <= this.lastSlope && this._checkTileDef(b, A, c, f, r, y, l, g, j, D))); j++)
                        if (A = this.data[G][j], 1 == A || A > this.lastSlope || 1 < A && this._checkTileDef(b, A, c, f, r, y, l, g, j, G)) {
                            if (1 < A && A <= this.lastSlope && b.collision.slope) break;
                            b.collision.y = !0;
                            b.tile.y = A;
                            b.pos.y = G * this.tilesize - B + n;
                            break
                        }
            }
        },
        _checkTileDef: function(b, c, f, j, n, l, g, r, y, z) {
            var A = this.tiledef[c];
            if (!A) return !1;
            c = (A[2] -
                A[0]) * this.tilesize;
            var B = (A[3] - A[1]) * this.tilesize,
                E = A[4];
            g = f + n + (0 > B ? g : 0) - (y + A[0]) * this.tilesize;
            r = j + l + (0 < c ? r : 0) - (z + A[1]) * this.tilesize;
            if (0 < c * r - B * g) {
                if (0 > n * -B + l * c) return E;
                y = Math.sqrt(c * c + B * B);
                z = B / y;
                y = -c / y;
                var D = g * z + r * y,
                    A = z * D,
                    D = y * D;
                if (A * A + D * D >= n * n + l * l) return E || 0.5 > c * (r - l) - B * (g - n);
                b.pos.x = f + n - A;
                b.pos.y = j + l - D;
                b.collision.slope = {
                    x: c,
                    y: B,
                    nx: z,
                    ny: y
                };
                return !0
            }
            return !1
        }
    });
    var b = 1 / 3,
        c = 2 / 3;
    ig.CollisionMap.defaultTileDef = {
        5: [0, 1, 1, c, !0],
        6: [0, c, 1, b, !0],
        7: [0, b, 1, 0, !0],
        3: [0, 1, 1, 0.5, !0],
        4: [0, 0.5, 1, 0, !0],
        2: [0,
            1, 1, 0, !0
        ],
        10: [0.5, 1, 1, 0, !0],
        21: [0, 1, 0.5, 0, !0],
        32: [c, 1, 1, 0, !0],
        43: [b, 1, c, 0, !0],
        54: [0, 1, b, 0, !0],
        27: [0, 0, 1, b, !0],
        28: [0, b, 1, c, !0],
        29: [0, c, 1, 1, !0],
        25: [0, 0, 1, 0.5, !0],
        26: [0, 0.5, 1, 1, !0],
        24: [0, 0, 1, 1, !0],
        11: [0, 0, 0.5, 1, !0],
        22: [0.5, 0, 1, 1, !0],
        33: [0, 0, b, 1, !0],
        44: [b, 0, c, 1, !0],
        55: [c, 0, 1, 1, !0],
        16: [1, b, 0, 0, !0],
        17: [1, c, 0, b, !0],
        18: [1, 1, 0, c, !0],
        14: [1, 0.5, 0, 0, !0],
        15: [1, 1, 0, 0.5, !0],
        13: [1, 1, 0, 0, !0],
        8: [0.5, 1, 0, 0, !0],
        19: [1, 1, 0.5, 0, !0],
        30: [b, 1, 0, 0, !0],
        41: [c, 1, b, 0, !0],
        52: [1, 1, c, 0, !0],
        38: [1, c, 0, 1, !0],
        39: [1, b, 0, c, !0],
        40: [1, 0,
            0, b, !0
        ],
        36: [1, 0.5, 0, 1, !0],
        37: [1, 0, 0, 0.5, !0],
        35: [1, 0, 0, 1, !0],
        9: [1, 0, 0.5, 1, !0],
        20: [0.5, 0, 0, 1, !0],
        31: [1, 0, c, 1, !0],
        42: [c, 0, b, 1, !0],
        53: [b, 0, 0, 1, !0],
        12: [0, 0, 1, 0, !1],
        23: [1, 1, 0, 1, !1],
        34: [1, 0, 1, 1, !1],
        45: [0, 1, 0, 0, !1]
    };
    ig.CollisionMap.staticNoCollision = {
        trace: function(b, c, f, j) {
            return {
                collision: {
                    x: !1,
                    y: !1,
                    slope: !1
                },
                pos: {
                    x: b + f,
                    y: c + j
                },
                tile: {
                    x: 0,
                    y: 0
                }
            }
        }
    }
});
ig.baked = !0;
ig.module("impact.background-map").requires("impact.map", "impact.image").defines(function() {
    ig.BackgroundMap = ig.Map.extend({
        tiles: null,
        scroll: {
            x: 0,
            y: 0
        },
        distance: 1,
        repeat: !1,
        tilesetName: "",
        foreground: !1,
        enabled: !0,
        preRender: !1,
        preRenderedChunks: null,
        chunkSize: 512,
        debugChunks: !1,
        anims: {},
        init: function(b, c, d) {
            this.parent(b, c);
            this.setTileset(d)
        },
        setTileset: function(b) {
            this.tilesetName = b instanceof ig.Image ? b.path : b;
            this.tiles = new ig.Image(this.tilesetName);
            this.preRenderedChunks = null
        },
        setScreenPos: function(b,
            c) {
            this.scroll.x = b / this.distance;
            this.scroll.y = c / this.distance
        },
        preRenderMapToChunks: function() {
            var b = this.width * this.tilesize * ig.system.scale,
                c = this.height * this.tilesize * ig.system.scale;
            this.chunkSize = Math.min(Math.max(b, c), this.chunkSize);
            var d = Math.ceil(b / this.chunkSize),
                e = Math.ceil(c / this.chunkSize);
            this.preRenderedChunks = [];
            for (var f = 0; f < e; f++) {
                this.preRenderedChunks[f] = [];
                for (var j = 0; j < d; j++) this.preRenderedChunks[f][j] = this.preRenderChunk(j, f, j == d - 1 ? b - j * this.chunkSize : this.chunkSize, f == e - 1 ?
                    c - f * this.chunkSize : this.chunkSize)
            }
        },
        preRenderChunk: function(b, c, d, e) {
            var f = d / this.tilesize / ig.system.scale + 1,
                j = e / this.tilesize / ig.system.scale + 1,
                n = b * this.chunkSize / ig.system.scale % this.tilesize,
                l = c * this.chunkSize / ig.system.scale % this.tilesize;
            b = Math.floor(b * this.chunkSize / this.tilesize / ig.system.scale);
            c = Math.floor(c * this.chunkSize / this.tilesize / ig.system.scale);
            var g = ig.$new("canvas");
            g.width = d;
            g.height = e;
            g.retinaResolutionEnabled = !1;
            e = g.getContext("2d");
            ig.System.scaleMode(g, e);
            d = ig.system.context;
            ig.system.context = e;
            for (e = 0; e < f; e++)
                for (var r = 0; r < j; r++)
                    if (e + b < this.width && r + c < this.height) {
                        var y = this.data[r + c][e + b];
                        y && this.tiles.drawTile(e * this.tilesize - n, r * this.tilesize - l, y - 1, this.tilesize)
                    }
            ig.system.context = d;
            return g
        },
        draw: function() {
            this.tiles.loaded && this.enabled && (this.preRender ? this.drawPreRendered() : this.drawTiled())
        },
        drawPreRendered: function() {
            this.preRenderedChunks || this.preRenderMapToChunks();
            var b = ig.system.getDrawPos(this.scroll.x),
                c = ig.system.getDrawPos(this.scroll.y);
            if (this.repeat) var d =
                this.width * this.tilesize * ig.system.scale,
                b = (b % d + d) % d,
                d = this.height * this.tilesize * ig.system.scale,
                c = (c % d + d) % d;
            var d = Math.max(Math.floor(b / this.chunkSize), 0),
                e = Math.max(Math.floor(c / this.chunkSize), 0),
                f = Math.ceil((b + ig.system.realWidth) / this.chunkSize),
                j = Math.ceil((c + ig.system.realHeight) / this.chunkSize),
                n = this.preRenderedChunks[0].length,
                l = this.preRenderedChunks.length;
            this.repeat || (f = Math.min(f, n), j = Math.min(j, l));
            for (var g = 0; e < j; e++) {
                for (var r = 0, y = d; y < f; y++) {
                    var z = this.preRenderedChunks[e % l][y % n],
                        A = -b + y * this.chunkSize - r,
                        B = -c + e * this.chunkSize - g;
                    ig.system.context.drawImage(z, A, B);
                    ig.Image.drawCount++;
                    this.debugChunks && (ig.system.context.strokeStyle = "#f0f", ig.system.context.strokeRect(A, B, this.chunkSize, this.chunkSize));
                    this.repeat && (z.width < this.chunkSize && A + z.width < ig.system.realWidth) && (r += this.chunkSize - z.width, f++)
                }
                this.repeat && (z.height < this.chunkSize && B + z.height < ig.system.realHeight) && (g += this.chunkSize - z.height, j++)
            }
        },
        drawTiled: function() {
            for (var b = 0, c = null, d = (this.scroll.x / this.tilesize).toInt(),
                    e = (this.scroll.y / this.tilesize).toInt(), f = this.scroll.x % this.tilesize, j = this.scroll.y % this.tilesize, n = -f - this.tilesize, f = ig.system.width + this.tilesize - f, l = ig.system.height + this.tilesize - j, g = -1, j = -j - this.tilesize; j < l; g++, j += this.tilesize) {
                var r = g + e;
                if (r >= this.height || 0 > r) {
                    if (!this.repeat) continue;
                    r = (r % this.height + this.height) % this.height
                }
                for (var y = -1, z = n; z < f; y++, z += this.tilesize) {
                    b = y + d;
                    if (b >= this.width || 0 > b) {
                        if (!this.repeat) continue;
                        b = (b % this.width + this.width) % this.width
                    }
                    if (b = this.data[r][b])(c = this.anims[b -
                        1]) ? c.draw(z, j) : this.tiles.drawTile(z, j, b - 1, this.tilesize)
                }
            }
        }
    })
});
ig.baked = !0;
ig.module("impact.game").requires("impact.impact", "impact.entity", "impact.collision-map", "impact.background-map").defines(function() {
    ig.Game = ig.Class.extend({
        clearColor: "#000000",
        gravity: 0,
        screen: {
            x: 0,
            y: 0
        },
        _rscreen: {
            x: 0,
            y: 0
        },
        entities: [],
        namedEntities: {},
        collisionMap: ig.CollisionMap.staticNoCollision,
        backgroundMaps: [],
        backgroundAnims: {},
        autoSort: !1,
        sortBy: null,
        cellSize: 64,
        _deferredKill: [],
        _levelToLoad: null,
        _doSortEntities: !1,
        staticInstantiate: function() {
            this.sortBy = this.sortBy || ig.Game.SORT.Z_INDEX;
            ig.game = this;
            return null
        },
        loadLevel: function(b) {
            this.screen = {
                x: 0,
                y: 0
            };
            this.entities = [];
            this.namedEntities = {};
            for (var c = 0; c < b.entities.length; c++) {
                var d = b.entities[c];
                this.spawnEntity(d.type, d.x, d.y, d.settings)
            }
            this.sortEntities();
            this.collisionMap = ig.CollisionMap.staticNoCollision;
            this.backgroundMaps = [];
            for (c = 0; c < b.layer.length; c++)
                if (d = b.layer[c], "collision" == d.name) this.collisionMap = new ig.CollisionMap(d.tilesize, d.data);
                else {
                    var e = new ig.BackgroundMap(d.tilesize, d.data, d.tilesetName);
                    e.anims = this.backgroundAnims[d.tilesetName] || {};
                    e.repeat = d.repeat;
                    e.distance = d.distance;
                    e.foreground = !!d.foreground;
                    e.preRender = !!d.preRender;
                    e.name = d.name;
                    this.backgroundMaps.push(e)
                }
            for (c = 0; c < this.entities.length; c++) this.entities[c].ready()
        },
        loadLevelDeferred: function(b) {
            this._levelToLoad = b
        },
        getMapByName: function(b) {
            if ("collision" == b) return this.collisionMap;
            for (var c = 0; c < this.backgroundMaps.length; c++)
                if (this.backgroundMaps[c].name == b) return this.backgroundMaps[c];
            return null
        },
        getEntityByName: function(b) {
            return this.namedEntities[b]
        },
        getEntitiesByType: function(b) {
            b =
                "string" === typeof b ? ig.global[b] : b;
            for (var c = [], d = 0; d < this.entities.length; d++) {
                var e = this.entities[d];
                e instanceof b && !e._killed && c.push(e)
            }
            return c
        },
        spawnEntity: function(b, c, d, e) {
            var f = "string" === typeof b ? ig.global[b] : b;
            if (!f) throw "Can't spawn entity of type " + b;
            b = new f(c, d, e || {});
            this.entities.push(b);
            b.name && (this.namedEntities[b.name] = b);
            return b
        },
        sortEntities: function() {
            this.entities.sort(this.sortBy)
        },
        sortEntitiesDeferred: function() {
            this._doSortEntities = !0
        },
        removeEntity: function(b) {
            b.name &&
                delete this.namedEntities[b.name];
            b._killed = !0;
            b.type = ig.Entity.TYPE.NONE;
            b.checkAgainst = ig.Entity.TYPE.NONE;
            b.collides = ig.Entity.COLLIDES.NEVER;
            this._deferredKill.push(b)
        },
        run: function() {
            this.update();
            this.draw()
        },
        update: function() {
            this._levelToLoad && (this.loadLevel(this._levelToLoad), this._levelToLoad = null);
            this.updateEntities();
            this.checkEntities();
            for (var b = 0; b < this._deferredKill.length; b++) this._deferredKill[b].erase(), this.entities.erase(this._deferredKill[b]);
            this._deferredKill = [];
            if (this._doSortEntities ||
                this.autoSort) this.sortEntities(), this._doSortEntities = !1;
            for (var c in this.backgroundAnims) {
                var b = this.backgroundAnims[c],
                    d;
                for (d in b) b[d].update()
            }
        },
        updateEntities: function() {
            for (var b = 0; b < this.entities.length; b++) {
                var c = this.entities[b];
                c._killed || c.update()
            }
        },
        draw: function() {
            this.clearColor && ig.system.clear(this.clearColor);
            this._rscreen.x = ig.system.getDrawPos(this.screen.x) / ig.system.scale;
            this._rscreen.y = ig.system.getDrawPos(this.screen.y) / ig.system.scale;
            var b;
            for (b = 0; b < this.backgroundMaps.length; b++) {
                var c =
                    this.backgroundMaps[b];
                if (c.foreground) break;
                c.setScreenPos(this.screen.x, this.screen.y);
                c.draw()
            }
            this.drawEntities();
            for (b; b < this.backgroundMaps.length; b++) c = this.backgroundMaps[b], c.setScreenPos(this.screen.x, this.screen.y), c.draw()
        },
        drawEntities: function() {
            for (var b = 0; b < this.entities.length; b++) this.entities[b].draw()
        },
        checkEntities: function() {
            for (var b = {}, c = 0; c < this.entities.length; c++) {
                var d = this.entities[c];
                if (!(d.type == ig.Entity.TYPE.NONE && d.checkAgainst == ig.Entity.TYPE.NONE && d.collides == ig.Entity.COLLIDES.NEVER))
                    for (var e = {}, f = Math.floor(d.pos.y / this.cellSize), j = Math.floor((d.pos.x + d.size.x) / this.cellSize) + 1, n = Math.floor((d.pos.y + d.size.y) / this.cellSize) + 1, l = Math.floor(d.pos.x / this.cellSize); l < j; l++)
                        for (var g = f; g < n; g++)
                            if (b[l])
                                if (b[l][g]) {
                                    for (var r = b[l][g], y = 0; y < r.length; y++) d.touches(r[y]) && !e[r[y].id] && (e[r[y].id] = !0, ig.Entity.checkPair(d, r[y]));
                                    r.push(d)
                                } else b[l][g] = [d];
                else b[l] = {}, b[l][g] = [d]
            }
        }
    });
    ig.Game.SORT = {
        Z_INDEX: function(b, c) {
            return b.zIndex - c.zIndex
        },
        POS_X: function(b, c) {
            return b.pos.x + b.size.x - (c.pos.x +
                c.size.x)
        },
        POS_Y: function(b, c) {
            return b.pos.y + b.size.y - (c.pos.y + c.size.y)
        }
    }
});
ig.baked = !0;
ig.module("plugins.io.fake-storage").requires("impact.game").defines(function() {
    ig.FakeStorage = ig.Class.extend({
        tempData: {},
        init: function() {
            ig.FakeStorage.instance = this
        },
        initUnset: function(b, c) {
            null === this.get(b) && this.set(b, c)
        },
        set: function(b, c) {
            this.tempData[b] = JSON.stringify(c)
        },
        setHighest: function(b, c) {
            c > this.getFloat(b) && this.set(b, c)
        },
        get: function(b) {
            return "undefined" == typeof this.tempData[b] ? null : JSON.parse(this.tempData[b])
        },
        getInt: function(b) {
            return ~~this.get(b)
        },
        getFloat: function(b) {
            return parseFloat(this.get(b))
        },
        getBool: function(b) {
            return !!this.get(b)
        },
        isSet: function(b) {
            return null !== this.get(b)
        },
        remove: function(b) {
            delete this.tempData[b]
        },
        clear: function() {
            this.tempData = {}
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.io-manager").requires("plugins.io.storage", "plugins.io.mouse", "plugins.io.keyboard", "plugins.io.gamepad", "plugins.io.multitouch", "plugins.io.multitouch-input", "plugins.io.gamepad-input", "plugins.io.fake-storage").defines(function() {
    IoManager = ig.Class.extend({
        storage: null,
        localStorageSupport: !1,
        mouse: null,
        keyboard: null,
        multitouch: null,
        gamepad: null,
        init: function() {
            ig.multitouchInput = new ig.MultitouchInput;
            ig.gamepadInput = new ig.GamepadInput;
            this.unbindAll();
            this.initStorage();
            this.initMouse();
            this.initKeyboard()
        },
        unbindAll: function() {
            ig.input.unbindAll();
            ig.gamepadInput.unbindAll()
        },
        initStorage: function() {
            try {
                window.localStorage.setItem("test", "test"), this.storage = new ig.Storage
            } catch (b) {
                console.log("using fake storage"), this.storage = new ig.FakeStorage
            } finally {
                window.localStorage.removeItem("test")
            }
        },
        initMouse: function() {
            this.mouse = new Mouse
        },
        initKeyboard: function() {
            this.keyboard = new Keyboard
        },
        initMultitouch: function() {
            this.multitouch = new Multitouch
        },
        initGamepad: function() {
            this.gamepad =
                new Gamepad
        },
        press: function(b) {
            return ig.input.pressed(b) || this.gamepad && this.gamepad.press(b) ? !0 : !1
        },
        held: function(b) {
            return ig.input.state(b) || this.gamepad && this.gamepad.state(b) ? !0 : !1
        },
        release: function(b) {
            return ig.input.released(b) || this.gamepad && this.gamepad.released(b) ? !0 : !1
        },
        getClickPos: function() {
            return this.mouse.getPos()
        },
        getTouchesPos: function() {
            return this.multitouch.getTouchesPos()
        },
        checkOverlap: function(b, c, d, e, f) {
            return b.x > c + e || b.x < c || b.y > d + f || b.y < d ? !1 : !0
        },
        _supportsLocalStorage: function() {
            try {
                return localStorage.setItem("test",
                    "test"), localStorage.removeItem("test"), this.localStorageSupport = "localStorage" in window && null !== window.localStorage
            } catch (b) {
                return this.localStorageSupport
            }
        },
        storageIsSet: function(b) {
            return !this.localStorageSupport ? null : this.storage.isSet(b)
        },
        storageGet: function(b) {
            return !this.localStorageSupport ? null : this.storage.get(b)
        },
        storageSet: function(b, c) {
            if (!this.localStorageSupport) return null;
            this.storage.set(b, c)
        },
        assert: function(b, c, d) {
            if (c !== d) throw "actualValue:" + c + " not equal to testValue:" + d + " at " +
                b;
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.storage-manager").requires("impact.game", "plugins.io.io-manager").defines(function() {
    ig.Game.prototype.name = "MJS-Game";
    ig.Game.prototype.version = "1.0";
    ig.Game.prototype.sessionData = {};
    ig.Game.prototype.initData = function() {
        return this.sessionData = {
            sound: 0.5,
            music: 0.5,
            level: 1,
            score: 0
        }
    };
    ig.Game.prototype.setupStorageManager = function() {
        "undefined" === typeof this.name ? console.error("Cannot found Game Name, Storage Manager Cancelled.") : "undefined" === typeof this.version ? console.error("Cannot found Game Version, Storage Manager Cancelled.") :
            (this.io || (this.io = new IoManager, console.log("IO Manager doesn't existed. Initialize...")), console.log("Plug in Storage Manager"), this.storage = this.io.storage, this.storageName = this.name + "-v" + this.version, this.loadAll())
    };
    ig.Game.prototype.loadAll = function() {
        var b = this.storage.get(this.storageName);
        if (null === b || "undefined" === typeof b) b = this.initData();
        for (var c in b) this.sessionData[c] = b[c];
        this.storage.set(this.storageName, b)
    };
    ig.Game.prototype.saveAll = function() {
        var b = this.storage.get(this.storageName),
            c;
        for (c in b) b[c] = this.sessionData[c];
        this.storage.set(this.storageName, b)
    };
    ig.Game.prototype.load = function(b) {
        return this.storage.get(this.storageName)[b]
    };
    ig.Game.prototype.save = function(b, c) {
        var d = this.storage.get(this.storageName);
        d[b] = c;
        this.storage.set(this.storageName, d)
    }
});
ig.baked = !0;
ig.module("plugins.splash-loader").requires("impact.loader", "impact.animation").defines(function() {
    ig.SplashLoader = ig.Loader.extend({
        desktopCoverDIVID: "play-desktop",
        splashDesktop: new ig.Image("media/graphics/splash/desktop/cover.jpg"),
        splashMobile: new ig.Image("media/graphics/splash/desktop/cover.jpg"),
        loading: new ig.Image("media/graphics/splash/loading.png"),
        loadingBg: new ig.Image("media/graphics/splash/loading-bg.png"),
        init: function(b, c) {
            this.parent(b, c);
            ig.apiHandler.run("MJSPreroll")
        },
        end: function() {
            this.parent();
            this._drawStatus = 1;
            this.draw();
            if (ig.ua.mobile) {
                var b = ig.domHandler.getElementById("#play");
                ig.domHandler.show(b);
                ig.system.setGame(MyGame)
            } else this.tapToStartDiv()
        },
        draw: function() {
            this._drawStatus += (this.status - this._drawStatus) / 5;
            if (!(0.2 > this._drawStatus)) {
                var b, c, d, e;
                b = this.loading.width;
                c = this.loading.height;
                d = 0.5 * ig.system.width - b / 2;
                e = 7 * ig.system.height / 10 - c / 2;
                this.splashDesktop.draw(0, 0);
                this.loadingBg.draw(d, e);
                this.loading.draw(d, e, 0, 0, b * this._drawStatus, c)
            }
        },
        tapToStartDiv: function(b) {
            this.desktopCoverDIV =
                document.createElement("div");
            this.desktopCoverDIV.id = this.desktopCoverDIVID;
            this.desktopCoverDIV.setAttribute("class", "play");
            this.desktopCoverDIV.setAttribute("style", "position: absolute; display: block; z-index: 999999; background-color: rgba(23, 32, 53, 0.7); visibility: visible; font-size: 10vmin; text-align: center; vertical-align: middle; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;");
            this.desktopCoverDIV.innerHTML =
                "<div style='color:white;background-color: rgba(255, 255, 255, 0.3); border: 2px solid #fff; font-size:20px; border-radius: 5px; position: relative; float: left; top: 50%; left: 50%; transform: translate(-50%, -50%);'><div style='padding:20px 50px; font-family: Arial;'>" + _STRINGS.Splash.TapToStart + "</div></div>";
            (document.getElementById("play").parentNode || document.getElementById("ajaxbar")).appendChild(this.desktopCoverDIV);
            try {
                "undefined" !== typeof ig.sizeHandler ? "undefined" !== typeof ig.sizeHandler.coreDivsToResize &&
                    (ig.sizeHandler.coreDivsToResize.push("#" + this.desktopCoverDIVID), "function" === typeof ig.sizeHandler.reorient && ig.sizeHandler.reorient()) : "undefined" !== typeof coreDivsToResize && (coreDivsToResize.push(this.desktopCoverDIVID), "function" === typeof sizeHandler && sizeHandler())
            } catch (c) {
                console.log(c)
            }
            this.desktopCoverDIV.addEventListener("click", function() {
                try {
                    console.log(loadGoogleAd)
                    loadGoogleAd();
                    "undefined" !== typeof ig.soundHandler ? ("undefined" !== typeof ig.soundHandler.bgmPlayer ? "undefined" !== typeof ig.soundHandler.bgmPlayer.webaudio && "undefined" !==
                        typeof ig.soundHandler.bgmPlayer.webaudio.context && ig.soundHandler.bgmPlayer.webaudio.context.resume() : (ig.soundHandler = null, ig.soundHandler = "undefined" !== typeof ig.soundList ? new ig.SoundHandler(ig.soundList) : new ig.SoundHandler), "undefined" !== typeof ig.soundHandler.sfxPlayer ? "function" === typeof ig.soundHandler.sfxPlayer.play && ig.soundHandler.sfxPlayer.play("staticSound") : "undefined" !== typeof ig.soundHandler.staticSound ? "function" === typeof ig.soundHandler.staticSound.play && ig.soundHandler.staticSound.play() :
                        "function" === typeof ig.soundHandler.playSound && ig.soundHandler.playSound("staticSound")) : "undefined" !== typeof Howl ? (ig.global.staticSound = new Howl({
                        src: ["media/audio/play/static.ogg", "media/audio/play/static.mp3"]
                    }), ig.global.staticSound.play()) : "undefined" !== typeof createjs && "undefined" !== typeof createjs.Sound && "function" === typeof createjs.Sound.play && createjs.Sound.play("opening")
                } catch (c) {
                    console.log(c)
                }
                this.setAttribute("style", "visibility: hidden;");
                "function" === typeof b && b();
                //ig.gd.show(function() {
                ig.system.setGame(MyGame);
                //gdsdk && "function" === typeof gdsdk.play && gdsdk.play()
                //}.bind(this))
            })
        }
    })
});
ig.baked = !0;
ig.module("plugins.tween").requires("impact.entity").defines(function() {
    Array.prototype.indexOf || (Array.prototype.indexOf = function(b) {
        for (var c = 0; c < this.length; ++c)
            if (this[c] === b) return c;
        return -1
    });
    ig.Entity.prototype.tweens = [];
    ig.Entity.prototype._preTweenUpdate = ig.Entity.prototype.update;
    ig.Entity.prototype.update = function() {
        this._preTweenUpdate();
        if (0 < this.tweens.length) {
            for (var b = [], c = 0; c < this.tweens.length; c++) this.tweens[c].update(), this.tweens[c].complete || b.push(this.tweens[c]);
            this.tweens =
                b
        }
    };
    ig.Entity.prototype.tween = function(b, c, d) {
        b = new ig.Tween(this, b, c, d);
        this.tweens.push(b);
        return b
    };
    ig.Entity.prototype.pauseTweens = function() {
        for (var b = 0; b < this.tweens.length; b++) this.tweens[b].pause()
    };
    ig.Entity.prototype.resumeTweens = function() {
        for (var b = 0; b < this.tweens.length; b++) this.tweens[b].resume()
    };
    ig.Entity.prototype.stopTweens = function(b) {
        for (var c = 0; c < this.tweens.length; c++) this.tweens[c].stop(b)
    };
    ig.Tween = function(b, c, d, e) {
        var f = {},
            j = {},
            n = {},
            l = 0,
            g = !1,
            r = !1,
            y = !1;
        this.duration = d;
        this.paused =
            this.complete = !1;
        this.easing = ig.Tween.Easing.Linear.EaseNone;
        this.onComplete = !1;
        this.loop = this.delay = 0;
        this.loopCount = -1;
        ig.merge(this, e);
        this.loopNum = this.loopCount;
        this.chain = function(b) {
            y = b
        };
        this.initEnd = function(b, c, d) {
            if ("object" !== typeof c[b]) d[b] = c[b];
            else
                for (subprop in c[b]) d[b] || (d[b] = {}), this.initEnd(subprop, c[b], d[b])
        };
        this.initStart = function(b, c, d, e) {
            if ("object" !== typeof d[b]) "undefined" !== typeof c[b] && (e[b] = d[b]);
            else
                for (subprop in d[b]) e[b] || (e[b] = {}), "undefined" !== typeof c[b] && this.initStart(subprop,
                    c[b], d[b], e[b])
        };
        this.start = function() {
            this.paused = this.complete = !1;
            this.loopNum = this.loopCount;
            l = 0; - 1 == b.tweens.indexOf(this) && b.tweens.push(this);
            r = !0;
            g = new ig.Timer;
            for (var d in c) this.initEnd(d, c, j);
            for (d in j) this.initStart(d, j, b, f), this.initDelta(d, n, b, j)
        };
        this.initDelta = function(b, c, d, e) {
            if ("object" !== typeof e[b]) c[b] = e[b] - d[b];
            else
                for (subprop in e[b]) c[b] || (c[b] = {}), this.initDelta(subprop, c[b], d[b], e[b])
        };
        this.propUpdate = function(b, c, d, e, f) {
            if ("object" !== typeof d[b]) c[b] = "undefined" != typeof d[b] ?
                d[b] + e[b] * f : c[b];
            else
                for (subprop in d[b]) this.propUpdate(subprop, c[b], d[b], e[b], f)
        };
        this.propSet = function(b, c, d) {
            if ("object" !== typeof c[b]) d[b] = c[b];
            else
                for (subprop in c[b]) d[b] || (d[b] = {}), this.propSet(subprop, c[b], d[b])
        };
        this.update = function() {
            if (!r) return !1;
            if (this.delay) {
                if (g.delta() < this.delay) return;
                this.delay = 0;
                g.reset()
            }
            if (this.paused || this.complete) return !1;
            var c = (g.delta() + l) / this.duration,
                c = 1 < c ? 1 : c,
                d = this.easing(c);
            for (property in n) this.propUpdate(property, b, f, n, d);
            if (1 <= c) {
                if (0 == this.loopNum ||
                    !this.loop) {
                    this.complete = !0;
                    if (this.onComplete) this.onComplete();
                    y && y.start();
                    return !1
                }
                if (this.loop == ig.Tween.Loop.Revert) {
                    for (property in f) this.propSet(property, f, b);
                    l = 0;
                    g.reset(); - 1 != this.loopNum && this.loopNum--
                } else if (this.loop == ig.Tween.Loop.Reverse) {
                    c = {};
                    d = {};
                    ig.merge(c, j);
                    ig.merge(d, f);
                    ig.merge(f, c);
                    ig.merge(j, d);
                    for (property in j) this.initDelta(property, n, b, j);
                    l = 0;
                    g.reset(); - 1 != this.loopNum && this.loopNum--
                }
            }
        };
        this.pause = function() {
            this.paused = !0;
            g && g.delta && (l += g.delta())
        };
        this.resume = function() {
            this.paused = !1;
            g && g.reset && g.reset()
        };
        this.stop = function(b) {
            b && (this.loop = this.complete = this.paused = !1, l += d, this.update());
            this.complete = !0
        }
    };
    ig.Tween.Loop = {
        Revert: 1,
        Reverse: 2
    };
    ig.Tween.Easing = {
        Linear: {},
        Quadratic: {},
        Cubic: {},
        Quartic: {},
        Quintic: {},
        Sinusoidal: {},
        Exponential: {},
        Circular: {},
        Elastic: {},
        Back: {},
        Bounce: {}
    };
    ig.Tween.Easing.Linear.EaseNone = function(b) {
        return b
    };
    ig.Tween.Easing.Quadratic.EaseIn = function(b) {
        return b * b
    };
    ig.Tween.Easing.Quadratic.EaseOut = function(b) {
        return -b * (b - 2)
    };
    ig.Tween.Easing.Quadratic.EaseInOut =
        function(b) {
            return 1 > (b *= 2) ? 0.5 * b * b : -0.5 * (--b * (b - 2) - 1)
        };
    ig.Tween.Easing.Cubic.EaseIn = function(b) {
        return b * b * b
    };
    ig.Tween.Easing.Cubic.EaseOut = function(b) {
        return --b * b * b + 1
    };
    ig.Tween.Easing.Cubic.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b * b : 0.5 * ((b -= 2) * b * b + 2)
    };
    ig.Tween.Easing.Quartic.EaseIn = function(b) {
        return b * b * b * b
    };
    ig.Tween.Easing.Quartic.EaseOut = function(b) {
        return -(--b * b * b * b - 1)
    };
    ig.Tween.Easing.Quartic.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b * b * b : -0.5 * ((b -= 2) * b * b * b - 2)
    };
    ig.Tween.Easing.Quintic.EaseIn =
        function(b) {
            return b * b * b * b * b
        };
    ig.Tween.Easing.Quintic.EaseOut = function(b) {
        return (b -= 1) * b * b * b * b + 1
    };
    ig.Tween.Easing.Quintic.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b * b * b * b : 0.5 * ((b -= 2) * b * b * b * b + 2)
    };
    ig.Tween.Easing.Sinusoidal.EaseIn = function(b) {
        return -Math.cos(b * Math.PI / 2) + 1
    };
    ig.Tween.Easing.Sinusoidal.EaseOut = function(b) {
        return Math.sin(b * Math.PI / 2)
    };
    ig.Tween.Easing.Sinusoidal.EaseInOut = function(b) {
        return -0.5 * (Math.cos(Math.PI * b) - 1)
    };
    ig.Tween.Easing.Exponential.EaseIn = function(b) {
        return 0 == b ? 0 : Math.pow(2,
            10 * (b - 1))
    };
    ig.Tween.Easing.Exponential.EaseOut = function(b) {
        return 1 == b ? 1 : -Math.pow(2, -10 * b) + 1
    };
    ig.Tween.Easing.Exponential.EaseInOut = function(b) {
        return 0 == b ? 0 : 1 == b ? 1 : 1 > (b *= 2) ? 0.5 * Math.pow(2, 10 * (b - 1)) : 0.5 * (-Math.pow(2, -10 * (b - 1)) + 2)
    };
    ig.Tween.Easing.Circular.EaseIn = function(b) {
        return -(Math.sqrt(1 - b * b) - 1)
    };
    ig.Tween.Easing.Circular.EaseOut = function(b) {
        return Math.sqrt(1 - --b * b)
    };
    ig.Tween.Easing.Circular.EaseInOut = function(b) {
        return 1 > (b /= 0.5) ? -0.5 * (Math.sqrt(1 - b * b) - 1) : 0.5 * (Math.sqrt(1 - (b -= 2) * b) + 1)
    };
    ig.Tween.Easing.Elastic.EaseIn =
        function(b) {
            var c, d = 0.1,
                e = 0.4;
            if (0 == b) return 0;
            if (1 == b) return 1;
            e || (e = 0.3);
            !d || 1 > d ? (d = 1, c = e / 4) : c = e / (2 * Math.PI) * Math.asin(1 / d);
            return -(d * Math.pow(2, 10 * (b -= 1)) * Math.sin((b - c) * 2 * Math.PI / e))
        };
    ig.Tween.Easing.Elastic.EaseOut = function(b) {
        var c, d = 0.1,
            e = 0.4;
        if (0 == b) return 0;
        if (1 == b) return 1;
        e || (e = 0.3);
        !d || 1 > d ? (d = 1, c = e / 4) : c = e / (2 * Math.PI) * Math.asin(1 / d);
        return d * Math.pow(2, -10 * b) * Math.sin((b - c) * 2 * Math.PI / e) + 1
    };
    ig.Tween.Easing.Elastic.EaseInOut = function(b) {
        var c, d = 0.1,
            e = 0.4;
        if (0 == b) return 0;
        if (1 == b) return 1;
        e || (e = 0.3);
        !d || 1 > d ? (d = 1, c = e / 4) : c = e / (2 * Math.PI) * Math.asin(1 / d);
        return 1 > (b *= 2) ? -0.5 * d * Math.pow(2, 10 * (b -= 1)) * Math.sin((b - c) * 2 * Math.PI / e) : 0.5 * d * Math.pow(2, -10 * (b -= 1)) * Math.sin((b - c) * 2 * Math.PI / e) + 1
    };
    ig.Tween.Easing.Back.EaseIn = function(b) {
        return b * b * (2.70158 * b - 1.70158)
    };
    ig.Tween.Easing.Back.EaseOut = function(b) {
        return (b -= 1) * b * (2.70158 * b + 1.70158) + 1
    };
    ig.Tween.Easing.Back.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b * (3.5949095 * b - 2.5949095) : 0.5 * ((b -= 2) * b * (3.5949095 * b + 2.5949095) + 2)
    };
    ig.Tween.Easing.Bounce.EaseIn =
        function(b) {
            return 1 - ig.Tween.Easing.Bounce.EaseOut(1 - b)
        };
    ig.Tween.Easing.Bounce.EaseOut = function(b) {
        return (b /= 1) < 1 / 2.75 ? 7.5625 * b * b : b < 2 / 2.75 ? 7.5625 * (b -= 1.5 / 2.75) * b + 0.75 : b < 2.5 / 2.75 ? 7.5625 * (b -= 2.25 / 2.75) * b + 0.9375 : 7.5625 * (b -= 2.625 / 2.75) * b + 0.984375
    };
    ig.Tween.Easing.Bounce.EaseInOut = function(b) {
        return 0.5 > b ? 0.5 * ig.Tween.Easing.Bounce.EaseIn(2 * b) : 0.5 * ig.Tween.Easing.Bounce.EaseOut(2 * b - 1) + 0.5
    };
    ig.Tween.Interpolation = {
        Linear: function(b, c) {
            var d = b.length - 1,
                e = d * c,
                f = Math.floor(e),
                j = TWEEN.Interpolation.Utils.Linear;
            return 0 > c ? j(b[0], b[1], e) : 1 < c ? j(b[d], b[d - 1], d - e) : j(b[f], b[f + 1 > d ? d : f + 1], e - f)
        }
    }
});
ig.baked = !0;
ig.module("plugins.patches.entity-patch").requires("impact.entity").defines(function() {
    ig.Entity.inject({
        handleMovementTrace: function(b) {
            this.standing = !1;
            b.collision.y && (0 < this.bounciness && Math.abs(this.vel.y) > this.minBounceVelocity ? this.vel.y *= -this.bounciness : (0 < this.vel.y && (this.standing = !0), this.vel.y = 0));
            b.collision.x && (this.vel.x = 0 < this.bounciness && Math.abs(this.vel.x) > this.minBounceVelocity ? this.vel.x * -this.bounciness : 0);
            if (b.collision.slope) {
                var c = b.collision.slope;
                if (0 < this.bounciness) {
                    var d =
                        this.vel.x * c.nx + this.vel.y * c.ny;
                    this.vel.x = (this.vel.x - 2 * c.nx * d) * this.bounciness;
                    this.vel.y = (this.vel.y - 2 * c.ny * d) * this.bounciness
                } else d = (this.vel.x * c.x + this.vel.y * c.y) / (c.x * c.x + c.y * c.y), this.vel.x = c.x * d, this.vel.y = c.y * d, c = Math.atan2(c.x, c.y), c > this.slopeStanding.min && c < this.slopeStanding.max && (this.standing = !0)
            }
            this.pos.x = b.pos.x;
            this.pos.y = b.pos.y
        }
    })
});
ig.baked = !0;
ig.module("plugins.tweens-handler").requires("impact.entity", "plugins.tween", "plugins.patches.entity-patch").defines(function() {
    Array.prototype.indexOf || (Array.prototype.indexOf = function(b) {
        for (var d = 0; d < this.length; ++d)
            if (this[d] === b) return d;
        return -1
    });
    ig.TweensHandler = ig.Class.extend({
        _tweens: [],
        _systemPausedTweens: [],
        init: function() {},
        getAll: function() {
            return this._tweens
        },
        removeAll: function() {
            this._tweens = []
        },
        add: function(b) {
            this._tweens.push(b)
        },
        remove: function(b) {
            b = this._tweens.indexOf(b); -
            1 !== b && this._tweens.splice(b, 1)
        },
        onSystemPause: function() {
            if (0 === this._tweens.length) return !1;
            for (var b = 0, d = null; b < this._tweens.length;) d = this._tweens[b], d._isPlaying && (this._systemPausedTweens.push(d), d.pause()), b++;
            return !0
        },
        onSystemResume: function() {
            if (0 === this._systemPausedTweens.length) return !1;
            for (var b = 0; b < this._systemPausedTweens.length;) this._systemPausedTweens[b].resume(), b++;
            this._systemPausedTweens = [];
            return !0
        },
        update: function(b, d) {
            if (0 === this._tweens.length) return !1;
            var e = 0;
            for (b = void 0 !==
                b ? b : ig.game.tweens.now(); e < this._tweens.length;) this._tweens[e].update(b) || d ? e++ : this._tweens.splice(e, 1);
            return !0
        },
        now: function() {
            return Date.now()
        }
    });
    ig.TweenDef = ig.Class.extend({
        _ent: null,
        _valuesStart: {},
        _valuesEnd: {},
        _valuesStartRepeat: {},
        _duration: 1E3,
        _repeat: 0,
        _yoyo: !1,
        _isPlaying: !1,
        _reversed: !1,
        _delayTime: 0,
        _startTime: null,
        _pauseTime: null,
        _easingFunction: ig.Tween.Easing.Linear.EaseNone,
        _interpolationFunction: ig.Tween.Interpolation.Linear,
        _chainedTweens: [],
        _onStartCallback: null,
        _onStartCallbackFired: !1,
        _onUpdateCallback: null,
        _onCompleteCallback: null,
        _onStopCallback: null,
        _onPauseCallback: null,
        _onResumeCallback: null,
        _currentElapsed: 0,
        init: function(b) {
            this._object = b
        },
        to: function(b, d) {
            this._valuesEnd = b;
            void 0 !== d && (this._duration = d);
            return this
        },
        start: function(b) {
            if (this._isPlaying) return this;
            ig.game.tweens.add(this);
            this._isPlaying = !0;
            this._onStartCallbackFired = !1;
            this._startTime = void 0 !== b ? b : ig.game.tweens.now();
            this._startTime += this._delayTime;
            for (var d in this._valuesEnd) {
                if (this._valuesEnd[d] instanceof Array) {
                    if (0 === this._valuesEnd[d].length) continue;
                    this._valuesEnd[d] = [this._object[d]].concat(this._valuesEnd[d])
                }
                void 0 !== this._object[d] && (this._valuesStart[d] = this._object[d], !1 === this._valuesStart[d] instanceof Array && (this._valuesStart[d] *= 1), this._valuesStartRepeat[d] = this._valuesStart[d] || 0)
            }
            return this
        },
        stop: function() {
            if (!this._isPlaying) return this;
            ig.game.tweens.remove(this);
            this._isPlaying = !1;
            null !== this._onStopCallback && this._onStopCallback.call(this._object, this._object);
            this.stopChainedTweens();
            return this
        },
        pause: function() {
            if (!this._isPlaying) return this;
            ig.game.tweens.remove(this);
            this._isPlaying = !1;
            this._pauseTime = ig.game.tweens.now();
            null !== this._onPauseCallback && this._onPauseCallback.call(this._object, this._object);
            return this
        },
        resume: function() {
            if (this._isPlaying || !this._pauseTime) return this;
            var b = ig.game.tweens.now() - this._pauseTime;
            this._startTime += b;
            ig.game.tweens.add(this);
            this._isPlaying = !0;
            null !== this._onResumeCallback && this._onResumeCallback.call(this._object, this._object);
            this._pauseTime = null;
            return this
        },
        end: function() {
            this.update(this._startTime + this._duration);
            return this
        },
        stopChainedTweens: function() {
            for (var b = 0, d = this._chainedTweens.length; b < d; b++) this._chainedTweens[b].stop()
        },
        delay: function(b) {
            this._delayTime = b;
            return this
        },
        repeat: function(b) {
            this._repeat = b;
            return this
        },
        repeatDelay: function(b) {
            this._repeatDelayTime = b;
            return this
        },
        yoyo: function(b) {
            this._yoyo = b;
            return this
        },
        easing: function(b) {
            this._easingFunction = b;
            return this
        },
        interpolation: function(b) {
            this._interpolationFunction =
                b;
            return this
        },
        chain: function() {
            this._chainedTweens = arguments;
            return this
        },
        onStart: function(b) {
            this._onStartCallback = b;
            return this
        },
        onUpdate: function(b) {
            this._onUpdateCallback = b;
            return this
        },
        onComplete: function(b) {
            this._onCompleteCallback = b;
            return this
        },
        onStop: function(b) {
            this._onStopCallback = b;
            return this
        },
        onPause: function(b) {
            this._onPauseCallback = b;
            return this
        },
        onResume: function(b) {
            this._onResumeCallback = b;
            return this
        },
        update: function(b) {
            var d, e, f;
            if (b < this._startTime) return !0;
            !1 === this._onStartCallbackFired &&
                (null !== this._onStartCallback && this._onStartCallback.call(this._object, this._object), this._onStartCallbackFired = !0);
            e = (b - this._startTime) / this._duration;
            this._currentElapsed = e = 1 < e ? 1 : e;
            f = this._easingFunction(e);
            for (d in this._valuesEnd)
                if (void 0 !== this._valuesStart[d]) {
                    var j = this._valuesStart[d] || 0,
                        n = this._valuesEnd[d];
                    n instanceof Array ? this._object[d] = this._interpolationFunction(n, f) : ("string" === typeof n && (n = "+" === n.charAt(0) || "-" === n.charAt(0) ? j + parseFloat(n) : parseFloat(n)), "number" === typeof n &&
                        (this._object[d] = j + (n - j) * f))
                }
            null !== this._onUpdateCallback && this._onUpdateCallback.call(this._object, this._object, f);
            if (1 === e)
                if (0 < this._repeat) {
                    isFinite(this._repeat) && this._repeat--;
                    for (d in this._valuesStartRepeat) "string" === typeof this._valuesEnd[d] && (this._valuesStartRepeat[d] = _valuesStartRepeat[d] + parseFloat(_valuesEnd[d])), this._yoyo && (e = this._valuesStartRepeat[d], this._valuesStartRepeat[d] = this._valuesEnd[d], this._valuesEnd[d] = e), this._valuesStart[d] = this._valuesStartRepeat[d];
                    this._yoyo &&
                        (this._reversed = !this._reversed);
                    this._startTime = void 0 !== this._repeatDelayTime ? b + this._repeatDelayTime : b + this._delayTime
                } else {
                    null !== this._onCompleteCallback && this._onCompleteCallback.call(this._object, this._object);
                    b = 0;
                    for (d = this._chainedTweens.length; b < d; b++) this._chainedTweens[b].start(this._startTime + this._duration);
                    return !1
                }
            return !0
        }
    });
    var b = [1];
    ig.Tween.Interpolation = {
        Linear: function(b, d) {
            var e = b.length - 1,
                f = e * d,
                j = Math.floor(f),
                n = ig.Tween.Interpolation.Utils.Linear;
            return 0 > d ? n(b[0], b[1], f) :
                1 < d ? n(b[e], b[e - 1], e - f) : n(b[j], b[j + 1 > e ? e : j + 1], f - j)
        },
        Bezier: function(b, d) {
            for (var e = 0, f = b.length - 1, j = Math.pow, n = ig.Tween.Interpolation.Utils.Bernstein, l = 0; l <= f; l++) e += j(1 - d, f - l) * j(d, l) * b[l] * n(f, l);
            return e
        },
        CatmullRom: function(b, d) {
            var e = b.length - 1,
                f = e * d,
                j = Math.floor(f),
                n = ig.Tween.Interpolation.Utils.CatmullRom;
            return b[0] === b[e] ? (0 > d && (j = Math.floor(f = e * (1 + d))), n(b[(j - 1 + e) % e], b[j], b[(j + 1) % e], b[(j + 2) % e], f - j)) : 0 > d ? b[0] - (n(b[0], b[0], b[1], b[1], -f) - b[0]) : 1 < d ? b[e] - (n(b[e], b[e], b[e - 1], b[e - 1], f - e) - b[e]) : n(b[j ?
                j - 1 : 0], b[j], b[e < j + 1 ? e : j + 1], b[e < j + 2 ? e : j + 2], f - j)
        },
        Utils: {
            Linear: function(b, d, e) {
                return (d - b) * e + b
            },
            Bernstein: function(b, d) {
                var e = ig.Tween.Interpolation.Utils.Factorial;
                return e(b) / e(d) / e(b - d)
            },
            Factorial: function(c) {
                var d = 1;
                if (b[c]) return b[c];
                for (var e = c; 1 < e; e--) d *= e;
                return b[c] = d
            },
            CatmullRom: function(b, d, e, f, j) {
                b = 0.5 * (e - b);
                f = 0.5 * (f - d);
                var n = j * j;
                return (2 * d - 2 * e + b + f) * j * n + (-3 * d + 3 * e - 2 * b - f) * n + b * j + d
            }
        }
    }
});
ig.baked = !0;
ig.module("plugins.url-parameters").defines(function() {
    ig.UrlParameters = ig.Class.extend({
        init: function() {
            switch (getQueryVariable("iphone")) {
                case "true":
                    ig.ua.iPhone = !0, console.log("iPhone mode")
            }
            var b = getQueryVariable("webview");
            if (b) switch (b) {
                case "true":
                    ig.ua.is_uiwebview = !0, console.log("webview mode")
            }
            if (b = getQueryVariable("debug")) switch (b) {
                case "true":
                    ig.game.showDebugMenu(), console.log("debug mode")
            }
            switch (getQueryVariable("view")) {
                case "stats":
                    ig.game.resetPlayerStats(), ig.game.endGame()
            }
            getQueryVariable("ad")
        }
    })
});
ig.baked = !0;
ig.module("plugins.director").requires("impact.impact").defines(function() {
    ig.Director = ig.Class.extend({
        init: function(b, c) {
            this.game = b;
            this.levels = [];
            this.currentLevel = 0;
            this.append(c)
        },
        loadLevel: function(b) {
            for (var c in ig.sizeHandler.dynamicClickableEntityDivs) {
                var d = ig.domHandler.getElementById("#" + c);
                ig.domHandler.hide(d)
            }
            this.currentLevel = b;
            this.game.loadLevel(this.levels[b]);
            return !0
        },
        loadLevelWithoutEntities: function(b) {
            this.currentLevel = b;
            this.game.loadLevelWithoutEntities(this.levels[b]);
            return !0
        },
        append: function(b) {
            newLevels = [];
            return "object" === typeof b ? (b.constructor === [].constructor ? newLevels = b : newLevels[0] = b, this.levels = this.levels.concat(newLevels), !0) : !1
        },
        nextLevel: function() {
            return this.currentLevel + 1 < this.levels.length ? this.loadLevel(this.currentLevel + 1) : !1
        },
        previousLevel: function() {
            return 0 <= this.currentLevel - 1 ? this.loadLevel(this.currentLevel - 1) : !1
        },
        jumpTo: function(b) {
            var c = null;
            for (i = 0; i < this.levels.length; i++) this.levels[i] == b && (c = i);
            return 0 <= c ? this.loadLevel(c) : !1
        },
        firstLevel: function() {
            return this.loadLevel(0)
        },
        lastLevel: function() {
            return this.loadLevel(this.levels.length - 1)
        },
        reloadLevel: function() {
            return this.loadLevel(this.currentLevel)
        }
    })
});
ig.baked = !0;
ig.module("plugins.impact-storage").requires("impact.game").defines(function() {
    ig.Storage = ig.Class.extend({
        staticInstantiate: function() {
            return !ig.Storage.instance ? null : ig.Storage.instance
        },
        init: function() {
            ig.Storage.instance = this
        },
        isCapable: function() {
            return "undefined" !== typeof window.localStorage
        },
        isSet: function(b) {
            return null !== this.get(b)
        },
        initUnset: function(b, c) {
            null === this.get(b) && this.set(b, c)
        },
        get: function(b) {
            if (!this.isCapable()) return null;
            try {
                return JSON.parse(localStorage.getItem(b))
            } catch (c) {
                return window.localStorage.getItem(b)
            }
        },
        getInt: function(b) {
            return ~~this.get(b)
        },
        getFloat: function(b) {
            return parseFloat(this.get(b))
        },
        getBool: function(b) {
            return !!this.get(b)
        },
        key: function(b) {
            return this.isCapable() ? window.localStorage.key(b) : null
        },
        set: function(b, c) {
            if (!this.isCapable()) return null;
            try {
                window.localStorage.setItem(b, JSON.stringify(c))
            } catch (d) {
                console.log(d)
            }
        },
        setHighest: function(b, c) {
            c > this.getFloat(b) && this.set(b, c)
        },
        remove: function(b) {
            if (!this.isCapable()) return null;
            window.localStorage.removeItem(b)
        },
        clear: function() {
            if (!this.isCapable()) return null;
            window.localStorage.clear()
        }
    })
});
ig.baked = !0;
ig.module("plugins.scale").requires("impact.entity").defines(function() {
    ig.Entity.inject({
        scale: {
            x: 1,
            y: 1
        },
        _offset: {
            x: 0,
            y: 0
        },
        _scale: {
            x: 1,
            y: 1
        },
        _size: {
            x: 0,
            y: 0
        },
        init: function(b, c, d) {
            this.parent(b, c, d);
            this._offset.x = this.offset.x;
            this._offset.y = this.offset.y;
            this._size.x = this.size.x;
            this._size.y = this.size.y;
            this.setScale(this.scale.x, this.scale.y)
        },
        draw: function() {
            var b = ig.system.context;
            b.save();
            b.translate(ig.system.getDrawPos(this.pos.x.round() - this.offset.x - ig.game.screen.x), ig.system.getDrawPos(this.pos.y.round() -
                this.offset.y - ig.game.screen.y));
            b.scale(this._scale.x, this._scale.y);
            null != this.currentAnim && this.currentAnim.draw(0, 0);
            b.restore()
        },
        setScale: function(b, c) {
            var d = this.size.x,
                e = this.size.y;
            this.scale.x = b || this.scale.x;
            this.scale.y = c || this.scale.y;
            this._scale.x = this.scale.x / ig.system.scale;
            this._scale.y = this.scale.y / ig.system.scale;
            this.offset.x = this._offset.x * this._scale.x;
            this.offset.y = this._offset.y * this._scale.y;
            this.size.x = this._size.x * this._scale.x;
            this.size.y = this._size.y * this._scale.y;
            this.pos.x +=
                (d - this.size.x) / 2;
            this.pos.y += (e - this.size.y) / 2
        }
    })
});
ig.baked = !0;
ig.module("plugins.multitouch").requires("impact.game", "impact.input").defines(function() {
    var b = function(b, d, e, f) {
        this.x = b;
        this.y = d;
        this.id = e;
        this.state = f
    };
    ig.Input.inject({
        touches: {},
        delayedTouchUp: [],
        fingerCount: [],
        initMouse: function() {
            if (!this.isUsingMouse)
                if (this.isUsingMouse = !0, "undefined" != typeof ios && ios) this._touchInput = new native.TouchInput, this._touchInput.touchStart(this.multitouchstart.bind(this)), this._touchInput.touchEnd(this.multitouchend.bind(this)), this._touchInput.touchMove(this.multitouchmove.bind(this));
                else {
                    var b = this.mousewheel.bind(this);
                    ig.system.canvas.addEventListener("mousewheel", b, !1);
                    ig.system.canvas.addEventListener("DOMMouseScroll", b, !1);
                    ig.system.canvas.addEventListener("contextmenu", this.contextmenu.bind(this), !1);
                    ig.system.canvas.addEventListener("mousedown", this.keydown.bind(this), !1);
                    ig.system.canvas.addEventListener("mouseup", this.keyup.bind(this), !1);
                    ig.system.canvas.addEventListener("mousemove", this.mousemove.bind(this), !1);
                    ig.system.canvas.addEventListener("touchstart", this.touchEvent.bind(this), !1);
                    ig.system.canvas.addEventListener("touchmove", this.touchEvent.bind(this), !1);
                    ig.system.canvas.addEventListener("touchend", this.touchEvent.bind(this), !1);
                    ig.system.canvas.addEventListener("touchcancel", this.touchEvent.bind(this), !1)
                }
        },
        keydown: function(c) {
            this.parent(c);
            "mousedown" == c.type && !this.touches.mouse && (this.touches.mouse = new b(this.mouse.x, this.mouse.y, "mouse", "down"))
        },
        keyup: function(b) {
            this.parent(b);
            if ("mouseup" == b.type && !this.actions[this.bindings[2 == b.button ? ig.KEY.MOUSE1 : ig.KEY.MOUSE2]] &&
                this.touches.mouse) this.touches.mouse.state = "up", this.touches.mouse.x = this.mouse.x, this.touches.mouse.y = this.mouse.y, this.delayedTouchUp.push("mouse")
        },
        mousemove: function(b) {
            this.parent(b);
            this.state("click") && this.touches.mouse && (this.touches.mouse.x = this.mouse.x, this.touches.mouse.y = this.mouse.y)
        },
        clearPressed: function() {
            this.parent();
            this.ent = ig.game.entities;
            for (var b = this.delayedTouchUp.length; b--;) delete this.touches[ig.input.delayedTouchUp[b]];
            this.delayedTouchUp = [];
            this.multitouchState()
        },
        touchedEntity: function() {
            for (var b = 0; b < this.ent.length; b++)
                for (var d in this.touches) {
                    var e = this.touches[d].x,
                        f = this.touches[d].y;
                    if (e > this.ent[b].pos.x && e < this.ent[b].pos.x + this.ent[b].size.x && f > this.ent[b].pos.y && f < this.ent[b].pos.y + this.ent[b].size.y) return this.ent[b].clickedFinger = this.touches[d], this.ent[b].statedFinger = this.touches[d], this.ent[b];
                    this.ent[b].statedFinger == this.touches[d] && (this.ent[b].clickedFinger = null, this.ent[b].statedFinger = null, this.ent[b].isClicked = !1)
                }
        },
        touchEvent: function(b) {
            b.stopPropagation();
            b.preventDefault();
            var d = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
                e = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
                d = ig.system.scale * (d / ig.system.realWidth),
                e = ig.system.scale * (e / ig.system.realHeight),
                f = {
                    left: 0,
                    top: 0
                };
            ig.system.canvas.getBoundingClientRect && (f = ig.system.canvas.getBoundingClientRect());
            for (var j = b.changedTouches.length; j--;) {
                var n = b.changedTouches[j];
                this["multi" + b.type]((n.clientX - f.left) / d, (n.clientY - f.top) / e, n.identifier)
            }
        },
        multitouchState: function() {
            for (var b =
                    0; b < this.ent.length; b++) {
                for (var d in this.touches) {
                    var e = this.touches[d].x,
                        f = this.touches[d].y;
                    e > this.ent[b].pos.x && e < this.ent[b].pos.x + this.ent[b].size.x && f > this.ent[b].pos.y && f < this.ent[b].pos.y + this.ent[b].size.y ? (this.ent[b].clickedFinger = this.touches[d], this.ent[b].statedFinger = this.touches[d], "function" == typeof this.ent[b].clicking && this.ent[b].clicking()) : this.ent[b].statedFinger == this.touches[d] && (this.ent[b].clickedFinger = null, this.ent[b].statedFinger = null, this.ent[b].isClicked = !1)
                }
                this.fingerCount.length ||
                    (null != this.ent[b].clickedFinger && (this.ent[b].clickedFinger = null), null != this.ent[b].statedFinger && (this.ent[b].statedFinger = null), this.ent[b].isClicked = !1)
            }
        },
        multitouchstart: function(c, d, e) {
            var f = this.bindings[ig.KEY.MOUSE1];
            f && (this.actions[f] = !0, this.presses[f] = !0);
            this.touches[e] = new b(c + ig.game.screen.x, d + ig.game.screen.y, e, "down");
            this.fingerCount.push(e);
            this.touches[e].pressed = !0;
            for (c = 0; c < this.ent.length; c++)
                for (var j in this.touches)
                    if (d = this.touches[j].x, e = this.touches[j].y, d > this.ent[c].pos.x &&
                        (d < this.ent[c].pos.x + this.ent[c].size.x && e > this.ent[c].pos.y && e < this.ent[c].pos.y + this.ent[c].size.y) && (this.ent[c].clickedFinger = this.touches[j], "function" == typeof this.ent[c].clicked)) {
                        this.ent[c].clicked();
                        break
                    }
        },
        multitouchmove: function(b, d, e) {
            this.touches[e] && (this.touches[e].x = b + ig.game.screen.x, this.touches[e].y = d + ig.game.screen.y)
        },
        multitouchend: function(b, d, e) {
            this.touches[e] && (this.touches[e].state = "up", this.delayedTouchUp.push(e), (b = this.bindings[ig.KEY.MOUSE1]) && this._isEmpty(this.touches) &&
                (this.delayedKeyup[b] = !0));
            this.fingerCount.pop();
            this.touches[e].released = !0;
            for (b = 0; b < this.ent.length; b++)
                for (var f in this.touches) {
                    d = this.touches[f].x;
                    var j = this.touches[f].y;
                    d > this.ent[b].pos.x && d < this.ent[b].pos.x + this.ent[b].size.x && j > this.ent[b].pos.y && j < this.ent[b].pos.y + this.ent[b].size.y && this.ent[b].clickedFinger == this.touches[e] && "function" == typeof this.ent[b].released && this.ent[b].released()
                }
        },
        multitouchcancel: function(b, d, e) {
            this.multitouchend(b, d, e)
        },
        _isEmpty: function(b) {
            for (var d in b) return !1;
            return !0
        }
    })
});
ig.baked = !0;
ig.module("plugins.gamedist").defines(function() {
    window.GD_OPTIONS = {
        gameId: "64134b15b57e4df28f1d9789d832179c",
        advertisementSettings: {
            debug: !1,
            autoplay: !1,
            locale: "en"
        },
        onEvent: function(b) {
            switch (b.name) {
                case "SDK_GAME_START":
                    ig.gd.unfreez();
                    if ("function" === typeof ig.gd.onAdClose) ig.gd.onAdClose();
                    ig.gd.onAdClose = 0;
                    break;
                case "SDK_GAME_PAUSE":
                    ig.gd.freez()
            }
        }
    };
    var b, c = document.getElementsByTagName("script")[0];
    document.getElementById("gamedistribution-jssdk") || (b = document.createElement("script"), b.id =
        "gamedistribution-jssdk", b.src = "", c.parentNode.insertBefore(b, c));
    ig.Gd = ig.Class.extend({
        pausedMidplay: 0,
        prevMuted: {
            bgm: 0,
            sfx: 0
        },
        onAdClose: 0,
        adShowing: 0,
        isFreez: 0,
        createTestButton: function() {
            this.createDiv("Resume", 5, "green", "white", function() {
                ig.game && ig.gd && ig.gd.unfreez()
            });
            this.createDiv("Pause", 70, "red", "white", function() {
                ig.game && ig.gd && ig.gd.freez()
            })
        },
        createDiv: function(b, c, f, j, n) {
            var l = ig.$new("button");
            document.body.appendChild(l);
            l.textContent =
                b;
            l.style.position = "absolute";
            l.style.color = j;
            l.style.background = f;
            l.style.top = "5px";
            l.style.left = c + "px";
            l.style.padding = "5px";
            l.style.fontSize = "12px";
            l.style.fontFamily = "Arial";
            l.style.cursor = "pointer";
            l.style["z-index"] = 999999;
            l.onclick = n
        },
        freez: function() {
            // gdsdk && (ig.game && (ig.game.pauseGame(), ig.soundHandler && ig.soundHandler.forceMuteAll()), this.isFreez = 1)
        },
        unfreez: function() {
            // gdsdk && (this.isFreez = this.adShowing = 0, ig.game && (ig.game.resumeGame(), ig.soundHandler && ig.soundHandler.forceUnMuteAll()))
        },
        show: function(b) {
            // gdsdk ? this.adShowing || (this.adShowing = 1, this.onAdClose = b || 0, gdsdk.showBanner()) : 
            b()
        }
    });
    ig.gd = new ig.Gd
});
var Box2D = {
    SCALE: 0.1
};
(function(b, c) {
    function d() {}!(Object.defineProperty instanceof Function) && (Object.prototype.__defineGetter__ instanceof Function && Object.prototype.__defineSetter__ instanceof Function) && (Object.defineProperty = function(b, c, d) {
        d.get instanceof Function && b.__defineGetter__(c, d.get);
        d.set instanceof Function && b.__defineSetter__(c, d.set)
    });
    b.inherit = function(b, c) {
        d.prototype = c.prototype;
        b.prototype = new d;
        b.prototype.constructor = b
    };
    b.generateCallback = function(b, c) {
        return function() {
            c.apply(b, arguments)
        }
    };
    b.NVector = function(b) {
        b === c && (b = 0);
        for (var d = Array(b || 0), j = 0; j < b; ++j) d[j] = 0;
        return d
    };
    b.is = function(b, d) {
        return null === b ? !1 : d instanceof Function && b instanceof d || b.constructor.__implements != c && b.constructor.__implements[d] ? !0 : !1
    };
    b.parseUInt = function(b) {
        return Math.abs(parseInt(b))
    }
})(Box2D);
var Vector = Array,
    Vector_a2j_Number = Box2D.NVector;
"undefined" === typeof Box2D && (Box2D = {});
"undefined" === typeof Box2D.Collision && (Box2D.Collision = {});
"undefined" === typeof Box2D.Collision.Shapes && (Box2D.Collision.Shapes = {});
"undefined" === typeof Box2D.Common && (Box2D.Common = {});
"undefined" === typeof Box2D.Common.Math && (Box2D.Common.Math = {});
"undefined" === typeof Box2D.Dynamics && (Box2D.Dynamics = {});
"undefined" === typeof Box2D.Dynamics.Contacts && (Box2D.Dynamics.Contacts = {});
"undefined" === typeof Box2D.Dynamics.Controllers && (Box2D.Dynamics.Controllers = {});
"undefined" === typeof Box2D.Dynamics.Joints && (Box2D.Dynamics.Joints = {});
(function() {
    function b() {
        b.b2AABB.apply(this, arguments)
    }

    function c() {
        c.b2Bound.apply(this, arguments)
    }

    function d() {
        d.b2BoundValues.apply(this, arguments);
        this.constructor === d && this.b2BoundValues.apply(this, arguments)
    }

    function e() {
        e.b2Collision.apply(this, arguments)
    }

    function f() {
        f.b2ContactID.apply(this, arguments);
        this.constructor === f && this.b2ContactID.apply(this, arguments)
    }

    function j() {
        j.b2ContactPoint.apply(this, arguments)
    }

    function n() {
        n.b2Distance.apply(this, arguments)
    }

    function l() {
        l.b2DistanceInput.apply(this,
            arguments)
    }

    function g() {
        g.b2DistanceOutput.apply(this, arguments)
    }

    function r() {
        r.b2DistanceProxy.apply(this, arguments)
    }

    function y() {
        y.b2DynamicTree.apply(this, arguments);
        this.constructor === y && this.b2DynamicTree.apply(this, arguments)
    }

    function z() {
        z.b2DynamicTreeBroadPhase.apply(this, arguments)
    }

    function A() {
        A.b2DynamicTreeNode.apply(this, arguments)
    }

    function B() {
        B.b2DynamicTreePair.apply(this, arguments)
    }

    function E() {
        E.b2Manifold.apply(this, arguments);
        this.constructor === E && this.b2Manifold.apply(this, arguments)
    }

    function D() {
        D.b2ManifoldPoint.apply(this, arguments);
        this.constructor === D && this.b2ManifoldPoint.apply(this, arguments)
    }

    function u() {
        u.b2Point.apply(this, arguments)
    }

    function G() {
        G.b2RayCastInput.apply(this, arguments);
        this.constructor === G && this.b2RayCastInput.apply(this, arguments)
    }

    function K() {
        K.b2RayCastOutput.apply(this, arguments)
    }

    function L() {
        L.b2Segment.apply(this, arguments)
    }

    function N() {
        N.b2SeparationFunction.apply(this, arguments)
    }

    function Q() {
        Q.b2Simplex.apply(this, arguments);
        this.constructor ===
            Q && this.b2Simplex.apply(this, arguments)
    }

    function I() {
        I.b2SimplexCache.apply(this, arguments)
    }

    function fa() {
        fa.b2SimplexVertex.apply(this, arguments)
    }

    function O() {
        O.b2TimeOfImpact.apply(this, arguments)
    }

    function P() {
        P.b2TOIInput.apply(this, arguments)
    }

    function ba() {
        ba.b2WorldManifold.apply(this, arguments);
        this.constructor === ba && this.b2WorldManifold.apply(this, arguments)
    }

    function U() {
        U.ClipVertex.apply(this, arguments)
    }

    function s() {
        s.Features.apply(this, arguments)
    }

    function x() {
        x.b2CircleShape.apply(this,
            arguments);
        this.constructor === x && this.b2CircleShape.apply(this, arguments)
    }

    function F() {
        F.b2EdgeChainDef.apply(this, arguments);
        this.constructor === F && this.b2EdgeChainDef.apply(this, arguments)
    }

    function C() {
        C.b2EdgeShape.apply(this, arguments);
        this.constructor === C && this.b2EdgeShape.apply(this, arguments)
    }

    function H() {
        H.b2MassData.apply(this, arguments)
    }

    function aa() {
        aa.b2PolygonShape.apply(this, arguments);
        this.constructor === aa && this.b2PolygonShape.apply(this, arguments)
    }

    function R() {
        R.b2Shape.apply(this,
            arguments);
        this.constructor === R && this.b2Shape.apply(this, arguments)
    }

    function m() {
        m.b2Color.apply(this, arguments);
        this.constructor === m && this.b2Color.apply(this, arguments)
    }

    function q() {
        q.b2Settings.apply(this, arguments)
    }

    function J() {
        J.b2Mat22.apply(this, arguments);
        this.constructor === J && this.b2Mat22.apply(this, arguments)
    }

    function t() {
        t.b2Mat33.apply(this, arguments);
        this.constructor === t && this.b2Mat33.apply(this, arguments)
    }

    function M() {
        M.b2Math.apply(this, arguments)
    }

    function V() {
        V.b2Sweep.apply(this, arguments)
    }

    function ha() {
        ha.b2Transform.apply(this, arguments);
        this.constructor === ha && this.b2Transform.apply(this, arguments)
    }

    function ia() {
        ia.b2Vec2.apply(this, arguments);
        this.constructor === ia && this.b2Vec2.apply(this, arguments)
    }

    function la() {
        la.b2Vec3.apply(this, arguments);
        this.constructor === la && this.b2Vec3.apply(this, arguments)
    }

    function ra() {
        ra.b2Body.apply(this, arguments);
        this.constructor === ra && this.b2Body.apply(this, arguments)
    }

    function oa() {
        oa.b2BodyDef.apply(this, arguments);
        this.constructor === oa && this.b2BodyDef.apply(this,
            arguments)
    }

    function va() {
        va.b2ContactFilter.apply(this, arguments)
    }

    function X() {
        X.b2ContactImpulse.apply(this, arguments)
    }

    function Eb() {
        Eb.b2ContactListener.apply(this, arguments)
    }

    function za() {
        za.b2ContactManager.apply(this, arguments);
        this.constructor === za && this.b2ContactManager.apply(this, arguments)
    }

    function bb() {
        bb.b2DebugDraw.apply(this, arguments);
        this.constructor === bb && this.b2DebugDraw.apply(this, arguments)
    }

    function db() {
        db.b2DestructionListener.apply(this, arguments)
    }

    function Ka() {
        Ka.b2FilterData.apply(this,
            arguments)
    }

    function La() {
        La.b2Fixture.apply(this, arguments);
        this.constructor === La && this.b2Fixture.apply(this, arguments)
    }

    function eb() {
        eb.b2FixtureDef.apply(this, arguments);
        this.constructor === eb && this.b2FixtureDef.apply(this, arguments)
    }

    function Ma() {
        Ma.b2Island.apply(this, arguments);
        this.constructor === Ma && this.b2Island.apply(this, arguments)
    }

    function ob() {
        ob.b2TimeStep.apply(this, arguments)
    }

    function pb() {
        pb.b2World.apply(this, arguments);
        this.constructor === pb && this.b2World.apply(this, arguments)
    }

    function da() {
        da.b2CircleContact.apply(this,
            arguments)
    }

    function p() {
        p.b2Contact.apply(this, arguments);
        this.constructor === p && this.b2Contact.apply(this, arguments)
    }

    function qb() {
        qb.b2ContactConstraint.apply(this, arguments);
        this.constructor === qb && this.b2ContactConstraint.apply(this, arguments)
    }

    function Fb() {
        Fb.b2ContactConstraintPoint.apply(this, arguments)
    }

    function Gb() {
        Gb.b2ContactEdge.apply(this, arguments)
    }

    function rb() {
        rb.b2ContactFactory.apply(this, arguments);
        this.constructor === rb && this.b2ContactFactory.apply(this, arguments)
    }

    function Aa() {
        Aa.b2ContactRegister.apply(this,
            arguments)
    }

    function fb() {
        fb.b2ContactResult.apply(this, arguments)
    }

    function ca() {
        ca.b2ContactSolver.apply(this, arguments);
        this.constructor === ca && this.b2ContactSolver.apply(this, arguments)
    }

    function ib() {
        ib.b2EdgeAndCircleContact.apply(this, arguments)
    }

    function pa() {
        pa.b2NullContact.apply(this, arguments);
        this.constructor === pa && this.b2NullContact.apply(this, arguments)
    }

    function sa() {
        sa.b2PolyAndCircleContact.apply(this, arguments)
    }

    function jb() {
        jb.b2PolyAndEdgeContact.apply(this, arguments)
    }

    function tb() {
        tb.b2PolygonContact.apply(this,
            arguments)
    }

    function ub() {
        ub.b2PositionSolverManifold.apply(this, arguments);
        this.constructor === ub && this.b2PositionSolverManifold.apply(this, arguments)
    }

    function Jb() {
        Jb.b2BuoyancyController.apply(this, arguments)
    }

    function vb() {
        vb.b2ConstantAccelController.apply(this, arguments)
    }

    function Da() {
        Da.b2ConstantForceController.apply(this, arguments)
    }

    function gb() {
        gb.b2Controller.apply(this, arguments)
    }

    function wb() {
        wb.b2ControllerEdge.apply(this, arguments)
    }

    function Ua() {
        Ua.b2GravityController.apply(this, arguments)
    }

    function Va() {
        Va.b2TensorDampingController.apply(this, arguments)
    }

    function Wa() {
        Wa.b2DistanceJoint.apply(this, arguments);
        this.constructor === Wa && this.b2DistanceJoint.apply(this, arguments)
    }

    function Pa() {
        Pa.b2DistanceJointDef.apply(this, arguments);
        this.constructor === Pa && this.b2DistanceJointDef.apply(this, arguments)
    }

    function Xa() {
        Xa.b2FrictionJoint.apply(this, arguments);
        this.constructor === Xa && this.b2FrictionJoint.apply(this, arguments)
    }

    function Za() {
        Za.b2FrictionJointDef.apply(this, arguments);
        this.constructor ===
            Za && this.b2FrictionJointDef.apply(this, arguments)
    }

    function Fa() {
        Fa.b2GearJoint.apply(this, arguments);
        this.constructor === Fa && this.b2GearJoint.apply(this, arguments)
    }

    function ea() {
        ea.b2GearJointDef.apply(this, arguments);
        this.constructor === ea && this.b2GearJointDef.apply(this, arguments)
    }

    function W() {
        W.b2Jacobian.apply(this, arguments)
    }

    function Ra() {
        Ra.b2Joint.apply(this, arguments);
        this.constructor === Ra && this.b2Joint.apply(this, arguments)
    }

    function kb() {
        kb.b2JointDef.apply(this, arguments);
        this.constructor ===
            kb && this.b2JointDef.apply(this, arguments)
    }

    function Oa() {
        Oa.b2JointEdge.apply(this, arguments)
    }

    function $a() {
        $a.b2LineJoint.apply(this, arguments);
        this.constructor === $a && this.b2LineJoint.apply(this, arguments)
    }

    function hb() {
        hb.b2LineJointDef.apply(this, arguments);
        this.constructor === hb && this.b2LineJointDef.apply(this, arguments)
    }

    function Qa() {
        Qa.b2MouseJoint.apply(this, arguments);
        this.constructor === Qa && this.b2MouseJoint.apply(this, arguments)
    }

    function ya() {
        ya.b2MouseJointDef.apply(this, arguments);
        this.constructor ===
            ya && this.b2MouseJointDef.apply(this, arguments)
    }

    function Ga() {
        Ga.b2PrismaticJoint.apply(this, arguments);
        this.constructor === Ga && this.b2PrismaticJoint.apply(this, arguments)
    }

    function xa() {
        xa.b2PrismaticJointDef.apply(this, arguments);
        this.constructor === xa && this.b2PrismaticJointDef.apply(this, arguments)
    }

    function Y() {
        Y.b2PulleyJoint.apply(this, arguments);
        this.constructor === Y && this.b2PulleyJoint.apply(this, arguments)
    }

    function na() {
        na.b2PulleyJointDef.apply(this, arguments);
        this.constructor === na && this.b2PulleyJointDef.apply(this,
            arguments)
    }

    function ma() {
        ma.b2RevoluteJoint.apply(this, arguments);
        this.constructor === ma && this.b2RevoluteJoint.apply(this, arguments)
    }

    function ka() {
        ka.b2RevoluteJointDef.apply(this, arguments);
        this.constructor === ka && this.b2RevoluteJointDef.apply(this, arguments)
    }

    function Ba() {
        Ba.b2WeldJoint.apply(this, arguments);
        this.constructor === Ba && this.b2WeldJoint.apply(this, arguments)
    }

    function Sa() {
        Sa.b2WeldJointDef.apply(this, arguments);
        this.constructor === Sa && this.b2WeldJointDef.apply(this, arguments)
    }
    Box2D.Collision.IBroadPhase =
        "Box2D.Collision.IBroadPhase";
    Box2D.Collision.b2AABB = b;
    Box2D.Collision.b2Bound = c;
    Box2D.Collision.b2BoundValues = d;
    Box2D.Collision.b2Collision = e;
    Box2D.Collision.b2ContactID = f;
    Box2D.Collision.b2ContactPoint = j;
    Box2D.Collision.b2Distance = n;
    Box2D.Collision.b2DistanceInput = l;
    Box2D.Collision.b2DistanceOutput = g;
    Box2D.Collision.b2DistanceProxy = r;
    Box2D.Collision.b2DynamicTree = y;
    Box2D.Collision.b2DynamicTreeBroadPhase = z;
    Box2D.Collision.b2DynamicTreeNode = A;
    Box2D.Collision.b2DynamicTreePair = B;
    Box2D.Collision.b2Manifold =
        E;
    Box2D.Collision.b2ManifoldPoint = D;
    Box2D.Collision.b2Point = u;
    Box2D.Collision.b2RayCastInput = G;
    Box2D.Collision.b2RayCastOutput = K;
    Box2D.Collision.b2Segment = L;
    Box2D.Collision.b2SeparationFunction = N;
    Box2D.Collision.b2Simplex = Q;
    Box2D.Collision.b2SimplexCache = I;
    Box2D.Collision.b2SimplexVertex = fa;
    Box2D.Collision.b2TimeOfImpact = O;
    Box2D.Collision.b2TOIInput = P;
    Box2D.Collision.b2WorldManifold = ba;
    Box2D.Collision.ClipVertex = U;
    Box2D.Collision.Features = s;
    Box2D.Collision.Shapes.b2CircleShape = x;
    Box2D.Collision.Shapes.b2EdgeChainDef =
        F;
    Box2D.Collision.Shapes.b2EdgeShape = C;
    Box2D.Collision.Shapes.b2MassData = H;
    Box2D.Collision.Shapes.b2PolygonShape = aa;
    Box2D.Collision.Shapes.b2Shape = R;
    Box2D.Common.b2internal = "Box2D.Common.b2internal";
    Box2D.Common.b2Color = m;
    Box2D.Common.b2Settings = q;
    Box2D.Common.Math.b2Mat22 = J;
    Box2D.Common.Math.b2Mat33 = t;
    Box2D.Common.Math.b2Math = M;
    Box2D.Common.Math.b2Sweep = V;
    Box2D.Common.Math.b2Transform = ha;
    Box2D.Common.Math.b2Vec2 = ia;
    Box2D.Common.Math.b2Vec3 = la;
    Box2D.Dynamics.b2Body = ra;
    Box2D.Dynamics.b2BodyDef = oa;
    Box2D.Dynamics.b2ContactFilter = va;
    Box2D.Dynamics.b2ContactImpulse = X;
    Box2D.Dynamics.b2ContactListener = Eb;
    Box2D.Dynamics.b2ContactManager = za;
    Box2D.Dynamics.b2DebugDraw = bb;
    Box2D.Dynamics.b2DestructionListener = db;
    Box2D.Dynamics.b2FilterData = Ka;
    Box2D.Dynamics.b2Fixture = La;
    Box2D.Dynamics.b2FixtureDef = eb;
    Box2D.Dynamics.b2Island = Ma;
    Box2D.Dynamics.b2TimeStep = ob;
    Box2D.Dynamics.b2World = pb;
    Box2D.Dynamics.Contacts.b2CircleContact = da;
    Box2D.Dynamics.Contacts.b2Contact = p;
    Box2D.Dynamics.Contacts.b2ContactConstraint =
        qb;
    Box2D.Dynamics.Contacts.b2ContactConstraintPoint = Fb;
    Box2D.Dynamics.Contacts.b2ContactEdge = Gb;
    Box2D.Dynamics.Contacts.b2ContactFactory = rb;
    Box2D.Dynamics.Contacts.b2ContactRegister = Aa;
    Box2D.Dynamics.Contacts.b2ContactResult = fb;
    Box2D.Dynamics.Contacts.b2ContactSolver = ca;
    Box2D.Dynamics.Contacts.b2EdgeAndCircleContact = ib;
    Box2D.Dynamics.Contacts.b2NullContact = pa;
    Box2D.Dynamics.Contacts.b2PolyAndCircleContact = sa;
    Box2D.Dynamics.Contacts.b2PolyAndEdgeContact = jb;
    Box2D.Dynamics.Contacts.b2PolygonContact =
        tb;
    Box2D.Dynamics.Contacts.b2PositionSolverManifold = ub;
    Box2D.Dynamics.Controllers.b2BuoyancyController = Jb;
    Box2D.Dynamics.Controllers.b2ConstantAccelController = vb;
    Box2D.Dynamics.Controllers.b2ConstantForceController = Da;
    Box2D.Dynamics.Controllers.b2Controller = gb;
    Box2D.Dynamics.Controllers.b2ControllerEdge = wb;
    Box2D.Dynamics.Controllers.b2GravityController = Ua;
    Box2D.Dynamics.Controllers.b2TensorDampingController = Va;
    Box2D.Dynamics.Joints.b2DistanceJoint = Wa;
    Box2D.Dynamics.Joints.b2DistanceJointDef = Pa;
    Box2D.Dynamics.Joints.b2FrictionJoint =
        Xa;
    Box2D.Dynamics.Joints.b2FrictionJointDef = Za;
    Box2D.Dynamics.Joints.b2GearJoint = Fa;
    Box2D.Dynamics.Joints.b2GearJointDef = ea;
    Box2D.Dynamics.Joints.b2Jacobian = W;
    Box2D.Dynamics.Joints.b2Joint = Ra;
    Box2D.Dynamics.Joints.b2JointDef = kb;
    Box2D.Dynamics.Joints.b2JointEdge = Oa;
    Box2D.Dynamics.Joints.b2LineJoint = $a;
    Box2D.Dynamics.Joints.b2LineJointDef = hb;
    Box2D.Dynamics.Joints.b2MouseJoint = Qa;
    Box2D.Dynamics.Joints.b2MouseJointDef = ya;
    Box2D.Dynamics.Joints.b2PrismaticJoint = Ga;
    Box2D.Dynamics.Joints.b2PrismaticJointDef =
        xa;
    Box2D.Dynamics.Joints.b2PulleyJoint = Y;
    Box2D.Dynamics.Joints.b2PulleyJointDef = na;
    Box2D.Dynamics.Joints.b2RevoluteJoint = ma;
    Box2D.Dynamics.Joints.b2RevoluteJointDef = ka;
    Box2D.Dynamics.Joints.b2WeldJoint = Ba;
    Box2D.Dynamics.Joints.b2WeldJointDef = Sa
})();
Box2D.postDefs = [];
(function() {
    var b = Box2D.Collision.Shapes.b2CircleShape,
        c = Box2D.Collision.Shapes.b2PolygonShape,
        d = Box2D.Collision.Shapes.b2Shape,
        e = Box2D.Common.b2Settings,
        f = Box2D.Common.Math.b2Math,
        j = Box2D.Common.Math.b2Sweep,
        n = Box2D.Common.Math.b2Transform,
        l = Box2D.Common.Math.b2Vec2,
        g = Box2D.Collision.b2AABB,
        r = Box2D.Collision.b2Bound,
        y = Box2D.Collision.b2BoundValues,
        z = Box2D.Collision.b2Collision,
        A = Box2D.Collision.b2ContactID,
        B = Box2D.Collision.b2ContactPoint,
        E = Box2D.Collision.b2Distance,
        D = Box2D.Collision.b2DistanceInput,
        u = Box2D.Collision.b2DistanceOutput,
        G = Box2D.Collision.b2DistanceProxy,
        K = Box2D.Collision.b2DynamicTree,
        L = Box2D.Collision.b2DynamicTreeBroadPhase,
        N = Box2D.Collision.b2DynamicTreeNode,
        Q = Box2D.Collision.b2DynamicTreePair,
        I = Box2D.Collision.b2Manifold,
        fa = Box2D.Collision.b2ManifoldPoint,
        O = Box2D.Collision.b2Point,
        P = Box2D.Collision.b2RayCastInput,
        ba = Box2D.Collision.b2RayCastOutput,
        U = Box2D.Collision.b2Segment,
        s = Box2D.Collision.b2SeparationFunction,
        x = Box2D.Collision.b2Simplex,
        F = Box2D.Collision.b2SimplexCache,
        C = Box2D.Collision.b2SimplexVertex,
        H = Box2D.Collision.b2TimeOfImpact,
        aa = Box2D.Collision.b2TOIInput,
        R = Box2D.Collision.b2WorldManifold,
        m = Box2D.Collision.ClipVertex,
        q = Box2D.Collision.Features,
        J = Box2D.Collision.IBroadPhase;
    g.b2AABB = function() {
        this.lowerBound = new l;
        this.upperBound = new l
    };
    g.prototype.IsValid = function() {
        var b = this.upperBound.y - this.lowerBound.y;
        return 0 <= this.upperBound.x - this.lowerBound.x && 0 <= b && this.lowerBound.IsValid() && this.upperBound.IsValid()
    };
    g.prototype.GetCenter = function() {
        return new l((this.lowerBound.x +
            this.upperBound.x) / 2, (this.lowerBound.y + this.upperBound.y) / 2)
    };
    g.prototype.GetExtents = function() {
        return new l((this.upperBound.x - this.lowerBound.x) / 2, (this.upperBound.y - this.lowerBound.y) / 2)
    };
    g.prototype.Contains = function(b) {
        return this.lowerBound.x <= b.lowerBound.x && this.lowerBound.y <= b.lowerBound.y && b.upperBound.x <= this.upperBound.x && b.upperBound.y <= this.upperBound.y
    };
    g.prototype.RayCast = function(b, c) {
        var d = -Number.MAX_VALUE,
            e = Number.MAX_VALUE,
            m = c.p1.x,
            f = c.p1.y,
            g = c.p2.x - c.p1.x,
            q = c.p2.y - c.p1.y,
            s =
            Math.abs(q),
            l = b.normal,
            j = 0,
            x = 0,
            C = 0;
        if (Math.abs(g) < Number.MIN_VALUE) {
            if (m < this.lowerBound.x || this.upperBound.x < m) return !1
        } else if (j = 1 / g, x = (this.lowerBound.x - m) * j, j *= this.upperBound.x - m, C = -1, x > j && (C = x, x = j, j = C, C = 1), x > d && (l.x = C, l.y = 0, d = x), e = Math.min(e, j), d > e) return !1;
        if (s < Number.MIN_VALUE) {
            if (f < this.lowerBound.y || this.upperBound.y < f) return !1
        } else if (j = 1 / q, x = (this.lowerBound.y - f) * j, j *= this.upperBound.y - f, C = -1, x > j && (C = x, x = j, j = C, C = 1), x > d && (l.y = C, l.x = 0, d = x), e = Math.min(e, j), d > e) return !1;
        b.fraction = d;
        return !0
    };
    g.prototype.TestOverlap = function(b) {
        var c = b.lowerBound.y - this.upperBound.y,
            d = this.lowerBound.y - b.upperBound.y;
        return 0 < b.lowerBound.x - this.upperBound.x || 0 < c || 0 < this.lowerBound.x - b.upperBound.x || 0 < d ? !1 : !0
    };
    g.Combine = function(b, c) {
        var d = new g;
        d.Combine(b, c);
        return d
    };
    g.prototype.Combine = function(b, c) {
        this.lowerBound.x = Math.min(b.lowerBound.x, c.lowerBound.x);
        this.lowerBound.y = Math.min(b.lowerBound.y, c.lowerBound.y);
        this.upperBound.x = Math.max(b.upperBound.x, c.upperBound.x);
        this.upperBound.y = Math.max(b.upperBound.y,
            c.upperBound.y)
    };
    r.b2Bound = function() {};
    r.prototype.IsLower = function() {
        return 0 == (this.value & 1)
    };
    r.prototype.IsUpper = function() {
        return 1 == (this.value & 1)
    };
    r.prototype.Swap = function(b) {
        var c = this.value,
            d = this.proxy,
            e = this.stabbingCount;
        this.value = b.value;
        this.proxy = b.proxy;
        this.stabbingCount = b.stabbingCount;
        b.value = c;
        b.proxy = d;
        b.stabbingCount = e
    };
    y.b2BoundValues = function() {};
    y.prototype.b2BoundValues = function() {
        this.lowerValues = new Vector_a2j_Number;
        this.lowerValues[0] = 0;
        this.lowerValues[1] = 0;
        this.upperValues =
            new Vector_a2j_Number;
        this.upperValues[0] = 0;
        this.upperValues[1] = 0
    };
    z.b2Collision = function() {};
    z.ClipSegmentToLine = function(b, c, d, e) {
        void 0 === e && (e = 0);
        var m, f = 0;
        m = c[0];
        var g = m.v;
        m = c[1];
        var q = m.v,
            s = d.x * g.x + d.y * g.y - e;
        m = d.x * q.x + d.y * q.y - e;
        0 >= s && b[f++].Set(c[0]);
        0 >= m && b[f++].Set(c[1]);
        0 > s * m && (d = s / (s - m), m = b[f], m = m.v, m.x = g.x + d * (q.x - g.x), m.y = g.y + d * (q.y - g.y), m = b[f], m.id = (0 < s ? c[0] : c[1]).id, ++f);
        return f
    };
    z.EdgeSeparation = function(b, c, d, e, m) {
        void 0 === d && (d = 0);
        parseInt(b.m_vertexCount);
        var f = b.m_vertices;
        b = b.m_normals;
        var g = parseInt(e.m_vertexCount),
            q = e.m_vertices,
            s, l;
        s = c.R;
        l = b[d];
        b = s.col1.x * l.x + s.col2.x * l.y;
        e = s.col1.y * l.x + s.col2.y * l.y;
        s = m.R;
        var j = s.col1.x * b + s.col1.y * e;
        s = s.col2.x * b + s.col2.y * e;
        for (var x = 0, C = Number.MAX_VALUE, J = 0; J < g; ++J) l = q[J], l = l.x * j + l.y * s, l < C && (C = l, x = J);
        l = f[d];
        s = c.R;
        d = c.position.x + (s.col1.x * l.x + s.col2.x * l.y);
        c = c.position.y + (s.col1.y * l.x + s.col2.y * l.y);
        l = q[x];
        s = m.R;
        f = m.position.x + (s.col1.x * l.x + s.col2.x * l.y);
        m = m.position.y + (s.col1.y * l.x + s.col2.y * l.y);
        return (f - d) * b + (m - c) * e
    };
    z.FindMaxSeparation = function(b,
        c, d, e, m) {
        var f = parseInt(c.m_vertexCount),
            g = c.m_normals,
            s, q;
        q = m.R;
        s = e.m_centroid;
        var l = m.position.x + (q.col1.x * s.x + q.col2.x * s.y),
            j = m.position.y + (q.col1.y * s.x + q.col2.y * s.y);
        q = d.R;
        s = c.m_centroid;
        l -= d.position.x + (q.col1.x * s.x + q.col2.x * s.y);
        j -= d.position.y + (q.col1.y * s.x + q.col2.y * s.y);
        q = l * d.R.col1.x + j * d.R.col1.y;
        for (var j = l * d.R.col2.x + j * d.R.col2.y, l = 0, x = -Number.MAX_VALUE, C = 0; C < f; ++C) s = g[C], s = s.x * q + s.y * j, s > x && (x = s, l = C);
        g = z.EdgeSeparation(c, d, l, e, m);
        s = parseInt(0 <= l - 1 ? l - 1 : f - 1);
        q = z.EdgeSeparation(c, d, s, e, m);
        var j = parseInt(l + 1 < f ? l + 1 : 0),
            x = z.EdgeSeparation(c, d, j, e, m),
            J = 0,
            u = 0;
        if (q > g && q > x) u = -1, C = s, J = q;
        else if (x > g) u = 1, C = j, J = x;
        else return b[0] = l, g;
        for (;;)
            if (l = -1 == u ? 0 <= C - 1 ? C - 1 : f - 1 : C + 1 < f ? C + 1 : 0, g = z.EdgeSeparation(c, d, l, e, m), g > J) C = l, J = g;
            else break;
        b[0] = C;
        return J
    };
    z.FindIncidentEdge = function(b, c, d, e, m, f) {
        void 0 === e && (e = 0);
        parseInt(c.m_vertexCount);
        var g = c.m_normals,
            s = parseInt(m.m_vertexCount);
        c = m.m_vertices;
        m = m.m_normals;
        var q;
        q = d.R;
        d = g[e];
        var g = q.col1.x * d.x + q.col2.x * d.y,
            l = q.col1.y * d.x + q.col2.y * d.y;
        q = f.R;
        d = q.col1.x *
            g + q.col1.y * l;
        l = q.col2.x * g + q.col2.y * l;
        g = d;
        q = 0;
        for (var j = Number.MAX_VALUE, x = 0; x < s; ++x) d = m[x], d = g * d.x + l * d.y, d < j && (j = d, q = x);
        m = parseInt(q);
        g = parseInt(m + 1 < s ? m + 1 : 0);
        s = b[0];
        d = c[m];
        q = f.R;
        s.v.x = f.position.x + (q.col1.x * d.x + q.col2.x * d.y);
        s.v.y = f.position.y + (q.col1.y * d.x + q.col2.y * d.y);
        s.id.features.referenceEdge = e;
        s.id.features.incidentEdge = m;
        s.id.features.incidentVertex = 0;
        s = b[1];
        d = c[g];
        q = f.R;
        s.v.x = f.position.x + (q.col1.x * d.x + q.col2.x * d.y);
        s.v.y = f.position.y + (q.col1.y * d.x + q.col2.y * d.y);
        s.id.features.referenceEdge =
            e;
        s.id.features.incidentEdge = g;
        s.id.features.incidentVertex = 1
    };
    z.MakeClipPointVector = function() {
        var b = new Vector(2);
        b[0] = new m;
        b[1] = new m;
        return b
    };
    z.CollidePolygons = function(b, c, d, m, f) {
        var g;
        b.m_pointCount = 0;
        var s = c.m_radius + m.m_radius;
        z.s_edgeAO[0] = 0;
        var q = z.FindMaxSeparation(z.s_edgeAO, c, d, m, f);
        g = z.s_edgeAO[0];
        if (!(q > s)) {
            var l;
            z.s_edgeBO[0] = 0;
            var j = z.FindMaxSeparation(z.s_edgeBO, m, f, c, d);
            l = z.s_edgeBO[0];
            if (!(j > s)) {
                var x = 0,
                    C = 0;
                j > 0.98 * q + 0.001 ? (q = m, m = c, c = f, x = l, b.m_type = I.e_faceB, C = 1) : (q = c, c = d, d = f,
                    x = g, b.m_type = I.e_faceA, C = 0);
                g = z.s_incidentEdge;
                z.FindIncidentEdge(g, q, c, x, m, d);
                l = parseInt(q.m_vertexCount);
                f = q.m_vertices;
                var q = f[x],
                    J;
                J = x + 1 < l ? f[parseInt(x + 1)] : f[0];
                x = z.s_localTangent;
                x.Set(J.x - q.x, J.y - q.y);
                x.Normalize();
                f = z.s_localNormal;
                f.x = x.y;
                f.y = -x.x;
                m = z.s_planePoint;
                m.Set(0.5 * (q.x + J.x), 0.5 * (q.y + J.y));
                j = z.s_tangent;
                l = c.R;
                j.x = l.col1.x * x.x + l.col2.x * x.y;
                j.y = l.col1.y * x.x + l.col2.y * x.y;
                var u = z.s_tangent2;
                u.x = -j.x;
                u.y = -j.y;
                x = z.s_normal;
                x.x = j.y;
                x.y = -j.x;
                var F = z.s_v11,
                    H = z.s_v12;
                F.x = c.position.x + (l.col1.x *
                    q.x + l.col2.x * q.y);
                F.y = c.position.y + (l.col1.y * q.x + l.col2.y * q.y);
                H.x = c.position.x + (l.col1.x * J.x + l.col2.x * J.y);
                H.y = c.position.y + (l.col1.y * J.x + l.col2.y * J.y);
                c = x.x * F.x + x.y * F.y;
                l = j.x * H.x + j.y * H.y + s;
                J = z.s_clipPoints1;
                q = z.s_clipPoints2;
                H = z.ClipSegmentToLine(J, g, u, -j.x * F.x - j.y * F.y + s);
                if (!(2 > H) && (H = z.ClipSegmentToLine(q, J, j, l), !(2 > H))) {
                    b.m_localPlaneNormal.SetV(f);
                    b.m_localPoint.SetV(m);
                    for (m = f = 0; m < e.b2_maxManifoldPoints; ++m) g = q[m], x.x * g.v.x + x.y * g.v.y - c <= s && (j = b.m_points[f], l = d.R, u = g.v.x - d.position.x, F = g.v.y -
                        d.position.y, j.m_localPoint.x = u * l.col1.x + F * l.col1.y, j.m_localPoint.y = u * l.col2.x + F * l.col2.y, j.m_id.Set(g.id), j.m_id.features.flip = C, ++f);
                    b.m_pointCount = f
                }
            }
        }
    };
    z.CollideCircles = function(b, c, d, e, m) {
        b.m_pointCount = 0;
        var f, g;
        f = d.R;
        g = c.m_p;
        var q = d.position.x + (f.col1.x * g.x + f.col2.x * g.y);
        d = d.position.y + (f.col1.y * g.x + f.col2.y * g.y);
        f = m.R;
        g = e.m_p;
        q = m.position.x + (f.col1.x * g.x + f.col2.x * g.y) - q;
        m = m.position.y + (f.col1.y * g.x + f.col2.y * g.y) - d;
        f = c.m_radius + e.m_radius;
        q * q + m * m > f * f || (b.m_type = I.e_circles, b.m_localPoint.SetV(c.m_p),
            b.m_localPlaneNormal.SetZero(), b.m_pointCount = 1, b.m_points[0].m_localPoint.SetV(e.m_p), b.m_points[0].m_id.key = 0)
    };
    z.CollidePolygonAndCircle = function(b, c, d, e, m) {
        var f = b.m_pointCount = 0,
            g = 0,
            q, s;
        s = m.R;
        q = e.m_p;
        var l = m.position.y + (s.col1.y * q.x + s.col2.y * q.y),
            f = m.position.x + (s.col1.x * q.x + s.col2.x * q.y) - d.position.x,
            g = l - d.position.y;
        s = d.R;
        d = f * s.col1.x + g * s.col1.y;
        s = f * s.col2.x + g * s.col2.y;
        var j = 0,
            l = -Number.MAX_VALUE;
        m = c.m_radius + e.m_radius;
        var x = parseInt(c.m_vertexCount),
            C = c.m_vertices;
        c = c.m_normals;
        for (var J =
                0; J < x; ++J) {
            q = C[J];
            f = d - q.x;
            g = s - q.y;
            q = c[J];
            f = q.x * f + q.y * g;
            if (f > m) return;
            f > l && (l = f, j = J)
        }
        f = parseInt(j);
        g = parseInt(f + 1 < x ? f + 1 : 0);
        q = C[f];
        C = C[g];
        if (l < Number.MIN_VALUE) b.m_pointCount = 1, b.m_type = I.e_faceA, b.m_localPlaneNormal.SetV(c[j]), b.m_localPoint.x = 0.5 * (q.x + C.x), b.m_localPoint.y = 0.5 * (q.y + C.y);
        else if (l = (d - C.x) * (q.x - C.x) + (s - C.y) * (q.y - C.y), 0 >= (d - q.x) * (C.x - q.x) + (s - q.y) * (C.y - q.y)) {
            if ((d - q.x) * (d - q.x) + (s - q.y) * (s - q.y) > m * m) return;
            b.m_pointCount = 1;
            b.m_type = I.e_faceA;
            b.m_localPlaneNormal.x = d - q.x;
            b.m_localPlaneNormal.y =
                s - q.y;
            b.m_localPlaneNormal.Normalize();
            b.m_localPoint.SetV(q)
        } else if (0 >= l) {
            if ((d - C.x) * (d - C.x) + (s - C.y) * (s - C.y) > m * m) return;
            b.m_pointCount = 1;
            b.m_type = I.e_faceA;
            b.m_localPlaneNormal.x = d - C.x;
            b.m_localPlaneNormal.y = s - C.y;
            b.m_localPlaneNormal.Normalize();
            b.m_localPoint.SetV(C)
        } else {
            j = 0.5 * (q.x + C.x);
            q = 0.5 * (q.y + C.y);
            l = (d - j) * c[f].x + (s - q) * c[f].y;
            if (l > m) return;
            b.m_pointCount = 1;
            b.m_type = I.e_faceA;
            b.m_localPlaneNormal.x = c[f].x;
            b.m_localPlaneNormal.y = c[f].y;
            b.m_localPlaneNormal.Normalize();
            b.m_localPoint.Set(j,
                q)
        }
        b.m_points[0].m_localPoint.SetV(e.m_p);
        b.m_points[0].m_id.key = 0
    };
    z.TestOverlap = function(b, c) {
        var d = c.lowerBound,
            e = b.upperBound,
            m = d.x - e.x,
            f = d.y - e.y,
            d = b.lowerBound,
            e = c.upperBound,
            g = d.y - e.y;
        return 0 < m || 0 < f || 0 < d.x - e.x || 0 < g ? !1 : !0
    };
    Box2D.postDefs.push(function() {
        Box2D.Collision.b2Collision.s_incidentEdge = z.MakeClipPointVector();
        Box2D.Collision.b2Collision.s_clipPoints1 = z.MakeClipPointVector();
        Box2D.Collision.b2Collision.s_clipPoints2 = z.MakeClipPointVector();
        Box2D.Collision.b2Collision.s_edgeAO = new Vector_a2j_Number(1);
        Box2D.Collision.b2Collision.s_edgeBO = new Vector_a2j_Number(1);
        Box2D.Collision.b2Collision.s_localTangent = new l;
        Box2D.Collision.b2Collision.s_localNormal = new l;
        Box2D.Collision.b2Collision.s_planePoint = new l;
        Box2D.Collision.b2Collision.s_normal = new l;
        Box2D.Collision.b2Collision.s_tangent = new l;
        Box2D.Collision.b2Collision.s_tangent2 = new l;
        Box2D.Collision.b2Collision.s_v11 = new l;
        Box2D.Collision.b2Collision.s_v12 = new l;
        Box2D.Collision.b2Collision.b2CollidePolyTempVec = new l;
        Box2D.Collision.b2Collision.b2_nullFeature =
            255
    });
    A.b2ContactID = function() {
        this.features = new q
    };
    A.prototype.b2ContactID = function() {
        this.features._m_id = this
    };
    A.prototype.Set = function(b) {
        this.key = b._key
    };
    A.prototype.Copy = function() {
        var b = new A;
        b.key = this.key;
        return b
    };
    Object.defineProperty(A.prototype, "key", {
        enumerable: !1,
        configurable: !0,
        get: function() {
            return this._key
        }
    });
    Object.defineProperty(A.prototype, "key", {
        enumerable: !1,
        configurable: !0,
        set: function(b) {
            void 0 === b && (b = 0);
            this._key = b;
            this.features._referenceEdge = this._key & 255;
            this.features._incidentEdge =
                (this._key & 65280) >> 8 & 255;
            this.features._incidentVertex = (this._key & 16711680) >> 16 & 255;
            this.features._flip = (this._key & 4278190080) >> 24 & 255
        }
    });
    B.b2ContactPoint = function() {
        this.position = new l;
        this.velocity = new l;
        this.normal = new l;
        this.id = new A
    };
    E.b2Distance = function() {};
    E.Distance = function(b, c, d) {
        ++E.b2_gjkCalls;
        var m = d.proxyA,
            g = d.proxyB,
            q = d.transformA,
            s = d.transformB,
            j = E.s_simplex;
        j.ReadCache(c, m, q, g, s);
        var x = j.m_vertices,
            C = E.s_saveA,
            J = E.s_saveB,
            u = 0;
        j.GetClosestPoint().LengthSquared();
        for (var F = 0, H, R = 0; 20 >
            R;) {
            u = j.m_count;
            for (F = 0; F < u; F++) C[F] = x[F].indexA, J[F] = x[F].indexB;
            switch (j.m_count) {
                case 1:
                    break;
                case 2:
                    j.Solve2();
                    break;
                case 3:
                    j.Solve3();
                    break;
                default:
                    e.b2Assert(!1)
            }
            if (3 == j.m_count) break;
            H = j.GetClosestPoint();
            H.LengthSquared();
            F = j.GetSearchDirection();
            if (F.LengthSquared() < Number.MIN_VALUE * Number.MIN_VALUE) break;
            H = x[j.m_count];
            H.indexA = m.GetSupport(f.MulTMV(q.R, F.GetNegative()));
            H.wA = f.MulX(q, m.GetVertex(H.indexA));
            H.indexB = g.GetSupport(f.MulTMV(s.R, F));
            H.wB = f.MulX(s, g.GetVertex(H.indexB));
            H.w =
                f.SubtractVV(H.wB, H.wA);
            ++R;
            ++E.b2_gjkIters;
            for (var n = !1, F = 0; F < u; F++)
                if (H.indexA == C[F] && H.indexB == J[F]) {
                    n = !0;
                    break
                }
            if (n) break;
            ++j.m_count
        }
        E.b2_gjkMaxIters = f.Max(E.b2_gjkMaxIters, R);
        j.GetWitnessPoints(b.pointA, b.pointB);
        b.distance = f.SubtractVV(b.pointA, b.pointB).Length();
        b.iterations = R;
        j.WriteCache(c);
        d.useRadii && (c = m.m_radius, g = g.m_radius, b.distance > c + g && b.distance > Number.MIN_VALUE ? (b.distance -= c + g, d = f.SubtractVV(b.pointB, b.pointA), d.Normalize(), b.pointA.x += c * d.x, b.pointA.y += c * d.y, b.pointB.x -= g * d.x,
            b.pointB.y -= g * d.y) : (H = new l, H.x = 0.5 * (b.pointA.x + b.pointB.x), H.y = 0.5 * (b.pointA.y + b.pointB.y), b.pointA.x = b.pointB.x = H.x, b.pointA.y = b.pointB.y = H.y, b.distance = 0))
    };
    Box2D.postDefs.push(function() {
        Box2D.Collision.b2Distance.s_simplex = new x;
        Box2D.Collision.b2Distance.s_saveA = new Vector_a2j_Number(3);
        Box2D.Collision.b2Distance.s_saveB = new Vector_a2j_Number(3)
    });
    D.b2DistanceInput = function() {};
    u.b2DistanceOutput = function() {
        this.pointA = new l;
        this.pointB = new l
    };
    G.b2DistanceProxy = function() {};
    G.prototype.Set =
        function(m) {
            switch (m.GetType()) {
                case d.e_circleShape:
                    m = m instanceof b ? m : null;
                    this.m_vertices = new Vector(1, !0);
                    this.m_vertices[0] = m.m_p;
                    this.m_count = 1;
                    this.m_radius = m.m_radius;
                    break;
                case d.e_polygonShape:
                    m = m instanceof c ? m : null;
                    this.m_vertices = m.m_vertices;
                    this.m_count = m.m_vertexCount;
                    this.m_radius = m.m_radius;
                    break;
                default:
                    e.b2Assert(!1)
            }
        };
    G.prototype.GetSupport = function(b) {
        for (var c = 0, d = this.m_vertices[0].x * b.x + this.m_vertices[0].y * b.y, e = 1; e < this.m_count; ++e) {
            var m = this.m_vertices[e].x * b.x + this.m_vertices[e].y *
                b.y;
            m > d && (c = e, d = m)
        }
        return c
    };
    G.prototype.GetSupportVertex = function(b) {
        for (var c = 0, d = this.m_vertices[0].x * b.x + this.m_vertices[0].y * b.y, e = 1; e < this.m_count; ++e) {
            var m = this.m_vertices[e].x * b.x + this.m_vertices[e].y * b.y;
            m > d && (c = e, d = m)
        }
        return this.m_vertices[c]
    };
    G.prototype.GetVertexCount = function() {
        return this.m_count
    };
    G.prototype.GetVertex = function(b) {
        void 0 === b && (b = 0);
        e.b2Assert(0 <= b && b < this.m_count);
        return this.m_vertices[b]
    };
    K.b2DynamicTree = function() {};
    K.prototype.b2DynamicTree = function() {
        this.m_freeList =
            this.m_root = null;
        this.m_insertionCount = this.m_path = 0
    };
    K.prototype.CreateProxy = function(b, c) {
        var d = this.AllocateNode(),
            m = e.b2_aabbExtension,
            f = e.b2_aabbExtension;
        d.aabb.lowerBound.x = b.lowerBound.x - m;
        d.aabb.lowerBound.y = b.lowerBound.y - f;
        d.aabb.upperBound.x = b.upperBound.x + m;
        d.aabb.upperBound.y = b.upperBound.y + f;
        d.userData = c;
        this.InsertLeaf(d);
        return d
    };
    K.prototype.DestroyProxy = function(b) {
        this.RemoveLeaf(b);
        this.FreeNode(b)
    };
    K.prototype.MoveProxy = function(b, c, d) {
        e.b2Assert(b.IsLeaf());
        if (b.aabb.Contains(c)) return !1;
        this.RemoveLeaf(b);
        var m = e.b2_aabbExtension + e.b2_aabbMultiplier * (0 < d.x ? d.x : -d.x);
        d = e.b2_aabbExtension + e.b2_aabbMultiplier * (0 < d.y ? d.y : -d.y);
        b.aabb.lowerBound.x = c.lowerBound.x - m;
        b.aabb.lowerBound.y = c.lowerBound.y - d;
        b.aabb.upperBound.x = c.upperBound.x + m;
        b.aabb.upperBound.y = c.upperBound.y + d;
        this.InsertLeaf(b);
        return !0
    };
    K.prototype.Rebalance = function(b) {
        void 0 === b && (b = 0);
        if (null != this.m_root)
            for (var c = 0; c < b; c++) {
                for (var d = this.m_root, e = 0; !1 == d.IsLeaf();) d = this.m_path >> e & 1 ? d.child2 : d.child1, e = e + 1 & 31;
                ++this.m_path;
                this.RemoveLeaf(d);
                this.InsertLeaf(d)
            }
    };
    K.prototype.GetFatAABB = function(b) {
        return b.aabb
    };
    K.prototype.GetUserData = function(b) {
        return b.userData
    };
    K.prototype.Query = function(b, c) {
        if (null != this.m_root) {
            var d = new Vector,
                e = 0;
            for (d[e++] = this.m_root; 0 < e;) {
                var m = d[--e];
                if (m.aabb.TestOverlap(c))
                    if (m.IsLeaf()) {
                        if (!b(m)) break
                    } else d[e++] = m.child1, d[e++] = m.child2
            }
        }
    };
    K.prototype.RayCast = function(b, c) {
        if (null != this.m_root) {
            var d = c.p1,
                e = c.p2,
                m = f.SubtractVV(d, e);
            m.Normalize();
            var m = f.CrossFV(1, m),
                q = f.AbsV(m),
                s = c.maxFraction,
                l = new g,
                j = 0,
                x = 0,
                j = d.x + s * (e.x - d.x),
                x = d.y + s * (e.y - d.y);
            l.lowerBound.x = Math.min(d.x, j);
            l.lowerBound.y = Math.min(d.y, x);
            l.upperBound.x = Math.max(d.x, j);
            l.upperBound.y = Math.max(d.y, x);
            var C = new Vector,
                J = 0;
            for (C[J++] = this.m_root; 0 < J;)
                if (s = C[--J], !1 != s.aabb.TestOverlap(l) && (j = s.aabb.GetCenter(), x = s.aabb.GetExtents(), !(0 < Math.abs(m.x * (d.x - j.x) + m.y * (d.y - j.y)) - q.x * x.x - q.y * x.y)))
                    if (s.IsLeaf()) {
                        j = new P;
                        j.p1 = c.p1;
                        j.p2 = c.p2;
                        j.maxFraction = c.maxFraction;
                        s = b(j, s);
                        if (0 == s) break;
                        0 < s && (j = d.x + s * (e.x - d.x), x = d.y + s * (e.y - d.y),
                            l.lowerBound.x = Math.min(d.x, j), l.lowerBound.y = Math.min(d.y, x), l.upperBound.x = Math.max(d.x, j), l.upperBound.y = Math.max(d.y, x))
                    } else C[J++] = s.child1, C[J++] = s.child2
        }
    };
    K.prototype.AllocateNode = function() {
        if (this.m_freeList) {
            var b = this.m_freeList;
            this.m_freeList = b.parent;
            b.parent = null;
            b.child1 = null;
            b.child2 = null;
            return b
        }
        return new N
    };
    K.prototype.FreeNode = function(b) {
        b.parent = this.m_freeList;
        this.m_freeList = b
    };
    K.prototype.InsertLeaf = function(b) {
        ++this.m_insertionCount;
        if (null == this.m_root) this.m_root =
            b, this.m_root.parent = null;
        else {
            var c = b.aabb.GetCenter(),
                d = this.m_root;
            if (!1 == d.IsLeaf()) {
                do var e = d.child1,
                    d = d.child2,
                    d = Math.abs((e.aabb.lowerBound.x + e.aabb.upperBound.x) / 2 - c.x) + Math.abs((e.aabb.lowerBound.y + e.aabb.upperBound.y) / 2 - c.y) < Math.abs((d.aabb.lowerBound.x + d.aabb.upperBound.x) / 2 - c.x) + Math.abs((d.aabb.lowerBound.y + d.aabb.upperBound.y) / 2 - c.y) ? e : d; while (!1 == d.IsLeaf())
            }
            c = d.parent;
            e = this.AllocateNode();
            e.parent = c;
            e.userData = null;
            e.aabb.Combine(b.aabb, d.aabb);
            if (c) {
                d.parent.child1 == d ? c.child1 =
                    e : c.child2 = e;
                e.child1 = d;
                e.child2 = b;
                d.parent = e;
                b.parent = e;
                do {
                    if (c.aabb.Contains(e.aabb)) break;
                    c.aabb.Combine(c.child1.aabb, c.child2.aabb);
                    e = c;
                    c = c.parent
                } while (c)
            } else e.child1 = d, e.child2 = b, d.parent = e, this.m_root = b.parent = e
        }
    };
    K.prototype.RemoveLeaf = function(b) {
        if (b == this.m_root) this.m_root = null;
        else {
            var c = b.parent,
                d = c.parent;
            b = c.child1 == b ? c.child2 : c.child1;
            if (d) {
                d.child1 == c ? d.child1 = b : d.child2 = b;
                b.parent = d;
                for (this.FreeNode(c); d;) {
                    c = d.aabb;
                    d.aabb = g.Combine(d.child1.aabb, d.child2.aabb);
                    if (c.Contains(d.aabb)) break;
                    d = d.parent
                }
            } else this.m_root = b, b.parent = null, this.FreeNode(c)
        }
    };
    L.b2DynamicTreeBroadPhase = function() {
        this.m_tree = new K;
        this.m_moveBuffer = new Vector;
        this.m_pairBuffer = new Vector;
        this.m_pairCount = 0
    };
    L.prototype.CreateProxy = function(b, c) {
        var d = this.m_tree.CreateProxy(b, c);
        ++this.m_proxyCount;
        this.BufferMove(d);
        return d
    };
    L.prototype.DestroyProxy = function(b) {
        this.UnBufferMove(b);
        --this.m_proxyCount;
        this.m_tree.DestroyProxy(b)
    };
    L.prototype.MoveProxy = function(b, c, d) {
        this.m_tree.MoveProxy(b, c, d) && this.BufferMove(b)
    };
    L.prototype.TestOverlap = function(b, c) {
        var d = this.m_tree.GetFatAABB(b),
            e = this.m_tree.GetFatAABB(c);
        return d.TestOverlap(e)
    };
    L.prototype.GetUserData = function(b) {
        return this.m_tree.GetUserData(b)
    };
    L.prototype.GetFatAABB = function(b) {
        return this.m_tree.GetFatAABB(b)
    };
    L.prototype.GetProxyCount = function() {
        return this.m_proxyCount
    };
    L.prototype.UpdatePairs = function(b) {
        for (var c = this, d = c.m_pairCount = 0, e, d = 0; d < c.m_moveBuffer.length; ++d) {
            e = c.m_moveBuffer[d];
            var m = c.m_tree.GetFatAABB(e);
            c.m_tree.Query(function(b) {
                if (b ==
                    e) return !0;
                c.m_pairCount == c.m_pairBuffer.length && (c.m_pairBuffer[c.m_pairCount] = new Q);
                var d = c.m_pairBuffer[c.m_pairCount];
                d.proxyA = b < e ? b : e;
                d.proxyB = b >= e ? b : e;
                ++c.m_pairCount;
                return !0
            }, m)
        }
        for (d = c.m_moveBuffer.length = 0; d < c.m_pairCount;) {
            var m = c.m_pairBuffer[d],
                f = c.m_tree.GetUserData(m.proxyA),
                g = c.m_tree.GetUserData(m.proxyB);
            b(f, g);
            for (++d; d < c.m_pairCount;) {
                f = c.m_pairBuffer[d];
                if (f.proxyA != m.proxyA || f.proxyB != m.proxyB) break;
                ++d
            }
        }
    };
    L.prototype.Query = function(b, c) {
        this.m_tree.Query(b, c)
    };
    L.prototype.RayCast =
        function(b, c) {
            this.m_tree.RayCast(b, c)
        };
    L.prototype.Validate = function() {};
    L.prototype.Rebalance = function(b) {
        void 0 === b && (b = 0);
        this.m_tree.Rebalance(b)
    };
    L.prototype.BufferMove = function(b) {
        this.m_moveBuffer[this.m_moveBuffer.length] = b
    };
    L.prototype.UnBufferMove = function(b) {
        this.m_moveBuffer.splice(parseInt(this.m_moveBuffer.indexOf(b)), 1)
    };
    L.prototype.ComparePairs = function() {
        return 0
    };
    L.__implements = {};
    L.__implements[J] = !0;
    N.b2DynamicTreeNode = function() {
        this.aabb = new g
    };
    N.prototype.IsLeaf = function() {
        return null ==
            this.child1
    };
    Q.b2DynamicTreePair = function() {};
    I.b2Manifold = function() {
        this.m_pointCount = 0
    };
    I.prototype.b2Manifold = function() {
        this.m_points = new Vector(e.b2_maxManifoldPoints);
        for (var b = 0; b < e.b2_maxManifoldPoints; b++) this.m_points[b] = new fa;
        this.m_localPlaneNormal = new l;
        this.m_localPoint = new l
    };
    I.prototype.Reset = function() {
        for (var b = 0; b < e.b2_maxManifoldPoints; b++)(this.m_points[b] instanceof fa ? this.m_points[b] : null).Reset();
        this.m_localPlaneNormal.SetZero();
        this.m_localPoint.SetZero();
        this.m_pointCount =
            this.m_type = 0
    };
    I.prototype.Set = function(b) {
        this.m_pointCount = b.m_pointCount;
        for (var c = 0; c < e.b2_maxManifoldPoints; c++)(this.m_points[c] instanceof fa ? this.m_points[c] : null).Set(b.m_points[c]);
        this.m_localPlaneNormal.SetV(b.m_localPlaneNormal);
        this.m_localPoint.SetV(b.m_localPoint);
        this.m_type = b.m_type
    };
    I.prototype.Copy = function() {
        var b = new I;
        b.Set(this);
        return b
    };
    Box2D.postDefs.push(function() {
        Box2D.Collision.b2Manifold.e_circles = 1;
        Box2D.Collision.b2Manifold.e_faceA = 2;
        Box2D.Collision.b2Manifold.e_faceB =
            4
    });
    fa.b2ManifoldPoint = function() {
        this.m_localPoint = new l;
        this.m_id = new A
    };
    fa.prototype.b2ManifoldPoint = function() {
        this.Reset()
    };
    fa.prototype.Reset = function() {
        this.m_localPoint.SetZero();
        this.m_tangentImpulse = this.m_normalImpulse = 0;
        this.m_id.key = 0
    };
    fa.prototype.Set = function(b) {
        this.m_localPoint.SetV(b.m_localPoint);
        this.m_normalImpulse = b.m_normalImpulse;
        this.m_tangentImpulse = b.m_tangentImpulse;
        this.m_id.Set(b.m_id)
    };
    O.b2Point = function() {
        this.p = new l
    };
    O.prototype.Support = function() {
        return this.p
    };
    O.prototype.GetFirstVertex = function() {
        return this.p
    };
    P.b2RayCastInput = function() {
        this.p1 = new l;
        this.p2 = new l
    };
    P.prototype.b2RayCastInput = function(b, c, d) {
        void 0 === b && (b = null);
        void 0 === c && (c = null);
        void 0 === d && (d = 1);
        b && this.p1.SetV(b);
        c && this.p2.SetV(c);
        this.maxFraction = d
    };
    ba.b2RayCastOutput = function() {
        this.normal = new l
    };
    U.b2Segment = function() {
        this.p1 = new l;
        this.p2 = new l
    };
    U.prototype.TestSegment = function(b, c, d, e) {
        void 0 === e && (e = 0);
        var m = d.p1,
            f = d.p2.x - m.x,
            g = d.p2.y - m.y;
        d = this.p2.y - this.p1.y;
        var q = -(this.p2.x -
                this.p1.x),
            s = 100 * Number.MIN_VALUE,
            l = -(f * d + g * q);
        if (l > s) {
            var j = m.x - this.p1.x,
                x = m.y - this.p1.y,
                m = j * d + x * q;
            if (0 <= m && m <= e * l && (e = -f * x + g * j, -s * l <= e && e <= l * (1 + s))) return m /= l, e = Math.sqrt(d * d + q * q), b[0] = m, c.Set(d / e, q / e), !0
        }
        return !1
    };
    U.prototype.Extend = function(b) {
        this.ExtendForward(b);
        this.ExtendBackward(b)
    };
    U.prototype.ExtendForward = function(b) {
        var c = this.p2.x - this.p1.x,
            d = this.p2.y - this.p1.y;
        b = Math.min(0 < c ? (b.upperBound.x - this.p1.x) / c : 0 > c ? (b.lowerBound.x - this.p1.x) / c : Number.POSITIVE_INFINITY, 0 < d ? (b.upperBound.y -
            this.p1.y) / d : 0 > d ? (b.lowerBound.y - this.p1.y) / d : Number.POSITIVE_INFINITY);
        this.p2.x = this.p1.x + c * b;
        this.p2.y = this.p1.y + d * b
    };
    U.prototype.ExtendBackward = function(b) {
        var c = -this.p2.x + this.p1.x,
            d = -this.p2.y + this.p1.y;
        b = Math.min(0 < c ? (b.upperBound.x - this.p2.x) / c : 0 > c ? (b.lowerBound.x - this.p2.x) / c : Number.POSITIVE_INFINITY, 0 < d ? (b.upperBound.y - this.p2.y) / d : 0 > d ? (b.lowerBound.y - this.p2.y) / d : Number.POSITIVE_INFINITY);
        this.p1.x = this.p2.x + c * b;
        this.p1.y = this.p2.y + d * b
    };
    s.b2SeparationFunction = function() {
        this.m_localPoint =
            new l;
        this.m_axis = new l
    };
    s.prototype.Initialize = function(b, c, d, m, g) {
        this.m_proxyA = c;
        this.m_proxyB = m;
        var q = parseInt(b.count);
        e.b2Assert(0 < q && 3 > q);
        var j, x, C, J, F = 0,
            H = 0;
        1 == q ? (this.m_type = s.e_points, j = this.m_proxyA.GetVertex(b.indexA[0]), x = this.m_proxyB.GetVertex(b.indexB[0]), q = j, b = d.R, c = d.position.x + (b.col1.x * q.x + b.col2.x * q.y), m = d.position.y + (b.col1.y * q.x + b.col2.y * q.y), q = x, b = g.R, C = g.position.x + (b.col1.x * q.x + b.col2.x * q.y), J = g.position.y + (b.col1.y * q.x + b.col2.y * q.y), this.m_axis.x = C - c, this.m_axis.y = J - m, this.m_axis.Normalize()) :
            (b.indexB[0] == b.indexB[1] ? (this.m_type = s.e_faceA, c = this.m_proxyA.GetVertex(b.indexA[0]), m = this.m_proxyA.GetVertex(b.indexA[1]), x = this.m_proxyB.GetVertex(b.indexB[0]), this.m_localPoint.x = 0.5 * (c.x + m.x), this.m_localPoint.y = 0.5 * (c.y + m.y), this.m_axis = f.CrossVF(f.SubtractVV(m, c), 1), this.m_axis.Normalize(), q = this.m_axis, b = d.R, F = b.col1.x * q.x + b.col2.x * q.y, H = b.col1.y * q.x + b.col2.y * q.y, q = this.m_localPoint, b = d.R, c = d.position.x + (b.col1.x * q.x + b.col2.x * q.y), m = d.position.y + (b.col1.y * q.x + b.col2.y * q.y), q = x, b = g.R, C =
                g.position.x + (b.col1.x * q.x + b.col2.x * q.y), J = g.position.y + (b.col1.y * q.x + b.col2.y * q.y), F = (C - c) * F + (J - m) * H) : b.indexA[0] == b.indexA[0] ? (this.m_type = s.e_faceB, C = this.m_proxyB.GetVertex(b.indexB[0]), J = this.m_proxyB.GetVertex(b.indexB[1]), j = this.m_proxyA.GetVertex(b.indexA[0]), this.m_localPoint.x = 0.5 * (C.x + J.x), this.m_localPoint.y = 0.5 * (C.y + J.y), this.m_axis = f.CrossVF(f.SubtractVV(J, C), 1), this.m_axis.Normalize(), q = this.m_axis, b = g.R, F = b.col1.x * q.x + b.col2.x * q.y, H = b.col1.y * q.x + b.col2.y * q.y, q = this.m_localPoint, b =
                g.R, C = g.position.x + (b.col1.x * q.x + b.col2.x * q.y), J = g.position.y + (b.col1.y * q.x + b.col2.y * q.y), q = j, b = d.R, c = d.position.x + (b.col1.x * q.x + b.col2.x * q.y), m = d.position.y + (b.col1.y * q.x + b.col2.y * q.y), F = (c - C) * F + (m - J) * H) : (c = this.m_proxyA.GetVertex(b.indexA[0]), m = this.m_proxyA.GetVertex(b.indexA[1]), C = this.m_proxyB.GetVertex(b.indexB[0]), J = this.m_proxyB.GetVertex(b.indexB[1]), f.MulX(d, j), j = f.MulMV(d.R, f.SubtractVV(m, c)), f.MulX(g, x), F = f.MulMV(g.R, f.SubtractVV(J, C)), g = j.x * j.x + j.y * j.y, x = F.x * F.x + F.y * F.y, b = f.SubtractVV(F,
                j), d = j.x * b.x + j.y * b.y, b = F.x * b.x + F.y * b.y, j = j.x * F.x + j.y * F.y, H = g * x - j * j, F = 0, 0 != H && (F = f.Clamp((j * b - d * x) / H, 0, 1)), 0 > (j * F + b) / x && (F = f.Clamp((j - d) / g, 0, 1)), j = new l, j.x = c.x + F * (m.x - c.x), j.y = c.y + F * (m.y - c.y), x = new l, x.x = C.x + F * (J.x - C.x), x.y = C.y + F * (J.y - C.y), 0 == F || 1 == F ? (this.m_type = s.e_faceB, this.m_axis = f.CrossVF(f.SubtractVV(J, C), 1), this.m_axis.Normalize(), this.m_localPoint = x) : (this.m_type = s.e_faceA, this.m_axis = f.CrossVF(f.SubtractVV(m, c), 1), this.m_localPoint = j)), 0 > F && this.m_axis.NegativeSelf())
    };
    s.prototype.Evaluate =
        function(b, c) {
            var d, m, g = 0;
            switch (this.m_type) {
                case s.e_points:
                    return d = f.MulTMV(b.R, this.m_axis), m = f.MulTMV(c.R, this.m_axis.GetNegative()), d = this.m_proxyA.GetSupportVertex(d), m = this.m_proxyB.GetSupportVertex(m), d = f.MulX(b, d), m = f.MulX(c, m), (m.x - d.x) * this.m_axis.x + (m.y - d.y) * this.m_axis.y;
                case s.e_faceA:
                    return g = f.MulMV(b.R, this.m_axis), d = f.MulX(b, this.m_localPoint), m = f.MulTMV(c.R, g.GetNegative()), m = this.m_proxyB.GetSupportVertex(m), m = f.MulX(c, m), (m.x - d.x) * g.x + (m.y - d.y) * g.y;
                case s.e_faceB:
                    return g = f.MulMV(c.R,
                        this.m_axis), m = f.MulX(c, this.m_localPoint), d = f.MulTMV(b.R, g.GetNegative()), d = this.m_proxyA.GetSupportVertex(d), d = f.MulX(b, d), (d.x - m.x) * g.x + (d.y - m.y) * g.y;
                default:
                    return e.b2Assert(!1), 0
            }
        };
    Box2D.postDefs.push(function() {
        Box2D.Collision.b2SeparationFunction.e_points = 1;
        Box2D.Collision.b2SeparationFunction.e_faceA = 2;
        Box2D.Collision.b2SeparationFunction.e_faceB = 4
    });
    x.b2Simplex = function() {
        this.m_v1 = new C;
        this.m_v2 = new C;
        this.m_v3 = new C;
        this.m_vertices = new Vector(3)
    };
    x.prototype.b2Simplex = function() {
        this.m_vertices[0] =
            this.m_v1;
        this.m_vertices[1] = this.m_v2;
        this.m_vertices[2] = this.m_v3
    };
    x.prototype.ReadCache = function(b, c, d, m, g) {
        e.b2Assert(0 <= b.count && 3 >= b.count);
        var q, s;
        this.m_count = b.count;
        for (var l = this.m_vertices, j = 0; j < this.m_count; j++) {
            var x = l[j];
            x.indexA = b.indexA[j];
            x.indexB = b.indexB[j];
            q = c.GetVertex(x.indexA);
            s = m.GetVertex(x.indexB);
            x.wA = f.MulX(d, q);
            x.wB = f.MulX(g, s);
            x.w = f.SubtractVV(x.wB, x.wA);
            x.a = 0
        }
        if (1 < this.m_count && (b = b.metric, q = this.GetMetric(), q < 0.5 * b || 2 * b < q || q < Number.MIN_VALUE)) this.m_count = 0;
        0 == this.m_count &&
            (x = l[0], x.indexA = 0, x.indexB = 0, q = c.GetVertex(0), s = m.GetVertex(0), x.wA = f.MulX(d, q), x.wB = f.MulX(g, s), x.w = f.SubtractVV(x.wB, x.wA), this.m_count = 1)
    };
    x.prototype.WriteCache = function(b) {
        b.metric = this.GetMetric();
        b.count = Box2D.parseUInt(this.m_count);
        for (var c = this.m_vertices, d = 0; d < this.m_count; d++) b.indexA[d] = Box2D.parseUInt(c[d].indexA), b.indexB[d] = Box2D.parseUInt(c[d].indexB)
    };
    x.prototype.GetSearchDirection = function() {
        switch (this.m_count) {
            case 1:
                return this.m_v1.w.GetNegative();
            case 2:
                var b = f.SubtractVV(this.m_v2.w,
                    this.m_v1.w);
                return 0 < f.CrossVV(b, this.m_v1.w.GetNegative()) ? f.CrossFV(1, b) : f.CrossVF(b, 1);
            default:
                return e.b2Assert(!1), new l
        }
    };
    x.prototype.GetClosestPoint = function() {
        switch (this.m_count) {
            case 0:
                return e.b2Assert(!1), new l;
            case 1:
                return this.m_v1.w;
            case 2:
                return new l(this.m_v1.a * this.m_v1.w.x + this.m_v2.a * this.m_v2.w.x, this.m_v1.a * this.m_v1.w.y + this.m_v2.a * this.m_v2.w.y);
            default:
                return e.b2Assert(!1), new l
        }
    };
    x.prototype.GetWitnessPoints = function(b, c) {
        switch (this.m_count) {
            case 0:
                e.b2Assert(!1);
                break;
            case 1:
                b.SetV(this.m_v1.wA);
                c.SetV(this.m_v1.wB);
                break;
            case 2:
                b.x = this.m_v1.a * this.m_v1.wA.x + this.m_v2.a * this.m_v2.wA.x;
                b.y = this.m_v1.a * this.m_v1.wA.y + this.m_v2.a * this.m_v2.wA.y;
                c.x = this.m_v1.a * this.m_v1.wB.x + this.m_v2.a * this.m_v2.wB.x;
                c.y = this.m_v1.a * this.m_v1.wB.y + this.m_v2.a * this.m_v2.wB.y;
                break;
            case 3:
                c.x = b.x = this.m_v1.a * this.m_v1.wA.x + this.m_v2.a * this.m_v2.wA.x + this.m_v3.a * this.m_v3.wA.x;
                c.y = b.y = this.m_v1.a * this.m_v1.wA.y + this.m_v2.a * this.m_v2.wA.y + this.m_v3.a * this.m_v3.wA.y;
                break;
            default:
                e.b2Assert(!1)
        }
    };
    x.prototype.GetMetric = function() {
        switch (this.m_count) {
            case 0:
                return e.b2Assert(!1), 0;
            case 1:
                return 0;
            case 2:
                return f.SubtractVV(this.m_v1.w, this.m_v2.w).Length();
            case 3:
                return f.CrossVV(f.SubtractVV(this.m_v2.w, this.m_v1.w), f.SubtractVV(this.m_v3.w, this.m_v1.w));
            default:
                return e.b2Assert(!1), 0
        }
    };
    x.prototype.Solve2 = function() {
        var b = this.m_v1.w,
            c = this.m_v2.w,
            d = f.SubtractVV(c, b),
            b = -(b.x * d.x + b.y * d.y);
        0 >= b ? this.m_count = this.m_v1.a = 1 : (c = c.x * d.x + c.y * d.y, 0 >= c ? (this.m_count = this.m_v2.a = 1, this.m_v1.Set(this.m_v2)) :
            (d = 1 / (c + b), this.m_v1.a = c * d, this.m_v2.a = b * d, this.m_count = 2))
    };
    x.prototype.Solve3 = function() {
        var b = this.m_v1.w,
            c = this.m_v2.w,
            d = this.m_v3.w,
            m = f.SubtractVV(c, b),
            e = f.Dot(b, m),
            g = f.Dot(c, m),
            e = -e,
            q = f.SubtractVV(d, b),
            s = f.Dot(b, q),
            l = f.Dot(d, q),
            s = -s,
            j = f.SubtractVV(d, c),
            x = f.Dot(c, j),
            j = f.Dot(d, j),
            x = -x,
            q = f.CrossVV(m, q),
            m = q * f.CrossVV(c, d),
            d = q * f.CrossVV(d, b),
            b = q * f.CrossVV(b, c);
        0 >= e && 0 >= s ? this.m_count = this.m_v1.a = 1 : 0 < g && 0 < e && 0 >= b ? (l = 1 / (g + e), this.m_v1.a = g * l, this.m_v2.a = e * l, this.m_count = 2) : 0 < l && 0 < s && 0 >= d ? (g = 1 / (l + s),
            this.m_v1.a = l * g, this.m_v3.a = s * g, this.m_count = 2, this.m_v2.Set(this.m_v3)) : 0 >= g && 0 >= x ? (this.m_count = this.m_v2.a = 1, this.m_v1.Set(this.m_v2)) : 0 >= l && 0 >= j ? (this.m_count = this.m_v3.a = 1, this.m_v1.Set(this.m_v3)) : 0 < j && 0 < x && 0 >= m ? (g = 1 / (j + x), this.m_v2.a = j * g, this.m_v3.a = x * g, this.m_count = 2, this.m_v1.Set(this.m_v3)) : (g = 1 / (m + d + b), this.m_v1.a = m * g, this.m_v2.a = d * g, this.m_v3.a = b * g, this.m_count = 3)
    };
    F.b2SimplexCache = function() {
        this.indexA = new Vector_a2j_Number(3);
        this.indexB = new Vector_a2j_Number(3)
    };
    C.b2SimplexVertex =
        function() {};
    C.prototype.Set = function(b) {
        this.wA.SetV(b.wA);
        this.wB.SetV(b.wB);
        this.w.SetV(b.w);
        this.a = b.a;
        this.indexA = b.indexA;
        this.indexB = b.indexB
    };
    H.b2TimeOfImpact = function() {};
    H.TimeOfImpact = function(b) {
        ++H.b2_toiCalls;
        var c = b.proxyA,
            d = b.proxyB,
            m = b.sweepA,
            g = b.sweepB;
        e.b2Assert(m.t0 == g.t0);
        e.b2Assert(1 - m.t0 > Number.MIN_VALUE);
        var q = c.m_radius + d.m_radius;
        b = b.tolerance;
        var s = 0,
            l = 0,
            j = 0;
        H.s_cache.count = 0;
        for (H.s_distanceInput.useRadii = !1;;) {
            m.GetTransform(H.s_xfA, s);
            g.GetTransform(H.s_xfB, s);
            H.s_distanceInput.proxyA =
                c;
            H.s_distanceInput.proxyB = d;
            H.s_distanceInput.transformA = H.s_xfA;
            H.s_distanceInput.transformB = H.s_xfB;
            E.Distance(H.s_distanceOutput, H.s_cache, H.s_distanceInput);
            if (0 >= H.s_distanceOutput.distance) {
                s = 1;
                break
            }
            H.s_fcn.Initialize(H.s_cache, c, H.s_xfA, d, H.s_xfB);
            var x = H.s_fcn.Evaluate(H.s_xfA, H.s_xfB);
            if (0 >= x) {
                s = 1;
                break
            }
            0 == l && (j = x > q ? f.Max(q - b, 0.75 * q) : f.Max(x - b, 0.02 * q));
            if (x - j < 0.5 * b) {
                if (0 == l) {
                    s = 1;
                    break
                }
                break
            }
            var C = s,
                J = s,
                F = 1;
            m.GetTransform(H.s_xfA, F);
            g.GetTransform(H.s_xfB, F);
            var u = H.s_fcn.Evaluate(H.s_xfA,
                H.s_xfB);
            if (u >= j) {
                s = 1;
                break
            }
            for (var R = 0;;) {
                var n = 0,
                    n = R & 1 ? J + (j - x) * (F - J) / (u - x) : 0.5 * (J + F);
                m.GetTransform(H.s_xfA, n);
                g.GetTransform(H.s_xfB, n);
                var aa = H.s_fcn.Evaluate(H.s_xfA, H.s_xfB);
                if (f.Abs(aa - j) < 0.025 * b) {
                    C = n;
                    break
                }
                aa > j ? (J = n, x = aa) : (F = n, u = aa);
                ++R;
                ++H.b2_toiRootIters;
                if (50 == R) break
            }
            H.b2_toiMaxRootIters = f.Max(H.b2_toiMaxRootIters, R);
            if (C < (1 + 100 * Number.MIN_VALUE) * s) break;
            s = C;
            l++;
            ++H.b2_toiIters;
            if (1E3 == l) break
        }
        H.b2_toiMaxIters = f.Max(H.b2_toiMaxIters, l);
        return s
    };
    Box2D.postDefs.push(function() {
        Box2D.Collision.b2TimeOfImpact.b2_toiCalls =
            0;
        Box2D.Collision.b2TimeOfImpact.b2_toiIters = 0;
        Box2D.Collision.b2TimeOfImpact.b2_toiMaxIters = 0;
        Box2D.Collision.b2TimeOfImpact.b2_toiRootIters = 0;
        Box2D.Collision.b2TimeOfImpact.b2_toiMaxRootIters = 0;
        Box2D.Collision.b2TimeOfImpact.s_cache = new F;
        Box2D.Collision.b2TimeOfImpact.s_distanceInput = new D;
        Box2D.Collision.b2TimeOfImpact.s_xfA = new n;
        Box2D.Collision.b2TimeOfImpact.s_xfB = new n;
        Box2D.Collision.b2TimeOfImpact.s_fcn = new s;
        Box2D.Collision.b2TimeOfImpact.s_distanceOutput = new u
    });
    aa.b2TOIInput = function() {
        this.proxyA =
            new G;
        this.proxyB = new G;
        this.sweepA = new j;
        this.sweepB = new j
    };
    R.b2WorldManifold = function() {
        this.m_normal = new l
    };
    R.prototype.b2WorldManifold = function() {
        this.m_points = new Vector(e.b2_maxManifoldPoints);
        for (var b = 0; b < e.b2_maxManifoldPoints; b++) this.m_points[b] = new l
    };
    R.prototype.Initialize = function(b, c, d, m, e) {
        void 0 === d && (d = 0);
        void 0 === e && (e = 0);
        if (0 != b.m_pointCount) {
            var g = 0,
                f, q, s = 0,
                l = 0,
                j = 0,
                x = 0,
                C = 0;
            switch (b.m_type) {
                case I.e_circles:
                    q = c.R;
                    f = b.m_localPoint;
                    g = c.position.x + q.col1.x * f.x + q.col2.x * f.y;
                    c = c.position.y +
                        q.col1.y * f.x + q.col2.y * f.y;
                    q = m.R;
                    f = b.m_points[0].m_localPoint;
                    b = m.position.x + q.col1.x * f.x + q.col2.x * f.y;
                    m = m.position.y + q.col1.y * f.x + q.col2.y * f.y;
                    f = b - g;
                    q = m - c;
                    s = f * f + q * q;
                    s > Number.MIN_VALUE * Number.MIN_VALUE ? (s = Math.sqrt(s), this.m_normal.x = f / s, this.m_normal.y = q / s) : (this.m_normal.x = 1, this.m_normal.y = 0);
                    f = c + d * this.m_normal.y;
                    m -= e * this.m_normal.y;
                    this.m_points[0].x = 0.5 * (g + d * this.m_normal.x + (b - e * this.m_normal.x));
                    this.m_points[0].y = 0.5 * (f + m);
                    break;
                case I.e_faceA:
                    q = c.R;
                    f = b.m_localPlaneNormal;
                    s = q.col1.x * f.x + q.col2.x *
                        f.y;
                    l = q.col1.y * f.x + q.col2.y * f.y;
                    q = c.R;
                    f = b.m_localPoint;
                    j = c.position.x + q.col1.x * f.x + q.col2.x * f.y;
                    x = c.position.y + q.col1.y * f.x + q.col2.y * f.y;
                    this.m_normal.x = s;
                    this.m_normal.y = l;
                    for (g = 0; g < b.m_pointCount; g++) q = m.R, f = b.m_points[g].m_localPoint, C = m.position.x + q.col1.x * f.x + q.col2.x * f.y, f = m.position.y + q.col1.y * f.x + q.col2.y * f.y, this.m_points[g].x = C + 0.5 * (d - (C - j) * s - (f - x) * l - e) * s, this.m_points[g].y = f + 0.5 * (d - (C - j) * s - (f - x) * l - e) * l;
                    break;
                case I.e_faceB:
                    q = m.R;
                    f = b.m_localPlaneNormal;
                    s = q.col1.x * f.x + q.col2.x * f.y;
                    l = q.col1.y *
                        f.x + q.col2.y * f.y;
                    q = m.R;
                    f = b.m_localPoint;
                    j = m.position.x + q.col1.x * f.x + q.col2.x * f.y;
                    x = m.position.y + q.col1.y * f.x + q.col2.y * f.y;
                    this.m_normal.x = -s;
                    this.m_normal.y = -l;
                    for (g = 0; g < b.m_pointCount; g++) q = c.R, f = b.m_points[g].m_localPoint, C = c.position.x + q.col1.x * f.x + q.col2.x * f.y, f = c.position.y + q.col1.y * f.x + q.col2.y * f.y, this.m_points[g].x = C + 0.5 * (e - (C - j) * s - (f - x) * l - d) * s, this.m_points[g].y = f + 0.5 * (e - (C - j) * s - (f - x) * l - d) * l
            }
        }
    };
    m.ClipVertex = function() {
        this.v = new l;
        this.id = new A
    };
    m.prototype.Set = function(b) {
        this.v.SetV(b.v);
        this.id.Set(b.id)
    };
    q.Features = function() {};
    Object.defineProperty(q.prototype, "referenceEdge", {
        enumerable: !1,
        configurable: !0,
        get: function() {
            return this._referenceEdge
        }
    });
    Object.defineProperty(q.prototype, "referenceEdge", {
        enumerable: !1,
        configurable: !0,
        set: function(b) {
            void 0 === b && (b = 0);
            this._referenceEdge = b;
            this._m_id._key = this._m_id._key & 4294967040 | this._referenceEdge & 255
        }
    });
    Object.defineProperty(q.prototype, "incidentEdge", {
        enumerable: !1,
        configurable: !0,
        get: function() {
            return this._incidentEdge
        }
    });
    Object.defineProperty(q.prototype,
        "incidentEdge", {
            enumerable: !1,
            configurable: !0,
            set: function(b) {
                void 0 === b && (b = 0);
                this._incidentEdge = b;
                this._m_id._key = this._m_id._key & 4294902015 | this._incidentEdge << 8 & 65280
            }
        });
    Object.defineProperty(q.prototype, "incidentVertex", {
        enumerable: !1,
        configurable: !0,
        get: function() {
            return this._incidentVertex
        }
    });
    Object.defineProperty(q.prototype, "incidentVertex", {
        enumerable: !1,
        configurable: !0,
        set: function(b) {
            void 0 === b && (b = 0);
            this._incidentVertex = b;
            this._m_id._key = this._m_id._key & 4278255615 | this._incidentVertex <<
                16 & 16711680
        }
    });
    Object.defineProperty(q.prototype, "flip", {
        enumerable: !1,
        configurable: !0,
        get: function() {
            return this._flip
        }
    });
    Object.defineProperty(q.prototype, "flip", {
        enumerable: !1,
        configurable: !0,
        set: function(b) {
            void 0 === b && (b = 0);
            this._flip = b;
            this._m_id._key = this._m_id._key & 16777215 | this._flip << 24 & 4278190080
        }
    })
})();
(function() {
    var b = Box2D.Common.b2Settings,
        c = Box2D.Collision.Shapes.b2CircleShape,
        d = Box2D.Collision.Shapes.b2EdgeChainDef,
        e = Box2D.Collision.Shapes.b2EdgeShape,
        f = Box2D.Collision.Shapes.b2MassData,
        j = Box2D.Collision.Shapes.b2PolygonShape,
        n = Box2D.Collision.Shapes.b2Shape,
        l = Box2D.Common.Math.b2Mat22,
        g = Box2D.Common.Math.b2Math,
        r = Box2D.Common.Math.b2Transform,
        y = Box2D.Common.Math.b2Vec2,
        z = Box2D.Collision.b2Distance,
        A = Box2D.Collision.b2DistanceInput,
        B = Box2D.Collision.b2DistanceOutput,
        E = Box2D.Collision.b2DistanceProxy,
        D = Box2D.Collision.b2SimplexCache;
    Box2D.inherit(c, Box2D.Collision.Shapes.b2Shape);
    c.prototype.__super = Box2D.Collision.Shapes.b2Shape.prototype;
    c.b2CircleShape = function() {
        Box2D.Collision.Shapes.b2Shape.b2Shape.apply(this, arguments);
        this.m_p = new y
    };
    c.prototype.Copy = function() {
        var b = new c;
        b.Set(this);
        return b
    };
    c.prototype.Set = function(b) {
        this.__super.Set.call(this, b);
        Box2D.is(b, c) && this.m_p.SetV((b instanceof c ? b : null).m_p)
    };
    c.prototype.TestPoint = function(b, c) {
        var d = b.R,
            e = b.position.x + (d.col1.x * this.m_p.x +
                d.col2.x * this.m_p.y),
            d = b.position.y + (d.col1.y * this.m_p.x + d.col2.y * this.m_p.y),
            e = c.x - e,
            d = c.y - d;
        return e * e + d * d <= this.m_radius * this.m_radius
    };
    c.prototype.RayCast = function(b, c, d) {
        var e = d.R,
            f = c.p1.x - (d.position.x + (e.col1.x * this.m_p.x + e.col2.x * this.m_p.y));
        d = c.p1.y - (d.position.y + (e.col1.y * this.m_p.x + e.col2.y * this.m_p.y));
        var e = c.p2.x - c.p1.x,
            g = c.p2.y - c.p1.y,
            l = f * e + d * g,
            j = e * e + g * g,
            n = l * l - j * (f * f + d * d - this.m_radius * this.m_radius);
        if (0 > n || j < Number.MIN_VALUE) return !1;
        l = -(l + Math.sqrt(n));
        return 0 <= l && l <= c.maxFraction *
            j ? (l /= j, b.fraction = l, b.normal.x = f + l * e, b.normal.y = d + l * g, b.normal.Normalize(), !0) : !1
    };
    c.prototype.ComputeAABB = function(b, c) {
        var d = c.R,
            e = c.position.x + (d.col1.x * this.m_p.x + d.col2.x * this.m_p.y),
            d = c.position.y + (d.col1.y * this.m_p.x + d.col2.y * this.m_p.y);
        b.lowerBound.Set(e - this.m_radius, d - this.m_radius);
        b.upperBound.Set(e + this.m_radius, d + this.m_radius)
    };
    c.prototype.ComputeMass = function(c, d) {
        void 0 === d && (d = 0);
        c.mass = d * b.b2_pi * this.m_radius * this.m_radius;
        c.center.SetV(this.m_p);
        c.I = c.mass * (0.5 * this.m_radius *
            this.m_radius + (this.m_p.x * this.m_p.x + this.m_p.y * this.m_p.y))
    };
    c.prototype.ComputeSubmergedArea = function(b, c, d, e) {
        void 0 === c && (c = 0);
        d = g.MulX(d, this.m_p);
        var f = -(g.Dot(b, d) - c);
        if (f < -this.m_radius + Number.MIN_VALUE) return 0;
        if (f > this.m_radius) return e.SetV(d), Math.PI * this.m_radius * this.m_radius;
        c = this.m_radius * this.m_radius;
        var l = f * f,
            f = c * (Math.asin(f / this.m_radius) + Math.PI / 2) + f * Math.sqrt(c - l);
        c = -2 / 3 * Math.pow(c - l, 1.5) / f;
        e.x = d.x + b.x * c;
        e.y = d.y + b.y * c;
        return f
    };
    c.prototype.GetLocalPosition = function() {
        return this.m_p
    };
    c.prototype.SetLocalPosition = function(b) {
        this.m_p.SetV(b)
    };
    c.prototype.GetRadius = function() {
        return this.m_radius
    };
    c.prototype.SetRadius = function(b) {
        void 0 === b && (b = 0);
        this.m_radius = b
    };
    c.prototype.b2CircleShape = function(b) {
        void 0 === b && (b = 0);
        this.__super.b2Shape.call(this);
        this.m_type = n.e_circleShape;
        this.m_radius = b
    };
    d.b2EdgeChainDef = function() {};
    d.prototype.b2EdgeChainDef = function() {
        this.vertexCount = 0;
        this.isALoop = !0;
        this.vertices = []
    };
    Box2D.inherit(e, Box2D.Collision.Shapes.b2Shape);
    e.prototype.__super =
        Box2D.Collision.Shapes.b2Shape.prototype;
    e.b2EdgeShape = function() {
        Box2D.Collision.Shapes.b2Shape.b2Shape.apply(this, arguments);
        this.s_supportVec = new y;
        this.m_v1 = new y;
        this.m_v2 = new y;
        this.m_coreV1 = new y;
        this.m_coreV2 = new y;
        this.m_normal = new y;
        this.m_direction = new y;
        this.m_cornerDir1 = new y;
        this.m_cornerDir2 = new y
    };
    e.prototype.TestPoint = function() {
        return !1
    };
    e.prototype.RayCast = function(b, c, d) {
        var e, f = c.p2.x - c.p1.x,
            g = c.p2.y - c.p1.y;
        e = d.R;
        var l = d.position.x + (e.col1.x * this.m_v1.x + e.col2.x * this.m_v1.y),
            j = d.position.y + (e.col1.y * this.m_v1.x + e.col2.y * this.m_v1.y),
            n = d.position.y + (e.col1.y * this.m_v2.x + e.col2.y * this.m_v2.y) - j;
        d = -(d.position.x + (e.col1.x * this.m_v2.x + e.col2.x * this.m_v2.y) - l);
        e = 100 * Number.MIN_VALUE;
        var r = -(f * n + g * d);
        if (r > e) {
            var l = c.p1.x - l,
                y = c.p1.y - j,
                j = l * n + y * d;
            if (0 <= j && j <= c.maxFraction * r && (c = -f * y + g * l, -e * r <= c && c <= r * (1 + e))) return b.fraction = j / r, c = Math.sqrt(n * n + d * d), b.normal.x = n / c, b.normal.y = d / c, !0
        }
        return !1
    };
    e.prototype.ComputeAABB = function(b, c) {
        var d = c.R,
            e = c.position.x + (d.col1.x * this.m_v1.x +
                d.col2.x * this.m_v1.y),
            f = c.position.y + (d.col1.y * this.m_v1.x + d.col2.y * this.m_v1.y),
            g = c.position.x + (d.col1.x * this.m_v2.x + d.col2.x * this.m_v2.y),
            d = c.position.y + (d.col1.y * this.m_v2.x + d.col2.y * this.m_v2.y);
        e < g ? (b.lowerBound.x = e, b.upperBound.x = g) : (b.lowerBound.x = g, b.upperBound.x = e);
        f < d ? (b.lowerBound.y = f, b.upperBound.y = d) : (b.lowerBound.y = d, b.upperBound.y = f)
    };
    e.prototype.ComputeMass = function(b) {
        b.mass = 0;
        b.center.SetV(this.m_v1);
        b.I = 0
    };
    e.prototype.ComputeSubmergedArea = function(b, c, d, e) {
        void 0 === c && (c = 0);
        var f =
            new y(b.x * c, b.y * c),
            l = g.MulX(d, this.m_v1);
        d = g.MulX(d, this.m_v2);
        var j = g.Dot(b, l) - c;
        b = g.Dot(b, d) - c;
        if (0 < j) {
            if (0 < b) return 0;
            l.x = -b / (j - b) * l.x + j / (j - b) * d.x;
            l.y = -b / (j - b) * l.y + j / (j - b) * d.y
        } else 0 < b && (d.x = -b / (j - b) * l.x + j / (j - b) * d.x, d.y = -b / (j - b) * l.y + j / (j - b) * d.y);
        e.x = (f.x + l.x + d.x) / 3;
        e.y = (f.y + l.y + d.y) / 3;
        return 0.5 * ((l.x - f.x) * (d.y - f.y) - (l.y - f.y) * (d.x - f.x))
    };
    e.prototype.GetLength = function() {
        return this.m_length
    };
    e.prototype.GetVertex1 = function() {
        return this.m_v1
    };
    e.prototype.GetVertex2 = function() {
        return this.m_v2
    };
    e.prototype.GetCoreVertex1 = function() {
        return this.m_coreV1
    };
    e.prototype.GetCoreVertex2 = function() {
        return this.m_coreV2
    };
    e.prototype.GetNormalVector = function() {
        return this.m_normal
    };
    e.prototype.GetDirectionVector = function() {
        return this.m_direction
    };
    e.prototype.GetCorner1Vector = function() {
        return this.m_cornerDir1
    };
    e.prototype.GetCorner2Vector = function() {
        return this.m_cornerDir2
    };
    e.prototype.Corner1IsConvex = function() {
        return this.m_cornerConvex1
    };
    e.prototype.Corner2IsConvex = function() {
        return this.m_cornerConvex2
    };
    e.prototype.GetFirstVertex = function(b) {
        var c = b.R;
        return new y(b.position.x + (c.col1.x * this.m_coreV1.x + c.col2.x * this.m_coreV1.y), b.position.y + (c.col1.y * this.m_coreV1.x + c.col2.y * this.m_coreV1.y))
    };
    e.prototype.GetNextEdge = function() {
        return this.m_nextEdge
    };
    e.prototype.GetPrevEdge = function() {
        return this.m_prevEdge
    };
    e.prototype.Support = function(b, c, d) {
        void 0 === c && (c = 0);
        void 0 === d && (d = 0);
        var e = b.R,
            f = b.position.x + (e.col1.x * this.m_coreV1.x + e.col2.x * this.m_coreV1.y),
            g = b.position.y + (e.col1.y * this.m_coreV1.x +
                e.col2.y * this.m_coreV1.y),
            l = b.position.x + (e.col1.x * this.m_coreV2.x + e.col2.x * this.m_coreV2.y);
        b = b.position.y + (e.col1.y * this.m_coreV2.x + e.col2.y * this.m_coreV2.y);
        f * c + g * d > l * c + b * d ? (this.s_supportVec.x = f, this.s_supportVec.y = g) : (this.s_supportVec.x = l, this.s_supportVec.y = b);
        return this.s_supportVec
    };
    e.prototype.b2EdgeShape = function(c, d) {
        this.__super.b2Shape.call(this);
        this.m_type = n.e_edgeShape;
        this.m_nextEdge = this.m_prevEdge = null;
        this.m_v1 = c;
        this.m_v2 = d;
        this.m_direction.Set(this.m_v2.x - this.m_v1.x, this.m_v2.y -
            this.m_v1.y);
        this.m_length = this.m_direction.Normalize();
        this.m_normal.Set(this.m_direction.y, -this.m_direction.x);
        this.m_coreV1.Set(-b.b2_toiSlop * (this.m_normal.x - this.m_direction.x) + this.m_v1.x, -b.b2_toiSlop * (this.m_normal.y - this.m_direction.y) + this.m_v1.y);
        this.m_coreV2.Set(-b.b2_toiSlop * (this.m_normal.x + this.m_direction.x) + this.m_v2.x, -b.b2_toiSlop * (this.m_normal.y + this.m_direction.y) + this.m_v2.y);
        this.m_cornerDir1 = this.m_normal;
        this.m_cornerDir2.Set(-this.m_normal.x, -this.m_normal.y)
    };
    e.prototype.SetPrevEdge =
        function(b, c, d, e) {
            this.m_prevEdge = b;
            this.m_coreV1 = c;
            this.m_cornerDir1 = d;
            this.m_cornerConvex1 = e
        };
    e.prototype.SetNextEdge = function(b, c, d, e) {
        this.m_nextEdge = b;
        this.m_coreV2 = c;
        this.m_cornerDir2 = d;
        this.m_cornerConvex2 = e
    };
    f.b2MassData = function() {
        this.mass = 0;
        this.center = new y(0, 0);
        this.I = 0
    };
    Box2D.inherit(j, Box2D.Collision.Shapes.b2Shape);
    j.prototype.__super = Box2D.Collision.Shapes.b2Shape.prototype;
    j.b2PolygonShape = function() {
        Box2D.Collision.Shapes.b2Shape.b2Shape.apply(this, arguments)
    };
    j.prototype.Copy =
        function() {
            var b = new j;
            b.Set(this);
            return b
        };
    j.prototype.Set = function(b) {
        this.__super.Set.call(this, b);
        if (Box2D.is(b, j)) {
            b = b instanceof j ? b : null;
            this.m_centroid.SetV(b.m_centroid);
            this.m_vertexCount = b.m_vertexCount;
            this.Reserve(this.m_vertexCount);
            for (var c = 0; c < this.m_vertexCount; c++) this.m_vertices[c].SetV(b.m_vertices[c]), this.m_normals[c].SetV(b.m_normals[c])
        }
    };
    j.prototype.SetAsArray = function(b, c) {
        void 0 === c && (c = 0);
        for (var d = new Vector, e = 0, f, e = 0; e < b.length; ++e) f = b[e], d.push(f);
        this.SetAsVector(d,
            c)
    };
    j.AsArray = function(b, c) {
        void 0 === c && (c = 0);
        var d = new j;
        d.SetAsArray(b, c);
        return d
    };
    j.prototype.SetAsVector = function(c, d) {
        void 0 === d && (d = 0);
        0 == d && (d = c.length);
        b.b2Assert(2 <= d);
        this.m_vertexCount = d;
        this.Reserve(d);
        for (var e = 0, e = 0; e < this.m_vertexCount; e++) this.m_vertices[e].SetV(c[e]);
        for (e = 0; e < this.m_vertexCount; ++e) {
            var f = parseInt(e),
                l = parseInt(e + 1 < this.m_vertexCount ? e + 1 : 0),
                f = g.SubtractVV(this.m_vertices[l], this.m_vertices[f]);
            b.b2Assert(f.LengthSquared() > Number.MIN_VALUE);
            this.m_normals[e].SetV(g.CrossVF(f,
                1));
            this.m_normals[e].Normalize()
        }
        this.m_centroid = j.ComputeCentroid(this.m_vertices, this.m_vertexCount)
    };
    j.AsVector = function(b, c) {
        void 0 === c && (c = 0);
        var d = new j;
        d.SetAsVector(b, c);
        return d
    };
    j.prototype.SetAsBox = function(b, c) {
        void 0 === b && (b = 0);
        void 0 === c && (c = 0);
        this.m_vertexCount = 4;
        this.Reserve(4);
        this.m_vertices[0].Set(-b, -c);
        this.m_vertices[1].Set(b, -c);
        this.m_vertices[2].Set(b, c);
        this.m_vertices[3].Set(-b, c);
        this.m_normals[0].Set(0, -1);
        this.m_normals[1].Set(1, 0);
        this.m_normals[2].Set(0, 1);
        this.m_normals[3].Set(-1,
            0);
        this.m_centroid.SetZero()
    };
    j.AsBox = function(b, c) {
        void 0 === b && (b = 0);
        void 0 === c && (c = 0);
        var d = new j;
        d.SetAsBox(b, c);
        return d
    };
    j.prototype.SetAsOrientedBox = function(b, c, d, e) {
        void 0 === b && (b = 0);
        void 0 === c && (c = 0);
        void 0 === d && (d = null);
        void 0 === e && (e = 0);
        this.m_vertexCount = 4;
        this.Reserve(4);
        this.m_vertices[0].Set(-b, -c);
        this.m_vertices[1].Set(b, -c);
        this.m_vertices[2].Set(b, c);
        this.m_vertices[3].Set(-b, c);
        this.m_normals[0].Set(0, -1);
        this.m_normals[1].Set(1, 0);
        this.m_normals[2].Set(0, 1);
        this.m_normals[3].Set(-1,
            0);
        this.m_centroid = d;
        b = new r;
        b.position = d;
        b.R.Set(e);
        for (d = 0; d < this.m_vertexCount; ++d) this.m_vertices[d] = g.MulX(b, this.m_vertices[d]), this.m_normals[d] = g.MulMV(b.R, this.m_normals[d])
    };
    j.AsOrientedBox = function(b, c, d, e) {
        void 0 === b && (b = 0);
        void 0 === c && (c = 0);
        void 0 === d && (d = null);
        void 0 === e && (e = 0);
        var f = new j;
        f.SetAsOrientedBox(b, c, d, e);
        return f
    };
    j.prototype.SetAsEdge = function(b, c) {
        this.m_vertexCount = 2;
        this.Reserve(2);
        this.m_vertices[0].SetV(b);
        this.m_vertices[1].SetV(c);
        this.m_centroid.x = 0.5 * (b.x + c.x);
        this.m_centroid.y = 0.5 * (b.y + c.y);
        this.m_normals[0] = g.CrossVF(g.SubtractVV(c, b), 1);
        this.m_normals[0].Normalize();
        this.m_normals[1].x = -this.m_normals[0].x;
        this.m_normals[1].y = -this.m_normals[0].y
    };
    j.AsEdge = function(b, c) {
        var d = new j;
        d.SetAsEdge(b, c);
        return d
    };
    j.prototype.TestPoint = function(b, c) {
        var d;
        d = b.R;
        for (var e = c.x - b.position.x, f = c.y - b.position.y, g = e * d.col1.x + f * d.col1.y, l = e * d.col2.x + f * d.col2.y, j = 0; j < this.m_vertexCount; ++j)
            if (d = this.m_vertices[j], e = g - d.x, f = l - d.y, d = this.m_normals[j], 0 < d.x * e + d.y * f) return !1;
        return !0
    };
    j.prototype.RayCast = function(b, c, d) {
        var e = 0,
            f = c.maxFraction,
            g = 0,
            l = 0,
            j, n, g = c.p1.x - d.position.x,
            l = c.p1.y - d.position.y;
        j = d.R;
        var r = g * j.col1.x + l * j.col1.y,
            y = g * j.col2.x + l * j.col2.y,
            g = c.p2.x - d.position.x,
            l = c.p2.y - d.position.y;
        j = d.R;
        c = g * j.col1.x + l * j.col1.y - r;
        j = g * j.col2.x + l * j.col2.y - y;
        for (var A = -1, s = 0; s < this.m_vertexCount; ++s) {
            n = this.m_vertices[s];
            g = n.x - r;
            l = n.y - y;
            n = this.m_normals[s];
            g = n.x * g + n.y * l;
            l = n.x * c + n.y * j;
            if (0 == l) {
                if (0 > g) return !1
            } else 0 > l && g < e * l ? (e = g / l, A = s) : 0 < l && g < f * l && (f = g / l);
            if (f < e - Number.MIN_VALUE) return !1
        }
        return 0 <=
            A ? (b.fraction = e, j = d.R, n = this.m_normals[A], b.normal.x = j.col1.x * n.x + j.col2.x * n.y, b.normal.y = j.col1.y * n.x + j.col2.y * n.y, !0) : !1
    };
    j.prototype.ComputeAABB = function(b, c) {
        for (var d = c.R, e = this.m_vertices[0], f = c.position.x + (d.col1.x * e.x + d.col2.x * e.y), g = c.position.y + (d.col1.y * e.x + d.col2.y * e.y), l = f, j = g, n = 1; n < this.m_vertexCount; ++n) var e = this.m_vertices[n],
            r = c.position.x + (d.col1.x * e.x + d.col2.x * e.y),
            e = c.position.y + (d.col1.y * e.x + d.col2.y * e.y),
            f = f < r ? f : r,
            g = g < e ? g : e,
            l = l > r ? l : r,
            j = j > e ? j : e;
        b.lowerBound.x = f - this.m_radius;
        b.lowerBound.y = g - this.m_radius;
        b.upperBound.x = l + this.m_radius;
        b.upperBound.y = j + this.m_radius
    };
    j.prototype.ComputeMass = function(b, c) {
        void 0 === c && (c = 0);
        if (2 == this.m_vertexCount) b.center.x = 0.5 * (this.m_vertices[0].x + this.m_vertices[1].x), b.center.y = 0.5 * (this.m_vertices[0].y + this.m_vertices[1].y), b.mass = 0, b.I = 0;
        else {
            for (var d = 0, e = 0, f = 0, g = 0, l = 1 / 3, j = 0; j < this.m_vertexCount; ++j) var n = this.m_vertices[j],
                r = j + 1 < this.m_vertexCount ? this.m_vertices[parseInt(j + 1)] : this.m_vertices[0],
                y = n.x - 0,
                A = n.y - 0,
                s = r.x - 0,
                x = r.y -
                0,
                F = y * x - A * s,
                C = 0.5 * F,
                f = f + C,
                d = d + C * l * (0 + n.x + r.x),
                e = e + C * l * (0 + n.y + r.y),
                n = y,
                g = g + F * (l * (0.25 * (n * n + s * n + s * s) + (0 * n + 0 * s)) + 0 + (l * (0.25 * (A * A + x * A + x * x) + (0 * A + 0 * x)) + 0));
            b.mass = c * f;
            b.center.Set(d * (1 / f), e * (1 / f));
            b.I = c * g
        }
    };
    j.prototype.ComputeSubmergedArea = function(b, c, d, e) {
        void 0 === c && (c = 0);
        var l = g.MulTMV(d.R, b),
            j = c - g.Dot(b, d.position),
            n = new Vector_a2j_Number,
            r = 0,
            A = -1;
        c = -1;
        var z = !1;
        for (b = b = 0; b < this.m_vertexCount; ++b) {
            n[b] = g.Dot(l, this.m_vertices[b]) - j;
            var B = n[b] < -Number.MIN_VALUE;
            0 < b && (B ? z || (A = b - 1, r++) : z && (c = b - 1, r++));
            z = B
        }
        switch (r) {
            case 0:
                return z ? (b = new f, this.ComputeMass(b, 1), e.SetV(g.MulX(d, b.center)), b.mass) : 0;
            case 1:
                -1 == A ? A = this.m_vertexCount - 1 : c = this.m_vertexCount - 1
        }
        b = parseInt((A + 1) % this.m_vertexCount);
        l = parseInt((c + 1) % this.m_vertexCount);
        j = (0 - n[A]) / (n[b] - n[A]);
        n = (0 - n[c]) / (n[l] - n[c]);
        A = new y(this.m_vertices[A].x * (1 - j) + this.m_vertices[b].x * j, this.m_vertices[A].y * (1 - j) + this.m_vertices[b].y * j);
        c = new y(this.m_vertices[c].x * (1 - n) + this.m_vertices[l].x * n, this.m_vertices[c].y * (1 - n) + this.m_vertices[l].y * n);
        n = 0;
        j =
            new y;
        for (r = this.m_vertices[b]; b != l;) b = (b + 1) % this.m_vertexCount, z = b == l ? c : this.m_vertices[b], B = 0.5 * ((r.x - A.x) * (z.y - A.y) - (r.y - A.y) * (z.x - A.x)), n += B, j.x += B * (A.x + r.x + z.x) / 3, j.y += B * (A.y + r.y + z.y) / 3, r = z;
        j.Multiply(1 / n);
        e.SetV(g.MulX(d, j));
        return n
    };
    j.prototype.GetVertexCount = function() {
        return this.m_vertexCount
    };
    j.prototype.GetVertices = function() {
        return this.m_vertices
    };
    j.prototype.GetNormals = function() {
        return this.m_normals
    };
    j.prototype.GetSupport = function(b) {
        for (var c = 0, d = this.m_vertices[0].x * b.x + this.m_vertices[0].y *
                b.y, e = 1; e < this.m_vertexCount; ++e) {
            var f = this.m_vertices[e].x * b.x + this.m_vertices[e].y * b.y;
            f > d && (c = e, d = f)
        }
        return c
    };
    j.prototype.GetSupportVertex = function(b) {
        for (var c = 0, d = this.m_vertices[0].x * b.x + this.m_vertices[0].y * b.y, e = 1; e < this.m_vertexCount; ++e) {
            var f = this.m_vertices[e].x * b.x + this.m_vertices[e].y * b.y;
            f > d && (c = e, d = f)
        }
        return this.m_vertices[c]
    };
    j.prototype.Validate = function() {
        return !1
    };
    j.prototype.b2PolygonShape = function() {
        this.__super.b2Shape.call(this);
        this.m_type = n.e_polygonShape;
        this.m_centroid =
            new y;
        this.m_vertices = new Vector;
        this.m_normals = new Vector
    };
    j.prototype.Reserve = function(b) {
        void 0 === b && (b = 0);
        for (var c = parseInt(this.m_vertices.length); c < b; c++) this.m_vertices[c] = new y, this.m_normals[c] = new y
    };
    j.ComputeCentroid = function(b, c) {
        void 0 === c && (c = 0);
        for (var d = new y, e = 0, f = 1 / 3, g = 0; g < c; ++g) {
            var l = b[g],
                j = g + 1 < c ? b[parseInt(g + 1)] : b[0],
                n = 0.5 * ((l.x - 0) * (j.y - 0) - (l.y - 0) * (j.x - 0)),
                e = e + n;
            d.x += n * f * (0 + l.x + j.x);
            d.y += n * f * (0 + l.y + j.y)
        }
        d.x *= 1 / e;
        d.y *= 1 / e;
        return d
    };
    j.ComputeOBB = function(b, c, d) {
        void 0 === d && (d =
            0);
        for (var e = 0, f = new Vector(d + 1), e = 0; e < d; ++e) f[e] = c[e];
        f[d] = f[0];
        c = Number.MAX_VALUE;
        for (e = 1; e <= d; ++e) {
            for (var g = f[parseInt(e - 1)], l = f[e].x - g.x, j = f[e].y - g.y, n = Math.sqrt(l * l + j * j), l = l / n, j = j / n, r = -j, A = l, y = n = Number.MAX_VALUE, s = -Number.MAX_VALUE, x = -Number.MAX_VALUE, F = 0; F < d; ++F) {
                var C = f[F].x - g.x,
                    H = f[F].y - g.y,
                    aa = l * C + j * H,
                    C = r * C + A * H;
                aa < n && (n = aa);
                C < y && (y = C);
                aa > s && (s = aa);
                C > x && (x = C)
            }
            F = (s - n) * (x - y);
            F < 0.95 * c && (c = F, b.R.col1.x = l, b.R.col1.y = j, b.R.col2.x = r, b.R.col2.y = A, l = 0.5 * (n + s), j = 0.5 * (y + x), r = b.R, b.center.x = g.x + (r.col1.x *
                l + r.col2.x * j), b.center.y = g.y + (r.col1.y * l + r.col2.y * j), b.extents.x = 0.5 * (s - n), b.extents.y = 0.5 * (x - y))
        }
    };
    Box2D.postDefs.push(function() {
        Box2D.Collision.Shapes.b2PolygonShape.s_mat = new l
    });
    n.b2Shape = function() {};
    n.prototype.Copy = function() {
        return null
    };
    n.prototype.Set = function(b) {
        this.m_radius = b.m_radius
    };
    n.prototype.GetType = function() {
        return this.m_type
    };
    n.prototype.TestPoint = function() {
        return !1
    };
    n.prototype.RayCast = function() {
        return !1
    };
    n.prototype.ComputeAABB = function() {};
    n.prototype.ComputeMass = function() {};
    n.prototype.ComputeSubmergedArea = function() {
        return 0
    };
    n.TestOverlap = function(b, c, d, e) {
        var f = new A;
        f.proxyA = new E;
        f.proxyA.Set(b);
        f.proxyB = new E;
        f.proxyB.Set(d);
        f.transformA = c;
        f.transformB = e;
        f.useRadii = !0;
        b = new D;
        b.count = 0;
        c = new B;
        z.Distance(c, b, f);
        return c.distance < 10 * Number.MIN_VALUE
    };
    n.prototype.b2Shape = function() {
        this.m_type = n.e_unknownShape;
        this.m_radius = b.b2_linearSlop
    };
    Box2D.postDefs.push(function() {
        Box2D.Collision.Shapes.b2Shape.e_unknownShape = -1;
        Box2D.Collision.Shapes.b2Shape.e_circleShape =
            0;
        Box2D.Collision.Shapes.b2Shape.e_polygonShape = 1;
        Box2D.Collision.Shapes.b2Shape.e_edgeShape = 2;
        Box2D.Collision.Shapes.b2Shape.e_shapeTypeCount = 3;
        Box2D.Collision.Shapes.b2Shape.e_hitCollide = 1;
        Box2D.Collision.Shapes.b2Shape.e_missCollide = 0;
        Box2D.Collision.Shapes.b2Shape.e_startsInsideCollide = -1
    })
})();
(function() {
    var b = Box2D.Common.b2Color,
        c = Box2D.Common.b2Settings,
        d = Box2D.Common.Math.b2Math;
    b.b2Color = function() {
        this._b = this._g = this._r = 0
    };
    b.prototype.b2Color = function(b, c, j) {
        void 0 === b && (b = 0);
        void 0 === c && (c = 0);
        void 0 === j && (j = 0);
        this._r = Box2D.parseUInt(255 * d.Clamp(b, 0, 1));
        this._g = Box2D.parseUInt(255 * d.Clamp(c, 0, 1));
        this._b = Box2D.parseUInt(255 * d.Clamp(j, 0, 1))
    };
    b.prototype.Set = function(b, c, j) {
        void 0 === b && (b = 0);
        void 0 === c && (c = 0);
        void 0 === j && (j = 0);
        this._r = Box2D.parseUInt(255 * d.Clamp(b, 0, 1));
        this._g =
            Box2D.parseUInt(255 * d.Clamp(c, 0, 1));
        this._b = Box2D.parseUInt(255 * d.Clamp(j, 0, 1))
    };
    Object.defineProperty(b.prototype, "r", {
        enumerable: !1,
        configurable: !0,
        set: function(b) {
            void 0 === b && (b = 0);
            this._r = Box2D.parseUInt(255 * d.Clamp(b, 0, 1))
        }
    });
    Object.defineProperty(b.prototype, "g", {
        enumerable: !1,
        configurable: !0,
        set: function(b) {
            void 0 === b && (b = 0);
            this._g = Box2D.parseUInt(255 * d.Clamp(b, 0, 1))
        }
    });
    Object.defineProperty(b.prototype, "b", {
        enumerable: !1,
        configurable: !0,
        set: function(b) {
            void 0 === b && (b = 0);
            this._b = Box2D.parseUInt(255 *
                d.Clamp(b, 0, 1))
        }
    });
    Object.defineProperty(b.prototype, "color", {
        enumerable: !1,
        configurable: !0,
        get: function() {
            return this._r << 16 | this._g << 8 | this._b
        }
    });
    c.b2Settings = function() {};
    c.b2MixFriction = function(b, c) {
        void 0 === b && (b = 0);
        void 0 === c && (c = 0);
        return Math.sqrt(b * c)
    };
    c.b2MixRestitution = function(b, c) {
        void 0 === b && (b = 0);
        void 0 === c && (c = 0);
        return b > c ? b : c
    };
    c.b2Assert = function(b) {
        if (!b) throw "Assertion Failed";
    };
    Box2D.postDefs.push(function() {
        Box2D.Common.b2Settings.VERSION = "2.1alpha";
        Box2D.Common.b2Settings.USHRT_MAX =
            65535;
        Box2D.Common.b2Settings.b2_pi = Math.PI;
        Box2D.Common.b2Settings.b2_maxManifoldPoints = 2;
        Box2D.Common.b2Settings.b2_aabbExtension = 0.1;
        Box2D.Common.b2Settings.b2_aabbMultiplier = 2;
        Box2D.Common.b2Settings.b2_polygonRadius = 2 * c.b2_linearSlop;
        Box2D.Common.b2Settings.b2_linearSlop = 0.005;
        Box2D.Common.b2Settings.b2_angularSlop = 2 / 180 * c.b2_pi;
        Box2D.Common.b2Settings.b2_toiSlop = 8 * c.b2_linearSlop;
        Box2D.Common.b2Settings.b2_maxTOIContactsPerIsland = 32;
        Box2D.Common.b2Settings.b2_maxTOIJointsPerIsland = 32;
        Box2D.Common.b2Settings.b2_velocityThreshold =
            1;
        Box2D.Common.b2Settings.b2_maxLinearCorrection = 0.2;
        Box2D.Common.b2Settings.b2_maxAngularCorrection = 8 / 180 * c.b2_pi;
        Box2D.Common.b2Settings.b2_maxTranslation = 2;
        Box2D.Common.b2Settings.b2_maxTranslationSquared = c.b2_maxTranslation * c.b2_maxTranslation;
        Box2D.Common.b2Settings.b2_maxRotation = 0.5 * c.b2_pi;
        Box2D.Common.b2Settings.b2_maxRotationSquared = c.b2_maxRotation * c.b2_maxRotation;
        Box2D.Common.b2Settings.b2_contactBaumgarte = 0.2;
        Box2D.Common.b2Settings.b2_timeToSleep = 0.5;
        Box2D.Common.b2Settings.b2_linearSleepTolerance =
            0.01;
        Box2D.Common.b2Settings.b2_angularSleepTolerance = 2 / 180 * c.b2_pi
    })
})();
(function() {
    var b = Box2D.Common.Math.b2Mat22,
        c = Box2D.Common.Math.b2Mat33,
        d = Box2D.Common.Math.b2Math,
        e = Box2D.Common.Math.b2Sweep,
        f = Box2D.Common.Math.b2Transform,
        j = Box2D.Common.Math.b2Vec2,
        n = Box2D.Common.Math.b2Vec3;
    b.b2Mat22 = function() {
        this.col1 = new j;
        this.col2 = new j
    };
    b.prototype.b2Mat22 = function() {
        this.SetIdentity()
    };
    b.FromAngle = function(c) {
        void 0 === c && (c = 0);
        var d = new b;
        d.Set(c);
        return d
    };
    b.FromVV = function(c, d) {
        var e = new b;
        e.SetVV(c, d);
        return e
    };
    b.prototype.Set = function(b) {
        void 0 === b && (b = 0);
        var c =
            Math.cos(b);
        b = Math.sin(b);
        this.col1.x = c;
        this.col2.x = -b;
        this.col1.y = b;
        this.col2.y = c
    };
    b.prototype.SetVV = function(b, c) {
        this.col1.SetV(b);
        this.col2.SetV(c)
    };
    b.prototype.Copy = function() {
        var c = new b;
        c.SetM(this);
        return c
    };
    b.prototype.SetM = function(b) {
        this.col1.SetV(b.col1);
        this.col2.SetV(b.col2)
    };
    b.prototype.AddM = function(b) {
        this.col1.x += b.col1.x;
        this.col1.y += b.col1.y;
        this.col2.x += b.col2.x;
        this.col2.y += b.col2.y
    };
    b.prototype.SetIdentity = function() {
        this.col1.x = 1;
        this.col2.x = 0;
        this.col1.y = 0;
        this.col2.y = 1
    };
    b.prototype.SetZero = function() {
        this.col1.x = 0;
        this.col2.x = 0;
        this.col1.y = 0;
        this.col2.y = 0
    };
    b.prototype.GetAngle = function() {
        return Math.atan2(this.col1.y, this.col1.x)
    };
    b.prototype.GetInverse = function(b) {
        var c = this.col1.x,
            d = this.col2.x,
            e = this.col1.y,
            f = this.col2.y,
            j = c * f - d * e;
        0 != j && (j = 1 / j);
        b.col1.x = j * f;
        b.col2.x = -j * d;
        b.col1.y = -j * e;
        b.col2.y = j * c;
        return b
    };
    b.prototype.Solve = function(b, c, d) {
        void 0 === c && (c = 0);
        void 0 === d && (d = 0);
        var e = this.col1.x,
            f = this.col2.x,
            j = this.col1.y,
            n = this.col2.y,
            E = e * n - f * j;
        0 != E && (E = 1 / E);
        b.x = E * (n * c - f * d);
        b.y = E * (e * d - j * c);
        return b
    };
    b.prototype.Abs = function() {
        this.col1.Abs();
        this.col2.Abs()
    };
    c.b2Mat33 = function() {
        this.col1 = new n;
        this.col2 = new n;
        this.col3 = new n
    };
    c.prototype.b2Mat33 = function(b, c, d) {
        void 0 === b && (b = null);
        void 0 === c && (c = null);
        void 0 === d && (d = null);
        !b && !c && !d ? (this.col1.SetZero(), this.col2.SetZero(), this.col3.SetZero()) : (this.col1.SetV(b), this.col2.SetV(c), this.col3.SetV(d))
    };
    c.prototype.SetVVV = function(b, c, d) {
        this.col1.SetV(b);
        this.col2.SetV(c);
        this.col3.SetV(d)
    };
    c.prototype.Copy =
        function() {
            return new c(this.col1, this.col2, this.col3)
        };
    c.prototype.SetM = function(b) {
        this.col1.SetV(b.col1);
        this.col2.SetV(b.col2);
        this.col3.SetV(b.col3)
    };
    c.prototype.AddM = function(b) {
        this.col1.x += b.col1.x;
        this.col1.y += b.col1.y;
        this.col1.z += b.col1.z;
        this.col2.x += b.col2.x;
        this.col2.y += b.col2.y;
        this.col2.z += b.col2.z;
        this.col3.x += b.col3.x;
        this.col3.y += b.col3.y;
        this.col3.z += b.col3.z
    };
    c.prototype.SetIdentity = function() {
        this.col1.x = 1;
        this.col2.x = 0;
        this.col3.x = 0;
        this.col1.y = 0;
        this.col2.y = 1;
        this.col3.y = 0;
        this.col1.z = 0;
        this.col2.z = 0;
        this.col3.z = 1
    };
    c.prototype.SetZero = function() {
        this.col1.x = 0;
        this.col2.x = 0;
        this.col3.x = 0;
        this.col1.y = 0;
        this.col2.y = 0;
        this.col3.y = 0;
        this.col1.z = 0;
        this.col2.z = 0;
        this.col3.z = 0
    };
    c.prototype.Solve22 = function(b, c, d) {
        void 0 === c && (c = 0);
        void 0 === d && (d = 0);
        var e = this.col1.x,
            f = this.col2.x,
            j = this.col1.y,
            n = this.col2.y,
            E = e * n - f * j;
        0 != E && (E = 1 / E);
        b.x = E * (n * c - f * d);
        b.y = E * (e * d - j * c);
        return b
    };
    c.prototype.Solve33 = function(b, c, d, e) {
        void 0 === c && (c = 0);
        void 0 === d && (d = 0);
        void 0 === e && (e = 0);
        var f = this.col1.x,
            j = this.col1.y,
            n = this.col1.z,
            E = this.col2.x,
            D = this.col2.y,
            u = this.col2.z,
            G = this.col3.x,
            K = this.col3.y,
            L = this.col3.z,
            N = f * (D * L - u * K) + j * (u * G - E * L) + n * (E * K - D * G);
        0 != N && (N = 1 / N);
        b.x = N * (c * (D * L - u * K) + d * (u * G - E * L) + e * (E * K - D * G));
        b.y = N * (f * (d * L - e * K) + j * (e * G - c * L) + n * (c * K - d * G));
        b.z = N * (f * (D * e - u * d) + j * (u * c - E * e) + n * (E * d - D * c));
        return b
    };
    d.b2Math = function() {};
    d.IsValid = function(b) {
        void 0 === b && (b = 0);
        return isFinite(b)
    };
    d.Dot = function(b, c) {
        return b.x * c.x + b.y * c.y
    };
    d.CrossVV = function(b, c) {
        return b.x * c.y - b.y * c.x
    };
    d.CrossVF = function(b,
        c) {
        void 0 === c && (c = 0);
        return new j(c * b.y, -c * b.x)
    };
    d.CrossFV = function(b, c) {
        void 0 === b && (b = 0);
        return new j(-b * c.y, b * c.x)
    };
    d.MulMV = function(b, c) {
        return new j(b.col1.x * c.x + b.col2.x * c.y, b.col1.y * c.x + b.col2.y * c.y)
    };
    d.MulTMV = function(b, c) {
        return new j(d.Dot(c, b.col1), d.Dot(c, b.col2))
    };
    d.MulX = function(b, c) {
        var e = d.MulMV(b.R, c);
        e.x += b.position.x;
        e.y += b.position.y;
        return e
    };
    d.MulXT = function(b, c) {
        var e = d.SubtractVV(c, b.position),
            f = e.x * b.R.col1.x + e.y * b.R.col1.y;
        e.y = e.x * b.R.col2.x + e.y * b.R.col2.y;
        e.x = f;
        return e
    };
    d.AddVV = function(b, c) {
        return new j(b.x + c.x, b.y + c.y)
    };
    d.SubtractVV = function(b, c) {
        return new j(b.x - c.x, b.y - c.y)
    };
    d.Distance = function(b, c) {
        var d = b.x - c.x,
            e = b.y - c.y;
        return Math.sqrt(d * d + e * e)
    };
    d.DistanceSquared = function(b, c) {
        var d = b.x - c.x,
            e = b.y - c.y;
        return d * d + e * e
    };
    d.MulFV = function(b, c) {
        void 0 === b && (b = 0);
        return new j(b * c.x, b * c.y)
    };
    d.AddMM = function(c, e) {
        return b.FromVV(d.AddVV(c.col1, e.col1), d.AddVV(c.col2, e.col2))
    };
    d.MulMM = function(c, e) {
        return b.FromVV(d.MulMV(c, e.col1), d.MulMV(c, e.col2))
    };
    d.MulTMM = function(c,
        e) {
        var f = new j(d.Dot(c.col1, e.col1), d.Dot(c.col2, e.col1)),
            n = new j(d.Dot(c.col1, e.col2), d.Dot(c.col2, e.col2));
        return b.FromVV(f, n)
    };
    d.Abs = function(b) {
        void 0 === b && (b = 0);
        return 0 < b ? b : -b
    };
    d.AbsV = function(b) {
        return new j(d.Abs(b.x), d.Abs(b.y))
    };
    d.AbsM = function(c) {
        return b.FromVV(d.AbsV(c.col1), d.AbsV(c.col2))
    };
    d.Min = function(b, c) {
        void 0 === b && (b = 0);
        void 0 === c && (c = 0);
        return b < c ? b : c
    };
    d.MinV = function(b, c) {
        return new j(d.Min(b.x, c.x), d.Min(b.y, c.y))
    };
    d.Max = function(b, c) {
        void 0 === b && (b = 0);
        void 0 === c && (c = 0);
        return b > c ? b : c
    };
    d.MaxV = function(b, c) {
        return new j(d.Max(b.x, c.x), d.Max(b.y, c.y))
    };
    d.Clamp = function(b, c, d) {
        void 0 === b && (b = 0);
        void 0 === c && (c = 0);
        void 0 === d && (d = 0);
        return b < c ? c : b > d ? d : b
    };
    d.ClampV = function(b, c, e) {
        return d.MaxV(c, d.MinV(b, e))
    };
    d.Swap = function(b, c) {
        var d = b[0];
        b[0] = c[0];
        c[0] = d
    };
    d.Random = function() {
        return 2 * Math.random() - 1
    };
    d.RandomRange = function(b, c) {
        void 0 === b && (b = 0);
        void 0 === c && (c = 0);
        var d = Math.random();
        return (c - b) * d + b
    };
    d.NextPowerOfTwo = function(b) {
        void 0 === b && (b = 0);
        b |= b >> 1 & 2147483647;
        b |=
            b >> 2 & 1073741823;
        b |= b >> 4 & 268435455;
        b |= b >> 8 & 16777215;
        return (b | b >> 16 & 65535) + 1
    };
    d.IsPowerOfTwo = function(b) {
        void 0 === b && (b = 0);
        return 0 < b && 0 == (b & b - 1)
    };
    Box2D.postDefs.push(function() {
        Box2D.Common.Math.b2Math.b2Vec2_zero = new j(0, 0);
        Box2D.Common.Math.b2Math.b2Mat22_identity = b.FromVV(new j(1, 0), new j(0, 1));
        Box2D.Common.Math.b2Math.b2Transform_identity = new f(d.b2Vec2_zero, d.b2Mat22_identity)
    });
    e.b2Sweep = function() {
        this.localCenter = new j;
        this.c0 = new j;
        this.c = new j
    };
    e.prototype.Set = function(b) {
        this.localCenter.SetV(b.localCenter);
        this.c0.SetV(b.c0);
        this.c.SetV(b.c);
        this.a0 = b.a0;
        this.a = b.a;
        this.t0 = b.t0
    };
    e.prototype.Copy = function() {
        var b = new e;
        b.localCenter.SetV(this.localCenter);
        b.c0.SetV(this.c0);
        b.c.SetV(this.c);
        b.a0 = this.a0;
        b.a = this.a;
        b.t0 = this.t0;
        return b
    };
    e.prototype.GetTransform = function(b, c) {
        void 0 === c && (c = 0);
        b.position.x = (1 - c) * this.c0.x + c * this.c.x;
        b.position.y = (1 - c) * this.c0.y + c * this.c.y;
        b.R.Set((1 - c) * this.a0 + c * this.a);
        var d = b.R;
        b.position.x -= d.col1.x * this.localCenter.x + d.col2.x * this.localCenter.y;
        b.position.y -= d.col1.y *
            this.localCenter.x + d.col2.y * this.localCenter.y
    };
    e.prototype.Advance = function(b) {
        void 0 === b && (b = 0);
        if (this.t0 < b && 1 - this.t0 > Number.MIN_VALUE) {
            var c = (b - this.t0) / (1 - this.t0);
            this.c0.x = (1 - c) * this.c0.x + c * this.c.x;
            this.c0.y = (1 - c) * this.c0.y + c * this.c.y;
            this.a0 = (1 - c) * this.a0 + c * this.a;
            this.t0 = b
        }
    };
    f.b2Transform = function() {
        this.position = new j;
        this.R = new b
    };
    f.prototype.b2Transform = function(b, c) {
        void 0 === b && (b = null);
        void 0 === c && (c = null);
        b && (this.position.SetV(b), this.R.SetM(c))
    };
    f.prototype.Initialize = function(b,
        c) {
        this.position.SetV(b);
        this.R.SetM(c)
    };
    f.prototype.SetIdentity = function() {
        this.position.SetZero();
        this.R.SetIdentity()
    };
    f.prototype.Set = function(b) {
        this.position.SetV(b.position);
        this.R.SetM(b.R)
    };
    f.prototype.GetAngle = function() {
        return Math.atan2(this.R.col1.y, this.R.col1.x)
    };
    j.b2Vec2 = function() {};
    j.prototype.b2Vec2 = function(b, c) {
        void 0 === b && (b = 0);
        void 0 === c && (c = 0);
        this.x = b;
        this.y = c
    };
    j.prototype.SetZero = function() {
        this.y = this.x = 0
    };
    j.prototype.Set = function(b, c) {
        void 0 === b && (b = 0);
        void 0 === c && (c = 0);
        this.x = b;
        this.y = c
    };
    j.prototype.SetV = function(b) {
        this.x = b.x;
        this.y = b.y
    };
    j.prototype.GetNegative = function() {
        return new j(-this.x, -this.y)
    };
    j.prototype.NegativeSelf = function() {
        this.x = -this.x;
        this.y = -this.y
    };
    j.Make = function(b, c) {
        void 0 === b && (b = 0);
        void 0 === c && (c = 0);
        return new j(b, c)
    };
    j.prototype.Copy = function() {
        return new j(this.x, this.y)
    };
    j.prototype.Add = function(b) {
        this.x += b.x;
        this.y += b.y
    };
    j.prototype.Subtract = function(b) {
        this.x -= b.x;
        this.y -= b.y
    };
    j.prototype.Multiply = function(b) {
        void 0 === b && (b = 0);
        this.x *=
            b;
        this.y *= b
    };
    j.prototype.MulM = function(b) {
        var c = this.x;
        this.x = b.col1.x * c + b.col2.x * this.y;
        this.y = b.col1.y * c + b.col2.y * this.y
    };
    j.prototype.MulTM = function(b) {
        var c = d.Dot(this, b.col1);
        this.y = d.Dot(this, b.col2);
        this.x = c
    };
    j.prototype.CrossVF = function(b) {
        void 0 === b && (b = 0);
        var c = this.x;
        this.x = b * this.y;
        this.y = -b * c
    };
    j.prototype.CrossFV = function(b) {
        void 0 === b && (b = 0);
        var c = this.x;
        this.x = -b * this.y;
        this.y = b * c
    };
    j.prototype.MinV = function(b) {
        this.x = this.x < b.x ? this.x : b.x;
        this.y = this.y < b.y ? this.y : b.y
    };
    j.prototype.MaxV =
        function(b) {
            this.x = this.x > b.x ? this.x : b.x;
            this.y = this.y > b.y ? this.y : b.y
        };
    j.prototype.Abs = function() {
        0 > this.x && (this.x = -this.x);
        0 > this.y && (this.y = -this.y)
    };
    j.prototype.Length = function() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    };
    j.prototype.LengthSquared = function() {
        return this.x * this.x + this.y * this.y
    };
    j.prototype.Normalize = function() {
        var b = Math.sqrt(this.x * this.x + this.y * this.y);
        if (b < Number.MIN_VALUE) return 0;
        var c = 1 / b;
        this.x *= c;
        this.y *= c;
        return b
    };
    j.prototype.IsValid = function() {
        return d.IsValid(this.x) &&
            d.IsValid(this.y)
    };
    n.b2Vec3 = function() {};
    n.prototype.b2Vec3 = function(b, c, d) {
        void 0 === b && (b = 0);
        void 0 === c && (c = 0);
        void 0 === d && (d = 0);
        this.x = b;
        this.y = c;
        this.z = d
    };
    n.prototype.SetZero = function() {
        this.x = this.y = this.z = 0
    };
    n.prototype.Set = function(b, c, d) {
        void 0 === b && (b = 0);
        void 0 === c && (c = 0);
        void 0 === d && (d = 0);
        this.x = b;
        this.y = c;
        this.z = d
    };
    n.prototype.SetV = function(b) {
        this.x = b.x;
        this.y = b.y;
        this.z = b.z
    };
    n.prototype.GetNegative = function() {
        return new n(-this.x, -this.y, -this.z)
    };
    n.prototype.NegativeSelf = function() {
        this.x = -this.x;
        this.y = -this.y;
        this.z = -this.z
    };
    n.prototype.Copy = function() {
        return new n(this.x, this.y, this.z)
    };
    n.prototype.Add = function(b) {
        this.x += b.x;
        this.y += b.y;
        this.z += b.z
    };
    n.prototype.Subtract = function(b) {
        this.x -= b.x;
        this.y -= b.y;
        this.z -= b.z
    };
    n.prototype.Multiply = function(b) {
        void 0 === b && (b = 0);
        this.x *= b;
        this.y *= b;
        this.z *= b
    }
})();
(function() {
    var b = Box2D.Common.Math.b2Math,
        c = Box2D.Common.Math.b2Sweep,
        d = Box2D.Common.Math.b2Transform,
        e = Box2D.Common.Math.b2Vec2,
        f = Box2D.Common.b2Color,
        j = Box2D.Common.b2Settings,
        n = Box2D.Collision.b2AABB,
        l = Box2D.Collision.b2ContactPoint,
        g = Box2D.Collision.b2DynamicTreeBroadPhase,
        r = Box2D.Collision.b2RayCastInput,
        y = Box2D.Collision.b2RayCastOutput,
        z = Box2D.Collision.Shapes.b2CircleShape,
        A = Box2D.Collision.Shapes.b2EdgeShape,
        B = Box2D.Collision.Shapes.b2MassData,
        E = Box2D.Collision.Shapes.b2PolygonShape,
        D = Box2D.Collision.Shapes.b2Shape,
        u = Box2D.Dynamics.b2Body,
        G = Box2D.Dynamics.b2BodyDef,
        K = Box2D.Dynamics.b2ContactFilter,
        L = Box2D.Dynamics.b2ContactImpulse,
        N = Box2D.Dynamics.b2ContactListener,
        Q = Box2D.Dynamics.b2ContactManager,
        I = Box2D.Dynamics.b2DebugDraw,
        fa = Box2D.Dynamics.b2DestructionListener,
        O = Box2D.Dynamics.b2FilterData,
        P = Box2D.Dynamics.b2Fixture,
        ba = Box2D.Dynamics.b2FixtureDef,
        U = Box2D.Dynamics.b2Island,
        s = Box2D.Dynamics.b2TimeStep,
        x = Box2D.Dynamics.b2World,
        F = Box2D.Dynamics.Contacts.b2Contact,
        C = Box2D.Dynamics.Contacts.b2ContactFactory,
        H = Box2D.Dynamics.Contacts.b2ContactSolver,
        aa = Box2D.Dynamics.Joints.b2Joint,
        R = Box2D.Dynamics.Joints.b2PulleyJoint;
    u.b2Body = function() {
        this.m_xf = new d;
        this.m_sweep = new c;
        this.m_linearVelocity = new e;
        this.m_force = new e
    };
    u.prototype.connectEdges = function(c, d, e) {
        void 0 === e && (e = 0);
        var f = Math.atan2(d.GetDirectionVector().y, d.GetDirectionVector().x);
        e = b.MulFV(Math.tan(0.5 * (f - e)), d.GetDirectionVector());
        e = b.SubtractVV(e, d.GetNormalVector());
        e = b.MulFV(j.b2_toiSlop, e);
        e = b.AddVV(e, d.GetVertex1());
        var g = b.AddVV(c.GetDirectionVector(),
            d.GetDirectionVector());
        g.Normalize();
        var s = 0 < b.Dot(c.GetDirectionVector(), d.GetNormalVector());
        c.SetNextEdge(d, e, g, s);
        d.SetPrevEdge(c, e, g, s);
        return f
    };
    u.prototype.CreateFixture = function(b) {
        if (!0 == this.m_world.IsLocked()) return null;
        var c = new P;
        c.Create(this, this.m_xf, b);
        this.m_flags & u.e_activeFlag && c.CreateProxy(this.m_world.m_contactManager.m_broadPhase, this.m_xf);
        c.m_next = this.m_fixtureList;
        this.m_fixtureList = c;
        ++this.m_fixtureCount;
        c.m_body = this;
        0 < c.m_density && this.ResetMassData();
        this.m_world.m_flags |=
            x.e_newFixture;
        return c
    };
    u.prototype.CreateFixture2 = function(b, c) {
        void 0 === c && (c = 0);
        var d = new ba;
        d.shape = b;
        d.density = c;
        return this.CreateFixture(d)
    };
    u.prototype.DestroyFixture = function(b) {
        if (!0 != this.m_world.IsLocked()) {
            for (var c = this.m_fixtureList, d = null; null != c;) {
                if (c == b) {
                    d ? d.m_next = b.m_next : this.m_fixtureList = b.m_next;
                    break
                }
                d = c;
                c = c.m_next
            }
            for (c = this.m_contactList; c;) {
                var d = c.contact,
                    c = c.next,
                    e = d.GetFixtureA(),
                    f = d.GetFixtureB();
                (b == e || b == f) && this.m_world.m_contactManager.Destroy(d)
            }
            this.m_flags &
                u.e_activeFlag && b.DestroyProxy(this.m_world.m_contactManager.m_broadPhase);
            b.Destroy();
            b.m_body = null;
            b.m_next = null;
            --this.m_fixtureCount;
            this.ResetMassData()
        }
    };
    u.prototype.SetPositionAndAngle = function(b, c) {
        void 0 === c && (c = 0);
        var d;
        if (!0 != this.m_world.IsLocked()) {
            this.m_xf.R.Set(c);
            this.m_xf.position.SetV(b);
            d = this.m_xf.R;
            var e = this.m_sweep.localCenter;
            this.m_sweep.c.x = d.col1.x * e.x + d.col2.x * e.y;
            this.m_sweep.c.y = d.col1.y * e.x + d.col2.y * e.y;
            this.m_sweep.c.x += this.m_xf.position.x;
            this.m_sweep.c.y += this.m_xf.position.y;
            this.m_sweep.c0.SetV(this.m_sweep.c);
            this.m_sweep.a0 = this.m_sweep.a = c;
            e = this.m_world.m_contactManager.m_broadPhase;
            for (d = this.m_fixtureList; d; d = d.m_next) d.Synchronize(e, this.m_xf, this.m_xf);
            this.m_world.m_contactManager.FindNewContacts()
        }
    };
    u.prototype.SetTransform = function(b) {
        this.SetPositionAndAngle(b.position, b.GetAngle())
    };
    u.prototype.GetTransform = function() {
        return this.m_xf
    };
    u.prototype.GetPosition = function() {
        return this.m_xf.position
    };
    u.prototype.SetPosition = function(b) {
        this.SetPositionAndAngle(b,
            this.GetAngle())
    };
    u.prototype.GetAngle = function() {
        return this.m_sweep.a
    };
    u.prototype.SetAngle = function(b) {
        void 0 === b && (b = 0);
        this.SetPositionAndAngle(this.GetPosition(), b)
    };
    u.prototype.GetWorldCenter = function() {
        return this.m_sweep.c
    };
    u.prototype.GetLocalCenter = function() {
        return this.m_sweep.localCenter
    };
    u.prototype.SetLinearVelocity = function(b) {
        this.m_type != u.b2_staticBody && this.m_linearVelocity.SetV(b)
    };
    u.prototype.GetLinearVelocity = function() {
        return this.m_linearVelocity
    };
    u.prototype.SetAngularVelocity =
        function(b) {
            void 0 === b && (b = 0);
            this.m_type != u.b2_staticBody && (this.m_angularVelocity = b)
        };
    u.prototype.GetAngularVelocity = function() {
        return this.m_angularVelocity
    };
    u.prototype.GetDefinition = function() {
        var b = new G;
        b.type = this.GetType();
        b.allowSleep = (this.m_flags & u.e_allowSleepFlag) == u.e_allowSleepFlag;
        b.angle = this.GetAngle();
        b.angularDamping = this.m_angularDamping;
        b.angularVelocity = this.m_angularVelocity;
        b.fixedRotation = (this.m_flags & u.e_fixedRotationFlag) == u.e_fixedRotationFlag;
        b.bullet = (this.m_flags &
            u.e_bulletFlag) == u.e_bulletFlag;
        b.awake = (this.m_flags & u.e_awakeFlag) == u.e_awakeFlag;
        b.linearDamping = this.m_linearDamping;
        b.linearVelocity.SetV(this.GetLinearVelocity());
        b.position = this.GetPosition();
        b.userData = this.GetUserData();
        return b
    };
    u.prototype.ApplyForce = function(b, c) {
        this.m_type == u.b2_dynamicBody && (!1 == this.IsAwake() && this.SetAwake(!0), this.m_force.x += b.x, this.m_force.y += b.y, this.m_torque += (c.x - this.m_sweep.c.x) * b.y - (c.y - this.m_sweep.c.y) * b.x)
    };
    u.prototype.ApplyTorque = function(b) {
        void 0 ===
            b && (b = 0);
        this.m_type == u.b2_dynamicBody && (!1 == this.IsAwake() && this.SetAwake(!0), this.m_torque += b)
    };
    u.prototype.ApplyImpulse = function(b, c) {
        this.m_type == u.b2_dynamicBody && (!1 == this.IsAwake() && this.SetAwake(!0), this.m_linearVelocity.x += this.m_invMass * b.x, this.m_linearVelocity.y += this.m_invMass * b.y, this.m_angularVelocity += this.m_invI * ((c.x - this.m_sweep.c.x) * b.y - (c.y - this.m_sweep.c.y) * b.x))
    };
    u.prototype.Split = function(c) {
        for (var d = this.GetLinearVelocity().Copy(), e = this.GetAngularVelocity(), f = this.GetWorldCenter(),
                g = this.m_world.CreateBody(this.GetDefinition()), s, j = this.m_fixtureList; j;)
            if (c(j)) {
                var x = j.m_next;
                s ? s.m_next = x : this.m_fixtureList = x;
                this.m_fixtureCount--;
                j.m_next = g.m_fixtureList;
                g.m_fixtureList = j;
                g.m_fixtureCount++;
                j.m_body = g;
                j = x
            } else s = j, j = j.m_next;
        this.ResetMassData();
        g.ResetMassData();
        s = this.GetWorldCenter();
        c = g.GetWorldCenter();
        s = b.AddVV(d, b.CrossFV(e, b.SubtractVV(s, f)));
        d = b.AddVV(d, b.CrossFV(e, b.SubtractVV(c, f)));
        this.SetLinearVelocity(s);
        g.SetLinearVelocity(d);
        this.SetAngularVelocity(e);
        g.SetAngularVelocity(e);
        this.SynchronizeFixtures();
        g.SynchronizeFixtures();
        return g
    };
    u.prototype.Merge = function(b) {
        var c;
        for (c = b.m_fixtureList; c;) {
            var d = c.m_next;
            b.m_fixtureCount--;
            c.m_next = this.m_fixtureList;
            this.m_fixtureList = c;
            this.m_fixtureCount++;
            c.m_body = f;
            c = d
        }
        e.m_fixtureCount = 0;
        var e = this,
            f = b;
        e.GetWorldCenter();
        f.GetWorldCenter();
        e.GetLinearVelocity().Copy();
        f.GetLinearVelocity().Copy();
        e.GetAngularVelocity();
        f.GetAngularVelocity();
        e.ResetMassData();
        this.SynchronizeFixtures()
    };
    u.prototype.GetMass = function() {
        return this.m_mass
    };
    u.prototype.GetInertia = function() {
        return this.m_I
    };
    u.prototype.GetMassData = function(b) {
        b.mass = this.m_mass;
        b.I = this.m_I;
        b.center.SetV(this.m_sweep.localCenter)
    };
    u.prototype.SetMassData = function(c) {
        j.b2Assert(!1 == this.m_world.IsLocked());
        if (!0 != this.m_world.IsLocked() && this.m_type == u.b2_dynamicBody) {
            this.m_invI = this.m_I = this.m_invMass = 0;
            this.m_mass = c.mass;
            0 >= this.m_mass && (this.m_mass = 1);
            this.m_invMass = 1 / this.m_mass;
            0 < c.I && 0 == (this.m_flags & u.e_fixedRotationFlag) && (this.m_I = c.I - this.m_mass * (c.center.x *
                c.center.x + c.center.y * c.center.y), this.m_invI = 1 / this.m_I);
            var d = this.m_sweep.c.Copy();
            this.m_sweep.localCenter.SetV(c.center);
            this.m_sweep.c0.SetV(b.MulX(this.m_xf, this.m_sweep.localCenter));
            this.m_sweep.c.SetV(this.m_sweep.c0);
            this.m_linearVelocity.x += this.m_angularVelocity * -(this.m_sweep.c.y - d.y);
            this.m_linearVelocity.y += this.m_angularVelocity * +(this.m_sweep.c.x - d.x)
        }
    };
    u.prototype.ResetMassData = function() {
        this.m_invI = this.m_I = this.m_invMass = this.m_mass = 0;
        this.m_sweep.localCenter.SetZero();
        if (!(this.m_type ==
                u.b2_staticBody || this.m_type == u.b2_kinematicBody)) {
            for (var c = e.Make(0, 0), d = this.m_fixtureList; d; d = d.m_next)
                if (0 != d.m_density) {
                    var f = d.GetMassData();
                    this.m_mass += f.mass;
                    c.x += f.center.x * f.mass;
                    c.y += f.center.y * f.mass;
                    this.m_I += f.I
                }
            0 < this.m_mass ? (this.m_invMass = 1 / this.m_mass, c.x *= this.m_invMass, c.y *= this.m_invMass) : this.m_invMass = this.m_mass = 1;
            0 < this.m_I && 0 == (this.m_flags & u.e_fixedRotationFlag) ? (this.m_I -= this.m_mass * (c.x * c.x + c.y * c.y), this.m_I *= this.m_inertiaScale, j.b2Assert(0 < this.m_I), this.m_invI = 1 /
                this.m_I) : this.m_invI = this.m_I = 0;
            d = this.m_sweep.c.Copy();
            this.m_sweep.localCenter.SetV(c);
            this.m_sweep.c0.SetV(b.MulX(this.m_xf, this.m_sweep.localCenter));
            this.m_sweep.c.SetV(this.m_sweep.c0);
            this.m_linearVelocity.x += this.m_angularVelocity * -(this.m_sweep.c.y - d.y);
            this.m_linearVelocity.y += this.m_angularVelocity * +(this.m_sweep.c.x - d.x)
        }
    };
    u.prototype.GetWorldPoint = function(b) {
        var c = this.m_xf.R;
        b = new e(c.col1.x * b.x + c.col2.x * b.y, c.col1.y * b.x + c.col2.y * b.y);
        b.x += this.m_xf.position.x;
        b.y += this.m_xf.position.y;
        return b
    };
    u.prototype.GetWorldVector = function(c) {
        return b.MulMV(this.m_xf.R, c)
    };
    u.prototype.GetLocalPoint = function(c) {
        return b.MulXT(this.m_xf, c)
    };
    u.prototype.GetLocalVector = function(c) {
        return b.MulTMV(this.m_xf.R, c)
    };
    u.prototype.GetLinearVelocityFromWorldPoint = function(b) {
        return new e(this.m_linearVelocity.x - this.m_angularVelocity * (b.y - this.m_sweep.c.y), this.m_linearVelocity.y + this.m_angularVelocity * (b.x - this.m_sweep.c.x))
    };
    u.prototype.GetLinearVelocityFromLocalPoint = function(b) {
        var c = this.m_xf.R;
        b = new e(c.col1.x * b.x + c.col2.x * b.y, c.col1.y * b.x + c.col2.y * b.y);
        b.x += this.m_xf.position.x;
        b.y += this.m_xf.position.y;
        return new e(this.m_linearVelocity.x - this.m_angularVelocity * (b.y - this.m_sweep.c.y), this.m_linearVelocity.y + this.m_angularVelocity * (b.x - this.m_sweep.c.x))
    };
    u.prototype.GetLinearDamping = function() {
        return this.m_linearDamping
    };
    u.prototype.SetLinearDamping = function(b) {
        void 0 === b && (b = 0);
        this.m_linearDamping = b
    };
    u.prototype.GetAngularDamping = function() {
        return this.m_angularDamping
    };
    u.prototype.SetAngularDamping =
        function(b) {
            void 0 === b && (b = 0);
            this.m_angularDamping = b
        };
    u.prototype.SetType = function(b) {
        void 0 === b && (b = 0);
        if (this.m_type != b) {
            this.m_type = b;
            this.ResetMassData();
            this.m_type == u.b2_staticBody && (this.m_linearVelocity.SetZero(), this.m_angularVelocity = 0);
            this.SetAwake(!0);
            this.m_force.SetZero();
            this.m_torque = 0;
            for (b = this.m_contactList; b; b = b.next) b.contact.FlagForFiltering()
        }
    };
    u.prototype.GetType = function() {
        return this.m_type
    };
    u.prototype.SetBullet = function(b) {
        this.m_flags = b ? this.m_flags | u.e_bulletFlag : this.m_flags &
            ~u.e_bulletFlag
    };
    u.prototype.IsBullet = function() {
        return (this.m_flags & u.e_bulletFlag) == u.e_bulletFlag
    };
    u.prototype.SetSleepingAllowed = function(b) {
        b ? this.m_flags |= u.e_allowSleepFlag : (this.m_flags &= ~u.e_allowSleepFlag, this.SetAwake(!0))
    };
    u.prototype.SetAwake = function(b) {
        b ? (this.m_flags |= u.e_awakeFlag, this.m_sleepTime = 0) : (this.m_flags &= ~u.e_awakeFlag, this.m_sleepTime = 0, this.m_linearVelocity.SetZero(), this.m_angularVelocity = 0, this.m_force.SetZero(), this.m_torque = 0)
    };
    u.prototype.IsAwake = function() {
        return (this.m_flags &
            u.e_awakeFlag) == u.e_awakeFlag
    };
    u.prototype.SetFixedRotation = function(b) {
        this.m_flags = b ? this.m_flags | u.e_fixedRotationFlag : this.m_flags & ~u.e_fixedRotationFlag;
        this.ResetMassData()
    };
    u.prototype.IsFixedRotation = function() {
        return (this.m_flags & u.e_fixedRotationFlag) == u.e_fixedRotationFlag
    };
    u.prototype.SetActive = function(b) {
        if (b != this.IsActive()) {
            var c;
            if (b) {
                this.m_flags |= u.e_activeFlag;
                b = this.m_world.m_contactManager.m_broadPhase;
                for (c = this.m_fixtureList; c; c = c.m_next) c.CreateProxy(b, this.m_xf)
            } else {
                this.m_flags &=
                    ~u.e_activeFlag;
                b = this.m_world.m_contactManager.m_broadPhase;
                for (c = this.m_fixtureList; c; c = c.m_next) c.DestroyProxy(b);
                for (b = this.m_contactList; b;) c = b, b = b.next, this.m_world.m_contactManager.Destroy(c.contact);
                this.m_contactList = null
            }
        }
    };
    u.prototype.IsActive = function() {
        return (this.m_flags & u.e_activeFlag) == u.e_activeFlag
    };
    u.prototype.IsSleepingAllowed = function() {
        return (this.m_flags & u.e_allowSleepFlag) == u.e_allowSleepFlag
    };
    u.prototype.GetFixtureList = function() {
        return this.m_fixtureList
    };
    u.prototype.GetJointList =
        function() {
            return this.m_jointList
        };
    u.prototype.GetControllerList = function() {
        return this.m_controllerList
    };
    u.prototype.GetContactList = function() {
        return this.m_contactList
    };
    u.prototype.GetNext = function() {
        return this.m_next
    };
    u.prototype.GetUserData = function() {
        return this.m_userData
    };
    u.prototype.SetUserData = function(b) {
        this.m_userData = b
    };
    u.prototype.GetWorld = function() {
        return this.m_world
    };
    u.prototype.b2Body = function(b, c) {
        this.m_flags = 0;
        b.bullet && (this.m_flags |= u.e_bulletFlag);
        b.fixedRotation && (this.m_flags |=
            u.e_fixedRotationFlag);
        b.allowSleep && (this.m_flags |= u.e_allowSleepFlag);
        b.awake && (this.m_flags |= u.e_awakeFlag);
        b.active && (this.m_flags |= u.e_activeFlag);
        this.m_world = c;
        this.m_xf.position.SetV(b.position);
        this.m_xf.R.Set(b.angle);
        this.m_sweep.localCenter.SetZero();
        this.m_sweep.t0 = 1;
        this.m_sweep.a0 = this.m_sweep.a = b.angle;
        var d = this.m_xf.R,
            e = this.m_sweep.localCenter;
        this.m_sweep.c.x = d.col1.x * e.x + d.col2.x * e.y;
        this.m_sweep.c.y = d.col1.y * e.x + d.col2.y * e.y;
        this.m_sweep.c.x += this.m_xf.position.x;
        this.m_sweep.c.y +=
            this.m_xf.position.y;
        this.m_sweep.c0.SetV(this.m_sweep.c);
        this.m_contactList = this.m_controllerList = this.m_jointList = null;
        this.m_controllerCount = 0;
        this.m_next = this.m_prev = null;
        this.m_linearVelocity.SetV(b.linearVelocity);
        this.m_angularVelocity = b.angularVelocity;
        this.m_linearDamping = b.linearDamping;
        this.m_angularDamping = b.angularDamping;
        this.m_force.Set(0, 0);
        this.m_sleepTime = this.m_torque = 0;
        this.m_type = b.type;
        this.m_invMass = this.m_type == u.b2_dynamicBody ? this.m_mass = 1 : this.m_mass = 0;
        this.m_invI = this.m_I =
            0;
        this.m_inertiaScale = b.inertiaScale;
        this.m_userData = b.userData;
        this.m_fixtureList = null;
        this.m_fixtureCount = 0
    };
    u.prototype.SynchronizeFixtures = function() {
        var b = u.s_xf1;
        b.R.Set(this.m_sweep.a0);
        var c = b.R,
            d = this.m_sweep.localCenter;
        b.position.x = this.m_sweep.c0.x - (c.col1.x * d.x + c.col2.x * d.y);
        b.position.y = this.m_sweep.c0.y - (c.col1.y * d.x + c.col2.y * d.y);
        d = this.m_world.m_contactManager.m_broadPhase;
        for (c = this.m_fixtureList; c; c = c.m_next) c.Synchronize(d, b, this.m_xf)
    };
    u.prototype.SynchronizeTransform = function() {
        this.m_xf.R.Set(this.m_sweep.a);
        var b = this.m_xf.R,
            c = this.m_sweep.localCenter;
        this.m_xf.position.x = this.m_sweep.c.x - (b.col1.x * c.x + b.col2.x * c.y);
        this.m_xf.position.y = this.m_sweep.c.y - (b.col1.y * c.x + b.col2.y * c.y)
    };
    u.prototype.ShouldCollide = function(b) {
        if (this.m_type != u.b2_dynamicBody && b.m_type != u.b2_dynamicBody) return !1;
        for (var c = this.m_jointList; c; c = c.next)
            if (c.other == b && !1 == c.joint.m_collideConnected) return !1;
        return !0
    };
    u.prototype.Advance = function(b) {
        void 0 === b && (b = 0);
        this.m_sweep.Advance(b);
        this.m_sweep.c.SetV(this.m_sweep.c0);
        this.m_sweep.a =
            this.m_sweep.a0;
        this.SynchronizeTransform()
    };
    Box2D.postDefs.push(function() {
        Box2D.Dynamics.b2Body.s_xf1 = new d;
        Box2D.Dynamics.b2Body.e_islandFlag = 1;
        Box2D.Dynamics.b2Body.e_awakeFlag = 2;
        Box2D.Dynamics.b2Body.e_allowSleepFlag = 4;
        Box2D.Dynamics.b2Body.e_bulletFlag = 8;
        Box2D.Dynamics.b2Body.e_fixedRotationFlag = 16;
        Box2D.Dynamics.b2Body.e_activeFlag = 32;
        Box2D.Dynamics.b2Body.b2_staticBody = 0;
        Box2D.Dynamics.b2Body.b2_kinematicBody = 1;
        Box2D.Dynamics.b2Body.b2_dynamicBody = 2
    });
    G.b2BodyDef = function() {
        this.position =
            new e;
        this.linearVelocity = new e
    };
    G.prototype.b2BodyDef = function() {
        this.userData = null;
        this.position.Set(0, 0);
        this.angle = 0;
        this.linearVelocity.Set(0, 0);
        this.angularDamping = this.linearDamping = this.angularVelocity = 0;
        this.awake = this.allowSleep = !0;
        this.bullet = this.fixedRotation = !1;
        this.type = u.b2_staticBody;
        this.active = !0;
        this.inertiaScale = 1
    };
    K.b2ContactFilter = function() {};
    K.prototype.ShouldCollide = function(b, c) {
        var d = b.GetFilterData(),
            e = c.GetFilterData();
        return d.groupIndex == e.groupIndex && 0 != d.groupIndex ?
            0 < d.groupIndex : 0 != (d.maskBits & e.categoryBits) && 0 != (d.categoryBits & e.maskBits)
    };
    K.prototype.RayCollide = function(b, c) {
        return !b ? !0 : this.ShouldCollide(b instanceof P ? b : null, c)
    };
    Box2D.postDefs.push(function() {
        Box2D.Dynamics.b2ContactFilter.b2_defaultFilter = new K
    });
    L.b2ContactImpulse = function() {
        this.normalImpulses = new Vector_a2j_Number(j.b2_maxManifoldPoints);
        this.tangentImpulses = new Vector_a2j_Number(j.b2_maxManifoldPoints)
    };
    N.b2ContactListener = function() {};
    N.prototype.BeginContact = function() {};
    N.prototype.EndContact =
        function() {};
    N.prototype.PreSolve = function() {};
    N.prototype.PostSolve = function() {};
    Box2D.postDefs.push(function() {
        Box2D.Dynamics.b2ContactListener.b2_defaultListener = new N
    });
    Q.b2ContactManager = function() {};
    Q.prototype.b2ContactManager = function() {
        this.m_world = null;
        this.m_contactCount = 0;
        this.m_contactFilter = K.b2_defaultFilter;
        this.m_contactListener = N.b2_defaultListener;
        this.m_contactFactory = new C(this.m_allocator);
        this.m_broadPhase = new g
    };
    Q.prototype.AddPair = function(b, c) {
        var d = b instanceof P ? b : null,
            e = c instanceof P ? c : null,
            f = d.GetBody(),
            g = e.GetBody();
        if (f != g) {
            for (var j = g.GetContactList(); j;) {
                if (j.other == f) {
                    var s = j.contact.GetFixtureA(),
                        x = j.contact.GetFixtureB();
                    if (s == d && x == e || s == e && x == d) return
                }
                j = j.next
            }!1 != g.ShouldCollide(f) && !1 != this.m_contactFilter.ShouldCollide(d, e) && (j = this.m_contactFactory.Create(d, e), d = j.GetFixtureA(), e = j.GetFixtureB(), f = d.m_body, g = e.m_body, j.m_prev = null, j.m_next = this.m_world.m_contactList, null != this.m_world.m_contactList && (this.m_world.m_contactList.m_prev = j), this.m_world.m_contactList =
                j, j.m_nodeA.contact = j, j.m_nodeA.other = g, j.m_nodeA.prev = null, j.m_nodeA.next = f.m_contactList, null != f.m_contactList && (f.m_contactList.prev = j.m_nodeA), f.m_contactList = j.m_nodeA, j.m_nodeB.contact = j, j.m_nodeB.other = f, j.m_nodeB.prev = null, j.m_nodeB.next = g.m_contactList, null != g.m_contactList && (g.m_contactList.prev = j.m_nodeB), g.m_contactList = j.m_nodeB, ++this.m_world.m_contactCount)
        }
    };
    Q.prototype.FindNewContacts = function() {
        this.m_broadPhase.UpdatePairs(Box2D.generateCallback(this, this.AddPair))
    };
    Q.prototype.Destroy =
        function(b) {
            var c = b.GetFixtureA(),
                d = b.GetFixtureB(),
                c = c.GetBody(),
                d = d.GetBody();
            b.IsTouching() && this.m_contactListener.EndContact(b);
            b.m_prev && (b.m_prev.m_next = b.m_next);
            b.m_next && (b.m_next.m_prev = b.m_prev);
            b == this.m_world.m_contactList && (this.m_world.m_contactList = b.m_next);
            b.m_nodeA.prev && (b.m_nodeA.prev.next = b.m_nodeA.next);
            b.m_nodeA.next && (b.m_nodeA.next.prev = b.m_nodeA.prev);
            b.m_nodeA == c.m_contactList && (c.m_contactList = b.m_nodeA.next);
            b.m_nodeB.prev && (b.m_nodeB.prev.next = b.m_nodeB.next);
            b.m_nodeB.next &&
                (b.m_nodeB.next.prev = b.m_nodeB.prev);
            b.m_nodeB == d.m_contactList && (d.m_contactList = b.m_nodeB.next);
            this.m_contactFactory.Destroy(b);
            --this.m_contactCount
        };
    Q.prototype.Collide = function() {
        for (var b = this.m_world.m_contactList; b;) {
            var c = b.GetFixtureA(),
                d = b.GetFixtureB(),
                e = c.GetBody(),
                f = d.GetBody();
            if (!1 == e.IsAwake() && !1 == f.IsAwake()) b = b.GetNext();
            else {
                if (b.m_flags & F.e_filterFlag) {
                    if (!1 == f.ShouldCollide(e)) {
                        c = b;
                        b = c.GetNext();
                        this.Destroy(c);
                        continue
                    }
                    if (!1 == this.m_contactFilter.ShouldCollide(c, d)) {
                        c = b;
                        b =
                            c.GetNext();
                        this.Destroy(c);
                        continue
                    }
                    b.m_flags &= ~F.e_filterFlag
                }!1 == this.m_broadPhase.TestOverlap(c.m_proxy, d.m_proxy) ? (c = b, b = c.GetNext(), this.Destroy(c)) : (b.Update(this.m_contactListener), b = b.GetNext())
            }
        }
    };
    Box2D.postDefs.push(function() {
        Box2D.Dynamics.b2ContactManager.s_evalCP = new l
    });
    I.b2DebugDraw = function() {};
    I.prototype.b2DebugDraw = function() {};
    I.prototype.SetFlags = function() {};
    I.prototype.GetFlags = function() {};
    I.prototype.AppendFlags = function() {};
    I.prototype.ClearFlags = function() {};
    I.prototype.SetSprite =
        function() {};
    I.prototype.GetSprite = function() {};
    I.prototype.SetDrawScale = function() {};
    I.prototype.GetDrawScale = function() {};
    I.prototype.SetLineThickness = function() {};
    I.prototype.GetLineThickness = function() {};
    I.prototype.SetAlpha = function() {};
    I.prototype.GetAlpha = function() {};
    I.prototype.SetFillAlpha = function() {};
    I.prototype.GetFillAlpha = function() {};
    I.prototype.SetXFormScale = function() {};
    I.prototype.GetXFormScale = function() {};
    I.prototype.DrawPolygon = function() {};
    I.prototype.DrawSolidPolygon = function() {};
    I.prototype.DrawCircle = function() {};
    I.prototype.DrawSolidCircle = function() {};
    I.prototype.DrawSegment = function() {};
    I.prototype.DrawTransform = function() {};
    Box2D.postDefs.push(function() {
        Box2D.Dynamics.b2DebugDraw.e_shapeBit = 1;
        Box2D.Dynamics.b2DebugDraw.e_jointBit = 2;
        Box2D.Dynamics.b2DebugDraw.e_aabbBit = 4;
        Box2D.Dynamics.b2DebugDraw.e_pairBit = 8;
        Box2D.Dynamics.b2DebugDraw.e_centerOfMassBit = 16;
        Box2D.Dynamics.b2DebugDraw.e_controllerBit = 32
    });
    fa.b2DestructionListener = function() {};
    fa.prototype.SayGoodbyeJoint =
        function() {};
    fa.prototype.SayGoodbyeFixture = function() {};
    O.b2FilterData = function() {
        this.categoryBits = 1;
        this.maskBits = 65535;
        this.groupIndex = 0
    };
    O.prototype.Copy = function() {
        var b = new O;
        b.categoryBits = this.categoryBits;
        b.maskBits = this.maskBits;
        b.groupIndex = this.groupIndex;
        return b
    };
    P.b2Fixture = function() {
        this.m_filter = new O
    };
    P.prototype.GetType = function() {
        return this.m_shape.GetType()
    };
    P.prototype.GetShape = function() {
        return this.m_shape
    };
    P.prototype.SetSensor = function(b) {
        if (this.m_isSensor != b && (this.m_isSensor =
                b, null != this.m_body))
            for (b = this.m_body.GetContactList(); b;) {
                var c = b.contact,
                    d = c.GetFixtureA(),
                    e = c.GetFixtureB();
                if (d == this || e == this) c.SetSensor(d.IsSensor() || e.IsSensor());
                b = b.next
            }
    };
    P.prototype.IsSensor = function() {
        return this.m_isSensor
    };
    P.prototype.SetFilterData = function(b) {
        this.m_filter = b.Copy();
        if (!this.m_body)
            for (b = this.m_body.GetContactList(); b;) {
                var c = b.contact,
                    d = c.GetFixtureA(),
                    e = c.GetFixtureB();
                (d == this || e == this) && c.FlagForFiltering();
                b = b.next
            }
    };
    P.prototype.GetFilterData = function() {
        return this.m_filter.Copy()
    };
    P.prototype.GetBody = function() {
        return this.m_body
    };
    P.prototype.GetNext = function() {
        return this.m_next
    };
    P.prototype.GetUserData = function() {
        return this.m_userData
    };
    P.prototype.SetUserData = function(b) {
        this.m_userData = b
    };
    P.prototype.TestPoint = function(b) {
        return this.m_shape.TestPoint(this.m_body.GetTransform(), b)
    };
    P.prototype.RayCast = function(b, c) {
        return this.m_shape.RayCast(b, c, this.m_body.GetTransform())
    };
    P.prototype.GetMassData = function(b) {
        void 0 === b && (b = null);
        null == b && (b = new B);
        this.m_shape.ComputeMass(b,
            this.m_density);
        return b
    };
    P.prototype.SetDensity = function(b) {
        void 0 === b && (b = 0);
        this.m_density = b
    };
    P.prototype.GetDensity = function() {
        return this.m_density
    };
    P.prototype.GetFriction = function() {
        return this.m_friction
    };
    P.prototype.SetFriction = function(b) {
        void 0 === b && (b = 0);
        this.m_friction = b
    };
    P.prototype.GetRestitution = function() {
        return this.m_restitution
    };
    P.prototype.SetRestitution = function(b) {
        void 0 === b && (b = 0);
        this.m_restitution = b
    };
    P.prototype.GetAABB = function() {
        return this.m_aabb
    };
    P.prototype.b2Fixture =
        function() {
            this.m_aabb = new n;
            this.m_shape = this.m_next = this.m_body = this.m_userData = null;
            this.m_restitution = this.m_friction = this.m_density = 0
        };
    P.prototype.Create = function(b, c, d) {
        this.m_userData = d.userData;
        this.m_friction = d.friction;
        this.m_restitution = d.restitution;
        this.m_body = b;
        this.m_next = null;
        this.m_filter = d.filter.Copy();
        this.m_isSensor = d.isSensor;
        this.m_shape = d.shape.Copy();
        this.m_density = d.density
    };
    P.prototype.Destroy = function() {
        this.m_shape = null
    };
    P.prototype.CreateProxy = function(b, c) {
        this.m_shape.ComputeAABB(this.m_aabb,
            c);
        this.m_proxy = b.CreateProxy(this.m_aabb, this)
    };
    P.prototype.DestroyProxy = function(b) {
        null != this.m_proxy && (b.DestroyProxy(this.m_proxy), this.m_proxy = null)
    };
    P.prototype.Synchronize = function(c, d, e) {
        if (this.m_proxy) {
            var f = new n,
                g = new n;
            this.m_shape.ComputeAABB(f, d);
            this.m_shape.ComputeAABB(g, e);
            this.m_aabb.Combine(f, g);
            d = b.SubtractVV(e.position, d.position);
            c.MoveProxy(this.m_proxy, this.m_aabb, d)
        }
    };
    ba.b2FixtureDef = function() {
        this.filter = new O
    };
    ba.prototype.b2FixtureDef = function() {
        this.userData = this.shape =
            null;
        this.friction = 0.2;
        this.density = this.restitution = 0;
        this.filter.categoryBits = 1;
        this.filter.maskBits = 65535;
        this.filter.groupIndex = 0;
        this.isSensor = !1
    };
    U.b2Island = function() {};
    U.prototype.b2Island = function() {
        this.m_bodies = new Vector;
        this.m_contacts = new Vector;
        this.m_joints = new Vector
    };
    U.prototype.Initialize = function(b, c, d, e, f, g) {
        void 0 === b && (b = 0);
        void 0 === c && (c = 0);
        void 0 === d && (d = 0);
        var j = 0;
        this.m_bodyCapacity = b;
        this.m_contactCapacity = c;
        this.m_jointCapacity = d;
        this.m_jointCount = this.m_contactCount =
            this.m_bodyCount = 0;
        this.m_allocator = e;
        this.m_listener = f;
        this.m_contactSolver = g;
        for (j = this.m_bodies.length; j < b; j++) this.m_bodies[j] = null;
        for (j = this.m_contacts.length; j < c; j++) this.m_contacts[j] = null;
        for (j = this.m_joints.length; j < d; j++) this.m_joints[j] = null
    };
    U.prototype.Clear = function() {
        this.m_jointCount = this.m_contactCount = this.m_bodyCount = 0
    };
    U.prototype.Solve = function(c, d, e) {
        for (var f = 0, g = 0, s, f = 0; f < this.m_bodyCount; ++f) g = this.m_bodies[f], g.GetType() == u.b2_dynamicBody && (g.m_linearVelocity.x += c.dt * (d.x +
            g.m_invMass * g.m_force.x), g.m_linearVelocity.y += c.dt * (d.y + g.m_invMass * g.m_force.y), g.m_angularVelocity += c.dt * g.m_invI * g.m_torque, g.m_linearVelocity.Multiply(b.Clamp(1 - c.dt * g.m_linearDamping, 0, 1)), g.m_angularVelocity *= b.Clamp(1 - c.dt * g.m_angularDamping, 0, 1));
        this.m_contactSolver.Initialize(c, this.m_contacts, this.m_contactCount, this.m_allocator);
        d = this.m_contactSolver;
        d.InitVelocityConstraints(c);
        for (f = 0; f < this.m_jointCount; ++f) s = this.m_joints[f], s.InitVelocityConstraints(c);
        for (f = 0; f < c.velocityIterations; ++f) {
            for (g =
                0; g < this.m_jointCount; ++g) s = this.m_joints[g], s.SolveVelocityConstraints(c);
            d.SolveVelocityConstraints()
        }
        for (f = 0; f < this.m_jointCount; ++f) s = this.m_joints[f], s.FinalizeVelocityConstraints();
        d.FinalizeVelocityConstraints();
        for (f = 0; f < this.m_bodyCount; ++f)
            if (g = this.m_bodies[f], g.GetType() != u.b2_staticBody) {
                var x = c.dt * g.m_linearVelocity.x,
                    l = c.dt * g.m_linearVelocity.y;
                x * x + l * l > j.b2_maxTranslationSquared && (g.m_linearVelocity.Normalize(), g.m_linearVelocity.x *= j.b2_maxTranslation * c.inv_dt, g.m_linearVelocity.y *=
                    j.b2_maxTranslation * c.inv_dt);
                x = c.dt * g.m_angularVelocity;
                x * x > j.b2_maxRotationSquared && (g.m_angularVelocity = 0 > g.m_angularVelocity ? -j.b2_maxRotation * c.inv_dt : j.b2_maxRotation * c.inv_dt);
                g.m_sweep.c0.SetV(g.m_sweep.c);
                g.m_sweep.a0 = g.m_sweep.a;
                g.m_sweep.c.x += c.dt * g.m_linearVelocity.x;
                g.m_sweep.c.y += c.dt * g.m_linearVelocity.y;
                g.m_sweep.a += c.dt * g.m_angularVelocity;
                g.SynchronizeTransform()
            }
        for (f = 0; f < c.positionIterations; ++f) {
            x = d.SolvePositionConstraints(j.b2_contactBaumgarte);
            l = !0;
            for (g = 0; g < this.m_jointCount; ++g) s =
                this.m_joints[g], s = s.SolvePositionConstraints(j.b2_contactBaumgarte), l = l && s;
            if (x && l) break
        }
        this.Report(d.m_constraints);
        if (e) {
            e = Number.MAX_VALUE;
            d = j.b2_linearSleepTolerance * j.b2_linearSleepTolerance;
            x = j.b2_angularSleepTolerance * j.b2_angularSleepTolerance;
            for (f = 0; f < this.m_bodyCount; ++f) g = this.m_bodies[f], g.GetType() != u.b2_staticBody && (0 == (g.m_flags & u.e_allowSleepFlag) && (e = g.m_sleepTime = 0), 0 == (g.m_flags & u.e_allowSleepFlag) || g.m_angularVelocity * g.m_angularVelocity > x || b.Dot(g.m_linearVelocity, g.m_linearVelocity) >
                d ? e = g.m_sleepTime = 0 : (g.m_sleepTime += c.dt, e = b.Min(e, g.m_sleepTime)));
            if (e >= j.b2_timeToSleep)
                for (f = 0; f < this.m_bodyCount; ++f) g = this.m_bodies[f], g.SetAwake(!1)
        }
    };
    U.prototype.SolveTOI = function(b) {
        var c = 0,
            d = 0;
        this.m_contactSolver.Initialize(b, this.m_contacts, this.m_contactCount, this.m_allocator);
        for (var e = this.m_contactSolver, c = 0; c < this.m_jointCount; ++c) this.m_joints[c].InitVelocityConstraints(b);
        for (c = 0; c < b.velocityIterations; ++c) {
            e.SolveVelocityConstraints();
            for (d = 0; d < this.m_jointCount; ++d) this.m_joints[d].SolveVelocityConstraints(b)
        }
        for (c =
            0; c < this.m_bodyCount; ++c)
            if (d = this.m_bodies[c], d.GetType() != u.b2_staticBody) {
                var f = b.dt * d.m_linearVelocity.x,
                    g = b.dt * d.m_linearVelocity.y;
                f * f + g * g > j.b2_maxTranslationSquared && (d.m_linearVelocity.Normalize(), d.m_linearVelocity.x *= j.b2_maxTranslation * b.inv_dt, d.m_linearVelocity.y *= j.b2_maxTranslation * b.inv_dt);
                f = b.dt * d.m_angularVelocity;
                f * f > j.b2_maxRotationSquared && (d.m_angularVelocity = 0 > d.m_angularVelocity ? -j.b2_maxRotation * b.inv_dt : j.b2_maxRotation * b.inv_dt);
                d.m_sweep.c0.SetV(d.m_sweep.c);
                d.m_sweep.a0 =
                    d.m_sweep.a;
                d.m_sweep.c.x += b.dt * d.m_linearVelocity.x;
                d.m_sweep.c.y += b.dt * d.m_linearVelocity.y;
                d.m_sweep.a += b.dt * d.m_angularVelocity;
                d.SynchronizeTransform()
            }
        for (c = 0; c < b.positionIterations; ++c) {
            f = e.SolvePositionConstraints(0.75);
            g = !0;
            for (d = 0; d < this.m_jointCount; ++d) var s = this.m_joints[d].SolvePositionConstraints(j.b2_contactBaumgarte),
                g = g && s;
            if (f && g) break
        }
        this.Report(e.m_constraints)
    };
    U.prototype.Report = function(b) {
        if (null != this.m_listener)
            for (var c = 0; c < this.m_contactCount; ++c) {
                for (var d = this.m_contacts[c],
                        e = b[c], f = 0; f < e.pointCount; ++f) U.s_impulse.normalImpulses[f] = e.points[f].normalImpulse, U.s_impulse.tangentImpulses[f] = e.points[f].tangentImpulse;
                this.m_listener.PostSolve(d, U.s_impulse)
            }
    };
    U.prototype.AddBody = function(b) {
        b.m_islandIndex = this.m_bodyCount;
        this.m_bodies[this.m_bodyCount++] = b
    };
    U.prototype.AddContact = function(b) {
        this.m_contacts[this.m_contactCount++] = b
    };
    U.prototype.AddJoint = function(b) {
        this.m_joints[this.m_jointCount++] = b
    };
    Box2D.postDefs.push(function() {
        Box2D.Dynamics.b2Island.s_impulse =
            new L
    });
    s.b2TimeStep = function() {};
    s.prototype.Set = function(b) {
        this.dt = b.dt;
        this.inv_dt = b.inv_dt;
        this.positionIterations = b.positionIterations;
        this.velocityIterations = b.velocityIterations;
        this.warmStarting = b.warmStarting
    };
    x.b2World = function() {
        this.s_stack = new Vector;
        this.m_contactManager = new Q;
        this.m_contactSolver = new H;
        this.m_island = new U
    };
    x.prototype.b2World = function(b, c) {
        this.m_controllerList = this.m_jointList = this.m_contactList = this.m_bodyList = this.m_debugDraw = this.m_destructionListener = null;
        this.m_controllerCount =
            this.m_jointCount = this.m_contactCount = this.m_bodyCount = 0;
        x.m_warmStarting = !0;
        x.m_continuousPhysics = !0;
        this.m_allowSleep = c;
        this.m_gravity = b;
        this.m_inv_dt0 = 0;
        this.m_contactManager.m_world = this;
        this.m_groundBody = this.CreateBody(new G)
    };
    x.prototype.SetDestructionListener = function(b) {
        this.m_destructionListener = b
    };
    x.prototype.SetContactFilter = function(b) {
        this.m_contactManager.m_contactFilter = b
    };
    x.prototype.SetContactListener = function(b) {
        this.m_contactManager.m_contactListener = b
    };
    x.prototype.SetDebugDraw =
        function(b) {
            this.m_debugDraw = b
        };
    x.prototype.SetBroadPhase = function(b) {
        var c = this.m_contactManager.m_broadPhase;
        this.m_contactManager.m_broadPhase = b;
        for (var d = this.m_bodyList; d; d = d.m_next)
            for (var e = d.m_fixtureList; e; e = e.m_next) e.m_proxy = b.CreateProxy(c.GetFatAABB(e.m_proxy), e)
    };
    x.prototype.Validate = function() {
        this.m_contactManager.m_broadPhase.Validate()
    };
    x.prototype.GetProxyCount = function() {
        return this.m_contactManager.m_broadPhase.GetProxyCount()
    };
    x.prototype.CreateBody = function(b) {
        if (!0 == this.IsLocked()) return null;
        b = new u(b, this);
        b.m_prev = null;
        if (b.m_next = this.m_bodyList) this.m_bodyList.m_prev = b;
        this.m_bodyList = b;
        ++this.m_bodyCount;
        return b
    };
    x.prototype.DestroyBody = function(b) {
        if (!0 != this.IsLocked()) {
            for (var c = b.m_jointList; c;) {
                var d = c,
                    c = c.next;
                this.m_destructionListener && this.m_destructionListener.SayGoodbyeJoint(d.joint);
                this.DestroyJoint(d.joint)
            }
            for (c = b.m_controllerList; c;) d = c, c = c.nextController, d.controller.RemoveBody(b);
            for (c = b.m_contactList; c;) d = c, c = c.next, this.m_contactManager.Destroy(d.contact);
            b.m_contactList =
                null;
            for (c = b.m_fixtureList; c;) d = c, c = c.m_next, this.m_destructionListener && this.m_destructionListener.SayGoodbyeFixture(d), d.DestroyProxy(this.m_contactManager.m_broadPhase), d.Destroy();
            b.m_fixtureList = null;
            b.m_fixtureCount = 0;
            b.m_prev && (b.m_prev.m_next = b.m_next);
            b.m_next && (b.m_next.m_prev = b.m_prev);
            b == this.m_bodyList && (this.m_bodyList = b.m_next);
            --this.m_bodyCount
        }
    };
    x.prototype.CreateJoint = function(b) {
        var c = aa.Create(b, null);
        c.m_prev = null;
        if (c.m_next = this.m_jointList) this.m_jointList.m_prev = c;
        this.m_jointList =
            c;
        ++this.m_jointCount;
        c.m_edgeA.joint = c;
        c.m_edgeA.other = c.m_bodyB;
        c.m_edgeA.prev = null;
        if (c.m_edgeA.next = c.m_bodyA.m_jointList) c.m_bodyA.m_jointList.prev = c.m_edgeA;
        c.m_bodyA.m_jointList = c.m_edgeA;
        c.m_edgeB.joint = c;
        c.m_edgeB.other = c.m_bodyA;
        c.m_edgeB.prev = null;
        if (c.m_edgeB.next = c.m_bodyB.m_jointList) c.m_bodyB.m_jointList.prev = c.m_edgeB;
        c.m_bodyB.m_jointList = c.m_edgeB;
        var d = b.bodyA,
            e = b.bodyB;
        if (!1 == b.collideConnected)
            for (b = e.GetContactList(); b;) b.other == d && b.contact.FlagForFiltering(), b = b.next;
        return c
    };
    x.prototype.DestroyJoint = function(b) {
        var c = b.m_collideConnected;
        b.m_prev && (b.m_prev.m_next = b.m_next);
        b.m_next && (b.m_next.m_prev = b.m_prev);
        b == this.m_jointList && (this.m_jointList = b.m_next);
        var d = b.m_bodyA,
            e = b.m_bodyB;
        d.SetAwake(!0);
        e.SetAwake(!0);
        b.m_edgeA.prev && (b.m_edgeA.prev.next = b.m_edgeA.next);
        b.m_edgeA.next && (b.m_edgeA.next.prev = b.m_edgeA.prev);
        b.m_edgeA == d.m_jointList && (d.m_jointList = b.m_edgeA.next);
        b.m_edgeA.prev = null;
        b.m_edgeA.next = null;
        b.m_edgeB.prev && (b.m_edgeB.prev.next = b.m_edgeB.next);
        b.m_edgeB.next && (b.m_edgeB.next.prev = b.m_edgeB.prev);
        b.m_edgeB == e.m_jointList && (e.m_jointList = b.m_edgeB.next);
        b.m_edgeB.prev = null;
        b.m_edgeB.next = null;
        aa.Destroy(b, null);
        --this.m_jointCount;
        if (!1 == c)
            for (b = e.GetContactList(); b;) b.other == d && b.contact.FlagForFiltering(), b = b.next
    };
    x.prototype.AddController = function(b) {
        b.m_next = this.m_controllerList;
        b.m_prev = null;
        this.m_controllerList = b;
        b.m_world = this;
        this.m_controllerCount++;
        return b
    };
    x.prototype.RemoveController = function(b) {
        b.m_prev && (b.m_prev.m_next =
            b.m_next);
        b.m_next && (b.m_next.m_prev = b.m_prev);
        this.m_controllerList == b && (this.m_controllerList = b.m_next);
        this.m_controllerCount--
    };
    x.prototype.CreateController = function(b) {
        if (b.m_world != this) throw Error("Controller can only be a member of one world");
        b.m_next = this.m_controllerList;
        b.m_prev = null;
        this.m_controllerList && (this.m_controllerList.m_prev = b);
        this.m_controllerList = b;
        ++this.m_controllerCount;
        b.m_world = this;
        return b
    };
    x.prototype.DestroyController = function(b) {
        b.Clear();
        b.m_next && (b.m_next.m_prev =
            b.m_prev);
        b.m_prev && (b.m_prev.m_next = b.m_next);
        b == this.m_controllerList && (this.m_controllerList = b.m_next);
        --this.m_controllerCount
    };
    x.prototype.SetWarmStarting = function(b) {
        x.m_warmStarting = b
    };
    x.prototype.SetContinuousPhysics = function(b) {
        x.m_continuousPhysics = b
    };
    x.prototype.GetBodyCount = function() {
        return this.m_bodyCount
    };
    x.prototype.GetJointCount = function() {
        return this.m_jointCount
    };
    x.prototype.GetContactCount = function() {
        return this.m_contactCount
    };
    x.prototype.SetGravity = function(b) {
        this.m_gravity =
            b
    };
    x.prototype.GetGravity = function() {
        return this.m_gravity
    };
    x.prototype.GetGroundBody = function() {
        return this.m_groundBody
    };
    x.prototype.Step = function(b, c, d) {
        void 0 === b && (b = 0);
        void 0 === c && (c = 0);
        void 0 === d && (d = 0);
        this.m_flags & x.e_newFixture && (this.m_contactManager.FindNewContacts(), this.m_flags &= ~x.e_newFixture);
        this.m_flags |= x.e_locked;
        var e = x.s_timestep2;
        e.dt = b;
        e.velocityIterations = c;
        e.positionIterations = d;
        e.inv_dt = 0 < b ? 1 / b : 0;
        e.dtRatio = this.m_inv_dt0 * b;
        e.warmStarting = x.m_warmStarting;
        this.m_contactManager.Collide();
        0 < e.dt && this.Solve(e);
        x.m_continuousPhysics && 0 < e.dt && this.SolveTOI(e);
        0 < e.dt && (this.m_inv_dt0 = e.inv_dt);
        this.m_flags &= ~x.e_locked
    };
    x.prototype.ClearForces = function() {
        for (var b = this.m_bodyList; b; b = b.m_next) b.m_force.SetZero(), b.m_torque = 0
    };
    x.prototype.DrawDebugData = function() {
        if (null != this.m_debugDraw) {
            this.m_debugDraw.m_sprite.graphics.clear();
            var b = this.m_debugDraw.GetFlags(),
                c, d, g;
            new e;
            new e;
            new e;
            var j;
            new n;
            new n;
            new e;
            new e;
            new e;
            new e;
            var s = new f(0, 0, 0);
            if (b & I.e_shapeBit)
                for (c = this.m_bodyList; c; c =
                    c.m_next) {
                    j = c.m_xf;
                    for (d = c.GetFixtureList(); d; d = d.m_next) g = d.GetShape(), !1 == c.IsActive() ? s.Set(0.5, 0.5, 0.3) : c.GetType() == u.b2_staticBody ? s.Set(0.5, 0.9, 0.5) : c.GetType() == u.b2_kinematicBody ? s.Set(0.5, 0.5, 0.9) : !1 == c.IsAwake() ? s.Set(0.6, 0.6, 0.6) : s.Set(0.9, 0.7, 0.7), this.DrawShape(g, j, s)
                }
            if (b & I.e_jointBit)
                for (c = this.m_jointList; c; c = c.m_next) this.DrawJoint(c);
            if (b & I.e_controllerBit)
                for (c = this.m_controllerList; c; c = c.m_next) c.Draw(this.m_debugDraw);
            if (b & I.e_pairBit) {
                s.Set(0.3, 0.9, 0.9);
                for (c = this.m_contactManager.m_contactList; c; c =
                    c.GetNext()) g = c.GetFixtureA(), d = c.GetFixtureB(), g = g.GetAABB().GetCenter(), d = d.GetAABB().GetCenter(), this.m_debugDraw.DrawSegment(g, d, s)
            }
            if (b & I.e_aabbBit) {
                g = this.m_contactManager.m_broadPhase;
                j = [new e, new e, new e, new e];
                for (c = this.m_bodyList; c; c = c.GetNext())
                    if (!1 != c.IsActive())
                        for (d = c.GetFixtureList(); d; d = d.GetNext()) {
                            var l = g.GetFatAABB(d.m_proxy);
                            j[0].Set(l.lowerBound.x, l.lowerBound.y);
                            j[1].Set(l.upperBound.x, l.lowerBound.y);
                            j[2].Set(l.upperBound.x, l.upperBound.y);
                            j[3].Set(l.lowerBound.x, l.upperBound.y);
                            this.m_debugDraw.DrawPolygon(j, 4, s)
                        }
            }
            if (b & I.e_centerOfMassBit)
                for (c = this.m_bodyList; c; c = c.m_next) j = x.s_xf, j.R = c.m_xf.R, j.position = c.GetWorldCenter(), this.m_debugDraw.DrawTransform(j)
        }
    };
    x.prototype.QueryAABB = function(b, c) {
        var d = this.m_contactManager.m_broadPhase;
        d.Query(function(c) {
            return b(d.GetUserData(c))
        }, c)
    };
    x.prototype.QueryShape = function(b, c, e) {
        void 0 === e && (e = null);
        null == e && (e = new d, e.SetIdentity());
        var f = this.m_contactManager.m_broadPhase,
            g = new n;
        c.ComputeAABB(g, e);
        f.Query(function(d) {
            d = f.GetUserData(d) instanceof
            P ? f.GetUserData(d) : null;
            return D.TestOverlap(c, e, d.GetShape(), d.GetBody().GetTransform()) ? b(d) : !0
        }, g)
    };
    x.prototype.QueryPoint = function(b, c) {
        var d = this.m_contactManager.m_broadPhase,
            e = new n;
        e.lowerBound.Set(c.x - j.b2_linearSlop, c.y - j.b2_linearSlop);
        e.upperBound.Set(c.x + j.b2_linearSlop, c.y + j.b2_linearSlop);
        d.Query(function(e) {
            e = d.GetUserData(e) instanceof P ? d.GetUserData(e) : null;
            return e.TestPoint(c) ? b(e) : !0
        }, e)
    };
    x.prototype.RayCast = function(b, c, d) {
        var f = this.m_contactManager.m_broadPhase,
            g = new y,
            j = new r(c,
                d);
        f.RayCast(function(j, s) {
            var x = f.GetUserData(s),
                x = x instanceof P ? x : null;
            if (x.RayCast(g, j)) {
                var l = g.fraction,
                    C = new e((1 - l) * c.x + l * d.x, (1 - l) * c.y + l * d.y);
                return b(x, C, g.normal, l)
            }
            return j.maxFraction
        }, j)
    };
    x.prototype.RayCastOne = function(b, c) {
        var d;
        this.RayCast(function(b, c, e, f) {
            void 0 === f && (f = 0);
            d = b;
            return f
        }, b, c);
        return d
    };
    x.prototype.RayCastAll = function(b, c) {
        var d = new Vector;
        this.RayCast(function(b) {
            d[d.length] = b;
            return 1
        }, b, c);
        return d
    };
    x.prototype.GetBodyList = function() {
        return this.m_bodyList
    };
    x.prototype.GetJointList =
        function() {
            return this.m_jointList
        };
    x.prototype.GetContactList = function() {
        return this.m_contactList
    };
    x.prototype.IsLocked = function() {
        return 0 < (this.m_flags & x.e_locked)
    };
    x.prototype.Solve = function(b) {
        for (var c, d = this.m_controllerList; d; d = d.m_next) d.Step(b);
        d = this.m_island;
        d.Initialize(this.m_bodyCount, this.m_contactCount, this.m_jointCount, null, this.m_contactManager.m_contactListener, this.m_contactSolver);
        for (c = this.m_bodyList; c; c = c.m_next) c.m_flags &= ~u.e_islandFlag;
        for (var e = this.m_contactList; e; e =
            e.m_next) e.m_flags &= ~F.e_islandFlag;
        for (e = this.m_jointList; e; e = e.m_next) e.m_islandFlag = !1;
        parseInt(this.m_bodyCount);
        for (var e = this.s_stack, f = this.m_bodyList; f; f = f.m_next)
            if (!(f.m_flags & u.e_islandFlag) && !(!1 == f.IsAwake() || !1 == f.IsActive()) && f.GetType() != u.b2_staticBody) {
                d.Clear();
                var g = 0;
                e[g++] = f;
                for (f.m_flags |= u.e_islandFlag; 0 < g;)
                    if (c = e[--g], d.AddBody(c), !1 == c.IsAwake() && c.SetAwake(!0), c.GetType() != u.b2_staticBody) {
                        for (var j, s = c.m_contactList; s; s = s.next)
                            if (!(s.contact.m_flags & F.e_islandFlag) && !(!0 ==
                                    s.contact.IsSensor() || !1 == s.contact.IsEnabled() || !1 == s.contact.IsTouching())) d.AddContact(s.contact), s.contact.m_flags |= F.e_islandFlag, j = s.other, j.m_flags & u.e_islandFlag || (e[g++] = j, j.m_flags |= u.e_islandFlag);
                        for (c = c.m_jointList; c; c = c.next) !0 != c.joint.m_islandFlag && (j = c.other, !1 != j.IsActive() && (d.AddJoint(c.joint), c.joint.m_islandFlag = !0, j.m_flags & u.e_islandFlag || (e[g++] = j, j.m_flags |= u.e_islandFlag)))
                    }
                d.Solve(b, this.m_gravity, this.m_allowSleep);
                for (g = 0; g < d.m_bodyCount; ++g) c = d.m_bodies[g], c.GetType() ==
                    u.b2_staticBody && (c.m_flags &= ~u.e_islandFlag)
            }
        for (g = 0; g < e.length && e[g]; ++g) e[g] = null;
        for (c = this.m_bodyList; c; c = c.m_next) !1 == c.IsAwake() || !1 == c.IsActive() || c.GetType() != u.b2_staticBody && c.SynchronizeFixtures();
        this.m_contactManager.FindNewContacts()
    };
    x.prototype.SolveTOI = function(b) {
        var c, d, e, f = this.m_island;
        f.Initialize(this.m_bodyCount, j.b2_maxTOIContactsPerIsland, j.b2_maxTOIJointsPerIsland, null, this.m_contactManager.m_contactListener, this.m_contactSolver);
        var g = x.s_queue;
        for (c = this.m_bodyList; c; c =
            c.m_next) c.m_flags &= ~u.e_islandFlag, c.m_sweep.t0 = 0;
        for (e = this.m_contactList; e; e = e.m_next) e.m_flags &= ~(F.e_toiFlag | F.e_islandFlag);
        for (e = this.m_jointList; e; e = e.m_next) e.m_islandFlag = !1;
        for (;;) {
            var s = null,
                l = 1;
            for (e = this.m_contactList; e; e = e.m_next)
                if (!(!0 == e.IsSensor() || !1 == e.IsEnabled() || !1 == e.IsContinuous())) {
                    if (e.m_flags & F.e_toiFlag) c = e.m_toi;
                    else {
                        c = e.m_fixtureA;
                        d = e.m_fixtureB;
                        c = c.m_body;
                        d = d.m_body;
                        if ((c.GetType() != u.b2_dynamicBody || !1 == c.IsAwake()) && (d.GetType() != u.b2_dynamicBody || !1 == d.IsAwake())) continue;
                        var C = c.m_sweep.t0;
                        c.m_sweep.t0 < d.m_sweep.t0 ? (C = d.m_sweep.t0, c.m_sweep.Advance(C)) : d.m_sweep.t0 < c.m_sweep.t0 && (C = c.m_sweep.t0, d.m_sweep.Advance(C));
                        c = e.ComputeTOI(c.m_sweep, d.m_sweep);
                        j.b2Assert(0 <= c && 1 >= c);
                        0 < c && 1 > c && (c = (1 - c) * C + c, 1 < c && (c = 1));
                        e.m_toi = c;
                        e.m_flags |= F.e_toiFlag
                    }
                    Number.MIN_VALUE < c && c < l && (s = e, l = c)
                }
            if (null == s || 1 - 100 * Number.MIN_VALUE < l) break;
            c = s.m_fixtureA;
            d = s.m_fixtureB;
            c = c.m_body;
            d = d.m_body;
            x.s_backupA.Set(c.m_sweep);
            x.s_backupB.Set(d.m_sweep);
            c.Advance(l);
            d.Advance(l);
            s.Update(this.m_contactManager.m_contactListener);
            s.m_flags &= ~F.e_toiFlag;
            if (!0 == s.IsSensor() || !1 == s.IsEnabled()) c.m_sweep.Set(x.s_backupA), d.m_sweep.Set(x.s_backupB), c.SynchronizeTransform(), d.SynchronizeTransform();
            else if (!1 != s.IsTouching()) {
                c.GetType() != u.b2_dynamicBody && (c = d);
                f.Clear();
                s = e = 0;
                g[e + s++] = c;
                for (c.m_flags |= u.e_islandFlag; 0 < s;)
                    if (c = g[e++], --s, f.AddBody(c), !1 == c.IsAwake() && c.SetAwake(!0), c.GetType() == u.b2_dynamicBody) {
                        for (d = c.m_contactList; d && f.m_contactCount != f.m_contactCapacity; d = d.next)
                            if (!(d.contact.m_flags & F.e_islandFlag) && !(!0 ==
                                    d.contact.IsSensor() || !1 == d.contact.IsEnabled() || !1 == d.contact.IsTouching())) f.AddContact(d.contact), d.contact.m_flags |= F.e_islandFlag, C = d.other, C.m_flags & u.e_islandFlag || (C.GetType() != u.b2_staticBody && (C.Advance(l), C.SetAwake(!0)), g[e + s] = C, ++s, C.m_flags |= u.e_islandFlag);
                        for (c = c.m_jointList; c; c = c.next) f.m_jointCount != f.m_jointCapacity && !0 != c.joint.m_islandFlag && (C = c.other, !1 != C.IsActive() && (f.AddJoint(c.joint), c.joint.m_islandFlag = !0, C.m_flags & u.e_islandFlag || (C.GetType() != u.b2_staticBody && (C.Advance(l),
                            C.SetAwake(!0)), g[e + s] = C, ++s, C.m_flags |= u.e_islandFlag)))
                    }
                e = x.s_timestep;
                e.warmStarting = !1;
                e.dt = (1 - l) * b.dt;
                e.inv_dt = 1 / e.dt;
                e.dtRatio = 0;
                e.velocityIterations = b.velocityIterations;
                e.positionIterations = b.positionIterations;
                f.SolveTOI(e);
                for (l = l = 0; l < f.m_bodyCount; ++l)
                    if (c = f.m_bodies[l], c.m_flags &= ~u.e_islandFlag, !1 != c.IsAwake() && c.GetType() == u.b2_dynamicBody) {
                        c.SynchronizeFixtures();
                        for (d = c.m_contactList; d; d = d.next) d.contact.m_flags &= ~F.e_toiFlag
                    }
                for (l = 0; l < f.m_contactCount; ++l) e = f.m_contacts[l], e.m_flags &=
                    ~(F.e_toiFlag | F.e_islandFlag);
                for (l = 0; l < f.m_jointCount; ++l) e = f.m_joints[l], e.m_islandFlag = !1;
                this.m_contactManager.FindNewContacts()
            }
        }
    };
    x.prototype.DrawJoint = function(b) {
        var c = b.GetBodyA(),
            d = b.GetBodyB(),
            e = c.m_xf.position,
            f = d.m_xf.position,
            g = b.GetAnchorA(),
            j = b.GetAnchorB(),
            s = x.s_jointColor;
        switch (b.m_type) {
            case aa.e_distanceJoint:
                this.m_debugDraw.DrawSegment(g, j, s);
                break;
            case aa.e_pulleyJoint:
                c = b instanceof R ? b : null;
                b = c.GetGroundAnchorA();
                c = c.GetGroundAnchorB();
                this.m_debugDraw.DrawSegment(b, g, s);
                this.m_debugDraw.DrawSegment(c, j, s);
                this.m_debugDraw.DrawSegment(b, c, s);
                break;
            case aa.e_mouseJoint:
                this.m_debugDraw.DrawSegment(g, j, s);
                break;
            default:
                c != this.m_groundBody && this.m_debugDraw.DrawSegment(e, g, s), this.m_debugDraw.DrawSegment(g, j, s), d != this.m_groundBody && this.m_debugDraw.DrawSegment(f, j, s)
        }
    };
    x.prototype.DrawShape = function(c, d, e) {
        switch (c.m_type) {
            case D.e_circleShape:
                var f = c instanceof z ? c : null;
                this.m_debugDraw.DrawSolidCircle(b.MulX(d, f.m_p), f.m_radius, d.R.col1, e);
                break;
            case D.e_polygonShape:
                f =
                    c instanceof E ? c : null;
                c = parseInt(f.GetVertexCount());
                for (var g = f.GetVertices(), j = new Vector(c), f = 0; f < c; ++f) j[f] = b.MulX(d, g[f]);
                this.m_debugDraw.DrawSolidPolygon(j, c, e);
                break;
            case D.e_edgeShape:
                f = c instanceof A ? c : null, this.m_debugDraw.DrawSegment(b.MulX(d, f.GetVertex1()), b.MulX(d, f.GetVertex2()), e)
        }
    };
    Box2D.postDefs.push(function() {
        Box2D.Dynamics.b2World.s_timestep2 = new s;
        Box2D.Dynamics.b2World.s_xf = new d;
        Box2D.Dynamics.b2World.s_backupA = new c;
        Box2D.Dynamics.b2World.s_backupB = new c;
        Box2D.Dynamics.b2World.s_timestep =
            new s;
        Box2D.Dynamics.b2World.s_queue = new Vector;
        Box2D.Dynamics.b2World.s_jointColor = new f(0.5, 0.8, 0.8);
        Box2D.Dynamics.b2World.e_newFixture = 1;
        Box2D.Dynamics.b2World.e_locked = 2
    })
})();
(function() {
    var b = Box2D.Collision.Shapes.b2CircleShape,
        c = Box2D.Collision.Shapes.b2EdgeShape,
        d = Box2D.Collision.Shapes.b2PolygonShape,
        e = Box2D.Collision.Shapes.b2Shape,
        f = Box2D.Dynamics.Contacts.b2CircleContact,
        j = Box2D.Dynamics.Contacts.b2Contact,
        n = Box2D.Dynamics.Contacts.b2ContactConstraint,
        l = Box2D.Dynamics.Contacts.b2ContactConstraintPoint,
        g = Box2D.Dynamics.Contacts.b2ContactEdge,
        r = Box2D.Dynamics.Contacts.b2ContactFactory,
        y = Box2D.Dynamics.Contacts.b2ContactRegister,
        z = Box2D.Dynamics.Contacts.b2ContactResult,
        A = Box2D.Dynamics.Contacts.b2ContactSolver,
        B = Box2D.Dynamics.Contacts.b2EdgeAndCircleContact,
        E = Box2D.Dynamics.Contacts.b2NullContact,
        D = Box2D.Dynamics.Contacts.b2PolyAndCircleContact,
        u = Box2D.Dynamics.Contacts.b2PolyAndEdgeContact,
        G = Box2D.Dynamics.Contacts.b2PolygonContact,
        K = Box2D.Dynamics.Contacts.b2PositionSolverManifold,
        L = Box2D.Dynamics.b2Body,
        N = Box2D.Dynamics.b2TimeStep,
        Q = Box2D.Common.b2Settings,
        I = Box2D.Common.Math.b2Mat22,
        fa = Box2D.Common.Math.b2Math,
        O = Box2D.Common.Math.b2Vec2,
        P = Box2D.Collision.b2Collision,
        ba = Box2D.Collision.b2ContactID,
        U = Box2D.Collision.b2Manifold,
        s = Box2D.Collision.b2TimeOfImpact,
        x = Box2D.Collision.b2TOIInput,
        F = Box2D.Collision.b2WorldManifold;
    Box2D.inherit(f, Box2D.Dynamics.Contacts.b2Contact);
    f.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype;
    f.b2CircleContact = function() {
        Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments)
    };
    f.Create = function() {
        return new f
    };
    f.Destroy = function() {};
    f.prototype.Reset = function(b, c) {
        this.__super.Reset.call(this, b, c)
    };
    f.prototype.Evaluate =
        function() {
            var c = this.m_fixtureA.GetBody(),
                d = this.m_fixtureB.GetBody();
            P.CollideCircles(this.m_manifold, this.m_fixtureA.GetShape() instanceof b ? this.m_fixtureA.GetShape() : null, c.m_xf, this.m_fixtureB.GetShape() instanceof b ? this.m_fixtureB.GetShape() : null, d.m_xf)
        };
    j.b2Contact = function() {
        this.m_nodeA = new g;
        this.m_nodeB = new g;
        this.m_manifold = new U;
        this.m_oldManifold = new U
    };
    j.prototype.GetManifold = function() {
        return this.m_manifold
    };
    j.prototype.GetWorldManifold = function(b) {
        var c = this.m_fixtureA.GetBody(),
            d = this.m_fixtureB.GetBody(),
            e = this.m_fixtureA.GetShape(),
            f = this.m_fixtureB.GetShape();
        b.Initialize(this.m_manifold, c.GetTransform(), e.m_radius, d.GetTransform(), f.m_radius)
    };
    j.prototype.IsTouching = function() {
        return (this.m_flags & j.e_touchingFlag) == j.e_touchingFlag
    };
    j.prototype.IsContinuous = function() {
        return (this.m_flags & j.e_continuousFlag) == j.e_continuousFlag
    };
    j.prototype.SetSensor = function(b) {
        this.m_flags = b ? this.m_flags | j.e_sensorFlag : this.m_flags & ~j.e_sensorFlag
    };
    j.prototype.IsSensor = function() {
        return (this.m_flags &
            j.e_sensorFlag) == j.e_sensorFlag
    };
    j.prototype.SetEnabled = function(b) {
        this.m_flags = b ? this.m_flags | j.e_enabledFlag : this.m_flags & ~j.e_enabledFlag
    };
    j.prototype.IsEnabled = function() {
        return (this.m_flags & j.e_enabledFlag) == j.e_enabledFlag
    };
    j.prototype.GetNext = function() {
        return this.m_next
    };
    j.prototype.GetFixtureA = function() {
        return this.m_fixtureA
    };
    j.prototype.GetFixtureB = function() {
        return this.m_fixtureB
    };
    j.prototype.FlagForFiltering = function() {
        this.m_flags |= j.e_filterFlag
    };
    j.prototype.b2Contact = function() {};
    j.prototype.Reset = function(b, c) {
        void 0 === b && (b = null);
        void 0 === c && (c = null);
        this.m_flags = j.e_enabledFlag;
        if (!b || !c) this.m_fixtureB = this.m_fixtureA = null;
        else {
            if (b.IsSensor() || c.IsSensor()) this.m_flags |= j.e_sensorFlag;
            var d = b.GetBody(),
                e = c.GetBody();
            if (d.GetType() != L.b2_dynamicBody || d.IsBullet() || e.GetType() != L.b2_dynamicBody || e.IsBullet()) this.m_flags |= j.e_continuousFlag;
            this.m_fixtureA = b;
            this.m_fixtureB = c;
            this.m_manifold.m_pointCount = 0;
            this.m_next = this.m_prev = null;
            this.m_nodeA.contact = null;
            this.m_nodeA.prev =
                null;
            this.m_nodeA.next = null;
            this.m_nodeA.other = null;
            this.m_nodeB.contact = null;
            this.m_nodeB.prev = null;
            this.m_nodeB.next = null;
            this.m_nodeB.other = null
        }
    };
    j.prototype.Update = function(b) {
        var c = this.m_oldManifold;
        this.m_oldManifold = this.m_manifold;
        this.m_manifold = c;
        this.m_flags |= j.e_enabledFlag;
        var d = !1,
            c = (this.m_flags & j.e_touchingFlag) == j.e_touchingFlag,
            f = this.m_fixtureA.m_body,
            g = this.m_fixtureB.m_body,
            s = this.m_fixtureA.m_aabb.TestOverlap(this.m_fixtureB.m_aabb);
        if (this.m_flags & j.e_sensorFlag) s && (d = this.m_fixtureA.GetShape(),
            s = this.m_fixtureB.GetShape(), f = f.GetTransform(), g = g.GetTransform(), d = e.TestOverlap(d, f, s, g)), this.m_manifold.m_pointCount = 0;
        else {
            this.m_flags = f.GetType() != L.b2_dynamicBody || f.IsBullet() || g.GetType() != L.b2_dynamicBody || g.IsBullet() ? this.m_flags | j.e_continuousFlag : this.m_flags & ~j.e_continuousFlag;
            if (s) {
                this.Evaluate();
                d = 0 < this.m_manifold.m_pointCount;
                for (s = 0; s < this.m_manifold.m_pointCount; ++s) {
                    var x = this.m_manifold.m_points[s];
                    x.m_normalImpulse = 0;
                    x.m_tangentImpulse = 0;
                    for (var l = x.m_id, n = 0; n < this.m_oldManifold.m_pointCount; ++n) {
                        var F =
                            this.m_oldManifold.m_points[n];
                        if (F.m_id.key == l.key) {
                            x.m_normalImpulse = F.m_normalImpulse;
                            x.m_tangentImpulse = F.m_tangentImpulse;
                            break
                        }
                    }
                }
            } else this.m_manifold.m_pointCount = 0;
            d != c && (f.SetAwake(!0), g.SetAwake(!0))
        }
        this.m_flags = d ? this.m_flags | j.e_touchingFlag : this.m_flags & ~j.e_touchingFlag;
        !1 == c && !0 == d && b.BeginContact(this);
        !0 == c && !1 == d && b.EndContact(this);
        0 == (this.m_flags & j.e_sensorFlag) && b.PreSolve(this, this.m_oldManifold)
    };
    j.prototype.Evaluate = function() {};
    j.prototype.ComputeTOI = function(b, c) {
        j.s_input.proxyA.Set(this.m_fixtureA.GetShape());
        j.s_input.proxyB.Set(this.m_fixtureB.GetShape());
        j.s_input.sweepA = b;
        j.s_input.sweepB = c;
        j.s_input.tolerance = Q.b2_linearSlop;
        return s.TimeOfImpact(j.s_input)
    };
    Box2D.postDefs.push(function() {
        Box2D.Dynamics.Contacts.b2Contact.e_sensorFlag = 1;
        Box2D.Dynamics.Contacts.b2Contact.e_continuousFlag = 2;
        Box2D.Dynamics.Contacts.b2Contact.e_islandFlag = 4;
        Box2D.Dynamics.Contacts.b2Contact.e_toiFlag = 8;
        Box2D.Dynamics.Contacts.b2Contact.e_touchingFlag = 16;
        Box2D.Dynamics.Contacts.b2Contact.e_enabledFlag = 32;
        Box2D.Dynamics.Contacts.b2Contact.e_filterFlag =
            64;
        Box2D.Dynamics.Contacts.b2Contact.s_input = new x
    });
    n.b2ContactConstraint = function() {
        this.localPlaneNormal = new O;
        this.localPoint = new O;
        this.normal = new O;
        this.normalMass = new I;
        this.K = new I
    };
    n.prototype.b2ContactConstraint = function() {
        this.points = new Vector(Q.b2_maxManifoldPoints);
        for (var b = 0; b < Q.b2_maxManifoldPoints; b++) this.points[b] = new l
    };
    l.b2ContactConstraintPoint = function() {
        this.localPoint = new O;
        this.rA = new O;
        this.rB = new O
    };
    g.b2ContactEdge = function() {};
    r.b2ContactFactory = function() {};
    r.prototype.b2ContactFactory =
        function(b) {
            this.m_allocator = b;
            this.InitializeRegisters()
        };
    r.prototype.AddType = function(b, c, d, e) {
        void 0 === d && (d = 0);
        void 0 === e && (e = 0);
        this.m_registers[d][e].createFcn = b;
        this.m_registers[d][e].destroyFcn = c;
        this.m_registers[d][e].primary = !0;
        d != e && (this.m_registers[e][d].createFcn = b, this.m_registers[e][d].destroyFcn = c, this.m_registers[e][d].primary = !1)
    };
    r.prototype.InitializeRegisters = function() {
        this.m_registers = new Vector(e.e_shapeTypeCount);
        for (var b = 0; b < e.e_shapeTypeCount; b++) {
            this.m_registers[b] =
                new Vector(e.e_shapeTypeCount);
            for (var c = 0; c < e.e_shapeTypeCount; c++) this.m_registers[b][c] = new y
        }
        this.AddType(f.Create, f.Destroy, e.e_circleShape, e.e_circleShape);
        this.AddType(D.Create, D.Destroy, e.e_polygonShape, e.e_circleShape);
        this.AddType(G.Create, G.Destroy, e.e_polygonShape, e.e_polygonShape);
        this.AddType(B.Create, B.Destroy, e.e_edgeShape, e.e_circleShape);
        this.AddType(u.Create, u.Destroy, e.e_polygonShape, e.e_edgeShape)
    };
    r.prototype.Create = function(b, c) {
        var d = parseInt(b.GetType()),
            e = parseInt(c.GetType()),
            d = this.m_registers[d][e];
        if (d.pool) return e = d.pool, d.pool = e.m_next, d.poolCount--, e.Reset(b, c), e;
        e = d.createFcn;
        return null != e ? (d.primary ? (e = e(this.m_allocator), e.Reset(b, c)) : (e = e(this.m_allocator), e.Reset(c, b)), e) : null
    };
    r.prototype.Destroy = function(b) {
        0 < b.m_manifold.m_pointCount && (b.m_fixtureA.m_body.SetAwake(!0), b.m_fixtureB.m_body.SetAwake(!0));
        var c = parseInt(b.m_fixtureA.GetType()),
            d = parseInt(b.m_fixtureB.GetType()),
            c = this.m_registers[c][d];
        c.poolCount++;
        b.m_next = c.pool;
        c.pool = b;
        c = c.destroyFcn;
        c(b, this.m_allocator)
    };
    y.b2ContactRegister = function() {};
    z.b2ContactResult = function() {
        this.position = new O;
        this.normal = new O;
        this.id = new ba
    };
    A.b2ContactSolver = function() {
        this.m_step = new N;
        this.m_constraints = new Vector
    };
    A.prototype.b2ContactSolver = function() {};
    A.prototype.Initialize = function(b, c, d, e) {
        void 0 === d && (d = 0);
        var f;
        this.m_step.Set(b);
        this.m_allocator = e;
        for (this.m_constraintCount = d; this.m_constraints.length < this.m_constraintCount;) this.m_constraints[this.m_constraints.length] = new n;
        for (b = 0; b <
            d; ++b) {
            f = c[b];
            e = f.m_fixtureA;
            var g = f.m_fixtureB,
                j = e.m_shape.m_radius,
                s = g.m_shape.m_radius,
                x = e.m_body,
                l = g.m_body,
                F = f.GetManifold(),
                r = Q.b2MixFriction(e.GetFriction(), g.GetFriction()),
                u = Q.b2MixRestitution(e.GetRestitution(), g.GetRestitution()),
                y = x.m_linearVelocity.x,
                z = x.m_linearVelocity.y,
                B = l.m_linearVelocity.x,
                D = l.m_linearVelocity.y,
                E = x.m_angularVelocity,
                K = l.m_angularVelocity;
            Q.b2Assert(0 < F.m_pointCount);
            A.s_worldManifold.Initialize(F, x.m_xf, j, l.m_xf, s);
            g = A.s_worldManifold.m_normal.x;
            f = A.s_worldManifold.m_normal.y;
            e = this.m_constraints[b];
            e.bodyA = x;
            e.bodyB = l;
            e.manifold = F;
            e.normal.x = g;
            e.normal.y = f;
            e.pointCount = F.m_pointCount;
            e.friction = r;
            e.restitution = u;
            e.localPlaneNormal.x = F.m_localPlaneNormal.x;
            e.localPlaneNormal.y = F.m_localPlaneNormal.y;
            e.localPoint.x = F.m_localPoint.x;
            e.localPoint.y = F.m_localPoint.y;
            e.radius = j + s;
            e.type = F.m_type;
            for (j = 0; j < e.pointCount; ++j) {
                r = F.m_points[j];
                s = e.points[j];
                s.normalImpulse = r.m_normalImpulse;
                s.tangentImpulse = r.m_tangentImpulse;
                s.localPoint.SetV(r.m_localPoint);
                var r = s.rA.x = A.s_worldManifold.m_points[j].x -
                    x.m_sweep.c.x,
                    u = s.rA.y = A.s_worldManifold.m_points[j].y - x.m_sweep.c.y,
                    G = s.rB.x = A.s_worldManifold.m_points[j].x - l.m_sweep.c.x,
                    L = s.rB.y = A.s_worldManifold.m_points[j].y - l.m_sweep.c.y,
                    I = r * f - u * g,
                    N = G * f - L * g,
                    I = I * I,
                    N = N * N;
                s.normalMass = 1 / (x.m_invMass + l.m_invMass + x.m_invI * I + l.m_invI * N);
                var O = x.m_mass * x.m_invMass + l.m_mass * l.m_invMass,
                    O = O + (x.m_mass * x.m_invI * I + l.m_mass * l.m_invI * N);
                s.equalizedMass = 1 / O;
                N = f;
                O = -g;
                I = r * O - u * N;
                N = G * O - L * N;
                I *= I;
                N *= N;
                s.tangentMass = 1 / (x.m_invMass + l.m_invMass + x.m_invI * I + l.m_invI * N);
                s.velocityBias =
                    0;
                r = e.normal.x * (B + -K * L - y - -E * u) + e.normal.y * (D + K * G - z - E * r);
                r < -Q.b2_velocityThreshold && (s.velocityBias += -e.restitution * r)
            }
            2 == e.pointCount && (D = e.points[0], B = e.points[1], F = x.m_invMass, x = x.m_invI, y = l.m_invMass, l = l.m_invI, z = D.rA.x * f - D.rA.y * g, D = D.rB.x * f - D.rB.y * g, E = B.rA.x * f - B.rA.y * g, B = B.rB.x * f - B.rB.y * g, g = F + y + x * z * z + l * D * D, f = F + y + x * E * E + l * B * B, l = F + y + x * z * E + l * D * B, g * g < 100 * (g * f - l * l) ? (e.K.col1.Set(g, l), e.K.col2.Set(l, f), e.K.GetInverse(e.normalMass)) : e.pointCount = 1)
        }
    };
    A.prototype.InitVelocityConstraints = function(b) {
        for (var c =
                0; c < this.m_constraintCount; ++c) {
            var d = this.m_constraints[c],
                e = d.bodyA,
                f = d.bodyB,
                g = e.m_invMass,
                s = e.m_invI,
                j = f.m_invMass,
                x = f.m_invI,
                l = d.normal.x,
                F = d.normal.y,
                n = F,
                r = -l,
                u = 0,
                A = 0;
            if (b.warmStarting) {
                A = d.pointCount;
                for (u = 0; u < A; ++u) {
                    var y = d.points[u];
                    y.normalImpulse *= b.dtRatio;
                    y.tangentImpulse *= b.dtRatio;
                    var z = y.normalImpulse * l + y.tangentImpulse * n,
                        B = y.normalImpulse * F + y.tangentImpulse * r;
                    e.m_angularVelocity -= s * (y.rA.x * B - y.rA.y * z);
                    e.m_linearVelocity.x -= g * z;
                    e.m_linearVelocity.y -= g * B;
                    f.m_angularVelocity += x * (y.rB.x *
                        B - y.rB.y * z);
                    f.m_linearVelocity.x += j * z;
                    f.m_linearVelocity.y += j * B
                }
            } else {
                A = d.pointCount;
                for (u = 0; u < A; ++u) e = d.points[u], e.normalImpulse = 0, e.tangentImpulse = 0
            }
        }
    };
    A.prototype.SolveVelocityConstraints = function() {
        for (var b = 0, c, d = 0, e = 0, f = 0, g = 0, j = 0, s = 0, x = 0, l, F = 0; F < this.m_constraintCount; ++F) {
            var f = this.m_constraints[F],
                n = f.bodyA,
                r = f.bodyB,
                u = n.m_angularVelocity,
                y = r.m_angularVelocity,
                A = n.m_linearVelocity,
                z = r.m_linearVelocity,
                B = n.m_invMass,
                D = n.m_invI,
                E = r.m_invMass,
                K = r.m_invI,
                s = f.normal.x,
                G = x = f.normal.y;
            l = -s;
            j = f.friction;
            for (b = 0; b < f.pointCount; b++) c = f.points[b], d = z.x - y * c.rB.y - A.x + u * c.rA.y, e = z.y + y * c.rB.x - A.y - u * c.rA.x, d = d * G + e * l, d = c.tangentMass * -d, e = j * c.normalImpulse, e = fa.Clamp(c.tangentImpulse + d, -e, e), d = e - c.tangentImpulse, g = d * G, d *= l, A.x -= B * g, A.y -= B * d, u -= D * (c.rA.x * d - c.rA.y * g), z.x += E * g, z.y += E * d, y += K * (c.rB.x * d - c.rB.y * g), c.tangentImpulse = e;
            parseInt(f.pointCount);
            if (1 == f.pointCount) c = f.points[0], d = z.x + -y * c.rB.y - A.x - -u * c.rA.y, e = z.y + y * c.rB.x - A.y - u * c.rA.x, f = d * s + e * x, d = -c.normalMass * (f - c.velocityBias), e = c.normalImpulse + d, e =
                0 < e ? e : 0, d = e - c.normalImpulse, g = d * s, d *= x, A.x -= B * g, A.y -= B * d, u -= D * (c.rA.x * d - c.rA.y * g), z.x += E * g, z.y += E * d, y += K * (c.rB.x * d - c.rB.y * g), c.normalImpulse = e;
            else {
                c = f.points[0];
                var b = f.points[1],
                    d = c.normalImpulse,
                    j = b.normalImpulse,
                    L = (z.x - y * c.rB.y - A.x + u * c.rA.y) * s + (z.y + y * c.rB.x - A.y - u * c.rA.x) * x,
                    I = (z.x - y * b.rB.y - A.x + u * b.rA.y) * s + (z.y + y * b.rB.x - A.y - u * b.rA.x) * x,
                    e = L - c.velocityBias,
                    g = I - b.velocityBias;
                l = f.K;
                e -= l.col1.x * d + l.col2.x * j;
                for (g -= l.col1.y * d + l.col2.y * j;;) {
                    l = f.normalMass;
                    G = -(l.col1.x * e + l.col2.x * g);
                    l = -(l.col1.y * e + l.col2.y *
                        g);
                    if (0 <= G && 0 <= l) {
                        d = G - d;
                        j = l - j;
                        f = d * s;
                        d *= x;
                        s *= j;
                        x *= j;
                        A.x -= B * (f + s);
                        A.y -= B * (d + x);
                        u -= D * (c.rA.x * d - c.rA.y * f + b.rA.x * x - b.rA.y * s);
                        z.x += E * (f + s);
                        z.y += E * (d + x);
                        y += K * (c.rB.x * d - c.rB.y * f + b.rB.x * x - b.rB.y * s);
                        c.normalImpulse = G;
                        b.normalImpulse = l;
                        break
                    }
                    G = -c.normalMass * e;
                    l = 0;
                    I = f.K.col1.y * G + g;
                    if (0 <= G && 0 <= I) {
                        d = G - d;
                        j = l - j;
                        f = d * s;
                        d *= x;
                        s *= j;
                        x *= j;
                        A.x -= B * (f + s);
                        A.y -= B * (d + x);
                        u -= D * (c.rA.x * d - c.rA.y * f + b.rA.x * x - b.rA.y * s);
                        z.x += E * (f + s);
                        z.y += E * (d + x);
                        y += K * (c.rB.x * d - c.rB.y * f + b.rB.x * x - b.rB.y * s);
                        c.normalImpulse = G;
                        b.normalImpulse = l;
                        break
                    }
                    G = 0;
                    l = -b.normalMass * g;
                    L = f.K.col2.x * l + e;
                    if (0 <= l && 0 <= L) {
                        d = G - d;
                        j = l - j;
                        f = d * s;
                        d *= x;
                        s *= j;
                        x *= j;
                        A.x -= B * (f + s);
                        A.y -= B * (d + x);
                        u -= D * (c.rA.x * d - c.rA.y * f + b.rA.x * x - b.rA.y * s);
                        z.x += E * (f + s);
                        z.y += E * (d + x);
                        y += K * (c.rB.x * d - c.rB.y * f + b.rB.x * x - b.rB.y * s);
                        c.normalImpulse = G;
                        b.normalImpulse = l;
                        break
                    }
                    l = G = 0;
                    L = e;
                    I = g;
                    if (0 <= L && 0 <= I) {
                        d = G - d;
                        j = l - j;
                        f = d * s;
                        d *= x;
                        s *= j;
                        x *= j;
                        A.x -= B * (f + s);
                        A.y -= B * (d + x);
                        u -= D * (c.rA.x * d - c.rA.y * f + b.rA.x * x - b.rA.y * s);
                        z.x += E * (f + s);
                        z.y += E * (d + x);
                        y += K * (c.rB.x * d - c.rB.y * f + b.rB.x * x - b.rB.y * s);
                        c.normalImpulse = G;
                        b.normalImpulse = l;
                        break
                    }
                    break
                }
            }
            n.m_angularVelocity =
                u;
            r.m_angularVelocity = y
        }
    };
    A.prototype.FinalizeVelocityConstraints = function() {
        for (var b = 0; b < this.m_constraintCount; ++b)
            for (var c = this.m_constraints[b], d = c.manifold, e = 0; e < c.pointCount; ++e) {
                var f = d.m_points[e],
                    g = c.points[e];
                f.m_normalImpulse = g.normalImpulse;
                f.m_tangentImpulse = g.tangentImpulse
            }
    };
    A.prototype.SolvePositionConstraints = function(b) {
        void 0 === b && (b = 0);
        for (var c = 0, d = 0; d < this.m_constraintCount; d++) {
            var e = this.m_constraints[d],
                f = e.bodyA,
                g = e.bodyB,
                s = f.m_mass * f.m_invMass,
                j = f.m_mass * f.m_invI,
                x = g.m_mass *
                g.m_invMass,
                l = g.m_mass * g.m_invI;
            A.s_psm.Initialize(e);
            for (var F = A.s_psm.m_normal, n = 0; n < e.pointCount; n++) {
                var r = e.points[n],
                    u = A.s_psm.m_points[n],
                    y = A.s_psm.m_separations[n],
                    z = u.x - f.m_sweep.c.x,
                    B = u.y - f.m_sweep.c.y,
                    D = u.x - g.m_sweep.c.x,
                    u = u.y - g.m_sweep.c.y,
                    c = c < y ? c : y,
                    y = fa.Clamp(b * (y + Q.b2_linearSlop), -Q.b2_maxLinearCorrection, 0),
                    y = -r.equalizedMass * y,
                    r = y * F.x,
                    y = y * F.y;
                f.m_sweep.c.x -= s * r;
                f.m_sweep.c.y -= s * y;
                f.m_sweep.a -= j * (z * y - B * r);
                f.SynchronizeTransform();
                g.m_sweep.c.x += x * r;
                g.m_sweep.c.y += x * y;
                g.m_sweep.a += l *
                    (D * y - u * r);
                g.SynchronizeTransform()
            }
        }
        return c > -1.5 * Q.b2_linearSlop
    };
    Box2D.postDefs.push(function() {
        Box2D.Dynamics.Contacts.b2ContactSolver.s_worldManifold = new F;
        Box2D.Dynamics.Contacts.b2ContactSolver.s_psm = new K
    });
    Box2D.inherit(B, Box2D.Dynamics.Contacts.b2Contact);
    B.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype;
    B.b2EdgeAndCircleContact = function() {
        Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments)
    };
    B.Create = function() {
        return new B
    };
    B.Destroy = function() {};
    B.prototype.Reset =
        function(b, c) {
            this.__super.Reset.call(this, b, c)
        };
    B.prototype.Evaluate = function() {
        var d = this.m_fixtureA.GetBody(),
            e = this.m_fixtureB.GetBody();
        this.b2CollideEdgeAndCircle(this.m_manifold, this.m_fixtureA.GetShape() instanceof c ? this.m_fixtureA.GetShape() : null, d.m_xf, this.m_fixtureB.GetShape() instanceof b ? this.m_fixtureB.GetShape() : null, e.m_xf)
    };
    B.prototype.b2CollideEdgeAndCircle = function() {};
    Box2D.inherit(E, Box2D.Dynamics.Contacts.b2Contact);
    E.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype;
    E.b2NullContact = function() {
        Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments)
    };
    E.prototype.b2NullContact = function() {
        this.__super.b2Contact.call(this)
    };
    E.prototype.Evaluate = function() {};
    Box2D.inherit(D, Box2D.Dynamics.Contacts.b2Contact);
    D.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype;
    D.b2PolyAndCircleContact = function() {
        Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments)
    };
    D.Create = function() {
        return new D
    };
    D.Destroy = function() {};
    D.prototype.Reset = function(b,
        c) {
        this.__super.Reset.call(this, b, c);
        Q.b2Assert(b.GetType() == e.e_polygonShape);
        Q.b2Assert(c.GetType() == e.e_circleShape)
    };
    D.prototype.Evaluate = function() {
        var c = this.m_fixtureA.m_body,
            e = this.m_fixtureB.m_body;
        P.CollidePolygonAndCircle(this.m_manifold, this.m_fixtureA.GetShape() instanceof d ? this.m_fixtureA.GetShape() : null, c.m_xf, this.m_fixtureB.GetShape() instanceof b ? this.m_fixtureB.GetShape() : null, e.m_xf)
    };
    Box2D.inherit(u, Box2D.Dynamics.Contacts.b2Contact);
    u.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype;
    u.b2PolyAndEdgeContact = function() {
        Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments)
    };
    u.Create = function() {
        return new u
    };
    u.Destroy = function() {};
    u.prototype.Reset = function(b, c) {
        this.__super.Reset.call(this, b, c);
        Q.b2Assert(b.GetType() == e.e_polygonShape);
        Q.b2Assert(c.GetType() == e.e_edgeShape)
    };
    u.prototype.Evaluate = function() {
        var b = this.m_fixtureA.GetBody(),
            e = this.m_fixtureB.GetBody();
        this.b2CollidePolyAndEdge(this.m_manifold, this.m_fixtureA.GetShape() instanceof d ? this.m_fixtureA.GetShape() :
            null, b.m_xf, this.m_fixtureB.GetShape() instanceof c ? this.m_fixtureB.GetShape() : null, e.m_xf)
    };
    u.prototype.b2CollidePolyAndEdge = function() {};
    Box2D.inherit(G, Box2D.Dynamics.Contacts.b2Contact);
    G.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype;
    G.b2PolygonContact = function() {
        Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments)
    };
    G.Create = function() {
        return new G
    };
    G.Destroy = function() {};
    G.prototype.Reset = function(b, c) {
        this.__super.Reset.call(this, b, c)
    };
    G.prototype.Evaluate = function() {
        var b =
            this.m_fixtureA.GetBody(),
            c = this.m_fixtureB.GetBody();
        P.CollidePolygons(this.m_manifold, this.m_fixtureA.GetShape() instanceof d ? this.m_fixtureA.GetShape() : null, b.m_xf, this.m_fixtureB.GetShape() instanceof d ? this.m_fixtureB.GetShape() : null, c.m_xf)
    };
    K.b2PositionSolverManifold = function() {};
    K.prototype.b2PositionSolverManifold = function() {
        this.m_normal = new O;
        this.m_separations = new Vector_a2j_Number(Q.b2_maxManifoldPoints);
        this.m_points = new Vector(Q.b2_maxManifoldPoints);
        for (var b = 0; b < Q.b2_maxManifoldPoints; b++) this.m_points[b] =
            new O
    };
    K.prototype.Initialize = function(b) {
        Q.b2Assert(0 < b.pointCount);
        var c = 0,
            d = 0,
            e = 0,
            f, g = 0,
            s = 0;
        switch (b.type) {
            case U.e_circles:
                f = b.bodyA.m_xf.R;
                e = b.localPoint;
                c = b.bodyA.m_xf.position.x + (f.col1.x * e.x + f.col2.x * e.y);
                d = b.bodyA.m_xf.position.y + (f.col1.y * e.x + f.col2.y * e.y);
                f = b.bodyB.m_xf.R;
                e = b.points[0].localPoint;
                g = b.bodyB.m_xf.position.x + (f.col1.x * e.x + f.col2.x * e.y);
                f = b.bodyB.m_xf.position.y + (f.col1.y * e.x + f.col2.y * e.y);
                var e = g - c,
                    s = f - d,
                    j = e * e + s * s;
                j > Number.MIN_VALUE * Number.MIN_VALUE ? (j = Math.sqrt(j), this.m_normal.x =
                    e / j, this.m_normal.y = s / j) : (this.m_normal.x = 1, this.m_normal.y = 0);
                this.m_points[0].x = 0.5 * (c + g);
                this.m_points[0].y = 0.5 * (d + f);
                this.m_separations[0] = e * this.m_normal.x + s * this.m_normal.y - b.radius;
                break;
            case U.e_faceA:
                f = b.bodyA.m_xf.R;
                e = b.localPlaneNormal;
                this.m_normal.x = f.col1.x * e.x + f.col2.x * e.y;
                this.m_normal.y = f.col1.y * e.x + f.col2.y * e.y;
                f = b.bodyA.m_xf.R;
                e = b.localPoint;
                g = b.bodyA.m_xf.position.x + (f.col1.x * e.x + f.col2.x * e.y);
                s = b.bodyA.m_xf.position.y + (f.col1.y * e.x + f.col2.y * e.y);
                f = b.bodyB.m_xf.R;
                for (c = 0; c < b.pointCount; ++c) e =
                    b.points[c].localPoint, d = b.bodyB.m_xf.position.x + (f.col1.x * e.x + f.col2.x * e.y), e = b.bodyB.m_xf.position.y + (f.col1.y * e.x + f.col2.y * e.y), this.m_separations[c] = (d - g) * this.m_normal.x + (e - s) * this.m_normal.y - b.radius, this.m_points[c].x = d, this.m_points[c].y = e;
                break;
            case U.e_faceB:
                f = b.bodyB.m_xf.R;
                e = b.localPlaneNormal;
                this.m_normal.x = f.col1.x * e.x + f.col2.x * e.y;
                this.m_normal.y = f.col1.y * e.x + f.col2.y * e.y;
                f = b.bodyB.m_xf.R;
                e = b.localPoint;
                g = b.bodyB.m_xf.position.x + (f.col1.x * e.x + f.col2.x * e.y);
                s = b.bodyB.m_xf.position.y +
                    (f.col1.y * e.x + f.col2.y * e.y);
                f = b.bodyA.m_xf.R;
                for (c = 0; c < b.pointCount; ++c) e = b.points[c].localPoint, d = b.bodyA.m_xf.position.x + (f.col1.x * e.x + f.col2.x * e.y), e = b.bodyA.m_xf.position.y + (f.col1.y * e.x + f.col2.y * e.y), this.m_separations[c] = (d - g) * this.m_normal.x + (e - s) * this.m_normal.y - b.radius, this.m_points[c].Set(d, e);
                this.m_normal.x *= -1;
                this.m_normal.y *= -1
        }
    };
    Box2D.postDefs.push(function() {
        Box2D.Dynamics.Contacts.b2PositionSolverManifold.circlePointA = new O;
        Box2D.Dynamics.Contacts.b2PositionSolverManifold.circlePointB =
            new O
    })
})();
(function() {
    var b = Box2D.Common.Math.b2Mat22,
        c = Box2D.Common.Math.b2Math,
        d = Box2D.Common.Math.b2Vec2,
        e = Box2D.Common.b2Color,
        f = Box2D.Dynamics.Controllers.b2BuoyancyController,
        j = Box2D.Dynamics.Controllers.b2ConstantAccelController,
        n = Box2D.Dynamics.Controllers.b2ConstantForceController,
        l = Box2D.Dynamics.Controllers.b2Controller,
        g = Box2D.Dynamics.Controllers.b2ControllerEdge,
        r = Box2D.Dynamics.Controllers.b2GravityController,
        y = Box2D.Dynamics.Controllers.b2TensorDampingController;
    Box2D.inherit(f, Box2D.Dynamics.Controllers.b2Controller);
    f.prototype.__super = Box2D.Dynamics.Controllers.b2Controller.prototype;
    f.b2BuoyancyController = function() {
        Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(this, arguments);
        this.normal = new d(0, -1);
        this.density = this.offset = 0;
        this.velocity = new d(0, 0);
        this.linearDrag = 2;
        this.angularDrag = 1;
        this.useDensity = !1;
        this.useWorldGravity = !0;
        this.gravity = null
    };
    f.prototype.Step = function() {
        if (this.m_bodyList) {
            this.useWorldGravity && (this.gravity = this.GetWorld().GetGravity().Copy());
            for (var b = this.m_bodyList; b; b =
                b.nextBody) {
                var c = b.body;
                if (!1 != c.IsAwake()) {
                    for (var e = new d, f = new d, g = 0, j = 0, l = c.GetFixtureList(); l; l = l.GetNext()) {
                        var n = new d,
                            r = l.GetShape().ComputeSubmergedArea(this.normal, this.offset, c.GetTransform(), n),
                            g = g + r;
                        e.x += r * n.x;
                        e.y += r * n.y;
                        var y = 0,
                            y = 1,
                            j = j + r * y;
                        f.x += r * n.x * y;
                        f.y += r * n.y * y
                    }
                    e.x /= g;
                    e.y /= g;
                    f.x /= j;
                    f.y /= j;
                    g < Number.MIN_VALUE || (j = this.gravity.GetNegative(), j.Multiply(this.density * g), c.ApplyForce(j, f), f = c.GetLinearVelocityFromWorldPoint(e), f.Subtract(this.velocity), f.Multiply(-this.linearDrag * g), c.ApplyForce(f,
                        e), c.ApplyTorque(-c.GetInertia() / c.GetMass() * g * c.GetAngularVelocity() * this.angularDrag))
                }
            }
        }
    };
    f.prototype.Draw = function(b) {
        var c = new d,
            f = new d;
        c.x = this.normal.x * this.offset + 1E3 * this.normal.y;
        c.y = this.normal.y * this.offset - 1E3 * this.normal.x;
        f.x = this.normal.x * this.offset - 1E3 * this.normal.y;
        f.y = this.normal.y * this.offset + 1E3 * this.normal.x;
        var g = new e(0, 0, 1);
        b.DrawSegment(c, f, g)
    };
    Box2D.inherit(j, Box2D.Dynamics.Controllers.b2Controller);
    j.prototype.__super = Box2D.Dynamics.Controllers.b2Controller.prototype;
    j.b2ConstantAccelController = function() {
        Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(this, arguments);
        this.A = new d(0, 0)
    };
    j.prototype.Step = function(b) {
        b = new d(this.A.x * b.dt, this.A.y * b.dt);
        for (var c = this.m_bodyList; c; c = c.nextBody) {
            var e = c.body;
            e.IsAwake() && e.SetLinearVelocity(new d(e.GetLinearVelocity().x + b.x, e.GetLinearVelocity().y + b.y))
        }
    };
    Box2D.inherit(n, Box2D.Dynamics.Controllers.b2Controller);
    n.prototype.__super = Box2D.Dynamics.Controllers.b2Controller.prototype;
    n.b2ConstantForceController =
        function() {
            Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(this, arguments);
            this.F = new d(0, 0)
        };
    n.prototype.Step = function() {
        for (var b = this.m_bodyList; b; b = b.nextBody) {
            var c = b.body;
            c.IsAwake() && c.ApplyForce(this.F, c.GetWorldCenter())
        }
    };
    l.b2Controller = function() {};
    l.prototype.Step = function() {};
    l.prototype.Draw = function() {};
    l.prototype.AddBody = function(b) {
        var c = new g;
        c.controller = this;
        c.body = b;
        c.nextBody = this.m_bodyList;
        c.prevBody = null;
        this.m_bodyList = c;
        c.nextBody && (c.nextBody.prevBody = c);
        this.m_bodyCount++;
        c.nextController = b.m_controllerList;
        c.prevController = null;
        b.m_controllerList = c;
        c.nextController && (c.nextController.prevController = c);
        b.m_controllerCount++
    };
    l.prototype.RemoveBody = function(b) {
        for (var c = b.m_controllerList; c && c.controller != this;) c = c.nextController;
        c.prevBody && (c.prevBody.nextBody = c.nextBody);
        c.nextBody && (c.nextBody.prevBody = c.prevBody);
        c.nextController && (c.nextController.prevController = c.prevController);
        c.prevController && (c.prevController.nextController = c.nextController);
        this.m_bodyList ==
            c && (this.m_bodyList = c.nextBody);
        b.m_controllerList == c && (b.m_controllerList = c.nextController);
        b.m_controllerCount--;
        this.m_bodyCount--
    };
    l.prototype.Clear = function() {
        for (; this.m_bodyList;) this.RemoveBody(this.m_bodyList.body)
    };
    l.prototype.GetNext = function() {
        return this.m_next
    };
    l.prototype.GetWorld = function() {
        return this.m_world
    };
    l.prototype.GetBodyList = function() {
        return this.m_bodyList
    };
    g.b2ControllerEdge = function() {};
    Box2D.inherit(r, Box2D.Dynamics.Controllers.b2Controller);
    r.prototype.__super = Box2D.Dynamics.Controllers.b2Controller.prototype;
    r.b2GravityController = function() {
        Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(this, arguments);
        this.G = 1;
        this.invSqr = !0
    };
    r.prototype.Step = function() {
        var b = null,
            c = null,
            e = null,
            f = 0,
            g = null,
            j = null,
            l = null,
            n = 0,
            r = 0,
            y = 0;
        if (this.invSqr)
            for (b = this.m_bodyList; b; b = b.nextBody) {
                c = b.body;
                e = c.GetWorldCenter();
                f = c.GetMass();
                for (g = this.m_bodyList; g != b; g = g.nextBody) j = g.body, l = j.GetWorldCenter(), n = l.x - e.x, r = l.y - e.y, y = n * n + r * r, y < Number.MIN_VALUE || (n = new d(n, r), n.Multiply(this.G / y / Math.sqrt(y) * f * j.GetMass()),
                    c.IsAwake() && c.ApplyForce(n, e), n.Multiply(-1), j.IsAwake() && j.ApplyForce(n, l))
            } else
                for (b = this.m_bodyList; b; b = b.nextBody) {
                    c = b.body;
                    e = c.GetWorldCenter();
                    f = c.GetMass();
                    for (g = this.m_bodyList; g != b; g = g.nextBody) j = g.body, l = j.GetWorldCenter(), n = l.x - e.x, r = l.y - e.y, y = n * n + r * r, y < Number.MIN_VALUE || (n = new d(n, r), n.Multiply(this.G / y * f * j.GetMass()), c.IsAwake() && c.ApplyForce(n, e), n.Multiply(-1), j.IsAwake() && j.ApplyForce(n, l))
                }
    };
    Box2D.inherit(y, Box2D.Dynamics.Controllers.b2Controller);
    y.prototype.__super = Box2D.Dynamics.Controllers.b2Controller.prototype;
    y.b2TensorDampingController = function() {
        Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(this, arguments);
        this.T = new b;
        this.maxTimestep = 0
    };
    y.prototype.SetAxisAligned = function(b, c) {
        void 0 === b && (b = 0);
        void 0 === c && (c = 0);
        this.T.col1.x = -b;
        this.T.col1.y = 0;
        this.T.col2.x = 0;
        this.T.col2.y = -c;
        this.maxTimestep = 0 < b || 0 < c ? 1 / Math.max(b, c) : 0
    };
    y.prototype.Step = function(b) {
        b = b.dt;
        if (!(b <= Number.MIN_VALUE)) {
            b > this.maxTimestep && 0 < this.maxTimestep && (b = this.maxTimestep);
            for (var e = this.m_bodyList; e; e = e.nextBody) {
                var f =
                    e.body;
                if (f.IsAwake()) {
                    var g = f.GetWorldVector(c.MulMV(this.T, f.GetLocalVector(f.GetLinearVelocity())));
                    f.SetLinearVelocity(new d(f.GetLinearVelocity().x + g.x * b, f.GetLinearVelocity().y + g.y * b))
                }
            }
        }
    }
})();
(function() {
    var b = Box2D.Common.b2Settings,
        c = Box2D.Common.Math.b2Mat22,
        d = Box2D.Common.Math.b2Mat33,
        e = Box2D.Common.Math.b2Math,
        f = Box2D.Common.Math.b2Vec2,
        j = Box2D.Common.Math.b2Vec3,
        n = Box2D.Dynamics.Joints.b2DistanceJoint,
        l = Box2D.Dynamics.Joints.b2DistanceJointDef,
        g = Box2D.Dynamics.Joints.b2FrictionJoint,
        r = Box2D.Dynamics.Joints.b2FrictionJointDef,
        y = Box2D.Dynamics.Joints.b2GearJoint,
        z = Box2D.Dynamics.Joints.b2GearJointDef,
        A = Box2D.Dynamics.Joints.b2Jacobian,
        B = Box2D.Dynamics.Joints.b2Joint,
        E = Box2D.Dynamics.Joints.b2JointDef,
        D = Box2D.Dynamics.Joints.b2JointEdge,
        u = Box2D.Dynamics.Joints.b2LineJoint,
        G = Box2D.Dynamics.Joints.b2LineJointDef,
        K = Box2D.Dynamics.Joints.b2MouseJoint,
        L = Box2D.Dynamics.Joints.b2MouseJointDef,
        N = Box2D.Dynamics.Joints.b2PrismaticJoint,
        Q = Box2D.Dynamics.Joints.b2PrismaticJointDef,
        I = Box2D.Dynamics.Joints.b2PulleyJoint,
        fa = Box2D.Dynamics.Joints.b2PulleyJointDef,
        O = Box2D.Dynamics.Joints.b2RevoluteJoint,
        P = Box2D.Dynamics.Joints.b2RevoluteJointDef,
        ba = Box2D.Dynamics.Joints.b2WeldJoint,
        U = Box2D.Dynamics.Joints.b2WeldJointDef;
    Box2D.inherit(n, Box2D.Dynamics.Joints.b2Joint);
    n.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
    n.b2DistanceJoint = function() {
        Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
        this.m_localAnchor1 = new f;
        this.m_localAnchor2 = new f;
        this.m_u = new f
    };
    n.prototype.GetAnchorA = function() {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchor1)
    };
    n.prototype.GetAnchorB = function() {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchor2)
    };
    n.prototype.GetReactionForce = function(b) {
        void 0 === b && (b = 0);
        return new f(b * this.m_impulse * this.m_u.x, b * this.m_impulse * this.m_u.y)
    };
    n.prototype.GetReactionTorque = function() {
        return 0
    };
    n.prototype.GetLength = function() {
        return this.m_length
    };
    n.prototype.SetLength = function(b) {
        void 0 === b && (b = 0);
        this.m_length = b
    };
    n.prototype.GetFrequency = function() {
        return this.m_frequencyHz
    };
    n.prototype.SetFrequency = function(b) {
        void 0 === b && (b = 0);
        this.m_frequencyHz = b
    };
    n.prototype.GetDampingRatio = function() {
        return this.m_dampingRatio
    };
    n.prototype.SetDampingRatio = function(b) {
        void 0 ===
            b && (b = 0);
        this.m_dampingRatio = b
    };
    n.prototype.b2DistanceJoint = function(b) {
        this.__super.b2Joint.call(this, b);
        this.m_localAnchor1.SetV(b.localAnchorA);
        this.m_localAnchor2.SetV(b.localAnchorB);
        this.m_length = b.length;
        this.m_frequencyHz = b.frequencyHz;
        this.m_dampingRatio = b.dampingRatio;
        this.m_bias = this.m_gamma = this.m_impulse = 0
    };
    n.prototype.InitVelocityConstraints = function(c) {
        var d, e = 0,
            f = this.m_bodyA,
            g = this.m_bodyB;
        d = f.m_xf.R;
        var j = this.m_localAnchor1.x - f.m_sweep.localCenter.x,
            l = this.m_localAnchor1.y - f.m_sweep.localCenter.y,
            e = d.col1.x * j + d.col2.x * l,
            l = d.col1.y * j + d.col2.y * l,
            j = e;
        d = g.m_xf.R;
        var m = this.m_localAnchor2.x - g.m_sweep.localCenter.x,
            q = this.m_localAnchor2.y - g.m_sweep.localCenter.y,
            e = d.col1.x * m + d.col2.x * q,
            q = d.col1.y * m + d.col2.y * q,
            m = e;
        this.m_u.x = g.m_sweep.c.x + m - f.m_sweep.c.x - j;
        this.m_u.y = g.m_sweep.c.y + q - f.m_sweep.c.y - l;
        e = Math.sqrt(this.m_u.x * this.m_u.x + this.m_u.y * this.m_u.y);
        e > b.b2_linearSlop ? this.m_u.Multiply(1 / e) : this.m_u.SetZero();
        d = j * this.m_u.y - l * this.m_u.x;
        var n = m * this.m_u.y - q * this.m_u.x;
        d = f.m_invMass + f.m_invI *
            d * d + g.m_invMass + g.m_invI * n * n;
        this.m_mass = 0 != d ? 1 / d : 0;
        if (0 < this.m_frequencyHz) {
            var e = e - this.m_length,
                n = 2 * Math.PI * this.m_frequencyHz,
                t = this.m_mass * n * n;
            this.m_gamma = c.dt * (2 * this.m_mass * this.m_dampingRatio * n + c.dt * t);
            this.m_gamma = 0 != this.m_gamma ? 1 / this.m_gamma : 0;
            this.m_bias = e * c.dt * t * this.m_gamma;
            this.m_mass = d + this.m_gamma;
            this.m_mass = 0 != this.m_mass ? 1 / this.m_mass : 0
        }
        c.warmStarting ? (this.m_impulse *= c.dtRatio, c = this.m_impulse * this.m_u.x, d = this.m_impulse * this.m_u.y, f.m_linearVelocity.x -= f.m_invMass * c, f.m_linearVelocity.y -=
            f.m_invMass * d, f.m_angularVelocity -= f.m_invI * (j * d - l * c), g.m_linearVelocity.x += g.m_invMass * c, g.m_linearVelocity.y += g.m_invMass * d, g.m_angularVelocity += g.m_invI * (m * d - q * c)) : this.m_impulse = 0
    };
    n.prototype.SolveVelocityConstraints = function() {
        var b, c = this.m_bodyA,
            d = this.m_bodyB;
        b = c.m_xf.R;
        var e = this.m_localAnchor1.x - c.m_sweep.localCenter.x,
            f = this.m_localAnchor1.y - c.m_sweep.localCenter.y,
            g = b.col1.x * e + b.col2.x * f,
            f = b.col1.y * e + b.col2.y * f,
            e = g;
        b = d.m_xf.R;
        var j = this.m_localAnchor2.x - d.m_sweep.localCenter.x,
            m = this.m_localAnchor2.y -
            d.m_sweep.localCenter.y,
            g = b.col1.x * j + b.col2.x * m,
            m = b.col1.y * j + b.col2.y * m,
            j = g,
            g = -this.m_mass * (this.m_u.x * (d.m_linearVelocity.x + -d.m_angularVelocity * m - (c.m_linearVelocity.x + -c.m_angularVelocity * f)) + this.m_u.y * (d.m_linearVelocity.y + d.m_angularVelocity * j - (c.m_linearVelocity.y + c.m_angularVelocity * e)) + this.m_bias + this.m_gamma * this.m_impulse);
        this.m_impulse += g;
        b = g * this.m_u.x;
        g *= this.m_u.y;
        c.m_linearVelocity.x -= c.m_invMass * b;
        c.m_linearVelocity.y -= c.m_invMass * g;
        c.m_angularVelocity -= c.m_invI * (e * g - f * b);
        d.m_linearVelocity.x +=
            d.m_invMass * b;
        d.m_linearVelocity.y += d.m_invMass * g;
        d.m_angularVelocity += d.m_invI * (j * g - m * b)
    };
    n.prototype.SolvePositionConstraints = function() {
        var c;
        if (0 < this.m_frequencyHz) return !0;
        var d = this.m_bodyA,
            f = this.m_bodyB;
        c = d.m_xf.R;
        var g = this.m_localAnchor1.x - d.m_sweep.localCenter.x,
            j = this.m_localAnchor1.y - d.m_sweep.localCenter.y,
            l = c.col1.x * g + c.col2.x * j,
            j = c.col1.y * g + c.col2.y * j,
            g = l;
        c = f.m_xf.R;
        var n = this.m_localAnchor2.x - f.m_sweep.localCenter.x,
            m = this.m_localAnchor2.y - f.m_sweep.localCenter.y,
            l = c.col1.x * n + c.col2.x *
            m,
            m = c.col1.y * n + c.col2.y * m,
            n = l,
            l = f.m_sweep.c.x + n - d.m_sweep.c.x - g,
            q = f.m_sweep.c.y + m - d.m_sweep.c.y - j;
        c = Math.sqrt(l * l + q * q);
        l /= c;
        q /= c;
        c -= this.m_length;
        c = e.Clamp(c, -b.b2_maxLinearCorrection, b.b2_maxLinearCorrection);
        var r = -this.m_mass * c;
        this.m_u.Set(l, q);
        l = r * this.m_u.x;
        q = r * this.m_u.y;
        d.m_sweep.c.x -= d.m_invMass * l;
        d.m_sweep.c.y -= d.m_invMass * q;
        d.m_sweep.a -= d.m_invI * (g * q - j * l);
        f.m_sweep.c.x += f.m_invMass * l;
        f.m_sweep.c.y += f.m_invMass * q;
        f.m_sweep.a += f.m_invI * (n * q - m * l);
        d.SynchronizeTransform();
        f.SynchronizeTransform();
        return e.Abs(c) < b.b2_linearSlop
    };
    Box2D.inherit(l, Box2D.Dynamics.Joints.b2JointDef);
    l.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
    l.b2DistanceJointDef = function() {
        Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
        this.localAnchorA = new f;
        this.localAnchorB = new f
    };
    l.prototype.b2DistanceJointDef = function() {
        this.__super.b2JointDef.call(this);
        this.type = B.e_distanceJoint;
        this.length = 1;
        this.dampingRatio = this.frequencyHz = 0
    };
    l.prototype.Initialize = function(b, c, d, e) {
        this.bodyA =
            b;
        this.bodyB = c;
        this.localAnchorA.SetV(this.bodyA.GetLocalPoint(d));
        this.localAnchorB.SetV(this.bodyB.GetLocalPoint(e));
        b = e.x - d.x;
        d = e.y - d.y;
        this.length = Math.sqrt(b * b + d * d);
        this.dampingRatio = this.frequencyHz = 0
    };
    Box2D.inherit(g, Box2D.Dynamics.Joints.b2Joint);
    g.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
    g.b2FrictionJoint = function() {
        Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
        this.m_localAnchorA = new f;
        this.m_localAnchorB = new f;
        this.m_linearMass = new c;
        this.m_linearImpulse =
            new f
    };
    g.prototype.GetAnchorA = function() {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchorA)
    };
    g.prototype.GetAnchorB = function() {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchorB)
    };
    g.prototype.GetReactionForce = function(b) {
        void 0 === b && (b = 0);
        return new f(b * this.m_linearImpulse.x, b * this.m_linearImpulse.y)
    };
    g.prototype.GetReactionTorque = function(b) {
        void 0 === b && (b = 0);
        return b * this.m_angularImpulse
    };
    g.prototype.SetMaxForce = function(b) {
        void 0 === b && (b = 0);
        this.m_maxForce = b
    };
    g.prototype.GetMaxForce = function() {
        return this.m_maxForce
    };
    g.prototype.SetMaxTorque = function(b) {
        void 0 === b && (b = 0);
        this.m_maxTorque = b
    };
    g.prototype.GetMaxTorque = function() {
        return this.m_maxTorque
    };
    g.prototype.b2FrictionJoint = function(b) {
        this.__super.b2Joint.call(this, b);
        this.m_localAnchorA.SetV(b.localAnchorA);
        this.m_localAnchorB.SetV(b.localAnchorB);
        this.m_linearMass.SetZero();
        this.m_angularMass = 0;
        this.m_linearImpulse.SetZero();
        this.m_angularImpulse = 0;
        this.m_maxForce = b.maxForce;
        this.m_maxTorque = b.maxTorque
    };
    g.prototype.InitVelocityConstraints = function(b) {
        var d,
            e = 0,
            f = this.m_bodyA,
            g = this.m_bodyB;
        d = f.m_xf.R;
        var j = this.m_localAnchorA.x - f.m_sweep.localCenter.x,
            l = this.m_localAnchorA.y - f.m_sweep.localCenter.y,
            e = d.col1.x * j + d.col2.x * l,
            l = d.col1.y * j + d.col2.y * l,
            j = e;
        d = g.m_xf.R;
        var m = this.m_localAnchorB.x - g.m_sweep.localCenter.x,
            q = this.m_localAnchorB.y - g.m_sweep.localCenter.y,
            e = d.col1.x * m + d.col2.x * q,
            q = d.col1.y * m + d.col2.y * q,
            m = e;
        d = f.m_invMass;
        var e = g.m_invMass,
            n = f.m_invI,
            t = g.m_invI,
            r = new c;
        r.col1.x = d + e;
        r.col2.x = 0;
        r.col1.y = 0;
        r.col2.y = d + e;
        r.col1.x += n * l * l;
        r.col2.x += -n * j *
            l;
        r.col1.y += -n * j * l;
        r.col2.y += n * j * j;
        r.col1.x += t * q * q;
        r.col2.x += -t * m * q;
        r.col1.y += -t * m * q;
        r.col2.y += t * m * m;
        r.GetInverse(this.m_linearMass);
        this.m_angularMass = n + t;
        0 < this.m_angularMass && (this.m_angularMass = 1 / this.m_angularMass);
        b.warmStarting ? (this.m_linearImpulse.x *= b.dtRatio, this.m_linearImpulse.y *= b.dtRatio, this.m_angularImpulse *= b.dtRatio, b = this.m_linearImpulse, f.m_linearVelocity.x -= d * b.x, f.m_linearVelocity.y -= d * b.y, f.m_angularVelocity -= n * (j * b.y - l * b.x + this.m_angularImpulse), g.m_linearVelocity.x += e * b.x,
            g.m_linearVelocity.y += e * b.y, g.m_angularVelocity += t * (m * b.y - q * b.x + this.m_angularImpulse)) : (this.m_linearImpulse.SetZero(), this.m_angularImpulse = 0)
    };
    g.prototype.SolveVelocityConstraints = function(b) {
        var c, d = 0,
            g = this.m_bodyA,
            j = this.m_bodyB,
            l = g.m_linearVelocity,
            n = g.m_angularVelocity,
            m = j.m_linearVelocity,
            q = j.m_angularVelocity,
            r = g.m_invMass,
            t = j.m_invMass,
            u = g.m_invI,
            y = j.m_invI;
        c = g.m_xf.R;
        var z = this.m_localAnchorA.x - g.m_sweep.localCenter.x,
            A = this.m_localAnchorA.y - g.m_sweep.localCenter.y,
            d = c.col1.x * z + c.col2.x *
            A,
            A = c.col1.y * z + c.col2.y * A,
            z = d;
        c = j.m_xf.R;
        var B = this.m_localAnchorB.x - j.m_sweep.localCenter.x,
            D = this.m_localAnchorB.y - j.m_sweep.localCenter.y,
            d = c.col1.x * B + c.col2.x * D,
            D = c.col1.y * B + c.col2.y * D,
            B = d,
            d = -this.m_angularMass * (q - n),
            E = this.m_angularImpulse;
        c = b.dt * this.m_maxTorque;
        this.m_angularImpulse = e.Clamp(this.m_angularImpulse + d, -c, c);
        d = this.m_angularImpulse - E;
        n -= u * d;
        q += y * d;
        c = e.MulMV(this.m_linearMass, new f(-(m.x - q * D - l.x + n * A), -(m.y + q * B - l.y - n * z)));
        d = this.m_linearImpulse.Copy();
        this.m_linearImpulse.Add(c);
        c = b.dt * this.m_maxForce;
        this.m_linearImpulse.LengthSquared() > c * c && (this.m_linearImpulse.Normalize(), this.m_linearImpulse.Multiply(c));
        c = e.SubtractVV(this.m_linearImpulse, d);
        l.x -= r * c.x;
        l.y -= r * c.y;
        n -= u * (z * c.y - A * c.x);
        m.x += t * c.x;
        m.y += t * c.y;
        q += y * (B * c.y - D * c.x);
        g.m_angularVelocity = n;
        j.m_angularVelocity = q
    };
    g.prototype.SolvePositionConstraints = function() {
        return !0
    };
    Box2D.inherit(r, Box2D.Dynamics.Joints.b2JointDef);
    r.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
    r.b2FrictionJointDef = function() {
        Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this,
            arguments);
        this.localAnchorA = new f;
        this.localAnchorB = new f
    };
    r.prototype.b2FrictionJointDef = function() {
        this.__super.b2JointDef.call(this);
        this.type = B.e_frictionJoint;
        this.maxTorque = this.maxForce = 0
    };
    r.prototype.Initialize = function(b, c, d) {
        this.bodyA = b;
        this.bodyB = c;
        this.localAnchorA.SetV(this.bodyA.GetLocalPoint(d));
        this.localAnchorB.SetV(this.bodyB.GetLocalPoint(d))
    };
    Box2D.inherit(y, Box2D.Dynamics.Joints.b2Joint);
    y.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
    y.b2GearJoint = function() {
        Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this,
            arguments);
        this.m_groundAnchor1 = new f;
        this.m_groundAnchor2 = new f;
        this.m_localAnchor1 = new f;
        this.m_localAnchor2 = new f;
        this.m_J = new A
    };
    y.prototype.GetAnchorA = function() {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchor1)
    };
    y.prototype.GetAnchorB = function() {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchor2)
    };
    y.prototype.GetReactionForce = function(b) {
        void 0 === b && (b = 0);
        return new f(b * this.m_impulse * this.m_J.linearB.x, b * this.m_impulse * this.m_J.linearB.y)
    };
    y.prototype.GetReactionTorque = function(b) {
        void 0 ===
            b && (b = 0);
        var c = this.m_bodyB.m_xf.R,
            d = this.m_localAnchor1.x - this.m_bodyB.m_sweep.localCenter.x,
            e = this.m_localAnchor1.y - this.m_bodyB.m_sweep.localCenter.y,
            f = c.col1.x * d + c.col2.x * e,
            e = c.col1.y * d + c.col2.y * e;
        return b * (this.m_impulse * this.m_J.angularB - f * this.m_impulse * this.m_J.linearB.y + e * this.m_impulse * this.m_J.linearB.x)
    };
    y.prototype.GetRatio = function() {
        return this.m_ratio
    };
    y.prototype.SetRatio = function(b) {
        void 0 === b && (b = 0);
        this.m_ratio = b
    };
    y.prototype.b2GearJoint = function(b) {
        this.__super.b2Joint.call(this,
            b);
        var c = parseInt(b.joint1.m_type),
            d = parseInt(b.joint2.m_type);
        this.m_prismatic2 = this.m_revolute2 = this.m_prismatic1 = this.m_revolute1 = null;
        var e = 0,
            f = 0;
        this.m_ground1 = b.joint1.GetBodyA();
        this.m_bodyA = b.joint1.GetBodyB();
        c == B.e_revoluteJoint ? (this.m_revolute1 = b.joint1 instanceof O ? b.joint1 : null, this.m_groundAnchor1.SetV(this.m_revolute1.m_localAnchor1), this.m_localAnchor1.SetV(this.m_revolute1.m_localAnchor2), e = this.m_revolute1.GetJointAngle()) : (this.m_prismatic1 = b.joint1 instanceof N ? b.joint1 : null,
            this.m_groundAnchor1.SetV(this.m_prismatic1.m_localAnchor1), this.m_localAnchor1.SetV(this.m_prismatic1.m_localAnchor2), e = this.m_prismatic1.GetJointTranslation());
        this.m_ground2 = b.joint2.GetBodyA();
        this.m_bodyB = b.joint2.GetBodyB();
        d == B.e_revoluteJoint ? (this.m_revolute2 = b.joint2 instanceof O ? b.joint2 : null, this.m_groundAnchor2.SetV(this.m_revolute2.m_localAnchor1), this.m_localAnchor2.SetV(this.m_revolute2.m_localAnchor2), f = this.m_revolute2.GetJointAngle()) : (this.m_prismatic2 = b.joint2 instanceof N ? b.joint2 :
            null, this.m_groundAnchor2.SetV(this.m_prismatic2.m_localAnchor1), this.m_localAnchor2.SetV(this.m_prismatic2.m_localAnchor2), f = this.m_prismatic2.GetJointTranslation());
        this.m_ratio = b.ratio;
        this.m_constant = e + this.m_ratio * f;
        this.m_impulse = 0
    };
    y.prototype.InitVelocityConstraints = function(b) {
        var c = this.m_ground1,
            d = this.m_ground2,
            e = this.m_bodyA,
            f = this.m_bodyB,
            g = 0,
            j = 0,
            m = 0,
            l = 0,
            n = 0,
            t = 0;
        this.m_J.SetZero();
        this.m_revolute1 ? (this.m_J.angularA = -1, t += e.m_invI) : (c = c.m_xf.R, j = this.m_prismatic1.m_localXAxis1, g = c.col1.x *
            j.x + c.col2.x * j.y, j = c.col1.y * j.x + c.col2.y * j.y, c = e.m_xf.R, m = this.m_localAnchor1.x - e.m_sweep.localCenter.x, l = this.m_localAnchor1.y - e.m_sweep.localCenter.y, n = c.col1.x * m + c.col2.x * l, l = c.col1.y * m + c.col2.y * l, m = n * j - l * g, this.m_J.linearA.Set(-g, -j), this.m_J.angularA = -m, t += e.m_invMass + e.m_invI * m * m);
        this.m_revolute2 ? (this.m_J.angularB = -this.m_ratio, t += this.m_ratio * this.m_ratio * f.m_invI) : (c = d.m_xf.R, j = this.m_prismatic2.m_localXAxis1, g = c.col1.x * j.x + c.col2.x * j.y, j = c.col1.y * j.x + c.col2.y * j.y, c = f.m_xf.R, m = this.m_localAnchor2.x -
            f.m_sweep.localCenter.x, l = this.m_localAnchor2.y - f.m_sweep.localCenter.y, n = c.col1.x * m + c.col2.x * l, l = c.col1.y * m + c.col2.y * l, m = n * j - l * g, this.m_J.linearB.Set(-this.m_ratio * g, -this.m_ratio * j), this.m_J.angularB = -this.m_ratio * m, t += this.m_ratio * this.m_ratio * (f.m_invMass + f.m_invI * m * m));
        this.m_mass = 0 < t ? 1 / t : 0;
        b.warmStarting ? (e.m_linearVelocity.x += e.m_invMass * this.m_impulse * this.m_J.linearA.x, e.m_linearVelocity.y += e.m_invMass * this.m_impulse * this.m_J.linearA.y, e.m_angularVelocity += e.m_invI * this.m_impulse * this.m_J.angularA,
            f.m_linearVelocity.x += f.m_invMass * this.m_impulse * this.m_J.linearB.x, f.m_linearVelocity.y += f.m_invMass * this.m_impulse * this.m_J.linearB.y, f.m_angularVelocity += f.m_invI * this.m_impulse * this.m_J.angularB) : this.m_impulse = 0
    };
    y.prototype.SolveVelocityConstraints = function() {
        var b = this.m_bodyA,
            c = this.m_bodyB,
            d = -this.m_mass * this.m_J.Compute(b.m_linearVelocity, b.m_angularVelocity, c.m_linearVelocity, c.m_angularVelocity);
        this.m_impulse += d;
        b.m_linearVelocity.x += b.m_invMass * d * this.m_J.linearA.x;
        b.m_linearVelocity.y +=
            b.m_invMass * d * this.m_J.linearA.y;
        b.m_angularVelocity += b.m_invI * d * this.m_J.angularA;
        c.m_linearVelocity.x += c.m_invMass * d * this.m_J.linearB.x;
        c.m_linearVelocity.y += c.m_invMass * d * this.m_J.linearB.y;
        c.m_angularVelocity += c.m_invI * d * this.m_J.angularB
    };
    y.prototype.SolvePositionConstraints = function() {
        var c = this.m_bodyA,
            d = this.m_bodyB,
            e = 0,
            f = 0,
            e = this.m_revolute1 ? this.m_revolute1.GetJointAngle() : this.m_prismatic1.GetJointTranslation(),
            f = this.m_revolute2 ? this.m_revolute2.GetJointAngle() : this.m_prismatic2.GetJointTranslation(),
            e = -this.m_mass * (this.m_constant - (e + this.m_ratio * f));
        c.m_sweep.c.x += c.m_invMass * e * this.m_J.linearA.x;
        c.m_sweep.c.y += c.m_invMass * e * this.m_J.linearA.y;
        c.m_sweep.a += c.m_invI * e * this.m_J.angularA;
        d.m_sweep.c.x += d.m_invMass * e * this.m_J.linearB.x;
        d.m_sweep.c.y += d.m_invMass * e * this.m_J.linearB.y;
        d.m_sweep.a += d.m_invI * e * this.m_J.angularB;
        c.SynchronizeTransform();
        d.SynchronizeTransform();
        return 0 < b.b2_linearSlop
    };
    Box2D.inherit(z, Box2D.Dynamics.Joints.b2JointDef);
    z.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
    z.b2GearJointDef = function() {
        Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments)
    };
    z.prototype.b2GearJointDef = function() {
        this.__super.b2JointDef.call(this);
        this.type = B.e_gearJoint;
        this.joint2 = this.joint1 = null;
        this.ratio = 1
    };
    A.b2Jacobian = function() {
        this.linearA = new f;
        this.linearB = new f
    };
    A.prototype.SetZero = function() {
        this.linearA.SetZero();
        this.angularA = 0;
        this.linearB.SetZero();
        this.angularB = 0
    };
    A.prototype.Set = function(b, c, d, e) {
        void 0 === c && (c = 0);
        void 0 === e && (e = 0);
        this.linearA.SetV(b);
        this.angularA =
            c;
        this.linearB.SetV(d);
        this.angularB = e
    };
    A.prototype.Compute = function(b, c, d, e) {
        void 0 === c && (c = 0);
        void 0 === e && (e = 0);
        return this.linearA.x * b.x + this.linearA.y * b.y + this.angularA * c + (this.linearB.x * d.x + this.linearB.y * d.y) + this.angularB * e
    };
    B.b2Joint = function() {
        this.m_edgeA = new D;
        this.m_edgeB = new D;
        this.m_localCenterA = new f;
        this.m_localCenterB = new f
    };
    B.prototype.GetType = function() {
        return this.m_type
    };
    B.prototype.GetAnchorA = function() {
        return null
    };
    B.prototype.GetAnchorB = function() {
        return null
    };
    B.prototype.GetReactionForce =
        function() {
            return null
        };
    B.prototype.GetReactionTorque = function() {
        return 0
    };
    B.prototype.GetBodyA = function() {
        return this.m_bodyA
    };
    B.prototype.GetBodyB = function() {
        return this.m_bodyB
    };
    B.prototype.GetNext = function() {
        return this.m_next
    };
    B.prototype.GetUserData = function() {
        return this.m_userData
    };
    B.prototype.SetUserData = function(b) {
        this.m_userData = b
    };
    B.prototype.IsActive = function() {
        return this.m_bodyA.IsActive() && this.m_bodyB.IsActive()
    };
    B.Create = function(b) {
        var c = null;
        switch (b.type) {
            case B.e_distanceJoint:
                c =
                    new n(b instanceof l ? b : null);
                break;
            case B.e_mouseJoint:
                c = new K(b instanceof L ? b : null);
                break;
            case B.e_prismaticJoint:
                c = new N(b instanceof Q ? b : null);
                break;
            case B.e_revoluteJoint:
                c = new O(b instanceof P ? b : null);
                break;
            case B.e_pulleyJoint:
                c = new I(b instanceof fa ? b : null);
                break;
            case B.e_gearJoint:
                c = new y(b instanceof z ? b : null);
                break;
            case B.e_lineJoint:
                c = new u(b instanceof G ? b : null);
                break;
            case B.e_weldJoint:
                c = new ba(b instanceof U ? b : null);
                break;
            case B.e_frictionJoint:
                c = new g(b instanceof r ? b : null)
        }
        return c
    };
    B.Destroy = function() {};
    B.prototype.b2Joint = function(c) {
        b.b2Assert(c.bodyA != c.bodyB);
        this.m_type = c.type;
        this.m_next = this.m_prev = null;
        this.m_bodyA = c.bodyA;
        this.m_bodyB = c.bodyB;
        this.m_collideConnected = c.collideConnected;
        this.m_islandFlag = !1;
        this.m_userData = c.userData
    };
    B.prototype.InitVelocityConstraints = function() {};
    B.prototype.SolveVelocityConstraints = function() {};
    B.prototype.FinalizeVelocityConstraints = function() {};
    B.prototype.SolvePositionConstraints = function() {
        return !1
    };
    Box2D.postDefs.push(function() {
        Box2D.Dynamics.Joints.b2Joint.e_unknownJoint =
            0;
        Box2D.Dynamics.Joints.b2Joint.e_revoluteJoint = 1;
        Box2D.Dynamics.Joints.b2Joint.e_prismaticJoint = 2;
        Box2D.Dynamics.Joints.b2Joint.e_distanceJoint = 3;
        Box2D.Dynamics.Joints.b2Joint.e_pulleyJoint = 4;
        Box2D.Dynamics.Joints.b2Joint.e_mouseJoint = 5;
        Box2D.Dynamics.Joints.b2Joint.e_gearJoint = 6;
        Box2D.Dynamics.Joints.b2Joint.e_lineJoint = 7;
        Box2D.Dynamics.Joints.b2Joint.e_weldJoint = 8;
        Box2D.Dynamics.Joints.b2Joint.e_frictionJoint = 9;
        Box2D.Dynamics.Joints.b2Joint.e_inactiveLimit = 0;
        Box2D.Dynamics.Joints.b2Joint.e_atLowerLimit =
            1;
        Box2D.Dynamics.Joints.b2Joint.e_atUpperLimit = 2;
        Box2D.Dynamics.Joints.b2Joint.e_equalLimits = 3
    });
    E.b2JointDef = function() {};
    E.prototype.b2JointDef = function() {
        this.type = B.e_unknownJoint;
        this.bodyB = this.bodyA = this.userData = null;
        this.collideConnected = !1
    };
    D.b2JointEdge = function() {};
    Box2D.inherit(u, Box2D.Dynamics.Joints.b2Joint);
    u.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
    u.b2LineJoint = function() {
        Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
        this.m_localAnchor1 = new f;
        this.m_localAnchor2 =
            new f;
        this.m_localXAxis1 = new f;
        this.m_localYAxis1 = new f;
        this.m_axis = new f;
        this.m_perp = new f;
        this.m_K = new c;
        this.m_impulse = new f
    };
    u.prototype.GetAnchorA = function() {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchor1)
    };
    u.prototype.GetAnchorB = function() {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchor2)
    };
    u.prototype.GetReactionForce = function(b) {
        void 0 === b && (b = 0);
        return new f(b * (this.m_impulse.x * this.m_perp.x + (this.m_motorImpulse + this.m_impulse.y) * this.m_axis.x), b * (this.m_impulse.x * this.m_perp.y +
            (this.m_motorImpulse + this.m_impulse.y) * this.m_axis.y))
    };
    u.prototype.GetReactionTorque = function(b) {
        void 0 === b && (b = 0);
        return b * this.m_impulse.y
    };
    u.prototype.GetJointTranslation = function() {
        var b = this.m_bodyA,
            c = this.m_bodyB,
            d = b.GetWorldPoint(this.m_localAnchor1),
            e = c.GetWorldPoint(this.m_localAnchor2),
            c = e.x - d.x,
            d = e.y - d.y,
            b = b.GetWorldVector(this.m_localXAxis1);
        return b.x * c + b.y * d
    };
    u.prototype.GetJointSpeed = function() {
        var b = this.m_bodyA,
            c = this.m_bodyB,
            d;
        d = b.m_xf.R;
        var e = this.m_localAnchor1.x - b.m_sweep.localCenter.x,
            f = this.m_localAnchor1.y - b.m_sweep.localCenter.y,
            g = d.col1.x * e + d.col2.x * f,
            f = d.col1.y * e + d.col2.y * f,
            e = g;
        d = c.m_xf.R;
        var j = this.m_localAnchor2.x - c.m_sweep.localCenter.x,
            m = this.m_localAnchor2.y - c.m_sweep.localCenter.y,
            g = d.col1.x * j + d.col2.x * m,
            m = d.col1.y * j + d.col2.y * m,
            j = g;
        d = c.m_sweep.c.x + j - (b.m_sweep.c.x + e);
        var g = c.m_sweep.c.y + m - (b.m_sweep.c.y + f),
            l = b.GetWorldVector(this.m_localXAxis1),
            n = b.m_linearVelocity,
            t = c.m_linearVelocity,
            b = b.m_angularVelocity,
            c = c.m_angularVelocity;
        return d * -b * l.y + g * b * l.x + (l.x * (t.x + -c *
            m - n.x - -b * f) + l.y * (t.y + c * j - n.y - b * e))
    };
    u.prototype.IsLimitEnabled = function() {
        return this.m_enableLimit
    };
    u.prototype.EnableLimit = function(b) {
        this.m_bodyA.SetAwake(!0);
        this.m_bodyB.SetAwake(!0);
        this.m_enableLimit = b
    };
    u.prototype.GetLowerLimit = function() {
        return this.m_lowerTranslation
    };
    u.prototype.GetUpperLimit = function() {
        return this.m_upperTranslation
    };
    u.prototype.SetLimits = function(b, c) {
        void 0 === b && (b = 0);
        void 0 === c && (c = 0);
        this.m_bodyA.SetAwake(!0);
        this.m_bodyB.SetAwake(!0);
        this.m_lowerTranslation = b;
        this.m_upperTranslation =
            c
    };
    u.prototype.IsMotorEnabled = function() {
        return this.m_enableMotor
    };
    u.prototype.EnableMotor = function(b) {
        this.m_bodyA.SetAwake(!0);
        this.m_bodyB.SetAwake(!0);
        this.m_enableMotor = b
    };
    u.prototype.SetMotorSpeed = function(b) {
        void 0 === b && (b = 0);
        this.m_bodyA.SetAwake(!0);
        this.m_bodyB.SetAwake(!0);
        this.m_motorSpeed = b
    };
    u.prototype.GetMotorSpeed = function() {
        return this.m_motorSpeed
    };
    u.prototype.SetMaxMotorForce = function(b) {
        void 0 === b && (b = 0);
        this.m_bodyA.SetAwake(!0);
        this.m_bodyB.SetAwake(!0);
        this.m_maxMotorForce =
            b
    };
    u.prototype.GetMaxMotorForce = function() {
        return this.m_maxMotorForce
    };
    u.prototype.GetMotorForce = function() {
        return this.m_motorImpulse
    };
    u.prototype.b2LineJoint = function(b) {
        this.__super.b2Joint.call(this, b);
        this.m_localAnchor1.SetV(b.localAnchorA);
        this.m_localAnchor2.SetV(b.localAnchorB);
        this.m_localXAxis1.SetV(b.localAxisA);
        this.m_localYAxis1.x = -this.m_localXAxis1.y;
        this.m_localYAxis1.y = this.m_localXAxis1.x;
        this.m_impulse.SetZero();
        this.m_motorImpulse = this.m_motorMass = 0;
        this.m_lowerTranslation = b.lowerTranslation;
        this.m_upperTranslation = b.upperTranslation;
        this.m_maxMotorForce = b.maxMotorForce;
        this.m_motorSpeed = b.motorSpeed;
        this.m_enableLimit = b.enableLimit;
        this.m_enableMotor = b.enableMotor;
        this.m_limitState = B.e_inactiveLimit;
        this.m_axis.SetZero();
        this.m_perp.SetZero()
    };
    u.prototype.InitVelocityConstraints = function(c) {
        var d = this.m_bodyA,
            f = this.m_bodyB,
            g, j = 0;
        this.m_localCenterA.SetV(d.GetLocalCenter());
        this.m_localCenterB.SetV(f.GetLocalCenter());
        var l = d.GetTransform();
        f.GetTransform();
        g = d.m_xf.R;
        var n = this.m_localAnchor1.x -
            this.m_localCenterA.x,
            m = this.m_localAnchor1.y - this.m_localCenterA.y,
            j = g.col1.x * n + g.col2.x * m,
            m = g.col1.y * n + g.col2.y * m,
            n = j;
        g = f.m_xf.R;
        var q = this.m_localAnchor2.x - this.m_localCenterB.x,
            r = this.m_localAnchor2.y - this.m_localCenterB.y,
            j = g.col1.x * q + g.col2.x * r,
            r = g.col1.y * q + g.col2.y * r,
            q = j;
        g = f.m_sweep.c.x + q - d.m_sweep.c.x - n;
        j = f.m_sweep.c.y + r - d.m_sweep.c.y - m;
        this.m_invMassA = d.m_invMass;
        this.m_invMassB = f.m_invMass;
        this.m_invIA = d.m_invI;
        this.m_invIB = f.m_invI;
        this.m_axis.SetV(e.MulMV(l.R, this.m_localXAxis1));
        this.m_a1 =
            (g + n) * this.m_axis.y - (j + m) * this.m_axis.x;
        this.m_a2 = q * this.m_axis.y - r * this.m_axis.x;
        this.m_motorMass = this.m_invMassA + this.m_invMassB + this.m_invIA * this.m_a1 * this.m_a1 + this.m_invIB * this.m_a2 * this.m_a2;
        this.m_motorMass = this.m_motorMass > Number.MIN_VALUE ? 1 / this.m_motorMass : 0;
        this.m_perp.SetV(e.MulMV(l.R, this.m_localYAxis1));
        this.m_s1 = (g + n) * this.m_perp.y - (j + m) * this.m_perp.x;
        this.m_s2 = q * this.m_perp.y - r * this.m_perp.x;
        l = this.m_invMassA;
        n = this.m_invMassB;
        m = this.m_invIA;
        q = this.m_invIB;
        this.m_K.col1.x = l + n + m * this.m_s1 *
            this.m_s1 + q * this.m_s2 * this.m_s2;
        this.m_K.col1.y = m * this.m_s1 * this.m_a1 + q * this.m_s2 * this.m_a2;
        this.m_K.col2.x = this.m_K.col1.y;
        this.m_K.col2.y = l + n + m * this.m_a1 * this.m_a1 + q * this.m_a2 * this.m_a2;
        this.m_enableLimit ? (g = this.m_axis.x * g + this.m_axis.y * j, e.Abs(this.m_upperTranslation - this.m_lowerTranslation) < 2 * b.b2_linearSlop ? this.m_limitState = B.e_equalLimits : g <= this.m_lowerTranslation ? this.m_limitState != B.e_atLowerLimit && (this.m_limitState = B.e_atLowerLimit, this.m_impulse.y = 0) : g >= this.m_upperTranslation ? this.m_limitState !=
            B.e_atUpperLimit && (this.m_limitState = B.e_atUpperLimit, this.m_impulse.y = 0) : (this.m_limitState = B.e_inactiveLimit, this.m_impulse.y = 0)) : this.m_limitState = B.e_inactiveLimit;
        !1 == this.m_enableMotor && (this.m_motorImpulse = 0);
        c.warmStarting ? (this.m_impulse.x *= c.dtRatio, this.m_impulse.y *= c.dtRatio, this.m_motorImpulse *= c.dtRatio, c = this.m_impulse.x * this.m_perp.x + (this.m_motorImpulse + this.m_impulse.y) * this.m_axis.x, g = this.m_impulse.x * this.m_perp.y + (this.m_motorImpulse + this.m_impulse.y) * this.m_axis.y, j = this.m_impulse.x *
            this.m_s1 + (this.m_motorImpulse + this.m_impulse.y) * this.m_a1, l = this.m_impulse.x * this.m_s2 + (this.m_motorImpulse + this.m_impulse.y) * this.m_a2, d.m_linearVelocity.x -= this.m_invMassA * c, d.m_linearVelocity.y -= this.m_invMassA * g, d.m_angularVelocity -= this.m_invIA * j, f.m_linearVelocity.x += this.m_invMassB * c, f.m_linearVelocity.y += this.m_invMassB * g, f.m_angularVelocity += this.m_invIB * l) : (this.m_impulse.SetZero(), this.m_motorImpulse = 0)
    };
    u.prototype.SolveVelocityConstraints = function(b) {
        var c = this.m_bodyA,
            d = this.m_bodyB,
            g = c.m_linearVelocity,
            j = c.m_angularVelocity,
            l = d.m_linearVelocity,
            n = d.m_angularVelocity,
            m = 0,
            q = 0,
            r = 0,
            t = 0;
        this.m_enableMotor && this.m_limitState != B.e_equalLimits && (t = this.m_motorMass * (this.m_motorSpeed - (this.m_axis.x * (l.x - g.x) + this.m_axis.y * (l.y - g.y) + this.m_a2 * n - this.m_a1 * j)), m = this.m_motorImpulse, q = b.dt * this.m_maxMotorForce, this.m_motorImpulse = e.Clamp(this.m_motorImpulse + t, -q, q), t = this.m_motorImpulse - m, m = t * this.m_axis.x, q = t * this.m_axis.y, r = t * this.m_a1, t *= this.m_a2, g.x -= this.m_invMassA * m, g.y -= this.m_invMassA *
            q, j -= this.m_invIA * r, l.x += this.m_invMassB * m, l.y += this.m_invMassB * q, n += this.m_invIB * t);
        q = this.m_perp.x * (l.x - g.x) + this.m_perp.y * (l.y - g.y) + this.m_s2 * n - this.m_s1 * j;
        this.m_enableLimit && this.m_limitState != B.e_inactiveLimit ? (r = this.m_axis.x * (l.x - g.x) + this.m_axis.y * (l.y - g.y) + this.m_a2 * n - this.m_a1 * j, m = this.m_impulse.Copy(), b = this.m_K.Solve(new f, -q, -r), this.m_impulse.Add(b), this.m_limitState == B.e_atLowerLimit ? this.m_impulse.y = e.Max(this.m_impulse.y, 0) : this.m_limitState == B.e_atUpperLimit && (this.m_impulse.y =
            e.Min(this.m_impulse.y, 0)), q = -q - (this.m_impulse.y - m.y) * this.m_K.col2.x, r = 0 != this.m_K.col1.x ? q / this.m_K.col1.x + m.x : m.x, this.m_impulse.x = r, b.x = this.m_impulse.x - m.x, b.y = this.m_impulse.y - m.y, m = b.x * this.m_perp.x + b.y * this.m_axis.x, q = b.x * this.m_perp.y + b.y * this.m_axis.y, r = b.x * this.m_s1 + b.y * this.m_a1, t = b.x * this.m_s2 + b.y * this.m_a2) : (b = 0 != this.m_K.col1.x ? -q / this.m_K.col1.x : 0, this.m_impulse.x += b, m = b * this.m_perp.x, q = b * this.m_perp.y, r = b * this.m_s1, t = b * this.m_s2);
        g.x -= this.m_invMassA * m;
        g.y -= this.m_invMassA * q;
        j -=
            this.m_invIA * r;
        l.x += this.m_invMassB * m;
        l.y += this.m_invMassB * q;
        n += this.m_invIB * t;
        c.m_linearVelocity.SetV(g);
        c.m_angularVelocity = j;
        d.m_linearVelocity.SetV(l);
        d.m_angularVelocity = n
    };
    u.prototype.SolvePositionConstraints = function() {
        var d = this.m_bodyA,
            g = this.m_bodyB,
            j = d.m_sweep.c,
            l = d.m_sweep.a,
            n = g.m_sweep.c,
            r = g.m_sweep.a,
            u, m = 0,
            q = 0,
            y = 0,
            t = 0,
            z = 0,
            A = 0,
            q = !1,
            B = 0,
            D = c.FromAngle(l),
            y = c.FromAngle(r);
        u = D;
        var A = this.m_localAnchor1.x - this.m_localCenterA.x,
            E = this.m_localAnchor1.y - this.m_localCenterA.y,
            m = u.col1.x * A + u.col2.x *
            E,
            E = u.col1.y * A + u.col2.y * E,
            A = m;
        u = y;
        y = this.m_localAnchor2.x - this.m_localCenterB.x;
        t = this.m_localAnchor2.y - this.m_localCenterB.y;
        m = u.col1.x * y + u.col2.x * t;
        t = u.col1.y * y + u.col2.y * t;
        y = m;
        u = n.x + y - j.x - A;
        m = n.y + t - j.y - E;
        if (this.m_enableLimit) {
            this.m_axis = e.MulMV(D, this.m_localXAxis1);
            this.m_a1 = (u + A) * this.m_axis.y - (m + E) * this.m_axis.x;
            this.m_a2 = y * this.m_axis.y - t * this.m_axis.x;
            var G = this.m_axis.x * u + this.m_axis.y * m;
            e.Abs(this.m_upperTranslation - this.m_lowerTranslation) < 2 * b.b2_linearSlop ? (B = e.Clamp(G, -b.b2_maxLinearCorrection,
                b.b2_maxLinearCorrection), z = e.Abs(G), q = !0) : G <= this.m_lowerTranslation ? (B = e.Clamp(G - this.m_lowerTranslation + b.b2_linearSlop, -b.b2_maxLinearCorrection, 0), z = this.m_lowerTranslation - G, q = !0) : G >= this.m_upperTranslation && (B = e.Clamp(G - this.m_upperTranslation + b.b2_linearSlop, 0, b.b2_maxLinearCorrection), z = G - this.m_upperTranslation, q = !0)
        }
        this.m_perp = e.MulMV(D, this.m_localYAxis1);
        this.m_s1 = (u + A) * this.m_perp.y - (m + E) * this.m_perp.x;
        this.m_s2 = y * this.m_perp.y - t * this.m_perp.x;
        D = new f;
        E = this.m_perp.x * u + this.m_perp.y *
            m;
        z = e.Max(z, e.Abs(E));
        A = 0;
        q ? (q = this.m_invMassA, y = this.m_invMassB, t = this.m_invIA, u = this.m_invIB, this.m_K.col1.x = q + y + t * this.m_s1 * this.m_s1 + u * this.m_s2 * this.m_s2, this.m_K.col1.y = t * this.m_s1 * this.m_a1 + u * this.m_s2 * this.m_a2, this.m_K.col2.x = this.m_K.col1.y, this.m_K.col2.y = q + y + t * this.m_a1 * this.m_a1 + u * this.m_a2 * this.m_a2, this.m_K.Solve(D, -E, -B)) : (q = this.m_invMassA, y = this.m_invMassB, t = this.m_invIA, u = this.m_invIB, B = q + y + t * this.m_s1 * this.m_s1 + u * this.m_s2 * this.m_s2, D.x = 0 != B ? -E / B : 0, D.y = 0);
        B = D.x * this.m_perp.x + D.y *
            this.m_axis.x;
        q = D.x * this.m_perp.y + D.y * this.m_axis.y;
        E = D.x * this.m_s1 + D.y * this.m_a1;
        D = D.x * this.m_s2 + D.y * this.m_a2;
        j.x -= this.m_invMassA * B;
        j.y -= this.m_invMassA * q;
        l -= this.m_invIA * E;
        n.x += this.m_invMassB * B;
        n.y += this.m_invMassB * q;
        r += this.m_invIB * D;
        d.m_sweep.a = l;
        g.m_sweep.a = r;
        d.SynchronizeTransform();
        g.SynchronizeTransform();
        return z <= b.b2_linearSlop && A <= b.b2_angularSlop
    };
    Box2D.inherit(G, Box2D.Dynamics.Joints.b2JointDef);
    G.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
    G.b2LineJointDef = function() {
        Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this,
            arguments);
        this.localAnchorA = new f;
        this.localAnchorB = new f;
        this.localAxisA = new f
    };
    G.prototype.b2LineJointDef = function() {
        this.__super.b2JointDef.call(this);
        this.type = B.e_lineJoint;
        this.localAxisA.Set(1, 0);
        this.enableLimit = !1;
        this.upperTranslation = this.lowerTranslation = 0;
        this.enableMotor = !1;
        this.motorSpeed = this.maxMotorForce = 0
    };
    G.prototype.Initialize = function(b, c, d, e) {
        this.bodyA = b;
        this.bodyB = c;
        this.localAnchorA = this.bodyA.GetLocalPoint(d);
        this.localAnchorB = this.bodyB.GetLocalPoint(d);
        this.localAxisA =
            this.bodyA.GetLocalVector(e)
    };
    Box2D.inherit(K, Box2D.Dynamics.Joints.b2Joint);
    K.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
    K.b2MouseJoint = function() {
        Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
        this.K = new c;
        this.K1 = new c;
        this.K2 = new c;
        this.m_localAnchor = new f;
        this.m_target = new f;
        this.m_impulse = new f;
        this.m_mass = new c;
        this.m_C = new f
    };
    K.prototype.GetAnchorA = function() {
        return this.m_target
    };
    K.prototype.GetAnchorB = function() {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchor)
    };
    K.prototype.GetReactionForce = function(b) {
        void 0 === b && (b = 0);
        return new f(b * this.m_impulse.x, b * this.m_impulse.y)
    };
    K.prototype.GetReactionTorque = function() {
        return 0
    };
    K.prototype.GetTarget = function() {
        return this.m_target
    };
    K.prototype.SetTarget = function(b) {
        !1 == this.m_bodyB.IsAwake() && this.m_bodyB.SetAwake(!0);
        this.m_target = b
    };
    K.prototype.GetMaxForce = function() {
        return this.m_maxForce
    };
    K.prototype.SetMaxForce = function(b) {
        void 0 === b && (b = 0);
        this.m_maxForce = b
    };
    K.prototype.GetFrequency = function() {
        return this.m_frequencyHz
    };
    K.prototype.SetFrequency = function(b) {
        void 0 === b && (b = 0);
        this.m_frequencyHz = b
    };
    K.prototype.GetDampingRatio = function() {
        return this.m_dampingRatio
    };
    K.prototype.SetDampingRatio = function(b) {
        void 0 === b && (b = 0);
        this.m_dampingRatio = b
    };
    K.prototype.b2MouseJoint = function(b) {
        this.__super.b2Joint.call(this, b);
        this.m_target.SetV(b.target);
        var c = this.m_target.x - this.m_bodyB.m_xf.position.x,
            d = this.m_target.y - this.m_bodyB.m_xf.position.y,
            e = this.m_bodyB.m_xf.R;
        this.m_localAnchor.x = c * e.col1.x + d * e.col1.y;
        this.m_localAnchor.y =
            c * e.col2.x + d * e.col2.y;
        this.m_maxForce = b.maxForce;
        this.m_impulse.SetZero();
        this.m_frequencyHz = b.frequencyHz;
        this.m_dampingRatio = b.dampingRatio;
        this.m_gamma = this.m_beta = 0
    };
    K.prototype.InitVelocityConstraints = function(b) {
        var c = this.m_bodyB,
            d = c.GetMass(),
            e = 2 * Math.PI * this.m_frequencyHz,
            f = d * e * e;
        this.m_gamma = b.dt * (2 * d * this.m_dampingRatio * e + b.dt * f);
        this.m_gamma = 0 != this.m_gamma ? 1 / this.m_gamma : 0;
        this.m_beta = b.dt * f * this.m_gamma;
        var f = c.m_xf.R,
            d = this.m_localAnchor.x - c.m_sweep.localCenter.x,
            e = this.m_localAnchor.y -
            c.m_sweep.localCenter.y,
            g = f.col1.x * d + f.col2.x * e,
            e = f.col1.y * d + f.col2.y * e,
            d = g,
            f = c.m_invMass,
            g = c.m_invI;
        this.K1.col1.x = f;
        this.K1.col2.x = 0;
        this.K1.col1.y = 0;
        this.K1.col2.y = f;
        this.K2.col1.x = g * e * e;
        this.K2.col2.x = -g * d * e;
        this.K2.col1.y = -g * d * e;
        this.K2.col2.y = g * d * d;
        this.K.SetM(this.K1);
        this.K.AddM(this.K2);
        this.K.col1.x += this.m_gamma;
        this.K.col2.y += this.m_gamma;
        this.K.GetInverse(this.m_mass);
        this.m_C.x = c.m_sweep.c.x + d - this.m_target.x;
        this.m_C.y = c.m_sweep.c.y + e - this.m_target.y;
        c.m_angularVelocity *= 0.98;
        this.m_impulse.x *=
            b.dtRatio;
        this.m_impulse.y *= b.dtRatio;
        c.m_linearVelocity.x += f * this.m_impulse.x;
        c.m_linearVelocity.y += f * this.m_impulse.y;
        c.m_angularVelocity += g * (d * this.m_impulse.y - e * this.m_impulse.x)
    };
    K.prototype.SolveVelocityConstraints = function(b) {
        var c = this.m_bodyB,
            d, e = 0,
            f = 0;
        d = c.m_xf.R;
        var g = this.m_localAnchor.x - c.m_sweep.localCenter.x,
            j = this.m_localAnchor.y - c.m_sweep.localCenter.y,
            e = d.col1.x * g + d.col2.x * j,
            j = d.col1.y * g + d.col2.y * j,
            g = e,
            e = c.m_linearVelocity.x + -c.m_angularVelocity * j,
            m = c.m_linearVelocity.y + c.m_angularVelocity *
            g;
        d = this.m_mass;
        e = e + this.m_beta * this.m_C.x + this.m_gamma * this.m_impulse.x;
        f = m + this.m_beta * this.m_C.y + this.m_gamma * this.m_impulse.y;
        m = -(d.col1.x * e + d.col2.x * f);
        f = -(d.col1.y * e + d.col2.y * f);
        d = this.m_impulse.x;
        e = this.m_impulse.y;
        this.m_impulse.x += m;
        this.m_impulse.y += f;
        b = b.dt * this.m_maxForce;
        this.m_impulse.LengthSquared() > b * b && this.m_impulse.Multiply(b / this.m_impulse.Length());
        m = this.m_impulse.x - d;
        f = this.m_impulse.y - e;
        c.m_linearVelocity.x += c.m_invMass * m;
        c.m_linearVelocity.y += c.m_invMass * f;
        c.m_angularVelocity +=
            c.m_invI * (g * f - j * m)
    };
    K.prototype.SolvePositionConstraints = function() {
        return !0
    };
    Box2D.inherit(L, Box2D.Dynamics.Joints.b2JointDef);
    L.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
    L.b2MouseJointDef = function() {
        Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
        this.target = new f
    };
    L.prototype.b2MouseJointDef = function() {
        this.__super.b2JointDef.call(this);
        this.type = B.e_mouseJoint;
        this.maxForce = 0;
        this.frequencyHz = 5;
        this.dampingRatio = 0.7
    };
    Box2D.inherit(N, Box2D.Dynamics.Joints.b2Joint);
    N.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
    N.b2PrismaticJoint = function() {
        Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
        this.m_localAnchor1 = new f;
        this.m_localAnchor2 = new f;
        this.m_localXAxis1 = new f;
        this.m_localYAxis1 = new f;
        this.m_axis = new f;
        this.m_perp = new f;
        this.m_K = new d;
        this.m_impulse = new j
    };
    N.prototype.GetAnchorA = function() {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchor1)
    };
    N.prototype.GetAnchorB = function() {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchor2)
    };
    N.prototype.GetReactionForce = function(b) {
        void 0 === b && (b = 0);
        return new f(b * (this.m_impulse.x * this.m_perp.x + (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.x), b * (this.m_impulse.x * this.m_perp.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.y))
    };
    N.prototype.GetReactionTorque = function(b) {
        void 0 === b && (b = 0);
        return b * this.m_impulse.y
    };
    N.prototype.GetJointTranslation = function() {
        var b = this.m_bodyA,
            c = this.m_bodyB,
            d = b.GetWorldPoint(this.m_localAnchor1),
            e = c.GetWorldPoint(this.m_localAnchor2),
            c = e.x - d.x,
            d = e.y - d.y,
            b = b.GetWorldVector(this.m_localXAxis1);
        return b.x * c + b.y * d
    };
    N.prototype.GetJointSpeed = function() {
        var b = this.m_bodyA,
            c = this.m_bodyB,
            d;
        d = b.m_xf.R;
        var e = this.m_localAnchor1.x - b.m_sweep.localCenter.x,
            f = this.m_localAnchor1.y - b.m_sweep.localCenter.y,
            g = d.col1.x * e + d.col2.x * f,
            f = d.col1.y * e + d.col2.y * f,
            e = g;
        d = c.m_xf.R;
        var j = this.m_localAnchor2.x - c.m_sweep.localCenter.x,
            m = this.m_localAnchor2.y - c.m_sweep.localCenter.y,
            g = d.col1.x * j + d.col2.x * m,
            m = d.col1.y * j + d.col2.y * m,
            j = g;
        d = c.m_sweep.c.x + j - (b.m_sweep.c.x +
            e);
        var g = c.m_sweep.c.y + m - (b.m_sweep.c.y + f),
            l = b.GetWorldVector(this.m_localXAxis1),
            n = b.m_linearVelocity,
            t = c.m_linearVelocity,
            b = b.m_angularVelocity,
            c = c.m_angularVelocity;
        return d * -b * l.y + g * b * l.x + (l.x * (t.x + -c * m - n.x - -b * f) + l.y * (t.y + c * j - n.y - b * e))
    };
    N.prototype.IsLimitEnabled = function() {
        return this.m_enableLimit
    };
    N.prototype.EnableLimit = function(b) {
        this.m_bodyA.SetAwake(!0);
        this.m_bodyB.SetAwake(!0);
        this.m_enableLimit = b
    };
    N.prototype.GetLowerLimit = function() {
        return this.m_lowerTranslation
    };
    N.prototype.GetUpperLimit =
        function() {
            return this.m_upperTranslation
        };
    N.prototype.SetLimits = function(b, c) {
        void 0 === b && (b = 0);
        void 0 === c && (c = 0);
        this.m_bodyA.SetAwake(!0);
        this.m_bodyB.SetAwake(!0);
        this.m_lowerTranslation = b;
        this.m_upperTranslation = c
    };
    N.prototype.IsMotorEnabled = function() {
        return this.m_enableMotor
    };
    N.prototype.EnableMotor = function(b) {
        this.m_bodyA.SetAwake(!0);
        this.m_bodyB.SetAwake(!0);
        this.m_enableMotor = b
    };
    N.prototype.SetMotorSpeed = function(b) {
        void 0 === b && (b = 0);
        this.m_bodyA.SetAwake(!0);
        this.m_bodyB.SetAwake(!0);
        this.m_motorSpeed = b
    };
    N.prototype.GetMotorSpeed = function() {
        return this.m_motorSpeed
    };
    N.prototype.SetMaxMotorForce = function(b) {
        void 0 === b && (b = 0);
        this.m_bodyA.SetAwake(!0);
        this.m_bodyB.SetAwake(!0);
        this.m_maxMotorForce = b
    };
    N.prototype.GetMotorForce = function() {
        return this.m_motorImpulse
    };
    N.prototype.b2PrismaticJoint = function(b) {
        this.__super.b2Joint.call(this, b);
        this.m_localAnchor1.SetV(b.localAnchorA);
        this.m_localAnchor2.SetV(b.localAnchorB);
        this.m_localXAxis1.SetV(b.localAxisA);
        this.m_localYAxis1.x = -this.m_localXAxis1.y;
        this.m_localYAxis1.y = this.m_localXAxis1.x;
        this.m_refAngle = b.referenceAngle;
        this.m_impulse.SetZero();
        this.m_motorImpulse = this.m_motorMass = 0;
        this.m_lowerTranslation = b.lowerTranslation;
        this.m_upperTranslation = b.upperTranslation;
        this.m_maxMotorForce = b.maxMotorForce;
        this.m_motorSpeed = b.motorSpeed;
        this.m_enableLimit = b.enableLimit;
        this.m_enableMotor = b.enableMotor;
        this.m_limitState = B.e_inactiveLimit;
        this.m_axis.SetZero();
        this.m_perp.SetZero()
    };
    N.prototype.InitVelocityConstraints = function(c) {
        var d = this.m_bodyA,
            f = this.m_bodyB,
            g, j = 0;
        this.m_localCenterA.SetV(d.GetLocalCenter());
        this.m_localCenterB.SetV(f.GetLocalCenter());
        var l = d.GetTransform();
        f.GetTransform();
        g = d.m_xf.R;
        var n = this.m_localAnchor1.x - this.m_localCenterA.x,
            m = this.m_localAnchor1.y - this.m_localCenterA.y,
            j = g.col1.x * n + g.col2.x * m,
            m = g.col1.y * n + g.col2.y * m,
            n = j;
        g = f.m_xf.R;
        var q = this.m_localAnchor2.x - this.m_localCenterB.x,
            r = this.m_localAnchor2.y - this.m_localCenterB.y,
            j = g.col1.x * q + g.col2.x * r,
            r = g.col1.y * q + g.col2.y * r,
            q = j;
        g = f.m_sweep.c.x + q - d.m_sweep.c.x -
            n;
        j = f.m_sweep.c.y + r - d.m_sweep.c.y - m;
        this.m_invMassA = d.m_invMass;
        this.m_invMassB = f.m_invMass;
        this.m_invIA = d.m_invI;
        this.m_invIB = f.m_invI;
        this.m_axis.SetV(e.MulMV(l.R, this.m_localXAxis1));
        this.m_a1 = (g + n) * this.m_axis.y - (j + m) * this.m_axis.x;
        this.m_a2 = q * this.m_axis.y - r * this.m_axis.x;
        this.m_motorMass = this.m_invMassA + this.m_invMassB + this.m_invIA * this.m_a1 * this.m_a1 + this.m_invIB * this.m_a2 * this.m_a2;
        this.m_motorMass > Number.MIN_VALUE && (this.m_motorMass = 1 / this.m_motorMass);
        this.m_perp.SetV(e.MulMV(l.R, this.m_localYAxis1));
        this.m_s1 = (g + n) * this.m_perp.y - (j + m) * this.m_perp.x;
        this.m_s2 = q * this.m_perp.y - r * this.m_perp.x;
        l = this.m_invMassA;
        n = this.m_invMassB;
        m = this.m_invIA;
        q = this.m_invIB;
        this.m_K.col1.x = l + n + m * this.m_s1 * this.m_s1 + q * this.m_s2 * this.m_s2;
        this.m_K.col1.y = m * this.m_s1 + q * this.m_s2;
        this.m_K.col1.z = m * this.m_s1 * this.m_a1 + q * this.m_s2 * this.m_a2;
        this.m_K.col2.x = this.m_K.col1.y;
        this.m_K.col2.y = m + q;
        this.m_K.col2.z = m * this.m_a1 + q * this.m_a2;
        this.m_K.col3.x = this.m_K.col1.z;
        this.m_K.col3.y = this.m_K.col2.z;
        this.m_K.col3.z = l + n + m * this.m_a1 *
            this.m_a1 + q * this.m_a2 * this.m_a2;
        this.m_enableLimit ? (g = this.m_axis.x * g + this.m_axis.y * j, e.Abs(this.m_upperTranslation - this.m_lowerTranslation) < 2 * b.b2_linearSlop ? this.m_limitState = B.e_equalLimits : g <= this.m_lowerTranslation ? this.m_limitState != B.e_atLowerLimit && (this.m_limitState = B.e_atLowerLimit, this.m_impulse.z = 0) : g >= this.m_upperTranslation ? this.m_limitState != B.e_atUpperLimit && (this.m_limitState = B.e_atUpperLimit, this.m_impulse.z = 0) : (this.m_limitState = B.e_inactiveLimit, this.m_impulse.z = 0)) : this.m_limitState =
            B.e_inactiveLimit;
        !1 == this.m_enableMotor && (this.m_motorImpulse = 0);
        c.warmStarting ? (this.m_impulse.x *= c.dtRatio, this.m_impulse.y *= c.dtRatio, this.m_motorImpulse *= c.dtRatio, c = this.m_impulse.x * this.m_perp.x + (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.x, g = this.m_impulse.x * this.m_perp.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.y, j = this.m_impulse.x * this.m_s1 + this.m_impulse.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_a1, l = this.m_impulse.x * this.m_s2 + this.m_impulse.y + (this.m_motorImpulse +
            this.m_impulse.z) * this.m_a2, d.m_linearVelocity.x -= this.m_invMassA * c, d.m_linearVelocity.y -= this.m_invMassA * g, d.m_angularVelocity -= this.m_invIA * j, f.m_linearVelocity.x += this.m_invMassB * c, f.m_linearVelocity.y += this.m_invMassB * g, f.m_angularVelocity += this.m_invIB * l) : (this.m_impulse.SetZero(), this.m_motorImpulse = 0)
    };
    N.prototype.SolveVelocityConstraints = function(b) {
        var c = this.m_bodyA,
            d = this.m_bodyB,
            g = c.m_linearVelocity,
            l = c.m_angularVelocity,
            n = d.m_linearVelocity,
            r = d.m_angularVelocity,
            m = 0,
            q = 0,
            u = 0,
            t = 0;
        this.m_enableMotor &&
            this.m_limitState != B.e_equalLimits && (t = this.m_motorMass * (this.m_motorSpeed - (this.m_axis.x * (n.x - g.x) + this.m_axis.y * (n.y - g.y) + this.m_a2 * r - this.m_a1 * l)), m = this.m_motorImpulse, b = b.dt * this.m_maxMotorForce, this.m_motorImpulse = e.Clamp(this.m_motorImpulse + t, -b, b), t = this.m_motorImpulse - m, m = t * this.m_axis.x, q = t * this.m_axis.y, u = t * this.m_a1, t *= this.m_a2, g.x -= this.m_invMassA * m, g.y -= this.m_invMassA * q, l -= this.m_invIA * u, n.x += this.m_invMassB * m, n.y += this.m_invMassB * q, r += this.m_invIB * t);
        u = this.m_perp.x * (n.x - g.x) + this.m_perp.y *
            (n.y - g.y) + this.m_s2 * r - this.m_s1 * l;
        q = r - l;
        this.m_enableLimit && this.m_limitState != B.e_inactiveLimit ? (b = this.m_axis.x * (n.x - g.x) + this.m_axis.y * (n.y - g.y) + this.m_a2 * r - this.m_a1 * l, m = this.m_impulse.Copy(), b = this.m_K.Solve33(new j, -u, -q, -b), this.m_impulse.Add(b), this.m_limitState == B.e_atLowerLimit ? this.m_impulse.z = e.Max(this.m_impulse.z, 0) : this.m_limitState == B.e_atUpperLimit && (this.m_impulse.z = e.Min(this.m_impulse.z, 0)), u = -u - (this.m_impulse.z - m.z) * this.m_K.col3.x, q = -q - (this.m_impulse.z - m.z) * this.m_K.col3.y,
            q = this.m_K.Solve22(new f, u, q), q.x += m.x, q.y += m.y, this.m_impulse.x = q.x, this.m_impulse.y = q.y, b.x = this.m_impulse.x - m.x, b.y = this.m_impulse.y - m.y, b.z = this.m_impulse.z - m.z, m = b.x * this.m_perp.x + b.z * this.m_axis.x, q = b.x * this.m_perp.y + b.z * this.m_axis.y, u = b.x * this.m_s1 + b.y + b.z * this.m_a1, t = b.x * this.m_s2 + b.y + b.z * this.m_a2) : (b = this.m_K.Solve22(new f, -u, -q), this.m_impulse.x += b.x, this.m_impulse.y += b.y, m = b.x * this.m_perp.x, q = b.x * this.m_perp.y, u = b.x * this.m_s1 + b.y, t = b.x * this.m_s2 + b.y);
        g.x -= this.m_invMassA * m;
        g.y -= this.m_invMassA *
            q;
        l -= this.m_invIA * u;
        n.x += this.m_invMassB * m;
        n.y += this.m_invMassB * q;
        r += this.m_invIB * t;
        c.m_linearVelocity.SetV(g);
        c.m_angularVelocity = l;
        d.m_linearVelocity.SetV(n);
        d.m_angularVelocity = r
    };
    N.prototype.SolvePositionConstraints = function() {
        var d = this.m_bodyA,
            g = this.m_bodyB,
            l = d.m_sweep.c,
            n = d.m_sweep.a,
            r = g.m_sweep.c,
            u = g.m_sweep.a,
            y, m = 0,
            q = 0,
            z = 0,
            t = 0,
            A = 0,
            q = !1,
            B = 0,
            D = c.FromAngle(n),
            E = c.FromAngle(u);
        y = D;
        var A = this.m_localAnchor1.x - this.m_localCenterA.x,
            G = this.m_localAnchor1.y - this.m_localCenterA.y,
            m = y.col1.x * A + y.col2.x *
            G,
            G = y.col1.y * A + y.col2.y * G,
            A = m;
        y = E;
        E = this.m_localAnchor2.x - this.m_localCenterB.x;
        z = this.m_localAnchor2.y - this.m_localCenterB.y;
        m = y.col1.x * E + y.col2.x * z;
        z = y.col1.y * E + y.col2.y * z;
        E = m;
        y = r.x + E - l.x - A;
        m = r.y + z - l.y - G;
        if (this.m_enableLimit) {
            this.m_axis = e.MulMV(D, this.m_localXAxis1);
            this.m_a1 = (y + A) * this.m_axis.y - (m + G) * this.m_axis.x;
            this.m_a2 = E * this.m_axis.y - z * this.m_axis.x;
            var I = this.m_axis.x * y + this.m_axis.y * m;
            e.Abs(this.m_upperTranslation - this.m_lowerTranslation) < 2 * b.b2_linearSlop ? (B = e.Clamp(I, -b.b2_maxLinearCorrection,
                b.b2_maxLinearCorrection), t = e.Abs(I), q = !0) : I <= this.m_lowerTranslation ? (B = e.Clamp(I - this.m_lowerTranslation + b.b2_linearSlop, -b.b2_maxLinearCorrection, 0), t = this.m_lowerTranslation - I, q = !0) : I >= this.m_upperTranslation && (B = e.Clamp(I - this.m_upperTranslation + b.b2_linearSlop, 0, b.b2_maxLinearCorrection), t = I - this.m_upperTranslation, q = !0)
        }
        this.m_perp = e.MulMV(D, this.m_localYAxis1);
        this.m_s1 = (y + A) * this.m_perp.y - (m + G) * this.m_perp.x;
        this.m_s2 = E * this.m_perp.y - z * this.m_perp.x;
        D = new j;
        G = this.m_perp.x * y + this.m_perp.y *
            m;
        E = u - n - this.m_refAngle;
        t = e.Max(t, e.Abs(G));
        A = e.Abs(E);
        q ? (q = this.m_invMassA, z = this.m_invMassB, y = this.m_invIA, m = this.m_invIB, this.m_K.col1.x = q + z + y * this.m_s1 * this.m_s1 + m * this.m_s2 * this.m_s2, this.m_K.col1.y = y * this.m_s1 + m * this.m_s2, this.m_K.col1.z = y * this.m_s1 * this.m_a1 + m * this.m_s2 * this.m_a2, this.m_K.col2.x = this.m_K.col1.y, this.m_K.col2.y = y + m, this.m_K.col2.z = y * this.m_a1 + m * this.m_a2, this.m_K.col3.x = this.m_K.col1.z, this.m_K.col3.y = this.m_K.col2.z, this.m_K.col3.z = q + z + y * this.m_a1 * this.m_a1 + m * this.m_a2 * this.m_a2,
            this.m_K.Solve33(D, -G, -E, -B)) : (q = this.m_invMassA, z = this.m_invMassB, y = this.m_invIA, m = this.m_invIB, B = y * this.m_s1 + m * this.m_s2, I = y + m, this.m_K.col1.Set(q + z + y * this.m_s1 * this.m_s1 + m * this.m_s2 * this.m_s2, B, 0), this.m_K.col2.Set(B, I, 0), B = this.m_K.Solve22(new f, -G, -E), D.x = B.x, D.y = B.y, D.z = 0);
        B = D.x * this.m_perp.x + D.z * this.m_axis.x;
        q = D.x * this.m_perp.y + D.z * this.m_axis.y;
        G = D.x * this.m_s1 + D.y + D.z * this.m_a1;
        D = D.x * this.m_s2 + D.y + D.z * this.m_a2;
        l.x -= this.m_invMassA * B;
        l.y -= this.m_invMassA * q;
        n -= this.m_invIA * G;
        r.x += this.m_invMassB *
            B;
        r.y += this.m_invMassB * q;
        u += this.m_invIB * D;
        d.m_sweep.a = n;
        g.m_sweep.a = u;
        d.SynchronizeTransform();
        g.SynchronizeTransform();
        return t <= b.b2_linearSlop && A <= b.b2_angularSlop
    };
    Box2D.inherit(Q, Box2D.Dynamics.Joints.b2JointDef);
    Q.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
    Q.b2PrismaticJointDef = function() {
        Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
        this.localAnchorA = new f;
        this.localAnchorB = new f;
        this.localAxisA = new f
    };
    Q.prototype.b2PrismaticJointDef = function() {
        this.__super.b2JointDef.call(this);
        this.type = B.e_prismaticJoint;
        this.localAxisA.Set(1, 0);
        this.referenceAngle = 0;
        this.enableLimit = !1;
        this.upperTranslation = this.lowerTranslation = 0;
        this.enableMotor = !1;
        this.motorSpeed = this.maxMotorForce = 0
    };
    Q.prototype.Initialize = function(b, c, d, e) {
        this.bodyA = b;
        this.bodyB = c;
        this.localAnchorA = this.bodyA.GetLocalPoint(d);
        this.localAnchorB = this.bodyB.GetLocalPoint(d);
        this.localAxisA = this.bodyA.GetLocalVector(e);
        this.referenceAngle = this.bodyB.GetAngle() - this.bodyA.GetAngle()
    };
    Box2D.inherit(I, Box2D.Dynamics.Joints.b2Joint);
    I.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
    I.b2PulleyJoint = function() {
        Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
        this.m_groundAnchor1 = new f;
        this.m_groundAnchor2 = new f;
        this.m_localAnchor1 = new f;
        this.m_localAnchor2 = new f;
        this.m_u1 = new f;
        this.m_u2 = new f
    };
    I.prototype.GetAnchorA = function() {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchor1)
    };
    I.prototype.GetAnchorB = function() {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchor2)
    };
    I.prototype.GetReactionForce = function(b) {
        void 0 ===
            b && (b = 0);
        return new f(b * this.m_impulse * this.m_u2.x, b * this.m_impulse * this.m_u2.y)
    };
    I.prototype.GetReactionTorque = function() {
        return 0
    };
    I.prototype.GetGroundAnchorA = function() {
        var b = this.m_ground.m_xf.position.Copy();
        b.Add(this.m_groundAnchor1);
        return b
    };
    I.prototype.GetGroundAnchorB = function() {
        var b = this.m_ground.m_xf.position.Copy();
        b.Add(this.m_groundAnchor2);
        return b
    };
    I.prototype.GetLength1 = function() {
        var b = this.m_bodyA.GetWorldPoint(this.m_localAnchor1),
            c = b.x - (this.m_ground.m_xf.position.x + this.m_groundAnchor1.x),
            b = b.y - (this.m_ground.m_xf.position.y + this.m_groundAnchor1.y);
        return Math.sqrt(c * c + b * b)
    };
    I.prototype.GetLength2 = function() {
        var b = this.m_bodyB.GetWorldPoint(this.m_localAnchor2),
            c = b.x - (this.m_ground.m_xf.position.x + this.m_groundAnchor2.x),
            b = b.y - (this.m_ground.m_xf.position.y + this.m_groundAnchor2.y);
        return Math.sqrt(c * c + b * b)
    };
    I.prototype.GetRatio = function() {
        return this.m_ratio
    };
    I.prototype.b2PulleyJoint = function(b) {
        this.__super.b2Joint.call(this, b);
        this.m_ground = this.m_bodyA.m_world.m_groundBody;
        this.m_groundAnchor1.x =
            b.groundAnchorA.x - this.m_ground.m_xf.position.x;
        this.m_groundAnchor1.y = b.groundAnchorA.y - this.m_ground.m_xf.position.y;
        this.m_groundAnchor2.x = b.groundAnchorB.x - this.m_ground.m_xf.position.x;
        this.m_groundAnchor2.y = b.groundAnchorB.y - this.m_ground.m_xf.position.y;
        this.m_localAnchor1.SetV(b.localAnchorA);
        this.m_localAnchor2.SetV(b.localAnchorB);
        this.m_ratio = b.ratio;
        this.m_constant = b.lengthA + this.m_ratio * b.lengthB;
        this.m_maxLength1 = e.Min(b.maxLengthA, this.m_constant - this.m_ratio * I.b2_minPulleyLength);
        this.m_maxLength2 = e.Min(b.maxLengthB, (this.m_constant - I.b2_minPulleyLength) / this.m_ratio);
        this.m_limitImpulse2 = this.m_limitImpulse1 = this.m_impulse = 0
    };
    I.prototype.InitVelocityConstraints = function(c) {
        var d = this.m_bodyA,
            e = this.m_bodyB,
            f;
        f = d.m_xf.R;
        var g = this.m_localAnchor1.x - d.m_sweep.localCenter.x,
            j = this.m_localAnchor1.y - d.m_sweep.localCenter.y,
            l = f.col1.x * g + f.col2.x * j,
            j = f.col1.y * g + f.col2.y * j,
            g = l;
        f = e.m_xf.R;
        var m = this.m_localAnchor2.x - e.m_sweep.localCenter.x,
            n = this.m_localAnchor2.y - e.m_sweep.localCenter.y,
            l = f.col1.x * m + f.col2.x * n,
            n = f.col1.y * m + f.col2.y * n,
            m = l;
        f = e.m_sweep.c.x + m;
        var l = e.m_sweep.c.y + n,
            r = this.m_ground.m_xf.position.x + this.m_groundAnchor2.x,
            t = this.m_ground.m_xf.position.y + this.m_groundAnchor2.y;
        this.m_u1.Set(d.m_sweep.c.x + g - (this.m_ground.m_xf.position.x + this.m_groundAnchor1.x), d.m_sweep.c.y + j - (this.m_ground.m_xf.position.y + this.m_groundAnchor1.y));
        this.m_u2.Set(f - r, l - t);
        f = this.m_u1.Length();
        l = this.m_u2.Length();
        f > b.b2_linearSlop ? this.m_u1.Multiply(1 / f) : this.m_u1.SetZero();
        l > b.b2_linearSlop ?
            this.m_u2.Multiply(1 / l) : this.m_u2.SetZero();
        0 < this.m_constant - f - this.m_ratio * l ? (this.m_state = B.e_inactiveLimit, this.m_impulse = 0) : this.m_state = B.e_atUpperLimit;
        f < this.m_maxLength1 ? (this.m_limitState1 = B.e_inactiveLimit, this.m_limitImpulse1 = 0) : this.m_limitState1 = B.e_atUpperLimit;
        l < this.m_maxLength2 ? (this.m_limitState2 = B.e_inactiveLimit, this.m_limitImpulse2 = 0) : this.m_limitState2 = B.e_atUpperLimit;
        f = g * this.m_u1.y - j * this.m_u1.x;
        l = m * this.m_u2.y - n * this.m_u2.x;
        this.m_limitMass1 = d.m_invMass + d.m_invI * f * f;
        this.m_limitMass2 =
            e.m_invMass + e.m_invI * l * l;
        this.m_pulleyMass = this.m_limitMass1 + this.m_ratio * this.m_ratio * this.m_limitMass2;
        this.m_limitMass1 = 1 / this.m_limitMass1;
        this.m_limitMass2 = 1 / this.m_limitMass2;
        this.m_pulleyMass = 1 / this.m_pulleyMass;
        c.warmStarting ? (this.m_impulse *= c.dtRatio, this.m_limitImpulse1 *= c.dtRatio, this.m_limitImpulse2 *= c.dtRatio, c = (-this.m_impulse - this.m_limitImpulse1) * this.m_u1.x, f = (-this.m_impulse - this.m_limitImpulse1) * this.m_u1.y, l = (-this.m_ratio * this.m_impulse - this.m_limitImpulse2) * this.m_u2.x, r = (-this.m_ratio *
            this.m_impulse - this.m_limitImpulse2) * this.m_u2.y, d.m_linearVelocity.x += d.m_invMass * c, d.m_linearVelocity.y += d.m_invMass * f, d.m_angularVelocity += d.m_invI * (g * f - j * c), e.m_linearVelocity.x += e.m_invMass * l, e.m_linearVelocity.y += e.m_invMass * r, e.m_angularVelocity += e.m_invI * (m * r - n * l)) : this.m_limitImpulse2 = this.m_limitImpulse1 = this.m_impulse = 0
    };
    I.prototype.SolveVelocityConstraints = function() {
        var b = this.m_bodyA,
            c = this.m_bodyB,
            d;
        d = b.m_xf.R;
        var f = this.m_localAnchor1.x - b.m_sweep.localCenter.x,
            g = this.m_localAnchor1.y -
            b.m_sweep.localCenter.y,
            j = d.col1.x * f + d.col2.x * g,
            g = d.col1.y * f + d.col2.y * g,
            f = j;
        d = c.m_xf.R;
        var l = this.m_localAnchor2.x - c.m_sweep.localCenter.x,
            m = this.m_localAnchor2.y - c.m_sweep.localCenter.y,
            j = d.col1.x * l + d.col2.x * m,
            m = d.col1.y * l + d.col2.y * m,
            l = j,
            n = 0,
            r = 0;
        this.m_state == B.e_atUpperLimit && (d = b.m_linearVelocity.x + -b.m_angularVelocity * g, j = b.m_linearVelocity.y + b.m_angularVelocity * f, n = c.m_linearVelocity.x + -c.m_angularVelocity * m, r = c.m_linearVelocity.y + c.m_angularVelocity * l, d = -(this.m_u1.x * d + this.m_u1.y * j) - this.m_ratio *
            (this.m_u2.x * n + this.m_u2.y * r), r = this.m_pulleyMass * -d, d = this.m_impulse, this.m_impulse = e.Max(0, this.m_impulse + r), r = this.m_impulse - d, d = -r * this.m_u1.x, j = -r * this.m_u1.y, n = -this.m_ratio * r * this.m_u2.x, r = -this.m_ratio * r * this.m_u2.y, b.m_linearVelocity.x += b.m_invMass * d, b.m_linearVelocity.y += b.m_invMass * j, b.m_angularVelocity += b.m_invI * (f * j - g * d), c.m_linearVelocity.x += c.m_invMass * n, c.m_linearVelocity.y += c.m_invMass * r, c.m_angularVelocity += c.m_invI * (l * r - m * n));
        this.m_limitState1 == B.e_atUpperLimit && (d = b.m_linearVelocity.x +
            -b.m_angularVelocity * g, j = b.m_linearVelocity.y + b.m_angularVelocity * f, d = -(this.m_u1.x * d + this.m_u1.y * j), r = -this.m_limitMass1 * d, d = this.m_limitImpulse1, this.m_limitImpulse1 = e.Max(0, this.m_limitImpulse1 + r), r = this.m_limitImpulse1 - d, d = -r * this.m_u1.x, j = -r * this.m_u1.y, b.m_linearVelocity.x += b.m_invMass * d, b.m_linearVelocity.y += b.m_invMass * j, b.m_angularVelocity += b.m_invI * (f * j - g * d));
        this.m_limitState2 == B.e_atUpperLimit && (n = c.m_linearVelocity.x + -c.m_angularVelocity * m, r = c.m_linearVelocity.y + c.m_angularVelocity * l,
            d = -(this.m_u2.x * n + this.m_u2.y * r), r = -this.m_limitMass2 * d, d = this.m_limitImpulse2, this.m_limitImpulse2 = e.Max(0, this.m_limitImpulse2 + r), r = this.m_limitImpulse2 - d, n = -r * this.m_u2.x, r = -r * this.m_u2.y, c.m_linearVelocity.x += c.m_invMass * n, c.m_linearVelocity.y += c.m_invMass * r, c.m_angularVelocity += c.m_invI * (l * r - m * n))
    };
    I.prototype.SolvePositionConstraints = function() {
        var c = this.m_bodyA,
            d = this.m_bodyB,
            f, g = this.m_ground.m_xf.position.x + this.m_groundAnchor1.x,
            j = this.m_ground.m_xf.position.y + this.m_groundAnchor1.y,
            l =
            this.m_ground.m_xf.position.x + this.m_groundAnchor2.x,
            n = this.m_ground.m_xf.position.y + this.m_groundAnchor2.y,
            m = 0,
            q = 0,
            r = 0,
            t = 0,
            u = 0,
            y = 0,
            z = 0,
            A = 0;
        this.m_state == B.e_atUpperLimit && (f = c.m_xf.R, m = this.m_localAnchor1.x - c.m_sweep.localCenter.x, q = this.m_localAnchor1.y - c.m_sweep.localCenter.y, u = f.col1.x * m + f.col2.x * q, q = f.col1.y * m + f.col2.y * q, m = u, f = d.m_xf.R, r = this.m_localAnchor2.x - d.m_sweep.localCenter.x, t = this.m_localAnchor2.y - d.m_sweep.localCenter.y, u = f.col1.x * r + f.col2.x * t, t = f.col1.y * r + f.col2.y * t, r = u, f = c.m_sweep.c.x +
            m, u = c.m_sweep.c.y + q, y = d.m_sweep.c.x + r, z = d.m_sweep.c.y + t, this.m_u1.Set(f - g, u - j), this.m_u2.Set(y - l, z - n), f = this.m_u1.Length(), u = this.m_u2.Length(), f > b.b2_linearSlop ? this.m_u1.Multiply(1 / f) : this.m_u1.SetZero(), u > b.b2_linearSlop ? this.m_u2.Multiply(1 / u) : this.m_u2.SetZero(), f = this.m_constant - f - this.m_ratio * u, A = e.Max(A, -f), f = e.Clamp(f + b.b2_linearSlop, -b.b2_maxLinearCorrection, 0), z = -this.m_pulleyMass * f, f = -z * this.m_u1.x, u = -z * this.m_u1.y, y = -this.m_ratio * z * this.m_u2.x, z = -this.m_ratio * z * this.m_u2.y, c.m_sweep.c.x +=
            c.m_invMass * f, c.m_sweep.c.y += c.m_invMass * u, c.m_sweep.a += c.m_invI * (m * u - q * f), d.m_sweep.c.x += d.m_invMass * y, d.m_sweep.c.y += d.m_invMass * z, d.m_sweep.a += d.m_invI * (r * z - t * y), c.SynchronizeTransform(), d.SynchronizeTransform());
        this.m_limitState1 == B.e_atUpperLimit && (f = c.m_xf.R, m = this.m_localAnchor1.x - c.m_sweep.localCenter.x, q = this.m_localAnchor1.y - c.m_sweep.localCenter.y, u = f.col1.x * m + f.col2.x * q, q = f.col1.y * m + f.col2.y * q, m = u, f = c.m_sweep.c.x + m, u = c.m_sweep.c.y + q, this.m_u1.Set(f - g, u - j), f = this.m_u1.Length(), f > b.b2_linearSlop ?
            (this.m_u1.x *= 1 / f, this.m_u1.y *= 1 / f) : this.m_u1.SetZero(), f = this.m_maxLength1 - f, A = e.Max(A, -f), f = e.Clamp(f + b.b2_linearSlop, -b.b2_maxLinearCorrection, 0), z = -this.m_limitMass1 * f, f = -z * this.m_u1.x, u = -z * this.m_u1.y, c.m_sweep.c.x += c.m_invMass * f, c.m_sweep.c.y += c.m_invMass * u, c.m_sweep.a += c.m_invI * (m * u - q * f), c.SynchronizeTransform());
        this.m_limitState2 == B.e_atUpperLimit && (f = d.m_xf.R, r = this.m_localAnchor2.x - d.m_sweep.localCenter.x, t = this.m_localAnchor2.y - d.m_sweep.localCenter.y, u = f.col1.x * r + f.col2.x * t, t = f.col1.y *
            r + f.col2.y * t, r = u, y = d.m_sweep.c.x + r, z = d.m_sweep.c.y + t, this.m_u2.Set(y - l, z - n), u = this.m_u2.Length(), u > b.b2_linearSlop ? (this.m_u2.x *= 1 / u, this.m_u2.y *= 1 / u) : this.m_u2.SetZero(), f = this.m_maxLength2 - u, A = e.Max(A, -f), f = e.Clamp(f + b.b2_linearSlop, -b.b2_maxLinearCorrection, 0), z = -this.m_limitMass2 * f, y = -z * this.m_u2.x, z = -z * this.m_u2.y, d.m_sweep.c.x += d.m_invMass * y, d.m_sweep.c.y += d.m_invMass * z, d.m_sweep.a += d.m_invI * (r * z - t * y), d.SynchronizeTransform());
        return A < b.b2_linearSlop
    };
    Box2D.postDefs.push(function() {
        Box2D.Dynamics.Joints.b2PulleyJoint.b2_minPulleyLength =
            2
    });
    Box2D.inherit(fa, Box2D.Dynamics.Joints.b2JointDef);
    fa.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
    fa.b2PulleyJointDef = function() {
        Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
        this.groundAnchorA = new f;
        this.groundAnchorB = new f;
        this.localAnchorA = new f;
        this.localAnchorB = new f
    };
    fa.prototype.b2PulleyJointDef = function() {
        this.__super.b2JointDef.call(this);
        this.type = B.e_pulleyJoint;
        this.groundAnchorA.Set(-1, 1);
        this.groundAnchorB.Set(1, 1);
        this.localAnchorA.Set(-1, 0);
        this.localAnchorB.Set(1, 0);
        this.maxLengthB = this.lengthB = this.maxLengthA = this.lengthA = 0;
        this.ratio = 1;
        this.collideConnected = !0
    };
    fa.prototype.Initialize = function(b, c, d, e, f, g, j) {
        void 0 === j && (j = 0);
        this.bodyA = b;
        this.bodyB = c;
        this.groundAnchorA.SetV(d);
        this.groundAnchorB.SetV(e);
        this.localAnchorA = this.bodyA.GetLocalPoint(f);
        this.localAnchorB = this.bodyB.GetLocalPoint(g);
        b = f.x - d.x;
        d = f.y - d.y;
        this.lengthA = Math.sqrt(b * b + d * d);
        d = g.x - e.x;
        e = g.y - e.y;
        this.lengthB = Math.sqrt(d * d + e * e);
        this.ratio = j;
        j = this.lengthA + this.ratio *
            this.lengthB;
        this.maxLengthA = j - this.ratio * I.b2_minPulleyLength;
        this.maxLengthB = (j - I.b2_minPulleyLength) / this.ratio
    };
    Box2D.inherit(O, Box2D.Dynamics.Joints.b2Joint);
    O.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
    O.b2RevoluteJoint = function() {
        Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
        this.K = new c;
        this.K1 = new c;
        this.K2 = new c;
        this.K3 = new c;
        this.impulse3 = new j;
        this.impulse2 = new f;
        this.reduced = new f;
        this.m_localAnchor1 = new f;
        this.m_localAnchor2 = new f;
        this.m_impulse = new j;
        this.m_mass =
            new d
    };
    O.prototype.GetAnchorA = function() {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchor1)
    };
    O.prototype.GetAnchorB = function() {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchor2)
    };
    O.prototype.GetReactionForce = function(b) {
        void 0 === b && (b = 0);
        return new f(b * this.m_impulse.x, b * this.m_impulse.y)
    };
    O.prototype.GetReactionTorque = function(b) {
        void 0 === b && (b = 0);
        return b * this.m_impulse.z
    };
    O.prototype.GetJointAngle = function() {
        return this.m_bodyB.m_sweep.a - this.m_bodyA.m_sweep.a - this.m_referenceAngle
    };
    O.prototype.GetJointSpeed =
        function() {
            return this.m_bodyB.m_angularVelocity - this.m_bodyA.m_angularVelocity
        };
    O.prototype.IsLimitEnabled = function() {
        return this.m_enableLimit
    };
    O.prototype.EnableLimit = function(b) {
        this.m_enableLimit = b
    };
    O.prototype.GetLowerLimit = function() {
        return this.m_lowerAngle
    };
    O.prototype.GetUpperLimit = function() {
        return this.m_upperAngle
    };
    O.prototype.SetLimits = function(b, c) {
        void 0 === b && (b = 0);
        void 0 === c && (c = 0);
        this.m_lowerAngle = b;
        this.m_upperAngle = c
    };
    O.prototype.IsMotorEnabled = function() {
        this.m_bodyA.SetAwake(!0);
        this.m_bodyB.SetAwake(!0);
        return this.m_enableMotor
    };
    O.prototype.EnableMotor = function(b) {
        this.m_enableMotor = b
    };
    O.prototype.SetMotorSpeed = function(b) {
        void 0 === b && (b = 0);
        this.m_bodyA.SetAwake(!0);
        this.m_bodyB.SetAwake(!0);
        this.m_motorSpeed = b
    };
    O.prototype.GetMotorSpeed = function() {
        return this.m_motorSpeed
    };
    O.prototype.SetMaxMotorTorque = function(b) {
        void 0 === b && (b = 0);
        this.m_maxMotorTorque = b
    };
    O.prototype.GetMotorTorque = function() {
        return this.m_maxMotorTorque
    };
    O.prototype.b2RevoluteJoint = function(b) {
        this.__super.b2Joint.call(this,
            b);
        this.m_localAnchor1.SetV(b.localAnchorA);
        this.m_localAnchor2.SetV(b.localAnchorB);
        this.m_referenceAngle = b.referenceAngle;
        this.m_impulse.SetZero();
        this.m_motorImpulse = 0;
        this.m_lowerAngle = b.lowerAngle;
        this.m_upperAngle = b.upperAngle;
        this.m_maxMotorTorque = b.maxMotorTorque;
        this.m_motorSpeed = b.motorSpeed;
        this.m_enableLimit = b.enableLimit;
        this.m_enableMotor = b.enableMotor;
        this.m_limitState = B.e_inactiveLimit
    };
    O.prototype.InitVelocityConstraints = function(c) {
        var d = this.m_bodyA,
            f = this.m_bodyB,
            g, j = 0;
        g = d.m_xf.R;
        var l = this.m_localAnchor1.x - d.m_sweep.localCenter.x,
            n = this.m_localAnchor1.y - d.m_sweep.localCenter.y,
            j = g.col1.x * l + g.col2.x * n,
            n = g.col1.y * l + g.col2.y * n,
            l = j;
        g = f.m_xf.R;
        var m = this.m_localAnchor2.x - f.m_sweep.localCenter.x,
            q = this.m_localAnchor2.y - f.m_sweep.localCenter.y,
            j = g.col1.x * m + g.col2.x * q,
            q = g.col1.y * m + g.col2.y * q,
            m = j;
        g = d.m_invMass;
        var j = f.m_invMass,
            r = d.m_invI,
            t = f.m_invI;
        this.m_mass.col1.x = g + j + n * n * r + q * q * t;
        this.m_mass.col2.x = -n * l * r - q * m * t;
        this.m_mass.col3.x = -n * r - q * t;
        this.m_mass.col1.y = this.m_mass.col2.x;
        this.m_mass.col2.y = g + j + l * l * r + m * m * t;
        this.m_mass.col3.y = l * r + m * t;
        this.m_mass.col1.z = this.m_mass.col3.x;
        this.m_mass.col2.z = this.m_mass.col3.y;
        this.m_mass.col3.z = r + t;
        this.m_motorMass = 1 / (r + t);
        !1 == this.m_enableMotor && (this.m_motorImpulse = 0);
        if (this.m_enableLimit) {
            var u = f.m_sweep.a - d.m_sweep.a - this.m_referenceAngle;
            e.Abs(this.m_upperAngle - this.m_lowerAngle) < 2 * b.b2_angularSlop ? this.m_limitState = B.e_equalLimits : u <= this.m_lowerAngle ? (this.m_limitState != B.e_atLowerLimit && (this.m_impulse.z = 0), this.m_limitState =
                B.e_atLowerLimit) : u >= this.m_upperAngle ? (this.m_limitState != B.e_atUpperLimit && (this.m_impulse.z = 0), this.m_limitState = B.e_atUpperLimit) : (this.m_limitState = B.e_inactiveLimit, this.m_impulse.z = 0)
        } else this.m_limitState = B.e_inactiveLimit;
        c.warmStarting ? (this.m_impulse.x *= c.dtRatio, this.m_impulse.y *= c.dtRatio, this.m_motorImpulse *= c.dtRatio, c = this.m_impulse.x, u = this.m_impulse.y, d.m_linearVelocity.x -= g * c, d.m_linearVelocity.y -= g * u, d.m_angularVelocity -= r * (l * u - n * c + this.m_motorImpulse + this.m_impulse.z), f.m_linearVelocity.x +=
            j * c, f.m_linearVelocity.y += j * u, f.m_angularVelocity += t * (m * u - q * c + this.m_motorImpulse + this.m_impulse.z)) : (this.m_impulse.SetZero(), this.m_motorImpulse = 0)
    };
    O.prototype.SolveVelocityConstraints = function(b) {
        var c = this.m_bodyA,
            d = this.m_bodyB,
            f = 0,
            g = 0,
            j = 0,
            l = 0,
            m = 0,
            n = c.m_linearVelocity,
            r = c.m_angularVelocity,
            t = d.m_linearVelocity,
            u = d.m_angularVelocity,
            y = c.m_invMass,
            z = d.m_invMass,
            A = c.m_invI,
            D = d.m_invI;
        this.m_enableMotor && this.m_limitState != B.e_equalLimits && (g = this.m_motorMass * -(u - r - this.m_motorSpeed), j = this.m_motorImpulse,
            l = b.dt * this.m_maxMotorTorque, this.m_motorImpulse = e.Clamp(this.m_motorImpulse + g, -l, l), g = this.m_motorImpulse - j, r -= A * g, u += D * g);
        if (this.m_enableLimit && this.m_limitState != B.e_inactiveLimit) {
            b = c.m_xf.R;
            g = this.m_localAnchor1.x - c.m_sweep.localCenter.x;
            j = this.m_localAnchor1.y - c.m_sweep.localCenter.y;
            f = b.col1.x * g + b.col2.x * j;
            j = b.col1.y * g + b.col2.y * j;
            g = f;
            b = d.m_xf.R;
            l = this.m_localAnchor2.x - d.m_sweep.localCenter.x;
            m = this.m_localAnchor2.y - d.m_sweep.localCenter.y;
            f = b.col1.x * l + b.col2.x * m;
            m = b.col1.y * l + b.col2.y * m;
            l =
                f;
            b = t.x + -u * m - n.x - -r * j;
            var E = t.y + u * l - n.y - r * g;
            this.m_mass.Solve33(this.impulse3, -b, -E, -(u - r));
            this.m_limitState == B.e_equalLimits ? this.m_impulse.Add(this.impulse3) : this.m_limitState == B.e_atLowerLimit ? (f = this.m_impulse.z + this.impulse3.z, 0 > f && (this.m_mass.Solve22(this.reduced, -b, -E), this.impulse3.x = this.reduced.x, this.impulse3.y = this.reduced.y, this.impulse3.z = -this.m_impulse.z, this.m_impulse.x += this.reduced.x, this.m_impulse.y += this.reduced.y, this.m_impulse.z = 0)) : this.m_limitState == B.e_atUpperLimit && (f =
                this.m_impulse.z + this.impulse3.z, 0 < f && (this.m_mass.Solve22(this.reduced, -b, -E), this.impulse3.x = this.reduced.x, this.impulse3.y = this.reduced.y, this.impulse3.z = -this.m_impulse.z, this.m_impulse.x += this.reduced.x, this.m_impulse.y += this.reduced.y, this.m_impulse.z = 0));
            n.x -= y * this.impulse3.x;
            n.y -= y * this.impulse3.y;
            r -= A * (g * this.impulse3.y - j * this.impulse3.x + this.impulse3.z);
            t.x += z * this.impulse3.x;
            t.y += z * this.impulse3.y;
            u += D * (l * this.impulse3.y - m * this.impulse3.x + this.impulse3.z)
        } else b = c.m_xf.R, g = this.m_localAnchor1.x -
            c.m_sweep.localCenter.x, j = this.m_localAnchor1.y - c.m_sweep.localCenter.y, f = b.col1.x * g + b.col2.x * j, j = b.col1.y * g + b.col2.y * j, g = f, b = d.m_xf.R, l = this.m_localAnchor2.x - d.m_sweep.localCenter.x, m = this.m_localAnchor2.y - d.m_sweep.localCenter.y, f = b.col1.x * l + b.col2.x * m, m = b.col1.y * l + b.col2.y * m, l = f, this.m_mass.Solve22(this.impulse2, -(t.x + -u * m - n.x - -r * j), -(t.y + u * l - n.y - r * g)), this.m_impulse.x += this.impulse2.x, this.m_impulse.y += this.impulse2.y, n.x -= y * this.impulse2.x, n.y -= y * this.impulse2.y, r -= A * (g * this.impulse2.y - j * this.impulse2.x),
            t.x += z * this.impulse2.x, t.y += z * this.impulse2.y, u += D * (l * this.impulse2.y - m * this.impulse2.x);
        c.m_linearVelocity.SetV(n);
        c.m_angularVelocity = r;
        d.m_linearVelocity.SetV(t);
        d.m_angularVelocity = u
    };
    O.prototype.SolvePositionConstraints = function() {
        var c = 0,
            d, f = this.m_bodyA,
            g = this.m_bodyB,
            j = 0,
            l = 0,
            n = 0,
            m = 0;
        if (this.m_enableLimit && this.m_limitState != B.e_inactiveLimit) {
            var c = g.m_sweep.a - f.m_sweep.a - this.m_referenceAngle,
                q = 0;
            this.m_limitState == B.e_equalLimits ? (c = e.Clamp(c - this.m_lowerAngle, -b.b2_maxAngularCorrection,
                b.b2_maxAngularCorrection), q = -this.m_motorMass * c, j = e.Abs(c)) : this.m_limitState == B.e_atLowerLimit ? (c -= this.m_lowerAngle, j = -c, c = e.Clamp(c + b.b2_angularSlop, -b.b2_maxAngularCorrection, 0), q = -this.m_motorMass * c) : this.m_limitState == B.e_atUpperLimit && (j = c -= this.m_upperAngle, c = e.Clamp(c - b.b2_angularSlop, 0, b.b2_maxAngularCorrection), q = -this.m_motorMass * c);
            f.m_sweep.a -= f.m_invI * q;
            g.m_sweep.a += g.m_invI * q;
            f.SynchronizeTransform();
            g.SynchronizeTransform()
        }
        d = f.m_xf.R;
        q = this.m_localAnchor1.x - f.m_sweep.localCenter.x;
        c = this.m_localAnchor1.y - f.m_sweep.localCenter.y;
        l = d.col1.x * q + d.col2.x * c;
        c = d.col1.y * q + d.col2.y * c;
        q = l;
        d = g.m_xf.R;
        var r = this.m_localAnchor2.x - g.m_sweep.localCenter.x,
            t = this.m_localAnchor2.y - g.m_sweep.localCenter.y,
            l = d.col1.x * r + d.col2.x * t,
            t = d.col1.y * r + d.col2.y * t,
            r = l,
            n = g.m_sweep.c.x + r - f.m_sweep.c.x - q,
            m = g.m_sweep.c.y + t - f.m_sweep.c.y - c,
            u = n * n + m * m;
        d = Math.sqrt(u);
        var l = f.m_invMass,
            y = g.m_invMass,
            z = f.m_invI,
            A = g.m_invI,
            D = 10 * b.b2_linearSlop;
        u > D * D && (u = 1 / (l + y), n = u * -n, m = u * -m, f.m_sweep.c.x -= 0.5 * l * n, f.m_sweep.c.y -=
            0.5 * l * m, g.m_sweep.c.x += 0.5 * y * n, g.m_sweep.c.y += 0.5 * y * m, n = g.m_sweep.c.x + r - f.m_sweep.c.x - q, m = g.m_sweep.c.y + t - f.m_sweep.c.y - c);
        this.K1.col1.x = l + y;
        this.K1.col2.x = 0;
        this.K1.col1.y = 0;
        this.K1.col2.y = l + y;
        this.K2.col1.x = z * c * c;
        this.K2.col2.x = -z * q * c;
        this.K2.col1.y = -z * q * c;
        this.K2.col2.y = z * q * q;
        this.K3.col1.x = A * t * t;
        this.K3.col2.x = -A * r * t;
        this.K3.col1.y = -A * r * t;
        this.K3.col2.y = A * r * r;
        this.K.SetM(this.K1);
        this.K.AddM(this.K2);
        this.K.AddM(this.K3);
        this.K.Solve(O.tImpulse, -n, -m);
        n = O.tImpulse.x;
        m = O.tImpulse.y;
        f.m_sweep.c.x -=
            f.m_invMass * n;
        f.m_sweep.c.y -= f.m_invMass * m;
        f.m_sweep.a -= f.m_invI * (q * m - c * n);
        g.m_sweep.c.x += g.m_invMass * n;
        g.m_sweep.c.y += g.m_invMass * m;
        g.m_sweep.a += g.m_invI * (r * m - t * n);
        f.SynchronizeTransform();
        g.SynchronizeTransform();
        return d <= b.b2_linearSlop && j <= b.b2_angularSlop
    };
    Box2D.postDefs.push(function() {
        Box2D.Dynamics.Joints.b2RevoluteJoint.tImpulse = new f
    });
    Box2D.inherit(P, Box2D.Dynamics.Joints.b2JointDef);
    P.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
    P.b2RevoluteJointDef = function() {
        Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this,
            arguments);
        this.localAnchorA = new f;
        this.localAnchorB = new f
    };
    P.prototype.b2RevoluteJointDef = function() {
        this.__super.b2JointDef.call(this);
        this.type = B.e_revoluteJoint;
        this.localAnchorA.Set(0, 0);
        this.localAnchorB.Set(0, 0);
        this.motorSpeed = this.maxMotorTorque = this.upperAngle = this.lowerAngle = this.referenceAngle = 0;
        this.enableMotor = this.enableLimit = !1
    };
    P.prototype.Initialize = function(b, c, d) {
        this.bodyA = b;
        this.bodyB = c;
        this.localAnchorA = this.bodyA.GetLocalPoint(d);
        this.localAnchorB = this.bodyB.GetLocalPoint(d);
        this.referenceAngle = this.bodyB.GetAngle() - this.bodyA.GetAngle()
    };
    Box2D.inherit(ba, Box2D.Dynamics.Joints.b2Joint);
    ba.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
    ba.b2WeldJoint = function() {
        Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
        this.m_localAnchorA = new f;
        this.m_localAnchorB = new f;
        this.m_impulse = new j;
        this.m_mass = new d
    };
    ba.prototype.GetAnchorA = function() {
        return this.m_bodyA.GetWorldPoint(this.m_localAnchorA)
    };
    ba.prototype.GetAnchorB = function() {
        return this.m_bodyB.GetWorldPoint(this.m_localAnchorB)
    };
    ba.prototype.GetReactionForce = function(b) {
        void 0 === b && (b = 0);
        return new f(b * this.m_impulse.x, b * this.m_impulse.y)
    };
    ba.prototype.GetReactionTorque = function(b) {
        void 0 === b && (b = 0);
        return b * this.m_impulse.z
    };
    ba.prototype.b2WeldJoint = function(b) {
        this.__super.b2Joint.call(this, b);
        this.m_localAnchorA.SetV(b.localAnchorA);
        this.m_localAnchorB.SetV(b.localAnchorB);
        this.m_referenceAngle = b.referenceAngle;
        this.m_impulse.SetZero();
        this.m_mass = new d
    };
    ba.prototype.InitVelocityConstraints = function(b) {
        var c, d = 0,
            e = this.m_bodyA,
            f = this.m_bodyB;
        c = e.m_xf.R;
        var g = this.m_localAnchorA.x - e.m_sweep.localCenter.x,
            j = this.m_localAnchorA.y - e.m_sweep.localCenter.y,
            d = c.col1.x * g + c.col2.x * j,
            j = c.col1.y * g + c.col2.y * j,
            g = d;
        c = f.m_xf.R;
        var l = this.m_localAnchorB.x - f.m_sweep.localCenter.x,
            n = this.m_localAnchorB.y - f.m_sweep.localCenter.y,
            d = c.col1.x * l + c.col2.x * n,
            n = c.col1.y * l + c.col2.y * n,
            l = d;
        c = e.m_invMass;
        var d = f.m_invMass,
            r = e.m_invI,
            t = f.m_invI;
        this.m_mass.col1.x = c + d + j * j * r + n * n * t;
        this.m_mass.col2.x = -j * g * r - n * l * t;
        this.m_mass.col3.x = -j * r - n * t;
        this.m_mass.col1.y =
            this.m_mass.col2.x;
        this.m_mass.col2.y = c + d + g * g * r + l * l * t;
        this.m_mass.col3.y = g * r + l * t;
        this.m_mass.col1.z = this.m_mass.col3.x;
        this.m_mass.col2.z = this.m_mass.col3.y;
        this.m_mass.col3.z = r + t;
        b.warmStarting ? (this.m_impulse.x *= b.dtRatio, this.m_impulse.y *= b.dtRatio, this.m_impulse.z *= b.dtRatio, e.m_linearVelocity.x -= c * this.m_impulse.x, e.m_linearVelocity.y -= c * this.m_impulse.y, e.m_angularVelocity -= r * (g * this.m_impulse.y - j * this.m_impulse.x + this.m_impulse.z), f.m_linearVelocity.x += d * this.m_impulse.x, f.m_linearVelocity.y +=
            d * this.m_impulse.y, f.m_angularVelocity += t * (l * this.m_impulse.y - n * this.m_impulse.x + this.m_impulse.z)) : this.m_impulse.SetZero()
    };
    ba.prototype.SolveVelocityConstraints = function() {
        var b, c = 0,
            d = this.m_bodyA,
            e = this.m_bodyB,
            f = d.m_linearVelocity,
            g = d.m_angularVelocity,
            l = e.m_linearVelocity,
            m = e.m_angularVelocity,
            n = d.m_invMass,
            r = e.m_invMass,
            t = d.m_invI,
            u = e.m_invI;
        b = d.m_xf.R;
        var y = this.m_localAnchorA.x - d.m_sweep.localCenter.x,
            z = this.m_localAnchorA.y - d.m_sweep.localCenter.y,
            c = b.col1.x * y + b.col2.x * z,
            z = b.col1.y * y + b.col2.y *
            z,
            y = c;
        b = e.m_xf.R;
        var A = this.m_localAnchorB.x - e.m_sweep.localCenter.x,
            B = this.m_localAnchorB.y - e.m_sweep.localCenter.y,
            c = b.col1.x * A + b.col2.x * B,
            B = b.col1.y * A + b.col2.y * B,
            A = c;
        b = l.x - m * B - f.x + g * z;
        var c = l.y + m * A - f.y - g * y,
            D = m - g,
            E = new j;
        this.m_mass.Solve33(E, -b, -c, -D);
        this.m_impulse.Add(E);
        f.x -= n * E.x;
        f.y -= n * E.y;
        g -= t * (y * E.y - z * E.x + E.z);
        l.x += r * E.x;
        l.y += r * E.y;
        m += u * (A * E.y - B * E.x + E.z);
        d.m_angularVelocity = g;
        e.m_angularVelocity = m
    };
    ba.prototype.SolvePositionConstraints = function() {
        var c, d = 0,
            f = this.m_bodyA,
            g = this.m_bodyB;
        c = f.m_xf.R;
        var l = this.m_localAnchorA.x - f.m_sweep.localCenter.x,
            n = this.m_localAnchorA.y - f.m_sweep.localCenter.y,
            d = c.col1.x * l + c.col2.x * n,
            n = c.col1.y * l + c.col2.y * n,
            l = d;
        c = g.m_xf.R;
        var r = this.m_localAnchorB.x - g.m_sweep.localCenter.x,
            m = this.m_localAnchorB.y - g.m_sweep.localCenter.y,
            d = c.col1.x * r + c.col2.x * m,
            m = c.col1.y * r + c.col2.y * m,
            r = d;
        c = f.m_invMass;
        var d = g.m_invMass,
            q = f.m_invI,
            u = g.m_invI,
            t = g.m_sweep.c.x + r - f.m_sweep.c.x - l,
            y = g.m_sweep.c.y + m - f.m_sweep.c.y - n,
            z = g.m_sweep.a - f.m_sweep.a - this.m_referenceAngle,
            A = 10 *
            b.b2_linearSlop,
            B = Math.sqrt(t * t + y * y),
            D = e.Abs(z);
        B > A && (q *= 1, u *= 1);
        this.m_mass.col1.x = c + d + n * n * q + m * m * u;
        this.m_mass.col2.x = -n * l * q - m * r * u;
        this.m_mass.col3.x = -n * q - m * u;
        this.m_mass.col1.y = this.m_mass.col2.x;
        this.m_mass.col2.y = c + d + l * l * q + r * r * u;
        this.m_mass.col3.y = l * q + r * u;
        this.m_mass.col1.z = this.m_mass.col3.x;
        this.m_mass.col2.z = this.m_mass.col3.y;
        this.m_mass.col3.z = q + u;
        A = new j;
        this.m_mass.Solve33(A, -t, -y, -z);
        f.m_sweep.c.x -= c * A.x;
        f.m_sweep.c.y -= c * A.y;
        f.m_sweep.a -= q * (l * A.y - n * A.x + A.z);
        g.m_sweep.c.x += d * A.x;
        g.m_sweep.c.y +=
            d * A.y;
        g.m_sweep.a += u * (r * A.y - m * A.x + A.z);
        f.SynchronizeTransform();
        g.SynchronizeTransform();
        return B <= b.b2_linearSlop && D <= b.b2_angularSlop
    };
    Box2D.inherit(U, Box2D.Dynamics.Joints.b2JointDef);
    U.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
    U.b2WeldJointDef = function() {
        Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
        this.localAnchorA = new f;
        this.localAnchorB = new f
    };
    U.prototype.b2WeldJointDef = function() {
        this.__super.b2JointDef.call(this);
        this.type = B.e_weldJoint;
        this.referenceAngle =
            0
    };
    U.prototype.Initialize = function(b, c, d) {
        this.bodyA = b;
        this.bodyB = c;
        this.localAnchorA.SetV(this.bodyA.GetLocalPoint(d));
        this.localAnchorB.SetV(this.bodyB.GetLocalPoint(d));
        this.referenceAngle = this.bodyB.GetAngle() - this.bodyA.GetAngle()
    }
})();
(function() {
    var b = Box2D.Dynamics.b2DebugDraw;
    b.b2DebugDraw = function() {
        this.m_xformScale = this.m_fillAlpha = this.m_alpha = this.m_lineThickness = this.m_drawScale = 1;
        var b = this;
        this.m_sprite = {
            graphics: {
                clear: function() {
                    b.m_ctx.clearRect(0, 0, b.m_ctx.canvas.width, b.m_ctx.canvas.height)
                }
            }
        }
    };
    b.prototype._color = function(b, d) {
        return "rgba(" + ((b & 16711680) >> 16) + "," + ((b & 65280) >> 8) + "," + (b & 255) + "," + d + ")"
    };
    b.prototype.b2DebugDraw = function() {
        this.m_drawFlags = 0
    };
    b.prototype.SetFlags = function(b) {
        void 0 === b && (b = 0);
        this.m_drawFlags =
            b
    };
    b.prototype.GetFlags = function() {
        return this.m_drawFlags
    };
    b.prototype.AppendFlags = function(b) {
        void 0 === b && (b = 0);
        this.m_drawFlags |= b
    };
    b.prototype.ClearFlags = function(b) {
        void 0 === b && (b = 0);
        this.m_drawFlags &= ~b
    };
    b.prototype.SetSprite = function(b) {
        this.m_ctx = b
    };
    b.prototype.GetSprite = function() {
        return this.m_ctx
    };
    b.prototype.SetDrawScale = function(b) {
        void 0 === b && (b = 0);
        this.m_drawScale = b
    };
    b.prototype.GetDrawScale = function() {
        return this.m_drawScale
    };
    b.prototype.SetLineThickness = function(b) {
        void 0 === b && (b =
            0);
        this.m_lineThickness = b;
        this.m_ctx.strokeWidth = b
    };
    b.prototype.GetLineThickness = function() {
        return this.m_lineThickness
    };
    b.prototype.SetAlpha = function(b) {
        void 0 === b && (b = 0);
        this.m_alpha = b
    };
    b.prototype.GetAlpha = function() {
        return this.m_alpha
    };
    b.prototype.SetFillAlpha = function(b) {
        void 0 === b && (b = 0);
        this.m_fillAlpha = b
    };
    b.prototype.GetFillAlpha = function() {
        return this.m_fillAlpha
    };
    b.prototype.SetXFormScale = function(b) {
        void 0 === b && (b = 0);
        this.m_xformScale = b
    };
    b.prototype.GetXFormScale = function() {
        return this.m_xformScale
    };
    b.prototype.DrawPolygon = function(b, d, e) {
        if (d) {
            var f = this.m_ctx,
                j = this.m_drawScale;
            f.beginPath();
            f.strokeStyle = this._color(e.color, this.m_alpha);
            f.moveTo(b[0].x * j, b[0].y * j);
            for (e = 1; e < d; e++) f.lineTo(b[e].x * j, b[e].y * j);
            f.lineTo(b[0].x * j, b[0].y * j);
            f.closePath();
            f.stroke()
        }
    };
    b.prototype.DrawSolidPolygon = function(b, d, e) {
        if (d) {
            var f = this.m_ctx,
                j = this.m_drawScale;
            f.beginPath();
            f.strokeStyle = this._color(e.color, this.m_alpha);
            f.fillStyle = this._color(e.color, this.m_fillAlpha);
            f.moveTo(b[0].x * j, b[0].y * j);
            for (e =
                1; e < d; e++) f.lineTo(b[e].x * j, b[e].y * j);
            f.lineTo(b[0].x * j, b[0].y * j);
            f.closePath();
            f.fill();
            f.stroke()
        }
    };
    b.prototype.DrawCircle = function(b, d, e) {
        if (d) {
            var f = this.m_ctx,
                j = this.m_drawScale;
            f.beginPath();
            f.strokeStyle = this._color(e.color, this.m_alpha);
            f.arc(b.x * j, b.y * j, d * j, 0, 2 * Math.PI, !0);
            f.closePath();
            f.stroke()
        }
    };
    b.prototype.DrawSolidCircle = function(b, d, e, f) {
        if (d) {
            var j = this.m_ctx,
                n = this.m_drawScale,
                l = b.x * n,
                g = b.y * n;
            j.moveTo(0, 0);
            j.beginPath();
            j.strokeStyle = this._color(f.color, this.m_alpha);
            j.fillStyle =
                this._color(f.color, this.m_fillAlpha);
            j.arc(l, g, d * n, 0, 2 * Math.PI, !0);
            j.moveTo(l, g);
            j.lineTo((b.x + e.x * d) * n, (b.y + e.y * d) * n);
            j.closePath();
            j.fill();
            j.stroke()
        }
    };
    b.prototype.DrawSegment = function(b, d, e) {
        var f = this.m_ctx,
            j = this.m_drawScale;
        f.strokeStyle = this._color(e.color, this.m_alpha);
        f.beginPath();
        f.moveTo(b.x * j, b.y * j);
        f.lineTo(d.x * j, d.y * j);
        f.closePath();
        f.stroke()
    };
    b.prototype.DrawTransform = function(b) {
        var d = this.m_ctx,
            e = this.m_drawScale;
        d.beginPath();
        d.strokeStyle = this._color(16711680, this.m_alpha);
        d.moveTo(b.position.x * e, b.position.y * e);
        d.lineTo((b.position.x + this.m_xformScale * b.R.col1.x) * e, (b.position.y + this.m_xformScale * b.R.col1.y) * e);
        d.strokeStyle = this._color(65280, this.m_alpha);
        d.moveTo(b.position.x * e, b.position.y * e);
        d.lineTo((b.position.x + this.m_xformScale * b.R.col2.x) * e, (b.position.y + this.m_xformScale * b.R.col2.y) * e);
        d.closePath();
        d.stroke()
    }
})();
var i;
for (i = 0; i < Box2D.postDefs.length; ++i) Box2D.postDefs[i]();
delete Box2D.postDefs;
"undefined" != typeof global && (global.Box2D = Box2D);
ig.baked = !0;
ig.module("plugins.box2d.lib").defines(function() {});
ig.baked = !0;
ig.module("plugins.box2d.game").requires("plugins.box2d.lib", "impact.game").defines(function() {
    ig.Box2DGame = ig.Game.extend({
        collisionRects: [],
        debugCollisionRects: !1,
        worldVelocityIterations: 7,
        worldPositionIterations: 7,
        updateTimestep: 1 / 60,
        updateTimestepAccumulator: 0,
        updateTimestepAccumulatorRatio: 0,
        lastUpdateTime: -1,
        nWorldSteps: 0,
        bodyDestroyQueue: [],
        defaultTileSegmentsDef: {},
        defaultTileVerticesDef: {},
        loadLevel: function(b) {
            this.collisionMap = ig.CollisionMap.staticNoCollision;
            for (var c = 0; c < b.layer.length; c++) {
                var d =
                    b.layer[c];
                "collision" == d.name && (this.collisionMap = new ig.CollisionMap(d.tilesize, d.data))
            }
            this.mergedShape = this.mergeRectangles(this.collisionMap);
            ig.world = this.createWorldFromCollisionMap(this.collisionMap, this.mergedShape);
            this.setupContactListener();
            this.parent(b)
        },
        createWorldFromMap: function(b, c, d, e) {
            var f = new Box2D.Collision.b2AABB;
            f.lowerBound.Set(0, 0);
            f.upperBound.Set((c + 1) * e * Box2D.SCALE, (d + 1) * e * Box2D.SCALE);
            f = new Box2D.Common.Math.b2Vec2(0, ig.game.gravity * Box2D.SCALE);
            world = new Box2D.Dynamics.b2World(f, !0);
            b = ig.copy(b);
            this.collisionRects = [];
            for (f = 0; f < d; f++)
                for (var j = 0; j < c; j++)
                    if (b[f][j]) {
                        var n = this._extractRectFromMap(b, c, d, j, f);
                        this.collisionRects.push(n)
                    }
            for (c = 0; c < this.collisionRects.length; c++) d = this.collisionRects[c], b = new Box2D.Dynamics.b2BodyDef, b.position.Set(d.x * e * Box2D.SCALE + d.width * e / 2 * Box2D.SCALE, d.y * e * Box2D.SCALE + d.height * e / 2 * Box2D.SCALE), b = world.CreateBody(b), f = new Box2D.Collision.Shapes.b2PolygonShape, f.SetAsBox(d.width * e / 2 * Box2D.SCALE, d.height * e / 2 * Box2D.SCALE), b.CreateFixture2(f);
            return world
        },
        _extractRectFromMap: function(b, c, d, e, f) {
            for (var j = {
                    x: e,
                    y: f,
                    width: 1,
                    height: 1
                }, n = e + 1; n < c && b[f][n]; n++) j.width++, b[f][n] = 0;
            for (c = f + 1; c < d; c++) {
                f = 0;
                for (n = e; n < e + j.width && b[c][n]; n++) f++;
                if (f == j.width) {
                    j.height++;
                    for (n = e; n < e + j.width; n++) b[c][n] = 0
                } else break
            }
            return j
        },
        update: function() {
            if (!ig.game.box2dPaused && ig.world) {
                var b = ig.system.clock.delta() - this.lastUpdateTime;
                this.lastUpdateTime = ig.system.clock.delta();
                this.updateTimestepAccumulator += b;
                this.nWorldSteps = Math.floor(this.updateTimestepAccumulator /
                    this.updateTimestep);
                0 < this.nWorldSteps && (this.updateTimestepAccumulator -= this.nWorldSteps * this.updateTimestep);
                this.updateTimestepAccumulatorRatio = this.updateTimestepAccumulator / this.updateTimestep;
                for (var b = Math.min(this.nWorldSteps, 5), c = 0; c < b; c++) {
                    this.resetSmoothStates();
                    ig.world.Step(this.updateTimestep, this.worldVelocityIterations, this.worldPositionIterations);
                    for (var d = ig.world.GetBodyList(); d; d = d.m_next)
                        if (d.IsAwake()) {
                            var e = d.GetFixtureList();
                            if (!e || !e.IsSensor()) {
                                var e = 0.6 > Math.abs(d.GetAngularVelocity()),
                                    f = 0.6 > Math.abs(d.GetLinearVelocity().Length());
                                e && f ? 30 < d.slowTime ? (d.slowTime = 0, d.SetAwake(!1)) : d.slowTime += 1 : d.slowTime = 0
                            }
                        }
                }
                ig.world.ClearForces();
                this.smoothStates()
            }
            this.parent();
            if (0 < this.bodyDestroyQueue.length) {
                for (c = 0; c < this.bodyDestroyQueue.length; c++) ig.world.DestroyBody(this.bodyDestroyQueue[c]);
                this.bodyDestroyQueue = []
            }
        },
        smoothStates: function() {
            for (var b = 1 - this.updateTimestepAccumulatorRatio, c = 0; c < this.entities.length; c++) {
                var d = this.entities[c];
                null != d.body && d.dynamicType != Box2D.Dynamics.b2Body.b2_staticBody &&
                    (d.pos.x = this.updateTimestepAccumulatorRatio * d.body.GetPosition().x + b * d.previousBodyPosition.x, d.pos.y = this.updateTimestepAccumulatorRatio * d.body.GetPosition().y + b * d.previousBodyPosition.y, d.angle = this.updateTimestepAccumulatorRatio * d.body.GetAngle() + b * d.previousBodyAngle, d.currentAnim && (d.currentAnim.update(), d.currentAnim.angle = d.angle))
            }
        },
        resetSmoothStates: function() {
            for (var b = 0; b < this.entities.length; b++) {
                var c = this.entities[b];
                null != c.body && c.dynamicType != Box2D.Dynamics.b2Body.b2_staticBody &&
                    (c.pos.x = c.body.GetPosition().x, c.previousBodyPosition.x = c.pos.x, c.pos.y = c.body.GetPosition().y, c.previousBodyPosition.y = c.pos.y, c.angle = c.body.GetAngle(), c.previousBodyAngle = c.body.GetAngle(), c.currentAnim && (c.currentAnim.update(), c.currentAnim.angle = c.angle))
            }
        },
        draw: function() {
            this.parent();
            if (this.debugCollisionRects)
                for (var b = this.collisionMap.tilesize, c = 0; c < this.collisionRects.length; c++) {
                    var d = this.collisionRects[c];
                    ig.system.context.strokeStyle = "#00ff00";
                    ig.system.context.strokeRect(ig.system.getDrawPos(d.x *
                        b - this.screen.x), ig.system.getDrawPos(d.y * b - this.screen.y), ig.system.getDrawPos(d.width * b), ig.system.getDrawPos(d.height * b))
                }
        },
        queueDestroyBody: function(b) {
            this.bodyDestroyQueue.push(b)
        },
        mergeRectangles: function(b) {
            if (void 0 != b.data) {
                for (var c = ig.copy(b.data), d = [], e = 0; e < c.length; e++) {
                    void 0 == d[e] && (d[e] = []);
                    for (var f = 0; f < c[0].length; f++) d[e].push(0)
                }
                c = this._shapesFromCollisionMap(b);
                b = [];
                f = [];
                for (e = 0; e < c.length; e++) 1 == c[e].id ? (f.push(c[e]), d[c[e].tile.y][c[e].tile.x] = f[f.length - 1]) : b.push(c[e]);
                for (e =
                    f.length - 1; 0 <= e; e--) 1 == f[e].id && (f[e].neighbours = this.checkNeighbour(d, f[e].tile.x, f[e].tile.y));
                d = this.linkSquares(f, d);
                return b = b.concat(d)
            }
        },
        sideAbleCheck: function(b, c, d, e) {
            return b ? b[d] ? b[d][c] ? b[d][c].neighbours ? -1 < b[d][c].neighbours.indexOf(e) ? !0 : !1 : !1 : !1 : !1 : !1
        },
        linkSquares: function(b, c) {
            for (var d = [], e = [], f = 0; f < b.length; f++) {
                var j = b[f],
                    n = j.tile.x,
                    l = j.tile.y;
                if (!(-1 < d.indexOf(j)))
                    if (d.push(j), -1 < j.neighbours.indexOf("right")) {
                        for (var g = 1; !0 == this.sideAbleCheck(c, j.tile.x + g, j.tile.y, "right");) j.tile.x +
                            g < n && (n = j.tile.x + g), d.push(c[j.tile.y][j.tile.x + g]), g++;
                        c[j.tile.y][n].settings.size.x *= g + 1;
                        for (var r = c[j.tile.y][n].settings.vertices, y = 0; y < r.length; y++) r[y].x *= g + 1;
                        d.push(c[j.tile.y][j.tile.x + g + 1]);
                        e.push(c[j.tile.y][n])
                    } else if (-1 < j.neighbours.indexOf("down") && -1 == j.neighbours.indexOf("right") && -1 == j.neighbours.indexOf("left")) {
                    j.tile.y + g < l && (l = j.tile.y + g);
                    r = 0;
                    for (n = 1; !0 == this.sideAbleCheck(c, j.tile.x, j.tile.y + n, "down") && !1 == this.sideAbleCheck(c, j.tile.x, j.tile.y + n, "right") && !1 == this.sideAbleCheck(c,
                            j.tile.x, j.tile.y + n, "left");) r = 1, d.push(c[j.tile.y + n][j.tile.x]), n++;
                    !0 == this.sideAbleCheck(c, j.tile.x, j.tile.y + n, "up") && !1 == this.sideAbleCheck(c, j.tile.x, j.tile.y + n, "right") && !1 == this.sideAbleCheck(c, j.tile.x, j.tile.y + n, "left") ? r = 1 : !0 == this.sideAbleCheck(c, j.tile.x, j.tile.y + n, "up") && !0 == this.sideAbleCheck(c, j.tile.x, j.tile.y + n, "right") ? (d.splice(d.indexOf(c[j.tile.y + n][j.tile.x]), 1), n--) : !0 == this.sideAbleCheck(c, j.tile.x, j.tile.y + n, "up") && !0 == this.sideAbleCheck(c, j.tile.x, j.tile.y + n, "left") && (d.splice(d.indexOf(c[j.tile.y +
                        n][j.tile.x]), 1), n--);
                    if (1 == r) {
                        c[l][j.tile.x].settings.size.y *= n + 1;
                        r = c[l][j.tile.x].settings.vertices;
                        for (y = 0; y < r.length; y++) r[y].y *= n + 1;
                        c[j.tile.y + n] && d.push(c[j.tile.y + n][j.tile.x])
                    }
                    e.push(c[l][j.tile.x])
                } else if (!(-1 < j.neighbours.indexOf("left")))
                    if (-1 < j.neighbours.indexOf("up")) {
                        if (!0 == this.sideAbleCheck(c, j.tile.x, j.tile.y - 1, "down") && (!0 == this.sideAbleCheck(c, j.tile.x, j.tile.y - 1, "right") || !0 == this.sideAbleCheck(c, j.tile.x, j.tile.y - 1, "left"))) d.push(c[j.tile.y][j.tile.x]), e.push(c[j.tile.y][j.tile.x])
                    } else d.push(c[j.tile.y][j.tile.x]),
                        e.push(c[j.tile.y][j.tile.x])
            }
            return e
        },
        getNeighbourTiles: function(b, c, d, e) {
            switch (e) {
                case "left":
                    return [{
                        x: c - 1,
                        y: d
                    }];
                case "right":
                    return [{
                        x: c + 1,
                        y: d
                    }];
                case "up":
                    return [{
                        x: c,
                        y: d - 1
                    }];
                case "down":
                    return [{
                        x: c,
                        y: d + 1
                    }];
                case "topL":
                    return [{
                        x: c,
                        y: d - 1
                    }, {
                        x: c - 1,
                        y: d
                    }, {
                        x: c - 1,
                        y: d - 1
                    }];
                case "topR":
                    return [{
                        x: c,
                        y: d - 1
                    }, {
                        x: c + 1,
                        y: d
                    }, {
                        x: c + 1,
                        y: d - 1
                    }];
                case "bottomL":
                    return [{
                        x: c,
                        y: d + 1
                    }, {
                        x: c - 1,
                        y: d
                    }, {
                        x: c - 1,
                        y: d + 1
                    }];
                case "bottomR":
                    return [{
                        x: c,
                        y: d + 1
                    }, {
                        x: c + 1,
                        y: d
                    }, {
                        x: c + 1,
                        y: d + 1
                    }]
            }
        },
        checkNeighbour: function(b, c, d) {
            var e = [];
            0 != this.checkArr(b,
                c - 1, d) && e.push("left");
            0 != this.checkArr(b, c, d + 1) && e.push("down");
            0 != this.checkArr(b, c + 1, d) && e.push("right");
            0 != this.checkArr(b, c, d - 1) && e.push("up");
            return e
        },
        checkArr: function(b, c, d) {
            return void 0 == b[d] ? 0 : void 0 == b[d][c] ? 0 : b[d][c]
        },
        createWorldFromCollisionMap: function(b, c) {
            var d = new Box2D.Common.Math.b2Vec2(0, 0),
                d = new Box2D.Common.Math.b2Vec2(0, ig.game.gravity * Box2D.SCALE);
            world = new Box2D.Dynamics.b2World(d, !0);
            for (var d = void 0 != c ? c : this._shapesFromCollisionMap(this.collisionMap), e = 0; e < d.length; e++) {
                var f =
                    d[e],
                    j = f.settings.size.x,
                    n = f.settings.size.y,
                    l = f.settings.vertices,
                    g = new Box2D.Dynamics.b2BodyDef;
                g.position.Set(f.x * Box2D.SCALE + j / 2 * Box2D.SCALE, f.y * Box2D.SCALE + n / 2 * Box2D.SCALE);
                j = world.CreateBody(g);
                f = new Box2D.Collision.Shapes.b2PolygonShape;
                f.SetAsArray(l, l.length);
                j.CreateFixture2(f)
            }
            return world
        },
        setupContactListener: function() {
            var b = function(b, c, f) {
                    var j = c.GetFixtureA().GetBody().entity,
                        n = c.GetFixtureB().GetBody().entity;
                    if (j && n) j[b](n, c, f), n[b](j, c, f);
                    else if (j && !n) j[b](null, c, f);
                    else if (n &&
                        !j) n[b](null, c, f)
                },
                c = new Box2D.Dynamics.b2ContactListener;
            c.BeginContact = function(c) {
                b("beginContact", c)
            };
            c.EndContact = function(c) {
                b("endContact", c)
            };
            c.PostSolve = function(c, e) {
                b("postSolve", c, e)
            };
            c.PreSolve = function(c, e) {
                b("preSolve", c, e)
            };
            ig.world.SetContactListener(c)
        },
        _shapesFromCollisionMap: function(b) {
            var c = [];
            if (b instanceof ig.CollisionMap) {
                var d = ig.copy(b.data),
                    e = b.tilesize,
                    f = b.width,
                    j = b.height,
                    n, l, g, r, y, z, A, B, E, D;
                for (z = 0; z < j; z++)
                    for (y = 0; y < f; y++) {
                        D = this._shapeFromTile(b, y, z);
                        E = {
                            id: b.data[z][y],
                            ix: y,
                            iy: z,
                            x: y * e,
                            y: z * e,
                            width: e,
                            height: e,
                            shape: D
                        };
                        if (0 < D.vertices.length) {
                            l = [];
                            n = D.vertices;
                            g = D.segments;
                            A = 0;
                            for (B = g.length; A < B; A++) {
                                r = g[A];
                                var u = n[r.a],
                                    G = E.width / 20,
                                    K = E.height / 20;
                                l[r.a] = {
                                    x: u.x.map(0, 1, -G, G),
                                    y: u.y.map(0, 1, -K, K)
                                }
                            }
                            D.vertices = l;
                            D.vertices[D.vertices.length - 1].x === D.vertices[0].x && D.vertices[D.vertices.length - 1].y === D.vertices[0].y && D.vertices.pop();
                            n = {
                                id: E.id,
                                settings: {
                                    size: {
                                        x: E.width,
                                        y: E.height
                                    },
                                    vertices: ig.copy(D.vertices)
                                },
                                x: E.x,
                                y: E.y,
                                tile: {
                                    x: y,
                                    y: z
                                }
                            };
                            c.push(n)
                        }
                        d[z][y] = E
                    }
            }
            return c
        },
        _shapeFromTile: function(b, c, d) {
            var e;
            e = b.data[d][c];
            b = this._verticesFromTile(b, c, d);
            var f;
            if (b)
                if (this.defaultTileSegmentsDef[e]) f = this.defaultTileSegmentsDef[e];
                else {
                    this.defaultTileSegmentsDef[e] = f = [];
                    e = 0;
                    for (c = b.length; e < c; e++) {
                        var j = b[e];
                        d = e === c - 1 ? 0 : e + 1;
                        var n = b[d],
                            l = n.x - j.x,
                            j = n.y - j.y,
                            n = Math.sqrt(l * l + j * j);
                        f.push({
                            a: e,
                            b: d,
                            normal: {
                                x: j / n,
                                y: -l / n
                            }
                        })
                    }
                }
            return {
                vertices: b,
                segments: f || []
            }
        },
        _verticesFromTile: function(b, c, d) {
            c = b.data[d][c];
            if (this.defaultTileVerticesDef[c]) d = this.defaultTileVerticesDef[c];
            else if (1 === c) d = [{
                x: 0,
                y: 0
            }, {
                x: 1,
                y: 0
            }, {
                x: 1,
                y: 1
            }, {
                x: 0,
                y: 1
            }];
            else {
                d = [];
                if (b = b.tiledef[c]) {
                    var e = d[0] = {
                            x: b[0],
                            y: b[1]
                        },
                        f = d[1] = {
                            x: b[2],
                            y: b[3]
                        };
                    b = e.x;
                    var e = e.y,
                        j = f.x,
                        f = f.y,
                        n = j - b,
                        l = f - e,
                        g = d[2] = {
                            x: 0 > l ? 1 : 0,
                            y: 0 < n ? 1 : 0
                        },
                        r = g.x,
                        g = g.y,
                        y;
                    y = !1;
                    if (1 > Math.abs(n) && 1 > Math.abs(l)) {
                        var n = _utv2.pointQuadrant(b, e, 0.5, 0.5),
                            l = _utv2.pointQuadrant(j, f, 0.5, 0.5),
                            z = _utv2.pointQuadrant(r, g, 0.5, 0.5);
                        !(n & z) && !(l & z) && (y = !0)
                    }!0 === y ? (r !== g ? (y = r, l = g, 1 == r ? (g = 1, n = 0) : (g = 0, n = 1)) : (n = r, l = 1 == r ? y = 0 : y = 1), d[3] = {
                        x: y,
                        y: g
                    }, d[4] = {
                        x: n,
                        y: l
                    }) : (r !== g ? (y =
                        r, l = g, 1 == r ? (g = Math.max(e, f), n = Math.min(b, j)) : (g = Math.min(e, f), n = Math.max(b, j))) : (n = r, 1 == r ? (y = Math.min(b, j), l = Math.min(e, f)) : (y = Math.max(b, j), l = Math.max(e, f))), y === b && g === e || y === j && g === f ? n === b && l === e || n === j && l === f || (d[3] = {
                        x: n,
                        y: l
                    }) : d[3] = {
                        x: y,
                        y: g
                    });
                    d = this._pointsToConvexHull(d)
                }
                this.defaultTileVerticesDef[c] = d
            }
            return d
        },
        _pointsToConvexHull: function(b) {
            if (3 > b.length) return b;
            var c, d, e = 0,
                f = b[e],
                j;
            c = 1;
            for (d = b.length; c < d; c++) j = b[c], j.y === f.y ? j.x < f.x && (e = c, f = j) : j.y < f.y && (e = c, f = j);
            var n = [],
                l;
            c = 0;
            for (d = b.length; c <
                d; c++) c !== e && (j = b[c], l = {
                x: j.x,
                y: j.y
            }, l.angle = Math.atan((j.y - f.y) / (j.x - f.x)), 0 > l.angle && (l.angle += Math.PI), l.distance = (j.x - f.x) * (j.x - f.x) + (j.y - f.y) * (j.y - f.y), l.index = c, n.push(l));
            n.sort(function(b, c) {
                return b.angle < c.angle ? -1 : b.angle > c.angle ? 1 : b.distance < c.distance ? -1 : b.distance > c.distance ? 1 : 0
            });
            n.unshift(n[n.length - 1], {
                x: f.x,
                y: f.y,
                index: e
            });
            e = 2;
            c = 3;
            for (d = b.length; c <= d; c++) {
                for (; 0 >= this._pointsCW(n[e - 1], n[e], n[c]);) e--;
                e++;
                f = n[c];
                n[c] = n[e];
                n[e] = f
            }
            d = [];
            for (c = 0; c <= e; c++) d[c] = b[n[c].index];
            return d
        },
        _pointsCW: function(b, c, d) {
            return (c.x - b.x) * (d.y - b.y) - (c.y - b.y) * (d.x - b.x)
        }
    });
    Box2D.Common.b2Settings.b2_maxTranslation = 10;
    Box2D.Common.b2Settings.b2_maxTranslationSquared = 100;
    Box2D.Common.b2Settings.b2_velocityThreshold = 1
});
ig.baked = !0;
ig.module("plugins.box2d.entity").requires("impact.entity", "plugins.box2d.game").defines(function() {
    ig.Box2DEntity = ig.Entity.extend({
        body: null,
        angle: 0,
        box2dType: null,
        dynamicType: null,
        density: null,
        friction: null,
        restitution: null,
        rotate: 0,
        previousBodyPosition: {
            x: 0,
            y: 0
        },
        previousBodyAngle: 0,
        slowTime: 0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            ig.global.wm || this.createBody();
            0 < this.rotate && (this.angle = this.rotate * Math.PI / 180)
        },
        ready: function() {},
        createBody: function() {
            if (this.body) {
                var b = this.body.GetPosition();
                this.pos = {
                    x: b.x / Box2D.SCALE - this.size.x / 2,
                    y: b.y / Box2D.SCALE - this.size.y / 2
                }
            }
            b = new Box2D.Dynamics.b2BodyDef;
            b.position = new Box2D.Common.Math.b2Vec2((this.pos.x + this.size.x / 2) * Box2D.SCALE, (this.pos.y + this.size.y / 2) * Box2D.SCALE);
            this.previousBodyPosition = {
                x: b.position.x,
                y: b.position.y
            };
            this.rotate && (b.angle = this.rotate * Math.PI / 180);
            this.previousBodyAngle = b.angle;
            null == this.dynamicType || 0 == this.dynamicType ? b.type = Box2D.Dynamics.b2Body.b2_dynamicBody : 1 == this.dynamicType ? b.type = Box2D.Dynamics.b2Body.b2_kinematicBody :
                2 == this.dynamicType && (b.type = Box2D.Dynamics.b2Body.b2_staticBody);
            this.body = ig.world.CreateBody(b);
            this.body.entity = this;
            b = this.fixture = new Box2D.Dynamics.b2FixtureDef;
            null == this.box2dType || 0 == this.box2dType ? (b.shape = new Box2D.Collision.Shapes.b2PolygonShape, b.shape.SetAsBox(this.size.x / 2 * Box2D.SCALE, this.size.y / 2 * Box2D.SCALE)) : 1 == this.box2dType ? (b.shape = new Box2D.Collision.Shapes.b2CircleShape, b.shape.SetRadius(this.size.x / 2 * Box2D.SCALE)) : 2 == this.box2dType && (b.shape = new Box2D.Collision.Shapes.b2PolygonShape,
                b.shape.SetAsArray(this.vertices, this.vertices.length));
            this.density && (b.density = this.density);
            this.friction && (b.friction = this.friction);
            this.restitution && (b.restitution = this.restitution);
            this.body.CreateFixture(b);
            this.body.SetUserData(this)
        },
        update: function() {
            var b = this.body.GetPosition();
            this.previousBodyPosition = {
                x: this.pos.x,
                y: this.pos.y
            };
            this.pos = {
                x: b.x / Box2D.SCALE - this.size.x / 2,
                y: b.y / Box2D.SCALE - this.size.y / 2
            };
            this.previousBodyAngle = this.angle;
            this.angle = this.body.GetAngle().round(2);
            this.currentAnim &&
                (this.currentAnim.update(), this.currentAnim.angle = this.angle)
        },
        beginContact: function() {},
        endContact: function() {},
        postSolve: function() {},
        preSolve: function() {},
        processCollisionQueues: function() {
            for (var b in this.checkQueue) {
                var c = this.checkQueue[b];
                0 < this.entityContactCount[b] ? this.check(c) : delete this.checkQueue[b]
            }
            for (var d in this.collideQueue)
                for (b in this.collideQueue[d]) c = this.collideQueue[d][b], this.collideWith(c, d), delete this.collideQueue[d][b]
        },
        kill: function() {
            this.body && ig.game.queueDestroyBody(this.body);
            this.parent()
        },
        setScale: function(b, c) {
            this.parent(b, c);
            null != this.body && this.scaleChange && (ig.world.DestroyBody(this.body), this.createBody(), this.scaleChange = !1)
        }
    })
});
ig.baked = !0;
ig.module("plugins.data.color-rgb").defines(function() {
    ColorRGB = function(b, c, d, e) {
        this.r = b || 0;
        this.g = c || 0;
        this.b = d || 0;
        this.a = e || 0
    };
    ColorRGB.prototype = {
        setRandomColor: function() {
            this.r = Math.round(255 * Math.random());
            this.g = Math.round(255 * Math.random());
            this.b = Math.round(255 * Math.random())
        },
        getStyle: function() {
            return "rgba(" + this.r + "," + this.g + "," + this.b + "," + this.a + ")"
        },
        getHex: function() {
            for (var b = this.r.toString(16), c = this.g.toString(16), d = this.b.toString(16); 2 > b.length;) b = "0" + b;
            for (; 2 > c.length;) c = "0" +
                c;
            for (; 2 > d.length;) d = "0" + d;
            return "#" + b + c + d
        },
        getInvertedColor: function() {
            return new ColorRGB(255 - this.r, 255 - this.g, 255 - this.b, 255 - this.a)
        },
        clone: function() {
            return new ColorRGB(this.r, this.g, this.b, this.a)
        }
    }
});
this.START_BRANDING_SPLASH;
ig.baked = !0;
ig.module("plugins.branding.splash").requires("impact.impact", "impact.entity").defines(function() {
    ig.BrandingSplash = ig.Class.extend({
        init: function() {
            ig.game.spawnEntity(EntityBranding, 0, 0);
            console.log("spawn branding")
        }
    });
    EntityBranding = ig.Entity.extend({
        gravityFactor: 0,
        size: {
            x: 32,
            y: 32
        },
        splash: new ig.Image("branding/splash1.png"),
        init: function(b, c, d) {
            this.parent(b, c, d);
            320 >= ig.system.width ? (this.size.x = 320, this.size.y = 200) : (this.size.x = 480, this.size.y = 240);
            this.pos.x = (ig.system.width - this.size.x) /
                2;
            this.pos.y = -this.size.y - 200;
            this.endPosY = (ig.system.height - this.size.y) / 2;
            b = this.tween({
                pos: {
                    y: this.endPosY
                }
            }, 0.5, {
                easing: ig.Tween.Easing.Bounce.EaseIn
            });
            c = this.tween({}, 2.5, {
                onComplete: function() {
                    ig.game.director.loadLevel(ig.game.director.currentLevel)
                }
            });
            b.chain(c);
            b.start();
            this.currentAnim = this.anims.idle
        },
        createClickableLayer: function() {
            console.log("Build clickable layer");
            this.checkClickableLayer("branding-splash", _SETTINGS.Branding.Logo.Link, _SETTINGS.Branding.Logo.NewWindow)
        },
        doesClickableLayerExist: function(b) {
            for (k in dynamicClickableEntityDivs)
                if (k ==
                    b) return !0;
            return !1
        },
        checkClickableLayer: function(b, c, d) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "media/graphics/misc/invisible.png", d))
        },
        createClickableOutboundLayer: function(b, c, d, e) {
            var f = ig.$new("div");
            f.id = b;
            document.body.appendChild(f);
            f = $("#" + f.id);
            f.css("float", "left");
            f.css("position", "absolute");
            if (ig.ua.mobile) {
                var j = window.innerHeight / mobileHeight,
                    n = window.innerWidth /
                    mobileWidth;
                f.css("left", this.pos.x * n);
                f.css("top", this.pos.y * j);
                f.css("width", this.size.x * n);
                f.css("height", this.size.y * j)
            } else j = w / 2 - destW / 2, n = h / 2 - destH / 2, console.log(j, n), f.css("left", j + this.pos.x * multiplier), f.css("top", n + this.pos.y * multiplier), f.css("width", this.size.x * multiplier), f.css("height", this.size.y * multiplier);
            e ? f.html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>") : f.html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[b] = {};
            dynamicClickableEntityDivs[b].width = this.size.x * multiplier;
            dynamicClickableEntityDivs[b].height = this.size.y * multiplier;
            dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        },
        draw: function() {
            ig.system.context.fillStyle = "#ffffff";
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            ig.system.context.fillStyle = "#000";
            ig.system.context.font = "12px Arial";
            ig.system.context.textAlign = "left";
            320 >= ig.system.width ?
                ig.system.context.fillText("powered by MarketJS.com", ig.system.width - 150, ig.system.height - 15) : ig.system.context.fillText("powered by MarketJS.com", ig.system.width - 160, ig.system.height - 15);
            this.parent();
            this.splash && ig.system.context.drawImage(this.splash.data, 0, 0, this.splash.data.width, this.splash.data.height, this.pos.x, this.pos.y, this.size.x, this.size.y)
        }
    })
});
this.END_BRANDING_SPLASH;
ig.baked = !0;
ig.module("game.entities.others.marketjs-entity").requires("impact.entity").defines(function() {
    EntityMarketjsEntity = ig.Entity.extend({
        oriPos: {
            x: null,
            y: null
        },
        killOutLayer: !1,
        idleSheetInfo: null,
        vertices: [],
        drawShape: !1,
        vertical: null,
        horizontal: null,
        scaling: !1,
        bodyScale: 1,
        radius: 0,
        init: function(b, c, d) {
            null != this.idleSheetInfo && (this.setSpriteSheet("idle"), this.setSize("idle"));
            this.parent(b, c, d);
            this.oriPos.x = this.pos.x;
            this.oriPos.y = this.pos.y
        },
        update: function() {
            this.parent();
            this.killOutOfLayer();
            !0 == this.scaling && this.setScale(this.bodyScale, this.bodyScale)
        },
        draw: function() {
            this.parent();
            this.drawStrokeBody()
        },
        drawStrokeBody: function() {
            if (!0 == this.drawShape || void 0 != ig.game.drawShape && !0 == ig.game.drawShape)
                if (0 < this.vertices.length) {
                    ig.system.context.save();
                    ig.system.context.translate(-ig.game.screen.x, -ig.game.screen.y);
                    ig.system.context.beginPath();
                    ig.system.context.strokeStyle = "rgba(255,0,0,1)";
                    ig.system.context.moveTo(this.pos.x + this.vertices[0].x * this.bodyScale, this.pos.y + this.vertices[0].y *
                        this.bodyScale);
                    for (var b = 1; b < this.vertices.length; b++) ig.system.context.lineTo(this.pos.x + this.vertices[b].x * this.bodyScale, this.pos.y + this.vertices[b].y * this.bodyScale);
                    ig.system.context.lineTo(this.pos.x + this.vertices[0].x * this.bodyScale, this.pos.y + this.vertices[0].y * this.bodyScale);
                    ig.system.context.stroke();
                    ig.system.context.restore()
                } else 0 < this.radius && (ig.system.context.save(), ig.system.context.beginPath(), ig.system.context.arc(this.pos.x + this.size.x / 2, this.pos.y + this.size.y / 2, this.radius *
                    this.bodyScale, 0, 2 * Math.PI, !1), ig.system.context.lineWidth = 2, ig.system.context.strokeStyle = "rgba(255,0,0,1)", ig.system.context.stroke(), ig.system.context.restore())
        },
        rotateVertices: function() {
            for (var b = 0; b < this.vertices.length; b++) this.vertices[b] = this.getPoint(this.size.x / 2, this.size.y / 2, this.vertices[b].x, this.vertices[b].y, -this.toAngle.toRad())
        },
        getPoint: function(b, c, d, e, f) {
            cos = Math.cos(f);
            sin = Math.sin(f);
            nx = cos * (d - b) + sin * (e - c) + b;
            ny = cos * (e - c) - sin * (d - b) + c;
            return {
                x: nx,
                y: ny
            }
        },
        getSAT: function() {
            for (var b = [], c = 0; c < this.vertices.length; c++) b[c] = {
                x: this.pos.x + this.vertices[c].x * this.bodyScale,
                y: this.pos.y + this.vertices[c].y * this.bodyScale
            };
            return new ig.SAT.Shape(b)
        },
        getVertices: function() {
            for (var b = [], c = 0; c < this.vertices.length; c++) b[c] = {
                x: this.pos.x + this.vertices[c].x * this.bodyScale,
                y: this.pos.y + this.vertices[c].y * this.bodyScale
            };
            return b
        },
        killOutOfLayer: function() {
            if (!1 != this.killOutLayer && (this.pos.x < ig.game.screen.x - this.size.x || this.pos.x > ig.game.screen.x + ig.system.width || this.pos.y < ig.game.screen.y -
                    this.size.y || this.pos.y > ig.game.screen.y + ig.system.height)) console.log("kill outside layer"), this.kill()
        },
        setSpriteSheet: function(b) {
            this[b + "Sheet"] = new ig.AnimationSheet(this[b + "SheetInfo"].sheetImage.path, this[b + "SheetInfo"].sheetImage.width / this[b + "SheetInfo"].sheetX, this[b + "SheetInfo"].sheetImage.height / this[b + "SheetInfo"].sheetY)
        },
        setSize: function(b) {
            this.size.x = this[b + "SheetInfo"].sheetImage.width / this[b + "SheetInfo"].sheetX;
            this.size.y = this[b + "SheetInfo"].sheetImage.height / this[b + "SheetInfo"].sheetY
        },
        setPosition: function() {
            "center" == this.horizontal ? this.pos.x -= this.size.x / 2 : "left" == this.horizontal ? this.pos.x = this.pos.x : "right" == this.horizontal && (this.pos.x -= this.size.x);
            "center" == this.vertical ? this.pos.y -= this.size.y / 2 : "top" == this.vertical ? this.pos.y = this.pos.y : "bottom" == this.vertical && (this.pos.y -= this.size.y)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button").requires("game.entities.others.marketjs-entity", "plugins.data.vector").defines(function() {
    EntityButton = EntityMarketjsEntity.extend({
        collides: ig.Entity.COLLIDES.NEVER,
        type: ig.Entity.TYPE.A,
        size: new Vector2(48, 48),
        fillColor: null,
        zIndex: 95E3,
        init: function(b, c, d) {
            this.parent(b, c, d);
            !ig.global.wm && !isNaN(d.zIndex) && (this.zIndex = d.zIndex);
            b = Math.floor(256 * Math.random());
            c = Math.floor(256 * Math.random());
            d = Math.floor(256 * Math.random());
            this.fillColor = "rgba(" + b + "," +
                d + "," + c + ",1)"
        },
        clicked: function() {},
        clicking: function() {},
        released: function() {}
    })
});
ig.baked = !0;
ig.module("plugins.clickable-div-layer").requires("plugins.data.vector").defines(function() {
    ClickableDivLayer = ig.Class.extend({
        pos: new Vector2(0, 0),
        size: new Vector2(0, 0),
        identifier: null,
        invisImagePath: "media/graphics/misc/invisible.png",
        init: function(b) {
            this.pos = new Vector2(b.pos.x, b.pos.y);
            this.size = new Vector2(b.size.x, b.size.y);
            var c = "more-games",
                d = "www.google.com",
                e = !1;
            b.div_layer_name && (c = b.div_layer_name);
            b.link && (d = b.link);
            b.newWindow && (e = b.newWindow);
            this.createClickableLayer(c, d, e)
        },
        createClickableLayer: function(b,
            c, d) {
            this.identifier = b;
            var e = ig.domHandler.getElementById("#" + b);
            e ? (ig.domHandler.show(e), ig.domHandler.attr(e, "href", c)) : this.createClickableOutboundLayer(b, c, this.invisImagePath, d)
        },
        update: function(b, c) {
            this.pos.x === b && this.pos.y === c || (ig.sizeHandler.dynamicClickableEntityDivs[this.identifier] = {}, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].width = this.size.x, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].height = this.size.y, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].entity_pos_x =
                this.pos.x, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].entity_pos_y = this.pos.y)
        },
        createClickableOutboundLayer: function(b, c, d, e) {
            var f = ig.domHandler.create("div");
            ig.domHandler.attr(f, "id", b);
            var j = ig.domHandler.create("a");
            e ? (ig.domHandler.attr(j, "href", c), ig.domHandler.attr(j, "target", "_blank")) : ig.domHandler.attr(j, "href", c);
            c = ig.domHandler.create("img");
            ig.domHandler.css(c, {
                width: "100%",
                height: "100%"
            });
            ig.domHandler.attr(c, "src", d);
            d = Math.min(ig.sizeHandler.scaleRatioMultiplier.x,
                ig.sizeHandler.scaleRatioMultiplier.y);
            if (ig.ua.mobile) {
                e = ig.domHandler.getElementById("#canvas");
                e = ig.domHandler.getOffsets(e);
                var n = e.left,
                    l = e.top;
                console.log(e.left);
                ig.sizeHandler.disableStretchToFitOnMobileFlag ? (e = Math.floor(n + this.pos.x * ig.sizeHandler.scaleRatioMultiplier.x) + "px", l = Math.floor(l + this.pos.y * ig.sizeHandler.scaleRatioMultiplier.y) + "px", n = Math.floor(this.size.x * ig.sizeHandler.scaleRatioMultiplier.x) + "px", d = Math.floor(this.size.y * ig.sizeHandler.scaleRatioMultiplier.y) + "px") : (e = Math.floor(this.pos.x *
                    ig.sizeHandler.sizeRatio.x) + "px", l = Math.floor(this.pos.y * ig.sizeHandler.sizeRatio.y) + "px", n = Math.floor(this.size.x * ig.sizeHandler.sizeRatio.x) + "px", d = Math.floor(this.size.y * ig.sizeHandler.sizeRatio.y) + "px")
            } else e = ig.domHandler.getElementById("#canvas"), e = ig.domHandler.getOffsets(e), n = e.left, l = e.top, ig.sizeHandler.enableStretchToFitOnDesktopFlag ? (e = Math.floor(n + this.pos.x * ig.sizeHandler.sizeRatio.x) + "px", l = Math.floor(l + this.pos.y * ig.sizeHandler.sizeRatio.y) + "px", n = Math.floor(this.size.x * ig.sizeHandler.sizeRatio.x) +
                "px", d = Math.floor(this.size.y * ig.sizeHandler.sizeRatio.y) + "px") : (e = Math.floor(n + this.pos.x * d) + "px", l = Math.floor(l + this.pos.y * d) + "px", n = Math.floor(this.size.x * d) + "px", d = Math.floor(this.size.y * d) + "px");
            ig.domHandler.css(f, {
                "float": "left",
                position: "absolute",
                left: e,
                top: l,
                width: n,
                height: d,
                "z-index": 3
            });
            ig.domHandler.addEvent(f, "mousemove", ig.input.mousemove.bind(ig.input), !1);
            ig.domHandler.appendChild(j, c);
            ig.domHandler.appendChild(f, j);
            ig.domHandler.appendToBody(f);
            ig.sizeHandler.dynamicClickableEntityDivs[b] = {};
            ig.sizeHandler.dynamicClickableEntityDivs[b].width = this.size.x;
            ig.sizeHandler.dynamicClickableEntityDivs[b].height = this.size.y;
            ig.sizeHandler.dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            ig.sizeHandler.dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-branding-logo").requires("game.entities.buttons.button", "plugins.clickable-div-layer").defines(function() {
    EntityButtonBrandingLogo = EntityButton.extend({
        type: ig.Entity.TYPE.A,
        gravityFactor: 0,
        logo: new ig.AnimationSheet("branding/logo.png", _SETTINGS.Branding.Logo.Width, _SETTINGS.Branding.Logo.Height),
        zIndex: 10001,
        size: {
            x: 64,
            y: 66
        },
        clickableLayer: null,
        link: null,
        newWindow: !1,
        div_layer_name: "branding-logo",
        name: "brandinglogo",
        init: function(b, c, d) {
            this.parent(b, c, d);
            if (!ig.global.wm) {
                if ("undefined" == typeof wm)
                    if (_SETTINGS.Branding.Logo.Enabled) this.size.x = _SETTINGS.Branding.Logo.Width, this.size.y = _SETTINGS.Branding.Logo.Height, this.anims.idle = new ig.Animation(this.logo, 0, [0], !0), this.currentAnim = this.anims.idle, d && d.centralize && (this.pos.x = ig.system.width / 2 - this.size.x / 2, console.log("centralize true ... centering branded logo ...")), _SETTINGS.Branding.Logo.LinkEnabled && (this.link = _SETTINGS.Branding.Logo.Link, this.newWindow = _SETTINGS.Branding.Logo.NewWindow, this.clickableLayer =
                        new ClickableDivLayer(this));
                    else {
                        this.kill();
                        return
                    }
                this.div_layer_name = d.div_layer_name ? d.div_layer_name : "branding-logo"
            }
        },
        show: function() {
            var b = ig.domHandler.getElementById("#" + this.div_layer_name);
            ig.domHandler.show(b)
        },
        hide: function() {
            var b = ig.domHandler.getElementById("#" + this.div_layer_name);
            ig.domHandler.hide(b)
        },
        clicked: function() {},
        clicking: function() {},
        released: function() {}
    })
});
ig.baked = !0;
ig.module("game.entities.branding-logo-placeholder").requires("impact.entity", "game.entities.buttons.button-branding-logo").defines(function() {
    EntityBrandingLogoPlaceholder = ig.Entity.extend({
        gravityFactor: 0,
        size: {
            x: 32,
            y: 32
        },
        _wmDrawBox: !0,
        _wmBoxColor: "rgba(0, 0, 255, 0.7)",
        init: function(b, c, d) {
            this.parent(b, c, d);
            if (d) switch (console.log("settings found ... using that div layer name"), b = d.div_layer_name, console.log("settings.centralize:", d.centralize), d.centralize) {
                case "true":
                    console.log("centralize true");
                    centralize = !0;
                    break;
                case "false":
                    console.log("centralize false");
                    centralize = !1;
                    break;
                default:
                    console.log("default ... centralize false"), centralize = !1
            } else b = "branding-logo", centralize = !1;
            if ("undefined" == typeof wm) {
                if (_SETTINGS.Branding.Logo.Enabled) try {
                    ig.game.spawnEntity(EntityButtonBrandingLogo, this.pos.x, this.pos.y, {
                        div_layer_name: b,
                        centralize: centralize
                    })
                } catch (e) {
                    console.log(e)
                }
                this.kill()
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-text").requires("game.entities.buttons.button", "plugins.data.vector").defines(function() {
    EntityButtonText = EntityButton.extend({
        textColor: "#FFFFFF",
        text: null,
        font: null,
        textSize: 20,
        showText: !0,
        textAlign: "center",
        textBaseline: "middle",
        bodyScale: 1,
        textPos: {
            x: 0.5,
            y: 0.5
        },
        draw: function() {
            this.parent();
            this.showText && this.drawText()
        },
        drawText: function() {
            ig.system.context.save();
            ig.system.context.font = this.textSize * this.bodyScale + "px " + this.font;
            ig.system.context.textAlign =
                this.textAlign;
            ig.system.context.textBaseline = this.textBaseline;
            ig.system.context.fillStyle = this.textColor;
            ig.system.context.fillText(this.text, this.pos.x + this.size.x * this.textPos.x, this.pos.y + this.size.y * this.textPos.y);
            ig.system.context.restore()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-more-games").requires("game.entities.buttons.button-text", "plugins.clickable-div-layer").defines(function() {
    EntityButtonMoreGames = EntityButtonText.extend({
        name: "moregames",
        type: ig.Entity.TYPE.A,
        gravityFactor: 0,
        zIndex: 1,
        vertical: "center",
        horizontal: "center",
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/buttons/button-text.png"),
            sheetX: 1,
            sheetY: 1
        },
        clickableLayer: null,
        link: null,
        newWindow: !1,
        div_layer_name: "more-games",
        textColor: "#ffffff",
        font: "handel-gothic",
        textSize: 25,
        textPos: {
            x: 0.5,
            y: 0.5
        },
        scaling: !0,
        offsetY: 5,
        pointerFocus: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            ig.global.wm || (this.div_layer_name = d.div_layer_name ? d.div_layer_name : "more-games", _SETTINGS.MoreGames.Enabled ? (this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 1, [0], !0), this.setPosition(), _SETTINGS.MoreGames.Link && (this.link = _SETTINGS.MoreGames.Link), _SETTINGS.MoreGames.NewWindow && (this.newWindow = _SETTINGS.MoreGames.NewWindow), this.clickableLayer = new ClickableDivLayer(this), this.pos.y +=
                ig.system.height, this.hide()) : this.kill())
        },
        update: function() {
            this.parent();
            this.pointerCollide()
        },
        pointerCollide: function() {
            if (!ig.ua.mobile && !ig.game.easing) {
                var b = ig.game.getEntitiesByType(EntityPointer)[0];
                if (!this.pointerFocus || !(this.pos.x <= b.pos.x && this.pos.y <= b.pos.y && this.pos.x + this.size.x >= b.pos.x && this.pos.y + this.size.y + this.offsetY >= b.pos.y)) this.pos.x <= b.pos.x && this.pos.y <= b.pos.y && this.pos.x + this.size.x >= b.pos.x && this.pos.y + this.size.y >= b.pos.y ? this.pointerFocus || (this.pos.y -= this.offsetY,
                    this.pointerFocus = !0) : this.pointerFocus && (this.pos.y += this.offsetY, this.pointerFocus = !1)
            }
        },
        show: function() {
            var b = ig.domHandler.getElementById("#" + this.div_layer_name);
            ig.domHandler.show(b)
        },
        hide: function() {
            var b = ig.domHandler.getElementById("#" + this.div_layer_name);
            ig.domHandler.hide(b)
        },
        clicked: function() {},
        clicking: function() {},
        released: function() {},
        easeOut: function() {
            this.hide();
            this.tween({
                pos: {
                    y: this.pos.y - ig.system.height
                }
            }, 0.2, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {
                    this.pos.y +=
                        2 * ig.system.height
                }.bind(this)
            }).start()
        },
        easeIn: function() {
            this.tween({
                pos: {
                    y: this.pos.y - ig.system.height
                }
            }, 0.2, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {
                    this.show()
                }.bind(this)
            }).start()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.opening-shield").requires("impact.entity").defines(function() {
    EntityOpeningShield = ig.Entity.extend({
        size: {
            x: 48,
            y: 48
        },
        move: 0,
        mIconAnim: 0,
        shieldAnim: 0,
        titleAnim: 0,
        shieldImage: new ig.Image("media/graphics/opening/shield.png"),
        mIconImage: new ig.Image("media/graphics/opening/m_icon.png"),
        titleImage: new ig.Image("media/graphics/opening/title.png"),
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        ready: function() {
            if (!ig.wm)
                if (_SETTINGS.DeveloperBranding.Splash.Enabled) {
                    this.initTimer = new ig.Timer(0.1);
                    try {
                        ig.soundHandler.playSound(ig.soundHandler.SOUNDID.openingSound)
                    } catch (b) {
                        console.log(b)
                    }
                } else ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1, this.kill()
        },
        update: function() {
            this.parent();
            this.updateOriginalShieldOpening()
        },
        draw: function() {
            this.parent();
            ig.global.wm || (this.nextLevelTimer && 0 > this.nextLevelTimer.delta() && (ig.system.context.globalAlpha = -this.nextLevelTimer.delta()), this.drawOriginalShieldOpening())
        },
        updateOriginalShieldOpening: function() {
            this.initTimer && 0 < this.initTimer.delta() &&
                (this.initTimer = null, this.sheildTimer = new ig.Timer(0.05));
            this.sheildTimer && 0 < this.sheildTimer.delta() && (3 > this.shieldAnim ? (this.shieldAnim++, this.sheildTimer.reset()) : (this.sheildTimer = null, this.moveTimer = new ig.Timer(0.001), this.mIconTimer = new ig.Timer(0.05), this.titleTimer = new ig.Timer(0.15)));
            this.moveTimer && 0 < this.moveTimer.delta() && (this.move += 0.3, this.moveTimer.reset());
            this.mIconTimer && 0 < this.mIconTimer.delta() && (12 > this.mIconAnim ? (this.mIconAnim++, this.moveTimer.reset()) : this.mIconTimer =
                null);
            this.titleTimer && 0 < this.titleTimer.delta() && (11 > this.titleAnim ? (this.titleAnim++, this.titleTimer.reset()) : (this.titleTimer = null, this.nextLevelTimer = new ig.Timer(1)));
            this.nextLevelTimer && 0 < this.nextLevelTimer.delta() && (this.nextLevelTimer = null, ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1)
        },
        drawOriginalShieldOpening: function() {
            if (this.moveTimer) {
                var b = ig.system.context;
                b.save();
                var c = ig.system.width / 2,
                    d = ig.system.height / 2;
                b.translate(c, d);
                b.rotate(this.move * Math.PI / 180);
                b.beginPath();
                b.moveTo(0, 0);
                for (var e = 0, f = 1; 48 >= f; f += 1) b.lineTo(0 + 800 * Math.cos(2 * f * Math.PI / 48), 0 + 800 * Math.sin(2 * f * Math.PI / 48)), e++, 2 == e && (e = 0, b.lineTo(0, 0));
                b.translate(-c, -d);
                c = b.createRadialGradient(c, d, 100, c, d, 250);
                c.addColorStop(0, "rgba(255,255,255,0.1)");
                c.addColorStop(1, "rgba(0,0,0,0)");
                b.fillStyle = c;
                b.fill();
                b.restore()
            }
            this.shieldImage.drawTile(ig.system.width / 2 - 91, 0 - (768 - ig.system.height) / 2, this.shieldAnim, 182, 768);
            this.moveTimer && (this.mIconImage.drawTile(ig.system.width / 2 - 96, ig.system.height / 2 - 70, this.mIconAnim,
                166, 160), this.titleImage.drawTile(ig.system.width / 2 - 204, ig.system.height / 2 + 100, this.titleAnim, 409, 76));
            ig.system.context.globalAlpha = 1
        }
    })
});
ig.baked = !0;
ig.module("game.entities.opening-kitty").requires("impact.entity").defines(function() {
    EntityOpeningKitty = ig.Entity.extend({
        size: {
            x: 48,
            y: 48
        },
        kittyAnim: -1,
        kittyImage: new ig.Image("media/graphics/opening/kitty.png"),
        kittyTitleImage: new ig.Image("media/graphics/opening/kittytitle.png"),
        soundKey: "kittyopeningSound",
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        ready: function() {
            if (!ig.wm)
                if (_SETTINGS.DeveloperBranding.Splash.Enabled) {
                    this.initTimer = new ig.Timer(0.1);
                    try {
                        ig.soundHandler.sfxPlayer.play(this.soundKey)
                    } catch (b) {
                        console.log(b)
                    }
                } else ig.game.director.nextLevel(),
                    ig.system.context.globalAlpha = 1, this.kill()
        },
        update: function() {
            this.parent();
            this.updateKittyOpening()
        },
        draw: function() {
            this.parent();
            ig.global.wm || (this.nextLevelTimer && 0 > this.nextLevelTimer.delta() && (ig.system.context.globalAlpha = -this.nextLevelTimer.delta()), this.drawKittyOpening())
        },
        updateKittyOpening: function() {
            this.initTimer && 0 < this.initTimer.delta() && (this.initTimer = null, this.kittyTimer = new ig.Timer(0.15));
            this.kittyTimer && 0 < this.kittyTimer.delta() && (7 > this.kittyAnim ? (this.kittyAnim++, this.kittyTimer.reset()) :
                (this.kittyTimer = null, this.nextLevelTimer = new ig.Timer(2)));
            this.nextLevelTimer && 0 < this.nextLevelTimer.delta() && (this.nextLevelTimer = null, ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1)
        },
        drawKittyOpening: function() {
            var b = ig.system.context.createLinearGradient(0, 0, 0, ig.system.height);
            b.addColorStop(0, "#ffed94");
            b.addColorStop(1, "#ffcd85");
            ig.system.context.fillStyle = b;
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            0 <= this.kittyAnim && (this.kittyImage.drawTile(ig.system.width /
                2 - this.kittyImage.width / 8, ig.system.height / 2 - this.kittyImage.height / 4, this.kittyAnim, 218, 325), this.kittyTitleImage.drawTile(ig.system.width / 2 - this.kittyTitleImage.width / 2, ig.system.height / 2 + this.kittyImage.height / 4 + 10, this.kittyAnim, 380, 37));
            ig.system.context.globalAlpha = 1
        }
    })
});
ig.baked = !0;
ig.module("game.entities.pointer").requires("impact.entity").defines(function() {
    EntityPointer = ig.Entity.extend({
        checkAgainst: ig.Entity.TYPE.BOTH,
        size: new Vector2(1, 1),
        isFirstPressed: !1,
        isPressed: !1,
        isReleased: !1,
        isHovering: !1,
        hoveringItem: null,
        objectArray: [],
        clickedObjectList: [],
        ignorePause: !0,
        zIndex: 9999,
        check: function(b) {
            this.objectArray.push(b)
        },
        clickObject: function(b) {
            this.isFirstPressed && "function" == typeof b.clicked && (b.clicked(), this.addToClickedObjectList(b));
            this.isPressed && !this.isReleased &&
                "function" == typeof b.clicking && b.clicking();
            this.isReleased && "function" == typeof b.released && (b.released(), this.removeFromClickedObjectList(b))
        },
        refreshPos: function() {
            this.pos = ig.game.io.getClickPos()
        },
        update: function() {
            this.parent();
            this.refreshPos();
            var b = null,
                c = -1;
            for (a = this.objectArray.length - 1; - 1 < a; a--) this.objectArray[a].zIndex > c && (c = this.objectArray[a].zIndex, b = this.objectArray[a]);
            if (null != b) null != this.hoveringItem ? this.hoveringItem != b && ("function" == typeof this.hoveringItem.leave && this.hoveringItem.leave(),
                "function" == typeof b.over && b.over()) : "function" == typeof b.over && b.over(), this.hoveringItem = b, this.clickObject(b), this.objectArray = [];
            else if (null != this.hoveringItem && "function" == typeof this.hoveringItem.leave && (this.hoveringItem.leave(), this.hoveringItem = null), this.isReleased) {
                for (b = 0; b < this.clickedObjectList.length; b++) c = this.clickedObjectList[b], "function" == typeof c.releasedOutside && c.releasedOutside();
                this.clickedObjectList = []
            }
            this.isFirstPressed = ig.input.pressed("click");
            this.isReleased = ig.input.released("click");
            this.isPressed = ig.input.state("click")
        },
        addToClickedObjectList: function(b) {
            this.clickedObjectList.push(b)
        },
        removeFromClickedObjectList: function(b) {
            for (var c = [], d = 0; d < this.clickedObjectList.length; d++) {
                var e = this.clickedObjectList[d];
                e != b && c.push(e)
            }
            this.clickedObjectList = c
        }
    })
});
ig.baked = !0;
ig.module("game.entities.pointer-selector").requires("game.entities.pointer").defines(function() {
    EntityPointerSelector = EntityPointer.extend({
        zIndex: 1E3,
        _wmDrawBox: !0,
        _wmBoxColor: "rgba(0, 0, 255, 0.7)",
        size: {
            x: 1,
            y: 1
        },
        init: function(b, c, d) {
            this.parent(b, c, d)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.select").requires("impact.entity").defines(function() {
    EntitySelect = ig.Entity.extend({
        type: ig.Entity.TYPE.B,
        checkAgainst: ig.Entity.TYPE.A,
        collides: ig.Entity.COLLIDES.NEVER,
        canSelect: !1,
        canSelectTimerDuration: 0.35,
        zIndex: 99999,
        isHovering: !1,
        isSelected: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.canSelectTimer = new ig.Timer(this.canSelectTimerDuration)
        },
        doesClickableLayerExist: function(b) {
            for (k in dynamicClickableEntityDivs)
                if (k == b) return !0;
            return !1
        },
        checkClickableLayer: function(b,
            c, d) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "media/graphics/misc/invisible.png", d))
        },
        createClickableOutboundLayer: function(b, c, d, e) {
            var f = ig.$new("div");
            f.id = b;
            document.body.appendChild(f);
            $("#" + f.id).css("float", "left");
            $("#" + f.id).css("width", this.size.x * multiplier);
            $("#" + f.id).css("height", this.size.y * multiplier);
            $("#" + f.id).css("position", "absolute");
            var j = w / 2 - destW / 2,
                n = h /
                2 - destH / 2;
            w == mobileWidth ? ($("#" + f.id).css("left", this.pos.x), $("#" + f.id).css("top", this.pos.y)) : ($("#" + f.id).css("left", j + this.pos.x * multiplier), $("#" + f.id).css("top", n + this.pos.y * multiplier));
            e ? $("#" + f.id).html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>") : $("#" + f.id).html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[b] = {};
            dynamicClickableEntityDivs[b].width = $("#" + f.id).width();
            dynamicClickableEntityDivs[b].height =
                $("#" + f.id).height();
            dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        },
        hovered: function() {
            this.isHovering = !0;
            this.dehoverOthers()
        },
        dehoverOthers: function() {
            var b = ig.game.getEntitiesByType(EntitySelect);
            for (i = 0; i < b.length; i++) b[i] != this && (b[i].isHovering = !1)
        },
        deselectOthers: function() {
            var b = ig.game.getEntitiesByType(EntitySelect);
            for (i = 0; i < b.length; i++) b[i] != this && (b[i].isSelected = !1)
        },
        update: function() {
            this.parent();
            this.canSelectTimer && 0 <
                this.canSelectTimer.delta() && (this.canSelect = !0, this.canSelectTimer = null)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.menu.menu-title").requires("game.entities.others.marketjs-entity").defines(function() {
    EntityMenuTitle = EntityMarketjsEntity.extend({
        zIndex: 1,
        scaling: !0,
        vertical: "center",
        horizontal: "center",
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/menu/menu-title.png"),
            sheetX: 1,
            sheetY: 1
        },
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 1, [0], !0);
            this.setPosition();
            this.pos.y += ig.system.height
        },
        update: function() {
            this.parent()
        },
        easeOut: function() {
            this.tween({
                pos: {
                    y: this.pos.y - ig.system.height
                }
            }, 0.2, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {
                    this.pos.y += 2 * ig.system.height
                }.bind(this)
            }).start()
        },
        easeIn: function() {
            this.tween({
                pos: {
                    y: this.pos.y - ig.system.height
                }
            }, 0.2, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {
                    ig.game.easing = !1
                }.bind(this)
            }).start()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.menu.pop-up-settings").requires("game.entities.others.marketjs-entity", "game.entities.buttons.button", "game.entities.buttons.button-text").defines(function() {
    EntityPopUpSettings = EntityMarketjsEntity.extend({
        zIndex: 2,
        vertical: "center",
        horizontal: "center",
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/pop-up/pop-up-bg-small.png"),
            sheetX: 1,
            sheetY: 1
        },
        icoBgm: new ig.Image("media/graphics/sprites/pop-up/ico-bgm.png"),
        icoSfx: new ig.Image("media/graphics/sprites/pop-up/ico-sfx.png"),
        buttonClose: null,
        buttonClassic: null,
        buttonTimed: null,
        buttonGameModeoptions: [],
        barBgm: null,
        barSfx: null,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 1, [0], !0);
            this.setPosition();
            this.pos.y += ig.system.height;
            this.buttonClose = ig.game.spawnEntity(EntityPUSettingsButtonClose, ig.system.width, ig.system.height, {
                controller: this.controller,
                zIndex: this.zIndex + 1
            });
            this.barBgm = ig.game.spawnEntity(EntityPUSettingsBarBgm, ig.system.width, ig.system.height, {
                controller: this.controller,
                zIndex: this.zIndex + 1
            });
            this.barSfx = ig.game.spawnEntity(EntityPUSettingsBarSfx, ig.system.width, ig.system.height, {
                controller: this.controller,
                zIndex: this.zIndex + 1
            })
        },
        update: function() {
            this.parent();
            this.buttonClose.pos.x = this.pos.x + 1 * this.size.x / 2 - 1 * this.buttonClose.size.x / 2;
            this.buttonClose.pos.y = this.pos.y + 16 * this.size.y / 20 - 1 * this.buttonClose.size.y / 2 + this.buttonClose.offsetY;
            this.barBgm.pos.x = this.pos.x + 9 * this.size.x / 10 - this.barBgm.size.x;
            this.barBgm.pos.y = this.pos.y + 7.5 * this.size.y / 20 - 1 * this.barBgm.size.y /
                2;
            this.barSfx.pos.x = this.pos.x + 9 * this.size.x / 10 - this.barSfx.size.x;
            this.barSfx.pos.y = this.pos.y + 11 * this.size.y / 20 - 1 * this.barSfx.size.y / 2
        },
        draw: function() {
            this.parent();
            ig.system.context.save();
            var b = this.pos.x + 1 * this.size.x / 2,
                c = this.pos.y + 1.9 * this.size.y / 20;
            ig.system.context.font = "30px handel-gothic";
            ig.system.context.fillStyle = "#FFFFFF";
            ig.system.context.textAlign = "center";
            ig.system.context.textBaseline = "middle";
            ig.system.context.fillText(_STRINGS.Menu.ButtonSettings, b, c);
            ig.system.context.restore()
        },
        easeOut: function() {
            this.tween({
                pos: {
                    y: this.pos.y - ig.system.height
                }
            }, 0.2, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {
                    this.pos.y += 2 * ig.system.height;
                    this.controller.easeIn()
                }.bind(this)
            }).start()
        },
        easeIn: function() {
            this.tween({
                pos: {
                    y: this.pos.y - ig.system.height
                }
            }, 0.2, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {
                    ig.game.easing = !1
                }.bind(this)
            }).start()
        }
    });
    EntityPUSettingsButtonClose = EntityButton.extend({
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/buttons/button-home.png"),
            sheetX: 1,
            sheetY: 1
        },
        scaling: !0,
        offsetY: 0,
        pointerFocus: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 1, [0], !0)
        },
        update: function() {
            this.parent();
            this.pointerCollide()
        },
        pointerCollide: function() {
            if (!ig.ua.mobile && !ig.game.easing) {
                var b = ig.game.getEntitiesByType(EntityPointer)[0];
                if (!this.pointerFocus || !(this.pos.x <= b.pos.x && this.pos.y <= b.pos.y && this.pos.x + this.size.x >= b.pos.x && this.pos.y + this.size.y + 5 >= b.pos.y)) this.pos.x <= b.pos.x && this.pos.y <= b.pos.y &&
                    this.pos.x + this.size.x >= b.pos.x && this.pos.y + this.size.y >= b.pos.y ? this.pointerFocus || (this.offsetY = -5, this.pointerFocus = !0) : this.pointerFocus && (this.offsetY = 0, this.pointerFocus = !1)
            }
        },
        clicked: function() {
            !1 == ig.game.easing && (ig.soundHandler.sfxPlayer.play("button"), ig.game.easing = !0, this.tween({
                bodyScale: 0.8
            }, 0.1, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {
                    this.tween({
                        bodyScale: 1
                    }, 0.1, {
                        easing: ig.Tween.Easing.Linear.EaseNone,
                        onComplete: function() {
                            this.controller.popUpSettings.easeOut()
                        }.bind(this)
                    }).start()
                }.bind(this)
            }).start())
        },
        clicking: function() {},
        released: function() {}
    });
    EntityPUSettingsBar = EntityMarketjsEntity.extend({
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/pop-up/volume-bar-bg.png"),
            sheetX: 1,
            sheetY: 1
        },
        bar: new ig.Image("media/graphics/sprites/pop-up/volume-bar.png"),
        volume: 1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 1, [0], !0);
            this.sliderBar = ig.game.spawnEntity(EntityPUSettingsSliderBar, ig.system.width, ig.system.height, {
                bar: this,
                zIndex: this.zIndex +
                    1
            })
        },
        update: function() {
            this.parent();
            if (this.move) {
                var b = !1,
                    c, d;
                for (d in ig.input.touches) {
                    b = !0;
                    c = ig.input.touches[d].x - this.pos.x;
                    break
                }!1 == b ? this.sliderBar.released() : (0 > c ? c = 0 : c > this.size.x && (c = this.size.x), this.volume = c / this.size.x)
            }
            this.sliderBar.pos.x = this.pos.x + 1 * this.sliderBar.size.x / 2 + (this.bar.width - this.sliderBar.size.x) * this.bodyScale * this.volume - 1 * this.sliderBar.size.x / 2;
            this.sliderBar.pos.y = this.pos.y + 1 * this.size.y / 2 - 1 * this.sliderBar.size.y / 2
        },
        draw: function() {
            this.parent();
            if (0 < this.volume) {
                ig.system.context.save();
                var b = 100 < this.volume ? 100 : this.volume;
                ig.system.context.drawImage(this.bar.data, 0, 0, this.bar.width * b, this.bar.height, this.pos.x + 1 * this.size.x / 2 - this.bar.width * this.bodyScale / 2, this.pos.y + 1 * this.size.y / 2 - this.bar.height * this.bodyScale / 2, this.bar.width * this.bodyScale * b, this.bar.height * this.bodyScale);
                ig.system.context.restore()
            }
        },
        updateTarget: function() {}
    });
    EntityPUSettingsSliderBar = EntityButton.extend({
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/pop-up/slider-bar.png"),
            sheetX: 1,
            sheetY: 1
        },
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 1, [0], !0)
        },
        clicked: function() {
            !1 == ig.game.easing && (ig.soundHandler.sfxPlayer.play("button"), ig.game.easing = !0, this.bar.move = !0)
        },
        clicking: function() {},
        released: function() {
            this.bar.updateTarget();
            this.bar.move = !1;
            ig.game.easing = !1;
            ig.soundHandler.sfxPlayer.play("button")
        }
    });
    EntityPUSettingsBarBgm = EntityPUSettingsBar.extend({
        ico: new ig.Image("media/graphics/sprites/pop-up/ico-bgm.png"),
        init: function(b,
            c, d) {
            this.parent(b, c, d);
            this.volume = ig.game.volumeBgm
        },
        update: function() {
            this.parent();
            this.move && (ig.game.volumeBgm = this.volume, ig.soundHandler.bgmPlayer.volume(ig.game.volumeBgm))
        },
        draw: function() {
            this.parent();
            ig.system.context.save();
            ig.system.context.drawImage(this.ico.data, this.controller.popUpSettings.pos.x + 1 * this.controller.popUpSettings.size.x / 10, this.pos.y + 1 * this.size.y / 2 - this.ico.height * this.bodyScale / 2, this.ico.width * this.bodyScale, this.ico.height * this.bodyScale);
            ig.system.context.restore()
        },
        updateTarget: function() {
            ig.game.save("volumeBgm", this.volume)
        }
    });
    EntityPUSettingsBarSfx = EntityPUSettingsBar.extend({
        ico: new ig.Image("media/graphics/sprites/pop-up/ico-sfx.png"),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.volume = ig.game.volumeSfx
        },
        update: function() {
            this.parent();
            this.move && (ig.game.volumeSfx = this.volume, ig.soundHandler.sfxPlayer.volume(ig.game.volumeSfx))
        },
        draw: function() {
            this.parent();
            ig.system.context.save();
            ig.system.context.drawImage(this.ico.data, this.controller.popUpSettings.pos.x +
                1 * this.controller.popUpSettings.size.x / 10, this.pos.y + 1 * this.size.y / 2 - this.ico.height * this.bodyScale / 2, this.ico.width * this.bodyScale, this.ico.height * this.bodyScale);
            ig.system.context.restore()
        },
        updateTarget: function() {
            ig.game.save("volumeSfx", this.volume)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.others.marketjs-box2d-entity").requires("plugins.box2d.entity").defines(function() {
    EntityMarketjsBox2dEntity = ig.Box2DEntity.extend({
        oriPos: {
            x: null,
            y: null
        },
        killOutLayer: !1,
        idleSheetInfo: null,
        vertical: null,
        horizontal: null,
        scaling: !1,
        bodyScale: 1,
        gravityFactor: 0,
        init: function(b, c, d) {
            null != this.idleSheetInfo && (this.setSpriteSheet("idle"), this.setSize("idle"));
            null != this.vertices && (this.vertices = this.arrangeClockwise(this.vertices));
            this.parent(b, c, d);
            this.oriPos.x = this.pos.x;
            this.oriPos.y =
                this.pos.y
        },
        update: function() {
            this.parent();
            this.killOutOfLayer();
            !0 == this.scaling && this.setScale(this.bodyScale, this.bodyScale)
        },
        draw: function() {
            this.parent()
        },
        killOutOfLayer: function() {
            if (!1 != this.killOutLayer && (this.pos.x < ig.game.screen.x - this.size.x || this.pos.x > ig.game.screen.x + ig.system.width || this.pos.y < ig.game.screen.y - this.size.y || this.pos.y > ig.game.screen.y + ig.system.height)) console.log("kill outside layer"), this.kill()
        },
        setSpriteSheet: function(b) {
            this[b + "Sheet"] = new ig.AnimationSheet(this[b +
                "SheetInfo"].sheetImage.path, this[b + "SheetInfo"].sheetImage.width / this[b + "SheetInfo"].sheetX, this[b + "SheetInfo"].sheetImage.height / this[b + "SheetInfo"].sheetY)
        },
        setSize: function(b) {
            this.size.x = this[b + "SheetInfo"].sheetImage.width / this[b + "SheetInfo"].sheetX;
            this.size.y = this[b + "SheetInfo"].sheetImage.height / this[b + "SheetInfo"].sheetY
        },
        setPosition: function() {
            "center" == this.horizontal ? this.pos.x -= this.size.x / 2 : "left" == this.horizontal ? this.pos.x = this.pos.x : "right" == this.horizontal && (this.pos.x -= this.size.x);
            "center" == this.vertical ? this.pos.y -= this.size.y / 2 : "top" == this.vertical ? this.pos.y = this.pos.y : "bottom" == this.vertical && (this.pos.y -= this.size.y)
        },
        arrangeClockwise: function(b) {
            var c = b.length,
                d, e = 1,
                f = c - 1,
                j = [],
                n, l;
            b.sort(this.pointXsort);
            j[0] = b[0];
            n = b[0];
            l = b[c - 1];
            for (i = 1; i < c - 1; i++) d = this.det(n.x, n.y, l.x, l.y, b[i].x, b[i].y), 0 > d ? j[e++] = b[i] : j[f--] = b[i];
            j[e] = b[c - 1];
            return j
        },
        det: function(b, c, d, e, f, j) {
            return b * e + d * j + f * c - c * d - e * f - j * b
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.ball").requires("game.entities.others.marketjs-box2d-entity").defines(function() {
    EntityBall = EntityMarketjsBox2dEntity.extend({
        zIndex: 4,
        type: ig.Entity.TYPE.B,
        box2dType: 1,
        dynamicType: 0,
        density: 0.001,
        friction: 0,
        restitution: 0,
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/game/ball.png"),
            sheetX: 1,
            sheetY: 1
        },
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 1, [0], !0)
        },
        update: function() {
            this.parent();
            if (!ig.game.paused) {
                var b =
                    new Box2D.Common.Math.b2Vec2(0, 600 * this.body.GetMass() * Box2D.SCALE);
                this.body.ApplyForce(b, this.body.GetPosition())
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-text-start").requires("game.entities.buttons.button-text").defines(function() {
    EntityButtonTextStart = EntityButtonText.extend({
        zIndex: 1,
        vertical: "center",
        horizontal: "center",
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/buttons/button-text.png"),
            sheetX: 1,
            sheetY: 1
        },
        textColor: "#ffffff",
        font: "handel-gothic",
        textSize: 35,
        textPos: {
            x: 0.5,
            y: 0.5
        },
        scaling: !0,
        offsetY: 5,
        pointerFocus: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet,
                1, [0], !0);
            this.setPosition();
            this.pos.y += ig.system.height
        },
        update: function() {
            this.parent();
            this.pointerCollide()
        },
        pointerCollide: function() {
            if (!ig.ua.mobile && !ig.game.easing) {
                var b = ig.game.getEntitiesByType(EntityPointer)[0];
                if (!this.pointerFocus || !(this.pos.x <= b.pos.x && this.pos.y <= b.pos.y && this.pos.x + this.size.x >= b.pos.x && this.pos.y + this.size.y + this.offsetY >= b.pos.y)) this.pos.x <= b.pos.x && this.pos.y <= b.pos.y && this.pos.x + this.size.x >= b.pos.x && this.pos.y + this.size.y >= b.pos.y ? this.pointerFocus || (this.pos.y -=
                    this.offsetY, this.pointerFocus = !0) : this.pointerFocus && (this.pos.y += this.offsetY, this.pointerFocus = !1)
            }
        },
        easeOut: function() {
            this.tween({
                pos: {
                    y: this.pos.y - ig.system.height
                }
            }, 0.2, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {
                    this.buttonClicked && ig.game.director.loadLevel(2);
                    this.pos.y += 2 * ig.system.height
                }.bind(this)
            }).start()
        },
        easeIn: function() {
            this.tween({
                pos: {
                    y: this.pos.y - ig.system.height
                }
            }, 0.2, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {}.bind(this)
            }).start()
        },
        clicked: function() {
            !1 ==
                ig.game.easing && (ig.soundHandler.sfxPlayer.play("button"), ig.game.easing = !0, this.tween({
                    bodyScale: 0.8
                }, 0.1, {
                    easing: ig.Tween.Easing.Linear.EaseNone,
                    onComplete: function() {
                        this.tween({
                            bodyScale: 1
                        }, 0.1, {
                            easing: ig.Tween.Easing.Linear.EaseNone,
                            onComplete: function() {
                                this.buttonClicked = !0;
                                this.controller.easeOut()
                            }.bind(this)
                        }).start()
                    }.bind(this)
                }).start())
        },
        clicking: function() {},
        released: function() {}
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-text-settings").requires("game.entities.buttons.button-text").defines(function() {
    EntityButtonTextSettings = EntityButtonText.extend({
        zIndex: 1,
        vertical: "center",
        horizontal: "center",
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/buttons/button-text.png"),
            sheetX: 1,
            sheetY: 1
        },
        textColor: "#ffffff",
        font: "handel-gothic",
        textSize: 33,
        textPos: {
            x: 0.5,
            y: 0.5
        },
        scaling: !0,
        offsetY: 5,
        pointerFocus: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle =
                new ig.Animation(this.idleSheet, 1, [0], !0);
            this.setPosition();
            this.pos.y += ig.system.height
        },
        update: function() {
            this.parent();
            this.pointerCollide()
        },
        pointerCollide: function() {
            if (!ig.ua.mobile && !ig.game.easing) {
                var b = ig.game.getEntitiesByType(EntityPointer)[0];
                if (!this.pointerFocus || !(this.pos.x <= b.pos.x && this.pos.y <= b.pos.y && this.pos.x + this.size.x >= b.pos.x && this.pos.y + this.size.y + this.offsetY >= b.pos.y)) this.pos.x <= b.pos.x && this.pos.y <= b.pos.y && this.pos.x + this.size.x >= b.pos.x && this.pos.y + this.size.y >=
                    b.pos.y ? this.pointerFocus || (this.pos.y -= this.offsetY, this.pointerFocus = !0) : this.pointerFocus && (this.pos.y += this.offsetY, this.pointerFocus = !1)
            }
        },
        easeOut: function() {
            this.tween({
                pos: {
                    y: this.pos.y - ig.system.height
                }
            }, 0.2, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {
                    this.pos.y += 2 * ig.system.height;
                    this.controller.popUpSettings.easeIn()
                }.bind(this)
            }).start()
        },
        easeIn: function() {
            this.tween({
                pos: {
                    y: this.pos.y - ig.system.height
                }
            }, 0.2, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {}.bind(this)
            }).start()
        },
        clicked: function() {
            !1 == ig.game.easing && (ig.soundHandler.sfxPlayer.play("button"),
                ig.game.easing = !0, this.tween({
                    bodyScale: 0.8
                }, 0.1, {
                    easing: ig.Tween.Easing.Linear.EaseNone,
                    onComplete: function() {
                        this.tween({
                            bodyScale: 1
                        }, 0.1, {
                            easing: ig.Tween.Easing.Linear.EaseNone,
                            onComplete: function() {
                                this.controller.easeOut()
                            }.bind(this)
                        }).start()
                    }.bind(this)
                }).start())
        },
        clicking: function() {},
        released: function() {}
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-pause").requires("game.entities.buttons.button").defines(function() {
    EntityButtonPause = EntityButton.extend({
        zIndex: 5,
        vertical: "top",
        horizontal: "right",
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/buttons/button-pause.png"),
            sheetX: 1,
            sheetY: 1
        },
        scaling: !0,
        offsetY: 5,
        pointerFocus: !1,
        enable: !0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 1, [0], !0);
            this.setPosition()
        },
        update: function() {
            this.parent();
            this.enable && this.pointerCollide()
        },
        pointerCollide: function() {
            if (!ig.ua.mobile && !ig.game.easing && null == this.controller.popUpResult) {
                var b = ig.game.getEntitiesByType(EntityPointer)[0];
                if (!this.pointerFocus || !(this.pos.x <= b.pos.x && this.pos.y <= b.pos.y && this.pos.x + this.size.x >= b.pos.x && this.pos.y + this.size.y + this.offsetY >= b.pos.y)) this.pos.x <= b.pos.x && this.pos.y <= b.pos.y && this.pos.x + this.size.x >= b.pos.x && this.pos.y + this.size.y >= b.pos.y ? this.pointerFocus || (this.pos.y -= this.offsetY, this.pointerFocus = !0) :
                    this.pointerFocus && (this.pos.y += this.offsetY, this.pointerFocus = !1)
            }
        },
        clicked: function() {
            !1 == ig.game.easing && (null == this.controller.popUpResult && this.enable) && (ig.soundHandler.sfxPlayer.play("button"), ig.game.easing = !0, this.tween({
                bodyScale: 0.8
            }, 0.1, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {
                    this.tween({
                        bodyScale: 1
                    }, 0.1, {
                        easing: ig.Tween.Easing.Linear.EaseNone,
                        onComplete: function() {
                            ig.game.paused = !0;
                            this.controller.popUpPause.easeIn()
                        }.bind(this)
                    }).start()
                }.bind(this)
            }).start())
        },
        clicking: function() {},
        released: function() {}
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-home").requires("game.entities.buttons.button").defines(function() {
    EntityButtonHome = EntityButton.extend({
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/buttons/button-home.png"),
            sheetX: 1,
            sheetY: 1
        },
        ignorePause: !0,
        scaling: !0,
        offsetY: 0,
        pointerFocus: !1,
        screenPos: {
            x: 0,
            y: 0
        },
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 1, [0], !0);
            this.setPosition();
            this.pos.y += ig.system.height
        },
        update: function() {
            this.screenMove &&
                (ig.game.screen.x = this.screenPos.x, ig.game.screen.y = this.screenPos.y);
            this.parent();
            this.pointerCollide()
        },
        pointerCollide: function() {
            if (!ig.ua.mobile && !ig.game.easing) {
                var b = ig.game.getEntitiesByType(EntityPointer)[0];
                if (!this.pointerFocus || !(this.pos.x <= b.pos.x && this.pos.y <= b.pos.y && this.pos.x + this.size.x >= b.pos.x && this.pos.y + this.size.y + 5 >= b.pos.y)) this.pos.x <= b.pos.x && this.pos.y <= b.pos.y && this.pos.x + this.size.x >= b.pos.x && this.pos.y + this.size.y >= b.pos.y ? this.pointerFocus || (this.offsetY = -5, this.pointerFocus = !0) : this.pointerFocus && (this.offsetY = 0, this.pointerFocus = !1)
            }
        },
        clicked: function() {
            !1 == ig.game.easing && (ig.soundHandler.sfxPlayer.play("button"), ig.game.easing = !0, this.tween({
                bodyScale: 0.8
            }, 0.1, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {
                    this.tween({
                        bodyScale: 1
                    }, 0.1, {
                        easing: ig.Tween.Easing.Linear.EaseNone,
                        onComplete: function() {
                            this.screenMove = !0;
                            ig.game.screenMove = !0;
                            this.tween({
                                screenPos: {
                                    x: 0,
                                    y: ig.system.height
                                }
                            }, 0.3, {
                                easing: ig.Tween.Easing.Linear.EaseNone,
                                onComplete: function() {
                                    this.screenMove =
                                        ig.game.paused = !1;
                                    ig.game.screenMove = !1;
                                    ig.game.director.loadLevel(1)
                                }.bind(this)
                            }).start()
                        }.bind(this)
                    }).start()
                }.bind(this)
            }).start())
        },
        clicking: function() {},
        released: function() {}
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-restart").requires("game.entities.buttons.button").defines(function() {
    EntityButtonRestart = EntityButton.extend({
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/buttons/button-restart.png"),
            sheetX: 1,
            sheetY: 1
        },
        ignorePause: !0,
        scaling: !0,
        offsetY: 0,
        pointerFocus: !1,
        screenPos: {
            x: 0,
            y: 0
        },
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 1, [0], !0);
            this.setPosition();
            this.pos.y += ig.system.height
        },
        update: function() {
            this.screenMove &&
                (ig.game.screen.x = this.screenPos.x, ig.game.screen.y = this.screenPos.y);
            this.parent();
            this.pointerCollide()
        },
        pointerCollide: function() {
            if (!ig.ua.mobile && !ig.game.easing) {
                var b = ig.game.getEntitiesByType(EntityPointer)[0];
                if (!this.pointerFocus || !(this.pos.x <= b.pos.x && this.pos.y <= b.pos.y && this.pos.x + this.size.x >= b.pos.x && this.pos.y + this.size.y + 5 >= b.pos.y)) this.pos.x <= b.pos.x && this.pos.y <= b.pos.y && this.pos.x + this.size.x >= b.pos.x && this.pos.y + this.size.y >= b.pos.y ? this.pointerFocus || (this.offsetY = -5, this.pointerFocus = !0) : this.pointerFocus && (this.offsetY = 0, this.pointerFocus = !1)
            }
        },
        clicked: function() {
            if (!1 == ig.game.easing) {
                ig.soundHandler.sfxPlayer.play("button");
                var b = this;
                ig.gd.show(function() {
                    console.log("ttest");
                    ig.game.easing = !0;
                    b.tween({
                        bodyScale: 0.8
                    }, 0.1, {
                        easing: ig.Tween.Easing.Linear.EaseNone,
                        onComplete: function() {
                            b.tween({
                                bodyScale: 1
                            }, 0.1, {
                                easing: ig.Tween.Easing.Linear.EaseNone,
                                onComplete: function() {
                                    b.screenMove = !0;
                                    ig.game.screenMove = !0;
                                    b.tween({
                                        screenPos: {
                                            x: 0,
                                            y: ig.system.height
                                        }
                                    }, 0.3, {
                                        easing: ig.Tween.Easing.Linear.EaseNone,
                                        onComplete: function() {
                                            ig.game.paused = !1;
                                            b.screenMove = !1;
                                            ig.game.screenMove = !1;
                                            ig.game.director.reloadLevel()
                                        }.bind(b)
                                    }).start()
                                }.bind(b)
                            }).start()
                        }.bind(b)
                    }).start()
                })
            }
        },
        clicking: function() {},
        released: function() {}
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-controller").requires("game.entities.buttons.button").defines(function() {
    EntityButtonController = EntityButton.extend({
        zIndex: 6,
        size: {
            x: 270,
            y: 960
        },
        clickingButton: !1,
        transparentBg: !1,
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        update: function() {
            this.parent();
            if (this.paddle.click) {
                var b = !1,
                    c;
                for (c in ig.input.touches)
                    if (ig.input.touches[c].x > this.pos.x && ig.input.touches[c].x < this.pos.x + this.size.x && ig.input.touches[c].y > this.pos.y && ig.input.touches[c].y < this.pos.y +
                        this.size.y) {
                        b = !0;
                        break
                    }!1 == b && this.released()
            }
        },
        clicked: function() {
            !1 == ig.game.easing && (this.paddle.click = !0)
        },
        clicking: function() {},
        released: function() {
            this.paddle.click = !1
        },
        draw: function() {
            this.parent();
            this.transparentBg && (ig.system.context.fillStyle = "rgba(0,0,0,0.7)", ig.system.context.fillRect(this.pos.x, this.pos.y, this.size.x, this.size.y))
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.board").requires("game.entities.others.marketjs-entity").defines(function() {
    EntityBoard = EntityMarketjsEntity.extend({
        zIndex: 1,
        vertical: "bottom",
        horizontal: "center",
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/game/board.png"),
            sheetX: 1,
            sheetY: 1
        },
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 1, [0], !0);
            this.setPosition();
            this.paddleRight = ig.game.spawnEntity(EntityPaddleRight, this.pos.x + 10.6 * this.size.x /
                20 + 1, this.pos.y + 17.1 * this.size.y / 20 - 1, {
                    controller: this.controller
                });
            this.paddleLeft = ig.game.spawnEntity(EntityPaddleLeft, this.pos.x + 6.5 * this.size.x / 20 - 1, this.pos.y + 17.1 * this.size.y / 20 - 1, {
                controller: this.controller
            });
            this.circle1 = ig.game.spawnEntity(EntityCircleObs, this.pos.x + 2.18 * this.size.x / 20, this.pos.y + 1.2 * this.size.y / 20, {
                controller: this.controller,
                circleType: 1
            });
            this.circle2 = ig.game.spawnEntity(EntityCircleObs, this.pos.x + 10.5 * this.size.x / 20, this.pos.y + 4.5 * this.size.y / 20, {
                controller: this.controller,
                circleType: 2
            });
            this.circle3 = ig.game.spawnEntity(EntityCircleObs, this.pos.x + 6.7 * this.size.x / 20, this.pos.y + 4.8 * this.size.y / 20, {
                controller: this.controller,
                circleType: 2
            });
            this.circle4 = ig.game.spawnEntity(EntityCircleObs, this.pos.x + 9 * this.size.x / 20, this.pos.y + 6.5 * this.size.y / 20, {
                controller: this.controller,
                circleType: 1
            });
            this.topRightObs = ig.game.spawnEntity(EntityTopRightObs, this.pos.x + 12.5 * this.size.x / 20, this.pos.y + 3.5 * this.size.y / 20, {
                controller: this.controller
            });
            this.topMiddleObs = ig.game.spawnEntity(EntityTopMiddleObs,
                this.pos.x + 4.8 * this.size.x / 20, this.pos.y + 2.3 * this.size.y / 20, {
                    controller: this.controller
                });
            this.topLeftObs = ig.game.spawnEntity(EntityTopLeftObs, this.pos.x + 2.7 * this.size.x / 20, this.pos.y + 5 * this.size.y / 20, {
                controller: this.controller
            });
            this.bottomRightObs = ig.game.spawnEntity(EntityBottomRightObs, this.pos.x + 11.75 * this.size.x / 20 + 8, this.pos.y + 14.4 * this.size.y / 20, {
                controller: this.controller
            });
            this.bottomLeftObs = ig.game.spawnEntity(EntityBottomLeftObs, this.pos.x + 5.7 * this.size.x / 20 - 10, this.pos.y + 14.4 * this.size.y /
                20, {
                    controller: this.controller
                });
            this.paddleLineRight = ig.game.spawnEntity(EntityPaddleLineRight, this.pos.x + 12.8 * this.size.x / 20, this.pos.y + 14.54 * this.size.y / 20, {
                controller: this.controller
            });
            this.paddleLineLeft = ig.game.spawnEntity(EntityPaddleLineLeft, this.pos.x + 2.1 * this.size.x / 20, this.pos.y + 14.5 * this.size.y / 20, {
                controller: this.controller
            });
            this.verticalSmall = ig.game.spawnEntity(EntityVerticalSmall, this.pos.x + 9.8 * this.size.x / 20, this.pos.y + 2.5 * this.size.y / 20, {
                controller: this.controller
            });
            this.verticalNormal1 =
                ig.game.spawnEntity(EntityVerticalNormal, this.pos.x + 7.5 * this.size.x / 20, this.pos.y + 10 * this.size.y / 20, {
                    controller: this.controller
                });
            this.verticalNormal2 = ig.game.spawnEntity(EntityVerticalNormal, this.pos.x + 9.8 * this.size.x / 20, this.pos.y + 9.5 * this.size.y / 20, {
                controller: this.controller
            });
            this.verticalNormal3 = ig.game.spawnEntity(EntityVerticalNormal, this.pos.x + 12.05 * this.size.x / 20, this.pos.y + 10 * this.size.y / 20, {
                controller: this.controller
            });
            this.verticalBig = ig.game.spawnEntity(EntityVerticalBig, this.pos.x +
                3.9 * this.size.x / 20 - 5, this.pos.y + 14.5 * this.size.y / 20, {
                    controller: this.controller
                });
            this.star = ig.game.spawnEntity(EntityStar, this.pos.x + 3.7 * this.size.x / 20, this.pos.y + 4.8 * this.size.y / 20, {
                controller: this.controller
            });
            this.topUpdec = ig.game.spawnEntity(EntityTopUpDec, this.pos.x + 13.6 * this.size.x / 20, this.pos.y + 7 * this.size.y / 20, {
                controller: this.controller
            });
            this.topDownDec = ig.game.spawnEntity(EntityTopDownDec, this.pos.x + 1.3 * this.size.x / 20, this.pos.y + 5.7 * this.size.y / 20, {
                controller: this.controller
            });
            this.bottomRightDec =
                ig.game.spawnEntity(EntityBottomRightDec, this.pos.x + 3.2 * this.size.x / 20, this.pos.y + 16.7 * this.size.y / 20, {
                    controller: this.controller
                });
            this.bottomLeftDec = ig.game.spawnEntity(EntityBottomLeftDec, this.pos.x + 13.5 * this.size.x / 20, this.pos.y + 16.7 * this.size.y / 20, {
                controller: this.controller
            });
            this.circleLineMark = ig.game.spawnEntity(EntityCircleLineMark, this.pos.x, this.pos.y, {
                controller: this.controller,
                size: {
                    x: this.size.x,
                    y: this.size.y
                }
            });
            this.boardCover = ig.game.spawnEntity(EntityBoardCover, this.pos.x, this.pos.y, {
                controller: this.controller
            })
        },
        update: function() {
            this.parent()
        },
        draw: function() {
            this.parent()
        }
    });
    EntityBoardCover = EntityMarketjsEntity.extend({
        zIndex: 11,
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/game/board-cover.png"),
            sheetX: 1,
            sheetY: 1
        },
        bg: new ig.Image("media/graphics/sprites/background/0-bg.png"),
        fg1: new ig.Image("media/graphics/sprites/background/1-fg.png"),
        fg2: new ig.Image("media/graphics/sprites/background/2-fg.png"),
        fg3: new ig.Image("media/graphics/sprites/background/3-fg.png"),
        fg4: new ig.Image("media/graphics/sprites/background/4-fg.png"),
        fg5: new ig.Image("media/graphics/sprites/background/5-fg.png"),
        fg6: new ig.Image("media/graphics/sprites/background/6-fg.png"),
        bottomBorder: new ig.Image("media/graphics/sprites/game/board.png"),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 1, [0], !0)
        },
        draw: function() {
            this.parent();
            ig.game.screenMove || (ig.system.context.save(), ig.system.context.translate(-ig.game.screen.x, -ig.game.screen.y),
                ig.system.context.drawImage(this.bg.data, 0, this.controller.board.pos.y + this.controller.board.size.y - 14, this.bg.width, this.bg.height, 0, this.controller.board.pos.y + this.controller.board.size.y - 14, this.bg.width, this.bg.height), ig.system.context.drawImage(this.fg1.data, 0, this.controller.board.pos.y + this.controller.board.size.y - 14, this.fg1.width, this.fg1.height, 0, this.controller.board.pos.y + this.controller.board.size.y - 14, this.fg1.width, this.fg1.height), ig.system.context.drawImage(this.fg2.data, 0, this.controller.board.pos.y +
                    this.controller.board.size.y - 14, this.fg2.width, this.fg2.height, 0, this.controller.board.pos.y + this.controller.board.size.y - 14, this.fg2.width, this.fg2.height), ig.system.context.drawImage(this.fg3.data, 0, this.controller.board.pos.y + this.controller.board.size.y - 14, this.fg3.width, this.fg3.height, 0, this.controller.board.pos.y + this.controller.board.size.y - 14, this.fg3.width, this.fg3.height), ig.system.context.drawImage(this.fg4.data, 0, this.controller.board.pos.y + this.controller.board.size.y - 14, this.fg4.width,
                    this.fg4.height, 0, this.controller.board.pos.y + this.controller.board.size.y - 14, this.fg4.width, this.fg4.height), ig.system.context.drawImage(this.fg5.data, 0, this.controller.board.pos.y + this.controller.board.size.y - 14, this.fg5.width, this.fg5.height, 0, this.controller.board.pos.y + this.controller.board.size.y - 14, this.fg5.width, this.fg5.height), ig.system.context.drawImage(this.fg6.data, 0, this.controller.board.pos.y + this.controller.board.size.y - 14, this.fg6.width, this.fg6.height, 0, this.controller.board.pos.y +
                    this.controller.board.size.y - 14, this.fg6.width, this.fg6.height), ig.system.context.drawImage(this.bottomBorder.data, 0, this.controller.board.size.y - 14, this.controller.board.size.x, 14, this.pos.x + 0.5, this.controller.board.pos.y + this.controller.board.size.y - 14, this.controller.board.size.x, 14), ig.system.context.restore())
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.board-ball").requires("game.entities.others.marketjs-entity").defines(function() {
    EntityBoardBall = EntityMarketjsEntity.extend({
        zIndex: 1,
        vertical: "top",
        horizontal: "left",
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/game/board-ball.png"),
            sheetX: 1,
            sheetY: 1
        },
        ballIMage: new ig.Image("media/graphics/sprites/game/ball.png"),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 1, [0], !0);
            this.setPosition()
        },
        update: function() {
            this.parent()
        },
        draw: function() {
            this.parent();
            ig.system.context.save();
            ig.system.context.translate(-ig.game.screen.x, -ig.game.screen.y);
            3 <= ig.game.ballLeft && this.ballIMage.draw(this.pos.x + 1 * this.size.x / 4 - this.ballIMage.width / 2, this.pos.y + this.size.y / 2 - this.ballIMage.height / 2);
            2 <= ig.game.ballLeft && this.ballIMage.draw(this.pos.x + this.size.x / 2 - this.ballIMage.width / 2, this.pos.y + this.size.y / 2 - this.ballIMage.height / 2);
            1 <= ig.game.ballLeft && this.ballIMage.draw(this.pos.x + 3 * this.size.x / 4 - this.ballIMage.width / 2, this.pos.y +
                this.size.y / 2 - this.ballIMage.height / 2);
            ig.system.context.restore()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.board-score").requires("game.entities.others.marketjs-entity").defines(function() {
    EntityBoardScore = EntityMarketjsEntity.extend({
        zIndex: 1,
        vertical: "top",
        horizontal: "left",
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/game/board-score.png"),
            sheetX: 1,
            sheetY: 1
        },
        showScore: !0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 1, [0], !0);
            this.setPosition()
        },
        update: function() {
            this.parent()
        },
        draw: function() {
            this.parent();
            ig.system.context.save();
            ig.system.context.font = "25px handel-gothic";
            ig.system.context.textAlign = "right";
            ig.system.context.textBaseline = "middle";
            ig.system.context.fillStyle = "#ffffff";
            ig.system.context.translate(-ig.game.screen.x, -ig.game.screen.y);
            this.showScore && ig.system.context.fillText(ig.game.gameScore, this.pos.x + 14 * this.size.x / 15, this.pos.y + 1.1 * this.size.y / 2);
            ig.system.context.restore()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.pop-up-pause").requires("game.entities.others.marketjs-entity", "game.entities.buttons.button").defines(function() {
    EntityPopUpPause = EntityMarketjsEntity.extend({
        zIndex: 976,
        vertical: "center",
        horizontal: "center",
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/pop-up/pop-up-bg-small.png"),
            sheetX: 1,
            sheetY: 1
        },
        ignorePause: !0,
        icoBgm: new ig.Image("media/graphics/sprites/pop-up/ico-bgm.png"),
        icoSfx: new ig.Image("media/graphics/sprites/pop-up/ico-sfx.png"),
        buttonHome: null,
        buttonRestart: null,
        buttonResume: null,
        buttonGameModeoptions: [],
        barBgm: null,
        barSfx: null,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 1, [0], !0);
            this.setPosition();
            this.pos.y += ig.system.height;
            this.buttonHome = ig.game.spawnEntity(EntityButtonHome, ig.system.width, ig.system.height, {
                controller: this.controller,
                zIndex: this.zIndex + 1
            });
            this.buttonRestart = ig.game.spawnEntity(EntityButtonRestart, ig.system.width, ig.system.height, {
                controller: this.controller,
                zIndex: this.zIndex +
                    1
            });
            this.buttonResume = ig.game.spawnEntity(EntityPUPauseButtonResume, ig.system.width, ig.system.height, {
                controller: this.controller,
                zIndex: this.zIndex + 1
            });
            this.barBgm = ig.game.spawnEntity(EntityPUPauseBarBgm, ig.system.width, ig.system.height, {
                controller: this.controller,
                zIndex: this.zIndex + 1
            });
            this.barSfx = ig.game.spawnEntity(EntityPUPauseBarSfx, ig.system.width, ig.system.height, {
                controller: this.controller,
                zIndex: this.zIndex + 1
            })
        },
        update: function() {
            this.parent();
            this.buttonHome.pos.x = this.pos.x + 1 * this.size.x /
                4 - 1 * this.buttonHome.size.x / 2;
            this.buttonHome.pos.y = this.pos.y + 16 * this.size.y / 20 - 1 * this.buttonHome.size.y / 2 + this.buttonHome.offsetY;
            this.buttonRestart.pos.x = this.pos.x + 2 * this.size.x / 4 - 1 * this.buttonRestart.size.x / 2;
            this.buttonRestart.pos.y = this.pos.y + 16 * this.size.y / 20 - 1 * this.buttonRestart.size.y / 2 + this.buttonRestart.offsetY;
            this.buttonResume.pos.x = this.pos.x + 3 * this.size.x / 4 - 1 * this.buttonResume.size.x / 2;
            this.buttonResume.pos.y = this.pos.y + 16 * this.size.y / 20 - 1 * this.buttonResume.size.y / 2 + this.buttonResume.offsetY;
            this.barBgm.pos.x = this.pos.x + 9 * this.size.x / 10 - this.barBgm.size.x;
            this.barBgm.pos.y = this.pos.y + 7.5 * this.size.y / 20 - 1 * this.barBgm.size.y / 2;
            this.barSfx.pos.x = this.pos.x + 9 * this.size.x / 10 - this.barSfx.size.x;
            this.barSfx.pos.y = this.pos.y + 11 * this.size.y / 20 - 1 * this.barSfx.size.y / 2
        },
        draw: function() {
            ig.game.paused && (ig.system.context.fillStyle = "rgba(0,0,0,0.7)", ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height));
            this.parent();
            ig.system.context.save();
            var b = this.pos.x + 1 * this.size.x / 2,
                c = this.pos.y +
                1.9 * this.size.y / 20;
            ig.system.context.font = "40px handel-gothic";
            ig.system.context.fillStyle = "#FFFFFF";
            ig.system.context.textAlign = "center";
            ig.system.context.textBaseline = "middle";
            ig.system.context.fillText(_STRINGS.Game.Pause, b, c - ig.game.screen.y);
            ig.system.context.restore()
        },
        easeOut: function() {
            this.tween({
                pos: {
                    y: this.pos.y - ig.system.height
                }
            }, 0.2, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {
                    this.pos.y += 2 * ig.system.height;
                    ig.game.easing = !1;
                    ig.game.paused = !1
                }.bind(this)
            }).start()
        },
        easeIn: function() {
            this.tween({
                pos: {
                    y: this.pos.y -
                        ig.system.height
                }
            }, 0.2, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {
                    ig.game.easing = !1
                }.bind(this)
            }).start()
        },
        kill: function() {
            this.parent();
            this.buttonHome.kill();
            this.buttonRestart.kill();
            this.buttonResume.kill();
            this.barBgm.kill();
            this.barSfx.kill()
        }
    });
    EntityPUPauseButtonResume = EntityButton.extend({
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/buttons/button-resume.png"),
            sheetX: 1,
            sheetY: 1
        },
        ignorePause: !0,
        scaling: !0,
        offsetY: 0,
        pointerFocus: !1,
        init: function(b, c, d) {
            this.parent(b,
                c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 1, [0], !0)
        },
        update: function() {
            this.parent();
            this.pointerCollide()
        },
        pointerCollide: function() {
            if (!ig.ua.mobile && !ig.game.easing) {
                var b = ig.game.getEntitiesByType(EntityPointer)[0];
                if (!this.pointerFocus || !(this.pos.x <= b.pos.x && this.pos.y <= b.pos.y && this.pos.x + this.size.x >= b.pos.x && this.pos.y + this.size.y + 5 >= b.pos.y)) this.pos.x <= b.pos.x && this.pos.y <= b.pos.y && this.pos.x + this.size.x >= b.pos.x && this.pos.y + this.size.y >= b.pos.y ? this.pointerFocus ||
                    (this.offsetY = -5, this.pointerFocus = !0) : this.pointerFocus && (this.offsetY = 0, this.pointerFocus = !1)
            }
        },
        clicked: function() {
            !1 == ig.game.easing && (ig.soundHandler.sfxPlayer.play("button"), ig.game.easing = !0, this.tween({
                bodyScale: 0.8
            }, 0.1, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {
                    this.tween({
                        bodyScale: 1
                    }, 0.1, {
                        easing: ig.Tween.Easing.Linear.EaseNone,
                        onComplete: function() {
                            this.controller.popUpPause.easeOut()
                        }.bind(this)
                    }).start()
                }.bind(this)
            }).start())
        },
        clicking: function() {},
        released: function() {}
    });
    EntityPUPauseBar = EntityMarketjsEntity.extend({
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/pop-up/volume-bar-bg.png"),
            sheetX: 1,
            sheetY: 1
        },
        ignorePause: !0,
        bar: new ig.Image("media/graphics/sprites/pop-up/volume-bar.png"),
        volume: 1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 1, [0], !0);
            this.sliderBar = ig.game.spawnEntity(EntityPUPauseSliderBar, ig.system.width, ig.system.height, {
                bar: this,
                zIndex: this.zIndex + 1
            })
        },
        update: function() {
            this.parent();
            if (this.move) {
                var b = !1,
                    c, d;
                for (d in ig.input.touches) {
                    b = !0;
                    c = ig.input.touches[d].x - this.pos.x;
                    break
                }!1 == b ? this.sliderBar.released() : (0 > c ? c = 0 : c > this.size.x && (c = this.size.x), this.volume = c / this.size.x)
            }
            this.sliderBar.pos.x = this.pos.x + 1 * this.sliderBar.size.x / 2 + (this.bar.width - this.sliderBar.size.x) * this.bodyScale * this.volume - 1 * this.sliderBar.size.x / 2;
            this.sliderBar.pos.y = this.pos.y + 1 * this.size.y / 2 - 1 * this.sliderBar.size.y / 2
        },
        draw: function() {
            this.parent();
            if (0 < this.volume) {
                ig.system.context.save();
                var b =
                    100 < this.volume ? 100 : this.volume;
                ig.system.context.drawImage(this.bar.data, 0, 0, this.bar.width * b, this.bar.height, this.pos.x + 1 * this.size.x / 2 - this.bar.width * this.bodyScale / 2, this.pos.y + 1 * this.size.y / 2 - this.bar.height * this.bodyScale / 2 - ig.game.screen.y, this.bar.width * this.bodyScale * b, this.bar.height * this.bodyScale);
                ig.system.context.restore()
            }
        },
        updateTarget: function() {},
        kill: function() {
            this.parent();
            this.sliderBar.kill()
        }
    });
    EntityPUPauseSliderBar = EntityButton.extend({
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/pop-up/slider-bar.png"),
            sheetX: 1,
            sheetY: 1
        },
        ignorePause: !0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 1, [0], !0)
        },
        clicked: function() {
            !1 == ig.game.easing && (ig.soundHandler.sfxPlayer.play("button"), ig.game.easing = !0, this.bar.move = !0)
        },
        clicking: function() {},
        released: function() {
            this.bar.updateTarget();
            this.bar.move = !1;
            ig.game.easing = !1;
            ig.soundHandler.sfxPlayer.play("button")
        }
    });
    EntityPUPauseBarBgm = EntityPUPauseBar.extend({
        ico: new ig.Image("media/graphics/sprites/pop-up/ico-bgm.png"),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.volume = ig.game.volumeBgm
        },
        update: function() {
            this.parent();
            this.move && (ig.game.volumeBgm = this.volume, ig.soundHandler.bgmPlayer.volume(ig.game.volumeBgm))
        },
        draw: function() {
            this.parent();
            ig.system.context.save();
            ig.system.context.drawImage(this.ico.data, this.controller.popUpPause.pos.x + 1 * this.controller.popUpPause.size.x / 10, this.pos.y + 1 * this.size.y / 2 - this.ico.height * this.bodyScale / 2 - ig.game.screen.y, this.ico.width * this.bodyScale, this.ico.height * this.bodyScale);
            ig.system.context.restore()
        },
        updateTarget: function() {
            ig.game.save("volumeBgm", this.volume)
        }
    });
    EntityPUPauseBarSfx = EntityPUPauseBar.extend({
        ico: new ig.Image("media/graphics/sprites/pop-up/ico-sfx.png"),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.volume = ig.game.volumeSfx
        },
        update: function() {
            this.parent();
            this.move && (ig.game.volumeSfx = this.volume, ig.soundHandler.sfxPlayer.volume(ig.game.volumeSfx))
        },
        draw: function() {
            this.parent();
            ig.system.context.save();
            ig.system.context.drawImage(this.ico.data, this.controller.popUpPause.pos.x +
                1 * this.controller.popUpPause.size.x / 10, this.pos.y + 1 * this.size.y / 2 - this.ico.height * this.bodyScale / 2 - ig.game.screen.y, this.ico.width * this.bodyScale, this.ico.height * this.bodyScale);
            ig.system.context.restore()
        },
        updateTarget: function() {
            ig.game.save("volumeSfx", this.volume)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.pop-up-result").requires("game.entities.others.marketjs-entity").defines(function() {
    EntityPopUpResult = EntityMarketjsEntity.extend({
        zIndex: 977,
        vertical: "center",
        horizontal: "center",
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/pop-up/pop-up-bg-big.png"),
            sheetX: 1,
            sheetY: 1
        },
        ignorePause: !0,
        buttonHome: null,
        buttonRestart: null,
        scoreToShow: 0,
        scoreTextFontSize: 0,
        showScoreNumber: !1,
        highscoreIndex: null,
        highscoreStyle: null,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 1, [0], !0);
            this.setPosition();
            this.pos.y += ig.system.height;
            this.buttonHome = ig.game.spawnEntity(EntityButtonHome, ig.system.width, ig.system.height, {
                controller: this.controller,
                zIndex: this.zIndex + 1
            });
            this.buttonRestart = ig.game.spawnEntity(EntityButtonRestart, ig.system.width, ig.system.height, {
                controller: this.controller,
                zIndex: this.zIndex + 1
            });
            this.easeIn()
        },
        update: function() {
            this.parent();
            this.buttonHome.pos.x = this.pos.x + 1 * this.size.x / 3 - 1 * this.buttonHome.size.x /
                2;
            this.buttonHome.pos.y = this.pos.y + 17.5 * this.size.y / 20 - 1 * this.buttonHome.size.y / 2 + this.buttonHome.offsetY;
            this.buttonRestart.pos.x = this.pos.x + 2 * this.size.x / 3 - 1 * this.buttonRestart.size.x / 2;
            this.buttonRestart.pos.y = this.pos.y + 17.5 * this.size.y / 20 - 1 * this.buttonRestart.size.y / 2 + this.buttonRestart.offsetY
        },
        draw: function() {
            ig.system.context.fillStyle = "rgba(0,0,0,0.7)";
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            this.parent();
            ig.system.context.save();
            var b = this.pos.x + 1 * this.size.x / 2,
                c = this.pos.y + 1.35 * this.size.y / 20;
            ig.system.context.font = "26px handel-gothic";
            ig.system.context.fillStyle = "#FFFFFF";
            ig.system.context.textAlign = "center";
            ig.system.context.textBaseline = "middle";
            ig.system.context.fillText(_STRINGS.Game.Highscore, b, c - ig.game.screen.y);
            for (b = 0; b < ig.game.scores.length; b++) {
                var c = this.pos.x + 1 * this.size.x / 8,
                    d = this.pos.y + this.size.y * (4.3 + 1.4 * b) / 20,
                    e = this.pos.x + 7 * this.size.x / 8,
                    f = this.pos.y + this.size.y * (4.3 + 1.4 * b) / 20;
                ig.system.context.font = "26px handel-gothic";
                ig.system.context.fillStyle =
                    this.highscoreIndex == b ? this.highscoreStyle : "#FFFFFF";
                ig.system.context.textAlign = "left";
                ig.system.context.textBaseline = "middle";
                ig.system.context.fillText(_STRINGS.Game.Numbers[b], c, d - ig.game.screen.y);
                ig.system.context.textAlign = "right";
                ig.system.context.fillText(null == ig.game.scores[b] ? "-" : ig.game.scores[b], e, f - ig.game.screen.y)
            }
            b = this.pos.x + 1 * this.size.x / 2;
            c = this.pos.y + 11.05 * this.size.y / 20 - ig.game.screen.y;
            d = 6 * this.size.x / 8;
            e = 1 * this.size.y / 120;
            ig.system.context.fillStyle = "#FFFFFF";
            ig.system.context.fillRect(b -
                d / 2, c - e / 2, d, e);
            b = this.pos.x + 1 * this.size.x / 2;
            c = this.pos.y + 12.6 * this.size.y / 20;
            ig.system.context.font = this.scoreTextFontSize + "px handel-gothic";
            ig.system.context.fillStyle = "#FFFFFF";
            ig.system.context.textAlign = "center";
            ig.system.context.textBaseline = "middle";
            ig.system.context.fillText(_STRINGS.Game.Score, b, c - ig.game.screen.y);
            b = this.pos.x + 1 * this.size.x / 2;
            c = this.pos.y + 14.1 * this.size.y / 20;
            ig.system.context.font = "36px handel-gothic";
            ig.system.context.fillStyle = "#FFFFFF";
            ig.system.context.textAlign = "center";
            ig.system.context.textBaseline = "middle";
            this.showScoreNumber && ig.system.context.fillText(Math.ceil(this.scoreToShow), b, c - ig.game.screen.y);
            b = this.pos.x + 1 * this.size.x / 2;
            c = this.pos.y + 15.4 * this.size.y / 20 - ig.game.screen.y;
            d = 6 * this.size.x / 8;
            e = 1 * this.size.y / 120;
            ig.system.context.fillStyle = "#FFFFFF";
            ig.system.context.fillRect(b - d / 2, c - e / 2, d, e);
            ig.system.context.restore()
        },
        easeIn: function() {
            ig.game.easing = !0;
            this.tween({
                pos: {
                    y: this.pos.y - ig.system.height
                }
            }, 0.2, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {
                    this.easeScore()
                }.bind(this)
            }).start()
        },
        easeScore: function() {
            this.tween({
                scoreTextFontSize: 36
            }, 0.3, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {
                    this.showScoreNumber = !0;
                    var b = 10 >= ig.game.gameScore ? 0.3 : 20 >= ig.game.gameScore ? 0.5 : 60 >= ig.game.gameScore ? 0.8 : 300 >= ig.game.gameScore ? 1 : 1.2;
                    ig.soundHandler.sfxPlayer.play("countStart");
                    this.tween({
                        scoreToShow: ig.game.gameScore
                    }, b, {
                        easing: ig.Tween.Easing.Linear.EaseNone,
                        onComplete: function() {
                            ig.soundHandler.sfxPlayer.stop("countStart");
                            ig.soundHandler.sfxPlayer.play("countFinish");
                            this.saveToScores();
                            this.easeBlink();
                            ig.game.easing = !1
                        }.bind(this)
                    }).start()
                }.bind(this)
            }).start()
        },
        saveToScores: function() {
            for (var b = 0; b < ig.game.scores.length; b++)
                if (null == ig.game.scores[b]) {
                    this.highscoreIndex = b;
                    ig.game.scores[b] = ig.game.gameScore;
                    ig.game.save("scores", ig.game.scores);
                    break
                } else if (ig.game.scores[b] <= ig.game.gameScore) {
                this.highscoreIndex = b;
                var c = ig.game.scores[b];
                ig.game.scores[b] = ig.game.gameScore;
                for (b += 1; b < ig.game.scores.length; b++) tmpScore2 = ig.game.scores[b], ig.game.scores[b] =
                    c, c = tmpScore2;
                ig.game.save("scores", ig.game.scores);
                break
            }
        },
        easeBlink: function() {
            this.highscoreStyle = "#ffffff";
            this.tween({}, 0.2, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {
                    this.highscoreStyle = "#591c43";
                    this.tween({}, 0.2, {
                        easing: ig.Tween.Easing.Linear.EaseNone,
                        onComplete: function() {
                            this.easeBlink()
                        }.bind(this)
                    }).start()
                }.bind(this)
            }).start()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.launcher").requires("game.entities.others.marketjs-box2d-entity").defines(function() {
    EntityLauncher = EntityMarketjsBox2dEntity.extend({
        zIndex: 4,
        checkAgainst: ig.Entity.TYPE.B,
        box2dType: 0,
        dynamicType: 1,
        density: 0.001,
        friction: 0,
        restitution: 0,
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/game/launcher.png"),
            sheetX: 1,
            sheetY: 1
        },
        minimizeSpeed: 0.1,
        minimizeMin: 87,
        maxPushSpeed: -40,
        ballReady: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet,
                1, [1], !0);
            b = this.body.GetPosition();
            this.oriPosB2d = {
                x: b.x,
                y: b.y
            }
        },
        update: function() {
            this.parent()
        },
        draw: function() {
            this.parent();
            var b = this.idleSheetInfo.sheetImage;
            ig.system.context.save();
            ig.system.context.translate(-ig.game.screen.x, -ig.game.screen.y);
            ig.system.context.drawImage(b.data, 0, 0, b.width, 1 * b.height / 12, this.pos.x, this.pos.y, b.width, 1 * b.height / 12);
            ig.system.context.drawImage(b.data, 0, 1 * b.height / 12, b.width, b.height, this.pos.x, this.pos.y + 1 * b.height / 12, b.width, this.oriPos.y + b.height - this.pos.y);
            ig.system.context.restore()
        },
        beginContact: function(b, c) {
            b instanceof EntityLauncherCover && c.SetEnabled(!1)
        },
        preSolve: function(b) {
            b instanceof EntityBall && (this.ballReady = !0, null != this.controller.launcherBlock && (this.controller.launcherBlock.kill(), this.controller.launcherBlock = null))
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.launcher-cover").requires("game.entities.others.marketjs-box2d-entity").defines(function() {
    EntityLauncherCover = EntityMarketjsBox2dEntity.extend({
        zIndex: 5,
        collides: ig.Entity.COLLIDES.NEVER,
        type: ig.Entity.TYPE.A,
        box2dType: 0,
        dynamicType: 2,
        density: 0,
        friction: 0,
        restitution: 0,
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/game/launcher-cover.png"),
            sheetX: 1,
            sheetY: 1
        },
        click: !1,
        release: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet,
                1, [0], !0)
        },
        update: function() {
            this.parent();
            if (this.click) {
                var b = !1,
                    c;
                for (c in ig.input.touches)
                    if (ig.input.touches[c].x > this.pos.x && ig.input.touches[c].x < this.pos.x + this.size.x && ig.input.touches[c].y > this.pos.y && ig.input.touches[c].y < this.pos.y + this.size.y) {
                        b = !0;
                        break
                    }!1 == b && this.released()
            }
        },
        clicked: function() {
            ig.ua.mobile && (this.controller.launcher.ballReady && null == this.controller.launcherBlock && !ig.game.easing ? (this.click = !0, ig.game.easing = !0, ig.game.tutorialMode && null == this.controller.tutorial[4] &&
                null != this.controller.tutorial[5] && this.controller.tutorialSteps.easeOut()) : this.controller.buttonRight.clicked())
        },
        clicking: function() {
            if (ig.ua.mobile && this.controller.launcherCover.click && null == this.controller.launcherBlock && this.controller.launcher.ballReady) {
                var b = this.controller.launcher.body.GetPosition(),
                    c = b.y + this.controller.launcher.minimizeSpeed > this.controller.launcher.minimizeMin ? this.controller.launcher.minimizeMin : b.y + this.controller.launcher.minimizeSpeed,
                    d = this.controller.ball.body.GetPosition();
                this.controller.ball.body.SetPosition({
                    x: d.x,
                    y: b.y + this.controller.launcher.minimizeSpeed > this.controller.launcher.minimizeMin ? d.y : d.y + this.controller.launcher.minimizeSpeed
                });
                this.controller.launcher.body.SetPosition({
                    x: b.x,
                    y: c
                });
                !0 == ig.soundHandler.sfxPlayer.soundList.launchStart._sounds[0]._ended && ig.soundHandler.sfxPlayer.play("launchStart")
            }
        },
        released: function() {
            if (ig.ua.mobile)
                if (ig.game.tutorialMode) this.controller.launcher.ballReady && (this.click = !1, this.release = !0, ig.game.easing = !1, this.controller.launcherCover.release &&
                    null == this.controller.launcherBlock && this.controller.launcher.ballReady && ig.game.tutorialMode && null == this.controller.tutorial[5] && this.controller.tutorialSteps.easeOut());
                else if (this.controller.launcher.ballReady && ig.game.easing && (this.click = !1, this.release = !0, ig.game.easing = !1, this.controller.launcherCover.release && null == this.controller.launcherBlock && this.controller.launcher.ballReady)) {
                this.controller.launcherCover.release = !1;
                var b = (this.controller.launcher.body.GetPosition().y - this.controller.launcher.oriPosB2d.y) /
                    (this.controller.launcher.minimizeMin - this.controller.launcher.oriPosB2d.y);
                this.controller.ball.body.SetPosition({
                    x: this.controller.launcher.oriPosB2d.x,
                    y: this.controller.launcher.oriPosB2d.y - 5
                });
                this.controller.launcher.body.SetPosition({
                    x: this.controller.launcher.oriPosB2d.x,
                    y: this.controller.launcher.oriPosB2d.y
                });
                b = new Box2D.Common.Math.b2Vec2(0, this.controller.launcher.maxPushSpeed * b);
                this.controller.ball.body.ApplyForce(b, this.controller.ball.body.GetPosition());
                this.controller.launcher.ballReady = !1
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.obstacle").requires("game.entities.others.marketjs-box2d-entity").defines(function() {
    EntityObstacle = EntityMarketjsBox2dEntity.extend({
        zIndex: 2,
        box2dType: 2,
        dynamicType: 2,
        density: 0,
        friction: 0,
        restitution: 0,
        idleSheetInfo: null,
        extendBody: null,
        score: null,
        circleType: null,
        extendBodyEffect: null,
        extendBodyEffectIndex: [],
        extendBodyEffectAnimIndex: [],
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.idle = new ig.Animation(this.idleSheet, 1, [0], !0);
            this.flipX && (this.idle.flip.x = !0);
            this.currentAnim =
                this.idle;
            if (null != this.extendBody)
                for (b = 0; b < this.extendBody.length; b++) c = this.arrangeClockwise(this.extendBody[b]), ig.game.spawnEntity(EntityObstacleExtendBody, this.pos.x, this.pos.y, {
                    controller: this.controller,
                    obstacle: this,
                    size: {
                        x: this.size.x,
                        y: this.size.y
                    },
                    vertices: c
                });
            if (null != this.extendBodyEffect)
                for (b = 0; b < this.extendBodyEffect.length; b++) {
                    c = this.arrangeClockwise(this.extendBodyEffect[b].vertices);
                    d = this.extendBodyEffect[b].anim;
                    var e = this.extendBodyEffect[b].score;
                    this.extendBodyEffectIndex[b] =
                        ig.game.spawnEntity(EntityObstacleBodyEffect, this.pos.x, this.pos.y, {
                            controller: this.controller,
                            obstacle: this,
                            index: b,
                            size: {
                                x: this.size.x,
                                y: this.size.y
                            },
                            vertices: c,
                            forceBall: this.extendBodyEffect[b].forceBall,
                            score: e
                        });
                    this.extendBodyEffectAnimIndex[b] = new ig.Animation(this.idleSheet, 0.4, d, !0)
                }
            if (1 == this.box2dType) {
                this.contactAnim = new ig.Animation(this.idleSheet, 0.2, this.contactArrayAnim, !0);
                switch (this.circleType) {
                    case 1:
                        this.circleDecoration = ig.game.spawnEntity(EntityCircleDecBig, this.pos.x + this.size.x /
                            2, this.pos.y + this.size.y / 2, {
                                controller: this.controller,
                                obstacle: this
                            });
                        break;
                    case 2:
                        this.circleDecoration = ig.game.spawnEntity(EntityCircleDecSmall, this.pos.x + this.size.x / 2, this.pos.y + this.size.y / 2, {
                            controller: this.controller,
                            obstacle: this
                        })
                }
                this.bodyEffect = ig.game.spawnEntity(EntityObstacleBodyEffect, this.pos.x - 2, this.pos.y - 2, {
                    box2dType: 1,
                    controller: this.controller,
                    obstacle: this,
                    size: {
                        x: this.size.x + 4,
                        y: this.size.y + 4
                    },
                    score: e
                })
            }
        },
        update: function() {
            this.parent()
        }
    });
    EntityObstacleExtendBody = EntityMarketjsBox2dEntity.extend({
        zIndex: 2,
        box2dType: 2,
        dynamicType: 2,
        density: 0,
        friction: 1,
        restitution: 0,
        idleSheetInfo: null,
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        update: function() {
            this.parent()
        }
    });
    EntityObstacleBodyEffect = EntityMarketjsBox2dEntity.extend({
        zIndex: 2,
        box2dType: 2,
        dynamicType: 2,
        density: 0,
        friction: 1,
        restitution: 0,
        idleSheetInfo: null,
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        update: function() {
            this.parent()
        },
        preSolve: function(b, c) {
            b instanceof EntityBall && c.SetEnabled(!1)
        },
        beginContact: function(b) {
            if (b instanceof EntityBall && 1 != this.box2dType) {
                if (this.obstacle instanceof EntityTopLeftObs) {
                    var c = ig.game.getEntitiesByType(EntityStar)[0];
                    if (c.currentAnim == c.idle) c.currentAnim = c.contactAnim.rewind(), ig.soundHandler.sfxPlayer.play("starDec");
                    else return
                } else ig.soundHandler.sfxPlayer.play("obstacleEffect");
                this.obstacle.flipX && (this.obstacle.extendBodyEffectAnimIndex[this.index].flip.x = !0);
                this.obstacle.currentAnim = this.obstacle.extendBodyEffectAnimIndex[this.index].rewind();
                c = new Box2D.Common.Math.b2Vec2(this.forceBall.x, this.forceBall.y);
                b.body.ApplyForce(c, b.body.GetPosition());
                ig.game.addScore(this.controller, b, this.score)
            } else if (b instanceof EntityBall && 1 == this.box2dType && !1 == this.obstacle.circleDecoration.contacting) {
                this.obstacle.currentAnim = this.obstacle.contactAnim.rewind();
                this.obstacle.circleDecoration.currentAnim = this.obstacle.circleDecoration.contactAnim.rewind();
                this.obstacle.circleDecoration.contacting = !0;
                var c = this.body.GetPosition().x,
                    d = this.body.GetPosition().y,
                    e = b.body.GetPosition().x,
                    f = b.body.GetPosition().y,
                    c = new Box2D.Common.Math.b2Vec2(2 * (e - c), 2 * (f -
                        d));
                b.body.ApplyForce(c, b.body.GetPosition());
                ig.game.addScore(this.controller, b, 5);
                ig.soundHandler.sfxPlayer.play("circleDec")
            }
        }
    });
    EntityCircleObs = EntityObstacle.extend({
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/game/obstacles/circle.png"),
            sheetX: 2,
            sheetY: 1
        },
        box2dType: 1,
        score: 5,
        contactArrayAnim: [1, 0]
    });
    EntityVerticalSmall = EntityObstacle.extend({
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/game/obstacles/vertical-small.png"),
            sheetX: 1,
            sheetY: 1
        },
        vertices: [{
            x: 0.38,
            y: -1.24
        }, {
            x: 0.4,
            y: 1.08
        }, {
            x: 0.01,
            y: 1.26
        }, {
            x: -0.33,
            y: 1.08
        }, {
            x: -0.3,
            y: -1.22
        }, {
            x: 0.01,
            y: -1.38
        }],
        box2dType: 2
    });
    EntityVerticalNormal = EntityObstacle.extend({
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/game/obstacles/vertical-normal.png"),
            sheetX: 1,
            sheetY: 1
        },
        vertices: [{
            x: -0.45,
            y: -1.57
        }, {
            x: -0,
            y: -1.82
        }, {
            x: 0.45,
            y: -1.6
        }, {
            x: 0.45,
            y: 1.48
        }, {
            x: 0.03,
            y: 1.75
        }, {
            x: -0.43,
            y: 1.54
        }],
        box2dType: 2
    });
    EntityVerticalBig = EntityObstacle.extend({
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/game/obstacles/vertical-big.png"),
            sheetX: 1,
            sheetY: 1
        },
        vertices: [{
            x: -0.46,
            y: -2.11
        }, {
            x: -0.02,
            y: -2.4
        }, {
            x: 0.46,
            y: -2.13
        }, {
            x: 0.48,
            y: 2.04
        }, {
            x: 0.03,
            y: 2.33
        }, {
            x: -0.46,
            y: 2.06
        }],
        box2dType: 2
    });
    EntityTopRightObs = EntityObstacle.extend({
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/game/obstacles/top-right-obs.png"),
            sheetX: 1,
            sheetY: 1
        },
        vertices: [{
            x: 0.73,
            y: 0.6
        }, {
            x: 2.91,
            y: 1.34
        }, {
            x: -2.21,
            y: 10.59
        }, {
            x: -3.92,
            y: 9.04
        }],
        box2dType: 2,
        extendBody: [
            [{
                x: 0.73,
                y: 0.6
            }, {
                x: 2.91,
                y: 1.34
            }, {
                x: 3.72,
                y: -0.7
            }, {
                x: 1.12,
                y: -1.04
            }],
            [{
                x: 0.95,
                y: -3.77
            }, {
                x: 3.61,
                y: -4.08
            }, {
                x: 3.72,
                y: -0.7
            }, {
                x: 1.12,
                y: -1.07
            }],
            [{
                x: 0.95,
                y: -3.77
            }, {
                x: 3.61,
                y: -4.08
            }, {
                x: 2.42,
                y: -7.01
            }, {
                x: -0.2,
                y: -6.4
            }],
            [{
                x: -1.24,
                y: -7.78
            }, {
                x: 0.99,
                y: -8.98
            }, {
                x: 2.42,
                y: -7.01
            }, {
                x: -0.2,
                y: -6.4
            }],
            [{
                x: -1.24,
                y: -7.78
            }, {
                x: 0.99,
                y: -8.98
            }, {
                x: -0.35,
                y: -10.24
            }, {
                x: -2.17,
                y: -8.8
            }]
        ]
    });
    EntityTopMiddleObs = EntityObstacle.extend({
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/game/obstacles/top-middle-obs.png"),
            sheetX: 2,
            sheetY: 1
        },
        vertices: [{
            x: -3.46,
            y: -0.34
        }, {
            x: 2.62,
            y: -4.21
        }, {
            x: 3.53,
            y: -3.57
        }, {
            x: 3.44,
            y: 0.52
        }, {
            x: 0.48,
            y: 3.95
        }, {
            x: -0.62,
            y: 4.12
        }, {
            x: -3.46,
            y: 2.33
        }],
        box2dType: 2,
        extendBodyEffect: [{
            vertices: [{
                x: -1.48,
                y: -2.09
            }, {
                x: 1.35,
                y: -3.82
            }, {
                x: 1.48,
                y: -3.03
            }, {
                x: -0.98,
                y: -1.64
            }],
            anim: [1, 0],
            forceBall: {
                x: -2,
                y: -20
            },
            score: 10
        }]
    });
    EntityTopLeftObs = EntityObstacle.extend({
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/game/obstacles/top-left-obs.png"),
            sheetX: 2,
            sheetY: 1
        },
        vertices: [{
            x: -1.58,
            y: 0.21
        }, {
            x: 5.52,
            y: 5.25
        }, {
            x: 0.35,
            y: 8.97
        }, {
            x: -3.07,
            y: 1.96
        }],
        box2dType: 2,
        extendBody: [
            [{
                x: -1.58,
                y: 0.21
            }, {
                x: -2.37,
                y: -0.47
            }, {
                x: -3.8,
                y: -0.42
            }, {
                x: -3.07,
                y: 1.96
            }],
            [{
                x: -3.14,
                y: -3.12
            }, {
                x: -2.37,
                y: -0.47
            }, {
                x: -3.8,
                y: -0.42
            }, {
                x: -4.43,
                y: -3
            }],
            [{
                x: -3.14,
                y: -3.12
            }, {
                x: -3.73,
                y: -7.4
            }, {
                x: -4.95,
                y: -7.42
            }, {
                x: -4.43,
                y: -3
            }],
            [{
                x: -4.43,
                y: -8.81
            }, {
                x: -3.8,
                y: -8.38
            }, {
                x: -3.73,
                y: -7.4
            }, {
                x: -4.95,
                y: -7.42
            }, {
                x: -5,
                y: -8.44
            }]
        ],
        extendBodyEffect: [{
            vertices: [{
                x: 2.03,
                y: 1.98
            }, {
                x: 4.43,
                y: 3.95
            }, {
                x: 3.28,
                y: 5.02
            }, {
                x: 1.14,
                y: 3.46
            }],
            anim: [1, 0],
            forceBall: {
                x: 10,
                y: -20
            },
            score: 25
        }]
    });
    EntityBottomRightObs = EntityObstacle.extend({
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/game/obstacles/bottom-obs.png"),
            sheetX: 2,
            sheetY: 1
        },
        vertices: [{
            x: 2.34,
            y: -4.19
        }, {
            x: 2.88,
            y: -3.71
        }, {
            x: 2.88,
            y: 1.35
        }, {
            x: 2.54,
            y: 1.91
        }, {
            x: -1.97,
            y: 4.25
        }, {
            x: -2.54,
            y: 3.97
        }, {
            x: -2.79,
            y: 3.36
        }, {
            x: 1.66,
            y: -4.11
        }],
        box2dType: 2,
        extendBodyEffect: [{
            vertices: [{
                x: 0.5,
                y: -3.21
            }, {
                x: 1.4,
                y: -1.99
            }, {
                x: -0.84,
                y: 1.99
            }, {
                x: -2.22,
                y: 1.51
            }],
            anim: [1, 0],
            forceBall: {
                x: -10,
                y: -20
            },
            score: 15
        }]
    });
    EntityBottomLeftObs = EntityObstacle.extend({
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/game/obstacles/bottom-obs.png"),
            sheetX: 2,
            sheetY: 1
        },
        vertices: [{
            x: -1.56,
            y: -4.03
        }, {
            x: 2.79,
            y: 3.39
        }, {
            x: 2.56,
            y: 4.05
        }, {
            x: 1.93,
            y: 4.28
        }, {
            x: -2.56,
            y: 1.93
        }, {
            x: -2.9,
            y: 1.36
        }, {
            x: -2.85,
            y: -3.78
        }, {
            x: -2.31,
            y: -4.22
        }],
        box2dType: 2,
        flipX: !0,
        extendBodyEffect: [{
            vertices: [{
                x: -0.38,
                y: -3.08
            }, {
                x: 2.29,
                y: 1.48
            }, {
                x: 0.93,
                y: 1.85
            }, {
                x: -1.2,
                y: -2.03
            }],
            anim: [1, 0],
            forceBall: {
                x: 10,
                y: -20
            },
            score: 15
        }]
    });
    EntityPaddleLineRight = EntityObstacle.extend({
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/game/obstacles/paddle-line-right.png"),
            sheetX: 1,
            sheetY: 1
        },
        vertices: [{
            x: -3.84,
            y: 4.77
        }, {
            x: 2.59,
            y: 1.62
        }, {
            x: 3.84,
            y: 2.33
        }, {
            x: -3.16,
            y: 5.82
        }],
        box2dType: 2,
        extendBody: [
            [{
                x: 2.62,
                y: -5.64
            }, {
                x: 2.64,
                y: 1.59
            }, {
                x: 3.84,
                y: 2.33
            }, {
                x: 3.78,
                y: -5.68
            }, {
                x: 3.16,
                y: -5.99
            }]
        ]
    });
    EntityPaddleLineLeft = EntityObstacle.extend({
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/game/obstacles/paddle-line-left.png"),
            sheetX: 1,
            sheetY: 1
        },
        vertices: [{
            x: -4.41,
            y: 0.16
        }, {
            x: 5.52,
            y: 4.85
        }, {
            x: 5.02,
            y: 6.03
        }, {
            x: -5.59,
            y: 0.95
        }],
        box2dType: 2,
        extendBody: [
            [{
                x: -4.41,
                y: 0.16
            }, {
                x: -4.43,
                y: -5.71
            }, {
                x: -5.02,
                y: -6.01
            }, {
                x: -5.57,
                y: -5.73
            }, {
                x: -5.59,
                y: 0.95
            }]
        ]
    })
});
ig.baked = !0;
ig.module("game.entities.game.decoration").requires("game.entities.others.marketjs-entity", "game.entities.others.marketjs-box2d-entity").defines(function() {
    EntityDecoration = EntityMarketjsEntity.extend({
        zIndex: 3,
        idleSheetInfo: null,
        idleArrayAnim: null,
        idleTime: 1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.idle = new ig.Animation(this.idleSheet, this.idleTime, this.idleArrayAnim, !1);
            this.flipX && (this.idle.flip.x = !0);
            this.currentAnim = this.idle
        },
        update: function() {
            this.parent()
        }
    });
    EntityDecorationBox2d = EntityMarketjsBox2dEntity.extend({
        zIndex: 3,
        box2dType: 2,
        dynamicType: 2,
        density: 0,
        friction: 1,
        restitution: 0,
        idleSheetInfo: null,
        idleArrayAnim: null,
        idleTime: 0.3,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.idle = new ig.Animation(this.idleSheet, this.idleTime, this.idleArrayAnim, !1);
            this.flipX && (this.idle.flip.x = !0);
            this.currentAnim = this.idle
        },
        update: function() {
            this.parent()
        },
        preSolve: function(b, c) {
            b instanceof EntityBall && c.SetEnabled(!1)
        }
    });
    EntityStar = EntityDecoration.extend({
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/game/decorations/star.png"),
            sheetX: 6,
            sheetY: 1
        },
        idleArrayAnim: [0],
        idleTime: 0.4,
        contacArrayAnim: [0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 3, 0, 3, 0, 3],
        contacTime: 0.09,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.contactAnim = new ig.Animation(this.idleSheet, this.contacTime, this.contacArrayAnim, !1)
        },
        update: function() {
            this.parent();
            this.currentAnim == this.contactAnim && 1 == this.currentAnim.loopCount && (this.currentAnim = this.idle.rewind())
        }
    });
    EntityTopUpDec = EntityDecorationBox2d.extend({
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/game/decorations/top-up-dec.png"),
            sheetX: 10,
            sheetY: 1
        },
        idleArrayAnim: [4],
        idleTime: 0.4,
        contacArrayAnim: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        contacTime: 0.05,
        vertices: [{
            x: 2.05,
            y: -3.67
        }, {
            x: 2.73,
            y: -2
        }, {
            x: 0.48,
            y: 3.65
        }, {
            x: -2.85,
            y: 2.02
        }, {
            x: 0.35,
            y: -3.33
        }],
        forceBall: {
            x: 2,
            y: -10
        },
        score: 50,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.contactAnim = new ig.Animation(this.idleSheet, this.contacTime, this.contacArrayAnim, !1);
            this.entityAlpha = ig.game.spawnEntity(EntityDecorationBox2dALpha, ig.system.width, ig.system.height, {
                controller: this.controller,
                time: 0.5,
                alpha: 0
            })
        },
        beginContact: function(b) {
            if (b instanceof EntityBall && this.currentAnim == this.idle && 0 > b.body.GetLinearVelocity().y) {
                this.currentAnim = this.contactAnim.rewind();
                var c = new Box2D.Common.Math.b2Vec2(this.forceBall.x, this.forceBall.y);
                b.body.ApplyForce(c, b.body.GetPosition());
                ig.game.addScore(this.controller, b, this.score);
                ig.soundHandler.sfxPlayer.play("arrowDec")
            }
        },
        update: function() {
            this.parent();
            this.currentAnim.alpha = this.currentAnim == this.idle ? this.entityAlpha.alpha : 1;
            this.currentAnim == this.contactAnim &&
                5 == this.currentAnim.loopCount && (this.currentAnim = this.idle.rewind())
        }
    });
    EntityTopDownDec = EntityDecorationBox2d.extend({
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/game/decorations/top-down-dec.png"),
            sheetX: 10,
            sheetY: 1
        },
        idleArrayAnim: [4],
        idleTime: 0.4,
        contacArrayAnim: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        contacTime: 0.05,
        vertices: [{
            x: -1.73,
            y: -2.59
        }, {
            x: 1.22,
            y: -3
        }, {
            x: 1.68,
            y: 2.02
        }, {
            x: 0.71,
            y: 3.03
        }, {
            x: -0.53,
            y: 2.34
        }],
        score: 30,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.contactAnim = new ig.Animation(this.idleSheet,
                this.contacTime, this.contacArrayAnim, !1);
            this.entityAlpha = ig.game.spawnEntity(EntityDecorationBox2dALpha, ig.system.width, ig.system.height, {
                controller: this.controller,
                time: 0.5,
                alpha: 1
            })
        },
        beginContact: function(b) {
            b instanceof EntityBall && (this.currentAnim == this.idle && 0 < b.body.GetLinearVelocity().y) && (this.currentAnim = this.contactAnim.rewind(), ig.game.addScore(this.controller, b, this.score), ig.soundHandler.sfxPlayer.play("arrowDec"))
        },
        update: function() {
            this.parent();
            this.currentAnim.alpha = this.currentAnim ==
                this.idle ? this.entityAlpha.alpha : 1;
            this.currentAnim == this.contactAnim && 5 == this.currentAnim.loopCount && (this.currentAnim = this.idle.rewind())
        }
    });
    EntityBottomRightDec = EntityDecorationBox2d.extend({
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/game/decorations/bottom-dec.png"),
            sheetX: 10,
            sheetY: 1
        },
        idleArrayAnim: [5],
        idleTime: 0.4,
        contacArrayAnim: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
        contacTime: 0.05,
        vertices: [{
            x: -2.03,
            y: -2.59
        }, {
            x: 3.27,
            y: -0.08
        }, {
            x: 3.5,
            y: 1.85
        }, {
            x: 1.87,
            y: 2.72
        }, {
            x: -3.45,
            y: -0.02
        }],
        score: 20,
        init: function(b,
            c, d) {
            this.parent(b, c, d);
            this.contactAnim = new ig.Animation(this.idleSheet, this.contacTime, this.contacArrayAnim, !1);
            this.entityAlpha = ig.game.spawnEntity(EntityDecorationBox2dALpha, ig.system.width, ig.system.height, {
                controller: this.controller,
                time: 1,
                alpha: 0
            })
        },
        beginContact: function(b) {
            b instanceof EntityBall && (this.currentAnim == this.idle && 0 < b.body.GetLinearVelocity().y) && (this.currentAnim = this.contactAnim.rewind(), ig.game.addScore(this.controller, b, this.score), ig.soundHandler.sfxPlayer.play("arrowDec"))
        },
        update: function() {
            this.parent();
            this.currentAnim.alpha = this.currentAnim == this.idle ? this.entityAlpha.alpha : 1;
            this.currentAnim == this.contactAnim && 5 == this.currentAnim.loopCount && (this.currentAnim = this.idle.rewind())
        }
    });
    EntityBottomLeftDec = EntityDecorationBox2d.extend({
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/game/decorations/bottom-dec.png"),
            sheetX: 10,
            sheetY: 1
        },
        idleArrayAnim: [5],
        idleTime: 0.4,
        contacArrayAnim: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
        contacTime: 0.05,
        flipX: !0,
        vertices: [{
            x: -3.27,
            y: -0.04
        }, {
            x: 2.12,
            y: -2.65
        }, {
            x: 3.48,
            y: -0.03
        }, {
            x: -1.87,
            y: 2.65
        }, {
            x: -3.48,
            y: 1.86
        }],
        score: 20,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.contactAnim = new ig.Animation(this.idleSheet, this.contacTime, this.contacArrayAnim, !1);
            this.contactAnim.flip.x = !0;
            this.entityAlpha = ig.game.spawnEntity(EntityDecorationBox2dALpha, ig.system.width, ig.system.height, {
                controller: this.controller,
                time: 1,
                alpha: 0
            })
        },
        beginContact: function(b) {
            b instanceof EntityBall && (this.currentAnim == this.idle && 0 < b.body.GetLinearVelocity().y) && (this.currentAnim =
                this.contactAnim.rewind(), ig.game.addScore(this.controller, b, this.score), ig.soundHandler.sfxPlayer.play("arrowDec"))
        },
        update: function() {
            this.parent();
            this.currentAnim.alpha = this.currentAnim == this.idle ? this.entityAlpha.alpha : 1;
            this.currentAnim == this.contactAnim && 5 == this.currentAnim.loopCount && (this.currentAnim = this.idle.rewind())
        }
    });
    EntityCircleDecBig = EntityDecoration.extend({
        vertical: "center",
        horizontal: "center",
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/game/decorations/circle-big.png"),
            sheetX: 8,
            sheetY: 1
        },
        idleArrayAnim: [4],
        idleTime: 0.4,
        contacArrayAnim: [0, 1, 2, 3, 4, 5, 6, 7],
        contacTime: 0.05,
        contacting: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.setPosition();
            this.contactAnim = new ig.Animation(this.idleSheet, this.contacTime, this.contacArrayAnim, !1);
            this.currentAnim.alpha = 0;
            this.easeBlink()
        },
        update: function() {
            this.parent();
            this.currentAnim == this.contactAnim && (this.currentAnim.alpha = 1);
            this.currentAnim == this.contactAnim && 2 == this.currentAnim.loopCount && (this.currentAnim = this.idle.rewind(),
                this.contacting = !1)
        },
        easeBlink: function() {
            this.tween({
                currentAnim: {
                    alpha: 1
                }
            }, 2, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {
                    this.tween({
                        currentAnim: {
                            alpha: 0
                        }
                    }, 2, {
                        easing: ig.Tween.Easing.Linear.EaseNone,
                        onComplete: function() {
                            this.easeBlink()
                        }.bind(this)
                    }).start()
                }.bind(this)
            }).start()
        }
    });
    EntityCircleDecSmall = EntityDecoration.extend({
        vertical: "center",
        horizontal: "center",
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/game/decorations/circle-small.png"),
            sheetX: 5,
            sheetY: 2
        },
        idleArrayAnim: [5],
        idleTime: 0.4,
        contacArrayAnim: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        contacTime: 0.05,
        contacting: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.setPosition();
            this.contactAnim = new ig.Animation(this.idleSheet, this.contacTime, this.contacArrayAnim, !1);
            this.easeBlink()
        },
        update: function() {
            this.parent();
            this.currentAnim == this.contactAnim && (this.currentAnim.alpha = 1);
            this.currentAnim == this.contactAnim && 2 == this.currentAnim.loopCount && (this.currentAnim = this.idle.rewind(), this.contacting = !1)
        },
        easeBlink: function() {
            this.tween({
                    currentAnim: {
                        alpha: 0
                    }
                },
                2, {
                    easing: ig.Tween.Easing.Linear.EaseNone,
                    onComplete: function() {
                        this.tween({
                            currentAnim: {
                                alpha: 1
                            }
                        }, 2, {
                            easing: ig.Tween.Easing.Linear.EaseNone,
                            onComplete: function() {
                                this.easeBlink()
                            }.bind(this)
                        }).start()
                    }.bind(this)
                }).start()
        }
    });
    EntityDecorationBox2dALpha = EntityMarketjsEntity.extend({
        time: null,
        alpha: null,
        alpha1: null,
        alpha2: null,
        init: function(b, c, d) {
            this.parent(b, c, d);
            0 == this.alpha ? (this.alpha1 = 1, this.alpha2 = 0) : (this.alpha1 = 0, this.alpha2 = 1);
            this.easeBlink()
        },
        easeBlink: function() {
            this.tween({
                    alpha: this.alpha1
                },
                this.time, {
                    easing: ig.Tween.Easing.Linear.EaseNone,
                    onComplete: function() {
                        this.tween({
                            alpha: this.alpha2
                        }, this.time, {
                            easing: ig.Tween.Easing.Linear.EaseNone,
                            onComplete: function() {
                                this.easeBlink()
                            }.bind(this)
                        }).start()
                    }.bind(this)
                }).start()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.paddle").requires("game.entities.others.marketjs-box2d-entity").defines(function() {
    EntityPaddle = EntityMarketjsBox2dEntity.extend({
        zIndex: 5,
        gravityFactor: 0,
        box2dType: 2,
        dynamicType: 0,
        density: 30,
        friction: 0,
        restitution: 0,
        idleSheetInfo: null,
        isFlicking: !1,
        circle: null,
        joint: null,
        click: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.idle = new ig.Animation(this.idleSheet, 1, [0], !0);
            this.flipX && (this.idle.flip.x = !0);
            this.currentAnim = this.idle
        },
        createJoint: function(b) {
            this.circle =
                ig.game.spawnEntity(EntityPaddleJoint, this.pos.x + this.size.x / 2 + 10 * b.x, this.pos.y + this.size.y / 2 + 10 * b.y, {
                    host: this
                });
            var c = new Box2D.Dynamics.Joints.b2RevoluteJointDef;
            c.bodyA = this.circle.body;
            c.bodyB = this.body;
            c.collideConnected = !1;
            c.localAnchorA = new Box2D.Common.Math.b2Vec2(0, 0);
            c.localAnchorB = new Box2D.Common.Math.b2Vec2(b.x, b.y);
            c.enableLimit = !0;
            c.lowerAngle = this.lowerAngle * Math.PI / 180;
            c.upperAngle = this.upperAngle * Math.PI / 180;
            c.enableMotor = !0;
            c.maxMotorTorque = 5E5;
            c.motorSpeed = 0;
            this.joint = ig.world.CreateJoint(c)
        },
        preSolve: function(b, c) {
            b instanceof EntityObstacle && c.SetEnabled(!1)
        },
        endContact: function() {}
    });
    EntityPaddleRight = EntityPaddle.extend({
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/game/paddle.png"),
            sheetX: 1,
            sheetY: 1
        },
        vertices: [{
            x: 2.16,
            y: -1.99
        }, {
            x: 3,
            y: -1.64
        }, {
            x: 3.23,
            y: -0.98
        }, {
            x: 3.06,
            y: -0.08
        }, {
            x: -2.69,
            y: 2.04
        }, {
            x: -3.24,
            y: 1.14
        }],
        circlePos: {
            x: 2,
            y: -0.7
        },
        motorSpeed: 20,
        lowerAngle: 0,
        upperAngle: 50,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.createJoint(this.circlePos)
        },
        update: function() {
            this.parent();
            ig.ua.mobile ? ig.game.tutorialMode ? this.click && !ig.game.easing && null == this.controller.tutorial[1] && null != this.controller.tutorial[2] ? (this.joint.SetMotorSpeed(this.motorSpeed), this.clicked || (this.clicked = !0, ig.soundHandler.sfxPlayer.play("paddle")), this.pressRight = !0) : (this.clicked = !1, this.joint.SetMotorSpeed(-this.motorSpeed), this.pressRight && !this.pressedRight && (this.pressedRight = !0, this.controller.tutorialSteps.easeOut())) : this.click && !ig.game.easing ? (this.joint.SetMotorSpeed(this.motorSpeed), this.clicked ||
                (this.clicked = !0, ig.soundHandler.sfxPlayer.play("paddle"))) : (this.clicked = !1, this.joint.SetMotorSpeed(-this.motorSpeed)) : ig.game.tutorialMode ? ig.input.state("right") && !ig.game.easing && null == this.controller.tutorial[1] && null != this.controller.tutorial[2] ? (this.joint.SetMotorSpeed(this.motorSpeed), this.clicked || (this.clicked = !0, ig.soundHandler.sfxPlayer.play("paddle")), this.pressRight = !0) : (this.clicked = !1, this.joint.SetMotorSpeed(-this.motorSpeed), this.pressRight && !this.pressedRight && (this.pressedRight = !0, this.controller.tutorialSteps.easeOut())) : ig.input.state("right") && !ig.game.easing ? (this.joint.SetMotorSpeed(this.motorSpeed), this.clicked || (this.clicked = !0, ig.soundHandler.sfxPlayer.play("paddle"))) : (this.clicked = !1, this.joint.SetMotorSpeed(-this.motorSpeed))
        }
    });
    EntityPaddleLeft = EntityPaddle.extend({
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/game/paddle.png"),
            sheetX: 1,
            sheetY: 1
        },
        vertices: [{
            x: -2.07,
            y: -1.82
        }, {
            x: 3.26,
            y: 1.1
        }, {
            x: 2.77,
            y: 2.11
        }, {
            x: -2.88,
            y: -0.05
        }, {
            x: -3.13,
            y: -0.95
        }, {
            x: -2.75,
            y: -1.63
        }],
        circlePos: {
            x: -2,
            y: -0.7
        },
        motorSpeed: 20,
        lowerAngle: -50,
        upperAngle: 0,
        flipX: !0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.createJoint(this.circlePos)
        },
        update: function() {
            this.parent();
            ig.ua.mobile ? ig.game.tutorialMode ? this.click && !ig.game.easing && null == this.controller.tutorial[2] && null != this.controller.tutorial[3] ? (this.joint.SetMotorSpeed(-this.motorSpeed), this.clicked || (this.clicked = !0, ig.soundHandler.sfxPlayer.play("paddle")), this.pressLeft = !0) : (this.clicked = !1, this.joint.SetMotorSpeed(this.motorSpeed),
                this.pressLeft && !this.pressedLeft && (this.pressedLeft = !0, this.controller.tutorialSteps.easeOut())) : this.click && !ig.game.easing ? (this.joint.SetMotorSpeed(-this.motorSpeed), this.clicked || (this.clicked = !0, ig.soundHandler.sfxPlayer.play("paddle"))) : (this.clicked = !1, this.joint.SetMotorSpeed(this.motorSpeed)) : ig.game.tutorialMode ? ig.input.state("left") && !ig.game.easing && null == this.controller.tutorial[2] && null != this.controller.tutorial[3] ? (this.joint.SetMotorSpeed(-this.motorSpeed), this.clicked || (this.clicked = !0, ig.soundHandler.sfxPlayer.play("paddle")), this.pressLeft = !0) : (this.clicked = !1, this.joint.SetMotorSpeed(this.motorSpeed), this.pressLeft && !this.pressedLeft && (this.pressedLeft = !0, this.controller.tutorialSteps.easeOut())) : ig.input.state("left") && !ig.game.easing ? (this.joint.SetMotorSpeed(-this.motorSpeed), this.clicked || (this.clicked = !0, ig.soundHandler.sfxPlayer.play("paddle"))) : (this.clicked = !1, this.joint.SetMotorSpeed(this.motorSpeed))
        }
    });
    EntityPaddleJoint = EntityMarketjsBox2dEntity.extend({
        box2dType: 1,
        dynamicType: 1,
        density: 0.5,
        friction: 0,
        restitution: 0,
        gravityFactor: 0,
        size: {
            x: 1,
            y: 1
        },
        init: function(b, c, d) {
            this.parent(b, c, d)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.wall").requires("game.entities.others.marketjs-box2d-entity").defines(function() {
    EntityWall = EntityMarketjsBox2dEntity.extend({
        zIndex: 4,
        box2dType: 2,
        dynamicType: 2,
        density: 0,
        friction: 0,
        restitution: 0,
        idleSheetInfo: null,
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        update: function() {
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.circle-line-mark").requires("game.entities.others.marketjs-box2d-entity").defines(function() {
    EntityCircleLineMark = EntityMarketjsBox2dEntity.extend({
        zIndex: 2,
        box2dType: 2,
        dynamicType: 2,
        density: 0,
        friction: 1,
        restitution: 0,
        idleSheetInfo: null,
        vertices: [{
            x: -18.67,
            y: -38.48
        }, {
            x: -17.26,
            y: -36.94
        }, {
            x: -18.02,
            y: -36.3
        }, {
            x: -19.44,
            y: -37.75
        }],
        score: 100,
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        update: function() {
            this.parent()
        },
        preSolve: function(b, c) {
            b instanceof EntityBall && c.SetEnabled(!1)
        },
        beginContact: function(b) {
            b instanceof EntityBall && ig.game.addScore(this.score)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.flying-score").requires("game.entities.others.marketjs-entity").defines(function() {
    EntityFlyingScore = EntityMarketjsEntity.extend({
        vertical: "center",
        horizontal: "center",
        zIndexOffset: 12,
        globalAlpha: 1,
        posYDie: 20,
        fontSize: 30,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.easeFlying()
        },
        update: function() {
            this.parent();
            this.zIndex = this.pos.y + this.zIndexOffset
        },
        draw: function() {
            this.parent();
            ig.system.context.save();
            ig.system.context.font = this.fontSize + "px handel-gothic";
            ig.system.context.fillStyle =
                "#FFFFFF";
            ig.system.context.textAlign = "center";
            ig.system.context.textBaseline = "middle";
            ig.system.context.globalAlpha = this.globalAlpha;
            ig.system.context.fillText("+" + this.score, this.pos.x, this.pos.y);
            ig.system.context.restore()
        },
        easeFlying: function() {
            var b = this.controller.boardScore.pos.x + 14 * this.controller.boardScore.size.x / 15,
                c = this.controller.boardScore.pos.y + 1.1 * this.controller.boardScore.size.y / 2;
            this.tween({
                pos: {
                    y: this.pos.y - this.posYDie
                }
            }, 1, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {
                    this.tween({
                        pos: {
                            x: b,
                            y: c
                        },
                        fontSize: 10,
                        globalAlpha: 0.2
                    }, 1, {
                        easing: ig.Tween.Easing.Linear.EaseNone,
                        onComplete: function() {
                            ig.game.gameScore += this.score;
                            this.kill()
                        }.bind(this)
                    }).start()
                }.bind(this)
            }).start()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.tutorial-step").requires("game.entities.others.marketjs-entity").defines(function() {
    EntityTutorialStep = EntityMarketjsEntity.extend({
        zIndex: 975,
        vertical: "center",
        horizontal: "center",
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/game/pop-up-tutorial-big.png"),
            sheetX: 1,
            sheetY: 1
        },
        transparentBg: null,
        isKill: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 1, [0], !0);
            this.setPosition();
            this.pos.y += ig.system.height;
            3 == this.index && (this.hand = ig.game.spawnEntity(EntityTutorialHand, this.controller.boardBall.pos.x + this.controller.boardBall.size.x / 2 - 39.5, this.controller.boardBall.pos.y + 2 * this.controller.boardBall.size.y, {
                controller: this,
                moveY: -40
            }));
            ig.ua.mobile && 1 == this.index ? this.hand = ig.game.spawnEntity(EntityTutorialHand, 3 * ig.system.width / 4 - 44, 3 * ig.system.height / 4 - 61, {
                controller: this,
                tutrialPoint: !0
            }) : ig.ua.mobile && 2 == this.index ? this.hand = ig.game.spawnEntity(EntityTutorialHand, 1 * ig.system.width / 4 - 44, 3 * ig.system.height /
                4 - 61, {
                    controller: this,
                    tutrialPoint: !0,
                    flipX: !0
                }) : ig.ua.mobile && 4 == this.index && (this.hand = ig.game.spawnEntity(EntityTutorialHand, this.controller.board.pos.x + this.controller.board.size.x - 150, this.controller.board.pos.y + this.controller.board.size.y - 90, {
                controller: this,
                moveX: -40,
                rotation: 90
            }));
            this.easeIn()
        },
        update: function() {
            this.parent();
            this.timeEnd && 0 < this.timeEnd.delta() && (this.timeEnd = null, this.easeOut())
        },
        draw: function() {
            this.transparentBg && (ig.system.context.fillStyle = "rgba(0,0,0,0.7)", ig.system.context.fillRect(0,
                0, ig.system.width, ig.system.height));
            this.parent();
            ig.system.context.save();
            ig.system.context.font = this.textSize + "px handel-gothic";
            ig.system.context.fillStyle = "#FFFFFF";
            ig.system.context.textAlign = "center";
            ig.system.context.textBaseline = "middle";
            this.wrapText(ig.system.context, this.text, this.pos.x + this.size.x * this.textX, this.pos.y + this.size.y * this.textY, 4.3 * this.size.x / 5, 9 * this.textSize / 8);
            ig.system.context.restore()
        },
        wrapText: function(b, c, d, e, f, j) {
            c = c.split("\n");
            for (var n = "", l = 0; l < c.length; l++) n =
                n + c[l] + " breakLine ";
            c = n.split(" ");
            n = "";
            for (l = 0; l < c.length; l++)
                if ("breakLine" != c[l]) {
                    var g = n + c[l] + " ";
                    b.measureText(g).width > f && 0 < l ? (b.fillText(n, d, e), n = c[l] + " ", e += j) : n = g
                } else b.fillText(n, d, e), n = "", e += j;
            b.fillText(n, d, e)
        },
        easeIn: function() {
            ig.soundHandler.sfxPlayer.play("tutorialTransition");
            ig.game.easing = !0;
            this.tween({
                pos: {
                    y: this.pos.y - ig.system.height
                }
            }, 0.2, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {
                    ig.game.easing = !1;
                    this.timeEndSec && (this.timeEnd = new ig.Timer(this.timeEndSec))
                }.bind(this)
            }).start()
        },
        easeOut: function() {
            3 == this.index && (this.controller.createBall(), this.hand.kill());
            1 == this.index ? this.hand && this.hand.kill() : 2 == this.index ? this.hand && this.hand.kill() : 4 == this.index && this.hand && this.hand.kill();
            ig.game.easing = !0;
            this.tween({
                pos: {
                    y: this.pos.y - ig.system.height
                }
            }, 0.2, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {
                    ig.game.easing = !1;
                    this.kill();
                    if (5 == this.index) {
                        ig.game.tutorialMode = !1;
                        ig.game.save("tutorialMode", ig.game.tutorialMode);
                        this.controller.buttonPause.enable = !0;
                        if (ig.ua.mobile) {
                            this.controller.launcherCover.release = !1;
                            var b = this.controller.launcher.body.GetPosition()
                        } else b = this.controller.launcher.body.GetPosition();
                        b = (b.y - this.controller.launcher.oriPosB2d.y) / (this.controller.launcher.minimizeMin - this.controller.launcher.oriPosB2d.y);
                        this.controller.ball.body.SetPosition({
                            x: this.controller.launcher.oriPosB2d.x,
                            y: this.controller.launcher.oriPosB2d.y - 5
                        });
                        this.controller.launcher.body.SetPosition({
                            x: this.controller.launcher.oriPosB2d.x,
                            y: this.controller.launcher.oriPosB2d.y
                        });
                        b = new Box2D.Common.Math.b2Vec2(0, this.controller.launcher.maxPushSpeed * b);
                        this.controller.ball.body.ApplyForce(b, this.controller.ball.body.GetPosition());
                        this.controller.launcher.ballReady = !1;
                        ig.soundHandler.sfxPlayer.stop("launchStart");
                        ig.soundHandler.sfxPlayer.play("launchFinish")
                    }
                }.bind(this)
            }).start()
        },
        kill: function() {
            this.isKill = !0;
            this.parent();
            2 == this.index && this.controller.buttonLeft && (this.controller.buttonLeft.transparentBg = !1)
        }
    });
    EntityTutorialHand = EntityMarketjsEntity.extend({
        zIndex: 975.1,
        vertical: "center",
        horizontal: "center",
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/game/finger-point.png"),
            sheetX: 1,
            sheetY: 1
        },
        point: new ig.Image("media/graphics/sprites/game/point.png"),
        moveX: 0,
        moveY: 0,
        tutrialPoint: !1,
        alpha: 0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 1, [0], !0);
            this.rotation && (this.currentAnim.angle = this.rotation * (Math.PI / 180));
            this.flipX && (this.currentAnim.flip.x = !0);
            this.easeMove();
            this.tutrialPoint && this.easeTutorialPoint()
        },
        update: function() {
            this.parent()
        },
        easeMove: function() {
            this.tween({
                pos: {
                    x: this.pos.x + this.moveX,
                    y: this.pos.y + this.moveY
                }
            }, 0.3, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {
                    this.tween({
                        pos: {
                            x: this.pos.x - this.moveX,
                            y: this.pos.y - this.moveY
                        }
                    }, 0.3, {
                        easing: ig.Tween.Easing.Linear.EaseNone,
                        onComplete: function() {
                            this.easeMove()
                        }.bind(this)
                    }).start()
                }.bind(this)
            }).start()
        },
        draw: function() {
            this.tutrialPoint && (ig.system.context.save(), ig.system.context.globalAlpha = this.alpha, this.flipX ? ig.system.context.drawImage(this.point.data,
                this.pos.x + this.size.x - this.point.width + 17, this.pos.y - 33) : ig.system.context.drawImage(this.point.data, this.pos.x - 17, this.pos.y - 33), ig.system.context.restore());
            this.parent()
        },
        easeTutorialPoint: function() {
            this.tween({
                alpha: 1
            }, 0.5, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {
                    this.tween({
                        alpha: 0
                    }, 0.5, {
                        easing: ig.Tween.Easing.Linear.EaseNone,
                        onComplete: function() {
                            this.easeTutorialPoint()
                        }.bind(this)
                    }).start()
                }.bind(this)
            }).start()
        }
    })
});
ig.baked = !0;
ig.module("game.levels.opening").requires("impact.image", "game.entities.opening-kitty").defines(function() {
    LevelOpening = {
        entities: [{
            type: "EntityOpeningKitty",
            x: 520,
            y: 212
        }],
        layer: []
    }
});
ig.baked = !0;
ig.module("game.entities.controllers.menu-controller").requires("game.entities.others.marketjs-entity").defines(function() {
    EntityMenuController = EntityMarketjsEntity.extend({
        zIndex: 0,
        bg: new ig.Image("media/graphics/sprites/background/0-bg.png"),
        fg1: new ig.Image("media/graphics/sprites/background/1-fg.png"),
        fg2: new ig.Image("media/graphics/sprites/background/2-fg.png"),
        fg3: new ig.Image("media/graphics/sprites/background/3-fg.png"),
        fg4: new ig.Image("media/graphics/sprites/background/4-fg.png"),
        fg5: new ig.Image("media/graphics/sprites/background/5-fg.png"),
        fg6: new ig.Image("media/graphics/sprites/background/6-fg.png"),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
            null == this.pointer && (this.pointer = ig.game.spawnEntity(EntityPointer, 0, 0));
            this.menuTitle = ig.game.spawnEntity(EntityMenuTitle, 1 * ig.system.width / 2, 1 * ig.system.height / 4, {
                controller: this
            });
            this.buttonStart = ig.game.spawnEntity(EntityButtonTextStart, 1 * ig.system.width / 2, 2 * ig.system.height / 4, {
                controller: this,
                text: _STRINGS.Menu.ButtonStart
            });
            this.buttonSettings =
                ig.game.spawnEntity(EntityButtonTextSettings, 1 * ig.system.width / 2, 2.5 * ig.system.height / 4, {
                    controller: this,
                    text: _STRINGS.Menu.ButtonSettings
                });
            _SETTINGS.MoreGames.Enabled && (this.buttonMoreGames = ig.game.spawnEntity(EntityButtonMoreGames, 1 * ig.system.width / 2, 3 * ig.system.height / 4, {
                controller: this,
                text: _STRINGS.Menu.ButtonMoreGames
            }));
            this.popUpSettings = ig.game.spawnEntity(EntityPopUpSettings, 1 * ig.system.width / 2, 1 * ig.system.height / 2, {
                controller: this
            });
            this.easeIn();
            this.fg1Alpha = 1;
            this.fg1Tween();
            this.fg2Alpha =
                0;
            this.fg2Tween();
            this.fg3Alpha = 1;
            this.fg3Tween();
            this.fg4Alpha = 0;
            this.fg4Tween();
            this.fg5Alpha = 1;
            this.fg5Tween();
            this.fg6Alpha = 1;
            this.fg6Tween()
        },
        easeIn: function() {
            ig.game.easing = !0;
            this.menuTitle.easeIn();
            this.buttonStart.easeIn();
            this.buttonSettings.easeIn();
            _SETTINGS.MoreGames.Enabled && this.buttonMoreGames.easeIn()
        },
        easeOut: function() {
            this.menuTitle.easeOut();
            this.buttonStart.easeOut();
            this.buttonSettings.easeOut();
            _SETTINGS.MoreGames.Enabled && this.buttonMoreGames.easeOut()
        },
        update: function() {
            this.parent()
        },
        draw: function() {
            this.parent();
            this.bg.draw(0, 0);
            this.drawFg()
        },
        drawFg: function() {
            ig.system.context.save();
            ig.system.context.globalAlpha = this.fg1Alpha;
            ig.system.context.drawImage(this.fg1.data, 0, 0);
            ig.system.context.restore();
            ig.system.context.save();
            ig.system.context.globalAlpha = this.fg2Alpha;
            ig.system.context.drawImage(this.fg2.data, 0, 0);
            ig.system.context.restore();
            ig.system.context.save();
            ig.system.context.globalAlpha = this.fg3Alpha;
            ig.system.context.drawImage(this.fg3.data, 0, 0);
            ig.system.context.restore();
            ig.system.context.save();
            ig.system.context.globalAlpha = this.fg4Alpha;
            ig.system.context.drawImage(this.fg4.data, 0, 0);
            ig.system.context.restore();
            ig.system.context.save();
            ig.system.context.globalAlpha = this.fg5Alpha;
            ig.system.context.drawImage(this.fg5.data, 0, 0);
            ig.system.context.restore();
            ig.system.context.save();
            ig.system.context.globalAlpha = this.fg6Alpha;
            ig.system.context.drawImage(this.fg6.data, 0, 0);
            ig.system.context.restore()
        },
        fg1Tween: function() {
            this.tween({
                fg1Alpha: 0
            }, 1, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {
                    this.tween({
                        fg1Alpha: 1
                    }, 1, {
                        easing: ig.Tween.Easing.Linear.EaseNone,
                        onComplete: function() {
                            this.fg1Tween()
                        }.bind(this)
                    }).start()
                }.bind(this)
            }).start()
        },
        fg2Tween: function() {
            this.tween({
                fg2Alpha: 1
            }, 1, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {
                    this.tween({
                        fg2Alpha: 0
                    }, 1, {
                        easing: ig.Tween.Easing.Linear.EaseNone,
                        onComplete: function() {
                            this.fg2Tween()
                        }.bind(this)
                    }).start()
                }.bind(this)
            }).start()
        },
        fg3Tween: function() {
            this.tween({
                fg3Alpha: 0
            }, 2, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {
                    this.tween({
                        fg3Alpha: 1
                    }, 2, {
                        easing: ig.Tween.Easing.Linear.EaseNone,
                        onComplete: function() {
                            this.fg3Tween()
                        }.bind(this)
                    }).start()
                }.bind(this)
            }).start()
        },
        fg4Tween: function() {
            this.tween({
                fg4Alpha: 1
            }, 4, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {
                    this.tween({
                        fg4Alpha: 0
                    }, 4, {
                        easing: ig.Tween.Easing.Linear.EaseNone,
                        onComplete: function() {
                            this.fg4Tween()
                        }.bind(this)
                    }).start()
                }.bind(this)
            }).start()
        },
        fg5Tween: function() {
            this.tween({
                fg5Alpha: 0
            }, 8, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {
                    this.tween({
                        fg5Alpha: 1
                    }, 8, {
                        easing: ig.Tween.Easing.Linear.EaseNone,
                        onComplete: function() {
                            this.fg5Tween()
                        }.bind(this)
                    }).start()
                }.bind(this)
            }).start()
        },
        fg6Tween: function() {
            this.tween({
                fg6Alpha: 0
            }, 16, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {
                    this.tween({
                        fg6Alpha: 1
                    }, 16, {
                        easing: ig.Tween.Easing.Linear.EaseNone,
                        onComplete: function() {
                            this.fg6Tween()
                        }.bind(this)
                    }).start()
                }.bind(this)
            }).start()
        }
    })
});
ig.baked = !0;
ig.module("game.levels.menu").requires("impact.image", "game.entities.controllers.menu-controller").defines(function() {
    LevelMenu = {
        entities: [{
            type: "EntityMenuController",
            x: 0,
            y: 0
        }],
        layer: []
    }
});
ig.baked = !0;
ig.module("game.entities.controllers.game-controller").requires("game.entities.others.marketjs-entity").defines(function() {
    EntityGameController = EntityMarketjsEntity.extend({
        zIndex: 0,
        bg: new ig.Image("media/graphics/sprites/background/0-bg.png"),
        fg1: new ig.Image("media/graphics/sprites/background/1-fg.png"),
        fg2: new ig.Image("media/graphics/sprites/background/2-fg.png"),
        fg3: new ig.Image("media/graphics/sprites/background/3-fg.png"),
        fg4: new ig.Image("media/graphics/sprites/background/4-fg.png"),
        fg5: new ig.Image("media/graphics/sprites/background/5-fg.png"),
        fg6: new ig.Image("media/graphics/sprites/background/6-fg.png"),
        finishGame: null,
        wallVertices: [
            [{
                x: -20.15,
                y: -41.58
            }, {
                x: -22.96,
                y: -41.58
            }, {
                x: -22.93,
                y: -37.47
            }, {
                x: -20.19,
                y: -37.44
            }],
            [{
                x: -20.15,
                y: -41.58
            }, {
                x: -19.32,
                y: -41.55
            }, {
                x: -19.29,
                y: -38.42
            }, {
                x: -20.19,
                y: -37.44
            }],
            [{
                x: -18.4,
                y: -41.52
            }, {
                x: -19.32,
                y: -41.55
            }, {
                x: -19.29,
                y: -38.42
            }, {
                x: -18.4,
                y: -39.06
            }],
            [{
                x: -18.4,
                y: -41.52
            }, {
                x: -17.24,
                y: -41.55
            }, {
                x: -17.24,
                y: -39.63
            }, {
                x: -18.4,
                y: -39.06
            }],
            [{
                x: -16.08,
                y: -41.52
            }, {
                x: -17.24,
                y: -41.55
            }, {
                x: -17.24,
                y: -39.63
            }, {
                x: -16.08,
                y: -39.9
            }],
            [{
                x: -16.08,
                y: -41.52
            }, {
                x: -14.78,
                y: -41.55
            }, {
                x: -14.74,
                y: -39.9
            }, {
                x: -16.08,
                y: -39.9
            }],
            [{
                x: -13.52,
                y: -41.52
            }, {
                x: -14.71,
                y: -41.55
            }, {
                x: -14.74,
                y: -39.9
            }, {
                x: -13.48,
                y: -39.63
            }],
            [{
                x: -13.52,
                y: -41.52
            }, {
                x: -12.52,
                y: -41.55
            }, {
                x: -12.52,
                y: -39.19
            }, {
                x: -13.55,
                y: -39.66
            }],
            [{
                x: -11.36,
                y: -41.55
            }, {
                x: -12.52,
                y: -41.55
            }, {
                x: -12.52,
                y: -39.19
            }, {
                x: -11.36,
                y: -38.42
            }],
            [{
                x: -11.36,
                y: -41.55
            }, {
                x: -10.47,
                y: -41.52
            }, {
                x: -10.43,
                y: -37.24
            }, {
                x: -11.36,
                y: -38.42
            }],
            [{
                x: -9.93,
                y: -41.57
            }, {
                x: -10.47,
                y: -41.57
            }, {
                x: -10.45,
                y: -37.22
            }, {
                x: -9.87,
                y: -35.96
            }],
            [{
                x: -8.18,
                y: -36.83
            }, {
                x: -8.18,
                y: -41.57
            }, {
                x: -9.76,
                y: -41.56
            }, {
                x: -9.85,
                y: -35.91
            }],
            [{
                x: -6.21,
                y: -41.65
            }, {
                x: -8.31,
                y: -41.62
            }, {
                x: -8.31,
                y: -36.77
            }, {
                x: -6.21,
                y: -37.51
            }],
            [{
                x: -6.21,
                y: -41.65
            }, {
                x: -3.66,
                y: -41.65
            }, {
                x: -3.63,
                y: -38.11
            }, {
                x: -6.21,
                y: -37.51
            }],
            [{
                x: -1.22,
                y: -41.65
            }, {
                x: -3.66,
                y: -41.65
            }, {
                x: -3.63,
                y: -38.11
            }, {
                x: -1.22,
                y: -38.42
            }],
            [{
                x: 0.5,
                y: -38.44
            }, {
                x: 0.63,
                y: -41.54
            }, {
                x: -1.22,
                y: -41.56
            }, {
                x: -1.09,
                y: -38.47
            }],
            [{
                x: 2.48,
                y: -41.62
            }, {
                x: 0.68,
                y: -41.62
            }, {
                x: 0.68,
                y: -38.45
            }, {
                x: 2.48,
                y: -38.32
            }],
            [{
                x: 2.48,
                y: -41.62
            }, {
                x: 4.73,
                y: -41.58
            }, {
                x: 4.76,
                y: -37.88
            }, {
                x: 2.48,
                y: -38.32
            }],
            [{
                x: 7.23,
                y: -41.58
            }, {
                x: 4.73,
                y: -41.58
            }, {
                x: 4.76,
                y: -37.88
            }, {
                x: 7.27,
                y: -37.14
            }],
            [{
                x: 7.23,
                y: -41.58
            }, {
                x: 9.37,
                y: -41.58
            }, {
                x: 9.34,
                y: -36.26
            }, {
                x: 7.27,
                y: -37.14
            }],
            [{
                x: 11.68,
                y: -41.52
            }, {
                x: 9.37,
                y: -41.58
            }, {
                x: 9.34,
                y: -36.26
            }, {
                x: 11.68,
                y: -34.91
            }],
            [{
                x: 11.68,
                y: -41.52
            }, {
                x: 14.33,
                y: -41.58
            }, {
                x: 14.22,
                y: -32.86
            }, {
                x: 11.68,
                y: -34.91
            }],
            [{
                x: 16.09,
                y: -41.58
            }, {
                x: 14.33,
                y: -41.58
            }, {
                x: 14.22,
                y: -32.86
            }, {
                x: 16.06,
                y: -31.04
            }],
            [{
                x: 16.09,
                y: -41.58
            }, {
                x: 17.96,
                y: -41.55
            }, {
                x: 18.06,
                y: -28.04
            }, {
                x: 16.06,
                y: -31.04
            }],
            [{
                x: 19.56,
                y: -41.58
            }, {
                x: 17.96,
                y: -41.55
            }, {
                x: 18.06,
                y: -28.04
            }, {
                x: 19.53,
                y: -25.11
            }],
            [{
                x: 19.56,
                y: -41.58
            }, {
                x: 20.52,
                y: -41.58
            }, {
                x: 20.49,
                y: -21.71
            }, {
                x: 19.53,
                y: -25.11
            }],
            [{
                x: 22.96,
                y: -41.55
            }, {
                x: 20.52,
                y: -41.58
            }, {
                x: 20.49,
                y: -21.71
            }, {
                x: 22.96,
                y: -21.68
            }],
            [{
                x: 22.96,
                y: -17.8
            }, {
                x: 20.89,
                y: -17.77
            }, {
                x: 20.49,
                y: -21.71
            }, {
                x: 22.96,
                y: -21.68
            }],
            [{
                x: 22.9,
                y: -17.9
            }, {
                x: 20.89,
                y: -17.77
            }, {
                x: 20.76,
                y: 41.55
            }, {
                x: 22.9,
                y: 41.6
            }],
            [{
                x: 18.06,
                y: 40.32
            }, {
                x: 18.08,
                y: 41.5
            }, {
                x: 20.76,
                y: 41.55
            }, {
                x: 20.77,
                y: 40.34
            }],
            [{
                x: 18.06,
                y: 29.51
            }, {
                x: 18.08,
                y: 41.5
            }, {
                x: 3.76,
                y: 41.63
            }, {
                x: 3.8,
                y: 36.91
            }],
            [{
                x: -4.81,
                y: 36.92
            }, {
                x: -4.74,
                y: 41.66
            }, {
                x: -22.98,
                y: 41.6
            }, {
                x: -23.04,
                y: 27.4
            }],
            [{
                x: -20.87,
                y: 28.62
            }, {
                x: -20.83,
                y: 18.19
            }, {
                x: -23,
                y: 18.24
            }, {
                x: -23.04,
                y: 27.4
            }],
            [{
                x: -18.99,
                y: 15.5
            }, {
                x: -20.83,
                y: 18.19
            }, {
                x: -23.03,
                y: 18.24
            }, {
                x: -23.04,
                y: 15.52
            }],
            [{
                x: -18.99,
                y: 15.5
            }, {
                x: -16.08,
                y: 13.36
            }, {
                x: -23.03,
                y: 13.42
            }, {
                x: -23.04,
                y: 15.52
            }],
            [{
                x: -11.87,
                y: 12.62
            }, {
                x: -16.08,
                y: 13.36
            }, {
                x: -23.03,
                y: 13.42
            }, {
                x: -23.02,
                y: 12.69
            }],
            [{
                x: -11.87,
                y: 12.62
            }, {
                x: -23,
                y: 12.55
            }, {
                x: -23.02,
                y: 11.39
            }, {
                x: -11.31,
                y: 11.59
            }],
            [{
                x: -11.31,
                y: 4.18
            }, {
                x: -23.03,
                y: 4.09
            }, {
                x: -23.02,
                y: 11.39
            }, {
                x: -11.31,
                y: 11.59
            }],
            [{
                x: -11.31,
                y: 4.18
            }, {
                x: -23.03,
                y: 4.09
            }, {
                x: -23.04,
                y: -0.41
            }, {
                x: -14.04,
                y: -0.22
            }],
            [{
                x: -16.37,
                y: -4.77
            }, {
                x: -22.98,
                y: -4.94
            }, {
                x: -23.04,
                y: -0.41
            }, {
                x: -14.04,
                y: -0.22
            }],
            [{
                x: -16.37,
                y: -4.77
            }, {
                x: -22.98,
                y: -4.94
            }, {
                x: -22.96,
                y: -9.54
            }, {
                x: -18.48,
                y: -9.49
            }],
            [{
                x: -19.8,
                y: -13.42
            }, {
                x: -22.98,
                y: -13.45
            }, {
                x: -22.96,
                y: -9.54
            }, {
                x: -18.48,
                y: -9.49
            }],
            [{
                x: -19.8,
                y: -13.42
            }, {
                x: -22.98,
                y: -13.45
            }, {
                x: -22.99,
                y: -17.06
            }, {
                x: -20.69,
                y: -17.08
            }],
            [{
                x: -20.85,
                y: -18.78
            }, {
                x: -23,
                y: -18.73
            }, {
                x: -22.99,
                y: -17.06
            }, {
                x: -20.69,
                y: -17.08
            }],
            [{
                x: -20.85,
                y: -18.78
            }, {
                x: -23,
                y: -18.73
            }, {
                x: -23.02,
                y: -22.67
            }, {
                x: -20.23,
                y: -22.64
            }],
            [{
                x: -18.5,
                y: -26.89
            }, {
                x: -23.03,
                y: -26.95
            }, {
                x: -23.02,
                y: -22.67
            }, {
                x: -20.23,
                y: -22.64
            }],
            [{
                x: -18.5,
                y: -26.89
            }, {
                x: -23.03,
                y: -26.95
            }, {
                x: -23.02,
                y: -29.13
            }, {
                x: -17.35,
                y: -28.97
            }],
            [{
                x: -19.18,
                y: -30.15
            }, {
                x: -23,
                y: -30.27
            }, {
                x: -23.02,
                y: -29.13
            }, {
                x: -17.35,
                y: -28.97
            }],
            [{
                x: -19.18,
                y: -30.15
            }, {
                x: -23,
                y: -30.27
            }, {
                x: -23.02,
                y: -31.53
            }, {
                x: -20.34,
                y: -31.53
            }],
            [{
                x: -20.79,
                y: -32.93
            }, {
                x: -23,
                y: -32.96
            }, {
                x: -23.02,
                y: -31.53
            }, {
                x: -20.34,
                y: -31.53
            }],
            [{
                x: -20.79,
                y: -32.93
            }, {
                x: -23,
                y: -32.96
            }, {
                x: -23.02,
                y: -34.25
            }, {
                x: -20.96,
                y: -34.3
            }],
            [{
                x: -20.85,
                y: -35.94
            }, {
                x: -23,
                y: -35.92
            }, {
                x: -23.02,
                y: -34.25
            }, {
                x: -20.96,
                y: -34.3
            }],
            [{
                x: -20.87,
                y: -35.92
            }, {
                x: -23,
                y: -35.92
            }, {
                x: -22.96,
                y: -37.49
            }, {
                x: -20.07,
                y: -37.56
            }],
            [{
                x: 5.35,
                y: -28.93
            }, {
                x: 8.89,
                y: -31.68
            }, {
                x: 7.96,
                y: -33.86
            }, {
                x: 4.52,
                y: -31.7
            }, {
                x: 4.59,
                y: -29.31
            }],
            [{
                x: 9.36,
                y: -31.79
            }, {
                x: 8.89,
                y: -31.68
            }, {
                x: 7.96,
                y: -33.86
            }, {
                x: 9.34,
                y: -33.26
            }],
            [{
                x: 9.36,
                y: -31.79
            }, {
                x: 11.32,
                y: -30.3
            }, {
                x: 12.11,
                y: -31.16
            }, {
                x: 9.34,
                y: -33.26
            }],
            [{
                x: 12.94,
                y: -28.72
            }, {
                x: 11.32,
                y: -30.3
            }, {
                x: 12.11,
                y: -31.16
            }, {
                x: 13.71,
                y: -29.49
            }],
            [{
                x: 12.94,
                y: -28.72
            }, {
                x: 14.23,
                y: -26.96
            }, {
                x: 15.08,
                y: -27.69
            }, {
                x: 13.71,
                y: -29.49
            }],
            [{
                x: 15.15,
                y: -25.4
            }, {
                x: 14.23,
                y: -26.96
            }, {
                x: 15.08,
                y: -27.69
            }, {
                x: 16.05,
                y: -26.07
            }],
            [{
                x: 15.15,
                y: -25.4
            }, {
                x: 16,
                y: -23.43
            }, {
                x: 17.15,
                y: -23.7
            }, {
                x: 16.05,
                y: -26.07
            }],
            [{
                x: 16.72,
                y: -20.5
            }, {
                x: 16,
                y: -23.43
            }, {
                x: 17.15,
                y: -23.7
            }, {
                x: 17.91,
                y: -20.52
            }],
            [{
                x: 16.72,
                y: -20.5
            }, {
                x: 16.81,
                y: -18.42
            }, {
                x: 18.04,
                y: -18.39
            }, {
                x: 17.91,
                y: -20.52
            }],
            [{
                x: 16.02,
                y: -15.11
            }, {
                x: 16.81,
                y: -18.42
            }, {
                x: 18.04,
                y: -18.39
            }, {
                x: 18.07,
                y: -15.05
            }],
            [{
                x: 16.02,
                y: -15.11
            }, {
                x: 10.43,
                y: -1.2
            }, {
                x: 18.07,
                y: -1.28
            }, {
                x: 18.07,
                y: -15.05
            }],
            [{
                x: 10.36,
                y: 7.39
            }, {
                x: 10.43,
                y: -1.2
            }, {
                x: 18.07,
                y: -1.28
            }, {
                x: 18.04,
                y: 9.85
            }, {
                x: 16.98,
                y: 10.09
            }],
            [{
                x: 16.88,
                y: 30.06
            }, {
                x: 16.84,
                y: 13.22
            }, {
                x: 18.04,
                y: 12.89
            }, {
                x: 18.03,
                y: 29.55
            }]
        ],
        ball: null,
        launcherBlock: null,
        launcherBlockVertices: [{
            x: 20.76,
            y: 13.57
        }, {
            x: 18.03,
            y: 14.27
        }, {
            x: 18.04,
            y: 12.89
        }, {
            x: 20.7,
            y: 12.19
        }],
        popUpResult: null,
        tutorial: null,
        tutorialSteps: null,
        init: function(b, c, d) {
            this.parent(b, c, d);
            ig.ua.mobile || (this.pointer = ig.game.getEntitiesByType(EntityPointer)[0], null == this.pointer && (this.pointer = ig.game.spawnEntity(EntityPointer,
                0, 0)));
            this.board = ig.game.spawnEntity(EntityBoard, 1 * ig.system.width / 2, 29 * ig.system.height / 30, {
                controller: this
            });
            for (b = 0; b < this.wallVertices.length; b++) c = this.arrangeClockwise(this.wallVertices[b]), ig.game.spawnEntity(EntityWall, this.board.pos.x, this.board.pos.y, {
                controller: this,
                size: {
                    x: this.board.size.x,
                    y: this.board.size.y
                },
                vertices: c
            });
            this.launcher = ig.game.spawnEntity(EntityLauncher, this.board.pos.x + 17.88 * this.board.size.x / 20 + 1, this.board.pos.y + 16.65 * this.board.size.y / 20, {
                controller: this
            });
            this.launcherCover =
                ig.game.spawnEntity(EntityLauncherCover, this.launcher.pos.x - 37, this.launcher.pos.y + this.launcher.size.y - 38, {
                    controller: this
                });
            this.buttonPause = ig.game.spawnEntity(EntityButtonPause, this.board.pos.x + this.board.size.x, 1 * ig.system.height / 30, {
                controller: this
            });
            this.popUpPause = ig.game.spawnEntity(EntityPopUpPause, 1 * ig.system.width / 2, 1 * ig.system.height / 2, {
                controller: this
            });
            this.boardScore = ig.game.spawnEntity(EntityBoardScore, this.board.pos.x, 1 * ig.system.height / 30, {
                controller: this
            });
            this.boardBall = ig.game.spawnEntity(EntityBoardBall,
                this.boardScore.pos.x + this.boardScore.size.x + 10, 1 * ig.system.height / 30, {
                    controller: this
                });
            ig.ua.mobile && (this.buttonLeft = ig.game.spawnEntity(EntityButtonController, 0, 0, {
                controller: this,
                paddle: this.board.paddleLeft,
                size: {
                    x: ig.system.width / 2,
                    y: ig.system.height
                }
            }), this.buttonRight = ig.game.spawnEntity(EntityButtonController, ig.system.width / 2, 0, {
                controller: this,
                paddle: this.board.paddleRight,
                size: {
                    x: ig.system.width / 2,
                    y: ig.system.height
                }
            }));
            ig.game.tutorialMode && (this.buttonPause.enable = !1, this.tutorial =
                ig.ua.mobile ? [{
                    x: ig.system.width / 2,
                    y: ig.system.height / 2,
                    type: 0,
                    text: _STRINGS.Game.TutorialMobile[0],
                    textSize: 35,
                    textX: 0.5,
                    textY: 1.1 / 3,
                    transparentBg: !0,
                    timeEndSec: 2,
                    lastTutorial: !1
                }, {
                    x: ig.system.width / 2,
                    y: 0.75 * ig.system.height / 2,
                    type: 0,
                    text: _STRINGS.Game.TutorialMobile[1],
                    textSize: 28,
                    textX: 0.5,
                    textY: 1.12 / 3,
                    transparentBg: !1,
                    timeEndSec: null,
                    lastTutorial: !1
                }, {
                    x: ig.system.width / 2,
                    y: 0.75 * ig.system.height / 2,
                    type: 0,
                    text: _STRINGS.Game.TutorialMobile[2],
                    textSize: 28,
                    textX: 0.5,
                    textY: 1.12 / 3,
                    transparentBg: !1,
                    timeEndSec: null,
                    lastTutorial: !1
                }, {
                    x: ig.system.width / 2,
                    y: ig.system.height / 2,
                    type: 0,
                    text: _STRINGS.Game.TutorialMobile[3],
                    textSize: 35,
                    textX: 0.5,
                    textY: 1.1 / 3,
                    transparentBg: !0,
                    timeEndSec: 2,
                    lastTutorial: !1
                }, {
                    x: ig.system.width / 2,
                    y: ig.system.height / 2,
                    type: 0,
                    text: _STRINGS.Game.TutorialMobile[4],
                    textSize: 28,
                    textX: 0.5,
                    textY: 1.1 / 3,
                    transparentBg: !1,
                    timeEndSec: null,
                    lastTutorial: !1
                }, {
                    x: ig.system.width / 2,
                    y: ig.system.height / 2,
                    type: 0,
                    text: _STRINGS.Game.TutorialMobile[5],
                    textSize: 28,
                    textX: 0.5,
                    textY: 1.1 / 3,
                    transparentBg: !1,
                    timeEndSec: null,
                    lastTutorial: !0
                }] : [{
                    x: ig.system.width / 2,
                    y: ig.system.height / 2,
                    type: 0,
                    text: _STRINGS.Game.TutorialDesktop[0],
                    textSize: 35,
                    textX: 0.5,
                    textY: 1.1 / 3,
                    transparentBg: !0,
                    timeEndSec: 2,
                    lastTutorial: !1
                }, {
                    x: ig.system.width / 2,
                    y: ig.system.height / 2,
                    type: 0,
                    text: _STRINGS.Game.TutorialDesktop[1],
                    textSize: 28,
                    textX: 0.5,
                    textY: 1.12 / 3,
                    transparentBg: !1,
                    timeEndSec: null,
                    lastTutorial: !1
                }, {
                    x: ig.system.width / 2,
                    y: ig.system.height / 2,
                    type: 0,
                    text: _STRINGS.Game.TutorialDesktop[2],
                    textSize: 28,
                    textX: 0.5,
                    textY: 1.12 / 3,
                    transparentBg: !1,
                    timeEndSec: null,
                    lastTutorial: !1
                }, {
                    x: ig.system.width / 2,
                    y: ig.system.height / 2,
                    type: 0,
                    text: _STRINGS.Game.TutorialDesktop[3],
                    textSize: 35,
                    textX: 0.5,
                    textY: 1.1 / 3,
                    transparentBg: !0,
                    timeEndSec: 2,
                    lastTutorial: !1
                }, {
                    x: ig.system.width / 2,
                    y: ig.system.height / 2,
                    type: 0,
                    text: _STRINGS.Game.TutorialDesktop[4],
                    textSize: 28,
                    textX: 0.5,
                    textY: 0.25,
                    transparentBg: !1,
                    timeEndSec: null,
                    lastTutorial: !1
                }, {
                    x: ig.system.width / 2,
                    y: ig.system.height / 2,
                    type: 0,
                    text: _STRINGS.Game.TutorialDesktop[5],
                    textSize: 28,
                    textX: 0.5,
                    textY: 1.12 / 3,
                    transparentBg: !1,
                    timeEndSec: null,
                    lastTutorial: !0
                }]);
            ig.game.ballLeft = 3;
            ig.game.gameScore = 0;
            this.screenPos = {
                x: 0,
                y: -ig.system.height
            };
            ig.game.screen.x = this.screenPos.x;
            ig.game.screen.y = this.screenPos.y;
            this.easeIn()
        },
        update: function() {
            ig.game.screen.x = this.screenPos.x;
            ig.game.screen.y = this.screenPos.y;
            ig.game.paused || (this.parent(), ig.game.tutorialMode && this.tutorialMode(), ig.ua.mobile || this.desktopController(), null == this.launcherBlock && (null != this.ball && 610 > this.ball.pos.y) && (this.launcherBlock = ig.game.spawnEntity(EntityWall, this.board.pos.x,
                this.board.pos.y, {
                    controller: this,
                    size: {
                        x: this.board.size.x,
                        y: this.board.size.y
                    },
                    vertices: this.launcherBlockVertices
                })), null != this.ball && this.ball.pos.y > ig.system.height && (0 == ig.game.ballLeft ? null == this.popUpResult && (!ig.game.paused && !ig.game.easing && 0 == ig.game.getEntitiesByType(EntityFlyingScore).length) && (this.popUpResult = ig.game.spawnEntity(EntityPopUpResult, 1 * ig.system.width / 2, 1 * ig.system.height / 2, {
                controller: this
            }), this.popUpPause.kill(), this.boardScore.showScore = !1) : (this.launcherBlock.kill(),
                this.launcherBlock = null, this.ball.kill(), this.createBall())))
        },
        tutorialMode: function() {
            for (var b = 0; b < this.tutorial.length; b++)
                if (null != this.tutorial[b] && (null == this.tutorialSteps || !0 == this.tutorialSteps.isKill) && !1 == ig.game.easing) {
                    this.tutorialSteps = ig.game.spawnEntity(EntityTutorialStep, this.tutorial[b].x, this.tutorial[b].y, {
                        text: this.tutorial[b].text,
                        textSize: this.tutorial[b].textSize,
                        textX: this.tutorial[b].textX,
                        textY: this.tutorial[b].textY,
                        transparentBg: this.tutorial[b].transparentBg,
                        timeEndSec: this.tutorial[b].timeEndSec,
                        lastTutorial: this.tutorial[b].lastTutorial,
                        controller: this,
                        index: b
                    });
                    this.tutorial[b] = null;
                    3 == b ? this.boardBall.zIndex = 976 : ig.ua.mobile && 1 == b ? (this.buttonRight.zIndex = 974, this.buttonRight.transparentBg = !0) : ig.ua.mobile && 2 == b ? (this.buttonLeft.zIndex = 974, this.buttonRight.transparentBg = !1, this.buttonLeft.transparentBg = !0) : (this.buttonRight && (this.buttonRight.zIndex = 4), this.buttonLeft && (this.buttonLeft.zIndex = 4), this.boardBall.zIndex = 1);
                    break
                }
        },
        desktopController: function() {
            if (ig.game.tutorialMode) {
                if (ig.input.state("space") &&
                    null == this.launcherBlock && this.launcher.ballReady && null == this.tutorial[4]) {
                    var b = this.launcher.body.GetPosition();
                    null != this.tutorial[5] && this.tutorialSteps.easeOut();
                    var c = b.y + this.launcher.minimizeSpeed > this.launcher.minimizeMin ? this.launcher.minimizeMin : b.y + this.launcher.minimizeSpeed,
                        d = this.ball.body.GetPosition(),
                        e = b.y + this.launcher.minimizeSpeed > this.launcher.minimizeMin ? d.y : d.y + this.launcher.minimizeSpeed;
                    this.ball.body.SetPosition({
                        x: d.x,
                        y: e
                    });
                    this.launcher.body.SetPosition({
                        x: b.x,
                        y: c
                    });
                    !0 ==
                        ig.soundHandler.sfxPlayer.soundList.launchStart._sounds[0]._ended && ig.soundHandler.sfxPlayer.play("launchStart")
                }
                ig.input.released("space") && (null == this.launcherBlock && this.launcher.ballReady && !ig.game.easing && null == this.tutorial[5]) && this.tutorialSteps.easeOut()
            } else ig.input.state("space") && (null == this.launcherBlock && this.launcher.ballReady && !ig.game.easing) && (b = this.launcher.body.GetPosition(), c = b.y + this.launcher.minimizeSpeed > this.launcher.minimizeMin ? this.launcher.minimizeMin : b.y + this.launcher.minimizeSpeed,
                d = this.ball.body.GetPosition(), e = b.y + this.launcher.minimizeSpeed > this.launcher.minimizeMin ? d.y : d.y + this.launcher.minimizeSpeed, this.ball.body.SetPosition({
                    x: d.x,
                    y: e
                }), this.launcher.body.SetPosition({
                    x: b.x,
                    y: c
                }), !0 == ig.soundHandler.sfxPlayer.soundList.launchStart._sounds[0]._ended && ig.soundHandler.sfxPlayer.play("launchStart")), ig.input.released("space") && (null == this.launcherBlock && this.launcher.ballReady && !ig.game.easing) && (b = this.launcher.body.GetPosition(), b = (b.y - this.launcher.oriPosB2d.y) / (this.launcher.minimizeMin -
                this.launcher.oriPosB2d.y), this.ball.body.SetPosition({
                x: this.launcher.oriPosB2d.x,
                y: this.launcher.oriPosB2d.y - 5
            }), this.launcher.body.SetPosition({
                x: this.launcher.oriPosB2d.x,
                y: this.launcher.oriPosB2d.y
            }), b = new Box2D.Common.Math.b2Vec2(0, this.launcher.maxPushSpeed * b), this.ball.body.ApplyForce(b, this.ball.body.GetPosition()), this.launcher.ballReady = !1, ig.soundHandler.sfxPlayer.stop("launchStart"), ig.soundHandler.sfxPlayer.play("launchFinish"))
        },
        draw: function() {
            this.parent();
            this.bg.draw(0, 0);
            this.fg1.draw(0,
                0);
            this.fg2.draw(0, 0);
            this.fg3.draw(0, 0);
            this.fg4.draw(0, 0);
            this.fg5.draw(0, 0);
            this.fg6.draw(0, 0)
        },
        easeIn: function() {
            ig.game.screenMove = !0;
            this.tween({
                screenPos: {
                    x: 0,
                    y: 0
                }
            }, 0.3, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {
                    ig.game.easing = !1;
                    ig.game.screenMove = !1;
                    ig.game.tutorialMode || this.createBall()
                }.bind(this)
            }).start()
        },
        arrangeClockwise: function(b) {
            var c = b.length,
                d, e = 1,
                f = c - 1,
                j = [],
                n, l;
            b.sort(this.pointXsort);
            j[0] = b[0];
            n = b[0];
            l = b[c - 1];
            for (i = 1; i < c - 1; i++) d = this.det(n.x, n.y, l.x, l.y,
                b[i].x, b[i].y), 0 > d ? j[e++] = b[i] : j[f--] = b[i];
            j[e] = b[c - 1];
            return j
        },
        det: function(b, c, d, e, f, j) {
            return b * e + d * j + f * c - c * d - e * f - j * b
        },
        createBall: function() {
            ig.soundHandler.sfxPlayer.play("createBall");
            ig.game.ballLeft--;
            this.ball = ig.game.spawnEntity(EntityBall, this.board.pos.x + 17.88 * this.board.size.x / 20 + 3, this.board.pos.y + 16.6 * this.board.size.y / 20 - 80, {
                controller: this
            });
            for (var b = 0; b < ig.game.getEntitiesByType(EntityDecoration).length; b++) {
                var c = ig.game.getEntitiesByType(EntityDecoration)[b];
                c.currentAnim = c.idle.rewind()
            }
            for (b =
                0; b < ig.game.getEntitiesByType(EntityDecorationBox2d).length; b++) c = ig.game.getEntitiesByType(EntityDecorationBox2d)[b], c.currentAnim = c.idle.rewind()
        }
    })
});
ig.baked = !0;
ig.module("game.levels.game").requires("impact.image", "game.entities.controllers.game-controller").defines(function() {
    LevelGame = {
        entities: [{
            type: "EntityGameController",
            x: 0,
            y: 0
        }],
        layer: []
    }
});
ig.baked = !0;
ig.module("game.main").requires("plugins.patches.webkit-image-smoothing-patch", "plugins.patches.windowfocus-onMouseDown-patch", "plugins.handlers.dom-handler", "plugins.handlers.size-handler", "plugins.handlers.api-handler", "plugins.audio.sound-handler", "plugins.io.io-manager", "plugins.io.storage-manager", "plugins.splash-loader", "plugins.tween", "plugins.tweens-handler", "plugins.url-parameters", "plugins.director", "plugins.impact-storage", "plugins.scale", "plugins.multitouch", "plugins.gamedist", "plugins.box2d.entity",
    "plugins.box2d.game", "plugins.data.vector", "plugins.data.color-rgb", "plugins.branding.splash", "game.entities.branding-logo-placeholder", "game.entities.buttons.button-more-games", "game.entities.opening-shield", "game.entities.opening-kitty", "game.entities.pointer", "game.entities.pointer-selector", "game.entities.select", "game.entities.menu.menu-title", "game.entities.menu.pop-up-settings", "game.entities.game.ball", "game.entities.buttons.button-text-start", "game.entities.buttons.button-text-settings",
    "game.entities.buttons.button-pause", "game.entities.buttons.button-home", "game.entities.buttons.button-restart", "game.entities.buttons.button-controller", "game.entities.game.board", "game.entities.game.board-ball", "game.entities.game.board-score", "game.entities.game.pop-up-pause", "game.entities.game.pop-up-result", "game.entities.game.launcher", "game.entities.game.launcher-cover", "game.entities.game.obstacle", "game.entities.game.decoration", "game.entities.game.paddle", "game.entities.game.wall", "game.entities.game.circle-line-mark",
    "game.entities.game.flying-score", "game.entities.game.tutorial-step", "game.levels.opening", "game.levels.menu", "game.levels.game").defines(function() {
    this.START_OBFUSCATION;
    this.FRAMEBREAKER;
    MyGame = ig.Box2DGame.extend({
        name: "mjs-game-classic-pinball",
        version: "1.0",
        sessionData: {},
        io: null,
        paused: !1,
        tweens: null,
        gravity: 0,
        easing: !1,
        init: function() {
            this.tweens = new ig.TweensHandler;
            this.setupMarketJsGameCenter();
            this.io = new IoManager;
            this.setupUrlParams = new ig.UrlParameters;
            this.removeLoadingWheel();
            this.setupStorageManager();
            this.volumeSfx = ig.game.load("volumeSfx");
            this.volumeBgm = ig.game.load("volumeBgm");
            this.scores = ig.game.load("scores");
            this.tutorialMode = ig.game.load("tutorialMode");
            ig.soundHandler.sfxPlayer.volume(this.volumeSfx);
            ig.soundHandler.bgmPlayer.volume(this.volumeBgm);
            ig.ua.mobile || (ig.input.bind(ig.KEY.RIGHT_ARROW, "right"), ig.input.bind(ig.KEY.LEFT_ARROW, "left"), ig.input.bind(ig.KEY.SPACE, "space"));
            this.finalize()
        },
        initData: function() {
            return this.sessionData = {
                volumeBgm: 0.3,
                volumeSfx: 0.7,
                scores: [null, null,
                    null, null, null
                ],
                tutorialMode: !0
            }
        },
        addScore: function(b, c, d) {
            ig.game.spawnEntity(EntityFlyingScore, c.pos.x + c.size.x / 2, c.pos.y + c.size.y / 2, {
                controller: b,
                score: d
            })
        },
        setupMarketJsGameCenter: function() {
            if (_SETTINGS)
                if (_SETTINGS.MarketJSGameCenter) {
                    var b = ig.domHandler.getElementByClass("gamecenter-activator");
                    _SETTINGS.MarketJSGameCenter.Activator.Enabled && _SETTINGS.MarketJSGameCenter.Activator.Position && (console.log("MarketJSGameCenter activator settings present ...."), ig.domHandler.css(b, {
                        position: "absolute",
                        left: _SETTINGS.MarketJSGameCenter.Activator.Position.Left,
                        top: _SETTINGS.MarketJSGameCenter.Activator.Position.Top,
                        "z-index": 3
                    }));
                    ig.domHandler.show(b)
                } else console.log("MarketJSGameCenter settings not defined in game settings")
        },
        finalize: function() {
            if (ig.ua.mobile) {
                var b = ig.domHandler.getElementById("#play");
                ig.domHandler.attr(b, "onclick", 'ig.soundHandler.sfxPlayer.play("staticSound");ig.game.splashClick();');
                ig.domHandler.show(b)
            } else this.start();
            ig.sizeHandler.reorient()
        },
        removeLoadingWheel: function() {
            try {
                $("#ajaxbar").css("background",
                    "none")
            } catch (b) {
                console.log(b)
            }
        },
        showDebugMenu: function() {
            console.log("showing debug menu ...");
            ig.Entity._debugShowBoxes = !0;
            $(".ig_debug").show()
        },
        start: function() {
            this.resetPlayerStats();
            this.director = new ig.Director(this, [LevelOpening, LevelMenu, LevelGame]);
            if (_SETTINGS.Branding.Splash.Enabled) try {
                this.branding = new ig.BrandingSplash
            } catch (b) {
                console.log(b), console.log("Loading original levels ..."), this.director.loadLevel(this.director.currentLevel)
            } else this.director.loadLevel(this.director.currentLevel);
            (_SETTINGS.Branding.Splash.Enabled || _SETTINGS.DeveloperBranding.Splash.Enabled) && this.spawnEntity(EntityPointerSelector, 50, 50);
            ig.soundHandler.bgmPlayer.play(ig.soundHandler.bgmPlayer.soundList.background)
        },
        fpsCount: function() {
            this.fpsTimer || (this.fpsTimer = new ig.Timer(1));
            this.fpsTimer && 0 > this.fpsTimer.delta() ? null != this.fpsCounter ? this.fpsCounter++ : this.fpsCounter = 0 : (ig.game.fps = this.fpsCounter, this.fpsCounter = 0, this.fpsTimer.reset())
        },
        endGame: function() {
            console.log("End game");
            ig.soundHandler.bgmPlayer.stop();
            ig.apiHandler.run("MJSEnd")
        },
        resetPlayerStats: function() {
            ig.log("resetting player stats ...");
            this.playerStats = {
                id: this.playerStats ? this.playerStats.id : null
            }
        },
        splashClick: function() {
            var b = ig.domHandler.getElementById("#play");
            ig.domHandler.hide(b);
            ig.apiHandler.run("MJSFooter");
            ig.apiHandler.run("MJSHeader");
            //ig.gd.show(function() {
            ig.game.start();
            //gdsdk && "function" === typeof gdsdk.play && gdsdk.play()
            //}.bind(this))
        },
        pauseGame: function() {
            ig.system.stopRunLoop.call(ig.system);
            ig.game.tweens.onSystemPause();
            console.log("Game Paused")
        },
        resumeGame: function() {
            ig.system.startRunLoop.call(ig.system);
            ig.game.tweens.onSystemResume();
            console.log("Game Resumed")
        },
        showOverlay: function(b) {
            for (i = 0; i < b.length; i++) $("#" + b[i]) && $("#" + b[i]).show(), document.getElementById(b[i]) && (document.getElementById(b[i]).style.visibility = "visible")
        },
        hideOverlay: function(b) {
            for (i = 0; i < b.length; i++) $("#" + b[i]) && $("#" + b[i]).hide(), document.getElementById(b[i]) && (document.getElementById(b[i]).style.visibility = "hidden")
        },
        currentBGMVolume: 1,
        addition: 0.1,
        update: function() {
            this.paused ? (this.updateWhilePaused(), this.checkWhilePaused()) : (this.parent(), this.tweens.update(this.tweens.now()), ig.ua.mobile && ig.soundHandler && ig.soundHandler.forceLoopBGM())
        },
        updateWhilePaused: function() {
            for (var b = 0; b < this.entities.length; b++) this.entities[b].ignorePause && this.entities[b].update()
        },
        checkWhilePaused: function() {
            for (var b = {}, c = 0; c < this.entities.length; c++) {
                var d = this.entities[c];
                if (d.ignorePause && !(d.type == ig.Entity.TYPE.NONE && d.checkAgainst == ig.Entity.TYPE.NONE &&
                        d.collides == ig.Entity.COLLIDES.NEVER))
                    for (var e = {}, f = Math.floor(d.pos.y / this.cellSize), j = Math.floor((d.pos.x + d.size.x) / this.cellSize) + 1, n = Math.floor((d.pos.y + d.size.y) / this.cellSize) + 1, l = Math.floor(d.pos.x / this.cellSize); l < j; l++)
                        for (var g = f; g < n; g++)
                            if (b[l])
                                if (b[l][g]) {
                                    for (var r = b[l][g], y = 0; y < r.length; y++) d.touches(r[y]) && !e[r[y].id] && (e[r[y].id] = !0, ig.Entity.checkPair(d, r[y]));
                                    r.push(d)
                                } else b[l][g] = [d];
                else b[l] = {}, b[l][g] = [d]
            }
        },
        draw: function() {
            this.parent();
            ig.game.sortEntitiesDeferred();
            this.dctf()
        },
        dctf: function() {
            this.COPYRIGHT
        },
        clearCanvas: function(b, c, d) {
            var e = b.canvas;
            b.clearRect(0, 0, c, d);
            e.style.display = "none";
            e.offsetHeight;
            e.style.display = "inherit"
        },
        drawDebug: function() {
            if (!ig.global.wm && (this.debugEnable(), this.viewDebug && (ig.system.context.fillStyle = "#000000", ig.system.context.globalAlpha = 0.35, ig.system.context.fillRect(0, 0, ig.system.width / 4, ig.system.height), ig.system.context.globalAlpha = 1, this.debug && 0 < this.debug.length)))
                for (i = 0; i < this.debug.length; i++) ig.system.context.font = "10px Arial",
                    ig.system.context.fillStyle = "#ffffff", ig.system.context.fillText(this.debugLine - this.debug.length + i + ": " + this.debug[i], 10, 50 + 10 * i)
        },
        debugCL: function(b) {
            this.debug ? (50 > this.debug.length || this.debug.splice(0, 1), this.debug.push(b), this.debugLine++) : (this.debug = [], this.debugLine = 1, this.debug.push(b));
            console.log(b)
        },
        debugEnable: function() {
            ig.input.pressed("click") && (this.debugEnableTimer = new ig.Timer(2));
            this.debugEnableTimer && 0 > this.debugEnableTimer.delta() ? ig.input.released("click") && (this.debugEnableTimer =
                null) : this.debugEnableTimer && 0 < this.debugEnableTimer.delta() && (this.debugEnableTimer = null, this.viewDebug = this.viewDebug ? !1 : !0)
        }
    });
    ig.domHandler = null;
    ig.domHandler = new ig.DomHandler;
    ig.domHandler.forcedDeviceDetection();
    ig.domHandler.forcedDeviceRotation();
    ig.apiHandler = new ig.ApiHandler;
    ig.sizeHandler = new ig.SizeHandler(ig.domHandler);
    ig.ua.mobile ? (ig.Sound.enabled = !1, ig.main("#canvas", MyGame, 60, ig.sizeHandler.mobile.actualResolution.x, ig.sizeHandler.mobile.actualResolution.y, ig.sizeHandler.scale,
        ig.SplashLoader), ig.sizeHandler.resize()) : ig.main("#canvas", MyGame, 60, ig.sizeHandler.desktop.actualResolution.x, ig.sizeHandler.desktop.actualResolution.y, ig.sizeHandler.scale, ig.SplashLoader);
    ig.soundHandler = null;
    ig.soundHandler = new ig.SoundHandler;
    ig.sizeHandler.reorient();
    this.DOMAINLOCK_BREAKOUT_ATTEMPT;
    this.END_OBFUSCATION
});