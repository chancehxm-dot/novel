function catched(t, e) {
    try {
        t()
    } catch (i) {
        var s = 'CATCHED: "' + e + '"\n[' + i + "]\n\n" + i.stack;
        trace(s), alert(s)
    }
}

function update(t, e) {
    t.prototype.update.call(e)
}

function extend(t, e) {
    pro = t.prototype = Object.create(e.prototype)
}

function trace(t) {
    window.console && window.console.log && console.log(t)
}

function include(t) {
    GodStep.includes[t] || (GodStep.includes[t] = !0, document.write("<script src=" + GodPath + t + ".js type='text/javascript' charset='utf-8'></script>"))
}

function addCSS(t) {
    var e = document.createElement("link");
    e.rel = "stylesheet", e.href = GodPath + t + ".css", document.getElementsByTagName("head")[0].appendChild(e)
}

function dialog(t, e) {
    GodStep.Mejdu.dialogSoul && GodStep.Mejdu.dialogSoul.dialog(t, e)
}

function dispatch(t, e, i, s) {
    GodStep.dispatch(t, e, i, s)
}

function delEvent(t, e, i) {
    t.removeEventListener(e, i)
}

function addEvent(t, e, i) {
    GodStep.addEvent(t, e, i)
}

function override(t, e, i) {
    Object.defineProperty(t.prototype, e, i)
}

function h_resize() {
    GodStep.RESIZE_REQUEST = !1;
    var t = GodStep.Game.instance;
    if (t.FULLPAGE) {
        var e;
        "number" == typeof window.innerWidth ? e = window.innerHeight : document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight) ? e = document.documentElement.clientHeight : document.body && (document.body.clientWidth || document.body.clientHeight) && (e = document.body.clientHeight), t.resizeWindow(document.body.clientWidth, e)
    }
}

function startPetResque(t) {
    if (!PR.PetResque.instance) {
        var e = new PR.PetResque(t);
        e.div.style.margin = "0 auto", e.div.style["vertical-align"] = "middle", e.initResizeEvents()
    }
}
var GS, GodStep = GS = GodStep || {},
    GodPath = GodPath || "";
GodStep.ver = 1;
var pro;
GodStep.includes = [], GodStep.version = "1.1.3",
    function() {
        var t = this,
            e = e || {};
        e.WEBGL_RENDERER = 0, e.CANVAS_RENDERER = 1, e.VERSION = "v2.2.7", e.blendModes = {
                NORMAL: 0,
                ADD: 1,
                MULTIPLY: 2,
                SCREEN: 3,
                OVERLAY: 4,
                DARKEN: 5,
                LIGHTEN: 6,
                COLOR_DODGE: 7,
                COLOR_BURN: 8,
                HARD_LIGHT: 9,
                SOFT_LIGHT: 10,
                DIFFERENCE: 11,
                EXCLUSION: 12,
                HUE: 13,
                SATURATION: 14,
                COLOR: 15,
                LUMINOSITY: 16
            }, e.scaleModes = {
                DEFAULT: 0,
                LINEAR: 0,
                NEAREST: 1
            }, e._UID = 0, "undefined" != typeof Float32Array ? (e.Float32Array = Float32Array, e.Uint16Array = Uint16Array, e.Uint32Array = Uint32Array, e.ArrayBuffer = ArrayBuffer) : (e.Float32Array = Array, e.Uint16Array = Array), e.INTERACTION_FREQUENCY = 30, e.AUTO_PREVENT_DEFAULT = !0, e.PI_2 = 2 * Math.PI, e.RAD_TO_DEG = 180 / Math.PI, e.DEG_TO_RAD = Math.PI / 180, e.RETINA_PREFIX = "@2x", e.dontSayHello = !1, e.defaultRenderOptions = {
                view: null,
                transparent: !1,
                antialias: !1,
                preserveDrawingBuffer: !1,
                resolution: 1,
                clearBeforeRender: !0,
                autoResize: !1
            }, e.sayHello = function(t) {
                if (!e.dontSayHello) {
                    if (navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
                        var i = ["%c %c %c Pixi.js " + e.VERSION + " - " + t + "  %c  %c  http://www.pixijs.com/  %c %c ♥%c♥%c♥ ", "background: #ff66a5", "background: #ff66a5", "color: #ff66a5; background: #030307;", "background: #ff66a5", "background: #ffc3dc", "background: #ff66a5", "color: #ff2424; background: #fff", "color: #ff2424; background: #fff", "color: #ff2424; background: #fff"];
                        console.log.apply(console, i)
                    } else window.console && console.log("Pixi.js " + e.VERSION + " - http://www.pixijs.com/");
                    e.dontSayHello = !0
                }
            }, e.Point = function(t, e) {
                this.x = t || 0, this.y = e || 0
            }, e.Point.prototype.clone = function() {
                return new e.Point(this.x, this.y)
            }, e.Point.prototype.set = function(t, e) {
                this.x = t || 0, this.y = e || (0 !== e ? this.x : 0)
            }, e.Point.prototype.constructor = e.Point, e.Rectangle = function(t, e, i, s) {
                this.x = t || 0, this.y = e || 0, this.width = i || 0, this.height = s || 0
            }, e.Rectangle.prototype.clone = function() {
                return new e.Rectangle(this.x, this.y, this.width, this.height)
            }, e.Rectangle.prototype.contains = function(t, e) {
                if (this.width <= 0 || this.height <= 0) return !1;
                var i = this.x;
                if (t >= i && t <= i + this.width) {
                    var s = this.y;
                    if (e >= s && e <= s + this.height) return !0
                }
                return !1
            }, e.Rectangle.prototype.constructor = e.Rectangle, e.EmptyRectangle = new e.Rectangle(0, 0, 0, 0), e.Polygon = function(t) {
                if (t instanceof Array || (t = Array.prototype.slice.call(arguments)), t[0] instanceof e.Point) {
                    for (var i = [], s = 0, n = t.length; n > s; s++) i.push(t[s].x, t[s].y);
                    t = i
                }
                this.closed = !0, this.points = t
            }, e.Polygon.prototype.clone = function() {
                var t = this.points.slice();
                return new e.Polygon(t)
            }, e.Polygon.prototype.contains = function(t, e) {
                for (var i = !1, s = this.points.length / 2, n = 0, r = s - 1; s > n; r = n++) {
                    var o = this.points[2 * n],
                        a = this.points[2 * n + 1],
                        h = this.points[2 * r],
                        l = this.points[2 * r + 1],
                        d = a > e != l > e && (h - o) * (e - a) / (l - a) + o > t;
                    d && (i = !i)
                }
                return i
            }, e.Polygon.prototype.constructor = e.Polygon, e.Circle = function(t, e, i) {
                this.x = t || 0, this.y = e || 0, this.radius = i || 0
            }, e.Circle.prototype.clone = function() {
                return new e.Circle(this.x, this.y, this.radius)
            }, e.Circle.prototype.contains = function(t, e) {
                if (this.radius <= 0) return !1;
                var i = this.x - t,
                    s = this.y - e,
                    n = this.radius * this.radius;
                return i *= i, s *= s, n >= i + s
            }, e.Circle.prototype.getBounds = function() {
                return new e.Rectangle(this.x - this.radius, this.y - this.radius, 2 * this.radius, 2 * this.radius)
            }, e.Circle.prototype.constructor = e.Circle, e.Ellipse = function(t, e, i, s) {
                this.x = t || 0, this.y = e || 0, this.width = i || 0, this.height = s || 0
            }, e.Ellipse.prototype.clone = function() {
                return new e.Ellipse(this.x, this.y, this.width, this.height)
            }, e.Ellipse.prototype.contains = function(t, e) {
                if (this.width <= 0 || this.height <= 0) return !1;
                var i = (t - this.x) / this.width,
                    s = (e - this.y) / this.height;
                return i *= i, s *= s, 1 >= i + s
            }, e.Ellipse.prototype.getBounds = function() {
                return new e.Rectangle(this.x - this.width, this.y - this.height, this.width, this.height)
            }, e.Ellipse.prototype.constructor = e.Ellipse, e.RoundedRectangle = function(t, e, i, s, n) {
                this.x = t || 0, this.y = e || 0, this.width = i || 0, this.height = s || 0, this.radius = n || 20
            }, e.RoundedRectangle.prototype.clone = function() {
                return new e.RoundedRectangle(this.x, this.y, this.width, this.height, this.radius)
            }, e.RoundedRectangle.prototype.contains = function(t, e) {
                if (this.width <= 0 || this.height <= 0) return !1;
                var i = this.x;
                if (t >= i && t <= i + this.width) {
                    var s = this.y;
                    if (e >= s && e <= s + this.height) return !0
                }
                return !1
            }, e.RoundedRectangle.prototype.constructor = e.RoundedRectangle, e.Matrix = function(t, e, i, s, n, r) {
                this.a = t || 1, this.b = e || 0, this.c = i || 0, this.d = s || 1, this.tx = n || 0, this.ty = r || 0
            }, e.Matrix.prototype.fromArray = function(t) {
                this.a = t[0], this.b = t[1], this.c = t[3], this.d = t[4], this.tx = t[2], this.ty = t[5]
            }, e.Matrix.prototype.toArray = function(t) {
                this.array || (this.array = new e.Float32Array(9));
                var i = this.array;
                return t ? (i[0] = this.a, i[1] = this.b, i[2] = 0, i[3] = this.c, i[4] = this.d, i[5] = 0, i[6] = this.tx, i[7] = this.ty, i[8] = 1) : (i[0] = this.a, i[1] = this.c, i[2] = this.tx, i[3] = this.b, i[4] = this.d, i[5] = this.ty, i[6] = 0, i[7] = 0, i[8] = 1), i
            }, e.Matrix.prototype.apply = function(t, i) {
                return i = i || new e.Point, i.x = this.a * t.x + this.c * t.y + this.tx, i.y = this.b * t.x + this.d * t.y + this.ty, i
            }, e.Matrix.prototype.applyInverse = function(t, i) {
                i = i || new e.Point;
                var s = 1 / (this.a * this.d + this.c * -this.b);
                return i.x = this.d * s * t.x + -this.c * s * t.y + (this.ty * this.c - this.tx * this.d) * s, i.y = this.a * s * t.y + -this.b * s * t.x + (-this.ty * this.a + this.tx * this.b) * s, i
            }, e.Matrix.prototype.translate = function(t, e) {
                return this.tx += t, this.ty += e, this
            }, e.Matrix.prototype.scale = function(t, e) {
                return this.a *= t, this.d *= e, this.c *= t, this.b *= e, this.tx *= t, this.ty *= e, this
            }, e.Matrix.prototype.rotate = function(t) {
                var e = Math.cos(t),
                    i = Math.sin(t),
                    s = this.a,
                    n = this.c,
                    r = this.tx;
                return this.a = s * e - this.b * i, this.b = s * i + this.b * e, this.c = n * e - this.d * i, this.d = n * i + this.d * e, this.tx = r * e - this.ty * i, this.ty = r * i + this.ty * e, this
            }, e.Matrix.prototype.append = function(t) {
                var e = this.a,
                    i = this.b,
                    s = this.c,
                    n = this.d;
                return this.a = t.a * e + t.b * s, this.b = t.a * i + t.b * n, this.c = t.c * e + t.d * s, this.d = t.c * i + t.d * n, this.tx = t.tx * e + t.ty * s + this.tx, this.ty = t.tx * i + t.ty * n + this.ty, this
            }, e.Matrix.prototype.identity = function() {
                return this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0, this
            }, e.identityMatrix = new e.Matrix, e.DisplayObject = function() {
                this.position = new e.Point, this.scale = new e.Point(1, 1), this.pivot = new e.Point(0, 0), this.rotation = 0, this.alpha = 1, this.visible = !0, this.hitArea = null, this.buttonMode = !1, this.renderable = !1, this.parent = null, this.stage = null, this.worldAlpha = 1, this._interactive = !1, this.defaultCursor = "pointer", this.worldTransform = new e.Matrix, this._sr = 0, this._cr = 1, this.filterArea = null, this._bounds = new e.Rectangle(0, 0, 1, 1), this._currentBounds = null, this._mask = null, this._cacheAsBitmap = !1, this._cacheIsDirty = !1
            }, e.DisplayObject.prototype.constructor = e.DisplayObject, Object.defineProperty(e.DisplayObject.prototype, "interactive", {
                get: function() {
                    return this._interactive
                },
                set: function(t) {
                    this._interactive = t, this.stage && (this.stage.dirty = !0)
                }
            }), Object.defineProperty(e.DisplayObject.prototype, "worldVisible", {
                get: function() {
                    var t = this;
                    do {
                        if (!t.visible) return !1;
                        t = t.parent
                    } while (t);
                    return !0
                }
            }), Object.defineProperty(e.DisplayObject.prototype, "mask", {
                get: function() {
                    return this._mask
                },
                set: function(t) {
                    this._mask && (this._mask.isMask = !1), this._mask = t, this._mask && (this._mask.isMask = !0)
                }
            }), Object.defineProperty(e.DisplayObject.prototype, "filters", {
                get: function() {
                    return this._filters
                },
                set: function(t) {
                    if (t) {
                        for (var e = [], i = 0; i < t.length; i++)
                            for (var s = t[i].passes, n = 0; n < s.length; n++) e.push(s[n]);
                        this._filterBlock = {
                            target: this,
                            filterPasses: e
                        }
                    }
                    this._filters = t
                }
            }), Object.defineProperty(e.DisplayObject.prototype, "cacheAsBitmap", {
                get: function() {
                    return this._cacheAsBitmap
                },
                set: function(t) {
                    this._cacheAsBitmap !== t && (t ? this._generateCachedSprite() : this._destroyCachedSprite(), this._cacheAsBitmap = t)
                }
            }), e.DisplayObject.prototype.updateTransform = function() {
                var t, i, s, n, r, o, a = this.parent.worldTransform,
                    h = this.worldTransform;
                this.rotation % e.PI_2 ? (this.rotation !== this.rotationCache && (this.rotationCache = this.rotation, this._sr = Math.sin(this.rotation), this._cr = Math.cos(this.rotation)), t = this._cr * this.scale.x, i = this._sr * this.scale.x, s = -this._sr * this.scale.y, n = this._cr * this.scale.y, r = this.position.x, o = this.position.y, (this.pivot.x || this.pivot.y) && (r -= this.pivot.x * t + this.pivot.y * s, o -= this.pivot.x * i + this.pivot.y * n), h.a = t * a.a + i * a.c, h.b = t * a.b + i * a.d, h.c = s * a.a + n * a.c, h.d = s * a.b + n * a.d, h.tx = r * a.a + o * a.c + a.tx, h.ty = r * a.b + o * a.d + a.ty) : (t = this.scale.x, n = this.scale.y, r = this.position.x - this.pivot.x * t, o = this.position.y - this.pivot.y * n, h.a = t * a.a, h.b = t * a.b, h.c = n * a.c, h.d = n * a.d, h.tx = r * a.a + o * a.c + a.tx, h.ty = r * a.b + o * a.d + a.ty), this.worldAlpha = this.alpha * this.parent.worldAlpha
            }, e.DisplayObject.prototype.displayObjectUpdateTransform = e.DisplayObject.prototype.updateTransform, e.DisplayObject.prototype.getBounds = function(t) {
                return t = t, e.EmptyRectangle
            }, e.DisplayObject.prototype.getLocalBounds = function() {
                return this.getBounds(e.identityMatrix)
            }, e.DisplayObject.prototype.setStageReference = function(t) {
                this.stage = t, this._interactive && (this.stage.dirty = !0)
            }, e.DisplayObject.prototype.generateTexture = function(t, i, s) {
                var n = this.getLocalBounds(),
                    r = new e.RenderTexture(0 | n.width, 0 | n.height, s, i, t);
                return e.DisplayObject._tempMatrix.tx = -n.x, e.DisplayObject._tempMatrix.ty = -n.y, r.render(this, e.DisplayObject._tempMatrix), r
            }, e.DisplayObject.prototype.updateCache = function() {
                this._generateCachedSprite()
            }, e.DisplayObject.prototype.toGlobal = function(t) {
                return this.displayObjectUpdateTransform(), this.worldTransform.apply(t)
            }, e.DisplayObject.prototype.toLocal = function(t, e) {
                return e && (t = e.toGlobal(t)), this.displayObjectUpdateTransform(), this.worldTransform.applyInverse(t)
            }, e.DisplayObject.prototype._renderCachedSprite = function(t) {
                this._cachedSprite.worldAlpha = this.worldAlpha, t.gl ? e.Sprite.prototype._renderWebGL.call(this._cachedSprite, t) : e.Sprite.prototype._renderCanvas.call(this._cachedSprite, t)
            }, e.DisplayObject.prototype._generateCachedSprite = function() {
                this._cacheAsBitmap = !1;
                var t = this.getLocalBounds();
                if (this._cachedSprite) this._cachedSprite.texture.resize(0 | t.width, 0 | t.height);
                else {
                    var i = new e.RenderTexture(0 | t.width, 0 | t.height);
                    this._cachedSprite = new e.Sprite(i), this._cachedSprite.worldTransform = this.worldTransform
                }
                var s = this._filters;
                this._filters = null, this._cachedSprite.filters = s, e.DisplayObject._tempMatrix.tx = -t.x, e.DisplayObject._tempMatrix.ty = -t.y, this._cachedSprite.texture.render(this, e.DisplayObject._tempMatrix, !0), this._cachedSprite.anchor.x = -(t.x / t.width), this._cachedSprite.anchor.y = -(t.y / t.height), this._filters = s, this._cacheAsBitmap = !0
            }, e.DisplayObject.prototype._destroyCachedSprite = function() {
                this._cachedSprite && (this._cachedSprite.texture.destroy(!0), this._cachedSprite = null)
            }, e.DisplayObject.prototype._renderWebGL = function(t) {
                t = t
            }, e.DisplayObject.prototype._renderCanvas = function(t) {
                t = t
            }, e.DisplayObject._tempMatrix = new e.Matrix, Object.defineProperty(e.DisplayObject.prototype, "x", {
                get: function() {
                    return this.position.x
                },
                set: function(t) {
                    this.position.x = t
                }
            }), Object.defineProperty(e.DisplayObject.prototype, "y", {
                get: function() {
                    return this.position.y
                },
                set: function(t) {
                    this.position.y = t
                }
            }), e.DisplayObjectContainer = function() {
                e.DisplayObject.call(this), this.children = []
            }, e.DisplayObjectContainer.prototype = Object.create(e.DisplayObject.prototype), e.DisplayObjectContainer.prototype.constructor = e.DisplayObjectContainer, Object.defineProperty(e.DisplayObjectContainer.prototype, "width", {
                get: function() {
                    return this.scale.x * this.getLocalBounds().width
                },
                set: function(t) {
                    var e = this.getLocalBounds().width;
                    0 !== e ? this.scale.x = t / e : this.scale.x = 1, this._width = t
                }
            }), Object.defineProperty(e.DisplayObjectContainer.prototype, "height", {
                get: function() {
                    return this.scale.y * this.getLocalBounds().height
                },
                set: function(t) {
                    var e = this.getLocalBounds().height;
                    0 !== e ? this.scale.y = t / e : this.scale.y = 1, this._height = t
                }
            }), e.DisplayObjectContainer.prototype.addChild = function(t) {
                return this.addChildAt(t, this.children.length)
            }, e.DisplayObjectContainer.prototype.addChildAt = function(t, e) {
                if (e >= 0 && e <= this.children.length) return t.parent && t.parent.removeChild(t), t.parent = this, this.children.splice(e, 0, t), this.stage && t.setStageReference(this.stage), t;
                throw new Error(t + "addChildAt: The index " + e + " supplied is out of bounds " + this.children.length)
            }, e.DisplayObjectContainer.prototype.swapChildren = function(t, e) {
                if (t !== e) {
                    var i = this.getChildIndex(t),
                        s = this.getChildIndex(e);
                    if (0 > i || 0 > s) throw new Error("swapChildren: Both the supplied DisplayObjects must be a child of the caller.");
                    this.children[i] = e, this.children[s] = t
                }
            }, e.DisplayObjectContainer.prototype.getChildIndex = function(t) {
                var e = this.children.indexOf(t);
                if (-1 === e) throw new Error("The supplied DisplayObject must be a child of the caller");
                return e
            }, e.DisplayObjectContainer.prototype.setChildIndex = function(t, e) {
                if (0 > e || e >= this.children.length) throw new Error("The supplied index is out of bounds");
                var i = this.getChildIndex(t);
                this.children.splice(i, 1), this.children.splice(e, 0, t)
            }, e.DisplayObjectContainer.prototype.getChildAt = function(t) {
                if (0 > t || t >= this.children.length) throw new Error("getChildAt: Supplied index " + t + " does not exist in the child list, or the supplied DisplayObject must be a child of the caller");
                return this.children[t]
            }, e.DisplayObjectContainer.prototype.removeChild = function(t) {
                var e = this.children.indexOf(t);
                if (-1 !== e) return this.removeChildAt(e)
            }, e.DisplayObjectContainer.prototype.removeChildAt = function(t) {
                var e = this.getChildAt(t);
                return this.stage && e.removeStageReference(), e.parent = void 0, this.children.splice(t, 1), e
            }, e.DisplayObjectContainer.prototype.removeChildren = function(t, e) {
                var i = t || 0,
                    s = "number" == typeof e ? e : this.children.length,
                    n = s - i;
                if (n > 0 && s >= n) {
                    for (var r = this.children.splice(i, n), o = 0; o < r.length; o++) {
                        var a = r[o];
                        this.stage && a.removeStageReference(), a.parent = void 0
                    }
                    return r
                }
                if (0 === n && 0 === this.children.length) return [];
                throw new Error("removeChildren: Range Error, numeric values are outside the acceptable range")
            }, e.DisplayObjectContainer.prototype.updateTransform = function() {
                if (this.visible && (this.displayObjectUpdateTransform(), !this._cacheAsBitmap))
                    for (var t = 0, e = this.children.length; e > t; t++) this.children[t].updateTransform()
            }, e.DisplayObjectContainer.prototype.displayObjectContainerUpdateTransform = e.DisplayObjectContainer.prototype.updateTransform, e.DisplayObjectContainer.prototype.getBounds = function() {
                if (0 === this.children.length) return e.EmptyRectangle;
                for (var t, i, s, n = 1 / 0, r = 1 / 0, o = -(1 / 0), a = -(1 / 0), h = !1, l = 0, d = this.children.length; d > l; l++) {
                    var c = this.children[l];
                    c.visible && (h = !0, t = this.children[l].getBounds(), n = n < t.x ? n : t.x, r = r < t.y ? r : t.y, i = t.width + t.x, s = t.height + t.y, o = o > i ? o : i, a = a > s ? a : s)
                }
                if (!h) return e.EmptyRectangle;
                var u = this._bounds;
                return u.x = n, u.y = r, u.width = o - n, u.height = a - r, u
            }, e.DisplayObjectContainer.prototype.getLocalBounds = function() {
                var t = this.worldTransform;
                this.worldTransform = e.identityMatrix;
                for (var i = 0, s = this.children.length; s > i; i++) this.children[i].updateTransform();
                var n = this.getBounds();
                return this.worldTransform = t, n
            }, e.DisplayObjectContainer.prototype.setStageReference = function(t) {
                this.stage = t, this._interactive && (this.stage.dirty = !0);
                for (var e = 0, i = this.children.length; i > e; e++) {
                    var s = this.children[e];
                    s.setStageReference(t)
                }
            }, e.DisplayObjectContainer.prototype.removeStageReference = function() {
                for (var t = 0, e = this.children.length; e > t; t++) {
                    var i = this.children[t];
                    i.removeStageReference()
                }
                this._interactive && (this.stage.dirty = !0), this.stage = null
            }, e.DisplayObjectContainer.prototype._renderWebGL = function(t) {
                if (this.visible && !(this.alpha <= 0)) {
                    if (this._cacheAsBitmap) return void this._renderCachedSprite(t);
                    var e, i;
                    if (this._mask || this._filters) {
                        for (this._filters && (t.spriteBatch.flush(), t.filterManager.pushFilter(this._filterBlock)), this._mask && (t.spriteBatch.stop(), t.maskManager.pushMask(this.mask, t), t.spriteBatch.start()), e = 0, i = this.children.length; i > e; e++) this.children[e]._renderWebGL(t);
                        t.spriteBatch.stop(), this._mask && t.maskManager.popMask(this._mask, t), this._filters && t.filterManager.popFilter(), t.spriteBatch.start()
                    } else
                        for (e = 0, i = this.children.length; i > e; e++) this.children[e]._renderWebGL(t)
                }
            }, e.DisplayObjectContainer.prototype._renderCanvas = function(t) {
                if (this.visible !== !1 && 0 !== this.alpha) {
                    if (this._cacheAsBitmap) return void this._renderCachedSprite(t);
                    this._mask && t.maskManager.pushMask(this._mask, t);
                    for (var e = 0, i = this.children.length; i > e; e++) {
                        var s = this.children[e];
                        s._renderCanvas(t)
                    }
                    this._mask && t.maskManager.popMask(t)
                }
            }, e.Sprite = function(t) {
                e.DisplayObjectContainer.call(this), this.anchor = new e.Point, this.texture = t || e.Texture.emptyTexture, this._width = 0, this._height = 0, this.tint = 16777215, this.blendMode = e.blendModes.NORMAL, this.shader = null, this.texture.baseTexture.hasLoaded ? this.onTextureUpdate() : this.texture.on("update", this.onTextureUpdate.bind(this)), this.renderable = !0
            }, e.Sprite.prototype = Object.create(e.DisplayObjectContainer.prototype), e.Sprite.prototype.constructor = e.Sprite, Object.defineProperty(e.Sprite.prototype, "width", {
                get: function() {
                    return this.scale.x * this.texture.frame.width
                },
                set: function(t) {
                    this.scale.x = t / this.texture.frame.width, this._width = t
                }
            }), Object.defineProperty(e.Sprite.prototype, "height", {
                get: function() {
                    return this.scale.y * this.texture.frame.height
                },
                set: function(t) {
                    this.scale.y = t / this.texture.frame.height, this._height = t
                }
            }), e.Sprite.prototype.setTexture = function(t) {
                this.texture = t, this.cachedTint = 16777215
            }, e.Sprite.prototype.onTextureUpdate = function() {
                this._width && (this.scale.x = this._width / this.texture.frame.width), this._height && (this.scale.y = this._height / this.texture.frame.height)
            }, e.Sprite.prototype.getBounds = function(t) {
                var e = this.texture.frame.width,
                    i = this.texture.frame.height,
                    s = e * (1 - this.anchor.x),
                    n = e * -this.anchor.x,
                    r = i * (1 - this.anchor.y),
                    o = i * -this.anchor.y,
                    a = t || this.worldTransform,
                    h = a.a,
                    l = a.b,
                    d = a.c,
                    c = a.d,
                    u = a.tx,
                    p = a.ty,
                    f = -(1 / 0),
                    y = -(1 / 0),
                    x = 1 / 0,
                    m = 1 / 0;
                if (0 === l && 0 === d) 0 > h && (h *= -1), 0 > c && (c *= -1), x = h * n + u, f = h * s + u, m = c * o + p, y = c * r + p;
                else {
                    var g = h * n + d * o + u,
                        v = c * o + l * n + p,
                        b = h * s + d * o + u,
                        _ = c * o + l * s + p,
                        S = h * s + d * r + u,
                        w = c * r + l * s + p,
                        T = h * n + d * r + u,
                        C = c * r + l * n + p;
                    x = x > g ? g : x, x = x > b ? b : x, x = x > S ? S : x, x = x > T ? T : x, m = m > v ? v : m, m = m > _ ? _ : m, m = m > w ? w : m, m = m > C ? C : m, f = g > f ? g : f, f = b > f ? b : f, f = S > f ? S : f, f = T > f ? T : f, y = v > y ? v : y, y = _ > y ? _ : y, y = w > y ? w : y, y = C > y ? C : y
                }
                var E = this._bounds;
                return E.x = x, E.width = f - x, E.y = m, E.height = y - m, this._currentBounds = E, E
            }, e.Sprite.prototype._renderWebGL = function(t) {
                if (this.visible && !(this.alpha <= 0)) {
                    var e, i;
                    if (this._mask || this._filters) {
                        var s = t.spriteBatch;
                        for (this._filters && (s.flush(), t.filterManager.pushFilter(this._filterBlock)), this._mask && (s.stop(), t.maskManager.pushMask(this.mask, t), s.start()), s.render(this), e = 0, i = this.children.length; i > e; e++) this.children[e]._renderWebGL(t);
                        s.stop(), this._mask && t.maskManager.popMask(this._mask, t), this._filters && t.filterManager.popFilter(), s.start()
                    } else
                        for (t.spriteBatch.render(this), e = 0, i = this.children.length; i > e; e++) this.children[e]._renderWebGL(t)
                }
            }, e.Sprite.prototype._renderCanvas = function(t) {
                if (!(this.visible === !1 || 0 === this.alpha || this.texture.crop.width <= 0 || this.texture.crop.height <= 0)) {
                    if (this.blendMode !== t.currentBlendMode && (t.currentBlendMode = this.blendMode, t.context.globalCompositeOperation = e.blendModesCanvas[t.currentBlendMode]), this._mask && t.maskManager.pushMask(this._mask, t), this.texture.valid) {
                        var i = this.texture.baseTexture.resolution / t.resolution;
                        t.context.globalAlpha = this.worldAlpha, t.smoothProperty && t.scaleMode !== this.texture.baseTexture.scaleMode && (t.scaleMode = this.texture.baseTexture.scaleMode, t.context[t.smoothProperty] = t.scaleMode === e.scaleModes.LINEAR);
                        var s = this.texture.trim ? this.texture.trim.x - this.anchor.x * this.texture.trim.width : this.anchor.x * -this.texture.frame.width,
                            n = this.texture.trim ? this.texture.trim.y - this.anchor.y * this.texture.trim.height : this.anchor.y * -this.texture.frame.height;
                        t.roundPixels ? (t.context.setTransform(this.worldTransform.a, this.worldTransform.b, this.worldTransform.c, this.worldTransform.d, this.worldTransform.tx * t.resolution | 0, this.worldTransform.ty * t.resolution | 0), s = 0 | s, n = 0 | n) : t.context.setTransform(this.worldTransform.a, this.worldTransform.b, this.worldTransform.c, this.worldTransform.d, this.worldTransform.tx * t.resolution, this.worldTransform.ty * t.resolution), 16777215 !== this.tint ? (this.cachedTint !== this.tint && (this.cachedTint = this.tint, this.tintedTexture = e.CanvasTinter.getTintedTexture(this, this.tint)), t.context.drawImage(this.tintedTexture, 0, 0, this.texture.crop.width, this.texture.crop.height, s / i, n / i, this.texture.crop.width / i, this.texture.crop.height / i)) : t.context.drawImage(this.texture.baseTexture.source, this.texture.crop.x, this.texture.crop.y, this.texture.crop.width, this.texture.crop.height, s / i, n / i, this.texture.crop.width / i, this.texture.crop.height / i)
                    }
                    for (var r = 0, o = this.children.length; o > r; r++) this.children[r]._renderCanvas(t);
                    this._mask && t.maskManager.popMask(t)
                }
            }, e.Sprite.fromFrame = function(t) {
                var i = e.TextureCache[t];
                if (!i) throw new Error('The frameId "' + t + '" does not exist in the texture cache' + this);
                return new e.Sprite(i)
            }, e.Sprite.fromImage = function(t, i, s) {
                var n = e.Texture.fromImage(t, i, s);
                return new e.Sprite(n)
            }, e.SpriteBatch = function(t) {
                e.DisplayObjectContainer.call(this), this.textureThing = t, this.ready = !1
            }, e.SpriteBatch.prototype = Object.create(e.DisplayObjectContainer.prototype), e.SpriteBatch.prototype.constructor = e.SpriteBatch, e.SpriteBatch.prototype.initWebGL = function(t) {
                this.fastSpriteBatch = new e.WebGLFastSpriteBatch(t), this.ready = !0
            }, e.SpriteBatch.prototype.updateTransform = function() {
                this.displayObjectUpdateTransform()
            }, e.SpriteBatch.prototype._renderWebGL = function(t) {
                !this.visible || this.alpha <= 0 || !this.children.length || (this.ready || this.initWebGL(t.gl), this.fastSpriteBatch.gl !== t.gl && this.fastSpriteBatch.setContext(t.gl), t.spriteBatch.stop(), t.shaderManager.setShader(t.shaderManager.fastShader), this.fastSpriteBatch.begin(this, t), this.fastSpriteBatch.render(this), t.spriteBatch.start())
            }, e.SpriteBatch.prototype._renderCanvas = function(t) {
                if (this.visible && !(this.alpha <= 0) && this.children.length) {
                    var e = t.context;
                    e.globalAlpha = this.worldAlpha, this.displayObjectUpdateTransform();
                    for (var i = this.worldTransform, s = !0, n = 0; n < this.children.length; n++) {
                        var r = this.children[n];
                        if (r.visible) {
                            var o = r.texture,
                                a = o.frame;
                            if (e.globalAlpha = this.worldAlpha * r.alpha, r.rotation % (2 * Math.PI) === 0) s && (e.setTransform(i.a, i.b, i.c, i.d, i.tx, i.ty), s = !1), e.drawImage(o.baseTexture.source, a.x, a.y, a.width, a.height, r.anchor.x * (-a.width * r.scale.x) + r.position.x + .5 | 0, r.anchor.y * (-a.height * r.scale.y) + r.position.y + .5 | 0, a.width * r.scale.x, a.height * r.scale.y);
                            else {
                                s || (s = !0), r.displayObjectUpdateTransform();
                                var h = r.worldTransform;
                                t.roundPixels ? e.setTransform(h.a, h.b, h.c, h.d, 0 | h.tx, 0 | h.ty) : e.setTransform(h.a, h.b, h.c, h.d, h.tx, h.ty), e.drawImage(o.baseTexture.source, a.x, a.y, a.width, a.height, r.anchor.x * -a.width + .5 | 0, r.anchor.y * -a.height + .5 | 0, a.width, a.height)
                            }
                        }
                    }
                }
            }, e.MovieClip = function(t) {
                e.Sprite.call(this, t[0]), this.textures = t, this.animationSpeed = 1, this.loop = !0, this.onComplete = null, this.currentFrame = 0, this.playing = !1
            }, e.MovieClip.prototype = Object.create(e.Sprite.prototype), e.MovieClip.prototype.constructor = e.MovieClip, Object.defineProperty(e.MovieClip.prototype, "totalFrames", {
                get: function() {
                    return this.textures.length
                }
            }), e.MovieClip.prototype.stop = function() {
                this.playing = !1
            }, e.MovieClip.prototype.play = function() {
                this.playing = !0
            }, e.MovieClip.prototype.gotoAndStop = function(t) {
                this.playing = !1, this.currentFrame = t;
                var e = this.currentFrame + .5 | 0;
                this.setTexture(this.textures[e % this.textures.length])
            }, e.MovieClip.prototype.gotoAndPlay = function(t) {
                this.currentFrame = t, this.playing = !0
            }, e.MovieClip.prototype.updateTransform = function() {
                if (this.displayObjectContainerUpdateTransform(), this.playing) {
                    this.currentFrame += this.animationSpeed;
                    var t = this.currentFrame + .5 | 0;
                    this.currentFrame = this.currentFrame % this.textures.length, this.loop || t < this.textures.length ? this.setTexture(this.textures[t % this.textures.length]) : t >= this.textures.length && (this.gotoAndStop(this.textures.length - 1), this.onComplete && this.onComplete())
                }
            }, e.MovieClip.fromFrames = function(t) {
                for (var i = [], s = 0; s < t.length; s++) i.push(new e.Texture.fromFrame(t[s]));
                return new e.MovieClip(i)
            }, e.MovieClip.fromImages = function(t) {
                for (var i = [], s = 0; s < t.length; s++) i.push(new e.Texture.fromImage(t[s]));
                return new e.MovieClip(i)
            }, e.FilterBlock = function() {
                this.visible = !0, this.renderable = !0
            }, e.FilterBlock.prototype.constructor = e.FilterBlock, e.Text = function(t, i) {
                this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.resolution = 1, e.Sprite.call(this, e.Texture.fromCanvas(this.canvas)), this.setText(t), this.setStyle(i)
            }, e.Text.prototype = Object.create(e.Sprite.prototype), e.Text.prototype.constructor = e.Text, Object.defineProperty(e.Text.prototype, "width", {
                get: function() {
                    return this.dirty && (this.updateText(), this.dirty = !1), this.scale.x * this.texture.frame.width
                },
                set: function(t) {
                    this.scale.x = t / this.texture.frame.width, this._width = t
                }
            }), Object.defineProperty(e.Text.prototype, "height", {
                get: function() {
                    return this.dirty && (this.updateText(), this.dirty = !1), this.scale.y * this.texture.frame.height
                },
                set: function(t) {
                    this.scale.y = t / this.texture.frame.height, this._height = t
                }
            }), e.Text.prototype.setStyle = function(t) {
                t = t || {}, t.font = t.font || "bold 20pt Arial", t.fill = t.fill || "black", t.align = t.align || "left", t.stroke = t.stroke || "black", t.strokeThickness = t.strokeThickness || 0, t.wordWrap = t.wordWrap || !1, t.wordWrapWidth = t.wordWrapWidth || 100, t.dropShadow = t.dropShadow || !1, t.dropShadowAngle = t.dropShadowAngle || Math.PI / 6, t.dropShadowDistance = t.dropShadowDistance || 4, t.dropShadowColor = t.dropShadowColor || "black", this.style = t, this.dirty = !0
            }, e.Text.prototype.setText = function(t) {
                this.text = t.toString() || " ", this.dirty = !0
            }, e.Text.prototype.updateText = function() {
                this.texture.baseTexture.resolution = this.resolution, this.context.font = this.style.font;
                var t = this.text;
                this.style.wordWrap && (t = this.wordWrap(this.text));
                for (var e = t.split(/(?:\r\n|\r|\n)/), i = [], s = 0, n = this.determineFontProperties(this.style.font), r = 0; r < e.length; r++) {
                    var o = this.context.measureText(e[r]).width;
                    i[r] = o, s = Math.max(s, o)
                }
                var a = s + this.style.strokeThickness;
                this.style.dropShadow && (a += this.style.dropShadowDistance), this.canvas.width = (a + this.context.lineWidth) * this.resolution;
                var h = n.fontSize + this.style.strokeThickness,
                    l = h * e.length;
                this.style.dropShadow && (l += this.style.dropShadowDistance), this.canvas.height = l * this.resolution, this.context.scale(this.resolution, this.resolution), navigator.isCocoonJS && this.context.clearRect(0, 0, this.canvas.width, this.canvas.height), this.context.font = this.style.font, this.context.strokeStyle = this.style.stroke, this.context.lineWidth = this.style.strokeThickness, this.context.textBaseline = "alphabetic";
                var d, c;
                if (this.style.dropShadow) {
                    this.context.fillStyle = this.style.dropShadowColor;
                    var u = Math.sin(this.style.dropShadowAngle) * this.style.dropShadowDistance,
                        p = Math.cos(this.style.dropShadowAngle) * this.style.dropShadowDistance;
                    for (r = 0; r < e.length; r++) d = this.style.strokeThickness / 2, c = this.style.strokeThickness / 2 + r * h + n.ascent, "right" === this.style.align ? d += s - i[r] : "center" === this.style.align && (d += (s - i[r]) / 2), this.style.fill && this.context.fillText(e[r], d + u, c + p)
                }
                for (this.context.fillStyle = this.style.fill, r = 0; r < e.length; r++) d = this.style.strokeThickness / 2, c = this.style.strokeThickness / 2 + r * h + n.ascent, "right" === this.style.align ? d += s - i[r] : "center" === this.style.align && (d += (s - i[r]) / 2), this.style.stroke && this.style.strokeThickness && this.context.strokeText(e[r], d, c), this.style.fill && this.context.fillText(e[r], d, c);
                this.updateTexture()
            }, e.Text.prototype.updateTexture = function() {
                this.texture.baseTexture.width = this.canvas.width, this.texture.baseTexture.height = this.canvas.height, this.texture.crop.width = this.texture.frame.width = this.canvas.width, this.texture.crop.height = this.texture.frame.height = this.canvas.height, this._width = this.canvas.width, this._height = this.canvas.height, this.texture.baseTexture.dirty()
            }, e.Text.prototype._renderWebGL = function(t) {
                this.dirty && (this.resolution = t.resolution, this.updateText(), this.dirty = !1), e.Sprite.prototype._renderWebGL.call(this, t)
            }, e.Text.prototype._renderCanvas = function(t) {
                this.dirty && (this.resolution = t.resolution, this.updateText(), this.dirty = !1), e.Sprite.prototype._renderCanvas.call(this, t)
            }, e.Text.prototype.determineFontProperties = function(t) {
                var i = e.Text.fontPropertiesCache[t];
                if (!i) {
                    i = {};
                    var s = e.Text.fontPropertiesCanvas,
                        n = e.Text.fontPropertiesContext;
                    n.font = t;
                    var r = Math.ceil(n.measureText("|Mq").width),
                        o = Math.ceil(n.measureText("M").width),
                        a = 2 * o;
                    o = 1.4 * o | 0, s.width = r, s.height = a, n.fillStyle = "#f00", n.fillRect(0, 0, r, a), n.font = t, n.textBaseline = "alphabetic", n.fillStyle = "#000", n.fillText("|MÉq", 0, o);
                    var h, l, d = n.getImageData(0, 0, r, a).data,
                        c = d.length,
                        u = 4 * r,
                        p = 0,
                        f = !1;
                    for (h = 0; o > h; h++) {
                        for (l = 0; u > l; l += 4)
                            if (255 !== d[p + l]) {
                                f = !0;
                                break
                            }
                        if (f) break;
                        p += u
                    }
                    for (i.ascent = o - h, p = c - u, f = !1, h = a; h > o; h--) {
                        for (l = 0; u > l; l += 4)
                            if (255 !== d[p + l]) {
                                f = !0;
                                break
                            }
                        if (f) break;
                        p -= u
                    }
                    i.descent = h - o, i.descent += 6, i.fontSize = i.ascent + i.descent, e.Text.fontPropertiesCache[t] = i
                }
                return i
            }, e.Text.prototype.wordWrap = function(t) {
                for (var e = "", i = t.split("\n"), s = 0; s < i.length; s++) {
                    for (var n = this.style.wordWrapWidth, r = i[s].split(" "), o = 0; o < r.length; o++) {
                        var a = this.context.measureText(r[o]).width,
                            h = a + this.context.measureText(" ").width;
                        0 === o || h > n ? (o > 0 && (e += "\n"), e += r[o], n = this.style.wordWrapWidth - a) : (n -= h, e += " " + r[o])
                    }
                    s < i.length - 1 && (e += "\n")
                }
                return e
            }, e.Text.prototype.getBounds = function(t) {
                return this.dirty && (this.updateText(), this.dirty = !1), e.Sprite.prototype.getBounds.call(this, t)
            }, e.Text.prototype.destroy = function(t) {
                this.context = null, this.canvas = null, this.texture.destroy(void 0 === t ? !0 : t)
            }, e.Text.fontPropertiesCache = {}, e.Text.fontPropertiesCanvas = document.createElement("canvas"), e.Text.fontPropertiesContext = e.Text.fontPropertiesCanvas.getContext("2d"), e.BitmapText = function(t, i) {
                e.DisplayObjectContainer.call(this), this.textWidth = 0, this.textHeight = 0, this._pool = [], this.setText(t), this.setStyle(i), this.updateText(), this.dirty = !1
            }, e.BitmapText.prototype = Object.create(e.DisplayObjectContainer.prototype), e.BitmapText.prototype.constructor = e.BitmapText, e.BitmapText.prototype.setText = function(t) {
                this.text = t || " ", this.dirty = !0
            }, e.BitmapText.prototype.setStyle = function(t) {
                t = t || {}, t.align = t.align || "left", this.style = t;
                var i = t.font.split(" ");
                this.fontName = i[i.length - 1], this.fontSize = i.length >= 2 ? parseInt(i[i.length - 2], 10) : e.BitmapText.fonts[this.fontName].size, this.dirty = !0, this.tint = t.tint
            }, e.BitmapText.prototype.updateText = function() {
                for (var t = e.BitmapText.fonts[this.fontName], i = new e.Point, s = null, n = [], r = 0, o = [], a = 0, h = this.fontSize / t.size, l = 0; l < this.text.length; l++) {
                    var d = this.text.charCodeAt(l);
                    if (/(?:\r\n|\r|\n)/.test(this.text.charAt(l))) o.push(i.x), r = Math.max(r, i.x), a++, i.x = 0, i.y += t.lineHeight, s = null;
                    else {
                        var c = t.chars[d];
                        c && (s && c.kerning[s] && (i.x += c.kerning[s]), n.push({
                            texture: c.texture,
                            line: a,
                            charCode: d,
                            position: new e.Point(i.x + c.xOffset, i.y + c.yOffset)
                        }), i.x += c.xAdvance, s = d)
                    }
                }
                o.push(i.x), r = Math.max(r, i.x);
                var u = [];
                for (l = 0; a >= l; l++) {
                    var p = 0;
                    "right" === this.style.align ? p = r - o[l] : "center" === this.style.align && (p = (r - o[l]) / 2),
                        u.push(p)
                }
                var f = this.children.length,
                    y = n.length,
                    x = this.tint || 16777215;
                for (l = 0; y > l; l++) {
                    var m = f > l ? this.children[l] : this._pool.pop();
                    m ? m.setTexture(n[l].texture) : m = new e.Sprite(n[l].texture), m.position.x = (n[l].position.x + u[n[l].line]) * h, m.position.y = n[l].position.y * h, m.scale.x = m.scale.y = h, m.tint = x, m.parent || this.addChild(m)
                }
                for (; this.children.length > y;) {
                    var g = this.getChildAt(this.children.length - 1);
                    this._pool.push(g), this.removeChild(g)
                }
                this.textWidth = r * h, this.textHeight = (i.y + t.lineHeight) * h
            }, e.BitmapText.prototype.updateTransform = function() {
                this.dirty && (this.updateText(), this.dirty = !1), e.DisplayObjectContainer.prototype.updateTransform.call(this)
            }, e.BitmapText.fonts = {}, e.InteractionData = function() {
                this.global = new e.Point, this.target = null, this.originalEvent = null
            }, e.InteractionData.prototype.getLocalPosition = function(t, i) {
                var s = t.worldTransform,
                    n = this.global,
                    r = s.a,
                    o = s.c,
                    a = s.tx,
                    h = s.b,
                    l = s.d,
                    d = s.ty,
                    c = 1 / (r * l + o * -h);
                return i = i || new e.Point, i.x = l * c * n.x + -o * c * n.y + (d * o - a * l) * c, i.y = r * c * n.y + -h * c * n.x + (-d * r + a * h) * c, i
            }, e.InteractionData.prototype.constructor = e.InteractionData, e.InteractionManager = function(t) {
                this.stage = t, this.mouse = new e.InteractionData, this.touches = {}, this.tempPoint = new e.Point, this.mouseoverEnabled = !0, this.pool = [], this.interactiveItems = [], this.interactionDOMElement = null, this.onMouseMove = this.onMouseMove.bind(this), this.onMouseDown = this.onMouseDown.bind(this), this.onMouseOut = this.onMouseOut.bind(this), this.onMouseUp = this.onMouseUp.bind(this), this.onTouchStart = this.onTouchStart.bind(this), this.onTouchEnd = this.onTouchEnd.bind(this), this.onTouchCancel = this.onTouchCancel.bind(this), this.onTouchMove = this.onTouchMove.bind(this), this.last = 0, this.currentCursorStyle = "inherit", this.mouseOut = !1, this.resolution = 1, this._tempPoint = new e.Point
            }, e.InteractionManager.prototype.constructor = e.InteractionManager, e.InteractionManager.prototype.collectInteractiveSprite = function(t, e) {
                for (var i = t.children, s = i.length, n = s - 1; n >= 0; n--) {
                    var r = i[n];
                    r._interactive ? (e.interactiveChildren = !0, this.interactiveItems.push(r), r.children.length > 0 && this.collectInteractiveSprite(r, r)) : (r.__iParent = null, r.children.length > 0 && this.collectInteractiveSprite(r, e))
                }
            }, e.InteractionManager.prototype.setTarget = function(t) {
                this.target = t, this.resolution = t.resolution, null === this.interactionDOMElement && this.setTargetDomElement(t.view)
            }, e.InteractionManager.prototype.setTargetDomElement = function(t) {
                this.removeEvents(), window.navigator.msPointerEnabled && (t.style["-ms-content-zooming"] = "none", t.style["-ms-touch-action"] = "none"), this.interactionDOMElement = t, t.addEventListener("mousemove", this.onMouseMove, !0), t.addEventListener("mousedown", this.onMouseDown, !0), t.addEventListener("mouseout", this.onMouseOut, !0), t.addEventListener("touchstart", this.onTouchStart, !0), t.addEventListener("touchend", this.onTouchEnd, !0), t.addEventListener("touchleave", this.onTouchCancel, !0), t.addEventListener("touchcancel", this.onTouchCancel, !0), t.addEventListener("touchmove", this.onTouchMove, !0), window.addEventListener("mouseup", this.onMouseUp, !0)
            }, e.InteractionManager.prototype.removeEvents = function() {
                this.interactionDOMElement && (this.interactionDOMElement.style["-ms-content-zooming"] = "", this.interactionDOMElement.style["-ms-touch-action"] = "", this.interactionDOMElement.removeEventListener("mousemove", this.onMouseMove, !0), this.interactionDOMElement.removeEventListener("mousedown", this.onMouseDown, !0), this.interactionDOMElement.removeEventListener("mouseout", this.onMouseOut, !0), this.interactionDOMElement.removeEventListener("touchstart", this.onTouchStart, !0), this.interactionDOMElement.removeEventListener("touchend", this.onTouchEnd, !0), this.interactionDOMElement.removeEventListener("touchleave", this.onTouchCancel, !0), this.interactionDOMElement.removeEventListener("touchcancel", this.onTouchCancel, !0), this.interactionDOMElement.removeEventListener("touchmove", this.onTouchMove, !0), this.interactionDOMElement = null, window.removeEventListener("mouseup", this.onMouseUp, !0))
            }, e.InteractionManager.prototype.update = function() {
                if (this.target) {
                    var t = Date.now(),
                        i = t - this.last;
                    if (i = i * e.INTERACTION_FREQUENCY / 1e3, !(1 > i)) {
                        this.last = t;
                        var s = 0;
                        this.dirty && this.rebuildInteractiveGraph();
                        var n = this.interactiveItems.length,
                            r = "inherit",
                            o = !1;
                        for (s = 0; n > s; s++) {
                            var a = this.interactiveItems[s];
                            a.__hit = this.hitTest(a, this.mouse), this.mouse.target = a, a.__hit && !o ? (a.buttonMode && (r = a.defaultCursor), a.interactiveChildren || (o = !0), a.__isOver || (a.mouseover && a.mouseover(this.mouse), a.__isOver = !0)) : a.__isOver && (a.mouseout && a.mouseout(this.mouse), a.__isOver = !1)
                        }
                        this.currentCursorStyle !== r && (this.currentCursorStyle = r, this.interactionDOMElement.style.cursor = r)
                    }
                }
            }, e.InteractionManager.prototype.rebuildInteractiveGraph = function() {
                this.dirty = !1;
                for (var t = this.interactiveItems.length, e = 0; t > e; e++) this.interactiveItems[e].interactiveChildren = !1;
                this.interactiveItems = [], this.stage.interactive && this.interactiveItems.push(this.stage), this.collectInteractiveSprite(this.stage, this.stage)
            }, e.InteractionManager.prototype.onMouseMove = function(t) {
                this.dirty && this.rebuildInteractiveGraph(), this.mouse.originalEvent = t;
                var e = this.interactionDOMElement.getBoundingClientRect();
                this.mouse.global.x = (t.clientX - e.left) * (this.target.width / e.width) / this.resolution, this.mouse.global.y = (t.clientY - e.top) * (this.target.height / e.height) / this.resolution;
                for (var i = this.interactiveItems.length, s = 0; i > s; s++) {
                    var n = this.interactiveItems[s];
                    n.mousemove && n.mousemove(this.mouse)
                }
            }, e.InteractionManager.prototype.onMouseDown = function(t) {
                this.dirty && this.rebuildInteractiveGraph(), this.mouse.originalEvent = t, e.AUTO_PREVENT_DEFAULT && this.mouse.originalEvent.preventDefault();
                for (var i = this.interactiveItems.length, s = this.mouse.originalEvent, n = 2 === s.button || 3 === s.which, r = n ? "rightdown" : "mousedown", o = n ? "rightclick" : "click", a = n ? "__rightIsDown" : "__mouseIsDown", h = n ? "__isRightDown" : "__isDown", l = 0; i > l; l++) {
                    var d = this.interactiveItems[l];
                    if ((d[r] || d[o]) && (d[a] = !0, d.__hit = this.hitTest(d, this.mouse), d.__hit && (d[r] && d[r](this.mouse), d[h] = !0, !d.interactiveChildren))) break
                }
            }, e.InteractionManager.prototype.onMouseOut = function(t) {
                this.dirty && this.rebuildInteractiveGraph(), this.mouse.originalEvent = t;
                var e = this.interactiveItems.length;
                this.interactionDOMElement.style.cursor = "inherit";
                for (var i = 0; e > i; i++) {
                    var s = this.interactiveItems[i];
                    s.__isOver && (this.mouse.target = s, s.mouseout && s.mouseout(this.mouse), s.__isOver = !1)
                }
                this.mouseOut = !0, this.mouse.global.x = -1e4, this.mouse.global.y = -1e4
            }, e.InteractionManager.prototype.onMouseUp = function(t) {
                this.dirty && this.rebuildInteractiveGraph(), this.mouse.originalEvent = t;
                for (var e = this.interactiveItems.length, i = !1, s = this.mouse.originalEvent, n = 2 === s.button || 3 === s.which, r = n ? "rightup" : "mouseup", o = n ? "rightclick" : "click", a = n ? "rightupoutside" : "mouseupoutside", h = n ? "__isRightDown" : "__isDown", l = 0; e > l; l++) {
                    var d = this.interactiveItems[l];
                    (d[o] || d[r] || d[a]) && (d.__hit = this.hitTest(d, this.mouse), d.__hit && !i ? (d[r] && d[r](this.mouse), d[h] && d[o] && d[o](this.mouse), d.interactiveChildren || (i = !0)) : d[h] && d[a] && d[a](this.mouse), d[h] = !1)
                }
            }, e.InteractionManager.prototype.hitTest = function(t, i) {
                var s = i.global;
                if (!t.worldVisible) return !1;
                t.worldTransform.applyInverse(s, this._tempPoint);
                var n, r = this._tempPoint.x,
                    o = this._tempPoint.y;
                if (i.target = t, t.hitArea && t.hitArea.contains) return t.hitArea.contains(r, o);
                if (t instanceof e.Sprite) {
                    var a, h = t.texture.frame.width,
                        l = t.texture.frame.height,
                        d = -h * t.anchor.x;
                    if (r > d && d + h > r && (a = -l * t.anchor.y, o > a && a + l > o)) return !0
                } else if (t instanceof e.Graphics) {
                    var c = t.graphicsData;
                    for (n = 0; n < c.length; n++) {
                        var u = c[n];
                        if (u.fill && u.shape && u.shape.contains(r, o)) return !0
                    }
                }
                var p = t.children.length;
                for (n = 0; p > n; n++) {
                    var f = t.children[n],
                        y = this.hitTest(f, i);
                    if (y) return i.target = t, !0
                }
                return !1
            }, e.InteractionManager.prototype.onTouchMove = function(t) {
                this.dirty && this.rebuildInteractiveGraph();
                var e, i = this.interactionDOMElement.getBoundingClientRect(),
                    s = t.changedTouches,
                    n = 0;
                for (n = 0; n < s.length; n++) {
                    var r = s[n];
                    e = this.touches[r.identifier], e.originalEvent = t, e.global.x = (r.clientX - i.left) * (this.target.width / i.width) / this.resolution, e.global.y = (r.clientY - i.top) * (this.target.height / i.height) / this.resolution, !navigator.isCocoonJS || i.left || i.top || t.target.style.width || t.target.style.height || (e.global.x = r.clientX, e.global.y = r.clientY);
                    for (var o = 0; o < this.interactiveItems.length; o++) {
                        var a = this.interactiveItems[o];
                        a.touchmove && a.__touchData && a.__touchData[r.identifier] && a.touchmove(e)
                    }
                }
            }, e.InteractionManager.prototype.onTouchStart = function(t) {
                this.dirty && this.rebuildInteractiveGraph();
                var i = this.interactionDOMElement.getBoundingClientRect();
                e.AUTO_PREVENT_DEFAULT && t.preventDefault();
                for (var s = t.changedTouches, n = 0; n < s.length; n++) {
                    var r = s[n],
                        o = this.pool.pop();
                    o || (o = new e.InteractionData), o.originalEvent = t, this.touches[r.identifier] = o, o.global.x = (r.clientX - i.left) * (this.target.width / i.width) / this.resolution, o.global.y = (r.clientY - i.top) * (this.target.height / i.height) / this.resolution, !navigator.isCocoonJS || i.left || i.top || t.target.style.width || t.target.style.height || (o.global.x = r.clientX, o.global.y = r.clientY);
                    for (var a = this.interactiveItems.length, h = 0; a > h; h++) {
                        var l = this.interactiveItems[h];
                        if ((l.touchstart || l.tap) && (l.__hit = this.hitTest(l, o), l.__hit && (l.touchstart && l.touchstart(o), l.__isDown = !0, l.__touchData = l.__touchData || {}, l.__touchData[r.identifier] = o, !l.interactiveChildren))) break
                    }
                }
            }, e.InteractionManager.prototype.onTouchEnd = function(t) {
                this.dirty && this.rebuildInteractiveGraph();
                for (var e = this.interactionDOMElement.getBoundingClientRect(), i = t.changedTouches, s = 0; s < i.length; s++) {
                    var n = i[s],
                        r = this.touches[n.identifier],
                        o = !1;
                    r.global.x = (n.clientX - e.left) * (this.target.width / e.width) / this.resolution, r.global.y = (n.clientY - e.top) * (this.target.height / e.height) / this.resolution, !navigator.isCocoonJS || e.left || e.top || t.target.style.width || t.target.style.height || (r.global.x = n.clientX, r.global.y = n.clientY);
                    for (var a = this.interactiveItems.length, h = 0; a > h; h++) {
                        var l = this.interactiveItems[h];
                        l.__touchData && l.__touchData[n.identifier] && (l.__hit = this.hitTest(l, l.__touchData[n.identifier]), r.originalEvent = t, (l.touchend || l.tap) && (l.__hit && !o ? (l.touchend && l.touchend(r), l.__isDown && l.tap && l.tap(r), l.interactiveChildren || (o = !0)) : l.__isDown && l.touchendoutside && l.touchendoutside(r), l.__isDown = !1), l.__touchData[n.identifier] = null)
                    }
                    this.pool.push(r), this.touches[n.identifier] = null
                }
            }, e.InteractionManager.prototype.onTouchCancel = function(t) {
                this.dirty && this.rebuildInteractiveGraph();
                for (var e = this.interactionDOMElement.getBoundingClientRect(), i = t.changedTouches, s = 0; s < i.length; s++) {
                    var n = i[s],
                        r = this.touches[n.identifier],
                        o = !1;
                    r.global.x = (n.clientX - e.left) * (this.target.width / e.width) / this.resolution, r.global.y = (n.clientY - e.top) * (this.target.height / e.height) / this.resolution, !navigator.isCocoonJS || e.left || e.top || t.target.style.width || t.target.style.height || (r.global.x = n.clientX, r.global.y = n.clientY);
                    for (var a = this.interactiveItems.length, h = 0; a > h; h++) {
                        var l = this.interactiveItems[h];
                        l.__touchData && l.__touchData[n.identifier] && (l.__hit = this.hitTest(l, l.__touchData[n.identifier]), r.originalEvent = t, l.touchcancel && !o && (l.touchcancel(r), l.interactiveChildren || (o = !0)), l.__isDown = !1, l.__touchData[n.identifier] = null)
                    }
                    this.pool.push(r), this.touches[n.identifier] = null
                }
            }, e.Stage = function(t) {
                e.DisplayObjectContainer.call(this), this.worldTransform = new e.Matrix, this.interactive = !0, this.interactionManager = new e.InteractionManager(this), this.dirty = !0, this.stage = this, this.stage.hitArea = new e.Rectangle(0, 0, 1e5, 1e5), this.setBackgroundColor(t)
            }, e.Stage.prototype = Object.create(e.DisplayObjectContainer.prototype), e.Stage.prototype.constructor = e.Stage, e.Stage.prototype.setInteractionDelegate = function(t) {
                this.interactionManager.setTargetDomElement(t)
            }, e.Stage.prototype.updateTransform = function() {
                this.worldAlpha = 1;
                for (var t = 0, e = this.children.length; e > t; t++) this.children[t].updateTransform();
                this.dirty && (this.dirty = !1, this.interactionManager.dirty = !0), this.interactive && this.interactionManager.update()
            }, e.Stage.prototype.setBackgroundColor = function(t) {
                this.backgroundColor = t || 0, this.backgroundColorSplit = e.hex2rgb(this.backgroundColor);
                var i = this.backgroundColor.toString(16);
                i = "000000".substr(0, 6 - i.length) + i, this.backgroundColorString = "#" + i
            }, e.Stage.prototype.getMousePosition = function() {
                return this.interactionManager.mouse.global
            },
            function(t) {
                for (var e = 0, i = ["ms", "moz", "webkit", "o"], s = 0; s < i.length && !t.requestAnimationFrame; ++s) t.requestAnimationFrame = t[i[s] + "RequestAnimationFrame"], t.cancelAnimationFrame = t[i[s] + "CancelAnimationFrame"] || t[i[s] + "CancelRequestAnimationFrame"];
                t.requestAnimationFrame || (t.requestAnimationFrame = function(i) {
                    var s = (new Date).getTime(),
                        n = Math.max(0, 16 - (s - e)),
                        r = t.setTimeout(function() {
                            i(s + n)
                        }, n);
                    return e = s + n, r
                }), t.cancelAnimationFrame || (t.cancelAnimationFrame = function(t) {
                    clearTimeout(t)
                }), t.requestAnimFrame = t.requestAnimationFrame
            }(this), e.hex2rgb = function(t) {
                return [(t >> 16 & 255) / 255, (t >> 8 & 255) / 255, (255 & t) / 255]
            }, e.rgb2hex = function(t) {
                return (255 * t[0] << 16) + (255 * t[1] << 8) + 255 * t[2]
            }, "function" != typeof Function.prototype.bind && (Function.prototype.bind = function() {
                return function(t) {
                    function e() {
                        for (var s = arguments.length, r = new Array(s); s--;) r[s] = arguments[s];
                        return r = n.concat(r), i.apply(this instanceof e ? this : t, r)
                    }
                    var i = this,
                        s = arguments.length - 1,
                        n = [];
                    if (s > 0)
                        for (n.length = s; s--;) n[s] = arguments[s + 1];
                    if ("function" != typeof i) throw new TypeError;
                    return e.prototype = function r(t) {
                        return t && (r.prototype = t), this instanceof r ? void 0 : new r
                    }(i.prototype), e
                }
            }()), e.AjaxRequest = function() {
                var t = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Microsoft.XMLHTTP"];
                if (!window.ActiveXObject) return window.XMLHttpRequest ? new window.XMLHttpRequest : !1;
                for (var e = 0; e < t.length; e++) try {
                    return new window.ActiveXObject(t[e])
                } catch (i) {}
            }, e.canUseNewCanvasBlendModes = function() {
                if ("undefined" == typeof document) return !1;
                var t = document.createElement("canvas");
                t.width = 1, t.height = 1;
                var e = t.getContext("2d");
                return e.fillStyle = "#000", e.fillRect(0, 0, 1, 1), e.globalCompositeOperation = "multiply", e.fillStyle = "#fff", e.fillRect(0, 0, 1, 1), 0 === e.getImageData(0, 0, 1, 1).data[0]
            }, e.getNextPowerOfTwo = function(t) {
                if (t > 0 && 0 === (t & t - 1)) return t;
                for (var e = 1; t > e;) e <<= 1;
                return e
            }, e.isPowerOfTwo = function(t, e) {
                return t > 0 && 0 === (t & t - 1) && e > 0 && 0 === (e & e - 1)
            }, e.EventTarget = {
                call: function(t) {
                    t && (t = t.prototype || t, e.EventTarget.mixin(t))
                },
                mixin: function(t) {
                    t.listeners = function(t) {
                        return this._listeners = this._listeners || {}, this._listeners[t] ? this._listeners[t].slice() : []
                    }, t.emit = t.dispatchEvent = function(t, i) {
                        if (this._listeners = this._listeners || {}, "object" == typeof t && (i = t, t = t.type), i && i.__isEventObject === !0 || (i = new e.Event(this, t, i)), this._listeners && this._listeners[t]) {
                            var s, n = this._listeners[t].slice(0),
                                r = n.length,
                                o = n[0];
                            for (s = 0; r > s; o = n[++s])
                                if (o.call(this, i), i.stoppedImmediate) return this;
                            if (i.stopped) return this
                        }
                        return this.parent && this.parent.emit && this.parent.emit.call(this.parent, t, i), this
                    }, t.on = t.addEventListener = function(t, e) {
                        return this._listeners = this._listeners || {}, (this._listeners[t] = this._listeners[t] || []).push(e), this
                    }, t.once = function(t, e) {
                        function i() {
                            e.apply(s.off(t, i), arguments)
                        }
                        this._listeners = this._listeners || {};
                        var s = this;
                        return i._originalHandler = e, this.on(t, i)
                    }, t.off = t.removeEventListener = function(t, e) {
                        if (this._listeners = this._listeners || {}, !this._listeners[t]) return this;
                        for (var i = this._listeners[t], s = e ? i.length : 0; s-- > 0;)(i[s] === e || i[s]._originalHandler === e) && i.splice(s, 1);
                        return 0 === i.length && delete this._listeners[t], this
                    }, t.removeAllListeners = function(t) {
                        return this._listeners = this._listeners || {}, this._listeners[t] ? (delete this._listeners[t], this) : this
                    }
                }
            }, e.Event = function(t, e, i) {
                this.__isEventObject = !0, this.stopped = !1, this.stoppedImmediate = !1, this.target = t, this.type = e, this.data = i, this.content = i, this.timeStamp = Date.now()
            }, e.Event.prototype.stopPropagation = function() {
                this.stopped = !0
            }, e.Event.prototype.stopImmediatePropagation = function() {
                this.stoppedImmediate = !0
            }, e.autoDetectRenderer = function(t, i, s) {
                t || (t = 800), i || (i = 600);
                var n = function() {
                    try {
                        var t = document.createElement("canvas");
                        return !!window.WebGLRenderingContext && (t.getContext("webgl") || t.getContext("experimental-webgl"))
                    } catch (e) {
                        return !1
                    }
                }();
                return n ? new e.WebGLRenderer(t, i, s) : new e.CanvasRenderer(t, i, s)
            }, e.autoDetectRecommendedRenderer = function(t, i, s) {
                t || (t = 800), i || (i = 600);
                var n = function() {
                        try {
                            var t = document.createElement("canvas");
                            return !!window.WebGLRenderingContext && (t.getContext("webgl") || t.getContext("experimental-webgl"))
                        } catch (e) {
                            return !1
                        }
                    }(),
                    r = /Android/i.test(navigator.userAgent);
                return n && !r ? new e.WebGLRenderer(t, i, s) : new e.CanvasRenderer(t, i, s)
            }, e.PolyK = {}, e.PolyK.Triangulate = function(t) {
                var i = !0,
                    s = t.length >> 1;
                if (3 > s) return [];
                for (var n = [], r = [], o = 0; s > o; o++) r.push(o);
                o = 0;
                for (var a = s; a > 3;) {
                    var h = r[(o + 0) % a],
                        l = r[(o + 1) % a],
                        d = r[(o + 2) % a],
                        c = t[2 * h],
                        u = t[2 * h + 1],
                        p = t[2 * l],
                        f = t[2 * l + 1],
                        y = t[2 * d],
                        x = t[2 * d + 1],
                        m = !1;
                    if (e.PolyK._convex(c, u, p, f, y, x, i)) {
                        m = !0;
                        for (var g = 0; a > g; g++) {
                            var v = r[g];
                            if (v !== h && v !== l && v !== d && e.PolyK._PointInTriangle(t[2 * v], t[2 * v + 1], c, u, p, f, y, x)) {
                                m = !1;
                                break
                            }
                        }
                    }
                    if (m) n.push(h, l, d), r.splice((o + 1) % a, 1), a--, o = 0;
                    else if (o++ > 3 * a) {
                        if (!i) return null;
                        for (n = [], r = [], o = 0; s > o; o++) r.push(o);
                        o = 0, a = s, i = !1
                    }
                }
                return n.push(r[0], r[1], r[2]), n
            }, e.PolyK._PointInTriangle = function(t, e, i, s, n, r, o, a) {
                var h = o - i,
                    l = a - s,
                    d = n - i,
                    c = r - s,
                    u = t - i,
                    p = e - s,
                    f = h * h + l * l,
                    y = h * d + l * c,
                    x = h * u + l * p,
                    m = d * d + c * c,
                    g = d * u + c * p,
                    v = 1 / (f * m - y * y),
                    b = (m * x - y * g) * v,
                    _ = (f * g - y * x) * v;
                return b >= 0 && _ >= 0 && 1 > b + _
            }, e.PolyK._convex = function(t, e, i, s, n, r, o) {
                return (e - s) * (n - i) + (i - t) * (r - s) >= 0 === o
            }, e.initDefaultShaders = function() {}, e.CompileVertexShader = function(t, i) {
                return e._CompileShader(t, i, t.VERTEX_SHADER)
            }, e.CompileFragmentShader = function(t, i) {
                return e._CompileShader(t, i, t.FRAGMENT_SHADER)
            }, e._CompileShader = function(t, e, i) {
                var s = e.join("\n"),
                    n = t.createShader(i);
                return t.shaderSource(n, s), t.compileShader(n), t.getShaderParameter(n, t.COMPILE_STATUS) ? n : (window.console.log(t.getShaderInfoLog(n)), null)
            }, e.compileProgram = function(t, i, s) {
                var n = e.CompileFragmentShader(t, s),
                    r = e.CompileVertexShader(t, i),
                    o = t.createProgram();
                return t.attachShader(o, r), t.attachShader(o, n), t.linkProgram(o), t.getProgramParameter(o, t.LINK_STATUS) || window.console.log("Could not initialise shaders"), o
            }, e.PixiShader = function(t) {
                this._UID = e._UID++, this.gl = t, this.program = null, this.fragmentSrc = ["precision lowp float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform sampler2D uSampler;", "void main(void) {", "   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;", "}"], this.textureCount = 0, this.firstRun = !0, this.dirty = !0, this.attributes = [], this.init()
            }, e.PixiShader.prototype.constructor = e.PixiShader, e.PixiShader.prototype.init = function() {
                var t = this.gl,
                    i = e.compileProgram(t, this.vertexSrc || e.PixiShader.defaultVertexSrc, this.fragmentSrc);
                t.useProgram(i), this.uSampler = t.getUniformLocation(i, "uSampler"), this.projectionVector = t.getUniformLocation(i, "projectionVector"), this.offsetVector = t.getUniformLocation(i, "offsetVector"), this.dimensions = t.getUniformLocation(i, "dimensions"), this.aVertexPosition = t.getAttribLocation(i, "aVertexPosition"), this.aTextureCoord = t.getAttribLocation(i, "aTextureCoord"), this.colorAttribute = t.getAttribLocation(i, "aColor"), -1 === this.colorAttribute && (this.colorAttribute = 2), this.attributes = [this.aVertexPosition, this.aTextureCoord, this.colorAttribute];
                for (var s in this.uniforms) this.uniforms[s].uniformLocation = t.getUniformLocation(i, s);
                this.initUniforms(), this.program = i
            }, e.PixiShader.prototype.initUniforms = function() {
                this.textureCount = 1;
                var t, e = this.gl;
                for (var i in this.uniforms) {
                    t = this.uniforms[i];
                    var s = t.type;
                    "sampler2D" === s ? (t._init = !1, null !== t.value && this.initSampler2D(t)) : "mat2" === s || "mat3" === s || "mat4" === s ? (t.glMatrix = !0, t.glValueLength = 1, "mat2" === s ? t.glFunc = e.uniformMatrix2fv : "mat3" === s ? t.glFunc = e.uniformMatrix3fv : "mat4" === s && (t.glFunc = e.uniformMatrix4fv)) : (t.glFunc = e["uniform" + s], "2f" === s || "2i" === s ? t.glValueLength = 2 : "3f" === s || "3i" === s ? t.glValueLength = 3 : "4f" === s || "4i" === s ? t.glValueLength = 4 : t.glValueLength = 1)
                }
            }, e.PixiShader.prototype.initSampler2D = function(t) {
                if (t.value && t.value.baseTexture && t.value.baseTexture.hasLoaded) {
                    var e = this.gl;
                    if (e.activeTexture(e["TEXTURE" + this.textureCount]), e.bindTexture(e.TEXTURE_2D, t.value.baseTexture._glTextures[e.id]), t.textureData) {
                        var i = t.textureData,
                            s = i.magFilter ? i.magFilter : e.LINEAR,
                            n = i.minFilter ? i.minFilter : e.LINEAR,
                            r = i.wrapS ? i.wrapS : e.CLAMP_TO_EDGE,
                            o = i.wrapT ? i.wrapT : e.CLAMP_TO_EDGE,
                            a = i.luminance ? e.LUMINANCE : e.RGBA;
                        if (i.repeat && (r = e.REPEAT, o = e.REPEAT), e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, !!i.flipY), i.width) {
                            var h = i.width ? i.width : 512,
                                l = i.height ? i.height : 2,
                                d = i.border ? i.border : 0;
                            e.texImage2D(e.TEXTURE_2D, 0, a, h, l, d, a, e.UNSIGNED_BYTE, null)
                        } else e.texImage2D(e.TEXTURE_2D, 0, a, e.RGBA, e.UNSIGNED_BYTE, t.value.baseTexture.source);
                        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, s), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, n), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, r), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, o)
                    }
                    e.uniform1i(t.uniformLocation, this.textureCount), t._init = !0, this.textureCount++
                }
            }, e.PixiShader.prototype.syncUniforms = function() {
                this.textureCount = 1;
                var t, i = this.gl;
                for (var s in this.uniforms) t = this.uniforms[s], 1 === t.glValueLength ? t.glMatrix === !0 ? t.glFunc.call(i, t.uniformLocation, t.transpose, t.value) : t.glFunc.call(i, t.uniformLocation, t.value) : 2 === t.glValueLength ? t.glFunc.call(i, t.uniformLocation, t.value.x, t.value.y) : 3 === t.glValueLength ? t.glFunc.call(i, t.uniformLocation, t.value.x, t.value.y, t.value.z) : 4 === t.glValueLength ? t.glFunc.call(i, t.uniformLocation, t.value.x, t.value.y, t.value.z, t.value.w) : "sampler2D" === t.type && (t._init ? (i.activeTexture(i["TEXTURE" + this.textureCount]), t.value.baseTexture._dirty[i.id] ? e.instances[i.id].updateTexture(t.value.baseTexture) : i.bindTexture(i.TEXTURE_2D, t.value.baseTexture._glTextures[i.id]), i.uniform1i(t.uniformLocation, this.textureCount), this.textureCount++) : this.initSampler2D(t))
            }, e.PixiShader.prototype.destroy = function() {
                this.gl.deleteProgram(this.program), this.uniforms = null, this.gl = null, this.attributes = null
            }, e.PixiShader.defaultVertexSrc = ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "attribute vec4 aColor;", "uniform vec2 projectionVector;", "uniform vec2 offsetVector;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "const vec2 center = vec2(-1.0, 1.0);", "void main(void) {", "   gl_Position = vec4( ((aVertexPosition + offsetVector) / projectionVector) + center , 0.0, 1.0);", "   vTextureCoord = aTextureCoord;", "   vColor = vec4(aColor.rgb * aColor.a, aColor.a);", "}"], e.PixiFastShader = function(t) {
                this._UID = e._UID++, this.gl = t, this.program = null, this.fragmentSrc = ["precision lowp float;", "varying vec2 vTextureCoord;", "varying float vColor;", "uniform sampler2D uSampler;", "void main(void) {", "   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;", "}"], this.vertexSrc = ["attribute vec2 aVertexPosition;", "attribute vec2 aPositionCoord;", "attribute vec2 aScale;", "attribute float aRotation;", "attribute vec2 aTextureCoord;", "attribute float aColor;", "uniform vec2 projectionVector;", "uniform vec2 offsetVector;", "uniform mat3 uMatrix;", "varying vec2 vTextureCoord;", "varying float vColor;", "const vec2 center = vec2(-1.0, 1.0);", "void main(void) {", "   vec2 v;", "   vec2 sv = aVertexPosition * aScale;", "   v.x = (sv.x) * cos(aRotation) - (sv.y) * sin(aRotation);", "   v.y = (sv.x) * sin(aRotation) + (sv.y) * cos(aRotation);", "   v = ( uMatrix * vec3(v + aPositionCoord , 1.0) ).xy ;", "   gl_Position = vec4( ( v / projectionVector) + center , 0.0, 1.0);", "   vTextureCoord = aTextureCoord;", "   vColor = aColor;", "}"], this.textureCount = 0, this.init()
            }, e.PixiFastShader.prototype.constructor = e.PixiFastShader, e.PixiFastShader.prototype.init = function() {
                var t = this.gl,
                    i = e.compileProgram(t, this.vertexSrc, this.fragmentSrc);
                t.useProgram(i), this.uSampler = t.getUniformLocation(i, "uSampler"), this.projectionVector = t.getUniformLocation(i, "projectionVector"), this.offsetVector = t.getUniformLocation(i, "offsetVector"), this.dimensions = t.getUniformLocation(i, "dimensions"), this.uMatrix = t.getUniformLocation(i, "uMatrix"), this.aVertexPosition = t.getAttribLocation(i, "aVertexPosition"), this.aPositionCoord = t.getAttribLocation(i, "aPositionCoord"), this.aScale = t.getAttribLocation(i, "aScale"), this.aRotation = t.getAttribLocation(i, "aRotation"), this.aTextureCoord = t.getAttribLocation(i, "aTextureCoord"), this.colorAttribute = t.getAttribLocation(i, "aColor"), -1 === this.colorAttribute && (this.colorAttribute = 2), this.attributes = [this.aVertexPosition, this.aPositionCoord, this.aScale, this.aRotation, this.aTextureCoord, this.colorAttribute], this.program = i
            }, e.PixiFastShader.prototype.destroy = function() {
                this.gl.deleteProgram(this.program), this.uniforms = null, this.gl = null, this.attributes = null
            }, e.StripShader = function(t) {
                this._UID = e._UID++, this.gl = t, this.program = null, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "uniform float alpha;", "uniform sampler2D uSampler;", "void main(void) {", "   gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y)) * alpha;", "}"], this.vertexSrc = ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "uniform mat3 translationMatrix;", "uniform vec2 projectionVector;", "uniform vec2 offsetVector;", "varying vec2 vTextureCoord;", "void main(void) {", "   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);", "   v -= offsetVector.xyx;", "   gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / -projectionVector.y + 1.0 , 0.0, 1.0);", "   vTextureCoord = aTextureCoord;", "}"], this.init()
            }, e.StripShader.prototype.constructor = e.StripShader, e.StripShader.prototype.init = function() {
                var t = this.gl,
                    i = e.compileProgram(t, this.vertexSrc, this.fragmentSrc);
                t.useProgram(i), this.uSampler = t.getUniformLocation(i, "uSampler"), this.projectionVector = t.getUniformLocation(i, "projectionVector"), this.offsetVector = t.getUniformLocation(i, "offsetVector"), this.colorAttribute = t.getAttribLocation(i, "aColor"), this.aVertexPosition = t.getAttribLocation(i, "aVertexPosition"), this.aTextureCoord = t.getAttribLocation(i, "aTextureCoord"), this.attributes = [this.aVertexPosition, this.aTextureCoord], this.translationMatrix = t.getUniformLocation(i, "translationMatrix"), this.alpha = t.getUniformLocation(i, "alpha"), this.program = i
            }, e.StripShader.prototype.destroy = function() {
                this.gl.deleteProgram(this.program), this.uniforms = null, this.gl = null, this.attribute = null
            }, e.PrimitiveShader = function(t) {
                this._UID = e._UID++, this.gl = t, this.program = null, this.fragmentSrc = ["precision mediump float;", "varying vec4 vColor;", "void main(void) {", "   gl_FragColor = vColor;", "}"], this.vertexSrc = ["attribute vec2 aVertexPosition;", "attribute vec4 aColor;", "uniform mat3 translationMatrix;", "uniform vec2 projectionVector;", "uniform vec2 offsetVector;", "uniform float alpha;", "uniform float flipY;", "uniform vec3 tint;", "varying vec4 vColor;", "void main(void) {", "   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);", "   v -= offsetVector.xyx;", "   gl_Position = vec4( v.x / projectionVector.x -1.0, (v.y / projectionVector.y * -flipY) + flipY , 0.0, 1.0);", "   vColor = aColor * vec4(tint * alpha, alpha);", "}"], this.init()
            }, e.PrimitiveShader.prototype.constructor = e.PrimitiveShader, e.PrimitiveShader.prototype.init = function() {
                var t = this.gl,
                    i = e.compileProgram(t, this.vertexSrc, this.fragmentSrc);
                t.useProgram(i), this.projectionVector = t.getUniformLocation(i, "projectionVector"), this.offsetVector = t.getUniformLocation(i, "offsetVector"), this.tintColor = t.getUniformLocation(i, "tint"), this.flipY = t.getUniformLocation(i, "flipY"), this.aVertexPosition = t.getAttribLocation(i, "aVertexPosition"), this.colorAttribute = t.getAttribLocation(i, "aColor"), this.attributes = [this.aVertexPosition, this.colorAttribute], this.translationMatrix = t.getUniformLocation(i, "translationMatrix"), this.alpha = t.getUniformLocation(i, "alpha"), this.program = i
            }, e.PrimitiveShader.prototype.destroy = function() {
                this.gl.deleteProgram(this.program), this.uniforms = null, this.gl = null, this.attributes = null
            }, e.ComplexPrimitiveShader = function(t) {
                this._UID = e._UID++, this.gl = t, this.program = null, this.fragmentSrc = ["precision mediump float;", "varying vec4 vColor;", "void main(void) {", "   gl_FragColor = vColor;", "}"], this.vertexSrc = ["attribute vec2 aVertexPosition;", "uniform mat3 translationMatrix;", "uniform vec2 projectionVector;", "uniform vec2 offsetVector;", "uniform vec3 tint;", "uniform float alpha;", "uniform vec3 color;", "uniform float flipY;", "varying vec4 vColor;", "void main(void) {", "   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);", "   v -= offsetVector.xyx;", "   gl_Position = vec4( v.x / projectionVector.x -1.0, (v.y / projectionVector.y * -flipY) + flipY , 0.0, 1.0);", "   vColor = vec4(color * alpha * tint, alpha);", "}"], this.init()
            }, e.ComplexPrimitiveShader.prototype.constructor = e.ComplexPrimitiveShader, e.ComplexPrimitiveShader.prototype.init = function() {
                var t = this.gl,
                    i = e.compileProgram(t, this.vertexSrc, this.fragmentSrc);
                t.useProgram(i), this.projectionVector = t.getUniformLocation(i, "projectionVector"), this.offsetVector = t.getUniformLocation(i, "offsetVector"), this.tintColor = t.getUniformLocation(i, "tint"), this.color = t.getUniformLocation(i, "color"), this.flipY = t.getUniformLocation(i, "flipY"), this.aVertexPosition = t.getAttribLocation(i, "aVertexPosition"), this.attributes = [this.aVertexPosition, this.colorAttribute], this.translationMatrix = t.getUniformLocation(i, "translationMatrix"), this.alpha = t.getUniformLocation(i, "alpha"), this.program = i
            }, e.ComplexPrimitiveShader.prototype.destroy = function() {
                this.gl.deleteProgram(this.program), this.uniforms = null, this.gl = null, this.attribute = null
            }, e.WebGLGraphics = function() {}, e.WebGLGraphics.renderGraphics = function(t, i) {
                var s, n = i.gl,
                    r = i.projection,
                    o = i.offset,
                    a = i.shaderManager.primitiveShader;
                t.dirty && e.WebGLGraphics.updateGraphics(t, n);
                for (var h = t._webGL[n.id], l = 0; l < h.data.length; l++) 1 === h.data[l].mode ? (s = h.data[l], i.stencilManager.pushStencil(t, s, i), n.drawElements(n.TRIANGLE_FAN, 4, n.UNSIGNED_SHORT, 2 * (s.indices.length - 4)), i.stencilManager.popStencil(t, s, i)) : (s = h.data[l], i.shaderManager.setShader(a), a = i.shaderManager.primitiveShader, n.uniformMatrix3fv(a.translationMatrix, !1, t.worldTransform.toArray(!0)), n.uniform1f(a.flipY, 1), n.uniform2f(a.projectionVector, r.x, -r.y), n.uniform2f(a.offsetVector, -o.x, -o.y), n.uniform3fv(a.tintColor, e.hex2rgb(t.tint)), n.uniform1f(a.alpha, t.worldAlpha), n.bindBuffer(n.ARRAY_BUFFER, s.buffer), n.vertexAttribPointer(a.aVertexPosition, 2, n.FLOAT, !1, 24, 0), n.vertexAttribPointer(a.colorAttribute, 4, n.FLOAT, !1, 24, 8), n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, s.indexBuffer), n.drawElements(n.TRIANGLE_STRIP, s.indices.length, n.UNSIGNED_SHORT, 0))
            }, e.WebGLGraphics.updateGraphics = function(t, i) {
                var s = t._webGL[i.id];
                s || (s = t._webGL[i.id] = {
                    lastIndex: 0,
                    data: [],
                    gl: i
                }), t.dirty = !1;
                var n;
                if (t.clearDirty) {
                    for (t.clearDirty = !1, n = 0; n < s.data.length; n++) {
                        var r = s.data[n];
                        r.reset(), e.WebGLGraphics.graphicsDataPool.push(r)
                    }
                    s.data = [], s.lastIndex = 0
                }
                var o;
                for (n = s.lastIndex; n < t.graphicsData.length; n++) {
                    var a = t.graphicsData[n];
                    if (a.type === e.Graphics.POLY) {
                        if (a.points = a.shape.points.slice(), a.shape.closed && (a.points[0] !== a.points[a.points.length - 2] || a.points[1] !== a.points[a.points.length - 1]) && a.points.push(a.points[0], a.points[1]), a.fill && a.points.length >= 6)
                            if (a.points.length < 12) {
                                o = e.WebGLGraphics.switchMode(s, 0);
                                var h = e.WebGLGraphics.buildPoly(a, o);
                                h || (o = e.WebGLGraphics.switchMode(s, 1), e.WebGLGraphics.buildComplexPoly(a, o))
                            } else o = e.WebGLGraphics.switchMode(s, 1), e.WebGLGraphics.buildComplexPoly(a, o);
                        a.lineWidth > 0 && (o = e.WebGLGraphics.switchMode(s, 0), e.WebGLGraphics.buildLine(a, o))
                    } else o = e.WebGLGraphics.switchMode(s, 0), a.type === e.Graphics.RECT ? e.WebGLGraphics.buildRectangle(a, o) : a.type === e.Graphics.CIRC || a.type === e.Graphics.ELIP ? e.WebGLGraphics.buildCircle(a, o) : a.type === e.Graphics.RREC && e.WebGLGraphics.buildRoundedRectangle(a, o);
                    s.lastIndex++
                }
                for (n = 0; n < s.data.length; n++) o = s.data[n], o.dirty && o.upload()
            }, e.WebGLGraphics.switchMode = function(t, i) {
                var s;
                return t.data.length ? (s = t.data[t.data.length - 1], (s.mode !== i || 1 === i) && (s = e.WebGLGraphics.graphicsDataPool.pop() || new e.WebGLGraphicsData(t.gl), s.mode = i, t.data.push(s))) : (s = e.WebGLGraphics.graphicsDataPool.pop() || new e.WebGLGraphicsData(t.gl), s.mode = i, t.data.push(s)), s.dirty = !0, s
            }, e.WebGLGraphics.buildRectangle = function(t, i) {
                var s = t.shape,
                    n = s.x,
                    r = s.y,
                    o = s.width,
                    a = s.height;
                if (t.fill) {
                    var h = e.hex2rgb(t.fillColor),
                        l = t.fillAlpha,
                        d = h[0] * l,
                        c = h[1] * l,
                        u = h[2] * l,
                        p = i.points,
                        f = i.indices,
                        y = p.length / 6;
                    p.push(n, r), p.push(d, c, u, l), p.push(n + o, r), p.push(d, c, u, l), p.push(n, r + a), p.push(d, c, u, l), p.push(n + o, r + a), p.push(d, c, u, l), f.push(y, y, y + 1, y + 2, y + 3, y + 3)
                }
                if (t.lineWidth) {
                    var x = t.points;
                    t.points = [n, r, n + o, r, n + o, r + a, n, r + a, n, r], e.WebGLGraphics.buildLine(t, i), t.points = x
                }
            }, e.WebGLGraphics.buildRoundedRectangle = function(t, i) {
                var s = t.shape,
                    n = s.x,
                    r = s.y,
                    o = s.width,
                    a = s.height,
                    h = s.radius,
                    l = [];
                if (l.push(n, r + h), l = l.concat(e.WebGLGraphics.quadraticBezierCurve(n, r + a - h, n, r + a, n + h, r + a)), l = l.concat(e.WebGLGraphics.quadraticBezierCurve(n + o - h, r + a, n + o, r + a, n + o, r + a - h)), l = l.concat(e.WebGLGraphics.quadraticBezierCurve(n + o, r + h, n + o, r, n + o - h, r)), l = l.concat(e.WebGLGraphics.quadraticBezierCurve(n + h, r, n, r, n, r + h)), t.fill) {
                    var d = e.hex2rgb(t.fillColor),
                        c = t.fillAlpha,
                        u = d[0] * c,
                        p = d[1] * c,
                        f = d[2] * c,
                        y = i.points,
                        x = i.indices,
                        m = y.length / 6,
                        g = e.PolyK.Triangulate(l),
                        v = 0;
                    for (v = 0; v < g.length; v += 3) x.push(g[v] + m), x.push(g[v] + m), x.push(g[v + 1] + m), x.push(g[v + 2] + m), x.push(g[v + 2] + m);
                    for (v = 0; v < l.length; v++) y.push(l[v], l[++v], u, p, f, c)
                }
                if (t.lineWidth) {
                    var b = t.points;
                    t.points = l, e.WebGLGraphics.buildLine(t, i), t.points = b
                }
            }, e.WebGLGraphics.quadraticBezierCurve = function(t, e, i, s, n, r) {
                function o(t, e, i) {
                    var s = e - t;
                    return t + s * i
                }
                for (var a, h, l, d, c, u, p = 20, f = [], y = 0, x = 0; p >= x; x++) y = x / p, a = o(t, i, y), h = o(e, s, y), l = o(i, n, y), d = o(s, r, y), c = o(a, l, y), u = o(h, d, y), f.push(c, u);
                return f
            }, e.WebGLGraphics.buildCircle = function(t, i) {
                var s, n, r = t.shape,
                    o = r.x,
                    a = r.y;
                t.type === e.Graphics.CIRC ? (s = r.radius, n = r.radius) : (s = r.width, n = r.height);
                var h = 40,
                    l = 2 * Math.PI / h,
                    d = 0;
                if (t.fill) {
                    var c = e.hex2rgb(t.fillColor),
                        u = t.fillAlpha,
                        p = c[0] * u,
                        f = c[1] * u,
                        y = c[2] * u,
                        x = i.points,
                        m = i.indices,
                        g = x.length / 6;
                    for (m.push(g), d = 0; h + 1 > d; d++) x.push(o, a, p, f, y, u), x.push(o + Math.sin(l * d) * s, a + Math.cos(l * d) * n, p, f, y, u), m.push(g++, g++);
                    m.push(g - 1)
                }
                if (t.lineWidth) {
                    var v = t.points;
                    for (t.points = [], d = 0; h + 1 > d; d++) t.points.push(o + Math.sin(l * d) * s, a + Math.cos(l * d) * n);
                    e.WebGLGraphics.buildLine(t, i), t.points = v
                }
            }, e.WebGLGraphics.buildLine = function(t, i) {
                var s = 0,
                    n = t.points;
                if (0 !== n.length) {
                    if (t.lineWidth % 2)
                        for (s = 0; s < n.length; s++) n[s] += .5;
                    var r = new e.Point(n[0], n[1]),
                        o = new e.Point(n[n.length - 2], n[n.length - 1]);
                    if (r.x === o.x && r.y === o.y) {
                        n = n.slice(), n.pop(), n.pop(), o = new e.Point(n[n.length - 2], n[n.length - 1]);
                        var a = o.x + .5 * (r.x - o.x),
                            h = o.y + .5 * (r.y - o.y);
                        n.unshift(a, h), n.push(a, h)
                    }
                    var l, d, c, u, p, f, y, x, m, g, v, b, _, S, w, T, C, E, A, P, L, R, I, G = i.points,
                        M = i.indices,
                        O = n.length / 2,
                        D = n.length,
                        F = G.length / 6,
                        B = t.lineWidth / 2,
                        k = e.hex2rgb(t.lineColor),
                        j = t.lineAlpha,
                        N = k[0] * j,
                        W = k[1] * j,
                        U = k[2] * j;
                    for (c = n[0], u = n[1], p = n[2], f = n[3], m = -(u - f), g = c - p, I = Math.sqrt(m * m + g * g), m /= I, g /= I, m *= B, g *= B, G.push(c - m, u - g, N, W, U, j), G.push(c + m, u + g, N, W, U, j), s = 1; O - 1 > s; s++) c = n[2 * (s - 1)], u = n[2 * (s - 1) + 1], p = n[2 * s], f = n[2 * s + 1], y = n[2 * (s + 1)], x = n[2 * (s + 1) + 1], m = -(u - f), g = c - p, I = Math.sqrt(m * m + g * g), m /= I, g /= I, m *= B, g *= B, v = -(f - x), b = p - y, I = Math.sqrt(v * v + b * b), v /= I, b /= I, v *= B, b *= B, w = -g + u - (-g + f), T = -m + p - (-m + c), C = (-m + c) * (-g + f) - (-m + p) * (-g + u), E = -b + x - (-b + f), A = -v + p - (-v + y), P = (-v + y) * (-b + f) - (-v + p) * (-b + x), L = w * A - E * T, Math.abs(L) < .1 ? (L += 10.1, G.push(p - m, f - g, N, W, U, j), G.push(p + m, f + g, N, W, U, j)) : (l = (T * P - A * C) / L, d = (E * C - w * P) / L, R = (l - p) * (l - p) + (d - f) + (d - f), R > 19600 ? (_ = m - v, S = g - b, I = Math.sqrt(_ * _ + S * S), _ /= I, S /= I, _ *= B, S *= B, G.push(p - _, f - S), G.push(N, W, U, j), G.push(p + _, f + S), G.push(N, W, U, j), G.push(p - _, f - S), G.push(N, W, U, j), D++) : (G.push(l, d), G.push(N, W, U, j), G.push(p - (l - p), f - (d - f)), G.push(N, W, U, j)));
                    for (c = n[2 * (O - 2)], u = n[2 * (O - 2) + 1], p = n[2 * (O - 1)], f = n[2 * (O - 1) + 1], m = -(u - f), g = c - p, I = Math.sqrt(m * m + g * g), m /= I, g /= I, m *= B, g *= B, G.push(p - m, f - g), G.push(N, W, U, j), G.push(p + m, f + g), G.push(N, W, U, j), M.push(F), s = 0; D > s; s++) M.push(F++);
                    M.push(F - 1)
                }
            }, e.WebGLGraphics.buildComplexPoly = function(t, i) {
                var s = t.points.slice();
                if (!(s.length < 6)) {
                    var n = i.indices;
                    i.points = s, i.alpha = t.fillAlpha, i.color = e.hex2rgb(t.fillColor);
                    for (var r, o, a = 1 / 0, h = -(1 / 0), l = 1 / 0, d = -(1 / 0), c = 0; c < s.length; c += 2) r = s[c], o = s[c + 1], a = a > r ? r : a, h = r > h ? r : h, l = l > o ? o : l, d = o > d ? o : d;
                    s.push(a, l, h, l, h, d, a, d);
                    var u = s.length / 2;
                    for (c = 0; u > c; c++) n.push(c)
                }
            }, e.WebGLGraphics.buildPoly = function(t, i) {
                var s = t.points;
                if (!(s.length < 6)) {
                    var n = i.points,
                        r = i.indices,
                        o = s.length / 2,
                        a = e.hex2rgb(t.fillColor),
                        h = t.fillAlpha,
                        l = a[0] * h,
                        d = a[1] * h,
                        c = a[2] * h,
                        u = e.PolyK.Triangulate(s);
                    if (!u) return !1;
                    var p = n.length / 6,
                        f = 0;
                    for (f = 0; f < u.length; f += 3) r.push(u[f] + p), r.push(u[f] + p), r.push(u[f + 1] + p), r.push(u[f + 2] + p), r.push(u[f + 2] + p);
                    for (f = 0; o > f; f++) n.push(s[2 * f], s[2 * f + 1], l, d, c, h);
                    return !0
                }
            }, e.WebGLGraphics.graphicsDataPool = [], e.WebGLGraphicsData = function(t) {
                this.gl = t, this.color = [0, 0, 0], this.points = [], this.indices = [], this.buffer = t.createBuffer(), this.indexBuffer = t.createBuffer(), this.mode = 1, this.alpha = 1, this.dirty = !0
            }, e.WebGLGraphicsData.prototype.reset = function() {
                this.points = [], this.indices = []
            }, e.WebGLGraphicsData.prototype.upload = function() {
                var t = this.gl;
                this.glPoints = new e.Float32Array(this.points), t.bindBuffer(t.ARRAY_BUFFER, this.buffer), t.bufferData(t.ARRAY_BUFFER, this.glPoints, t.STATIC_DRAW), this.glIndicies = new e.Uint16Array(this.indices), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer), t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.glIndicies, t.STATIC_DRAW), this.dirty = !1
            }, e.glContexts = [], e.instances = [], e.WebGLRenderer = function(t, i, s) {
                if (s)
                    for (var n in e.defaultRenderOptions) "undefined" == typeof s[n] && (s[n] = e.defaultRenderOptions[n]);
                else s = e.defaultRenderOptions;
                e.defaultRenderer || (e.sayHello("webGL"), e.defaultRenderer = this), this.type = e.WEBGL_RENDERER, this.resolution = s.resolution, this.transparent = s.transparent, this.autoResize = s.autoResize || !1, this.preserveDrawingBuffer = s.preserveDrawingBuffer, this.clearBeforeRender = s.clearBeforeRender, this.width = t || 800, this.height = i || 600, this.view = s.view || document.createElement("canvas"), this.contextLostBound = this.handleContextLost.bind(this), this.contextRestoredBound = this.handleContextRestored.bind(this), this.view.addEventListener("webglcontextlost", this.contextLostBound, !1), this.view.addEventListener("webglcontextrestored", this.contextRestoredBound, !1), this._contextOptions = {
                    alpha: this.transparent,
                    antialias: s.antialias,
                    premultipliedAlpha: this.transparent && "notMultiplied" !== this.transparent,
                    stencil: !0,
                    preserveDrawingBuffer: s.preserveDrawingBuffer
                }, this.projection = new e.Point, this.offset = new e.Point(0, 0), this.shaderManager = new e.WebGLShaderManager, this.spriteBatch = new e.WebGLSpriteBatch, this.maskManager = new e.WebGLMaskManager, this.filterManager = new e.WebGLFilterManager, this.stencilManager = new e.WebGLStencilManager, this.blendModeManager = new e.WebGLBlendModeManager, this.renderSession = {}, this.renderSession.gl = this.gl, this.renderSession.drawCount = 0, this.renderSession.shaderManager = this.shaderManager, this.renderSession.maskManager = this.maskManager, this.renderSession.filterManager = this.filterManager, this.renderSession.blendModeManager = this.blendModeManager, this.renderSession.spriteBatch = this.spriteBatch, this.renderSession.stencilManager = this.stencilManager, this.renderSession.renderer = this, this.renderSession.resolution = this.resolution, this.initContext(), this.mapBlendModes()
            }, e.WebGLRenderer.prototype.constructor = e.WebGLRenderer, e.WebGLRenderer.prototype.initContext = function() {
                var t = this.view.getContext("webgl", this._contextOptions) || this.view.getContext("experimental-webgl", this._contextOptions);
                if (this.gl = t, !t) throw new Error("This browser does not support webGL. Try using the canvas renderer");
                this.glContextId = t.id = e.WebGLRenderer.glContextId++, e.glContexts[this.glContextId] = t, e.instances[this.glContextId] = this, t.disable(t.DEPTH_TEST), t.disable(t.CULL_FACE), t.enable(t.BLEND), this.shaderManager.setContext(t), this.spriteBatch.setContext(t), this.maskManager.setContext(t), this.filterManager.setContext(t), this.blendModeManager.setContext(t), this.stencilManager.setContext(t), this.renderSession.gl = this.gl, this.resize(this.width, this.height)
            }, e.WebGLRenderer.prototype.render = function(t) {
                if (!this.contextLost) {
                    this.__stage !== t && (t.interactive && t.interactionManager.removeEvents(), this.__stage = t), t.updateTransform();
                    var e = this.gl;
                    t._interactive ? t._interactiveEventsAdded || (t._interactiveEventsAdded = !0, t.interactionManager.setTarget(this)) : t._interactiveEventsAdded && (t._interactiveEventsAdded = !1, t.interactionManager.setTarget(this)), e.viewport(0, 0, this.width, this.height), e.bindFramebuffer(e.FRAMEBUFFER, null), this.clearBeforeRender && (this.transparent ? e.clearColor(0, 0, 0, 0) : e.clearColor(t.backgroundColorSplit[0], t.backgroundColorSplit[1], t.backgroundColorSplit[2], 1), e.clear(e.COLOR_BUFFER_BIT)), this.renderDisplayObject(t, this.projection)
                }
            }, e.WebGLRenderer.prototype.renderDisplayObject = function(t, i, s) {
                this.renderSession.blendModeManager.setBlendMode(e.blendModes.NORMAL), this.renderSession.drawCount = 0, this.renderSession.flipY = s ? -1 : 1, this.renderSession.projection = i, this.renderSession.offset = this.offset, this.spriteBatch.begin(this.renderSession), this.filterManager.begin(this.renderSession, s), t._renderWebGL(this.renderSession), this.spriteBatch.end()
            }, e.WebGLRenderer.prototype.resize = function(t, e) {
                this.width = t * this.resolution, this.height = e * this.resolution, this.view.width = this.width, this.view.height = this.height, this.autoResize && (this.view.style.width = this.width / this.resolution + "px", this.view.style.height = this.height / this.resolution + "px"), this.gl.viewport(0, 0, this.width, this.height), this.projection.x = this.width / 2 / this.resolution, this.projection.y = -this.height / 2 / this.resolution
            }, e.WebGLRenderer.prototype.updateTexture = function(t) {
                if (t.hasLoaded) {
                    var i = this.gl;
                    return t._glTextures[i.id] || (t._glTextures[i.id] = i.createTexture()), i.bindTexture(i.TEXTURE_2D, t._glTextures[i.id]), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t.premultipliedAlpha), i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, i.RGBA, i.UNSIGNED_BYTE, t.source), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MAG_FILTER, t.scaleMode === e.scaleModes.LINEAR ? i.LINEAR : i.NEAREST), t.mipmap && e.isPowerOfTwo(t.width, t.height) ? (i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MIN_FILTER, t.scaleMode === e.scaleModes.LINEAR ? i.LINEAR_MIPMAP_LINEAR : i.NEAREST_MIPMAP_NEAREST), i.generateMipmap(i.TEXTURE_2D)) : i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MIN_FILTER, t.scaleMode === e.scaleModes.LINEAR ? i.LINEAR : i.NEAREST), t._powerOf2 ? (i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_S, i.REPEAT), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_T, i.REPEAT)) : (i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_S, i.CLAMP_TO_EDGE), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_T, i.CLAMP_TO_EDGE)), t._dirty[i.id] = !1, t._glTextures[i.id]
                }
            }, e.WebGLRenderer.prototype.handleContextLost = function(t) {
                t.preventDefault(), this.contextLost = !0
            }, e.WebGLRenderer.prototype.handleContextRestored = function() {
                this.initContext();
                for (var t in e.TextureCache) {
                    var i = e.TextureCache[t].baseTexture;
                    i._glTextures = []
                }
                this.contextLost = !1
            }, e.WebGLRenderer.prototype.destroy = function() {
                this.view.removeEventListener("webglcontextlost", this.contextLostBound), this.view.removeEventListener("webglcontextrestored", this.contextRestoredBound), e.glContexts[this.glContextId] = null, this.projection = null, this.offset = null, this.shaderManager.destroy(), this.spriteBatch.destroy(), this.maskManager.destroy(), this.filterManager.destroy(), this.shaderManager = null, this.spriteBatch = null, this.maskManager = null, this.filterManager = null, this.gl = null, this.renderSession = null
            }, e.WebGLRenderer.prototype.mapBlendModes = function() {
                var t = this.gl;
                e.blendModesWebGL || (e.blendModesWebGL = [], e.blendModesWebGL[e.blendModes.NORMAL] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e.blendModesWebGL[e.blendModes.ADD] = [t.SRC_ALPHA, t.DST_ALPHA], e.blendModesWebGL[e.blendModes.MULTIPLY] = [t.DST_COLOR, t.ONE_MINUS_SRC_ALPHA], e.blendModesWebGL[e.blendModes.SCREEN] = [t.SRC_ALPHA, t.ONE], e.blendModesWebGL[e.blendModes.OVERLAY] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e.blendModesWebGL[e.blendModes.DARKEN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e.blendModesWebGL[e.blendModes.LIGHTEN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e.blendModesWebGL[e.blendModes.COLOR_DODGE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e.blendModesWebGL[e.blendModes.COLOR_BURN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e.blendModesWebGL[e.blendModes.HARD_LIGHT] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e.blendModesWebGL[e.blendModes.SOFT_LIGHT] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e.blendModesWebGL[e.blendModes.DIFFERENCE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e.blendModesWebGL[e.blendModes.EXCLUSION] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e.blendModesWebGL[e.blendModes.HUE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e.blendModesWebGL[e.blendModes.SATURATION] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e.blendModesWebGL[e.blendModes.COLOR] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e.blendModesWebGL[e.blendModes.LUMINOSITY] = [t.ONE, t.ONE_MINUS_SRC_ALPHA])
            }, e.WebGLRenderer.glContextId = 0, e.WebGLBlendModeManager = function() {
                this.currentBlendMode = 99999
            }, e.WebGLBlendModeManager.prototype.constructor = e.WebGLBlendModeManager, e.WebGLBlendModeManager.prototype.setContext = function(t) {
                this.gl = t
            }, e.WebGLBlendModeManager.prototype.setBlendMode = function(t) {
                if (this.currentBlendMode === t) return !1;
                this.currentBlendMode = t;
                var i = e.blendModesWebGL[this.currentBlendMode];
                return this.gl.blendFunc(i[0], i[1]), !0
            }, e.WebGLBlendModeManager.prototype.destroy = function() {
                this.gl = null
            }, e.WebGLMaskManager = function() {}, e.WebGLMaskManager.prototype.constructor = e.WebGLMaskManager, e.WebGLMaskManager.prototype.setContext = function(t) {
                this.gl = t
            }, e.WebGLMaskManager.prototype.pushMask = function(t, i) {
                var s = i.gl;
                t.dirty && e.WebGLGraphics.updateGraphics(t, s), t._webGL[s.id].data.length && i.stencilManager.pushStencil(t, t._webGL[s.id].data[0], i)
            }, e.WebGLMaskManager.prototype.popMask = function(t, e) {
                var i = this.gl;
                e.stencilManager.popStencil(t, t._webGL[i.id].data[0], e)
            }, e.WebGLMaskManager.prototype.destroy = function() {
                this.gl = null
            }, e.WebGLStencilManager = function() {
                this.stencilStack = [], this.reverse = !0, this.count = 0
            }, e.WebGLStencilManager.prototype.setContext = function(t) {
                this.gl = t
            }, e.WebGLStencilManager.prototype.pushStencil = function(t, e, i) {
                var s = this.gl;
                this.bindGraphics(t, e, i), 0 === this.stencilStack.length && (s.enable(s.STENCIL_TEST), s.clear(s.STENCIL_BUFFER_BIT), this.reverse = !0, this.count = 0), this.stencilStack.push(e);
                var n = this.count;
                s.colorMask(!1, !1, !1, !1), s.stencilFunc(s.ALWAYS, 0, 255), s.stencilOp(s.KEEP, s.KEEP, s.INVERT), 1 === e.mode ? (s.drawElements(s.TRIANGLE_FAN, e.indices.length - 4, s.UNSIGNED_SHORT, 0), this.reverse ? (s.stencilFunc(s.EQUAL, 255 - n, 255), s.stencilOp(s.KEEP, s.KEEP, s.DECR)) : (s.stencilFunc(s.EQUAL, n, 255), s.stencilOp(s.KEEP, s.KEEP, s.INCR)), s.drawElements(s.TRIANGLE_FAN, 4, s.UNSIGNED_SHORT, 2 * (e.indices.length - 4)), this.reverse ? s.stencilFunc(s.EQUAL, 255 - (n + 1), 255) : s.stencilFunc(s.EQUAL, n + 1, 255), this.reverse = !this.reverse) : (this.reverse ? (s.stencilFunc(s.EQUAL, n, 255), s.stencilOp(s.KEEP, s.KEEP, s.INCR)) : (s.stencilFunc(s.EQUAL, 255 - n, 255), s.stencilOp(s.KEEP, s.KEEP, s.DECR)), s.drawElements(s.TRIANGLE_STRIP, e.indices.length, s.UNSIGNED_SHORT, 0), this.reverse ? s.stencilFunc(s.EQUAL, n + 1, 255) : s.stencilFunc(s.EQUAL, 255 - (n + 1), 255)), s.colorMask(!0, !0, !0, !0), s.stencilOp(s.KEEP, s.KEEP, s.KEEP), this.count++
            }, e.WebGLStencilManager.prototype.bindGraphics = function(t, i, s) {
                this._currentGraphics = t;
                var n, r = this.gl,
                    o = s.projection,
                    a = s.offset;
                1 === i.mode ? (n = s.shaderManager.complexPrimitiveShader, s.shaderManager.setShader(n), r.uniform1f(n.flipY, s.flipY), r.uniformMatrix3fv(n.translationMatrix, !1, t.worldTransform.toArray(!0)), r.uniform2f(n.projectionVector, o.x, -o.y), r.uniform2f(n.offsetVector, -a.x, -a.y), r.uniform3fv(n.tintColor, e.hex2rgb(t.tint)), r.uniform3fv(n.color, i.color), r.uniform1f(n.alpha, t.worldAlpha * i.alpha), r.bindBuffer(r.ARRAY_BUFFER, i.buffer), r.vertexAttribPointer(n.aVertexPosition, 2, r.FLOAT, !1, 8, 0), r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, i.indexBuffer)) : (n = s.shaderManager.primitiveShader, s.shaderManager.setShader(n), r.uniformMatrix3fv(n.translationMatrix, !1, t.worldTransform.toArray(!0)), r.uniform1f(n.flipY, s.flipY), r.uniform2f(n.projectionVector, o.x, -o.y), r.uniform2f(n.offsetVector, -a.x, -a.y), r.uniform3fv(n.tintColor, e.hex2rgb(t.tint)), r.uniform1f(n.alpha, t.worldAlpha), r.bindBuffer(r.ARRAY_BUFFER, i.buffer), r.vertexAttribPointer(n.aVertexPosition, 2, r.FLOAT, !1, 24, 0), r.vertexAttribPointer(n.colorAttribute, 4, r.FLOAT, !1, 24, 8), r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, i.indexBuffer))
            }, e.WebGLStencilManager.prototype.popStencil = function(t, e, i) {
                var s = this.gl;
                if (this.stencilStack.pop(), this.count--, 0 === this.stencilStack.length) s.disable(s.STENCIL_TEST);
                else {
                    var n = this.count;
                    this.bindGraphics(t, e, i), s.colorMask(!1, !1, !1, !1), 1 === e.mode ? (this.reverse = !this.reverse, this.reverse ? (s.stencilFunc(s.EQUAL, 255 - (n + 1), 255), s.stencilOp(s.KEEP, s.KEEP, s.INCR)) : (s.stencilFunc(s.EQUAL, n + 1, 255), s.stencilOp(s.KEEP, s.KEEP, s.DECR)), s.drawElements(s.TRIANGLE_FAN, 4, s.UNSIGNED_SHORT, 2 * (e.indices.length - 4)), s.stencilFunc(s.ALWAYS, 0, 255), s.stencilOp(s.KEEP, s.KEEP, s.INVERT), s.drawElements(s.TRIANGLE_FAN, e.indices.length - 4, s.UNSIGNED_SHORT, 0), this.reverse ? s.stencilFunc(s.EQUAL, n, 255) : s.stencilFunc(s.EQUAL, 255 - n, 255)) : (this.reverse ? (s.stencilFunc(s.EQUAL, n + 1, 255), s.stencilOp(s.KEEP, s.KEEP, s.DECR)) : (s.stencilFunc(s.EQUAL, 255 - (n + 1), 255), s.stencilOp(s.KEEP, s.KEEP, s.INCR)), s.drawElements(s.TRIANGLE_STRIP, e.indices.length, s.UNSIGNED_SHORT, 0), this.reverse ? s.stencilFunc(s.EQUAL, n, 255) : s.stencilFunc(s.EQUAL, 255 - n, 255)), s.colorMask(!0, !0, !0, !0), s.stencilOp(s.KEEP, s.KEEP, s.KEEP)
                }
            }, e.WebGLStencilManager.prototype.destroy = function() {
                this.stencilStack = null, this.gl = null
            }, e.WebGLShaderManager = function() {
                this.maxAttibs = 10, this.attribState = [], this.tempAttribState = [];
                for (var t = 0; t < this.maxAttibs; t++) this.attribState[t] = !1;
                this.stack = []
            }, e.WebGLShaderManager.prototype.constructor = e.WebGLShaderManager, e.WebGLShaderManager.prototype.setContext = function(t) {
                this.gl = t, this.primitiveShader = new e.PrimitiveShader(t), this.complexPrimitiveShader = new e.ComplexPrimitiveShader(t), this.defaultShader = new e.PixiShader(t), this.fastShader = new e.PixiFastShader(t), this.stripShader = new e.StripShader(t), this.setShader(this.defaultShader)
            }, e.WebGLShaderManager.prototype.setAttribs = function(t) {
                var e;
                for (e = 0; e < this.tempAttribState.length; e++) this.tempAttribState[e] = !1;
                for (e = 0; e < t.length; e++) {
                    var i = t[e];
                    this.tempAttribState[i] = !0
                }
                var s = this.gl;
                for (e = 0; e < this.attribState.length; e++) this.attribState[e] !== this.tempAttribState[e] && (this.attribState[e] = this.tempAttribState[e], this.tempAttribState[e] ? s.enableVertexAttribArray(e) : s.disableVertexAttribArray(e))
            }, e.WebGLShaderManager.prototype.setShader = function(t) {
                return this._currentId === t._UID ? !1 : (this._currentId = t._UID, this.currentShader = t, this.gl.useProgram(t.program), this.setAttribs(t.attributes), !0)
            }, e.WebGLShaderManager.prototype.destroy = function() {
                this.attribState = null, this.tempAttribState = null, this.primitiveShader.destroy(), this.complexPrimitiveShader.destroy(), this.defaultShader.destroy(), this.fastShader.destroy(), this.stripShader.destroy(), this.gl = null
            }, e.WebGLSpriteBatch = function() {
                this.vertSize = 5, this.size = 2e3;
                var t = 4 * this.size * 4 * this.vertSize,
                    i = 6 * this.size;
                this.vertices = new e.ArrayBuffer(t), this.positions = new e.Float32Array(this.vertices), this.colors = new e.Uint32Array(this.vertices), this.indices = new e.Uint16Array(i), this.lastIndexCount = 0;
                for (var s = 0, n = 0; i > s; s += 6, n += 4) this.indices[s + 0] = n + 0, this.indices[s + 1] = n + 1, this.indices[s + 2] = n + 2, this.indices[s + 3] = n + 0, this.indices[s + 4] = n + 2, this.indices[s + 5] = n + 3;
                this.drawing = !1, this.currentBatchSize = 0, this.currentBaseTexture = null, this.dirty = !0, this.textures = [], this.blendModes = [], this.shaders = [], this.sprites = [], this.defaultShader = new e.AbstractFilter(["precision lowp float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform sampler2D uSampler;", "void main(void) {", "   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;", "}"])
            }, e.WebGLSpriteBatch.prototype.setContext = function(t) {
                this.gl = t, this.vertexBuffer = t.createBuffer(), this.indexBuffer = t.createBuffer(), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer), t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.indices, t.STATIC_DRAW), t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer), t.bufferData(t.ARRAY_BUFFER, this.vertices, t.DYNAMIC_DRAW), this.currentBlendMode = 99999;
                var i = new e.PixiShader(t);
                i.fragmentSrc = this.defaultShader.fragmentSrc, i.uniforms = {}, i.init(), this.defaultShader.shaders[t.id] = i
            }, e.WebGLSpriteBatch.prototype.begin = function(t) {
                this.renderSession = t, this.shader = this.renderSession.shaderManager.defaultShader, this.start()
            }, e.WebGLSpriteBatch.prototype.end = function() {
                this.flush()
            }, e.WebGLSpriteBatch.prototype.render = function(t) {
                var e = t.texture;
                this.currentBatchSize >= this.size && (this.flush(), this.currentBaseTexture = e.baseTexture);
                var i = e._uvs;
                if (i) {
                    var s, n, r, o, a = t.anchor.x,
                        h = t.anchor.y;
                    if (e.trim) {
                        var l = e.trim;
                        n = l.x - a * l.width, s = n + e.crop.width, o = l.y - h * l.height, r = o + e.crop.height
                    } else s = e.frame.width * (1 - a), n = e.frame.width * -a, r = e.frame.height * (1 - h), o = e.frame.height * -h;
                    var d = 4 * this.currentBatchSize * this.vertSize,
                        c = e.baseTexture.resolution,
                        u = t.worldTransform,
                        p = u.a / c,
                        f = u.b / c,
                        y = u.c / c,
                        x = u.d / c,
                        m = u.tx,
                        g = u.ty,
                        v = this.colors,
                        b = this.positions;
                    this.renderSession.roundPixels ? (b[d] = p * n + y * o + m | 0, b[d + 1] = x * o + f * n + g | 0, b[d + 5] = p * s + y * o + m | 0, b[d + 6] = x * o + f * s + g | 0, b[d + 10] = p * s + y * r + m | 0, b[d + 11] = x * r + f * s + g | 0, b[d + 15] = p * n + y * r + m | 0, b[d + 16] = x * r + f * n + g | 0) : (b[d] = p * n + y * o + m, b[d + 1] = x * o + f * n + g, b[d + 5] = p * s + y * o + m, b[d + 6] = x * o + f * s + g, b[d + 10] = p * s + y * r + m, b[d + 11] = x * r + f * s + g, b[d + 15] = p * n + y * r + m, b[d + 16] = x * r + f * n + g), b[d + 2] = i.x0, b[d + 3] = i.y0, b[d + 7] = i.x1, b[d + 8] = i.y1, b[d + 12] = i.x2, b[d + 13] = i.y2, b[d + 17] = i.x3, b[d + 18] = i.y3;
                    var _ = t.tint;
                    v[d + 4] = v[d + 9] = v[d + 14] = v[d + 19] = (_ >> 16) + (65280 & _) + ((255 & _) << 16) + (255 * t.worldAlpha << 24), this.sprites[this.currentBatchSize++] = t
                }
            }, e.WebGLSpriteBatch.prototype.renderTilingSprite = function(t) {
                var i = t.tilingTexture;
                this.currentBatchSize >= this.size && (this.flush(), this.currentBaseTexture = i.baseTexture), t._uvs || (t._uvs = new e.TextureUvs);
                var s = t._uvs;
                t.tilePosition.x %= i.baseTexture.width * t.tileScaleOffset.x, t.tilePosition.y %= i.baseTexture.height * t.tileScaleOffset.y;
                var n = t.tilePosition.x / (i.baseTexture.width * t.tileScaleOffset.x),
                    r = t.tilePosition.y / (i.baseTexture.height * t.tileScaleOffset.y),
                    o = t.width / i.baseTexture.width / (t.tileScale.x * t.tileScaleOffset.x),
                    a = t.height / i.baseTexture.height / (t.tileScale.y * t.tileScaleOffset.y);
                s.x0 = 0 - n, s.y0 = 0 - r, s.x1 = 1 * o - n, s.y1 = 0 - r, s.x2 = 1 * o - n, s.y2 = 1 * a - r, s.x3 = 0 - n, s.y3 = 1 * a - r;
                var h = t.tint,
                    l = (h >> 16) + (65280 & h) + ((255 & h) << 16) + (255 * t.alpha << 24),
                    d = this.positions,
                    c = this.colors,
                    u = t.width,
                    p = t.height,
                    f = t.anchor.x,
                    y = t.anchor.y,
                    x = u * (1 - f),
                    m = u * -f,
                    g = p * (1 - y),
                    v = p * -y,
                    b = 4 * this.currentBatchSize * this.vertSize,
                    _ = i.baseTexture.resolution,
                    S = t.worldTransform,
                    w = S.a / _,
                    T = S.b / _,
                    C = S.c / _,
                    E = S.d / _,
                    A = S.tx,
                    P = S.ty;
                d[b++] = w * m + C * v + A, d[b++] = E * v + T * m + P, d[b++] = s.x0, d[b++] = s.y0, c[b++] = l, d[b++] = w * x + C * v + A, d[b++] = E * v + T * x + P, d[b++] = s.x1, d[b++] = s.y1, c[b++] = l, d[b++] = w * x + C * g + A, d[b++] = E * g + T * x + P, d[b++] = s.x2, d[b++] = s.y2, c[b++] = l, d[b++] = w * m + C * g + A, d[b++] = E * g + T * m + P, d[b++] = s.x3, d[b++] = s.y3, c[b++] = l, this.sprites[this.currentBatchSize++] = t
            }, e.WebGLSpriteBatch.prototype.flush = function() {
                if (0 !== this.currentBatchSize) {
                    var t, i = this.gl;
                    if (this.dirty) {
                        this.dirty = !1, i.activeTexture(i.TEXTURE0), i.bindBuffer(i.ARRAY_BUFFER, this.vertexBuffer), i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, this.indexBuffer), t = this.defaultShader.shaders[i.id];
                        var s = 4 * this.vertSize;
                        i.vertexAttribPointer(t.aVertexPosition, 2, i.FLOAT, !1, s, 0), i.vertexAttribPointer(t.aTextureCoord, 2, i.FLOAT, !1, s, 8), i.vertexAttribPointer(t.colorAttribute, 4, i.UNSIGNED_BYTE, !0, s, 16)
                    }
                    if (this.currentBatchSize > .5 * this.size) i.bufferSubData(i.ARRAY_BUFFER, 0, this.vertices);
                    else {
                        var n = this.positions.subarray(0, 4 * this.currentBatchSize * this.vertSize);
                        i.bufferSubData(i.ARRAY_BUFFER, 0, n)
                    }
                    for (var r, o, a, h, l = 0, d = 0, c = null, u = this.renderSession.blendModeManager.currentBlendMode, p = null, f = !1, y = !1, x = 0, m = this.currentBatchSize; m > x; x++) {
                        if (h = this.sprites[x], r = h.texture.baseTexture, o = h.blendMode, a = h.shader || this.defaultShader, f = u !== o, y = p !== a, (c !== r || f || y) && (this.renderBatch(c, l, d), d = x, l = 0, c = r, f && (u = o, this.renderSession.blendModeManager.setBlendMode(u)), y)) {
                            p = a, t = p.shaders[i.id], t || (t = new e.PixiShader(i), t.fragmentSrc = p.fragmentSrc, t.uniforms = p.uniforms, t.init(), p.shaders[i.id] = t), this.renderSession.shaderManager.setShader(t), t.dirty && t.syncUniforms();
                            var g = this.renderSession.projection;
                            i.uniform2f(t.projectionVector, g.x, g.y);
                            var v = this.renderSession.offset;
                            i.uniform2f(t.offsetVector, v.x, v.y)
                        }
                        l++
                    }
                    this.renderBatch(c, l, d), this.currentBatchSize = 0
                }
            }, e.WebGLSpriteBatch.prototype.renderBatch = function(t, e, i) {
                if (0 !== e) {
                    var s = this.gl;
                    t._dirty[s.id] ? this.renderSession.renderer.updateTexture(t) : s.bindTexture(s.TEXTURE_2D, t._glTextures[s.id]), s.drawElements(s.TRIANGLES, 6 * e, s.UNSIGNED_SHORT, 6 * i * 2), this.renderSession.drawCount++
                }
            }, e.WebGLSpriteBatch.prototype.stop = function() {
                this.flush(), this.dirty = !0
            }, e.WebGLSpriteBatch.prototype.start = function() {
                this.dirty = !0
            }, e.WebGLSpriteBatch.prototype.destroy = function() {
                this.vertices = null, this.indices = null, this.gl.deleteBuffer(this.vertexBuffer), this.gl.deleteBuffer(this.indexBuffer), this.currentBaseTexture = null, this.gl = null
            }, e.WebGLFastSpriteBatch = function(t) {
                this.vertSize = 10, this.maxSize = 6e3, this.size = this.maxSize;
                var i = 4 * this.size * this.vertSize,
                    s = 6 * this.maxSize;
                this.vertices = new e.Float32Array(i), this.indices = new e.Uint16Array(s), this.vertexBuffer = null, this.indexBuffer = null, this.lastIndexCount = 0;
                for (var n = 0, r = 0; s > n; n += 6, r += 4) this.indices[n + 0] = r + 0, this.indices[n + 1] = r + 1, this.indices[n + 2] = r + 2, this.indices[n + 3] = r + 0, this.indices[n + 4] = r + 2, this.indices[n + 5] = r + 3;
                this.drawing = !1, this.currentBatchSize = 0, this.currentBaseTexture = null, this.currentBlendMode = 0, this.renderSession = null, this.shader = null, this.matrix = null, this.setContext(t)
            }, e.WebGLFastSpriteBatch.prototype.constructor = e.WebGLFastSpriteBatch, e.WebGLFastSpriteBatch.prototype.setContext = function(t) {
                this.gl = t, this.vertexBuffer = t.createBuffer(), this.indexBuffer = t.createBuffer(), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer), t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.indices, t.STATIC_DRAW), t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer), t.bufferData(t.ARRAY_BUFFER, this.vertices, t.DYNAMIC_DRAW)
            }, e.WebGLFastSpriteBatch.prototype.begin = function(t, e) {
                this.renderSession = e, this.shader = this.renderSession.shaderManager.fastShader, this.matrix = t.worldTransform.toArray(!0), this.start()
            }, e.WebGLFastSpriteBatch.prototype.end = function() {
                this.flush()
            }, e.WebGLFastSpriteBatch.prototype.render = function(t) {
                var e = t.children,
                    i = e[0];
                if (i.texture._uvs) {
                    this.currentBaseTexture = i.texture.baseTexture, i.blendMode !== this.renderSession.blendModeManager.currentBlendMode && (this.flush(), this.renderSession.blendModeManager.setBlendMode(i.blendMode));
                    for (var s = 0, n = e.length; n > s; s++) this.renderSprite(e[s]);
                    this.flush()
                }
            }, e.WebGLFastSpriteBatch.prototype.renderSprite = function(t) {
                if (t.visible && (t.texture.baseTexture === this.currentBaseTexture || (this.flush(), this.currentBaseTexture = t.texture.baseTexture, t.texture._uvs))) {
                    var e, i, s, n, r, o, a, h, l = this.vertices;
                    if (e = t.texture._uvs, i = t.texture.frame.width, s = t.texture.frame.height, t.texture.trim) {
                        var d = t.texture.trim;
                        r = d.x - t.anchor.x * d.width, n = r + t.texture.crop.width, a = d.y - t.anchor.y * d.height, o = a + t.texture.crop.height
                    } else n = t.texture.frame.width * (1 - t.anchor.x), r = t.texture.frame.width * -t.anchor.x, o = t.texture.frame.height * (1 - t.anchor.y), a = t.texture.frame.height * -t.anchor.y;
                    h = 4 * this.currentBatchSize * this.vertSize, l[h++] = r, l[h++] = a, l[h++] = t.position.x, l[h++] = t.position.y, l[h++] = t.scale.x, l[h++] = t.scale.y, l[h++] = t.rotation, l[h++] = e.x0, l[h++] = e.y1, l[h++] = t.alpha, l[h++] = n, l[h++] = a, l[h++] = t.position.x, l[h++] = t.position.y, l[h++] = t.scale.x, l[h++] = t.scale.y, l[h++] = t.rotation, l[h++] = e.x1, l[h++] = e.y1, l[h++] = t.alpha, l[h++] = n, l[h++] = o, l[h++] = t.position.x, l[h++] = t.position.y, l[h++] = t.scale.x, l[h++] = t.scale.y, l[h++] = t.rotation, l[h++] = e.x2, l[h++] = e.y2, l[h++] = t.alpha, l[h++] = r, l[h++] = o, l[h++] = t.position.x, l[h++] = t.position.y, l[h++] = t.scale.x, l[h++] = t.scale.y, l[h++] = t.rotation, l[h++] = e.x3, l[h++] = e.y3, l[h++] = t.alpha, this.currentBatchSize++, this.currentBatchSize >= this.size && this.flush()
                }
            }, e.WebGLFastSpriteBatch.prototype.flush = function() {
                if (0 !== this.currentBatchSize) {
                    var t = this.gl;
                    if (this.currentBaseTexture._glTextures[t.id] || this.renderSession.renderer.updateTexture(this.currentBaseTexture, t), t.bindTexture(t.TEXTURE_2D, this.currentBaseTexture._glTextures[t.id]), this.currentBatchSize > .5 * this.size) t.bufferSubData(t.ARRAY_BUFFER, 0, this.vertices);
                    else {
                        var e = this.vertices.subarray(0, 4 * this.currentBatchSize * this.vertSize);
                        t.bufferSubData(t.ARRAY_BUFFER, 0, e)
                    }
                    t.drawElements(t.TRIANGLES, 6 * this.currentBatchSize, t.UNSIGNED_SHORT, 0), this.currentBatchSize = 0, this.renderSession.drawCount++
                }
            }, e.WebGLFastSpriteBatch.prototype.stop = function() {
                this.flush()
            }, e.WebGLFastSpriteBatch.prototype.start = function() {
                var t = this.gl;
                t.activeTexture(t.TEXTURE0), t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
                var e = this.renderSession.projection;
                t.uniform2f(this.shader.projectionVector, e.x, e.y), t.uniformMatrix3fv(this.shader.uMatrix, !1, this.matrix);
                var i = 4 * this.vertSize;
                t.vertexAttribPointer(this.shader.aVertexPosition, 2, t.FLOAT, !1, i, 0), t.vertexAttribPointer(this.shader.aPositionCoord, 2, t.FLOAT, !1, i, 8), t.vertexAttribPointer(this.shader.aScale, 2, t.FLOAT, !1, i, 16), t.vertexAttribPointer(this.shader.aRotation, 1, t.FLOAT, !1, i, 24), t.vertexAttribPointer(this.shader.aTextureCoord, 2, t.FLOAT, !1, i, 28), t.vertexAttribPointer(this.shader.colorAttribute, 1, t.FLOAT, !1, i, 36)
            }, e.WebGLFilterManager = function() {
                this.filterStack = [], this.offsetX = 0, this.offsetY = 0
            }, e.WebGLFilterManager.prototype.constructor = e.WebGLFilterManager, e.WebGLFilterManager.prototype.setContext = function(t) {
                this.gl = t, this.texturePool = [], this.initShaderBuffers()
            }, e.WebGLFilterManager.prototype.begin = function(t, e) {
                this.renderSession = t, this.defaultShader = t.shaderManager.defaultShader;
                var i = this.renderSession.projection;
                this.width = 2 * i.x, this.height = 2 * -i.y, this.buffer = e
            }, e.WebGLFilterManager.prototype.pushFilter = function(t) {
                var i = this.gl,
                    s = this.renderSession.projection,
                    n = this.renderSession.offset;
                t._filterArea = t.target.filterArea || t.target.getBounds(), this.filterStack.push(t);
                var r = t.filterPasses[0];
                this.offsetX += t._filterArea.x, this.offsetY += t._filterArea.y;
                var o = this.texturePool.pop();
                o ? o.resize(this.width, this.height) : o = new e.FilterTexture(this.gl, this.width, this.height), i.bindTexture(i.TEXTURE_2D, o.texture);
                var a = t._filterArea,
                    h = r.padding;
                a.x -= h, a.y -= h, a.width += 2 * h, a.height += 2 * h, a.x < 0 && (a.x = 0), a.width > this.width && (a.width = this.width), a.y < 0 && (a.y = 0), a.height > this.height && (a.height = this.height), i.bindFramebuffer(i.FRAMEBUFFER, o.frameBuffer), i.viewport(0, 0, a.width, a.height), s.x = a.width / 2, s.y = -a.height / 2, n.x = -a.x, n.y = -a.y, i.colorMask(!0, !0, !0, !0), i.clearColor(0, 0, 0, 0), i.clear(i.COLOR_BUFFER_BIT), t._glFilterTexture = o
            }, e.WebGLFilterManager.prototype.popFilter = function() {
                var t = this.gl,
                    i = this.filterStack.pop(),
                    s = i._filterArea,
                    n = i._glFilterTexture,
                    r = this.renderSession.projection,
                    o = this.renderSession.offset;
                if (i.filterPasses.length > 1) {
                    t.viewport(0, 0, s.width, s.height), t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer), this.vertexArray[0] = 0, this.vertexArray[1] = s.height, this.vertexArray[2] = s.width, this.vertexArray[3] = s.height, this.vertexArray[4] = 0, this.vertexArray[5] = 0, this.vertexArray[6] = s.width, this.vertexArray[7] = 0, t.bufferSubData(t.ARRAY_BUFFER, 0, this.vertexArray), t.bindBuffer(t.ARRAY_BUFFER, this.uvBuffer), this.uvArray[2] = s.width / this.width, this.uvArray[5] = s.height / this.height, this.uvArray[6] = s.width / this.width, this.uvArray[7] = s.height / this.height, t.bufferSubData(t.ARRAY_BUFFER, 0, this.uvArray);
                    var a = n,
                        h = this.texturePool.pop();
                    h || (h = new e.FilterTexture(this.gl, this.width, this.height)), h.resize(this.width, this.height), t.bindFramebuffer(t.FRAMEBUFFER, h.frameBuffer), t.clear(t.COLOR_BUFFER_BIT), t.disable(t.BLEND);
                    for (var l = 0; l < i.filterPasses.length - 1; l++) {
                        var d = i.filterPasses[l];
                        t.bindFramebuffer(t.FRAMEBUFFER, h.frameBuffer), t.activeTexture(t.TEXTURE0), t.bindTexture(t.TEXTURE_2D, a.texture), this.applyFilterPass(d, s, s.width, s.height);
                        var c = a;
                        a = h, h = c
                    }
                    t.enable(t.BLEND), n = a, this.texturePool.push(h)
                }
                var u = i.filterPasses[i.filterPasses.length - 1];
                this.offsetX -= s.x, this.offsetY -= s.y;
                var p = this.width,
                    f = this.height,
                    y = 0,
                    x = 0,
                    m = this.buffer;
                if (0 === this.filterStack.length) t.colorMask(!0, !0, !0, !0);
                else {
                    var g = this.filterStack[this.filterStack.length - 1];
                    s = g._filterArea, p = s.width, f = s.height, y = s.x, x = s.y, m = g._glFilterTexture.frameBuffer
                }
                r.x = p / 2, r.y = -f / 2, o.x = y, o.y = x, s = i._filterArea;
                var v = s.x - y,
                    b = s.y - x;
                t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer), this.vertexArray[0] = v, this.vertexArray[1] = b + s.height, this.vertexArray[2] = v + s.width, this.vertexArray[3] = b + s.height, this.vertexArray[4] = v, this.vertexArray[5] = b, this.vertexArray[6] = v + s.width,
                    this.vertexArray[7] = b, t.bufferSubData(t.ARRAY_BUFFER, 0, this.vertexArray), t.bindBuffer(t.ARRAY_BUFFER, this.uvBuffer), this.uvArray[2] = s.width / this.width, this.uvArray[5] = s.height / this.height, this.uvArray[6] = s.width / this.width, this.uvArray[7] = s.height / this.height, t.bufferSubData(t.ARRAY_BUFFER, 0, this.uvArray), t.viewport(0, 0, p * this.renderSession.resolution, f * this.renderSession.resolution), t.bindFramebuffer(t.FRAMEBUFFER, m), t.activeTexture(t.TEXTURE0), t.bindTexture(t.TEXTURE_2D, n.texture), this.applyFilterPass(u, s, p, f), this.texturePool.push(n), i._glFilterTexture = null
            }, e.WebGLFilterManager.prototype.applyFilterPass = function(t, i, s, n) {
                var r = this.gl,
                    o = t.shaders[r.id];
                o || (o = new e.PixiShader(r), o.fragmentSrc = t.fragmentSrc, o.uniforms = t.uniforms, o.init(), t.shaders[r.id] = o), this.renderSession.shaderManager.setShader(o), r.uniform2f(o.projectionVector, s / 2, -n / 2), r.uniform2f(o.offsetVector, 0, 0), t.uniforms.dimensions && (t.uniforms.dimensions.value[0] = this.width, t.uniforms.dimensions.value[1] = this.height, t.uniforms.dimensions.value[2] = this.vertexArray[0], t.uniforms.dimensions.value[3] = this.vertexArray[5]), o.syncUniforms(), r.bindBuffer(r.ARRAY_BUFFER, this.vertexBuffer), r.vertexAttribPointer(o.aVertexPosition, 2, r.FLOAT, !1, 0, 0), r.bindBuffer(r.ARRAY_BUFFER, this.uvBuffer), r.vertexAttribPointer(o.aTextureCoord, 2, r.FLOAT, !1, 0, 0), r.bindBuffer(r.ARRAY_BUFFER, this.colorBuffer), r.vertexAttribPointer(o.colorAttribute, 2, r.FLOAT, !1, 0, 0), r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, this.indexBuffer), r.drawElements(r.TRIANGLES, 6, r.UNSIGNED_SHORT, 0), this.renderSession.drawCount++
            }, e.WebGLFilterManager.prototype.initShaderBuffers = function() {
                var t = this.gl;
                this.vertexBuffer = t.createBuffer(), this.uvBuffer = t.createBuffer(), this.colorBuffer = t.createBuffer(), this.indexBuffer = t.createBuffer(), this.vertexArray = new e.Float32Array([0, 0, 1, 0, 0, 1, 1, 1]), t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer), t.bufferData(t.ARRAY_BUFFER, this.vertexArray, t.STATIC_DRAW), this.uvArray = new e.Float32Array([0, 0, 1, 0, 0, 1, 1, 1]), t.bindBuffer(t.ARRAY_BUFFER, this.uvBuffer), t.bufferData(t.ARRAY_BUFFER, this.uvArray, t.STATIC_DRAW), this.colorArray = new e.Float32Array([1, 16777215, 1, 16777215, 1, 16777215, 1, 16777215]), t.bindBuffer(t.ARRAY_BUFFER, this.colorBuffer), t.bufferData(t.ARRAY_BUFFER, this.colorArray, t.STATIC_DRAW), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer), t.bufferData(t.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 1, 3, 2]), t.STATIC_DRAW)
            }, e.WebGLFilterManager.prototype.destroy = function() {
                var t = this.gl;
                this.filterStack = null, this.offsetX = 0, this.offsetY = 0;
                for (var e = 0; e < this.texturePool.length; e++) this.texturePool[e].destroy();
                this.texturePool = null, t.deleteBuffer(this.vertexBuffer), t.deleteBuffer(this.uvBuffer), t.deleteBuffer(this.colorBuffer), t.deleteBuffer(this.indexBuffer)
            }, e.FilterTexture = function(t, i, s, n) {
                this.gl = t, this.frameBuffer = t.createFramebuffer(), this.texture = t.createTexture(), n = n || e.scaleModes.DEFAULT, t.bindTexture(t.TEXTURE_2D, this.texture), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, n === e.scaleModes.LINEAR ? t.LINEAR : t.NEAREST), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, n === e.scaleModes.LINEAR ? t.LINEAR : t.NEAREST), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.bindFramebuffer(t.FRAMEBUFFER, this.frameBuffer), t.bindFramebuffer(t.FRAMEBUFFER, this.frameBuffer), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, this.texture, 0), this.renderBuffer = t.createRenderbuffer(), t.bindRenderbuffer(t.RENDERBUFFER, this.renderBuffer), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.RENDERBUFFER, this.renderBuffer), this.resize(i, s)
            }, e.FilterTexture.prototype.constructor = e.FilterTexture, e.FilterTexture.prototype.clear = function() {
                var t = this.gl;
                t.clearColor(0, 0, 0, 0), t.clear(t.COLOR_BUFFER_BIT)
            }, e.FilterTexture.prototype.resize = function(t, e) {
                if (this.width !== t || this.height !== e) {
                    this.width = t, this.height = e;
                    var i = this.gl;
                    i.bindTexture(i.TEXTURE_2D, this.texture), i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, t, e, 0, i.RGBA, i.UNSIGNED_BYTE, null), i.bindRenderbuffer(i.RENDERBUFFER, this.renderBuffer), i.renderbufferStorage(i.RENDERBUFFER, i.DEPTH_STENCIL, t, e)
                }
            }, e.FilterTexture.prototype.destroy = function() {
                var t = this.gl;
                t.deleteFramebuffer(this.frameBuffer), t.deleteTexture(this.texture), this.frameBuffer = null, this.texture = null
            }, e.CanvasBuffer = function(t, e) {
                this.width = t, this.height = e, this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.canvas.width = t, this.canvas.height = e
            }, e.CanvasBuffer.prototype.constructor = e.CanvasBuffer, e.CanvasBuffer.prototype.clear = function() {
                this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.clearRect(0, 0, this.width, this.height)
            }, e.CanvasBuffer.prototype.resize = function(t, e) {
                this.width = this.canvas.width = t, this.height = this.canvas.height = e
            }, e.CanvasMaskManager = function() {}, e.CanvasMaskManager.prototype.constructor = e.CanvasMaskManager, e.CanvasMaskManager.prototype.pushMask = function(t, i) {
                var s = i.context;
                s.save();
                var n = t.alpha,
                    r = t.worldTransform,
                    o = i.resolution;
                s.setTransform(r.a * o, r.b * o, r.c * o, r.d * o, r.tx * o, r.ty * o), e.CanvasGraphics.renderGraphicsMask(t, s), s.clip(), t.worldAlpha = n
            }, e.CanvasMaskManager.prototype.popMask = function(t) {
                t.context.restore()
            }, e.CanvasTinter = function() {}, e.CanvasTinter.getTintedTexture = function(t, i) {
                var s = t.texture;
                i = e.CanvasTinter.roundColor(i);
                var n = "#" + ("00000" + (0 | i).toString(16)).substr(-6);
                if (s.tintCache = s.tintCache || {}, s.tintCache[n]) return s.tintCache[n];
                var r = e.CanvasTinter.canvas || document.createElement("canvas");
                if (e.CanvasTinter.tintMethod(s, i, r), e.CanvasTinter.convertTintToImage) {
                    var o = new Image;
                    o.src = r.toDataURL(), s.tintCache[n] = o
                } else s.tintCache[n] = r, e.CanvasTinter.canvas = null;
                return r
            }, e.CanvasTinter.tintWithMultiply = function(t, e, i) {
                var s = i.getContext("2d"),
                    n = t.crop;
                i.width = n.width, i.height = n.height, s.fillStyle = "#" + ("00000" + (0 | e).toString(16)).substr(-6), s.fillRect(0, 0, n.width, n.height), s.globalCompositeOperation = "multiply", s.drawImage(t.baseTexture.source, n.x, n.y, n.width, n.height, 0, 0, n.width, n.height), s.globalCompositeOperation = "destination-atop", s.drawImage(t.baseTexture.source, n.x, n.y, n.width, n.height, 0, 0, n.width, n.height)
            }, e.CanvasTinter.tintWithOverlay = function(t, e, i) {
                var s = i.getContext("2d"),
                    n = t.crop;
                i.width = n.width, i.height = n.height, s.globalCompositeOperation = "copy", s.fillStyle = "#" + ("00000" + (0 | e).toString(16)).substr(-6), s.fillRect(0, 0, n.width, n.height), s.globalCompositeOperation = "destination-atop", s.drawImage(t.baseTexture.source, n.x, n.y, n.width, n.height, 0, 0, n.width, n.height)
            }, e.CanvasTinter.tintWithPerPixel = function(t, i, s) {
                var n = s.getContext("2d"),
                    r = t.crop;
                s.width = r.width, s.height = r.height, n.globalCompositeOperation = "copy", n.drawImage(t.baseTexture.source, r.x, r.y, r.width, r.height, 0, 0, r.width, r.height);
                for (var o = e.hex2rgb(i), a = o[0], h = o[1], l = o[2], d = n.getImageData(0, 0, r.width, r.height), c = d.data, u = 0; u < c.length; u += 4) c[u + 0] *= a, c[u + 1] *= h, c[u + 2] *= l;
                n.putImageData(d, 0, 0)
            }, e.CanvasTinter.roundColor = function(t) {
                var i = e.CanvasTinter.cacheStepsPerColorChannel,
                    s = e.hex2rgb(t);
                return s[0] = Math.min(255, s[0] / i * i), s[1] = Math.min(255, s[1] / i * i), s[2] = Math.min(255, s[2] / i * i), e.rgb2hex(s)
            }, e.CanvasTinter.cacheStepsPerColorChannel = 8, e.CanvasTinter.convertTintToImage = !1, e.CanvasTinter.canUseMultiply = e.canUseNewCanvasBlendModes(), e.CanvasTinter.tintMethod = e.CanvasTinter.canUseMultiply ? e.CanvasTinter.tintWithMultiply : e.CanvasTinter.tintWithPerPixel, e.CanvasRenderer = function(t, i, s) {
                if (s)
                    for (var n in e.defaultRenderOptions) "undefined" == typeof s[n] && (s[n] = e.defaultRenderOptions[n]);
                else s = e.defaultRenderOptions;
                e.defaultRenderer || (e.sayHello("Canvas"), e.defaultRenderer = this), this.type = e.CANVAS_RENDERER, this.resolution = s.resolution, this.clearBeforeRender = s.clearBeforeRender, this.transparent = s.transparent, this.autoResize = s.autoResize || !1, this.width = t || 800, this.height = i || 600, this.width *= this.resolution, this.height *= this.resolution, this.view = s.view || document.createElement("canvas"), this.context = this.view.getContext("2d", {
                    alpha: this.transparent
                }), this.refresh = !0, this.view.width = this.width * this.resolution, this.view.height = this.height * this.resolution, this.count = 0, this.maskManager = new e.CanvasMaskManager, this.renderSession = {
                    context: this.context,
                    maskManager: this.maskManager,
                    scaleMode: null,
                    smoothProperty: null,
                    roundPixels: !1
                }, this.mapBlendModes(), this.resize(t, i), "imageSmoothingEnabled" in this.context ? this.renderSession.smoothProperty = "imageSmoothingEnabled" : "webkitImageSmoothingEnabled" in this.context ? this.renderSession.smoothProperty = "webkitImageSmoothingEnabled" : "mozImageSmoothingEnabled" in this.context ? this.renderSession.smoothProperty = "mozImageSmoothingEnabled" : "oImageSmoothingEnabled" in this.context ? this.renderSession.smoothProperty = "oImageSmoothingEnabled" : "msImageSmoothingEnabled" in this.context && (this.renderSession.smoothProperty = "msImageSmoothingEnabled")
            }, e.CanvasRenderer.prototype.constructor = e.CanvasRenderer, e.CanvasRenderer.prototype.render = function(t) {
                t.updateTransform(), this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.globalAlpha = 1, this.renderSession.currentBlendMode = e.blendModes.NORMAL, this.context.globalCompositeOperation = e.blendModesCanvas[e.blendModes.NORMAL], navigator.isCocoonJS && this.view.screencanvas && (this.context.fillStyle = "black", this.context.clear()), this.clearBeforeRender && (this.transparent ? this.context.clearRect(0, 0, this.width, this.height) : (this.context.fillStyle = t.backgroundColorString, this.context.fillRect(0, 0, this.width, this.height))), this.renderDisplayObject(t), t.interactive && (t._interactiveEventsAdded || (t._interactiveEventsAdded = !0, t.interactionManager.setTarget(this)))
            }, e.CanvasRenderer.prototype.destroy = function(t) {
                "undefined" == typeof t && (t = !0), t && this.view.parent && this.view.parent.removeChild(this.view), this.view = null, this.context = null, this.maskManager = null, this.renderSession = null
            }, e.CanvasRenderer.prototype.resize = function(t, e) {
                this.width = t * this.resolution, this.height = e * this.resolution, this.view.width = this.width, this.view.height = this.height, this.autoResize && (this.view.style.width = this.width / this.resolution + "px", this.view.style.height = this.height / this.resolution + "px")
            }, e.CanvasRenderer.prototype.renderDisplayObject = function(t, e) {
                this.renderSession.context = e || this.context, this.renderSession.resolution = this.resolution, t._renderCanvas(this.renderSession)
            }, e.CanvasRenderer.prototype.mapBlendModes = function() {
                e.blendModesCanvas || (e.blendModesCanvas = [], e.canUseNewCanvasBlendModes() ? (e.blendModesCanvas[e.blendModes.NORMAL] = "source-over", e.blendModesCanvas[e.blendModes.ADD] = "lighter", e.blendModesCanvas[e.blendModes.MULTIPLY] = "multiply", e.blendModesCanvas[e.blendModes.SCREEN] = "screen", e.blendModesCanvas[e.blendModes.OVERLAY] = "overlay", e.blendModesCanvas[e.blendModes.DARKEN] = "darken", e.blendModesCanvas[e.blendModes.LIGHTEN] = "lighten", e.blendModesCanvas[e.blendModes.COLOR_DODGE] = "color-dodge", e.blendModesCanvas[e.blendModes.COLOR_BURN] = "color-burn", e.blendModesCanvas[e.blendModes.HARD_LIGHT] = "hard-light", e.blendModesCanvas[e.blendModes.SOFT_LIGHT] = "soft-light", e.blendModesCanvas[e.blendModes.DIFFERENCE] = "difference", e.blendModesCanvas[e.blendModes.EXCLUSION] = "exclusion", e.blendModesCanvas[e.blendModes.HUE] = "hue", e.blendModesCanvas[e.blendModes.SATURATION] = "saturation", e.blendModesCanvas[e.blendModes.COLOR] = "color", e.blendModesCanvas[e.blendModes.LUMINOSITY] = "luminosity") : (e.blendModesCanvas[e.blendModes.NORMAL] = "source-over", e.blendModesCanvas[e.blendModes.ADD] = "lighter", e.blendModesCanvas[e.blendModes.MULTIPLY] = "source-over", e.blendModesCanvas[e.blendModes.SCREEN] = "source-over", e.blendModesCanvas[e.blendModes.OVERLAY] = "source-over", e.blendModesCanvas[e.blendModes.DARKEN] = "source-over", e.blendModesCanvas[e.blendModes.LIGHTEN] = "source-over", e.blendModesCanvas[e.blendModes.COLOR_DODGE] = "source-over", e.blendModesCanvas[e.blendModes.COLOR_BURN] = "source-over", e.blendModesCanvas[e.blendModes.HARD_LIGHT] = "source-over", e.blendModesCanvas[e.blendModes.SOFT_LIGHT] = "source-over", e.blendModesCanvas[e.blendModes.DIFFERENCE] = "source-over", e.blendModesCanvas[e.blendModes.EXCLUSION] = "source-over", e.blendModesCanvas[e.blendModes.HUE] = "source-over", e.blendModesCanvas[e.blendModes.SATURATION] = "source-over", e.blendModesCanvas[e.blendModes.COLOR] = "source-over", e.blendModesCanvas[e.blendModes.LUMINOSITY] = "source-over"))
            }, e.CanvasGraphics = function() {}, e.CanvasGraphics.renderGraphics = function(t, i) {
                var s = t.worldAlpha;
                t.dirty && (this.updateGraphicsTint(t), t.dirty = !1);
                for (var n = 0; n < t.graphicsData.length; n++) {
                    var r = t.graphicsData[n],
                        o = r.shape,
                        a = r._fillTint,
                        h = r._lineTint;
                    if (i.lineWidth = r.lineWidth, r.type === e.Graphics.POLY) {
                        i.beginPath();
                        var l = o.points;
                        i.moveTo(l[0], l[1]);
                        for (var d = 1; d < l.length / 2; d++) i.lineTo(l[2 * d], l[2 * d + 1]);
                        o.closed && i.lineTo(l[0], l[1]), l[0] === l[l.length - 2] && l[1] === l[l.length - 1] && i.closePath(), r.fill && (i.globalAlpha = r.fillAlpha * s, i.fillStyle = "#" + ("00000" + (0 | a).toString(16)).substr(-6), i.fill()), r.lineWidth && (i.globalAlpha = r.lineAlpha * s, i.strokeStyle = "#" + ("00000" + (0 | h).toString(16)).substr(-6), i.stroke())
                    } else if (r.type === e.Graphics.RECT)(r.fillColor || 0 === r.fillColor) && (i.globalAlpha = r.fillAlpha * s, i.fillStyle = "#" + ("00000" + (0 | a).toString(16)).substr(-6), i.fillRect(o.x, o.y, o.width, o.height)), r.lineWidth && (i.globalAlpha = r.lineAlpha * s, i.strokeStyle = "#" + ("00000" + (0 | h).toString(16)).substr(-6), i.strokeRect(o.x, o.y, o.width, o.height));
                    else if (r.type === e.Graphics.CIRC) i.beginPath(), i.arc(o.x, o.y, o.radius, 0, 2 * Math.PI), i.closePath(), r.fill && (i.globalAlpha = r.fillAlpha * s, i.fillStyle = "#" + ("00000" + (0 | a).toString(16)).substr(-6), i.fill()), r.lineWidth && (i.globalAlpha = r.lineAlpha * s, i.strokeStyle = "#" + ("00000" + (0 | h).toString(16)).substr(-6), i.stroke());
                    else if (r.type === e.Graphics.ELIP) {
                        var c = 2 * o.width,
                            u = 2 * o.height,
                            p = o.x - c / 2,
                            f = o.y - u / 2;
                        i.beginPath();
                        var y = .5522848,
                            x = c / 2 * y,
                            m = u / 2 * y,
                            g = p + c,
                            v = f + u,
                            b = p + c / 2,
                            _ = f + u / 2;
                        i.moveTo(p, _), i.bezierCurveTo(p, _ - m, b - x, f, b, f), i.bezierCurveTo(b + x, f, g, _ - m, g, _), i.bezierCurveTo(g, _ + m, b + x, v, b, v), i.bezierCurveTo(b - x, v, p, _ + m, p, _), i.closePath(), r.fill && (i.globalAlpha = r.fillAlpha * s, i.fillStyle = "#" + ("00000" + (0 | a).toString(16)).substr(-6), i.fill()), r.lineWidth && (i.globalAlpha = r.lineAlpha * s, i.strokeStyle = "#" + ("00000" + (0 | h).toString(16)).substr(-6), i.stroke())
                    } else if (r.type === e.Graphics.RREC) {
                        var S = o.x,
                            w = o.y,
                            T = o.width,
                            C = o.height,
                            E = o.radius,
                            A = Math.min(T, C) / 2 | 0;
                        E = E > A ? A : E, i.beginPath(), i.moveTo(S, w + E), i.lineTo(S, w + C - E), i.quadraticCurveTo(S, w + C, S + E, w + C), i.lineTo(S + T - E, w + C), i.quadraticCurveTo(S + T, w + C, S + T, w + C - E), i.lineTo(S + T, w + E), i.quadraticCurveTo(S + T, w, S + T - E, w), i.lineTo(S + E, w), i.quadraticCurveTo(S, w, S, w + E), i.closePath(), (r.fillColor || 0 === r.fillColor) && (i.globalAlpha = r.fillAlpha * s, i.fillStyle = "#" + ("00000" + (0 | a).toString(16)).substr(-6), i.fill()), r.lineWidth && (i.globalAlpha = r.lineAlpha * s, i.strokeStyle = "#" + ("00000" + (0 | h).toString(16)).substr(-6), i.stroke())
                    }
                }
            }, e.CanvasGraphics.renderGraphicsMask = function(t, i) {
                var s = t.graphicsData.length;
                if (0 !== s) {
                    s > 1 && (s = 1, window.console.log("Pixi.js warning: masks in canvas can only mask using the first path in the graphics object"));
                    for (var n = 0; 1 > n; n++) {
                        var r = t.graphicsData[n],
                            o = r.shape;
                        if (r.type === e.Graphics.POLY) {
                            i.beginPath();
                            var a = o.points;
                            i.moveTo(a[0], a[1]);
                            for (var h = 1; h < a.length / 2; h++) i.lineTo(a[2 * h], a[2 * h + 1]);
                            a[0] === a[a.length - 2] && a[1] === a[a.length - 1] && i.closePath()
                        } else if (r.type === e.Graphics.RECT) i.beginPath(), i.rect(o.x, o.y, o.width, o.height), i.closePath();
                        else if (r.type === e.Graphics.CIRC) i.beginPath(), i.arc(o.x, o.y, o.radius, 0, 2 * Math.PI), i.closePath();
                        else if (r.type === e.Graphics.ELIP) {
                            var l = 2 * o.width,
                                d = 2 * o.height,
                                c = o.x - l / 2,
                                u = o.y - d / 2;
                            i.beginPath();
                            var p = .5522848,
                                f = l / 2 * p,
                                y = d / 2 * p,
                                x = c + l,
                                m = u + d,
                                g = c + l / 2,
                                v = u + d / 2;
                            i.moveTo(c, v), i.bezierCurveTo(c, v - y, g - f, u, g, u), i.bezierCurveTo(g + f, u, x, v - y, x, v), i.bezierCurveTo(x, v + y, g + f, m, g, m), i.bezierCurveTo(g - f, m, c, v + y, c, v), i.closePath()
                        } else if (r.type === e.Graphics.RREC) {
                            var b = o.x,
                                _ = o.y,
                                S = o.width,
                                w = o.height,
                                T = o.radius,
                                C = Math.min(S, w) / 2 | 0;
                            T = T > C ? C : T, i.beginPath(), i.moveTo(b, _ + T), i.lineTo(b, _ + w - T), i.quadraticCurveTo(b, _ + w, b + T, _ + w), i.lineTo(b + S - T, _ + w), i.quadraticCurveTo(b + S, _ + w, b + S, _ + w - T), i.lineTo(b + S, _ + T), i.quadraticCurveTo(b + S, _, b + S - T, _), i.lineTo(b + T, _), i.quadraticCurveTo(b, _, b, _ + T), i.closePath()
                        }
                    }
                }
            }, e.CanvasGraphics.updateGraphicsTint = function(t) {
                if (16777215 !== t.tint)
                    for (var e = (t.tint >> 16 & 255) / 255, i = (t.tint >> 8 & 255) / 255, s = (255 & t.tint) / 255, n = 0; n < t.graphicsData.length; n++) {
                        var r = t.graphicsData[n],
                            o = 0 | r.fillColor,
                            a = 0 | r.lineColor;
                        r._fillTint = ((o >> 16 & 255) / 255 * e * 255 << 16) + ((o >> 8 & 255) / 255 * i * 255 << 8) + (255 & o) / 255 * s * 255, r._lineTint = ((a >> 16 & 255) / 255 * e * 255 << 16) + ((a >> 8 & 255) / 255 * i * 255 << 8) + (255 & a) / 255 * s * 255
                    }
            }, e.Graphics = function() {
                e.DisplayObjectContainer.call(this), this.renderable = !0, this.fillAlpha = 1, this.lineWidth = 0, this.lineColor = 0, this.graphicsData = [], this.tint = 16777215, this.blendMode = e.blendModes.NORMAL, this.currentPath = null, this._webGL = [], this.isMask = !1, this.boundsPadding = 0, this._localBounds = new e.Rectangle(0, 0, 1, 1), this.dirty = !0, this.webGLDirty = !1, this.cachedSpriteDirty = !1
            }, e.Graphics.prototype = Object.create(e.DisplayObjectContainer.prototype), e.Graphics.prototype.constructor = e.Graphics, Object.defineProperty(e.Graphics.prototype, "cacheAsBitmap", {
                get: function() {
                    return this._cacheAsBitmap
                },
                set: function(t) {
                    this._cacheAsBitmap = t, this._cacheAsBitmap ? this._generateCachedSprite() : (this.destroyCachedSprite(), this.dirty = !0)
                }
            }), e.Graphics.prototype.endGradient = function() {
                this.gradientColors = null
            }, e.Graphics.prototype.beginGradient = function(t, e, i, s) {
                this.gradientColors = [];
                for (var n in t) {
                    var r = t[n];
                    this.gradientColors.push("rgba(" + (r >> 16 & 255) + "," + (r >> 8 & 255) + "," + (255 & r) + "," + i[n] + ")")
                }
                this.gradientRatios = e, this.gradientRect = s
            }, e.Graphics.prototype.lineStyle = function(t, i, s) {
                if (this.lineWidth = t || 0, this.lineColor = i || 0, this.lineAlpha = arguments.length < 3 ? 1 : s, this.currentPath) {
                    if (this.currentPath.shape.points.length) return this.drawShape(new e.Polygon(this.currentPath.shape.points.slice(-2))), this;
                    this.currentPath.lineWidth = this.lineWidth, this.currentPath.lineColor = this.lineColor, this.currentPath.lineAlpha = this.lineAlpha
                }
                return this
            }, e.Graphics.prototype.moveTo = function(t, i) {
                return this.drawShape(new e.Polygon([t, i])), this
            }, e.Graphics.prototype.lineTo = function(t, e) {
                return this.currentPath.shape.points.push(t, e), this.dirty = !0, this
            }, e.Graphics.prototype.quadraticCurveTo = function(t, e, i, s) {
                this.currentPath ? 0 === this.currentPath.shape.points.length && (this.currentPath.shape.points = [0, 0]) : this.moveTo(0, 0);
                var n, r, o = 20,
                    a = this.currentPath.shape.points;
                0 === a.length && this.moveTo(0, 0);
                for (var h = a[a.length - 2], l = a[a.length - 1], d = 0, c = 1; o >= c; c++) d = c / o, n = h + (t - h) * d, r = l + (e - l) * d, a.push(n + (t + (i - t) * d - n) * d, r + (e + (s - e) * d - r) * d);
                return this.dirty = !0, this
            }, e.Graphics.prototype.bezierCurveTo = function(t, e, i, s, n, r) {
                this.currentPath ? 0 === this.currentPath.shape.points.length && (this.currentPath.shape.points = [0, 0]) : this.moveTo(0, 0);
                for (var o, a, h, l, d, c = 20, u = this.currentPath.shape.points, p = u[u.length - 2], f = u[u.length - 1], y = 0, x = 1; c >= x; x++) y = x / c, o = 1 - y, a = o * o, h = a * o, l = y * y, d = l * y, u.push(h * p + 3 * a * y * t + 3 * o * l * i + d * n, h * f + 3 * a * y * e + 3 * o * l * s + d * r);
                return this.dirty = !0, this
            }, e.Graphics.prototype.arcTo = function(t, e, i, s, n) {
                this.currentPath ? 0 === this.currentPath.shape.points.length && this.currentPath.shape.points.push(t, e) : this.moveTo(t, e);
                var r = this.currentPath.shape.points,
                    o = r[r.length - 2],
                    a = r[r.length - 1],
                    h = a - e,
                    l = o - t,
                    d = s - e,
                    c = i - t,
                    u = Math.abs(h * c - l * d);
                if (1e-8 > u || 0 === n)(r[r.length - 2] !== t || r[r.length - 1] !== e) && r.push(t, e);
                else {
                    var p = h * h + l * l,
                        f = d * d + c * c,
                        y = h * d + l * c,
                        x = n * Math.sqrt(p) / u,
                        m = n * Math.sqrt(f) / u,
                        g = x * y / p,
                        v = m * y / f,
                        b = x * c + m * l,
                        _ = x * d + m * h,
                        S = l * (m + g),
                        w = h * (m + g),
                        T = c * (x + v),
                        C = d * (x + v),
                        E = Math.atan2(w - _, S - b),
                        A = Math.atan2(C - _, T - b);
                    this.arc(b + t, _ + e, n, E, A, l * d > c * h)
                }
                return this.dirty = !0, this
            }, e.Graphics.prototype.arc = function(t, e, i, s, n, r) {
                var o, a = t + Math.cos(s) * i,
                    h = e + Math.sin(s) * i;
                if (this.currentPath ? (o = this.currentPath.shape.points, 0 === o.length ? o.push(a, h) : (o[o.length - 2] !== a || o[o.length - 1] !== h) && o.push(a, h)) : (this.moveTo(a, h), o = this.currentPath.shape.points), s === n) return this;
                !r && s >= n ? n += 2 * Math.PI : r && n >= s && (s += 2 * Math.PI);
                var l = r ? -1 * (s - n) : n - s,
                    d = Math.abs(l) / (2 * Math.PI) * 40;
                if (0 === l) return this;
                for (var c = l / (2 * d), u = 2 * c, p = Math.cos(c), f = Math.sin(c), y = d - 1, x = y % 1 / y, m = 0; y >= m; m++) {
                    var g = m + x * m,
                        v = c + s + u * g,
                        b = Math.cos(v),
                        _ = -Math.sin(v);
                    o.push((p * b + f * _) * i + t, (p * -_ + f * b) * i + e)
                }
                return this.dirty = !0, this
            }, e.Graphics.prototype.beginFill = function(t, e) {
                return this.filling = !0, this.fillColor = t || 0, this.fillAlpha = void 0 === e ? 1 : e, this.currentPath && this.currentPath.shape.points.length <= 2 && (this.currentPath.fill = this.filling, this.currentPath.fillColor = this.fillColor, this.currentPath.fillAlpha = this.fillAlpha), this
            }, e.Graphics.prototype.endFill = function() {
                return this.filling = !1, this.fillColor = null, this.fillAlpha = 1, this
            }, e.Graphics.prototype.drawRect = function(t, i, s, n) {
                return this.drawShape(new e.Rectangle(t, i, s, n)), this
            }, e.Graphics.prototype.drawRoundedRect = function(t, i, s, n, r) {
                return this.drawShape(new e.RoundedRectangle(t, i, s, n, r)), this
            }, e.Graphics.prototype.drawCircle = function(t, i, s) {
                return this.drawShape(new e.Circle(t, i, s)), this
            }, e.Graphics.prototype.drawEllipse = function(t, i, s, n) {
                return this.drawShape(new e.Ellipse(t, i, s, n)), this
            }, e.Graphics.prototype.drawPolygon = function(t) {
                return t instanceof Array || (t = Array.prototype.slice.call(arguments)), this.drawShape(new e.Polygon(t)), this
            }, e.Graphics.prototype.clear = function() {
                return this.lineWidth = 0, this.filling = !1, this.dirty = !0, this.clearDirty = !0, this.graphicsData = [], this
            }, e.Graphics.prototype.generateTexture = function(t, i) {
                t = t || 1;
                var s = this.getBounds(),
                    n = new e.CanvasBuffer(s.width * t, s.height * t),
                    r = e.Texture.fromCanvas(n.canvas, i);
                return r.baseTexture.resolution = t, n.context.scale(t, t), n.context.translate(-s.x, -s.y), e.CanvasGraphics.renderGraphics(this, n.context), r
            }, e.Graphics.prototype._renderWebGL = function(t) {
                if (this.visible !== !1 && 0 !== this.alpha && this.isMask !== !0) {
                    if (this._cacheAsBitmap) return (this.dirty || this.cachedSpriteDirty) && (this._generateCachedSprite(), this.updateCachedSpriteTexture(), this.cachedSpriteDirty = !1, this.dirty = !1), this._cachedSprite.worldAlpha = this.worldAlpha, void e.Sprite.prototype._renderWebGL.call(this._cachedSprite, t);
                    if (t.spriteBatch.stop(), t.blendModeManager.setBlendMode(this.blendMode), this._mask && t.maskManager.pushMask(this._mask, t), this._filters && t.filterManager.pushFilter(this._filterBlock), this.blendMode !== t.spriteBatch.currentBlendMode) {
                        t.spriteBatch.currentBlendMode = this.blendMode;
                        var i = e.blendModesWebGL[t.spriteBatch.currentBlendMode];
                        t.spriteBatch.gl.blendFunc(i[0], i[1])
                    }
                    if (this.webGLDirty && (this.dirty = !0, this.webGLDirty = !1), e.WebGLGraphics.renderGraphics(this, t), this.children.length) {
                        t.spriteBatch.start();
                        for (var s = 0, n = this.children.length; n > s; s++) this.children[s]._renderWebGL(t);
                        t.spriteBatch.stop()
                    }
                    this._filters && t.filterManager.popFilter(), this._mask && t.maskManager.popMask(this.mask, t), t.drawCount++, t.spriteBatch.start()
                }
            }, e.Graphics.prototype._renderCanvas = function(t) {
                if (this.visible !== !1 && 0 !== this.alpha && this.isMask !== !0) {
                    if (this._cacheAsBitmap) return (this.dirty || this.cachedSpriteDirty) && (this._generateCachedSprite(), this.updateCachedSpriteTexture(), this.cachedSpriteDirty = !1, this.dirty = !1), this._cachedSprite.alpha = this.alpha, void e.Sprite.prototype._renderCanvas.call(this._cachedSprite, t);
                    var i = t.context,
                        s = this.worldTransform;
                    this.blendMode !== t.currentBlendMode && (t.currentBlendMode = this.blendMode, i.globalCompositeOperation = e.blendModesCanvas[t.currentBlendMode]), this._mask && t.maskManager.pushMask(this._mask, t);
                    var n = t.resolution;
                    i.setTransform(s.a * n, s.b * n, s.c * n, s.d * n, s.tx * n, s.ty * n), e.CanvasGraphics.renderGraphics(this, i);
                    for (var r = 0, o = this.children.length; o > r; r++) this.children[r]._renderCanvas(t);
                    this._mask && t.maskManager.popMask(t)
                }
            }, e.Graphics.prototype.getBounds = function(t) {
                if (this.isMask) return e.EmptyRectangle;
                this.dirty && (this.updateLocalBounds(), this.webGLDirty = !0, this.cachedSpriteDirty = !0, this.dirty = !1);
                var i = this._localBounds,
                    s = i.x,
                    n = i.width + i.x,
                    r = i.y,
                    o = i.height + i.y,
                    a = t || this.worldTransform,
                    h = a.a,
                    l = a.b,
                    d = a.c,
                    c = a.d,
                    u = a.tx,
                    p = a.ty,
                    f = h * n + d * o + u,
                    y = c * o + l * n + p,
                    x = h * s + d * o + u,
                    m = c * o + l * s + p,
                    g = h * s + d * r + u,
                    v = c * r + l * s + p,
                    b = h * n + d * r + u,
                    _ = c * r + l * n + p,
                    S = f,
                    w = y,
                    T = f,
                    C = y;
                return T = T > x ? x : T, T = T > g ? g : T, T = T > b ? b : T, C = C > m ? m : C, C = C > v ? v : C, C = C > _ ? _ : C, S = x > S ? x : S, S = g > S ? g : S, S = b > S ? b : S, w = m > w ? m : w, w = v > w ? v : w, w = _ > w ? _ : w, this._bounds.x = T, this._bounds.width = S - T, this._bounds.y = C, this._bounds.height = w - C, this._bounds
            }, e.Graphics.prototype.updateLocalBounds = function() {
                var t = 1 / 0,
                    i = -(1 / 0),
                    s = 1 / 0,
                    n = -(1 / 0);
                if (this.graphicsData.length)
                    for (var r, o, a, h, l, d, c = 0; c < this.graphicsData.length; c++) {
                        var u = this.graphicsData[c],
                            p = u.type,
                            f = u.lineWidth;
                        if (r = u.shape, p === e.Graphics.RECT || p === e.Graphics.RREC) a = r.x - f / 2, h = r.y - f / 2, l = r.width + f, d = r.height + f, t = t > a ? a : t, i = a + l > i ? a + l : i, s = s > h ? h : s, n = h + d > n ? h + d : n;
                        else if (p === e.Graphics.CIRC) a = r.x, h = r.y, l = r.radius + f / 2, d = r.radius + f / 2, t = t > a - l ? a - l : t, i = a + l > i ? a + l : i, s = s > h - d ? h - d : s, n = h + d > n ? h + d : n;
                        else if (p === e.Graphics.ELIP) a = r.x, h = r.y, l = r.width + f / 2, d = r.height + f / 2, t = t > a - l ? a - l : t, i = a + l > i ? a + l : i, s = s > h - d ? h - d : s, n = h + d > n ? h + d : n;
                        else {
                            o = r.points;
                            for (var y = 0; y < o.length; y += 2) a = o[y], h = o[y + 1], t = t > a - f ? a - f : t, i = a + f > i ? a + f : i, s = s > h - f ? h - f : s, n = h + f > n ? h + f : n
                        }
                    } else t = 0, i = 0, s = 0, n = 0;
                var x = this.boundsPadding;
                this._localBounds.x = t - x, this._localBounds.width = i - t + 2 * x, this._localBounds.y = s - x, this._localBounds.height = n - s + 2 * x
            }, e.Graphics.prototype._generateCachedSprite = function() {
                var t = this.getLocalBounds();
                if (this._cachedSprite) this._cachedSprite.buffer.resize(t.width, t.height);
                else {
                    var i = new e.CanvasBuffer(t.width, t.height),
                        s = e.Texture.fromCanvas(i.canvas);
                    this._cachedSprite = new e.Sprite(s), this._cachedSprite.buffer = i, this._cachedSprite.worldTransform = this.worldTransform
                }
                this._cachedSprite.anchor.x = -(t.x / t.width), this._cachedSprite.anchor.y = -(t.y / t.height), this._cachedSprite.buffer.context.translate(-t.x, -t.y), this.worldAlpha = 1, e.CanvasGraphics.renderGraphics(this, this._cachedSprite.buffer.context), this._cachedSprite.alpha = this.alpha
            }, e.Graphics.prototype.updateCachedSpriteTexture = function() {
                var t = this._cachedSprite,
                    e = t.texture,
                    i = t.buffer.canvas;
                e.baseTexture.width = i.width, e.baseTexture.height = i.height, e.crop.width = e.frame.width = i.width, e.crop.height = e.frame.height = i.height, t._width = i.width, t._height = i.height, e.baseTexture.dirty()
            }, e.Graphics.prototype.destroyCachedSprite = function() {
                this._cachedSprite.texture.destroy(!0), this._cachedSprite = null
            }, e.Graphics.prototype.drawShape = function(t) {
                this.currentPath && this.currentPath.shape.points.length <= 2 && this.graphicsData.pop(), this.currentPath = null;
                var i = new e.GraphicsData(this.lineWidth, this.lineColor, this.lineAlpha, this.fillColor, this.fillAlpha, this.filling, t);
                return this.graphicsData.push(i), i.type === e.Graphics.POLY && (i.shape.closed = this.filling, this.currentPath = i), this.dirty = !0, i
            }, e.GraphicsData = function(t, e, i, s, n, r, o) {
                this.lineWidth = t, this.lineColor = e, this.lineAlpha = i, this._lineTint = e, this.fillColor = s, this.fillAlpha = n, this._fillTint = s, this.fill = r, this.shape = o, this.type = o.type
            }, e.Graphics.POLY = 0, e.Graphics.RECT = 1, e.Graphics.CIRC = 2, e.Graphics.ELIP = 3, e.Graphics.RREC = 4, e.Polygon.prototype.type = e.Graphics.POLY, e.Rectangle.prototype.type = e.Graphics.RECT, e.Circle.prototype.type = e.Graphics.CIRC, e.Ellipse.prototype.type = e.Graphics.ELIP, e.RoundedRectangle.prototype.type = e.Graphics.RREC, e.Strip = function(t) {
                e.DisplayObjectContainer.call(this), this.texture = t, this.uvs = new e.Float32Array([0, 1, 1, 1, 1, 0, 0, 1]), this.vertices = new e.Float32Array([0, 0, 100, 0, 100, 100, 0, 100]), this.colors = new e.Float32Array([1, 1, 1, 1]), this.indices = new e.Uint16Array([0, 1, 2, 3]), this.dirty = !0, this.blendMode = e.blendModes.NORMAL, this.canvasPadding = 0, this.drawMode = e.Strip.DrawModes.TRIANGLE_STRIP
            }, e.Strip.prototype = Object.create(e.DisplayObjectContainer.prototype), e.Strip.prototype.constructor = e.Strip, e.Strip.prototype._renderWebGL = function(t) {
                !this.visible || this.alpha <= 0 || (t.spriteBatch.stop(), this._vertexBuffer || this._initWebGL(t), t.shaderManager.setShader(t.shaderManager.stripShader), this._renderStrip(t), t.spriteBatch.start())
            }, e.Strip.prototype._initWebGL = function(t) {
                var e = t.gl;
                this._vertexBuffer = e.createBuffer(), this._indexBuffer = e.createBuffer(), this._uvBuffer = e.createBuffer(), this._colorBuffer = e.createBuffer(), e.bindBuffer(e.ARRAY_BUFFER, this._vertexBuffer), e.bufferData(e.ARRAY_BUFFER, this.vertices, e.DYNAMIC_DRAW), e.bindBuffer(e.ARRAY_BUFFER, this._uvBuffer), e.bufferData(e.ARRAY_BUFFER, this.uvs, e.STATIC_DRAW), e.bindBuffer(e.ARRAY_BUFFER, this._colorBuffer), e.bufferData(e.ARRAY_BUFFER, this.colors, e.STATIC_DRAW), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this._indexBuffer), e.bufferData(e.ELEMENT_ARRAY_BUFFER, this.indices, e.STATIC_DRAW)
            }, e.Strip.prototype._renderStrip = function(t) {
                var i = t.gl,
                    s = t.projection,
                    n = t.offset,
                    r = t.shaderManager.stripShader,
                    o = this.drawMode === e.Strip.DrawModes.TRIANGLE_STRIP ? i.TRIANGLE_STRIP : i.TRIANGLES;
                t.blendModeManager.setBlendMode(this.blendMode), i.uniformMatrix3fv(r.translationMatrix, !1, this.worldTransform.toArray(!0)), i.uniform2f(r.projectionVector, s.x, -s.y), i.uniform2f(r.offsetVector, -n.x, -n.y), i.uniform1f(r.alpha, this.worldAlpha), this.dirty ? (this.dirty = !1, i.bindBuffer(i.ARRAY_BUFFER, this._vertexBuffer), i.bufferData(i.ARRAY_BUFFER, this.vertices, i.STATIC_DRAW), i.vertexAttribPointer(r.aVertexPosition, 2, i.FLOAT, !1, 0, 0), i.bindBuffer(i.ARRAY_BUFFER, this._uvBuffer), i.bufferData(i.ARRAY_BUFFER, this.uvs, i.STATIC_DRAW), i.vertexAttribPointer(r.aTextureCoord, 2, i.FLOAT, !1, 0, 0), i.activeTexture(i.TEXTURE0), this.texture.baseTexture._dirty[i.id] ? t.renderer.updateTexture(this.texture.baseTexture) : i.bindTexture(i.TEXTURE_2D, this.texture.baseTexture._glTextures[i.id]), i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, this._indexBuffer), i.bufferData(i.ELEMENT_ARRAY_BUFFER, this.indices, i.STATIC_DRAW)) : (i.bindBuffer(i.ARRAY_BUFFER, this._vertexBuffer), i.bufferSubData(i.ARRAY_BUFFER, 0, this.vertices), i.vertexAttribPointer(r.aVertexPosition, 2, i.FLOAT, !1, 0, 0), i.bindBuffer(i.ARRAY_BUFFER, this._uvBuffer), i.vertexAttribPointer(r.aTextureCoord, 2, i.FLOAT, !1, 0, 0), i.activeTexture(i.TEXTURE0), this.texture.baseTexture._dirty[i.id] ? t.renderer.updateTexture(this.texture.baseTexture) : i.bindTexture(i.TEXTURE_2D, this.texture.baseTexture._glTextures[i.id]), i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, this._indexBuffer)), i.drawElements(o, this.indices.length, i.UNSIGNED_SHORT, 0)
            }, e.Strip.prototype._renderCanvas = function(t) {
                var i = t.context,
                    s = this.worldTransform;
                t.roundPixels ? i.setTransform(s.a, s.b, s.c, s.d, 0 | s.tx, 0 | s.ty) : i.setTransform(s.a, s.b, s.c, s.d, s.tx, s.ty), this.drawMode === e.Strip.DrawModes.TRIANGLE_STRIP ? this._renderCanvasTriangleStrip(i) : this._renderCanvasTriangles(i)
            }, e.Strip.prototype._renderCanvasTriangleStrip = function(t) {
                var e = this.vertices,
                    i = this.uvs,
                    s = e.length / 2;
                this.count++;
                for (var n = 0; s - 2 > n; n++) {
                    var r = 2 * n;
                    this._renderCanvasDrawTriangle(t, e, i, r, r + 2, r + 4)
                }
            }, e.Strip.prototype._renderCanvasTriangles = function(t) {
                var e = this.vertices,
                    i = this.uvs,
                    s = this.indices,
                    n = s.length;
                this.count++;
                for (var r = 0; n > r; r += 3) {
                    var o = 2 * s[r],
                        a = 2 * s[r + 1],
                        h = 2 * s[r + 2];
                    this._renderCanvasDrawTriangle(t, e, i, o, a, h)
                }
            }, e.Strip.prototype._renderCanvasDrawTriangle = function(t, e, i, s, n, r) {
                var o = this.texture.baseTexture.source,
                    a = this.texture.width,
                    h = this.texture.height,
                    l = e[s],
                    d = e[n],
                    c = e[r],
                    u = e[s + 1],
                    p = e[n + 1],
                    f = e[r + 1],
                    y = i[s] * a,
                    x = i[n] * a,
                    m = i[r] * a,
                    g = i[s + 1] * h,
                    v = i[n + 1] * h,
                    b = i[r + 1] * h;
                if (this.canvasPadding > 0) {
                    var _ = this.canvasPadding / this.worldTransform.a,
                        S = this.canvasPadding / this.worldTransform.d,
                        w = (l + d + c) / 3,
                        T = (u + p + f) / 3,
                        C = l - w,
                        E = u - T,
                        A = Math.sqrt(C * C + E * E);
                    l = w + C / A * (A + _), u = T + E / A * (A + S), C = d - w, E = p - T, A = Math.sqrt(C * C + E * E), d = w + C / A * (A + _), p = T + E / A * (A + S), C = c - w, E = f - T, A = Math.sqrt(C * C + E * E), c = w + C / A * (A + _), f = T + E / A * (A + S)
                }
                t.save(), t.beginPath(), t.moveTo(l, u), t.lineTo(d, p), t.lineTo(c, f), t.closePath(), t.clip();
                var P = y * v + g * m + x * b - v * m - g * x - y * b,
                    L = l * v + g * c + d * b - v * c - g * d - l * b,
                    R = y * d + l * m + x * c - d * m - l * x - y * c,
                    I = y * v * c + g * d * m + l * x * b - l * v * m - g * x * c - y * d * b,
                    G = u * v + g * f + p * b - v * f - g * p - u * b,
                    M = y * p + u * m + x * f - p * m - u * x - y * f,
                    O = y * v * f + g * p * m + u * x * b - u * v * m - g * x * f - y * p * b;
                t.transform(L / P, G / P, R / P, M / P, I / P, O / P), t.drawImage(o, 0, 0), t.restore()
            }, e.Strip.prototype.renderStripFlat = function(t) {
                var e = this.context,
                    i = t.vertices,
                    s = i.length / 2;
                this.count++, e.beginPath();
                for (var n = 1; s - 2 > n; n++) {
                    var r = 2 * n,
                        o = i[r],
                        a = i[r + 2],
                        h = i[r + 4],
                        l = i[r + 1],
                        d = i[r + 3],
                        c = i[r + 5];
                    e.moveTo(o, l), e.lineTo(a, d), e.lineTo(h, c)
                }
                e.fillStyle = "#FF0000", e.fill(), e.closePath()
            }, e.Strip.prototype.onTextureUpdate = function() {
                this.updateFrame = !0
            }, e.Strip.prototype.getBounds = function(t) {
                for (var i = t || this.worldTransform, s = i.a, n = i.b, r = i.c, o = i.d, a = i.tx, h = i.ty, l = -(1 / 0), d = -(1 / 0), c = 1 / 0, u = 1 / 0, p = this.vertices, f = 0, y = p.length; y > f; f += 2) {
                    var x = p[f],
                        m = p[f + 1],
                        g = s * x + r * m + a,
                        v = o * m + n * x + h;
                    c = c > g ? g : c, u = u > v ? v : u, l = g > l ? g : l, d = v > d ? v : d
                }
                if (c === -(1 / 0) || d === 1 / 0) return e.EmptyRectangle;
                var b = this._bounds;
                return b.x = c, b.width = l - c, b.y = u, b.height = d - u, this._currentBounds = b, b
            }, e.Strip.DrawModes = {
                TRIANGLE_STRIP: 0,
                TRIANGLES: 1
            }, e.Rope = function(t, i) {
                e.Strip.call(this, t), this.points = i, this.vertices = new e.Float32Array(4 * i.length), this.uvs = new e.Float32Array(4 * i.length), this.colors = new e.Float32Array(2 * i.length), this.indices = new e.Uint16Array(2 * i.length), this.refresh()
            }, e.Rope.prototype = Object.create(e.Strip.prototype), e.Rope.prototype.constructor = e.Rope, e.Rope.prototype.refresh = function() {
                var t = this.points;
                if (!(t.length < 1)) {
                    var e = this.uvs,
                        i = t[0],
                        s = this.indices,
                        n = this.colors;
                    this.count -= .2, e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 1, n[0] = 1, n[1] = 1, s[0] = 0, s[1] = 1;
                    for (var r, o, a, h = t.length, l = 1; h > l; l++) r = t[l], o = 4 * l, a = l / (h - 1), l % 2 ? (e[o] = a, e[o + 1] = 0, e[o + 2] = a, e[o + 3] = 1) : (e[o] = a, e[o + 1] = 0, e[o + 2] = a, e[o + 3] = 1), o = 2 * l, n[o] = 1, n[o + 1] = 1, o = 2 * l, s[o] = o, s[o + 1] = o + 1, i = r
                }
            }, e.Rope.prototype.updateTransform = function() {
                var t = this.points;
                if (!(t.length < 1)) {
                    var i, s = t[0],
                        n = {
                            x: 0,
                            y: 0
                        };
                    this.count -= .2;
                    for (var r, o, a, h, l, d = this.vertices, c = t.length, u = 0; c > u; u++) r = t[u], o = 4 * u, i = u < t.length - 1 ? t[u + 1] : r, n.y = -(i.x - s.x), n.x = i.y - s.y, a = 10 * (1 - u / (c - 1)), a > 1 && (a = 1), h = Math.sqrt(n.x * n.x + n.y * n.y), l = this.texture.height / 2, n.x /= h, n.y /= h, n.x *= l, n.y *= l, d[o] = r.x + n.x, d[o + 1] = r.y + n.y, d[o + 2] = r.x - n.x, d[o + 3] = r.y - n.y, s = r;
                    e.DisplayObjectContainer.prototype.updateTransform.call(this)
                }
            }, e.Rope.prototype.setTexture = function(t) {
                this.texture = t
            }, e.TilingSprite = function(t, i, s) {
                e.Sprite.call(this, t), this._width = i || 100, this._height = s || 100, this.tileScale = new e.Point(1, 1), this.tileScaleOffset = new e.Point(1, 1), this.tilePosition = new e.Point(0, 0), this.renderable = !0, this.tint = 16777215, this.blendMode = e.blendModes.NORMAL
            }, e.TilingSprite.prototype = Object.create(e.Sprite.prototype), e.TilingSprite.prototype.constructor = e.TilingSprite, Object.defineProperty(e.TilingSprite.prototype, "width", {
                get: function() {
                    return this._width
                },
                set: function(t) {
                    this._width = t
                }
            }), Object.defineProperty(e.TilingSprite.prototype, "height", {
                get: function() {
                    return this._height
                },
                set: function(t) {
                    this._height = t
                }
            }), e.TilingSprite.prototype.setTexture = function(t) {
                this.texture !== t && (this.texture = t, this.refreshTexture = !0, this.cachedTint = 16777215)
            }, e.TilingSprite.prototype._renderWebGL = function(t) {
                if (this.visible !== !1 && 0 !== this.alpha) {
                    var e, i;
                    for (this._mask && (t.spriteBatch.stop(), t.maskManager.pushMask(this.mask, t), t.spriteBatch.start()), this._filters && (t.spriteBatch.flush(), t.filterManager.pushFilter(this._filterBlock)), !this.tilingTexture || this.refreshTexture ? (this.generateTilingTexture(!0), this.tilingTexture && this.tilingTexture.needsUpdate && (t.renderer.updateTexture(this.tilingTexture.baseTexture), this.tilingTexture.needsUpdate = !1)) : t.spriteBatch.renderTilingSprite(this), e = 0, i = this.children.length; i > e; e++) this.children[e]._renderWebGL(t);
                    t.spriteBatch.stop(), this._filters && t.filterManager.popFilter(), this._mask && t.maskManager.popMask(this._mask, t), t.spriteBatch.start()
                }
            }, e.TilingSprite.prototype._renderCanvas = function(t) {
                if (this.visible !== !1 && 0 !== this.alpha) {
                    var i = t.context;
                    this._mask && t.maskManager.pushMask(this._mask, t), i.globalAlpha = this.worldAlpha;
                    var s, n, r = this.worldTransform,
                        o = t.resolution;
                    if (i.setTransform(r.a * o, r.b * o, r.c * o, r.d * o, r.tx * o, r.ty * o), !this.__tilePattern || this.refreshTexture) {
                        if (this.generateTilingTexture(!1), !this.tilingTexture) return;
                        this.__tilePattern = i.createPattern(this.tilingTexture.baseTexture.source, "repeat")
                    }
                    this.blendMode !== t.currentBlendMode && (t.currentBlendMode = this.blendMode, i.globalCompositeOperation = e.blendModesCanvas[t.currentBlendMode]);
                    var a = this.tilePosition,
                        h = this.tileScale;
                    for (a.x %= this.tilingTexture.baseTexture.width, a.y %= this.tilingTexture.baseTexture.height, i.scale(h.x, h.y), i.translate(a.x + this.anchor.x * -this._width, a.y + this.anchor.y * -this._height), i.fillStyle = this.__tilePattern, i.fillRect(-a.x, -a.y, this._width / h.x, this._height / h.y), i.scale(1 / h.x, 1 / h.y), i.translate(-a.x + this.anchor.x * this._width, -a.y + this.anchor.y * this._height), this._mask && t.maskManager.popMask(t), s = 0, n = this.children.length; n > s; s++) this.children[s]._renderCanvas(t)
                }
            }, e.TilingSprite.prototype.getBounds = function() {
                var t = this._width,
                    e = this._height,
                    i = t * (1 - this.anchor.x),
                    s = t * -this.anchor.x,
                    n = e * (1 - this.anchor.y),
                    r = e * -this.anchor.y,
                    o = this.worldTransform,
                    a = o.a,
                    h = o.b,
                    l = o.c,
                    d = o.d,
                    c = o.tx,
                    u = o.ty,
                    p = a * s + l * r + c,
                    f = d * r + h * s + u,
                    y = a * i + l * r + c,
                    x = d * r + h * i + u,
                    m = a * i + l * n + c,
                    g = d * n + h * i + u,
                    v = a * s + l * n + c,
                    b = d * n + h * s + u,
                    _ = -(1 / 0),
                    S = -(1 / 0),
                    w = 1 / 0,
                    T = 1 / 0;
                w = w > p ? p : w, w = w > y ? y : w, w = w > m ? m : w, w = w > v ? v : w, T = T > f ? f : T, T = T > x ? x : T, T = T > g ? g : T, T = T > b ? b : T, _ = p > _ ? p : _, _ = y > _ ? y : _, _ = m > _ ? m : _, _ = v > _ ? v : _, S = f > S ? f : S, S = x > S ? x : S, S = g > S ? g : S, S = b > S ? b : S;
                var C = this._bounds;
                return C.x = w, C.width = _ - w, C.y = T, C.height = S - T, this._currentBounds = C, C
            }, e.TilingSprite.prototype.onTextureUpdate = function() {}, e.TilingSprite.prototype.generateTilingTexture = function(t) {
                if (this.texture.baseTexture.hasLoaded) {
                    var i, s, n = this.originalTexture || this.texture,
                        r = n.frame,
                        o = r.width !== n.baseTexture.width || r.height !== n.baseTexture.height,
                        a = !1;
                    if (t ? (i = e.getNextPowerOfTwo(r.width), s = e.getNextPowerOfTwo(r.height), (r.width !== i || r.height !== s || n.baseTexture.width !== i || n.baseTexture.height || s) && (a = !0)) : o && (n.trim ? (i = n.trim.width, s = n.trim.height) : (i = r.width, s = r.height), a = !0), a) {
                        var h;
                        this.tilingTexture && this.tilingTexture.isTiling ? (h = this.tilingTexture.canvasBuffer, h.resize(i, s), this.tilingTexture.baseTexture.width = i, this.tilingTexture.baseTexture.height = s, this.tilingTexture.needsUpdate = !0) : (h = new e.CanvasBuffer(i, s), this.tilingTexture = e.Texture.fromCanvas(h.canvas), this.tilingTexture.canvasBuffer = h, this.tilingTexture.isTiling = !0), h.context.drawImage(n.baseTexture.source, n.crop.x, n.crop.y, n.crop.width, n.crop.height, 0, 0, i, s), this.tileScaleOffset.x = r.width / i, this.tileScaleOffset.y = r.height / s
                    } else this.tilingTexture && this.tilingTexture.isTiling && this.tilingTexture.destroy(!0), this.tileScaleOffset.x = 1, this.tileScaleOffset.y = 1, this.tilingTexture = n;
                    this.refreshTexture = !1, this.originalTexture = this.texture, this.texture = this.tilingTexture, this.tilingTexture.baseTexture._powerOf2 = !0
                }
            }, e.TilingSprite.prototype.destroy = function() {
                e.Sprite.prototype.destroy.call(this), this.tileScale = null, this.tileScaleOffset = null, this.tilePosition = null, this.tilingTexture.destroy(!0), this.tilingTexture = null
            };
        var i = {
            radDeg: 180 / Math.PI,
            degRad: Math.PI / 180,
            temp: [],
            Float32Array: "undefined" == typeof Float32Array ? Array : Float32Array,
            Uint16Array: "undefined" == typeof Uint16Array ? Array : Uint16Array
        };
        i.BoneData = function(t, e) {
            this.name = t, this.parent = e
        }, i.BoneData.prototype = {
            length: 0,
            x: 0,
            y: 0,
            rotation: 0,
            scaleX: 1,
            scaleY: 1,
            inheritScale: !0,
            inheritRotation: !0,
            flipX: !1,
            flipY: !1
        }, i.SlotData = function(t, e) {
            this.name = t, this.boneData = e
        }, i.SlotData.prototype = {
            r: 1,
            g: 1,
            b: 1,
            a: 1,
            attachmentName: null,
            additiveBlending: !1
        }, i.IkConstraintData = function(t) {
            this.name = t, this.bones = []
        }, i.IkConstraintData.prototype = {
            target: null,
            bendDirection: 1,
            mix: 1
        }, i.Bone = function(t, e, i) {
            this.data = t, this.skeleton = e, this.parent = i, this.setToSetupPose()
        }, i.Bone.yDown = !1, i.Bone.prototype = {
            x: 0,
            y: 0,
            rotation: 0,
            rotationIK: 0,
            scaleX: 1,
            scaleY: 1,
            flipX: !1,
            flipY: !1,
            m00: 0,
            m01: 0,
            worldX: 0,
            m10: 0,
            m11: 0,
            worldY: 0,
            worldRotation: 0,
            worldScaleX: 1,
            worldScaleY: 1,
            worldFlipX: !1,
            worldFlipY: !1,
            updateWorldTransform: function() {
                var t = this.parent;
                if (t) this.worldX = this.x * t.m00 + this.y * t.m01 + t.worldX, this.worldY = this.x * t.m10 + this.y * t.m11 + t.worldY, this.data.inheritScale ? (this.worldScaleX = t.worldScaleX * this.scaleX, this.worldScaleY = t.worldScaleY * this.scaleY) : (this.worldScaleX = this.scaleX, this.worldScaleY = this.scaleY), this.worldRotation = this.data.inheritRotation ? t.worldRotation + this.rotationIK : this.rotationIK, this.worldFlipX = t.worldFlipX != this.flipX, this.worldFlipY = t.worldFlipY != this.flipY;
                else {
                    var e = this.skeleton.flipX,
                        s = this.skeleton.flipY;
                    this.worldX = e ? -this.x : this.x, this.worldY = s != i.Bone.yDown ? -this.y : this.y, this.worldScaleX = this.scaleX, this.worldScaleY = this.scaleY, this.worldRotation = this.rotationIK, this.worldFlipX = e != this.flipX, this.worldFlipY = s != this.flipY
                }
                var n = this.worldRotation * i.degRad,
                    r = Math.cos(n),
                    o = Math.sin(n);
                this.worldFlipX ? (this.m00 = -r * this.worldScaleX, this.m01 = o * this.worldScaleY) : (this.m00 = r * this.worldScaleX, this.m01 = -o * this.worldScaleY), this.worldFlipY != i.Bone.yDown ? (this.m10 = -o * this.worldScaleX, this.m11 = -r * this.worldScaleY) : (this.m10 = o * this.worldScaleX, this.m11 = r * this.worldScaleY)
            },
            setToSetupPose: function() {
                var t = this.data;
                this.x = t.x, this.y = t.y, this.rotation = t.rotation, this.rotationIK = this.rotation, this.scaleX = t.scaleX, this.scaleY = t.scaleY, this.flipX = t.flipX, this.flipY = t.flipY
            },
            worldToLocal: function(t) {
                var e = t[0] - this.worldX,
                    s = t[1] - this.worldY,
                    n = this.m00,
                    r = this.m10,
                    o = this.m01,
                    a = this.m11;
                this.worldFlipX != (this.worldFlipY != i.Bone.yDown) && (n = -n, a = -a);
                var h = 1 / (n * a - o * r);
                t[0] = e * n * h - s * o * h, t[1] = s * a * h - e * r * h
            },
            localToWorld: function(t) {
                var e = t[0],
                    i = t[1];
                t[0] = e * this.m00 + i * this.m01 + this.worldX, t[1] = e * this.m10 + i * this.m11 + this.worldY
            }
        }, i.Slot = function(t, e) {
            this.data = t, this.bone = e, this.setToSetupPose()
        }, i.Slot.prototype = {
            r: 1,
            g: 1,
            b: 1,
            a: 1,
            _attachmentTime: 0,
            attachment: null,
            attachmentVertices: [],
            setAttachment: function(t) {
                this.attachment = t, this._attachmentTime = this.bone.skeleton.time, this.attachmentVertices.length = 0
            },
            setAttachmentTime: function(t) {
                this._attachmentTime = this.bone.skeleton.time - t
            },
            getAttachmentTime: function() {
                return this.bone.skeleton.time - this._attachmentTime
            },
            setToSetupPose: function() {
                var t = this.data;
                this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a;
                for (var e = this.bone.skeleton.data.slots, i = 0, s = e.length; s > i; i++)
                    if (e[i] == t) {
                        this.setAttachment(t.attachmentName ? this.bone.skeleton.getAttachmentBySlotIndex(i, t.attachmentName) : null);
                        break
                    }
            }
        }, i.IkConstraint = function(t, e) {
            this.data = t, this.mix = t.mix, this.bendDirection = t.bendDirection, this.bones = [];
            for (var i = 0, s = t.bones.length; s > i; i++) this.bones.push(e.findBone(t.bones[i].name));
            this.target = e.findBone(t.target.name)
        }, i.IkConstraint.prototype = {
            apply: function() {
                var t = this.target,
                    e = this.bones;
                switch (e.length) {
                    case 1:
                        i.IkConstraint.apply1(e[0], t.worldX, t.worldY, this.mix);
                        break;
                    case 2:
                        i.IkConstraint.apply2(e[0], e[1], t.worldX, t.worldY, this.bendDirection, this.mix)
                }
            }
        }, i.IkConstraint.apply1 = function(t, e, s, n) {
            var r = t.data.inheritRotation && t.parent ? t.parent.worldRotation : 0,
                o = t.rotation,
                a = Math.atan2(s - t.worldY, e - t.worldX) * i.radDeg - r;
            t.rotationIK = o + (a - o) * n
        }, i.IkConstraint.apply2 = function(t, e, s, n, r, o) {
            var a = e.rotation,
                h = t.rotation;
            if (!o) return e.rotationIK = a, void(t.rotationIK = h);
            var l, d, c = i.temp,
                u = t.parent;
            u ? (c[0] = s, c[1] = n, u.worldToLocal(c), s = (c[0] - t.x) * u.worldScaleX, n = (c[1] - t.y) * u.worldScaleY) : (s -= t.x, n -= t.y), e.parent == t ? (l = e.x, d = e.y) : (c[0] = e.x, c[1] = e.y, e.parent.localToWorld(c), t.worldToLocal(c), l = c[0], d = c[1]);
            var p = l * t.worldScaleX,
                f = d * t.worldScaleY,
                y = Math.atan2(f, p),
                x = Math.sqrt(p * p + f * f),
                m = e.data.length * e.worldScaleX,
                g = 2 * x * m;
            if (1e-4 > g) return void(e.rotationIK = a + (Math.atan2(n, s) * i.radDeg - h - a) * o);
            var v = (s * s + n * n - x * x - m * m) / g; - 1 > v ? v = -1 : v > 1 && (v = 1);
            var b = Math.acos(v) * r,
                _ = x + m * v,
                S = m * Math.sin(b),
                w = Math.atan2(n * _ - s * S, s * _ + n * S),
                T = (w - y) * i.radDeg - h;
            T > 180 ? T -= 360 : -180 > T && (T += 360), t.rotationIK = h + T * o, T = (b + y) * i.radDeg - a, T > 180 ? T -= 360 : -180 > T && (T += 360), e.rotationIK = a + (T + t.worldRotation - e.parent.worldRotation) * o
        }, i.Skin = function(t) {
            this.name = t, this.attachments = {}
        }, i.Skin.prototype = {
            addAttachment: function(t, e, i) {
                this.attachments[t + ":" + e] = i
            },
            getAttachment: function(t, e) {
                return this.attachments[t + ":" + e]
            },
            _attachAll: function(t, e) {
                for (var i in e.attachments) {
                    var s = i.indexOf(":"),
                        n = parseInt(i.substring(0, s)),
                        r = i.substring(s + 1),
                        o = t.slots[n];
                    if (o.attachment && o.attachment.name == r) {
                        var a = this.getAttachment(n, r);
                        a && o.setAttachment(a)
                    }
                }
            }
        }, i.Animation = function(t, e, i) {
            this.name = t, this.timelines = e, this.duration = i
        }, i.Animation.prototype = {
            apply: function(t, e, i, s, n) {
                s && 0 != this.duration && (i %= this.duration, e %= this.duration);
                for (var r = this.timelines, o = 0, a = r.length; a > o; o++) r[o].apply(t, e, i, n, 1)
            },
            mix: function(t, e, i, s, n, r) {
                s && 0 != this.duration && (i %= this.duration, e %= this.duration);
                for (var o = this.timelines, a = 0, h = o.length; h > a; a++) o[a].apply(t, e, i, n, r)
            }
        }, i.Animation.binarySearch = function(t, e, i) {
            var s = 0,
                n = Math.floor(t.length / i) - 2;
            if (!n) return i;
            for (var r = n >>> 1;;) {
                if (t[(r + 1) * i] <= e ? s = r + 1 : n = r, s == n) return (s + 1) * i;
                r = s + n >>> 1
            }
        }, i.Animation.binarySearch1 = function(t, e) {
            var i = 0,
                s = t.length - 2;
            if (!s) return 1;
            for (var n = s >>> 1;;) {
                if (t[n + 1] <= e ? i = n + 1 : s = n, i == s) return i + 1;
                n = i + s >>> 1
            }
        }, i.Animation.linearSearch = function(t, e, i) {
            for (var s = 0, n = t.length - i; n >= s; s += i)
                if (t[s] > e) return s;
            return -1
        }, i.Curves = function(t) {
            this.curves = []
        }, i.Curves.prototype = {
            setLinear: function(t) {
                this.curves[19 * t] = 0
            },
            setStepped: function(t) {
                this.curves[19 * t] = 1
            },
            setCurve: function(t, e, i, s, n) {
                var r = .1,
                    o = r * r,
                    a = o * r,
                    h = 3 * r,
                    l = 3 * o,
                    d = 6 * o,
                    c = 6 * a,
                    u = 2 * -e + s,
                    p = 2 * -i + n,
                    f = 3 * (e - s) + 1,
                    y = 3 * (i - n) + 1,
                    x = e * h + u * l + f * a,
                    m = i * h + p * l + y * a,
                    g = u * d + f * c,
                    v = p * d + y * c,
                    b = f * c,
                    _ = y * c,
                    S = 19 * t,
                    w = this.curves;
                w[S++] = 2;
                for (var T = x, C = m, E = S + 19 - 1; E > S; S += 2) w[S] = T, w[S + 1] = C, x += g, m += v, g += b, v += _, T += x, C += m
            },
            getCurvePercent: function(t, e) {
                e = 0 > e ? 0 : e > 1 ? 1 : e;
                var i = this.curves,
                    s = 19 * t,
                    n = i[s];
                if (0 === n) return e;
                if (1 == n) return 0;
                s++;
                for (var r = 0, o = s, a = s + 19 - 1; a > s; s += 2)
                    if (r = i[s], r >= e) {
                        var h, l;
                        return s == o ? (h = 0, l = 0) : (h = i[s - 2], l = i[s - 1]), l + (i[s + 1] - l) * (e - h) / (r - h)
                    }
                var d = i[s - 1];
                return d + (1 - d) * (e - r) / (1 - r)
            }
        }, i.RotateTimeline = function(t) {
            this.curves = new i.Curves(t), this.frames = [], this.frames.length = 2 * t
        }, i.RotateTimeline.prototype = {
            boneIndex: 0,
            getFrameCount: function() {
                return this.frames.length / 2
            },
            setFrame: function(t, e, i) {
                t *= 2, this.frames[t] = e, this.frames[t + 1] = i
            },
            apply: function(t, e, s, n, r) {
                var o = this.frames;
                if (!(s < o[0])) {
                    var a = t.bones[this.boneIndex];
                    if (s >= o[o.length - 2]) {
                        for (var h = a.data.rotation + o[o.length - 1] - a.rotation; h > 180;) h -= 360;
                        for (; - 180 > h;) h += 360;
                        return void(a.rotation += h * r)
                    }
                    var l = i.Animation.binarySearch(o, s, 2),
                        d = o[l - 1],
                        c = o[l],
                        u = 1 - (s - c) / (o[l - 2] - c);
                    u = this.curves.getCurvePercent(l / 2 - 1, u);
                    for (var h = o[l + 1] - d; h > 180;) h -= 360;
                    for (; - 180 > h;) h += 360;
                    for (h = a.data.rotation + (d + h * u) - a.rotation; h > 180;) h -= 360;
                    for (; - 180 > h;) h += 360;
                    a.rotation += h * r
                }
            }
        }, i.TranslateTimeline = function(t) {
            this.curves = new i.Curves(t), this.frames = [], this.frames.length = 3 * t
        }, i.TranslateTimeline.prototype = {
            boneIndex: 0,
            getFrameCount: function() {
                return this.frames.length / 3
            },
            setFrame: function(t, e, i, s) {
                t *= 3, this.frames[t] = e, this.frames[t + 1] = i, this.frames[t + 2] = s
            },
            apply: function(t, e, s, n, r) {
                var o = this.frames;
                if (!(s < o[0])) {
                    var a = t.bones[this.boneIndex];
                    if (s >= o[o.length - 3]) return a.x += (a.data.x + o[o.length - 2] - a.x) * r, void(a.y += (a.data.y + o[o.length - 1] - a.y) * r);
                    var h = i.Animation.binarySearch(o, s, 3),
                        l = o[h - 2],
                        d = o[h - 1],
                        c = o[h],
                        u = 1 - (s - c) / (o[h + -3] - c);
                    u = this.curves.getCurvePercent(h / 3 - 1, u), a.x += (a.data.x + l + (o[h + 1] - l) * u - a.x) * r, a.y += (a.data.y + d + (o[h + 2] - d) * u - a.y) * r
                }
            }
        }, i.ScaleTimeline = function(t) {
            this.curves = new i.Curves(t), this.frames = [], this.frames.length = 3 * t
        }, i.ScaleTimeline.prototype = {
            boneIndex: 0,
            getFrameCount: function() {
                return this.frames.length / 3
            },
            setFrame: function(t, e, i, s) {
                t *= 3, this.frames[t] = e, this.frames[t + 1] = i, this.frames[t + 2] = s
            },
            apply: function(t, e, s, n, r) {
                var o = this.frames;
                if (!(s < o[0])) {
                    var a = t.bones[this.boneIndex];
                    if (s >= o[o.length - 3]) return a.scaleX += (a.data.scaleX * o[o.length - 2] - a.scaleX) * r, void(a.scaleY += (a.data.scaleY * o[o.length - 1] - a.scaleY) * r);
                    var h = i.Animation.binarySearch(o, s, 3),
                        l = o[h - 2],
                        d = o[h - 1],
                        c = o[h],
                        u = 1 - (s - c) / (o[h + -3] - c);
                    u = this.curves.getCurvePercent(h / 3 - 1, u), a.scaleX += (a.data.scaleX * (l + (o[h + 1] - l) * u) - a.scaleX) * r, a.scaleY += (a.data.scaleY * (d + (o[h + 2] - d) * u) - a.scaleY) * r
                }
            }
        }, i.ColorTimeline = function(t) {
            this.curves = new i.Curves(t), this.frames = [], this.frames.length = 5 * t
        }, i.ColorTimeline.prototype = {
            slotIndex: 0,
            getFrameCount: function() {
                return this.frames.length / 5
            },
            setFrame: function(t, e, i, s, n, r) {
                t *= 5, this.frames[t] = e, this.frames[t + 1] = i, this.frames[t + 2] = s, this.frames[t + 3] = n, this.frames[t + 4] = r
            },
            apply: function(t, e, s, n, r) {
                var o = this.frames;
                if (!(s < o[0])) {
                    var a, h, l, d;
                    if (s >= o[o.length - 5]) {
                        var c = o.length - 1;
                        a = o[c - 3], h = o[c - 2], l = o[c - 1], d = o[c]
                    } else {
                        var u = i.Animation.binarySearch(o, s, 5),
                            p = o[u - 4],
                            f = o[u - 3],
                            y = o[u - 2],
                            x = o[u - 1],
                            m = o[u],
                            g = 1 - (s - m) / (o[u - 5] - m);
                        g = this.curves.getCurvePercent(u / 5 - 1, g), a = p + (o[u + 1] - p) * g, h = f + (o[u + 2] - f) * g, l = y + (o[u + 3] - y) * g, d = x + (o[u + 4] - x) * g
                    }
                    var v = t.slots[this.slotIndex];
                    1 > r ? (v.r += (a - v.r) * r, v.g += (h - v.g) * r, v.b += (l - v.b) * r, v.a += (d - v.a) * r) : (v.r = a, v.g = h, v.b = l, v.a = d)
                }
            }
        }, i.AttachmentTimeline = function(t) {
            this.curves = new i.Curves(t), this.frames = [], this.frames.length = t, this.attachmentNames = [], this.attachmentNames.length = t
        }, i.AttachmentTimeline.prototype = {
            slotIndex: 0,
            getFrameCount: function() {
                return this.frames.length
            },
            setFrame: function(t, e, i) {
                this.frames[t] = e, this.attachmentNames[t] = i
            },
            apply: function(t, e, s, n, r) {
                var o = this.frames;
                if (s < o[0]) return void(e > s && this.apply(t, e, Number.MAX_VALUE, null, 0));
                e > s && (e = -1);
                var a = s >= o[o.length - 1] ? o.length - 1 : i.Animation.binarySearch1(o, s) - 1;
                if (!(o[a] < e)) {
                    var h = this.attachmentNames[a];
                    t.slots[this.slotIndex].setAttachment(h ? t.getAttachmentBySlotIndex(this.slotIndex, h) : null)
                }
            }
        }, i.EventTimeline = function(t) {
            this.frames = [], this.frames.length = t, this.events = [], this.events.length = t
        }, i.EventTimeline.prototype = {
            getFrameCount: function() {
                return this.frames.length
            },
            setFrame: function(t, e, i) {
                this.frames[t] = e, this.events[t] = i
            },
            apply: function(t, e, s, n, r) {
                if (n) {
                    var o = this.frames,
                        a = o.length;
                    if (e > s) this.apply(t, e, Number.MAX_VALUE, n, r), e = -1;
                    else if (e >= o[a - 1]) return;
                    if (!(s < o[0])) {
                        var h;
                        if (e < o[0]) h = 0;
                        else {
                            h = i.Animation.binarySearch1(o, e);
                            for (var l = o[h]; h > 0 && o[h - 1] == l;) h--
                        }
                        for (var d = this.events; a > h && s >= o[h]; h++) n.push(d[h])
                    }
                }
            }
        }, i.DrawOrderTimeline = function(t) {
            this.frames = [], this.frames.length = t, this.drawOrders = [], this.drawOrders.length = t
        }, i.DrawOrderTimeline.prototype = {
            getFrameCount: function() {
                return this.frames.length
            },
            setFrame: function(t, e, i) {
                this.frames[t] = e, this.drawOrders[t] = i
            },
            apply: function(t, e, s, n, r) {
                var o = this.frames;
                if (!(s < o[0])) {
                    var a;
                    a = s >= o[o.length - 1] ? o.length - 1 : i.Animation.binarySearch1(o, s) - 1;
                    var h = t.drawOrder,
                        l = t.slots,
                        d = this.drawOrders[a];
                    if (d)
                        for (var c = 0, u = d.length; u > c; c++) h[c] = t.slots[d[c]];
                    else
                        for (var c = 0, u = l.length; u > c; c++) h[c] = l[c]
                }
            }
        }, i.FfdTimeline = function(t) {
            this.curves = new i.Curves(t), this.frames = [], this.frames.length = t, this.frameVertices = [], this.frameVertices.length = t
        }, i.FfdTimeline.prototype = {
            slotIndex: 0,
            attachment: 0,
            getFrameCount: function() {
                return this.frames.length
            },
            setFrame: function(t, e, i) {
                this.frames[t] = e, this.frameVertices[t] = i
            },
            apply: function(t, e, s, n, r) {
                var o = t.slots[this.slotIndex];
                if (o.attachment == this.attachment) {
                    var a = this.frames;
                    if (!(s < a[0])) {
                        var h = this.frameVertices,
                            l = h[0].length,
                            d = o.attachmentVertices;
                        if (d.length != l && (r = 1), d.length = l, s >= a[a.length - 1]) {
                            var c = h[a.length - 1];
                            if (1 > r)
                                for (var u = 0; l > u; u++) d[u] += (c[u] - d[u]) * r;
                            else
                                for (var u = 0; l > u; u++) d[u] = c[u]
                        } else {
                            var p = i.Animation.binarySearch1(a, s),
                                f = a[p],
                                y = 1 - (s - f) / (a[p - 1] - f);
                            y = this.curves.getCurvePercent(p - 1, 0 > y ? 0 : y > 1 ? 1 : y);
                            var x = h[p - 1],
                                m = h[p];
                            if (1 > r)
                                for (var u = 0; l > u; u++) {
                                    var g = x[u];
                                    d[u] += (g + (m[u] - g) * y - d[u]) * r
                                } else
                                    for (var u = 0; l > u; u++) {
                                        var g = x[u];
                                        d[u] = g + (m[u] - g) * y
                                    }
                        }
                    }
                }
            }
        }, i.IkConstraintTimeline = function(t) {
            this.curves = new i.Curves(t), this.frames = [], this.frames.length = 3 * t
        }, i.IkConstraintTimeline.prototype = {
            ikConstraintIndex: 0,
            getFrameCount: function() {
                return this.frames.length / 3
            },
            setFrame: function(t, e, i, s) {
                t *= 3, this.frames[t] = e, this.frames[t + 1] = i, this.frames[t + 2] = s
            },
            apply: function(t, e, s, n, r) {
                var o = this.frames;
                if (!(s < o[0])) {
                    var a = t.ikConstraints[this.ikConstraintIndex];
                    if (s >= o[o.length - 3]) return a.mix += (o[o.length - 2] - a.mix) * r, void(a.bendDirection = o[o.length - 1]);
                    var h = i.Animation.binarySearch(o, s, 3),
                        l = o[h + -2],
                        d = o[h],
                        c = 1 - (s - d) / (o[h + -3] - d);
                    c = this.curves.getCurvePercent(h / 3 - 1, c);
                    var u = l + (o[h + 1] - l) * c;
                    a.mix += (u - a.mix) * r, a.bendDirection = o[h + -1]
                }
            }
        }, i.FlipXTimeline = function(t) {
            this.curves = new i.Curves(t), this.frames = [], this.frames.length = 2 * t
        }, i.FlipXTimeline.prototype = {
            boneIndex: 0,
            getFrameCount: function() {
                return this.frames.length / 2
            },
            setFrame: function(t, e, i) {
                t *= 2, this.frames[t] = e, this.frames[t + 1] = i ? 1 : 0
            },
            apply: function(t, e, s, n, r) {
                var o = this.frames;
                if (s < o[0]) return void(e > s && this.apply(t, e, Number.MAX_VALUE, null, 0));
                e > s && (e = -1);
                var a = (s >= o[o.length - 2] ? o.length : i.Animation.binarySearch(o, s, 2)) - 2;
                o[a] < e || (t.bones[boneIndex].flipX = 0 != o[a + 1])
            }
        }, i.FlipYTimeline = function(t) {
            this.curves = new i.Curves(t), this.frames = [], this.frames.length = 2 * t
        }, i.FlipYTimeline.prototype = {
            boneIndex: 0,
            getFrameCount: function() {
                return this.frames.length / 2
            },
            setFrame: function(t, e, i) {
                t *= 2, this.frames[t] = e, this.frames[t + 1] = i ? 1 : 0
            },
            apply: function(t, e, s, n, r) {
                var o = this.frames;
                if (s < o[0]) return void(e > s && this.apply(t, e, Number.MAX_VALUE, null, 0));
                e > s && (e = -1);
                var a = (s >= o[o.length - 2] ? o.length : i.Animation.binarySearch(o, s, 2)) - 2;
                o[a] < e || (t.bones[boneIndex].flipY = 0 != o[a + 1])
            }
        }, i.SkeletonData = function() {
            this.bones = [], this.slots = [], this.skins = [], this.events = [], this.animations = [], this.ikConstraints = []
        }, i.SkeletonData.prototype = {
            name: null,
            defaultSkin: null,
            width: 0,
            height: 0,
            version: null,
            hash: null,
            findBone: function(t) {
                for (var e = this.bones, i = 0, s = e.length; s > i; i++)
                    if (e[i].name == t) return e[i];
                return null
            },
            findBoneIndex: function(t) {
                for (var e = this.bones, i = 0, s = e.length; s > i; i++)
                    if (e[i].name == t) return i;
                return -1
            },
            findSlot: function(t) {
                for (var e = this.slots, i = 0, s = e.length; s > i; i++)
                    if (e[i].name == t) return slot[i];
                return null
            },
            findSlotIndex: function(t) {
                for (var e = this.slots, i = 0, s = e.length; s > i; i++)
                    if (e[i].name == t) return i;
                return -1
            },
            findSkin: function(t) {
                for (var e = this.skins, i = 0, s = e.length; s > i; i++)
                    if (e[i].name == t) return e[i];
                return null
            },
            findEvent: function(t) {
                for (var e = this.events, i = 0, s = e.length; s > i; i++)
                    if (e[i].name == t) return e[i];
                return null
            },
            findAnimation: function(t) {
                for (var e = this.animations, i = 0, s = e.length; s > i; i++)
                    if (e[i].name == t) return e[i];
                return null
            },
            findIkConstraint: function(t) {
                for (var e = this.ikConstraints, i = 0, s = e.length; s > i; i++)
                    if (e[i].name == t) return e[i];
                return null
            }
        }, i.Skeleton = function(t) {
            this.data = t, this.bones = [];
            for (var e = 0, s = t.bones.length; s > e; e++) {
                var n = t.bones[e],
                    r = n.parent ? this.bones[t.bones.indexOf(n.parent)] : null;
                this.bones.push(new i.Bone(n, this, r))
            }
            this.slots = [], this.drawOrder = [];
            for (var e = 0, s = t.slots.length; s > e; e++) {
                var o = t.slots[e],
                    a = this.bones[t.bones.indexOf(o.boneData)],
                    h = new i.Slot(o, a);
                this.slots.push(h), this.drawOrder.push(h)
            }
            this.ikConstraints = [];
            for (var e = 0, s = t.ikConstraints.length; s > e; e++) this.ikConstraints.push(new i.IkConstraint(t.ikConstraints[e], this));
            this.boneCache = [], this.updateCache()
        }, i.Skeleton.prototype = {
            x: 0,
            y: 0,
            skin: null,
            r: 1,
            g: 1,
            b: 1,
            a: 1,
            time: 0,
            flipX: !1,
            flipY: !1,
            updateCache: function() {
                var t = this.ikConstraints,
                    e = t.length,
                    i = e + 1,
                    s = this.boneCache;
                s.length > i && (s.length = i);
                for (var n = 0, r = s.length; r > n; n++) s[n].length = 0;
                for (; s.length < i;) s[s.length] = [];
                var o = s[0],
                    a = this.bones;
                t: for (var n = 0, r = a.length; r > n; n++) {
                    var h = a[n],
                        l = h;
                    do {
                        for (var d = 0; e > d; d++)
                            for (var c = t[d], u = c.bones[0], p = c.bones[c.bones.length - 1];;) {
                                if (l == p) {
                                    s[d].push(h), s[d + 1].push(h);
                                    continue t
                                }
                                if (p == u) break;
                                p = p.parent
                            }
                        l = l.parent
                    } while (l);
                    o[o.length] = h
                }
            },
            updateWorldTransform: function() {
                for (var t = this.bones, e = 0, i = t.length; i > e; e++) {
                    var s = t[e];
                    s.rotationIK = s.rotation
                }
                for (var e = 0, n = this.boneCache.length - 1;;) {
                    for (var r = this.boneCache[e], o = 0, a = r.length; a > o; o++) r[o].updateWorldTransform();
                    if (e == n) break;
                    this.ikConstraints[e].apply(), e++
                }
            },
            setToSetupPose: function() {
                this.setBonesToSetupPose(), this.setSlotsToSetupPose()
            },
            setBonesToSetupPose: function() {
                for (var t = this.bones, e = 0, i = t.length; i > e; e++) t[e].setToSetupPose();
                for (var s = this.ikConstraints, e = 0, i = s.length; i > e; e++) {
                    var n = s[e];
                    n.bendDirection = n.data.bendDirection, n.mix = n.data.mix
                }
            },
            setSlotsToSetupPose: function() {
                for (var t = this.slots, e = this.drawOrder, i = 0, s = t.length; s > i; i++) e[i] = t[i], t[i].setToSetupPose(i)
            },
            getRootBone: function() {
                return this.bones.length ? this.bones[0] : null
            },
            findBone: function(t) {
                for (var e = this.bones, i = 0, s = e.length; s > i; i++)
                    if (e[i].data.name == t) return e[i];
                return null
            },
            findBoneIndex: function(t) {
                for (var e = this.bones, i = 0, s = e.length; s > i; i++)
                    if (e[i].data.name == t) return i;
                return -1
            },
            findSlot: function(t) {
                for (var e = this.slots, i = 0, s = e.length; s > i; i++)
                    if (e[i].data.name == t) return e[i];
                return null
            },
            findSlotIndex: function(t) {
                for (var e = this.slots, i = 0, s = e.length; s > i; i++)
                    if (e[i].data.name == t) return i;
                return -1
            },
            setSkinByName: function(t) {
                var e = this.data.findSkin(t);
                if (!e) throw "Skin not found: " + t;
                this.setSkin(e)
            },
            setSkin: function(t) {
                if (t)
                    if (this.skin) t._attachAll(this, this.skin);
                    else
                        for (var e = this.slots, i = 0, s = e.length; s > i; i++) {
                            var n = e[i],
                                r = n.data.attachmentName;
                            if (r) {
                                var o = t.getAttachment(i, r);
                                o && n.setAttachment(o)
                            }
                        }
                this.skin = t
            },
            getAttachmentBySlotName: function(t, e) {
                return this.getAttachmentBySlotIndex(this.data.findSlotIndex(t), e)
            },
            getAttachmentBySlotIndex: function(t, e) {
                if (this.skin) {
                    var i = this.skin.getAttachment(t, e);
                    if (i) return i
                }
                return this.data.defaultSkin ? this.data.defaultSkin.getAttachment(t, e) : null
            },
            setAttachment: function(t, e) {
                for (var i = this.slots, s = 0, n = i.length; n > s; s++) {
                    var r = i[s];
                    if (r.data.name == t) {
                        var o = null;
                        if (e && (o = this.getAttachmentBySlotIndex(s, e), !o)) throw "Attachment not found: " + e + ", for slot: " + t;
                        return void r.setAttachment(o)
                    }
                }
                throw "Slot not found: " + t
            },
            findIkConstraint: function(t) {
                for (var e = this.ikConstraints, i = 0, s = e.length; s > i; i++)
                    if (e[i].data.name == t) return e[i];
                return null
            },
            update: function(t) {
                this.time += t
            }
        }, i.EventData = function(t) {
            this.name = t
        }, i.EventData.prototype = {
            intValue: 0,
            floatValue: 0,
            stringValue: null
        }, i.Event = function(t) {
            this.data = t
        }, i.Event.prototype = {
            intValue: 0,
            floatValue: 0,
            stringValue: null
        }, i.AttachmentType = {
            region: 0,
            boundingbox: 1,
            mesh: 2,
            skinnedmesh: 3
        }, i.RegionAttachment = function(t) {
            this.name = t, this.offset = [], this.offset.length = 8, this.uvs = [], this.uvs.length = 8
        }, i.RegionAttachment.prototype = {
            type: i.AttachmentType.region,
            x: 0,
            y: 0,
            rotation: 0,
            scaleX: 1,
            scaleY: 1,
            width: 0,
            height: 0,
            r: 1,
            g: 1,
            b: 1,
            a: 1,
            path: null,
            rendererObject: null,
            regionOffsetX: 0,
            regionOffsetY: 0,
            regionWidth: 0,
            regionHeight: 0,
            regionOriginalWidth: 0,
            regionOriginalHeight: 0,
            setUVs: function(t, e, i, s, n) {
                var r = this.uvs;
                n ? (r[2] = t, r[3] = s, r[4] = t, r[5] = e, r[6] = i, r[7] = e, r[0] = i, r[1] = s) : (r[0] = t, r[1] = s, r[2] = t, r[3] = e, r[4] = i, r[5] = e, r[6] = i, r[7] = s)
            },
            updateOffset: function() {
                var t = this.width / this.regionOriginalWidth * this.scaleX,
                    e = this.height / this.regionOriginalHeight * this.scaleY,
                    s = -this.width / 2 * this.scaleX + this.regionOffsetX * t,
                    n = -this.height / 2 * this.scaleY + this.regionOffsetY * e,
                    r = s + this.regionWidth * t,
                    o = n + this.regionHeight * e,
                    a = this.rotation * i.degRad,
                    h = Math.cos(a),
                    l = Math.sin(a),
                    d = s * h + this.x,
                    c = s * l,
                    u = n * h + this.y,
                    p = n * l,
                    f = r * h + this.x,
                    y = r * l,
                    x = o * h + this.y,
                    m = o * l,
                    g = this.offset;
                g[0] = d - p, g[1] = u + c, g[2] = d - m, g[3] = x + c, g[4] = f - m, g[5] = x + y, g[6] = f - p, g[7] = u + y
            },
            computeVertices: function(t, e, i, s) {
                t += i.worldX, e += i.worldY;
                var n = i.m00,
                    r = i.m01,
                    o = i.m10,
                    a = i.m11,
                    h = this.offset;
                s[0] = h[0] * n + h[1] * r + t, s[1] = h[0] * o + h[1] * a + e, s[2] = h[2] * n + h[3] * r + t, s[3] = h[2] * o + h[3] * a + e, s[4] = h[4] * n + h[5] * r + t, s[5] = h[4] * o + h[5] * a + e, s[6] = h[6] * n + h[7] * r + t, s[7] = h[6] * o + h[7] * a + e
            }
        }, i.MeshAttachment = function(t) {
            this.name = t
        }, i.MeshAttachment.prototype = {
            type: i.AttachmentType.mesh,
            vertices: null,
            uvs: null,
            regionUVs: null,
            triangles: null,
            hullLength: 0,
            r: 1,
            g: 1,
            b: 1,
            a: 1,
            path: null,
            rendererObject: null,
            regionU: 0,
            regionV: 0,
            regionU2: 0,
            regionV2: 0,
            regionRotate: !1,
            regionOffsetX: 0,
            regionOffsetY: 0,
            regionWidth: 0,
            regionHeight: 0,
            regionOriginalWidth: 0,
            regionOriginalHeight: 0,
            edges: null,
            width: 0,
            height: 0,
            updateUVs: function() {
                var t = this.regionU2 - this.regionU,
                    e = this.regionV2 - this.regionV,
                    s = this.regionUVs.length;
                if (this.uvs && this.uvs.length == s || (this.uvs = new i.Float32Array(s)), this.regionRotate)
                    for (var n = 0; s > n; n += 2) this.uvs[n] = this.regionU + this.regionUVs[n + 1] * t, this.uvs[n + 1] = this.regionV + e - this.regionUVs[n] * e;
                else
                    for (var n = 0; s > n; n += 2) this.uvs[n] = this.regionU + this.regionUVs[n] * t, this.uvs[n + 1] = this.regionV + this.regionUVs[n + 1] * e
            },
            computeWorldVertices: function(t, e, i, s) {
                var n = i.bone;
                t += n.worldX, e += n.worldY;
                var r = n.m00,
                    o = n.m01,
                    a = n.m10,
                    h = n.m11,
                    l = this.vertices,
                    d = l.length;
                i.attachmentVertices.length == d && (l = i.attachmentVertices);
                for (var c = 0; d > c; c += 2) {
                    var u = l[c],
                        p = l[c + 1];
                    s[c] = u * r + p * o + t, s[c + 1] = u * a + p * h + e
                }
            }
        }, i.SkinnedMeshAttachment = function(t) {
            this.name = t
        }, i.SkinnedMeshAttachment.prototype = {
            type: i.AttachmentType.skinnedmesh,
            bones: null,
            weights: null,
            uvs: null,
            regionUVs: null,
            triangles: null,
            hullLength: 0,
            r: 1,
            g: 1,
            b: 1,
            a: 1,
            path: null,
            rendererObject: null,
            regionU: 0,
            regionV: 0,
            regionU2: 0,
            regionV2: 0,
            regionRotate: !1,
            regionOffsetX: 0,
            regionOffsetY: 0,
            regionWidth: 0,
            regionHeight: 0,
            regionOriginalWidth: 0,
            regionOriginalHeight: 0,
            edges: null,
            width: 0,
            height: 0,
            updateUVs: function(t, e, s, n, r) {
                var o = this.regionU2 - this.regionU,
                    a = this.regionV2 - this.regionV,
                    h = this.regionUVs.length;
                if (this.uvs && this.uvs.length == h || (this.uvs = new i.Float32Array(h)), this.regionRotate)
                    for (var l = 0; h > l; l += 2) this.uvs[l] = this.regionU + this.regionUVs[l + 1] * o, this.uvs[l + 1] = this.regionV + a - this.regionUVs[l] * a;
                else
                    for (var l = 0; h > l; l += 2) this.uvs[l] = this.regionU + this.regionUVs[l] * o, this.uvs[l + 1] = this.regionV + this.regionUVs[l + 1] * a
            },
            computeWorldVertices: function(t, e, i, s) {
                var n, r, o, a, h, l, d, c = i.bone.skeleton.bones,
                    u = this.weights,
                    p = this.bones,
                    f = 0,
                    y = 0,
                    x = 0,
                    m = 0,
                    g = p.length;
                if (i.attachmentVertices.length)
                    for (var v = i.attachmentVertices; g > y; f += 2) {
                        for (r = 0, o = 0, n = p[y++] + y; n > y; y++, x += 3, m += 2) a = c[p[y]], h = u[x] + v[m], l = u[x + 1] + v[m + 1], d = u[x + 2], r += (h * a.m00 + l * a.m01 + a.worldX) * d, o += (h * a.m10 + l * a.m11 + a.worldY) * d;
                        s[f] = r + t, s[f + 1] = o + e
                    } else
                        for (; g > y; f += 2) {
                            for (r = 0, o = 0, n = p[y++] + y; n > y; y++, x += 3) a = c[p[y]], h = u[x], l = u[x + 1], d = u[x + 2], r += (h * a.m00 + l * a.m01 + a.worldX) * d, o += (h * a.m10 + l * a.m11 + a.worldY) * d;
                            s[f] = r + t, s[f + 1] = o + e
                        }
            }
        }, i.BoundingBoxAttachment = function(t) {
            this.name = t, this.vertices = []
        }, i.BoundingBoxAttachment.prototype = {
            type: i.AttachmentType.boundingbox,
            computeWorldVertices: function(t, e, i, s) {
                t += i.worldX, e += i.worldY;
                for (var n = i.m00, r = i.m01, o = i.m10, a = i.m11, h = this.vertices, l = 0, d = h.length; d > l; l += 2) {
                    var c = h[l],
                        u = h[l + 1];
                    s[l] = c * n + u * r + t, s[l + 1] = c * o + u * a + e
                }
            }
        }, i.AnimationStateData = function(t) {
            this.skeletonData = t, this.animationToMixTime = {}
        }, i.AnimationStateData.prototype = {
            defaultMix: 0,
            setMixByName: function(t, e, i) {
                var s = this.skeletonData.findAnimation(t);
                if (!s) throw "Animation not found: " + t;
                var n = this.skeletonData.findAnimation(e);
                if (!n) throw "Animation not found: " + e;
                this.setMix(s, n, i)
            },
            setMix: function(t, e, i) {
                this.animationToMixTime[t.name + ":" + e.name] = i
            },
            getMix: function(t, e) {
                var i = t.name + ":" + e.name;
                return this.animationToMixTime.hasOwnProperty(i) ? this.animationToMixTime[i] : this.defaultMix
            }
        }, i.TrackEntry = function() {}, i.TrackEntry.prototype = {
            next: null,
            previous: null,
            animation: null,
            loop: !1,
            delay: 0,
            time: 0,
            lastTime: -1,
            endTime: 0,
            timeScale: 1,
            mixTime: 0,
            mixDuration: 0,
            mix: 1,
            onStart: null,
            onEnd: null,
            onComplete: null,
            onEvent: null
        }, i.AnimationState = function(t) {
            this.data = t, this.tracks = [], this.events = []
        }, i.AnimationState.prototype = {
            onStart: null,
            onEnd: null,
            onComplete: null,
            onEvent: null,
            timeScale: 1,
            update: function(t) {
                t *= this.timeScale;
                for (var e = 0; e < this.tracks.length; e++) {
                    var i = this.tracks[e];
                    if (i) {
                        if (i.time += t * i.timeScale, i.previous) {
                            var s = t * i.previous.timeScale;
                            i.previous.time += s, i.mixTime += s
                        }
                        var n = i.next;
                        n ? (n.time = i.lastTime - n.delay, n.time >= 0 && this.setCurrent(e, n)) : !i.loop && i.lastTime >= i.endTime && this.clearTrack(e)
                    }
                }
            },
            apply: function(t) {
                for (var e = 0; e < this.tracks.length; e++) {
                    var i = this.tracks[e];
                    if (i) {
                        this.events.length = 0;
                        var s = i.time,
                            n = i.lastTime,
                            r = i.endTime,
                            o = i.loop;
                        !o && s > r && (s = r);
                        var a = i.previous;
                        if (a) {
                            var h = a.time;
                            !a.loop && h > a.endTime && (h = a.endTime), a.animation.apply(t, h, h, a.loop, null);
                            var l = i.mixTime / i.mixDuration * i.mix;
                            l >= 1 && (l = 1, i.previous = null), i.animation.mix(t, i.lastTime, s, o, this.events, l)
                        } else 1 == i.mix ? i.animation.apply(t, i.lastTime, s, o, this.events) : i.animation.mix(t, i.lastTime, s, o, this.events, i.mix);
                        for (var d = 0, c = this.events.length; c > d; d++) {
                            var u = this.events[d];
                            i.onEvent && i.onEvent(e, u), this.onEvent && this.onEvent(e, u)
                        }
                        if (o ? n % r > s % r : r > n && s >= r) {
                            var p = Math.floor(s / r);
                            i.onComplete && i.onComplete(e, p), this.onComplete && this.onComplete(e, p)
                        }
                        i.lastTime = i.time
                    }
                }
            },
            clearTracks: function() {
                for (var t = 0, e = this.tracks.length; e > t; t++) this.clearTrack(t);
                this.tracks.length = 0
            },
            clearTrack: function(t) {
                if (!(t >= this.tracks.length)) {
                    var e = this.tracks[t];
                    e && (e.onEnd && e.onEnd(t), this.onEnd && this.onEnd(t), this.tracks[t] = null)
                }
            },
            _expandToIndex: function(t) {
                if (t < this.tracks.length) return this.tracks[t];
                for (; t >= this.tracks.length;) this.tracks.push(null);
                return null
            },
            setCurrent: function(t, e) {
                var i = this._expandToIndex(t);
                if (i) {
                    var s = i.previous;
                    i.previous = null, i.onEnd && i.onEnd(t), this.onEnd && this.onEnd(t), e.mixDuration = this.data.getMix(i.animation, e.animation), e.mixDuration > 0 && (e.mixTime = 0, s && i.mixTime / i.mixDuration < .5 ? e.previous = s : e.previous = i)
                }
                this.tracks[t] = e, e.onStart && e.onStart(t), this.onStart && this.onStart(t)
            },
            setAnimationByName: function(t, e, i) {
                var s = this.data.skeletonData.findAnimation(e);
                if (!s) throw "Animation not found: " + e;
                return this.setAnimation(t, s, i)
            },
            setAnimation: function(t, e, s) {
                var n = new i.TrackEntry;
                return n.animation = e, n.loop = s, n.endTime = e.duration, this.setCurrent(t, n), n
            },
            addAnimationByName: function(t, e, i, s) {
                var n = this.data.skeletonData.findAnimation(e);
                if (!n) throw "Animation not found: " + e;
                return this.addAnimation(t, n, i, s)
            },
            addAnimation: function(t, e, s, n) {
                var r = new i.TrackEntry;
                r.animation = e, r.loop = s, r.endTime = e.duration;
                var o = this._expandToIndex(t);
                if (o) {
                    for (; o.next;) o = o.next;
                    o.next = r
                } else this.tracks[t] = r;
                return 0 >= n && (o ? n += o.endTime - this.data.getMix(o.animation, e) : n = 0), r.delay = n, r
            },
            getCurrent: function(t) {
                return t >= this.tracks.length ? null : this.tracks[t]
            }
        }, i.SkeletonJson = function(t) {
            this.attachmentLoader = t
        }, i.SkeletonJson.prototype = {
            scale: 1,
            readSkeletonData: function(t, e) {
                var s = new i.SkeletonData;
                s.name = e;
                var n = t.skeleton;
                n && (s.hash = n.hash, s.version = n.spine, s.width = n.width || 0, s.height = n.height || 0);
                for (var r = t.bones, o = 0, a = r.length; a > o; o++) {
                    var h = r[o],
                        l = null;
                    if (h.parent && (l = s.findBone(h.parent), !l)) throw "Parent bone not found: " + h.parent;
                    var d = new i.BoneData(h.name, l);
                    d.length = (h.length || 0) * this.scale, d.x = (h.x || 0) * this.scale, d.y = (h.y || 0) * this.scale, d.rotation = h.rotation || 0, d.scaleX = h.hasOwnProperty("scaleX") ? h.scaleX : 1, d.scaleY = h.hasOwnProperty("scaleY") ? h.scaleY : 1, d.inheritScale = h.hasOwnProperty("inheritScale") ? h.inheritScale : !0, d.inheritRotation = h.hasOwnProperty("inheritRotation") ? h.inheritRotation : !0, s.bones.push(d)
                }
                var c = t.ik;
                if (c)
                    for (var o = 0, a = c.length; a > o; o++) {
                        for (var u = c[o], p = new i.IkConstraintData(u.name), r = u.bones, f = 0, y = r.length; y > f; f++) {
                            var x = s.findBone(r[f]);
                            if (!x) throw "IK bone not found: " + r[f];
                            p.bones.push(x)
                        }
                        if (p.target = s.findBone(u.target), !p.target) throw "Target bone not found: " + u.target;
                        p.bendDirection = !u.hasOwnProperty("bendPositive") || u.bendPositive ? 1 : -1, p.mix = u.hasOwnProperty("mix") ? u.mix : 1, s.ikConstraints.push(p)
                    }
                for (var m = t.slots, o = 0, a = m.length; a > o; o++) {
                    var g = m[o],
                        d = s.findBone(g.bone);
                    if (!d) throw "Slot bone not found: " + g.bone;
                    var v = new i.SlotData(g.name, d),
                        b = g.color;
                    b && (v.r = this.toColor(b, 0), v.g = this.toColor(b, 1), v.b = this.toColor(b, 2), v.a = this.toColor(b, 3)), v.attachmentName = g.attachment, v.additiveBlending = g.additive && "true" == g.additive, s.slots.push(v)
                }
                var _ = t.skins;
                for (var S in _)
                    if (_.hasOwnProperty(S)) {
                        var w = _[S],
                            T = new i.Skin(S);
                        for (var C in w)
                            if (w.hasOwnProperty(C)) {
                                var E = s.findSlotIndex(C),
                                    A = w[C];
                                for (var P in A)
                                    if (A.hasOwnProperty(P)) {
                                        var L = this.readAttachment(T, P, A[P]);
                                        L && T.addAttachment(E, P, L)
                                    }
                            }
                        s.skins.push(T), "default" == T.name && (s.defaultSkin = T)
                    }
                var R = t.events;
                for (var I in R)
                    if (R.hasOwnProperty(I)) {
                        var G = R[I],
                            M = new i.EventData(I);
                        M.intValue = G["int"] || 0, M.floatValue = G["float"] || 0, M.stringValue = G.string || null, s.events.push(M)
                    }
                var O = t.animations;
                for (var D in O) O.hasOwnProperty(D) && this.readAnimation(D, O[D], s);
                return s
            },
            readAttachment: function(t, e, s) {
                e = s.name || e;
                var n = i.AttachmentType[s.type || "region"],
                    r = s.path || e,
                    o = this.scale;
                if (n == i.AttachmentType.region) {
                    var a = this.attachmentLoader.newRegionAttachment(t, e, r);
                    if (!a) return null;
                    a.path = r, a.x = (s.x || 0) * o, a.y = (s.y || 0) * o, a.scaleX = s.hasOwnProperty("scaleX") ? s.scaleX : 1, a.scaleY = s.hasOwnProperty("scaleY") ? s.scaleY : 1, a.rotation = s.rotation || 0, a.width = (s.width || 0) * o, a.height = (s.height || 0) * o;
                    var h = s.color;
                    return h && (a.r = this.toColor(h, 0), a.g = this.toColor(h, 1), a.b = this.toColor(h, 2), a.a = this.toColor(h, 3)), a.updateOffset(), a
                }
                if (n == i.AttachmentType.mesh) {
                    var l = this.attachmentLoader.newMeshAttachment(t, e, r);
                    return l ? (l.path = r, l.vertices = this.getFloatArray(s, "vertices", o), l.triangles = this.getIntArray(s, "triangles"), l.regionUVs = this.getFloatArray(s, "uvs", 1), l.updateUVs(), h = s.color, h && (l.r = this.toColor(h, 0), l.g = this.toColor(h, 1), l.b = this.toColor(h, 2), l.a = this.toColor(h, 3)), l.hullLength = 2 * (s.hull || 0), s.edges && (l.edges = this.getIntArray(s, "edges")), l.width = (s.width || 0) * o, l.height = (s.height || 0) * o, l) : null
                }
                if (n == i.AttachmentType.skinnedmesh) {
                    var l = this.attachmentLoader.newSkinnedMeshAttachment(t, e, r);
                    if (!l) return null;
                    l.path = r;
                    for (var d = this.getFloatArray(s, "uvs", 1), c = this.getFloatArray(s, "vertices", 1), u = [], p = [], f = 0, y = c.length; y > f;) {
                        var x = 0 | c[f++];
                        p[p.length] = x;
                        for (var m = f + 4 * x; m > f;) p[p.length] = c[f], u[u.length] = c[f + 1] * o, u[u.length] = c[f + 2] * o, u[u.length] = c[f + 3], f += 4
                    }
                    return l.bones = p, l.weights = u, l.triangles = this.getIntArray(s, "triangles"), l.regionUVs = d, l.updateUVs(), h = s.color, h && (l.r = this.toColor(h, 0), l.g = this.toColor(h, 1), l.b = this.toColor(h, 2), l.a = this.toColor(h, 3)), l.hullLength = 2 * (s.hull || 0), s.edges && (l.edges = this.getIntArray(s, "edges")), l.width = (s.width || 0) * o, l.height = (s.height || 0) * o, l
                }
                if (n == i.AttachmentType.boundingbox) {
                    for (var g = this.attachmentLoader.newBoundingBoxAttachment(t, e), c = s.vertices, f = 0, y = c.length; y > f; f++) g.vertices.push(c[f] * o);
                    return g
                }
                throw "Unknown attachment type: " + n
            },
            readAnimation: function(t, e, s) {
                var n = [],
                    r = 0,
                    o = e.slots;
                for (var a in o)
                    if (o.hasOwnProperty(a)) {
                        var h = o[a],
                            l = s.findSlotIndex(a);
                        for (var d in h)
                            if (h.hasOwnProperty(d)) {
                                var c = h[d];
                                if ("color" == d) {
                                    var u = new i.ColorTimeline(c.length);
                                    u.slotIndex = l;
                                    for (var p = 0, f = 0, y = c.length; y > f; f++) {
                                        var x = c[f],
                                            m = x.color,
                                            g = this.toColor(m, 0),
                                            v = this.toColor(m, 1),
                                            b = this.toColor(m, 2),
                                            _ = this.toColor(m, 3);
                                        u.setFrame(p, x.time, g, v, b, _), this.readCurve(u, p, x), p++
                                    }
                                    n.push(u), r = Math.max(r, u.frames[5 * u.getFrameCount() - 5])
                                } else {
                                    if ("attachment" != d) throw "Invalid timeline type for a slot: " + d + " (" + a + ")";
                                    var u = new i.AttachmentTimeline(c.length);
                                    u.slotIndex = l;
                                    for (var p = 0, f = 0, y = c.length; y > f; f++) {
                                        var x = c[f];
                                        u.setFrame(p++, x.time, x.name)
                                    }
                                    n.push(u), r = Math.max(r, u.frames[u.getFrameCount() - 1])
                                }
                            }
                    }
                var S = e.bones;
                for (var w in S)
                    if (S.hasOwnProperty(w)) {
                        var T = s.findBoneIndex(w);
                        if (-1 == T) throw "Bone not found: " + w;
                        var C = S[w];
                        for (var d in C)
                            if (C.hasOwnProperty(d)) {
                                var c = C[d];
                                if ("rotate" == d) {
                                    var u = new i.RotateTimeline(c.length);
                                    u.boneIndex = T;
                                    for (var p = 0, f = 0, y = c.length; y > f; f++) {
                                        var x = c[f];
                                        u.setFrame(p, x.time, x.angle), this.readCurve(u, p, x), p++
                                    }
                                    n.push(u), r = Math.max(r, u.frames[2 * u.getFrameCount() - 2])
                                } else if ("translate" == d || "scale" == d) {
                                    var u, E = 1;
                                    "scale" == d ? u = new i.ScaleTimeline(c.length) : (u = new i.TranslateTimeline(c.length), E = this.scale), u.boneIndex = T;
                                    for (var p = 0, f = 0, y = c.length; y > f; f++) {
                                        var x = c[f],
                                            A = (x.x || 0) * E,
                                            P = (x.y || 0) * E;
                                        u.setFrame(p, x.time, A, P), this.readCurve(u, p, x), p++
                                    }
                                    n.push(u), r = Math.max(r, u.frames[3 * u.getFrameCount() - 3])
                                } else {
                                    if ("flipX" != d && "flipY" != d) throw "Invalid timeline type for a bone: " + d + " (" + w + ")";
                                    var A = "flipX" == d,
                                        u = A ? new i.FlipXTimeline(c.length) : new i.FlipYTimeline(c.length);
                                    u.boneIndex = T;
                                    for (var L = A ? "x" : "y", p = 0, f = 0, y = c.length; y > f; f++) {
                                        var x = c[f];
                                        u.setFrame(p, x.time, x[L] || !1), p++
                                    }
                                    n.push(u), r = Math.max(r, u.frames[2 * u.getFrameCount() - 2])
                                }
                            }
                    }
                var R = e.ik;
                for (var I in R)
                    if (R.hasOwnProperty(I)) {
                        var G = s.findIkConstraint(I),
                            c = R[I],
                            u = new i.IkConstraintTimeline(c.length);
                        u.ikConstraintIndex = s.ikConstraints.indexOf(G);
                        for (var p = 0, f = 0, y = c.length; y > f; f++) {
                            var x = c[f],
                                M = x.hasOwnProperty("mix") ? x.mix : 1,
                                O = !x.hasOwnProperty("bendPositive") || x.bendPositive ? 1 : -1;
                            u.setFrame(p, x.time, M, O), this.readCurve(u, p, x), p++
                        }
                        n.push(u), r = Math.max(r, u.frames[3 * u.frameCount - 3])
                    }
                var D = e.ffd;
                for (var F in D) {
                    var B = s.findSkin(F),
                        h = D[F];
                    for (a in h) {
                        var l = s.findSlotIndex(a),
                            k = h[a];
                        for (var j in k) {
                            var c = k[j],
                                u = new i.FfdTimeline(c.length),
                                N = B.getAttachment(l, j);
                            if (!N) throw "FFD attachment not found: " + j;
                            u.slotIndex = l, u.attachment = N;
                            var W, U = N.type == i.AttachmentType.mesh;
                            W = U ? N.vertices.length : N.weights.length / 3 * 2;
                            for (var p = 0, f = 0, y = c.length; y > f; f++) {
                                var H, x = c[f];
                                if (x.vertices) {
                                    var X = x.vertices,
                                        H = [];
                                    H.length = W;
                                    var V = x.offset || 0,
                                        Y = X.length;
                                    if (1 == this.scale)
                                        for (var q = 0; Y > q; q++) H[q + V] = X[q];
                                    else
                                        for (var q = 0; Y > q; q++) H[q + V] = X[q] * this.scale;
                                    if (U)
                                        for (var z = N.vertices, q = 0, Y = H.length; Y > q; q++) H[q] += z[q]
                                } else U ? H = N.vertices : (H = [], H.length = W);
                                u.setFrame(p, x.time, H), this.readCurve(u, p, x), p++
                            }
                            n[n.length] = u, r = Math.max(r, u.frames[u.frameCount - 1])
                        }
                    }
                }
                var K = e.drawOrder;
                if (K || (K = e.draworder), K) {
                    for (var u = new i.DrawOrderTimeline(K.length), J = s.slots.length, p = 0, f = 0, y = K.length; y > f; f++) {
                        var Q = K[f],
                            Z = null;
                        if (Q.offsets) {
                            Z = [], Z.length = J;
                            for (var q = J - 1; q >= 0; q--) Z[q] = -1;
                            var $ = Q.offsets,
                                tt = [];
                            tt.length = J - $.length;
                            for (var et = 0, it = 0, q = 0, Y = $.length; Y > q; q++) {
                                var st = $[q],
                                    l = s.findSlotIndex(st.slot);
                                if (-1 == l) throw "Slot not found: " + st.slot;
                                for (; et != l;) tt[it++] = et++;
                                Z[et + st.offset] = et++
                            }
                            for (; J > et;) tt[it++] = et++;
                            for (var q = J - 1; q >= 0; q--) - 1 == Z[q] && (Z[q] = tt[--it])
                        }
                        u.setFrame(p++, Q.time, Z)
                    }
                    n.push(u), r = Math.max(r, u.frames[u.getFrameCount() - 1])
                }
                var nt = e.events;
                if (nt) {
                    for (var u = new i.EventTimeline(nt.length), p = 0, f = 0, y = nt.length; y > f; f++) {
                        var rt = nt[f],
                            ot = s.findEvent(rt.name);
                        if (!ot) throw "Event not found: " + rt.name;
                        var at = new i.Event(ot);
                        at.intValue = rt.hasOwnProperty("int") ? rt["int"] : ot.intValue, at.floatValue = rt.hasOwnProperty("float") ? rt["float"] : ot.floatValue, at.stringValue = rt.hasOwnProperty("string") ? rt.string : ot.stringValue, u.setFrame(p++, rt.time, at)
                    }
                    n.push(u), r = Math.max(r, u.frames[u.getFrameCount() - 1])
                }
                s.animations.push(new i.Animation(t, n, r))
            },
            readCurve: function(t, e, i) {
                var s = i.curve;
                s ? "stepped" == s ? t.curves.setStepped(e) : s instanceof Array && t.curves.setCurve(e, s[0], s[1], s[2], s[3]) : t.curves.setLinear(e)
            },
            toColor: function(t, e) {
                if (8 != t.length) throw "Color hexidecimal length must be 8, recieved: " + t;
                return parseInt(t.substring(2 * e, 2 * e + 2), 16) / 255
            },
            getFloatArray: function(t, e, s) {
                var n = t[e],
                    r = new i.Float32Array(n.length),
                    o = 0,
                    a = n.length;
                if (1 == s)
                    for (; a > o; o++) r[o] = n[o];
                else
                    for (; a > o; o++) r[o] = n[o] * s;
                return r
            },
            getIntArray: function(t, e) {
                for (var s = t[e], n = new i.Uint16Array(s.length), r = 0, o = s.length; o > r; r++) n[r] = 0 | s[r];
                return n
            }
        }, i.Atlas = function(t, e) {
            this.textureLoader = e, this.pages = [], this.regions = [];
            var s = new i.AtlasReader(t),
                n = [];
            n.length = 4;
            for (var r = null;;) {
                var o = s.readLine();
                if (null === o) break;
                if (o = s.trim(o), o.length)
                    if (r) {
                        var a = new i.AtlasRegion;
                        a.name = o, a.page = r, a.rotate = "true" == s.readValue(), s.readTuple(n);
                        var h = parseInt(n[0]),
                            l = parseInt(n[1]);
                        s.readTuple(n);
                        var d = parseInt(n[0]),
                            c = parseInt(n[1]);
                        a.u = h / r.width, a.v = l / r.height, a.rotate ? (a.u2 = (h + c) / r.width, a.v2 = (l + d) / r.height) : (a.u2 = (h + d) / r.width, a.v2 = (l + c) / r.height), a.x = h, a.y = l, a.width = Math.abs(d), a.height = Math.abs(c), 4 == s.readTuple(n) && (a.splits = [parseInt(n[0]), parseInt(n[1]), parseInt(n[2]), parseInt(n[3])], 4 == s.readTuple(n) && (a.pads = [parseInt(n[0]), parseInt(n[1]), parseInt(n[2]), parseInt(n[3])], s.readTuple(n))), a.originalWidth = parseInt(n[0]), a.originalHeight = parseInt(n[1]), s.readTuple(n), a.offsetX = parseInt(n[0]), a.offsetY = parseInt(n[1]), a.index = parseInt(s.readValue()), this.regions.push(a)
                    } else {
                        r = new i.AtlasPage, r.name = o, 2 == s.readTuple(n) && (r.width = parseInt(n[0]), r.height = parseInt(n[1]), s.readTuple(n)), r.format = i.Atlas.Format[n[0]], s.readTuple(n), r.minFilter = i.Atlas.TextureFilter[n[0]], r.magFilter = i.Atlas.TextureFilter[n[1]];
                        var u = s.readValue();
                        r.uWrap = i.Atlas.TextureWrap.clampToEdge, r.vWrap = i.Atlas.TextureWrap.clampToEdge, "x" == u ? r.uWrap = i.Atlas.TextureWrap.repeat : "y" == u ? r.vWrap = i.Atlas.TextureWrap.repeat : "xy" == u && (r.uWrap = r.vWrap = i.Atlas.TextureWrap.repeat), e.load(r, o, this), this.pages.push(r)
                    }
                else r = null
            }
        }, i.Atlas.prototype = {
            findRegion: function(t) {
                for (var e = this.regions, i = 0, s = e.length; s > i; i++)
                    if (e[i].name == t) return e[i];
                return null
            },
            dispose: function() {
                for (var t = this.pages, e = 0, i = t.length; i > e; e++) this.textureLoader.unload(t[e].rendererObject)
            },
            updateUVs: function(t) {
                for (var e = this.regions, i = 0, s = e.length; s > i; i++) {
                    var n = e[i];
                    n.page == t && (n.u = n.x / t.width, n.v = n.y / t.height, n.rotate ? (n.u2 = (n.x + n.height) / t.width, n.v2 = (n.y + n.width) / t.height) : (n.u2 = (n.x + n.width) / t.width, n.v2 = (n.y + n.height) / t.height))
                }
            }
        }, i.Atlas.Format = {
            alpha: 0,
            intensity: 1,
            luminanceAlpha: 2,
            rgb565: 3,
            rgba4444: 4,
            rgb888: 5,
            rgba8888: 6
        }, i.Atlas.TextureFilter = {
            nearest: 0,
            linear: 1,
            mipMap: 2,
            mipMapNearestNearest: 3,
            mipMapLinearNearest: 4,
            mipMapNearestLinear: 5,
            mipMapLinearLinear: 6
        }, i.Atlas.TextureWrap = {
            mirroredRepeat: 0,
            clampToEdge: 1,
            repeat: 2
        }, i.AtlasPage = function() {}, i.AtlasPage.prototype = {
            name: null,
            format: null,
            minFilter: null,
            magFilter: null,
            uWrap: null,
            vWrap: null,
            rendererObject: null,
            width: 0,
            height: 0
        }, i.AtlasRegion = function() {}, i.AtlasRegion.prototype = {
            page: null,
            name: null,
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            u: 0,
            v: 0,
            u2: 0,
            v2: 0,
            offsetX: 0,
            offsetY: 0,
            originalWidth: 0,
            originalHeight: 0,
            index: 0,
            rotate: !1,
            splits: null,
            pads: null
        }, i.AtlasReader = function(t) {
            this.lines = t.split(/\r\n|\r|\n/)
        }, i.AtlasReader.prototype = {
            index: 0,
            trim: function(t) {
                return t.replace(/^\s+|\s+$/g, "")
            },
            readLine: function() {
                return this.index >= this.lines.length ? null : this.lines[this.index++]
            },
            readValue: function() {
                var t = this.readLine(),
                    e = t.indexOf(":");
                if (-1 == e) throw "Invalid line: " + t;
                return this.trim(t.substring(e + 1))
            },
            readTuple: function(t) {
                var e = this.readLine(),
                    i = e.indexOf(":");
                if (-1 == i) throw "Invalid line: " + e;
                for (var s = 0, n = i + 1; 3 > s; s++) {
                    var r = e.indexOf(",", n);
                    if (-1 == r) break;
                    t[s] = this.trim(e.substr(n, r - n)), n = r + 1
                }
                return t[s] = this.trim(e.substring(n)), s + 1
            }
        }, i.AtlasAttachmentLoader = function(t) {
            this.atlas = t
        }, i.AtlasAttachmentLoader.prototype = {
            newRegionAttachment: function(t, e, s) {
                var n = this.atlas.findRegion(s);
                if (!n) throw "Region not found in atlas: " + s + " (region attachment: " + e + ")";
                var r = new i.RegionAttachment(e);
                return r.rendererObject = n, r.setUVs(n.u, n.v, n.u2, n.v2, n.rotate), r.regionOffsetX = n.offsetX, r.regionOffsetY = n.offsetY, r.regionWidth = n.width, r.regionHeight = n.height, r.regionOriginalWidth = n.originalWidth, r.regionOriginalHeight = n.originalHeight, r
            },
            newMeshAttachment: function(t, e, s) {
                var n = this.atlas.findRegion(s);
                if (!n) throw "Region not found in atlas: " + s + " (mesh attachment: " + e + ")";
                var r = new i.MeshAttachment(e);
                return r.rendererObject = n, r.regionU = n.u, r.regionV = n.v, r.regionU2 = n.u2, r.regionV2 = n.v2, r.regionRotate = n.rotate, r.regionOffsetX = n.offsetX, r.regionOffsetY = n.offsetY, r.regionWidth = n.width, r.regionHeight = n.height, r.regionOriginalWidth = n.originalWidth, r.regionOriginalHeight = n.originalHeight, r
            },
            newSkinnedMeshAttachment: function(t, e, s) {
                var n = this.atlas.findRegion(s);
                if (!n) throw "Region not found in atlas: " + s + " (skinned mesh attachment: " + e + ")";
                var r = new i.SkinnedMeshAttachment(e);
                return r.rendererObject = n, r.regionU = n.u, r.regionV = n.v, r.regionU2 = n.u2, r.regionV2 = n.v2, r.regionRotate = n.rotate, r.regionOffsetX = n.offsetX, r.regionOffsetY = n.offsetY, r.regionWidth = n.width, r.regionHeight = n.height, r.regionOriginalWidth = n.originalWidth, r.regionOriginalHeight = n.originalHeight, r
            },
            newBoundingBoxAttachment: function(t, e) {
                return new i.BoundingBoxAttachment(e)
            }
        }, i.SkeletonBounds = function() {
            this.polygonPool = [], this.polygons = [], this.boundingBoxes = []
        }, i.SkeletonBounds.prototype = {
            minX: 0,
            minY: 0,
            maxX: 0,
            maxY: 0,
            update: function(t, e) {
                var s = t.slots,
                    n = s.length,
                    r = t.x,
                    o = t.y,
                    a = this.boundingBoxes,
                    h = this.polygonPool,
                    l = this.polygons;
                a.length = 0;
                for (var d = 0, c = l.length; c > d; d++) h.push(l[d]);
                l.length = 0;
                for (var d = 0; n > d; d++) {
                    var u = s[d],
                        p = u.attachment;
                    if (p.type == i.AttachmentType.boundingbox) {
                        a.push(p);
                        var f, y = h.length;
                        y > 0 ? (f = h[y - 1], h.splice(y - 1, 1)) : f = [], l.push(f), f.length = p.vertices.length, p.computeWorldVertices(r, o, u.bone, f)
                    }
                }
                e && this.aabbCompute()
            },
            aabbCompute: function() {
                for (var t = this.polygons, e = Number.MAX_VALUE, i = Number.MAX_VALUE, s = Number.MIN_VALUE, n = Number.MIN_VALUE, r = 0, o = t.length; o > r; r++)
                    for (var a = t[r], h = 0, l = a.length; l > h; h += 2) {
                        var d = a[h],
                            c = a[h + 1];
                        e = Math.min(e, d), i = Math.min(i, c), s = Math.max(s, d), n = Math.max(n, c)
                    }
                this.minX = e, this.minY = i, this.maxX = s, this.maxY = n
            },
            aabbContainsPoint: function(t, e) {
                return t >= this.minX && t <= this.maxX && e >= this.minY && e <= this.maxY
            },
            aabbIntersectsSegment: function(t, e, i, s) {
                var n = this.minX,
                    r = this.minY,
                    o = this.maxX,
                    a = this.maxY;
                if (n >= t && n >= i || r >= e && r >= s || t >= o && i >= o || e >= a && s >= a) return !1;
                var h = (s - e) / (i - t),
                    l = h * (n - t) + e;
                if (l > r && a > l) return !0;
                if (l = h * (o - t) + e, l > r && a > l) return !0;
                var d = (r - e) / h + t;
                return d > n && o > d ? !0 : (d = (a - e) / h + t, d > n && o > d ? !0 : !1)
            },
            aabbIntersectsSkeleton: function(t) {
                return this.minX < t.maxX && this.maxX > t.minX && this.minY < t.maxY && this.maxY > t.minY
            },
            containsPoint: function(t, e) {
                for (var i = this.polygons, s = 0, n = i.length; n > s; s++)
                    if (this.polygonContainsPoint(i[s], t, e)) return this.boundingBoxes[s];
                return null
            },
            intersectsSegment: function(t, e, i, s) {
                for (var n = this.polygons, r = 0, o = n.length; o > r; r++)
                    if (n[r].intersectsSegment(t, e, i, s)) return this.boundingBoxes[r];
                return null
            },
            polygonContainsPoint: function(t, e, i) {
                for (var s = t.length, n = s - 2, r = !1, o = 0; s > o; o += 2) {
                    var a = t[o + 1],
                        h = t[n + 1];
                    if (i > a && h >= i || i > h && a >= i) {
                        var l = t[o];
                        l + (i - a) / (h - a) * (t[n] - l) < e && (r = !r)
                    }
                    n = o
                }
                return r
            },
            polygonIntersectsSegment: function(t, e, i, s, n) {
                for (var r = t.length, o = e - s, a = i - n, h = e * n - i * s, l = t[r - 2], d = t[r - 1], c = 0; r > c; c += 2) {
                    var u = t[c],
                        p = t[c + 1],
                        f = l * p - d * u,
                        y = l - u,
                        x = d - p,
                        m = o * x - a * y,
                        g = (h * y - o * f) / m;
                    if ((g >= l && u >= g || g >= u && l >= g) && (g >= e && s >= g || g >= s && e >= g)) {
                        var v = (h * x - a * f) / m;
                        if ((v >= d && p >= v || v >= p && d >= v) && (v >= i && n >= v || v >= n && i >= v)) return !0
                    }
                    l = u, d = p
                }
                return !1
            },
            getPolygon: function(t) {
                var e = this.boundingBoxes.indexOf(t);
                return -1 == e ? null : this.polygons[e]
            },
            getWidth: function() {
                return this.maxX - this.minX
            },
            getHeight: function() {
                return this.maxY - this.minY
            }
        }, i.Bone.yDown = !0, e.AnimCache = {}, e.SpineTextureLoader = function(t, i) {
            e.EventTarget.call(this), this.basePath = t, this.crossorigin = i, this.loadingCount = 0
        }, e.SpineTextureLoader.prototype = e.SpineTextureLoader, e.SpineTextureLoader.prototype.load = function(t, i) {
            if (t.rendererObject = e.BaseTexture.fromImage(this.basePath + "/" + i, this.crossorigin), !t.rendererObject.hasLoaded) {
                var s = this;
                ++s.loadingCount, t.rendererObject.addEventListener("loaded", function() {
                    --s.loadingCount, s.dispatchEvent({
                        type: "loadedBaseTexture",
                        content: s
                    })
                })
            }
        }, e.SpineTextureLoader.prototype.unload = function(t) {
            t.destroy(!0)
        }, e.Spine = function(t) {
            if (e.DisplayObjectContainer.call(this), this.spineData = e.AnimCache[t], !this.spineData) throw new Error("Spine data must be preloaded using PIXI.SpineLoader or PIXI.AssetLoader: " + t);
            this.skeleton = new i.Skeleton(this.spineData), this.skeleton.updateWorldTransform(), this.stateData = new i.AnimationStateData(this.spineData), this.state = new i.AnimationState(this.stateData), this.slotContainers = [];
            for (var s = 0, n = this.skeleton.drawOrder.length; n > s; s++) {
                var r = this.skeleton.drawOrder[s],
                    o = r.attachment,
                    a = new e.DisplayObjectContainer;
                if (this.slotContainers.push(a), this.addChild(a), o instanceof i.RegionAttachment) {
                    var h = o.rendererObject.name,
                        l = this.createSprite(r, o);
                    r.currentSprite = l, r.currentSpriteName = h, a.addChild(l)
                } else {
                    if (!(o instanceof i.MeshAttachment)) continue;
                    var d = this.createMesh(r, o);
                    r.currentMesh = d, r.currentMeshName = o.name, a.addChild(d)
                }
            }
            this.autoUpdate = !0
        }, e.Spine.prototype = Object.create(e.DisplayObjectContainer.prototype), e.Spine.prototype.constructor = e.Spine, Object.defineProperty(e.Spine.prototype, "autoUpdate", {
            get: function() {
                return this.updateTransform === e.Spine.prototype.autoUpdateTransform
            },
            set: function(t) {
                this.updateTransform = t ? e.Spine.prototype.autoUpdateTransform : e.DisplayObjectContainer.prototype.updateTransform
            }
        }), e.Spine.prototype.update = function(t) {
            this.state.update(t), this.state.apply(this.skeleton), this.skeleton.updateWorldTransform();
            for (var s = this.skeleton.drawOrder, n = 0, r = s.length; r > n; n++) {
                var o = s[n],
                    a = o.attachment,
                    h = this.slotContainers[n];
                if (a) {
                    var l = a.type;
                    if (l === i.AttachmentType.region) {
                        if (a.rendererObject && (!o.currentSpriteName || o.currentSpriteName !== a.name)) {
                            var d = a.rendererObject.name;
                            if (void 0 !== o.currentSprite && (o.currentSprite.visible = !1), o.sprites = o.sprites || {}, void 0 !== o.sprites[d]) o.sprites[d].visible = !0;
                            else {
                                var c = this.createSprite(o, a);
                                h.addChild(c)
                            }
                            o.currentSprite = o.sprites[d], o.currentSpriteName = d
                        }
                        var u = o.bone;
                        h.position.x = u.worldX + a.x * u.m00 + a.y * u.m01, h.position.y = u.worldY + a.x * u.m10 + a.y * u.m11, h.scale.x = u.worldScaleX, h.scale.y = u.worldScaleY, h.rotation = -(o.bone.worldRotation * i.degRad), o.currentSprite.tint = e.rgb2hex([o.r, o.g, o.b])
                    } else {
                        if (l !== i.AttachmentType.skinnedmesh) {
                            h.visible = !1;
                            continue
                        }
                        if (!o.currentMeshName || o.currentMeshName !== a.name) {
                            var p = a.name;
                            if (void 0 !== o.currentMesh && (o.currentMesh.visible = !1), o.meshes = o.meshes || {}, void 0 !== o.meshes[p]) o.meshes[p].visible = !0;
                            else {
                                var f = this.createMesh(o, a);
                                h.addChild(f)
                            }
                            o.currentMesh = o.meshes[p], o.currentMeshName = p
                        }
                        a.computeWorldVertices(o.bone.skeleton.x, o.bone.skeleton.y, o, o.currentMesh.vertices)
                    }
                    h.visible = !0, h.alpha = o.a
                } else h.visible = !1
            }
        }, e.Spine.prototype.autoUpdateTransform = function() {
            this.lastTime = this.lastTime || Date.now();
            var t = .001 * (Date.now() - this.lastTime);
            this.lastTime = Date.now(), this.update(t), e.DisplayObjectContainer.prototype.updateTransform.call(this)
        }, e.Spine.prototype.createSprite = function(t, s) {
            var n = s.rendererObject,
                r = n.page.rendererObject,
                o = new e.Rectangle(n.x, n.y, n.rotate ? n.height : n.width, n.rotate ? n.width : n.height),
                a = new e.Texture(r, o),
                h = new e.Sprite(a),
                l = n.rotate ? .5 * Math.PI : 0;
            return h.scale.set(n.width / n.originalWidth, n.height / n.originalHeight), h.rotation = l - s.rotation * i.degRad, h.anchor.x = h.anchor.y = .5, t.sprites = t.sprites || {}, t.sprites[n.name] = h, h
        }, e.Spine.prototype.createMesh = function(t, i) {
            var s = i.rendererObject,
                n = s.page.rendererObject,
                r = new e.Texture(n),
                o = new e.Strip(r);
            return o.drawMode = e.Strip.DrawModes.TRIANGLES, o.canvasPadding = 1.5, o.vertices = new e.Float32Array(i.uvs.length), o.uvs = i.uvs, o.indices = i.triangles, t.meshes = t.meshes || {}, t.meshes[i.name] = o, o
        }, e.BaseTextureCache = {}, e.BaseTextureCacheIdGenerator = 0, e.BaseTexture = function(t, i) {
            if (this.resolution = 1, this.width = 100, this.height = 100, this.scaleMode = i || e.scaleModes.DEFAULT, this.hasLoaded = !1, this.source = t, this._UID = e._UID++, this.premultipliedAlpha = !0, this._glTextures = [], this.mipmap = !1, this._dirty = [!0, !0, !0, !0], t) {
                if ((this.source.complete || this.source.getContext) && this.source.width && this.source.height) this.hasLoaded = !0, this.width = this.source.naturalWidth || this.source.width, this.height = this.source.naturalHeight || this.source.height, this.dirty();
                else {
                    var s = this;
                    this.source.onload = function() {
                        s.hasLoaded = !0, s.width = s.source.naturalWidth || s.source.width, s.height = s.source.naturalHeight || s.source.height, s.dirty(), s.dispatchEvent({
                            type: "loaded",
                            content: s
                        })
                    }, this.source.onerror = function() {
                        s.dispatchEvent({
                            type: "error",
                            content: s
                        })
                    }
                }
                this.imageUrl = null, this._powerOf2 = !1
            }
        }, e.BaseTexture.prototype.constructor = e.BaseTexture, e.EventTarget.mixin(e.BaseTexture.prototype), e.BaseTexture.prototype.destroy = function() {
            this.imageUrl ? (delete e.BaseTextureCache[this.imageUrl], delete e.TextureCache[this.imageUrl], this.imageUrl = null, navigator.isCocoonJS || (this.source.src = "")) : this.source && this.source._pixiId && delete e.BaseTextureCache[this.source._pixiId], this.source = null, this.unloadFromGPU()
        }, e.BaseTexture.prototype.updateSourceImage = function(t) {
            this.hasLoaded = !1, this.source.src = null, this.source.src = t
        }, e.BaseTexture.prototype.dirty = function() {
            for (var t = 0; t < this._glTextures.length; t++) this._dirty[t] = !0
        }, e.BaseTexture.prototype.unloadFromGPU = function() {
            this.dirty();
            for (var t = this._glTextures.length - 1; t >= 0; t--) {
                var i = this._glTextures[t],
                    s = e.glContexts[t];
                s && i && s.deleteTexture(i)
            }
            this._glTextures.length = 0, this.dirty()
        }, e.BaseTexture.fromImage = function(t, i, s) {
            var n = e.BaseTextureCache[t];
            if (void 0 === i && -1 === t.indexOf("data:") && (i = !0), !n) {
                var r = new Image;
                i && (r.crossOrigin = ""), r.src = t, n = new e.BaseTexture(r, s), n.imageUrl = t, e.BaseTextureCache[t] = n, -1 !== t.indexOf(e.RETINA_PREFIX + ".") && (n.resolution = 2)
            }
            return n
        }, e.BaseTexture.fromCanvas = function(t, i) {
            t._pixiId || (t._pixiId = "canvas_" + e.TextureCacheIdGenerator++);
            var s = e.BaseTextureCache[t._pixiId];
            return s || (s = new e.BaseTexture(t, i), e.BaseTextureCache[t._pixiId] = s), s
        }, e.TextureCache = {}, e.FrameCache = {}, e.TextureCacheIdGenerator = 0, e.Texture = function(t, i, s, n) {
            this.noFrame = !1, i || (this.noFrame = !0, i = new e.Rectangle(0, 0, 1, 1)), t instanceof e.Texture && (t = t.baseTexture), this.baseTexture = t, this.frame = i, this.trim = n, this.valid = !1, this.requiresUpdate = !1, this._uvs = null, this.width = 0, this.height = 0, this.crop = s || new e.Rectangle(0, 0, 1, 1), t.hasLoaded ? (this.noFrame && (i = new e.Rectangle(0, 0, t.width, t.height)), this.setFrame(i)) : t.addEventListener("loaded", this.onBaseTextureLoaded.bind(this))
        }, e.Texture.prototype.constructor = e.Texture, e.EventTarget.mixin(e.Texture.prototype), e.Texture.prototype.onBaseTextureLoaded = function() {
            var t = this.baseTexture;
            t.removeEventListener("loaded", this.onLoaded), this.noFrame && (this.frame = new e.Rectangle(0, 0, t.width, t.height)), this.setFrame(this.frame), this.dispatchEvent({
                type: "update",
                content: this
            })
        }, e.Texture.prototype.destroy = function(t) {
            t && this.baseTexture.destroy(), this.valid = !1
        }, e.Texture.prototype.setFrame = function(t) {
            if (this.noFrame = !1, this.frame = t, this.width = t.width, this.height = t.height, this.crop.x = t.x, this.crop.y = t.y, this.crop.width = t.width, this.crop.height = t.height, !this.trim && (t.x + t.width > this.baseTexture.width || t.y + t.height > this.baseTexture.height)) throw new Error("Texture Error: frame does not fit inside the base Texture dimensions " + this);
            this.valid = t && t.width && t.height && this.baseTexture.source && this.baseTexture.hasLoaded, this.trim && (this.width = this.trim.width, this.height = this.trim.height, this.frame.width = this.trim.width, this.frame.height = this.trim.height), this.valid && this._updateUvs()
        }, e.Texture.prototype._updateUvs = function() {
            this._uvs || (this._uvs = new e.TextureUvs);
            var t = this.crop,
                i = this.baseTexture.width,
                s = this.baseTexture.height;
            this._uvs.x0 = t.x / i, this._uvs.y0 = t.y / s, this._uvs.x1 = (t.x + t.width) / i, this._uvs.y1 = t.y / s, this._uvs.x2 = (t.x + t.width) / i, this._uvs.y2 = (t.y + t.height) / s, this._uvs.x3 = t.x / i, this._uvs.y3 = (t.y + t.height) / s
        }, e.Texture.fromImage = function(t, i, s) {
            var n = e.TextureCache[t];
            return n || (n = new e.Texture(e.BaseTexture.fromImage(t, i, s)), e.TextureCache[t] = n), n
        }, e.Texture.fromFrame = function(t) {
            var i = e.TextureCache[t];
            if (!i) throw new Error('The frameId "' + t + '" does not exist in the texture cache ');
            return i
        }, e.Texture.fromCanvas = function(t, i) {
            var s = e.BaseTexture.fromCanvas(t, i);
            return new e.Texture(s)
        }, e.Texture.addTextureToCache = function(t, i) {
            e.TextureCache[i] = t
        }, e.Texture.removeTextureFromCache = function(t) {
            var i = e.TextureCache[t];
            return delete e.TextureCache[t], delete e.BaseTextureCache[t], i
        }, e.TextureUvs = function() {
            this.x0 = 0, this.y0 = 0, this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.x3 = 0, this.y3 = 0
        }, e.Texture.emptyTexture = new e.Texture(new e.BaseTexture), e.RenderTexture = function(t, i, s, n, r) {
            if (this.width = t || 100, this.height = i || 100, this.resolution = r || 1, this.frame = new e.Rectangle(0, 0, this.width * this.resolution, this.height * this.resolution), this.crop = new e.Rectangle(0, 0, this.width * this.resolution, this.height * this.resolution), this.baseTexture = new e.BaseTexture, this.baseTexture.width = this.width * this.resolution, this.baseTexture.height = this.height * this.resolution, this.baseTexture._glTextures = [], this.baseTexture.resolution = this.resolution, this.baseTexture.scaleMode = n || e.scaleModes.DEFAULT, this.baseTexture.hasLoaded = !0, e.Texture.call(this, this.baseTexture, new e.Rectangle(0, 0, this.width * this.resolution, this.height * this.resolution)), this.renderer = s || e.defaultRenderer, this.renderer.type === e.WEBGL_RENDERER) {
                var o = this.renderer.gl;
                this.baseTexture._dirty[o.id] = !1, this.textureBuffer = new e.FilterTexture(o, this.width, this.height, this.baseTexture.scaleMode), this.baseTexture._glTextures[o.id] = this.textureBuffer.texture, this.render = this.renderWebGL, this.projection = new e.Point(.5 * this.width, .5 * -this.height)
            } else this.render = this.renderCanvas, this.textureBuffer = new e.CanvasBuffer(this.width * this.resolution, this.height * this.resolution), this.baseTexture.source = this.textureBuffer.canvas;
            this.valid = !0, this._updateUvs()
        }, e.RenderTexture.prototype = Object.create(e.Texture.prototype), e.RenderTexture.prototype.constructor = e.RenderTexture, e.RenderTexture.prototype.resize = function(t, i, s) {
            (t !== this.width || i !== this.height) && (this.valid = t > 0 && i > 0, this.width = t, this.height = i, this.frame.width = this.crop.width = t * this.resolution, this.frame.height = this.crop.height = i * this.resolution, s && (this.baseTexture.width = this.width * this.resolution, this.baseTexture.height = this.height * this.resolution), this.renderer.type === e.WEBGL_RENDERER && (this.projection.x = this.width / 2, this.projection.y = -this.height / 2), this.valid && this.textureBuffer.resize(this.width, this.height))
        }, e.RenderTexture.prototype.clear = function() {
            this.valid && (this.renderer.type === e.WEBGL_RENDERER && this.renderer.gl.bindFramebuffer(this.renderer.gl.FRAMEBUFFER, this.textureBuffer.frameBuffer), this.textureBuffer.clear())
        }, e.RenderTexture.prototype.renderWebGL = function(t, e, i) {
            if (this.valid) {
                var s = t.worldTransform;
                s.identity(), s.translate(0, 2 * this.projection.y), e && s.append(e), s.scale(1, -1), t.worldAlpha = 1;
                for (var n = t.children, r = 0, o = n.length; o > r; r++) n[r].updateTransform();
                var a = this.renderer.gl;
                a.viewport(0, 0, this.width * this.resolution, this.height * this.resolution), a.bindFramebuffer(a.FRAMEBUFFER, this.textureBuffer.frameBuffer), i && this.textureBuffer.clear(), this.renderer.spriteBatch.dirty = !0, this.renderer.renderDisplayObject(t, this.projection, this.textureBuffer.frameBuffer), this.renderer.spriteBatch.dirty = !0
            }
        }, e.RenderTexture.prototype.renderCanvas = function(t, e, i) {
            if (this.valid) {
                var s = t.worldTransform;
                s.identity(), e && s.append(e), t.worldAlpha = 1;
                for (var n = t.children, r = 0, o = n.length; o > r; r++) n[r].updateTransform();
                i && this.textureBuffer.clear();
                var a = this.textureBuffer.context,
                    h = this.renderer.resolution;
                this.renderer.resolution = this.resolution, this.renderer.renderDisplayObject(t, a), this.renderer.resolution = h
            }
        }, e.RenderTexture.prototype.getImage = function() {
            var t = new Image;
            return t.src = this.getBase64(), t
        }, e.RenderTexture.prototype.getBase64 = function() {
            return this.getCanvas().toDataURL()
        }, e.RenderTexture.prototype.getCanvas = function() {
            if (this.renderer.type === e.WEBGL_RENDERER) {
                var t = this.renderer.gl,
                    i = this.textureBuffer.width,
                    s = this.textureBuffer.height,
                    n = new Uint8Array(4 * i * s);
                t.bindFramebuffer(t.FRAMEBUFFER, this.textureBuffer.frameBuffer), t.readPixels(0, 0, i, s, t.RGBA, t.UNSIGNED_BYTE, n), t.bindFramebuffer(t.FRAMEBUFFER, null);
                var r = new e.CanvasBuffer(i, s),
                    o = r.context.getImageData(0, 0, i, s);
                return o.data.set(n), r.context.putImageData(o, 0, 0), r.canvas
            }
            return this.textureBuffer.canvas
        }, e.RenderTexture.tempMatrix = new e.Matrix, e.VideoTexture = function(t, i) {
            if (!t) throw new Error("No video source element specified.");
            (t.readyState === t.HAVE_ENOUGH_DATA || t.readyState === t.HAVE_FUTURE_DATA) && t.width && t.height && (t.complete = !0), e.BaseTexture.call(this, t, i), this.autoUpdate = !1, this.updateBound = this._onUpdate.bind(this), t.complete || (this._onCanPlay = this.onCanPlay.bind(this), t.addEventListener("canplay", this._onCanPlay), t.addEventListener("canplaythrough", this._onCanPlay), t.addEventListener("play", this.onPlayStart.bind(this)), t.addEventListener("pause", this.onPlayStop.bind(this)))
        }, e.VideoTexture.prototype = Object.create(e.BaseTexture.prototype), e.VideoTexture.constructor = e.VideoTexture, e.VideoTexture.prototype._onUpdate = function() {
            this.autoUpdate && (window.requestAnimationFrame(this.updateBound), this.dirty())
        }, e.VideoTexture.prototype.onPlayStart = function() {
            this.autoUpdate || (window.requestAnimationFrame(this.updateBound), this.autoUpdate = !0)
        }, e.VideoTexture.prototype.onPlayStop = function() {
            this.autoUpdate = !1
        }, e.VideoTexture.prototype.onCanPlay = function() {
            "canplaythrough" === event.type && (this.hasLoaded = !0, this.source && (this.source.removeEventListener("canplay", this._onCanPlay), this.source.removeEventListener("canplaythrough", this._onCanPlay), this.width = this.source.videoWidth, this.height = this.source.videoHeight, this.__loaded || (this.__loaded = !0, this.dispatchEvent({
                type: "loaded",
                content: this
            }))))
        }, e.VideoTexture.prototype.destroy = function() {
            this.source && this.source._pixiId && (e.BaseTextureCache[this.source._pixiId] = null, delete e.BaseTextureCache[this.source._pixiId], this.source._pixiId = null, delete this.source._pixiId), e.BaseTexture.prototype.destroy.call(this)
        }, e.VideoTexture.baseTextureFromVideo = function(t, i) {
            t._pixiId || (t._pixiId = "video_" + e.TextureCacheIdGenerator++);
            var s = e.BaseTextureCache[t._pixiId];
            return s || (s = new e.VideoTexture(t, i), e.BaseTextureCache[t._pixiId] = s), s
        }, e.VideoTexture.textureFromVideo = function(t, i) {
            var s = e.VideoTexture.baseTextureFromVideo(t, i);
            return new e.Texture(s)
        }, e.VideoTexture.fromUrl = function(t, i) {
            var s = document.createElement("video");
            return s.src = t, s.autoPlay = !0, s.play(), e.VideoTexture.textureFromVideo(s, i)
        }, e.AssetLoader = function(t, i) {
            this.assetURLs = t, this.crossorigin = i, this.loadersByType = {
                jpg: e.ImageLoader,
                jpeg: e.ImageLoader,
                png: e.ImageLoader,
                gif: e.ImageLoader,
                webp: e.ImageLoader,
                json: e.JsonLoader,
                atlas: e.AtlasLoader,
                anim: e.SpineLoader,
                xml: e.BitmapFontLoader,
                fnt: e.BitmapFontLoader
            }
        }, e.EventTarget.mixin(e.AssetLoader.prototype), e.AssetLoader.prototype.constructor = e.AssetLoader, e.AssetLoader.prototype._getDataType = function(t) {
            var e = "data:",
                i = t.slice(0, e.length).toLowerCase();
            if (i === e) {
                var s = t.slice(e.length),
                    n = s.indexOf(",");
                if (-1 === n) return null;
                var r = s.slice(0, n).split(";")[0];
                return r && "text/plain" !== r.toLowerCase() ? r.split("/").pop().toLowerCase() : "txt"
            }
            return null
        }, e.AssetLoader.prototype.load = function() {
            function t(t) {
                e.onAssetLoaded(t.data.content)
            }
            var e = this;
            this.loadCount = this.assetURLs.length;
            for (var i = 0; i < this.assetURLs.length; i++) {
                var s = this.assetURLs[i],
                    n = this._getDataType(s);
                n || (n = s.split("?").shift().split(".").pop().toLowerCase());
                var r = this.loadersByType[n];
                if (!r) throw new Error(n + " is an unsupported file type");
                var o = new r(s, this.crossorigin);
                o.on("loaded", t), o.load()
            }
        }, e.AssetLoader.prototype.onAssetLoaded = function(t) {
            this.loadCount--, this.emit("onProgress", {
                content: this,
                loader: t,
                loaded: this.assetURLs.length - this.loadCount,
                total: this.assetURLs.length
            }), this.onProgress && this.onProgress(t), this.loadCount || (this.emit("onComplete", {
                content: this
            }), this.onComplete && this.onComplete())
        }, e.JsonLoader = function(t, e) {
            this.url = t, this.crossorigin = e, this.baseUrl = t.replace(/[^\/]*$/, ""), this.loaded = !1
        }, e.JsonLoader.prototype.constructor = e.JsonLoader, e.EventTarget.mixin(e.JsonLoader.prototype), e.JsonLoader.prototype.load = function() {
            window.XDomainRequest && this.crossorigin ? (this.ajaxRequest = new window.XDomainRequest, this.ajaxRequest.timeout = 3e3, this.ajaxRequest.onerror = this.onError.bind(this), this.ajaxRequest.ontimeout = this.onError.bind(this), this.ajaxRequest.onprogress = function() {}, this.ajaxRequest.onload = this.onJSONLoaded.bind(this)) : (window.XMLHttpRequest ? this.ajaxRequest = new window.XMLHttpRequest : this.ajaxRequest = new window.ActiveXObject("Microsoft.XMLHTTP"), this.ajaxRequest.onreadystatechange = this.onReadyStateChanged.bind(this)), this.ajaxRequest.open("GET", this.url, !0), this.ajaxRequest.send()
        }, e.JsonLoader.prototype.onReadyStateChanged = function() {
            4 !== this.ajaxRequest.readyState || 200 !== this.ajaxRequest.status && -1 !== window.location.href.indexOf("http") || this.onJSONLoaded()
        }, e.JsonLoader.prototype.onJSONLoaded = function() {
            if (!this.ajaxRequest.responseText) return void this.onError();
            if (this.json = JSON.parse(this.ajaxRequest.responseText), this.json.frames && this.json.meta && this.json.meta.image) {
                var t = this.baseUrl + this.json.meta.image,
                    s = new e.ImageLoader(t, this.crossorigin),
                    n = this.json.frames;
                this.texture = s.texture.baseTexture, s.addEventListener("loaded", this.onLoaded.bind(this));
                for (var r in n) {
                    var o = n[r].frame;
                    if (o) {
                        var a = new e.Rectangle(o.x, o.y, o.w, o.h),
                            h = a.clone(),
                            l = null;
                        if (n[r].trimmed) {
                            var d = n[r].sourceSize,
                                c = n[r].spriteSourceSize;
                            l = new e.Rectangle(c.x, c.y, d.w, d.h)
                        }
                        e.TextureCache[r] = new e.Texture(this.texture, a, h, l)
                    }
                }
                s.load()
            } else if (this.json.bones)
                if (e.AnimCache[this.url]) this.onLoaded();
                else {
                    var u = this.url.substr(0, this.url.lastIndexOf(".")) + ".atlas",
                        p = new e.JsonLoader(u, this.crossorigin),
                        f = this;
                    p.onJSONLoaded = function() {
                        if (!this.ajaxRequest.responseText) return void this.onError();
                        var t = new e.SpineTextureLoader(this.url.substring(0, this.url.lastIndexOf("/"))),
                            s = new i.Atlas(this.ajaxRequest.responseText, t),
                            n = new i.AtlasAttachmentLoader(s),
                            r = new i.SkeletonJson(n),
                            o = r.readSkeletonData(f.json);
                        e.AnimCache[f.url] = o, f.spine = o, f.spineAtlas = s, f.spineAtlasLoader = p, t.loadingCount > 0 ? t.addEventListener("loadedBaseTexture", function(t) {
                            t.content.content.loadingCount <= 0 && f.onLoaded()
                        }) : f.onLoaded()
                    }, p.load()
                }
            else this.onLoaded()
        }, e.JsonLoader.prototype.onLoaded = function() {
            this.loaded = !0, this.dispatchEvent({
                type: "loaded",
                content: this
            })
        }, e.JsonLoader.prototype.onError = function() {
            this.dispatchEvent({
                type: "error",
                content: this
            })
        }, e.AtlasLoader = function(t, e) {
            this.url = t, this.baseUrl = t.replace(/[^\/]*$/, ""), this.crossorigin = e, this.loaded = !1
        }, e.AtlasLoader.constructor = e.AtlasLoader, e.EventTarget.mixin(e.AtlasLoader.prototype), e.AtlasLoader.prototype.load = function() {
            this.ajaxRequest = new e.AjaxRequest, this.ajaxRequest.onreadystatechange = this.onAtlasLoaded.bind(this), this.ajaxRequest.open("GET", this.url, !0), this.ajaxRequest.overrideMimeType && this.ajaxRequest.overrideMimeType("application/json"), this.ajaxRequest.send(null)
        }, e.AtlasLoader.prototype.onAtlasLoaded = function() {
            if (4 === this.ajaxRequest.readyState)
                if (200 === this.ajaxRequest.status || -1 === window.location.href.indexOf("http")) {
                    this.atlas = {
                        meta: {
                            image: []
                        },
                        frames: []
                    };
                    var t = this.ajaxRequest.responseText.split(/\r?\n/),
                        i = -3,
                        s = 0,
                        n = null,
                        r = !1,
                        o = 0,
                        a = 0,
                        h = this.onLoaded.bind(this);
                    for (o = 0; o < t.length; o++)
                        if (t[o] = t[o].replace(/^\s+|\s+$/g, ""), "" === t[o] && (r = o + 1), t[o].length > 0) {
                            if (r === o) this.atlas.meta.image.push(t[o]), s = this.atlas.meta.image.length - 1, this.atlas.frames.push({}), i = -3;
                            else if (i > 0)
                                if (i % 7 === 1) null != n && (this.atlas.frames[s][n.name] = n), n = {
                                    name: t[o],
                                    frame: {}
                                };
                                else {
                                    var l = t[o].split(" ");
                                    if (i % 7 === 3) n.frame.x = Number(l[1].replace(",", "")), n.frame.y = Number(l[2]);
                                    else if (i % 7 === 4) n.frame.w = Number(l[1].replace(",", "")), n.frame.h = Number(l[2]);
                                    else if (i % 7 === 5) {
                                        var d = {
                                            x: 0,
                                            y: 0,
                                            w: Number(l[1].replace(",", "")),
                                            h: Number(l[2])
                                        };
                                        d.w > n.frame.w || d.h > n.frame.h ? (n.trimmed = !0, n.realSize = d) : n.trimmed = !1
                                    }
                                }
                            i++
                        }
                    if (null != n && (this.atlas.frames[s][n.name] = n), this.atlas.meta.image.length > 0) {
                        for (this.images = [], a = 0; a < this.atlas.meta.image.length; a++) {
                            var c = this.baseUrl + this.atlas.meta.image[a],
                                u = this.atlas.frames[a];
                            this.images.push(new e.ImageLoader(c, this.crossorigin));
                            for (o in u) {
                                var p = u[o].frame;
                                p && (e.TextureCache[o] = new e.Texture(this.images[a].texture.baseTexture, {
                                    x: p.x,
                                    y: p.y,
                                    width: p.w,
                                    height: p.h
                                }), u[o].trimmed && (e.TextureCache[o].realSize = u[o].realSize, e.TextureCache[o].trim.x = 0, e.TextureCache[o].trim.y = 0))
                            }
                        }
                        for (this.currentImageId = 0, a = 0; a < this.images.length; a++) this.images[a].on("loaded", h);
                        this.images[this.currentImageId].load()
                    } else this.onLoaded()
                } else this.onError()
        }, e.AtlasLoader.prototype.onLoaded = function() {
            this.images.length - 1 > this.currentImageId ? (this.currentImageId++, this.images[this.currentImageId].load()) : (this.loaded = !0, this.emit("loaded", {
                content: this
            }))
        }, e.AtlasLoader.prototype.onError = function() {
            this.emit("error", {
                content: this
            })
        }, e.SpriteSheetLoader = function(t, e) {
            this.url = t, this.crossorigin = e, this.baseUrl = t.replace(/[^\/]*$/, ""), this.texture = null, this.frames = {}
        }, e.SpriteSheetLoader.prototype.constructor = e.SpriteSheetLoader, e.EventTarget.mixin(e.SpriteSheetLoader.prototype), e.SpriteSheetLoader.prototype.load = function() {
            var t = this,
                i = new e.JsonLoader(this.url, this.crossorigin);
            i.on("loaded", function(e) {
                t.json = e.data.content.json, t.onLoaded()
            }), i.load()
        }, e.SpriteSheetLoader.prototype.onLoaded = function() {
            this.emit("loaded", {
                content: this
            })
        }, e.ImageLoader = function(t, i) {
            this.texture = e.Texture.fromImage(t, i), this.frames = []
        }, e.ImageLoader.prototype.constructor = e.ImageLoader, e.EventTarget.mixin(e.ImageLoader.prototype), e.ImageLoader.prototype.load = function() {
            this.texture.baseTexture.hasLoaded ? this.onLoaded() : this.texture.baseTexture.on("loaded", this.onLoaded.bind(this))
        }, e.ImageLoader.prototype.onLoaded = function() {
            this.emit("loaded", {
                content: this
            })
        }, e.ImageLoader.prototype.loadFramedSpriteSheet = function(t, i, s) {
            this.frames = [];
            for (var n = Math.floor(this.texture.width / t), r = Math.floor(this.texture.height / i), o = 0, a = 0; r > a; a++)
                for (var h = 0; n > h; h++, o++) {
                    var l = new e.Texture(this.texture.baseTexture, {
                        x: h * t,
                        y: a * i,
                        width: t,
                        height: i
                    });
                    this.frames.push(l), s && (e.TextureCache[s + "-" + o] = l)
                }
            this.load()
        }, e.BitmapFontLoader = function(t, e) {
            this.url = t, this.crossorigin = e, this.baseUrl = t.replace(/[^\/]*$/, ""), this.texture = null
        }, e.BitmapFontLoader.prototype.constructor = e.BitmapFontLoader, e.EventTarget.mixin(e.BitmapFontLoader.prototype), e.BitmapFontLoader.prototype.load = function() {
            this.ajaxRequest = new e.AjaxRequest, this.ajaxRequest.onreadystatechange = this.onXMLLoaded.bind(this), this.ajaxRequest.open("GET", this.url, !0), this.ajaxRequest.overrideMimeType && this.ajaxRequest.overrideMimeType("application/xml"), this.ajaxRequest.send(null)
        }, e.BitmapFontLoader.prototype.onXMLLoaded = function() {
            if (4 === this.ajaxRequest.readyState && (200 === this.ajaxRequest.status || -1 === window.location.protocol.indexOf("http"))) {
                var t = this.ajaxRequest.responseXML;
                if (!t || /MSIE 9/i.test(navigator.userAgent) || navigator.isCocoonJS)
                    if ("function" == typeof window.DOMParser) {
                        var i = new DOMParser;
                        t = i.parseFromString(this.ajaxRequest.responseText, "text/xml")
                    } else {
                        var s = document.createElement("div");
                        s.innerHTML = this.ajaxRequest.responseText, t = s
                    }
                var n = this.baseUrl + t.getElementsByTagName("page")[0].getAttribute("file"),
                    r = new e.ImageLoader(n, this.crossorigin);
                this.texture = r.texture.baseTexture;
                var o = {},
                    a = t.getElementsByTagName("info")[0],
                    h = t.getElementsByTagName("common")[0];
                o.font = a.getAttribute("face"), o.size = parseInt(a.getAttribute("size"), 10), o.lineHeight = parseInt(h.getAttribute("lineHeight"), 10), o.chars = {};
                for (var l = t.getElementsByTagName("char"), d = 0; d < l.length; d++) {
                    var c = parseInt(l[d].getAttribute("id"), 10),
                        u = new e.Rectangle(parseInt(l[d].getAttribute("x"), 10), parseInt(l[d].getAttribute("y"), 10), parseInt(l[d].getAttribute("width"), 10), parseInt(l[d].getAttribute("height"), 10));
                    o.chars[c] = {
                        xOffset: parseInt(l[d].getAttribute("xoffset"), 10),
                        yOffset: parseInt(l[d].getAttribute("yoffset"), 10),
                        xAdvance: parseInt(l[d].getAttribute("xadvance"), 10),
                        kerning: {},
                        texture: e.TextureCache[c] = new e.Texture(this.texture, u)
                    }
                }
                var p = t.getElementsByTagName("kerning");
                for (d = 0; d < p.length; d++) {
                    var f = parseInt(p[d].getAttribute("first"), 10),
                        y = parseInt(p[d].getAttribute("second"), 10),
                        x = parseInt(p[d].getAttribute("amount"), 10);
                    o.chars[y].kerning[f] = x
                }
                e.BitmapText.fonts[o.font] = o, r.addEventListener("loaded", this.onLoaded.bind(this)), r.load()
            }
        }, e.BitmapFontLoader.prototype.onLoaded = function() {
            this.emit("loaded", {
                content: this
            })
        }, e.SpineLoader = function(t, e) {
            this.url = t, this.crossorigin = e, this.loaded = !1
        }, e.SpineLoader.prototype.constructor = e.SpineLoader, e.EventTarget.mixin(e.SpineLoader.prototype), e.SpineLoader.prototype.load = function() {
            var t = this,
                i = new e.JsonLoader(this.url, this.crossorigin);
            i.on("loaded", function(e) {
                t.json = e.data.content.json, t.onLoaded()
            }), i.load()
        }, e.SpineLoader.prototype.onLoaded = function() {
            this.loaded = !0, this.emit("loaded", {
                content: this
            })
        }, e.AbstractFilter = function(t, e) {
            this.passes = [this], this.shaders = [], this.dirty = !0, this.padding = 0, this.uniforms = e || {}, this.fragmentSrc = t || []
        }, e.AbstractFilter.prototype.constructor = e.AbstractFilter, e.AbstractFilter.prototype.syncUniforms = function() {
            for (var t = 0, e = this.shaders.length; e > t; t++) this.shaders[t].dirty = !0
        }, e.AlphaMaskFilter = function(t) {
            e.AbstractFilter.call(this), this.passes = [this], t.baseTexture._powerOf2 = !0, this.uniforms = {
                mask: {
                    type: "sampler2D",
                    value: t
                },
                mapDimensions: {
                    type: "2f",
                    value: {
                        x: 1,
                        y: 5112
                    }
                },
                dimensions: {
                    type: "4fv",
                    value: [0, 0, 0, 0]
                }
            }, t.baseTexture.hasLoaded ? (this.uniforms.mask.value.x = t.width, this.uniforms.mask.value.y = t.height) : (this.boundLoadedFunction = this.onTextureLoaded.bind(this), t.baseTexture.on("loaded", this.boundLoadedFunction)), this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform sampler2D mask;", "uniform sampler2D uSampler;", "uniform vec2 offset;", "uniform vec4 dimensions;", "uniform vec2 mapDimensions;", "void main(void) {", "   vec2 mapCords = vTextureCoord.xy;", "   mapCords += (dimensions.zw + offset)/ dimensions.xy ;", "   mapCords.y *= -1.0;", "   mapCords.y += 1.0;", "   mapCords *= dimensions.xy / mapDimensions;", "   vec4 original =  texture2D(uSampler, vTextureCoord);", "   float maskAlpha =  texture2D(mask, mapCords).r;", "   original *= maskAlpha;", "   gl_FragColor =  original;", "}"]
        }, e.AlphaMaskFilter.prototype = Object.create(e.AbstractFilter.prototype), e.AlphaMaskFilter.prototype.constructor = e.AlphaMaskFilter, e.AlphaMaskFilter.prototype.onTextureLoaded = function() {
            this.uniforms.mapDimensions.value.x = this.uniforms.mask.value.width, this.uniforms.mapDimensions.value.y = this.uniforms.mask.value.height, this.uniforms.mask.value.baseTexture.off("loaded", this.boundLoadedFunction)
        }, Object.defineProperty(e.AlphaMaskFilter.prototype, "map", {
            get: function() {
                return this.uniforms.mask.value
            },
            set: function(t) {
                this.uniforms.mask.value = t
            }
        }), e.ColorMatrixFilter = function() {
            e.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
                matrix: {
                    type: "mat4",
                    value: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
                }
            }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform float invert;", "uniform mat4 matrix;", "uniform sampler2D uSampler;", "void main(void) {", "   gl_FragColor = texture2D(uSampler, vTextureCoord) * matrix;", "}"]
        }, e.ColorMatrixFilter.prototype = Object.create(e.AbstractFilter.prototype), e.ColorMatrixFilter.prototype.constructor = e.ColorMatrixFilter, Object.defineProperty(e.ColorMatrixFilter.prototype, "matrix", {
            get: function() {
                return this.uniforms.matrix.value
            },
            set: function(t) {
                this.uniforms.matrix.value = t
            }
        }), e.GrayFilter = function() {
            e.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
                gray: {
                    type: "1f",
                    value: 1
                }
            }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform sampler2D uSampler;", "uniform float gray;", "void main(void) {", "   gl_FragColor = texture2D(uSampler, vTextureCoord);", "   gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.2126*gl_FragColor.r + 0.7152*gl_FragColor.g + 0.0722*gl_FragColor.b), gray);", "}"]
        }, e.GrayFilter.prototype = Object.create(e.AbstractFilter.prototype), e.GrayFilter.prototype.constructor = e.GrayFilter, Object.defineProperty(e.GrayFilter.prototype, "gray", {
            get: function() {
                return this.uniforms.gray.value
            },
            set: function(t) {
                this.uniforms.gray.value = t
            }
        }), e.DisplacementFilter = function(t) {
            e.AbstractFilter.call(this), this.passes = [this], t.baseTexture._powerOf2 = !0, this.uniforms = {
                displacementMap: {
                    type: "sampler2D",
                    value: t
                },
                scale: {
                    type: "2f",
                    value: {
                        x: 30,
                        y: 30
                    }
                },
                offset: {
                    type: "2f",
                    value: {
                        x: 0,
                        y: 0
                    }
                },
                mapDimensions: {
                    type: "2f",
                    value: {
                        x: 1,
                        y: 5112
                    }
                },
                dimensions: {
                    type: "4fv",
                    value: [0, 0, 0, 0]
                }
            }, t.baseTexture.hasLoaded ? (this.uniforms.mapDimensions.value.x = t.width, this.uniforms.mapDimensions.value.y = t.height) : (this.boundLoadedFunction = this.onTextureLoaded.bind(this), t.baseTexture.on("loaded", this.boundLoadedFunction)), this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform sampler2D displacementMap;", "uniform sampler2D uSampler;", "uniform vec2 scale;", "uniform vec2 offset;", "uniform vec4 dimensions;", "uniform vec2 mapDimensions;", "void main(void) {", "   vec2 mapCords = vTextureCoord.xy;", "   mapCords += (dimensions.zw + offset)/ dimensions.xy ;", "   mapCords.y *= -1.0;", "   mapCords.y += 1.0;", "   vec2 matSample = texture2D(displacementMap, mapCords).xy;", "   matSample -= 0.5;", "   matSample *= scale;", "   matSample /= mapDimensions;", "   gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.x + matSample.x, vTextureCoord.y + matSample.y));", "   gl_FragColor.rgb = mix( gl_FragColor.rgb, gl_FragColor.rgb, 1.0);", "   vec2 cord = vTextureCoord;", "}"]
        }, e.DisplacementFilter.prototype = Object.create(e.AbstractFilter.prototype), e.DisplacementFilter.prototype.constructor = e.DisplacementFilter, e.DisplacementFilter.prototype.onTextureLoaded = function() {
            this.uniforms.mapDimensions.value.x = this.uniforms.displacementMap.value.width, this.uniforms.mapDimensions.value.y = this.uniforms.displacementMap.value.height, this.uniforms.displacementMap.value.baseTexture.off("loaded", this.boundLoadedFunction)
        }, Object.defineProperty(e.DisplacementFilter.prototype, "map", {
            get: function() {
                return this.uniforms.displacementMap.value
            },
            set: function(t) {
                this.uniforms.displacementMap.value = t
            }
        }), Object.defineProperty(e.DisplacementFilter.prototype, "scale", {
            get: function() {
                return this.uniforms.scale.value
            },
            set: function(t) {
                this.uniforms.scale.value = t
            }
        }), Object.defineProperty(e.DisplacementFilter.prototype, "offset", {
            get: function() {
                return this.uniforms.offset.value
            },
            set: function(t) {
                this.uniforms.offset.value = t
            }
        }), e.PixelateFilter = function() {
            e.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
                invert: {
                    type: "1f",
                    value: 0
                },
                dimensions: {
                    type: "4fv",
                    value: new e.Float32Array([1e4, 100, 10, 10])
                },
                pixelSize: {
                    type: "2f",
                    value: {
                        x: 10,
                        y: 10
                    }
                }
            }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform vec2 testDim;", "uniform vec4 dimensions;", "uniform vec2 pixelSize;", "uniform sampler2D uSampler;", "void main(void) {", "   vec2 coord = vTextureCoord;", "   vec2 size = dimensions.xy/pixelSize;", "   vec2 color = floor( ( vTextureCoord * size ) ) / size + pixelSize/dimensions.xy * 0.5;", "   gl_FragColor = texture2D(uSampler, color);", "}"]
        }, e.PixelateFilter.prototype = Object.create(e.AbstractFilter.prototype), e.PixelateFilter.prototype.constructor = e.PixelateFilter, Object.defineProperty(e.PixelateFilter.prototype, "size", {
            get: function() {
                return this.uniforms.pixelSize.value
            },
            set: function(t) {
                this.dirty = !0, this.uniforms.pixelSize.value = t
            }
        }), e.BlurXFilter = function() {
            e.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
                blur: {
                    type: "1f",
                    value: 1 / 512
                }
            }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform float blur;", "uniform sampler2D uSampler;", "void main(void) {", "   vec4 sum = vec4(0.0);", "   sum += texture2D(uSampler, vec2(vTextureCoord.x - 4.0*blur, vTextureCoord.y)) * 0.05;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x - 3.0*blur, vTextureCoord.y)) * 0.09;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x - 2.0*blur, vTextureCoord.y)) * 0.12;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x - blur, vTextureCoord.y)) * 0.15;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y)) * 0.16;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x + blur, vTextureCoord.y)) * 0.15;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x + 2.0*blur, vTextureCoord.y)) * 0.12;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x + 3.0*blur, vTextureCoord.y)) * 0.09;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x + 4.0*blur, vTextureCoord.y)) * 0.05;", "   gl_FragColor = sum;", "}"]
        }, e.BlurXFilter.prototype = Object.create(e.AbstractFilter.prototype), e.BlurXFilter.prototype.constructor = e.BlurXFilter, Object.defineProperty(e.BlurXFilter.prototype, "blur", {
            get: function() {
                return this.uniforms.blur.value / (1 / 7e3)
            },
            set: function(t) {
                this.dirty = !0, this.uniforms.blur.value = 1 / 7e3 * t
            }
        }), e.BlurYFilter = function() {
            e.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
                blur: {
                    type: "1f",
                    value: 1 / 512
                }
            }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform float blur;", "uniform sampler2D uSampler;", "void main(void) {", "   vec4 sum = vec4(0.0);", "   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - 4.0*blur)) * 0.05;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - 3.0*blur)) * 0.09;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - 2.0*blur)) * 0.12;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - blur)) * 0.15;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y)) * 0.16;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + blur)) * 0.15;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + 2.0*blur)) * 0.12;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + 3.0*blur)) * 0.09;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + 4.0*blur)) * 0.05;", "   gl_FragColor = sum;", "}"]
        }, e.BlurYFilter.prototype = Object.create(e.AbstractFilter.prototype), e.BlurYFilter.prototype.constructor = e.BlurYFilter, Object.defineProperty(e.BlurYFilter.prototype, "blur", {
            get: function() {
                return this.uniforms.blur.value / (1 / 7e3)
            },
            set: function(t) {
                this.uniforms.blur.value = 1 / 7e3 * t
            }
        }), e.BlurFilter = function() {
            this.blurXFilter = new e.BlurXFilter, this.blurYFilter = new e.BlurYFilter, this.passes = [this.blurXFilter, this.blurYFilter]
        }, e.BlurFilter.prototype = Object.create(e.AbstractFilter.prototype), e.BlurFilter.prototype.constructor = e.BlurFilter, Object.defineProperty(e.BlurFilter.prototype, "blur", {
            get: function() {
                return this.blurXFilter.blur
            },
            set: function(t) {
                this.blurXFilter.blur = this.blurYFilter.blur = t
            }
        }), Object.defineProperty(e.BlurFilter.prototype, "blurX", {
            get: function() {
                return this.blurXFilter.blur
            },
            set: function(t) {
                this.blurXFilter.blur = t
            }
        }), Object.defineProperty(e.BlurFilter.prototype, "blurY", {
            get: function() {
                return this.blurYFilter.blur
            },
            set: function(t) {
                this.blurYFilter.blur = t
            }
        }), e.InvertFilter = function() {
            e.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
                invert: {
                    type: "1f",
                    value: 1
                }
            }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform float invert;", "uniform sampler2D uSampler;", "void main(void) {", "   gl_FragColor = texture2D(uSampler, vTextureCoord);", "   gl_FragColor.rgb = mix( (vec3(1)-gl_FragColor.rgb) * gl_FragColor.a, gl_FragColor.rgb, 1.0 - invert);", "}"]
        }, e.InvertFilter.prototype = Object.create(e.AbstractFilter.prototype), e.InvertFilter.prototype.constructor = e.InvertFilter, Object.defineProperty(e.InvertFilter.prototype, "invert", {
            get: function() {
                return this.uniforms.invert.value
            },
            set: function(t) {
                this.uniforms.invert.value = t
            }
        }), e.SepiaFilter = function() {
            e.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
                sepia: {
                    type: "1f",
                    value: 1
                }
            }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform float sepia;", "uniform sampler2D uSampler;", "const mat3 sepiaMatrix = mat3(0.3588, 0.7044, 0.1368, 0.2990, 0.5870, 0.1140, 0.2392, 0.4696, 0.0912);", "void main(void) {", "   gl_FragColor = texture2D(uSampler, vTextureCoord);", "   gl_FragColor.rgb = mix( gl_FragColor.rgb, gl_FragColor.rgb * sepiaMatrix, sepia);", "}"]
        }, e.SepiaFilter.prototype = Object.create(e.AbstractFilter.prototype), e.SepiaFilter.prototype.constructor = e.SepiaFilter, Object.defineProperty(e.SepiaFilter.prototype, "sepia", {
            get: function() {
                return this.uniforms.sepia.value
            },
            set: function(t) {
                this.uniforms.sepia.value = t
            }
        }), e.TwistFilter = function() {
            e.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
                radius: {
                    type: "1f",
                    value: .5
                },
                angle: {
                    type: "1f",
                    value: 5
                },
                offset: {
                    type: "2f",
                    value: {
                        x: .5,
                        y: .5
                    }
                }
            }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform vec4 dimensions;", "uniform sampler2D uSampler;", "uniform float radius;", "uniform float angle;", "uniform vec2 offset;", "void main(void) {", "   vec2 coord = vTextureCoord - offset;", "   float distance = length(coord);", "   if (distance < radius) {", "       float ratio = (radius - distance) / radius;", "       float angleMod = ratio * ratio * angle;", "       float s = sin(angleMod);", "       float c = cos(angleMod);", "       coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);", "   }", "   gl_FragColor = texture2D(uSampler, coord+offset);", "}"]
        }, e.TwistFilter.prototype = Object.create(e.AbstractFilter.prototype), e.TwistFilter.prototype.constructor = e.TwistFilter, Object.defineProperty(e.TwistFilter.prototype, "offset", {
            get: function() {
                return this.uniforms.offset.value
            },
            set: function(t) {
                this.dirty = !0, this.uniforms.offset.value = t
            }
        }), Object.defineProperty(e.TwistFilter.prototype, "radius", {
            get: function() {
                return this.uniforms.radius.value
            },
            set: function(t) {
                this.dirty = !0, this.uniforms.radius.value = t
            }
        }), Object.defineProperty(e.TwistFilter.prototype, "angle", {
            get: function() {
                return this.uniforms.angle.value
            },
            set: function(t) {
                this.dirty = !0, this.uniforms.angle.value = t
            }
        }), e.ColorStepFilter = function() {
            e.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
                step: {
                    type: "1f",
                    value: 5
                }
            }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform sampler2D uSampler;", "uniform float step;", "void main(void) {", "   vec4 color = texture2D(uSampler, vTextureCoord);", "   color = floor(color * step) / step;", "   gl_FragColor = color;", "}"]
        }, e.ColorStepFilter.prototype = Object.create(e.AbstractFilter.prototype), e.ColorStepFilter.prototype.constructor = e.ColorStepFilter, Object.defineProperty(e.ColorStepFilter.prototype, "step", {
            get: function() {
                return this.uniforms.step.value
            },
            set: function(t) {
                this.uniforms.step.value = t
            }
        }), e.DotScreenFilter = function() {
            e.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
                scale: {
                    type: "1f",
                    value: 1
                },
                angle: {
                    type: "1f",
                    value: 5
                },
                dimensions: {
                    type: "4fv",
                    value: [0, 0, 0, 0]
                }
            }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform vec4 dimensions;", "uniform sampler2D uSampler;", "uniform float angle;", "uniform float scale;", "float pattern() {", "   float s = sin(angle), c = cos(angle);", "   vec2 tex = vTextureCoord * dimensions.xy;", "   vec2 point = vec2(", "       c * tex.x - s * tex.y,", "       s * tex.x + c * tex.y", "   ) * scale;", "   return (sin(point.x) * sin(point.y)) * 4.0;", "}", "void main() {", "   vec4 color = texture2D(uSampler, vTextureCoord);", "   float average = (color.r + color.g + color.b) / 3.0;", "   gl_FragColor = vec4(vec3(average * 10.0 - 5.0 + pattern()), color.a);", "}"]
        }, e.DotScreenFilter.prototype = Object.create(e.AbstractFilter.prototype), e.DotScreenFilter.prototype.constructor = e.DotScreenFilter, Object.defineProperty(e.DotScreenFilter.prototype, "scale", {
            get: function() {
                return this.uniforms.scale.value
            },
            set: function(t) {
                this.dirty = !0, this.uniforms.scale.value = t
            }
        }), Object.defineProperty(e.DotScreenFilter.prototype, "angle", {
            get: function() {
                return this.uniforms.angle.value
            },
            set: function(t) {
                this.dirty = !0, this.uniforms.angle.value = t
            }
        }), e.CrossHatchFilter = function() {
            e.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
                blur: {
                    type: "1f",
                    value: 1 / 512
                }
            }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform float blur;", "uniform sampler2D uSampler;", "void main(void) {", "    float lum = length(texture2D(uSampler, vTextureCoord.xy).rgb);", "    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);", "    if (lum < 1.00) {", "        if (mod(gl_FragCoord.x + gl_FragCoord.y, 10.0) == 0.0) {", "            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);", "        }", "    }", "    if (lum < 0.75) {", "        if (mod(gl_FragCoord.x - gl_FragCoord.y, 10.0) == 0.0) {", "            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);", "        }", "    }", "    if (lum < 0.50) {", "        if (mod(gl_FragCoord.x + gl_FragCoord.y - 5.0, 10.0) == 0.0) {", "            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);", "        }", "    }", "    if (lum < 0.3) {", "        if (mod(gl_FragCoord.x - gl_FragCoord.y - 5.0, 10.0) == 0.0) {", "            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);", "        }", "    }", "}"]
        }, e.CrossHatchFilter.prototype = Object.create(e.AbstractFilter.prototype), e.CrossHatchFilter.prototype.constructor = e.CrossHatchFilter, Object.defineProperty(e.CrossHatchFilter.prototype, "blur", {
            get: function() {
                return this.uniforms.blur.value / (1 / 7e3)
            },
            set: function(t) {
                this.uniforms.blur.value = 1 / 7e3 * t
            }
        }), e.RGBSplitFilter = function() {
            e.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
                red: {
                    type: "2f",
                    value: {
                        x: 20,
                        y: 20
                    }
                },
                green: {
                    type: "2f",
                    value: {
                        x: -20,
                        y: 20
                    }
                },
                blue: {
                    type: "2f",
                    value: {
                        x: 20,
                        y: -20
                    }
                },
                dimensions: {
                    type: "4fv",
                    value: [0, 0, 0, 0]
                }
            }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform vec2 red;", "uniform vec2 green;", "uniform vec2 blue;", "uniform vec4 dimensions;", "uniform sampler2D uSampler;", "void main(void) {", "   gl_FragColor.r = texture2D(uSampler, vTextureCoord + red/dimensions.xy).r;", "   gl_FragColor.g = texture2D(uSampler, vTextureCoord + green/dimensions.xy).g;", "   gl_FragColor.b = texture2D(uSampler, vTextureCoord + blue/dimensions.xy).b;", "   gl_FragColor.a = texture2D(uSampler, vTextureCoord).a;", "}"]
        }, e.RGBSplitFilter.prototype = Object.create(e.AbstractFilter.prototype), e.RGBSplitFilter.prototype.constructor = e.RGBSplitFilter, Object.defineProperty(e.RGBSplitFilter.prototype, "red", {
            get: function() {
                return this.uniforms.red.value
            },
            set: function(t) {
                this.uniforms.red.value = t
            }
        }), Object.defineProperty(e.RGBSplitFilter.prototype, "green", {
            get: function() {
                return this.uniforms.green.value
            },
            set: function(t) {
                this.uniforms.green.value = t
            }
        }), Object.defineProperty(e.RGBSplitFilter.prototype, "blue", {
            get: function() {
                return this.uniforms.blue.value
            },
            set: function(t) {
                this.uniforms.blue.value = t
            }
        }), "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = e), exports.PIXI = e) : "undefined" != typeof define && define.amd ? define(e) : t.PIXI = e
    }.call(this), GodStep.Const = function() {
        var t = GodStep.MARK = "[Mejdu] ",
            e = "ERROR: ";
        GodStep.ERR_DIV_NF = t + e + "Div Element Not Found!", GodStep.ERR_AUDIO_SUPPORT = t + e + "Your browser do not support audio API", GodStep.ERR_AUDIO_DECODE = t + e + "Decoding file", GodStep.ERR_MVK_CONNECT = t + e + "VK Api not initialized", GodStep.ERR_FILEAPI = t + e + "File Api not supported", GodStep.TRACK_LOADED = t + "Track Loaded", GodStep.TRACK_DECODED = t + "Track Decoded", GodStep.MVK_CONNECT = t + "VK API Connected", GodStep.MVK_DATA = t + "VK API data", GodStep.LOOP_FINISH = t + "Loop Finish", GodStep.EVENT_START = t + "Event Start", GodStep.EVENT_END = t + "Event End", GodStep.KEYUP = t + "Key Up", GodStep.KEYPRESS = t + "Key Press", GodStep.KEYDOWN = t + "Key Down", GodStep.IMAGE_LOADED = t + "Image Loaded", GodStep.FRAME_MOVE = t + "Frame Move", GodStep.FRAME_RDOWN = t + "Frame Right Down", GodStep.FRAME_RUP = t + "Frame Right Up", GodStep.FRAME_DOWN = t + "Frame Down", GodStep.FRAME_UP = t + "Frame Up", GodStep.FRAME_OUT = t + "Frame Out", GodStep.FRAME_OVER = t + "Frame Over", GodStep.FRAME_CHANGED = t + "Frame Changed", GodStep.DATA_LOADED = t + "Data Loaded", GodStep.DOWN = "down", GodStep.COLOR_STAGE = 4473924, GodStep.MAX_INT = 9007199254740992, GodStep.GOLD = .6180339887, GodStep.IGOLD = 1 - GodStep.GOLD, GodStep.WHITE = 16777215, GodStep.BLACK = 0, GodStep.RED = 16711680, GodStep.GREEN = 65280, GodStep.BLUE = 255
    }, new GodStep.Const, GodStep.Frame = function(t, e, i) {
        PIXI.DisplayObjectContainer.call(this), this.frames = [], this.W = e, this.H = i, this.name = t || "Frame" + GodStep.Frame.frameCount++
    }, GodStep.Frame.frameCount = 0, pro = GodStep.Frame.prototype = Object.create(PIXI.DisplayObjectContainer.prototype), pro.addChild = function(t) {
        return this.addChildAt(t, this.children.length), t
    }, pro.addFrame = function(t, e) {
        return this.frames.push(t), this.frames[t.name] = t, e ? e.addChild(t) : this.addChild(t), t
    }, pro.addFrameAt = function(t, e, i) {
        return this.frames.push(t), this.frames[t.name] = t, e ? i ? e.addChildAt(t, i) : e.addChild(t) : i ? this.addChildAt(t, i) : this.addChild(t), t
    }, pro.delFrame = function(t) {
        return this.frames.splice(this.frames.indexOf(t), 1), delete this.frames[t.name], t.parent.removeChild(t), t
    }, pro.setHitArea = function(t, e, i, s, n) {
        var r = n || this;
        r.interactive = !0, r.hitArea = new PIXI.Rectangle(t, e, i, s)
    }, pro.destroy = function() {
        for (var t = this.children; t.length;) this.removeChild(t[0]);
        return this
    }, pro.destrukt = function() {
        this.destroy();
        var t = this.parent;
        return t && (t.delFrame ? t.delFrame(this) : t.removeChild(this)), this
    }, pro.update = function() {
        for (var t, e = 0; t = this.frames[e]; e++) t.update()
    }, pro.place = function(t, e) {
        this.x = t, this.y = e
    }, pro.addPoint = function(t, e) {
        this.ps = this.ps || [], this.ps.push(new PIXI.Point(t, e))
    }, pro.addWay = function() {
        var t;
        return this.ways = this.ways || [], this.ways.push(t = new GodStep.Way(new PIXI.Point(0, 0))), t.push(new PIXI.Point(20, 20), "p"), t
    }, pro.isInRect = function(t, e) {
        return GodStep.Math.isInRect(t, e, this.position.x, this.position.y, this.W, this.H)
    }, pro.viewOriginal = function() {
        for (var t = 0, e = this.children.length - 1; e > t;) this.children[t].visible = !0, t++;
        this.rendered.alpha = 0
    }, pro.reCache = function() {
        var t = this.alpha,
            e = this.visible;
        this.visible = !0, this.alpha = 1, this.cacheAsBitmap = !1, this.cacheAsBitmap = !0, this.visible = e, this.alpha = t
    }, pro.setData = function(t) {
        if (t.lp && (this.loop || (this.loop = new GodStep.Loop), this.loop.setData(t.lp)), t.ws) {
            this.ways = [];
            for (var e = 0; e < t.ws.length; e++) this.ways.push(GodStep.Way.parse(t.ws[e]))
        }
        if (t.fr)
            for (var i = 0; i < t.fr.length; i++) {
                var s = this.frames[t.fr[i].n];
                s && s.setData(t.fr[i])
            }
    }, pro.getData = function() {
        var t = {};
        if (t.n = this.name, this.loop && (t.lp = this.loop.getData()), this.ways) {
            t.ws = [];
            for (var e = 0; e < this.ways.length; e++) t.ws.push(this.ways[e].getData())
        }
        if (this.frames.length > 0) {
            for (var i = [], s = 0; s < this.frames.length; s++) "Frame" != this.frames[s].name.substr(0, 5) && i.push(this.frames[s].getData());
            i.length > 0 && (t.fr = i)
        }
        return t
    }, pro.resizeRendered = function(t, e) {
        var i = !1;
        (this.renderedTexture.width != t || this.renderedTexture.height != e) && (i = !0), this.renderedTexture.resize(t, e), i && (this.renderThis(-t / 2, -e / 2), this.rendered.position = new PIXI.Point(-t / 2, -e / 2))
    }, pro.createGraphics = function(t, e) {
        var i = this[t || "graphics"] = new PIXI.Graphics;
        return void 0 == e ? this.addChild(i) : null != e && e.addChild(i),
            this[t || "graphics"]
    }, pro.createText = function(t, e, i, s, n) {
        return this.addChild(new PIXI.Text(t, {
            font: "" + e + "px " + i,
            align: s || "center",
            fill: n || "#ffffff"
        }))
    }, pro.renderThis = function(t, e) {
        var i = 0;
        this.lastOffRendered = new PIXI.Point(t, e);
        var s, n = this.children.length - 1;
        .5 * this.W, .5 * this.H;
        for (this.rendered.alpha = 1, this.rendered.position = new PIXI.Point(t, e); n > i;) s = this.children[i], s.visible = !0, this.renderedTexture.render(s, {
            x: s.position.x - t,
            y: s.position.y - e
        }, 0 == i), s.visible = !1, i++
    }, pro.createRendered = function() {
        return this.addChild(this.rendered = new PIXI.Sprite(this.renderedTexture = new PIXI.RenderTexture(this.W, this.H))), this.rendered
    }, pro.roundRect = function(t, e, i, s, n, r, o) {
        var a = this.graphics;
        a.beginFill(i, s), a.drawRoundedRect(r || 0, o || 0, t, e, n), a.endFill()
    }, pro.rect = function(t, e, i, s, n, r, o) {
        var a = o || this.graphics || this.addChild(this.graphics = new PIXI.Graphics);
        a.beginFill(i, s || 1), a.drawRect(n || 0, r || 0, t, e), a.endFill()
    }, pro.redraw = function() {}, Object.defineProperty(pro, "Scale", {
        get: function() {
            return this.scale.x
        },
        set: function(t) {
            this.scale.x = this.scale.y = t
        }
    }), Object.defineProperty(pro, "Place", {
        get: function() {
            return new PIXI.Point(this.x, this.y)
        },
        set: function(t) {
            this.x = t.x, this.y = t.y
        }
    }), Object.defineProperty(pro, "IsDown", {
        get: function() {
            return this.isDown
        },
        set: function(t) {
            this.isDown = t
        }
    }), Object.defineProperty(pro, "IsOver", {
        get: function() {
            return this.isOver
        },
        set: function(t) {
            this.isOver = t
        }
    }), GodStep.Event = function(t, e) {
        this.start = t, this.length = e, this.startCount = 0, this.id = GodStep.Event.count++, PIXI.EventTarget.call(this)
    }, GodStep.Event.DATA_TRUTH = 1e3, GodStep.Event.count = 0, pro = GodStep.Event.prototype = Object.create(Object.prototype), pro.getData = function() {
        var t = GodStep.Event.DATA_TRUTH.toString().length,
            e = {};
        return e.s = this.start.toString().substr(0, t), e.l = this.length.toString().substr(0, t), e.y = this.y.toString().substr(0, t), e
    }, pro.getPosition = function(t) {
        return (t - this.start) / this.length
    }, pro.reset = function() {
        this.isStarted = !1, this.startCount = 0
    }, pro.finish = function() {
        this.isStarted && (this.isStarted = !1, GodStep.dispatch(this, GodStep.EVENT_END))
    }, pro.begin = function() {
        this.startCount++, this.isStarted = !0, GodStep.dispatch(this, GodStep.EVENT_START)
    }, GodStep.Event.parse = function(t) {
        var e = new GodStep.Event(parseFloat(t.s), parseFloat(t.l));
        return e.y = parseFloat(t.y), e
    }, GodStep.Dialog = function(t) {
        this.soul = t, GodStep.Frame.call(this, "Dialog"), this.rect(t.W, t.H, 0, .5, 0, 0), this.windowRect = this.addChild(new PIXI.Graphics), this.messageText = this.createText("message", 30, "Arial", "left")
    }, pro = GodStep.Dialog.prototype = Object.create(GodStep.Frame.prototype), pro.view = function() {
        this.visible = !0, this.alpha = 1
    }, pro.update = function() {
        this.visible && this.outTime && (this.outTime -= .1, this.outTime < 0 && (this.alpha -= .1, this.alpha < 0 && (this.alpha = 0, this.outTime = null, this.visible = !1)))
    }, pro.out = function(t) {
        this.outTime = t
    }, pro.setMessage = function(t) {
        trace(t), this.messageText.setText(t), this.messageText.updateText(), this.messageText.position.x = this.soul.W / 2 - this.messageText.width / 2, this.messageText.position.y = this.soul.H / 2 - this.messageText.height / 2
    }, GodStep.Image = function(t) {
        t || trace(t), PIXI.Sprite.call(this, t), PIXI.EventTarget.call(this, t), this.isNewTexture = !0
    }, extend(GodStep.Image, PIXI.Sprite), GodStep.Image.fromImage = function(t, e) {
        t.length > 4 && "http" != t.substr(0, 4) && (t = GodPath + t);
        var i = new GodStep.Image(PIXI.Texture.fromImage(t));
        return e && (i.texture.image = i, i.texture.baseTexture.hasLoaded || i.texture.addEventListener("update", e)), i
    }, pro.place = function(t, e) {
        this.x = t, this.y = e
    }, pro.update = function() {
        this.isNewTexture && this.texture.baseTexture.hasLoaded && (this.isNewTexture = !1, GodStep.dispatch(this, GodStep.IMAGE_LOADED))
    }, Object.defineProperty(pro, "Scale", {
        get: function() {
            return this.scale.x
        },
        set: function(t) {
            this.scale.x = this.scale.y = t
        }
    }), GodStep.Preloader = function(t) {
        this.preloadState = 0, GodStep.Preloader.textures = [], this.startS = t.startS, this.soul = t, this.isAudioTag = t.AUDIOTAG, this.isOnlyOneView = !0, GodStep.Frame.call(this, "Preloader", t.W, t.H), PIXI.EventTarget.call(this)
    }, extend(GodStep.Preloader, GodStep.Frame), GodStep.ASSETS_LOADED = "assets loaded", GodStep.SOUNDS_LOADED = "sounds loaded", pro.loadAll = function(t, e, i, s, n, r) {
        this.textures = [], this.pathImages = t;
        var o, a;
        for (this.images = e, this.assets = r, this.exts = [], o = 0; o < this.images.length; o++) this.exts.push(".png");
        for (o = 0; o < i.length; o++) this.images.push(i[o]), this.exts.push(".jpg");
        this.imagesCount = this.images.length, this.images.length > 0 && (a = GodStep.Image.fromImage(this.pathImages + this.images[0] + this.exts[0]), a.p = this, a.texName = this.images[0], this.textures[a.texName] = a.texture), this.initSounds(s, n), this.soundsCount = n.length, 0 == this.images.length && (this.isImagesComplete = !0, this.loadSounds())
    }, pro.trace = function(t) {
        trace(t)
    }, pro.initSounds = function(t, e) {
        this.trace("init sounds"), GodStep.Game.instance.sound = {};
        for (var i = [], s = !1, n = 0; n < e.length; n++) {
            var r = e[n];
            s = !1, r.length > 4 && "loop" == r.substr(0, 4) && (s = !0, r = r.substr(5, r.length - 5)), i.push({
                src: r,
                id: r,
                loop: s
            })
        }
        this.soundPath = t, GodStep.Game.instance.sound.needLoaded = this.needLoaded = this.sounds = i
    }, pro.loadSound = function(t, e, i) {
        var s = new Audio;
        return i && s.addEventListener("ended", function() {
            s.currentTime = 0, s.play()
        }, !1), this.sounds.push(s), s.src = t, s.preload = "auto", s.volume = e, s.preloader = this, s.onloadeddata = this.launchApp, s.load(), s
    }, pro.launchApp = function(t) {
        var e = this.preloader;
        e.audio_preload++, e.audio_preload == e.needLoaded.length || 1 == t ? e.startSounds() : e.loadSound(GodPath + e.soundPath + e.needLoaded[e.audio_preload].src + "." + e.support.audio, 1, e.needLoaded[e.audio_preload].loop)
    }, pro.startSounds = function() {
        this.loadAssets()
    }, pro.loadSounds = function() {
        if (this.isAudioTag) {
            this.support = {}, this.audio_preload = 0, GodStep.Game.instance.sound.sounds = this.sounds = [], GodStep.Game.instance.sound.AVAILABLE = !0;
            var t = document.createElement("audio"),
                e = !(!t.canPlayType || !t.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, "")),
                i = !(!t.canPlayType || !t.canPlayType("audio/mpeg;").replace(/no/, ""));
            if (e) trace("AUDIOTAG: ogg"), this.support.audio = "ogg";
            else {
                if (!i) return trace("no sound supported"), this.support.audio = "no", GodStep.Game.instance.sound.AVAILABLE = !1, this.startSounds(), 0;
                trace("AUDIOTAG: mp3"), this.support.audio = "mp3"
            }
            this.loadSound(GodPath + this.soundPath + this.needLoaded[0].src + "." + this.support.audio, 1, this.needLoaded[0].loop)
        } else {
            this.trace("loadSounds");
            var s = GodStep.Game.instance.sound = {
                preloader: this
            };
            if (s.AVAILABLE = !0, !window.createjs) return s.AVAILABLE = !1, GodStep.Game.instance.sound = {}, void this.loadAssets();
            if ((createjs.BrowserDetect.isIOS || createjs.BrowserDetect.isAndroid || createjs.BrowserDetect.isBlackberry) && (this.ISMOBILE = !0), s.AVAILABLE, this.soul.isNativeAndroid) s.AVAILABLE = !1, GodStep.Game.instance.sound = {}, this.loadAssets();
            else {
                if (!createjs.Sound.initializeDefaultPlugins()) return s.AVAILABLE = !1, void this.loadAssets();
                if (s.AVAILABLE) {
                    for (var n = 0; n < this.sounds.length; n++) this.sounds[n].src += ".ogg";
                    createjs.Sound.alternateExtensions = ["mp3"], createjs.Sound.addEventListener("fileload", this.h_loadedSound), s.countLoaded = this.sounds.length, createjs.Sound.addEventListener("fileload", createjs.proxy(this.h_loadedSound, this)), createjs.Sound.registerSounds(this.sounds, GodPath + this.soundPath)
                } else GodStep.Game.instance.sound = {}, this.loadAssets()
            }
        }
    }, pro.update = function() {
        if (!this.isImagesComplete) {
            var t;
            if (this.images) {
                for (var e in this.images) {
                    var i = this.textures[this.images[e]];
                    if (i && i.baseTexture.hasLoaded && (this.exts.splice(this.images.indexOf(this.images[e]), 1), this.images.splice(this.images.indexOf(this.images[e]), 1), this.images.length > 0 && (t = GodStep.Image.fromImage(this.pathImages + this.images[0] + this.exts[0]), t.p = this, t.texName = this.images[0], this.textures[t.texName] = t.texture), this.images.length > 0))
                        for (var s = 0; 10 > s; s++) this.images[s] && (t = GodStep.Image.fromImage(this.pathImages + this.images[s] + this.exts[s]), t.p = this, t.texName = this.images[s], this.textures[t.texName] = t.texture)
                }
                0 == this.images.length && (this.isImagesComplete = !0, GodStep.textures = this.textures, null != GodStep.IMAGE_RESOLUTION && 1 != GodStep.IMAGE_RESOLUTION && this.resizeImages(GodStep.IMAGE_RESOLUTION), this.loadSounds())
            }
        }
    }, pro.resizeImages = function(t) {
        var e;
        for (var i in GodStep.textures) {
            var s = !1;
            if (null != GodStep.DONT_RESIZE)
                for (e = 0; e < GodStep.DONT_RESIZE.length; e++) i == GodStep.DONT_RESIZE[e] && (s = !0);
            if (!s) {
                var n = GodStep.textures[i],
                    r = new PIXI.RenderTexture(parseInt(n.width * t), parseInt(n.height * t));
                this.addChild(this.spr = new PIXI.Sprite(n)), r.render(this.spr, new PIXI.Matrix(t, 0, 0, t, 0, 0)), this.removeChild(this.spr), GodStep.textures[i] = r, 0 == r.width || 0 == r.height
            }
        }
        for (var o in PIXI.BaseTextureCache) {
            if (null != GodStep.DONT_RESIZE)
                for (s = !1, e = 0; e < GodStep.DONT_RESIZE.length; e++) {
                    var a = o.search(GodStep.DONT_RESIZE[e]);
                    a >= 0 && (s = !0)
                }
            s || PIXI.BaseTextureCache[o].isLoader || PIXI.BaseTextureCache[o].destroy()
        }
    }, pro.loadAssets = function() {
        if (this.trace("loading assets"), this.assets) {
            var t;
            t = void 0 != window.GodAssetsPath ? [window.GodAssetsPath + this.assets[0]] : [this.pathImages + this.assets[0]];
            var e;
            this.fontLoaderClass ? (e = new this.fontLoaderClass(t), this.soul.startS *= this.Scale, dispatch(this, GodStep.ASSETS_LOADED)) : (e = new PIXI.AssetLoader(t), e.onComplete = this.h_loadedAssets, e.preloader = this, e.load())
        } else dispatch(this, GodStep.ASSETS_LOADED)
    }, pro.h_loadedSound = function(t) {
        var e = GodStep.Game.instance.sound;
        e.countLoaded--, 0 == e.countLoaded && (this.trace("sound loaded"), e.preloader.loadAssets())
    }, pro.h_loadedAssets = function(t) {
        this.preloader.trace("sound game"), this.soul && (this.soul.startS *= this.Scale), dispatch(this.preloader, GodStep.ASSETS_LOADED)
    }, GodStep.State = function() {
        this.values = []
    }, extend(GodStep.State, Object), pro.pushValues = function(t, e) {
        this.values = t.slice(0, e)
    }, pro.push = function(t) {
        this.values.push(t)
    }, pro.randomize = function() {
        for (var t = this.values, e = t.length, i = 0; e > i; i++) t[i] = Math.random()
    }, pro.clone = function() {
        for (var t = new GodStep.State, e = this.values, i = t.values, s = e.length, n = 0; s > n; n++) i.push(e[n]);
        return t
    }, GodStep.Color = function(t, e, i) {
        this.r = t || 0, this.g = e || 0, this.b = i || 0, this.calcHex()
    }, extend(GodStep.Color, Object), pro.add = function(a) {
        with(this) r += a, g += a, b += a, r = Math.max(0, Math.min(r, 255)), g = Math.max(0, Math.min(g, 255)), b = Math.max(0, Math.min(b, 255));
        return this
    }, pro.grayscale = function() {
        var t = (this.r + this.g + this.b) / 3;
        return this.r = t, this.g = t, this.b = t, this
    }, pro.calcHex = function() {
        var h;
        with(this) h = (r << 16) + (g << 8) + b;
        return this.hex = h, h
    }, pro.clone = function(t) {
        return new GodStep.Color(t.r, t.g, t.b)
    }, pro.mix = function(t, e) {
        var i = 1 - e;
        this.r = parseInt(t.r * e + this.r * i), this.g = parseInt(t.g * e + this.g * i), this.b = parseInt(t.b * e + this.b * i)
    }, GodStep.Color.getData = function() {
        return this.calcHex().toString(16)
    }, GodStep.Color.fromHEX = function(t) {
        return new GodStep.Color(t >> 16 & 255, t >> 8 & 255, 255 & t)
    }, GodStep.Color.random = function() {
        return new GodStep.Color(parseInt(255 * Math.random()), parseInt(255 * Math.random()), parseInt(255 * Math.random()))
    }, GodStep.Point = function(t, e, i) {
        this.x = t || 0, this.y = e || 0, this.z = i || 0
    }, pro = Object.prototype = Object.create(Object.prototype), pro.clone = function(t) {
        return new GodStep.Point(t.x, t.y, t.z)
    }, GodStep.Point.getLength = function(t) {
        return Math.sqrt(t.x * t.x + t.y * t.y)
    }, GodStep.Point.distance2 = function(t, e, i, s) {
        return Math.sqrt(Math.pow(t - i, 2) + Math.pow(e - s, 2))
    }, GodStep.Point.distance = function(t, e) {
        return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
    }, GodStep.Point.middlePoint = function(t, e, i) {
        return new GodStep.Point(t.x + (e.x - t.x) * i, t.y + (e.y - t.y) * i)
    }, GodStep.Point.getData = function(t) {
        return [parseInt(1e3 * t.x) / 1e3, parseInt(1e3 * t.y) / 1e3]
    }, GodStep.Point.random = function(t, e, i, s) {
        return new GodStep.Point(t + Math.random() * i, e + Math.random() * s)
    }, GodStep.Point.randomR = function(t, e) {
        var i = Math.random();
        return new GodStep.Point(t + i * e, t + i * e)
    }, GodStep.Ajax = function(t, e, i, s) {
        this.parent = e, this.load(t, i, s)
    }, pro = GodStep.Ajax.prototype = Object.create(Object.prototype), pro.load = function(t, e, i) {
        var s = this.xhr = new XMLHttpRequest;
        s.open("GET", t, !0), s.onload = e, s.onerror = i || function(t) {
            trace("Error: " + t)
        }, s.parent = this.parent, s.send()
    }, GodStep.Bezier = function(t, e, i, s) {
        this.start = t || new PIXI.Point, this.control = e || new PIXI.Point, this.end = i || new PIXI.Point, this.isSegment = Boolean(s)
    }, GodStep.Bezier.PRECISION = 1e-10, pro = GodStep.Bezier.prototype = Object.create(Object.prototype), pro.startToControlVector = function() {
        return new PIXI.Point(this.control.x - this.start.x, this.control.y - this.start.y)
    }, pro.diagonalVector = function() {
        return new PIXI.Point(this.start.x - 2 * this.control.x + this.end.x, this.start.y - 2 * this.control.y + this.end.y)
    }, pro.getLength = function() {
        return this.getSegmentLength(1)
    }, pro.getSegmentLength = function(t) {
        var e, i, s = this.startToControlVector(),
            n = this.diagonalVector(),
            r = GodStep.Point.getLength(s),
            o = r * r,
            a = 2 * (s.x * n.x + s.y * n.y),
            h = GodStep.Point.getLength(n),
            l = h * h;
        if (0 == h) e = 2 * h * t, i = 0;
        else {
            var d = Math.sqrt(l * t * t + a * t + o),
                c = (a + 2 * l * t) / h + 2 * d,
                u = a / h + 2 * r,
                p = o - .25 * a * a / l;
            e = .5 * (2 * l * t + a) * d / l, Math.abs(c) >= GodStep.Bezier.PRECISION && (e += Math.log(c) / h * p), i = .5 * a * r / l, Math.abs(u) >= GodStep.Bezier.PRECISION && (i += Math.log(u) / h * p)
        }
        return e - i
    }, pro.getPoint = function(t, e) {
        if (isNaN(t)) return null;
        e = e || new PIXI.Point;
        var i = 1 - t,
            s = t * t,
            n = i * i;
        return e.x = n * this.start.x + 2 * t * i * this.control.x + s * this.end.x, e.y = n * this.start.y + 2 * t * i * this.control.y + s * this.end.y, e
    }, GodStep.Curve = function(t, e) {
        this.start = t || new PIXI.Point, this.end = e || new PIXI.Point, this.beziers = [], this.controls = [], this.points = [this.start, this.end]
    }, extend(GodStep.Curve, GodStep.Frame), pro.drawBezier = function(t, e, i) {
        i && t.moveTo(e.start.x, e.start.y), t.quadraticCurveTo(e.control.x, e.control.y, e.end.x, e.end.y)
    }, pro.update = function() {
        var t = this.beziers.length;
        if (t)
            for (var e, i, s = this.beziers[0], n = 1; t > n; n++) e = this.beziers[n], i = GodStep.Math.middlePoint(s.control, e.control, .5), e.start.x = i.x, e.start.y = i.y, s = e
    }, pro.draw = function(t, e) {
        var i = this.beziers.length;
        if (this.update(), e || t.moveTo(this.start.x, this.start.y), !i) return void t.lineTo(this.end.x, this.end.y);
        var s = this.beziers[0];
        this.drawBezier(t, s, !1);
        for (var n = 1; i > n; n++) s = this.beziers[n], this.drawBezier(t, s, !1)
    }, pro.addControl = function(t) {
        if (this.controls.push(t), this.points.splice(1, 0, t), t) {
            var e;
            if (this.beziers.length) {
                var i = this.beziers[this.beziers.length - 1];
                i.end = new PIXI.Point, e = new GodStep.Bezier(i.end, t, this.end)
            } else e = new GodStep.Bezier(this.start, t, this.end);
            this.beziers[this.beziers.length] = e
        }
    }, pro.getLength = function() {
        var t, e = this.beziers.length;
        if (e) {
            for (var i = 0, s = 0; e > s; s++) {
                var n = this.beziers[s];
                i += n.getLength()
            }
            t = i
        } else t = GodStep.Point.distance(this.start, this.end);
        return t
    }, pro.getPoint = function(t) {
        if (0 == this.controls.length) return new PIXI.Point((this.end.x - this.start.x) * t + this.start.x, (this.end.y - this.start.y) * t + this.start.y);
        for (var e = 0, i = 0, s = t * this.getLength(), n = 0; n < this.beziers.length; n++)
            if (e += this.beziers[n].getLength(), e >= s) {
                this.lastBezier = this.beziers[n], i = e - this.beziers[n].getLength();
                break
            }
        var r = (s - i) / this.lastBezier.getLength();
        return this.lastBezier.getPoint(r)
    }, GodStep.Path = function(t) {
        this.start = t || new PIXI.Point, this.points = [this.start]
    }, pro = GodStep.Path.prototype = Object.create(Object.prototype), pro.push = function(t) {
        this.points.push(t)
    }, pro.draw = function(t, e) {
        var i = this.points.length;
        if (e ? t.lineTo(this.start.x, this.start.y) : t.moveTo(this.start.x, this.start.y), i)
            for (var s = 1; i > s; s++) t.lineTo(this.points[s].x, this.points[s].y)
    }, GodStep.Way = function(t, e) {
        this.start = t || new PIXI.Point, this.points = [], this.push(t, void 0 == e ? "p" : e), this.start.isStart = !0, this.curves = [], this.position = 0
    }, extend(GodStep.Way, Object), pro.clone = function() {
        for (var t, e = new GodStep.Way(this.start.clone(), this.start.ctype), i = this.points.length, s = 1; i > s; s++) t = this.points[s], e.push(t.clone(), t.ctype);
        return e
    }, pro.offset = function(t, e) {
        for (var i = 0; i < this.points.length; i++) this.points[i].x += t, this.points[i].y += e
    }, pro.pushc = function(t) {
        this.push(t, "c")
    }, pro.pushp = function(t) {
        this.push(t, "p")
    }, pro.push = function(t, e) {
        t.ctype = e, this.points.push(t)
    }, pro.addPoint = function(t, e) {
        for (var i = 0; i < this.points.length; i++)
            if (this.points[i] == e) {
                var s = this.points[i + 1];
                return this.points.splice(i + 1, 0, t), s ? (t.x = .5 * (this.points[i].x + s.x), t.y = .5 * (this.points[i].y + s.y)) : (t.x = .5 * (this.points[i].x + this.start.x), t.y = .5 * (this.points[i].y + this.start.y)), void(t.ctype = this.points[i].ctype)
            }
    }, pro.delPoint = function(t) {
        for (var e = 0; e < this.points.length; e++)
            if (this.points[e] == t) return void this.points.splice(e, 1)
    }, pro.draw = function(t, e) {
        var i, s, n = this.points.length;
        if (e ? t.lineTo(this.start.x, this.start.y) : "c" == this.start.ctype ? "c" == this.points[n - 1].ctype ? t.moveTo(.5 * (this.start.x + this.points[n - 1].x), .5 * (this.start.y + this.points[n - 1].y)) : t.moveTo(this.points[n - 1].x, this.points[n - 1].y) : t.moveTo(this.start.x, this.start.y), this.points.push(this.points[0]), n)
            for (var r = 1; n > r; r++) i = this.points[r], s = this.points[r + 1], "c" == i.ctype ? 1 == r ? ("c" == this.start.ctype && t.quadraticCurveTo(this.start.x, this.start.y, .5 * (this.start.x + i.x), .5 * (this.start.y + i.y)), "c" == s.ctype ? t.quadraticCurveTo(i.x, i.y, .5 * (this.points[r + 1].x + i.x), .5 * (this.points[r + 1].y + i.y)) : t.quadraticCurveTo(i.x, i.y, this.points[r + 1].x, this.points[r + 1].y)) : "c" == s.ctype ? t.quadraticCurveTo(i.x, i.y, .5 * (this.points[r + 1].x + i.x), .5 * (this.points[r + 1].y + i.y)) : t.quadraticCurveTo(i.x, i.y, this.points[r + 1].x, this.points[r + 1].y) : "c" == this.start.ctype && 1 == r ? t.quadraticCurveTo(this.start.x, this.start.y, i.x, i.y) : t.lineTo(i.x, i.y);
        this.points.pop()
    }, pro.reflect = function(t) {
        var e, i = this.points;
        switch (t) {
            case "x":
                for (e = 0; e < i.length; e++) i[e].x = -i[e].x;
                break;
            case "y":
                for (e = 0; e < i.length; e++) i[e].y = -i[e].y
        }
    }, pro.getData = function() {
        for (var t, e = {}, i = [], s = this.points, n = 0; n < s.length; n++) t = s[n], i.push({
            x: parseInt(10 * t.x) / 10,
            y: parseInt(10 * t.y) / 10,
            c: t.ctype
        });
        return e.t = "w", e.p = i, e
    }, pro.createCurves = function() {
        if (this.points.length > 1) {
            this.curves = [];
            var t, e, i = !1;
            "c" == this.points[0].ctype ? (e = "p" == this.points[this.points.length - 1].ctype ? this.points[this.points.length - 1] : GodStep.Point.middlePoint(this.points[0], this.points[this.points.length - 1], .5), i = !0) : e = this.points[0];
            for (var s, n = 0, r = 1; r < this.points.length; r++)
                if ("p" == this.points[r].ctype) {
                    s = this.points[r], t = new GodStep.Curve(e, s);
                    for (var o = n + 1; r > o; o++) t.addControl(this.points[o]);
                    this.curves.push(t), t.update(), e = s, n = r
                }
            if (n < this.points.length - 1) {
                t = "c" == this.points[this.points.length - 1].ctype ? "c" == this.points[0].ctype ? new GodStep.Curve(e, e) : new GodStep.Curve(e, this.points[0]) : new GodStep.Curve(e, e), i && t.addControl(this.points[0]);
                for (var a = n + 1; a < this.points.length; a++) t.addControl(this.points[a]);
                this.curves.push(t), t.update()
            }
        }
    }, pro.getFirstPoint = function() {
        return this.points[0]
    }, pro.getLastPoint = function() {
        return this.points[this.points.length - 1]
    }, pro.getPoint = function(t) {
        for (var e = Math.min(.999999999, t), i = [], s = 0, n = 0; n < this.curves.length; n++) i.push(this.curves[n].getLength()), s += i[n];
        for (var r = 0, o = 0, a = 0; a < i.length; a++) {
            if (r += i[a], r / s > e) {
                var h = r - o,
                    t = (e * s - o) / h;
                return this.curves[a].getPoint(t)
            }
            o = r
        }
        return null
    }, pro.getBounds = function() {
        for (var t, e = new PIXI.Point(GodStep.MAX_INT, GodStep.MAX_INT), i = new PIXI.Point(-GodStep.MAX_INT, -GodStep.MAX_INT), s = this.points.length, n = this.points, r = 0; s > r; r++) t = n[r], e.x = Math.min(t.x, e.x), e.y = Math.min(t.y, e.y), i.x = Math.max(t.x, i.x), i.y = Math.max(t.y, i.y);
        return new PIXI.Rectangle(e.x, e.y, i.x, i.y)
    }, GodStep.Way.parse = function(t) {
        for (var e, i = t.p, s = new GodStep.Way(new PIXI.Point(i[0].x, i[0].y), i[0].c), n = 1; n < i.length; n++) e = i[n], s.push(new PIXI.Point(e.x, e.y), e.c);
        return s.createCurves(), s
    }, GodStep.Form = function() {
        this.elements = []
    }, pro = GodStep.Form.prototype = Object.create(Object.prototype), pro.update = function() {}, pro.addPoint = function(t, e) {
        for (var i, s = this.elements.length, n = 0; s > n; n++) i = this.elements[n], i.addPoint(t, e)
    }, pro.delPoint = function(t) {
        for (var e, i = this.elements.length, s = 0; i > s; s++) e = this.elements[s], e.delPoint(t)
    }, pro.addElem = function(t) {
        this.elements.push(t)
    }, pro.drawLines = function(t) {
        for (var e, i, s, n = this.elements.length, r = 0; n > r; r++) {
            e = this.elements[r], s || (s = e.points[0]);
            for (var o = 0; o < e.points.length; o++) i = e.points[o], t.lineTo(i.x, i.y)
        }
        s && t.lineTo(s.x, s.y)
    }, pro.draw = function(t) {
        for (var e, i = this.elements.length, s = 0; i > s; s++) e = this.elements[s], e.draw(t, s > 0)
    }, pro.clone = function() {
        for (var t = new GodStep.Form, e = this.elements.length, i = 0; e > i; i++) t.addElem(this.elements[i].clone());
        return t
    }, pro.getCenter = function() {
        for (var t, e, i, s, n = 0; n < this.elements.length; n++) {
            if (t = this.elements[n].points, t.length > 2) {
                e = t[0], i = t[1];
                for (var r = 0; r < t.length; r++) e = new PIXI.Point(Math.min(e.x, t[r].x), Math.min(e.y, t[r].y)), i = new PIXI.Point(Math.max(i.x, t[r].x), Math.max(i.y, t[r].y))
            }
            s = s ? new PIXI.Point(.5 * (s.x + .5 * (e.x + i.x)), .5 * (s.y + .5 * (e.y + i.y))) : new PIXI.Point(.5 * (e.x + i.x), .5 * (e.y + i.y))
        }
        return s
    }, pro.setData = function(t) {
        for (var e = 0; e < t.e.length; e++) switch (t.e[e].t) {
            case "w":
                this.addElem(GodStep.Way.parse(t.e[e]))
        }
    }, pro.getData = function() {
        var t = {};
        t.e = [];
        for (var e = 0; e < this.elements.length; e++) t.e.push(this.elements[e].getData());
        return t
    }, pro.getBounds = function() {
        for (var t = new PIXI.Point(GodStep.MAX_INT, GodStep.MAX_INT), e = new PIXI.Point(-GodStep.MAX_INT, -GodStep.MAX_INT), i = 0; i < this.elements.length; i++) {
            var s = this.elements[i].getBounds();
            t.x = Math.min(t.x, s.x), t.y = Math.min(t.y, s.y), e.x = Math.max(e.x, s.width), e.y = Math.max(e.y, s.height)
        }
        return new PIXI.Rectangle(t.x, t.y, e.x, e.y)
    }, GodStep.Math = function() {}, GodStep.Math.middlePoint = function(t, e, i) {
        return new PIXI.Point(t.x + (e.x - t.x) * i, t.y + (e.y - t.y) * i)
    }, GodStep.Math.isInRect = function(t, e, i, s, n, r) {
        return t > i && e > s && i + n > t && s + r > e ? !0 : !1
    }, GodStep.Math.isBetweenLTRB = function(t, e, i) {
        return t.x > e.x && t.y > e.y && t.x < i.x && t.y < i.y ? !0 : !1
    }, GodStep.Math.rotatePoint = function(t, e, i) {
        return new PIXI.Point(e.x + (t.x - e.x) * Math.cos(i) - (t.y - e.y) * Math.sin(i), e.y + (t.y - e.y) * Math.cos(i) + (t.x - e.x) * Math.sin(i))
    }, GodStep.Math.cycle = function(t, e) {
        var i = 1 / e;
        return t / i - parseInt(t / i)
    }, GodStep.IHTML = function() {
        this.addInput = function(t, e, i, s, n, r) {
            var o = this.canvas ? this.canvas.view : this.webgl.view,
                a = document.createElement("input");
            return a.className = e, a.style.position = "absolute", a.style.zIndex = "1000", a.style.left = o.offsetLeft + (s || 0) + "px", a.style.top = o.offsetTop + (n || 0) + "px", a.value = t, a.style.width = (r || 100) + "px", a.onkeyup = i, a.soul = this, this.div.appendChild(a), a
        }, this.addButton = function(t, e, i, s, n) {
            var r = this.canvas ? this.canvas.view : this.webgl.view,
                o = document.createElement("div");
            return o.className = e, o.innerHTML = t, o.style.position = "absolute", o.style.zIndex = "1000", o.style.left = r.offsetLeft + (s || 0) + "px", o.style.top = r.offsetTop + (n || 0) + "px", o.style.cursor = "pointer", o.style["-moz-user-select"] = o.style["-khtml-user-select"] = o.style["-webkit-user-select"] = o.style["-o-user-select"] = "none", o.onclick = i, o.soul = this, this.div.appendChild(o), o
        }, this.addSelectBox = function(t, e, i, s, n) {
            var r = this.canvas ? this.canvas.view : this.webgl.view,
                o = document.createElement("select");
            return o.className = t, o.style.position = "absolute", o.style.zIndex = "1000", o.style.left = r.offsetLeft + (i || 0) + "px", o.style.top = r.offsetTop + (s || 0) + "px", o.style.width = (n || 65) + "px", o.style.cursor = "pointer", o.style["-moz-user-select"] = o.style["-khtml-user-select"] = o.style["-webkit-user-select"] = o.style["-o-user-select"] = "none", o.onchange = e, o.soul = this, this.div.appendChild(o), o
        }, this.addTextLabel_btstrp = function(t, e, i, s) {
            var n = document.createElement("h" + (s ? s : 1)),
                r = document.createElement("span");
            return r.style.position = "absolute", r.style.left = e + "px", r.style.top = i + "px", r.style.resize = "none", r.className = 'label label-default"', r.innerText = t, r.innerText = t, this.div.appendChild(n), n.appendChild(r), n.X = e, n.Y = i, n.span = r, n.W = r.clientWidth, n.H = r.clientHeight, n
        }, this.addTextField_btstrp = function(t, e, i, s, n, r) {
            var o = document.createElement("div"),
                a = (document.createElement("span"), document.createElement("input"));
            return o.style.position = "absolute", o.style.left = t + "px", o.style.top = e + "px", o.style.resize = "none", i && (o.style.width = i + "px"), s && (a.style.height = s + "px"), n && (a.id = n), a.onclick = r, o.className = "input-group", a.className = "form-control", o.placeholder = "Username", o.appendChild(a), a.soul = this, this.div.appendChild(o), a.div = o, a.X = o.X = t, a.Y = o.Y = e, a.W = o.W = o.clientWidth, a.H = o.H = o.clientHeight, a
        }, this.addCalendar2 = function(t, e, i, s, n, r, o) {
            function a(t) {
                return t.toString().length < 2 ? "0" + t : t
            }
            var h = document.createElement("input");
            h.id = r, this.div.appendChild(h);
            for (var l = [], d = 0; 24 > d; d++)
                for (var c = 0; 6 > c; c++) l.push(a(d) + ":" + a(10 * c));
            return $("#" + r).datetimepicker({
                lang: "ru",
                startDate: new Date,
                format: "Y-m-d H:i",
                allowTimes: l,
                autoclose: !1,
                onChangeDateTime: o
            }), h.style.position = "absolute", h.style.left = t + "px", h.style.top = e + "px", h.soul = this, h.style.zIndex = i, h.W = s, h.H = n, h.X = t, h.Y = e, h.readOnly = !0, h
        }, this.addTextArea_btstrp = function(t, e, i, s, n) {
            var r = document.createElement("div"),
                o = (document.createElement("span"), document.createElement("textarea"));
            r.style.position = "absolute", r.style.left = t + "px", r.style.top = e + "px", o.style.resize = "none";
            var a = (n || 0) + "px";
            return o.style["-webkit-border-radius"] = a, o.style["-moz-border-radius"] = a, o.style["border-radius"] = a, i && (r.style.width = i + "px"), s && (o.style.height = s + "px"), r.className = "input-group", o.className = "form-control", r.placeholder = "Username", r.appendChild(o), o.soul = this, this.div.appendChild(r), o.X = r.X = t, o.Y = r.Y = e, o.W = r.W = r.clientWidth, o.H = r.H = r.clientHeight, o.div = r, o
        }, this.addButton_btstrp = function(t, e, i, s) {
            var n = document.createElement("div");
            return n.style.position = "absolute", n.style.left = t + "px", n.style.top = e + "px", n.innerHTML = i, n.className = "btn btn-default disable", n.soul = this, n.onclick = s, this.div.appendChild(n), n.X = t, n.Y = e, n.W = n.clientWidth, n.H = n.clientHeight, n
        }, this.addInputFile2_btstrp = function(t, e, i, s, n, r) {
            var o = document.createElement("div"),
                a = document.createElement("span"),
                h = document.createElement("input");
            return o.style.position = "absolute", o.style.left = t + "px", o.style.top = e + "px", o.style.resize = "none", n && (o.style.width = n + "px"), r && (o.style.height = r + "px"), h.X = t, h.Y = e, a.innerHTML = i, o.className = "file-input-wrapper btn btn-default", h.type = "file", o.appendChild(a), h.soul = this, h.div = o, h.span = a, h["class"] = "btn-primary", h.style.left = "-300px", o.appendChild(h), this.div.appendChild(o), h
        }, this.addInputFile_btstrp = function(t, e, i, s) {
            var n = document.createElement("input");
            return n.type = "file", n.style.position = "absolute", n.style.left = t + "px", n.style.top = e + "px", n.innerHTML = i, n.soul = this, n.onclick = s, this.div.appendChild(n), n.X = t, n.Y = e, n.W = n.clientWidth, n.H = n.clientHeight, n
        }, this.addTextArea = function(t, e, i, s, n) {
            var r = document.createElement("textarea");
            return r.style.position = "absolute", r.className = t || "godstepTextArea", r.style.zIndex = "1000", r.style.width = e + "px", r.style.height = i + "px", r.style.left = s + "px", r.style.top = n + "px", r.soul = this, this.div.appendChild(r), r
        }, GodStep.IHTML.clearSelectBox = function(t) {
            for (; t.options.length;) t.remove(0)
        }
    }, GodStep.IHTML.getPosition = function(t) {
        for (var e = 0, i = 0; t;) e += parseFloat(t.offsetTop), i += parseFloat(t.offsetLeft), t = t.offsetParent;
        return {
            top: Math.round(e),
            left: Math.round(i)
        }
    }, GodStep.IOverOut = function(t, e) {
        this.addEventListener || PIXI.EventTarget.call(this), t && e && this.setHitArea(0, 0, t, e), this.mouseover = function(t) {
            this.IsOver = !0, this.redraw(), GodStep.dispatch(this, GodStep.FRAME_OVER)
        }, this.mouseout = function(t) {
            this.IsOver = !1, this.redraw(), GodStep.dispatch(this, GodStep.FRAME_OUT)
        }
    }, GodStep.IDownUp = function(t, e) {
        this.addEventListener || PIXI.EventTarget.call(this), t && e && (this.setHitArea ? this.setHitArea(0, 0, t, e) : (this.interactive = !0, this.hitArea = new PIXI.Rectangle(0, 0, t, e))), GodStep.addMEvent(this, "move", function(t) {
            GodStep.dispatch(this, GodStep.FRAME_MOVE, null, t)
        }), GodStep.addMEvent(this, "rightup", function(t) {
            this.downRightPoint = t.getLocalPosition(this), this.IsRDown = !0, this.redraw && this.redraw(), GodStep.dispatch(this, GodStep.FRAME_RUP, null, t)
        }), GodStep.addMEvent(this, "rightdown", function(t) {
            this.downRightPoint = t.getLocalPosition(this), this.IsRDown = !0, this.redraw && this.redraw(), GodStep.dispatch(this, GodStep.FRAME_RDOWN, null, t)
        }), GodStep.addMEvent(this, "down", function(t) {
            this.downPoint = t.getLocalPosition(this), this.IsDown = !0, this.redraw && this.redraw(), GodStep.dispatch(this, GodStep.FRAME_DOWN, null, t)
        }), GodStep.addMEvent(this, "up", function(t) {
            this.IsDown = !1, this.downPoint = null, this.redraw && this.redraw(), GodStep.dispatch(t.target, GodStep.FRAME_UP, null, t)
        })
    }, GodStep.IDragDrop = function() {
        this.div.ondragover = this.h_dragOver = function(t) {
            t.stopPropagation(), t.preventDefault && t.preventDefault(), t.dataTransfer.dropEffect = "copy";
            for (var e, i = this.getBoundingClientRect(), s = 0; e = this.mejdu.frames[s]; s++) e instanceof GodStep.DDFrame && e.dropOver(t.clientX - i.left, t.clientY - i.top)
        }, this.div.ondrop = this.h_dragDrop = function(t) {
            t.stopPropagation(), t.preventDefault && t.preventDefault();
            for (var e, i = this.getBoundingClientRect(), s = t.target.files || t.dataTransfer.files, n = 0; e = this.mejdu.frames[n]; n++) e instanceof GodStep.DDFrame && e.dropFiles(s, t.clientX - i.left, t.clientY - i.top)
        }
    },
    function() {
        GodStep.Mejdu = function(t, e, i) {
            GodStep.Mejdu.souls || (GodStep.Audio && new GodStep.Audio, GodStep.Symfony && new GodStep.Symfony, window.requestAnimFrame(GodStep.Mejdu.render)), GodStep.Mejdu.souls = GodStep.Mejdu.souls || [], GodStep.Mejdu.souls.push(this), PIXI.EventTarget.call(this);
            var s, n;
            if (navigator) {
                var r = navigator.userAgent.indexOf("Android") >= 0,
                    o = parseInt((/WebKit\/([0-9]+)/.exec(navigator.appVersion) || 0)[1], 10) || void 0;
                this.isNativeAndroid = r && 534 >= o && 0 == navigator.vendor.indexOf("Google")
            }
            if (this.div = document.getElementById(t), this.div || (this.div = document.createElement("div"), document.body.appendChild(this.div), this.div.id = t, this.div.style.position = "absolute", this.div.style.left = this.div.style.top = "0px"), this.div.mejdu = this, this.name = t, !this.div) return trace(GodStep.ERR_DIV_NF), null;
            trace("[" + GodStep.version + "] {Godstep." + this.name + (this.WEBGL ? " WEBGL" : "") + (this.CANVAS ? " CANVAS" : "") + "}"), e && i ? (this.W = e, this.H = i) : (s = document.body, n = document.documentElement, this.H = Math.max(s.scrollHeight, s.offsetHeight, n.clientHeight, n.scrollHeight, n.offsetHeight), this.FULLPAGE ? (document.body.style.margin = 0, document.body.padding = 0, this.W = this.div.scrollWidth, this.H = n.clientHeight) : (this.W = this.div.clientWidth, this.H = this.div.clientHeight));
            var a = PIXI.defaultRenderOptions;
            if (a.transparent = this.TRANSPARENT, a.antialias = this.ANTIALIAS, this.WEBGL) this.webgl = new PIXI.WebGLRenderer(this.W, this.H, a), this.div.appendChild(this.soulview = this.webgl.view);
            else if (this.CANVAS) this.canvas = new PIXI.CanvasRenderer(this.W, this.H, a), this.canvas.view.style.display = "block", this.div.appendChild(this.soulview = this.canvas.view), GodStep.Mejdu.C = this.canvas;
            else {
                var h = PIXI.autoDetectRenderer(this.W, this.H, a);
                h instanceof PIXI.WebGLRenderer ? (this.WEBGL = !0, this.webgl = h, this.div.appendChild(this.soulview = this.webgl.view)) : (this.CANVAS = !0, this.canvas = h, this.canvas.view.style.display = "block", this.div.appendChild(this.soulview = this.canvas.view), GodStep.Mejdu.C = this.canvas)
            }
            GodStep.COLOR_STAGE ? this.stage = new PIXI.Stage(GodStep.COLOR_STAGE) : this.stage = new PIXI.Stage, this.stage.soul = this, this.frames = [], GodStep.Mejdu.TESTCANVAS || (GodStep.Mejdu.TESTCANVAS = document.createElement("canvas"), GodStep.Mejdu.TESTCANVAS.width = GodStep.Mejdu.TESTCANVAS.height = 1, GodStep.TESTCTX = GodStep.Mejdu.TESTCANVAS.getContext("2d"), GodStep.TESTCTX_RT = new PIXI.RenderTexture(1, 1), GodStep.TESTCTX_IMG = new PIXI.Sprite(GodStep.TESTCTX_RT), GodStep.TESTCTX_C = new PIXI.DisplayObjectContainer, this.stage.addChild(GodStep.TESTCTX_IMG), this.stage.addChild(GodStep.TESTCTX_C)), this.FULLPAGE && (this.WEBGL && this.CANVAS && this.PARALLEL && (this.canvas.view.style.position = "absolute", this.canvas.view.style.left = this.webgl.view.offsetLeft + "px", this.canvas.view.style.top = this.webgl.view.offsetTop + "px"), this.ALWAYSONTOP && (this.canvas.view.style.left = this.canvas.view.style.top = "0px", this.div.style.position = "absolute"), this.div.offsetParent.style["overflow-y"] = "hidden", this.div.offsetParent.style["overflow-x"] = "auto"), this.isStarted = !0, this.isDataLoading = !1, this.visible = !0, this.start()
        }, GodStep.Mejdu.pro = GodStep.Mejdu.prototype, GodStep.Mejdu.pro.start = function() {}, GodStep.Mejdu.pro.update = function() {
            if (this.isStarted && this.visible)
                for (var t, e = 0; t = this.frames[e]; e++) t.update()
        }, GodStep.Mejdu.pro.postFX = function() {}, GodStep.Mejdu.pro.switchZ = function(t) {
            var e = t.getZ();
            t.setZ(this.getZ()), this.setZ(e)
        }, GodStep.Mejdu.pro.getZ = function() {
            return this.canvas ? this.canvas.view.style.zIndex : this.webgl ? this.webgl.view.style.zIndex : void 0
        }, GodStep.Mejdu.pro.setZ = function(t) {
            this.canvas && (this.canvas.view.style.zIndex = t), this.webgl && (this.webgl.view.style.zIndex = t);
        }, GodStep.Mejdu.pro.addPosition = function(t, e, i) {
            i ? (this[i].view.style.position = "absolute", this[i].view.style.left = this[i].view.offsetLeft + t + "px", this[i].view.style.top = this[i].view.offsetTop + e + "px") : (this.webgl && (this.webgl.view.style.position = "absolute", this.webgl.view.style.left = this.webgl.view.offsetLeft + t + "px", this.webgl.view.style.top = this.webgl.view.offsetTop + e + "px"), this.canvas && (this.canvas.view.style.position = "absolute", this.canvas.view.style.left = this.canvas.view.offsetLeft + t + "px", this.canvas.view.style.top = this.canvas.view.offsetTop + e + "px"))
        }, GodStep.Mejdu.pro.setAbsolutePositionAs = function(t, e) {
            var i;
            e ? (i = GodStep.IHTML.getPosition(t[e].view), this[e].view.style.position = "absolute", this[e].view.style.left = i.left + "px", this[e].view.style.top = i.top + "px") : (this.webgl && (i = GodStep.IHTML.getPosition(t.webgl.view), this.webgl.view.style.position = "absolute", this.webgl.view.style.left = i.left + "px", this.webgl.view.style.top = i.top + "px"), this.canvas && (i = GodStep.IHTML.getPosition(t.canvas.view), this.canvas.view.style.position = "absolute", this.canvas.view.style.left = i.left + "px", this.canvas.view.style.top = i.top + "px"))
        }, GodStep.Mejdu.pro.setPositionAs = function(t, e) {
            e ? (this[e].view.style.position = "absolute", this[e].view.style.left = t[e].view.offsetLeft + "px", this[e].view.style.top = t[e].view.offsetTop + "px") : (this.webgl && (this.webgl.view.style.position = "absolute", this.webgl.view.style.left = t.webgl.view.offsetLeft + "px", this.webgl.view.style.top = t.webgl.view.offsetTop + "px"), this.canvas && (this.canvas.view.style.position = "absolute", this.div.style.left = t.div.offsetLeft + "px", this.div.style.top = t.div.offsetTop + "px"))
        }, GodStep.Mejdu.pro.addFrame = function(t, e) {
            return e ? e.addChild(t) : this.stage.addChild(t), this.frames.push(t), this.frames[t.name] = t, t
        }, GodStep.Mejdu.pro.delFrame = function(t) {
            t.parent.removeChild(t), this.frames.splice(this.frames.indexOf(t), 1)
        }, GodStep.Mejdu.pro.dialog = function(t, e) {
            this.dialogWindow || (GodStep.Mejdu.dialogSoul = this, this.addFrame(this.dialogWindow = new GodStep.Dialog(this))), this.dialogWindow.setMessage(t), this.dialogWindow.out(e), this.dialogWindow.view()
        }, GodStep.Mejdu.pro.setData = function(t) {
            this.dataObject = JSON.parse(t), this.isStarted = !0;
            for (var e = 0; e < this.dataObject.frames.length; e++) {
                var i = this.frames[this.dataObject.frames[e].n];
                i && i.setData(this.dataObject.frames[e])
            }
            GodStep.dispatch(this, GodStep.DATA_LOADED)
        }, GodStep.Mejdu.pro.loadData = function(t) {
            this.isStarted = !1, this.isDataLoading = !0, this.dataLoader = new GodStep.Ajax(t + ".json", this, this.h_data)
        }, GodStep.Mejdu.pro.h_data = function(t) {
            this.parent.isDataLoading = !1, this.parent.setData(this.response), this.parent.dataLoader = null
        }, GodStep.Mejdu.pro.beginFps = function() {
            this.fps && this.fps.begin()
        }, GodStep.Mejdu.pro.endFps = function() {
            this.fps && this.fps.end()
        }, GodStep.Mejdu.pro.createTempCanvas = function(t, e) {
            if (!GodStep.TEMPCANVAS) {
                var i = GodStep.TEMPCANVAS = document.createElement("canvas");
                i.width = t, i.height = e, GodStep.TEMPCTX = i.getContext("2d"), this.stage.addChild(GodStep.TEMPCONTAINER = new PIXI.DisplayObjectContainer)
            }
        }, GodStep.Mejdu.pro.createStats = function(t, e, i) {
            var s = this.stats = new Stats;
            s.domElement.style.position = "absolute", s.domElement.style.left = (t || 0) + "px", s.domElement.style.top = (e || 0) + "px", i && document.body.appendChild(s.domElement)
        }, GodStep.Mejdu.pro.resize = function(t, e, i, s) {
            var n = 1,
                r = t * n,
                o = e * n,
                a = i * n,
                h = s * n;
            this.W = r, this.H = o, this.HH = .5 * o, this.HW = .5 * r, this.OH = h, this.OW = a, this.HOW = .5 * r, this.HOH = .5 * h, this.DOW = this.OW - this.W, this.DOH = this.OH - this.H, this.canvas && this.canvas.resize(a || r, h || o), this.webgl && this.webgl.resize(a || r, h || o), this.div.style.width = (a || r) + "px", this.div.style.height = (h || o) + "px"
        }, Object.defineProperty(GodStep.Mejdu.pro, "position", {
            get: function() {
                var t = this.canvas ? this.canvas.view : this.webgl.view;
                return new PIXI.Point(t.clientLeft, t.clientTop)
            },
            set: function(t) {
                this.canvas, this.webgl
            }
        }), Object.defineProperty(GodStep.Mejdu.pro, "visible", {
            get: function() {
                return this.isVisible
            },
            set: function(t) {
                this.isVisible = t, this.canvas && (this.canvas.view.style.visibility = t ? "visible" : "hidden"), this.webgl && (this.webgl.view.style.visibility = t ? "visible" : "hidden"), this.div.style.visibility = t ? "visible" : "hidden"
            }
        })
    }(), GodStep.hitTest = function(t, e, i) {
        var s = GodStep.TESTCTX,
            n = t.parent,
            r = GodStep.TESTCTX_C,
            o = t.parent.children.indexOf(t);
        n.removeChild(t), r.addChild(t), GodStep.TESTCTX_RT.render(r, {
            x: -e,
            y: -i
        }, !0), s.drawImage(GodStep.TESTCTX_IMG.texture.baseTexture.source, 0, 0);
        var a = s.getImageData(0, 0, 1, 1).data[3] > 1;
        return s.clearRect(0, 0, 2, 2), r.removeChild(t), n.addChildAt(t, o), a
    }, GodStep.addMEvent = function(t, e, i) {
        var s, n;
        switch (e) {
            case "up":
                s = "mouseup", n = "touchend";
                break;
            case "move":
                s = "mousemove", n = "touchmove";
                break;
            case "down":
                s = "mousedown", n = "touchstart";
                break;
            case "rightdown":
                s = "rightdown";
                break;
            case "rightup":
                s = "rightup"
        }
        t[s] = i, t[n] = i
    }, GodStep.addEvent = function(t, e, i) {
        t.addEventListener || PIXI.EventTarget.call(t), t.addEventListener(e, i)
    }, GodStep.dispatch = function(t, e, i, s) {
        var n;
        try {
            s ? (n = s, s.type = e) : n = new Event(e), n.t = t, n.data = i, t.dispatchEvent(n)
        } catch (r) {
            n = document.createEvent("Event"), n.t = t, n.data = i, n.initEvent(e, !0, !0), t.dispatchEvent(n)
        }
    }, GodStep.Mejdu.render = function() {
        for (var t = GodStep.Mejdu.souls.length, e = 0; t > e; e++) {
            var i = GodStep.Mejdu.souls[e];
            i.update(), i.WEBGL && i.webgl.render(i.stage), i.CANVAS && i.canvas.render(i.stage), i.postFX()
        }
        window.requestAnimFrame(GodStep.Mejdu.render)
    };
var Games = Games || {};
Games.SCALE = 1, Games.FRAME_RATE = 1 / 60, GodStep.Game = function(t, e, i, s, n, r, o, a, h) {
    function l() {
        var t = d.match(/Android.*AppleWebKit\/([\d.]+)/);
        return t && t[1] < 537
    }
    switch (this.ANTIALIAS = !0, GodStep.Game.AUDIOEVENT = !1, GodStep.IMAGE_RESOLUTION = GodStep.IMAGE_RESOLUTION || 1, this.TRANSPARENT = GodStep.Game.TRANSPARENT, this.FULLPAGE = GodStep.Game.FULLPAGE, GodStep.Game.MUTED = !1, o) {
        case "auto":
            break;
        case "canvas":
            this.CANVAS = !0;
            break;
        case "webgl":
            this.WEBGL = !0
    }
    if (this.MW = a || 1536, this.MH = h || 1854, this.align = "centerG", this.isRunning = !1, this.PLAYER_SLOT = n, this.SETTINGS_SLOT = s, this.preloaderClass = i, this.defaultSettings = r, Games.SOUND = !0, GodStep.Game.instance = this, this.stageColor = GodStep.COLOR_STAGE = e, window.navigator) {
        var d = window.navigator.userAgent; - 1 != d.search("NOKIA") && -1 != d.search("635") && (this.isNokia635 = !0);
        var c = d.toLowerCase();
        this.isSharpMiniStock = /SHL24/i.test(c) && l(), this.isXperiaAStock = /SO-04E/i.test(c) && l(), this.isFujitsu = /F-01F/i.test(c) && l(), this.isSharp = /SH-01F/i.test(c) && l(), this.isS4 = /GT-I9505/i.test(c) || /GT-I9502/i.test(c) || /GT-I9500/i.test(c), this.isAndroid = d.indexOf("Android") >= 0;
        var u = parseInt((/WebKit\/([0-9]+)/.exec(navigator.appVersion) || 0)[1], 10) || void 0;
        this.isNativeAndroid = this.isAndroid && 534 >= u && 0 == navigator.vendor.indexOf("Google"), trace("useragent " + d + " " + this.isS4)
    }
    this.isS4 && (this.AUDIOTAG = !0), GodStep.Mejdu.call(this, t), this.SW = this.W, this.SH = this.H, this.RIGHTCLICK && (this.canvas && (this.canvas.view.oncontextmenu = function(t) {
        t.preventDefault()
    }), this.webgl && (this.webgl.view.oncontextmenu = function(t) {
        t.preventDefault()
    }))
}, extend(GodStep.Game, GodStep.Mejdu), GodStep.Game.FULLPAGE = !0, pro.update = function() {
    this.beginFps(), GodStep.Mejdu.prototype.update.call(this), this.endFps()
}, pro.start = function() {
    this.storage = new GodStep.LocalStorage, this.settingsDATA = GodStep.LoadLocal(this.SETTINGS_SLOT), this.settingsDATA || (GodStep.SaveLocal(GodStep.LoadText(this.defaultSettings), this.SETTINGS_SLOT), this.settingsDATA = GodStep.LoadLocal(this.SETTINGS_SLOT), trace("default settings")), this.resizeWindow(this.W, this.H), this.addFrame(this.assets = new this.preloaderClass(this)), addEvent(this.assets, GodStep.ASSETS_LOADED, this.h_asssets), h_resize(), this.reposition(), this.assets.load(), this.assets.Place = new PIXI.Point((this.OW - this.W) / 2, (this.OH - this.H) / 2), this.initSleepDetector()
}, pro.initSleepDetector = function() {
    function t(t) {
        var e = "visible",
            s = "hidden",
            n = {
                focus: e,
                focusin: e,
                pageshow: e,
                blur: s,
                focusout: s,
                pagehide: s
            };
        t = t || window.event;
        var r = !1;
        r = t.type in n ? n[t.type] : this[i], r ? (GodStep.Game.SOUND_MUTE = !0, trace("MUTED"), GodStep.muteSound(null, 0)) : (GodStep.Game.SOUND_MUTE = !1, trace("UNMUTED"), GodStep.muteSound(null, 1))
    }
    var e = !1;
    if (navigator && (-1 != navigator.appName.indexOf("Internet Explorer") || -1 != navigator.appName.indexOf("Netscape")) && (e = !0), e) {
        var i = "hidden";
        i in document ? document.addEventListener("visibilitychange", t) : (i = "mozHidden") in document ? document.addEventListener("mozvisibilitychange", t) : (i = "webkitHidden") in document ? document.addEventListener("webkitvisibilitychange", t) : (i = "msHidden") in document ? document.addEventListener("msvisibilitychange", t) : "onfocusin" in document ? document.onfocusin = document.onfocusout = t : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = t
    } else GodStep.Game.sleepLoop || (GodStep.Game.lastSeen = Date.now(), GodStep.Game.sleepLoop = function() {
        var t = Date.now() - GodStep.Game.lastSeen;
        GodStep.Game.lastSeen = Date.now(), setTimeout(GodStep.Game.sleepLoop, 50), t > 350 && !GodStep.Game.MUTED ? GodStep.Game.SOUND_MUTE || (trace("MUTED"), GodStep.muteSound(null, 0), GodStep.Game.SOUND_MUTE = !0) : GodStep.Game.SOUND_MUTE && (trace("UNMUTED"), GodStep.muteSound(null, 1), GodStep.Game.SOUND_MUTE = !1)
    }, GodStep.Game.sleepLoop())
}, pro.reposition = function() {
    var t;
    switch (this.align) {
        case "centerG":
            t = new PIXI.Point((this.OW - this.W) / 2, (this.OH - this.H) / 2), t.y = Math.max(0, t.y);
            break;
        case "left":
            t = new PIXI.Point
    }
    for (var e = 0; e < this.frames.length; e++) this.frames[e].Place = t, this.frames[e].Scale = this.assets.Scale
}, pro.screenTo = function(t, e) {
    this.transmission.start(t, e)
}, pro.resizeWindow = function(t, e) {
    this.FULLRESIZE ? (this.MW / this.MH > t / e ? (this.FULLPAGE && (this.div.style.position = "relative"), this.resize(t, t * this.MH / this.MW, t, e)) : (this.FULLPAGE && (this.div.style.position = "relative"), this.resize(e * this.MW / this.MH, e, t, e)), this.S = this.W / this.MW, null == this.startS ? this.assets ? this.assets.Scale = this.S / this.startS : this.startS = this.S : (this.assets.Scale = this.S / this.startS, this.reposition())) : (this.MW / this.MH > t / e ? (this.FULLPAGE && (this.div.style.position = "relative"), this.resize(t, t * this.MH / this.MW, t, e)) : (this.FULLPAGE && (this.div.style.position = "relative"), this.resize(e * this.MW / this.MH, e, t, e)), this.S = this.W / this.MW, this.isRunning ? (this.assets && (this.assets.Scale = this.S / this.startS), this.reposition()) : (this.assets ? this.assets.Scale = this.S / this.startS : this.startS = this.S, this.reposition()))
}, pro.initResizeEvents = function() {
    var t = !1,
        e = t ? "orientationchange" : "resize";
    window.addEventListener("resize", function() {
        setTimeout(h_resize, 50)
    }, !1), window.addEventListener(e, function() {
        h_resize();
        var t = window.orientation;
        GodStep.Game.instance.orientation && void 0 != t && (0 == t ? GodStep.Game.instance.orientation.visible = !1 : GodStep.Game.instance.orientation.visible = !0)
    }, !1)
}, pro.run = function() {
    trace("running")
}, pro.h_asssets = function(t) {
    switch (t.type) {
        case GodStep.ASSETS_LOADED:
            this.soul.run()
    }
}, GodStep.volumeSound = function(t, e) {
    var i = GodStep.Game.instance.sound;
    if (i && i.AVAILABLE)
        if (GodStep.Game.instance.AUDIOTAG)
            for (var s = 0; s < i.needLoaded.length; s++) t ? i.needLoaded[s].src == t && (i.sounds[s].volume = e ? 1 : 0) : i.sounds[s].volume = e ? 1 : 0;
        else createjs && createjs.Sound && createjs.Sound.stop()
}, GodStep.muteSound = function(t, e) {
    var i = GodStep.Game.instance.sound;
    if (i && i.AVAILABLE)
        if (GodStep.Game.instance.AUDIOTAG)
            for (var s = 0; s < i.needLoaded.length; s++) t ? i.needLoaded[s].src == t && (i.sounds[s].volume = e) : i.sounds[s] && (i.sounds[s].volume = e);
        else createjs.Sound.setMute(0 == e)
}, GodStep.playSound = function(t, e, i) {
    var s = GodStep.Game.instance.sound;
    if (s.AVAILABLE)
        if (GodStep.Game.instance.AUDIOTAG) {
            if (i)
                for (var n = 0; n < s.needLoaded.length; n++) s.needLoaded[n].src == t && (s.sounds[n].currentTime = 0, s.sounds[n].play())
        } else {
            var r = -1;
            if (null != e && (r = e), i) {
                var o = createjs.Sound.play(t, createjs.Sound.PLAY_SUCCEEDED, 0, 0, r);
                o.superName = t, o.superRepeat = r, GodStep.Game.AUDIOEVENT && addEvent(o, "loop", GodStep.loopEvent)
            }
        }
    else trace("not available")
}, GodStep.loopEvent = function(t) {
    var e = t.target;
    createjs.Sound.stop(), delEvent(e, "loop", GodStep.loopEvent), GodStep.playSound(e.superName, e.superRepeat, !0)
}, GodStep.PIXIEvent = PIXI.Event, PIXI.Event = function(t, e, i) {
    GodStep.PIXIEvent.call(this, t, e, i), this.stopped = !0
};
var PR = PR || {};
this.createjs = this.createjs || {},
    function() {
        var t = createjs.SoundJS = createjs.SoundJS || {};
        t.version = "NEXT", t.buildDate = "Thu, 11 Dec 2014 23:16:15 GMT"
    }(), this.createjs = this.createjs || {}, createjs.extend = function(t, e) {
        "use strict";

        function i() {
            this.constructor = t
        }
        return i.prototype = e.prototype, t.prototype = new i
    }, this.createjs = this.createjs || {}, createjs.promote = function(t, e) {
        "use strict";
        var i = t.prototype,
            s = Object.getPrototypeOf && Object.getPrototypeOf(i) || i.__proto__;
        if (s) {
            i[(e += "_") + "constructor"] = s.constructor;
            for (var n in s) i.hasOwnProperty(n) && "function" == typeof s[n] && (i[e + n] = s[n])
        }
        return t
    }, this.createjs = this.createjs || {}, createjs.indexOf = function(t, e) {
        "use strict";
        for (var i = 0, s = t.length; s > i; i++)
            if (e === t[i]) return i;
        return -1
    }, this.createjs = this.createjs || {},
    function() {
        "use strict";
        createjs.proxy = function(t, e) {
            var i = Array.prototype.slice.call(arguments, 2);
            return function() {
                return t.apply(e, Array.prototype.slice.call(arguments, 0).concat(i))
            }
        }
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var t = Object.defineProperty ? !0 : !1,
            e = {};
        try {
            Object.defineProperty(e, "bar", {
                get: function() {
                    return this._bar
                },
                set: function(t) {
                    this._bar = t
                }
            })
        } catch (i) {
            t = !1
        }
        createjs.definePropertySupported = t
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function t() {
            throw "BrowserDetect cannot be instantiated"
        }
        var e = t.agent = window.navigator.userAgent;
        t.isWindowPhone = e.indexOf("IEMobile") > -1 || e.indexOf("Windows Phone") > -1, t.isFirefox = e.indexOf("Firefox") > -1, t.isOpera = null != window.opera, t.isChrome = e.indexOf("Chrome") > -1, t.isIOS = (e.indexOf("iPod") > -1 || e.indexOf("iPhone") > -1 || e.indexOf("iPad") > -1) && !t.isWindowPhone, t.isAndroid = e.indexOf("Android") > -1 && !t.isWindowPhone, t.isBlackberry = e.indexOf("Blackberry") > -1, createjs.BrowserDetect = t
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function t() {
            this._listeners = null, this._captureListeners = null
        }
        var e = t.prototype;
        t.initialize = function(t) {
            t.addEventListener = e.addEventListener, t.on = e.on, t.removeEventListener = t.off = e.removeEventListener, t.removeAllEventListeners = e.removeAllEventListeners, t.hasEventListener = e.hasEventListener, t.dispatchEvent = e.dispatchEvent, t._dispatchEvent = e._dispatchEvent, t.willTrigger = e.willTrigger
        }, e.addEventListener = function(t, e, i) {
            var s;
            s = i ? this._captureListeners = this._captureListeners || {} : this._listeners = this._listeners || {};
            var n = s[t];
            return n && this.removeEventListener(t, e, i), n = s[t], n ? n.push(e) : s[t] = [e], e
        }, e.on = function(t, e, i, s, n, r) {
            return e.handleEvent && (i = i || e, e = e.handleEvent), i = i || this, this.addEventListener(t, function(t) {
                e.call(i, t, n), s && t.remove()
            }, r)
        }, e.removeEventListener = function(t, e, i) {
            var s = i ? this._captureListeners : this._listeners;
            if (s) {
                var n = s[t];
                if (n)
                    for (var r = 0, o = n.length; o > r; r++)
                        if (n[r] == e) {
                            1 == o ? delete s[t] : n.splice(r, 1);
                            break
                        }
            }
        }, e.off = e.removeEventListener, e.removeAllEventListeners = function(t) {
            t ? (this._listeners && delete this._listeners[t], this._captureListeners && delete this._captureListeners[t]) : this._listeners = this._captureListeners = null
        }, e.dispatchEvent = function(t) {
            if ("string" == typeof t) {
                var e = this._listeners;
                if (!e || !e[t]) return !1;
                t = new createjs.Event(t)
            } else t.target && t.clone && (t = t.clone());
            try {
                t.target = this
            } catch (i) {}
            if (t.bubbles && this.parent) {
                for (var s = this, n = [s]; s.parent;) n.push(s = s.parent);
                var r, o = n.length;
                for (r = o - 1; r >= 0 && !t.propagationStopped; r--) n[r]._dispatchEvent(t, 1 + (0 == r));
                for (r = 1; o > r && !t.propagationStopped; r++) n[r]._dispatchEvent(t, 3)
            } else this._dispatchEvent(t, 2);
            return t.defaultPrevented
        }, e.hasEventListener = function(t) {
            var e = this._listeners,
                i = this._captureListeners;
            return !!(e && e[t] || i && i[t])
        }, e.willTrigger = function(t) {
            for (var e = this; e;) {
                if (e.hasEventListener(t)) return !0;
                e = e.parent
            }
            return !1
        }, e.toString = function() {
            return "[EventDispatcher]"
        }, e._dispatchEvent = function(t, e) {
            var i, s = 1 == e ? this._captureListeners : this._listeners;
            if (t && s) {
                var n = s[t.type];
                if (!n || !(i = n.length)) return;
                try {
                    t.currentTarget = this
                } catch (r) {}
                try {
                    t.eventPhase = e
                } catch (r) {}
                t.removed = !1, n = n.slice();
                for (var o = 0; i > o && !t.immediatePropagationStopped; o++) {
                    var a = n[o];
                    a.handleEvent ? a.handleEvent(t) : a(t), t.removed && (this.off(t.type, a, 1 == e), t.removed = !1)
                }
            }
        }, createjs.EventDispatcher = t
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function t(t, e, i) {
            this.type = t, this.target = null, this.currentTarget = null, this.eventPhase = 0, this.bubbles = !!e, this.cancelable = !!i, this.timeStamp = (new Date).getTime(), this.defaultPrevented = !1, this.propagationStopped = !1, this.immediatePropagationStopped = !1, this.removed = !1
        }
        var e = t.prototype;
        e.preventDefault = function() {
            this.defaultPrevented = this.cancelable && !0
        }, e.stopPropagation = function() {
            this.propagationStopped = !0
        }, e.stopImmediatePropagation = function() {
            this.immediatePropagationStopped = this.propagationStopped = !0
        }, e.remove = function() {
            this.removed = !0
        }, e.clone = function() {
            return new t(this.type, this.bubbles, this.cancelable)
        }, e.set = function(t) {
            for (var e in t) this[e] = t[e];
            return this
        }, e.toString = function() {
            return "[Event (type=" + this.type + ")]"
        }, createjs.Event = t
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function t(t, e, i) {
            this.Event_constructor("error"), this.title = t, this.message = e, this.data = i
        }
        var e = createjs.extend(t, createjs.Event);
        e.clone = function() {
            return new createjs.ErrorEvent(this.title, this.message, this.data)
        }, createjs.ErrorEvent = createjs.promote(t, "Event")
    }(), this.createjs = this.createjs || {},
    function(t) {
        "use strict";

        function e(t, e) {
            this.Event_constructor("progress"), this.loaded = t, this.total = null == e ? 1 : e, this.progress = 0 == e ? 0 : this.loaded / this.total
        }
        var i = createjs.extend(e, createjs.Event);
        i.clone = function() {
            return new createjs.ProgressEvent(this.loaded, this.total)
        }, createjs.ProgressEvent = createjs.promote(e, "Event")
    }(window), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function t() {
            this.src = null, this.type = null, this.id = null, this.maintainOrder = !1, this.callback = null, this.data = null, this.method = createjs.LoadItem.GET, this.values = null, this.headers = null, this.withCredentials = !1, this.mimeType = null, this.crossOrigin = "Anonymous", this.loadTimeout = 8e3
        }
        var e = t.prototype = {},
            i = t;
        i.create = function(e) {
            if ("string" == typeof e) {
                var s = new t;
                return s.src = e, s
            }
            if (e instanceof i) return e;
            if (e instanceof Object) return e;
            throw new Error("Type not recognized.")
        }, e.set = function(t) {
            for (var e in t) this[e] = t[e];
            return this
        }, createjs.LoadItem = i
    }(),
    function() {
        var t = {};
        t.ABSOLUTE_PATT = /^(?:\w+:)?\/{2}/i, t.RELATIVE_PATT = "", t.EXTENSION_PATT = /\/?[^\/]+\.(\w{1,5})$/i, t.parseURI = function(e) {
            var i = {
                absolute: !1,
                relative: !1
            };
            if (null == e) return i;
            var s = e.indexOf("?");
            s > -1 && (e = e.substr(0, s));
            var n;
            return t.ABSOLUTE_PATT.test(e) ? i.absolute = !0 : t.RELATIVE_PATT.test(e) && (i.relative = !0), (n = e.match(t.EXTENSION_PATT)) && (i.extension = n[1].toLowerCase()), i
        }, t.formatQueryString = function(t, e) {
            if (null == t) throw new Error("You must specify data.");
            var i = [];
            for (var s in t) i.push(s + "=" + escape(t[s]));
            return e && (i = i.concat(e)), i.join("&")
        }, t.buildPath = function(t, e) {
            if (null == e) return t;
            var i = [],
                s = t.indexOf("?");
            if (-1 != s) {
                var n = t.slice(s + 1);
                i = i.concat(n.split("&"))
            }
            return -1 != s ? t.slice(0, s) + "?" + this._formatQueryString(e, i) : t + "?" + this._formatQueryString(e, i)
        }, t.isCrossDomain = function(t) {
            var e = document.createElement("a");
            e.href = t.src;
            var i = document.createElement("a");
            i.href = location.href;
            var s = "" != e.hostname && (e.port != i.port || e.protocol != i.protocol || e.hostname != i.hostname);
            return s
        }, t.isLocal = function(t) {
            var e = document.createElement("a");
            return e.href = t.src, "" == e.hostname && "file:" == e.protocol
        }, t.isBinary = function(t) {
            switch (t) {
                case createjs.AbstractLoader.IMAGE:
                case createjs.AbstractLoader.BINARY:
                    return !0;
                default:
                    return !1
            }
        }, t.isImageTag = function(t) {
            return t instanceof HTMLImageElement
        }, t.isAudioTag = function(t) {
            return window.HTMLAudioElement ? t instanceof HTMLAudioElement : !1
        }, t.isVideoTag = function(t) {
            return window.HTMLVideoElement ? t instanceof HTMLVideoElement : void 0
        }, t.isText = function(t) {
            switch (t) {
                case createjs.AbstractLoader.TEXT:
                case createjs.AbstractLoader.JSON:
                case createjs.AbstractLoader.MANIFEST:
                case createjs.AbstractLoader.XML:
                case createjs.AbstractLoader.CSS:
                case createjs.AbstractLoader.SVG:
                case createjs.AbstractLoader.JAVASCRIPT:
                    return !0;
                default:
                    return !1
            }
        }, t.getTypeByExtension = function(t) {
            if (null == t) return createjs.AbstractLoader.TEXT;
            switch (t.toLowerCase()) {
                case "jpeg":
                case "jpg":
                case "gif":
                case "png":
                case "webp":
                case "bmp":
                    return createjs.AbstractLoader.IMAGE;
                case "ogg":
                case "mp3":
                case "webm":
                    return createjs.AbstractLoader.SOUND;
                case "mp4":
                case "webm":
                case "ts":
                    return createjs.AbstractLoader.VIDEO;
                case "json":
                    return createjs.AbstractLoader.JSON;
                case "xml":
                    return createjs.AbstractLoader.XML;
                case "css":
                    return createjs.AbstractLoader.CSS;
                case "js":
                    return createjs.AbstractLoader.JAVASCRIPT;
                case "svg":
                    return createjs.AbstractLoader.SVG;
                default:
                    return createjs.AbstractLoader.TEXT
            }
        }, createjs.RequestUtils = t
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function t(t, e, i) {
            this.EventDispatcher_constructor(), this.loaded = !1, this.canceled = !1, this.progress = 0, this.type = i, this.resultFormatter = null, t ? this._item = createjs.LoadItem.create(t) : this._item = null, this._preferXHR = e, this._result = null, this._rawResult = null, this._loadedItems = null, this._tagSrcAttribute = null, this._tag = null
        }
        var e = createjs.extend(t, createjs.EventDispatcher),
            i = t;
        i.POST = "POST", i.GET = "GET", i.BINARY = "binary", i.CSS = "css", i.IMAGE = "image", i.JAVASCRIPT = "javascript", i.JSON = "json", i.JSONP = "jsonp", i.MANIFEST = "manifest", i.SOUND = "sound", i.VIDEO = "video", i.SPRITESHEET = "spritesheet", i.SVG = "svg", i.TEXT = "text", i.XML = "xml", e.getItem = function() {
            return this._item
        }, e.getResult = function(t) {
            return t ? this._rawResult : this._result
        }, e.getTag = function() {
            return this._tag
        }, e.setTag = function(t) {
            this._tag = t
        }, e.load = function() {
            this._createRequest(), this._request.on("complete", this, this), this._request.on("progress", this, this), this._request.on("loadStart", this, this), this._request.on("abort", this, this), this._request.on("timeout", this, this), this._request.on("error", this, this);
            var t = new createjs.Event("initialize");
            t.loader = this._request, this.dispatchEvent(t), this._request.load()
        }, e.cancel = function() {
            this.canceled = !0, this.destroy()
        }, e.destroy = function() {
            this._request && (this._request.removeAllEventListeners(), this._request.destroy()), this._request = null, this._item = null, this._rawResult = null, this._result = null, this._loadItems = null, this.removeAllEventListeners()
        }, e.getLoadedItems = function() {
            return this._loadedItems
        }, e._createRequest = function() {
            this._preferXHR ? this._request = new createjs.XHRRequest(this._item) : this._request = new createjs.TagRequest(this._item, this._tag || this._createTag(), this._tagSrcAttribute)
        }, e._createTag = function(t) {
            return null
        }, e._sendLoadStart = function() {
            this._isCanceled() || this.dispatchEvent("loadstart")
        }, e._sendProgress = function(t) {
            if (!this._isCanceled()) {
                var e = null;
                "number" == typeof t ? (this.progress = t, e = new createjs.ProgressEvent(this.progress)) : (e = t, this.progress = t.loaded / t.total, e.progress = this.progress, (isNaN(this.progress) || this.progress == 1 / 0) && (this.progress = 0)), this.hasEventListener("progress") && this.dispatchEvent(e)
            }
        }, e._sendComplete = function() {
            if (!this._isCanceled()) {
                this.loaded = !0;
                var t = new createjs.Event("complete");
                t.rawResult = this._rawResult, null != this._result && (t.result = this._result), this.dispatchEvent(t)
            }
        }, e._sendError = function(t) {
            !this._isCanceled() && this.hasEventListener("error") && (null == t && (t = new createjs.ErrorEvent("PRELOAD_ERROR_EMPTY")), this.dispatchEvent(t))
        }, e._isCanceled = function() {
            return null == window.createjs || this.canceled ? !0 : !1
        }, e.resultFormatter = null, e.handleEvent = function(t) {
            switch (t.type) {
                case "complete":
                    this._rawResult = t.target._response;
                    var e = this.resultFormatter && this.resultFormatter(this),
                        i = this;
                    e instanceof Function ? e(function(t) {
                        i._result = t, i._sendComplete()
                    }) : (this._result = e || this._rawResult, this._sendComplete());
                    break;
                case "progress":
                    this._sendProgress(t);
                    break;
                case "error":
                    this._sendError(t);
                    break;
                case "loadstart":
                    this._sendLoadStart();
                    break;
                case "abort":
                case "timeout":
                    this._isCanceled() || this.dispatchEvent(t.type)
            }
        }, e.buildPath = function(t, e) {
            return createjs.RequestUtils.buildPath(t, e)
        }, e.toString = function() {
            return "[PreloadJS AbstractLoader]"
        }, createjs.AbstractLoader = createjs.promote(t, "EventDispatcher")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function t(t, e, i) {
            this.AbstractLoader_constructor(t, e, i), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "src"
        }
        var e = createjs.extend(t, createjs.AbstractLoader);
        e.load = function() {
            this._tag || (this._tag = this._createTag(this._item.src)), this._tag.preload = "auto", this._tag.load(), this.AbstractLoader_load()
        }, e._createTag = function() {}, e._createRequest = function() {
            this._preferXHR ? this._request = new createjs.XHRRequest(this._item) : this._request = new createjs.MediaTagRequest(this._item, this._tag || this._createTag(), this._tagSrcAttribute)
        }, e._formatResult = function(t) {
            return this._tag.removeEventListener && this._tag.removeEventListener("canplaythrough", this._loadedHandler), this._tag.onstalled = null, this._preferXHR && (t.getTag().src = t.getResult(!0)), t.getTag()
        }, createjs.AbstractMediaLoader = createjs.promote(t, "AbstractLoader")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var t = function(t) {
                this._item = t
            },
            e = createjs.extend(t, createjs.EventDispatcher);
        e.load = function() {}, e.destroy = function() {}, e.cancel = function() {}, createjs.AbstractRequest = createjs.promote(t, "EventDispatcher")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function t(t, e, i) {
            this.AbstractRequest_constructor(t), this._tag = e, this._tagSrcAttribute = i, this._loadedHandler = createjs.proxy(this._handleTagComplete, this), this._addedToDOM = !1, this._startTagVisibility = null
        }
        var e = createjs.extend(t, createjs.AbstractRequest);
        e.load = function() {
            null == this._tag.parentNode && (window.document.body.appendChild(this._tag), this._addedToDOM = !0), this._tag.onload = createjs.proxy(this._handleTagComplete, this), this._tag.onreadystatechange = createjs.proxy(this._handleReadyStateChange, this);
            var t = new createjs.Event("initialize");
            t.loader = this._tag, this.dispatchEvent(t), this._hideTag(), this._tag[this._tagSrcAttribute] = this._item.src
        }, e.destroy = function() {
            this._clean(), this._tag = null, this.AbstractRequest_destroy()
        }, e._handleReadyStateChange = function() {
            clearTimeout(this._loadTimeout);
            var t = this._tag;
            ("loaded" == t.readyState || "complete" == t.readyState) && this._handleTagComplete()
        }, e._handleTagComplete = function() {
            this._rawResult = this._tag, this._result = this.resultFormatter && this.resultFormatter(this) || this._rawResult, this._clean(), this._showTag(), this.dispatchEvent("complete")
        }, e._clean = function() {
            this._tag.onload = null, this._tag.onreadystatechange = null, this._addedToDOM && null != this._tag.parentNode && this._tag.parentNode.removeChild(this._tag)
        }, e._hideTag = function() {
            this._startTagVisibility = this._tag.style.visibility, this._tag.style.visibility = "hidden"
        }, e._showTag = function() {
            this._tag.style.visibility = this._startTagVisibility
        }, e._handleStalled = function() {}, createjs.TagRequest = createjs.promote(t, "AbstractRequest")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function t(t, e, i) {
            this.AbstractRequest_constructor(t), this._tag = e, this._tagSrcAttribute = i, this._loadedHandler = createjs.proxy(this._handleTagComplete, this)
        }
        var e = createjs.extend(t, createjs.TagRequest);
        e.load = function() {
            this._tag.onstalled = createjs.proxy(this._handleStalled, this), this._tag.onprogress = createjs.proxy(this._handleProgress, this), this._tag.addEventListener && this._tag.addEventListener("canplaythrough", this._loadedHandler, !1), this.TagRequest_load()
        }, e._handleReadyStateChange = function() {
            clearTimeout(this._loadTimeout);
            var t = this._tag;
            ("loaded" == t.readyState || "complete" == t.readyState) && this._handleTagComplete()
        }, e._handleStalled = function() {}, e._handleProgress = function(t) {
            if (t && !(t.loaded > 0 && 0 == t.total)) {
                var e = new createjs.ProgressEvent(t.loaded, t.total);
                this.dispatchEvent(e)
            }
        }, e._clean = function() {
            this._tag.removeEventListener && this._tag.removeEventListener("canplaythrough", this._loadedHandler), this._tag.onstalled = null, this._tag.onprogress = null, this.TagRequest__clean()
        }, createjs.MediaTagRequest = createjs.promote(t, "TagRequest")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function t(t) {
            this.AbstractRequest_constructor(t), this._request = null, this._loadTimeout = null, this._xhrLevel = 1, this._response = null, this._rawResponse = null, this._canceled = !1, this._handleLoadStartProxy = createjs.proxy(this._handleLoadStart, this), this._handleProgressProxy = createjs.proxy(this._handleProgress, this), this._handleAbortProxy = createjs.proxy(this._handleAbort, this), this._handleErrorProxy = createjs.proxy(this._handleError, this), this._handleTimeoutProxy = createjs.proxy(this._handleTimeout, this), this._handleLoadProxy = createjs.proxy(this._handleLoad, this), this._handleReadyStateChangeProxy = createjs.proxy(this._handleReadyStateChange, this), !this._createXHR(t)
        }
        var e = createjs.extend(t, createjs.AbstractRequest);
        t.ACTIVEX_VERSIONS = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.5.0", "Msxml2.XMLHTTP.4.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], e.getResult = function(t) {
            return t && this._rawResponse ? this._rawResponse : this._response
        }, e.cancel = function() {
            this.canceled = !0, this._clean(), this._request.abort()
        }, e.load = function() {
            if (null == this._request) return void this._handleError();
            this._request.addEventListener("loadstart", this._handleLoadStartProxy, !1), this._request.addEventListener("progress", this._handleProgressProxy, !1), this._request.addEventListener("abort", this._handleAbortProxy, !1), this._request.addEventListener("error", this._handleErrorProxy, !1), this._request.addEventListener("timeout", this._handleTimeoutProxy, !1), this._request.addEventListener("load", this._handleLoadProxy, !1), this._request.addEventListener("readystatechange", this._handleReadyStateChangeProxy, !1), 1 == this._xhrLevel && (this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout));
            try {
                this._item.values && this._item.method != createjs.AbstractLoader.GET ? this._item.method == createjs.AbstractLoader.POST && this._request.send(createjs.RequestUtils.formatQueryString(this._item.values)) : this._request.send()
            } catch (t) {
                this.dispatchEvent(new createjs.ErrorEvent("XHR_SEND", null, t))
            }
        }, e.setResponseType = function(t) {
            this._request.responseType = t
        }, e.getAllResponseHeaders = function() {
            return this._request.getAllResponseHeaders instanceof Function ? this._request.getAllResponseHeaders() : null
        }, e.getResponseHeader = function(t) {
            return this._request.getResponseHeader instanceof Function ? this._request.getResponseHeader(t) : null
        }, e._handleProgress = function(t) {
            if (t && !(t.loaded > 0 && 0 == t.total)) {
                var e = new createjs.ProgressEvent(t.loaded, t.total);
                this.dispatchEvent(e)
            }
        }, e._handleLoadStart = function(t) {
            clearTimeout(this._loadTimeout), this.dispatchEvent("loadstart")
        }, e._handleAbort = function(t) {
            this._clean(), this.dispatchEvent(new createjs.ErrorEvent("XHR_ABORTED", null, t))
        }, e._handleError = function(t) {
            this._clean(), this.dispatchEvent(new createjs.ErrorEvent(t.message))
        }, e._handleReadyStateChange = function(t) {
            4 == this._request.readyState && this._handleLoad()
        }, e._handleLoad = function(t) {
            if (!this.loaded) {
                this.loaded = !0;
                var e = this._checkError();
                if (e) return void this._handleError(e);
                this._response = this._getResponse(), this._clean(), this.dispatchEvent(new createjs.Event("complete"))
            }
        }, e._handleTimeout = function(t) {
            this._clean(), this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_TIMEOUT", null, t))
        }, e._checkError = function() {
            var t = parseInt(this._request.status);
            switch (t) {
                case 404:
                case 0:
                    return new Error(t)
            }
            return null
        }, e._getResponse = function() {
            if (null != this._response) return this._response;
            if (null != this._request.response) return this._request.response;
            try {
                if (null != this._request.responseText) return this._request.responseText
            } catch (t) {}
            try {
                if (null != this._request.responseXML) return this._request.responseXML
            } catch (t) {}
            return null
        }, e._createXHR = function(t) {
            var e = createjs.RequestUtils.isCrossDomain(t),
                i = {},
                n = null;
            if (window.XMLHttpRequest) n = new XMLHttpRequest, e && void 0 === n.withCredentials && window.XDomainRequest && (n = new XDomainRequest);
            else {
                for (var r = 0, o = s.ACTIVEX_VERSIONS.length; o > r; r++) {
                    s.ACTIVEX_VERSIONS[r];
                    try {
                        n = new ActiveXObject(axVersions);
                        break
                    } catch (a) {}
                }
                if (null == n) return !1
            }
            t.mimeType && n.overrideMimeType && n.overrideMimeType(t.mimeType), this._xhrLevel = "string" == typeof n.responseType ? 2 : 1;
            var h = null;
            if (h = t.method == createjs.AbstractLoader.GET ? createjs.RequestUtils.buildPath(t.src, t.values) : t.src,
                n.open(t.method || createjs.AbstractLoader.GET, h, !0), e && n instanceof XMLHttpRequest && 1 == this._xhrLevel && (i.Origin = location.origin), t.values && t.method == createjs.AbstractLoader.POST && (i["Content-Type"] = "application/x-www-form-urlencoded"), e || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), t.headers)
                for (var l in t.headers) i[l] = t.headers[l];
            for (l in i) n.setRequestHeader(l, i[l]);
            return n instanceof XMLHttpRequest && void 0 !== t.withCredentials && (n.withCredentials = t.withCredentials), this._request = n, !0
        }, e._clean = function() {
            clearTimeout(this._loadTimeout), this._request.removeEventListener("loadstart", this._handleLoadStartProxy), this._request.removeEventListener("progress", this._handleProgressProxy), this._request.removeEventListener("abort", this._handleAbortProxy), this._request.removeEventListener("error", this._handleErrorProxy), this._request.removeEventListener("timeout", this._handleTimeoutProxy), this._request.removeEventListener("load", this._handleLoadProxy), this._request.removeEventListener("readystatechange", this._handleReadyStateChangeProxy)
        }, e.toString = function() {
            return "[PreloadJS XHRRequest]"
        }, createjs.XHRRequest = createjs.promote(t, "AbstractRequest")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function t(t, e) {
            this.AbstractMediaLoader_constructor(t, e, createjs.AbstractLoader.SOUND), createjs.RequestUtils.isAudioTag(t) ? this._tag = t : createjs.RequestUtils.isAudioTag(t.src) ? this._tag = t : createjs.RequestUtils.isAudioTag(t.tag) && (this._tag = createjs.RequestUtils.isAudioTag(t) ? t : t.src), null != this._tag && (this._preferXHR = !1)
        }
        var e = createjs.extend(t, createjs.AbstractMediaLoader),
            i = t;
        i.canLoadItem = function(t) {
            return t.type == createjs.AbstractLoader.SOUND
        }, e._createTag = function(t) {
            var e = document.createElement("audio");
            return e.autoplay = !1, e.preload = "none", e.src = t, e
        }, createjs.SoundLoader = createjs.promote(t, "AbstractMediaLoader")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function t() {
            throw "Sound cannot be instantiated"
        }

        function e(t, e) {
            this.init(t, e)
        }
        var i = t;
        i.INTERRUPT_ANY = "any", i.INTERRUPT_EARLY = "early", i.INTERRUPT_LATE = "late", i.INTERRUPT_NONE = "none", i.PLAY_INITED = "playInited", i.PLAY_SUCCEEDED = "playSucceeded", i.PLAY_INTERRUPTED = "playInterrupted", i.PLAY_FINISHED = "playFinished", i.PLAY_FAILED = "playFailed", i.SUPPORTED_EXTENSIONS = ["mp3", "ogg", "mpeg", "wav", "m4a", "mp4", "aiff", "wma", "mid"], i.EXTENSION_MAP = {
            m4a: "mp4"
        }, i.FILE_PATTERN = /^(?:(\w+:)\/{2}(\w+(?:\.\w+)*\/?))?([\/.]*?(?:[^?]+)?\/)?((?:[^\/?]+)\.(\w+))(?:\?(\S+)?)?$/, i.defaultInterruptBehavior = i.INTERRUPT_NONE, i.alternateExtensions = [], i.activePlugin = null, i._pluginsRegistered = !1, i._lastID = 0, i._masterVolume = 1, i._masterMute = !1, i._instances = [], i._idHash = {}, i._preloadHash = {}, i.addEventListener = null, i.removeEventListener = null, i.removeAllEventListeners = null, i.dispatchEvent = null, i.hasEventListener = null, i._listeners = null, createjs.EventDispatcher.initialize(i), i.getPreloadHandlers = function() {
            return {
                callback: createjs.proxy(i.initLoad, i),
                types: ["sound"],
                extensions: i.SUPPORTED_EXTENSIONS
            }
        }, i._handleLoadComplete = function(t) {
            var e = t.target.getItem().src;
            if (i._preloadHash[e])
                for (var s = 0, n = i._preloadHash[e].length; n > s; s++) {
                    var r = i._preloadHash[e][s];
                    if (i._preloadHash[e][s] = !0, i.hasEventListener("fileload")) {
                        var t = new createjs.Event("fileload");
                        t.src = r.src, t.id = r.id, t.data = r.data, t.sprite = r.sprite, i.dispatchEvent(t)
                    }
                }
        }, i._handleLoadError = function(t) {
            var e = t.target.getItem().src;
            if (i._preloadHash[e])
                for (var s = 0, n = i._preloadHash[e].length; n > s; s++) {
                    var r = i._preloadHash[e][s];
                    if (i._preloadHash[e][s] = !1, i.hasEventListener("fileerror")) {
                        var t = new createjs.Event("fileerror");
                        t.src = r.src, t.id = r.id, t.data = r.data, t.sprite = r.sprite, i.dispatchEvent(t)
                    }
                }
        }, i._registerPlugin = function(t) {
            return t.isSupported() ? (i.activePlugin = new t, !0) : !1
        }, i.registerPlugins = function(t) {
            i._pluginsRegistered = !0;
            for (var e = 0, s = t.length; s > e; e++)
                if (i._registerPlugin(t[e])) return !0;
            return !1
        }, i.initializeDefaultPlugins = function() {
            return null != i.activePlugin ? !0 : i._pluginsRegistered ? !1 : i.registerPlugins([createjs.WebAudioPlugin, createjs.HTMLAudioPlugin]) ? !0 : !1
        }, i.isReady = function() {
            return null != i.activePlugin
        }, i.getCapabilities = function() {
            return null == i.activePlugin ? null : i.activePlugin._capabilities
        }, i.getCapability = function(t) {
            return null == i.activePlugin ? null : i.activePlugin._capabilities[t]
        }, i.initLoad = function(t) {
            return i._registerSound(t)
        }, i._registerSound = function(t) {
            if (!i.initializeDefaultPlugins()) return !1;
            var s = i._parsePath(t.src);
            if (null == s) return !1;
            t.src = s.src, t.type = "sound";
            var n = t.data,
                r = i.activePlugin.defaultNumChannels || null;
            if (null != n && (isNaN(n.channels) ? isNaN(n) || (r = parseInt(n)) : r = parseInt(n.channels), n.audioSprite))
                for (var o, a = n.audioSprite.length; a--;) o = n.audioSprite[a], i._idHash[o.id] = {
                    src: t.src,
                    startTime: parseInt(o.startTime),
                    duration: parseInt(o.duration)
                };
            null != t.id && (i._idHash[t.id] = {
                src: t.src
            });
            var h = i.activePlugin.register(t, r);
            return e.create(t.src, r), null != n && isNaN(n) ? t.data.channels = r || e.maxPerChannel() : t.data = r || e.maxPerChannel(), h.type && (t.type = h.type), h
        }, i.registerSound = function(t, e, s, n) {
            var r = {
                src: t,
                id: e,
                data: s
            };
            t instanceof Object && (n = e, r = t), r = createjs.LoadItem.create(r), null != n && (r.src = n + t);
            var o = i._registerSound(r);
            if (!o) return !1;
            if (i._preloadHash[r.src] || (i._preloadHash[r.src] = []), i._preloadHash[r.src].push(r), 1 == i._preloadHash[r.src].length) o.on("complete", createjs.proxy(this._handleLoadComplete, this)), o.on("error", createjs.proxy(this._handleLoadError, this)), i.activePlugin.preload(o);
            else if (1 == i._preloadHash[r.src][0]) return !0;
            return r
        }, i.registerSounds = function(t, e) {
            var i = [];
            t.path && (e ? e += t.path : e = t.path);
            for (var s = 0, n = t.length; n > s; s++) i[s] = createjs.Sound.registerSound(t[s].src, t[s].id, t[s].data, e);
            return i
        }, i.registerManifest = function(t, e) {
            try {
                console.log("createjs.Sound.registerManifest is deprecated, please use createjs.Sound.registerSounds.")
            } catch (i) {}
            return this.registerSounds(t, e)
        }, i.removeSound = function(t, s) {
            if (null == i.activePlugin) return !1;
            t instanceof Object && (t = t.src), t = i._getSrcById(t).src, null != s && (t = s + t);
            var n = i._parsePath(t);
            if (null == n) return !1;
            t = n.src;
            for (var r in i._idHash) i._idHash[r].src == t && delete i._idHash[r];
            return e.removeSrc(t), delete i._preloadHash[t], i.activePlugin.removeSound(t), !0
        }, i.removeSounds = function(t, e) {
            var i = [];
            t.path && (e ? e += t.path : e = t.path);
            for (var s = 0, n = t.length; n > s; s++) i[s] = createjs.Sound.removeSound(t[s].src, e);
            return i
        }, i.removeManifest = function(t, e) {
            try {
                console.log("createjs.Sound.removeManifest is deprecated, please use createjs.Sound.removeSounds.")
            } catch (s) {}
            return i.removeSounds(t, e)
        }, i.removeAllSounds = function() {
            i._idHash = {}, i._preloadHash = {}, e.removeAll(), i.activePlugin && i.activePlugin.removeAllSounds()
        }, i.loadComplete = function(t) {
            if (!i.isReady()) return !1;
            var e = i._parsePath(t);
            return t = e ? i._getSrcById(e.src).src : i._getSrcById(t).src, 1 == i._preloadHash[t][0]
        }, i._parsePath = function(t) {
            "string" != typeof t && (t = t.toString());
            var e = t.match(i.FILE_PATTERN);
            if (null == e) return !1;
            for (var s = e[4], n = e[5], r = i.getCapabilities(), o = 0; !r[n];)
                if (n = i.alternateExtensions[o++], o > i.alternateExtensions.length) return null;
            t = t.replace("." + e[5], "." + n);
            var a = {
                name: s,
                src: t,
                extension: n
            };
            return a
        }, i.play = function(t, e, s, n, r, o, a, h, l) {
            e instanceof Object && (s = e.delay, n = e.offset, r = e.loop, o = e.volume, a = e.pan, h = e.startTime, l = e.duration, e = e.interrupt);
            var d = i.createInstance(t, h, l),
                c = i._playInstance(d, e, s, n, r, o, a);
            return c || d._playFailed(), d
        }, i.createInstance = function(t, s, n) {
            if (!i.initializeDefaultPlugins()) return new createjs.DefaultSoundInstance(t, s, n);
            t = i._getSrcById(t);
            var r = i._parsePath(t.src),
                o = null;
            return null != r && null != r.src ? (e.create(r.src), null == s && (s = t.startTime), o = i.activePlugin.create(r.src, s, n || t.duration)) : o = new createjs.DefaultSoundInstance(t, s, n), o.uniqueId = i._lastID++, o
        }, i.setVolume = function(t) {
            if (null == Number(t)) return !1;
            if (t = Math.max(0, Math.min(1, t)), i._masterVolume = t, !this.activePlugin || !this.activePlugin.setVolume || !this.activePlugin.setVolume(t))
                for (var e = this._instances, s = 0, n = e.length; n > s; s++) e[s].setMasterVolume(t)
        }, i.getVolume = function() {
            return i._masterVolume
        }, i.setMute = function(t) {
            if (null == t) return !1;
            if (this._masterMute = t, !this.activePlugin || !this.activePlugin.setMute || !this.activePlugin.setMute(t))
                for (var e = this._instances, i = 0, s = e.length; s > i; i++) e[i].setMasterMute(t);
            return !0
        }, i.getMute = function() {
            return this._masterMute
        }, i.stop = function() {
            for (var t = this._instances, e = t.length; e--;) t[e].stop()
        }, i._playInstance = function(t, e, s, n, r, o, a) {
            if (e instanceof Object && (s = e.delay, n = e.offset, r = e.loop, o = e.volume, a = e.pan, e = e.interrupt), e = e || i.defaultInterruptBehavior, null == s && (s = 0), null == n && (n = t.getPosition()), null == r && (r = t.loop), null == o && (o = t.volume), null == a && (a = t.pan), 0 == s) {
                var h = i._beginPlaying(t, e, n, r, o, a);
                if (!h) return !1
            } else {
                var l = setTimeout(function() {
                    i._beginPlaying(t, e, n, r, o, a)
                }, s);
                t.delayTimeoutId = l
            }
            return this._instances.push(t), !0
        }, i._beginPlaying = function(t, i, s, n, r, o) {
            if (!e.add(t, i)) return !1;
            var a = t._beginPlaying(s, n, r, o);
            if (!a) {
                var h = createjs.indexOf(this._instances, t);
                return h > -1 && this._instances.splice(h, 1), !1
            }
            return !0
        }, i._getSrcById = function(t) {
            return i._idHash[t] || {
                src: t
            }
        }, i._playFinished = function(t) {
            e.remove(t);
            var i = createjs.indexOf(this._instances, t);
            i > -1 && this._instances.splice(i, 1)
        }, createjs.Sound = t, e.channels = {}, e.create = function(t, i) {
            var s = e.get(t);
            return null == s ? (e.channels[t] = new e(t, i), !0) : !1
        }, e.removeSrc = function(t) {
            var i = e.get(t);
            return null == i ? !1 : (i._removeAll(), delete e.channels[t], !0)
        }, e.removeAll = function() {
            for (var t in e.channels) e.channels[t]._removeAll();
            e.channels = {}
        }, e.add = function(t, i) {
            var s = e.get(t.src);
            return null == s ? !1 : s._add(t, i)
        }, e.remove = function(t) {
            var i = e.get(t.src);
            return null == i ? !1 : (i._remove(t), !0)
        }, e.maxPerChannel = function() {
            return s.maxDefault
        }, e.get = function(t) {
            return e.channels[t]
        };
        var s = e.prototype;
        s.constructor = e, s.src = null, s.max = null, s.maxDefault = 100, s.length = 0, s.init = function(t, e) {
            this.src = t, this.max = e || this.maxDefault, -1 == this.max && (this.max = this.maxDefault), this._instances = []
        }, s._get = function(t) {
            return this._instances[t]
        }, s._add = function(t, e) {
            return this._getSlot(e, t) ? (this._instances.push(t), this.length++, !0) : !1
        }, s._remove = function(t) {
            var e = createjs.indexOf(this._instances, t);
            return -1 == e ? !1 : (this._instances.splice(e, 1), this.length--, !0)
        }, s._removeAll = function() {
            for (var t = this.length - 1; t >= 0; t--) this._instances[t].stop()
        }, s._getSlot = function(e, i) {
            var s, n;
            if (e != t.INTERRUPT_NONE && (n = this._get(0), null == n)) return !0;
            for (var r = 0, o = this.max; o > r; r++) {
                if (s = this._get(r), null == s) return !0;
                if (s.playState == t.PLAY_FINISHED || s.playState == t.PLAY_INTERRUPTED || s.playState == t.PLAY_FAILED) {
                    n = s;
                    break
                }
                e != t.INTERRUPT_NONE && (e == t.INTERRUPT_EARLY && s.getPosition() < n.getPosition() || e == t.INTERRUPT_LATE && s.getPosition() > n.getPosition()) && (n = s)
            }
            return null != n ? (n._interrupt(), this._remove(n), !0) : !1
        }, s.toString = function() {
            return "[Sound SoundChannel]"
        }
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var t = function(t, e, i, s) {
                this.EventDispatcher_constructor(), this.src = t, this.uniqueId = -1, this.playState = null, this.delayTimeoutId = null, this._startTime = Math.max(0, e || 0), this._volume = 1, createjs.definePropertySupported && Object.defineProperty(this, "volume", {
                    get: this.getVolume,
                    set: this.setVolume
                }), this._pan = 0, createjs.definePropertySupported && Object.defineProperty(this, "pan", {
                    get: this.getPan,
                    set: this.setPan
                }), this._duration = Math.max(0, i || 0), createjs.definePropertySupported && Object.defineProperty(this, "duration", {
                    get: this.getDuration,
                    set: this.setDuration
                }), this._playbackResource = null, createjs.definePropertySupported && Object.defineProperty(this, "playbackResource", {
                    get: this.getPlaybackResource,
                    set: this.setPlaybackResource
                }), s !== !1 && s !== !0 && this.setPlaybackResource(s), this._position = 0, createjs.definePropertySupported && Object.defineProperty(this, "position", {
                    get: this.getPosition,
                    set: this.setPosition
                }), this._loop = 0, createjs.definePropertySupported && Object.defineProperty(this, "loop", {
                    get: this.getLoop,
                    set: this.setLoop
                }), this._muted = !1, createjs.definePropertySupported && Object.defineProperty(this, "muted", {
                    get: this.getMuted,
                    set: this.setMuted
                }), this._paused = !1, createjs.definePropertySupported && Object.defineProperty(this, "paused", {
                    get: this.getPaused,
                    set: this.setPaused
                })
            },
            e = createjs.extend(t, createjs.EventDispatcher);
        e.play = function(t, e, i, s, n, r) {
            return this.playState == createjs.Sound.PLAY_SUCCEEDED ? (t instanceof Object && (i = t.offset, s = t.loop, n = t.volume, r = t.pan), null != i && this.setPosition(i), null != s && this.setLoop(s), null != n && this.setVolume(n), null != r && this.setPan(r), void(this._paused && this.setPaused(!1))) : (this._cleanUp(), createjs.Sound._playInstance(this, t, e, i, s, n, r), this)
        }, e.pause = function() {
            return this._paused || this.playState != createjs.Sound.PLAY_SUCCEEDED ? !1 : (this.setPaused(!0), !0)
        }, e.resume = function() {
            return this._paused ? (this.setPaused(!1), !0) : !1
        }, e.stop = function() {
            return this._position = 0, this._paused = !1, this._handleStop(), this._cleanUp(), this.playState = createjs.Sound.PLAY_FINISHED, this
        }, e.destroy = function() {
            this._cleanUp(), this.src = null, this.playbackResource = null, this.removeAllEventListeners()
        }, e.toString = function() {
            return "[AbstractSoundInstance]"
        }, e.getPaused = function() {
            return this._paused
        }, e.setPaused = function(t) {
            return t !== !0 && t !== !1 || this._paused == t || 1 == t && this.playState != createjs.Sound.PLAY_SUCCEEDED ? void 0 : (this._paused = t, t ? this._pause() : this._resume(), clearTimeout(this.delayTimeoutId), this)
        }, e.setVolume = function(t) {
            return t == this._volume ? this : (this._volume = Math.max(0, Math.min(1, t)), this._muted || this._updateVolume(), this)
        }, e.getVolume = function() {
            return this._volume
        }, e.setMute = function(t) {
            this.setMuted(t)
        }, e.getMute = function() {
            return this._muted
        }, e.setMuted = function(t) {
            return t === !0 || t === !1 ? (this._muted = t, this._updateVolume(), this) : void 0
        }, e.getMuted = function() {
            return this._muted
        }, e.setPan = function(t) {
            return t == this._pan ? this : (this._pan = Math.max(-1, Math.min(1, t)), this._updatePan(), this)
        }, e.getPan = function() {
            return this._pan
        }, e.getPosition = function() {
            return this._paused || this.playState != createjs.Sound.PLAY_SUCCEEDED ? this._position : this._calculateCurrentPosition()
        }, e.setPosition = function(t) {
            return this._position = Math.max(0, t), this.playState == createjs.Sound.PLAY_SUCCEEDED && this._updatePosition(), this
        }, e.getDuration = function() {
            return this._duration
        }, e.setDuration = function(t) {
            return t == this._duration ? this : (this._duration = Math.max(0, t || 0), this._updateDuration(), this)
        }, e.setPlaybackResource = function(t) {
            return this._playbackResource = t, 0 == this._duration && this._setDurationFromSource(), this
        }, e.getPlaybackResource = function() {
            return this._playbackResource
        }, e.getLoop = function() {
            return this._loop
        }, e.setLoop = function(t) {
            null != this._playbackResource && (0 != this._loop && 0 == t && this._removeLooping(t), 0 == this._loop && 0 != t && this._addLooping(t)), this._loop = t
        }, e._sendEvent = function(t) {
            var e = new createjs.Event(t);
            this.dispatchEvent(e)
        }, e._cleanUp = function() {
            clearTimeout(this.delayTimeoutId), this._handleCleanUp(), this._paused = !1, createjs.Sound._playFinished(this)
        }, e._interrupt = function() {
            this._cleanUp(), this.playState = createjs.Sound.PLAY_INTERRUPTED, this._sendEvent("interrupted")
        }, e._beginPlaying = function(t, e, i, s) {
            return this.setPosition(t), this.setLoop(e), this.setVolume(i), this.setPan(s), null != this._playbackResource && this._position < this._duration ? (this._paused = !1, this._handleSoundReady(), this.playState = createjs.Sound.PLAY_SUCCEEDED, this._sendEvent("succeeded"), !0) : (this._playFailed(), !1)
        }, e._playFailed = function() {
            this._cleanUp(), this.playState = createjs.Sound.PLAY_FAILED, this._sendEvent("failed")
        }, e._handleSoundComplete = function(t) {
            return this._position = 0, 0 != this._loop ? (this._loop--, this._handleLoop(), void this._sendEvent("loop")) : (this._cleanUp(), this.playState = createjs.Sound.PLAY_FINISHED, void this._sendEvent("complete"))
        }, e._handleSoundReady = function() {}, e._updateVolume = function() {}, e._updatePan = function() {}, e._updateDuration = function() {}, e._setDurationFromSource = function() {}, e._calculateCurrentPosition = function() {}, e._updatePosition = function() {}, e._removeLooping = function() {}, e._addLooping = function() {}, e._pause = function() {}, e._resume = function() {}, e._handleStop = function() {}, e._handleCleanUp = function() {}, e._handleLoop = function() {}, createjs.AbstractSoundInstance = createjs.promote(t, "EventDispatcher"), createjs.DefaultSoundInstance = createjs.AbstractSoundInstance
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var t = function() {
                this._capabilities = null, this._loaders = {}, this._audioSources = {}, this._soundInstances = {}, this._loaderClass, this._soundInstanceClass
            },
            e = t.prototype;
        t._capabilities = null, t.isSupported = function() {
            return !0
        }, e.register = function(t, e) {
            if (this._audioSources[t.src] = !0, this._soundInstances[t.src] = [], this._loaders[t.src]) return this._loaders[t.src];
            var i = new this._loaderClass(t);
            return i.on("complete", createjs.proxy(this._handlePreloadComplete, this)), this._loaders[t.src] = i, i
        }, e.preload = function(t) {
            t.on("error", createjs.proxy(this._handlePreloadError, this)), t.load()
        }, e.isPreloadStarted = function(t) {
            return null != this._audioSources[t]
        }, e.isPreloadComplete = function(t) {
            return !(null == this._audioSources[t] || 1 == this._audioSources[t])
        }, e.removeSound = function(t) {
            if (this._soundInstances[t]) {
                for (var e = this._soundInstances[t].length; e--;) {
                    var i = this._soundInstances[t][e];
                    i.destroy()
                }
                delete this._soundInstances[t], delete this._audioSources[t], this._loaders[t] && this._loaders[t].destroy(), delete this._loaders[t]
            }
        }, e.removeAllSounds = function() {
            for (var t in this._audioSources) this.removeSound(t)
        }, e.create = function(t, e, i) {
            this.isPreloadStarted(t) || this.preload(this.register(t));
            var s = new this._soundInstanceClass(t, e, i, this._audioSources[t]);
            return this._soundInstances[t].push(s), s
        }, e.setVolume = function(t) {
            return this._volume = t, this._updateVolume(), !0
        }, e.getVolume = function() {
            return this._volume
        }, e.setMute = function(t) {
            return this._updateVolume(), !0
        }, e.toString = function() {
            return "[AbstractPlugin]"
        }, e._handlePreloadComplete = function(t) {
            var e = t.target.getItem().src;
            this._audioSources[e] = t.result;
            for (var i = 0, s = this._soundInstances[e].length; s > i; i++) {
                var n = this._soundInstances[e][i];
                n.setPlaybackResource(this._audioSources[e])
            }
        }, e._handlePreloadError = function(t) {}, e._updateVolume = function() {}, createjs.AbstractPlugin = t
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function t(t) {
            this.AbstractLoader_constructor(t, !0, createjs.AbstractLoader.SOUND)
        }
        var e = createjs.extend(t, createjs.AbstractLoader);
        t.context = null, e.toString = function() {
            return "[WebAudioLoader]"
        }, e._createRequest = function() {
            this._request = new createjs.XHRRequest(this._item, !1), this._request.setResponseType("arraybuffer")
        }, e._sendComplete = function(e) {
            t.context.decodeAudioData(this._rawResult, createjs.proxy(this._handleAudioDecoded, this), createjs.proxy(this._handleError, this))
        }, e._handleAudioDecoded = function(t) {
            this._result = t, this.AbstractLoader__sendComplete()
        }, createjs.WebAudioLoader = createjs.promote(t, "AbstractLoader")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function t(t, e, s, n) {
            this.AbstractSoundInstance_constructor(t, e, s, n), this.gainNode = i.context.createGain(), this.panNode = i.context.createPanner(), this.panNode.panningModel = i._panningModel, this.panNode.connect(this.gainNode), this.sourceNode = null, this._soundCompleteTimeout = null, this._sourceNodeNext = null, this._playbackStartTime = 0, this._endedHandler = createjs.proxy(this._handleSoundComplete, this)
        }
        var e = createjs.extend(t, createjs.AbstractSoundInstance),
            i = t;
        i.context = null, i.destinationNode = null, i._panningModel = "equalpower", e.destroy = function() {
            this.AbstractSoundInstance_destroy(), this.panNode.disconnect(0), this.panNode = null, this.gainNode.disconnect(0), this.gainNode = null
        }, e.toString = function() {
            return "[WebAudioSoundInstance]"
        }, e._updatePan = function() {
            this.panNode.setPosition(this._pan, 0, -.5)
        }, e._removeLooping = function() {
            this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext)
        }, e._addLooping = function() {
            this.playState == createjs.Sound.PLAY_SUCCEEDED && (this._sourceNodeNext = this._createAndPlayAudioNode(this._playbackStartTime, 0))
        }, e._setDurationFromSource = function() {
            this._duration = 1e3 * this.playbackResource.duration
        }, e._handleCleanUp = function() {
            this.sourceNode && this.playState == createjs.Sound.PLAY_SUCCEEDED && (this.sourceNode = this._cleanUpAudioNode(this.sourceNode), this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext)), 0 != this.gainNode.numberOfOutputs && this.gainNode.disconnect(0), clearTimeout(this._soundCompleteTimeout), this._playbackStartTime = 0
        }, e._cleanUpAudioNode = function(t) {
            return t && (t.stop(0), t.disconnect(0), t = null), t
        }, e._handleSoundReady = function(t) {
            this.gainNode.connect(i.destinationNode);
            var e = .001 * this._duration,
                s = .001 * this._position;
            this.sourceNode = this._createAndPlayAudioNode(i.context.currentTime - e, s), this._playbackStartTime = this.sourceNode.startTime - s, this._soundCompleteTimeout = setTimeout(this._endedHandler, 1e3 * (e - s)), 0 != this._loop && (this._sourceNodeNext = this._createAndPlayAudioNode(this._playbackStartTime, 0))
        }, e._createAndPlayAudioNode = function(t, e) {
            var s = i.context.createBufferSource();
            s.buffer = this.playbackResource, s.connect(this.panNode);
            var n = .001 * this._duration;
            return s.startTime = t + n, s.start(s.startTime, e + .001 * this._startTime, n - e), s
        }, e._pause = function() {
            this._position = 1e3 * (i.context.currentTime - this._playbackStartTime), this.sourceNode = this._cleanUpAudioNode(this.sourceNode), this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext), 0 != this.gainNode.numberOfOutputs && this.gainNode.disconnect(0), clearTimeout(this._soundCompleteTimeout)
        }, e._resume = function() {
            this._handleSoundReady()
        }, e._updateVolume = function() {
            var t = this._muted ? 0 : this._volume;
            t != this.gainNode.gain.value && (this.gainNode.gain.value = t)
        }, e._calculateCurrentPosition = function() {
            return 1e3 * (i.context.currentTime - this._playbackStartTime)
        }, e._updatePosition = function() {
            this.sourceNode = this._cleanUpAudioNode(this.sourceNode), this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext), clearTimeout(this._soundCompleteTimeout), this._paused || this._handleSoundReady()
        }, e._handleLoop = function() {
            this._cleanUpAudioNode(this.sourceNode), this.sourceNode = this._sourceNodeNext, this._playbackStartTime = this.sourceNode.startTime, this._sourceNodeNext = this._createAndPlayAudioNode(this._playbackStartTime, 0), this._soundCompleteTimeout = setTimeout(this._endedHandler, this._duration)
        }, e._updateDuration = function() {
            this._pause(), this._resume()
        }, createjs.WebAudioSoundInstance = createjs.promote(t, "AbstractSoundInstance")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function t() {
            this.AbstractPlugin_constructor(), this._panningModel = i._panningModel, this._volume = 1, this.context = i.context, this.dynamicsCompressorNode = this.context.createDynamicsCompressor(), this.dynamicsCompressorNode.connect(this.context.destination), this.gainNode = this.context.createGain(), this.gainNode.connect(this.dynamicsCompressorNode), createjs.WebAudioSoundInstance.destinationNode = this.gainNode, this._capabilities = i._capabilities, this._loaderClass = createjs.WebAudioLoader, this._soundInstanceClass = createjs.WebAudioSoundInstance, this._addPropsToClasses()
        }
        var e = createjs.extend(t, createjs.AbstractPlugin),
            i = t;
        i._capabilities = null, i._panningModel = "equalpower", i.context = null, i.isSupported = function() {
            var t = createjs.BrowserDetect.isIOS || createjs.BrowserDetect.isAndroid || createjs.BrowserDetect.isBlackberry;
            return "file:" != location.protocol || t || this._isFileXHRSupported() ? (i._generateCapabilities(), null == i.context ? !1 : !0) : !1
        }, i.playEmptySound = function() {
            var t = i.context.createBufferSource();
            t.buffer = i.context.createBuffer(1, 1, 22050), t.connect(i.context.destination), t.start(0, 0, 0)
        }, i._isFileXHRSupported = function() {
            var t = !0,
                e = new XMLHttpRequest;
            try {
                e.open("GET", "WebAudioPluginTest.fail", !1)
            } catch (i) {
                return t = !1
            }
            e.onerror = function() {
                t = !1
            }, e.onload = function() {
                t = 404 == this.status || 200 == this.status || 0 == this.status && "" != this.response
            };
            try {
                e.send()
            } catch (i) {
                t = !1
            }
            return t
        }, i._generateCapabilities = function() {
            if (null == i._capabilities) {
                var t = document.createElement("audio");
                if (null == t.canPlayType) return null;
                if (null == i.context)
                    if (window.AudioContext) i.context = new AudioContext;
                    else {
                        if (!window.webkitAudioContext) return null;
                        i.context = new webkitAudioContext
                    }
                i._compatibilitySetUp(), i.playEmptySound(), i._capabilities = {
                    panning: !0,
                    volume: !0,
                    tracks: -1
                };
                for (var e = createjs.Sound.SUPPORTED_EXTENSIONS, s = createjs.Sound.EXTENSION_MAP, n = 0, r = e.length; r > n; n++) {
                    var o = e[n],
                        a = s[o] || o;
                    i._capabilities[o] = "no" != t.canPlayType("audio/" + o) && "" != t.canPlayType("audio/" + o) || "no" != t.canPlayType("audio/" + a) && "" != t.canPlayType("audio/" + a)
                }
                i.context.destination.numberOfChannels < 2 && (i._capabilities.panning = !1)
            }
        }, i._compatibilitySetUp = function() {
            if (i._panningModel = "equalpower", !i.context.createGain) {
                i.context.createGain = i.context.createGainNode;
                var t = i.context.createBufferSource();
                t.__proto__.start = t.__proto__.noteGrainOn, t.__proto__.stop = t.__proto__.noteOff, i._panningModel = 0
            }
        }, e.toString = function() {
            return "[WebAudioPlugin]"
        }, e._addPropsToClasses = function() {
            var t = this._soundInstanceClass;
            t.context = this.context, t.destinationNode = this.gainNode, t._panningModel = this._panningModel, this._loaderClass.context = this.context
        }, e._updateVolume = function() {
            var t = createjs.Sound._masterMute ? 0 : this._volume;
            t != this.gainNode.gain.value && (this.gainNode.gain.value = t)
        }, createjs.WebAudioPlugin = createjs.promote(t, "AbstractPlugin")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function t(t) {
            this.src = t, this.length = 0, this.available = 0, this.tags = [], this.duration = 0
        }
        var e = t.prototype;
        e.constructor = t;
        var i = t;
        i.tags = {}, i.get = function(e) {
            var s = i.tags[e];
            return null == s && (s = i.tags[e] = new t(e)), s
        }, i.remove = function(t) {
            var e = i.tags[t];
            return null == e ? !1 : (e.removeAll(), delete i.tags[t], !0)
        }, i.getInstance = function(t) {
            var e = i.tags[t];
            return null == e ? null : e.get()
        }, i.setInstance = function(t, e) {
            var s = i.tags[t];
            return null == s ? null : s.set(e)
        }, i.getDuration = function(t) {
            var e = i.tags[t];
            return null == e ? 0 : e.getDuration()
        }, e.add = function(t) {
            this.tags.push(t), this.length++, this.available++
        }, e.removeAll = function() {
            for (var t; this.length--;) t = this.tags[this.length], t.parentNode && t.parentNode.removeChild(t), delete this.tags[this.length];
            this.src = null, this.tags.length = 0
        }, e.get = function() {
            if (0 == this.tags.length) return null;
            this.available = this.tags.length;
            var t = this.tags.pop();
            return null == t.parentNode && document.body.appendChild(t), t
        }, e.set = function(t) {
            var e = createjs.indexOf(this.tags, t); - 1 == e && this.tags.push(t), this.available = this.tags.length
        }, e.getDuration = function() {
            return this.duration || (this.duration = 1e3 * this.tags[this.tags.length - 1].duration), this.duration
        }, e.toString = function() {
            return "[HTMLAudioTagPool]"
        }, createjs.HTMLAudioTagPool = t
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function t(t, e, i, s) {
            this.AbstractSoundInstance_constructor(t, e, i, s), this._audioSpriteStopTime = null, this._delayTimeoutId = null, this._endedHandler = createjs.proxy(this._handleSoundComplete, this), this._readyHandler = createjs.proxy(this._handleTagReady, this), this._stalledHandler = createjs.proxy(this.playFailed, this), this._audioSpriteEndHandler = createjs.proxy(this._handleAudioSpriteLoop, this), this._loopHandler = createjs.proxy(this._handleSoundComplete, this), i ? this._audioSpriteStopTime = .001 * (e + i) : this._duration = createjs.HTMLAudioTagPool.getDuration(this.src)
        }
        var e = createjs.extend(t, createjs.AbstractSoundInstance);
        e.setMasterVolume = function(t) {
            this._updateVolume()
        }, e.setMasterMute = function(t) {
            this._updateVolume()
        }, e.toString = function() {
            return "[HTMLAudioSoundInstance]"
        }, e._removeLooping = function() {
            null != this._playbackResource && (this._playbackResource.loop = !1, this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1))
        }, e._addLooping = function() {
            null == this._playbackResource || this._audioSpriteStopTime || (this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1), this._playbackResource.loop = !0)
        }, e._handleCleanUp = function() {
            var t = this._playbackResource;
            if (null != t) {
                t.pause(), t.loop = !1, t.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, !1), t.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, !1), t.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED, this._stalledHandler, !1), t.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1), t.removeEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, !1);
                try {
                    t.currentTime = this._startTime
                } catch (e) {}
                createjs.HTMLAudioTagPool.setInstance(this.src, t), this._playbackResource = null
            }
        }, e._beginPlaying = function(t, e, i, s) {
            return this._playbackResource = createjs.HTMLAudioTagPool.getInstance(this.src), this.AbstractSoundInstance__beginPlaying(t, e, i, s)
        }, e._handleSoundReady = function(t) {
            if (4 !== this._playbackResource.readyState) {
                var e = this._playbackResource;
                return e.addEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, !1), e.addEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED, this._stalledHandler, !1), e.preload = "auto", void e.load()
            }
            this._updateVolume(), this._playbackResource.currentTime = .001 * (this._startTime + this._position), this._audioSpriteStopTime ? this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, !1) : (this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, !1), 0 != this._loop && (this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1), this._playbackResource.loop = !0)), this._playbackResource.play()
        }, e._handleTagReady = function(t) {
            this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, !1), this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED, this._stalledHandler, !1), this._handleSoundReady()
        }, e._pause = function() {
            this._playbackResource.pause()
        }, e._resume = function() {
            this._playbackResource.play()
        }, e._updateVolume = function() {
            if (null != this._playbackResource) {
                var t = this._muted || createjs.Sound._masterMute ? 0 : this._volume * createjs.Sound._masterVolume;
                t != this._playbackResource.volume && (this._playbackResource.volume = t)
            }
        }, e._calculateCurrentPosition = function() {
            return 1e3 * this._playbackResource.currentTime - this._startTime
        }, e._updatePosition = function() {
            this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1), this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._handleSetPositionSeek, !1);
            try {
                this._playbackResource.currentTime = .001 * (this._position + this._startTime)
            } catch (t) {
                this._handleSetPositionSeek(null)
            }
        }, e._handleSetPositionSeek = function(t) {
            null != this._playbackResource && (this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._handleSetPositionSeek, !1), this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1))
        }, e._handleAudioSpriteLoop = function(t) {
            this._playbackResource.currentTime <= this._audioSpriteStopTime || (this._playbackResource.pause(), 0 == this._loop ? this._handleSoundComplete(null) : (this._position = 0, this._loop--, this._playbackResource.currentTime = .001 * this._startTime, this._paused || this._playbackResource.play(), this._sendEvent("loop")))
        }, e._handleLoop = function(t) {
            0 == this._loop && (this._playbackResource.loop = !1, this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1))
        }, e._updateDuration = function() {
            this._audioSpriteStopTime = .001 * (startTime + duration), this.playState == createjs.Sound.PLAY_SUCCEEDED && (this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, !1), this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, !1))
        }, createjs.HTMLAudioSoundInstance = createjs.promote(t, "AbstractSoundInstance")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function t() {
            this.AbstractPlugin_constructor(), this.defaultNumChannels = 2, this._capabilities = i._capabilities, this._loaderClass = createjs.SoundLoader, this._soundInstanceClass = createjs.HTMLAudioSoundInstance
        }
        var e = createjs.extend(t, createjs.AbstractPlugin),
            i = t;
        i.MAX_INSTANCES = 30, i._AUDIO_READY = "canplaythrough", i._AUDIO_ENDED = "ended", i._AUDIO_SEEKED = "seeked", i._AUDIO_STALLED = "stalled", i._TIME_UPDATE = "timeupdate", i._capabilities = null, i.enableIOS = !1, i.isSupported = function() {
            return i._generateCapabilities(), null == i._capabilities ? !1 : !0
        }, i._generateCapabilities = function() {
            if (null == i._capabilities) {
                var t = document.createElement("audio");
                if (null == t.canPlayType) return null;
                i._capabilities = {
                    panning: !0,
                    volume: !0,
                    tracks: -1
                };
                for (var e = createjs.Sound.SUPPORTED_EXTENSIONS, s = createjs.Sound.EXTENSION_MAP, n = 0, r = e.length; r > n; n++) {
                    var o = e[n],
                        a = s[o] || o;
                    i._capabilities[o] = "no" != t.canPlayType("audio/" + o) && "" != t.canPlayType("audio/" + o) || "no" != t.canPlayType("audio/" + a) && "" != t.canPlayType("audio/" + a)
                }
            }
        }, e.register = function(t, e) {
            for (var i = createjs.HTMLAudioTagPool.get(t.src), s = null, n = 0; e > n; n++) s = this._createTag(t.src), i.add(s);
            var r = this.AbstractPlugin_register(t, e);
            return r.setTag(s), r
        }, e.removeSound = function(t) {
            this.AbstractPlugin_removeSound(t), createjs.HTMLAudioTagPool.remove(t)
        }, e.create = function(t, e, i) {
            var s = this.AbstractPlugin_create(t, e, i);
            return s.setPlaybackResource(null), s
        }, e.toString = function() {
            return "[HTMLAudioPlugin]"
        }, e.setVolume = e.getVolume = e.setMute = null, e._createTag = function(t) {
            var e = document.createElement("audio");
            return e.autoplay = !1, e.preload = "none", e.src = t, e
        }, createjs.HTMLAudioPlugin = createjs.promote(t, "AbstractPlugin")
    }(), GodStep.LocalStorage = function() {
        GodStep.LocalStorage.instance = this, window.addEventListener("storage", this.h_storage, !1), this.isAvailable = !0
    }, extend(GodStep.LocalStorage, Object), pro.getData = function(t) {
        var e = window.famobi.localStorage.getItem(t ? t : "data");
        return null != e ? JSON.parse(e) : void 0
    }, pro.setData = function(t, e) {
        window.famobi.localStorage.setItem(e ? e : "data", JSON.stringify(t))
    }, GodStep.Clear = function(t) {
        GodStep.LocalStorage.instance.setData(null, t)
    }, GodStep.SaveLocal = function(t, e) {
        GodStep.LocalStorage.instance.setData(t, e)
    }, GodStep.LoadText = function(t) {
        return JSON.parse(t)
    }, GodStep.LoadLocal = function(t) {
        var e = window.famobi.localStorage.getItem(t ? t : "data");
        return null != e ? JSON.parse(e) : void 0
    }, pro.h_storage = function(t) {
        trace("storage" + t)
    }, GodStep.Preloader = function(t) {
        this.preloadState = 0, GodStep.Preloader.textures = [], this.startS = t.startS, this.soul = t, this.isAudioTag = t.AUDIOTAG, this.isOnlyOneView = !0, GodStep.Frame.call(this, "Preloader", t.W, t.H), PIXI.EventTarget.call(this)
    }, extend(GodStep.Preloader, GodStep.Frame), GodStep.ASSETS_LOADED = "assets loaded", GodStep.SOUNDS_LOADED = "sounds loaded", pro.loadAll = function(t, e, i, s, n, r) {
        this.textures = [], this.pathImages = t;
        var o, a;
        for (this.images = e, this.assets = r, this.exts = [], o = 0; o < this.images.length; o++) this.exts.push(".png");
        for (o = 0; o < i.length; o++) this.images.push(i[o]), this.exts.push(".jpg");
        this.imagesCount = this.images.length, this.images.length > 0 && (a = GodStep.Image.fromImage("More_Games600x253_onWhite" == this.images[0] ? window.famobi.getMoreGamesButtonImage() : this.pathImages + this.images[0] + this.exts[0]), a.p = this, a.texName = this.images[0], this.textures[a.texName] = a.texture), this.initSounds(s, n), this.soundsCount = n.length, 0 == this.images.length && (this.isImagesComplete = !0, this.loadSounds())
    }, pro.trace = function(t) {
        trace(t)
    }, pro.initSounds = function(t, e) {
        this.trace("init sounds"), GodStep.Game.instance.sound = {};
        for (var i = [], s = !1, n = 0; n < e.length; n++) {
            var r = e[n];
            s = !1, r.length > 4 && "loop" == r.substr(0, 4) && (s = !0, r = r.substr(5, r.length - 5)), i.push({
                src: r,
                id: r,
                loop: s
            })
        }
        this.soundPath = t, GodStep.Game.instance.sound.needLoaded = this.needLoaded = this.sounds = i
    }, pro.loadSound = function(t, e, i) {
        var s = new Audio;
        return i && s.addEventListener("ended", function() {
            s.currentTime = 0, s.play()
        }, !1), this.sounds.push(s), s.src = t, s.preload = "auto", s.volume = e, s.preloader = this, s.onloadeddata = this.launchApp, s.load(), s
    }, pro.launchApp = function(t) {
        var e = this.preloader;
        e.audio_preload++, e.audio_preload == e.needLoaded.length || 1 == t ? e.startSounds() : e.loadSound(GodPath + e.soundPath + e.needLoaded[e.audio_preload].src + "." + e.support.audio, 1, e.needLoaded[e.audio_preload].loop)
    }, pro.startSounds = function() {
        this.loadAssets()
    }, pro.loadSounds = function() {
        if (this.soul.DISABLE_SOUND) return void this.loadAssets();
        if (this.isAudioTag) {
            this.support = {}, this.audio_preload = 0, GodStep.Game.instance.sound.sounds = this.sounds = [], GodStep.Game.instance.sound.AVAILABLE = !0;
            var t = document.createElement("audio"),
                e = !(!t.canPlayType || !t.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, "")),
                i = !(!t.canPlayType || !t.canPlayType("audio/mpeg;").replace(/no/, ""));
            if (e) trace("AUDIOTAG: ogg"), this.support.audio = "ogg";
            else {
                if (!i) return trace("no sound supported"), this.support.audio = "no", GodStep.Game.instance.sound.AVAILABLE = !1, this.startSounds(), 0;
                trace("AUDIOTAG: mp3"), this.support.audio = "mp3"
            }
            this.loadSound(GodPath + this.soundPath + this.needLoaded[0].src + "." + this.support.audio, 1, this.needLoaded[0].loop)
        } else {
            this.trace("loadSounds");
            var s = GodStep.Game.instance.sound = {
                preloader: this
            };
            if (s.AVAILABLE = !0, !window.createjs) return s.AVAILABLE = !1, GodStep.Game.instance.sound = {}, void this.loadAssets();
            if ((createjs.BrowserDetect.isIOS || createjs.BrowserDetect.isAndroid || createjs.BrowserDetect.isBlackberry) && (this.ISMOBILE = !0), s.AVAILABLE, this.soul.isNativeAndroid) s.AVAILABLE = !1, GodStep.Game.instance.sound = {}, this.loadAssets();
            else {
                if (!createjs.Sound.initializeDefaultPlugins()) return s.AVAILABLE = !1, void this.loadAssets();
                if (s.AVAILABLE) {
                    for (var n = 0; n < this.sounds.length; n++) this.sounds[n].src += ".ogg";
                    createjs.Sound.alternateExtensions = ["mp3"], createjs.Sound.addEventListener("fileload", this.h_loadedSound), s.countLoaded = this.sounds.length, createjs.Sound.addEventListener("fileload", createjs.proxy(this.h_loadedSound, this)), createjs.Sound.registerSounds(this.sounds, GodPath + this.soundPath)
                } else GodStep.Game.instance.sound = {}, this.loadAssets()
            }
        }
    }, pro.update = function() {
        if (!this.isImagesComplete) {
            var t;
            if (this.images) {
                for (var e in this.images) {
                    var i = this.textures[this.images[e]];
                    if (i && i.baseTexture.hasLoaded && (this.exts.splice(this.images.indexOf(this.images[e]), 1), this.images.splice(this.images.indexOf(this.images[e]), 1), GodStep.loadingCallback && GodStep.loadingCallback(.5 * (1 - this.images.length / this.imagesCount)), this.images.length > 0 && (t = GodStep.Image.fromImage(this.pathImages + this.images[0] + this.exts[0]), t.p = this, t.texName = this.images[0], this.textures[t.texName] = t.texture), this.images.length > 0))
                        for (var s = 0; 10 > s; s++) this.images[s] && (t = GodStep.Image.fromImage(this.pathImages + this.images[s] + this.exts[s]), t.p = this, t.texName = this.images[s], this.textures[t.texName] = t.texture)
                }
                0 == this.images.length && (this.isImagesComplete = !0, GodStep.textures = this.textures, null != GodStep.IMAGE_RESOLUTION && 1 != GodStep.IMAGE_RESOLUTION && this.resizeImages(GodStep.IMAGE_RESOLUTION), this.loadSounds())
            }
        }
    }, pro.resizeImages = function(t) {
        var e;
        for (var i in GodStep.textures) {
            var s = !1;
            if (null != GodStep.DONT_RESIZE)
                for (e = 0; e < GodStep.DONT_RESIZE.length; e++) i == GodStep.DONT_RESIZE[e] && (s = !0);
            if (!s) {
                var n = GodStep.textures[i],
                    r = new PIXI.RenderTexture(parseInt(n.width * t), parseInt(n.height * t));
                this.addChild(this.spr = new PIXI.Sprite(n)), r.render(this.spr, new PIXI.Matrix(t, 0, 0, t, 0, 0)), this.removeChild(this.spr), GodStep.textures[i] = r, 0 == r.width || 0 == r.height
            }
        }
        for (var o in PIXI.BaseTextureCache) {
            if (null != GodStep.DONT_RESIZE)
                for (s = !1, e = 0; e < GodStep.DONT_RESIZE.length; e++) {
                    var a = o.search(GodStep.DONT_RESIZE[e]);
                    a >= 0 && (s = !0)
                }
            s || PIXI.BaseTextureCache[o].isLoader || PIXI.BaseTextureCache[o].destroy()
        }
    }, pro.loadAssets = function() {
        if (this.trace("loading assets"), this.assets) {
            var t;
            t = void 0 != window.GodAssetsPath ? [window.GodAssetsPath + this.assets[0]] : [this.pathImages + this.assets[0]];
            var e;
            this.fontLoaderClass ? (e = new this.fontLoaderClass(t), this.soul.startS *= this.Scale, dispatch(this, GodStep.ASSETS_LOADED)) : (e = new PIXI.AssetLoader(t), e.onComplete = this.h_loadedAssets, e.preloader = this, e.load())
        } else dispatch(this, GodStep.ASSETS_LOADED)
    }, pro.h_loadedSound = function(t) {
        var e = GodStep.Game.instance.sound;
        GodStep.loadingCallback && e.countLoaded >= 0 && GodStep.loadingCallback(.5 * (1 - e.countLoaded / e.preloader.soundsCount) + .5), e.countLoaded--, 0 == e.countLoaded && (this.trace("sound loaded"), e.preloader.loadAssets())
    }, pro.h_loadedAssets = function(t) {
        this.preloader.trace("sound game"), this.soul && (this.soul.startS *= this.Scale), dispatch(this.preloader, GodStep.ASSETS_LOADED)
    }, GodStep.LFrame = function(t, e) {
        GodStep.Frame.call(this, e || "LFrame " + GodStep.Frame.frameCount++, t.W, t.H), this.OH = t.OH, this.OW = t.OW, this.s = t.startS, this.soul = t, this.visible = !1
    }, extend(GodStep.LFrame, GodStep.Frame), pro.init = function() {
        this.visible = !0
    }, pro.initLiquid = function(t, e, i) {
        this.isLiquid = !0, GodStep.lqobjects || (GodStep.lqobjects = [], GodStep.lqobjects[0] = []), GodStep.lqobjects[this.name] ? (GodStep.lqobjects[this.name].brothers.push(this), this.template = GodStep.lqobjects[this.name], this.addChild(this.view = new PIXI.Sprite(this.source = this.template.source))) : (GodStep.lqobjects[0].push(this), this.isTemplate = !0, this.addChild(this.view = new PIXI.Sprite(this.source = new PIXI.RenderTexture(t, e))), GodStep.lqobjects[this.name] = this, this.template = this, this.brothers = [], this.passes = [new LQ.Pass(LQ.PASS_LOOP, [1], [new LQ.Pass(LQ.PASS_FILL, [0, 0]), new LQ.Pass(LQ.PASS_CIRCLE, [0, 0]), new LQ.Pass(LQ.PASS_DRAW, [0])])], this.states = [new GodStep.State], this.colors = [], this.points = [], this.params = []), this.view.anchor = new PIXI.Point(.5, .5), this.w = t, this.h = e, this.d = i || 0
    }, pro.applyToState = function(t) {}, pro.applyState = function(t) {
        var e, i = 0,
            s = this.points,
            n = this.colors,
            r = this.params,
            o = t.values,
            a = this.w,
            h = this.h,
            l = this.d;
        for (e = 0; e < s.length; e++) {
            var d = s[e];
            d.x = a * o[i], d.y = h * o[i + 1], d.z = l * o[i + 2], i += 3
        }
        for (e = 0; e < n.length; e++) {
            var c = n[e];
            c.r = parseInt(255 * o[i]), c.g = parseInt(255 * o[i + 1]), c.b = parseInt(255 * o[i + 2]), c.calcHex(), i += 3
        }
        for (e = 0; e < r.length; e++) r[e] = o[i], i++
    }, pro.pushParam = function() {
        for (var t = this.states, e = t.length, i = 3 * this.points.length + 3 * this.colors.length + this.params.length, s = 0; e > s; s++) t[s].values.splice(i, 0, 0);
        this.params.push(0)
    }, pro.pushColor = function(t) {
        for (var e, i = this.states, s = i.length, n = 3 * this.points.length + 3 * this.colors.length, r = 0; s > r; r++) e = i[r].values, t ? (e.splice(n, 0, t.r / 255), e.splice(n + 1, t.g / 255), e.splice(n + 2, 0, t.b / 255)) : (e.splice(n, 0, 0), e.splice(n + 1, 0, 0), e.splice(n + 2, 0, 0));
        t ? this.colors.push(t) : this.colors.push(new GodStep.Color)
    }, pro.removeColor = function(t) {
        for (var e, i = this.colors.indexOf(t), s = this.states, n = s.length, r = 3 * this.points.length, o = 0; n > o; o++) e = s[o].values, e.splice(r + 3 * i, 3);
        this.colors.splice(i, 1)
    }, pro.removeParam = function() {
        this.params.length > 0 && this.params.splice(this.params.length - 1, 1);
        for (var t = this.states, e = t.length, i = 3 * this.points.length + 3 * this.colors.length + this.params.length - 1, s = 0; e > s; s++) t[s].values.splice(i, 1)
    }, pro.pushPoint = function() {
        for (var t, e = this.states, i = e.length, s = 3 * this.points.length, n = 0; i > n; n++) t = e[n].values, t.splice(s, 0, 0), t.splice(s + 1, 0, 0), t.splice(s + 2, 0, 0);
        this.points.push(new GodStep.Point)
    }, pro.pushState = function(t) {
        t ? this.states.push(t) : this.states.push(this.states[0].clone())
    }, pro.passAll = function() {
        LQ.Liquid.passAll(this)
    }, pro.getAllValues = function() {
        for (var t = this.states, e = t.length, i = [], s = 0; e > s; s++) i = i.concat(t[s].values);
        return i
    }, pro.setData = function(t) {
        if (this.isTemplate) {
            this.name = t.name, this.passes = [];
            for (var e = 0; e < t.passes.length; e++) this.passes.push(LQ.Pass.parse(t.passes[e]));
            this.states = [], this.colors = [], this.params = [], this.points = [];
            for (var i, s = t.values, n = s.length / t.sc, r = 0; r < t.dc; r++) this.points.push(new GodStep.Point);
            for (var o = 0; o < t.cc; o++) this.colors.push(new GodStep.Color);
            for (var a = 0; a < t.pc; a++) this.params.push(0);
            for (var h = 0; h < t.sc; h++) this.states.push(i = new GodStep.State), i.pushValues(s, n), s.splice(0, n)
        }
    }, pro.getData = function() {
        var t = {};
        t.name = this.name, t.passes = [], t.values = this.getAllValues(), t.sc = this.states.length, t.cc = this.colors.length, t.dc = this.points.length, t.pc = this.params.length;
        for (var e = 0; e < this.passes.length; e++) {
            var i = this.passes[e].getData();
            t.passes.push(i)
        }
        return t
    }, GodStep.Text = function(t, e, i, s, n) {
        this.font = i || "Arial", this.size = e || 15, this.align = s || "center", PIXI.Text.call(this, t, {
            font: this.size + "px " + this.font,
            align: this.align,
            fill: n ? "#" + n.toString(16) : "#000000"
        })
    }, extend(GodStep.Text, PIXI.Text), pro.place = function(t, e) {
        this.x = t, this.y = e
    }, pro.centerX = function(t, e) {
        this.y = e, this.x = t / 2 - this.width / 2
    }, pro.setColor = function(t) {
        this.style.fill = "#" + t.toString(16)
    }, pro.setFont = function(t) {
        this.font = t, this.style.font = this.size + "px " + this.font, this.updateText()
    }, pro.setSize = function(t) {
        this.size = t, this.style.font = this.size + "px " + this.font, this.updateText()
    }, Games.Img = function(t, e, i, s, n) {
        GodStep.Image.call(this, GodStep.textures[t]), this.name = t, this.Scale = e / GodStep.IMAGE_RESOLUTION, .5 == n ? this.anchor = new PIXI.Point(.5, .5) : n && (this.anchor = n), this.place(i, s)
    }, extend(Games.Img, GodStep.Image), pro.setTexture = function(t) {
        PIXI.Sprite.prototype.setTexture.call(this, GodStep.textures[t])
    }, Games.ImgButton = function(t, e, i, s, n, r, o, a, h) {
        var l = GodStep.textures[t];
        (void 0 == l || null == l) && trace("TEXTURE NOT FOUND - " + t);
        var d = this.startS = e.s * Games.SCALE;
        GodStep.Frame.call(this, null, l.width * d / GodStep.IMAGE_RESOLUTION, l.height * d / GodStep.IMAGE_RESOLUTION), GodStep.IOverOut.call(this, this.W, this.H), GodStep.IDownUp.call(this, this.W, this.H), this.imgName = t, this.p = e, this.scaleble = !0, this.addChild(this.img = new GodStep.Image(l)), this.img.Scale = d / GodStep.IMAGE_RESOLUTION, n && (this.addChild(this.label = new GodStep.BitmapText(n, (r || 100) * d / Games.SCALE, 0, 0, "center", h)), this.label.x -= this.label.width / 2 + (o || 0), this.label.y -= this.label.height / 2 + (a || 0), this.label.tdx = o || 0, this.label.tdy = a || 0, this.label.HW = -this.label.width / 2, this.label.HH = -this.label.height / 2), this.img.anchor = new PIXI.Point(.5, .5), this.setHitArea(-this.W / 2, -this.H / 2, this.W, this.H), this.addChild(this.over = new GodStep.Frame("over")), this.over.p = this, GodStep.IDownUp.call(this.over, this.W, this.H), this.place(i, s), addEvent(this, GodStep.FRAME_DOWN, this.h_mouse), addEvent(this, GodStep.FRAME_OUT, this.h_mouse), addEvent(this, GodStep.FRAME_OVER, this.h_mouse), addEvent(this.over, GodStep.FRAME_UP, this.h_mouse)
    }, extend(Games.ImgButton, GodStep.Frame), Games.ImgButton.CLICK = "clickImg", pro.setTexture = function(t) {
        var e = GodStep.textures[t];
        this.img.setTexture(e)
    }, pro.rescale = function(t) {
        this.no_scale || (this.label && (this.label.scale.y = this.label.scale.x = t, this.label.x = (this.label.HW - (this.label.tdx || 0)) * this.label.scale.y, this.label.y = (this.label.HH - (this.label.tdy || 0)) * this.label.scale.y), this.img.scale.y = this.img.scale.x = t * this.startS)
    }, pro.h_mouse = function(t) {
        var e = t.content.t;
        switch (t.type) {
            case GodStep.FRAME_DOWN:
                this.scaleble && this.rescale(1.1 / GodStep.IMAGE_RESOLUTION), this.over.visible = !0, this.over.interactive = !0, this.over.hitArea = new PIXI.Rectangle(.2 * -this.p.W, .2 * -this.p.W, .4 * this.p.W, .4 * this.p.W), this.isClicked = !0, this.isOvered = !0;
                var i = t.content.getLocalPosition(this);
                this.over.x = i.x, this.over.y = i.y, addEvent(this, GodStep.FRAME_MOVE, this.h_move);
                break;
            case GodStep.FRAME_UP:
                this.p.isClicked && this.p.isOvered && dispatch(e.parent, Games.ImgButton.CLICK), this.visible = !1, this.p.isOvered = !1, this.p.rescale(1 / GodStep.IMAGE_RESOLUTION), this.p.isDown = !1, delEvent(this.p, GodStep.FRAME_MOVE, this.h_move), this.p.isClicked = !1;
                break;
            case GodStep.FRAME_OUT:
                this.isOvered = !1, this.rescale(1 / GodStep.IMAGE_RESOLUTION);
                break;
            case GodStep.FRAME_OVER:
                this.isClicked && (this.isOvered = !0, this.scaleble && this.rescale(1.1 / GodStep.IMAGE_RESOLUTION))
        }
    }, pro.h_move = function(t) {
        var e = t.content.getLocalPosition(this);
        this.over.x = e.x, this.over.y = e.y
    }, Object.defineProperty(pro, "Scale", {
        get: function() {
            return this.scale.x
        },
        set: function(t) {
            this.scale.x = this.scale.y = t, this.rescale(1 / GodStep.IMAGE_RESOLUTION)
        }
    }), GodStep.BitmapText = function(t, e, i, s, n, r, o) {
        PIXI.BitmapText.call(this, t, {
            font: parseInt(e) + "px " + (o ? o : "Font"),
            align: n || "left"
        }), this.x = i, this.y = s, r && (this.tint = r), this.updateText()
    }, extend(GodStep.BitmapText, PIXI.BitmapText), GodStep.MovieClip = function(t, e, i, s, n) {
        this.frames = t, this.animTime = 6, this.animTimer = 6, this.cycle = 0;
        var r = GodStep.textures[this.frames[0]];
        GodStep.Image.call(this, r), this.Scale = this.startS = e / GodStep.IMAGE_RESOLUTION, this.currentFrame = 0, this.totalFrames = t.length, .5 == n ? this.anchor = new PIXI.Point(.5, .5) : n && (this.anchor = n), this.place(i, s)
    }, extend(GodStep.MovieClip, GodStep.Image), pro.animate = function() {
        this.isAnimate() && this.nextFrame()
    }, pro.isAnimate = function() {
        return this.animTimer > 0 && 0 == --this.animTimer ? (this.animTimer = this.animTime, !0) : !1
    }, pro.setToFrame = function(t) {
        this.currentFrame = t, this.setTexture(GodStep.textures[this.frames[t]])
    }, pro.nextFrame = function() {
        return this.currentFrame++, this.currentFrame == this.frames.length && (this.currentFrame = 0, this.cycle++), this.setTexture(GodStep.textures[this.frames[this.currentFrame]]), this.currentFrame
    }, Games.TextButton = function(t, e, i, s, n) {
        GodStep.Frame.call(this, null, 0, 0), this.color = i, this.addChild(this.back = new PIXI.Graphics), this.addChild(this.text = new GodStep.Text(t, 2 * e, "Arial", "left", 16777215)), this.text.x = -this.text.width / 2, this.text.y = -this.text.height / 2, this.W = 1.5 * this.text.width, this.H = 1.5 * this.text.height, GodStep.IOverOut.call(this, this.W, this.H), GodStep.IDownUp.call(this, this.W, this.H), this.setHitArea(-this.W / 2, -this.H / 2, this.W, this.H), this.isSelected = !1, this.redraw(), this.place(s, n), addEvent(this, GodStep.FRAME_DOWN, this.h_mouse), addEvent(this, GodStep.FRAME_OUT, this.h_mouse), addEvent(this, GodStep.FRAME_OVER, this.h_mouse), addEvent(this, GodStep.FRAME_UP, this.h_mouse)
    }, extend(Games.TextButton, GodStep.Frame), pro.destroy = function() {
        return this.removeChild(this.back), this.removeChild(this.text), this
    }, pro.redraw = function() {
        var t = this.back;
        t.clear(), t.beginFill(this.color, 1), this.isSelected && t.lineStyle(2, 16777215, 1), t.drawRect(-this.W / 2, -this.H / 2, this.W, this.H), t.endFill()
    }, pro.h_mouse = function(t) {
        var e = t.content.t;
        switch (t.type) {
            case GodStep.FRAME_DOWN:
                this.Scale = .9, this.isClicked = !0;
                break;
            case GodStep.FRAME_UP:
                this.isClicked && dispatch(e, Games.ImgButton.CLICK), this.isClicked = !1;
                break;
            case GodStep.FRAME_OUT:
                this.Scale = 1;
                break;
            case GodStep.FRAME_OVER:
                this.isDown && (this.Scale = .9)
        }
    }, Object.defineProperty(pro, "Selected", {
        get: function() {
            return this.isSelected
        },
        set: function(t) {
            this.isSelected = t, this.redraw()
        }
    }), Games.CellField = function(t, e, i, s, n, r) {
        GodStep.Frame.call(this, "CellField", i, s), GodStep.IDownUp.call(this, i, s), this.startS = r, this.cellCountX = t, this.cellCountY = e, this.cellClass = n, this.addChild(this.cellContainer = new PIXI.DisplayObjectContainer), this.addChild(this.objectContainer = new PIXI.DisplayObjectContainer), this.initField()
    }, extend(Games.CellField, GodStep.Frame), pro.initField = function(t, e, i, s) {
        var n;
        this.cells = [], this.cellsXY = [];
        var r = this.cellW = i || this.W / this.cellCountX,
            o = this.cellH = s || this.H / this.cellCountY;
        this.cellCountX = t || this.cellCountX, this.cellCountY = e || this.cellCountY;
        for (var a = 0, h = 0, l = 0; l < this.cellCountY; l++) {
            this.cellsXY.push(n = []);
            for (var d = 0; d < this.cellCountX; d++)
                if (this.cellClass) {
                    var c = new this.cellClass(d, l, r, o, this.startS);
                    this.addCell(c, r, o), a = Math.max(c.x, a), h = Math.max(c.y, h), addEvent(c, Games.CELL_UP, this.h_cells), addEvent(c, Games.CELL_DOWN, this.h_cells)
                }
        }
    }, pro.addCell = function(t, e, i) {
        this.cells.push(t), this.cellsXY[t.yi][t.xi] = t, this.addFrame(t, this.cellContainer), t.x = t.xi * e, t.y = t.yi * i
    }, pro.getCell = function(t, e) {
        return this.cells[t + e * this.cellCountX]
    }, pro.h_cells = function(t) {
        var e = t.target,
            i = e.parent.parent;
        switch (t.type) {
            case Games.CELL_DOWN:
                dispatch(i, Games.CELL_DOWN, e);
                break;
            case Games.CELL_UP:
                dispatch(i, Games.CELL_UP, e)
        }
    }, Games.Cell = function(t, e, i, s) {
        this.xi = t, this.yi = e, this.guests = [], GodStep.Frame.call(this, "Cell[" + t + ", " + e + "]", i, s), GodStep.IDownUp.call(this, i, s), addEvent(this, GodStep.FRAME_UP, this.h_mouse), addEvent(this, GodStep.FRAME_DOWN, this.h_mouse)
    }, Games.CELL_UP = "cellup", Games.CELL_DOWN = "celldown", Games.CELL_CLICK = "cellclick", extend(Games.Cell, GodStep.Frame), pro.h_mouse = function(t) {
        var e = t.target;
        switch (t.type) {
            case GodStep.FRAME_UP:
                dispatch(e, Games.CELL_UP);
                break;
            case GodStep.FRAME_DOWN:
                dispatch(e, Games.CELL_DOWN)
        }
    }, Games.Transmission = function(t, e, i) {
        this.soul = t, this.color = i || GodStep.COLOR_STAGE, GodStep.Frame.call(this, "Transmission", t.SW, t.SH), this.startS = this.soul.startS, this.create(), this.timerCache = -1, this.speed = e || .1, this.cacheAsBitmap = !0, this.visible = !1, this.graphics.scale.y = this.graphics.oS = this.soul.SH / this.graphics.height * t.assets.Scale
    }, extend(Games.Transmission, GodStep.Frame), pro.create = function() {
        this.createGraphics(), this.rect(this.W, this.H, this.color, 1, 0, 0)
    }, pro.start = function(t, e) {
        this.isStarted || (this.screens = t, this.outScreen = e, this.isStarted = !0, this.isGoesUp = !0, this.alpha = 0, this.visible = !0)
    }, pro.update = function() {
        if (0 == this.timerCache--) {
            this.timerCache = -1;
            var t = this.visible,
                e = this.alpha;
            this.cacheAsBitmap = !1, this.visible = !0, this.alpha = 1, this.cacheAsBitmap = !0, this.visible = t, this.alpha = e
        }
        if (this.isStarted)
            if (this.isGoesUp) {
                if (this.alpha += this.speed, this.alpha > 1) {
                    this.alpha = 1, this.isGoesUp = !1, this.outScreen.isOnlyOneView && this.outScreen.destrukt(), this.outScreen.visible = !1;
                    for (var i in this.screens) this.screens[i].init()
                }
            } else this.alpha -= this.speed, this.alpha <= 0 && (this.alpha = 0, this.visible = !1, this.isStarted = !1)
    }, pro.reskin = function(t) {
        this.cacheAsBitmap = !1;
        var e = this.visible;
        this.visible = !0;
        var i = this.alpha;
        this.alpha = 1, this.graphics.clear(), this.rect(this.W, this.H, t, 1, 0, 0), this.cacheAsBitmap = !0, this.visible = e, this.alpha = i
    }, Object.defineProperty(pro, "Scale", {
        get: function() {
            return this.scale.x
        },
        set: function(t) {
            this.scale.x = this.scale.y = t, this.cacheAsBitmap = !1, this.timerCache = 25, this.graphics.y = this.FULLRESIZE ? 0 : .5 * -(this.soul.OH - this.soul.H) / t, this.graphics.scale.y = this.graphics.oS * this.soul.OH / this.soul.H, this.graphics.scale.x = this.graphics.oS * (this.soul.FULLRESIZE ? this.soul.OW / this.soul.W : 1)
        }
    }), GodStep.FPS = function(t, e, i) {
        GodStep.Frame.call(this, "FPS", t.W, t.H), this.addChild(this.text = new GodStep.Text("0", 55 * this.startS, "Arial", "left", e || 0)), this.startTime = Date.now(), this.addString(t.CANVAS ? "C" : "W"), this.alpha = i, this.soul = t, this.prevTime = this.startTime, this.msMin = 1 / 0, this.msMax = 0, this.fpsMin = 1 / 0, this.fpsMax = 0, this.frames = 0, this.lastValue = 0, 0 == i && (visible = !1)
    }, extend(GodStep.FPS, GodStep.Frame), pro.addString = function(t) {
        this.plusString = t
    }, pro.end = function() {
        var t = Date.now(),
            e = t - this.startTime;
        if (this.msMin = Math.min(this.msMin, e), this.msMax = Math.max(this.msMax, e), t > this.prevTime + 100) {
            var i = Math.round(1e3 * this.frames / (t - this.prevTime));
            this.lastValue += .3 * (i - this.lastValue), this.fpsMin = Math.min(this.fpsMin, this.lastValue), this.fpsMax = Math.max(this.fpsMax, this.lastValue), this.text.setText(Math.round(this.lastValue) + " " + this.plusString), this.prevTime = t, this.frames = 0
        }
        this.frames++
    }, pro.begin = function() {
        this.startTime = Date.now()
    }, Object.defineProperty(pro, "Scale", {
        get: function() {
            return this.scale.x
        },
        set: function(t) {
            this.scale.x = this.scale.y = 1, this.text.updateText(), this.y = this.soul.H - this.text.height + (this.soul.OH - this.soul.H) + .015 * this.soul.H * this.soul.startS, this.x = .02 * this.soul.W * this.soul.startS
        }
    }), PR.Assets = function(t) {
        GodStep.DONT_RESIZE = ["Font2"], GodStep.Preloader.call(this, t), this.fontLoaderClass = PR.Font
    }, extend(PR.Assets, GodStep.Preloader), pro.load = function() {
        this.addChild(this.back = GodStep.Image.fromImage(PR.IMAGE_PATH + "back_fundemic1.jpg", this.h_preload)), this.addChild(this.logo = GodStep.Image.fromImage(PR.IMAGE_PATH + "fundemic_logo.png", this.h_preload)), this.addChild(this.loading = GodStep.Image.fromImage(window.famobi.__("loading.png"), this.h_preload));
        var t = 0;
        this.back.texture.baseTexture.hasLoaded && (this.back.Scale = this.startS, this.back.anchor = new PIXI.Point(.5, .5), this.back.place(this.W / 2, .5 * this.H), this.back.scale.y = this.soul.OH / this.soul.H * this.startS, this.back.texture.baseTexture.isLoader = !0, t++), this.logo.texture.baseTexture.hasLoaded && (this.logo.Scale = this.startS, this.logo.anchor = new PIXI.Point(.5, .5), this.logo.place(this.W / 2, .3 * this.H), this.logo.texture.baseTexture.isLoader = !0, t++), this.loading.texture.baseTexture.hasLoaded && (this.loading.Scale = this.startS, this.loading.anchor = new PIXI.Point(.5, .5), this.loading.place(this.W / 2, .7 * this.H), this.loading.texture.baseTexture.isLoader = !0, 2 == t && this.init())
    }, pro.init = function() {
        for (var t = ["More_Games600x253_onWhite", "Font", "b_back", "lock", "lock", "hero", "hero2", "back_menu", "cube_lock_1", "cube_lock_2", "pers_win_1", "pers_win_2", "pers_win_3", "pers_win_4", "pers_win_5", "yellow", "red", "purple", "green", "blue", "cellBack", "back_up", "block", "delete", "dirt", "s_blue", "s_red", "s_green", "s_purple", "s_yellow", "s_bonus", "bomb", "d_green", "d_red", "d_yellow", "d_purple", "d_blue", "b_1", "b_2", "b_3", "b_4", "b_5", "h_green", "h_red", "h_yellow", "h_purple", "h_blue", "cube_1s", "cube_2s", "cube_1", "down", "field_button_m", "logo", "pers_m_1", "pers_m_1_0", "b_pause", "pers_m_2", "pers_m_2_0", "b_more", "b_options", "b_play", "b_back", "b_music", "b_sound", "back_options", "pers_1", "pers_2", "slider_on", "slider_off", "tutorial_on", "tutorial_off", "slider_off_pause", "slider_on_pause", "pers_2o", "pers_1o", "pers_1_0", "pers_2_0", "back_pause", "field_button", "b_replay", "b_menu", "pers_l", "pers_l1", "lock", "unlock_1_1", "unlock_1_2", "unlock_2_1", "unlock_2_2", "back_levels", "arm_1", "arm_2", "b_down", "back_game", "block", "bomb", "bonus", "cage_1", "cage_2", "cage_3", "cage_4", "cage_5", "cube_1", "cube_2", "cube_3", "cube_4", "cube_5", "cube_back_1", "cube_back_2", "field_down", "field_fin", "field_start", "field_up", "icon_save", "line_right", "line_left", "star", "b_next_1", "b_next_2", "back_fin_animation", "back_fail", "back_win", "field_button2", "field_score_fail", "field_score_win", "field_record", "fin_animation_1", "fin_animation_2", "fin_animation_3", "pers_f_1", "pers_f_1_0", "pers_f_2", "pers_f_2_0", "pers_fg_1", "pers_fg_1_0", "pers_fg_2", "pers_fg_2_0", "pers_v_1", "pers_v_1_0", "boom_1", "boom_2", "boom_3", "boom_4", "boom_5"], e = 0; 5 > e; e++) t.push("cage_1_" + (e + 1)), t.push("cage_2_" + (e + 1)), t.push("cage_3_" + (e + 1)), t.push("cage_4_" + (e + 1)), t.push("cage_5_" + (e + 1)), t.push("cube_1_" + (e + 1)), t.push("cube_2_" + (e + 1)), t.push("cube_3_" + (e + 1)), t.push("cube_4_" + (e + 1)), t.push("cube_5_" + (e + 1)), t.push("net_" + (e + 1)), t.push("pers_" + (e + 1) + "_1"), t.push("pers_" + (e + 1) + "_2"), t.push("pers_" + (e + 1) + "_3"), t.push("disappear_" + (e + 1));
        GodStep.Preloader.prototype.loadAll.call(this, PR.IMAGE_PATH, t, [], PR.SOUND_PATH, ["button", "miss_tap", "bomb", "cage", "cageout", "lose", "petard", "pop", "rescue", "start", "tap", "theme", "win"], ["Font"])
    }, pro.h_preload = function(t) {
        var e = this.image,
            i = e.parent;
        switch (e.Scale = i.startS, e.anchor = new PIXI.Point(.5, .5), i.preloadState++, e) {
            case i.back:
                i.back.scale.y = i.soul.OH / i.soul.H * i.startS, i.back.place(i.W / 2, .5 * i.H), i.back.texture.baseTexture.isLoader = !0;
                break;
            case i.logo:
                i.logo.place(i.W / 2, .3 * i.H), i.logo.texture.baseTexture.isLoader = !0;
                break;
            case i.loading:
                i.loading.place(i.W / 2, .7 * i.H), i.loading.texture.baseTexture.isLoader = !0
        }
        2 == i.preloadState && i.init()
    }, PR.Font = function() {
        new PR.BitmapFontLoader
    }, extend(PR.Font, PIXI.AssetLoader), PR.FontString = '<font><info face="Font" size="59" /><common lineHeight="59" scaleW="529" scaleH="531" pages="1" /><pages><page id="0" file="Fontt.png" /></pages><chars count="190"><char id="35" x="261" y="487" width="36" height="41" xoffset="0" yoffset="18" xadvance="40" /><!-- # --><char id="33" x="508" y="373" width="11" height="42" xoffset="0" yoffset="17" xadvance="15" /><!-- ! --><char id="36" x="261" y="391" width="36" height="51" xoffset="0" yoffset="13" xadvance="40" /><!-- $ --><char id="37" x="0" y="347" width="51" height="43" xoffset="0" yoffset="17" xadvance="55" /><!-- % --><char id="38" x="143" y="376" width="41" height="42" xoffset="0" yoffset="17" xadvance="45" /><!-- & --><char id="39" x="64" y="372" width="9" height="18" xoffset="0" yoffset="18" xadvance="13" /><!-- --><char id="40" x="507" y="0" width="16" height="52" xoffset="0" yoffset="17" xadvance="20" /><!-- ( --><char id="41" x="507" y="53" width="16" height="52" xoffset="0" yoffset="17" xadvance="20" /><!-- ) --><char id="42" x="209" y="507" width="23" height="22" xoffset="0" yoffset="17" xadvance="27" /><!-- * --><char id="43" x="365" y="246" width="32" height="32" xoffset="0" yoffset="27" xadvance="36" /><!-- + --><char id="44" x="56" y="240" width="11" height="21" xoffset="0" yoffset="48" xadvance="15" /><!-- , --><char id="45" x="186" y="218" width="18" height="9" xoffset="0" yoffset="39" xadvance="22" /><!-- - --><char id="46" x="52" y="372" width="11" height="11" xoffset="0" yoffset="48" xadvance="15" /><!-- . --><char id="47" x="458" y="168" width="25" height="42" xoffset="0" yoffset="17" xadvance="29" /><!-- / --><char id="48" x="332" y="119" width="33" height="41" xoffset="0" yoffset="18" xadvance="37" /><!-- 0 --><char id="49" x="486" y="434" width="21" height="41" xoffset="0" yoffset="18" xadvance="25" /><!-- 1 --><char id="50" x="299" y="161" width="33" height="41" xoffset="0" yoffset="18" xadvance="37" /><!-- 2 --><char id="51" x="262" y="306" width="34" height="41" xoffset="0" yoffset="18" xadvance="38" /><!-- 3 --><char id="52" x="298" y="119" width="33" height="41" xoffset="0" yoffset="18" xadvance="37" /><!-- 4 --><char id="53" x="298" y="255" width="33" height="41" xoffset="0" yoffset="18" xadvance="37" /><!-- 5 --><char id="54" x="298" y="77" width="33" height="41" xoffset="0" yoffset="18" xadvance="37" /><!-- 6 --><char id="55" x="399" y="317" width="30" height="41" xoffset="0" yoffset="18" xadvance="34" /><!-- 7 --><char id="56" x="298" y="213" width="33" height="41" xoffset="0" yoffset="18" xadvance="37" /><!-- 8 --><char id="57" x="332" y="77" width="33" height="41" xoffset="0" yoffset="18" xadvance="37" /><!-- 9 --><char id="58" x="399" y="43" width="11" height="30" xoffset="0" yoffset="29" xadvance="15" /><!-- : --><char id="59" x="485" y="84" width="11" height="40" xoffset="0" yoffset="29" xadvance="15" /><!-- ; --><char id="60" x="366" y="431" width="32" height="34" xoffset="0" yoffset="25" xadvance="36" /><!-- < --><char id="61" x="176" y="507" width="32" height="23" xoffset="0" yoffset="32" xadvance="36" /><!-- = --><char id="62" x="366" y="353" width="32" height="34" xoffset="0" yoffset="25" xadvance="36" /><!-- > --><char id="63" x="398" y="117" width="31" height="42" xoffset="0" yoffset="17" xadvance="35" /><!-- ? --><char id="89" x="102" y="196" width="42" height="42" xoffset="0" yoffset="17" xadvance="46" /><!-- Y --><char id="64" x="60" y="98" width="44" height="43" xoffset="0" yoffset="17" xadvance="48" /><!-- @ --><char id="65" x="110" y="44" width="42" height="42" xoffset="0" yoffset="17" xadvance="46" /><!-- A --><char id="66" x="224" y="348" width="37" height="42" xoffset="0" yoffset="17" xadvance="41" /><!-- B --><char id="67" x="147" y="132" width="40" height="42" xoffset="0" yoffset="17" xadvance="44" /><!-- C --><char id="68" x="186" y="175" width="38" height="42" xoffset="0" yoffset="17" xadvance="42" /><!-- D --><char id="69" x="297" y="306" width="34" height="42" xoffset="0" yoffset="17" xadvance="38" /><!-- E --><char id="70" x="398" y="242" width="31" height="42" xoffset="0" yoffset="17" xadvance="35" /><!-- F --><char id="71" x="145" y="185" width="40" height="42" xoffset="0" yoffset="17" xadvance="44" /><!-- G --><char id="72" x="262" y="213" width="35" height="42" xoffset="0" yoffset="17" xadvance="39" /><!-- H --><char id="73" x="508" y="330" width="11" height="42" xoffset="0" yoffset="17" xadvance="15" /><!-- I --><char id="74" x="430" y="317" width="29" height="42" xoffset="0" yoffset="17" xadvance="33" /><!-- J --><char id="75" x="144" y="239" width="40" height="42" xoffset="0" yoffset="17" xadvance="44" /><!-- K --><char id="76" x="405" y="0" width="30" height="42" xoffset="0" yoffset="17" xadvance="34" /><!-- L --><char id="77" x="52" y="329" width="47" height="42" xoffset="0" yoffset="17" xadvance="51" /><!-- M --><char id="78" x="262" y="170" width="36" height="42" xoffset="0" yoffset="17" xadvance="40" /><!-- N --><char id="79" x="113" y="0" width="41" height="42" xoffset="0" yoffset="17" xadvance="45" /><!-- O --><char id="80" x="298" y="458" width="34" height="42" xoffset="0" yoffset="17" xadvance="38" /><!-- P --><char id="81" x="143" y="328" width="41" height="47" xoffset="0" yoffset="17" xadvance="45" /><!-- Q --><char id="82" x="188" y="84" width="38" height="42" xoffset="0" yoffset="17" xadvance="42" /><!-- R --><char id="83" x="226" y="127" width="36" height="42" xoffset="0" yoffset="17" xadvance="40" /><!-- S --><char id="84" x="224" y="218" width="37" height="42" xoffset="0" yoffset="17" xadvance="41" /><!-- T --><char id="85" x="224" y="261" width="37" height="42" xoffset="0" yoffset="17" xadvance="41" /><!-- U --><char id="86" x="155" y="0" width="39" height="42" xoffset="0" yoffset="17" xadvance="43" /><!-- V --><char id="87" x="0" y="186" width="56" height="42" xoffset="0" yoffset="17" xadvance="60" /><!-- W --><char id="88" x="104" y="142" width="42" height="42" xoffset="0" yoffset="17" xadvance="46" /><!-- X --><char id="90" x="224" y="391" width="36" height="42" xoffset="0" yoffset="17" xadvance="40" /><!-- Z --><char id="91" x="486" y="277" width="17" height="52" xoffset="0" yoffset="17" xadvance="21" /><!-- [ --><char id="92" x="458" y="125" width="25" height="42" xoffset="0" yoffset="17" xadvance="29" /><!--  --><char id="93" x="504" y="277" width="17" height="52" xoffset="0" yoffset="17" xadvance="21" /><!-- ] --><char id="94" x="143" y="419" width="29" height="26" xoffset="0" yoffset="18" xadvance="33" /><!-- ^ --><char id="34" x="224" y="434" width="24" height="24" xoffset="0" yoffset="12" xadvance="28" /><!-- " --><char id="95" x="0" y="521" width="29" height="3" xoffset="0" yoffset="63" xadvance="33" /><!-- _ --><char id="96" x="205" y="218" width="17" height="9" xoffset="0" yoffset="17" xadvance="21" /><!-- ` --><char id="97" x="373" y="0" width="31" height="31" xoffset="0" yoffset="28" xadvance="35" /><!-- a --><char id="98" x="366" y="388" width="32" height="42" xoffset="0" yoffset="17" xadvance="36" /><!-- b --><char id="99" x="398" y="160" width="31" height="31" xoffset="0" yoffset="28" xadvance="35" /><!-- c --><char id="100" x="398" y="74" width="31" height="42" xoffset="0" yoffset="17" xadvance="35" /><!-- d --><char id="101" x="340" y="0" width="32" height="31" xoffset="0" yoffset="28" xadvance="36" /><!-- e --><char id="102" x="485" y="347" width="22" height="43" xoffset="0" yoffset="16" xadvance="26" /><!-- f --><char id="103" x="366" y="32" width="32" height="41" xoffset="0" yoffset="28" xadvance="36" /><!-- g --><char id="104" x="399" y="359" width="30" height="42" xoffset="0" yoffset="17" xadvance="34" /><!-- h --><char id="105" x="508" y="416" width="10" height="42" xoffset="0" yoffset="17" xadvance="14" /><!-- i --><char id="106" x="508" y="106" width="15" height="52" xoffset="0" yoffset="17" xadvance="19" /><!-- j --><char id="107" x="366" y="466" width="32" height="42" xoffset="0" yoffset="17" xadvance="36" /><!-- k --><char id="108" x="508" y="459" width="10" height="42" xoffset="0" yoffset="17" xadvance="14" /><!-- l --><char id="109" x="52" y="297" width="47" height="31" xoffset="0" yoffset="28" xadvance="51" /><!-- m --><char id="110" x="399" y="477" width="30" height="31" xoffset="0" yoffset="28" xadvance="34" /><!-- n --><char id="111" x="366" y="321" width="32" height="31" xoffset="0" yoffset="28" xadvance="36" /><!-- o --><char id="112" x="365" y="279" width="32" height="41" xoffset="0" yoffset="28" xadvance="36" /><!-- p --><char id="113" x="366" y="107" width="31" height="41" xoffset="0" yoffset="28" xadvance="35" /><!-- q --><char id="114" x="457" y="497" width="21" height="31" xoffset="0" yoffset="28" xadvance="25" /><!-- r --><char id="115" x="398" y="285" width="30" height="31" xoffset="0" yoffset="28" xadvance="34" /><!-- s --><char id="116" x="464" y="0" width="22" height="41" xoffset="0" yoffset="18" xadvance="26" /><!-- t --><char id="117" x="399" y="445" width="30" height="31" xoffset="0" yoffset="28" xadvance="34" /><!-- u --><char id="118" x="333" y="161" width="32" height="31" xoffset="0" yoffset="28" xadvance="36" /><!-- v --><char id="119" x="0" y="391" width="49" height="31" xoffset="0" yoffset="27" xadvance="53" /><!-- w --><char id="120" x="333" y="460" width="32" height="31" xoffset="0" yoffset="27" xadvance="36" /><!-- x --><char id="121" x="333" y="418" width="32" height="41" xoffset="0" yoffset="27" xadvance="36" /><!-- y --><char id="122" x="429" y="285" width="29" height="31" xoffset="0" yoffset="27" xadvance="33" /><!-- z --><char id="123" x="484" y="171" width="23" height="52" xoffset="0" yoffset="16" xadvance="27" /><!-- { --><char id="124" x="519" y="416" width="9" height="58" xoffset="0" yoffset="12" xadvance="13" /><!-- | --><char id="125" x="485" y="224" width="22" height="52" xoffset="0" yoffset="16" xadvance="26" /><!-- } --><char id="323" x="332" y="236" width="32" height="49" xoffset="0" yoffset="10" xadvance="36" /><!-- Ń --><char id="199" x="365" y="193" width="32" height="52" xoffset="0" yoffset="18" xadvance="36" /><!-- Ç --><char id="213" x="185" y="363" width="38" height="49" xoffset="0" yoffset="10" xadvance="42" /><!-- Õ --><char id="211" x="195" y="0" width="38" height="49" xoffset="0" yoffset="10" xadvance="42" /><!-- Ó --><char id="231" x="461" y="42" width="24" height="41" xoffset="0" yoffset="29" xadvance="28" /><!-- ç --><char id="237" x="508" y="203" width="13" height="42" xoffset="0" yoffset="17" xadvance="17" /><!-- í --><char id="227" x="460" y="305" width="25" height="41" xoffset="0" yoffset="18" xadvance="29" /><!-- ã --><char id="243" x="399" y="402" width="30" height="42" xoffset="0" yoffset="17" xadvance="34" /><!-- ó --><char id="234" x="430" y="84" width="27" height="42" xoffset="0" yoffset="17" xadvance="31" /><!-- ê --><char id="233" x="430" y="127" width="27" height="42" xoffset="0" yoffset="17" xadvance="31" /><!-- é --><char id="228" x="458" y="211" width="25" height="40" xoffset="0" yoffset="19" xadvance="29" /><!-- ä --><char id="223" x="430" y="213" width="27" height="43" xoffset="0" yoffset="16" xadvance="31" /><!-- ß --><char id="246" x="430" y="43" width="30" height="40" xoffset="0" yoffset="19" xadvance="34" /><!-- ö --><char id="252" x="458" y="84" width="26" height="40" xoffset="0" yoffset="19" xadvance="30" /><!-- ü --><char id="241" x="430" y="455" width="27" height="41" xoffset="0" yoffset="18" xadvance="31" /><!-- ñ --><char id="161" x="487" y="0" width="9" height="41" xoffset="0" yoffset="29" xadvance="13" /><!-- ¡ --><char id="191" x="486" y="42" width="20" height="41" xoffset="0" yoffset="29" xadvance="24" /><!-- ¿ --><char id="200" x="460" y="347" width="24" height="49" xoffset="0" yoffset="10" xadvance="28" /><!-- È --><char id="195" x="262" y="256" width="35" height="49" xoffset="0" yoffset="10" xadvance="39" /><!-- Ã --><char id="350" x="459" y="402" width="26" height="52" xoffset="0" yoffset="18" xadvance="30" /><!-- Ş --><char id="220" x="398" y="192" width="31" height="49" xoffset="0" yoffset="10" xadvance="35" /><!-- Ü --><char id="351" x="486" y="476" width="21" height="41" xoffset="0" yoffset="29" xadvance="25" /><!-- ş --><char id="287" x="430" y="402" width="28" height="52" xoffset="0" yoffset="18" xadvance="32" /><!-- ğ --><char id="280" x="459" y="252" width="25" height="52" xoffset="0" yoffset="18" xadvance="29" /><!-- Ę --><char id="281" x="458" y="455" width="27" height="41" xoffset="0" yoffset="29" xadvance="31" /><!-- ę --><char id="261" x="436" y="0" width="27" height="41" xoffset="0" yoffset="29" xadvance="31" /><!-- ą --><char id="321" x="430" y="360" width="29" height="41" xoffset="0" yoffset="18" xadvance="33" /><!-- Ł --><char id="322" x="508" y="159" width="15" height="43" xoffset="0" yoffset="16" xadvance="19" /><!-- ł --><char id="324" x="430" y="170" width="27" height="42" xoffset="0" yoffset="17" xadvance="31" /><!-- ń --><char id="126" x="50" y="512" width="35" height="14" xoffset="0" yoffset="36" xadvance="39" /><!-- ~ --><char id="347" x="486" y="391" width="21" height="42" xoffset="0" yoffset="17" xadvance="25" /><!-- ś --><char id="1072" x="332" y="319" width="32" height="32" xoffset="0" yoffset="27" xadvance="36" /><!-- а --><char id="1073" x="263" y="94" width="34" height="44" xoffset="0" yoffset="15" xadvance="38" /><!-- б --><char id="1074" x="332" y="203" width="32" height="32" xoffset="0" yoffset="27" xadvance="36" /><!-- в --><char id="1075" x="430" y="497" width="26" height="32" xoffset="0" yoffset="27" xadvance="30" /><!-- г --><char id="1076" x="153" y="43" width="39" height="40" xoffset="0" yoffset="27" xadvance="43" /><!-- д --><char id="1077" x="227" y="94" width="34" height="32" xoffset="0" yoffset="27" xadvance="38" /><!-- е --><char id="1078" x="0" y="229" width="55" height="32" xoffset="0" yoffset="27" xadvance="59" /><!-- ж --><char id="1079" x="333" y="385" width="32" height="32" xoffset="0" yoffset="27" xadvance="36" /><!-- з --><char id="1080" x="333" y="492" width="32" height="32" xoffset="0" yoffset="27" xadvance="36" /><!-- и --><char id="1082" x="264" y="44" width="34" height="32" xoffset="0" yoffset="27" xadvance="38" /><!-- к --><char id="1083" x="271" y="0" width="34" height="32" xoffset="0" yoffset="27" xadvance="38" /><!-- л --><char id="1084" x="99" y="493" width="41" height="32" xoffset="0" yoffset="27" xadvance="45" /><!-- м --><char id="1085" x="333" y="33" width="32" height="32" xoffset="0" yoffset="27" xadvance="36" /><!-- н --><char id="1086" x="298" y="425" width="34" height="32" xoffset="0" yoffset="27" xadvance="38" /><!-- о --><char id="1087" x="333" y="352" width="32" height="32" xoffset="0" yoffset="27" xadvance="36" /><!-- п --><char id="1088" x="298" y="382" width="34" height="42" xoffset="0" yoffset="27" xadvance="38" /><!-- р --><char id="1089" x="193" y="50" width="33" height="32" xoffset="0" yoffset="27" xadvance="37" /><!-- с --><char id="1090" x="332" y="286" width="32" height="32" xoffset="0" yoffset="27" xadvance="36" /><!-- т --><char id="1091" x="262" y="348" width="34" height="42" xoffset="0" yoffset="27" xadvance="38" /><!-- у --><char id="1092" x="0" y="423" width="49" height="53" xoffset="0" yoffset="16" xadvance="53" /><!-- ф --><char id="1093" x="141" y="493" width="34" height="32" xoffset="0" yoffset="27" xadvance="38" /><!-- х --><char id="1094" x="225" y="171" width="36" height="40" xoffset="0" yoffset="27" xadvance="40" /><!-- ц --><char id="1095" x="366" y="74" width="31" height="32" xoffset="0" yoffset="27" xadvance="35" /><!-- ч --><char id="1096" x="50" y="479" width="48" height="32" xoffset="0" yoffset="27" xadvance="52" /><!-- ш --><char id="1097" x="0" y="306" width="51" height="40" xoffset="0" yoffset="27" xadvance="55" /><!-- щ --><char id="1100" x="366" y="149" width="31" height="32" xoffset="0" yoffset="27" xadvance="35" /><!-- ь --><char id="1099" x="99" y="372" width="43" height="32" xoffset="0" yoffset="27" xadvance="47" /><!-- ы --><char id="1101" x="306" y="0" width="33" height="32" xoffset="0" yoffset="27" xadvance="37" /><!-- э --><char id="1102" x="52" y="262" width="48" height="34" xoffset="0" yoffset="26" xadvance="52" /><!-- ю --><char id="1103" x="297" y="349" width="34" height="32" xoffset="0" yoffset="27" xadvance="38" /><!-- я --><char id="1052" x="0" y="477" width="49" height="43" xoffset="0" yoffset="16" xadvance="53" /><!-- М --><char id="1040" x="65" y="44" width="44" height="43" xoffset="0" yoffset="16" xadvance="48" /><!-- А --><char id="1043" x="299" y="33" width="33" height="43" xoffset="0" yoffset="16" xadvance="37" /><!-- Г --><char id="1047" x="185" y="228" width="38" height="43" xoffset="0" yoffset="16" xadvance="42" /><!-- З --><char id="1048" x="184" y="463" width="38" height="43" xoffset="0" yoffset="16" xadvance="42" /><!-- И --><char id="1053" x="188" y="127" width="37" height="43" xoffset="0" yoffset="16" xadvance="41" /><!-- Н --><char id="1051" x="142" y="449" width="41" height="43" xoffset="0" yoffset="16" xadvance="45" /><!-- Л --><char id="1062" x="100" y="297" width="42" height="53" xoffset="0" yoffset="16" xadvance="46" /><!-- Ц --><char id="1059" x="68" y="0" width="44" height="43" xoffset="0" yoffset="16" xadvance="48" /><!-- У --><char id="1050" x="105" y="88" width="42" height="43" xoffset="0" yoffset="16" xadvance="46" /><!-- К --><char id="1041" x="148" y="87" width="39" height="43" xoffset="0" yoffset="16" xadvance="43" /><!-- Б --><char id="1061" x="57" y="196" width="44" height="43" xoffset="0" yoffset="16" xadvance="48" /><!-- Х --><char id="1063" x="223" y="463" width="37" height="43" xoffset="0" yoffset="16" xadvance="41" /><!-- Ч --><char id="1044" x="57" y="142" width="46" height="53" xoffset="0" yoffset="16" xadvance="50" /><!-- Д --><char id="1042" x="184" y="419" width="39" height="43" xoffset="0" yoffset="16" xadvance="43" /><!-- В --><char id="1055" x="224" y="304" width="37" height="43" xoffset="0" yoffset="16" xadvance="41" /><!-- П --><char id="1057" x="99" y="449" width="42" height="43" xoffset="0" yoffset="16" xadvance="46" /><!-- С --><char id="1056" x="234" y="0" width="36" height="43" xoffset="0" yoffset="16" xadvance="40" /><!-- Р --><char id="1058" x="185" y="272" width="38" height="43" xoffset="0" yoffset="16" xadvance="42" /><!-- Т --><char id="1054" x="99" y="405" width="43" height="43" xoffset="0" yoffset="16" xadvance="47" /><!-- О --><char id="304" x="519" y="475" width="8" height="49" xoffset="0" yoffset="10" xadvance="12" /><!-- İ --><char id="1068" x="261" y="443" width="36" height="43" xoffset="0" yoffset="16" xadvance="40" /><!-- Ь --><char id="1046" x="0" y="0" width="67" height="43" xoffset="0" yoffset="16" xadvance="71" /><!-- Ж --><char id="1045" x="227" y="50" width="36" height="43" xoffset="0" yoffset="16" xadvance="40" /><!-- Е --><char id="224" x="185" y="316" width="38" height="46" xoffset="0" yoffset="13" xadvance="42" /><!-- à --><char id="236" x="484" y="125" width="23" height="45" xoffset="0" yoffset="13" xadvance="27" /><!-- ì --><char id="1060" x="50" y="435" width="48" height="43" xoffset="0" yoffset="16" xadvance="52" /><!-- Ф --><char id="1064" x="0" y="98" width="59" height="43" xoffset="0" yoffset="16" xadvance="63" /><!-- Ш --><char id="1065" x="0" y="44" width="64" height="53" xoffset="0" yoffset="16" xadvance="68" /><!-- Щ --><char id="1066" x="50" y="391" width="48" height="43" xoffset="0" yoffset="16" xadvance="52" /><!-- Ъ --><char id="1067" x="0" y="262" width="51" height="43" xoffset="0" yoffset="16" xadvance="55" /><!-- Ы --><char id="1069" x="101" y="240" width="42" height="43" xoffset="0" yoffset="16" xadvance="46" /><!-- Э --><char id="1070" x="0" y="142" width="56" height="43" xoffset="0" yoffset="16" xadvance="60" /><!-- Ю --><char id="1071" x="143" y="284" width="41" height="43" xoffset="0" yoffset="16" xadvance="45" /><!-- Я --><char id="32" x="0" y="0" width="0" height="0" xoffset="0" yoffset="0" xadvance="25" /><!--   --><char id="9" x="0" y="0" width="0" height="0" xoffset="0" yoffset="0" xadvance="200" /><!--   --></chars><kernings count="0"></kernings></font>',
    PR.BitmapFontLoader = function() {
        var t;
        if (window.DOMParser) {
            var e = new DOMParser;
            t = e.parseFromString(PR.FontString, "text/xml")
        } else t = new ActiveXObject("Microsoft.XMLDOM"), t.async = !1, t.loadXML(PR.FontString);
        var i = t;
        this.baseUrl + i.getElementsByTagName("page")[0].getAttribute("file");
        this.texture = GodStep.textures.Font.baseTexture;
        var s = {},
            n = i.getElementsByTagName("info")[0],
            r = i.getElementsByTagName("common")[0];
        s.font = n.getAttribute("face"), s.size = parseInt(n.getAttribute("size"), 10), s.lineHeight = parseInt(r.getAttribute("lineHeight"), 10), s.chars = {};
        for (var o = i.getElementsByTagName("char"), a = 0; a < o.length; a++) {
            var h = parseInt(o[a].getAttribute("id"), 10),
                l = new PIXI.Rectangle(parseInt(o[a].getAttribute("x"), 10), parseInt(o[a].getAttribute("y"), 10), parseInt(o[a].getAttribute("width"), 10), parseInt(o[a].getAttribute("height"), 10));
            s.chars[h] = {
                xOffset: parseInt(o[a].getAttribute("xoffset"), 10),
                yOffset: parseInt(o[a].getAttribute("yoffset"), 10) + 20,
                xAdvance: parseInt(o[a].getAttribute("xadvance"), 10),
                kerning: {},
                texture: PIXI.TextureCache[h] = new PIXI.Texture(this.texture, l)
            }
        }
        var d = i.getElementsByTagName("kerning");
        for (a = 0; a < d.length; a++) {
            var c = parseInt(d[a].getAttribute("first"), 10),
                u = parseInt(d[a].getAttribute("second"), 10),
                p = parseInt(d[a].getAttribute("amount"), 10);
            s.chars[u].kerning[c] = p
        }
        PIXI.BitmapText.fonts[s.font] = s
    }, extend(PR.BitmapFontLoader, PIXI.BitmapFontLoader), PR.Text = function(t, e, i, s, n, r) {
        PIXI.BitmapText.call(this, t, {
            font: parseInt(e) + "px Font",
            align: n || "left"
        }), this.x = i, this.y = s, r && (this.tint = r), this.updateText()
    }, extend(PR.Text, PIXI.BitmapText), GodStep.Slider = function(t, e, i, s, n, r, o, a) {
        GodStep.Frame.call(this, "Slider"), GodStep.IOverOut.call(this), GodStep.IDownUp.call(this), this.CW = 20, this.min = n || 0, this.max = r || 1, this.delta = this.max - this.min, this.W = t, this.H = e * i, this.type = s, this.isFloat = s > 0 && 1 > s, this.back = this.createGraphics("back"), this.cursor = this.createGraphics("cursor"), this.label = this.addFrame(new GodStep.Text(a || "", e * i, "Arial", "left", 0)), this.valueText = this.addFrame(new GodStep.Text(o || "", e * i, "Arial", "left", 0)), this.valueText.y = this.label.y = -this.H, GodStep.IDownUp.call(this.cursor), GodStep.addEvent(this, GodStep.FRAME_OUT, this.h_back), GodStep.addEvent(this, GodStep.FRAME_OVER, this.h_back), GodStep.addEvent(this, GodStep.FRAME_UP, this.h_cursor), GodStep.addEvent(this, GodStep.FRAME_MOVE, this.h_move), GodStep.addEvent(this.cursor, GodStep.FRAME_DOWN, this.h_cursor), this.setHitArea(0, 0, this.W, this.H), this.setHitArea(0, 0, this.CW, this.H, this.cursor), this.redrawBack(), this.redraw(), this.Value = o
    }, extend(GodStep.Slider, GodStep.Frame), pro.redrawBack = function() {
        this.cursor.IsDown || (this.back.clear(), this.rect(this.W, this.H, this.IsOver ? 16729156 : 16755370, .8, 0, 0, this.back))
    }, pro.redraw = function() {
        this.cursor.clear(), this.rect(this.CW, this.H, this.cursor.IsDown ? 65280 : 16777215, .8, 0, 0, this.cursor)
    }, pro.h_back = function(t) {
        t.target.redrawBack()
    }, pro.h_move = function(t) {
        var e, i, s = t.content.t;
        if (t.content.getLocalPosition) {
            var n = t.content.getLocalPosition(s);
            s.cursor.IsDown && (e = 1, s.cursor.position.x = Math.max(0, Math.min(n.x - s.cursor.downPoint.x, s.W - s.CW)), i = s.cursor.position.x / (s.W - s.CW) * s.delta + s.min - s.lastValue, s.value = s.lastValue + i * e, GodStep.dispatch(s, GodStep.FRAME_CHANGED), "int" == s.type ? s.value = parseInt(s.value) : s.isFloat ? s.value = parseInt(s.value / s.type) * s.type : s.value = parseInt(s.value / s.type) * s.type, s.valueText.setText(s.value), s.valueText.updateText(), s.valueText.x = s.W - s.valueText.width, s.updateCursor())
        }
    }, pro.h_cursor = function(t) {
        t.content.t instanceof GodStep.Slider ? (t.content.t.cursor.IsDown = !1, t.content.t.redraw(), t.content.t.lastValue = t.content.t.value) : (t.content.t.parent.redraw(), t.content.t.lastValue = t.content.t.value)
    }, pro.updateCursor = function() {
        this.cursor.x = (this.value - this.min) / this.delta * (this.W - this.CW)
    }, Object.defineProperty(GodStep.Slider.prototype, "IsDown", {
        set: function(t) {
            this.cursor.IsDown = !1, this.redraw(), this.redrawBack()
        }
    }), Object.defineProperty(GodStep.Slider.prototype, "Value", {
        get: function() {
            return this.value
        },
        set: function(t) {
            this.value = t, "int" == this.type ? this.value = parseInt(this.value) : this.isFloat ? this.value = parseInt(this.value / this.type) * this.type : this.value = parseInt(this.value / this.type) * this.type, this.lastValue = this.value, this.valueText.setText(this.value), this.valueText.updateText(), this.valueText.x = this.W - this.valueText.width, this.updateCursor()
        }
    }), PR.Dev = function(t) {
        GodStep.LFrame.call(this, t, "Dev"), GodStep.IDownUp.call(this, t.W, t.H), this.addFrame(this.back = new PR.Background(this)), this.addChild(this.container = new PIXI.DisplayObjectContainer), this.addChild(this.fieldContainer = new PIXI.DisplayObjectContainer), this.fieldContainer.addChild(this.field = new PR.Field(t, 9, 9, .85)), this.container.addChild(this.b_back = new Games.TextButton("back", 30 * this.s, 5645414, .1 * t.W, .05 * t.H)), this.container.addChild(this.b_test = new Games.TextButton("[test]", 30 * this.s, 5666662, .1 * t.W, .05 * t.H)), this.container.addChild(this.b_save = new Games.TextButton("save", 30 * this.s, 8922214, .1 * t.W, .05 * t.H)), this.container.addChild(this.b_add = new Games.TextButton("add row", 30 * this.s, 8952166, .1 * t.W, .05 * t.H)), this.container.addChild(this.b_del = new Games.TextButton("del row", 30 * this.s, 8952166, .1 * t.W, .05 * t.H)), addEvent(this, GodStep.FRAME_UP, this.h_mouse_up), addEvent(this.b_back, Games.ImgButton.CLICK, this.h_buttons), addEvent(this.b_test, Games.ImgButton.CLICK, this.h_buttons), addEvent(this.b_save, Games.ImgButton.CLICK, this.h_buttons), addEvent(this.b_add, Games.ImgButton.CLICK, this.h_buttons), addEvent(this.b_del, Games.ImgButton.CLICK, this.h_buttons), this.container.addChild(this.rowsText = new PR.Text("", 150 * this.s, .5 * this.W, .025 * -this.H, "left", 16777215));
        var e = this.s;
        this.standart = [];
        var i;
        this.s *= .6;
        for (var s = .072, n = 0; n < PR.Cell.STANDART.length; n++) i = new Games.ImgButton(PR.Cell.STANDART[n], this, .88 * this.W, this.H * s * n + .15 * this.H), this.container.addChild(i), this.standart.push(i), addEvent(i, Games.ImgButton.CLICK, this.h_colors), this.container.addChild(this["s_" + n] = new Games.ImgButton(PR.Cell.STANDART[n], this, .1 * this.W + .1 * n * this.W, .95 * this.H)), this.container.addChild(this["b_" + n] = new Games.ImgButton(PR.Cell.STANDART[n], this, .96 * this.W, this.H * s * n + .15 * this.H)), addEvent(this["b_" + n], Games.ImgButton.CLICK, this.h_buttons), addEvent(this["s_" + n], Games.ImgButton.CLICK, this.h_selectors), this["b_" + n].alpha = .2, this["s_" + n].alpha = .2;
        this.container.addChild(this.b_block = new Games.ImgButton("block", this, .91 * this.W, this.H * s * 5 + .15 * this.H)), this.container.addChild(this.b_delete = new Games.ImgButton("delete", this, .91 * this.W, this.H * s * 6 + .15 * this.H)), this.container.addChild(this.b_setka = new Games.ImgButton("dirt", this, .91 * this.W, this.H * s * 7 + .15 * this.H)), this.container.addChild(this.b_bonus = new Games.ImgButton("s_bonus", this, .91 * this.W, this.H * s * 8 + .15 * this.H)), this.container.addChild(this.b_bomb = new Games.ImgButton("bomb", this, .91 * this.W, this.H * s * 9 + .15 * this.H)), this.container.addChild(this.b_hero = new Games.ImgButton("hero", this, .91 * this.W, this.H * s * 10 + .15 * this.H)), this.container.addChild(this.b_hero2 = new Games.ImgButton("hero2", this, .91 * this.W, this.H * s * 11 + .15 * this.H)), this.s_0.alpha = 1;
        var r = .6 * t.W,
            o = 35;
        this.container.addChild(this.s_stepLimit = new GodStep.Slider(r, o, e, "int", 0, 150, 0, "steps target")), this.s_stepLimit.y = .82 * this.H, this.s_stepLimit.x = .04 * this.W, this.selector = 0, this.container.addChild(this.b_bonus_disable = new Games.ImgButton("s_bonus", this, .2 * this.W, .88 * this.H)), this.container.addChild(this.b_bomb_disable = new Games.ImgButton("bomb", this, .3 * this.W, .88 * this.H)), this.s = e, addEvent(this.b_bonus_disable, Games.ImgButton.CLICK, this.h_buttons), addEvent(this.b_bomb_disable, Games.ImgButton.CLICK, this.h_buttons), addEvent(this.b_setka, Games.ImgButton.CLICK, this.h_buttons), addEvent(this.b_delete, Games.ImgButton.CLICK, this.h_buttons), addEvent(this.b_block, Games.ImgButton.CLICK, this.h_buttons), addEvent(this.b_bonus, Games.ImgButton.CLICK, this.h_buttons), addEvent(this.b_bomb, Games.ImgButton.CLICK, this.h_buttons), addEvent(this.b_hero, Games.ImgButton.CLICK, this.h_buttons), addEvent(this.b_hero2, Games.ImgButton.CLICK, this.h_buttons), addEvent(this.field, Games.CELL_DOWN, this.h_cells), addEvent(this.field, GodStep.FRAME_DOWN, this.h_field), addEvent(this.field, GodStep.FRAME_MOVE, this.h_field), addEvent(this.field, GodStep.FRAME_UP, this.h_field), this.addChild(this.maska = new PIXI.Graphics), this.addChild(this.top = new PIXI.Graphics);
        var a = this.field.W * PR.CELLW_SCALE * this.field.scale.x,
            h = .005 * -this.W;
        this.maska.beginFill(0, 1), this.maska.drawRect(h, h, a - 2 * h, a - 2 * h), this.maska.endFill(), this.top.lineStyle(2, 0, 1), this.top.drawRect(h, h, a - 2 * h, a - 2 * h), this.top.endFill(), this.field.mask = this.maska, this.instrument = "", this.colors = [0, 1, 2, 3, 4]
    }, extend(PR.Dev, GodStep.Frame), pro.update = function() {
        this.visible
    }, pro.init = function() {
        this.visible = !0, this.updateRowText(), this.clearInstruments(), GodStep.ISEDITMODE = !0;
        var t = GodStep.TEST_DATA || PR.PetResque.instance.SETTINGS.levels[PR.LAST_LEVEL_SELECTED];
        t && (this.field.setData(t), this.s_stepLimit.Value = t.params.steps || 0), this.b_bonus_disable.alpha = this.field.isBonus ? 1 : .2, this.b_bomb_disable.alpha = this.field.isBomb ? 1 : .2;
        var e;
        for (e = 0; e < this.standart.length; e++) this.standart[e].alpha = .2;
        for (this.colors = [], e = 0; e < this.field.colors.length; e++) this.standart[this.field.colors[e]].alpha = 1, this.colors.push(this.field.colors[e]);
        GodStep.TEST_DATA = null
    }, pro.clearInstruments = function() {
        this.b_setka.alpha = this.b_delete.alpha = this.b_block.alpha = this.b_bonus.alpha = this.b_hero2.alpha = this.b_hero.alpha = this.b_bomb.alpha = .2;
        for (var t = 0; 5 > t; t++) this["b_" + t].alpha = .2;
        this.instrument = ""
    }, pro.updateRowText = function() {
        this.rowsText.setText("" + this.field.cellCountY), this.rowsText.updateText(), this.rowsText.x = .98 * this.W - this.rowsText.width
    }, pro.h_field = function(t) {
        var e, i = t.target;
        switch (t.type) {
            case GodStep.FRAME_DOWN:
                i.isFieldDown = !0, i.down = t.content.getLocalPosition(i.parent);
                break;
            case GodStep.FRAME_UP:
                i.isFieldDown = !1;
                break;
            case GodStep.FRAME_MOVE:
                i.isFieldDown && (e = t.content.getLocalPosition(i.parent.parent), i.parent.y = Math.min(0, Math.max((i.SH - i.H) * i.scale.x, e.y - i.down.y)))
        }
    }, pro.h_cells = function(t) {
        var e = t.target,
            i = e.parent.parent,
            s = t.content.data;
        switch (trace(s.xi + " " + s.yi), t.type) {
            case Games.CELL_DOWN:
                "" != i.instrument ? i.field.addCellObject(new PR.CellObject(i.instrument, i.s, s, null, null, i.selector + 1)) : s.clear()
        }
    }, pro.h_buttons = function(t) {
        var e, i = t.content.t,
            s = i.parent.parent,
            n = s.soul;
        switch (i) {
            case s.b_bonus_disable:
            case s.b_bomb_disable:
                i.alpha = 1 == i.alpha ? .2 : 1;
                break;
            case s.b_0:
            case s.b_1:
            case s.b_2:
            case s.b_3:
            case s.b_4:
            case s.b_bonus:
            case s.b_delete:
            case s.b_block:
            case s.b_bomb:
            case s.b_hero2:
            case s.b_hero:
            case s.b_setka:
                1 == i.alpha ? s.clearInstruments() : (s.clearInstruments(), s.instrument = i.imgName, i.alpha = 1), s.field.isBomb = 1 == s.b_bomb_disable.alpha, s.field.isBonus = 1 == s.b_bonus_disable.alpha;
                break;
            case s.b_del:
                s.field.delLine(), s.updateRowText();
                break;
            case s.b_add:
                s.field.addLine(), s.updateRowText();
                break;
            case s.b_test:
                GodStep.DEVMODE = !0, e = GodStep.TEST_DATA = s.field.getData(), e.params = {
                    colors: s.colors,
                    steps: s.s_stepLimit.Value,
                    isBomb: 1 == s.b_bomb_disable.alpha,
                    isBonus: 1 == s.b_bonus_disable.alpha
                }, n.screenTo([n.gameplay], s);
                break;
            case s.b_save:
                var r = PR.PetResque.instance.SETTINGS;
                PR.LAST_LEVEL_SELECTED, e = r.levels[PR.LAST_LEVEL_SELECTED] = s.field.getData(), e.params = {
                    colors: s.colors,
                    steps: s.s_stepLimit.Value,
                    isBomb: 1 == s.b_bomb_disable.alpha,
                    isBonus: 1 == s.b_bonus_disable.alpha
                }, s.soul.saveSettings();
                break;
            case s.b_back:
                GodStep.ISEDITMODE = !1, GodStep.DEVMODE = !1, n.screenTo([n.startmenu], s)
        }
    }, pro.h_mouse_up = function(t) {
        var e = t.content.target;
        if (e.standart) {
            for (var i = 0; i < e.standart.length; i++) e.standart[i].Scale = 1, e.standart[i].isDown = !1;
            e.s_stepLimit.IsDown = !1, e.b_bomb.isDown = e.b_bonus.isDown = e.b_add.isDown = e.b_del.isDown = e.b_test.isDown = e.b_back.isDown = e.b_save.isDown = !1, e.b_bomb.Scale = e.b_bonus.Scale = e.b_add.Scale = e.b_del.Scale = e.b_test.Scale = e.b_back.Scale = e.b_save.Scale = 1
        }
    }, pro.h_selectors = function(t) {
        for (var e, i = t.target, s = i.parent.parent, n = 0; 5 > n; n++) i == s["s_" + n] && (e = n), s["s_" + n].alpha = .2;
        s.selector = e, i.alpha = 1
    }, pro.h_colors = function(t) {
        var e = t.target;
        e.alpha = 1 == e.alpha ? .2 : 1;
        var i = e.parent.parent;
        i.colors = [];
        for (var s = 0; s < i.standart.length; s++) 1 == i.standart[s].alpha && i.colors.push(s)
    }, Object.defineProperty(pro, "Scale", {
        get: function() {
            return this.scale.x
        },
        set: function(t) {
            this.scale.x = this.scale.y = t, this.back.rescale(t), this.b_back.x = .1 * this.W, this.b_save.x = this.b_back.x + 1.1 * this.b_back.width, this.b_test.x = this.b_save.x + 1.1 * this.b_save.width, this.b_add.x = this.b_test.x + 1.4 * this.b_test.width, this.b_del.x = this.b_add.x + 1.05 * this.b_add.width, this.top.x = this.maska.x = this.field.x = .5 * (this.W - this.field.W * PR.CELLW_SCALE), this.container.y = -this.soul.DOH / 2 / t, this.top.y = this.maska.y = this.field.y = (.11 * this.soul.H - this.soul.DOH / 2) / t
        }
    }), PR.Field = function(t, e, i, s, n) {
        Games.CellField.call(this, e, i, .95 * t.W, .95 * t.W, PR.Cell, t.startS), this.cellObjects = [], this.soul = t, this.lines = [], this.heroes = [], this.scale.x = this.scale.y = s, this.SH = this.H, this.addChild(this.heroContainer = new PIXI.DisplayObjectContainer), this.isTutorial = !1, n && (n.topSprite.addChild(this.arm = new GodStep.MovieClip(["arm_1", "arm_2"], t.startS, .51 * this.W, .5 * -this.H, new PIXI.Point(0, 0))), this.arm.sy = .045 * this.H, this.arm.sx = .51 * this.W, this.arm.animTime = 20), this.colors = [0, 1, 2, 3, 4]
    }, extend(PR.Field, Games.CellField), pro.delLine = function() {
        if (this.cellCountY > 3) {
            for (var t = 0; t < this.cellCountX; t++) {
                var e = this.cells[(this.cellCountY - 1) * this.cellCountX + t];
                this.clearCell(e), this.cellContainer.removeChild(e), delEvent(e, Games.CELL_UP, this.h_cells), delEvent(e, Games.CELL_DOWN, this.h_cells)
            }
            this.cells.splice((this.cellCountY - 1) * this.cellCountX, this.cellCountX), this.cellsXY.splice(this.cellCountY - 1, 1), this.cellCountY--
        }
        this.H = e.y, this.setHitArea(0, 0, this.W, this.H)
    }, pro.addLine = function() {
        var t = this.W / this.cellCountX * PR.CELLW_SCALE,
            e = this.W / this.cellCountX * PR.CELLW_SCALE;
        this.cellsXY[this.cellCountY] = [];
        for (var i = 0, s = 0, n = 0; n < this.cellCountX; n++) {
            var r = new this.cellClass(n, this.cellCountY, t, e, this.startS);
            this.addCell(r, t, e), i = Math.max(r.x, i), s = Math.max(r.y, s), addEvent(r, Games.CELL_UP, this.h_cells), addEvent(r, Games.CELL_DOWN, this.h_cells)
        }
        this.cellCountY++, this.H = s + t, this.setHitArea(0, 0, this.W, this.H)
    }, pro.initTutorial = function(t) {
        var e = this.arm.parent;
        e.removeChild(this.arm), e.addChildAt(this.arm, e.children.length - 2), this.animPhase = 0, this.arm.visible = this.isTutorial = t && (0 == PR.LAST_LEVEL_SELECTED | 4 == PR.LAST_LEVEL_SELECTED || 11 == PR.LAST_LEVEL_SELECTED)
    }, pro.update = function() {
        if (this.isTutorial) {
            this.arm.animate();
            var t = 1,
                e = this.y + this.soul.DOH / 2 / this.soul.gameplay.scale.x;
            switch (PR.LAST_LEVEL_SELECTED) {
                case 0:
                    switch (this.arm.x += .3 * ((0 * this.cellW * this.scale.x + this.arm.sx) * t - this.arm.x), this.animPhase) {
                        case 0:
                            this.completeCell = new PIXI.Point(4, 2), this.arm.y += .3 * ((e + 2 * this.cellW * this.scale.x + this.arm.sy) * t - this.arm.y);
                            break;
                        case 1:
                            this.completeCell = new PIXI.Point(4, 5), this.arm.y += .3 * ((e + 5 * this.cellW * this.scale.x + this.arm.sy) * t - this.arm.y);
                            break;
                        case 2:
                            this.completeCell = new PIXI.Point(4, 8), this.arm.y += .3 * ((e + 8 * this.cellW * this.scale.x + this.arm.sy) * t - this.arm.y);
                            break;
                        case 3:
                            this.arm.visible = !1, this.completeCell = null
                    }
                    break;
                case 4:
                    switch (this.animPhase) {
                        case 0:
                            this.arm.x += .3 * ((0 * this.cellW * this.scale.x + this.arm.sx) * t - this.arm.x), this.completeCell = new PIXI.Point(0, 4), this.arm.y += .3 * ((e + 6 * this.cellW * this.scale.x + this.arm.sy) * t - this.arm.y);
                            break;
                        case 1:
                            this.arm.x += .3 * ((-4 * this.cellW * this.scale.x + this.arm.sx) * t - this.arm.x), this.completeCell = new PIXI.Point(0, 8), this.arm.y += .3 * ((e + 8 * this.cellW * this.scale.x + this.arm.sy) * t - this.arm.y);
                            break;
                        case 2:
                            this.arm.visible = !1, this.completeCell = null
                    }
                    break;
                case 11:
                    switch (this.animPhase) {
                        case 0:
                            this.arm.x += .3 * ((-3 * this.cellW * this.scale.x + this.arm.sx) * t - this.arm.x), this.completeCell = new PIXI.Point(1, 0), this.arm.y += .3 * ((e + 0 * this.cellW * this.scale.x + this.arm.sy) * t - this.arm.y);
                            break;
                        case 1:
                            this.arm.x += .3 * ((3 * this.cellW * this.scale.x + this.arm.sx) * t - this.arm.x), this.completeCell = new PIXI.Point(7, 3), this.arm.y += .3 * ((e + 3 * this.cellW * this.scale.x + this.arm.sy) * t - this.arm.y);
                            break;
                        case 2:
                            this.arm.visible = !1, this.completeCell = null
                    }
            }
        }
    }, pro.reskin = function(t) {
        for (var e = 1, i = 0; i < this.cells.length; i++) this.cells[i].img.setTexture("sq" + t + "_" + e), this.cells[i].v = e, e = 1 == e ? 2 : 1
    }, pro.initField = function(t, e, i, s) {
        var n = this.cellW = this.W / this.cellCountX * PR.CELLW_SCALE;
        Games.CellField.prototype.initField.call(this, t, e, n, n)
    }, pro.fill = function() {
        this.cells
    }, pro.clear = function() {
        for (; this.cellObjects.length;) this.delFrame(this.cellObjects[0].destroy()), this.cellObjects.splice(0, 1);
        for (var t = 0; t < this.cells.length; t++) this.cells[t].clear(), this.cells[t].Selected = !1
    }, pro.getRandomColors = function() {
        for (var t = [], e = [], i = 0; i < this.colors.length; i++) e.push(this.colors[i]);
        for (; e.length;) {
            var s = parseInt(Math.random() * e.length);
            t.push(e[s]), e.splice(s, 1)
        }
        return t
    }, pro.setData = function(t) {
        for (this.clear(), this.heroes = []; this.cellCountY != t.cellCountY;) this.cellCountY > t.cellCountY ? this.delLine() : this.addLine();
        var e = t.objects,
            i = t.params;
        this.colors = i.colors, this.isBonus = i.isBonus, this.isBomb = i.isBomb;
        var s;
        if (e) {
            GodStep.ISEDITMODE || (PR.Field.IS_FILL_DATA = !0);
            for (var n = this.getRandomColors(), r = 0; r < e.length; r++) {
                var o = e[r];
                o.id || (this.addCellObject(s = new PR.CellObject(o.n, this.soul.startS, this.cells[o.xi + o.yi * this.cellCountX], this.colors, n, o.s)), (s.isHero || s.isHeroTrap) && this.heroes.push(s))
            }
            PR.Field.IS_FILL_DATA = !1
        }
    }, pro.getData = function() {
        var t = {};
        t.cellCountX = this.cellCountX, t.cellCountY = this.cellCountY;
        for (var e = t.objects = [], i = 0; i < this.cellObjects.length; i++) {
            var s = this.cellObjects[i],
                n = {
                    n: s.typeName,
                    xi: s.cell.xi,
                    yi: s.cell.yi
                };
            s.selector && (n.s = s.selector), e.push(n)
        }
        return t
    }, pro.getCellByCoord = function(t, e) {
        var i, s = parseInt(t / this.cellW),
            n = parseInt(e / this.cellW),
            r = this.cellsXY[n];
        return r && (i = r = r[s]), i
    }, pro.delCellObject = function(t) {
        return t ? (this.delFrame(t), this.cellObjects.splice(this.cellObjects.indexOf(t), 1), (t.isHero || t.isHeroTrap) && this.heroes.splice(this.heroes.indexOf(t), 1), !0) : !1
    }, pro.addCellObject = function(t) {
        for (var e, i = !1, s = 0; s < this.cellObjects.length; s++) e = this.cellObjects[s], e.isObject && (!e.cell || !t.cell, e.cell.name == t.cell.name && (i = !0));
        i || (t.cell.pushGuest(t), this.cellObjects.push(t), "hero" == t.typeName ? this.addFrameAt(t, this.heroContainer, this.heroContainer.children.length) : this.addFrameAt(t, this.objectContainer, this.objectContainer.children.length))
    }, pro.getCellByPoint = function(t, e) {
        var i = this.cellW,
            s = i * (e ? .125 : 0),
            n = Math.max(0, Math.min(this.cellCountX - 1, parseInt((t.x - 2 * s) / i))),
            r = Math.max(0, Math.min(this.cellCountY - 1, parseInt((t.y - s) / i))),
            o = this.cellsXY[r][n];
        return GodStep.Point.distance(new PIXI.Point(o.x, o.y), new PIXI.Point(t.x, t.y)) < 1 * i ? o : null
    }, pro.clearCell = function(t) {}, pro.getEmptyCount = function() {
        for (var t = 0, e = 0; e < this.cells.length; e++) this.cells[e].isEmpty() && t++;
        return t
    }, pro.getDynamicCount = function() {
        for (var t = 0, e = 0; e < this.cells.length; e++) this.cells[e].isDynamic() && t++;
        return t
    }, pro.randomizeArea = function(t, e, i, s, n, r) {
        for (var o = [], a = 0; a < t.length; a++) null != r ? t[a] != r && o.push(t[a]) : o.push(t[a]);
        for (var h = this.cellsXY, l = [], d = e; e + s > d; d++)
            for (var c = i; i + n > c; c++) l.push(h[c][d]), h[c][d].replaceColored(PR.Cell.STANDART[o[parseInt(Math.random() * o.length)]]);
        return l
    }, pro.replaceCells = function(t, e) {
        var i = t.guests[0],
            s = e.guests[0];
        t.guests[0] = s, e.guests[0] = i, i.cell = e, s.cell = t, i.applyCellPostion(!0), s.applyCellPostion(!0)
    }, PR.Cell = function(t, e, i, s, n) {
        Games.Cell.call(this, t, e, i, s), this.xi = t, this.yi = e, this.guests = [];
        var r = (9 * e + t) % 2 == 0 ? "2" : "1";
        this.addChild(this.img = new Games.Img("cube_back_" + r, n * PR.CELL_SCALE_BACK * 1.18, .5 * this.W, .5 * this.H, .5)), this.addFrame(this.label = new PR.Text("100", 75 * n, 0, 0, "left", 1048576)), this.label.visible = !1
    }, PR.Cell.STANDART = ["red", "yellow", "blue", "purple", "green"], extend(PR.Cell, Games.Cell), pro.clear = function() {
        for (var t = 0; t < this.guests.length; t++) this.guests[t].parent.parent.delCellObject(this.guests[t]);
        this.guests = [], this.isSelected = !1
    }, pro.isEmpty = function() {
        return 0 == this.guests.length
    }, pro.isDynamic = function() {
        for (var t = 0; t < this.guests.length; t++)
            if (this.guests[t].isDynamic) return !0;
        return !1
    }, pro.getColored = function() {
        for (var t = 0; t < this.guests.length; t++)
            if (this.guests[t].isColored) return this.guests[t];
        return null
    }, pro.replaceColored = function(t) {
        var e = this.getColored();
        if (e && e.isColored) {
            var i = e.parent.parent;
            i.delCellObject(e), this.guests.splice(this.guests.indexOf(e), 1);
            var s;
            i.addCellObject(s = new PR.CellObject(t, e.S, this)), s.applyCellPostion(!0)
        }
    }, pro.replaceCellObjects = function(t) {
        var e = this.guests[0],
            i = t.guests[0];
        this.guests[0] = i, t.guests[0] = e, e.cell = t, i.cell = this, e.applyCellPostion(!0), i.applyCellPostion(!0)
    }, pro.isBusy = function() {
        for (var t = 0; t < this.guests.length; t++)
            if (this.guests[t].isObject) return !0;
        return !1
    }, pro.pushGuest = function(t) {
        this.guests.push(t)
    }, pro.delGuest = function(t) {
        this.guests.splice(this.guests.indexOf(t), 1)
    }, pro.setAsGuest = function(t) {
        "player" == t.name ? this.guests.push(t) : this.guests.splice(0, 0, t), t.cell.guests.splice(t.cell.guests.indexOf(t), 1), t.cell = this
    }, pro.setAsSelected = function(t) {
        for (var e, i = this.guests, s = i.length, n = 0; s > n; n++) e = i[n], e.isColored && (e.setAsSelected(t), this.isSelected = t);
        return this.isSelected
    }, pro.isEqual = function(t) {
        var e, i, s;
        for (i = 0; i < this.guests.length; i++) this.guests[i].isDynamic && (e = this.guests[i]);
        for (i = 0; i < t.guests.length; i++) t.guests[i].isDynamic && (s = t.guests[i]);
        return e.typeName == s.typeName
    }, pro.getBonus = function() {
        for (var t, e = 0; e < this.guests.length; e++) {
            if (t = this.guests[e], t.isBomb) return t;
            if (t.isBonus) return t
        }
        return null
    }, pro.removeDirt = function() {
        var t, e, i = this.guests;
        for (t = 0; t < i.length; t++)
            if (e = i[t], e.isDirt) return 0 == PR.JUST_DIRT_DELETE && (PR.JUST_DIRT_DELETE = 5, GodStep.playSound("dirt", 0, PR.SOUND)), e.isKill = !0, this.setCost(500), e;
        return null
    }, pro.getObject = function() {
        return this.guests[0]
    }, pro.animate = function() {
        this.label.visible && (this.label.alpha += .04 * (0 - this.label.alpha), this.label.y -= .007 * this.W, this.label.alpha < .05 && (this.label.visible = !1))
    }, pro.setCost = function(t) {
        this.cost = t, this.label.alpha = 1, this.label.visible = !0, this.label.setText(t + ""), this.label.updateText(), this.label.x = this.W / 2 - this.label.width / 2, this.label.y = this.label.height / 2
    }, Object.defineProperty(pro, "Selected", {
        get: function() {
            return isSelected
        },
        set: function(t) {
            var e = this.getObject();
            e && (e.scale.x = e.scale.y = t ? 1.1 : 1, e.applyCellPostion(!0), e.deltaXY = -this.W * (1 - e.scale.x) * .5, this.isSelected = t)
        }
    }), PR.CellObject = function(t, e, i, s, n, r) {
        var o = t;
        GodStep.Frame.call(this, o), this.typeName = t, this.S = e, this.startS = e * PR.CELL_SCALE, this.sy = 0;
        var a;
        this.deltaXY = 0;
        var h, l, d;
        switch (t) {
            case "s_bonus":
                switch (this.phase = Math.random(), this.isObject = !0, this.animTimer = 0, this.isDynamic = !0, this.isBonus = !0, this.selector = r, (isNaN(r) || void 0 == r) && (this.selector = 1), this.selector) {
                    case 1:
                        d = 1, l = "red";
                        break;
                    case 2:
                        d = 5, l = "yellow";
                        break;
                    case 3:
                        d = 4, l = "blue";
                        break;
                    case 4:
                        d = 3, l = "purple";
                        break;
                    case 5:
                        d = 2, l = "green"
                }
                if (!GodStep.ISEDITMODE && s) {
                    switch (l) {
                        case "red":
                            d = 0;
                            break;
                        case "yellow":
                            d = 1;
                            break;
                        case "blue":
                            d = 2;
                            break;
                        case "purple":
                            d = 3;
                            break;
                        case "green":
                            d = 4
                    }
                    switch (a = s.indexOf(d), n || trace(1), -1 == a && (a = 0), n[a]) {
                        case 0:
                            this.ctype = "red";
                            break;
                        case 1:
                            this.ctype = "yellow";
                            break;
                        case 2:
                            this.ctype = "blue";
                            break;
                        case 3:
                            this.ctype = "purple";
                            break;
                        case 4:
                            this.ctype = "green"
                    }
                    switch (this.ctype) {
                        case "red":
                            d = 1;
                            break;
                        case "yellow":
                            d = 5;
                            break;
                        case "blue":
                            d = 4;
                            break;
                        case "purple":
                            d = 3;
                            break;
                        case "green":
                            d = 2
                    }
                }
                this.addFrame(this.img = new Games.Img("b_" + d, this.S / PR.CELL_SCALE * PR.CELL_SCALE_BACK * .67, i.W / 2, i.H / 2, new PIXI.Point(.5, .44))), this.startS = this.img.scale.x;
                break;
            case "bomb":
                this.phase = Math.random(), this.isDynamic = !0, this.isObject = !0, this.animTimer = 0, this.isBomb = !0, this.addFrame(this.img = new GodStep.MovieClip(["bomb", "boom_1", "boom_2", "boom_3", "boom_4", "boom_5"], this.S / PR.CELL_SCALE * PR.CELL_SCALE_BACK * .95, i.W / 2, i.H / 2, new PIXI.Point(.5, .5))), this.startS = this.img.scale.x;
                break;
            case "hero2":
                switch (this.isDynamic = !0, this.isObject = !0, this.animTimer = 0, this.isColored = !0, this.isHeroTrap = !0, this.selector = r, (isNaN(r) || void 0 == r) && (this.selector = 1), this.selector) {
                    case 1:
                        d = 1, l = "red";
                        break;
                    case 2:
                        d = 5, l = "yellow";
                        break;
                    case 3:
                        d = 4, l = "blue";
                        break;
                    case 4:
                        d = 3, l = "purple";
                        break;
                    case 5:
                        d = 2, l = "green"
                }
                if (this.ctype = l, !GodStep.ISEDITMODE && s) {
                    switch (l) {
                        case "red":
                            d = 0;
                            break;
                        case "yellow":
                            d = 1;
                            break;
                        case "blue":
                            d = 2;
                            break;
                        case "purple":
                            d = 3;
                            break;
                        case "green":
                            d = 4
                    }
                    switch (a = s.indexOf(d), -1 == a && (a = 0), n[a]) {
                        case 0:
                            this.ctype = "red";
                            break;
                        case 1:
                            this.ctype = "yellow";
                            break;
                        case 2:
                            this.ctype = "blue";
                            break;
                        case 3:
                            this.ctype = "purple";
                            break;
                        case 4:
                            this.ctype = "green"
                    }
                    switch (this.ctype) {
                        case "red":
                            d = 1;
                            break;
                        case "yellow":
                            d = 5;
                            break;
                        case "blue":
                            d = 4;
                            break;
                        case "purple":
                            d = 3;
                            break;
                        case "green":
                            d = 2
                    }
                    this.t = d
                }
                this.addFrame(this.img = new GodStep.MovieClip(["cage_" + d, "cage_" + d + "_1", "cage_" + d + "_2", "cage_" + d + "_2", "cage_" + d + "_3", "cage_" + d + "_4", "cage_" + d + "_5"], this.S / PR.CELL_SCALE * PR.CELL_SCALE_BACK * .95, i.W / 2, i.H / 2, new PIXI.Point(.5, .5)));
                break;
            case "hero":
                this.phaseAnim = 0, this.isDynamic = !0, this.isObject = !0, this.animTimer = 0, this.isHero = !0;
                var c = r;
                (isNaN(r) || void 0 == r) && (c = 1), c = PR.GamePlay.HERO_RANDOMS[PR.CellObject.HERO_LAST_TYPE] + 1, PR.CellObject.HERO_LAST_TYPE++, PR.CellObject.HERO_LAST_TYPE == PR.GamePlay.HERO_RANDOMS.length && (PR.CellObject.HERO_LAST_TYPE = 0), this.selector = c, this.addFrame(this.img = new GodStep.MovieClip(["pers_" + c + "_1", "pers_" + c + "_3", "pers_" + c + "_1", "pers_" + c + "_3", "pers_" + c + "_2", "pers_" + c + "_2", "pers_win_" + c], this.S / PR.CELL_SCALE * PR.CELL_SCALE_BACK * .95, i.W / 2, i.H / 2, new PIXI.Point(.5, .5))), this.addFrame(this.dis = new GodStep.MovieClip(["disappear_1", "disappear_2", "disappear_3", "disappear_4", "disappear_5"], this.S / PR.CELL_SCALE * PR.CELL_SCALE_BACK * .95, i.W / 2, i.H / 2, new PIXI.Point(.5, .5))), this.dis.visible = !1, this.img.animTime = 50, this.img.animTimer = parseInt(40 * Math.random()), this.img.setToFrame(parseInt(Math.random() * this.img.totalFrames));
                break;
            case "dirt":
                if (this.isDynamic = !0, this.animTimer = 0, this.isObject = !0, this.isColored = !0, this.isDirt = !0, GodStep.ISEDITMODE) this.addFrame(this.img = new Games.Img(t, this.S / PR.CELL_SCALE * PR.CELL_SCALE_BACK * .7, i.W / 2, i.H / 2, new PIXI.Point(.5, .44)));
                else {
                    switch (h = s[parseInt(Math.random() * s.length)], l = PR.Cell.STANDART[h], this.ctype = l, l) {
                        case "red":
                            d = 1;
                            break;
                        case "green":
                            d = 2;
                            break;
                        case "purple":
                            d = 3;
                            break;
                        case "blue":
                            d = 4;
                            break;
                        case "yellow":
                            d = 5
                    }
                    this.t = d, this.addFrame(this.img = new GodStep.MovieClip(["cube_" + d, "cube_" + d + "_1", "cube_" + d + "_2", "cube_" + d + "_3", "cube_" + d + "_4", "cube_" + d + "_5"], this.S / PR.CELL_SCALE * PR.CELL_SCALE_BACK * .95, i.W / 2, i.H / 2, new PIXI.Point(.5, .5))), this.addFrame(this.dirt = new GodStep.MovieClip(["net_1", "net_2", "net_3", "net_4", "net_5"], this.S / PR.CELL_SCALE * PR.CELL_SCALE_BACK * .95, i.W / 2, i.H / 2, new PIXI.Point(.5, .5)))
                }
                break;
            case "block":
                this.isGround = !0, this.isBlock = !0, this.isObject = !0, this.addFrame(this.img = new Games.Img(t, this.S / PR.CELL_SCALE * PR.CELL_SCALE_BACK, i.W / 2, i.H / 2, new PIXI.Point(.5, .44)));
                break;
            case "delete":
                this.isBlock = !0, this.isGround = !0, this.isObject = !0;
                var u = (9 * i.yi + i.xi) % 2 == 0 ? "2" : "1";
                this.addFrame(this.img = new Games.Img("cube_lock_" + u, this.S / PR.CELL_SCALE * PR.CELL_SCALE_BACK, i.W / 2, i.H / 2, new PIXI.Point(.5, .5)));
                break;
            case "red":
            case "green":
            case "purple":
            case "blue":
            case "yellow":
                if (PR.Field.IS_FILL_DATA) {
                    switch (t) {
                        case "red":
                            d = 0;
                            break;
                        case "yellow":
                            d = 1;
                            break;
                        case "blue":
                            d = 2;
                            break;
                        case "purple":
                            d = 3;
                            break;
                        case "green":
                            d = 4
                    }
                    switch (a = s.indexOf(d), -1 == a && (a = 0), n[a]) {
                        case 0:
                            this.ctype = "red";
                            break;
                        case 1:
                            this.ctype = "yellow";
                            break;
                        case 2:
                            this.ctype = "blue";
                            break;
                        case 3:
                            this.ctype = "purple";
                            break;
                        case 4:
                            this.ctype = "green"
                    }
                } else this.ctype = t;
                switch (this.ctype) {
                    case "red":
                        d = 1;
                        break;
                    case "green":
                        d = 2;
                        break;
                    case "purple":
                        d = 3;
                        break;
                    case "blue":
                        d = 4;
                        break;
                    case "yellow":
                        d = 5
                }
                this.animTimer = parseInt(55 * Math.random()), this.isColored = !0, this.isObject = !0, this.isDynamic = !0, this.t = d, this.addFrame(this.img = new GodStep.MovieClip(["cube_" + d, "cube_" + d + "_1", "cube_" + d + "_2", "cube_" + d + "_2", "cube_" + d + "_3", "cube_" + d + "_4", "cube_" + d + "_5"], this.S / PR.CELL_SCALE * PR.CELL_SCALE_BACK * .95, i.W / 2, i.H / 2, new PIXI.Point(.5, .5))), this.img.animTime = 4
        }
        this.startS = this.img.scale.x, this.cell = i, this.applyCellPostion(!0)
    }, extend(PR.CellObject, GodStep.Frame), PR.CellObject.HERO_LAST_TYPE = 0, PR.CellObject.COLORS = [255, 16711680, 65280, 16777096, 16711935], pro.move = function() {
        if (this.img) {
            var t = this.img.parent.parent,
                e = t.parent,
                i = e.parent.parent,
                s = i.killed;
            if (this.isKilled)
                if (i.moveDownTimer = 10, this.isHero) 30 == this.phaseAnim++ ? (this.phaseAnim--, this.dis.visible = !0, this.dis.animate(), this.img.setToFrame(this.img.totalFrames - 1), 2 == this.dis.currentFrame && 0 == this.dis.cycle && (this.img.visible = !1), 0 == this.dis.currentFrame && this.dis.cycle > 0 && (e.delCellObject(this.destroy()), s.splice(s.indexOf(this), 1), i.heroLabel.setText(i.heroesCount - e.heroes.length + "/" + i.heroesCount), 0 == e.heroes.length && i.win(), i.heroLabel.scale.x = i.heroLabel.scale.y *= 1.2)) : (this.isSounded || (this.isSounded = !0, GodStep.playSound("rescue", 0, PR.SOUND)), this.img.setToFrame(this.img.totalFrames - 1));
                else if (this.isHeroTrap) {
                if (this.img.animate(), 0 == this.img.currentFrame) {
                    e.delCellObject(this.destroy()), s.splice(s.indexOf(this), 1), GodStep.playSound("cageout", 0, PR.SOUND);
                    var n = this.cell,
                        r = e.cellsXY;
                    e.addCellObject(i.hero = new PR.CellObject("hero", i.s, n, i.colors, null, this.selector)), n.delGuest(i.hero), i.hero.cell = null, i.field.heroes.push(i.hero);
                    for (var o = n.yi; o >= 0; o--) {
                        var a = r[o][n.xi].getObject();
                        if (a && a.isGround) return i.hero.targetCell = r[o + 1][n.xi], i.hero.setCell(r[o + 1][n.xi]), void(i.hero = null)
                    }
                    i.hero.targetCell || (i.hero.targetCell = r[0][n.xi], i.hero.setCell(r[0][n.xi]))
                }
            } else this.dirt ? (this.dirt.animate(), 0 == this.dirt.currentFrame && (this.removeChild(this.dirt), this.dirt = null, this.isDirt = !1, this.isKilled = !1, this.typeName = this.ctype, s.splice(s.indexOf(this), 1))) : this.img && (this.img.animate(), 0 == this.img.currentFrame && (e.delCellObject(this.destroy()), s.splice(s.indexOf(this), 1)))
        }
    }, pro.update = function() {
        this.isBomb || this.isBonus ? (this.phase += .075, this.img.scale.x = this.img.scale.y += .1 * (this.startS + .05 * Math.sin(this.phase) - this.img.scale.y)) : this.isHero && (this.img.animate(), this.img.currentFrame == this.img.totalFrames - 1 && this.img.setToFrame(0))
    }, pro.setAsBonus = function() {
        this.isBonus = !0, this.bonusanim = 0, this.isVertical = Math.random() > .5, this.isVertical ? this.addChildAt(this.bonus = new PR.MovieClip(["bonus_2_1", "bonus_2_2", "bonus_2_3", "bonus_2_4", "bonus_2_5", "bonus_2_6"], this.startS * GodStep.IMAGE_RESOLUTION, this.cell.W / 2, this.cell.H / 2, .5), 0) : this.addChildAt(this.bonus = new PR.MovieClip(["bonus_1_1", "bonus_1_2", "bonus_1_3", "bonus_1_4", "bonus_1_5", "bonus_1_6"], this.startS * GodStep.IMAGE_RESOLUTION, this.cell.W / 2, this.cell.H / 2, .5), 0);
        var t = this.parent;
        t.removeChild(this), t.addChild(this)
    }, pro.removeBonus = function() {
        this.bonus && (this.removeChild(this.bonus), this.bonus = null)
    }, pro.setCell = function(t) {
        this.cell && this.cell.delGuest(this), this.cell = t, t.pushGuest(this), this.applyCellPostion(!1)
    }, pro.applyCellPostion = function(t) {
        this.nextPlace = new PIXI.Point(this.cell.x, this.cell.y), t && (this.Place = this.nextPlace)
    }, pro.destroy = function() {
        return this.cell.guests.splice(this.cell.guests.indexOf(this), 1), this.removeChild(this.img), this.label && this.removeChild(this.label), this.bonus && this.removeChild(this.bonus), this.dirt && this.removeChild(this.dirt), this.dis && this.removeChild(this.dis), this.img1 && (this.removeChild(this.img1), this.img1 = null), this.img = null, this
    }, pro.setAsSelected = function(t) {
        this.animTimer = 0, this.isColorSelected = t, this.img.setToFrame(t ? 3 : 0)
    }, PR.Pause = function(t) {
        GodStep.LFrame.call(this, t, "Pause"), this.addChild(this.back = new PR.Background(this, "back_pause")), this.addChild(this.top = new PIXI.DisplayObjectContainer), this.top.addChild(this.field_button = new Games.Img("field_button", this.s, .5 * this.W, .4 * this.H, .5)), this.top.addChild(this.label = new PR.Text(window.famobi.__("PAUSE"), 170 * this.s, .33 * this.W, .01 * this.H, "center", 16777215)), this.top.addChild(this.b_menu = new Games.ImgButton("b_menu", this, .5 * this.W, .4 * this.H, .5)), this.top.addChild(this.b_back = new Games.ImgButton("b_back", this, .25 * this.W, .4 * this.H, .5)), this.top.addChild(this.b_replay = new Games.ImgButton("b_replay", this, .75 * this.W, .4 * this.H, .5)), this.top.addChild(this.pers1 = new GodStep.MovieClip(["pers_1", "pers_1_0"], this.s, .15 * this.W, .15 * this.H, .5)), this.top.addChild(this.pers2 = new GodStep.MovieClip(["pers_2", "pers_2_0"], this.s, .85 * this.W, .15 * this.H, .5)), this.top.addChild(this.b_music = new Games.ImgButton("slider_on_pause", this, .6 * this.W, .66 * this.H)),
            this.top.addChild(this.b_sound = new Games.ImgButton("slider_on_pause", this, .6 * this.W, .84 * this.H)), this.top.addChild(this.b_music_img = new Games.Img("b_music", this.s, .25 * this.W, .66 * this.H, .5)), this.top.addChild(this.b_sound_img = new Games.Img("b_sound", this.s, .25 * this.W, .84 * this.H, .5)), this.b_music.scaleble = this.b_sound.scaleble = !1, this.b_music.addChild(this.b_music.lab = new PR.Text(window.famobi.__("ON"), 140 * this.s, .08 * -this.W, .075 * -this.H, "center", 32450)), this.b_sound.addChild(this.b_sound.lab = new PR.Text(window.famobi.__("ON"), 140 * this.s, .08 * -this.W, .075 * -this.H, "center", 32450)), this.pers1.animTime = 100, this.pers2.animTime = 111, this.pers2.animTimer = 66, addEvent(this.b_back, Games.ImgButton.CLICK, this.h_buttons), addEvent(this.b_menu, Games.ImgButton.CLICK, this.h_buttons), addEvent(this.b_replay, Games.ImgButton.CLICK, this.h_buttons), addEvent(this.b_music, Games.ImgButton.CLICK, this.h_buttons), addEvent(this.b_sound, Games.ImgButton.CLICK, this.h_buttons)
    }, extend(PR.Pause, GodStep.LFrame), pro.update = function() {
        this.visible && (this.pers1.animate(), this.pers2.animate())
    }, pro.init = function() {
        this.visible = !0;
        var t = this;
        PR.SOUND ? (t.b_sound.setTexture("slider_on_pause"), t.b_sound.lab.tint = 37600, t.b_sound.lab.setText(window.famobi.__("ON"))) : (t.b_sound.setTexture("slider_off_pause"), t.b_sound.lab.tint = 1190707, t.b_sound.lab.setText(window.famobi.__("OFF"))), PR.MUSIC ? (t.b_music.setTexture("slider_on_pause"), t.b_music.lab.tint = 37600, t.b_music.lab.setText(window.famobi.__("ON"))) : (t.b_music.setTexture("slider_off_pause"), t.b_music.lab.tint = 1190707, t.b_music.lab.setText(window.famobi.__("OFF"))), "undefined" != typeof t.b_tutorial && (PR.TUTORIAL ? (t.b_tutorial.setTexture("tutorial_on"), t.b_tutorial.lab.tint = 37600, t.b_tutorial.lab.setTexture("pers_2o"), t.b_tutorial.lab.updateText()) : (t.b_tutorial.setTexture("tutorial_off"), t.b_tutorial.lab.tint = 2844024, t.b_tutorial.lab.setTexture("pers_1o"), t.b_tutorial.lab.updateText()))
    }, pro.h_buttons = function(t) {
        var e = t.content.t,
            i = e.parent.parent;
        switch (GodStep.playSound("button", 0, PR.SOUND), e) {
            case i.b_sound:
                PR.SOUND ? (i.b_sound.setTexture("slider_off_pause"), i.b_sound.lab.tint = 1190707, i.b_sound.lab.setText(window.famobi.__("OFF"))) : (i.b_sound.setTexture("slider_on_pause"), i.b_sound.lab.tint = 37600, i.b_sound.lab.setText(window.famobi.__("ON"))), i.b_sound.lab.updateText(), PR.SOUND = !PR.SOUND, i.soul.savePlayer();
                break;
            case i.b_music:
                PR.MUSIC ? (i.b_music.setTexture("slider_off_pause"), i.b_music.lab.tint = 1190707, i.b_music.lab.setText(window.famobi.__("OFF")), GodStep.volumeSound("theme", !PR.MUSIC)) : (i.b_music.setTexture("slider_on_pause"), i.b_music.lab.tint = 37600, i.b_music.lab.setText(window.famobi.__("ON")), GodStep.volumeSound("theme", !PR.MUSIC), GodStep.playSound("theme", -1, !PR.MUSIC)), i.b_music.lab.updateText(), PR.MUSIC = !PR.MUSIC, i.soul.savePlayer();
                break;
            case i.b_menu:
                window.famobi.showAd(function() {
                    i.parent.soul.screenTo([i.parent.soul.levelselect], i.parent)
                });
                break;
            case i.b_replay:
                window.famobi.showAd(function() {
                    i.parent.soul.screenTo([i.parent.soul.gameplay], i.parent)
                });
                break;
            case i.b_back:
                window.famobi.showAd(function() {
                    i.visible = !1
                })
        }
    }, Object.defineProperty(pro, "Scale", {
        get: function() {
            return this.scale.x
        },
        set: function(t) {
            this.soul;
            this.back.rescale(t), this.back.y = 0, this.scale.x = this.scale.y = 1
        }
    }), PR.StartMenu = function(t) {
        GodStep.LFrame.call(this, t, "StartMenu"), GodStep.IDownUp.call(this, t.SW, t.SH), this.addChild(this.back = new PR.Background(this, "back_menu")), this.addChild(this.title = new Games.Img("logo", this.s, .5 * this.W, .16 * this.H, new PIXI.Point(.5, 0))), this.title.phase = 0, this.addChild(this.cube_2 = new Games.Img("cube_2s", this.s, .61 * this.W, .41 * this.H, .5)), this.addChild(this.cube_1 = new Games.Img("cube_1s", this.s, .11 * this.W, .35 * this.H, .5)), this.addChild(this.footer = new PIXI.DisplayObjectContainer), this.footer.addChild(this.down = new Games.Img("down", this.s, .5 * this.W, 0, new PIXI.Point(.5, 1))), this.footer.addChild(this.pers_1 = new GodStep.MovieClip(["pers_m_1", "pers_m_1_0"], this.s, .25 * this.W, .18 * -this.H, new PIXI.Point(.5, 1))), this.footer.addChild(this.pers_2 = new GodStep.MovieClip(["pers_m_2", "pers_m_2_0"], this.s, .75 * this.W, .21 * -this.H, new PIXI.Point(.5, 1))), this.footer.addChild(this.field = new Games.Img("field_button_m", this.s, .5 * this.W, .03 * -this.H, new PIXI.Point(.5, 1))), this.footer.addChild(this.b_play = new Games.ImgButton("b_play", this, .5 * this.W, .19 * -this.H)), this.b_play.phase = 0, this.footer.addChild(this.b_more = new Games.ImgButton("More_Games600x253_onWhite", this, .2 * this.W, .11 * -this.H)), this.footer.addChild(this.b_settings = new Games.ImgButton("b_options", this, .76 * this.W, .11 * -this.H)), this.pers_1.animTime = 100, this.pers_2.animTime = 129, this.pers_2.animTimer = 55, this.footer.addChild(this.b_dev = new Games.TextButton("dev", 33 * this.s, 262562816, .9 * this.W, .55 * -this.H)), this.footer.addChild(this.maska = new PIXI.Graphics), this.field.mask = this.maska, this.maska.y = this.field.y - this.field.height, this.maska.beginFill(0, 1), this.maska.drawRect(0, 0, this.field.width, 2 * this.field.height), this.maska.endFill(), this.b_dev.visible = !1, addEvent(this.b_dev, Games.ImgButton.CLICK, this.h_buttons), addEvent(this.b_play, Games.ImgButton.CLICK, this.h_buttons), addEvent(this.b_settings, Games.ImgButton.CLICK, this.h_buttons), addEvent(this.b_more, Games.ImgButton.CLICK, this.h_buttons)
    }, extend(PR.StartMenu, GodStep.LFrame), pro.init = function() {
        this.b_play.phase = 0, this.title.phase = 0, this.b_play.scale.x = this.b_play.scale.y = this.b_settings.scale.x = this.b_settings.scale.y = 0, this.b_more.scale.x = this.b_more.scale.y = 0, this.visible = !0, this.field.x = 2 * this.W, this.b_play.y = 3.5 * this.soul.OH, this.b_more.y = 2 * this.soul.OH, this.b_more.y = 2 * this.soul.OH, this.b_settings.y = 2.7 * this.soul.OH
    }, pro.update = function() {
        if (this.visible) {
            this.pers_1.animate(), this.pers_2.animate();
            var t = this.soul,
                e = this.scale.x;
            this.b_play.scale.x = this.b_play.scale.y += .03 * (1 - this.b_play.scale.x), this.b_settings.scale.x = this.b_settings.scale.y += .07 * (1 - this.b_settings.scale.x), this.b_more.scale.x = this.b_more.scale.y += .05 * (.7 - this.b_more.scale.x), this.title.phase += .025, this.b_play.phase += .045, this.title.y += .3 * ((.03 * t.OH - t.DOH / 2) / e + Math.sin(this.title.phase) * t.H * .01 - this.title.y), this.b_play.y += Math.max(.1 * -this.W, .3 * (.19 * -this.H + Math.sin(this.b_play.phase) * t.H * .01 - this.b_play.y)), this.b_more.y += Math.max(.1 * -this.W, .3 * (.11 * -this.H - this.b_more.y)), this.b_settings.y += Math.max(.1 * -this.W, .3 * (.11 * -this.H - this.b_settings.y)), this.field.x += Math.max(.1 * -this.W, .3 * (.5 * this.W - this.field.x))
        }
    }, pro.h_buttons = function(t) {
        var e = t.content.t,
            i = e.parent.parent,
            s = i.soul;
        switch (GodStep.playSound("button", 0, PR.SOUND), e) {
            case i.b_dev:
                PR.DEVMODE = !0, s.screenTo([s.levelselect], i);
                break;
            case i.b_settings:
                s.screenTo([s.settings], i);
                break;
            case i.b_more:
                window.famobi.moreGamesLink();
                break;
            case i.b_play:
                PR.DEVMODE = !1, s.screenTo([s.levelselect], i)
        }
    }, Object.defineProperty(pro, "Scale", {
        get: function() {
            return this.scale.x
        },
        set: function(t) {
            var e = this.soul;
            this.scale.x = this.scale.y = t, this.back.rescale(t), this.footer.y = (e.OH - e.DOH / 2) / t, this.title.y = (.03 * e.OH - e.DOH / 2) / t
        }
    }), PR.LevelSelect = function(t) {
        this.soul = t;
        this.startS = t.startS;
        GodStep.LFrame.call(this, t, "LevelSelect"), GodStep.IDownUp.call(this, t.W, t.H), this.addChild(this.back = new PR.Background(this, "back_levels")), this.addChild(this.maska = new PIXI.Graphics), this.addChild(this.container = new GodStep.Frame("Container", t.W, t.H)), this.addChild(this.top = new GodStep.Frame("top", t.W, .2 * t.H)), this.top.addChild(this.label = new PR.Text(window.famobi.__("LEVELS"), 170 * this.s, .3 * this.W, .01 * this.H, "center", 16777215)), GodStep.IDownUp.call(this.container, this.soul.W, this.soul.H), this.top.addChild(this.b_back = new Games.ImgButton("b_back", this, .15 * this.W, .1 * this.H)), this.top.addChild(this.pers = new GodStep.MovieClip(["pers_l", "pers_l1", "pers_l"], this.s, .85 * this.W, .15 * this.H, .5)), this.pers.animTime = 110, addEvent(this.b_back, Games.ImgButton.CLICK, this.h_buttons), this.visible = !1, this.levels = [], this.container.MY = this.container.y = .25 * t.H, this.maska.beginFill(0, .1), this.maska.drawRect(0, this.container.y, this.W, this.H), this.container.mask = this.maska, addEvent(this.container, GodStep.FRAME_MOVE, this.h_container), addEvent(this.container, GodStep.FRAME_DOWN, this.h_container), addEvent(this, GodStep.FRAME_UP, this.h_mouse)
    }, extend(PR.LevelSelect, GodStep.LFrame), pro.h_m = function(t) {
        trace(t)
    }, pro.init = function(t) {
        this.visible = !0, GodStep.volumeSound("theme", 0);
        var e = t || PR.PetResque.instance.loadSettings();
        for (GodStep.LoadLocal(this.soul.PLAYER_SLOT) || {
                count: 0
            }; this.levels.length;) this.container.removeChild(this.levels[0].destroy()), this.levels.splice(0, 1);
        PR.LEVELS = this.levels = [];
        for (var i, s, n, r = this.startS, o = this.W / 4.6, a = 0, h = e.levels, l = PR.PetResque.instance.PLAYER.levels, d = !1, c = 0; c < h.length; c++) {
            s = parseInt(c / 4), i = c - 4 * s;
            var u = new PR.LevButton("lock", r, i * o + .82 * o, s * o * .95 + o / 2, "" + (c + 1), 160 * r, .002 * this.W, .058 * this.H, 16726853);
            a = Math.max(a, u.y + u.H / 2), this.container.addChild(u), u.ID = c, u.isDisabled = !0, l.length && (1 == l[c][0] ? (u.isDisabled = !1, u.setAsComplete(), n = u) : d || (d = !0, u.isDisabled = !1, u.setAsActive())), this.levels.push(u), u.levelData = h[c], addEvent(u, Games.ImgButton.CLICK, this.h_levels)
        }
        if (null == n && (this.levels[0].isDisabled = !1, this.levels[0].setAsActive()), this.newLevel && (this.container.addChild(this.newLevel.destroy()), this.newLevel = null), PR.DEVMODE) {
            this.b_loadDef || (this.top.addChild(this.b_loadDef = new Games.TextButton("Load Default", 35 * r, 5645414, .5 * this.soul.W, .05 * this.soul.H)), addEvent(this.b_loadDef, Games.ImgButton.CLICK, this.h_buttons)), this.b_loadDef.visible = !0, this.b_loadDef.y = (-this.soul.DOH / 2 + .07 * this.soul.H) / this.scale.x, s = parseInt(this.levels.length / 4), i = this.levels.length - 4 * s;
            var p = this.newLevel = new Games.TextButton("add", 60 * r, 5592405, i * o + o / 2, s * o);
            p.ID = this.levels.length, addEvent(p, GodStep.FRAME_DOWN, this.h_newLevels), this.container.addChild(p)
        } else this.b_loadDef && (this.b_loadDef.visible = !1);
        this.container.setHitArea(0, 0, this.W, a), this.container.MH = a + .1 * this.H, this.container.LH = u ? u.H : 0
    }, pro.update = function() {
        this.pers.animate()
    }, pro.h_levels = function(t) {
        var e = t.target,
            i = e.parent.parent,
            s = e.y + e.parent.y + i.soul.DOH / 2;
        if (!(s < .25 * i.H)) {
            var n = i.soul;
            switch (t.type) {
                case Games.ImgButton.CLICK:
                    GodStep.playSound("button", 0, PR.SOUND), PR.LAST_LEVEL_SELECTED = e.ID, PR.LAST_LEVEL_DATA = e.levelData, PR.DEVMODE ? n.screenTo([n.dev], i) : e.isDisabled || n.screenTo([n.gameplay], i)
            }
        }
    }, pro.h_newLevels = function(t) {
        var e = t.target,
            i = e.parent.parent,
            s = i.soul;
        switch (t.type) {
            case GodStep.FRAME_DOWN:
                PR.LAST_LEVEL_SELECTED = e.ID, s.screenTo([s.dev], i)
        }
    }, pro.h_container = function(t) {
        var e = t.target,
            i = e.parent,
            s = i.soul;
        if ("Container" == e.name) switch (t.type) {
            case GodStep.FRAME_MOVE:
                if (e.isDown) {
                    var n = t.content.getLocalPosition(e.parent),
                        r = .5 * (s.OH - s.H);
                    e.y = n.y - e.downPoint.y, e.y = Math.min(e.MY - r / i.scale.x, Math.max(e.y, (s.OH - r) / i.scale.x - e.MH))
                }
        }
    }, pro.h_mouse = function(t) {
        var e = t.content.target;
        switch (t.type) {
            case GodStep.FRAME_UP:
                if (t.content.target.soul) {
                    e.b_back.Scale = 1, e.b_back.isDown = !1, e.b_loadDef && (e.b_loadDef.isDown = !1, e.b_loadDef.Scale = 1);
                    for (var i = 0; i < e.levels.length; i++) e.levels[i].Scale = 1, e.levels[i].isDown = !1
                }
        }
    }, pro.h_buttons = function(t) {
        GodStep.playSound("button", 0, PR.SOUND);
        var e = t.content.t,
            i = e.parent.parent,
            s = i.soul;
        switch (e) {
            case i.b_loadDef:
                i.init(GodStep.LoadText(PR.DEFAULT_SETTINGS)), PR.PetResque.instance.saveSettings();
                break;
            case i.b_back:
                GodStep.playSound("button", 0, PR.SOUND), s.screenTo([s.startmenu], i)
        }
    }, Object.defineProperty(pro, "Scale", {
        get: function() {
            return this.scale.x
        },
        set: function(t) {
            var e = this.soul;
            this.back.rescale(t), this.scale.x = this.scale.y = t, this.maska.y = this.container.y = .5 * -(this.soul.OH - this.soul.H) / t + .2 * this.soul.H / t, this.container.y -= -this.container.MY + .2 * this.soul.H / t, this.maska.y += .07 * this.soul.H / t, this.b_loadDef && (this.b_loadDef.y = (-this.soul.DOH / 2 + .07 * this.soul.H) / this.scale.x), this.maska.clear(), this.maska.beginFill(0, .1), this.maska.drawRect(0, 0, this.W, 1.1 * this.soul.OH / t - this.container.y);
            this.soul.OH - this.soul.H;
            this.top.y = -e.DOH / 2 / t
        }
    }), PR.LevButton = function(t, e, i, s, n, r, o, a, h) {
        var l = GodStep.textures[t],
            d = e;
        GodStep.Frame.call(this, null, l.width * d / GodStep.IMAGE_RESOLUTION, l.height * d / GodStep.IMAGE_RESOLUTION), GodStep.IOverOut.call(this, this.W, this.H), GodStep.IDownUp.call(this, this.W, this.H), this.addChild(this.img = new GodStep.Image(l)), this.img.Scale = d / GodStep.IMAGE_RESOLUTION, this.img.anchor = new PIXI.Point(.5, .5), this.setHitArea(-this.W / 2, -this.H / 2, this.W, this.H), n && (this.addChild(this.label = new PR.Text(n, r || 100, 0, 0, "center", h)), this.label.x -= this.label.width / 2 + (o || 0), this.label.y -= this.label.height / 2 + (a || 0), this.label.tdx = o || 0, this.label.tdy = a || 0, this.label.HW = -this.label.width / 2, this.label.HH = -this.label.height / 2), this.downScale = .95, this.place(i, s), addEvent(this, GodStep.FRAME_DOWN, this.h_mouse), addEvent(this, GodStep.FRAME_OUT, this.h_mouse), addEvent(this, GodStep.FRAME_OVER, this.h_mouse), addEvent(this, GodStep.FRAME_UP, this.h_mouse)
    }, extend(PR.LevButton, GodStep.Frame), PR.LevButton.COLORS = [15169305, 11612702, 6327080, 12724521, 12658732], pro.setAsComplete = function() {
        var t = this.ID,
            e = t % 2 == 0 ? 1 : 2;
        this.img.setTexture(GodStep.textures["unlock_" + e + "_1"]), this.label.tint = 1 == e ? 16742659 : 16759825, this.isDisabled = !1, this.label.updateText()
    }, pro.setAsActive = function() {
        var t = this.ID,
            e = t % 2 == 0 ? 1 : 2;
        this.img.setTexture(GodStep.textures["unlock_" + e + "_2"]), this.label.tint = 7789562, this.label.updateText(), this.isDisabled = !1
    }, pro.destroy = function() {
        return this.removeChild(this.img), delEvent(this, GodStep.FRAME_DOWN, this.h_mouse), delEvent(this, GodStep.FRAME_OUT, this.h_mouse), delEvent(this, GodStep.FRAME_OVER, this.h_mouse), delEvent(this, GodStep.FRAME_UP, this.h_mouse), this.label && this.removeChild(this.label), this
    }, pro.h_mouse = function(t) {
        var e = t.content.t;
        switch (t.type) {
            case GodStep.FRAME_DOWN:
                this.Scale = this.downScale, this.isClicked = !0;
                break;
            case GodStep.FRAME_UP:
                this.isClicked && dispatch(e, Games.ImgButton.CLICK), this.isClicked = !1;
                break;
            case GodStep.FRAME_OUT:
                this.Scale = 1;
                break;
            case GodStep.FRAME_OVER:
                this.isDown && (this.Scale = this.downScale)
        }
    }, PR.Background = function(t, e) {
        this.soul = t.soul, this.p = t, GodStep.Frame.call(this, "Background", t.W, t.H), this.addChild(this.img = new Games.Img(e || "back_menu", t.s, .5 * this.W, .5 * this.H, .5))
    }, extend(PR.Background, GodStep.Frame), pro.rescale = function(t) {
        this.scale.x = this.scale.y = this.soul.OH / this.soul.H, this.x = +(this.soul.W - this.soul.W * this.scale.x) / 2, this.y = .5 * -this.soul.DOH / t
    }, PR.Win = function(t) {
        GodStep.LFrame.call(this, t, "Win"), this.addChild(this.back = new PR.Background(this, "back_fin_animation")), this.addChild(this.bot = new PIXI.DisplayObjectContainer), this.addChild(this.top = new PIXI.DisplayObjectContainer), this.top.addChild(this.anim = new GodStep.MovieClip(["fin_animation_1", "fin_animation_2", "fin_animation_3"], this.s, .5 * this.W, .32 * this.H, .5)), this.bot.addChild(this.field_button = new Games.Img("field_button2", this.s, .5 * this.W, this.H * -.22, .5)), this.bot.addChild(this.b_next = new Games.ImgButton("b_next_2", this, .5 * this.W, .22 * -this.H)), this.anim.animTime = 20, addEvent(this.b_next, Games.ImgButton.CLICK, this.h_buttons)
    }, extend(PR.Win, GodStep.LFrame), pro.update = function() {
        this.visible && this.anim.animate()
    }, pro.init = function() {
        this.visible = !0
    }, pro.h_buttons = function(t) {
        GodStep.playSound("button", 0, PR.SOUND);
        var e = t.target.parent.parent,
            i = e.soul;
        switch (t.target) {
            case e.b_next:
                i.screenTo([i.startmenu], e)
        }
    }, Object.defineProperty(pro, "Scale", {
        get: function() {
            return this.scale.x
        },
        set: function(t) {
            var e = this.soul;
            this.back.rescale(t), this.scale.x = this.scale.y = t, this.top.y = -e.DOH / 2 / t, this.bot.y = (e.OH - e.DOH / 2) / t
        }
    }), PR.Fail = function(t) {
        GodStep.LFrame.call(this, t, "Fail"), this.addChild(this.back = new PR.Background(this, "back_fail")), this.addChild(this.bot = new PIXI.DisplayObjectContainer), this.addChild(this.top = new PIXI.DisplayObjectContainer), this.top.addChild(this.field_score_win = new Games.Img("field_score_fail", this.s, .5 * this.W, .13 * this.H, .5)), this.top.addChild(this.pers1 = new GodStep.MovieClip(["pers_f_1", "pers_f_1_0"], this.s, .16 * this.W, .2 * this.H, .5)), this.top.addChild(this.pers2 = new GodStep.MovieClip(["pers_f_2", "pers_f_2_0"], this.s, .84 * this.W, .2 * this.H, .5)), this.top.addChild(this.label_score = new PR.Text(window.famobi.__("12313"), 160 * this.s, .32 * this.W, .08 * this.H, "center", 16777215)), this.bot.addChild(this.label = new PR.Text(window.famobi.__("Try again!"), 240 * this.s, .12 * this.W, .68 * -this.H, "center", 16777215)), this.bot.addChild(this.label_level = new PR.Text(window.famobi.__("LEVEL 1"), 140 * this.s, .32 * this.W, .73 * -this.H, "center", 7288947)), this.bot.addChild(this.field_record = new Games.Img("field_record", this.s, .5 * this.W, this.H * -.42, .5)), this.bot.addChild(this.label_record = new PR.Text(window.famobi.__("New Record    12323"), 130 * this.s, .32 * this.W, .488 * -this.H, "center", 16777215)), this.bot.addChild(this.star = new Games.Img("star", this.s, .5 * this.W, this.H * -.42, .5)), this.star.pos = new PIXI.Point(this.star.x, this.star.y), this.bot.addChild(this.field_button = new Games.Img("field_button2", this.s, .5 * this.W, this.H * -.22, .5)), this.bot.addChild(this.b_replay = new Games.ImgButton("b_replay", this, .38 * this.W, .22 * -this.H)), this.bot.addChild(this.b_menu = new Games.ImgButton("b_menu", this, .62 * this.W, .22 * -this.H)), this.field_score_win.phase = 0, this.pers1.animTime = 100, this.pers2.animTime = 111, this.pers2.animTimer = 66, addEvent(this.b_menu, Games.ImgButton.CLICK, this.h_buttons), addEvent(this.b_replay, Games.ImgButton.CLICK, this.h_buttons), this.bot.addChild(this.maska = new PIXI.Graphics), this.field_record.mask = this.maska, this.field_button.mask = this.maska, this.maska.y = this.field_button.y - this.field_button.height, this.maska.beginFill(0, 1), this.maska.drawRect(0, 2 * -this.field_button.height, this.field_button.width, 5 * this.field_button.height), this.maska.endFill()
    }, extend(PR.Fail, GodStep.LFrame), pro.update = function() {
        if (this.visible) {
            var t = .005 * this.W;
            this.star.x = Math.random() * t + this.star.pos.x - 2 * t, this.star.y = Math.random() * t + this.star.pos.y - 2 * t, this.field_score_win.phase += .05, this.field_score_win.y += Math.min(.05 * this.H, .3 * (.13 * this.H - this.field_score_win.y + .01 * Math.sin(this.field_score_win.phase) * this.W)), this.field_button.x += Math.min(.1 * this.W, .3 * (.5 * this.W - this.field_button.x)), this.field_record.x += Math.max(.1 * -this.W, .3 * (.5 * this.W - this.field_record.x)), this.label_score.y = this.field_score_win.y - .05 * this.H, this.label.x += Math.max(.1 * -this.W, .3 * ((this.W - this.label.width) / 2 - this.label.x)), this.pers1.animate(), this.pers2.animate(), this.b_menu.scale.x = this.b_menu.scale.y += .03 * (1 - this.b_menu.scale.x), this.b_replay.scale.x = this.b_replay.scale.y += .05 * (1 - this.b_replay.scale.x)
        }
    }, pro.init = function() {
        GodStep.playSound("lose", 0, PR.SOUND), this.visible = !0, this.field_score_win.phase = 0, this.field_button.x = 2 * -this.W, this.field_score_win.y = 1.5 * -this.H, this.field_record.x = 2 * this.W, this.b_menu.scale.x = this.b_menu.scale.y = this.b_replay.scale.x = this.b_replay.scale.y = 0, this.label_record.setText((this.soul.gameplay.isNewRecord ? window.famobi.__("New Record") : window.famobi.__("Score")) + "    " + this.soul.gameplay.points), this.label_level.setText(window.famobi.__("Level ") + (PR.LAST_LEVEL_SELECTED + 1)), this.label_score.setText(this.soul.gameplay.points + ""), this.label.updateText(), this.label_record.updateText(), this.label_score.updateText(), this.label_level.updateText(), this.label_level.x = (this.W - this.label_level.width) / 2, this.label.x = -this.W, this.label_record.x = (this.W - this.label_record.width) / 2, this.label_score.x = (this.W - this.label_score.width) / 2, this.star.x = this.label_record.x + .585 * this.W, this.star.pos = new PIXI.Point(this.star.x, this.star.pos.y), this.star.visible = this.soul.gameplay.isNewRecord
    }, pro.h_buttons = function(t) {
        GodStep.playSound("button", 0, PR.SOUND);
        var e = t.target.parent.parent,
            i = e.soul;
        switch (t.target) {
            case e.b_menu:
                i.screenTo([i.levelselect], e);
                break;
            case e.b_replay:
                i.screenTo([i.gameplay], e)
        }
    }, Object.defineProperty(pro, "Scale", {
        get: function() {
            return this.scale.x
        },
        set: function(t) {
            var e = this.soul;
            this.back.rescale(t), this.scale.x = this.scale.y = t, this.top.y = -e.DOH / 2 / t, this.bot.y = (e.OH - e.DOH / 2) / t
        }
    }), PR.Victory = function(t) {
        GodStep.LFrame.call(this, t, "Victory"), this.addChild(this.back = new PR.Background(this, "back_win")), this.addChild(this.bot = new PIXI.DisplayObjectContainer), this.addChild(this.top = new PIXI.DisplayObjectContainer), this.top.addChild(this.field_score_win = new Games.Img("field_score_win", this.s, .5 * this.W, .13 * this.H, .5)), this.top.addChild(this.pers1 = new GodStep.MovieClip(["pers_fg_1", "pers_fg_1_0"], this.s, .18 * this.W, .2 * this.H, .5)), this.top.addChild(this.pers2 = new GodStep.MovieClip(["pers_v_1", "pers_v_1_0"], this.s, .82 * this.W, .2 * this.H, .5)), this.top.addChild(this.label_score = new PR.Text("12313", 160 * this.s, .32 * this.W, .08 * this.H, "center", 16777215)), this.bot.addChild(this.label = new PR.Text(window.famobi.__("VICTORY!"), 240 * this.s, .12 * this.W, .68 * -this.H, "center", 16777215)), this.bot.addChild(this.label_level = new PR.Text(window.famobi.__("LEVEL 1"), 140 * this.s, .32 * this.W, .73 * -this.H, "center", 7288947)), this.bot.addChild(this.field_record = new Games.Img("field_record", this.s, .5 * this.W, this.H * -.42, .5)), this.bot.addChild(this.label_record = new PR.Text(window.famobi.__("New Record    12323"), 130 * this.s, .32 * this.W, .488 * -this.H, "center", 16777215)), this.bot.addChild(this.star = new Games.Img("star", this.s, .5 * this.W, this.H * -.414, .5)), this.pers1.animTime = 100, this.pers2.animTime = 111, this.pers2.animTimer = 66, this.field_score_win.phase = 0, this.bot.addChild(this.field_button = new Games.Img("field_button2", this.s, .5 * this.W, this.H * -.22, .5)), this.bot.addChild(this.b_replay = new Games.ImgButton("b_replay", this, .25 * this.W, .22 * -this.H)), this.bot.addChild(this.b_menu = new Games.ImgButton("b_menu", this, .5 * this.W, .22 * -this.H)), this.bot.addChild(this.b_next = new Games.ImgButton("b_next_1", this, .75 * this.W, .22 * -this.H)), this.star.pos = new PIXI.Point(this.star.x, this.star.y), this.bot.addChild(this.maska = new PIXI.Graphics), this.field_record.mask = this.maska, this.field_button.mask = this.maska, this.maska.y = this.field_button.y - this.field_button.height, this.maska.beginFill(0, 1), this.maska.drawRect(0, 2 * -this.field_button.height, this.field_button.width, 5 * this.field_button.height), this.maska.endFill(), addEvent(this.b_next, Games.ImgButton.CLICK, this.h_buttons), addEvent(this.b_menu, Games.ImgButton.CLICK, this.h_buttons), addEvent(this.b_replay, Games.ImgButton.CLICK, this.h_buttons)
    }, extend(PR.Victory, GodStep.LFrame), pro.update = function() {
        if (this.visible) {
            var t = .005 * this.W;
            this.star.x = Math.random() * t + this.star.pos.x - 2 * t, this.star.y = Math.random() * t + this.star.pos.y - 2 * t, this.field_score_win.phase += .05, this.field_score_win.y += Math.min(.05 * this.H, .3 * (.13 * this.H - this.field_score_win.y + .01 * Math.sin(this.field_score_win.phase) * this.W)), this.field_button.x += Math.min(.1 * this.W, .3 * (.5 * this.W - this.field_button.x)), this.field_record.x += Math.max(.1 * -this.W, .3 * (.5 * this.W - this.field_record.x)), this.label_score.y = this.field_score_win.y - .05 * this.H, this.label.x += Math.max(.1 * -this.W, .3 * ((this.W - this.label.width) / 2 - this.label.x)), this.pers1.animate(), this.pers2.animate(), this.b_menu.scale.x = this.b_menu.scale.y += .03 * (1 - this.b_menu.scale.x), this.b_next.scale.x = this.b_next.scale.y += .07 * (1 - this.b_next.scale.x), this.b_replay.scale.x = this.b_replay.scale.y += .05 * (1 - this.b_replay.scale.x)
        }
    }, pro.init = function() {
        window.famobi.levelUp(), GodStep.playSound("win", 0, PR.SOUND), this.visible = !0, this.b_menu.scale.x = this.b_menu.scale.y = this.b_next.scale.x = this.b_next.scale.y = 0, this.b_replay.scale.x = this.b_replay.scale.y = 0, this.field_score_win.phase = 0, this.field_button.x = 2 * -this.W, this.field_score_win.y = 1.5 * -this.H, this.field_record.x = 2 * this.W, this.label_record.setText((this.soul.gameplay.isNewRecord ? window.famobi.__("New Record") : window.famobi.__("Score")) + "    " + this.soul.gameplay.points), this.label_level.setText(window.famobi.__("Level ") + (PR.LAST_LEVEL_SELECTED + 1)), this.label_score.setText(this.soul.gameplay.points + ""), this.label_record.updateText(), this.label_score.updateText(), this.label.updateText(), this.label_level.updateText(), this.label.x = -this.W, this.label_level.x = (this.W - this.label_level.width) / 2, this.label_record.x = (this.W - this.label_record.width) / 2, this.label_score.x = (this.W - this.label_score.width) / 2, this.star.visible = this.soul.gameplay.isNewRecord, this.star.x = this.label_record.x + .582 * this.W, this.star.pos = new PIXI.Point(this.star.x, this.star.pos.y)
    }, pro.h_buttons = function(t) {
        var e = t.target.parent.parent,
            i = e.soul;
        switch (GodStep.playSound("button", 0, PR.SOUND), t.target) {
            case e.b_menu:
                i.screenTo([i.levelselect], e);
                break;
            case e.b_next:
                PR.LAST_LEVEL_SELECTED++, PR.LAST_LEVEL_DATA = PR.LEVELS[PR.LAST_LEVEL_SELECTED], i.screenTo([i.gameplay], e);
                break;
            case e.b_replay:
                i.screenTo([i.gameplay], e)
        }
    }, Object.defineProperty(pro, "Scale", {
        get: function() {
            return this.scale.x
        },
        set: function(t) {
            var e = this.soul;
            this.back.rescale(t), this.scale.x = this.scale.y = t, this.top.y = -e.DOH / 2 / t, this.bot.y = (e.OH - e.DOH / 2) / t
        }
    }), PR.Settings = function(t) {
        PR.TUTORIAL = !0, GodStep.LFrame.call(this, t, "Settings"), GodStep.IDownUp.call(this, this.W, this.H), this.addChild(this.back = new PR.Background(this, "back_options")), this.addChild(this.top = new PIXI.DisplayObjectContainer), this.addChild(this.center = new PIXI.DisplayObjectContainer), this.top.addChild(this.b_back = new Games.ImgButton("b_back", this, .15 * this.W, .1 * this.H)), this.top.addChild(this.label = new PR.Text(window.famobi.__("OPTIONS"), 170 * this.s, .3 * this.W, .01 * this.H, "center", 16777215)), this.center.addChild(this.b_music = new Games.ImgButton("slider_on", this, .6 * this.W, .3 * this.H)), this.center.addChild(this.b_sound = new Games.ImgButton("slider_on", this, .6 * this.W, .48 * this.H)), this.center.addChild(this.b_tutorial = new Games.ImgButton("tutorial_on", this, .36 * this.W, .7 * this.H)), this.b_music.addChild(this.b_music.lab = new PR.Text(window.famobi.__("ON"), 140 * this.s, .08 * -this.W, .075 * -this.H, "center", 37600)), this.b_sound.addChild(this.b_sound.lab = new PR.Text(window.famobi.__("ON"), 140 * this.s, .08 * -this.W, .075 * -this.H, "center", 37600)), this.b_tutorial.addChild(this.b_tutorial.lab = new PR.Text(window.famobi.__("Tutorial"), 140 * this.s, .12 * -this.W, .075 * -this.H, "center", 37600)), this.center.addChild(this.b_music_img = new Games.Img("b_music", this.s, .25 * this.W, .3 * this.H, .5)), this.center.addChild(this.b_sound_img = new Games.Img("b_sound", this.s, .25 * this.W, .48 * this.H, .5)), this.center.addChild(this.b_tutor_pers = new Games.Img("pers_2o", this.s, .73 * this.W, .81 * this.H, .5)), this.b_tutorial.phase = 0, this.b_tutorial.scaleble = this.b_music.scaleble = this.b_sound.scaleble = !1, addEvent(this.b_music, Games.ImgButton.CLICK, this.h_buttons), addEvent(this.b_sound, Games.ImgButton.CLICK, this.h_buttons), addEvent(this.b_tutorial, Games.ImgButton.CLICK, this.h_buttons), addEvent(this.b_back, Games.ImgButton.CLICK, this.h_buttons), addEvent(this, GodStep.FRAME_UP, this.h_mouse_up)
    }, extend(PR.Settings, GodStep.LFrame), pro.update = function() {
        if (this.visible) {
            var t = this.soul;
            this.b_tutorial.phase += .025, this.b_tutorial.y += .3 * (.7 * this.H + Math.sin(this.b_tutorial.phase) * t.H * .01 - this.b_tutorial.y)
        }
    }, pro.init = function() {
        this.visible = !0, this.b_tutorial.phase = 9;
        var t = this;
        PR.MUSIC ? (t.b_music.setTexture("slider_on"), t.b_music.lab.tint = 37600, t.b_music.lab.setText(window.famobi.__("ON"))) : (t.b_music.setTexture("slider_off"), t.b_music.lab.tint = 2844024, t.b_music.lab.setText(window.famobi.__("OFF"))), PR.SOUND ? (t.b_sound.setTexture("slider_on"), t.b_sound.lab.tint = 37600, t.b_sound.lab.setText(window.famobi.__("ON"))) : (t.b_sound.setTexture("slider_off"), t.b_sound.lab.tint = 2844024, t.b_sound.lab.setText(window.famobi.__("OFF")))
    }, pro.h_mouse_up = function(t) {
        var e = t.content.target;
        e.b_back.isDown = !1, e.b_back.Scale = 1
    }, pro.h_buttons = function(t) {
        var e = t.content.t,
            i = e.parent.parent,
            s = i.soul;
        switch (GodStep.playSound("button", 0, PR.SOUND), e) {
            case i.b_tutorial:
                PR.TUTORIAL ? (i.b_tutorial.setTexture("tutorial_off"), i.b_tutorial.lab.tint = 2844024, i.b_tutor_pers.setTexture("pers_1o")) : (i.b_tutorial.setTexture("tutorial_on"), i.b_tutorial.lab.tint = 37600, i.b_tutor_pers.setTexture("pers_2o")), i.b_tutorial.lab.updateText(), PR.TUTORIAL = !PR.TUTORIAL, i.soul.savePlayer();
                break;
            case i.b_music:
                PR.MUSIC ? (i.b_music.setTexture("slider_off"), i.b_music.lab.tint = 2844024, i.b_music.lab.setText(window.famobi.__("OFF")), GodStep.volumeSound("theme", !PR.MUSIC)) : (i.b_music.setTexture("slider_on"), i.b_music.lab.tint = 37600, i.b_music.lab.setText(window.famobi.__("ON")), GodStep.volumeSound("theme", !PR.MUSIC)), i.b_music.lab.updateText(), PR.MUSIC = !PR.MUSIC, i.soul.savePlayer();
                break;
            case i.b_sound:
                PR.SOUND ? (i.b_sound.setTexture("slider_off"), i.b_sound.lab.tint = 2844024, i.b_sound.lab.setText(window.famobi.__("OFF"))) : (i.b_sound.setTexture("slider_on"), i.b_sound.lab.tint = 37600, i.b_sound.lab.setText(window.famobi.__("ON"))), i.b_sound.lab.updateText(), PR.SOUND = !PR.SOUND, i.soul.savePlayer();
                break;
            case i.b_back:
                s.screenTo([s.startmenu], i)
        }
    }, Object.defineProperty(pro, "Scale", {
        get: function() {
            return this.scale.x
        },
        set: function(t) {
            var e = this.soul;
            this.back.rescale(t), this.scale.x = this.scale.y = t, this.top.y = -e.DOH / 2 / t
        }
    }), PR.GamePlay = function(t) {
        GodStep.volumeSound("theme", PR.MUSIC), GodStep.playSound("theme", -1, PR.MUSIC), GodStep.playSound("start", 0, PR.SOUND), GodStep.LFrame.call(this, t, "GamePlay"), GodStep.IDownUp.call(this, this.W, this.H), this.addChild(this.back = new PR.Background(this, "back_game")), this.addChild(this.fieldContainer = new PIXI.DisplayObjectContainer), this.addChild(this.footer = new PIXI.DisplayObjectContainer), this.addChild(this.topSprite = new PIXI.DisplayObjectContainer), this.topSprite.addChild(this.field_up = new Games.Img("field_up", this.s, .5 * this.W, 0, new PIXI.Point(.5, 0))), this.footer.addChild(this.field_down = new Games.Img("field_down", this.s, .5 * this.W, 0, new PIXI.Point(.5, 1))), this.addChild(this.container = new PIXI.DisplayObjectContainer), this.topSprite.addChild(this.lineLeft = new Games.Img("line_left", this.s, 0, this.field_up.height, new PIXI.Point(1, 0))), this.topSprite.addChild(this.lineRight = new Games.Img("line_right", this.s, 0, this.field_up.height, new PIXI.Point(0, 0))), this.topSprite.addChild(this.icon_save = new Games.Img("icon_save", this.s, .08 * this.W, 0 * -this.H, new PIXI.Point(0, 0))), this.topSprite.addChild(this.star = new Games.Img("star", this.s, .72 * this.W, .06 * this.H, new PIXI.Point(.5, .5))), this.fieldContainer.addChild(this.field = new PR.Field(t, 9, 9, .9, this)), this.addChild(this.maska = new PIXI.Graphics), this.star.startS = this.star.scale.x, this.oS = this.lineRight.scale.x, this.footer.addChild(this.stepLabel = new PR.Text(window.famobi.__("124214"), 110 * this.s, .5 * this.W, .14 * -this.H, "left", 13365242)), this.stepLabel.posY = this.stepLabel.y, this.topSprite.addChild(this.pointLabel = new PR.Text(window.famobi.__("0"), 100 * this.s, .8 * this.W, .01 * this.H, "left", 13365242)), this.topSprite.addChild(this.heroLabel = new PR.Text(window.famobi.__("0"), 100 * this.s, .46 * this.W, .01 * this.H, "left", 13365242)), this.heroLabel.startS = this.heroLabel.scale.x, this.heroLabel.pos = new PIXI.Point(this.heroLabel.x, this.heroLabel.y), this.points = 0;
        var e = this.field.W * PR.CELLW_SCALE * this.field.scale.x,
            i = .005 * -this.W;
        this.maska.beginFill(0, 1), this.maska.drawRect(i, i + 2, e - 2 * i, e - 2 * i - 4), this.maska.endFill(), this.field.mask = this.maska, this.killed = [], this.container.addChild(this.b_back = new Games.TextButton("back", 30 * this.s, 5645414, .9 * t.W, .05 * t.H)), this.footer.addChild(this.b_pause = new Games.ImgButton("b_pause", this, .86 * this.W, .06 * -this.H)), this.footer.addChild(this.b_down = new Games.ImgButton("b_down", this, .14 * this.W, .06 * -this.H)), this.b_down.scaleble = !1, this.b_down.addChild(this.row_label = new PR.Text("0", 80 * this.s, .017 * -this.W, .06 * -this.H, "left", 16777215)), this.addFrame(this.pause = new PR.Pause(t)), addEvent(this.b_pause, Games.ImgButton.CLICK, this.h_buttons), addEvent(this.b_back, Games.ImgButton.CLICK, this.h_buttons), this.topSprite.addChild(this.field_start = new Games.Img("field_start", this.s, .5 * this.W, .5 * this.H, .5)), this.topSprite.addChild(this.field_fin = new Games.Img("field_fin", this.s, .5 * this.W, .5 * this.H, .5)), this.field_start.addChild(this.start_label = new PR.Text(window.famobi.__("12525\nfgjfgjh0"), 100, .15 * -this.W / this.s, .037 * this.H / this.s, "center", 16777215)), this.field_fin.addChild(this.fin_label = new PR.Text(window.famobi.__("12525\nfgjfgjh0"), 100, .15 * -this.W / this.s, .09 * this.H / this.s, "center", 16777215)), this.fin_label.pos = new PIXI.Point(this.fin_label.x, this.fin_label.y), this.field_start.pos = new PIXI.Point(.5 * this.W, .5 * this.H), this.field_fin.pos = new PIXI.Point(.5 * this.W, .5 * this.H), addEvent(this, GodStep.FRAME_DOWN, this.h_mouse),
            addEvent(this, GodStep.FRAME_UP, this.h_mouse), addEvent(this.field, Games.CELL_UP, this.h_cells), addEvent(this.field, Games.CELL_DOWN, this.h_cells), addEvent(this.field, GodStep.FRAME_UP, this.h_field), this.canMoveTimer = 0
    }, extend(PR.GamePlay, GodStep.LFrame), PR.CANMOVEDELAY = 10, PR.BOMB_DROP = 50, PR.BONUS_DROP = 90, PR.MOVEWAITTIMER = 10, PR.GamePlay.HERO_RANDOMS = [0, 1, 2, 3, 4], pro.init = function() {
        GodStep.volumeSound("theme", PR.MUSIC), GodStep.playSound("theme", -1, PR.MUSIC), GodStep.playSound("start", 0, PR.SOUND), this.heroRandom = [0, 1, 2], PR.LAST_LEVEL_SELECTED > 9 && this.heroRandom.push(3), PR.LAST_LEVEL_SELECTED > 19 && this.heroRandom.push(4);
        for (var t = this.heroRandom.length, e = [], i = 0; t > i; i++) {
            var s = parseInt(Math.random() * this.heroRandom.length);
            e.push(this.heroRandom[s]), this.heroRandom.splice(s, 1)
        }
        PR.GamePlay.HERO_RANDOMS = e, this.lastPoints = 0, this.field_start.vis = !0, this.field_fin.vis = !1, this.field_fin.y = 2 * this.H, this.isNewRecord = !1, this.field_start.y = .2 * -this.H, this.isFirstClick = !0, this.initTimer = 130, this.fin_label.setText(window.famobi.__("GAME\nOVER")), this.fin_label.updateText(), this.fin_label.x = 0 * -this.W / this.s - this.fin_label.width / 2, this.fin_label.y = this.fin_label.pos.y - this.fin_label.height / 2, this.field_fin.visible = !0, this.field_start.visible = !0, this.killed = [], this.isGameStarted = !0, this.topCell = 0, GodStep.ISEDITMODE = !1, this.isFinished = !1, this.moveDownTimer = PR.MOVEWAITTIMER, this.visible = !0, this.isOver = !1, this.isWin = !1, this.winTimer = -1, this.overTimer = -1, this.pause.visible = !1;
        var n;
        this.selected = [], this.points = 0, this.b_back.visible = GodStep.DEVMODE, GodStep.DEVMODE ? this.field.setData(n = GodStep.TEST_DATA) : (n = PR.PetResque.instance.SETTINGS.levels[PR.LAST_LEVEL_SELECTED], this.field.initTutorial(PR.TUTORIAL), this.field.setData(n), this.field.completeCell = null), this.steps = n.params.steps, this.noSteps = 0 == this.steps, this.bombDrop = 30, this.bonusDrop = 70, this.heroesCount = this.field.heroes.length, this.pointLabel.setText("0"), this.stepLabel.setText(n.params.steps + (1 == n.params.steps ? window.famobi.__(" move") : window.famobi.__("moves"))), this.stepLabel.visible = 0 != this.steps, this.heroLabel.setText("0/" + this.heroesCount), this.heroLabel.scale.x = this.heroLabel.scale.y *= 1.3, this.colors = this.field.colors, this.stepLabel.updateText(), this.stepLabel.x = (this.W - this.stepLabel.width) / 2, this.generateInstant(), this.updateRowLabel(), this.start_label.setText((1 == this.heroesCount ? window.famobi.__("Save 1 critter") : window.famobi.__("Save %num% critters").replace("%num%", this.heroesCount)) + "!" + (0 == this.steps ? "" : window.famobi.__("in %num% moves").replace("%num%", this.steps))), this.start_label.updateText(), this.start_label.x = 0 * -this.W / this.s - this.start_label.width / 2, this.start_label.y = this.fin_label.pos.y - this.start_label.height / 2, this.b_down.visible = this.field.cellCountY - 9 > 0, this.Scale = this.scale.x
    }, pro.moveCellsLeft = function(t, e) {
        var i, s = t;
        if (0 != s.xi)
            for (var n = s.yi;;) {
                if (!e[n]) return;
                s = e[n][t.xi];
                var r = s.getObject();
                if (!r) return;
                if (r.isBlock) return;
                if (i = e[n][t.xi - 1], i.isBusy()) return;
                r.setCell(i), n--
            }
    }, pro.update = function() {
        if (this.visible) {
            this.pause.update(), this.field.update(), this.field_start.y += .06 * ((this.field_start.vis ? this.field_start.pos.y : 2 * this.H) - this.field_start.y), this.field_fin.y += .06 * ((this.field_fin.vis ? this.field_fin.pos.y : 2 * this.H) - this.field_fin.y), this.heroLabel.scale.x = this.heroLabel.scale.y += .1 * (this.heroLabel.startS - this.heroLabel.scale.x), this.heroLabel.x = this.heroLabel.pos.x + this.heroLabel.width / 2 * (this.heroLabel.startS - this.heroLabel.scale.x), this.heroLabel.y = this.heroLabel.pos.y + this.heroLabel.height / 2 * (this.heroLabel.startS - this.heroLabel.scale.x), this.stepLabel.y += .1 * (this.stepLabel.posY - this.stepLabel.y), this.star.scale.x = this.star.scale.y += .05 * (this.star.startS - this.star.scale.x);
            var t, e, i, s, n, r, o, a, h, l, d, c = this.field.cellCountX,
                u = this.field.cellCountY,
                p = this.field.cellsXY,
                f = .02 * this.W,
                y = .02 * this.W,
                x = 0,
                m = this.justDroped = !1,
                g = !1,
                v = 0;
            for (t = 0; c > t; t++)
                for (e = u - 1; e >= 0; e--)
                    for (n = p[e], s = n[t], s.animate(), r = s.guests, e == this.topCell && (0 == r.length ? v++ : r[0].isGround && v++), 0 == e && (s.isBusy() || this.generate(s)), i = 0; i < r.length; i++)
                        if (o = r[i], o.update(), o.isDynamic) {
                            a = o.nextPlace.y - o.y - o.deltaXY, -1 > a ? (o.sy += .17, h = p[s.yi + 1], h && (l = h[s.xi], l.isBusy() || (o.cell.delGuest(o), o.cell = l, l.pushGuest(o), o.applyCellPostion(), this.isCanMove = !1, this.canMoveTimer = PR.CANMOVEDELAY))) : f > a ? (h = p[s.yi + 1], h && (l = h[s.xi], l.isBusy() || (o.setCell(l), d = !0, m = !0, this.moveDownTimer = PR.MOVEWAITTIMER, this.isCanMove = !1, this.canMoveTimer = PR.CANMOVEDELAY)), o.sy *= .8) : (this.moveDownTimer = PR.MOVEWAITTIMER, g = !0, this.isCanMove = !1, this.canMoveTimer = PR.CANMOVEDELAY, a += o.sy, o.sy += .17);
                            var b = 0;
                            o.x += Math.min(Math.max(-y, .5 * (o.nextPlace.x - o.deltaXY - o.x)), y), o.y += b = Math.min(Math.max(1.7 * -y, a * o.sy * .5), 1.7 * y), x = Math.max(b, x)
                        }
            v == c && u > 9 && (this.topCell++, this.topCell = Math.min(this.topCell, u - 9), this.updateRowLabel()), this.fieldContainer.y += .1 * (-this.topCell * this.field.cellW * this.field.scale.x - this.fieldContainer.y);
            for (var _ = 0; _ < this.killed.length; _++) {
                var S = this.killed[_];
                S.move()
            }
            if (this.moveDownTimer > 0) {
                this.moveDownTimer--;
                var w, T;
                if (this.moveDownTimer < 5)
                    for (e = 0; c > e; e++)
                        for (t = 0; u > t; t++)
                            if (s = p[t][e], o = s.getObject(), o && o.isDynamic && (T = p[t][e - 1], T && !T.isBusy())) {
                                var C = !1;
                                t == u - 1 ? C = !0 : (h = p[t + 1], h && (l = h[e], w = l.getObject(), w && w.isGround && (C = !0))), C && (this.canMoveTimer += 5, this.isCanMove = !1, this.moveDownTimer = PR.MOVEWAITTIMER, this.moveCellsLeft(s, p))
                            }
            }
            this.isCanMove || (0 == this.canMoveTimer && (this.isCanMove = !0, this.findCombo() || this.over()), this.canMoveTimer--);
            for (var E = 0; c > E; E++) s = p[u - 1][E], o = s.getObject(), o && o.isHero && (o.isKilled || (this.destroyCell(o.cell), o.cell.setCost(1e3), this.isCanMove = !1, this.canMoveTimer = this.moveDownTimer = 10 * PR.MOVEWAITTIMER, this.points += 1e3, this.updatePoints()));
            this.initTimer > -1 && 0 == this.initTimer-- && (this.field_start.vis = !1, this.isFirstClick = !1), this.winTimer > -1 && 0 == this.winTimer-- && this.soul.screenTo([this.soul.victory], this), this.overTimer > -1 && (80 == this.overTimer && (this.field_fin.y = 2 * -this.H, this.field_fin.vis = !0), 0 == this.overTimer-- && this.soul.screenTo([this.soul.fail], this))
        }
    }, pro.updateRowLabel = function() {
        this.row_label.setText(this.field.cellCountY - 9 - this.topCell + ""), this.row_label.updateText(), this.row_label.x = .003 * -this.W - this.row_label.width / 2
    }, pro.findCombo = function() {
        var t, e, i, s, n, r, o, a = this.field.cellsXY,
            h = this.field.cellCountX,
            l = Math.min(a.length, 9) + this.topCell,
            d = !1,
            c = !1;
        for (t = 0; h > t; t++)
            for (e = this.topCell; l > e; e++) {
                if (i = a[e][t].getColored(), c = a[e][t].getBonus()) return !0;
                if (i) {
                    if (d = !0, a[e - 1] && (r = a[e - 1][t].getColored(), r && r.t == i.t)) return !0;
                    if (a[e + 1] && (o = a[e + 1][t].getColored(), o && o.t == i.t)) return !0;
                    if (s = a[e][t - 1], n = a[e][t + 1], s && (s = s.getColored(), s && s.t == i.t)) return !0;
                    if (n && (n = n.getColored(), n && n.t == i.t)) return !0
                }
            }
        return d ? !1 : !0
    }, pro.win = function() {
        window.famobi.showAd(), this.isWin = !0, this.winTimer = 100, this.overTimer = -1, this.isOver = !1;
        var t = this.soul.PLAYER.levels[PR.LAST_LEVEL_SELECTED];
        t[0] = 1, t[1] < this.points && (t[1] = this.points, this.isNewRecord = !0), this.soul.savePlayer(), this.fin_label.setText(window.famobi.__("You win!")), this.fin_label.updateText(), this.fin_label.x = 0 * -this.W / this.s - this.fin_label.width / 2, this.fin_label.y = this.fin_label.pos.y - this.fin_label.height / 2, this.field_fin.vis = !0, this.field_fin.y = 2 * -this.H, window.famobi.submitHighscore("", this.points * (PR.LAST_LEVEL_SELECTED + 1))
    }, pro.over = function(t) {
        if (!this.isWin) {
            this.isOver = !0, this.fin_label.setText(t ? t : window.famobi.__("No Moves!")), this.fin_label.updateText(), this.fin_label.x = 0 * -this.W / this.s - this.fin_label.width / 2, this.fin_label.y = this.fin_label.pos.y - this.fin_label.height / 2, this.overTimer = 170;
            var e = this.soul.PLAYER.levels[PR.LAST_LEVEL_SELECTED];
            e[1] < this.points && (e[1] = this.points, this.isNewRecord = !0), window.famobi.gameOver()
            console.log(123123123);
            try {
                window.IView ?  loadGoogleAd() : console.log("function not fail!");
            } catch (__error) {
                throw __error;
            }

        }
    }, pro.generateInstant = function() {
        for (var t, e = this.field.cellsXY, i = 0; i < this.field.cellCountX; i++)
            for (var s = 0; s < this.field.cellCountY; s++)
                if (t = e[s][i], 0 == t.guests.length) {
                    var n = this.colors[parseInt(Math.random() * this.colors.length)],
                        r = PR.Cell.STANDART[n];
                    this.field.addCellObject(new PR.CellObject(r, this.s, t, this.colors)), this.emptyCount++
                }
    }, pro.generate = function(t) {
        if (this.hero && t.xi == this.hero.targetCell.xi) return this.hero.cell.delGuest(this.hero), t.pushGuest(this.hero), this.hero.cell = t, this.hero.applyCellPostion(), void(this.hero = null);
        if (this.noSteps);
        else {
            var e, i = this.colors[parseInt(Math.random() * this.colors.length)],
                s = PR.Cell.STANDART[i];
            this.noSteps || (this.field.isBomb && 0 == this.bombDrop-- && (e = new PR.CellObject("bomb", this.s, t, this.colors, this.field.getRandomColors()), this.bombDrop = PR.BOMB_DROP - parseInt(10 * Math.random())), this.field.isBonus && (e || 0 == this.bonusDrop-- && (e = new PR.CellObject("s_bonus", this.s, t, this.colors, this.field.getRandomColors()), this.bonusDrop = PR.BONUS_DROP - parseInt(20 * Math.random())))), e || (e = new PR.CellObject(s, this.s, t, this.colors, this.field.getRandomColors())), this.field.addCellObject(e), e.y -= t.H, this.emptyCount++
        }
    }, pro.selectCell = function(t) {
        if (!(t.yi - this.topCell > 8)) {
            var e, i = t.getObject();
            t.Selected = !0, this.selected.push(t);
            var s = this.field.cellsXY,
                n = [];
            t.yi < this.field.cellCountY - 1 && n.push(s[t.yi + 1][t.xi]), t.yi > 0 && n.push(s[t.yi - 1][t.xi]), t.xi < this.field.cellCountX - 1 && n.push(s[t.yi][t.xi + 1]), t.xi > 0 && n.push(s[t.yi][t.xi - 1]);
            for (var r, o = 0; o < n.length; o++) r = n[o], r.isSelected || (e = r.getObject(), e && e.isColored && e.t == i.t && this.selectCell(r))
        }
    }, pro.updatePoints = function() {
        this.pointLabel.setText(this.points + ""), this.pointLabel.updateText(), (this.points % 100 == 0 || this.points % 1e3 == 0) && (this.star.scale.x = this.star.scale.y *= 1.3), this.lastPoints = this.points
    }, pro.selectCells = function(t) {
        for (var e = this.selected; e.length;) e[0].Selected = !1, e.splice(0, 1);
        t && (this.selectCell(t), 1 == this.selected.length ? (t.Selected = !1, this.selected = [], GodStep.playSound("miss_tap", 0, PR.SOUND)) : GodStep.playSound("tap", 0, PR.SOUND))
    }, pro.destroyBonuses = function(t) {
        var e = this.field.cells,
            i = t.getObject(),
            s = i.ctype;
        this.field.delCellObject(i.destroy()), GodStep.playSound("petard", 0, PR.SOUND);
        for (var n = [], r = 0; r < e.length; r++) i = e[r].getObject(), i && i.isColored && i.ctype == s && n.push(e[r]);
        var o = 10 * n.length,
            a = 10 * n.length * n.length;
        this.points += a, this.updatePoints();
        for (var h in n) this.destroyCell(n[h]), n[h].setCost(o)
    }, pro.destroyBomb = function(t) {
        var e = this.field.cellsXY,
            i = t.getObject(),
            s = [],
            n = i.parent;
        n.removeChild(i), n.addChild(i), GodStep.playSound("bomb", 0, PR.SOUND), i.isDestroyed = !0, t.xi < this.field.cellCountX - 1 && (s.push(e[t.yi][t.xi + 1]), e[t.yi - 1] && s.push(e[t.yi - 1][t.xi + 1]), e[t.yi + 1] && s.push(e[t.yi + 1][t.xi + 1])), t.xi > 0 && (s.push(e[t.yi][t.xi - 1]), e[t.yi - 1] && s.push(e[t.yi - 1][t.xi - 1]), e[t.yi + 1] && s.push(e[t.yi + 1][t.xi - 1])), t.yi < this.field.cellCountY - 1 && s.push(e[t.yi + 1][t.xi]), t.yi > 0 && s.push(e[t.yi - 1][t.xi]);
        for (var r = 0, o = 0, a = 0; a < s.length; a++) i = s[a].getObject(), i && i.isColored && o++;
        for (var h = 10 * o, l = 0; l < s.length; l++) i = s[l].getObject(), i && (i.isBomb ? i.isDestroyed || this.destroyBomb(i.cell) : i.isHero || i.isGround || i.isBonus || (this.destroyCell(s[l]), s[l].setCost(h)));
        r += h * o, this.destroyCell(t), t.setCost(300), this.points += 300 + r, this.updatePoints()
    }, pro.destroyCell = function(t) {
        var e = t.getObject();
        e && (t.Selected = !1, this.killed.push(e), e.isKilled = !0, e.cell.Selected = !1, "dirt" == e.typeName ? e.dirt.nextFrame() : "hero" == e.typeName || e.img.nextFrame())
    }, pro.destroyCells = function() {
        var t = 10 * this.selected.length,
            e = t * this.selected.length;
        this.points += e, GodStep.playSound("pop", 0, PR.SOUND), this.updatePoints();
        for (var i = !0; this.selected.length;) {
            var s = this.selected[0];
            this.destroyCell(s), this.selected.splice(0, 1), s.setCost(t), s.isKilled = !0;
            var n = s.guests.length > 0 ? s.guests[0] : null;
            n && n.isHeroTrap && i && (i = !1, GodStep.playSound("cage", 0, PR.SOUND))
        }
        this.isCanMove = !1, this.canMoveTimer = 6 * PR.CANMOVEDELAY, this.moveDownTimer = 6 * PR.MOVEWAITTIMER
    }, pro.step = function() {
        this.noSteps || (this.steps--, this.stepLabel.setText(this.steps + " " + (1 == this.steps ? window.famobi.__("move") : window.famobi.__("moves"))), this.stepLabel.updateText(), this.stepLabel.x = (this.W - this.stepLabel.width) / 2, this.steps % 10 == 0 && (this.stepLabel.y = this.stepLabel.posY - .01 * this.H), 0 == this.steps && this.over("No Moves!"))
    }, pro.mouseUp = function(t) {
        var e = this,
            i = t ? t.getObject() : null,
            s = -1;
        if (this.isCanMove && this.field.isTutorial && !this.isFirstClick && (this.selected.length > 0 || i.isBonus || i.isBomb) && this.field.completeCell) {
            var n = this.field.cellsXY[this.field.completeCell.y][this.field.completeCell.x],
                r = n.getColored(),
                o = t.getColored();
            if (t == n) this.field.animPhase++;
            else {
                if (!r || !o) return;
                if (r.t != o.t) return;
                this.field.animPhase++
            }
        }
        if (i && (s = i.t), t && t.yi - e.topCell > 8) return void e.selectCells(null);
        var a = !1;
        if (e.selected.length > 0) {
            for (var h = 0; h < e.selected.length; h++) e.selected[h] == t && (a = !0);
            var l = e.selected[0].getObject();
            l && a && l.t == s ? (e.step(), e.destroyCells()) : e.selectCells(null)
        } else i ? (e.bonusCell == i.cell ? (e.bonusCell.Selected = !1, i.isBonus ? (e.step(), e.destroyBonuses(e.bonusCell)) : i.isBomb && e.isCanMove && (e.step(), e.destroyBomb(e.bonusCell))) : e.bonusCell && (e.bonusCell.Selected = !1), e.bonusCell = null) : e.bonusCell && (e.bonusCell.Selected = !1, e.bonusCell = null)
    }, pro.h_field = function(t) {
        var e = t.target;
        if (t.content.getLocalPosition) {
            var i = t.content.getLocalPosition(e),
                s = e.getCellByCoord(i.x, i.y);
            e.parent.parent.mouseUp(s)
        }
    }, pro.h_cells = function(t) {
        var e, i = t.target,
            s = i.parent.parent,
            n = t.content.data;
        if (!s.isOver && !s.pause.visible && s.isCanMove && !s.isWaitAnimations && !s.isFirstClick && !s.isWin) switch (t.type) {
            case Games.CELL_UP:
                break;
            case Games.CELL_DOWN:
                e = n.getObject(), e && (e.isColored && !e.isDirt ? s.selectCells(n) : (e.isBonus || e.isBomb) && (s.bonusCell = n, n.Selected = !0))
        }
        s.isFirstClick = !1
    }, pro.h_buttons = function(t) {
        var e = t.content.t,
            i = e.parent.parent,
            s = i.soul;
        switch (GodStep.playSound("button", 0, PR.SOUND), e) {
            case i.b_back:
                GodStep.ISEDITMODE = !0, s.screenTo([s.dev], i);
                break;
            case i.b_pause:
                i.pause.init()
        }
    }, pro.h_mouse = function(t) {
        var e = t.content.target;
        switch (t.type) {
            case GodStep.FRAME_DOWN:
                e.isGameStarted && !e.isFail && (e.field_start.vis = !1);
                break;
            case GodStep.FRAME_UP:
        }
    }, Object.defineProperty(pro, "Scale", {
        get: function() {
            return this.scale.x
        },
        set: function(t) {
            var e = this.soul;
            this.scale.x = this.scale.y = t, this.pause.Scale = t, this.pause.y = -(this.soul.DOH / 2) / t, this.container.y = -(this.soul.DOH / 2) / t, this.back.rescale(t);
            var i = .5 * (this.W - this.field.W * PR.CELLW_SCALE * this.field.scale.x);
            this.lineLeft.x = i, this.lineRight.x = this.W - i, this.maska.x = this.field.x = i, this.maska.y = this.field.y = (e.OH - e.DOH / 2 - .13 * e.H) / t - Math.min(9, this.field.cellCountY) * this.field.cellW * this.field.scale.x, this.topSprite.y = -e.DOH / 2 / t, this.footer.y = (e.DOH / 2 + e.H) / t;
            var s = (this.lineLeft.y + this.field_down.height) * t;
            this.lineLeft.scale.y = this.lineRight.scale.y = .75 * this.oS * ((e.OH - this.lineLeft.y - this.field_down.height) / (e.H - this.lineLeft.y - this.field_down.height)), this.lineLeft.scale.y = this.lineRight.scale.y = 1 * this.oS * ((e.OH - s) / (e.H - s))
        }
    }), PR.Transmission = function(t) {
        this.soul = t, Games.Transmission.call(this, t, .09, 10557013)
    }, extend(PR.Transmission, Games.Transmission), PR.PetResque = function() {
        GodStep.Game.TRANSPARENT = !0, PR.PetResque.instance = this, PR.PetResque.instance.PLAYER = {}, GodStep.Game.call(this, "PetResque", 1052688, PR.Assets, "pr_set11", "pr_pl1", PR.DEFAULT_SETTINGS, "auto"), PR.SOUND = PR.MUSIC = !0, this.MW = 1536, this.MH = 1854
    }, extend(PR.PetResque, GodStep.Game), PR.IMAGE_PATH = "src/petresque/img/", PR.SOUND_PATH = "src/petresque/sound/", PR.DEFAULT_SETTINGS = '{"levels":[{"cellCountX":9,"cellCountY":9,"objects":[{"n":"delete","xi":0,"yi":0},{"n":"delete","xi":2,"yi":0},{"n":"delete","xi":3,"yi":0},{"n":"delete","xi":5,"yi":0},{"n":"delete","xi":6,"yi":0},{"n":"delete","xi":8,"yi":0},{"n":"delete","xi":7,"yi":0},{"n":"delete","xi":1,"yi":0},{"n":"hero","xi":4,"yi":0,"s":1},{"n":"red","xi":2,"yi":1},{"n":"red","xi":3,"yi":1},{"n":"red","xi":4,"yi":1},{"n":"red","xi":5,"yi":1},{"n":"red","xi":6,"yi":1},{"n":"red","xi":2,"yi":2},{"n":"red","xi":3,"yi":2},{"n":"red","xi":4,"yi":2},{"n":"red","xi":5,"yi":2},{"n":"red","xi":6,"yi":2},{"n":"red","xi":2,"yi":3},{"n":"red","xi":3,"yi":3},{"n":"red","xi":4,"yi":3},{"n":"red","xi":5,"yi":3},{"n":"red","xi":6,"yi":3},{"n":"yellow","xi":2,"yi":4},{"n":"yellow","xi":4,"yi":4},{"n":"yellow","xi":3,"yi":4},{"n":"yellow","xi":5,"yi":4},{"n":"yellow","xi":6,"yi":4},{"n":"yellow","xi":6,"yi":5},{"n":"yellow","xi":6,"yi":6},{"n":"yellow","xi":5,"yi":6},{"n":"yellow","xi":5,"yi":5},{"n":"yellow","xi":4,"yi":5},{"n":"yellow","xi":4,"yi":6},{"n":"yellow","xi":3,"yi":6},{"n":"yellow","xi":3,"yi":5},{"n":"yellow","xi":2,"yi":5},{"n":"yellow","xi":2,"yi":6},{"n":"blue","xi":2,"yi":7},{"n":"blue","xi":2,"yi":8},{"n":"blue","xi":3,"yi":7},{"n":"blue","xi":3,"yi":8},{"n":"blue","xi":5,"yi":7},{"n":"blue","xi":4,"yi":8},{"n":"blue","xi":4,"yi":7},{"n":"blue","xi":5,"yi":8},{"n":"blue","xi":6,"yi":7},{"n":"blue","xi":6,"yi":8},{"n":"delete","xi":0,"yi":1},{"n":"delete","xi":1,"yi":1},{"n":"delete","xi":1,"yi":2},{"n":"delete","xi":0,"yi":2},{"n":"delete","xi":0,"yi":3},{"n":"delete","xi":1,"yi":3},{"n":"delete","xi":1,"yi":4},{"n":"delete","xi":0,"yi":4},{"n":"delete","xi":0,"yi":5},{"n":"delete","xi":1,"yi":5},{"n":"delete","xi":1,"yi":6},{"n":"delete","xi":0,"yi":6},{"n":"delete","xi":0,"yi":7},{"n":"delete","xi":1,"yi":7},{"n":"delete","xi":1,"yi":8},{"n":"delete","xi":0,"yi":8},{"n":"delete","xi":7,"yi":1},{"n":"delete","xi":8,"yi":1},{"n":"delete","xi":7,"yi":2},{"n":"delete","xi":8,"yi":2},{"n":"delete","xi":8,"yi":3},{"n":"delete","xi":7,"yi":3},{"n":"delete","xi":7,"yi":4},{"n":"delete","xi":8,"yi":4},{"n":"delete","xi":8,"yi":5},{"n":"delete","xi":7,"yi":5},{"n":"delete","xi":7,"yi":6},{"n":"delete","xi":8,"yi":6},{"n":"delete","xi":8,"yi":7},{"n":"delete","xi":7,"yi":7},{"n":"delete","xi":7,"yi":8},{"n":"delete","xi":8,"yi":8}],"params":{"colors":[0,1,2,3,4],"steps":0,"isBomb":false,"isBonus":false}},{"cellCountX":9,"cellCountY":9,"objects":[{"n":"delete","xi":0,"yi":0},{"n":"delete","xi":1,"yi":0},{"n":"delete","xi":7,"yi":0},{"n":"delete","xi":8,"yi":0},{"n":"hero","xi":4,"yi":0,"s":1},{"n":"hero","xi":0,"yi":1,"s":1},{"n":"hero","xi":8,"yi":1,"s":1},{"n":"delete","xi":2,"yi":0},{"n":"delete","xi":6,"yi":0},{"n":"red","xi":3,"yi":0},{"n":"red","xi":3,"yi":1},{"n":"red","xi":5,"yi":0},{"n":"red","xi":5,"yi":1},{"n":"red","xi":0,"yi":2},{"n":"red","xi":0,"yi":3},{"n":"red","xi":8,"yi":2},{"n":"red","xi":8,"yi":3},{"n":"red","xi":6,"yi":4},{"n":"red","xi":6,"yi":5},{"n":"red","xi":6,"yi":6},{"n":"red","xi":2,"yi":4},{"n":"red","xi":2,"yi":5},{"n":"red","xi":2,"yi":6},{"n":"red","xi":0,"yi":7},{"n":"red","xi":0,"yi":8},{"n":"red","xi":8,"yi":7},{"n":"red","xi":8,"yi":8},{"n":"yellow","xi":1,"yi":2},{"n":"yellow","xi":1,"yi":3},{"n":"yellow","xi":2,"yi":3},{"n":"yellow","xi":2,"yi":2},{"n":"yellow","xi":7,"yi":3},{"n":"yellow","xi":6,"yi":3},{"n":"yellow","xi":6,"yi":2},{"n":"yellow","xi":7,"yi":2},{"n":"yellow","xi":7,"yi":1},{"n":"yellow","xi":6,"yi":1},{"n":"yellow","xi":2,"yi":1},{"n":"yellow","xi":1,"yi":1},{"n":"blue","xi":4,"yi":3},{"n":"blue","xi":4,"yi":4},{"n":"blue","xi":4,"yi":5},{"n":"blue","xi":4,"yi":6},{"n":"blue","xi":4,"yi":7},{"n":"blue","xi":4,"yi":8},{"n":"yellow","xi":6,"yi":7},{"n":"yellow","xi":7,"yi":8},{"n":"yellow","xi":7,"yi":7},{"n":"yellow","xi":6,"yi":8},{"n":"yellow","xi":5,"yi":8},{"n":"yellow","xi":5,"yi":7},{"n":"yellow","xi":1,"yi":7},{"n":"yellow","xi":2,"yi":7},{"n":"yellow","xi":3,"yi":7},{"n":"yellow","xi":3,"yi":8},{"n":"yellow","xi":2,"yi":8},{"n":"yellow","xi":1,"yi":8},{"n":"blue","xi":1,"yi":4},{"n":"blue","xi":1,"yi":5},{"n":"blue","xi":1,"yi":6},{"n":"blue","xi":7,"yi":4},{"n":"blue","xi":7,"yi":5},{"n":"blue","xi":7,"yi":6},{"n":"green","xi":8,"yi":4},{"n":"green","xi":8,"yi":5},{"n":"green","xi":8,"yi":6},{"n":"green","xi":0,"yi":4},{"n":"green","xi":0,"yi":5},{"n":"green","xi":0,"yi":6},{"n":"green","xi":3,"yi":4},{"n":"green","xi":3,"yi":5},{"n":"green","xi":3,"yi":6},{"n":"green","xi":5,"yi":4},{"n":"green","xi":5,"yi":5},{"n":"green","xi":5,"yi":6},{"n":"green","xi":5,"yi":3},{"n":"green","xi":5,"yi":2},{"n":"green","xi":3,"yi":3},{"n":"green","xi":3,"yi":2},{"n":"blue","xi":4,"yi":2},{"n":"blue","xi":4,"yi":1}],"params":{"colors":[0,1,2,3,4],"steps":0,"isBomb":false,"isBonus":false}},{"cellCountX":9,"cellCountY":9,"objects":[{"n":"delete","xi":8,"yi":0},{"n":"delete","xi":8,"yi":1},{"n":"delete","xi":8,"yi":2},{"n":"delete","xi":8,"yi":3},{"n":"delete","xi":7,"yi":3},{"n":"delete","xi":7,"yi":2},{"n":"delete","xi":7,"yi":1},{"n":"delete","xi":7,"yi":0},{"n":"hero","xi":0,"yi":0},{"n":"hero","xi":6,"yi":0},{"n":"hero","xi":3,"yi":0},{"n":"yellow","xi":0,"yi":1},{"n":"yellow","xi":0,"yi":2},{"n":"red","xi":3,"yi":1},{"n":"red","xi":3,"yi":2},{"n":"blue","xi":6,"yi":1},{"n":"blue","xi":6,"yi":2},{"n":"green","xi":4,"yi":1},{"n":"green","xi":4,"yi":2},{"n":"green","xi":5,"yi":2},{"n":"green","xi":5,"yi":1},{"n":"red","xi":0,"yi":3},{"n":"red","xi":0,"yi":4},{"n":"red","xi":1,"yi":4},{"n":"red","xi":6,"yi":3},{"n":"red","xi":6,"yi":4},{"n":"red","xi":7,"yi":4},{"n":"blue","xi":8,"yi":4},{"n":"blue","xi":8,"yi":5},{"n":"blue","xi":8,"yi":6},{"n":"yellow","xi":7,"yi":5},{"n":"yellow","xi":7,"yi":6},{"n":"yellow","xi":6,"yi":6},{"n":"yellow","xi":6,"yi":5},{"n":"red","xi":6,"yi":7},{"n":"red","xi":5,"yi":7},{"n":"red","xi":4,"yi":7},{"n":"red","xi":4,"yi":8},{"n":"red","xi":3,"yi":8},{"n":"red","xi":3,"yi":7},{"n":"yellow","xi":5,"yi":8},{"n":"yellow","xi":6,"yi":8},{"n":"blue","xi":5,"yi":3},{"n":"blue","xi":5,"yi":4},{"n":"blue","xi":4,"yi":3},{"n":"blue","xi":5,"yi":5},{"n":"yellow","xi":3,"yi":3},{"n":"yellow","xi":3,"yi":4},{"n":"yellow","xi":4,"yi":4},{"n":"yellow","xi":4,"yi":5},{"n":"green","xi":5,"yi":6},{"n":"green","xi":4,"yi":6},{"n":"green","xi":3,"yi":6},{"n":"blue","xi":3,"yi":5},{"n":"blue","xi":2,"yi":5},{"n":"yellow","xi":2,"yi":4},{"n":"green","xi":1,"yi":5},{"n":"green","xi":0,"yi":5},{"n":"delete","xi":7,"yi":7},{"n":"delete","xi":7,"yi":8},{"n":"delete","xi":8,"yi":8},{"n":"delete","xi":8,"yi":7},{"n":"yellow","xi":0,"yi":6},{"n":"yellow","xi":0,"yi":7},{"n":"yellow","xi":0,"yi":8},{"n":"red","xi":1,"yi":6},{"n":"red","xi":1,"yi":7},{"n":"red","xi":1,"yi":8},{"n":"blue","xi":2,"yi":8},{"n":"blue","xi":2,"yi":7},{"n":"green","xi":2,"yi":6},{"n":"delete","xi":1,"yi":0},{"n":"delete","xi":1,"yi":1},{"n":"delete","xi":1,"yi":3},{"n":"delete","xi":1,"yi":2},{"n":"delete","xi":2,"yi":3},{"n":"delete","xi":2,"yi":2},{"n":"delete","xi":2,"yi":1},{"n":"delete","xi":2,"yi":0}],"params":{"colors":[0,1,2,4],"steps":0}},{"cellCountX":9,"cellCountY":9,"objects":[{"n":"delete","xi":4,"yi":0},{"n":"delete","xi":3,"yi":0},{"n":"delete","xi":3,"yi":1},{"n":"delete","xi":2,"yi":0},{"n":"delete","xi":2,"yi":1},{"n":"delete","xi":2,"yi":2},{"n":"delete","xi":1,"yi":0},{"n":"delete","xi":1,"yi":1},{"n":"delete","xi":1,"yi":2},{"n":"delete","xi":1,"yi":3},{"n":"delete","xi":0,"yi":0},{"n":"delete","xi":0,"yi":1},{"n":"delete","xi":0,"yi":2},{"n":"delete","xi":0,"yi":3},{"n":"delete","xi":0,"yi":4},{"n":"delete","xi":4,"yi":8},{"n":"delete","xi":5,"yi":8},{"n":"delete","xi":7,"yi":8},{"n":"delete","xi":6,"yi":8},{"n":"delete","xi":8,"yi":8},{"n":"delete","xi":5,"yi":7},{"n":"delete","xi":6,"yi":7},{"n":"delete","xi":7,"yi":7},{"n":"delete","xi":8,"yi":7},{"n":"delete","xi":6,"yi":6},{"n":"delete","xi":7,"yi":6},{"n":"delete","xi":8,"yi":6},{"n":"delete","xi":7,"yi":5},{"n":"delete","xi":8,"yi":5},{"n":"delete","xi":8,"yi":4},{"n":"hero","xi":5,"yi":0},{"n":"hero","xi":7,"yi":0},{"n":"hero","xi":8,"yi":0},{"n":"delete","xi":6,"yi":0},{"n":"red","xi":8,"yi":1},{"n":"red","xi":8,"yi":2},{"n":"yellow","xi":7,"yi":1},{"n":"yellow","xi":7,"yi":2},{"n":"blue","xi":6,"yi":1},{"n":"blue","xi":6,"yi":2},{"n":"red","xi":4,"yi":1},{"n":"red","xi":5,"yi":1},{"n":"red","xi":5,"yi":2},{"n":"yellow","xi":4,"yi":2},{"n":"yellow","xi":4,"yi":3},{"n":"blue","xi":3,"yi":2},{"n":"blue","xi":3,"yi":3},{"n":"blue","xi":2,"yi":3},{"n":"green","xi":5,"yi":3},{"n":"green","xi":6,"yi":3},{"n":"green","xi":6,"yi":4},{"n":"green","xi":6,"yi":5},{"n":"green","xi":5,"yi":6},{"n":"green","xi":5,"yi":5},{"n":"green","xi":5,"yi":4},{"n":"blue","xi":8,"yi":3},{"n":"blue","xi":7,"yi":3},{"n":"blue","xi":7,"yi":4},{"n":"red","xi":0,"yi":7},{"n":"red","xi":1,"yi":7},{"n":"red","xi":1,"yi":8},{"n":"red","xi":2,"yi":5},{"n":"red","xi":2,"yi":6},{"n":"red","xi":3,"yi":8},{"n":"red","xi":3,"yi":7},{"n":"red","xi":0,"yi":5},{"n":"yellow","xi":2,"yi":7},{"n":"yellow","xi":2,"yi":8},{"n":"yellow","xi":0,"yi":8},{"n":"yellow","xi":0,"yi":6},{"n":"yellow","xi":1,"yi":6},{"n":"yellow","xi":1,"yi":5},{"n":"yellow","xi":1,"yi":4},{"n":"yellow","xi":4,"yi":7},{"n":"yellow","xi":4,"yi":6},{"n":"blue","xi":3,"yi":6},{"n":"blue","xi":3,"yi":5},{"n":"blue","xi":4,"yi":5},{"n":"blue","xi":4,"yi":4},{"n":"yellow","xi":3,"yi":4},{"n":"yellow","xi":2,"yi":4}],"params":{"colors":[0,1,2,4],"steps":0}},{"cellCountX":9,"cellCountY":9,"objects":[{"n":"delete","xi":4,"yi":0},{"n":"delete","xi":3,"yi":0},{"n":"delete","xi":3,"yi":1},{"n":"delete","xi":2,"yi":0},{"n":"delete","xi":2,"yi":1},{"n":"delete","xi":2,"yi":2},{"n":"delete","xi":1,"yi":0},{"n":"delete","xi":1,"yi":1},{"n":"delete","xi":1,"yi":2},{"n":"delete","xi":1,"yi":3},{"n":"delete","xi":0,"yi":0},{"n":"delete","xi":0,"yi":1},{"n":"delete","xi":0,"yi":2},{"n":"delete","xi":0,"yi":3},{"n":"delete","xi":6,"yi":0},{"n":"delete","xi":5,"yi":0},{"n":"delete","xi":6,"yi":1},{"n":"delete","xi":5,"yi":1},{"n":"delete","xi":4,"yi":1},{"n":"delete","xi":6,"yi":2},{"n":"delete","xi":6,"yi":3},{"n":"delete","xi":5,"yi":3},{"n":"delete","xi":5,"yi":2},{"n":"delete","xi":4,"yi":2},{"n":"delete","xi":4,"yi":3},{"n":"delete","xi":2,"yi":3},{"n":"delete","xi":3,"yi":2},{"n":"delete","xi":3,"yi":3},{"n":"yellow","xi":7,"yi":1},{"n":"yellow","xi":7,"yi":3},{"n":"yellow","xi":7,"yi":4},{"n":"yellow","xi":6,"yi":4},{"n":"yellow","xi":3,"yi":4},{"n":"yellow","xi":2,"yi":4},{"n":"yellow","xi":0,"yi":4},{"n":"yellow","xi":1,"yi":4},{"n":"yellow","xi":4,"yi":4},{"n":"yellow","xi":1,"yi":5},{"n":"yellow","xi":2,"yi":5},{"n":"yellow","xi":0,"yi":5},{"n":"yellow","xi":3,"yi":5},{"n":"yellow","xi":4,"yi":5},{"n":"yellow","xi":5,"yi":5},{"n":"yellow","xi":7,"yi":6},{"n":"yellow","xi":6,"yi":6},{"n":"yellow","xi":3,"yi":6},{"n":"yellow","xi":0,"yi":6},{"n":"yellow","xi":1,"yi":6},{"n":"yellow","xi":2,"yi":6},{"n":"yellow","xi":4,"yi":6},{"n":"yellow","xi":5,"yi":6},{"n":"yellow","xi":7,"yi":8},{"n":"yellow","xi":7,"yi":7},{"n":"yellow","xi":6,"yi":8},{"n":"yellow","xi":4,"yi":8},{"n":"yellow","xi":4,"yi":7},{"n":"yellow","xi":5,"yi":8},{"n":"yellow","xi":5,"yi":7},{"n":"yellow","xi":3,"yi":7},{"n":"yellow","xi":3,"yi":8},{"n":"yellow","xi":2,"yi":8},{"n":"yellow","xi":2,"yi":7},{"n":"yellow","xi":1,"yi":8},{"n":"yellow","xi":1,"yi":7},{"n":"yellow","xi":0,"yi":7},{"n":"yellow","xi":7,"yi":5},{"n":"yellow","xi":6,"yi":7},{"n":"yellow","xi":7,"yi":2},{"n":"hero","xi":8,"yi":0,"s":1},{"n":"yellow","xi":8,"yi":5},{"n":"blue","xi":8,"yi":1},{"n":"yellow","xi":5,"yi":4},{"n":"yellow","xi":6,"yi":5},{"n":"yellow","xi":8,"yi":6},{"n":"yellow","xi":8,"yi":8},{"n":"yellow","xi":8,"yi":7},{"n":"bomb","xi":0,"yi":8},{"n":"yellow","xi":8,"yi":2},{"n":"yellow","xi":8,"yi":3},{"n":"yellow","xi":8,"yi":4},{"n":"delete","xi":7,"yi":0}],"params":{"colors":[0,2,4],"steps":0,"isBomb":false,"isBonus":false}},{"cellCountX":9,"cellCountY":9,"objects":[{"n":"yellow","xi":3,"yi":4},{"n":"yellow","xi":2,"yi":4},{"n":"yellow","xi":0,"yi":4},{"n":"yellow","xi":1,"yi":4},{"n":"yellow","xi":4,"yi":4},{"n":"yellow","xi":1,"yi":5},{"n":"yellow","xi":0,"yi":5},{"n":"yellow","xi":3,"yi":5},{"n":"yellow","xi":4,"yi":5},{"n":"yellow","xi":3,"yi":6},{"n":"yellow","xi":4,"yi":6},{"n":"yellow","xi":7,"yi":8},{"n":"yellow","xi":5,"yi":8},{"n":"yellow","xi":3,"yi":7},{"n":"blue","xi":8,"yi":4},{"n":"hero","xi":0,"yi":7},{"n":"hero","xi":4,"yi":7},{"n":"hero","xi":8,"yi":7},{"n":"delete","xi":2,"yi":0},{"n":"delete","xi":1,"yi":0},{"n":"delete","xi":0,"yi":0},{"n":"delete","xi":6,"yi":0},{"n":"delete","xi":7,"yi":0},{"n":"delete","xi":8,"yi":0},{"n":"delete","xi":0,"yi":1},{"n":"delete","xi":1,"yi":1},{"n":"delete","xi":7,"yi":1},{"n":"delete","xi":8,"yi":1},{"n":"delete","xi":0,"yi":2},{"n":"delete","xi":8,"yi":2},{"n":"red","xi":3,"yi":0},{"n":"red","xi":3,"yi":1},{"n":"red","xi":2,"yi":1},{"n":"red","xi":1,"yi":2},{"n":"red","xi":0,"yi":3},{"n":"yellow","xi":2,"yi":2},{"n":"yellow","xi":3,"yi":2},{"n":"yellow","xi":3,"yi":3},{"n":"yellow","xi":2,"yi":3},{"n":"yellow","xi":1,"yi":3},{"n":"red","xi":0,"yi":6},{"n":"red","xi":1,"yi":7},{"n":"red","xi":2,"yi":8},{"n":"blue","xi":0,"yi":8},{"n":"yellow","xi":1,"yi":6},{"n":"yellow","xi":2,"yi":6},{"n":"yellow","xi":2,"yi":7},{"n":"yellow","xi":1,"yi":8},{"n":"blue","xi":4,"yi":8},{"n":"blue","xi":8,"yi":8},{"n":"green","xi":8,"yi":6},{"n":"green","xi":8,"yi":5},{"n":"green","xi":7,"yi":5},{"n":"green","xi":7,"yi":6},{"n":"green","xi":6,"yi":5},{"n":"green","xi":6,"yi":6},{"n":"green","xi":5,"yi":6},{"n":"green","xi":5,"yi":5},{"n":"green","xi":5,"yi":4},{"n":"blue","xi":6,"yi":8},{"n":"blue","xi":6,"yi":7},{"n":"blue","xi":7,"yi":7},{"n":"green","xi":5,"yi":7},{"n":"blue","xi":8,"yi":3},{"n":"red","xi":7,"yi":4},{"n":"red","xi":6,"yi":4},{"n":"red","xi":6,"yi":3},{"n":"red","xi":7,"yi":3},{"n":"red","xi":7,"yi":2},{"n":"red","xi":6,"yi":2},{"n":"red","xi":6,"yi":1},{"n":"red","xi":5,"yi":0},{"n":"red","xi":5,"yi":1},{"n":"red","xi":5,"yi":3},{"n":"green","xi":4,"yi":3},{"n":"green","xi":4,"yi":2},{"n":"blue","xi":4,"yi":1},{"n":"blue","xi":4,"yi":0},{"n":"blue","xi":3,"yi":8},{"n":"red","xi":5,"yi":2},{"n":"yellow","xi":2,"yi":5}],"params":{"colors":[0,1,2,4],"steps":0}},{"cellCountX":9,"cellCountY":20,"objects":[{"n":"delete","xi":2,"yi":3},{"n":"delete","xi":7,"yi":4},{"n":"delete","xi":7,"yi":3},{"n":"hero","xi":7,"yi":2,"s":1},{"n":"hero","xi":2,"yi":2,"s":1},{"n":"hero","xi":0,"yi":1,"s":1},{"n":"delete","xi":0,"yi":0},{"n":"delete","xi":1,"yi":0},{"n":"delete","xi":7,"yi":0},{"n":"delete","xi":8,"yi":0},{"n":"hero","xi":4,"yi":0,"s":1},{"n":"bomb","xi":0,"yi":5},{"n":"bomb","xi":8,"yi":5},{"n":"red","xi":2,"yi":0},{"n":"red","xi":2,"yi":1},{"n":"red","xi":1,"yi":1},{"n":"red","xi":3,"yi":0},{"n":"red","xi":3,"yi":1},{"n":"red","xi":4,"yi":1},{"n":"red","xi":5,"yi":1},{"n":"red","xi":5,"yi":0},{"n":"red","xi":6,"yi":0},{"n":"red","xi":6,"yi":1},{"n":"red","xi":7,"yi":1},{"n":"hero","xi":8,"yi":1,"s":1},{"n":"blue","xi":0,"yi":9},{"n":"blue","xi":1,"yi":9},{"n":"blue","xi":1,"yi":10},{"n":"blue","xi":3,"yi":9},{"n":"blue","xi":2,"yi":9},{"n":"blue","xi":0,"yi":10},{"n":"bomb","xi":2,"yi":5},{"n":"bomb","xi":6,"yi":5},{"n":"yellow","xi":8,"yi":19},{"n":"yellow","xi":7,"yi":19},{"n":"yellow","xi":5,"yi":19},{"n":"yellow","xi":6,"yi":19},{"n":"yellow","xi":6,"yi":18},{"n":"yellow","xi":7,"yi":18},{"n":"yellow","xi":8,"yi":18},{"n":"green","xi":0,"yi":19},{"n":"green","xi":1,"yi":19},{"n":"green","xi":2,"yi":19},{"n":"green","xi":2,"yi":18},{"n":"green","xi":1,"yi":18},{"n":"red","xi":3,"yi":19},{"n":"red","xi":4,"yi":19},{"n":"bomb","xi":0,"yi":14},{"n":"bomb","xi":4,"yi":14},{"n":"bomb","xi":8,"yi":14},{"n":"bomb","xi":2,"yi":10},{"n":"bomb","xi":4,"yi":10}],"params":{"colors":[0,1,2,4],"steps":0,"isBomb":false,"isBonus":false}},{"cellCountX":9,"cellCountY":9,"objects":[{"n":"hero","xi":7,"yi":2},{"n":"hero","xi":4,"yi":0},{"n":"hero","xi":1,"yi":2},{"n":"yellow","xi":3,"yi":0},{"n":"yellow","xi":3,"yi":1},{"n":"yellow","xi":4,"yi":1},{"n":"yellow","xi":5,"yi":1},{"n":"yellow","xi":5,"yi":0},{"n":"blue","xi":2,"yi":1},{"n":"blue","xi":2,"yi":2},{"n":"blue","xi":2,"yi":3},{"n":"blue","xi":1,"yi":3},{"n":"blue","xi":3,"yi":3},{"n":"blue","xi":3,"yi":2},{"n":"blue","xi":4,"yi":2},{"n":"blue","xi":5,"yi":2},{"n":"blue","xi":6,"yi":2},{"n":"blue","xi":6,"yi":1},{"n":"blue","xi":7,"yi":3},{"n":"blue","xi":8,"yi":3},{"n":"blue","xi":0,"yi":3},{"n":"blue","xi":6,"yi":3},{"n":"blue","xi":5,"yi":3},{"n":"delete","xi":8,"yi":0},{"n":"delete","xi":7,"yi":0},{"n":"delete","xi":0,"yi":0},{"n":"delete","xi":1,"yi":0},{"n":"yellow","xi":0,"yi":8},{"n":"yellow","xi":1,"yi":8},{"n":"yellow","xi":2,"yi":8},{"n":"yellow","xi":2,"yi":7},{"n":"yellow","xi":1,"yi":7},{"n":"yellow","xi":0,"yi":7},{"n":"red","xi":6,"yi":8},{"n":"red","xi":6,"yi":7},{"n":"red","xi":7,"yi":7},{"n":"red","xi":8,"yi":7},{"n":"red","xi":8,"yi":8},{"n":"red","xi":7,"yi":8}],"params":{"colors":[0,1,2,4],"steps":26}},{"cellCountX":9,"cellCountY":11,"objects":[{"n":"delete","xi":8,"yi":0},{"n":"delete","xi":7,"yi":0},{"n":"delete","xi":7,"yi":1},{"n":"delete","xi":8,"yi":1},{"n":"delete","xi":8,"yi":2},{"n":"delete","xi":7,"yi":3},{"n":"delete","xi":8,"yi":3},{"n":"delete","xi":8,"yi":4},{"n":"delete","xi":7,"yi":4},{"n":"delete","xi":8,"yi":5},{"n":"delete","xi":8,"yi":6},{"n":"delete","xi":7,"yi":6},{"n":"delete","xi":7,"yi":7},{"n":"delete","xi":8,"yi":7},{"n":"delete","xi":8,"yi":8},{"n":"delete","xi":7,"yi":8},{"n":"hero","xi":7,"yi":2},{"n":"hero","xi":7,"yi":5},{"n":"red","xi":6,"yi":1},{"n":"yellow","xi":6,"yi":2},{"n":"green","xi":6,"yi":4},{"n":"red","xi":6,"yi":5},{"n":"delete","xi":6,"yi":6},{"n":"delete","xi":6,"yi":3},{"n":"delete","xi":5,"yi":6},{"n":"delete","xi":6,"yi":7},{"n":"delete","xi":6,"yi":8},{"n":"delete","xi":5,"yi":8},{"n":"delete","xi":5,"yi":7}],"params":{"colors":[0,1,2,4],"steps":0}},{"cellCountX":9,"cellCountY":9,"objects":[{"n":"delete","xi":0,"yi":1},{"n":"delete","xi":8,"yi":1},{"n":"delete","xi":8,"yi":8},{"n":"delete","xi":8,"yi":7},{"n":"delete","xi":8,"yi":6},{"n":"delete","xi":8,"yi":5},{"n":"delete","xi":0,"yi":5},{"n":"delete","xi":0,"yi":6},{"n":"delete","xi":0,"yi":7},{"n":"delete","xi":0,"yi":8},{"n":"delete","xi":3,"yi":0},{"n":"delete","xi":4,"yi":0},{"n":"delete","xi":5,"yi":0},{"n":"delete","xi":3,"yi":4},{"n":"delete","xi":3,"yi":3},{"n":"delete","xi":6,"yi":3},{"n":"delete","xi":6,"yi":4},{"n":"hero","xi":4,"yi":2,"s":1},{"n":"hero","xi":2,"yi":2,"s":1},{"n":"hero","xi":7,"yi":2,"s":1},{"n":"green","xi":4,"yi":7},{"n":"green","xi":4,"yi":6},{"n":"green","xi":4,"yi":5},{"n":"green","xi":4,"yi":3},{"n":"green","xi":7,"yi":8},{"n":"green","xi":7,"yi":7},{"n":"green","xi":6,"yi":7},{"n":"green","xi":6,"yi":6},{"n":"green","xi":6,"yi":5},{"n":"green","xi":7,"yi":5},{"n":"green","xi":1,"yi":8},{"n":"green","xi":1,"yi":7},{"n":"green","xi":2,"yi":7},{"n":"green","xi":2,"yi":6},{"n":"green","xi":2,"yi":4},{"n":"green","xi":2,"yi":3},{"n":"green","xi":1,"yi":3},{"n":"green","xi":0,"yi":3},{"n":"green","xi":0,"yi":2},{"n":"green","xi":8,"yi":2},{"n":"green","xi":6,"yi":0},{"n":"green","xi":2,"yi":0},{"n":"blue","xi":7,"yi":0},{"n":"blue","xi":6,"yi":1},{"n":"blue","xi":5,"yi":1},{"n":"blue","xi":5,"yi":2},{"n":"blue","xi":0,"yi":0},{"n":"blue","xi":1,"yi":1},{"n":"blue","xi":1,"yi":2},{"n":"blue","xi":2,"yi":1},{"n":"blue","xi":3,"yi":1},{"n":"blue","xi":0,"yi":4},{"n":"blue","xi":1,"yi":4},{"n":"blue","xi":1,"yi":5},{"n":"blue","xi":7,"yi":6},{"n":"blue","xi":5,"yi":5},{"n":"blue","xi":5,"yi":6},{"n":"blue","xi":5,"yi":7},{"n":"blue","xi":5,"yi":8},{"n":"yellow","xi":6,"yi":8},{"n":"blue","xi":2,"yi":8},{"n":"blue","xi":3,"yi":8},{"n":"blue","xi":3,"yi":6},{"n":"blue","xi":3,"yi":5},{"n":"yellow","xi":2,"yi":5},{"n":"yellow","xi":1,"yi":6},{"n":"purple","xi":4,"yi":4},{"n":"yellow","xi":7,"yi":4},{"n":"yellow","xi":7,"yi":3},{"n":"yellow","xi":8,"yi":3},{"n":"yellow","xi":5,"yi":3},{"n":"yellow","xi":5,"yi":4},{"n":"yellow","xi":6,"yi":2},{"n":"yellow","xi":7,"yi":1},{"n":"yellow","xi":3,"yi":2},{"n":"yellow","xi":1,"yi":0},{"n":"purple","xi":4,"yi":1},{"n":"green","xi":4,"yi":8},{"n":"blue","xi":3,"yi":7}],"params":{"colors":[0,1,2,4],"steps":20,"isBomb":false,"isBonus":false}},{"cellCountX":9,"cellCountY":9,"objects":[{"n":"delete","xi":0,"yi":0},{"n":"delete","xi":4,"yi":0},{"n":"delete","xi":8,"yi":0},{"n":"delete","xi":0,"yi":2},{"n":"delete","xi":0,"yi":4},{"n":"delete","xi":8,"yi":2},{"n":"delete","xi":8,"yi":4},{"n":"hero","xi":1,"yi":0},{"n":"hero","xi":3,"yi":0},{"n":"hero","xi":5,"yi":0},{"n":"hero","xi":7,"yi":0},{"n":"bomb","xi":2,"yi":0},{"n":"bomb","xi":6,"yi":0},{"n":"yellow","xi":8,"yi":8},{"n":"yellow","xi":7,"yi":8},{"n":"yellow","xi":7,"yi":7},{"n":"blue","xi":0,"yi":8},{"n":"blue","xi":1,"yi":8},{"n":"blue","xi":2,"yi":8}],"params":{"colors":[0,1,2,3,4],"steps":25,"isBomb":true,"isBonus":false}},{"cellCountX":9,"cellCountY":8,"objects":[{"n":"hero","xi":2,"yi":0,"s":2},{"n":"hero","xi":6,"yi":0,"s":2},{"n":"delete","xi":4,"yi":0},{"n":"delete","xi":4,"yi":1},{"n":"delete","xi":4,"yi":2},{"n":"delete","xi":4,"yi":3},{"n":"delete","xi":4,"yi":4},{"n":"delete","xi":4,"yi":5},{"n":"delete","xi":4,"yi":6},{"n":"delete","xi":4,"yi":7},{"n":"s_bonus","xi":1,"yi":0,"s":1},{"n":"s_bonus","xi":7,"yi":0,"s":2},{"n":"red","xi":0,"yi":1},{"n":"red","xi":2,"yi":1},{"n":"red","xi":1,"yi":2},{"n":"red","xi":0,"yi":3},{"n":"red","xi":2,"yi":3},{"n":"red","xi":3,"yi":2},{"n":"red","xi":1,"yi":4},{"n":"red","xi":0,"yi":5},{"n":"red","xi":2,"yi":5},{"n":"red","xi":3,"yi":4},{"n":"red","xi":0,"yi":7},{"n":"red","xi":1,"yi":6},{"n":"red","xi":2,"yi":7},{"n":"red","xi":3,"yi":6},{"n":"yellow","xi":5,"yi":1},{"n":"yellow","xi":7,"yi":1},{"n":"yellow","xi":8,"yi":2},{"n":"yellow","xi":6,"yi":2},{"n":"yellow","xi":5,"yi":3},{"n":"yellow","xi":7,"yi":3},{"n":"yellow","xi":8,"yi":4},{"n":"yellow","xi":6,"yi":4},{"n":"yellow","xi":5,"yi":5},{"n":"yellow","xi":7,"yi":5},{"n":"yellow","xi":8,"yi":6},{"n":"yellow","xi":7,"yi":7},{"n":"yellow","xi":6,"yi":6},{"n":"yellow","xi":5,"yi":7},{"n":"yellow","xi":1,"yi":1},{"n":"yellow","xi":3,"yi":1},{"n":"yellow","xi":2,"yi":2},{"n":"yellow","xi":0,"yi":2},{"n":"yellow","xi":1,"yi":3},{"n":"yellow","xi":3,"yi":3},{"n":"yellow","xi":2,"yi":4},{"n":"yellow","xi":0,"yi":4},{"n":"yellow","xi":1,"yi":5},{"n":"yellow","xi":0,"yi":6},{"n":"yellow","xi":1,"yi":7},{"n":"yellow","xi":2,"yi":6},{"n":"yellow","xi":3,"yi":5},{"n":"yellow","xi":3,"yi":7},{"n":"red","xi":5,"yi":2},{"n":"red","xi":6,"yi":1},{"n":"red","xi":8,"yi":1},{"n":"red","xi":7,"yi":2},{"n":"red","xi":8,"yi":3},{"n":"red","xi":6,"yi":3},{"n":"red","xi":5,"yi":4},{"n":"red","xi":7,"yi":4},{"n":"red","xi":6,"yi":5},{"n":"red","xi":8,"yi":5},{"n":"red","xi":7,"yi":6},{"n":"red","xi":5,"yi":6},{"n":"red","xi":6,"yi":7},{"n":"red","xi":8,"yi":7},{"n":"delete","xi":5,"yi":0},{"n":"delete","xi":8,"yi":0},{"n":"delete","xi":0,"yi":0},{"n":"delete","xi":3,"yi":0}],"params":{"colors":[0,1,2,3,4],"steps":0,"isBomb":false,"isBonus":false}},{"cellCountX":9,"cellCountY":12,"objects":[{"n":"hero","xi":1,"yi":2,"s":2},{"n":"hero","xi":7,"yi":2,"s":2},{"n":"hero","xi":4,"yi":0,"s":2},{"n":"delete","xi":1,"yi":3},{"n":"delete","xi":1,"yi":1},{"n":"s_bonus","xi":3,"yi":2,"s":2},{"n":"delete","xi":7,"yi":3},{"n":"delete","xi":7,"yi":1},{"n":"yellow","xi":2,"yi":11},{"n":"yellow","xi":3,"yi":10},{"n":"yellow","xi":4,"yi":9},{"n":"yellow","xi":4,"yi":11},{"n":"yellow","xi":5,"yi":10},{"n":"yellow","xi":6,"yi":9},{"n":"yellow","xi":6,"yi":11},{"n":"yellow","xi":7,"yi":10},{"n":"yellow","xi":8,"yi":11},{"n":"yellow","xi":8,"yi":9},{"n":"red","xi":0,"yi":10},{"n":"red","xi":1,"yi":9},{"n":"red","xi":1,"yi":11},{"n":"red","xi":3,"yi":11},{"n":"red","xi":4,"yi":10},{"n":"red","xi":5,"yi":9},{"n":"red","xi":5,"yi":11},{"n":"red","xi":6,"yi":10},{"n":"red","xi":7,"yi":11},{"n":"red","xi":8,"yi":10},{"n":"red","xi":7,"yi":9},{"n":"yellow","xi":1,"yi":8},{"n":"yellow","xi":2,"yi":7},{"n":"yellow","xi":0,"yi":7},{"n":"yellow","xi":3,"yi":8},{"n":"yellow","xi":5,"yi":8},{"n":"yellow","xi":6,"yi":7},{"n":"yellow","xi":7,"yi":8},{"n":"yellow","xi":7,"yi":7},{"n":"red","xi":0,"yi":8},{"n":"red","xi":1,"yi":7},{"n":"red","xi":2,"yi":8},{"n":"red","xi":4,"yi":8},{"n":"red","xi":5,"yi":7},{"n":"red","xi":6,"yi":8},{"n":"red","xi":8,"yi":7},{"n":"red","xi":8,"yi":8},{"n":"purple","xi":4,"yi":6},{"n":"purple","xi":5,"yi":6},{"n":"purple","xi":6,"yi":6},{"n":"purple","xi":7,"yi":6},{"n":"green","xi":8,"yi":6},{"n":"green","xi":8,"yi":5},{"n":"green","xi":8,"yi":1},{"n":"green","xi":8,"yi":0},{"n":"yellow","xi":7,"yi":4},{"n":"yellow","xi":6,"yi":4},{"n":"yellow","xi":5,"yi":4},{"n":"yellow","xi":4,"yi":4},{"n":"yellow","xi":6,"yi":2},{"n":"yellow","xi":5,"yi":2},{"n":"blue","xi":5,"yi":1},{"n":"blue","xi":6,"yi":1},{"n":"blue","xi":5,"yi":0},{"n":"blue","xi":6,"yi":0},{"n":"blue","xi":7,"yi":0},{"n":"red","xi":0,"yi":2},{"n":"red","xi":2,"yi":2},{"n":"red","xi":3,"yi":1},{"n":"red","xi":2,"yi":1},{"n":"red","xi":0,"yi":1},{"n":"yellow","xi":0,"yi":0},{"n":"yellow","xi":1,"yi":0},{"n":"yellow","xi":2,"yi":0},{"n":"yellow","xi":3,"yi":0},{"n":"delete","xi":4,"yi":1},{"n":"yellow","xi":4,"yi":2},{"n":"yellow","xi":4,"yi":7},{"n":"yellow","xi":1,"yi":10},{"n":"red","xi":2,"yi":10},{"n":"red","xi":3,"yi":7},{"n":"bomb","xi":0,"yi":11}],"params":{"colors":[0,1,2,3,4],"steps":0,"isBomb":false,"isBonus":false}},{"cellCountX":9,"cellCountY":9,"objects":[{"n":"block","xi":4,"yi":0},{"n":"block","xi":4,"yi":1},{"n":"block","xi":4,"yi":2},{"n":"block","xi":4,"yi":3},{"n":"block","xi":4,"yi":4},{"n":"block","xi":4,"yi":5},{"n":"block","xi":4,"yi":8},{"n":"block","xi":5,"yi":8},{"n":"block","xi":6,"yi":8},{"n":"block","xi":7,"yi":8},{"n":"block","xi":8,"yi":8},{"n":"hero","xi":0,"yi":0,"s":1},{"n":"hero","xi":2,"yi":0,"s":1},{"n":"hero","xi":6,"yi":0,"s":1},{"n":"hero","xi":8,"yi":0,"s":1}],"params":{"colors":[0,1,2],"steps":0,"isBomb":true,"isBonus":true}},{"cellCountX":9,"cellCountY":12,"objects":[{"n":"hero","xi":8,"yi":0,"s":1},{"n":"block","xi":8,"yi":1},{"n":"block","xi":8,"yi":2},{"n":"block","xi":7,"yi":2},{"n":"block","xi":7,"yi":3},{"n":"block","xi":6,"yi":3},{"n":"block","xi":6,"yi":4},{"n":"block","xi":5,"yi":4},{"n":"block","xi":5,"yi":5},{"n":"block","xi":4,"yi":5},{"n":"block","xi":4,"yi":6},{"n":"block","xi":3,"yi":6},{"n":"block","xi":3,"yi":7},{"n":"block","xi":2,"yi":7},{"n":"hero","xi":6,"yi":2,"s":1},{"n":"hero","xi":4,"yi":4,"s":1},{"n":"bomb","xi":8,"yi":3},{"n":"bomb","xi":8,"yi":7},{"n":"bomb","xi":2,"yi":6}],"params":{"colors":[0,1,2],"steps":0,"isBomb":false,"isBonus":true}},{"cellCountX":9,"cellCountY":9,"objects":[{"n":"hero","xi":4,"yi":4,"s":1},{"n":"dirt","xi":3,"yi":4},{"n":"dirt","xi":3,"yi":3},{"n":"dirt","xi":4,"yi":3},{"n":"dirt","xi":5,"yi":3},{"n":"dirt","xi":5,"yi":4},{"n":"dirt","xi":5,"yi":5},{"n":"dirt","xi":4,"yi":5},{"n":"dirt","xi":3,"yi":5}],"params":{"colors":[0,1,2,3],"steps":12,"isBomb":true,"isBonus":true}},{"cellCountX":9,"cellCountY":9,"objects":[{"n":"dirt","xi":0,"yi":7},{"n":"dirt","xi":0,"yi":8},{"n":"dirt","xi":2,"yi":8},{"n":"dirt","xi":3,"yi":7},{"n":"dirt","xi":4,"yi":8},{"n":"dirt","xi":3,"yi":8},{"n":"dirt","xi":6,"yi":7},{"n":"dirt","xi":6,"yi":6},{"n":"dirt","xi":7,"yi":7},{"n":"dirt","xi":8,"yi":7},{"n":"dirt","xi":7,"yi":8},{"n":"dirt","xi":5,"yi":8},{"n":"dirt","xi":1,"yi":6},{"n":"delete","xi":0,"yi":4},{"n":"delete","xi":0,"yi":3},{"n":"delete","xi":0,"yi":2},{"n":"delete","xi":8,"yi":2},{"n":"delete","xi":8,"yi":3},{"n":"delete","xi":8,"yi":4},{"n":"bomb","xi":2,"yi":3},{"n":"bomb","xi":5,"yi":2},{"n":"hero","xi":2,"yi":1,"s":1},{"n":"hero","xi":6,"yi":1,"s":1},{"n":"delete","xi":0,"yi":1},{"n":"delete","xi":8,"yi":1}],"params":{"colors":[0,1,2,3],"steps":23,"isBomb":true,"isBonus":true}},{"cellCountX":9,"cellCountY":9,"objects":[{"n":"delete","xi":2,"yi":0},{"n":"delete","xi":1,"yi":0},{"n":"delete","xi":0,"yi":0},{"n":"delete","xi":6,"yi":0},{"n":"delete","xi":7,"yi":0},{"n":"delete","xi":8,"yi":0},{"n":"delete","xi":1,"yi":1},{"n":"delete","xi":0,"yi":1},{"n":"delete","xi":7,"yi":1},{"n":"delete","xi":8,"yi":1},{"n":"delete","xi":0,"yi":2},{"n":"delete","xi":8,"yi":2},{"n":"delete","xi":6,"yi":8},{"n":"block","xi":4,"yi":0},{"n":"block","xi":4,"yi":1},{"n":"block","xi":4,"yi":2},{"n":"block","xi":4,"yi":4},{"n":"block","xi":4,"yi":3},{"n":"hero","xi":5,"yi":2,"s":1},{"n":"hero","xi":6,"yi":2,"s":1},{"n":"delete","xi":5,"yi":8},{"n":"delete","xi":7,"yi":8},{"n":"delete","xi":8,"yi":8},{"n":"delete","xi":8,"yi":7},{"n":"delete","xi":8,"yi":6},{"n":"delete","xi":7,"yi":7},{"n":"delete","xi":6,"yi":7},{"n":"red","xi":0,"yi":8},{"n":"red","xi":0,"yi":7},{"n":"red","xi":0,"yi":6},{"n":"yellow","xi":1,"yi":6},{"n":"yellow","xi":1,"yi":7},{"n":"yellow","xi":1,"yi":8},{"n":"delete","xi":0,"yi":3},{"n":"delete","xi":0,"yi":4},{"n":"delete","xi":0,"yi":5},{"n":"delete","xi":8,"yi":3},{"n":"delete","xi":8,"yi":4},{"n":"delete","xi":8,"yi":5},{"n":"red","xi":2,"yi":6},{"n":"red","xi":2,"yi":7},{"n":"red","xi":2,"yi":8},{"n":"yellow","xi":3,"yi":6},{"n":"yellow","xi":3,"yi":7},{"n":"yellow","xi":3,"yi":8},{"n":"red","xi":4,"yi":8},{"n":"red","xi":4,"yi":7},{"n":"red","xi":4,"yi":6},{"n":"yellow","xi":5,"yi":7},{"n":"yellow","xi":5,"yi":6},{"n":"red","xi":6,"yi":6},{"n":"red","xi":6,"yi":5},{"n":"yellow","xi":7,"yi":6},{"n":"yellow","xi":7,"yi":5},{"n":"yellow","xi":7,"yi":4}],"params":{"colors":[0,1,2,3,4],"steps":8,"isBomb":false,"isBonus":false}},{"cellCountX":9,"cellCountY":9,"objects":[{"n":"hero","xi":0,"yi":0,"s":1},{"n":"hero","xi":8,"yi":0,"s":1},{"n":"hero","xi":3,"yi":0,"s":1},{"n":"dirt","xi":0,"yi":1},{"n":"dirt","xi":1,"yi":1},{"n":"dirt","xi":2,"yi":1},{"n":"dirt","xi":3,"yi":1},{"n":"dirt","xi":4,"yi":1},{"n":"dirt","xi":5,"yi":1},{"n":"dirt","xi":6,"yi":1},{"n":"dirt","xi":7,"yi":1},{"n":"dirt","xi":8,"yi":1},{"n":"dirt","xi":0,"yi":6},{"n":"dirt","xi":1,"yi":6},{"n":"dirt","xi":3,"yi":6},{"n":"dirt","xi":4,"yi":6},{"n":"dirt","xi":5,"yi":6},{"n":"dirt","xi":7,"yi":6},{"n":"dirt","xi":6,"yi":6},{"n":"dirt","xi":8,"yi":6},{"n":"hero","xi":5,"yi":0,"s":1},{"n":"blue","xi":0,"yi":5},{"n":"blue","xi":1,"yi":5},{"n":"blue","xi":2,"yi":5},{"n":"blue","xi":5,"yi":5},{"n":"blue","xi":3,"yi":5},{"n":"blue","xi":4,"yi":5},{"n":"blue","xi":6,"yi":5},{"n":"blue","xi":7,"yi":5},{"n":"blue","xi":8,"yi":5},{"n":"dirt","xi":2,"yi":6}],"params":{"colors":[0,1,2],"steps":22,"isBomb":true,"isBonus":true}},{"cellCountX":9,"cellCountY":11,"objects":[{"n":"block","xi":7,"yi":3},{"n":"block","xi":6,"yi":3},{"n":"block","xi":5,"yi":4},{"n":"block","xi":4,"yi":4},{"n":"blue","xi":4,"yi":3},{"n":"purple","xi":3,"yi":2},{"n":"purple","xi":3,"yi":3},{"n":"blue","xi":1,"yi":3},{"n":"blue","xi":1,"yi":4},{"n":"block","xi":3,"yi":5},{"n":"block","xi":2,"yi":5},{"n":"block","xi":1,"yi":5},{"n":"block","xi":8,"yi":2},{"n":"block","xi":8,"yi":5},{"n":"block","xi":8,"yi":6},{"n":"block","xi":7,"yi":6},{"n":"block","xi":6,"yi":7},{"n":"block","xi":5,"yi":8},{"n":"block","xi":4,"yi":9},{"n":"block","xi":2,"yi":9},{"n":"block","xi":1,"yi":9},{"n":"block","xi":3,"yi":8},{"n":"block","xi":7,"yi":7},{"n":"yellow","xi":7,"yi":5},{"n":"red","xi":6,"yi":6},{"n":"red","xi":6,"yi":5},{"n":"red","xi":6,"yi":4},{"n":"blue","xi":5,"yi":5},{"n":"blue","xi":5,"yi":6},{"n":"purple","xi":4,"yi":5},{"n":"purple","xi":4,"yi":6},{"n":"purple","xi":4,"yi":7},{"n":"red","xi":3,"yi":6},{"n":"red","xi":3,"yi":7},{"n":"yellow","xi":2,"yi":6},{"n":"yellow","xi":2,"yi":8},{"n":"yellow","xi":2,"yi":7},{"n":"purple","xi":1,"yi":6},{"n":"purple","xi":1,"yi":7},{"n":"purple","xi":1,"yi":8},{"n":"block","xi":5,"yi":7},{"n":"yellow","xi":0,"yi":2},{"n":"yellow","xi":0,"yi":3},{"n":"yellow","xi":0,"yi":4},{"n":"yellow","xi":0,"yi":5},{"n":"yellow","xi":0,"yi":6},{"n":"hero","xi":7,"yi":2,"s":1},{"n":"block","xi":0,"yi":0},{"n":"block","xi":2,"yi":0},{"n":"block","xi":3,"yi":0},{"n":"block","xi":5,"yi":0},{"n":"block","xi":8,"yi":0},{"n":"block","xi":7,"yi":0},{"n":"block","xi":6,"yi":0},{"n":"block","xi":4,"yi":0},{"n":"blue","xi":4,"yi":1},{"n":"blue","xi":1,"yi":1},{"n":"yellow","xi":0,"yi":1},{"n":"block","xi":6,"yi":1},{"n":"block","xi":7,"yi":1},{"n":"block","xi":8,"yi":1},{"n":"block","xi":8,"yi":3},{"n":"red","xi":2,"yi":3},{"n":"red","xi":2,"yi":4},{"n":"red","xi":0,"yi":7},{"n":"red","xi":0,"yi":8},{"n":"red","xi":8,"yi":9},{"n":"red","xi":8,"yi":8},{"n":"blue","xi":1,"yi":2},{"n":"red","xi":2,"yi":2},{"n":"blue","xi":4,"yi":2},{"n":"yellow","xi":7,"yi":4},{"n":"dirt","xi":0,"yi":9},{"n":"yellow","xi":5,"yi":1},{"n":"yellow","xi":5,"yi":2},{"n":"yellow","xi":5,"yi":3},{"n":"hero","xi":6,"yi":2,"s":1},{"n":"purple","xi":3,"yi":1},{"n":"red","xi":0,"yi":10},{"n":"yellow","xi":1,"yi":10},{"n":"yellow","xi":2,"yi":10},{"n":"red","xi":3,"yi":10},{"n":"purple","xi":5,"yi":10},{"n":"yellow","xi":8,"yi":10},{"n":"yellow","xi":7,"yi":10},{"n":"yellow","xi":6,"yi":10},{"n":"blue","xi":7,"yi":9},{"n":"blue","xi":7,"yi":8},{"n":"red","xi":6,"yi":8},{"n":"red","xi":6,"yi":9},{"n":"red","xi":5,"yi":9},{"n":"hero","xi":8,"yi":4,"s":1},{"n":"block","xi":1,"yi":0},{"n":"red","xi":2,"yi":1},{"n":"red","xi":8,"yi":7},{"n":"block","xi":3,"yi":4},{"n":"block","xi":4,"yi":8},{"n":"block","xi":3,"yi":9}],"params":{"colors":[0,1,2,3],"steps":20,"isBomb":true,"isBonus":true}},{"cellCountX":9,"cellCountY":6,"objects":[{"n":"red","xi":0,"yi":0},{"n":"red","xi":1,"yi":0},{"n":"red","xi":2,"yi":0},{"n":"red","xi":2,"yi":1},{"n":"red","xi":1,"yi":1},{"n":"red","xi":0,"yi":1},{"n":"blue","xi":3,"yi":0},{"n":"blue","xi":3,"yi":1},{"n":"blue","xi":4,"yi":1},{"n":"blue","xi":4,"yi":0},{"n":"blue","xi":5,"yi":0},{"n":"blue","xi":5,"yi":1},{"n":"green","xi":6,"yi":1},{"n":"green","xi":6,"yi":0},{"n":"green","xi":7,"yi":0},{"n":"green","xi":7,"yi":1},{"n":"green","xi":8,"yi":1},{"n":"green","xi":8,"yi":0},{"n":"green","xi":0,"yi":2},{"n":"green","xi":1,"yi":2},{"n":"green","xi":2,"yi":2},{"n":"green","xi":2,"yi":3},{"n":"green","xi":1,"yi":3},{"n":"green","xi":0,"yi":3},{"n":"purple","xi":3,"yi":2},{"n":"purple","xi":3,"yi":3},{"n":"purple","xi":4,"yi":3},{"n":"purple","xi":4,"yi":2},{"n":"purple","xi":5,"yi":2},{"n":"purple","xi":5,"yi":3},{"n":"blue","xi":6,"yi":2},{"n":"blue","xi":6,"yi":3},{"n":"blue","xi":7,"yi":3},{"n":"blue","xi":7,"yi":2},{"n":"blue","xi":8,"yi":2},{"n":"blue","xi":8,"yi":3},{"n":"red","xi":0,"yi":4},{"n":"red","xi":0,"yi":5},{"n":"red","xi":1,"yi":4},{"n":"red","xi":2,"yi":4},{"n":"red","xi":2,"yi":5},{"n":"red","xi":5,"yi":5},{"n":"red","xi":5,"yi":4},{"n":"red","xi":6,"yi":4},{"n":"red","xi":7,"yi":4},{"n":"red","xi":7,"yi":5},{"n":"yellow","xi":8,"yi":4},{"n":"yellow","xi":8,"yi":5},{"n":"yellow","xi":3,"yi":4},{"n":"yellow","xi":4,"yi":4},{"n":"yellow","xi":4,"yi":5},{"n":"yellow","xi":3,"yi":5},{"n":"hero2","xi":1,"yi":5,"s":1},{"n":"hero2","xi":6,"yi":5,"s":1}],"params":{"colors":[0,1,2,3,4],"steps":0,"isBomb":false,"isBonus":false}},{"cellCountX":9,"cellCountY":9,"objects":[{"n":"red","xi":0,"yi":0},{"n":"red","xi":1,"yi":0},{"n":"red","xi":2,"yi":0},{"n":"red","xi":2,"yi":1},{"n":"red","xi":0,"yi":1},{"n":"hero2","xi":1,"yi":1,"s":1},{"n":"blue","xi":3,"yi":0},{"n":"blue","xi":3,"yi":1},{"n":"blue","xi":4,"yi":0},{"n":"blue","xi":5,"yi":0},{"n":"blue","xi":5,"yi":1},{"n":"green","xi":6,"yi":0},{"n":"green","xi":6,"yi":1},{"n":"green","xi":7,"yi":0},{"n":"green","xi":8,"yi":0},{"n":"green","xi":8,"yi":1},{"n":"hero2","xi":4,"yi":1,"s":3},{"n":"hero2","xi":7,"yi":1,"s":5}],"params":{"colors":[0,1,2,4],"steps":23,"isBomb":true,"isBonus":true}},{"cellCountX":9,"cellCountY":9,"objects":[{"n":"dirt","xi":0,"yi":1},{"n":"dirt","xi":0,"yi":2},{"n":"dirt","xi":0,"yi":3},{"n":"dirt","xi":0,"yi":4},{"n":"hero2","xi":0,"yi":8,"s":1},{"n":"hero2","xi":8,"yi":8,"s":2},{"n":"block","xi":0,"yi":0},{"n":"block","xi":8,"yi":0},{"n":"block","xi":8,"yi":1},{"n":"block","xi":8,"yi":2},{"n":"block","xi":8,"yi":3},{"n":"block","xi":8,"yi":4}],"params":{"colors":[0,1,2,4],"steps":30,"isBomb":true,"isBonus":true}},{"cellCountX":9,"cellCountY":9,"objects":[{"n":"block","xi":0,"yi":4},{"n":"block","xi":2,"yi":4},{"n":"block","xi":1,"yi":4},{"n":"block","xi":6,"yi":4},{"n":"block","xi":7,"yi":4},{"n":"block","xi":8,"yi":4},{"n":"block","xi":0,"yi":5},{"n":"block","xi":1,"yi":5},{"n":"block","xi":0,"yi":6},{"n":"block","xi":7,"yi":5},{"n":"block","xi":8,"yi":5},{"n":"block","xi":8,"yi":6},{"n":"block","xi":1,"yi":3},{"n":"block","xi":0,"yi":3},{"n":"block","xi":0,"yi":2},{"n":"block","xi":7,"yi":3},{"n":"block","xi":8,"yi":3},{"n":"block","xi":8,"yi":2},{"n":"hero2","xi":4,"yi":4,"s":4},{"n":"hero2","xi":3,"yi":4,"s":3},{"n":"hero2","xi":5,"yi":4,"s":2}],"params":{"colors":[0,1,2,3],"steps":20,"isBomb":true,"isBonus":true}},{"cellCountX":9,"cellCountY":9,"objects":[{"n":"hero","xi":1,"yi":1,"s":1},{"n":"hero","xi":3,"yi":1,"s":1},{"n":"hero","xi":5,"yi":1,"s":1},{"n":"hero","xi":7,"yi":1,"s":1},{"n":"block","xi":1,"yi":2},{"n":"block","xi":3,"yi":2},{"n":"block","xi":5,"yi":2},{"n":"block","xi":7,"yi":2},{"n":"block","xi":0,"yi":0},{"n":"block","xi":2,"yi":0},{"n":"block","xi":4,"yi":0},{"n":"block","xi":6,"yi":0},{"n":"block","xi":8,"yi":0},{"n":"s_bonus","xi":0,"yi":8,"s":1},{"n":"block","xi":2,"yi":5},{"n":"hero2","xi":2,"yi":4,"s":1}],"params":{"colors":[1,2,3,4],"steps":20,"isBomb":true,"isBonus":true}},{"cellCountX":9,"cellCountY":9,"objects":[{"n":"dirt","xi":0,"yi":8},{"n":"dirt","xi":0,"yi":7},{"n":"dirt","xi":1,"yi":7},{"n":"dirt","xi":2,"yi":7},{"n":"dirt","xi":2,"yi":8},{"n":"dirt","xi":4,"yi":8},{"n":"dirt","xi":4,"yi":7},{"n":"dirt","xi":3,"yi":7},{"n":"dirt","xi":5,"yi":7},{"n":"dirt","xi":6,"yi":7},{"n":"dirt","xi":6,"yi":8},{"n":"dirt","xi":7,"yi":7},{"n":"dirt","xi":8,"yi":7},{"n":"dirt","xi":8,"yi":8},{"n":"hero2","xi":1,"yi":8,"s":1},{"n":"dirt","xi":0,"yi":6},{"n":"dirt","xi":1,"yi":6},{"n":"dirt","xi":2,"yi":6},{"n":"dirt","xi":3,"yi":6},{"n":"dirt","xi":4,"yi":6},{"n":"dirt","xi":5,"yi":6},{"n":"dirt","xi":7,"yi":6},{"n":"dirt","xi":8,"yi":6},{"n":"dirt","xi":6,"yi":6},{"n":"hero2","xi":3,"yi":8,"s":2},{"n":"hero2","xi":5,"yi":8,"s":3},{"n":"hero2","xi":7,"yi":8,"s":4}],"params":{"colors":[1,2,3,4],"steps":33,"isBomb":true,"isBonus":true}},{"cellCountX":9,"cellCountY":9,"objects":[{"n":"hero2","xi":8,"yi":7,"s":4},{"n":"hero2","xi":7,"yi":7,"s":4},{"n":"dirt","xi":7,"yi":6},{"n":"dirt","xi":8,"yi":6},{"n":"dirt","xi":8,"yi":5},{"n":"dirt","xi":7,"yi":5},{"n":"dirt","xi":7,"yi":4},{"n":"dirt","xi":8,"yi":4},{"n":"hero2","xi":7,"yi":3,"s":3},{"n":"hero2","xi":8,"yi":3,"s":3},{"n":"hero","xi":7,"yi":2,"s":3}],"params":{"colors":[0,1,3,4],"steps":33,"isBomb":true,"isBonus":true}},{"cellCountX":9,"cellCountY":9,"objects":[{"n":"block","xi":8,"yi":8},{"n":"block","xi":7,"yi":8},{"n":"block","xi":6,"yi":8},{"n":"block","xi":2,"yi":0},{"n":"block","xi":2,"yi":1},{"n":"block","xi":2,"yi":2},{"n":"block","xi":6,"yi":0},{"n":"block","xi":6,"yi":1},{"n":"block","xi":6,"yi":2},{"n":"hero2","xi":3,"yi":2,"s":1},{"n":"hero2","xi":4,"yi":2,"s":2},{"n":"hero2","xi":5,"yi":2,"s":3},{"n":"hero","xi":7,"yi":0,"s":3},{"n":"hero","xi":8,"yi":0,"s":3},{"n":"dirt","xi":5,"yi":8},{"n":"dirt","xi":4,"yi":8},{"n":"dirt","xi":3,"yi":8},{"n":"dirt","xi":2,"yi":8},{"n":"dirt","xi":1,"yi":8},{"n":"dirt","xi":0,"yi":8}],"params":{"colors":[0,1,2,3],"steps":53,"isBomb":true,"isBonus":true}},{"cellCountX":9,"cellCountY":9,"objects":[{"n":"delete","xi":1,"yi":1},{"n":"delete","xi":1,"yi":2},{"n":"delete","xi":1,"yi":3},{"n":"delete","xi":1,"yi":4},{"n":"delete","xi":1,"yi":5},{"n":"delete","xi":1,"yi":6},{"n":"delete","xi":7,"yi":6},{"n":"delete","xi":7,"yi":5},{"n":"delete","xi":7,"yi":4},{"n":"delete","xi":7,"yi":3},{"n":"delete","xi":7,"yi":2},{"n":"delete","xi":7,"yi":1},{"n":"hero2","xi":8,"yi":7,"s":5},{"n":"hero2","xi":8,"yi":4,"s":3},{"n":"hero2","xi":8,"yi":1,"s":2},{"n":"delete","xi":6,"yi":6},{"n":"delete","xi":5,"yi":6},{"n":"delete","xi":4,"yi":6},{"n":"delete","xi":3,"yi":6},{"n":"delete","xi":2,"yi":6},{"n":"hero2","xi":4,"yi":7,"s":3},{"n":"hero2","xi":0,"yi":7,"s":1},{"n":"dirt","xi":8,"yi":2},{"n":"dirt","xi":8,"yi":6},{"n":"dirt","xi":8,"yi":5},{"n":"dirt","xi":8,"yi":3}],"params":{"colors":[1,2,3,4],"steps":37,"isBomb":true,"isBonus":true}},{"cellCountX":9,"cellCountY":9,"objects":[{"n":"block","xi":4,"yi":7},{"n":"block","xi":5,"yi":7},{"n":"block","xi":6,"yi":7},{"n":"block","xi":7,"yi":7},{"n":"block","xi":8,"yi":7},{"n":"block","xi":4,"yi":5},{"n":"block","xi":5,"yi":5},{"n":"block","xi":6,"yi":5},{"n":"block","xi":6,"yi":4},{"n":"block","xi":6,"yi":3},{"n":"block","xi":6,"yi":2},{"n":"block","xi":6,"yi":1},{"n":"block","xi":6,"yi":0},{"n":"block","xi":8,"yi":0},{"n":"block","xi":8,"yi":1},{"n":"block","xi":8,"yi":2},{"n":"block","xi":8,"yi":4},{"n":"block","xi":8,"yi":3},{"n":"block","xi":8,"yi":5},{"n":"block","xi":8,"yi":6},{"n":"block","xi":3,"yi":0},{"n":"block","xi":4,"yi":0},{"n":"hero2","xi":7,"yi":0,"s":1},{"n":"hero2","xi":7,"yi":1,"s":2},{"n":"hero2","xi":7,"yi":2,"s":3},{"n":"dirt","xi":8,"yi":8},{"n":"dirt","xi":7,"yi":8},{"n":"dirt","xi":6,"yi":8}],"params":{"colors":[0,2,3,4],"steps":48,"isBomb":true,"isBonus":true}}]}',
    PR.CELLW_SCALE = 1, PR.CELL_SCALE = .85, PR.CELL_SCALE_BACK = .92, GodStep.SCALE = 1, pro.run = function() {
        catched(function() {
            var t = PR.PetResque.instance;
            t.isRunning || (trace("running"), t.isRunning = !0, t.addFrame(t.dev = new PR.Dev(t)), t.addFrame(t.settings = new PR.Settings(t)), t.addFrame(t.gameplay = new PR.GamePlay(t)), t.addFrame(t.startmenu = new PR.StartMenu(t)), t.addFrame(t.victory = new PR.Victory(t)), t.addFrame(t.fail = new PR.Fail(t)), t.addFrame(t.win = new PR.Win(t)), t.addFrame(t.levelselect = new PR.LevelSelect(t)), t.addFrame(t.transmission = new PR.Transmission(t)), t.addFrame(t.fps = new GodStep.FPS(t, 16711680, 0)), t.screenTo([t.startmenu], t.assets), t.reposition(), t.loadSettings(), t.loadPlayer())
        }, "RUN")
    }, pro.saveSettings = function() {
        var t = PR.PetResque.instance;
        GodStep.SaveLocal(t.SETTINGS, t.SETTINGS_SLOT)
    }, pro.loadSettings = function() {
        var t = PR.PetResque.instance;
        return t.SETTINGS = GodStep.LoadLocal(t.SETTINGS_SLOT) || {
            levels: []
        }
    }, pro.loadPlayer = function() {
        var t = PR.PetResque.instance;
        if (t.PLAYER = GodStep.LoadLocal(t.PLAYER_SLOT) || {
                levels: [],
                sound: !0,
                music: !0,
                tutorial: !0
            }, 0 == t.PLAYER.levels.length)
            for (var e = 0; 30 > e; e++) t.PLAYER.levels.push([0, 0]);
        return PR.SOUND = t.PLAYER.sound, PR.MUSIC = t.PLAYER.music, PR.TUTORIAL = t.PLAYER.tutorial, t.PLAYER
    }, pro.savePlayer = function() {
        var t = PR.PetResque.instance;
        t.PLAYER.sound = PR.SOUND, t.PLAYER.music = PR.MUSIC, t.PLAYER.tutorial = PR.TUTORIAL, GodStep.SaveLocal(t.PLAYER, t.PLAYER_SLOT)
    };