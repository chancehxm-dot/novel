'use strict';
var aa, ba, ca, ea, fa, ha, ia, ja, ka, la, ma, na, oa, pa, qa, ua, va, wa, xa, ya, za, Aa, y, Ca, Da, Ea, Fa, Ga, A, Ha, Ia, Ja, Ka, La, Ma, Na, Pa, Qa, Ra, Sa, Ta, Va, Wa, Xa, Ya, Za, $a, ab, bb, cb, db, eb, kb, lb, mb, nb, ob, pb, qb, rb, sb, tb, ub, vb, wb, xb, yb, Ab, Bb, Cb, Db, Eb, Fb, Gb, Hb, Ib, Jb, Kb, Lb, Mb, Nb, Ob, Pb, Qb, Rb, Ub, Vb, Wb, Xb, Yb, Zb, $b, ac, bc, cc, dc, ec, fc, gc, hc, ic, jc = {};
"function" !== typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === typeof "test".__proto__ ? function(f) {
    return f.__proto__
} : function(f) {
    return f.constructor.prototype
});
(function() {
    function f(a, b, e, h) {
        this.set(a, b, e, h)
    }

    function d() {
        this.yb = this.xb = this.Ab = this.zb = this.Ob = this.Nb = this.ib = this.hb = 0
    }

    function c(a, b, e, h) {
        a < b ? e < h ? (L = a < e ? a : e, M = b > h ? b : h) : (L = a < h ? a : h, M = b > e ? b : e) : e < h ? (L = b < e ? b : e, M = a > h ? a : h) : (L = b < h ? b : h, M = a > e ? a : e)
    }

    function k() {
        this.items = this.Kc = null;
        this.Li = 0;
        z && (this.Kc = new Set);
        this.Yh = [];
        this.hf = !0
    }

    function b(a) {
        v[C++] = a
    }

    function m() {
        this.ma = this.Ph = this.y = this.Tm = 0
    }

    function g(a) {
        this.Kb = [];
        this.ck = this.ek = this.fk = this.dk = 0;
        this.vj(a)
    }

    function a(a, b) {
        this.Xm = a;
        this.Wm = b;
        this.cells = {}
    }

    function h(a, b) {
        this.Xm = a;
        this.Wm = b;
        this.cells = {}
    }

    function t(a, b, e) {
        var h;
        return x.length ? (h = x.pop(), h.Hn = a, h.x = b, h.y = e, h) : new aa(a, b, e)
    }

    function e(a, b, e) {
        this.Hn = a;
        this.x = b;
        this.y = e;
        this.Sb = new ba
    }

    function l(a, b, e) {
        var h;
        return J.length ? (h = J.pop(), h.Hn = a, h.x = b, h.y = e, h) : new ca(a, b, e)
    }

    function p(a, b, e) {
        this.Hn = a;
        this.x = b;
        this.y = e;
        this.Sb = [];
        this.fh = !0;
        this.ke = new ba;
        this.bi = !1
    }

    function n(a, b) {
        return a.Xd - b.Xd
    }
    ea = function(a) {
        window.console && window.console.log && window.console.log(a)
    };
    fa = function(a) {
        window.console && window.console.error && window.console.error(a)
    };
    ha = function(a) {
        return "undefined" === typeof a
    };
    ia = function(a) {
        return "number" === typeof a
    };
    ja = function(a) {
        return "string" === typeof a
    };
    ka = function(a) {
        return 0 < a && 0 === (a - 1 & a)
    };
    la = function(a) {
        --a;
        for (var b = 1; 32 > b; b <<= 1) a = a | a >> b;
        return a + 1
    };
    ma = function(a) {
        return 0 > a ? -a : a
    };
    na = function(a, b) {
        return a > b ? a : b
    };
    oa = function(a, b) {
        return a < b ? a : b
    };
    pa = Math.PI;
    qa = function(a) {
        return 0 <= a ? a | 0 : (a | 0) - 1
    };
    ua = function(a) {
        var b = a | 0;
        return b === a ? b : b +
            1
    };
    va = function(a, b, e, h, l, r, g, c) {
        var n, q, d, p;
        a < e ? (q = a, n = e) : (q = e, n = a);
        l < g ? (p = l, d = g) : (p = g, d = l);
        if (n < p || q > d) return !1;
        b < h ? (q = b, n = h) : (q = h, n = b);
        r < c ? (p = r, d = c) : (p = c, d = r);
        if (n < p || q > d) return !1;
        n = l - a + g - e;
        q = r - b + c - h;
        a = e - a;
        b = h - b;
        l = g - l;
        r = c - r;
        c = ma(b * l - r * a);
        return ma(l * q - r * n) > c ? !1 : ma(a * q - b * n) <= c
    };
    f.prototype.set = function(a, b, e, h) {
        this.left = a;
        this.top = b;
        this.right = e;
        this.bottom = h
    };
    f.prototype.Og = function(a) {
        this.left = a.left;
        this.top = a.top;
        this.right = a.right;
        this.bottom = a.bottom
    };
    f.prototype.width = function() {
        return this.right -
            this.left
    };
    f.prototype.height = function() {
        return this.bottom - this.top
    };
    f.prototype.offset = function(a, b) {
        this.left += a;
        this.top += b;
        this.right += a;
        this.bottom += b;
        return this
    };
    f.prototype.normalize = function() {
        var a = 0;
        this.left > this.right && (a = this.left, this.left = this.right, this.right = a);
        this.top > this.bottom && (a = this.top, this.top = this.bottom, this.bottom = a)
    };
    f.prototype.Qx = function(a) {
        return !(a.right < this.left || a.bottom < this.top || a.left > this.right || a.top > this.bottom)
    };
    f.prototype.Rx = function(a, b, e) {
        return !(a.right +
            b < this.left || a.bottom + e < this.top || a.left + b > this.right || a.top + e > this.bottom)
    };
    f.prototype.jc = function(a, b) {
        return a >= this.left && a <= this.right && b >= this.top && b <= this.bottom
    };
    f.prototype.ji = function(a) {
        return this.left === a.left && this.top === a.top && this.right === a.right && this.bottom === a.bottom
    };
    wa = f;
    d.prototype.Kh = function(a) {
        this.hb = a.left;
        this.ib = a.top;
        this.Nb = a.right;
        this.Ob = a.top;
        this.zb = a.right;
        this.Ab = a.bottom;
        this.xb = a.left;
        this.yb = a.bottom
    };
    d.prototype.Rs = function(a, b) {
        if (0 === b) this.Kh(a);
        else {
            var e = Math.sin(b),
                h = Math.cos(b),
                l = a.left * e,
                r = a.top * e,
                c = a.right * e,
                e = a.bottom * e,
                g = a.left * h,
                n = a.top * h,
                q = a.right * h,
                h = a.bottom * h;
            this.hb = g - r;
            this.ib = n + l;
            this.Nb = q - r;
            this.Ob = n + c;
            this.zb = q - e;
            this.Ab = h + c;
            this.xb = g - e;
            this.yb = h + l
        }
    };
    d.prototype.offset = function(a, b) {
        this.hb += a;
        this.ib += b;
        this.Nb += a;
        this.Ob += b;
        this.zb += a;
        this.Ab += b;
        this.xb += a;
        this.yb += b;
        return this
    };
    var L = 0,
        M = 0;
    d.prototype.mq = function(a) {
        c(this.hb, this.Nb, this.zb, this.xb);
        a.left = L;
        a.right = M;
        c(this.ib, this.Ob, this.Ab, this.yb);
        a.top = L;
        a.bottom = M
    };
    d.prototype.jc = function(a, b) {
        var e = this.hb,
            h = this.ib,
            l = this.Nb - e,
            r = this.Ob - h,
            c = this.zb - e,
            g = this.Ab - h,
            n = a - e,
            q = b - h,
            d = l * l + r * r,
            p = l * c + r * g,
            r = l * n + r * q,
            f = c * c + g * g,
            k = c * n + g * q,
            u = 1 / (d * f - p * p),
            l = (f * r - p * k) * u,
            d = (d * k - p * r) * u;
        if (0 <= l && 0 < d && 1 > l + d) return !0;
        l = this.xb - e;
        r = this.yb - h;
        d = l * l + r * r;
        p = l * c + r * g;
        r = l * n + r * q;
        u = 1 / (d * f - p * p);
        l = (f * r - p * k) * u;
        d = (d * k - p * r) * u;
        return 0 <= l && 0 < d && 1 > l + d
    };
    d.prototype.gf = function(a, b) {
        if (b) switch (a) {
            case 0:
                return this.hb;
            case 1:
                return this.Nb;
            case 2:
                return this.zb;
            case 3:
                return this.xb;
            case 4:
                return this.hb;
            default:
                return this.hb
        } else switch (a) {
            case 0:
                return this.ib;
            case 1:
                return this.Ob;
            case 2:
                return this.Ab;
            case 3:
                return this.yb;
            case 4:
                return this.ib;
            default:
                return this.ib
        }
    };
    d.prototype.Qr = function() {
        return (this.hb + this.Nb + this.zb + this.xb) / 4
    };
    d.prototype.Rr = function() {
        return (this.ib + this.Ob + this.Ab + this.yb) / 4
    };
    d.prototype.er = function(a) {
        var b = a.Qr(),
            e = a.Rr();
        if (this.jc(b, e)) return !0;
        b = this.Qr();
        e = this.Rr();
        if (a.jc(b, e)) return !0;
        var h, l, r, c, g, n, q, d;
        for (q = 0; 4 > q; q++)
            for (d = 0; 4 > d; d++)
                if (b = this.gf(q, !0), e = this.gf(q, !1), h = this.gf(q + 1, !0), l = this.gf(q + 1, !1), r = a.gf(d, !0), c = a.gf(d, !1), g = a.gf(d + 1, !0), n = a.gf(d + 1, !1), va(b, e, h, l, r, c, g, n)) return !0;
        return !1
    };
    xa = d;
    ya = function(a, b) {
        for (var e in b) b.hasOwnProperty(e) && (a[e] = b[e]);
        return a
    };
    za = function(a, b) {
        var e, h;
        b = qa(b);
        if (!(0 > b || b >= a.length)) {
            e = b;
            for (h = a.length - 1; e < h; e++) a[e] = a[e + 1];
            Aa(a, h)
        }
    };
    Aa = function(a, b) {
        a.length = b
    };
    y = function(a) {
        Aa(a, 0)
    };
    Ca = function(a, b) {
        y(a);
        var e, h;
        e = 0;
        for (h = b.length; e < h; ++e) a[e] = b[e]
    };
    Da = function(a, b) {
        a.push.apply(a, b)
    };
    Ea = function(a, b) {
        var e, h;
        e = 0;
        for (h = a.length; e < h; ++e)
            if (a[e] === b) return e;
        return -1
    };
    Fa = function(a, b) {
        var e = Ea(a, b); - 1 !== e && za(a, e)
    };
    Ga = function(a, b, e) {
        return a < b ? b : a > e ? e : a
    };
    A = function(a) {
        return a / (180 / pa)
    };
    Ha = function(a) {
        return 180 / pa * a
    };
    Ia = function(a) {
        a %= 360;
        0 > a && (a += 360);
        return a
    };
    Ja = function(a) {
        a %= 2 * pa;
        0 > a && (a += 2 * pa);
        return a
    };
    Ka = function(a) {
        return Ia(Ha(a))
    };
    La = function(a) {
        return Ja(A(a))
    };
    Ma = function(a, b, e, h) {
        return Math.atan2(h - b, e - a)
    };
    Na = function(a, b) {
        if (a === b) return 0;
        var e = Math.sin(a),
            h = Math.cos(a),
            l = Math.sin(b),
            r = Math.cos(b),
            e = e * l + h * r;
        return 1 <= e ? 0 : -1 >= e ? pa : Math.acos(e)
    };
    Pa = function(a, b, e) {
        var h = Math.sin(a),
            l = Math.cos(a),
            r = Math.sin(b),
            c = Math.cos(b);
        return Math.acos(h * r + l * c) > e ? 0 < l * r - h * c ? Ja(a + e) : Ja(a - e) : Ja(b)
    };
    Qa = function(a, b) {
        var e = Math.sin(a),
            h = Math.cos(a),
            l = Math.sin(b),
            r = Math.cos(b);
        return 0 >= h * l - e * r
    };
    Ra = function(a, b, e, h, l, r) {
        if (0 === e) return r ? a : b;
        var c = Math.sin(e);
        e = Math.cos(e);
        a -= h;
        b -= l;
        var g = a * c;
        a = a * e - b * c;
        b = b * e + g;
        return r ? a + h : b + l
    };
    Sa = function(a, b, e, h) {
        a = e - a;
        b = h - b;
        return Math.sqrt(a * a + b * b)
    };
    Ta = function(a, b) {
        return !a !== !b
    };
    Va = function(a) {
        for (var b in a)
            if (a.hasOwnProperty(b)) return !0;
        return !1
    };
    Wa = function(a) {
        for (var b in a) a.hasOwnProperty(b) && delete a[b]
    };
    var D = +new Date;
    Xa = function() {
        if ("undefined" !== typeof window.performance) {
            var a = window.performance;
            if ("undefined" !== typeof a.now) return a.now();
            if ("undefined" !== typeof a.webkitNow) return a.webkitNow();
            if ("undefined" !== typeof a.mozNow) return a.mozNow();
            if ("undefined" !== typeof a.msNow) return a.msNow()
        }
        return Date.now() - D
    };
    var q = !1,
        u = q = !1,
        N = !1;
    "undefined" !== typeof window && (q = /chrome/i.test(navigator.userAgent) || /chromium/i.test(navigator.userAgent), q = !q && /safari/i.test(navigator.userAgent), u = /(iphone|ipod|ipad)/i.test(navigator.userAgent), N = window.c2ejecta);
    var z = !q && !N && !u && "undefined" !== typeof Set && "undefined" !== typeof Set.prototype.forEach;
    k.prototype.contains = function(a) {
        return this.Ke() ? !1 : z ? this.Kc.has(a) : this.items && this.items.hasOwnProperty(a)
    };
    k.prototype.add = function(a) {
        if (z) this.Kc.has(a) || (this.Kc.add(a), this.hf = !1);
        else {
            var b = a.toString(),
                e = this.items;
            e ? e.hasOwnProperty(b) || (e[b] = a, this.Li++, this.hf = !1) : (this.items = {}, this.items[b] = a, this.Li = 1, this.hf = !1)
        }
    };
    k.prototype.remove = function(a) {
        if (!this.Ke())
            if (z) this.Kc.has(a) && (this.Kc["delete"](a), this.hf = !1);
            else if (this.items) {
            a = a.toString();
            var b = this.items;
            b.hasOwnProperty(a) && (delete b[a], this.Li--, this.hf = !1)
        }
    };
    k.prototype.clear = function() {
        this.Ke() || (z ? this.Kc.clear() : (this.items = null, this.Li = 0), y(this.Yh), this.hf = !0)
    };
    k.prototype.Ke = function() {
        return 0 === this.count()
    };
    k.prototype.count = function() {
        return z ? this.Kc.size : this.Li
    };
    var v = null,
        C = 0;
    k.prototype.yz = function() {
        if (!this.hf) {
            if (z) y(this.Yh), v = this.Yh, C = 0, this.Kc.forEach(b), v = null, C = 0;
            else {
                var a = this.Yh;
                y(a);
                var e, h = 0,
                    l = this.items;
                if (l)
                    for (e in l) l.hasOwnProperty(e) && (a[h++] = l[e])
            }
            this.hf = !0
        }
    };
    k.prototype.Ye = function() {
        this.yz();
        return this.Yh
    };
    ba = k;
    new ba;
    Ya = function(a, b) {
        z ? Za(a, b.Kc) : $a(a, b.Ye())
    };
    Za = function(a, b) {
        var e, h, l, r;
        h = e = 0;
        for (l = a.length; e < l; ++e) r = a[e], b.has(r) || (a[h++] = r);
        Aa(a, h)
    };
    $a = function(a, b) {
        var e, h, l, r;
        h = e = 0;
        for (l = a.length; e < l; ++e) r = a[e], -1 === Ea(b, r) && (a[h++] = r);
        Aa(a, h)
    };
    m.prototype.add = function(a) {
        this.y = a - this.Tm;
        this.Ph = this.ma + this.y;
        this.Tm = this.Ph - this.ma - this.y;
        this.ma = this.Ph
    };
    m.prototype.reset = function() {
        this.ma = this.Ph = this.y = this.Tm = 0
    };
    ab = m;
    bb = function(a) {
        return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
    };
    g.prototype.vj = function(a) {
        this.Bs = a;
        this.Rd = a.length / 2;
        this.Kb.length = a.length;
        this.ik = this.jk = -1;
        this.pq = 0
    };
    g.prototype.bh = function() {
        return !this.Bs.length
    };
    g.prototype.Ra = function() {
        for (var a = this.Kb, b = a[0], e = b, h = a[1], l = h, r, c, g = 1, n = this.Rd; g < n; ++g) c = 2 * g, r = a[c], c = a[c + 1], r < b && (b = r), r > e && (e = r), c < h && (h = c), c > l && (l = c);
        this.dk = b;
        this.ek = e;
        this.fk = h;
        this.ck = l
    };
    g.prototype.Kh = function(a, b, e) {
        this.Kb.length = 8;
        this.Rd = 4;
        var h = this.Kb;
        h[0] = a.left - b;
        h[1] = a.top - e;
        h[2] = a.right - b;
        h[3] = a.top - e;
        h[4] = a.right - b;
        h[5] = a.bottom - e;
        h[6] = a.left - b;
        h[7] = a.bottom - e;
        this.jk = a.right - a.left;
        this.ik = a.bottom - a.top;
        this.Ra()
    };
    g.prototype.Jh = function(a, b, e, h, l) {
        this.Kb.length = 8;
        this.Rd = 4;
        var r = this.Kb;
        r[0] = a.hb - b;
        r[1] = a.ib - e;
        r[2] = a.Nb - b;
        r[3] = a.Ob - e;
        r[4] = a.zb - b;
        r[5] = a.Ab - e;
        r[6] = a.xb - b;
        r[7] = a.yb - e;
        this.jk = h;
        this.ik = l;
        this.Ra()
    };
    g.prototype.Qs = function(a) {
        this.Rd = a.Rd;
        Ca(this.Kb, a.Kb);
        this.dk = a.dk;
        this.fk - a.fk;
        this.ek = a.ek;
        this.ck = a.ck
    };
    g.prototype.Mg = function(a, b, e) {
        if (this.jk !== a || this.ik !== b || this.pq !== e) {
            this.jk = a;
            this.ik = b;
            this.pq = e;
            var h, l, r, c, g, n = 0,
                q = 1,
                d = this.Bs,
                p = this.Kb;
            0 !== e && (n = Math.sin(e), q = Math.cos(e));
            e = 0;
            for (r = this.Rd; e < r; e++) h = 2 * e, l = h + 1, c = d[h] * a, g = d[l] * b, p[h] = c * q - g * n, p[l] = g * q + c * n;
            this.Ra()
        }
    };
    g.prototype.jc = function(a, b) {
        var e = this.Kb;
        if (a === e[0] && b === e[1]) return !0;
        var h, l, r, c = this.Rd,
            g = this.dk - 110,
            n = this.fk -
            101,
            q = this.ek + 131,
            d = this.ck + 120,
            p, f, k = 0,
            u = 0;
        for (h = 0; h < c; h++) l = 2 * h, r = (h + 1) % c * 2, p = e[l], l = e[l + 1], f = e[r], r = e[r + 1], va(g, n, a, b, p, l, f, r) && k++, va(q, d, a, b, p, l, f, r) && u++;
        return 1 === k % 2 || 1 === u % 2
    };
    g.prototype.Ai = function(a, b, e) {
        var h = a.Kb,
            l = this.Kb;
        if (this.jc(h[0] + b, h[1] + e) || a.jc(l[0] - b, l[1] - e)) return !0;
        var r, c, g, n, q, d, p, f, k, u, t, m;
        r = 0;
        for (n = this.Rd; r < n; r++)
            for (c = 2 * r, g = (r + 1) % n * 2, f = l[c], c = l[c + 1], k = l[g], u = l[g + 1], g = 0, p = a.Rd; g < p; g++)
                if (q = 2 * g, d = (g + 1) % p * 2, t = h[q] + b, q = h[q + 1] + e, m = h[d] + b, d = h[d + 1] + e, va(f, c, k, u, t, q, m, d)) return !0;
        return !1
    };
    cb = g;
    a.prototype.rf = function(a, b, e) {
        var h;
        h = this.cells[a];
        return h ? (h = h[b]) ? h : e ? (h = t(this, a, b), this.cells[a][b] = h) : null : e ? (h = t(this, a, b), this.cells[a] = {}, this.cells[a][b] = h) : null
    };
    a.prototype.Ac = function(a) {
        return qa(a / this.Xm)
    };
    a.prototype.Bc = function(a) {
        return qa(a / this.Wm)
    };
    a.prototype.update = function(a, b, e) {
        var h, l, r, c, g;
        if (b)
            for (h = b.left, l = b.right; h <= l; ++h)
                for (r = b.top, c = b.bottom; r <= c; ++r)
                    if (!e || !e.jc(h, r))
                        if (g = this.rf(h, r, !1)) g.remove(a), g.Ke() && (g.Sb.clear(), 1E3 > x.length && x.push(g), this.cells[h][r] = null);
        if (e)
            for (h = e.left, l = e.right; h <= l; ++h)
                for (r = e.top, c = e.bottom; r <= c; ++r) b && b.jc(h, r) || this.rf(h, r, !0).Sn(a)
    };
    a.prototype.Pl = function(a, b) {
        var e, h, l, r, c, g;
        e = this.Ac(a.left);
        l = this.Bc(a.top);
        h = this.Ac(a.right);
        for (c = this.Bc(a.bottom); e <= h; ++e)
            for (r = l; r <= c; ++r)(g = this.rf(e, r, !1)) && g.dump(b)
    };
    db = a;
    h.prototype.rf = function(a, b, e) {
        var h;
        h = this.cells[a];
        return h ? (h = h[b]) ? h : e ? (h = l(this, a, b), this.cells[a][b] = h) : null : e ? (h = l(this, a, b), this.cells[a] = {}, this.cells[a][b] = h) : null
    };
    h.prototype.Ac = function(a) {
        return qa(a / this.Xm)
    };
    h.prototype.Bc = function(a) {
        return qa(a / this.Wm)
    };
    h.prototype.update = function(a, b, e) {
        var h, l, r, c, g;
        if (b)
            for (h = b.left, l = b.right; h <= l; ++h)
                for (r = b.top, c = b.bottom; r <= c; ++r)
                    if (!e || !e.jc(h, r))
                        if (g = this.rf(h, r, !1)) g.remove(a), g.Ke() && (g.reset(), 1E3 > J.length && J.push(g), this.cells[h][r] = null);
        if (e)
            for (h = e.left, l = e.right; h <= l; ++h)
                for (r = e.top, c = e.bottom; r <= c; ++r) b && b.jc(h, r) || this.rf(h, r, !0).Sn(a)
    };
    h.prototype.Pl = function(a, b, e, h, l) {
        var r, c;
        a = this.Ac(a);
        b = this.Bc(b);
        e = this.Ac(e);
        for (r = this.Bc(h); a <= e; ++a)
            for (h = b; h <= r; ++h)(c = this.rf(a, h, !1)) && c.dump(l)
    };
    h.prototype.hy = function(a) {
        var b, e, h, l, r;
        b = a.left;
        h = a.top;
        e = a.right;
        for (l = a.bottom; b <= e; ++b)
            for (a = h; a <= l; ++a)
                if (r = this.rf(b, a, !1)) r.fh = !1
    };
    eb = h;
    var x = [];
    e.prototype.Ke = function() {
        return this.Sb.Ke()
    };
    e.prototype.Sn = function(a) {
        this.Sb.add(a)
    };
    e.prototype.remove = function(a) {
        this.Sb.remove(a)
    };
    e.prototype.dump = function(a) {
        Da(a, this.Sb.Ye())
    };
    aa = e;
    var J = [];
    p.prototype.Ke = function() {
        if (!this.Sb.length) return !0;
        if (this.Sb.length > this.ke.count()) return !1;
        this.sn();
        return !0
    };
    p.prototype.Sn = function(a) {
        this.ke.contains(a) ? (this.ke.remove(a), this.ke.Ke() && (this.bi = !1)) : this.Sb.length ? (this.Sb[this.Sb.length - 1].ge() > a.ge() && (this.fh = !1), this.Sb.push(a)) : (this.Sb.push(a), this.fh = !0)
    };
    p.prototype.remove = function(a) {
        this.ke.add(a);
        this.bi = !0;
        30 <= this.ke.count() && this.sn()
    };
    p.prototype.sn = function() {
        this.bi && (this.ke.count() === this.Sb.length ? this.reset() : (Ya(this.Sb, this.ke), this.ke.clear(), this.bi = !1))
    };
    p.prototype.vw = function() {
        this.fh || (this.Sb.sort(n), this.fh = !0)
    };
    p.prototype.reset = function() {
        y(this.Sb);
        this.fh = !0;
        this.ke.clear();
        this.bi = !1
    };
    p.prototype.dump = function(a) {
        this.sn();
        this.vw();
        this.Sb.length && a.push(this.Sb)
    };
    ca = p;
    var I = "lighter xor copy destination-over source-in destination-in source-out destination-out source-atop destination-atop".split(" ");
    kb = function(a) {
        return 0 >= a || 11 <= a ? "source-over" : I[a - 1]
    };
    lb = function(a, b, e) {
        if (e) switch (a.rc = e.ONE, a.mc = e.ONE_MINUS_SRC_ALPHA, b) {
            case 1:
                a.rc = e.ONE;
                a.mc = e.ONE;
                break;
            case 3:
                a.rc = e.ONE;
                a.mc = e.ZERO;
                break;
            case 4:
                a.rc = e.ONE_MINUS_DST_ALPHA;
                a.mc = e.ONE;
                break;
            case 5:
                a.rc = e.DST_ALPHA;
                a.mc = e.ZERO;
                break;
            case 6:
                a.rc = e.ZERO;
                a.mc = e.SRC_ALPHA;
                break;
            case 7:
                a.rc = e.ONE_MINUS_DST_ALPHA;
                a.mc = e.ZERO;
                break;
            case 8:
                a.rc = e.ZERO;
                a.mc = e.ONE_MINUS_SRC_ALPHA;
                break;
            case 9:
                a.rc = e.DST_ALPHA;
                a.mc = e.ONE_MINUS_SRC_ALPHA;
                break;
            case 10:
                a.rc = e.ONE_MINUS_DST_ALPHA, a.mc = e.SRC_ALPHA
        }
    };
    mb = function(a) {
        return Math.round(1E6 * a) / 1E6
    };
    nb = function(a, b) {
        return "string" !== typeof a || "string" !== typeof b || a.length !== b.length ?
            !1 : a === b ? !0 : a.toLowerCase() === b.toLowerCase()
    };
    ob = function(a) {
        a = a.target;
        return !a || a === document || a === window || document && document.body && a === document.body || nb(a.tagName, "canvas") ? !0 : !1
    }
})();
var kc = "undefined" !== typeof Float32Array ? Float32Array : Array;

function lc(f) {
    var d = new kc(3);
    f && (d[0] = f[0], d[1] = f[1], d[2] = f[2]);
    return d
}

function mc(f) {
    var d = new kc(16);
    f && (d[0] = f[0], d[1] = f[1], d[2] = f[2], d[3] = f[3], d[4] = f[4], d[5] = f[5], d[6] = f[6], d[7] = f[7], d[8] = f[8], d[9] = f[9], d[10] = f[10], d[11] = f[11], d[12] = f[12], d[13] = f[13], d[14] = f[14], d[15] = f[15]);
    return d
}

function nc(f, d) {
    d[0] = f[0];
    d[1] = f[1];
    d[2] = f[2];
    d[3] = f[3];
    d[4] = f[4];
    d[5] = f[5];
    d[6] = f[6];
    d[7] = f[7];
    d[8] = f[8];
    d[9] = f[9];
    d[10] = f[10];
    d[11] = f[11];
    d[12] = f[12];
    d[13] = f[13];
    d[14] = f[14];
    d[15] = f[15]
}

function oc(f, d) {
    var c = d[0],
        k = d[1];
    d = d[2];
    f[0] *= c;
    f[1] *= c;
    f[2] *= c;
    f[3] *= c;
    f[4] *= k;
    f[5] *= k;
    f[6] *= k;
    f[7] *= k;
    f[8] *= d;
    f[9] *= d;
    f[10] *= d;
    f[11] *= d
}

function pc(f, d, c, k) {
    k || (k = mc());
    var b, m, g, a, h, t, e, l, p = f[0],
        n = f[1];
    f = f[2];
    m = c[0];
    g = c[1];
    b = c[2];
    c = d[1];
    t = d[2];
    p === d[0] && n === c && f === t ? (f = k, f[0] = 1, f[1] = 0, f[2] = 0, f[3] = 0, f[4] = 0, f[5] = 1, f[6] = 0, f[7] = 0, f[8] = 0, f[9] = 0, f[10] = 1, f[11] = 0, f[12] = 0, f[13] = 0, f[14] = 0, f[15] = 1) : (c = p - d[0], t = n - d[1], e = f - d[2], l = 1 / Math.sqrt(c * c + t * t + e * e), c *= l, t *= l, e *= l, d = g * e - b * t, b = b * c - m * e, m = m * t - g * c, (l = Math.sqrt(d * d + b * b + m * m)) ? (l = 1 / l, d *= l, b *= l, m *= l) : m = b = d = 0, g = t * m - e * b, a = e * d - c * m, h = c * b - t * d, (l = Math.sqrt(g * g + a * a + h * h)) ? (l = 1 / l, g *= l, a *= l, h *= l) : h = a = g = 0, k[0] = d, k[1] = g, k[2] = c, k[3] = 0, k[4] = b, k[5] = a, k[6] = t, k[7] = 0, k[8] = m, k[9] = h, k[10] = e, k[11] = 0, k[12] = -(d * p + b * n + m * f), k[13] = -(g * p + a * n + h * f), k[14] = -(c * p + t * n + e * f), k[15] = 1)
}
(function() {
    function f(a, b, c) {
        this.vf = /msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent);
        this.height = this.width = 0;
        this.Ta = !!c;
        this.Yk = this.Bi = !1;
        this.en = 0;
        this.Gm = 1;
        this.wp = 1E3;
        this.Iz = (this.wp - this.Gm) / 32768;
        this.Um = lc([0, 0, 100]);
        this.Ar = lc([0, 0, 0]);
        this.ot = lc([0, 1, 0]);
        this.Qj = lc([1, 1, 1]);
        this.Bq = !0;
        this.nl = mc();
        this.hd = mc();
        this.eo = mc();
        this.dn = mc();
        this.J = a;
        this.version = 0 === this.J.getParameter(this.J.VERSION).indexOf("WebGL 2") ? 2 : 1;
        this.$q()
    }

    function d(a, b, c) {
        this.J = a;
        this.wj =
            b;
        this.name = c;
        this.Ad = a.getAttribLocation(b, "aPos");
        this.Af = a.getAttribLocation(b, "aTex");
        this.ur = a.getUniformLocation(b, "matP");
        this.jl = a.getUniformLocation(b, "matMV");
        this.ph = a.getUniformLocation(b, "opacity");
        this.mo = a.getUniformLocation(b, "colorFill");
        this.wr = a.getUniformLocation(b, "samplerFront");
        this.Vi = a.getUniformLocation(b, "samplerBack");
        this.pg = a.getUniformLocation(b, "destStart");
        this.ng = a.getUniformLocation(b, "destEnd");
        this.Xi = a.getUniformLocation(b, "seconds");
        this.oo = a.getUniformLocation(b, "pixelWidth");
        this.no = a.getUniformLocation(b, "pixelHeight");
        this.Ui = a.getUniformLocation(b, "layerScale");
        this.Ti = a.getUniformLocation(b, "layerAngle");
        this.Yi = a.getUniformLocation(b, "viewOrigin");
        this.Wi = a.getUniformLocation(b, "scrollPos");
        this.Kx = !!(this.oo || this.no || this.Xi || this.Vi || this.pg || this.ng || this.Ui || this.Ti || this.Yi || this.Wi);
        this.Ir = this.Jr = -999;
        this.ml = 1;
        this.Er = this.Dr = 0;
        this.Gr = this.Cr = this.Br = 1;
        this.Mr = this.Lr = this.Kr = this.Or = this.Nr = this.Fr = 0;
        this.co = [];
        this.Hr = mc();
        this.ph && a.uniform1f(this.ph, 1);
        this.mo && a.uniform4f(this.mo, 1, 1, 1, 1);
        this.wr && a.uniform1i(this.wr, 0);
        this.Vi && a.uniform1i(this.Vi, 1);
        this.pg && a.uniform2f(this.pg, 0, 0);
        this.ng && a.uniform2f(this.ng, 1, 1);
        this.Ui && a.uniform1f(this.Ui, 1);
        this.Ti && a.uniform1f(this.Ti, 0);
        this.Yi && a.uniform2f(this.Yi, 0, 0);
        this.Wi && a.uniform2f(this.Wi, 0, 0);
        this.Xi && a.uniform1f(this.Xi, 0);
        this.ag = !1
    }

    function c(a, b) {
        return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15]
    }

    function k(a, b) {
        this.type = a;
        this.F = b;
        this.J = b.J;
        this.xd = this.tc = this.ns = 0;
        this.ja = this.Fd = null;
        this.Ss = []
    }
    var b = mc();
    f.prototype.$q = function() {
        var a = this.J,
            b;
        this.or = 1;
        this.jg = this.ig = null;
        this.uk = 1;
        a.clearColor(0, 0, 0, 0);
        a.clear(a.COLOR_BUFFER_BIT);
        a.enable(a.BLEND);
        a.blendFunc(a.ONE, a.ONE_MINUS_SRC_ALPHA);
        a.disable(a.CULL_FACE);
        a.disable(a.STENCIL_TEST);
        a.disable(a.DITHER);
        this.Ta ? (a.enable(a.DEPTH_TEST), a.depthFunc(a.LEQUAL)) : a.disable(a.DEPTH_TEST);
        this.pr = a.ONE;
        this.nr = a.ONE_MINUS_SRC_ALPHA;
        this.Bm = new Float32Array(8E3 * (this.Ta ? 3 : 2));
        this.om = new Float32Array(16E3);
        this.Jo = new Float32Array(32E3);
        this.Io = a.createBuffer();
        a.bindBuffer(a.ARRAY_BUFFER, this.Io);
        a.bufferData(a.ARRAY_BUFFER, this.Jo.byteLength, a.DYNAMIC_DRAW);
        this.Pj = Array(4);
        this.Dj = Array(4);
        for (b = 0; 4 > b; b++) this.Pj[b] = a.createBuffer(), a.bindBuffer(a.ARRAY_BUFFER, this.Pj[b]), a.bufferData(a.ARRAY_BUFFER, this.Bm.byteLength, a.DYNAMIC_DRAW), this.Dj[b] = a.createBuffer(), a.bindBuffer(a.ARRAY_BUFFER, this.Dj[b]), a.bufferData(a.ARRAY_BUFFER, this.om.byteLength, a.DYNAMIC_DRAW);
        this.Ae = 0;
        this.Ox = a.createBuffer();
        a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.Ox);
        for (var c = new Uint16Array(12E3), e = b = 0; 12E3 > b;) c[b++] = e, c[b++] = e + 1, c[b++] = e + 2, c[b++] = e, c[b++] = e + 2, c[b++] = e + 3, e += 4;
        a.bufferData(a.ELEMENT_ARRAY_BUFFER, c, a.STATIC_DRAW);
        this.Dh = this.Qh = this.Ze = 0;
        this.fb = [];
        b = this.Ta ? "attribute highp vec3 aPos;\nattribute mediump vec2 aTex;\nvarying mediump vec2 vTex;\nuniform highp mat4 matP;\nuniform highp mat4 matMV;\nvoid main(void) {\n\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, aPos.z, 1.0);\n\tvTex = aTex;\n}" : "attribute highp vec2 aPos;\nattribute mediump vec2 aTex;\nvarying mediump vec2 vTex;\nuniform highp mat4 matP;\nuniform highp mat4 matMV;\nvoid main(void) {\n\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);\n\tvTex = aTex;\n}";
        c = this.gi({
            src: "varying mediump vec2 vTex;\nuniform lowp float opacity;\nuniform lowp sampler2D samplerFront;\nvoid main(void) {\n\tgl_FragColor = texture2D(samplerFront, vTex);\n\tgl_FragColor *= opacity;\n}"
        }, b, "<default>");
        this.fb.push(c);
        c = this.gi({
            src: "uniform mediump sampler2D samplerFront;\nvarying lowp float opacity;\nvoid main(void) {\n\tgl_FragColor = texture2D(samplerFront, gl_PointCoord);\n\tgl_FragColor *= opacity;\n}"
        }, "attribute vec4 aPos;\nvarying float opacity;\nuniform mat4 matP;\nuniform mat4 matMV;\nvoid main(void) {\n\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);\n\tgl_PointSize = aPos.z;\n\topacity = aPos.w;\n}", "<point>");
        this.fb.push(c);
        c = this.gi({
            src: "varying mediump vec2 vTex;\nuniform lowp sampler2D samplerFront;\nvoid main(void) {\n\tif (texture2D(samplerFront, vTex).a < 1.0)\n\t\tdiscard;\n}"
        }, b, "<earlyz>");
        this.fb.push(c);
        c = this.gi({
            src: "uniform lowp vec4 colorFill;\nvoid main(void) {\n\tgl_FragColor = colorFill;\n}"
        }, b, "<fill>");
        this.fb.push(c);
        for (var l in qc) qc.hasOwnProperty(l) && this.fb.push(this.gi(qc[l], b, l));
        a.activeTexture(a.TEXTURE0);
        a.bindTexture(a.TEXTURE_2D, null);
        this.ze = [];
        this.ae = 0;
        this.oc = this.Zb = !1;
        this.wq = this.Mi = -1;
        this.Qg = null;
        this.qn = a.createFramebuffer();
        this.yk = this.Sl = null;
        this.kq = !1;
        this.Ta && (this.yk = a.createRenderbuffer());
        this.Gf = lc([0, 0, 0]);
        a = a.getParameter(a.ALIASED_POINT_SIZE_RANGE);
        this.ky = a[0];
        this.ro = a[1];
        2048 < this.ro && (this.ro = 2048);
        this.Nc(0)
    };
    d.prototype.op = function(a) {
        c(this.Hr, a) || (nc(a, this.Hr), this.J.uniformMatrix4fv(this.jl, !1, a))
    };
    f.prototype.gi = function(a, b, c) {
        var e = this.J,
            l = e.createShader(e.FRAGMENT_SHADER);
        e.shaderSource(l, a.src);
        e.compileShader(l);
        if (!e.getShaderParameter(l, e.COMPILE_STATUS)) return e.deleteShader(l), null;
        var g = e.createShader(e.VERTEX_SHADER);
        e.shaderSource(g, b);
        e.compileShader(g);
        if (!e.getShaderParameter(g, e.COMPILE_STATUS)) return e.deleteShader(l), e.deleteShader(g), null;
        b = e.createProgram();
        e.attachShader(b, l);
        e.attachShader(b, g);
        e.linkProgram(b);
        if (!e.getProgramParameter(b, e.LINK_STATUS)) return e.deleteShader(l), e.deleteShader(g), e.deleteProgram(b), null;
        e.useProgram(b);
        e.deleteShader(l);
        e.deleteShader(g);
        c = new d(e, b, c);
        c.nn = a.nn || 0;
        c.pn = a.pn || 0;
        c.vq = !!a.vq;
        c.Qd = !!a.Qd;
        c.iq = !!a.iq;
        c.ka = a.ka || [];
        a = 0;
        for (l = c.ka.length; a < l; a++) c.ka[a][1] = e.getUniformLocation(b, c.ka[a][0]), c.co.push(0), e.uniform1f(c.ka[a][1], 0);
        return c
    };
    f.prototype.Fn = function(a) {
        var b, c;
        b = 0;
        for (c = this.fb.length; b < c; b++)
            if (this.fb[b].name === a) return b;
        return -1
    };
    f.prototype.As = function(a, b, c) {
        var e = this.hd,
            l = this.nl,
            g = [0, 0, 0, 0, 0, 0, 0, 0];
        g[0] = e[0] * a + e[4] * b + e[12];
        g[1] = e[1] * a + e[5] * b + e[13];
        g[2] = e[2] * a + e[6] * b + e[14];
        g[3] = e[3] * a + e[7] * b + e[15];
        g[4] = l[0] * g[0] + l[4] * g[1] + l[8] * g[2] + l[12] * g[3];
        g[5] = l[1] * g[0] + l[5] * g[1] + l[9] * g[2] + l[13] * g[3];
        g[6] = l[2] * g[0] + l[6] * g[1] + l[10] * g[2] + l[14] * g[3];
        g[7] = -g[2];
        0 !== g[7] && (g[7] = 1 / g[7], g[4] *= g[7], g[5] *= g[7], g[6] *= g[7], c[0] = (.5 * g[4] + .5) * this.width, c[1] = (.5 * g[5] + .5) * this.height)
    };
    f.prototype.wg = function(a, b, c) {
        if (this.width !== a || this.height !== b || c) {
            this.pf();
            c = this.J;
            this.width = a;
            this.height = b;
            c.viewport(0, 0, a, b);
            pc(this.Um, this.Ar, this.ot, this.hd);
            if (this.Ta) {
                var e = -a / 2;
                a = a / 2;
                var l = b / 2;
                b = -b / 2;
                var g = this.Gm,
                    n = this.wp,
                    d = this.nl;
                d || (d = mc());
                var f = a - e,
                    k = b - l,
                    q = n - g;
                d[0] = 2 / f;
                d[1] = 0;
                d[2] = 0;
                d[3] = 0;
                d[4] = 0;
                d[5] = 2 / k;
                d[6] = 0;
                d[7] = 0;
                d[8] = 0;
                d[9] = 0;
                d[10] = -2 / q;
                d[11] = 0;
                d[12] = -(e + a) / f;
                d[13] = -(b + l) / k;
                d[14] = -(n + g) / q;
                d[15] = 1;
                this.Qj[0] = 1;
                this.Qj[1] = 1
            } else b = a / b, e = this.Gm, a = this.wp, d = this.nl, n = e * Math.tan(45 * Math.PI / 360), b *= n, l = -b, g = -n, d || (d = mc()), f = b - l, k = n - g, q = a - e, d[0] = 2 * e /
                f, d[1] = 0, d[2] = 0, d[3] = 0, d[4] = 0, d[5] = 2 * e / k, d[6] = 0, d[7] = 0, d[8] = (b + l) / f, d[9] = (n + g) / k, d[10] = -(a + e) / q, d[11] = -1, d[12] = 0, d[13] = 0, d[14] = -(a * e * 2) / q, d[15] = 0, e = [0, 0], a = [0, 0], this.As(0, 0, e), this.As(1, 1, a), this.Qj[0] = 1 / (a[0] - e[0]), this.Qj[1] = -1 / (a[1] - e[1]);
            e = 0;
            for (a = this.fb.length; e < a; e++) l = this.fb[e], l.ag = !1, l.ur && (c.useProgram(l.wj), c.uniformMatrix4fv(l.ur, !1, this.nl));
            c.useProgram(this.fb[this.Mi].wj);
            c.bindTexture(c.TEXTURE_2D, null);
            c.activeTexture(c.TEXTURE1);
            c.bindTexture(c.TEXTURE_2D, null);
            c.activeTexture(c.TEXTURE0);
            this.jg = this.ig = null;
            this.yk && (c.bindFramebuffer(c.FRAMEBUFFER, this.qn), c.bindRenderbuffer(c.RENDERBUFFER, this.yk), c.renderbufferStorage(c.RENDERBUFFER, c.DEPTH_COMPONENT16, this.width, this.height), this.kq || (c.framebufferRenderbuffer(c.FRAMEBUFFER, c.DEPTH_ATTACHMENT, c.RENDERBUFFER, this.yk), this.kq = !0), c.bindRenderbuffer(c.RENDERBUFFER, null), c.bindFramebuffer(c.FRAMEBUFFER, null), this.Sl = null)
        }
    };
    f.prototype.pe = function() {
        pc(this.Um, this.Ar, this.ot, this.hd);
        oc(this.hd, this.Qj)
    };
    f.prototype.translate = function(a, b) {
        if (0 !== a || 0 !== b) {
            this.Gf[0] = a;
            this.Gf[1] = b;
            this.Gf[2] = 0;
            var c = this.hd,
                e = this.Gf,
                l = e[0],
                g = e[1],
                e = e[2];
            c[12] = c[0] * l + c[4] * g + c[8] * e + c[12];
            c[13] = c[1] * l + c[5] * g + c[9] * e + c[13];
            c[14] = c[2] * l + c[6] * g + c[10] * e + c[14];
            c[15] = c[3] * l + c[7] * g + c[11] * e + c[15]
        }
    };
    f.prototype.scale = function(a, b) {
        if (1 !== a || 1 !== b) this.Gf[0] = a, this.Gf[1] = b, this.Gf[2] = 1, oc(this.hd, this.Gf)
    };
    f.prototype.So = function(a) {
        if (0 !== a) {
            var b = this.hd,
                c, e = Math.sin(a);
            a = Math.cos(a);
            var l = b[0],
                g = b[1],
                d = b[2],
                f = b[3],
                k = b[4],
                m = b[5],
                q = b[6],
                u = b[7];
            c ? b !== c && (c[8] = b[8], c[9] = b[9], c[10] = b[10], c[11] = b[11], c[12] = b[12], c[13] = b[13], c[14] = b[14], c[15] = b[15]) : c = b;
            c[0] = l * a + k * e;
            c[1] = g * a + m * e;
            c[2] = d * a + q * e;
            c[3] = f * a + u * e;
            c[4] = l * -e + k * a;
            c[5] = g * -e + m * a;
            c[6] = d * -e + q * a;
            c[7] = f * -e + u * a
        }
    };
    f.prototype.Wd = function() {
        if (!c(this.eo, this.hd)) {
            var a = this.Hc();
            a.type = 5;
            a.ja ? nc(this.hd, a.ja) : a.ja = mc(this.hd);
            nc(this.hd, this.eo);
            this.oc = this.Zb = !1
        }
    };
    f.prototype.Zl = function(a) {
        this.Ta && (32760 < a && (a = 32760), this.en = this.Um[2] - this.Gm - a * this.Iz)
    };
    k.prototype.bw = function() {
        var a = this.J,
            b = this.F;
        0 !== this.tc ? (a.depthMask(!0), a.colorMask(!1, !1, !1, !1), a.disable(a.BLEND), a.bindFramebuffer(a.FRAMEBUFFER, b.qn), a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, null, 0), a.clear(a.DEPTH_BUFFER_BIT), a.bindFramebuffer(a.FRAMEBUFFER, null), b.Yk = !0) : (a.depthMask(!1), a.colorMask(!0, !0, !0, !0), a.enable(a.BLEND), b.Yk = !1)
    };
    k.prototype.gw = function() {
        this.J.bindTexture(this.J.TEXTURE_2D, this.Fd)
    };
    k.prototype.hw = function() {
        var a = this.J;
        a.activeTexture(a.TEXTURE1);
        a.bindTexture(a.TEXTURE_2D, this.Fd);
        a.activeTexture(a.TEXTURE0)
    };
    k.prototype.dw = function() {
        var a = this.ns,
            b = this.F;
        b.uk = a;
        b = b.Qg;
        b.ph && b.ml !== a && (b.ml = a, this.J.uniform1f(b.ph, a))
    };
    k.prototype.Xv = function() {
        this.J.drawElements(this.J.TRIANGLES, this.xd, this.J.UNSIGNED_SHORT, this.tc)
    };
    k.prototype.Zv = function() {
        this.J.blendFunc(this.tc, this.xd)
    };
    k.prototype.iw = function() {
        var a, b, c, e = this.F.fb,
            l = this.F.wq;
        a = 0;
        for (b = e.length; a < b; a++) c = e[a], a === l && c.jl ? (c.op(this.ja), c.ag = !0) : c.ag = !1;
        nc(this.ja, this.F.dn)
    };
    k.prototype.Yv = function() {
        var a = this.J,
            b = this.F;
        this.Fd ? (b.jg === this.Fd && (a.activeTexture(a.TEXTURE1), a.bindTexture(a.TEXTURE_2D, null), b.jg = null, a.activeTexture(a.TEXTURE0)), a.bindFramebuffer(a.FRAMEBUFFER, b.qn), b.Yk || a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, this.Fd, 0)) : (b.Ta || a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, null, 0), a.bindFramebuffer(a.FRAMEBUFFER, null))
    };
    k.prototype.Tv = function() {
        var a = this.J,
            b = this.tc;
        0 === b ? (a.clearColor(this.ja[0], this.ja[1], this.ja[2], this.ja[3]), a.clear(a.COLOR_BUFFER_BIT)) : 1 === b ? (a.enable(a.SCISSOR_TEST), a.scissor(this.ja[0], this.ja[1], this.ja[2], this.ja[3]), a.clearColor(0, 0, 0, 0), a.clear(a.COLOR_BUFFER_BIT), a.disable(a.SCISSOR_TEST)) : a.clear(a.DEPTH_BUFFER_BIT)
    };
    k.prototype.aw = function() {
        var a = this.J;
        0 !== this.tc ? a.enable(a.DEPTH_TEST) : a.disable(a.DEPTH_TEST)
    };
    k.prototype.Wv = function() {
        var a = this.J,
            b = this.F;
        b.Ta && a.disable(a.DEPTH_TEST);
        var c = b.fb[1];
        a.useProgram(c.wj);
        !c.ag && c.jl && (c.op(b.dn), c.ag = !0);
        a.enableVertexAttribArray(c.Ad);
        a.bindBuffer(a.ARRAY_BUFFER, b.Io);
        a.vertexAttribPointer(c.Ad, 4, a.FLOAT, !1, 0, 0);
        a.drawArrays(a.POINTS, this.tc / 4, this.xd);
        c = b.Qg;
        a.useProgram(c.wj);
        0 <= c.Ad && (a.enableVertexAttribArray(c.Ad), a.bindBuffer(a.ARRAY_BUFFER, b.Pj[b.Ae]), a.vertexAttribPointer(c.Ad, b.Ta ? 3 : 2, a.FLOAT, !1, 0, 0));
        0 <= c.Af && (a.enableVertexAttribArray(c.Af), a.bindBuffer(a.ARRAY_BUFFER, b.Dj[b.Ae]), a.vertexAttribPointer(c.Af, 2, a.FLOAT, !1, 0, 0));
        b.Ta && a.enable(a.DEPTH_TEST)
    };
    k.prototype.ew = function() {
        var a = this.J,
            b = this.F,
            c = b.fb[this.tc];
        b.wq = this.tc;
        b.Qg = c;
        a.useProgram(c.wj);
        !c.ag && c.jl && (c.op(b.dn), c.ag = !0);
        c.ph && c.ml !== b.uk && (c.ml = b.uk, a.uniform1f(c.ph, b.uk));
        0 <= c.Ad && (a.enableVertexAttribArray(c.Ad), a.bindBuffer(a.ARRAY_BUFFER, b.Pj[b.Ae]), a.vertexAttribPointer(c.Ad, b.Ta ? 3 : 2, a.FLOAT, !1, 0, 0));
        0 <= c.Af && (a.enableVertexAttribArray(c.Af), a.bindBuffer(a.ARRAY_BUFFER, b.Dj[b.Ae]), a.vertexAttribPointer(c.Af, 2, a.FLOAT, !1, 0, 0))
    };
    k.prototype.$v = function() {
        var a = this.ja;
        this.J.uniform4f(this.F.Qg.mo, a[0], a[1], a[2], a[3])
    };
    k.prototype.fw = function() {
        var a, b, c = this.F.Qg,
            e = this.J;
        a = this.ja;
        c.Vi && this.F.jg !== this.Fd && (e.activeTexture(e.TEXTURE1), e.bindTexture(e.TEXTURE_2D, this.Fd), this.F.jg = this.Fd, e.activeTexture(e.TEXTURE0));
        var l = a[0];
        c.oo && l !== c.Jr && (c.Jr = l, e.uniform1f(c.oo, l));
        l = a[1];
        c.no && l !== c.Ir && (c.Ir = l, e.uniform1f(c.no, l));
        l = a[2];
        b = a[3];
        !c.pg || l === c.Dr && b === c.Er || (c.Dr = l, c.Er = b, e.uniform2f(c.pg, l, b));
        l = a[4];
        b = a[5];
        !c.ng || l === c.Br && b === c.Cr || (c.Br = l, c.Cr = b, e.uniform2f(c.ng, l, b));
        l = a[6];
        c.Ui && l !== c.Gr && (c.Gr = l, e.uniform1f(c.Ui, l));
        l = a[7];
        c.Ti && l !== c.Fr && (c.Fr = l, e.uniform1f(c.Ti, l));
        l = a[8];
        b = a[9];
        !c.Yi || l === c.Nr && b === c.Or || (c.Nr = l, c.Or = b, e.uniform2f(c.Yi, l, b));
        l = a[10];
        b = a[11];
        !c.Wi || l === c.Kr && b === c.Lr || (c.Kr = l, c.Lr = b, e.uniform2f(c.Wi, l, b));
        l = a[12];
        c.Xi && l !== c.Mr && (c.Mr = l, e.uniform1f(c.Xi, l));
        if (c.ka.length)
            for (a = 0, b = c.ka.length; a < b; a++) l = this.Ss[a], l !== c.co[a] && (c.co[a] = l, e.uniform1f(c.ka[a][1], l))
    };
    f.prototype.Hc = function() {
        this.ae === this.ze.length && this.ze.push(new k(0, this));
        return this.ze[this.ae++]
    };
    f.prototype.pf = function() {
        if (0 !== this.ae && !this.J.isContextLost()) {
            var a = this.J;
            0 < this.Dh && (a.bindBuffer(a.ARRAY_BUFFER, this.Io), a.bufferSubData(a.ARRAY_BUFFER, 0, this.Jo.subarray(0, this.Dh)), b && 0 <= b.Ad && "<point>" === b.name && a.vertexAttribPointer(b.Ad, 4, a.FLOAT, !1, 0, 0));
            if (0 < this.Ze) {
                var b = this.Qg;
                a.bindBuffer(a.ARRAY_BUFFER, this.Pj[this.Ae]);
                a.bufferSubData(a.ARRAY_BUFFER, 0, this.Bm.subarray(0, this.Ze));
                b && 0 <= b.Ad && "<point>" !== b.name && a.vertexAttribPointer(b.Ad, this.Ta ? 3 : 2, a.FLOAT, !1, 0, 0);
                a.bindBuffer(a.ARRAY_BUFFER, this.Dj[this.Ae]);
                a.bufferSubData(a.ARRAY_BUFFER, 0, this.om.subarray(0, this.Qh));
                b && 0 <= b.Af && "<point>" !== b.name && a.vertexAttribPointer(b.Af, 2, a.FLOAT, !1, 0, 0)
            }
            for (var c, a = 0, b = this.ae; a < b; a++) switch (c = this.ze[a], c.type) {
                case 1:
                    c.Xv();
                    break;
                case 2:
                    c.gw();
                    break;
                case 3:
                    c.dw();
                    break;
                case 4:
                    c.Zv();
                    break;
                case 5:
                    c.iw();
                    break;
                case 6:
                    c.Yv();
                    break;
                case 7:
                    c.Tv();
                    break;
                case 8:
                    c.Wv();
                    break;
                case 9:
                    c.ew();
                    break;
                case 10:
                    c.fw();
                    break;
                case 11:
                    c.hw();
                    break;
                case 12:
                    c.$v();
                    break;
                case 13:
                    c.aw();
                    break;
                case 14:
                    c.bw()
            }
            this.Dh = this.Qh = this.Ze = this.ae = 0;
            this.Yk = this.oc = this.Zb = !1;
            this.Ae++;
            4 <= this.Ae && (this.Ae = 0)
        }
    };
    f.prototype.Ef = function(a) {
        if (a !== this.or && !this.Bi) {
            var b = this.Hc();
            b.type = 3;
            this.or = b.ns = a;
            this.oc = this.Zb = !1
        }
    };
    f.prototype.Lc = function(a) {
        if (a !== this.ig) {
            var b = this.Hc();
            b.type = 2;
            this.ig = b.Fd = a;
            this.oc = this.Zb = !1
        }
    };
    f.prototype.Df = function(a, b) {
        if ((a !== this.pr || b !== this.nr) && !this.Bi) {
            var c = this.Hc();
            c.type = 4;
            c.tc = a;
            c.xd = b;
            this.pr = a;
            this.nr = b;
            this.oc = this.Zb = !1
        }
    };
    f.prototype.Is = function() {
        this.Df(this.J.ONE, this.J.ONE_MINUS_SRC_ALPHA)
    };
    f.prototype.Eh = function(a, b, c, e, l, g, d, f) {
        15992 <= this.Ze && this.pf();
        var k = this.Ze,
            m = this.Qh,
            q = this.Bm,
            u = this.om,
            N = this.en;
        if (this.Zb) this.ze[this.ae - 1].xd += 6;
        else {
            var z = this.Hc();
            z.type = 1;
            z.tc = this.Ta ? k : k / 2 * 3;
            z.xd = 6;
            this.Zb = !0;
            this.oc = !1
        }
        this.Ta ? (q[k++] = a, q[k++] = b, q[k++] = N, q[k++] = c, q[k++] = e, q[k++] = N, q[k++] = l, q[k++] = g, q[k++] = N, q[k++] = d, q[k++] = f, q[k++] = N) : (q[k++] = a, q[k++] = b, q[k++] = c, q[k++] = e, q[k++] = l, q[k++] = g, q[k++] = d, q[k++] = f);
        u[m++] = 0;
        u[m++] = 0;
        u[m++] = 1;
        u[m++] = 0;
        u[m++] = 1;
        u[m++] = 1;
        u[m++] = 0;
        u[m++] = 1;
        this.Ze = k;
        this.Qh = m
    };
    f.prototype.me = function(a, b, c, e, l, g, d, f, k) {
        15992 <= this.Ze && this.pf();
        var m = this.Ze,
            q = this.Qh,
            u = this.Bm,
            N = this.om,
            z = this.en;
        if (this.Zb) this.ze[this.ae - 1].xd += 6;
        else {
            var v = this.Hc();
            v.type = 1;
            v.tc = this.Ta ? m : m / 2 * 3;
            v.xd = 6;
            this.Zb = !0;
            this.oc = !1
        }
        var v = k.left,
            C = k.top,
            x = k.right;
        k = k.bottom;
        this.Ta ? (u[m++] = a, u[m++] = b, u[m++] = z, u[m++] = c, u[m++] = e, u[m++] = z, u[m++] = l, u[m++] = g, u[m++] = z, u[m++] = d, u[m++] = f, u[m++] = z) : (u[m++] = a, u[m++] = b, u[m++] = c, u[m++] = e, u[m++] = l, u[m++] = g, u[m++] = d, u[m++] = f);
        N[q++] = v;
        N[q++] = C;
        N[q++] = x;
        N[q++] = C;
        N[q++] = x;
        N[q++] = k;
        N[q++] = v;
        N[q++] = k;
        this.Ze = m;
        this.Qh = q
    };
    f.prototype.Cy = function(a, b, c, e) {
        7996 <= this.Dh && this.pf();
        var l = this.Dh,
            g = this.Jo;
        if (this.oc) this.ze[this.ae - 1].xd++;
        else {
            var d = this.Hc();
            d.type = 8;
            d.tc = l;
            d.xd = 1;
            this.oc = !0;
            this.Zb = !1
        }
        g[l++] = a;
        g[l++] = b;
        g[l++] = c;
        g[l++] = e;
        this.Dh = l
    };
    f.prototype.Nc = function(a) {
        if (this.Mi !== a) {
            if (!this.fb[a]) {
                if (0 === this.Mi) return;
                a = 0
            }
            var b = this.Hc();
            b.type = 9;
            this.Mi = b.tc = a;
            this.oc = this.Zb = !1
        }
    };
    f.prototype.oj = function(a) {
        a = this.fb[a];
        return !(!a.pg && !a.ng)
    };
    f.prototype.Mo = function(a) {
        a = this.fb[a];
        return !!(a.pg || a.ng || a.vq)
    };
    f.prototype.Lo = function(a) {
        return this.fb[a].Qd
    };
    f.prototype.Ky = function(a) {
        a = this.fb[a];
        return 0 !== a.nn || 0 !== a.pn
    };
    f.prototype.rx = function(a) {
        return this.fb[a].nn
    };
    f.prototype.tx = function(a) {
        return this.fb[a].pn
    };
    f.prototype.ux = function(a, b) {
        return this.fb[a].ka[b][2]
    };
    f.prototype.Ml = function(a) {
        return this.fb[a].iq
    };
    f.prototype.Ih = function(a, b, c, e, l, g, d, f, k, m, q, u, N, z, v) {
        var C = this.fb[this.Mi],
            x, J;
        if (C.Kx || v.length) {
            x = this.Hc();
            x.type = 10;
            x.ja ? nc(this.hd, x.ja) : x.ja = mc();
            J = x.ja;
            J[0] = b;
            J[1] = c;
            J[2] = e;
            J[3] = l;
            J[4] = g;
            J[5] = d;
            J[6] = f;
            J[7] = k;
            J[8] = m;
            J[9] = q;
            J[10] = u;
            J[11] = N;
            J[12] = z;
            C.Vi ? x.Fd = a : x.Fd = null;
            if (v.length)
                for (c = x.Ss, c.length = v.length, a = 0, b = v.length; a < b; a++) c[a] = v[a];
            this.oc = this.Zb = !1
        }
    };
    f.prototype.clear = function(a, b, c, e) {
        var g = this.Hc();
        g.type = 7;
        g.tc = 0;
        g.ja || (g.ja = mc());
        g.ja[0] = a;
        g.ja[1] = b;
        g.ja[2] = c;
        g.ja[3] = e;
        this.oc = this.Zb = !1
    };
    f.prototype.clearRect = function(a, b, c, e) {
        if (!(0 > c || 0 > e)) {
            var g = this.Hc();
            g.type = 7;
            g.tc = 1;
            g.ja || (g.ja = mc());
            g.ja[0] = a;
            g.ja[1] = b;
            g.ja[2] = c;
            g.ja[3] = e;
            this.oc = this.Zb = !1
        }
    };
    f.prototype.Ls = function(a) {
        if (this.Ta && (a = !!a, this.Bi !== a)) {
            var b = this.Hc();
            b.type = 14;
            b.tc = a ? 1 : 0;
            this.oc = this.Zb = !1;
            this.Bi = a;
            this.Sl = null;
            this.Bi ? this.Nc(2) : this.Nc(0)
        }
    };
    f.prototype.Ks = function(a) {
        if (this.Ta) {
            var b = this.Hc();
            b.type = 13;
            b.tc = a ? 1 : 0;
            this.oc = this.Zb = !1
        }
    };
    f.prototype.Kq = function() {
        nc(this.eo, b);
        this.pe();
        this.Wd();
        var a = this.width / 2,
            c = this.height / 2;
        this.Eh(-a, c, a, c, a, -c, -a, -c);
        nc(b, this.hd);
        this.Wd()
    };
    f.prototype.Js = function(a, b, c) {
        this.Nc(3);
        var e = this.Hc();
        e.type = 12;
        e.ja || (e.ja = mc());
        e.ja[0] = a;
        e.ja[1] = b;
        e.ja[2] = c;
        e.ja[3] = 1;
        this.oc = this.Zb = !1
    };
    f.prototype.kz = function() {
        this.Nc(0)
    };
    f.prototype.Sy = function() {
        this.Nc(2)
    };
    f.prototype.Jy = function() {
        this.pf();
        this.J.flush()
    };
    var m = [],
        g = {};
    f.prototype.Nv = function() {
        y(m);
        g = {}
    };
    f.prototype.xf = function(a, b, c, e) {
        b = !!b;
        c = !!c;
        var l = a.src + "," + b + "," + c + (b ? ",undefined" : ""),
            d = null;
        if ("undefined" !== typeof a.src && g.hasOwnProperty(l)) return d = g[l], d.hk++, d;
        this.pf();
        var n = this.J,
            f = ka(a.width) && ka(a.height),
            d = n.createTexture();
        n.bindTexture(n.TEXTURE_2D, d);
        n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
        var k = n.RGBA,
            D = n.RGBA,
            q = n.UNSIGNED_BYTE;
        if (e && !this.vf) switch (e) {
            case 1:
                D = k = n.RGB;
                break;
            case 2:
                q = n.UNSIGNED_SHORT_4_4_4_4;
                break;
            case 3:
                q = n.UNSIGNED_SHORT_5_5_5_1;
                break;
            case 4:
                D = k = n.RGB, q = n.UNSIGNED_SHORT_5_6_5
        }
        if (1 === this.version && !f && b) {
            e = document.createElement("canvas");
            e.width = la(a.width);
            e.height = la(a.height);
            var u = e.getContext("2d");
            "undefined" !== typeof u.imageSmoothingEnabled ? u.imageSmoothingEnabled = c : (u.webkitImageSmoothingEnabled = c, u.mozImageSmoothingEnabled = c, u.msImageSmoothingEnabled = c);
            u.drawImage(a, 0, 0, a.width, a.height, 0, 0, e.width, e.height);
            n.texImage2D(n.TEXTURE_2D, 0, k, D, q, e)
        } else n.texImage2D(n.TEXTURE_2D, 0, k, D, q, a);
        b ? (n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, n.REPEAT), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, n.REPEAT)) : (n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, n.CLAMP_TO_EDGE), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, n.CLAMP_TO_EDGE));
        c ? (n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.LINEAR), (f || 2 <= this.version) && this.Bq ? (n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR_MIPMAP_LINEAR), n.generateMipmap(n.TEXTURE_2D)) : n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR)) : (n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.NEAREST), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.NEAREST));
        n.bindTexture(n.TEXTURE_2D, null);
        this.ig = null;
        d.Nf = a.width;
        d.Mf = a.height;
        d.hk = 1;
        d.oq = l;
        m.push(d);
        return g[l] = d
    };
    f.prototype.ud = function(a, b, c) {
        var e;
        this.pf();
        var g = this.J;
        this.vf && (e = !1);
        var d = g.createTexture();
        g.bindTexture(g.TEXTURE_2D, d);
        g.texImage2D(g.TEXTURE_2D, 0, g.RGBA, a, b, 0, g.RGBA, e ? g.UNSIGNED_SHORT_4_4_4_4 : g.UNSIGNED_BYTE, null);
        g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_S, g.CLAMP_TO_EDGE);
        g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_T, g.CLAMP_TO_EDGE);
        g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MAG_FILTER, c ? g.LINEAR : g.NEAREST);
        g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MIN_FILTER, c ? g.LINEAR : g.NEAREST);
        g.bindTexture(g.TEXTURE_2D, null);
        this.ig = null;
        d.Nf = a;
        d.Mf = b;
        m.push(d);
        return d
    };
    f.prototype.deleteTexture = function(a) {
        a && ("undefined" !== typeof a.hk && 1 < a.hk ? a.hk-- : (this.pf(), a === this.ig && (this.J.bindTexture(this.J.TEXTURE_2D, null), this.ig = null), a === this.jg && (this.J.activeTexture(this.J.TEXTURE1), this.J.bindTexture(this.J.TEXTURE_2D, null), this.J.activeTexture(this.J.TEXTURE0), this.jg = null), Fa(m, a), "undefined" !== typeof a.oq && delete g[a.oq], this.J.deleteTexture(a)))
    };
    f.prototype.Dd = function(a) {
        if (a !== this.Sl) {
            var b = this.Hc();
            b.type = 6;
            this.Sl = b.Fd = a;
            this.oc = this.Zb = !1
        }
    };
    pb = f
})();
(function() {
    function f(a) {
        if (a && (a.getContext || a.dc) && !a.c2runtime) {
            a.c2runtime = this;
            var b = this;
            this.Sc = (this.Zk = /crosswalk/i.test(navigator.userAgent) || /xwalk/i.test(navigator.userAgent) || !("undefined" === typeof window.c2isCrosswalk || !window.c2isCrosswalk)) || "undefined" !== typeof window.device && ("undefined" !== typeof window.device.cordova || "undefined" !== typeof window.device.phonegap) || "undefined" !== typeof window.c2iscordova && window.c2iscordova;
            this.pc = !!a.dc;
            this.hr = "undefined" !== typeof window.AppMobi || this.pc;
            this.ed = !!window.c2cocoonjs;
            this.yd = !!window.c2ejecta;
            this.ed && (CocoonJS.App.onSuspended.addEventListener(function() {
                b.setSuspended(!0)
            }), CocoonJS.App.onActivated.addEventListener(function() {
                b.setSuspended(!1)
            }));
            this.yd && (document.addEventListener("pagehide", function() {
                b.setSuspended(!0)
            }), document.addEventListener("pageshow", function() {
                b.setSuspended(!1)
            }), document.addEventListener("resize", function() {
                b.setSize(window.innerWidth, window.innerHeight)
            }));
            this.jb = this.pc || this.ed || this.yd;
            this.Di = /edge\//i.test(navigator.userAgent);
            this.vf = (/msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent) || /iemobile/i.test(navigator.userAgent)) && !this.Di;
            this.jr = /tizen/i.test(navigator.userAgent);
            this.Wk = /android/i.test(navigator.userAgent) && !this.jr && !this.vf && !this.Di;
            this.mr = (/iphone/i.test(navigator.userAgent) || /ipod/i.test(navigator.userAgent)) && !this.vf && !this.Di;
            this.cy = /ipad/i.test(navigator.userAgent);
            this.hh = this.mr || this.cy || this.yd;
            this.Un = (/chrome/i.test(navigator.userAgent) || /chromium/i.test(navigator.userAgent)) && !this.vf && !this.Di;
            this.fr = /amazonwebappplatform/i.test(navigator.userAgent);
            this.Vx = /firefox/i.test(navigator.userAgent);
            this.Yx = /safari/i.test(navigator.userAgent) && !this.Un && !this.vf && !this.Di;
            this.Zx = /windows/i.test(navigator.userAgent);
            this.$k = "undefined" !== typeof window.c2nodewebkit || "undefined" !== typeof window.c2nwjs || /nodewebkit/i.test(navigator.userAgent) || /nwjs/i.test(navigator.userAgent);
            this.kr = !("undefined" === typeof window.c2isWindows8 || !window.c2isWindows8);
            this.ay = !("undefined" === typeof window.c2isWindows8Capable || !window.c2isWindows8Capable);
            this.Ii = !("undefined" === typeof window.c2isWindowsPhone8 || !window.c2isWindowsPhone8);
            this.ao = !("undefined" === typeof window.c2isWindowsPhone81 || !window.c2isWindowsPhone81);
            this.$n = !!window.cr_windows10;
            this.Zn = this.kr || this.ay || this.ao || this.$n;
            this.Tx = !("undefined" === typeof window.c2isBlackberry10 || !window.c2isBlackberry10);
            this.Xk = this.Wk && !this.Un && !this.Zk && !this.Vx && !this.fr && !this.jb;
            this.devicePixelRatio = 1;
            this.$g = this.Sc || this.Zk || this.hr || this.ed || this.Wk || this.hh || this.Ii || this.ao || this.Tx || this.jr || this.yd;
            this.$g || (this.$g = /(blackberry|bb10|playbook|palm|symbian|nokia|windows\s+ce|phone|mobile|tablet|kindle|silk)/i.test(navigator.userAgent));
            this.Hi = !!(this.hh && this.Sc && window.webkit);
            this.Ln = null;
            this.Mx = "";
            this.Hi && (this.Ln = cordova && cordova.plugins && cordova.plugins.CorHttpd ? cordova.plugins.CorHttpd : null);
            "undefined" === typeof cr_is_preview || this.$k || "?nw" !== window.location.search && !/nodewebkit/i.test(navigator.userAgent) && !/nwjs/i.test(navigator.userAgent) || (this.$k = !0);
            this.canvas = a;
            this.qq = document.getElementById("c2canvasdiv");
            this.F = this.J = null;
            this.Gn = "(unavailable)";
            this.Ta = !1;
            this.Tf = 0;
            this.Ya = null;
            this.Gk = !1;
            this.bs = this.cs = 0;
            this.canvas.oncontextmenu = function(a) {
                a.preventDefault && a.preventDefault();
                return !1
            };
            this.canvas.onselectstart = function(a) {
                a.preventDefault && a.preventDefault();
                return !1
            };
            this.pc && (window.c2runtime = this);
            this.$k && (window.ondragover = function(a) {
                a.preventDefault();
                return !1
            }, window.ondrop = function(a) {
                a.preventDefault();
                return !1
            }, window.nwgui && window.nwgui.App.clearCache && window.nwgui.App.clearCache());
            this.Xk && "undefined" !== typeof jQuery && jQuery("canvas").parents("*").css("overflow", "visible");
            this.width = a.width;
            this.height = a.height;
            this.T = this.width;
            this.S = this.height;
            this.sk = this.width;
            this.ii = this.height;
            this.mh = window.innerWidth;
            this.kh = window.innerHeight;
            this.ra = !0;
            this.Fi = !1;
            Date.now || (Date.now = function() {
                return +new Date
            });
            this.plugins = [];
            this.types = {};
            this.H = [];
            this.bb = [];
            this.lo = {};
            this.Od = [];
            this.mn = {};
            this.Ge = [];
            this.$h = [];
            this.vm = [];
            this.Av = [];
            this.Bv = [];
            this.Qf = {};
            this.Wn = this.tf = !1;
            this.fd = 0;
            this.Vn = this.Yn = !1;
            this.Kd = [];
            this.Ci = !1;
            this.gl = this.Wo = "";
            this.Gb = null;
            this.Le = "";
            this.Bj = this.Vs = !1;
            this.Fk = [];
            this.Sf = this.Ee = 0;
            this.Sr = 30;
            this.an = this.Zi = 0;
            this.Cg = 1;
            this.rb = new ab;
            this.$e = new ab;
            this.ql = this.Jk = this.Xf = this.Bg = this.lg = this.un = this.dl = 0;
            this.Ym = null;
            this.zk = [];
            this.ln = [];
            this.Bk = -1;
            this.po = [
                []
            ];
            this.kp = this.kl = 0;
            this.Ol(null);
            this.Xr = this.bj = 0;
            this.ko = !0;
            this.li = 0;
            this.Cj = [];
            this.hp = this.No = -1;
            this.cl = !0;
            this.oh = 0;
            this.Ei = !1;
            this.nz = 0;
            this.Lg = null;
            this.Tc = this.Vq = !1;
            this.as = new ba;
            this.yo = new ba;
            this.zo = new ba;
            this.Rl = [];
            this.Td = new cb([]);
            this.gp = new cb([]);
            this.Kg = [];
            this.vi = {};
            this.lf = {};
            this.ef = {};
            this.Zh = {};
            this.lq = {};
            this.tr = this.fl = this.sb = this.Eb = this.sr = this.el = this.Na = null;
            this.Xh = this.bo = !1;
            this.vn = [null, null];
            this.Yf = 0;
            this.rn = "";
            this.Oe = {};
            this.yj = this.yf = null;
            this.Xs = "";
            this.pl = [];
            this.Ry()
        }
    }

    function d(a, b) {
        return 128 >= b ? a[3] : 256 >= b ? a[2] : 512 >= b ? a[1] : a[0]
    }

    function c() {
        try {
            return !!window.indexedDB
        } catch (a) {
            return !1
        }
    }

    function k(a) {
        a.target.result.createObjectStore("saves", {
            keyPath: "slot"
        })
    }

    function b(a, b, e, c) {
        try {
            var g = indexedDB.open("_C2SaveStates");
            g.onupgradeneeded = k;
            g.onerror = c;
            g.onsuccess = function(g) {
                g = g.target.result;
                g.onerror = c;
                g.transaction(["saves"], "readwrite").objectStore("saves").put({
                    slot: a,
                    data: b
                }).onsuccess = e
            }
        } catch (l) {
            c(l)
        }
    }

    function m(a, b, e) {
        try {
            var c = indexedDB.open("_C2SaveStates");
            c.onupgradeneeded = k;
            c.onerror = e;
            c.onsuccess = function(c) {
                c = c.target.result;
                c.onerror = e;
                var g = c.transaction(["saves"]).objectStore("saves").get(a);
                g.onsuccess = function() {
                    g.result ? b(g.result.data) : b(null)
                }
            }
        } catch (g) {
            e(g)
        }
    }

    function g() {
        ea("Reloading for continuous preview");
        window.c2cocoonjs ? CocoonJS.App.reload() : -1 < window.location.search.indexOf("continuous") ? window.location.reload(!0) : window.location = window.location + "?continuous"
    }

    function a(a) {
        var b, e = {};
        for (b in a) !a.hasOwnProperty(b) || a[b] instanceof ba || a[b] && "undefined" !== typeof a[b].YA || "spriteCreatedDestroyCallback" !== b && (e[b] = a[b]);
        return e
    }
    var h = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
    f.prototype.Ry = function() {
        var a = this;
        if (this.Hi) {
            var b = function() {
                a.$w(function(b) {
                    a.Ri(JSON.parse(b))
                }, function() {
                    alert("Error fetching data.js")
                })
            };
            this.Ln ? this.Ln.startServer({
                port: 0,
                localhost_only: !0
            }, function(e) {
                a.Mx = e;
                b()
            }, function(a) {
                console.log("Error starting local server: " +
                    a + ". Video playback will not work.");
                b()
            }) : (console.log("Local server unavailable. Video playback will not work."), b())
        } else {
            var e;
            this.Ii ? e = new ActiveXObject("Microsoft.XMLHTTP") : e = new XMLHttpRequest;
            var c = "data.js";
            if (this.kr || this.Ii || this.ao || this.$n) c = "data.json";
            e.open("GET", c, !0);
            var g = !1;
            if (!this.jb && "response" in e && "responseType" in e) try {
                e.responseType = "json", g = "json" === e.responseType
            } catch (l) {
                g = !1
            }
            if (!g && "responseType" in e) try {
                e.responseType = "text"
            } catch (d) {}
            if ("overrideMimeType" in e) try {
                e.overrideMimeType("application/json; charset=utf-8")
            } catch (n) {}
            this.Ii ? e.onreadystatechange = function() {
                4 === e.readyState && a.Ri(JSON.parse(e.responseText))
            } : (e.onload = function() {
                if (g) a.Ri(e.response);
                else if (a.yd) {
                    var b = e.responseText,
                        b = b.substr(b.indexOf("{"));
                    a.Ri(JSON.parse(b))
                } else a.Ri(JSON.parse(e.responseText))
            }, e.onerror = function(a) {
                fa("Error requesting " + c + ":");
                fa(a)
            });
            e.send()
        }
    };
    f.prototype.Px = function() {
        var a = this,
            b, e, c, g, l, d, n, q, h;
        this.hg = (!this.jb || this.yd || this.Sc) && this.zz && !this.Xk;
        0 === this.Ec && this.hh && (this.hg = !1);
        this.devicePixelRatio = this.hg ? window.devicePixelRatio || window.webkitDevicePixelRatio || window.mozDevicePixelRatio || window.msDevicePixelRatio || 1 : 1;
        this.hc();
        0 < this.Ec && this.setSize(window.innerWidth, window.innerHeight, !0);
        this.canvas.addEventListener("webglcontextlost", function(b) {
            b.preventDefault();
            a.my();
            ea("[Construct 2] WebGL context lost");
            window.cr_setSuspended(!0)
        }, !1);
        this.canvas.addEventListener("webglcontextrestored", function() {
            a.F.$q();
            a.F.wg(a.F.width, a.F.height, !0);
            a.Eb = null;
            a.sb = null;
            a.vn[0] = null;
            a.vn[1] = null;
            a.ny();
            a.ra = !0;
            ea("[Construct 2] WebGL context restored");
            window.cr_setSuspended(!1)
        }, !1);
        try {
            this.sw && (this.ed || this.yd || !this.jb) && (b = {
                alpha: !0,
                depth: !1,
                antialias: !1,
                powerPreference: "high-performance",
                failIfMajorPerformanceCaveat: !0
            }, this.J = this.canvas.getContext("webgl2", b) || this.canvas.getContext("webgl", b) || this.canvas.getContext("experimental-webgl", b))
        } catch (f) {}
        if (this.J) {
            if (b = this.J.getExtension("WEBGL_debug_renderer_info")) this.Gn = this.J.getParameter(b.UNMASKED_RENDERER_WEBGL) + " [" + this.J.getParameter(b.UNMASKED_VENDOR_WEBGL) + "]";
            this.Ta && (this.Gn += " [front-to-back enabled]");
            this.jb || (this.cc = document.createElement("canvas"), jQuery(this.cc).appendTo(this.canvas.parentNode), this.cc.oncontextmenu = function() {
                return !1
            }, this.cc.onselectstart = function() {
                return !1
            }, this.cc.width = Math.round(this.sk * this.devicePixelRatio), this.cc.height = Math.round(this.ii * this.devicePixelRatio), jQuery(this.cc).css({
                width: this.sk + "px",
                height: this.ii + "px"
            }), this.zs(), this.Ho = this.cc.getContext("2d"));
            this.F = new pb(this.J, this.$g, this.Ta);
            this.F.wg(this.canvas.width, this.canvas.height);
            this.F.Bq = 0 !== this.jw;
            this.Ya = null;
            b = 0;
            for (e = this.H.length; b < e; b++)
                for (l = this.H[b], c = 0, g = l.Y.length; c < g; c++) n = l.Y[c], n.wb = this.F.Fn(n.id), n.Qd = this.F.Lo(n.wb), this.Xh = this.Xh || this.F.oj(n.wb);
            b = 0;
            for (e = this.Od.length; b < e; b++) {
                q = this.Od[b];
                c = 0;
                for (g = q.Y.length; c < g; c++) n = q.Y[c], n.wb = this.F.Fn(n.id), n.Qd = this.F.Lo(n.wb);
                q.Vd();
                c = 0;
                for (g = q.ba.length; c < g; c++) {
                    h = q.ba[c];
                    l = 0;
                    for (d = h.Y.length; l < d; l++) n = h.Y[l], n.wb = this.F.Fn(n.id), n.Qd = this.F.Lo(n.wb), this.Xh = this.Xh || this.F.oj(n.wb);
                    h.Vd()
                }
            }
        } else {
            if (0 < this.Ec && this.pc) {
                this.canvas = null;
                document.oncontextmenu = function() {
                    return !1
                };
                document.onselectstart = function() {
                    return !1
                };
                this.Ya = AppMobi.canvas.getContext("2d");
                try {
                    this.Ya.samplingMode = this.Oa ? "smooth" : "sharp", this.Ya.globalScale = 1, this.Ya.HTML5CompatibilityMode = !0, this.Ya.imageSmoothingEnabled = this.Oa
                } catch (k) {}
                0 !== this.width && 0 !== this.height && (this.Ya.width = this.width, this.Ya.height = this.height)
            }
            this.Ya || (this.ed ? (b = {
                antialias: !!this.Oa,
                alpha: !0
            }, this.Ya = this.canvas.getContext("2d", b)) : (b = {
                alpha: !0
            }, this.Ya = this.canvas.getContext("2d", b)), this.Yl(this.Ya, this.Oa));
            this.Ho = this.cc = null
        }
        this.gt = function(b) {
            a.Wa(!1, b)
        };
        window == window.top || this.jb || this.Zn || this.Ii || (document.addEventListener("mousedown", function() {
            window.focus()
        }, !0), document.addEventListener("touchstart", function() {
            window.focus()
        }, !0));
        "undefined" !== typeof cr_is_preview && (this.ed && console.log("[Construct 2] In preview-over-wifi via CocoonJS mode"), -1 < window.location.search.indexOf("continuous") && (ea("Reloading for continuous preview"), this.gl = "__c2_continuouspreview", this.Bj = !0), this.Ay && !this.$g && (jQuery(window).focus(function() {
            a.setSuspended(!1)
        }), jQuery(window).blur(function() {
            var b = window.parent;
            b && b.document.hasFocus() || a.setSuspended(!0)
        })));
        window.addEventListener("blur", function() {
            a.Bh()
        });
        this.jb || (b = function(a) {
            if (ob(a) && document.activeElement && document.activeElement !== document.getElementsByTagName("body")[0] && document.activeElement.blur) try {
                document.activeElement.blur()
            } catch (b) {}
        }, "undefined" !== typeof PointerEvent ? document.addEventListener("pointerdown", b) : window.navigator.msPointerEnabled ? document.addEventListener("MSPointerDown", b) : document.addEventListener("touchstart", b), document.addEventListener("mousedown", b));
        0 === this.Ec && this.hg && 1 < this.devicePixelRatio && this.setSize(this.Ib, this.Hb, !0);
        this.kt();
        this.Hx();
        this.go();
        this.U = {}
    };
    f.prototype.setSize = function(a, b, e) {
        var c = 0,
            g = 0,
            l = 0,
            d = 0,
            d = 0;
        if (this.mh !== a || this.kh !== b || e) {
            this.mh = a;
            this.kh = b;
            var n = this.Ec;
            if ((l = (document.mozFullScreen || document.webkitIsFullScreen || !!document.msFullscreenElement || document.fullScreen || this.Ei) && !this.Sc) || 0 !== this.Ec || e) l && 0 < this.Yf && (n = this.Yf), e = this.devicePixelRatio, 4 <= n ? (l = this.Ib / this.Hb, a / b > l ? (l *= b, 5 === n ? (d = l * e / this.Ib, 1 < d ? d = Math.floor(d) : 1 > d && (d = 1 / Math.ceil(1 / d)), l = this.Ib * d / e, d = this.Hb * d / e, c = (a - l) / 2, g = (b - d) / 2, a = l, b = d) : (c = (a - l) / 2, a = l)) : (d = a / l, 5 === n ? (d = d * e / this.Hb, 1 < d ? d = Math.floor(d) : 1 > d && (d = 1 / Math.ceil(1 / d)), l = this.Ib * d / e, d = this.Hb * d / e, c = (a - l) / 2, g = (b - d) / 2, a = l) : g = (b - d) / 2, b = d)) : this.$k && this.Ei && 0 === this.Lq && (c = Math.floor((a -
                this.Ib) / 2), g = Math.floor((b - this.Hb) / 2), a = this.Ib, b = this.Hb), 2 > n && (this.di = e), this.sk = Math.round(a), this.ii = Math.round(b), this.width = Math.round(a * e), this.height = Math.round(b * e), this.ra = !0, this.At ? (this.T = this.width, this.S = this.height, this.ad = !0) : this.width < this.Ib && this.height < this.Hb || 1 === n ? (this.T = this.width, this.S = this.height, this.ad = !0) : (this.T = this.Ib, this.S = this.Hb, this.ad = !1, 2 === n ? (l = this.Ib / this.Hb, n = this.mh / this.kh, n < l ? this.T = this.S * n : n > l && (this.S = this.T / n)) : 3 === n && (l = this.Ib / this.Hb, n = this.mh /
                this.kh, n > l ? this.T = this.S * n : n < l && (this.S = this.T / n))), this.qq && !this.jb && (jQuery(this.qq).css({
                width: Math.round(a) + "px",
                height: Math.round(b) + "px",
                "margin-left": Math.floor(c) + "px",
                "margin-top": Math.floor(g) + "px"
            }), "undefined" !== typeof cr_is_preview && jQuery("#borderwrap").css({
                width: Math.round(a) + "px",
                height: Math.round(b) + "px"
            })), this.canvas && (this.canvas.width = Math.round(a * e), this.canvas.height = Math.round(b * e), this.yd ? (this.canvas.style.left = Math.floor(c) + "px", this.canvas.style.top = Math.floor(g) + "px", this.canvas.style.width = Math.round(a) + "px", this.canvas.style.height = Math.round(b) + "px") : this.hg && !this.jb && (this.canvas.style.width = Math.round(a) + "px", this.canvas.style.height = Math.round(b) + "px")), this.cc && (this.cc.width = Math.round(a * e), this.cc.height = Math.round(b * e), this.cc.style.width = this.sk + "px", this.cc.style.height = this.ii + "px"), this.F && this.F.wg(Math.round(a * e), Math.round(b * e)), this.pc && this.Ya && (this.Ya.width = Math.round(a), this.Ya.height = Math.round(b)), this.Ya && this.Yl(this.Ya, this.Oa), this.kt(), this.mr && !this.Sc && window.scrollTo(0, 0)
        }
    };
    f.prototype.kt = function() {
        if (this.Dv && 0 !== this.Fo) {
            var a = "portrait";
            2 === this.Fo && (a = "landscape");
            try {
                screen.orientation && screen.orientation.lock ? screen.orientation.lock(a).catch(function() {}) : screen.lockOrientation ? screen.lockOrientation(a) : screen.webkitLockOrientation ? screen.webkitLockOrientation(a) : screen.mozLockOrientation ? screen.mozLockOrientation(a) : screen.msLockOrientation && screen.msLockOrientation(a)
            } catch (b) {
                console && console.warn && console.warn("Failed to lock orientation: ", b)
            }
        }
    };
    f.prototype.my = function() {
        this.F.Nv();
        this.bo = !0;
        var a, b, e;
        a = 0;
        for (b = this.H.length; a < b; a++) e = this.H[a], e.gj && e.gj()
    };
    f.prototype.ny = function() {
        this.bo = !1;
        var a, b, e;
        a = 0;
        for (b = this.H.length; a < b; a++) e = this.H[a], e.hj && e.hj()
    };
    f.prototype.zs = function() {
        if (!this.jb) {
            var a = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || document.msFullscreenElement || this.Ei) && !this.Sc ? jQuery(this.canvas).offset() : jQuery(this.canvas).position();
            a.position = "absolute";
            jQuery(this.cc).css(a)
        }
    };
    var t = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame || window.oCancelAnimationFrame;
    f.prototype.setSuspended = function(a) {
        var b;
        if (a && !this.Fi)
            for (ea("[Construct 2] Suspending"), this.Fi = !0, -1 !== this.No && t && t(this.No), -1 !== this.hp && clearTimeout(this.hp), a = 0, b = this.Cj.length; a < b; a++) this.Cj[a](!0);
        else if (!a && this.Fi) {
            ea("[Construct 2] Resuming");
            this.Fi = !1;
            this.dl = Xa();
            this.lg = Xa();
            a = this.Zi = this.Jk = 0;
            for (b = this.Cj.length; a < b; a++) this.Cj[a](!1);
            this.Wa(!1)
        }
    };
    f.prototype.fq = function(a) {
        this.Cj.push(a)
    };
    f.prototype.cf = function(a) {
        return this.pl[a]
    };
    f.prototype.Ri = function(a) {
        a && a.project || fa("Project model unavailable");
        a = a.project;
        this.name = a[0];
        this.Jq = a[1];
        this.Ec = a[12];
        this.Lq = a[12];
        this.Ib = a[10];
        this.Hb = a[11];
        this.vs = this.Ib / 2;
        this.ws = this.Hb / 2;
        this.jb && !this.yd && (4 <= a[12] || 0 === a[12]) && (ea("[Construct 2] Letterbox scale fullscreen modes are not supported on this platform - falling back to 'Scale outer'"), this.Lq = this.Ec = 3);
        this.sp = a[18];
        this.zf = a[19];
        if (0 === this.zf) {
            var b = new Image;
            b.crossOrigin = "anonymous";
            this.Ms(b, "loading-logo.png");
            this.yf = {
                ll: b
            }
        } else if (4 === this.zf) {
            b = new Image;
            b.src = "";
            var e = new Image;
            e.src = "";
            var c = new Image;
            c.src = "";
            var g = new Image;
            g.src = "";
            var l = new Image;
            l.src = "";
            var d = new Image;
            d.src = "";
            var n = new Image;
            n.src = "";
            var q = new Image;
            q.src = "";
            var h = new Image;
            h.src = "";
            var f = new Image;
            f.src = "";
            var k = new Image;
            k.src = "";
            var m = new Image;
            m.src = "";
            this.yf = {
                ll: [b, e, c, g],
                Gy: [l, d, n, q],
                Gz: [h, f, k, m]
            }
        }
        this.bj = a[21];
        this.pl = rc();
        this.re = new O(this);
        b = 0;
        for (e = a[2].length; b < e; b++) n = a[2][b], c = this.cf(n[0]), qb(n, c.prototype), q = new c(this), q.fm = n[1], q.wf = n[2], q.eB = n[5], q.Tr = n[9], q.P && q.P(), this.plugins.push(q);
        this.pl = rc();
        b = 0;
        for (e = a[3].length; b < e; b++) {
            n = a[3][b];
            l = this.cf(n[1]);
            q = null;
            c = 0;
            for (g = this.plugins.length; c < g; c++)
                if (this.plugins[c] instanceof l) {
                    q = this.plugins[c];
                    break
                }
            h = new q.qa(q);
            h.name = n[0];
            h.M = n[2];
            h.Tn = n[3].slice(0);
            h.Bz = n[3].length;
            h.Ev = n[4];
            h.dx = n[5];
            h.ta = n[11];
            h.M ? (h.rh = [], h.He = this.li++, h.$a = null) : (h.rh = null, h.He = -1, h.$a = []);
            h.Dk = null;
            h.Tg = null;
            h.Dq = null;
            h.qc = !1;
            h.Qc = null;
            n[6] ? (h.Ej = n[6][0], h.pm = n[6][1], h.Ag = n[6][2]) : (h.Ej = null, h.pm = 0, h.Ag = 0);
            n[7] ? h.Pc = n[7] : h.Pc = null;
            h.index = b;
            h.d = [];
            h.wk = [];
            h.Ve = [new rb(h)];
            h.de = 0;
            h.vd = null;
            h.Rv = 0;
            h.Oh = !0;
            h.xm = sb;
            h.Bn = tb;
            h.ox = ub;
            h.ga = vb;
            h.pj = wb;
            h.Nl = xb;
            h.vg = yb;
            h.Lk = Ab;
            h.xn = Bb;
            h.An = Cb;
            h.sd = Db;
            h.Cn = Eb;
            h.pk = new db(this.Ib, this.Hb);
            h.ak = !0;
            h.bk = !1;
            h.U = {};
            h.toString = Fb;
            h.bb = [];
            c = 0;
            for (g = n[8].length; c < g; c++) {
                f = n[8][c];
                k = this.cf(f[1]);
                m = null;
                l = 0;
                for (d = this.bb.length; l < d; l++)
                    if (this.bb[l] instanceof k) {
                        m = this.bb[l];
                        break
                    }
                m || (m = new k(this), m.Vr = [], m.ol = new ba, m.P && m.P(), this.bb.push(m)); - 1 === m.Vr.indexOf(h) && m.Vr.push(h);
                l = new m.qa(m, h);
                l.name = f[0];
                l.ta = f[2];
                l.P();
                h.bb.push(l)
            }
            h.global = n[9];
            h.Xn = n[10];
            h.Y = [];
            c = 0;
            for (g = n[12].length; c < g; c++) h.Y.push({
                id: n[12][c][0],
                name: n[12][c][1],
                wb: -1,
                Qd: !1,
                u: !0,
                index: c
            });
            h.uB = n[13];
            this.sp && !h.M && !h.Xn && q.wf || h.P();
            h.name && (this.types[h.name] = h);
            this.H.push(h);
            q.fm && (c = new q.ca(h), c.uid = this.bj++, c.Cs = this.Xr++, c.dg = 0, c.si = Gb, c.toString = Hb, c.D = n[14], c.P(), h.d.push(c), this.Oe[c.uid.toString()] = c)
        }
        b = 0;
        for (e = a[4].length; b < e; b++)
            for (l = a[4][b], d = this.H[l[0]], c = 1, g = l.length; c < g; c++) n = this.H[l[c]], n.$a.push(d), d.rh.push(n);
        b = 0;
        for (e = a[28].length; b < e; b++) {
            l = a[28][b];
            d = [];
            c = 0;
            for (g = l.length; c < g; c++) d.push(this.H[l[c]]);
            c = 0;
            for (g = d.length; c < g; c++) d[c].qc = !0, d[c].Qc = d
        }
        if (0 < this.li)
            for (b = 0, e = this.H.length; b < e; b++)
                if (n = this.H[b], !n.M && n.$a.length) {
                    n.Dk = Array(this.li);
                    n.Tg = Array(this.li);
                    n.Dq = Array(this.li);
                    h = [];
                    c = m = k = f = 0;
                    for (g = n.$a.length; c < g; c++)
                        for (q = n.$a[c], n.Dk[q.He] = f, f += q.Bz, n.Tg[q.He] = k, k += q.Ev, n.Dq[q.He] = m, m += q.dx, l = 0, d = q.Y.length; l < d; l++) h.push(ya({}, q.Y[l]));
                    n.Y = h.concat(n.Y);
                    c = 0;
                    for (g = n.Y.length; c < g; c++) n.Y[c].index = c
                }
        b = 0;
        for (e = a[5].length; b < e; b++) n = a[5][b], c = new Ib(this, n), this.lo[c.name] = c, this.Od.push(c);
        b = 0;
        for (e = a[6].length; b < e; b++) n = a[6][b], c = new Jb(this, n), this.mn[c.name] = c, this.Ge.push(c);
        b = 0;
        for (e = this.Ge.length; b < e; b++) this.Ge[b].kb();
        b = 0;
        for (e = this.Ge.length; b < e; b++) this.Ge[b].np();
        b = 0;
        for (e = this.vm.length; b < e; b++) this.vm[b].kb();
        y(this.vm);
        this.Cv = a[7];
        this.rn = a[8];
        this.kd = a[9];
        this.di = 1;
        this.sw = a[13];
        this.Oa = a[14];
        this.tq = a[15];
        this.zz = a[17];
        this.Fo = a[20];
        this.Dv = 0 < this.Fo;
        this.Ay = a[22];
        this.ad = this.At = a[23];
        this.jw = a[24];
        this.Hy = a[25];
        this.Ta = a[27] && !this.vf;
        this.jm = Date.now();
        y(this.pl);
        this.Px()
    };
    var e = !1;
    f.prototype.Cm = function(a, b) {
        a.cocoonLazyLoad = !0;
        a.onerror = function(b) {
            e = a.nq = !0;
            console && console.error && console.error("Error loading image '" + a.src + "': ", b)
        };
        this.yd ? a.src = b : a.src || ("undefined" !== typeof XAPKReader ? XAPKReader.get(b, function(b) {
            a.src = b
        }, function(c) {
            e = a.nq = !0;
            console && console.error && console.error("Error extracting image '" + b + "' from expansion file: ", c)
        }) : (a.crossOrigin = "anonymous", this.Ms(a, b)));
        this.$h.push(a)
    };
    f.prototype.bx = function(a) {
        var b, e;
        b = 0;
        for (e = this.$h.length; b < e; b++)
            if (this.$h[b].Ov === a) return this.$h[b];
        return null
    };
    var l = 0,
        p = !1;
    f.prototype.Hx = function() {
        this.Lg && (l = this.Lg.hz(this.Cv))
    };
    f.prototype.jq = function() {
        var a = l,
            b = 0,
            e = 0,
            c = !0,
            g, d, e = 0;
        for (g = this.$h.length; e < g; e++) {
            d = this.$h[e];
            var n = d.bn;
            if (!n || 0 >= n) n = 5E4;
            a += n;
            d.src && (d.complete || d.loaded) && !d.nq ? b += n : c = !1
        }
        c && this.Hy && this.Lg && (p || (this.Lg.oz(), p = !0), e = this.Lg.qx(), b += e, e < l && (c = !1));
        this.la = 0 == a ? 1 : b / a;
        return c
    };
    var n = !1;
    f.prototype.go = function() {
        if (this.Ya || this.F) {
            var a = this.Ya || this.Ho;
            this.cc && this.zs();
            var b = window.innerWidth,
                c = window.innerHeight;
            this.mh === b && this.kh === c || this.setSize(b, c);
            this.la = 0;
            this.rr = -1;
            var g = this;
            if (this.jq() && (4 !== this.zf || n)) this.Ix();
            else {
                c = Date.now() - this.jm;
                if (a) {
                    var l = this.width,
                        d = this.height,
                        b = this.devicePixelRatio;
                    if (3 > this.zf && (this.ed || 500 <= c && this.rr != this.la)) {
                        a.clearRect(0, 0, l, d);
                        var c = l / 2,
                            d = d / 2,
                            l = 0 === this.zf && this.yf.ll.complete,
                            q = 40 * b,
                            f = 0,
                            k = 80 * b,
                            m;
                        if (l) {
                            var u = this.yf.ll,
                                k = u.width * b;
                            m = u.height * b;
                            q = k / 2;
                            f = m / 2;
                            a.drawImage(u, qa(c - q), qa(d - f), k, m)
                        }
                        1 >= this.zf ? (c = qa(c - q) + .5, d = qa(d + (f + (l ? 12 * b : 0))) + .5, a.fillStyle = e ? "red" : "DodgerBlue", a.fillRect(c, d, Math.floor(k * this.la), 6 * b), a.strokeStyle = "black", a.strokeRect(c, d, k, 6 * b), a.strokeStyle = "white", a.strokeRect(c - 1 * b, d - 1 * b, k + 2 * b, 8 * b)) : 2 === this.zf && (a.font = this.yd ? "12pt ArialMT" : "12pt Arial", a.fillStyle = e ? "#f00" : "#999", a.tB = "middle", b = Math.round(100 * this.la) + "%", l = a.measureText ? a.measureText(b) : null, a.fillText(b, c - (l ? l.width : 0) / 2, d));
                        this.rr = this.la
                    } else if (4 === this.zf) {
                        this.pw(a);
                        h ? h(function() {
                            g.go()
                        }) : setTimeout(function() {
                            g.go()
                        }, 16);
                        return
                    }
                }
                setTimeout(function() {
                    g.go()
                }, this.ed ? 10 : 100)
            }
        }
    };
    var L = -1,
        M = "undefined" === typeof cr_is_preview ? 200 : 0,
        D = !0,
        q = !1,
        u = 0,
        N = 0,
        z = "undefined" === typeof cr_is_preview ?
        3E3 : 0,
        v = null,
        C = null,
        x = 0;
    f.prototype.pw = function(a) {
        if (!n) {
            for (var b = Math.ceil(this.width), c = Math.ceil(this.height), g = this.yf.ll, l = this.yf.Gy, h = this.yf.Gz, f = 0; 4 > f; ++f)
                if (!g[f].complete || !l[f].complete || !h[f].complete) return;
            0 === x && (L = Date.now());
            var f = Date.now(),
                k = !1,
                m = a,
                p, t;
            D || q ? (a.clearRect(0, 0, b, c), v && v.width === b && v.height === c || (v = document.createElement("canvas"), v.width = b, v.height = c, C = v.getContext("2d")), m = C, k = !0, D && 1 === x && (L = Date.now())) : a.globalAlpha = 1;
            m.fillStyle = "#333333";
            m.fillRect(0, 0, b, c);
            256 < this.ii ? (p = Ga(.22 * c, 105, .6 * b), t = .25 * p, m.drawImage(d(l, p), .5 * b - p / 2, .2 * c - t / 2, p, t), t = p = Math.min(.395 * c, .95 * b), m.drawImage(d(g, p), .5 * b - p / 2, .485 * c - t / 2, p, t), p = Ga(.22 * c, 105, .6 * b), t = .25 * p, m.drawImage(d(h, p), .5 * b - p / 2, .868 * c - t / 2, p, t), m.fillStyle = "#3C3C3C", p = b, t = Math.max(.005 * c, 2), m.fillRect(0, .8 * c - t / 2, p, t), m.fillStyle = e ? "red" : "#E0FF65", p = b * this.la, m.fillRect(.5 * b - p / 2, .8 * c - t / 2, p, t)) : (t = p = .55 * c, m.drawImage(d(g, p), .5 * b - p / 2, .45 * c - t / 2, p, t), m.fillStyle = "#3C3C3C", p = b, t = Math.max(.005 * c, 2), m.fillRect(0, .85 * c -
                t / 2, p, t), m.fillStyle = e ? "red" : "#E0FF65", p = b * this.la, m.fillRect(.5 * b - p / 2, .85 * c - t / 2, p, t));
            k && (D ? a.globalAlpha = 0 === x ? 0 : Math.min((f - L) / 300, 1) : q && (a.globalAlpha = Math.max(1 - (f - N) / 300, 0)), a.drawImage(v, 0, 0, b, c));
            D && 300 <= f - L && 2 <= x && (D = !1, u = f);
            !D && f - u >= z && !q && 1 <= this.la && (q = !0, N = f);
            if (q && f - N >= 300 + M || "undefined" !== typeof cr_is_preview && 1 <= this.la && 500 > Date.now() - L) n = !0, q = D = !1, this.yf = C = v = null;
            ++x
        }
    };
    f.prototype.Ix = function() {
        this.cc && (this.canvas.parentNode.removeChild(this.cc), this.cc = this.Ho = null);
        this.jm =
            Date.now();
        this.lg = Xa();
        var a, b, e;
        if (this.sp)
            for (a = 0, b = this.H.length; a < b; a++) e = this.H[a], e.M || e.Xn || !e.Da.wf || e.P();
        else this.cl = !1;
        a = 0;
        for (b = this.Od.length; a < b; a++) this.Od[a].Pv();
        2 <= this.Ec && (a = this.Ib / this.Hb, b = this.width / this.height, this.di = 2 !== this.Ec && b > a || 2 === this.Ec && b < a ? this.height / this.Hb : this.width / this.Ib);
        this.Jq ? this.lo[this.Jq].ep() : this.Od[0].ep();
        this.sp || (this.oh = 1, this.trigger(O.prototype.e.Ip, null), window.C2_RegisterSW && window.C2_RegisterSW());
        navigator.splashscreen && navigator.splashscreen.hide && navigator.splashscreen.hide();
        a = 0;
        for (b = this.H.length; a < b; a++) e = this.H[a], e.ds && e.ds();
        document.hidden || document.webkitHidden || document.mozHidden || document.msHidden ? window.cr_setSuspended(!0) : this.Wa(!1);
        this.pc && AppMobi.webview.execute("onGameReady();")
    };
    f.prototype.Wa = function(a, b, e) {
        if (this.Na) {
            var c = Xa();
            if (e || !this.Fi || a) {
                a || (h ? this.No = h(this.gt) : this.hp = setTimeout(this.gt, this.$g ? 1 : 16));
                b = b || c;
                var g = this.Ec;
                ((e = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement) && !this.Sc) || this.Ei) && 0 < this.Yf && (g = this.Yf);
                if (0 < g) {
                    var g = window.innerWidth,
                        l = window.innerHeight;
                    this.mh === g && this.kh === l || this.setSize(g, l)
                }
                this.jb || (e ? this.Gk || (this.Gk = !0) : this.Gk ? (this.Gk = !1, 0 === this.Ec && this.setSize(Math.round(this.cs / this.devicePixelRatio), Math.round(this.bs / this.devicePixelRatio), !0)) : (this.cs = this.width, this.bs = this.height));
                this.cl && (e = this.jq(), this.oh = this.la, e && (this.cl = !1, this.la = 1, this.trigger(O.prototype.e.Ip, null), window.C2_RegisterSW && window.C2_RegisterSW()));
                this.gy(b);
                !this.ra && !this.ed || this.bo || this.Bj || a || (this.ra = !1, this.F ? this.Wb() : this.Zc(), this.yj && (this.canvas && this.canvas.toDataURL && (this.Xs = this.canvas.toDataURL(this.yj[0], this.yj[1]), window.cr_onSnapshot && window.cr_onSnapshot(this.Xs), this.trigger(O.prototype.e.ku, null)), this.yj = null));
                this.dB || (this.Bg++, this.Xf++, this.Jk++);
                this.Zi += Xa() - c
            }
        }
    };
    f.prototype.gy = function(a) {
        var b, e, c, g, l, d, n, h;
        1E3 <= a - this.lg && (this.lg += 1E3, 1E3 <= a - this.lg && (this.lg = a), this.un = this.Jk, this.Jk = 0, this.an = this.Zi, this.Zi = 0);
        b = 0;
        0 !== this.dl && (b = a - this.dl, 0 > b && (b = 0), this.Sf = b /= 1E3, .5 < this.Sf ? this.Sf = 0 : this.Sf > 1 / this.Sr && (this.Sf = 1 / this.Sr));
        this.dl = a;
        this.Ee = this.Sf * this.Cg;
        this.rb.add(this.Ee);
        this.$e.add(b);
        a = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement || this.Ei) && !this.Sc;
        2 <= this.Ec || a && 0 < this.Yf ? (b = this.Ib / this.Hb, e = this.width / this.height, c = this.Ec, a && 0 < this.Yf && (c = this.Yf), this.di = 2 !== c && e > b || 2 === c && e < b ? this.height / this.Hb : this.width / this.Ib, this.Na && (this.Na.Xo(this.Na.scrollX), this.Na.Yo(this.Na.scrollY))) : this.di = this.hg ? this.devicePixelRatio : 1;
        this.hc();
        this.fd++;
        this.re.Xy();
        this.fd--;
        this.hc();
        this.fd++;
        e = this.as.Ye();
        a = 0;
        for (b = e.length; a < b; a++) e[a].nB();
        a = 0;
        for (b = this.H.length; a < b; a++)
            if (d = this.H[a], !d.M && (d.bb.length || d.$a.length))
                for (e = 0, c = d.d.length; e < c; e++)
                    for (n = d.d[e], g = 0, l = n.V.length; g < l; g++) n.V[g].Wa();
        a = 0;
        for (b = this.H.length; a < b; a++)
            if (d = this.H[a], !d.M && (d.bb.length || d.$a.length))
                for (e = 0, c = d.d.length; e < c; e++)
                    for (n = d.d[e], g = 0, l = n.V.length; g < l; g++) h = n.V[g], h.Fy && h.Fy();
        e = this.yo.Ye();
        a = 0;
        for (b = e.length; a < b; a++) e[a].Wa();
        this.fd--;
        this.Jx();
        for (a = 0; this.Ym && 10 > a++;) this.Aq(this.Ym);
        a = 0;
        for (b = this.Ge.length; a < b; a++) this.Ge[a].Kn = !1;
        this.Na.Vf && this.Na.Vf.ub();
        y(this.Rl);
        this.ko = !1;
        this.fd++;
        a = 0;
        for (b = this.H.length; a < b; a++)
            if (d = this.H[a], !d.M && (d.bb.length || d.$a.length))
                for (e = 0, c = d.d.length; e < c; e++)
                    for (n = d.d[e], g = 0, l = n.V.length; g < l; g++) h = n.V[g], h.Gj && h.Gj();
        e = this.zo.Ye();
        a = 0;
        for (b = e.length; a < b; a++) e[a].Gj();
        this.fd--
    };
    f.prototype.Bh = function() {
        var a, b, e, c, g, l, d, n, h;
        a = 0;
        for (b = this.H.length; a < b; a++)
            if (d = this.H[a], !d.M)
                for (e = 0, c = d.d.length; e < c; e++)
                    if (n = d.d[e], n.Bh && n.Bh(), n.V)
                        for (g = 0, l = n.V.length; g < l; g++) h = n.V[g], h.Bh && h.Bh()
    };
    f.prototype.Aq = function(a) {
        var b = this.Na;
        this.Na.pz();
        var e, c, g;
        if (this.F)
            for (e = 0, c = this.H.length; e < c; e++) g = this.H[e], g.M || !g.Jj || g.global && 0 !== g.d.length || -1 !== a.yi.indexOf(g) || g.Jj();
        b == a && y(this.re.Oc);
        y(this.Rl);
        this.Fs(!0);
        a.ep();
        this.Fs(!1);
        this.ko = this.ra = !0;
        this.hc()
    };
    f.prototype.Fs = function(a) {
        var b, e, c, g, l, d, n, h, q;
        b = 0;
        for (e = this.bb.length; b < e; b++) c = this.bb[b], a ? c.cj && c.cj() : c.fj && c.fj();
        b = 0;
        for (e = this.H.length; b < e; b++)
            if (c = this.H[b], c.global || c.Da.fm)
                for (g = 0, l = c.d.length; g < l; g++)
                    if (d = c.d[g], a ? d.cj && d.cj() : d.fj && d.fj(), d.V)
                        for (n = 0, h = d.V.length; n < h; n++) q = d.V[n], a ? q.cj && q.cj() : q.fj && q.fj()
    };
    f.prototype.Hj = function(a) {
        this.yo.add(a)
    };
    f.prototype.sz = function(a) {
        this.zo.add(a)
    };
    f.prototype.Zf = function(a) {
        return a && -1 !== a.aj ? this.Sf * a.aj : this.Ee
    };
    f.prototype.Zc = function() {
        this.Na.Zc(this.Ya);
        this.pc && this.Ya.present()
    };
    f.prototype.Wb = function() {
        this.Ta && (this.Tf = 1, this.Na.Rf(this.F));
        this.Na.Wb(this.F);
        this.F.Jy()
    };
    f.prototype.Om = function(a) {
        a && this.zk.push(a)
    };
    f.prototype.Qy = function(a) {
        Fa(this.zk, a)
    };
    f.prototype.qi = function(a) {
        a = a.toString();
        return this.Oe.hasOwnProperty(a) ? this.Oe[a] : null
    };
    var J = [];
    f.prototype.we = function(a) {
        var b, e;
        b = a.type.name;
        var c = null;
        if (this.Qf.hasOwnProperty(b)) {
            if (c = this.Qf[b], c.contains(a)) return
        } else c = J.length ? J.pop() : new ba, this.Qf[b] = c;
        c.add(a);
        this.tf = !0;
        if (a.qc)
            for (b = 0, e = a.siblings.length; b < e; b++) this.we(a.siblings[b]);
        this.Wn && c.Yh.push(a);
        this.Vn || (this.fd++, this.trigger(Object.getPrototypeOf(a.type.Da).e.nu, a), this.fd--)
    };
    f.prototype.hc = function() {
        if (this.tf) {
            var a, b, e, c, g, l;
            this.Wn = !0;
            e = 0;
            for (g = this.Kd.length; e < g; ++e)
                for (a = this.Kd[e], b = a.type, b.d.push(a), c = 0, l = b.$a.length; c < l; ++c) b.$a[c].d.push(a), b.$a[c].Oh = !0;
            y(this.Kd);
            this.bu();
            Wa(this.Qf);
            this.tf = this.Wn = !1
        }
    };
    f.prototype.bu = function() {
        for (var a in this.Qf) this.Qf.hasOwnProperty(a) && this.Ft(this.Qf[a])
    };
    f.prototype.Ft = function(a) {
        var b = a.Ye(),
            e = b[0].type,
            c, g, l, d, n, h;
        Ya(e.d, a);
        e.Oh = !0;
        0 === e.d.length && (e.bk = !1);
        c = 0;
        for (g = e.$a.length; c < g; ++c) h = e.$a[c], Ya(h.d, a), h.Oh = !0;
        c = 0;
        for (g = this.re.Oc.length; c < g; ++c)
            if (n = this.re.Oc[c], n.yc.hasOwnProperty(e.index) && Ya(n.yc[e.index].Je, a), !e.M)
                for (l = 0, d = e.$a.length; l < d; ++l) h = e.$a[l], n.yc.hasOwnProperty(h.index) && Ya(n.yc[h.index].Je, a);
        if (n = b[0].q) {
            if (n.qd)
                for (l = n.d, c = 0, g = l.length; c < g; ++c) d = l[c], a.contains(d) && (d.Ra(), n.fc.update(d, d.Ic, null), d.Ic.set(0, 0, -1, -1));
            Ya(n.d, a);
            n.uj(0)
        }
        for (c = 0; c < b.length; ++c) this.Et(b[c], e);
        a.clear();
        J.push(a);
        this.ra = !0
    };
    f.prototype.Et = function(a, b) {
        var e, c, g;
        e = 0;
        for (c = this.zk.length; e < c; ++e) this.zk[e](a);
        a.mf && b.pk.update(a, a.mf, null);
        (e = a.q) && e.Fh(a, !0);
        if (a.V)
            for (e = 0, c = a.V.length; e < c; ++e) g = a.V[e], g.tg && g.tg(), g.behavior.ol.remove(a);
        this.as.remove(a);
        this.yo.remove(a);
        this.zo.remove(a);
        a.tg && a.tg();
        this.Oe.hasOwnProperty(a.uid.toString()) && delete this.Oe[a.uid.toString()];
        this.ql--;
        100 > b.wk.length && b.wk.push(a)
    };
    f.prototype.cn = function(a, b, e, c) {
        if (a.M) {
            var g = qa(Math.random() * a.rh.length);
            return this.cn(a.rh[g], b, e, c)
        }
        return a.vd ? this.nf(a.vd, b, !1, e, c, !1) : null
    };
    var I = [];
    f.prototype.nf = function(a, b, e, c, g, l) {
        var d, n, h, q;
        if (!a) return null;
        var f = this.H[a[1]],
            k = f.Da.wf;
        if (this.cl && k && !f.Xn || k && !this.F && 11 === a[0][11]) return null;
        var m = b;
        k || (b = null);
        var p;
        f.wk.length ? (p = f.wk.pop(), p.ld = !0, f.Da.ca.call(p, f)) : (p = new f.Da.ca(f), p.ld = !1);
        !e || l || this.Oe.hasOwnProperty(a[2].toString()) ? p.uid = this.bj++ : p.uid = a[2];
        this.Oe[p.uid.toString()] = p;
        p.Cs = this.Xr++;
        p.dg = f.d.length;
        d = 0;
        for (n = this.Kd.length; d < n; ++d) this.Kd[d].type === f && p.dg++;
        p.si = Gb;
        p.toString = Hb;
        h = a[3];
        if (p.ld) Wa(p.U);
        else {
            p.U = {};
            if ("undefined" !== typeof cr_is_preview)
                for (p.dr = [], p.dr.length = h.length, d = 0, n = h.length; d < n; d++) p.dr[d] = h[d][1];
            p.Db = [];
            p.Db.length = h.length
        }
        d = 0;
        for (n = h.length; d < n; d++) p.Db[d] = h[d][0];
        if (k) {
            var u = a[0];
            p.x = ha(c) ? u[0] : c;
            p.y = ha(g) ? u[1] : g;
            p.z = u[2];
            p.width = u[3];
            p.height = u[4];
            p.depth = u[5];
            p.j = u[6];
            p.opacity = u[7];
            p.uc = u[8];
            p.vc = u[9];
            p.ic = u[10];
            d = u[11];
            !this.F && f.Y.length && (p.ic = d);
            p.fi = kb(p.ic);
            this.J && lb(p, p.ic, this.J);
            if (p.ld) {
                d = 0;
                for (n = u[12].length; d < n; d++)
                    for (h = 0, q = u[12][d].length; h < q; h++) p.cb[d][h] = u[12][d][h];
                p.Xa.set(0, 0, 0, 0);
                p.mf.set(0, 0, -1, -1);
                p.Ic.set(0, 0, -1, -1);
                p.Dc.Kh(p.Xa);
                y(p.Sm)
            } else {
                p.cb = u[12].slice(0);
                d = 0;
                for (n = p.cb.length; d < n; d++) p.cb[d] = u[12][d].slice(0);
                p.Ba = [];
                p.df = [];
                p.df.length = f.Y.length;
                p.Xa = new wa(0, 0, 0, 0);
                p.mf = new wa(0, 0, -1, -1);
                p.Ic = new wa(0, 0, -1, -1);
                p.Dc = new xa;
                p.Sm = [];
                p.Ma = Kb;
                p.zv = Lb;
                p.jc = Mb;
                p.Ra = Nb;
                p.wt = Ob;
                p.rp = Pb;
                p.ge = Qb
            }
            p.Th = !1;
            p.wz = 0;
            p.vz = 0;
            p.uz = null;
            14 === u.length && (p.Th = !0, p.wz = u[13][0], p.vz = u[13][1], p.uz = u[13][2]);
            d = 0;
            for (n = f.Y.length; d < n; d++) p.df[d] = !0;
            p.Te = !0;
            p.Vd = Rb;
            p.Vd();
            p.xt = !!p.Ba.length;
            p.gk = !0;
            p.Vm = !0;
            f.ak = !0;
            p.visible = !0;
            p.aj = -1;
            p.q = b;
            p.Xd = b.d.length;
            p.Tf = 0;
            "undefined" === typeof p.Ga && (p.Ga = null);
            this.ra = p.Of = !0
        }
        var z;
        y(I);
        d = 0;
        for (n = f.$a.length; d < n; d++) I.push.apply(I, f.$a[d].bb);
        I.push.apply(I, f.bb);
        if (p.ld)
            for (d = 0, n = I.length; d < n; d++) {
                var v = I[d];
                z = p.V[d];
                z.ld = !0;
                v.behavior.ca.call(z, v, p);
                u = a[4][d];
                h = 0;
                for (q = u.length; h < q; h++) z.D[h] = u[h];
                z.P();
                v.behavior.ol.add(p)
            } else
                for (p.V = [], d = 0, n = I.length; d < n; d++) v = I[d], z = new v.behavior.ca(v, p), z.ld = !1, z.D = a[4][d].slice(0), z.P(), p.V.push(z), v.behavior.ol.add(p);
        u = a[5];
        if (p.ld)
            for (d = 0, n = u.length; d < n; d++) p.D[d] = u[d];
        else p.D = u.slice(0);
        this.Kd.push(p);
        this.tf = !0;
        b && (b.ci(p, !0), 1 !== b.Bd || 1 !== b.Cd) && (f.bk = !0);
        this.ql++;
        if (f.qc) {
            if (p.qc = !0, p.ld ? y(p.siblings) : p.siblings = [], !e && !l) {
                d = 0;
                for (n = f.Qc.length; d < n; d++)
                    if (f.Qc[d] !== f) {
                        if (!f.Qc[d].vd) return null;
                        p.siblings.push(this.nf(f.Qc[d].vd, m, !1, k ? p.x : c, k ? p.y : g, !0))
                    }
                d = 0;
                for (n = p.siblings.length; d < n; d++)
                    for (p.siblings[d].siblings.push(p), h = 0; h < n; h++) d !== h && p.siblings[d].siblings.push(p.siblings[h])
            }
        } else p.qc = !1, p.siblings = null;
        p.P();
        d = 0;
        for (n = p.V.length; d < n; d++) p.V[d].Ey && p.V[d].Ey();
        return p
    };
    f.prototype.Nk = function(a) {
        var b, e;
        b = 0;
        for (e = this.Na.ba.length; b < e; b++) {
            var c = this.Na.ba[b];
            if (nb(c.name, a)) return c
        }
        return null
    };
    f.prototype.Vg = function(a) {
        a = qa(a);
        0 > a && (a = 0);
        a >= this.Na.ba.length && (a = this.Na.ba.length - 1);
        return this.Na.ba[a]
    };
    f.prototype.Mk = function(a) {
        return ia(a) ? this.Vg(a) : this.Nk(a.toString())
    };
    f.prototype.Zm = function(a) {
        var b, e;
        b = 0;
        for (e = a.length; b < e; b++) a[b].ga().xa = !0
    };
    f.prototype.pj = function(a) {
        var b, e;
        b = 0;
        for (e = a.length; b < e; b++) a[b].pj()
    };
    f.prototype.Nl = function(a) {
        var b, e;
        b = 0;
        for (e = a.length; b < e; b++) a[b].Nl()
    };
    f.prototype.vg = function(a) {
        var b, e;
        b = 0;
        for (e = a.length; b < e; b++) a[b].vg()
    };
    f.prototype.qt = function(a) {
        if (a.ak) {
            var b, e, c = a.d;
            b = 0;
            for (e = c.length; b < e; ++b) c[b].rp();
            c = this.Kd;
            b = 0;
            for (e = c.length; b < e; ++b) c[b].type === a && c[b].rp();
            a.ak = !1
        }
    };
    f.prototype.Oq = function(a, b, e, c) {
        var g, d, l = a ? 1 !== a.Bd || 1 !== a.Cd : !1;
        if (b.M)
            for (a = 0, g = b.rh.length; a < g; ++a) d = b.rh[a], l || d.bk ? Da(c, d.d) : (this.qt(d), d.pk.Pl(e, c));
        else l || b.bk ? Da(c, b.d) : (this.qt(b), b.pk.Pl(e, c))
    };
    f.prototype.nm = function(a, b, e) {
        var c = a.ga(),
            g, d, l, n, h = this.ob().lc.jd,
            q, p, f;
        if (c.xa)
            for (c.xa = !1, y(c.d), g = 0, n = a.d.length; g < n; g++) l = a.d[g], l.Ra(), q = l.q.Ub(b, e, !0), p = l.q.Ub(b, e, !1), l.jc(q, p) ? c.d.push(l) : h && c.da.push(l);
        else {
            d = 0;
            f = h ? c.da : c.d;
            g = 0;
            for (n = f.length; g < n; g++) l = f[g], l.Ra(), q = l.q.Ub(b, e, !0), p = l.q.Ub(b, e, !1), l.jc(q, p) && (h ? c.d.push(l) : (c.d[d] = c.d[g], d++));
            f.length = d
        }
        a.sd();
        return c.Jn()
    };
    f.prototype.ct = function(a, b) {
        if (!(a && b && a !== b && a.Of && b.Of)) return !1;
        a.Ra();
        b.Ra();
        var e = a.q,
            c = b.q,
            g, d, l, n, h, q, p, f;
        if (e === c || e.Bd === c.Bd && c.Cd === c.Cd && e.scale === c.scale && e.j === c.j && e.Yd === c.Yd) {
            if (!a.Xa.Qx(b.Xa) || !a.Dc.er(b.Dc) || a.Th && b.Th) return !1;
            if (a.Th) return this.dt(a, b);
            if (b.Th) return this.dt(b, a);
            p = a.Ga && !a.Ga.bh();
            g = b.Ga && !b.Ga.bh();
            if (!p && !g) return !0;
            p ? (a.Ga.Mg(a.width, a.height, a.j), p = a.Ga) : (this.Td.Jh(a.Dc, a.x, a.y, a.width, a.height), p = this.Td);
            g ? (b.Ga.Mg(b.width, b.height, b.j), f = b.Ga) : (this.Td.Jh(b.Dc, b.x, b.y, b.width, b.height), f = this.Td);
            return p.Ai(f, b.x - a.x, b.y - a.y)
        }
        p = a.Ga && !a.Ga.bh();
        g = b.Ga && !b.Ga.bh();
        p ? (a.Ga.Mg(a.width, a.height, a.j), this.Td.Qs(a.Ga)) : this.Td.Jh(a.Dc, a.x, a.y, a.width, a.height);
        p = this.Td;
        g ? (b.Ga.Mg(b.width, b.height, b.j), this.gp.Qs(b.Ga)) : this.gp.Jh(b.Dc, b.x, b.y, b.width, b.height);
        f = this.gp;
        g = 0;
        for (d = p.Rd; g < d; g++) l = 2 * g, n = l + 1, h = p.Kb[l], q = p.Kb[n], p.Kb[l] = e.wc(h + a.x, q + a.y, !0), p.Kb[n] = e.wc(h + a.x, q + a.y, !1);
        p.Ra();
        g = 0;
        for (d = f.Rd; g < d; g++) l = 2 * g, n = l + 1, h = f.Kb[l], q = f.Kb[n], f.Kb[l] = c.wc(h + b.x, q + b.y, !0), f.Kb[n] = c.wc(h + b.x, q + b.y, !1);
        f.Ra();
        return p.Ai(f, 0, 0)
    };
    var K = new xa;
    new wa(0, 0, 0, 0);
    var Z = [];
    f.prototype.dt = function(a, b) {
        var e, c, g, d, l = b.Xa,
            n = a.x,
            h = a.y;
        a.bB(l, Z);
        var p = b.Ga && !b.Ga.bh();
        e = 0;
        for (c = Z.length; e < c; ++e)
            if (g = Z[e], d = g.qB, l.Rx(d, n, h) && (K.Kh(d), K.offset(n, h), K.er(b.Dc)))
                if (p)
                    if (b.Ga.Mg(b.width, b.height, b.j), g.Ko) {
                        if (g.Ko.Ai(b.Ga, b.x - (n + d.left), b.y - (h + d.top))) return y(Z), !0
                    } else {
                        if (this.Td.Jh(K, 0, 0, d.right - d.left, d.bottom - d.top), this.Td.Ai(b.Ga, b.x, b.y)) return y(Z), !0
                    }
        else if (g.Ko) {
            if (this.Td.Jh(b.Dc, 0, 0, b.width, b.height), g.Ko.Ai(this.Td, -(n + d.left), -(h + d.top))) return y(Z), !0
        } else return y(Z), !0;
        y(Z);
        return !1
    };
    f.prototype.mt = function(a, b) {
        if (!b) return !1;
        var e, c, g, d, l;
        e = 0;
        for (c = a.bb.length; e < c; e++)
            if (a.bb[e].behavior instanceof b) return !0;
        if (!a.M)
            for (e = 0, c = a.$a.length; e < c; e++)
                for (l = a.$a[e], g = 0, d = l.bb.length; g < d; g++)
                    if (l.bb[g].behavior instanceof b) return !0;
        return !1
    };
    f.prototype.lp = function(a) {
        return this.mt(a, jc.iA)
    };
    f.prototype.mp = function(a) {
        return this.mt(a, jc.lA)
    };
    f.prototype.Iv = function(a, b) {
        var e, c, g;
        e = 0;
        for (c = this.Rl.length; e < c; e++)
            if (g = this.Rl[e], g[0] == a && g[1] == b || g[0] == b && g[1] == a) return !0;
        return !1
    };
    var P = -1;
    f.prototype.trigger = function(a, b, e) {
        if (!this.Na) return !1;
        var c = this.Na.Vf;
        if (!c) return !1;
        var g = !1,
            d, l, n;
        P++;
        var h = c.hn;
        l = 0;
        for (n = h.length; l < n; ++l) d = this.it(a, b, h[l], e), g = g || d;
        d = this.it(a, b, c, e);
        P--;
        return g || d
    };
    f.prototype.it = function(a, b, e, c) {
        var g = !1,
            d, l, n, h;
        if (b)
            for (n = this.jp(a, b, b.type.name, e, c), g = g || n, h = b.type.$a, d = 0, l = h.length; d < l; ++d) n = this.jp(a, b, h[d].name, e, c), g = g || n;
        else n = this.jp(a, b, "system", e, c), g = g || n;
        return g
    };
    f.prototype.jp = function(a, b, e, c, g) {
        var d, l = !1,
            n = !1,
            n = "undefined" !== typeof g,
            h = (n ? c.Fq : c.jt)[e];
        if (!h) return l;
        var p = null;
        c = 0;
        for (d = h.length; c < d; ++c)
            if (h[c].method == a) {
                p = h[c].ki;
                break
            }
        if (!p) return l;
        var q;
        n ? q = p[g] : q = p;
        if (!q) return null;
        c = 0;
        for (d = q.length; c < d; c++) a = q[c][0], g = q[c][1], n = this.Zw(b, e, a, g), l = l || n;
        return l
    };
    f.prototype.Zw = function(a, b, e, c) {
        var g, d, l = !1;
        this.kp++;
        var n = this.ob().lc;
        n && this.pj(n.Ff);
        var h = 1 < this.kp;
        this.pj(e.Ff);
        h && this.Ly();
        var p = this.Ol(e);
        p.lc = e;
        a && (g = this.types[b].ga(), g.xa = !1, y(g.d), g.d[0] = a, this.types[b].sd());
        a = !0;
        if (e.parent) {
            b = p.bt;
            for (g = e.parent; g;) b.push(g), g = g.parent;
            b.reverse();
            g = 0;
            for (d = b.length; g < d; g++)
                if (!b[g].Zy()) {
                    a = !1;
                    break
                }
        }
        a && (this.Xf++, e.jd ? e.Yy(c) : e.ub(), l = l || p.kg);
        this.Jl();
        h && this.Dy();
        this.vg(e.Ff);
        n && this.vg(n.Ff);
        this.tf && 0 === this.fd && 0 === P && !this.Yn && this.hc();
        this.kp--;
        return l
    };
    f.prototype.oi = function() {
        var a = this.ob();
        return a.lc.Pb[a.Bb]
    };
    f.prototype.Ux = function() {
        return 0 === this.ob().Bb
    };
    f.prototype.jx = function() {
        var a = this.ob();
        return a.lc.rd[a.Cc]
    };
    f.prototype.Ly = function() {
        this.kl++;
        this.kl >= this.po.length && this.po.push([])
    };
    f.prototype.Dy = function() {
        this.kl--
    };
    f.prototype.Pq = function() {
        return this.po[this.kl]
    };
    f.prototype.Ol = function(a) {
        this.Bk++;
        this.Bk >= this.ln.length && this.ln.push(new Ub);
        var b = this.ob();
        b.reset(a);
        return b
    };
    f.prototype.Jl = function() {
        this.Bk--
    };
    f.prototype.ob = function() {
        return this.ln[this.Bk]
    };
    f.prototype.Qq = function(a, b) {
        for (var e, c, g, d, l, n; b;) {
            e = 0;
            for (c = b.Ed.length; e < c; e++)
                if (n = b.Ed[e], n instanceof Vb && nb(a, n.name)) return n;
            b = b.parent
        }
        e = 0;
        for (c = this.Ge.length; e < c; e++)
            for (l = this.Ge[e], g = 0, d = l.qf.length; g < d; g++)
                if (n = l.qf[g], n instanceof Vb && nb(a, n.name)) return n;
        return null
    };
    f.prototype.Rq = function(a) {
        var b, e;
        b = 0;
        for (e = this.Od.length; b < e; b++)
            if (this.Od[b].ta === a) return this.Od[b];
        return null
    };
    f.prototype.Pk = function(a) {
        var b, e;
        b = 0;
        for (e = this.H.length; b < e; b++)
            if (this.H[b].ta === a) return this.H[b];
        return null
    };
    f.prototype.kx = function(a) {
        var b, e;
        b = 0;
        for (e = this.Kg.length; b < e; b++)
            if (this.Kg[b].ta === a) return this.Kg[b];
        return null
    };
    f.prototype.Sv = function(a, b) {
        this.yj = [a, b];
        this.ra = !0
    };
    f.prototype.Jx = function() {
        var a = this,
            e = this.Wo,
            d = this.Le,
            l = this.gl,
            n = !1;
        this.Vs && (n = !0, e = "__c2_continuouspreview", this.Vs = !1);
        if (e.length) {
            this.hc();
            d = this.cz();
            if (c() && !this.ed) b(e, d, function() {
                ea("Saved state to IndexedDB storage (" + d.length + " bytes)");
                a.Le = d;
                a.trigger(O.prototype.e.Im, null);
                a.Le = "";
                n && g()
            }, function(b) {
                try {
                    localStorage.setItem("__c2save_" +
                        e, d), ea("Saved state to WebStorage (" + d.length + " bytes)"), a.Le = d, a.trigger(O.prototype.e.Im, null), a.Le = "", n && g()
                } catch (c) {
                    ea("Failed to save game state: " + b + "; " + c), a.trigger(O.prototype.e.Mp, null)
                }
            });
            else try {
                localStorage.setItem("__c2save_" + e, d), ea("Saved state to WebStorage (" + d.length + " bytes)"), a.Le = d, this.trigger(O.prototype.e.Im, null), a.Le = "", n && g()
            } catch (h) {
                ea("Error saving to WebStorage: " + h), a.trigger(O.prototype.e.Mp, null)
            }
            this.gl = this.Wo = "";
            this.Gb = null
        }
        if (l.length) {
            if (c() && !this.ed) m(l, function(b) {
                b ? (a.Gb = b, ea("Loaded state from IndexedDB storage (" + a.Gb.length + " bytes)")) : (a.Gb = localStorage.getItem("__c2save_" + l) || "", ea("Loaded state from WebStorage (" + a.Gb.length + " bytes)"));
                a.Bj = !1;
                a.Gb || (a.Gb = null, a.trigger(O.prototype.e.Uj, null))
            }, function() {
                a.Gb = localStorage.getItem("__c2save_" + l) || "";
                ea("Loaded state from WebStorage (" + a.Gb.length + " bytes)");
                a.Bj = !1;
                a.Gb || (a.Gb = null, a.trigger(O.prototype.e.Uj, null))
            });
            else {
                try {
                    this.Gb = localStorage.getItem("__c2save_" + l) || "", ea("Loaded state from WebStorage (" +
                        this.Gb.length + " bytes)")
                } catch (p) {
                    this.Gb = null
                }
                this.Bj = !1;
                a.Gb || (a.Gb = null, a.trigger(O.prototype.e.Uj, null))
            }
            this.Wo = this.gl = ""
        }
        null !== this.Gb && (this.hc(), this.fy(this.Gb) ? (this.Le = this.Gb, this.trigger(O.prototype.e.vu, null), this.Le = "") : a.trigger(O.prototype.e.Uj, null), this.Gb = null)
    };
    f.prototype.cz = function() {
        var b, e, c, g, d, l, n, h = {
            c2save: !0,
            version: 1,
            rt: {
                time: this.rb.ma,
                walltime: this.$e.ma,
                timescale: this.Cg,
                tickcount: this.Bg,
                execcount: this.Xf,
                next_uid: this.bj,
                running_layout: this.Na.ta,
                start_time_offset: Date.now() -
                    this.jm
            },
            types: {},
            layouts: {},
            events: {
                groups: {},
                cnds: {},
                acts: {},
                vars: {}
            }
        };
        b = 0;
        for (e = this.H.length; b < e; b++)
            if (d = this.H[b], !d.M && !this.lp(d)) {
                l = {
                    instances: []
                };
                Va(d.U) && (l.ex = a(d.U));
                c = 0;
                for (g = d.d.length; c < g; c++) l.instances.push(this.Vo(d.d[c]));
                h.types[d.ta.toString()] = l
            }
        b = 0;
        for (e = this.Od.length; b < e; b++) c = this.Od[b], h.layouts[c.ta.toString()] = c.Lb();
        g = h.events.groups;
        b = 0;
        for (e = this.Kg.length; b < e; b++) c = this.Kg[b], g[c.ta.toString()] = this.vi[c.ti].Xg;
        e = h.events.cnds;
        for (n in this.lf) this.lf.hasOwnProperty(n) && (b = this.lf[n], Va(b.U) && (e[n] = {
            ex: a(b.U)
        }));
        e = h.events.acts;
        for (n in this.ef) this.ef.hasOwnProperty(n) && (b = this.ef[n], Va(b.U) && (e[n] = {
            ex: a(b.U)
        }));
        e = h.events.vars;
        for (n in this.Zh) this.Zh.hasOwnProperty(n) && (b = this.Zh[n], b.al || b.parent && !b.Ki || (e[n] = b.data));
        h.system = this.re.Lb();
        return JSON.stringify(h)
    };
    f.prototype.Es = function() {
        var a, b, e, c, g, d;
        this.Oe = {};
        a = 0;
        for (b = this.H.length; a < b; a++)
            if (e = this.H[a], !e.M)
                for (c = 0, g = e.d.length; c < g; c++) d = e.d[c], this.Oe[d.uid.toString()] = d
    };
    f.prototype.fy = function(a) {
        var b;
        try {
            b = JSON.parse(a)
        } catch (e) {
            return !1
        }
        if (!b.c2save || 1 < b.version) return !1;
        this.Ci = !0;
        a = b.rt;
        this.rb.reset();
        this.rb.ma = a.time;
        this.$e.reset();
        this.$e.ma = a.walltime || 0;
        this.Cg = a.timescale;
        this.Bg = a.tickcount;
        this.Xf = a.execcount;
        this.jm = Date.now() - a.start_time_offset;
        var c = a.running_layout;
        if (c !== this.Na.ta)
            if (c = this.Rq(c)) this.Aq(c);
            else return;
        var g, d, l, n, h, p, q;
        p = b.types;
        for (d in p)
            if (p.hasOwnProperty(d) && (n = this.Pk(parseInt(d, 10))) && !n.M && !this.lp(n)) {
                p[d].ex ? n.U = p[d].ex : Wa(n.U);
                h = n.d;
                l = p[d].instances;
                c = 0;
                for (g = oa(h.length, l.length); c < g; c++) this.hl(h[c], l[c]);
                c = l.length;
                for (g = h.length; c < g; c++) this.we(h[c]);
                c = h.length;
                for (g = l.length; c < g; c++) {
                    h = null;
                    if (n.Da.wf && (h = this.Na.Ok(l[c].w.l), !h)) continue;
                    h = this.nf(n.vd, h, !1, 0, 0, !0);
                    this.hl(h, l[c])
                }
                n.Oh = !0
            }
        this.hc();
        this.Es();
        g = b.layouts;
        for (d in g) g.hasOwnProperty(d) && (c = this.Rq(parseInt(d, 10))) && c.$b(g[d]);
        g = b.events.groups;
        for (d in g) g.hasOwnProperty(d) && (c = this.kx(parseInt(d, 10))) && this.vi[c.ti] && this.vi[c.ti].ez(g[d]);
        c = b.events.cnds;
        for (d in this.lf) this.lf.hasOwnProperty(d) && (c.hasOwnProperty(d) ? this.lf[d].U = c[d].ex : this.lf[d].U = {});
        c = b.events.acts;
        for (d in this.ef) this.ef.hasOwnProperty(d) && (c.hasOwnProperty(d) ? this.ef[d].U = c[d].ex : this.ef[d].U = {});
        c = b.events.vars;
        for (d in c) c.hasOwnProperty(d) && this.Zh.hasOwnProperty(d) && (this.Zh[d].data = c[d]);
        this.bj = a.next_uid;
        this.Ci = !1;
        c = 0;
        for (g = this.Fk.length; c < g; ++c) h = this.Fk[c], this.trigger(Object.getPrototypeOf(h.type.Da).e.Hg, h);
        y(this.Fk);
        this.re.$b(b.system);
        c = 0;
        for (g = this.H.length; c < g; c++)
            if (n = this.H[c], !n.M && !this.lp(n))
                for (b = 0, d = n.d.length; b < d; b++) {
                    h = n.d[b];
                    if (n.qc)
                        for (p = h.si(), y(h.siblings), a = 0, l = n.Qc.length; a < l; a++) q = n.Qc[a], n !== q && h.siblings.push(q.d[p]);
                    h.Zd && h.Zd();
                    if (h.V)
                        for (a = 0, l = h.V.length; a < l; a++) p = h.V[a], p.Zd && p.Zd()
                }
        return this.ra = !0
    };
    f.prototype.Vo = function(b, e) {
        var c, g, d, l, n;
        l = b.type;
        d = l.Da;
        var h = {};
        e ? h.c2 = !0 : h.uid = b.uid;
        Va(b.U) && (h.ex = a(b.U));
        if (b.Db && b.Db.length)
            for (h.ivs = {}, c = 0, g = b.Db.length; c < g; c++) h.ivs[b.type.Tn[c].toString()] = b.Db[c];
        if (d.wf) {
            d = {
                x: b.x,
                y: b.y,
                w: b.width,
                h: b.height,
                l: b.q.ta,
                zi: b.ge()
            };
            0 !== b.j && (d.a = b.j);
            1 !== b.opacity && (d.o = b.opacity);
            .5 !== b.uc && (d.hX = b.uc);
            .5 !== b.vc && (d.hY = b.vc);
            0 !== b.ic && (d.bm = b.ic);
            b.visible || (d.v = b.visible);
            b.Of || (d.ce = b.Of); - 1 !== b.aj && (d.mts = b.aj);
            if (l.Y.length)
                for (d.fx = [], c = 0, g = l.Y.length; c < g; c++) n = l.Y[c], d.fx.push({
                    name: n.name,
                    active: b.df[n.index],
                    params: b.cb[n.index]
                });
            h.w = d
        }
        if (b.V && b.V.length)
            for (h.behs = {}, c = 0, g = b.V.length; c < g; c++) l = b.V[c], l.Lb && (h.behs[l.type.ta.toString()] = l.Lb());
        b.Lb && (h.data = b.Lb());
        return h
    };
    f.prototype.mx = function(a, b) {
        var e, c;
        e = 0;
        for (c = a.Tn.length; e < c; e++)
            if (a.Tn[e] === b) return e;
        return -1
    };
    f.prototype.ix = function(a, b) {
        var e, c;
        e = 0;
        for (c = a.V.length; e < c; e++)
            if (a.V[e].type.ta === b) return e;
        return -1
    };
    f.prototype.hl = function(a, b, e) {
        var c, g, d, l, n;
        n = a.type;
        l = n.Da;
        if (e) {
            if (!b.c2) return
        } else a.uid = b.uid;
        b.ex ? a.U = b.ex : Wa(a.U);
        if (g = b.ivs)
            for (c in g) g.hasOwnProperty(c) && (d = this.mx(n, parseInt(c, 10)), 0 > d || d >= a.Db.length || (a.Db[d] = g[c]));
        if (l.wf) {
            d = b.w;
            a.q.ta !== d.l && (g = a.q, a.q = this.Na.Ok(d.l), a.q ? (g.Fh(a, !0), a.q.ci(a, !0), a.Ma(), a.q.uj(0)) : (a.q = g, e || this.we(a)));
            a.x = d.x;
            a.y = d.y;
            a.width = d.w;
            a.height = d.h;
            a.Xd = d.zi;
            a.j = d.hasOwnProperty("a") ? d.a : 0;
            a.opacity = d.hasOwnProperty("o") ? d.o : 1;
            a.uc = d.hasOwnProperty("hX") ? d.hX : .5;
            a.vc = d.hasOwnProperty("hY") ? d.hY : .5;
            a.visible = d.hasOwnProperty("v") ? d.v : !0;
            a.Of = d.hasOwnProperty("ce") ? d.ce : !0;
            a.aj = d.hasOwnProperty("mts") ? d.mts : -1;
            a.ic = d.hasOwnProperty("bm") ? d.bm : 0;
            a.fi = kb(a.ic);
            this.J && lb(a, a.ic, this.J);
            a.Ma();
            if (d.hasOwnProperty("fx"))
                for (e = 0, g = d.fx.length; e < g; e++) l = n.An(d.fx[e].name), 0 > l || (a.df[l] = d.fx[e].active, a.cb[l] = d.fx[e].params);
            a.Vd()
        }
        if (n = b.behs)
            for (c in n) n.hasOwnProperty(c) && (e = this.ix(a, parseInt(c, 10)), 0 > e || a.V[e].$b(n[c]));
        b.data && a.$b(b.data)
    };
    f.prototype.Gq = function(a, b, e) {
        window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + "www/" + a, function(a) {
            a.file(b, e)
        }, e)
    };
    f.prototype.$w = function(a, b) {
        this.Gq("data.js", function(e) {
            var c = new FileReader;
            c.onload = function(b) {
                a(b.target.result)
            };
            c.onerror = b;
            c.readAsText(e)
        }, b)
    };
    var E = [],
        Q = 0;
    f.prototype.so = function() {
        if (E.length && !(8 <= Q)) {
            Q++;
            var a = E.shift();
            this.Vv(a.filename, a.rz, a.ww)
        }
    };
    f.prototype.Hq = function(a, b, e) {
        var c = this;
        E.push({
            filename: a,
            rz: function(a) {
                Q--;
                c.so();
                b(a)
            },
            ww: function(a) {
                Q--;
                c.so();
                e(a)
            }
        });
        this.so()
    };
    f.prototype.Vv = function(a, b, e) {
        this.Gq(a, function(a) {
            var e = new FileReader;
            e.onload = function(a) {
                b(a.target.result)
            };
            e.readAsArrayBuffer(a)
        }, e)
    };
    f.prototype.ax = function(a, b, e) {
        this.Hq(a, function(a) {
            a = URL.createObjectURL(new Blob([a]));
            b(a)
        }, e)
    };
    f.prototype.Sx = function(a) {
        return /^(?:[a-z]+:)?\/\//.test(a) || "data:" === a.substr(0, 5) || "blob:" === a.substr(0, 5)
    };
    f.prototype.Ms = function(a, b) {
        this.Hi && !this.Sx(b) ? this.ax(b, function(b) {
            a.src = b
        }, function(a) {
            alert("Failed to load image: " + a)
        }) : a.src = b
    };
    f.prototype.Yl = function(a, b) {
        "undefined" !== typeof a.imageSmoothingEnabled ? a.imageSmoothingEnabled = b : (a.webkitImageSmoothingEnabled = b, a.mozImageSmoothingEnabled = b, a.msImageSmoothingEnabled = b)
    };
    Wb = function(a) {
        return new f(document.getElementById(a))
    };
    Xb = function(a, b) {
        return new f({
            dc: !0,
            width: a,
            height: b
        })
    };
    window.cr_createRuntime = Wb;
    window.cr_createDCRuntime = Xb;
    window.createCocoonJSRuntime = function() {
        window.c2cocoonjs = !0;
        var a = document.createElement("screencanvas") || document.createElement("canvas");
        a.ei = !0;
        document.body.appendChild(a);
        a = new f(a);
        window.c2runtime = a;
        window.addEventListener("orientationchange", function() {
            window.c2runtime.setSize(window.innerWidth, window.innerHeight)
        });
        window.c2runtime.setSize(window.innerWidth, window.innerHeight);
        return a
    };
    window.createEjectaRuntime = function() {
        var a = new f(document.getElementById("canvas"));
        window.c2runtime = a;
        window.c2runtime.setSize(window.innerWidth, window.innerHeight);
        return a
    }
})();
window.cr_getC2Runtime = function() {
    var f = document.getElementById("c2canvas");
    return f ? f.c2runtime : window.c2runtime ? window.c2runtime : null
};
window.cr_getSnapshot = function(f, d) {
    var c = window.cr_getC2Runtime();
    c && c.Sv(f, d)
};
window.cr_sizeCanvas = function(f, d) {
    if (0 !== f && 0 !== d) {
        var c = window.cr_getC2Runtime();
        c && c.setSize(f, d)
    }
};
window.cr_setSuspended = function(f) {
    var d = window.cr_getC2Runtime();
    d && d.setSuspended(f)
};
(function() {
    function f(a, b) {
        this.b = a;
        this.Vf = null;
        this.scrollX = this.b.Ib / 2;
        this.scrollY = this.b.Hb / 2;
        this.scale = 1;
        this.j = 0;
        this.Ug = !0;
        this.name = b[0];
        this.zy = b[1];
        this.yy = b[2];
        this.width = b[1];
        this.height = b[2];
        this.nt = b[3];
        this.Ts = b[4];
        this.ta = b[5];
        var c = b[6],
            g, d;
        this.ba = [];
        this.yi = [];
        g = 0;
        for (d = c.length; g < d; g++) {
            var h = new Yb(this, c[g]);
            h.Zr = g;
            this.ba.push(h)
        }
        c = b[7];
        this.uf = [];
        g = 0;
        for (d = c.length; g < d; g++) {
            var h = c[g],
                f = this.b.H[h[1]];
            f.vd || (f.vd = h);
            this.uf.push(h); - 1 === this.yi.indexOf(f) && this.yi.push(f)
        }
        this.Y = [];
        this.Ba = [];
        this.Te = !0;
        this.cb = [];
        g = 0;
        for (d = b[8].length; g < d; g++) this.Y.push({
            id: b[8][g][0],
            name: b[8][g][1],
            wb: -1,
            Qd: !1,
            u: !0,
            index: g
        }), this.cb.push(b[8][g][2].slice(0));
        this.Vd();
        this.qj = new wa(0, 0, 1, 1);
        this.Oo = new wa(0, 0, 1, 1);
        this.Bf = {}
    }

    function d(a, b) {
        return a.Xd - b.Xd
    }

    function c(a, b) {
        this.Fb = a;
        this.b = a.b;
        this.d = [];
        this.scale = 1;
        this.j = 0;
        this.De = !1;
        this.We = new wa(0, 0, 0, 0);
        this.ht = new xa;
        this.Ka = this.Fa = this.La = this.Ea = 0;
        this.Eg = !1;
        this.bf = -1;
        this.$m = 0;
        this.name = b[0];
        this.index = b[1];
        this.ta = b[2];
        this.visible = b[3];
        this.Id = b[4];
        this.Ud = b[5];
        this.Bd = b[6];
        this.Cd = b[7];
        this.opacity = b[8];
        this.Ik = b[9];
        this.qd = b[10];
        this.Yd = b[11];
        this.ic = b[12];
        this.rw = b[13];
        this.fi = "source-over";
        this.mc = this.rc = 0;
        this.fc = null;
        this.Me = k();
        this.Sd = !0;
        this.nh = new wa(0, 0, -1, -1);
        this.Vb = new wa(0, 0, -1, -1);
        this.qd && (this.fc = new eb(this.b.Ib, this.b.Hb));
        this.oe = !1;
        var c = b[14],
            g, d;
        this.Zs = [];
        this.dd = [];
        this.hi = [];
        g = 0;
        for (d = c.length; g < d; g++) {
            var h = c[g],
                f = this.b.H[h[1]];
            f.vd || (f.vd = h, f.Rv = this.index);
            this.dd.push(h); - 1 === this.Fb.yi.indexOf(f) && this.Fb.yi.push(f)
        }
        Ca(this.Zs, this.dd);
        this.Y = [];
        this.Ba = [];
        this.Te = !0;
        this.cb = [];
        g = 0;
        for (d = b[15].length; g < d; g++) this.Y.push({
            id: b[15][g][0],
            name: b[15][g][1],
            wb: -1,
            Qd: !1,
            u: !0,
            index: g
        }), this.cb.push(b[15][g][2].slice(0));
        this.Vd();
        this.qj = new wa(0, 0, 1, 1);
        this.Oo = new wa(0, 0, 1, 1)
    }

    function k() {
        return a.length ? a.pop() : []
    }

    function b(b) {
        y(b);
        a.push(b)
    }
    f.prototype.bz = function(a) {
        var b = a.type.ta.toString();
        this.Bf.hasOwnProperty(b) || (this.Bf[b] = []);
        this.Bf[b].push(this.b.Vo(a))
    };
    f.prototype.Wq = function() {
        var a = this.ba[0];
        return !a.Ud && 1 === a.opacity && !a.Ik && a.visible
    };
    f.prototype.Vd = function() {
        y(this.Ba);
        this.Te = !0;
        var a, b, c;
        a = 0;
        for (b = this.Y.length; a < b; a++) c = this.Y[a], c.u && (this.Ba.push(c), c.Qd || (this.Te = !1))
    };
    f.prototype.zn = function(a) {
        var b, c, g;
        b = 0;
        for (c = this.Y.length; b < c; b++)
            if (g = this.Y[b], g.name === a) return g;
        return null
    };
    var m = [],
        g = !0;
    f.prototype.ep = function() {
        this.Ts && (this.Vf = this.b.mn[this.Ts], this.Vf.np());
        this.b.Na = this;
        this.width = this.zy;
        this.height = this.yy;
        this.scrollX = this.b.Ib / 2;
        this.scrollY = this.b.Hb / 2;
        var a, b, c, n, h, f, k;
        a = 0;
        for (c = this.b.H.length; a < c; a++)
            if (b = this.b.H[a], !b.M)
                for (h = b.d, b = 0, n = h.length; b < n; b++)
                    if (f = h[b], f.q) {
                        var q = f.q.Zr;
                        q >= this.ba.length && (q = this.ba.length - 1);
                        f.q = this.ba[q]; - 1 === f.q.d.indexOf(f) && f.q.d.push(f);
                        f.q.Eg = !0
                    }
        if (!g)
            for (a = 0, c = this.ba.length; a < c; ++a) this.ba[a].d.sort(d);
        y(m);
        this.Fv();
        a = 0;
        for (c = this.ba.length; a < c; a++) f = this.ba[a], f.Qv(), f.ym();
        h = !1;
        if (!this.Ug) {
            for (k in this.Bf)
                if (this.Bf.hasOwnProperty(k) && (b = this.b.Pk(parseInt(k, 10))) && !b.M && this.b.mp(b)) {
                    n = this.Bf[k];
                    a = 0;
                    for (c = n.length; a < c; a++) {
                        f = null;
                        if (b.Da.wf && (f = this.Ok(n[a].w.l), !f)) continue;
                        f = this.b.nf(b.vd, f, !1, 0, 0, !0);
                        this.b.hl(f, n[a]);
                        h = !0;
                        m.push(f)
                    }
                    y(n)
                }
            a = 0;
            for (c = this.ba.length; a < c; a++) this.ba[a].d.sort(d), this.ba[a].Eg = !0
        }
        h && (this.b.hc(), this.b.Es());
        for (a = 0; a < m.length; a++)
            if (f = m[a], f.type.qc)
                for (c = f.si(), b = 0, n = f.type.Qc.length; b < n; b++) k = f.type.Qc[b], f.type !== k && (k.d.length > c ? f.siblings.push(k.d[c]) : k.vd && (h = this.b.nf(k.vd, f.q, !0, f.x, f.y, !0), this.b.hc(), k.xm(), f.siblings.push(h), m.push(h)));
        a = 0;
        for (c = this.uf.length; a < c; a++) f = this.uf[a], b = this.b.H[f[1]], b.qc || this.b.nf(this.uf[a], null, !0);
        this.b.Ym = null;
        this.b.hc();
        if (this.b.Ya && !this.b.jb)
            for (a = 0, c = this.b.H.length; a < c; a++) k = this.b.H[a], !k.M && k.d.length && k.nj && k.nj(this.b.Ya);
        if (this.b.Ci) Ca(this.b.Fk, m);
        else
            for (a = 0, c = m.length; a < c; a++) f = m[a], this.b.trigger(Object.getPrototypeOf(f.type.Da).e.Hg, f);
        y(m);
        this.b.Ci || this.b.trigger(O.prototype.e.Hp, null);
        this.Ug = !1
    };
    f.prototype.Pv = function() {
        var a, b, c, g, d;
        b = a = 0;
        for (c = this.uf.length; a < c; a++) g = this.uf[a], d = this.b.H[g[1]], d.global ? d.qc || this.b.nf(g, null, !0) : (this.uf[b] = g, b++);
        Aa(this.uf, b)
    };
    f.prototype.pz = function() {
        this.b.Ci || this.b.trigger(O.prototype.e.uu, null);
        this.b.Vn = !0;
        y(this.b.re.Oc);
        var a, b, c, d, h, f;
        if (!this.Ug)
            for (a = 0, b = this.ba.length; a < b; a++)
                for (this.ba[a].qp(), h = this.ba[a].d, c = 0, d = h.length; c < d; c++) f = h[c], f.type.global || this.b.mp(f.type) && this.bz(f);
        a = 0;
        for (b = this.ba.length; a < b; a++) {
            h = this.ba[a].d;
            c = 0;
            for (d = h.length; c < d; c++) f = h[c], f.type.global || this.b.we(f);
            this.b.hc();
            y(h);
            this.ba[a].Eg = !0
        }
        a = 0;
        for (b = this.b.H.length; a < b; a++)
            if (h = this.b.H[a], !(h.global || h.Da.wf || h.Da.fm || h.M)) {
                c = 0;
                for (d = h.d.length; c < d; c++) this.b.we(h.d[c]);
                this.b.hc()
            }
        g = !1;
        this.b.Vn = !1
    };
    new wa(0, 0, 0, 0);
    f.prototype.Zc = function(a) {
        var b, c = a,
            g = !1,
            d = !this.b.ad;
        d && (this.b.fl || (this.b.fl = document.createElement("canvas"), b = this.b.fl, b.width = this.b.T, b.height = this.b.S, this.b.tr = b.getContext("2d"), g = !0), b = this.b.fl, c = this.b.tr, b.width !== this.b.T && (b.width = this.b.T, g = !0), b.height !== this.b.S && (b.height = this.b.S, g = !0), g && this.b.Yl(c, this.b.Oa));
        c.globalAlpha = 1;
        c.globalCompositeOperation = "source-over";
        this.b.tq && !this.Wq() && c.clearRect(0, 0, this.b.T, this.b.S);
        var h, f, g = 0;
        for (h = this.ba.length; g < h; g++) f = this.ba[g], f.visible && 0 < f.opacity && 11 !== f.ic && (f.d.length || !f.Ud) ? f.Zc(c) : f.ym();
        d && a.drawImage(b, 0, 0, this.b.width, this.b.height)
    };
    f.prototype.Rf = function(a) {
        a.Ls(!0);
        this.b.sb || (this.b.sb = a.ud(this.b.T, this.b.S, this.b.Oa));
        if (this.b.sb.Nf !== this.b.T || this.b.sb.Mf !== this.b.S) a.deleteTexture(this.b.sb), this.b.sb = a.ud(this.b.T, this.b.S, this.b.Oa);
        a.Dd(this.b.sb);
        this.b.ad || a.wg(this.b.T, this.b.S);
        var b, c;
        for (b = this.ba.length - 1; 0 <= b; --b) c = this.ba[b], c.visible && 1 === c.opacity && c.Te && 0 === c.ic && (c.d.length || !c.Ud) ? c.Rf(a) : c.ym();
        a.Ls(!1)
    };
    f.prototype.Wb = function(a) {
        var b = 0 < this.Ba.length || this.b.Xh || !this.b.ad || this.b.Ta;
        if (b) {
            this.b.sb || (this.b.sb = a.ud(this.b.T, this.b.S, this.b.Oa));
            if (this.b.sb.Nf !== this.b.T || this.b.sb.Mf !== this.b.S) a.deleteTexture(this.b.sb), this.b.sb = a.ud(this.b.T, this.b.S, this.b.Oa);
            a.Dd(this.b.sb);
            this.b.ad || a.wg(this.b.T, this.b.S)
        } else this.b.sb && (a.Dd(null), a.deleteTexture(this.b.sb), this.b.sb = null);
        this.b.tq && !this.Wq() && a.clear(0, 0, 0, 0);
        var c, g, d;
        c = 0;
        for (g = this.ba.length; c < g; c++) d = this.ba[c], d.visible && 0 < d.opacity && (d.d.length || !d.Ud) ? d.Wb(a) : d.ym();
        b && (0 === this.Ba.length || 1 === this.Ba.length && this.b.ad ? (1 === this.Ba.length ? (b = this.Ba[0].index, a.Nc(this.Ba[0].wb), a.Ih(null, 1 / this.b.T, 1 / this.b.S, 0, 0, 1, 1, this.scale, this.j, 0, 0, this.b.T / 2, this.b.S / 2, this.b.rb.ma, this.cb[b]), a.Ml(this.Ba[0].wb) && (this.b.ra = !0)) : a.Nc(0), this.b.ad || a.wg(this.b.width, this.b.height), a.Dd(null), a.Ks(!1), a.Ef(1), a.Lc(this.b.sb), a.Is(), a.pe(), a.Wd(), b = this.b.width / 2, c = this.b.height / 2, a.Eh(-b, c, b, c, b, -c, -b, -c), a.Lc(null), a.Ks(!0)) : this.Po(a, null, null, null))
    };
    f.prototype.ri = function() {
        return 0 < this.Ba.length || this.b.Xh || !this.b.ad || this.b.Ta ? this.b.sb : null
    };
    f.prototype.Sq = function() {
        var a = this.ba[0].cd(),
            b, c, g;
        b = 1;
        for (c = this.ba.length; b < c; b++) g = this.ba[b], (0 !== g.Bd || 0 !== g.Cd) && g.cd() < a && (a = g.cd());
        return a
    };
    f.prototype.Xo = function(a) {
        if (!this.nt) {
            var b = 1 / this.Sq() * this.b.T / 2;
            a > this.width - b && (a = this.width - b);
            a < b && (a = b)
        }
        this.scrollX !== a && (this.scrollX = a, this.b.ra = !0)
    };
    f.prototype.Yo = function(a) {
        if (!this.nt) {
            var b = 1 / this.Sq() * this.b.S / 2;
            a > this.height - b && (a = this.height - b);
            a < b && (a = b)
        }
        this.scrollY !== a && (this.scrollY = a, this.b.ra = !0)
    };
    f.prototype.Fv = function() {
        this.Xo(this.scrollX);
        this.Yo(this.scrollY)
    };
    f.prototype.Po = function(a, b, c, g) {
        var d = c ? c.Ba : b ? b.Ba : this.Ba,
            h = 1,
            f = 0,
            q = 0,
            k = 0,
            m = this.b.T,
            z = this.b.S;
        c ? (h = c.q.cd(), f = c.q.Yb(), q = c.q.Ea, k = c.q.Fa, m = c.q.La, z = c.q.Ka) : b && (h = b.cd(), f = b.Yb(), q = b.Ea, k = b.Fa, m = b.La, z = b.Ka);
        var v = this.b.vn,
            C, x, t, I, K = 0,
            Z = 1,
            P, E, Q = this.b.T,
            r = this.b.S,
            Y = Q / 2,
            F = r / 2,
            w = b ? b.qj : this.qj,
            G = b ? b.Oo : this.Oo,
            B = 0,
            S = 0,
            H = 0,
            R = 0,
            U = Q,
            ga = Q,
            V = r,
            ra = r,
            sa = t = 0;
        I = c ? c.q.Yb() : 0;
        if (c) {
            C = 0;
            for (x = d.length; C < x; C++) t += a.rx(d[C].wb), sa += a.tx(d[C].wb);
            R = c.Xa;
            B = b.wc(R.left, R.top, !0, !0);
            H = b.wc(R.left, R.top, !1, !0);
            U = b.wc(R.right, R.bottom, !0, !0);
            V = b.wc(R.right, R.bottom, !1, !0);
            0 !== I && (C = b.wc(R.right, R.top, !0, !0), x = b.wc(R.right, R.top, !1, !0), S = b.wc(R.left, R.bottom, !0, !0), R = b.wc(R.left, R.bottom, !1, !0), I = Math.min(B, U, C, S), U = Math.max(B, U, C, S), B = I, I = Math.min(H, V, x, R), V = Math.max(H, V, x, R), H = I);
            B -= t;
            H -= sa;
            U += t;
            V += sa;
            G.left = B / Q;
            G.top = 1 - H / r;
            G.right = U / Q;
            G.bottom = 1 - V / r;
            S = B = qa(B);
            R = H = qa(H);
            ga = U = ua(U);
            ra = V = ua(V);
            S -= t;
            R -= sa;
            ga += t;
            ra += sa;
            0 > B && (B = 0);
            0 > H && (H = 0);
            U > Q && (U = Q);
            V > r && (V = r);
            0 > S && (S = 0);
            0 > R && (R = 0);
            ga > Q && (ga = Q);
            ra > r && (ra = r);
            w.left = B / Q;
            w.top = 1 - H / r;
            w.right = U / Q;
            w.bottom = 1 - V / r
        } else w.left = G.left = 0, w.top = G.top = 0, w.right = G.right = 1, w.bottom = G.bottom = 1;
        sa = c && (a.oj(d[0].wb) || 0 !== t || 0 !== sa || 1 !== c.opacity || c.type.Da.Tr) || b && !c && 1 !== b.opacity;
        a.Is();
        if (sa) {
            v[K] || (v[K] = a.ud(Q, r, this.b.Oa));
            if (v[K].Nf !== Q || v[K].Mf !== r) a.deleteTexture(v[K]), v[K] = a.ud(Q, r, this.b.Oa);
            a.Nc(0);
            a.Dd(v[K]);
            E = ra - R;
            a.clearRect(S, r - R - E, ga - S, E);
            c ? c.Wb(a) : (a.Lc(this.b.Eb), a.Ef(b.opacity), a.pe(), a.translate(-Y, -F), a.Wd(), a.me(B, V, U, V, U, H, B, H, w));
            G.left = G.top = 0;
            G.right = G.bottom = 1;
            c && (I = w.top, w.top = w.bottom, w.bottom = I);
            K = 1;
            Z = 0
        }
        a.Ef(1);
        t = d.length - 1;
        var Oa = a.Mo(d[t].wb) || !b && !c && !this.b.ad;
        C = I = 0;
        for (x = d.length; C < x; C++) {
            v[K] || (v[K] = a.ud(Q, r, this.b.Oa));
            if (v[K].Nf !== Q || v[K].Mf !== r) a.deleteTexture(v[K]), v[K] = a.ud(Q, r, this.b.Oa);
            a.Nc(d[C].wb);
            I = d[C].index;
            a.Ml(d[C].wb) && (this.b.ra = !0);
            0 != C || sa ? (a.Ih(g, 1 / Q, 1 / r, G.left, G.top, G.right, G.bottom, h, f, q, k, (q + m) / 2, (k + z) / 2, this.b.rb.ma, c ? c.cb[I] : b ? b.cb[I] : this.cb[I]), a.Lc(null), C !== t || Oa ? (a.Dd(v[K]), E = ra - R, P = r - R - E, a.clearRect(S, P, ga - S, E)) : (c ? a.Df(c.rc, c.mc) : b && a.Df(b.rc, b.mc), a.Dd(g)), a.Lc(v[Z]), a.pe(), a.translate(-Y, -F), a.Wd(), a.me(B, V, U, V, U, H, B,
                H, w), C !== t || Oa || a.Lc(null)) : (a.Dd(v[K]), E = ra - R, P = r - R - E, a.clearRect(S, P, ga - S, E), c ? (c.Za && c.Za.K ? (P = c.Za.K, Z = 1 / P.width, P = 1 / P.height) : (Z = 1 / c.width, P = 1 / c.height), a.Ih(g, Z, P, G.left, G.top, G.right, G.bottom, h, f, q, k, (q + m) / 2, (k + z) / 2, this.b.rb.ma, c.cb[I]), c.Wb(a)) : (a.Ih(g, 1 / Q, 1 / r, 0, 0, 1, 1, h, f, q, k, (q + m) / 2, (k + z) / 2, this.b.rb.ma, b ? b.cb[I] : this.cb[I]), a.Lc(b ? this.b.Eb : this.b.sb), a.pe(), a.translate(-Y, -F), a.Wd(), a.me(B, V, U, V, U, H, B, H, w)), G.left = G.top = 0, G.right = G.bottom = 1, c && !Oa && (I = V, V = H, H = I));
            K = 0 === K ? 1 : 0;
            Z = 0 === K ? 1 :
                0
        }
        Oa && (a.Nc(0), c ? a.Df(c.rc, c.mc) : b ? a.Df(b.rc, b.mc) : this.b.ad || (a.wg(this.b.width, this.b.height), Y = this.b.width / 2, F = this.b.height / 2, H = B = 0, U = this.b.width, V = this.b.height), a.Dd(g), a.Lc(v[Z]), a.pe(), a.translate(-Y, -F), a.Wd(), c && 1 === d.length && !sa ? a.me(B, H, U, H, U, V, B, V, w) : a.me(B, V, U, V, U, H, B, H, w), a.Lc(null))
    };
    f.prototype.Ok = function(a) {
        var b, c;
        b = 0;
        for (c = this.ba.length; b < c; b++)
            if (this.ba[b].ta === a) return this.ba[b];
        return null
    };
    f.prototype.Lb = function() {
        var a, b, c, g = {
            sx: this.scrollX,
            sy: this.scrollY,
            s: this.scale,
            a: this.j,
            w: this.width,
            h: this.height,
            fv: this.Ug,
            persist: this.Bf,
            fx: [],
            layers: {}
        };
        a = 0;
        for (b = this.Y.length; a < b; a++) c = this.Y[a], g.fx.push({
            name: c.name,
            active: c.u,
            params: this.cb[c.index]
        });
        a = 0;
        for (b = this.ba.length; a < b; a++) c = this.ba[a], g.layers[c.ta.toString()] = c.Lb();
        return g
    };
    f.prototype.$b = function(a) {
        var b, c, g, d;
        this.scrollX = a.sx;
        this.scrollY = a.sy;
        this.scale = a.s;
        this.j = a.a;
        this.width = a.w;
        this.height = a.h;
        this.Bf = a.persist;
        "undefined" !== typeof a.fv && (this.Ug = a.fv);
        var h = a.fx;
        b = 0;
        for (c = h.length; b < c; b++)
            if (g = this.zn(h[b].name)) g.u = h[b].active, this.cb[g.index] = h[b].params;
        this.Vd();
        b = a.layers;
        for (d in b) b.hasOwnProperty(d) && (a = this.Ok(parseInt(d, 10))) && a.$b(b[d])
    };
    Ib = f;
    c.prototype.Vd = function() {
        y(this.Ba);
        this.Te = !0;
        var a, b, c;
        a = 0;
        for (b = this.Y.length; a < b; a++) c = this.Y[a], c.u && (this.Ba.push(c), c.Qd || (this.Te = !1))
    };
    c.prototype.zn = function(a) {
        var b, c, g;
        b = 0;
        for (c = this.Y.length; b < c; b++)
            if (g = this.Y[b], g.name === a) return g;
        return null
    };
    c.prototype.Qv = function() {
        var a, b, c, g, d, h;
        b = a = 0;
        for (c = this.dd.length; a < c; a++) {
            g = this.dd[a];
            d = this.b.H[g[1]];
            h = this.b.mp(d);
            d = !0;
            if (!h || this.Fb.Ug) {
                g = this.b.nf(g, this, !0);
                if (!g) continue;
                m.push(g);
                g.type.global && (d = !1, this.hi.push(g.uid))
            }
            d && (this.dd[b] = this.dd[a], b++)
        }
        this.dd.length = b;
        this.b.hc();
        !this.b.F && this.Y.length && (this.ic = this.rw);
        this.fi = kb(this.ic);
        this.b.J && lb(this, this.ic, this.b.J);
        this.Sd = !0
    };
    c.prototype.Fh = function(a, b) {
        var c = Ea(this.d, a);
        0 > c || (b && this.qd && a.Ic && a.Ic.right >= a.Ic.left && (a.Ra(), this.fc.update(a, a.Ic, null), a.Ic.set(0, 0, -1, -1)), c === this.d.length - 1 ? this.d.pop() : (za(this.d, c), this.uj(c)), this.Sd = !0)
    };
    c.prototype.ci = function(a, b) {
        a.Xd = this.d.length;
        this.d.push(a);
        b && this.qd && a.Ic && a.Ma();
        this.Sd = !0
    };
    c.prototype.Iy = function(a) {
        this.d.unshift(a);
        this.uj(0)
    };
    c.prototype.ly = function(a, b, c) {
        var g = a.ge();
        b = b.ge();
        za(this.d, g);
        g < b && b--;
        c && b++;
        b === this.d.length ? this.d.push(a) : this.d.splice(b, 0, a);
        this.uj(g < b ? g : b)
    };
    c.prototype.uj = function(a) {
        -1 === this.bf ? this.bf = a : a < this.bf && (this.bf = a);
        this.Sd = this.Eg = !0
    };
    c.prototype.qp = function() {
        if (this.Eg) {
            -1 === this.bf && (this.bf = 0);
            var a, b, c;
            if (this.qd)
                for (a = this.bf, b = this.d.length; a < b; ++a) c = this.d[a], c.Xd = a, this.fc.hy(c.Ic);
            else
                for (a = this.bf, b = this.d.length; a < b; ++a) this.d[a].Xd = a;
            this.Eg = !1;
            this.bf = -1
        }
    };
    c.prototype.cd = function(a) {
        return this.nx() * (this.b.ad || a ? this.b.di : 1)
    };
    c.prototype.nx = function() {
        return (this.scale * this.Fb.scale - 1) * this.Yd + 1
    };
    c.prototype.Yb = function() {
        return this.De ? 0 : Ja(this.Fb.j + this.j)
    };
    var a = [],
        h = [],
        t = [];
    c.prototype.En = function() {
        this.qp();
        this.fc.Pl(this.Ea, this.Fa, this.La, this.Ka, t);
        if (!t.length) return k();
        if (1 === t.length) {
            var a = k();
            Ca(a, t[0]);
            y(t);
            return a
        }
        for (var c = !0; 1 < t.length;) {
            for (var a = t, g = void 0, d = void 0, f = void 0, m = void 0, D = void 0, g = 0, d = a.length; g < d - 1; g += 2) {
                var f = a[g],
                    m = a[g + 1],
                    D = k(),
                    q = f,
                    u = m,
                    N = D,
                    z = 0,
                    v = 0,
                    C = 0,
                    x = q.length,
                    J = u.length,
                    I = void 0,
                    K = void 0;
                for (N.length = x + J; z < x && v < J; ++C) I = q[z], K = u[v], I.Xd < K.Xd ? (N[C] = I, ++z) : (N[C] = K, ++v);
                for (; z < x; ++z, ++C) N[C] = q[z];
                for (; v < J; ++v, ++C) N[C] = u[v];
                c || (b(f), b(m));
                h.push(D)
            }
            1 === d % 2 && (c ? (f = k(), Ca(f, a[d - 1]), h.push(f)) : h.push(a[d - 1]));
            Ca(a, h);
            y(h);
            c = !1
        }
        a = t[0];
        y(t);
        return a
    };
    c.prototype.Zc = function(a) {
        this.oe = this.Ik || 1 !== this.opacity || 0 !== this.ic;
        var c = this.b.canvas,
            g = a,
            d = !1;
        this.oe && (this.b.el || (this.b.el = document.createElement("canvas"), c = this.b.el, c.width = this.b.T, c.height = this.b.S, this.b.sr = c.getContext("2d"), d = !0), c = this.b.el, g = this.b.sr, c.width !== this.b.T && (c.width = this.b.T, d = !0), c.height !== this.b.S && (c.height = this.b.S, d = !0), d && this.b.Yl(g, this.b.Oa), this.Ud && g.clearRect(0, 0, this.b.T, this.b.S));
        g.globalAlpha = 1;
        g.globalCompositeOperation = "source-over";
        this.Ud || (g.fillStyle = "rgb(" + this.Id[0] + "," + this.Id[1] + "," + this.Id[2] + ")", g.fillRect(0, 0, this.b.T, this.b.S));
        g.save();
        this.De = !0;
        var d = this.Ub(0, 0, !0, !0),
            h = this.Ub(0, 0, !1, !0);
        this.De = !1;
        this.b.kd && (d = Math.round(d), h = Math.round(h));
        this.Ul(d, h, g);
        var f = this.cd();
        g.scale(f, f);
        g.translate(-d, -h);
        this.qd ? (this.Vb.left = this.fc.Ac(this.Ea), this.Vb.top = this.fc.Bc(this.Fa), this.Vb.right = this.fc.Ac(this.La), this.Vb.bottom = this.fc.Bc(this.Ka), this.Sd || !this.Vb.ji(this.nh) ? (b(this.Me), d = this.En(), this.Sd = !1, this.nh.Og(this.Vb)) : d = this.Me) : d = this.d;
        for (var k, q = null, h = 0, f = d.length; h < f; ++h) k = d[h], k !== q && (this.kw(k, g), q = k);
        this.qd && (this.Me = d);
        g.restore();
        this.oe && (a.globalCompositeOperation = this.fi, a.globalAlpha = this.opacity, a.drawImage(c, 0, 0))
    };
    c.prototype.kw = function(a, b) {
        if (a.visible && 0 !== a.width && 0 !== a.height) {
            a.Ra();
            var c = a.Xa;
            c.right < this.Ea || c.bottom < this.Fa || c.left > this.La || c.top > this.Ka || (b.globalCompositeOperation = a.fi, a.Zc(b))
        }
    };
    c.prototype.ym = function() {
        this.De = !0;
        var a = this.Ub(0, 0, !0, !0),
            b = this.Ub(0, 0, !1, !0);
        this.De = !1;
        this.b.kd && (a = Math.round(a), b = Math.round(b));
        this.Ul(a, b, null)
    };
    c.prototype.Ul = function(a, b, c) {
        var g = this.cd();
        this.Ea = a;
        this.Fa = b;
        this.La = a + 1 / g * this.b.T;
        this.Ka = b + 1 / g * this.b.S;
        this.Ea > this.La && (a = this.Ea, this.Ea = this.La, this.La = a);
        this.Fa > this.Ka && (a = this.Fa, this.Fa = this.Ka, this.Ka = a);
        a = this.Yb();
        0 !== a && (c && (c.translate(this.b.T / 2, this.b.S / 2), c.rotate(-a), c.translate(this.b.T / -2, this.b.S / -2)), this.We.set(this.Ea, this.Fa, this.La, this.Ka), this.We.offset((this.Ea + this.La) / -2, (this.Fa + this.Ka) / -2),
            this.ht.Rs(this.We, a), this.ht.mq(this.We), this.We.offset((this.Ea + this.La) / 2, (this.Fa + this.Ka) / 2), this.Ea = this.We.left, this.Fa = this.We.top, this.La = this.We.right, this.Ka = this.We.bottom)
    };
    c.prototype.Rf = function(a) {
        if (this.oe = this.Ik) {
            this.b.Eb || (this.b.Eb = a.ud(this.b.T, this.b.S, this.b.Oa));
            if (this.b.Eb.Nf !== this.b.T || this.b.Eb.Mf !== this.b.S) a.deleteTexture(this.b.Eb), this.b.Eb = a.ud(this.b.T, this.b.S, this.b.Oa);
            a.Dd(this.b.Eb)
        }
        this.De = !0;
        var c = this.Ub(0, 0, !0, !0),
            g = this.Ub(0, 0, !1, !0);
        this.De = !1;
        this.b.kd &&
            (c = Math.round(c), g = Math.round(g));
        this.Ul(c, g, null);
        c = this.cd();
        a.pe();
        a.scale(c, c);
        a.So(-this.Yb());
        a.translate((this.Ea + this.La) / -2, (this.Fa + this.Ka) / -2);
        a.Wd();
        this.qd ? (this.Vb.left = this.fc.Ac(this.Ea), this.Vb.top = this.fc.Bc(this.Fa), this.Vb.right = this.fc.Ac(this.La), this.Vb.bottom = this.fc.Bc(this.Ka), this.Sd || !this.Vb.ji(this.nh) ? (b(this.Me), c = this.En(), this.Sd = !1, this.nh.Og(this.Vb)) : c = this.Me) : c = this.d;
        for (var d, h = null, g = c.length - 1; 0 <= g; --g) d = c[g], d !== h && (this.mw(c[g], a), h = d);
        this.qd && (this.Me =
            c);
        this.Ud || (this.$m = this.b.Tf++, a.Zl(this.$m), a.Js(1, 1, 1), a.Kq(), a.Sy())
    };
    c.prototype.Wb = function(a) {
        var c = 0,
            g = 0;
        if (this.oe = this.Ik || 1 !== this.opacity || 0 < this.Ba.length || 0 !== this.ic) {
            this.b.Eb || (this.b.Eb = a.ud(this.b.T, this.b.S, this.b.Oa));
            if (this.b.Eb.Nf !== this.b.T || this.b.Eb.Mf !== this.b.S) a.deleteTexture(this.b.Eb), this.b.Eb = a.ud(this.b.T, this.b.S, this.b.Oa);
            a.Dd(this.b.Eb);
            this.Ud && a.clear(0, 0, 0, 0)
        }
        this.Ud || (this.b.Ta ? (a.Zl(this.$m), a.Js(this.Id[0] / 255, this.Id[1] / 255, this.Id[2] / 255), a.Kq(), a.kz()) : a.clear(this.Id[0] / 255, this.Id[1] / 255, this.Id[2] / 255, 1));
        this.De = !0;
        var d = this.Ub(0, 0, !0, !0),
            c = this.Ub(0, 0, !1, !0);
        this.De = !1;
        this.b.kd && (d = Math.round(d), c = Math.round(c));
        this.Ul(d, c, null);
        d = this.cd();
        a.pe();
        a.scale(d, d);
        a.So(-this.Yb());
        a.translate((this.Ea + this.La) / -2, (this.Fa + this.Ka) / -2);
        a.Wd();
        this.qd ? (this.Vb.left = this.fc.Ac(this.Ea), this.Vb.top = this.fc.Bc(this.Fa), this.Vb.right = this.fc.Ac(this.La), this.Vb.bottom = this.fc.Bc(this.Ka), this.Sd || !this.Vb.ji(this.nh) ? (b(this.Me), c = this.En(), this.Sd = !1, this.nh.Og(this.Vb)) : c = this.Me) : c = this.d;
        var h, f, k = null,
            g = 0;
        for (h = c.length; g < h; ++g) f = c[g], f !== k && (this.lw(c[g], a), k = f);
        this.qd && (this.Me = c);
        this.oe && (c = this.Ba.length ? this.Ba[0].wb : 0, g = this.Ba.length ? this.Ba[0].index : 0, 0 === this.Ba.length || 1 === this.Ba.length && !a.Mo(c) && 1 === this.opacity ? (1 === this.Ba.length ? (a.Nc(c), a.Ih(this.Fb.ri(), 1 / this.b.T, 1 / this.b.S, 0, 0, 1, 1, d, this.Yb(), this.Ea, this.Fa, (this.Ea + this.La) / 2, (this.Fa + this.Ka) / 2, this.b.rb.ma, this.cb[g]), a.Ml(c) && (this.b.ra = !0)) : a.Nc(0), a.Dd(this.Fb.ri()),
            a.Ef(this.opacity), a.Lc(this.b.Eb), a.Df(this.rc, this.mc), a.pe(), a.Wd(), d = this.b.T / 2, c = this.b.S / 2, a.Eh(-d, c, d, c, d, -c, -d, -c), a.Lc(null)) : this.Fb.Po(a, this, null, this.Fb.ri()))
    };
    c.prototype.lw = function(a, b) {
        if (a.visible && 0 !== a.width && 0 !== a.height) {
            a.Ra();
            var c = a.Xa;
            c.right < this.Ea || c.bottom < this.Fa || c.left > this.La || c.top > this.Ka || (b.Zl(a.Tf), a.xt ? this.ow(a, b) : (b.Nc(0), b.Df(a.rc, a.mc), a.Wb(b)))
        }
    };
    c.prototype.mw = function(a, b) {
        if (a.visible && 0 !== a.width && 0 !== a.height) {
            a.Ra();
            var c = a.Xa;
            c.right < this.Ea || c.bottom < this.Fa || c.left > this.La || c.top > this.Ka || (a.Tf = this.b.Tf++, 0 === a.ic && 1 === a.opacity && a.Te && a.Rf && (b.Zl(a.Tf), a.Rf(b)))
        }
    };
    c.prototype.ow = function(a, b) {
        var c = a.Ba[0].wb,
            g = a.Ba[0].index,
            d = this.cd();
        if (1 !== a.Ba.length || b.Mo(c) || b.Ky(c) || (a.j || a.q.Yb()) && b.oj(c) || 1 !== a.opacity || a.type.Da.Tr) this.Fb.Po(b, this, a, this.oe ? this.b.Eb : this.Fb.ri()), b.pe(), b.scale(d, d), b.So(-this.Yb()), b.translate((this.Ea + this.La) / -2, (this.Fa + this.Ka) / -2), b.Wd();
        else {
            b.Nc(c);
            b.Df(a.rc, a.mc);
            b.Ml(c) && (this.b.ra = !0);
            var h = 0,
                f = 0,
                q = 0,
                k = 0;
            b.oj(c) && (k = a.Xa, h = this.wc(k.left, k.top, !0, !0), f = this.wc(k.left, k.top, !1, !0), q = this.wc(k.right, k.bottom, !0, !0), k = this.wc(k.right, k.bottom, !1, !0), h = h / windowWidth, f = 1 - f / windowHeight, q = q / windowWidth, k = 1 - k / windowHeight);
            var m;
            a.Za && a.Za.K ? (m = a.Za.K, c = 1 / m.width, m = 1 / m.height) : (c = 1 / a.width, m = 1 / a.height);
            b.Ih(this.oe ? this.b.Eb : this.Fb.ri(), c, m, h, f, q, k, d, this.Yb(), this.Ea, this.Fa, (this.Ea + this.La) / 2, (this.Fa + this.Ka) / 2, this.b.rb.ma, a.cb[g]);
            a.Wb(b)
        }
    };
    c.prototype.Ub = function(a, b, c, g) {
        var d = this.b.devicePixelRatio;
        this.b.hg && (a *= d, b *= d);
        var d = this.b.vs,
            h = this.b.ws,
            d = (this.Fb.scrollX - d) * this.Bd + d,
            h = (this.Fb.scrollY - h) * this.Cd + h,
            f = d,
            q = h,
            k = 1 / this.cd(!g);
        g ? (f -= this.b.T * k / 2, q -= this.b.S * k / 2) : (f -= this.b.width * k / 2, q -= this.b.height * k / 2);
        f += a * k;
        q += b * k;
        b = this.Yb();
        0 !== b && (f -= d, q -= h, a = Math.cos(b), b = Math.sin(b), g = f * a - q * b, q = q * a + f * b, f = g + d, q += h);
        return c ? f : q
    };
    c.prototype.wc = function(a, b, c, g) {
        var d = this.b.vs,
            h = this.b.ws,
            f = (this.Fb.scrollX - d) * this.Bd + d,
            q = (this.Fb.scrollY - h) * this.Cd + h,
            h = f,
            d = q,
            k = this.Yb();
        if (0 !== k) {
            a -= f;
            b -= q;
            var m = Math.cos(-k),
                k = Math.sin(-k),
                z = a * m - b * k;
            b = b * m + a * k;
            a = z + f;
            b += q
        }
        f = 1 / this.cd(!g);
        g ? (h -= this.b.T * f / 2, d -= this.b.S * f / 2) : (h -= this.b.width * f / 2, d -= this.b.height * f / 2);
        h = (a - h) / f;
        d = (b - d) / f;
        a = this.b.devicePixelRatio;
        this.b.hg && !g && (h /= a, d /= a);
        return c ? h : d
    };
    c.prototype.Lb = function() {
        var a, b, c, g = {
            s: this.scale,
            a: this.j,
            vl: this.Ea,
            vt: this.Fa,
            vr: this.La,
            vb: this.Ka,
            v: this.visible,
            bc: this.Id,
            t: this.Ud,
            px: this.Bd,
            py: this.Cd,
            o: this.opacity,
            zr: this.Yd,
            fx: [],
            cg: this.hi,
            instances: []
        };
        a = 0;
        for (b = this.Y.length; a < b; a++) c =
            this.Y[a], g.fx.push({
                name: c.name,
                active: c.u,
                params: this.cb[c.index]
            });
        return g
    };
    c.prototype.$b = function(a) {
        var b, c, g;
        this.scale = a.s;
        this.j = a.a;
        this.Ea = a.vl;
        this.Fa = a.vt;
        this.La = a.vr;
        this.Ka = a.vb;
        this.visible = a.v;
        this.Id = a.bc;
        this.Ud = a.t;
        this.Bd = a.px;
        this.Cd = a.py;
        this.opacity = a.o;
        this.Yd = a.zr;
        this.hi = a.cg || [];
        Ca(this.dd, this.Zs);
        var h = new ba;
        b = 0;
        for (g = this.hi.length; b < g; ++b) h.add(this.hi[b]);
        c = b = 0;
        for (g = this.dd.length; b < g; ++b) h.contains(this.dd[b][2]) || (this.dd[c] = this.dd[b], ++c);
        Aa(this.dd, c);
        c = a.fx;
        b = 0;
        for (g = c.length; b < g; b++)
            if (a = this.zn(c[b].name)) a.u = c[b].active, this.cb[a.index] = c[b].params;
        this.Vd();
        this.d.sort(d);
        this.Eg = !0
    };
    Yb = c
})();
(function() {
    function f(a, b) {
        var c, g = a.length;
        switch (g) {
            case 0:
                return !0;
            case 1:
                return a[0] === b[0];
            case 2:
                return a[0] === b[0] && a[1] === b[1];
            default:
                for (c = 0; c < g; c++)
                    if (a[c] !== b[c]) return !1;
                return !0
        }
    }

    function d(a, b) {
        return a.index - b.index
    }

    function c(a) {
        var b, c, g, e;
        2 === a.length ? a[0].index > a[1].index && (b = a[0], a[0] = a[1], a[1] = b) : 2 < a.length && a.sort(d);
        a.length >= L.length && (L.length = a.length + 1);
        L[a.length] || (L[a.length] = []);
        e = L[a.length];
        b = 0;
        for (c = e.length; b < c; b++)
            if (g = e[b], f(a, g)) return g;
        e.push(a);
        return a
    }

    function k(a, b) {
        this.b = a;
        this.jt = {};
        this.Fq = {};
        this.Kn = !1;
        this.Zq = new ba;
        this.hn = [];
        this.Qm = [];
        this.name = b[0];
        var c = b[1];
        this.qf = [];
        var g, d;
        g = 0;
        for (d = c.length; g < d; g++) this.br(c[g], null, this.qf)
    }

    function b(a) {
        this.type = a;
        this.d = [];
        this.da = [];
        this.xa = !0
    }

    function m(a, b, c) {
        this.sheet = a;
        this.parent = b;
        this.b = a.b;
        this.Qa = [];
        this.Ff = [];
        this.Xq = this.tm = this.ip = this.On = this.group = this.Ys = !1;
        this.Pb = [];
        this.rd = [];
        this.Ed = [];
        this.ti = "";
        this.Xg = this.On = this.group = !1;
        this.qk = null;
        c[1] && (this.ti = c[1][1].toLowerCase(), this.group = !0, this.On = !!c[1][0], this.qk = [], this.Xg = this.On, this.b.Kg.push(this), this.b.vi[this.ti] = this);
        this.jd = c[2];
        this.ta = c[4];
        this.group || (this.b.lq[this.ta.toString()] = this);
        var g = c[5];
        a = 0;
        for (b = g.length; a < b; a++) {
            var d = new Zb(this, g[a]);
            d.index = a;
            this.Pb.push(d);
            this.dq(d.type)
        }
        g = c[6];
        a = 0;
        for (b = g.length; a < b; a++) d = new $b(this, g[a]), d.index = a, this.rd.push(d);
        if (8 === c.length)
            for (c = c[7], a = 0, b = c.length; a < b; a++) this.sheet.br(c[a], this, this.Ed);
        this.bl = !1;
        this.Pb.length && (this.bl = null == this.Pb[0].type && this.Pb[0].Xb == O.prototype.e.Bp)
    }

    function g(a, b) {
        var c, g, d;
        if (a && (-1 === b.indexOf(a) && b.push(a), a.qc))
            for (c = 0, g = a.Qc.length; c < g; c++) d = a.Qc[c], a !== d && -1 === b.indexOf(d) && b.push(d)
    }

    function a(a, b) {
        this.Yc = a;
        this.sheet = a.sheet;
        this.b = a.b;
        this.ka = [];
        this.eb = [];
        this.U = {};
        this.index = -1;
        this.ai = !1;
        this.Xb = this.b.cf(b[1]);
        this.trigger = 0 < b[3];
        this.Eq = 2 === b[3];
        this.he = b[4];
        this.Vk = b[5];
        this.dy = b[6];
        this.ta = b[7];
        this.b.lf[this.ta.toString()] = this; - 1 === b[0] ? (this.type = null, this.ub = this.Uo, this.Lf = null, this.Jd = -1) : (this.type = this.b.H[b[0]], this.ub = this.dy ? this.$y : this.To, b[2] ? (this.Lf = this.type.Lk(b[2]), this.Jd = this.type.xn(b[2])) : (this.Lf = null, this.Jd = -1), this.Yc.parent && this.Yc.parent.$l());
        this.Eq && (this.ub = this.az);
        if (10 === b.length) {
            var c, g, d = b[9];
            c = 0;
            for (g = d.length; c < g; c++) {
                var e = new ac(this, d[c]);
                this.ka.push(e)
            }
            this.eb.length = d.length
        }
    }

    function h(a, b) {
        this.Yc = a;
        this.sheet = a.sheet;
        this.b = a.b;
        this.ka = [];
        this.eb = [];
        this.U = {};
        this.index = -1;
        this.ai = !1;
        this.Xb = this.b.cf(b[1]); - 1 === b[0] ? (this.type = null, this.ub = this.Uo, this.Lf = null, this.Jd = -1) : (this.type = this.b.H[b[0]], this.ub = this.To, b[2] ? (this.Lf = this.type.Lk(b[2]), this.Jd = this.type.xn(b[2])) : (this.Lf = null, this.Jd = -1));
        this.ta = b[3];
        this.b.ef[this.ta.toString()] = this;
        if (6 === b.length) {
            var c, g, d = b[5];
            c = 0;
            for (g = d.length; c < g; c++) {
                var e = new ac(this, d[c]);
                this.ka.push(e)
            }
            this.eb.length = d.length
        }
    }

    function t() {
        D++;
        M.length === D && M.push(new bc);
        return M[D]
    }

    function e(a, b) {
        this.Ua = a;
        this.Yc = a.Yc;
        this.sheet = a.sheet;
        this.b = a.b;
        this.type = b[0];
        this.ee = null;
        this.Ue = 0;
        this.get = null;
        this.uq = 0;
        this.Fb = null;
        this.key = 0;
        this.object = null;
        this.index = 0;
        this.Mj = this.yg = this.Mj = this.yg = this.Iq = this.Wf = this.Nj = null;
        this.Gd = !1;
        var c, g, d;
        switch (b[0]) {
            case 0:
            case 7:
                this.ee = new cc(this, b[1]);
                this.Ue = 0;
                this.get = this.yx;
                break;
            case 1:
                this.ee = new cc(this, b[1]);
                this.Ue = 0;
                this.get = this.zx;
                break;
            case 5:
                this.ee = new cc(this, b[1]);
                this.Ue = 0;
                this.get = this.Dx;
                break;
            case 3:
            case 8:
                this.uq = b[1];
                this.get = this.wx;
                break;
            case 6:
                this.Fb = this.b.lo[b[1]];
                this.get = this.Ex;
                break;
            case 9:
                this.key = b[1];
                this.get = this.Cx;
                break;
            case 4:
                this.object = this.b.H[b[1]];
                this.get = this.Fx;
                this.Yc.dq(this.object);
                this.Ua instanceof $b ? this.Yc.$l() : this.Yc.parent && this.Yc.parent.$l();
                break;
            case 10:
                this.index = b[1];
                a.type && a.type.M ? (this.get = this.Ax, this.Gd = !0) : this.get = this.Bx;
                break;
            case 11:
                this.Nj = b[1];
                this.Wf = null;
                this.get = this.xx;
                break;
            case 2:
            case 12:
                this.Iq = b[1];
                this.get = this.vx;
                break;
            case 13:
                for (this.get = this.Gx, this.yg = [], this.Mj = [], c = 1, g = b.length; c < g; c++) d = new ac(this.Ua, b[c]), this.yg.push(d), this.Mj.push(0)
        }
    }

    function l(a, b, c) {
        this.sheet = a;
        this.parent = b;
        this.b = a.b;
        this.Qa = [];
        this.name = c[1];
        this.Oj = c[2];
        this.B = c[3];
        this.Ki = !!c[4];
        this.al = !!c[5];
        this.ta = c[6];
        this.b.Zh[this.ta.toString()] = this;
        this.data = this.B;
        this.parent ? (this.qg = this.Ki || this.al ? -1 : this.b.nz++, this.b.Bv.push(this)) : (this.qg = -1, this.b.Av.push(this))
    }

    function p(a, b, c) {
        this.sheet = a;
        this.parent = b;
        this.b = a.b;
        this.Qa = [];
        this.xi = null;
        this.Nx = c[1];
        this.u = !0
    }

    function n() {
        this.bt = [];
        this.reset(null)
    }
    var L = [];
    k.prototype.toString = function() {
        return this.name
    };
    k.prototype.br = function(a, b, c) {
        switch (a[0]) {
            case 0:
                a = new dc(this, b, a);
                if (a.jd)
                    for (c.push(a), c = 0, b = a.Pb.length; c < b; c++) a.Pb[c].trigger && this.cr(a, c);
                else a.lr() ? this.cr(a, 0) : c.push(a);
                break;
            case 1:
                a = new Vb(this, b, a);
                c.push(a);
                break;
            case 2:
                a = new ec(this, b, a), c.push(a)
        }
    };
    k.prototype.kb = function() {
        var a, b;
        a = 0;
        for (b = this.qf.length; a < b; a++) this.qf[a].kb(a < b - 1 && this.qf[a + 1].bl)
    };
    k.prototype.np = function() {
        y(this.hn);
        y(this.Qm);
        this.cq(this);
        y(this.Qm)
    };
    k.prototype.cq = function(a) {
        var b, c, g, d, e = a.hn,
            h = a.Qm,
            f = this.Zq.Ye();
        b = 0;
        for (c = f.length; b < c; ++b) g = f[b], d = g.xi, !g.u || a === d || -1 < h.indexOf(d) || (h.push(d), d.cq(a), e.push(d))
    };
    k.prototype.ub = function(a) {
        this.b.rB || (this.Kn = !0, a || (this.b.Yn = !0));
        var b, c;
        b = 0;
        for (c = this.qf.length; b < c; b++) {
            var g = this.qf[b];
            g.ub();
            this.b.Zm(g.Qa);
            this.b.tf && this.b.hc()
        }
        a || (this.b.Yn = !1)
    };
    k.prototype.cr = function(a, b) {
        a.jd || this.b.vm.push(a);
        var c, g, d = a.Pb[b],
            e;
        d.type ? e = d.type.name : e = "system";
        var h = (c = d.Eq) ? this.Fq : this.jt;
        h[e] || (h[e] = []);
        e = h[e];
        h = d.Xb;
        if (c) {
            if (d.ka.length && (d = d.ka[0], 1 === d.type && 2 === d.ee.type)) {
                d = d.ee.value.toLowerCase();
                c = 0;
                for (g = e.length; c < g; c++)
                    if (e[c].method == h) {
                        c = e[c].ki;
                        c[d] ? c[d].push([a, b]) : c[d] = [
                            [a, b]
                        ];
                        return
                    }
                c = {};
                c[d] = [
                    [a, b]
                ];
                e.push({
                    method: h,
                    ki: c
                })
            }
        } else {
            c = 0;
            for (g = e.length; c < g; c++)
                if (e[c].method == h) {
                    e[c].ki.push([a, b]);
                    return
                }
            T && h === T.prototype.e.Ig ? e.unshift({
                method: h,
                ki: [
                    [a, b]
                ]
            }) : e.push({
                method: h,
                ki: [
                    [a, b]
                ]
            })
        }
    };
    Jb = k;
    b.prototype.Jn = function() {
        return this.xa ? this.type.d.length : this.d.length
    };
    b.prototype.Rc = function() {
        return this.xa ? this.type.d : this.d
    };
    b.prototype.lj = function(a) {
        a && (a.b.ob().lc.jd ? (this.xa && (y(this.d), Ca(this.da, a.type.d), this.xa = !1), a = this.da.indexOf(a), -1 !== a && (this.d.push(this.da[a]), this.da.splice(a, 1))) : (this.xa = !1, y(this.d), this.d[0] = a))
    };
    rb = b;
    window._c2hh_ = "9B8E65E8653E4C80672958512A488E29C3DF5E90";
    m.prototype.kb = function(a) {
        var b, g = this.parent;
        if (this.group)
            for (this.tm = !0; g;) {
                if (!g.group) {
                    this.tm = !1;
                    break
                }
                g = g.parent
            }
        this.ip = !this.lr() && (!this.parent || this.parent.group && this.parent.tm);
        this.Xq = !!a;
        this.Ff = this.Qa.slice(0);
        for (g = this.parent; g;) {
            a = 0;
            for (b = g.Qa.length; a < b; a++) this.yv(g.Qa[a]);
            g = g.parent
        }
        this.Qa = c(this.Qa);
        this.Ff = c(this.Ff);
        a = 0;
        for (b = this.Pb.length; a < b; a++) this.Pb[a].kb();
        a = 0;
        for (b = this.rd.length; a < b; a++) this.rd[a].kb();
        a = 0;
        for (b = this.Ed.length; a < b; a++) this.Ed[a].kb(a < b - 1 && this.Ed[a + 1].bl)
    };
    m.prototype.ez = function(a) {
        if (this.Xg !== !!a) {
            this.Xg = !!a;
            var b;
            a = 0;
            for (b = this.qk.length; a < b; ++a) this.qk[a].pt();
            0 < b && this.b.Na.Vf && this.b.Na.Vf.np()
        }
    };
    m.prototype.dq = function(a) {
        g(a, this.Qa)
    };
    m.prototype.yv = function(a) {
        g(a, this.Ff)
    };
    m.prototype.$l = function() {
        this.Ys = !0;
        this.parent && this.parent.$l()
    };
    m.prototype.lr = function() {
        return this.Pb.length ? this.Pb[0].trigger : !1
    };
    m.prototype.ub = function() {
        var a, b, c = !1,
            g = this.b,
            d = this.b.ob();
        d.lc = this;
        var e = this.Pb;
        this.bl || (d.kn = !1);
        if (this.jd) {
            0 === e.length && (c = !0);
            d.Bb = 0;
            for (a = e.length; d.Bb < a; d.Bb++) b = e[d.Bb], b.trigger || (b = b.ub()) && (c = !0);
            (d.kg = c) && this.Vl()
        } else {
            d.Bb = 0;
            for (a = e.length; d.Bb < a; d.Bb++)
                if (b = e[d.Bb].ub(), !b) {
                    d.kg = !1;
                    this.ip && g.tf && g.hc();
                    return
                }
            d.kg = !0;
            this.Vl()
        }
        this.uw(d)
    };
    m.prototype.uw = function(a) {
        a.kg && this.Xq && (a.kn = !0);
        this.ip && this.b.tf && this.b.hc()
    };
    m.prototype.Yy = function(a) {
        this.b.ob().lc = this;
        this.Pb[a].ub() && (this.Vl(), this.b.ob().kg = !0)
    };
    m.prototype.Vl = function() {
        var a = this.b.ob(),
            b;
        a.Cc = 0;
        for (b = this.rd.length; a.Cc < b; a.Cc++)
            if (this.rd[a.Cc].ub()) return;
        this.Gs()
    };
    m.prototype.Uy = function() {
        var a = this.b.ob(),
            b;
        for (b = this.rd.length; a.Cc < b; a.Cc++)
            if (this.rd[a.Cc].ub()) return;
        this.Gs()
    };
    m.prototype.Gs = function() {
        if (this.Ed.length) {
            var a, b, c, g, d = this.Ed.length -
                1;
            this.b.Ol(this);
            if (this.Ys)
                for (a = 0, b = this.Ed.length; a < b; a++) c = this.Ed[a], (g = !this.tm || !this.group && a < d) && this.b.Nl(c.Qa), c.ub(), g ? this.b.vg(c.Qa) : this.b.Zm(c.Qa);
            else
                for (a = 0, b = this.Ed.length; a < b; a++) this.Ed[a].ub();
            this.b.Jl()
        }
    };
    m.prototype.Zy = function() {
        var a = this.b.ob();
        a.lc = this;
        var b = !1,
            c;
        a.Bb = 0;
        for (c = this.Pb.length; a.Bb < c; a.Bb++)
            if (this.Pb[a.Bb].ub()) b = !0;
            else if (!this.jd) return !1;
        return this.jd ? b : !0
    };
    m.prototype.Vy = function() {
        this.b.Xf++;
        var a = this.b.ob().Bb,
            b = this.b.Ol(this);
        if (!this.jd)
            for (b.Bb = a + 1, a = this.Pb.length; b.Bb < a; b.Bb++)
                if (!this.Pb[b.Bb].ub()) {
                    this.b.Jl();
                    return
                }
        this.Vl();
        this.b.Jl()
    };
    m.prototype.Wx = function(a) {
        var b = a.index;
        if (0 === b) return !0;
        for (--b; 0 <= b; --b)
            if (this.Pb[b].type === a.type) return !1;
        return !0
    };
    dc = m;
    a.prototype.kb = function() {
        var a, b, c;
        a = 0;
        for (b = this.ka.length; a < b; a++) c = this.ka[a], c.kb(), c.Gd && (this.ai = !0)
    };
    a.prototype.az = function() {
        return !0
    };
    a.prototype.Uo = function() {
        var a, b;
        a = 0;
        for (b = this.ka.length; a < b; a++) this.eb[a] = this.ka[a].get();
        return Ta(this.Xb.apply(this.b.re, this.eb), this.Vk)
    };
    a.prototype.$y = function() {
        var a, b;
        a = 0;
        for (b = this.ka.length; a < b; a++) this.eb[a] = this.ka[a].get();
        a = this.Xb.apply(this.Lf ? this.Lf : this.type, this.eb);
        this.type.sd();
        return a
    };
    a.prototype.To = function() {
        var a, b, c, g, d, e, h, f, n = this.type,
            k = n.ga(),
            m = this.Yc.jd && !this.trigger;
        b = 0;
        var l = n.qc,
            p = n.M,
            D = n.He,
            t = this.Jd,
            L = -1 < t,
            M = this.ai,
            w = this.ka,
            G = this.eb,
            B = this.Vk,
            S = this.Xb,
            H;
        if (M)
            for (b = 0, d = w.length; b < d; ++b) e = w[b], e.Gd || (G[b] = e.get(0));
        else
            for (b = 0, d = w.length; b < d; ++b) G[b] = w[b].get(0);
        if (k.xa) {
            y(k.d);
            y(k.da);
            H = n.d;
            a = 0;
            for (g = H.length; a < g; ++a) {
                f = H[a];
                if (M)
                    for (b = 0, d = w.length; b < d; ++b) e = w[b], e.Gd && (G[b] = e.get(a));
                L ? (b = 0, p && (b = f.type.Tg[D]), b = S.apply(f.V[t + b], G)) : b = S.apply(f, G);
                (h = Ta(b, B)) ? k.d.push(f): m && k.da.push(f)
            }
            n.finish && n.finish(!0);
            k.xa = !1;
            n.sd();
            return k.Jn()
        }
        c = 0;
        H = (h = m && !this.Yc.Wx(this)) ? k.da : k.d;
        var R = !1;
        a = 0;
        for (g = H.length; a < g; ++a) {
            f = H[a];
            if (M)
                for (b = 0, d = w.length; b < d; ++b) e = w[b], e.Gd && (G[b] = e.get(a));
            L ? (b = 0, p && (b = f.type.Tg[D]), b = S.apply(f.V[t + b], G)) : b = S.apply(f, G);
            if (Ta(b, B))
                if (R = !0, h) {
                    if (k.d.push(f), l)
                        for (b = 0, d = f.siblings.length; b < d; b++) e = f.siblings[b], e.type.ga().d.push(e)
                } else {
                    H[c] = f;
                    if (l)
                        for (b = 0, d = f.siblings.length; b < d; b++) e = f.siblings[b], e.type.ga().d[c] = e;
                    c++
                }
            else if (h) {
                H[c] = f;
                if (l)
                    for (b = 0, d = f.siblings.length; b < d; b++) e = f.siblings[b], e.type.ga().da[c] = e;
                c++
            } else if (m && (k.da.push(f), l))
                for (b = 0, d = f.siblings.length; b < d; b++) e = f.siblings[b], e.type.ga().da.push(e)
        }
        Aa(H, c);
        if (l)
            for (p = n.Qc, a = 0, g = p.length; a < g; a++) f = p[a].ga(), h ? Aa(f.da, c) : Aa(f.d, c);
        c = R;
        if (h && !R)
            for (a = 0, g = k.d.length; a < g; a++) {
                f = k.d[a];
                if (M)
                    for (b = 0, d = w.length; b < d; b++) e = w[b], e.Gd && (G[b] = e.get(a));
                b = L ? S.apply(f.V[t], G) : S.apply(f, G);
                if (Ta(b, B)) {
                    R = !0;
                    break
                }
            }
        n.finish && n.finish(c || m);
        return m ? R : k.Jn()
    };
    Zb = a;
    h.prototype.kb = function() {
        var a, b, c;
        a = 0;
        for (b = this.ka.length; a < b; a++) c = this.ka[a], c.kb(), c.Gd && (this.ai = !0)
    };
    h.prototype.Uo = function() {
        var a = this.b,
            b, c, g = this.ka,
            d = this.eb;
        b = 0;
        for (c = g.length; b < c; ++b) d[b] = g[b].get();
        return this.Xb.apply(a.re, d)
    };
    h.prototype.To = function() {
        var a = this.type,
            b = this.Jd,
            c = a.He,
            g = this.ai,
            d = this.ka,
            e = this.eb,
            h = this.Xb,
            f = a.ga().Rc(),
            a = a.M,
            n = -1 < b,
            k, m, l, p, D, t;
        if (g)
            for (m = 0, p = d.length; m < p; ++m) D = d[m], D.Gd || (e[m] = D.get(0));
        else
            for (m = 0, p = d.length; m < p; ++m) e[m] = d[m].get(0);
        k = 0;
        for (l = f.length; k < l; ++k) {
            t = f[k];
            if (g)
                for (m = 0, p = d.length; m < p; ++m) D = d[m], D.Gd && (e[m] = D.get(k));
            n ? (m = 0, a && (m = t.type.Tg[c]), h.apply(t.V[b + m], e)) : h.apply(t, e)
        }
        return !1
    };
    $b = h;
    var M = [],
        D = -1;
    e.prototype.kb = function() {
        var a, b;
        if (11 === this.type) this.Wf = this.b.Qq(this.Nj, this.Yc.parent);
        else if (13 === this.type)
            for (a = 0, b = this.yg.length; a < b; a++) this.yg[a].kb();
        this.ee && this.ee.kb()
    };
    e.prototype.jy = function(a) {
        this.Gd || !a || a.Da.fm || (this.Gd = !0)
    };
    e.prototype.Os = function() {
        this.Gd = !0
    };
    e.prototype.yx = function(a) {
        this.Ue = a || 0;
        a = t();
        this.ee.get(a);
        D--;
        return a.data
    };
    e.prototype.zx = function(a) {
        this.Ue = a || 0;
        a = t();
        this.ee.get(a);
        D--;
        return ja(a.data) ? a.data : ""
    };
    e.prototype.Fx = function() {
        return this.object
    };
    e.prototype.wx = function() {
        return this.uq
    };
    e.prototype.Dx = function(a) {
        this.Ue = a || 0;
        a = t();
        this.ee.get(a);
        D--;
        return a.Qb() ? this.b.Vg(a.data) : this.b.Nk(a.data)
    };
    e.prototype.Ex = function() {
        return this.Fb
    };
    e.prototype.Cx = function() {
        return this.key
    };
    e.prototype.Bx = function() {
        return this.index
    };
    e.prototype.Ax = function(a) {
        a = a || 0;
        var b = this.Ua.type,
            c = null,
            c = b.ga(),
            g = c.Rc();
        if (g.length) c = g[a % g.length].type;
        else if (c.da.length) c = c.da[a % c.da.length].type;
        else if (b.d.length) c = b.d[a % b.d.length].type;
        else return 0;
        return this.index + c.Dk[b.He]
    };
    e.prototype.xx = function() {
        return this.Wf
    };
    e.prototype.vx = function() {
        return this.Iq
    };
    e.prototype.Gx = function() {
        var a, b;
        a = 0;
        for (b = this.yg.length; a < b; a++) this.Mj[a] = this.yg[a].get();
        return this.Mj
    };
    ac = e;
    l.prototype.kb = function() {
        this.Qa = c(this.Qa)
    };
    l.prototype.Se = function(a) {
        var b = this.b.Pq();
        this.parent && !this.Ki && b ? (this.qg >= b.length && (b.length = this.qg + 1), b[this.qg] = a) : this.data = a
    };
    l.prototype.$f = function() {
        var a = this.b.Pq();
        return !this.parent || this.Ki || !a || this.al ? this.data : this.qg >= a.length || "undefined" === typeof a[this.qg] ? this.B : a[this.qg]
    };
    l.prototype.ub = function() {
        !this.parent || this.Ki || this.al || this.Se(this.B)
    };
    Vb = l;
    p.prototype.toString = function() {
        return "include:" + this.xi.toString()
    };
    p.prototype.kb = function() {
        this.xi = this.b.mn[this.Nx];
        this.sheet.Zq.add(this);
        this.Qa = c(this.Qa);
        for (var a = this.parent; a;) a.group && a.qk.push(this), a = a.parent;
        this.pt()
    };
    p.prototype.ub = function() {
        this.parent && this.b.pj(this.b.H);
        this.xi.Kn || this.xi.ub(!0);
        this.parent && this.b.vg(this.b.H)
    };
    p.prototype.pt = function() {
        for (var a = this.parent; a;) {
            if (a.group && !a.Xg) {
                this.u = !1;
                return
            }
            a = a.parent
        }
        this.u = !0
    };
    ec = p;
    n.prototype.reset = function(a) {
        this.lc = a;
        this.Cc = this.Bb = 0;
        y(this.bt);
        this.kn = this.kg = !1
    };
    Ub = n
})();
(function() {
    function f(b, a) {
        this.Ua = b;
        this.b = b.b;
        this.type = a[0];
        this.get = [this.Mw, this.Iw, this.Vw, this.Yw, this.xw, this.Ww, this.Qw, this.Fw, this.Pw, this.Uw, this.yw, this.Tw, this.Gw, this.Rw, this.Nw, this.Ow, this.Jw, this.Kw, this.Ew, this.Xw, this.Sw, this.Lw, this.Dw, this.Hw][this.type];
        var c = null;
        this.Ne = this.ka = this.eb = this.Xb = this.rm = this.second = this.first = this.value = null;
        this.Jd = -1;
        this.Nd = null;
        this.yt = -1;
        this.Wf = this.Nj = null;
        this.Gh = !1;
        switch (this.type) {
            case 0:
            case 1:
            case 2:
                this.value = a[1];
                break;
            case 3:
                this.first = new cc(b, a[1]);
                break;
            case 18:
                this.first = new cc(b, a[1]);
                this.second = new cc(b, a[2]);
                this.rm = new cc(b, a[3]);
                break;
            case 19:
                this.Xb = this.b.cf(a[1]);
                this.Xb !== O.prototype.fa.random && this.Xb !== O.prototype.fa.sq || this.Ua.Os();
                this.eb = [];
                this.ka = [];
                3 === a.length ? (c = a[2], this.eb.length = c.length + 1) : this.eb.length = 1;
                break;
            case 20:
                this.Ne = this.b.H[a[1]];
                this.Jd = -1;
                this.Xb = this.b.cf(a[2]);
                this.Gh = a[3];
                sc && this.Xb === sc.prototype.fa.Dt && this.Ua.Os();
                a[4] ? this.Nd = new cc(b, a[4]) : this.Nd = null;
                this.eb = [];
                this.ka = [];
                6 === a.length ? (c = a[5], this.eb.length = c.length + 1) : this.eb.length = 1;
                break;
            case 21:
                this.Ne = this.b.H[a[1]];
                this.Gh = a[2];
                a[3] ? this.Nd = new cc(b, a[3]) : this.Nd = null;
                this.yt = a[4];
                break;
            case 22:
                this.Ne = this.b.H[a[1]];
                this.Ne.Lk(a[2]);
                this.Jd = this.Ne.xn(a[2]);
                this.Xb = this.b.cf(a[3]);
                this.Gh = a[4];
                a[5] ? this.Nd = new cc(b, a[5]) : this.Nd = null;
                this.eb = [];
                this.ka = [];
                7 === a.length ? (c = a[6], this.eb.length = c.length + 1) : this.eb.length = 1;
                break;
            case 23:
                this.Nj = a[1], this.Wf = null
        }
        this.Ua.jy(this.Ne);
        4 <= this.type && 17 >= this.type && (this.first = new cc(b, a[1]), this.second = new cc(b, a[2]));
        if (c) {
            var d, e;
            d = 0;
            for (e = c.length; d < e; d++) this.ka.push(new cc(b, c[d]))
        }
    }

    function d() {
        ++m;
        b.length === m && b.push(new bc);
        return b[m]
    }

    function c(b, a, c) {
        var d, e;
        d = 0;
        for (e = b.length; d < e; ++d) b[d].get(c), a[d + 1] = c.data
    }

    function k(b, a) {
        this.type = b || fc.Gg;
        this.data = a || 0;
        this.sg = null;
        this.type == fc.Gg && (this.data = Math.floor(this.data))
    }
    f.prototype.kb = function() {
        23 === this.type && (this.Wf = this.Ua.b.Qq(this.Nj, this.Ua.Yc.parent));
        this.first && this.first.kb();
        this.second && this.second.kb();
        this.rm && this.rm.kb();
        this.Nd && this.Nd.kb();
        if (this.ka) {
            var b, a;
            b = 0;
            for (a = this.ka.length; b < a; b++) this.ka[b].kb()
        }
    };
    var b = [],
        m = -1;
    f.prototype.Xw = function(b) {
        var a = this.ka,
            h = this.eb;
        h[0] = b;
        b = d();
        c(a, h, b);
        --m;
        this.Xb.apply(this.b.re, h)
    };
    f.prototype.Sw = function(b) {
        var a = this.Ne,
            h = this.eb,
            f = this.ka,
            e = this.Nd,
            k = this.Xb,
            p = this.Ua.Ue,
            n = a.ga(),
            L = n.Rc();
        if (!L.length)
            if (n.da.length) L = n.da;
            else {
                this.Gh ? b.Mb("") : b.Pa(0);
                return
            }
        h[0] = b;
        b.sg = a;
        b = d();
        c(f, h, b);
        e && (e.get(b), b.Qb() && (p = b.data, L = a.d));
        --m;
        a = L.length;
        if (p >= a || p <= -a) p %= a;
        0 > p && (p += a);
        k.apply(L[p], h)
    };
    f.prototype.Dw = function(b) {
        var a = this.Ne,
            h = this.eb,
            f = this.ka,
            e = this.Nd,
            k = this.Jd,
            p = this.Xb,
            n = this.Ua.Ue,
            L = a.ga(),
            M = L.Rc();
        if (!M.length)
            if (L.da.length) M = L.da;
            else {
                this.Gh ? b.Mb("") : b.Pa(0);
                return
            }
        h[0] = b;
        b.sg = a;
        b = d();
        c(f, h, b);
        e && (e.get(b), b.Qb() && (n = b.data, M = a.d));
        --m;
        f = M.length;
        if (n >= f || n <= -f) n %= f;
        0 > n && (n += f);
        n = M[n];
        M = 0;
        a.M && (M = n.type.Tg[a.He]);
        p.apply(n.V[k + M], h)
    };
    f.prototype.Lw = function(b) {
        var a = this.Nd,
            c = this.Ne,
            f = this.yt,
            e = this.Ua.Ue,
            k = c.ga(),
            p = k.Rc();
        if (!p.length)
            if (k.da.length) p = k.da;
            else {
                this.Gh ? b.Mb("") : b.Pa(0);
                return
            }
        if (a) {
            k = d();
            a.get(k);
            if (k.Qb()) {
                e = k.data;
                p = c.d;
                0 !== p.length && (e %= p.length, 0 > e && (e += p.length));
                e = c.Cn(e);
                c = e.Db[f];
                ja(c) ? b.Mb(c) : b.G(c);
                --m;
                return
            }--m
        }
        a = p.length;
        if (e >= a || e <= -a) e %= a;
        0 > e && (e += a);
        e = p[e];
        p = 0;
        c.M && (p = e.type.Dk[c.He]);
        c = e.Db[f + p];
        ja(c) ? b.Mb(c) : b.G(c)
    };
    f.prototype.Mw = function(b) {
        b.type = fc.Gg;
        b.data = this.value
    };
    f.prototype.Iw = function(b) {
        b.type = fc.Fg;
        b.data = this.value
    };
    f.prototype.Vw = function(b) {
        b.type = fc.String;
        b.data = this.value
    };
    f.prototype.Yw = function(b) {
        this.first.get(b);
        b.Qb() && (b.data = -b.data)
    };
    f.prototype.xw = function(b) {
        this.first.get(b);
        var a = d();
        this.second.get(a);
        b.Qb() && a.Qb() && (b.data += a.data, a.dh() && b.qh());
        --m
    };
    f.prototype.Ww = function(b) {
        this.first.get(b);
        var a = d();
        this.second.get(a);
        b.Qb() && a.Qb() && (b.data -= a.data, a.dh() && b.qh());
        --m
    };
    f.prototype.Qw = function(b) {
        this.first.get(b);
        var a = d();
        this.second.get(a);
        b.Qb() && a.Qb() && (b.data *= a.data, a.dh() && b.qh());
        --m
    };
    f.prototype.Fw = function(b) {
        this.first.get(b);
        var a = d();
        this.second.get(a);
        b.Qb() && a.Qb() && (b.data /= a.data, b.qh());
        --m
    };
    f.prototype.Pw = function(b) {
        this.first.get(b);
        var a = d();
        this.second.get(a);
        b.Qb() && a.Qb() && (b.data %= a.data, a.dh() && b.qh());
        --m
    };
    f.prototype.Uw = function(b) {
        this.first.get(b);
        var a = d();
        this.second.get(a);
        b.Qb() && a.Qb() && (b.data = Math.pow(b.data, a.data), a.dh() && b.qh());
        --m
    };
    f.prototype.yw = function(b) {
        this.first.get(b);
        var a = d();
        this.second.get(a);
        a.gh() || b.gh() ? this.Aw(b, a) : this.zw(b, a);
        --m
    };
    f.prototype.Aw = function(b, a) {
        b.gh() && a.gh() ? this.Cw(b, a) : this.Bw(b, a)
    };
    f.prototype.Cw = function(b, a) {
        b.data += a.data
    };
    f.prototype.Bw = function(b, a) {
        b.gh() ? b.data += (Math.round(1E10 * a.data) / 1E10).toString() : b.Mb(b.data.toString() + a.data)
    };
    f.prototype.zw = function(b, a) {
        b.Pa(b.data && a.data ? 1 : 0)
    };
    f.prototype.Tw = function(b) {
        this.first.get(b);
        var a = d();
        this.second.get(a);
        b.Qb() && a.Qb() && (b.data || a.data ? b.Pa(1) : b.Pa(0));
        --m
    };
    f.prototype.Ew = function(b) {
        this.first.get(b);
        b.data ? this.second.get(b) : this.rm.get(b)
    };
    f.prototype.Gw = function(b) {
        this.first.get(b);
        var a = d();
        this.second.get(a);
        b.Pa(b.data === a.data ? 1 : 0);
        --m
    };
    f.prototype.Rw = function(b) {
        this.first.get(b);
        var a = d();
        this.second.get(a);
        b.Pa(b.data !== a.data ? 1 : 0);
        --m
    };
    f.prototype.Nw = function(b) {
        this.first.get(b);
        var a = d();
        this.second.get(a);
        b.Pa(b.data < a.data ? 1 : 0);
        --m
    };
    f.prototype.Ow = function(b) {
        this.first.get(b);
        var a = d();
        this.second.get(a);
        b.Pa(b.data <= a.data ? 1 : 0);
        --m
    };
    f.prototype.Jw = function(b) {
        this.first.get(b);
        var a = d();
        this.second.get(a);
        b.Pa(b.data > a.data ? 1 : 0);
        --m
    };
    f.prototype.Kw = function(b) {
        this.first.get(b);
        var a = d();
        this.second.get(a);
        b.Pa(b.data >= a.data ? 1 : 0);
        --m
    };
    f.prototype.Hw = function(b) {
        var a = this.Wf.$f();
        ia(a) ? b.G(a) : b.Mb(a)
    };
    cc = f;
    k.prototype.dh = function() {
        return this.type === fc.Fg
    };
    k.prototype.Qb = function() {
        return this.type === fc.Gg || this.type === fc.Fg
    };
    k.prototype.gh = function() {
        return this.type === fc.String
    };
    k.prototype.qh = function() {
        this.dh() || (this.gh() && (this.data = parseFloat(this.data)), this.type = fc.Fg)
    };
    k.prototype.Pa = function(b) {
        this.type = fc.Gg;
        this.data = Math.floor(b)
    };
    k.prototype.G = function(b) {
        this.type = fc.Fg;
        this.data = b
    };
    k.prototype.Mb = function(b) {
        this.type = fc.String;
        this.data = b
    };
    k.prototype.Ps = function(b) {
        ia(b) ? (this.type = fc.Fg, this.data = b) : ja(b) ? (this.type = fc.String, this.data = b.toString()) : (this.type = fc.Gg, this.data = 0)
    };
    bc = k;
    fc = {
        Gg: 0,
        Fg: 1,
        String: 2
    }
})();

function O(f) {
    this.b = f;
    this.Oc = []
}
O.prototype.Lb = function() {
    var f = {},
        d, c, k, b, m, g, a, h;
    f.waits = [];
    var t = f.waits,
        e;
    d = 0;
    for (c = this.Oc.length; d < c; d++) {
        g = this.Oc[d];
        e = {
            t: g.time,
            st: g.Ws,
            s: g.cp,
            ev: g.Sg.ta,
            sm: [],
            sols: {}
        };
        g.Sg.rd[g.Cc] && (e.act = g.Sg.rd[g.Cc].ta);
        k = 0;
        for (b = g.Qa.length; k < b; k++) e.sm.push(g.Qa[k].ta);
        for (m in g.yc)
            if (g.yc.hasOwnProperty(m)) {
                a = this.b.H[parseInt(m, 10)];
                h = {
                    sa: g.yc[m].Wl,
                    insts: []
                };
                k = 0;
                for (b = g.yc[m].Je.length; k < b; k++) h.insts.push(g.yc[m].Je[k].uid);
                e.sols[a.ta.toString()] = h
            }
        t.push(e)
    }
    return f
};
O.prototype.$b = function(f) {
    f = f.waits;
    var d, c, k, b, m, g, a, h, t, e, l;
    y(this.Oc);
    d = 0;
    for (c = f.length; d < c; d++)
        if (g = f[d], h = this.b.lq[g.ev.toString()]) {
            t = -1;
            k = 0;
            for (b = h.rd.length; k < b; k++)
                if (h.rd[k].ta === g.act) {
                    t = k;
                    break
                }
            if (-1 !== t) {
                a = {
                    yc: {},
                    Qa: [],
                    jn: !1
                };
                a.time = g.t;
                a.Ws = g.st || "";
                a.cp = !!g.s;
                a.Sg = h;
                a.Cc = t;
                k = 0;
                for (b = g.sm.length; k < b; k++)(h = this.b.Pk(g.sm[k])) && a.Qa.push(h);
                for (m in g.sols)
                    if (g.sols.hasOwnProperty(m) && (h = this.b.Pk(parseInt(m, 10)))) {
                        t = g.sols[m];
                        e = {
                            Wl: t.sa,
                            Je: []
                        };
                        k = 0;
                        for (b = t.insts.length; k < b; k++)(l = this.b.qi(t.insts[k])) && e.Je.push(l);
                        a.yc[h.index.toString()] = e
                    }
                this.Oc.push(a)
            }
        }
};
(function() {
    function f() {}

    function d() {}

    function c() {}
    var k = O.prototype;
    f.prototype.Ot = function() {
        return !0
    };
    f.prototype.Hp = function() {
        return !0
    };
    f.prototype.uu = function() {
        return !0
    };
    f.prototype.cu = function(b) {
        return b ? b.visible : !1
    };
    f.prototype.qv = function() {
        var b = this.b.oi().U;
        "undefined" === typeof b.TriggerOnce_lastTick && (b.TriggerOnce_lastTick = -1);
        var a = b.TriggerOnce_lastTick,
            c = this.b.Bg;
        b.TriggerOnce_lastTick = c;
        return this.b.ko || a !== c - 1
    };
    f.prototype.Nt = function(b) {
        var a = this.b.oi(),
            c = a.U.Every_lastTime || 0,
            d = this.b.rb.ma;
        "undefined" === typeof a.U.Every_seconds && (a.U.Every_seconds = b);
        var e = a.U.Every_seconds;
        if (d >= c + e) return a.U.Every_lastTime = c + e, d >= a.U.Every_lastTime + .04 && (a.U.Every_lastTime = d), a.U.Every_seconds = b, !0;
        d < c - .1 && (a.U.Every_lastTime = d);
        return !1
    };
    f.prototype.Kt = function(b, a, c) {
        return gc(b.$f(), a, c)
    };
    f.prototype.Xt = function(b) {
        return (b = this.b.vi[b.toLowerCase()]) && b.Xg
    };
    f.prototype.Bp = function() {
        var b = this.b.ob();
        return b.kn ? !1 : !b.kg
    };
    f.prototype.Ip = function() {
        return !0
    };
    f.prototype.ku = function() {
        return !0
    };
    f.prototype.Im = function() {
        return !0
    };
    f.prototype.Mp = function() {
        return !0
    };
    f.prototype.vu = function() {
        return !0
    };
    f.prototype.Uj = function() {
        return !0
    };
    f.prototype.Ct = function(b, a, c) {
        return Na(A(b), A(c)) <= A(a)
    };
    f.prototype.Wt = function(b, a) {
        return Qa(A(b), A(a))
    };
    f.prototype.Ut = function(b, a, c) {
        b = La(b);
        a = La(a);
        c = La(c);
        return Qa(c, a) ? Qa(b, a) && !Qa(b, c) : !(!Qa(b, a) && Qa(b, c))
    };
    k.e = new f;
    d.prototype.Mt = function(b, a, c, d) {
        if (a && b && (a = this.b.cn(b, a, c, d))) {
            this.b.fd++;
            var e;
            this.b.trigger(Object.getPrototypeOf(b.Da).e.Hg, a);
            if (a.qc)
                for (c = 0, d = a.siblings.length; c < d; c++) e = a.siblings[c], this.b.trigger(Object.getPrototypeOf(e.type.Da).e.Hg, e);
            this.b.fd--;
            b = b.ga();
            b.xa = !1;
            y(b.d);
            b.d[0] = a;
            if (a.qc)
                for (c = 0, d = a.siblings.length; c < d; c++) e = a.siblings[c], b = e.type.ga(), b.xa = !1, y(b.d), b.d[0] = e
        }
    };
    d.prototype.Pu = function(b, a) {
        b && b.visible !== a && (b.visible = a, this.b.ra = !0)
    };
    d.prototype.$u = function(b, a) {
        0 === b.Oj ? ia(a) ? b.Se(a) : b.Se(parseFloat(a)) : 1 === b.Oj && b.Se(a.toString())
    };
    d.prototype.Bt = function(b, a) {
        0 === b.Oj ? ia(a) ? b.Se(b.$f() + a) : b.Se(b.$f() +
            parseFloat(a)) : 1 === b.Oj && b.Se(b.$f() + a.toString())
    };
    d.prototype.nv = function(b, a) {
        0 === b.Oj && (ia(a) ? b.Se(b.$f() - a) : b.Se(b.$f() - parseFloat(a)))
    };
    var b = [],
        m = [];
    d.prototype.rv = function(c) {
        if (!(0 > c)) {
            var a, d, f, e = this.b.ob(),
                k;
            b.length ? k = b.pop() : k = {
                yc: {},
                Qa: []
            };
            k.jn = !1;
            k.time = this.b.rb.ma + c;
            k.Ws = "";
            k.cp = !1;
            k.Sg = e.lc;
            k.Cc = e.Cc + 1;
            c = 0;
            for (a = this.b.H.length; c < a; c++) f = this.b.H[c], d = f.ga(), d.xa && -1 === e.lc.Qa.indexOf(f) || (k.Qa.push(f), f = void 0, m.length ? f = m.pop() : f = {
                Je: []
            }, f.Wl = !1, f.Wl = d.xa, Ca(f.Je, d.d), k.yc[c.toString()] = f);
            this.Oc.push(k);
            return !0
        }
    };
    k.A = new d;
    c.prototype["int"] = function(b, a) {
        ja(a) ? (b.Pa(parseInt(a, 10)), isNaN(b.data) && (b.data = 0)) : b.Pa(a)
    };
    c.prototype["float"] = function(b, a) {
        ja(a) ? (b.G(parseFloat(a)), isNaN(b.data) && (b.data = 0)) : b.G(a)
    };
    c.prototype.random = function(b, a, c) {
        void 0 === c ? b.G(Math.random() * a) : b.G(Math.random() * (c - a) + a)
    };
    c.prototype.sqrt = function(b, a) {
        b.G(Math.sqrt(a))
    };
    c.prototype.abs = function(b, a) {
        b.G(Math.abs(a))
    };
    c.prototype.round = function(b, a) {
        b.Pa(Math.round(a))
    };
    c.prototype.floor = function(b, a) {
        b.Pa(Math.floor(a))
    };
    c.prototype.ceil = function(b, a) {
        b.Pa(Math.ceil(a))
    };
    c.prototype.sin = function(b, a) {
        b.G(Math.sin(A(a)))
    };
    c.prototype.cos = function(b, a) {
        b.G(Math.cos(A(a)))
    };
    c.prototype.tan = function(b, a) {
        b.G(Math.tan(A(a)))
    };
    c.prototype.asin = function(b, a) {
        b.G(Ha(Math.asin(a)))
    };
    c.prototype.acos = function(b, a) {
        b.G(Ha(Math.acos(a)))
    };
    c.prototype.atan = function(b, a) {
        b.G(Ha(Math.atan(a)))
    };
    c.prototype.exp = function(b, a) {
        b.G(Math.exp(a))
    };
    c.prototype.log10 = function(b, a) {
        b.G(Math.log(a) / Math.LN10)
    };
    c.prototype.max =
        function(b) {
            var a = arguments[1];
            "number" !== typeof a && (a = 0);
            var c, d, e;
            c = 2;
            for (d = arguments.length; c < d; c++) e = arguments[c], "number" === typeof e && a < e && (a = e);
            b.G(a)
        };
    c.prototype.min = function(b) {
        var a = arguments[1];
        "number" !== typeof a && (a = 0);
        var c, d, e;
        c = 2;
        for (d = arguments.length; c < d; c++) e = arguments[c], "number" === typeof e && a > e && (a = e);
        b.G(a)
    };
    c.prototype.Ee = function(b) {
        b.G(this.b.Ee)
    };
    c.prototype.Cg = function(b) {
        b.G(this.b.Cg)
    };
    c.prototype.time = function(b) {
        b.G(this.b.rb.ma)
    };
    c.prototype.Bg = function(b) {
        b.Pa(this.b.Bg)
    };
    c.prototype.ql = function(b) {
        b.Pa(this.b.ql)
    };
    c.prototype.un = function(b) {
        b.Pa(this.b.un)
    };
    c.prototype.j = function(b, a, c, d, e) {
        b.G(Ha(Ma(a, c, d, e)))
    };
    c.prototype.left = function(b, a, c) {
        b.Mb(ja(a) ? a.substr(0, c) : "")
    };
    c.prototype.right = function(b, a, c) {
        b.Mb(ja(a) ? a.substr(a.length - c) : "")
    };
    c.prototype.replace = function(b, a, c, d) {
        ja(a) && ja(c) && ja(d) ? b.Mb(a.replace(new RegExp(bb(c), "gi"), d)) : b.Mb(ja(a) ? a : "")
    };
    c.prototype.trim = function(b, a) {
        b.Mb(ja(a) ? a.trim() : "")
    };
    c.prototype.sq = function(b) {
        var a = qa(Math.random() * (arguments.length - 1));
        b.Ps(arguments[a + 1])
    };
    c.prototype.an = function(b) {
        b.G(this.b.an / 1E3)
    };
    c.prototype.Dz = function(b, a) {
        var c = this.b.Mk(a);
        b.G(c ? c.Ea : 0)
    };
    c.prototype.Fz = function(b, a) {
        var c = this.b.Mk(a);
        b.G(c ? c.Fa : 0)
    };
    c.prototype.Ez = function(b, a) {
        var c = this.b.Mk(a);
        b.G(c ? c.La : 0)
    };
    c.prototype.Cz = function(b, a) {
        var c = this.b.Mk(a);
        b.G(c ? c.Ka : 0)
    };
    c.prototype.oh = function(b) {
        b.G(this.b.oh)
    };
    k.fa = new c;
    k.Xy = function() {
        var c, a, d, f, e, k, p = this.b.ob();
        c = 0;
        for (d = this.Oc.length; c < d; c++) {
            f = this.Oc[c];
            if (-1 === f.time) {
                if (!f.cp) continue
            } else if (f.time > this.b.rb.ma) continue;
            p.lc = f.Sg;
            p.Cc = f.Cc;
            p.Bb = 0;
            for (a in f.yc) f.yc.hasOwnProperty(a) && (e = this.b.H[parseInt(a, 10)].ga(), k = f.yc[a], e.xa = k.Wl, Ca(e.d, k.Je), e = k, y(e.Je), m.push(e));
            f.Sg.Uy();
            this.b.Zm(f.Qa);
            f.jn = !0
        }
        a = c = 0;
        for (d = this.Oc.length; c < d; c++) f = this.Oc[c], this.Oc[a] = f, f.jn ? (Wa(f.yc), y(f.Qa), b.push(f)) : a++;
        Aa(this.Oc, a)
    }
})();
(function() {
    qb = function(d, c) {
        var f = d[1],
            b = d[3],
            m = d[4],
            g = d[5],
            a = d[6],
            h = d[7],
            t = d[8];
        c.e || (c.e = {});
        c.A || (c.A = {});
        c.fa || (c.fa = {});
        var e = c.e,
            l = c.A,
            p = c.fa;
        b && (e.Lt = function(a, b) {
            return gc(this.x, a, b)
        }, e.yp = function(a, b) {
            return gc(this.y, a, b)
        }, e.Zz = function() {
            var a = this.q;
            this.Ra();
            var b = this.Xa;
            return !(b.right < a.Ea || b.bottom < a.Fa || b.left > a.La || b.top > a.Ka)
        }, e.$z = function() {
            this.Ra();
            var a = this.Xa,
                b = this.b.Na;
            return 0 > a.right || 0 > a.bottom || a.left > b.width || a.top > b.height
        }, e.nA = function(a, b, c) {
            var d = this.ga(),
                e = d.Rc();
            if (!e.length) return !1;
            var g = e[0],
                f = g,
                h = Sa(g.x, g.y, b, c),
                k, m, l;
            k = 1;
            for (m = e.length; k < m; k++)
                if (g = e[k], l = Sa(g.x, g.y, b, c), 0 === a && l < h || 1 === a && l > h) h = l, f = g;
            d.lj(f);
            return !0
        }, l.dv = function(a) {
            this.x !== a && (this.x = a, this.Ma())
        }, l.Xp = function(a) {
            this.y !== a && (this.y = a, this.Ma())
        }, l.Up = function(a, b) {
            if (this.x !== a || this.y !== b) this.x = a, this.y = b, this.Ma()
        }, l.JA = function(a, b) {
            var c = a.ox(this);
            if (c) {
                var d;
                c.pi ? (d = c.pi(b, !0), c = c.pi(b, !1)) : (d = c.x, c = c.y);
                if (this.x !== d || this.y !== c) this.x = d, this.y = c, this.Ma()
            }
        }, l.eA = function(a) {
            0 !== a && (this.x += Math.cos(this.j) * a, this.y += Math.sin(this.j) * a, this.Ma())
        }, l.dA = function(a, b) {
            0 !== b && (this.x += Math.cos(A(a)) * b, this.y += Math.sin(A(a)) * b, this.Ma())
        }, p.Zp = function(a) {
            a.G(this.x)
        }, p.Mm = function(a) {
            a.G(this.y)
        }, p.Ee = function(a) {
            a.G(this.b.Zf(this))
        });
        m && (e.Tz = function(a, b) {
            return gc(this.width, a, b)
        }, e.Rz = function(a, b) {
            return gc(this.height, a, b)
        }, l.OA = function(a) {
            this.width !== a && (this.width = a, this.Ma())
        }, l.FA = function(a) {
            this.height !== a && (this.height = a, this.Ma())
        }, l.Wu = function(a, b) {
            if (this.width !== a || this.height !== b) this.width = a, this.height = b, this.Ma()
        }, p.sv = function(a) {
            a.G(this.width)
        }, p.Tt = function(a) {
            a.G(this.height)
        }, p.Nz = function(a) {
            this.Ra();
            a.G(this.Xa.left)
        }, p.Pz = function(a) {
            this.Ra();
            a.G(this.Xa.top)
        }, p.Oz = function(a) {
            this.Ra();
            a.G(this.Xa.right)
        }, p.Mz = function(a) {
            this.Ra();
            a.G(this.Xa.bottom)
        });
        g && (e.Ct = function(a, b) {
            return Na(this.j, A(b)) <= A(a)
        }, e.Wt = function(a) {
            return Qa(this.j, A(a))
        }, e.Ut = function(a, b) {
            var c = La(a),
                d = La(b),
                e = Ja(this.j);
            return Qa(d, c) ? Qa(e, c) && !Qa(e, d) : !(!Qa(e, c) && Qa(e, d))
        }, l.AA = function(a) {
            a = A(Ia(a));
            isNaN(a) || this.j === a || (this.j = a, this.Ma())
        }, l.wA = function(a) {
            0 === a || isNaN(a) || (this.j += A(a), this.j = Ja(this.j), this.Ma())
        }, l.xA = function(a) {
            0 === a || isNaN(a) || (this.j -= A(a), this.j = Ja(this.j), this.Ma())
        }, l.yA = function(a, b) {
            var c = Pa(this.j, A(b), A(a));
            isNaN(c) || this.j === c || (this.j = c, this.Ma())
        }, l.zA = function(a, b, c) {
            a = Pa(this.j, Math.atan2(c - this.y, b - this.x), A(a));
            isNaN(a) || this.j === a || (this.j = a, this.Ma())
        }, l.NA = function(a, b) {
            var c = Math.atan2(b -
                this.y, a - this.x);
            isNaN(c) || this.j === c || (this.j = c, this.Ma())
        }, p.Lz = function(a) {
            a.G(Ka(this.j))
        });
        f || (e.Ht = function(a, b, c) {
            return gc(this.Db[a], b, c)
        }, e.Vt = function(a) {
            return this.Db[a]
        }, e.oA = function(a, b) {
            var c = this.ga(),
                d = c.Rc();
            if (!d.length) return !1;
            var e = d[0],
                g = e,
                f = e.Db[b],
                h, k, m;
            h = 1;
            for (k = d.length; h < k; h++)
                if (e = d[h], m = e.Db[b], 0 === a && m < f || 1 === a && m > f) f = m, g = e;
            c.lj(g);
            return !0
        }, e.mA = function(a) {
            var b, c, d, e, g;
            if (this.b.oi().Vk) {
                g = this.ga();
                if (g.xa)
                    for (g.xa = !1, y(g.d), y(g.da), d = this.d, b = 0, c = d.length; b < c; b++) e = d[b], e.uid === a ? g.da.push(e) : g.d.push(e);
                else {
                    d = b = 0;
                    for (c = g.d.length; b < c; b++) e = g.d[b], g.d[d] = e, e.uid === a ? g.da.push(e) : d++;
                    Aa(g.d, d)
                }
                this.sd();
                return !!g.d.length
            }
            e = this.b.qi(a);
            if (!e) return !1;
            g = this.ga();
            if (!g.xa && -1 === g.d.indexOf(e)) return !1;
            if (this.M)
                for (a = e.type.$a, b = 0, c = a.length; b < c; b++) {
                    if (a[b] === this) return g.lj(e), this.sd(), !0
                } else if (e.type === this) return g.lj(e), this.sd(), !0;
            return !1
        }, e.Hg = function() {
            return !0
        }, e.nu = function() {
            return !0
        }, l.Ou = function(a, b) {
            var c = this.Db;
            ia(c[a]) ? c[a] = ia(b) ? b : parseFloat(b) : ja(c[a]) && (c[a] = ja(b) ? b : b.toString())
        }, l.Kz = function(a, b) {
            var c = this.Db;
            ia(c[a]) ? c[a] = ia(b) ? c[a] + b : c[a] + parseFloat(b) : ja(c[a]) && (c[a] = ja(b) ? c[a] + b : c[a] + b.toString())
        }, l.SA = function(a, b) {
            var c = this.Db;
            ia(c[a]) && (c[a] = ia(b) ? c[a] - b : c[a] - parseFloat(b))
        }, l.Nu = function(a, b) {
            this.Db[a] = b ? 1 : 0
        }, l.TA = function(a) {
            this.Db[a] = 1 - this.Db[a]
        }, l.zp = function() {
            this.b.we(this)
        }, l.eu || (l.eu = function(a) {
            var b, c;
            try {
                b = JSON.parse(a)
            } catch (d) {
                return
            }
            this.b.hl(this, b, !0);
            this.Zd && this.Zd();
            if (this.V)
                for (a = 0, b = this.V.length; a < b; ++a) c = this.V[a], c.Zd && c.Zd()
        }), p.Vz = function(a) {
            var b = a.sg.d.length,
                c, d, e;
            c = 0;
            for (d = this.b.Kd.length; c < d; c++) e = this.b.Kd[c], a.sg.M ? 0 <= e.type.$a.indexOf(a.sg) && b++ : e.type === a.sg && b++;
            a.Pa(b)
        }, p.qA = function(a) {
            a.Pa(a.sg.ga().Rc().length)
        }, p.VA = function(a) {
            a.Pa(this.uid)
        }, p.Wz = function(a) {
            a.Pa(this.si())
        }, p.xp || (p.xp = function(a) {
            a.Mb(JSON.stringify(this.b.Vo(this, !0)))
        }));
        a && (e.au = function() {
            return this.visible
        }, l.av = function(a) {
            !a !== !this.visible && (this.visible = !!a, this.b.ra = !0)
        }, e.Sz = function(a, b) {
            return gc(mb(100 * this.opacity), a, b)
        }, l.Su = function(a) {
            a = a / 100;
            0 > a ? a = 0 : 1 < a && (a = 1);
            a !== this.opacity && (this.opacity = a, this.b.ra = !0)
        }, p.Opacity = function(a) {
            a.G(mb(100 * this.opacity))
        });
        h && (e.Yz = function(a) {
            return a ? this.q === a : !1
        }, e.pA = function(a) {
            var b = this.ga(),
                c = b.Rc();
            if (!c.length) return !1;
            var d = c[0],
                e = d,
                g, f;
            g = 1;
            for (f = c.length; g < f; g++)
                if (d = c[g], 0 === a) {
                    if (d.q.index > e.q.index || d.q.index === e.q.index && d.ge() > e.ge()) e = d
                } else if (d.q.index < e.q.index || d.q.index === e.q.index && d.ge() < e.ge()) e = d;
            b.lj(e);
            return !0
        }, l.hA = function() {
            var a = this.q,
                b = a.d;
            b.length && b[b.length - 1] === this || (a.Fh(this, !1), a.ci(this, !1), this.b.ra = !0)
        }, l.fA = function() {
            var a = this.q,
                b = a.d;
            b.length && b[0] === this || (a.Fh(this, !1), a.Iy(this), this.b.ra = !0)
        }, l.gA = function(a) {
            a && a != this.q && (this.q.Fh(this, !0), this.q = a, a.ci(this, !0), this.b.ra = !0)
        }, l.XA = function(a, b) {
            var c = 0 === a;
            if (b) {
                var d = b.Bn(this);
                d && d.uid !== this.uid && (this.q.index !== d.q.index && (this.q.Fh(this, !0), this.q = d.q, d.q.ci(this, !0)), this.q.ly(this, d, c), this.b.ra = !0)
            }
        }, p.cA = function(a) {
            a.Pa(this.q.Zr)
        }, p.bA = function(a) {
            a.Mb(this.q.name)
        }, p.WA = function(a) {
            a.Pa(this.ge())
        });
        t && (l.CA = function(a, b) {
            if (this.b.F) {
                var c = this.type.An(b);
                if (!(0 > c)) {
                    var d = 1 === a;
                    this.df[c] !== d && (this.df[c] = d, this.Vd(), this.b.ra = !0)
                }
            }
        }, l.DA = function(a, b, c) {
            if (this.b.F) {
                var d = this.type.An(a);
                0 > d || (a = this.type.Y[d], d = this.cb[d], b = Math.floor(b), 0 > b || b >= d.length || (1 === this.b.F.ux(a.wb, b) && (c /= 100), d[b] !== c && (d[b] = c, a.u && (this.b.ra = !0))))
            }
        })
    };
    Kb = function() {
        this.Vm = this.gk = !0;
        this.type.ak = !0;
        this.b.ra = !0;
        var d, c, f = this.Sm;
        d = 0;
        for (c = f.length; d < c; ++d) f[d](this);
        this.q.qd && this.Ra()
    };
    Lb = function(d) {
        d && this.Sm.push(d)
    };
    Nb = function() {
        if (this.gk) {
            var d = this.Xa,
                c = this.Dc;
            d.set(this.x, this.y, this.x + this.width, this.y + this.height);
            d.offset(-this.uc * this.width, -this.vc * this.height);
            this.j ? (d.offset(-this.x, -this.y), c.Rs(d, this.j), c.offset(this.x, this.y), c.mq(d)) : c.Kh(d);
            d.normalize();
            this.gk = !1;
            this.wt()
        }
    };
    var f = new wa(0, 0, 0, 0);
    Ob = function() {
        if (this.q.qd) {
            var d = this.q.fc,
                c = this.Xa;
            f.set(d.Ac(c.left), d.Bc(c.top), d.Ac(c.right), d.Bc(c.bottom));
            this.Ic.ji(f) || (this.Ic.right < this.Ic.left ? d.update(this, null, f) : d.update(this, this.Ic, f), this.Ic.Og(f), this.q.Sd = !0)
        }
    };
    Pb = function() {
        if (this.Vm && this.Of) {
            this.Ra();
            var d = this.type.pk,
                c = this.Xa;
            f.set(d.Ac(c.left), d.Bc(c.top), d.Ac(c.right), d.Bc(c.bottom));
            this.mf.ji(f) || (this.mf.right < this.mf.left ? d.update(this, null, f) : d.update(this, this.mf, f), this.mf.Og(f), this.Vm = !1)
        }
    };
    Mb = function(d, c) {
        return this.Xa.jc(d, c) && this.Dc.jc(d, c) ? this.Th ? this.sB(d, c) : this.Ga && !this.Ga.bh() ? (this.Ga.Mg(this.width, this.height, this.j), this.Ga.jc(d - this.x, c - this.y)) : !0 : !1
    };
    Gb = function() {
        this.type.xm();
        return this.dg
    };
    Qb = function() {
        this.q.qp();
        return this.Xd
    };
    Rb = function() {
        y(this.Ba);
        var d, c, f, b = !0;
        d = 0;
        for (c = this.df.length; d < c; d++) this.df[d] && (f = this.type.Y[d], this.Ba.push(f), f.Qd || (b = !1));
        this.xt = !!this.Ba.length;
        this.Te = b
    };
    Hb = function() {
        return "Inst" + this.Cs
    };
    tb = function(d) {
        if (d && d.qc && d.type != this) {
            var c, f, b;
            c = 0;
            for (f = d.siblings.length; c < f; c++)
                if (b = d.siblings[c], b.type == this) return b
        }
        d = this.ga().Rc();
        return d.length ? d[0] : null
    };
    ub = function(d) {
        var c = this.ga().Rc();
        return c.length ? c[d.si() % c.length] : null
    };
    sb = function() {
        if (this.Oh && !this.M) {
            var d, c;
            d = 0;
            for (c = this.d.length; d < c; d++) this.d[d].dg = d;
            var f = d,
                b = this.b.Kd;
            d = 0;
            for (c = b.length; d < c; ++d) b[d].type === this && (b[d].dg = f++);
            this.Oh = !1
        }
    };
    Eb = function(d) {
        if (d < this.d.length) return this.d[d];
        d -= this.d.length;
        var c = this.b.Kd,
            f, b;
        f = 0;
        for (b = c.length; f < b; ++f)
            if (c[f].type === this) {
                if (0 === d) return c[f];
                --d
            }
        return null
    };
    vb = function() {
        return this.Ve[this.de]
    };
    wb = function() {
        this.de++;
        this.de === this.Ve.length ? this.Ve.push(new rb(this)) : (this.Ve[this.de].xa = !0, y(this.Ve[this.de].da))
    };
    xb = function() {
        this.de++;
        this.de === this.Ve.length && this.Ve.push(new rb(this));
        var d = this.Ve[this.de],
            c = this.Ve[this.de - 1];
        c.xa ? (d.xa = !0, y(d.da)) : (d.xa = !1, Ca(d.d, c.d), Ca(d.da, c.da))
    };
    yb = function() {
        this.de--
    };
    Ab = function(d) {
        var c, f, b, m, g, a = 0;
        if (!this.M)
            for (c = 0, f = this.$a.length; c < f; c++)
                for (g = this.$a[c], b = 0, m = g.bb.length; b < m; b++) {
                    if (d === g.bb[b].name) return this.U.lastBehIndex = a, g.bb[b];
                    a++
                }
        c = 0;
        for (f = this.bb.length; c < f; c++) {
            if (d === this.bb[c].name) return this.U.lastBehIndex = a, this.bb[c];
            a++
        }
        return null
    };
    Bb = function(d) {
        return this.Lk(d) ? this.U.lastBehIndex : -1
    };
    Cb = function(d) {
        var c, f;
        c = 0;
        for (f = this.Y.length; c < f; c++)
            if (this.Y[c].name === d) return c;
        return -1
    };
    Db = function() {
        if (this.qc && !this.M) {
            var d, c, f, b, m, g, a;
            this.xm();
            g = this.ga();
            var h = g.xa,
                t = (d = this.b.ob()) && d.lc && d.lc.jd;
            d = 0;
            for (c = this.Qc.length; d < c; d++)
                if (m = this.Qc[d], m !== this && (m.xm(), a = m.ga(), a.xa = h, !h)) {
                    y(a.d);
                    f = 0;
                    for (b = g.d.length; f < b; ++f) a.d[f] = m.Cn(g.d[f].dg);
                    if (t)
                        for (y(a.da), f = 0, b = g.da.length; f < b; ++f) a.da[f] = m.Cn(g.da[f].dg)
                }
        }
    };
    Fb = function() {
        return "Type" + this.ta
    };
    gc = function(d, c, f) {
        if ("undefined" === typeof d || "undefined" === typeof f) return !1;
        switch (c) {
            case 0:
                return d === f;
            case 1:
                return d !== f;
            case 2:
                return d < f;
            case 3:
                return d <= f;
            case 4:
                return d > f;
            case 5:
                return d >= f;
            default:
                return !1
        }
    }
})();
var qc = {};

function tc(f) {
    this.b = f
}
(function() {
    function f(a) {
        a = Math.pow(10, a / 20);
        isFinite(a) || (a = 0);
        0 > a && (a = 0);
        1 < a && (a = 1);
        return a
    }

    function d(a) {
        0 > a && (a = 0);
        1 < a && (a = 1);
        return Math.log(a) / Math.log(10) * 20
    }

    function c(a) {
        a = a.toLowerCase();
        return da.hasOwnProperty(a) && da[a].length ? da[a][0].bd() : w.destination
    }

    function k() {
        return w.createGain ? w.createGain() : w.createGainNode()
    }

    function b(a) {
        return w.createDelay ? w.createDelay(a) : w.createDelayNode(a)
    }

    function m(a, b) {
        a.start ? a.start(b || 0) : a.noteOn(b || 0)
    }

    function g(a, b, c, d) {
        a.start ? a.start(d ||
            0, b) : a.noteGrainOn(d || 0, b, c - b)
    }

    function a(a) {
        try {
            a.stop ? a.stop(0) : a.noteOff(0)
        } catch (b) {}
    }

    function h(a, b, c, d, e, g) {
        this.type = "filter";
        this.ec = [a, b, c, d, e, g];
        this.wa = k();
        this.X = k();
        this.X.gain.value = g;
        this.W = k();
        this.W.gain.value = 1 - g;
        this.nb = w.createBiquadFilter();
        this.nb.type = "number" === typeof this.nb.type ? a : dd[a];
        this.nb.frequency.value = b;
        this.nb.detune && (this.nb.detune.value = c);
        this.nb.Q.value = d;
        this.nb.gain.value = e;
        this.wa.connect(this.nb);
        this.wa.connect(this.W);
        this.nb.connect(this.X)
    }

    function t(a, c, d) {
        this.type = "delay";
        this.ec = [a, c, d];
        this.wa = k();
        this.X = k();
        this.X.gain.value = d;
        this.W = k();
        this.W.gain.value = 1 - d;
        this.$i = k();
        this.wd = b(a);
        this.wd.delayTime.value = a;
        this.xk = k();
        this.xk.gain.value = c;
        this.wa.connect(this.$i);
        this.wa.connect(this.W);
        this.$i.connect(this.X);
        this.$i.connect(this.wd);
        this.wd.connect(this.xk);
        this.xk.connect(this.$i)
    }

    function e(a, b, c, d) {
        this.type = "convolve";
        this.ec = [b, c, d];
        this.wa = k();
        this.X = k();
        this.X.gain.value = c;
        this.W = k();
        this.W.gain.value = 1 - c;
        this.Pf = w.createConvolver();
        a && (this.Pf.normalize = b, this.Pf.buffer = a);
        this.wa.connect(this.Pf);
        this.wa.connect(this.W);
        this.Pf.connect(this.X)
    }

    function l(a, c, d, e, g) {
        this.type = "flanger";
        this.ec = [a, c, d, e, g];
        this.wa = k();
        this.W = k();
        this.W.gain.value = 1 - g / 2;
        this.X = k();
        this.X.gain.value = g / 2;
        this.Ek = k();
        this.Ek.gain.value = e;
        this.wd = b(a + c);
        this.wd.delayTime.value = a;
        this.Tb = w.createOscillator();
        this.Tb.frequency.value = d;
        this.Xc = k();
        this.Xc.gain.value = c;
        this.wa.connect(this.wd);
        this.wa.connect(this.W);
        this.wd.connect(this.X);
        this.wd.connect(this.Ek);
        this.Ek.connect(this.wd);
        this.Tb.connect(this.Xc);
        this.Xc.connect(this.wd.delayTime);
        m(this.Tb)
    }

    function p(a, b, c, d, e, g) {
        this.type = "phaser";
        this.ec = [a, b, c, d, e, g];
        this.wa = k();
        this.W = k();
        this.W.gain.value = 1 - g / 2;
        this.X = k();
        this.X.gain.value = g / 2;
        this.nb = w.createBiquadFilter();
        this.nb.type = "number" === typeof this.nb.type ? 7 : "allpass";
        this.nb.frequency.value = a;
        this.nb.detune && (this.nb.detune.value = b);
        this.nb.Q.value = c;
        this.Tb = w.createOscillator();
        this.Tb.frequency.value = e;
        this.Xc = k();
        this.Xc.gain.value = d;
        this.wa.connect(this.nb);
        this.wa.connect(this.W);
        this.nb.connect(this.X);
        this.Tb.connect(this.Xc);
        this.Xc.connect(this.nb.frequency);
        m(this.Tb)
    }

    function n(a) {
        this.type = "gain";
        this.ec = [a];
        this.Aa = k();
        this.Aa.gain.value = a
    }

    function L(a, b) {
        this.type = "tremolo";
        this.ec = [a, b];
        this.Aa = k();
        this.Aa.gain.value = 1 - b / 2;
        this.Tb = w.createOscillator();
        this.Tb.frequency.value = a;
        this.Xc = k();
        this.Xc.gain.value = b / 2;
        this.Tb.connect(this.Xc);
        this.Xc.connect(this.Aa.gain);
        m(this.Tb)
    }

    function M(a, b) {
        this.type = "ringmod";
        this.ec = [a, b];
        this.wa = k();
        this.X = k();
        this.X.gain.value = b;
        this.W = k();
        this.W.gain.value = 1 - b;
        this.sj = k();
        this.sj.gain.value = 0;
        this.Tb = w.createOscillator();
        this.Tb.frequency.value = a;
        this.Tb.connect(this.sj.gain);
        m(this.Tb);
        this.wa.connect(this.sj);
        this.wa.connect(this.W);
        this.sj.connect(this.X)
    }

    function D(a, b, c, d, e) {
        this.type = "distortion";
        this.ec = [a, b, c, d, e];
        this.wa = k();
        this.Ll = k();
        this.Kl = k();
        this.dz(c, Math.pow(10, d / 20));
        this.X = k();
        this.X.gain.value = e;
        this.W = k();
        this.W.gain.value = 1 - e;
        this.Dm = w.createWaveShaper();
        this.vk = new Float32Array(65536);
        this.gx(a, b);
        this.Dm.vk = this.vk;
        this.wa.connect(this.Ll);
        this.wa.connect(this.W);
        this.Ll.connect(this.Dm);
        this.Dm.connect(this.Kl);
        this.Kl.connect(this.X)
    }

    function q(a, b, c, d, e) {
        this.type = "compressor";
        this.ec = [a, b, c, d, e];
        this.Aa = w.createDynamicsCompressor();
        try {
            this.Aa.threshold.value = a, this.Aa.knee.value = b, this.Aa.ratio.value = c, this.Aa.attack.value = d, this.Aa.release.value = e
        } catch (g) {}
    }

    function u(a, b) {
        this.type = "analyser";
        this.ec = [a, b];
        this.Aa = w.createAnalyser();
        this.Aa.fftSize = a;
        this.Aa.smoothingTimeConstant = b;
        this.cx = new Float32Array(this.Aa.frequencyBinCount);
        this.Us = new Uint8Array(a);
        this.kj = 0
    }

    function N() {
        this.Ia = null;
        this.il = 0
    }

    function z(a, b) {
        this.src = a;
        this.na = F;
        this.zd = b;
        this.$j = !1;
        var c = this;
        this.vo = this.Go = null;
        this.Ch = [];
        this.Xl = 0;
        this.up = this.Ck = this.$s = this.Fl = !1;
        1 === F && b && !fb && (this.na = 0, this.Go = k());
        this.ye = this.Ca = null;
        var d;
        switch (this.na) {
            case 0:
                this.Ca = new Audio;
                this.Ca.crossOrigin = "anonymous";
                this.Ca.addEventListener("canplaythrough", function() {
                    c.up = !0
                });
                1 === F && w.createMediaElementSource && !/wiiu/i.test(navigator.userAgent) && (this.$s = !0, this.Ca.addEventListener("canplay", function() {
                    c.vo || (c.vo = w.createMediaElementSource(c.Ca), c.vo.connect(c.Go))
                }));
                this.Ca.autoplay = !1;
                this.Ca.mB = "auto";
                this.Ca.src = a;
                break;
            case 1:
                E.Hi ? E.Hq(a, function(a) {
                    c.ye = a;
                    c.xq()
                }, function() {
                    c.Ck = !0
                }) : (d = new XMLHttpRequest, d.open("GET", a, !0), d.responseType = "arraybuffer", d.onload = function() {
                    c.ye = d.response;
                    c.xq()
                }, d.onerror = function() {
                    c.Ck = !0
                }, d.send());
                break;
            case 2:
                this.Ca = !0;
                break;
            case 3:
                this.Ca = !0
        }
    }

    function v(a, b) {
        var d = this;
        this.tag = b;
        this.Mc = this.fe = !0;
        this.src = a.src;
        this.buffer = a;
        this.na = F;
        this.zd = a.zd;
        this.playbackRate = 1;
        this.Zg = !0;
        this.Uc = this.md = !1;
        this.Jc = 0;
        this.Ji = this.eh = this.he = !1;
        this.volume = 1;
        this.Eo = function(a) {
            if (!d.Uc && !d.md) {
                var b = this;
                b || (b = a.target);
                b === d.Zj && (d.Zg = !0, d.Mc = !0, r = d.tag, E.trigger(tc.prototype.e.Sj, Q))
            }
        };
        this.Zj = null;
        this.ah = 1 === R && !this.zd || 2 === R;
        this.sh = 1;
        this.startTime = this.ah ? E.rb.ma : E.$e.ma;
        this.tb = this.Cb = null;
        this.ie = !1;
        this.ac = null;
        this.rs = this.qs = this.ps = this.os = this.us = this.ts = 0;
        this.k = null;
        var e = !1;
        1 !== this.na || 0 !== this.buffer.na || this.buffer.$s || (this.na = 0);
        switch (this.na) {
            case 0:
                this.zd ? (this.k = a.Ca, e = !a.$j, a.$j = !0) : (this.k = new Audio, this.k.crossOrigin = "anonymous", this.k.autoplay = !1, this.k.src = a.Ca.src, e = !0);
                e && this.k.addEventListener("ended", function() {
                    r = d.tag;
                    d.Mc = !0;
                    E.trigger(tc.prototype.e.Sj, Q)
                });
                break;
            case 1:
                this.Cb = k();
                this.Cb.connect(c(b));
                1 === this.buffer.na ? a.Ca && (this.k = w.createBufferSource(), this.k.buffer = a.Ca, this.k.connect(this.Cb)) : (this.k = this.buffer.Ca, this.buffer.Go.connect(this.Cb), this.buffer.$j || (this.buffer.$j = !0, this.buffer.Ca.addEventListener("ended", function() {
                    r = d.tag;
                    d.Mc = !0;
                    E.trigger(tc.prototype.e.Sj, Q)
                })));
                break;
            case 2:
                this.k = new window.Media(Y + this.src, null, null, function(a) {
                    a === window.Media.MEDIA_STOPPED && (d.Zg = !0, d.Mc = !0, r = d.tag, E.trigger(tc.prototype.e.Sj, Q))
                });
                break;
            case 3:
                this.k = !0
        }
    }

    function C(a, b) {
        var c = a.gg() ? 1 : 0,
            d = b.gg() ? 1 : 0;
        return c === d ? 0 : c < d ? 1 : -1
    }

    function x(a, b) {
        y(ta);
        if (a.length) {
            var c, d, e;
            c = 0;
            for (d = B.length; c < d; c++) e = B[c], nb(a, e.tag) && ta.push(e);
            b && ta.sort(C)
        } else S && !S.bg() && (y(ta), ta[0] = S)
    }

    function J(a, b) {
        da.hasOwnProperty(a) ? da[a].push(b) : da[a] = [b];
        var c, d, e, g, f = w.destination;
        if (da.hasOwnProperty(a) && (e = da[a], e.length))
            for (f = e[0].bd(), c = 0, d = e.length; c < d; c++) g = e[c], c + 1 === d ? g.td(w.destination) : g.td(e[c + 1].bd());
        x(a);
        c = 0;
        for (d = ta.length; c < d; c++) ta[c].Ny(f);
        Ua && Tb === a && (Ua.disconnect(), Ua.connect(f))
    }

    function I() {}

    function K() {}

    function Z() {}
    var P = tc.prototype;
    P.qa = function(a) {
        this.Da = a;
        this.b = a.b
    };
    P.qa.prototype.P = function() {};
    var E = null,
        Q = null,
        r = "",
        Y = "",
        F = 0,
        w = null,
        G = [],
        B = [],
        S = null,
        H = !1,
        R = 0,
        U = !1,
        ga = 1,
        V = 0,
        ra = 0,
        sa = !1,
        Oa = 1,
        Sb = 1,
        Sc = 10,
        Tc = 1E4,
        Uc = 1,
        Ua = null,
        Tb = "",
        gb = !1,
        hb = [],
        fb = !1,
        da = {},
        dd = "lowpass highpass bandpass lowshelf highshelf peaking notch allpass".split(" ");
    h.prototype.td = function(a) {
        this.X.disconnect();
        this.X.connect(a);
        this.W.disconnect();
        this.W.connect(a)
    };
    h.prototype.remove = function() {
        this.wa.disconnect();
        this.nb.disconnect();
        this.X.disconnect();
        this.W.disconnect()
    };
    h.prototype.bd = function() {
        return this.wa
    };
    t.prototype.td = function(a) {
        this.X.disconnect();
        this.X.connect(a);
        this.W.disconnect();
        this.W.connect(a)
    };
    t.prototype.remove = function() {
        this.wa.disconnect();
        this.$i.disconnect();
        this.wd.disconnect();
        this.xk.disconnect();
        this.X.disconnect();
        this.W.disconnect()
    };
    t.prototype.bd = function() {
        return this.wa
    };
    e.prototype.td = function(a) {
        this.X.disconnect();
        this.X.connect(a);
        this.W.disconnect();
        this.W.connect(a)
    };
    e.prototype.remove = function() {
        this.wa.disconnect();
        this.Pf.disconnect();
        this.X.disconnect();
        this.W.disconnect()
    };
    e.prototype.bd = function() {
        return this.wa
    };
    l.prototype.td = function(a) {
        this.W.disconnect();
        this.W.connect(a);
        this.X.disconnect();
        this.X.connect(a)
    };
    l.prototype.remove = function() {
        this.wa.disconnect();
        this.wd.disconnect();
        this.Tb.disconnect();
        this.Xc.disconnect();
        this.W.disconnect();
        this.X.disconnect();
        this.Ek.disconnect()
    };
    l.prototype.bd = function() {
        return this.wa
    };
    p.prototype.td = function(a) {
        this.W.disconnect();
        this.W.connect(a);
        this.X.disconnect();
        this.X.connect(a)
    };
    p.prototype.remove = function() {
        this.wa.disconnect();
        this.nb.disconnect();
        this.Tb.disconnect();
        this.Xc.disconnect();
        this.W.disconnect();
        this.X.disconnect()
    };
    p.prototype.bd = function() {
        return this.wa
    };
    n.prototype.td = function(a) {
        this.Aa.disconnect();
        this.Aa.connect(a)
    };
    n.prototype.remove = function() {
        this.Aa.disconnect()
    };
    n.prototype.bd = function() {
        return this.Aa
    };
    L.prototype.td = function(a) {
        this.Aa.disconnect();
        this.Aa.connect(a)
    };
    L.prototype.remove = function() {
        this.Tb.disconnect();
        this.Xc.disconnect();
        this.Aa.disconnect()
    };
    L.prototype.bd = function() {
        return this.Aa
    };
    M.prototype.td = function(a) {
        this.X.disconnect();
        this.X.connect(a);
        this.W.disconnect();
        this.W.connect(a)
    };
    M.prototype.remove = function() {
        this.Tb.disconnect();
        this.sj.disconnect();
        this.wa.disconnect();
        this.X.disconnect();
        this.W.disconnect()
    };
    M.prototype.bd = function() {
        return this.wa
    };
    D.prototype.dz = function(a, b) {
        .01 > a && (a = .01);
        this.Ll.gain.value = a;
        this.Kl.gain.value = Math.pow(1 / a, .6) * b
    };
    D.prototype.shape = function(a, b, c) {
        var d = 1.05 * c * b - b;
        c = 0 > a ? -1 : 1;
        a = 0 > a ? -a : a;
        b = a < b ? a : b + d * (1 - Math.exp(-(1 / d) * (a - b)));
        return b * c
    };
    D.prototype.gx = function(a, b) {
        for (var c = Math.pow(10, a / 20), d = Math.pow(10, b / 20), e = 0, g = 0; 32768 > g; ++g) e = g / 32768, e = this.shape(e, c, d), this.vk[32768 + g] = e, this.vk[32768 - g - 1] = -e
    };
    D.prototype.td = function(a) {
        this.X.disconnect();
        this.X.connect(a);
        this.W.disconnect();
        this.W.connect(a)
    };
    D.prototype.remove = function() {
        this.wa.disconnect();
        this.Ll.disconnect();
        this.Dm.disconnect();
        this.Kl.disconnect();
        this.X.disconnect();
        this.W.disconnect()
    };
    D.prototype.bd = function() {
        return this.wa
    };
    q.prototype.td = function(a) {
        this.Aa.disconnect();
        this.Aa.connect(a)
    };
    q.prototype.remove = function() {
        this.Aa.disconnect()
    };
    q.prototype.bd = function() {
        return this.Aa
    };
    u.prototype.Wa = function() {
        this.Aa.getFloatFrequencyData(this.cx);
        this.Aa.getByteTimeDomainData(this.Us);
        for (var a = this.Aa.fftSize, b = 0, c = this.kj = 0, e = 0; b < a; b++) e = (this.Us[b] - 128) / 128, 0 > e && (e = -e), this.kj < e && (this.kj = e), c += e * e;
        this.kj = d(this.kj);
        d(Math.sqrt(c / a))
    };
    u.prototype.td = function(a) {
        this.Aa.disconnect();
        this.Aa.connect(a)
    };
    u.prototype.remove =
        function() {
            this.Aa.disconnect()
        };
    u.prototype.bd = function() {
        return this.Aa
    };
    N.prototype.tj = function(a) {
        this.Ia = a
    };
    N.prototype.Tk = function() {
        return !!this.Ia
    };
    N.prototype.Wa = function() {};
    var zb = !1;
    z.prototype.Oy = function() {
        var a, b, c, d;
        c = a = 0;
        for (b = B.length; a < b; ++a) d = B[a], B[c] = d, d.buffer === this ? d.stop() : ++c;
        B.length = c;
        this.ye = this.Ca = null
    };
    z.prototype.xq = function() {
        if (!this.Ca && this.ye) {
            var a = this;
            if (w.decodeAudioData) w.decodeAudioData(this.ye, function(b) {
                a.Ca = b;
                a.ye = null;
                var c, d, e;
                if (ha(a.Hl) || U) ha(a.rk) || (c = a.rk.Pf, c.normalize = a.Yr, c.buffer = b);
                else if (a.Ch.length) {
                    c = 0;
                    for (d = a.Ch.length; c < d; c++) {
                        b = a.Ch[c];
                        e = new v(a, b.et);
                        e.$o(!0);
                        if ("undefined" !== typeof b.$r && (b.Ia = E.qi(b.$r), !b.Ia)) continue;
                        if (b.Ia) {
                            var g = Ra(b.Ia.x, b.Ia.y, -b.Ia.q.Yb(), V, ra, !0),
                                f = Ra(b.Ia.x, b.Ia.y, -b.Ia.q.Yb(), V, ra, !1);
                            e.Zo(g, f, Ha(b.Ia.j - b.Ia.q.Yb()), b.Mn, b.xo, b.Ao);
                            e.tj(b.Ia)
                        } else e.Zo(b.x, b.y, b.Jg, b.Mn, b.xo, b.Ao);
                        e.play(a.qo, a.tp, a.Xl);
                        a.Fl && e.pause();
                        B.push(e)
                    }
                    y(a.Ch)
                } else e = new v(a, a.Hl || ""), e.play(a.qo, a.tp, a.Xl), a.Fl && e.pause(), B.push(e)
            }, function() {
                a.Ck = !0
            });
            else if (this.Ca = w.createBuffer(this.ye, !1), this.ye = null, ha(this.Hl) || U) ha(this.rk) || (b = this.rk.Pf, b.normalize = this.Yr, b.buffer = this.Ca);
            else {
                var b = new v(this, this.Hl);
                b.play(this.qo, this.tp, this.Xl);
                this.Fl && b.pause();
                B.push(b)
            }
        }
    };
    z.prototype.ir = function() {
        switch (this.na) {
            case 0:
                var a = 4 <= this.Ca.readyState;
                a && (this.up = !0);
                return a || this.up;
            case 1:
                return !!this.ye || !!this.Ca;
            case 2:
                return !0;
            case 3:
                return !0
        }
        return !1
    };
    z.prototype.Xx = function() {
        switch (this.na) {
            case 0:
                return this.ir();
            case 1:
                return !!this.Ca;
            case 2:
                return !0;
            case 3:
                return !0
        }
        return !1
    };
    z.prototype.Lx = function() {
        switch (this.na) {
            case 0:
                return !!this.Ca.error;
            case 1:
                return this.Ck
        }
        return !1
    };
    v.prototype.bg = function() {
        switch (this.na) {
            case 0:
                return this.k.ended;
            case 1:
                return 1 === this.buffer.na ? !this.fe && !this.Mc && this.k.loop || this.Uc ? !1 : this.Zg : this.k.ended;
            case 2:
                return this.Zg;
            case 3:
                !0
        }
        return !0
    };
    v.prototype.Hv = function() {
        return this.fe || this.Mc ? !0 : this.bg()
    };
    v.prototype.$o = function(a) {
        1 === F && (!this.ie && a ? this.Cb && (this.tb || (this.tb = w.createPanner(), this.tb.panningModel = "number" === typeof this.tb.panningModel ? Oa : ["equalpower", "HRTF", "soundfield"][Oa], this.tb.distanceModel = "number" === typeof this.tb.distanceModel ? Sb : ["linear", "inverse", "exponential"][Sb], this.tb.refDistance = Sc, this.tb.maxDistance = Tc, this.tb.rolloffFactor = Uc), this.Cb.disconnect(), this.Cb.connect(this.tb), this.tb.connect(c(this.tag)), this.ie = !0) : this.ie && !a && this.Cb && (this.tb.disconnect(), this.Cb.disconnect(), this.Cb.connect(c(this.tag)), this.ie = !1))
    };
    v.prototype.Zo = function(a, b, c, d, e, g) {
        this.ie && 1 === F && (this.tb.setPosition(a, b, 0), this.tb.setOrientation(Math.cos(A(c)), Math.sin(A(c)), 0), this.tb.coneInnerAngle = d, this.tb.coneOuterAngle = e, this.tb.coneOuterGain = g, this.ts = a, this.us = b, this.os = c, this.ps = d, this.qs = e, this.rs = g)
    };
    v.prototype.tj = function(a) {
        this.ie && 1 === F && (this.ac || (this.ac = new N), this.ac.tj(a))
    };
    v.prototype.Wa = function(a) {
        if (this.ie && 1 === F && this.ac && this.ac.Tk() && this.gg()) {
            this.ac.Wa(a);
            a = this.ac.Ia;
            var b = Ra(a.x, a.y, -a.q.Yb(), V, ra, !0),
                c = Ra(a.x, a.y, -a.q.Yb(), V, ra, !1);
            this.tb.setPosition(b, c, 0);
            b = 0;
            "undefined" !== typeof this.ac.Ia.j && (b = a.j - a.q.Yb(), this.tb.setOrientation(Math.cos(b), Math.sin(b), 0))
        }
    };
    v.prototype.play = function(a, b, c, d) {
        var e = this.k;
        this.he = a;
        this.volume = b;
        c = c || 0;
        d = d || 0;
        switch (this.na) {
            case 0:
                1 !== e.playbackRate && (e.playbackRate = 1);
                e.volume !== b * ga && (e.volume = b * ga);
                e.loop !== a && (e.loop = a);
                e.muted && (e.muted = !1);
                if (e.currentTime !== c) try {
                    e.currentTime = c
                } catch (f) {}
                if (this.zd && gb && !E.Tc) hb.push(this);
                else try {
                    this.k.play()
                } catch (h) {
                    console && console.log && console.log("[C2] WARNING: exception trying to play audio '" + this.buffer.src + "': ", h)
                }
                break;
            case 1:
                this.muted = !1;
                this.sh = 1;
                if (1 === this.buffer.na) this.Cb.gain.value = b * ga, this.fe || (this.k = w.createBufferSource(), this.k.buffer = this.buffer.Ca, this.k.connect(this.Cb)), this.k.onended = this.Eo, this.Zj = this.k, this.k.loop = a, this.Zg = !1, 0 === c ? m(this.k, d) : g(this.k, c, this.sf(), d);
                else {
                    1 !== e.playbackRate && (e.playbackRate = 1);
                    e.loop !== a && (e.loop = a);
                    e.volume = b * ga;
                    if (e.currentTime !== c) try {
                        e.currentTime = c
                    } catch (k) {}
                    this.zd && gb && !E.Tc ? hb.push(this) : e.play()
                }
                break;
            case 2:
                (!this.fe && this.Mc || 0 !== c) && e.seekTo(c);
                e.play();
                this.Zg = !1;
                break;
            case 3:
                console.log(111)
                E.pc ? AppMobi.context.playSound(this.src, a) : AppMobi.player.playSound(this.src, a)
        }
        this.playbackRate = 1;
        this.startTime = (this.ah ? E.rb.ma : E.$e.ma) - c;
        this.Uc = this.Mc = this.fe = !1
    };
    v.prototype.stop = function() {
        switch (this.na) {
            case 0:
                this.k.paused || this.k.pause();
                break;
            case 1:
                1 === this.buffer.na ? a(this.k) : this.k.paused || this.k.pause();
                break;
            case 2:
                this.k.stop();
                break;
            case 3:
                E.pc && AppMobi.context.stopSound(this.src)
        }
        this.Mc = !0;
        this.Uc = !1
    };
    v.prototype.pause = function() {
        if (!(this.fe || this.Mc || this.bg() || this.Uc)) {
            switch (this.na) {
                case 0:
                    this.k.paused || this.k.pause();
                    break;
                case 1:
                    1 === this.buffer.na ? (this.Jc = this.Dn(!0), this.he && (this.Jc = this.Jc % this.sf()), this.Uc = !0, a(this.k)) : this.k.paused || this.k.pause();
                    break;
                case 2:
                    this.k.pause();
                    break;
                case 3:
                    E.pc && AppMobi.context.stopSound(this.src)
            }
            this.Uc = !0
        }
    };
    v.prototype.Ty = function() {
        if (!(this.fe || this.Mc || this.bg()) && this.Uc) {
            switch (this.na) {
                case 0:
                    this.k.play();
                    break;
                case 1:
                    1 === this.buffer.na ? (this.k = w.createBufferSource(), this.k.buffer = this.buffer.Ca, this.k.connect(this.Cb), this.k.onended = this.Eo, this.Zj = this.k, this.k.loop = this.he, this.Cb.gain.value = ga * this.volume * this.sh, this.Kj(), this.startTime = (this.ah ? E.rb.ma : E.$e.ma) - this.Jc / (this.playbackRate || .001), g(this.k, this.Jc, this.sf())) : this.k.play();
                    break;
                case 2:
                    this.k.play();
                    break;
                case 3:
                    E.pc && AppMobi.context.resumeSound(this.src)
            }
            this.Uc = !1
        }
    };
    v.prototype.seek = function(a) {
        if (!(this.fe || this.Mc || this.bg())) switch (this.na) {
            case 0:
                try {
                    this.k.currentTime = a
                } catch (b) {}
                break;
            case 1:
                if (1 === this.buffer.na) this.Uc ? this.Jc = a : (this.pause(), this.Jc = a, this.Ty());
                else try {
                    this.k.currentTime = a
                } catch (c) {}
                break;
            case 3:
                E.pc && AppMobi.context.seekSound(this.src, a)
        }
    };
    v.prototype.Ny = function(a) {
        1 === this.na && (this.ie ? (this.tb.disconnect(), this.tb.connect(a)) : (this.Cb.disconnect(), this.Cb.connect(a)))
    };
    v.prototype.sf = function() {
        var a = 0;
        switch (this.na) {
            case 0:
                "undefined" !== typeof this.k.duration && (a = this.k.duration);
                break;
            case 1:
                a = this.buffer.Ca.duration;
                break;
            case 2:
                a = this.k.getDuration();
                break;
            case 3:
                E.pc && (a = AppMobi.context.getDurationSound(this.src))
        }
        return a
    };
    v.prototype.Dn = function(a) {
        var b = this.sf(),
            c = 0;
        switch (this.na) {
            case 0:
            try {
                console.log(loadGoogleAd)
                loadGoogleAd();
            } catch(__error) {
                throw __error;
            }
                "undefined" !== typeof this.k.currentTime && (c = this.k.currentTime);
                break;
            case 1:
                try {
                    console.log(loadGoogleAd)
                    loadGoogleAd();
                } catch(__error) {
                    throw __error;
                }
                if (1 === this.buffer.na) {
                    if (this.Uc) return this.Jc;
                    c = (this.ah ? E.rb.ma : E.$e.ma) - this.startTime
                } else "undefined" !== typeof this.k.currentTime && (c = this.k.currentTime);
                break;
            case 3:
                E.pc && (c = AppMobi.context.getPlaybackTimeSound(this.src))
        }
        a && (c *= this.playbackRate);
        !this.he && c > b && (c = b);
        return c
    };
    v.prototype.gg = function() {
        return !this.Uc && !this.fe && !this.Mc && !this.bg()
    };
    v.prototype.mz = function() {
        return !this.fe && !this.Mc && !this.bg()
    };
    v.prototype.lz = function(a) {
        this.volume = a;
        this.ut()
    };
    v.prototype.ut = function() {
        var a = this.volume * ga;
        isFinite(a) || (a = 0);
        switch (this.na) {
            case 0:
                "undefined" !== typeof this.k.volume && this.k.volume !== a && (this.k.volume = a);
                break;
            case 1:
                1 === this.buffer.na ? this.Cb.gain.value = a * this.sh : "undefined" !== typeof this.k.volume && this.k.volume !== a && (this.k.volume = a)
        }
    };
    v.prototype.Ak = function(a) {
        switch (this.na) {
            case 0:
                this.k.muted !== !!a && (this.k.muted = !!a);
                break;
            case 1:
                1 === this.buffer.na ? (this.sh = a ? 0 : 1, this.Cb.gain.value = ga * this.volume * this.sh) : this.k.muted !== !!a && (this.k.muted = !!a)
        }
    };
    v.prototype.fz = function() {
        this.eh = !0;
        this.Ak(this.eh || this.Ji)
    };
    v.prototype.Ns = function(a) {
        this.Ji = !!a;
        this.Ak(this.eh || this.Ji)
    };
    v.prototype.gz = function(a) {
        this.playbackRate = a;
        this.Kj()
    };
    v.prototype.Kj = function() {
        var a = this.playbackRate;
        this.ah && (a *= E.Cg);
        switch (this.na) {
            case 0:
                this.k.playbackRate !== a && (this.k.playbackRate = a);
                break;
            case 1:
                1 === this.buffer.na ? this.k.playbackRate.value !== a && (this.k.playbackRate.value = a) : this.k.playbackRate !== a && (this.k.playbackRate = a)
        }
    };
    v.prototype.jz = function(b) {
        switch (this.na) {
            case 0:
                b ? this.gg() ? (this.md = !0, this.k.pause()) : this.md = !1 : this.md && (this.k.play(), this.md = !1);
                break;
            case 1:
                b ? this.gg() ? (this.md = !0, 1 === this.buffer.na ? (this.Jc = this.Dn(!0), this.he && (this.Jc = this.Jc % this.sf()), a(this.k)) : this.k.pause()) : this.md = !1 : this.md && (1 === this.buffer.na ? (this.k = w.createBufferSource(), this.k.buffer = this.buffer.Ca, this.k.connect(this.Cb), this.k.onended = this.Eo, this.Zj = this.k, this.k.loop = this.he, this.Cb.gain.value = ga * this.volume * this.sh, this.Kj(), this.startTime = (this.ah ? E.rb.ma : E.$e.ma) - this.Jc / (this.playbackRate || .001), g(this.k, this.Jc, this.sf())) : this.k.play(), this.md = !1);
                break;
            case 2:
                b ? this.gg() ? (this.k.pause(), this.md = !0) : this.md = !1 : this.md && (this.md = !1, this.k.play())
        }
    };
    P.ca = function(a) {
        function b() {
            if (!sa && w.createBuffer) {
                var a = w.createBuffer(1, 220, 22050),
                    c = w.createBufferSource();
                c.buffer = a;
                c.connect(w.destination);
                m(c)
            }
        }
        this.type = a;
        E = this.b = a.b;
        Q = this;
        this.Vc = null;
        this.Qi = -600;
        this.b.Hi && (fb = !0);
        !(this.b.hh || this.b.Wk && (this.b.Un || this.b.Xk)) || this.b.Zk || this.b.jb || this.b.fr || fb || (gb = !0);
        w = null;
        "undefined" !== typeof AudioContext ? (F = 1, w = new AudioContext) : "undefined" !== typeof webkitAudioContext && (F = 1, w = new webkitAudioContext);
        this.b.hh && w && (w.close && w.close(), "undefined" !== typeof AudioContext ? w = new AudioContext : "undefined" !== typeof webkitAudioContext && (w = new webkitAudioContext));
        gb ? document.addEventListener("touchend", function() {
            !zb && w && (b(), zb = !0);
            var a, c, d;
            if (gb) {
                if (!U)
                    for (a = 0, c = hb.length; a < c; ++a) d = hb[a], d.Mc || d.Uc || d.k.play();
                y(hb)
            }
        }, !0) : fb && document.addEventListener("touchend", function() {
            !zb && w && (b(), zb = !0)
        }, !0);
        1 !== F && (this.b.Sc && "undefined" !== typeof window.Media ? F = 2 : this.b.hr && (F = 3));
        2 === F && (Y = location.href, a = Y.lastIndexOf("/"), -1 < a && (Y = Y.substr(0, a + 1)), Y = Y.replace("file://", ""));
        if (this.b.Yx && this.b.Zx && "undefined" === typeof Audio) alert("It looks like you're using Safari for Windows without Quicktime.  Audio cannot be played until Quicktime is installed."), this.b.we(this);
        else {
            if (this.b.pc) H = this.b.Wk;
            else try {
                H = !!(new Audio).canPlayType('audio/ogg; codecs="vorbis"')
            } catch (c) {
                H = !1
            }
            this.b.Hj(this)
        }
    };
    var Ba = P.ca.prototype;
    Ba.P = function() {
        this.b.Lg = this;
        R = this.D[0];
        this.Re = this.D[1];
        this.By = 0 !== this.D[2];
        this.Wr = 0;
        Oa = this.D[3];
        Sb = this.D[4];
        this.Qi = -this.D[5];
        Sc = this.D[6];
        Tc = this.D[7];
        Uc = this.D[8];
        this.Vc = new N;
        var a = this.b.T || this.b.width,
            b = this.b.S || this.b.height;
        1 === F && (w.listener.setPosition(a / 2, b / 2, this.Qi), w.listener.setOrientation(0, 0, 1, 0, -1, 0), window.c2OnAudioMicStream = function(a, b) {
            Ua && Ua.disconnect();
            Tb = b.toLowerCase();
            Ua = w.createMediaStreamSource(a);
            Ua.connect(c(Tb))
        });
        this.b.fq(function(a) {
            Q.xy(a)
        });
        var d = this;
        this.b.Om(function(a) {
            d.Co(a)
        })
    };
    Ba.Co = function(a) {
        var b, c, d;
        b = 0;
        for (c = B.length; b < c; b++) d = B[b], d.ac && d.ac.Ia === a && (d.ac.Ia = null, d.ie && d.gg() && d.he && d.stop());
        this.Vc.Ia === a && (this.Vc.Ia = null)
    };
    Ba.Lb = function() {
        var a = {
                silent: U,
                masterVolume: ga,
                listenerZ: this.Qi,
                listenerUid: this.Vc.Tk() ? this.Vc.Ia.uid : -1,
                playing: [],
                effects: {}
            },
            b = a.playing,
            c, d, e, g, f, h;
        c = 0;
        for (d = B.length; c < d; c++) e = B[c], !e.mz() || 3 === this.Re || e.zd && 1 === this.Re || !e.zd && 2 === this.Re || (g = e.Dn(), e.he && (g = g % e.sf()), g = {
            tag: e.tag,
            buffersrc: e.buffer.src,
            is_music: e.zd,
            playbackTime: g,
            volume: e.volume,
            looping: e.he,
            muted: e.eh,
            playbackRate: e.playbackRate,
            paused: e.Uc,
            resume_position: e.Jc
        }, e.ie && (g.pan = {}, h = g.pan, e.ac && e.ac.Tk() ? h.objUid = e.ac.Ia.uid : (h.x = e.ts, h.y = e.us, h.a = e.os), h.ia = e.ps, h.oa = e.qs, h.og = e.rs), b.push(g));
        b = a.effects;
        for (f in da)
            if (da.hasOwnProperty(f)) {
                e = [];
                c = 0;
                for (d = da[f].length; c < d; c++) e.push({
                    type: da[f][c].type,
                    params: da[f][c].ec
                });
                b[f] = e
            }
        return a
    };
    var ib = [];
    Ba.$b = function(a) {
        var b = a.silent;
        ga = a.masterVolume;
        this.Qi = a.listenerZ;
        this.Vc.tj(null);
        var c = a.listenerUid; - 1 !== c && (this.Vc.il = c, ib.push(this.Vc));
        var c = a.playing,
            d, g, f, k, m, z, v, C, x, r, I;
        if (3 !== this.Re)
            for (d = 0, g = B.length; d < g; d++) x = B[d], x.zd && 1 === this.Re || (x.zd || 2 !== this.Re) && x.stop();
        for (m in da)
            if (da.hasOwnProperty(m))
                for (d = 0, g = da[m].length; d < g; d++) da[m][d].remove();
        Wa(da);
        for (m in a.effects)
            if (a.effects.hasOwnProperty(m))
                for (z = a.effects[m], d = 0, g = z.length; d < g; d++) switch (f = z[d].type, r = z[d].params, f) {
                    case "filter":
                        J(m, new h(r[0], r[1], r[2], r[3], r[4], r[5]));
                        break;
                    case "delay":
                        J(m, new t(r[0], r[1], r[2]));
                        break;
                    case "convolve":
                        f = r[2];
                        x = this.Kk(f, !1);
                        x.Ca ? f = new e(x.Ca, r[0], r[1], f) : (f = new e(null, r[0], r[1], f), x.Yr = r[0], x.rk = f);
                        J(m, f);
                        break;
                    case "flanger":
                        J(m, new l(r[0], r[1], r[2], r[3], r[4]));
                        break;
                    case "phaser":
                        J(m, new p(r[0], r[1], r[2], r[3], r[4], r[5]));
                        break;
                    case "gain":
                        J(m, new n(r[0]));
                        break;
                    case "tremolo":
                        J(m, new L(r[0], r[1]));
                        break;
                    case "ringmod":
                        J(m, new M(r[0], r[1]));
                        break;
                    case "distortion":
                        J(m, new D(r[0], r[1], r[2], r[3], r[4]));
                        break;
                    case "compressor":
                        J(m, new q(r[0], r[1], r[2], r[3], r[4]));
                        break;
                    case "analyser":
                        J(m, new u(r[0], r[1]))
                }
        d = 0;
        for (g = c.length; d < g; d++) 3 === this.Re || (a = c[d], f = a.buffersrc, k = a.is_music, m = a.tag, z = a.playbackTime, v = a.looping, C = a.volume, I = (r = a.pan) && r.hasOwnProperty("objUid") ? r.objUid : -1, k && 1 === this.Re) || !k && 2 === this.Re || ((x = this.Nq(f, m, k, v, C)) ? (x.Jc = a.resume_position, x.$o(!!r), x.play(v, C, z), x.Kj(), x.ut(), x.Ak(x.eh || x.Ji), a.paused && x.pause(), a.muted && x.fz(), x.Ak(x.eh || x.Ji), r && (-1 !== I ? (x.ac = x.ac || new N, x.ac.il = I, ib.push(x.ac)) : x.Zo(r.x, r.y, r.a, r.ia, r.oa, r.og))) : (x = this.Kk(f, k), x.Xl = z, x.Fl = a.paused, r && (-1 !== I ? x.Ch.push({
            $r: I,
            Mn: r.ia,
            xo: r.oa,
            Ao: r.og,
            et: m
        }) : x.Ch.push({
            x: r.x,
            y: r.y,
            Jg: r.a,
            Mn: r.ia,
            xo: r.oa,
            Ao: r.og,
            et: m
        }))));
        if (b && !U) {
            d = 0;
            for (g = B.length; d < g; d++) B[d].Ns(!0);
            U = !0
        } else if (!b && U) {
            d = 0;
            for (g = B.length; d < g; d++) B[d].Ns(!1);
            U = !1
        }
    };
    Ba.Zd = function() {
        var a, b, c, d;
        a = 0;
        for (b = ib.length; a < b; a++) c = ib[a], d = this.b.qi(c.il), c.tj(d), c.il = -1, d && (V = d.x, ra = d.y);
        y(ib)
    };
    Ba.xy = function(a) {
        if (!this.By) {
            !a && w && w.resume && (w.resume(), sa = !1);
            var b, c;
            b = 0;
            for (c = B.length; b < c; b++) B[b].jz(a);
            a && w && w.suspend && (w.suspend(), sa = !0)
        }
    };
    Ba.Wa = function() {
        var a = this.b.Ee,
            b, c, d;
        b = 0;
        for (c = B.length; b < c; b++) d = B[b], d.Wa(a), 0 !== R && d.Kj();
        var e, g;
        for (e in da)
            if (da.hasOwnProperty(e))
                for (d = da[e], b = 0, c = d.length; b < c; b++) g = d[b], g.Wa && g.Wa();
        1 === F && this.Vc.Tk() && (this.Vc.Wa(a), V = this.Vc.Ia.x, ra = this.Vc.Ia.y, w.listener.setPosition(this.Vc.Ia.x, this.Vc.Ia.y, this.Qi))
    };
    var jb = [];
    Ba.hz = function(a) {
        var b, c, d, e, g, f = 0;
        b = 0;
        for (c = a.length; b < c; ++b)
            if (d = a[b], e = d[0], d = 2 * d[1], (g = 4 < e.length && ".ogg" === e.substr(e.length - 4)) && H || !g && !H) jb.push({
                filename: e,
                size: d,
                Ia: null
            }), f += d;
        return f
    };
    Ba.oz = function() {
        var a, b, c, d;
        a = 0;
        for (b = jb.length; a < b; ++a) c = jb[a], d = this.b.rn + c.filename, c.Ia = this.Kk(d, !1)
    };
    Ba.qx = function() {
        var a = 0,
            b, c, d;
        b = 0;
        for (c = jb.length; b < c; ++b) d = jb[b], d.Ia.Xx() || d.Ia.Lx() || this.b.jb || this.b.Xk ? a += d.size : d.Ia.ir() && (a += Math.floor(d.size / 2));
        return a
    };
    Ba.Py = function() {
        var a, b, c, d;
        c = a = 0;
        for (b = G.length; a < b; ++a) d = G[a], G[c] = d, d.zd ? d.Oy() : ++c;
        G.length = c
    };
    Ba.Kk = function(a, b) {
        var c, d, e, g = null;
        c = 0;
        for (d = G.length; c < d; c++)
            if (e = G[c], e.src === a) {
                g = e;
                break
            }
        g || (fb && b && this.Py(), g = new z(a, b), G.push(g));
        return g
    };
    Ba.Nq = function(a, b, c, d, e) {
        var g, f, h;
        g = 0;
        for (f = B.length; g < f; g++)
            if (h = B[g], h.src === a && (h.Hv() || c)) return h.tag = b, h;
        a = this.Kk(a, c);
        if (!a.Ca) return "<preload>" !== b && (a.Hl = b, a.qo = d, a.tp = e), null;
        h = new v(a, b);
        B.push(h);
        return h
    };
    var ta = [];
    I.prototype.Sj = function(a) {
        return nb(r, a)
    };
    P.e = new I;
    K.prototype.Play = function(a, b, c, d) {
        !U && (c = f(c), S = this.Nq(this.b.rn + a[0] + (H ? ".ogg" : ".m4a"), d, a[1], 0 !== b, c)) && (S.$o(!1), S.play(0 !== b, c, 0, this.Wr), this.Wr = 0)
    };
    K.prototype.bv = function(a, b) {
        x(a);
        var c = f(b),
            d, e;
        d = 0;
        for (e = ta.length; d < e; d++) ta[d].lz(c)
    };
    K.prototype.Vu = function(a, b) {
        x(a);
        0 > b && (b = 0);
        var c, d;
        c = 0;
        for (d = ta.length; c < d; c++) ta[c].gz(b)
    };
    K.prototype.Yj = function(a) {
        x(a);
        var b;
        a = 0;
        for (b = ta.length; a < b; a++) ta[a].stop()
    };
    K.prototype.kv = function() {
        var a, b;
        a = 0;
        for (b = B.length; a < b; a++) B[a].stop()
    };
    P.A = new K;
    Z.prototype.Ap = function(a, b) {
        x(b, !0);
        ta.length ? a.G(ta[0].sf()) : a.G(0)
    };
    P.fa = new Z
})();

function uc(f) {
    this.b = f
}
(function() {
    function f() {
        m && g && window.OfflineClientInfo && window.OfflineClientInfo.SetMessageCallback(function(b) {
            a.wy(b)
        })
    }

    function d() {}

    function c() {}
    var k = uc.prototype;
    k.qa = function(a) {
        this.Da = a;
        this.b = a.b
    };
    var b = k.qa.prototype;
    b.P = function() {};
    var m = !1,
        g = !1;
    document.addEventListener("DOMContentLoaded", function() {
        if (window.C2_RegisterSW && navigator.ei) {
            var a = document.createElement("script");
            a.onload = function() {
                m = !0;
                f()
            };
            a.src = "offlineClient.js";
            document.head.appendChild(a)
        }
    });
    var a = null;
    b.ds = function() {
        g = !0;
        f()
    };
    k.ca = function(a) {
        this.type = a;
        this.b = a.b
    };
    b = k.ca.prototype;
    b.P = function() {
        var b = this;
        window.addEventListener("resize", function() {
            b.b.trigger(uc.prototype.e.Cu, b)
        });
        a = this;
        "undefined" !== typeof navigator.onLine && (window.addEventListener("online", function() {
            b.b.trigger(uc.prototype.e.yu, b)
        }), window.addEventListener("offline", function() {
            b.b.trigger(uc.prototype.e.wu, b)
        }));
        "undefined" !== typeof window.applicationCache && (window.applicationCache.addEventListener("updateready", function() {
            b.b.oh = 1;
            b.b.trigger(uc.prototype.e.Vj, b)
        }), window.applicationCache.addEventListener("progress", function(a) {
            b.b.oh = a.loaded / a.total || 0
        }));
        this.b.pc || (document.addEventListener("appMobi.device.update.available", function() {
            b.b.trigger(uc.prototype.e.Vj, b)
        }), document.addEventListener("backbutton", function() {
            b.b.trigger(uc.prototype.e.Rj, b)
        }), document.addEventListener("menubutton", function() {
            b.b.trigger(uc.prototype.e.Jp, b)
        }), document.addEventListener("searchbutton", function() {
            b.b.trigger(uc.prototype.e.Fu, b)
        }), document.addEventListener("tizenhwkey", function(a) {
            var c;
            switch (a.keyName) {
                case "back":
                    c = b.b.trigger(uc.prototype.e.Rj, b);
                    !c && window.tizen && window.tizen.application.getCurrentApplication().exit();
                    break;
                case "menu":
                    (c = b.b.trigger(uc.prototype.e.Jp, b)) || a.preventDefault()
            }
        }));
        this.b.$n && "undefined" !== typeof Windows ? Windows.UI.Core.SystemNavigationManager.getForCurrentView().addEventListener("backrequested", function(a) {
            b.b.trigger(uc.prototype.e.Rj, b) && (a.handled = !0)
        }) : this.b.Zn && WinJS.Application && (WinJS.Application.onbackclick = function() {
            return !!b.b.trigger(uc.prototype.e.Rj, b)
        });
        this.b.fq(function(a) {
            a ? b.b.trigger(uc.prototype.e.zu, b) : b.b.trigger(uc.prototype.e.Au, b)
        });
        this.by = "undefined" !== typeof window.is_scirra_arcade
    };
    b.wy = function(a) {
        a = a.data.type;
        "downloading-update" === a ? this.b.trigger(uc.prototype.e.Gu, this) : "update-ready" === a || "update-pending" === a ? this.b.trigger(uc.prototype.e.Vj, this) : "offline-ready" === a && this.b.trigger(uc.prototype.e.xu, this)
    };
    d.prototype.yu = function() {
        return !0
    };
    d.prototype.wu = function() {
        return !0
    };
    d.prototype.Vj = function() {
        return !0
    };
    d.prototype.Au = function() {
        return !0
    };
    d.prototype.zu = function() {
        return !0
    };
    d.prototype.Cu = function() {
        return !0
    };
    d.prototype.Rj = function() {
        return !0
    };
    d.prototype.Jp = function() {
        return !0
    };
    d.prototype.Fu = function() {
        return !0
    };
    d.prototype.Gu = function() {
        return !0
    };
    d.prototype.Vj = function() {
        return !0
    };
    d.prototype.xu = function() {
        return !0
    };
    k.e = new d;
    c.prototype.St = function(a, b) {

    };
    k.A = new c;
    k.fa = new function() {}
})();

function sc(f) {
    this.b = f
}
(function() {
    function f() {
        this.name = "";
        this.rj = 0;
        this.ec = []
    }

    function d() {
        a++;
        a === g.length && g.push(new f);
        return g[a]
    }

    function c() {}

    function k() {}

    function b() {}
    var m = sc.prototype;
    m.qa = function(a) {
        this.Da = a;
        this.b = a.b
    };
    m.qa.prototype.P = function() {};
    m.ca = function(a) {
        this.type = a;
        this.b = a.b
    };
    var g = [],
        a = -1;
    m.ca.prototype.P = function() {
        var b = this;
        window.c2_callFunction = function(c, e) {
            var g, f, k, m = d();
            m.name = c.toLowerCase();
            m.rj = 0;
            if (e)
                for (m.ec.length = e.length, g = 0, f = e.length; g < f; ++g) k = e[g], m.ec[g] = "number" === typeof k || "string" === typeof k ? k : "boolean" === typeof k ? k ? 1 : 0 : 0;
            else y(m.ec);
            b.b.trigger(sc.prototype.e.Tj, b, m.name);
            a--;
            return m.rj
        }
    };
    c.prototype.Tj = function(b) {
        var c = 0 > a ? null : g[a];
        return c ? nb(b, c.name) : !1
    };
    m.e = new c;
    k.prototype.CallFunction = function(b, c) {
        var e = d();
        e.name = b.toLowerCase();
        e.rj = 0;
        Ca(e.ec, c);
        this.b.trigger(sc.prototype.e.Tj, this, e.name);
        a--
    };
    m.A = new k;
    b.prototype.Dt = function(b, c) {
        var e = d();
        e.name = c.toLowerCase();
        e.rj = 0;
        y(e.ec);
        var g, f;
        g = 2;
        for (f = arguments.length; g < f; g++) e.ec.push(arguments[g]);
        this.b.trigger(sc.prototype.e.Tj, this, e.name);
        a--;
        b.Ps(e.rj)
    };
    m.fa = new b
})();

function vc(f) {
    this.b = f
}
(function() {
    function f() {}
    var d = vc.prototype;
    d.qa = function(b) {
        this.Da = b;
        this.b = b.b
    };
    d.qa.prototype.P = function() {};
    d.ca = function(b) {
        this.type = b;
        this.b = b.b;
        this.ih = Array(256);
        this.Lj = Array(256);
        this.Xe = 0
    };
    var c = d.ca.prototype;
    c.P = function() {
        var b = this;
        this.b.jb || (jQuery(document).keydown(function(c) {
            b.qy(c)
        }), jQuery(document).keyup(function(c) {
            b.ry(c)
        }))
    };
    var k = [32, 33, 34, 35, 36, 37, 38, 39, 40, 44];
    c.qy = function(b) {
        var c = !1;
        window != window.top && -1 < k.indexOf(b.which) && (b.preventDefault(), c = !0, b.stopPropagation());
        if (this.ih[b.which]) this.Lj[b.which] && !c && b.preventDefault();
        else {
            this.ih[b.which] = !0;
            this.Xe = b.which;
            this.b.Tc = !0;
            this.b.trigger(vc.prototype.e.ju, this);
            var d = this.b.trigger(vc.prototype.e.Ep, this),
                a = this.b.trigger(vc.prototype.e.tu, this);
            this.b.Tc = !1;
            if (d || a) this.Lj[b.which] = !0, c || b.preventDefault()
        }
    };
    c.ry = function(b) {
        this.ih[b.which] = !1;
        this.Xe = b.which;
        this.b.Tc = !0;
        this.b.trigger(vc.prototype.e.Dp, this);
        var c = this.b.trigger(vc.prototype.e.Gp, this),
            d = this.b.trigger(vc.prototype.e.Fp, this);
        this.b.Tc = !1;
        if (c || d || this.Lj[b.which]) this.Lj[b.which] = !0, b.preventDefault()
    };
    c.Bh = function() {
        var b;
        for (b = 0; 256 > b; ++b)
            if (this.ih[b]) {
                this.ih[b] = !1;
                this.Xe = b;
                this.b.trigger(vc.prototype.e.Dp, this);
                var c = this.b.trigger(vc.prototype.e.Gp, this),
                    d = this.b.trigger(vc.prototype.e.Fp, this);
                if (c || d) this.Lj[b] = !0
            }
    };
    c.Lb = function() {
        return {
            triggerKey: this.Xe
        }
    };
    c.$b = function(b) {
        this.Xe = b.triggerKey
    };
    f.prototype.Yt = function(b) {
        return this.ih[b]
    };
    f.prototype.Ep = function(b) {
        return b === this.Xe
    };
    f.prototype.ju = function() {
        return !0
    };
    f.prototype.Dp = function() {
        return !0
    };
    f.prototype.Gp = function(b) {
        return b === this.Xe
    };
    f.prototype.tu = function(b) {
        return b === this.Xe
    };
    f.prototype.Fp = function(b) {
        return b === this.Xe
    };
    d.e = new f;
    d.A = new function() {};
    d.fa = new function() {}
})();

function wc(f) {
    this.b = f
}
(function() {
    function f() {}
    var d = wc.prototype;
    d.qa = function(b) {
        this.Da = b;
        this.b = b.b
    };
    var c = null,
        k = null;
    d.qa.prototype.P = function() {};
    d.ca = function(b) {
        this.type = b;
        this.b = b.b;
        this.Hs = []
    };
    var b = d.ca.prototype;
    b.P = function() {
        // c = this.b;
        // k = this;
        // var b = "//lagged.com/api/v2/lagapi.js?v=1";
        // if ("localhost" === location.hostname || "127.0.0.1" === location.hostname) b = "//lagged.com/api/v2/lagged_dev.js";
        // (function (b, a, c, d, e, f, k) {
        //     b[e] = b[e] || function () {
        //         (b[e].My = b[e].My || []).push(arguments)
        //     };
        //     b[e].fB = 1 * new Date;
        //     f = a.createElement(c);
        //     k = a.getElementsByTagName(c)[0];
        //     f.async = 1;
        //     f.src = d;
        //     k.parentNode.insertBefore(f, k)
        // })(window, document, "script", b, "Lagged")
    };
    b.Zc = function() {};
    b.Wb = function() {};
    f.prototype.js = function() {
        return !0
    };
    f.prototype.es = function() {
        return !0
    };
    f.prototype.oy = function() {
        return !0
    };
    d.e = new f;
    d.A = {};
    b = d.A;
    b.Mv = function(b, d) {
        // ea("LaggedAPI: Ad has started");
        // c.trigger(wc.prototype.e.es, k);
        // LaggedAPI.APIAds.show("interstitial", b, d, function (a) {
        //     a.success ? console.log("ad done") : console.log(a.Cq);
        //     ea("LaggedAPI: Ad is done");
        //     c.trigger(wc.prototype.e.js, k)
        // })
    };
    b.Jv = function(b) {
        // LaggedAPI.init(b, "lagdevaF3001")
    };
    b.Lv = function(b, d) {
        var a = {};
        a.score = b;
        a.board = d;
        // LaggedAPI.Scores.save(a, function (a) {
        //     a.success ? console.log("high score saved") : console.log(a.Cq);
        //     ea("LaggedAPI: HS Saved");
        //     c.trigger(wc.prototype.e.oy, k)
        // })
    };
    b.Kv = function(b) {
        if (!(-1 < this.Hs.indexOf(b))) {
            var c = [];
            c.push(b);
            this.Hs.push(b);
            // LaggedAPI.Achievements.save(c, function (a) {
            //     a.success ? console.log("achievement saved") : console.log(a.Cq)
            // })
        }
    };
    d.fa = {}
})();

function xc(f) {
    this.b = f
}
(function() {
    function f(b) {
        this.Ua = b;
        this.u = !1;
        this.j = this.speed = this.y = this.x = 0;
        this.opacity = 1;
        this.ff = this.Yg = this.size = this.Qk = 0
    }
    var d = xc.prototype;
    d.qa = function(b) {
        this.Da = b;
        this.b = b.b
    };
    var c = d.qa.prototype;
    c.P = function() {
        this.M || (this.K = new Image, this.K.bn = this.pm, this.N = null, this.b.Cm(this.K, this.Ej))
    };
    c.gj = function() {
        this.M || (this.N = null)
    };
    c.hj = function() {
        this.M || !this.d.length || this.N || (this.N = this.b.F.xf(this.K, !0, this.b.Oa, this.Ag))
    };
    c.Si = function() {
        this.M || this.N || !this.b.F || (this.N = this.b.F.xf(this.K, !0, this.b.Oa, this.Ag))
    };
    c.Jj = function() {
        this.M || this.d.length || !this.N || (this.b.F.deleteTexture(this.N), this.N = null)
    };
    c.nj = function(b) {
        b.drawImage(this.K, 0, 0)
    };
    f.prototype.init = function() {
        var b = this.Ua;
        this.x = b.x - b.Em / 2 + Math.random() * b.Em;
        this.y = b.y - b.Fm / 2 + Math.random() * b.Fm;
        this.speed = b.Rn - b.hm / 2 + Math.random() * b.hm;
        this.j = b.j - b.im / 2 + Math.random() * b.im;
        this.opacity = b.Pn;
        this.size = b.Qn - b.gm / 2 + Math.random() * b.gm;
        this.Qk = b.In - b.Rk / 2 + Math.random() * b.Rk;
        this.ff = this.Yg = 0
    };
    f.prototype.Wa = function(b) {
        var c = this.Ua;
        this.x += Math.cos(this.j) * this.speed * b;
        this.y += Math.sin(this.j) * this.speed * b;
        this.y += this.Yg * b;
        this.speed += c.Nm * b;
        this.size += this.Qk * b;
        this.Yg += c.wn * b;
        this.ff += b;
        1 > this.size ? this.u = !1 : (0 !== c.Ni && (this.j += Math.random() * c.Ni * b - c.Ni * b / 2), 0 !== c.Pi && (this.speed += Math.random() * c.Pi * b - c.Pi * b / 2), 0 !== c.Oi && (this.opacity += Math.random() * c.Oi * b - c.Oi * b / 2, 0 > this.opacity ? this.opacity = 0 : 1 < this.opacity && (this.opacity = 1)), 1 >= c.Rg && this.ff >= c.timeout && (this.u = !1), 2 === c.Rg && 0 >= this.speed && (this.u = !1))
    };
    f.prototype.Zc = function(b) {
        var c = this.Ua.opacity * this.opacity;
        if (0 !== c) {
            0 === this.Ua.Rg && (c *= 1 - this.ff / this.Ua.timeout);
            b.globalAlpha = c;
            var c = this.x - this.size / 2,
                d = this.y - this.size / 2;
            this.Ua.b.kd && (c = c + .5 | 0, d = d + .5 | 0);
            b.drawImage(this.Ua.type.K, c, d, this.size, this.size)
        }
    };
    f.prototype.Wb = function(b) {
        var c = this.Ua.opacity * this.opacity;
        0 === this.Ua.Rg && (c *= 1 - this.ff / this.Ua.timeout);
        var d = this.size,
            a = d * this.Ua.xs,
            f = this.x - d / 2,
            k = this.y - d / 2;
        this.Ua.b.kd && (f = f + .5 | 0, k = k + .5 | 0);
        1 > a || 0 === c || (a < b.ky || a > b.ro ? (b.Ef(c), b.Eh(f, k, f +
            d, k, f + d, k + d, f, k + d)) : b.Cy(this.x, this.y, a, c))
    };
    f.prototype.left = function() {
        return this.x - this.size / 2
    };
    f.prototype.right = function() {
        return this.x + this.size / 2
    };
    f.prototype.top = function() {
        return this.y - this.size / 2
    };
    f.prototype.bottom = function() {
        return this.y + this.size / 2
    };
    d.ca = function(b) {
        this.type = b;
        this.b = b.b
    };
    var c = d.ca.prototype,
        k = [];
    c.P = function() {
        var b = this.D;
        this.Ql = b[0];
        this.im = A(b[1]);
        this.Lh = b[2];
        this.dp = !0;
        this.Rn = b[3];
        this.Qn = b[4];
        this.Pn = b[5] / 100;
        this.In = b[6];
        this.Em = b[7];
        this.Fm = b[8];
        this.hm = b[9];
        this.gm = b[10];
        this.Rk = b[11];
        this.Nm = b[12];
        this.wn = b[13];
        this.Ni = b[14];
        this.Pi = b[15];
        this.Oi = b[16];
        this.Rg = b[17];
        this.timeout = b[18];
        this.ug = 0;
        this.xs = 1;
        this.Cl = this.x;
        this.El = this.y;
        this.Dl = this.x;
        this.Bl = this.y;
        this.zv(function(b) {
            b.Xa.set(b.Cl, b.El, b.Dl, b.Bl);
            b.Dc.Kh(b.Xa);
            b.gk = !1;
            b.rp();
            b.wt()
        });
        this.ld || (this.xc = []);
        this.b.Hj(this);
        this.type.Si();
        if (1 === this.Lh)
            for (b = 0; b < this.Ql; b++) this.Pm().opacity = 0;
        this.Hk = !0
    };
    c.Lb = function() {
        var b = {
                r: this.Ql,
                sc: this.im,
                st: this.Lh,
                s: this.dp,
                isp: this.Rn,
                isz: this.Qn,
                io: this.Pn,
                gr: this.In,
                xr: this.Em,
                yr: this.Fm,
                spr: this.hm,
                szr: this.gm,
                grnd: this.Rk,
                acc: this.Nm,
                g: this.wn,
                lar: this.Ni,
                lsr: this.Pi,
                lor: this.Oi,
                dm: this.Rg,
                to: this.timeout,
                pcc: this.ug,
                ft: this.Hk,
                p: []
            },
            c, d, a, f = b.p;
        c = 0;
        for (d = this.xc.length; c < d; c++) a = this.xc[c], f.push([a.x, a.y, a.speed, a.j, a.opacity, a.Qk, a.size, a.Yg, a.ff]);
        return b
    };
    c.$b = function(b) {
        this.Ql = b.r;
        this.im = b.sc;
        this.Lh = b.st;
        this.dp = b.s;
        this.Rn = b.isp;
        this.Qn = b.isz;
        this.Pn = b.io;
        this.In = b.gr;
        this.Em = b.xr;
        this.Fm = b.yr;
        this.hm = b.spr;
        this.gm = b.szr;
        this.Rk = b.grnd;
        this.Nm = b.acc;
        this.wn = b.g;
        this.Ni = b.lar;
        this.Pi = b.lsr;
        this.Oi = b.lor;
        this.Rg = b.dm;
        this.timeout = b.to;
        this.ug = b.pcc;
        this.Hk = b.ft;
        k.push.apply(k, this.xc);
        y(this.xc);
        var c, d, a, f = b.p;
        b = 0;
        for (c = f.length; b < c; b++) d = this.Pm(), a = f[b], d.x = a[0], d.y = a[1], d.speed = a[2], d.j = a[3], d.opacity = a[4], d.Qk = a[5], d.size = a[6], d.Yg = a[7], d.ff = a[8]
    };
    c.tg = function() {
        k.push.apply(k, this.xc);
        y(this.xc)
    };
    c.Pm = function() {
        var b;
        k.length ? (b = k.pop(), b.Ua = this) : b = new f(this);
        this.xc.push(b);
        b.u = !0;
        return b
    };
    c.Wa = function() {
        var b = this.b.Zf(this),
            c, d, a, f;
        if (0 === this.Lh && this.dp)
            for (this.ug += b * this.Ql, d = qa(this.ug), this.ug -= d, c = 0; c < d; c++) a = this.Pm(), a.init();
        this.Cl = this.x;
        this.El = this.y;
        this.Dl = this.x;
        this.Bl = this.y;
        f = c = 0;
        for (d = this.xc.length; c < d; c++) a = this.xc[c], this.xc[f] = a, this.b.ra = !0, 1 === this.Lh && this.Hk && a.init(), a.Wa(b), a.u ? (a.left() < this.Cl && (this.Cl = a.left()), a.right() > this.Dl && (this.Dl = a.right()), a.top() < this.El && (this.El = a.top()), a.bottom() > this.Bl && (this.Bl = a.bottom()), f++) : k.push(a);
        Aa(this.xc, f);
        this.Ma();
        this.Hk = !1;
        1 === this.Lh && 0 === this.xc.length && this.b.we(this)
    };
    c.Zc = function(b) {
        var c, d, a, f = this.q;
        c = 0;
        for (d = this.xc.length; c < d; c++) a = this.xc[c], a.right() >= f.Ea && a.bottom() >= f.Fa && a.left() <= f.La && a.top() <= f.Ka && a.Zc(b)
    };
    c.Wb = function(b) {
        this.xs = this.q.cd();
        b.Lc(this.type.N);
        var c, d, a, f = this.q;
        c = 0;
        for (d = this.xc.length; c < d; c++) a = this.xc[c], a.right() >= f.Ea && a.bottom() >= f.Fa && a.left() <= f.La && a.top() <= f.Ka && a.Wb(b)
    };
    d.e = new function() {};
    d.A = new function() {};
    d.fa = new function() {}
})();

function T(f) {
    this.b = f
}
(function() {
    function f() {
        if (0 === this.gn.length) {
            var a = document.createElement("canvas");
            a.width = this.width;
            a.height = this.height;
            var b = a.getContext("2d");
            this.Mh ? b.drawImage(this.K, this.vh, this.wh, this.width, this.height, 0, 0, this.width, this.height) : b.drawImage(this.K, 0, 0, this.width, this.height);
            this.gn = a.toDataURL("image/png")
        }
        return this.gn
    }

    function d() {}

    function c(a) {
        a[0] = 0;
        a[1] = 0;
        a[2] = 0;
        p.push(a)
    }

    function k(a, b) {
        return a < b ? "" + a + "," + b : "" + b + "," + a
    }

    function b(a, b, c, d) {
        b = b.uid;
        c = c.uid;
        var e = k(b, c);
        if (a.hasOwnProperty(e)) a[e][2] = d;
        else {
            var g = p.length ? p.pop() : [0, 0, 0];
            g[0] = b;
            g[1] = c;
            g[2] = d;
            a[e] = g
        }
    }

    function m(a, b, d) {
        b = k(b.uid, d.uid);
        a.hasOwnProperty(b) && (c(a[b]), delete a[b])
    }

    function g(a, b, c) {
        b = k(b.uid, c.uid);
        if (a.hasOwnProperty(b)) return n = a[b][2], !0;
        n = -2;
        return !1
    }

    function a() {}
    var h = T.prototype;
    h.qa = function(a) {
        this.Da = a;
        this.b = a.b
    };
    var t = h.qa.prototype;
    t.P = function() {
        if (!this.M) {
            var a, b, c, d, e, g, h, k, m;
            this.Hd = [];
            this.wi = !1;
            a = 0;
            for (b = this.Pc.length; a < b; a++) {
                e = this.Pc[a];
                h = {};
                h.name = e[0];
                h.speed = e[1];
                h.loop = e[2];
                h.Qo = e[3];
                h.Ro = e[4];
                h.Qe = e[5];
                h.ta = e[6];
                h.frames = [];
                c = 0;
                for (d = e[7].length; c < d; c++) g = e[7][c], k = {}, k.Ej = g[0], k.pm = g[1], k.vh = g[2], k.wh = g[3], k.width = g[4], k.height = g[5], k.duration = g[6], k.uc = g[7], k.vc = g[8], k.Nn = g[9], k.Il = g[10], k.ys = g[11], k.Mh = 0 !== k.width, k.gn = "", k.cB = f, m = {
                    left: 0,
                    top: 0,
                    right: 1,
                    bottom: 1
                }, k.bp = m, k.N = null, (m = this.b.bx(g[0])) ? k.K = m : (k.K = new Image, k.K.Ov = g[0], k.K.bn = g[1], k.K.Gv = null, this.b.Cm(k.K, g[0])), h.frames.push(k), this.Hd.push(k);
                this.Pc[a] = h
            }
        }
    };
    t.tt = function() {
        var a, b, c;
        a = 0;
        for (b = this.d.length; a < b; a++) c = this.d[a], c.tk = c.Za.N
    };
    t.gj = function() {
        if (!this.M) {
            var a, b, c;
            a = 0;
            for (b = this.Hd.length; a < b; ++a) c = this.Hd[a], c.K.Gv = null, c.N = null;
            this.wi = !1;
            this.tt()
        }
    };
    t.hj = function() {
        if (!this.M && this.d.length) {
            var a, b, c;
            a = 0;
            for (b = this.Hd.length; a < b; ++a) c = this.Hd[a], c.N = this.b.F.xf(c.K, !1, this.b.Oa, c.ys);
            this.tt()
        }
    };
    t.Si = function() {
        if (!this.M && !this.wi && this.b.F) {
            var a, b, c;
            a = 0;
            for (b = this.Hd.length; a < b; ++a) c = this.Hd[a], c.N = this.b.F.xf(c.K, !1, this.b.Oa, c.ys);
            this.wi = !0
        }
    };
    t.Jj = function() {
        if (!this.M && !this.d.length && this.wi) {
            var a, b, c;
            a = 0;
            for (b = this.Hd.length; a < b; ++a) c = this.Hd[a], this.b.F.deleteTexture(c.N), c.N = null;
            this.wi = !1
        }
    };
    var e = [];
    t.nj = function(a) {
        var b, c, d;
        y(e);
        b = 0;
        for (c = this.Hd.length; b < c; ++b) d = this.Hd[b].K, -1 === e.indexOf(d) && (a.drawImage(d, 0, 0), e.push(d))
    };
    h.ca = function(a) {
        this.type = a;
        this.b = a.b;
        a = this.type.Pc[0].frames[0].Il;
        this.ld ? this.Ga.vj(a) : this.Ga = new cb(a)
    };
    var l = h.ca.prototype;
    l.P = function() {
        this.visible = 0 === this.D[0];
        this.Uk = this.Gi = !1;
        this.Of = 0 !== this.D[3];
        this.Va = this.Mq(this.D[1]) || this.type.Pc[0];
        this.O = this.D[2];
        0 > this.O && (this.O = 0);
        this.O >= this.Va.frames.length && (this.O = this.Va.frames.length - 1);
        var a = this.Va.frames[this.O];
        this.Ga.vj(a.Il);
        this.uc = a.uc;
        this.vc = a.vc;
        this.Pg = this.Va.speed;
        this.of = this.Va.Ro;
        1 === this.type.Pc.length && 1 === this.type.Pc[0].frames.length || 0 === this.Pg || (this.b.Hj(this), this.Gi = !0);
        this.ld ? this.$d.reset() : this.$d = new ab;
        this.Ie = this.$d.ma;
        this.Kf = !0;
        this.xe = 0;
        this.Jf = !0;
        this.lk = this.hq = "";
        this.rq = 0;
        this.kk = -1;
        this.type.Si();
        var b, c, d, e, g, f, h, a = 0;
        for (b = this.type.Pc.length; a < b; a++)
            for (e = this.type.Pc[a], c = 0, d = e.frames.length; c < d; c++) g = e.frames[c], 0 === g.width && (g.width = g.K.width, g.height = g.K.height), g.Mh && (h = g.K, f = g.bp, f.left = g.vh / h.width, f.top = g.wh / h.height, f.right = (g.vh + g.width) / h.width, f.bottom = (g.wh + g.height) / h.height, 0 === g.vh && 0 === g.wh && g.width === h.width && g.height === h.height && (g.Mh = !1));
        this.Za = this.Va.frames[this.O];
        this.tk = this.Za.N
    };
    l.Lb = function() {
        var a = {
            a: this.Va.ta,
            f: this.O,
            cas: this.Pg,
            fs: this.Ie,
            ar: this.xe,
            at: this.$d.ma,
            rt: this.of
        };
        this.Kf || (a.ap = this.Kf);
        this.Jf ||
            (a.af = this.Jf);
        return a
    };
    l.$b = function(a) {
        var b = this.hx(a.a);
        b && (this.Va = b);
        this.O = a.f;
        0 > this.O && (this.O = 0);
        this.O >= this.Va.frames.length && (this.O = this.Va.frames.length - 1);
        this.Pg = a.cas;
        this.Ie = a.fs;
        this.xe = a.ar;
        this.$d.reset();
        this.$d.ma = a.at;
        this.Kf = a.hasOwnProperty("ap") ? a.ap : !0;
        this.Jf = a.hasOwnProperty("af") ? a.af : !0;
        a.hasOwnProperty("rt") ? this.of = a.rt : this.of = this.Va.Ro;
        this.Za = this.Va.frames[this.O];
        this.tk = this.Za.N;
        this.Ga.vj(this.Za.Il);
        this.uc = this.Za.uc;
        this.vc = this.Za.vc
    };
    l.Rm = function(a) {
        this.O = a ? 0 : this.Va.frames.length - 1;
        this.Kf = !1;
        this.hq = this.Va.name;
        this.Uk = !0;
        this.b.trigger(T.prototype.e.iu, this);
        this.b.trigger(T.prototype.e.hu, this);
        this.Uk = !1;
        this.xe = 0
    };
    l.ei = function() {
        return this.$d.ma
    };
    l.Wa = function() {
        this.$d.add(this.b.Zf(this));
        this.lk.length && this.yq();
        0 <= this.kk && this.zq();
        var a = this.$d.ma,
            b = this.Va,
            c = b.frames[this.O],
            d = c.duration / this.Pg;
        this.Kf && a >= this.Ie + d && (this.Jf ? this.O++ : this.O--, this.Ie += d, this.O >= b.frames.length && (b.Qe ? (this.Jf = !1, this.O = b.frames.length - 2) : b.loop ? this.O = this.of : (this.xe++, this.xe >= b.Qo ? this.Rm(!1) : this.O = this.of)), 0 > this.O && (b.Qe ? (this.O = 1, this.Jf = !0, b.loop || (this.xe++, this.xe >= b.Qo && this.Rm(!0))) : b.loop ? this.O = this.of : (this.xe++, this.xe >= b.Qo ? this.Rm(!0) : this.O = this.of)), 0 > this.O ? this.O = 0 : this.O >= b.frames.length && (this.O = b.frames.length - 1), a > this.Ie + b.frames[this.O].duration / this.Pg && (this.Ie = a), a = b.frames[this.O], this.Ig(c, a), this.b.ra = !0)
    };
    l.Mq = function(a) {
        var b, c, d;
        b = 0;
        for (c = this.type.Pc.length; b < c; b++)
            if (d = this.type.Pc[b], nb(d.name, a)) return d;
        return null
    };
    l.hx = function(a) {
        var b, c, d;
        b = 0;
        for (c = this.type.Pc.length; b < c; b++)
            if (d = this.type.Pc[b], d.ta === a) return d;
        return null
    };
    l.yq = function() {
        var a = this.Va.frames[this.O],
            b = this.Mq(this.lk);
        this.lk = "";
        !b || nb(b.name, this.Va.name) && this.Kf || (this.Va = b, this.Pg = b.speed, this.of = b.Ro, 0 > this.O && (this.O = 0), this.O >= this.Va.frames.length && (this.O = this.Va.frames.length - 1), 1 === this.rq && (this.O = 0), this.Kf = !0, this.Ie = this.$d.ma, this.Jf = !0, this.Ig(a, this.Va.frames[this.O]), this.b.ra = !0)
    };
    l.zq = function() {
        var a = this.Va.frames[this.O],
            b = this.O;
        this.O = qa(this.kk);
        0 > this.O && (this.O = 0);
        this.O >= this.Va.frames.length && (this.O = this.Va.frames.length - 1);
        b !== this.O && (this.Ig(a, this.Va.frames[this.O]), this.Ie = this.$d.ma, this.b.ra = !0);
        this.kk = -1
    };
    l.Ig = function(a, b) {
        var c = a.width,
            d = a.height,
            e = b.width,
            g = b.height;
        c != e && (this.width *= e / c);
        d != g && (this.height *= g / d);
        this.uc = b.uc;
        this.vc = b.vc;
        this.Ga.vj(b.Il);
        this.Ma();
        this.Za = b;
        this.tk = b.N;
        c = 0;
        for (d = this.V.length; c < d; c++) e = this.V[c], e.ks && e.ks(a, b);
        this.b.trigger(T.prototype.e.Ig, this)
    };
    l.Zc = function(a) {
        a.globalAlpha = this.opacity;
        var b = this.Za,
            c = b.Mh,
            d = b.K,
            e = this.x,
            g = this.y,
            f = this.width,
            h = this.height;
        if (0 === this.j && 0 <= f && 0 <= h) e -= this.uc * f, g -= this.vc * h, this.b.kd && (e = Math.round(e), g = Math.round(g)), c ? a.drawImage(d, b.vh, b.wh, b.width, b.height, e, g, f, h) : a.drawImage(d, e, g, f, h);
        else {
            this.b.kd && (e = Math.round(e), g = Math.round(g));
            a.save();
            var k = 0 < f ? 1 : -1,
                m = 0 < h ? 1 : -1;
            a.translate(e, g);
            1 === k && 1 === m || a.scale(k, m);
            a.rotate(this.j * k * m);
            e = 0 - this.uc * ma(f);
            g = 0 - this.vc * ma(h);
            c ? a.drawImage(d, b.vh, b.wh, b.width, b.height, e, g, ma(f), ma(h)) : a.drawImage(d, e, g, ma(f), ma(h));
            a.restore()
        }
    };
    l.Rf = function(a) {
        this.Wb(a)
    };
    l.Wb = function(a) {
        a.Lc(this.tk);
        a.Ef(this.opacity);
        var b = this.Za,
            c = this.Dc;
        if (this.b.kd) {
            var d = Math.round(this.x) - this.x,
                e = Math.round(this.y) - this.y;
            b.Mh ? a.me(c.hb + d, c.ib + e, c.Nb + d, c.Ob + e, c.zb + d, c.Ab + e, c.xb + d, c.yb + e, b.bp) : a.Eh(c.hb + d, c.ib + e, c.Nb + d, c.Ob + e, c.zb + d, c.Ab + e, c.xb + d, c.yb + e)
        } else b.Mh ? a.me(c.hb, c.ib, c.Nb, c.Ob, c.zb, c.Ab, c.xb, c.yb, b.bp) : a.Eh(c.hb, c.ib, c.Nb, c.Ob, c.zb, c.Ab, c.xb, c.yb)
    };
    l.lx = function(a) {
        var b = this.Za,
            c, d;
        c = 0;
        for (d = b.Nn.length; c < d; c++)
            if (nb(a, b.Nn[c][0])) return c;
        return -1
    };
    l.pi = function(a, b) {
        var c = this.Za,
            d = c.Nn,
            e;
        ja(a) ? e = this.lx(a) : e = a - 1;
        e = qa(e);
        if (0 > e || e >= d.length) return b ? this.x : this.y;
        var g = (d[e][1] - c.uc) * this.width,
            d = d[e][2],
            d = (d - c.vc) * this.height,
            c = Math.cos(this.j);
        e = Math.sin(this.j);
        var f = g * c - d * e,
            d = d * c + g * e,
            g = f + this.x,
            d = d + this.y;
        return b ? g : d
    };
    var p = [],
        n = -2,
        L = [];
    d.prototype.lu = function(a) {
        if (!a) return !1;
        var d = this.b,
            e = d.oi(),
            f = e.type,
            h = null;
        e.U.collmemory ? h = e.U.collmemory : (h = {}, e.U.collmemory = h);
        e.U.spriteCreatedDestroyCallback || (e.U.spriteCreatedDestroyCallback = !0, d.Om(function(a) {
            var b = e.U.collmemory;
            a = a.uid;
            var d, g;
            for (d in b) b.hasOwnProperty(d) && (g = b[d], g[0] === a || g[1] === a) && (c(b[d]), delete b[d])
        }));
        var k = f.ga(),
            l = a.ga(),
            k = k.Rc(),
            p, q, D, u, r, t, N, w = this.b.Bg,
            M = w - 1,
            B = d.ob().lc;
        for (q = 0; q < k.length; q++) {
            D = k[q];
            l.xa ? (D.Ra(), this.b.Oq(D.q, a, D.Xa, L), p = L) : p = l.Rc();
            for (u = 0; u < p.length; u++) r = p[u], d.ct(D, r) || d.Iv(D, r) ? (t = g(h, D, r), t = !t || n < M, b(h, D, r, w), t && (d.Nl(B.Qa), t = f.ga(), N = a.ga(), t.xa = !1, N.xa = !1, f === a ? (t.d.length = 2, t.d[0] = D, t.d[1] = r, f.sd()) : (t.d.length = 1, N.d.length = 1, t.d[0] = D, N.d[0] = r, f.sd(), a.sd()), B.Vy(), d.vg(B.Qa))) : m(h, D, r);
            y(L)
        }
        return !1
    };
    var M = null,
        D = new ba,
        q = !1,
        u = [],
        N = new wa(0, 0, 0, 0);
    t.finish = function(a) {
        if (q) {
            if (a) {
                var b = this.b.ob().lc.jd;
                a = M.ga();
                var c = D.Ye(),
                    d, e;
                if (a.xa) {
                    a.xa = !1;
                    y(a.d);
                    d = 0;
                    for (e = c.length; d < e; ++d) a.d[d] = c[d];
                    if (b)
                        for (y(a.da), d = 0, e = M.d.length; d < e; ++d) c = M.d[d], D.contains(c) || a.da.push(c)
                } else if (b)
                    for (b = a.d.length, d = 0, e = c.length; d < e; ++d) a.d[b + d] = c[d], Fa(a.da, c[d]);
                else Ca(a.d, c);
                M.sd()
            }
            D.clear();
            q = !1
        }
    };
    d.prototype.Zt = function(a) {
        if (a) {
            var b = !1,
                c, d, e, g = this.b.oi(),
                f = g.type,
                g = g.Vk;
            c = a.ga();
            d = this.b.ob().lc.jd;
            var h;
            c.xa ? (this.Ra(), N.Og(this.Xa), N.offset(0, 0), this.b.Oq(this.q, a, N, u), h = u) : h = d ? this.b.Ux() && !c.da.length && c.d.length ? c.d : c.da : c.d;
            M = a;
            q = f !== a && !g;
            c = 0;
            for (d = h.length; c < d; c++)
                if (e = h[c], this.b.ct(this, e)) {
                    b = !0;
                    if (g) break;
                    f !== a && D.add(e)
                }
            y(u);
            a = b
        } else a = !1;
        return a
    };
    d.prototype.hu = function(a) {
        return nb(this.hq, a)
    };
    d.prototype.iu = function() {
        return !0
    };
    d.prototype.Ig = function() {
        return !0
    };
    h.e = new d;
    a.prototype.hv = function(a, b, c) {
        if (a && b && (b = this.b.cn(a, b, this.pi(c, !0), this.pi(c, !1)))) {
            "undefined" !== typeof b.j && (b.j = this.j, b.Ma());
            this.b.fd++;
            var d, e, g;
            this.b.trigger(Object.getPrototypeOf(a.Da).e.Hg, b);
            if (b.qc)
                for (d = 0, e = b.siblings.length; d < e; d++) g = b.siblings[d], this.b.trigger(Object.getPrototypeOf(g.type.Da).e.Hg, g);
            this.b.fd--;
            d = this.b.jx();
            c = !1;
            if (ha(d.U.Spawn_LastExec) || d.U.Spawn_LastExec < this.b.Xf) c = !0, d.U.Spawn_LastExec = this.b.Xf;
            if (a != this.type && (a = a.ga(), a.xa = !1, c ? (y(a.d), a.d[0] = b) : a.d.push(b), b.qc))
                for (d = 0, e = b.siblings.length; d < e; d++) g = b.siblings[d], a = g.type.ga(), a.xa = !1, c ? (y(a.d), a.d[0] = g) : a.d.push(g)
        }
    };
    a.prototype.Lu = function(a, b) {
        this.lk = a;
        this.rq = b;
        this.Gi || (this.b.Hj(this), this.Gi = !0);
        this.Uk || this.yq()
    };
    a.prototype.Mu = function(a) {
        this.kk = a;
        this.Gi || (this.b.Hj(this), this.Gi = !0);
        this.Uk || this.zq()
    };
    a.prototype.Ru = function(a) {
        a = ma(this.width) * (0 === a ? -1 : 1);
        this.width !== a && (this.width = a, this.Ma())
    };
    a.prototype.Vp = function(a) {
        var b = this.Za,
            c = b.width * a * (0 > this.width ? -1 : 1);
        a = b.height * a * (0 > this.height ? -1 : 1);
        if (this.width !== c || this.height !== a) this.width = c, this.height = a, this.Ma()
    };
    h.A = new a;
    h.fa = new function() {}
})();

function yc(f) {
    this.b = f
}
(function() {
    function f(a, b) {
        return a.length ? a.pop() : new b
    }

    function d(a, b, c) {
        if (c) {
            var d;
            c = 0;
            for (d = b.length; c < d; c++) a.length < g && a.push(b[c]);
            y(b)
        } else
            for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (a.length < g && a.push(b[d]), delete b[d])
    }

    function c(b, c, d) {
        var e = b.mg;
        d = d.replace(/\s\s*$/, "");
        c >= e.length && e.push(f(a, Object));
        c = e[c];
        c.text = d;
        c.width = b.uo(d);
        b.Rh = na(b.Rh, c.width)
    }

    function k() {}
    var b = yc.prototype;
    b.P = function() {};
    b.qa = function(a) {
        this.Da = a;
        this.b = a.b
    };
    var m = b.qa.prototype;
    m.P = function() {
        this.M || (this.K = new Image, this.b.Cm(this.K, this.Ej), this.N = null)
    };
    m.gj = function() {
        this.M || (this.N = null)
    };
    m.hj = function() {
        if (!this.M && this.d.length) {
            this.N || (this.N = this.b.F.xf(this.K, !1, this.b.Oa, this.Ag));
            var a, b;
            a = 0;
            for (b = this.d.length; a < b; a++) this.d[a].N = this.N
        }
    };
    m.Jj = function() {
        this.M || this.d.length || !this.N || (this.b.F.deleteTexture(this.N), this.N = null)
    };
    m.nj = function(a) {
        a.drawImage(this.K, 0, 0)
    };
    b.ca = function(a) {
        this.type = a;
        this.b = a.b
    };
    m = b.ca.prototype;
    m.tg = function() {
        d(a, this.mg, !0);
        d(h, this.nk, !1);
        d(t, this.ok, !1);
        Wa(this.kf)
    };
    m.P = function() {
        this.K = this.type.K;
        this.mk = this.D[0];
        this.jf = this.D[1];
        this.characterSet = this.D[2];
        this.text = this.D[3];
        this.be = this.D[4];
        this.visible = 0 === this.D[5];
        this.Sk = this.D[6] / 2;
        this.Am = this.D[7] / 2;
        this.Hz = 0 === this.D[9];
        this.Ng = this.D[10];
        this.lineHeight = this.D[11];
        this.zg = this.Rh = 0;
        this.ld ? (y(this.mg), Wa(this.nk), Wa(this.ok), Wa(this.kf)) : (this.mg = [], this.nk = {}, this.ok = {}, this.kf = {});
        this.Sh = !0;
        this.jo = this.width;
        this.b.F && (this.type.N || (this.type.N = this.b.F.xf(this.type.K, !1, this.b.Oa, this.type.Ag)), this.N = this.type.N);
        this.jv()
    };
    m.Lb = function() {
        var a = {
                t: this.text,
                csc: this.be,
                csp: this.Ng,
                lh: this.lineHeight,
                tw: this.Rh,
                th: this.zg,
                lrt: this.ey,
                ha: this.Sk,
                va: this.Am,
                cw: {}
            },
            b;
        for (b in this.kf) a.cw[b] = this.kf[b];
        return a
    };
    m.$b = function(a) {
        this.text = a.t;
        this.be = a.csc;
        this.Ng = a.csp;
        this.lineHeight = a.lh;
        this.Rh = a.tw;
        this.zg = a.th;
        this.ey = a.lrt;
        a.hasOwnProperty("ha") && (this.Sk = a.ha);
        a.hasOwnProperty("va") && (this.Am = a.va);
        for (var b in a.cw) this.kf[b] = a.cw[b];
        this.Sh = !0;
        this.jo = this.width
    };
    var g = 1E3,
        a = [],
        h = [],
        t = [];
    m.jv = function() {
        for (var a = this.K, b = a.width, c = a.height, a = this.mk, d = this.jf, e = a / b, g = d / c, k = this.characterSet, b = Math.floor(b / a), c = Math.floor(c / d), m = 0; m < k.length && !(m >= b * c); m++) {
            var l = m % b,
                v = Math.floor(m / b),
                C = k.charAt(m);
            if (this.b.F) {
                var x = this.ok,
                    J = l * e,
                    I = v * g,
                    l = (l + 1) * e,
                    v = (v + 1) * g;
                void 0 === x[C] && (x[C] = f(t, wa));
                x[C].left = J;
                x[C].top = I;
                x[C].right = l;
                x[C].bottom = v
            } else x = this.nk, l = l * a, v = v * d, J = a, I = d, void 0 === x[C] && (x[C] = f(h, Object)), x[C].x = l, x[C].y = v, x[C].zt = J, x[C].Uq = I
        }
    };
    var e = [];
    b.pv = function(a) {
        y(e);
        for (var b = "", c, d = 0; d < a.length;)
            if (c = a.charAt(d), "\n" === c) b.length && (e.push(b), b = ""), e.push("\n"), ++d;
            else if (" " === c || "\t" === c || "-" === c) {
            do b += a.charAt(d), d++; while (d < a.length && (" " === a.charAt(d) || "\t" === a.charAt(d)));
            e.push(b);
            b = ""
        } else d < a.length && (b += c, d++);
        b.length && e.push(b)
    };
    b.tv = function(b) {
        var c = b.text,
            e = b.mg;
        if (c && c.length) {
            var g = b.width;
            if (2 >= g) d(a, e, !0);
            else {
                var h = b.be,
                    k = b.Ng;
                if (c.length * (b.mk * h + k) - k <= g && -1 === c.indexOf("\n") && (k = b.uo(c), k <= g)) {
                    d(a, e, !0);
                    e.push(f(a, Object));
                    e[0].text = c;
                    e[0].width = k;
                    b.Rh = k;
                    b.zg = b.jf * h + b.lineHeight;
                    return
                }
                this.uv(b);
                b.zg = e.length * (b.jf * h + b.lineHeight)
            }
        } else d(a, e, !0)
    };
    b.uv = function(b) {
        var d = b.Hz,
            f = b.text,
            h = b.mg,
            k = b.width;
        d && (this.pv(f), f = e);
        var m = "",
            l, t, z, v = 0,
            C = !1;
        for (z = 0; z < f.length; z++) "\n" === f[z] ? (!0 === C ? C = !1 : (c(b, v, m), v++), m = "") : (C = !1, l = m, m += f[z], t = b.uo(m.replace(/\s\s*$/, "")), t > k && ("" === l ? (c(b, v, m), m = "", C = !0) : (c(b, v, l), m = f[z]), v++, d || " " !== m || (m = "")));
        m.replace(/\s\s*$/, "").length && (c(b, v, m), v++);
        for (z = v; z < h.length; z++) a.length < g && a.push(h[z]);
        h.length = v
    };
    m.uo = function(a) {
        for (var b = this.Ng, c = a.length, d = 0, e = 0; e < c; e++) d += this.yn(a.charAt(e)) * this.be + b;
        return d - (0 < d ? b : 0)
    };
    m.yn = function(a) {
        var b = this.kf;
        return void 0 !== b[a] ? b[a] : this.mk
    };
    m.Ds = function() {
        if (this.Sh || this.width !== this.jo) this.zg = this.Rh = 0, this.type.Da.tv(this), this.Sh = !1, this.jo = this.width
    };
    m.Zc = function(a) {
        var b = this.K;
        if ("" !== this.text && null != b && (this.Ds(), !(this.height < this.jf * this.be + this.lineHeight))) {
            a.globalAlpha = this.opacity;
            var b = this.x,
                c = this.y;
            this.b.kd && (b = Math.round(b), c = Math.round(c));
            var d = this.q.Ea,
                e = this.q.Fa,
                g = this.q.La,
                f = this.q.Ka;
            a.save();
            a.translate(b, c);
            a.rotate(this.j);
            for (var h = this.j, k = this.Sk, m = this.be, l = this.jf * m, t = this.lineHeight, J = this.Ng, I = this.mg, K, Z = -(this.uc * this.width), P = -(this.vc * this.height), P = P + this.Am * na(0, this.height - this.zg), E, Q, r, Y = 0; Y < I.length; Y++) {
                var F = I[Y].text;
                K = k * na(0, this.width - I[Y].width);
                E = Z + K;
                P += t;
                if (0 === h && c + P + l < e) P += l;
                else {
                    for (var w = 0; w < F.length; w++) {
                        Q = F.charAt(w);
                        K = this.yn(Q);
                        var G = this.nk[Q];
                        if (0 === h && b +
                            E + K * m + J < d) E += K * m + J;
                        else {
                            if (E + K * m > this.width + 1E-5) break;
                            void 0 !== G && (Q = E, r = P, 0 === h && 1 === m && (Q = Math.round(Q), r = Math.round(r)), a.drawImage(this.K, G.x, G.y, G.zt, G.Uq, Q, r, G.zt * m, G.Uq * m));
                            E += K * m + J;
                            if (0 === h && b + E > g) break
                        }
                    }
                    P += l;
                    if (0 === h && (P + l + t > this.height || c + P > f)) break
                }
            }
            a.restore()
        }
    };
    var l = new xa;
    m.Wb = function(a) {
        a.Lc(this.N);
        a.Ef(this.opacity);
        if (this.text && (this.Ds(), !(this.height < this.jf * this.be + this.lineHeight))) {
            this.Ra();
            var b = this.Dc,
                c = 0,
                d = 0;
            this.b.kd && (c = Math.round(this.x) - this.x, d = Math.round(this.y) -
                this.y);
            var e = this.q.Ea,
                g = this.q.Fa,
                f = this.q.La,
                h = this.q.Ka,
                k = this.j,
                m = this.Sk,
                t = this.Am,
                x = this.be,
                J = this.jf * x,
                I = this.lineHeight,
                K = this.Ng,
                Z = this.mg,
                P = this.zg,
                E, Q, r;
            0 !== k && (Q = Math.cos(k), r = Math.sin(k));
            for (var c = b.hb + c, b = b.ib + d, Y, t = t * na(0, this.height - P), F, w, P = 0; P < Z.length; P++)
                if (d = Z[P].text, Y = E = m * na(0, this.width - Z[P].width), t += I, 0 === k && b + t + J < g) t += J;
                else {
                    for (var G = 0; G < d.length; G++) {
                        var B = d.charAt(G);
                        E = this.yn(B);
                        B = this.ok[B];
                        if (0 === k && c + Y + E * x + K < e) Y += E * x + K;
                        else {
                            if (Y + E * x > this.width + 1E-5) break;
                            if (void 0 !== B) {
                                var S = this.mk * x,
                                    H = this.jf * x;
                                F = Y;
                                w = t;
                                0 === k && 1 === x && (F = Math.round(F), w = Math.round(w));
                                l.hb = F;
                                l.ib = w;
                                l.Nb = F + S;
                                l.Ob = w;
                                l.xb = F;
                                l.yb = w + H;
                                l.zb = F + S;
                                l.Ab = w + H;
                                0 !== k && (F = l, w = Q, S = r, H = void 0, H = F.hb * w - F.ib * S, F.ib = F.ib * w + F.hb * S, F.hb = H, H = F.Nb * w - F.Ob * S, F.Ob = F.Ob * w + F.Nb * S, F.Nb = H, H = F.xb * w - F.yb * S, F.yb = F.yb * w + F.xb * S, F.xb = H, H = F.zb * w - F.Ab * S, F.Ab = F.Ab * w + F.zb * S, F.zb = H);
                                l.offset(c, b);
                                a.me(l.hb, l.ib, l.Nb, l.Ob, l.zb, l.Ab, l.xb, l.yb, B)
                            }
                            Y += E * x + K;
                            if (0 === k && c + Y > f) break
                        }
                    }
                    t += J;
                    if (0 === k && (t + J + I > this.height || b + t > h)) break
                }
        }
    };
    b.e = new function() {};
    k.prototype.Xu = function(a) {
        ia(a) && 1E9 > a && (a = Math.round(1E10 * a) / 1E10);
        a = a.toString();
        this.text !== a && (this.text = a, this.Sh = !0, this.b.ra = !0)
    };
    k.prototype.Vp = function(a) {
        a !== this.be && (this.be = a, this.Sh = !0, this.b.ra = !0)
    };
    m.ei = function(a, b) {
        var c = parseInt(b, 10);
        this.kf[a] !== c && (this.kf[a] = c, this.Sh = !0, this.b.ra = !0)
    };
    b.A = new k;
    b.fa = new function() {}
})();

function zc(f) {
    this.b = f
}
(function() {
    var f = zc.prototype;
    f.qa = function(c) {
        this.Da = c;
        this.b = c.b
    };
    var d = f.qa.prototype;
    d.P = function() {
        this.M || (this.K = new Image, this.K.bn = this.pm, this.b.Cm(this.K, this.Ej), this.N = this.pattern = null)
    };
    d.gj = function() {
        this.M || (this.N = null)
    };
    d.hj = function() {
        if (!this.M && this.d.length) {
            this.N || (this.N = this.b.F.xf(this.K, !0, this.b.Oa, this.Ag));
            var c, d;
            c = 0;
            for (d = this.d.length; c < d; c++) this.d[c].N = this.N
        }
    };
    d.Si = function() {
        this.M || this.N || !this.b.F || (this.N = this.b.F.xf(this.K, !0, this.b.Oa, this.Ag))
    };
    d.Jj = function() {
        this.M || this.d.length || !this.N || (this.b.F.deleteTexture(this.N), this.N = null)
    };
    d.nj = function(c) {
        c.drawImage(this.K, 0, 0)
    };
    f.ca = function(c) {
        this.type = c;
        this.b = c.b
    };
    d = f.ca.prototype;
    d.P = function() {
        this.visible = 0 === this.D[0];
        this.qj = new wa(0, 0, 0, 0);
        this.Yq = !1;
        this.K = this.type.K;
        this.b.F ? (this.type.Si(), this.N = this.type.N) : (this.type.pattern || (this.type.pattern = this.b.Ya.createPattern(this.type.K, "repeat")), this.pattern = this.type.pattern)
    };
    d.Zd = function() {
        this.Yq = !1;
        this.K = this.type.K
    };
    d.tg = function() {
        this.b.F && this.Yq && this.N && (this.b.F.deleteTexture(this.N), this.N = null)
    };
    d.Zc = function(c) {
        c.globalAlpha = this.opacity;
        c.save();
        c.fillStyle = this.pattern;
        var d = this.x,
            b = this.y;
        this.b.kd && (d = Math.round(d), b = Math.round(b));
        var f = -(this.uc * this.width),
            g = -(this.vc * this.height),
            a = f % this.K.width,
            h = g % this.K.height;
        0 > a && (a += this.K.width);
        0 > h && (h += this.K.height);
        c.translate(d, b);
        c.rotate(this.j);
        c.translate(a, h);
        c.fillRect(f - a, g - h, this.width, this.height);
        c.restore()
    };
    d.Rf = function(c) {
        this.Wb(c)
    };
    d.Wb = function(c) {
        c.Lc(this.N);
        c.Ef(this.opacity);
        var d = this.qj;
        d.right = this.width / this.K.width;
        d.bottom = this.height / this.K.height;
        var b = this.Dc;
        if (this.b.kd) {
            var f = Math.round(this.x) - this.x,
                g = Math.round(this.y) - this.y;
            c.me(b.hb + f, b.ib + g, b.Nb + f, b.Ob + g, b.zb + f, b.Ab + g, b.xb + f, b.yb + g, d)
        } else c.me(b.hb, b.ib, b.Nb, b.Ob, b.zb, b.Ab, b.xb, b.yb, d)
    };
    f.e = new function() {};
    f.A = new function() {};
    f.fa = new function() {}
})();

function Ac(f) {
    this.b = f
}
(function() {
    function f(a) {
        h = a.x;
        t = a.y;
        e = a.z
    }

    function d(a, b, d, e) {
        var g;
        g = l.length ? l.pop() : new c;
        g.init(a, b, d, e);
        return g
    }

    function c() {
        this.Aj = this.id = this.y = this.x = this.lm = this.km = this.ho = this.time = this.fp = 0;
        this.Ij = this.um = !1
    }

    function k() {}

    function b() {}
    var m = Ac.prototype;
    m.qa = function(a) {
        this.Da = a;
        this.b = a.b
    };
    m.qa.prototype.P = function() {};
    m.ca = function(a) {
        this.type = a;
        this.b = a.b;
        this.touches = [];
        this.wo = !1
    };
    var g = m.ca.prototype,
        a = {
            left: 0,
            top: 0
        };
    g.mi = function(a) {
        var b, c;
        b = 0;
        for (c = this.touches.length; b < c; b++)
            if (this.touches[b].id === a) return b;
        return -1
    };
    var h = 0,
        t = 0,
        e = 0,
        l = [];
    c.prototype.init = function(a, b, c, d) {
        var e = Xa();
        this.fp = this.ho = this.time = e;
        this.km = a;
        this.lm = b;
        this.x = a;
        this.y = b;
        this.pressure = this.height = this.width = 0;
        this.id = c;
        this.Aj = d;
        this.Ij = this.um = !1
    };
    c.prototype.update = function(a, b, c, d, e, g) {
        this.ho = this.time;
        this.time = a;
        this.x = b;
        this.y = c;
        this.width = d;
        this.height = e;
        this.pressure = g;
        !this.Ij && 15 <= Sa(this.km, this.lm, this.x, this.y) && (this.Ij = !0)
    };
    c.prototype.iy = function(a, b) {
        !this.um && 500 <= Xa() - this.fp && !this.Ij && 15 > Sa(this.km, this.lm, this.x, this.y) && (this.um = !0, a.ue = this.Aj, a.Uh = this.id, a.Wg = b, a.b.trigger(Ac.prototype.e.ru, a), a.Be = this.x, a.Ce = this.y, a.b.trigger(Ac.prototype.e.su, a), a.Wg = 0)
    };
    var p = -1E3,
        n = -1E3,
        L = -1E4;
    c.prototype.Pr = function(a, b) {
        if (!this.um) {
            var c = Xa();
            333 >= c - this.fp && !this.Ij && 15 > Sa(this.km, this.lm, this.x, this.y) && (a.ue = this.Aj, a.Uh = this.id, a.Wg = b, 666 >= c - L && 25 > Sa(p, n, this.x, this.y) ? (a.b.trigger(Ac.prototype.e.ou, a), a.Be = this.x, a.Ce = this.y, a.b.trigger(Ac.prototype.e.pu, a), n = p = -1E3, L = -1E4) : (a.b.trigger(Ac.prototype.e.Np, a), a.Be = this.x, a.Ce = this.y, a.b.trigger(Ac.prototype.e.Op, a), p = this.x, n = this.y, L = c), a.Wg = 0)
        }
    };
    g.P = function() {
        this.$x = !("undefined" === typeof window.c2isWindows8 || !window.c2isWindows8);
        this.Wg = this.Uh = this.ue = this.Ce = this.Be = this.bq = this.aq = this.$p = this.xv = this.wv = this.vv = this.zl = this.yl = this.xl = 0;
        this.Az = 0 !== this.D[0];
        var a = 0 < this.b.Ec ? document : this.b.canvas,
            b = document;
        this.b.pc ? b = a = window.Canvas : this.b.ed && (b = a = window);
        var c = this;
        "undefined" !== typeof PointerEvent ? (a.addEventListener("pointerdown", function(a) {
            c.hs(a)
        }, !1), a.addEventListener("pointermove", function(a) {
            c.gs(a)
        }, !1), b.addEventListener("pointerup", function(a) {
            c.sl(a, !1)
        }, !1), b.addEventListener("pointercancel", function(a) {
            c.sl(a, !0)
        }, !1), this.b.canvas && (this.b.canvas.addEventListener("MSGestureHold", function(a) {
            a.preventDefault()
        }, !1), document.addEventListener("MSGestureHold", function(a) {
            a.preventDefault()
        }, !1), this.b.canvas.addEventListener("gesturehold", function(a) {
            a.preventDefault()
        }, !1), document.addEventListener("gesturehold", function(a) {
            a.preventDefault()
        }, !1))) : window.navigator.msPointerEnabled ? (a.addEventListener("MSPointerDown", function(a) {
            c.hs(a)
        }, !1), a.addEventListener("MSPointerMove", function(a) {
            c.gs(a)
        }, !1), b.addEventListener("MSPointerUp", function(a) {
            c.sl(a, !1)
        }, !1), b.addEventListener("MSPointerCancel", function(a) {
            c.sl(a, !0)
        }, !1), this.b.canvas && (this.b.canvas.addEventListener("MSGestureHold", function(a) {
            a.preventDefault()
        }, !1), document.addEventListener("MSGestureHold", function(a) {
            a.preventDefault()
        }, !1))) : (a.addEventListener("touchstart", function(a) {
            c.ms(a)
        }, !1), a.addEventListener("touchmove", function(a) {
            c.ls(a)
        }, !1), b.addEventListener("touchend", function(a) {
            c.Do(a, !1)
        }, !1), b.addEventListener("touchcancel", function(a) {
            c.Do(a, !0)
        }, !1));
        if (this.$x) {
            var d = function(a) {
                    a = a.reading;
                    c.$p = a.accelerationX;
                    c.aq = a.accelerationY;
                    c.bq = a.accelerationZ
                },
                e = function(a) {
                    a = a.reading;
                    c.xl = a.yawDegrees;
                    c.yl = a.pitchDegrees;
                    c.zl = a.rollDegrees
                },
                g = Windows.Devices.Sensors.Accelerometer.getDefault();
            g && (g.reportInterval = Math.max(g.minimumReportInterval, 16), g.addEventListener("readingchanged", d));
            var h = Windows.Devices.Sensors.Inclinometer.getDefault();
            h && (h.reportInterval = Math.max(h.minimumReportInterval, 16), h.addEventListener("readingchanged", e));
            document.addEventListener("visibilitychange", function() {
                document.hidden || document.msHidden ? (g && g.removeEventListener("readingchanged", d), h && h.removeEventListener("readingchanged", e)) : (g && g.addEventListener("readingchanged", d), h && h.addEventListener("readingchanged", e))
            }, !1)
        } else window.addEventListener("deviceorientation", function(a) {
            c.xl = a.alpha || 0;
            c.yl = a.beta || 0;
            c.zl = a.gamma || 0
        }, !1), window.addEventListener("devicemotion", function(a) {
            a.accelerationIncludingGravity && (c.vv = a.accelerationIncludingGravity.x || 0, c.wv = a.accelerationIncludingGravity.y || 0, c.xv = a.accelerationIncludingGravity.z || 0);
            a.acceleration && (c.$p = a.acceleration.x || 0, c.aq = a.acceleration.y || 0, c.bq = a.acceleration.z || 0)
        }, !1);
        this.Az && !this.b.jb && (jQuery(document).mousemove(function(a) {
            c.uy(a)
        }), jQuery(document).mousedown(function(a) {
            c.ty(a)
        }), jQuery(document).mouseup(function(a) {
            c.vy(a)
        }));
        !this.b.hh && this.b.Sc && navigator.accelerometer && navigator.accelerometer.watchAcceleration && navigator.accelerometer.watchAcceleration(f, null, {
            frequency: 40
        });
        this.b.sz(this)
    };
    g.gs = function(b) {
        if (b.pointerType !== b.MSPOINTER_TYPE_MOUSE && "mouse" !== b.pointerType) {
            b.preventDefault && b.preventDefault();
            var c = this.mi(b.pointerId),
                d = Xa();
            if (0 <= c) {
                var e = this.b.jb ? a : jQuery(this.b.canvas).offset(),
                    c = this.touches[c];
                2 > d - c.time || c.update(d, b.pageX - e.left, b.pageY - e.top, b.width || 0, b.height || 0, b.pressure || 0)
            }
        }
    };
    g.hs = function(b) {
        if (b.pointerType !== b.MSPOINTER_TYPE_MOUSE && "mouse" !== b.pointerType) {
            b.preventDefault && ob(b) && b.preventDefault();
            var c = this.b.jb ? a : jQuery(this.b.canvas).offset(),
                e = b.pageX - c.left,
                c = b.pageY - c.top;
            Xa();
            this.ue = this.touches.length;
            this.Uh = b.pointerId;
            this.touches.push(d(e, c, b.pointerId, this.ue));
            this.b.Tc = !0;
            this.b.trigger(Ac.prototype.e.Lp, this);
            this.b.trigger(Ac.prototype.e.Qp, this);
            this.Be = e;
            this.Ce = c;
            this.b.trigger(Ac.prototype.e.Lm, this);
            this.b.Tc = !1
        }
    };
    g.sl = function(a, b) {
        if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType) {
            a.preventDefault && ob(a) && a.preventDefault();
            var c = this.mi(a.pointerId);
            this.ue = 0 <= c ? this.touches[c].Aj : -1;
            this.Uh = 0 <= c ? this.touches[c].id : -1;
            this.b.Tc = !0;
            this.b.trigger(Ac.prototype.e.Kp, this);
            this.b.trigger(Ac.prototype.e.Pp, this);
            0 <= c && (b || this.touches[c].Pr(this, c), 100 > l.length && l.push(this.touches[c]), this.touches.splice(c, 1));
            this.b.Tc = !1
        }
    };
    g.ls = function(b) {
        b.preventDefault && b.preventDefault();
        var c = Xa(),
            d, e, g, f;
        d = 0;
        for (e = b.changedTouches.length; d < e; d++)
            if (g = b.changedTouches[d], f = this.mi(g.identifier), 0 <= f) {
                var h = this.b.jb ? a : jQuery(this.b.canvas).offset();
                f = this.touches[f];
                2 > c - f.time || f.update(c, g.pageX - h.left, g.pageY - h.top, 2 * (g.oB || g.wB || g.hB || g.kB || 0), 2 * (g.pB || g.xB || g.iB || g.lB || 0), g.aB || g.vB || g.gB || g.jB || 0)
            }
    };
    g.ms = function(b) {
        b.preventDefault && ob(b) && b.preventDefault();
        var c = this.b.jb ? a : jQuery(this.b.canvas).offset();
        Xa();
        this.b.Tc = !0;
        var e, g, f, h;
        e = 0;
        for (g = b.changedTouches.length; e < g; e++)
            if (f = b.changedTouches[e], h = this.mi(f.identifier), -1 === h) {
                h = f.pageX - c.left;
                var k = f.pageY - c.top;
                this.ue = this.touches.length;
                this.Uh = f.identifier;
                this.touches.push(d(h, k, f.identifier, this.ue));
                this.b.trigger(Ac.prototype.e.Lp, this);
                this.b.trigger(Ac.prototype.e.Qp, this);
                this.Be = h;
                this.Ce = k;
                this.b.trigger(Ac.prototype.e.Lm, this)
            }
        this.b.Tc = !1
    };
    g.Do = function(a, b) {
        a.preventDefault && ob(a) && a.preventDefault();
        this.b.Tc = !0;
        var c, d, e;
        c = 0;
        for (d = a.changedTouches.length; c < d; c++) e = a.changedTouches[c], e = this.mi(e.identifier), 0 <= e && (this.ue = this.touches[e].Aj, this.Uh = this.touches[e].id, this.b.trigger(Ac.prototype.e.Kp, this), this.b.trigger(Ac.prototype.e.Pp, this), b || this.touches[e].Pr(this, e), 100 > l.length && l.push(this.touches[e]), this.touches.splice(e, 1));
        this.b.Tc = !1
    };
    g.ei = function() {
        return this.b.Sc && 0 === this.xl && 0 !== e ? 90 * e : this.xl
    };
    g.ZA = function() {
        return this.b.Sc && 0 === this.yl && 0 !== t ? 90 * t : this.yl
    };
    g.$A = function() {
        return this.b.Sc && 0 === this.zl && 0 !== h ? 90 * h : this.zl
    };
    g.ty = function(a) {
        this.ms({
            changedTouches: [{
                pageX: a.pageX,
                pageY: a.pageY,
                identifier: 0
            }]
        });
        this.wo = !0
    };
    g.uy = function(a) {
        this.wo && this.ls({
            changedTouches: [{
                pageX: a.pageX,
                pageY: a.pageY,
                identifier: 0
            }]
        })
    };
    g.vy = function(a) {
        a.preventDefault && this.b.Vq && !this.b.$g && a.preventDefault();
        this.b.Vq = !0;
        this.Do({
            changedTouches: [{
                pageX: a.pageX,
                pageY: a.pageY,
                identifier: 0
            }]
        });
        this.wo = !1
    };
    g.Gj = function() {
        var a, b, c, d = Xa();
        a = 0;
        for (b = this.touches.length; a < b; ++a) c = this.touches[a], c.time <= d - 50 && (c.ho = d), c.iy(this, a)
    };
    k.prototype.Qp = function() {
        return !0
    };
    k.prototype.Pp = function() {
        return !0
    };
    k.prototype.Lm = function(a) {
        return a ? this.b.nm(a, this.Be, this.Ce) : !1
    };
    var M = [];
    k.prototype.$t = function(a) {
        if (!a) return !1;
        var b = a.ga(),
            c = b.Rc(),
            d, e, g, f, h, k;
        g = 0;
        for (f = c.length; g < f; g++) {
            var m = c[g];
            m.Ra();
            h = 0;
            for (k = this.touches.length; h < k; h++)
                if (e = this.touches[h], d = m.q.Ub(e.x, e.y, !0), e = m.q.Ub(e.x, e.y, !1), m.jc(d, e)) {
                    M.push(m);
                    break
                }
        }
        return M.length ? (b.xa = !1, Ca(b.d, M), a.sd(), y(M), !0) : !1
    };
    k.prototype.Lp = function(a) {
        a = Math.floor(a);
        return a === this.ue
    };
    k.prototype.Kp = function(a) {
        a = Math.floor(a);
        return a === this.ue
    };
    k.prototype.ru = function() {
        return !0
    };
    k.prototype.Np = function() {
        return !0
    };
    k.prototype.ou = function() {
        return !0
    };
    k.prototype.su = function(a) {
        return a ? this.b.nm(a, this.Be, this.Ce) : !1
    };
    k.prototype.Op = function(a) {
        return a ? this.b.nm(a, this.Be, this.Ce) : !1
    };
    k.prototype.pu = function(a) {
        return a ? this.b.nm(a, this.Be, this.Ce) : !1
    };
    m.e = new k;
    b.prototype.Zp = function(a, b) {
        var c = this.Wg;
        if (0 > c || c >= this.touches.length) a.G(0);
        else {
            var d, e, g, f, h;
            ha(b) ? (d = this.b.Vg(0), e = d.scale, g = d.Yd, f = d.Bd, h = d.j, d.scale = 1, d.Yd = 1, d.Bd = 1, d.j = 0, a.G(d.Ub(this.touches[c].x, this.touches[c].y, !0)), d.scale = e, d.Yd = g, d.Bd = f, d.j = h) : (d = ia(b) ? this.b.Vg(b) : this.b.Nk(b)) ? a.G(d.Ub(this.touches[c].x, this.touches[c].y, !0)) : a.G(0)
        }
    };
    b.prototype.Mm = function(a, b) {
        var c = this.Wg;
        if (0 > c || c >= this.touches.length) a.G(0);
        else {
            var d, e, g, f, h;
            ha(b) ? (d = this.b.Vg(0), e = d.scale, g = d.Yd, f = d.Cd, h = d.j, d.scale = 1, d.Yd = 1, d.Cd = 1, d.j = 0, a.G(d.Ub(this.touches[c].x, this.touches[c].y, !1)), d.scale = e, d.Yd = g, d.Cd = f, d.j = h) : (d = ia(b) ? this.b.Vg(b) : this.b.Nk(b)) ? a.G(d.Ub(this.touches[c].x, this.touches[c].y, !1)) : a.G(0)
        }
    };
    m.fa = new b
})();

function Bc(f) {
    this.b = f
}
(function() {
    function f() {}

    function d() {}

    function c() {}
    var k = Bc.prototype;
    k.qa = function(a) {
        this.Da = a;
        this.b = a.b
    };
    k.qa.prototype.P = function() {};
    k.ca = function(a) {
        this.type = a;
        this.b = a.b
    };
    var b = k.ca.prototype,
        m = "",
        g = "undefined" !== typeof window.is_scirra_arcade;
    g && (m = "arcade" + window.scirra_arcade_id);
    var a = !1;
    try {
        localStorage.getItem("test"), a = !0
    } catch (h) {
        a = !1
    }
    b.P = function() {
        a || ea("[Construct 2] Webstorage plugin: local storage is not supported on this platform.")
    };
    f.prototype.fu = function(b) {
        return a ? null != localStorage.getItem(m + b) : !1
    };
    f.prototype.Bu = function() {
        return !0
    };
    f.prototype.It = function(b, c, d) {
        if (!a) return !1;
        b = localStorage.getItem(m + b) || "";
        return gc(parseFloat(b), c, d)
    };
    k.e = new f;
    d.prototype.lv = function(b, c) {
        if (a) try {
            localStorage.setItem(m + b, c)
        } catch (d) {
            this.b.trigger(Bc.prototype.e.Bu, this)
        }
    };
    d.prototype.Gt = function() {
        a && (g || localStorage.clear())
    };
    k.A = new d;
    c.prototype.gu = function(b, c) {
        a ? b.Mb(localStorage.getItem(m + c) || "") : b.Mb("")
    };
    c.prototype.xp = function(b) {
        if (a) {
            var c = {},
                d, f, h;
            d = 0;
            for (f = localStorage.length; d < f; d++) h = localStorage.key(d), g ? h.substr(0, m.length) === m && (c[h.substr(m.length)] = localStorage.getItem(h)) : c[h] = localStorage.getItem(h);
            b.Mb(JSON.stringify({
                c2dictionary: !0,
                data: c
            }))
        } else b.Mb("")
    };
    k.fa = new c
})();

function Cc(f) {
    this.b = f
}
(function() {
    function f() {}

    function d() {}
    var c = Cc.prototype;
    c.qa = function(b) {
        this.behavior = b;
        this.b = b.b
    };
    c.qa.prototype.P = function() {};
    c.ca = function(b, c) {
        this.type = b;
        this.behavior = b.behavior;
        this.c = c;
        this.b = b.b
    };
    var k = c.ca.prototype;
    k.P = function() {
        this.te = this.qe = this.Nh = this.rl = this.wl = 0
    };
    k.Lb = function() {
        return {
            ontime: this.wl,
            offtime: this.rl,
            stage: this.Nh,
            stagetimeleft: this.qe,
            timeleft: this.te
        }
    };
    k.$b = function(b) {
        this.wl = b.ontime;
        this.rl = b.offtime;
        this.Nh = b.stage;
        this.qe = b.stagetimeleft;
        this.te = b.timeleft;
        null === this.te && (this.te = Infinity)
    };
    k.Wa = function() {
        if (!(0 >= this.te)) {
            var b = this.b.Zf(this.c);
            this.te -= b;
            0 >= this.te ? (this.te = 0, this.c.visible = !0, this.b.ra = !0, this.b.trigger(Cc.prototype.e.qu, this.c)) : (this.qe -= b, 0 >= this.qe && (0 === this.Nh ? (this.c.visible = !1, this.Nh = 1, this.qe += this.rl) : (this.c.visible = !0, this.Nh = 0, this.qe += this.wl), this.b.ra = !0))
        }
    };
    f.prototype.qu = function() {
        return !0
    };
    c.e = new f;
    d.prototype.Pt = function(b, c, d) {
        this.wl = b;
        this.rl = c;
        this.Nh = 1;
        this.qe = c;
        this.te = d;
        this.c.visible = !1;
        this.b.ra = !0
    };
    c.A = new d;
    c.fa = new function() {}
})();

function Dc(f) {
    this.b = f
}
(function() {
    function f() {}
    var d = Dc.prototype;
    d.qa = function(c) {
        this.behavior = c;
        this.b = c.b
    };
    d.qa.prototype.P = function() {};
    d.ca = function(c, b) {
        this.type = c;
        this.behavior = c.behavior;
        this.c = b;
        this.b = c.b
    };
    var c = d.ca.prototype;
    c.P = function() {
        this.Jb = null;
        this.Gl = -1;
        this.mode = this.jh = this.qm = this.uh = this.Pe = this.mj = 0;
        var c = this;
        this.ld || (this.Ur = function(b) {
            c.Co(b)
        });
        this.b.Om(this.Ur)
    };
    c.Lb = function() {
        return {
            uid: this.Jb ? this.Jb.uid : -1,
            pa: this.mj,
            pd: this.Pe,
            msa: this.uh,
            tsa: this.qm,
            lka: this.jh,
            m: this.mode
        }
    };
    c.$b = function(c) {
        this.Gl = c.uid;
        this.mj = c.pa;
        this.Pe = c.pd;
        this.uh = c.msa;
        this.qm = c.tsa;
        this.jh = c.lka;
        this.mode = c.m
    };
    c.Zd = function() {
        -1 === this.Gl ? this.Jb = null : this.Jb = this.b.qi(this.Gl);
        this.Gl = -1
    };
    c.Co = function(c) {
        this.Jb == c && (this.Jb = null)
    };
    c.tg = function() {
        this.Jb = null;
        this.b.Qy(this.Ur)
    };
    c.Wa = function() {};
    c.Gj = function() {
        if (this.Jb) {
            this.jh !== this.c.j && (this.uh = Ja(this.uh + (this.c.j - this.jh)));
            var c = this.c.x,
                b = this.c.y;
            if (3 === this.mode || 4 === this.mode) {
                var d = Sa(this.c.x, this.c.y, this.Jb.x, this.Jb.y);
                if (d > this.Pe || 4 === this.mode && d < this.Pe) b = Ma(this.Jb.x, this.Jb.y, this.c.x, this.c.y), c = this.Jb.x + Math.cos(b) * this.Pe, b = this.Jb.y + Math.sin(b) * this.Pe
            } else c = this.Jb.x + Math.cos(this.Jb.j + this.mj) * this.Pe, b = this.Jb.y + Math.sin(this.Jb.j + this.mj) * this.Pe;
            this.jh = d = Ja(this.uh + (this.Jb.j - this.qm));
            0 !== this.mode && 1 !== this.mode && 3 !== this.mode && 4 !== this.mode || this.c.x === c && this.c.y === b || (this.c.x = c, this.c.y = b, this.c.Ma());
            0 !== this.mode && 2 !== this.mode || this.c.j === d || (this.c.j = d, this.c.Ma())
        }
    };
    d.e = new function() {};
    f.prototype.Iu = function(c, b) {
        if (c) {
            var d = c.Bn(this.c);
            d && (this.Jb = d, this.mj = Ma(d.x, d.y, this.c.x, this.c.y) - d.j, this.Pe = Sa(d.x, d.y, this.c.x, this.c.y), this.jh = this.uh = this.c.j, this.qm = d.j, this.mode = b)
        }
    };
    d.A = new f;
    d.fa = new function() {}
})();

function Ec(f) {
    this.b = f
}
(function() {
    function f() {}

    function d() {}

    function c() {}
    var k = Ec.prototype;
    k.qa = function(a) {
        this.behavior = a;
        this.b = a.b
    };
    k.qa.prototype.P = function() {};
    k.ca = function(a, b) {
        this.type = a;
        this.behavior = a.behavior;
        this.c = b;
        this.b = a.b;
        this.C = 0
    };
    var b = k.ca.prototype,
        m = 2 * Math.PI,
        g = Math.PI / 2,
        a = 3 * Math.PI / 2;
    b.P = function() {
        this.u = 1 === this.D[0];
        this.rg = this.D[1];
        this.vp = this.D[2];
        this.le = this.D[3];
        this.le += Math.random() * this.D[4];
        0 === this.le ? this.C = 0 : (this.C = this.D[5] / this.le * m, this.C += Math.random() * this.D[6] / this.le * m);
        this.Rb = this.D[7];
        this.Rb += Math.random() * this.D[8];
        this.ne = this.eg = this.ua = 0;
        this.init()
    };
    b.Lb = function() {
        return {
            i: this.C,
            a: this.u,
            mv: this.rg,
            w: this.vp,
            p: this.le,
            mag: this.Rb,
            iv: this.ua,
            iv2: this.eg,
            r: this.ne,
            lkv: this.R,
            lkv2: this.ab
        }
    };
    b.$b = function(a) {
        this.C = a.i;
        this.u = a.a;
        this.rg = a.mv;
        this.vp = a.w;
        this.le = a.p;
        this.Rb = a.mag;
        this.ua = a.iv;
        this.eg = a.iv2 || 0;
        this.ne = a.r;
        this.R = a.lkv;
        this.ab = a.lkv2 || 0
    };
    b.init = function() {
        switch (this.rg) {
            case 0:
                this.ua = this.c.x;
                break;
            case 1:
                this.ua = this.c.y;
                break;
            case 2:
                this.ua = this.c.width;
                this.ne = this.c.height / this.c.width;
                break;
            case 3:
                this.ua = this.c.width;
                break;
            case 4:
                this.ua = this.c.height;
                break;
            case 5:
                this.ua = this.c.j;
                this.Rb = A(this.Rb);
                break;
            case 6:
                this.ua = this.c.opacity;
                break;
            case 7:
                this.ua = 0;
                break;
            case 8:
                this.ua = this.c.x, this.eg = this.c.y
        }
        this.R = this.ua;
        this.ab = this.eg
    };
    b.ve = function(b) {
        b = b % m;
        switch (this.vp) {
            case 0:
                return Math.sin(b);
            case 1:
                return b <= g ? b / g : b <= a ? 1 - 2 * (b - g) / Math.PI : (b - a) / g - 1;
            case 2:
                return 2 * b / m - 1;
            case 3:
                return -2 * b / m + 1;
            case 4:
                return b < Math.PI ? -1 : 1
        }
        return 0
    };
    b.Wa = function() {
        var a = this.b.Zf(this.c);
        this.u && 0 !== a && (0 === this.le ? this.C = 0 : (this.C += a / this.le * m, this.C = this.C % m), this.xz())
    };
    b.xz = function() {
        switch (this.rg) {
            case 0:
                this.c.x !== this.R && (this.ua += this.c.x - this.R);
                this.c.x = this.ua + this.ve(this.C) * this.Rb;
                this.R = this.c.x;
                break;
            case 1:
                this.c.y !== this.R && (this.ua += this.c.y - this.R);
                this.c.y = this.ua + this.ve(this.C) * this.Rb;
                this.R = this.c.y;
                break;
            case 2:
                this.c.width = this.ua + this.ve(this.C) * this.Rb;
                this.c.height = this.c.width * this.ne;
                break;
            case 3:
                this.c.width = this.ua + this.ve(this.C) * this.Rb;
                break;
            case 4:
                this.c.height = this.ua + this.ve(this.C) * this.Rb;
                break;
            case 5:
                this.c.j !== this.R && (this.ua = Ja(this.ua + (this.c.j - this.R)));
                this.c.j = Ja(this.ua + this.ve(this.C) * this.Rb);
                this.R = this.c.j;
                break;
            case 6:
                this.c.opacity = this.ua + this.ve(this.C) * this.Rb / 100;
                0 > this.c.opacity ? this.c.opacity = 0 : 1 < this.c.opacity && (this.c.opacity = 1);
                break;
            case 8:
                this.c.x !== this.R && (this.ua += this.c.x - this.R), this.c.y !== this.ab && (this.eg += this.c.y - this.ab), this.c.x = this.ua + Math.cos(this.c.j) * this.ve(this.C) * this.Rb, this.c.y = this.eg + Math.sin(this.c.j) * this.ve(this.C) * this.Rb, this.R = this.c.x, this.ab = this.c.y
        }
        this.c.Ma()
    };
    b.ks = function(a, b) {
        switch (this.rg) {
            case 2:
                this.ua *= b.width / a.width;
                this.ne = b.height / b.width;
                break;
            case 3:
                this.ua *= b.width / a.width;
                break;
            case 4:
                this.ua *= b.height / a.height
        }
    };
    f.prototype.Cp = function() {
        return this.u
    };
    k.e = new f;
    d.prototype.Ku = function(a) {
        this.u = 1 === a
    };
    d.prototype.Uu = function(a) {
        this.le = a
    };
    d.prototype.Qu = function(a) {
        this.Rb = a;
        5 === this.rg && (this.Rb = A(this.Rb))
    };
    k.A = new d;
    c.prototype.Yp = function(a) {
        a.G(this.ve(this.C) * this.Rb)
    };
    k.fa = new c
})();
var Fc = [],
    Gc = [],
    Hc = [],
    Ic = [],
    Jc = [],
    Kc = [],
    Lc = [],
    Mc = [],
    Nc = [],
    Oc = [];

function Pc(f) {
    return result = (f /= 1) < 1 / 2.75 ? 7.5625 * f * f + 0 : f < 2 / 2.75 ? 1 * (7.5625 * (f -= 1.5 / 2.75) * f + .75) + 0 : f < 2.5 / 2.75 ? 1 * (7.5625 * (f -= 2.25 / 2.75) * f + .9375) + 0 : 1 * (7.5625 * (f -= 2.625 / 2.75) * f + .984375) + 0
}

function Qc(f, d) {
    return Math.round(f / d * 1E4)
}

function Rc(f, d, c, k, b) {
    var m = 0;
    switch (f) {
        case 0:
            m = 1 * d / c + 0;
            break;
        case 1:
            m = 1 * (d /= c) * d + 0;
            break;
        case 2:
            m = -1 * (d /= c) * (d - 2) + 0;
            break;
        case 3:
            m = 1 > (d /= c / 2) ? .5 * d * d + 0 : -.5 * (--d * (d - 2) - 1) + 0;
            break;
        case 4:
            m = 1 * (d /= c) * d * d + 0;
            break;
        case 5:
            m = 1 * ((d = d / c - 1) * d * d + 1) + 0;
            break;
        case 6:
            m = 1 > (d /= c / 2) ? .5 * d * d * d + 0 : .5 * ((d -= 2) * d * d + 2) + 0;
            break;
        case 7:
            m = 1 * (d /= c) * d * d * d + 0;
            break;
        case 8:
            m = -1 * ((d = d / c - 1) * d * d * d - 1) + 0;
            break;
        case 9:
            m = 1 > (d /= c / 2) ? .5 * d * d * d * d + 0 : -.5 * ((d -= 2) * d * d * d - 2) + 0;
            break;
        case 10:
            m = 1 * (d /= c) * d * d * d * d + 0;
            break;
        case 11:
            m = 1 * ((d = d / c - 1) * d * d * d * d + 1) + 0;
            break;
        case 12:
            m = 1 > (d /= c / 2) ? .5 * d * d * d * d * d + 0 : .5 * ((d -= 2) * d * d * d * d + 2) + 0;
            break;
        case 13:
            b.Wc ? m = Jc[Qc(d, c)] : m = -(Math.sqrt(1 - d * d) - 1);
            break;
        case 14:
            b.Wc ? m = Kc[Qc(d, c)] : m = Math.sqrt(1 - (d - 1) * (d - 1));
            break;
        case 15:
            m = b.Wc ? Lc[Qc(d, c)] : 1 > (d /= c / 2) ? -.5 * (Math.sqrt(1 - d * d) - 1) + 0 : .5 * (Math.sqrt(1 - (d -= 2) * d) + 1) + 0;
            break;
        case 16:
            b.Wc ? m = Mc[Qc(d, c)] : (b = b.Kc, m = 1 * (d /= c) * d * ((b + 1) * d - b) + 0);
            break;
        case 17:
            b.Wc ? m = Nc[Qc(d, c)] : (b = b.Kc, m = 1 * ((d = d / c - 1) * d * ((b + 1) * d + b) + 1) + 0);
            break;
        case 18:
            b.Wc ? m = Oc[Qc(d, c)] : (b = b.Kc, m = 1 > (d /= c / 2) ? .5 * d * d * (((b *= 1.525) + 1) * d - b) + 0 : .5 * ((d -= 2) * d * (((b *= 1.525) + 1) * d + b) + 2) + 0);
            break;
        case 19:
            b.Wc ? m = Gc[Qc(d, c)] : (m = b.Jg, f = b.Al, d /= c, 0 == f && (f = .3 * c), 0 == m || m < Math.abs(1) ? (m = 1, b = f / 4) : b = f / (2 * Math.PI) * Math.asin(1 / m), m = -(m * Math.pow(2, 10 * --d) * Math.sin(2 * (d * c - b) * Math.PI / f)) + 0);
            break;
        case 20:
            b.Wc ? m = Hc[Qc(d, c)] : (m = b.Jg, f = b.Al, d /= c, 0 == f && (f = .3 * c), 0 == m || m < Math.abs(1) ? (m = 1, b = f / 4) : b = f / (2 * Math.PI) * Math.asin(1 / m), m = m * Math.pow(2, -10 * d) * Math.sin(2 * (d * c - b) * Math.PI / f) + 1);
            break;
        case 21:
            b.Wc ? m = Ic[Qc(d, c)] : (m = b.Jg, f = b.Al, d /= c / 2, 0 == f && (f = .3 * c * 1.5), 0 == m || m < Math.abs(1) ? (m = 1, b = f / 4) : b = f / (2 * Math.PI) * Math.asin(1 / m), m = 1 > d ? -.5 * m * Math.pow(2, 10 * --d) * Math.sin(2 * (d * c - b) * Math.PI / f) + 0 : m * Math.pow(2, -10 * --d) * Math.sin(2 * (d * c - b) * Math.PI / f) * .5 + 1);
            break;
        case 22:
            m = b.Wc ? 1 - Fc[Qc(c - d, c)] + 0 : 1 - Pc(c - d / c) + 0;
            break;
        case 23:
            m = b.Wc ? Fc[Qc(d, c)] : Pc(d / c);
            break;
        case 24:
            m = b.Wc ? d < c / 2 ? .5 * (1 - Fc[Qc(c - 2 * d, c)] + 0) + 0 : .5 * Fc[Qc(2 * d - c, c)] + .5 : d < c / 2 ? .5 * (1 - Pc(c - 2 * d) + 0) + 0 : .5 * Pc((2 * d - c) / c) + .5;
            break;
        case 25:
            d = d / c / 2;
            m = 2 * d * d * (3 - 2 * d);
            break;
        case 26:
            d = (d / c + 1) / 2;
            m = 2 * d * d * (3 - 2 * d) - 1;
            break;
        case 27:
            d =
                d / c, m = d * d * (3 - 2 * d)
    }
    return k ? 1 - m : m
}
for (var Vc = 0, Wc = 0, Xc = 0, W = 0, X = 0, Yc = 0; 1E4 >= Yc; Yc++) W = Yc / 1E4, Vc = (W /= 1) < 1 / 2.75 ? 7.5625 * W * W + 0 : W < 2 / 2.75 ? 1 * (7.5625 * (W -= 1.5 / 2.75) * W + .75) + 0 : W < 2.5 / 2.75 ? 1 * (7.5625 * (W -= 2.25 / 2.75) * W + .9375) + 0 : 1 * (7.5625 * (W -= 2.625 / 2.75) * W + .984375) + 0, Fc[Yc] = Vc, W = Yc / 1E4, Xc = Wc = 0, W /= 1, 0 == Xc && (Xc = .3), 0 == Wc || Wc < Math.abs(1) ? (Wc = 1, X = Xc / 4) : X = Xc / (2 * Math.PI) * Math.asin(1 / Wc), Vc = -(Wc * Math.pow(2, 10 * --W) * Math.sin(2 * (1 * W - X) * Math.PI / Xc)) + 0, Gc[Yc] = Vc, W = Yc / 1E4, Xc = Wc = 0, W /= 1, 0 == Xc && (Xc = .3), 0 == Wc || Wc < Math.abs(1) ? (Wc = 1, X = Xc / 4) : X = Xc / (2 * Math.PI) * Math.asin(1 /
    Wc), Vc = Wc * Math.pow(2, -10 * W) * Math.sin(2 * (1 * W - X) * Math.PI / Xc) + 1, Hc[Yc] = Vc, W = Yc / 1E4, Xc = Wc = 0, W /= .5, 0 == Xc && (Xc = .3 * 1.5), 0 == Wc || Wc < Math.abs(1) ? (Wc = 1, X = Xc / 4) : X = Xc / (2 * Math.PI) * Math.asin(1 / Wc), Vc = 1 > W ? -.5 * Wc * Math.pow(2, 10 * --W) * Math.sin(2 * (1 * W - X) * Math.PI / Xc) + 0 : Wc * Math.pow(2, -10 * --W) * Math.sin(2 * (1 * W - X) * Math.PI / Xc) * .5 + 1, Ic[Yc] = Vc, W = Yc / 1E4, Jc[Yc] = -(Math.sqrt(1 - W * W) - 1), W = Yc / 1E4, Kc[Yc] = Math.sqrt(1 - (W - 1) * (W - 1)), W = Yc / 1E4, Vc = 1 > (W /= .5) ? -.5 * (Math.sqrt(1 - W * W) - 1) + 0 : .5 * (Math.sqrt(1 - (W -= 2) * W) + 1) + 0, Lc[Yc] = Vc, W = Yc / 1E4, X = 0, 0 == X && (X = 1.70158), Vc = 1 * (W /= 1) * W * ((X + 1) * W - X) + 0, Mc[Yc] = Vc, W = Yc / 1E4, X = 0, 0 == X && (X = 1.70158), Vc = 1 * ((W = W / 1 - 1) * W * ((X + 1) * W + X) + 1) + 0, Nc[Yc] = Vc, W = Yc / 1E4, X = 0, 0 == X && (X = 1.70158), Vc = 1 > (W /= .5) ? .5 * W * W * (((X *= 1.525) + 1) * W - X) + 0 : .5 * ((W -= 2) * W * (((X *= 1.525) + 1) * W + X) + 2) + 0, Oc[Yc] = Vc;

function Zc(f, d, c, k, b, m, g) {
    this.name = f;
    this.value = 0;
    this.Hh(k);
    this.am(b);
    this.Uf = c;
    this.n = d;
    this.duration = m;
    this.state = this.la = 0;
    this.tl = this.ul = this.Pd = this.yh = !1;
    this.ab = this.R = 0;
    this.nc = g;
    this.Qe = 1;
    this.ni = !1;
    this.$c = [];
    this.qr = 1;
    for (f = 0; 28 > f; f++) this.$c[f] = {}, this.$c[f].Jg = 0, this.$c[f].Al = 0, this.$c[f].Ph = 0, this.$c[f].Kc = 0, this.$c[f].Wc = !0
}
Zc.prototype = {};
Zc.prototype.Hh = function(f) {
    this.za = parseFloat(f.split(",")[0]);
    this.qb = parseFloat(f.split(",")[1]);
    this.ab = this.R = 0
};
Zc.prototype.am = function(f) {
    this.ya = parseFloat(f.split(",")[0]);
    this.gb = parseFloat(f.split(",")[1]);
    isNaN(this.gb) && (this.gb = this.ya)
};
Zc.prototype.Km = function(f) {
    if (0 === this.state) return -1;
    1 === this.state && (this.la += f);
    2 === this.state && (this.la -= f);
    3 === this.state && (this.state = 0);
    if (4 === this.state || 6 === this.state) this.la += f * this.Qe;
    5 === this.state && (this.la += f * this.Qe);
    return 0 > this.la ? (this.la = 0, 4 === this.state ? this.Qe = 1 : 6 === this.state ? (this.Qe = 1, this.ni = !1) : this.state = 0, this.tl = !0, 0) : this.la > this.duration ? (this.la = this.duration, 4 === this.state ? this.Qe = -1 : 6 === this.state ? (this.Qe = -1, this.ni = !0) : 5 === this.state ? this.la = 0 : this.state = 0, this.Pd = !0, 1) : this.ni ? Rc(this.Uf, this.duration - this.la, this.duration, this.ni, this.$c[this.Uf]) : Rc(this.Uf, this.la, this.duration, this.ni, this.$c[this.Uf])
};

function $c(f) {
    return f.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
}

function ad(f) {
    this.b = f
}
(function() {
    var f = ad.prototype;
    f.qa = function(c) {
        this.behavior = c;
        this.b = c.b
    };
    f.qa.prototype.P = function() {};
    f.ca = function(c, d) {
        this.type = c;
        this.behavior = c.behavior;
        this.c = d;
        this.b = c.b;
        this.C = 0
    };
    var d = f.ca.prototype;
    d.P = function() {
        this.L = this.D[0];
        this.u = 1 == this.L || 2 == this.L || 3 == this.L || 4 == this.L;
        this.n = this.D[1];
        this.Fe = this.D[2];
        this.target = this.D[3];
        this.mm = this.D[4];
        this.zm = !1;
        1 === this.mm && (this.target = "relative(" + this.target + ")");
        this.duration = this.D[5];
        this.nc = 1 === this.D[6];
        this.value = 0;
        this.I = {};
        this.gq(this.n, this.Fe, "current", this.target, this.duration, this.nc);
        1 === this.D[0] && this.zj(0);
        2 === this.D[0] && this.zj(2);
        3 === this.D[0] && this.zj(3);
        4 === this.D[0] && this.zj(4)
    };
    d.je = function(c, d) {
        void 0 === d && (d = "current");
        var b = $c(d);
        d = $c(d);
        var f = this.value;
        if ("current" === d) switch (c) {
            case 0:
                b = this.c.x + "," + this.c.y;
                break;
            case 1:
                b = this.c.width + "," + this.c.height;
                break;
            case 2:
                b = this.c.width + "," + this.c.height;
                break;
            case 3:
                b = this.c.width + "," + this.c.height;
                break;
            case 4:
                b = Ha(this.c.j) + "," + Ha(this.c.j);
                break;
            case 5:
                b = 100 * this.c.opacity + "," + 100 * this.c.opacity;
                break;
            case 6:
                b = f + "," + f;
                break;
            case 7:
                b = this.c.x + "," + this.c.y;
                break;
            case 8:
                b = this.c.x + "," + this.c.y;
                break;
            case 9:
                b = void 0 !== this.c.Za ? this.c.width / this.c.Za.width + "," + this.c.height / this.c.Za.height : "1,1"
        }
        if ("relative" === d.substring(0, 8)) {
            var g = d.match(/\((.*?)\)/);
            if (g) var a = parseFloat(g[1].split(",")[0]),
                h = parseFloat(g[1].split(",")[1]);
            isNaN(a) && (a = 0);
            isNaN(h) && (h = 0);
            switch (c) {
                case 0:
                    b = this.c.x + a + "," + (this.c.y + h);
                    break;
                case 1:
                    b = this.c.width + a + "," +
                        (this.c.height + h);
                    break;
                case 2:
                    b = this.c.width + a + "," + (this.c.height + h);
                    break;
                case 3:
                    b = this.c.width + a + "," + (this.c.height + h);
                    break;
                case 4:
                    b = Ha(this.c.j) + a + "," + (Ha(this.c.j) + h);
                    break;
                case 5:
                    b = 100 * this.c.opacity + a + "," + (100 * this.c.opacity + h);
                    break;
                case 6:
                    b = f + a + "," + f + a;
                    break;
                case 7:
                    b = this.c.x + a + "," + this.c.y;
                    break;
                case 8:
                    b = this.c.x + "," + (this.c.y + a);
                    break;
                case 9:
                    b = a + "," + h
            }
        }
        return b
    };
    d.gq = function(c, d, b, f, g, a) {
        b = this.je(c, b);
        f = this.je(c, f);
        void 0 !== this.I["default"] && delete this.I["default"];
        this.I["default"] = new Zc("default", c, d, b, f, g, a);
        this.I["default"].Ee = 0
    };
    d.Lb = function() {
        JSON.stringify(this.I["default"]);
        return {
            playmode: this.L,
            active: this.u,
            tweened: this.n,
            easing: this.Fe,
            target: this.target,
            targetmode: this.mm,
            useCurrent: this.zm,
            duration: this.duration,
            enforce: this.nc,
            value: this.value,
            tweenlist: JSON.stringify(this.I["default"])
        }
    };
    Zc.du = function(c, d, b, f, g, a, h, t) {
        d = new Zc(d, b, f, g, a, h, t);
        for (var e in c) d[e] = c[e];
        return d
    };
    d.$b = function(c) {
        var d = JSON.parse(c.tweenlist),
            d = Zc.du(d, d.name, d.n, d.Uf, d.za + "," +
                d.qb, d.ya + "," + d.gb, d.duration, d.nc);
        this.I["default"] = d;
        this.L = c.playmode;
        this.u = c.active;
        this.rg = c.tweened;
        this.Fe = c.easing;
        this.target = c.target;
        this.mm = c.targetmode;
        this.zm = c.useCurrent;
        this.duration = c.duration;
        this.nc = c.enforce;
        this.value = c.value
    };
    d.iz = function(c) {
        1 < c && (c = 1);
        0 > c && (c = 0);
        for (var d in this.I) {
            var b = this.I[d];
            b.R = 0;
            b.ab = 0;
            b.state = 3;
            b.la = c * b.duration;
            var f = b.Km(0);
            this.pp(b, f)
        }
    };
    d.zj = function(c) {
        for (var d in this.I) {
            var b = this.I[d];
            if (this.zm) {
                var f = this.je(b.n, "current"),
                    g = this.je(b.n, this.target);
                b.Hh(f);
                b.am(g)
            }
            0 === c && (b.la = 1E-6, b.R = 0, b.ab = 0, b.yh = !0, b.state = 1);
            1 === c && (b.state = b.qr);
            if (2 === c || 4 === c) b.la = 1E-6, b.R = 0, b.ab = 0, b.yh = !0, 2 == c && (b.state = 4), 4 == c && (b.state = 6);
            3 === c && (b.la = 1E-6, b.R = 0, b.ab = 0, b.yh = !0, b.state = 5)
        }
    };
    d.qz = function(c) {
        for (var d in this.I) {
            var b = this.I[d];
            3 != b.state && 0 != b.state && (b.qr = b.state);
            1 === c && (b.la = 0);
            2 === c && (b.la = b.duration);
            b.state = 3;
            var f = b.Km(0);
            this.pp(b, f)
        }
    };
    d.Wy = function(c) {
        for (var d in this.I) {
            var b = this.I[d];
            1 === c && (b.la = b.duration, b.R = 0, b.ab = 0, b.ul = !0);
            b.state = 2
        }
    };
    d.pp = function(c, d) {
        if (0 === c.n) c.nc ? (this.c.x = c.za + (c.ya - c.za) * d, this.c.y = c.qb + (c.gb - c.qb) * d) : (this.c.x += (c.ya - c.za) * d - c.R, this.c.y += (c.gb - c.qb) * d - c.ab, c.R = (c.ya - c.za) * d, c.ab = (c.gb - c.qb) * d);
        else if (1 === c.n) c.nc ? (this.c.width = c.za + (c.ya - c.za) * d, this.c.height = c.qb + (c.gb - c.qb) * d) : (this.c.width += (c.ya - c.za) * d - c.R, this.c.height += (c.gb - c.qb) * d - c.ab, c.R = (c.ya - c.za) * d, c.ab = (c.gb - c.qb) * d);
        else if (2 === c.n) c.nc ? this.c.width = c.za + (c.ya - c.za) * d : (this.c.width += (c.ya - c.za) * d - c.R, c.R = (c.ya - c.za) * d);
        else if (3 === c.n) c.nc ? this.c.height = c.qb + (c.gb - c.qb) * d : (this.c.height += (c.gb - c.qb) * d - c.ab, c.ab = (c.gb - c.qb) * d);
        else if (4 === c.n)
            if (c.nc) {
                var b = c.za + (c.ya - c.za) * d;
                this.c.j = Ja(A(b))
            } else b = (c.ya - c.za) * d - c.R, this.c.j = Ja(this.c.j + A(b)), c.R = (c.ya - c.za) * d;
        else if (5 === c.n) c.nc ? this.c.opacity = (c.za + (c.ya - c.za) * d) / 100 : (this.c.opacity += ((c.ya - c.za) * d - c.R) / 100, c.R = (c.ya - c.za) * d);
        else if (6 === c.n) c.nc ? this.value = c.za + (c.ya - c.za) * d : (this.value += (c.ya - c.za) * d - c.R, c.R = (c.ya - c.za) * d);
        else if (7 === c.n) c.nc ? this.c.x = c.za +
            (c.ya - c.za) * d : (this.c.x += (c.ya - c.za) * d - c.R, c.R = (c.ya - c.za) * d);
        else if (8 === c.n) c.nc ? this.c.y = c.qb + (c.gb - c.qb) * d : (this.c.y += (c.gb - c.qb) * d - c.ab, c.ab = (c.gb - c.qb) * d);
        else if (9 === c.n) {
            var b = c.za + (c.ya - c.za) * d,
                f = c.qb + (c.gb - c.qb) * d;
            0 > this.c.width && (b = c.za + (c.ya + c.za) * -d);
            0 > this.c.height && (f = c.qb + (c.gb + c.qb) * -d);
            c.nc ? (this.c.width = this.c.Za.width * b, this.c.height = this.c.Za.height * f) : (0 > this.c.width ? (this.c.width = this.c.width / (-1 + c.R) * b, c.R = b + 1) : (this.c.width = this.c.width / (1 + c.R) * b, c.R = b - 1), 0 > this.c.height ? (this.c.height = this.c.height / (-1 + c.ab) * f, c.ab = f + 1) : (this.c.height = this.c.height / (1 + c.ab) * f, c.ab = f - 1))
        }
        this.c.Ma()
    };
    d.Wa = function() {
        var c = this.b.Zf(this.c),
            d = this.I["default"];
        0 !== d.state && (d.yh && (this.b.trigger(ad.prototype.e.Jm, this.c), d.yh = !1), d.ul && (this.b.trigger(ad.prototype.e.Eu, this.c), d.ul = !1), this.u = 1 == d.state || 2 == d.state || 4 == d.state || 5 == d.state || 6 == d.state, c = d.Km(c), this.pp(d, c), d.Pd && (this.b.trigger(ad.prototype.e.Hm, this.c), d.Pd = !1), d.tl && (this.b.trigger(ad.prototype.e.Du, this.c), d.tl = !1))
    };
    f.e = {};
    d = f.e;
    d.Cp = function() {
        return 0 !== this.I["default"].state
    };
    d.aA = function() {
        return 2 == this.I["default"].state
    };
    d.Jt = function(c, d) {
        var b = this.I["default"];
        return gc(b.la / b.duration, c, d)
    };
    d.jA = function(c, d) {
        var b = this.I["default"];
        this.Fj = gc(b.la / b.duration, c, d);
        if (b = this.Bo != this.Fj && this.Fj) this.Bo = this.Fj;
        return b
    };
    d.Jm = function() {
        return void 0 === this.I["default"] ? !1 : this.I["default"].yh
    };
    d.Eu = function() {
        return void 0 === this.I["default"] ? !1 : this.I["default"].ul
    };
    d.Hm = function() {
        return void 0 === this.I["default"] ? !1 : this.I["default"].Pd
    };
    d.Du = function() {
        return void 0 === this.I["default"] ? !1 : this.I["default"].tl
    };
    f.A = {};
    d = f.A;
    d.Xj = function(c, d) {
        this.Bo = this.Fj = !1;
        this.zm = 1 == d;
        this.zj(c)
    };
    d.Yj = function(c) {
        this.qz(c)
    };
    d.Wj = function(c) {
        this.Bo = this.Fj = !1;
        this.Wy(c)
    };
    d.sA = function(c) {
        this.iz(c)
    };
    d.Rp = function(c) {
        isNaN(c) || 0 > c || void 0 === this.I["default"] || (this.I["default"].duration = c)
    };
    d.EA = function(c) {
        void 0 !== this.I["default"] && (this.I["default"].nc = 1 === c)
    };
    d.Tp = function(c) {
        void 0 !== this.I["default"] && (c = this.je(this.I["default"].n, c), this.I["default"].Hh(c))
    };
    d.Wp = function(c, d, b) {
        if (void 0 !== this.I["default"] && !isNaN(b)) {
            var f = this.I["default"],
                g = b + "";
            this.mm = d;
            var a = "",
                h = "";
            if (1 === d) {
                this.target = "relative(" + g + ")";
                switch (c) {
                    case 0:
                        a = this.c.x + b;
                        h = f.gb;
                        break;
                    case 1:
                        a = f.ya;
                        h = this.c.y + b;
                        break;
                    case 2:
                        h = a = "" + Ha(this.c.j + A(b));
                        break;
                    case 3:
                        h = a = "" + 100 * this.c.opacity + b;
                        break;
                    case 4:
                        a = this.c.width + b;
                        h = f.gb;
                        break;
                    case 5:
                        a = f.ya;
                        h = this.c.height + b;
                        break;
                    case 6:
                        h = a = b
                }
                g = a + "," + h
            } else {
                switch (c) {
                    case 0:
                        a = b;
                        h = f.gb;
                        break;
                    case 1:
                        a = f.ya;
                        h = b;
                        break;
                    case 2:
                        h = a = b;
                        break;
                    case 3:
                        h = a = b;
                        break;
                    case 4:
                        a = b;
                        h = f.gb;
                        break;
                    case 5:
                        a = f.ya;
                        h = b;
                        break;
                    case 6:
                        h = a = b
                }
                this.target = g = a + "," + h
            }
            c = this.je(this.I["default"].n, "current");
            g = this.je(this.I["default"].n, g);
            f.Hh(c);
            f.am(g)
        }
    };
    d.Yu = function(c) {
        void 0 !== this.I["default"] && (this.I["default"].n = c)
    };
    d.Sp = function(c) {
        void 0 !== this.I["default"] && (this.I["default"].Uf = c)
    };
    d.BA = function(c, d, b, f, g) {
        void 0 !== this.I["default"] && (this.I["default"].$c[c].Wc = !1, this.I["default"].$c[c].Jg = d, this.I["default"].$c[c].Al = b, this.I["default"].$c[c].Ph = f, this.I["default"].$c[c].Kc = g)
    };
    d.tA = function() {
        void 0 !== this.I["default"] && (this.I["default"].Wc = !0)
    };
    d.Zu = function(c) {
        var d = this.I["default"];
        this.value = c;
        6 === d.n && d.Hh(this.je(d.n, "current"))
    };
    d.Tu = function(c, d, b, f, g) {
        if (void 0 === this.I["default"]) this.gq(c, d, initial, b, f, g);
        else {
            var a = this.I["default"];
            a.n = c;
            a.Uf = d;
            a.Hh(this.je(c, "current"));
            a.am(this.je(c, b));
            a.duration = f;
            a.nc = 1 === g
        }
    };
    f.fa = {};
    f = f.fa;
    f.QA = function(c) {
        var d = "N/A";
        switch (this.I["default"].state) {
            case 0:
                d = "paused";
                break;
            case 1:
                d = "playing";
                break;
            case 2:
                d = "reversing";
                break;
            case 3:
                d = "seeking"
        }
        c.Mb(d)
    };
    f.Ju = function(c) {
        c.G(this.I["default"].la / this.I["default"].duration)
    };
    f.Ap = function(c) {
        c.G(this.I["default"].duration)
    };
    f.ov = function(c) {
        var d = this.I["default"],
            b = "N/A";
        switch (d.n) {
            case 0:
                b = d.ya;
                break;
            case 1:
                b = d.gb;
                break;
            case 2:
                b = d.ya;
                break;
            case 3:
                b = d.ya;
                break;
            case 4:
                b = d.ya;
                break;
            case 5:
                b = d.gb;
                break;
            case 6:
                b = d.ya
        }
        c.G(b)
    };
    f.Yp = function(c) {
        c.G(this.value)
    };
    f.UA = function(c, d, b, f, g) {
        f = 1 < f ? 1 : f;
        g = Rc(g, 0 > f ? 0 : f, 1, !1, !1);
        c.G(d + g * (b - d))
    }
})();

function $c(f) {
    return f.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
}

function bd(f) {
    this.b = f
}
(function() {
    function f(b, c) {
        return (b /= c) < 1 / 2.75 ? 7.5625 * b * b + 0 : b < 2 / 2.75 ? 1 * (7.5625 * (b -= 1.5 / 2.75) * b + .75) + 0 : b < 2.5 / 2.75 ? 1 * (7.5625 * (b -= 2.25 / 2.75) * b + .9375) + 0 : 1 * (7.5625 * (b -= 2.625 / 2.75) * b + .984375) + 0
    }
    var d = bd.prototype;
    d.qa = function(b) {
        this.behavior = b;
        this.b = b.b
    };
    d.qa.prototype.P = function() {};
    d.ca = function(b, c) {
        this.type = b;
        this.behavior = b.behavior;
        this.c = c;
        this.b = b.b;
        this.C = 0
    };
    var c = d.ca.prototype;
    c.ei = function(b) {
        1 < b && (b = 1);
        hc[this.group] = -1;
        hc[this.group] = b;
        hc[this.group] >= b && (hc[this.group] = b)
    };
    c.Tq = function() {
        "" != this.group && ("undefined" === typeof ic && (ic = {}, hc = {}), "undefined" === typeof ic[this.group] && (ic[this.group] = [], hc[this.group] = -1), -1 == ic[this.group].indexOf(this) && ic[this.group].push(this))
    };
    c.Cf = function() {
        this.od = this.c.width;
        this.nd = this.c.height;
        this.Vh = this.c.j;
        this.lt = this.c.opacity;
        this.Hf = this.c.x;
        this.If = this.c.y;
        this.wm = this.value
    };
    c.P = function() {
        this.u = 1 === this.D[0];
        this.n = this.D[1];
        this.Fe = this.D[2];
        this.B = this.D[3];
        this.target = this.D[4];
        this.duration = this.D[5];
        this.Dg = this.D[6];
        this.L = this.D[7];
        this.value = this.D[8];
        this.kc = this.D[9];
        this.tn = 1 === this.D[10];
        this.group = this.D[11];
        this.zc = null;
        this.Gc = 0;
        5 == this.L && (this.Gc = 1);
        this.Tq();
        this.fg = !1;
        this.Z = this.c.x;
        this.pb = this.c.y;
        this.aa = parseFloat(this.target.split(",")[0]);
        this.lb = parseFloat(this.target.split(",")[1]);
        this.Cf();
        this.Wh = this.gc = this.Ja = this.mb = this.ea = 0;
        this.ne = this.c.height / this.c.width;
        this.Tl = this.reverse = !1;
        this.Md = this.Ld = !0;
        this.loop = !1;
        this.Sa = this.Ha = 0;
        this.fo = this.L;
        this.Fc = this.R = this.ea;
        this.gd = this.mb;
        this.tn && this.init();
        "" == this.B && (this.B = "current");
        this.dj = this.xh = this.ej = this.Pd = this.jj = this.Ah = this.ij = this.zh = !1;
        this.u && this.init()
    };
    c.init = function() {
        this.zh = !1;
        "" === this.B && (this.B = "current");
        "" === this.target && (this.target = "current");
        var b = "current" === this.B,
            c = "current" === this.target,
            d = "OBJ" === this.target;
        "OBJ" === this.target && null != this.zc && (0 == this.n ? this.target = 1 == this.kc ? this.zc.x - this.c.x + "," + (this.zc.y - this.c.y) : this.zc.x + "," + this.zc.y : 1 == this.n || 2 == this.n || 3 == this.n || 7 == this.n ? this.target = 1 == this.kc ? (2 == this.n ? 1 : this.zc.width) + "," + (3 == this.n ? 1 : this.zc.height) : (2 == this.n ? 1 : this.zc.width / this.od) + "," + (3 == this.n ? 1 : this.zc.height / this.nd) : 4 == this.n ? this.target = 1 == this.kc ? Ha(this.zc.j - this.c.j) + "" : Ha(this.zc.j) + "" : 5 == this.n && (this.target = 1 == this.kc ? 100 * (this.zc.opacity - this.c.opacity) + "" : 100 * this.zc.opacity + ""));
        if (0 == this.n) c && (this.target = this.c.x + "," + this.c.y), b ? this.B = 1 == this.kc ? this.c.x + "," + this.c.y : this.Hf + "," + this.If : this.reverse || 1 == this.L || (this.c.x = parseFloat(this.B.split(",")[0]), this.c.y = parseFloat(this.B.split(",")[1])), 1 == this.kc ? (this.loop && (this.c.x = this.Hf, this.c.y = this.If), this.Z = this.c.x, this.pb = this.c.y, this.reverse ? (this.aa = -parseFloat(this.target.split(",")[0]), this.lb = -parseFloat(this.target.split(",")[1])) : (this.aa = parseFloat(this.target.split(",")[0]), this.lb = parseFloat(this.target.split(",")[1])), this.ea = this.Z, this.mb = this.pb, this.Ja = this.ea + this.aa, this.gc = this.mb + this.lb) : (this.reverse ? (this.c.x = parseFloat(this.target.split(",")[0]), this.c.y = parseFloat(this.target.split(",")[1]), this.aa = this.Hf, this.lb = this.If) : (this.c.x = this.Hf, this.c.y = this.If, this.aa = parseFloat(this.target.split(",")[0]), this.lb = parseFloat(this.target.split(",")[1])), this.Z = this.c.x, this.pb = this.c.y, this.ea = this.Z, this.mb = this.pb, this.Ja = this.aa, this.gc = this.lb, -6 == this.L && (this.Ja = this.Hf, this.gc = this.If));
        else if (1 == this.n || 2 == this.n || 3 == this.n) {
            c && (this.target = "1,1");
            "current" == this.B && (this.B = "1,1");
            this.B = "" + this.B;
            this.target = "" + this.target;
            2 == this.n ? (-1 == this.B.indexOf(",") && (this.B = parseFloat(this.B) + ",1"), -1 == this.target.indexOf(",") && (this.target = parseFloat(this.target) + ",1")) : 3 == this.n ? (-1 == this.B.indexOf(",") && (this.B = "1," + parseFloat(this.B)), -1 == this.target.indexOf(",") && (this.target = "1," + parseFloat(this.target))) : (-1 == this.B.indexOf(",") && (this.B = parseFloat(this.B) + "," + parseFloat(this.B)), -1 == this.target.indexOf(",") && (this.target = parseFloat(this.target) + "," + parseFloat(this.target)));
            var a = parseFloat(this.B.split(",")[0]),
                f = parseFloat(this.B.split(",")[1]);
            this.Ld = !0;
            var k = parseFloat(this.target.split(",")[0]);
            if (0 == k || isNaN(k)) this.Ld = !1;
            3 == this.n && (this.Ld = !1);
            this.Md = !0;
            var e = parseFloat(this.target.split(",")[1]);
            if (0 == e || isNaN(e)) this.Md = !1;
            2 == this.n && (this.Md = !1);
            1 == this.kc ? (this.loop && (this.c.width = this.od, this.c.height = this.nd), b || (this.reverse ? (this.c.width = this.c.width * k, this.c.height = this.c.height * e) : (this.c.width = this.c.width * a, this.c.height = this.c.height * f)), this.Z = this.c.width, this.pb = this.c.height, this.ea = this.Z, this.mb = this.pb, this.reverse ? (this.aa = this.Z * a / k, this.lb = this.pb * f / e) : (this.aa = this.Z * k, this.lb = this.pb * e)) : (b || (this.reverse ? (this.c.width = this.od * k, this.c.height = this.nd * e) : (this.c.width = this.od * a, this.c.height = this.nd * f)), this.Z = this.c.width, this.pb = this.c.height, this.ea = this.Z, this.mb = this.pb, this.reverse ? (this.aa = this.od * a, this.lb = this.nd * f) : (this.aa = this.od * k, this.lb = this.nd * e));
            this.Ja = this.aa;
            this.gc = this.lb; - 6 == this.L && (this.Ja = this.od * a, this.gc = this.nd * f)
        } else if (4 == this.n) c && (this.target = Ha(this.c.j)), "current" == this.B || this.reverse || 1 == this.L || (this.c.j = A(parseFloat(this.B.split(",")[0]))), 1 == this.kc ? (this.loop && (this.c.j = this.Vh), this.Z = this.c.j, this.reverse ? this.aa = this.c.j - A(parseFloat(this.target.split(",")[0])) : this.aa = this.c.j + A(parseFloat(this.target.split(",")[0]))) : this.reverse ? (this.c.j = A(parseFloat(this.target.split(",")[0])), this.Z = this.c.j, this.aa = this.Vh) : (this.c.j = this.Vh, this.Z = this.c.j, this.aa = A(parseFloat(this.target.split(",")[0]))), this.ea = this.Z, this.Ja = Ha(this.aa), -6 == this.L && (this.Ja = Ha(this.Vh)), this.Wh = A(this.Ja);
        else if (5 == this.n) "current" == this.B && (this.B = this.c.opacity), c && (this.target = "" + this.c.opacity), b || this.reverse || 1 == this.L || (this.c.opacity = parseFloat(this.B.split(",")[0]) / 100), 1 == this.kc ? (this.loop && (this.c.opacity = this.lt), this.ea = this.Z = this.c.opacity, this.aa = this.reverse ? -parseFloat(this.target.split(",")[0]) / 100 : parseFloat(this.target.split(",")[0]) / 100, this.Ja = this.ea + this.aa) : (this.Z = this.c.opacity, this.reverse ? (this.ea = parseFloat(this.target.split(",")[0]) / 100, this.aa = parseFloat(this.B.split(",")[0]) / 100) : (this.ea = this.Z, this.aa = parseFloat(this.target.split(",")[0]) /
            100), this.Ja = this.aa), -6 == this.L && (this.Ja = this.lt);
        else if (6 == this.n) isNaN(this.value) && (this.value = 0), "current" == this.B && (this.B = "" + this.value), c && (this.target = "" + this.value), b || this.reverse || 1 == this.L || (this.value = parseFloat(this.B.split(",")[0])), 1 == this.kc ? (this.loop && (this.value = this.wm), b || (this.value = this.reverse ? parseFloat(this.target.split(",")[0]) : parseFloat(this.B.split(",")[0])), this.Z = this.value, this.reverse ? this.aa = this.Z - parseFloat(this.target.split(",")[0]) : this.aa = this.Z + parseFloat(this.target.split(",")[0]), this.ea = this.Z, this.Ja = this.aa) : (b || (this.value = this.reverse ? parseFloat(this.target.split(",")[0]) : parseFloat(this.B.split(",")[0])), this.Z = this.value, this.aa = this.reverse ? parseFloat(this.B.split(",")[0]) : parseFloat(this.target.split(",")[0]), this.ea = this.Z, this.Ja = this.aa), -6 == this.L && (this.Ja = this.wm);
        else if (7 == this.n) {
            c && (this.target = this.c.width + "," + this.c.height);
            "current" == this.B || this.reverse || 1 == this.L || (this.c.width = parseFloat(this.B.split(",")[0]), this.c.height = parseFloat(this.B.split(",")[1]));
            this.Ld = !0;
            k = parseFloat(this.target.split(",")[0]);
            if (0 > k || isNaN(k)) this.Ld = !1;
            this.Md = !0;
            e = parseFloat(this.target.split(",")[1]);
            if (0 > e || isNaN(e)) this.Md = !1;
            1 == this.kc ? (this.loop && (this.c.width = this.od, this.c.height = this.nd), this.Z = this.c.width, this.pb = this.c.height, this.reverse ? (this.aa = this.Z - parseFloat(this.target.split(",")[0]), this.lb = this.pb - parseFloat(this.target.split(",")[1])) : (this.aa = this.Z + parseFloat(this.target.split(",")[0]), this.lb = this.pb + parseFloat(this.target.split(",")[1]))) : (b || (this.reverse ? (this.c.width = parseFloat(this.target.split(",")[0]), this.c.height = parseFloat(this.target.split(",")[1])) : (this.c.width = this.od, this.c.height = this.nd)), this.Z = this.c.width, this.pb = this.c.height, this.reverse ? (this.aa = this.od, this.lb = this.nd) : (this.aa = parseFloat(this.target.split(",")[0]), this.lb = parseFloat(this.target.split(",")[1])));
            this.ea = this.Z;
            this.mb = this.pb;
            this.Ja = this.aa;
            this.gc = this.lb; - 6 == this.L && (this.Ja = this.od, this.gc = this.nd)
        }
        this.Fc = this.R = this.ea;
        this.gd = this.mb;
        this.Ha = parseFloat(this.Dg.split(",")[0]);
        this.Sa = parseFloat(this.Dg.split(",")[1]);
        if (0 > this.Ha || isNaN(this.Ha)) this.Ha = 0;
        if (0 > this.Sa || isNaN(this.Sa)) this.Sa = 0;
        b && (this.B = "current");
        c && (this.target = "current");
        d && (this.target = "OBJ")
    };
    c.qw = function(b, c) {
        switch (this.Fe) {
            case 0:
                return 1 * b / c + 0;
            case 1:
                return 1 * (b /= c) * b + 0;
            case 2:
                return -1 * (b /= c) * (b - 2) + 0;
            case 3:
                return 1 > (b /= c / 2) ? .5 * b * b + 0 : -.5 * (--b * (b - 2) - 1) + 0;
            case 4:
                return 1 * (b /= c) * b * b + 0;
            case 5:
                return 1 * ((b = b / c - 1) * b * b + 1) + 0;
            case 6:
                return 1 > (b /= c / 2) ? .5 * b * b * b + 0 : .5 * ((b -= 2) * b * b + 2) + 0;
            case 7:
                return 1 * (b /= c) * b * b * b + 0;
            case 8:
                return -1 * ((b = b / c - 1) * b * b * b - 1) + 0;
            case 9:
                return 1 > (b /= c / 2) ? .5 * b * b * b * b + 0 : -.5 * ((b -= 2) * b * b * b - 2) + 0;
            case 10:
                return 1 * (b /= c) * b * b * b * b + 0;
            case 11:
                return 1 * ((b = b / c - 1) * b * b * b * b + 1) + 0;
            case 12:
                return 1 > (b /= c / 2) ? .5 * b * b * b * b * b + 0 : .5 * ((b -= 2) * b * b * b * b + 2) + 0;
            case 13:
                return -1 * (Math.sqrt(1 - (b /= c) * b) - 1) + 0;
            case 14:
                return 1 * Math.sqrt(1 - (b = b / c - 1) * b) + 0;
            case 15:
                return 1 > (b /= c / 2) ? -.5 * (Math.sqrt(1 - b * b) - 1) + 0 : .5 * (Math.sqrt(1 - (b -= 2) * b) + 1) + 0;
            case 16:
                var d = 0;
                0 == d && (d = 1.70158);
                return 1 * (b /= c) * b * ((d + 1) * b - d) + 0;
            case 17:
                return d = 0, 0 == d && (d = 1.70158), 1 * ((b = b / c - 1) * b * ((d + 1) * b + d) + 1) + 0;
            case 18:
                return d = 0, 0 == d && (d = 1.70158), 1 > (b /= c / 2) ? .5 * b * b * (((d *= 1.525) + 1) * b - d) + 0 : .5 * ((b -= 2) * b * (((d *= 1.525) + 1) * b + d) + 2) + 0;
            case 19:
                var a = 0,
                    h = 0;
                if (0 == b) break;
                if (1 == (b /= c)) return 1;
                0 == h && (h = .3 * c);
                0 == a || a < Math.abs(1) ? (a = 1, d = h / 4) : d = h / (2 * Math.PI) * Math.asin(1 / a);
                return -(a * Math.pow(2, 10 * --b) * Math.sin(2 * (b * c - d) * Math.PI / h)) + 0;
            case 20:
                h = a = 0;
                if (0 == b) break;
                if (1 == (b /= c)) return 1;
                0 == h && (h = .3 * c);
                0 == a || a < Math.abs(1) ? (a = 1, d = h / 4) : d = h /
                    (2 * Math.PI) * Math.asin(1 / a);
                return a * Math.pow(2, -10 * b) * Math.sin(2 * (b * c - d) * Math.PI / h) + 1;
            case 21:
                h = a = 0;
                if (0 == b) break;
                if (2 == (b /= c / 2)) return 1;
                0 == h && (h = .3 * c * 1.5);
                0 == a || a < Math.abs(1) ? (a = 1, d = h / 4) : d = h / (2 * Math.PI) * Math.asin(1 / a);
                return 1 > b ? -.5 * a * Math.pow(2, 10 * --b) * Math.sin(2 * (b * c - d) * Math.PI / h) + 0 : a * Math.pow(2, -10 * --b) * Math.sin(2 * (b * c - d) * Math.PI / h) * .5 + 1;
            case 22:
                return 1 - f(c - b, c) + 0;
            case 23:
                return f(b, c);
            case 24:
                return b < c / 2 ? .5 * (1 - f(c - 2 * b, c) + 0) + 0 : .5 * f(2 * b - c, c) + .5;
            case 25:
                return d = b / c / 2, 2 * d * d * (3 - 2 * d);
            case 26:
                return d = (b / c + 1) / 2, 2 * d * d * (3 - 2 * d) - 1;
            case 27:
                return d = b / c, d * d * (3 - 2 * d)
        }
        return 0
    };
    c.Lb = function() {
        return {
            i: this.C,
            active: this.u,
            tweened: this.n,
            easing: this.Fe,
            initial: this.B,
            target: this.target,
            duration: this.duration,
            wait: this.Dg,
            playmode: this.L,
            value: this.value,
            coord_mode: this.kc,
            forceInit: this.tn,
            group: this.group,
            targetObject: this.zc,
            pingpongCounter: this.Gc,
            isPaused: this.fg,
            initialX: this.Z,
            initialY: this.pb,
            targetX: this.aa,
            targetY: this.lb,
            tweenSaveWidth: this.od,
            tweenSaveHeight: this.nd,
            tweenSaveAngle: this.Vh,
            tweenSaveX: this.Hf,
            tweenSaveY: this.If,
            tweenSaveValue: this.wm,
            tweenInitialX: this.ea,
            tweenInitialY: this.mb,
            tweenTargetX: this.Ja,
            tweenTargetY: this.gc,
            tweenTargetAngle: this.Wh,
            ratio: this.ne,
            reverse: this.reverse,
            rewindMode: this.Tl,
            doTweenX: this.Ld,
            doTweenY: this.Md,
            loop: this.loop,
            initiating: this.Ha,
            cooldown: this.Sa,
            lastPlayMode: this.fo,
            lastKnownValue: this.R,
            lastKnownX: this.Fc,
            lastKnownY: this.gd,
            onStarted: this.zh,
            onStartedDone: this.ij,
            onWaitEnd: this.Ah,
            onWaitEndDone: this.jj,
            onEnd: this.Pd,
            onEndDone: this.ej,
            onCooldown: this.xh,
            onCooldownDone: this.dj
        }
    };
    c.$b = function(b) {
        this.C = b.i;
        this.u = b.active;
        this.n = b.tweened;
        this.Fe = b.easing;
        this.B = b.initial;
        this.target = b.target;
        this.duration = b.duration;
        this.Dg = b.wait;
        this.L = b.playmode;
        this.value = b.value;
        this.kc = b.coord_mode;
        this.tn = b.forceInit;
        this.group = b.group;
        this.zc = b.targetObject;
        this.Gc = b.pingpongCounter;
        this.fg = b.isPaused;
        this.Z = b.initialX;
        this.pb = b.initialY;
        this.aa = b.targetX;
        this.lb = b.targetY;
        this.od = b.tweenSaveWidth;
        this.nd = b.tweenSaveHeight;
        this.Vh = b.tweenSaveAngle;
        this.Hf = b.tweenSaveX;
        this.If = b.tweenSaveY;
        this.wm = b.tweenSaveValue;
        this.ea = b.tweenInitialX;
        this.mb = b.tweenInitialY;
        this.Ja = b.tweenTargetX;
        this.gc = b.tweenTargetY;
        this.Wh = b.tweenTargetAngle;
        this.ne = b.ratio;
        this.reverse = b.reverse;
        this.Tl = b.rewindMode;
        this.Ld = b.doTweenX;
        this.Md = b.doTweenY;
        this.loop = b.loop;
        this.Ha = b.initiating;
        this.Sa = b.cooldown;
        this.fo = b.lastPlayMode;
        this.R = b.lastKnownValue;
        this.Fc = b.lastKnownX;
        this.gd = b.lastKnownY;
        this.zh = b.onStarted;
        this.ij = b.onStartedDone;
        this.Ah = b.onWaitEnd;
        this.jj = b.onWaitEndDone;
        this.Pd = b.onEnd;
        this.ej = b.onEndDone;
        this.xh = b.onCooldown;
        this.dj = b.onCooldownDone;
        this.Tq()
    };
    c.Wa = function() {
        var b = this.b.Zf(this.c),
            c = -1 == this.C;
        this.u && 0 !== b && (0 != this.C || this.zh || (this.zh = !0, this.dj = this.xh = this.ej = this.Pd = this.jj = this.Ah = this.ij = !1, this.b.trigger(bd.prototype.e.Jm, this.c), this.ij = !0), this.C = -1 == this.C ? this.Ha + this.duration + this.Sa : this.C + b, this.C <= this.Ha || (0 == this.Ah && (this.Ah = !0, this.b.trigger(bd.prototype.e.Hu, this.c), this.jj = !0), this.C <= this.duration + this.Ha && (b = this.qw(this.C -
            this.Ha, this.duration), 0 == this.n ? (1 == this.kc ? (this.c.x !== this.Fc && (this.ea += this.c.x - this.Fc, this.Ja += this.c.x - this.Fc), this.c.y !== this.gd && (this.mb += this.c.y - this.gd, this.gc += this.c.y - this.gd)) : (this.c.x !== this.Fc && (this.ea += this.c.x - this.Fc), this.c.y !== this.gd && (this.mb += this.c.y - this.gd)), this.c.x = this.ea + (this.Ja - this.ea) * b, this.c.y = this.mb + (this.gc - this.mb) * b, this.Fc = this.c.x, this.gd = this.c.y) : 1 == this.n || 2 == this.n || 3 == this.n ? (this.c.width !== this.Fc && (this.ea = this.c.width), this.c.height !== this.gd && (this.mb = this.c.height), this.Ld && (this.c.width = this.ea + (this.Ja - this.ea) * b), this.Md ? this.c.height = this.mb + (this.gc - this.mb) * b : 1 == this.n && (this.c.height = this.c.width * this.ne), this.Fc = this.c.width, this.gd = this.c.height) : 4 == this.n ? (b = this.ea + (this.Wh - this.ea) * b, this.C >= this.duration + this.Ha && (b = this.Wh), this.c.j = Ja(b)) : 5 == this.n ? (1 == this.kc && this.c.opacity !== this.Fc && (this.ea = this.c.opacity), this.c.opacity = this.ea + (this.Ja - this.ea) * b, this.Fc = this.c.opacity) : 6 == this.n ? this.value = this.ea + (this.Ja - this.ea) * b : 7 == this.n && (1 == this.kc && (this.c.width !== this.Fc && (this.ea = this.c.width), this.c.height !== this.gd && (this.mb = this.c.height)), this.Ld && (this.c.width = this.ea + (this.Ja - this.ea) * b), this.Md && (this.c.height = this.mb + (this.gc - this.mb) * b), this.Fc = this.c.width, this.gd = this.c.height), this.c.Ma()), this.C >= this.duration + this.Ha && (this.Uv(c), this.c.Ma(), 0 == this.Pd && (this.Pd = !0, this.b.trigger(bd.prototype.e.Hm, this.c), this.ej = !0))))
    };
    c.Uv = function(b) {
        switch (this.n) {
            case 0:
                this.c.x = this.Ja;
                this.c.y = this.gc;
                break;
            case 1:
                this.Ld && (this.c.width = this.Ja);
                this.Md ? this.c.height = this.gc : this.c.height = this.c.width * this.ne;
                break;
            case 2:
                this.c.width = this.Ja;
                break;
            case 3:
                this.c.height = this.gc;
                break;
            case 4:
                this.c.j = Ja(this.Wh);
                this.R = this.c.j;
                break;
            case 5:
                this.c.opacity = this.Ja;
                break;
            case 6:
                this.value = this.Ja;
                break;
            case 7:
                this.Ld && (this.c.width = this.Ja), this.Md && (this.c.height = this.gc)
        }
        this.C >= this.duration + this.Ha + this.Sa && (0 == this.L ? (this.reverse = this.u = !1, this.C = this.duration + this.Ha + this.Sa) : 1 == this.L ? (this.C = 0, this.init(), this.u = !0) : 2 == this.L ? b ? (this.reverse = !1, this.init()) : (this.reverse = !this.reverse, this.C = 0, this.init(), this.u = !0) : 3 == this.L ? this.b.we(this.c) : 4 == this.L ? (this.loop = !0, this.C = 0, this.init(), this.u = !0) : 5 == this.L ? b ? (this.reverse = !1, this.init()) : 0 >= this.Gc ? (this.C = this.duration + this.Ha + this.Sa, this.u = !1) : (this.reverse ? (--this.Gc, this.reverse = !1) : (--this.Gc, this.reverse = !0), this.C = 0, this.init(), this.u = !0) : -6 == this.L ? (this.L = this.fo, this.reverse = !1, this.C = 0, this.u = !1) : 6 == this.L && (this.reverse = !1, this.C = this.duration + this.Ha + this.Sa, this.u = !1));
        0 == this.xh && (this.xh = !0, this.b.trigger(bd.prototype.e.mu, this.c), this.dj = !0)
    };
    d.e = {};
    c = d.e;
    c.Cp = function() {
        return this.u
    };
    c.Qz = function(b, c) {
        var d = [];
        ic[this.group].forEach(function(a) {
            d.push(a.C / (a.duration + a.Ha + a.Sa))
        });
        return gc(Math.min.apply(null, d), b, c)
    };
    c.Jt = function(b, c) {
        return gc(this.C / (this.duration + this.Ha + this.Sa), b, c)
    };
    c.Jm = function() {
        if (!1 === this.ij) return this.zh
    };
    c.Hu = function() {
        if (!1 === this.jj) return this.Ah
    };
    c.Hm = function() {
        if (!1 === this.ej) return this.Pd
    };
    c.mu = function() {
        if (!1 === this.dj) return this.xh
    };
    d.A = {};
    var k = d.A;
    k.Ku = function(b) {
        this.u = 1 === b
    };
    k.PA = function(b, c) {
        "" === c && (c = this.group);
        (1 === b || ic[c].every(function(b) {
            return !b.u
        })) && ic[c].forEach(function(c) {
            1 === b ? k.Qt.apply(c) : k.Xj.apply(c)
        })
    };
    k.RA = function(b, c) {
        "" === c && (c = this.group);
        ic[c].forEach(function(c) {
            k.Yj.apply(c, [b])
        })
    };
    k.vA = function(b, c, d) {
        "" === d && (d = this.group);
        (1 === b || ic[d].every(function(a) {
            return !a.u
        })) && ic[d].forEach(function(a) {
            1 === b ? k.Rt.apply(a, [c]) : k.Wj.apply(a, [c])
        })
    };
    k.Qt = function() {
        this.loop = 4 === this.L;
        5 == this.L && (this.Gc = 1);
        6 == this.L || -6 == this.L ? this.C < this.duration + this.Sa + this.Ha && (this.reverse = !1, this.init(), this.u = !0) : (this.reverse = !1, this.C = 0, this.init(), this.u = !0)
    };
    k.Rt = function(b) {
        this.Tl = 1 == b;
        this.loop = 4 === this.L;
        5 == this.L && (this.Gc = 1);
        6 == this.L || -6 == this.L ? this.C < this.duration + this.Sa + this.Ha && (this.reverse = !0, this.init(), this.u = !0) : b ? 1 == this.Gc && this.C >= this.duration + this.Sa + this.Ha && (this.reverse = !0, this.C = 0, this.Gc = 2, this.init(), this.u = !0) : (this.reverse = !0, this.C = 0, this.init(), this.u = !0)
    };
    k.Xj = function() {
        this.u || (this.loop = 4 === this.L, 5 == this.L && (this.Gc = 1), 6 == this.L || -6 == this.L ? this.C < this.duration + this.Sa + this.Ha && (this.reverse = !1, this.init(), this.u = !0) : (this.Gc = 1, this.reverse = !1, this.C = 0, this.init(), this.u = !0))
    };
    k.Yj = function(b) {
        this.u && (2 == this.L || 4 == this.L ? this.C = this.reverse ? 0 : -1 : 1 == b ? this.Cf() : 0 == b ? this.C = this.Ha + this.Sa + this.duration : this.C = 0, this.Wa(), this.u = !1)
    };
    k.kA = function() {
        this.u && (this.fg = !0, this.u = !1)
    };
    k.uA = function() {
        this.fg ? (this.u = !0, this.fg = !1) : this.u || (this.reverse = !1, this.C = 0, this.init(), this.u = !0)
    };
    k.Wj = function(b) {
        this.Tl = 1 == b;
        this.u || (this.loop = 4 === this.L, 5 == this.L && (this.Gc = 1), 6 == this.L || -6 == this.L ? this.C < this.duration + this.Sa + this.Ha && (this.reverse = !0, this.init(), this.u = !0) : b ? 1 == this.Gc && this.C >= this.duration + this.Sa + this.Ha && (this.reverse = !0, this.C = 0, this.Gc = 2, this.init(), this.u = !0) : (this.reverse = !0, this.C = 0, this.init(), this.u = !0))
    };
    k.Rp = function(b) {
        this.duration = b
    };
    k.cv = function(b) {
        this.Dg = b;
        this.Ha = parseFloat(this.Dg.split(",")[0]);
        this.Sa = parseFloat(this.Dg.split(",")[1]);
        if (0 > this.Ha || isNaN(this.Ha)) this.Ha = 0;
        if (0 > this.Sa || isNaN(this.Sa)) this.Sa = 0
    };
    k.Wp = function(b) {
        "string" == typeof b ? (this.target = b, this.aa = parseFloat(b.split(",")[0]), this.lb = parseFloat(b.split(",")[1])) : this.aa = this.target = b;
        this.u || this.init()
    };
    k.KA = function(b) {
        b && (b = b.Bn()) && (this.zc = b, this.target = "OBJ")
    };
    k.LA = function(b) {
        2 == this.n || 3 == this.n || 4 == this.n || 5 == this.n || 6 == this.n ? ("string" == typeof b ? this.target = parseFloat(b.split(",")[0]) : this.target = "" + b + "," + this.lb, this.aa = this.target) : (this.target = String(b) + "," + this.target.split(",")[1], this.aa = parseFloat(this.target.split(",")[0]), this.lb = parseFloat(this.target.split(",")[1]));
        this.u || (this.Cf(), this.init())
    };
    k.MA = function(b) {
        2 == this.n || 3 == this.n || 4 == this.n || 5 == this.n || 6 == this.n ? this.aa = this.target = "string" == typeof b ? parseFloat(b) + "" : this.aa + "," + b : (this.target = this.target.split(",")[0] + "," + String(b), this.aa = parseFloat(this.target.split(",")[0]), this.lb = parseFloat(this.target.split(",")[1]));
        this.u || (this.Cf(), this.init())
    };
    k.Tp = function(b) {
        "string" == typeof b ? (this.B = b, this.Z = parseFloat(b.split(",")[0]), this.pb = parseFloat(b.split(",")[1])) : (this.B = "" + b, this.Z = b);
        6 == this.n && (this.value = this.Z);
        this.u || (this.Cf(), this.init())
    };
    k.GA = function(b) {
        2 == this.n || 3 == this.n || 4 == this.n || 5 == this.n || 6 == this.n ? ("string" == typeof b ? this.B = parseFloat(b) : this.B = "" + b + "," + this.pb, this.Z = this.B) : ("" == this.B && (this.B = "current"), this.B = String(b) + "," + ("current" == this.B ? this.If : this.B.split(",")[1]), this.Z = parseFloat(this.B.split(",")[0]), this.pb = parseFloat(this.B.split(",")[1]));
        6 == this.n && (this.value = this.Z);
        this.u || (this.Cf(), this.init())
    };
    k.HA = function(b) {
        2 == this.n || 3 == this.n || 4 == this.n || 5 == this.n || 6 == this.n ? ("string" == typeof b ? this.B = parseFloat(b) : this.B = "" + this.Z + "," + b, this.Z = this.B) : ("" == this.B && (this.B = "current"), this.B = ("current" == this.B ? this.Hf : this.B.split(",")[0]) + "," + String(b), this.Z = parseFloat(this.B.split(",")[0]), this.pb = parseFloat(this.B.split(",")[1]));
        this.u || (this.Cf(), this.init())
    };
    k.Zu = function(b) {
        this.value = b
    };
    k.Yu = function(b) {
        this.n = b
    };
    k.Sp = function(b) {
        this.Fe = b
    };
    k.IA = function(b) {
        this.L = b
    };
    k.Tu = function(b, c, d, a, f, t, e, l) {
        this.n = b;
        this.L = c;
        this.Fe = d;
        k.Tp.apply(this, [a]);
        k.Wp.apply(this, [f]);
        k.Rp.apply(this, [t]);
        k.cv.apply(this, [e]);
        this.kc = l;
        this.Cf()
    };
    d.fa = {};
    d = d.fa;
    d.Ju = function(b) {
        b.G(this.C / (this.duration + this.Ha + this.Sa))
    };
    d.rA = function(b) {
        b.G(this.C)
    };
    d.Ap = function(b) {
        b.G(this.duration)
    };
    d.Xz = function(b) {
        b.G(this.Ha)
    };
    d.Uz = function(b) {
        b.G(this.Sa)
    };
    d.ov = function(b) {
        b.Mb(this.target)
    };
    d.Yp = function(b) {
        b.G(this.value)
    };
    d.fg = function(b) {
        b.Pa(this.fg ? 1 : 0)
    }
})();

function cd(f) {
    this.b = f;
    this.em = this.xj = this.xg = this.cm = 0
}
(function() {
    function f() {}
    var d = cd.prototype;
    d.qa = function(c) {
        this.behavior = c;
        this.b = c.b
    };
    d.qa.prototype.P = function() {};
    d.ca = function(c, b) {
        this.type = c;
        this.behavior = c.behavior;
        this.c = b;
        this.b = c.b
    };
    var c = d.ca.prototype;
    c.P = function() {
        this.enabled = 0 !== this.D[0]
    };
    c.Lb = function() {
        return {
            smg: this.behavior.cm,
            ss: this.behavior.xg,
            se: this.behavior.xj,
            smd: this.behavior.em
        }
    };
    c.$b = function(c) {
        this.behavior.cm = c.smg;
        this.behavior.xg = c.ss;
        this.behavior.xj = c.se;
        this.behavior.em = c.smd
    };
    c.Wa = function() {};
    c.Gj = function() {
        if (this.enabled) {
            var c = this.behavior.ol.Ye(),
                b = 0,
                d = 0,
                f, a, h, t = 0;
            f = 0;
            for (a = c.length; f < a; f++) {
                a: {
                    h = c[f];
                    for (var e = void 0, l = void 0, p = void 0, e = 0, l = h.V.length; e < l; ++e)
                        if (p = h.V[e], p.behavior instanceof cd) {
                            h = p;
                            break a
                        }
                    h = null
                }
                h && h.enabled && (b += c[f].x, d += c[f].y, ++t)
            }
            c = this.c.q.Fb;
            a = this.b.rb.ma;
            h = f = 0;
            a >= this.behavior.xg && a < this.behavior.xj && (f = this.behavior.cm * Math.min(this.b.Cg, 1), 0 === this.behavior.em && (f *= 1 - (a - this.behavior.xg) / (this.behavior.xj - this.behavior.xg)), a = Math.random() * Math.PI * 2, h = Math.random() * f, f = Math.cos(a) * h, h *=
                Math.sin(a));
            c.Xo(b / t + f);
            c.Yo(d / t + h)
        }
    };
    f.prototype.gv = function(c, b, d) {
        this.behavior.cm = c;
        this.behavior.xg = this.b.rb.ma;
        this.behavior.xj = this.behavior.xg + b;
        this.behavior.em = d
    };
    d.A = new f
})();

function rc() {
    return [tc, uc, sc, vc, wc, xc, T, yc, zc, Ac, Bc, bd, Dc, Cc, Ec, cd, ad, O.prototype.e.Xt, O.prototype.e.Ot, zc.prototype.A.Xp, zc.prototype.fa.Mm, O.prototype.fa.Ee, zc.prototype.e.yp, O.prototype.e.Hp, O.prototype.e.qv, xc.prototype.A.zp, T.prototype.A.Up, T.prototype.A.Wu, T.prototype.A.dv, T.prototype.A.zp, O.prototype.fa.Ez, T.prototype.fa.sv, O.prototype.fa.Fz, T.prototype.fa.Tt, yc.prototype.A.Up, Dc.prototype.A.Iu, T.prototype.A.Mu, O.prototype.fa.sq, O.prototype.fa.Dz, O.prototype.fa.Cz, T.prototype.fa.Zp, T.prototype.fa.Mm, ad.prototype.A.Xj, Bc.prototype.e.fu, O.prototype.A.$u, Bc.prototype.fa.gu, yc.prototype.A.Xu, Bc.prototype.e.It, Bc.prototype.A.Gt, T.prototype.A.Nu, T.prototype.A.Lu, T.prototype.A.Su, O.prototype.e.Kt, O.prototype.A.rv, bd.prototype.A.Xj, T.prototype.A.Xp, T.prototype.A.av, ad.prototype.A.Wj, O.prototype.A.Bt, O.prototype.A.nv, O.prototype.e.Nt, O.prototype.A.Mt, O.prototype.fa.random, T.prototype.A.hv, T.prototype.A.Ou, Ec.prototype.A.Uu, Ec.prototype.A.Qu, T.prototype.e.Ht, T.prototype.e.Zt, T.prototype.e.yp, T.prototype.e.lu, T.prototype.e.Vt, tc.prototype.A.Play, Cc.prototype.A.Pt, Bc.prototype.A.lv, Ac.prototype.e.$t, T.prototype.e.Lt, T.prototype.A.Vp, T.prototype.A.Ru, O.prototype.e.Bp, vc.prototype.e.Yt, wc.prototype.A.Jv, tc.prototype.A.bv, tc.prototype.A.Vu, wc.prototype.A.Lv, wc.prototype.A.Kv, wc.prototype.A.Mv, bd.prototype.A.Yj, bd.prototype.A.Wj, bd.prototype.A.Sp, cd.prototype.A.gv, O.prototype.e.cu, sc.prototype.A.CallFunction, Ac.prototype.e.Np, Ac.prototype.e.Lm, T.prototype.e.au, O.prototype.A.Pu, Ac.prototype.e.Op, uc.prototype.A.St, vc.prototype.e.Ep, wc.prototype.e.es, tc.prototype.A.kv, wc.prototype.e.js, sc.prototype.e.Tj]
};