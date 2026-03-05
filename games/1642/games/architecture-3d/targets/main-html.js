/** Cooked with Flambe, https://getflambe.com */
'use strict';
(function() {
    function q(a, b) {
        function c() {}
        c.prototype = a;
        var f = new c,
            i;
        for (i in b) f[i] = b[i];
        b.toString !== Object.prototype.toString && (f.toString = b.toString);
        return f
    }

    function Xc(a) {
        return a instanceof Array ? function() {
            return z.iter(a)
        } : "function" == typeof a.iterator ? n(a, a.iterator) : a.iterator
    }

    function n(a, b) {
        if (null == b) return null;
        null == b.__id__ && (b.__id__ = dd++);
        var c;
        null == a.hx__closures__ ? a.hx__closures__ = {} : c = a.hx__closures__[b.__id__];
        null == c && (c = function() {
            return c.method.apply(c.scope,
                arguments)
        }, c.scope = a, c.method = b, a.hx__closures__[b.__id__] = c);
        return c
    }
    var e = {},
        sa = function(a, b) {
            b = b.split("u").join("");
            this.r = RegExp(a, b)
        };
    e.EReg = sa;
    sa.__name__ = ["EReg"];
    sa.prototype = {
        match: function(a) {
            this.r.global && (this.r.lastIndex = 0);
            this.r.m = this.r.exec(a);
            this.r.s = a;
            return null != this.r.m
        },
        matched: function(a) {
            if (null != this.r.m && 0 <= a && a < this.r.m.length) return this.r.m[a];
            throw "EReg::matched";
        },
        matchedPos: function() {
            if (null == this.r.m) throw "No string matched";
            return {
                pos: this.r.m.index,
                len: this.r.m[0].length
            }
        },
        __class__: sa
    };
    var z = function() {};
    e.HxOverrides = z;
    z.__name__ = ["HxOverrides"];
    z.dateStr = function(a) {
        var b = a.getMonth() + 1,
            c = a.getDate(),
            f = a.getHours(),
            i = a.getMinutes(),
            d = a.getSeconds();
        return a.getFullYear() + "-" + (10 > b ? "0" + b : "" + b) + "-" + (10 > c ? "0" + c : "" + c) + " " + (10 > f ? "0" + f : "" + f) + ":" + (10 > i ? "0" + i : "" + i) + ":" + (10 > d ? "0" + d : "" + d)
    };
    z.strDate = function(a) {
        switch (a.length) {
            case 8:
                var a = a.split(":"),
                    b = new Date;
                b.setTime(0);
                b.setUTCHours(a[0]);
                b.setUTCMinutes(a[1]);
                b.setUTCSeconds(a[2]);
                return b;
            case 10:
                return a = a.split("-"),
                    new Date(a[0], a[1] - 1, a[2], 0, 0, 0);
            case 19:
                return b = a.split(" "), a = b[0].split("-"), b = b[1].split(":"), new Date(a[0], a[1] - 1, a[2], b[0], b[1], b[2]);
            default:
                throw "Invalid date format : " + a;
        }
    };
    z.cca = function(a, b) {
        var c = a.charCodeAt(b);
        return c != c ? void 0 : c
    };
    z.substr = function(a, b, c) {
        if (null != b && 0 != b && null != c && 0 > c) return "";
        null == c && (c = a.length);
        0 > b ? (b = a.length + b, 0 > b && (b = 0)) : 0 > c && (c = a.length + c - b);
        return a.substr(b, c)
    };
    z.remove = function(a, b) {
        var c = a.indexOf(b);
        if (-1 == c) return !1;
        a.splice(c, 1);
        return !0
    };
    z.iter = function(a) {
        return {
            cur: 0,
            arr: a,
            hasNext: function() {
                return this.cur < this.arr.length
            },
            next: function() {
                return this.arr[this.cur++]
            }
        }
    };
    var tb = function() {};
    e.Lambda = tb;
    tb.__name__ = ["Lambda"];
    tb.array = function(a) {
        for (var b = [], a = Xc(a)(); a.hasNext();) {
            var c = a.next();
            b.push(c)
        }
        return b
    };
    tb.count = function(a, b) {
        var c = 0;
        if (null == b)
            for (var f = Xc(a)(); f.hasNext();) f.next(), c++;
        else
            for (f = Xc(a)(); f.hasNext();) {
                var i = f.next();
                b(i) && c++
            }
        return c
    };
    var Sa = function() {
        this.length = 0
    };
    e.List = Sa;
    Sa.__name__ = ["List"];
    Sa.prototype = {
        add: function(a) {
            a = [a];
            null == this.h ? this.h = a : this.q[1] = a;
            this.q = a;
            this.length++
        },
        push: function(a) {
            this.h = a = [a, this.h];
            null == this.q && (this.q = a);
            this.length++
        },
        iterator: function() {
            return {
                h: this.h,
                hasNext: function() {
                    return null != this.h
                },
                next: function() {
                    if (null == this.h) return null;
                    var a = this.h[0];
                    this.h = this.h[1];
                    return a
                }
            }
        },
        __class__: Sa
    };
    var ub = function() {};
    e.IMap = ub;
    ub.__name__ = ["IMap"];
    Math.__name__ = ["Math"];
    var t = function() {};
    e.Reflect = t;
    t.__name__ = ["Reflect"];
    t.field = function(a, b) {
        try {
            return a[b]
        } catch (c) {
            return null
        }
    };
    t.callMethod = function(a, b, c) {
        return b.apply(a, c)
    };
    t.fields = function(a) {
        var b = [];
        if (null != a) {
            var c = Object.prototype.hasOwnProperty,
                f;
            for (f in a) "__id__" != f && "hx__closures__" != f && c.call(a, f) && b.push(f)
        }
        return b
    };
    t.isFunction = function(a) {
        return "function" == typeof a && !(a.__name__ || a.__ename__)
    };
    t.compare = function(a, b) {
        return a == b ? 0 : a > b ? 1 : -1
    };
    t.isEnumValue = function(a) {
        return null != a && null != a.__enum__
    };
    t.deleteField = function(a, b) {
        if (!Object.prototype.hasOwnProperty.call(a, b)) return !1;
        delete a[b];
        return !0
    };
    var x = function() {};
    e.Std = x;
    x.__name__ = ["Std"];
    x.is = function(a, b) {
        return K.__instanceof(a, b)
    };
    x.instance = function(a, b) {
        return a instanceof b ? a : null
    };
    x.string = function(a) {
        return K.__string_rec(a, "")
    };
    x["int"] = function(a) {
        return a | 0
    };
    x.parseInt = function(a) {
        var b = parseInt(a, 10);
        if (0 == b && (120 == z.cca(a, 1) || 88 == z.cca(a, 1))) b = parseInt(a);
        return isNaN(b) ? null : b
    };
    x.parseFloat = function(a) {
        return parseFloat(a)
    };
    var vb = function() {
        this.b = ""
    };
    e.StringBuf = vb;
    vb.__name__ = ["StringBuf"];
    vb.prototype = {
        add: function(a) {
            this.b +=
                x.string(a)
        },
        __class__: vb
    };
    var ha = function() {};
    e.StringTools = ha;
    ha.__name__ = ["StringTools"];
    ha.startsWith = function(a, b) {
        return a.length >= b.length && z.substr(a, 0, b.length) == b
    };
    ha.fastCodeAt = function(a, b) {
        return a.charCodeAt(b)
    };
    var v = e.ValueType = {
        __ename__: ["ValueType"],
        __constructs__: "TNull,TInt,TFloat,TBool,TObject,TFunction,TClass,TEnum,TUnknown".split(",")
    };
    v.TNull = ["TNull", 0];
    v.TNull.__enum__ = v;
    v.TInt = ["TInt", 1];
    v.TInt.__enum__ = v;
    v.TFloat = ["TFloat", 2];
    v.TFloat.__enum__ = v;
    v.TBool = ["TBool", 3];
    v.TBool.__enum__ =
        v;
    v.TObject = ["TObject", 4];
    v.TObject.__enum__ = v;
    v.TFunction = ["TFunction", 5];
    v.TFunction.__enum__ = v;
    v.TClass = function(a) {
        a = ["TClass", 6, a];
        a.__enum__ = v;
        return a
    };
    v.TEnum = function(a) {
        a = ["TEnum", 7, a];
        a.__enum__ = v;
        return a
    };
    v.TUnknown = ["TUnknown", 8];
    v.TUnknown.__enum__ = v;
    var I = function() {};
    e.Type = I;
    I.__name__ = ["Type"];
    I.getClassName = function(a) {
        return a.__name__.join(".")
    };
    I.getEnumName = function(a) {
        return a.__ename__.join(".")
    };
    I.resolveClass = function(a) {
        a = e[a];
        return null == a || !a.__name__ ? null : a
    };
    I.resolveEnum =
        function(a) {
            a = e[a];
            return null == a || !a.__ename__ ? null : a
        };
    I.createInstance = function(a, b) {
        switch (b.length) {
            case 0:
                return new a;
            case 1:
                return new a(b[0]);
            case 2:
                return new a(b[0], b[1]);
            case 3:
                return new a(b[0], b[1], b[2]);
            case 4:
                return new a(b[0], b[1], b[2], b[3]);
            case 5:
                return new a(b[0], b[1], b[2], b[3], b[4]);
            case 6:
                return new a(b[0], b[1], b[2], b[3], b[4], b[5]);
            case 7:
                return new a(b[0], b[1], b[2], b[3], b[4], b[5], b[6]);
            case 8:
                return new a(b[0], b[1], b[2], b[3], b[4], b[5], b[6], b[7]);
            default:
                throw "Too many arguments";
        }
    };
    I.createEmptyInstance = function(a) {
        function b() {}
        b.prototype = a.prototype;
        return new b
    };
    I.createEnum = function(a, b, c) {
        var f = t.field(a, b);
        if (null == f) throw "No such constructor " + b;
        if (t.isFunction(f)) {
            if (null == c) throw "Constructor " + b + " need parameters";
            return f.apply(a, c)
        }
        if (null != c && 0 != c.length) throw "Constructor " + b + " does not need parameters";
        return f
    };
    I.getEnumConstructs = function(a) {
        return a.__constructs__.slice()
    };
    I["typeof"] = function(a) {
        switch (typeof a) {
            case "boolean":
                return v.TBool;
            case "string":
                return v.TClass(String);
            case "number":
                return Math.ceil(a) == a % 2147483648 ? v.TInt : v.TFloat;
            case "object":
                if (null == a) return v.TNull;
                var b = a.__enum__;
                if (null != b) return v.TEnum(b);
                a = a instanceof Array && null == a.__enum__ ? Array : a.__class__;
                return null != a ? v.TClass(a) : v.TObject;
            case "function":
                return a.__name__ || a.__ename__ ? v.TObject : v.TFunction;
            case "undefined":
                return v.TNull;
            default:
                return v.TUnknown
        }
    };
    var na = function() {};
    e["flambe.util.Disposable"] = na;
    na.__name__ = ["flambe", "util", "Disposable"];
    na.prototype = {
        __class__: na
    };
    var k =
        function() {
            this._flags = 0;
            this.owner = this.next = null
        };
    e["flambe.Component"] = k;
    k.__name__ = ["flambe", "Component"];
    k.__interfaces__ = [na];
    k.prototype = {
        onAdded: function() {},
        onRemoved: function() {},
        onStart: function() {},
        onStop: function() {},
        onUpdate: function() {},
        dispose: function() {
            null != this.owner && this.owner.remove(this)
        },
        get_name: function() {
            return null
        },
        __class__: k
    };
    var Ia = function() {
        k.call(this);
        this._disposables = []
    };
    e["flambe.Disposer"] = Ia;
    Ia.__name__ = ["flambe", "Disposer"];
    Ia.__super__ = k;
    Ia.prototype = q(k.prototype, {
        get_name: function() {
            return "Disposer_5"
        },
        add: function(a) {
            this._disposables.push(a);
            return this
        },
        onRemoved: function() {
            this.freeDisposables()
        },
        dispose: function() {
            k.prototype.dispose.call(this);
            this.freeDisposables()
        },
        freeDisposables: function() {
            var a = this._disposables;
            this._disposables = [];
            for (var b = 0; b < a.length;) {
                var c = a[b];
                ++b;
                c.dispose()
            }
        },
        __class__: Ia
    });
    var o = function() {
        this.parent = this.firstChild = this.next = this.firstComponent = null;
        this._compMap = {}
    };
    e["flambe.Entity"] = o;
    o.__name__ = ["flambe", "Entity"];
    o.__interfaces__ = [na];
    o.prototype = {
        add: function(a) {
            null != a.owner && a.owner.remove(a);
            var b = a.get_name(),
                c = this._compMap[b];
            null != c && this.remove(c);
            this._compMap[b] = a;
            b = null;
            for (c = this.firstComponent; null != c;) b = c, c = c.next;
            null != b ? b.next = a : this.firstComponent = a;
            a.owner = this;
            a.next = null;
            a.onAdded();
            return this
        },
        remove: function(a) {
            for (var b = null, c = this.firstComponent; null != c;) {
                var f = c.next;
                if (c == a) return null == b ? this.firstComponent = f : (b.owner = this, b.next = f), delete this._compMap[c.get_name()], 0 != (c._flags &
                    1) && (c.onStop(), c._flags &= -2), c.onRemoved(), c.owner = null, c.next = null, !0;
                b = c;
                c = f
            }
            return !1
        },
        addChild: function(a, b) {
            null == b && (b = !0);
            null != a.parent && a.parent.removeChild(a);
            a.parent = this;
            if (b) {
                for (var c = null, f = this.firstChild; null != f;) c = f, f = f.next;
                null != c ? c.next = a : this.firstChild = a
            } else a.next = this.firstChild, this.firstChild = a;
            return this
        },
        removeChild: function(a) {
            for (var b = null, c = this.firstChild; null != c;) {
                var f = c.next;
                if (c == a) {
                    null == b ? this.firstChild = f : b.next = f;
                    c.parent = null;
                    c.next = null;
                    break
                }
                b = c;
                c = f
            }
        },
        disposeChildren: function() {
            for (; null != this.firstChild;) this.firstChild.dispose()
        },
        dispose: function() {
            for (null != this.parent && this.parent.removeChild(this); null != this.firstComponent;) this.firstComponent.dispose();
            this.disposeChildren()
        },
        __class__: o
    };
    var Oc = function() {};
    e["flambe.util.PackageLog"] = Oc;
    Oc.__name__ = ["flambe", "util", "PackageLog"];
    var hc = function() {};
    e["flambe.platform.Platform"] = hc;
    hc.__name__ = ["flambe", "platform", "Platform"];
    hc.prototype = {
        __class__: hc
    };
    var oa = function() {};
    e["flambe.platform.html.HtmlPlatform"] =
        oa;
    oa.__name__ = ["flambe", "platform", "html", "HtmlPlatform"];
    oa.__interfaces__ = [hc];
    oa.prototype = {
        init: function() {
            var a = this;
            u.fixAndroidMath();
            var b = null;
            try {
                b = window.flambe.canvas
            } catch (c) {}
            b.setAttribute("tabindex", "0");
            b.style.outlineStyle = "none";
            b.style.webkitTapHighlightColor = "transparent";
            b.setAttribute("moz-opaque", "true");
            this._stage = new wb(b);
            this._pointer = new R;
            this._mouse = new xb(this._pointer, b);
            this._renderer = this.createRenderer(b);
            this.mainLoop = new ya;
            this.musicPlaying = !1;
            this._canvas =
                b;
            this._container = b.parentElement;
            this._container.style.overflow = "hidden";
            this._container.style.position = "relative";
            this._container.style.msTouchAction = "none";
            var f = 0,
                i = function(c) {
                    if (!(1E3 > c.timeStamp - f)) {
                        var i = b.getBoundingClientRect(),
                            d = a.getX(c, i),
                            i = a.getY(c, i);
                        switch (c.type) {
                            case "mousedown":
                                c.target == b && (c.preventDefault(), a._mouse.submitDown(d, i, c.button), b.focus());
                                break;
                            case "mousemove":
                                a._mouse.submitMove(d, i);
                                break;
                            case "mouseup":
                                a._mouse.submitUp(d, i, c.button);
                                break;
                            case "mousewheel":
                            case "DOMMouseScroll":
                                a._mouse.submitScroll(d,
                                    i, "mousewheel" == c.type ? c.wheelDelta / 40 : -c.detail) && c.preventDefault()
                        }
                    }
                };
            window.addEventListener("mousedown", i, !1);
            window.addEventListener("mousemove", i, !1);
            window.addEventListener("mouseup", i, !1);
            b.addEventListener("mousewheel", i, !1);
            b.addEventListener("DOMMouseScroll", i, !1);
            b.addEventListener("contextmenu", function(a) {
                a.preventDefault()
            }, !1);
            var d = "undefined" != typeof window.ontouchstart,
                i = "msMaxTouchPoints" in window.navigator && 1 < window.navigator.msMaxTouchPoints;
            if (d || i) {
                var e = new yb(this._pointer,
                    d ? 4 : window.navigator.msMaxTouchPoints);
                this._touch = e;
                i = function(b) {
                    var c;
                    c = d ? b.changedTouches : [b];
                    var i = b.target.getBoundingClientRect();
                    f = b.timeStamp;
                    switch (b.type) {
                        case "touchstart":
                        case "MSPointerDown":
                        case "pointerdown":
                            b.preventDefault();
                            u.SHOULD_HIDE_MOBILE_BROWSER && u.hideMobileBrowser();
                            for (b = 0; b < c.length;) {
                                var g = c[b];
                                ++b;
                                var h = a.getX(g, i),
                                    ic = a.getY(g, i);
                                e.submitDown((d ? g.identifier : g.pointerId) | 0, h, ic)
                            }
                            break;
                        case "touchmove":
                        case "MSPointerMove":
                        case "pointermove":
                            b.preventDefault();
                            for (b =
                                0; b < c.length;) g = c[b], ++b, h = a.getX(g, i), ic = a.getY(g, i), e.submitMove((d ? g.identifier : g.pointerId) | 0, h, ic);
                            break;
                        case "touchend":
                        case "touchcancel":
                        case "MSPointerUp":
                        case "pointerup":
                            for (b = 0; b < c.length;) g = c[b], ++b, h = a.getX(g, i), ic = a.getY(g, i), e.submitUp((d ? g.identifier : g.pointerId) | 0, h, ic)
                    }
                };
                d ? (b.addEventListener("touchstart", i, !1), b.addEventListener("touchmove", i, !1), b.addEventListener("touchend", i, !1), b.addEventListener("touchcancel", i, !1)) : (b.addEventListener("MSPointerDown", i, !1), b.addEventListener("MSPointerMove",
                    i, !1), b.addEventListener("MSPointerUp", i, !1))
            } else this._touch = new zb;
            var g = window.onerror;
            window.onerror = function(a, b, c) {
                h.uncaughtError.emit(a);
                return null != g ? g(a, b, c) : !1
            };
            var j = u.loadExtension("hidden", window.document);
            null != j.value ? (i = function() {
                h.hidden.set__(t.field(window.document, j.field))
            }, i(null), window.document.addEventListener(j.prefix + "visibilitychange", i, !1)) : (i = function(a) {
                h.hidden.set__("pagehide" == a.type)
            }, window.addEventListener("pageshow", i, !1), window.addEventListener("pagehide",
                i, !1));
            h.hidden.get_changed().connect(function(b) {
                b || (a._skipFrame = !0)
            });
            this._skipFrame = !1;
            this._lastUpdate = Date.now();
            var Yc = u.loadExtension("requestAnimationFrame").value;
            if (null != Yc) {
                var l = window.performance,
                    m = null != l && u.polyfill("now", l);
                m ? this._lastUpdate = l.now() : null;
                var o = null,
                    o = function(c) {
                        a.update(m ? l.now() : c);
                        Yc(o, b)
                    };
                Yc(o, b)
            } else window.setInterval(function() {
                a.update(Date.now())
            }, 16);
            db.info("Initialized HTML platform", ["renderer", this._renderer.get_type()])
        },
        loadAssetPack: function(a) {
            return (new A(this,
                a)).promise
        },
        getStage: function() {
            return this._stage
        },
        getStorage: function() {
            if (null == this._storage) {
                var a = Pc.getLocalStorage();
                this._storage = null != a ? new Ab(a) : new Bb
            }
            return this._storage
        },
        createLogHandler: function() {
            return null
        },
        update: function(a) {
            var b = (a - this._lastUpdate) / 1E3;
            this._lastUpdate = a;
            h.hidden._value || (this._skipFrame ? this._skipFrame = !1 : (this.mainLoop.update(b), this.mainLoop.render(this._renderer)))
        },
        getPointer: function() {
            return this._pointer
        },
        getMouse: function() {
            return this._mouse
        },
        getTouch: function() {
            return this._touch
        },
        getKeyboard: function() {
            var a = this;
            if (null == this._keyboard) {
                this._keyboard = new ia;
                var b = function(b) {
                    switch (b.type) {
                        case "keydown":
                            a._keyboard.submitDown(b.keyCode) && b.preventDefault();
                            break;
                        case "keyup":
                            a._keyboard.submitUp(b.keyCode)
                    }
                };
                this._canvas.addEventListener("keydown", b, !1);
                this._canvas.addEventListener("keyup", b, !1)
            }
            return this._keyboard
        },
        getWeb: function() {
            null == this._web && (this._web = new Cb(this._container));
            return this._web
        },
        getRenderer: function() {
            return this._renderer
        },
        getX: function(a, b) {
            return (a.clientX -
                b.left) * this._stage.get_width() / b.width
        },
        getY: function(a, b) {
            return (a.clientY - b.top) * this._stage.get_height() / b.height
        },
        createRenderer: function(a) {
            return new Ta(a)
        },
        __class__: oa
    };
    var S = function(a, b) {
        this._value = a;
        this._changed = null != b ? new Ua(b) : null
    };
    e["flambe.util.Value"] = S;
    S.__name__ = ["flambe", "util", "Value"];
    S.prototype = {
        watch: function(a) {
            a(this._value, this._value);
            return this.get_changed().connect(a)
        },
        set__: function(a) {
            var b = this._value;
            a != b && (this._value = a, null != this._changed && this._changed.emit(a,
                b));
            return a
        },
        get_changed: function() {
            null == this._changed && (this._changed = new Ua);
            return this._changed
        },
        __class__: S
    };
    var Va = function(a, b) {
        this._next = null;
        this._signal = a;
        this._listener = b;
        this.stayInList = !0
    };
    e["flambe.util.SignalConnection"] = Va;
    Va.__name__ = ["flambe", "util", "SignalConnection"];
    Va.__interfaces__ = [na];
    Va.prototype = {
        once: function() {
            this.stayInList = !1;
            return this
        },
        dispose: function() {
            null != this._signal && (this._signal.disconnect(this), this._signal = null)
        },
        __class__: Va
    };
    var M = function(a) {
        this._head =
            null != a ? new Va(this, a) : null;
        this._deferredTasks = null
    };
    e["flambe.util.SignalBase"] = M;
    M.__name__ = ["flambe", "util", "SignalBase"];
    M.prototype = {
        connectImpl: function(a, b) {
            var c = this,
                f = new Va(this, a);
            this._head == M.DISPATCHING_SENTINEL ? this.defer(function() {
                c.listAdd(f, b)
            }) : this.listAdd(f, b);
            return f
        },
        disconnect: function(a) {
            var b = this;
            this._head == M.DISPATCHING_SENTINEL ? this.defer(function() {
                b.listRemove(a)
            }) : this.listRemove(a)
        },
        defer: function(a) {
            for (var b = null, c = this._deferredTasks; null != c;) b = c, c = c.next;
            a = new jc(a);
            null != b ? b.next = a : this._deferredTasks = a
        },
        willEmit: function() {
            var a = this._head;
            this._head = M.DISPATCHING_SENTINEL;
            return a
        },
        didEmit: function(a) {
            this._head = a;
            a = this._deferredTasks;
            for (this._deferredTasks = null; null != a;) a.fn(), a = a.next
        },
        listAdd: function(a, b) {
            if (b) a._next = this._head, this._head = a;
            else {
                for (var c = null, f = this._head; null != f;) c = f, f = f._next;
                null != c ? c._next = a : this._head = a
            }
        },
        listRemove: function(a) {
            for (var b = null, c = this._head; null != c;) {
                if (c == a) {
                    a = c._next;
                    null == b ? this._head = a : b._next = a;
                    break
                }
                b = c;
                c = c._next
            }
        },
        __class__: M
    };
    var Ua = function(a) {
        M.call(this, a)
    };
    e["flambe.util.Signal2"] = Ua;
    Ua.__name__ = ["flambe", "util", "Signal2"];
    Ua.__super__ = M;
    Ua.prototype = q(M.prototype, {
        connect: function(a, b) {
            null == b && (b = !1);
            return this.connectImpl(a, b)
        },
        emit: function(a, b) {
            var c = this;
            this._head == M.DISPATCHING_SENTINEL ? this.defer(function() {
                c.emitImpl(a, b)
            }) : this.emitImpl(a, b)
        },
        emitImpl: function(a, b) {
            for (var c = this.willEmit(), f = c; null != f;) f._listener(a, b), f.stayInList || f.dispose(), f = f._next;
            this.didEmit(c)
        },
        __class__: Ua
    });
    var D = function(a) {
        M.call(this, a)
    };
    e["flambe.util.Signal1"] = D;
    D.__name__ = ["flambe", "util", "Signal1"];
    D.__super__ = M;
    D.prototype = q(M.prototype, {
        connect: function(a, b) {
            null == b && (b = !1);
            return this.connectImpl(a, b)
        },
        emit: function(a) {
            var b = this;
            this._head == M.DISPATCHING_SENTINEL ? this.defer(function() {
                b.emitImpl(a)
            }) : this.emitImpl(a)
        },
        emitImpl: function(a) {
            for (var b = this.willEmit(), c = b; null != c;) c._listener(a), c.stayInList || c.dispose(), c = c._next;
            this.didEmit(b)
        },
        __class__: D
    });
    var F = function(a,
        b) {
        this._behavior = null;
        this.wait = !1;
        S.call(this, a, b)
    };
    e["flambe.animation.AnimatedFloat"] = F;
    F.__name__ = ["flambe", "animation", "AnimatedFloat"];
    F.__super__ = S;
    F.prototype = q(S.prototype, {
        set__: function(a) {
            if (this.wait) throw "KIK";
            this._behavior = null;
            return S.prototype.set__.call(this, a)
        },
        update: function(a) {
            null != this._behavior && (S.prototype.set__.call(this, this._behavior.update(a)), this._behavior.isComplete() && (this._behavior = null))
        },
        animateTo: function(a, b, c) {
            if (this.wait) throw "ANIto";
            this.set_behavior(new eb(this._value,
                a, b, c))
        },
        set_behavior: function(a) {
            this._behavior = a;
            this.update(0);
            return a
        },
        __class__: F
    });
    var h = function() {};
    e["flambe.System"] = h;
    h.__name__ = ["flambe", "System"];
    h.init = function() {
        h._calledInit || (h._platform.init(), h._calledInit = !0)
    };
    var kc = function(a) {
        this._handler = a
    };
    e["flambe.util.Logger"] = kc;
    kc.__name__ = ["flambe", "util", "Logger"];
    kc.prototype = {
        __class__: kc
    };
    var db = function() {};
    e["flambe.Log"] = db;
    db.__name__ = ["flambe", "Log"];
    db.info = function() {
        null
    };
    db.__super__ = Oc;
    db.prototype = q(Oc.prototype, {
        __class__: db
    });
    var fb = function(a) {
        null == a && (a = 1);
        this._realDt = 0;
        k.call(this);
        this.scale = new F(a)
    };
    e["flambe.SpeedAdjuster"] = fb;
    fb.__name__ = ["flambe", "SpeedAdjuster"];
    fb.__super__ = k;
    fb.prototype = q(k.prototype, {
        get_name: function() {
            return "SpeedAdjuster_6"
        },
        onUpdate: function(a) {
            0 < this._realDt && (a = this._realDt, this._realDt = 0);
            this.scale.update(a)
        },
        __class__: fb
    });
    var lc = function() {};
    e["flambe.animation.Behavior"] = lc;
    lc.__name__ = ["flambe", "animation", "Behavior"];
    lc.prototype = {
        __class__: lc
    };
    var O = function() {};
    e["flambe.animation.Ease"] =
        O;
    O.__name__ = ["flambe", "animation", "Ease"];
    O.linear = function(a) {
        return a
    };
    O.quadOut = function(a) {
        return a * (2 - a)
    };
    O.quartOut = function(a) {
        return 1 - --a * a * a * a
    };
    O.quintOut = function(a) {
        return (a -= 1) * a * a * a * a + 1
    };
    O.expoOut = function(a) {
        return -Math.pow(2, -10 * a) + 1
    };
    O.elasticOut = function(a) {
        return 1 * Math.pow(2, -10 * a) * Math.sin(6.283185307179586 * (a - 0.06366197723675814 * Math.asin(1)) / 0.4) + 1
    };
    var eb = function(a, b, c, f) {
        this._from = a;
        this._to = b;
        this._duration = c;
        this.elapsed = 0;
        this._easing = null != f ? f : O.linear
    };
    e["flambe.animation.Tween"] =
        eb;
    eb.__name__ = ["flambe", "animation", "Tween"];
    eb.__interfaces__ = [lc];
    eb.prototype = {
        update: function(a) {
            this.elapsed += a;
            return this.elapsed >= this._duration ? this._to : this._from + (this._to - this._from) * this._easing(this.elapsed / this._duration)
        },
        isComplete: function() {
            return this.elapsed >= this._duration
        },
        __class__: eb
    };
    var Ja = function() {};
    e["flambe.asset.Asset"] = Ja;
    Ja.__name__ = ["flambe", "asset", "Asset"];
    Ja.__interfaces__ = [na];
    Ja.prototype = {
        __class__: Ja
    };
    var m = e["flambe.asset.AssetFormat"] = {
        __ename__: ["flambe",
            "asset", "AssetFormat"
        ],
        __constructs__: "WEBP,JXR,PNG,JPG,GIF,DDS,PVR,PKM,MP3,M4A,OPUS,OGG,WAV,Data".split(",")
    };
    m.WEBP = ["WEBP", 0];
    m.WEBP.__enum__ = m;
    m.JXR = ["JXR", 1];
    m.JXR.__enum__ = m;
    m.PNG = ["PNG", 2];
    m.PNG.__enum__ = m;
    m.JPG = ["JPG", 3];
    m.JPG.__enum__ = m;
    m.GIF = ["GIF", 4];
    m.GIF.__enum__ = m;
    m.DDS = ["DDS", 5];
    m.DDS.__enum__ = m;
    m.PVR = ["PVR", 6];
    m.PVR.__enum__ = m;
    m.PKM = ["PKM", 7];
    m.PKM.__enum__ = m;
    m.MP3 = ["MP3", 8];
    m.MP3.__enum__ = m;
    m.M4A = ["M4A", 9];
    m.M4A.__enum__ = m;
    m.OPUS = ["OPUS", 10];
    m.OPUS.__enum__ = m;
    m.OGG = ["OGG", 11];
    m.OGG.__enum__ =
        m;
    m.WAV = ["WAV", 12];
    m.WAV.__enum__ = m;
    m.Data = ["Data", 13];
    m.Data.__enum__ = m;
    var mc = function(a, b, c, f) {
        this.name = a;
        this.url = b;
        this.format = c;
        this.bytes = f
    };
    e["flambe.asset.AssetEntry"] = mc;
    mc.__name__ = ["flambe", "asset", "AssetEntry"];
    mc.prototype = {
        __class__: mc
    };
    var Db = function() {};
    e["flambe.asset.AssetPack"] = Db;
    Db.__name__ = ["flambe", "asset", "AssetPack"];
    Db.__interfaces__ = [na];
    Db.prototype = {
        __class__: Db
    };
    var Eb = function() {};
    e["flambe.asset.File"] = Eb;
    Eb.__name__ = ["flambe", "asset", "File"];
    Eb.__interfaces__ = [Ja];
    Eb.prototype = {
        __class__: Eb
    };
    var W = function() {
        this._localBase = this._remoteBase = null;
        this._entries = []
    };
    e["flambe.asset.Manifest"] = W;
    W.__name__ = ["flambe", "asset", "Manifest"];
    W.fromAssets = function(a, b) {
        null == b && (b = !0);
        var c = t.field(Qc.getType(W).assets[0], a);
        if (null == c) {
            if (b) throw T.withFields("Missing asset pack", ["name", a]);
            return null
        }
        var f = new W;
        f.set_localBase("assets");
        for (var i = 0; i < c.length;) {
            var d = c[i];
            ++i;
            var e = d.name,
                g = a + "/" + e + "?v=" + x.string(d.md5),
                h = W.inferFormat(e);
            h != m.Data && (e = T.removeFileExtension(e));
            f.add(e, g, d.bytes, h)
        }
        return f
    };
    W.inferFormat = function(a) {
        a = T.getUrlExtension(a);
        if (null != a) switch (a.toLowerCase()) {
            case "gif":
                return m.GIF;
            case "jpg":
            case "jpeg":
                return m.JPG;
            case "jxr":
            case "wdp":
                return m.JXR;
            case "png":
                return m.PNG;
            case "webp":
                return m.WEBP;
            case "dds":
                return m.DDS;
            case "pvr":
                return m.PVR;
            case "pkm":
                return m.PKM;
            case "m4a":
                return m.M4A;
            case "mp3":
                return m.MP3;
            case "ogg":
                return m.OGG;
            case "opus":
                return m.OPUS;
            case "wav":
                return m.WAV
        } else null;
        return m.Data
    };
    W.prototype = {
        add: function(a,
            b, c, f) {
            null == c && (c = 0);
            null == f && (f = W.inferFormat(b));
            a = new mc(a, b, f, c);
            this._entries.push(a);
            return a
        },
        iterator: function() {
            return z.iter(this._entries)
        },
        getFullURL: function(a) {
            var b;
            b = null != this.get_remoteBase() && W._supportsCrossOrigin ? this.get_remoteBase() : this.get_localBase();
            return null != b ? T.joinPath(b, a.url) : a.url
        },
        get_localBase: function() {
            return this._localBase
        },
        set_localBase: function(a) {
            null != a && Rc.that(!ha.startsWith(a, "http://") && !ha.startsWith(a, "https://"), "localBase must be a path on the same domain, NOT starting with http(s)://",
                null);
            return this._localBase = a
        },
        get_remoteBase: function() {
            return this._remoteBase
        },
        __class__: W
    };
    var P = e["flambe.display.BlendMode"] = {
        __ename__: ["flambe", "display", "BlendMode"],
        __constructs__: "Normal,Add,Multiply,Screen,Mask,Copy".split(",")
    };
    P.Normal = ["Normal", 0];
    P.Normal.__enum__ = P;
    P.Add = ["Add", 1];
    P.Add.__enum__ = P;
    P.Multiply = ["Multiply", 2];
    P.Multiply.__enum__ = P;
    P.Screen = ["Screen", 3];
    P.Screen.__enum__ = P;
    P.Mask = ["Mask", 4];
    P.Mask.__enum__ = P;
    P.Copy = ["Copy", 5];
    P.Copy.__enum__ = P;
    var za = function(a, b) {
        null ==
            b && (b = 0);
        null == a && (a = 0);
        this.x = a;
        this.y = b
    };
    e["flambe.math.Point"] = za;
    za.__name__ = ["flambe", "math", "Point"];
    za.prototype = {
        set: function(a, b) {
            this.x = a;
            this.y = b
        },
        distanceTo: function(a, b) {
            return Math.sqrt(this.distanceToSquared(a, b))
        },
        distanceToSquared: function(a, b) {
            var c = this.x - a,
                f = this.y - b;
            return c * c + f * f
        },
        __class__: za
    };
    var r = function() {
        this._viewMatrixUpdateCount = this._parentViewMatrixUpdateCount = 0;
        this.blendMode = this.scissor = this._viewMatrix = null;
        var a = this;
        k.call(this);
        this._flags |= 54;
        this._localMatrix =
            new ja;
        var b = function() {
            a._flags |= 24
        };
        this.x = new F(0, b);
        this.y = new F(0, b);
        this.rotation = new F(0, b);
        this.scaleX = new F(1, b);
        this.scaleY = new F(1, b);
        this.anchorX = new F(0, b);
        this.anchorY = new F(0, b);
        this.alpha = new F(1)
    };
    e["flambe.display.Sprite"] = r;
    r.__name__ = ["flambe", "display", "Sprite"];
    r.hitTest = function(a, b, c) {
        var f = a._compMap.Sprite_4;
        if (null != f) {
            if (6 != (f._flags & 6)) return null;
            f.getLocalMatrix().inverseTransform(b, c, r._scratchPoint) && (b = r._scratchPoint.x, c = r._scratchPoint.y);
            var i = f.scissor;
            if (null !=
                i && !i.contains(b, c)) return null
        }
        a = r.hitTestBackwards(a.firstChild, b, c);
        return null != a ? a : null != f && f.containsLocal(b, c) ? f : null
    };
    r.render = function(a, b) {
        var c = a._compMap.Sprite_4;
        if (null != c) {
            var f = c.alpha._value;
            if (0 == (c._flags & 2) || 0 >= f) return;
            b.save();
            1 > f && b.multiplyAlpha(f);
            null != c.blendMode && b.setBlendMode(c.blendMode);
            var f = c.getLocalMatrix(),
                i = f.m02,
                d = f.m12;
            0 != (c._flags & 32) && (i = Math.round(i), d = Math.round(d));
            b.transform(f.m00, f.m10, f.m01, f.m11, i, d);
            f = c.scissor;
            null != f && b.applyScissor(f.x, f.y, f.width,
                f.height);
            c.draw(b)
        }
        f = a._compMap.PostRender_8;
        null != f && f.call();
        f = a._compMap.Director_7;
        if (null != f) {
            f = f.occludedScenes;
            for (i = 0; i < f.length;) d = f[i], ++i, r.render(d, b)
        }
        for (f = a.firstChild; null != f;) i = f.next, r.render(f, b), f = i;
        null != c && b.restore()
    };
    r.hitTestBackwards = function(a, b, c) {
        if (null != a) {
            var f = r.hitTestBackwards(a.next, b, c);
            return null != f ? f : r.hitTest(a, b, c)
        }
        return null
    };
    r.__super__ = k;
    r.prototype = q(k.prototype, {
        get_name: function() {
            return "Sprite_4"
        },
        getNaturalWidth: function() {
            return 0
        },
        getNaturalHeight: function() {
            return 0
        },
        containsLocal: function(a, b) {
            return 0 <= a && a < this.getNaturalWidth() && 0 <= b && b < this.getNaturalHeight()
        },
        getLocalMatrix: function() {
            0 != (this._flags & 8) && (this._flags &= -9, this._localMatrix.compose(this.x._value, this.y._value, this.scaleX._value, this.scaleY._value, 3.141592653589793 * this.rotation._value / 180), this._localMatrix.translate(-this.anchorX._value, -this.anchorY._value));
            return this._localMatrix
        },
        getViewMatrix: function() {
            if (this.isViewMatrixDirty()) {
                var a = this.getParentSprite();
                this._viewMatrix = null !=
                    a ? ja.multiply(a.getViewMatrix(), this.getLocalMatrix(), this._viewMatrix) : this.getLocalMatrix().clone(this._viewMatrix);
                this._flags &= -17;
                null != a && (this._parentViewMatrixUpdateCount = a._viewMatrixUpdateCount);
                ++this._viewMatrixUpdateCount
            }
            return this._viewMatrix
        },
        setAnchor: function(a, b) {
            this.anchorX.set__(a);
            this.anchorY.set__(b);
            return this
        },
        centerAnchor: function() {
            this.anchorX.set__(this.getNaturalWidth() / 2);
            this.anchorY.set__(this.getNaturalHeight() / 2);
            return this
        },
        setXY: function(a, b) {
            this.x.set__(a);
            this.y.set__(b);
            return this
        },
        setAlpha: function(a) {
            this.alpha.set__(a);
            return this
        },
        setRotation: function(a) {
            this.rotation.set__(a);
            return this
        },
        setScale: function(a) {
            this.scaleX.set__(a);
            this.scaleY.set__(a);
            return this
        },
        setScaleXY: function(a, b) {
            this.scaleX.set__(a);
            this.scaleY.set__(b);
            return this
        },
        onAdded: function() {
            0 != (this._flags & 64) && this.connectHover()
        },
        onRemoved: function() {
            null != this._hoverConnection && (this._hoverConnection.dispose(), this._hoverConnection = null)
        },
        onUpdate: function(a) {
            this.x.update(a);
            this.y.update(a);
            this.rotation.update(a);
            this.scaleX.update(a);
            this.scaleY.update(a);
            this.alpha.update(a);
            this.anchorX.update(a);
            this.anchorY.update(a)
        },
        draw: function() {},
        isViewMatrixDirty: function() {
            if (0 != (this._flags & 16)) return !0;
            var a = this.getParentSprite();
            return null == a ? !1 : this._parentViewMatrixUpdateCount != a._viewMatrixUpdateCount || a.isViewMatrixDirty()
        },
        getParentSprite: function() {
            if (null == this.owner) return null;
            for (var a = this.owner.parent; null != a;) {
                var b = a._compMap.Sprite_4;
                if (null != b) return b;
                a = a.parent
            }
            return null
        },
        get_pointerDown: function() {
            null == this._pointerDown && (this._pointerDown = new D);
            return this._pointerDown
        },
        get_pointerUp: function() {
            null == this._pointerUp && (this._pointerUp = new D);
            return this._pointerUp
        },
        get_pointerOut: function() {
            null == this._pointerOut && (this._pointerOut = new D);
            return this._pointerOut
        },
        connectHover: function() {
            var a = this;
            null == this._hoverConnection && (this._hoverConnection = h._platform.getPointer().move.connect(function(b) {
                for (var c = b.hit; null != c;) {
                    if (c == a) return;
                    c = c.getParentSprite()
                }
                null != a._pointerOut && 0 != (a._flags & 64) && a._pointerOut.emit(b);
                a._flags &= -65;
                a._hoverConnection.dispose();
                a._hoverConnection = null
            }))
        },
        set_visible: function(a) {
            this._flags = nc.set(this._flags, 2, a);
            return a
        },
        set_pointerEnabled: function(a) {
            this._flags = nc.set(this._flags, 4, a);
            return a
        },
        onPointerDown: function(a) {
            this.onHover(a);
            null != this._pointerDown && this._pointerDown.emit(a)
        },
        onPointerMove: function(a) {
            this.onHover(a);
            null != this._pointerMove && this._pointerMove.emit(a)
        },
        onHover: function(a) {
            if (0 ==
                (this._flags & 64) && (this._flags |= 64, null != this._pointerIn || null != this._pointerOut)) null != this._pointerIn && this._pointerIn.emit(a), this.connectHover()
        },
        onPointerUp: function(a) {
            switch (a.source[1]) {
                case 1:
                    null != this._pointerOut && 0 != (this._flags & 64) && this._pointerOut.emit(a), this._flags &= -65, null != this._hoverConnection && (this._hoverConnection.dispose(), this._hoverConnection = null)
            }
            null != this._pointerUp && this._pointerUp.emit(a)
        },
        __class__: r
    });
    var ta = function(a, b, c) {
        r.call(this);
        this.color = a;
        this.width = new F(b);
        this.height = new F(c)
    };
    e["flambe.display.FillSprite"] = ta;
    ta.__name__ = ["flambe", "display", "FillSprite"];
    ta.__super__ = r;
    ta.prototype = q(r.prototype, {
        draw: function(a) {
            a.fillRect(this.color, 0, 0, this.width._value, this.height._value)
        },
        getNaturalWidth: function() {
            return this.width._value
        },
        getNaturalHeight: function() {
            return this.height._value
        },
        setSize: function(a, b) {
            this.width.set__(a);
            this.height.set__(b);
            return this
        },
        onUpdate: function(a) {
            r.prototype.onUpdate.call(this, a);
            this.width.update(a);
            this.height.update(a)
        },
        __class__: ta
    });
    var Fb = function(a) {
        this._kernings = null;
        this.xOffset = this.yOffset = this.xAdvance = 0;
        this.page = null;
        this.x = this.y = this.width = this.height = 0;
        this.charCode = a
    };
    e["flambe.display.Glyph"] = Fb;
    Fb.__name__ = ["flambe", "display", "Glyph"];
    Fb.prototype = {
        draw: function(a, b, c) {
            0 < this.width && a.drawSubTexture(this.page, b + this.xOffset, c + this.yOffset, this.x, this.y, this.width, this.height)
        },
        getKerning: function(a) {
            return null != this._kernings ? x["int"](this._kernings.get(a)) : 0
        },
        setKerning: function(a, b) {
            null == this._kernings &&
                (this._kernings = new da);
            this._kernings.set(a, b)
        },
        __class__: Fb
    };
    var Aa = function(a, b) {
        this.name = b;
        this._pack = a;
        this._file = a.getFile(b + ".fnt");
        this.reload()
    };
    e["flambe.display.Font"] = Aa;
    Aa.__name__ = ["flambe", "display", "Font"];
    Aa.prototype = {
        layoutText: function(a, b, c, f, i) {
            null == i && (i = 0);
            null == f && (f = 0);
            null == c && (c = 0);
            null == b && (b = ua.Left);
            return new Ka(this, a, b, c, f, i)
        },
        reload: function() {
            this._glyphs = new da;
            this._glyphs.set(Aa.NEWLINE.charCode, Aa.NEWLINE);
            for (var a = new Wa(this._file.toString()), b = new da,
                    c = this.name.lastIndexOf("/"), c = 0 <= c ? z.substr(this.name, 0, c + 1) : "", f = a.keywords(); f.hasNext();) switch (f.next()) {
                case "info":
                    for (var i = a.pairs(); i.hasNext();) {
                        var d = i.next();
                        switch (d.key) {
                            case "size":
                                this.size = d.getInt()
                        }
                    }
                    break;
                case "common":
                    for (i = a.pairs(); i.hasNext();) switch (d = i.next(), d.key) {
                        case "lineHeight":
                            this.lineHeight = d.getInt()
                    }
                    break;
                case "page":
                    for (var i = 0, d = null, e = a.pairs(); e.hasNext();) {
                        var g = e.next();
                        switch (g.key) {
                            case "id":
                                i = g.getInt();
                                break;
                            case "file":
                                d = g.getString()
                        }
                    }
                    d = this._pack.getTexture(c +
                        T.removeFileExtension(d));
                    b.set(i, d);
                    break;
                case "char":
                    i = null;
                    for (d = a.pairs(); d.hasNext();) switch (e = d.next(), e.key) {
                        case "id":
                            i = new Fb(e.getInt());
                            break;
                        case "x":
                            i.x = e.getInt();
                            break;
                        case "y":
                            i.y = e.getInt();
                            break;
                        case "width":
                            i.width = e.getInt();
                            break;
                        case "height":
                            i.height = e.getInt();
                            break;
                        case "page":
                            e = e.getInt();
                            i.page = b.get(e);
                            break;
                        case "xoffset":
                            i.xOffset = e.getInt();
                            break;
                        case "yoffset":
                            i.yOffset = e.getInt();
                            break;
                        case "xadvance":
                            i.xAdvance = e.getInt()
                    }
                    this._glyphs.set(i.charCode, i);
                    break;
                case "kerning":
                    i =
                        null;
                    e = d = 0;
                    for (g = a.pairs(); g.hasNext();) {
                        var h = g.next();
                        switch (h.key) {
                            case "first":
                                i = this._glyphs.get(h.getInt());
                                break;
                            case "second":
                                d = h.getInt();
                                break;
                            case "amount":
                                e = h.getInt()
                        }
                    }
                    null != i && 0 != e && i.setKerning(d, e)
            }
        },
        __class__: Aa
    };
    var ua = e["flambe.display.TextAlign"] = {
        __ename__: ["flambe", "display", "TextAlign"],
        __constructs__: ["Left", "Center", "Right"]
    };
    ua.Left = ["Left", 0];
    ua.Left.__enum__ = ua;
    ua.Center = ["Center", 1];
    ua.Center.__enum__ = ua;
    ua.Right = ["Right", 2];
    ua.Right.__enum__ = ua;
    var Ka = function(a, b, c,
        f, i, d) {
        this.lines = 0;
        var e = this;
        this._font = a;
        this._glyphs = [];
        this._offsets = [];
        this._lineOffset = Math.round(a.lineHeight + d);
        this.bounds = new Xa;
        for (var g = [], d = b.length, h = 0; h < d;) {
            var j = h++,
                j = b.charCodeAt(j),
                j = a._glyphs.get(j);
            null != j ? this._glyphs.push(j) : null
        }
        for (var b = -1, l = 0, m = 0, a = a._glyphs.get(10), d = function() {
                e.bounds.width = ka.max(e.bounds.width, l);
                e.bounds.height += m;
                g[e.lines] = l;
                m = l = 0;
                ++e.lines
            }, h = 0; h < this._glyphs.length;) {
            j = this._glyphs[h];
            this._offsets[h] = Math.round(l);
            var o = 0 < f && l + j.width > f;
            o ||
                j == a ? (o && (0 <= b ? (this._glyphs[b] = a, l = this._offsets[b], h = b) : this._glyphs.splice(h, 0, a)), b = -1, m = this._lineOffset, d()) : (32 == j.charCode && (b = h), l += j.xAdvance + i, m = ka.max(m, j.height + j.yOffset), h + 1 < this._glyphs.length && (l += j.getKerning(this._glyphs[h + 1].charCode)));
            ++h
        }
        d();
        i = 0;
        a = Ka.getAlignOffset(c, g[0], f);
        b = 1.79769313486231E308;
        d = -1.79769313486231E308;
        j = h = 0;
        for (o = this._glyphs.length; j < o;) {
            var n = this._glyphs[j];
            10 == n.charCode && (i += this._lineOffset, ++h, a = Ka.getAlignOffset(c, g[h], f));
            this._offsets[j] += a;
            var k =
                i + n.yOffset;
            b < k || (b = k);
            d = ka.max(d, k + n.height);
            ++j
        }
        this.bounds.x = Ka.getAlignOffset(c, this.bounds.width, f);
        this.bounds.y = b;
        this.bounds.height = d - b
    };
    e["flambe.display.TextLayout"] = Ka;
    Ka.__name__ = ["flambe", "display", "TextLayout"];
    Ka.getAlignOffset = function(a, b, c) {
        switch (a[1]) {
            case 0:
                return 0;
            case 2:
                return c - b;
            case 1:
                return Math.round((c - b) / 2)
        }
    };
    Ka.prototype = {
        draw: function(a) {
            for (var b = 0, c = 0, f = this._glyphs.length; c < f;) {
                var i = this._glyphs[c];
                10 == i.charCode ? b += this._lineOffset : i.draw(a, this._offsets[c], b);
                ++c
            }
        },
        __class__: Ka
    };
    var Wa = function(a) {
        this._configText = a;
        this._keywordPattern = new sa("([A-Za-z]+)(.*)", "");
        this._pairPattern = new sa('([A-Za-z]+)=("[^"]*"|[^\\s]+)', "")
    };
    e["flambe.display._Font.ConfigParser"] = Wa;
    Wa.__name__ = ["flambe", "display", "_Font", "ConfigParser"];
    Wa.advance = function(a, b) {
        var c = b.matchedPos();
        return z.substr(a, c.pos + c.len, a.length)
    };
    Wa.prototype = {
        keywords: function() {
            var a = this,
                b = this._configText;
            return {
                next: function() {
                    b = Wa.advance(b, a._keywordPattern);
                    a._pairText = a._keywordPattern.matched(2);
                    return a._keywordPattern.matched(1)
                },
                hasNext: function() {
                    return a._keywordPattern.match(b)
                }
            }
        },
        pairs: function() {
            var a = this,
                b = this._pairText;
            return {
                next: function() {
                    b = Wa.advance(b, a._pairPattern);
                    return new oc(a._pairPattern.matched(1), a._pairPattern.matched(2))
                },
                hasNext: function() {
                    return a._pairPattern.match(b)
                }
            }
        },
        __class__: Wa
    };
    var oc = function(a, b) {
        this.key = a;
        this._value = b
    };
    e["flambe.display._Font.ConfigPair"] = oc;
    oc.__name__ = ["flambe", "display", "_Font", "ConfigPair"];
    oc.prototype = {
        getInt: function() {
            return x.parseInt(this._value)
        },
        getString: function() {
            return 34 != this._value.charCodeAt(0) ? null : z.substr(this._value, 1, this._value.length - 2)
        },
        __class__: oc
    };
    var pc = function() {};
    e["flambe.display.Graphics"] = pc;
    pc.__name__ = ["flambe", "display", "Graphics"];
    pc.prototype = {
        __class__: pc
    };
    var la = function(a) {
        r.call(this);
        this.texture = a
    };
    e["flambe.display.ImageSprite"] = la;
    la.__name__ = ["flambe", "display", "ImageSprite"];
    la.__super__ = r;
    la.prototype = q(r.prototype, {
        draw: function(a) {
            null != this.texture && a.drawTexture(this.texture, 0, 0)
        },
        getNaturalWidth: function() {
            return null !=
                this.texture ? this.texture.get_width() : 0
        },
        getNaturalHeight: function() {
            return null != this.texture ? this.texture.get_height() : 0
        },
        __class__: la
    });
    var pa = e["flambe.display.Orientation"] = {
        __ename__: ["flambe", "display", "Orientation"],
        __constructs__: ["Portrait", "Landscape"]
    };
    pa.Portrait = ["Portrait", 0];
    pa.Portrait.__enum__ = pa;
    pa.Landscape = ["Landscape", 1];
    pa.Landscape.__enum__ = pa;
    var Ba = function(a, b, c) {
        null == c && (c = -1);
        null == b && (b = -1);
        r.call(this);
        this.texture = a;
        0 > b && (b = null != a ? a.get_width() : 0);
        this.width = new F(b);
        0 > c && (c = null != a ? a.get_height() : 0);
        this.height = new F(c)
    };
    e["flambe.display.PatternSprite"] = Ba;
    Ba.__name__ = ["flambe", "display", "PatternSprite"];
    Ba.__super__ = r;
    Ba.prototype = q(r.prototype, {
        draw: function(a) {
            null != this.texture && a.drawPattern(this.texture, 0, 0, this.width._value, this.height._value)
        },
        getNaturalWidth: function() {
            return this.width._value
        },
        getNaturalHeight: function() {
            return this.height._value
        },
        setSize: function(a, b) {
            this.width.set__(a);
            this.height.set__(b);
            return this
        },
        onUpdate: function(a) {
            r.prototype.onUpdate.call(this,
                a);
            this.width.update(a);
            this.height.update(a)
        },
        __class__: Ba
    });
    var Gb = function() {};
    e["flambe.display.Texture"] = Gb;
    Gb.__name__ = ["flambe", "display", "Texture"];
    Gb.__interfaces__ = [Ja];
    Gb.prototype = {
        __class__: Gb
    };
    var Sc = function() {};
    e["flambe.display.SubTexture"] = Sc;
    Sc.__name__ = ["flambe", "display", "SubTexture"];
    Sc.__interfaces__ = [Gb];
    var La = function(a, b) {
        null == b && (b = "");
        this._layout = null;
        var c = this;
        r.call(this);
        this._font = a;
        this._text = b;
        this._align = ua.Left;
        this._flags |= 128;
        var f = function() {
            c._flags |= 128
        };
        this.wrapWidth = new F(0, f);
        this.letterSpacing = new F(0, f);
        this.lineSpacing = new F(0, f)
    };
    e["flambe.display.TextSprite"] = La;
    La.__name__ = ["flambe", "display", "TextSprite"];
    La.__super__ = r;
    La.prototype = q(r.prototype, {
        draw: function(a) {
            this.updateLayout();
            this._layout.draw(a)
        },
        getNaturalWidth: function() {
            this.updateLayout();
            return 0 < this.wrapWidth._value ? this.wrapWidth._value : this._layout.bounds.width
        },
        getNaturalHeight: function() {
            this.updateLayout();
            var a = this._layout.lines * (this._font.lineHeight + this.lineSpacing._value),
                b = this._layout.bounds.height;
            return a > b ? a : b
        },
        containsLocal: function(a, b) {
            this.updateLayout();
            return this._layout.bounds.contains(a, b)
        },
        setLetterSpacing: function(a) {
            this.letterSpacing.set__(a);
            return this
        },
        set_text: function(a) {
            a != this._text && (this._text = a, this._flags |= 128);
            return a
        },
        updateLayout: function() {
            0 != (this._flags & 128) && (this._flags &= -129, this._layout = this._font.layoutText(this._text, this._align, this.wrapWidth._value, this.letterSpacing._value, this.lineSpacing._value))
        },
        onUpdate: function(a) {
            r.prototype.onUpdate.call(this,
                a);
            this.wrapWidth.update(a);
            this.letterSpacing.update(a);
            this.lineSpacing.update(a)
        },
        __class__: La
    });
    var d = e["flambe.input.Key"] = {
        __ename__: ["flambe", "input", "Key"],
        __constructs__: "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,Number0,Number1,Number2,Number3,Number4,Number5,Number6,Number7,Number8,Number9,Numpad0,Numpad1,Numpad2,Numpad3,Numpad4,Numpad5,Numpad6,Numpad7,Numpad8,Numpad9,NumpadAdd,NumpadDecimal,NumpadDivide,NumpadEnter,NumpadMultiply,NumpadSubtract,F1,F2,F3,F4,F5,F6,F7,F8,F9,F10,F11,F12,F13,F14,F15,Left,Up,Right,Down,Alt,Backquote,Backslash,Backspace,CapsLock,Comma,Command,Control,Delete,End,Enter,Equals,Escape,Home,Insert,LeftBracket,Minus,PageDown,PageUp,Period,Quote,RightBracket,Semicolon,Shift,Slash,Space,Tab,Menu,Search,Unknown".split(",")
    };
    d.A = ["A", 0];
    d.A.__enum__ = d;
    d.B = ["B", 1];
    d.B.__enum__ = d;
    d.C = ["C", 2];
    d.C.__enum__ = d;
    d.D = ["D", 3];
    d.D.__enum__ = d;
    d.E = ["E", 4];
    d.E.__enum__ = d;
    d.F = ["F", 5];
    d.F.__enum__ = d;
    d.G = ["G", 6];
    d.G.__enum__ = d;
    d.H = ["H", 7];
    d.H.__enum__ = d;
    d.I = ["I", 8];
    d.I.__enum__ = d;
    d.J = ["J", 9];
    d.J.__enum__ = d;
    d.K = ["K", 10];
    d.K.__enum__ = d;
    d.L = ["L", 11];
    d.L.__enum__ = d;
    d.M = ["M", 12];
    d.M.__enum__ = d;
    d.N = ["N", 13];
    d.N.__enum__ = d;
    d.O = ["O", 14];
    d.O.__enum__ = d;
    d.P = ["P", 15];
    d.P.__enum__ = d;
    d.Q = ["Q", 16];
    d.Q.__enum__ = d;
    d.R = ["R", 17];
    d.R.__enum__ = d;
    d.S = ["S",
        18
    ];
    d.S.__enum__ = d;
    d.T = ["T", 19];
    d.T.__enum__ = d;
    d.U = ["U", 20];
    d.U.__enum__ = d;
    d.V = ["V", 21];
    d.V.__enum__ = d;
    d.W = ["W", 22];
    d.W.__enum__ = d;
    d.X = ["X", 23];
    d.X.__enum__ = d;
    d.Y = ["Y", 24];
    d.Y.__enum__ = d;
    d.Z = ["Z", 25];
    d.Z.__enum__ = d;
    d.Number0 = ["Number0", 26];
    d.Number0.__enum__ = d;
    d.Number1 = ["Number1", 27];
    d.Number1.__enum__ = d;
    d.Number2 = ["Number2", 28];
    d.Number2.__enum__ = d;
    d.Number3 = ["Number3", 29];
    d.Number3.__enum__ = d;
    d.Number4 = ["Number4", 30];
    d.Number4.__enum__ = d;
    d.Number5 = ["Number5", 31];
    d.Number5.__enum__ = d;
    d.Number6 = ["Number6", 32];
    d.Number6.__enum__ = d;
    d.Number7 = ["Number7", 33];
    d.Number7.__enum__ = d;
    d.Number8 = ["Number8", 34];
    d.Number8.__enum__ = d;
    d.Number9 = ["Number9", 35];
    d.Number9.__enum__ = d;
    d.Numpad0 = ["Numpad0", 36];
    d.Numpad0.__enum__ = d;
    d.Numpad1 = ["Numpad1", 37];
    d.Numpad1.__enum__ = d;
    d.Numpad2 = ["Numpad2", 38];
    d.Numpad2.__enum__ = d;
    d.Numpad3 = ["Numpad3", 39];
    d.Numpad3.__enum__ = d;
    d.Numpad4 = ["Numpad4", 40];
    d.Numpad4.__enum__ = d;
    d.Numpad5 = ["Numpad5", 41];
    d.Numpad5.__enum__ = d;
    d.Numpad6 = ["Numpad6", 42];
    d.Numpad6.__enum__ = d;
    d.Numpad7 = ["Numpad7", 43];
    d.Numpad7.__enum__ = d;
    d.Numpad8 = ["Numpad8", 44];
    d.Numpad8.__enum__ = d;
    d.Numpad9 = ["Numpad9", 45];
    d.Numpad9.__enum__ = d;
    d.NumpadAdd = ["NumpadAdd", 46];
    d.NumpadAdd.__enum__ = d;
    d.NumpadDecimal = ["NumpadDecimal", 47];
    d.NumpadDecimal.__enum__ = d;
    d.NumpadDivide = ["NumpadDivide", 48];
    d.NumpadDivide.__enum__ = d;
    d.NumpadEnter = ["NumpadEnter", 49];
    d.NumpadEnter.__enum__ = d;
    d.NumpadMultiply = ["NumpadMultiply", 50];
    d.NumpadMultiply.__enum__ = d;
    d.NumpadSubtract = ["NumpadSubtract", 51];
    d.NumpadSubtract.__enum__ = d;
    d.F1 = ["F1", 52];
    d.F1.__enum__ = d;
    d.F2 = ["F2", 53];
    d.F2.__enum__ = d;
    d.F3 = ["F3", 54];
    d.F3.__enum__ = d;
    d.F4 = ["F4", 55];
    d.F4.__enum__ = d;
    d.F5 = ["F5", 56];
    d.F5.__enum__ = d;
    d.F6 = ["F6", 57];
    d.F6.__enum__ = d;
    d.F7 = ["F7", 58];
    d.F7.__enum__ = d;
    d.F8 = ["F8", 59];
    d.F8.__enum__ = d;
    d.F9 = ["F9", 60];
    d.F9.__enum__ = d;
    d.F10 = ["F10", 61];
    d.F10.__enum__ = d;
    d.F11 = ["F11", 62];
    d.F11.__enum__ = d;
    d.F12 = ["F12", 63];
    d.F12.__enum__ = d;
    d.F13 = ["F13", 64];
    d.F13.__enum__ = d;
    d.F14 = ["F14", 65];
    d.F14.__enum__ = d;
    d.F15 = ["F15", 66];
    d.F15.__enum__ = d;
    d.Left = ["Left", 67];
    d.Left.__enum__ =
        d;
    d.Up = ["Up", 68];
    d.Up.__enum__ = d;
    d.Right = ["Right", 69];
    d.Right.__enum__ = d;
    d.Down = ["Down", 70];
    d.Down.__enum__ = d;
    d.Alt = ["Alt", 71];
    d.Alt.__enum__ = d;
    d.Backquote = ["Backquote", 72];
    d.Backquote.__enum__ = d;
    d.Backslash = ["Backslash", 73];
    d.Backslash.__enum__ = d;
    d.Backspace = ["Backspace", 74];
    d.Backspace.__enum__ = d;
    d.CapsLock = ["CapsLock", 75];
    d.CapsLock.__enum__ = d;
    d.Comma = ["Comma", 76];
    d.Comma.__enum__ = d;
    d.Command = ["Command", 77];
    d.Command.__enum__ = d;
    d.Control = ["Control", 78];
    d.Control.__enum__ = d;
    d.Delete = ["Delete", 79];
    d.Delete.__enum__ = d;
    d.End = ["End", 80];
    d.End.__enum__ = d;
    d.Enter = ["Enter", 81];
    d.Enter.__enum__ = d;
    d.Equals = ["Equals", 82];
    d.Equals.__enum__ = d;
    d.Escape = ["Escape", 83];
    d.Escape.__enum__ = d;
    d.Home = ["Home", 84];
    d.Home.__enum__ = d;
    d.Insert = ["Insert", 85];
    d.Insert.__enum__ = d;
    d.LeftBracket = ["LeftBracket", 86];
    d.LeftBracket.__enum__ = d;
    d.Minus = ["Minus", 87];
    d.Minus.__enum__ = d;
    d.PageDown = ["PageDown", 88];
    d.PageDown.__enum__ = d;
    d.PageUp = ["PageUp", 89];
    d.PageUp.__enum__ = d;
    d.Period = ["Period", 90];
    d.Period.__enum__ = d;
    d.Quote = ["Quote", 91];
    d.Quote.__enum__ = d;
    d.RightBracket = ["RightBracket", 92];
    d.RightBracket.__enum__ = d;
    d.Semicolon = ["Semicolon", 93];
    d.Semicolon.__enum__ = d;
    d.Shift = ["Shift", 94];
    d.Shift.__enum__ = d;
    d.Slash = ["Slash", 95];
    d.Slash.__enum__ = d;
    d.Space = ["Space", 96];
    d.Space.__enum__ = d;
    d.Tab = ["Tab", 97];
    d.Tab.__enum__ = d;
    d.Menu = ["Menu", 98];
    d.Menu.__enum__ = d;
    d.Search = ["Search", 99];
    d.Search.__enum__ = d;
    d.Unknown = function(a) {
        a = ["Unknown", 100, a];
        a.__enum__ = d;
        return a
    };
    var qc = function() {
        this.init(0, null)
    };
    e["flambe.input.KeyboardEvent"] =
        qc;
    qc.__name__ = ["flambe", "input", "KeyboardEvent"];
    qc.prototype = {
        init: function(a, b) {
            this.id = a;
            this.key = b
        },
        __class__: qc
    };
    var Z = e["flambe.input.MouseButton"] = {
        __ename__: ["flambe", "input", "MouseButton"],
        __constructs__: ["Left", "Middle", "Right", "Unknown"]
    };
    Z.Left = ["Left", 0];
    Z.Left.__enum__ = Z;
    Z.Middle = ["Middle", 1];
    Z.Middle.__enum__ = Z;
    Z.Right = ["Right", 2];
    Z.Right.__enum__ = Z;
    Z.Unknown = function(a) {
        a = ["Unknown", 3, a];
        a.__enum__ = Z;
        return a
    };
    var Ca = e["flambe.input.MouseCursor"] = {
        __ename__: ["flambe", "input", "MouseCursor"],
        __constructs__: ["Default", "Button", "None"]
    };
    Ca.Default = ["Default", 0];
    Ca.Default.__enum__ = Ca;
    Ca.Button = ["Button", 1];
    Ca.Button.__enum__ = Ca;
    Ca.None = ["None", 2];
    Ca.None.__enum__ = Ca;
    var rc = function() {
        this.init(0, 0, 0, null)
    };
    e["flambe.input.MouseEvent"] = rc;
    rc.__name__ = ["flambe", "input", "MouseEvent"];
    rc.prototype = {
        init: function(a, b, c, f) {
            this.id = a;
            this.viewX = b;
            this.viewY = c;
            this.button = f
        },
        __class__: rc
    };
    var Hb = e["flambe.input.EventSource"] = {
        __ename__: ["flambe", "input", "EventSource"],
        __constructs__: ["Mouse", "Touch"]
    };
    Hb.Mouse = function(a) {
        a = ["Mouse", 0, a];
        a.__enum__ = Hb;
        return a
    };
    Hb.Touch = function(a) {
        a = ["Touch", 1, a];
        a.__enum__ = Hb;
        return a
    };
    var sc = function() {
        this.init(0, 0, 0, null, null)
    };
    e["flambe.input.PointerEvent"] = sc;
    sc.__name__ = ["flambe", "input", "PointerEvent"];
    sc.prototype = {
        init: function(a, b, c, f, i) {
            this.id = a;
            this.viewX = b;
            this.viewY = c;
            this.hit = f;
            this.source = i;
            this._stopped = !1
        },
        __class__: sc
    };
    var tc = function(a) {
        this.id = a;
        this._source = Hb.Touch(this)
    };
    e["flambe.input.TouchPoint"] = tc;
    tc.__name__ = ["flambe", "input", "TouchPoint"];
    tc.prototype = {
        init: function(a, b) {
            this.viewX = a;
            this.viewY = b
        },
        __class__: tc
    };
    var ka = function() {};
    e["flambe.math.FMath"] = ka;
    ka.__name__ = ["flambe", "math", "FMath"];
    ka.max = function(a, b) {
        return a > b ? a : b
    };
    ka.min = function(a, b) {
        return a < b ? a : b
    };
    var ja = function() {
        this.identity()
    };
    e["flambe.math.Matrix"] = ja;
    ja.__name__ = ["flambe", "math", "Matrix"];
    ja.multiply = function(a, b, c) {
        null == c && (c = new ja);
        var f = a.m00 * b.m00 + a.m01 * b.m10,
            i = a.m00 * b.m01 + a.m01 * b.m11,
            d = a.m00 * b.m02 + a.m01 * b.m12 + a.m02;
        c.m00 = f;
        c.m01 = i;
        c.m02 = d;
        f = a.m10 *
            b.m00 + a.m11 * b.m10;
        i = a.m10 * b.m01 + a.m11 * b.m11;
        d = a.m10 * b.m02 + a.m11 * b.m12 + a.m12;
        c.m10 = f;
        c.m11 = i;
        c.m12 = d;
        return c
    };
    ja.prototype = {
        set: function(a, b, c, f, i, d) {
            this.m00 = a;
            this.m01 = c;
            this.m02 = i;
            this.m10 = b;
            this.m11 = f;
            this.m12 = d
        },
        identity: function() {
            this.set(1, 0, 0, 1, 0, 0)
        },
        compose: function(a, b, c, f, i) {
            var d = Math.sin(i),
                i = Math.cos(i);
            this.set(i * c, d * c, -d * f, i * f, a, b)
        },
        translate: function(a, b) {
            this.m02 += this.m00 * a + this.m01 * b;
            this.m12 += this.m11 * b + this.m10 * a
        },
        invert: function() {
            var a = this.determinant();
            if (0 == a) return !1;
            this.set(this.m11 / a, -this.m01 / a, -this.m10 / a, this.m00 / a, (this.m01 * this.m12 - this.m11 * this.m02) / a, (this.m10 * this.m02 - this.m00 * this.m12) / a);
            return !0
        },
        transform: function(a, b, c) {
            null == c && (c = new za);
            c.x = a * this.m00 + b * this.m01 + this.m02;
            c.y = a * this.m10 + b * this.m11 + this.m12;
            return c
        },
        transformArray: function(a, b, c) {
            for (var f = 0; f < b;) {
                var i = a[f],
                    d = a[f + 1];
                c[f++] = i * this.m00 + d * this.m01 + this.m02;
                c[f++] = i * this.m10 + d * this.m11 + this.m12
            }
        },
        determinant: function() {
            return this.m00 * this.m11 - this.m01 * this.m10
        },
        inverseTransform: function(a,
            b, c) {
            var f = this.determinant();
            if (0 == f) return !1;
            a -= this.m02;
            b -= this.m12;
            c.x = (a * this.m11 - b * this.m01) / f;
            c.y = (b * this.m00 - a * this.m10) / f;
            return !0
        },
        clone: function(a) {
            null == a && (a = new ja);
            a.set(this.m00, this.m10, this.m01, this.m11, this.m02, this.m12);
            return a
        },
        __class__: ja
    };
    var Xa = function(a, b, c, f) {
        null == f && (f = 0);
        null == c && (c = 0);
        null == b && (b = 0);
        null == a && (a = 0);
        this.set(a, b, c, f)
    };
    e["flambe.math.Rectangle"] = Xa;
    Xa.__name__ = ["flambe", "math", "Rectangle"];
    Xa.prototype = {
        set: function(a, b, c, f) {
            this.x = a;
            this.y = b;
            this.width =
                c;
            this.height = f
        },
        contains: function(a, b) {
            a -= this.x;
            if (0 <= this.width) {
                if (0 > a || a > this.width) return !1
            } else if (0 < a || a < this.width) return !1;
            b -= this.y;
            if (0 <= this.height) {
                if (0 > b || b > this.height) return !1
            } else if (0 < b || b < this.height) return !1;
            return !0
        },
        clone: function(a) {
            null == a && (a = new Xa);
            a.set(this.x, this.y, this.width, this.height);
            return a
        },
        equals: function(a) {
            return this.x == a.x && this.y == a.y && this.width == a.width && this.height == a.height
        },
        __class__: Xa
    };
    var Q = function() {
        this._disposed = !1
    };
    e["flambe.platform.BasicAsset"] =
        Q;
    Q.__name__ = ["flambe", "platform", "BasicAsset"];
    Q.__interfaces__ = [Ja];
    Q.prototype = {
        dispose: function() {
            this._disposed || (this._disposed = !0, this.onDisposed())
        },
        onDisposed: function() {
            null
        },
        __class__: Q
    };
    var Ma = function(a, b) {
        var c = this;
        this.manifest = b;
        this._platform = a;
        this.promise = new Ib;
        this._bytesLoaded = new X;
        this._pack = new Jb(b, this);
        var f = tb.array(b);
        if (0 == f.length) this.handleSuccess();
        else {
            for (var i = new X, d = 0; d < f.length;) {
                var e = f[d];
                ++d;
                var g = i.get(e.name);
                null == g && (g = [], i.set(e.name, g));
                g.push(e)
            }
            this._assetsRemaining =
                tb.count(i);
            for (f = i.iterator(); f.hasNext();) i = [f.next()], this.pickBestEntry(i[0], function(a) {
                return function(f) {
                    if (null != f) {
                        var i = b.getFullURL(f);
                        try {
                            c.loadEntry(i, f)
                        } catch (d) {
                            c.handleError(f, "Unexpected error: " + x.string(d))
                        }
                        i = c.promise;
                        i.set_total(i._total + f.bytes)
                    } else f = a[0][0], Ma.isAudio(f.format) ? c.handleLoad(f, ea.getInstance()) : c.handleError(f, "Could not find a supported format to load")
                }
            }(i))
        }
    };
    e["flambe.platform.BasicAssetPackLoader"] = Ma;
    Ma.__name__ = ["flambe", "platform", "BasicAssetPackLoader"];
    Ma.isAudio = function(a) {
        switch (a[1]) {
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
                return !0;
            default:
                return !1
        }
    };
    Ma.prototype = {
        onDisposed: function() {},
        pickBestEntry: function(a, b) {
            this.getAssetFormats(function(c) {
                for (var f = 0; f < c.length;) {
                    var i = c[f];
                    ++f;
                    for (var d = 0; d < a.length;) {
                        var e = a[d];
                        ++d;
                        if (e.format == i) {
                            b(e);
                            return
                        }
                    }
                }
                b(null)
            })
        },
        loadEntry: function() {
            null
        },
        getAssetFormats: function() {
            null
        },
        handleLoad: function(a, b) {
            if (!this._pack.disposed) {
                this.handleProgress(a, a.bytes);
                var c;
                switch (a.format[1]) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                        c =
                            this._pack.textures;
                        break;
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                        c = this._pack.sounds;
                        break;
                    case 13:
                        c = this._pack.files
                }
                c.set(a.name, b);
                this._assetsRemaining -= 1;
                0 == this._assetsRemaining && this.handleSuccess()
            }
        },
        handleProgress: function(a, b) {
            this._bytesLoaded.set(a.name, b);
            for (var c = 0, f = this._bytesLoaded.iterator(); f.hasNext();) var i = f.next(),
                c = c + i;
            this.promise.set_progress(c)
        },
        handleSuccess: function() {
            this.promise.set_result(this._pack)
        },
        handleError: function(a, b) {
            this.promise.error.emit(T.withFields(b, ["url", a.url]))
        },
        handleTextureError: function(a) {
            this.handleError(a, "Failed to create texture. Is the GPU context unavailable?")
        },
        __class__: Ma
    };
    var Jb = function(a, b) {
        this.disposed = !1;
        this._manifest = a;
        this.loader = b;
        this.textures = new X;
        this.sounds = new X;
        this.files = new X
    };
    e["flambe.platform._BasicAssetPackLoader.BasicAssetPack"] = Jb;
    Jb.__name__ = ["flambe", "platform", "_BasicAssetPackLoader", "BasicAssetPack"];
    Jb.__interfaces__ = [Db];
    Jb.prototype = {
        getTexture: function(a, b) {
            null == b && (b = !0);
            var c = this.textures.get(a);
            if (null == c && b) throw T.withFields("Missing texture", ["name", a]);
            return c
        },
        getSound: function(a, b) {
            null == b && (b = !0);
            var c = this.sounds.get(a);
            if (null == c && b) throw T.withFields("Missing sound", ["name", a]);
            return c
        },
        getFile: function(a, b) {
            null == b && (b = !0);
            var c = this.files.get(a);
            if (null == c && b) throw T.withFields("Missing file", ["name", a]);
            return c
        },
        dispose: function() {
            if (!this.disposed) {
                this.disposed = !0;
                for (var a = this.textures.iterator(); a.hasNext();) a.next().dispose();
                this.textures = null;
                for (a = this.sounds.iterator(); a.hasNext();) a.next().dispose();
                this.sounds = null;
                for (a = this.files.iterator(); a.hasNext();) a.next().dispose();
                this.files = null;
                this.loader.onDisposed()
            }
        },
        __class__: Jb
    };
    var gb = function(a) {
        this._disposed = !1;
        this._content = a
    };
    e["flambe.platform.BasicFile"] = gb;
    gb.__name__ = ["flambe", "platform", "BasicFile"];
    gb.__interfaces__ = [Eb];
    gb.__super__ = Q;
    gb.prototype = q(Q.prototype, {
        toString: function() {
            return this._content
        },
        onDisposed: function() {
            this._content = null
        },
        __class__: gb
    });
    var uc = function() {};
    e["flambe.subsystem.KeyboardSystem"] = uc;
    uc.__name__ = ["flambe", "subsystem", "KeyboardSystem"];
    uc.prototype = {
        __class__: uc
    };
    var ia = function() {
        this.down = new D;
        this.up = new D;
        this.backButton = new Da;
        this._keyStates = new da
    };
    e["flambe.platform.BasicKeyboard"] = ia;
    ia.__name__ = ["flambe", "platform", "BasicKeyboard"];
    ia.__interfaces__ = [uc];
    ia.prototype = {
        submitDown: function(a) {
            if (16777238 == a) return null != this.backButton._head ? (this.backButton.emit(), !0) : !1;
            this._keyStates.exists(a) || (this._keyStates.set(a, !0), ia._sharedEvent.init(ia._sharedEvent.id + 1, vc.toKey(a)),
                this.down.emit(ia._sharedEvent));
            return !0
        },
        submitUp: function(a) {
            this._keyStates.exists(a) && (this._keyStates.remove(a), ia._sharedEvent.init(ia._sharedEvent.id + 1, vc.toKey(a)), this.up.emit(ia._sharedEvent))
        },
        __class__: ia
    };
    var wc = function() {};
    e["flambe.subsystem.MouseSystem"] = wc;
    wc.__name__ = ["flambe", "subsystem", "MouseSystem"];
    wc.prototype = {
        __class__: wc
    };
    var $ = function(a) {
        this._pointer = a;
        this._source = Hb.Mouse($._sharedEvent);
        this.down = new D;
        this.move = new D;
        this.up = new D;
        this.scroll = new D;
        this._y = this._x =
            0;
        this._cursor = Ca.Default;
        this._buttonStates = new da
    };
    e["flambe.platform.BasicMouse"] = $;
    $.__name__ = ["flambe", "platform", "BasicMouse"];
    $.__interfaces__ = [wc];
    $.prototype = {
        get_supported: function() {
            return !0
        },
        submitDown: function(a, b, c) {
            this._buttonStates.exists(c) || (this._buttonStates.set(c, !0), this.prepare(a, b, xc.toButton(c)), this._pointer.submitDown(a, b, this._source), this.down.emit($._sharedEvent))
        },
        submitMove: function(a, b) {
            this.prepare(a, b, null);
            this._pointer.submitMove(a, b, this._source);
            this.move.emit($._sharedEvent)
        },
        submitUp: function(a, b, c) {
            this._buttonStates.exists(c) && (this._buttonStates.remove(c), this.prepare(a, b, xc.toButton(c)), this._pointer.submitUp(a, b, this._source), this.up.emit($._sharedEvent))
        },
        submitScroll: function(a, b, c) {
            this._x = a;
            this._y = b;
            if (null == this.scroll._head) return !1;
            this.scroll.emit(c);
            return !0
        },
        prepare: function(a, b, c) {
            this._x = a;
            this._y = b;
            $._sharedEvent.init($._sharedEvent.id + 1, a, b, c)
        },
        __class__: $
    };
    var yc = function() {};
    e["flambe.subsystem.PointerSystem"] = yc;
    yc.__name__ = ["flambe", "subsystem",
        "PointerSystem"
    ];
    yc.prototype = {
        __class__: yc
    };
    var R = function(a, b, c) {
        null == c && (c = !1);
        null == b && (b = 0);
        null == a && (a = 0);
        this.down = new D;
        this.move = new D;
        this.up = new D;
        this._x = a;
        this._y = b;
        this._isDown = c
    };
    e["flambe.platform.BasicPointer"] = R;
    R.__name__ = ["flambe", "platform", "BasicPointer"];
    R.__interfaces__ = [yc];
    R.prototype = {
        submitDown: function(a, b, c) {
            if (!this._isDown) {
                this.submitMove(a, b, c);
                this._isDown = !0;
                var f = [],
                    i = r.hitTest(h.root, a, b);
                if (null != i) {
                    var d = i.owner;
                    do {
                        var e = d._compMap.Sprite_4;
                        null != e && f.push(e);
                        d = d.parent
                    } while (null != d)
                }
                this.prepare(a, b, i, c);
                for (a = 0; a < f.length;)
                    if (b = f[a], ++a, b.onPointerDown(R._sharedEvent), R._sharedEvent._stopped) return;
                this.down.emit(R._sharedEvent)
            }
        },
        submitMove: function(a, b, c) {
            if (!(a == this._x && b == this._y)) {
                var f = [],
                    i = r.hitTest(h.root, a, b);
                if (null != i) {
                    var d = i.owner;
                    do {
                        var e = d._compMap.Sprite_4;
                        null != e && f.push(e);
                        d = d.parent
                    } while (null != d)
                }
                this.prepare(a, b, i, c);
                for (a = 0; a < f.length;)
                    if (b = f[a], ++a, b.onPointerMove(R._sharedEvent), R._sharedEvent._stopped) return;
                this.move.emit(R._sharedEvent)
            }
        },
        submitUp: function(a, b, c) {
            if (this._isDown) {
                this.submitMove(a, b, c);
                this._isDown = !1;
                var f = [],
                    i = r.hitTest(h.root, a, b);
                if (null != i) {
                    var d = i.owner;
                    do {
                        var e = d._compMap.Sprite_4;
                        null != e && f.push(e);
                        d = d.parent
                    } while (null != d)
                }
                this.prepare(a, b, i, c);
                for (a = 0; a < f.length;)
                    if (b = f[a], ++a, b.onPointerUp(R._sharedEvent), R._sharedEvent._stopped) return;
                this.up.emit(R._sharedEvent)
            }
        },
        prepare: function(a, b, c, f) {
            this._x = a;
            this._y = b;
            R._sharedEvent.init(R._sharedEvent.id + 1, a, b, c, f)
        },
        __class__: R
    };
    var qa = function(a, b, c) {
        this._x =
            this._y = 0;
        this._parent = null;
        this.rootX = this.rootY = 0;
        this._disposed = !1;
        this.root = a;
        this._width = b;
        this._height = c
    };
    e["flambe.platform.BasicTexture"] = qa;
    qa.__name__ = ["flambe", "platform", "BasicTexture"];
    qa.__interfaces__ = [Sc];
    qa.__super__ = Q;
    qa.prototype = q(Q.prototype, {
        subTexture: function(a, b, c, f) {
            c = this.root.createTexture(c, f);
            c._parent = this;
            c._x = a;
            c._y = b;
            c.rootX = this.rootX + a;
            c.rootY = this.rootY + b;
            return c
        },
        onDisposed: function() {
            null == this._parent && this.root.dispose()
        },
        get_width: function() {
            return this._width
        },
        get_height: function() {
            return this._height
        },
        __class__: qa
    });
    var Kb = function() {};
    e["flambe.subsystem.TouchSystem"] = Kb;
    Kb.__name__ = ["flambe", "subsystem", "TouchSystem"];
    Kb.prototype = {
        __class__: Kb
    };
    var yb = function(a, b) {
        null == b && (b = 4);
        this._pointer = a;
        this._maxPoints = b;
        this._pointMap = new da;
        this._points = [];
        this.down = new D;
        this.move = new D;
        this.up = new D
    };
    e["flambe.platform.BasicTouch"] = yb;
    yb.__name__ = ["flambe", "platform", "BasicTouch"];
    yb.__interfaces__ = [Kb];
    yb.prototype = {
        get_supported: function() {
            return !0
        },
        submitDown: function(a, b, c) {
            if (!this._pointMap.exists(a)) {
                var f = new tc(a);
                f.init(b, c);
                this._pointMap.set(a, f);
                this._points.push(f);
                null == this._pointerTouch && (this._pointerTouch = f, this._pointer.submitDown(b, c, f._source));
                this.down.emit(f)
            }
        },
        submitMove: function(a, b, c) {
            a = this._pointMap.get(a);
            null != a && (a.init(b, c), this._pointerTouch == a && this._pointer.submitMove(b, c, a._source), this.move.emit(a))
        },
        submitUp: function(a, b, c) {
            var f = this._pointMap.get(a);
            null != f && (f.init(b, c), this._pointMap.remove(a), z.remove(this._points,
                f), this._pointerTouch == f && (this._pointerTouch = null, this._pointer.submitUp(b, c, f._source)), this.up.emit(f))
        },
        __class__: yb
    };
    var Ya = function() {};
    e["flambe.sound.Sound"] = Ya;
    Ya.__name__ = ["flambe", "sound", "Sound"];
    Ya.__interfaces__ = [Ja];
    Ya.prototype = {
        __class__: Ya
    };
    var ea = function() {
        this._disposed = !1;
        this._playback = new Lb(this)
    };
    e["flambe.platform.DummySound"] = ea;
    ea.__name__ = ["flambe", "platform", "DummySound"];
    ea.__interfaces__ = [Ya];
    ea.getInstance = function() {
        null == ea._instance && (ea._instance = new ea);
        return ea._instance
    };
    ea.__super__ = Q;
    ea.prototype = q(Q.prototype, {
        play: function() {
            return this._playback
        },
        loop: function() {
            return this._playback
        },
        onDisposed: function() {},
        __class__: ea
    });
    var Mb = function() {};
    e["flambe.sound.Playback"] = Mb;
    Mb.__name__ = ["flambe", "sound", "Playback"];
    Mb.__interfaces__ = [na];
    var Lb = function(a) {
        this._sound = a;
        this.volume = new F(0);
        this._complete = new S(!0)
    };
    e["flambe.platform.DummyPlayback"] = Lb;
    Lb.__name__ = ["flambe", "platform", "DummyPlayback"];
    Lb.__interfaces__ = [Mb];
    Lb.prototype = {
        dispose: function() {},
        __class__: Lb
    };
    var Nb = function() {};
    e["flambe.subsystem.StorageSystem"] = Nb;
    Nb.__name__ = ["flambe", "subsystem", "StorageSystem"];
    Nb.prototype = {
        __class__: Nb
    };
    var Bb = function() {
        this.clear()
    };
    e["flambe.platform.DummyStorage"] = Bb;
    Bb.__name__ = ["flambe", "platform", "DummyStorage"];
    Bb.__interfaces__ = [Nb];
    Bb.prototype = {
        set: function(a, b) {
            this._hash.set(a, b);
            return !0
        },
        get: function(a, b) {
            return this._hash.exists(a) ? this._hash.get(a) : b
        },
        clear: function() {
            this._hash = new X
        },
        __class__: Bb
    };
    var zb = function() {
        this.down = new D;
        this.move = new D;
        this.up = new D
    };
    e["flambe.platform.DummyTouch"] = zb;
    zb.__name__ = ["flambe", "platform", "DummyTouch"];
    zb.__interfaces__ = [Kb];
    zb.prototype = {
        get_supported: function() {
            return !1
        },
        __class__: zb
    };
    var hb = function() {
        this._entries = []
    };
    e["flambe.platform.EventGroup"] = hb;
    hb.__name__ = ["flambe", "platform", "EventGroup"];
    hb.__interfaces__ = [na];
    hb.prototype = {
        addListener: function(a, b, c) {
            a.addEventListener(b, c, !1);
            this._entries.push(new zc(a, b, c))
        },
        addDisposingListener: function(a, b, c) {
            var f = this;
            this.addListener(a,
                b,
                function(a) {
                    f.dispose();
                    c(a)
                })
        },
        dispose: function() {
            for (var a = 0, b = this._entries; a < b.length;) {
                var c = b[a];
                ++a;
                c.dispatcher.removeEventListener(c.type, c.listener, !1)
            }
            this._entries = []
        },
        __class__: hb
    };
    var zc = function(a, b, c) {
        this.dispatcher = a;
        this.type = b;
        this.listener = c
    };
    e["flambe.platform._EventGroup.Entry"] = zc;
    zc.__name__ = ["flambe", "platform", "_EventGroup", "Entry"];
    zc.prototype = {
        __class__: zc
    };
    var ib = function() {};
    e["flambe.platform.InternalGraphics"] = ib;
    ib.__name__ = ["flambe", "platform", "InternalGraphics"];
    ib.__interfaces__ = [pc];
    ib.prototype = {
        __class__: ib
    };
    var Ac = function() {};
    e["flambe.subsystem.RendererSystem"] = Ac;
    Ac.__name__ = ["flambe", "subsystem", "RendererSystem"];
    Ac.prototype = {
        __class__: Ac
    };
    var jb = function() {};
    e["flambe.platform.InternalRenderer"] = jb;
    jb.__name__ = ["flambe", "platform", "InternalRenderer"];
    jb.__interfaces__ = [Ac];
    jb.prototype = {
        __class__: jb
    };
    var vc = function() {};
    e["flambe.platform.KeyCodes"] = vc;
    vc.__name__ = ["flambe", "platform", "KeyCodes"];
    vc.toKey = function(a) {
        switch (a) {
            case 65:
                return d.A;
            case 66:
                return d.B;
            case 67:
                return d.C;
            case 68:
                return d.D;
            case 69:
                return d.E;
            case 70:
                return d.F;
            case 71:
                return d.G;
            case 72:
                return d.H;
            case 73:
                return d.I;
            case 74:
                return d.J;
            case 75:
                return d.K;
            case 76:
                return d.L;
            case 77:
                return d.M;
            case 78:
                return d.N;
            case 79:
                return d.O;
            case 80:
                return d.P;
            case 81:
                return d.Q;
            case 82:
                return d.R;
            case 83:
                return d.S;
            case 84:
                return d.T;
            case 85:
                return d.U;
            case 86:
                return d.V;
            case 87:
                return d.W;
            case 88:
                return d.X;
            case 89:
                return d.Y;
            case 90:
                return d.Z;
            case 48:
                return d.Number0;
            case 49:
                return d.Number1;
            case 50:
                return d.Number2;
            case 51:
                return d.Number3;
            case 52:
                return d.Number4;
            case 53:
                return d.Number5;
            case 54:
                return d.Number6;
            case 55:
                return d.Number7;
            case 56:
                return d.Number8;
            case 57:
                return d.Number9;
            case 96:
                return d.Numpad0;
            case 97:
                return d.Numpad1;
            case 98:
                return d.Numpad2;
            case 99:
                return d.Numpad3;
            case 100:
                return d.Numpad4;
            case 101:
                return d.Numpad5;
            case 102:
                return d.Numpad6;
            case 103:
                return d.Numpad7;
            case 104:
                return d.Numpad8;
            case 105:
                return d.Numpad9;
            case 107:
                return d.NumpadAdd;
            case 110:
                return d.NumpadDecimal;
            case 111:
                return d.NumpadDivide;
            case 108:
                return d.NumpadEnter;
            case 106:
                return d.NumpadMultiply;
            case 109:
                return d.NumpadSubtract;
            case 112:
                return d.F1;
            case 113:
                return d.F2;
            case 114:
                return d.F3;
            case 115:
                return d.F4;
            case 116:
                return d.F5;
            case 117:
                return d.F6;
            case 118:
                return d.F7;
            case 119:
                return d.F8;
            case 120:
                return d.F9;
            case 121:
                return d.F10;
            case 122:
                return d.F11;
            case 123:
                return d.F12;
            case 37:
                return d.Left;
            case 38:
                return d.Up;
            case 39:
                return d.Right;
            case 40:
                return d.Down;
            case 18:
                return d.Alt;
            case 192:
                return d.Backquote;
            case 220:
                return d.Backslash;
            case 8:
                return d.Backspace;
            case 20:
                return d.CapsLock;
            case 188:
                return d.Comma;
            case 15:
                return d.Command;
            case 17:
                return d.Control;
            case 46:
                return d.Delete;
            case 35:
                return d.End;
            case 13:
                return d.Enter;
            case 187:
                return d.Equals;
            case 27:
                return d.Escape;
            case 36:
                return d.Home;
            case 45:
                return d.Insert;
            case 219:
                return d.LeftBracket;
            case 189:
                return d.Minus;
            case 34:
                return d.PageDown;
            case 33:
                return d.PageUp;
            case 190:
                return d.Period;
            case 222:
                return d.Quote;
            case 221:
                return d.RightBracket;
            case 186:
                return d.Semicolon;
            case 16:
                return d.Shift;
            case 191:
                return d.Slash;
            case 32:
                return d.Space;
            case 9:
                return d.Tab;
            case 16777234:
                return d.Menu;
            case 16777247:
                return d.Search
        }
        return d.Unknown(a)
    };
    var ya = function() {
        this._tickables = []
    };
    e["flambe.platform.MainLoop"] = ya;
    ya.__name__ = ["flambe", "platform", "MainLoop"];
    ya.updateEntity = function(a, b) {
        var c = a._compMap.SpeedAdjuster_6;
        if (null != c && (c._realDt = b, b *= c.scale._value, 0 >= b)) {
            c.onUpdate(b);
            return
        }
        for (c = a.firstComponent; null != c;) {
            var f = c.next;
            0 == (c._flags &
                1) && (c._flags |= 1, c.onStart());
            c.onUpdate(b);
            c = f
        }
        for (c = a.firstChild; null != c;) f = c.next, ya.updateEntity(c, b), c = f
    };
    ya.prototype = {
        update: function(a) {
            if (!(0 >= a)) {
                1 < a && (a = 1);
                for (var b = 0; b < this._tickables.length;) {
                    var c = this._tickables[b];
                    null == c || c.update(a) ? this._tickables.splice(b, 1) : ++b
                }
                h.volume.update(a);
                ya.updateEntity(h.root, a)
            }
        },
        render: function(a) {
            var b = a.graphics;
            null != b && (a.willRender(), r.render(h.root, b), a.didRender());
            null != ya.late && ya.late(0.016666666666666666)
        },
        addTickable: function(a) {
            this._tickables.push(a)
        },
        __class__: ya
    };
    var Bc = function() {};
    e["flambe.platform.MathUtil"] = Bc;
    Bc.__name__ = ["flambe", "platform", "MathUtil"];
    Bc.nextPowerOfTwo = function(a) {
        for (var b = 1; b < a;) b <<= 1;
        return b
    };
    var xc = function() {};
    e["flambe.platform.MouseCodes"] = xc;
    xc.__name__ = ["flambe", "platform", "MouseCodes"];
    xc.toButton = function(a) {
        switch (a) {
            case 0:
                return Z.Left;
            case 1:
                return Z.Middle;
            case 2:
                return Z.Right
        }
        return Z.Unknown(a)
    };
    var Ob = function() {};
    e["flambe.platform.TextureRoot"] = Ob;
    Ob.__name__ = ["flambe", "platform", "TextureRoot"];
    Ob.prototype = {
        __class__: Ob
    };
    var Pb = function() {};
    e["flambe.platform.Tickable"] = Pb;
    Pb.__name__ = ["flambe", "platform", "Tickable"];
    Pb.prototype = {
        __class__: Pb
    };
    var Qb = function(a, b) {
        this._firstDraw = !1;
        this._canvasCtx = a.getContext("2d", {
            alpha: b
        })
    };
    e["flambe.platform.html.CanvasGraphics"] = Qb;
    Qb.__name__ = ["flambe", "platform", "html", "CanvasGraphics"];
    Qb.__interfaces__ = [ib];
    Qb.prototype = {
        save: function() {
            this._canvasCtx.save()
        },
        transform: function(a, b, c, f, i, d) {
            this._canvasCtx.transform(a, b, c, f, i, d)
        },
        restore: function() {
            this._canvasCtx.restore()
        },
        drawTexture: function(a, b, c) {
            this.drawSubTexture(a, b, c, 0, 0, a.get_width(), a.get_height())
        },
        drawSubTexture: function(a, b, c, f, i, d, e) {
            this._firstDraw ? (this._firstDraw = !1, this._canvasCtx.globalCompositeOperation = "copy", this.drawSubTexture(a, b, c, f, i, d, e), this._canvasCtx.globalCompositeOperation = "source-over") : this._canvasCtx.drawImage(a.root.image, a.rootX + f | 0, a.rootY + i | 0, d | 0, e | 0, b | 0, c | 0, d | 0, e | 0)
        },
        drawPattern: function(a, b, c, f, i) {
            this._firstDraw ? (this._firstDraw = !1, this._canvasCtx.globalCompositeOperation =
                "copy", this.drawPattern(a, b, c, f, i), this._canvasCtx.globalCompositeOperation = "source-over") : (this._canvasCtx.fillStyle = a.getPattern(), this._canvasCtx.fillRect(b | 0, c | 0, f | 0, i | 0))
        },
        fillRect: function(a, b, c, f, i) {
            if (this._firstDraw) this._firstDraw = !1, this._canvasCtx.globalCompositeOperation = "copy", this.fillRect(a, b, c, f, i), this._canvasCtx.globalCompositeOperation = "source-over";
            else {
                for (a = (16777215 & a).toString(16); 6 > a.length;) a = "0" + x.string(a);
                this._canvasCtx.fillStyle = "#" + x.string(a);
                this._canvasCtx.fillRect(b |
                    0, c | 0, f | 0, i | 0)
            }
        },
        multiplyAlpha: function(a) {
            this._canvasCtx.globalAlpha *= a
        },
        setBlendMode: function(a) {
            var b;
            switch (a[1]) {
                case 0:
                    b = "source-over";
                    break;
                case 1:
                    b = "lighter";
                    break;
                case 2:
                    b = "multiply";
                    break;
                case 3:
                    b = "screen";
                    break;
                case 4:
                    b = "destination-in";
                    break;
                case 5:
                    b = "copy"
            }
            this._canvasCtx.globalCompositeOperation = b
        },
        applyScissor: function(a, b, c, f) {
            this._canvasCtx.beginPath();
            this._canvasCtx.rect(a | 0, b | 0, c | 0, f | 0);
            this._canvasCtx.clip()
        },
        willRender: function() {
            this._firstDraw = !0
        },
        didRender: function() {},
        onResize: function() {},
        __class__: Qb
    };
    var Ta = function(a) {
        this.graphics = new Qb(a, !1);
        this._hasGPU = new S(!0)
    };
    e["flambe.platform.html.CanvasRenderer"] = Ta;
    Ta.__name__ = ["flambe", "platform", "html", "CanvasRenderer"];
    Ta.__interfaces__ = [jb];
    Ta.prototype = {
        get_type: function() {
            return va.Canvas
        },
        createTextureFromImage: function(a) {
            a = new kb(Ta.CANVAS_TEXTURES ? u.createCanvas(a) : a);
            return a.createTexture(a.width, a.height)
        },
        getCompressedTextureFormats: function() {
            return []
        },
        createCompressedTexture: function() {
            return null
        },
        willRender: function() {
            this.graphics.willRender()
        },
        didRender: function() {
            this.graphics.didRender()
        },
        __class__: Ta
    };
    var Rb = function(a, b, c) {
        this._rootUpdateCount = 0;
        this._pattern = null;
        qa.call(this, a, b, c)
    };
    e["flambe.platform.html.CanvasTexture"] = Rb;
    Rb.__name__ = ["flambe", "platform", "html", "CanvasTexture"];
    Rb.__super__ = qa;
    Rb.prototype = q(qa.prototype, {
        getPattern: function() {
            if (this._rootUpdateCount != this.root.updateCount || null == this._pattern) this._rootUpdateCount = this.root.updateCount, this._pattern = this.root.createPattern(this.rootX,
                this.rootY, this._width, this._height);
            return this._pattern
        },
        __class__: Rb
    });
    var kb = function(a) {
        this._graphics = null;
        this.updateCount = 0;
        this._disposed = !1;
        this.image = a;
        this.width = a.width;
        this.height = a.height
    };
    e["flambe.platform.html.CanvasTextureRoot"] = kb;
    kb.__name__ = ["flambe", "platform", "html", "CanvasTextureRoot"];
    kb.__interfaces__ = [Ob];
    kb.__super__ = Q;
    kb.prototype = q(Q.prototype, {
        createTexture: function(a, b) {
            return new Rb(this, a, b)
        },
        createPattern: function(a, b, c, f) {
            var i = this.getContext2d(),
                d = this.image;
            if (0 != a || 0 != b || c != this.width || f != this.height) d = u.createEmptyCanvas(c, f), c = d.getContext("2d"), c.globalCompositeOperation = "copy", c.drawImage(this.image, -a, -b);
            return i.createPattern(d, "repeat")
        },
        getContext2d: function() {
            K.__instanceof(this.image, HTMLCanvasElement) || (this.image = u.createCanvas(this.image));
            return this.image.getContext("2d")
        },
        onDisposed: function() {
            this._graphics = this.image = null
        },
        __class__: kb
    });
    var A = function(a, b) {
        Ma.call(this, a, b)
    };
    e["flambe.platform.html.HtmlAssetPackLoader"] = A;
    A.__name__ = ["flambe", "platform", "html", "HtmlAssetPackLoader"];
    A.detectImageFormats = function(a) {
        var b = [m.PNG, m.JPG, m.GIF],
            c = 2,
            f;
        f = window.document.createElement("img");
        f.onload = f.onerror = function() {
            1 == f.width && b.unshift(m.WEBP);
            --c;
            0 == c && a(b)
        };
        f.src = "data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==";
        var i;
        i = window.document.createElement("img");
        i.onload = i.onerror = function() {
            1 == i.width && b.unshift(m.JXR);
            --c;
            0 == c && a(b)
        };
        i.src = "data:image/vnd.ms-photo;base64,SUm8AQgAAAAFAAG8AQAQAAAASgAAAIC8BAABAAAAAQAAAIG8BAABAAAAAQAAAMC8BAABAAAAWgAAAMG8BAABAAAAHwAAAAAAAAAkw91vA07+S7GFPXd2jckNV01QSE9UTwAZAYBxAAAAABP/gAAEb/8AAQAAAQAAAA=="
    };
    A.detectAudioFormats = function() {
        var a;
        a = window.document.createElement("audio");
        if (null == a || null == n(a, a.canPlayType)) return [];
        var b = new sa("\\b(iPhone|iPod|iPad|Windows Phone)\\b", ""),
            c = window.navigator.userAgent;
        if (!B.get_supported() && b.match(c)) return [];
        for (var b = [{
                format: m.M4A,
                mimeType: "audio/mp4; codecs=mp4a"
            }, {
                format: m.MP3,
                mimeType: "audio/mpeg"
            }, {
                format: m.OPUS,
                mimeType: "audio/ogg; codecs=opus"
            }, {
                format: m.OGG,
                mimeType: "audio/ogg; codecs=vorbis"
            }, {
                format: m.WAV,
                mimeType: "audio/wav"
            }], c = [], f = 0; f <
            b.length;) {
            var i = b[f];
            ++f;
            var d = "";
            try {
                d = a.canPlayType(i.mimeType)
            } catch (e) {}
            "" != d && c.push(i.format)
        }
        return c
    };
    A.supportsBlob = function() {
        if (A._detectBlobSupport) {
            A._detectBlobSupport = !1;
            if ((new sa("\\bSilk\\b", "")).match(window.navigator.userAgent) || null == window.Blob) return !1;
            var a = new XMLHttpRequest;
            a.open("GET", ".", !0);
            if ("" != a.responseType) return !1;
            a.responseType = "blob";
            if ("blob" != a.responseType) return !1;
            A._URL = u.loadExtension("URL").value
        }
        return null != A._URL && null != A._URL.createObjectURL
    };
    A.__super__ =
        Ma;
    A.prototype = q(Ma.prototype, {
        loadEntry: function(a, b) {
            var c = this;
            switch (b.format[1]) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    var f;
                    f = window.document.createElement("img");
                    var i = new hb;
                    i.addDisposingListener(f, "load", function() {
                        A.supportsBlob() && A._URL.revokeObjectURL(f.src);
                        var a = c._platform.getRenderer().createTextureFromImage(f);
                        null != a ? c.handleLoad(b, a) : c.handleTextureError(b)
                    });
                    i.addDisposingListener(f, "error", function() {
                        c.handleError(b, "Failed to load image")
                    });
                    A.supportsBlob() ? this.download(a, b,
                        "blob",
                        function(a) {
                            f.src = A._URL.createObjectURL(a)
                        }) : f.src = a;
                    break;
                case 5:
                case 6:
                case 7:
                    this.download(a, b, "arraybuffer", function() {
                        var a = c._platform.getRenderer().createCompressedTexture(b.format, null);
                        null != a ? c.handleLoad(b, a) : c.handleTextureError(b)
                    });
                    break;
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                    var i = window.navigator.userAgent.toLowerCase(),
                        d = !1;
                    if (-1 < i.indexOf("mozilla/5.0") && -1 < i.indexOf("android") && -1 < i.indexOf("applewebkit") && -1 < i.indexOf("version") && 0 > i.indexOf("chrome")) {
                        var e = new sa("android[ ]?([0-9.]+)",
                            "gi");
                        e.match(i); - 1 < "4.0,4.0.0,4.0.1,4.0.2,4.0.3,4.0.4,4.1,4.1.1,4.1.2,4.2,4.2.1,4.2.2".split(",").indexOf(e.matched(1)) && (d = !0)
                    }
                    if (B.get_supported() && !d) this.download(a, b, "arraybuffer", function(a) {
                        B.ctx.decodeAudioData(a, function(a) {
                            c.handleLoad(b, new B(a))
                        }, function() {
                            c.handleLoad(b, ea.getInstance())
                        })
                    });
                    else {
                        var g;
                        g = window.document.createElement("audio");
                        g.preload = "auto";
                        var h = ++A._mediaRefCount;
                        null == A._mediaElements && (A._mediaElements = new da);
                        A._mediaElements.set(h, g);
                        i = new hb;
                        i.addDisposingListener(g,
                            "canplaythrough",
                            function() {
                                A._mediaElements.remove(h);
                                c.handleLoad(b, new lb(g))
                            });
                        i.addDisposingListener(g, "error", function() {
                            A._mediaElements.remove(h);
                            var a = g.error.code;
                            3 == a || 4 == a ? c.handleLoad(b, ea.getInstance()) : c.handleError(b, "Failed to load audio: " + g.error.code)
                        });
                        i.addListener(g, "progress", function() {
                            if (0 < g.buffered.length && 0 < g.duration) {
                                var a = g.buffered.end(0) / g.duration;
                                c.handleProgress(b, a * b.bytes | 0)
                            }
                        });
                        g.src = a;
                        g.load()
                    }
                    break;
                case 13:
                    this.download(a, b, "text", function(a) {
                        c.handleLoad(b,
                            new gb(a))
                    })
            }
        },
        getAssetFormats: function(a) {
            var b = this;
            null == A._supportedFormats && (A._supportedFormats = new Ib, A.detectImageFormats(function(a) {
                A._supportedFormats.set_result(b._platform.getRenderer().getCompressedTextureFormats().concat(a).concat(A.detectAudioFormats()).concat([m.Data]))
            }));
            A._supportedFormats.get(a)
        },
        download: function(a, b, c, f) {
            var i = this,
                d = null,
                e = null,
                g = 0,
                h = !1,
                j = function() {
                    h && (h = !1, window.clearInterval(g))
                },
                l = 3,
                m = function() {
                    --l;
                    return 0 <= l ? (e(), !0) : !1
                },
                e = function() {
                    j();
                    null != d && d.abort();
                    d = new XMLHttpRequest;
                    d.open("GET", a, !0);
                    d.responseType = c;
                    var e = 0;
                    d.onprogress = function(a) {
                        h || (h = !0, g = window.setInterval(function() {
                            4 != d.readyState && 5E3 < Date.now() - e && !m() && (j(), i.handleError(b, "Download stalled"))
                        }, 1E3));
                        e = Date.now();
                        i.handleProgress(b, a.loaded)
                    };
                    d.onerror = function() {
                        if (0 != d.status || !m()) j(), i.handleError(b, "HTTP error " + d.status)
                    };
                    d.onload = function() {
                        var a = d.response;
                        null == a && (a = d.responseText);
                        j();
                        f(a)
                    };
                    d.send()
                };
            e()
        },
        __class__: A
    });
    var xb = function(a, b) {
        $.call(this, a);
        this._canvas =
            b
    };
    e["flambe.platform.html.HtmlMouse"] = xb;
    xb.__name__ = ["flambe", "platform", "html", "HtmlMouse"];
    xb.__super__ = $;
    xb.prototype = q($.prototype, {
        __class__: xb
    });
    var lb = function(a) {
        this._disposed = !1;
        this.audioElement = a
    };
    e["flambe.platform.html.HtmlSound"] = lb;
    lb.__name__ = ["flambe", "platform", "html", "HtmlSound"];
    lb.__interfaces__ = [Ya];
    lb.__super__ = Q;
    lb.prototype = q(Q.prototype, {
        play: function(a) {
            null == a && (a = 1);
            return new mb(this, a, !1)
        },
        loop: function(a) {
            null == a && (a = 1);
            return new mb(this, a, !0)
        },
        onDisposed: function() {
            this.audioElement =
                null
        },
        __class__: lb
    });
    var mb = function(a, b, c) {
        var f = this;
        this._sound = a;
        this._tickableAdded = !1;
        this._clonedElement = window.document.createElement("audio");
        this._clonedElement.loop = c;
        this._clonedElement.src = a.audioElement.src;
        this.volume = new F(b, function() {
            f.updateVolume()
        });
        this.updateVolume();
        this._complete = new S(!1);
        this.playAudio();
        h.hidden._value && this.set_paused(!0)
    };
    e["flambe.platform.html._HtmlSound.HtmlPlayback"] = mb;
    mb.__name__ = ["flambe", "platform", "html", "_HtmlSound", "HtmlPlayback"];
    mb.__interfaces__ = [Pb, Mb];
    mb.prototype = {
        set_paused: function(a) {
            this._clonedElement.paused != a && (a ? this._clonedElement.pause() : this.playAudio());
            return a
        },
        update: function(a) {
            this.volume.update(a);
            this._complete.set__(this._clonedElement.ended);
            return this._complete._value || this._clonedElement.paused ? (this._tickableAdded = !1, this._volumeBinding.dispose(), this._hideBinding.dispose(), !0) : !1
        },
        dispose: function() {
            this.set_paused(!0);
            this._complete.set__(!0)
        },
        playAudio: function() {
            var a = this;
            this._clonedElement.loop && !oa.instance.musicPlaying &&
                (oa.instance.musicPlaying = !0, this._clonedElement.play(), this._tickableAdded || (oa.instance.mainLoop.addTickable(this), this._tickableAdded = !0, this._volumeBinding = h.volume.get_changed().connect(function() {
                    a.updateVolume()
                }), this._hideBinding = h.hidden.get_changed().connect(function(b) {
                    b ? (a._wasPaused = a._clonedElement.paused, a.set_paused(!0)) : a.set_paused(a._wasPaused)
                })))
        },
        updateVolume: function() {
            this._clonedElement.volume = h.volume._value * this.volume._value
        },
        __class__: mb
    };
    var Cc = function() {};
    e["flambe.subsystem.StageSystem"] =
        Cc;
    Cc.__name__ = ["flambe", "subsystem", "StageSystem"];
    Cc.prototype = {
        __class__: Cc
    };
    var wb = function(a) {
        var b = this;
        this._canvas = a;
        this.resize = new Da;
        this.scaleFactor = 1;
        u.SHOULD_HIDE_MOBILE_BROWSER && (window.addEventListener("orientationchange", function() {
            u.callLater(n(b, b.hideMobileBrowser), 200)
        }, !1), this.hideMobileBrowser());
        window.addEventListener("resize", n(this, this.onWindowResize), !1);
        this.onWindowResize(null);
        this.orientation = new S(null);
        null != window.orientation && (window.addEventListener("orientationchange",
            n(this, this.onOrientationChange), !1), this.onOrientationChange(null));
        this.fullscreen = new S(!1);
        u.addVendorListener(window.document, "fullscreenchange", function() {
            b.updateFullscreen()
        }, !1);
        this.updateFullscreen()
    };
    e["flambe.platform.html.HtmlStage"] = wb;
    wb.__name__ = ["flambe", "platform", "html", "HtmlStage"];
    wb.__interfaces__ = [Cc];
    wb.prototype = {
        get_width: function() {
            return this._canvas.width
        },
        get_height: function() {
            return this._canvas.height
        },
        get_fullscreenSupported: function() {
            return !0 == u.loadFirstExtension(["fullscreenEnabled",
                "fullScreenEnabled"
            ], window.document).value
        },
        requestFullscreen: function(a) {
            null == a && (a = !0);
            if (a) {
                var a = window.document.documentElement,
                    b = u.loadFirstExtension(["requestFullscreen", "requestFullScreen"], a).value;
                null != b && b.apply(a, [])
            } else a = u.loadFirstExtension(["cancelFullscreen", "cancelFullScreen"], window.document).value, null != a && t.callMethod(window.document, a, [])
        },
        onWindowResize: function() {
            var a = this._canvas.parentElement.getBoundingClientRect();
            this.resizeCanvas(a.width, a.height)
        },
        resizeCanvas: function(a,
            b) {
            var c = this.scaleFactor * a,
                f = this.scaleFactor * b;
            if (this._canvas.width == c && this._canvas.height == f) return !1;
            this._canvas.width = c | 0;
            this._canvas.height = f | 0;
            this.resize.emit();
            return !0
        },
        hideMobileBrowser: function() {
            var a = this,
                b = window.document.documentElement.style;
            b.height = window.innerHeight + 100 + "px";
            b.width = window.innerWidth + "px";
            b.overflow = "visible";
            u.callLater(function() {
                u.hideMobileBrowser();
                u.callLater(function() {
                    b.height = window.innerHeight + "px";
                    a.onWindowResize(null)
                }, 100)
            })
        },
        onOrientationChange: function() {
            this.orientation.set__(u.orientation(window.orientation))
        },
        updateFullscreen: function() {
            this.fullscreen.set__(!0 == u.loadFirstExtension(["fullscreen", "fullScreen", "isFullScreen"], window.document).value)
        },
        __class__: wb
    };
    var Ab = function(a) {
        this._storage = a
    };
    e["flambe.platform.html.HtmlStorage"] = Ab;
    Ab.__name__ = ["flambe", "platform", "html", "HtmlStorage"];
    Ab.__interfaces__ = [Nb];
    Ab.prototype = {
        set: function(a, b) {
            var c;
            try {
                var f = new wa;
                f.useCache = !0;
                f.useEnumIndex = !1;
                f.serialize(b);
                c = f.toString()
            } catch (d) {
                return !1
            }
            try {
                this._storage.setItem("flambe:" + a, c)
            } catch (e) {
                return !1
            }
            return !0
        },
        get: function(a, b) {
            var c = null;
            try {
                c = this._storage.getItem("flambe:" + a)
            } catch (f) {
                null
            }
            if (null != c) try {
                return U.run(c)
            } catch (d) {
                null
            }
            return b
        },
        __class__: Ab
    };
    var u = function() {};
    e["flambe.platform.html.HtmlUtil"] = u;
    u.__name__ = ["flambe", "platform", "html", "HtmlUtil"];
    u.callLater = function(a, b) {
        null == b && (b = 0);
        window.setTimeout(a, b)
    };
    u.hideMobileBrowser = function() {
        window.scrollTo(1, 0)
    };
    u.loadExtension = function(a, b) {
        null == b && (b = window);
        var c = t.field(b, a);
        if (null != c) return {
            prefix: "",
            field: a,
            value: c
        };
        for (var c =
                a.charAt(0).toUpperCase() + z.substr(a, 1, null), f = 0, d = u.VENDOR_PREFIXES; f < d.length;) {
            var e = d[f];
            ++f;
            var g = e + c,
                h = t.field(b, g);
            if (null != h) return {
                prefix: e,
                field: g,
                value: h
            }
        }
        return {
            prefix: null,
            field: null,
            value: null
        }
    };
    u.loadFirstExtension = function(a, b) {
        for (var c = 0; c < a.length;) {
            var f = a[c];
            ++c;
            f = u.loadExtension(f, b);
            if (null != f.field) return f
        }
        return {
            prefix: null,
            field: null,
            value: null
        }
    };
    u.polyfill = function(a, b) {
        null == b && (b = window);
        var c = u.loadExtension(a, b).value;
        if (null == c) return !1;
        b[a] = c;
        return !0
    };
    u.addVendorListener =
        function(a, b, c, f) {
            for (var d = 0, e = u.VENDOR_PREFIXES; d < e.length;) {
                var g = e[d];
                ++d;
                a.addEventListener(g + b, c, f)
            }
            a.addEventListener(b, c, f)
        };
    u.orientation = function(a) {
        switch (a) {
            case -90:
            case 90:
                return pa.Landscape;
            case 270:
            case -270:
                return pa.Landscape;
            default:
                return pa.Portrait
        }
    };
    u.createEmptyCanvas = function(a, b) {
        var c;
        c = window.document.createElement("canvas");
        c.width = a;
        c.height = b;
        return c
    };
    u.createCanvas = function(a) {
        var b = u.createEmptyCanvas(a.width, a.height),
            c = b.getContext("2d");
        c.save();
        c.globalCompositeOperation =
            "copy";
        c.drawImage(a, 0, 0);
        c.restore();
        return b
    };
    u.fixAndroidMath = function() {
        if (0 <= window.navigator.userAgent.indexOf("Linux; U; Android 4")) {
            var a = Math.sin,
                b = Math.cos;
            Math.sin = function(b) {
                return 0 == b ? 0 : a(b)
            };
            Math.cos = function(a) {
                return 0 == a ? 1 : b(a)
            }
        }
    };
    var Dc = function() {};
    e["flambe.subsystem.WebSystem"] = Dc;
    Dc.__name__ = ["flambe", "subsystem", "WebSystem"];
    Dc.prototype = {
        __class__: Dc
    };
    var Cb = function(a) {
        this._container = a
    };
    e["flambe.platform.html.HtmlWeb"] = Cb;
    Cb.__name__ = ["flambe", "platform", "html", "HtmlWeb"];
    Cb.__interfaces__ = [Dc];
    Cb.prototype = {
        openBrowser: function(a) {},
        __class__: Cb
    };
    var B = function(a) {
        this._disposed = !1;
        this.buffer = a
    };
    e["flambe.platform.html.WebAudioSound"] = B;
    B.__name__ = ["flambe", "platform", "html", "WebAudioSound"];
    B.__interfaces__ = [Ya];
    B.get_supported = function() {
        if (B._detectSupport) {
            B._detectSupport = !1;
            var a = u.loadExtension("AudioContext").value;
            null != a && (B.ctx = new a, B.gain = B.createGain(), B.gain.connect(B.ctx.destination), h.volume.watch(function(a) {
                B.gain.gain.value =
                    a
            }))
        }
        return null != B.ctx
    };
    B.createGain = function() {
        return null != B.ctx.createGain ? B.ctx.createGain() : B.ctx.createGainNode()
    };
    B.start = function(a, b) {
        null != a.start ? a.start(b) : a.noteOn(b)
    };
    B.__super__ = Q;
    B.prototype = q(Q.prototype, {
        play: function(a) {
            null == a && (a = 1);
            return new nb(this, a, !1)
        },
        loop: function(a) {
            null == a && (a = 1);
            return new nb(this, a, !0)
        },
        get_duration: function() {
            return this.buffer.duration
        },
        onDisposed: function() {
            this.buffer = null
        },
        __class__: B
    });
    var nb = function(a, b, c) {
        var f = this;
        this._sound = a;
        this._head =
            B.gain;
        this._complete = new S(!1);
        this._sourceNode = B.ctx.createBufferSource();
        this._sourceNode.buffer = a.buffer;
        this._sourceNode.loop = c;
        this._sourceNode.onended = function() {
            f._complete.set__(!0)
        };
        B.start(this._sourceNode, 0);
        this.playAudio();
        this.volume = new F(b, function(a) {
            f.setVolume(a)
        });
        1 != b && this.setVolume(b);
        h.hidden._value && this.set_paused(!0)
    };
    e["flambe.platform.html._WebAudioSound.WebAudioPlayback"] = nb;
    nb.__name__ = ["flambe", "platform", "html", "_WebAudioSound", "WebAudioPlayback"];
    nb.__interfaces__ = [Pb, Mb];
    nb.prototype = {
        set_paused: function(a) {
            a != 0 <= this._pausedAt && (a ? (this._sourceNode.disconnect(), this._pausedAt = this.get_position()) : this.playAudio());
            return a
        },
        get_position: function() {
            return this._complete._value ? this._sound.get_duration() : 0 <= this._pausedAt ? this._pausedAt : (B.ctx.currentTime - this._startedAt) % this._sound.get_duration()
        },
        update: function(a) {
            this.volume.update(a);
            3 == this._sourceNode.playbackState && this._complete.set__(!0);
            return this._complete._value || 0 <= this._pausedAt ? (this._tickableAdded = !1, this._hideBinding.dispose(), !0) : !1
        },
        dispose: function() {
            this.set_paused(!0);
            this._complete.set__(!0)
        },
        setVolume: function(a) {
            null == this._gainNode && (this._gainNode = B.createGain(), this.insertNode(this._gainNode));
            this._gainNode.gain.value = a
        },
        insertNode: function(a) {
            0 <= this._pausedAt || (this._sourceNode.disconnect(), this._sourceNode.connect(a));
            a.connect(this._head);
            this._head = a
        },
        playAudio: function() {
            var a = this;
            this._sourceNode.connect(this._head);
            this._startedAt = B.ctx.currentTime;
            this._pausedAt = -1;
            this._tickableAdded ||
                (oa.instance.mainLoop.addTickable(this), this._tickableAdded = !0, this._hideBinding = h.hidden.get_changed().connect(function(b) {
                    b ? (a._wasPaused = 0 <= a._pausedAt, a.set_paused(!0)) : a.set_paused(a._wasPaused)
                }))
        },
        __class__: nb
    };
    var Tc = function() {
        this._quads = this._maxQuads = this._dataOffset = this._backbufferWidth = this._backbufferHeight = 0;
        this._pendingSetScissor = !1;
        this._lastBlendMode = this._lastRenderTarget = this._lastShader = this._lastTexture = this._lastScissor = this._currentBlendMode = this._currentShader = this._currentTexture =
            this._currentRenderTarget = null
    };
    e["flambe.platform.html.WebGLBatcher"] = Tc;
    Tc.__name__ = ["flambe", "platform", "html", "WebGLBatcher"];
    Tc.prototype = {
        resizeBackbuffer: function(a, b) {
            this._gl.viewport(0, 0, a, b);
            this._backbufferWidth = a;
            this._backbufferHeight = b
        },
        willRender: function() {},
        didRender: function() {
            this.flush()
        },
        bindTexture: function(a) {
            this.flush();
            this._currentTexture = this._lastTexture = null;
            this._gl.bindTexture(3553, a)
        },
        deleteTexture: function(a) {
            null != this._lastTexture && this._lastTexture.root == a && (this.flush(),
                this._currentTexture = this._lastTexture = null);
            this._gl.deleteTexture(a.nativeTexture)
        },
        deleteFramebuffer: function(a) {
            a == this._lastRenderTarget && (this.flush(), this._currentRenderTarget = this._lastRenderTarget = null);
            this._gl.deleteFramebuffer(a.framebuffer)
        },
        prepareDrawTexture: function(a, b, c, f) {
            if (null == this._lastTexture || null == this._lastTexture._parent || f._parent != this._lastTexture._parent) this.flush(), this._lastTexture = f;
            return this.prepareQuad(5, a, b, c, this._drawTextureShader)
        },
        prepareDrawPattern: function(a,
            b, c, f) {
            f != this._lastTexture && (this.flush(), this._lastTexture = f);
            return this.prepareQuad(5, a, b, c, this._drawPatternShader)
        },
        prepareFillRect: function(a, b, c) {
            return this.prepareQuad(6, a, b, c, this._fillRectShader)
        },
        prepareQuad: function(a, b, c, f, d) {
            b != this._lastRenderTarget && (this.flush(), this._lastRenderTarget = b);
            c != this._lastBlendMode && (this.flush(), this._lastBlendMode = c);
            d != this._lastShader && (this.flush(), this._lastShader = d);
            if (null != f || null != this._lastScissor)
                if (null == f || null == this._lastScissor || !this._lastScissor.equals(f)) this.flush(),
                    this._lastScissor = null != f ? f.clone(this._lastScissor) : null, this._pendingSetScissor = !0;
            this._quads >= this._maxQuads && this.resize(2 * this._maxQuads);
            ++this._quads;
            b = this._dataOffset;
            this._dataOffset += 4 * a;
            return b
        },
        flush: function() {
            if (!(1 > this._quads)) {
                this._lastRenderTarget != this._currentRenderTarget && this.bindRenderTarget(this._lastRenderTarget);
                if (this._lastBlendMode != this._currentBlendMode) {
                    switch (this._lastBlendMode[1]) {
                        case 0:
                            this._gl.blendFunc(1, 771);
                            break;
                        case 1:
                            this._gl.blendFunc(1, 1);
                            break;
                        case 2:
                            this._gl.blendFunc(774,
                                771);
                            break;
                        case 3:
                            this._gl.blendFunc(1, 769);
                            break;
                        case 4:
                            this._gl.blendFunc(0, 770);
                            break;
                        case 5:
                            this._gl.blendFunc(1, 0)
                    }
                    this._currentBlendMode = this._lastBlendMode
                }
                this._pendingSetScissor && (null != this._lastScissor ? (this._gl.enable(3089), this._gl.scissor(this._lastScissor.x | 0, this._lastScissor.y | 0, this._lastScissor.width | 0, this._lastScissor.height | 0)) : this._gl.disable(3089), this._pendingSetScissor = !1);
                this._lastTexture != this._currentTexture && (this._gl.bindTexture(3553, this._lastTexture.root.nativeTexture),
                    this._currentTexture = this._lastTexture);
                this._lastShader != this._currentShader && (this._lastShader.useProgram(), this._lastShader.prepare(), this._currentShader = this._lastShader);
                if (this._lastShader == this._drawPatternShader) {
                    var a = this._lastTexture,
                        b = a.root;
                    this._drawPatternShader.setRegion(a.rootX / b.width, a.rootY / b.height, a._width / b.width, a._height / b.height)
                }
                this._gl.bufferData(34962, this.data.subarray(0, this._dataOffset), 35040);
                this._gl.drawElements(4, 6 * this._quads, 5123, 0);
                this._dataOffset = this._quads =
                    0
            }
        },
        resize: function(a) {
            this.flush();
            if (!(1024 < a)) {
                this._maxQuads = a;
                this.data = new Float32Array(24 * a);
                this._gl.bufferData(34962, 4 * this.data.length, 35040);
                for (var b = new Uint16Array(6 * a), c = 0; c < a;) {
                    var f = c++;
                    b[6 * f] = 4 * f;
                    b[6 * f + 1] = 4 * f + 1;
                    b[6 * f + 2] = 4 * f + 2;
                    b[6 * f + 3] = 4 * f + 2;
                    b[6 * f + 4] = 4 * f + 3;
                    b[6 * f + 5] = 4 * f
                }
                this._gl.bufferData(34963, b, 35044)
            }
        },
        bindRenderTarget: function(a) {
            null != a ? (this._gl.bindFramebuffer(36160, a.framebuffer), this._gl.viewport(0, 0, a.width, a.height)) : (this._gl.bindFramebuffer(36160, null), this._gl.viewport(0,
                0, this._backbufferWidth, this._backbufferHeight));
            this._lastRenderTarget = this._currentRenderTarget = a
        },
        __class__: Tc
    };
    var Ea = function() {
        this._inverseProjection = this._stateList = null
    };
    e["flambe.platform.html.WebGLGraphics"] = Ea;
    Ea.__name__ = ["flambe", "platform", "html", "WebGLGraphics"];
    Ea.__interfaces__ = [ib];
    Ea.prototype = {
        save: function() {
            var a = this._stateList,
                b = this._stateList.next;
            null == b && (b = new Sb, b.prev = a, a.next = b);
            a.matrix.clone(b.matrix);
            b.alpha = a.alpha;
            b.blendMode = a.blendMode;
            b.scissor = null != a.scissor ?
                a.scissor.clone(b.scissor) : null;
            this._stateList = b
        },
        transform: function(a, b, c, f, d, e) {
            var g = this._stateList;
            Ea._scratchMatrix.set(a, b, c, f, d, e);
            ja.multiply(g.matrix, Ea._scratchMatrix, g.matrix)
        },
        restore: function() {
            this._stateList = this._stateList.prev
        },
        drawTexture: function(a, b, c) {
            this.drawSubTexture(a, b, c, 0, 0, a.get_width(), a.get_height())
        },
        drawSubTexture: function(a, b, c, f, d, e, g) {
            var h = this._stateList,
                j = a.root,
                b = this.transformQuad(b, c, e, g),
                c = j.width,
                j = j.height,
                f = (a.rootX + f) / c,
                d = (a.rootY + d) / j,
                e = f + e / c,
                g = d +
                g / j,
                c = h.alpha,
                a = this._batcher.prepareDrawTexture(this._renderTarget, h.blendMode, h.scissor, a),
                h = this._batcher.data;
            h[a] = b[0];
            h[++a] = b[1];
            h[++a] = f;
            h[++a] = d;
            h[++a] = c;
            h[++a] = b[2];
            h[++a] = b[3];
            h[++a] = e;
            h[++a] = d;
            h[++a] = c;
            h[++a] = b[4];
            h[++a] = b[5];
            h[++a] = e;
            h[++a] = g;
            h[++a] = c;
            h[++a] = b[6];
            h[++a] = b[7];
            h[++a] = f;
            h[++a] = g;
            h[++a] = c
        },
        drawPattern: function(a, b, c, f, d) {
            var e = this._stateList,
                g = a.root,
                b = this.transformQuad(b, c, f, d),
                f = f / g.width,
                d = d / g.height,
                g = e.alpha,
                a = this._batcher.prepareDrawPattern(this._renderTarget, e.blendMode,
                    e.scissor, a),
                e = this._batcher.data;
            e[a] = b[0];
            e[++a] = b[1];
            e[++a] = 0;
            e[++a] = 0;
            e[++a] = g;
            e[++a] = b[2];
            e[++a] = b[3];
            e[++a] = f;
            e[++a] = 0;
            e[++a] = g;
            e[++a] = b[4];
            e[++a] = b[5];
            e[++a] = f;
            e[++a] = d;
            e[++a] = g;
            e[++a] = b[6];
            e[++a] = b[7];
            e[++a] = 0;
            e[++a] = d;
            e[++a] = g
        },
        fillRect: function(a, b, c, f, d) {
            var e = this._stateList,
                b = this.transformQuad(b, c, f, d),
                c = (a & 16711680) / 16711680,
                f = (a & 65280) / 65280,
                a = (a & 255) / 255,
                d = e.alpha,
                e = this._batcher.prepareFillRect(this._renderTarget, e.blendMode, e.scissor),
                g = this._batcher.data;
            g[e] = b[0];
            g[++e] = b[1];
            g[++e] = c;
            g[++e] = f;
            g[++e] = a;
            g[++e] = d;
            g[++e] = b[2];
            g[++e] = b[3];
            g[++e] = c;
            g[++e] = f;
            g[++e] = a;
            g[++e] = d;
            g[++e] = b[4];
            g[++e] = b[5];
            g[++e] = c;
            g[++e] = f;
            g[++e] = a;
            g[++e] = d;
            g[++e] = b[6];
            g[++e] = b[7];
            g[++e] = c;
            g[++e] = f;
            g[++e] = a;
            g[++e] = d
        },
        multiplyAlpha: function(a) {
            this._stateList.alpha *= a
        },
        setBlendMode: function(a) {
            this._stateList.blendMode = a
        },
        applyScissor: function(a, b, c, f) {
            var d = this._stateList,
                e = Ea._scratchQuadArray;
            e[0] = a;
            e[1] = b;
            e[2] = a + c;
            e[3] = b + f;
            d.matrix.transformArray(e, 4, e);
            this._inverseProjection.transformArray(e,
                4, e);
            a = e[0];
            b = e[1];
            c = e[2] - a;
            f = e[3] - b;
            0 > c && (a += c, c = -c);
            0 > f && (b += f, f = -f);
            d.applyScissor(a, b, c, f)
        },
        willRender: function() {
            this._batcher.willRender()
        },
        didRender: function() {
            this._batcher.didRender()
        },
        onResize: function(a, b) {
            this._stateList = new Sb;
            var c;
            c = null != this._renderTarget ? -1 : 1;
            this._stateList.matrix.set(2 / a, 0, 0, -2 * c / b, -1, c);
            this._inverseProjection = new ja;
            this._inverseProjection.set(2 / a, 0, 0, 2 / b, -1, -1);
            this._inverseProjection.invert()
        },
        transformQuad: function(a, b, c, f) {
            var c = a + c,
                f = b + f,
                d = Ea._scratchQuadArray;
            d[0] = a;
            d[1] = b;
            d[2] = c;
            d[3] = b;
            d[4] = c;
            d[5] = f;
            d[6] = a;
            d[7] = f;
            this._stateList.matrix.transformArray(d, 8, d);
            return d
        },
        __class__: Ea
    };
    var Sb = function() {
        this.scissor = this.prev = this.next = null;
        this.matrix = new ja;
        this.alpha = 1;
        this.blendMode = P.Normal
    };
    e["flambe.platform.html._WebGLGraphics.DrawingState"] = Sb;
    Sb.__name__ = ["flambe", "platform", "html", "_WebGLGraphics", "DrawingState"];
    Sb.prototype = {
        applyScissor: function(a, b, c, f) {
            if (null != this.scissor) var d = ka.max(this.scissor.x, a),
                e = ka.max(this.scissor.y, b),
                c = ka.min(this.scissor.x +
                    this.scissor.width, a + c),
                f = ka.min(this.scissor.y + this.scissor.height, b + f),
                a = d,
                b = e,
                c = c - d,
                f = f - e;
            else this.scissor = new Xa;
            this.scissor.set(Math.round(a), Math.round(b), Math.round(c), Math.round(f))
        },
        __class__: Sb
    };
    var Tb = function() {};
    e["flambe.platform.html.WebGLRenderer"] = Tb;
    Tb.__name__ = ["flambe", "platform", "html", "WebGLRenderer"];
    Tb.__interfaces__ = [jb];
    Tb.prototype = {
        get_type: function() {
            return va.WebGL
        },
        createTextureFromImage: function(a) {
            if (this.gl.isContextLost()) return null;
            var b = new Na(this, a.width,
                a.height);
            b.uploadImageData(a);
            return b.createTexture(a.width, a.height)
        },
        getCompressedTextureFormats: function() {
            return []
        },
        createCompressedTexture: function() {
            this.gl.isContextLost();
            return null
        },
        willRender: function() {
            this.graphics.willRender()
        },
        didRender: function() {
            this.graphics.didRender()
        },
        onResize: function() {
            var a = this.gl.canvas.width,
                b = this.gl.canvas.height;
            this.batcher.resizeBackbuffer(a, b);
            this.graphics.onResize(a, b)
        },
        __class__: Tb
    };
    var Ub = function(a, b, c) {
        qa.call(this, a, b, c)
    };
    e["flambe.platform.html.WebGLTexture"] =
        Ub;
    Ub.__name__ = ["flambe", "platform", "html", "WebGLTexture"];
    Ub.__super__ = qa;
    Ub.prototype = q(qa.prototype, {
        __class__: Ub
    });
    var Na = function(a, b, c) {
        this.framebuffer = this._graphics = null;
        this._disposed = !1;
        this._renderer = a;
        this.width = ka.max(2, Bc.nextPowerOfTwo(b));
        this.height = ka.max(2, Bc.nextPowerOfTwo(c));
        b = a.gl;
        this.nativeTexture = b.createTexture();
        a.batcher.bindTexture(this.nativeTexture);
        b.texParameteri(3553, 10242, 33071);
        b.texParameteri(3553, 10243, 33071);
        b.texParameteri(3553, 10241, 9728)
    };
    e["flambe.platform.html.WebGLTextureRoot"] =
        Na;
    Na.__name__ = ["flambe", "platform", "html", "WebGLTextureRoot"];
    Na.__interfaces__ = [Ob];
    Na.drawBorder = function(a, b, c) {
        var f = a.getContext("2d");
        f.drawImage(a, b - 1, 0, 1, c, b, 0, 1, c);
        f.drawImage(a, 0, c - 1, b, 1, 0, c, b, 1)
    };
    Na.__super__ = Q;
    Na.prototype = q(Q.prototype, {
        createTexture: function(a, b) {
            return new Ub(this, a, b)
        },
        uploadImageData: function(a) {
            if (this.width != a.width || this.height != a.height) {
                var b = u.createEmptyCanvas(this.width, this.height);
                b.getContext("2d").drawImage(a, 0, 0);
                Na.drawBorder(b, a.width, a.height);
                a =
                    b
            }
            this._renderer.batcher.bindTexture(this.nativeTexture);
            this._renderer.gl.texImage2D(3553, 0, 6408, 6408, 5121, a)
        },
        onDisposed: function() {
            var a = this._renderer.batcher;
            a.deleteTexture(this);
            null != this.framebuffer && a.deleteFramebuffer(this);
            this._graphics = this.framebuffer = this.nativeTexture = null
        },
        __class__: Na
    });
    var Fa = function() {};
    e["flambe.platform.shader.ShaderGL"] = Fa;
    Fa.__name__ = ["flambe", "platform", "shader", "ShaderGL"];
    Fa.prototype = {
        useProgram: function() {
            this._gl.useProgram(this._program)
        },
        prepare: function() {
            null
        },
        __class__: Fa
    };
    var Ec = function() {};
    e["flambe.platform.shader.DrawPatternGL"] = Ec;
    Ec.__name__ = ["flambe", "platform", "shader", "DrawPatternGL"];
    Ec.__super__ = Fa;
    Ec.prototype = q(Fa.prototype, {
        setRegion: function(a, b, c, f) {
            this._gl.uniform4f(this.u_region, a, b, c, f)
        },
        prepare: function() {
            this._gl.enableVertexAttribArray(this.a_pos);
            this._gl.enableVertexAttribArray(this.a_uv);
            this._gl.enableVertexAttribArray(this.a_alpha);
            this._gl.vertexAttribPointer(this.a_pos, 2, 5126, !1, 20, 0);
            this._gl.vertexAttribPointer(this.a_uv,
                2, 5126, !1, 20, 8);
            this._gl.vertexAttribPointer(this.a_alpha, 1, 5126, !1, 20, 16)
        },
        __class__: Ec
    });
    var Fc = function() {};
    e["flambe.platform.shader.DrawTextureGL"] = Fc;
    Fc.__name__ = ["flambe", "platform", "shader", "DrawTextureGL"];
    Fc.__super__ = Fa;
    Fc.prototype = q(Fa.prototype, {
        prepare: function() {
            this._gl.enableVertexAttribArray(this.a_pos);
            this._gl.enableVertexAttribArray(this.a_uv);
            this._gl.enableVertexAttribArray(this.a_alpha);
            this._gl.vertexAttribPointer(this.a_pos, 2, 5126, !1, 20, 0);
            this._gl.vertexAttribPointer(this.a_uv,
                2, 5126, !1, 20, 8);
            this._gl.vertexAttribPointer(this.a_alpha, 1, 5126, !1, 20, 16)
        },
        __class__: Fc
    });
    var Gc = function() {};
    e["flambe.platform.shader.FillRectGL"] = Gc;
    Gc.__name__ = ["flambe", "platform", "shader", "FillRectGL"];
    Gc.__super__ = Fa;
    Gc.prototype = q(Fa.prototype, {
        prepare: function() {
            this._gl.enableVertexAttribArray(this.a_pos);
            this._gl.enableVertexAttribArray(this.a_rgb);
            this._gl.enableVertexAttribArray(this.a_alpha);
            this._gl.vertexAttribPointer(this.a_pos, 2, 5126, !1, 24, 0);
            this._gl.vertexAttribPointer(this.a_rgb,
                3, 5126, !1, 24, 8);
            this._gl.vertexAttribPointer(this.a_alpha, 1, 5126, !1, 24, 20)
        },
        __class__: Gc
    });
    var Hc = function() {
        this._transitor = null
    };
    e["flambe.scene.Director"] = Hc;
    Hc.__name__ = ["flambe", "scene", "Director"];
    Hc.__super__ = k;
    Hc.prototype = q(k.prototype, {
        get_name: function() {
            return "Director_7"
        },
        onAdded: function() {
            this.owner.addChild(this._root)
        },
        onRemoved: function() {
            this.completeTransition();
            for (var a = 0, b = this.scenes; a < b.length;) {
                var c = b[a];
                ++a;
                c.dispose()
            }
            this.scenes = [];
            this.occludedScenes = [];
            this._root.dispose()
        },
        onUpdate: function(a) {
            null != this._transitor && this._transitor.update(a) && this.completeTransition()
        },
        get_topScene: function() {
            var a = this.scenes.length;
            return 0 < a ? this.scenes[a - 1] : null
        },
        show: function(a) {
            a = a._compMap.Scene_9;
            null != a && a.shown.emit()
        },
        invalidateVisibility: function() {
            for (var a = this.scenes.length; 0 < a;) {
                var b = this.scenes[--a]._compMap.Scene_9;
                if (null == b || b.opaque) break
            }
            this.occludedScenes = 0 < this.scenes.length ? this.scenes.slice(a, this.scenes.length - 1) : [];
            a = this.get_topScene();
            null != a && this.show(a)
        },
        completeTransition: function() {
            null != this._transitor && (this._transitor.complete(), this._transitor = null, this.invalidateVisibility())
        },
        __class__: Hc
    });
    var Uc = function() {};
    e["flambe.scene._Director.Transitor"] = Uc;
    Uc.__name__ = ["flambe", "scene", "_Director", "Transitor"];
    Uc.prototype = {
        update: function(a) {
            return this._transition.update(a)
        },
        complete: function() {
            this._transition.complete();
            this._onComplete()
        },
        __class__: Uc
    };
    var Ic = function() {};
    e["flambe.scene.Scene"] = Ic;
    Ic.__name__ = ["flambe", "scene", "Scene"];
    Ic.__super__ =
        k;
    Ic.prototype = q(k.prototype, {
        get_name: function() {
            return "Scene_9"
        },
        __class__: Ic
    });
    var Vc = function() {};
    e["flambe.scene.Transition"] = Vc;
    Vc.__name__ = ["flambe", "scene", "Transition"];
    Vc.prototype = {
        update: function() {
            return !0
        },
        complete: function() {},
        __class__: Vc
    };
    var Oa = function() {};
    e["flambe.script.Action"] = Oa;
    Oa.__name__ = ["flambe", "script", "Action"];
    Oa.prototype = {
        __class__: Oa
    };
    var aa = function(a, b, c, f) {
        this._value = a;
        this._to = b;
        this._seconds = c;
        this._easing = f
    };
    e["flambe.script.AnimateTo"] = aa;
    aa.__name__ = ["flambe",
        "script", "AnimateTo"
    ];
    aa.__interfaces__ = [Oa];
    aa.prototype = {
        update: function(a) {
            null == this._tween && (this._tween = new eb(this._value._value, this._to, this._seconds, this._easing), this._value.set_behavior(this._tween), this._value.update(a));
            if (this._value._behavior != this._tween) {
                var b = this._tween.elapsed - this._seconds;
                this._tween = null;
                return 0 < b ? Math.max(0, a - b) : 0
            }
            return -1
        },
        __class__: aa
    };
    var xa = function(a) {
        this._fn = a
    };
    e["flambe.script.CallFunction"] = xa;
    xa.__name__ = ["flambe", "script", "CallFunction"];
    xa.__interfaces__ = [Oa];
    xa.prototype = {
        update: function() {
            this._fn();
            return 0
        },
        __class__: xa
    };
    var ob = function(a) {
        this._duration = a;
        this._elapsed = 0
    };
    e["flambe.script.Delay"] = ob;
    ob.__name__ = ["flambe", "script", "Delay"];
    ob.__interfaces__ = [Oa];
    ob.prototype = {
        update: function(a) {
            this._elapsed += a;
            if (this._elapsed >= this._duration) {
                var b = this._elapsed - this._duration;
                this._elapsed = 0;
                return a - b
            }
            return -1
        },
        __class__: ob
    };
    var Za = function(a) {
        this._completedActions = [];
        this._runningActions = null != a ? a.slice() : []
    };
    e["flambe.script.Parallel"] =
        Za;
    Za.__name__ = ["flambe", "script", "Parallel"];
    Za.__interfaces__ = [Oa];
    Za.prototype = {
        update: function(a, b) {
            for (var c = !0, f = 0, d = 0, e = this._runningActions.length; d < e;) {
                var g = d++,
                    h = this._runningActions[g];
                if (null != h) {
                    var j = h.update(a, b);
                    0 <= j ? (this._runningActions[g] = null, this._completedActions.push(h), j > f && (f = j)) : c = !1
                }
            }
            return c ? (this._runningActions = this._completedActions, this._completedActions = [], f) : -1
        },
        __class__: Za
    };
    var Pa = function() {
        k.call(this);
        this.stopAll()
    };
    e["flambe.script.Script"] = Pa;
    Pa.__name__ = ["flambe", "script", "Script"];
    Pa.__super__ = k;
    Pa.prototype = q(k.prototype, {
        get_name: function() {
            return "Script_3"
        },
        run: function(a) {
            a = new Vb(a);
            this._handles.push(a);
            return a
        },
        stopAll: function() {
            this._handles = []
        },
        onUpdate: function(a) {
            for (var b = 0; b < this._handles.length;) {
                var c = this._handles[b];
                c.removed || 0 <= c.action.update(a, this.owner) ? this._handles.splice(b, 1) : ++b
            }
        },
        __class__: Pa
    });
    var Vb = function(a) {
        this.removed = !1;
        this.action = a
    };
    e["flambe.script._Script.Handle"] = Vb;
    Vb.__name__ = ["flambe", "script", "_Script",
        "Handle"
    ];
    Vb.__interfaces__ = [na];
    Vb.prototype = {
        dispose: function() {
            this.removed = !0;
            this.action = null
        },
        __class__: Vb
    };
    var Ga = function(a) {
        this._idx = 0;
        this._runningActions = null != a ? a.slice() : []
    };
    e["flambe.script.Sequence"] = Ga;
    Ga.__name__ = ["flambe", "script", "Sequence"];
    Ga.__interfaces__ = [Oa];
    Ga.prototype = {
        update: function(a, b) {
            for (var c = 0;;) {
                var f = this._runningActions[this._idx];
                if (null != f)
                    if (f = f.update(a - c, b), 0 <= f) c += f;
                    else return -1;
                ++this._idx;
                if (this._idx >= this._runningActions.length) {
                    this._idx = 0;
                    break
                } else if (c >
                    a) return -1
            }
            return c
        },
        __class__: Ga
    };
    var va = e["flambe.subsystem.RendererType"] = {
        __ename__: ["flambe", "subsystem", "RendererType"],
        __constructs__: ["Stage3D", "WebGL", "Canvas"]
    };
    va.Stage3D = ["Stage3D", 0];
    va.Stage3D.__enum__ = va;
    va.WebGL = ["WebGL", 1];
    va.WebGL.__enum__ = va;
    va.Canvas = ["Canvas", 2];
    va.Canvas.__enum__ = va;
    var Rc = function() {};
    e["flambe.util.Assert"] = Rc;
    Rc.__name__ = ["flambe", "util", "Assert"];
    Rc.that = function() {};
    var nc = function() {};
    e["flambe.util.BitSets"] = nc;
    nc.__name__ = ["flambe", "util", "BitSets"];
    nc.set = function(a, b, c) {
        return c ? a | b : a & ~b
    };
    var $c = function() {};
    e["flambe.util.LogHandler"] = $c;
    $c.__name__ = ["flambe", "util", "LogHandler"];
    var Ib = function() {
        this.success = new D;
        this.error = new D;
        this.progressChanged = new Da;
        this.hasResult = !1;
        this._total = this._progress = 0
    };
    e["flambe.util.Promise"] = Ib;
    Ib.__name__ = ["flambe", "util", "Promise"];
    Ib.prototype = {
        set_result: function(a) {
            if (this.hasResult) throw "Promise result already assigned";
            this._result = a;
            this.hasResult = !0;
            this.success.emit(a);
            return a
        },
        get: function(a) {
            return this.hasResult ?
                (a(this._result), null) : this.success.connect(a).once()
        },
        set_progress: function(a) {
            this._progress != a && (this._progress = a, this.progressChanged.emit());
            return a
        },
        set_total: function(a) {
            this._total != a && (this._total = a, this.progressChanged.emit());
            return a
        },
        __class__: Ib
    };
    var Da = function(a) {
        M.call(this, a)
    };
    e["flambe.util.Signal0"] = Da;
    Da.__name__ = ["flambe", "util", "Signal0"];
    Da.__super__ = M;
    Da.prototype = q(M.prototype, {
        connect: function(a, b) {
            null == b && (b = !1);
            return this.connectImpl(a, b)
        },
        emit: function() {
            var a = this;
            this._head == M.DISPATCHING_SENTINEL ? this.defer(function() {
                a.emitImpl()
            }) : this.emitImpl()
        },
        emitImpl: function() {
            for (var a = this.willEmit(), b = a; null != b;) b._listener(), b.stayInList || b.dispose(), b = b._next;
            this.didEmit(a)
        },
        __class__: Da
    });
    var jc = function(a) {
        this.next = null;
        this.fn = a
    };
    e["flambe.util._SignalBase.Task"] = jc;
    jc.__name__ = ["flambe", "util", "_SignalBase", "Task"];
    jc.prototype = {
        __class__: jc
    };
    var T = function() {};
    e["flambe.util.Strings"] = T;
    T.__name__ = ["flambe", "util", "Strings"];
    T.getFileExtension = function(a) {
        var b =
            a.lastIndexOf(".");
        return 0 < b ? z.substr(a, b + 1, null) : null
    };
    T.removeFileExtension = function(a) {
        var b = a.lastIndexOf(".");
        return 0 < b ? z.substr(a, 0, b) : a
    };
    T.getUrlExtension = function(a) {
        var b = a.lastIndexOf("?");
        0 <= b && (a = z.substr(a, 0, b));
        b = a.lastIndexOf("/");
        0 <= b && (a = z.substr(a, b + 1, null));
        return T.getFileExtension(a)
    };
    T.joinPath = function(a, b) {
        0 < a.length && 47 != a.charCodeAt(a.length - 1) && (a += "/");
        return a + b
    };
    T.withFields = function(a, b) {
        var c = b.length;
        if (0 < c) {
            for (var a = 0 < a.length ? a + " [" : a + "[", f = 0; f < c;) {
                0 < f && (a += ", ");
                var d = b[f],
                    e = b[f + 1];
                if (x.is(e, Error)) {
                    var g = e.stack;
                    null != g && (e = g)
                }
                a += d + "=" + x.string(e);
                f += 2
            }
            a += "]"
        }
        return a
    };
    var ra = e["flambeAssets.AtlasType"] = {
        __ename__: ["flambeAssets", "AtlasType"],
        __constructs__: ["ShoeBox", "TexturePacker", "Auto"]
    };
    ra.ShoeBox = ["ShoeBox", 0];
    ra.ShoeBox.__enum__ = ra;
    ra.TexturePacker = ["TexturePacker", 1];
    ra.TexturePacker.__enum__ = ra;
    ra.Auto = ["Auto", 2];
    ra.Auto.__enum__ = ra;
    var Jc = function(a) {
        this.image = a;
        this._texMap = new X
    };
    e["flambeAssets.Flambatlas"] = Jc;
    Jc.__name__ = ["flambeAssets",
        "Flambatlas"
    ];
    Jc.prototype = {
        parseJSON: function(a, b) {
            if (b == ra.TexturePacker) this.parseTexturePacker(a);
            else if (b == ra.ShoeBox) this.parseShoeBox(a);
            else if (b == ra.Auto || null == b) {
                var c = JSON.parse(a);
                Object.prototype.hasOwnProperty.call(c, "frames") && Object.prototype.hasOwnProperty.call(c, "meta") && (t.field(c, "frames") instanceof Array && null == t.field(c, "frames").__enum__ ? this.parseTexturePacker(a) : x.is(t.field(c, "frames"), ad) && this.parseShoeBox(a))
            }
            return this
        },
        parseTexturePacker: function(a) {
            a = JSON.parse(a);
            if (!Object.prototype.hasOwnProperty.call(a, "frames") && !Object.prototype.hasOwnProperty.call(a, "meta")) throw "Wrong JSON Format";
            for (var a = t.field(a, "frames"), b = 0; b < a.length;) {
                var c = a[b];
                ++b;
                if (Object.prototype.hasOwnProperty.call(c, "filename") && Object.prototype.hasOwnProperty.call(c, "frame")) {
                    var f = t.field(c, "filename"),
                        c = t.field(c, "frame"),
                        d = f.lastIndexOf("."),
                        f = z.substr(f, 0, d),
                        c = this.image.subTexture(t.field(c, "x"), t.field(c, "y"), t.field(c, "w"), t.field(c, "h"));
                    this._texMap.set(f, c)
                }
            }
        },
        parseShoeBox: function(a) {
            a =
                JSON.parse(a);
            if (!Object.prototype.hasOwnProperty.call(a, "frames") && !Object.prototype.hasOwnProperty.call(a, "meta")) throw "Wrong JSON Format";
            for (var a = t.field(a, "frames"), b = t.fields(a), c = 0; c < b.length;) {
                var f = b[c];
                ++c;
                var d = t.field(a, f);
                if (Object.prototype.hasOwnProperty.call(d, "frame")) {
                    var d = t.field(d, "frame"),
                        e = f.lastIndexOf("."),
                        f = z.substr(f, 0, e),
                        d = this.image.subTexture(t.field(d, "x"), t.field(d, "y"), t.field(d, "w"), t.field(d, "h"));
                    this._texMap.set(f, d)
                }
            }
        },
        get: function(a) {
            return this._texMap.get(a)
        },
        exists: function(a) {
            return this._texMap.exists(a)
        },
        __class__: Jc
    };
    var l = function() {};
    e["flambeAssets.Res"] = l;
    l.__name__ = ["flambeAssets", "Res"];
    l.addPack = function(a) {
        l._init || l.calcModifier();
        null == l._packs && (l._packs = new Sa);
        l._packs.push(a);
        return l
    };
    l.calcModifier = function() {
        l.mod = 1
    };
    l.addAtlas = function(a) {
        null == l._atlases && (l._atlases = new Sa);
        l._atlases.add(a);
        return l
    };
    l.tex = function(a, b) {
        null == b && (b = !1);
        if (!b && null != l._atlases)
            for (var c = l._atlases.iterator(); c.hasNext();) {
                var f = c.next();
                if (f.exists(a)) return f.get(a)
            }
        if (null !=
            l._packs)
            for (c = l._packs.iterator(); c.hasNext();)
                if (f = c.next(), null != f.getTexture(a)) return f.getTexture(a);
        return null
    };
    l.spr = function(a, b) {
        null == b && (b = !1);
        return (new la(l.tex(a, b))).setScale(l.mod)
    };
    l.snd = function(a) {
        if (null != l._packs)
            for (var b = l._packs.iterator(); b.hasNext();) {
                var c = b.next();
                if (null != c.getSound(a)) return c.getSound(a)
            }
        return null
    };
    var L = function(a) {
        this.down = this.connected = this.lastFrame = !1;
        k.call(this);
        if (null == a) throw "ButtonComponent with null func";
        this.func = [a]
    };
    e["flambeComponents.ButtonComponent"] =
        L;
    L.__name__ = ["flambeComponents", "ButtonComponent"];
    L.__super__ = k;
    L.prototype = q(k.prototype, {
        get_name: function() {
            return "ButtonComponent_13"
        },
        onAdded: function() {
            this.connected || this.tryConnect()
        },
        onUpdate: function() {
            this.connected || this.tryConnect();
            this.lastFrame = !1
        },
        addCallback: function(a) {
            if (null == a) throw "ButtonComponent with null func";
            this.func.push(a)
        },
        tryConnect: function() {
            var a = this.owner._compMap.Sprite_4;
            null != a && (this.disposer = new Ia, this.disposer.add(a.get_pointerDown().connect(n(this,
                this.pDown))), this.disposer.add(a.get_pointerUp().connect(n(this, this.pUp))), this.disposer.add(a.get_pointerOut().connect(n(this, this.pOut))), this.connected = !0)
        },
        onRemoved: function() {
            k.prototype.onRemoved.call(this);
            this.disposer.dispose();
            this.down = this.connected = !1
        },
        pDown: function() {
            this.down = !0;
            null != L.sound && l.snd(L.sound).play(0.3)
        },
        pUp: function(a) {
            if ((this.down || this.lastFrame) && null != this.func)
                for (var b = 0, c = this.func; b < c.length;) {
                    var f = c[b];
                    ++b;
                    f(a)
                }
            this.down = !1
        },
        pOut: function() {
            this.down = !1;
            this.lastFrame = !0
        },
        __class__: L
    });
    var Qa = function(a) {
        k.call(this);
        this.funcs = [];
        if (null != a)
            for (var b = 0; b < a.length;) {
                var c = a[b];
                ++b;
                this.funcs.push(c)
            }
    };
    e["flambeComponents.MultiRunner"] = Qa;
    Qa.__name__ = ["flambeComponents", "MultiRunner"];
    Qa.get_self = function() {
        var a = h.root._compMap.MultiRunner_17;
        null == a && (a = new Qa, h.root.add(a));
        return a
    };
    Qa.__super__ = k;
    Qa.prototype = q(k.prototype, {
        get_name: function() {
            return "MultiRunner_17"
        },
        onUpdate: function(a) {
            for (var b = 0, c = this.funcs; b < c.length;) {
                var f = c[b];
                ++b;
                f(a)
            }
        },
        add: function(a) {
            this.funcs.push(a)
        },
        __class__: Qa
    });
    var pb = function() {
        k.call(this)
    };
    e["flambeComponents.PostRender"] = pb;
    pb.__name__ = ["flambeComponents", "PostRender"];
    pb.__super__ = k;
    pb.prototype = q(k.prototype, {
        get_name: function() {
            return "PostRender_8"
        },
        call: function() {},
        __class__: pb
    });
    var Wb = function(a, b) {
        this.layoutUpdating = !0;
        k.call(this);
        if (null == a) throw "manifest is null";
        if (null == b) throw "onComplete is null";
        this.manifest = a;
        this.onComplete = b
    };
    e["flambeComponents.Preloader"] = Wb;
    Wb.__name__ = ["flambeComponents", "Preloader"];
    Wb.__super__ = k;
    Wb.prototype = q(k.prototype, {
        get_name: function() {
            return "Preloader_1"
        },
        onAdded: function() {
            this.disposer = new Ia;
            this.owner.add(this.disposer);
            var a = W.fromAssets("preloader");
            h._platform.loadAssetPack(a).get(n(this, this.prepare))
        },
        prepare: function(a) {
            j.get_instance();
            this.preloadPack = a;
            this.disposer.add(this.preloadPack);
            this.owner.addChild(this.base = new o);
            this.back = new ta(0, h._platform.getStage().get_width(), h._platform.getStage().get_height());
            this.bar =
                new la(a.getTexture("bar"));
            this.barUnderlay = new la(a.getTexture("bar"));
            this.notification = new la(a.getTexture("notification"));
            this.button = new la(a.getTexture("button"));
            this.base.addChild((new o).add(this.back));
            this.base.addChild((new o).add(this.barUnderlay.centerAnchor().setAlpha(0.5)));
            this.base.addChild((new o).add(this.bar.centerAnchor()));
            this.promise = h._platform.loadAssetPack(this.manifest);
            this.promise.progressChanged.connect(n(this, this.progress));
            this.promise.get(n(this, this.complete));
            this.owner.addChild(this.base);
            this.updateLayout();
            this.bar.scissor = new Xa(0, 0, 150, h._platform.getStage().get_height())
        },
        updateLayout: function() {
            this.bar.setXY(h._platform.getStage().get_width() / 2, 0.3 * h._platform.getStage().get_height()).centerAnchor();
            this.barUnderlay.setXY(h._platform.getStage().get_width() / 2, 0.3 * h._platform.getStage().get_height()).centerAnchor();
            this.bar.setScale(Math.min(1, h._platform.getStage().get_width() / 640));
            this.barUnderlay.setScale(Math.min(1, h._platform.getStage().get_width() /
                640));
            this.notification.setXY(h._platform.getStage().get_width() / 2, 0.5 * h._platform.getStage().get_height()).centerAnchor();
            this.notification.setScale(Math.min(1, h._platform.getStage().get_width() / 640));
            this.button.setXY(h._platform.getStage().get_width() / 2, 0.6 * h._platform.getStage().get_height()).centerAnchor();
            this.button.setScale(Math.min(1, h._platform.getStage().get_width() / 640));
            this.back.setSize(h._platform.getStage().get_width(), h._platform.getStage().get_height())
        },
        progress: function() {
            var a =
                this,
                b = this.promise._progress / this.promise._total;
            this.bar.scissor.width = b * this.bar.texture.get_width();
            this.bar.scissor.height = h._platform.getStage().get_height();
            this.updateLayout();
            if (1 == b) {
                this.base.addChild((new o).add(this.notification.centerAnchor()));
                var c = null,
                    c = function() {
                        a.updateLayout();
                        a.layoutUpdating && G.delay(c, 100)
                    };
                c()
            }
        },
        complete: function(a) {
            var b = this;
            this.layoutUpdating = !1;
            null != this.barUnderlay.owner && this.barUnderlay.owner.dispose();
            null != this.bar.owner && this.bar.owner.dispose();
            null != this.notification.owner && this.notification.owner.dispose();
            this.updateLayout();
            this.base.addChild((new o).add(this.button.centerAnchor()));
            this.disposer.add(this.button.get_pointerUp().connect(function() {
                b.owner.dispose();
                b.onComplete(a)
            }))
        },
        dispose: function() {
            k.prototype.dispose.call(this);
            this.layoutUpdating = !1
        },
        __class__: Wb
    });
    var qb = function(a) {
        k.call(this);
        this.func = a
    };
    e["flambeComponents.Runner"] = qb;
    qb.__name__ = ["flambeComponents", "Runner"];
    qb.__super__ = k;
    qb.prototype = q(k.prototype, {
        get_name: function() {
            return "Runner_15"
        },
        onUpdate: function(a) {
            this.func(a)
        },
        __class__: qb
    });
    var N = function(a, b, c) {
        null == b && (b = 0.2);
        null == a && (a = 1.1);
        this.duration = 0.2;
        this.easing = O.quadOut;
        this.scaleTo = 1.1;
        k.call(this);
        this.scaleTo = a;
        this.duration = b;
        this.easing = null == c ? this.easing : c
    };
    e["flambeComponents.ScaleOnClick"] = N;
    N.__name__ = ["flambeComponents", "ScaleOnClick"];
    N.__super__ = k;
    N.prototype = q(k.prototype, {
        get_name: function() {
            return "ScaleOnClick_11"
        },
        onAdded: function() {
            this._listener = this.owner._compMap.Sprite_4.get_pointerDown().connect(n(this,
                this.onDown));
            this._listener = this.owner._compMap.Sprite_4.get_pointerOut().connect(n(this, this.onUp));
            this._listener2 = this.owner._compMap.Sprite_4.get_pointerUp().connect(n(this, this.onUp))
        },
        onDown: function() {
            this.owner._compMap.Sprite_4.scaleX.animateTo(this.scaleTo, this.duration, this.easing);
            this.owner._compMap.Sprite_4.scaleY.animateTo(this.scaleTo, this.duration, this.easing)
        },
        onUp: function() {
            this.owner._compMap.Sprite_4.scaleX.animateTo(1, this.duration, this.easing);
            this.owner._compMap.Sprite_4.scaleY.animateTo(1,
                this.duration, this.easing)
        },
        onRemoved: function() {
            this._listener.dispose();
            this._listener2.dispose()
        },
        __class__: N
    });
    var Xb = function(a, b) {
        k.call(this);
        if (null == a) throw "ScreenChanger with null";
        this.screenId = a;
        this.changeFunc = b
    };
    e["flambeComponents.ScreenChanger"] = Xb;
    Xb.__name__ = ["flambeComponents", "ScreenChanger"];
    Xb.__super__ = k;
    Xb.prototype = q(k.prototype, {
        get_name: function() {
            return "ScreenChanger_16"
        },
        onAdded: function() {
            var a = this.owner._compMap.ButtonComponent_13;
            null == a ? (a = new L(n(this, this.invoke)),
                this.owner.add(a)) : a.addCallback(n(this, this.invoke))
        },
        onRemoved: function() {},
        invoke: function() {
            j.get_instance().show(this.screenId, this.changeFunc)
        },
        __class__: Xb
    });
    var rb = function(a, b, c) {
        null == c && (c = 10);
        null == b && (b = 5);
        null == a && (a = 3.3);
        this.w = 0;
        k.call(this);
        this._freq = b;
        this._amp = c;
        this._timer = this._timer0 = a
    };
    e["flambeComponents.WiggleAnimation"] = rb;
    rb.__name__ = ["flambeComponents", "WiggleAnimation"];
    rb.__super__ = k;
    rb.prototype = q(k.prototype, {
        get_name: function() {
            return "WiggleAnimation_10"
        },
        onUpdate: function(a) {
            this._timer -=
                a;
            0 >= this._timer && (this._timer = this._timer0, this.w = 0.5 < Math.random() ? 1 : -1);
            a = this.owner._compMap.Sprite_4;
            null != a && a.rotation.set__(this._amp * Math.sin((this._timer0 - this._timer) * this._freq) * (this._timer / this._timer0) * this.w)
        },
        __class__: rb
    });
    var Ha = function() {
        this.hideable = !0;
        this.readyToBeDeleted = new Da;
        this.display = (new o).add(new r);
        this.disablePointer()
    };
    e["flambeGameMenu.BaseGameMenu"] = Ha;
    Ha.__name__ = ["flambeGameMenu", "BaseGameMenu"];
    Ha.prototype = {
        open: function() {
            this.opened = !0
        },
        hide: function() {
            this.opened = !1;
            this.readyToBeDeleted.emit()
        },
        enablePointer: function() {
            this.display._compMap.Sprite_4.set_pointerEnabled(!0)
        },
        disablePointer: function() {
            this.display._compMap.Sprite_4.set_pointerEnabled(!1)
        },
        onInstantClose: function() {
            this.opened = !1
        },
        __class__: Ha
    };
    var Kc = function() {
        this._menus = [];
        this.menuOpened = !1;
        this.display = new o;
        this.startedHidingProcess = new D;
        this.fullyHidden = new D
    };
    e["flambeGameMenu.GameMenuManager"] = Kc;
    Kc.__name__ = ["flambeGameMenu", "GameMenuManager"];
    Kc.prototype = {
        addMenu: function(a, b) {
            this._menus[b] =
                a
        },
        show: function(a) {
            if (null == this._menus[a]) throw "No such menu id: " + (null == a ? "null" : "" + a);
            this._currentlyOpenedMenuID = a;
            this.clear();
            a = this._menus[a];
            this.display.addChild(a.display);
            a.open();
            this.menuOpened = !0
        },
        hide: function(a, b, c) {
            null == c && (c = !1);
            null == b && (b = !1);
            null == a && (a = !1);
            for (var f = 0, d = this._menus; f < d.length;) {
                var e = d[f];
                ++f;
                if (e.opened && (e.hideable || a)) b ? (this.clear(), c || this.fullyHidden.emit(this._currentlyOpenedMenuID)) : (e.hide(), this._readyListener = e.readyToBeDeleted.connect(n(this, this.lastMenuReadyToBeDeleted)),
                    c || this.startedHidingProcess.emit(this._currentlyOpenedMenuID))
            }
            this.menuOpened = !1
        },
        lastMenuReadyToBeDeleted: function() {
            this.fullyHidden.emit(this._currentlyOpenedMenuID)
        },
        clear: function() {
            for (; null != this.display.firstChild;) this.display.removeChild(this.display.firstChild);
            for (var a = 0, b = this._menus; a < b.length;) {
                var c = b[a];
                ++a;
                c.onInstantClose()
            }
        },
        __class__: Kc
    };
    var fa = function() {
        this.display = (new o).add(new r)
    };
    e["flambeScreen.Screen"] = fa;
    fa.__name__ = ["flambeScreen", "Screen"];
    fa.prototype = {
        onShow: function() {},
        onHide: function() {},
        __class__: fa
    };
    var ga = function() {
        fa.call(this)
    };
    e["flambeScreen.AnimatedScreen"] = ga;
    ga.__name__ = ["flambeScreen", "AnimatedScreen"];
    ga.__super__ = fa;
    ga.prototype = q(fa.prototype, {
        addAnim: function(a) {
            null == this._anims && (this._anims = []);
            this._anims.push(a)
        },
        onShow: function() {
            if (null != this._anims)
                for (var a = 0, b = this._anims; a < b.length;) {
                    var c = b[a];
                    ++a;
                    c.reset();
                    c.run()
                }
        },
        __class__: ga
    });
    var ma = e["flambeScreen.AutoBackgroundScaleMode"] = {
        __ename__: ["flambeScreen", "AutoBackgroundScaleMode"],
        __constructs__: ["Fit", "Stretch", "None", "Fill"]
    };
    ma.Fit = ["Fit", 0];
    ma.Fit.__enum__ = ma;
    ma.Stretch = ["Stretch", 1];
    ma.Stretch.__enum__ = ma;
    ma.None = ["None", 2];
    ma.None.__enum__ = ma;
    ma.Fill = ["Fill", 3];
    ma.Fill.__enum__ = ma;
    var Lc = function() {
        this.autoUpdate = !0;
        this.marginLeft = this.marginRight = this.marginTop = this.marginBottom = this.x = this.y = 0;
        this.originalWidth = this.originalHeight = -1;
        this._records = [];
        this.point = new za
    };
    e["flambeScreen.AutoPositionManager"] = Lc;
    Lc.__name__ = ["flambeScreen", "AutoPositionManager"];
    Lc.prototype = {
        onStageResize: function(a, b, c) {
            null == c && (c = !1);
            null == b && (b = -1);
            null == a && (a = -1);
            if (this.autoUpdate || !c)
                for (var c = 0, f = this._records; c < f.length;) {
                    var d = f[c];
                    ++c;
                    this.updatePos(d, a, b)
                }
        },
        updatePos: function(a, b, c) {
            null == c && (c = -1);
            null == b && (b = -1);
            var f = 0,
                d = 0;
            0 < b || (b = h._platform.getStage().get_width());
            0 < c || (c = h._platform.getStage().get_height());
            d = Math.min(b / (0 < this.originalWidth ? this.originalWidth : h._platform.getStage().get_width()), c / (0 < this.originalHeight ? this.originalHeight : h._platform.getStage().get_height()));
            0 < this.originalWidth || h._platform.getStage().get_width();
            0 < this.originalHeight || h._platform.getStage().get_height();
            switch (a.posX[1]) {
                case 0:
                    f = j.get_instance().toLocal(this.marginLeft + a.dx * d, 0, this.point).x;
                    break;
                case 1:
                    f = j.get_instance().toLocal(b / 2 + a.dx * d, 0, this.point).x;
                    break;
                case 2:
                    f = j.get_instance().toLocal(b + a.dx * d - this.marginRight, 0, this.point).x;
                    break;
                default:
                    throw "SpritePositionsX should be Right, Center, Left";
            }
            switch (a.posY[1]) {
                case 3:
                    d = j.get_instance().toLocal(0, this.marginTop + a.dy * d,
                        this.point).y;
                    break;
                case 1:
                    d = j.get_instance().toLocal(0, c / 2 + a.dy * d, this.point).y;
                    break;
                case 4:
                    d = j.get_instance().toLocal(0, c - this.marginBottom + a.dy * d, this.point).y;
                    break;
                default:
                    throw "SpritePositionsY should be Top, Center, Bottom";
            }
            a.sprite.setXY(f + this.x, d + this.y)
        },
        add: function(a, b, c, f, d, e) {
            null == e && (e = !1);
            null == d && (d = 0);
            null == f && (f = 0);
            a = {
                sprite: a,
                dx: f,
                dy: d,
                posX: b,
                posY: c,
                scaleOffsets: e
            };
            this._records.push(a);
            this.updatePos(a)
        },
        __class__: Lc
    };
    var ba = e["flambeScreen.ExtentsType"] = {
        __ename__: ["flambeScreen",
            "ExtentsType"
        ],
        __constructs__: ["Horizontal", "Vertical", "None"]
    };
    ba.Horizontal = ["Horizontal", 0];
    ba.Horizontal.__enum__ = ba;
    ba.Vertical = ["Vertical", 1];
    ba.Vertical.__enum__ = ba;
    ba.None = ["None", 2];
    ba.None.__enum__ = ba;
    var j = function() {
        this.stageResize = new Ua;
        this.fullBrowser = !1;
        this.lastDPR = 1;
        this.autoBackgroundColor = -1;
        this.currentID = -68489441;
        this.autoBackgroundInstance = null;
        this.enableDPRScaling = !0;
        this.autoBackgroundScaleMode = ma.Fit;
        this.mainDivID = "content";
        this.centerScreenX = this.centerScreenY = this.scaleScreensToFit =
            this.autoDisablePointer = !0;
        this.createNew = !1;
        this.DH = 960;
        this.DW = 640;
        if (null == j._instance) this.init();
        else throw "Use ScreenManager.instance()";
    };
    e["flambeScreen.ScreenManager"] = j;
    j.__name__ = ["flambeScreen", "ScreenManager"];
    j.get_instance = function() {
        null == j._instance && (j._instance = new j);
        return j._instance
    };
    j.prototype = {
        init: function() {
            var a = this;
            j.logger = new kc(h._platform.createLogHandler("Screen"));
            this.transitions = new X;
            this.positionManager = new Lc;
            this.display = (new o).add(new r);
            this.holder = (new o).add(new r);
            this.screenHolder = (new o).add(new r);
            this.defaultTransition = new Yb;
            this.display.add(this.rootSprite = new r);
            this.display.addChild(this.extents = (new o).add(new r));
            this.display.addChild(this.underlay = (new o).add(new r));
            this.display.addChild(this.screenHolder);
            this.display.addChild(this.overlay = (new o).add(new r));
            this.display.addChild(this.holder);
            this.display.addChild(this.phoneIconLayer = new o);
            h._platform.getStage().resize.connect(function() {
                G.delay(n(a, a.onStageResize), 400)
            });
            h._platform.getStage().orientation.get_changed().connect(function() {
                G.delay(n(a,
                    a.updatePhoneOrientationIcon), 400);
                G.delay(n(a, a.onStageResize), 400)
            });
            h._platform.getStage().fullscreen.get_changed().connect(function() {
                G.delay(n(a, a.updatePhoneOrientationIcon), 400);
                G.delay(n(a, a.onStageResize), 400)
            });
            j.inited = !0;
            this.onStageResize();
            this.screenClasses = []
        },
        setScreenSize: function(a, b) {
            this.DW = a;
            this.DH = b;
            this.onStageResize()
        },
        addScreen: function(a, b) {
            this.screenClasses[a] = b;
            this.createNew || (null == this.screens && (this.screens = []), this.screens[a] = I.createInstance(b, []))
        },
        addTransition: function(a,
            b, c, f) {
            null == f && (f = !0);
            this.transitions.set(a + ">" + b, c);
            f && a != b && this.transitions.set(b + ">" + a, c)
        },
        show: function(a, b) {
            var c = null;
            if (this.createNew) {
                if (null == this.screenClasses[a]) throw "No screen " + a;
                c = I.createInstance(this.screenClasses[a], null)
            } else c = this.screens[a];
            if (null != this.current) {
                var f = this.defaultTransition;
                this.transitions.exists(this.currentID + ">" + a) && (f = this.transitions.get(this.currentID + ">" + a));
                f.play(this.current, c, b)
            } else this.screenHolder.addChild(c.display), c.onShow();
            this.currentID =
                a;
            this.current = c
        },
        toLocal: function(a, b, c) {
            null == c && (c = new za);
            this.screenHolder._compMap.Sprite_4.getViewMatrix().inverseTransform(a, b, c);
            return c
        },
        toGlobal: function(a, b, c) {
            null == c && (c = new za);
            this.screenHolder._compMap.Sprite_4.getViewMatrix().transform(a, b, c);
            return c
        },
        onStageResize: function() {
            if (j.inited) {
                this.updateDPIScalingState();
                this.ratio = Math.min(h._platform.getStage().get_width() / this.DW, h._platform.getStage().get_height() / this.DH);
                this.scaleScreensToFit && this.screenHolder._compMap.Sprite_4.setScale(this.ratio);
                if (this.centerScreenX || this.centerScreenY) this.screenHolder._compMap.Sprite_4.setXY(this.centerScreenX ? (h._platform.getStage().get_width() - this.DW * this.ratio) / 2 : 0, this.centerScreenY ? (h._platform.getStage().get_height() - this.DH * this.ratio) / 2 : 0);
                this.updateAutoBackground();
                this.positionManager.originalWidth = this.DW;
                this.positionManager.originalHeight = this.DH;
                this.positionManager.onStageResize(-1, -1, !0);
                this.updateExtents();
                this.stageResize.emit(h._platform.getStage().get_width(), h._platform.getStage().get_height())
            }
            try {
                var a;
                a = K.__cast(h._platform.getRenderer(), Tb);
                if (null != a) a.onResize()
            } catch (b) {}
        },
        updateAutoBackground: function() {
            if (null != this.autoBackgroundInstance)
                if (0 < this.autoBackgroundColor && K.__instanceof(this.autoBackgroundInstance, ta)) K.__cast(this.autoBackgroundInstance, ta).setSize(h._platform.getStage().get_width(), h._platform.getStage().get_height()).setXY(0, 0);
                else {
                    var a;
                    a = K.__cast(this.autoBackgroundInstance, r);
                    switch (this.autoBackgroundScaleMode[1]) {
                        case 3:
                            var b = Math.max(h._platform.getStage().get_width() /
                                a.getNaturalWidth(), h._platform.getStage().get_height() / a.getNaturalHeight());
                            a.setScale(b).setXY((h._platform.getStage().get_width() - a.getNaturalWidth() * b) / 2, (h._platform.getStage().get_height() - a.getNaturalHeight() * b) / 2);
                            break;
                        case 0:
                            a.setScale(Math.min(h._platform.getStage().get_width() / this.DW, h._platform.getStage().get_height() / this.DH)).setXY((h._platform.getStage().get_width() - a.getNaturalWidth() * this.ratio) / 2, (h._platform.getStage().get_height() - a.getNaturalHeight() * this.ratio) / 2);
                            break;
                        case 1:
                            a.setXY(0,
                                0).setScaleXY(h._platform.getStage().get_width() / a.getNaturalWidth(), h._platform.getStage().get_height() / a.getNaturalHeight());
                            break;
                        case 2:
                            a.setScale(1).setXY(0, 0)
                    }
                }
        },
        updatePhoneOrientationIcon: function() {
            if (null != this.phoneIcon) {
                var a = h._platform.getStage().orientation._value,
                    b = window.navigator.userAgent.toLowerCase();
                0 <= b.indexOf("android") && 0 <= b.indexOf("mozilla/5.0") && 0 <= b.indexOf("applewebkit") && 0 > b.indexOf("mobile") && (a = window.innerWidth > window.innerHeight ? pa.Landscape : pa.Portrait);
                a == pa.Landscape ?
                    (document.getElementById("turnThePhoneDumbass").style.display = "block", document.getElementsByTagName("canvas")[0].style.display = "none", this.disablePointer(), this.screenHolder.add(new fb(0))) : (document.getElementById("turnThePhoneDumbass").style.display = "none", document.getElementsByTagName("canvas")[0].style.display = "block", this.enablePointer(), null != this.screenHolder._compMap.SpeedAdjuster_6 && this.screenHolder.remove(this.screenHolder._compMap.SpeedAdjuster_6))
            }
        },
        getExtentsType: function() {
            var a = h._platform.getStage().get_width() /
                h._platform.getStage().get_height(),
                b = this.DW / this.DH;
            return a > b ? ba.Horizontal : a < b ? ba.Vertical : ba.None
        },
        isMobile: function() {
            return window.orientation === Number(window.orientation) || j.fillScreen ? !0 : !1
        },
        updateDPIScalingState: function() {
            if (this.enableDPRScaling) {
                var a = window.devicePixelRatio;
                null == a && (a = 1);
                var b = window.navigator.userAgent.toLowerCase(); - 1 < b.indexOf("mozilla/5.0") && -1 < b.indexOf("android") && -1 < b.indexOf("applewebkit") && -1 < b.indexOf("version") && 0 > b.indexOf("chrome") && (a = 1);
                this.lastDPR =
                    a;
                this.lastCorrectedWidth = window.innerWidth * a | 0;
                this.lastCorrectedHeight = window.innerHeight * a | 0;
                this.lastCorrectedWidth = window.document.documentElement.clientWidth * a | 0;
                this.lastCorrectedHeight = window.document.documentElement.clientHeight * a | 0;
                var b = window.document.getElementById(this.mainDivID + "-canvas"),
                    c = window.document.getElementById(this.mainDivID),
                    f = window.document.body,
                    d = window.document.documentElement;
                if (null != c && null != b) {
                    var e = this.isMobile();
                    2300 > window.screen.width * a && 2300 > window.screen.height *
                        a && (h._platform.getStage().fullscreen._value || e || this.fullBrowser) ? (b.width = this.lastCorrectedWidth, b.height = this.lastCorrectedHeight, b.style.width = (this.lastCorrectedWidth / a | 0) + "px", c.style.width = (this.lastCorrectedWidth / a | 0) + "px", c.style.height = (this.lastCorrectedHeight / a | 0) + "px", c.style.margin = "0", f.style.padding = "0") : (e = Math.min(1, Math.min(this.lastCorrectedWidth / this.DW / a, this.lastCorrectedHeight / this.DH / a)), c.style.height = (this.DH * e | 0) + "px", c.style.width = (this.DW * e | 0) + "px", c.style.margin = x.string(x["int"](Math.max(0,
                            (this.lastCorrectedHeight / a - this.DH * e) / 2))) + "px auto 0", f.style.padding = "0.06px", b.width = this.DW * a | 0, b.height = this.DH * a | 0);
                    f.style.height = d.style.height = "100%";
                    f.style.width = d.style.width = "100%";
                    b.style.width = c.style.width;
                    b.style.height = c.style.height
                }
            }
        },
        updateExtents: function() {
            var a = null;
            if (null != this.extentsTexture) {
                var b;
                b = this.getExtentsType() == ba.Vertical ? this.DW : this.DH;
                for (var c = this.extentsTexture.get_height(), f = this.extents.firstChild; null != f;) {
                    if (null != x.instance(f._compMap.Sprite_4, Ba)) {
                        a =
                            x.instance(f._compMap.Sprite_4, Ba);
                        a.setSize(b, c).setScale(this.ratio);
                        var d = this.toGlobal(0, 0),
                            e = this.toGlobal(this.DW, this.DH);
                        f == this.extents.firstChild ? this.getExtentsType() == ba.Vertical ? a.setRotation(0).setAnchor(0, this.extentsTexture.get_height()).setXY(d.x, d.y) : a.setRotation(90).setAnchor(0, this.extentsTexture.get_height()).setXY(e.x, d.y) : this.getExtentsType() == ba.Vertical ? a.setRotation(180).setAnchor(0, this.extentsTexture.get_height()).setXY(e.x, e.y) : a.setRotation(-90).setAnchor(0, this.extentsTexture.get_height()).setXY(d.x,
                            e.y)
                    }
                    f = f.next
                }
            }
        },
        enablePointer: function() {
            this.display._compMap.Sprite_4.set_pointerEnabled(!0)
        },
        disablePointer: function() {
            this.display._compMap.Sprite_4.set_pointerEnabled(!1)
        },
        __class__: j
    };
    var s = e["flambeScreen.SpritePosition"] = {
        __ename__: ["flambeScreen", "SpritePosition"],
        __constructs__: ["Left", "Center", "Right", "Top", "Bottom"]
    };
    s.Left = ["Left", 0];
    s.Left.__enum__ = s;
    s.Center = ["Center", 1];
    s.Center.__enum__ = s;
    s.Right = ["Right", 2];
    s.Right.__enum__ = s;
    s.Top = ["Top", 3];
    s.Top.__enum__ = s;
    s.Bottom = ["Bottom",
        4
    ];
    s.Bottom.__enum__ = s;
    var $a = function(a, b) {
        this.sprite = a;
        this.delay = b;
        this.finish = new Da
    };
    e["flambeScreen.animations.Animation"] = $a;
    $a.__name__ = ["flambeScreen", "animations", "Animation"];
    $a.prototype = {
        run: function() {
            null != this._action && (null == this._script && (this._script = new Pa), this.sprite.owner.add(this._script), this._script.run(this._action))
        },
        reset: function() {
            null != this._script && this._script.stopAll()
        },
        end: function() {
            this.finish.emit()
        },
        __class__: $a
    };
    var Y = function(a, b, c, f) {
        null == f && (f = !0);
        $a.call(this,
            a, b);
        this.time = c;
        var d = O.elasticOut;
        this._action = f ? new Ga([new ob(b), new xa(function() {
            l.snd("sound/pop_0").play(0.5 + 0.5 * Math.random())
        }), new Za([new aa(a.scaleX, 1, c, d), new aa(a.scaleY, 1, c, d)]), new xa(n(this, this.end))]) : new Ga([new ob(b), new Za([new aa(a.scaleX, 1, c, d), new aa(a.scaleY, 1, c, d)]), new xa(n(this, this.end))])
    };
    e["flambeScreen.animations.PopAnimation"] = Y;
    Y.__name__ = ["flambeScreen", "animations", "PopAnimation"];
    Y.__super__ = $a;
    Y.prototype = q($a.prototype, {
        reset: function() {
            $a.prototype.reset.call(this);
            this.sprite.setScale(0)
        },
        __class__: Y
    });
    var ab = function() {
        this.init()
    };
    e["flambeScreen.transitions.Transition"] = ab;
    ab.__name__ = ["flambeScreen", "transitions", "Transition"];
    ab.prototype = {
        init: function() {},
        applyFunction: function() {
            null != this.func && this.func()
        },
        elasticEaseOut: function(a) {
            var b = 0,
                c = 0.5;
            if (0 == a) return 0;
            if (1 == a) return 1;
            1 > c ? (c = 0.5, b = 0.125) : b = 0.5 / (2 * Math.PI) * Math.asin(1 / c);
            return c * Math.pow(2, -10 * a) * Math.sin((a - b) * 2 * Math.PI / 0.5) + 1
        },
        play: function(a, b, c) {
            this.current = a;
            this.target = b;
            this.func =
                c;
            null == this.holder && (this.holder = j.get_instance().holder);
            null == this.screenHolder && (this.screenHolder = j.get_instance().screenHolder);
            this.startTransition()
        },
        startTransition: function() {
            this.screenHolder.removeChild(this.current.display);
            this.applyFunction();
            this.screenHolder.addChild(this.target.display);
            this.target.onShow();
            this.current.onHide();
            this.endTransition()
        },
        endTransition: function() {},
        __class__: ab
    };
    var bb = function(a) {
        null == a && (a = 0);
        this.color = 0;
        this.init();
        this.set_color(a)
    };
    e["flambeScreen.transitions.BlackMaskTransition"] =
        bb;
    bb.__name__ = ["flambeScreen", "transitions", "BlackMaskTransition"];
    bb.__super__ = ab;
    bb.prototype = q(ab.prototype, {
        init: function() {
            this.mask = (new o).add(this.maskSpr = new ta(this.color, j.get_instance().DW, j.get_instance().DH))
        },
        startTransition: function() {
            this.maskSpr.width.set__(h._platform.getStage().get_width());
            this.maskSpr.height.set__(h._platform.getStage().get_height());
            this.maskSpr.alpha.set__(0);
            this.holder.addChild(this.mask);
            j.get_instance().autoDisablePointer && j.get_instance().disablePointer();
            var a = new Pa;
            a.run(new Ga([new aa(this.maskSpr.alpha, 1, 0.3), new xa(n(this, this.maskFadeEnd))]));
            null != this.mask._compMap.Script_3 && this.mask.remove(this.mask._compMap.Script_3);
            this.mask.add(a)
        },
        maskFadeEnd: function() {
            if (0.95 < this.maskSpr.alpha._value) {
                this.maskSpr.alpha.set__(1);
                this.current.onHide();
                this.screenHolder.removeChild(this.current.display);
                this.applyFunction();
                this.screenHolder.addChild(this.target.display, !1);
                this.target.onShow();
                var a = new Pa;
                a.run(new Ga([new aa(this.maskSpr.alpha,
                    0, 0.3), new xa(n(this, this.maskFadeEnd))]));
                null != this.mask._compMap.Script_3 && this.mask.remove(this.mask._compMap.Script_3);
                this.mask.add(a)
            } else 0.05 > this.maskSpr.alpha._value && this.endTransition()
        },
        endTransition: function() {
            null != this.mask._compMap.Script_3 && this.mask.remove(this.mask._compMap.Script_3);
            this.holder.removeChild(this.mask);
            j.get_instance().enablePointer()
        },
        set_color: function(a) {
            null != this.maskSpr && (this.maskSpr.color = a);
            return this.color = a
        },
        __class__: bb
    });
    var Yb = function() {
        this.init()
    };
    e["flambeScreen.transitions.BounceTransition"] = Yb;
    Yb.__name__ = ["flambeScreen", "transitions", "BounceTransition"];
    Yb.__super__ = ab;
    Yb.prototype = q(ab.prototype, {
        init: function() {
            h.root.addChild(this.runner = new o)
        },
        startTransition: function() {
            this.scr = new Pa;
            var a = this.target.level < this.current.level;
            j.get_instance().autoDisablePointer && j.get_instance().disablePointer();
            this.current.display._compMap.Sprite_4.setAlpha(1);
            this.target.display._compMap.Sprite_4.setAlpha(0).setXY(a ? -h._platform.getStage().get_width() -
                100 : h._platform.getStage().get_width() + 100, 0);
            this.screenHolder.addChild(this.target.display);
            this.target.onShow();
            null != this.runner._compMap.Script_3 && this.runner.remove(this.runner._compMap.Script_3);
            this.runner.add(this.scr);
            this.scr.run(new Ga([new Za([new aa(this.current.display._compMap.Sprite_4.alpha, 0, 0.35, O.quintOut), new aa(this.target.display._compMap.Sprite_4.alpha, 1, 0.35, O.quintOut), new aa(this.current.display._compMap.Sprite_4.x, a ? 700 : -700, 0.7, n(this, this.elasticEaseOut)), new aa(this.target.display._compMap.Sprite_4.x,
                0, 0.7, n(this, this.elasticEaseOut))]), new xa(n(this, this.ending))]))
        },
        ending: function() {
            this.scr.dispose();
            this.screenHolder.removeChild(this.current.display);
            this.current.onHide();
            j.get_instance().enablePointer();
            this.endTransition()
        },
        endTransition: function() {
            this.current.display._compMap.Sprite_4.setAlpha(1).setXY(0, 0);
            this.target.display._compMap.Sprite_4.setAlpha(1).setXY(0, 0)
        },
        __class__: Yb
    });
    var wa = function() {
        this.buf = new vb;
        this.cache = [];
        this.useCache = wa.USE_CACHE;
        this.useEnumIndex = wa.USE_ENUM_INDEX;
        this.shash = new X;
        this.scount = 0
    };
    e["haxe.Serializer"] = wa;
    wa.__name__ = ["haxe", "Serializer"];
    wa.prototype = {
        toString: function() {
            return this.buf.b
        },
        serializeString: function(a) {
            var b = this.shash.get(a);
            null != b ? (this.buf.b += "R", this.buf.b = null == b ? this.buf.b + "null" : this.buf.b + ("" + b)) : (this.shash.set(a, this.scount++), this.buf.b += "y", a = encodeURIComponent(a), this.buf.b = null == a.length ? this.buf.b + "null" : this.buf.b + ("" + a.length), this.buf.b += ":", this.buf.b = null == a ? this.buf.b + "null" : this.buf.b + ("" + a))
        },
        serializeRef: function(a) {
            for (var b =
                    typeof a, c = 0, f = this.cache.length; c < f;) {
                var d = c++,
                    e = this.cache[d];
                if (typeof e == b && e == a) return this.buf.b += "r", this.buf.b = null == d ? this.buf.b + "null" : this.buf.b + ("" + d), !0
            }
            this.cache.push(a);
            return !1
        },
        serializeFields: function(a) {
            for (var b = 0, c = t.fields(a); b < c.length;) {
                var f = c[b];
                ++b;
                this.serializeString(f);
                this.serialize(t.field(a, f))
            }
            this.buf.b += "g"
        },
        serialize: function(a) {
            var b = I["typeof"](a);
            switch (b[1]) {
                case 0:
                    this.buf.b += "n";
                    break;
                case 1:
                    if (0 == a) {
                        this.buf.b += "z";
                        break
                    }
                    this.buf.b += "i";
                    this.buf.b = null ==
                        a ? this.buf.b + "null" : this.buf.b + ("" + a);
                    break;
                case 2:
                    Math.isNaN(a) ? this.buf.b += "k" : Math.isFinite(a) ? (this.buf.b += "d", this.buf.b = null == a ? this.buf.b + "null" : this.buf.b + ("" + a)) : this.buf.b = 0 > a ? this.buf.b + "m" : this.buf.b + "p";
                    break;
                case 3:
                    this.buf.b = a ? this.buf.b + "t" : this.buf.b + "f";
                    break;
                case 6:
                    b = b[2];
                    if (b == String) {
                        this.serializeString(a);
                        break
                    }
                    if (this.useCache && this.serializeRef(a)) break;
                    switch (b) {
                        case Array:
                            b = 0;
                            this.buf.b += "a";
                            for (var c = a.length, f = 0; f < c;) {
                                var d = f++;
                                null == a[d] ? b++ : (0 < b && (1 == b ? this.buf.b += "n" :
                                    (this.buf.b += "u", this.buf.b = null == b ? this.buf.b + "null" : this.buf.b + ("" + b)), b = 0), this.serialize(a[d]))
                            }
                            0 < b && (1 == b ? this.buf.b += "n" : (this.buf.b += "u", this.buf.b = null == b ? this.buf.b + "null" : this.buf.b + ("" + b)));
                            this.buf.b += "h";
                            break;
                        case Sa:
                            this.buf.b += "l";
                            for (a = a.iterator(); a.hasNext();) this.serialize(a.next());
                            this.buf.b += "h";
                            break;
                        case Date:
                            this.buf.b += "v";
                            this.buf.add(z.dateStr(a));
                            break;
                        case X:
                            this.buf.b += "b";
                            for (b = a.keys(); b.hasNext();) c = b.next(), this.serializeString(c), this.serialize(a.get(c));
                            this.buf.b +=
                                "h";
                            break;
                        case da:
                            this.buf.b += "q";
                            for (b = a.keys(); b.hasNext();) c = b.next(), this.buf.b += ":", this.buf.b = null == c ? this.buf.b + "null" : this.buf.b + ("" + c), this.serialize(a.get(c));
                            this.buf.b += "h";
                            break;
                        case Ra:
                            this.buf.b += "M";
                            for (b = a.keys(); b.hasNext();) c = b.next(), f = t.field(c, "__id__"), t.deleteField(c, "__id__"), this.serialize(c), c.__id__ = f, this.serialize(a.h[c.__id__]);
                            this.buf.b += "h";
                            break;
                        case cb:
                            f = 0;
                            d = a.length - 2;
                            b = new vb;
                            for (c = wa.BASE64; f < d;) {
                                var e = a.get(f++),
                                    g = a.get(f++),
                                    h = a.get(f++);
                                b.add(c.charAt(e >> 2));
                                b.add(c.charAt((e << 4 | g >> 4) & 63));
                                b.add(c.charAt((g << 2 | h >> 6) & 63));
                                b.add(c.charAt(h & 63))
                            }
                            f == d ? (d = a.get(f++), a = a.get(f++), b.add(c.charAt(d >> 2)), b.add(c.charAt((d << 4 | a >> 4) & 63)), b.add(c.charAt(a << 2 & 63))) : f == d + 1 && (a = a.get(f++), b.add(c.charAt(a >> 2)), b.add(c.charAt(a << 4 & 63)));
                            a = b.b;
                            this.buf.b += "s";
                            this.buf.b = null == a.length ? this.buf.b + "null" : this.buf.b + ("" + a.length);
                            this.buf.b += ":";
                            this.buf.b = null == a ? this.buf.b + "null" : this.buf.b + ("" + a);
                            break;
                        default:
                            this.useCache && this.cache.pop(), null != a.hxSerialize ? (this.buf.b +=
                                "C", this.serializeString(I.getClassName(b)), this.useCache && this.cache.push(a), a.hxSerialize(this), this.buf.b += "g") : (this.buf.b += "c", this.serializeString(I.getClassName(b)), this.useCache && this.cache.push(a), this.serializeFields(a))
                    }
                    break;
                case 4:
                    if (this.useCache && this.serializeRef(a)) break;
                    this.buf.b += "o";
                    this.serializeFields(a);
                    break;
                case 7:
                    b = b[2];
                    if (this.useCache) {
                        if (this.serializeRef(a)) break;
                        this.cache.pop()
                    }
                    this.buf.b = this.useEnumIndex ? this.buf.b + "j" : this.buf.b + "w";
                    this.serializeString(I.getEnumName(b));
                    this.useEnumIndex ? (this.buf.b += ":", this.buf.b += x.string(a[1])) : this.serializeString(a[0]);
                    this.buf.b += ":";
                    b = a.length;
                    this.buf.b += x.string(b - 2);
                    for (c = 2; c < b;) f = c++, this.serialize(a[f]);
                    this.useCache && this.cache.push(a);
                    break;
                case 5:
                    throw "Cannot serialize function";
                default:
                    throw "Cannot serialize " + x.string(a);
            }
        },
        __class__: wa
    };
    var G = function(a) {
        var b = this;
        this.id = setInterval(function() {
            b.run()
        }, a)
    };
    e["haxe.Timer"] = G;
    G.__name__ = ["haxe", "Timer"];
    G.delay = function(a, b) {
        var c = new G(b);
        c.run = function() {
            c.stop();
            a()
        };
        return c
    };
    G.stamp = function() {
        return (new Date).getTime() / 1E3
    };
    G.prototype = {
        stop: function() {
            null != this.id && (clearInterval(this.id), this.id = null)
        },
        run: function() {},
        __class__: G
    };
    var U = function(a) {
        this.buf = a;
        this.length = a.length;
        this.pos = 0;
        this.scache = [];
        this.cache = [];
        a = U.DEFAULT_RESOLVER;
        null == a && (a = I, U.DEFAULT_RESOLVER = a);
        this.setResolver(a)
    };
    e["haxe.Unserializer"] = U;
    U.__name__ = ["haxe", "Unserializer"];
    U.initCodes = function() {
        for (var a = [], b = 0, c = U.BASE64.length; b < c;) {
            var f = b++;
            a[U.BASE64.charCodeAt(f)] =
                f
        }
        return a
    };
    U.run = function(a) {
        return (new U(a)).unserialize()
    };
    U.prototype = {
        setResolver: function(a) {
            this.resolver = null == a ? {
                resolveClass: function() {
                    return null
                },
                resolveEnum: function() {
                    return null
                }
            } : a
        },
        get: function(a) {
            return this.buf.charCodeAt(a)
        },
        readDigits: function() {
            for (var a = 0, b = !1, c = this.pos;;) {
                var f = this.buf.charCodeAt(this.pos);
                if (f != f) break;
                if (45 == f) {
                    if (this.pos != c) break;
                    b = !0
                } else {
                    if (48 > f || 57 < f) break;
                    a = 10 * a + (f - 48)
                }
                this.pos++
            }
            b && (a *= -1);
            return a
        },
        unserializeObject: function(a) {
            for (;;) {
                if (this.pos >=
                    this.length) throw "Invalid object";
                if (103 == this.buf.charCodeAt(this.pos)) break;
                var b = this.unserialize();
                if ("string" != typeof b) throw "Invalid object key";
                var c = this.unserialize();
                a[b] = c
            }
            this.pos++
        },
        unserializeEnum: function(a, b) {
            if (58 != this.get(this.pos++)) throw "Invalid enum format";
            var c = this.readDigits();
            if (0 == c) return I.createEnum(a, b);
            for (var f = []; 0 < c--;) f.push(this.unserialize());
            return I.createEnum(a, b, f)
        },
        unserialize: function() {
            switch (this.get(this.pos++)) {
                case 110:
                    return null;
                case 116:
                    return !0;
                case 102:
                    return !1;
                case 122:
                    return 0;
                case 105:
                    return this.readDigits();
                case 100:
                    for (var a = this.pos;;) {
                        var b = this.buf.charCodeAt(this.pos);
                        if (43 <= b && 58 > b || 101 == b || 69 == b) this.pos++;
                        else break
                    }
                    return x.parseFloat(z.substr(this.buf, a, this.pos - a));
                case 121:
                    a = this.readDigits();
                    if (58 != this.get(this.pos++) || this.length - this.pos < a) throw "Invalid string length";
                    b = z.substr(this.buf, this.pos, a);
                    this.pos += a;
                    b = decodeURIComponent(b.split("+").join(" "));
                    this.scache.push(b);
                    return b;
                case 107:
                    return Math.NaN;
                case 109:
                    return Math.NEGATIVE_INFINITY;
                case 112:
                    return Math.POSITIVE_INFINITY;
                case 97:
                    a = [];
                    for (this.cache.push(a);;) {
                        b = this.buf.charCodeAt(this.pos);
                        if (104 == b) {
                            this.pos++;
                            break
                        }
                        117 == b ? (this.pos++, b = this.readDigits(), a[a.length + b - 1] = null) : a.push(this.unserialize())
                    }
                    return a;
                case 111:
                    return a = {}, this.cache.push(a), this.unserializeObject(a), a;
                case 114:
                    a = this.readDigits();
                    if (0 > a || a >= this.cache.length) throw "Invalid reference";
                    return this.cache[a];
                case 82:
                    a = this.readDigits();
                    if (0 > a || a >= this.scache.length) throw "Invalid string reference";
                    return this.scache[a];
                case 120:
                    throw this.unserialize();
                case 99:
                    a = this.unserialize();
                    b = this.resolver.resolveClass(a);
                    if (null == b) throw "Class not found " + a;
                    a = I.createEmptyInstance(b);
                    this.cache.push(a);
                    this.unserializeObject(a);
                    return a;
                case 119:
                    a = this.unserialize();
                    b = this.resolver.resolveEnum(a);
                    if (null == b) throw "Enum not found " + a;
                    a = this.unserializeEnum(b, this.unserialize());
                    this.cache.push(a);
                    return a;
                case 106:
                    a = this.unserialize();
                    b = this.resolver.resolveEnum(a);
                    if (null == b) throw "Enum not found " + a;
                    this.pos++;
                    var c = this.readDigits(),
                        f = I.getEnumConstructs(b)[c];
                    if (null == f) throw "Unknown enum index " + a + "@" + c;
                    a = this.unserializeEnum(b, f);
                    this.cache.push(a);
                    return a;
                case 108:
                    a = new Sa;
                    for (this.cache.push(a); 104 != this.buf.charCodeAt(this.pos);) a.add(this.unserialize());
                    this.pos++;
                    return a;
                case 98:
                    a = new X;
                    for (this.cache.push(a); 104 != this.buf.charCodeAt(this.pos);) b = this.unserialize(), a.set(b, this.unserialize());
                    this.pos++;
                    return a;
                case 113:
                    a = new da;
                    this.cache.push(a);
                    for (b = this.get(this.pos++); 58 == b;) b = this.readDigits(), a.set(b, this.unserialize()),
                        b = this.get(this.pos++);
                    if (104 != b) throw "Invalid IntMap format";
                    return a;
                case 77:
                    a = new Ra;
                    for (this.cache.push(a); 104 != this.buf.charCodeAt(this.pos);) b = this.unserialize(), a.set(b, this.unserialize());
                    this.pos++;
                    return a;
                case 118:
                    return a = z.substr(this.buf, this.pos, 19), a = z.strDate(a), this.cache.push(a), this.pos += 19, a;
                case 115:
                    a = this.readDigits();
                    f = this.buf;
                    if (58 != this.get(this.pos++) || this.length - this.pos < a) throw "Invalid bytes length";
                    var d = U.CODES;
                    null == d && (d = U.initCodes(), U.CODES = d);
                    for (var e = this.pos,
                            g = a & 3, h = e + (a - g), b = cb.alloc(3 * (a >> 2) + (2 <= g ? g - 1 : 0)), c = 0; e < h;) {
                        var j = d[ha.fastCodeAt(f, e++)],
                            l = d[ha.fastCodeAt(f, e++)];
                        b.set(c++, j << 2 | l >> 4);
                        j = d[ha.fastCodeAt(f, e++)];
                        b.set(c++, l << 4 | j >> 2);
                        l = d[ha.fastCodeAt(f, e++)];
                        b.set(c++, j << 6 | l)
                    }
                    2 <= g && (l = d[ha.fastCodeAt(f, e++)], h = d[ha.fastCodeAt(f, e++)], b.set(c++, l << 2 | h >> 4), 3 == g && (f = d[ha.fastCodeAt(f, e++)], b.set(c++, h << 4 | f >> 2)));
                    this.pos += a;
                    this.cache.push(b);
                    return b;
                case 67:
                    a = this.unserialize();
                    b = this.resolver.resolveClass(a);
                    if (null == b) throw "Class not found " + a;
                    a = I.createEmptyInstance(b);
                    this.cache.push(a);
                    a.hxUnserialize(this);
                    if (103 != this.get(this.pos++)) throw "Invalid custom data";
                    return a
            }
            this.pos--;
            throw "Invalid char " + this.buf.charAt(this.pos) + " at position " + this.pos;
        },
        __class__: U
    };
    var Zb = function() {};
    e["haxe.ds.BalancedTree"] = Zb;
    Zb.__name__ = ["haxe", "ds", "BalancedTree"];
    Zb.prototype = {
        set: function(a, b) {
            this.root = this.setLoop(a, b, this.root)
        },
        setLoop: function(a, b, c) {
            if (null == c) return new V(null, a, b, null);
            var f = this.compare(a, c.key);
            if (0 == f) return new V(c.left,
                a, b, c.right, null == c ? 0 : c._height);
            if (0 > f) return this.balance(this.setLoop(a, b, c.left), c.key, c.value, c.right);
            a = this.setLoop(a, b, c.right);
            return this.balance(c.left, c.key, c.value, a)
        },
        balance: function(a, b, c, f) {
            var d;
            d = null == a ? 0 : a._height;
            var e;
            e = null == f ? 0 : f._height;
            return d > e + 2 ? function() {
                var b = a.left;
                return null == b ? 0 : b._height
            }(this) >= function() {
                var b = a.right;
                return null == b ? 0 : b._height
            }(this) ? new V(a.left, a.key, a.value, new V(a.right, b, c, f)) : new V(new V(a.left, a.key, a.value, a.right.left), a.right.key,
                a.right.value, new V(a.right.right, b, c, f)) : e > d + 2 ? function() {
                var a = f.right;
                return null == a ? 0 : a._height
            }(this) > function() {
                var a = f.left;
                return null == a ? 0 : a._height
            }(this) ? new V(new V(a, b, c, f.left), f.key, f.value, f.right) : new V(new V(a, b, c, f.left.left), f.left.key, f.left.value, new V(f.left.right, f.key, f.value, f.right)) : new V(a, b, c, f, (d > e ? d : e) + 1)
        },
        compare: function(a, b) {
            return t.compare(a, b)
        },
        __class__: Zb
    };
    var V = function(a, b, c, f, d) {
        null == d && (d = -1);
        this.left = a;
        this.key = b;
        this.value = c;
        this.right = f;
        this._height = -1 == d ? (function(a) {
            a = a.left;
            return null == a ? 0 : a._height
        }(this) > function(a) {
            a = a.right;
            return null == a ? 0 : a._height
        }(this) ? function(a) {
            a = a.left;
            return null == a ? 0 : a._height
        }(this) : function(a) {
            a = a.right;
            return null == a ? 0 : a._height
        }(this)) + 1 : d
    };
    e["haxe.ds.TreeNode"] = V;
    V.__name__ = ["haxe", "ds", "TreeNode"];
    V.prototype = {
        __class__: V
    };
    var sb = function() {};
    e["haxe.ds.EnumValueMap"] = sb;
    sb.__name__ = ["haxe", "ds", "EnumValueMap"];
    sb.__interfaces__ = [ub];
    sb.__super__ = Zb;
    sb.prototype = q(Zb.prototype, {
        compare: function(a, b) {
            var c =
                a[1] - b[1];
            if (0 != c) return c;
            var c = a.slice(2),
                f = b.slice(2);
            return 0 == c.length && 0 == f.length ? 0 : this.compareArgs(c, f)
        },
        compareArgs: function(a, b) {
            var c = a.length - b.length;
            if (0 != c) return c;
            for (var c = 0, f = a.length; c < f;) {
                var d = c++,
                    d = this.compareArg(a[d], b[d]);
                if (0 != d) return d
            }
            return 0
        },
        compareArg: function(a, b) {
            return t.isEnumValue(a) && t.isEnumValue(b) ? this.compare(a, b) : a instanceof Array && null == a.__enum__ && b instanceof Array && null == b.__enum__ ? this.compareArgs(a, b) : t.compare(a, b)
        },
        __class__: sb
    });
    var da = function() {
        this.h = {}
    };
    e["haxe.ds.IntMap"] = da;
    da.__name__ = ["haxe", "ds", "IntMap"];
    da.__interfaces__ = [ub];
    da.prototype = {
        set: function(a, b) {
            this.h[a] = b
        },
        get: function(a) {
            return this.h[a]
        },
        exists: function(a) {
            return this.h.hasOwnProperty(a)
        },
        remove: function(a) {
            if (!this.h.hasOwnProperty(a)) return !1;
            delete this.h[a];
            return !0
        },
        keys: function() {
            var a = [],
                b;
            for (b in this.h) this.h.hasOwnProperty(b) && a.push(b | 0);
            return z.iter(a)
        },
        __class__: da
    };
    var Ra = function() {
        this.h = {};
        this.h.__keys__ = {}
    };
    e["haxe.ds.ObjectMap"] = Ra;
    Ra.__name__ = ["haxe",
        "ds", "ObjectMap"
    ];
    Ra.__interfaces__ = [ub];
    Ra.prototype = {
        set: function(a, b) {
            var c = a.__id__ || (a.__id__ = ++Ra.count);
            this.h[c] = b;
            this.h.__keys__[c] = a
        },
        keys: function() {
            var a = [],
                b;
            for (b in this.h.__keys__) this.h.hasOwnProperty(b) && a.push(this.h.__keys__[b]);
            return z.iter(a)
        },
        __class__: Ra
    };
    var X = function() {
        this.h = {}
    };
    e["haxe.ds.StringMap"] = X;
    X.__name__ = ["haxe", "ds", "StringMap"];
    X.__interfaces__ = [ub];
    X.prototype = {
        set: function(a, b) {
            this.h["$" + a] = b
        },
        get: function(a) {
            return this.h["$" + a]
        },
        exists: function(a) {
            return this.h.hasOwnProperty("$" +
                a)
        },
        keys: function() {
            var a = [],
                b;
            for (b in this.h) this.h.hasOwnProperty(b) && a.push(b.substr(1));
            return z.iter(a)
        },
        iterator: function() {
            return {
                ref: this.h,
                it: this.keys(),
                hasNext: function() {
                    return this.it.hasNext()
                },
                next: function() {
                    return this.ref["$" + this.it.next()]
                }
            }
        },
        __class__: X
    };
    var cb = function(a, b) {
        this.length = a;
        this.b = b
    };
    e["haxe.io.Bytes"] = cb;
    cb.__name__ = ["haxe", "io", "Bytes"];
    cb.alloc = function(a) {
        for (var b = [], c = 0; c < a;) c++, b.push(0);
        return new cb(a, b)
    };
    cb.prototype = {
        get: function(a) {
            return this.b[a]
        },
        set: function(a, b) {
            this.b[a] = b & 255
        },
        __class__: cb
    };
    var Wc = function() {};
    e["haxe.io.Eof"] = Wc;
    Wc.__name__ = ["haxe", "io", "Eof"];
    Wc.prototype = {
        toString: function() {
            return "Eof"
        },
        __class__: Wc
    };
    var Qc = function() {};
    e["haxe.rtti.Meta"] = Qc;
    Qc.__name__ = ["haxe", "rtti", "Meta"];
    Qc.getType = function(a) {
        a = a.__meta__;
        return null == a || null == a.obj ? {} : a.obj
    };
    var C = function(a, b, c, d, e, g, h, j, l, m, o, n, k, q, p, r) {
        this.m00 = a;
        this.m10 = b;
        this.m20 = c;
        this.m30 = d;
        this.m01 = e;
        this.m11 = g;
        this.m21 = h;
        this.m31 = j;
        this.m02 = l;
        this.m12 = m;
        this.m22 =
            o;
        this.m32 = n;
        this.m03 = k;
        this.m13 = q;
        this.m23 = p;
        this.m33 = r
    };
    e["hxmath.math.Matrix4x4Default"] = C;
    C.__name__ = ["hxmath", "math", "Matrix4x4Default"];
    C.prototype = {
        __class__: C
    };
    var ca = function(a, b) {
        this.x = a;
        this.y = b
    };
    e["hxmath.math.Vector2Default"] = ca;
    ca.__name__ = ["hxmath", "math", "Vector2Default"];
    ca.prototype = {
        __class__: ca
    };
    var E = function(a, b, c) {
        this.x = a;
        this.y = b;
        this.z = c
    };
    e["hxmath.math.Vector3Default"] = E;
    E.__name__ = ["hxmath", "math", "Vector3Default"];
    E.prototype = {
        __class__: E
    };
    var K = function() {};
    e["js.Boot"] =
        K;
    K.__name__ = ["js", "Boot"];
    K.getClass = function(a) {
        return a instanceof Array && null == a.__enum__ ? Array : a.__class__
    };
    K.__string_rec = function(a, b) {
        if (null == a) return "null";
        if (5 <= b.length) return "<...>";
        var c = typeof a;
        if ("function" == c && (a.__name__ || a.__ename__)) c = "object";
        switch (c) {
            case "object":
                if (a instanceof Array) {
                    if (a.__enum__) {
                        if (2 == a.length) return a[0];
                        for (var c = a[0] + "(", b = b + "\t", d = 2, e = a.length; d < e;) var g = d++,
                            c = 2 != g ? c + ("," + K.__string_rec(a[g], b)) : c + K.__string_rec(a[g], b);
                        return c + ")"
                    }
                    c = a.length;
                    d =
                        "[";
                    b += "\t";
                    for (e = 0; e < c;) g = e++, d += (0 < g ? "," : "") + K.__string_rec(a[g], b);
                    return d + "]"
                }
                try {
                    d = a.toString
                } catch (h) {
                    return "???"
                }
                if (null != d && d != Object.toString && (c = a.toString(), "[object Object]" != c)) return c;
                c = null;
                d = "{\n";
                b += "\t";
                e = null != a.hasOwnProperty;
                for (c in a)
                    if (!e || a.hasOwnProperty(c)) "prototype" == c || "__class__" == c || "__super__" == c || "__interfaces__" == c || "__properties__" == c || (2 != d.length && (d += ", \n"), d += b + c + " : " + K.__string_rec(a[c], b));
                b = b.substring(1);
                return d + ("\n" + b + "}");
            case "function":
                return "<function>";
            case "string":
                return a;
            default:
                return "" + a
        }
    };
    K.__interfLoop = function(a, b) {
        if (null == a) return !1;
        if (a == b) return !0;
        var c = a.__interfaces__;
        if (null != c)
            for (var d = 0, e = c.length; d < e;) {
                var g = d++,
                    g = c[g];
                if (g == b || K.__interfLoop(g, b)) return !0
            }
        return K.__interfLoop(a.__super__, b)
    };
    K.__instanceof = function(a, b) {
        if (null == b) return !1;
        switch (b) {
            case ed:
                return (a | 0) === a;
            case bd:
                return "number" == typeof a;
            case cd:
                return "boolean" == typeof a;
            case String:
                return "string" == typeof a;
            case Array:
                return a instanceof Array && null == a.__enum__;
            case ad:
                return !0;
            default:
                if (null != a) {
                    if ("function" == typeof b && (a instanceof b || K.__interfLoop(K.getClass(a), b))) return !0
                } else return !1;
                return b == fd && null != a.__name__ || b == gd && null != a.__ename__ ? !0 : a.__enum__ == b
        }
    };
    K.__cast = function(a, b) {
        if (K.__instanceof(a, b)) return a;
        throw "Cannot cast " + x.string(a) + " to " + x.string(b);
    };
    var Pc = function() {};
    e["js.Browser"] = Pc;
    Pc.__name__ = ["js", "Browser"];
    Pc.getLocalStorage = function() {
        try {
            var a = window.localStorage;
            a.getItem("");
            return a
        } catch (b) {
            return null
        }
    };
    var w = function() {
        this.keys =
            new sb;
        this._justShownScale = new F(1);
        this._rotation = new C(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        this._winColorTimer = this.timeOnLevel = 0;
        this._levelColor = 14698315;
        this._winTimer = 0;
        this._winner = !1;
        this._currentLevel = -1;
        this.freezeControls = this.freezeX = this.freezeY = this.freezeZ = this._pinched = !1;
        this._touchPoints = [];
        this._lastTimeStamp = 0;
        this._currentDragPoint = new ca(0, 0);
        this._prevDragPoint = new ca(0, 0);
        this._running = this._dragging = this._pinching = !1;
        this.wAlpha = this.wBeta = this.wGamma = 0;
        if (null != w._instance) throw "Game.instance use";
        this.init()
    };
    e["ru.Game"] = w;
    w.__name__ = ["ru", "Game"];
    w.get_instance = function() {
        null == w._instance && (w._instance = new w);
        return w._instance
    };
    w.prototype = {
        init: function() {
            var a = this;
            this._justShownScale.get_changed().connect(function() {
                a._justShownScaleMatrix = H.scale(a._justShownScale._value, a._justShownScale._value)
            });
            this.display = new o;
            this._tutorial = new Mc;
            this._lineLayer = (new o).add(new $b);
            this._winMask = new ta(16777215, 1, 1);
            this._winMask.set_visible(this._winMask.set_pointerEnabled(!1));
            h._platform.getKeyboard().down.connect(function(b) {
                a.keys.set(b.key, !0);
                !0
            });
            h._platform.getKeyboard().up.connect(function(b) {
                a.keys.set(b.key, !1);
                !1
            });
            this.retry = l.spr("button_gameplay_retry").centerAnchor().setAlpha(0.6);
            this.menu = l.spr("button_gameplay_level_menu").centerAnchor().setAlpha(0.6);
            this.sound = l.spr("button_gameplay_sound").centerAnchor().setAlpha(0.6);
            this.ui = new Kc;
            this.ui.addMenu(new ac, 0);
            h.root.addChild((new o).add(new qb(n(this, this.update))));
            this.display.addChild(this._lineLayer);
            this.display.addChild(this._tutorial.display);
            this.display.addChild((new o).add(this.retry).add(new N(1.2,
                0.1)).add(new L(n(this, this.resetCallback))));
            this.display.addChild((new o).add(this.menu).add(new N(1.2, 0.1)).add(new L(n(this, this.toLevelMenu))));
            this.display.addChild((new o).add(this.sound).add(new N(1.2, 0.1)).add(new L(n(this, this.switchSound))));
            this.display.addChild(this.ui.display);
            this.display.addChild((new o).add(this._winMask));
            j.get_instance().positionManager.add(this.retry, s.Center, s.Top, -100, 55);
            j.get_instance().positionManager.add(this.sound, s.Center, s.Top, 0, 55);
            j.get_instance().positionManager.add(this.menu,
                s.Center, s.Top, 100, 55)
        },
        addListeners: function() {
            if (null != this._listeners) throw "Listeners exist";
            this._listeners = new Ia;
            h._platform.getMouse().get_supported() && (this._listeners.add(h._platform.getMouse().down.connect(n(this, this.onPointerDown))), this._listeners.add(h._platform.getMouse().up.connect(n(this, this.onPointerUp))), this._listeners.add(h._platform.getMouse().move.connect(n(this, this.onPointerMove))), this._listeners.add(h._platform.getMouse().scroll.connect(n(this, this.onMouseWheel))), null);
            h._platform.getTouch().get_supported() && (this._listeners.add(h._platform.getTouch().down.connect(n(this, this.onTouchDown))), this._listeners.add(h._platform.getTouch().up.connect(n(this, this.onTouchUp))), this._listeners.add(h._platform.getTouch().move.connect(n(this, this.onTouchMove))), null)
        },
        removeListeners: function() {
            null != this._listeners && this._listeners.dispose();
            this._listeners = null
        },
        start: function() {
            this.addListeners();
            this._running = !0
        },
        stop: function() {
            this.removeListeners();
            this._running = !1
        },
        update: function(a) {
            if (this._running) {
                if (!this._dragging && !this._pinching && null != this._lastDelta && 0 < function(a) {
                        a = a._lastDelta;
                        return a.x * a.x + a.y * a.y
                    }(this)) {
                    var b;
                    b = H.rotationY(this._lastDelta.x / 60);
                    var c = H.rotationX(this._lastDelta.y / 60);
                    b = new C(b.m00 * c.m00 + b.m10 * c.m01 + b.m20 * c.m02 + b.m30 * c.m03, b.m00 * c.m10 + b.m10 * c.m11 + b.m20 * c.m12 + b.m30 * c.m13, b.m00 * c.m20 + b.m10 * c.m21 + b.m20 * c.m22 + b.m30 * c.m23, b.m00 * c.m30 + b.m10 * c.m31 + b.m20 * c.m32 + b.m30 * c.m33, b.m01 * c.m00 + b.m11 * c.m01 + b.m21 * c.m02 + b.m31 * c.m03, b.m01 * c.m10 + b.m11 *
                        c.m11 + b.m21 * c.m12 + b.m31 * c.m13, b.m01 * c.m20 + b.m11 * c.m21 + b.m21 * c.m22 + b.m31 * c.m23, b.m01 * c.m30 + b.m11 * c.m31 + b.m21 * c.m32 + b.m31 * c.m33, b.m02 * c.m00 + b.m12 * c.m01 + b.m22 * c.m02 + b.m32 * c.m03, b.m02 * c.m10 + b.m12 * c.m11 + b.m22 * c.m12 + b.m32 * c.m13, b.m02 * c.m20 + b.m12 * c.m21 + b.m22 * c.m22 + b.m32 * c.m23, b.m02 * c.m30 + b.m12 * c.m31 + b.m22 * c.m32 + b.m32 * c.m33, b.m03 * c.m00 + b.m13 * c.m01 + b.m23 * c.m02 + b.m33 * c.m03, b.m03 * c.m10 + b.m13 * c.m11 + b.m23 * c.m12 + b.m33 * c.m13, b.m03 * c.m20 + b.m13 * c.m21 + b.m23 * c.m22 + b.m33 * c.m23, b.m03 * c.m30 + b.m13 * c.m31 + b.m23 * c.m32 + b.m33 *
                        c.m33);
                    c = this._rotation;
                    this._rotation = new C(b.m00 * c.m00 + b.m10 * c.m01 + b.m20 * c.m02 + b.m30 * c.m03, b.m00 * c.m10 + b.m10 * c.m11 + b.m20 * c.m12 + b.m30 * c.m13, b.m00 * c.m20 + b.m10 * c.m21 + b.m20 * c.m22 + b.m30 * c.m23, b.m00 * c.m30 + b.m10 * c.m31 + b.m20 * c.m32 + b.m30 * c.m33, b.m01 * c.m00 + b.m11 * c.m01 + b.m21 * c.m02 + b.m31 * c.m03, b.m01 * c.m10 + b.m11 * c.m11 + b.m21 * c.m12 + b.m31 * c.m13, b.m01 * c.m20 + b.m11 * c.m21 + b.m21 * c.m22 + b.m31 * c.m23, b.m01 * c.m30 + b.m11 * c.m31 + b.m21 * c.m32 + b.m31 * c.m33, b.m02 * c.m00 + b.m12 * c.m01 + b.m22 * c.m02 + b.m32 * c.m03, b.m02 * c.m10 + b.m12 * c.m11 +
                        b.m22 * c.m12 + b.m32 * c.m13, b.m02 * c.m20 + b.m12 * c.m21 + b.m22 * c.m22 + b.m32 * c.m23, b.m02 * c.m30 + b.m12 * c.m31 + b.m22 * c.m32 + b.m32 * c.m33, b.m03 * c.m00 + b.m13 * c.m01 + b.m23 * c.m02 + b.m33 * c.m03, b.m03 * c.m10 + b.m13 * c.m11 + b.m23 * c.m12 + b.m33 * c.m13, b.m03 * c.m20 + b.m13 * c.m21 + b.m23 * c.m22 + b.m33 * c.m23, b.m03 * c.m30 + b.m13 * c.m31 + b.m23 * c.m32 + b.m33 * c.m33);
                    b = this._lastDelta;
                    b = new ca(b.x, b.y);
                    b.x *= 0.95;
                    b.y *= 0.95;
                    this._lastDelta = b;
                    0.02 > function(a) {
                        a = a._lastDelta;
                        return Math.sqrt(a.x * a.x + a.y * a.y)
                    }(this) && (b = this._lastDelta, b.x *= 0, b.y *= 0, b)
                }
                this.timeOnLevel +=
                    a;
                this._justShownScale.update(a);
                this.checkWin(a)
            }
        },
        render: function() {
            if (this._running && (function(a) {
                    a = a.projection;
                    return null == a || null != a && !1
                }(this) && (this.projection = new C(400, 0, 0, 0, 0, 400, 0, 0, 0, 0, -1040 / 960, -8E4 / 960, 0, 0, -1, 0)), ! function(a) {
                    a = a.camera;
                    return null == a || null != a && !1
                }(this))) {
                var a, b;
                b = this._justShownScaleMatrix;
                a = this.projection;
                b = new C(b.m00 * a.m00 + b.m10 * a.m01 + b.m20 * a.m02 + b.m30 * a.m03, b.m00 * a.m10 + b.m10 * a.m11 + b.m20 * a.m12 + b.m30 * a.m13, b.m00 * a.m20 + b.m10 * a.m21 + b.m20 * a.m22 + b.m30 * a.m23, b.m00 *
                    a.m30 + b.m10 * a.m31 + b.m20 * a.m32 + b.m30 * a.m33, b.m01 * a.m00 + b.m11 * a.m01 + b.m21 * a.m02 + b.m31 * a.m03, b.m01 * a.m10 + b.m11 * a.m11 + b.m21 * a.m12 + b.m31 * a.m13, b.m01 * a.m20 + b.m11 * a.m21 + b.m21 * a.m22 + b.m31 * a.m23, b.m01 * a.m30 + b.m11 * a.m31 + b.m21 * a.m32 + b.m31 * a.m33, b.m02 * a.m00 + b.m12 * a.m01 + b.m22 * a.m02 + b.m32 * a.m03, b.m02 * a.m10 + b.m12 * a.m11 + b.m22 * a.m12 + b.m32 * a.m13, b.m02 * a.m20 + b.m12 * a.m21 + b.m22 * a.m22 + b.m32 * a.m23, b.m02 * a.m30 + b.m12 * a.m31 + b.m22 * a.m32 + b.m32 * a.m33, b.m03 * a.m00 + b.m13 * a.m01 + b.m23 * a.m02 + b.m33 * a.m03, b.m03 * a.m10 + b.m13 * a.m11 + b.m23 *
                    a.m12 + b.m33 * a.m13, b.m03 * a.m20 + b.m13 * a.m21 + b.m23 * a.m22 + b.m33 * a.m23, b.m03 * a.m30 + b.m13 * a.m31 + b.m23 * a.m32 + b.m33 * a.m33);
                a = this.view;
                b = new C(b.m00 * a.m00 + b.m10 * a.m01 + b.m20 * a.m02 + b.m30 * a.m03, b.m00 * a.m10 + b.m10 * a.m11 + b.m20 * a.m12 + b.m30 * a.m13, b.m00 * a.m20 + b.m10 * a.m21 + b.m20 * a.m22 + b.m30 * a.m23, b.m00 * a.m30 + b.m10 * a.m31 + b.m20 * a.m32 + b.m30 * a.m33, b.m01 * a.m00 + b.m11 * a.m01 + b.m21 * a.m02 + b.m31 * a.m03, b.m01 * a.m10 + b.m11 * a.m11 + b.m21 * a.m12 + b.m31 * a.m13, b.m01 * a.m20 + b.m11 * a.m21 + b.m21 * a.m22 + b.m31 * a.m23, b.m01 * a.m30 + b.m11 * a.m31 + b.m21 *
                    a.m32 + b.m31 * a.m33, b.m02 * a.m00 + b.m12 * a.m01 + b.m22 * a.m02 + b.m32 * a.m03, b.m02 * a.m10 + b.m12 * a.m11 + b.m22 * a.m12 + b.m32 * a.m13, b.m02 * a.m20 + b.m12 * a.m21 + b.m22 * a.m22 + b.m32 * a.m23, b.m02 * a.m30 + b.m12 * a.m31 + b.m22 * a.m32 + b.m32 * a.m33, b.m03 * a.m00 + b.m13 * a.m01 + b.m23 * a.m02 + b.m33 * a.m03, b.m03 * a.m10 + b.m13 * a.m11 + b.m23 * a.m12 + b.m33 * a.m13, b.m03 * a.m20 + b.m13 * a.m21 + b.m23 * a.m22 + b.m33 * a.m23, b.m03 * a.m30 + b.m13 * a.m31 + b.m23 * a.m32 + b.m33 * a.m33);
                a = this.translation;
                b = new C(b.m00 * a.m00 + b.m10 * a.m01 + b.m20 * a.m02 + b.m30 * a.m03, b.m00 * a.m10 + b.m10 * a.m11 +
                    b.m20 * a.m12 + b.m30 * a.m13, b.m00 * a.m20 + b.m10 * a.m21 + b.m20 * a.m22 + b.m30 * a.m23, b.m00 * a.m30 + b.m10 * a.m31 + b.m20 * a.m32 + b.m30 * a.m33, b.m01 * a.m00 + b.m11 * a.m01 + b.m21 * a.m02 + b.m31 * a.m03, b.m01 * a.m10 + b.m11 * a.m11 + b.m21 * a.m12 + b.m31 * a.m13, b.m01 * a.m20 + b.m11 * a.m21 + b.m21 * a.m22 + b.m31 * a.m23, b.m01 * a.m30 + b.m11 * a.m31 + b.m21 * a.m32 + b.m31 * a.m33, b.m02 * a.m00 + b.m12 * a.m01 + b.m22 * a.m02 + b.m32 * a.m03, b.m02 * a.m10 + b.m12 * a.m11 + b.m22 * a.m12 + b.m32 * a.m13, b.m02 * a.m20 + b.m12 * a.m21 + b.m22 * a.m22 + b.m32 * a.m23, b.m02 * a.m30 + b.m12 * a.m31 + b.m22 * a.m32 + b.m32 * a.m33,
                    b.m03 * a.m00 + b.m13 * a.m01 + b.m23 * a.m02 + b.m33 * a.m03, b.m03 * a.m10 + b.m13 * a.m11 + b.m23 * a.m12 + b.m33 * a.m13, b.m03 * a.m20 + b.m13 * a.m21 + b.m23 * a.m22 + b.m33 * a.m23, b.m03 * a.m30 + b.m13 * a.m31 + b.m23 * a.m32 + b.m33 * a.m33);
                a = this._rotation;
                a = new C(b.m00 * a.m00 + b.m10 * a.m01 + b.m20 * a.m02 + b.m30 * a.m03, b.m00 * a.m10 + b.m10 * a.m11 + b.m20 * a.m12 + b.m30 * a.m13, b.m00 * a.m20 + b.m10 * a.m21 + b.m20 * a.m22 + b.m30 * a.m23, b.m00 * a.m30 + b.m10 * a.m31 + b.m20 * a.m32 + b.m30 * a.m33, b.m01 * a.m00 + b.m11 * a.m01 + b.m21 * a.m02 + b.m31 * a.m03, b.m01 * a.m10 + b.m11 * a.m11 + b.m21 * a.m12 + b.m31 * a.m13,
                    b.m01 * a.m20 + b.m11 * a.m21 + b.m21 * a.m22 + b.m31 * a.m23, b.m01 * a.m30 + b.m11 * a.m31 + b.m21 * a.m32 + b.m31 * a.m33, b.m02 * a.m00 + b.m12 * a.m01 + b.m22 * a.m02 + b.m32 * a.m03, b.m02 * a.m10 + b.m12 * a.m11 + b.m22 * a.m12 + b.m32 * a.m13, b.m02 * a.m20 + b.m12 * a.m21 + b.m22 * a.m22 + b.m32 * a.m23, b.m02 * a.m30 + b.m12 * a.m31 + b.m22 * a.m32 + b.m32 * a.m33, b.m03 * a.m00 + b.m13 * a.m01 + b.m23 * a.m02 + b.m33 * a.m03, b.m03 * a.m10 + b.m13 * a.m11 + b.m23 * a.m12 + b.m33 * a.m13, b.m03 * a.m20 + b.m13 * a.m21 + b.m23 * a.m22 + b.m33 * a.m23, b.m03 * a.m30 + b.m13 * a.m31 + b.m23 * a.m32 + b.m33 * a.m33);
                b = window.document.getElementsByTagName("canvas")[0].getContext("2d");
                b.beginPath();
                for (var c = 0, d = this._lines; c < d.length;) {
                    var e = d[c];
                    ++c;
                    var h = e.startP1.x,
                        j = e.startP1.y,
                        l = e.startP1.z,
                        m = e.startP2.x,
                        o = e.startP2.y,
                        n = e.startP2.z,
                        e = a,
                        k = e.m03 * h + e.m13 * j + e.m23 * l + e.m33,
                        q = e.m00 * m + e.m10 * o + e.m20 * n + e.m30,
                        p = e.m01 * m + e.m11 * o + e.m21 * n + e.m31,
                        m = e.m03 * m + e.m13 * o + e.m23 * n + e.m33;
                    b.moveTo((e.m00 * h + e.m10 * j + e.m20 * l + e.m30) / k + g.DW / 2, (e.m01 * h + e.m11 * j + e.m21 * l + e.m31) / k + g.DH / 2);
                    b.lineTo(q / m + g.DW / 2, p / m + g.DH / 2)
                }
                b.strokeStyle = "#B8EE46";
                b.lineWidth = 3;
                c = this._levelColor;
                0 < this._winColorTimer && (this._winColorTimer -=
                    0.016666666666666666, c = 255 & this._levelColor >> 16, d = 255 & this._levelColor >> 8, h = 255 & this._levelColor, a = 1 - this._winColorTimer, c = 255 + (c - 255) * this._winColorTimer | 0, d = 255 + (d - 255) * this._winColorTimer | 0, h = 255 + (h - 255) * this._winColorTimer | 0, c = x["int"](Math.min(255, c)) << 16 | x["int"](Math.min(255, d)) << 8 | x["int"](Math.min(255, h)), b.lineWidth = -7 * Math.pow(a, 0.5) + 10);
                for (a = (16777215 & c).toString(16); 6 > a.length;) a = "0" + x.string(a);
                b.strokeStyle = "#" + x.string(a);
                b.lineCap = "round";
                b.stroke()
            }
        },
        onPointerDown: function(a) {
            this.freezeControls ||
                this.startDrag(a)
        },
        onPointerMove: function(a) {
            this.freezeControls || this._dragging && this.moveDrag(a)
        },
        onPointerUp: function(a) {
            this.freezeControls || this.stopDrag(a)
        },
        onMouseWheel: function(a) {
            if (!this.freezeControls && !this.freezeZ) {
                var a = H.rotationZ(a / 50),
                    b = this._rotation;
                this._rotation = new C(a.m00 * b.m00 + a.m10 * b.m01 + a.m20 * b.m02 + a.m30 * b.m03, a.m00 * b.m10 + a.m10 * b.m11 + a.m20 * b.m12 + a.m30 * b.m13, a.m00 * b.m20 + a.m10 * b.m21 + a.m20 * b.m22 + a.m30 * b.m23, a.m00 * b.m30 + a.m10 * b.m31 + a.m20 * b.m32 + a.m30 * b.m33, a.m01 * b.m00 + a.m11 * b.m01 +
                    a.m21 * b.m02 + a.m31 * b.m03, a.m01 * b.m10 + a.m11 * b.m11 + a.m21 * b.m12 + a.m31 * b.m13, a.m01 * b.m20 + a.m11 * b.m21 + a.m21 * b.m22 + a.m31 * b.m23, a.m01 * b.m30 + a.m11 * b.m31 + a.m21 * b.m32 + a.m31 * b.m33, a.m02 * b.m00 + a.m12 * b.m01 + a.m22 * b.m02 + a.m32 * b.m03, a.m02 * b.m10 + a.m12 * b.m11 + a.m22 * b.m12 + a.m32 * b.m13, a.m02 * b.m20 + a.m12 * b.m21 + a.m22 * b.m22 + a.m32 * b.m23, a.m02 * b.m30 + a.m12 * b.m31 + a.m22 * b.m32 + a.m32 * b.m33, a.m03 * b.m00 + a.m13 * b.m01 + a.m23 * b.m02 + a.m33 * b.m03, a.m03 * b.m10 + a.m13 * b.m11 + a.m23 * b.m12 + a.m33 * b.m13, a.m03 * b.m20 + a.m13 * b.m21 + a.m23 * b.m22 + a.m33 * b.m23,
                    a.m03 * b.m30 + a.m13 * b.m31 + a.m23 * b.m32 + a.m33 * b.m33);
                this._pinched = !0
            }
        },
        registerTouchPoint: function(a) {
            var b = j.get_instance().toLocal(a.viewX, a.viewY);
            this._touchPoints.push({
                x: b.x,
                y: b.y,
                id: a.id
            })
        },
        updateTouchPoint: function(a) {
            for (var b = j.get_instance().toLocal(a.viewX, a.viewY), c = 0, d = this._touchPoints; c < d.length;) {
                var e = d[c];
                ++c;
                if (e.id == a.id) {
                    e.x = b.x;
                    e.y = b.y;
                    break
                }
            }
        },
        removeTouchPoint: function(a) {
            for (var b = 0, c = this._touchPoints.length; b < c;) {
                var d = b++;
                if (this._touchPoints[d].id == a.id) {
                    this._touchPoints.splice(d,
                        1);
                    break
                }
            }
        },
        getTouchPointByID: function(a) {
            for (var b = 0, c = this._touchPoints; b < c.length;) {
                var d = c[b];
                ++b;
                if (d.id == a) return d
            }
            return null
        },
        onTouchDown: function(a) {
            if (!(this.freezeControls || 2 == this._touchPoints.length))
                if (this.registerTouchPoint(a), this._dragging) {
                    if (this._dragging) {
                        this.stopDrag(a);
                        this._touchId1 = a.id;
                        if (null != this._lastDelta) {
                            var b = this._lastDelta;
                            b.x *= 0;
                            b.y *= 0;
                            b
                        }
                        this.startPinch(a)
                    }
                } else this._touchId0 = a.id, this.startDrag(a)
        },
        onTouchMove: function(a) {
            if (!this.freezeControls && (this.updateTouchPoint(a),
                    a.id == this._touchId0 || a.id == this._touchId1)) this._dragging && this.moveDrag(a), this._pinching && this.movePinch(a)
        },
        onTouchUp: function(a) {
            if (!this.freezeControls && (this.removeTouchPoint(a), a.id == this._touchId0 || a.id == this._touchId1))
                if (this._dragging && this.stopDrag(a), this._pinching) {
                    this.stopPinch(a);
                    var b;
                    b = a.id == this._touchId0 ? this._touchId1 : this._touchId0;
                    var c = this.getTouchPointByID(b);
                    null != c && (this._touchId0 = b, this.startDrag(a), this._prevDragPoint.x = c.x, this._prevDragPoint.y = c.y)
                }
        },
        startDrag: function(a) {
            this._dragging = !0;
            a = j.get_instance().toLocal(a.viewX, a.viewY);
            this._prevDragPoint.x = a.x;
            this._prevDragPoint.y = a.y;
            this._lastTimeStamp = G.stamp()
        },
        moveDrag: function(a) {
            a = j.get_instance().toLocal(a.viewX, a.viewY);
            this._currentDragPoint.x = a.x;
            this._currentDragPoint.y = a.y;
            var a = this.getSphereVector(this._prevDragPoint.x, this._prevDragPoint.y),
                b;
            b = Math.sqrt(a.x * a.x + a.y * a.y + a.z * a.z);
            0 < b && (a.x /= b, a.y /= b, a.z /= b, a);
            a = this.getSphereVector(this._currentDragPoint.x, this._currentDragPoint.y);
            b = Math.sqrt(a.x * a.x + a.y * a.y + a.z * a.z);
            0 < b && (a.x /= b, a.y /= b, a.z /= b, a);
            a = this._prevDragPoint;
            b = this._currentDragPoint;
            b = new ca(b.x, b.y);
            b.x -= a.x;
            b.y -= a.y;
            this._lastDelta = b;
            this.freezeX ? this._lastDelta.y = 0 : (a = H.rotationX(this._lastDelta.y / 200), b = this._rotation, this._rotation = new C(a.m00 * b.m00 + a.m10 * b.m01 + a.m20 * b.m02 + a.m30 * b.m03, a.m00 * b.m10 + a.m10 * b.m11 + a.m20 * b.m12 + a.m30 * b.m13, a.m00 * b.m20 + a.m10 * b.m21 + a.m20 * b.m22 + a.m30 * b.m23, a.m00 * b.m30 + a.m10 * b.m31 + a.m20 * b.m32 + a.m30 * b.m33, a.m01 * b.m00 + a.m11 * b.m01 + a.m21 * b.m02 + a.m31 * b.m03, a.m01 * b.m10 + a.m11 * b.m11 +
                a.m21 * b.m12 + a.m31 * b.m13, a.m01 * b.m20 + a.m11 * b.m21 + a.m21 * b.m22 + a.m31 * b.m23, a.m01 * b.m30 + a.m11 * b.m31 + a.m21 * b.m32 + a.m31 * b.m33, a.m02 * b.m00 + a.m12 * b.m01 + a.m22 * b.m02 + a.m32 * b.m03, a.m02 * b.m10 + a.m12 * b.m11 + a.m22 * b.m12 + a.m32 * b.m13, a.m02 * b.m20 + a.m12 * b.m21 + a.m22 * b.m22 + a.m32 * b.m23, a.m02 * b.m30 + a.m12 * b.m31 + a.m22 * b.m32 + a.m32 * b.m33, a.m03 * b.m00 + a.m13 * b.m01 + a.m23 * b.m02 + a.m33 * b.m03, a.m03 * b.m10 + a.m13 * b.m11 + a.m23 * b.m12 + a.m33 * b.m13, a.m03 * b.m20 + a.m13 * b.m21 + a.m23 * b.m22 + a.m33 * b.m23, a.m03 * b.m30 + a.m13 * b.m31 + a.m23 * b.m32 + a.m33 * b.m33));
            this.freezeY ? this._lastDelta.x = 0 : (a = H.rotationY(this._lastDelta.x / 200), b = this._rotation, this._rotation = new C(a.m00 * b.m00 + a.m10 * b.m01 + a.m20 * b.m02 + a.m30 * b.m03, a.m00 * b.m10 + a.m10 * b.m11 + a.m20 * b.m12 + a.m30 * b.m13, a.m00 * b.m20 + a.m10 * b.m21 + a.m20 * b.m22 + a.m30 * b.m23, a.m00 * b.m30 + a.m10 * b.m31 + a.m20 * b.m32 + a.m30 * b.m33, a.m01 * b.m00 + a.m11 * b.m01 + a.m21 * b.m02 + a.m31 * b.m03, a.m01 * b.m10 + a.m11 * b.m11 + a.m21 * b.m12 + a.m31 * b.m13, a.m01 * b.m20 + a.m11 * b.m21 + a.m21 * b.m22 + a.m31 * b.m23, a.m01 * b.m30 + a.m11 * b.m31 + a.m21 * b.m32 + a.m31 * b.m33, a.m02 * b.m00 +
                a.m12 * b.m01 + a.m22 * b.m02 + a.m32 * b.m03, a.m02 * b.m10 + a.m12 * b.m11 + a.m22 * b.m12 + a.m32 * b.m13, a.m02 * b.m20 + a.m12 * b.m21 + a.m22 * b.m22 + a.m32 * b.m23, a.m02 * b.m30 + a.m12 * b.m31 + a.m22 * b.m32 + a.m32 * b.m33, a.m03 * b.m00 + a.m13 * b.m01 + a.m23 * b.m02 + a.m33 * b.m03, a.m03 * b.m10 + a.m13 * b.m11 + a.m23 * b.m12 + a.m33 * b.m13, a.m03 * b.m20 + a.m13 * b.m21 + a.m23 * b.m22 + a.m33 * b.m23, a.m03 * b.m30 + a.m13 * b.m31 + a.m23 * b.m32 + a.m33 * b.m33));
            this._prevDragPoint.x = this._currentDragPoint.x;
            this._prevDragPoint.y = this._currentDragPoint.y;
            this._lastTimeStamp = G.stamp()
        },
        stopDrag: function(a) {
            var b =
                G.stamp() - this._lastTimeStamp;
            if (null != this._lastDelta) {
                var c;
                if (!(c = 0.1 < b)) c = this._lastDelta, c = Math.sqrt(c.x * c.x + c.y * c.y) < 600 * b * h._platform.getStage().get_width() / 720;
                c ? (b = this._lastDelta, b.x *= 0, b.y *= 0) : (b = this._lastDelta, b.x *= 0.6, b.y *= 0.6);
                b
            }
            this._dragging = !1;
            a = j.get_instance().toLocal(a.viewX, a.viewY);
            this._currentDragPoint.x = a.x;
            this._currentDragPoint.y = a.y
        },
        startPinch: function() {
            if (!this.freezeZ) {
                var a = this.getTouchPointByID(this._touchId0),
                    b = this.getTouchPointByID(this._touchId1);
                (null == a ||
                    null == b) && this.stopPinch(null);
                this._pinching = !0;
                a = new ca(a.x, a.y);
                b = new ca(b.x, b.y);
                b = new ca(b.x, b.y);
                b.x -= a.x;
                b.y -= a.y;
                this._prevAngle = Math.atan2(b.y, b.x);
                this._pinched = !0
            }
        },
        movePinch: function() {
            if (!this.freezeZ) {
                var a = this.getTouchPointByID(this._touchId0),
                    b = this.getTouchPointByID(this._touchId1);
                if (null == a || null == b) this.stopPinch(null);
                else {
                    a = new ca(a.x, a.y);
                    b = new ca(b.x, b.y);
                    b = new ca(b.x, b.y);
                    b.x -= a.x;
                    b.y -= a.y;
                    var a = Math.atan2(b.y, b.x),
                        b = H.rotationZ(-a + this._prevAngle),
                        c = this._rotation;
                    this._rotation =
                        new C(b.m00 * c.m00 + b.m10 * c.m01 + b.m20 * c.m02 + b.m30 * c.m03, b.m00 * c.m10 + b.m10 * c.m11 + b.m20 * c.m12 + b.m30 * c.m13, b.m00 * c.m20 + b.m10 * c.m21 + b.m20 * c.m22 + b.m30 * c.m23, b.m00 * c.m30 + b.m10 * c.m31 + b.m20 * c.m32 + b.m30 * c.m33, b.m01 * c.m00 + b.m11 * c.m01 + b.m21 * c.m02 + b.m31 * c.m03, b.m01 * c.m10 + b.m11 * c.m11 + b.m21 * c.m12 + b.m31 * c.m13, b.m01 * c.m20 + b.m11 * c.m21 + b.m21 * c.m22 + b.m31 * c.m23, b.m01 * c.m30 + b.m11 * c.m31 + b.m21 * c.m32 + b.m31 * c.m33, b.m02 * c.m00 + b.m12 * c.m01 + b.m22 * c.m02 + b.m32 * c.m03, b.m02 * c.m10 + b.m12 * c.m11 + b.m22 * c.m12 + b.m32 * c.m13, b.m02 * c.m20 + b.m12 *
                            c.m21 + b.m22 * c.m22 + b.m32 * c.m23, b.m02 * c.m30 + b.m12 * c.m31 + b.m22 * c.m32 + b.m32 * c.m33, b.m03 * c.m00 + b.m13 * c.m01 + b.m23 * c.m02 + b.m33 * c.m03, b.m03 * c.m10 + b.m13 * c.m11 + b.m23 * c.m12 + b.m33 * c.m13, b.m03 * c.m20 + b.m13 * c.m21 + b.m23 * c.m22 + b.m33 * c.m23, b.m03 * c.m30 + b.m13 * c.m31 + b.m23 * c.m32 + b.m33 * c.m33);
                    this._prevAngle = a
                }
            }
        },
        stopPinch: function() {
            this._pinching = !1
        },
        loadLevelFromHolder: function(a) {
            this.loadLevelFromString(p.get(a));
            this._currentLevel = a;
            this._levelColor = p.color(a);
            a = Math.PI;
            this._rotation = this._tutorial.beginLevel(this._currentLevel);
            if (null == this._rotation) {
                this._rotation = new C(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
                var b = H.rotationX((a / 5 + 4 * Math.random() * a / 5) * (0.5 < Math.random() ? 1 : -1)),
                    c = this._rotation;
                this._rotation = new C(b.m00 * c.m00 + b.m10 * c.m01 + b.m20 * c.m02 + b.m30 * c.m03, b.m00 * c.m10 + b.m10 * c.m11 + b.m20 * c.m12 + b.m30 * c.m13, b.m00 * c.m20 + b.m10 * c.m21 + b.m20 * c.m22 + b.m30 * c.m23, b.m00 * c.m30 + b.m10 * c.m31 + b.m20 * c.m32 + b.m30 * c.m33, b.m01 * c.m00 + b.m11 * c.m01 + b.m21 * c.m02 + b.m31 * c.m03, b.m01 * c.m10 + b.m11 * c.m11 + b.m21 * c.m12 + b.m31 * c.m13, b.m01 * c.m20 + b.m11 * c.m21 + b.m21 *
                    c.m22 + b.m31 * c.m23, b.m01 * c.m30 + b.m11 * c.m31 + b.m21 * c.m32 + b.m31 * c.m33, b.m02 * c.m00 + b.m12 * c.m01 + b.m22 * c.m02 + b.m32 * c.m03, b.m02 * c.m10 + b.m12 * c.m11 + b.m22 * c.m12 + b.m32 * c.m13, b.m02 * c.m20 + b.m12 * c.m21 + b.m22 * c.m22 + b.m32 * c.m23, b.m02 * c.m30 + b.m12 * c.m31 + b.m22 * c.m32 + b.m32 * c.m33, b.m03 * c.m00 + b.m13 * c.m01 + b.m23 * c.m02 + b.m33 * c.m03, b.m03 * c.m10 + b.m13 * c.m11 + b.m23 * c.m12 + b.m33 * c.m13, b.m03 * c.m20 + b.m13 * c.m21 + b.m23 * c.m22 + b.m33 * c.m23, b.m03 * c.m30 + b.m13 * c.m31 + b.m23 * c.m32 + b.m33 * c.m33);
                b = H.rotationY((a / 5 + 4 * Math.random() * a / 5) * (0.5 < Math.random() ?
                    1 : -1));
                c = this._rotation;
                this._rotation = new C(b.m00 * c.m00 + b.m10 * c.m01 + b.m20 * c.m02 + b.m30 * c.m03, b.m00 * c.m10 + b.m10 * c.m11 + b.m20 * c.m12 + b.m30 * c.m13, b.m00 * c.m20 + b.m10 * c.m21 + b.m20 * c.m22 + b.m30 * c.m23, b.m00 * c.m30 + b.m10 * c.m31 + b.m20 * c.m32 + b.m30 * c.m33, b.m01 * c.m00 + b.m11 * c.m01 + b.m21 * c.m02 + b.m31 * c.m03, b.m01 * c.m10 + b.m11 * c.m11 + b.m21 * c.m12 + b.m31 * c.m13, b.m01 * c.m20 + b.m11 * c.m21 + b.m21 * c.m22 + b.m31 * c.m23, b.m01 * c.m30 + b.m11 * c.m31 + b.m21 * c.m32 + b.m31 * c.m33, b.m02 * c.m00 + b.m12 * c.m01 + b.m22 * c.m02 + b.m32 * c.m03, b.m02 * c.m10 + b.m12 * c.m11 +
                    b.m22 * c.m12 + b.m32 * c.m13, b.m02 * c.m20 + b.m12 * c.m21 + b.m22 * c.m22 + b.m32 * c.m23, b.m02 * c.m30 + b.m12 * c.m31 + b.m22 * c.m32 + b.m32 * c.m33, b.m03 * c.m00 + b.m13 * c.m01 + b.m23 * c.m02 + b.m33 * c.m03, b.m03 * c.m10 + b.m13 * c.m11 + b.m23 * c.m12 + b.m33 * c.m13, b.m03 * c.m20 + b.m13 * c.m21 + b.m23 * c.m22 + b.m33 * c.m23, b.m03 * c.m30 + b.m13 * c.m31 + b.m23 * c.m32 + b.m33 * c.m33);
                a = H.rotationZ(2 * Math.random() * a);
                b = this._rotation;
                this._rotation = new C(a.m00 * b.m00 + a.m10 * b.m01 + a.m20 * b.m02 + a.m30 * b.m03, a.m00 * b.m10 + a.m10 * b.m11 + a.m20 * b.m12 + a.m30 * b.m13, a.m00 * b.m20 + a.m10 * b.m21 +
                    a.m20 * b.m22 + a.m30 * b.m23, a.m00 * b.m30 + a.m10 * b.m31 + a.m20 * b.m32 + a.m30 * b.m33, a.m01 * b.m00 + a.m11 * b.m01 + a.m21 * b.m02 + a.m31 * b.m03, a.m01 * b.m10 + a.m11 * b.m11 + a.m21 * b.m12 + a.m31 * b.m13, a.m01 * b.m20 + a.m11 * b.m21 + a.m21 * b.m22 + a.m31 * b.m23, a.m01 * b.m30 + a.m11 * b.m31 + a.m21 * b.m32 + a.m31 * b.m33, a.m02 * b.m00 + a.m12 * b.m01 + a.m22 * b.m02 + a.m32 * b.m03, a.m02 * b.m10 + a.m12 * b.m11 + a.m22 * b.m12 + a.m32 * b.m13, a.m02 * b.m20 + a.m12 * b.m21 + a.m22 * b.m22 + a.m32 * b.m23, a.m02 * b.m30 + a.m12 * b.m31 + a.m22 * b.m32 + a.m32 * b.m33, a.m03 * b.m00 + a.m13 * b.m01 + a.m23 * b.m02 + a.m33 * b.m03,
                    a.m03 * b.m10 + a.m13 * b.m11 + a.m23 * b.m12 + a.m33 * b.m13, a.m03 * b.m20 + a.m13 * b.m21 + a.m23 * b.m22 + a.m33 * b.m23, a.m03 * b.m30 + a.m13 * b.m31 + a.m23 * b.m32 + a.m33 * b.m33)
            }
        },
        loadLevelFromArray: function(a) {
            this.clear();
            for (var b = [], c = new ca(0, 0), d = 0, e = a.length / 2 | 0; d < e;) {
                var g = d++,
                    h = new E(a[2 * g], -a[2 * g + 1], 0);
                b.push(h);
                c.x = Math.max(Math.abs(a[2 * g]), c.x);
                c.y = Math.max(Math.abs(a[2 * g + 1]), c.y)
            }
            this._lines = [];
            this.camera = new E(0, 0, 3);
            this.translation = H.translation(function(a) {
                a = a.camera;
                return new E(-a.x, -a.y, -a.z)
            }(this));
            this.view =
                H.view(this.camera, new E(0, 0, 0));
            a = 0;
            for (d = b.length / 2 | 0; a < d;) {
                var e = a++,
                    j, g = b[2 * e],
                    g = new E(g.x, g.y, g.z);
                g.x *= 1;
                g.y *= 1;
                g.z *= 1;
                j = g;
                var l, e = b[2 * e + 1],
                    e = new E(e.x, e.y, e.z);
                e.x *= 1;
                e.y *= 1;
                e.z *= 1;
                l = e;
                var g = 1 * Math.max(c.x, c.y),
                    m, e = this.camera,
                    g = j,
                    g = new E(g.x, g.y, g.z);
                g.x -= e.x;
                g.y -= e.y;
                g.z -= e.z;
                m = g;
                var o, e = this.camera,
                    g = l,
                    g = new E(g.x, g.y, g.z);
                g.x -= e.x;
                g.y -= e.y;
                g.z -= e.z;
                o = g;
                var g = 0.7 * Math.max(function() {
                        var a = m;
                        return Math.sqrt(a.x * a.x + a.y * a.y + a.z * a.z)
                    }(this), function() {
                        var a = o;
                        return Math.sqrt(a.x * a.x + a.y *
                            a.y + a.z * a.z)
                    }(this)),
                    h = 1,
                    n = 0;
                0.99 > Math.random() && (h = 0.1 + (1 < function() {
                    var a = l,
                        a = new E(a.x, a.y, a.z);
                    a.x -= j.x;
                    a.y -= j.y;
                    a.z -= j.z;
                    return Math.sqrt(a.x * a.x + a.y * a.y + a.z * a.z)
                }(this) ? 0.5 * Math.random() : 0), n = (g - g * h) * (-0.5 + Math.random()));
                var e = function() {
                        var a = m;
                        return Math.sqrt(a.x * a.x + a.y * a.y + a.z * a.z)
                    }(this) + (-0.5 + Math.random()) * g * h + n,
                    k = m,
                    q = k,
                    p;
                p = q;
                p = Math.sqrt(p.x * p.x + p.y * p.y + p.z * p.z);
                if (0 < p) {
                    var r = q;
                    r.x /= p;
                    r.y /= p;
                    r.z /= p;
                    r
                }
                q;
                q = k;
                q.x *= e;
                q.y *= e;
                q.z *= e;
                q;
                e = k;
                k = this.camera;
                k = new E(k.x, k.y, k.z);
                k.x += e.x;
                k.y +=
                    e.y;
                k.z += e.z;
                e = k;
                g = function() {
                    var a = o;
                    return Math.sqrt(a.x * a.x + a.y * a.y + a.z * a.z)
                }(this) + (-0.5 + Math.random()) * g * h + n;
                k = n = h = o;
                k = Math.sqrt(k.x * k.x + k.y * k.y + k.z * k.z);
                0 < k && (q = n, q.x /= k, q.y /= k, q.z /= k, q);
                n;
                n = h;
                n.x *= g;
                n.y *= g;
                n.z *= g;
                n;
                g = h;
                h = this.camera;
                h = new E(h.x, h.y, h.z);
                h.x += g.x;
                h.y += g.y;
                h.z += g.z;
                g = new Nc;
                g.startP1 = e;
                g.startP2 = h;
                g.width = 3;
                (function(a) {
                    a = a.center;
                    return null == a || null != a && !1
                })(this) ? (e = new E(e.x, e.y, e.z), e.x += h.x, e.y += h.y, e.z += h.z) : (e = new E(e.x, e.y, e.z), e.x += h.x, e.y += h.y, e.z += h.z, e = new E(e.x,
                    e.y, e.z), e.x /= 2, e.y /= 2, e.z /= 2, h = this.center, h = new E(h.x, h.y, h.z), h.x += e.x, h.y += e.y, h.z += e.z, e = h);
                e = new E(e.x, e.y, e.z);
                e.x /= 2;
                e.y /= 2;
                e.z /= 2;
                this.center = e;
                this._lines.push(g)
            }
            null
        },
        loadLevelFromString: function(a) {
            for (var a = a.split(";"), b = [], c = 0; c < a.length;) {
                var d = a[c];
                ++c;
                for (var d = d.split("|"), e = 0; e < d.length;) {
                    var g = d[e];
                    ++e;
                    b.push(x.parseFloat(g))
                }
            }
            this.loadLevelFromArray(b)
        },
        clear: function() {
            for (this._dragging = this._pinching = !1; null != this._lineLayer.firstChild;) this._lineLayer.removeChild(this._lineLayer.firstChild);
            this._lines = [];
            this.wAlpha = this.wBeta = this.wGamma = 0;
            this._winner = !1;
            this._winColorTimer = this._winTimer = 0;
            this.freezeControls = this._pinched = !1;
            this.ui.hide(!0, !0);
            this._lastDelta = null;
            this.timeOnLevel = 0;
            this._touchPoints = [];
            this._tutorial.clear()
        },
        justShown: function() {
            this._justShownScale.set__(0.1);
            this._justShownScale.animateTo(1, 1.3, O.elasticOut);
            this.menu.setAlpha(0).alpha.animateTo(0.3, 1.3, O.quartOut);
            this.retry.setAlpha(0).alpha.animateTo(0.3, 1.3, O.quartOut);
            this.sound.setAlpha(0).alpha.animateTo(0.3,
                1.3, O.quartOut)
        },
        projectOnSphere: function(a, b) {
            var c = g.DW,
                c = c * c,
                d = a * a,
                e = b * b;
            return d + e <= 0.5 * c ? Math.sqrt(c - (d + e)) : 0.5 * c / Math.sqrt(d + e)
        },
        getSphereVector: function(a, b) {
            var c = this.projectOnSphere(a, b);
            return new E(a, b, c)
        },
        checkWin: function(a) {
            var b = 180 * Math.atan2(this._rotation.m12, this._rotation.m22) / Math.PI,
                c = 180 * Math.atan2(-this._rotation.m02, Math.sqrt(this._rotation.m22 * this._rotation.m22 + this._rotation.m12 * this._rotation.m12)) / Math.PI,
                d = 180 * Math.atan2(this._rotation.m01, this._rotation.m00) / Math.PI;
            if (b = 2.5 > Math.abs(b)) {
                if (c = 2.5 > Math.abs(c)) {
                    if (d = 9 > Math.abs(d))
                        if (d = !this._winner)
                            if (!(d = this._pinching))
                                if (!(d = this._dragging)) {
                                    if (d = null != this._lastDelta) d = this._lastDelta, d = 0.01 > Math.sqrt(d.x * d.x + d.y * d.y);
                                    d = d || this._pinched
                                }
                    c = d
                }
                b = c
            }
            if (b) {
                if (this._winTimer += a, this._winTimer > (this._pinching || this._dragging ? 2 : 1)) this._winner = !0, this.win(), null
            } else this._winTimer = 0
        },
        win: function() {
            var a = j.get_instance().toLocal(0, 0),
                b = j.get_instance().toLocal(h._platform.getStage().get_width(), h._platform.getStage().get_height());
            this.freezeControls = !0;
            var c = this._lastDelta;
            c.x *= 0;
            c.y *= 0;
            c;
            this._rotation = new C(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            this._winMask.setXY(a.x, a.y);
            this._winMask.setSize(b.x - a.x, b.y - a.y);
            this._winMask.set_visible(!0);
            this._winMask.setAlpha(1).alpha.animateTo(0, 0.9, O.expoOut);
            this._winColorTimer = 1;
            a = 0;
            3 > this.timeOnLevel ? a = 5 : 6 > this.timeOnLevel ? a = 4 : 10 > this.timeOnLevel ? a = 3 : 15 > this.timeOnLevel ? a = 2 : 30 > this.timeOnLevel && (a = 1);
            J.topLevelCompleted = this._currentLevel + 1;
            J.updateScore(this._currentLevel, a);
            J.save();
            GameAPI.Score.submit(J.getScore());
            this.ui.show(0);
            l.snd("sound/photo").play(0.6)
        },
        toLevelMenu: function(a) {
            a._stopped = !0;
            j.get_instance().show(g.LEVEL_MENU)
        },
        switchSound: function(a) {
            h.volume.set__(1 - h.volume._value);
            a.hit.alpha.set__(0 < h.volume._value ? 0.3 : 0.15)
        },
        reset: function(a) {
            null != a && (a._stopped = !0);
            a = Math.PI;
            this._rotation = this._tutorial.beginLevel(this._currentLevel);
            if (null == this._rotation) {
                this._rotation = new C(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
                var b = H.rotationX((a / 5 + 4 * Math.random() * a / 5) * (0.5 <
                        Math.random() ? 1 : -1)),
                    c = this._rotation;
                this._rotation = new C(b.m00 * c.m00 + b.m10 * c.m01 + b.m20 * c.m02 + b.m30 * c.m03, b.m00 * c.m10 + b.m10 * c.m11 + b.m20 * c.m12 + b.m30 * c.m13, b.m00 * c.m20 + b.m10 * c.m21 + b.m20 * c.m22 + b.m30 * c.m23, b.m00 * c.m30 + b.m10 * c.m31 + b.m20 * c.m32 + b.m30 * c.m33, b.m01 * c.m00 + b.m11 * c.m01 + b.m21 * c.m02 + b.m31 * c.m03, b.m01 * c.m10 + b.m11 * c.m11 + b.m21 * c.m12 + b.m31 * c.m13, b.m01 * c.m20 + b.m11 * c.m21 + b.m21 * c.m22 + b.m31 * c.m23, b.m01 * c.m30 + b.m11 * c.m31 + b.m21 * c.m32 + b.m31 * c.m33, b.m02 * c.m00 + b.m12 * c.m01 + b.m22 * c.m02 + b.m32 * c.m03, b.m02 * c.m10 +
                    b.m12 * c.m11 + b.m22 * c.m12 + b.m32 * c.m13, b.m02 * c.m20 + b.m12 * c.m21 + b.m22 * c.m22 + b.m32 * c.m23, b.m02 * c.m30 + b.m12 * c.m31 + b.m22 * c.m32 + b.m32 * c.m33, b.m03 * c.m00 + b.m13 * c.m01 + b.m23 * c.m02 + b.m33 * c.m03, b.m03 * c.m10 + b.m13 * c.m11 + b.m23 * c.m12 + b.m33 * c.m13, b.m03 * c.m20 + b.m13 * c.m21 + b.m23 * c.m22 + b.m33 * c.m23, b.m03 * c.m30 + b.m13 * c.m31 + b.m23 * c.m32 + b.m33 * c.m33);
                b = H.rotationY((a / 5 + 4 * Math.random() * a / 5) * (0.5 < Math.random() ? 1 : -1));
                c = this._rotation;
                this._rotation = new C(b.m00 * c.m00 + b.m10 * c.m01 + b.m20 * c.m02 + b.m30 * c.m03, b.m00 * c.m10 + b.m10 * c.m11 +
                    b.m20 * c.m12 + b.m30 * c.m13, b.m00 * c.m20 + b.m10 * c.m21 + b.m20 * c.m22 + b.m30 * c.m23, b.m00 * c.m30 + b.m10 * c.m31 + b.m20 * c.m32 + b.m30 * c.m33, b.m01 * c.m00 + b.m11 * c.m01 + b.m21 * c.m02 + b.m31 * c.m03, b.m01 * c.m10 + b.m11 * c.m11 + b.m21 * c.m12 + b.m31 * c.m13, b.m01 * c.m20 + b.m11 * c.m21 + b.m21 * c.m22 + b.m31 * c.m23, b.m01 * c.m30 + b.m11 * c.m31 + b.m21 * c.m32 + b.m31 * c.m33, b.m02 * c.m00 + b.m12 * c.m01 + b.m22 * c.m02 + b.m32 * c.m03, b.m02 * c.m10 + b.m12 * c.m11 + b.m22 * c.m12 + b.m32 * c.m13, b.m02 * c.m20 + b.m12 * c.m21 + b.m22 * c.m22 + b.m32 * c.m23, b.m02 * c.m30 + b.m12 * c.m31 + b.m22 * c.m32 + b.m32 * c.m33,
                    b.m03 * c.m00 + b.m13 * c.m01 + b.m23 * c.m02 + b.m33 * c.m03, b.m03 * c.m10 + b.m13 * c.m11 + b.m23 * c.m12 + b.m33 * c.m13, b.m03 * c.m20 + b.m13 * c.m21 + b.m23 * c.m22 + b.m33 * c.m23, b.m03 * c.m30 + b.m13 * c.m31 + b.m23 * c.m32 + b.m33 * c.m33);
                a = H.rotationZ(2 * Math.random() * a);
                b = this._rotation;
                this._rotation = new C(a.m00 * b.m00 + a.m10 * b.m01 + a.m20 * b.m02 + a.m30 * b.m03, a.m00 * b.m10 + a.m10 * b.m11 + a.m20 * b.m12 + a.m30 * b.m13, a.m00 * b.m20 + a.m10 * b.m21 + a.m20 * b.m22 + a.m30 * b.m23, a.m00 * b.m30 + a.m10 * b.m31 + a.m20 * b.m32 + a.m30 * b.m33, a.m01 * b.m00 + a.m11 * b.m01 + a.m21 * b.m02 + a.m31 * b.m03,
                    a.m01 * b.m10 + a.m11 * b.m11 + a.m21 * b.m12 + a.m31 * b.m13, a.m01 * b.m20 + a.m11 * b.m21 + a.m21 * b.m22 + a.m31 * b.m23, a.m01 * b.m30 + a.m11 * b.m31 + a.m21 * b.m32 + a.m31 * b.m33, a.m02 * b.m00 + a.m12 * b.m01 + a.m22 * b.m02 + a.m32 * b.m03, a.m02 * b.m10 + a.m12 * b.m11 + a.m22 * b.m12 + a.m32 * b.m13, a.m02 * b.m20 + a.m12 * b.m21 + a.m22 * b.m22 + a.m32 * b.m23, a.m02 * b.m30 + a.m12 * b.m31 + a.m22 * b.m32 + a.m32 * b.m33, a.m03 * b.m00 + a.m13 * b.m01 + a.m23 * b.m02 + a.m33 * b.m03, a.m03 * b.m10 + a.m13 * b.m11 + a.m23 * b.m12 + a.m33 * b.m13, a.m03 * b.m20 + a.m13 * b.m21 + a.m23 * b.m22 + a.m33 * b.m23, a.m03 * b.m30 + a.m13 * b.m31 +
                    a.m23 * b.m32 + a.m33 * b.m33)
            }
            this._winner = this._pinched = !1;
            this.timeOnLevel = this._winColorTimer = this._winTimer = 0;
            this.freezeControls = !1;
            this._touchPoints = [];
            this.ui.hide(!0, !0)
        },
        resetCallback: function(a) {
            j.get_instance().show(g.GAME_SCREEN, function() {
                w.get_instance().stop();
                w.get_instance().reset(a);
                w.get_instance().ui.hide(!0, !0)
            })
        },
        get_currentLevel: function() {
            return this._currentLevel
        },
        __class__: w
    };
    var J = function() {};
    e["ru.GameState"] = J;
    J.__name__ = ["ru", "GameState"];
    J.save = function() {
        h._platform.getStorage().set("DHATOPLEVEL12",
            J.topLevelCompleted);
        h._platform.getStorage().set("DHASCORES12", J.scores)
    };
    J.load = function() {
        J.topLevelCompleted = h._platform.getStorage().get("DHATOPLEVEL12", 1);
        J.scores = h._platform.getStorage().get("DHASCORES12", null)
    };
    J.updateScore = function(a, b) {
        if (null == J.scores) {
            for (var c = [], d = 0, e = 2 * p.numOfLevels(); d < e;) d++, c.push(0);
            J.scores = c
        }
        J.scores[a] = Math.round(Math.max(J.scores[a], b));
        null
    };
    J.getScore = function() {
        var a = 0;
        if (null != J.scores)
            for (var b = 0, c = J.scores; b < c.length;) {
                var d = c[b];
                ++b;
                a = null == d || Math.isNaN(d) ?
                    a + 0 : a + d
            }
        return a
    };
    var p = function() {};
    e["ru.LevelHolder"] = p;
    p.__name__ = ["ru", "LevelHolder"];
    p.init = function() {
        p._levels = [];
        p.defineColors();
        p.parseLevels();
        p._inited = !0
    };
    p.parseLevels = function() {
        p._levels = [];
        p._levelNames = [];
        p._levelLinks = [];
        var a = function(a, c) {
            null == c && (c = 1);
            for (var d = g.pack.getFile(a).toString().split("\n"), e = d.length - 1; 0 <= e;)("" == d[e] || null == d[e] || 4 >= d[e].length) && d.splice(e, 1), e--;
            for (var e = 0, h = x["int"](Math.floor(d.length / 2)); e < h;) {
                var j = e++,
                    l = d[2 * j],
                    m = d[2 * j + 1],
                    k = "./" +
                    l;
                if (1 == j + c || 2 == j + c || 3 == j + c) k = "./";
                j = c + j;
                p._levels[j] = m;
                p._levelNames[j] = l;
                p._levelLinks[j] = k
            }
        };
        a("levels/levels_ancient.txt", 1);
        a("levels/levels_medieval.txt", 17);
        a("levels/levels_modern.txt", 33)
    };
    p.defineColors = function() {
        p._levelColors = [];
        p._levelColors[1] = 12119622;
        for (var a = [12119622, 4574703, 15811474, 15953217, 4322220], b = 0; 100 > b;) {
            var c = b++;
            p._levelColors[c] = a[Math.floor(Math.random() * a.length)]
        }
    };
    p.numOfLevels = function() {
        p._inited || p.init();
        return 48
    };
    p.get =
        function(a) {
            p._inited || p.init();
            if (0 > a || 48 < a) throw "Bad level number";
            return p._levels[a]
        };
    p.color = function(a) {
        p._inited || p.init();
        return null == p._levelColors[a] ? 16749608 : p._levelColors[a]
    };
    p.$name = function(a) {
        p._inited || p.init();
        return "" == p._levelNames[a] || null == p._levelNames[a] ? "GENERIC LEVEL NAME" : p._levelNames[a]
    };
    p.link = function(a) {
        p._inited || p.init();
        return "" == p._levelLinks[a] || null == p._levelLinks[a] ? "./" : p._levelLinks[a]
    };
    var g = function() {};
    e["ru.Main"] = g;
    g.__name__ = ["ru",
        "Main"
    ];
    g.main = function() {
        h.init();
        y.start("XZMXYWR6WWKMW6B9KVKV");
        y.setAppVersion("release");
        var a = W.fromAssets("bootstrap");
        j.get_instance();
        a = new Wb(a, g.onSuccess);
        h.root.addChild((new o).add(a))
    };
    g.onSuccess = function(a) {
        g.pack = a;
        l.addPack(a);
        g.font = new Aa(a, "fonts/arial");
        g.numberFont = new Aa(a, "fonts/doodle");
        g.whiteFont = new Aa(a, "fonts/white");
        a = (new Jc(a.getTexture("sprites"))).parseJSON(a.getFile("sprites.txt").toString());
        l.addAtlas(a);
        g.initSpilApi();
        J.load();
        p.link(1);
        h.root.addChild((new o).add(new ta(16711680,
            1, 1)));
        g.setupBackground();
        j.fillScreen = !0;
        j.get_instance().addTransition(g.LEVEL_MENU, g.GAME_SCREEN, new bb);
        j.get_instance().addTransition(g.GAME_SCREEN, g.GAME_SCREEN, new bb);
        j.get_instance().addTransition(g.GAME_SCREEN, g.WIN_SCREEN, new bb);
        j.get_instance().setScreenSize(g.DW, g.DH);
        j.get_instance().addScreen(g.GAME_SCREEN, bc);
        j.get_instance().addScreen(g.MAIN_MENU, cc);
        j.get_instance().addScreen(g.LEVEL_MENU, dc);
        j.get_instance().addScreen(g.INFO_SCREEN, ec);
        j.get_instance().addScreen(g.WIN_SCREEN,
            fc);
        h.root.addChild(j.get_instance().display);
        l.snd("sound/music").loop();
        j.get_instance().show(g.MAIN_MENU);
        null
    };
    g.setupBackground = function() {
        g.back = new Ba(l.tex("main_pattern"));
        h.root.addChild((new o).add(g.back));
        g.back.setSize(h._platform.getStage().get_width(), h._platform.getStage().get_height());
        j.get_instance().stageResize.connect(function() {
            g.back.setSize(h._platform.getStage().get_width(), h._platform.getStage().get_height())
        })
    };
    g.initSpilApi = function() {
        GameAPI.loadAPI(g.onSpilApiLoad, {
            id: "576742227280296756"
        })
    };
    g.onSpilApiLoad = function(a) {
        g.apiLoaded.set__(!0);
        g.moreGames = a.Branding.getLink("more_games");
        g.logoData = a.Branding.getLogo();
        null != g.logoData.image && "" != g.logoData.image && g.logoData.image != Math.NaN && (a = new W, a.add("logo", g.logoData.image), h._platform.loadAssetPack(a).success.connect(g.onSpilLogoLoad))
    };
    g.globalStop = function() {
        g.oldVolume = h.volume._value;
        h.volume.set__(0);
        j.get_instance().display.add(new fb(0))
    };
    g.globalStart = function() {
        h.volume.set__(g.oldVolume);
        null != j.get_instance().display._compMap.SpeedAdjuster_6 &&
            j.get_instance().display.remove(j.get_instance().display._compMap.SpeedAdjuster_6)
    };
    g.toMoreGames = function() {
        if (null != g.moreGames) {
            var a = g.moreGames.action;
            a()
        }
        return null != g.moreGames ? g.moreGames.action : "nothing"
    };
    g.toSpilLogo = function() {
        if (null != g.logoData) {
            var a = g.logoData.action;
            a()
        }
    };
    g.onSpilLogoLoad = function(a) {
        g.logo.set__(a.getTexture("logo"))
    };
    var H = function() {};
    e["ru.MatUtils"] = H;
    H.__name__ = ["ru", "MatUtils"];
    H.translation = function(a) {
        return new C(1, 0, 0, a.x, 0, 1, 0, a.y, 0, 0, 1, a.z, 0, 0, 0, 1)
    };
    H.rotationX = function(a) {
        var b = Math.cos(a),
            a = Math.sin(a);
        return new C(1, 0, 0, 0, 0, b, -a, 0, 0, a, b, 0, 0, 0, 0, 1)
    };
    H.rotationY = function(a) {
        var b = Math.cos(a),
            a = Math.sin(a);
        return new C(b, 0, a, 0, 0, 1, 0, 0, -a, 0, b, 0, 0, 0, 0, 1)
    };
    H.rotationZ = function(a) {
        var b = Math.cos(a),
            a = Math.sin(a);
        return new C(b, -a, 0, 0, a, b, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
    };
    H.view = function(a, b) {
        var c = new E(b.x, b.y, b.z);
        c.x -= a.x;
        c.y -= a.y;
        c.z -= a.z;
        var d;
        d = Math.sqrt(c.x * c.x + c.y * c.y + c.z * c.z);
        0 < d && (c.x /= d, c.y /= d, c.z /= d, c);
        d = new E(0, 1, 0);
        d = new E(d.x, d.y, d.z);
        var e = d.z *
            c.x - d.x * c.z,
            g = d.x * c.y - d.y * c.x;
        d.x = d.y * c.z - d.z * c.y;
        d.y = e;
        d.z = g;
        e = Math.sqrt(d.x * d.x + d.y * d.y + d.z * d.z);
        0 < e && (d.x /= e, d.y /= e, d.z /= e, d);
        var e = new E(c.x, c.y, c.z),
            g = e.z * d.x - e.x * d.z,
            h = e.x * d.y - e.y * d.x;
        e.x = e.y * d.z - e.z * d.y;
        e.y = g;
        e.z = h;
        var g = d.x,
            h = e.x,
            j = c.x,
            l = d.y,
            m = e.y,
            k = c.y,
            n = d.z,
            o = e.z,
            q = c.z,
            p = new E(-a.x, -a.y, -a.z);
        d = d.x * p.x + d.y * p.y + d.z * p.z;
        p = new E(-a.x, -a.y, -a.z);
        e = e.x * p.x + e.y * p.y + e.z * p.z;
        p = new E(-a.x, -a.y, -a.z);
        return new C(g, h, j, 0, l, m, k, 0, n, o, q, 0, d, e, c.x * p.x + c.y * p.y + c.z * p.z, 1)
    };
    H.scale = function(a, b, c) {
        null ==
            c && (c = 1);
        null == b && (b = 1);
        null == a && (a = 1);
        return new C(a, 0, 0, 0, 0, b, 0, 0, 0, 0, c, 0, 0, 0, 0, 1)
    };
    var Mc = function() {
        this.text = new La(g.whiteFont, "");
        this.level = 0;
        this.t0 = 3;
        this.t = 0;
        this.display = (new o).add(new r);
        Qa.get_self().add(n(this, this.update));
        this.h1 = l.spr("hand");
        this.h2 = l.spr("hand");
        this.h1.set_pointerEnabled(this.h2.set_pointerEnabled(!1));
        this.display.addChild((new o).add(this.h1.centerAnchor()));
        this.display.addChild((new o).add(this.h2.centerAnchor()));
        this.display.addChild((new o).add(this.text));
        this.h1.set_visible(this.h2.set_visible(!1));
        this.h2.setScaleXY(-1, 1)
    };
    e["ru.Tutorial"] = Mc;
    Mc.__name__ = ["ru", "Tutorial"];
    Mc.prototype = {
        update: function(a) {
            if (!(1 != this.level && 2 != this.level)) {
                this.t += a;
                this.t > this.t0 && (this.t = 0);
                if (1 == this.level) {
                    var b = 0.8 * this.t0,
                        a = g.DW / 2;
                    if (this.t < b) this.h1.setXY((g.DW - a) / 2 + a * (1 - this.t / b), 0.75 * g.DH), this.h1.setAlpha(1);
                    else {
                        var b = (this.t - b) / (this.t0 - b),
                            c = Math.pow(2 * b - 1, 2) - 1;
                        this.h1.setXY((g.DW - a) / 2 + a * b, 0.75 * g.DH + 100 * c);
                        this.h1.setAlpha(0.3)
                    }
                }
                2 == this.level && (a = 0.8 *
                    this.t0, b = 0, c = 0.4 * g.DW, this.t < a ? (b = 0.3 * this.t / a * Math.PI, this.h1.setAlpha(1)) : (b = 0.3 * (1 - (this.t - a) / (this.t0 - a)) * Math.PI, this.h1.setAlpha(0.3)), this.h1.setXY(g.DW / 2 + Math.cos(b) * c, g.DH / 2 + Math.sin(b) * c), this.h2.setXY(g.DW / 2 + Math.cos(b + Math.PI) * c, g.DH / 2 + Math.sin(b + Math.PI) * c))
            }
        },
        beginLevel: function(a) {
            this.clear();
            this.level = 0;
            var b = null;
            1 == a && (b = H.rotationY(Math.PI / 2), w.get_instance().freezeX = w.get_instance().freezeZ = !0, this.h1.set_visible(this.text.set_visible(!0)), this.h2.set_visible(!1), this.level =
                1, this.t0 = 2, this.text.set_text("DRAG TO ROTATE"), this.text.centerAnchor().setXY(g.DW / 2, 0.9 * g.DH).setScale(0.5));
            2 == a && (this.level = 2, b = H.rotationZ(0.3 * Math.PI), w.get_instance().freezeY = w.get_instance().freezeX = !0, this.h1.set_visible(this.h2.set_visible(this.text.set_visible(!0))), this.t0 = 2, this.text.set_text("USE TWO FINGERS OR MOUSE WHEEL TO ROTATE"), this.text.centerAnchor().setXY(g.DW / 2, 0.9 * g.DH).setScale(0.5));
            3 == a && (this.level = 3, this.text.set_visible(!0), this.text.set_text("ROTATE THE MODEL UNTIL YOU FIND RIGHT VIEW"),
                this.text.centerAnchor().setXY(g.DW / 2, 0.9 * g.DH).setScale(0.5));
            this.t = 0;
            return b
        },
        clear: function() {
            for (; null != this.display.firstChild;) this.display.removeChild(this.display.firstChild);
            this.display.addChild(this.h1.owner);
            this.display.addChild(this.h2.owner);
            this.display.addChild(this.text.owner);
            this.text.set_visible(!1);
            this.h1.set_visible(this.h2.set_visible(!1));
            this.level = 0;
            w.get_instance().freezeControls = w.get_instance().freezeX = w.get_instance().freezeY = w.get_instance().freezeZ = !1
        },
        __class__: Mc
    };
    var ac = function() {
        Ha.call(this);
        this.hideable = !1;
        this.back1 = new Ba(l.tex("pattern_win"));
        this.back2 = new Ba(l.tex("pattern_win"));
        this.display.addChild((new o).add(this.back1));
        this.display.addChild((new o).add(this.back2));
        this.name = new La(g.whiteFont, "FORD BELLEVILLE, 1968");
        this.back1.owner.addChild((new o).add(this.name.setScale(0.7).setAlpha(1)));
        this.play = l.spr("button_gameplay_next");
        this.retry = l.spr("button_gameplay_retry");
        this.menu = l.spr("button_gameplay_level_menu");
        this.back2.owner.addChild((new o).add(this.play).add(new N(1.1,
            0.1)).add(new L(n(this, this.nextLevel))));
        this.back2.owner.addChild((new o).add(this.retry).add(new N(1.1, 0.1)).add(new L(n(this, this.retryCallback))));
        this.back2.owner.addChild((new o).add(this.menu).add(new N(1.1, 0.1)).add(new Xb(g.LEVEL_MENU)));
        this.info = l.spr("button_gameplay_info");
        this.back1.owner.addChild((new o).add(this.info.centerAnchor()));
        this.info.get_pointerUp().connect(function() {
            h._platform.getWeb().openBrowser(p.link(w.get_instance().get_currentLevel()))
        });
        this.t = new F(123);
        this.t.get_changed().connect(n(this,
            this.updateLayout));
        Qa.get_self().add((Zc = this.t, n(Zc, Zc.update)));
        j.get_instance().stageResize.connect(n(this, this.updateLayout))
    };
    e["ru.menus.WinMenu"] = ac;
    ac.__name__ = ["ru", "menus", "WinMenu"];
    ac.__super__ = Ha;
    ac.prototype = q(Ha.prototype, {
        nextLevel: function() {
            w.get_instance().get_currentLevel() + 1 > p.numOfLevels() ? j.get_instance().show(g.WIN_SCREEN) : j.get_instance().show(g.GAME_SCREEN, function() {
                w.get_instance().loadLevelFromHolder(w.get_instance().get_currentLevel() + 1);
                w.get_instance().ui.hide(!0, !0)
            })
        },
        open: function() {
            GameAPI.GameBreak.request(g.globalStop, g.globalStart);
            Ha.prototype.open.call(this);
            this.t.set__(0);
            this.t.animateTo(1, 0.5, O.quintOut);
            this.enablePointer();
            this.name.set_text(p.$name(w.get_instance().get_currentLevel()).toUpperCase())
        },
        updateLayout: function() {
            var a = j.get_instance().toLocal(0, 0),
                b = j.get_instance().toLocal(h._platform.getStage().get_width(), h._platform.getStage().get_height());
            this.back1.setSize(b.x - a.x, this.back1.texture.get_height()).setXY(a.x, -this.back1.texture.get_height() *
                (1 - this.t._value) + a.y);
            this.back2.setSize(b.x - a.x, this.back2.texture.get_height()).setScaleXY(1, -1).setAnchor(0, this.back2.texture.get_height()).setXY(a.x, b.y - this.back2.texture.get_height() * this.t._value);
            this.name.centerAnchor().setXY((b.x - a.x) / 2, this.back1.texture.get_height() / 2);
            this.info.setXY(this.name.x._value + this.name.getNaturalWidth() * this.name.scaleX._value / 2 + 30, this.name.y._value);
            this.menu.centerAnchor().setXY(-100 + this.back2.width._value / 2, this.back2.texture.get_height() / 2).setScaleXY(1, -1);
            this.retry.centerAnchor().setXY(this.back2.width._value / 2, this.back2.texture.get_height() / 2).setScaleXY(1, -1);
            this.play.centerAnchor().setXY(100 + this.back2.width._value / 2, this.back2.texture.get_height() / 2).setScaleXY(1, -1)
        },
        hide: function() {
            this.disablePointer();
            Ha.prototype.hide.call(this)
        },
        onInstantClose: function() {
            Ha.prototype.onInstantClose.call(this)
        },
        retryCallback: function(a) {
            j.get_instance().show(g.GAME_SCREEN, function() {
                w.get_instance().stop();
                w.get_instance().reset(a);
                w.get_instance().ui.hide(!0, !0)
            })
        },
        __class__: ac
    });
    var gc = function(a) {
        this.level = 0;
        k.call(this);
        this.level = a
    };
    e["ru.objects.LevelButton"] = gc;
    gc.__name__ = ["ru", "objects", "LevelButton"];
    gc.__super__ = k;
    gc.prototype = q(k.prototype, {
        get_name: function() {
            return "LevelButton_14"
        },
        onUpdate: function() {
            var a = this.owner._compMap.Sprite_4;
            null != a && (J.topLevelCompleted >= this.level ? a.setAlpha(1) : a.setAlpha(0.6))
        },
        __class__: gc
    });
    var Nc = function() {
        this.width = 2
    };
    e["ru.objects.Line"] = Nc;
    Nc.__name__ = ["ru", "objects", "Line"];
    Nc.prototype = {
        __class__: Nc
    };
    var bc = function() {
        fa.call(this);
        this.id = g.GAME_SCREEN;
        this.level = 100;
        this.display.addChild(w.get_instance().display)
    };
    e["ru.screen.GameScreen"] = bc;
    bc.__name__ = ["ru", "screen", "GameScreen"];
    bc.__super__ = fa;
    bc.prototype = q(fa.prototype, {
        onShow: function() {
            w.get_instance().start();
            w.get_instance().sound.alpha.set__(0 < h.volume._value ? 0.3 : 0.15);
            w.get_instance().justShown();
            g.back.texture = l.tex("game_pattern")
        },
        onHide: function() {
            w.get_instance().stop();
            g.back.texture = l.tex("main_pattern")
        },
        __class__: bc
    });
    var ec = function() {
        fa.call(this);
        this.id = g.INFO_SCREEN;
        this.level = 8;
        var a = l.spr("button_main_menu").centerAnchor();
        this.display.addChild((new o).add(a).add(new N(1.3, 0.1)).add(new L(n(this, this.toMainMenu))));
        a.setXY(g.DW / 2, 0.9 * g.DH);
        var b = l.spr("info");
        this.display.addChild((new o).add(b.centerAnchor().setXY(g.DW / 2, 0.4 * g.DH)));
        this.addAnim(new Y(b, 0.3, 0.7));
        this.addAnim(new Y(a, 0.5, 0.7));
        if (null != g.logo._value) this.addSpilLogo();
        else g.logo.get_changed().connect(n(this, this.addSpilLogo)).once()
    };
    e["ru.screen.InfoScreen"] = ec;
    ec.__name__ = ["ru", "screen", "InfoScreen"];
    ec.__super__ = ga;
    ec.prototype = q(ga.prototype, {
        addSpilLogo: function() {
            if (null != g.logo._value) {
                var a = (new la(g.logo._value)).setScale(0.7);
                a.get_pointerUp().connect(g.toSpilLogo);
                this.display.addChild((new o).add(a));
                j.get_instance().positionManager.add(a, s.Left, s.Top, 25, 25)
            }
        },
        toMainMenu: function() {
            j.get_instance().show(g.MAIN_MENU)
        },
        __class__: ec
    });
    var dc = function() {
        this.target = this.amplitude = 0;
        this.start = new za;
        this.stamp = this.stamp0 =
            0;
        this.down = this.dragging = !1;
        this.scroll = 0;
        fa.call(this);
        this.id = g.LEVEL_MENU;
        this.level = 5;
        var a = l.spr("button_main_menu").centerAnchor();
        this.arrLeft = l.spr("button_arrow_left").centerAnchor().setXY(50, g.DH / 2);
        this.arrRight = l.spr("button_arrow_right").centerAnchor().setXY(g.DW - 50, g.DH / 2);
        j.get_instance().positionManager.add(a, s.Left, s.Top, 50, 50);
        j.get_instance().positionManager.add(this.arrLeft, s.Left, s.Center, 50, 0);
        j.get_instance().positionManager.add(this.arrRight, s.Right, s.Center, -50, 0);
        this.display.addChild((new o).add(a).add(new N(1.3,
            0.1)).add(new L(n(this, this.toMainMenu))));
        this.display.addChild((new o).add(this.arrLeft));
        this.display.addChild((new o).add(this.arrRight));
        this.arrLeft.get_pointerUp().connect(n(this, this.scrollLeft), !0);
        this.arrRight.get_pointerUp().connect(n(this, this.scrollRight), !0);
        this.display.add(new qb(n(this, this.update)));
        this.addRoom("ANCIENT");
        this.addRoom("MEDIEVAL");
        this.addRoom("MODERN");
        if (null != g.logo._value) this.addSpilLogo();
        else g.logo.get_changed().connect(n(this, this.addSpilLogo)).once()
    };
    e["ru.screen.LevelScreen"] = dc;
    dc.__name__ = ["ru", "screen", "LevelScreen"];
    dc.__super__ = ga;
    dc.prototype = q(ga.prototype, {
        addSpilLogo: function() {
            if (null != g.logo._value) {
                var a = (new la(g.logo._value)).setScale(0.7).centerAnchor();
                a.get_pointerUp().connect(g.toSpilLogo);
                this.display.addChild((new o).add(a));
                j.get_instance().positionManager.add(a, s.Center, s.Bottom, 0, -50)
            }
        },
        scrollLeft: function() {
            this.dragging || (this.target = Math.round(this.scroll) - 1, this.amplitude = this.target - this.scroll, 0 > this.target && (this.amplitude -=
                this.target, this.target = 0), this.target > this.rooms.length - 1 && (this.amplitude -= this.target - this.rooms.length + 1, this.target = this.rooms.length - 1), l.snd("sound/swoosh").play())
        },
        scrollRight: function() {
            this.dragging || (this.target = Math.round(this.scroll) + 1, this.amplitude = this.target - this.scroll, 0 > this.target && (this.amplitude -= this.target, this.target = 0), this.target > this.rooms.length - 1 && (this.amplitude -= this.target - this.rooms.length + 1, this.target = this.rooms.length - 1), l.snd("sound/swoosh").play())
        },
        pDown: function(a) {
            this.down = !0;
            this.dragging = !1;
            a = j.get_instance().toLocal(a.viewX, a.viewY);
            this.stamp = this.stamp0 = G.stamp();
            this.last = a;
            this.speed = 0;
            this.start.set(a.x, a.y)
        },
        pMove: function(a) {
            a = j.get_instance().toLocal(a.viewX, a.viewY);
            35 < this.start.distanceTo(a.x, a.y) && (this.dragging = !0);
            if (this.down && this.dragging) {
                var b = a.x - this.last.x,
                    c;
                c = G.stamp() == this.stamp ? 0.016666666666666666 : G.stamp() - this.stamp;
                this.scroll -= b / g.DW * j.get_instance().ratio;
                this.speed = -b / c;
                this.stamp = G.stamp();
                this.last.set(a.x, a.y)
            }
        },
        pUp: function(a) {
            this.down = !1;
            j.get_instance().toLocal(a.viewX, a.viewY);
            this.dragging ? (G.stamp() == this.stamp || G.stamp(), this.amplitude = 8 * this.speed / 60 / g.DW * j.get_instance().ratio, this.target = this.scroll + this.amplitude, 0.3 < Math.abs(this.amplitude) && l.snd("sound/swoosh").play(), a = Math.round(this.target), this.amplitude += a - this.target, this.target = a, 0 > this.target && (this.amplitude -= this.target, this.target = 0), this.target > this.rooms.length - 1 && (this.amplitude -= this.target - this.rooms.length + 1, this.target = this.rooms.length - 1), this.stamp =
                G.stamp(), this.dragging = !1) : 0 != this.scroll % 1 && (this.target = Math.round(this.target), this.target = Math.max(0, this.target), this.target = Math.min(this.rooms.length - 1, this.target), this.amplitude = this.target - this.scroll, this.stamp = G.stamp())
        },
        update: function() {
            if (!this.down && 0 != this.amplitude && !Math.isNaN(this.amplitude)) {
                var a = G.stamp() - this.stamp,
                    a = -this.amplitude * Math.exp(-a / 0.15);
                this.scroll = this.target + a;
                1.5E-4 > Math.abs(a) && (this.amplitude = 0, this.scroll = this.target)
            }
            for (var a = j.get_instance().toLocal(h._platform.getStage().get_width(),
                    0).x, b = 0, c = this.rooms.length; b < c;) {
                var d = b++;
                this.rooms[d].x.set__((-this.scroll + d) * a)
            }
            this.arrLeft.set_visible(this.arrLeft.set_pointerEnabled(0.5 > this.scroll ? !1 : !0));
            this.arrRight.set_visible(this.arrRight.set_pointerEnabled(this.scroll > this.rooms.length - 1 - 0.5 ? !1 : !0))
        },
        addRoom: function(a) {
            var b = this;
            null == this.rooms && (this.rooms = []);
            var c = 16 * this.rooms.length + 1,
                d = new r,
                e = (new o).add(d),
                h = g.DW / 2,
                m = g.DW / 1.7,
                a = new La(g.whiteFont, a);
            e.addChild((new o).add(a.centerAnchor().setXY(g.DW / 2, 0.12 * g.DH)));
            for (a = 0; 16 > a;) {
                var k = [a++];
                this.level = c + k[0];
                var n = l.spr("button_level_" + Math.floor(3 * Math.random() + 1)).centerAnchor();
                n.setXY((g.DW - h) / 2 + h / 3 * (k[0] % 4), (g.DH - m) / 2 + m / 3 * Math.floor(k[0] / 4));
                var p = (new o).add(n).add(new gc(this.level));
                n.owner.add(new L(function(a) {
                    return function() {
                        !b.dragging && J.topLevelCompleted >= c + a[0] && (w.get_instance().loadLevelFromHolder(c + a[0]), j.get_instance().show(g.GAME_SCREEN))
                    }
                }(k))).add(new N(1.3, 0.1));
                k = (new La(g.numberFont, x.string(this.level))).setLetterSpacing(4).centerAnchor().setXY(n.getNaturalWidth() /
                    2, n.getNaturalHeight() / 2);
                p.addChild((new o).add(k));
                e.addChild(p)
            }
            this.rooms.push(d);
            this.display.addChild(e)
        },
        onShow: function() {
            this.disposer = new Ia;
            this.disposer.add(h._platform.getPointer().down.connect(n(this, this.pDown)));
            this.disposer.add(h._platform.getPointer().up.connect(n(this, this.pUp)));
            this.disposer.add(h._platform.getPointer().move.connect(n(this, this.pMove)));
            this.scroll = Math.round(this.scroll)
        },
        onHide: function() {
            this.disposer.dispose()
        },
        toMainMenu: function() {
            this.dragging || j.get_instance().show(g.MAIN_MENU)
        },
        __class__: dc
    });
    var cc = function() {
        fa.call(this);
        this.id = g.GAME_SCREEN;
        this.level = 1;
        var a = l.spr("logo").centerAnchor(),
            b = l.spr("chapter").centerAnchor(),
            c = l.spr("button_play").centerAnchor();
        this.sound = l.spr("button_sound").centerAnchor();
        var d = l.spr("button_more_games").centerAnchor(),
            e = l.spr("button_info").centerAnchor();
        this.fullscreen = l.spr("button_fullscreen_off").centerAnchor();
        this.display.addChild((new o).add(a).add(new rb));
        this.display.addChild((new o).add(b).add(new rb(4.1, 9)));
        this.display.addChild((new o).add(c).add(new N(1.1,
            0.1)).add(new L(n(this, this.toLevelMenu))));
        this.display.addChild((new o).add(this.sound).add(new N(1.2, 0.1)).add(new L(n(this, this.switchSound))));
        this.display.addChild((new o).add(d).add(new N(1.2, 0.1)).add(new L(g.toMoreGames)));
        this.display.addChild((new o).add(e).add(new N(1.2, 0.1)).add(new L(n(this, this.toInfoScreen))));
        var k = window.navigator.userAgent.toLowerCase(),
            m = -1 < k.indexOf("mozilla/5.0") && -1 < k.indexOf("android") && -1 < k.indexOf("applewebkit") && -1 < k.indexOf("version") && 0 > k.indexOf("chrome"),
            k = -1 < k.indexOf("built") || -1 < k.indexOf("samsung") || -1 < k.indexOf("galaxy");
        h._platform.getStage().get_fullscreenSupported() && !m && !k && this.display.addChild((new o).add(this.fullscreen).add(new N(1.2, 0.1)).add(new L(n(this, this.toFullScreen))));
        j.get_instance().positionManager.add(a, s.Center, s.Top, 0, 170);
        j.get_instance().positionManager.add(b, s.Center, s.Top, 0, 330);
        j.get_instance().positionManager.add(c, s.Center, s.Center, 0, 120);
        j.get_instance().positionManager.add(this.sound, s.Left, s.Bottom, 60, -60);
        j.get_instance().positionManager.add(d,
            s.Center, s.Bottom, 0, -60);
        j.get_instance().positionManager.add(e, s.Right, s.Bottom, -60, -60);
        h._platform.getStage().get_fullscreenSupported() && !m && !k && j.get_instance().positionManager.add(this.fullscreen, s.Right, s.Top, -60, 60);
        this.addAnim(new Y(a, 0.2, 0.6));
        this.addAnim(new Y(b, 0.4, 0.6));
        this.addAnim(new Y(c, 0.6, 0.6));
        this.addAnim(new Y(this.sound, 0.8, 0.6));
        this.addAnim(new Y(d, 0.85, 0.6, !1));
        this.addAnim(new Y(e, 0.9, 0.6));
        h._platform.getStage().get_fullscreenSupported() && !m && !k && this.addAnim(new Y(this.fullscreen,
            0.25, 0.6));
        if (null != g.logo._value) this.addSpilLogo();
        else g.logo.get_changed().connect(n(this, this.addSpilLogo)).once()
    };
    e["ru.screen.MainScreen"] = cc;
    cc.__name__ = ["ru", "screen", "MainScreen"];
    cc.__super__ = ga;
    cc.prototype = q(ga.prototype, {
        addSpilLogo: function() {
            if (null != g.logo._value) {
                var a = (new la(g.logo._value)).setScale(0.7);
                a.get_pointerUp().connect(g.toSpilLogo);
                this.display.addChild((new o).add(a));
                j.get_instance().positionManager.add(a, s.Left, s.Top, 25, 25)
            }
        },
        toFullScreen: function() {
            h._platform.getStage().requestFullscreen(!h._platform.getStage().fullscreen._value);
            this.fullscreen.texture = h._platform.getStage().fullscreen._value ? l.tex("button_fullscreen_off") : l.tex("button_fullscreen_on")
        },
        onShow: function() {
            ga.prototype.onShow.call(this);
            this.sound.alpha.set__(h.volume._value + 0.5)
        },
        toLevelMenu: function() {
            j.get_instance().show(g.LEVEL_MENU)
        },
        toInfoScreen: function() {
            j.get_instance().show(g.INFO_SCREEN)
        },
        switchSound: function(a) {
            h.volume.set__(1 - h.volume._value);
            a.hit.alpha.set__(h.volume._value + 0.5)
        },
        __class__: cc
    });
    var fc = function() {
        fa.call(this);
        this.id = g.WIN_SCREEN;
        this.level = 1E3;
        var a = l.spr("button_main_menu").centerAnchor();
        this.display.addChild((new o).add(a).add(new N(1.3, 0.1)).add(new L(n(this, this.toMainMenu))));
        a.setXY(g.DW / 2, 0.9 * g.DH);
        var b = l.spr("win");
        this.display.addChild((new o).add(b.centerAnchor().setXY(g.DW / 2, 0.4 * g.DH)));
        this.addAnim(new Y(b, 0.3, 0.7));
        this.addAnim(new Y(a, 0.5, 0.7))
    };
    e["ru.screen.WinScreen"] = fc;
    fc.__name__ = ["ru", "screen", "WinScreen"];
    fc.__super__ = ga;
    fc.prototype = q(ga.prototype, {
        toMainMenu: function() {
            j.get_instance().show(g.MAIN_MENU)
        },
        __class__: fc
    });
    var $b = function() {
        k.call(this)
    };
    e["ru.utils.LineRender"] = $b;
    $b.__name__ = ["ru", "utils", "LineRender"];
    $b.__super__ = pb;
    $b.prototype = q(pb.prototype, {
        call: function() {
            w.get_instance().render()
        },
        __class__: $b
    });
    var y = function() {};
    e["utils.Flurry"] = y;
    y.__name__ = ["utils", "Flurry"];
    y.start = function(a) {
        var b = window.document.createElement("script");
        b.src = "./flurry.js";
        window.document.head.appendChild(b);
        y._waiting = !0;
        y.log("Loading Flurry...");
        b.onload = function() {
            y._inited = !0;
            y.log("Flurry loaded!");
            y.executeQueue();
            FlurryAgent.startSession(a)
        }
    };
    y.setAppVersion = function(a) {
        y.tryQueue(function() {
            y.setAppVersion(a)
        }) || (y.log("Flurry: setAppVersion = " + a), FlurryAgent.setAppVersion(a))
    };
    y.tryQueue = function(a) {
        !y._waiting && !y._inited && "Call Flurry.start(key) first!";
        return !y._inited && y._waiting && !y._inited ? (null == y._queue && (y._queue = []), y._queue.push(a), !0) : !1
    };
    y.executeQueue = function() {
        if (null != y._queue) {
            y.log("Executing queue (" + y._queue.length + " actions)");
            for (var a =
                    0, b = y._queue; a < b.length;) {
                var c = b[a];
                ++a;
                c()
            }
        }
    };
    y.log = function() {
        y.verbose && null
    };
    var Zc, dd = 0;
    Math.NaN = Number.NaN;
    Math.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
    Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
    e.Math = Math;
    Math.isFinite = function(a) {
        return isFinite(a)
    };
    Math.isNaN = function(a) {
        return isNaN(a)
    };
    String.prototype.__class__ = e.String = String;
    String.__name__ = ["String"];
    e.Array = Array;
    Array.__name__ = ["Array"];
    Date.prototype.__class__ = e.Date = Date;
    Date.__name__ = ["Date"];
    var ed = e.Int = {
            __name__: ["Int"]
        },
        ad = e.Dynamic = {
            __name__: ["Dynamic"]
        },
        bd = e.Float = Number;
    bd.__name__ = ["Float"];
    var cd = e.Bool = Boolean;
    cd.__ename__ = ["Bool"];
    var fd = e.Class = {
            __name__: ["Class"]
        },
        gd = {};
    oa.instance = new oa;
    M.DISPATCHING_SENTINEL = new Va(null, null);
    h.root = new o;
    h.uncaughtError = new D;
    h.hidden = new S(!1);
    h.volume = new F(1);
    h._platform = oa.instance;
    h._calledInit = !1;
    W.__meta__ = {
        obj: {
            assets: [{
                preloader: [{
                        bytes: 16359,
                        md5: "735b847274ec626009c3049d35207d51",
                        name: "bar.png"
                    }, {
                        bytes: 4624,
                        md5: "b59eed7b534427f208b5e3edc8990733",
                        name: "button.png"
                    },
                    {
                        bytes: 6298,
                        md5: "c8668aac1aa2bf2b859d2dd0b7efb5e8",
                        name: "notification.png"
                    }
                ],
                bootstrap: [{
                        bytes: 20311,
                        md5: "ba923e59d6648ec4ec0b7fef29faed1b",
                        name: "fonts/arial.fnt"
                    }, {
                        bytes: 18385,
                        md5: "0676286f681753a4916889d6a7853255",
                        name: "fonts/arial_0.png"
                    }, {
                        bytes: 1547,
                        md5: "d5fb70915a6f5f7cf6652932c3db1ab9",
                        name: "fonts/doodle.fnt"
                    }, {
                        bytes: 8038,
                        md5: "55b280dead99211040d3615c2002f9fd",
                        name: "fonts/doodle_0.png"
                    }, {
                        bytes: 18942,
                        md5: "7d7e640cf72b599b00dba3429746463e",
                        name: "fonts/white.fnt"
                    }, {
                        bytes: 17802,
                        md5: "b732e416cbddb0ecb64cd883e0a91ce3",
                        name: "fonts/white_0.png"
                    }, {
                        bytes: 222073,
                        md5: "5e18b24e63d72d6497faa2d8c655fa70",
                        name: "levels/levels_ancient.txt"
                    }, {
                        bytes: 241172,
                        md5: "29e9af0bd90a38b74bc6e44f975142cf",
                        name: "levels/levels_medieval.txt"
                    }, {
                        bytes: 177235,
                        md5: "9a78f3ff03d10cf5b57026b4005988b6",
                        name: "levels/levels_modern.txt"
                    }, {
                        bytes: 2528,
                        md5: "4704d67d9c0d5f3b2d1142988bce763b",
                        name: "sound/click.mp3"
                    }, {
                        bytes: 6358,
                        md5: "f0aad0e01f13a17b5bb0c02269116f5f",
                        name: "sound/click.ogg"
                    }, {
                        bytes: 796546,
                        md5: "9f6f6333eee880dab40d189fb9f21c74",
                        name: "sound/music.mp3"
                    },
                    {
                        bytes: 559254,
                        md5: "e203503860d0e559badb93598d3a523a",
                        name: "sound/music.ogg"
                    }, {
                        bytes: 3593,
                        md5: "31e01576d5f6be1a7c9043c37566c9b7",
                        name: "sound/photo.mp3"
                    }, {
                        bytes: 7595,
                        md5: "d5d968c369c547572e43d9f42d4872fa",
                        name: "sound/photo.ogg"
                    }, {
                        bytes: 1560,
                        md5: "df835bb3cff406e4dcfe54d2f785f3b8",
                        name: "sound/pop_0.mp3"
                    }, {
                        bytes: 5278,
                        md5: "eb0616239cfe2cfe3fba4012b8b97a08",
                        name: "sound/pop_0.ogg"
                    }, {
                        bytes: 14060,
                        md5: "5785214e1b03f073be078e4adc01d9ae",
                        name: "sound/swoosh.mp3"
                    }, {
                        bytes: 14303,
                        md5: "fba8c45401497b6f2eddedbc25499ce9",
                        name: "sound/swoosh.ogg"
                    }, {
                        bytes: 387087,
                        md5: "1172e494907e24dfea566ba469b2f811",
                        name: "sprites.png"
                    }, {
                        bytes: 5447,
                        md5: "8763806247846f0c22a3db568a0be37e",
                        name: "sprites.txt"
                    }
                ]
            }]
        }
    };
    W._supportsCrossOrigin = function() {
        var a;
        a = 0 <= window.navigator.userAgent.indexOf("Linux; U; Android") ? !1 : null != (new XMLHttpRequest).withCredentials;
        a || null;
        return a
    }();
    r._scratchPoint = new za;
    Aa.NEWLINE = new Fb(10);
    ia._sharedEvent = new qc;
    $._sharedEvent = new rc;
    R._sharedEvent = new sc;
    Ta.CANVAS_TEXTURES = (new sa("(iPhone|iPod|iPad)",
        "")).match(window.navigator.userAgent);
    A._mediaRefCount = 0;
    A._detectBlobSupport = !0;
    u.VENDOR_PREFIXES = ["webkit", "moz", "ms", "o", "khtml"];
    u.SHOULD_HIDE_MOBILE_BROWSER = window.top == window && (new sa("Mobile(/.*)? Safari", "")).match(window.navigator.userAgent);
    B._detectSupport = !0;
    Ea._scratchMatrix = new ja;
    l.mod = 1;
    l._init = !1;
    j.inited = !1;
    j.fillScreen = !1;
    wa.USE_CACHE = !1;
    wa.USE_ENUM_INDEX = !1;
    wa.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
    U.DEFAULT_RESOLVER = I;
    U.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
    Ra.count = 0;
    J.topLevelCompleted = 1;
    p._inited = !1;
    g.GAME_SCREEN = 1;
    g.MAIN_MENU = 2;
    g.LEVEL_MENU = 3;
    g.WIN_SCREEN = 4;
    g.INFO_SCREEN = 5;
    g.DW = 640;
    g.DH = 800;
    g.apiLoaded = new S(!1);
    g.logo = new S(null);
    g.oldVolume = 1;
    y._inited = !1;
    y._waiting = !1;
    y.verbose = !1;
    g.main()
})();