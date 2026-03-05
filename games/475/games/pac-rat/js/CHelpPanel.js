function CHelpPanel() {
    var _iStartY;
    var _iPosHandX;
    var _oListener;

    var _oFade;
    var _oButStart;
    var _oContainer;
    var _oContainerPanel;

    var _oThis = this;

    this._init = function() {
        _oContainer = new createjs.Container();
        _oContainer.visible = false;
        s_oStage.addChild(_oContainer);

        _oFade = new createjs.Shape();
        _oFade.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        _oFade.alpha = 0.5;
        _oListener = _oFade.on("click", function() {});
        _oContainer.addChild(_oFade);

        _oContainerPanel = new createjs.Container();
        _oContainerPanel.x = CANVAS_WIDTH / 2;
        _oContainer.addChild(_oContainerPanel);

        var oSpriteBg = s_oSpriteLibrary.getSprite("bg_level_selection");
        var oBg = createBitmap(oSpriteBg);
        _oContainerPanel.addChild(oBg);

        var oTextHelp = new createjs.Text("", "70px " + FONT, "#ffb557");
        oTextHelp.x = oSpriteBg.width / 2;
        oTextHelp.y = oSpriteBg.height / 2 - 200;
        oTextHelp.textAlign = "center";
        oTextHelp.textBaseline = "alphabetic";
        oTextHelp.lineWidth = oSpriteBg.width - 100;
        _oContainerPanel.addChild(oTextHelp);

        if (s_bMobile) {
            oTextHelp.text = TEXT_HELP_MOBILE;

            var oSpriteSwipe = s_oSpriteLibrary.getSprite("swipe_trail");
            var oHelpSwipe = createBitmap(oSpriteSwipe);
            oHelpSwipe.regX = oHelpSwipe.width * 0.5;
            oHelpSwipe.regY = oHelpSwipe.height * 0.5;
            oHelpSwipe.x = 300;
            oHelpSwipe.y = 420;
            _oContainerPanel.addChild(oHelpSwipe);

            var oSpriteHand = s_oSpriteLibrary.getSprite("hand_swipe");

            var oHelpHand = createBitmap(oSpriteHand);
            oHelpHand.regX = oSpriteHand.width * 0.5;
            oHelpHand.regY = oSpriteHand.height * 0.5;
            oHelpHand.x = oHelpSwipe.x + 120;
            oHelpHand.y = oHelpSwipe.y + 120;
            _oContainerPanel.addChild(oHelpHand);

            _iPosHandX = oHelpHand.x;

            this.handMovement(oHelpHand, oHelpSwipe);
        } else {
            oTextHelp.text = TEXT_HELP_DESKTOP;

            var oSpriteKeys = s_oSpriteLibrary.getSprite("keyboard");
            var oKeys = createBitmap(oSpriteKeys);
            oKeys.regX = oSpriteKeys.width / 2;
            oKeys.x = oTextHelp.x;
            oKeys.y = oTextHelp.y + 140;
            _oContainerPanel.addChild(oKeys);
        }

        _oButStart = new CGfxButton(oTextHelp.x, oTextHelp.y + 500, s_oSpriteLibrary.getSprite("but_yes"), _oContainerPanel);
        _oButStart.addEventListener(ON_MOUSE_UP, this._onStart, this);

        _iStartY = -oSpriteBg.height / 2;

        _oContainerPanel.regX = oSpriteBg.width / 2;
        _oContainerPanel.regY = oSpriteBg.height / 2;
    };

    this.unload = function() {
        _oFade.off("click", _oListener);
        _oButStart.unload();
    };

    this.handMovement = function(oHelpHand, oHelpSwipe) {
        oHelpSwipe.x = _iPosHandX - 120;
        oHelpSwipe.scaleX = 1;
        oHelpSwipe.alpha = 1;
        createjs.Tween.get(oHelpSwipe).to({
            alpha: 0
        }, 500);
        createjs.Tween.get(oHelpHand).to({
            x: _iPosHandX + 240
        }, 1000, createjs.Ease.cubicOut).call(function() {
            oHelpSwipe.x = _iPosHandX + 300;
            oHelpSwipe.scaleX = -1;
            oHelpSwipe.alpha = 1;
            createjs.Tween.get(oHelpSwipe).to({
                alpha: 0
            }, 500);
            createjs.Tween.get(oHelpHand).to({
                x: _iPosHandX
            }, 1000, createjs.Ease.cubicOut).call(function() {
                _oThis.handMovement(oHelpHand, oHelpSwipe);
            });
        });
    };

    this.show = function() {
        _oFade.alpha = 0;
        _oContainerPanel.y = _iStartY;
        _oContainer.visible = true;

        createjs.Tween.get(_oFade).to({
            alpha: 0.7
        }, 500);
        createjs.Tween.get(_oContainerPanel).wait(400).to({
            y: CANVAS_HEIGHT / 2
        }, 1000, createjs.Ease.bounceOut);
    };

    this.hide = function() {
        createjs.Tween.get(_oContainerPanel).to({
            y: _iStartY
        }, 1000, createjs.Ease.backIn).call(function() {

            s_oGame.prepareStartLevel();
        });
        createjs.Tween.get(_oFade).to({
            alpha: 0
        }, 1000);
    };

    this._onStart = function() {
        _oThis.hide();
    };

    this._init();
}