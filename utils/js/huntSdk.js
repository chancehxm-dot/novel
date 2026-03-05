var HUTAFG = window.HUTAFG = {};

var HuntSdk = {

    first_read: 1,
    succCb: null,
    failCb: null,
    interstitialOptions: null,
    rewardOptions:null,

    ad_type: 0,
    interstitialCooldown : 0,
    rewardCooldown : 0,

    midAfcShowSuccess:false,
    bannerAfcShowSuccess:false,

    googleSlotMid:null,
    googleSlotBanner:null,

    note_loadings : ["Loading.","Loading..","Loading...","Loading..","Loading..."],

    _adLoaded : 0,
    _orientation : 'portrait',
    _checktime : 0,
    game_frame : document.getElementById('game_frame'),
    gameframediv : document.getElementById('gameframediv'),
    _adlength : 50,
    paddingHeight : 15,
    updateInterval : null,
    showAdFn : null,
    shadow_box_div: null,
    splash_box_div: null,
    isLoadGameEnd:false,

    init:	function() {
        document.title = gGame.name;

        HuntSdk._adlength = 50;

        if (window["AD_CONIFG"].bannerType== ''||window["AD_CONIFG"].gdBannerclient == '' || window["AD_CONIFG"].gdBannerSlot == '') {
            HuntSdk._adlength = 0;
            HuntSdk.paddingHeight = 0;
        }
        $(document).ready(function() {
            $(window).trigger('resize');
            if (is_afc_loading_page == true) {
                setTimeout(HuntSdk.load_game, 1000);
            }
        });
        this.resetGameFrameSize();

        addEventListener('orientationchange', function(event) {
            HuntSdk.orient();
        });

        this.listenWsShowStatus();

    },
    showGame: function() {
        $("#beginView").hide();
        $("#preShadow").hide();
        if (HuntSdk.first_read == 1) {
            this.adaptable_banner();
            this.first_read = 0;
        }
        if(is_open_more){
            if(_more_created ==0){
                create_more_img();
            }else{
                show_more_img();
            }
        }

    },

    load_game: function () {
        HuntSdk.isLoadGameEnd = false;
        this.game_frame.src = "https://snsmi.com/game/"+gGame.url+"/index.html";
        this.game_frame.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });
        if (this.game_frame.attachEvent) {
            this.game_frame.attachEvent("onload", _iframe_loaded);
        } else {
            this.game_frame.onload = HuntSdk._iframe_loaded;
        }
        this.gameframediv.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });
    },
    _iframe_loaded: function () {
        try{
            if(gGame.uid) {
                _clog.sendLog('frame_ready');
            }
        }catch (e) {

        }
    },

    resetGameFrameSize: function () {
        this.game_frame.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });
        this.game_frame.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });
        this.gameframediv.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });
        var _FrameWidth = document.documentElement.clientWidth;
        var _FrameHeight = document.documentElement.clientHeight - HuntSdk._adlength;
        _FrameHeight = _FrameHeight - HuntSdk.paddingHeight;
        if (is_top_banner) {
            this.gameframediv.style.top = HuntSdk._adlength + HuntSdk.paddingHeight + "px";
        } else {
            this.gameframediv.style.bottom = HuntSdk._adlength + HuntSdk.paddingHeight + "px";
        }
        this.game_frame.style.width = _FrameWidth + "px";
        this.game_frame.style.height = _FrameHeight + "px";
        this.gameframediv.style.height = _FrameHeight + "px";

        if (window.orientation == 0 || window.orientation == 180) {
            $('#shadow_box_div').css('padding-top','30%');
        }else{
            $('#shadow_box_div').css('padding-top','0');
        }
    },
    _getWinWidth: function () {
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidt;
    },
    _getWinHeight: function () {
        return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    },

    setSize: function () {
        var _w = HuntSdk._getWinWidth();
        var _h = HuntSdk._getWinHeight();
        this._checktime = this._checktime + 1;
        if (this._checktime > 3) return;
        if (this._orientation == 'landscape') {
            if (_w < _h) {
                setTimeout(HuntSdk.setSize, 200);
            }
        } else {
            if (_w > _h) {
                setTimeout(HuntSdk.setSize, 200);
            }
        }
        HuntSdk.resetGameFrameSize();
    },
    orient: function () {
        this._checktime = 0;
        if (window.orientation == 0 || window.orientation == 180) {
            $("body").attr("class", "portrait");
            this._orientation = 'portrait';
            setTimeout(HuntSdk.resetGameFrameSize, 200);
            return false;
        } else if (window.orientation == 90 || window.orientation == -90) {
            $("body").attr("class", "landscape");
            this._orientation = 'landscape';
            setTimeout(HuntSdk.resetGameFrameSize, 200);
            return false;
        }
    },

    loadstartBT:function () {
        if(is_open_playprogress) {
            var count = 0;
            $("#playnowprogress-inner").css("width", "0%");
            var timer = setInterval(function(e) {
                count +=5;

                if(count<95){
                    HuntSdk.setLoadingProgress(count);
                }else if (count >= 100) {
                    if(HuntSdk.isLoadGameEnd){
                        HuntSdk.setLoadingProgress(100);
                        clearInterval(timer);
                    }

                    HuntSdk.setLoadGameComplete();
                }
                if(!HuntSdk.isLoadGameEnd){
                    $("#playtext").text(HuntSdk.note_loadings[count % 4]);
                }
                /*
                $("#playnowprogress-inner").css("width", count + "%");
                if (count === 100) {
                    $("#playtext").text("PLAY");
                    $("#playnowprogress-inner").css('backgroundColor', '#009a44');
                    HuntSdk.isCanClickPlay = true;
                    HuntSdk._adLoaded = 1;
                    if (is_auto_close) {
                        this.close_begin_ad();
                    }

                    this.interstitialCooldown = 30;
                }else if(count < 100){
                    $("#playtext").text(HuntSdk.note_loadings[count%4]);

                }*/

            }, 600);
        }
    },

    setLoadingProgress:function (progress){

        if(is_open_playprogress) {
            $("#playnowprogress-inner").css("width", progress + "%");
            if (progress === 100) {
                $("#playtext").text("PLAY");
                $("#playnowprogress-inner").css('backgroundColor', '#009a44');
                HuntSdk.isCanClickPlay = true;
                HuntSdk._adLoaded = 1;
                if (is_auto_close) {
                    close_begin_ad();
                }
                HuntSdk.interstitialCooldown = 30;
            } /*else if (progress < 100) {
				$("#playtext").text(HuntSdk.note_loadings[progress % 4]);
			}*/
        }
    },
    setLoadGameComplete:function (){
        HuntSdk.isLoadGameEnd = true;
    },

    adaptable_banner: function () {
        if (window["AD_CONIFG"].gdBannerclient != '' && window["AD_CONIFG"].gdBannerSlot != '') {
            if (is_top_banner) {
                document.getElementById('top-banner').style.top = 0;
                document.getElementById('top-banner').style.paddingBottom = HuntSdk.paddingHeight + "px";
            } else {
                document.getElementById('top-banner').style.bottom = 0;
                document.getElementById('top-banner').style.paddingTop = HuntSdk.paddingHeight + "px";
            }
            document.getElementById('top-banner').style.height = HuntSdk._adlength + "px";
            if (window["AD_CONIFG"].bannerType == "AdxAfc") {
                this.loadWosoBannerAds(document.getElementById('top-banner'));
            } else {
                var startBanner = '<ins class="adsbygoogle" style="display:inline-block;width:100%;height:50px" data-ad-client=' + window["AD_CONIFG"].gdBannerclient + " data-ad-slot=" + window["AD_CONIFG"].gdBannerSlot + '></ins>';
                /*if (_blbanner == 1) {
                    startBanner = '<ins class="adsbygoogle" style="display:inline-block;width:100%;height:100px" data-ad-client=' + window["AD_CONIFG"].gdBannerclient + " data-ad-slot=" + window["AD_CONIFG"].gdBannerSlot + '></ins>';
                }*/
                this.bannerAfcShowSuccess = false;
                $('#top-banner').empty();
                this.loadGoogleAds(document.getElementById('top-banner'), startBanner);
                setTimeout(HuntSdk.listenBannerAfcShowStatus,500);
            }
        } else {
            document.getElementById('top-banner').style.display = "none";
        }
        this.orient();
    },

    listenWsShowStatus:function(){
        if(window["AD_CONIFG"].type == "AdxAfc"){
            window.googletag = window.googletag || {
                cmd: []
            };
            googletag.cmd.push(function() {

                googletag.pubads().addEventListener('slotRenderEnded', function(event) {

                    var slot = event.slot;
                    if (slot === googleSlotMid) {
                        if(event.isEmpty!=false){
                            HuntSdk.midAfcShowSuccess = false;
                        }

                    }else if(slot === googleSlotBanner){
                        if(event.isEmpty!=false){
                            HuntSdk.bannerAfcShowSuccess = false;
                            HuntSdk.first_read = 1;
                            if (googletag != null&&googleSlotBanner!=null) {
                                googletag.destroySlots([googleSlotBanner]);
                            }
                        }
                    }
                });

                googletag.pubads().addEventListener('impressionViewable', function(event) {
                    var slot = event.slot;
                    if (slot === googleSlotMid) {
                        HuntSdk.midAfcShowSuccess = true;
                    }else if (slot === googleSlotBanner) {
                        HuntSdk.bannerAfcShowSuccess = true;
                    }
                });

            });
        }
    },

    listenBannerAfcShowStatus:function(){
        if(window["AD_CONIFG"].bannerType == "googleAfc"){
            var bannerTimer = setInterval(function(){
                obj = $("#top-banner ins");
                if(obj!=null&&obj.attr("data-ad-slot")==window["AD_CONIFG"].gdBannerSlot){
                    var statusMid = obj.attr("data-ad-status");
                    if(statusMid!=undefined){
                        if(statusMid=="filled"){
                            HuntSdk.bannerAfcShowSuccess = true;
                        }else{
                            HuntSdk.bannerAfcShowSuccess = false;
                            HuntSdk.first_read = 1;
                        }

                    }
                    clearInterval(bannerTimer);
                }
            },500);
        }
    },

    listenMidAfcShowStatus:function(){
        if(window["AD_CONIFG"].type == "googleAfc"){
            var midTimer = setInterval(function(){
                var obj = $("#creative ins");
                if(obj!=null&&obj.attr("data-ad-slot")==window["AD_CONIFG"].gdAfcAdslot){
                    var statusMid = obj.attr("data-ad-status");
                    if(statusMid!=undefined){
                        if(statusMid=="filled"){
                            HuntSdk.midAfcShowSuccess = true;
                        }else{
                            HuntSdk.midAfcShowSuccess = false;
                        }
                    }
                    clearInterval(midTimer);
                }
            },500);
        }
    },

    loadGoogleAds:function (obj, text) {
        obj.innerHTML == '';
        if (obj && text != '') {
            obj.innerHTML = text;
            (adsbygoogle = window.adsbygoogle || []).push({});

        }
    },

    loadWosoAFCAds:function (obj) {
        if (obj && window["AD_CONIFG"].wsAfcId != '' && window["AD_CONIFG"].wsDefineSlot != '') {
            obj.innerHTML == '';
            window.googletag = window.googletag || {
                cmd: []
            };

            HuntSdk.midAfcShowSuccess = false;

            googletag.cmd.push(function() {

                if (is_auto_ads) {
                    googleSlotMid =googletag.defineSlot(window["AD_CONIFG"].wsDefineSlot, ['fluid'], window["AD_CONIFG"].wsAfcId);//.addService(googletag.pubads());//setCollapseEmptyDiv(true).
                } else {
                    googleSlotMid =googletag.defineSlot(window["AD_CONIFG"].wsDefineSlot, [250, 250], window["AD_CONIFG"].wsAfcId);//.addService(googletag.pubads());//setCollapseEmptyDiv(true).
                }
                googleSlotMid.addService(googletag.pubads());
                googletag.pubads().collapseEmptyDivs();
                googletag.pubads().enableSingleRequest();
                googletag.enableServices();
            });
            var innerText = "<div id=" + window["AD_CONIFG"].wsAfcId + " style='width: 250px; height: 250px;'>";
            if (is_auto_ads) {
                innerText = "<div id=" + window["AD_CONIFG"].wsAfcId + ">";
            }
            obj.innerHTML = innerText;
            googletag.cmd.push(function() {
                googletag.display(window["AD_CONIFG"].wsAfcId);
            });

        }
    },

    loadWosoBannerAds:function (obj) {
        if (obj) {
            obj.innerHTML == '';
            window.googletag = window.googletag || {
                cmd: []
            };
            googletag.cmd.push(function() {
                googletag.pubads().collapseEmptyDivs();
                googleSlotBanner = googletag.defineSlot(window["AD_CONIFG"].gdBannerSlot, [320, 50], window["AD_CONIFG"].gdBannerclient);//.setCollapseEmptyDiv(true).addService(googletag.pubads());
                googleSlotBanner.addService(googletag.pubads());
                googletag.pubads().enableSingleRequest();
                googletag.enableServices();
            });
            var innerText = "<div id=" + window["AD_CONIFG"].gdBannerclient + " style='width: 320px; height: 50px;'>";
            obj.innerHTML = innerText;
            googletag.cmd.push(function() {
                googletag.display(window["AD_CONIFG"].gdBannerclient);
            });

        }
    },

    loadAfcAd2: function () {
        this._adLoaded = 0;
        $('#beginView').hide();

        this.shadow_box_div = document.getElementById("shadow_box_div");
        if(this.shadow_box_div==null) {
            this.shadow_box_div = document.createElement("shadow_box_div");
            this.shadow_box_div.id = "shadow_box_div";
            this.shadow_box_div.style.cssText = "    background: rgba(52,58,65,.7);\n" +
                "    -webkit-backdrop-filter: blur(15px);\n" +
                "    backdrop-filter: blur(15px);\n" +
                "    height: 100vh;\n" +
                "    width: 100%;\n" +
                "    position: absolute;\n" +
                "    z-index: 100000;";
            document.body.appendChild(this.shadow_box_div);
        }
        $('#shadow_box_div').empty();
        if (window.orientation == 0 || window.orientation == 180) {
            $('#shadow_box_div').css('padding-top','30%');
        }else{
            $('#shadow_box_div').css('padding-top','0');
        }

        var subDiv = document.createElement("subDiv");
        subDiv.id = 'subDiv';
        subDiv.style.cssText =
            //"    height: 100vh;\n" +
            "    width: 100%;\n" +
            "    position: fixed;\n"
        //+
        //"    top: 30%;\n" +
        ;

        $('#shadow_box_div').append(subDiv);

        var ad_position_box_div = document.createElement("div");
        ad_position_box_div.id = 'ad_position_box';
        ad_position_box_div.style.cssText = "    display: -webkit-box;\n" +
            "    display: -ms-flexbox;\n" +
            "    display: flex;\n" +
            "    -webkit-box-align: center;\n" +
            "    -ms-flex-align: center;\n" +
            "    align-items: center;\n" +
            "    -webkit-box-pack: center;\n" +
            "    -ms-flex-pack: center;\n" +
            "    justify-content: center;\n" +
            "    height: 100%;\n" +
            "    width: 100%;";
        $('#subDiv').append(ad_position_box_div);

        var card_div = document.createElement("div");
        card_div.id = 'card';
        card_div.style.cssText = "background-color: #fff;\n" +
            "    border-radius: 8px;\n" +
            "    padding-left: 24px;\n" +
            "    padding-right: 24px;\n" +
            "    padding-bottom: 26px;\n" +
            "    position: relative;";
        $('#ad_position_box').append(card_div);

        var toprow_div = document.createElement("div");
        toprow_div.id = 'toprow';
        toprow_div.style.cssText = "width: 100%;\n" +
            "    font-family: Roboto,arial,sans-serif;\n" +
            "    display: table;\n" +
            "    height: 24px;\n" +
            "    font-size: 18px;\n" +
            "    background-color: #fff;";
        $('#card').append(toprow_div);

        var btn_skip_div = document.createElement("div");
        btn_skip_div.id = 'btn_skip';
        btn_skip_div.style.cssText = '    font-family: Roboto,arial,sans-serif;\n' +
            '    font-size: 18px;\n' +
            '    touch-action: pan-y;\n' +
            '    padding: 0;\n' +
            '    margin: 0;\n' +
            '    box-sizing: border-box;\n' +
            '    word-wrap: break-word;\n' +
            '    opacity: .95;\n' +
            '    float: right;\n' +
            '    display: table;\n' +
            '    -webkit-transition: opacity 1s,background .75s;\n' +
            '    height: 24px;\n' +
            '    padding-top: 29px;\n' +
            '    padding-bottom: 29px;\n' +
            '    background: 0 0;\n' +
            '    color: #fff;';
        $('#toprow').append(btn_skip_div);

        var count_down_container_div = document.createElement("div");
        count_down_container_div.id = 'count_down_container';
        count_down_container_div.style.cssText = '    font-family: \'Roboto\', arial, sans-serif;\n' +
            '    font-size: 18px;\n' +
            '    margin: 0;\n' +
            '    outline: none;\n' +
            '    height: 30px;\n' +
            '    color: #FFF;\n' +
            '    border-radius: 1.8em;\n' +
            '    background: rgba(0,0,0,0.3);\n' +
            '    transition: background 0.5s ease;\n' +
            '    display: table-cell;\n' +
            '    vertical-align: middle;\n' +
            '    padding: 0 0.25em;';
        $('#btn_skip').append(count_down_container_div);

        var count_down_div = document.createElement("div");
        count_down_div.id = 'count_down';
        count_down_div.style.cssText = '    font-family: \'Roboto\', arial, sans-serif;\n' +
            '    font-size: 18px;\n' +
            '    color: #FFF;\n' +
            '    margin: 0;\n' +
            '    outline: none;\n' +
            '    vertical-align: middle;\n' +
            '    padding: 0 0.25em;\n' +
            '    display: table-cell;';

        $('#count_down_container').append(count_down_div);

        var count_down_text_div = document.createElement("div");
        count_down_text_div.id = 'count_down_text';
        count_down_text_div.style.cssText = '    font-family: \'Roboto\', arial, sans-serif;\n' +
            '    color: #FFF;\n' +
            '    margin: 0;\n' +
            '    padding: 0;\n' +
            '    outline: none;\n' +
            '    font-size: 12px;';
        count_down_text_div.innerText = 'Close in 8 seconds';
        $('#count_down').append(count_down_text_div);

        var dismiss_button_element_div = document.createElement("div");
        dismiss_button_element_div.id = 'dismiss_button_element';
        dismiss_button_element_div.style.cssText = '    font-family: \'Roboto\', arial, sans-serif;\n' +
            '    font-size: 18px;\n' +
            '    color: #FFF;\n' +
            '    margin: 0;\n' +
            '    outline: none;\n' +
            '    display: table-cell;\n' +
            '    vertical-align: middle;\n' +
            '    padding: 0 0.25em;';
        $('#btn_skip').append(dismiss_button_element_div);

        $('#dismiss_button_element').append("<div><svg style = \"height: 1.3em;\n" +
            "    width: 1.3em;\n" +
            "    margin-left: -.3em;\n" +
            "    margin-right: -.3em;\n" +
            "    vertical-align: middle;\n" +
            "    padding-bottom: 1px;\" viewBox=\"0 0 48 48\" fill=\"#5F6368\"><path d=\"M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z\"></path> <path d=\"M0 0h48v48H0z\" fill=\"none\"></path></svg></div>");

        $('#dismiss_button_element').hide();
        $('#dismiss_button_element').on('click',function(){
            close_begin_ad();
            $('#shadow_box_div').remove();
            $('#shadow_box_div').empty();
            $('#shadow_box_div').hide();

        });

        $('#toprow').append("<div style='    font-family: Roboto,arial,sans-serif;\n" +
            "    font-size: 18px;\n" +
            "    touch-action: pan-y;\n" +
            "    padding: 0;\n" +
            "    box-sizing: border-box;\n" +
            "    word-wrap: break-word;\n" +
            "    display: table;\n" +
            "    -webkit-transition: opacity 1s,background .75s;\n" +
            "    height: 24px;\n" +
            "    padding-top: 29px;\n" +
            "    padding-bottom: 29px;\n" +
            "    background: 0 0;\n" +
            "    color: #fff;\n" +
            "    margin: auto;'><div class=\"text\" style=\"color: rgb(95, 99, 104);\">Advertisement</div></div>");

        var creative_div = document.createElement("div");
        creative_div.id = 'creative';
        creative_div.style.cssText = "";

        $('#card').append(creative_div);

        HuntSdk.midadisbanner = false;
        if (window["AD_CONIFG"].type == "AdxAfc") {
            if(!is_auto_ads){

                var childAdDiv="<div id='div_afc_adContainer' style='width: 250px;height: 250px;margin: 0 auto;padding-bottom: 10px;padding-top: 10px;overflow: hidden; background: rgb(255, 255, 255); display: block;'></div>";

                $('#creative').append(childAdDiv);

                this.loadWosoAFCAds(document.getElementById('div_afc_adContainer'));
            }else{
                this.loadWosoAFCAds(document.getElementById('creative'));
            }
        } else {
            var startAds = '<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client=' + window["AD_CONIFG"].gdAfcClient + ' data-ad-slot=' + window["AD_CONIFG"].gdAfcAdslot + '></ins>';
            if (is_auto_ads) {
                startAds = '<ins class="adsbygoogle" style="display:block;" data-ad-client=' + window["AD_CONIFG"].gdAfcClient + ' data-ad-slot=' + window["AD_CONIFG"].gdAfcAdslot + ' " data-ad-format="auto" data-full-width-responsive="true"' + '></ins>';
            }
            this.midAfcShowSuccess = false;
            this.loadGoogleAds(document.getElementById('creative'), startAds);
            setTimeout(HuntSdk.listenMidAfcShowStatus,500);
        }
        $('#shadow_box_div').show();
        ad_req();
        hidden_more_img();
        this.loadclosebtn();
    },
    loadclosebtn:function () {
        var count = 8;
        $('#count_down_container').css("font-size",'12px');
        var timer = setInterval(function(e) {
            count -=1;
            if (count === 0) {

                HuntSdk._adLoaded = 1;

                if (is_auto_close && HuntSdk.ad_type == 1) {//HuntSdk.midAfcShowSuccess==false||
                    this.close_begin_ad();
                    $('#shadow_box_div').empty();
                    $('#shadow_box_div').hide();
                    $('#shadow_box_div').remove();
                }

                $('#count_down_container').hide();
                $('#dismiss_button_element').show();

                clearInterval(timer);

            }else {

                $('#count_down_container').text("Close in "+count+" seconds");
            }
        }, 1000);
    },

    loadSplashAd: function () {
        this._adLoaded = 0;
        //document.getElementById('progText').style.visibility = 'hidden';

        HuntSdk.splash_box_div = document.getElementById("beginView");
        if(HuntSdk.splash_box_div==null) {
            HuntSdk.splash_box_div = document.createElement("div");
            HuntSdk.splash_box_div.id = "beginView";
            document.body.appendChild(HuntSdk.splash_box_div);
        }
        $('#beginView').empty();

//'                The game is provided by HuntMobi.<br>\n' +
        $('#beginView').append('        <div id="adpreloaderwrap">\n' +
            '            <div id="game-info">\n' +
            '                Loading wonderful games for you. <br>\n' +
            '                Please be patient.\n' +
            '            </div>\n' +
            '            <button id="playnow" onClick="close_begin_ad();" style="visibility: visible;">\n' +
            '                <span id="playtext" style="z-index:12;position: relative;">Loading..</span>\n' +
            '                <span id="playnowplaynowprogress">\n' +
            '\t\t\t<span id="playnowprogress-inner" style="width: 90%;"></span>\n' +
            '\t\t\t</span>\n' +
            '            </button>\n' +
            '            <div id="pop-ad">\n' +
            '\n' +
            '            </div>\n' +
            '        </div>');

        if(!is_open_playprogress){
            document.getElementById('playnow').style.visibility = 'hidden';
        }else{
            document.getElementById('playnow').style.visibility = 'visible';
            $("#playtext").text("loading.");
            $("#playnowprogress-inner").css("width", "0%");
        }

        $('#beginView').show();
        if (window["AD_CONIFG"].type == "AdxAfc") {
            if(!is_auto_ads){

                var childAdDiv="<div id='div_afc_adContainer' style='width: 320px;height: 250px;margin: 0 auto;padding-bottom: 10px;padding-top: 10px;overflow: hidden; background: rgb(255, 255, 255); display: block;'></div>";

                $('#pop-ad').append(childAdDiv);

                this.loadWosoAFCAds(document.getElementById('div_afc_adContainer'));
            }else{
                this.loadWosoAFCAds(document.getElementById('pop-ad'));
            }
        } else {
            var startAds = '<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client=' + window["AD_CONIFG"].gdAfcClient + ' data-ad-slot=' + window["AD_CONIFG"].gdAfcAdslot + '></ins>';
            if (is_auto_ads) {
                startAds = '<ins class="adsbygoogle" style="display:block;" data-ad-client=' + window["AD_CONIFG"].gdAfcClient + ' data-ad-slot=' + window["AD_CONIFG"].gdAfcAdslot + ' " data-ad-format="auto" data-full-width-responsive="true"' + '></ins>';
            }
            this.midAfcShowSuccess = false;
            this.loadGoogleAds(document.getElementById('pop-ad'), startAds);
            setTimeout(HuntSdk.listenMidAfcShowStatus,500);
        }
        ad_req();
        HuntSdk.loadstartBT();
        hidden_more_img();

    },

    close_begin_ad_newAfg:function () {
        if (this._adLoaded == 0) return;
        HuntSdk.showGame();
        HuntSdk.interstitialCooldown = 30;
        first_cdr_ready();
        $('beginView').hide();
        $('#pop-ad').empty();

        if (window["AD_CONIFG"].type == "AdxAfc") {
            window.googletag = window.googletag || {
                cmd: []
            };
            if (googletag != null&&googleSlotMid!=null) {
                googletag.destroySlots([googleSlotMid]);
            }
        }

        if(HuntSdk.ad_type == 1&&HuntSdk.interstitialOptions && HuntSdk.interstitialOptions.afterShowAd){
            HuntSdk.interstitialOptions.afterShowAd();
            HuntSdk.interstitialOptions.afterShowAd = null;
        }
        if(HuntSdk.ad_type == 2){

            if (HuntSdk.midAfcShowSuccess) {
                HuntSdk.succCb && HuntSdk.succCb();
                HuntSdk.succCb = null;
                if(HuntSdk.rewardOptions!=null){
                    HuntSdk.rewardOptions.rewardComplete && HuntSdk.rewardOptions.rewardComplete();
                    HuntSdk.rewardOptions.rewardComplete = null;
                }
            }else{
                HuntSdk.failCb && HuntSdk.failCb();
                HuntSdk.failCb = null;
            }

            if(HuntSdk.rewardOptions!=null){
                HuntSdk.rewardOptions.afterShowAd && HuntSdk.rewardOptions.afterShowAd();
                HuntSdk.rewardOptions.afterShowAd = null;
            }
        }

    },

    showInterstitial:function (options) {
        HuntSdk.interstitialOptions = options;
        HuntSdk.ad_type = 1;//‘next’
        window.parent.postMessage("triggerAd|", "*")
        if (HuntSdk.interstitialCooldown<0) {

            if (window["AD_CONIFG"].type2 == "googleNewAfg"){
                HuntSdk.showNewAfgInterstitial();
            }else if(window["AD_CONIFG"].type!=""){
                HuntSdk.showAFCInterstitial();
            }else if(HuntSdk.interstitialOptions && HuntSdk.interstitialOptions.afterShowAd){
                HuntSdk.interstitialOptions.afterShowAd();
                HuntSdk.interstitialOptions.afterShowAd = null;
            }

        }else if(HuntSdk.interstitialOptions && HuntSdk.interstitialOptions.afterShowAd){
            HuntSdk.interstitialOptions.afterShowAd();
            HuntSdk.interstitialOptions.afterShowAd = null;
        }

    },

    showNewAfgInterstitial: function(){

        if (window["AD_CONIFG"].type2 != "googleNewAfg"){
            if(HuntSdk.interstitialOptions && HuntSdk.interstitialOptions.afterShowAd){
                HuntSdk.interstitialOptions.afterShowAd();
                HuntSdk.interstitialOptions.afterShowAd = null;
            }
            return;
        }
        //var isNewAfg = false;
        var nType = "next";
        if(HuntSdk.ad_type==0){
            nType = "start";
        }else{
            nType = "next";
        }

        window.adBreak({

            type: nType,
            name: 'game_'+nType,
            beforeAd: () => {
                if(HuntSdk.ad_type == 1 && HuntSdk.interstitialOptions && HuntSdk.interstitialOptions.beforeShowAd){
                    HuntSdk.interstitialOptions.beforeShowAd();
                    HuntSdk.interstitialOptions.beforeShowAd = null;
                }
                ad_req();
                window.blur();
            },
            afterAd: () => {
                HuntSdk.showGame();
                ad_show();
                if(HuntSdk.interstitialOptions && HuntSdk.interstitialOptions.afterShowAd){
                    HuntSdk.interstitialOptions.afterShowAd();
                    HuntSdk.interstitialOptions.afterShowAd = null;
                }
                this.interstitialCooldown = 30;
                window.focus();
            },
            adBreakDone: (placementInfo) => {
                if(placementInfo.breakStatus!="viewed" && window["AD_CONIFG"].type!=""){
                    HuntSdk.showAFCInterstitial();
                }else{
                    if(HuntSdk.interstitialOptions && HuntSdk.interstitialOptions.afterShowAd){
                        HuntSdk.interstitialOptions.afterShowAd();
                        HuntSdk.interstitialOptions.afterShowAd = null;
                    }
                }
            }

        });

    },
    showAFCInterstitial: function() {
        if(HuntSdk.ad_type == 1 && HuntSdk.interstitialOptions && HuntSdk.interstitialOptions.beforeShowAd){
            HuntSdk.interstitialOptions.beforeShowAd();
            HuntSdk.interstitialOptions.beforeShowAd = null;
        }
        if(window["AD_CONIFG"].type==""){
            if(HuntSdk.interstitialOptions && HuntSdk.interstitialOptions.afterShowAd){
                HuntSdk.interstitialOptions.afterShowAd();
                HuntSdk.interstitialOptions.afterShowAd = null;
            }
            HuntSdk.showGame();
            return;
        }

        HuntSdk.loadAfcAd2();
    },

    showReward:function(options) {
        HuntSdk.ad_type = 2;
        HuntSdk.rewardOptions = options;
        window.parent.postMessage("triggerAd|", "*")

        if(window["AD_CONIFG"].type2=="googleNewAfg"){
            HuntSdk.showNewAfgReward();
        }else if(window["AD_CONIFG"].type!=""){
            HuntSdk.showAfcReward()
        }
    },
    checkNewAfgReward() {
        if (HuntSdk.showAdFn)
            return;
        window.adBreak({
            type: "reward",
            name: "reward",
            beforeAd: HuntSdk.onRewardBeforeBreak.bind(this),
            afterAd: HuntSdk.onRewardAfterBreak.bind(this),
            beforeReward: HuntSdk.onBeforeReward.bind(this),
            adDismissed: HuntSdk.onRewardDismissed.bind(this),
            adViewed: HuntSdk.onRewardComplete.bind(this),
            adBreakDone: (placementInfo) => {
                if(placementInfo.breakStatus!="viewed"&&placementInfo.breakStatus!="dismissed"){
                    //HuntSdk.showAfcReward();
                }
            }
        });
    },
    onBeforeReward(showAdFn) {
        //HuntSdk.showAdFn = showAdFn;
        showAdFn();
    },
    onRewardBeforeBreak() {
        if(HuntSdk.rewardOptions) {
            HuntSdk.rewardOptions.beforeShowAd && HuntSdk.rewardOptions.beforeShowAd();
            HuntSdk.rewardOptions.beforeShowAd = null;
        }
        ad_req();
    },
    onRewardAfterBreak() {
        window.focus();
        if(HuntSdk.rewardOptions) {
            HuntSdk.rewardOptions.afterShowAd && HuntSdk.rewardOptions.afterShowAd();
            HuntSdk.rewardOptions.afterShowAd = null;
        }
        HuntSdk.showAdFn = null;
        HuntSdk.showGame();

    },
    onRewardDismissed() {
        if(HuntSdk.rewardOptions) {
            HuntSdk.rewardOptions.rewardDismissed && HuntSdk.rewardOptions.rewardDismissed();
            HuntSdk.rewardOptions.rewardDismissed = null;
        }
        if(HuntSdk.failCb!=null){
            HuntSdk.failCb();
            HuntSdk.failCb = null;
        }
    },
    onRewardComplete() {
        if(HuntSdk.rewardOptions) {
            HuntSdk.rewardOptions.rewardComplete && HuntSdk.rewardOptions.rewardComplete();
            HuntSdk.rewardOptions.rewardComplete = null;
        }
        ad_show();
        if(HuntSdk.succCb!=null){
            HuntSdk.succCb();
            HuntSdk.succCb = null;
        }
    },
    onUpdateAds(){
        if (HuntSdk.interstitialCooldown >= 0) {
            HuntSdk.interstitialCooldown--;
            if (HuntSdk.first_read == 1 && HuntSdk.interstitialCooldown%5==0) {
                HuntSdk.adaptable_banner();
                HuntSdk.first_read = 0;
            }

        }
        if(HuntSdk.rewardCooldown >=0){
            HuntSdk.rewardCooldown--;
        }
        //HuntSdk.checkNewAfgReward();
    },
    canShowReward() {
        if (HuntSdk.showAdFn||HuntSdk.rewardCooldown<0) {
            return true
        } else {
            return false
        }
    },

    showNewAfgReward:function() {

        if(window["AD_CONIFG"].type2!="googleNewAfg"||!this.canShowReward()){

            if(HuntSdk.rewardOptions) {
                HuntSdk.rewardOptions.beforeShowAd && HuntSdk.rewardOptions.beforeShowAd();
                HuntSdk.rewardOptions.beforeShowAd = null;
            }

            if(window["AD_CONIFG"].type != ""){

                HuntSdk.showAfcReward();
                window.blur();
            }else {

                if (HuntSdk.failCb != null) {
                    HuntSdk.failCb();
                    HuntSdk.failCb = null;
                }
                if(HuntSdk.rewardOptions) {
                    HuntSdk.rewardOptions.rewardDismissed && HuntSdk.rewardOptions.rewardDismissed();
                    HuntSdk.rewardOptions.rewardDismissed = null;
                    HuntSdk.rewardOptions.afterShowAd && HuntSdk.rewardOptions.afterShowAd();
                    HuntSdk.rewardOptions.afterShowAd = null;
                }
                HuntSdk.showGame();
            }
            return;
        }
        /*
        HuntSdk.showAdFn && HuntSdk.showAdFn();
        HuntSdk.showAdFn = null;
         */

        window.blur();

        window.adBreak({
            type: "reward",
            name: 'game_reward',
            beforeAd: HuntSdk.onRewardBeforeBreak.bind(this),
            afterAd: HuntSdk.onRewardAfterBreak.bind(this),
            beforeReward: HuntSdk.onBeforeReward.bind(this),
            adDismissed:HuntSdk.onRewardDismissed.bind(this),
            adViewed: HuntSdk.onRewardComplete.bind(this),
            adBreakDone: (placementInfo) => {
                if(placementInfo.breakStatus!="viewed"&&placementInfo.breakStatus!="dismissed"){
                    //HuntSdk.showAfcReward();
                }
            }
        });

    },

    showAfcReward:function() {
        if(HuntSdk.rewardOptions!=null){
            HuntSdk.rewardOptions.beforeShowAd && HuntSdk.rewardOptions.beforeShowAd();
            HuntSdk.rewardOptions.beforeShowAd = null;
        }
        if(window["AD_CONIFG"].type==""){
            if(HuntSdk.rewardOptions){
                HuntSdk.rewardOptions.rewardDismissed && HuntSdk.rewardOptions.rewardDismissed();
                HuntSdk.rewardOptions.rewardDismissed = null;
                HuntSdk.rewardOptions.afterShowAd && HuntSdk.rewardOptions.afterShowAd();
                HuntSdk.rewardOptions.afterShowAd = null;
            }

            if(HuntSdk.failCb!=null){
                HuntSdk.failCb();
                HuntSdk.failCb = null;
            }
            HuntSdk.showGame();
            return;
        }

        HuntSdk.loadAfcAd2();

    },
    gotoStart: function() {
        if (is_afc_loading_page == false) {
            HuntSdk.load_game();
            //setTimeout(createHip, 2000);
        }
    },
    showPreroll: function() {
        HuntSdk.ad_type = 0;
        $("#adsContainer").hide();
        $("#mainContainer").hide();
        $("#beginView").hide();
        window.adBreak({
            type: 'preroll',
            name: 'startGame',
            adBreakDone: (placementInfo)=>{
                HuntSdk.gotoStart();
                HuntSdk.showGame();
            }
        });
    },

    showHutSplash: function() {
        HuntSdk.ad_type = 0;//'start';
        HuntSdk.interstitialOptions = null;

        if(window["AD_CONIFG"].type!=""){
            HuntSdk.loadSplashAd();
        }
    },

    playHutAd:function () {
        var nowTime = new Date();
        HuntSdk.ad_type = 1;//‘next’
        HuntSdk.showInterstitial(null)
    },

    playHutRewardedAd: function () {
        HuntSdk.ad_type = 2;//'reward'
        return new Promise(function(resolve, reject) {
            HuntSdk.succCb = resolve;
            HuntSdk.failCb = reject;
            HuntSdk.showReward(null);
        });
    }

};

function close_begin_ad() {
    HuntSdk.close_begin_ad_newAfg();
}

var _start_Game = 0;
function first_cdr_ready(){

}
function ad_req(){

}

function ad_show(){

}


function queryURLparamsRegEs6(url) {
    let obj = {};
    let reg = /([^?=&]+)=([^?=&]+)/g;
    url.replace(reg, (...arg) => {
        obj[arg[1]] = arg[2];
    });
    return obj;
}

function showNewAfgShadow() {
    if(window["AD_CONIFG"].type2=="") {
        return;
    }
    //this.preShadow_div = document.getElementById('preShadow');
    //if(this.preShadow_div==null) {
    var preShadow_div = document.createElement("div");
    preShadow_div.id = 'preShadow';
    document.body.appendChild(preShadow_div);

    $("#preShadow").addClass('preShadow');

    //}
    var preloadpacman_div = document.createElement("div");
    preloadpacman_div.id = 'preloadpacman';

    $('#preShadow').append(preloadpacman_div);

    $("#preloadpacman").addClass('preloadpacman');

    var preShadow_child1_div = document.createElement("div");

    $('#preloadpacman').append(preShadow_child1_div);

    var preShadow_child2_div = document.createElement("div");

    $('#preloadpacman').append(preShadow_child2_div);

    var preShadow_child3_div = document.createElement("div");

    $('#preloadpacman').append(preShadow_child3_div);

    var preShadow_child4_div = document.createElement("div");

    $('#preloadpacman').append(preShadow_child4_div);

    var preShadow_child5_div = document.createElement("div");

    $('#preloadpacman').append(preShadow_child5_div);

}

HUTAFG.playAfg = HuntSdk.playHutAd;
HUTAFG.playRewardedAfg = HuntSdk.playHutRewardedAd;
HUTAFG.showInterstitial = HuntSdk.showInterstitial;
HUTAFG.showReward = HuntSdk.showReward;
HUTAFG.setLoadGameComplete = HuntSdk.setLoadGameComplete;

HuntSdk.init();

showNewAfgShadow();

// _add_GdJs(function() {

//     if(window["AD_CONIFG"].type2=="googleNewAfg") {
//         window.adsbygoogle = window.adsbygoogle || [];
//         window.adBreak = window.adConfig = function (o) {
//             adsbygoogle.push(o);
//         };
//         window.adConfig({
//             preloadAdBreaks: 'on',
//             sound: 'off',
//         });

//         $("#preShadow").show();
//         HuntSdk.showPreroll();

//     }

//     if (is_afc_loading_page) {
//         HuntSdk.showHutSplash();
//     }

//     HuntSdk.updateInterval = setInterval(HuntSdk.onUpdateAds.bind(this),1000);
// });


