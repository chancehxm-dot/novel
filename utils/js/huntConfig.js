
var is_auto_close = true;
var is_top_banner = false;
var is_auto_ads = false;
var is_open_more = false;
var is_open_playprogress = true;
var is_afc_loading_page = true;
var gameAdchannel = localStorage.getItem('AdchannelId') ? localStorage.getItem('AdchannelId') : 2371824268
window["AD_CONIFG"] = {
		"type2":"googleNewAfg",
    "type":"",
    "gdDataAdChannel":gameAdchannel,
    "gdAfcClient":"ca-00023i84",
    "gdAfcAdslot":"",
    "adxAfcId":'',
    "adxDefineSlot":'',
    "bannerType":'',
    "gdBannerclient":'',
    "gdBannerSlot":'',
};

var  _html = '<a id="a_more_game" class="a_more_game">  <img class="img_more_game" style="z-index: 120000;top:20%;height:15vw;width:15vw;position:fixed;-webkit-border-radius: 50%;  border-radius: 50%"></a>'
var  _urls = [
    ["HalloweenCandyVsVampireStyle.png",window.location.origin+"/vid/1186/HalloweenCandyVsVampireStyle/uid_12309008/etr_vid_gamebox/index.html"]

];

var _temp_urls = getRandomArrayElements(_urls,5);
var _more_created  = 0;

function getRandomArrayElements(arr, count) {
    var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
}

function create_more_img(){
    $("body").append(_html);
    setTimeout(change_game_icon,1000);
}

function change_game_icon(){
    var _i = _more_created%5;
    _more_created = _more_created + 1;

    $(".a_more_game").attr("href", _temp_urls[_i][1] );
    $(".img_more_game").attr("src","../../../../gameImage/" + _temp_urls[_i][0] );

    setTimeout(change_game_icon,7000);
}

function hidden_more_img(){
	$("#a_more_game").hide();
}

function show_more_img(){
	$("#a_more_game").show();
}

function _add_GdJs(callback) {
    var fn = callback || function() {}
    ;
    if (window["AD_CONIFG"].type2 == "googleNewAfg") {
        is_afc_loading_page = false;
        var script = document.createElement("script");
        script.async = true;
        script.setAttribute("data-ad-client", window["AD_CONIFG"].gdAfcClient);
        script.setAttribute("data-ad-channel", window["AD_CONIFG"].gdDataAdChannel);
        script.setAttribute("data-ad-frequency-hint", "10s");
        // script.setAttribute("data-adbreak-test","on");

        script.onload = function() {
            fn&&fn();
            fn = null;
        };
        script.onerror = function() {};
        script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
        document.head.appendChild(script);
    } else if (window["AD_CONIFG"].type == "googleAfc" || window["AD_CONIFG"].bannerType == "googleAfc") {
        var script = document.createElement("script");
        script.async = true;
        script.onload = function() {fn&&fn();fn = null;};
        script.onerror = function() {};
        script.setAttribute("crossorigin", "anonymous");
        script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" + window["AD_CONIFG"].gdAfcClient;
        document.head.appendChild(script);
    }

    if(window["AD_CONIFG"].type=="AdxAfc"||window["AD_CONIFG"].bannerType=="AdxAfc"){
        var script = document.createElement("script");
        script.async = true;
        script.onload = function () {fn&&fn();fn = null;};
        script.onerror = function () {};
        script.src = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
        document.head.appendChild(script);
    }

}