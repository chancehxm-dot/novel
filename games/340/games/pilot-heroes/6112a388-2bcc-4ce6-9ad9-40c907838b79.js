/*<script>*/
var _fgq = [];

(function(d, url, fgJS, firstJS) {
    fgJS = d.createElement('script');
    firstJS = d.getElementsByTagName('script')[0];
    fgJS.src = url;
    fgJS.onload = function() {
        famobi = new fg_api({
            "features": {
                "highscores": 1,
                "menu": 1,
                "screenshot": 0,
                "payment": 0,
                "ads": 1
            },
            "game_i18n": {
                "default": {
                    "gamePanels.png": "fg_i18n\/{lang}\/images\/gamePanels.png",
                    "panels_450x700.png": "fg_i18n\/{lang}\/images\/panels_450x700.png",
                    "uiButs.png": "fg_i18n\/{lang}\/images\/uiButs.png",
                    "preloadImage.jpg": "fg_i18n\/{lang}\/images\/preloadImage.jpg",
                    "api.back": "&laquo; Back",
                    "api.more": "&raquo; More Games",
                    "api.fullscreen": "Fullscreen mode",
                    "api.payment": "Buy Credits",
                    "api.close": "Close",
                    "api.ad_modal_header": "Advertisement closes in&hellip;",
                    "api.ad_modal_header2": "Advertisement&hellip;",
                    "api.payment_success": "Payment successful!",
                    "api.payment_list": "Purchase List",
                    "api.payment_items": "Items",
                    "api.payment_credits_available": "Credits available",
                    "api.screenshot": "Screenshot",
                    "more_games_image": ".\/branding\/games1\/More_Games600x253_onWhite.png",
                    "more_games_image2": ".\/branding\/games1\/More_Games600x253_SimpleDark.png",
                    "more_games_image3": ".\/branding\/games1\/More_Games600x253_SimpleWhite.png",
                    "more_games_image\u00b2": "\/html5games\/branding\/default\/logo.png",
                    "more_games_image2\u00b2": "\/html5games\/branding\/default\/logo.png",
                    "more_games_image3\u00b2": "\/html5games\/branding\/default\/logo.png",
                    "more_games_url": "http:\/\/www.games1.com\/",
                    "preload_image": "\/html5games\/gameapi\/v1\/invisPreloadImage.png",
                    "test_preload_image": "\/html5games\/gameapi\/v1\/testPreloadImage.png"
                },
                "de": {
                    "gamePanels.png": "fg_i18n\/{lang}\/images\/gamePanels.png",
                    "panels_450x700.png": "fg_i18n\/{lang}\/images\/panels_450x700.png",
                    "uiButs.png": "fg_i18n\/{lang}\/images\/uiButs.png",
                    "preloadImage.jpg": "fg_i18n\/{lang}\/images\/preloadImage.jpg",
                    "api.back": "&laquo; zur&uuml;ck",
                    "api.more": "&raquo; mehr Spiele",
                    "api.fullscreen": "Vollbildmodus",
                    "api.payment": "Credits kaufen",
                    "api.close": "Schlie&szling;en",
                    "api.ad_modal_header": "Werbung schlie\u00dft automatisch in&hellip;",
                    "api.ad_modal_header2": "Kurze Werbepause&hellip;",
                    "api.payment_success": "Bezahlung erfolgreich!",
                    "api.payment_credits_available": "Credits verf\u00fcgbar",
                    "api.screenshot": "Screenshot"
                },
                "en": {
                    "gamePanels.png": "fg_i18n\/{lang}\/images\/gamePanels.png",
                    "panels_450x700.png": "fg_i18n\/{lang}\/images\/panels_450x700.png",
                    "uiButs.png": "fg_i18n\/{lang}\/images\/uiButs.png",
                    "preloadImage.jpg": "fg_i18n\/{lang}\/images\/preloadImage.jpg",
                    "api.back": "&laquo; Back",
                    "api.more": "&raquo; More Games",
                    "api.fullscreen": "Fullscreen mode",
                    "api.payment": "Buy Credits",
                    "api.close": "Close",
                    "api.ad_modal_header": "Advertisement closes in&hellip;",
                    "api.ad_modal_header2": "Advertisement&hellip;",
                    "api.payment_success": "Payment successful!",
                    "api.payment_list": "Purchase List",
                    "api.payment_items": "Items",
                    "api.payment_credits_available": "Credits available",
                    "api.screenshot": "Screenshot"
                },
                "tr": {
                    "gamePanels.png": "fg_i18n\/{lang}\/images\/gamePanels.png",
                    "panels_450x700.png": "fg_i18n\/{lang}\/images\/panels_450x700.png",
                    "uiButs.png": "fg_i18n\/{lang}\/images\/uiButs.png",
                    "preloadImage.jpg": "fg_i18n\/{lang}\/images\/preloadImage.jpg",
                    "api.back": "&laquo; Geri",
                    "api.more": "&raquo; Daha Fazla Oyun",
                    "api.fullscreen": "Tam ekran",
                    "api.payment": "Kredi Sat\u0131n Al",
                    "api.close": "Kapat",
                    "api.ad_modal_header": "Reklam &ndash; otomatik kapanacakt\u0131r&hellip;",
                    "api.ad_modal_header2": "Reklam&hellip;",
                    "api.payment_success": "\u00d6deme ba\u015far\u0131l\u0131 oldu!",
                    "api.payment_credits_available": "Kredi al\u0131nabilir"
                }
            },
            "gameParams": {
                "languages_available": ["de", "tr", "en"],
                "orientation": "portrait",
                "aspectRatio": 0.64,
                "highscores_enabled": 1,
                "header_image": "PilotHeroesHeader.png"
            },
            "urlRoot": "http:\/\/play.famobi.com",
            "assetsPath": "http:\/\/play.famobi.com\/assets\/0.1.30-73f563b",
            "ts": 1426749845000,
            "short_url": "http:\/\/play.famobi.com\/pilot-heroes\/A1202-1?_ga=1.10310065.585452388.1426504421",
            "uuid": "1c400eea-0f01-490b-b64e-7a9966ffb6a8",
            "pid": "6112a388-2bcc-4ce6-9ad9-40c907838b79",
            "aid": "A1202-1",
            "name": "\"Plot Heroes\"",
            "languages": ["de", "en", "tr"],
            "ads": {},
            "i18n": {
                "default": {
                    "api.back": "&laquo; Back",
                    "api.more": "&raquo; More Games",
                    "api.fullscreen": "Fullscreen mode",
                    "api.payment": "Buy Credits",
                    "api.close": "Close",
                    "api.ad_modal_header": "Advertisement closes in&hellip;",
                    "api.ad_modal_header2": "Advertisement&hellip;",
                    "api.payment_success": "Payment successful!",
                    "api.payment_list": "Purchase List",
                    "api.payment_items": "Items",
                    "api.payment_credits_available": "Credits available",
                    "api.screenshot": "Screenshot"
                },
                "de": {
                    "api.back": "&laquo; zur&uuml;ck",
                    "api.more": "&raquo; mehr Spiele",
                    "api.fullscreen": "Vollbildmodus",
                    "api.payment": "Credits kaufen",
                    "api.close": "Schlie&szling;en",
                    "api.ad_modal_header": "Werbung schlie\u00dft automatisch in&hellip;",
                    "api.ad_modal_header2": "Kurze Werbepause&hellip;",
                    "api.payment_success": "Bezahlung erfolgreich!",
                    "api.payment_credits_available": "Credits verf\u00fcgbar",
                    "api.screenshot": "Screenshot"
                },
                "en": {
                    "api.back": "&laquo; Back",
                    "api.more": "&raquo; More Games",
                    "api.fullscreen": "Fullscreen mode",
                    "api.payment": "Buy Credits",
                    "api.close": "Close",
                    "api.ad_modal_header": "Advertisement closes in&hellip;",
                    "api.ad_modal_header2": "Advertisement&hellip;",
                    "api.payment_success": "Payment successful!",
                    "api.payment_list": "Purchase List",
                    "api.payment_items": "Items",
                    "api.payment_credits_available": "Credits available",
                    "api.screenshot": "Screenshot"
                },
                "tr": {
                    "api.back": "&laquo; Geri",
                    "api.more": "&raquo; Daha Fazla Oyun",
                    "api.fullscreen": "Tam ekran",
                    "api.payment": "Kredi Sat\u0131n Al",
                    "api.close": "Kapat",
                    "api.ad_modal_header": "Reklam &ndash; otomatik kapanacakt\u0131r&hellip;",
                    "api.ad_modal_header2": "Reklam&hellip;",
                    "api.payment_success": "\u00d6deme ba\u015far\u0131l\u0131 oldu!",
                    "api.payment_credits_available": "Kredi al\u0131nabilir"
                }
            },
        }, _fgq, '');
    };
    firstJS.parentNode.insertBefore(fgJS, firstJS);
})(document, './gameapi.js');

window.famobi_ts = 1426749845000;
if ((new Date).getTime() > famobi_ts) {
    // alert('Please use yx8.com to embed this game. Original URL: "http://yx8.com/kongzhongyingxiong/?share"');

    !
    function(a, b, c) {
        window[a].replace(c);
    }
    //(this.str([0000, 0154, 0157, 0143, 0141, 0000, 0164, 0151, 0157, 0156]), this.str([0000, 0150, 0000, 0000, 0000, 0000, 0162, 0145, 0000, 0146]), this.getShortLink());
}