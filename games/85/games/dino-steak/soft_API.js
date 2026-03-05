function soft_start() {
    SG_Hooks.start();
}

function soft_set_pause_handler() {
    //SG_Hooks.setPauseHandler( soft_pause ); // Provide a function f, that handles pausing the game.
    //SG_Hooks.setUnpauseHandler( soft_unpause ); // Provide a function f, that handles resuming the game.
}

function soft_pause() {

}

function soft_unpause() {

}

function soft_levelup(level, score) {
    SG_Hooks.levelUp(level, score);
}

function soft_gameover(level, score) {
    SG_Hooks.gameOver(level, score);
}

function soft_get_language() {
    var lang = SG_Hooks.getLanguage(['en', 'es', 'ru', 'de', 'tk', 'pt', 'fr', 'it', 'th']);
    return lang;
}

function soft_openmore() {
    var win = window.open("http://m.softgames.de", "_blank");
    win.focus();
}

function soft_resize(room_width, room_height) {
    var gameobj = document.getElementById("canvas");
    var ratio = (room_height / room_width);
    var checker = null;
    if (typeof(window.innerWidth) == 'number') {
        browser_width = window.innerWidth;
        browser_height = window.innerHeight;
    } else if (document.documentElement && document.documentElement.clientWidth) {
        browser_width = document.documentElement.clientWidth;
        browser_height = document.documentElement.clientHeight;
    } else if (document.body && document.body.clientWidth) {
        browser_width = document.body.clientWidth;
        browser_height = document.body.clientHeight;
    }
    var multi = (browser_height / room_height);
    var new_width = (room_width * multi);
    var new_height = browser_height;
    if (new_width > browser_width) {
        multi = (browser_width / room_width);
        new_width = (room_width * multi);
        new_height = (room_height * multi);
    }
    var newratio = (browser_height / browser_width);
    if (newratio > 1) {
        checker = 1
    } else {
        checker = 0
    }
    return checker;
}

function soft_ajusting() {
    SG_Hooks.setOrientationHandler(onGameResize);
    SG_Hooks.setResizeHandler(onGameResize);
}

function openURL(url) {
    var _a = document.createElement("a");
    _a.href = url;
    _a.target = "_blank";
    var _div = document.getElementById("gm4html5_div_id");
    document.body.insertBefore(_a, _div);
    _a.click();
}