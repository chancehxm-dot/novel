function CPowerUp(iX, iY, iType, szText, oSpriteSheet, oParentContainer) {
    var _iType = iType;

    var _oText;
    var _oTextOutline;
    var _oSprite;
    var _oContainer;
    var _oParentContainer = oParentContainer;

    this._init = function(iX, iY, szText, oSpriteSheet) {
        _oContainer = new createjs.Container();
        _oContainer.x = iX;
        _oContainer.y = iY;
        _oParentContainer.addChild(_oContainer);

        _oSprite = createSprite(oSpriteSheet, "anim", POWERUP_INFO[iType].regX, POWERUP_INFO[iType].regY, POWERUP_INFO[iType].width, POWERUP_INFO[iType].height);

        _oContainer.addChild(_oSprite);

        _oContainer.scaleX = _oContainer.scaleY = 0.1;


        _oTextOutline = new createjs.Text(szText, "50px " + FONT, "#000");
        _oTextOutline.y = -20;
        _oTextOutline.textAlign = "center";
        _oTextOutline.textBaseline = "alphabetic";
        _oTextOutline.outline = 8;
        _oContainer.addChild(_oTextOutline);


        _oText = new createjs.Text(szText, "50px " + FONT, "#fff");
        _oText.y = -20;
        _oText.textAlign = "center";
        _oText.textBaseline = "alphabetic";
        _oContainer.addChild(_oText);

        createjs.Tween.get(_oContainer).to({
            scaleX: 1,
            scaleY: 1
        }, 1000, createjs.Ease.bounceOut);
    };

    this.unload = function() {
        _oParentContainer.removeChild(_oContainer);
    };

    this.hide = function() {
        createjs.Tween.get(_oContainer).to({
            alpha: 0
        }, 1000, createjs.Ease.cubicOut);
    };

    this.explode = function() {
        _oSprite.framerate = 30;
        _oSprite.gotoAndPlay("explode");

        _oTextOutline.text = _oText.text = "";

        if (_iType === MALUS_ID) {
            playSound("malus", 1, false);
        } else {
            playSound("powerup", 1, false);
        }
    };

    this.getX = function() {
        return _oContainer.x;
    };

    this.getY = function() {
        return _oContainer.y;
    };

    this.getType = function() {
        return _iType;
    };

    this._init(iX, iY, szText, oSpriteSheet);
}