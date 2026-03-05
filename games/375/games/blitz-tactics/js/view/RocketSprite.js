function VIEW_RocketSprite(ix, iy, tx, ty, angle, group, gameplayState) {
    var speed = Math.random() + 2;
    this._bIsDestroyed = false;
    this._sprite = group.create(ix, iy, "effects_AA_Rocket");
    this._sprite.anchor.set(0.5, 0.5);
    this._actualPosition = new Object({
        x: ix,
        y: iy,
        z: 0.0
    });
    this._tz = 100.0;
    this._speed = Math.random() * 12 + 5;
    this._euler = new Object({
        x: angle,
        y: angle,
        z: 0
    });
    this._timeToNextParticle = 3;
    this._destroyed = false;

    this.update = function() {
        if (this._bIsDestroyed) {
            return;
        }
        if (Phaser.Math.distance(this._sprite.x, this._sprite.y, tx, ty) < 50.0) {
            this.destroy();
            //gameplayState.
        }
        if (this._timeToNextParticle == 0) {
            var trailParticle = gameplayState.rocketTrailGroup.create(this._sprite.position.x, this._sprite.position.y, "effects_RocketTrail");
            trailParticle.anchor.set(0.5, 0.5);
            trailParticle.animations.add("run").play(Math.random() * 10 + 5, false, true);
            this._timeToNextParticle = 2;
        }
        this._timeToNextParticle--;
        this._actualPosition.x += this._speed * Math.cos(this._euler.x);
        this._actualPosition.y += this._speed * Math.sin(this._euler.x);
        this._actualPosition.z += this._speed * Math.cos(this._euler.z);
        this._sprite.position.set(this._actualPosition.x, this._actualPosition.y - this._actualPosition.z * 0.1);
    };

    this.destroy = function() {
        if (this._destroyed)
            return;
        this._destroyed = true;
        gameplayState.game.add.audio("rocket_hit", 0.8, false, true).play();
        var trailParticle = gameplayState.flyingUnitEffectsGroup.create(this._sprite.position.x, this._sprite.position.y, "effects_RocketHit");
        trailParticle.anchor.set(0.5, 0.5);
        trailParticle.animations.add("run").play(20, false, true);

        this._sprite.destroy();
        this._bIsDestroyed = true;
    };
}