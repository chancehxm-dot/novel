__require = function t(e, c, o) {
    function n(i, s) {
        if (!c[i]) {
            if (!e[i]) {
                var l = i.split("/");
                if (l = l[l.length - 1], !e[l]) {
                    var r = "function" == typeof __require && __require;
                    if (!s && r) return r(l, !0);
                    if (a) return a(l, !0);
                    throw new Error("Cannot find module '" + i + "'")
                }
            }
            var u = c[i] = {
                exports: {}
            };
            e[i][0].call(u.exports, function(t) {
                return n(e[i][1][t] || t)
            }, u, u.exports, t, e, c, o)
        }
        return c[i].exports
    }
    for (var a = "function" == typeof __require && __require, i = 0; i < o.length; i++) n(o[i]);
    return n
}({
    AddBox: [function(t, e, c) {
        "use strict";
        cc._RF.push(e, "ca7c9ewi55Bf7olyqVPnWJv", "AddBox"), cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {},
            onBeginContact: function(t, e, c) {}
        }), cc._RF.pop()
    }, {}],
    AddScore: [function(t, e, c) {
        "use strict";
        cc._RF.push(e, "778b08+l3JJXoxGnl0R0nub", "AddScore"), cc.Class({
            extends: cc.Component,
            properties: {
                image: {
                    default: null,
                    type: cc.Node
                },
                addOne: {
                    default: null,
                    type: cc.Prefab
                }
            },
            start: function() {},
            addone: function() {
                var t = cc.instantiate(this.addOne);
                t.parent = this.node, t.position = cc.p(0, 20);
                var e = cc.sequence(cc.moveBy(.2, cc.p(0, 20)), cc.callFunc(function() {
                    t.destroy()
                }, this));
                t.runAction(e)
            },
            onEndContact: function(t, e, c) {
                var o = cc.moveBy(.01, cc.p(0, -3)),
                    n = cc.moveBy(.01, cc.p(0, 6)),
                    a = cc.moveTo(.01, cc.p(0, 0)),
                    i = cc.moveBy(.01, cc.p(3, 0)),
                    s = cc.moveBy(.01, cc.p(-6, 0)),
                    l = cc.moveTo(.01, cc.p(0, 0)),
                    r = cc.sequence(o, n, a, i, s, o, n, a, i, s, l);
                this.image.runAction(r);
                var u = new cc.Event.EventCustom("addScore", !0);
                u.setUserData(1), this.node.dispatchEvent(u), this.addone(), SoundManager.playEffect("hit")
            }
        }), cc._RF.pop()
    }, {}],
    AngleBox: [function(t, e, c) {
        "use strict";
        cc._RF.push(e, "0b566XdklxChYStKEi3SYhp", "AngleBox"), cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {},
            onBeginContact: function(t, e, c) {
                c.node.getComponent(cc.RigidBody).linearVelocity = cc.p(0, 0), c.node.getComponent(cc.RigidBody).gravityScale = -100, c.node.getComponent(cc.RigidBody).angularVelocity = 0
            }
        }), cc._RF.pop()
    }, {}],
    Ball: [function(t, e, c) {
        "use strict";
        cc._RF.push(e, "120c4UWwONMi4hMe/F7at8C", "Ball"), cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {
                this.last_pos = cc.p(0, 0), this.node.col_count = 0, this.count = 0
            },
            update: function(t) {
                var e = this.node.position,
                    c = Math.abs(e.x - this.last_pos.x),
                    o = Math.abs(e.y - this.last_pos.y);
                if (c <= 5 && o <= 5) {
                    if (this.count = this.count + 1, this.count >= 100) {
                        this.count = 0, this.node.group = "default", this.node.getComponent(cc.RigidBody).gravityScale = 0, this.node.getComponent(cc.PhysicsCircleCollider).apply();
                        var n = cc.sequence(cc.moveTo(.4, cc.p(0, 470)), cc.callFunc(function() {
                            var t = new cc.Event.EventCustom("getBall", !0);
                            this.node.dispatchEvent(t), this.node.destroy()
                        }, this));
                        this.node.runAction(n)
                    }
                } else this.count = 0;
                if (this.last_pos = e, e.y > 640) {
                    var a = new cc.Event.EventCustom("getBall", !0);
                    this.node.dispatchEvent(a), this.node.destroy()
                } else if (e.y < -640) {
                    a = new cc.Event.EventCustom("addBall", !0);
                    this.node.dispatchEvent(a), this.node.destroy()
                }
            }
        }), cc._RF.pop()
    }, {}],
    Box: [function(t, e, c) {
        "use strict";
        cc._RF.push(e, "fbf37YAFZVBCKEare5g9MUL", "Box");
        var o = 1,
            n = 2,
            a = 3,
            i = [0, 5, 10, 20, 30, 40, 50, 99999999],
            s = [8, 9, 20, 50, 70, 99, 200, 400];
        cc.Class({
            extends: cc.Component,
            properties: {
                image: {
                    default: null,
                    type: cc.Node
                },
                count_lable: {
                    default: null,
                    type: cc.Label
                },
                ball: {
                    default: null,
                    type: cc.Prefab
                }
            },
            onLoad: function() {},
            initData: function(t, e) {
                if (this.type = e, cc.log(e + "initData" + t), e == o) {
                    for (var c = 0, l = 0; l < i.length; l++)
                        if (t <= i[l]) {
                            c = l;
                            break
                        }
                    var r = Math.floor(Math.random() * s[c]) + 1;
                    this.count_lable.string = r, this.count = r;
                    var u = 360 * Math.random();
                    this.node.rotation = u, this.count_lable.node.rotation = -u;
                    var d = [cc.color(184, 89, 66, 255), cc.color(93, 130, 143, 255), cc.color(207, 156, 80, 255), cc.color(109, 131, 80, 255), cc.color(171, 62, 106, 255), cc.color(104, 65, 143, 255)];
                    this.image.color = d[Math.floor(6 * Math.random())]
                } else e == n ? this.count = 1 : e == a && (this.count = 1)
            },
            start: function() {
                this.isRemove = !1
            },
            subBoxCount: function(t) {
                if (this.count = this.count - t.subcount, (e = new cc.Event.EventCustom("addScore", !0)).setUserData(t.subcount), this.node.dispatchEvent(e), this.count <= 0 && 0 == this.isRemove) {
                    if (this.isRemove = !0, this.type == n) {
                        if (t.point)(e = new cc.Event.EventCustom("addAddBall", !0)).setUserData({
                            point: t.point,
                            lv: t.lv,
                            av: t.av
                        }), this.node.dispatchEvent(e)
                    } else if (this.type == a) {
                        var e = new cc.Event.EventCustom("addProp", !0);
                        this.node.dispatchEvent(e)
                    }(e = new cc.Event.EventCustom("removeBox", !0)).setUserData(this.node.tag), this.node.dispatchEvent(e), this.count = 0
                } else if (this.count > 0) {
                    this.image.stopAllActions();
                    var c = cc.moveBy(.01, cc.p(0, -3)),
                        o = cc.moveBy(.01, cc.p(0, 6)),
                        i = cc.moveTo(.01, cc.p(0, 0)),
                        s = cc.moveBy(.01, cc.p(3, 0)),
                        l = cc.moveBy(.01, cc.p(-6, 0)),
                        r = cc.moveTo(.01, cc.p(0, 0)),
                        u = cc.sequence(c, o, i, s, l, c, o, i, s, l, r);
                    this.image.runAction(u)
                }
                this.count_lable.string = this.count
            },
            removeBox: function() {
                var t;
                (t = new cc.Event.EventCustom("addScore", !0)).setUserData(this.count), (t = new cc.Event.EventCustom("removeBox", !0)).setUserData(this.node.tag), this.node.dispatchEvent(t)
            },
            onPostSolve: function(t, e, c) {
                var o = c.node.col_count;
                c.node.col_count = c.node.col_count + 1;
                var n = c.node.getComponent(cc.RigidBody).linearVelocity;
                n = Math.abs(n.x) > Math.abs(n.y) ? cc.v2(n.x / Math.abs(n.x), n.y / Math.abs(n.x)) : cc.v2(n.x / Math.abs(n.y), n.y / Math.abs(n.y)), o > 20 && (o = 20), n = cc.v2((800 - 25 * o) * n.x, (800 - 25 * o) * n.y), c.node.getComponent(cc.RigidBody).linearVelocity = n, SoundManager.playEffect("hit")
            },
            onEndContact: function(t, e, c) {
                cc.director.getScene();
                var o = c.node.getComponent(cc.RigidBody).linearVelocity;
                o = cc.p(-o.x, o.y), this.subBoxCount({
                    subcount: c.tag,
                    point: c.node.position,
                    lv: o
                })
            }
        }), cc._RF.pop()
    }, {}],
    DownBox: [function(t, e, c) {
        "use strict";
        cc._RF.push(e, "8ee1cAHk1dHs7M9v7jJiY58", "DownBox"), cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {},
            start: function() {},
            onBeginContact: function(t, e, c) {
                "ball" == c.node.group && (c.node.group = "redball", c.node.color = cc.color(158, 59, 73, 255), c.node.getComponent(cc.RigidBody).linearVelocity = cc.p(0, 0), c.node.getComponent(cc.RigidBody).gravityScale = 100, c.apply())
            }
        }), cc._RF.pop()
    }, {}],
    GameAdapt: [function(t, e, c) {
        "use strict";
        cc._RF.push(e, "8c3acn7YrNGxLX6wk+3y7B2", "GameAdapt"), cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                var t = cc.winSize.width / cc.winSize.height,
                    e = this.node.getComponent(cc.Canvas);
                t <= .5625 ? (e.fitHeight = !0, e.fitWidth = !1) : t > 1 ? (e.fitHeight = !0, e.fitWidth = !0) : (e.fitWidth = !0, e.fitHeight = !1)
            },
            start: function() {}
        }), cc._RF.pop()
    }, {}],
    GameCatch: [function(t, e, c) {
        "use strict";
        cc._RF.push(e, "72878f7Vk1MzaACzT74KuSW", "GameCatch"), cc.Class({
            extends: cc.Component,
            properties: {
                box_spr: {
                    default: null,
                    type: cc.Node
                }
            },
            onLoad: function() {
                this.box_spr.scale = 0, this.box_spr.runAction(cc.scaleTo(.2, 1)), this.node.on(cc.Node.EventType.TOUCH_START, this.onClick, this)
            },
            start: function() {},
            onCatch: function() {
                var t = new cc.Event.EventCustom("onCatch", !0);
                this.node.dispatchEvent(t), this.node.destroy()
            },
            onClose: function() {
                this.node.destroy()
            },
            onClick: function() {}
        }), cc._RF.pop()
    }, {}],
    GameData: [function(t, e, c) {
        "use strict";
        cc._RF.push(e, "36aafMjPRdBlos4bvuQOzMx", "GameData");
        var o = [0, 5, 8, 10, 20, 30, 99999999],
            n = [70, 70, 50, 50, 65, 80, 65],
            a = [30, 25, 45, 10, 25, 10, 25],
            i = [0, 5, 5, 40, 10, 10, 10],
            s = cc.Class({
                properties: {},
                ctor: function() {
                    this.newScore = 0, this.prop_level = 0, this.ball_level = 0;
                    var t = this.getStorageData("GameFire");
                    cc.log("GameFire" + t), null == t && (this.setStorageData("GameFire", 1), this.setStorageData("music", 1), this.setStorageData("score", 0))
                },
                getStorageData: function(t) {
                    return cc.sys.localStorage.getItem(t)
                },
                setStorageData: function(t, e) {
                    cc.sys.localStorage.setItem(t, e)
                },
                ChangeImage: function(t, e) {
                    cc.loader.loadRes(e, cc.SpriteFrame, function(e, c) {
                        t.getComponent(cc.Sprite).spriteFrame = c
                    })
                },
                getBoxList: function(t) {
                    var e = [],
                        c = [];
                    t % 2 == 0 ? (e = [0, 0, 0, 0, 0, 0], c = [0, 1, 2, 3, 4, 5]) : (e = [0, 0, 0, 0, 0], c = [0, 1, 2, 3, 4]);
                    var o = Math.floor(Math.random() * (6 - t % 2)) + 1;
                    cc.log("count=" + o);
                    var n = !1,
                        a = !1;
                    0 != this.ball_level && this.ball_level + 3 > t && (n = !0), 0 != this.prop_level && this.prop_level + 10 > t && (a = !0), cc.log(n + "  " + a + "  " + t);
                    var i = this.getTyprRate(t, n, a),
                        s = i.rate,
                        l = i.all,
                        r = 0;
                    cc.log("rate_list=" + s);
                    for (var u = 1; u <= o; u++)
                        for (var d = Math.floor(Math.random() * l) + 1, h = 0, p = 0; p < s.length; p++)
                            if (d <= (h += s[p])) {
                                var f = Math.floor(Math.random() * c.length);
                                e[c[f]] = p + 1, p + 1 == 2 ? (2 == (r += 1) && (l -= s[1], s[1] = 0), this.ball_level = t) : p + 1 == 3 && (l -= s[2], s[2] = 0, this.prop_level = t), c.splice(f, 1);
                                break
                            }
                    return cc.log("list=" + e), e
                },
                getTyprRate: function(t, e, c) {
                    for (var s = 0, l = 0; l < o.length; l++)
                        if (t <= o[l]) {
                            s = l;
                            break
                        }
                    var r = 0;
                    e && (r = 10);
                    var u = n[s] + r,
                        d = a[s] - r,
                        h = i[s];
                    return c && (h = 0), {
                        rate: [u, d, h],
                        all: u + d + h
                    }
                }
            });
        s._instance = null, s.getInstance = function() {
            return s._instance || (s._instance = new s), s._instance
        }, e.exports = s, cc._RF.pop()
    }, {}],
    GameManager: [function(t, e, c) {
        "use strict";
        cc._RF.push(e, "4e833AmVMlNVY9/bOOYTLF4", "GameManager");
        var o = cc.Class({
            ctor: function() {}
        });
        o._instance = null, o.getInstance = function() {
            return o._instance || (o._instance = new o), o._instance
        }, e.exports = o, cc._RF.pop()
    }, {}],
    GameOver: [function(t, e, c) {
        "use strict";
        cc._RF.push(e, "28ba1GGcYJIzLCdxN8ummyV", "GameOver"), cc.Class({
            extends: cc.Component,
            properties: {
                score: {
                    default: null,
                    type: cc.Label
                }
            },
            onLoad: function() {
                this.node.on(cc.Node.EventType.TOUCH_START, this.onClick, this)
            },
            init: function(t) {
                this.score.string = t
            },
            redo: function() {
                cc.director.loadScene("GameScene")
            },
            onExit: function() {
                cc.director.loadScene("LoadScene"), this.node.destroy()
            },
            resur: function() {
                var t = new cc.Event.EventCustom("onReGame", !0);
                this.node.dispatchEvent(t), this.node.destroy()
            },
            onClick: function() {}
        }), cc._RF.pop()
    }, {}],
    GameProp: [function(t, e, c) {
        "use strict";
        cc._RF.push(e, "26b8ad7SUhOBowyAYXL+91J", "GameProp"), cc.Class({
            extends: cc.Component,
            properties: {
                box_spr: {
                    default: null,
                    type: cc.Node
                },
                name_spr: {
                    default: null,
                    type: cc.Node
                },
                show_spr: {
                    default: null,
                    type: cc.Node
                },
                des_spr: {
                    default: null,
                    type: cc.Node
                }
            },
            onLoad: function() {
                this.box_spr.scale = 0, this.box_spr.runAction(cc.scaleTo(.2, 1)), this.node.on(cc.Node.EventType.TOUCH_START, this.onClick, this)
            },
            start: function() {
                var t, e = Math.floor(3 * Math.random()) + 1;
                this.type = e, 1 == e ? t = "ball" : 2 == e ? t = "cup" : 3 == e && (t = "brick"), GameData.ChangeImage(this.name_spr, "Prop/" + t), GameData.ChangeImage(this.show_spr, "Prop/" + t + "1"), GameData.ChangeImage(this.des_spr, "Prop/" + t + "0")
            },
            onUseProp: function() {
                var t = new cc.Event.EventCustom("useProp", !0);
                t.setUserData(this.type), this.node.dispatchEvent(t), this.node.destroy()
            },
            onClose: function() {
                this.node.destroy()
            },
            onClick: function() {}
        }), cc._RF.pop()
    }, {}],
    GameRoot: [function(t, e, c) {
        "use strict";
        cc._RF.push(e, "f107exZ6mtI4KvrnBce5ttb", "GameRoot"), window.GlobalData = {
            channel: 1
        }, window.isload = !1;
        var o = t("GameManager"),
            n = t("GameData");
        window.GameData = n.getInstance();
        var a = t("SoundManager");
        window.SoundManager = a.getInstance();
        var i = cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                cc.game.addPersistRootNode(this.node), o.getInstance(), this.initScene(), cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this)
            },
            initScene: function() {
                cc.director.loadScene("LogoScene")
            },
            changeScene: function(t, e) {
                cc.director.loadScene(e)
            },
            start: function() {},
            onDestroy: function() {
                cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this)
            },
            onKeyDown: function(t) {
                switch (cc.log("onKeyDown=" + t.keyCode), t.keyCode) {
                    case cc.KEY.back:
                        if (console.log("onKeyDown"), console.log("onShowInner=" + GlobalData.channel), cc.sys.OS_ANDROID == cc.sys.os) return console.log("current platform is: cc.sys.OS_ANDROID"), jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "exitGame", "()V"), !0
                }
            }
        });
        i._instance = null, i.getInstance = function() {
            return i._instance || (i._instance = new i), i._instance
        }, e.exports = i, cc._RF.pop()
    }, {
        GameData: "GameData",
        GameManager: "GameManager",
        SoundManager: "SoundManager"
    }],
    GameStop: [function(t, e, c) {
        "use strict";
        cc._RF.push(e, "7cec3NhwSRLXYJOjKW56Miw", "GameStop"), cc.Class({
            extends: cc.Component,
            properties: {
                sound: {
                    default: null,
                    type: cc.Node
                },
                soundclose: {
                    default: null,
                    type: cc.Node
                }
            },
            onLoad: function() {
                cc.log("stop"), this.node.on(cc.Node.EventType.TOUCH_START, this.onClick, this), 1 == GameData.getStorageData("music") ? (this.sound.active = !0, this.soundclose.active = !1) : (this.sound.active = !1, this.soundclose.active = !0)
            },
            start: function() {},
            onGo: function() {
                cc.director.resume(), this.node.destroy()
            },
            onback: function() {
                cc.director.resume(), cc.director.loadScene("LoadScene")
            },
            onSound: function() {
                this.sound.active = !1, this.soundclose.active = !0, GameData.setStorageData("music", 0), SoundManager.stopMusic()
            },
            onSoundclose: function() {
                this.sound.active = !0, this.soundclose.active = !1, GameData.setStorageData("music", 1), SoundManager.resumeMusic()
            },
            onClick: function() {}
        }), cc._RF.pop()
    }, {}],
    GameView: [function(t, e, c) {
        "use strict";
        cc._RF.push(e, "25f66FaoYhIYqOMgF9pxxke", "GameView");
        var o = t("GameData");
        window.GameData = o.getInstance();
        var n = 100;
        cc.Class({
            extends: cc.Component,
            properties: {
                node_box: {
                    default: null,
                    type: cc.Node
                },
                node_ball: {
                    default: null,
                    type: cc.Node
                },
                node_gun: {
                    default: null,
                    type: cc.Node
                },
                speed_show: {
                    default: null,
                    type: cc.Node
                },
                add_10_button: {
                    default: null,
                    type: cc.Node
                },
                add_20_button: {
                    default: null,
                    type: cc.Node
                },
                line_spr: {
                    default: null,
                    type: cc.Node
                },
                count_lable: {
                    default: null,
                    type: cc.Label
                },
                score_lable: {
                    default: null,
                    type: cc.Label
                },
                ball: {
                    default: null,
                    type: cc.Prefab
                },
                ball_big: {
                    default: null,
                    type: cc.Prefab
                },
                box1: {
                    default: null,
                    type: cc.Prefab
                },
                box2: {
                    default: null,
                    type: cc.Prefab
                },
                box3: {
                    default: null,
                    type: cc.Prefab
                },
                box4: {
                    default: null,
                    type: cc.Prefab
                },
                box5: {
                    default: null,
                    type: cc.Prefab
                },
                propView: {
                    default: null,
                    type: cc.Prefab
                },
                catchView: {
                    default: null,
                    type: cc.Prefab
                },
                stopView: {
                    default: null,
                    type: cc.Prefab
                },
                gameOver: {
                    default: null,
                    type: cc.Prefab
                },
                propShow_spr: {
                    default: null,
                    type: cc.Node
                },
                guide_node: {
                    default: null,
                    type: cc.Node
                },
                touch_node: {
                    default: null,
                    type: cc.Node
                },
                s_ball: {
                    default: null,
                    type: cc.Node
                }
            },
            onLoad: function() {
                this.score = 0, this.ball_count = 1, this.get_ball = 0, this.have_count = 1, this.canClick = !0, this.box_list = [], this.box_addcount = 0, this.game_level = 0, this.isSpeed = !1, this.isCatch = !1, this.prop_show = !1, this.prop_ball_use = !1, this.prop_brick_use = !1, cc.director.getPhysicsManager().enabled = !0, cc.director.getPhysicsManager().enabledAccumulator = !0, this.box_rate_list = [], this.box_rate_list.push(this.box1), this.box_rate_list.push(this.box2), this.box_rate_list.push(this.box3), this.box_rate_list.push(this.box4), this.box_rate_list.push(this.box5), this.onTouch(), this.updateBallCountLable(), this.initBoxLine()
            },
            updateBallCountLable: function() {
                this.count_lable.string = this.ball_count
            },
            start: function() {
                var t = this;
                this.node.on("removeBox", function(e) {
                    var c = e.getUserData();
                    cc.log("removeBox"), t.removeBox(c)
                }), this.node.on("addBall", function(e) {
                    e.getUserData();
                    t.addTopBall()
                }), this.node.on("addAddBall", function(e) {
                    var c = e.getUserData();
                    t.addAddBall(c.point, c.lv)
                }), this.node.on("addScore", function(e) {
                    var c = e.getUserData();
                    t.score = t.score + c, t.score_lable.string = t.score
                }), this.node.on("addProp", function(e) {
                    cc.log("addProp");
                    e.getUserData();
                    t.prop_show = !0, t.propShow_spr.scale = 0, t.propShow_spr.active = !0, t.propShow_spr.runAction(cc.scaleTo(.2, 1))
                }), this.node.on("useProp", function(e) {
                    var c = e.getUserData();
                    1 == c ? (t.prop_ball_use = !0, GameData.ChangeImage(t.s_ball, "Game/bigball")) : 2 == c ? t.remove3Lbox() : 3 == c && (t.prop_brick_use = !0)
                }), this.node.on("getBall", function(e) {
                    e.getUserData();
                    t.get_ball = t.get_ball + 1, cc.log("getBall=" + t.get_ball), t.get_ball == t.have_count && t.nextLevel()
                }), this.node.on("onCatch", function(e) {
                    e.getUserData();
                    t.onCatchBall()
                }), this.node.on("onReGame", function(e) {
                    cc.log("onReGame");
                    e.getUserData();
                    t.remove3Lbox(), t.get_ball = 0, t.ball_count = t.have_count, t.updateBallCountLable(), t.isCatch = !1, t.isSpeed = !1, t.canClick = !0, t.prop_ball_use = !1, GameData.ChangeImage(t.s_ball, "Game/ball"), t.s_ball.active = !0, 1 == this.prop_show && (t.propShow_spr.active = !1, t.initPropView())
                })
            },
            onTouch: function() {
                var t = this;
                this.touch_node.on(cc.Node.EventType.TOUCH_START, function(e) {
                    if (t.canClick) {
                        t.guide_node.active = !1, t.line_spr.active = !0, t.isSpeed = !1;
                        var c = e.touch.getLocation(),
                            o = t.node.convertToNodeSpaceAR(c);
                        o.y > 450 && (o.y = 450);
                        var n = cc.pNormalize(cc.pSub(o, cc.p(0, 470))),
                            a = cc.pToAngle(n) / Math.PI * 180;
                        t.node_gun.rotation = -a - 90
                    }
                }, this.node), this.touch_node.on(cc.Node.EventType.TOUCH_MOVE, function(e) {
                    if (t.canClick) {
                        var c = e.touch.getLocation(),
                            o = t.node.convertToNodeSpaceAR(c);
                        o.y > 450 && (o.y = 450);
                        var n = cc.pNormalize(cc.pSub(o, cc.p(0, 470))),
                            a = cc.pToAngle(n) / Math.PI * 180;
                        t.node_gun.rotation = -a - 90
                    }
                }, this.node), this.touch_node.on(cc.Node.EventType.TOUCH_END, function(e) {
                    if (t.canClick) {
                        t.canClick = !1, t.line_spr.active = !1;
                        var c = 180 - t.node_gun.rotation,
                            o = cc.pRotateByAngle(cc.p(0, -100), cc.p(0, 0), c * Math.PI / 180);
                        t.createBall(o), t.node_box.stopAllActions();
                        var n = cc.sequence(cc.delayTime(2), cc.callFunc(function() {
                            0 == t.canClick && (t.isSpeed = !0)
                        }, t));
                        t.node_box.runAction(n)
                    }
                }, this.node)
            },
            createBox: function(t, e) {
                var c;
                1 == e ? c = Math.floor(3 * Math.random()) : 2 == e ? c = 3 : 3 == e && (c = 4), cc.log("site=" + c), this.box_addcount = this.box_addcount + 1;
                var o = cc.instantiate(this.box_rate_list[c]);
                o.position = t, o.parent = this.node_box, o.tag = this.box_addcount, o.getComponent("Box").initData(this.game_level, e), this.box_list.push(o)
            },
            initBoxLine: function() {
                for (var t = GameData.getBoxList(this.game_level), e = 0; e < t.length; e++)
                    if (t[e] > 0) {
                        var c = 100 * (e - (t.length - 1) / 2);
                        this.createBox(cc.p(c, -460), t[e])
                    }
                this.game_level = this.game_level + 1
            },
            addBoxLine: function() {
                this.createBoxLine();
                for (var t = 0, e = !1, c = 1; c <= this.box_list.length; c++) {
                    var o = this.box_list[c - 1];
                    o.position.y >= 340 && (e = !0);
                    var a = cc.sequence(cc.moveBy(.1, cc.p(0, n)), cc.callFunc(function() {
                        if ((t += 1) == this.box_list.length)
                            if (e) {
                                cc.log("GameOver" + t);
                                var c = cc.instantiate(this.gameOver);
                                c.parent = this.node, c.getComponent("GameOver").init(this.score)
                            } else this.canClick = !0, 1 == this.prop_show && (this.propShow_spr.active = !1, this.initPropView())
                    }, this));
                    o.runAction(a)
                }
            },
            createBoxLine: function() {
                for (var t = GameData.getBoxList(this.game_level), e = 0; e < t.length; e++)
                    if (t[e] > 0) {
                        var c = 100 * (e - (t.length - 1) / 2);
                        this.createBox(cc.p(c, -560), t[e])
                    }
                this.game_level = this.game_level + 1
            },
            removeBox: function(t) {
                for (var e = 1; e <= this.box_list.length; e++) {
                    var c = this.box_list[e - 1];
                    if (cc.log(t + "   tag=" + c.tag), t == c.tag) {
                        c.destroy(), this.box_list.splice(e - 1, 1);
                        break
                    }
                }
            },
            remove3Lbox: function() {
                for (var t = 0, e = [], c = 1; c <= 10; c++)
                    for (var o = 1; o <= this.box_list.length; o++) {
                        (n = this.box_list[o - 1]).position.y == 540 - 100 * c && (0 == t ? (t = c, e.push(n)) : t + 3 > c && e.push(n))
                    }
                for (c = 1; c <= e.length; c++) {
                    var n;
                    (n = e[c - 1]).getComponent("Box").removeBox()
                }
            },
            addBallCount: function(t) {
                this.have_count = this.have_count + t
            },
            addTopBall: function() {
                var t = cc.instantiate(this.ball);
                t.parent = this.node_ball;
                var e = -140;
                Math.random() < .5 && (e = 140), t.setPosition(cc.p(e, 550)), t.getComponent(cc.RigidBody).linearVelocity = cc.p(0, -1e3)
            },
            addAddBall: function(t, e) {
                this.have_count = this.have_count + 1, cc.log("addAddBall" + t);
                var c = cc.instantiate(this.ball);
                c.parent = this.node_ball, c.setPosition(t), c.getComponent(cc.RigidBody).linearVelocity = e
            },
            createBall: function(t) {
                var e;
                (this.ball_count = this.ball_count - 1, 0 == this.isCatch) && (this.prop_ball_use ? ((e = cc.instantiate(this.ball_big)).parent = this.node_ball, e.setPosition(cc.p(0, 470)), e.getComponent(cc.RigidBody).linearVelocity = cc.p(20 * -t.x, 20 * -t.y)) : ((e = cc.instantiate(this.ball)).parent = this.node_ball, e.setPosition(cc.p(0, 470)), e.getComponent(cc.RigidBody).linearVelocity = cc.p(20 * -t.x, 20 * -t.y)));
                if (this.ball_count > 0) {
                    var c = cc.sequence(cc.delayTime(.1), cc.callFunc(function() {
                        this.createBall(t)
                    }, this));
                    this.node.runAction(c)
                } else this.s_ball.active = !1, this.ball_count = 0;
                this.updateBallCountLable()
            },
            catchBall: function() {
                cc.instantiate(this.catchView).parent = this.node
            },
            onCatchBall: function() {
                if (0 == this.isCatch) {
                    this.isCatch = !0, this.ball_count = 0, this.site = 0;
                    var t = this.node_ball.children.length;
                    if (t > 0)
                        for (var e = 1; e <= t; e++) {
                            var c = this.node_ball.children[e - 1];
                            c.getComponent(cc.RigidBody).active = !1;
                            var o = cc.sequence(cc.moveTo(.4, cc.p(0, 470)), cc.callFunc(function(e) {
                                this.site = this.site + 1, cc.log("this.site=" + this.site), this.site == t && this.nextLevel(), e.destroy()
                            }, this, c));
                            c.runAction(o)
                        } else this.nextLevel()
                }
            },
            update: function(t) {
                if (1 == this.isSpeed) {
                    this.speed_show.active = !0;
                    var e = cc.director.getPhysicsManager();
                    e.enabled = !0, e.update(1.5 * t), e.enabled = !1, cc.director.getScheduler().setTimeScale(2)
                } else {
                    this.speed_show.active = !1;
                    var c = cc.director.getPhysicsManager();
                    c.enabled = !0, c.update(t), c.enabled = !1, cc.director.getScheduler().setTimeScale(1)
                }
            },
            nextLevel: function() {
                this.get_ball = 0, this.ball_count = this.have_count, this.updateBallCountLable(), this.isCatch = !1, this.isSpeed = !1, GameData.ChangeImage(this.s_ball, "Game/ball"), this.s_ball.active = !0, this.prop_ball_use = !1, 1 == this.prop_brick_use ? (this.prop_brick_use = !1, this.canClick = !0) : this.addBoxLine()
            },
            onAddBall_10: function() {
                1 == this.canClick ? (this.have_count = this.have_count + 10, this.ball_count = this.have_count, this.updateBallCountLable()) : (this.have_count = this.have_count + 10, this.get_ball = this.get_ball + 10), this.add_10_button.active = !1, this.add_20_button.active = !0
            },
            onAddBall_20: function() {
                this.add_20_button.active = !1, 1 == this.canClick ? (this.have_count = this.have_count + 20, this.ball_count = this.have_count, this.updateBallCountLable()) : (this.have_count = this.have_count + 20, this.get_ball = this.get_ball + 20)
            },
            initPropView: function() {
                this.prop_show = !1, cc.instantiate(this.propView).parent = this.node
            },
            onStop: function() {
                cc.director.pause(), cc.instantiate(this.stopView).parent = this.node
            }
        }), cc._RF.pop()
    }, {
        GameData: "GameData"
    }],
    LoadView: [function(t, e, c) {
        "use strict";
        cc._RF.push(e, "0add6uUiLdAxqy9pEWx3S9B", "LoadView"), cc.Class({
            extends: cc.Component,
            properties: {
                click_btn: {
                    default: null,
                    type: cc.Button
                },
                sound: {
                    default: null,
                    type: cc.Node
                },
                soundclose: {
                    default: null,
                    type: cc.Node
                }
            },
            onLoad: function() {
                this.List = [], 0 == window.isload && (this.onLoadScene(0), this.click_btn.node.setScale(0, 0)), 1 == GameData.getStorageData("music") ? (this.sound.active = !0, this.soundclose.active = !1) : (this.sound.active = !1, this.soundclose.active = !0)
            },
            start: function() {},
            onLoadScene: function(t) {
                var e = this;
                t < this.List.length ? cc.director.preloadScene(this.List[t], function() {
                    var c = cc.sequence(cc.delayTime(.2), cc.callFunc(function() {
                        e.onLoadScene(t + 1)
                    }, e));
                    e.node.runAction(c);
                    var o = t / (e.List.length - 1);
                    cc.log("load=" + o)
                }) : (window.isload = !0, this.click_btn.node.runAction(cc.sequence(cc.delayTime(.5), cc.scaleTo(1, .9, .9).easing(cc.easeBackOut()))))
            },
            nextScene: function() {
                cc.director.loadScene("GameScene")
            },
            onSound: function() {
                this.sound.active = !1, this.soundclose.active = !0, GameData.setStorageData("music", 0), SoundManager.stopMusic()
            },
            onSoundclose: function() {
                this.sound.active = !0, this.soundclose.active = !1, GameData.setStorageData("music", 1), SoundManager.resumeMusic()
            }
        }), cc._RF.pop()
    }, {}],
    LogoView: [function(t, e, c) {
        "use strict";
        cc._RF.push(e, "3bceai9sspJv7vuJD7z9Mhl", "LogoView"), cc.Class({
            extends: cc.Component,
            properties: {
                logo_spr: {
                    default: null,
                    type: cc.Node
                },
                hint_spr: {
                    default: null,
                    type: cc.Node
                }
            },
            onLoad: function() {
                this.logo_spr.opacity = 0, this.hint_spr.opacity = 0
            },
            start: function() {
                this.logo_spr.runAction(cc.sequence(cc.fadeIn(1), cc.delayTime(1), cc.fadeOut(1), cc.callFunc(function() {
                    cc.director.loadScene("LoadScene")
                }, this)))
            }
        }), cc._RF.pop()
    }, {}],
    SoundManager: [function(t, e, c) {
        "use strict";
        cc._RF.push(e, "5683bDMim9PBI159P6la5LU", "SoundManager");
        var o = t("GameData"),
            n = cc.Class({
                extends: cc.Component,
                properties: {},
                ctor: function() {},
                playMusic: function(t) {
                    1 == o.getInstance().getStorageData("music") && cc.loader.load(cc.url.raw("resources/sound/" + t + ".mp3"), function(t, e) {
                        cc.audioEngine.playMusic(e, !0)
                    })
                },
                playEffect: function(t) {
                    1 == o.getInstance().getStorageData("music") && cc.loader.load(cc.url.raw("resources/sound/" + t + ".mp3"), function(t, e) {
                        cc.audioEngine.play(e, !1, 5)
                    })
                },
                stopMusic: function() {
                    cc.audioEngine.stopAll()
                },
                resumeMusic: function() {
                    cc.audioEngine.resumeAll()
                }
            });
        n._instance = null, n.getInstance = function() {
            return n._instance || (n._instance = new n), n._instance
        }, e.exports = n, cc._RF.pop()
    }, {
        GameData: "GameData"
    }]
}, {}, ["GameAdapt", "GameData", "GameManager", "GameRoot", "AddBox", "AddScore", "AngleBox", "Ball", "Box", "DownBox", "GameCatch", "GameOver", "GameProp", "GameStop", "GameView", "LoadView", "LogoView", "SoundManager"]);