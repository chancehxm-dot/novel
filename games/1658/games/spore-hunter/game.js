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
        Loading: "Loading ...",
        LogoLine1: "Some text here",
        LogoLine2: "powered by MarketJS",
        LogoLine3: "none",
        TapToStart: "TAP TO START"
    },
    Game: {
        SelectPlayer: "Select Player",
        Win: "You win!",
        Lose: "You lose!",
        Score: "Score",
        Highscore: "High Score",
        Time: "Time",
        TapToFix: "Tap to Fix"
    },
    Results: {
        Title: "High score"
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
        c = c || A;
        var d = c.createElement("script");
        d.text = b;
        c.head.appendChild(d).parentNode.removeChild(d)
    }

    function e(b) {
        var c = !!b && "length" in b && b.length,
            d = l.type(b);
        return "function" !== d && !l.isWindow(b) && ("array" === d || 0 === c || "number" ==
            typeof c && 0 < c && c - 1 in b)
    }

    function f(b, c) {
        return b.nodeName && b.nodeName.toLowerCase() === c.toLowerCase()
    }

    function j(b, c, d) {
        return l.isFunction(c) ? l.grep(b, function(b, x) {
            return !!c.call(b, x, b) !== d
        }) : c.nodeType ? l.grep(b, function(b) {
            return b === c !== d
        }) : "string" != typeof c ? l.grep(b, function(b) {
            return -1 < La.call(c, b) !== d
        }) : Dc.test(c) ? l.filter(c, b, d) : (c = l.filter(c, b), l.grep(b, function(b) {
            return -1 < La.call(c, b) !== d && 1 === b.nodeType
        }))
    }

    function n(b, c) {
        for (;
            (b = b[c]) && 1 !== b.nodeType;);
        return b
    }

    function r(b) {
        return b
    }

    function g(b) {
        throw b;
    }

    function p(b, c, d, g) {
        var e;
        try {
            b && l.isFunction(e = b.promise) ? e.call(b).done(c).fail(d) : b && l.isFunction(e = b.then) ? e.call(b, c, d) : c.apply(void 0, [b].slice(g))
        } catch (f) {
            d.apply(void 0, [f])
        }
    }

    function m() {
        A.removeEventListener("DOMContentLoaded", m);
        b.removeEventListener("load", m);
        l.ready()
    }

    function q() {
        this.expando = l.expando + q.uid++
    }

    function s(b, c, d) {
        var g;
        if (void 0 === d && 1 === b.nodeType)
            if (g = "data-" + c.replace(Ec, "-$&").toLowerCase(), d = b.getAttribute(g), "string" == typeof d) {
                try {
                    d = "true" ===
                        d || "false" !== d && ("null" === d ? null : d === +d + "" ? +d : Fc.test(d) ? JSON.parse(d) : d)
                } catch (e) {}
                X.set(b, c, d)
            } else d = void 0;
        return d
    }

    function t(b, c, d, g) {
        var e, f = 1,
            m = 20,
            p = g ? function() {
                return g.cur()
            } : function() {
                return l.css(b, c, "")
            },
            j = p(),
            q = d && d[3] || (l.cssNumber[c] ? "" : "px"),
            s = (l.cssNumber[c] || "px" !== q && +j) && Ma.exec(l.css(b, c));
        if (s && s[3] !== q) {
            q = q || s[3];
            d = d || [];
            s = +j || 1;
            do f = f || ".5", s /= f, l.style(b, c, s + q); while (f !== (f = p() / j) && 1 !== f && --m)
        }
        return d && (s = +s || +j || 0, e = d[1] ? s + (d[1] + 1) * d[2] : +d[2], g && (g.unit = q, g.start = s, g.end =
            e)), e
    }

    function u(b, c) {
        for (var d, g, e = [], f = 0, m = b.length; f < m; f++)
            if (g = b[f], g.style)
                if (d = g.style.display, c) {
                    if ("none" === d && (e[f] = E.get(g, "display") || null, e[f] || (g.style.display = "")), "" === g.style.display && Va(g)) {
                        d = e;
                        var p = f,
                            j, q = void 0;
                        j = g.ownerDocument;
                        var s = g.nodeName;
                        j = (g = Ib[s]) ? g : (q = j.body.appendChild(j.createElement(s)), g = l.css(q, "display"), q.parentNode.removeChild(q), "none" === g && (g = "block"), Ib[s] = g, g);
                        d[p] = j
                    }
                } else "none" !== d && (e[f] = "none", E.set(g, "display", d));
        for (f = 0; f < m; f++) null != e[f] && (b[f].style.display =
            e[f]);
        return b
    }

    function y(b, c) {
        var d;
        return d = "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(c || "*") : "undefined" != typeof b.querySelectorAll ? b.querySelectorAll(c || "*") : [], void 0 === c || c && f(b, c) ? l.merge([b], d) : d
    }

    function C(b, c) {
        for (var d = 0, g = b.length; d < g; d++) E.set(b[d], "globalEval", !c || E.get(c[d], "globalEval"))
    }

    function F(b, c, d, g, e) {
        for (var f, m, p, j, q = c.createDocumentFragment(), s = [], r = 0, n = b.length; r < n; r++)
            if (f = b[r], f || 0 === f)
                if ("object" === l.type(f)) l.merge(s, f.nodeType ? [f] : f);
                else if (Gc.test(f)) {
            m =
                m || q.appendChild(c.createElement("div"));
            p = (Jb.exec(f) || ["", ""])[1].toLowerCase();
            p = Z[p] || Z._default;
            m.innerHTML = p[1] + l.htmlPrefilter(f) + p[2];
            for (p = p[0]; p--;) m = m.lastChild;
            l.merge(s, m.childNodes);
            m = q.firstChild;
            m.textContent = ""
        } else s.push(c.createTextNode(f));
        q.textContent = "";
        for (r = 0; f = s[r++];)
            if (g && -1 < l.inArray(f, g)) e && e.push(f);
            else if (j = l.contains(f.ownerDocument, f), m = y(q.appendChild(f), "script"), j && C(m), d)
            for (p = 0; f = m[p++];) Kb.test(f.type || "") && d.push(f);
        return q
    }

    function Q() {
        return !0
    }

    function B() {
        return !1
    }

    function Na() {
        try {
            return A.activeElement
        } catch (b) {}
    }

    function Fa(b, c, d, g, e, f) {
        var m, p;
        if ("object" == typeof c) {
            "string" != typeof d && (g = g || d, d = void 0);
            for (p in c) Fa(b, p, d, g, c[p], f);
            return b
        }
        if (null == g && null == e ? (e = d, g = d = void 0) : null == e && ("string" == typeof d ? (e = g, g = void 0) : (e = g, g = d, d = void 0)), !1 === e) e = B;
        else if (!e) return b;
        return 1 === f && (m = e, e = function(b) {
            return l().off(b), m.apply(this, arguments)
        }, e.guid = m.guid || (m.guid = l.guid++)), b.each(function() {
            l.event.add(this, c, e, g, d)
        })
    }

    function M(b, c) {
        return f(b, "table") &&
            f(11 !== c.nodeType ? c : c.firstChild, "tr") ? l(">tbody", b)[0] || b : b
    }

    function Hc(b) {
        return b.type = (null !== b.getAttribute("type")) + "/" + b.type, b
    }

    function la(b) {
        var c = Ic.exec(b.type);
        return c ? b.type = c[1] : b.removeAttribute("type"), b
    }

    function Lb(b, c) {
        var d, g, e, f, m, p;
        if (1 === c.nodeType) {
            if (E.hasData(b) && (d = E.access(b), g = E.set(c, d), p = d.events))
                for (e in delete g.handle, g.events = {}, p) {
                    d = 0;
                    for (g = p[e].length; d < g; d++) l.event.add(c, e, p[e][d])
                }
            X.hasData(b) && (f = X.access(b), m = l.extend({}, f), X.set(c, m))
        }
    }

    function V(b, c, g,
        ob) {
        c = Mb.apply([], c);
        var e, f, m, p, j = 0,
            q = b.length,
            s = q - 1,
            r = c[0],
            n = l.isFunction(r);
        if (n || 1 < q && "string" == typeof r && !L.checkClone && Jc.test(r)) return b.each(function(d) {
            var e = b.eq(d);
            n && (c[0] = r.call(this, d, e.html()));
            V(e, c, g, ob)
        });
        if (q && (e = F(c, b[0].ownerDocument, !1, b, ob), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || ob)) {
            f = l.map(y(e, "script"), Hc);
            for (m = f.length; j < q; j++) p = e, j !== s && (p = l.clone(p, !0, !0), m && l.merge(f, y(p, "script"))), g.call(b[j], p, j);
            if (m) {
                e = f[f.length - 1].ownerDocument;
                l.map(f, la);
                for (j = 0; j <
                    m; j++) p = f[j], Kb.test(p.type || "") && !E.access(p, "globalEval") && l.contains(e, p) && (p.src ? l._evalUrl && l._evalUrl(p.src) : d(p.textContent.replace(Lc, ""), e))
            }
        }
        return b
    }

    function U(b, c, d) {
        for (var g = c ? l.filter(c, b) : b, e = 0; null != (c = g[e]); e++) d || 1 !== c.nodeType || l.cleanData(y(c)), c.parentNode && (d && l.contains(c.ownerDocument, c) && C(y(c, "script")), c.parentNode.removeChild(c));
        return b
    }

    function Oa(b, c, d) {
        var g, e, f, m, p = b.style;
        return d = d || Wa(b), d && (m = d.getPropertyValue(c) || d[c], "" !== m || l.contains(b.ownerDocument, b) ||
            (m = l.style(b, c)), !L.pixelMarginRight() && pb.test(m) && Nb.test(c) && (g = p.width, e = p.minWidth, f = p.maxWidth, p.minWidth = p.maxWidth = p.width = m, m = d.width, p.width = g, p.minWidth = e, p.maxWidth = f)), void 0 !== m ? m + "" : m
    }

    function Ob(b, c) {
        return {
            get: function() {
                return b() ? void delete this.get : (this.get = c).apply(this, arguments)
            }
        }
    }

    function R(b) {
        var c = l.cssProps[b];
        if (!c) {
            var c = l.cssProps,
                d;
            a: if (d = b, !(d in Pb)) {
                for (var g = d[0].toUpperCase() + d.slice(1), e = Qb.length; e--;)
                    if (d = Qb[e] + g, d in Pb) break a;
                d = void 0
            }
            c = c[b] = d || b
        }
        return c
    }

    function S(b, c, d) {
        return (b = Ma.exec(c)) ? Math.max(0, b[2] - (d || 0)) + (b[3] || "px") : c
    }

    function T(b, c, d, g, e) {
        var f = 0;
        for (c = d === (g ? "border" : "content") ? 4 : "width" === c ? 1 : 0; 4 > c; c += 2) "margin" === d && (f += l.css(b, d + ta[c], !0, e)), g ? ("content" === d && (f -= l.css(b, "padding" + ta[c], !0, e)), "margin" !== d && (f -= l.css(b, "border" + ta[c] + "Width", !0, e))) : (f += l.css(b, "padding" + ta[c], !0, e), "padding" !== d && (f += l.css(b, "border" + ta[c] + "Width", !0, e)));
        return f
    }

    function aa(b, c, d) {
        var g, e = Wa(b),
            f = Oa(b, c, e),
            m = "border-box" === l.css(b, "boxSizing", !1, e);
        return pb.test(f) ? f : (g = m && (L.boxSizingReliable() || f === b.style[c]), "auto" === f && (f = b["offset" + c[0].toUpperCase() + c.slice(1)]), f = parseFloat(f) || 0, f + T(b, c, d || (m ? "border" : "content"), g, e) + "px")
    }

    function O(b, c, d, g, e) {
        return new O.prototype.init(b, c, d, g, e)
    }

    function Y() {
        Xa && (!1 === A.hidden && b.requestAnimationFrame ? b.requestAnimationFrame(Y) : b.setTimeout(Y, l.fx.interval), l.fx.tick())
    }

    function J() {
        return b.setTimeout(function() {
            Ga = void 0
        }), Ga = l.now()
    }

    function ua(b, c) {
        var d, g = 0,
            e = {
                height: b
            };
        for (c = c ? 1 : 0; 4 >
            g; g += 2 - c) d = ta[g], e["margin" + d] = e["padding" + d] = b;
        return c && (e.opacity = e.width = b), e
    }

    function Rb(b, c, d) {
        for (var g, e = (fa.tweeners[c] || []).concat(fa.tweeners["*"]), f = 0, l = e.length; f < l; f++)
            if (g = e[f].call(d, c, b)) return g
    }

    function fa(b, c, d) {
        var g, e, f = 0,
            m = fa.prefilters.length,
            p = l.Deferred().always(function() {
                delete j.elem
            }),
            j = function() {
                if (e) return !1;
                for (var c = Ga || J(), c = Math.max(0, q.startTime + q.duration - c), d = 1 - (c / q.duration || 0), z = 0, g = q.tweens.length; z < g; z++) q.tweens[z].run(d);
                return p.notifyWith(b, [q, d, c]),
                    1 > d && g ? c : (g || p.notifyWith(b, [q, 1, 0]), p.resolveWith(b, [q]), !1)
            },
            q = p.promise({
                elem: b,
                props: l.extend({}, c),
                opts: l.extend(!0, {
                    specialEasing: {},
                    easing: l.easing._default
                }, d),
                originalProperties: c,
                originalOptions: d,
                startTime: Ga || J(),
                duration: d.duration,
                tweens: [],
                createTween: function(c, d) {
                    var z = l.Tween(b, q.opts, c, d, q.opts.specialEasing[c] || q.opts.easing);
                    return q.tweens.push(z), z
                },
                stop: function(c) {
                    var d = 0,
                        z = c ? q.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d < z; d++) q.tweens[d].run(1);
                    return c ? (p.notifyWith(b, [q,
                        1, 0
                    ]), p.resolveWith(b, [q, c])) : p.rejectWith(b, [q, c]), this
                }
            });
        c = q.props;
        d = q.opts.specialEasing;
        var s, r, n, t;
        for (g in c)
            if (s = l.camelCase(g), r = d[s], n = c[g], Array.isArray(n) && (r = n[1], n = c[g] = n[0]), g !== s && (c[s] = n, delete c[g]), t = l.cssHooks[s], t && "expand" in t)
                for (g in n = t.expand(n), delete c[s], n) g in c || (c[g] = n[g], d[g] = r);
            else d[s] = r;
        for (; f < m; f++)
            if (g = fa.prefilters[f].call(q, b, c, q.opts)) return l.isFunction(g.stop) && (l._queueHooks(q.elem, q.opts.queue).stop = l.proxy(g.stop, g)), g;
        return l.map(c, Rb, q), l.isFunction(q.opts.start) &&
            q.opts.start.call(b, q), q.progress(q.opts.progress).done(q.opts.done, q.opts.complete).fail(q.opts.fail).always(q.opts.always), l.fx.timer(l.extend(j, {
                elem: b,
                anim: q,
                queue: q.opts.queue
            })), q
    }

    function va(b) {
        return (b.match(ba) || []).join(" ")
    }

    function wa(b) {
        return b.getAttribute && b.getAttribute("class") || ""
    }

    function qb(b, c, d, g) {
        var e;
        if (Array.isArray(c)) l.each(c, function(c, z) {
            d || Mc.test(b) ? g(b, z) : qb(b + "[" + ("object" == typeof z && null != z ? c : "") + "]", z, d, g)
        });
        else if (d || "object" !== l.type(c)) g(b, c);
        else
            for (e in c) qb(b +
                "[" + e + "]", c[e], d, g)
    }

    function Sb(b) {
        return function(c, d) {
            "string" != typeof c && (d = c, c = "*");
            var g, e = 0,
                f = c.toLowerCase().match(ba) || [];
            if (l.isFunction(d))
                for (; g = f[e++];) "+" === g[0] ? (g = g.slice(1) || "*", (b[g] = b[g] || []).unshift(d)) : (b[g] = b[g] || []).push(d)
        }
    }

    function Tb(b, c, d, g) {
        function e(p) {
            var j;
            return f[p] = !0, l.each(b[p] || [], function(b, x) {
                var l = x(c, d, g);
                return "string" != typeof l || m || f[l] ? m ? !(j = l) : void 0 : (c.dataTypes.unshift(l), e(l), !1)
            }), j
        }
        var f = {},
            m = b === rb;
        return e(c.dataTypes[0]) || !f["*"] && e("*")
    }

    function sb(b,
        c) {
        var d, g, e = l.ajaxSettings.flatOptions || {};
        for (d in c) void 0 !== c[d] && ((e[d] ? b : g || (g = {}))[d] = c[d]);
        return g && l.extend(!0, b, g), b
    }
    var xa = [],
        A = b.document,
        Nc = Object.getPrototypeOf,
        ya = xa.slice,
        Mb = xa.concat,
        tb = xa.push,
        La = xa.indexOf,
        Ya = {},
        Ub = Ya.toString,
        Za = Ya.hasOwnProperty,
        Vb = Za.toString,
        Oc = Vb.call(Object),
        L = {},
        l = function(b, c) {
            return new l.fn.init(b, c)
        },
        Pc = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        Qc = /^-ms-/,
        Rc = /-([a-z])/g,
        Sc = function(b, c) {
            return c.toUpperCase()
        };
    l.fn = l.prototype = {
        jquery: "3.2.1",
        constructor: l,
        length: 0,
        toArray: function() {
            return ya.call(this)
        },
        get: function(b) {
            return null == b ? ya.call(this) : 0 > b ? this[b + this.length] : this[b]
        },
        pushStack: function(b) {
            b = l.merge(this.constructor(), b);
            return b.prevObject = this, b
        },
        each: function(b) {
            return l.each(this, b)
        },
        map: function(b) {
            return this.pushStack(l.map(this, function(c, d) {
                return b.call(c, d, c)
            }))
        },
        slice: function() {
            return this.pushStack(ya.apply(this, arguments))
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
        push: tb,
        sort: xa.sort,
        splice: xa.splice
    };
    l.extend = l.fn.extend = function() {
        var b, c, d, g, e, f, m = arguments[0] || {},
            p = 1,
            j = arguments.length,
            q = !1;
        "boolean" == typeof m && (q = m, m = arguments[p] || {}, p++);
        "object" == typeof m || l.isFunction(m) || (m = {});
        for (p === j && (m = this, p--); p < j; p++)
            if (null != (b = arguments[p]))
                for (c in b) d = m[c], g = b[c], m !== g && (q && g && (l.isPlainObject(g) || (e = Array.isArray(g))) ? (e ? (e = !1, f = d &&
                    Array.isArray(d) ? d : []) : f = d && l.isPlainObject(d) ? d : {}, m[c] = l.extend(q, f, g)) : void 0 !== g && (m[c] = g));
        return m
    };
    l.extend({
        expando: "jQuery" + ("3.2.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(b) {
            throw Error(b);
        },
        noop: function() {},
        isFunction: function(b) {
            return "function" === l.type(b)
        },
        isWindow: function(b) {
            return null != b && b === b.window
        },
        isNumeric: function(b) {
            var c = l.type(b);
            return ("number" === c || "string" === c) && !isNaN(b - parseFloat(b))
        },
        isPlainObject: function(b) {
            var c, d;
            return !(!b || "[object Object]" !==
                Ub.call(b)) && (!(c = Nc(b)) || (d = Za.call(c, "constructor") && c.constructor, "function" == typeof d && Vb.call(d) === Oc))
        },
        isEmptyObject: function(b) {
            for (var c in b) return !1;
            return !0
        },
        type: function(b) {
            return null == b ? b + "" : "object" == typeof b || "function" == typeof b ? Ya[Ub.call(b)] || "object" : typeof b
        },
        globalEval: function(b) {
            d(b)
        },
        camelCase: function(b) {
            return b.replace(Qc, "ms-").replace(Rc, Sc)
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
            return null == b ? "" : (b + "").replace(Pc, "")
        },
        makeArray: function(b, c) {
            var d = c || [];
            return null != b && (e(Object(b)) ? l.merge(d, "string" == typeof b ? [b] : b) : tb.call(d, b)), d
        },
        inArray: function(b, c, d) {
            return null == c ? -1 : La.call(c, b, d)
        },
        merge: function(b, c) {
            for (var d = +c.length, g = 0, e = b.length; g < d; g++) b[e++] = c[g];
            return b.length = e, b
        },
        grep: function(b, c, d) {
            for (var g = [], e = 0, f = b.length, l = !d; e < f; e++) d = !c(b[e], e), d !== l && g.push(b[e]);
            return g
        },
        map: function(b, c, d) {
            var g, f, l = 0,
                m = [];
            if (e(b))
                for (g =
                    b.length; l < g; l++) f = c(b[l], l, d), null != f && m.push(f);
            else
                for (l in b) f = c(b[l], l, d), null != f && m.push(f);
            return Mb.apply([], m)
        },
        guid: 1,
        proxy: function(b, c) {
            var d, g, e;
            if ("string" == typeof c && (d = b[c], c = b, b = d), l.isFunction(b)) return g = ya.call(arguments, 2), e = function() {
                return b.apply(c || this, g.concat(ya.call(arguments)))
            }, e.guid = b.guid = b.guid || l.guid++, e
        },
        now: Date.now,
        support: L
    });
    "function" == typeof Symbol && (l.fn[Symbol.iterator] = xa[Symbol.iterator]);
    l.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
        function(b, c) {
            Ya["[object " + c + "]"] = c.toLowerCase()
        });
    var pa, ub = b,
        G = function(b, c, d, g) {
            var e, f, l, m, p, j = c && c.ownerDocument,
                q = c ? c.nodeType : 9;
            if (d = d || [], "string" != typeof b || !b || 1 !== q && 9 !== q && 11 !== q) return d;
            if (!g && ((c ? c.ownerDocument || c : ca) !== H && qa(c), c = c || H, da)) {
                if (11 !== q && (m = Tc.exec(b)))
                    if (e = m[1])
                        if (9 === q) {
                            if (!(f = c.getElementById(e))) return d;
                            if (f.id === e) return d.push(f), d
                        } else {
                            if (j && (f = j.getElementById(e)) && Pa(c, f) && f.id === e) return d.push(f), d
                        }
                else {
                    if (m[2]) return ra.apply(d, c.getElementsByTagName(b)),
                        d;
                    if ((e = m[3]) && P.getElementsByClassName && c.getElementsByClassName) return ra.apply(d, c.getElementsByClassName(e)), d
                }
                if (P.qsa && !$a[b + " "] && (!W || !W.test(b))) {
                    if (1 !== q) j = c, p = b;
                    else if ("object" !== c.nodeName.toLowerCase()) {
                        (l = c.getAttribute("id")) ? l = l.replace(Wb, Xb): c.setAttribute("id", l = N);
                        f = Qa(b);
                        for (e = f.length; e--;) f[e] = "#" + l + " " + ab(f[e]);
                        p = f.join(",");
                        j = vb.test(b) && wb(c.parentNode) || c
                    }
                    if (p) try {
                        return ra.apply(d, j.querySelectorAll(p)), d
                    } catch (s) {} finally {
                        l === N && c.removeAttribute("id")
                    }
                }
            }
            return Yb(b.replace(bb,
                "$1"), c, d, g)
        },
        xb = function() {
            function b(d, g) {
                return c.push(d + " ") > D.cacheLength && delete b[c.shift()], b[d + " "] = g
            }
            var c = [];
            return b
        },
        ha = function(b) {
            return b[N] = !0, b
        },
        ja = function(b) {
            var c = H.createElement("fieldset");
            try {
                return !!b(c)
            } catch (d) {
                return !1
            } finally {
                c.parentNode && c.parentNode.removeChild(c)
            }
        },
        yb = function(b, c) {
            for (var d = b.split("|"), g = d.length; g--;) D.attrHandle[d[g]] = c
        },
        Zb = function(b, c) {
            var d = c && b,
                g = d && 1 === b.nodeType && 1 === c.nodeType && b.sourceIndex - c.sourceIndex;
            if (g) return g;
            if (d)
                for (; d = d.nextSibling;)
                    if (d ===
                        c) return -1;
            return b ? 1 : -1
        },
        Uc = function(b) {
            return function(c) {
                return "input" === c.nodeName.toLowerCase() && c.type === b
            }
        },
        Vc = function(b) {
            return function(c) {
                var d = c.nodeName.toLowerCase();
                return ("input" === d || "button" === d) && c.type === b
            }
        },
        $b = function(b) {
            return function(c) {
                return "form" in c ? c.parentNode && !1 === c.disabled ? "label" in c ? "label" in c.parentNode ? c.parentNode.disabled === b : c.disabled === b : c.isDisabled === b || c.isDisabled !== !b && Wc(c) === b : c.disabled === b : "label" in c && c.disabled === b
            }
        },
        za = function(b) {
            return ha(function(c) {
                return c = +c, ha(function(d, g) {
                    for (var e, f = b([], d.length, c), l = f.length; l--;) d[e = f[l]] && (d[e] = !(g[e] = d[e]))
                })
            })
        },
        wb = function(b) {
            return b && "undefined" != typeof b.getElementsByTagName && b
        },
        ac = function() {},
        ab = function(b) {
            for (var c = 0, d = b.length, g = ""; c < d; c++) g += b[c].value;
            return g
        },
        cb = function(b, c, d) {
            var g = c.dir,
                e = c.next,
                f = e || g,
                l = d && "parentNode" === f,
                m = Xc++;
            return c.first ? function(c, d, z) {
                for (; c = c[g];)
                    if (1 === c.nodeType || l) return b(c, d, z);
                return !1
            } : function(c, d, z) {
                var I, p, j, q = [ka, m];
                if (z)
                    for (; c = c[g];) {
                        if ((1 === c.nodeType ||
                                l) && b(c, d, z)) return !0
                    } else
                        for (; c = c[g];)
                            if (1 === c.nodeType || l)
                                if (j = c[N] || (c[N] = {}), p = j[c.uniqueID] || (j[c.uniqueID] = {}), e && e === c.nodeName.toLowerCase()) c = c[g] || c;
                                else {
                                    if ((I = p[f]) && I[0] === ka && I[1] === m) return q[2] = I[2];
                                    if (p[f] = q, q[2] = b(c, d, z)) return !0
                                }
                return !1
            }
        },
        zb = function(b) {
            return 1 < b.length ? function(c, d, g) {
                for (var e = b.length; e--;)
                    if (!b[e](c, d, g)) return !1;
                return !0
            } : b[0]
        },
        db = function(b, c, d, g, e) {
            for (var f, l = [], m = 0, p = b.length, j = null != c; m < p; m++)(f = b[m]) && (d && !d(f, g, e) || (l.push(f), j && c.push(m)));
            return l
        },
        Ab = function(b, c, d, g, e, f) {
            return g && !g[N] && (g = Ab(g)), e && !e[N] && (e = Ab(e, f)), ha(function(f, l, m, p) {
                var j, q, s = [],
                    Da = [],
                    r = l.length,
                    n;
                if (!(n = f)) {
                    n = c || "*";
                    for (var t = m.nodeType ? [m] : m, u = [], y = 0, C = t.length; y < C; y++) G(n, t[y], u);
                    n = u
                }
                n = !b || !f && c ? n : db(n, s, b, m, p);
                t = d ? e || (f ? b : r || g) ? [] : l : n;
                if (d && d(n, t, m, p), g) {
                    j = db(t, Da);
                    g(j, [], m, p);
                    for (m = j.length; m--;)(q = j[m]) && (t[Da[m]] = !(n[Da[m]] = q))
                }
                if (f) {
                    if (e || b) {
                        if (e) {
                            j = [];
                            for (m = t.length; m--;)(q = t[m]) && j.push(n[m] = q);
                            e(null, t = [], j, p)
                        }
                        for (m = t.length; m--;)(q = t[m]) && -1 < (j = e ? Aa(f, q) :
                            s[m]) && (f[j] = !(l[j] = q))
                    }
                } else t = db(t === l ? t.splice(r, t.length) : t), e ? e(null, l, t, p) : ra.apply(l, t)
            })
        },
        Bb = function(b) {
            var c, d, g, e = b.length,
                f = D.relative[b[0].type];
            d = f || D.relative[" "];
            for (var l = f ? 1 : 0, m = cb(function(b) {
                    return b === c
                }, d, !0), p = cb(function(b) {
                    return -1 < Aa(c, b)
                }, d, !0), j = [function(b, d, x) {
                    b = !f && (x || d !== eb) || ((c = d).nodeType ? m(b, d, x) : p(b, d, x));
                    return c = null, b
                }]; l < e; l++)
                if (d = D.relative[b[l].type]) j = [cb(zb(j), d)];
                else {
                    if (d = D.filter[b[l].type].apply(null, b[l].matches), d[N]) {
                        for (g = ++l; g < e && !D.relative[b[g].type]; g++);
                        return Ab(1 < l && zb(j), 1 < l && ab(b.slice(0, l - 1).concat({
                            value: " " === b[l - 2].type ? "*" : ""
                        })).replace(bb, "$1"), d, l < g && Bb(b.slice(l, g)), g < e && Bb(b = b.slice(g)), g < e && ab(b))
                    }
                    j.push(d)
                }
            return zb(j)
        },
        Ha, P, D, fb, bc, Qa, Cb, Yb, eb, sa, Ia, qa, H, ea, da, W, Ba, gb, Pa, N = "sizzle" + 1 * new Date,
        ca = ub.document,
        ka = 0,
        Xc = 0,
        cc = xb(),
        dc = xb(),
        $a = xb(),
        Db = function(b, c) {
            return b === c && (Ia = !0), 0
        },
        Yc = {}.hasOwnProperty,
        Ca = [],
        Zc = Ca.pop,
        $c = Ca.push,
        ra = Ca.push,
        ec = Ca.slice,
        Aa = function(b, c) {
            for (var d = 0, g = b.length; d < g; d++)
                if (b[d] === c) return d;
            return -1
        },
        ad = /[\x20\t\r\n\f]+/g,
        bb = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
        bd = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
        cd = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
        dd = /=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g,
        ed = RegExp(":((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)"),
        fd = /^(?:\\.|[\w-]|[^\x00-\xa0])+$/,
        hb = {
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
        gd = /^(?:input|select|textarea|button)$/i,
        hd = /^h\d$/i,
        Ra = /^[^{]+\{\s*\[native \w/,
        Tc = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        vb = /[+~]/,
        ma = /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/ig,
        na = function(b, c, d) {
            b = "0x" + c - 65536;
            return b !== b || d ? c : 0 > b ? String.fromCharCode(b + 65536) : String.fromCharCode(b >> 10 | 55296, 1023 & b | 56320)
        },
        Wb = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        Xb = function(b, c) {
            return c ? "\x00" === b ? "\ufffd" : b.slice(0, -1) + "\\" + b.charCodeAt(b.length - 1).toString(16) + " " : "\\" + b
        },
        fc = function() {
            qa()
        },
        Wc = cb(function(b) {
            return !0 === b.disabled && ("form" in b || "label" in b)
        }, {
            dir: "parentNode",
            next: "legend"
        });
    try {
        ra.apply(Ca = ec.call(ca.childNodes), ca.childNodes), Ca[ca.childNodes.length].nodeType
    } catch (Kd) {
        ra = {
            apply: Ca.length ? function(b, c) {
                $c.apply(b, ec.call(c))
            } : function(b, c) {
                for (var d = b.length, g = 0; b[d++] = c[g++];);
                b.length = d - 1
            }
        }
    }
    P = G.support = {};
    bc = G.isXML = function(b) {
        b = b && (b.ownerDocument || b).documentElement;
        return !!b && "HTML" !== b.nodeName
    };
    qa = G.setDocument = function(b) {
        var c, d;
        b = b ? b.ownerDocument || b : ca;
        return b !== H && 9 === b.nodeType && b.documentElement ? (H = b, ea = H.documentElement, da = !bc(H), ca !== H && (d = H.defaultView) && d.top !== d && (d.addEventListener ? d.addEventListener("unload", fc, !1) : d.attachEvent && d.attachEvent("onunload", fc)), P.attributes = ja(function(b) {
                return b.className = "i", !b.getAttribute("className")
            }), P.getElementsByTagName = ja(function(b) {
                return b.appendChild(H.createComment("")), !b.getElementsByTagName("*").length
            }), P.getElementsByClassName = Ra.test(H.getElementsByClassName), P.getById = ja(function(b) {
                return ea.appendChild(b).id =
                    N, !H.getElementsByName || !H.getElementsByName(N).length
            }), P.getById ? (D.filter.ID = function(b) {
                var c = b.replace(ma, na);
                return function(b) {
                    return b.getAttribute("id") === c
                }
            }, D.find.ID = function(b, c) {
                if ("undefined" != typeof c.getElementById && da) {
                    var d = c.getElementById(b);
                    return d ? [d] : []
                }
            }) : (D.filter.ID = function(b) {
                var c = b.replace(ma, na);
                return function(b) {
                    return (b = "undefined" != typeof b.getAttributeNode && b.getAttributeNode("id")) && b.value === c
                }
            }, D.find.ID = function(b, c) {
                if ("undefined" != typeof c.getElementById &&
                    da) {
                    var d, x, g, e = c.getElementById(b);
                    if (e) {
                        if (d = e.getAttributeNode("id"), d && d.value === b) return [e];
                        g = c.getElementsByName(b);
                        for (x = 0; e = g[x++];)
                            if (d = e.getAttributeNode("id"), d && d.value === b) return [e]
                    }
                    return []
                }
            }), D.find.TAG = P.getElementsByTagName ? function(b, c) {
                return "undefined" != typeof c.getElementsByTagName ? c.getElementsByTagName(b) : P.qsa ? c.querySelectorAll(b) : void 0
            } : function(b, c) {
                var d, x = [],
                    g = 0,
                    e = c.getElementsByTagName(b);
                if ("*" === b) {
                    for (; d = e[g++];) 1 === d.nodeType && x.push(d);
                    return x
                }
                return e
            }, D.find.CLASS =
            P.getElementsByClassName && function(b, c) {
                if ("undefined" != typeof c.getElementsByClassName && da) return c.getElementsByClassName(b)
            }, Ba = [], W = [], (P.qsa = Ra.test(H.querySelectorAll)) && (ja(function(b) {
                ea.appendChild(b).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\r\\' msallowcapture=''><option selected=''></option></select>";
                b.querySelectorAll("[msallowcapture^='']").length && W.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
                b.querySelectorAll("[selected]").length || W.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
                b.querySelectorAll("[id~=" + N + "-]").length || W.push("~=");
                b.querySelectorAll(":checked").length || W.push(":checked");
                b.querySelectorAll("a#" + N + "+*").length || W.push(".#.+[+~]")
            }), ja(function(b) {
                b.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var c = H.createElement("input");
                c.setAttribute("type", "hidden");
                b.appendChild(c).setAttribute("name", "D");
                b.querySelectorAll("[name=d]").length && W.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?=");
                2 !== b.querySelectorAll(":enabled").length &&
                    W.push(":enabled", ":disabled");
                ea.appendChild(b).disabled = !0;
                2 !== b.querySelectorAll(":disabled").length && W.push(":enabled", ":disabled");
                b.querySelectorAll("*,:x");
                W.push(",.*:")
            })), (P.matchesSelector = Ra.test(gb = ea.matches || ea.webkitMatchesSelector || ea.mozMatchesSelector || ea.oMatchesSelector || ea.msMatchesSelector)) && ja(function(b) {
                P.disconnectedMatch = gb.call(b, "*");
                gb.call(b, "[s!='']:x");
                Ba.push("!=", ":((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)")
            }),
            W = W.length && RegExp(W.join("|")), Ba = Ba.length && RegExp(Ba.join("|")), c = Ra.test(ea.compareDocumentPosition), Pa = c || Ra.test(ea.contains) ? function(b, c) {
                var d = 9 === b.nodeType ? b.documentElement : b,
                    x = c && c.parentNode;
                return b === x || !(!x || 1 !== x.nodeType || !(d.contains ? d.contains(x) : b.compareDocumentPosition && 16 & b.compareDocumentPosition(x)))
            } : function(b, c) {
                if (c)
                    for (; c = c.parentNode;)
                        if (c === b) return !0;
                return !1
            }, Db = c ? function(b, c) {
                if (b === c) return Ia = !0, 0;
                var d = !b.compareDocumentPosition - !c.compareDocumentPosition;
                return d ? d : (d = (b.ownerDocument || b) === (c.ownerDocument || c) ? b.compareDocumentPosition(c) : 1, 1 & d || !P.sortDetached && c.compareDocumentPosition(b) === d ? b === H || b.ownerDocument === ca && Pa(ca, b) ? -1 : c === H || c.ownerDocument === ca && Pa(ca, c) ? 1 : sa ? Aa(sa, b) - Aa(sa, c) : 0 : 4 & d ? -1 : 1)
            } : function(b, c) {
                if (b === c) return Ia = !0, 0;
                var d, x = 0;
                d = b.parentNode;
                var g = c.parentNode,
                    e = [b],
                    z = [c];
                if (!d || !g) return b === H ? -1 : c === H ? 1 : d ? -1 : g ? 1 : sa ? Aa(sa, b) - Aa(sa, c) : 0;
                if (d === g) return Zb(b, c);
                for (d = b; d = d.parentNode;) e.unshift(d);
                for (d = c; d = d.parentNode;) z.unshift(d);
                for (; e[x] === z[x];) x++;
                return x ? Zb(e[x], z[x]) : e[x] === ca ? -1 : z[x] === ca ? 1 : 0
            }, H) : H
    };
    G.matches = function(b, c) {
        return G(b, null, null, c)
    };
    G.matchesSelector = function(b, c) {
        if ((b.ownerDocument || b) !== H && qa(b), c = c.replace(dd, "='$1']"), P.matchesSelector && da && !$a[c + " "] && (!Ba || !Ba.test(c)) && (!W || !W.test(c))) try {
            var d = gb.call(b, c);
            if (d || P.disconnectedMatch || b.document && 11 !== b.document.nodeType) return d
        } catch (g) {}
        return 0 < G(c, H, null, [b]).length
    };
    G.contains = function(b, c) {
        return (b.ownerDocument || b) !== H && qa(b), Pa(b, c)
    };
    G.attr = function(b, c) {
        (b.ownerDocument || b) !== H && qa(b);
        var d = D.attrHandle[c.toLowerCase()],
            d = d && Yc.call(D.attrHandle, c.toLowerCase()) ? d(b, c, !da) : void 0;
        return void 0 !== d ? d : P.attributes || !da ? b.getAttribute(c) : (d = b.getAttributeNode(c)) && d.specified ? d.value : null
    };
    G.escape = function(b) {
        return (b + "").replace(Wb, Xb)
    };
    G.error = function(b) {
        throw Error("Syntax error, unrecognized expression: " + b);
    };
    G.uniqueSort = function(b) {
        var c, d = [],
            g = 0,
            e = 0;
        if (Ia = !P.detectDuplicates, sa = !P.sortStable && b.slice(0), b.sort(Db), Ia) {
            for (; c =
                b[e++];) c === b[e] && (g = d.push(e));
            for (; g--;) b.splice(d[g], 1)
        }
        return sa = null, b
    };
    fb = G.getText = function(b) {
        var c, d = "",
            g = 0;
        if (c = b.nodeType)
            if (1 === c || 9 === c || 11 === c) {
                if ("string" == typeof b.textContent) return b.textContent;
                for (b = b.firstChild; b; b = b.nextSibling) d += fb(b)
            } else {
                if (3 === c || 4 === c) return b.nodeValue
            }
        else
            for (; c = b[g++];) d += fb(c);
        return d
    };
    D = G.selectors = {
        cacheLength: 50,
        createPseudo: ha,
        match: hb,
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
                return b[1] = b[1].replace(ma, na), b[3] = (b[3] || b[4] || b[5] || "").replace(ma, na), "~=" === b[2] && (b[3] = " " + b[3] + " "), b.slice(0, 4)
            },
            CHILD: function(b) {
                return b[1] = b[1].toLowerCase(), "nth" === b[1].slice(0, 3) ? (b[3] || G.error(b[0]), b[4] = +(b[4] ? b[5] + (b[6] || 1) : 2 * ("even" === b[3] || "odd" === b[3])), b[5] = +(b[7] + b[8] || "odd" === b[3])) : b[3] && G.error(b[0]), b
            },
            PSEUDO: function(b) {
                var c, d = !b[6] && b[2];
                return hb.CHILD.test(b[0]) ? null : (b[3] ? b[2] = b[4] || b[5] || "" : d && ed.test(d) &&
                    (c = Qa(d, !0)) && (c = d.indexOf(")", d.length - c) - d.length) && (b[0] = b[0].slice(0, c), b[2] = d.slice(0, c)), b.slice(0, 3))
            }
        },
        filter: {
            TAG: function(b) {
                var c = b.replace(ma, na).toLowerCase();
                return "*" === b ? function() {
                    return !0
                } : function(b) {
                    return b.nodeName && b.nodeName.toLowerCase() === c
                }
            },
            CLASS: function(b) {
                var c = cc[b + " "];
                return c || (c = RegExp("(^|[\\x20\\t\\r\\n\\f])" + b + "([\\x20\\t\\r\\n\\f]|$)")) && cc(b, function(b) {
                    return c.test("string" == typeof b.className && b.className || "undefined" != typeof b.getAttribute && b.getAttribute("class") ||
                        "")
                })
            },
            ATTR: function(b, c, d) {
                return function(g) {
                    g = G.attr(g, b);
                    return null == g ? "!=" === c : !c || (g += "", "=" === c ? g === d : "!=" === c ? g !== d : "^=" === c ? d && 0 === g.indexOf(d) : "*=" === c ? d && -1 < g.indexOf(d) : "$=" === c ? d && g.slice(-d.length) === d : "~=" === c ? -1 < (" " + g.replace(ad, " ") + " ").indexOf(d) : "|=" === c && (g === d || g.slice(0, d.length + 1) === d + "-"))
                }
            },
            CHILD: function(b, c, d, g, e) {
                var f = "nth" !== b.slice(0, 3),
                    l = "last" !== b.slice(-4),
                    m = "of-type" === c;
                return 1 === g && 0 === e ? function(b) {
                    return !!b.parentNode
                } : function(c, d, z) {
                    var p, I, j, q, s, r;
                    d = f !==
                        l ? "nextSibling" : "previousSibling";
                    var n = c.parentNode,
                        t = m && c.nodeName.toLowerCase();
                    z = !z && !m;
                    var u = !1;
                    if (n) {
                        if (f) {
                            for (; d;) {
                                for (q = c; q = q[d];)
                                    if (m ? q.nodeName.toLowerCase() === t : 1 === q.nodeType) return !1;
                                r = d = "only" === b && !r && "nextSibling"
                            }
                            return !0
                        }
                        if (r = [l ? n.firstChild : n.lastChild], l && z) {
                            q = n;
                            j = q[N] || (q[N] = {});
                            I = j[q.uniqueID] || (j[q.uniqueID] = {});
                            p = I[b] || [];
                            u = (s = p[0] === ka && p[1]) && p[2];
                            for (q = s && n.childNodes[s]; q = ++s && q && q[d] || (u = s = 0) || r.pop();)
                                if (1 === q.nodeType && ++u && q === c) {
                                    I[b] = [ka, s, u];
                                    break
                                }
                        } else if (z && (q =
                                c, j = q[N] || (q[N] = {}), I = j[q.uniqueID] || (j[q.uniqueID] = {}), p = I[b] || [], s = p[0] === ka && p[1], u = s), !1 === u)
                            for (;
                                (q = ++s && q && q[d] || (u = s = 0) || r.pop()) && (!(m ? q.nodeName.toLowerCase() === t : 1 === q.nodeType) || !++u || !(z && (j = q[N] || (q[N] = {}), I = j[q.uniqueID] || (j[q.uniqueID] = {}), I[b] = [ka, u]), q === c)););
                        return u -= e, u === g || 0 === u % g && 0 <= u / g
                    }
                }
            },
            PSEUDO: function(b, c) {
                var d, g = D.pseudos[b] || D.setFilters[b.toLowerCase()] || G.error("unsupported pseudo: " + b);
                return g[N] ? g(c) : 1 < g.length ? (d = [b, b, "", c], D.setFilters.hasOwnProperty(b.toLowerCase()) ?
                    ha(function(b, d) {
                        for (var x, e = g(b, c), f = e.length; f--;) x = Aa(b, e[f]), b[x] = !(d[x] = e[f])
                    }) : function(b) {
                        return g(b, 0, d)
                    }) : g
            }
        },
        pseudos: {
            not: ha(function(b) {
                var c = [],
                    d = [],
                    g = Cb(b.replace(bb, "$1"));
                return g[N] ? ha(function(b, c, d, x) {
                    var e;
                    d = g(b, null, x, []);
                    for (x = b.length; x--;)(e = d[x]) && (b[x] = !(c[x] = e))
                }) : function(b, x, e) {
                    return c[0] = b, g(c, null, e, d), c[0] = null, !d.pop()
                }
            }),
            has: ha(function(b) {
                return function(c) {
                    return 0 < G(b, c).length
                }
            }),
            contains: ha(function(b) {
                return b = b.replace(ma, na),
                    function(c) {
                        return -1 < (c.textContent ||
                            c.innerText || fb(c)).indexOf(b)
                    }
            }),
            lang: ha(function(b) {
                return fd.test(b || "") || G.error("unsupported lang: " + b), b = b.replace(ma, na).toLowerCase(),
                    function(c) {
                        var d;
                        do
                            if (d = da ? c.lang : c.getAttribute("xml:lang") || c.getAttribute("lang")) return d = d.toLowerCase(), d === b || 0 === d.indexOf(b + "-"); while ((c = c.parentNode) && 1 === c.nodeType);
                        return !1
                    }
            }),
            target: function(b) {
                var c = ub.location && ub.location.hash;
                return c && c.slice(1) === b.id
            },
            root: function(b) {
                return b === ea
            },
            focus: function(b) {
                return b === H.activeElement && (!H.hasFocus ||
                    H.hasFocus()) && !(!b.type && !b.href && !~b.tabIndex)
            },
            enabled: $b(!1),
            disabled: $b(!0),
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
                return !D.pseudos.empty(b)
            },
            header: function(b) {
                return hd.test(b.nodeName)
            },
            input: function(b) {
                return gd.test(b.nodeName)
            },
            button: function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && "button" === b.type || "button" === c
            },
            text: function(b) {
                var c;
                return "input" === b.nodeName.toLowerCase() && "text" === b.type && (null == (c = b.getAttribute("type")) || "text" === c.toLowerCase())
            },
            first: za(function() {
                return [0]
            }),
            last: za(function(b, c) {
                return [c - 1]
            }),
            eq: za(function(b, c, d) {
                return [0 > d ? d + c : d]
            }),
            even: za(function(b, c) {
                for (var d = 0; d < c; d += 2) b.push(d);
                return b
            }),
            odd: za(function(b, c) {
                for (var d = 1; d < c; d += 2) b.push(d);
                return b
            }),
            lt: za(function(b, c,
                d) {
                for (c = 0 > d ? d + c : d; 0 <= --c;) b.push(c);
                return b
            }),
            gt: za(function(b, c, d) {
                for (d = 0 > d ? d + c : d; ++d < c;) b.push(d);
                return b
            })
        }
    };
    D.pseudos.nth = D.pseudos.eq;
    for (Ha in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) D.pseudos[Ha] = Uc(Ha);
    for (Ha in {
            submit: !0,
            reset: !0
        }) D.pseudos[Ha] = Vc(Ha);
    ac.prototype = D.filters = D.pseudos;
    D.setFilters = new ac;
    Qa = G.tokenize = function(b, c) {
        var d, g, e, f, l, m, p;
        if (l = dc[b + " "]) return c ? 0 : l.slice(0);
        l = b;
        m = [];
        for (p = D.preFilter; l;) {
            d && !(g = bd.exec(l)) || (g && (l = l.slice(g[0].length) || l), m.push(e = []));
            d = !1;
            (g = cd.exec(l)) && (d = g.shift(), e.push({
                value: d,
                type: g[0].replace(bb, " ")
            }), l = l.slice(d.length));
            for (f in D.filter) !(g = hb[f].exec(l)) || p[f] && !(g = p[f](g)) || (d = g.shift(), e.push({
                value: d,
                type: f,
                matches: g
            }), l = l.slice(d.length));
            if (!d) break
        }
        return c ? l.length : l ? G.error(b) : dc(b, m).slice(0)
    };
    pa = (Cb = G.compile = function(b, c) {
        var d, g = [],
            e = [],
            f = $a[b + " "];
        if (!f) {
            c || (c = Qa(b));
            for (d = c.length; d--;) f = Bb(c[d]), f[N] ? g.push(f) : e.push(f);
            d = $a;
            var l = 0 < g.length,
                m = 0 < e.length,
                f = function(b, c, d, x, f) {
                    var z, p, j, q = 0,
                        I = "0",
                        s = b && [],
                        r = [],
                        n = eb,
                        t = b || m && D.find.TAG("*", f),
                        Da = ka += null == n ? 1 : Math.random() || 0.1,
                        u = t.length;
                    for (f && (eb = c === H || c || f); I !== u && null != (z = t[I]); I++) {
                        if (m && z) {
                            p = 0;
                            for (c || z.ownerDocument === H || (qa(z), d = !da); j = e[p++];)
                                if (j(z, c || H, d)) {
                                    x.push(z);
                                    break
                                }
                            f && (ka = Da)
                        }
                        l && ((z = !j && z) && q--, b && s.push(z))
                    }
                    if (q += I, l && I !== q) {
                        for (p = 0; j = g[p++];) j(s, r, c, d);
                        if (b) {
                            if (0 < q)
                                for (; I--;) s[I] || r[I] || (r[I] = Zc.call(x));
                            r = db(r)
                        }
                        ra.apply(x, r);
                        f && !b && 0 < r.length && 1 < q + g.length && G.uniqueSort(x)
                    }
                    return f && (ka = Da, eb = n), s
                },
                f = l ? ha(f) : f,
                f = d(b, f);
            f.selector = b
        }
        return f
    }, Yb = G.select = function(b, c, d, g) {
        var e, f, l, m, p, j = "function" == typeof b && b,
            q = !g && Qa(b = j.selector || b);
        if (d = d || [], 1 === q.length) {
            if (f = q[0] = q[0].slice(0), 2 < f.length && "ID" === (l = f[0]).type && 9 === c.nodeType && da && D.relative[f[1].type]) {
                if (c = (D.find.ID(l.matches[0].replace(ma, na), c) || [])[0], !c) return d;
                j && (c = c.parentNode);
                b = b.slice(f.shift().value.length)
            }
            for (e = hb.needsContext.test(b) ? 0 : f.length; e-- && !(l = f[e], D.relative[m = l.type]);)
                if ((p = D.find[m]) && (g = p(l.matches[0].replace(ma, na), vb.test(f[0].type) &&
                        wb(c.parentNode) || c))) {
                    if (f.splice(e, 1), b = g.length && ab(f), !b) return ra.apply(d, g), d;
                    break
                }
        }
        return (j || Cb(b, q))(g, c, !da, d, !c || vb.test(b) && wb(c.parentNode) || c), d
    }, P.sortStable = N.split("").sort(Db).join("") === N, P.detectDuplicates = !!Ia, qa(), P.sortDetached = ja(function(b) {
        return 1 & b.compareDocumentPosition(H.createElement("fieldset"))
    }), ja(function(b) {
        return b.innerHTML = "<a href='#'></a>", "#" === b.firstChild.getAttribute("href")
    }) || yb("type|href|height|width", function(b, c, d) {
        if (!d) return b.getAttribute(c,
            "type" === c.toLowerCase() ? 1 : 2)
    }), P.attributes && ja(function(b) {
        return b.innerHTML = "<input/>", b.firstChild.setAttribute("value", ""), "" === b.firstChild.getAttribute("value")
    }) || yb("value", function(b, c, d) {
        if (!d && "input" === b.nodeName.toLowerCase()) return b.defaultValue
    }), ja(function(b) {
        return null == b.getAttribute("disabled")
    }) || yb("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function(b, c, d) {
        var g;
        if (!d) return !0 === b[c] ? c.toLowerCase() :
            (g = b.getAttributeNode(c)) && g.specified ? g.value : null
    }), G);
    l.find = pa;
    l.expr = pa.selectors;
    l.expr[":"] = l.expr.pseudos;
    l.uniqueSort = l.unique = pa.uniqueSort;
    l.text = pa.getText;
    l.isXMLDoc = pa.isXML;
    l.contains = pa.contains;
    l.escapeSelector = pa.escape;
    var Ja = function(b, c, d) {
            for (var g = [], e = void 0 !== d;
                (b = b[c]) && 9 !== b.nodeType;)
                if (1 === b.nodeType) {
                    if (e && l(b).is(d)) break;
                    g.push(b)
                }
            return g
        },
        gc = function(b, c) {
            for (var d = []; b; b = b.nextSibling) 1 === b.nodeType && b !== c && d.push(b);
            return d
        },
        hc = l.expr.match.needsContext,
        ic = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        Dc = /^.[^:#\[\.,]*$/;
    l.filter = function(b, c, d) {
        var g = c[0];
        return d && (b = ":not(" + b + ")"), 1 === c.length && 1 === g.nodeType ? l.find.matchesSelector(g, b) ? [g] : [] : l.find.matches(b, l.grep(c, function(b) {
            return 1 === b.nodeType
        }))
    };
    l.fn.extend({
        find: function(b) {
            var c, d, g = this.length,
                e = this;
            if ("string" != typeof b) return this.pushStack(l(b).filter(function() {
                for (c = 0; c < g; c++)
                    if (l.contains(e[c], this)) return !0
            }));
            d = this.pushStack([]);
            for (c = 0; c < g; c++) l.find(b, e[c], d);
            return 1 < g ? l.uniqueSort(d) : d
        },
        filter: function(b) {
            return this.pushStack(j(this,
                b || [], !1))
        },
        not: function(b) {
            return this.pushStack(j(this, b || [], !0))
        },
        is: function(b) {
            return !!j(this, "string" == typeof b && hc.test(b) ? l(b) : b || [], !1).length
        }
    });
    var jc, id = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (l.fn.init = function(b, c, d) {
        var g, e;
        if (!b) return this;
        if (d = d || jc, "string" == typeof b) {
            if (g = "<" === b[0] && ">" === b[b.length - 1] && 3 <= b.length ? [null, b, null] : id.exec(b), !g || !g[1] && c) return !c || c.jquery ? (c || d).find(b) : this.constructor(c).find(b);
            if (g[1]) {
                if (c = c instanceof l ? c[0] : c, l.merge(this, l.parseHTML(g[1],
                        c && c.nodeType ? c.ownerDocument || c : A, !0)), ic.test(g[1]) && l.isPlainObject(c))
                    for (g in c) l.isFunction(this[g]) ? this[g](c[g]) : this.attr(g, c[g]);
                return this
            }
            return e = A.getElementById(g[2]), e && (this[0] = e, this.length = 1), this
        }
        return b.nodeType ? (this[0] = b, this.length = 1, this) : l.isFunction(b) ? void 0 !== d.ready ? d.ready(b) : b(l) : l.makeArray(b, this)
    }).prototype = l.fn;
    jc = l(A);
    var jd = /^(?:parents|prev(?:Until|All))/,
        kd = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    l.fn.extend({
        has: function(b) {
            var c = l(b, this),
                d = c.length;
            return this.filter(function() {
                for (var b = 0; b < d; b++)
                    if (l.contains(this, c[b])) return !0
            })
        },
        closest: function(b, c) {
            var d, g = 0,
                e = this.length,
                f = [],
                m = "string" != typeof b && l(b);
            if (!hc.test(b))
                for (; g < e; g++)
                    for (d = this[g]; d && d !== c; d = d.parentNode)
                        if (11 > d.nodeType && (m ? -1 < m.index(d) : 1 === d.nodeType && l.find.matchesSelector(d, b))) {
                            f.push(d);
                            break
                        }
            return this.pushStack(1 < f.length ? l.uniqueSort(f) : f)
        },
        index: function(b) {
            return b ? "string" == typeof b ? La.call(l(b), this[0]) : La.call(this, b.jquery ? b[0] : b) : this[0] && this[0].parentNode ?
                this.first().prevAll().length : -1
        },
        add: function(b, c) {
            return this.pushStack(l.uniqueSort(l.merge(this.get(), l(b, c))))
        },
        addBack: function(b) {
            return this.add(null == b ? this.prevObject : this.prevObject.filter(b))
        }
    });
    l.each({
        parent: function(b) {
            return (b = b.parentNode) && 11 !== b.nodeType ? b : null
        },
        parents: function(b) {
            return Ja(b, "parentNode")
        },
        parentsUntil: function(b, c, d) {
            return Ja(b, "parentNode", d)
        },
        next: function(b) {
            return n(b, "nextSibling")
        },
        prev: function(b) {
            return n(b, "previousSibling")
        },
        nextAll: function(b) {
            return Ja(b,
                "nextSibling")
        },
        prevAll: function(b) {
            return Ja(b, "previousSibling")
        },
        nextUntil: function(b, c, d) {
            return Ja(b, "nextSibling", d)
        },
        prevUntil: function(b, c, d) {
            return Ja(b, "previousSibling", d)
        },
        siblings: function(b) {
            return gc((b.parentNode || {}).firstChild, b)
        },
        children: function(b) {
            return gc(b.firstChild)
        },
        contents: function(b) {
            return f(b, "iframe") ? b.contentDocument : (f(b, "template") && (b = b.content || b), l.merge([], b.childNodes))
        }
    }, function(b, c) {
        l.fn[b] = function(d, g) {
            var e = l.map(this, c, d);
            return "Until" !== b.slice(-5) &&
                (g = d), g && "string" == typeof g && (e = l.filter(g, e)), 1 < this.length && (kd[b] || l.uniqueSort(e), jd.test(b) && e.reverse()), this.pushStack(e)
        }
    });
    var ba = /[^\x20\t\r\n\f]+/g;
    l.Callbacks = function(b) {
        var c;
        if ("string" == typeof b) {
            var d = {};
            c = (l.each(b.match(ba) || [], function(b, c) {
                d[c] = !0
            }), d)
        } else c = l.extend({}, b);
        b = c;
        var g, e, f, m, p = [],
            j = [],
            q = -1,
            s = function() {
                m = m || b.once;
                for (f = g = !0; j.length; q = -1)
                    for (e = j.shift(); ++q < p.length;) !1 === p[q].apply(e[0], e[1]) && b.stopOnFalse && (q = p.length, e = !1);
                b.memory || (e = !1);
                g = !1;
                m && (p = e ? [] :
                    "")
            },
            r = {
                add: function() {
                    return p && (e && !g && (q = p.length - 1, j.push(e)), function Kc(c) {
                        l.each(c, function(c, d) {
                            l.isFunction(d) ? b.unique && r.has(d) || p.push(d) : d && d.length && "string" !== l.type(d) && Kc(d)
                        })
                    }(arguments), e && !g && s()), this
                },
                remove: function() {
                    return l.each(arguments, function(b, c) {
                        for (var d; - 1 < (d = l.inArray(c, p, d));) p.splice(d, 1), d <= q && q--
                    }), this
                },
                has: function(b) {
                    return b ? -1 < l.inArray(b, p) : 0 < p.length
                },
                empty: function() {
                    return p && (p = []), this
                },
                disable: function() {
                    return m = j = [], p = e = "", this
                },
                disabled: function() {
                    return !p
                },
                lock: function() {
                    return m = j = [], e || g || (p = e = ""), this
                },
                locked: function() {
                    return !!m
                },
                fireWith: function(b, c) {
                    return m || (c = c || [], c = [b, c.slice ? c.slice() : c], j.push(c), g || s()), this
                },
                fire: function() {
                    return r.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!f
                }
            };
        return r
    };
    l.extend({
        Deferred: function(c) {
            var d = [
                    ["notify", "progress", l.Callbacks("memory"), l.Callbacks("memory"), 2],
                    ["resolve", "done", l.Callbacks("once memory"), l.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", l.Callbacks("once memory"),
                        l.Callbacks("once memory"), 1, "rejected"
                    ]
                ],
                e = "pending",
                f = {
                    state: function() {
                        return e
                    },
                    always: function() {
                        return m.done(arguments).fail(arguments), this
                    },
                    "catch": function(b) {
                        return f.then(null, b)
                    },
                    pipe: function() {
                        var b = arguments;
                        return l.Deferred(function(c) {
                            l.each(d, function(d, g) {
                                var e = l.isFunction(b[g[4]]) && b[g[4]];
                                m[g[1]](function() {
                                    var b = e && e.apply(this, arguments);
                                    b && l.isFunction(b.promise) ? b.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[g[0] + "With"](this, e ? [b] : arguments)
                                })
                            });
                            b = null
                        }).promise()
                    },
                    then: function(c, e, x) {
                        function f(c, d, e, x) {
                            return function() {
                                var p = this,
                                    z = arguments,
                                    j = function() {
                                        var b, j;
                                        if (!(c < m)) {
                                            if (b = e.apply(p, z), b === d.promise()) throw new TypeError("Thenable self-resolution");
                                            j = b && ("object" == typeof b || "function" == typeof b) && b.then;
                                            l.isFunction(j) ? x ? j.call(b, f(m, d, r, x), f(m, d, g, x)) : (m++, j.call(b, f(m, d, r, x), f(m, d, g, x), f(m, d, r, d.notifyWith))) : (e !== r && (p = void 0, z = [b]), (x || d.resolveWith)(p, z))
                                        }
                                    },
                                    q = x ? j : function() {
                                        try {
                                            j()
                                        } catch (b) {
                                            l.Deferred.exceptionHook && l.Deferred.exceptionHook(b,
                                                q.stackTrace), c + 1 >= m && (e !== g && (p = void 0, z = [b]), d.rejectWith(p, z))
                                        }
                                    };
                                c ? q() : (l.Deferred.getStackHook && (q.stackTrace = l.Deferred.getStackHook()), b.setTimeout(q))
                            }
                        }
                        var m = 0;
                        return l.Deferred(function(b) {
                            d[0][3].add(f(0, b, l.isFunction(x) ? x : r, b.notifyWith));
                            d[1][3].add(f(0, b, l.isFunction(c) ? c : r));
                            d[2][3].add(f(0, b, l.isFunction(e) ? e : g))
                        }).promise()
                    },
                    promise: function(b) {
                        return null != b ? l.extend(b, f) : f
                    }
                },
                m = {};
            return l.each(d, function(b, c) {
                var g = c[2],
                    x = c[5];
                f[c[1]] = g.add;
                x && g.add(function() {
                        e = x
                    }, d[3 - b][2].disable,
                    d[0][2].lock);
                g.add(c[3].fire);
                m[c[0]] = function() {
                    return m[c[0] + "With"](this === m ? void 0 : this, arguments), this
                };
                m[c[0] + "With"] = g.fireWith
            }), f.promise(m), c && c.call(m, m), m
        },
        when: function(b) {
            var c = arguments.length,
                d = c,
                g = Array(d),
                e = ya.call(arguments),
                f = l.Deferred(),
                m = function(b) {
                    return function(d) {
                        g[b] = this;
                        e[b] = 1 < arguments.length ? ya.call(arguments) : d;
                        --c || f.resolveWith(g, e)
                    }
                };
            if (1 >= c && (p(b, f.done(m(d)).resolve, f.reject, !c), "pending" === f.state() || l.isFunction(e[d] && e[d].then))) return f.then();
            for (; d--;) p(e[d],
                m(d), f.reject);
            return f.promise()
        }
    });
    var ld = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    l.Deferred.exceptionHook = function(c, d) {
        b.console && b.console.warn && c && ld.test(c.name) && b.console.warn("jQuery.Deferred exception: " + c.message, c.stack, d)
    };
    l.readyException = function(c) {
        b.setTimeout(function() {
            throw c;
        })
    };
    var Eb = l.Deferred();
    l.fn.ready = function(b) {
        return Eb.then(b)["catch"](function(b) {
            l.readyException(b)
        }), this
    };
    l.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(b) {
            (!0 === b ? --l.readyWait :
                l.isReady) || (l.isReady = !0, !0 !== b && 0 < --l.readyWait || Eb.resolveWith(A, [l]))
        }
    });
    l.ready.then = Eb.then;
    "complete" === A.readyState || "loading" !== A.readyState && !A.documentElement.doScroll ? b.setTimeout(l.ready) : (A.addEventListener("DOMContentLoaded", m), b.addEventListener("load", m));
    var oa = function(b, c, d, g, e, f, m) {
            var p = 0,
                j = b.length,
                q = null == d;
            if ("object" === l.type(d))
                for (p in e = !0, d) oa(b, c, p, d[p], !0, f, m);
            else if (void 0 !== g && (e = !0, l.isFunction(g) || (m = !0), q && (m ? (c.call(b, g), c = null) : (q = c, c = function(b, c, d) {
                    return q.call(l(b),
                        d)
                })), c))
                for (; p < j; p++) c(b[p], d, m ? g : g.call(b[p], p, c(b[p], d)));
            return e ? b : q ? c.call(b) : j ? c(b[0], d) : f
        },
        ib = function(b) {
            return 1 === b.nodeType || 9 === b.nodeType || !+b.nodeType
        };
    q.uid = 1;
    q.prototype = {
        cache: function(b) {
            var c = b[this.expando];
            return c || (c = {}, ib(b) && (b.nodeType ? b[this.expando] = c : Object.defineProperty(b, this.expando, {
                value: c,
                configurable: !0
            }))), c
        },
        set: function(b, c, d) {
            var g;
            b = this.cache(b);
            if ("string" == typeof c) b[l.camelCase(c)] = d;
            else
                for (g in c) b[l.camelCase(g)] = c[g];
            return b
        },
        get: function(b, c) {
            return void 0 ===
                c ? this.cache(b) : b[this.expando] && b[this.expando][l.camelCase(c)]
        },
        access: function(b, c, d) {
            return void 0 === c || c && "string" == typeof c && void 0 === d ? this.get(b, c) : (this.set(b, c, d), void 0 !== d ? d : c)
        },
        remove: function(b, c) {
            var d, g = b[this.expando];
            if (void 0 !== g) {
                if (void 0 !== c) {
                    Array.isArray(c) ? c = c.map(l.camelCase) : (c = l.camelCase(c), c = c in g ? [c] : c.match(ba) || []);
                    for (d = c.length; d--;) delete g[c[d]]
                }(void 0 === c || l.isEmptyObject(g)) && (b.nodeType ? b[this.expando] = void 0 : delete b[this.expando])
            }
        },
        hasData: function(b) {
            b =
                b[this.expando];
            return void 0 !== b && !l.isEmptyObject(b)
        }
    };
    var E = new q,
        X = new q,
        Fc = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ec = /[A-Z]/g;
    l.extend({
        hasData: function(b) {
            return X.hasData(b) || E.hasData(b)
        },
        data: function(b, c, d) {
            return X.access(b, c, d)
        },
        removeData: function(b, c) {
            X.remove(b, c)
        },
        _data: function(b, c, d) {
            return E.access(b, c, d)
        },
        _removeData: function(b, c) {
            E.remove(b, c)
        }
    });
    l.fn.extend({
        data: function(b, c) {
            var d, g, e, f = this[0],
                m = f && f.attributes;
            if (void 0 === b) {
                if (this.length && (e = X.get(f), 1 === f.nodeType && !E.get(f,
                        "hasDataAttrs"))) {
                    for (d = m.length; d--;) m[d] && (g = m[d].name, 0 === g.indexOf("data-") && (g = l.camelCase(g.slice(5)), s(f, g, e[g])));
                    E.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof b ? this.each(function() {
                X.set(this, b)
            }) : oa(this, function(c) {
                var d;
                if (f && void 0 === c) {
                    if ((d = X.get(f, b), void 0 !== d) || (d = s(f, b), void 0 !== d)) return d
                } else this.each(function() {
                    X.set(this, b, c)
                })
            }, null, c, 1 < arguments.length, null, !0)
        },
        removeData: function(b) {
            return this.each(function() {
                X.remove(this, b)
            })
        }
    });
    l.extend({
        queue: function(b,
            c, d) {
            var g;
            if (b) return c = (c || "fx") + "queue", g = E.get(b, c), d && (!g || Array.isArray(d) ? g = E.access(b, c, l.makeArray(d)) : g.push(d)), g || []
        },
        dequeue: function(b, c) {
            c = c || "fx";
            var d = l.queue(b, c),
                g = d.length,
                e = d.shift(),
                f = l._queueHooks(b, c),
                m = function() {
                    l.dequeue(b, c)
                };
            "inprogress" === e && (e = d.shift(), g--);
            e && ("fx" === c && d.unshift("inprogress"), delete f.stop, e.call(b, m, f));
            !g && f && f.empty.fire()
        },
        _queueHooks: function(b, c) {
            var d = c + "queueHooks";
            return E.get(b, d) || E.access(b, d, {
                empty: l.Callbacks("once memory").add(function() {
                    E.remove(b, [c + "queue", d])
                })
            })
        }
    });
    l.fn.extend({
        queue: function(b, c) {
            var d = 2;
            return "string" != typeof b && (c = b, b = "fx", d--), arguments.length < d ? l.queue(this[0], b) : void 0 === c ? this : this.each(function() {
                var d = l.queue(this, b, c);
                l._queueHooks(this, b);
                "fx" === b && "inprogress" !== d[0] && l.dequeue(this, b)
            })
        },
        dequeue: function(b) {
            return this.each(function() {
                l.dequeue(this, b)
            })
        },
        clearQueue: function(b) {
            return this.queue(b || "fx", [])
        },
        promise: function(b, c) {
            var d, g = 1,
                e = l.Deferred(),
                f = this,
                m = this.length,
                p = function() {
                    --g || e.resolveWith(f, [f])
                };
            "string" != typeof b && (c = b, b = void 0);
            for (b = b || "fx"; m--;)(d = E.get(f[m], b + "queueHooks")) && d.empty && (g++, d.empty.add(p));
            return p(), e.promise(c)
        }
    });
    var kc = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ma = RegExp("^(?:([+-])=|)(" + kc + ")([a-z%]*)$", "i"),
        ta = ["Top", "Right", "Bottom", "Left"],
        Va = function(b, c) {
            return b = c || b, "none" === b.style.display || "" === b.style.display && l.contains(b.ownerDocument, b) && "none" === l.css(b, "display")
        },
        lc = function(b, c, d, g) {
            var e, f = {};
            for (e in c) f[e] = b.style[e], b.style[e] = c[e];
            d =
                d.apply(b, g || []);
            for (e in c) b.style[e] = f[e];
            return d
        },
        Ib = {};
    l.fn.extend({
        show: function() {
            return u(this, !0)
        },
        hide: function() {
            return u(this)
        },
        toggle: function(b) {
            return "boolean" == typeof b ? b ? this.show() : this.hide() : this.each(function() {
                Va(this) ? l(this).show() : l(this).hide()
            })
        }
    });
    var mc = /^(?:checkbox|radio)$/i,
        Jb = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        Kb = /^$|\/(?:java|ecma)script/i,
        Z = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Z.optgroup = Z.option;
    Z.tbody = Z.tfoot = Z.colgroup = Z.caption = Z.thead;
    Z.th = Z.td;
    var Gc = /<|&#?\w+;/,
        jb = A.createDocumentFragment().appendChild(A.createElement("div")),
        kb = A.createElement("input");
    kb.setAttribute("type", "radio");
    kb.setAttribute("checked", "checked");
    kb.setAttribute("name", "t");
    jb.appendChild(kb);
    L.checkClone = jb.cloneNode(!0).cloneNode(!0).lastChild.checked;
    jb.innerHTML = "<textarea>x</textarea>";
    L.noCloneChecked = !!jb.cloneNode(!0).lastChild.defaultValue;
    !0;
    var lb = A.documentElement,
        md = /^key/,
        nd = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        nc = /^([^.]*)(?:\.(.+)|)/;
    l.event = {
        global: {},
        add: function(b, c, d, g, e) {
            var f, m, p, j, q, s, r, n, t, u;
            if (q = E.get(b)) {
                d.handler && (f = d, d = f.handler, e = f.selector);
                e && l.find.matchesSelector(lb, e);
                d.guid || (d.guid = l.guid++);
                (j = q.events) || (j = q.events = {});
                (m = q.handle) || (m = q.handle = function(c) {
                    return "undefined" != typeof l && l.event.triggered !== c.type ? l.event.dispatch.apply(b,
                        arguments) : void 0
                });
                c = (c || "").match(ba) || [""];
                for (q = c.length; q--;) p = nc.exec(c[q]) || [], t = u = p[1], p = (p[2] || "").split(".").sort(), t && (r = l.event.special[t] || {}, t = (e ? r.delegateType : r.bindType) || t, r = l.event.special[t] || {}, s = l.extend({
                    type: t,
                    origType: u,
                    data: g,
                    handler: d,
                    guid: d.guid,
                    selector: e,
                    needsContext: e && l.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, f), (n = j[t]) || (n = j[t] = [], n.delegateCount = 0, r.setup && !1 !== r.setup.call(b, g, p, m) || b.addEventListener && b.addEventListener(t, m)), r.add && (r.add.call(b,
                    s), s.handler.guid || (s.handler.guid = d.guid)), e ? n.splice(n.delegateCount++, 0, s) : n.push(s), l.event.global[t] = !0)
            }
        },
        remove: function(b, c, d, g, e) {
            var f, m, p, j, q, s, r, n, t, u, y, C = E.hasData(b) && E.get(b);
            if (C && (j = C.events)) {
                c = (c || "").match(ba) || [""];
                for (q = c.length; q--;)
                    if (p = nc.exec(c[q]) || [], t = y = p[1], u = (p[2] || "").split(".").sort(), t) {
                        r = l.event.special[t] || {};
                        t = (g ? r.delegateType : r.bindType) || t;
                        n = j[t] || [];
                        p = p[2] && RegExp("(^|\\.)" + u.join("\\.(?:.*\\.|)") + "(\\.|$)");
                        for (m = f = n.length; f--;) s = n[f], !e && y !== s.origType ||
                            d && d.guid !== s.guid || p && !p.test(s.namespace) || g && g !== s.selector && ("**" !== g || !s.selector) || (n.splice(f, 1), s.selector && n.delegateCount--, r.remove && r.remove.call(b, s));
                        m && !n.length && (r.teardown && !1 !== r.teardown.call(b, u, C.handle) || l.removeEvent(b, t, C.handle), delete j[t])
                    } else
                        for (t in j) l.event.remove(b, t + c[q], d, g, !0);
                l.isEmptyObject(j) && E.remove(b, "handle events")
            }
        },
        dispatch: function(b) {
            var c = l.event.fix(b),
                d, g, e, f, m, p, j = Array(arguments.length);
            g = (E.get(this, "events") || {})[c.type] || [];
            var q = l.event.special[c.type] || {};
            j[0] = c;
            for (d = 1; d < arguments.length; d++) j[d] = arguments[d];
            if (c.delegateTarget = this, !q.preDispatch || !1 !== q.preDispatch.call(this, c)) {
                p = l.event.handlers.call(this, c, g);
                for (d = 0;
                    (f = p[d++]) && !c.isPropagationStopped();) {
                    c.currentTarget = f.elem;
                    for (g = 0;
                        (m = f.handlers[g++]) && !c.isImmediatePropagationStopped();) c.rnamespace && !c.rnamespace.test(m.namespace) || (c.handleObj = m, c.data = m.data, e = ((l.event.special[m.origType] || {}).handle || m.handler).apply(f.elem, j), void 0 !== e && !1 === (c.result = e) && (c.preventDefault(),
                        c.stopPropagation()))
                }
                return q.postDispatch && q.postDispatch.call(this, c), c.result
            }
        },
        handlers: function(b, c) {
            var d, g, e, f, m, p = [],
                j = c.delegateCount,
                q = b.target;
            if (j && q.nodeType && !("click" === b.type && 1 <= b.button))
                for (; q !== this; q = q.parentNode || this)
                    if (1 === q.nodeType && ("click" !== b.type || !0 !== q.disabled)) {
                        f = [];
                        m = {};
                        for (d = 0; d < j; d++) g = c[d], e = g.selector + " ", void 0 === m[e] && (m[e] = g.needsContext ? -1 < l(e, this).index(q) : l.find(e, this, null, [q]).length), m[e] && f.push(g);
                        f.length && p.push({
                            elem: q,
                            handlers: f
                        })
                    }
            return q = this,
                j < c.length && p.push({
                    elem: q,
                    handlers: c.slice(j)
                }), p
        },
        addProp: function(b, c) {
            Object.defineProperty(l.Event.prototype, b, {
                enumerable: !0,
                configurable: !0,
                get: l.isFunction(c) ? function() {
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
            return b[l.expando] ? b : new l.Event(b)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !==
                        Na() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === Na() && this.blur) return this.blur(), !1
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
    l.removeEvent = function(b, c, d) {
        b.removeEventListener && b.removeEventListener(c,
            d)
    };
    l.Event = function(b, c) {
        return this instanceof l.Event ? (b && b.type ? (this.originalEvent = b, this.type = b.type, this.isDefaultPrevented = b.defaultPrevented || void 0 === b.defaultPrevented && !1 === b.returnValue ? Q : B, this.target = b.target && 3 === b.target.nodeType ? b.target.parentNode : b.target, this.currentTarget = b.currentTarget, this.relatedTarget = b.relatedTarget) : this.type = b, c && l.extend(this, c), this.timeStamp = b && b.timeStamp || l.now(), void(this[l.expando] = !0)) : new l.Event(b, c)
    };
    l.Event.prototype = {
        constructor: l.Event,
        isDefaultPrevented: B,
        isPropagationStopped: B,
        isImmediatePropagationStopped: B,
        isSimulated: !1,
        preventDefault: function() {
            var b = this.originalEvent;
            this.isDefaultPrevented = Q;
            b && !this.isSimulated && b.preventDefault()
        },
        stopPropagation: function() {
            var b = this.originalEvent;
            this.isPropagationStopped = Q;
            b && !this.isSimulated && b.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var b = this.originalEvent;
            this.isImmediatePropagationStopped = Q;
            b && !this.isSimulated && b.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    l.each({
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
            return null == b.which && md.test(b.type) ? null != b.charCode ? b.charCode : b.keyCode : !b.which && void 0 !== c && nd.test(b.type) ? 1 & c ? 1 : 2 & c ? 3 : 4 &
                c ? 2 : 0 : b.which
        }
    }, l.event.addProp);
    l.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(b, c) {
        l.event.special[b] = {
            delegateType: c,
            bindType: c,
            handle: function(b) {
                var d, g = b.relatedTarget,
                    e = b.handleObj;
                return g && (g === this || l.contains(this, g)) || (b.type = e.origType, d = e.handler.apply(this, arguments), b.type = c), d
            }
        }
    });
    l.fn.extend({
        on: function(b, c, d, g) {
            return Fa(this, b, c, d, g)
        },
        one: function(b, c, d, g) {
            return Fa(this, b, c, d, g, 1)
        },
        off: function(b, c, d) {
            var g,
                e;
            if (b && b.preventDefault && b.handleObj) return g = b.handleObj, l(b.delegateTarget).off(g.namespace ? g.origType + "." + g.namespace : g.origType, g.selector, g.handler), this;
            if ("object" == typeof b) {
                for (e in b) this.off(e, c, b[e]);
                return this
            }
            return !1 !== c && "function" != typeof c || (d = c, c = void 0), !1 === d && (d = B), this.each(function() {
                l.event.remove(this, b, d, c)
            })
        }
    });
    var od = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        pd = /<script|<style|<link/i,
        Jc = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ic = /^true\/(.*)/,
        Lc = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    l.extend({
        htmlPrefilter: function(b) {
            return b.replace(od, "<$1></$2>")
        },
        clone: function(b, c, d) {
            var g, e, f, m, p = b.cloneNode(!0),
                j = l.contains(b.ownerDocument, b);
            if (!L.noCloneChecked && !(1 !== b.nodeType && 11 !== b.nodeType || l.isXMLDoc(b))) {
                m = y(p);
                f = y(b);
                g = 0;
                for (e = f.length; g < e; g++) {
                    var q = f[g],
                        s = m[g],
                        r = s.nodeName.toLowerCase();
                    "input" === r && mc.test(q.type) ? s.checked = q.checked : "input" !== r && "textarea" !== r || (s.defaultValue = q.defaultValue)
                }
            }
            if (c)
                if (d) {
                    f =
                        f || y(b);
                    m = m || y(p);
                    g = 0;
                    for (e = f.length; g < e; g++) Lb(f[g], m[g])
                } else Lb(b, p);
            return m = y(p, "script"), 0 < m.length && C(m, !j && y(b, "script")), p
        },
        cleanData: function(b) {
            for (var c, d, g, e = l.event.special, f = 0; void 0 !== (d = b[f]); f++)
                if (ib(d)) {
                    if (c = d[E.expando]) {
                        if (c.events)
                            for (g in c.events) e[g] ? l.event.remove(d, g) : l.removeEvent(d, g, c.handle);
                        d[E.expando] = void 0
                    }
                    d[X.expando] && (d[X.expando] = void 0)
                }
        }
    });
    l.fn.extend({
        detach: function(b) {
            return U(this, b, !0)
        },
        remove: function(b) {
            return U(this, b)
        },
        text: function(b) {
            return oa(this,
                function(b) {
                    return void 0 === b ? l.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = b)
                    })
                }, null, b, arguments.length)
        },
        append: function() {
            return V(this, arguments, function(b) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && M(this, b).appendChild(b)
            })
        },
        prepend: function() {
            return V(this, arguments, function(b) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var c = M(this, b);
                    c.insertBefore(b, c.firstChild)
                }
            })
        },
        before: function() {
            return V(this,
                arguments,
                function(b) {
                    this.parentNode && this.parentNode.insertBefore(b, this)
                })
        },
        after: function() {
            return V(this, arguments, function(b) {
                this.parentNode && this.parentNode.insertBefore(b, this.nextSibling)
            })
        },
        empty: function() {
            for (var b, c = 0; null != (b = this[c]); c++) 1 === b.nodeType && (l.cleanData(y(b, !1)), b.textContent = "");
            return this
        },
        clone: function(b, c) {
            return b = null != b && b, c = null == c ? b : c, this.map(function() {
                return l.clone(this, b, c)
            })
        },
        html: function(b) {
            return oa(this, function(b) {
                var c = this[0] || {},
                    d = 0,
                    g = this.length;
                if (void 0 === b && 1 === c.nodeType) return c.innerHTML;
                if ("string" == typeof b && !pd.test(b) && !Z[(Jb.exec(b) || ["", ""])[1].toLowerCase()]) {
                    b = l.htmlPrefilter(b);
                    try {
                        for (; d < g; d++) c = this[d] || {}, 1 === c.nodeType && (l.cleanData(y(c, !1)), c.innerHTML = b);
                        c = 0
                    } catch (e) {}
                }
                c && this.empty().append(b)
            }, null, b, arguments.length)
        },
        replaceWith: function() {
            var b = [];
            return V(this, arguments, function(c) {
                var d = this.parentNode;
                0 > l.inArray(this, b) && (l.cleanData(y(this)), d && d.replaceChild(c, this))
            }, b)
        }
    });
    l.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(b, c) {
        l.fn[b] = function(b) {
            for (var d = [], g = l(b), e = g.length - 1, f = 0; f <= e; f++) b = f === e ? this : this.clone(!0), l(g[f])[c](b), tb.apply(d, b.get());
            return this.pushStack(d)
        }
    });
    var Nb = /^margin/,
        pb = RegExp("^(" + kc + ")(?!px)[a-z%]+$", "i"),
        Wa = function(c) {
            var d = c.ownerDocument.defaultView;
            return d && d.opener || (d = b), d.getComputedStyle(c)
        },
        nb = function() {
            if (ia) {
                ia.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";
                ia.innerHTML = "";
                lb.appendChild(mb);
                var c = b.getComputedStyle(ia);
                oc = "1%" !== c.top;
                pc = "2px" === c.marginLeft;
                qc = "4px" === c.width;
                ia.style.marginRight = "50%";
                rc = "4px" === c.marginRight;
                lb.removeChild(mb);
                ia = null
            }
        },
        oc, qc, rc, pc, mb = A.createElement("div"),
        ia = A.createElement("div");
    ia.style && (ia.style.backgroundClip = "content-box", ia.cloneNode(!0).style.backgroundClip = "", L.clearCloneStyle = "content-box" === ia.style.backgroundClip, mb.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
        mb.appendChild(ia), l.extend(L, {
            pixelPosition: function() {
                return nb(), oc
            },
            boxSizingReliable: function() {
                return nb(), qc
            },
            pixelMarginRight: function() {
                return nb(), rc
            },
            reliableMarginLeft: function() {
                return nb(), pc
            }
        }));
    !0;
    var qd = /^(none|table(?!-c[ea]).+)/,
        sc = /^--/,
        rd = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        tc = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Qb = ["Webkit", "Moz", "ms"],
        Pb = A.createElement("div").style;
    l.extend({
        cssHooks: {
            opacity: {
                get: function(b, c) {
                    if (c) {
                        var d = Oa(b, "opacity");
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
                var e, f, m, p = l.camelCase(c),
                    j = sc.test(c),
                    q = b.style;
                return j || (c = R(p)), m = l.cssHooks[c] || l.cssHooks[p], void 0 === d ? m && "get" in m && void 0 !== (e = m.get(b, !1, g)) ? e : q[c] : (f = typeof d, "string" === f && (e = Ma.exec(d)) && e[1] &&
                    (d = t(b, c, e), f = "number"), null != d && d === d && ("number" === f && (d += e && e[3] || (l.cssNumber[p] ? "" : "px")), L.clearCloneStyle || "" !== d || 0 !== c.indexOf("background") || (q[c] = "inherit"), m && "set" in m && void 0 === (d = m.set(b, d, g)) || (j ? q.setProperty(c, d) : q[c] = d)), void 0)
            }
        },
        css: function(b, c, d, g) {
            var e, f, m, p = l.camelCase(c);
            return sc.test(c) || (c = R(p)), m = l.cssHooks[c] || l.cssHooks[p], m && "get" in m && (e = m.get(b, !0, d)), void 0 === e && (e = Oa(b, c, g)), "normal" === e && c in tc && (e = tc[c]), "" === d || d ? (f = parseFloat(e), !0 === d || isFinite(f) ? f || 0 : e) :
                e
        }
    });
    l.each(["height", "width"], function(b, c) {
        l.cssHooks[c] = {
            get: function(b, d, g) {
                if (d) return !qd.test(l.css(b, "display")) || b.getClientRects().length && b.getBoundingClientRect().width ? aa(b, c, g) : lc(b, rd, function() {
                    return aa(b, c, g)
                })
            },
            set: function(b, d, g) {
                var e, f = g && Wa(b);
                g = g && T(b, c, g, "border-box" === l.css(b, "boxSizing", !1, f), f);
                return g && (e = Ma.exec(d)) && "px" !== (e[3] || "px") && (b.style[c] = d, d = l.css(b, c)), S(b, d, g)
            }
        }
    });
    l.cssHooks.marginLeft = Ob(L.reliableMarginLeft, function(b, c) {
        if (c) return (parseFloat(Oa(b, "marginLeft")) ||
            b.getBoundingClientRect().left - lc(b, {
                marginLeft: 0
            }, function() {
                return b.getBoundingClientRect().left
            })) + "px"
    });
    l.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(b, c) {
        l.cssHooks[b + c] = {
            expand: function(d) {
                var g = 0,
                    e = {};
                for (d = "string" == typeof d ? d.split(" ") : [d]; 4 > g; g++) e[b + ta[g] + c] = d[g] || d[g - 2] || d[0];
                return e
            }
        };
        Nb.test(b) || (l.cssHooks[b + c].set = S)
    });
    l.fn.extend({
        css: function(b, c) {
            return oa(this, function(b, c, d) {
                var g, e = {},
                    f = 0;
                if (Array.isArray(c)) {
                    d = Wa(b);
                    for (g = c.length; f < g; f++) e[c[f]] = l.css(b, c[f], !1,
                        d);
                    return e
                }
                return void 0 !== d ? l.style(b, c, d) : l.css(b, c)
            }, b, c, 1 < arguments.length)
        }
    });
    l.Tween = O;
    O.prototype = {
        constructor: O,
        init: function(b, c, d, g, e, f) {
            this.elem = b;
            this.prop = d;
            this.easing = e || l.easing._default;
            this.options = c;
            this.start = this.now = this.cur();
            this.end = g;
            this.unit = f || (l.cssNumber[d] ? "" : "px")
        },
        cur: function() {
            var b = O.propHooks[this.prop];
            return b && b.get ? b.get(this) : O.propHooks._default.get(this)
        },
        run: function(b) {
            var c, d = O.propHooks[this.prop];
            return this.options.duration ? this.pos = c = l.easing[this.easing](b,
                this.options.duration * b, 0, 1, this.options.duration) : this.pos = c = b, this.now = (this.end - this.start) * c + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), d && d.set ? d.set(this) : O.propHooks._default.set(this), this
        }
    };
    O.prototype.init.prototype = O.prototype;
    O.propHooks = {
        _default: {
            get: function(b) {
                var c;
                return 1 !== b.elem.nodeType || null != b.elem[b.prop] && null == b.elem.style[b.prop] ? b.elem[b.prop] : (c = l.css(b.elem, b.prop, ""), c && "auto" !== c ? c : 0)
            },
            set: function(b) {
                l.fx.step[b.prop] ? l.fx.step[b.prop](b) :
                    1 !== b.elem.nodeType || null == b.elem.style[l.cssProps[b.prop]] && !l.cssHooks[b.prop] ? b.elem[b.prop] = b.now : l.style(b.elem, b.prop, b.now + b.unit)
            }
        }
    };
    O.propHooks.scrollTop = O.propHooks.scrollLeft = {
        set: function(b) {
            b.elem.nodeType && b.elem.parentNode && (b.elem[b.prop] = b.now)
        }
    };
    l.easing = {
        linear: function(b) {
            return b
        },
        swing: function(b) {
            return 0.5 - Math.cos(b * Math.PI) / 2
        },
        _default: "swing"
    };
    l.fx = O.prototype.init;
    l.fx.step = {};
    var Ga, Xa, sd = /^(?:toggle|show|hide)$/,
        td = /queueHooks$/;
    l.Animation = l.extend(fa, {
        tweeners: {
            "*": [function(b,
                c) {
                var d = this.createTween(b, c);
                return t(d.elem, b, Ma.exec(c), d), d
            }]
        },
        tweener: function(b, c) {
            l.isFunction(b) ? (c = b, b = ["*"]) : b = b.match(ba);
            for (var d, g = 0, e = b.length; g < e; g++) d = b[g], fa.tweeners[d] = fa.tweeners[d] || [], fa.tweeners[d].unshift(c)
        },
        prefilters: [function(b, c, d) {
            var g, e, f, m, p, j, q, s, r = "width" in c || "height" in c,
                n = this,
                t = {},
                y = b.style,
                C = b.nodeType && Va(b),
                F = E.get(b, "fxshow");
            d.queue || (m = l._queueHooks(b, "fx"), null == m.unqueued && (m.unqueued = 0, p = m.empty.fire, m.empty.fire = function() {
                    m.unqueued || p()
                }), m.unqueued++,
                n.always(function() {
                    n.always(function() {
                        m.unqueued--;
                        l.queue(b, "fx").length || m.empty.fire()
                    })
                }));
            for (g in c)
                if (e = c[g], sd.test(e)) {
                    if (delete c[g], f = f || "toggle" === e, e === (C ? "hide" : "show")) {
                        if ("show" !== e || !F || void 0 === F[g]) continue;
                        C = !0
                    }
                    t[g] = F && F[g] || l.style(b, g)
                }
            if (j = !l.isEmptyObject(c), j || !l.isEmptyObject(t))
                for (g in r && 1 === b.nodeType && (d.overflow = [y.overflow, y.overflowX, y.overflowY], q = F && F.display, null == q && (q = E.get(b, "display")), s = l.css(b, "display"), "none" === s && (q ? s = q : (u([b], !0), q = b.style.display ||
                        q, s = l.css(b, "display"), u([b]))), ("inline" === s || "inline-block" === s && null != q) && "none" === l.css(b, "float") && (j || (n.done(function() {
                        y.display = q
                    }), null == q && (s = y.display, q = "none" === s ? "" : s)), y.display = "inline-block")), d.overflow && (y.overflow = "hidden", n.always(function() {
                        y.overflow = d.overflow[0];
                        y.overflowX = d.overflow[1];
                        y.overflowY = d.overflow[2]
                    })), j = !1, t) j || (F ? "hidden" in F && (C = F.hidden) : F = E.access(b, "fxshow", {
                    display: q
                }), f && (F.hidden = !C), C && u([b], !0), n.done(function() {
                    C || u([b]);
                    E.remove(b, "fxshow");
                    for (g in t) l.style(b,
                        g, t[g])
                })), j = Rb(C ? F[g] : 0, g, n), g in F || (F[g] = j.start, C && (j.end = j.start, j.start = 0))
        }],
        prefilter: function(b, c) {
            c ? fa.prefilters.unshift(b) : fa.prefilters.push(b)
        }
    });
    l.speed = function(b, c, d) {
        var g = b && "object" == typeof b ? l.extend({}, b) : {
            complete: d || !d && c || l.isFunction(b) && b,
            duration: b,
            easing: d && c || c && !l.isFunction(c) && c
        };
        return l.fx.off ? g.duration = 0 : "number" != typeof g.duration && (g.duration in l.fx.speeds ? g.duration = l.fx.speeds[g.duration] : g.duration = l.fx.speeds._default), null != g.queue && !0 !== g.queue || (g.queue =
            "fx"), g.old = g.complete, g.complete = function() {
            l.isFunction(g.old) && g.old.call(this);
            g.queue && l.dequeue(this, g.queue)
        }, g
    };
    l.fn.extend({
        fadeTo: function(b, c, d, g) {
            return this.filter(Va).css("opacity", 0).show().end().animate({
                opacity: c
            }, b, d, g)
        },
        animate: function(b, c, d, g) {
            var e = l.isEmptyObject(b),
                f = l.speed(c, d, g);
            c = function() {
                var c = fa(this, l.extend({}, b), f);
                (e || E.get(this, "finish")) && c.stop(!0)
            };
            return c.finish = c, e || !1 === f.queue ? this.each(c) : this.queue(f.queue, c)
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
                    e = null != b && b + "queueHooks",
                    f = l.timers,
                    m = E.get(this);
                if (e) m[e] && m[e].stop && g(m[e]);
                else
                    for (e in m) m[e] && m[e].stop && td.test(e) && g(m[e]);
                for (e = f.length; e--;) f[e].elem !== this || null != b && f[e].queue !== b || (f[e].anim.stop(d), c = !1, f.splice(e, 1));
                !c && d || l.dequeue(this, b)
            })
        },
        finish: function(b) {
            return !1 !== b && (b = b || "fx"), this.each(function() {
                var c, d = E.get(this),
                    g = d[b + "queue"];
                c = d[b + "queueHooks"];
                var e = l.timers,
                    f = g ? g.length : 0;
                d.finish = !0;
                l.queue(this, b, []);
                c && c.stop && c.stop.call(this, !0);
                for (c = e.length; c--;) e[c].elem === this && e[c].queue === b && (e[c].anim.stop(!0), e.splice(c, 1));
                for (c = 0; c < f; c++) g[c] && g[c].finish && g[c].finish.call(this);
                delete d.finish
            })
        }
    });
    l.each(["toggle", "show", "hide"], function(b, c) {
        var d = l.fn[c];
        l.fn[c] = function(b, g, e) {
            return null == b || "boolean" == typeof b ? d.apply(this, arguments) : this.animate(ua(c, !0), b, g, e)
        }
    });
    l.each({
        slideDown: ua("show"),
        slideUp: ua("hide"),
        slideToggle: ua("toggle"),
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
        l.fn[b] = function(b, d, g) {
            return this.animate(c, b, d, g)
        }
    });
    l.timers = [];
    l.fx.tick = function() {
        var b, c = 0,
            d = l.timers;
        for (Ga = l.now(); c < d.length; c++) b = d[c], b() || d[c] !== b || d.splice(c--, 1);
        d.length || l.fx.stop();
        Ga = void 0
    };
    l.fx.timer = function(b) {
        l.timers.push(b);
        l.fx.start()
    };
    l.fx.interval = 13;
    l.fx.start = function() {
        Xa || (Xa = !0, Y())
    };
    l.fx.stop = function() {
        Xa = null
    };
    l.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    l.fn.delay = function(c, d) {
        return c = l.fx ? l.fx.speeds[c] || c : c, d = d || "fx", this.queue(d, function(d, g) {
            var e = b.setTimeout(d, c);
            g.stop = function() {
                b.clearTimeout(e)
            }
        })
    };
    var Ka = A.createElement("input"),
        ud = A.createElement("select").appendChild(A.createElement("option"));
    Ka.type = "checkbox";
    L.checkOn = "" !== Ka.value;
    L.optSelected = ud.selected;
    Ka = A.createElement("input");
    Ka.value = "t";
    Ka.type = "radio";
    L.radioValue = "t" === Ka.value;
    var uc, Sa = l.expr.attrHandle;
    l.fn.extend({
        attr: function(b, c) {
            return oa(this,
                l.attr, b, c, 1 < arguments.length)
        },
        removeAttr: function(b) {
            return this.each(function() {
                l.removeAttr(this, b)
            })
        }
    });
    l.extend({
        attr: function(b, c, d) {
            var g, e, f = b.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof b.getAttribute ? l.prop(b, c, d) : (1 === f && l.isXMLDoc(b) || (e = l.attrHooks[c.toLowerCase()] || (l.expr.match.bool.test(c) ? uc : void 0)), void 0 !== d ? null === d ? void l.removeAttr(b, c) : e && "set" in e && void 0 !== (g = e.set(b, d, c)) ? g : (b.setAttribute(c, d + ""), d) : e && "get" in e && null !== (g = e.get(b, c)) ? g : (g = l.find.attr(b,
                c), null == g ? void 0 : g))
        },
        attrHooks: {
            type: {
                set: function(b, c) {
                    if (!L.radioValue && "radio" === c && f(b, "input")) {
                        var d = b.value;
                        return b.setAttribute("type", c), d && (b.value = d), c
                    }
                }
            }
        },
        removeAttr: function(b, c) {
            var d, g = 0,
                e = c && c.match(ba);
            if (e && 1 === b.nodeType)
                for (; d = e[g++];) b.removeAttribute(d)
        }
    });
    uc = {
        set: function(b, c, d) {
            return !1 === c ? l.removeAttr(b, d) : b.setAttribute(d, d), d
        }
    };
    l.each(l.expr.match.bool.source.match(/\w+/g), function(b, c) {
        var d = Sa[c] || l.find.attr;
        Sa[c] = function(b, c, g) {
            var e, f, m = c.toLowerCase();
            return g ||
                (f = Sa[m], Sa[m] = e, e = null != d(b, c, g) ? m : null, Sa[m] = f), e
        }
    });
    var vd = /^(?:input|select|textarea|button)$/i,
        wd = /^(?:a|area)$/i;
    l.fn.extend({
        prop: function(b, c) {
            return oa(this, l.prop, b, c, 1 < arguments.length)
        },
        removeProp: function(b) {
            return this.each(function() {
                delete this[l.propFix[b] || b]
            })
        }
    });
    l.extend({
        prop: function(b, c, d) {
            var g, e, f = b.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && l.isXMLDoc(b) || (c = l.propFix[c] || c, e = l.propHooks[c]), void 0 !== d ? e && "set" in e && void 0 !== (g = e.set(b, d, c)) ? g : b[c] = d : e && "get" in e && null !==
                (g = e.get(b, c)) ? g : b[c]
        },
        propHooks: {
            tabIndex: {
                get: function(b) {
                    var c = l.find.attr(b, "tabindex");
                    return c ? parseInt(c, 10) : vd.test(b.nodeName) || wd.test(b.nodeName) && b.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    });
    L.optSelected || (l.propHooks.selected = {
        get: function(b) {
            b = b.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        },
        set: function(b) {
            b = b.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        }
    });
    l.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "),
        function() {
            l.propFix[this.toLowerCase()] = this
        });
    l.fn.extend({
        addClass: function(b) {
            var c, d, g, e, f, m, p = 0;
            if (l.isFunction(b)) return this.each(function(c) {
                l(this).addClass(b.call(this, c, wa(this)))
            });
            if ("string" == typeof b && b)
                for (c = b.match(ba) || []; d = this[p++];)
                    if (e = wa(d), g = 1 === d.nodeType && " " + va(e) + " ") {
                        for (m = 0; f = c[m++];) 0 > g.indexOf(" " + f + " ") && (g += f + " ");
                        g = va(g);
                        e !== g && d.setAttribute("class", g)
                    }
            return this
        },
        removeClass: function(b) {
            var c, d, g, e, f, m, p = 0;
            if (l.isFunction(b)) return this.each(function(c) {
                l(this).removeClass(b.call(this,
                    c, wa(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof b && b)
                for (c = b.match(ba) || []; d = this[p++];)
                    if (e = wa(d), g = 1 === d.nodeType && " " + va(e) + " ") {
                        for (m = 0; f = c[m++];)
                            for (; - 1 < g.indexOf(" " + f + " ");) g = g.replace(" " + f + " ", " ");
                        g = va(g);
                        e !== g && d.setAttribute("class", g)
                    }
            return this
        },
        toggleClass: function(b, c) {
            var d = typeof b;
            return "boolean" == typeof c && "string" === d ? c ? this.addClass(b) : this.removeClass(b) : l.isFunction(b) ? this.each(function(d) {
                l(this).toggleClass(b.call(this, d, wa(this), c),
                    c)
            }) : this.each(function() {
                var c, g, e, f;
                if ("string" === d) {
                    g = 0;
                    e = l(this);
                    for (f = b.match(ba) || []; c = f[g++];) e.hasClass(c) ? e.removeClass(c) : e.addClass(c)
                } else void 0 !== b && "boolean" !== d || (c = wa(this), c && E.set(this, "__className__", c), this.setAttribute && this.setAttribute("class", c || !1 === b ? "" : E.get(this, "__className__") || ""))
            })
        },
        hasClass: function(b) {
            var c, d = 0;
            for (b = " " + b + " "; c = this[d++];)
                if (1 === c.nodeType && -1 < (" " + va(wa(c)) + " ").indexOf(b)) return !0;
            return !1
        }
    });
    var xd = /\r/g;
    l.fn.extend({
        val: function(b) {
            var c, d,
                g, e = this[0];
            if (arguments.length) return g = l.isFunction(b), this.each(function(d) {
                var e;
                1 === this.nodeType && (e = g ? b.call(this, d, l(this).val()) : b, null == e ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = l.map(e, function(b) {
                    return null == b ? "" : b + ""
                })), c = l.valHooks[this.type] || l.valHooks[this.nodeName.toLowerCase()], c && "set" in c && void 0 !== c.set(this, e, "value") || (this.value = e))
            });
            if (e) return c = l.valHooks[e.type] || l.valHooks[e.nodeName.toLowerCase()], c && "get" in c && void 0 !== (d = c.get(e, "value")) ? d : (d = e.value,
                "string" == typeof d ? d.replace(xd, "") : null == d ? "" : d)
        }
    });
    l.extend({
        valHooks: {
            option: {
                get: function(b) {
                    var c = l.find.attr(b, "value");
                    return null != c ? c : va(l.text(b))
                }
            },
            select: {
                get: function(b) {
                    var c, d, g = b.options,
                        e = b.selectedIndex,
                        m = "select-one" === b.type,
                        p = m ? null : [],
                        j = m ? e + 1 : g.length;
                    for (d = 0 > e ? j : m ? e : 0; d < j; d++)
                        if (c = g[d], (c.selected || d === e) && !c.disabled && (!c.parentNode.disabled || !f(c.parentNode, "optgroup"))) {
                            if (b = l(c).val(), m) return b;
                            p.push(b)
                        }
                    return p
                },
                set: function(b, c) {
                    for (var d, g, e = b.options, f = l.makeArray(c),
                            m = e.length; m--;) g = e[m], (g.selected = -1 < l.inArray(l.valHooks.option.get(g), f)) && (d = !0);
                    return d || (b.selectedIndex = -1), f
                }
            }
        }
    });
    l.each(["radio", "checkbox"], function() {
        l.valHooks[this] = {
            set: function(b, c) {
                if (Array.isArray(c)) return b.checked = -1 < l.inArray(l(b).val(), c)
            }
        };
        L.checkOn || (l.valHooks[this].get = function(b) {
            return null === b.getAttribute("value") ? "on" : b.value
        })
    });
    var vc = /^(?:focusinfocus|focusoutblur)$/;
    l.extend(l.event, {
        trigger: function(c, d, g, e) {
            var f, m, p, j, q, s, r, n = [g || A],
                t = Za.call(c, "type") ? c.type :
                c;
            f = Za.call(c, "namespace") ? c.namespace.split(".") : [];
            if (m = p = g = g || A, 3 !== g.nodeType && 8 !== g.nodeType && !vc.test(t + l.event.triggered) && (-1 < t.indexOf(".") && (f = t.split("."), t = f.shift(), f.sort()), q = 0 > t.indexOf(":") && "on" + t, c = c[l.expando] ? c : new l.Event(t, "object" == typeof c && c), c.isTrigger = e ? 2 : 3, c.namespace = f.join("."), c.rnamespace = c.namespace ? RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, c.result = void 0, c.target || (c.target = g), d = null == d ? [c] : l.makeArray(d, [c]), r = l.event.special[t] || {}, e || !r.trigger ||
                    !1 !== r.trigger.apply(g, d))) {
                if (!e && !r.noBubble && !l.isWindow(g)) {
                    j = r.delegateType || t;
                    for (vc.test(j + t) || (m = m.parentNode); m; m = m.parentNode) n.push(m), p = m;
                    p === (g.ownerDocument || A) && n.push(p.defaultView || p.parentWindow || b)
                }
                for (f = 0;
                    (m = n[f++]) && !c.isPropagationStopped();) c.type = 1 < f ? j : r.bindType || t, (s = (E.get(m, "events") || {})[c.type] && E.get(m, "handle")) && s.apply(m, d), (s = q && m[q]) && s.apply && ib(m) && (c.result = s.apply(m, d), !1 === c.result && c.preventDefault());
                return c.type = t, e || c.isDefaultPrevented() || r._default &&
                    !1 !== r._default.apply(n.pop(), d) || !ib(g) || q && l.isFunction(g[t]) && !l.isWindow(g) && (p = g[q], p && (g[q] = null), l.event.triggered = t, g[t](), l.event.triggered = void 0, p && (g[q] = p)), c.result
            }
        },
        simulate: function(b, c, d) {
            b = l.extend(new l.Event, d, {
                type: b,
                isSimulated: !0
            });
            l.event.trigger(b, null, c)
        }
    });
    l.fn.extend({
        trigger: function(b, c) {
            return this.each(function() {
                l.event.trigger(b, c, this)
            })
        },
        triggerHandler: function(b, c) {
            var d = this[0];
            if (d) return l.event.trigger(b, c, d, !0)
        }
    });
    l.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
        function(b, c) {
            l.fn[c] = function(b, d) {
                return 0 < arguments.length ? this.on(c, null, b, d) : this.trigger(c)
            }
        });
    l.fn.extend({
        hover: function(b, c) {
            return this.mouseenter(b).mouseleave(c || b)
        }
    });
    L.focusin = "onfocusin" in b;
    L.focusin || l.each({
        focus: "focusin",
        blur: "focusout"
    }, function(b, c) {
        var d = function(b) {
            l.event.simulate(c, b.target, l.event.fix(b))
        };
        l.event.special[c] = {
            setup: function() {
                var g = this.ownerDocument || this,
                    e = E.access(g, c);
                e || g.addEventListener(b, d, !0);
                E.access(g, c, (e || 0) + 1)
            },
            teardown: function() {
                var g = this.ownerDocument ||
                    this,
                    e = E.access(g, c) - 1;
                e ? E.access(g, c, e) : (g.removeEventListener(b, d, !0), E.remove(g, c))
            }
        }
    });
    var Ta = b.location,
        wc = l.now(),
        Fb = /\?/;
    l.parseXML = function(c) {
        var d;
        if (!c || "string" != typeof c) return null;
        try {
            d = (new b.DOMParser).parseFromString(c, "text/xml")
        } catch (g) {
            d = void 0
        }
        return d && !d.getElementsByTagName("parsererror").length || l.error("Invalid XML: " + c), d
    };
    var Mc = /\[\]$/,
        xc = /\r?\n/g,
        yd = /^(?:submit|button|image|reset|file)$/i,
        zd = /^(?:input|select|textarea|keygen)/i;
    l.param = function(b, c) {
        var d, g = [],
            e = function(b,
                c) {
                var d = l.isFunction(c) ? c() : c;
                g[g.length] = encodeURIComponent(b) + "=" + encodeURIComponent(null == d ? "" : d)
            };
        if (Array.isArray(b) || b.jquery && !l.isPlainObject(b)) l.each(b, function() {
            e(this.name, this.value)
        });
        else
            for (d in b) qb(d, b[d], c, e);
        return g.join("&")
    };
    l.fn.extend({
        serialize: function() {
            return l.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var b = l.prop(this, "elements");
                return b ? l.makeArray(b) : this
            }).filter(function() {
                var b = this.type;
                return this.name && !l(this).is(":disabled") &&
                    zd.test(this.nodeName) && !yd.test(b) && (this.checked || !mc.test(b))
            }).map(function(b, c) {
                var d = l(this).val();
                return null == d ? null : Array.isArray(d) ? l.map(d, function(b) {
                    return {
                        name: c.name,
                        value: b.replace(xc, "\r\n")
                    }
                }) : {
                    name: c.name,
                    value: d.replace(xc, "\r\n")
                }
            }).get()
        }
    });
    var Ad = /%20/g,
        Bd = /#.*$/,
        Cd = /([?&])_=[^&]*/,
        Dd = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ed = /^(?:GET|HEAD)$/,
        Fd = /^\/\//,
        yc = {},
        rb = {},
        zc = "*/".concat("*"),
        Gb = A.createElement("a");
    Gb.href = Ta.href;
    l.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ta.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ta.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": zc,
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
                "text xml": l.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(b, c) {
            return c ? sb(sb(b, l.ajaxSettings), c) : sb(l.ajaxSettings, b)
        },
        ajaxPrefilter: Sb(yc),
        ajaxTransport: Sb(rb),
        ajax: function(c, d) {
            function g(c, d, p, q) {
                var t, n, x, z, I = d;
                if (!s) {
                    s = !0;
                    j && b.clearTimeout(j);
                    e = void 0;
                    m = q || "";
                    K.readyState = 0 < c ? 4 : 0;
                    q = 200 <= c && 300 > c || 304 === c;
                    if (p) {
                        x = u;
                        for (var Ea = K, B, Q, D, A, H = x.contents, G = x.dataTypes;
                            "*" === G[0];) G.shift(), void 0 === B && (B = x.mimeType || Ea.getResponseHeader("Content-Type"));
                        if (B)
                            for (Q in H)
                                if (H[Q] &&
                                    H[Q].test(B)) {
                                    G.unshift(Q);
                                    break
                                }
                        if (G[0] in p) D = G[0];
                        else {
                            for (Q in p) {
                                if (!G[0] || x.converters[Q + " " + G[0]]) {
                                    D = Q;
                                    break
                                }
                                A || (A = Q)
                            }
                            D = D || A
                        }
                        p = D ? (D !== G[0] && G.unshift(D), p[D]) : void 0;
                        x = p
                    }
                    var V;
                    a: {
                        p = u;B = x;Q = K;D = q;
                        var U, J, M;x = {};Ea = p.dataTypes.slice();
                        if (Ea[1])
                            for (U in p.converters) x[U.toLowerCase()] = p.converters[U];
                        for (A = Ea.shift(); A;)
                            if (p.responseFields[A] && (Q[p.responseFields[A]] = B), !M && D && p.dataFilter && (B = p.dataFilter(B, p.dataType)), M = A, A = Ea.shift())
                                if ("*" === A) A = M;
                                else if ("*" !== M && M !== A) {
                            if (U = x[M + " " + A] ||
                                x["* " + A], !U)
                                for (V in x)
                                    if (J = V.split(" "), J[1] === A && (U = x[M + " " + J[0]] || x["* " + J[0]])) {
                                        !0 === U ? U = x[V] : !0 !== x[V] && (A = J[0], Ea.unshift(J[1]));
                                        break
                                    }
                            if (!0 !== U)
                                if (U && p["throws"]) B = U(B);
                                else try {
                                    B = U(B)
                                } catch (L) {
                                    V = {
                                        state: "parsererror",
                                        error: U ? L : "No conversion from " + M + " to " + A
                                    };
                                    break a
                                }
                        }
                        V = {
                            state: "success",
                            data: B
                        }
                    }
                    x = V;
                    q ? (u.ifModified && (z = K.getResponseHeader("Last-Modified"), z && (l.lastModified[f] = z), z = K.getResponseHeader("etag"), z && (l.etag[f] = z)), 204 === c || "HEAD" === u.type ? I = "nocontent" : 304 === c ? I = "notmodified" :
                        (I = x.state, t = x.data, n = x.error, q = !n)) : (n = I, !c && I || (I = "error", 0 > c && (c = 0)));
                    K.status = c;
                    K.statusText = (d || I) + "";
                    q ? F.resolveWith(y, [t, I, K]) : F.rejectWith(y, [K, I, n]);
                    K.statusCode(E);
                    E = void 0;
                    r && C.trigger(q ? "ajaxSuccess" : "ajaxError", [K, u, q ? t : n]);
                    ua.fireWith(y, [K, I]);
                    r && (C.trigger("ajaxComplete", [K, u]), --l.active || l.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof c && (d = c, c = void 0);
            d = d || {};
            var e, f, m, p, j, q, s, r, t, n, u = l.ajaxSetup({}, d),
                y = u.context || u,
                C = u.context && (y.nodeType || y.jquery) ? l(y) : l.event,
                F = l.Deferred(),
                ua = l.Callbacks("once memory"),
                E = u.statusCode || {},
                B = {},
                Q = {},
                D = "canceled",
                K = {
                    readyState: 0,
                    getResponseHeader: function(b) {
                        var c;
                        if (s) {
                            if (!p)
                                for (p = {}; c = Dd.exec(m);) p[c[1].toLowerCase()] = c[2];
                            c = p[b.toLowerCase()]
                        }
                        return null == c ? null : c
                    },
                    getAllResponseHeaders: function() {
                        return s ? m : null
                    },
                    setRequestHeader: function(b, c) {
                        return null == s && (b = Q[b.toLowerCase()] = Q[b.toLowerCase()] || b, B[b] = c), this
                    },
                    overrideMimeType: function(b) {
                        return null == s && (u.mimeType = b), this
                    },
                    statusCode: function(b) {
                        var c;
                        if (b)
                            if (s) K.always(b[K.status]);
                            else
                                for (c in b) E[c] = [E[c], b[c]];
                        return this
                    },
                    abort: function(b) {
                        b = b || D;
                        return e && e.abort(b), g(0, b), this
                    }
                };
            if (F.promise(K), u.url = ((c || u.url || Ta.href) + "").replace(Fd, Ta.protocol + "//"), u.type = d.method || d.type || u.method || u.type, u.dataTypes = (u.dataType || "*").toLowerCase().match(ba) || [""], null == u.crossDomain) {
                q = A.createElement("a");
                try {
                    q.href = u.url, q.href = q.href, u.crossDomain = Gb.protocol + "//" + Gb.host != q.protocol + "//" + q.host
                } catch (H) {
                    u.crossDomain = !0
                }
            }
            if (u.data && u.processData && "string" != typeof u.data && (u.data =
                    l.param(u.data, u.traditional)), Tb(yc, u, d, K), s) return K;
            (r = l.event && u.global) && 0 === l.active++ && l.event.trigger("ajaxStart");
            u.type = u.type.toUpperCase();
            u.hasContent = !Ed.test(u.type);
            f = u.url.replace(Bd, "");
            u.hasContent ? u.data && u.processData && 0 === (u.contentType || "").indexOf("application/x-www-form-urlencoded") && (u.data = u.data.replace(Ad, "+")) : (n = u.url.slice(f.length), u.data && (f += (Fb.test(f) ? "&" : "?") + u.data, delete u.data), !1 === u.cache && (f = f.replace(Cd, "$1"), n = (Fb.test(f) ? "&" : "?") + "_=" + wc++ + n), u.url =
                f + n);
            u.ifModified && (l.lastModified[f] && K.setRequestHeader("If-Modified-Since", l.lastModified[f]), l.etag[f] && K.setRequestHeader("If-None-Match", l.etag[f]));
            (u.data && u.hasContent && !1 !== u.contentType || d.contentType) && K.setRequestHeader("Content-Type", u.contentType);
            K.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + zc + "; q=0.01" : "") : u.accepts["*"]);
            for (t in u.headers) K.setRequestHeader(t, u.headers[t]);
            if (u.beforeSend && (!1 === u.beforeSend.call(y,
                    K, u) || s)) return K.abort();
            if (D = "abort", ua.add(u.complete), K.done(u.success), K.fail(u.error), e = Tb(rb, u, d, K)) {
                if (K.readyState = 1, r && C.trigger("ajaxSend", [K, u]), s) return K;
                u.async && 0 < u.timeout && (j = b.setTimeout(function() {
                    K.abort("timeout")
                }, u.timeout));
                try {
                    s = !1, e.send(B, g)
                } catch (G) {
                    if (s) throw G;
                    g(-1, G)
                }
            } else g(-1, "No Transport");
            return K
        },
        getJSON: function(b, c, d) {
            return l.get(b, c, d, "json")
        },
        getScript: function(b, c) {
            return l.get(b, void 0, c, "script")
        }
    });
    l.each(["get", "post"], function(b, c) {
        l[c] = function(b,
            d, g, e) {
            return l.isFunction(d) && (e = e || g, g = d, d = void 0), l.ajax(l.extend({
                url: b,
                type: c,
                dataType: e,
                data: d,
                success: g
            }, l.isPlainObject(b) && b))
        }
    });
    l._evalUrl = function(b) {
        return l.ajax({
            url: b,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    };
    l.fn.extend({
        wrapAll: function(b) {
            var c;
            return this[0] && (l.isFunction(b) && (b = b.call(this[0])), c = l(b, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && c.insertBefore(this[0]), c.map(function() {
                for (var b = this; b.firstElementChild;) b = b.firstElementChild;
                return b
            }).append(this)), this
        },
        wrapInner: function(b) {
            return l.isFunction(b) ? this.each(function(c) {
                l(this).wrapInner(b.call(this, c))
            }) : this.each(function() {
                var c = l(this),
                    d = c.contents();
                d.length ? d.wrapAll(b) : c.append(b)
            })
        },
        wrap: function(b) {
            var c = l.isFunction(b);
            return this.each(function(d) {
                l(this).wrapAll(c ? b.call(this, d) : b)
            })
        },
        unwrap: function(b) {
            return this.parent(b).not("body").each(function() {
                l(this).replaceWith(this.childNodes)
            }), this
        }
    });
    l.expr.pseudos.hidden = function(b) {
        return !l.expr.pseudos.visible(b)
    };
    l.expr.pseudos.visible = function(b) {
        return !(!b.offsetWidth && !b.offsetHeight && !b.getClientRects().length)
    };
    l.ajaxSettings.xhr = function() {
        try {
            return new b.XMLHttpRequest
        } catch (c) {}
    };
    var Gd = {
            "0": 200,
            1223: 204
        },
        Ua = l.ajaxSettings.xhr();
    L.cors = !!Ua && "withCredentials" in Ua;
    L.ajax = Ua = !!Ua;
    l.ajaxTransport(function(c) {
        var d, g;
        if (L.cors || Ua && !c.crossDomain) return {
            send: function(e, f) {
                var m, p = c.xhr();
                if (p.open(c.type, c.url, c.async, c.username, c.password), c.xhrFields)
                    for (m in c.xhrFields) p[m] = c.xhrFields[m];
                c.mimeType &&
                    p.overrideMimeType && p.overrideMimeType(c.mimeType);
                c.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                for (m in e) p.setRequestHeader(m, e[m]);
                d = function(b) {
                    return function() {
                        d && (d = g = p.onload = p.onerror = p.onabort = p.onreadystatechange = null, "abort" === b ? p.abort() : "error" === b ? "number" != typeof p.status ? f(0, "error") : f(p.status, p.statusText) : f(Gd[p.status] || p.status, p.statusText, "text" !== (p.responseType || "text") || "string" != typeof p.responseText ? {
                                binary: p.response
                            } : {
                                text: p.responseText
                            },
                            p.getAllResponseHeaders()))
                    }
                };
                p.onload = d();
                g = p.onerror = d("error");
                void 0 !== p.onabort ? p.onabort = g : p.onreadystatechange = function() {
                    4 === p.readyState && b.setTimeout(function() {
                        d && g()
                    })
                };
                d = d("abort");
                try {
                    p.send(c.hasContent && c.data || null)
                } catch (l) {
                    if (d) throw l;
                }
            },
            abort: function() {
                d && d()
            }
        }
    });
    l.ajaxPrefilter(function(b) {
        b.crossDomain && (b.contents.script = !1)
    });
    l.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(b) {
                return l.globalEval(b), b
            }
        }
    });
    l.ajaxPrefilter("script", function(b) {
        void 0 === b.cache && (b.cache = !1);
        b.crossDomain && (b.type = "GET")
    });
    l.ajaxTransport("script", function(b) {
        if (b.crossDomain) {
            var c, d;
            return {
                send: function(g, e) {
                    c = l("<script>").prop({
                        charset: b.scriptCharset,
                        src: b.url
                    }).on("load error", d = function(b) {
                        c.remove();
                        d = null;
                        b && e("error" === b.type ? 404 : 200, b.type)
                    });
                    A.head.appendChild(c[0])
                },
                abort: function() {
                    d && d()
                }
            }
        }
    });
    var Ac = [],
        Hb = /(=)\?(?=&|$)|\?\?/;
    l.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var b = Ac.pop() || l.expando + "_" + wc++;
            return this[b] = !0, b
        }
    });
    l.ajaxPrefilter("json jsonp", function(c, d, g) {
        var e, f, m, p = !1 !== c.jsonp && (Hb.test(c.url) ? "url" : "string" == typeof c.data && 0 === (c.contentType || "").indexOf("application/x-www-form-urlencoded") && Hb.test(c.data) && "data");
        if (p || "jsonp" === c.dataTypes[0]) return e = c.jsonpCallback = l.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, p ? c[p] = c[p].replace(Hb, "$1" + e) : !1 !== c.jsonp && (c.url += (Fb.test(c.url) ? "&" : "?") + c.jsonp +
            "=" + e), c.converters["script json"] = function() {
            return m || l.error(e + " was not called"), m[0]
        }, c.dataTypes[0] = "json", f = b[e], b[e] = function() {
            m = arguments
        }, g.always(function() {
            void 0 === f ? l(b).removeProp(e) : b[e] = f;
            c[e] && (c.jsonpCallback = d.jsonpCallback, Ac.push(e));
            m && l.isFunction(f) && f(m[0]);
            m = f = void 0
        }), "script"
    });
    var Hd = L,
        Bc, Cc = A.implementation.createHTMLDocument("").body;
    Bc = (Cc.innerHTML = "<form></form><form></form>", 2 === Cc.childNodes.length);
    Hd.createHTMLDocument = Bc;
    l.parseHTML = function(b, c, d) {
        if ("string" !=
            typeof b) return [];
        "boolean" == typeof c && (d = c, c = !1);
        var g, e, f;
        return c || (L.createHTMLDocument ? (c = A.implementation.createHTMLDocument(""), g = c.createElement("base"), g.href = A.location.href, c.head.appendChild(g)) : c = A), e = ic.exec(b), f = !d && [], e ? [c.createElement(e[1])] : (e = F([b], c, f), f && f.length && l(f).remove(), l.merge([], e.childNodes))
    };
    l.fn.load = function(b, c, d) {
        var g, e, f, m = this,
            p = b.indexOf(" ");
        return -1 < p && (g = va(b.slice(p)), b = b.slice(0, p)), l.isFunction(c) ? (d = c, c = void 0) : c && "object" == typeof c && (e = "POST"), 0 <
            m.length && l.ajax({
                url: b,
                type: e || "GET",
                dataType: "html",
                data: c
            }).done(function(b) {
                f = arguments;
                m.html(g ? l("<div>").append(l.parseHTML(b)).find(g) : b)
            }).always(d && function(b, c) {
                m.each(function() {
                    d.apply(this, f || [b.responseText, c, b])
                })
            }), this
    };
    l.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(b, c) {
        l.fn[c] = function(b) {
            return this.on(c, b)
        }
    });
    l.expr.pseudos.animated = function(b) {
        return l.grep(l.timers, function(c) {
            return b === c.elem
        }).length
    };
    l.offset = {
        setOffset: function(b,
            c, d) {
            var g, e, f, m, p, q, j = l.css(b, "position"),
                s = l(b),
                r = {};
            "static" === j && (b.style.position = "relative");
            p = s.offset();
            f = l.css(b, "top");
            q = l.css(b, "left");
            ("absolute" === j || "fixed" === j) && -1 < (f + q).indexOf("auto") ? (g = s.position(), m = g.top, e = g.left) : (m = parseFloat(f) || 0, e = parseFloat(q) || 0);
            l.isFunction(c) && (c = c.call(b, d, l.extend({}, p)));
            null != c.top && (r.top = c.top - p.top + m);
            null != c.left && (r.left = c.left - p.left + e);
            "using" in c ? c.using.call(b, r) : s.css(r)
        }
    };
    l.fn.extend({
        offset: function(b) {
            if (arguments.length) return void 0 ===
                b ? this : this.each(function(c) {
                    l.offset.setOffset(this, b, c)
                });
            var c, d, g, e, f = this[0];
            if (f) return f.getClientRects().length ? (g = f.getBoundingClientRect(), c = f.ownerDocument, d = c.documentElement, e = c.defaultView, {
                top: g.top + e.pageYOffset - d.clientTop,
                left: g.left + e.pageXOffset - d.clientLeft
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
                return "fixed" === l.css(d, "position") ? c = d.getBoundingClientRect() : (b = this.offsetParent(), c = this.offset(), f(b[0], "html") || (g = b.offset()), g = {
                    top: g.top +
                        l.css(b[0], "borderTopWidth", !0),
                    left: g.left + l.css(b[0], "borderLeftWidth", !0)
                }), {
                    top: c.top - g.top - l.css(d, "marginTop", !0),
                    left: c.left - g.left - l.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var b = this.offsetParent; b && "static" === l.css(b, "position");) b = b.offsetParent;
                return b || lb
            })
        }
    });
    l.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, c) {
        var d = "pageYOffset" === c;
        l.fn[b] = function(g) {
            return oa(this, function(b, g, e) {
                var f;
                return l.isWindow(b) ? f = b : 9 === b.nodeType &&
                    (f = b.defaultView), void 0 === e ? f ? f[c] : b[g] : void(f ? f.scrollTo(d ? f.pageXOffset : e, d ? e : f.pageYOffset) : b[g] = e)
            }, b, g, arguments.length)
        }
    });
    l.each(["top", "left"], function(b, c) {
        l.cssHooks[c] = Ob(L.pixelPosition, function(b, d) {
            if (d) return d = Oa(b, c), pb.test(d) ? l(b).position()[c] + "px" : d
        })
    });
    l.each({
        Height: "height",
        Width: "width"
    }, function(b, c) {
        l.each({
            padding: "inner" + b,
            content: c,
            "": "outer" + b
        }, function(d, g) {
            l.fn[g] = function(e, f) {
                var m = arguments.length && (d || "boolean" != typeof e),
                    p = d || (!0 === e || !0 === f ? "margin" : "border");
                return oa(this, function(c, d, e) {
                    var f;
                    return l.isWindow(c) ? 0 === g.indexOf("outer") ? c["inner" + b] : c.document.documentElement["client" + b] : 9 === c.nodeType ? (f = c.documentElement, Math.max(c.body["scroll" + b], f["scroll" + b], c.body["offset" + b], f["offset" + b], f["client" + b])) : void 0 === e ? l.css(c, d, p) : l.style(c, d, e, p)
                }, c, m ? e : void 0, m)
            }
        })
    });
    l.fn.extend({
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
    l.holdReady = function(b) {
        b ? l.readyWait++ : l.ready(!0)
    };
    l.isArray = Array.isArray;
    l.parseJSON = JSON.parse;
    l.nodeName = f;
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return l
    });
    var Id = b.jQuery,
        Jd = b.$;
    return l.noConflict = function(c) {
        return b.$ === l && (b.$ = Jd), c && b.jQuery === l && (b.jQuery = Id), l
    }, c || (b.jQuery = b.$ = l), l
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
                    for (var n = 0, r = c[f].m.length; n < r; n++)
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
            d.ctx || r();
            if ("undefined" !== typeof b && 0 <= b && 1 >= b) {
                d._volume = b;
                if (d._muted) return d;
                d.usingWebAudio && d.masterGain.gain.setValueAtTime(b, c.ctx.currentTime);
                for (var e = 0; e < d._howls.length; e++)
                    if (!d._howls[e]._webAudio)
                        for (var f = d._howls[e]._getSoundIds(), j = 0; j < f.length; j++) {
                            var t = d._howls[e]._soundById(f[j]);
                            t && t._node && (t._node.volume = t._volume * b)
                        }
                return d
            }
            return d._volume
        },
        mute: function(b) {
            var d = this || c;
            d.ctx || r();
            d._muted = b;
            d.usingWebAudio && d.masterGain.gain.setValueAtTime(b ? 0 : d._volume, c.ctx.currentTime);
            for (var e = 0; e < d._howls.length; e++)
                if (!d._howls[e]._webAudio)
                    for (var f = d._howls[e]._getSoundIds(),
                            j = 0; j < f.length; j++) {
                        var t = d._howls[e]._soundById(f[j]);
                        t && t._node && (t._node.muted = b ? !0 : t._muted)
                    }
            return d
        },
        unload: function() {
            for (var b = this || c, d = b._howls.length - 1; 0 <= d; d--) b._howls[d].unload();
            b.usingWebAudio && (b.ctx && "undefined" !== typeof b.ctx.close) && (b.ctx.close(), b.ctx = null, r());
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
                j = b._navigator && b._navigator.userAgent.match(/OPR\/([0-6].)/g),
                j = j && 33 > parseInt(j[0].split("/")[1],
                    10);
            b._codecs = {
                mp3: !(j || !f && !d.canPlayType("audio/mp3;").replace(/^no$/, "")),
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
                d = /iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi|Chrome/i.test(b._navigator && b._navigator.userAgent);
            if (!b._mobileEnabled && b.ctx && d) {
                b._mobileEnabled = !1;
                b.mobileAutoEnable = !1;
                !b._mobileUnloaded && 44100 !== b.ctx.sampleRate && (b._mobileUnloaded = !0, b.unload());
                b._scratchBuffer = b.ctx.createBuffer(1, 1, 22050);
                var e = function() {
                    c._autoResume();
                    var d = b.ctx.createBufferSource();
                    d.buffer = b._scratchBuffer;
                    d.connect(b.ctx.destination);
                    "undefined" === typeof d.start ?
                        d.noteOn(0) : d.start(0);
                    "function" === typeof b.ctx.resume && b.ctx.resume();
                    d.onended = function() {
                        d.disconnect(0);
                        b._mobileEnabled = !0;
                        document.removeEventListener("touchstart", e, !0);
                        document.removeEventListener("touchend", e, !0);
                        document.removeEventListener("click", e, !0);
                        for (var c = 0; c < b._howls.length; c++) b._howls[c]._emit("unlock")
                    }
                };
                document.addEventListener("touchstart", e, !0);
                document.addEventListener("touchend", e, !0);
                document.addEventListener("click", e, !0);
                return b
            }
        },
        _autoSuspend: function() {
            var b = this;
            if (b.autoSuspend && b.ctx && "undefined" !== typeof b.ctx.suspend && c.usingWebAudio) {
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
            var b = this;
            if (b.ctx && "undefined" !== typeof b.ctx.resume && c.usingWebAudio) return "running" === b.state && b._suspendTimer ? (clearTimeout(b._suspendTimer), b._suspendTimer = null) : "suspended" === b.state ? (b.ctx.resume().then(function() {
                b.state = "running";
                for (var c = 0; c < b._howls.length; c++) b._howls[c]._emit("resume")
            }), b._suspendTimer && (clearTimeout(b._suspendTimer), b._suspendTimer = null)) : "suspending" === b.state && (b._resumeAfterSuspend = !0), b
        }
    };
    var c = new b,
        d = function(b) {
            !b.src || 0 === b.src.length ?
                console.error("An array of source files must be passed with any new Howl.") : this.init(b)
        };
    d.prototype = {
        init: function(b) {
            var d = this;
            c.ctx || r();
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
            d._xhrWithCredentials =
                b.xhrWithCredentials || !1;
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
            d._onunlock = b.onunlock ? [{
                fn: b.onunlock
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
                "string" === typeof this._src &&
                    (this._src = [this._src]);
                for (var d = 0; d < this._src.length; d++) {
                    var m, q;
                    if (this._format && this._format[d]) m = this._format[d];
                    else {
                        q = this._src[d];
                        if ("string" !== typeof q) {
                            this._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                            continue
                        }(m = /^data:audio\/([^;,]+);/i.exec(q)) || (m = /\.([^.]+)$/.exec(q.split("?", 1)[0]));
                        m && (m = m[1].toLowerCase())
                    }
                    m || console.warn('No file extension was found. Consider using the "format" property or specify an extension.');
                    if (m && c.codecs(m)) {
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
                        var s = this,
                            r = s._src;
                        if (f[r]) s._duration = f[r].duration, n(s);
                        else if (/^data:[^;]+;base64,/.test(r)) {
                            b = atob(r.split(",")[1]);
                            d = new Uint8Array(b.length);
                            for (m = 0; m < b.length; ++m) d[m] = b.charCodeAt(m);
                            j(d.buffer, s)
                        } else {
                            var u = new XMLHttpRequest;
                            u.open("GET", r, !0);
                            u.withCredentials = s._xhrWithCredentials;
                            u.responseType = "arraybuffer";
                            u.onload =
                                function() {
                                    var b = (u.status + "")[0];
                                    "0" !== b && "2" !== b && "3" !== b ? s._emit("loaderror", null, "Failed loading audio file with status: " + u.status + ".") : j(u.response, s)
                                };
                            u.onerror = function() {
                                s._webAudio && (s._html5 = !0, s._webAudio = !1, s._sounds = [], delete f[r], s.load())
                            };
                            try {
                                u.send()
                            } catch (y) {
                                u.onerror()
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
                if ("string" === typeof b && "loaded" === e._state &&
                    !e._sprite[b]) return null;
                if ("undefined" === typeof b) {
                    b = "__default";
                    for (var j = 0, r = 0; r < e._sounds.length; r++) e._sounds[r]._paused && !e._sounds[r]._ended && (j++, f = e._sounds[r]._id);
                    1 === j ? b = null : f = null
                }
            }
            var n = f ? e._soundById(f) : e._inactiveSound();
            if (!n) return null;
            f && !b && (b = n._sprite || "__default");
            if ("loaded" !== e._state) {
                n._sprite = b;
                n._ended = !1;
                var y = n._id;
                e._queue.push({
                    event: "play",
                    action: function() {
                        e.play(y)
                    }
                });
                return y
            }
            if (f && !n._paused) return d || e._loadQueue("play"), n._id;
            e._webAudio && c._autoResume();
            var C = Math.max(0, 0 < n._seek ? n._seek : e._sprite[b][0] / 1E3),
                F = Math.max(0, (e._sprite[b][0] + e._sprite[b][1]) / 1E3 - C),
                Q = 1E3 * F / Math.abs(n._rate);
            n._paused = !1;
            n._ended = !1;
            n._sprite = b;
            n._seek = C;
            n._start = e._sprite[b][0] / 1E3;
            n._stop = (e._sprite[b][0] + e._sprite[b][1]) / 1E3;
            n._loop = !(!n._loop && !e._sprite[b][2]);
            if (n._seek >= n._stop) e._ended(n);
            else {
                var B = n._node;
                if (e._webAudio) f = function() {
                    e._refreshBuffer(n);
                    B.gain.setValueAtTime(n._muted || e._muted ? 0 : n._volume, c.ctx.currentTime);
                    n._playStart = c.ctx.currentTime;
                    "undefined" ===
                    typeof B.bufferSource.start ? n._loop ? B.bufferSource.noteGrainOn(0, C, 86400) : B.bufferSource.noteGrainOn(0, C, F) : n._loop ? B.bufferSource.start(0, C, 86400) : B.bufferSource.start(0, C, F);
                    Infinity !== Q && (e._endTimers[n._id] = setTimeout(e._ended.bind(e, n), Q));
                    d || setTimeout(function() {
                        e._emit("play", n._id)
                    }, 0)
                }, "running" === c.state ? f() : (e.once("resume", f), e._clearTimer(n._id));
                else {
                    var Na = function() {
                            B.currentTime = C;
                            B.muted = n._muted || e._muted || c._muted || B.muted;
                            B.volume = n._volume * c.volume();
                            B.playbackRate = n._rate;
                            try {
                                var f = B.play();
                                f && "undefined" !== typeof Promise && (f instanceof Promise || "function" === typeof f.then) ? (e._playLock = !0, f.then(function() {
                                    e._playLock = !1;
                                    d || e._emit("play", n._id)
                                }).catch(function() {
                                    e._playLock = !1;
                                    e._emit("playerror", n._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.")
                                })) : d || e._emit("play", n._id);
                                B.playbackRate = n._rate;
                                B.paused ? e._emit("playerror", n._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.") :
                                    "__default" !== b || n._loop ? e._endTimers[n._id] = setTimeout(e._ended.bind(e, n), Q) : (e._endTimers[n._id] = function() {
                                        e._ended(n);
                                        B.removeEventListener("ended", e._endTimers[n._id], !1)
                                    }, B.addEventListener("ended", e._endTimers[n._id], !1))
                            } catch (j) {
                                e._emit("playerror", n._id, j)
                            }
                        },
                        f = window && window.ejecta || !B.readyState && c._navigator.isCocoonJS;
                    if (3 <= B.readyState || f) Na();
                    else {
                        var Fa = function() {
                            Na();
                            B.removeEventListener(c._canPlayEvent, Fa, !1)
                        };
                        B.addEventListener(c._canPlayEvent, Fa, !1);
                        e._clearTimer(n._id)
                    }
                }
                return n._id
            }
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
                var j = d._soundById(e[f]);
                if (j && !j._paused && (j._seek = d.seek(e[f]), j._rateSeek = 0, j._paused = !0, d._stopFade(e[f]), j._node))
                    if (d._webAudio) {
                        if (!j._node.bufferSource) continue;
                        "undefined" === typeof j._node.bufferSource.stop ? j._node.bufferSource.noteOff(0) : j._node.bufferSource.stop(0);
                        d._cleanBuffer(j._node)
                    } else(!isNaN(j._node.duration) ||
                        Infinity === j._node.duration) && j._node.pause();
                c || d._emit("pause", j ? j._id : null)
            }
            return d
        },
        stop: function(b, c) {
            var d = this;
            if ("loaded" !== d._state || d._playLock) return d._queue.push({
                event: "stop",
                action: function() {
                    d.stop(b)
                }
            }), d;
            for (var e = d._getSoundIds(b), f = 0; f < e.length; f++) {
                d._clearTimer(e[f]);
                var j = d._soundById(e[f]);
                if (j) {
                    j._seek = j._start || 0;
                    j._rateSeek = 0;
                    j._paused = !0;
                    j._ended = !0;
                    d._stopFade(e[f]);
                    if (j._node)
                        if (d._webAudio) j._node.bufferSource && ("undefined" === typeof j._node.bufferSource.stop ? j._node.bufferSource.noteOff(0) :
                            j._node.bufferSource.stop(0), d._cleanBuffer(j._node));
                        else if (!isNaN(j._node.duration) || Infinity === j._node.duration) j._node.currentTime = j._start || 0, j._node.pause();
                    c || d._emit("stop", j._id)
                }
            }
            return d
        },
        mute: function(b, d) {
            var e = this;
            if ("loaded" !== e._state || e._playLock) return e._queue.push({
                event: "mute",
                action: function() {
                    e.mute(b, d)
                }
            }), e;
            if ("undefined" === typeof d)
                if ("boolean" === typeof b) e._muted = b;
                else return e._muted;
            for (var f = e._getSoundIds(d), j = 0; j < f.length; j++) {
                var n = e._soundById(f[j]);
                n && (n._muted =
                    b, n._interval && e._stopFade(n._id), e._webAudio && n._node ? n._node.gain.setValueAtTime(b ? 0 : n._volume, c.ctx.currentTime) : n._node && (n._node.muted = c._muted ? !0 : b), e._emit("mute", n._id))
            }
            return e
        },
        volume: function() {
            var b = this,
                d = arguments,
                e, f;
            if (0 === d.length) return b._volume;
            1 === d.length || 2 === d.length && "undefined" === typeof d[1] ? 0 <= b._getSoundIds().indexOf(d[0]) ? f = parseInt(d[0], 10) : e = parseFloat(d[0]) : 2 <= d.length && (e = parseFloat(d[0]), f = parseInt(d[1], 10));
            var j;
            if ("undefined" !== typeof e && 0 <= e && 1 >= e) {
                if ("loaded" !==
                    b._state || b._playLock) return b._queue.push({
                    event: "volume",
                    action: function() {
                        b.volume.apply(b, d)
                    }
                }), b;
                "undefined" === typeof f && (b._volume = e);
                f = b._getSoundIds(f);
                for (var n = 0; n < f.length; n++)
                    if (j = b._soundById(f[n])) j._volume = e, d[2] || b._stopFade(f[n]), b._webAudio && j._node && !j._muted ? j._node.gain.setValueAtTime(e, c.ctx.currentTime) : j._node && !j._muted && (j._node.volume = e * c.volume()), b._emit("volume", j._id)
            } else return (j = f ? b._soundById(f) : b._sounds[0]) ? j._volume : 0;
            return b
        },
        fade: function(b, d, e, f) {
            var j = this;
            if ("loaded" !== j._state || j._playLock) return j._queue.push({
                event: "fade",
                action: function() {
                    j.fade(b, d, e, f)
                }
            }), j;
            j.volume(b, f);
            for (var n = j._getSoundIds(f), r = 0; r < n.length; r++) {
                var y = j._soundById(n[r]);
                if (y) {
                    f || j._stopFade(n[r]);
                    if (j._webAudio && !y._muted) {
                        var C = c.ctx.currentTime,
                            F = C + e / 1E3;
                        y._volume = b;
                        y._node.gain.setValueAtTime(b, C);
                        y._node.gain.linearRampToValueAtTime(d, F)
                    }
                    j._startFadeInterval(y, b, d, e, n[r], "undefined" === typeof f)
                }
            }
            return j
        },
        _startFadeInterval: function(b, c, d, e, f, j) {
            var n = this,
                r = c,
                C = d -
                c;
            f = Math.abs(C / 0.01);
            f = Math.max(4, 0 < f ? e / f : e);
            var F = Date.now();
            b._fadeTo = d;
            b._interval = setInterval(function() {
                var f = (Date.now() - F) / e;
                F = Date.now();
                r += C * f;
                r = Math.max(0, r);
                r = Math.min(1, r);
                r = Math.round(100 * r) / 100;
                n._webAudio ? b._volume = r : n.volume(r, b._id, !0);
                j && (n._volume = r);
                if (d < c && r <= d || d > c && r >= d) clearInterval(b._interval), b._interval = null, b._fadeTo = null, n.volume(d, b._id), n._emit("fade", b._id)
            }, f)
        },
        _stopFade: function(b) {
            var d = this._soundById(b);
            d && d._interval && (this._webAudio && d._node.gain.cancelScheduledValues(c.ctx.currentTime),
                clearInterval(d._interval), d._interval = null, this.volume(d._fadeTo, b), d._fadeTo = null, this._emit("fade", b));
            return this
        },
        loop: function() {
            var b = arguments,
                c, d;
            if (0 === b.length) return this._loop;
            if (1 === b.length)
                if ("boolean" === typeof b[0]) this._loop = c = b[0];
                else return (b = this._soundById(parseInt(b[0], 10))) ? b._loop : !1;
            else 2 === b.length && (c = b[0], d = parseInt(b[1], 10));
            d = this._getSoundIds(d);
            for (var e = 0; e < d.length; e++)
                if (b = this._soundById(d[e]))
                    if (b._loop = c, this._webAudio && (b._node && b._node.bufferSource) && (b._node.bufferSource.loop =
                            c)) b._node.bufferSource.loopStart = b._start || 0, b._node.bufferSource.loopEnd = b._stop;
            return this
        },
        rate: function() {
            var b = this,
                d = arguments,
                e, f;
            0 === d.length ? f = b._sounds[0]._id : 1 === d.length ? 0 <= b._getSoundIds().indexOf(d[0]) ? f = parseInt(d[0], 10) : e = parseFloat(d[0]) : 2 === d.length && (e = parseFloat(d[0]), f = parseInt(d[1], 10));
            var j;
            if ("number" === typeof e) {
                if ("loaded" !== b._state || b._playLock) return b._queue.push({
                    event: "rate",
                    action: function() {
                        b.rate.apply(b, d)
                    }
                }), b;
                "undefined" === typeof f && (b._rate = e);
                f = b._getSoundIds(f);
                for (var n = 0; n < f.length; n++)
                    if (j = b._soundById(f[n])) {
                        j._rateSeek = b.seek(f[n]);
                        j._playStart = b._webAudio ? c.ctx.currentTime : j._playStart;
                        j._rate = e;
                        b._webAudio && j._node && j._node.bufferSource ? j._node.bufferSource.playbackRate.setValueAtTime(e, c.ctx.currentTime) : j._node && (j._node.playbackRate = e);
                        var r = b.seek(f[n]),
                            r = 1E3 * ((b._sprite[j._sprite][0] + b._sprite[j._sprite][1]) / 1E3 - r) / Math.abs(j._rate);
                        if (b._endTimers[f[n]] || !j._paused) b._clearTimer(f[n]), b._endTimers[f[n]] = setTimeout(b._ended.bind(b, j), r);
                        b._emit("rate",
                            j._id)
                    }
            } else return (j = b._soundById(f)) ? j._rate : b._rate;
            return b
        },
        seek: function() {
            var b = this,
                d = arguments,
                e, f;
            0 === d.length ? f = b._sounds[0]._id : 1 === d.length ? 0 <= b._getSoundIds().indexOf(d[0]) ? f = parseInt(d[0], 10) : b._sounds.length && (f = b._sounds[0]._id, e = parseFloat(d[0])) : 2 === d.length && (e = parseFloat(d[0]), f = parseInt(d[1], 10));
            if ("undefined" === typeof f) return b;
            if ("loaded" !== b._state || b._playLock) return b._queue.push({
                event: "seek",
                action: function() {
                    b.seek.apply(b, d)
                }
            }), b;
            var j = b._soundById(f);
            if (j)
                if ("number" ===
                    typeof e && 0 <= e) {
                    var n = b.playing(f);
                    n && b.pause(f, !0);
                    j._seek = e;
                    j._ended = !1;
                    b._clearTimer(f);
                    !b._webAudio && j._node && (j._node.currentTime = e);
                    var r = function() {
                        b._emit("seek", f);
                        n && b.play(f, !0)
                    };
                    if (n && !b._webAudio) {
                        var y = function() {
                            b._playLock ? setTimeout(y, 0) : r()
                        };
                        setTimeout(y, 0)
                    } else r()
                } else return b._webAudio ? (e = b.playing(f) ? c.ctx.currentTime - j._playStart : 0, j._seek + ((j._rateSeek ? j._rateSeek - j._seek : 0) + e * Math.abs(j._rate))) : j._node.currentTime;
            return b
        },
        playing: function(b) {
            if ("number" === typeof b) return (b =
                this._soundById(b)) ? !b._paused : !1;
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
            for (var b = this._sounds, d = 0; d < b.length; d++) b[d]._paused || this.stop(b[d]._id), this._webAudio || (/MSIE |Trident\//.test(c._navigator && c._navigator.userAgent) || (b[d]._node.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"),
                b[d]._node.removeEventListener("error", b[d]._errorFn, !1), b[d]._node.removeEventListener(c._canPlayEvent, b[d]._loadFn, !1)), delete b[d]._node, this._clearTimer(b[d]._id);
            d = c._howls.indexOf(this);
            0 <= d && c._howls.splice(d, 1);
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
                    b.call(this,
                        c, d)
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
            if (!this._webAudio && b._node && !b._node.paused && !b._node.ended && b._node.currentTime < b._stop) return setTimeout(this._ended.bind(this, b), 100), this;
            d = !(!b._loop && !this._sprite[d][2]);
            this._emit("end", b._id);
            !this._webAudio &&
                d && this.stop(b._id, !0).play(b._id);
            if (this._webAudio && d) {
                this._emit("play", b._id);
                b._seek = b._start || 0;
                b._rateSeek = 0;
                b._playStart = c.ctx.currentTime;
                var e = 1E3 * (b._stop - b._start) / Math.abs(b._rate);
                this._endTimers[b._id] = setTimeout(this._ended.bind(this, b), e)
            }
            this._webAudio && !d && (b._paused = !0, b._ended = !0, b._seek = b._start || 0, b._rateSeek = 0, this._clearTimer(b._id), this._cleanBuffer(b._node), c._autoSuspend());
            !this._webAudio && !d && this.stop(b._id, !0);
            return this
        },
        _clearTimer: function(b) {
            if (this._endTimers[b]) {
                if ("function" !==
                    typeof this._endTimers[b]) clearTimeout(this._endTimers[b]);
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
            var b =
                this._pool,
                c = 0,
                d = 0;
            if (!(this._sounds.length < b)) {
                for (d = 0; d < this._sounds.length; d++) this._sounds[d]._ended && c++;
                for (d = this._sounds.length - 1; 0 <= d && !(c <= b); d--) this._sounds[d]._ended && (this._webAudio && this._sounds[d]._node && this._sounds[d]._node.disconnect(0), this._sounds.splice(d, 1), c--)
            }
        },
        _getSoundIds: function(b) {
            if ("undefined" === typeof b) {
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
            if (b._node.bufferSource.loop = b._loop) b._node.bufferSource.loopStart = b._start || 0, b._node.bufferSource.loopEnd = b._stop || 0;
            b._node.bufferSource.playbackRate.setValueAtTime(b._rate, c.ctx.currentTime);
            return this
        },
        _cleanBuffer: function(b) {
            if (c._scratchBuffer && b.bufferSource) {
                b.bufferSource.onended = null;
                b.bufferSource.disconnect(0);
                try {
                    b.bufferSource.buffer = c._scratchBuffer
                } catch (d) {}
            }
            b.bufferSource =
                null;
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
            b._webAudio ? (this._node = "undefined" === typeof c.ctx.createGain ? c.ctx.createGainNode() :
                c.ctx.createGain(), this._node.gain.setValueAtTime(d, c.ctx.currentTime), this._node.paused = !0, this._node.connect(c.masterGain)) : (this._node = new Audio, this._errorFn = this._errorListener.bind(this), this._node.addEventListener("error", this._errorFn, !1), this._loadFn = this._loadListener.bind(this), this._node.addEventListener(c._canPlayEvent, this._loadFn, !1), this._node.src = b._src, this._node.preload = "auto", this._node.volume = d * c.volume(), this._node.load());
            return this
        },
        reset: function() {
            var b = this._parent;
            this._muted =
                b._muted;
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
            this._node.removeEventListener("error", this._errorFn, !1)
        },
        _loadListener: function() {
            var b = this._parent;
            b._duration = Math.ceil(10 * this._node.duration) / 10;
            0 === Object.keys(b._sprite).length && (b._sprite = {
                __default: [0,
                    1E3 * b._duration
                ]
            });
            "loaded" !== b._state && (b._state = "loaded", b._emit("load"), b._loadQueue());
            this._node.removeEventListener(c._canPlayEvent, this._loadFn, !1)
        }
    };
    var f = {},
        j = function(b, d) {
            var e = function() {
                    d._emit("loaderror", null, "Decoding audio data failed.")
                },
                j = function(b) {
                    b && 0 < d._sounds.length ? (f[d._src] = b, n(d, b)) : e()
                };
            "undefined" !== typeof Promise && 1 === c.ctx.decodeAudioData.length ? c.ctx.decodeAudioData(b).then(j).catch(e) : c.ctx.decodeAudioData(b, j, e)
        },
        n = function(b, c) {
            c && !b._duration && (b._duration = c.duration);
            0 === Object.keys(b._sprite).length && (b._sprite = {
                __default: [0, 1E3 * b._duration]
            });
            "loaded" !== b._state && (b._state = "loaded", b._emit("load"), b._loadQueue())
        },
        r = function() {
            try {
                "undefined" !== typeof AudioContext ? c.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? c.ctx = new webkitAudioContext : c.usingWebAudio = !1
            } catch (b) {
                c.usingWebAudio = !1
            }
            c.ctx || (c.usingWebAudio = !1);
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
    HowlerGlobal.prototype.orientation = function(b, c, d, e, g, p) {
        if (!this.ctx || !this.ctx.listener) return this;
        var m = this._orientation;
        c = "number" !==
            typeof c ? m[1] : c;
        d = "number" !== typeof d ? m[2] : d;
        e = "number" !== typeof e ? m[3] : e;
        g = "number" !== typeof g ? m[4] : g;
        p = "number" !== typeof p ? m[5] : p;
        if ("number" === typeof b) this._orientation = [b, c, d, e, g, p], "undefined" !== typeof this.ctx.listener.forwardX ? (this.ctx.listener.forwardX.setTargetAtTime(b, Howler.ctx.currentTime, 0.1), this.ctx.listener.forwardY.setTargetAtTime(c, Howler.ctx.currentTime, 0.1), this.ctx.listener.forwardZ.setTargetAtTime(d, Howler.ctx.currentTime, 0.1), this.ctx.listener.upX.setTargetAtTime(b, Howler.ctx.currentTime,
            0.1), this.ctx.listener.upY.setTargetAtTime(c, Howler.ctx.currentTime, 0.1), this.ctx.listener.upZ.setTargetAtTime(d, Howler.ctx.currentTime, 0.1)) : this.ctx.listener.setOrientation(b, c, d, e, g, p);
        else return m;
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
        var r = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
        if ("undefined" === typeof c)
            if ("number" === typeof b) d._stereo = b, d._pos = [b, 0, 0];
            else return d._stereo;
        for (var g = d._getSoundIds(c), p = 0; p < g.length; p++) {
            var m = d._soundById(g[p]);
            if (m)
                if ("number" === typeof b) m._stereo = b, m._pos = [b, 0, 0], m._node && (m._pannerAttr.panningModel = "equalpower", (!m._panner || !m._panner.pan) && e(m, r), "spatial" === r ? "undefined" !== typeof m._panner.positionX ? (m._panner.positionX.setValueAtTime(b, Howler.ctx.currentTime), m._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), m._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : m._panner.setPosition(b, 0, 0) : m._panner.pan.setValueAtTime(b, Howler.ctx.currentTime)), d._emit("stereo", m._id);
                else return m._stereo
        }
        return d
    };
    Howl.prototype.pos = function(b, c, d, r) {
        var g = this;
        if (!g._webAudio) return g;
        if ("loaded" !== g._state) return g._queue.push({
            event: "pos",
            action: function() {
                g.pos(b, c, d, r)
            }
        }), g;
        c = "number" !== typeof c ? 0 : c;
        d = "number" !== typeof d ? -0.5 : d;
        if ("undefined" === typeof r)
            if ("number" === typeof b) g._pos = [b, c, d];
            else return g._pos;
        for (var p = g._getSoundIds(r), m = 0; m < p.length; m++) {
            var q = g._soundById(p[m]);
            if (q)
                if ("number" === typeof b) q._pos = [b, c, d], q._node && ((!q._panner || q._panner.pan) && e(q, "spatial"), "undefined" !== typeof q._panner.positionX ?
                    (q._panner.positionX.setValueAtTime(b, Howler.ctx.currentTime), q._panner.positionY.setValueAtTime(c, Howler.ctx.currentTime), q._panner.positionZ.setValueAtTime(d, Howler.ctx.currentTime)) : q._panner.setOrientation(b, c, d)), g._emit("pos", q._id);
                else return q._pos
        }
        return g
    };
    Howl.prototype.orientation = function(b, c, d, r) {
        var g = this;
        if (!g._webAudio) return g;
        if ("loaded" !== g._state) return g._queue.push({
            event: "orientation",
            action: function() {
                g.orientation(b, c, d, r)
            }
        }), g;
        c = "number" !== typeof c ? g._orientation[1] : c;
        d = "number" !== typeof d ? g._orientation[2] : d;
        if ("undefined" === typeof r)
            if ("number" === typeof b) g._orientation = [b, c, d];
            else return g._orientation;
        for (var p = g._getSoundIds(r), m = 0; m < p.length; m++) {
            var q = g._soundById(p[m]);
            if (q)
                if ("number" === typeof b) q._orientation = [b, c, d], q._node && (q._panner || (q._pos || (q._pos = g._pos || [0, 0, -0.5]), e(q, "spatial")), "undefined" !== typeof q._panner.orientationX ? (q._panner.orientationX.setValueAtTime(b, Howler.ctx.currentTime), q._panner.orientationY.setValueAtTime(c, Howler.ctx.currentTime),
                    q._panner.orientationZ.setValueAtTime(d, Howler.ctx.currentTime)) : q._panner.setOrientation(b, c, d)), g._emit("orientation", q._id);
                else return q._orientation
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
                distanceModel: "undefined" !== typeof c.pannerAttr.distanceModel ?
                    c.pannerAttr.distanceModel : this._distanceModel,
                maxDistance: "undefined" !== typeof c.pannerAttr.maxDistance ? c.pannerAttr.maxDistance : this._maxDistance,
                refDistance: "undefined" !== typeof c.pannerAttr.refDistance ? c.pannerAttr.refDistance : this._refDistance,
                rolloffFactor: "undefined" !== typeof c.pannerAttr.rolloffFactor ? c.pannerAttr.rolloffFactor : this._rolloffFactor,
                panningModel: "undefined" !== typeof c.pannerAttr.panningModel ? c.pannerAttr.panningModel : this._panningModel
            });
            else return (b = this._soundById(parseInt(b[0],
                10))) ? b._pannerAttr : this._pannerAttr;
        else 2 === b.length && (c = b[0], d = parseInt(b[1], 10));
        d = this._getSoundIds(d);
        for (var r = 0; r < d.length; r++)
            if (b = this._soundById(d[r])) {
                var g = b._pannerAttr,
                    g = {
                        coneInnerAngle: "undefined" !== typeof c.coneInnerAngle ? c.coneInnerAngle : g.coneInnerAngle,
                        coneOuterAngle: "undefined" !== typeof c.coneOuterAngle ? c.coneOuterAngle : g.coneOuterAngle,
                        coneOuterGain: "undefined" !== typeof c.coneOuterGain ? c.coneOuterGain : g.coneOuterGain,
                        distanceModel: "undefined" !== typeof c.distanceModel ? c.distanceModel : g.distanceModel,
                        maxDistance: "undefined" !== typeof c.maxDistance ? c.maxDistance : g.maxDistance,
                        refDistance: "undefined" !== typeof c.refDistance ? c.refDistance : g.refDistance,
                        rolloffFactor: "undefined" !== typeof c.rolloffFactor ? c.rolloffFactor : g.rolloffFactor,
                        panningModel: "undefined" !== typeof c.panningModel ? c.panningModel : g.panningModel
                    },
                    p = b._panner;
                p ? (p.coneInnerAngle = g.coneInnerAngle, p.coneOuterAngle = g.coneOuterAngle, p.coneOuterGain = g.coneOuterGain, p.distanceModel = g.distanceModel, p.maxDistance = g.maxDistance,
                    p.refDistance = g.refDistance, p.rolloffFactor = g.rolloffFactor, p.panningModel = g.panningModel) : (b._pos || (b._pos = this._pos || [0, 0, -0.5]), e(b, "spatial"))
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
    Sound.prototype.reset =
        function() {
            var b = this._parent;
            this._orientation = b._orientation;
            this._stereo = b._stereo;
            this._pos = b._pos;
            this._pannerAttr = b._pannerAttr;
            this._stereo ? b.stereo(this._stereo) : this._pos ? b.pos(this._pos[0], this._pos[1], this._pos[2], this._id) : this._panner && (this._panner.disconnect(0), this._panner = void 0, b._refreshBuffer(this));
            return d.call(this)
        };
    var e = function(b, c) {
        "spatial" === (c || "spatial") ? (b._panner = Howler.ctx.createPanner(), b._panner.coneInnerAngle = b._pannerAttr.coneInnerAngle, b._panner.coneOuterAngle =
            b._pannerAttr.coneOuterAngle, b._panner.coneOuterGain = b._pannerAttr.coneOuterGain, b._panner.distanceModel = b._pannerAttr.distanceModel, b._panner.maxDistance = b._pannerAttr.maxDistance, b._panner.refDistance = b._pannerAttr.refDistance, b._panner.rolloffFactor = b._pannerAttr.rolloffFactor, b._panner.panningModel = b._pannerAttr.panningModel, "undefined" !== typeof b._panner.positionX ? (b._panner.positionX.setValueAtTime(b._pos[0], Howler.ctx.currentTime), b._panner.positionY.setValueAtTime(b._pos[1], Howler.ctx.currentTime),
                b._panner.positionZ.setValueAtTime(b._pos[2], Howler.ctx.currentTime)) : b._panner.setPosition(b._pos[0], b._pos[1], b._pos[2]), "undefined" !== typeof b._panner.orientationX ? (b._panner.orientationX.setValueAtTime(b._orientation[0], Howler.ctx.currentTime), b._panner.orientationY.setValueAtTime(b._orientation[1], Howler.ctx.currentTime), b._panner.orientationZ.setValueAtTime(b._orientation[2], Howler.ctx.currentTime)) : b._panner.setOrientation(b._orientation[0], b._orientation[1], b._orientation[2])) : (b._panner =
            Howler.ctx.createStereoPanner(), b._panner.pan.setValueAtTime(b._stereo, Howler.ctx.currentTime));
        b._panner.connect(b._node);
        b._paused || b._parent.pause(b._id, !0).play(b._id, !0)
    }
})();
! function(b, c) {
    "object" == typeof exports && "undefined" != typeof module ? c() : "function" == typeof define && define.amd ? define(c) : c()
}(0, function() {
    function b(b) {
        var c = this.constructor;
        return this.then(function(d) {
            return c.resolve(b()).then(function() {
                return d
            })
        }, function(d) {
            return c.resolve(b()).then(function() {
                return c.reject(d)
            })
        })
    }

    function c() {}

    function d(b) {
        if (!(this instanceof d)) throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof b) throw new TypeError("not a function");
        this._state = 0;
        this._handled = !1;
        this._value = void 0;
        this._deferreds = [];
        r(b, this)
    }

    function e(b, c) {
        for (; 3 === b._state;) b = b._value;
        0 !== b._state ? (b._handled = !0, d._immediateFn(function() {
            var d = 1 === b._state ? c.onFulfilled : c.onRejected;
            if (null !== d) {
                var e;
                try {
                    e = d(b._value)
                } catch (g) {
                    return void j(c.promise, g)
                }
                f(c.promise, e)
            } else(1 === b._state ? f : j)(c.promise, b._value)
        })) : b._deferreds.push(c)
    }

    function f(b, c) {
        try {
            if (c === b) throw new TypeError("A promise cannot be resolved with itself.");
            if (c && ("object" == typeof c ||
                    "function" == typeof c)) {
                var e = c.then;
                if (c instanceof d) return b._state = 3, b._value = c, void n(b);
                if ("function" == typeof e) return void r(function() {
                    e.apply(c, arguments)
                }, b)
            }
            b._state = 1;
            b._value = c;
            n(b)
        } catch (f) {
            j(b, f)
        }
    }

    function j(b, c) {
        b._state = 2;
        b._value = c;
        n(b)
    }

    function n(b) {
        2 === b._state && 0 === b._deferreds.length && d._immediateFn(function() {
            b._handled || d._unhandledRejectionFn(b._value)
        });
        for (var c = 0, f = b._deferreds.length; f > c; c++) e(b, b._deferreds[c]);
        b._deferreds = null
    }

    function r(b, c) {
        var d = !1;
        try {
            b(function(b) {
                d ||
                    (d = !0, f(c, b))
            }, function(b) {
                d || (d = !0, j(c, b))
            })
        } catch (e) {
            d || (d = !0, j(c, e))
        }
    }
    var g = setTimeout;
    d.prototype["catch"] = function(b) {
        return this.then(null, b)
    };
    d.prototype.then = function(b, d) {
        var f = new this.constructor(c);
        return e(this, new function(b, c, d) {
            this.onFulfilled = "function" == typeof b ? b : null;
            this.onRejected = "function" == typeof c ? c : null;
            this.promise = d
        }(b, d, f)), f
    };
    d.prototype["finally"] = b;
    d.all = function(b) {
        return new d(function(c, d) {
            function e(b, j) {
                try {
                    if (j && ("object" == typeof j || "function" == typeof j)) {
                        var m =
                            j.then;
                        if ("function" == typeof m) return void m.call(j, function(c) {
                            e(b, c)
                        }, d)
                    }
                    f[b] = j;
                    0 == --g && c(f)
                } catch (p) {
                    d(p)
                }
            }
            if (!b || "undefined" == typeof b.length) throw new TypeError("Promise.all accepts an array");
            var f = Array.prototype.slice.call(b);
            if (0 === f.length) return c([]);
            for (var g = f.length, j = 0; f.length > j; j++) e(j, f[j])
        })
    };
    d.resolve = function(b) {
        return b && "object" == typeof b && b.constructor === d ? b : new d(function(c) {
            c(b)
        })
    };
    d.reject = function(b) {
        return new d(function(c, d) {
            d(b)
        })
    };
    d.race = function(b) {
        return new d(function(c,
            d) {
            for (var e = 0, f = b.length; f > e; e++) b[e].then(c, d)
        })
    };
    d._immediateFn = "function" == typeof setImmediate && function(b) {
        setImmediate(b)
    } || function(b) {
        g(b, 0)
    };
    d._unhandledRejectionFn = function(b) {
        void 0 !== console && console && console.warn("Possible Unhandled Promise Rejection:", b)
    };
    var p = function() {
        if ("undefined" != typeof self) return self;
        if ("undefined" != typeof window) return window;
        if ("undefined" != typeof global) return global;
        throw Error("unable to locate global object");
    }();
    "Promise" in p ? p.Promise.prototype["finally"] ||
        (p.Promise.prototype["finally"] = b) : p.Promise = d
});
(function() {
    function b(b, c) {
        document.addEventListener ? b.addEventListener("scroll", c, !1) : b.attachEvent("scroll", c)
    }

    function c(b) {
        this.a = document.createElement("div");
        this.a.setAttribute("aria-hidden", "true");
        this.a.appendChild(document.createTextNode(b));
        this.b = document.createElement("span");
        this.c = document.createElement("span");
        this.h = document.createElement("span");
        this.f = document.createElement("span");
        this.g = -1;
        this.b.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
        this.c.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
        this.f.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
        this.h.style.cssText = "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";
        this.b.appendChild(this.h);
        this.c.appendChild(this.f);
        this.a.appendChild(this.b);
        this.a.appendChild(this.c)
    }

    function d(b, c) {
        b.a.style.cssText =
            "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" + c + ";"
    }

    function e(b) {
        var c = b.a.offsetWidth,
            d = c + 100;
        b.f.style.width = d + "px";
        b.c.scrollLeft = d;
        b.b.scrollLeft = b.b.scrollWidth + 100;
        return b.g !== c ? (b.g = c, !0) : !1
    }

    function f(c, d) {
        function f() {
            var b = g;
            e(b) && b.a.parentNode && d(b.g)
        }
        var g = c;
        b(c.b, f);
        b(c.c, f);
        e(c)
    }

    function j(b, c) {
        var d = c || {};
        this.family = b;
        this.style = d.style ||
            "normal";
        this.weight = d.weight || "normal";
        this.stretch = d.stretch || "normal"
    }

    function n() {
        null === s && (s = !!document.fonts);
        return s
    }

    function r() {
        if (null === q) {
            var b = document.createElement("div");
            try {
                b.style.font = "condensed 100px sans-serif"
            } catch (c) {}
            q = "" !== b.style.font
        }
        return q
    }

    function g(b, c) {
        return [b.style, b.weight, r() ? b.stretch : "", "100px", c].join(" ")
    }
    var p = null,
        m = null,
        q = null,
        s = null;
    j.prototype.load = function(b, e) {
        var j = this,
            q = b || "BESbswy",
            r = 0,
            s = e || 3E3,
            B = (new Date).getTime();
        return new Promise(function(b,
            e) {
            var t;
            if (t = n()) null === m && (n() && /Apple/.test(window.navigator.vendor) ? (t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent), m = !!t && 603 > parseInt(t[1], 10)) : m = !1), t = !m;
            if (t) {
                t = new Promise(function(b, c) {
                    function d() {
                        (new Date).getTime() - B >= s ? c(Error("" + s + "ms timeout exceeded")) : document.fonts.load(g(j, '"' + j.family + '"'), q).then(function(c) {
                            1 <= c.length ? b() : setTimeout(d, 25)
                        }, c)
                    }
                    d()
                });
                var u = new Promise(function(b, c) {
                    r = setTimeout(function() {
                            c(Error("" + s + "ms timeout exceeded"))
                        },
                        s)
                });
                Promise.race([u, t]).then(function() {
                    clearTimeout(r);
                    b(j)
                }, e)
            } else {
                var la = function() {
                    function m() {
                        var c;
                        if (c = -1 != R && -1 != S || -1 != R && -1 != T || -1 != S && -1 != T)(c = R != S && R != T && S != T) || (null === p && (c = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent), p = !!c && (536 > parseInt(c[1], 10) || 536 === parseInt(c[1], 10) && 11 >= parseInt(c[2], 10))), c = p && (R == aa && S == aa && T == aa || R == O && S == O && T == O || R == Y && S == Y && T == Y)), c = !c;
                        c && (J.parentNode && J.parentNode.removeChild(J), clearTimeout(r), b(j))
                    }

                    function n() {
                        if ((new Date).getTime() -
                            B >= s) J.parentNode && J.parentNode.removeChild(J), e(Error("" + s + "ms timeout exceeded"));
                        else {
                            var b = document.hidden;
                            if (!0 === b || void 0 === b) R = t.a.offsetWidth, S = u.a.offsetWidth, T = M.a.offsetWidth, m();
                            r = setTimeout(n, 50)
                        }
                    }
                    var t = new c(q),
                        u = new c(q),
                        M = new c(q),
                        R = -1,
                        S = -1,
                        T = -1,
                        aa = -1,
                        O = -1,
                        Y = -1,
                        J = document.createElement("div");
                    J.dir = "ltr";
                    d(t, g(j, "sans-serif"));
                    d(u, g(j, "serif"));
                    d(M, g(j, "monospace"));
                    J.appendChild(t.a);
                    J.appendChild(u.a);
                    J.appendChild(M.a);
                    document.body.appendChild(J);
                    aa = t.a.offsetWidth;
                    O = u.a.offsetWidth;
                    Y = M.a.offsetWidth;
                    n();
                    f(t, function(b) {
                        R = b;
                        m()
                    });
                    d(t, g(j, '"' + j.family + '",sans-serif'));
                    f(u, function(b) {
                        S = b;
                        m()
                    });
                    d(u, g(j, '"' + j.family + '",serif'));
                    f(M, function(b) {
                        T = b;
                        m()
                    });
                    d(M, g(j, '"' + j.family + '",monospace'))
                };
                document.body ? la() : document.addEventListener ? document.addEventListener("DOMContentLoaded", function V() {
                    document.removeEventListener("DOMContentLoaded", V);
                    la()
                }) : document.attachEvent("onreadystatechange", function U() {
                    if ("interactive" == document.readyState || "complete" == document.readyState) document.detachEvent("onreadystatechange",
                        U), la()
                })
            }
        })
    };
    "object" === typeof module ? module.exports = j : (window.FontFaceObserver = j, window.FontFaceObserver.prototype.load = j.prototype.load)
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
            var u = ig.getVendorAttribute(n, "backingStorePixelRatio") || 1;
            ig.normalizeVendorAttribute(n, "getImageDataHD");
            var y = b.width / u,
                C = b.height / u;
            j.width = Math.ceil(y);
            j.height = Math.ceil(C);
            n.drawImage(b, 0, 0, y, C);
            return 1 === u ? n.getImageData(c, d, e, f) : n.getImageDataHD(c, d, e, f)
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
            var m = function() {
                d[j] && (b.requestAnimationFrame(m, f), e())
            };
            b.requestAnimationFrame(m, f);
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
        var p = this.prototype;
        e = !0;
        var m = new this;
        e = !1;
        for (var q in c) m[q] = "function" == typeof c[q] && "function" == typeof p[q] && f.test(c[q]) ? function(b, c) {
            return function() {
                var d = this.parent;
                this.parent = p[b];
                var e = c.apply(this, arguments);
                this.parent = d;
                return e
            }
        }(q, c[q]) : c[q];
        d.prototype = m;
        d.prototype.constructor = d;
        d.extend = b.ig.Class.extend;
        d.inject = n;
        d.classId = m.classId = ++j;
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
            for (var j = f.getContext("2d"), n = j.getImageData(0, 0, d, e), r = 0; r < e; r++)
                for (var g = 0; g < d; g++) {
                    var p = 4 * (Math.floor(r / b) * this.width + Math.floor(g / b)),
                        m = 4 * (r * d + g);
                    n.data[m] = c.data[p];
                    n.data[m + 1] = c.data[p + 1];
                    n.data[m + 2] = c.data[p + 2];
                    n.data[m + 3] = c.data[p + 3]
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
                var r = ig.system.scale,
                    g = Math.floor(e * r),
                    p = Math.floor(f * r),
                    m = j ? -1 : 1,
                    q = n ? -1 : 1;
                if (j || n) ig.system.context.save(), ig.system.context.scale(m, q);
                ig.system.context.drawImage(this.data, Math.floor(d * e) % this.width * r, Math.floor(d * e / this.width) * f * r, g, p, ig.system.getDrawPos(b) * m - (j ? g : 0), ig.system.getDrawPos(c) * q - (n ? p : 0), g, p);
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
            d && (j.addEventListener("canplaythrough", function r(c) {
                j.removeEventListener("canplaythrough", r, !1);
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
                parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
                c = ig.system.scale * (c / ig.system.realWidth),
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
            if (!("INPUT" == c || "TEXTAREA" == c))
                if (c = "keydown" == b.type ? b.keyCode :
                    2 == b.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1, ("touchstart" == b.type || "mousedown" == b.type) && this.mousemove(b), c = this.bindings[c]) this.actions[c] = !0, this.locks[c] || (this.presses[c] = !0, this.locks[c] = !0), b.stopPropagation(), b.preventDefault()
        },
        keyup: function(b) {
            var c = b.target.tagName;
            if (!("INPUT" == c || "TEXTAREA" == c))
                if (c = this.bindings["keyup" == b.type ? b.keyCode : 2 == b.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1]) this.delayedKeyup[c] = !0, b.stopPropagation(), b.preventDefault()
        },
        devicemotion: function(b) {
            this.accel = b.accelerationIncludingGravity
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
            this.bindings[b] = null
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
        touchEnd: function(b, c) {
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
        gravityFactor: 1,
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
        trace: function(b, c, f, j, n, r) {
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
                p = Math.ceil(Math.max(Math.abs(f), Math.abs(j)) / this.tilesize);
            if (1 < p)
                for (var m = f / p, q = j / p, s = 0; s < p && (m || q) && !(this._traceStep(g,
                        b, c, m, q, n, r, f, j, s), b = g.pos.x, c = g.pos.y, g.collision.x && (f = m = 0), g.collision.y && (j = q = 0), g.collision.slope); s++);
            else this._traceStep(g, b, c, f, j, n, r, f, j, 0);
            return g
        },
        _traceStep: function(b, c, f, j, n, r, g, p, m, q) {
            b.pos.x += j;
            b.pos.y += n;
            var s = 0;
            if (j) {
                var t = 0 < j ? r : 0,
                    u = 0 > j ? this.tilesize : 0,
                    s = Math.max(Math.floor(f / this.tilesize), 0),
                    y = Math.min(Math.ceil((f + g) / this.tilesize), this.height);
                j = Math.floor((b.pos.x + t) / this.tilesize);
                var C = Math.floor((c + t) / this.tilesize);
                if (0 < q || j == C || 0 > C || C >= this.width) C = -1;
                if (0 <= j && j < this.width)
                    for (var F =
                            s; F < y && !(-1 != C && (s = this.data[F][C], 1 < s && s <= this.lastSlope && this._checkTileDef(b, s, c, f, p, m, r, g, C, F))); F++)
                        if (s = this.data[F][j], 1 == s || s > this.lastSlope || 1 < s && this._checkTileDef(b, s, c, f, p, m, r, g, j, F)) {
                            if (1 < s && s <= this.lastSlope && b.collision.slope) break;
                            b.collision.x = !0;
                            b.tile.x = s;
                            c = b.pos.x = j * this.tilesize - t + u;
                            p = 0;
                            break
                        }
            }
            if (n) {
                t = 0 < n ? g : 0;
                n = 0 > n ? this.tilesize : 0;
                s = Math.max(Math.floor(b.pos.x / this.tilesize), 0);
                u = Math.min(Math.ceil((b.pos.x + r) / this.tilesize), this.width);
                F = Math.floor((b.pos.y + t) / this.tilesize);
                y = Math.floor((f + t) / this.tilesize);
                if (0 < q || F == y || 0 > y || y >= this.height) y = -1;
                if (0 <= F && F < this.height)
                    for (j = s; j < u && !(-1 != y && (s = this.data[y][j], 1 < s && s <= this.lastSlope && this._checkTileDef(b, s, c, f, p, m, r, g, j, y))); j++)
                        if (s = this.data[F][j], 1 == s || s > this.lastSlope || 1 < s && this._checkTileDef(b, s, c, f, p, m, r, g, j, F)) {
                            if (1 < s && s <= this.lastSlope && b.collision.slope) break;
                            b.collision.y = !0;
                            b.tile.y = s;
                            b.pos.y = F * this.tilesize - t + n;
                            break
                        }
            }
        },
        _checkTileDef: function(b, c, f, j, n, r, g, p, m, q) {
            var s = this.tiledef[c];
            if (!s) return !1;
            c = (s[2] -
                s[0]) * this.tilesize;
            var t = (s[3] - s[1]) * this.tilesize,
                u = s[4];
            g = f + n + (0 > t ? g : 0) - (m + s[0]) * this.tilesize;
            p = j + r + (0 < c ? p : 0) - (q + s[1]) * this.tilesize;
            if (0 < c * p - t * g) {
                if (0 > n * -t + r * c) return u;
                m = Math.sqrt(c * c + t * t);
                q = t / m;
                m = -c / m;
                var y = g * q + p * m,
                    s = q * y,
                    y = m * y;
                if (s * s + y * y >= n * n + r * r) return u || 0.5 > c * (p - r) - t * (g - n);
                b.pos.x = f + n - s;
                b.pos.y = j + r - y;
                b.collision.slope = {
                    x: c,
                    y: t,
                    nx: q,
                    ny: m
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
                r = c * this.chunkSize / ig.system.scale % this.tilesize;
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
                for (var p = 0; p < j; p++)
                    if (e + b < this.width && p + c < this.height) {
                        var m = this.data[p + c][e + b];
                        m && this.tiles.drawTile(e * this.tilesize - n, p * this.tilesize - r, m - 1, this.tilesize)
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
                r = this.preRenderedChunks.length;
            this.repeat || (f = Math.min(f, n), j = Math.min(j, r));
            for (var g = 0; e < j; e++) {
                for (var p = 0, m = d; m < f; m++) {
                    var q = this.preRenderedChunks[e % r][m % n],
                        s = -b + m * this.chunkSize - p,
                        t = -c + e * this.chunkSize - g;
                    ig.system.context.drawImage(q, s, t);
                    ig.Image.drawCount++;
                    this.debugChunks && (ig.system.context.strokeStyle = "#f0f", ig.system.context.strokeRect(s, t, this.chunkSize, this.chunkSize));
                    this.repeat && (q.width < this.chunkSize && s + q.width < ig.system.realWidth) && (p += this.chunkSize - q.width, f++)
                }
                this.repeat && (q.height < this.chunkSize && t + q.height < ig.system.realHeight) && (g += this.chunkSize - q.height, j++)
            }
        },
        drawTiled: function() {
            for (var b = 0, c = null, d = (this.scroll.x / this.tilesize).toInt(),
                    e = (this.scroll.y / this.tilesize).toInt(), f = this.scroll.x % this.tilesize, j = this.scroll.y % this.tilesize, n = -f - this.tilesize, f = ig.system.width + this.tilesize - f, r = ig.system.height + this.tilesize - j, g = -1, j = -j - this.tilesize; j < r; g++, j += this.tilesize) {
                var p = g + e;
                if (p >= this.height || 0 > p) {
                    if (!this.repeat) continue;
                    p = (p % this.height + this.height) % this.height
                }
                for (var m = -1, q = n; q < f; m++, q += this.tilesize) {
                    b = m + d;
                    if (b >= this.width || 0 > b) {
                        if (!this.repeat) continue;
                        b = (b % this.width + this.width) % this.width
                    }
                    if (b = this.data[p][b])(c = this.anims[b -
                        1]) ? c.draw(q, j) : this.tiles.drawTile(q, j, b - 1, this.tilesize)
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
                    for (var e = {}, f = Math.floor(d.pos.y / this.cellSize), j = Math.floor((d.pos.x + d.size.x) / this.cellSize) + 1, n = Math.floor((d.pos.y + d.size.y) / this.cellSize) + 1, r = Math.floor(d.pos.x / this.cellSize); r < j; r++)
                        for (var g = f; g < n; g++)
                            if (b[r])
                                if (b[r][g]) {
                                    for (var p = b[r][g], m = 0; m < p.length; m++) d.touches(p[m]) && !e[p[m].id] && (e[p[m].id] = !0, ig.Entity.checkPair(d, p[m]));
                                    p.push(d)
                                } else b[r][g] = [d];
                else b[r] = {}, b[r][g] = [d]
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
ig.module("plugins.patches.windowfocus-onMouseDown-patch").requires("impact.input").defines(function() {
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
ig.module("plugins.patches.input-patch").requires("impact.input").defines(function() {
    ig.Input.inject({
        mousemove: function(b) {
            var c = ig.system.scale * (ig.system.realWidth / ig.system.realWidth),
                d = {
                    left: 0,
                    top: 0
                };
            ig.system.canvas.getBoundingClientRect && (d = ig.system.canvas.getBoundingClientRect());
            b = b.touches ? b.touches[0] : b;
            this.mouse.x = (b.clientX - d.left) / c;
            this.mouse.y = (b.clientY - d.top) / c
        }
    })
});
ig.baked = !0;
ig.module("plugins.font.font-info").requires("impact.impact").defines(function() {
    ig.FontInfo = ig.Class.extend({
        fonts: [{
            name: "porkys",
            source: "media/fonts/porkys"
        }],
        init: function() {
            this.registerCssFont()
        },
        registerCssFont: function() {
            if (0 < this.fonts.length) {
                var b = document.createElement("style");
                b.type = "text/css";
                for (var c = "", d = 0; d < this.fonts.length; d++) var e = this.fonts[d],
                    c = c + ("@font-face {font-family: '" + e.name + "';src: url('" + e.source + ".eot');src: url('" + e.source + ".eot?#iefix') format('embedded-opentype'),url('" +
                        e.source + ".woff2') format('woff2'),url('" + e.source + ".woff') format('woff'),url('" + e.source + ".ttf') format('truetype'),url('" + e.source + ".svg#svgFontName') format('svg')}");
                b.appendChild(document.createTextNode(c));
                document.head.appendChild(b)
            }
        },
        isValid: function() {
            for (var b = 0; b < this.fonts.length; b++)
                if (!this._isValidName(this.fonts[b].source)) return !1;
            return !0
        },
        _isValidName: function(b) {
            return -1 == b.search(/^[a-z0-9-\/]+$/) ? !1 : !0
        }
    })
});
ig.baked = !0;
ig.module("plugins.font.font-loader").requires("impact.impact", "plugins.font.font-info", "impact.loader").defines(function() {
    ig.FontLoader = ig.Class.extend({
        fontInfo: new ig.FontInfo,
        onload: !1,
        onerror: !1,
        init: function(b, c) {
            this.onload = b;
            this.onerror = c
        },
        load: function() {
            this.fontInfo.isValid() ? this._loadByLib() : console.error("Only lowercased alphanumeric and dash are allowed for font file name!. Please check the font path")
        },
        _loadByLib: function() {
            for (var b = [], c = 0; c < this.fontInfo.fonts.length; c++) {
                var d =
                    new FontFaceObserver(this.fontInfo.fonts[c].name);
                b.push(d.load())
            }
            Promise.all(b).then(this.onload).catch(this.onerror)
        }
    });
    ig.Loader.inject({
        parentLoad: !1,
        load: function() {
            this.parentLoad = this.parent;
            (new ig.FontLoader(this.onFontLoad.bind(this), this.onFontError.bind(this))).load()
        },
        onFontLoad: function() {
            this.parentLoad()
        },
        onFontError: function() {
            console.error("Font is not loaded")
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
            b && "undefined" !==
                typeof b && (this.JQUERYAVAILABLE ? (b.show(), b.css("visibility", "visible")) : b && (b.style ? b.style.visibility = "visible" : b[0] && (b[0].style.visibility = "visible")))
        },
        hide: function(b) {
            b && "undefined" !== typeof b && (this.JQUERYAVAILABLE ? (b.hide(), b.css("visibility", "hidden")) : b && (b.style ? b.style.visibility = "hidden" : b[0] && (b[0].style.visibility = "hidden")))
        },
        getQueryVariable: function(b) {
            for (var c = window.location.search.substring(1).split("&"), d = 0; d < c.length; d++) {
                var e = c[d].split("=");
                if (decodeURIComponent(e[0]) ==
                    b) return decodeURIComponent(e[1])
            }
        },
        forcedDeviceDetection: function() {
            var b = this.getQueryVariable("device");
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
            this.samsungFix()
        },
        sizeCalcs: function() {
            this.windowSize = new Vector2(window.innerWidth, window.innerHeight);
            if (ig.ua.mobile) {
                this.mobile.actualSize = new Vector2(window.innerWidth, window.innerHeight);
                var b = new Vector2(this.mobile.actualResolution.x, this.mobile.actualResolution.y);
                this.scaleRatioMultiplier = new Vector2(this.mobile.actualSize.x / b.x, this.mobile.actualSize.y /
                    b.y);
                if (this.disableStretchToFitOnMobileFlag) {
                    var c = Math.min(this.scaleRatioMultiplier.x, this.scaleRatioMultiplier.y);
                    this.enableScalingLimitsOnMobileFlag && (c = c.limit(this.minScalingOnMobile, this.maxScalingOnMobile));
                    this.mobile.actualSize.x = b.x * c;
                    this.mobile.actualSize.y = b.y * c;
                    this.scaleRatioMultiplier.x = c;
                    this.scaleRatioMultiplier.y = c
                } else this.sizeRatio.x = this.scaleRatioMultiplier.x, this.sizeRatio.y = this.scaleRatioMultiplier.y, this.scaleRatioMultiplier.x = 1, this.scaleRatioMultiplier.y = 1
            } else this.desktop.actualSize =
                new Vector2(window.innerWidth, window.innerHeight), b = new Vector2(this.desktop.actualResolution.x, this.desktop.actualResolution.y), this.scaleRatioMultiplier = new Vector2(this.desktop.actualSize.x / b.x, this.desktop.actualSize.y / b.y), this.enableStretchToFitOnDesktopFlag ? (this.sizeRatio.x = this.scaleRatioMultiplier.x, this.sizeRatio.y = this.scaleRatioMultiplier.y, this.scaleRatioMultiplier.x = 1, this.scaleRatioMultiplier.y = 1) : (c = Math.min(this.scaleRatioMultiplier.x, this.scaleRatioMultiplier.y), this.enableScalingLimitsOnDesktopFlag &&
                    (c = c.limit(this.minScalingOnDesktop, this.maxScalingOnDesktop)), this.desktop.actualSize.x = b.x * c, this.desktop.actualSize.y = b.y * c, this.scaleRatioMultiplier.x = c, this.scaleRatioMultiplier.y = c)
        },
        resizeLayers: function() {
            for (var b = 0; b < this.coreDivsToResize.length; b++) {
                var c = ig.domHandler.getElementById(this.coreDivsToResize[b]);
                if (ig.ua.mobile)
                    if (this.disableStretchToFitOnMobileFlag) {
                        var d = Math.floor(ig.sizeHandler.windowSize.x / 2 - ig.sizeHandler.mobile.actualSize.x / 2),
                            e = Math.floor(ig.sizeHandler.windowSize.y /
                                2 - ig.sizeHandler.mobile.actualSize.y / 2);
                        0 > d && (d = 0);
                        0 > e && (e = 0);
                        ig.domHandler.resizeOffset(c, Math.floor(ig.sizeHandler.mobile.actualSize.x), Math.floor(ig.sizeHandler.mobile.actualSize.y), d, e);
                        var f = !1;
                        if (f = this.portraitMode ? window.innerHeight < window.innerWidth : window.innerHeight > window.innerWidth)
                            if (this.enableStretchToFitOnAntiPortraitModeFlag) ig.domHandler.resizeOffset(c, Math.floor(window.innerWidth), Math.floor(window.innerHeight), 0, 0);
                            else {
                                var f = new Vector2(window.innerWidth / this.mobile.actualResolution.y,
                                        window.innerHeight / this.mobile.actualResolution.x),
                                    d = Math.min(f.x, f.y),
                                    f = this.mobile.actualResolution.y * d,
                                    j = this.mobile.actualResolution.x * d,
                                    d = Math.floor(ig.sizeHandler.windowSize.x / 2 - f / 2),
                                    e = Math.floor(ig.sizeHandler.windowSize.y / 2 - j / 2);
                                0 > d && (d = 0);
                                0 > e && (e = 0);
                                ig.domHandler.resizeOffset(c, Math.floor(f), Math.floor(j), d, e)
                            }
                    } else ig.domHandler.resize(c, Math.floor(ig.sizeHandler.mobile.actualSize.x), Math.floor(ig.sizeHandler.mobile.actualSize.y));
                else this.enableStretchToFitOnDesktopFlag ? ig.domHandler.resize(c,
                    Math.floor(ig.sizeHandler.desktop.actualSize.x), Math.floor(ig.sizeHandler.desktop.actualSize.y)) : (d = Math.floor(ig.sizeHandler.windowSize.x / 2 - ig.sizeHandler.desktop.actualSize.x / 2), e = Math.floor(ig.sizeHandler.windowSize.y / 2 - ig.sizeHandler.desktop.actualSize.y / 2), 0 > d && (d = 0), 0 > e && (e = 0), ig.domHandler.resizeOffset(c, Math.floor(ig.sizeHandler.desktop.actualSize.x), Math.floor(ig.sizeHandler.desktop.actualSize.y), d, e))
            }
            for (var n in this.adsToResize) b = ig.domHandler.getElementById("#" + n), c = ig.domHandler.getElementById("#" +
                n + "-Box"), f = (window.innerWidth - this.adsToResize[n]["box-width"]) / 2 + "px", d = (window.innerHeight - this.adsToResize[n]["box-height"]) / 2 + "px", b && ig.domHandler.css(b, {
                width: window.innerWidth,
                height: window.innerHeight
            }), c && ig.domHandler.css(c, {
                left: f,
                top: d
            });
            b = ig.domHandler.getElementById("#canvas");
            c = ig.domHandler.getOffsets(b);
            b = c.left;
            c = c.top;
            f = Math.min(ig.sizeHandler.scaleRatioMultiplier.x, ig.sizeHandler.scaleRatioMultiplier.y);
            for (n in this.dynamicClickableEntityDivs) {
                d = ig.domHandler.getElementById("#" +
                    n);
                if (ig.ua.mobile) {
                    var j = this.dynamicClickableEntityDivs[n].entity_pos_x,
                        r = this.dynamicClickableEntityDivs[n].entity_pos_y,
                        g = this.dynamicClickableEntityDivs[n].width,
                        e = this.dynamicClickableEntityDivs[n].height;
                    this.disableStretchToFitOnMobileFlag ? (j = Math.floor(b + j * this.scaleRatioMultiplier.x) + "px", r = Math.floor(c + r * this.scaleRatioMultiplier.y) + "px", g = Math.floor(g * this.scaleRatioMultiplier.x) + "px", e = Math.floor(e * this.scaleRatioMultiplier.y) + "px") : (j = Math.floor(j * this.sizeRatio.x) + "px", r = Math.floor(r *
                        this.sizeRatio.y) + "px", g = Math.floor(g * this.sizeRatio.x) + "px", e = Math.floor(e * this.sizeRatio.y) + "px")
                } else j = this.dynamicClickableEntityDivs[n].entity_pos_x, r = this.dynamicClickableEntityDivs[n].entity_pos_y, g = this.dynamicClickableEntityDivs[n].width, e = this.dynamicClickableEntityDivs[n].height, this.enableStretchToFitOnDesktopFlag ? (j = Math.floor(j * this.sizeRatio.x) + "px", r = Math.floor(r * this.sizeRatio.y) + "px", g = Math.floor(g * this.sizeRatio.x) + "px", e = Math.floor(e * this.sizeRatio.y) + "px") : (j = Math.floor(b + j *
                    this.scaleRatioMultiplier.x) + "px", r = Math.floor(c + r * this.scaleRatioMultiplier.y) + "px", g = Math.floor(g * this.scaleRatioMultiplier.x) + "px", e = Math.floor(e * this.scaleRatioMultiplier.y) + "px");
                ig.domHandler.css(d, {
                    "float": "left",
                    position: "absolute",
                    left: j,
                    top: r,
                    width: g,
                    height: e,
                    "z-index": 3
                });
                this.dynamicClickableEntityDivs[n]["font-size"] && ig.domHandler.css(d, {
                    "font-size": this.dynamicClickableEntityDivs[n]["font-size"] * f + "px"
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
                b ? (this.domHandler.show(c), this.domHandler.hide(d), console.log("portrait" + window.innerWidth + "," + window.innerHeight)) : (this.domHandler.show(d), this.domHandler.hide(c), console.log("landscape" +
                    window.innerWidth + "," + window.innerHeight))
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
            ig.ua.android &&
                (!(4.2 > parseFloat(navigator.userAgent.slice(navigator.userAgent.indexOf("Android") + 8, navigator.userAgent.indexOf("Android") + 11))) && !(0 > navigator.userAgent.indexOf("GT")) && !(0 < navigator.userAgent.indexOf("Chrome")) && !(0 < navigator.userAgent.indexOf("Firefox"))) && (document.addEventListener("touchstart", function(b) {
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
            this.orientationInterval =
                null;
            window.clearTimeout(this.orientationTimeout);
            this.orientationTimeout = null
        },
        eventListenerSetup: function() {
            ig.ua.iOS ? (window.addEventListener("orientationchange", this.orientationDelayHandler.bind(this)), window.addEventListener("resize", this.orientationDelayHandler.bind(this))) : (window.addEventListener("orientationchange", this.orientationHandler.bind(this)), window.addEventListener("resize", this.orientationHandler.bind(this)));
            document.ontouchmove = function(b) {
                window.scrollTo(0, 1);
                b.preventDefault()
            };
            this.chromePullDownRefreshFix()
        },
        chromePullDownRefreshFix: function() {
            var b = window.chrome || navigator.userAgent.match("CriOS"),
                c = "ontouchstart" in document.documentElement;
            if (b && c) {
                var d = b = !1,
                    e = 0,
                    f = !1;
                try {
                    CSS.supports("overscroll-behavior-y", "contain") && (b = !0)
                } catch (j) {}
                try {
                    if (b) return document.body.style.overscrollBehaviorY = "contain"
                } catch (n) {}
                b = document.head || document.body;
                c = document.createElement("style");
                c.type = "text/css";
                c.styleSheet ? c.styleSheet.cssText = "\n      ::-webkit-scrollbar {\n        width: 500x;\n      }\n      ::-webkit-scrollbar-thumb {\n        border-radius: 500px;\n        background-color: rgba(0, 0, 0, 0.2);\n      }\n      body {\n        -webkit-overflow-scrolling: auto!important;\n      }\n    " :
                    c.appendChild(document.createTextNode("\n      ::-webkit-scrollbar {\n        width: 500px;\n      }\n      ::-webkit-scrollbar-thumb {\n        border-radius: 500px;\n        background-color: rgba(0, 0, 0, 0.2);\n      }\n      body {\n        -webkit-overflow-scrolling: auto!important;\n      }\n    "));
                b.appendChild(c);
                try {
                    addEventListener("test", null, {
                        get passive() {
                            d = !0
                        }
                    })
                } catch (r) {}
                document.addEventListener("touchstart", function(b) {
                    1 === b.touches.length && (e = b.touches[0].clientY, f = 0 === window.pageYOffset)
                }, !!d && {
                    passive: !0
                });
                document.addEventListener("touchmove", function(b) {
                    var c;
                    if (c = f) {
                        f = !1;
                        c = b.touches[0].clientY;
                        var d = c - e;
                        c = (e = c, 0 < d)
                    }
                    if (c) return b.preventDefault()
                }, !!d && {
                    passive: !1
                })
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.handlers.api-handler").defines(function() {
    ig.ApiHandler = ig.Class.extend({
        apiAvailable: {
            MJSPreroll: function() {
                // ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE && _SETTINGS && _SETTINGS.Ad.Mobile.Preroll.Enabled && MobileAdInGamePreroll.Initialize()
            },
            MJSHeader: function() {
                // ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE && _SETTINGS.Ad.Mobile.Header.Enabled && MobileAdInGameHeader.Initialize()
            },
            MJSFooter: function() {
                // ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE && _SETTINGS.Ad.Mobile.Footer.Enabled && MobileAdInGameFooter.Initialize()
            },
            MJSEnd: function() {
                // ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE && _SETTINGS.Ad.Mobile.End.Enabled && MobileAdInGameEnd.Initialize()
            }
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
                    } catch (r) {
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
                        var r = function() {
                            typeof("function" == this.play) && (this.play(), n.removeEventListener("canplaythrough", r, !1))
                        }.bind(this);
                        n.addEventListener("canplaythrough", r, !1)
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
            playerShoot: {
                path: "media/audio/player-shoot"
            },
            buttonClick: {
                path: "media/audio/button-click"
            },
            enemyPop: {
                path: "media/audio/enemy-pop"
            },
            smallExplosion: {
                path: "media/audio/small-explosion"
            },
            laser1: {
                path: "media/audio/laser1"
            },
            hitIron: {
                path: "media/audio/hit-iron"
            },
            upgrade: {
                path: "media/audio/upgrade"
            },
            hit: {
                path: "media/audio/hit"
            },
            revive: {
                path: "media/audio/revive"
            },
            fixing1: {
                path: "media/audio/fixing1"
            },
            fixing2: {
                path: "media/audio/fixing2"
            },
            fixing3: {
                path: "media/audio/fixing3"
            },
            explode: {
                path: "media/audio/explode"
            },
            smallBonus: {
                path: "media/audio/small-bonus"
            }
        },
        bgm: {
            background: {
                path: "media/audio/bgm",
                startOgg: 0,
                endOgg: 21.463,
                startMp3: 0,
                endMp3: 21.463
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
            this.sfxPlayer && this.sfxPlayer.unmute(b)
        },
        unmuteBGM: function(b) {
            this.bgmPlayer && this.bgmPlayer.unmute(b)
        },
        muteAll: function(b) {
            this.muteSFX(b);
            this.muteBGM(b)
        },
        unmuteAll: function(b) {
            ig.gd.isFreez || (this.unmuteSFX(b), this.unmuteBGM(b))
        },
        forceMuteAll: function() {
            this.focusBlurMute || this.muteAll(!1);
            this.focusBlurMute = !0
        },
        forceUnMuteAll: function() {
            !ig.gd.isFreez &&
                this.focusBlurMute && (this.unmuteAll(!1), this.focusBlurMute = !1)
        },
        initWindowHandler: function() {
            "true" === ig.domHandler.getQueryVariable("webview") ? ($(window).focus(function() {
                ig.soundHandler && !ig.gd.isFreez && ig.soundHandler.forceUnMuteAll()
            }), $(window).blur(function() {
                ig.soundHandler && ig.soundHandler.forceMuteAll()
            })) : (window.onfocus = function() {
                ig.soundHandler && !ig.gd.isFreez && ig.soundHandler.forceUnMuteAll()
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
                ig.soundHandler && !ig.gd.isFreez && ig.soundHandler.forceUnMuteAll()
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
            ig.soundHandler.isHidden() ? ig.soundHandler && ig.soundHandler.forceMuteAll() : ig.soundHandler && !ig.gd.isFreez && ig.soundHandler.forceUnMuteAll()
        },
        saveVolume: function() {
            this.sfxPlayer && ig.game.io.storageSet("soundVolume", this.sfxPlayer.getVolume());
            this.bgmPlayer && ig.game.io.storageSet("musicVolume", this.bgmPlayer.getVolume())
        },
        forceLoopBGM: function() {
            var b;
            if (!this.focusBlurMute && this.bgmPlayer.bgmPlaying &&
                this.bgmPlayer) {
                var c = this.bgmPlayer.jukeboxPlayer;
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
        pos: new Vector2(0, 0),
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
            this.pos.set(ig.input.mouse.x / ig.sizeHandler.sizeRatio.x / ig.sizeHandler.scaleRatioMultiplier.x, ig.input.mouse.y / ig.sizeHandler.sizeRatio.y / ig.sizeHandler.scaleRatioMultiplier.y);
            return this.pos
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
                    for (var j = b[f], n = "undefined" != typeof j.identifier ? j.identifier : "undefined" != typeof j.pointerId ? j.pointerId : 1, r = (j.clientX - e.left) / c, j = (j.clientY - e.top) / d, g = 0; g < this.touches.length; ++g) this.touches[g].identifier == n && this.touches.splice(g, 1);
                    this.touches.push({
                        x: r,
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
        splashDesktop: new ig.Image("media/graphics/splash/desktop/cover.png"),
        splashMobile: new ig.Image("media/graphics/splash/mobile/cover.png"),
        barFrame: new ig.Image("media/graphics/splash/loading/loading-bar-frame.png"),
        barComplete: new ig.Image("media/graphics/splash/loading/loading-bar-fill.png"),
        barSize: {
            x: 515,
            y: 114
        },
        init: function(b, c) {
            this.parent(b,
                c);
            ig.apiHandler.run("MJSPreroll");

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
        tapToStartDiv: function(b) {
            this.desktopCoverDIV = document.getElementById(this.desktopCoverDIVID);
            if (!this.desktopCoverDIV) {
                this.desktopCoverDIV = document.createElement("div");
                this.desktopCoverDIV.id = this.desktopCoverDIVID;
                this.desktopCoverDIV.setAttribute("class", "play");
                this.desktopCoverDIV.setAttribute("style", "position: absolute; display: block; z-index: 999999; background-color: rgba(23, 32, 53, 0.7); visibility: visible; font-size: 10vmin; text-align: center; vertical-align: middle; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;");
                this.desktopCoverDIV.innerHTML = "<div style='color:white;background-color: rgba(255, 255, 255, 0.3); border: 2px solid #fff; font-size:20px; border-radius: 5px; position: relative; float: left; top: 50%; left: 50%; transform: translate(-50%, -50%);'><div style='padding:20px 50px; font-family: porkys;'>" +
                    _STRINGS.Splash.TapToStart + "</div></div>";
                (document.getElementById("play").parentNode || document.getElementById("ajaxbar")).appendChild(this.desktopCoverDIV);
                try {
                    "undefined" !== typeof ig.sizeHandler ? "undefined" !== typeof ig.sizeHandler.coreDivsToResize && (ig.sizeHandler.coreDivsToResize.push("#" + this.desktopCoverDIVID), "function" === typeof ig.sizeHandler.reorient && ig.sizeHandler.reorient()) : "undefined" !== typeof coreDivsToResize && (coreDivsToResize.push(this.desktopCoverDIVID), "function" === typeof sizeHandler &&
                        sizeHandler())
                } catch (c) {
                    console.log(c)
                }
                this.desktopCoverDIV.addEventListener("click", function() {
                    try {
                        "undefined" !== typeof ig.soundHandler ? ("undefined" !== typeof ig.soundHandler.bgmPlayer ? "undefined" !== typeof ig.soundHandler.bgmPlayer.webaudio && "undefined" !== typeof ig.soundHandler.bgmPlayer.webaudio.context && ig.soundHandler.bgmPlayer.webaudio.context.resume() : (ig.soundHandler = null, ig.soundHandler = "undefined" !== typeof ig.soundList ? new ig.SoundHandler(ig.soundList) : new ig.SoundHandler), "undefined" !== typeof ig.soundHandler.sfxPlayer ?
                                "function" === typeof ig.soundHandler.sfxPlayer.play && ig.soundHandler.sfxPlayer.play("staticSound") : "undefined" !== typeof ig.soundHandler.staticSound ? "function" === typeof ig.soundHandler.staticSound.play && ig.soundHandler.staticSound.play() : "function" === typeof ig.soundHandler.playSound && ig.soundHandler.playSound("staticSound")) : "undefined" !== typeof Howl ? (ig.global.staticSound = new Howl({
                                src: ["media/audio/play/static.ogg", "media/audio/play/static.mp3"]
                            }), ig.global.staticSound.play()) : "undefined" !== typeof createjs &&
                            "undefined" !== typeof createjs.Sound && "function" === typeof createjs.Sound.play && createjs.Sound.play("opening")
                    } catch (c) {
                        console.log(c)
                    }
                    this.setAttribute("style", "visibility: hidden;");
                    "function" === typeof b && b();
                    ig.gd.show(function() {
                        ig.system.setGame(MyGame);
                        // gdsdk && "function" === typeof gdsdk.play && gdsdk.play()
                    }.bind(this))
                })
            }
        },
        drawCheck: 0,
        draw: function() {
            ig.system.context.font = "1px porkys";
            ig.system.context.fillText("porkys", -100, -100);
            this._drawStatus += (this.status - this._drawStatus) / 5;
            1 === this.drawCheck &&
                console.log("Font should be loaded before loader draw loop");
            2 > this.drawCheck && this.drawCheck++;
            ig.system.context.fillStyle = "#000";
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            var b = ig.system.scale,
                c = ig.system.realWidth / 2 - this.barSize.x / 2,
                d = ig.system.realHeight - 325;
            ig.ua.mobile ? this.splashMobile.draw(0, 0) : this.splashDesktop.draw(0, 0);
            var e = this.barSize.x * this._drawStatus,
                f = e * b,
                j = this.barSize.y,
                c = c * b,
                b = d * b;
            this.barFrame.draw(c, b);
            0 < e && this.barComplete.draw(c, b, 0, 0, f, j)
        }
    })
});
! function(b, c) {
    "object" == typeof exports && "undefined" != typeof module ? c() : "function" == typeof define && define.amd ? define(c) : c()
}(0, function() {
    function b(b) {
        var c = this.constructor;
        return this.then(function(d) {
            return c.resolve(b()).then(function() {
                return d
            })
        }, function(d) {
            return c.resolve(b()).then(function() {
                return c.reject(d)
            })
        })
    }

    function c() {}

    function d(b) {
        if (!(this instanceof d)) throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof b) throw new TypeError("not a function");
        this._state = 0;
        this._handled = !1;
        this._value = void 0;
        this._deferreds = [];
        r(b, this)
    }

    function e(b, c) {
        for (; 3 === b._state;) b = b._value;
        0 !== b._state ? (b._handled = !0, d._immediateFn(function() {
            var d = 1 === b._state ? c.onFulfilled : c.onRejected;
            if (null !== d) {
                var e;
                try {
                    e = d(b._value)
                } catch (g) {
                    return void j(c.promise, g)
                }
                f(c.promise, e)
            } else(1 === b._state ? f : j)(c.promise, b._value)
        })) : b._deferreds.push(c)
    }

    function f(b, c) {
        try {
            if (c === b) throw new TypeError("A promise cannot be resolved with itself.");
            if (c && ("object" == typeof c ||
                    "function" == typeof c)) {
                var e = c.then;
                if (c instanceof d) return b._state = 3, b._value = c, void n(b);
                if ("function" == typeof e) return void r(function() {
                    e.apply(c, arguments)
                }, b)
            }
            b._state = 1;
            b._value = c;
            n(b)
        } catch (f) {
            j(b, f)
        }
    }

    function j(b, c) {
        b._state = 2;
        b._value = c;
        n(b)
    }

    function n(b) {
        2 === b._state && 0 === b._deferreds.length && d._immediateFn(function() {
            b._handled || d._unhandledRejectionFn(b._value)
        });
        for (var c = 0, f = b._deferreds.length; f > c; c++) e(b, b._deferreds[c]);
        b._deferreds = null
    }

    function r(b, c) {
        var d = !1;
        try {
            b(function(b) {
                d ||
                    (d = !0, f(c, b))
            }, function(b) {
                d || (d = !0, j(c, b))
            })
        } catch (e) {
            d || (d = !0, j(c, e))
        }
    }
    var g = setTimeout;
    d.prototype["catch"] = function(b) {
        return this.then(null, b)
    };
    d.prototype.then = function(b, d) {
        var f = new this.constructor(c);
        return e(this, new function(b, c, d) {
            this.onFulfilled = "function" == typeof b ? b : null;
            this.onRejected = "function" == typeof c ? c : null;
            this.promise = d
        }(b, d, f)), f
    };
    d.prototype["finally"] = b;
    d.all = function(b) {
        return new d(function(c, d) {
            function e(b, j) {
                try {
                    if (j && ("object" == typeof j || "function" == typeof j)) {
                        var m =
                            j.then;
                        if ("function" == typeof m) return void m.call(j, function(c) {
                            e(b, c)
                        }, d)
                    }
                    f[b] = j;
                    0 == --g && c(f)
                } catch (n) {
                    d(n)
                }
            }
            if (!b || "undefined" == typeof b.length) throw new TypeError("Promise.all accepts an array");
            var f = Array.prototype.slice.call(b);
            if (0 === f.length) return c([]);
            for (var g = f.length, j = 0; f.length > j; j++) e(j, f[j])
        })
    };
    d.resolve = function(b) {
        return b && "object" == typeof b && b.constructor === d ? b : new d(function(c) {
            c(b)
        })
    };
    d.reject = function(b) {
        return new d(function(c, d) {
            d(b)
        })
    };
    d.race = function(b) {
        return new d(function(c,
            d) {
            for (var e = 0, f = b.length; f > e; e++) b[e].then(c, d)
        })
    };
    d._immediateFn = "function" == typeof setImmediate && function(b) {
        setImmediate(b)
    } || function(b) {
        g(b, 0)
    };
    d._unhandledRejectionFn = function(b) {
        void 0 !== console && console && console.warn("Possible Unhandled Promise Rejection:", b)
    };
    var p = function() {
        if ("undefined" != typeof self) return self;
        if ("undefined" != typeof window) return window;
        if ("undefined" != typeof global) return global;
        throw Error("unable to locate global object");
    }();
    "Promise" in p ? p.Promise.prototype["finally"] ||
        (p.Promise.prototype["finally"] = b) : p.Promise = d
});
ig.baked = !0;
ig.module("plugins.font-loader").requires("impact.loader").defines(function() {
    var b = function(b, c) {
            document.addEventListener ? b.addEventListener("scroll", c, !1) : b.attachEvent("scroll", c)
        },
        c = function(b) {
            this.a = document.createElement("div");
            this.a.setAttribute("aria-hidden", "true");
            this.a.appendChild(document.createTextNode(b));
            this.b = document.createElement("span");
            this.c = document.createElement("span");
            this.h = document.createElement("span");
            this.f = document.createElement("span");
            this.g = -1;
            this.b.style.cssText =
                "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
            this.c.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
            this.f.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
            this.h.style.cssText = "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";
            this.b.appendChild(this.h);
            this.c.appendChild(this.f);
            this.a.appendChild(this.b);
            this.a.appendChild(this.c)
        },
        d = function(b, c) {
            b.a.style.cssText = "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" + c + ";"
        },
        e = function(b) {
            var c = b.a.offsetWidth,
                d = c + 100;
            b.f.style.width = d + "px";
            b.c.scrollLeft = d;
            b.b.scrollLeft = b.b.scrollWidth + 100;
            return b.g !== c ? (b.g = c, !0) : !1
        },
        f = function(c, d) {
            function f() {
                var b = g;
                e(b) && b.a.parentNode && d(b.g)
            }
            var g =
                c;
            b(c.b, f);
            b(c.c, f);
            e(c)
        },
        j = function(b, c) {
            var d = c || {};
            this.family = b;
            this.style = d.style || "normal";
            this.weight = d.weight || "normal";
            this.stretch = d.stretch || "normal"
        },
        n = function() {
            null === s && (s = !!document.fonts);
            return s
        },
        r = function() {
            if (null === q) {
                var b = document.createElement("div");
                try {
                    b.style.font = "condensed 100px sans-serif"
                } catch (c) {}
                q = "" !== b.style.font
            }
            return q
        },
        g = function(b, c) {
            return [b.style, b.weight, r() ? b.stretch : "", "100px", c].join(" ")
        },
        p = null,
        m = null,
        q = null,
        s = null;
    j.prototype.load = function(b, e) {
        var j =
            this,
            q = b || "BESbswy",
            r = 0,
            s = e || 3E3,
            B = (new Date).getTime();
        return new Promise(function(b, e) {
            var t;
            if (t = n()) null === m && (n() && /Apple/.test(window.navigator.vendor) ? (t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent), m = !!t && 603 > parseInt(t[1], 10)) : m = !1), t = !m;
            if (t) {
                t = new Promise(function(b, c) {
                    function d() {
                        (new Date).getTime() - B >= s ? c(Error("" + s + "ms timeout exceeded")) : document.fonts.load(g(j, '"' + j.family + '"'), q).then(function(c) {
                            1 <= c.length ? b() : setTimeout(d, 25)
                        }, c)
                    }
                    d()
                });
                var u = new Promise(function(b, c) {
                    r = setTimeout(function() {
                        c(Error("" + s + "ms timeout exceeded"))
                    }, s)
                });
                Promise.race([u, t]).then(function() {
                    clearTimeout(r);
                    b(j)
                }, e)
            } else {
                var la = function() {
                    function m() {
                        var c;
                        if (c = -1 != R && -1 != S || -1 != R && -1 != T || -1 != S && -1 != T)(c = R != S && R != T && S != T) || (null === p && (c = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent), p = !!c && (536 > parseInt(c[1], 10) || 536 === parseInt(c[1], 10) && 11 >= parseInt(c[2], 10))), c = p && (R == aa && S == aa && T == aa || R == O && S == O && T == O || R == Y && S == Y && T == Y)), c = !c;
                        c && (J.parentNode && J.parentNode.removeChild(J), clearTimeout(r), b(j))
                    }

                    function n() {
                        if ((new Date).getTime() - B >= s) J.parentNode && J.parentNode.removeChild(J), e(Error("" + s + "ms timeout exceeded"));
                        else {
                            var b = document.hidden;
                            if (!0 === b || void 0 === b) R = t.a.offsetWidth, S = u.a.offsetWidth, T = M.a.offsetWidth, m();
                            r = setTimeout(n, 50)
                        }
                    }
                    var t = new c(q),
                        u = new c(q),
                        M = new c(q),
                        R = -1,
                        S = -1,
                        T = -1,
                        aa = -1,
                        O = -1,
                        Y = -1,
                        J = document.createElement("div");
                    J.dir = "ltr";
                    d(t, g(j, "sans-serif"));
                    d(u, g(j, "serif"));
                    d(M, g(j, "monospace"));
                    J.appendChild(t.a);
                    J.appendChild(u.a);
                    J.appendChild(M.a);
                    document.body.appendChild(J);
                    aa = t.a.offsetWidth;
                    O = u.a.offsetWidth;
                    Y = M.a.offsetWidth;
                    n();
                    f(t, function(b) {
                        R = b;
                        m()
                    });
                    d(t, g(j, '"' + j.family + '",sans-serif'));
                    f(u, function(b) {
                        S = b;
                        m()
                    });
                    d(u, g(j, '"' + j.family + '",serif'));
                    f(M, function(b) {
                        T = b;
                        m()
                    });
                    d(M, g(j, '"' + j.family + '",monospace'))
                };
                document.body ? la() : document.addEventListener ? document.addEventListener("DOMContentLoaded", function V() {
                    document.removeEventListener("DOMContentLoaded", V);
                    la()
                }) : document.attachEvent("onreadystatechange",
                    function U() {
                        if ("interactive" == document.readyState || "complete" == document.readyState) document.detachEvent("onreadystatechange", U), la()
                    })
            }
        })
    };
    "object" === typeof module ? module.exports = j : (window.FontFaceObserver = j, window.FontFaceObserver.prototype.load = j.prototype.load);
    ig.Loader.inject({
        _parent: !1,
        fonts: ["porkys"],
        load: function() {
            this._parent = this.parent;
            for (var b = [], c = 0; c < this.fonts.length; c++) {
                var d = new FontFaceObserver(this.fonts[c]);
                b.push(d.load())
            }
            Promise.all(b).then(this.loadParent.bind(this))
        },
        loadParent: function() {
            this._parent()
        }
    })
});
ig.baked = !0;
ig.module("plugins.font-loaded-test").defines(function() {
    ig.FontLoadedTest = ig.Class.extend({
        testFont: function(b) {
            function c(b) {
                f.clearRect(0, 0, e.width, e.height);
                f.fillStyle = "rgba(0,0,0,1.0)";
                f.fillRect(0, 0, 40, 40);
                f.font = "20px " + b;
                f.textBaseline = "top";
                f.fillStyle = "rgba(255,255,255,1.0)";
                f.fillText("a", 18, 5);
                return f.getImageData(0, 0, 40, 40)
            }
            var d = "arial";
            ig.ua.ios && (d = "times");
            if (b.toLowerCase() == d) return !0;
            var e = ig.$new("canvas");
            e.width = 40;
            e.height = 40;
            var f = e.getContext("2d");
            b = c(b + "," + d);
            for (var d =
                    c(d), j = !1, n = 0; n < b.data.length; n++)
                if (b.data[n] != d.data[n]) {
                    j = !0;
                    break
                }
            return !j ? !1 : !0
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
            r = 0,
            g = !1,
            p = !1,
            m = !1;
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
            m = b
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
            r = 0; - 1 == b.tweens.indexOf(this) && b.tweens.push(this);
            p = !0;
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
            if (!p) return !1;
            if (this.delay) {
                if (g.delta() < this.delay) return;
                this.delay = 0;
                g.reset()
            }
            if (this.paused || this.complete) return !1;
            var c = (g.delta() + r) / this.duration,
                c = 1 < c ? 1 : c,
                d = this.easing(c);
            for (property in n) this.propUpdate(property, b, f, n, d);
            if (1 <= c) {
                if (0 == this.loopNum ||
                    !this.loop) {
                    this.complete = !0;
                    if (this.onComplete) this.onComplete();
                    m && m.start();
                    return !1
                }
                if (this.loop == ig.Tween.Loop.Revert) {
                    for (property in f) this.propSet(property, f, b);
                    r = 0;
                    g.reset(); - 1 != this.loopNum && this.loopNum--
                } else if (this.loop == ig.Tween.Loop.Reverse) {
                    c = {};
                    d = {};
                    ig.merge(c, j);
                    ig.merge(d, f);
                    ig.merge(f, c);
                    ig.merge(j, d);
                    for (property in j) this.initDelta(property, n, b, j);
                    r = 0;
                    g.reset(); - 1 != this.loopNum && this.loopNum--
                }
            }
        };
        this.pause = function() {
            this.paused = !0;
            g && g.delta && (r += g.delta())
        };
        this.resume = function() {
            this.paused = !1;
            g && g.reset && g.reset()
        };
        this.stop = function(b) {
            b && (this.loop = this.complete = this.paused = !1, r += d, this.update());
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
            for (var e = 0, f = b.length - 1, j = Math.pow, n = ig.Tween.Interpolation.Utils.Bernstein, r = 0; r <= f; r++) e += j(1 - d, f - r) * j(d, r) * b[r] * n(f, r);
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
ig.module("plugins.fullscreen").requires("impact.entity", "plugins.handlers.size-handler", "plugins.director").defines(function() {
    ig.Fullscreen = {
        enableFullscreenButton: !0,
        _isEnabled: "notChecked",
        isEnabled: function() {
            "notChecked" == this._isEnabled && (this._isEnabled = document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled || document.msFullscreenEnabled ? !0 : !1);
            return this._isEnabled
        },
        isFullscreen: function() {
            return ig.Fullscreen.isEnabled() && (document.fullscreenElement ||
                document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) ? !0 : !1
        },
        toggleFullscreen: function() {
            ig.Fullscreen.isFullscreen() ? ig.Fullscreen.exitFullscreen() : ig.Fullscreen.requestFullscreen();
            ig.sizeHandler.orientationDelayHandler()
        },
        requestFullscreen: function() {
            var b = document.documentElement;
            b.requestFullscreen ? b.requestFullscreen() : b.webkitRequestFullscreen ? b.webkitRequestFullscreen() : b.mozRequestFullScreen ? b.mozRequestFullScreen() : b.msRequestFullscreen ? b.msRequestFullscreen() :
                console.log("no request fullscreen method available")
        },
        exitFullscreen: function() {
            document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen ? document.msExitFullscreen() : console.log("no exit fullscreen method available")
        },
        divs: {}
    };
    ig.Director.inject({
        loadLevel: function(b) {
            var c = ig.Fullscreen.divs,
                d;
            for (d in c) c = ig.domHandler.getElementById("#" + d), ig.domHandler.hide(c);
            return this.parent(b)
        }
    });
    ig.SizeHandler.inject({
        resize: function() {
            this.parent();
            var b = ig.Fullscreen.divs,
                c;
            for (c in b) {
                var d = Math.min(ig.sizeHandler.scaleRatioMultiplier.x, ig.sizeHandler.scaleRatioMultiplier.y),
                    e = ig.domHandler.getElementById("#" + c),
                    f = b[c].entity_pos_x,
                    j = b[c].entity_pos_y,
                    n = b[c].width,
                    r = b[c].height,
                    g = ig.domHandler.getElementById("#canvas"),
                    p = ig.domHandler.getOffsets(g);
                ig.ua.mobile ? (g = p.left, p = p.top, ig.sizeHandler.disableStretchToFitOnMobileFlag ? (f = Math.floor(g + f * ig.sizeHandler.scaleRatioMultiplier.x) +
                    "px", j = Math.floor(p + j * ig.sizeHandler.scaleRatioMultiplier.y) + "px", n = Math.floor(n * ig.sizeHandler.scaleRatioMultiplier.x) + "px", r = Math.floor(r * ig.sizeHandler.scaleRatioMultiplier.y) + "px") : (f = Math.floor(f * ig.sizeHandler.sizeRatio.x) + "px", j = Math.floor(j * ig.sizeHandler.sizeRatio.y) + "px", n = Math.floor(n * ig.sizeHandler.sizeRatio.x) + "px", r = Math.floor(r * ig.sizeHandler.sizeRatio.y) + "px")) : (g = p.left, p = p.top, f = Math.floor(g + f * d) + "px", j = Math.floor(p + j * d) + "px", n = Math.floor(n * d) + "px", r = Math.floor(r * d) + "px");
                ig.domHandler.css(e, {
                    "float": "left",
                    position: "absolute",
                    left: f,
                    top: j,
                    width: n,
                    height: r,
                    "z-index": 3
                });
                b[c]["font-size"] && ig.domHandler.css(e, {
                    "font-size": b[c]["font-size"] * d + "px"
                })
            }
        }
    });
    ig.FullscreenButton = ig.Entity.extend({
        enterImage: null,
        exitImage: null,
        isReady: !1,
        zIndex: 999999,
        identifier: null,
        prevPos: {
            x: 0,
            y: 0
        },
        invisImagePath: "media/graphics/misc/invisible.png",
        init: function(b, c, d) {
            this.parent(b, c, d);
            ig.Fullscreen.isEnabled() && ig.Fullscreen.enableFullscreenButton ? this.enterImage.loaded ? this.initSize() : this.enterImage.loadCallback =
                function() {
                    this.initSize()
                }.bind(this) : this.kill()
        },
        kill: function() {
            this.parent()
        },
        destroy: function() {
            this.parent();
            console.log("destroy")
        },
        initSize: function() {
            this.size.x = this.enterImage.width;
            this.size.y = this.enterImage.height;
            this.createClickableLayer();
            this.isReady = !0
        },
        createClickableLayer: function() {
            this.identifier = "fullscreen-button-layer";
            var b = ig.domHandler.getElementById("#" + this.identifier);
            b ? (ig.domHandler.show(b), ig.domHandler.attr(b, "onclick", "ig.Fullscreen.toggleFullscreen()")) : this.createClickableOutboundLayer()
        },
        update: function(b, c) {
            b = this.pos.x;
            c = this.pos.y;
            this.isReady && !(this.prevPos.x === b && this.prevPos.y === c) && (ig.Fullscreen.divs[this.identifier] = {}, ig.Fullscreen.divs[this.identifier].width = this.size.x, ig.Fullscreen.divs[this.identifier].height = this.size.y, ig.Fullscreen.divs[this.identifier].entity_pos_x = this.pos.x, ig.Fullscreen.divs[this.identifier].entity_pos_y = this.pos.y, this.prevPos.x = b, this.prevPos.y = c)
        },
        draw: function() {
            this.isReady && (ig.Fullscreen.isFullscreen() ? this.exitImage.draw(this.pos.x, this.pos.y) :
                this.enterImage.draw(this.pos.x, this.pos.y))
        },
        createClickableOutboundLayer: function() {
            var b = this.identifier,
                c = this.invisImagePath,
                d = ig.domHandler.create("div");
            ig.domHandler.attr(d, "id", b);
            ig.domHandler.attr(d, "onclick", "ig.Fullscreen.toggleFullscreen()");
            var e = ig.domHandler.create("a"),
                f = ig.domHandler.create("img");
            ig.domHandler.css(f, {
                width: "100%",
                height: "100%"
            });
            ig.domHandler.attr(f, "src", c);
            c = Math.min(ig.sizeHandler.scaleRatioMultiplier.x, ig.sizeHandler.scaleRatioMultiplier.y);
            if (ig.ua.mobile) {
                var j =
                    ig.domHandler.getElementById("#canvas"),
                    j = ig.domHandler.getOffsets(j),
                    n = j.left,
                    r = j.top;
                console.log(j.left);
                ig.sizeHandler.disableStretchToFitOnMobileFlag ? (j = Math.floor(n + this.pos.x * ig.sizeHandler.scaleRatioMultiplier.x) + "px", r = Math.floor(r + this.pos.y * ig.sizeHandler.scaleRatioMultiplier.y) + "px", n = Math.floor(this.size.x * ig.sizeHandler.scaleRatioMultiplier.x) + "px", c = Math.floor(this.size.y * ig.sizeHandler.scaleRatioMultiplier.y) + "px") : (j = Math.floor(this.pos.x * ig.sizeHandler.sizeRatio.x) + "px", r = Math.floor(this.pos.y *
                    ig.sizeHandler.sizeRatio.y) + "px", n = Math.floor(this.size.x * ig.sizeHandler.sizeRatio.x) + "px", c = Math.floor(this.size.y * ig.sizeHandler.sizeRatio.y) + "px")
            } else j = ig.domHandler.getElementById("#canvas"), j = ig.domHandler.getOffsets(j), n = j.left, r = j.top, ig.sizeHandler.enableStretchToFitOnDesktopFlag ? (j = Math.floor(n + this.pos.x * ig.sizeHandler.sizeRatio.x) + "px", r = Math.floor(r + this.pos.y * ig.sizeHandler.sizeRatio.y) + "px", n = Math.floor(this.size.x * ig.sizeHandler.sizeRatio.x) + "px", c = Math.floor(this.size.y * ig.sizeHandler.sizeRatio.y) +
                "px") : (j = Math.floor(n + this.pos.x * c) + "px", r = Math.floor(r + this.pos.y * c) + "px", n = Math.floor(this.size.x * c) + "px", c = Math.floor(this.size.y * c) + "px");
            ig.domHandler.css(d, {
                "float": "left",
                position: "absolute",
                left: j,
                top: r,
                width: n,
                height: c,
                "z-index": 3
            });
            ig.domHandler.addEvent(d, "mousemove", ig.input.mousemove.bind(ig.input), !1);
            ig.domHandler.appendChild(e, f);
            ig.domHandler.appendChild(d, e);
            ig.domHandler.appendToBody(d);
            ig.Fullscreen.divs[b] = {};
            ig.Fullscreen.divs[b].width = this.size.x;
            ig.Fullscreen.divs[b].height =
                this.size.y;
            ig.Fullscreen.divs[b].entity_pos_x = this.pos.x;
            ig.Fullscreen.divs[b].entity_pos_y = this.pos.y
        }
    })
});
ig.baked = !0;
ig.module("plugins.gamedist").defines(function() {
    window.GD_OPTIONS = {
        gameId: "241e9260341e4eb7ba7ce6b0d145aa8d",
        advertisementSettings: {
            debug: !1,
            autoplay: !1,
            locale: "en"
        },
        onEvent: function(c) {
            switch (c.name) {
                case "SDK_READY":
                    console.log('%cMjs-Gd: "The sdk is ready"', b);
                    ig.gd.ready = !0;
                    gameStart();
                    break;
                case "SDK_ERROR":
                    console.log('%cMjs-Gd: "The sdk is error"', b);
                    gameStart();
                    break;
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
    var b = "color: blue; font-weight: bold";
    var c, d = document.getElementsByTagName("script")[0];
    document.getElementById("gamedistribution-jssdk") || (c = document.createElement("script"), c.id = "gamedistribution-jssdk",
        c.src = "", d.parentNode.insertBefore(c, d));
    ig.Gd = ig.Class.extend({
        pausedMidplay: 0,
        prevMuted: {
            bgm: 0,
            sfx: 0
        },
        onAdClose: 0,
        adShowing: 0,
        isFreez: 0,
        ready: !1,
        createTestButton: function() {
            this.createDiv("Resume", 5, "green", "white", function() {
                ig.game && ig.gd &&
                    ig.gd.unfreez()
            });
            this.createDiv("Pause", 70, "red", "white", function() {
                ig.game && ig.gd && ig.gd.freez()
            });
            this.createDiv("Show Rewarded", 124, "purple", "white", function() {
                ig.game && ig.gd && ig.gd.showRewarded()
            })
        },
        createDiv: function(b, c, d, n, r) {
            var g = ig.$new("button");
            document.body.appendChild(g);
            g.textContent = b;
            g.style.position = "absolute";
            g.style.color = n;
            g.style.background = d;
            g.style.top = "5px";
            g.style.left = c + "px";
            g.style.padding = "5px";
            g.style.fontSize = "12px";
            g.style.fontFamily = "Arial";
            g.style.cursor = "pointer";
            g.style["z-index"] = 999999;
            g.onclick = r
        },
        freez: function() {
            // "undefined" !== typeof gdsdk && (ig.soundHandler.muteAll(!0), ig.game && ig.game.pauseGame(), ig.gd.isFreez = 1)
        },
        unfreez: function() {
            // "undefined" !== typeof gdsdk && (ig.gd.adShowing = 0, ig.gd.isFreez = 0, ig.soundHandler.unmuteAll(!0), ig.game && ig.game.resumeGame())
        },
        show: function(c) {
            // "undefined" !== typeof gdsdk && "undefined" !== gdsdk.showAd && "undefined" !== gdsdk.preloadAd && ig.gd.ready ? ig.gd.adShowing || (console.log('%cMjs-Gd: "Ad is avaiable - Showing ad"', b), ig.gd.adShowing =
            // 	1, ig.gd.onAdClose = c || 0, gdsdk.showAd().catch(function(b) {
            // 		console.log("Mjs-Gd: " + b);
            // 		"function" === typeof c && c();
            // 		ig.gd.unfreez()
            // 	})) :
            c()
        },
        showRewarded: function(b) {
            // "undefined" !== typeof gdsdk && "undefined" !== gdsdk.showAd ? ig.gd.adShowing || (ig.gd.adShowing = 1, ig.gd.onAdClose = b || 0, gdsdk.showAd("rewarded").catch(function(c) {
            // 	console.log("Mjs-Gd: " + c);
            // 	"function" === typeof b && b();
            // 	ig.gd.unfreez()
            // })) :
            b()
        },
        isAvaiableRewarded: function(c) {
            // "undefined" !== gdsdk && "undefined" !== gdsdk.preloadAd && ig.gd.ready ? gdsdk.preloadAd("rewarded").then(function(d) {
            // 	d;
            // 	console.log('%cMjs-Gd: "Ad reward is avaiable"', b);
            // 	"function" === typeof c && c(!0)
            // }.bind(this)).catch(function(d) {
            // 	d;
            // 	console.log('%cMjs-Gd: "Ad reward not available"', b);
            // 	"function" === typeof c && c(!1)
            // }.bind(this)) : "function" === typeof c && c(!1)
        }
    });
    ig.gd = new ig.Gd
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
ig.module("game.entities.others.marketjs-entity").requires("impact.entity", "plugins.data.vector").defines(function() {
    EntityMarketjsEntity = ig.Entity.extend({
        idleSheetInfo: null,
        scaling: !1,
        bodyScale: 1,
        init: function(b, c, d) {
            null != this.idleSheetInfo && (this.setSpriteSheet("idle"), this.setSize("idle"));
            this.parent(b, c, d)
        },
        setSpriteSheet: function(b) {
            this[b + "Sheet"] = new ig.AnimationSheet(this[b + "SheetInfo"].sheetImage.path, this[b + "SheetInfo"].sheetImage.width / this[b + "SheetInfo"].sheetX, this[b + "SheetInfo"].sheetImage.height /
                this[b + "SheetInfo"].sheetY)
        },
        setSize: function(b) {
            this.size.x = this[b + "SheetInfo"].sheetImage.width / this[b + "SheetInfo"].sheetX;
            this.size.y = this[b + "SheetInfo"].sheetImage.height / this[b + "SheetInfo"].sheetY
        },
        update: function() {
            this.parent();
            !0 == this.scaling && this.setScale(this.bodyScale, this.bodyScale)
        },
        setTopMiddlePosition: function(b, c) {
            this.pos.x = b - this.size.x / 2;
            this.pos.y = c
        },
        getTopMiddlePosition: function() {
            var b = new Vector2;
            b.x = this.pos.x + this.size.x / 2;
            b.y = this.pos.y;
            return b
        },
        setMiddlePosition: function(b,
            c) {
            this.pos.x = b - this.size.x / 2;
            this.pos.y = c - this.size.y / 2
        },
        getMiddlePosition: function() {
            var b = new Vector2;
            b.x = this.pos.x + this.size.x / 2;
            b.y = this.pos.y + this.size.y / 2;
            return b
        },
        setBottomMiddlePosition: function(b, c) {
            this.pos.x = b - this.size.x / 2;
            this.pos.y = c - this.size.y
        },
        getBottomMiddlePosition: function() {
            var b = new Vector2;
            b.x = this.pos.x + this.size.x / 2;
            b.y = this.pos.y + this.size.y;
            return b
        },
        stringPosition: function() {
            return "pos: {" + this.pos.x + ", " + this.pos.y + "}"
        },
        stringSize: function() {
            return "size: {" + this.size.x +
                ", " + this.size.y + "}"
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button").requires("game.entities.others.marketjs-entity", "plugins.data.vector").defines(function() {
    EntityButton = EntityMarketjsEntity.extend({
        zIndex: 0,
        collides: ig.Entity.COLLIDES.NEVER,
        type: ig.Entity.TYPE.A,
        fillColor: null,
        zIndex: 95E3,
        originalPos: null,
        disable: !1,
        isClicking: !1,
        isTweening: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            !ig.global.wm && !isNaN(d.zIndex) && (this.zIndex = d.zIndex);
            b = Math.floor(256 * Math.random());
            c = Math.floor(256 * Math.random());
            d = Math.floor(256 * Math.random());
            this.fillColor = "rgba(" + b + "," + d + "," + c + ",1)";
            this.scaling = !0
        },
        clicked: function() {
            this.disable || ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.buttonClick)
        },
        clicking: function() {
            throw "no implementation on clicking()";
        },
        released: function() {
            throw "no implementation on released()";
        },
        disableClick: function() {
            this.disable = !0
        },
        enableClick: function() {
            this.disable = !1
        },
        show: function(b, c) {
            this.isTweening = this.disable = !0;
            null == b && (b = 0.5);
            this.pos.x = this.originalPos.x;
            this.pos.y = this.originalPos.y;
            this.bodyScale = 0;
            this.tween({
                bodyScale: 1
            }, b, {
                easing: ig.Tween.Easing.Back.EaseOut,
                onComplete: function() {
                    this.isTweening = this.disable = !1;
                    c ? c() : ""
                }.bind(this)
            }).start()
        },
        hide: function(b, c) {
            this.isTweening = this.disable = !0;
            null == b && (b = 0.5);
            this.tween({
                bodyScale: 0
            }, b, {
                easing: ig.Tween.Easing.Back.EaseIn,
                onComplete: function() {
                    this.isTweening = this.disable = !1;
                    c ? c() : "";
                    this.pos.y = -1E3
                }.bind(this)
            }).start()
        },
        setMiddlePosition: function(b, c) {
            this.pos.x = b - this.size.x / 2;
            this.pos.y = c - this.size.y / 2;
            this.originalPos =
                new Vector2(this.pos.x, this.pos.y)
        }
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
                    r = e.top;
                console.log(e.left);
                ig.sizeHandler.disableStretchToFitOnMobileFlag ? (e = Math.floor(n + this.pos.x * ig.sizeHandler.scaleRatioMultiplier.x) + "px", r = Math.floor(r + this.pos.y * ig.sizeHandler.scaleRatioMultiplier.y) + "px", n = Math.floor(this.size.x * ig.sizeHandler.scaleRatioMultiplier.x) + "px", d = Math.floor(this.size.y * ig.sizeHandler.scaleRatioMultiplier.y) + "px") : (e = Math.floor(this.pos.x *
                    ig.sizeHandler.sizeRatio.x) + "px", r = Math.floor(this.pos.y * ig.sizeHandler.sizeRatio.y) + "px", n = Math.floor(this.size.x * ig.sizeHandler.sizeRatio.x) + "px", d = Math.floor(this.size.y * ig.sizeHandler.sizeRatio.y) + "px")
            } else e = ig.domHandler.getElementById("#canvas"), e = ig.domHandler.getOffsets(e), n = e.left, r = e.top, ig.sizeHandler.enableStretchToFitOnDesktopFlag ? (e = Math.floor(n + this.pos.x * ig.sizeHandler.sizeRatio.x) + "px", r = Math.floor(r + this.pos.y * ig.sizeHandler.sizeRatio.y) + "px", n = Math.floor(this.size.x * ig.sizeHandler.sizeRatio.x) +
                "px", d = Math.floor(this.size.y * ig.sizeHandler.sizeRatio.y) + "px") : (e = Math.floor(n + this.pos.x * d) + "px", r = Math.floor(r + this.pos.y * d) + "px", n = Math.floor(this.size.x * d) + "px", d = Math.floor(this.size.y * d) + "px");
            ig.domHandler.css(f, {
                "float": "left",
                position: "absolute",
                left: e,
                top: r,
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
ig.module("game.entities.buttons.button-more-games").requires("game.entities.buttons.button", "plugins.clickable-div-layer").defines(function() {
    EntityButtonMoreGames = EntityButton.extend({
        type: ig.Entity.TYPE.A,
        gravityFactor: 0,
        logo: new ig.AnimationSheet("media/graphics/sprites/menu/button-more-games.png", 184, 184),
        size: {
            x: 184,
            y: 184
        },
        zIndex: 0,
        clickableLayer: null,
        link: null,
        newWindow: !1,
        div_layer_name: "more-games",
        name: "moregames",
        isTweening: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            ig.global.wm || (this.div_layer_name =
                d.div_layer_name ? d.div_layer_name : "more-games", this.scaling = !0)
        },
        setButtonLink: function() {
            _SETTINGS.MoreGames.Enabled ? (this.anims.idle = new ig.Animation(this.logo, 0, [0], !0), this.currentAnim = this.anims.idle, _SETTINGS.MoreGames.Link && (this.link = _SETTINGS.MoreGames.Link), _SETTINGS.MoreGames.NewWindow && (this.newWindow = _SETTINGS.MoreGames.NewWindow), this.clickableLayer = new ClickableDivLayer(this)) : this.kill()
        },
        update: function() {
            this.parent();
            var b = ig.game.io.mouse.getPos();
            this.mouseOver = !ig.ua.mobile &&
                b.x >= this.pos.x && b.x <= this.pos.x + this.size.x && b.y >= this.pos.y && b.y <= this.pos.y + this.size.y ? !0 : !1
        },
        show: function(b, c) {
            this.isTweening = !0;
            null == b && (b = 0.5);
            this.pos.x = this.originalPos.x;
            this.pos.y = this.originalPos.y;
            this.bodyScale = 0;
            this.tween({
                bodyScale: 1
            }, b, {
                easing: ig.Tween.Easing.Back.EaseOut,
                onComplete: function() {
                    this.isTweening = this.disable = !1;
                    c ? c() : ""
                }.bind(this)
            }).start()
        },
        hide: function(b, c) {
            this.isTweening = !0;
            null == b && (b = 0.5);
            this.tween({
                bodyScale: 0
            }, b, {
                easing: ig.Tween.Easing.Back.EaseIn,
                onComplete: function() {
                    this.isTweening =
                        this.disable = !1;
                    c ? c() : "";
                    this.pos.y = -1E3
                }.bind(this)
            }).start()
        },
        clicked: function() {
            this.parent()
        },
        clicking: function() {},
        released: function() {},
        disableClick: function() {
            this.parent();
            var b = ig.domHandler.getElementById("#" + this.div_layer_name);
            b && ig.domHandler.hide(b)
        },
        enableClick: function() {
            this.parent();
            var b = ig.domHandler.getElementById("#" + this.div_layer_name);
            b && ig.domHandler.show(b)
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
        zIndex: 5500,
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
            x: 20,
            y: 20
        },
        init: function(b, c, d) {
            this.parent(b, c, d)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.pointer-extended").requires("impact.entity", "game.entities.buttons.button").defines(function() {
    EntityPointerExtended = ig.Entity.extend({
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
        zIndex: 5500,
        check: function(b) {
            this.objectArray.push(b)
        },
        clickObject: function(b) {
            this.isFirstPressed && "function" == typeof b.clicked && (b.clicked(), this.addToClickedObjectList(b));
            this.isPressed && !this.isReleased && "function" == typeof b.clicking && b.clicking();
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
            if (null != b) null != this.hoveringItem ? this.hoveringItem != b && ("function" == typeof this.hoveringItem.leave &&
                this.hoveringItem.leave(), "function" == typeof b.over && b.over()) : "function" == typeof b.over && b.over(), this.hoveringItem = b, this.clickObject(b), this.objectArray = [];
            else if (null != this.hoveringItem && "function" == typeof this.hoveringItem.leave && (this.hoveringItem.leave(), this.hoveringItem = null), this.isReleased) {
                for (c = 0; c < this.clickedObjectList.length; c++) {
                    var d = this.clickedObjectList[c];
                    "function" == typeof d.releasedOutside && d.releasedOutside()
                }
                this.clickedObjectList = []
            }
            this.isFirstPressed = ig.input.pressed("click");
            this.isReleased = ig.input.released("click");
            this.isPressed = ig.input.state("click");
            ig.game.pointerOverButton = null != b ? b instanceof EntityButton ? !0 : !1 : !1
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
ig.module("game.entities.buttons.button-sound").requires("game.entities.buttons.button").defines(function() {
    EntityButtonSound = EntityButton.extend({
        type: ig.Entity.TYPE.A,
        gravityFactor: 0,
        logo: new ig.AnimationSheet("branding/logo.png", _SETTINGS.Branding.Logo.Width, _SETTINGS.Branding.Logo.Height),
        zIndex: 10001,
        size: {
            x: 50,
            y: 50
        },
        mutetest: !1,
        name: "soundtest",
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        draw: function() {
            this.parent();
            ig.system.context.fillRect(this.pos.x, this.pos.y, 50, 50)
        },
        clicked: function() {
            console.log("pressed");
            this.mutetest ? (console.log("unmute"), ig.soundHandler.unmuteAll(!0), this.mutetest = !1) : (console.log("mute"), ig.soundHandler.muteAll(!0), this.mutetest = !0)
        },
        clicking: function() {},
        released: function() {}
    })
});
ig.baked = !0;
ig.module("game.entities.test").requires("impact.entity").defines(function() {
    EntityTest = ig.Entity.extend({
        zIndex: 99999,
        pos: new Vector2(0, 0),
        size: new Vector2(20, 20),
        color: new ColorRGB(125, 255, 125, 1),
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        update: function() {
            this.parent()
        },
        draw: function() {
            this.parent();
            var b = ig.system.context;
            b.fillStyle = this.color.getHex();
            b.fillRect(this.pos.x, this.pos.y, this.size.x, this.size.y)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.test-control").requires("impact.entity", "game.entities.test").defines(function() {
    EntityTestControl = ig.Entity.extend({
        zIndex: 99999,
        size: new Vector2(20, 20),
        testEnt: null,
        tween: null,
        init: function(b, c, d) {
            this.parent(b, c, d);
            ig.global.wm || (ig.game.testControl = this, this.initTestCase3());
            ig.game.spawnEntity(ig.FullscreenButton, 5, 5, {
                enterImage: new ig.Image("media/graphics/misc/enter-fullscreen-transparent.png"),
                exitImage: new ig.Image("media/graphics/misc/exit-fullscreen-transparent.png")
            })
        },
        initTestCase1: function() {
            this.initTestCase1Initialized = !0;
            this.testEnt = ig.game.spawnEntity(EntityTest, 200, 200);
            this.tweenSlow = (new ig.TweenDef(this.testEnt.pos)).to({
                x: 100,
                y: 100
            }, 2E3).easing(ig.Tween.Easing.Bounce.EaseOut).interpolation(ig.Tween.Interpolation.Bezier).repeat(2).yoyo(!0);
            this.tweenFast = (new ig.TweenDef(this.testEnt.pos)).to({
                x: 300,
                y: 300
            }, 500).repeat(4).yoyo(!0);
            this.tweenSlow.chain(this.tweenFast);
            this.tweenFast.chain(this.tweenSlow);
            this.tweenFast.start()
        },
        initTestCase2: function() {
            this.initTestCase2Initialized = !0;
            this.coordsTween = (new ig.TweenDef({
                x: 0,
                y: 0
            })).to({
                x: 100,
                y: 100
            }, 1E3).easing(ig.Tween.Easing.Bounce.EaseInOut).onStart(function(b) {
                console.log("Start", b);
                this.coordsTween.pause()
            }.bind(this)).onUpdate(function() {
                0.5 <= this.coordsTween._currentElapsed && this.coordsTween.stop()
            }.bind(this)).onStop(function(b) {
                console.log("Stop", b)
            }.bind(this)).onComplete(function(b) {
                console.log("Complete", b)
            }.bind(this)).onPause(function(b) {
                console.log("Pause", b);
                this.coordsTween.resume()
            }.bind(this)).onResume(function(b) {
                console.log("Resume",
                    b)
            }.bind(this)).start()
        },
        initTestCase3: function() {
            this.initTestCase3Initialized = !0;
            this.spawnTweenEntity();
            this.spawnTweenControlButtons()
        },
        initTestCase4: function() {
            this.initTestCase4Initialized = !0;
            this.testEntityA = ig.game.spawnEntity(EntityTest, 450, 200, {
                control: this,
                size: new Vector2(20, 40)
            });
            this.testEntityB = ig.game.spawnEntity(EntityTest, 475, 200, {
                control: this,
                size: new Vector2(40, 20)
            });
            this.testEntityB.color.r = 255;
            this.testEntityB.color.g = 0;
            this.testEntityB.color.b = 0
        },
        spawnTweenEntity: function() {
            this.tweenEntity =
                ig.game.spawnEntity(EntityTest, 895, 49, {
                    control: this,
                    color: new ColorRGB(255, 125, 125, 1)
                });
            this.tweenControl = (new ig.TweenDef(this.tweenEntity.pos)).to({
                y: 330
            }, 5E3)
        },
        spawnTweenControlButtons: function() {
            this.tweenControlButtons = {
                start: ig.game.spawnEntity(EntityButton, 800, 50, {
                    control: this,
                    size: new Vector2(68, 48),
                    color: new ColorRGB(255, 125, 125, 1)
                }),
                stop: ig.game.spawnEntity(EntityButton, 800, 100, {
                    control: this,
                    size: new Vector2(68, 48),
                    color: new ColorRGB(255, 125, 125, 1)
                }),
                pause: ig.game.spawnEntity(EntityButton,
                    800, 150, {
                        control: this,
                        size: new Vector2(68, 48),
                        color: new ColorRGB(255, 125, 125, 1)
                    }),
                resume: ig.game.spawnEntity(EntityButton, 800, 200, {
                    control: this,
                    size: new Vector2(68, 48),
                    color: new ColorRGB(255, 125, 125, 1)
                }),
                end: ig.game.spawnEntity(EntityButton, 800, 250, {
                    control: this,
                    size: new Vector2(68, 48),
                    color: new ColorRGB(255, 125, 125, 1)
                }),
                pGame: ig.game.spawnEntity(EntityButton, 800, 300, {
                    control: this,
                    size: new Vector2(68, 48),
                    color: new ColorRGB(255, 125, 125, 1)
                })
            };
            this.setupTweenControlButtons()
        },
        setupTweenControlButtons: function() {
            var b =
                null;
            for (buttonKey in this.tweenControlButtons) b = this.tweenControlButtons[buttonKey], b.name = buttonKey, b.backgroundColor = b.color.getStyle(), b.foregroundColor = b.color.getInvertedColor().getStyle(), b.draw = function() {
                ig.system.context.fillStyle = this.backgroundColor;
                ig.system.context.fillRect(this.pos.x, this.pos.y, this.size.x, this.size.y);
                ig.system.context.fillStyle = this.foregroundColor;
                ig.system.context.font = "18px Arial";
                ig.system.context.textBaseline = "middle";
                ig.system.context.textAlign = "center";
                ig.system.context.fillText(this.name,
                    this.pos.x + 0.5 * this.size.x, this.pos.y + 0.5 * this.size.y)
            };
            this.tweenControlButtons.start.clicked = function() {
                console.log("start");
                this.control.tweenControl.start()
            };
            this.tweenControlButtons.start.clicking = function() {};
            this.tweenControlButtons.start.released = function() {};
            this.tweenControlButtons.stop.clicked = function() {
                console.log("stop");
                this.control.tweenControl.stop()
            };
            this.tweenControlButtons.stop.clicking = function() {};
            this.tweenControlButtons.stop.released = function() {};
            this.tweenControlButtons.pause.clicked =
                function() {
                    console.log("pause");
                    this.control.tweenControl.pause()
                };
            this.tweenControlButtons.pause.clicking = function() {};
            this.tweenControlButtons.pause.released = function() {};
            this.tweenControlButtons.resume.clicked = function() {
                console.log("resume");
                this.control.tweenControl.resume()
            };
            this.tweenControlButtons.resume.clicking = function() {};
            this.tweenControlButtons.resume.released = function() {};
            this.tweenControlButtons.end.clicked = function() {
                console.log("end");
                this.control.tweenControl.end()
            };
            this.tweenControlButtons.end.clicking =
                function() {};
            this.tweenControlButtons.end.released = function() {};
            this.tweenControlButtons.pGame.clicked = function() {
                ig.game.pauseGame()
            };
            this.tweenControlButtons.pGame.clicking = function() {};
            this.tweenControlButtons.pGame.released = function() {}
        },
        update: function() {
            this.parent()
        },
        draw: function() {
            this.parent();
            !0 === this.testCase3Initialized && this.drawTestCase3Info()
        },
        drawTestCase3Info: function() {}
    })
});
ig.baked = !0;
ig.module("game.levels.test-desktop").requires("impact.image", "game.entities.branding-logo-placeholder", "game.entities.buttons.button-more-games", "game.entities.pointer", "game.entities.buttons.button-sound", "game.entities.test-control").defines(function() {
    LevelTestDesktop = {
        entities: [{
            type: "EntityBrandingLogoPlaceholder",
            x: 296,
            y: 396,
            settings: {
                div_layer_name: "layer_mainmenu",
                centralize: "true"
            }
        }, {
            type: "EntityButtonMoreGames",
            x: 580,
            y: 284,
            settings: {
                div_layer_name: "layer_moregames_mainmenu"
            }
        }, {
            type: "EntityPointer",
            x: 608,
            y: 120
        }, {
            type: "EntityButtonSound",
            x: 332,
            y: 284
        }, {
            type: "EntityTestControl",
            x: 0,
            y: 0
        }],
        layer: [{
            name: "background",
            width: 16,
            height: 9,
            linkWithCollision: !1,
            visible: 1,
            tilesetName: "media/graphics/backgrounds/desktop/background.jpg",
            repeat: !1,
            preRender: !0,
            distance: "1",
            tilesize: 60,
            foreground: !1,
            data: [
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
                [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32],
                [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48],
                [49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64],
                [65, 66, 67, 68, 69,
                    70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80
                ],
                [81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96],
                [97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112],
                [113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128],
                [129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144]
            ]
        }]
    };
    LevelTestDesktopResources = [new ig.Image("media/graphics/backgrounds/desktop/background.jpg")]
});
ig.baked = !0;
ig.module("game.levels.test-mobile").requires("impact.image", "game.entities.branding-logo-placeholder", "game.entities.buttons.button-more-games", "game.entities.pointer", "game.entities.buttons.button-sound").defines(function() {
    LevelTestMobile = {
        entities: [{
            type: "EntityBrandingLogoPlaceholder",
            x: 216,
            y: 548,
            settings: {
                div_layer_name: "layer_mainmenu",
                centralize: "true"
            }
        }, {
            type: "EntityButtonMoreGames",
            x: 238,
            y: 625,
            settings: {
                div_layer_name: "layer_moregames_mainmenu"
            }
        }, {
            type: "EntityPointer",
            x: 444,
            y: 192
        }, {
            type: "EntityButtonSound",
            x: 245,
            y: 490
        }],
        layer: [{
            name: "background",
            width: 9,
            height: 16,
            linkWithCollision: !1,
            visible: 1,
            tilesetName: "media/graphics/backgrounds/mobile/background.jpg",
            repeat: !1,
            preRender: !0,
            distance: "1",
            tilesize: 60,
            foreground: !1,
            data: [
                [1, 2, 3, 4, 5, 6, 7, 8, 9],
                [10, 11, 12, 13, 14, 15, 16, 17, 18],
                [19, 20, 21, 22, 23, 24, 25, 26, 27],
                [28, 29, 30, 31, 32, 33, 34, 35, 36],
                [37, 38, 39, 40, 41, 42, 43, 44, 45],
                [46, 47, 48, 49, 50, 51, 52, 53, 54],
                [55, 56, 57, 58, 59, 60, 61, 62, 63],
                [64, 65, 66, 67, 68, 69, 70, 71, 72],
                [73, 74, 75, 76, 77, 78, 79, 80, 81],
                [82, 83, 84, 85, 86, 87, 88, 89, 90],
                [91, 92, 93, 94, 95, 96, 97, 98, 99],
                [100, 101, 102, 103, 104, 105, 106, 107, 108],
                [109, 110, 111, 112, 113, 114, 115, 116, 117],
                [118, 119, 120, 121, 122, 123, 124, 125, 126],
                [127, 128, 129, 130, 131, 132, 133, 134, 135],
                [136, 137, 138, 139, 140, 141, 142, 143, 144]
            ]
        }]
    };
    LevelTestMobileResources = [new ig.Image("media/graphics/backgrounds/mobile/background.jpg")]
});
ig.baked = !0;
ig.module("game.entities.menu.game-title").requires("game.entities.others.marketjs-entity").defines(function() {
    EntityGameTitle = EntityMarketjsEntity.extend({
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/menu/title.png"),
            sheetX: 1,
            sheetY: 1
        },
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 1, [0])
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-play").requires("impact.entity", "game.entities.buttons.button").defines(function() {
    EntityButtonPlay = EntityButton.extend({
        zIndex: 0,
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/menu/button-play.png"),
            sheetX: 1,
            sheetY: 1
        },
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 1, [0])
        },
        clicked: function() {
            this.parent();
            !this.disable && (!this.isClicking && !1 == this.isClicking) && (this.isClicking = !0, this.tween({
                    bodyScale: 0.8
                },
                0.1, {
                    onComplete: function() {
                        this.tween({
                            bodyScale: 1
                        }, 0.1, {
                            onComplete: function() {
                                this.controller.onBtnPlayClicked();
                                this.isClicking = !1
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
ig.module("game.entities.buttons.button-setting").requires("impact.entity", "game.entities.buttons.button").defines(function() {
    EntityButtonSetting = EntityButton.extend({
        zIndex: 0,
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/menu/button-settings.png"),
            sheetX: 1,
            sheetY: 1
        },
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 1, [0])
        },
        ready: function() {},
        clicked: function() {
            this.parent();
            !this.disable && (!this.isClicking && !1 == this.isClicking) && (this.isClicking = !0, this.tween({
                bodyScale: 0.8
            }, 0.1, {
                onComplete: function() {
                    this.tween({
                        bodyScale: 1
                    }, 0.1, {
                        onComplete: function() {
                            this.controller.openSettings();
                            this.isClicking = !1
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
ig.module("game.entities.buttons.button-home").requires("impact.entity", "game.entities.buttons.button").defines(function() {
    EntityButtonHome = EntityButton.extend({
        gravityFactor: 0,
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/common/button-home.png"),
            sheetX: 1,
            sheetY: 1
        },
        offsetY: 0,
        pointerFocus: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 1, [0])
        },
        update: function() {
            this.parent();
            this.pointerCollide()
        },
        pointerCollide: function() {
            if (!ig.ua.mobile &&
                !ig.game.easing) {
                var b = ig.game.getEntitiesByType(EntityPointerExtended)[0];
                if (!this.pointerFocus || !(this.pos.x <= b.pos.x && this.pos.y <= b.pos.y && this.pos.x + this.size.x >= b.pos.x && this.pos.y + this.size.y + 5 >= b.pos.y)) this.pos.x <= b.pos.x && this.pos.y <= b.pos.y && this.pos.x + this.size.x >= b.pos.x && this.pos.y + this.size.y >= b.pos.y ? this.pointerFocus || (this.offsetY = -5, this.pointerFocus = !0) : this.pointerFocus && (this.offsetY = 0, this.pointerFocus = !1)
            }
        },
        clicked: function() {
            this.parent();
            ig.gd.show(this.homeGame.bind(this))
        },
        homeGame: function() {
            !1 == ig.game.easing && (ig.game.easing = !0, this.tween({
                bodyScale: 0.8
            }, 0.1, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {
                    this.tween({
                        bodyScale: 1
                    }, 0.1, {
                        easing: ig.Tween.Easing.Linear.EaseNone,
                        onComplete: function() {
                            ig.game.gotoMenu()
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
ig.module("game.entities.common.pop-up-settings").requires("game.entities.others.marketjs-entity", "game.entities.buttons.button", "game.entities.buttons.button-home").defines(function() {
    EntityPopUpSettings = EntityMarketjsEntity.extend({
        gravityFactor: 0,
        zIndex: 50,
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/common/settings-window.png"),
            sheetX: 1,
            sheetY: 1
        },
        titleText: new ig.Image("media/graphics/sprites/common/settings-text.png"),
        titleTextPause: new ig.Image("media/graphics/sprites/common/paused-text.png"),
        iconBgm: new ig.Image("media/graphics/sprites/common/music-icon.png"),
        iconSfx: new ig.Image("media/graphics/sprites/common/sound-icon.png"),
        buttonClose: null,
        buttonHome: null,
        barBgm: null,
        barSfx: null,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 1, [0]);
            this.setMiddlePosition(d.controller.rWidthH, d.controller.rHeightH);
            this.pos.y += ig.system.height;
            this.blackBg = ig.game.spawnEntity(EntityBlackBackground, 0, 0, {
                controller: this.controller,
                zIndex: this.zIndex -
                    1
            });
            this.barBgm = ig.game.spawnEntity(EntityPUSettingsBarBgm, ig.system.width, ig.system.height, {
                controller: this.controller,
                zIndex: this.zIndex + 1
            });
            this.barSfx = ig.game.spawnEntity(EntityPUSettingsBarSfx, ig.system.width, ig.system.height, {
                controller: this.controller,
                zIndex: this.zIndex + 1
            });
            this.controller instanceof EntityMenuController ? this.buttonClose = ig.game.spawnEntity(EntityPUSettingsButtonClose, ig.system.width, ig.system.height, {
                controller: this.controller,
                zIndex: this.zIndex + 1
            }) : (this.buttonClose = ig.game.spawnEntity(EntityPUSettingsButtonClose,
                ig.system.width, ig.system.height, {
                    controller: this.controller,
                    zIndex: this.zIndex + 1
                }), this.buttonHome = ig.game.spawnEntity(EntityButtonHome, ig.system.width, ig.system.height, {
                controller: this.controller,
                zIndex: this.zIndex + 1
            }))
        },
        update: function() {
            this.parent();
            this.barBgm.pos.x = this.pos.x + 8.8 * this.size.x / 10 - this.barBgm.size.x;
            this.barBgm.pos.y = this.pos.y + 9 * this.size.y / 20 - 1 * this.barBgm.size.y / 2;
            this.barSfx.pos.x = this.pos.x + 8.8 * this.size.x / 10 - this.barSfx.size.x;
            this.barSfx.pos.y = this.pos.y + 14 * this.size.y /
                20 - 1 * this.barSfx.size.y / 2;
            this.controller instanceof EntityMenuController ? this.buttonClose.pos.x = this.pos.x + 1 * this.size.x / 2 - 1 * this.buttonClose.size.x / 2 : (this.buttonHome.pos.x = this.pos.x + 1 * this.size.x / 4 - 1 * this.buttonHome.size.x / 2, this.buttonHome.pos.y = this.pos.y + 26 * this.size.y / 20 - 1 * this.buttonHome.size.y / 2 + this.buttonHome.offsetY, this.buttonClose.pos.x = this.pos.x + 3 * this.size.x / 4 - 1 * this.buttonClose.size.x / 2);
            this.buttonClose.pos.y = this.pos.y + 26 * this.size.y / 20 - 1 * this.buttonClose.size.y / 2 + this.buttonClose.offsetY
        },
        draw: function() {
            var b, c;
            this.parent();
            ig.system.context.save();
            this.controller instanceof EntityMenuController ? (b = this.pos.x + 1 * this.size.x / 2 - this.titleText.width / 2, c = this.pos.y + 2.6 * this.size.y / 20, this.titleText.draw(b, c)) : (b = this.pos.x + 1 * this.size.x / 2 - this.titleTextPause.width / 2, c = this.pos.y + 2.6 * this.size.y / 20, this.titleTextPause.draw(b, c));
            ig.system.context.restore()
        },
        easeOut: function() {
            this.blackBg.easeOut();
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
            this.blackBg.easeIn();
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
        gravityFactor: 0,
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/common/button-back.png"),
            sheetX: 1,
            sheetY: 1
        },
        scaling: !0,
        offsetY: 0,
        pointerFocus: !1,
        init: function(b, c,
            d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 1, [0])
        },
        update: function() {
            this.parent();
            this.pointerCollide()
        },
        pointerCollide: function() {
            if (!ig.ua.mobile && !ig.game.easing) {
                var b = ig.game.getEntitiesByType(EntityPointerExtended)[0];
                if (!this.pointerFocus || !(this.pos.x <= b.pos.x && this.pos.y <= b.pos.y && this.pos.x + this.size.x >= b.pos.x && this.pos.y + this.size.y + 5 >= b.pos.y)) this.pos.x <= b.pos.x && this.pos.y <= b.pos.y && this.pos.x + this.size.x >= b.pos.x && this.pos.y + this.size.y >= b.pos.y ?
                    this.pointerFocus || (this.offsetY = -5, this.pointerFocus = !0) : this.pointerFocus && (this.offsetY = 0, this.pointerFocus = !1)
            }
        },
        clicked: function() {
            this.parent();
            !1 == ig.game.easing && (ig.game.easing = !0, this.tween({
                bodyScale: 0.8
            }, 0.1, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {
                    this.tween({
                        bodyScale: 1
                    }, 0.1, {
                        easing: ig.Tween.Easing.Linear.EaseNone,
                        onComplete: function() {
                            this.controller.closeSettings()
                        }.bind(this)
                    }).start()
                }.bind(this)
            }).start())
        },
        clicking: function() {},
        released: function() {}
    });
    EntityPUSettingsBar =
        EntityMarketjsEntity.extend({
            gravityFactor: 0,
            idleSheetInfo: {
                sheetImage: new ig.Image("media/graphics/sprites/common/bar-1.png"),
                sheetX: 1,
                sheetY: 1
            },
            bar: new ig.Image("media/graphics/sprites/common/bar-2.png"),
            volume: 1,
            init: function(b, c, d) {
                this.parent(b, c, d);
                this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 1, [0], !0);
                this.sliderBar = ig.game.spawnEntity(EntityPUSettingsSliderBar, ig.system.width, ig.system.height, {
                    bar: this,
                    zIndex: this.zIndex + 1
                })
            },
            update: function() {
                this.parent();
                if (this.move) {
                    var b =
                        ig.game.io.getClickPos().x - this.pos.x;
                    0 > b ? b = 0 : b > this.size.x && (b = this.size.x);
                    this.volume = b / this.size.x;
                    ig.input.released("click") && this.sliderBar.released()
                }
                this.sliderBar.setMiddlePosition(this.pos.x + this.volume * this.size.x, this.pos.y + this.size.y / 2)
            },
            draw: function() {
                this.parent();
                if (0 < this.volume) {
                    ig.system.context.save();
                    var b = 100 < this.volume ? 100 : this.volume;
                    ig.system.context.drawImage(this.bar.data, 0, 0, this.bar.width * b, this.bar.height, this.pos.x + 1 * this.size.x / 2 - this.bar.width * this.bodyScale / 2,
                        this.pos.y + 1 * this.size.y / 2 - this.bar.height * this.bodyScale / 2, this.bar.width * this.bodyScale * b, this.bar.height * this.bodyScale);
                    ig.system.context.restore()
                }
            },
            updateTarget: function() {}
        });
    EntityPUSettingsSliderBar = EntityButton.extend({
        gravityFactor: 0,
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/common/bar-3.png"),
            sheetX: 1,
            sheetY: 1
        },
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 1, [0], !0)
        },
        clicked: function() {
            !1 == ig.game.easing && (ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.buttonClick),
                ig.game.easing = !0, this.bar.move = !0)
        },
        clicking: function() {},
        released: function() {
            this.bar.updateTarget();
            this.bar.move = !1;
            ig.game.easing = !1;
            ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.buttonClick)
        }
    });
    EntityPUSettingsBarBgm = EntityPUSettingsBar.extend({
        ico: new ig.Image("media/graphics/sprites/common/music-icon.png"),
        init: function(b, c, d) {
            this.parent(b, c, d);
            null != ig.game.volumeBgm && (this.volume = ig.game.volumeBgm)
        },
        update: function() {
            this.parent();
            this.move && (ig.game.volumeBgm = this.volume,
                ig.soundHandler.bgmPlayer.volume(ig.game.volumeBgm))
        },
        draw: function() {
            this.parent();
            ig.system.context.save();
            ig.system.context.drawImage(this.ico.data, this.controller.popUpSettings.pos.x + 0.5 * this.controller.popUpSettings.size.x / 10, this.pos.y + 1 * this.size.y / 2 - this.ico.height * this.bodyScale / 2, this.ico.width * this.bodyScale, this.ico.height * this.bodyScale);
            ig.system.context.restore()
        },
        updateTarget: function() {
            ig.game.save("sh-volumeBgm", this.volume)
        }
    });
    EntityPUSettingsBarSfx = EntityPUSettingsBar.extend({
        ico: new ig.Image("media/graphics/sprites/common/sound-icon.png"),
        init: function(b, c, d) {
            this.parent(b, c, d);
            null != ig.game.volumeSfx && (this.volume = ig.game.volumeSfx)
        },
        update: function() {
            this.parent();
            this.move && (ig.game.volumeSfx = this.volume, ig.soundHandler.sfxPlayer.volume(ig.game.volumeSfx))
        },
        draw: function() {
            this.parent();
            ig.system.context.save();
            ig.system.context.drawImage(this.ico.data, this.controller.popUpSettings.pos.x + 0.5 * this.controller.popUpSettings.size.x / 10, this.pos.y + 1 * this.size.y / 2 - this.ico.height * this.bodyScale / 2, this.ico.width * this.bodyScale, this.ico.height *
                this.bodyScale);
            ig.system.context.restore()
        },
        updateTarget: function() {
            ig.game.save("sh-volumeSfx", this.volume)
        }
    });
    EntityBlackBackground = EntityMarketjsEntity.extend({
        gravityFactor: 0,
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/common/black-50.png"),
            sheetX: 1,
            sheetY: 1
        },
        blackBg: new ig.Image("media/graphics/sprites/common/black-50.png"),
        opacity: 0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 1, [0])
        },
        update: function() {
            this.currentAnim.alpha =
                this.opacity
        },
        easeOut: function() {
            console.log("Bg ease out");
            this.opacity = 0;
            this.tween({
                opacity: 0
            }, 0.2, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {
                    console.log("Bg ease out complete");
                    this.pos.x = ig.system.width;
                    this.pos.y = ig.system.height
                }.bind(this)
            }).start()
        },
        easeIn: function() {
		try {
			console.log(loadGoogleAd)
            loadGoogleAd();
        } catch(__error) {
            throw __error;
        }
            console.log("Bg ease in");
            this.opacity = 1;
            this.tween({
                opacity: 1
            }, 0.2, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {
                    console.log("Bg ease in complete");
                    this.pos.x = 0;
                    this.pos.y = 0
                }.bind(this)
            }).start()
        }
    })
});
ig.baked = !0;
ig.module("plugins.kvn-utility").requires("impact.entity").defines(function() {
    ig.KvnUtility = {
        getRandomInteger: function(b, c) {
            return Math.floor(Math.random() * (c - b)) + b
        },
        getRandomNegative: function(b) {
            return b * (1 == Math.floor(2 * Math.random()) ? 1 : -1)
        },
        lerp: function(b, c, d) {
            return (1 - d) * b + d * c
        },
        drawStrokedText: function(b, c, d, e, f, j) {
            null == f && (f = "black");
            null == j && (j = 4);
            b.save();
            b.strokeStyle = f;
            b.lineWidth = j;
            b.lineJoin = "round";
            b.miterLimit = 2;
            b.strokeText(c, d, e);
            b.fillText(c, d, e);
            b.restore()
        },
        drawShadowedText: function(b, c,
            d, e, f, j, n, r) {
            null == f && (f = "#000000");
            null == j && (j = 3);
            null == n && (n = 4);
            null == r && (r = 4);
            b.save();
            b.shadowBlur = j;
            b.shadowColor = f;
            b.shadowOffsetX = n;
            b.shadowOffsetY = r;
            b.fillText(c, d, e);
            b.restore()
        },
        drawGlowingText: function(b, c, d, e, f, j) {
            null == j && (j = 10);
            b.save();
            b.shadowBlur = j;
            b.shadowColor = f;
            b.strokeText(c, d, e);
            for (f = 0; 3 > f; f++) b.fillText(c, d, e);
            b.restore()
        },
        drawBlurredText: function(b, c, d, e, f) {
            null == f && (f = 5);
            b.save();
            var j = b.measureText(c).width + 2 * f;
            b.shadowColor = b.fillStyle;
            b.shadowOffsetX = j + d + b.canvas.width;
            b.shadowOffsetY = 0;
            b.shadowBlur = f;
            b.fillText(c, -j + -b.canvas.width, e);
            b.restore()
        },
        drawReflectedText: function(b, c, d, e, f, j) {
            null == f && (f = 0.2);
            null == j && (j = 0.1);
            b.save();
            b.fillText(c, d, e);
            b.scale(1, -f);
            b.globalAlpha = j;
            b.shadowColor = b.fillStyle;
            b.shadowBlur = 15;
            b.fillText(c, d, -(e * (1 / f)));
            b.restore()
        }
    }
});
ig.baked = !0;
ig.module("game.entities.game.game-background").requires("plugins.kvn-utility", "game.entities.others.marketjs-entity").defines(function() {
    EntityGameBackground = EntityMarketjsEntity.extend({
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/game/game-bg.png"),
            sheetX: 1,
            sheetY: 1
        },
        gravityFactor: 0,
        startPos: null,
        timerScroll: null,
        scrollTime: 12,
        isPaused: !1,
        stopPosY: [-960, 0, 960],
        stopPosBefore: 0,
        currentTargetStop: 1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet,
                1, [0]);
            this.timerScroll = new ig.Timer
        },
        update: function() {
            if (!this.controller.isGamePause) {
                this.parent();
                var b = this.timerScroll.delta() / this.scrollTime;
                1 < b && (b = 1, this.timerScroll.reset());
                var c = ig.KvnUtility.lerp(this.stopPosY[this.stopPosBefore], this.stopPosY[this.currentTargetStop], b);
                this.pos.y = c;
                1 == b && (2 == this.currentTargetStop ? (this.currentTargetStop = 1, this.stopPosBefore = 0) : (this.stopPosBefore = this.currentTargetStop, this.currentTargetStop++))
            }
        },
        pause: function() {
            this.timerScroll.pause()
        },
        unpause: function() {
            this.timerScroll.unpause()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.kvn-delay-execution").requires("impact.entity").defines(function() {
    EntityKvnDelayExecution = ig.Entity.extend({
        timer: null,
        delay: null,
        callback: null,
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        setTimeOut: function(b, c) {
            this.timer = new ig.Timer;
            this.delay = b;
            this.callback = c
        },
        update: function() {
            this.parent();
            this.timer.delta() > this.delay && (this.callback ? this.callback() : "", this.kill())
        }
    })
});
ig.baked = !0;
ig.module("game.entities.controllers.menu-controller").requires("game.entities.menu.game-title", "game.entities.buttons.button-play", "game.entities.buttons.button-setting", "game.entities.buttons.button-more-games", "game.entities.common.pop-up-settings", "game.entities.game.game-background", "game.entities.kvn-delay-execution").defines(function() {
    EntityMenuController = ig.Entity.extend({
        zIndex: -10,
        size: {
            x: 540,
            y: 960
        },
        animSheet: new ig.AnimationSheet("media/graphics/sprites/menu/background-menu.png", 540, 960),
        rWidth: null,
        rHeight: null,
        rHeightH: null,
        rWidthH: null,
        menuOpened: "mainmenu",
        menuList: ["mainmenu", "settings"],
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 1, [0]);
            ig.game.gravity = 0;
            if (!ig.global.wm) {
                this.rWidth = ig.system.realWidth;
                this.rHeight = ig.system.realHeight;
                this.rHeightH = this.rHeight / 2;
                this.rWidthH = this.rWidth / 2;
                b = 0.3 * this.rHeight;
                c = 0.6 * this.rHeight;
                d = 0.85 * this.rHeight;
                var e = 0.85 * this.rHeight;
                this.title = ig.game.spawnEntity(EntityGameTitle, 0, 0, {
                    controller: this
                });
                this.title.setMiddlePosition(this.rWidthH,
                    b);
                this.btnPlay = ig.game.spawnEntity(EntityButtonPlay, 0, 0, {
                    controller: this
                });
                this.btnPlay.setMiddlePosition(this.rWidthH, c);
                _SETTINGS.MoreGames.Enabled ? (this.btnSettings = ig.game.spawnEntity(EntityButtonSetting, 0, 0, {
                    controller: this
                }), this.btnSettings.setMiddlePosition(0.25 * this.rWidth, d), this.btnMoreGames = ig.game.spawnEntity(EntityButtonMoreGames, 0, 0, {
                    controller: this
                }), this.btnMoreGames.setMiddlePosition(0.75 * this.rWidth, e), this.btnMoreGames.setButtonLink()) : (this.btnSettings = ig.game.spawnEntity(EntityButtonSetting,
                    0, 0, {
                        controller: this
                    }), this.btnSettings.setMiddlePosition(this.rWidthH, d));
                this.popUpSettings = ig.game.spawnEntity(EntityPopUpSettings, this.rWidthH, this.rHeightH, {
                    controller: this
                });
                this.mainMenuIn();
                ig.game.spawnEntity(EntityPointerExtended, 0, 0);
                ig.game.spawnEntity(ig.FullscreenButton, 5, 5, {
                    enterImage: new ig.Image("media/graphics/misc/button-fullscreen.png"),
                    exitImage: new ig.Image("media/graphics/misc/button-minimize.png")
                })
            }
        },
        mainMenuIn: function(b) {
            var c = new Vector2(this.title.pos.x, this.title.pos.y);
            this.title.pos.y = -270;
            this.btnPlay.pos.y = -1E3;
            this.btnSettings.pos.y = -1E3;
            null != this.btnMoreGames && (this.btnMoreGames.pos.y = -1E3);
            this.title.tween({
                pos: {
                    x: c.x,
                    y: c.y
                }
            }, 1, {
                easing: ig.Tween.Easing.Back.EaseOut,
                onComplete: function() {
                    this.btnPlay.show(0.5, function() {
                        this.btnSettings.show(0.5, function() {
                            null != this.btnMoreGames && this.btnMoreGames.show(0.5, function() {
                                b ? b() : ""
                            })
                        }.bind(this))
                    }.bind(this))
                }.bind(this)
            }).start()
        },
        mainMenuOut: function() {
            this.title.tween({
                pos: {
                    x: this.pos.x,
                    y: -270
                }
            }, 1, {
                easing: ig.Tween.Easing.Back.EaseIn,
                onComplete: function() {
                    ig.game.spawnEntity(EntityKvnDelayExecution, 0, 0, {
                        controller: this
                    }).setTimeOut(0.2, function() {
                        ig.game.gotoGame()
                    })
                }.bind(this)
            }).start();
            this.btnPlay.hide();
            this.btnSettings.hide();
            null != this.btnMoreGames && this.btnMoreGames.hide()
        },
        openSettings: function() {
            this.menuOpened = this.menuList[1];
            this.popUpSettings.easeIn();
            this.btnPlay.disableClick();
            this.btnSettings.disableClick();
            null != this.btnMoreGames && this.btnMoreGames.disableClick()
        },
        closeSettings: function() {
            this.menuOpened = this.menuList[0];
            this.popUpSettings.easeOut();
            this.btnPlay.enableClick();
            this.btnSettings.enableClick();
            null != this.btnMoreGames && this.btnMoreGames.enableClick()
        },
        onBtnPlayClicked: function() {
            this.mainMenuOut()
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
ig.module("game.entities.buttons.button-pause").requires("impact.entity", "game.entities.buttons.button").defines(function() {
    EntityButtonPause = EntityButton.extend({
        zIndex: 40,
        gravityFactor: 0,
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/game/button-pause.png"),
            sheetX: 1,
            sheetY: 1
        },
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 1, [0]);
            this.originalPos = new Vector2(this.pos.x, this.pos.y)
        },
        ready: function() {},
        clicked: function() {
            this.parent();
            !this.disable && (!this.isClicking && !1 == this.isClicking) && (this.isClicking = !0, this.tween({
                bodyScale: 0.8
            }, 0.1, {
                onComplete: function() {
                    this.tween({
                        bodyScale: 1
                    }, 0.1, {
                        onComplete: function() {
                            this.controller.openSettings();
                            this.isClicking = !1
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
ig.module("game.entities.buttons.button-move").requires("impact.entity", "game.entities.buttons.button").defines(function() {
    EntityButtonMove = EntityButton.extend({
        zIndex: 35,
        gravityFactor: 0,
        size: {
            x: 540,
            y: 960
        },
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        clicked: function() {
            this.disable || this.isClicking || this.controller.player.requestToMove()
        },
        clicking: function() {},
        released: function() {
            this.controller.player.requestToStop()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game-screenshake").requires("impact.entity").defines(function() {
    EntityGameScreenshake = ig.Entity.extend({
        duration: 0.5,
        strength: 5,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.initShock();
            1 < ig.game.getEntitiesByType(EntityGameScreenshake).length && this.kill()
        },
        initShock: function() {
            this.shockTimer = new ig.Timer;
            this.shockTimer.set(this.duration)
        },
        resetShock: function() {
            this.shockTimer = null;
            ig.game.screen.x = 0;
            ig.game.screen.y = 0;
            this.kill()
        },
        shock: function() {
            var b = this.shockTimer.delta();
            if (-0.2 > b) {
                var c = this.strength * Math.pow(-b / this.duration, 2);
                0.5 < c && (ig.game.screen.x += Math.random().map(0, 1, -c, c), ig.game.screen.y += Math.random().map(0, 1, -c, c))
            }
            0 < b && this.resetShock()
        },
        update: function() {
            this.parent();
            this.shock()
        },
        draw: function() {
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("impact.entity-pool").requires("impact.game").defines(function() {
    ig.EntityPool = {
        pools: {},
        mixin: {
            staticInstantiate: function(b, c, d) {
                return ig.EntityPool.getFromPool(this.classId, b, c, d)
            },
            erase: function() {
                ig.EntityPool.putInPool(this)
            }
        },
        enableFor: function(b) {
            b.inject(this.mixin)
        },
        getFromPool: function(b, c, d, e) {
            b = this.pools[b];
            if (!b || !b.length) return null;
            b = b.pop();
            b.reset(c, d, e);
            return b
        },
        putInPool: function(b) {
            this.pools[b.classId] ? this.pools[b.classId].push(b) : this.pools[b.classId] = [b]
        },
        drainPool: function(b) {
            delete this.pools[b]
        },
        drainAllPools: function() {
            this.pools = {}
        }
    };
    ig.Game.inject({
        loadLevel: function(b) {
            ig.EntityPool.drainAllPools();
            this.parent(b)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.mini-score-notification").requires("impact.entity-pool", "game.entities.others.marketjs-entity").defines(function() {
    EntityMiniScoreNotification = EntityMarketjsEntity.extend({
        gravityFactor: 0,
        text: "TEXT",
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.tween({
                pos: {
                    y: this.pos.y - 50
                }
            }, 0.8, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {
                    this.kill()
                }.bind(this)
            }).start()
        },
        draw: function() {
            this.parent();
            var b = ig.system.context;
            b.save();
            b.font = "bold 20px porkys";
            b.fillStyle =
                "#ffffff";
            b.textAlign = "center";
            b.textBaseline = "alphabetic";
            b.shadowOffsetX = 0;
            b.shadowOffsetY = 0;
            ig.KvnUtility.drawGlowingText(b, this.text, this.pos.x, this.pos.y, "red", 7);
            b.restore()
        }
    })
});
ig.baked = !0;
ig.module("plugins.kvn-scale").requires("impact.entity").defines(function() {
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
            this.parent(b, c, d)
        },
        scaleInit: function() {
            this._offset.x = this.offset.x;
            this._offset.y = this.offset.y;
            this._size.x = this.size.x;
            this._size.y = this.size.y;
            this.setScale(this.scale.x, this.scale.y)
        },
        draw: function() {
            var b = ig.system.context;
            b.save();
            b.translate(ig.system.getDrawPos(this.pos.x.round() - this.offset.x - ig.game.screen.x),
                ig.system.getDrawPos(this.pos.y.round() - this.offset.y - ig.game.screen.y));
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
            this.size.y =
                this._size.y * this._scale.y;
            this.pos.x += (d - this.size.x) / 2;
            this.pos.y += (e - this.size.y) / 2
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.enemy-explosion").requires("impact.entity-pool").defines(function() {
    EntityEnemyExplosion = EntityMarketjsEntity.extend({
        gravityFactor: 0,
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/game/spore-explosion.png"),
            sheetX: 7,
            sheetY: 2
        },
        timerLifetime: null,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 0.035, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
            this.lifeTimer = new ig.Timer;
            this.pos.x -= this.size.x / 2;
            this.pos.y -= this.size.y /
                2
        },
        reset: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle.rewind();
            this.lifeTimer = new ig.Timer;
            this.pos.x -= this.size.x / 2;
            this.pos.y -= this.size.y / 2
        },
        update: function() {
            0.49 < this.lifeTimer.delta() && this.kill();
            this.parent()
        }
    });
    ig.EntityPool.enableFor(EntityEnemyExplosion)
});
ig.baked = !0;
ig.module("game.entities.game.enemy").requires("impact.entity-pool", "plugins.kvn-scale", "plugins.kvn-utility", "game.entities.others.marketjs-entity", "game.entities.game.enemy-explosion").defines(function() {
    EntityEnemy = EntityMarketjsEntity.extend({
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/game/green-spore.png"),
            sheetX: 8,
            sheetY: 5
        },
        gravityFactor: 1,
        zIndex: 15,
        type: ig.Entity.TYPE.B,
        checkAgainst: ig.Entity.TYPE.A,
        maxHealth: null,
        health: 10,
        maxVel: {
            x: 800,
            y: 800
        },
        currentEnemyVariation: null,
        isTweening: !1,
        savedVelocity: 0,
        reboundSpeed: 620,
        topMarginPosition: 250,
        isGoingDown: null,
        timerPushedBackCooldown: null,
        pushedBackCooldown: 0.01,
        healthLimit1: 15,
        healthLimit2: 30,
        healthLimit3: 45,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.idle = new ig.Animation(this.idleSheet, 1, [33]);
            this.idle1 = new ig.Animation(this.idleSheet, 1, [32]);
            this.idle2 = new ig.Animation(this.idleSheet, 1, [31]);
            this.idle3 = new ig.Animation(this.idleSheet, 1, [30]);
            this.transition = new ig.Animation(this.idleSheet, 0.05, [20, 21, 22, 23, 24, 25,
                26, 27, 28, 29
            ]);
            this.transition1 = new ig.Animation(this.idleSheet, 0.05, [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
            this.transition2 = new ig.Animation(this.idleSheet, 0.05, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
            this.initAnim();
            this.offset.x = 0.3 * this.size.x;
            this.offset.y = 0.36 * this.size.y;
            this.size.x /= 3;
            this.size.y = this.size.x;
            this.pos.x -= this.size.x / 2;
            this.currentEnemyVariation = null == d.variation ? d.enemyVariation.medium : d.variation;
            this.maxHealth = this.health;
            this.scaleInit();
            this.setScale(this.currentEnemyVariation.scale, this.currentEnemyVariation.scale);
            this.scaling = !0;
            this.bodyScale = this.currentEnemyVariation.scale;
            this.isGoingDown = !0;
            this.controller.enemySpawned(this);
            this.timerPushedBackCooldown = new ig.Timer
        },
        reset: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle.rewind();
            this.pos.x -= this.size.x / 2;
            this.currentEnemyVariation = null == d.variation ? d.enemyVariation.medium : d.variation;
            this.setScale(this.currentEnemyVariation.scale, this.currentEnemyVariation.scale);
            this.bodyScale = this.currentEnemyVariation.scale
        },
        update: function() {
            if (!this.controller.isGamePause) {
                this.parent();
                this.health < this.healthLimit1 ? this.currentAnim == this.idle1 ? this.currentAnim = this.transition.rewind() : this.currentAnim == this.transition && 9 == this.currentAnim.frame && (this.currentAnim = this.idle) : this.health < this.healthLimit2 ? this.currentAnim == this.idle2 ? this.currentAnim = this.transition1.rewind() : this.currentAnim == this.transition1 && 9 == this.currentAnim.frame && (this.currentAnim = this.idle1) : this.health < this.healthLimit3 ? this.currentAnim == this.idle3 ? this.currentAnim = this.transition2.rewind() : this.currentAnim ==
                    this.transition2 && 9 == this.currentAnim.frame && (this.currentAnim = this.idle2) : this.currentAnim = this.idle3;
                var b = this.controller.rWidth - this.size.x;
                this.pos.y > this.controller.rHeight - this.size.y ? (this.vel.y = -this.reboundSpeed, this.isGoingDown = !1) : this.pos.x > b ? 0 < this.vel.x && (this.vel.x = -this.vel.x) : 0 > this.pos.x && 0 > this.vel.x && (this.vel.x = -this.vel.x);
                !this.isGoingDown && 0 < this.vel.y && (this.isGoingDown = !0)
            }
        },
        check: function(b) {
            b instanceof EntityPlayer && b.receiveDamage(1, this)
        },
        draw: function() {
            this.parent();
            var b = ig.system.context;
            b.save();
            var c = this.currentEnemyVariation.fontSize,
                d = "" + this.health;
            b.font = c + "px porkys";
            b.fillStyle = "#ffffff";
            b.textAlign = "center";
            b.textBaseline = "alphabetic";
            ig.KvnUtility.drawStrokedText(b, d, this.pos.x + this.size.x / 2 - ig.game.screen.x, this.pos.y + this.size.y / 2 + c / 2 - ig.game.screen.y, "#000000", 1);
            b.restore()
        },
        receiveDamage: function(b) {
            this.isTweening || (this.isTweening = !0, this.tween({
                bodyScale: this.currentEnemyVariation.scale + 0.08
            }, 0.05, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {
                    this.tween({
                        bodyScale: this.currentEnemyVariation.scale
                    }, 0.05, {
                        easing: ig.Tween.Easing.Linear.EaseNone,
                        onComplete: function() {
                            this.isTweening = !1
                        }.bind(this)
                    }).start()
                }.bind(this)
            }).start());
            this.timerPushedBackCooldown.delta() > this.pushedBackCooldown && (this.isGoingDown ? 300 < this.vel.y ? (this.pos.y -= 10, 400 < this.vel.y && (this.vel.y -= 7)) : this.pos.y -= 5 : this.pos.y += 3, this.timerPushedBackCooldown.reset());
            this.health -= b;
            0 >= this.health && this.kill()
        },
        kill: function() {
            var b = this.getMiddlePosition();
            ig.game.spawnEntity(EntityEnemyExplosion, b.x, b.y, {
                controller: this.controller
            });
            this.controller.enemyDead(this);
            ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.smallExplosion);
            0 != this.currentEnemyVariation.sizeIndex && this.splitSelf();
            this.parent()
        },
        initAnim: function() {
            this.currentAnim = this.health < this.healthLimit1 ? this.idle : this.health < this.healthLimit2 ? this.idle1 : this.health < this.healthLimit3 ? this.idle2 : this.idle3
        },
        splitSelf: function() {
            var b = ig.KvnUtility.getRandomInteger(Math.ceil(0.4 *
                    this.maxHealth), Math.floor(0.6 * this.maxHealth)),
                c = this.getMiddlePosition(),
                d = this.controller.enemyVariationArray[this.currentEnemyVariation.sizeIndex - 1],
                e = new Vector2(this.size.x / this.currentEnemyVariation.scale, this.size.y / this.currentEnemyVariation.scale);
            new Vector2(e.x * d.scale, e.y * d.scale);
            c = new Vector2(c.x, c.y);
            e = null;
            e = 20 > b ? EntityEnemyGreen : 65 > b ? EntityEnemyOrange : EntityEnemyRed;
            ig.game.spawnEntity(e, c.x - 30, c.y, {
                vel: {
                    x: -60,
                    y: -200
                },
                health: b,
                variation: d,
                controller: this.controller
            });
            ig.game.spawnEntity(e,
                c.x + 30, c.y, {
                    vel: {
                        x: 60,
                        y: -200
                    },
                    health: b,
                    variation: d,
                    controller: this.controller
                })
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.enemy-special").requires("impact.entity-pool", "plugins.kvn-scale", "plugins.kvn-utility", "game.entities.others.marketjs-entity").defines(function() {
    EntityEnemySpecial = EntityMarketjsEntity.extend({
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/game/saw.png"),
            sheetX: 1,
            sheetY: 1
        },
        gravityFactor: 0.8,
        zIndex: 4,
        type: ig.Entity.TYPE.B,
        checkAgainst: ig.Entity.TYPE.A,
        maxVel: {
            x: 800,
            y: 800
        },
        savedVelocity: 0,
        reboundSpeed: 600,
        topMarginPosition: 250,
        isGoingDown: null,
        hasTouchedGround: !1,
        rotation: 0,
        rotateDuration: 3,
        timerRotation: null,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 1, [0]);
            this.pos.x -= this.size.x / 2;
            this.offset.x = 0.2 * this.size.x;
            this.offset.y = 0.2 * this.size.y;
            this.size.x *= 0.6;
            this.size.y *= 0.6;
            this.scaleInit();
            this.setScale(1.2, 1.2);
            this.isGoingDown = !0;
            this.timerRotation = new ig.Timer
        },
        reset: function(b, c, d) {
            this.parent(b, c, d);
            this.pos.x -= this.size.x / 2;
            this.isGoingDown = !0
        },
        update: function() {
            if (!this.controller.isGamePause) {
                this.parent();
                this.pos.y > this.controller.rHeight - this.size.y && (this.vel.y = -this.reboundSpeed, this.isGoingDown = !1, this.hasTouchedGround = !0);
                this.hasTouchedGround && (this.pos.x < -this.size.x - 50 ? this.kill() : this.pos.x > this.controller.rWidth + 50 && this.kill());
                !this.isGoingDown && 0 < this.vel.y && (this.isGoingDown = !0);
                var b = this.timerRotation.delta() / this.rotateDuration;
                1 < b && (b = 1, this.timerRotation.reset());
                this.rotation = ig.KvnUtility.lerp(0, 360, b).toRad();
                this.currentAnim.angle = this.rotation
            }
        },
        check: function(b) {
            b instanceof
            EntityPlayer && b.receiveDamage(1, this)
        },
        receiveDamage: function() {}
    });
    ig.EntityPool.enableFor(EntityEnemySpecial)
});
ig.baked = !0;
ig.module("game.entities.game.loot-drop").requires("game.entities.others.marketjs-entity").defines(function() {
    EntityLootDrop = EntityMarketjsEntity.extend({
        zIndex: 20,
        gravityFactor: 0.8,
        maxVel: {
            x: 1E3,
            y: 1E3
        },
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.type = ig.Entity.TYPE.B;
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 1, [0])
        },
        update: function() {
            this.parent();
            this.isTouchGround() && (this.gravityFactor = 0, this.vel.x = 0, this.vel.y = 0)
        },
        isTouchGround: function() {
            return this.pos.y + this.size.y > this.controller.groundPosY ?
                !0 : !1
        },
        gotShot: function() {
            null != this.parentObj && this.pos.x > this.size.x && (this.type = ig.Entity.TYPE.A, this.parentObj.isLootDropped = !0, this.parentObj = null)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.trap-item").requires("plugins.kvn-scale", "game.entities.others.marketjs-entity", "game.entities.game.loot-drop").defines(function() {
    EntityTrapItem = EntityLootDrop.extend({
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/game/saw.png"),
            sheetX: 1,
            sheetY: 1
        },
        isActivated: !1,
        velX: 0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.offset.x = 0.2 * this.size.x;
            this.offset.y = 0.2 * this.size.y;
            this.size.x *= 0.6;
            this.size.y *= 0.6;
            this.scaleInit();
            this.setScale(0.3, 0.3);
            this.scaling = !0;
            this.bodyScale = 0.3;
            this.checkAgainst = ig.Entity.TYPE.NONE
        },
        update: function() {
            this.controller.isGamePause || (this.parent(), this.isTouchGround() && !this.isActivated ? (this.gravityFactor = 0, this.vel.x = 0, this.vel.y = 0) : this.isTouchGround() && (this.vel.x = this.velX, this.vel.y = -600), this.isActivated && (this.gravityFactor = 1, this.pos.x < -this.size.x ? this.kill() : this.pos.x > this.controller.rWidth && this.kill()))
        },
        trapActivate: function() {
            this.isActivated || (this.isActivated = !0, this.vel.y = -600, this.tween({
                    bodyScale: 1
                },
                1, {
                    easing: ig.Tween.Easing.Linear.EaseNone,
                    onComplete: function() {
                        this.velX = this.getMiddlePosition().x < this.controller.rWidthH ? 40 : -40;
                        this.checkAgainst = ig.Entity.TYPE.A;
                        this.type = ig.Entity.TYPE.B
                    }.bind(this)
                }).start())
        },
        check: function(b) {
            b instanceof EntityPlayer && b.receiveDamage(1, this)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.bullet").requires("impact.entity-pool", "game.entities.others.marketjs-entity", "game.entities.game.enemy", "game.entities.game.enemy-special", "game.entities.game.loot-drop", "game.entities.game.trap-item").defines(function() {
    EntityBullet = EntityMarketjsEntity.extend({
        zIndex: 10,
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/game/shot.png"),
            sheetX: 1,
            sheetY: 1
        },
        maxVel: {
            x: 1E3,
            y: 1E3
        },
        gravityFactor: 0,
        checkAgainst: ig.Entity.TYPE.BOTH,
        isMoved: !1,
        posClickOffsetX: 0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 1, [0]);
            this.pos.x -= this.size.x / 2
        },
        reset: function(b, c, d) {
            this.parent(b, c, d);
            this.pos.x -= this.size.x / 2
        },
        update: function() {
            this.parent(); - 0 > this.pos.y && this.kill();
            0 > this.pos.x && this.kill();
            this.pos.x > this.controller.rWidth && this.kill()
        },
        check: function(b) {
            b instanceof EntityEnemy && (b.receiveDamage(1, this), ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.laser1), this.controller.addScore(1),
                this.kill());
            b instanceof EntityLootDrop && b.gotShot();
            b instanceof EntityEnemySpecial && (b.receiveDamage(1, this), ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.hitIron), this.kill())
        }
    });
    ig.EntityPool.enableFor(EntityBullet)
});
ig.baked = !0;
ig.module("game.entities.game.upgrade-box").requires("game.entities.others.marketjs-entity", "game.entities.game.loot-drop").defines(function() {
    EntityUpgradeBox = EntityLootDrop.extend({
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/game/upgrade-box.png"),
            sheetX: 1,
            sheetY: 1
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.attached-weapon").requires("impact.entity-pool", "game.entities.others.marketjs-entity", "plugins.data.vector").defines(function() {
    EntityAttachedWeapon = EntityMarketjsEntity.extend({
        offsetPos: null,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 1, [0]);
            this.offsetPos = new Vector2(d.parentObj.pos.x - this.pos.x, d.parentObj.pos.y - this.pos.y)
        },
        reset: function(b, c, d) {
            this.parent(b, c, d);
            this.offsetPos = new Vector2(d.parentObj.pos.x -
                this.pos.x, d.parentObj.pos.y - this.pos.y)
        },
        update: function() {
            this.parent();
            this.pos.x = this.parentObj.pos.x - this.offsetPos.x;
            this.pos.y = this.parentObj.pos.y - this.offsetPos.y
        }
    });
    ig.EntityPool.enableFor(EntityAttachedWeapon)
});
ig.baked = !0;
ig.module("game.entities.game.left-weapon").requires("game.entities.game.attached-weapon").defines(function() {
    EntityLeftWeapon = EntityAttachedWeapon.extend({
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/game/left-weapon.png"),
            sheetX: 1,
            sheetY: 1
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.front-left-weapon").requires("game.entities.game.attached-weapon").defines(function() {
    EntityFrontLeftWeapon = EntityAttachedWeapon.extend({
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/game/front-left-weapon.png"),
            sheetX: 1,
            sheetY: 1
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.front-right-weapon").requires("game.entities.game.attached-weapon").defines(function() {
    EntityFrontRightWeapon = EntityAttachedWeapon.extend({
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/game/front-right-weapon.png"),
            sheetX: 1,
            sheetY: 1
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.right-weapon").requires("game.entities.game.attached-weapon").defines(function() {
    EntityRightWeapon = EntityAttachedWeapon.extend({
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/game/right-weapon.png"),
            sheetX: 1,
            sheetY: 1
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.player-shield").requires("game.entities.game.attached-weapon").defines(function() {
    EntityPlayerShield = EntityAttachedWeapon.extend({
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/game/shield.png"),
            sheetX: 1,
            sheetY: 1
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.player-explosion").requires("impact.entity-pool").defines(function() {
    EntityPlayerExplosion = EntityMarketjsEntity.extend({
        gravityFactor: 0,
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/game/player-explosion.png"),
            sheetX: 3,
            sheetY: 3
        },
        timerLifetime: null,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 0.1, [0, 1, 2, 3, 4, 5, 6]);
            this.lifeTimer = new ig.Timer;
            this.pos.x -= this.size.x / 2;
            this.pos.y -= this.size.y / 2
        },
        reset: function(b,
            c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle.rewind();
            this.lifeTimer = new ig.Timer;
            this.pos.x -= this.size.x / 2;
            this.pos.y -= this.size.y / 2
        },
        update: function() {
            0.7 < this.lifeTimer.delta() && this.kill();
            this.parent()
        }
    });
    ig.EntityPool.enableFor(EntityPlayerExplosion)
});
ig.baked = !0;
ig.module("game.entities.game.player-moves-vfx").requires("game.entities.game.attached-weapon").defines(function() {
    EntityPlayerMovesVfx = EntityAttachedWeapon.extend({
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/game/plane-moves.png"),
            sheetX: 2,
            sheetY: 2
        },
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 0.1, [0, 1, 2, 3])
        },
        setTopMiddlePosition: function(b, c) {
            this.parent(b, c);
            this.offsetPos = new Vector2(this.parentObj.pos.x - this.pos.x, this.parentObj.pos.y -
                this.pos.y)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.player-repair-vfx").requires("game.entities.others.marketjs-entity").defines(function() {
    EntityPlayerRepairVfx = EntityMarketjsEntity.extend({
        gravityFactor: 0,
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/game/player-heal.png"),
            sheetX: 6,
            sheetY: 4
        },
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 0.04, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19])
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.repair-hammer").requires("impact.entity-pool", "game.entities.others.marketjs-entity", "plugins.data.vector").defines(function() {
    EntityRepairHammer = EntityMarketjsEntity.extend({
        gravityFactor: 0,
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/game/hammer.png"),
            sheetX: 1,
            sheetY: 1
        },
        rotation: 0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 1, [0])
        },
        reset: function(b, c, d) {
            this.parent(b, c, d)
        },
        update: function() {
            this.parent();
            this.currentAnim.angle = this.rotation
        },
        tweenPull: function() {},
        tweenHit: function() {}
    })
});
ig.baked = !0;
ig.module("game.entities.game.repair-hammer-right").requires("impact.entity-pool", "game.entities.game.repair-hammer", "game.entities.others.marketjs-entity", "plugins.data.vector").defines(function() {
    EntityRepairHammerRight = EntityRepairHammer.extend({
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim.pivot.x = 0.8 * this.size.x;
            this.currentAnim.pivot.y = 0.8 * this.size.y;
            this.rotation = 0.4;
            this.tweenPull()
        },
        reset: function(b, c, d) {
            this.parent(b, c, d)
        },
        update: function() {
            this.parent()
        },
        tweenPull: function() {
            this.tween({
                    rotation: 0.7
                },
                0.1, {
                    easing: ig.Tween.Easing.Linear.EaseNone,
                    onComplete: function() {
                        this.tweenHit()
                    }.bind(this)
                }).start()
        },
        tweenHit: function() {
            this.tween({
                rotation: -0.7
            }, 0.3, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {
                    this.kill()
                }.bind(this)
            }).start()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.repair-hammer-left").requires("impact.entity-pool", "game.entities.game.repair-hammer", "game.entities.others.marketjs-entity", "plugins.data.vector").defines(function() {
    EntityRepairHammerLeft = EntityRepairHammer.extend({
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim.pivot.x = 0.2 * this.size.x;
            this.currentAnim.pivot.y = 0.8 * this.size.y;
            this.currentAnim.flip.x = !0;
            this.rotation = -0.4;
            this.tweenPull()
        },
        reset: function(b, c, d) {
            this.parent(b, c, d)
        },
        update: function() {
            this.parent()
        },
        tweenPull: function() {
            this.tween({
                rotation: -0.7
            }, 0.1, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {
                    this.tweenHit()
                }.bind(this)
            }).start()
        },
        tweenHit: function() {
            this.tween({
                rotation: 0.7
            }, 0.3, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {
                    this.kill()
                }.bind(this)
            }).start()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.repair-button").requires("impact.entity-pool", "game.entities.others.marketjs-entity", "plugins.data.vector").defines(function() {
    EntityRepairButton = EntityMarketjsEntity.extend({
        gravityFactor: 0,
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/game/repair-button.png"),
            sheetX: 1,
            sheetY: 1
        },
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 1, [0])
        },
        reset: function(b, c, d) {
            this.parent(b, c, d)
        },
        update: function() {
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.player").requires("plugins.kvn-utility", "game.entities.kvn-delay-execution", "game.entities.others.marketjs-entity", "game.entities.game-screenshake", "game.entities.game.mini-score-notification", "game.entities.game.bullet", "game.entities.game.upgrade-box", "game.entities.game.trap-item", "game.entities.game.left-weapon", "game.entities.game.front-left-weapon", "game.entities.game.front-right-weapon", "game.entities.game.right-weapon", "game.entities.game.player-shield", "game.entities.game.player-explosion",
    "game.entities.game.enemy-explosion", "game.entities.game.player-moves-vfx", "game.entities.game.player-repair-vfx", "game.entities.game.repair-hammer-right", "game.entities.game.repair-hammer-left", "game.entities.game.repair-button").defines(function() {
    EntityPlayer = EntityMarketjsEntity.extend({
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/game/plane.png"),
            sheetX: 6,
            sheetY: 6
        },
        gravityFactor: 0,
        zIndex: 10,
        type: ig.Entity.TYPE.A,
        checkAgainst: ig.Entity.TYPE.BOTH,
        health: 3,
        barFrameRepairing: new ig.Image("media/graphics/sprites/game/repairing-bar-frame.png"),
        barFillRepairing: new ig.Image("media/graphics/sprites/game/repairing-bar-fill.png"),
        isMoved: !1,
        posClickOffsetX: 0,
        timerShoot: null,
        powerLevel: 1,
        leftWeapon: null,
        frontLeftWeapon: null,
        frontRightWeapon: null,
        rightWeapon: null,
        shield: null,
        movesVfx: null,
        isUsingShield: !1,
        timerInvicibility: null,
        shootInterval: 0.07,
        fixSfxIndex: 0,
        playerPosY: 0,
        timerPlayerMoveIn: null,
        playerMovingIn: !1,
        timerDamagedAnimation: null,
        isBroken: !1,
        repairStatus: 0,
        timerRepairTextBlink: null,
        savedRepairTextColor: "#ffffff",
        timerSpawnRepairHammer: null,
        modifierSpawnRepairHammer: 0,
        lastRepairHammer: 0,
        lastRepairHammerTap: 0,
        repairButton: null,
        repairVfx: null,
        moveInterval: 0.001,
        gradualMoveTimeStep: 0.1,
        closeMoveTimeStep: 0.8,
        moveStep: 0.1,
        reachMousePosX: !1,
        lastMouseX: null,
        canMove: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.idle = new ig.Animation(this.idleSheet, 1, [0]);
            this.damaged = new ig.Animation(this.idleSheet, 0.1, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
            this.repair = new ig.Animation(this.idleSheet, 0.04, [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]);
            this.currentAnim = this.idle;
            this.offset.x = 0.2 * this.size.x;
            this.offset.y = 0.4 * this.size.y;
            this.size.x *= 0.6;
            this.size.y /= 2;
            this.timerShoot = new ig.Timer;
            this.timerDamagedAnimation = new ig.Timer;
            this.timerRepairTextBlink = new ig.Timer;
            this.timerInvicibility = new ig.Timer;
            this.timerPlayerMoveIn = new ig.Timer;
            this.timerSpawnRepairHammer = new ig.Timer;
            this.playerPosY = this.pos.y;
            this.enableMoveVfx();
            this.playerMoveIn()
        },
        update: function() {
            if (!this.controller.isGamePause && !this.controller.isGameOver) {
                if (this.isBroken) {
                    this.isMoved = !1;
                    if (null == this.repairButton) {
                        var b = this.getMiddlePosition();
                        this.repairButton = ig.game.spawnEntity(EntityRepairButton, -1E3, -1E3, {
                            controller: this.controller
                        });
                        b.x > this.controller.rWidthH ? this.repairButton.setMiddlePosition(b.x - this.size.x - this.repairButton.size.x / 2, b.y + 10) : this.repairButton.setMiddlePosition(b.x + this.size.x + this.repairButton.size.x / 2, b.y + 10)
                    }
                    if (1 < this.timerSpawnRepairHammer.delta() + this.modifierSpawnRepairHammer) {
                        var b = this.getMiddlePosition(),
                            c = {
                                controller: this.controller
                            },
                            d = this.size.x /
                            2;
                        0 == this.lastRepairHammer ? (ig.game.spawnEntity(EntityRepairHammerRight, b.x + d, b.y - this.size.y - 20, c), this.lastRepairHammer = 1) : (ig.game.spawnEntity(EntityRepairHammerLeft, b.x - 3 * d, b.y - this.size.y - 20, c), this.lastRepairHammer = 0);
                        this.repairPlane(10);
                        this.timerSpawnRepairHammer.reset();
                        this.modifierSpawnRepairHammer = 0
                    }
                } else 0 > ig.game.io.getClickPos().x && ig.game.io.getClickPos().x > ig.system.realWidth && (this.isMoved = !1);
                this.movePlayer();
                !this.controller.isGameOver && (!this.controller.isGamePause && this.timerShoot.delta() >
                    this.shootInterval && this.canMove) && (this.shoot(), this.timerShoot.reset());
                this.isBroken && ig.input.pressed("click") && (this.currentAnim != this.repair && (this.currentAnim = this.repair), null == this.repairVfx && (b = this.getMiddlePosition(), this.repairVfx = ig.game.spawnEntity(EntityPlayerRepairVfx, -1E3, -1E3, {
                        controller: this.controller,
                        zIndex: this.zIndex + 1
                    }), this.repairVfx.setMiddlePosition(b.x, b.y)), this.repairPlane(10), b = this.getMiddlePosition(), c = {
                        controller: this.controller
                    }, d = this.size.x / 2, 0 == this.lastRepairHammerTap ?
                    (ig.game.spawnEntity(EntityRepairHammerRight, b.x, b.y - this.size.y - 50, c), this.lastRepairHammerTap = 1) : (ig.game.spawnEntity(EntityRepairHammerLeft, b.x - 2 * d, b.y - this.size.y - 50, c), this.lastRepairHammerTap = 0), this.modifierSpawnRepairHammer += 0.5);
                this.isUsingShield && 5 < this.timerInvicibility.delta() && this.disableShield();
                this.parent()
            }
        },
        check: function(b) {
            b instanceof EntityUpgradeBox && (3 > this.powerLevel ? this.upgradePower() : (this.controller.addScore(15), this.getMiddlePosition().x > this.controller.rWidthH ? ig.game.spawnEntity(EntityMiniScoreNotification,
                this.pos.x - 10, this.pos.y - 10, {
                    text: "+15",
                    controller: this.controller
                }) : ig.game.spawnEntity(EntityMiniScoreNotification, this.pos.x + this.size.x + 10, this.pos.y - 10, {
                text: "+15",
                controller: this.controller
            }), ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.smallBonus)), b.kill());
            b instanceof EntityTrapItem && b.trapActivate()
        },
        requestToMove: function() {
            !this.controller.isGameOver && (!this.controller.isGamePause && !this.isBroken && 10 < ig.game.io.getClickPos().x && ig.game.io.getClickPos().x < ig.system.realWidth -
                10) && (this.isMoved = !0, this.posClickOffsetX = ig.game.io.getClickPos().x - this.pos.x)
        },
        requestToStop: function() {
            this.isMoved = !1
        },
        movePlayer: function() {
            if (this.playerMovingIn) {
                var b = this.timerPlayerMoveIn.delta();
                1 < b && (b = 1, this.playerMovingIn = !1, this.canMove = !0);
                this.pos.y = ig.KvnUtility.lerp(this.playerPosY + 200, this.playerPosY, b)
            }
            if (this.isMoved && this.canMove) {
                var b = ig.game.io.getClickPos().x,
                    c = b - this.size.x / 2,
                    d = ig.system.width - this.size.x - 5;
                5 > c ? c = 5 : c > d && (c = d);
                null == this.lastMouseX || this.lastMouseX != b ?
                    (this.pos.x = this.reachMousePosX ? ig.KvnUtility.lerp(this.pos.x, c, this.closeMoveTimeStep) : ig.KvnUtility.lerp(this.pos.x, c, this.gradualMoveTimeStep), this.moveStep = this.gradualMoveTimeStep) : (this.moveStep += this.gradualMoveTimeStep, 1 < this.moveStep && (this.moveStep = 1, this.reachMousePosX = !0), this.pos.x = ig.KvnUtility.lerp(this.pos.x, c, this.moveStep));
                this.lastMouseX = b;
                this.controller.killTutorial()
            } else this.lastMouseX = null, this.reachMousePosX = !1
        },
        shoot: function() {
            if (this.isMoved) {
                if (1 == this.powerLevel) {
                    var b = {
                        vel: {
                            x: 0,
                            y: -1300
                        },
                        controller: this.controller
                    };
                    ig.game.spawnEntity(EntityBullet, this.pos.x + this.size.x / 2, this.pos.y - 20, b)
                } else if (2 == this.powerLevel) b = {
                    vel: {
                        x: 0,
                        y: -1300
                    },
                    controller: this.controller
                }, ig.game.spawnEntity(EntityBullet, this.pos.x + this.size.x / 2, this.pos.y - 20, b), ig.game.spawnEntity(EntityBullet, this.pos.x + this.size.x / 2 - 22, this.pos.y - 15, b), ig.game.spawnEntity(EntityBullet, this.pos.x + this.size.x / 2 + 22, this.pos.y - 15, b), null == this.frontLeftWeapon && (b = {
                        controller: this.controller,
                        parentObj: this
                    },
                    this.frontLeftWeapon = ig.game.spawnEntity(EntityFrontLeftWeapon, this.pos.x + 2, this.pos.y - 8, b)), null == this.frontRightWeapon && (b = {
                    controller: this.controller,
                    parentObj: this
                }, this.frontRightWeapon = ig.game.spawnEntity(EntityFrontRightWeapon, this.pos.x + 49, this.pos.y - 8, b));
                else if (3 == this.powerLevel) {
                    var b = {
                            vel: {
                                x: 0,
                                y: -1300
                            },
                            controller: this.controller
                        },
                        c = {
                            vel: {
                                x: -300,
                                y: -1300
                            },
                            controller: this.controller
                        },
                        d = {
                            vel: {
                                x: 300,
                                y: -1300
                            },
                            controller: this.controller
                        };
                    ig.game.spawnEntity(EntityBullet, this.pos.x + this.size.x /
                        2, this.pos.y - 20, b);
                    ig.game.spawnEntity(EntityBullet, this.pos.x + this.size.x / 2 - 22, this.pos.y - 15, b);
                    ig.game.spawnEntity(EntityBullet, this.pos.x + this.size.x / 2 + 22, this.pos.y - 15, b);
                    ig.game.spawnEntity(EntityBullet, this.pos.x + this.size.x / 2 - 35, this.pos.y - 5, c);
                    ig.game.spawnEntity(EntityBullet, this.pos.x + this.size.x / 2 + 35, this.pos.y - 5, d);
                    null == this.leftWeapon && (b = {
                        controller: this.controller,
                        parentObj: this
                    }, this.leftWeapon = ig.game.spawnEntity(EntityLeftWeapon, this.pos.x - 11, this.pos.y, b));
                    null == this.rightWeapon &&
                        (b = {
                            controller: this.controller,
                            parentObj: this
                        }, this.rightWeapon = ig.game.spawnEntity(EntityRightWeapon, this.pos.x + 62, this.pos.y, b))
                }
                ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.playerShoot)
            }
        },
        repairPlane: function(b) {
            this.repairStatus += b;
            100 <= this.repairStatus && (this.repairStatus = 100, this.playerFixed());
            0 == this.fixSfxIndex ? ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.fixing1) : 1 == this.fixSfxIndex ? ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.fixing2) :
                (ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.fixing3), this.fixSfxIndex = 0);
            this.fixSfxIndex++
        },
        upgradePower: function() {
            3 > this.powerLevel && (this.powerLevel++, ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.upgrade))
        },
        downgradePower: function() {
            1 < this.powerLevel && this.powerLevel--;
            2 == this.powerLevel ? (null != this.leftWeapon && (this.leftWeapon.kill(), this.leftWeapon = null), null != this.rightWeapon && (this.rightWeapon.kill(), this.rightWeapon = null)) : 1 == this.powerLevel &&
                (null != this.frontLeftWeapon && (this.frontLeftWeapon.kill(), this.frontLeftWeapon = null), null != this.frontRightWeapon && (this.frontRightWeapon.kill(), this.frontRightWeapon = null))
        },
        receiveDamage: function(b) {
            !this.controller.isGameOver && (!this.isUsingShield && !this.isBroken) && (this.health -= b, this.currentAnim = this.damaged, this.isBroken = !0, this.disableMoveVfx(), 0 < this.health ? (this.timerDamagedAnimation.reset(), this.repairStatus = 0, this.downgradePower(), this.controller.playerBroken(), ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.hit),
                b = this.getMiddlePosition(), ig.game.spawnEntity(EntityPlayerExplosion, b.x, b.y, {
                    zIndex: this.zIndex + 1,
                    controller: this.controller
                }), ig.game.spawnEntity(EntityGameScreenshake, 0, 0, {
                    duration: 1,
                    controller: this.controller
                })) : this.kill())
        },
        kill: function() {
            this.controller.gameOver();
            var b = this.getMiddlePosition();
            ig.game.spawnEntity(EntityPlayerExplosion, b.x, b.y, {
                zIndex: this.zIndex + 1,
                controller: this.controller
            });
            ig.game.spawnEntity(EntityGameScreenshake, 0, 0, {
                duration: 1,
                controller: this.controller
            });
            ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.explode);
            ig.game.spawnEntity(EntityKvnDelayExecution, 0, 0, {
                controller: this
            }).setTimeOut(0.4, function() {
                ig.game.spawnEntity(EntityPlayerExplosion, b.x, b.y, {
                    zIndex: this.zIndex + 1,
                    controller: this.controller
                });
                ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.explode)
            }.bind(this));
            ig.game.spawnEntity(EntityKvnDelayExecution, 0, 0, {
                controller: this
            }).setTimeOut(0.8, function() {
                ig.game.spawnEntity(EntityPlayerExplosion, b.x + 30, b.y + 30, {
                    zIndex: this.zIndex + 1,
                    controller: this.controller
                });
                ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.explode)
            }.bind(this));
            ig.game.spawnEntity(EntityKvnDelayExecution, 0, 0, {
                controller: this
            }).setTimeOut(1.2, function() {
                ig.game.spawnEntity(EntityPlayerExplosion, b.x - 30, b.y - 30, {
                    zIndex: this.zIndex + 1,
                    controller: this.controller
                });
                ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.explode)
            }.bind(this));
            ig.game.spawnEntity(EntityKvnDelayExecution, 0, 0, {
                controller: this
            }).setTimeOut(1.6, function() {
                ig.game.spawnEntity(EntityPlayerExplosion, b.x - 30, b.y + 30, {
                    zIndex: this.zIndex + 1,
                    controller: this.controller
                });
                ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.explode)
            }.bind(this));
            ig.game.spawnEntity(EntityKvnDelayExecution, 0, 0, {
                controller: this
            }).setTimeOut(2, function() {
                ig.game.spawnEntity(EntityPlayerExplosion, b.x + 30, b.y - 30, {
                    zIndex: this.zIndex + 1,
                    controller: this.controller
                });
                ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.explode)
            }.bind(this))
        },
        playerFixed: function() {
            this.isBroken = !1;
            this.currentAnim = this.idle;
            ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.revive);
            this.enableShield();
            this.enableMoveVfx();
            this.controller.playerFixed();
            this.repairButton.kill();
            this.repairButton = null;
            null != this.repairVfx && (this.repairVfx.kill(), this.repairVfx = null)
        },
        enableShield: function() {
            if (null != this.shield) console.log("Shield already enabled");
            else {
                var b = {
                        controller: this.controller,
                        parentObj: this
                    },
                    c = this.getTopMiddlePosition(),
                    c = new Vector2(c.x - 98, c.y - 60);
                this.shield = ig.game.spawnEntity(EntityPlayerShield, c.x, c.y, b);
                this.isUsingShield = !0;
                this.shieldDurability = 5;
                this.timerInvicibility.reset()
            }
        },
        disableShield: function() {
            this.isUsingShield = !1;
            this.shield.kill();
            this.shield = null
        },
        enableMoveVfx: function() {
            if (null != this.movesVfx) console.log("Moves Vfx already enabled");
            else {
                var b = {
                        controller: this.controller,
                        parentObj: this
                    },
                    c = this.getBottomMiddlePosition();
                new Vector2(c.x, c.y);
                this.movesVfx = ig.game.spawnEntity(EntityPlayerMovesVfx, -1E3, -1E3, b);
                this.movesVfx.setTopMiddlePosition(c.x, c.y - 15)
            }
        },
        disableMoveVfx: function() {
            null != this.movesVfx && (this.movesVfx.kill(), this.movesVfx = null)
        },
        draw: function() {
            this.parent();
            if (!this.controller.isGameOver) {
                var b = ig.system.context;
                b.save();
                if (this.isBroken) {
                    var c = this.getBottomMiddlePosition(),
                        d = c.x - this.barFrameRepairing.width / 2 - ig.game.screen.x,
                        e = c.y + 10 - ig.game.screen.y,
                        f = this.barFrameRepairing.width * this.repairStatus / 100;
                    this.barFrameRepairing.draw(d, e);
                    0 < f && this.barFillRepairing.draw(d, e, 0, 0, f, this.barFrameRepairing.height);
                    d = _STRINGS.Game.TapToFix;
                    0.15 < this.timerRepairTextBlink.delta() && (this.savedRepairTextColor = "#ffffff" == this.savedRepairTextColor ? "#42acf8" : "#ffffff", this.timerRepairTextBlink.reset());
                    b.fillStyle = this.savedRepairTextColor;
                    b.font = "bold 20px porkys";
                    b.textAlign = "center";
                    b.textBaseline = "alphabetic";
                    b.fillText(d, c.x - ig.game.screen.x, e + this.barFrameRepairing.height + 20)
                }
                b.restore()
            }
        },
        playerMoveIn: function() {
            this.playerMovingIn || (this.playerMovingIn = !0, this.timerPlayerMoveIn.reset(), this.canMove = !1)
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
ig.module("game.entities.game.enemy-green").requires("impact.entity-pool", "plugins.scale", "game.entities.game.enemy", "game.entities.game.enemy-explosion").defines(function() {
    EntityEnemyGreen = EntityEnemy.extend({
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/game/green-spore.png"),
            sheetX: 8,
            sheetY: 5
        },
        healthLimit1: 20,
        healthLimit2: 50,
        healthLimit3: 90
    })
});
ig.baked = !0;
ig.module("game.entities.game.enemy-orange").requires("impact.entity-pool", "plugins.scale", "plugins.kvn-utility", "game.entities.game.enemy", "game.entities.game.enemy-green", "game.entities.game.enemy-explosion").defines(function() {
    EntityEnemyOrange = EntityEnemy.extend({
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/game/orange-spore.png"),
            sheetX: 8,
            sheetY: 5
        },
        healthLimit1: 40,
        healthLimit2: 80,
        healthLimit3: 100
    })
});
ig.baked = !0;
ig.module("game.entities.game.enemy-red").requires("impact.entity-pool", "plugins.scale", "game.entities.game.enemy", "game.entities.game.enemy-orange", "game.entities.game.enemy-explosion").defines(function() {
    EntityEnemyRed = EntityEnemy.extend({
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/game/red-spore.png"),
            sheetX: 8,
            sheetY: 5
        },
        healthLimit1: 40,
        healthLimit2: 80,
        healthLimit3: 120
    })
});
ig.baked = !0;
ig.module("game.entities.game.drone").requires("game.entities.others.marketjs-entity", "game.entities.game.upgrade-box", "game.entities.game.trap-item").defines(function() {
    EntityDrone = EntityMarketjsEntity.extend({
        zIndex: 20,
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/game/drone.png"),
            sheetX: 2,
            sheetY: 2
        },
        gravityFactor: 0,
        movementSpeed: 300,
        timerLifetime: null,
        loot: null,
        isLootDropped: !1,
        lootSpawnPos: {
            x: 63,
            y: 98
        },
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet,
                0.05, [0, 1, 2, 3]);
            this.vel.x = this.movementSpeed;
            this.timerLifetime = new ig.Timer;
            ig.global.wm || (this.loot = ig.game.spawnEntity(EntityUpgradeBox, this.lootSpawnPos.x, this.lootSpawnPos.y, {
                controller: this.controller,
                parentObj: this
            }))
        },
        update: function() {
            this.controller.isGamePause || (this.parent(), this.isLootDropped ? this.loot = null : (this.loot.setTopMiddlePosition(this.pos.x + this.lootSpawnPos.x, this.pos.y + this.lootSpawnPos.y), this.loot.vel.y = 100), 10 < this.timerLifetime.delta() && (!this.isLootDropped && null != this.loot &&
                this.loot.kill(), this.kill()))
        }
    })
});
ig.baked = !0;
ig.module("plugins.textwrapper").requires("plugins.kvn-utility").defines(function() {
    ig.Textwrapper = ig.Class.extend({
        textFontSize: 12,
        textFont: "walibi-holland, Charcoal, wwbd",
        textLineHeight: 12,
        textHeight: 0,
        textSpacing: 0,
        textAlign: "left",
        init: function(b, c) {
            b && (this.textLineHeight = this.textFontSize = b);
            c && (this.textFont = c)
        },
        wrapText: function(b, c) {
            if (!b || "" == b || 0 >= c) return [];
            var d = ig.system.context;
            d.font = this.textFontSize + "px " + this.textFont;
            var e = b.split(" "),
                f = "",
                j = [];
            if (1 == e.length)
                for (var n = 0; n < b.length; n++) {
                    var r =
                        f + b[n],
                        g = d.measureText(r),
                        g = g.width;
                    g > c && 0 < n ? (j.push(f), f = b[n]) : f = r
                } else {
                    for (n = 0; n < e.length; n++) r = f + e[n] + " ", g = d.measureText(r), g = g.width, "\n" == e[n] ? (j.push(f), f = "") : g > c && 0 < n ? (j.push(f), f = e[n] + " ") : f = r;
                    " " == f.substr(f.length - 1) && (f = f.substr(0, f.length - 1))
                }
            j.push(f);
            this.textHeight = (this.textLineHeight + 4) * j.length;
            return j
        },
        fillTextWithSpacing: function(b, c, d, e, f) {
            var j = 0;
            b.save();
            b.font = this.textFontSize + "px " + this.textFont;
            b.restore();
            for (var n = 0; n < c.length - 1; n++) char = c.substr(n, 1), b.save(), b.font =
                this.textFontSize + "px " + this.textFont, j += b.measureText(char).width, b.restore();
            j -= f * (c.length + 2);
            b.save();
            b.font = this.textFontSize + "px " + this.textFont;
            wAll = b.measureText(c).width;
            "center" == this.textAlign && (d -= j / 2);
            do char = c.substr(0, 1), c = c.substr(1), b.fillText(char, d, e), wShorter = "" == c ? 0 : b.measureText(c).width, wChar = wAll - wShorter, d += wChar - f, wAll = wShorter; while ("" != c);
            b.restore()
        },
        fillStrokedTextWithSpacing: function(b, c, d, e, f) {
            var j = 0;
            b.save();
            b.font = this.textFontSize + "px " + this.textFont;
            b.restore();
            for (var n = 0; n < c.length; n++) char = c.substr(n, 1), b.save(), b.font = this.textFontSize + "px " + this.textFont, j += b.measureText(char).width, b.restore();
            j += f * (c.length - 2);
            b.save();
            b.font = "bold " + this.textFontSize + "px " + this.textFont;
            wAll = b.measureText(c).width;
            "center" == this.textAlign && (d -= j / 2);
            do char = c.substr(0, 1), c = c.substr(1), ig.KvnUtility.drawStrokedText(b, char, d, e, "#000000", 2), wShorter = "" == c ? 0 : b.measureText(c).width, wChar = wAll - wShorter, d += wChar + f, wAll = wShorter; while ("" != c);
            b.restore()
        },
        drawTextList: function(b,
            c, d) {
            if (b && b.length && !(0 >= b.length)) {
                var e = ig.system.context;
                e.font = this.textFontSize + "px " + this.textFont;
                for (var f = 0, j = 0; j < b.length; j++) this.fillTextWithSpacing(e, b[j], c, d + f, this.textSpacing), f += this.textLineHeight + 4
            }
        },
        drawStrokedTextList: function(b, c, d) {
            if (b && b.length && !(0 >= b.length)) {
                var e = ig.system.context;
                e.font = this.textFontSize + "px " + this.textFont;
                for (var f = 0, j = 0; j < b.length; j++) this.fillStrokedTextWithSpacing(e, b[j], c, d + f, this.textSpacing), f += this.textLineHeight + 4
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-restart").requires("impact.entity", "game.entities.buttons.button").defines(function() {
    EntityButtonRestart = EntityButton.extend({
        gravityFactor: 0,
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/game/button-restart.png"),
            sheetX: 1,
            sheetY: 1
        },
        scaling: !0,
        offsetY: 0,
        pointerFocus: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 1, [0])
        },
        update: function() {
            this.parent();
            this.pointerCollide()
        },
        pointerCollide: function() {
            if (!ig.ua.mobile &&
                !ig.game.easing) {
                var b = ig.game.getEntitiesByType(EntityPointerExtended)[0];
                if (!this.pointerFocus || !(this.pos.x <= b.pos.x && this.pos.y <= b.pos.y && this.pos.x + this.size.x >= b.pos.x && this.pos.y + this.size.y + 5 >= b.pos.y)) this.pos.x <= b.pos.x && this.pos.y <= b.pos.y && this.pos.x + this.size.x >= b.pos.x && this.pos.y + this.size.y >= b.pos.y ? this.pointerFocus || (this.offsetY = -5, this.pointerFocus = !0) : this.pointerFocus && (this.offsetY = 0, this.pointerFocus = !1)
            }
        },
        clicked: function() {
            this.parent();
            ig.gd.show(this.replayGame.bind(this))
        },
        replayGame: function() {
            !1 == ig.game.easing && (ig.soundHandler.sfxPlayer.play(ig.soundHandler.sfxPlayer.soundList.buttonClick), ig.game.easing = !0, this.tween({
                bodyScale: 0.8
            }, 0.1, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {
                    this.tween({
                        bodyScale: 1
                    }, 0.1, {
                        easing: ig.Tween.Easing.Linear.EaseNone,
                        onComplete: function() {
                            ig.game.gotoGame()
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
ig.module("game.entities.game.pop-up-gameover").requires("plugins.kvn-utility", "plugins.textwrapper", "game.entities.others.marketjs-entity", "game.entities.buttons.button", "game.entities.buttons.button-home", "game.entities.buttons.button-restart").defines(function() {
    EntityPopUpGameover = EntityMarketjsEntity.extend({
        gravityFactor: 0,
        zIndex: 50,
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/game/game-over-window.png"),
            sheetX: 1,
            sheetY: 1
        },
        titleText: new ig.Image("media/graphics/sprites/game/game-over-text.png"),
        buttonRestart: null,
        buttonHome: null,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 1, [0]);
            this.setMiddlePosition(d.controller.rWidthH, d.controller.rHeightH);
            this.pos.y += ig.system.height;
            this.blackBg = ig.game.spawnEntity(EntityBlackBackground, 0, 0, {
                controller: this.controller,
                zIndex: this.zIndex - 1
            });
            this.buttonRestart = ig.game.spawnEntity(EntityButtonRestart, ig.system.width, ig.system.height, {
                controller: this.controller,
                zIndex: this.zIndex + 1
            });
            this.buttonHome =
                ig.game.spawnEntity(EntityButtonHome, ig.system.width, ig.system.height, {
                    controller: this.controller,
                    zIndex: this.zIndex + 1
                })
        },
        update: function() {
            this.parent();
            this.buttonRestart.pos.x = this.pos.x + 1 * this.size.x / 4 - 1 * this.buttonRestart.size.x / 2;
            this.buttonRestart.pos.y = this.pos.y + 26 * this.size.y / 20 - 1 * this.buttonRestart.size.y / 2 + this.buttonRestart.offsetY;
            this.buttonHome.pos.x = this.pos.x + 3 * this.size.x / 4 - 1 * this.buttonHome.size.x / 2;
            this.buttonHome.pos.y = this.pos.y + 26 * this.size.y / 20 - 1 * this.buttonHome.size.y / 2 +
                this.buttonHome.offsetY
        },
        draw: function() {
            this.parent();
            ig.system.context.save();
            var b = this.pos.y + 3.5 * this.size.y / 20;
            this.titleText.draw(this.pos.x + 1 * this.size.x / 2 - this.titleText.width / 2, b);
            var c = ig.system.context,
                d = 55,
                e = this.pos.x + this.size.x / 2,
                b = b + d + 30 + 40,
                f = _STRINGS.Game.Score + ": " + parseInt(this.controller.score || 0).toLocaleString();
            c.textAlign = "left";
            c.font = "bold " + d + "px porkys";
            c.fillStyle = "#ffffff";
            var j = new ig.Textwrapper(d, "porkys"),
                f = j.wrapText(f, 500);
            j.textSpacing = 2;
            j.textAlign = "center";
            j.drawStrokedTextList(f,
                e, b);
            b += d + 30;
            d = 45;
            c.font = "bold " + d + "px porkys";
            c.textAlign = "left";
            f = _STRINGS.Game.Highscore + ": " + parseInt(this.controller.getHighscore() || 0).toLocaleString();
            j = new ig.Textwrapper(d, "porkys");
            f = j.wrapText(f, 500);
            j.textSpacing = 2;
            j.textAlign = "center";
            j.drawStrokedTextList(f, e, b);
            ig.system.context.restore()
        },
        easeOut: function() {
            this.blackBg.easeOut();
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
            this.blackBg.easeIn();
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
ig.module("game.entities.game.game-level").requires("plugins.kvn-utility", "game.entities.others.marketjs-entity", "game.entities.game.enemy-green", "game.entities.game.enemy-orange", "game.entities.game.enemy-red").defines(function() {
    EntityGameLevel = EntityMarketjsEntity.extend({
        enemiesSet: [],
        currentPointer: 0,
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        setEnemies: function() {
            var b = [];
            switch (this.controller.wave) {
                case 1:
                    b = [{
                        enemyEntity: EntityEnemyGreen,
                        enemySize: this.controller.enemyVariation.small,
                        minHealth: 3,
                        maxHealth: 5
                    }, {
                        enemyEntity: EntityEnemyGreen,
                        enemySize: this.controller.enemyVariation.medium,
                        minHealth: 3,
                        maxHealth: 10
                    }, {
                        enemyEntity: EntityEnemyGreen,
                        enemySize: this.controller.enemyVariation.medium,
                        minHealth: 10,
                        maxHealth: 15
                    }];
                    break;
                case 2:
                    b = [{
                        enemyEntity: EntityEnemyOrange,
                        enemySize: this.controller.enemyVariation.medium,
                        minHealth: 15,
                        maxHealth: 20
                    }, {
                        enemyEntity: EntityEnemyGreen,
                        enemySize: this.controller.enemyVariation.small,
                        minHealth: 10,
                        maxHealth: 15
                    }, {
                        enemyEntity: EntityEnemyOrange,
                        enemySize: this.controller.enemyVariation.big,
                        minHealth: 35,
                        maxHealth: 40
                    }, {
                        enemyEntity: EntityEnemyOrange,
                        enemySize: this.controller.enemyVariation.medium,
                        minHealth: 20,
                        maxHealth: 30
                    }];
                    break;
                case 3:
                    b = [{
                        enemyEntity: EntityEnemyGreen,
                        enemySize: this.controller.enemyVariation.medium,
                        minHealth: 10,
                        maxHealth: 20
                    }, {
                        enemyEntity: EntityEnemyOrange,
                        enemySize: this.controller.enemyVariation.medium,
                        minHealth: 30,
                        maxHealth: 40
                    }, {
                        enemyEntity: EntityEnemyOrange,
                        enemySize: this.controller.enemyVariation.big,
                        minHealth: 50,
                        maxHealth: 55
                    }, {
                        enemyEntity: EntityEnemyGreen,
                        enemySize: this.controller.enemyVariation.large,
                        minHealth: 30,
                        maxHealth: 35
                    }, {
                        enemyEntity: EntityEnemyGreen,
                        enemySize: this.controller.enemyVariation.medium,
                        minHealth: 10,
                        maxHealth: 15
                    }, {
                        enemyEntity: EntityEnemyOrange,
                        enemySize: this.controller.enemyVariation.medium,
                        minHealth: 30,
                        maxHealth: 35
                    }];
                    break;
                case 4:
                    b = [{
                        enemyEntity: EntityEnemyGreen,
                        enemySize: this.controller.enemyVariation.big,
                        minHealth: 10,
                        maxHealth: 15
                    }, {
                        enemyEntity: EntityEnemyOrange,
                        enemySize: this.controller.enemyVariation.small,
                        minHealth: 50,
                        maxHealth: 55
                    }, {
                        enemyEntity: EntityEnemyRed,
                        enemySize: this.controller.enemyVariation.medium,
                        minHealth: 80,
                        maxHealth: 100
                    }, {
                        enemyEntity: EntityEnemyOrange,
                        enemySize: this.controller.enemyVariation.small,
                        minHealth: 50,
                        maxHealth: 60
                    }, {
                        enemyEntity: EntityEnemyGreen,
                        enemySize: this.controller.enemyVariation.medium,
                        minHealth: 10,
                        maxHealth: 15
                    }, {
                        enemyEntity: EntityEnemyGreen,
                        enemySize: this.controller.enemyVariation.small,
                        minHealth: 5,
                        maxHealth: 10
                    }, {
                        enemyEntity: EntityEnemyOrange,
                        enemySize: this.controller.enemyVariation.big,
                        minHealth: 50,
                        maxHealth: 60
                    }, {
                        enemyEntity: EntityEnemyGreen,
                        enemySize: this.controller.enemyVariation.medium,
                        minHealth: 10,
                        maxHealth: 15
                    }];
                    break;
                case 5:
                    b = [{
                        enemyEntity: EntityEnemyGreen,
                        enemySize: this.controller.enemyVariation.medium,
                        minHealth: 10,
                        maxHealth: 25
                    }, {
                        enemyEntity: EntityEnemyOrange,
                        enemySize: this.controller.enemyVariation.small,
                        minHealth: 50,
                        maxHealth: 55
                    }, {
                        enemyEntity: EntityEnemyGreen,
                        enemySize: this.controller.enemyVariation.large,
                        minHealth: 30,
                        maxHealth: 35
                    }, {
                        enemyEntity: EntityEnemyOrange,
                        enemySize: this.controller.enemyVariation.small,
                        minHealth: 30,
                        maxHealth: 35
                    }, {
                        enemyEntity: EntityEnemyGreen,
                        enemySize: this.controller.enemyVariation.medium,
                        minHealth: 20,
                        maxHealth: 25
                    }, {
                        enemyEntity: EntityEnemyRed,
                        enemySize: this.controller.enemyVariation.small,
                        minHealth: 120,
                        maxHealth: 130
                    }, {
                        enemyEntity: EntityEnemyOrange,
                        enemySize: this.controller.enemyVariation.medium,
                        minHealth: 50,
                        maxHealth: 60
                    }, {
                        enemyEntity: EntityEnemyGreen,
                        enemySize: this.controller.enemyVariation.medium,
                        minHealth: 10,
                        maxHealth: 15
                    }];
                    break;
                case 6:
                    b = [{
                        enemyEntity: EntityEnemyGreen,
                        enemySize: this.controller.enemyVariation.medium,
                        minHealth: 10,
                        maxHealth: 25
                    }, {
                        enemyEntity: EntityEnemyOrange,
                        enemySize: this.controller.enemyVariation.medium,
                        minHealth: 50,
                        maxHealth: 55
                    }, {
                        enemyEntity: EntityEnemyGreen,
                        enemySize: this.controller.enemyVariation.small,
                        minHealth: 5,
                        maxHealth: 15
                    }, {
                        enemyEntity: EntityEnemyGreen,
                        enemySize: this.controller.enemyVariation.medium,
                        minHealth: 20,
                        maxHealth: 25
                    }, {
                        enemyEntity: EntityEnemyGreen,
                        enemySize: this.controller.enemyVariation.large,
                        minHealth: 30,
                        maxHealth: 35
                    }, {
                        enemyEntity: EntityEnemyRed,
                        enemySize: this.controller.enemyVariation.small,
                        minHealth: 120,
                        maxHealth: 130
                    }, {
                        enemyEntity: EntityEnemyGreen,
                        enemySize: this.controller.enemyVariation.small,
                        minHealth: 3,
                        maxHealth: 5
                    }, {
                        enemyEntity: EntityEnemyGreen,
                        enemySize: this.controller.enemyVariation.medium,
                        minHealth: 20,
                        maxHealth: 25
                    }];
                    break;
                case 7:
                    b = [{
                        enemyEntity: EntityEnemyOrange,
                        enemySize: this.controller.enemyVariation.small,
                        minHealth: 30,
                        maxHealth: 40
                    }, {
                        enemyEntity: EntityEnemyOrange,
                        enemySize: this.controller.enemyVariation.medium,
                        minHealth: 50,
                        maxHealth: 55
                    }, {
                        enemyEntity: EntityEnemyGreen,
                        enemySize: this.controller.enemyVariation.small,
                        minHealth: 5,
                        maxHealth: 15
                    }, {
                        enemyEntity: EntityEnemyRed,
                        enemySize: this.controller.enemyVariation.medium,
                        minHealth: 190,
                        maxHealth: 200
                    }, {
                        enemyEntity: EntityEnemyGreen,
                        enemySize: this.controller.enemyVariation.medium,
                        minHealth: 20,
                        maxHealth: 25
                    }, {
                        enemyEntity: EntityEnemyGreen,
                        enemySize: this.controller.enemyVariation.small,
                        minHealth: 3,
                        maxHealth: 5
                    }, {
                        enemyEntity: EntityEnemyGreen,
                        enemySize: this.controller.enemyVariation.medium,
                        minHealth: 10,
                        maxHealth: 15
                    }, {
                        enemyEntity: EntityEnemyOrange,
                        enemySize: this.controller.enemyVariation.large,
                        minHealth: 70,
                        maxHealth: 80
                    }];
                    break;
                case 8:
                    b = [{
                        enemyEntity: EntityEnemyGreen,
                        enemySize: this.controller.enemyVariation.small,
                        minHealth: 10,
                        maxHealth: 15
                    }, {
                        enemyEntity: EntityEnemyOrange,
                        enemySize: this.controller.enemyVariation.big,
                        minHealth: 50,
                        maxHealth: 55
                    }, {
                        enemyEntity: EntityEnemyGreen,
                        enemySize: this.controller.enemyVariation.small,
                        minHealth: 5,
                        maxHealth: 15
                    }, {
                        enemyEntity: EntityEnemyRed,
                        enemySize: this.controller.enemyVariation.medium,
                        minHealth: 190,
                        maxHealth: 200
                    }, {
                        enemyEntity: EntityEnemyGreen,
                        enemySize: this.controller.enemyVariation.medium,
                        minHealth: 20,
                        maxHealth: 25
                    }, {
                        enemyEntity: EntityEnemyGreen,
                        enemySize: this.controller.enemyVariation.small,
                        minHealth: 3,
                        maxHealth: 5
                    }, {
                        enemyEntity: EntityEnemyGreen,
                        enemySize: this.controller.enemyVariation.medium,
                        minHealth: 10,
                        maxHealth: 15
                    }, {
                        enemyEntity: EntityEnemyRed,
                        enemySize: this.controller.enemyVariation.small,
                        minHealth: 90,
                        maxHealth: 100
                    }];
                    break;
                case 9:
                    b = [{
                        enemyEntity: EntityEnemyGreen,
                        enemySize: this.controller.enemyVariation.small,
                        minHealth: 10,
                        maxHealth: 15
                    }, {
                        enemyEntity: EntityEnemyOrange,
                        enemySize: this.controller.enemyVariation.medium,
                        minHealth: 50,
                        maxHealth: 55
                    }, {
                        enemyEntity: EntityEnemyGreen,
                        enemySize: this.controller.enemyVariation.small,
                        minHealth: 5,
                        maxHealth: 15
                    }, {
                        enemyEntity: EntityEnemyRed,
                        enemySize: this.controller.enemyVariation.big,
                        minHealth: 250,
                        maxHealth: 300
                    }, {
                        enemyEntity: EntityEnemyGreen,
                        enemySize: this.controller.enemyVariation.medium,
                        minHealth: 20,
                        maxHealth: 25
                    }, {
                        enemyEntity: EntityEnemyGreen,
                        enemySize: this.controller.enemyVariation.small,
                        minHealth: 3,
                        maxHealth: 5
                    }, {
                        enemyEntity: EntityEnemyOrange,
                        enemySize: this.controller.enemyVariation.medium,
                        minHealth: 40,
                        maxHealth: 45
                    }, {
                        enemyEntity: EntityEnemyGreen,
                        enemySize: this.controller.enemyVariation.medium,
                        minHealth: 15,
                        maxHealth: 20
                    }];
                    break;
                case 10:
                    b = [{
                        enemyEntity: EntityEnemyGreen,
                        enemySize: this.controller.enemyVariation.large,
                        minHealth: 50,
                        maxHealth: 60
                    }, {
                        enemyEntity: EntityEnemyOrange,
                        enemySize: this.controller.enemyVariation.small,
                        minHealth: 50,
                        maxHealth: 55
                    }, {
                        enemyEntity: EntityEnemyRed,
                        enemySize: this.controller.enemyVariation.small,
                        minHealth: 200,
                        maxHealth: 250
                    }, {
                        enemyEntity: EntityEnemyGreen,
                        enemySize: this.controller.enemyVariation.small,
                        minHealth: 5,
                        maxHealth: 15
                    }, {
                        enemyEntity: EntityEnemyGreen,
                        enemySize: this.controller.enemyVariation.medium,
                        minHealth: 20,
                        maxHealth: 25
                    }, {
                        enemyEntity: EntityEnemyRed,
                        enemySize: this.controller.enemyVariation.medium,
                        minHealth: 150,
                        maxHealth: 200
                    }, {
                        enemyEntity: EntityEnemyGreen,
                        enemySize: this.controller.enemyVariation.small,
                        minHealth: 3,
                        maxHealth: 5
                    }, {
                        enemyEntity: EntityEnemyOrange,
                        enemySize: this.controller.enemyVariation.medium,
                        minHealth: 40,
                        maxHealth: 45
                    }, {
                        enemyEntity: EntityEnemyGreen,
                        enemySize: this.controller.enemyVariation.medium,
                        minHealth: 15,
                        maxHealth: 20
                    }];
                    break;
                case 11:
                    b = [{
                        enemyEntity: EntityEnemyOrange,
                        enemySize: this.controller.enemyVariation.large,
                        minHealth: 90,
                        maxHealth: 100
                    }, {
                        enemyEntity: EntityEnemyGreen,
                        enemySize: this.controller.enemyVariation.small,
                        minHealth: 5,
                        maxHealth: 10
                    }, {
                        enemyEntity: EntityEnemyRed,
                        enemySize: this.controller.enemyVariation.medium,
                        minHealth: 200,
                        maxHealth: 250
                    }, {
                        enemyEntity: EntityEnemyGreen,
                        enemySize: this.controller.enemyVariation.small,
                        minHealth: 5,
                        maxHealth: 15
                    }, {
                        enemyEntity: EntityEnemyGreen,
                        enemySize: this.controller.enemyVariation.medium,
                        minHealth: 20,
                        maxHealth: 25
                    }, {
                        enemyEntity: EntityEnemyGreen,
                        enemySize: this.controller.enemyVariation.small,
                        minHealth: 3,
                        maxHealth: 5
                    }, {
                        enemyEntity: EntityEnemyRed,
                        enemySize: this.controller.enemyVariation.medium,
                        minHealth: 175,
                        maxHealth: 200
                    }, {
                        enemyEntity: EntityEnemyOrange,
                        enemySize: this.controller.enemyVariation.medium,
                        minHealth: 40,
                        maxHealth: 45
                    }, {
                        enemyEntity: EntityEnemyGreen,
                        enemySize: this.controller.enemyVariation.medium,
                        minHealth: 15,
                        maxHealth: 20
                    }];
                    break;
                default:
                    b = [{
                        enemyEntity: EntityEnemyGreen,
                        enemySize: this.controller.enemyVariation.large,
                        minHealth: 50,
                        maxHealth: 60
                    }, {
                        enemyEntity: EntityEnemyOrange,
                        enemySize: this.controller.enemyVariation.small,
                        minHealth: 50,
                        maxHealth: 55
                    }, {
                        enemyEntity: EntityEnemyRed,
                        enemySize: this.controller.enemyVariation.small,
                        minHealth: 200,
                        maxHealth: 250
                    }, {
                        enemyEntity: EntityEnemyGreen,
                        enemySize: this.controller.enemyVariation.small,
                        minHealth: 5,
                        maxHealth: 15
                    }, {
                        enemyEntity: EntityEnemyGreen,
                        enemySize: this.controller.enemyVariation.medium,
                        minHealth: 20,
                        maxHealth: 25
                    }, {
                        enemyEntity: EntityEnemyRed,
                        enemySize: this.controller.enemyVariation.medium,
                        minHealth: 150,
                        maxHealth: 200
                    }, {
                        enemyEntity: EntityEnemyGreen,
                        enemySize: this.controller.enemyVariation.small,
                        minHealth: 3,
                        maxHealth: 5
                    }, {
                        enemyEntity: EntityEnemyOrange,
                        enemySize: this.controller.enemyVariation.medium,
                        minHealth: 40,
                        maxHealth: 45
                    }, {
                        enemyEntity: EntityEnemyGreen,
                        enemySize: this.controller.enemyVariation.medium,
                        minHealth: 15,
                        maxHealth: 20
                    }]
            }
            this.currentPointer = 0;
            this.enemiesSet = b
        },
        getEnemiesConfig: function() {
            if (this.enemiesSet.length > this.currentPointer) {
                var b = this.enemiesSet[this.currentPointer];
                this.currentPointer++;
                return b
            }
            return null
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.game-ui").requires("plugins.kvn-utility", "game.entities.others.marketjs-entity", "game.entities.kvn-delay-execution").defines(function() {
    EntityGameUi = EntityMarketjsEntity.extend({
        zIndex: 40,
        gravityFactor: 0,
        barFrameLife: new ig.Image("media/graphics/sprites/game/life-bar-frame.png"),
        barFillLife: new ig.Image("media/graphics/sprites/game/life-bar-fill.png"),
        shieldIcon: new ig.Image("media/graphics/sprites/game/shield-icon.png"),
        lifeBarPosModifier: new Vector2(0, 0),
        scoreScale: 1,
        scorePosModifier: new Vector2(0, 0),
        init: function(b, c, d) {
            this.parent(b, c, d);
            ig.game.spawnEntity(EntityKvnDelayExecution, 0, 0, {
                controller: this
            }).setTimeOut(1, function() {
                this.show()
            }.bind(this));
            this.lifeBarPosModifier.x = 280;
            this.lifeBarPosModifier.y = 0;
            this.scorePosModifier.x = 0;
            this.scorePosModifier.y = -1E3
        },
        draw: function() {
            this.parent();
            var b = ig.system.context;
            b.save();
            for (var c = this.controller.player.health, d = this.shieldIcon.width, e = this.controller.rWidth - d * c - 5 * c + this.lifeBarPosModifier.x, f = 10, j = 0; j <
                c; j++) this.shieldIcon.draw(e, f), e = e + d + 5;
            b.restore();
            b.save();
            c = 80 * this.scoreScale;
            d = "" + this.controller.score;
            b.font = "bold " + c + "px porkys";
            b.fillStyle = "#ffffff";
            b.textAlign = "center";
            b.textBaseline = "alphabetic";
            b.shadowOffsetX = 0;
            b.shadowOffsetY = 0;
            ig.KvnUtility.drawGlowingText(b, d, this.controller.rWidthH + this.scorePosModifier.x, c + 100 + this.scorePosModifier.y, "red", 10);
            b.restore()
        },
        show: function() {
            this.showLifeBar();
            ig.game.spawnEntity(EntityKvnDelayExecution, 0, 0, {
                controller: this
            }).setTimeOut(0.3, function() {
                this.showScore()
            }.bind(this))
        },
        hide: function() {
            this.hideLifeBar();
            this.hideScore()
        },
        showLifeBar: function(b, c) {
            null == b && (b = 0.5);
            this.lifeBarPosModifier.x = 280;
            this.lifeBarPosModifier.y = 0;
            this.tween({
                lifeBarPosModifier: new Vector2(0, 0)
            }, b, {
                easing: ig.Tween.Easing.Back.EaseOut,
                onComplete: function() {
                    c ? c() : ""
                }.bind(this)
            }).start()
        },
        hideLifeBar: function(b, c) {
            null == b && (b = 0.5);
            this.tween({
                lifeBarPosModifier: new Vector2(280, 0)
            }, b, {
                easing: ig.Tween.Easing.Back.EaseIn,
                onComplete: function() {
                    c ? c() : ""
                }.bind(this)
            }).start()
        },
        showScore: function(b,
            c) {
            null == b && (b = 0.5);
            this.scorePosModifier.x = 0;
            this.scoreScale = this.scorePosModifier.y = 0;
            this.tween({
                scoreScale: 1
            }, b, {
                easing: ig.Tween.Easing.Back.EaseOut,
                onComplete: function() {
                    c ? c() : ""
                }.bind(this)
            }).start()
        },
        hideScore: function(b, c) {
            null == b && (b = 0.5);
            this.scorePosModifier.x = 0;
            this.scorePosModifier.y = -1E3;
            this.scoreScale = 1;
            this.tween({
                scoreScale: 0
            }, b, {
                easing: ig.Tween.Easing.Back.EaseOut,
                onComplete: function() {
                    this.scorePosModifier.x = 0;
                    this.scorePosModifier.y = -1E3;
                    c ? c() : ""
                }.bind(this)
            }).start()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game.tutorial").requires("game.entities.others.marketjs-entity").defines(function() {
    EntityTutorial = EntityMarketjsEntity.extend({
        gravityFactor: 0,
        zIndex: 10,
        hand: null,
        bar: null,
        inTransition: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            ig.global.wm || (this.bar = ig.game.spawnEntity(EntityTutorialBar, this.pos.x, this.pos.y, {
                controller: this.controller,
                parentObj: this,
                zIndex: this.zIndex
            }), this.hand = ig.game.spawnEntity(EntityTutorialHand, this.pos.x, this.pos.y + this.bar.size.y - 30, {
                controller: this.controller,
                parentObj: this,
                zIndex: this.zIndex
            }), this.bar.show(), this.hand.show())
        },
        kill: function() {
            return this.bar.isActive && this.hand.isActive ? (this.bar.kill(), this.hand.kill(), this.parent(), !0) : !1
        }
    });
    EntityTutorialBar = EntityMarketjsEntity.extend({
        gravityFactor: 0,
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/game/hand-slide-bar.png"),
            sheetX: 1,
            sheetY: 1
        },
        originalPos: null,
        bodyScaleX: 1,
        bodyScaleY: 0.8,
        isActive: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet,
                1, [0]);
            this.setTopMiddlePosition(this.pos.x, this.pos.y);
            this.originalPos = new Vector2(this.pos.x, this.pos.y)
        },
        update: function() {
            this.parent();
            this.setScale(this.bodyScaleX, this.bodyScaleY)
        },
        show: function(b, c) {
            null == b && (b = 0.5);
            this.pos.x = this.originalPos.x;
            this.pos.y = this.originalPos.y;
            this.bodyScaleY = this.bodyScaleX = 0;
            this.tween({
                bodyScaleX: 1,
                bodyScaleY: 0.8
            }, b, {
                easing: ig.Tween.Easing.Back.EaseOut,
                onComplete: function() {
                    this.isActive = !0;
                    c ? c() : ""
                }.bind(this)
            }).start()
        },
        hide: function(b, c) {
            null == b && (b =
                0.5);
            this.tween({
                bodyScaleX: 1,
                bodyScaleY: 0.8
            }, b, {
                easing: ig.Tween.Easing.Back.EaseIn,
                onComplete: function() {
                    this.pos.y = -1E3;
                    c ? c() : ""
                }.bind(this)
            }).start()
        }
    });
    EntityTutorialHand = EntityMarketjsEntity.extend({
        gravityFactor: 0,
        idleSheetInfo: {
            sheetImage: new ig.Image("media/graphics/sprites/game/finger.png"),
            sheetX: 1,
            sheetY: 1
        },
        originalPos: null,
        leftTarget: 30,
        rightTarget: 450,
        isActive: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.currentAnim = this.idle = new ig.Animation(this.idleSheet, 1, [0]);
            this.setTopMiddlePosition(this.pos.x,
                this.pos.y);
            this.originalPos = new Vector2(this.pos.x, this.pos.y);
            this.scaling = !0
        },
        show: function(b, c) {
            null == b && (b = 0.5);
            this.pos.x = this.originalPos.x;
            this.pos.y = this.originalPos.y;
            this.bodyScale = 0;
            this.tween({
                bodyScale: 1
            }, b, {
                easing: ig.Tween.Easing.Back.EaseOut,
                onComplete: function() {
                    this.tweenHand();
                    this.isActive = !0;
                    c ? c() : ""
                }.bind(this)
            }).start()
        },
        hide: function(b, c) {
            null == b && (b = 0.5);
            this.bodyScale = 1;
            this.tween({
                bodyScale: 0
            }, b, {
                easing: ig.Tween.Easing.Back.EaseOut,
                onComplete: function() {
                    this.pos.y = -1E3;
                    c ? c() : ""
                }.bind(this)
            }).start()
        },
        tweenHand: function() {
            this.tween({
                pos: {
                    x: this.rightTarget,
                    y: this.pos.y
                }
            }, 1, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {
                    this.tweenHandLeft()
                }.bind(this)
            }).start()
        },
        tweenHandLeft: function() {
            this.tween({
                pos: {
                    x: this.leftTarget,
                    y: this.pos.y
                }
            }, 2, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {
                    this.tweenHandRight()
                }.bind(this)
            }).start()
        },
        tweenHandRight: function() {
            this.tween({
                pos: {
                    x: this.rightTarget,
                    y: this.pos.y
                }
            }, 2, {
                easing: ig.Tween.Easing.Linear.EaseNone,
                onComplete: function() {
                    this.tweenHandLeft()
                }.bind(this)
            }).start()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.controllers.game-controller").requires("game.entities.others.marketjs-entity", "game.entities.game.game-background", "game.entities.buttons.button-pause", "game.entities.buttons.button-move", "game.entities.game.player", "game.entities.game.enemy", "game.entities.game.enemy-special", "game.entities.game.enemy-green", "game.entities.game.enemy-orange", "game.entities.game.enemy-red", "game.entities.game.drone", "game.entities.game.pop-up-gameover", "game.entities.game.game-level", "game.entities.game.game-ui",
    "game.entities.game.tutorial", "game.entities.kvn-delay-execution", "plugins.kvn-utility").defines(function() {
    EntityGameController = ig.Entity.extend({
        zIndex: -10,
        size: {
            x: 540,
            y: 960
        },
        isGameOver: !1,
        isGamePause: !1,
        timerGame: null,
        timerSpawnEnemy: null,
        timerSpawnDrone: null,
        timerSpawnHazard: null,
        enemySpawnInterval: 3,
        droneSpawnInterval: 20,
        hazardSpawnInterval: 30,
        score: 0,
        playerMovedOnce: !1,
        rWidth: null,
        rHeight: null,
        rHeightH: null,
        rWidthH: null,
        groundPosY: null,
        enemyVariation: {
            small: {
                sizeIndex: 0,
                name: "small",
                scale: 0.6,
                fontSize: 30
            },
            medium: {
                sizeIndex: 1,
                name: "medium",
                scale: 0.9,
                fontSize: 45
            },
            big: {
                sizeIndex: 2,
                name: "big",
                scale: 1.2,
                fontSize: 60
            },
            large: {
                sizeIndex: 3,
                name: "large",
                scale: 1.7,
                fontSize: 85
            }
        },
        enemyVariationArray: [],
        wave: 1,
        levelManager: null,
        maxEnemySpawned: 6,
        arrayEnemyInStage: null,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.timerGame = new ig.Timer;
            this.timerSpawnEnemy = new ig.Timer;
            this.timerSpawnDrone = new ig.Timer;
            this.timerSpawnHazard = new ig.Timer;
            ig.game.gravity = 300;
            ig.global.wm || (this.rWidth = ig.system.realWidth,
                this.rHeight = ig.system.realHeight, this.rHeightH = this.rHeight / 2, this.rWidthH = this.rWidth / 2, this.groundPosY = this.rHeight - 70, this.bg1 = ig.game.spawnEntity(EntityGameBackground, 0, 0, {
                    zIndex: this.zIndex,
                    stopPosBefore: 0,
                    currentTargetStop: 1,
                    controller: this
                }), this.bg2 = ig.game.spawnEntity(EntityGameBackground, 0, 0, {
                    zIndex: this.zIndex,
                    stopPosBefore: 1,
                    currentTargetStop: 2,
                    controller: this
                }), this.player = ig.game.spawnEntity(EntityPlayer, this.rWidthH - 31, this.rHeight - 125, {
                    controller: this
                }), this.btnMove = ig.game.spawnEntity(EntityButtonMove,
                    0, 0, {
                        controller: this
                    }), ig.game.spawnEntity(EntityKvnDelayExecution, 0, 0, {
                    controller: this
                }).setTimeOut(1.5, function() {
                    this.tutorial = ig.game.spawnEntity(EntityTutorial, this.rWidthH, this.rHeightH + 160, {
                        controller: this
                    })
                }.bind(this)), this.btnPause = ig.game.spawnEntity(EntityButtonPause, 10, 10, {
                    controller: this
                }), this.btnPause.pos.x = this.btnPause.pos.x - this.btnPause.size.x - 20, ig.game.spawnEntity(EntityKvnDelayExecution, 0, 0, {
                    controller: this
                }).setTimeOut(1, function() {
                    this.btnPause.show()
                }.bind(this)), this.popUpSettings =
                ig.game.spawnEntity(EntityPopUpSettings, this.rWidthH, this.rHeightH, {
                    controller: this
                }), this.popUpGameover = ig.game.spawnEntity(EntityPopUpGameover, this.rWidthH, this.rHeightH, {
                    controller: this
                }), this.levelManager = ig.game.spawnEntity(EntityGameLevel, this.rWidth, this.rHeight, {
                    controller: this
                }), ig.game.spawnEntity(EntityGameUi, 0, 0, {
                    controller: this
                }), ig.game.spawnEntity(EntityPointerExtended, 0, 0), this.enemyVariationArray = [this.enemyVariation.small, this.enemyVariation.medium, this.enemyVariation.big, this.enemyVariation.large],
                this.arrayEnemyInStage = [])
        },
        update: function() {
            if (!this.isGamePause && !this.isGameOver) {
                if (this.timerSpawnEnemy.delta() > this.enemySpawnInterval && this.canSpawnEnemy()) {
                    this.updateEnemies();
                    var b = this.levelManager.getEnemiesConfig(),
                        c = ig.KvnUtility.getRandomInteger(b.minHealth, b.maxHealth),
                        d = ig.KvnUtility.getRandomInteger(20, 30),
                        e = ig.KvnUtility.getRandomInteger(0, 2);
                    0 == e ? (e = 0.25 * this.rWidth, c = {
                        vel: {
                            x: d,
                            y: 0
                        },
                        health: c,
                        variation: b.enemySize,
                        controller: this
                    }, b = ig.game.spawnEntity(b.enemyEntity, this.rWidthH /
                        2, 0, c)) : (e = 0.75 * this.rWidth, c = {
                        vel: {
                            x: -d,
                            y: 0
                        },
                        health: c,
                        variation: b.enemySize,
                        controller: this
                    }, b = ig.game.spawnEntity(b.enemyEntity, this.rWidthH + this.rWidthH / 2, 0, c));
                    b.setTopMiddlePosition(e, -b.size.y - 10);
                    this.timerSpawnEnemy.reset()
                }
                this.timerSpawnDrone.delta() > this.droneSpawnInterval && (c = {
                    controller: this
                }, ig.game.spawnEntity(EntityDrone, -100, 200, c), this.timerSpawnDrone.reset());
                this.timerSpawnHazard.delta() > this.hazardSpawnInterval && 3 == this.player.powerLevel && (e = ig.KvnUtility.getRandomInteger(0, 2),
                    b = 0, 0 == e ? (e = 0, b = 50) : (e = this.rWidth, b = -50), c = {
                        vel: {
                            x: b,
                            y: 0
                        },
                        controller: this
                    }, b = ig.game.spawnEntity(EntityEnemySpecial, e, 0, c), b.setTopMiddlePosition(e, -b.size.y - 10), this.timerSpawnHazard.reset())
            }
        },
        killTutorial: function() {
            null != this.tutorial && this.tutorial.kill() && (this.tutorial = null, this.playerMovedOnce = !0)
        },
        addScore: function(b) {
            this.isGameOver || (this.score += b)
        },
        updateEnemies: function() {
            this.levelManager.enemiesSet.length == this.levelManager.currentPointer && (0 != this.levelManager.currentPointer && this.wave++,
                this.levelManager.setEnemies())
        },
        canSpawnEnemy: function() {
            return !this.playerMovedOnce || this.arrayEnemyInStage.length > this.maxEnemySpawned || this.player.isBroken ? !1 : !0
        },
        enemySpawned: function(b) {
            this.arrayEnemyInStage.push(b)
        },
        enemyDead: function(b) {
            b instanceof EntityEnemyGreen ? this.addScore(1) : b instanceof EntityEnemyOrange ? this.addScore(2) : b instanceof EntityEnemyRed && this.addScore(3);
            this.arrayEnemyInStage.erase(b)
        },
        playerBroken: function() {
            this.wave = 2 >= this.wave ? 1 : 7 > this.wave ? this.wave - 2 : this.wave -
                3;
            this.levelManager.currentPointer = 0;
            this.levelManager.enemiesSet.length = 0;
            this.bg1.pause();
            this.bg2.pause();
            this.timerSpawnDrone.reset();
            console.log("Player broken. \nReset to wave " + this.wave + "\nPointer " + this.levelManager.currentPointer)
        },
        playerFixed: function() {
            this.bg1.unpause();
            this.bg2.unpause()
        },
        openSettings: function() {
            this.popUpSettings.easeIn();
            this.btnPause.disableClick();
            this.isGamePause = !0;
            this.bg1.pause();
            this.bg2.pause()
        },
        closeSettings: function() {
            this.popUpSettings.easeOut();
            this.btnPause.enableClick();
            this.isGamePause = !1;
            this.bg1.unpause();
            this.bg2.unpause()
        },
        gameOver: function() {
            this.btnPause.disableClick();
            this.isGameOver = !0;
            this.setHighscore(this.score);
            this.bg1.pause();
            this.bg2.pause();
            ig.game.spawnEntity(EntityKvnDelayExecution, 0, 0, {
                controller: this
            }).setTimeOut(2.4, function() {
                this.openGameoverPanel();
                ig.Timer.timeScale = 1
            }.bind(this))
        },
        openGameoverPanel: function() {
            this.popUpGameover.easeIn()
        },
        getHighscore: function() {
            var b = ig.game.load("sh-highscore");
            null == b && (b = 0);
            return b
        },
        setHighscore: function(b) {
            var c =
                this.getHighscore();
            b > c && ig.game.save("sh-highscore", b)
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
ig.module("game.main").requires("impact.game", "plugins.patches.webkit-image-smoothing-patch", "plugins.patches.windowfocus-onMouseDown-patch", "plugins.patches.input-patch", "plugins.font.font-loader", "plugins.handlers.dom-handler", "plugins.handlers.size-handler", "plugins.handlers.api-handler", "plugins.audio.sound-handler", "plugins.io.io-manager", "plugins.io.storage-manager", "plugins.splash-loader", "plugins.font-loader", "plugins.font-loaded-test", "plugins.tween", "plugins.tweens-handler", "plugins.url-parameters",
    "plugins.director", "plugins.impact-storage", "plugins.fullscreen", "plugins.gamedist", "plugins.data.vector", "plugins.data.color-rgb", "plugins.branding.splash", "game.entities.branding-logo-placeholder", "game.entities.buttons.button-more-games", "game.entities.opening-shield", "game.entities.opening-kitty", "game.entities.pointer", "game.entities.pointer-selector", "game.entities.pointer-extended", "game.entities.select", "game.levels.opening", "game.levels.test-desktop", "game.levels.test-mobile", "game.levels.menu",
    "game.levels.game").defines(function() {
    S0rr(typeof window === typeof {} ? window : typeof global === typeof {} ? global : this);
    t0bb(typeof window === typeof {} ? window : typeof global === typeof {} ? global : this);
    c0WW(typeof window === typeof {} ? window : typeof global === typeof {} ? global : this);
    z1ff(typeof window === typeof {} ? window : typeof global === typeof {} ? global : this);

    function S0rr() {
        function n4() {
            var X9 = 2;
            for (; X9 !== 5;) {
                switch (X9) {
                    case 2:
                        var x9 = [arguments];
                        return x9[0][0].Array;
                        break;
                }
            }
        }

        function C4() {
            var A9 = 2;
            for (; A9 !== 5;) {
                switch (A9) {
                    case 2:
                        var v9 = [arguments];
                        return v9[0][0].Function;
                        break;
                }
            }
        }

        function G4() {
            var e9 = 2;
            for (; e9 !== 5;) {
                switch (e9) {
                    case 2:
                        var s9 = [arguments];
                        try {
                            var d9 = 2;
                            for (; d9 !== 9;) {
                                switch (d9) {
                                    case 5:
                                        s9[9] = [s9[1], s9[1].prototype][s9[0][3]];
                                        s9[3].value = s9[9][s9[0][2]];
                                        try {
                                            s9[0][0].Object.defineProperty(s9[9], s9[0][4], s9[3]);
                                        } catch (e4) {
                                            s9[9][s9[0][4]] = s9[3].value;
                                        }
                                        d9 = 9;
                                        break;
                                    case 2:
                                        s9[3] = {};
                                        s9[1] = (1, s9[0][1])(s9[0][0]);
                                        d9 = 5;
                                        break;
                                }
                            }
                        } catch (d4) {}
                        e9 = 5;
                        break;
                }
            }
        }
        var L9 = 2;
        for (; L9 !== 80;) {
            switch (L9) {
                case 90:
                    var Q4 = function() {
                        var S9 = 2;
                        for (; S9 !== 5;) {
                            switch (S9) {
                                case 2:
                                    var B9 = [arguments];
                                    G4(c9[0][0], B9[0][0], B9[0][1], B9[0][2], B9[0][3]);
                                    S9 = 5;
                                    break;
                            }
                        }
                    };
                    L9 = 89;
                    break;
                case 85:
                    Q4(Z4, c9[27], c9[80], c9[76]);
                    Q4(n4, "push", c9[96], c9[37]);
                    Q4(Z4, c9[64], c9[80], c9[98]);
                    Q4(Z4, c9[65], c9[80], c9[23]);
                    Q4(C4, "apply", c9[96], c9[44]);
                    L9 = 80;
                    break;
                case 17:
                    c9[6] = "";
                    c9[6] = "tim";
                    c9[4] = "";
                    c9[4] = "";
                    c9[4] = "rr";
                    L9 = 25;
                    break;
                case 89:
                    Q4(Z4, "window", c9[80], c9[31]);
                    Q4(l4, "global", c9[80], c9[60]);
                    Q4(y4, "global", c9[96], c9[42]);
                    Q4(y4, "test", c9[96], c9[49]);
                    L9 = 85;
                    break;
                case 70:
                    c9[60] += c9[48];
                    c9[60] += c9[63];
                    c9[31] = c9[71];
                    L9 = 67;
                    break;
                case 56:
                    c9[27] += c9[1];
                    c9[27] += c9[16];
                    c9[49] = c9[7];
                    L9 = 76;
                    break;
                case 73:
                    c9[42] += c9[58];
                    c9[42] += c9[4];
                    c9[60] = c9[9];
                    L9 = 70;
                    break;
                case 62:
                    c9[37] += c9[48];
                    c9[37] += c9[63];
                    c9[76] = c9[45];
                    L9 = 59;
                    break;
                case 47:
                    c9[98] += c9[58];
                    c9[98] += c9[4];
                    c9[64] = c9[86];
                    L9 = 65;
                    break;
                case 3:
                    c9[7] = "";
                    c9[7] = "a";
                    c9[1] = "";
                    c9[1] = "strac";
                    L9 = 6;
                    break;
                case 2:
                    var c9 = [arguments];
                    c9[9] = "";
                    c9[9] = "j";
                    c9[7] = "";
                    L9 = 3;
                    break;
                case 6:
                    c9[71] = "n";
                    c9[2] = "";
                    c9[16] = "t";
                    c9[2] = "g";
                    L9 = 11;
                    break;
                case 32:
                    c9[51] = "";
                    c9[51] = "";
                    c9[51] = "X0";
                    c9[33] = "__r";
                    L9 = 28;
                    break;
                case 76:
                    c9[49] += c9[48];
                    c9[49] += c9[63];
                    c9[42] = c9[9];
                    L9 = 73;
                    break;
                case 53:
                    c9[23] += c9[63];
                    c9[23] += c9[63];
                    c9[65] = c9[33];
                    L9 = 50;
                    break;
                case 65:
                    c9[64] += c9[6];
                    c9[64] += c9[3];
                    c9[37] = c9[2];
                    L9 = 62;
                    break;
                case 37:
                    c9[44] += c9[48];
                    c9[44] += c9[63];
                    c9[23] = c9[51];
                    L9 = 53;
                    break;
                case 59:
                    c9[76] += c9[48];
                    c9[76] += c9[63];
                    c9[27] = c9[18];
                    L9 = 56;
                    break;
                case 25:
                    c9[5] = "";
                    c9[5] = "L";
                    c9[86] = "__op";
                    c9[58] = "0";
                    L9 = 21;
                    break;
                case 28:
                    c9[73] = "";
                    c9[48] = "0r";
                    c9[63] = "r";
                    c9[73] = "Y";
                    L9 = 41;
                    break;
                case 21:
                    c9[8] = "";
                    c9[8] = "dual";
                    c9[25] = "";
                    c9[25] = "esi";
                    L9 = 32;
                    break;
                case 11:
                    c9[3] = "";
                    c9[18] = "__ab";
                    c9[45] = "q";
                    c9[3] = "ize";
                    c9[6] = "";
                    L9 = 17;
                    break;
                case 50:
                    c9[65] += c9[25];
                    c9[65] += c9[8];
                    c9[98] = c9[5];
                    L9 = 47;
                    break;
                case 67:
                    c9[31] += c9[58];
                    c9[31] += c9[4];
                    L9 = 90;
                    break;
                case 41:
                    c9[96] = 5;
                    c9[96] = 1;
                    c9[80] = 0;
                    c9[44] = c9[73];
                    L9 = 37;
                    break;
            }
        }

        function l4() {
            var t9 = 2;
            for (; t9 !== 5;) {
                switch (t9) {
                    case 2:
                        var h9 = [arguments];
                        return h9[0][0];
                        break;
                }
            }
        }

        function y4() {
            var i9 = 2;
            for (; i9 !== 5;) {
                switch (i9) {
                    case 2:
                        var o9 = [arguments];
                        return o9[0][0].RegExp;
                        break;
                }
            }
        }

        function Z4() {
            var V9 = 2;
            for (; V9 !== 5;) {
                switch (V9) {
                    case 2:
                        var T9 = [arguments];
                        return T9[0][0];
                        break;
                }
            }
        }
    }
    K0xx.w7 = function() {
        return typeof K0xx.m7.W === 'function' ? K0xx.m7.W.apply(K0xx.m7, arguments) : K0xx.m7.W;
    };
    K0xx.m7 = function() {
        var b9 = 2;
        for (; b9 !== 3;) {
            switch (b9) {
                case 2:
                    var R9 = [arguments];
                    R9[6] = {};
                    R9[6].W = function() {
                        var U9 = 2;
                        for (; U9 !== 88;) {
                            switch (U9) {
                                case 50:
                                    D9[50].g0rr(D9[55]);
                                    D9[50].g0rr(D9[74]);
                                    D9[50].g0rr(D9[73]);
                                    D9[50].g0rr(D9[16]);
                                    D9[50].g0rr(D9[12]);
                                    U9 = 45;
                                    break;
                                case 70:
                                    D9[69].g0rr(D9[18]);
                                    U9 = 69;
                                    break;
                                case 26:
                                    D9[71] = D9[2];
                                    D9[8] = {};
                                    D9[8].S = ['s'];
                                    D9[8].a = function() {
                                        var R0 = false;
                                        var p0 = [];
                                        try {
                                            for (var s0 in console) p0.g0rr(s0);
                                            R0 = p0.length === 0;
                                        } catch (D0) {}
                                        var m0 = R0;
                                        return m0;
                                    };
                                    D9[47] = D9[8];
                                    D9[1] = {};
                                    D9[1].S = ['s'];
                                    U9 = 34;
                                    break;
                                case 53:
                                    D9[12] = D9[92];
                                    D9[50].g0rr(D9[47]);
                                    D9[50].g0rr(D9[79]);
                                    U9 = 50;
                                    break;
                                case 12:
                                    D9[3].S = ['T'];
                                    D9[3].a = function() {
                                        var T0 = function(V0) {
                                            try {} catch (y0) {} finally {}
                                            var O0 = function() {};
                                            return O0.constructor('var e = []; for(var p in this) e.push(p); return e.length === 0')();
                                        }({});
                                        return T0;
                                    };
                                    D9[73] = D9[3];
                                    U9 = 20;
                                    break;
                                case 42:
                                    D9[79] = D9[63];
                                    D9[10] = {};
                                    D9[10].S = ['T'];
                                    D9[10].a = function() {
                                        var h0 = function() {
                                            return 'aaa'.includes('a');
                                        };
                                        var r0 = /\u0074\x72\u0075\u0065/.a0rr(h0 + []);
                                        return r0;
                                    };
                                    D9[55] = D9[10];
                                    U9 = 37;
                                    break;
                                case 69:
                                    D9[20]++;
                                    U9 = 74;
                                    break;
                                case 75:
                                    D9[20] = 0;
                                    U9 = 74;
                                    break;
                                case 68:
                                    D9[44]++;
                                    U9 = 55;
                                    break;
                                case 3:
                                    return true;
                                    break;
                                case 37:
                                    D9[92] = {};
                                    D9[92].S = ['T'];
                                    D9[92].a = function() {
                                        var Q0 = function() {
                                            return ['a', 'a'].join();
                                        };
                                        var J0 = !/(\u005b|\x5d)/.a0rr(Q0 + []);
                                        return J0;
                                    };
                                    U9 = 53;
                                    break;
                                case 16:
                                    D9[2] = {};
                                    D9[2].S = ['s'];
                                    D9[2].a = function() {
                                        var d0 = typeof q0rr === 'function';
                                        return d0;
                                    };
                                    U9 = 26;
                                    break;
                                case 73:
                                    D9[18] = {};
                                    D9[18][D9[81]] = D9[97][D9[30]][D9[20]];
                                    D9[18][D9[46]] = D9[38];
                                    U9 = 70;
                                    break;
                                case 66:
                                    U9 = 3 ? 66 : 90;
                                    break;
                                case 34:
                                    D9[1].a = function() {
                                        var z0 = typeof L0rr === 'function';
                                        return z0;
                                    };
                                    U9 = 33;
                                    break;
                                case 2:
                                    var D9 = [arguments];
                                    D9[9] = 'Z';
                                    D9[4] = typeof n0rr === typeof {} ? n0rr : typeof j0rr === typeof {} ? j0rr : this;
                                    U9 = 4;
                                    break;
                                case 30:
                                    D9[6].a = function() {
                                        var Z0 = typeof X0rr === 'function';
                                        return Z0;
                                    };
                                    D9[99] = D9[6];
                                    D9[63] = {};
                                    D9[63].S = ['T'];
                                    D9[63].a = function() {
                                        var e0 = function() {
                                            return 'ab'.charAt(1);
                                        };
                                        var N0 = !/\x61/.a0rr(e0 + []);
                                        return N0;
                                    };
                                    U9 = 42;
                                    break;
                                case 59:
                                    D9[46] = 'D';
                                    D9[41] = 'a';
                                    D9[81] = 'w';
                                    U9 = 56;
                                    break;
                                case 20:
                                    D9[5] = {};
                                    D9[5].S = ['T'];
                                    D9[5].a = function() {
                                        var I0 = function() {
                                            return eval("67;");
                                        };
                                        var H0 = !/\u0065\u0076\x61\x6c/.a0rr(I0 + []);
                                        return H0;
                                    };
                                    D9[16] = D9[5];
                                    U9 = 16;
                                    break;
                                case 4:
                                    U9 = D9[4][D9[9]] ? 3 : 9;
                                    break;
                                case 56:
                                    D9[44] = 0;
                                    U9 = 55;
                                    break;
                                case 74:
                                    U9 = D9[20] < D9[97][D9[30]].length ? 73 : 68;
                                    break;
                                case 45:
                                    D9[50].g0rr(D9[99]);
                                    D9[50].g0rr(D9[43]);
                                    D9[50].g0rr(D9[71]);
                                    D9[69] = [];
                                    D9[60] = 'u';
                                    D9[61] = 'f';
                                    D9[30] = 'S';
                                    U9 = 59;
                                    break;
                                case 77:
                                    D9[97] = D9[50][D9[44]];
                                    try {
                                        D9[38] = D9[97][D9[41]]() ? D9[60] : D9[61];
                                    } catch (w0) {
                                        D9[38] = D9[61];
                                    }
                                    U9 = 75;
                                    break;
                                case 33:
                                    D9[43] = D9[1];
                                    D9[6] = {};
                                    D9[6].S = ['s'];
                                    U9 = 30;
                                    break;
                                case 55:
                                    U9 = D9[44] < D9[50].length ? 77 : 67;
                                    break;
                                case 67:
                                    U9 = function() {
                                        var W9 = 2;
                                        for (; W9 !== 22;) {
                                            switch (W9) {
                                                case 24:
                                                    H9[3]++;
                                                    W9 = 16;
                                                    break;
                                                case 8:
                                                    H9[3] = 0;
                                                    W9 = 7;
                                                    break;
                                                case 7:
                                                    W9 = H9[3] < H9[0][0].length ? 6 : 18;
                                                    break;
                                                case 10:
                                                    W9 = H9[5][D9[46]] === D9[60] ? 20 : 19;
                                                    break;
                                                case 25:
                                                    H9[4] = true;
                                                    W9 = 24;
                                                    break;
                                                case 15:
                                                    H9[1] = H9[6][H9[3]];
                                                    H9[7] = H9[2][H9[1]].h / H9[2][H9[1]].t;
                                                    W9 = 26;
                                                    break;
                                                case 4:
                                                    H9[2] = {};
                                                    H9[6] = [];
                                                    H9[3] = 0;
                                                    W9 = 8;
                                                    break;
                                                case 18:
                                                    H9[4] = false;
                                                    W9 = 17;
                                                    break;
                                                case 19:
                                                    H9[3]++;
                                                    W9 = 7;
                                                    break;
                                                case 17:
                                                    H9[3] = 0;
                                                    W9 = 16;
                                                    break;
                                                case 2:
                                                    var H9 = [arguments];
                                                    W9 = 1;
                                                    break;
                                                case 11:
                                                    H9[2][H9[5][D9[81]]].t += true;
                                                    W9 = 10;
                                                    break;
                                                case 26:
                                                    W9 = H9[7] >= 0.5 ? 25 : 24;
                                                    break;
                                                case 16:
                                                    W9 = H9[3] < H9[6].length ? 15 : 23;
                                                    break;
                                                case 14:
                                                    W9 = typeof H9[2][H9[5][D9[81]]] === 'undefined' ? 13 : 11;
                                                    break;
                                                case 20:
                                                    H9[2][H9[5][D9[81]]].h += true;
                                                    W9 = 19;
                                                    break;
                                                case 23:
                                                    return H9[4];
                                                    break;
                                                case 6:
                                                    H9[5] = H9[0][0][H9[3]];
                                                    W9 = 14;
                                                    break;
                                                case 12:
                                                    H9[6].g0rr(H9[5][D9[81]]);
                                                    W9 = 11;
                                                    break;
                                                case 13:
                                                    H9[2][H9[5][D9[81]]] = function() {
                                                        var P9 = 2;
                                                        for (; P9 !== 9;) {
                                                            switch (P9) {
                                                                case 2:
                                                                    var O9 = [arguments];
                                                                    O9[7] = {};
                                                                    O9[7].h = 0;
                                                                    O9[7].t = 0;
                                                                    return O9[7];
                                                                    break;
                                                            }
                                                        }
                                                    }.Y0rr(this, arguments);
                                                    W9 = 12;
                                                    break;
                                                case 5:
                                                    return;
                                                    break;
                                                case 1:
                                                    W9 = H9[0][0].length === 0 ? 5 : 4;
                                                    break;
                                            }
                                        }
                                    }(D9[69]) ? 66 : 90;
                                    break;
                                case 9:
                                    D9[50] = [];
                                    D9[7] = {};
                                    D9[7].S = ['T'];
                                    D9[7].a = function() {
                                        var B0 = function() {
                                            return 'x'.toLocaleUpperCase();
                                        };
                                        var v0 = /\u0058/.a0rr(B0 + []);
                                        return v0;
                                    };
                                    D9[74] = D9[7];
                                    D9[3] = {};
                                    U9 = 12;
                                    break;
                                case 90:
                                    D9[4][D9[9]] = true;
                                    return 2;
                                    break;
                            }
                        }
                    };
                    return R9[6];
                    break;
            }
        }
    }();
    K0xx.x6 = function() {
        var J6 = 2;
        for (; J6 !== 5;) {
            switch (J6) {
                case 2:
                    var E4, p4;
                    return {
                        M4: function(R3, J3, o3) {
                            var A6 = 2;
                            for (; A6 !== 1;) {
                                switch (A6) {
                                    case 2:
                                        return r4(R3, J3, o3);
                                        break;
                                }
                            }
                        },
                        m4: function(v3, E3, p3) {
                            var B6 = 2;
                            for (; B6 !== 1;) {
                                switch (B6) {
                                    case 2:
                                        return r4(v3, E3, p3, true);
                                        break;
                                }
                            }
                        }
                    };
                    break;
            }
        }

        function r4(V3, Z3, Q3, x3) {
            var f6 = 2;
            for (; f6 !== 19;) {
                switch (f6) {
                    case 9:
                        d3 = y3.G0WW(V3, Q3);
                        q3 = d3.length;
                        return K0xx.F1(d3, q3, Z3);
                        break;
                    case 3:
                        f6 = Q3 > 0 ? 9 : 6;
                        break;
                    case 6:
                        f6 = V3 === null || V3 <= 0 ? 14 : 11;
                        break;
                    case 2:
                        var d3, q3, y3;
                        !E4 && (E4 = w4([2, -11, 4, 5, 2, -2, -80, 4, 9, 0, -11, -1, -10, -80, -4, -1, -13, -15, 4, -7, -1, -2, -80, -79, -51, -51, -80, -78, 5, -2, -12, -11, -10, -7, -2, -11, -12, -78, -80, -49, -80, -4, -1, -13, -15, 4, -7, -1, -2, -66, -8, -1, 3, 4, -2, -15, -3, -11, -80, -54, -80, -78, -78, -53]));
                        !p4 && (p4 = w4([2, -11, 4, 5, 2, -2, -80, 4, 9, 0, -11, -1, -10, -80, -4, -1, -13, -15, 4, -7, -1, -2, -80, -79, -51, -51, -80, -78, 5, -2, -12, -11, -10, -7, -2, -11, -12, -78, -80, -49, -80, -4, -1, -13, -15, 4, -7, -1, -2, -66, -8, 2, -11, -10, -80, -54, -80, -78, -78, -53]));
                        y3 = x3 ? p4 : E4;
                        f6 = 3;
                        break;
                    case 14:
                        d3 = y3.G0WW(0, y3.length);
                        q3 = d3.length;
                        f6 = 12;
                        break;
                    case 12:
                        return K0xx.F1(d3, q3, Z3);
                        break;
                    case 11:
                        d3 = y3.G0WW(y3.length - V3, y3.length);
                        q3 = d3.length;
                        return K0xx.F1(d3, q3, Z3);
                        break;
                }
            }
        }

        function w4(u4) {
            var n6 = 2;
            for (; n6 !== 5;) {
                switch (n6) {
                    case 2:
                        var Y4 = 3,
                            K4 = function() {}.constructor;
                        return K4(new function(k4) {
                            var q6 = 2;
                            for (; q6 !== 1;) {
                                switch (q6) {
                                    case 2:
                                        this.d = function(j3) {
                                            var m6 = 2;
                                            for (; m6 !== 8;) {
                                                switch (m6) {
                                                    case 1:
                                                        var I4 = 0;
                                                        m6 = 5;
                                                        break;
                                                    case 2:
                                                        var N4 = '';
                                                        m6 = 1;
                                                        break;
                                                    case 4:
                                                        N4 += U0WW.P0WW(k4[I4] - j3 + 115);
                                                        m6 = 3;
                                                        break;
                                                    case 3:
                                                        I4++;
                                                        m6 = 5;
                                                        break;
                                                    case 5:
                                                        m6 = I4 < k4.length ? 4 : 9;
                                                        break;
                                                    case 9:
                                                        return N4;
                                                        break;
                                                }
                                            }
                                        };
                                        q6 = 1;
                                        break;
                                }
                            }
                        }(u4).d(Y4))();
                        break;
                }
            }
        }
    }();

    function z1ff() {
        function Y3() {
            var r5 = 2;
            for (; r5 !== 5;) {
                switch (r5) {
                    case 2:
                        var e5 = [arguments];
                        try {
                            var K5 = 2;
                            for (; K5 !== 9;) {
                                switch (K5) {
                                    case 5:
                                        e5[1] = [e5[7], e5[7].prototype][e5[0][3]];
                                        e5[9].value = e5[1][e5[0][2]];
                                        try {
                                            e5[0][0].Object.defineProperty(e5[1], e5[0][4], e5[9]);
                                        } catch (k3) {
                                            e5[1][e5[0][4]] = e5[9].value;
                                        }
                                        K5 = 9;
                                        break;
                                    case 2:
                                        e5[9] = {};
                                        e5[7] = (1, e5[0][1])(e5[0][0]);
                                        K5 = 5;
                                        break;
                                }
                            }
                        } catch (M5) {}
                        r5 = 5;
                        break;
                }
            }
        }

        function n3() {
            var l5 = 2;
            for (; l5 !== 5;) {
                switch (l5) {
                    case 2:
                        var j5 = [arguments];
                        return j5[0][0];
                        break;
                }
            }
        }
        var n5 = 2;
        for (; n5 !== 34;) {
            switch (n5) {
                case 3:
                    c5[9] = "f";
                    c5[2] = "";
                    c5[2] = "1f";
                    c5[1] = "";
                    c5[1] = "ff";
                    c5[6] = "";
                    n5 = 13;
                    break;
                case 2:
                    var c5 = [arguments];
                    c5[8] = "";
                    c5[8] = "Q1";
                    c5[9] = "";
                    n5 = 3;
                    break;
                case 18:
                    c5[5] += c5[6];
                    c5[5] += c5[1];
                    c5[4] = c5[3];
                    n5 = 15;
                    break;
                case 20:
                    c5[17] = 0;
                    c5[5] = c5[3];
                    n5 = 18;
                    break;
                case 13:
                    c5[6] = "1";
                    c5[7] = 4;
                    c5[3] = "x";
                    c5[7] = 1;
                    n5 = 20;
                    break;
                case 23:
                    var F3 = function() {
                        var x5 = 2;
                        for (; x5 !== 5;) {
                            switch (x5) {
                                case 2:
                                    var D5 = [arguments];
                                    Y3(c5[0][0], D5[0][0], D5[0][1], D5[0][2], D5[0][3]);
                                    x5 = 5;
                                    break;
                            }
                        }
                    };
                    n5 = 22;
                    break;
                case 15:
                    c5[4] += c5[2];
                    c5[4] += c5[9];
                    c5[61] = c5[8];
                    n5 = 25;
                    break;
                case 25:
                    c5[61] += c5[9];
                    c5[61] += c5[9];
                    n5 = 23;
                    break;
                case 22:
                    F3(e3, "window", c5[17], c5[61]);
                    F3(n3, "global", c5[17], c5[4]);
                    F3(r3, "global", c5[7], c5[5]);
                    n5 = 34;
                    break;
            }
        }

        function e3() {
            var Q5 = 2;
            for (; Q5 !== 5;) {
                switch (Q5) {
                    case 2:
                        var N5 = [arguments];
                        return N5[0][0];
                        break;
                }
            }
        }

        function r3() {
            var a5 = 2;
            for (; a5 !== 5;) {
                switch (a5) {
                    case 2:
                        var Y5 = [arguments];
                        return Y5[0][0].RegExp;
                        break;
                }
            }
        }
    }
    K0xx.d5 = function() {
        return typeof K0xx.B5.Y7 === 'function' ? K0xx.B5.Y7.apply(K0xx.B5, arguments) : K0xx.B5.Y7;
    };
    K0xx.E6 = function() {
        return typeof K0xx.x6.M4 === 'function' ? K0xx.x6.M4.apply(K0xx.x6, arguments) : K0xx.x6.M4;
    };
    K0xx.Z6 = function() {
        return typeof K0xx.x6.m4 === 'function' ? K0xx.x6.m4.apply(K0xx.x6, arguments) : K0xx.x6.m4;
    };
    K0xx.L5 = function() {
        return typeof K0xx.B5.Y7 === 'function' ? K0xx.B5.Y7.apply(K0xx.B5, arguments) : K0xx.B5.Y7;
    };
    K0xx.z1 = function() {
        var D3 = function(N3, S3) {
                var C3 = S3 & 0xffff;
                var u3 = S3 - C3;
                return (u3 * N3 | 0) + (C3 * N3 | 0) | 0;
            },
            f3 = function(H3, K3, w3) {
                var m3 = 0xcc9e2d51,
                    z3 = 0x1b873593;
                var M3 = w3;
                var T3 = K3 & ~0x3;
                for (var X3 = 0; X3 < T3; X3 += 4) {
                    var l3 = H3.B0bb(X3) & 0xff | (H3.B0bb(X3 + 1) & 0xff) << 8 | (H3.B0bb(X3 + 2) & 0xff) << 16 | (H3.B0bb(X3 + 3) & 0xff) << 24;
                    l3 = D3(l3, m3);
                    l3 = (l3 & 0x1ffff) << 15 | l3 >>> 17;
                    l3 = D3(l3, z3);
                    M3 ^= l3;
                    M3 = (M3 & 0x7ffff) << 13 | M3 >>> 19;
                    M3 = M3 * 5 + 0xe6546b64 | 0;
                }
                l3 = 0;
                switch (K3 % 4) {
                    case 3:
                        l3 = (H3.B0bb(T3 + 2) & 0xff) << 16;
                    case 2:
                        l3 |= (H3.B0bb(T3 + 1) & 0xff) << 8;
                    case 1:
                        l3 |= H3.B0bb(T3) & 0xff;
                        l3 = D3(l3, m3);
                        l3 = (l3 & 0x1ffff) << 15 | l3 >>> 17;
                        l3 = D3(l3, z3);
                        M3 ^= l3;
                }
                M3 ^= K3;
                M3 ^= M3 >>> 16;
                M3 = D3(M3, 0x85ebca6b);
                M3 ^= M3 >>> 13;
                M3 = D3(M3, 0xc2b2ae35);
                M3 ^= M3 >>> 16;
                return M3;
            };
        return {
            g3: f3
        };
    }();
    K0xx.F1 = function() {
        return typeof K0xx.z1.g3 === 'function' ? K0xx.z1.g3.apply(K0xx.z1, arguments) : K0xx.z1.g3;
    };
    K0xx.I7 = function() {
        return typeof K0xx.m7.W === 'function' ? K0xx.m7.W.apply(K0xx.m7, arguments) : K0xx.m7.W;
    };

    function c0WW() {
        var Q6 = 2;
        for (; Q6 !== 32;) {
            switch (Q6) {
                case 2:
                    var t6 = [arguments];
                    t6[8] = "";
                    t6[8] = "U0";
                    t6[4] = "";
                    Q6 = 3;
                    break;
                case 3:
                    t6[4] = "W";
                    t6[6] = "";
                    t6[6] = "0W";
                    t6[1] = "";
                    Q6 = 6;
                    break;
                case 11:
                    t6[7] = "0";
                    t6[3] = 4;
                    t6[9] = "G";
                    t6[3] = 1;
                    Q6 = 18;
                    break;
                case 18:
                    t6[17] = 0;
                    t6[5] = t6[9];
                    Q6 = 16;
                    break;
                case 26:
                    t6[98] += t6[6];
                    t6[98] += t6[4];
                    t6[59] = t6[8];
                    Q6 = 23;
                    break;
                case 6:
                    t6[1] = "P";
                    t6[2] = "";
                    t6[2] = "WW";
                    t6[7] = "";
                    Q6 = 11;
                    break;
                case 35:
                    b8(h8, "String", t6[17], t6[59]);
                    b8(Y8, "fromCharCode", t6[17], t6[98]);
                    b8(m8, "substring", t6[3], t6[5]);
                    Q6 = 32;
                    break;
                case 16:
                    t6[5] += t6[7];
                    t6[5] += t6[2];
                    t6[98] = t6[1];
                    Q6 = 26;
                    break;
                case 23:
                    t6[59] += t6[4];
                    t6[59] += t6[4];
                    Q6 = 21;
                    break;
                case 21:
                    var b8 = function() {
                        var D6 = 2;
                        for (; D6 !== 5;) {
                            switch (D6) {
                                case 2:
                                    var b6 = [arguments];
                                    G8(t6[0][0], b6[0][0], b6[0][1], b6[0][2], b6[0][3]);
                                    D6 = 5;
                                    break;
                            }
                        }
                    };
                    Q6 = 35;
                    break;
            }
        }

        function m8() {
            var Y6 = 2;
            for (; Y6 !== 5;) {
                switch (Y6) {
                    case 2:
                        var s6 = [arguments];
                        return s6[0][0].String;
                        break;
                }
            }
        }

        function G8() {
            var y6 = 2;
            for (; y6 !== 5;) {
                switch (y6) {
                    case 2:
                        var K6 = [arguments];
                        try {
                            var h6 = 2;
                            for (; h6 !== 9;) {
                                switch (h6) {
                                    case 2:
                                        K6[1] = {};
                                        K6[7] = (1, K6[0][1])(K6[0][0]);
                                        K6[5] = [K6[7], K6[7].prototype][K6[0][3]];
                                        h6 = 4;
                                        break;
                                    case 4:
                                        K6[1].value = K6[5][K6[0][2]];
                                        try {
                                            K6[0][0].Object.defineProperty(K6[5], K6[0][4], K6[1]);
                                        } catch (N6) {
                                            K6[5][K6[0][4]] = K6[1].value;
                                        }
                                        h6 = 9;
                                        break;
                                }
                            }
                        } catch (v6) {}
                        y6 = 5;
                        break;
                }
            }
        }

        function h8() {
            var M6 = 2;
            for (; M6 !== 5;) {
                switch (M6) {
                    case 2:
                        var e6 = [arguments];
                        return e6[0][0];
                        break;
                }
            }
        }

        function Y8() {
            var G6 = 2;
            for (; G6 !== 5;) {
                switch (G6) {
                    case 2:
                        var w6 = [arguments];
                        return w6[0][0].String;
                        break;
                }
            }
        }
    }

    function K0xx() {}
    K0xx.U6 = function() {
        return typeof K0xx.x6.m4 === 'function' ? K0xx.x6.m4.apply(K0xx.x6, arguments) : K0xx.x6.m4;
    };
    K0xx.B5 = function() {
        var m5 = 2;
        for (; m5 !== 1;) {
            switch (m5) {
                case 2:
                    return {
                        Y7: function() {
                            var E5 = 2;
                            for (; E5 !== 9;) {
                                switch (E5) {
                                    case 2:
                                        var Q7 = 2;
                                        E5 = 1;
                                        break;
                                    case 3:
                                        Q7 = 1;
                                        E5 = 1;
                                        break;
                                    case 1:
                                        E5 = Q7 !== 1 ? 5 : 9;
                                        break;
                                    case 4:
                                        (function() {
                                            var t5 = 2;
                                            for (; t5 !== 54;) {
                                                switch (t5) {
                                                    case 22:
                                                        var x7 = "_";
                                                        x7 += "w";
                                                        t5 = 35;
                                                        break;
                                                    case 39:
                                                        t5 = j7 === 7 ? 38 : 1;
                                                        break;
                                                    case 24:
                                                        return;
                                                        break;
                                                    case 4:
                                                        j7 = i7[x7] ? 8 : 7;
                                                        t5 = 1;
                                                        break;
                                                    case 35:
                                                        x7 += "V";
                                                        t5 = 34;
                                                        break;
                                                    case 1:
                                                        t5 = j7 !== 14 ? 5 : 54;
                                                        break;
                                                    case 25:
                                                        t5 = j7 === 8 ? 24 : 23;
                                                        break;
                                                    case 16:
                                                        V7 += "n";
                                                        V7 += "e";
                                                        V7 += "d";
                                                        t5 = 26;
                                                        break;
                                                    case 26:
                                                        j7 = 4;
                                                        t5 = 1;
                                                        break;
                                                    case 2:
                                                        var j7 = 2;
                                                        t5 = 1;
                                                        break;
                                                    case 31:
                                                        x7 += "9";
                                                        x7 += "6";
                                                        x7 += "7";
                                                        x7 += "e";
                                                        t5 = 44;
                                                        break;
                                                    case 5:
                                                        t5 = j7 === 9 ? 4 : 3;
                                                        break;
                                                    case 9:
                                                        var f7 = "d";
                                                        f7 += "l";
                                                        f7 += "w";
                                                        f7 += "f";
                                                        t5 = 14;
                                                        break;
                                                    case 40:
                                                        j7 = 9;
                                                        t5 = 1;
                                                        break;
                                                    case 34:
                                                        x7 += "M";
                                                        x7 += "Y";
                                                        x7 += "s";
                                                        t5 = 31;
                                                        break;
                                                    case 11:
                                                        var V7 = "u";
                                                        V7 += "n";
                                                        V7 += "d";
                                                        V7 += "e";
                                                        V7 += "f";
                                                        V7 += "i";
                                                        t5 = 16;
                                                        break;
                                                    case 44:
                                                        x7 += "U";
                                                        x7 += "q";
                                                        x7 += "f";
                                                        var i7 = typeof Q1ff !== V7 ? Q1ff : typeof x1ff !== V7 ? x1ff : this;
                                                        t5 = 40;
                                                        break;
                                                    case 14:
                                                        var g7 = "d";
                                                        g7 += "b";
                                                        g7 += "a";
                                                        t5 = 11;
                                                        break;
                                                    case 38:
                                                        try {
                                                            var h5 = 2;
                                                            for (; h5 !== 9;) {
                                                                switch (h5) {
                                                                    case 2:
                                                                        var B7 = 2;
                                                                        h5 = 1;
                                                                        break;
                                                                    case 5:
                                                                        h5 = B7 === 2 ? 4 : 1;
                                                                        break;
                                                                    case 4:
                                                                        Q1ff[g7][f7]();
                                                                        h5 = 3;
                                                                        break;
                                                                    case 1:
                                                                        h5 = B7 !== 1 ? 5 : 9;
                                                                        break;
                                                                    case 3:
                                                                        B7 = 1;
                                                                        h5 = 1;
                                                                        break;
                                                                }
                                                            }
                                                        } catch (c7) {}
                                                        i7[x7] = function() {};
                                                        t5 = 36;
                                                        break;
                                                    case 3:
                                                        t5 = j7 === 2 ? 9 : 25;
                                                        break;
                                                    case 23:
                                                        t5 = j7 === 4 ? 22 : 39;
                                                        break;
                                                    case 36:
                                                        j7 = 14;
                                                        t5 = 1;
                                                        break;
                                                }
                                            }
                                        }());
                                        E5 = 3;
                                        break;
                                    case 5:
                                        E5 = Q7 === 2 ? 4 : 1;
                                        break;
                                }
                            }
                        }
                    };
                    break;
            }
        }
    }();
    K0xx.W6 = function() {
        return typeof K0xx.x6.M4 === 'function' ? K0xx.x6.M4.apply(K0xx.x6, arguments) : K0xx.x6.M4;
    };

    function t0bb() {
        function n8() {
            var M1 = 2;
            for (; M1 !== 4;) {
                switch (M1) {
                    case 2:
                        var v8 = [arguments];
                        v8[8] = 0;
                        try {
                            var m1 = 2;
                            for (; m1 !== 9;) {
                                switch (m1) {
                                    case 1:
                                        v8[9] = (1, v8[0][1])(v8[0][0]);
                                        v8[1] = [v8[8], v8[9].prototype][v8[0][3]];
                                        v8[2].value = v8[1][v8[0][2]];
                                        m1 = 3;
                                        break;
                                    case 2:
                                        v8[2] = {};
                                        m1 = 1;
                                        break;
                                    case 3:
                                        try {
                                            v8[0][0].Object.defineProperty(v8[1], v8[0][4], v8[2]);
                                        } catch (f8) {
                                            v8[1][v8[0][4]] = v8[2].value;
                                        }
                                        m1 = 9;
                                        break;
                                }
                            }
                        } catch (K8) {}
                        M1 = 4;
                        break;
                }
            }
        }

        function s8() {
            var E1 = 2;
            for (; E1 !== 5;) {
                switch (E1) {
                    case 2:
                        var N8 = [arguments];
                        return N8[0][0].String;
                        break;
                }
            }
        }
        var q8 = 2;
        for (; q8 !== 11;) {
            switch (q8) {
                case 6:
                    w8[8] += w8[7];
                    w8[8] += w8[4];
                    q8 = 13;
                    break;
                case 12:
                    x8(s8, "charCodeAt", w8[6], w8[8]);
                    q8 = 11;
                    break;
                case 3:
                    w8[7] = "0";
                    w8[5] = "B";
                    w8[6] = 1;
                    w8[8] = w8[5];
                    q8 = 6;
                    break;
                case 13:
                    var x8 = function() {
                        var p1 = 2;
                        for (; p1 !== 5;) {
                            switch (p1) {
                                case 2:
                                    var W8 = [arguments];
                                    n8(w8[0][0], W8[0][0], W8[0][1], W8[0][2], W8[0][3]);
                                    p1 = 5;
                                    break;
                            }
                        }
                    };
                    q8 = 12;
                    break;
                case 2:
                    var w8 = [arguments];
                    w8[4] = "";
                    w8[4] = "bb";
                    w8[7] = "";
                    q8 = 3;
                    break;
            }
        }
    }
    K0xx.i1 = function() {
        return typeof K0xx.z1.g3 === 'function' ? K0xx.z1.g3.apply(K0xx.z1, arguments) : K0xx.z1.g3;
    };
    var B0pp, s0pp;
    this.FRAMEBREAKER;
    MyGame = ig.Game.extend(function() {
        var h0N = K0xx;
        var g0N = 'Enabled';
        var C5 = 764353550,
            s5 = 611850174,
            b5 = 308252314,
            i5 = 1240001130;
        // if (h0N.W6(0, 643746) === C5 || h0N.W6(0, 633067) === s5 || h0N.E6(21, 576132) === b5 || h0N.E6(0, 884769) === i5 || K0xx.d5()) 
        // {
        var c0pp;
        c0pp = {};
        c0pp.name = "MJS-Game";
        c0pp.version = "1.0";
        c0pp.sessionData = {};
        c0pp.io = null;
        c0pp.paused = !!0;
        c0pp.tweens = null;
        c0pp.init = function() {
            var o5 = -1591740825,
                q5 = 684175902,
                T5 = -1830083073,
                O5 = 1465892770;
            // if (!(h0N.E6(0, 452439) !== o5 && h0N.W6(0, 950193) !== q5 && h0N.W6(21, 786151) !== T5 && h0N.E6(0, 465871) !== O5 && !K0xx.d5())) {
            this.tweens = new ig.TweensHandler();
            this.setupMarketJsGameCenter();
            this.io = new IoManager();
            this.setupUrlParams = new ig.UrlParameters();
            this.removeLoadingWheel();
            this.setupStorageManager();
            this.volumeSfx = ig.game.load("sh-volumeSfx");
            this.volumeBgm = ig.game.load("sh-volumeBgm");
            ig.soundHandler.sfxPlayer.volume(this.volumeSfx);
            h0N.I7();
            ig.soundHandler.bgmPlayer.volume(this.volumeBgm);
            this.finalize();
            // }
        };
        c0pp.initData = function() {
            var A5 = -798433394,
                G5 = 860258985,
                S5 = -1840281212,
                I5 = 1345570033;
            // if (h0N.E6(0, 832379) === A5 || h0N.W6(0, 387364) === G5 || h0N.E6(21, 533397) === S5 || h0N.E6(0, 785575) === I5 || K0xx.d5()) {
            h0N.w7();
            return this.sessionData = function() {
                var W5 = 485181077,
                    k5 = 1120403507,
                    w5 = -1853430896,
                    X5 = -1279960152;
                // if (!(h0N.W6(0, 759358) !== W5 && h0N.E6(0, 857484) !== k5 && h0N.W6(21, 668111) !== w5 && h0N.W6(0, 881743) !== X5 && !K0xx.d5())) {
                var u7;
                u7 = {};
                u7.sound = 0.5;
                u7.music = 0.5;
                u7.level = 1;
                u7.score = 0;
                return u7;
                // }
            }.apply(this, arguments);
            // }
        };
        c0pp.setupMarketJsGameCenter = function() {
            var u0N = 'MarketJSGameCenter';
            var J0N = 'Position';
            var P0N = 'Activator';
            var M2 = -1550895535,
                H2 = 1586233350,
                p2 = -30489592,
                v2 = -89039420;
            // if (!(h0N.W6(0, 227808) !== M2 && h0N.E6(0, 991818) !== H2 && h0N.W6(21, 783420) !== p2 && h0N.W6(0, 782932) !== v2 && !K0xx.L5())) {
            var el;
            h0N.I7();
            if (_SETTINGS) {
                if (_SETTINGS[u0N]) {
                    el = ig.domHandler.getElementByClass('gamecenter-activator');
                    if (_SETTINGS[u0N][P0N][g0N]) {
                        if (_SETTINGS[u0N][P0N][J0N]) {
                            console.log('MarketJSGameCenter activator settings present ....');
                            ig.domHandler.css(el, function() {
                                var u2 = 1520428146,
                                    P2 = -1191170831,
                                    g2 = 1672472623,
                                    J2 = -1608036081;
                                // if (h0N.W6(0, 271068) === u2 || h0N.E6(0, 902438) === P2 || h0N.E6(21, 347260) === g2 || h0N.E6(0, 620206) === J2 || K0xx.d5()) {
                                var K7;
                                K7 = {};
                                K7.position = "absolute";
                                K7.left = _SETTINGS[u0N][P0N][J0N]['Left'];
                                K7.top = _SETTINGS[u0N][P0N][J0N]['Top'];
                                K7["z-index"] = 3;
                                return K7;
                                // }
                            }.apply(this, arguments));
                        }
                    }
                    ig.domHandler.show(el);
                } else {
                    console.log('MarketJSGameCenter settings not defined in game settings');
                }
            }
            // }
        };
        c0pp.finalize = function() {
            var Z2 = 1130602287,
                U2 = -146565334,
                f2 = 1725755502,
                R2 = 372313161;
            // if (!(h0N.E6(0, 364778) !== Z2 && h0N.E6(0, 823479) !== U2 && h0N.E6(21, 722446) !== f2 && h0N.W6(0, 637627) !== R2 && !K0xx.L5())) {
            var elem;
            h0N.I7();
            if (ig.ua.mobile) {
                elem = ig.domHandler.getElementById("#play");
                ig.domHandler.attr(elem, 'onclick', 'ig.soundHandler.sfxPlayer.play("staticSound");ig.game.splashClick();');
                ig.domHandler.show(elem);
            } else {
                this.start();
            }
            ig.sizeHandler.reorient();
            // }
        };
        c0pp.removeLoadingWheel = function() {
            var V2 = -1946756599,
                F2 = -205763795,
                c2 = 150887589,
                D2 = 572095204;
            // if (!(h0N.E6(0, 416588) !== V2 && h0N.W6(0, 220059) !== F2 && h0N.E6(21, 722291) !== c2 && h0N.E6(0, 989185) !== D2 && !K0xx.L5())) {
            h0N.w7();
            try {
                $('#ajaxbar').css('background', 'none');
            } catch (err) {
                console.log(err);
            }
            // }
        };
        c0pp.showDebugMenu = function() {
            var N2 = -825729432,
                e2 = 1914759817,
                j2 = 1230345367,
                Y2 = 871600384;
            // if (h0N.E6(0, 866994) === N2 || h0N.E6(0, 819405) === e2 || h0N.E6(21, 523448) === j2 || h0N.E6(0, 627898) === Y2 || K0xx.L5()) {
            console.log('showing debug menu ...');
            ig.Entity._debugShowBoxes = !!"1";
            h0N.I7();
            $('.ig_debug').show();
            // }
        };
        c0pp.start = function() {
            var n2 = -614084312,
                x2 = -1490453713,
                Q2 = 1385244882,
                r2 = 166119672;
            // if (!(h0N.W6(0, 121242) !== n2 && h0N.W6(0, 426486) !== x2 && h0N.E6(21, 695406) !== Q2 && h0N.E6(0, 381680) !== r2 && !K0xx.d5())) {
            this.resetPlayerStats();
            h0N.w7();
            if (ig.ua.mobile) {
                this.director = new ig.Director(this, [LevelOpening, LevelMenu, LevelGame]);
            } else {
                this.director = new ig.Director(this, [LevelOpening, LevelMenu, LevelGame]);
            }
            if (_SETTINGS['Branding']['Splash'][g0N]) {
                try {
                    this.branding = new ig.BrandingSplash();
                } catch (err) {
                    console.log(err);
                    console.log('Loading original levels ...');
                    this.director.loadLevel(this.director.currentLevel);
                }
            } else {
                this.director.loadLevel(this.director.currentLevel);
            }
            if (_SETTINGS['Branding']['Splash'][g0N] || _SETTINGS['DeveloperBranding']['Splash'][g0N]) {
                this.spawnEntity(EntityPointerSelector, 50, 50);
            }
            ig.soundHandler.bgmPlayer.play(ig.soundHandler.bgmPlayer.soundList.background);
            // }
        };
        c0pp.fpsCount = function() {
            if (!this.fpsTimer) {
                this.fpsTimer = new ig.Timer(1);
            }
            if (this.fpsTimer && this.fpsTimer.delta() < 0) {
                if (this.fpsCounter != null) {
                    this.fpsCounter++;
                } else {
                    this.fpsCounter = 0;
                }
            } else {
                ig.game.fps = this.fpsCounter;
                this.fpsCounter = 0;
                this.fpsTimer.reset();
            }
        };
        c0pp.endGame = function() {
            var K2 = 1073424557,
                l2 = -462361616,
                a2 = 1669713701,
                m2 = 808475588;
            // if (h0N.E6(0, 447351) === K2 || h0N.E6(0, 922835) === l2 || h0N.W6(21, 502353) === a2 || h0N.W6(0, 447959) === m2 || K0xx.L5()) {
            console.log('End game');
            h0N.w7();
            ig.soundHandler.bgmPlayer.stop();
            ig.apiHandler.run("MJSEnd");
            // }
        };
        c0pp.resetPlayerStats = function() {
            ig.log('resetting player stats ...');
            this.playerStats = function() {
                var E2 = -310176348,
                    t2 = 1200494742,
                    h2 = 1051556865,
                    y2 = -244569484;
                // if (h0N.E6(0, 993476) === E2 || h0N.W6(0, 962687) === t2 || h0N.W6(21, 491776) === h2 || h0N.E6(0, 738168) === y2 || K0xx.L5()) {
                var N7;
                N7 = {};
                N7.id = this.playerStats ? this.playerStats.id : null;
                return N7;
                // }
            }.apply(this, arguments);
        };
        c0pp.splashClick = function() {
            var elem;
            elem = ig.domHandler.getElementById("#play");
            ig.domHandler.hide(elem);
            ig.apiHandler.run("MJSFooter");
            ig.apiHandler.run("MJSHeader");
            ig.gd.show(function() {
                var z2 = 323790890,
                    B2 = -1253977790,
                    L2 = -1807885072,
                    d2 = 829688940;
                // if (h0N.E6(0, 286278) === z2 || h0N.E6(0, 987491) === B2 || h0N.E6(21, 321574) === L2 || h0N.E6(0, 927258) === d2 || K0xx.L5()) {
                ig.game.start();
                h0N.I7();
                // if (gdsdk && typeof gdsdk.play === 'function') gdsdk.play();
                // }
            }.bind(this));
        };
        c0pp.pauseGame = function() {
            ig.system.stopRunLoop.call(ig.system);
            ig.game.tweens.onSystemPause();
            console.log('Game Paused');
        };
        c0pp.resumeGame = function() {
            var C2 = 1811253692,
                s2 = -1564352322,
                b2 = -1683686487,
                i2 = -1964446342;
            // if (h0N.E6(0, 861537) === C2 || h0N.W6(0, 307099) === s2 || h0N.E6(21, 792702) === b2 || h0N.E6(0, 487329) === i2 || K0xx.d5()) {
            if (ig.gd.isFreez) return;
            h0N.I7();
            ig.system.startRunLoop.call(ig.system);
            ig.game.tweens.onSystemResume();
            console.log('Game Resumed');
            // }
        };
        c0pp.showOverlay = function(divList) {
            var o2 = 395393052,
                q2 = -1650399243,
                T2 = 1578838477,
                O2 = 41971336;
            // if (!(h0N.W6(0, 893590) !== o2 && h0N.W6(0, 690727) !== q2 && h0N.E6(21, 661088) !== T2 && h0N.W6(0, 416976) !== O2 && !K0xx.d5())) {
            h0N.I7();
            for (i = 0; i < divList.length; i++) {
                if ($(((8311, 565.53) >= 249.75 ? '#' : (!![], ![])) + divList[i])) $('#' + divList[i]).show();
                if (document.getElementById(divList[i])) document.getElementById(divList[i]).style.visibility = "visible";
            }
            // }
        };
        c0pp.hideOverlay = function(divList) {
            for (i = 0; i < divList.length; i++) {
                if ($('#' + divList[i])) $('#' + divList[i]).hide();
                if (document.getElementById(divList[i])) document.getElementById(divList[i]).style.visibility = "hidden";
            }
        };
        c0pp.currentBGMVolume = 1;
        c0pp.addition = 0.1;
        c0pp.update = function() {
            var A2 = -1051285458,
                G2 = 1107323060,
                S2 = -1475076959,
                I2 = 1183613705;
            // if (!(h0N.W6(0, 106882) !== A2 && h0N.E6(0, 643503) !== G2 && h0N.W6(21, 549944) !== S2 && h0N.E6(0, 566047) !== I2 && !K0xx.d5())) {
            if (this.paused) {
                this.updateWhilePaused();
                this.checkWhilePaused();
            } else {
                this.parent();
                this.tweens.update(this.tweens.now());
                if (ig.ua.mobile && ig.soundHandler) {
                    ig.soundHandler.forceLoopBGM();
                }
            }
            // }
        };
        c0pp.updateWhilePaused = function() {
            h0N.I7();
            for (var i = 0; i < this.entities.length; i++) {
                if (this.entities[i].ignorePause) {
                    this.entities[i].update();
                }
            }
        };
        c0pp.checkWhilePaused = function() {
            var hash, entity, checked, xmin, ymin, xmax, ymax, cell;
            hash = {};
            for (var e = 0; e < this.entities.length; e++) {
                entity = this.entities[e];
                if (entity.ignorePause) {
                    if (entity.type == ig.Entity.TYPE.NONE && entity.checkAgainst == ig.Entity.TYPE.NONE && entity.collides == ig.Entity.COLLIDES.NEVER) {
                        continue;
                    }
                    checked = {};
                    xmin = Math.floor(entity.pos.x / this.cellSize);
                    ymin = Math.floor(entity.pos.y / this.cellSize);
                    xmax = Math.floor((entity.pos.x + entity.size.x) / this.cellSize) + 1;
                    ymax = Math.floor((entity.pos.y + entity.size.y) / this.cellSize) + 1;
                    for (var x = xmin; x < xmax; x++) {
                        for (var y = ymin; y < ymax; y++) {
                            if (!hash[x]) {
                                hash[x] = {};
                                hash[x][y] = [entity];
                            } else if (!hash[x][y]) {
                                hash[x][y] = [entity];
                            } else {
                                cell = hash[x][y];
                                for (var c = 0; c < cell.length; c++) {
                                    if (entity.touches(cell[c]) && !checked[cell[c].id]) {
                                        checked[cell[c].id] = !!{};
                                        ig.Entity.checkPair(entity, cell[c]);
                                    }
                                }
                                cell.push(entity);
                            }
                        }
                    }
                }
            }
        };
        c0pp.draw = function() {
            ig.game.sortEntitiesDeferred();
            this.parent();
            this.dctf();
        };
        c0pp.dctf = function() {
            this.COPYRIGHT;
        };
        c0pp.clearCanvas = function(ctx, width, height) {
            var canvas;
            canvas = ctx.canvas;
            ctx.clearRect(0, 0, width, height);
            canvas.style.display = "none";
            canvas.offsetHeight;
            canvas.style.display = "inherit";
        };
        c0pp.drawDebug = function() {
            h0N.w7();
            if (!ig.global.wm) {
                this.debugEnable();
                if (this.viewDebug) {
                    ig.system.context.fillStyle = '#000000';
                    ig.system.context.globalAlpha = 0.35;
                    ig.system.context.fillRect(0, 0, ig.system.width / 4, ig.system.height);
                    ig.system.context.globalAlpha = 1;
                    if (this.debug && this.debug.length > 0) {
                        for (i = 0; i < this.debug.length; i++) {
                            ig.system.context.font = "10px Arial";
                            ig.system.context.fillStyle = '#ffffff';
                            ig.system.context.fillText(this.debugLine - this.debug.length + i + ": " + this.debug[i], 10, 50 + 10 * i);
                        }
                    }
                }
            }
        };
        c0pp.debugCL = function(consoleLog) {
            if (!this.debug) {
                this.debug = [];
                this.debugLine = 1;
                this.debug.push(consoleLog);
            } else {
                if (this.debug.length < 50) {
                    this.debug.push(consoleLog);
                } else {
                    this.debug.splice(0, 1);
                    this.debug.push(consoleLog);
                }
                this.debugLine++;
            }
            console.log(consoleLog);
        };
        c0pp.debugEnable = function() {
            if (ig.input.pressed('click')) {
                this.debugEnableTimer = new ig.Timer(2);
            }
            if (this.debugEnableTimer && this.debugEnableTimer.delta() < 0) {
                if (ig.input.released('click')) {
                    this.debugEnableTimer = null;
                }
            } else if (this.debugEnableTimer && this.debugEnableTimer.delta() > 0) {
                this.debugEnableTimer = null;
                if (this.viewDebug) {
                    this.viewDebug = !!"";
                } else {
                    this.viewDebug = !![];
                }
            }
        };
        c0pp.gotoMenu = function() {
            h0N.I7();
            ig.game.director.jumpTo(LevelMenu);
        };
        c0pp.gotoGame = function() {
            h0N.w7();
            ig.game.director.jumpTo(LevelGame);
        };
        return c0pp;
        // }
    }.apply(this));
    // window['gameStart'] = function() {
    window.onload = function() {
        console.log("loging......")
        var fps;
        ig.domHandler = null;
        ig.domHandler = new ig.DomHandler();
        ig.domHandler.forcedDeviceDetection();
        ig.domHandler.forcedDeviceRotation();
        ig.apiHandler = new ig.ApiHandler();
        ig.sizeHandler = new ig.SizeHandler(ig.domHandler);
        fps = 60;
        if (ig.ua.mobile) {
            ig.Sound.enabled = !"1";
            ig.main('#canvas', MyGame, fps, ig.sizeHandler.mobile.actualResolution.x, ig.sizeHandler.mobile.actualResolution.y, ig.sizeHandler.scale, ig.SplashLoader);
            ig.sizeHandler.resize();
        } else {
            ig.main('#canvas', MyGame, fps, ig.sizeHandler.desktop.actualResolution.x, ig.sizeHandler.desktop.actualResolution.y, ig.sizeHandler.scale, ig.SplashLoader);
        }
        ig.soundHandler = null;
        ig.soundHandler = new ig.SoundHandler();
        ig.sizeHandler.reorient();
    };

});