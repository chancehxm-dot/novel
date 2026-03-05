function CDartBoard(iX, iY, oSprite, oParentContainer) {
    var iStartX = iX;
    var _aCircleHighlight;
    var _oBoard;
    var _oContainer;
    var _oParentcontainer = oParentContainer;

    this._init = function(iX, iY, oSprite) {
        _oContainer = new createjs.Container();
        _oContainer.x = iX;
        _oContainer.y = iY;
        _oContainer.regX = oSprite.width / 2;
        _oContainer.regY = oSprite.height / 2;
        _oParentcontainer.addChild(_oContainer);

        _oBoard = createBitmap(oSprite);
        _oContainer.addChild(_oBoard);

        _aCircleHighlight = new Array();
        for (var i = 0; i < POINTS_DARTBOARD.length; i++) {
            var oSprite = s_oSpriteLibrary.getSprite("circle_" + i);
            var oCircle = createBitmap(oSprite);
            oCircle.alpha = 0;
            oCircle.regX = oSprite.width / 2;
            oCircle.regY = oSprite.height / 2;
            oCircle.x = oSprite.width / 2;
            oCircle.y = oSprite.height / 2;
            _oContainer.addChild(oCircle);

            _aCircleHighlight[i] = oCircle;
        }


        var iYPos = 164;

        for (var i = 0; i < POINTS_DARTBOARD.length; i++) {
            var oTextOutline = new createjs.Text(POINTS_DARTBOARD[i], "70px " + FONT, STROKE_COLORS[i]);
            oTextOutline.x = oSprite.width / 2;
            oTextOutline.y = iYPos;
            oTextOutline.textAlign = "center";
            oTextOutline.textBaseline = "alphabetic";
            oTextOutline.outline = 8;
            _oContainer.addChild(oTextOutline);

            var oText = new createjs.Text(POINTS_DARTBOARD[i], "70px " + FONT, "#fff");
            oText.x = oSprite.width / 2;
            oText.y = iYPos;
            oText.textAlign = "center";
            oText.textBaseline = "alphabetic";
            _oContainer.addChild(oText);

            iYPos += RADIUS_SPHERE_BOARD;
        }
    };

    this.moveX = function() {
        createjs.Tween.get(_oContainer, {
            loop: true
        }).to({
            x: iStartX + 400
        }, 3000, createjs.Ease.cubicOut).
        to({
            x: iStartX
        }, 3000, createjs.Ease.cubicIn).to({
            x: iStartX - 400
        }, 3000, createjs.Ease.cubicOut);
    };

    this.resetX = function() {
        createjs.Tween.get(_oContainer).to({
            x: iStartX
        }, 1000, createjs.Ease.cubicOut)
    };

    this.highlight = function(iIndex) {
        createjs.Tween.get(_aCircleHighlight[iIndex]).to({
            alpha: 1
        }, 500, createjs.Ease.cubicOut).to({
            alpha: 0
        }, 500, createjs.Ease.cubicIn);
    };

    this.getX = function() {
        return _oContainer.x;
    };

    this.getY = function() {
        return _oContainer.y;
    };

    this._init(iX, iY, oSprite);
}