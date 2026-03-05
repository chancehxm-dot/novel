require = function s(o, r, a) {
    function u(t, e) {
        if (!r[t]) {
            if (!o[t]) {
                var n = "function" == typeof require && require;
                if (!e && n) return n(t, !0);
                if (h) return h(t, !0);
                var i = new Error("Cannot find module '" + t + "'");
                throw i.code = "MODULE_NOT_FOUND", i
            }
            var c = r[t] = {
                exports: {}
            };
            o[t][0].call(c.exports, function(e) {
                return u(o[t][1][e] || e)
            }, c, c.exports, s, o, r, a)
        }
        return r[t].exports
    }
    for (var h = "function" == typeof require && require, e = 0; e < a.length; e++) u(a[e]);
    return u
}({
    RankingView: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "ed81eRMoXVHSY0+WVmALWHp", "RankingView"), cc.Class({
            extends: cc.Component,
            properties: {
                groupFriendButton: cc.Node,
                friendButton: cc.Node,
                rankingScrollView: cc.Sprite,
                haoyouLabel: cc.Node,
                qunLabel: cc.Node
            },
            onLoad: function() {},
            start: function() {
                this.haoyouLabel.active = !0, this.qunLabel.active = !1
            },
            friendButtonFunc: function(e) {
                this.haoyouLabel.active = !0, this.qunLabel.active = !1, cc.log("获取好友排行榜数据。score")
            },
            groupFriendButtonFunc: function(e) {
                this.haoyouLabel.active = !1, this.qunLabel.active = !0, cc.log("获取群排行榜数据。score")
            },
            gameOverButtonFunc: function(e) {
                cc.log("获取横向展示排行榜数据。score")
            },
            submitScoreButtonFunc: function() {
                cc.log("提交得分: score : 123")
            },
            _updateSubDomainCanvas: function() {
                null != window.sharedCanvas && (this.tex.initWithElement(window.sharedCanvas), this.tex.handleLoadedTexture(), this.rankingScrollView.spriteFrame = new cc.SpriteFrame(this.tex))
            },
            update: function() {
                this._updateSubDomainCanvas()
            }
        }), cc._RF.pop()
    }, {}],
    chupeng: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "e1d153pd1ZLnJ768WTUR8Ds", "chupeng"), cc.Class({
            extends: cc.Component,
            properties: {
                dao: cc.Node
            },
            start: function() {},
            onCollisionStay: function(e, t) {
                var n = cc.find("Canvas").getComponent("game");
                this.dao.scale < 1 && e.tag == t.tag ? (e.tag = 1, n.diaoxue(), n.bian(), n.strings(), console.log("产生碰撞")) : 1 == this.dao.scale && (e.tag = 0)
            }
        }), cc._RF.pop()
    }, {}],
    game: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "7dd32BO1opJXYMrTrJIO1zO", "game");
        var i = e("weixin");
        cc.Class({
            extends: cc.Component,
            properties: {
                shoushang: cc.Node,
                knife: cc.Node,
                finger: cc.Node,
                aixinnode: [cc.Node],
                aixinparent: cc.Node,
                aixin: cc.SpriteFrame,
                huixin: cc.SpriteFrame,
                BG: cc.Node,
                lujin: [cc.Node],
                score: cc.Label,
                shoushangmusi: cc.AudioClip,
                bgmusic: cc.AudioClip,
                defenmusic: cc.AudioClip,
                gameparent: cc.Node,
                startParent: cc.Node,
                startbiaoq: cc.Node,
                gameoverparent: cc.Node,
                socreparent: cc.Node,
                startBtutton: cc.Node,
                scorejiesuan: cc.Label,
                firstscore: cc.Label,
                musicBtn: cc.Toggle,
                rankingView: cc.Node,
                gameResurgence: cc.Node,
                interceptAll: cc.Node
            },
            onLoad: function() {
                i.authorize(), i.onShare("剁手榜看看你能排第几！", "res/shareImg.png")
            },
            start: function() {
                this.interceptAll.active = !1, this.rankingView.active = !1, this.musicBtn.isChecked = !0, this.BTn = !0, this.gameResurgence.active = !1;
                var e = this.resurgenceCount = 0;
                null == (e = cc.sys.platform === cc.sys.WECHAT_GAME ? i.getData("score") : cc.sys.localStorage.getItem("score")) && (e = 0), this.firstscore.string = e, this.bgfunction(), this.startBtutton.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.5, 1.1), cc.scaleTo(.5, 1)))), i.createBannerAd("adunit-2a2fd55eef77b661"), this.createRewardVideoAd("adunit-d67c1488121a2769")
            },
            startBtn: function(e) {
                1 == this.musicBtn.isChecked ? this.BTn = !0 : this.BTn = !1, this.interceptAll.active = !1, this.rankingView.active = !1, this.gameoverparent.active = !1, this.startbiaoq.active = !1, this.startParent.active = !1, this.gameparent.active = !0, this.gameResurgence.active = !1, this.socreparent.position = cc.p(6, 632);
                for (var t = this.a = 0; t < this.aixinnode.length; t++) this.aixinnode[t].getComponent(cc.Sprite).spriteFrame = this.aixin;
                this.playSoundEffectone(this.bgmusic, this.BTn), cc.director.getCollisionManager().enabled = !0, 1 === e ? (this.score.string = this.score.string, this.resurgenceCount++) : (this.score.string = 0, this.resurgenceCount = 0), this.direction = cc.p(0, 0), this.knife.position = this.lujin[0].position;
                new Array;
                var n = cc.moveTo(.4, this.lujin[0].position),
                    i = cc.moveTo(.4, this.lujin[1].position),
                    c = cc.moveTo(.5, this.lujin[2].position),
                    s = cc.moveTo(.5, this.lujin[3].position),
                    o = cc.moveTo(.4, this.lujin[4].position),
                    r = cc.moveTo(.4, this.lujin[5].position),
                    a = cc.moveTo(.4, this.lujin[6].position),
                    u = cc.moveTo(.4, this.lujin[7].position),
                    h = cc.moveTo(.5, this.lujin[8].position),
                    d = cc.moveTo(.5, this.lujin[9].position),
                    l = cc.moveTo(.5, this.lujin[10].position),
                    g = cc.repeatForever(cc.sequence(n, i, c, s, o, r, a, u, h, d, l, d, h, u, a, r, o, s, c, i, n));
                this.knife.runAction(g), this.currentPointCount = 0
            },
            diaoxue: function() {
                var e = this;
                this.playSoundEffect(this.shoushangmusi, this.BTn), this.finger.runAction(cc.sequence(cc.moveBy(.1, 15, -5), cc.moveBy(.1, -15, 5))), this.shoushang.active = !0, e.shoushang.runAction(cc.sequence(cc.scaleTo(.1, 1.5), cc.callFunc(function() {
                    e.shoushang.active = !1
                })))
            },
            bian: function() {
                var e = this;
                console.log("---------" + this.a), this.a < 3 && (this.aixinnode[this.a].getComponent(cc.Sprite).spriteFrame = this.huixin, this.a++, this.aixinnode[2].getComponent(cc.Sprite).spriteFrame == this.huixin && e.scheduleOnce(function() {
                    cc.audioEngine.stopAll(), e.knife.stopAllActions(), e.gameparent.active = !1, e.startParent.active = !0, e.interceptAll.active = !1, e.gameoverparent.active = !0, e.ScoreParentrun(), e.scorejiesuan.string = e.score.string, i.destroyBannerAd(), i.createBannerAd("adunit-2a2fd55eef77b661"), this.firstscore.string < this.scorejiesuan.string && (this.firstscore.string = this.scorejiesuan.string, cc.sys.platform === cc.sys.WECHAT_GAME ? i.setData("score", this.firstscore.string) : cc.sys.localStorage.setItem("score", this.firstscore.string), console.log("-------------托管最高分----------"), i.setManagedData("score", this.firstscore.string))
                    try {
                        window.IView ?  loadGoogleAd() : console.log("function not fail!");
                    } catch (__error) {
                        throw __error;
                    }
                }, .3))
            },
            playSoundEffect: function(e, t) {
                null != e && 1 == t && cc.audioEngine.play(e, !1, 1)
            },
            playSoundEffectone: function(e, t) {
                null != e && 1 == t && cc.audioEngine.play(e, !0, 1)
            },
            bgfunction: function() {
                var n = this;
                this.BG.on("touchstart", function() {
                    if (n.tourshi = "a", n.scheduleOnce(function() {
                            if ("a" == n.tourshi) {
                                var e = n.score.string;
                                n.score.string = e + 1, n.playSoundEffect(n.defenmusic, this.BTn)
                            }
                        }, .2), n.aixinnode[2].getComponent(cc.Sprite).spriteFrame != n.huixin && 1 == n.knife.scale) {
                        var e = cc.scaleTo(.1, .9, .9),
                            t = cc.scaleTo(.1, 1, 1);
                        n.knife.runAction(cc.sequence(e, t, cc.callFunc(function() {})))
                    }
                })
            },
            strings: function() {
                "a" == this.tourshi && (this.tourshi = null)
            },
            Actions: function() {},
            ScoreParentrun: function() {
                this.socreparent.stopAllActions();
                var e = cc.moveTo(.5, 6, 120);
                this.socreparent.runAction(e)
            },
            shareBtn: function() {
                this.gameoverparent.active || i.share("剁手榜看看你能排第几！", "res/shareImg.png"), this.gameoverparent.active && i.share("我得了" + this.score.string + "分，剁手榜看看你能排第几？", "res/shareImg.png")
            },
            rankListBtn: function() {
                this.interceptAll.active = !1, this.rankingView.active = !0, this.gameResurgence.active = !1
            },
            closeRankList: function() {
                this.interceptAll.active = !1, this.rankingView.active = !1, this.gameResurgence.active = !1
            },
            toOtherGame: function() {
                console.log("跳转到其他游戏"), i.toOtherGame("wx77ee5f134fac32dd")
            },
            clickPassButton: function() {
                console.log("--跳过--"), this.interceptAll.active = !1, this.startParent.active = !0, this.gameResurgence.active = !1, this.resurgenceCount = 0
            },
            clickResurgenceButton: function() {
                console.log("--我要复活--"), this.interceptAll.active = !0, this.playerRewardVideoAd()
            },
            createRewardVideoAd: function(e) {
                cc.sys.platform === cc.sys.WECHAT_GAME && (this.rewardedVideoAd = wx.createRewardedVideoAd({
                    adUnitId: e
                }))
            },
            playerRewardVideoAd: function() {
                var e = this;
                cc.sys.platform === cc.sys.WECHAT_GAME && ((this.rewardedVideoAd.bind_this = this).rewardedVideoAd.onClose(this.rewardedVideoAd.bind_this.adSuccessPlay), this.rewardedVideoAd.onError(this.rewardedVideoAd.bind_this.adErrorPlay), console.log("播放视频"), this.rewardedVideoAd.load().then(function() {
                    return e.rewardedVideoAd.show().catch(function(e) {
                        return console.log(e)
                    })
                }))
            },
            adSuccessPlay: function(e) {
                var t = cc.find("Canvas").getComponent("game");
                e && e.isEnded || void 0 === e ? (console.log("正常播放完成"), t.afterLookVideo(0)) : (console.log("播放中途退出"), t.afterLookVideo(1)), t.rewardedVideoAd && t.rewardedVideoAd.bind_this && (console.log("释放激励广告视频"), t.rewardedVideoAd.offClose(t.rewardedVideoAd.bind_this.adSuccessPlay))
            },
            afterLookVideo: function(e) {
                0 == e && (console.log("看完完整视频-复活成功-游戏界面"), this.startBtn(1)), 1 == e && (console.log("没看完完整视频-复活失败-gameover界面"), this.resurgenceCount = 0, this.interceptAll.active = !1, this.startParent.active = !0, this.gameResurgence.active = !1)
            },
            adErrorPlay: function(e) {
                console.log("激励视频错误" + e.errCode);
                var t = cc.find("Canvas").getComponent("game");
                e && 0 <= e.errCode && (wx.showToast({
                    icon: "none",
                    title: "很遗憾，没有视频了"
                }), t.resurgenceCount = 0, t.startParent.active = !0, t.gameResurgence.active = !1, t.interceptAll.active = !1), t.rewardedVideoAd.offError(t.rewardedVideoAd.bind_this.adErrorPlay)
            }
        }), cc._RF.pop()
    }, {
        weixin: "weixin"
    }],
    weixin: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "711fb4ejWBF3akXkccKyBAg", "weixin"), t.exports = {
            authorize: function() {
                cc.sys.platform === cc.sys.WECHAT_GAME && (console.log("微信小游戏用户授权"), wx.authorize({
                    scope: "scope.record",
                    fail: function(e) {
                        (-1 < e.errMsg.indexOf("auth deny") || -1 < e.errMsg.indexOf("auth denied")) && console.log("用户拒绝授权")
                    }
                }))
            },
            setManagedData: function(e, t) {
                cc.sys.platform === cc.sys.WECHAT_GAME && (e = String(e), t = String(t), window.wx.postMessage({
                    messageType: 3,
                    MAIN_MENU_NUM: e,
                    score: t
                }))
            },
            onShare: function(t, n) {
                cc.sys.platform === cc.sys.WECHAT_GAME && (wx.showShareMenu(), wx.updateShareMenu({
                    withShareTicket: !1
                }), wx.onShareAppMessage(function(e) {
                    return {
                        title: t,
                        imageUrl: n,
                        complete: function(e) {
                            "shareAppMessage:ok" == e.errMsg ? wx.showToast({
                                title: "分享成功"
                            }) : wx.showToast({
                                title: "分享失败"
                            })
                        }
                    }
                }))
            },
            share: function(e, t) {
                cc.sys.platform === cc.sys.WECHAT_GAME && wx.shareAppMessage({
                    title: e,
                    imageUrl: t,
                    complete: function(e) {
                        "shareAppMessage:ok" == e.errMsg ? console.log("分享成功!") : wx.showToast({
                            title: "分享失败"
                        })
                    }
                })
            },
            rankList: function(e, t, n) {
                cc.sys.platform === cc.sys.WECHAT_GAME && (window.wx.showShareMenu({
                    withShareTicket: !0
                }), 1 == e && (this.tex = new cc.Texture2D, window.sharedCanvas.width = 500, window.sharedCanvas.height = 960, window.wx.postMessage({
                    messageType: 1,
                    MAIN_MENU_NUM: "score"
                })), 2 == e && t && n && wx.shareAppMessage({
                    title: t,
                    imageUrl: n,
                    success: function(e) {
                        null != e.shareTickets && 0 < e.shareTickets.length && wx.postMessage({
                            messageType: 5,
                            MAIN_MENU_NUM: "score",
                            shareTicket: e.shareTickets[0]
                        })
                    }
                }))
            },
            setData: function(e, t) {
                cc.sys.platform === cc.sys.WECHAT_GAME && wx.setStorageSync(e, t)
            },
            getData: function(e) {
                return cc.sys.platform === cc.sys.WECHAT_GAME ? wx.getStorageSync(e) : 0
            },
            createBannerAd: function(e) {
                var t = this;
                if (cc.sys.platform === cc.sys.WECHAT_GAME) {
                    var n = wx.getSystemInfoSync().screenHeight,
                        i = wx.getSystemInfoSync().screenWidth;
                    this.bannerAd = wx.createBannerAd({
                        adUnitId: e,
                        style: {
                            left: 0,
                            top: 0,
                            width: i
                        }
                    }), this.bannerAdError(), this.showBannerAd(), this.bannerAd.onResize(function(e) {
                        t.bannerAd.style.height = e.height, t.bannerAd.style.top = n - t.bannerAd.style.height
                    })
                }
            },
            showBannerAd: function() {
                cc.sys.platform === cc.sys.WECHAT_GAME && this.bannerAd.show()
            },
            hideBannerAd: function() {
                cc.sys.platform === cc.sys.WECHAT_GAME && this.bannerAd.hide()
            },
            destroyBannerAd: function() {
                cc.sys.platform === cc.sys.WECHAT_GAME && this.bannerAd.destroy()
            },
            bannerAdError: function() {
                cc.sys.platform === cc.sys.WECHAT_GAME && this.bannerAd.onError(function(e) {
                    1004 == e.errCode && console.log("无合适的广告"), 1005 == e.errCode && console.log("广告组件审核中"), 1006 == e.errCode && console.log("广告组件被驳回")
                })
            },
            toOtherGame: function(e) {
                cc.sys.platform === cc.sys.WECHAT_GAME && wx.navigateToMiniProgram({
                    appId: e,
                    path: "",
                    extraData: {
                        foo: "bar"
                    },
                    envVersion: "release",
                    success: function(e) {
                        console.log("打开其他小游戏成功")
                    }
                })
            }
        }, cc._RF.pop()
    }, {}]
}, {}, ["RankingView", "chupeng", "game", "weixin"]);