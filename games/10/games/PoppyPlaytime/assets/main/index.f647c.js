var adTime = new Date().getTime();
var isShowAFG = false;
var adNum = 0;
var afttimestep = 60000;
//console.log =function(){};
function showAFG() {
    // var aftafg = (window.AFTAFG != null) ? (window.AFTAFG) : ((window.top.AFTAFG != null) ? (window.top.AFTAFG) : null);
    // var timestamp = new Date().getTime();
    // console.log("timestamp.........", timestamp, adTime);
    // if (timestamp - adTime > afttimestep) {
    //     afttimestep = 36000;
    //     setTimeout(function() {
    //         console.log("setTimeout .........");
    //         if (aftafg && !isShowAFG) {
    //             adTime = timestamp;
    //             isShowAFG = true;
    //             aftafg.playAd(function(ret) {
    //                 console.log("sdk banner ret type", ret, 1);
    //                 isShowAFG = false;
    //             }, 1);
    //         } else {
    //             isShowAFG = false;
    //         }
    //     }, 600)
    // }
    try {
        window.IView ?  loadGoogleAd() : console.log("function not fail!");
    } catch (__error) {
        throw __error;
    }
};

function showRewardAFG(callBack) {
    var aftafg = (window.AFTAFG != null) ? (window.AFTAFG) : ((window.top.AFTAFG != null) ? (window.top.AFTAFG) : null);
    if (!callBack) return;
    if (isShowAFG) return;
    isShowAFG = true;
    if (aftafg) {
        aftafg.playAd(function(ret) {
            var timestamp = new Date().getTime();
            adTime = timestamp;
            console.log("sdk banner ret type", ret, 1);
            if (ret) {
                callBack && callBack();
            }
            isShowAFG = false;
        }, 2);
    } else {
        console.log("NO AFG SHOW OK...");
        isShowAFG = false;
        callBack && callBack();
    }
};
var game_load_finished = 0;

function send_gameStatus(type) {
    var aftafg = (window.AFTAFG != null) ? (window.AFTAFG) : ((window.top.AFTAFG != null) ? (window.top.AFTAFG) : null);
    if (aftafg) {
        aftafg.send_gameStatus(type);
    }
}
window.__require = function t(e, o, n) {
    function a(i, s) {
        if (!o[i]) {
            if (!e[i]) {
                var c = i.split("/");
                if (c = c[c.length - 1], !e[c]) {
                    var l = "function" == typeof __require && __require;
                    if (!s && l) return l(c, !0);
                    if (r) return r(c, !0);
                    throw new Error("Cannot find module '" + i + "'")
                }
                i = c
            }
            var u = o[i] = {
                exports: {}
            };
            e[i][0].call(u.exports, function(t) {
                return a(e[i][1][t] || t)
            }, u, u.exports, t, e, o, n)
        }
        return o[i].exports
    }
    for (var r = "function" == typeof __require && __require, i = 0; i < n.length; i++) a(n[i]);
    return a
}({
    Cage: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "70a3fHkN/9NSbMewS1oTjeS", "Cage");
        var n, a = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            r = this && this.__decorate || function(t, e, o, n) {
                var a, r = arguments.length,
                    i = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(e, o, i) : a(e, o)) || i);
                return r > 3 && i && Object.defineProperty(e, o, i), i
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("../Local/UserData"),
            s = cc._decorator,
            c = s.ccclass,
            l = s.property,
            u = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.listSkull = [], e.userData = null, e
                }
                return a(e, t), e.prototype.setInfoCage = function(t) {
                    this.userData = i.default.getInstance(), this.node.getComponent(cc.Sprite).spriteFrame = t, "Cage 2c" == this.node.name ? (this.node.getComponent(cc.BoxCollider).offset.x = -43, this.node.getComponent(cc.BoxCollider).offset.y = 0, this.node.getComponent(cc.BoxCollider).size.width = 9, this.node.getComponent(cc.BoxCollider).size.height = 80) : "Cage 2a" == this.node.name ? (this.node.getComponent(cc.BoxCollider).offset.x = 43, this.node.getComponent(cc.BoxCollider).offset.y = 0, this.node.getComponent(cc.BoxCollider).size.width = 9, this.node.getComponent(cc.BoxCollider).size.height = 80, 3 == this.userData.currentLevel && 2 == i.default.getInstance().tutorialIndex && (this.listSkull[0].active = !0)) : "Cage 2d" == this.node.name ? (this.node.getComponent(cc.BoxCollider).offset.x = 0, this.node.getComponent(cc.BoxCollider).offset.y = 43, this.node.getComponent(cc.BoxCollider).size.width = 80, this.node.getComponent(cc.BoxCollider).size.height = 9) : "Cage 2b" == this.node.name && (this.node.getComponent(cc.BoxCollider).offset.x = 0, this.node.getComponent(cc.BoxCollider).offset.y = -43, this.node.getComponent(cc.BoxCollider).size.width = 80, this.node.getComponent(cc.BoxCollider).size.height = 9)
                }, r([l(cc.Node)], e.prototype, "listSkull", void 0), r([c], e)
            }(cc.Component);
        o.default = u, cc._RF.pop()
    }, {
        "../Local/UserData": "UserData"
    }],
    CameraController: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "35e35z3o/NLzJrg2rI3h177", "CameraController");
        var n, a = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            r = this && this.__decorate || function(t, e, o, n) {
                var a, r = arguments.length,
                    i = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(e, o, i) : a(e, o)) || i);
                return r > 3 && i && Object.defineProperty(e, o, i), i
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("../Local/UserData"),
            s = t("./PadController"),
            c = cc._decorator,
            l = c.ccclass,
            u = (c.property, function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.playerNode = null, e.userData = null, e.pad = null, e.popup = null, e
                }
                var o;
                return a(e, t), o = e, e.getInstance = function() {
                    return o.instance || (o.instance = new o), o.instance
                }, e.prototype.onLoad = function() {
                    o.instance = this, this.userData = i.default.getInstance()
                }, e.prototype.handlePad = function(t) {
                    this.pad = t.getComponent(s.default)
                }, e.prototype.handlePopup = function(t) {
                    this.popup = t
                }, e.prototype.returnBeginPos = function() {
                    this.playerNode = null, this.node.setPosition(cc.v2(0, 0)), this.pad.setPosition(cc.v2(0, 0))
                }, e.prototype.update = function() {
                    if (null != this.playerNode && null != this.pad) {
                        var t = this.playerNode.position,
                            e = this.node.getPosition();
                        e.lerp(t, .1, e), this.popup && this.popup.setPosition(e), this.node.setPosition(e), this.pad.setPosition(e)
                    }
                }, e.instance = null, o = r([l], e)
            }(cc.Component));
        o.default = u, cc._RF.pop()
    }, {
        "../Local/UserData": "UserData",
        "./PadController": "PadController"
    }],
    Door: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "25214ZUPM1PhIl/GCk0XY2H", "Door");
        var n, a = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            r = this && this.__decorate || function(t, e, o, n) {
                var a, r = arguments.length,
                    i = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(e, o, i) : a(e, o)) || i);
                return r > 3 && i && Object.defineProperty(e, o, i), i
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = cc._decorator,
            s = i.ccclass,
            c = i.property,
            l = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.listSpriteFrame = [], e.isChangeColor = !1, e
                }
                return a(e, t), e.prototype.setInfoDoor = function() {
                    this.changeSkin(this.node.name)
                }, e.prototype.changeSkin = function(t) {
                    switch (t) {
                        case "Green Door 1":
                            this.node.getComponent(cc.Sprite).spriteFrame = this.listSpriteFrame[0];
                            break;
                        case "Green Door 2":
                            this.node.getComponent(cc.Sprite).spriteFrame = this.listSpriteFrame[1];
                            break;
                        case "Green Door 3":
                            this.node.getComponent(cc.Sprite).spriteFrame = this.listSpriteFrame[2];
                            break;
                        case "Green Door 4":
                            this.node.getComponent(cc.Sprite).spriteFrame = this.listSpriteFrame[3];
                            break;
                        case "Red Door 1":
                            this.node.getComponent(cc.Sprite).spriteFrame = this.listSpriteFrame[4];
                            break;
                        case "Red Door 2":
                            this.node.getComponent(cc.Sprite).spriteFrame = this.listSpriteFrame[5];
                            break;
                        case "Red Door 3":
                            this.node.getComponent(cc.Sprite).spriteFrame = this.listSpriteFrame[6];
                            break;
                        case "Red Door 4":
                            this.node.getComponent(cc.Sprite).spriteFrame = this.listSpriteFrame[7]
                    }
                }, e.prototype.disablePhysic = function(t) {
                    this.node.getComponent(cc.PhysicsBoxCollider).enabled = !t
                }, r([c(cc.SpriteFrame)], e.prototype, "listSpriteFrame", void 0), r([s], e)
            }(cc.Component);
        o.default = l, cc._RF.pop()
    }, {}],
    EventLoggingAnalytics: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "7db976CaHVH3Kk7qsa8egvl", "EventLoggingAnalytics");
        var n = this && this.__assign || function() {
            return (n = Object.assign || function(t) {
                for (var e, o = 1, n = arguments.length; o < n; o++)
                    for (var a in e = arguments[o]) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
                return t
            }).apply(this, arguments)
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("./EventLoggingServices"),
            r = t("./FacebookAPI"),
            i = t("./FBConfigs"),
            s = t("../Local/UserData"),
            c = function() {
                function t() {
                    this._analyticSessionTime = 0, this._analyticSessionTimeStart = 0, this.timerVar = null, this.appActiveTime = 0, this._sessionId = 0, this.isTimerRunning = !1, this.timeTickCallbackArr = [], this.dataFieldNameArr = ["analytic_lastPlayingTime", "analytic_sessionCount", "analytic_gameCount", "analytic_lastSessionTime", "analytic_m_firstTouchTimestamp", "analytic_m_allTimeMin", "analytic_m_allTime"], this.lastSession = {
                        playingTime: 0,
                        gameCount: 0,
                        moveRing: 0
                    }, this.thisSession = {
                        playingTime: 0,
                        gameCount: 0,
                        moveRing: 0
                    }, this.currentGame = {
                        matchTime: 0
                    }, this.timeEngagement = {
                        m_allTimeMin: 0,
                        m_allTime: 0,
                        timeCounterStartGame: 0
                    }, this._countAds = 0, this._campaignId = "", this._adsetId = "", this._adId = "", this._adIdUnknown = "", this._analytic_m_firstTouchTimestamp = 0, this._userId = "", this._userLocale = "", this._tryingLevelCountingArr = [], this._tutorialStartTime = 0, this._adInSession = [], this._sessionTimeWhenAdsStart = 0, this._max_level = 0, this._lastCallToShowAdTime = 0
                }
                return t.getInst = function() {
                    return null == t.inst && (t.inst = new t), t.inst
                }, t.prototype.init = function(t) {
                    var e = this;
                    i.ON_FB && FBInstant.player.getDataAsync(["totalAds", "maxLevel"]).then(function(o) {
                        e._countAds = s.default.setDataToFaceBook(o.totalAds, 0, {
                            totalAds: 0
                        }), e._max_level = s.default.setDataToFaceBook(o.maxLevel, 0, {
                            maxLevel: 0
                        }), e.initLog(t)
                    })
                }, t.prototype.initLog = function(t) {
                    var e = this;
                    this.startTimer();
                    var o = new Date;
                    if (this._analyticSessionTime = this._analyticSessionTimeStart = this.timeEngagement.timeCounterStartGame = o.getTime(), this._campaignId = "", this._analytic_m_firstTouchTimestamp = this._analyticSessionTimeStart, "undefined" != typeof FBInstant && null != FBInstant) {
                        this._userLocale = FBInstant.getLocale(), this._userId = FBInstant.player.getID();
                        var n = FBInstant.getEntryPointData();
                        n && (n.fb_instant_game_campaign_id && (this._campaignId = parseInt(n.fb_instant_game_campaign_id).toString()), n.fb_instant_game_adset_id && (this._adsetId = parseInt(n.fb_instant_game_adset_id).toString()), n.fb_instant_game_ad_id && (this._adId = parseInt(n.fb_instant_game_ad_id).toString()), n.ad_id && (this._adIdUnknown = parseInt(n.ad_id).toString())), FBInstant.player.getDataAsync(this.dataFieldNameArr).then(function(o) {
                            e._sessionId = (o.analytic_sessionCount || 0) + 1, o.analytic_m_firstTouchTimestamp && (e._analytic_m_firstTouchTimestamp = o.analytic_m_firstTouchTimestamp), e.initDataTimeEngagement(o), e.summarizeLastSession(o), o.analytic_sessionCount ? e.logEventLoadingTime(t, "false") : (e.saveUserData("analytic_m_firstTouchTimestamp", e._analytic_m_firstTouchTimestamp), e.logEvent("general_first_open"), e.logEventLoadingTime(t, "true"), e.appActiveTime++), e.startTrackingSessionTime(), e.logEvent("general_session_start")
                        })
                    } else this.logEvent("general_first_open"), this.logEvent("general_session_start"), this.startTrackingSessionTime();
                    setInterval(function() {
                        e.logEventEngagement()
                    }, 6e4)
                }, t.prototype.initDataTimeEngagement = function(t) {
                    t.analytic_m_allTimeMin && (this.timeEngagement.m_allTimeMin = t.analytic_m_allTimeMin), t.analytic_m_allTime && (this.timeEngagement.m_allTime = t.analytic_m_allTime)
                }, t.prototype.summarizeLastSession = function(t) {
                    this.lastSession.playingTime = this.thisSession.playingTime = t.analytic_lastPlayingTime || 0, this.lastSession.gameCount = this.thisSession.gameCount = t.analytic_gameCount || 0, this.saveUserData("analytic_sessionCount", this._sessionId), this.saveSessionTime()
                }, t.prototype.startTrackingSessionTime = function() {
                    var t = this;
                    this.addTimeTickCallback(function(e) {
                        t.thisSession.playingTime = t.lastSession.playingTime + t.appActiveTime, t.currentGame.matchTime++, e % 30 == 0 && t.saveSessionTime()
                    })
                }, t.prototype.saveSessionTime = function() {
                    "undefined" != typeof FBInstant && null != FBInstant && FBInstant.player.setDataAsync({
                        analytic_lastSessionTime: this.appActiveTime,
                        analytic_lastPlayingTime: this.thisSession.playingTime
                    })
                }, t.prototype.addTimeTickCallback = function(t) {
                    this.timeTickCallbackArr.push(t)
                }, t.prototype.logEvent = function(t, e) {
                    void 0 === e && (e = {});
                    var o = this.getFormDataGeneral();
                    "ad_start" == t ? this._sessionTimeWhenAdsStart = o.m_sessionTime : "ad_interstitial_fail_log" != t && "ad_video_fail_log" != t || (o.m_sessionTime = this._sessionTimeWhenAdsStart);
                    var r = n(n({}, e), o);
                    a.EventLoggingServices.logEvent(t, r, void 0, void 0)
                }, t.prototype.getFormDataGeneral = function() {
                    var t = new Date,
                        e = Math.floor(t.getTime() - this._analyticSessionTimeStart) / 1e3;
                    return this.lastSession.playingTime, this.appActiveTime, {
                        m_appVersion: "1.0",
                        m_firstTouchTimestamp: this._analytic_m_firstTouchTimestamp,
                        m_fbID: this._userId,
                        m_locale: this._userLocale,
                        m_sessionId: this._sessionId,
                        m_sessionTime: Math.floor(e),
                        m_timeZone: Math.floor(t.getTimezoneOffset() / 60 * -1),
                        m_campaignId: this._campaignId,
                        ad_count: this._countAds,
                        m_adsetId: this._adsetId,
                        m_adId: this._adId,
                        m_adId_Unknown: this._adIdUnknown
                    }
                }, t.prototype.getFormDataProgress = function(t, e) {
                    return this._max_level < t && (this._max_level = t, r.default.getInst().saveData({
                        maxLevel: t
                    })), {
                        game_count: this.thisSession.gameCount,
                        game_level: t,
                        max_level: this._max_level,
                        game_mode: e,
                        max_score: null
                    }
                }, t.prototype.getFormDataProgressAdvanced = function() {
                    return {
                        move: this.thisSession.moveRing,
                        match_time: this.currentGame.matchTime
                    }
                }, t.prototype.getFormDataMonetization = function(t, e) {
                    return this._max_level < e && (this._max_level = e, r.default.getInst().saveData({
                        maxLevel: e
                    })), {
                        game_count: this.thisSession.gameCount,
                        game_level: e,
                        max_level: this._max_level,
                        max_score: null,
                        ad_location: t,
                        fps: cc.game.getFrameRate(),
                        ad_in_session: this._adInSession.length,
                        ad_in_hour: this.calculateAdsInHour(),
                        same_ads: this.calculateSameAds(t)
                    }
                }, t.prototype.calculateAdsInHour = function() {
                    var t = (new Date).getTime(),
                        e = [];
                    return this._adInSession.forEach(function(o) {
                        (t - o.time) / 1e3 < 3600 && e.push(o)
                    }), e.length
                }, t.prototype.calculateSameAds = function(t) {
                    var e = [];
                    return this._adInSession.forEach(function(o) {
                        t == o.location && e.push(o)
                    }), e.length
                }, t.prototype.getFormDataCommunity = function(t, e) {
                    return this._max_level < t && (this._max_level = t, r.default.getInst().saveData({
                        maxLevel: t
                    })), {
                        game_count: this.thisSession.gameCount,
                        level: t,
                        max_level: this._max_level,
                        max_score: null,
                        score: null,
                        game_mode: e
                    }
                }, t.prototype.logEventLoadingTime = function(t, e) {
                    this.logEvent("general_loading_screen", {
                        first_time_loading: e,
                        loading_time: t
                    })
                }, t.prototype.logEventTutorial = function(t) {
                    var e = Math.floor((new Date).getTime() - this._tutorialStartTime) / 1e3;
                    this.logEvent("game_tutorial", n({
                        step: "0" + t,
                        tutorial_time: Math.floor(e)
                    }, this.getFormDataGeneral()))
                }, t.prototype.logEventGameStart = function(t, e) {
                    this._tryingLevelCountingArr[t - 1] = this._tryingLevelCountingArr[t - 1] + 1, this.currentGame.matchTime = 0, this.thisSession.gameCount++, this.saveUserData("analytic_gameCount", this.thisSession.gameCount), this.logEvent("game_start", n({}, this.getFormDataProgress(t, e))), 0 != this.timeEngagement.timeCounterStartGame && this.logEventEngagement()
                }, t.prototype.logEventGameProgress = function(t, e, o, a, r, i) {
                    void 0 === i && (i = null);
                    var s = {
                        undo: null,
                        move: r,
                        score: null,
                        star: null,
                        reset: a
                    };
                    null != i && (s.result = i), this.logEvent(t, n(n({}, s), this.getFormDataProgress(e, o)))
                }, t.prototype.logEventEngagement = function() {
                    var t = (new Date).getTime() - this.timeEngagement.timeCounterStartGame,
                        e = Math.floor(t / 1e3),
                        o = Math.floor(e / 60);
                    this.timeEngagement.m_allTimeMin += o, this.timeEngagement.m_allTime += e;
                    var a = this.lastSession.playingTime + this.appActiveTime;
                    this.saveUserData("analytic_m_allTimeMin", this.timeEngagement.m_allTimeMin), this.saveUserData("analytic_m_allTime", this.timeEngagement.m_allTime), this.logEvent("general_user_engagement", n({
                        m_playTime: a,
                        m_playTimeMin: Math.floor(a / 60)
                    }, this.getFormDataGeneral()))
                }, t.prototype.logEventAdClick = function(t, e) {
                    this.logEvent("ad_click", n({}, this.getFormDataMonetization(t, e)))
                }, t.prototype.logEventAdStart = function(t, e, o) {
                    this._lastCallToShowAdTime = (new Date).getTime(), this.logEvent("ad_start", n({
                        ad_type: e
                    }, this.getFormDataMonetization(t, o))), this.stopTimer()
                }, t.prototype.logEventAdFail = function(t, e, o) {
                    var a = "interstitial" == e ? "ad_interstitial_fail_log" : "ad_video_fail_log";
                    this.logEvent(a, n({
                        ad_type: e
                    }, this.getFormDataMonetization(t, o))), this.onHideAd()
                }, t.prototype.logEventAdClose = function(t, e, o, a) {
                    var i = (new Date).getTime();
                    "yes" == o && (this._adInSession.push({
                        time: i,
                        location: t
                    }), this._countAds++, r.default.getInst().saveData({
                        totalAds: this._countAds
                    }));
                    var s = Math.floor((i - this._lastCallToShowAdTime) / 1e3),
                        c = o;
                    this.logEvent("ad_close", n({
                        ad_type: e,
                        ad_time: s,
                        ad_result: c
                    }, this.getFormDataMonetization(t, a))), s < 1 && "no" == c ? this.logEventAdFail(t, e, a) : this.onHideAd()
                }, t.prototype.stopTimer = function() {
                    this.isTimerRunning && (this.isTimerRunning = !1, clearInterval(this.timerVar))
                }, t.prototype.onHideAd = function() {
                    this._sessionTimeWhenAdsStart = 0, this.startTimer()
                }, t.prototype.logEventSocialShare = function(t, e, o) {
                    var a = t;
                    this.logEvent("social_share", n({
                        share_location: a
                    }, this.getFormDataCommunity(e, o)))
                }, t.prototype.logEventSocialInvite = function(t, e, o) {
                    var a = t;
                    this.logEvent("social_invite", n({
                        share_location: a
                    }, this.getFormDataCommunity(e, o)))
                }, t.prototype.logEventSocialCrossPromotion = function(t, e, o) {
                    var a = t;
                    this.logEvent("social_cross_promotion", n({
                        promoted_game_id: a
                    }, this.getFormDataCommunity(e, o)))
                }, t.prototype.logEventSocialCrossPromotionClose = function(t, e, o) {
                    var a = t;
                    this.logEvent("social_cross_promotion_close", n({
                        promoted_game_id: a
                    }, this.getFormDataCommunity(e, o)))
                }, t.prototype.logEventSocialSubscription = function(t, e) {
                    this.logEvent("social_allow_subscription", n({
                        action: t
                    }, this.getFormDataCommunity(e, null)))
                }, t.prototype.logEventSocialShareChallenge = function(t, e, o) {
                    this.logEvent("social_share_challenge", n({
                        action: t
                    }, this.getFormDataCommunity(e, o)))
                }, t.prototype.startTimer = function() {
                    var t = this;
                    this.isTimerRunning || (this.isTimerRunning = !0, this.timerVar = this.setInterval(function() {
                        t.appActiveTime++, t.timeTickCallbackArr.map(function(e) {
                            try {
                                e(t.appActiveTime)
                            } catch (o) {}
                        })
                    }, 1e3))
                }, t.prototype.setInterval = function(t, e) {
                    void 0 === e && (e = 0);
                    var o = 1e5,
                        n = {
                            _id: o++,
                            __instanceId: 100001,
                            callback: null
                        };
                    return n.callback = function() {
                        t(n)
                    }, cc.director.getScheduler().schedule(n.callback, n, e / 1e3, cc.macro.REPEAT_FOREVER, 0, !1), n
                }, t.prototype.saveUserData = function(t, e) {
                    if ("undefined" != typeof FBInstant && null != FBInstant) {
                        var o = {};
                        o[t] = e, FBInstant.player.setDataAsync(o)
                    }
                }, t.inst = null, t
            }();
        o.default = c, cc._RF.pop()
    }, {
        "../Local/UserData": "UserData",
        "./EventLoggingServices": "EventLoggingServices",
        "./FBConfigs": "FBConfigs",
        "./FacebookAPI": "FacebookAPI"
    }],
    EventLoggingServices: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "8211a+95HVCIYBR6xXuJUNa", "EventLoggingServices"), Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.EventLoggingServices = void 0;
        var n = cc.sys.os;
        o.EventLoggingServices = {
            urlLog: {
                url: "https://log-fb.bravestars.com/events",
                method: "POST"
            },
            init: function() {},
            obStoreTime: {},
            onServerRespond: function(t, e, o) {
                if (200 == t.status) {
                    var n = void 0;
                    try {
                        n = JSON.parse(t.responseText)
                    } catch (a) {}
                    "object" == typeof n && null !== n || (n = {}), e && e(n)
                } else o && o(t.responseText)
            },
            queryServerApi: function(t, e, o, n) {
                var a = this,
                    r = t.url;
                if ("GET" == t.method) {
                    var i = "";
                    for (var s in e) i += "&" + s + "=" + encodeURIComponent(e[s]);
                    r += "?" + i.replace("&", "")
                }
                var c = new XMLHttpRequest;
                c.open(t.method, r), c.setRequestHeader("Content-Type", "application/json;charset=UTF-8"), window._accessToken && c.setRequestHeader("X-Access-Token", window._accessToken), "GET" == t.method ? c.send() : c.send(JSON.stringify(e)), c.onreadystatechange = function() {
                    4 == c.readyState && a.onServerRespond(c, o, n, t.url)
                }
            },
            logEvent: function(t, e, o, a) {
                this.queryServerApi(this.urlLog, {
                    facebookApp: "4096648520433761",
                    event: JSON.stringify(function(t, e) {
                        var o = {};
                        o.eventName = t, o.user_id = window.FBInstant ? FBInstant.player.getID() : "test_user", o.app_version = "0.0.1", o.platform = n;
                        var a = [];
                        for (var r in e) {
                            var i = {};
                            i.p_name = r, i.p_value = e[r], a.push(i)
                        }
                        return o.event_params = a, o
                    }(t, e))
                }, function() {
                    o && o()
                }, function() {
                    a && a()
                })
            },
            genID: function() {
                return "_" + Math.random().toString(36).substr(2, 9)
            },
            getOs: function() {
                return cc.sys.os
            }
        }, cc._RF.pop()
    }, {}],
    FBConfigs: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "20343+qaTFMSYLOK8m/RoRi", "FBConfigs"), Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.SUB_BOT_ASK = o.SHORTCUT_ASK = o.ADS_BANNER = o.ADS_VIDEO = o.ADS_INTER = o.IS_ADS_INTER = o.ON_FB = void 0, o.ON_FB = !1, o.IS_ADS_INTER = !0, o.ADS_INTER = "942823359757041_952686662104044", o.ADS_VIDEO = "942823359757041_952686765437367", o.ADS_BANNER = "942823359757041_952686548770722", o.SHORTCUT_ASK = 5, o.SUB_BOT_ASK = 5;
        o.default = function() {
            this.id = null, this.name = null, this.avatar = null, this.photo = null, this.score = null
        }, cc._RF.pop()
    }, {}],
    FacebookAPI: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "6b763qLBAdNgYvaIvErEaOD", "FacebookAPI");
        var n = this && this.__awaiter || function(t, e, o, n) {
                return new(o || (o = Promise))(function(a, r) {
                    function i(t) {
                        try {
                            c(n.next(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function s(t) {
                        try {
                            c(n.throw(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function c(t) {
                        var e;
                        t.done ? a(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
                            t(e)
                        })).then(i, s)
                    }
                    c((n = n.apply(t, e || [])).next())
                })
            },
            a = this && this.__generator || function(t, e) {
                var o, n, a, r, i = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return r = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                    return this
                }), r;

                function s(t) {
                    return function(e) {
                        return c([t, e])
                    }
                }

                function c(r) {
                    if (o) throw new TypeError("Generator is already executing.");
                    for (; i;) try {
                        if (o = 1, n && (a = 2 & r[0] ? n.return : r[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, r[1])).done) return a;
                        switch (n = 0, a && (r = [2 & r[0], a.value]), r[0]) {
                            case 0:
                            case 1:
                                a = r;
                                break;
                            case 4:
                                return i.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                i.label++, n = r[1], r = [0];
                                continue;
                            case 7:
                                r = i.ops.pop(), i.trys.pop();
                                continue;
                            default:
                                if (!(a = (a = i.trys).length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    i = 0;
                                    continue
                                }
                                if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
                                    i.label = r[1];
                                    break
                                }
                                if (6 === r[0] && i.label < a[1]) {
                                    i.label = a[1], a = r;
                                    break
                                }
                                if (a && i.label < a[2]) {
                                    i.label = a[2], i.ops.push(r);
                                    break
                                }
                                a[2] && i.ops.pop(), i.trys.pop();
                                continue
                        }
                        r = e.call(t, i)
                    } catch (s) {
                        r = [6, s], n = 0
                    } finally {
                        o = a = 0
                    }
                    if (5 & r[0]) throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = t("./FBConfigs"),
            i = function() {
                function t() {
                    this.loadVideo = !1, this.loadInter = !1, this.adsInter = null, this.adsVideo = null, this.isSubBot = !1, this.addShortCut = !1, this.askShortCutCount = 0, this.askSubBotCount = 0, this.isSupportedAdsVideo = !1, this.isSupportedAdsInter = !1, this.adsInterCounter = 0, this.isFirstTimeLoadVideo = !0, this.isFirstTimeLoadInter = !0, this.isShowAdsBanner = !1, this.challengingSenderId = -1
                }
                return t.getInst = function() {
                    return null == t.inst && (t.inst = new t), t.inst
                }, t.prototype.setDataFB = function(t, e, o) {
                    var n = null;
                    return void 0 === t ? (n = e, this.saveData(o)) : n = t, n
                }, t.prototype.askSubscribedBot = function() {
                    if (r.ON_FB) {
                        console.log("=>ask SubBot");
                        var t = this;
                        FBInstant.player.getDataAsync(["addShortCut", "askShortCutCount", "isSubBot", "askSubBotCount"]).then(function(e) {
                            t.addShortCut = t.setDataFB(e.addShortCut, !1, {
                                addShortCut: !1
                            }), t.askShortCutCount = t.setDataFB(e.askShortCutCount, 0, {
                                askShortCutCount: 0
                            }), t.askShortCut(t.addShortCut, t.askShortCutCount), t.isSubBot = t.setDataFB(e.isSubBot, !1, {
                                isSubBot: !1
                            }), t.askSubBotCount = t.setDataFB(e.askSubBotCount, 0, {
                                askSubBotCount: 0
                            }), t.askSubBot(t.isSubBot, t.askSubBotCount)
                        })
                    }
                }, t.prototype.saveData = function(t) {
                    null != typeof FBInstant && r.ON_FB && FBInstant.player.setDataAsync(t).then(function() {
                        console.log("Save data success!")
                    }).catch(function(t) {
                        console.log("Save data fail " + t.message)
                    })
                }, t.prototype.showBannerAds = function() {
                    var t = this;
                    if (r.ON_FB && !(cc.winSize.height < 1175)) {
                        var e = FBInstant.getSupportedAPIs().includes("loadBannerAdAsync");
                        e && (console.log("isSupportedAdsBanner==>", e), FBInstant.loadBannerAdAsync(r.ADS_BANNER).then(function() {
                            console.log("FBInstant.loadBannerAdAsync >> success"), t.isShowAdsBanner = !0
                        }).catch(function(e) {
                            console.log("FBInstant.loadBannerAdAsync >> error ", e), t.isShowAdsBanner = !1
                        }))
                    }
                }, t.prototype.preLoadAdsVideo = function() {
                    return n(this, void 0, void 0, function() {
                        var t, e;
                        return a(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    if (!r.ON_FB) return [2];
                                    if (this.loadVideo) return [2];
                                    this.loadVideo = !0, o.label = 1;
                                case 1:
                                    return o.trys.push([1, 4, , 5]), [4, FBInstant.getRewardedVideoAsync(r.ADS_VIDEO)];
                                case 2:
                                    return [4, (t = o.sent()).loadAsync()];
                                case 3:
                                    return o.sent(), this.adsVideo = t, console.log("Preload Video Success"), this.isFirstTimeLoadVideo && (this.isFirstTimeLoadVideo = !1), [3, 5];
                                case 4:
                                    return e = o.sent(), this.adsVideo = null, console.log("Preload Video Fail"), console.log(e), [3, 5];
                                case 5:
                                    return this.loadVideo = !1, [2]
                            }
                        })
                    })
                }, t.prototype.preLoadAdsInter = function() {
                    return n(this, void 0, void 0, function() {
                        var t, e;
                        return a(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    if (!r.ON_FB || !r.IS_ADS_INTER) return [2];
                                    if (this.loadInter) return [2];
                                    this.loadInter = !0, o.label = 1;
                                case 1:
                                    return o.trys.push([1, 4, , 5]), [4, FBInstant.getInterstitialAdAsync(r.ADS_INTER)];
                                case 2:
                                    return [4, (t = o.sent()).loadAsync()];
                                case 3:
                                    return o.sent(), this.adsInter = t, console.log("Preload Inter Success"), this.isFirstTimeLoadInter && (this.isFirstTimeLoadInter = !1), [3, 5];
                                case 4:
                                    return e = o.sent(), this.adsInter = null, console.log("Preload Inter Fail"), console.log(e), [3, 5];
                                case 5:
                                    return this.loadInter = !1, [2]
                            }
                        })
                    })
                }, t.prototype.showAdsInter = function(t) {
                    return n(this, void 0, void 0, function() {
                        var e, o;
                        return a(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    if (null == typeof FBInstant) return [2];
                                    if (!r.ON_FB || !r.IS_ADS_INTER) return [2];
                                    if (e = this, !FBInstant.getSupportedAPIs().indexOf("showAsync")) return [3, 5];
                                    if (!this.adsInter) return [3, 4];
                                    n.label = 1;
                                case 1:
                                    return n.trys.push([1, 3, , 4]), [4, e.adsInter.showAsync().then(function() {
                                        console.log("Show Inter Success"), e.logEvent("Ads-Total", 1, {}), e.logEvent("Ads-Total-Inter", 1, {
                                            value: t
                                        }), e.preLoadAdsInter()
                                    }).catch(function(t) {
                                        console.log("Can not show Inter", t), e.logEvent("ads_inter_error", 1, {
                                            value: t
                                        }), "RATE_LIMITED" != t.code && e.preLoadAdsInter()
                                    })];
                                case 2:
                                    return n.sent(), [3, 4];
                                case 3:
                                    return o = n.sent(), console.log("Show Inter Fail"), e.logEvent("ads_inter_error", 1, {
                                        value: o
                                    }), e.preLoadAdsInter(), [3, 4];
                                case 4:
                                    return [3, 6];
                                case 5:
                                    console.log("Client not supported"), n.label = 6;
                                case 6:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.showAdsVideo = function(t, e, o) {
                    return void 0 === t && (t = null), void 0 === e && (e = null), void 0 === o && (o = null), n(this, void 0, void 0, function() {
                        var n, i;
                        return a(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    if (!r.ON_FB) return t && t(), [2];
                                    if (n = this, !FBInstant.getSupportedAPIs().indexOf("showAsync")) return [3, 5];
                                    a.label = 1;
                                case 1:
                                    return a.trys.push([1, 3, , 4]), [4, n.adsVideo.showAsync().then(function() {
                                        console.log("Show Video Success"), n.logEvent("Ads-Total", 1, {}), n.logEvent("Ads-Total-Video", 1, {
                                            value: "after_click_power_item"
                                        }), t && t()
                                    }).catch(function(t) {
                                        console.log("Can not show video"), o && o(), n.logEvent("ads_video_error", 1, {
                                            value: t
                                        })
                                    })];
                                case 2:
                                    return a.sent(), [3, 4];
                                case 3:
                                    return i = a.sent(), console.log("Show Video Fail"), e && e(), n.logEvent("ads_video_error", 1, {
                                        value: i
                                    }), [3, 4];
                                case 4:
                                    return n.preLoadAdsVideo(), [3, 6];
                                case 5:
                                    console.log("Client not supported"), a.label = 6;
                                case 6:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.share = function(e, o, n) {
                    if (void 0 === n && (n = 0), r.ON_FB) {
                        var a = {
                            intent: "SHARE",
                            image: e,
                            text: "",
                            data: {
                                isFromSharedPos: !0,
                                shareCode: o
                            }
                        };
                        FBInstant.shareAsync(a).then(function() {
                            console.log("Share success!"), t.getInst().logEvent("ev_share_done", 1, {})
                        }).catch(function() {})
                    }
                }, t.prototype.invite = function(t, e) {
                    var o = this;
                    r.ON_FB && FBInstant.context.chooseAsync().then(function() {
                        var n = {
                            action: "CUSTOM",
                            cta: "Join The Fight",
                            image: t,
                            text: {
                                default: "Let's play!",
                                localizations: {}
                            },
                            template: "invite_friends",
                            data: {
                                isFromInvite: !0,
                                inviteCode: e
                            },
                            strategy: "IMMEDIATE",
                            notification: "PUSH"
                        };
                        FBInstant.updateAsync(n).then(function() {
                            console.log("Send message success!"), o.logEvent("ev_invite_done", 1, {})
                        }).catch(function(t) {
                            console.log("invite fail ", t), o.logEvent("ev_invite_fail", 1, {})
                        })
                    }).catch(function() {})
                }, t.prototype.askShortCut = function(t, e) {
                    if (r.ON_FB && !(t || e >= r.SHORTCUT_ASK)) {
                        console.log("Call ask shortcut!");
                        var o = this;
                        FBInstant.canCreateShortcutAsync().then(function(t) {
                            t ? (FBInstant.createShortcutAsync().then(function() {
                                console.log("Shortcut is created!"), o.logEvent("ev_shortcut", 1, {
                                    value: "accept"
                                }), o.saveData({
                                    addShortCut: !0
                                })
                            }).catch(function() {
                                console.log("Shortcut not created!"), o.logEvent("ev_shortcut", 1, {
                                    value: "deny"
                                })
                            }), e++, o.saveData({
                                askShortCutCount: e
                            })) : console.log("Shortcut can't create!")
                        })
                    }
                }, t.prototype.askSubBot = function(t, e) {
                    if (r.ON_FB && !(t || e >= r.SUB_BOT_ASK)) {
                        console.log("Call ask sub bot!");
                        var o = this;
                        FBInstant.player.canSubscribeBotAsync().then(function(t) {
                            t ? (FBInstant.player.subscribeBotAsync().then(function() {
                                console.log("Subscribed bot!"), o.logEvent("ev_subscribe_bot", 1, {
                                    value: "accept"
                                }), o.saveData({
                                    isSubBot: !0
                                })
                            }).catch(function() {
                                console.log("Not subscribed bot!"), o.logEvent("ev_subscribe_bot", 1, {
                                    value: "deny"
                                })
                            }), e++, o.saveData({
                                askSubBotCount: e
                            })) : console.log("Can't subscribe bot!")
                        }).catch(function(t) {
                            console.log(t)
                        })
                    }
                }, t.prototype.logEvent = function(t, e, o) {
                    r.ON_FB && (FBInstant.logEvent(t, e, o), console.log("Event: " + t))
                }, t.prototype.checkEntryPoint = function() {
                    var t = this;
                    r.ON_FB && FBInstant.getEntryPointAsync().then(function(e) {
                        switch (e) {
                            case "feed":
                                t.logToFB("feed");
                                break;
                            case "admin_message":
                                t.handleAdminMessage()
                        }
                    })
                }, t.prototype.handleAdminMessage = function() {
                    var t = FBInstant.getEntryPointData();
                    null != t && (t.isFromChallenge ? this.challengingSenderId = t.senderId : this.logToFB("admin_message"))
                }, t.prototype.logToFB = function(t) {
                    if (r.ON_FB) {
                        var e = FBInstant.getEntryPointData();
                        null != e && ("feed" === t && e.isFromSharedPos ? this.logEvent("ev_user_from_shared_post", 1, {
                            shareCode: e.shareCode
                        }) : "admin_message" === t && e.isFromInvite && this.logEvent("ev_user_from_invite", 1, {
                            inviteCode: e.inviteCode
                        }))
                    }
                }, t.prototype.checkSupportAds = function() {
                    if (r.ON_FB) {
                        var t = FBInstant.getSupportedAPIs(); - 1 != t.indexOf("getRewardedVideoAsync") && (this.isSupportedAdsVideo = !0), -1 != t.indexOf("getInterstitialAdAsync") && (this.isSupportedAdsInter = !0)
                    }
                }, t.prototype.checkShowInterAds = function(t, e) {
                    this.adsInterCounter++, this.adsInterCounter % 2 == 0 && this.isSupportedAdsInter && this.showAdsInter(t, e)
                }, t.prototype.challengeFriend = function(t, e, o, r) {
                    var i = this;
                    void 0 === r && (r = null), r ? FBInstant.context.createAsync(e.toString()).then(function() {
                        return n(i, void 0, void 0, function() {
                            return a(this, function() {
                                return this.updateAsync(o, t, "leaderboard"), r(), console.log("CHALLENGE SUCCESSFULL!!"), [2]
                            })
                        })
                    }).catch(function() {
                        console.log("CHALLENGE NOT SUCCESSFULL!!"), r()
                    }) : this.updateAsync(o, t, "end_game")
                }, t.prototype.updateAsync = function(t, e) {
                    var o = {
                        action: "CUSTOM",
                        cta: "Join The Fight",
                        image: t,
                        text: {
                            default: "Let's play!",
                            localizations: {}
                        },
                        template: "invite_friends",
                        data: {
                            isFromChallenge: !0,
                            senderId: e
                        },
                        strategy: "IMMEDIATE",
                        notification: "PUSH"
                    };
                    FBInstant.updateAsync(o).then(function() {
                        console.log("Send challenge success!")
                    })
                }, t.inst = null, t
            }();
        o.default = i, cc._RF.pop()
    }, {
        "./FBConfigs": "FBConfigs"
    }],
    FitScreen: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "fbd26cnJBBGVqKzfTGMmn4x", "FitScreen");
        var n, a = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            r = this && this.__decorate || function(t, e, o, n) {
                var a, r = arguments.length,
                    i = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(e, o, i) : a(e, o)) || i);
                return r > 3 && i && Object.defineProperty(e, o, i), i
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = cc._decorator,
            s = i.ccclass,
            c = (i.property, function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return a(e, t), e.prototype.onLoad = function() {
                    this.node.setContentSize(cc.winSize.width, cc.winSize.height)
                }, r([s], e)
            }(cc.Component));
        o.default = c, cc._RF.pop()
    }, {}],
    GameConfig: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "60e53qQXNdPVpDP1Fvbt9Ty", "GameConfig"), Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.TAG = o.COLOR = o.LOSE_TITLE = o.WIN_TITLE = o.PATH_SKIN = o.PATH_ITEM = void 0, o.PATH_ITEM = "Arts/Map/", o.PATH_SKIN = "Arts/Skins/", o.WIN_TITLE = "LEVEL COMPLETED", o.LOSE_TITLE = "YOU LOSE",
            function(t) {
                t.LEVEL_DIS = "3C3C3C", t.BTN_BUY_DIS = "606060", t.BTN_BUY_EN = "#6B743E"
            }(o.COLOR || (o.COLOR = {})),
            function(t) {
                t[t.PLAYER = 1] = "PLAYER", t[t.ITEM_PHYSIC = 2] = "ITEM_PHYSIC", t[t.STAR = 3] = "STAR", t[t.CHEST = 4] = "CHEST", t[t.CHICKEN = 5] = "CHICKEN", t[t.CAGE = 6] = "CAGE", t[t.DOOR = 7] = "DOOR", t[t.ROBOT = 8] = "ROBOT", t[t.EXIT = 9] = "EXIT", t[t.TELEPORT = 10] = "TELEPORT"
            }(o.TAG || (o.TAG = {})), cc._RF.pop()
    }, {}],
    GamePlay: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "cacb4wuYrpNQoHPhkh9cxNg", "GamePlay");
        var n, a = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            r = this && this.__decorate || function(t, e, o, n) {
                var a, r = arguments.length,
                    i = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(e, o, i) : a(e, o)) || i);
                return r > 3 && i && Object.defineProperty(e, o, i), i
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("../../ObjectsController/CameraController"),
            s = t("../../ObjectsController/Item"),
            c = t("../../ObjectsController/Player"),
            l = t("../../ObjectsController/ItemPhysic"),
            u = t("../../Local/UserData"),
            p = t("../../Manager/UIManager"),
            h = t("../../ObjectsController/ItemWithBox"),
            d = t("../../Manager/SoundManager"),
            f = t("../../ObjectsController/PadController"),
            g = t("../../ObjectsController/Cage"),
            y = t("../../ObjectsController/Door"),
            _ = t("../../ObjectsController/Robot"),
            m = t("../../ObjectsController/Teleport"),
            v = t("../../Utils/FBConfigs"),
            C = t("../../Utils/LeaderBoardAPI"),
            b = t("../../Utils/FacebookAPI"),
            I = cc._decorator,
            S = I.ccclass,
            D = I.property,
            P = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.pf_Item = null, e.pf_ItemPhysic = null, e.pf_ItemWithBox = null, e.pf_Table5a = null, e.pf_Table5b = null, e.pf_Table5c = null, e.pf_Table5d = null, e.pf_Cage = null, e.pf_Door = null, e.pf_Robot = null, e.pf_Teleport = null, e.pf_Player = null, e.pad = null, e.node_GamePlayZone = null, e.node_Tutorial = null, e.node_TutHand = null, e.node_TutZone = null, e.lb_Tutorial = null, e.cameraController = null, e.soundManager = null, e.userData = null, e.uiManager = null, e
                }
                var o;
                return a(e, t), o = e, e.getInstance = function() {
                    return o.instance || (o.instance = new o), o.instance
                }, e.prototype.initGamePlay = function() {
                    o.instance = this, this.cameraController = i.default.getInstance(), this.soundManager = d.default.getInstance(), this.userData = u.default.getInstance(), this.uiManager = p.default.getInstance()
                }, e.prototype.setInfoGamePlay = function(t, e) {
                    this.node_Tutorial.active = !1, this.soundManager.playMusic(2), this.resetData(), this.userData.currentLevel = t.level, this.loadItems(t, e), this.checkTutorial()
                }, e.prototype.loadItems = function(t, e) {
                    for (var o = this, n = function(n) {
                            var r = null,
                                i = t.mapInfo[n].name;
                            r = "Skate" == i ? cc.instantiate(a.pf_Player) : "BG" == i || "Carpet" == i || "Cage 1a" == i || "Cage 1b" == i ? cc.instantiate(a.pf_Item) : "Chest" == i || "Chicken" == i || "Star" == i || "Icon Exit 1" == i || "Icon Exit 2" == i || "Icon Exit 3" == i || "Icon Exit 4" == i ? cc.instantiate(a.pf_ItemWithBox) : "Cage 2a" == i || "Cage 2b" == i || "Cage 2c" == i || "Cage 2d" == i ? cc.instantiate(a.pf_Cage) : "Green Door 1" == i || "Green Door 2" == i || "Green Door 3" == i || "Green Door 4" == i || "Red Door 1" == i || "Red Door 2" == i || "Red Door 3" == i || "Red Door 4" == i ? cc.instantiate(a.pf_Door) : "Robot 2" == i ? cc.instantiate(a.pf_Robot) : "Teleport" == i ? cc.instantiate(a.pf_Teleport) : "Table 5a" == i ? cc.instantiate(a.pf_Table5a) : "Table 5b" == i ? cc.instantiate(a.pf_Table5b) : "Table 5c" == i ? cc.instantiate(a.pf_Table5c) : "Table 5d" == i ? cc.instantiate(a.pf_Table5d) : cc.instantiate(a.pf_ItemPhysic);
                            var u = cc.v2(t.mapInfo[n].posX, t.mapInfo[n].posY);
                            e.forEach(function(e) {
                                if (e.name == i)
                                    if (r.name = e.name, "Skate" == i) r.getComponent(c.default).setInfoPlayer(e, u);
                                    else if ("BG" == i || "Carpet" == i || "Cage 1a" == i || "Cage 1b" == i) r.getComponent(s.default).setInfoItem(e, i, u);
                                else if ("Chest" == i || "Chicken" == i || "Star" == i || "Icon Exit 1" == i || "Icon Exit 2" == i || "Icon Exit 3" == i || "Icon Exit 4" == i) "Chest" == i ? null == o.userData.chestData[o.userData.currentLevel] ? r.getComponent(h.default).setInfoItemWithBox(e, i, u) : o.userData.chestData[o.userData.currentLevel].chestInfo.forEach(function(o) {
                                    o.posX == t.mapInfo[n].posX && o.posY == t.mapInfo[n].posY ? r.active = !1 : r.getComponent(h.default).setInfoItemWithBox(e, i, u)
                                }) : r.getComponent(h.default).setInfoItemWithBox(e, i, u);
                                else if ("Cage 2a" == i || "Cage 2b" == i || "Cage 2c" == i || "Cage 2d" == i) r.getComponent(g.default).setInfoCage(e);
                                else if ("Green Door 1" == i || "Green Door 2" == i || "Green Door 3" == i || "Green Door 4" == i || "Red Door 1" == i || "Red Door 2" == i || "Red Door 3" == i || "Red Door 4" == i) r.getComponent(y.default).setInfoDoor();
                                else if ("Robot 2" == i) r.getComponent(_.default).setInfoRobot(t.mapInfo[n].typeMoving);
                                else if ("Teleport" == i) {
                                    r.getComponent(m.default).setInfoTeleport(t.mapInfo[n].teleportIndex);
                                    var a = cc.v2(t.mapInfo[n].posX, t.mapInfo[n].posY);
                                    o.userData.teleportPosition[t.mapInfo[n].teleportIndex] = a
                                } else "Table 5a" == i || "Table 5b" == i || "Table 5c" == i || "Table 5d" == i || r.getComponent(l.default).setInfoItem(e, i, u, t.mapInfo[n].type)
                            }), r.x = t.mapInfo[n].posX, r.y = t.mapInfo[n].posY, a.node_GamePlayZone.addChild(r)
                        }, a = this, r = 0; r < t.mapInfo.length; r++) n(r)
                }, e.prototype.checkTutorial = function() {
                    this.userData.tutorialIndex <= 5 && (1 == this.userData.currentLevel && 1 == this.userData.tutorialIndex ? (this.node_Tutorial.active = !0, this.node_TutHand.active = !0, this.node_TutHand.setPosition(cc.v2(190, 0)), this.userData.tutorialTemp = 11, this.effectTutHand11(this.node_TutHand.position)) : 3 == this.userData.currentLevel && 2 == this.userData.tutorialIndex ? (this.node_Tutorial.active = !0, this.lb_Tutorial.node.active = !0, this.lb_Tutorial.string = "Avoid the open side") : 5 == this.userData.currentLevel && 3 == this.userData.tutorialIndex ? (this.node_Tutorial.active = !0, this.lb_Tutorial.node.active = !0, this.lb_Tutorial.string = "Avoid the rest side") : 13 == this.userData.currentLevel && 5 == this.userData.tutorialIndex && (this.node_Tutorial.active = !0, this.node_TutHand.active = !0, this.effectTutHand5(cc.v2(0, -340)), this.lb_Tutorial.node.active = !0, this.lb_Tutorial.string = "Swipe to this to teleport"))
                }, e.prototype.effectTutHand11 = function(t) {
                    var e = this;
                    if (11 == this.userData.tutorialTemp) {
                        this.node_TutHand.position = t, this.lb_Tutorial.string = "Swipe up and down \nto move the same direction";
                        var o = t.y - 250;
                        cc.tween(this.node_TutHand).to(1.5, {
                            y: o
                        }, {
                            easing: "cubicIn"
                        }).call(function() {
                            e.effectTutHand11(t)
                        }).start()
                    }
                }, e.prototype.effectTutHand12 = function(t) {
                    var e = this;
                    if (12 == this.userData.tutorialTemp) {
                        this.node_TutHand.position = t, this.lb_Tutorial.string = "Swipe left and right\n to move the same direction";
                        var o = t.x - 250;
                        cc.tween(this.node_TutHand).to(1.5, {
                            x: o
                        }, {
                            easing: "cubicIn"
                        }).call(function() {
                            e.effectTutHand12(t)
                        }).start()
                    }
                }, e.prototype.tutorialStar = function() {
                    this.node_TutHand.stopAllActions(), this.node_TutHand.active = !1, this.lb_Tutorial.string = "Collect the star and coin chest"
                }, e.prototype.doneTutorial1 = function() {
                    this.lb_Tutorial.node.active = !1, this.node_Tutorial.active = !1, this.userData.tutorialTemp = 0, this.userData.tutorialIndex = 2, this.userData.saveCurrentData()
                }, e.prototype.doneTutorial2 = function() {
                    this.lb_Tutorial.node.active = !1, this.node_Tutorial.active = !1, this.userData.tutorialIndex = 3, this.userData.saveCurrentData()
                }, e.prototype.doneTutorial3 = function() {
                    this.lb_Tutorial.node.active = !1, this.node_Tutorial.active = !1, this.userData.tutorialIndex = 4, this.userData.saveCurrentData()
                }, e.prototype.tutorial41 = function() {
                    this.node_Tutorial.active = !0, this.lb_Tutorial.node.active = !0, this.lb_Tutorial.string = "Eat the chicken drumstick \nhelp increase strength \nto pass the door"
                }, e.prototype.tutorial42 = function() {
                    this.lb_Tutorial.string = "Swipe again to pass the door", this.node_TutHand.active = !0, this.effectTutHand4(cc.v2(150, -100))
                }, e.prototype.effectTutHand4 = function(t) {
                    var e = this;
                    if (4 == this.userData.tutorialIndex) {
                        this.node_TutHand.position = t;
                        var o = t.y - 250;
                        cc.tween(this.node_TutHand).to(1.5, {
                            y: o
                        }, {
                            easing: "cubicIn"
                        }).call(function() {
                            e.effectTutHand4(t)
                        }).start()
                    }
                }, e.prototype.doneTutorial4 = function() {
                    this.lb_Tutorial.node.active = !1, this.node_TutHand.stopAllActions(), this.node_TutHand.active = !1, this.node_Tutorial.active = !1, this.userData.tutorialIndex = 5, this.userData.saveCurrentData()
                }, e.prototype.effectTutHand5 = function(t) {
                    var e = this;
                    if (5 == this.userData.tutorialIndex) {
                        this.node_TutHand.position = t;
                        var o = t.y + 250;
                        cc.tween(this.node_TutHand).to(1.5, {
                            y: o
                        }, {
                            easing: "cubicIn"
                        }).call(function() {
                            e.effectTutHand5(t)
                        }).start()
                    }
                }, e.prototype.doneTutorial5 = function() {
                    this.lb_Tutorial.node.active = !1, this.node_TutHand.stopAllActions(), this.node_TutHand.active = !1, this.node_Tutorial.active = !1, this.userData.tutorialIndex = 6, this.userData.saveCurrentData()
                }, e.prototype.changeDoor = function() {
                    this.node_GamePlayZone.children.forEach(function(t) {
                        if ("Red Door 1" == t.name || "Red Door 2" == t.name || "Red Door 3" == t.name || "Red Door 4" == t.name) {
                            var e = "Green Door " + t.name.slice(9);
                            t.getComponent(y.default).changeSkin(e), t.getComponent(y.default).isChangeColor = !0
                        }
                    })
                }, e.prototype.gameOver = function() {
                    this.pauseGame(), this.uiManager.onShowResult(!1)
                }, e.prototype.winGame = function() {
                    var t = this;
                    b.default.getInst().checkShowInterAds("win_game", this.userData.currentLevel), this.pauseGame(), this.userData.currentLevel == this.userData.bestLevel && (this.userData.bestLevel++, this.userData.saveCurrentData()), this.userData.chest > 0 ? (this.uiManager.onShowReceivedChest(), null == this.userData.chestData[this.userData.currentLevel] ? this.userData.chestData[this.userData.currentLevel] = this.userData.currentChestData : this.userData.currentChestData.chestInfo.forEach(function(e) {
                        var o = e;
                        t.userData.chestData[t.userData.currentLevel].chestInfo.push(o)
                    }), this.userData.saveCurrentData()) : this.uiManager.onShowResult(!0), this.userData.star > this.userData.starLevelData[this.userData.currentLevel - 1] && (this.userData.starLevelData[this.userData.currentLevel - 1] = this.userData.star, this.userData.saveCurrentData()), this.setHighScoreToServer()
                }, e.prototype.setHighScoreToServer = function() {
                    var t = 0;
                    this.userData.starLevelData.forEach(function(e) {
                        t += e
                    }), t > this.userData.highScoreBS && v.ON_FB && (this.userData.highScoreBS = t, C.default.getInstance().setHighScore(), this.userData.saveCurrentData())
                }, e.prototype.resetData = function() {
                    this.userData.star = 0, this.userData.isPause = !1, this.userData.isChicken = !1, this.userData.chest = 0, this.userData.player = null, this.userData.teleportPosition = [], this.userData.currentChestData = {
                        level: 0,
                        chestInfo: []
                    }, this.node_GamePlayZone.removeAllChildren(), f.default.getInstance().isCreate && f.default.getInstance().handlePlayerInput(!0)
                }, e.prototype.pauseGame = function() {
                    this.userData.isPause = !0, this.node_GamePlayZone.children.forEach(function(t) {
                        t.pauseAllActions(), "Skate" == t.name && (t.getComponent(cc.RigidBody).linearVelocity = cc.v2())
                    })
                }, e.prototype.resumeGame = function() {
                    this.node_GamePlayZone.children.forEach(function(t) {
                        t.resumeAllActions()
                    })
                }, e.prototype.onClickPause = function() {
                    Math.abs(this.userData.player.getComponent(cc.RigidBody).linearVelocity.x) < 10 && Math.abs(this.userData.player.getComponent(cc.RigidBody).linearVelocity.y) < 10 && (this.pauseGame(), this.uiManager.onShowPause(), this.soundManager.playClickButton())
                }, e.instance = null, r([D(cc.Prefab)], e.prototype, "pf_Item", void 0), r([D(cc.Prefab)], e.prototype, "pf_ItemPhysic", void 0), r([D(cc.Prefab)], e.prototype, "pf_ItemWithBox", void 0), r([D(cc.Prefab)], e.prototype, "pf_Table5a", void 0), r([D(cc.Prefab)], e.prototype, "pf_Table5b", void 0), r([D(cc.Prefab)], e.prototype, "pf_Table5c", void 0), r([D(cc.Prefab)], e.prototype, "pf_Table5d", void 0), r([D(cc.Prefab)], e.prototype, "pf_Cage", void 0), r([D(cc.Prefab)], e.prototype, "pf_Door", void 0), r([D(cc.Prefab)], e.prototype, "pf_Robot", void 0), r([D(cc.Prefab)], e.prototype, "pf_Teleport", void 0), r([D(cc.Prefab)], e.prototype, "pf_Player", void 0), r([D(cc.Node)], e.prototype, "pad", void 0), r([D(cc.Node)], e.prototype, "node_GamePlayZone", void 0), r([D(cc.Node)], e.prototype, "node_Tutorial", void 0), r([D(cc.Node)], e.prototype, "node_TutHand", void 0), r([D(cc.Node)], e.prototype, "node_TutZone", void 0), r([D(cc.Label)], e.prototype, "lb_Tutorial", void 0), o = r([S], e)
            }(cc.Component);
        o.default = P, cc._RF.pop()
    }, {
        "../../Local/UserData": "UserData",
        "../../Manager/SoundManager": "SoundManager",
        "../../Manager/UIManager": "UIManager",
        "../../ObjectsController/Cage": "Cage",
        "../../ObjectsController/CameraController": "CameraController",
        "../../ObjectsController/Door": "Door",
        "../../ObjectsController/Item": "Item",
        "../../ObjectsController/ItemPhysic": "ItemPhysic",
        "../../ObjectsController/ItemWithBox": "ItemWithBox",
        "../../ObjectsController/PadController": "PadController",
        "../../ObjectsController/Player": "Player",
        "../../ObjectsController/Robot": "Robot",
        "../../ObjectsController/Teleport": "Teleport",
        "../../Utils/FBConfigs": "FBConfigs",
        "../../Utils/FacebookAPI": "FacebookAPI",
        "../../Utils/LeaderBoardAPI": "LeaderBoardAPI"
    }],
    Home: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "17c0fuVRWJLq6CtO6uoS+Fl", "Home");
        var n, a = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            r = this && this.__decorate || function(t, e, o, n) {
                var a, r = arguments.length,
                    i = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(e, o, i) : a(e, o)) || i);
                return r > 3 && i && Object.defineProperty(e, o, i), i
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("../../Local/UserData"),
            s = t("../../Manager/SoundManager"),
            c = t("../../Manager/UIManager"),
            l = cc._decorator,
            u = l.ccclass,
            p = l.property,
            h = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.toggle_Sound = null, e.toggle_Music = null, e.userData = null, e.soundManager = null, e
                }
                var o;
                return a(e, t), o = e, e.getInstance = function() {
                    return o.instance || (o.instance = new o), o.instance
                }, e.prototype.initHome = function() {
                    o.instance = this, this.userData = i.default.getInstance(), this.soundManager = s.default.getInstance(), this.disableSoundAndMusic()
                }, e.prototype.setInfoHome = function() {
                    this.setMusicAndSoundToggle()
                }, e.prototype.onClickPlay = function() {
                    (game_load_finished == 1) ? (game_load_finished = 2, send_gameStatus(2)) : (console.log("")),
                    c.default.getInstance().onShowSelectLevel(), this.soundManager.playClickButton(), this.node.removeFromParent()
                }, e.prototype.onClickLeaderBoard = function() {
                    c.default.getInstance().onShowLeaderBoard(), this.soundManager.playClickButton()
                }, e.prototype.onClickShop = function() {
                    c.default.getInstance().onShowShop(), this.soundManager.playClickButton()
                }, e.prototype.onClickSound = function() {
                    this.userData.isSound = !this.toggle_Sound.isChecked, this.userData.saveLocalData(), this.soundManager.playClickButton()
                }, e.prototype.onClickMusic = function() {
                    this.userData.isMusic = !this.toggle_Music.isChecked, this.userData.saveLocalData(), this.soundManager.playMusic(1)
                }, e.prototype.disableSoundAndMusic = function() {
                    this.userData.isMusic = !1, this.userData.isSound = !1, this.userData.saveLocalData()
                }, e.prototype.setMusicAndSoundToggle = function() {
                    this.toggle_Music.isChecked = !this.userData.isMusic, this.toggle_Sound.isChecked = !this.userData.isSound, this.soundManager.playMusic(1)
                }, e.instance = null, r([p(cc.Toggle)], e.prototype, "toggle_Sound", void 0), r([p(cc.Toggle)], e.prototype, "toggle_Music", void 0), o = r([u], e)
            }(cc.Component);
        o.default = h, cc._RF.pop()
    }, {
        "../../Local/UserData": "UserData",
        "../../Manager/SoundManager": "SoundManager",
        "../../Manager/UIManager": "UIManager"
    }],
    InviteImg: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "0580fE3kXFPua2WfQuisp4D", "InviteImg");
        var n, a = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            r = this && this.__decorate || function(t, e, o, n) {
                var a, r = arguments.length,
                    i = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(e, o, i) : a(e, o)) || i);
                return r > 3 && i && Object.defineProperty(e, o, i), i
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = cc._decorator,
            s = i.ccclass,
            c = i.property,
            l = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.lb_Score = null, e
                }
                return a(e, t), e.prototype.setInfoInviteImg = function(t, e) {
                    this.lb_Score.string = e.toString()
                }, r([c(cc.Label)], e.prototype, "lb_Score", void 0), r([s], e)
            }(cc.Component);
        o.default = l, cc._RF.pop()
    }, {}],
    ItemPhysic: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "f4c9fGBV+NAwYsEp9nHwr8/", "ItemPhysic");
        var n, a = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            r = this && this.__decorate || function(t, e, o, n) {
                var a, r = arguments.length,
                    i = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(e, o, i) : a(e, o)) || i);
                return r > 3 && i && Object.defineProperty(e, o, i), i
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = cc._decorator,
            s = i.ccclass,
            c = (i.property, function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return a(e, t), e.prototype.setInfoItem = function(t) {
                    this.node.getComponent(cc.Sprite).spriteFrame = t, this.setPhysic()
                }, e.prototype.setPhysic = function() {
                    this.node.getComponent(cc.PhysicsBoxCollider).size.width = this.node.width, this.node.getComponent(cc.PhysicsBoxCollider).size.height = this.node.height
                }, r([s], e)
            }(cc.Component));
        o.default = c, cc._RF.pop()
    }, {}],
    ItemWithBox: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "92769CPvRJC4Klo/PW6I8Uc", "ItemWithBox");
        var n, a = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            r = this && this.__decorate || function(t, e, o, n) {
                var a, r = arguments.length,
                    i = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(e, o, i) : a(e, o)) || i);
                return r > 3 && i && Object.defineProperty(e, o, i), i
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("../Local/GameConfig"),
            s = cc._decorator,
            c = s.ccclass,
            l = (s.property, function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.flipIndex = 1, e
                }
                return a(e, t), e.prototype.setInfoItemWithBox = function(t) {
                    this.node.getComponent(cc.Sprite).spriteFrame = t, this.setTag()
                }, e.prototype.setTag = function() {
                    var t = this;
                    switch (this.node.getComponent(cc.BoxCollider).size.width = this.node.width, this.node.getComponent(cc.BoxCollider).size.height = this.node.height, this.node.name) {
                        case "Star":
                            this.node.getComponent(cc.BoxCollider).tag = i.TAG.STAR;
                            break;
                        case "Chest":
                            this.node.getComponent(cc.BoxCollider).tag = i.TAG.CHEST;
                            break;
                        case "Icon Exit 1":
                            this.node.getComponent(cc.BoxCollider).size.width = 20, this.node.getComponent(cc.BoxCollider).size.height = 20, this.node.getComponent(cc.BoxCollider).tag = i.TAG.EXIT, cc.tween(this.node).by(.25, {
                                y: -15
                            }, {
                                easing: "cubicOut"
                            }).call(function() {
                                t.effectType1()
                            }).start();
                            break;
                        case "Icon Exit 2":
                            this.node.getComponent(cc.BoxCollider).size.width = 20, this.node.getComponent(cc.BoxCollider).size.height = 20, this.node.getComponent(cc.BoxCollider).tag = i.TAG.EXIT, cc.tween(this.node).by(.25, {
                                x: -15
                            }, {
                                easing: "cubicOut"
                            }).call(function() {
                                t.effectType2()
                            }).start();
                            break;
                        case "Icon Exit 3":
                            this.node.getComponent(cc.BoxCollider).size.width = 20, this.node.getComponent(cc.BoxCollider).size.height = 20, this.node.getComponent(cc.BoxCollider).tag = i.TAG.EXIT, cc.tween(this.node).by(.25, {
                                y: 15
                            }, {
                                easing: "cubicOut"
                            }).call(function() {
                                t.effectType3()
                            }).start();
                            break;
                        case "Icon Exit 4":
                            this.node.getComponent(cc.BoxCollider).size.width = 20, this.node.getComponent(cc.BoxCollider).size.height = 20, this.node.getComponent(cc.BoxCollider).tag = i.TAG.EXIT, cc.tween(this.node).by(.25, {
                                x: 15
                            }, {
                                easing: "cubicOut"
                            }).call(function() {
                                t.effectType4()
                            }).start();
                            break;
                        case "Chicken":
                            this.node.getComponent(cc.BoxCollider).tag = i.TAG.CHICKEN
                    }
                }, e.prototype.effectType1 = function() {
                    var t = this;
                    cc.tween(this.node).by(.5, {
                        y: 30 * this.flipIndex
                    }, {
                        easing: "cubicOut"
                    }).call(function() {
                        t.flipIndex *= -1, t.effectType1()
                    }).start()
                }, e.prototype.effectType2 = function() {
                    var t = this;
                    cc.tween(this.node).by(.5, {
                        x: 30 * this.flipIndex
                    }, {
                        easing: "cubicOut"
                    }).call(function() {
                        t.flipIndex *= -1, t.effectType2()
                    }).start()
                }, e.prototype.effectType3 = function() {
                    var t = this;
                    cc.tween(this.node).by(.5, {
                        y: -30 * this.flipIndex
                    }, {
                        easing: "cubicOut"
                    }).call(function() {
                        t.flipIndex *= -1, t.effectType3()
                    }).start()
                }, e.prototype.effectType4 = function() {
                    var t = this;
                    cc.tween(this.node).by(.5, {
                        x: -30 * this.flipIndex
                    }, {
                        easing: "cubicOut"
                    }).call(function() {
                        t.flipIndex *= -1, t.effectType4()
                    }).start()
                }, r([c], e)
            }(cc.Component));
        o.default = l, cc._RF.pop()
    }, {
        "../Local/GameConfig": "GameConfig"
    }],
    Item: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "4e33cSIf0RN1KZHhTpDNIy5", "Item");
        var n, a = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            r = this && this.__decorate || function(t, e, o, n) {
                var a, r = arguments.length,
                    i = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(e, o, i) : a(e, o)) || i);
                return r > 3 && i && Object.defineProperty(e, o, i), i
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = cc._decorator,
            s = i.ccclass,
            c = (i.property, function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return a(e, t), e.prototype.setInfoItem = function(t) {
                    this.node.getComponent(cc.Sprite).spriteFrame = t
                }, r([s], e)
            }(cc.Component));
        o.default = c, cc._RF.pop()
    }, {}],
    LeaderBoardAPI: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "d7adeUlf25G1Ltbep8Q746n", "LeaderBoardAPI");
        var n = this && this.__awaiter || function(t, e, o, n) {
                return new(o || (o = Promise))(function(a, r) {
                    function i(t) {
                        try {
                            c(n.next(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function s(t) {
                        try {
                            c(n.throw(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function c(t) {
                        var e;
                        t.done ? a(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
                            t(e)
                        })).then(i, s)
                    }
                    c((n = n.apply(t, e || [])).next())
                })
            },
            a = this && this.__generator || function(t, e) {
                var o, n, a, r, i = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return r = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                    return this
                }), r;

                function s(t) {
                    return function(e) {
                        return c([t, e])
                    }
                }

                function c(r) {
                    if (o) throw new TypeError("Generator is already executing.");
                    for (; i;) try {
                        if (o = 1, n && (a = 2 & r[0] ? n.return : r[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, r[1])).done) return a;
                        switch (n = 0, a && (r = [2 & r[0], a.value]), r[0]) {
                            case 0:
                            case 1:
                                a = r;
                                break;
                            case 4:
                                return i.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                i.label++, n = r[1], r = [0];
                                continue;
                            case 7:
                                r = i.ops.pop(), i.trys.pop();
                                continue;
                            default:
                                if (!(a = (a = i.trys).length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    i = 0;
                                    continue
                                }
                                if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
                                    i.label = r[1];
                                    break
                                }
                                if (6 === r[0] && i.label < a[1]) {
                                    i.label = a[1], a = r;
                                    break
                                }
                                if (a && i.label < a[2]) {
                                    i.label = a[2], i.ops.push(r);
                                    break
                                }
                                a[2] && i.ops.pop(), i.trys.pop();
                                continue
                        }
                        r = e.call(t, i)
                    } catch (s) {
                        r = [6, s], n = 0
                    } finally {
                        o = a = 0
                    }
                    if (5 & r[0]) throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = t("../Local/UserData"),
            i = t("./Services"),
            s = t("./FBConfigs"),
            c = function() {
                function t() {}
                return t.getInstance = function() {
                    return t.instance || (t.instance = new t), t.instance
                }, t.prototype.sortLeaderboard = function() {
                    r.default.getInstance().leaderboardInfo.sort(function(t, e) {
                        return e.score - t.score
                    })
                }, t.prototype.deleteUserHighScore = function(t, e, o) {
                    i.services.deletePlayerHighScore(t, e, o)
                }, t.prototype.getLeaderBoard = function(t) {
                    return n(this, void 0, void 0, function() {
                        var e, o;
                        return a(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return e = this, o = [], [4, FBInstant.player.getConnectedPlayersAsync().then(function(n) {
                                        n.forEach(function(t) {
                                            o.push(t.getID()), r.default.getInstance().leaderboardInfo.push(e.createPlayerInfo(t))
                                        }), t && t()
                                    })];
                                case 1:
                                    return n.sent(), this.getUserScore(), this.getLeaderBoardFrienld(o), [2]
                            }
                        })
                    })
                }, t.prototype.createPlayerInfo = function(t) {
                    var e = new s.default;
                    return e.id = t.getID(), e.name = t.getName(), e.score = 0, e.photo = t.getPhoto(), cc.loader.load(e.photo, function(t, o) {
                        e.avatar = new cc.SpriteFrame(o)
                    }), e
                }, t.prototype.getLeaderBoardFrienld = function(t) {
                    i.services.getLeaderBoardFrienld(t.toString(), function(t) {
                        t.forEach(function(t) {
                            for (var e = 0; e < r.default.getInstance().leaderboardInfo.length; e++) t.playerId == r.default.getInstance().leaderboardInfo[e].id && (r.default.getInstance().leaderboardInfo[e].score = t.score)
                        })
                    }, function() {})
                }, t.prototype.getUserScore = function() {
                    var t = new s.default;
                    t.id = FBInstant.player.getID(), t.name = FBInstant.player.getName(), t.score = 0, t.photo = FBInstant.player.getPhoto(), t.photo && cc.loader.load(t.photo, function(e, o) {
                        t.avatar = new cc.SpriteFrame(o)
                    }), r.default.getInstance().leaderboardInfo.push(t), i.services.getCurrentPlayer(function(e) {
                        e.length > 0 ? (t.score = e[0].score, r.default.getInstance().highScoreBS = e[0].score) : r.default.getInstance().highScoreBS = 0
                    }, function() {
                        console.log("Get fail"), r.default.getInstance().highScoreBS = 0
                    })
                }, t.prototype.setHighScore = function() {
                    null != r.default.getInstance().highScoreBS && (i.services.pushCurrentHighScore(FBInstant.player.getID(), r.default.getInstance().highScoreBS, function() {
                        console.log("Push score success")
                    }, function() {
                        console.log("Push score fail")
                    }), this.updateLeaderboard(r.default.getInstance().highScoreBS))
                }, t.prototype.updateLeaderboard = function(t) {
                    for (var e = 0; e < r.default.getInstance().leaderboardInfo.length; e++)
                        if (r.default.getInstance().leaderboardInfo[e].id == FBInstant.player.getID()) {
                            r.default.getInstance().leaderboardInfo[e].score = t;
                            break
                        }
                }, t.instance = null, t
            }();
        o.default = c, cc._RF.pop()
    }, {
        "../Local/UserData": "UserData",
        "./FBConfigs": "FBConfigs",
        "./Services": "Services"
    }],
    LeaderBoard: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "09ed0nrOgRJT7UlQo5c++9h", "LeaderBoard");
        var n, a = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            r = this && this.__decorate || function(t, e, o, n) {
                var a, r = arguments.length,
                    i = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(e, o, i) : a(e, o)) || i);
                return r > 3 && i && Object.defineProperty(e, o, i), i
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = cc._decorator,
            s = i.ccclass,
            c = i.property,
            l = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.node_Content = null, e
                }
                var o;
                return a(e, t), o = e, e.getInstance = function() {
                    return o.instance || (o.instance = new o), o.instance
                }, e.prototype.initLeaderBoard = function() {
                    o.instance = this
                }, e.prototype.setInfoLeaderBoard = function() {}, e.prototype.onClickHome = function() {
                    this.onHideScene()
                }, e.prototype.onClickShare = function() {}, e.prototype.onHideScene = function() {
                    this.node.removeFromParent()
                }, e.instance = null, r([c(cc.Node)], e.prototype, "node_Content", void 0), o = r([s], e)
            }(cc.Component);
        o.default = l, cc._RF.pop()
    }, {}],
    LevelFrame: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "26213QMX4pNMpifAPKBYkQ3", "LevelFrame");
        var n, a = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            r = this && this.__decorate || function(t, e, o, n) {
                var a, r = arguments.length,
                    i = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(e, o, i) : a(e, o)) || i);
                return r > 3 && i && Object.defineProperty(e, o, i), i
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("../Local/GameConfig"),
            s = t("../Manager/UIManager"),
            c = t("../UIController/Scenes/SelectLevel"),
            l = t("../Manager/SoundManager"),
            u = cc._decorator,
            p = u.ccclass,
            h = u.property,
            d = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.lb_Level = null, e.listSpriteFrames = [], e.listSpriteStars = [], e.listStars = [], e.level = 0, e.uiManager = null, e.soundManager = null, e
                }
                return a(e, t), e.prototype.setInfoLevelFrame = function(t, e, o) {
                    this.uiManager = s.default.getInstance(), this.soundManager = l.default.getInstance(), this.lb_Level.string = t.toString(), this.level = t;
                    for (var n = 0; n < e; n++) this.listStars[n].spriteFrame = this.listSpriteStars[0];
                    this.node.getComponent(cc.Sprite).spriteFrame = this.listSpriteFrames[o], 2 == o && (this.lb_Level.node.color = (new cc.Color).fromHEX(i.COLOR.LEVEL_DIS), this.node.getComponent(cc.Button).interactable = !1)
                }, e.prototype.onClickButton = function() {
                    this.uiManager.onShowGamePlay(this.level - 1), c.default.getInstance().onHideSelectLevel(), this.soundManager.playStart()
                }, r([h(cc.Label)], e.prototype, "lb_Level", void 0), r([h(cc.SpriteFrame)], e.prototype, "listSpriteFrames", void 0), r([h(cc.SpriteFrame)], e.prototype, "listSpriteStars", void 0), r([h(cc.Sprite)], e.prototype, "listStars", void 0), r([p], e)
            }(cc.Component);
        o.default = d, cc._RF.pop()
    }, {
        "../Local/GameConfig": "GameConfig",
        "../Manager/SoundManager": "SoundManager",
        "../Manager/UIManager": "UIManager",
        "../UIController/Scenes/SelectLevel": "SelectLevel"
    }],
    LevelPage: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "46251th8ndJNqONp0hfkcmV", "LevelPage");
        var n, a = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            r = this && this.__decorate || function(t, e, o, n) {
                var a, r = arguments.length,
                    i = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(e, o, i) : a(e, o)) || i);
                return r > 3 && i && Object.defineProperty(e, o, i), i
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("../Local/UserData"),
            s = t("./LevelFrame"),
            c = cc._decorator,
            l = c.ccclass,
            u = c.property,
            p = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.pf_LevelFrame = null, e.userData = null, e
                }
                return a(e, t), e.prototype.setInfoLevelPage = function(t, e) {
                    this.userData = i.default.getInstance();
                    var o = 12 * (t + 1);
                    e <= o && (o = e);
                    for (var n = 0, a = 0, r = 12 * t + 1; r < o + 1; r++) {
                        var c = cc.instantiate(this.pf_LevelFrame);
                        a = this.userData.starLevelData[r - 1], r < this.userData.bestLevel ? n = 0 : r == this.userData.bestLevel ? n = 1 : r > this.userData.bestLevel && (n = 2), c.name += r, c.getComponent(s.default).setInfoLevelFrame(r, a, n), this.node.addChild(c)
                    }
                }, r([u(cc.Prefab)], e.prototype, "pf_LevelFrame", void 0), r([l], e)
            }(cc.Component);
        o.default = p, cc._RF.pop()
    }, {
        "../Local/UserData": "UserData",
        "./LevelFrame": "LevelFrame"
    }],
    LoadResource: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "fa582a+foJDvYMLCBNVkVkm", "LoadResource");
        var n, a = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            r = this && this.__decorate || function(t, e, o, n) {
                var a, r = arguments.length,
                    i = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(e, o, i) : a(e, o)) || i);
                return r > 3 && i && Object.defineProperty(e, o, i), i
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("../../Manager/UIManager"),
            s = cc._decorator,
            c = s.ccclass,
            l = s.property,
            u = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.node_LoadingBar = null, e.sprite_Loading = null, e.percentLoad = 0, e.startTime = 0, e.state = 0, e
                }
                var o;
                return a(e, t), o = e, e.getInstance = function() {
                    return o.instance || (o.instance = new o), o.instance
                }, e.prototype.initLoadResource = function() {
                    o.instance = this
                }, e.prototype.setInfoLoadResource = function(t) {
                    this.percentLoad = 0, this.sprite_Loading.fillRange = this.percentLoad, this.state = t
                }, e.prototype.updateLoadingBar = function(t, e) {
                    this.startTime, this.startTime = e, this.percentLoad += t, this.percentLoad >= .95 && (this.percentLoad = 1, this.onDoneLoading())
                }, e.prototype.setStartTime = function(t) {
                    0 == this.startTime && (this.startTime = t)
                }, e.prototype.onDoneLoading = function() {
                    1 == this.state && i.default.getInstance().onShowHome(), i.default.getInstance().blockInput(!1), this.onHideLoading(), (game_load_finished == 0) ? (game_load_finished = 1, send_gameStatus(1)) : (console.log(""))
                }, e.prototype.onHideLoading = function() {
                    this.node.removeFromParent()
                }, e.prototype.update = function() {
                    var t = this.sprite_Loading.fillRange;
                    if (this.percentLoad > 1 && (this.percentLoad = 1), t != this.percentLoad && this.percentLoad <= 1) {
                        var e = (this.percentLoad - t) / 12;
                        e < 1e-4 && (e = this.percentLoad - t), this.sprite_Loading.fillRange += e, 1 == this.percentLoad && (this.sprite_Loading.fillRange = 1)
                    }
                }, e.instance = null, r([l(cc.Node)], e.prototype, "node_LoadingBar", void 0), r([l(cc.Sprite)], e.prototype, "sprite_Loading", void 0), o = r([c], e)
            }(cc.Component);
        o.default = u, cc._RF.pop()
    }, {
        "../../Manager/UIManager": "UIManager"
    }],
    PadController: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "e1d9abIphJM+6zNtpxHytu4", "PadController");
        var n, a = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            r = this && this.__decorate || function(t, e, o, n) {
                var a, r = arguments.length,
                    i = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(e, o, i) : a(e, o)) || i);
                return r > 3 && i && Object.defineProperty(e, o, i), i
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("../Local/UserData"),
            s = t("./CameraController"),
            c = t("./Player"),
            l = cc._decorator,
            u = l.ccclass,
            p = (l.property, function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.first = cc.v3(), e.endPos = cc.v3(), e.player = null, e.cameraController = null, e.isCreate = !1, e
                }
                var o;
                return a(e, t), o = e, e.getInstance = function() {
                    return o.instance || (o.instance = new o), o.instance
                }, e.prototype.onLoad = function() {
                    o.instance = this, this.handlePlayerInput(!0), this.cameraController = s.default.getInstance(), this.node.setContentSize(cc.winSize.width, cc.winSize.height), this.getPlayer(), this.isCreate = !0
                }, e.prototype.handlePlayerInput = function(t) {
                    var e = this;
                    void 0 === t && (t = !0), t ? (this.node.on("touchmove", function(t) {
                        e.onTouchMove(t)
                    }, this), this.node.on("touchstart", function(t) {
                        e.onTouchStart(t)
                    }, this), this.node.on("touchend", function(t) {
                        e.onTouchEnd(t)
                    }, this), this.node.on("touchcancel", function(t) {
                        e.onTouchCancel(t)
                    }, this)) : (this.node.off("touchmove"), this.node.off("touchstart"), this.node.off("touchend"), this.node.off("touchcancel"))
                }, e.prototype.getPlayer = function() {
                    this.player = i.default.getInstance().player, this.cameraController.handlePad(this.node)
                }, e.prototype.onTouchMove = function() {}, e.prototype.onTouchStart = function(t) {
                    this.first = t.getLocation()
                }, e.prototype.onTouchEnd = function(t) {
                    this.endPos = t.getLocation(), this.countPosition()
                }, e.prototype.onTouchCancel = function(t) {
                    this.endPos = t.getLocation(), this.countPosition()
                }, e.prototype.countPosition = function() {
                    if (null != this.player) {
                        var t = this.endPos.x - this.first.x,
                            e = this.endPos.y - this.first.y,
                            o = t / Math.sqrt(Math.pow(t, 2) + Math.pow(e, 2)),
                            n = cc.misc.radiansToDegrees(Math.acos(o));
                        n <= 30 && n >= 0 && this.endPos.x > this.first.x ? this.player.getComponent(c.default).moving(1) : n >= 150 && n <= 180 && this.endPos.x < this.first.x ? this.player.getComponent(c.default).moving(2) : n >= 45 && n <= 135 && (this.endPos.y > this.first.y ? this.player.getComponent(c.default).moving(3) : this.player.getComponent(c.default).moving(4))
                    }
                }, e.prototype.setPosition = function(t) {
                    t && this.node.setPosition(t)
                }, e.instance = null, o = r([u], e)
            }(cc.Component));
        o.default = p, cc._RF.pop()
    }, {
        "../Local/UserData": "UserData",
        "./CameraController": "CameraController",
        "./Player": "Player"
    }],
    Pause: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "b9b226R/ZxJP6selJiM47fo", "Pause");
        var n, a = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            r = this && this.__decorate || function(t, e, o, n) {
                var a, r = arguments.length,
                    i = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(e, o, i) : a(e, o)) || i);
                return r > 3 && i && Object.defineProperty(e, o, i), i
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("../../Manager/UIManager"),
            s = t("../../Local/UserData"),
            c = t("../../Manager/SoundManager"),
            l = t("../Scenes/GamePlay"),
            u = t("../../ObjectsController/PadController"),
            p = t("../../ObjectsController/CameraController"),
            h = cc._decorator,
            d = h.ccclass,
            f = h.property,
            g = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.toggle_Sound = null, e.toggle_Music = null, e.lb_Level = null, e.userData = null, e.soundManager = null, e.cameraController = null, e.uiManager = null, e
                }
                return a(e, t), e.prototype.initPause = function() {
                    this.userData = s.default.getInstance(), this.soundManager = c.default.getInstance(), this.cameraController = p.default.getInstance(), this.uiManager = i.default.getInstance()
                }, e.prototype.setInfoPause = function() {
                    this.setMusicAndSoundToggle(), this.cameraController.handlePopup(this.node), this.lb_Level.string = "Level: " + this.userData.currentLevel.toString()
                }, e.prototype.setMusicAndSoundToggle = function() {
                    this.toggle_Music.isChecked = !this.userData.isMusic, this.toggle_Sound.isChecked = !this.userData.isSound
                }, e.prototype.onClickHome = function() {
                    u.default.getInstance().handlePlayerInput(!1), this.uiManager.onBackHome(), this.soundManager.playClickButton(), this.node.removeFromParent()
                }, e.prototype.onClickSound = function() {
                    this.userData.isSound = !this.toggle_Sound.isChecked, this.userData.saveLocalData(), this.soundManager.playClickButton()
                }, e.prototype.onClickMusic = function() {
                    this.userData.isMusic = !this.toggle_Music.isChecked, this.userData.saveLocalData(), this.soundManager.playMusic(2)
                }, e.prototype.onClickReplay = function() {
                    l.default.getInstance().resumeGame(), l.default.getInstance().setInfoGamePlay(this.userData.gameData.listLevel[this.userData.currentLevel - 1], this.userData.artData), this.soundManager.playClickButton(), this.node.removeFromParent()
                }, e.prototype.onClickContinue = function() {
                    l.default.getInstance().resumeGame(), this.soundManager.playClickButton(), this.node.removeFromParent()
                }, r([f(cc.Toggle)], e.prototype, "toggle_Sound", void 0), r([f(cc.Toggle)], e.prototype, "toggle_Music", void 0), r([f(cc.Label)], e.prototype, "lb_Level", void 0), r([d], e)
            }(cc.Component);
        o.default = g, cc._RF.pop()
    }, {
        "../../Local/UserData": "UserData",
        "../../Manager/SoundManager": "SoundManager",
        "../../Manager/UIManager": "UIManager",
        "../../ObjectsController/CameraController": "CameraController",
        "../../ObjectsController/PadController": "PadController",
        "../Scenes/GamePlay": "GamePlay"
    }],
    PlayerLeaderBoard: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "8942bfaZWBE1KChzXzfm8XA", "PlayerLeaderBoard");
        var n, a = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            r = this && this.__decorate || function(t, e, o, n) {
                var a, r = arguments.length,
                    i = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(e, o, i) : a(e, o)) || i);
                return r > 3 && i && Object.defineProperty(e, o, i), i
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = cc._decorator,
            s = i.ccclass,
            c = i.property,
            l = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.star = null, e.lb_Index = null, e.avatar = null, e.lb_Name = null, e.lb_Score = null, e.btn_Play = null, e
                }
                return a(e, t), e.prototype.setInfoPlayerLeaderBoard = function() {}, e.prototype.onClickPlay = function() {}, r([c(cc.Sprite)], e.prototype, "star", void 0), r([c(cc.Label)], e.prototype, "lb_Index", void 0), r([c(cc.Sprite)], e.prototype, "avatar", void 0), r([c(cc.Label)], e.prototype, "lb_Name", void 0), r([c(cc.Label)], e.prototype, "lb_Score", void 0), r([c(cc.Button)], e.prototype, "btn_Play", void 0), r([s], e)
            }(cc.Component);
        o.default = l, cc._RF.pop()
    }, {}],
    Player: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "4638ePQfHhFEJx8GVuaX1rC", "Player");
        var n, a = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            r = this && this.__decorate || function(t, e, o, n) {
                var a, r = arguments.length,
                    i = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(e, o, i) : a(e, o)) || i);
                return r > 3 && i && Object.defineProperty(e, o, i), i
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("../Local/GameConfig"),
            s = t("../Local/UserData"),
            c = t("../Manager/SoundManager"),
            l = t("../UIController/Scenes/GamePlay"),
            u = t("./CameraController"),
            p = t("./Door"),
            h = t("./PadController"),
            d = t("./Teleport"),
            f = cc._decorator,
            g = f.ccclass,
            y = f.property,
            _ = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.skin = null, e.userData = null, e.cameraController = null, e.soundManager = null, e.gamePlay = null, e.tele = 0, e.direc = 0, e
                }
                return a(e, t), e.prototype.setInfoPlayer = function() {
                    this.userData = s.default.getInstance(), this.cameraController = u.default.getInstance(), this.soundManager = c.default.getInstance(), this.gamePlay = l.default.getInstance(), this.skin.spriteFrame = this.userData.skinData[this.userData.currentSkin], this.cameraController.playerNode = this.node, this.userData.player = this.node, h.default.getInstance().player = this.node, this.setSizePhysic(42, 90)
                }, e.prototype.setSizePhysic = function(t, e) {
                    this.node.getComponent(cc.PhysicsBoxCollider).size.width = t, this.node.getComponent(cc.PhysicsBoxCollider).size.height = e
                }, e.prototype.onBeginContact = function(t, e, o) {
                    o.tag == i.TAG.DOOR ? (o.node.getComponent(p.default).isChangeColor && o.node.getComponent(p.default).disablePhysic(!0), 6 == this.userData.currentLevel && 4 == this.userData.tutorialIndex && 0 == this.userData.isChicken ? this.gamePlay.tutorial41() : 6 == this.userData.currentLevel && 4 == this.userData.tutorialIndex && 1 == this.userData.isChicken && this.gamePlay.tutorial42()) : o.tag == i.TAG.ROBOT ? this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2() : (1 == this.direc && o.node.x - this.node.x > 20 || 2 == this.direc && this.node.x - o.node.x > 20 || 4 == this.direc && this.node.y - o.node.y > 20 || 3 == this.direc && o.node.y - this.node.y > 20) && this.soundManager.playWall()
                }, e.prototype.onCollisionEnter = function(t) {
                    if (t.tag == i.TAG.STAR) this.userData.star++, this.soundManager.playCollectStar(), 15 == this.userData.tutorialTemp && this.gamePlay.doneTutorial1();
                    else if (t.tag == i.TAG.EXIT) this.gamePlay.winGame(), this.soundManager.playWin();
                    else if (t.tag == i.TAG.CAGE)(-90 == this.node.angle && "Cage 2c<BoxCollider>" == t.name || 90 == this.node.angle && "Cage 2a<BoxCollider>" == t.name || 0 == this.node.angle && "Cage 2b<BoxCollider>" == t.name || 180 == this.node.angle && "Cage 2d<BoxCollider>" == t.name) && (this.gamePlay.gameOver(), this.soundManager.playLose());
                    else if (t.tag == i.TAG.CHICKEN) this.userData.isChicken = !0, this.gamePlay.changeDoor(), this.soundManager.playCollectStar();
                    else if (t.tag == i.TAG.CHEST) {
                        var e = {
                            posX: 0,
                            posY: 0
                        };
                        e.posX = t.node.x, e.posY = t.node.y, this.userData.currentChestData.level = this.userData.currentLevel, this.userData.currentChestData.chestInfo.push(e), this.userData.chest++, this.soundManager.playCollectStar()
                    } else t.tag == i.TAG.TELEPORT ? (0 == this.tele && this.teleport(t.node.getComponent(d.default).teleportIndex), 5 == this.userData.tutorialIndex && 13 == this.userData.currentLevel && this.gamePlay.doneTutorial5()) : t.tag == i.TAG.ROBOT && (this.gamePlay.gameOver(), this.soundManager.playLose());
                    t.tag != i.TAG.STAR && t.tag != i.TAG.CHICKEN && t.tag != i.TAG.CHEST || t.node.destroy()
                }, e.prototype.teleport = function(t) {
                    this.tele = t, 1 == t ? this.node.setPosition(this.userData.teleportPosition[3]) : 3 == t ? this.node.setPosition(this.userData.teleportPosition[1]) : 2 == t ? this.node.setPosition(this.userData.teleportPosition[4]) : 4 == t && this.node.setPosition(this.userData.teleportPosition[2])
                }, e.prototype.onCollisionExit = function(t) {
                    t.tag == i.TAG.DOOR ? (t.node.getComponent(p.default).isChangeColor && t.node.getComponent(p.default).disablePhysic(!1), 6 == this.userData.currentLevel && 4 == this.userData.tutorialIndex && this.userData.isChicken && this.gamePlay.doneTutorial4()) : t.tag == i.TAG.TELEPORT && (this.tele != t.node.getComponent(d.default).teleportIndex - 2 && this.tele != t.node.getComponent(d.default).teleportIndex + 2 || (this.tele = 0))
                }, e.prototype.moving = function(t) {
                    this.direc = t, this.node.getComponent(cc.RigidBody).linearVelocity.x > 10 || this.node.getComponent(cc.RigidBody).linearVelocity.y > 10 || this.node.getComponent(cc.RigidBody).linearVelocity.x < -10 || this.node.getComponent(cc.RigidBody).linearVelocity.y < -10 || (1 == t ? (this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(1800, 0), this.node.angle = -90, 1 == this.userData.tutorialIndex && 12 == this.userData.tutorialTemp && (this.userData.tutorialTemp = 15, this.gamePlay.tutorialStar())) : 2 == t ? (this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(-1800, 0), this.node.angle = 90, 1 == this.userData.tutorialIndex && 12 == this.userData.tutorialTemp && (this.userData.tutorialTemp = 15, this.gamePlay.tutorialStar())) : 3 == t ? (this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 1800), this.node.angle = 0, 1 == this.userData.tutorialIndex && 11 == this.userData.tutorialTemp && (this.userData.tutorialTemp = 12, this.gamePlay.effectTutHand12(cc.v2(100, -200)))) : (this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, -1800), this.node.angle = 180, 1 == this.userData.tutorialIndex && 11 == this.userData.tutorialTemp && (this.userData.tutorialTemp = 12, this.gamePlay.effectTutHand12(cc.v2(100, -200)))), 3 == this.userData.currentLevel && 2 == this.userData.tutorialIndex && this.gamePlay.doneTutorial2(), 5 == this.userData.currentLevel && 3 == this.userData.tutorialIndex && this.gamePlay.doneTutorial3(), this.soundManager.playSwife())
                }, r([y(cc.Sprite)], e.prototype, "skin", void 0), r([g], e)
            }(cc.Component);
        o.default = _, cc._RF.pop()
    }, {
        "../Local/GameConfig": "GameConfig",
        "../Local/UserData": "UserData",
        "../Manager/SoundManager": "SoundManager",
        "../UIController/Scenes/GamePlay": "GamePlay",
        "./CameraController": "CameraController",
        "./Door": "Door",
        "./PadController": "PadController",
        "./Teleport": "Teleport"
    }],
    Popups: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "7249cXEIDZBVKJTDHwEMk2D", "Popups");
        var n, a = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            r = this && this.__decorate || function(t, e, o, n) {
                var a, r = arguments.length,
                    i = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(e, o, i) : a(e, o)) || i);
                return r > 3 && i && Object.defineProperty(e, o, i), i
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("../../Manager/UIManager"),
            s = cc._decorator,
            c = s.ccclass,
            l = s.property,
            u = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.blackBackGround = null, e.popupFrame = null, e.UIManager = null, e
                }
                return a(e, t), e.prototype.setUp = function() {
                    this.UIManager = i.default.getInstance()
                }, e.prototype.onShow = function() {
                    var t = this;
                    this.UIManager.blockInput(!1), this.popupFrame.scale = 0, this.blackBackGround.opacity = 0, cc.tween(this.blackBackGround).to(.4, {
                        opacity: 180
                    }, {
                        easing: "cubicOut"
                    }).start(), cc.tween(this.popupFrame).to(.4, {
                        scale: 1
                    }, {
                        easing: "backOut"
                    }).start(), cc.tween(this.node).delay(.4).call(function() {
                        t.UIManager.blockInput(!0)
                    }).start()
                }, e.prototype.onHide = function() {
                    var t = this;
                    this.UIManager.blockInput(!1), cc.tween(this.blackBackGround).to(.3, {
                        opacity: 0
                    }, {
                        easing: "cubicOut"
                    }).start(), cc.tween(this.popupFrame).to(.3, {
                        scale: 0
                    }, {
                        easing: "backIn"
                    }).start(), cc.tween(this.node).delay(.4).call(function() {
                        t.UIManager.blockInput(!0), t.node.removeFromParent()
                    }).start()
                }, r([l(cc.Node)], e.prototype, "blackBackGround", void 0), r([l(cc.Node)], e.prototype, "popupFrame", void 0), r([c], e)
            }(cc.Component);
        o.default = u, cc._RF.pop()
    }, {
        "../../Manager/UIManager": "UIManager"
    }],
    ReceivedChest: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "800a8J2bZVCx49UldbY6ox6", "ReceivedChest");
        var n, a = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            r = this && this.__decorate || function(t, e, o, n) {
                var a, r = arguments.length,
                    i = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(e, o, i) : a(e, o)) || i);
                return r > 3 && i && Object.defineProperty(e, o, i), i
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("../../Local/UserData"),
            s = t("../../Manager/UIManager"),
            c = t("../../ObjectsController/CameraController"),
            l = cc._decorator,
            u = l.ccclass,
            p = l.property,
            h = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.lb_Coin = null, e.chest = null, e.star = null, e.cameraController = null, e.userData = null, e.uiManager = null, e.timePlaySound = 2, e.isAfterBonus = !1, e
                }
                return a(e, t), e.prototype.initReceivedChest = function() {
                    this.cameraController = c.default.getInstance(), this.userData = i.default.getInstance(), this.uiManager = s.default.getInstance()
                }, e.prototype.setInfoReceivedChest = function(t) {
                    this.isAfterBonus = t, this.cameraController.handlePopup(this.node), this.runEffectChest(), this.lb_Coin.string = "+" + this.randomCoin().toString(), this.handlePlayerInput(!0)
                }, e.prototype.randomCoin = function() {
                    var t;
                    return t = 25 * this.userData.chest, this.userData.coin += t, this.userData.saveCurrentData(), t
                }, e.prototype.closePopup = function() {
                    this.handlePlayerInput(!1), this.node.removeFromParent(), this.isAfterBonus || this.uiManager.onShowResult(!0)
                }, e.prototype.handlePlayerInput = function(t) {
                    var e = this;
                    void 0 === t && (t = !0), t ? this.node.on("touchstart", function(t) {
                        e.onTouchStart(t)
                    }, this) : this.node.off("touchstart")
                }, e.prototype.onTouchStart = function() {
                    this.closePopup()
                }, e.prototype.runEffectChest = function() {
                    var t = this;
                    this.chest.scale = 0, this.star.opacity = 0, cc.tween(this.chest).to(.5, {
                        scale: 1.2
                    }, {
                        easing: "elasticOut"
                    }).call(function() {
                        t.effectChest()
                    }).start(), cc.tween(this.star).to(1, {
                        opacity: 255
                    }, {
                        easing: "cubicOut"
                    }).start()
                }, e.prototype.effectChest = function() {
                    var t = this;
                    cc.tween(this.chest).to(this.timePlaySound - .5, {
                        scale: 1
                    }, {
                        easing: "elasticIn"
                    }).call(function() {
                        t.closePopup()
                    }).start()
                }, r([p(cc.Label)], e.prototype, "lb_Coin", void 0), r([p(cc.Node)], e.prototype, "chest", void 0), r([p(cc.Node)], e.prototype, "star", void 0), r([u], e)
            }(cc.Component);
        o.default = h, cc._RF.pop()
    }, {
        "../../Local/UserData": "UserData",
        "../../Manager/UIManager": "UIManager",
        "../../ObjectsController/CameraController": "CameraController"
    }],
    Result: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "55ef3Rrso9G36m87YFGuR7G", "Result");
        var n, a = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            r = this && this.__decorate || function(t, e, o, n) {
                var a, r = arguments.length,
                    i = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(e, o, i) : a(e, o)) || i);
                return r > 3 && i && Object.defineProperty(e, o, i), i
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("../../Local/GameConfig"),
            s = t("../../Local/UserData"),
            c = t("../../ObjectsController/CameraController"),
            l = t("../Scenes/GamePlay"),
            u = t("../../Manager/SoundManager"),
            p = t("../../Manager/UIManager"),
            h = t("../../ObjectsController/PadController"),
            d = t("../../Utils/FacebookAPI"),
            f = cc._decorator,
            g = f.ccclass,
            y = f.property,
            _ = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.lb_Title = null, e.light = null, e.dog = null, e.listStars = [], e.listSpriteFrames = [], e.buttonLose = null, e.buttonX2 = null, e.buttonWin = null, e.btnNextLevel = null, e.stars = null, e.userData = null, e.soundManager = null, e.cameraController = null, e.uiManager = null, e
                }
                return a(e, t), e.prototype.initResult = function() {
                    this.userData = s.default.getInstance(), this.soundManager = u.default.getInstance(), this.cameraController = c.default.getInstance(), this.uiManager = p.default.getInstance()
                }, e.prototype.setInfoResult = function(t) {
                    this.cameraController.handlePopup(this.node), t ? this.setForWin() : this.setForLose()
                }, e.prototype.setForWin = function() {
                    this.lb_Title.string = i.WIN_TITLE, this.light.active = !0, this.stars.active = !0, this.dog.spriteFrame = this.listSpriteFrames[0];
                    for (var t = 0; t < this.listStars.length; t++) this.listStars[t].spriteFrame = t <= s.default.getInstance().star - 1 ? this.listSpriteFrames[2] : this.listSpriteFrames[3];
                    this.buttonX2.node.active = s.default.getInstance().chest > 0, this.buttonX2.interactable = !0, this.buttonX2.enableAutoGrayEffect = !1, this.buttonLose.active = !1, this.buttonWin.active = !0, 32 == this.userData.currentLevel && (this.btnNextLevel.active = !1), showAFG()
                }, e.prototype.setForLose = function() {
                    this.lb_Title.string = i.LOSE_TITLE, this.light.active = !1, this.stars.active = !1, this.dog.spriteFrame = this.listSpriteFrames[1];
                    for (var t = 0; t < this.listStars.length; t++) this.listStars[t].spriteFrame = this.listSpriteFrames[3];
                    this.buttonLose.active = !0, this.buttonWin.active = !1, showAFG()

                }, e.prototype.onClickNextLevel = function() {
                    l.default.getInstance().resumeGame(), l.default.getInstance().setInfoGamePlay(this.userData.gameData.listLevel[this.userData.currentLevel], this.userData.artData), this.soundManager.playClickButton(), this.node.removeFromParent()
                }, e.prototype.onClickAds = function() {
                    var t = this;
                    d.default.getInst().showAdsVideo(function() {
                        return t.doubleCoin()
                    })
                }, e.prototype.doubleCoin = function() {
                    this.uiManager.onShowReceivedChest(!0), this.buttonX2.interactable = !1, this.buttonX2.enableAutoGrayEffect = !0
                }, e.prototype.onClickHome = function() {
                    h.default.getInstance().handlePlayerInput(!1), this.uiManager.onBackHome(), this.soundManager.playClickButton(), this.node.removeFromParent()
                }, e.prototype.onClickReplay = function() {
                    l.default.getInstance().resumeGame(), l.default.getInstance().setInfoGamePlay(this.userData.gameData.listLevel[this.userData.currentLevel - 1], this.userData.artData), this.soundManager.playClickButton(), this.node.removeFromParent()
                }, r([y(cc.Label)], e.prototype, "lb_Title", void 0), r([y(cc.Node)], e.prototype, "light", void 0), r([y(cc.Sprite)], e.prototype, "dog", void 0), r([y(cc.Sprite)], e.prototype, "listStars", void 0), r([y(cc.SpriteFrame)], e.prototype, "listSpriteFrames", void 0), r([y(cc.Node)], e.prototype, "buttonLose", void 0), r([y(cc.Button)], e.prototype, "buttonX2", void 0), r([y(cc.Node)], e.prototype, "buttonWin", void 0), r([y(cc.Node)], e.prototype, "btnNextLevel", void 0), r([y(cc.Node)], e.prototype, "stars", void 0), r([g], e)
            }(cc.Component);
        o.default = _, cc._RF.pop()
    }, {
        "../../Local/GameConfig": "GameConfig",
        "../../Local/UserData": "UserData",
        "../../Manager/SoundManager": "SoundManager",
        "../../Manager/UIManager": "UIManager",
        "../../ObjectsController/CameraController": "CameraController",
        "../../ObjectsController/PadController": "PadController",
        "../../Utils/FacebookAPI": "FacebookAPI",
        "../Scenes/GamePlay": "GamePlay"
    }],
    Robot: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "a6212THGslGK4OYq8XCZ+bd", "Robot");
        var n, a = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            r = this && this.__decorate || function(t, e, o, n) {
                var a, r = arguments.length,
                    i = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(e, o, i) : a(e, o)) || i);
                return r > 3 && i && Object.defineProperty(e, o, i), i
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("../Local/GameConfig"),
            s = t("../Local/UserData"),
            c = cc._decorator,
            l = c.ccclass,
            u = c.property,
            p = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.skull = null, e.flipIndex = 1, e.typeMoving = 0, e.userData = null, e
                }
                return a(e, t), e.prototype.setInfoRobot = function(t) {
                    this.userData = s.default.getInstance(), this.typeMoving = t, 2 == t && (this.node.angle = -90), 5 == this.userData.currentLevel && 3 == this.userData.tutorialIndex && (this.skull.active = !0), this.moving(t)
                }, e.prototype.moving = function(t) {
                    var e = this;
                    1 == t ? cc.tween(this.node).by(.01, {
                        y: 1.2 * this.flipIndex
                    }, {
                        easing: "smooth"
                    }).call(function() {
                        e.moving(t)
                    }).start() : 2 == t ? cc.tween(this.node).by(.01, {
                        x: 1.2 * this.flipIndex
                    }, {
                        easing: "smooth"
                    }).call(function() {
                        e.moving(t)
                    }).start() : 3 == t && cc.tween(this.node).by(.01, {
                        angle: -1
                    }).call(function() {
                        e.moving(t)
                    }).start()
                }, e.prototype.flip = function() {
                    this.flipIndex *= -1, this.turnAround()
                }, e.prototype.turnAround = function() {
                    var t = this;
                    this.node.stopAllActions(), cc.tween(this.node).by(1, {
                        angle: -180
                    }, {
                        easing: "cubicOut"
                    }).call(function() {
                        t.moving(t.typeMoving)
                    }).start()
                }, e.prototype.onBeginContact = function(t, e, o) {
                    o.tag == i.TAG.PLAYER && o.tag != i.TAG.ROBOT || this.flip()
                }, e.prototype.onCollisionEnter = function(t) {
                    t.tag, i.TAG.PLAYER
                }, r([u(cc.Node)], e.prototype, "skull", void 0), r([l], e)
            }(cc.Component);
        o.default = p, cc._RF.pop()
    }, {
        "../Local/GameConfig": "GameConfig",
        "../Local/UserData": "UserData"
    }],
    Scenes: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "9c87eAFKB1BV77eG3d2zA6c", "Scenes");
        var n, a = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            r = this && this.__decorate || function(t, e, o, n) {
                var a, r = arguments.length,
                    i = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(e, o, i) : a(e, o)) || i);
                return r > 3 && i && Object.defineProperty(e, o, i), i
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("../../Manager/UIManager"),
            s = t("../../Local/UserData"),
            c = t("../../Manager/SoundManager"),
            l = cc._decorator,
            u = l.ccclass,
            p = l.property,
            h = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.blackBackGround = null, e.sceneFrame = null, e.UIManager = null, e.UserData = null, e
                }
                return a(e, t), e.prototype.onLoad = function() {
                    this.UIManager = i.default.getInstance(), this.UserData = s.default.getInstance()
                }, e.prototype.onShow = function(t, e) {
                    var o = this;
                    void 0 === t && (t = !1), void 0 === e && (e = 1), this.sceneFrame.x = e * (cc.winSize.width + this.node.width) / 2, t ? (this.blackBackGround.opacity = 0, cc.tween(this.blackBackGround).to(.5, {
                        opacity: 180
                    }, {
                        easing: "cubicOut"
                    }).start(), cc.tween(this.sceneFrame).to(.5, {
                        x: 0
                    }, {
                        easing: "cubicOut"
                    }).call(function() {
                        o.UIManager.enableInput(!0)
                    }).start()) : (this.blackBackGround.opacity = 180, this.sceneFrame.x = 0, this.UIManager.enableInput(!0)), c.default.getInstance().playClickButton()
                }, e.prototype.onHide = function(t, e) {
                    var o = this;
                    void 0 === e && (e = 1), cc.tween(this.blackBackGround).to(.5, {
                        opacity: 0
                    }, {
                        easing: "cubicOut"
                    }).start(), cc.tween(this.sceneFrame).to(.5, {
                        x: e * (cc.winSize.width + this.node.width) / 2
                    }, {
                        easing: "cubicOut"
                    }).call(function() {
                        o.UIManager.enableInput(!0), o.node.removeFromParent()
                    }).start(), c.default.getInstance().playClickButton()
                }, r([p(cc.Node)], e.prototype, "blackBackGround", void 0), r([p(cc.Node)], e.prototype, "sceneFrame", void 0), r([u], e)
            }(cc.Component);
        o.default = h, cc._RF.pop()
    }, {
        "../../Local/UserData": "UserData",
        "../../Manager/SoundManager": "SoundManager",
        "../../Manager/UIManager": "UIManager"
    }],
    ScreenCapture: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "2b9b4EAcIlMJaTJ5FgpVVx3", "ScreenCapture");
        var n, a = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            r = this && this.__decorate || function(t, e, o, n) {
                var a, r = arguments.length,
                    i = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(e, o, i) : a(e, o)) || i);
                return r > 3 && i && Object.defineProperty(e, o, i), i
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = cc._decorator,
            s = i.ccclass,
            c = i.property,
            l = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.camera = null, e.pf_shareImg = null, e.pf_inviteImg = null, e.pf_shareCupImg = null, e
                }
                var o;
                return a(e, t), o = e, e.getInstance = function() {
                    return o.instance || (o.instance = new o), o.instance
                }, e.prototype.onLoad = function() {
                    o.instance = this
                }, e.prototype.captureInviteImg = function() {
                    var t, e = cc.instantiate(this.pf_inviteImg);
                    return this.node.addChild(e), t = this.captureNode(e.position, e.getContentSize()), e.destroy(), t
                }, e.prototype.captureAskFriendsImg = function(t, e) {
                    var o = this.node.convertToNodeSpaceAR(t.convertToWorldSpaceAR(cc.v2()));
                    return this.captureNode(o, e)
                }, e.prototype.captureNode = function(t, e) {
                    this.camera.node.active = !0, this.camera.node.x = t.x, this.camera.node.y = t.y, this.camera.orthoSize = e.height / 2;
                    var o = new cc.RenderTexture;
                    o.initWithSize(e.width, e.height, 36168), this.camera.targetTexture = o;
                    var n = o.width,
                        a = o.height,
                        r = document.createElement("canvas"),
                        i = r.getContext("2d");
                    r.width = n, r.height = a, this.camera.render(void 0);
                    for (var s = o.readPixels(), c = 4 * n, l = 0; l < a; l++) {
                        for (var u = a - 1 - l, p = i.createImageData(n, 1), h = u * n * 4, d = 0; d < c; d++) p.data[d] = s[h + d];
                        i.putImageData(p, 0, l)
                    }
                    return this.camera.node.active = !1, r.toDataURL("image/png")
                }, e.instance = null, r([c(cc.Camera)], e.prototype, "camera", void 0), r([c(cc.Prefab)], e.prototype, "pf_shareImg", void 0), r([c(cc.Prefab)], e.prototype, "pf_inviteImg", void 0), r([c(cc.Prefab)], e.prototype, "pf_shareCupImg", void 0), o = r([s], e)
            }(cc.Component);
        o.default = l, cc._RF.pop()
    }, {}],
    SelectLevel: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "1b20aIOIZ1OS561WYvNDhkF", "SelectLevel");
        var n, a = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            r = this && this.__decorate || function(t, e, o, n) {
                var a, r = arguments.length,
                    i = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(e, o, i) : a(e, o)) || i);
                return r > 3 && i && Object.defineProperty(e, o, i), i
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("../../Manager/UIManager"),
            s = t("../../ObjectsController/LevelPage"),
            c = t("../../Manager/SoundManager"),
            l = cc._decorator,
            u = l.ccclass,
            p = l.property,
            h = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.pf_LevelPage = null, e.content = null, e.soundManager = null, e
                }
                var o;
                return a(e, t), o = e, e.getInstance = function() {
                    return o.instance || (o.instance = new o), o.instance
                }, e.prototype.initSelectLevel = function() {
                    o.instance = this, this.soundManager = c.default.getInstance()
                }, e.prototype.setInfoSelectLevel = function(t) {
                    this.content.removeAllChildren();
                    for (var e = 0; e < t / 12; e++) {
                        var o = cc.instantiate(this.pf_LevelPage);
                        o.name += e, o.getComponent(s.default).setInfoLevelPage(e, t), this.content.addChild(o)
                    }
                }, e.prototype.onClickBack = function() {
                    i.default.getInstance().onShowHome(), this.onHideSelectLevel(), this.soundManager.playClickButton()
                }, e.prototype.onHideSelectLevel = function() {
                    this.node.removeFromParent()
                }, e.instance = null, r([p(cc.Prefab)], e.prototype, "pf_LevelPage", void 0), r([p(cc.Node)], e.prototype, "content", void 0), o = r([u], e)
            }(cc.Component);
        o.default = h, cc._RF.pop()
    }, {
        "../../Manager/SoundManager": "SoundManager",
        "../../Manager/UIManager": "UIManager",
        "../../ObjectsController/LevelPage": "LevelPage"
    }],
    Services: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "bf671LfV4xAY709pYUPCUJq", "Services"), Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.services = void 0;
        var n = "https://fbservices.zonmob.com/",
            a = "942823359757041",
            r = "admin",
            i = "VHVhbmxkMTUxMCE=";
        o.services = {
            urlGetCurrentPlayer: {
                url: n + "lb/getMainPlayer",
                method: "GET"
            },
            urlGetLeaderboard: {
                url: n + "lb/leaderBoardByGame",
                method: "POST"
            },
            urlPostHighScore: {
                url: n + "lb/postPoint",
                method: "POST"
            },
            urlDeleteHighScore: {
                url: n + "lb/dropPlayer",
                method: "GET"
            },
            init: function() {},
            obStoreTime: {},
            onServerRespond: function(t, e, o, n) {
                if (console.log("onServerRespond  url ", n), 200 == t.status) {
                    var a = void 0;
                    try {
                        a = JSON.parse(t.responseText)
                    } catch (r) {}
                    "object" == typeof a && null !== a || (a = {}), e && e(a)
                } else o && o(t.responseText)
            },
            queryServerApi: function(t, e, o, n) {
                var a = this,
                    r = t.url;
                if ("GET" == t.method) {
                    var i = "";
                    for (var s in e) i += "&" + s + "=" + encodeURIComponent(e[s]);
                    r += "?" + i.replace("&", "")
                }
                var c = cc.loader.getXMLHttpRequest();
                c.open(t.method, r), c.setRequestHeader("Content-Type", "application/json;charset=UTF-8"), window._accessToken && c.setRequestHeader("X-Access-Token", window._accessToken), "GET" == t.method ? c.send() : c.send(JSON.stringify(e)), c.onreadystatechange = function() {
                    4 == c.readyState && a.onServerRespond(c, o, n, t.url)
                }
            },
            deletePlayerHighScore: function(t, e, o) {
                this.queryServerApi(this.urlDeleteHighScore, {
                    gameId: a,
                    playerId: t,
                    name: r,
                    pwd: i
                }, function() {
                    return e()
                }, function() {
                    return o()
                })
            },
            getLeaderBoardFrienld: function(t, e, o) {
                var n = this,
                    s = this.genID(),
                    c = new Date;
                this.obStoreTime[s] = {
                    start: c.getTime()
                }, t || (t = []);
                var l = {
                    listFriend: t,
                    gameId: a,
                    name: r,
                    pwd: i
                };
                this.queryServerApi(this.urlGetLeaderboard, l, function(t) {
                    var o = new Date;
                    n.obStoreTime[s].start, n.obStoreTime[s].end = o.getTime(), e && e(t)
                }, function() {
                    o && o()
                })
            },
            pushCurrentHighScore: function(t, e, o, n) {
                var s = this,
                    c = this.genID(),
                    l = new Date;
                this.obStoreTime[c] = {
                    start: l.getTime()
                }, this.queryServerApi(this.urlPostHighScore, {
                    gameId: a,
                    playerId: t,
                    score: e,
                    name: r,
                    pwd: i
                }, function(t) {
                    var e = new Date;
                    s.obStoreTime[c].start, s.obStoreTime[c].end = e.getTime(), o && o(t)
                }, function() {
                    n && n()
                })
            },
            getCurrentPlayer: function(t, e) {
                var o = this.genID(),
                    n = new Date;
                this.obStoreTime[o] = {
                    start: n.getTime()
                }, this.queryServerApi(this.urlGetCurrentPlayer, {
                    playerId: FBInstant.player.getID(),
                    gameId: a,
                    name: r,
                    pwd: i
                }, function(e) {
                    t && t(e)
                }, function() {
                    e && e()
                })
            },
            genID: function() {
                return "_" + Math.random().toString(36).substr(2, 9)
            }
        }, cc._RF.pop()
    }, {}],
    ShareCupImg: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "6bf1bxSdpRILLHA+31SAZik", "ShareCupImg");
        var n, a = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            r = this && this.__decorate || function(t, e, o, n) {
                var a, r = arguments.length,
                    i = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(e, o, i) : a(e, o)) || i);
                return r > 3 && i && Object.defineProperty(e, o, i), i
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = cc._decorator,
            s = i.ccclass,
            c = i.property,
            l = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.cup = null, e.lb_Title = null, e
                }
                return a(e, t), e.prototype.setInfoShareCupImg = function(t, e) {
                    this.lb_Title.string = "Awesome! " + t + " got 10 consecutive mission\nCongrats " + t + "!", this.cup.spriteFrame = e
                }, r([c(cc.Sprite)], e.prototype, "cup", void 0), r([c(cc.Label)], e.prototype, "lb_Title", void 0), r([s], e)
            }(cc.Component);
        o.default = l, cc._RF.pop()
    }, {}],
    ShareImg: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "8eb7dShms9P4KDFOvKuingj", "ShareImg");
        var n, a = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            r = this && this.__decorate || function(t, e, o, n) {
                var a, r = arguments.length,
                    i = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(e, o, i) : a(e, o)) || i);
                return r > 3 && i && Object.defineProperty(e, o, i), i
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = cc._decorator,
            s = i.ccclass,
            c = i.property,
            l = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.lb_Score = null, e.avatarImg = null, e.lb_namePlayer = null, e
                }
                return a(e, t), e.prototype.setInfoShareImg = function(t, e, o) {
                    this.avatarImg.spriteFrame = t, this.lb_Score.string = o.toString() + " scored " + e.toString() + " !", this.lb_namePlayer.string = o.toString()
                }, r([c(cc.Label)], e.prototype, "lb_Score", void 0), r([c(cc.Sprite)], e.prototype, "avatarImg", void 0), r([c(cc.Label)], e.prototype, "lb_namePlayer", void 0), r([s], e)
            }(cc.Component);
        o.default = l, cc._RF.pop()
    }, {}],
    Shop: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "7decefxPDVL0JOrj7o6oZSW", "Shop");
        var n, a = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            r = this && this.__decorate || function(t, e, o, n) {
                var a, r = arguments.length,
                    i = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(e, o, i) : a(e, o)) || i);
                return r > 3 && i && Object.defineProperty(e, o, i), i
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("../../Local/UserData"),
            s = t("../../Manager/SoundManager"),
            c = t("../../ObjectsController/SkinFrame"),
            l = cc._decorator,
            u = l.ccclass,
            p = l.property,
            h = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.lb_Coin = null, e.content = null, e.pf_SkinFrame = null, e.soundManager = null, e.userData = null, e
                }
                var o;
                return a(e, t), o = e, e.getInstance = function() {
                    return o.instance || (o.instance = new o), o.instance
                }, e.prototype.initShop = function() {
                    o.instance = this, this.soundManager = s.default.getInstance(), this.userData = i.default.getInstance()
                }, e.prototype.setInfoShop = function() {
                    this.updateCoin(), this.loadSkinFrame(), this.updateSkinBought()
                }, e.prototype.loadSkinFrame = function() {
                    if (!(this.content.childrenCount > 0))
                        for (var t = this.userData.skinData, e = 0; e < t.length; e++) {
                            var o = cc.instantiate(this.pf_SkinFrame),
                                n = this.userData.skinPriceData[e];
                            0 == n && e == this.userData.currentSkin && (n = 1), o.getComponent(c.default).setInfoSkinFrame(t[e], n, e), this.content.addChild(o)
                        }
                }, e.prototype.updateSkinSelected = function() {
                    this.content.children.forEach(function(t) {
                        1 == t.getComponent(c.default).price && t.getComponent(c.default).change(0)
                    })
                }, e.prototype.updateSkinBought = function() {
                    this.content.children.forEach(function(t) {
                        t.getComponent(c.default).checkBuyButton()
                    })
                }, e.prototype.updateCoin = function() {
                    this.lb_Coin.string = this.userData.coin.toString()
                }, e.prototype.onClickBack = function() {
                    this.onHideScene(), this.soundManager.playClickButton()
                }, e.prototype.onHideScene = function() {
                    this.node.removeFromParent()
                }, e.instance = null, r([p(cc.Label)], e.prototype, "lb_Coin", void 0), r([p(cc.Node)], e.prototype, "content", void 0), r([p(cc.Prefab)], e.prototype, "pf_SkinFrame", void 0), o = r([u], e)
            }(cc.Component);
        o.default = h, cc._RF.pop()
    }, {
        "../../Local/UserData": "UserData",
        "../../Manager/SoundManager": "SoundManager",
        "../../ObjectsController/SkinFrame": "SkinFrame"
    }],
    SkinFrame: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "274b1M7wxFOwqMxw8xe8rRJ", "SkinFrame");
        var n, a = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            r = this && this.__decorate || function(t, e, o, n) {
                var a, r = arguments.length,
                    i = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(e, o, i) : a(e, o)) || i);
                return r > 3 && i && Object.defineProperty(e, o, i), i
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("../Local/GameConfig"),
            s = t("../Local/UserData"),
            c = t("../Manager/SoundManager"),
            l = t("../UIController/Scenes/Shop"),
            u = cc._decorator,
            p = u.ccclass,
            h = u.property,
            d = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.skin = null, e.lb_Price = null, e.tick = null, e.btn_Buy = null, e.btnSelect = null, e.lbBuy = null, e.index = 0, e.price = 0, e.soundManager = null, e.shop = null, e.userData = null, e
                }
                return a(e, t), e.prototype.setInfoSkinFrame = function(t, e, o) {
                    this.soundManager = c.default.getInstance(), this.userData = s.default.getInstance(), this.shop = l.default.getInstance(), this.skin.spriteFrame = t, this.lb_Price.string = e.toString(), this.index = o, this.change(e)
                }, e.prototype.change = function(t) {
                    this.price = t, 1 == t ? (this.tick.active = !0, this.lb_Price.node.active = !1, this.btn_Buy.node.active = !1, this.btnSelect.active = !1) : 0 == t ? (this.tick.active = !1, this.lb_Price.node.active = !1, this.btn_Buy.node.active = !1, this.btnSelect.active = !0) : (this.tick.active = !1, this.lb_Price.node.active = !0, this.btn_Buy.node.active = !0, this.userData.coin < t && (this.lbBuy.color = (new cc.Color).fromHEX(i.COLOR.BTN_BUY_DIS), this.btn_Buy.interactable = !1), this.btnSelect.active = !1)
                }, e.prototype.checkBuyButton = function() {
                    this.userData.coin < this.price ? (this.lbBuy.color = (new cc.Color).fromHEX(i.COLOR.BTN_BUY_DIS), this.btn_Buy.interactable = !1) : (this.lbBuy.color = (new cc.Color).fromHEX(i.COLOR.BTN_BUY_EN), this.btn_Buy.interactable = !0)
                }, e.prototype.onClickSelect = function() {
                    this.shop.updateSkinSelected(), this.change(1), this.userData.currentSkin = this.index, this.userData.saveCurrentData(), this.soundManager.playClickButton()
                }, e.prototype.onClickBuy = function() {
                    this.userData.coin -= this.price, this.userData.skinPriceData[this.index] = 0, this.userData.saveCurrentData(), this.change(0), this.shop.updateCoin(), this.shop.updateSkinBought(), this.soundManager.playClickButton()
                }, r([h(cc.Sprite)], e.prototype, "skin", void 0), r([h(cc.Label)], e.prototype, "lb_Price", void 0), r([h(cc.Node)], e.prototype, "tick", void 0), r([h(cc.Button)], e.prototype, "btn_Buy", void 0), r([h(cc.Node)], e.prototype, "btnSelect", void 0), r([h(cc.Node)], e.prototype, "lbBuy", void 0), r([p], e)
            }(cc.Component);
        o.default = d, cc._RF.pop()
    }, {
        "../Local/GameConfig": "GameConfig",
        "../Local/UserData": "UserData",
        "../Manager/SoundManager": "SoundManager",
        "../UIController/Scenes/Shop": "Shop"
    }],
    SoundManager: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "6308ej5Hp5NBqvyDDZU7qRi", "SoundManager");
        var n, a = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            r = this && this.__decorate || function(t, e, o, n) {
                var a, r = arguments.length,
                    i = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(e, o, i) : a(e, o)) || i);
                return r > 3 && i && Object.defineProperty(e, o, i), i
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("../Local/UserData"),
            s = cc._decorator,
            c = s.ccclass,
            l = s.property,
            u = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.bgMusic = null, e.listSound = [], e.listBgSound = [], e.userData = null, e
                }
                var o;
                return a(e, t), o = e, e.getInstance = function() {
                    return o.instance || (o.instance = new o), o.instance
                }, e.prototype.onLoad = function() {
                    o.instance = this, this.userData = i.default.getInstance()
                }, e.prototype.playMusic = function(t) {
                    this.userData.isMusic ? (this.bgMusic.clip = 1 == t ? this.listBgSound[0] : this.listBgSound[1], this.bgMusic.play()) : this.bgMusic.pause(), this.bgMusic.clip
                }, e.prototype.getSound = function(t, e) {
                    this.userData.isSound && cc.audioEngine.play(this.listSound[t], !1, e)
                }, e.prototype.playClickButton = function(t) {
                    void 0 === t && (t = 3), this.getSound(0, t)
                }, e.prototype.playLose = function(t) {
                    void 0 === t && (t = 1), this.getSound(1, t)
                }, e.prototype.playWin = function(t) {
                    void 0 === t && (t = 1), this.getSound(2, t)
                }, e.prototype.playCollectStar = function(t) {
                    void 0 === t && (t = 1), this.getSound(3, t)
                }, e.prototype.playStart = function(t) {
                    void 0 === t && (t = .4), this.getSound(4, t)
                }, e.prototype.playSwife = function(t) {
                    void 0 === t && (t = 1), this.getSound(5, t)
                }, e.prototype.playWall = function(t) {
                    void 0 === t && (t = 1), this.getSound(6, t)
                }, e.instance = null, r([l(cc.AudioSource)], e.prototype, "bgMusic", void 0), r([l([cc.AudioClip])], e.prototype, "listSound", void 0), r([l(cc.AudioClip)], e.prototype, "listBgSound", void 0), o = r([c], e)
            }(cc.Component);
        o.default = u, cc._RF.pop()
    }, {
        "../Local/UserData": "UserData"
    }],
    Teleport: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "a8dcfA4osJPH6kSdUtcTqtQ", "Teleport");
        var n, a = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            r = this && this.__decorate || function(t, e, o, n) {
                var a, r = arguments.length,
                    i = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(e, o, i) : a(e, o)) || i);
                return r > 3 && i && Object.defineProperty(e, o, i), i
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = cc._decorator,
            s = i.ccclass,
            c = (i.property, function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.teleportIndex = 0, e
                }
                return a(e, t), e.prototype.setInfoTeleport = function(t) {
                    this.teleportIndex = t, this.effectTeleport()
                }, e.prototype.effectTeleport = function() {
                    var t = this;
                    cc.tween(this.node).by(1, {
                        angle: -60
                    }).call(function() {
                        t.effectTeleport()
                    }).start()
                }, r([s], e)
            }(cc.Component));
        o.default = c, cc._RF.pop()
    }, {}],
    UIManager: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "c70336tkfNNDa5TheTbekEW", "UIManager");
        var n, a = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            r = this && this.__decorate || function(t, e, o, n) {
                var a, r = arguments.length,
                    i = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(e, o, i) : a(e, o)) || i);
                return r > 3 && i && Object.defineProperty(e, o, i), i
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("../Local/GameConfig"),
            s = t("../Local/UserData"),
            c = t("../ObjectsController/CameraController"),
            l = t("../UIController/Popups/Pause"),
            u = t("../UIController/Popups/ReceivedChest"),
            p = t("../UIController/Popups/Result"),
            h = t("../UIController/Scenes/GamePlay"),
            d = t("../UIController/Scenes/Home"),
            f = t("../UIController/Scenes/LeaderBoard"),
            g = t("../UIController/Scenes/LoadResource"),
            y = t("../UIController/Scenes/SelectLevel"),
            _ = t("../UIController/Scenes/Shop"),
            m = t("../Utils/FacebookAPI"),
            v = t("../Utils/FBConfigs"),
            C = t("../Utils/LeaderBoardAPI"),
            b = cc._decorator,
            I = b.ccclass,
            S = b.property,
            D = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.node_UIZone = null, e.node_BlockInput = null, e.pf_LoadResource = null, e.ratioDesign = 0, e.loadResource = null, e.home = null, e.gamePlay = null, e.leaderBoard = null, e.shop = null, e.selectLevel = null, e.result = null, e.pause = null, e.receivedChest = null, e.userData = null, e
                }
                var o;
                return a(e, t), o = e, e.getInstance = function() {
                    return o.instance || (o.instance = new o), o.instance
                }, e.prototype.onLoad = function() {
                    o.instance = this, this.userData = s.default.getInstance(), this.offSplash(), this.fitScreen(), this.somePhysicalFunctions(), this.someSpecialFunctions(), this.createLoadResource(), this.loadUnderResources(), this.loadMainResources(), this.addFaceBookApi()
                }, e.prototype.blockInput = function(t) {
                    void 0 === t && (t = !0), this.node_BlockInput.active = t
                }, e.prototype.offSplash = function() {
                    var t = document.getElementById("htmlLoadingBackground");
                    t && (t.style.display = "none")
                }, e.prototype.fitScreen = function() {
                    this.ratioDesign = cc.winSize.width / cc.winSize.height, cc.winSize.height < 1136 && (cc.Canvas.instance.fitHeight = !0)
                }, e.prototype.someSpecialFunctions = function() {
                    cc.macro.ENABLE_MULTI_TOUCH = !1, cc.director.getPhysicsManager().enabledAccumulator = !0, console.log("Frame Rate: " + cc.game.getFrameRate())
                }, e.prototype.somePhysicalFunctions = function() {
                    cc.director.getPhysicsManager().enabled = !0, cc.director.getCollisionManager().enabled = !0
                }, e.prototype.addFaceBookApi = function() {
                    m.default.getInst().askSubscribedBot(), m.default.getInst().checkSupportAds(), m.default.getInst().preLoadAdsInter(), m.default.getInst().preLoadAdsVideo(), m.default.getInst().showBannerAds()
                }, e.prototype.faceBookPause = function() {
                    var t = this;
                    v.ON_FB && FBInstant.onPause(function() {
                        t.userData.isPause || "UIZone" != t.gamePlay.node.parent.name || t.gamePlay.getComponent(h.default).onClickPause()
                    })
                }, e.prototype.createLoadResource = function() {
                    this.loadResource = cc.instantiate(this.pf_LoadResource), this.loadResource.getComponent(g.default).initLoadResource(), this.onShowLoadResource(1)
                }, e.prototype.onShowLoadResource = function(t) {
                    this.blockInput(!0), this.node_UIZone.addChild(this.loadResource), this.loadResource.getComponent(g.default).setInfoLoadResource(t)
                }, e.prototype.loadMainResources = function() {
                    var t = this;
                    this.userData.initUserData(), this.loadResource.getComponent(g.default).setStartTime((new Date).getTime()), v.ON_FB ? FBInstant.player.getDataAsync(["UserData"]).then(function(e) {
                        t.userData.setUserDataFromFB(e.UserData), t.loadResource.getComponent(g.default).updateLoadingBar(.1, (new Date).getTime(), "DATA_FACEBOOK_ON_FB")
                    }) : this.loadResource.getComponent(g.default).updateLoadingBar(.1, (new Date).getTime(), "DATA_FACEBOOK_OFF_FB"), cc.resources.load("Prefabs/Scenes/Home", cc.Prefab, function(e, o) {
                        t.home = cc.instantiate(o), t.home.getComponent(d.default).initHome(), t.loadResource.getComponent(g.default).updateLoadingBar(.1, (new Date).getTime(), "HOME_DONE")
                    }), cc.resources.load("Prefabs/Scenes/Shop", cc.Prefab, function(e, o) {
                        t.shop = cc.instantiate(o), t.shop.getComponent(_.default).initShop(), t.loadResource.getComponent(g.default).updateLoadingBar(.2, (new Date).getTime(), "SHOP_DONE")
                    }), cc.resources.load("Prefabs/Scenes/GamePlay", cc.Prefab, function(e, o) {
                        t.gamePlay = cc.instantiate(o), t.gamePlay.getComponent(h.default).initGamePlay(), t.loadResource.getComponent(g.default).updateLoadingBar(.2, (new Date).getTime(), "GAMEPLAY_DONE")
                    }), cc.resources.load("Prefabs/Scenes/SelectLevel", cc.Prefab, function(e, o) {
                        t.selectLevel = cc.instantiate(o), t.selectLevel.getComponent(y.default).initSelectLevel(), t.loadResource.getComponent(g.default).updateLoadingBar(.1, (new Date).getTime(), "SELECTLEVEL_DONE")
                    }), cc.resources.loadDir(i.PATH_ITEM, cc.SpriteFrame, null, function(e, o) {
                        t.userData.artData = o, t.loadResource.getComponent(g.default).updateLoadingBar(.1, (new Date).getTime(), "ARTDATA_DONE")
                    }), cc.resources.load("GameData", cc.JsonAsset, null, function(e, o) {
                        t.userData.tempGameData = o, t.userData.gameData = t.userData.tempGameData.json, t.loadResource.getComponent(g.default).updateLoadingBar(.1, (new Date).getTime(), "GAMEDATA_DONE")
                    }), cc.resources.loadDir(i.PATH_SKIN, cc.SpriteFrame, null, function(e, o) {
                        for (var n = 0; n < o.length; n++) {
                            var a = parseInt(o[n].name.slice(4)),
                                r = o[n];
                            t.userData.skinData[a] = r
                        }
                        t.loadResource.getComponent(g.default).updateLoadingBar(.1, (new Date).getTime(), "SKINDATA_DONE")
                    })
                }, e.prototype.loadUnderResources = function() {
                    var t = this;
                    cc.resources.load("Prefabs/Popups/Pause", cc.Prefab, function(e, o) {
                        t.pause = cc.instantiate(o), t.pause.getComponent(l.default).initPause()
                    }), cc.resources.load("Prefabs/Popups/Result", cc.Prefab, function(e, o) {
                        t.result = cc.instantiate(o), t.result.getComponent(p.default).initResult()
                    }), cc.resources.load("Prefabs/Popups/ReceivedChest", cc.Prefab, function(e, o) {
                        t.receivedChest = cc.instantiate(o), t.receivedChest.getComponent(u.default).initReceivedChest()
                    })
                }, e.prototype.deleteUserHighScoreFromServer = function() {
                    C.default.getInstance().deleteUserHighScore(FBInstant.player.getID(), function() {
                        C.default.getInstance().getLeaderBoard(function() {}), console.log("Deleted HighScore's Player Success!")
                    }, function() {
                        console.log("Deleted HighScore's Player Fail!!!")
                    })
                }, e.prototype.loadPlayerInfo = function() {
                    var t = this;
                    v.ON_FB && (this.userData.playerInfo = new v.default, this.userData.playerInfo.id = FBInstant.player.getID(), this.userData.playerInfo.name = FBInstant.player.getName(), this.userData.playerInfo.score = this.userData.highScoreBS, this.userData.playerInfo.photo = FBInstant.player.getPhoto(), cc.loader.load(this.userData.playerInfo.photo, function(e, o) {
                        t.userData.playerInfo.avatar = new cc.SpriteFrame(o)
                    }))
                }, e.prototype.onShowHome = function() {
                    this.home.getComponent(d.default).setInfoHome(), this.node_UIZone.addChild(this.home)
                }, e.prototype.onShowShop = function() {
                    this.shop.getComponent(_.default).setInfoShop(), this.node_UIZone.addChild(this.shop)
                }, e.prototype.onShowLeaderBoard = function() {
                    this.leaderBoard.getComponent(f.default).setInfoLeaderBoard(), this.node_UIZone.addChild(this.leaderBoard)
                }, e.prototype.onShowGamePlay = function(t) {
                    this.gamePlay.getComponent(h.default).setInfoGamePlay(this.userData.gameData.listLevel[t], this.userData.artData), this.node_UIZone.addChild(this.gamePlay)
                }, e.prototype.onShowSelectLevel = function() {
                    this.selectLevel.getComponent(y.default).setInfoSelectLevel(this.userData.gameData.listLevel.length), this.node_UIZone.addChild(this.selectLevel)
                }, e.prototype.onShowPause = function() {
                    this.pause.getComponent(l.default).setInfoPause(), this.pause.setPosition(h.default.getInstance().pad.getPosition()), this.node_UIZone.addChild(this.pause)
                }, e.prototype.onShowResult = function(t) {
                    this.result.getComponent(p.default).setInfoResult(t), this.node_UIZone.addChild(this.result)
                }, e.prototype.onShowReceivedChest = function(t) {
                    this.receivedChest.getComponent(u.default).setInfoReceivedChest(t), this.node_UIZone.addChild(this.receivedChest)
                }, e.prototype.onBackHome = function() {
                    this.gamePlay.removeFromParent(), this.onShowHome(), c.default.getInstance().returnBeginPos()
                }, e.instance = null, r([S(cc.Node)], e.prototype, "node_UIZone", void 0), r([S(cc.Node)], e.prototype, "node_BlockInput", void 0), r([S(cc.Prefab)], e.prototype, "pf_LoadResource", void 0), o = r([I], e)
            }(cc.Component);
        o.default = D, cc._RF.pop()
    }, {
        "../Local/GameConfig": "GameConfig",
        "../Local/UserData": "UserData",
        "../ObjectsController/CameraController": "CameraController",
        "../UIController/Popups/Pause": "Pause",
        "../UIController/Popups/ReceivedChest": "ReceivedChest",
        "../UIController/Popups/Result": "Result",
        "../UIController/Scenes/GamePlay": "GamePlay",
        "../UIController/Scenes/Home": "Home",
        "../UIController/Scenes/LeaderBoard": "LeaderBoard",
        "../UIController/Scenes/LoadResource": "LoadResource",
        "../UIController/Scenes/SelectLevel": "SelectLevel",
        "../UIController/Scenes/Shop": "Shop",
        "../Utils/FBConfigs": "FBConfigs",
        "../Utils/FacebookAPI": "FacebookAPI",
        "../Utils/LeaderBoardAPI": "LeaderBoardAPI"
    }],
    UserData: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "17609Izr4lPs6qQi4a8wkNp", "UserData");
        var n, a = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            r = this && this.__decorate || function(t, e, o, n) {
                var a, r = arguments.length,
                    i = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(e, o, i) : a(e, o)) || i);
                return r > 3 && i && Object.defineProperty(e, o, i), i
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var i = t("../Utils/FacebookAPI"),
            s = cc._decorator,
            c = s.ccclass,
            l = (s.property, function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.isSound = !1, e.isMusic = !1, e.currentLevel = 0, e.isPause = !1, e.player = null, e.star = 0, e.isChicken = !1, e.chest = 0, e.teleportPosition = [], e.currentChestData = {
                        level: 0,
                        chestInfo: []
                    }, e.tutorialTemp = 0, e.gameData = null, e.tempGameData = null, e.artData = null, e.skinData = [], e.leaderboardInfo = [], e.playerInfo = null, e.highScoreBS = null, e.tutorialIndex = 1, e.bestLevel = 1, e.starLevelData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], e.coin = 0, e.skinPriceData = [0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 500], e.currentSkin = 0, e.chestData = [], e.resetDataUser6 = 1, e
                }
                var o;
                return a(e, t), o = e, e.getInstance = function() {
                    return o.instance || (o.instance = new o), o.instance
                }, e.prototype.initUserData = function() {
                    o.instance = this, this.getLocalData()
                }, e.prototype.getLocalData = function() {
                    var t = cc.sys.localStorage.getItem("UserData");
                    t || (t = JSON.stringify({
                        isSound: !1,
                        isMusic: !1
                    }), cc.sys.localStorage.setItem("UserData", t));
                    var e = JSON.parse(t);
                    this.isSound = e.isSound, this.isMusic = e.isMusic
                }, e.prototype.saveLocalData = function() {
                    var t = {
                        isSound: this.isSound,
                        isMusic: this.isMusic
                    };
                    cc.sys.localStorage.setItem("UserData", JSON.stringify(t))
                }, e.prototype.saveCurrentData = function() {
                    var t = {
                        bestLevel: this.bestLevel,
                        starLevelData: this.starLevelData,
                        coin: this.coin,
                        skinPriceData: this.skinPriceData,
                        currentSkin: this.currentSkin,
                        chestData: this.chestData,
                        tutorialIndex: this.tutorialIndex,
                        resetDataUser6: this.resetDataUser6
                    };
                    return this.setDataToFB(t), t
                }, e.prototype.setDataToFB = function(t) {
                    var e = {
                        UserData: t
                    };
                    i.default.getInst().saveData(e)
                }, e.prototype.setUserDataFromFB = function(t) {
                    var e = null;
                    t && null != t.tutorialIndex && 0 != t.tutorialIndex && null != t.resetDataUser6 ? (e = t, this.bestLevel = e.bestLevel, this.starLevelData = e.starLevelData, this.coin = e.coin, this.skinPriceData = e.skinPriceData, this.currentSkin = e.currentSkin, this.chestData = e.chestData, this.tutorialIndex = e.tutorialIndex, this.resetDataUser6 = e.resetDataUser6) : (console.log("Missing Data"), e = this.saveCurrentData()), console.log("!!data from fb", e)
                }, e.instance = null, o = r([c], e)
            }(cc.Component));
        o.default = l, cc._RF.pop()
    }, {
        "../Utils/FacebookAPI": "FacebookAPI"
    }]
}, {}, ["GameConfig", "UserData", "SoundManager", "UIManager", "Cage", "CameraController", "Door", "Item", "ItemPhysic", "ItemWithBox", "LevelFrame", "LevelPage", "PadController", "Player", "PlayerLeaderBoard", "Robot", "SkinFrame", "Teleport", "Pause", "Popups", "ReceivedChest", "Result", "GamePlay", "Home", "LeaderBoard", "LoadResource", "Scenes", "SelectLevel", "Shop", "EventLoggingAnalytics", "EventLoggingServices", "FBConfigs", "FacebookAPI", "FitScreen", "LeaderBoardAPI", "ScreenCapture", "Services", "InviteImg", "ShareCupImg", "ShareImg"]);