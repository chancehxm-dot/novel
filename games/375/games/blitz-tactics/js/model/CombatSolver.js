function CombatReport(a, b) {
    this.bSurvivedA = a;
    this.bSurvivedB = b;
};

function CombatSolver() {};
CombatSolver.GetReport = function(unitA, unitB) {

    // MARINES
    if (unitA.type == MODEL_Unit.Player_Marines && unitB.type == MODEL_Unit.Enemy_Guard) {
        return new CombatReport(false, false);
    }
    if (unitA.type == MODEL_Unit.Player_Marines && unitB.type == MODEL_Unit.Enemy_Tank) {
        return new CombatReport(false, true);
    }
    if (unitA.type == MODEL_Unit.Player_Marines && unitB.type == MODEL_Unit.Enemy_AntiAir) {
        return new CombatReport(true, true);
    }
    if (unitA.type == MODEL_Unit.Player_Marines && unitB.type == MODEL_Unit.Enemy_Helicopter) {
        return new CombatReport(false, true);
    }

    // TANK
    if (unitA.type == MODEL_Unit.Player_Tank && unitB.type == MODEL_Unit.Enemy_Tank) {
        return new CombatReport(false, false);
    }
    if (unitA.type == MODEL_Unit.Player_Tank && unitB.type == MODEL_Unit.Enemy_Guard) {
        return new CombatReport(true, false);
    }
    if (unitA.type == MODEL_Unit.Player_Tank && unitB.type == MODEL_Unit.Enemy_Helicopter) {
        return new CombatReport(false, true);
    }
    if (unitA.type == MODEL_Unit.Player_Tank && unitB.type == MODEL_Unit.Enemy_AntiAir) {
        return new CombatReport(true, false);
    }

    // FIGHTER
    if (unitA.type == MODEL_Unit.Player_Fighter && unitB.type == MODEL_Unit.Enemy_Tank) {
        return new CombatReport(true, true);
    }
    if (unitA.type == MODEL_Unit.Player_Fighter && unitB.type == MODEL_Unit.Enemy_Guard) {
        return new CombatReport(true, true);
    }
    if (unitA.type == MODEL_Unit.Player_Fighter && unitB.type == MODEL_Unit.Enemy_Helicopter) {
        return new CombatReport(true, false);
    }
    if (unitA.type == MODEL_Unit.Player_Fighter && unitB.type == MODEL_Unit.Enemy_AntiAir) {
        return new CombatReport(false, true);
    }

    // BOMBER
    if (unitA.type == MODEL_Unit.Player_Bomber && unitB.type == MODEL_Unit.Enemy_AntiAir) {
        return new CombatReport(false, true);
    }
    if (unitA.type == MODEL_Unit.Player_Bomber && unitB.type == MODEL_Unit.Enemy_Tank) {
        return new CombatReport(true, false);
    }
    if (unitA.type == MODEL_Unit.Player_Bomber && unitB.type == MODEL_Unit.Enemy_Guard) {
        return new CombatReport(true, false);
    }
    if (unitA.type == MODEL_Unit.Player_Bomber && unitB.type == MODEL_Unit.Enemy_Helicopter) {
        return new CombatReport(true, true);
    }
};