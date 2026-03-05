function VIEW_PathViewer(map, group) {
    this._minX = 0;
    this._minY = 0;
    this._maxX = map.length;
    this._maxY = map[0].length;
    this._points = [];
    this._arrowSprites = [];
    this._activeUnit = null;
    this._maxPathLength = VIEW_PathViewer.MAX_PATH_LENGTH;
    this._attackedUnit = null;
    this._attackedPosition = null;
    this._updatePointDirectionFrame = function(pointIndex) {
        var point = this._points[pointIndex];
        var previousPoint = null;
        var nextPoint = null;
        if (pointIndex > 0) {
            previousPoint = this._points[pointIndex - 1];
        }
        if (pointIndex < this._points.length - 1) {
            nextPoint = this._points[pointIndex + 1];
        }

        var bLeftIn = false;
        var bRightIn = false;
        var bUpIn = false;
        var bDownIn = false;
        var bTheFirst;

        if (previousPoint != null) {
            bLeftIn = (point.x - 1 == previousPoint.x && point.y == previousPoint.y);
            bRightIn = (point.x + 1 == previousPoint.x && point.y == previousPoint.y);
            bUpIn = (point.x == previousPoint.x && point.y - 1 == previousPoint.y);
            bDownIn = (point.x == previousPoint.x && point.y + 1 == previousPoint.y);
        }
        bTheFirst = (!bLeftIn && !bRightIn && !bUpIn && !bDownIn);

        var bLeftOut = false;
        var bRightOut = false;
        var bUpOut = false;
        var bDownOut = false;
        var bHeading;

        if (nextPoint != null) {
            bLeftOut = (point.x - 1 == nextPoint.x && point.y == nextPoint.y);
            bRightOut = (point.x + 1 == nextPoint.x && point.y == nextPoint.y);
            bUpOut = (point.x == nextPoint.x && point.y - 1 == nextPoint.y);
            bDownOut = (point.x == nextPoint.x && point.y + 1 == nextPoint.y);
        }
        bHeading = (!bLeftOut && !bRightOut && !bUpOut && !bDownOut);

        // . . .
        // . @ -
        // . . .
        if (bRightIn && bHeading) {
            this._arrowSprites[pointIndex].frame = 3;
        }

        // FIRST

        // . . .
        // . @ .
        // . > .
        if (bTheFirst && bDownOut) {
            this._arrowSprites[pointIndex].frame = 2;
        }

        // . . .
        // < @ .
        // . . .
        if (bTheFirst && bLeftOut) {
            this._arrowSprites[pointIndex].frame = 1;
        }

        // . . .
        // . @ >
        // . . .
        if (bTheFirst && bRightOut) {
            this._arrowSprites[pointIndex].frame = 0;
        }

        // . ^ .
        // . @ .
        // . . .
        if (bTheFirst && bUpOut) {
            this._arrowSprites[pointIndex].frame = 3;
        }

        // HEADING

        // . . .
        // . @ .
        // . . .
        if (bTheFirst && bHeading) {
            this._arrowSprites[pointIndex].frame = 14;
        }

        // . > .
        // . @ .
        // . . .
        if (bUpIn && bHeading) {
            if (this._attackedUnit == null && !this.bMarinesCapturingTheFlag && this._attackedPosition == null) {
                this._arrowSprites[pointIndex].frame = 13;
            } else {
                this._arrowSprites[pointIndex].frame = 18;
            }
        }

        // . . .
        // . @ .
        // . ^ .
        if (bDownIn && bHeading) {
            if (this._attackedUnit == null && !this.bMarinesCapturingTheFlag && this._attackedPosition == null) {
                this._arrowSprites[pointIndex].frame = 12;
            } else {
                this._arrowSprites[pointIndex].frame = 17;
            }
        }

        // . . .
        // > @ .
        // . . .
        if (bLeftIn && bHeading) {
            if (this._attackedUnit == null && !this.bMarinesCapturingTheFlag && this._attackedPosition == null) {
                this._arrowSprites[pointIndex].frame = 11;
            } else {
                this._arrowSprites[pointIndex].frame = 16;
            }
        }

        // . . .
        // . @ <
        // . . .
        if (bRightIn && bHeading) {
            if (this._attackedUnit == null && !this.bMarinesCapturingTheFlag && this._attackedPosition == null) {
                this._arrowSprites[pointIndex].frame = 10;
            } else {
                this._arrowSprites[pointIndex].frame = 15;
            }
        }

        // STRAIGHT

        // . . .
        // > @ >
        // . . .
        if ((bLeftIn && bRightOut) || (bRightIn && bLeftOut)) {
            this._arrowSprites[pointIndex].frame = 4;
        }

        // . . .
        // > @ >
        // . . .
        if ((bUpIn && bDownOut) || (bDownIn && bUpOut)) {
            this._arrowSprites[pointIndex].frame = 9;
        }

        // CORNER

        // . . .
        // . @ >
        // . > .
        if ((bDownIn && bRightOut) || (bRightIn && bDownOut)) {
            this._arrowSprites[pointIndex].frame = 5;
        }

        // . . .
        // < @ .
        // . ^ .
        if ((bDownIn && bLeftOut) || (bLeftIn && bDownOut)) {
            this._arrowSprites[pointIndex].frame = 6;
        }

        // . ^ .
        // . @ <
        // . . .
        if ((bRightIn && bUpOut) || (bUpIn && bRightOut)) {
            this._arrowSprites[pointIndex].frame = 7;
        }

        // . ^ .
        // > @ .
        // . . .
        if ((bLeftIn && bUpOut) || (bUpIn && bLeftOut)) {
            this._arrowSprites[pointIndex].frame = 8;
        }

        // REVERSED

        // . . .
        //  @ <>
        // . . .
        if (bRightIn && bRightOut) {
            this._arrowSprites[pointIndex].frame = 0;
        }

        //  . . .
        // <> @ .
        //  . . .
        if (bLeftIn && bLeftOut) {
            this._arrowSprites[pointIndex].frame = 1;
        }

        //  . .  .
        //  . @  .
        //  . >^ .
        if (bDownIn && bDownOut) {
            this._arrowSprites[pointIndex].frame = 2;
        }

        //  . ^> .
        //  . @ .
        //  . . .
        if (bUpIn && bUpOut) {
            this._arrowSprites[pointIndex].frame = 3;
        }

    };
    this._isPointInBounds = function(x, y) {
        return x >= this._minX && x <= this._maxX && y >= this._minY && y <= this._maxY;
    };
    this.getPathLength = function() {
        return this._points.length;
    };
    this.clear = function() {
        this.bMarinesCapturingTheFlag = false;
        this._attackedUnit = null;
        this._attackedPosition = null;
        this.destroy();
        this._points = [];
        this._arrowSprites = [];
    };
    this.isUnitActive = function(unit) {
        return this._activeUnit === unit;
    };
    this.isActiveUnitExists = function() {
        return this._activeUnit != null;
    };
    this.setActiveUnit = function(unit) {
        this._activeUnit = unit;
        if (this.getPathLength() > 0) {
            this.clear();
        }
    };
    this.isAttackingPosition = function() {
        return this._attackedPosition != null;
    };
    this.setPositionAttacked = function(cellPosition) {
        return this._attackedPosition = cellPosition;
    };
    this.getPositionAttacked = function() {
        return this._attackedPosition;
    };
    this.isUnitEngaged = function() {
        return this._attackedUnit != null;
    };
    this.setUnitEngaged = function(unit) {
        this._attackedUnit = unit;
    };
    this.getUnitEngaged = function() {
        return this._attackedUnit;
    };
    this.isNextAfterTheHeading = function(x, y) {
        if (this._points.length > 1) {
            var nextPointAfterTheHeading = this._points[this._points.length - 2];
            return (nextPointAfterTheHeading.x == x) && (nextPointAfterTheHeading.y == y);
        } else {
            return false;
        }
    };
    this.getActiveUnit = function() {
        return this._activeUnit;
    };
    this.getPoints = function() {
        return this._points;
    };
    this.isAdjacentToHeading = function(unit) {
        var heading = null;
        if (this._points.length > 0) {
            heading = this._points[this._points.length - 1];
        } else {
            heading = new Object({
                x: this._activeUnit.x,
                y: this._activeUnit.y
            });
        }
        var manhattanDistance = Math.abs(unit.x - heading.x) + Math.abs(unit.y - heading.y);
        return (manhattanDistance == 1);
    };
    this.add = function(x, y) {
        if (this._points.length >= this._maxPathLength) {
            return;
        }
        if (this._activeUnit == null) {
            return;
        }
        if (this.bMarinesCapturingTheFlag)
            return;

        var pathLength = this._points.length;
        var previousPoint = this._points[pathLength - 1];
        if (this._isPointInBounds(x, y)) {
            var cellType = map[x + 1][y + 1].type;
            this.bMarinesCapturingTheFlag = (cellType == MODEL_MapCell.Flag && this._activeUnit.type == MODEL_Unit.Player_Marines);
            var bFlyingUnitHovering = (cellType == MODEL_MapCell.Water && this._activeUnit.isFlying());
            var bFlyingOfBarricade = (cellType == MODEL_MapCell.Barricade && this._activeUnit.type == MODEL_Unit.Player_Fighter);
            var bDestroyingCell = (MODEL_Unit.isAbleToAttackCell(cellType, this._activeUnit.type));
            if (MODEL_MapCell.IsWalkable(cellType) || this.bMarinesCapturingTheFlag || bFlyingUnitHovering || bDestroyingCell || bFlyingOfBarricade) {
                var bFirst = (this._points.length == 0);
                if (bFirst) {
                    var manhattanDistance = Math.abs(this._activeUnit.x - x) + Math.abs(this._activeUnit.y - y);
                    var bConnectedWithBeginning = (manhattanDistance == 1);
                    if (bConnectedWithBeginning) {
                        this._points.push({
                            x: this._activeUnit.x,
                            y: this._activeUnit.y
                        });
                        this._arrowSprites.push(group.create(this._activeUnit.x * GameplayState.STD_CELL_SIZE, this._activeUnit.y * GameplayState.STD_CELL_SIZE, "gui_misc_patharrow"));
                        this._points.push({
                            x: x,
                            y: y
                        });
                        this._arrowSprites.push(group.create(x * GameplayState.STD_CELL_SIZE, y * GameplayState.STD_CELL_SIZE, "gui_misc_patharrow"));
                        this._updatePointDirectionFrame(this._points.length - 1);
                        this._updatePointDirectionFrame(this._points.length - 2);
                    }
                } else {
                    var manhattanDistance = Math.abs(x - previousPoint.x) + Math.abs(y - previousPoint.y);
                    var bMatchesPrevious = (previousPoint.x == x && previousPoint.y == y);
                    var bConnectedWithRest = (manhattanDistance == 1);
                    if (!bMatchesPrevious && bConnectedWithRest) {
                        this._points.push({
                            x: x,
                            y: y
                        });
                        this._arrowSprites.push(group.create(x * GameplayState.STD_CELL_SIZE, y * GameplayState.STD_CELL_SIZE, "gui_misc_patharrow"));
                        this._updatePointDirectionFrame(this._points.length - 1);
                        this._updatePointDirectionFrame(this._points.length - 2);
                    }
                }
            } else {}
        }
    };
    this.removeHeading = function() {
        this.bMarinesCapturingTheFlag = false;
        var heading = this._points.pop();
        if (this._attackedUnit != null) {
            if (heading.x == this._attackedUnit.x && heading.y == this._attackedUnit.y) {
                this._attackedUnit = null;
            }
        }
        if (this._attackedPosition != null) {
            if (heading.x == this._attackedPosition.x && heading.y == this._attackedPosition.y) {
                this._attackedPosition = null;
            }
        }
        var arrow = this._arrowSprites.pop();
        arrow.destroy();
        this._updatePointDirectionFrame(this._points.length - 1);
    };
    this.destroy = function() {
        this.bMarinesCapturingTheFlag = false;
        this._points = null;
        for (var i = 0; i < this._arrowSprites.length; i++) {
            this._arrowSprites[i].destroy();
        }
        this._arrowSprites = null;
    };
};
VIEW_PathViewer.MAX_PATH_LENGTH = 25;