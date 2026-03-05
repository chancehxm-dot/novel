function CShotIndicatorController(iRange, bVertical) {
    var _bVertical;
    var _iCntFrames;
    var _iCursorSpeed;
    var _iRange;
    var _pStartingPoint;
    var _pEndingPoint;

    var _oMcContainer;
    var _oStartOffset;
    var _oEndOffset;

    var _oBar;
    var _oCursor;
    var _iTopCursorX = 0;
    var _iTopCursorY = -30;
    var _iRightCursorX = 60;
    var _iRightCursorY = 0;

    var _bLeft;
    var _bUp;

    this.init = function(iRange, bVertical) {

        _iRange = iRange;
        _oMcContainer = new createjs.Container();
        _oMcContainer.visible = false;
        s_oStage.addChild(_oMcContainer)

        _bVertical = bVertical;

        if (bVertical === false) {
            var oSpriteBar = s_oSpriteLibrary.getSprite("bar_x");
            _oBar = createBitmap(oSpriteBar);
            _oMcContainer.addChild(_oBar);
            _oMcContainer.x = CANVAS_WIDTH / 2 - oSpriteBar.width / 2;
            _oMcContainer.y = CANVAS_HEIGHT / 2 - 70;

            var oCursor = s_oSpriteLibrary.getSprite("arrow_bar");
            _oCursor = createBitmap(oCursor);

            _oMcContainer.addChild(_oCursor);

            _oStartOffset = {
                x: 0,
                y: 0
            };
            _oEndOffset = {
                x: BAR_X_WIDTH,
                y: 0
            };
        } else {
            var oRightBar = s_oSpriteLibrary.getSprite("bar_y");
            var oSpriteBar = createBitmap(oRightBar);
            _oMcContainer.addChild(oSpriteBar);

            _oMcContainer.x = CANVAS_WIDTH / 2 - 200;
            _oMcContainer.y = CANVAS_HEIGHT / 2 + 30;

            var oCursor = s_oSpriteLibrary.getSprite("arrow_bar");
            _oCursor = createBitmap(oCursor);

            _oCursor.rotation = 90;
            _oMcContainer.addChild(_oCursor);

            _oStartOffset = {
                x: 0,
                y: 0
            };
            _oEndOffset = {
                x: 0,
                y: BAR_Y_HEIGHT
            };
        }

        _oCursor.regX = oCursor.width / 2;
        this.reset();
    };

    this.reset = function() {
        _bLeft = true;
        _bUp = true;
        _iCntFrames = 0;
        if (_bVertical) {
            _iCursorSpeed = SHOT_INDICATOR_Y_SPEED;
        } else {
            _iCursorSpeed = SHOT_INDICATOR_X_SPEED;
        }

        _pStartingPoint = new CVector2();
        _pStartingPoint.set(_oStartOffset.x, _oStartOffset.y);
        _pEndingPoint = new CVector2();
        _pEndingPoint.set(_oEndOffset.x, _oEndOffset.y);

        if (_bVertical === false) {
            _oCursor.x = _iTopCursorX;
            _oCursor.y = _iTopCursorY;

        } else {
            _oCursor.x = _iRightCursorX;
            _oCursor.y = _iRightCursorY;
        }
    };

    this.show = function() {
        _oMcContainer.visible = true;
    };

    this.hide = function() {
        _oMcContainer.visible = false;

        this.reset();
    };

    this.getPositionBallEnd = function() {
        var iRes;
        if (_bVertical) {
            iRes = Math.floor(_oCursor.y);
        } else {
            iRes = Math.floor(_oCursor.x);
        }
        return iRes;
    };

    this.startAnimation = function() {
        var oParent = this;

        if (_bVertical) {
            if (_bUp) {
                createjs.Tween.get(_oCursor, {
                    override: true
                }).to({
                    y: _oEndOffset.y
                }, _iCursorSpeed, createjs.Ease.quadInOut).call(function() {
                    _bUp = !_bUp;
                    oParent.startAnimation();
                });
            } else {
                createjs.Tween.get(_oCursor, {
                    override: true
                }).to({
                    y: _oStartOffset.y
                }, _iCursorSpeed, createjs.Ease.quadInOut).call(function() {
                    _bUp = !_bUp;
                    oParent.startAnimation();
                });
            }
        } else {
            if (_bLeft) {
                createjs.Tween.get(_oCursor, {
                    override: true
                }).to({
                    x: _oEndOffset.x
                }, _iCursorSpeed, createjs.Ease.quadInOut).call(function() {
                    _bLeft = !_bLeft;
                    oParent.startAnimation();
                });
            } else {
                createjs.Tween.get(_oCursor, {
                    override: true
                }).to({
                    x: _oStartOffset.x
                }, _iCursorSpeed, createjs.Ease.quadInOut).call(function() {
                    _bLeft = !_bLeft;
                    oParent.startAnimation();
                });
            }
        }
    };

    this.endAnimation = function() {
        createjs.Tween.removeTweens(_oCursor);
    };

    this.init(iRange, bVertical);
}