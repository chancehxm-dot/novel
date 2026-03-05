var CANVAS_WIDTH = 1920;
var CANVAS_HEIGHT = 1920;

var EDGEBOARD_X = 0;
var EDGEBOARD_Y = 0;

var FONT = "walibi0615bold";
var PREFIX_STORAGE = "darts";
var ENABLE_FULLSCREEN;

var FPS = 30;
var DISABLE_SOUND_MOBILE = false;

var STATE_LOADING = 0;
var STATE_MENU = 1;
var STATE_GAME = 2;



var ON_MOUSE_DOWN = 0;
var ON_MOUSE_UP = 1;
var ON_MOUSE_OVER = 2;
var ON_MOUSE_OUT = 3;
var ON_BUT_YES_DOWN = 4;
var ON_BACK_MENU = 5;
var ON_RESTART = 6;
var ON_NEXT = 7;

var CUR_GRID_SCALE = 1;

var NUM_SPRITE_DART = 26;
var DART_WIDTH = 332;
var DART_HEIGHT = 1320;

var MAX_SWIPE_TIME = 250;
var PERFECT_SWIPE_TIME = 100;
var MAX_DART_ANGLE_ROT = 45;
var RADIUS_SPHERE_BOARD = 160;

var NUM_THROW;
var POINTS_DARTBOARD;


var POWERUP_POS = [{
        x: 720,
        y: 228
    }, {
        x: 567,
        y: 387
    }, {
        x: 487,
        y: 660
    }, {
        x: 582,
        y: 950
    }, {
        x: 960,
        y: 1140
    }, {
        x: 1200,
        y: 228
    }, {
        x: 1353,
        y: 387
    }, {
        x: 1433,
        y: 660
    }, {
        x: 1338,
        y: 950
    },
    {
        x: 752,
        y: 422
    }, {
        x: 648,
        y: 635
    }, {
        x: 750,
        y: 908
    }, {
        x: 960,
        y: 977
    }, {
        x: 1168,
        y: 422
    }, {
        x: 1272,
        y: 635
    }, {
        x: 1170,
        y: 908
    }
];

var POWERUP_INFO = new Array();
POWERUP_INFO[0] = {
    regX: 200,
    regY: 200,
    width: 400,
    height: 400,
    logic_radius: 100
};
POWERUP_INFO[1] = {
    regX: 200,
    regY: 200,
    width: 400,
    height: 400,
    logic_radius: 100
};
POWERUP_INFO[2] = {
    regX: 109,
    regY: 96,
    width: 218,
    height: 192,
    logic_radius: 60
};
var MALUS_ID = 2;
var NUM_BONUS_THROW;
var BONUS_EXTRA_POINT;
var MAX_MALUS = 5;
var MALUS_SCORE;
var STROKE_COLORS = ["#0187b0", "#089e01", "#c16400", "#cd0224"];


var BAR_X_WIDTH = 406;
var BAR_Y_HEIGHT = 406;
var CURSOR_X = 41;
var CURSOR_Y = 41;

var SHOT_INDICATOR_X_SPEED;
var SHOT_INDICATOR_Y_SPEED;
var RANGE_WIDTH = 9;
var RANGE_HEIGHT = 4;