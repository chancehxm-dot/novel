function CNextLevelPanel() {
    var _iStartY;
    var _iEventToLaunch;
    var _aCbCompleted;
    var _aCbOwner;
    var _oListener;
    var _oBg;

    var _oFade;
    var _oLevelScoreText;
    var _oLevelClearedText;
    var _oTotScoreText;
    var _oButHome;
    var _oButRestart;
    var _oButContinue;
    var _oContainer;
    var _oContainerPanel;

    var _oThis = this;


    this._init = function() {
        _aCbCompleted = new Array();
        _aCbOwner = new Array();

        _oContainer = new createjs.Container();
        _oContainer.visible = false;
        s_oStage.addChild(_oContainer);

        _oFade = new createjs.Shape();
        _oFade.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        _oFade.alpha = 0.5;
        _oListener = _oFade.on("click", function() {});
        _oContainer.addChild(_oFade);


        _oBg = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
        _oContainer.addChild(_oBg);

        _oContainerPanel = new createjs.Container();
        _oContainerPanel.x = CANVAS_WIDTH / 2;
        _oContainer.addChild(_oContainerPanel);

        var oSpriteBg = s_oSpriteLibrary.getSprite("bg_level_selection");
        var oBg = createBitmap(oSpriteBg);
        _oContainerPanel.addChild(oBg);

        _oLevelClearedText = new createjs.Text("", "70px " + FONT, "#ffb557");
        _oLevelClearedText.x = oSpriteBg.width / 2;
        _oLevelClearedText.y = oSpriteBg.height / 2 - 200;
        _oLevelClearedText.textAlign = "center";
        _oLevelClearedText.textBaseline = "alphabetic";
        _oLevelClearedText.lineWidth = oSpriteBg.width - 100;
        _oContainerPanel.addChild(_oLevelClearedText);

        _oLevelScoreText = new createjs.Text("", "50px " + FONT, "#ffb557");
        _oLevelScoreText.x = oSpriteBg.width / 2;
        _oLevelScoreText.y = oSpriteBg.height / 2;
        _oLevelScoreText.textAlign = "center";
        _oLevelScoreText.textBaseline = "alphabetic";
        _oLevelScoreText.lineWidth = oSpriteBg.width - 100;
        _oContainerPanel.addChild(_oLevelScoreText);

        _oTotScoreText = new createjs.Text("", "50px " + FONT, "#ffb557");
        _oTotScoreText.x = oSpriteBg.width / 2;
        _oTotScoreText.y = oSpriteBg.height / 2 + 100;
        _oTotScoreText.textAlign = "center";
        _oTotScoreText.textBaseline = "alphabetic";
        _oTotScoreText.lineWidth = oSpriteBg.width - 100;
        _oContainerPanel.addChild(_oTotScoreText);

        _oButHome = new CGfxButton(oSpriteBg.width / 2 - 250, oSpriteBg.height / 2 + 270, s_oSpriteLibrary.getSprite("but_home"), _oContainerPanel);
        _oButHome.addEventListener(ON_MOUSE_UP, this._onHome, this);

        _oButRestart = new CGfxButton(oSpriteBg.width / 2, oSpriteBg.height / 2 + 270, s_oSpriteLibrary.getSprite("but_restart"), _oContainerPanel);
        _oButRestart.addEventListener(ON_MOUSE_UP, this._onRestart, this);

        _oButContinue = new CGfxButton(oSpriteBg.width / 2 + 250, oSpriteBg.height / 2 + 270, s_oSpriteLibrary.getSprite("but_next"), _oContainerPanel);
        _oButContinue.addEventListener(ON_MOUSE_UP, this._onContinue, this);

        _iStartY = -oSpriteBg.height / 2;

        _oContainerPanel.regX = oSpriteBg.width / 2;
        _oContainerPanel.regY = oSpriteBg.height / 2;
    };

    this.unload = function() {
        _oButContinue.unload();
        _oButHome.unload();
        _oButRestart.unload();

        _oFade.off("click", _oListener);
    };

    this.addEventListener = function(iEvent, cbCompleted, cbOwner) {
        _aCbCompleted[iEvent] = cbCompleted;
        _aCbOwner[iEvent] = cbOwner;
    };

    this.show = function(iLevel, iTotScore, iLevelScore) {
        playSound("win_level", 1, false);

        _oLevelClearedText.text = TEXT_LEVEL + " " + iLevel + " " + TEXT_CLEARED;
        _oLevelScoreText.text = TEXT_LEVEL_SCORE + ": " + iLevelScore;
        _oTotScoreText.text = TEXT_TOT_SCORE + ": " + iTotScore;

        _oBg.alpha = 0;
        _oFade.alpha = 0;
        _oContainerPanel.y = _iStartY;
        _oContainer.visible = true;

        createjs.Tween.get(_oBg).to({
            alpha: 1
        }, 500);
        createjs.Tween.get(_oFade).to({
            alpha: 1
        }, 500);
        createjs.Tween.get(_oContainerPanel).wait(400).to({
            y: CANVAS_HEIGHT / 2
        }, 1000, createjs.Ease.bounceOut);
    };

    this.hide = function() {
        createjs.Tween.get(_oContainerPanel).to({
            y: _iStartY
        }, 1000, createjs.Ease.backIn).call(function() {
            createjs.Tween.get(_oBg).to({
                alpha: 0
            }, 400, createjs.Ease.cubicOut).call(function() {
                _oContainer.visible = false;

                if (_aCbCompleted[_iEventToLaunch]) {
                    _aCbCompleted[_iEventToLaunch].call(_aCbOwner[_iEventToLaunch]);
                }
            })
        });
    };

    this._onHome = function() {

        _iEventToLaunch = ON_BACK_MENU;

        _oThis.hide();
    };

    this._onRestart = function() {
        $(s_oMain).trigger("show_interlevel_ad");

        _iEventToLaunch = ON_RESTART;

        _oThis.hide();
    };

    this._onContinue = function() {
        $(s_oMain).trigger("show_interlevel_ad");

        _iEventToLaunch = ON_NEXT;

        _oThis.hide();
    };

    this._init();
}