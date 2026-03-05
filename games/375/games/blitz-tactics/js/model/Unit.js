function MODEL_Unit(ix, iy, type) {
    this.type = type;
    this.x = ix;
    this.y = iy;
    this._bAlive = true;
    this._callback_Dying = null;
    this._callback_DyingContext = null;
    this._sprite = null;
    this.isEnemy = function() {
        return (this.type >= MODEL_Unit.Enemy_Tank) && (this.type <= MODEL_Unit.Enemy_Helicopter);
    };
    this.isFlying = function() {
        return (this.type == MODEL_Unit.Player_Bomber) || (this.type == MODEL_Unit.Player_Fighter) || (this.type == MODEL_Unit.Enemy_Helicopter);
    };
    this.setDyingCallback = function(callback, context) {
        this._callback_Dying = callback;
        this._callback_DyingContext = context;
    };
    this.die = function() {
        if (this._bAlive) {
            this._bAlive = false;
            if (this._callback_Dying != null) {
                this._callback_Dying.call(this._callback_DyingContext);
            }
        }
    };
    this.isAlive = function() {
        return this._bAlive;
    };
    this.setSprite = function(unitSprite) {
        this._sprite = unitSprite;
    };
    this.getSprite = function() {
        return this._sprite;
    };
};

MODEL_Unit.Player_Marines = 0x34;
MODEL_Unit.Player_Tank = 0x35;
MODEL_Unit.Player_Bomber = 0x36;
MODEL_Unit.Player_Fighter = 0x37;
MODEL_Unit.Enemy_Tank = 0x44;
MODEL_Unit.Enemy_AntiAir = 0x45;
MODEL_Unit.Enemy_Guard = 0x46;
MODEL_Unit.Enemy_Helicopter = 0x47;

MODEL_Unit.Owner_Player = 0x80;
MODEL_Unit.Owner_Enemy = 0x81;

MODEL_Unit.isAbleToAttackCell = function(cellType, unitType) {
    if (cellType == MODEL_MapCell.Barricade && unitType == MODEL_Unit.Player_Bomber) {
        return true;
    }
    return false;
};