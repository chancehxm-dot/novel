function VIEW_UnitSprite(group, unit, effectsGroup, bottomEffectsGroup, game, map, directionString, gameplayState) {

    // All existing spritesheets
    this._visibleSprite = null;

    this._idleLeftCostume = null;
    this._idleRightCostume = null;
    this._idleUpCostume = null;
    this._idleDownCostume = null;

    this._walkLeftCostume = null;
    this._walkRightCostume = null;
    this._walkUpCostume = null;
    this._walkDownCostume = null;

    this._attackLeftCostume = null;
    this._attackRightCostume = null;
    this._attackUpCostume = null;
    this._attackDownCostume = null;

    this._dieLeftCostume = null;
    this._dieRightCostume = null;
    this._dieUpCostume = null;
    this._dieDownCostume = null;

    this._shadowLeftCostume = null;
    this._shadowRightCostume = null;
    this._shadowUpCostume = null;
    this._shadowDownCostume = null;
    this._visibleShadow = null;

    this._waypoints = null;
    this._waypointPathLength = 0.0;
    this._distancePassed = 0.0;
    this._nextWaypointIndex = 0;
    this._timeStep = 0.0;
    this._turnFinishCallback = null;
    this._turnFinishCallbackContext = null;

    this._unit = unit;
    this._breakDistance = 1.0;
    this._actualBreakDistance = 1.0;
    this._acceleration = 1.0;
    this._deceleration = 1.0;
    this._breakTime = 100.0; // in ticks
    this._maxMovementSpeed = 1.0;
    this._movementSpeed = 0.0;

    this._bPlayingActionAnimation = false;

    this._flyingTimer = 0.0;
    this._visualOffsetY = 0.0;
    this._visualOffsetX = 0.0;
    this._savedY = 0.0;

    this._unitAttacked = null;
    this._positionAttacked = null;
    this._attackAnimationDelay = 200;
    this._currentDirectionString = "";
    this._walkEffectUsualCooldown = 1.0;
    this._walkEffectCooldown = 0.0;
    unit.setSprite(this);

    this.getUnit = function() {
        return this._unit;
    };

    var unitTypeString = "";
    switch (unit.type) {
        case MODEL_Unit.Player_Marines:
            unitTypeString = "Player_Marine";
            this._maxMovementSpeed = 2.5;
            this._breakDistance = 2.0;
            this._acceleration = 0.5;
            this._breakTime = 20;
            this._walkEffectUsualCooldown = 8;
            break;
        case MODEL_Unit.Player_Tank:
            unitTypeString = "Player_Tank";
            this._maxMovementSpeed = 3.0;
            this._breakDistance = 16.0;
            this._acceleration = 0.3;
            this._breakTime = 30;
            break;
        case MODEL_Unit.Player_Bomber:
            unitTypeString = "Player_Bomber";
            this._maxMovementSpeed = 8.0;
            this._breakDistance = 64.0;
            this._acceleration = 0.2;
            this._visualOffsetY = -50.0;
            this._breakTime = 40;
            break;
        case MODEL_Unit.Player_Fighter:
            unitTypeString = "Player_Fighter";
            this._maxMovementSpeed = 8.0;
            this._breakDistance = 64.0;
            this._acceleration = 0.2;
            this._visualOffsetY = -50.0;
            this._breakTime = 40;
            break;
        case MODEL_Unit.Enemy_AntiAir:
            unitTypeString = "Enemy_AntiAir";
            break;
        case MODEL_Unit.Enemy_Guard:
            unitTypeString = "Enemy_Guard";
            break;
        case MODEL_Unit.Enemy_Helicopter:
            unitTypeString = "Enemy_Helicopter";
            this._visualOffsetY = -50.0;
            break;
        case MODEL_Unit.Enemy_Tank:
            unitTypeString = "Enemy_Tank";
            break;


    };

    var directionStrings = VIEW_UnitSprite.DirectionStrings;
    var animationStrings = VIEW_UnitSprite.AnimationStrings;
    if (this._unit.type == MODEL_Unit.Player_Bomber || this._unit.type == MODEL_Unit.Enemy_Helicopter || this._unit.type == MODEL_Unit.Player_Fighter) {
        for (var i = 0; i < directionStrings.length; i++) {
            var shadowPropertyName = "_shadow" + directionStrings[i] + "Costume";
            var shadowSpritesheetName = "entity_" + unitTypeString + "_Shadow_" + directionStrings[i];
            var shadowSprite = effectsGroup.create(0, 0, shadowSpritesheetName);
            shadowSprite.visible = false;
            shadowSprite.anchor.set(0.5, 0.5);
            this[shadowPropertyName] = shadowSprite;
        }
    }

    for (var i = 0; i < animationStrings.length; i++) {
        for (var j = 0; j < directionStrings.length; j++) {
            if ((this._unit.isFlying() || this._unit.isEnemy()) && animationStrings[i] == "Walk") {
                continue;
            }
            if (this._unit.type != MODEL_Unit.Player_Marines && this._unit.type != MODEL_Unit.Enemy_Guard && animationStrings[i] == "Die") {
                continue;
            }
            var propertyName = "_" + animationStrings[i].toLowerCase() + directionStrings[j] + "Costume";
            var spritesheetName = "entity_" + unitTypeString + "_" + animationStrings[i] + "_" + directionStrings[j];
            var sprite = group.create(0, 0, spritesheetName);
            if (this._unit.type == MODEL_Unit.Enemy_Helicopter && animationStrings[i] == "Idle") {
                sprite.animations.add("run");
            }
            if (this._unit.type == MODEL_Unit.Player_Fighter && animationStrings[i] == "Idle") {
                sprite.animations.add("run");
            }
            if (this._unit.type == MODEL_Unit.Player_Marines && (animationStrings[i] == "Walk" || animationStrings[i] == "Die")) {
                sprite.animations.add("run");
            }
            if (this._unit.type == MODEL_Unit.Enemy_Guard && animationStrings[i] == "Die") {
                sprite.animations.add("run");
            }
            if (this._unit.type == MODEL_Unit.Player_Tank && animationStrings[i] == "Walk") {
                sprite.animations.add("run");
            }
            if (this._unit.type == MODEL_Unit.Player_Bomber && animationStrings[i] == "Idle") {
                sprite.animations.add("run");
            }
            sprite.visible = false;
            this[propertyName] = sprite;
        }
    }

    this._playDyingAnimation = function() {};

    this.seekAndEngageMostDangerousNeighbour = function() {
        // Check for sudden combat situations
        var enemiesAround = [];
        for (var i = 0; i < gameplayState.units.length; i++) {
            var unit = gameplayState.units[i];
            if (unit.isEnemy() && unit.isAlive()) {
                if (Math.abs(unit.x - this._unit.x) + Math.abs(unit.y - this._unit.y) == 1) {
                    enemiesAround.push(unit);
                }
            }
        }

        var bUnitAttackedIsNeighbour = false;
        var bUnitAttackedIsDangerous = false;

        if (this._unitAttacked != null) {
            var report = CombatSolver.GetReport(this._unit, this._unitAttacked);
            if (!report.bSurvivedA) {
                bUnitAttackedIsDangerous = true;
            }

            for (var i = 0; i < enemiesAround.length; i++) {
                if (this._unitAttacked == enemiesAround[i]) {
                    bUnitAttackedIsNeighbour = true;
                    break;
                }
            }
        }

        // Search for any dangerous enemy
        if (!(bUnitAttackedIsDangerous && bUnitAttackedIsNeighbour)) {
            for (var i = 0; i < enemiesAround.length; i++) {
                var enemy = enemiesAround[i];
                var report = CombatSolver.GetReport(this._unit, enemy);
                if (!report.bSurvivedA) {
                    // enemy found!

                    this._waypoints = [{
                        x: enemy.x,
                        y: enemy.y
                    }];
                    this._nextWaypointIndex = 0;
                    this._unitAttacked = enemy;
                    this._currentDirectionString = this._getDirectionString(this._unit.x, this._unit.y, enemy.x, enemy.y);

                    if (this._unit.type == MODEL_Unit.Player_Marines)
                        game.add.audio("taking_fire", 1.0, false).play();

                    var alertsign = effectsGroup.create(this._unitAttacked.x * GameplayState.STD_CELL_SIZE + GameplayState.STD_HALF_CELL_SIZE, this._unitAttacked.y * GameplayState.STD_CELL_SIZE, "effects_AlertSign");
                    alertsign.anchor.set(0.5);
                    alertsign.scale.set(0);

                    game.add.tween(alertsign.scale).to({
                        x: 1,
                        y: 1
                    }, 200, Phaser.Easing.Quadratic.Out, true);
                    game.add.tween(alertsign.position).to({
                        y: alertsign.position.y - 25
                    }, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function() {
                        alertsign.kill();
                    }, this);

                    break;
                }
            }
        }
    };

    this.update = function() {

        if (GameApplication.bPaused)
            return;

        var bPerformingTurn = (this._waypoints != null);
        if (bPerformingTurn) {

            var bStillHasToMove = (this._nextWaypointIndex < this._waypoints.length);
            if (bStillHasToMove) {

                var nextWaypoint = this._waypoints[this._nextWaypointIndex];
                if ((this._unitAttacked != null || this._positionAttacked != null) && !this._bPlayingActionAnimation) {

                    var bCombatCase = false;
                    if (this._unitAttacked != null) {
                        bCombatCase = (this._unitAttacked.x == nextWaypoint.x && this._unitAttacked.y == nextWaypoint.y);
                    }

                    var bTileDestroyCase = false;
                    if (this._positionAttacked != null) {
                        bTileDestroyCase = (this._unit.type == MODEL_Unit.Player_Bomber && nextWaypoint.x == this._positionAttacked.x && nextWaypoint.y == this._positionAttacked.y);
                    }

                    // TILE DESTROY CASE

                    if (bTileDestroyCase) {
                        if (this._unit.type == MODEL_Unit.Player_Bomber) {



                            var bSideview = (this._currentDirectionString == "Left" || this._currentDirectionString == "Right");
                            map[this._positionAttacked.x + 1][this._positionAttacked.y + 1].type = MODEL_MapCell.Grass_2;
                            var bomb = null;
                            var bombX = this._visibleSprite.position.x + GameplayState.STD_HALF_CELL_SIZE;
                            var bombY = this._visibleSprite.position.y + GameplayState.STD_HALF_CELL_SIZE;

                            game.add.audio("whistle", 1.0, false, true).play();

                            if (bSideview) {
                                bomb = effectsGroup.create(bombX, bombY, "effects_BombSideview");
                            } else {
                                bomb = effectsGroup.create(bombX, bombY, "effects_BombFrontview");
                            }
                            bomb.anchor.set(0.5, 0.5);
                            if (this._currentDirectionString == "Right") {
                                bomb.scale.x = -1;
                            }
                            var bombTween = game.add.tween(bomb.position);
                            var posAttackedX = this._positionAttacked.x;
                            var posAttackedY = this._positionAttacked.y;
                            var bombTweenToX = posAttackedX * GameplayState.STD_CELL_SIZE + GameplayState.STD_HALF_CELL_SIZE;
                            var bombTweenToY = posAttackedY * GameplayState.STD_CELL_SIZE + GameplayState.STD_HALF_CELL_SIZE;
                            bombTween.to({
                                x: bombTweenToX,
                                y: bombTweenToY
                            }, 300);
                            bombTween.onComplete.add(function() {
                                bomb.kill();
                                game.add.audio("bomb_explosion", 1.0, false, true).play();
                                gameplayState.shakeScreen();
                                gameplayState.repaintGrassTile(this._positionAttacked.x, this._positionAttacked.y);
                                gameplayState.makeBombHitHole(bombTweenToX - GameplayState.STD_HALF_CELL_SIZE, bombTweenToY - GameplayState.STD_HALF_CELL_SIZE);
                                var explosion = effectsGroup.create(posAttackedX * GameplayState.STD_CELL_SIZE, posAttackedY * GameplayState.STD_CELL_SIZE - 12, "effects_Explosion");
                                var explosionAnimation = explosion.animations.add("run");
                                explosionAnimation.play(24, false, true);
                                this._onAttackPhaseEnd();
                            }, this);
                            bombTween.start();
                            this._bPlayingActionAnimation = true;
                        }
                    }

                    // COMBAT CASE

                    if (bCombatCase) {

                        var report = CombatSolver.GetReport(this._unit, this._unitAttacked);

                        var bImmediatePhaseEnd = false;
                        var bSideview = (this._currentDirectionString == "Left" || this._currentDirectionString == "Right");

                        this._unitAttacked.getSprite().switchToAnotherSprite("Idle", VIEW_UnitSprite.OppositeDirection(this._currentDirectionString));

                        if (this._unit.type == MODEL_Unit.Player_Tank) {
                            //var explosion = effectsGroup.create(this._unitAttacked.x * GameplayState.STD_CELL_SIZE, this._unitAttacked.y * GameplayState.STD_CELL_SIZE, "effects_Explosion");
                            //var explosionAnimation = explosion.animations.add("run");
                            //explosionAnimation.play(24, false, true);

                            this.switchToAnotherSprite("Idle", this._currentDirectionString);

                            if (this._unitAttacked.type == MODEL_Unit.Enemy_Guard) {
                                this._unitAttacked.getSprite().playAttackAnimation(VIEW_UnitSprite.OppositeDirection(this._currentDirectionString), 24, true);

                                var timing = {
                                    value: 0.0
                                };
                                var delayTween = game.add.tween(timing);
                                delayTween.to({
                                    value: 100.0
                                }, 200);
                                delayTween.onComplete.add(function() {
                                    game.add.audio("snd_guard_fire", 1.0, false, true).play();
                                    var sparkles = effectsGroup.create(this._visibleSprite.position.x, this._visibleSprite.position.y, "effects_BulletHit");
                                    var sparklesAnimation = sparkles.animations.add("run");
                                    sparklesAnimation.play(24, false, true);
                                    sparklesAnimation.onComplete.add(function() {
                                        game.add.audio("death_" + (Math.floor(Math.random() * 3) + 1), 1.0, false, true).play();
                                        playTankAttackAnimation.call(this);
                                    }, this);
                                }, this);
                                delayTween.start();
                            } else {
                                var timeObject = {
                                    value: 0.0
                                };
                                //this._syncAnimationWithMovement();
                                var delay = game.add.tween(timeObject);
                                delay.to({
                                    value: 1.0
                                }, 500);
                                delay.onComplete.add(function() {
                                    if (this._unitAttacked.type == MODEL_Unit.Enemy_Tank) {
                                        game.add.audio("enemy_tank_shoot", 1.0, false, true).play();
                                        this._unitAttacked.getSprite().playAttackAnimation(VIEW_UnitSprite.OppositeDirection(this._currentDirectionString), 14, true);
                                        var tankHit = effectsGroup.create(this._visibleSprite.position.x, this._visibleSprite.position.y - GameplayState.STD_HALF_CELL_SIZE / 3, "effects_TankHit");
                                        tankHit.animations.add("run").play(24, false, true);
                                        gameplayState.makeTankHitHole(tankHit.position.x - 8, tankHit.position.y + GameplayState.STD_HALF_CELL_SIZE / 3 + 10);
                                        var muzzleX = this._unitAttacked._sprite._visibleSprite.position.x + GameplayState.STD_CELL_SIZE + GameplayState.STD_HALF_CELL_SIZE - 12;
                                        var muzzleY = this._unitAttacked._sprite._visibleSprite.position.y + GameplayState.STD_HALF_CELL_SIZE - 16;
                                        var muzzle = effectsGroup.create(muzzleX, muzzleY, "effects_TankMuzzle");
                                        muzzle.anchor.set(0.5, 0.5);
                                        if (this._unitAttacked._sprite._currentDirectionString == "Left") {
                                            muzzle.scale.x = -1;
                                            muzzle.position.x += 24 - 2 * GameplayState.STD_CELL_SIZE;
                                        } else if (this._unitAttacked._sprite._currentDirectionString == "Up") {
                                            muzzle.rotation = -Math.PI / 2;
                                            muzzle.position.x += 16 - GameplayState.STD_CELL_SIZE;
                                            muzzle.position.y -= GameplayState.STD_CELL_SIZE - 32;
                                        } else if (this._unitAttacked._sprite._currentDirectionString == "Down") {
                                            muzzle.rotation = Math.PI / 2;
                                            muzzle.position.x += 6 - GameplayState.STD_CELL_SIZE;
                                            muzzle.position.y += GameplayState.STD_CELL_SIZE - 32;
                                        }
                                        var muzzleAnimation = muzzle.animations.add("run");
                                        muzzleAnimation.play(24, false, true);

                                        playTankAttackAnimation.call(this);
                                    }
                                    if (this._unitAttacked.type == MODEL_Unit.Enemy_Helicopter) {
                                        var heliAttackX = this._unitAttacked._sprite._visibleSprite.position.x + GameplayState.STD_CELL_SIZE;
                                        var heliAttackY = this._unitAttacked._sprite._visibleSprite.position.y + GameplayState.STD_HALF_CELL_SIZE + 20;
                                        var heliAttack = effectsGroup.create(heliAttackX, heliAttackY, "effects_HeliAttack");

                                        game.add.audio("helicopter_rockets", 1.0, false, true).play();

                                        heliAttack.anchor.set(0.5, 0.5);

                                        heliAttack.scale.x = -1;

                                        if (this._unitAttacked._sprite._currentDirectionString == "Left") {
                                            heliAttack.scale.x = 1;
                                            heliAttack.position.x += 70 - 2 * GameplayState.STD_CELL_SIZE + GameplayState.STD_HALF_CELL_SIZE;
                                        } else if (this._unitAttacked._sprite._currentDirectionString == "Up") {
                                            heliAttack.scale.y *= 0.7;
                                            heliAttack.rotation = -Math.PI / 2;
                                            heliAttack.position.x += 60 - GameplayState.STD_CELL_SIZE + 15;
                                            heliAttack.position.y -= GameplayState.STD_CELL_SIZE - 95;
                                        } else if (this._unitAttacked._sprite._currentDirectionString == "Down") {
                                            heliAttack.scale.y *= 0.7;
                                            heliAttack.rotation = Math.PI / 2;
                                            heliAttack.position.x += 6 - GameplayState.STD_HALF_CELL_SIZE - 15;
                                            heliAttack.position.y += GameplayState.STD_CELL_SIZE - 32;
                                        }

                                        var tankHit = effectsGroup.create(this._visibleSprite.position.x, this._visibleSprite.position.y - GameplayState.STD_HALF_CELL_SIZE / 3, "effects_TankHit");
                                        tankHit.animations.add("run").play(24, false, true);

                                        heliAttack.animations.add("run").play(24, false, true);
                                        this._unitAttacked.getSprite().playAttackAnimation(VIEW_UnitSprite.OppositeDirection(this._currentDirectionString), 14, true);
                                        gameplayState.makeVehiclePartsCrater(this._visibleSprite.position.x, this._visibleSprite.position.y, MODEL_Unit.Player_Tank);
                                        this._visibleSprite.visible = false;
                                        this._onAttackPhaseEnd();
                                    } else
                                        playTankAttackAnimation.call(this);

                                }, this);
                                delay.start();
                            }

                            function playTankAttackAnimation() {
                                gameplayState.shakeScreen();
                                game.add.audio("tank_shoot", 1.0, false, true).play();
                                var tankHit = effectsGroup.create(this._unitAttacked.x * GameplayState.STD_CELL_SIZE, this._unitAttacked.y * GameplayState.STD_CELL_SIZE - GameplayState.STD_HALF_CELL_SIZE / 3, "effects_TankHit");
                                tankHit.animations.add("run").play(24, false, true);
                                gameplayState.makeTankHitHole(tankHit.position.x - 8, tankHit.position.y + GameplayState.STD_HALF_CELL_SIZE / 3 + 10);
                                var muzzleX = this._visibleSprite.position.x + GameplayState.STD_CELL_SIZE + GameplayState.STD_HALF_CELL_SIZE - 12;
                                var muzzleY = this._visibleSprite.position.y + GameplayState.STD_HALF_CELL_SIZE - 16;
                                var muzzle = effectsGroup.create(muzzleX, muzzleY, "effects_TankMuzzle");
                                muzzle.anchor.set(0.5, 0.5);
                                if (this._currentDirectionString == "Left") {
                                    muzzle.scale.x = -1;
                                    muzzle.position.x += 24 - 2 * GameplayState.STD_CELL_SIZE;
                                } else if (this._currentDirectionString == "Up") {
                                    muzzle.rotation = -Math.PI / 2;
                                    muzzle.position.x += 16 - GameplayState.STD_CELL_SIZE;
                                    muzzle.position.y -= GameplayState.STD_CELL_SIZE - 32;
                                } else if (this._currentDirectionString == "Down") {
                                    muzzle.rotation = Math.PI / 2;
                                    muzzle.position.x += 6 - GameplayState.STD_CELL_SIZE;
                                    muzzle.position.y += GameplayState.STD_CELL_SIZE - 32;
                                }
                                var muzzleAnimation = muzzle.animations.add("run");
                                muzzleAnimation.play(24, false, true);

                                if (this._unitAttacked.type == MODEL_Unit.Enemy_Guard) {
                                    this._unitAttacked._sprite._visibleSprite.visible = false;
                                    this._unitAttacked.die();
                                    gameplayState.explodeHuman(this._unitAttacked.x * GameplayState.STD_CELL_SIZE, this._unitAttacked.y * GameplayState.STD_CELL_SIZE, MODEL_Unit.Enemy_Guard);
                                }

                                if (this._unitAttacked.type == MODEL_Unit.Enemy_Tank || this._unitAttacked.type == MODEL_Unit.Enemy_AntiAir) {
                                    gameplayState.makeVehiclePartsCrater(this._unitAttacked.x * GameplayState.STD_CELL_SIZE, this._unitAttacked.y * GameplayState.STD_CELL_SIZE, this._unitAttacked.type);
                                }

                                if (!report.bSurvivedB) {
                                    this._unitAttacked._sprite._visibleSprite.visible = false;
                                }

                                if (report.bSurvivedA) {
                                    this.playAttackAnimation(this._currentDirectionString, 14, false);
                                    var fallbackTween = game.add.tween(this._visibleSprite.position);
                                    var fallbackDX = 0;
                                    var fallbackDY = 0;
                                    if (this._currentDirectionString == "Left") {
                                        fallbackDX = 10;
                                    } else if (this._currentDirectionString == "Up") {
                                        fallbackDY = 10;
                                    } else if (this._currentDirectionString == "Down") {
                                        fallbackDY = -10;
                                    } else if (this._currentDirectionString == "Right") {
                                        fallbackDX = -10;
                                    }
                                    fallbackTween.to({
                                        x: this._visibleSprite.position.x + fallbackDX,
                                        y: this._visibleSprite.position.y + fallbackDY
                                    }, 100, Phaser.Easing.Quadratic.Out);
                                    fallbackTween.onComplete.add(function() {
                                        var returnTween = game.add.tween(this._visibleSprite.position);
                                        returnTween.to({
                                            x: this._visibleSprite.position.x - fallbackDX,
                                            y: this._visibleSprite.position.y - fallbackDY
                                        }, 500, Phaser.Easing.Quadratic.InOut, false, 400);
                                        returnTween.onComplete.add(function() {
                                            this._onAttackPhaseEnd();
                                        }, this);
                                        returnTween.start();
                                    }, this);
                                    fallbackTween.start();
                                } else {
                                    this.playAttackAnimation(this._currentDirectionString, 14, true);
                                    gameplayState.makeVehiclePartsCrater(this._visibleSprite.position.x, this._visibleSprite.position.y, MODEL_Unit.Player_Tank);
                                }
                            };
                        }
                        if (this._unit.type == MODEL_Unit.Player_Bomber || this._unit.type == MODEL_Unit.Player_Fighter) {
                            if (report.bSurvivedA) {
                                if (!report.bSurvivedB) {
                                    if (this._unit.type == MODEL_Unit.Player_Bomber) {
                                        game.add.audio("whistle", 1.0, false, true).play();
                                        var bomb = null;
                                        var bombX = this._visibleSprite.position.x + GameplayState.STD_HALF_CELL_SIZE;
                                        var bombY = this._visibleSprite.position.y + GameplayState.STD_HALF_CELL_SIZE;
                                        if (bSideview) {
                                            bomb = effectsGroup.create(bombX, bombY, "effects_BombSideview");
                                        } else {
                                            bomb = effectsGroup.create(bombX, bombY, "effects_BombFrontview");
                                        }
                                        bomb.anchor.set(0.5, 0.5);
                                        if (this._currentDirectionString == "Right") {
                                            bomb.scale.x = -1;
                                        }
                                        var bombTween = game.add.tween(bomb.position);
                                        var unitAttackedX = this._unitAttacked.x;
                                        var unitAttackedY = this._unitAttacked.y;
                                        var bombTweenToX = this._unitAttacked.x * GameplayState.STD_CELL_SIZE + GameplayState.STD_HALF_CELL_SIZE;
                                        var bombTweenToY = this._unitAttacked.y * GameplayState.STD_CELL_SIZE + GameplayState.STD_HALF_CELL_SIZE;
                                        bombTween.to({
                                            x: bombTweenToX,
                                            y: bombTweenToY
                                        }, 300);
                                        bombTween.onComplete.add(function() {
                                            game.add.audio("bomb_explosion", 1.0, false, true).play();
                                            bomb.kill();
                                            gameplayState.shakeScreen();
                                            var explosion = effectsGroup.create(unitAttackedX * GameplayState.STD_CELL_SIZE, unitAttackedY * GameplayState.STD_CELL_SIZE - 12, "effects_Explosion");
                                            var explosionAnimation = explosion.animations.add("run");
                                            explosionAnimation.play(24, false, true);
                                            if (this._unitAttacked.type == MODEL_Unit.Enemy_Guard) {
                                                this._unitAttacked._sprite._visibleSprite.visible = false;
                                                gameplayState.explodeHuman(this._unitAttacked.x * GameplayState.STD_CELL_SIZE, this._unitAttacked.y * GameplayState.STD_CELL_SIZE, MODEL_Unit.Enemy_Guard);
                                                gameplayState.makeTankHitHole(bombTweenToX - GameplayState.STD_HALF_CELL_SIZE - 8, bombTweenToY - GameplayState.STD_HALF_CELL_SIZE + GameplayState.STD_HALF_CELL_SIZE / 3 + 10);
                                            } else {
                                                this._unitAttacked._sprite._visibleSprite.visible = false;
                                                gameplayState.makeVehiclePartsCrater(this._unitAttacked._sprite._visibleSprite.position.x, this._unitAttacked._sprite._visibleSprite.position.y, this._unitAttacked.type);
                                            }
                                            this._onAttackPhaseEnd();
                                        }, this);
                                        bombTween.start();
                                    }
                                    if (this._unit.type == MODEL_Unit.Player_Fighter) {

                                        this.playAttackAnimation(this._currentDirectionString, 24, true);

                                        var shootEffect = effectsGroup.create(this._visibleSprite.position.x, this._visibleSprite.position.y, "effects_Fighter_Shooting");
                                        shootEffect.animations.add("run").play(24, false, true);
                                        game.add.audio("fighter_fire", 1.0, false, true).play();

                                        if (this._currentDirectionString == "Left") {

                                            shootEffect.position.x -= shootEffect.width / 2;
                                            shootEffect.position.x -= 10;
                                        }

                                        if (this._currentDirectionString == "Right") {

                                            shootEffect.position.x += shootEffect.width / 2 + 10;
                                            //shootEffect.scale.x = -1;
                                        }

                                        if (this._currentDirectionString == "Up") {

                                            shootEffect.rotation = Phaser.Math.degToRad(90);
                                            shootEffect.position.x += shootEffect.width;
                                            shootEffect.position.y -= shootEffect.height / 2;
                                            shootEffect.position.y -= 20;
                                        }

                                        if (this._currentDirectionString == "Down") {

                                            shootEffect.position.y += shootEffect.height * 1.8 + 10;
                                            shootEffect.rotation = Phaser.Math.degToRad(-90);
                                            //shootEffect.scale.x = -1;
                                        }

                                        this._visibleSprite.bringToTop();

                                        gameplayState.game.time.events.add(Phaser.Timer.SECOND * 1.5, landHelicopter, this._unitAttacked);

                                        function landHelicopter() {

                                            var explosionTween = game.add.tween({
                                                value: 0.0
                                            })
                                            explosionTween.to({
                                                value: 1.0
                                            }, 250, Phaser.Easing.Linear.None, false, 0, 5, false);
                                            explosionTween.onLoop.add(function() {
                                                var r = Math.random() * 2 + 1;
                                                for (var i = 0; i < r; i++) {
                                                    game.add.audio("rocket_hit", 0.3, false, true).play();
                                                    var explosion = gameplayState.flyingUnitEffectsGroup.create(this._sprite._visibleSprite.position.x + Math.random() * 60 - 30, this._sprite._visibleSprite.position.y + Math.random() * 60 - 30, "effects_RocketHit");
                                                    explosion.scale.set(Math.random() + 0.3);
                                                    explosion.animations.add("run").play(Math.random() * 5 + 24, false, true);
                                                }
                                            }, this);
                                            explosionTween.start();

                                            var landingTween = game.add.tween(this._sprite._visibleSprite.position);
                                            landingTween.to({
                                                y: this.y * GameplayState.STD_CELL_SIZE
                                            }, 1500, Phaser.Easing.Linear.InOut);
                                            landingTween.onComplete.add(function() {
                                                gameplayState.makeVehiclePartsCrater(this._sprite._visibleSprite.position.x, this._sprite._visibleSprite.position.y, this.type);
                                                gameplayState.shakeScreen();
                                                game.add.audio("bomb_explosion", 1.0, false, true).play();
                                                this._sprite._visibleSprite.visible = false;
                                                this._sprite._visibleShadow.visible = false;
                                                var explosion = effectsGroup.create(this._sprite._visibleSprite.position.x, this._sprite._visibleSprite.position.y - GameplayState.STD_HALF_CELL_SIZE / 3, "effects_TankHit");
                                                explosion.animations.add("run").play(24, false, true);
                                            }, this);
                                            landingTween.start();
                                        }
                                    }
                                } else {
                                    bImmediatePhaseEnd = true;
                                }
                            } else {
                                this._unitAttacked._sprite.playAttackAnimation(VIEW_UnitSprite.OppositeDirection(this._currentDirectionString), 7, false);

                                if (this._unitAttacked.type == MODEL_Unit.Enemy_AntiAir) {
                                    var delta0 = new Phaser.Point(0, 0);
                                    var delta1 = new Phaser.Point(0, 0);
                                    var delta2 = new Phaser.Point(0, 0);
                                    var fallbackDX = 0.0;
                                    var fallbackDY = 0.0;
                                    if (this._unitAttacked.getSprite()._currentDirectionString == "Down") {
                                        delta0.x = 82;
                                        delta0.y = 38;
                                        delta1.x = 68;
                                        delta1.y = 35;
                                        delta2.x = 52;
                                        delta2.y = 32;
                                        fallbackDY = -4;
                                    }
                                    if (this._unitAttacked.getSprite()._currentDirectionString == "Left") {
                                        delta0.x = 57;
                                        delta0.y = 38;
                                        delta1.x = 57;
                                        delta1.y = 26;
                                        delta2.x = 57;
                                        delta2.y = 14;
                                        fallbackDX = 4;
                                    }
                                    if (this._unitAttacked.getSprite()._currentDirectionString == "Right") {
                                        delta0.x = 67;
                                        delta0.y = 38;
                                        delta1.x = 67;
                                        delta1.y = 32;
                                        delta2.x = 67;
                                        delta2.y = 14;
                                        fallbackDX = -4;
                                    }
                                    if (this._unitAttacked.getSprite()._currentDirectionString == "Up") {
                                        delta0.x = 52;
                                        delta0.y = 14;
                                        delta1.x = 68;
                                        delta1.y = 14;
                                        delta2.x = 82;
                                        delta2.y = 14;
                                        fallbackDY = 4;
                                    }

                                    var position = this._unitAttacked.getSprite()._visibleSprite.position;
                                    var begX = position.x;
                                    var begY = position.y;
                                    var timeObject = {
                                        value: 0.0
                                    };
                                    var fire = effectsGroup.create(this._unitAttacked.x * GameplayState.STD_CELL_SIZE + delta0.x, this._unitAttacked.y * GameplayState.STD_CELL_SIZE + delta0.y, "effects_RocketTrail");
                                    fire.animations.add("run").play(24, false, true);
                                    fire.anchor.set(0.5, 0.5);
                                    gameplayState.shootRocket(fire.position.x, fire.position.y, this._visibleSprite.position.x + GameplayState.STD_HALF_CELL_SIZE + Math.random() * 50 - 25, this._visibleSprite.position.y + GameplayState.STD_HALF_CELL_SIZE + Math.random() * 50 - 25);

                                    var delay0 = game.add.tween(timeObject);
                                    var fallback0 = game.add.tween(position);
                                    fallback0.to({
                                        x: position.x + fallbackDX,
                                        y: position.y + fallbackDY
                                    }, 200, Phaser.Easing.Quadratic.Out);
                                    fallback0.start();
                                    delay0.to({
                                        value: 1.0
                                    }, 200);
                                    delay0.onComplete.add(function() {
                                        var fire = effectsGroup.create(this._unitAttacked.x * GameplayState.STD_CELL_SIZE + delta1.x, this._unitAttacked.y * GameplayState.STD_CELL_SIZE + delta1.y, "effects_RocketTrail");
                                        fire.animations.add("run").play(24, false, true);
                                        fire.anchor.set(0.5, 0.5);
                                        gameplayState.shootRocket(fire.position.x, fire.position.y, this._visibleSprite.position.x + GameplayState.STD_HALF_CELL_SIZE + Math.random() * 50 - 25, this._visibleSprite.position.y + GameplayState.STD_HALF_CELL_SIZE + Math.random() * 50 - 25);

                                        var fallback1 = game.add.tween(position);
                                        fallback1.to({
                                            x: position.x + fallbackDX,
                                            y: position.y + fallbackDY
                                        }, 200, Phaser.Easing.Quadratic.Out);
                                        fallback1.start();
                                        timeObject.value = 0.0;
                                        var delay1 = game.add.tween(timeObject);
                                        delay1.to({
                                            value: 1.0
                                        }, 200);
                                        delay1.onComplete.add(function() {
                                            var fallback2 = game.add.tween(position);
                                            fallback2.to({
                                                x: position.x + fallbackDX,
                                                y: position.y + fallbackDY
                                            }, 200, Phaser.Easing.Quadratic.Out);
                                            fallback2.start();

                                            var fire = effectsGroup.create(this._unitAttacked.x * GameplayState.STD_CELL_SIZE + delta2.x, this._unitAttacked.y * GameplayState.STD_CELL_SIZE + delta2.y, "effects_RocketTrail");
                                            fire.animations.add("run").play(24, false, true);
                                            fire.anchor.set(0.5, 0.5);
                                            gameplayState.shootRocket(fire.position.x, fire.position.y, this._visibleSprite.position.x + GameplayState.STD_HALF_CELL_SIZE + Math.random() * 50 - 25, this._visibleSprite.position.y + GameplayState.STD_HALF_CELL_SIZE + Math.random() * 50 - 25);

                                            timeObject.value = 0.0;
                                            var delay2 = game.add.tween(timeObject);
                                            delay2.to({
                                                value: 1.0
                                            }, 1000);
                                            delay2.onComplete.add(function() {
                                                var retTween = game.add.tween(position);
                                                retTween.to({
                                                    x: begX,
                                                    y: begY
                                                }, 500, Phaser.Easing.Quadratic.Out);
                                                retTween.onComplete.add(function() {
                                                    landBomber.call(this);
                                                    this._unitAttacked.getSprite().switchToIdle();
                                                    this._onAttackPhaseEnd();
                                                }, this);
                                                retTween.start();
                                            }, this);
                                            delay2.start();
                                        }, this);
                                        delay1.start();
                                    }, this);
                                    delay0.start();
                                }

                                // ANTI AIR KILLS BOMBER
                                function landBomber() {
                                    var explosionTween = game.add.tween({
                                        value: 0.0
                                    })
                                    explosionTween.to({
                                        value: 1.0
                                    }, 250, Phaser.Easing.Linear.None, false, 0, 5, false);
                                    explosionTween.onLoop.add(function() {
                                        var r = Math.random() * 2 + 1;
                                        for (var i = 0; i < r; i++) {
                                            game.add.audio("rocket_hit", 0.3, false, true).play();
                                            var explosion = gameplayState.flyingUnitEffectsGroup.create(this._visibleSprite.position.x + Math.random() * 60 - 30, this._visibleSprite.position.y + Math.random() * 60 - 30, "effects_RocketHit");
                                            explosion.scale.set(Math.random() + 0.3);
                                            explosion.animations.add("run").play(Math.random() * 5 + 24, false, true);
                                        }
                                    }, this);
                                    explosionTween.start();

                                    var landingTween = game.add.tween(this._visibleSprite.position);
                                    landingTween.to({
                                        y: this._unit.y * GameplayState.STD_CELL_SIZE
                                    }, 1500, Phaser.Easing.Linear.InOut);
                                    landingTween.onComplete.add(function() {

                                        game.add.audio("bomb_explosion", 1.0, false, true).play();
                                        gameplayState.makeVehiclePartsCrater(this._visibleSprite.position.x, this._visibleSprite.position.y, this._unit.type);
                                        gameplayState.shakeScreen();
                                        this._visibleSprite.visible = false;
                                        this._visibleShadow.visible = false;
                                        var explosion = effectsGroup.create(this._visibleSprite.position.x, this._visibleSprite.position.y - GameplayState.STD_HALF_CELL_SIZE / 3, "effects_TankHit");
                                        explosion.animations.add("run").play(24, false, true);
                                    }, this);
                                    landingTween.start();
                                }
                            }
                        }
                        if (this._unit.type == MODEL_Unit.Player_Marines) {
                            if (this._unitAttacked.type == MODEL_Unit.Enemy_Guard) {
                                this._unitAttacked._sprite.playAttackAnimation(VIEW_UnitSprite.OppositeDirection(this._currentDirectionString), 24, true);
                            }
                            if (this._unitAttacked.type == MODEL_Unit.Enemy_Helicopter) {

                                var heliAttackX = this._unitAttacked._sprite._visibleSprite.position.x + GameplayState.STD_CELL_SIZE;
                                var heliAttackY = this._unitAttacked._sprite._visibleSprite.position.y + GameplayState.STD_HALF_CELL_SIZE + 20;
                                var heliAttack = effectsGroup.create(heliAttackX, heliAttackY, "effects_HeliAttack");

                                game.add.audio("helicopter_rockets", 1.0, false, true).play();
                                game.add.audio("death_" + (Math.floor(Math.random() * 3) + 1), 1.0, false, true).play();

                                heliAttack.anchor.set(0.5, 0.5);

                                heliAttack.scale.x = -1;

                                if (this._unitAttacked._sprite._currentDirectionString == "Left") {
                                    heliAttack.scale.x = 1;
                                    heliAttack.position.x += 70 - 2 * GameplayState.STD_CELL_SIZE + GameplayState.STD_HALF_CELL_SIZE;
                                } else if (this._unitAttacked._sprite._currentDirectionString == "Up") {
                                    heliAttack.scale.y *= 0.7;
                                    heliAttack.rotation = -Math.PI / 2;
                                    heliAttack.position.x += 60 - GameplayState.STD_CELL_SIZE + 15;
                                    heliAttack.position.y -= GameplayState.STD_CELL_SIZE - 95;
                                } else if (this._unitAttacked._sprite._currentDirectionString == "Down") {
                                    heliAttack.scale.y *= 0.7;
                                    heliAttack.rotation = Math.PI / 2;
                                    heliAttack.position.x += 6 - GameplayState.STD_HALF_CELL_SIZE - 15;
                                    heliAttack.position.y += GameplayState.STD_CELL_SIZE - 32;
                                }

                                var tankHit = effectsGroup.create(this._visibleSprite.position.x, this._visibleSprite.position.y - GameplayState.STD_HALF_CELL_SIZE / 3, "effects_TankHit");
                                tankHit.animations.add("run").play(24, false, true);

                                heliAttack.animations.add("run").play(24, false, true);
                                this._unitAttacked.getSprite().playAttackAnimation(VIEW_UnitSprite.OppositeDirection(this._currentDirectionString), 14, true);
                                gameplayState.explodeHuman(this._visibleSprite.position.x, this._visibleSprite.position.y, MODEL_Unit.Player_Marines);
                                this._visibleSprite.visible = false;
                                this._onAttackPhaseEnd();
                                this._visibleSprite.visible = false;

                            } else {
                                this.playAttackAnimation(this._currentDirectionString, 24, false);
                                var muzzleOffsetX = 0.0;
                                var muzzleOffsetY = 0.0;
                                var muzzleEffectKey = "effects_MarineShooting";
                                var muzzleScaleX = 1.0;
                                var muzzleScaleY = 1.0;
                                var muzzleAnchorX = 0.0;
                                var muzzleAnchorY = 0.0;
                                var muzzleRotation = 0.0;

                                if (this._currentDirectionString == "Right") {
                                    muzzleOffsetX += 12;
                                } else if (this._currentDirectionString == "Left") {
                                    muzzleAnchorX = 0.5;
                                    muzzleAnchorY = 0.5;
                                    muzzleOffsetX += GameplayState.STD_HALF_CELL_SIZE;
                                    muzzleOffsetY += GameplayState.STD_HALF_CELL_SIZE;
                                    muzzleOffsetX -= 30;
                                    muzzleOffsetY -= 1;
                                    muzzleScaleX = -1;
                                } else if (this._currentDirectionString == "Up") {
                                    muzzleEffectKey = "effects_MarineShootingUp";
                                    muzzleOffsetY -= GameplayState.STD_HALF_CELL_SIZE;
                                } else if (this._currentDirectionString == "Down") {
                                    muzzleEffectKey = "effects_MarineShootingDown";
                                }
                                var muzzles = effectsGroup.create(this._visibleSprite.position.x + muzzleOffsetX, this._visibleSprite.position.y + muzzleOffsetY, muzzleEffectKey);
                                muzzles.rotation = muzzleRotation;
                                muzzles.animations.add("run").play(24, false, true);
                                muzzles.anchor.set(muzzleAnchorX, muzzleAnchorY);
                                muzzles.scale.set(muzzleScaleX, muzzleScaleY);

                                game.time.events.add(250, function() {
                                    game.add.audio("snd_ally_marine_fire", 1.0, false, true).play();
                                    game.add.audio("snd_guard_fire", 1.0, false, true).play();

                                }, this);

                                var timing = {
                                    value: 0.0
                                };
                                var delayTween = game.add.tween(timing);
                                var delayTimerMS = 300;
                                if (this._unitAttacked.type == MODEL_Unit.Enemy_Guard)
                                    delayTimerMS = 600;
                                delayTween.to({
                                    value: 100.0
                                }, delayTimerMS);
                                delayTween.onComplete.add(function() {

                                    if (this._unitAttacked.type == MODEL_Unit.Enemy_Guard) {

                                        this._unitAttacked._sprite.playDeathAnimation(this._unitAttacked._sprite._currentDirectionString, 10, null, null);

                                        function afterDeath() {
                                            this._onAttackPhaseEnd();
                                        }

                                        this.playDeathAnimation(this._currentDirectionString, 10, afterDeath, this);

                                        game.add.audio("guard_death_" + (Math.floor(Math.random() * 2) + 1), 1.0, false).play();
                                        game.add.audio("hit_" + (Math.floor(Math.random() * 2) + 1), 1.0, false).play();

                                        var spilX = this._unitAttacked.x * GameplayState.STD_CELL_SIZE;
                                        var spilY = this._unitAttacked.y * GameplayState.STD_CELL_SIZE;
                                        var angle = Phaser.Math.angleBetween(spilX, spilY, this._visibleSprite.position.x, this._visibleSprite.position.y);
                                        for (var i = 0; i < 3; i++) {
                                            gameplayState.spilBlood(spilX - 22, spilY, angle);
                                            gameplayState.spilBlood(spilX + 25, spilY + 22, angle);

                                            gameplayState.spilBlood(this._visibleSprite.position.x - 50, this._visibleSprite.position.y - 10, angle + Math.PI);
                                            gameplayState.spilBlood(this._visibleSprite.position.x + 30, this._visibleSprite.position.y - 10, angle + Math.PI);
                                            gameplayState.spilBlood(this._visibleSprite.position.x - 25, this._visibleSprite.position.y + 28, angle + Math.PI);
                                        }
                                    }
                                    if (this._unitAttacked.type == MODEL_Unit.Enemy_Tank || this._unitAttacked.type == MODEL_Unit.Enemy_AntiAir) {
                                        var sparkles = effectsGroup.create(this._unitAttacked.x * GameplayState.STD_CELL_SIZE, this._unitAttacked.y * GameplayState.STD_CELL_SIZE, "effects_BulletHit");
                                        var sparklesAnimation = sparkles.animations.add("run");
                                        sparklesAnimation.play(24, false, true);
                                        sparklesAnimation.onComplete.add(function() {

                                            // ENEMY TANK KILLS MARINES
                                            if (this._unitAttacked.type == MODEL_Unit.Enemy_Tank) {
                                                game.add.audio("enemy_tank_shoot", 1.0, false, true).play();
                                                this._visibleSprite.visible = false;
                                                game.add.audio("death_" + (Math.floor(Math.random() * 3) + 1), 1.0, false, true).play();
                                                gameplayState.explodeHuman(this._visibleSprite.position.x, this._visibleSprite.position.y, MODEL_Unit.Player_Marines);

                                                var tankHit = effectsGroup.create(this._visibleSprite.position.x, this._visibleSprite.position.y - GameplayState.STD_HALF_CELL_SIZE / 3, "effects_TankHit");
                                                tankHit.animations.add("run").play(24, false, true);
                                                gameplayState.makeTankHitHole(tankHit.position.x - 8, tankHit.position.y + GameplayState.STD_HALF_CELL_SIZE / 3 + 10);
                                                gameplayState.shakeScreen();

                                                var muzzleX = this._unitAttacked._sprite._visibleSprite.position.x + GameplayState.STD_CELL_SIZE + GameplayState.STD_HALF_CELL_SIZE - 12;
                                                var muzzleY = this._unitAttacked._sprite._visibleSprite.position.y + GameplayState.STD_HALF_CELL_SIZE - 16;
                                                var muzzle = effectsGroup.create(muzzleX, muzzleY, "effects_TankMuzzle");
                                                muzzle.anchor.set(0.5, 0.5);
                                                if (this._unitAttacked._sprite._currentDirectionString == "Left") {
                                                    muzzle.scale.x = -1;
                                                    muzzle.position.x += 24 - 2 * GameplayState.STD_CELL_SIZE;
                                                } else if (this._unitAttacked._sprite._currentDirectionString == "Up") {
                                                    muzzle.rotation = -Math.PI / 2;
                                                    muzzle.position.x += 16 - GameplayState.STD_CELL_SIZE;
                                                    muzzle.position.y -= GameplayState.STD_CELL_SIZE - 32;
                                                } else if (this._unitAttacked._sprite._currentDirectionString == "Down") {
                                                    muzzle.rotation = Math.PI / 2;
                                                    muzzle.position.x += 6 - GameplayState.STD_CELL_SIZE;
                                                    muzzle.position.y += GameplayState.STD_CELL_SIZE - 32;
                                                }
                                                var muzzleAnimation = muzzle.animations.add("run");
                                                muzzleAnimation.play(24, false, true);

                                                //this._unitAttacked._sprite.playAttackAnimation(VIEW_UnitSprite.OppositeDirection(this._currentDirectionString), 14, false);
                                                var fallbackTween = game.add.tween(this._unitAttacked._sprite._visibleSprite.position);
                                                var fallbackDX = 0;
                                                var fallbackDY = 0;
                                                if (this._unitAttacked._sprite._currentDirectionString == "Left") {
                                                    fallbackDX = 10;
                                                } else if (this._unitAttacked._sprite._currentDirectionString == "Up") {
                                                    fallbackDY = 10;
                                                } else if (this._unitAttacked._sprite._currentDirectionString == "Down") {
                                                    fallbackDY = -10;
                                                } else if (this._unitAttacked._sprite._currentDirectionString == "Right") {
                                                    fallbackDX = -10;
                                                }
                                                fallbackTween.to({
                                                    x: this._unitAttacked._sprite._visibleSprite.position.x + fallbackDX,
                                                    y: this._unitAttacked._sprite._visibleSprite.position.y + fallbackDY
                                                }, 100, Phaser.Easing.Quadratic.Out);
                                                fallbackTween.onComplete.add(function() {
                                                    var returnTween = game.add.tween(this._unitAttacked._sprite._visibleSprite.position);
                                                    returnTween.to({
                                                        x: this._unitAttacked._sprite._visibleSprite.position.x - fallbackDX,
                                                        y: this._unitAttacked._sprite._visibleSprite.position.y - fallbackDY
                                                    }, 500, Phaser.Easing.Quadratic.InOut, false, 400);
                                                    returnTween.onComplete.add(function() {
                                                        this._onAttackPhaseEnd();
                                                    }, this);
                                                    returnTween.start();
                                                }, this);
                                                fallbackTween.start();
                                            } else {
                                                game.time.events.add(150, this._onAttackPhaseEnd, this);
                                            }

                                        }, this);

                                    }
                                }, this);
                                delayTween.start();
                            }

                        }
                        if (!report.bSurvivedA) {
                            this._unit.die();
                        }
                        if (!report.bSurvivedB) {
                            this._unitAttacked.die();
                        }
                        this._bPlayingActionAnimation = true;
                        if (bImmediatePhaseEnd) {
                            this._onAttackPhaseEnd();
                        }
                    }
                }

                if (map[nextWaypoint.x + 1][nextWaypoint.y + 1].type == MODEL_MapCell.Flag) {
                    this._bPlayingActionAnimation = true;
                    gameplayState.bTurnIsLast = true;
                    this._endTurn();
                }

                var bEnemiesNearby = false;
                if (bEnemiesNearby) {

                }

                if (!this._bPlayingActionAnimation) {

                    // MOVEMENT

                    var bSlowingDown = (this._waypointPathLength - this._distancePassed < this._breakDistance);
                    if (bSlowingDown) {
                        var bActualBreakDistanceNotSetYet = (this._actualBreakDistance == 1.0);
                        if (bActualBreakDistanceNotSetYet) {
                            this._actualBreakDistance = this._waypointPathLength - this._distancePassed;
                            this._deceleration = -(2 * (this._breakDistance - this._movementSpeed * this._breakTime) / (this._breakTime * this._breakTime));
                        }
                        this._movementSpeed -= this._deceleration * this._timeStep;
                        if (this._movementSpeed < 0) {
                            this._movementSpeed = 0;
                        }
                    } else {
                        this._movementSpeed += this._acceleration * this._timeStep;
                        if (this._movementSpeed > this._maxMovementSpeed) {
                            this._movementSpeed = this._maxMovementSpeed;
                        }
                    }
                    var stepMovement = this._movementSpeed * this._timeStep;
                    var waypointSpriteSpaceX = nextWaypoint.x * GameplayState.STD_CELL_SIZE;
                    var waypointSpriteSpaceY = nextWaypoint.y * GameplayState.STD_CELL_SIZE;
                    var dx = waypointSpriteSpaceX - (this._visibleSprite.position.x - this._visualOffsetX);
                    var dy = waypointSpriteSpaceY - (this._visibleSprite.position.y - this._visualOffsetY);
                    if (this._unit.isFlying()) {
                        dy = waypointSpriteSpaceY - this._savedY;
                    }
                    var distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < stepMovement || distance < 0.5) {
                        this._unit.x = nextWaypoint.x;
                        this._unit.y = nextWaypoint.y;
                        this._distancePassed += distance;
                        this.setPositionToUnit();
                        this._nextWaypointIndex++;

                        // peek next waypoint for animation switch
                        this._syncAnimationWithMovement();
                        this.seekAndEngageMostDangerousNeighbour();
                    } else {
                        var stepX = stepMovement * dx / distance;
                        var stepY = stepMovement * dy / distance;
                        this._distancePassed += stepMovement;
                        this.switchToAnotherSprite("Walk", this._currentDirectionString);
                        if (this._unit.isFlying()) {
                            this._savedY += stepY;
                        }
                        this._visibleSprite.position.x += stepX;
                        this._visibleSprite.position.y += stepY;
                    }
                }
            } else {
                this._endTurn();
            }
        }

        if (this._visibleShadow != null && this._visibleSprite != null) {
            this._flyingTimer += 0.05;
            if (this._flyingTimer > Phaser.Math.PI2) {
                this._flyingTimer = 0.0;
            }

            var cos = Math.cos(this._flyingTimer);
            this._visibleSprite.position.y = this._savedY + this._visualOffsetY + 5 * cos;

            this._visibleShadow.position.x = this._visibleSprite.position.x + GameplayState.STD_HALF_CELL_SIZE + (this._visibleSprite.width - GameplayState.STD_CELL_SIZE);
            this._visibleShadow.position.y = this._savedY + GameplayState.STD_HALF_CELL_SIZE;
            this._visibleShadow.scale.set(1.0 + cos * 0.05, 1.0 + cos * 0.05);
        }
    };
    this.playDeathAnimation = function(direction, fps, onFinishCallback, onFinishCallbackContext) {
        if (this._unit.type == MODEL_Unit.Player_Marines || this._unit.type == MODEL_Unit.Enemy_Guard) {
            var bloodSplash = effectsGroup.create(this._visibleSprite.position.x, this._visibleSprite.position.y, "effects_BloodSplash");
            bloodSplash.animations.add("run").play(fps, false, true);
            this.switchToAnotherSprite("Die", this._currentDirectionString);
            if (this._currentDirectionString == "Right") {
                this._visibleSprite.position.x -= (this._visibleSprite.width - 128);
                this._visualOffsetX = -(this._visibleSprite.width - 128);
            }
            var anim = this._visibleSprite.animations.currentAnim;
            if (anim != null) {
                anim.play(24, false, false);
                anim.onComplete.add(function() {

                    gameplayState.decalRenderTexture.render(this._visibleSprite, this._visibleSprite.position, false);
                    this._visibleSprite.visible = false;

                    if (onFinishCallback) {
                        onFinishCallback.call(onFinishCallbackContext);
                    }
                }, this);
            }
        }
    };
    this.playAttackAnimation = function(direction, fps, bEndTurnOnFinish) {

        this._bPlayingActionAnimation = true;
        this.switchToAnotherSprite("Attack", direction, false);
        var animation = this._visibleSprite.animations.add("run");
        animation.play(fps, false, false);
        animation.onComplete.add(function() {
            if (bEndTurnOnFinish) {
                this._onAttackPhaseEnd();
            }
            // TEMPORARY
            if (!this._unit.isAlive()) {
                this._visibleSprite.visible = false;
            }
        }, this);
        if (this._unit.type == MODEL_Unit.Enemy_Guard) {
            var muzzles = effectsGroup.create(this._visibleSprite.position.x + GameplayState.STD_HALF_CELL_SIZE, this._visibleSprite.position.y + GameplayState.STD_HALF_CELL_SIZE, "effects_GuardShooting" + (direction != "Up" ? direction : "Down"));
            muzzles.anchor.set(0.5, 0.5);
            if (this._currentDirectionString == "Right") {
                muzzles.position.x += 40;
                muzzles.position.y -= 12;
            } else if (this._currentDirectionString == "Left") {
                muzzles.position.x -= 40;
                muzzles.position.y -= 12;
            } else if (this._currentDirectionString == "Down") {
                muzzles.position.y += 15;
            } else if (this._currentDirectionString == "Up") {
                muzzles.position.y += 15;
                muzzles.scale.x = -1;
                muzzles.scale.y = -1;
                muzzles.position.y -= GameplayState.STD_HALF_CELL_SIZE;
                muzzles.position.y -= 10;
                muzzles.position.x += 2;
            }
            muzzles.animations.add("run").play(24, false, true);
        }
    };
    this.setPositionToUnit = function() {
        if (this._visibleSprite != null) {
            if (this._unit.isFlying()) {
                var cos = Math.cos(this._flyingTimer);
                this._savedY = unit.y * GameplayState.STD_CELL_SIZE;
                this._visibleSprite.position.set(unit.x * GameplayState.STD_CELL_SIZE + this._visualOffsetX, this._savedY + this._visualOffsetY + 5 * cos);
            } else {
                this._visibleSprite.position.set(unit.x * GameplayState.STD_CELL_SIZE + this._visualOffsetX, unit.y * GameplayState.STD_CELL_SIZE + this._visualOffsetY);
            }
        }
        if (this._visibleShadow != null) {
            this._visibleShadow.position.set(unit.x * GameplayState.STD_CELL_SIZE + GameplayState.STD_HALF_CELL_SIZE + (this._visibleSprite.width - GameplayState.STD_CELL_SIZE), this._savedY + GameplayState.STD_HALF_CELL_SIZE);
        }
    };
    this._onAttackPhaseEnd = function() {
        this._bPlayingActionAnimation = true;
        if (!this._unit.isEnemy()) {
            this._endTurn();
        }
        if (this._unit.isAlive()) {
            this.switchToAnotherSprite("Idle", this._currentDirectionString);
        }
        this._unitAttacked = null;
    };
    this._endTurn = function() {
        if (this._unit.type == MODEL_Unit.Player_Tank && this._tankEngineSnd)
            this._tankEngineSnd.destroy();
        if (this._unit.type == MODEL_Unit.Player_Bomber && this._bomberEngineSnd)
            this._bomberEngineSnd.destroy();
        if (this._unit.type == MODEL_Unit.Player_Fighter && this._fighterEngineSnd)
            this._fighterEngineSnd.destroy();
        if (this._unit.type == MODEL_Unit.Player_Marines && this._walkSnd)
            this._walkSnd.destroy();
        this._walkSnd = null;
        this._bomberEngineSnd = null;
        this._fighterEngineSnd = null;
        this._tankEngineSnd = null;
        this.setPositionToUnit();
        this.switchToAnotherSprite("Idle", this._currentDirectionString);
        this._bPlayingActionAnimation = false;
        this._unitAttacked = null;
        this._positionAttacked = null;
        this._waypoints = null;
        this._nextWaypointIndex = 0;
        this._timeStep = 0.0;
        if (this._turnFinishCallback != null) {
            this._turnFinishCallback.call(this._turnFinishCallbackContext);
        }
        this._turnFinishCallback = null;
        this._turnFinishCallbackContext = null;
    };
    this.makeTurn = function(waypoints, timeStep, finishCallback, context, attackedUnit, attackedPosition) {
        if (waypoints.length == 0) {
            finishCallback.call(context);
            return;
        }

        if (this._unit.type == MODEL_Unit.Player_Tank) {
            this._tankEngineSnd = context.game.add.audio("tank_engine", 1.0, true, true).play();
        }
        if (this._unit.type == MODEL_Unit.Player_Bomber) {
            this._bomberEngineSnd = context.game.add.audio("bomber_fly", 1.0, true, true).play();
        }
        if (this._unit.type == MODEL_Unit.Player_Fighter) {
            this._fighterEngineSnd = context.game.add.audio("bomber_fly", 1.0, true, true).play();
        }

        if (waypoints.length > 1) {
            if (this._unit.type == MODEL_Unit.Player_Marines) {
                game.add.audio("affirm_" + (Math.floor(Math.random() * 3) + 1), 1.0, false, true).play();

                this._walkSnd = context.game.add.audio("footsteps", 0.4, true, true).play();
            }
        }
        this._unitAttacked = attackedUnit;
        this._positionAttacked = attackedPosition;
        this._waypoints = waypoints;
        this._waypointPathLength = 0.0;
        this._distancePassed = 0.0;
        for (var i = 1; i < this._waypoints.length; i++) {
            var previousWaypoint = this._waypoints[i - 1];
            var pwX = previousWaypoint.x * GameplayState.STD_CELL_SIZE;
            var pwY = previousWaypoint.y * GameplayState.STD_CELL_SIZE;
            var nextWaypoint = this._waypoints[i];
            var nwX = nextWaypoint.x * GameplayState.STD_CELL_SIZE;
            var nwY = nextWaypoint.y * GameplayState.STD_CELL_SIZE;

            this._waypointPathLength += Phaser.Math.distance(pwX, pwY, nwX, nwY);
        }
        this._actualBreakDistance = 1.0;
        this._movementSpeed = 0;
        this._nextWaypointIndex = 1;
        this._timeStep = timeStep;
        this._turnFinishCallback = finishCallback;
        this._turnFinishCallbackContext = context;
        this._syncAnimationWithMovement();
    };
    this.pointAt = function(x, y) {
        var angle = Phaser.Math.angleBetween(this._unit.x, this._unit.y, x, y);
        var QUARTER_PI = Math.PI / 4.0;
        var HALF_PI = Math.PI / 2.0;
        if (angle <= QUARTER_PI && angle >= -QUARTER_PI) {
            this.switchToAnotherSprite("Idle", "Right");
        } else if (angle < -QUARTER_PI && angle > -HALF_PI - QUARTER_PI) {
            this.switchToAnotherSprite("Idle", "Up");
        } else if (angle < HALF_PI + QUARTER_PI && angle > QUARTER_PI) {
            this.switchToAnotherSprite("Idle", "Down");
        } else {
            this.switchToAnotherSprite("Idle", "Left");
        }
    };
    this._getDirectionString = function(x0, y0, x1, y1) {
        var angle = Phaser.Math.angleBetween(x0, y0, x1, y1);
        var QUARTER_PI = Math.PI / 4.0;
        var HALF_PI = Math.PI / 2.0;
        if (angle <= QUARTER_PI && angle >= -QUARTER_PI) {
            return "Right";
        } else if (angle < -QUARTER_PI && angle > -HALF_PI - QUARTER_PI) {
            return "Up";
        } else if (angle < HALF_PI + QUARTER_PI && angle > QUARTER_PI) {
            return "Down";
        } else {
            return "Left";
        }
    };
    this._syncAnimationWithMovement = function() {
        if (this._nextWaypointIndex < this._waypoints.length) {
            var nextWaypoint = this._waypoints[this._nextWaypointIndex];
            this.switchToAnotherSprite("Walk", this._getDirectionString(this._unit.x, this._unit.y, nextWaypoint.x, nextWaypoint.y));
        }
    };
    this.switchToIdle = function() {
        this.switchToAnotherSprite("Idle", this._currentDirectionString);
    };
    this.switchToAnotherSprite = function(animation, direction) {
        if (!this._unit.isAlive() && animation != "Die") {
            return;
        }
        if (this._unit.isFlying() && animation == "Walk") {
            animation = "Idle";
        }
        var propertyName = "_" + animation.toLowerCase() + direction + "Costume";
        var sprite = this[propertyName];
        if (sprite == null || sprite == this._visibleSprite) {
            return;
        }
        if (this._visibleSprite != null) {
            this._visibleSprite.visible = false;
        }
        if (this._visibleShadow != null) {
            this._visibleShadow.visible = false;

            var shadowPropertyName = "_shadow" + direction + "Costume";
            var shadowSprite = this[shadowPropertyName];
            if (shadowSprite != null) {
                this._visibleShadow = shadowSprite;
                this._visibleShadow.visible = true;
            }
        }
        this._currentDirectionString = direction;
        if (this._unit.type == MODEL_Unit.Player_Marines) {
            if (direction == "Left") {
                this._visualOffsetX = -6;
            } else if (direction == "Right") {
                this._visualOffsetX = 6;
            } else {
                this._visualOffsetX = 0;
            }
        }
        this._visibleSprite = sprite;
        var anim = this._visibleSprite.animations.getAnimation("run");
        if (anim != null) {
            if (this._unit.type == MODEL_Unit.Player_Marines && animation == "Walk") {
                anim.play(7, true, false);
            } else if (this._unit.type == MODEL_Unit.Player_Tank && animation == "Walk") {
                anim.play(12, true, false);
            } else {
                anim.play(24, true, false);
            }
        }
        this._visibleSprite.visible = true;
        this.setPositionToUnit();
    };
    this.destroy = function() {
        if (this._unit.type == MODEL_Unit.Player_Tank && this._tankEngineSnd)
            this._tankEngineSnd.destroy();
        if (this._unit.type == MODEL_Unit.Player_Bomber && this._bomberEngineSnd)
            this._bomberEngineSnd.destroy();
        if (this._unit.type == MODEL_Unit.Player_Fighter && this._fighterEngineSnd)
            this._fighterEngineSnd.destroy();
        if (this._unit.type == MODEL_Unit.Player_Marines && this._walkSnd)
            this._walkSnd.destroy();

        for (var i = 0; i < animationStrings.length; i++) {
            for (var j = 0; j < directionStrings.length; j++) {
                var propertyName = "_" + animationStrings[i].toLowerCase() + directionStrings[j] + "Costume";
                var sprite = this[propertyName];
                if (sprite != null) {
                    sprite.destroy();
                }
            }
        }
        for (var j = 0; j < directionStrings.length; j++) {
            var propertyName = "_shadow" + directionStrings[j] + "Costume";
            var sprite = this[propertyName];
            if (sprite != null) {
                sprite.destroy();
            }
        }
    };
    unit.setDyingCallback(this._playDyingAnimation, this);
    this._visibleSprite = this["_idle" + directionString + "Costume"];
    var anim = this._visibleSprite.animations.getAnimation("run");
    if (anim != null) {
        anim.play(24, true, false);
    }
    this._visibleSprite.visible = true;
    this._visibleShadow = this["_shadow" + directionString + "Costume"];
    if (this._visibleShadow != null) {
        this._visibleShadow.visible = true;
    }
    this._currentDirectionString = directionString;
    this.setPositionToUnit();
};
VIEW_UnitSprite.AnimationStrings = ["Idle", "Walk", "Attack", "Die"];
VIEW_UnitSprite.DirectionStrings = ["Left", "Right", "Up", "Down"];
VIEW_UnitSprite.OppositeDirection = function(direction) {
    if (direction == "Right") {
        return "Left";
    } else if (direction == "Left") {
        return "Right";
    } else if (direction == "Up") {
        return "Down";
    } else if (direction == "Down") {
        return "Up";
    }
};