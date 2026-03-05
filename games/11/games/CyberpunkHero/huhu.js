window.HUHU_success = null;
window.HUHU_failure = null;
window.HUHU_preload = null;
var interval = 30;
var huhu_s = Date.parse(new Date()) / 1000;
var adSdkConfig = {
    el: document.querySelector("#ads"),
    client: '',
    is_test: false
}
// var adInstance = new adSdk(adSdkConfig);
var kaip_num = 0;
window.HUHU_showLoadAd = (success) => {
    console.log("HUHU_showLoadAd:");
    // kaip_num++;
    // if (adInstance.adSdk_isReady) {
    //     adInstance.interstitialAd({
    //         beforeAd() {
    //             console.log('The ad starts playing, and the game should pause.');
    //         },
    //         afterAd() {
    //             success && success();
    //         },
    //         error(err) {
    //             console.log(err);
    //         }
    //     });
    // } else if (kaip_num < 4) {
    //     setTimeout(() => {
    //         HUHU_showLoadAd(success);
    //     }, 1500)
    // }
}
// HUHU_showLoadAd();
window.HUHU_showInterstitialAd = (preload, success, failure) => {
    console.log("HUHU_showInterstitialAd:");
    // var e = Date.parse(new Date()) / 1000;
    // var i = e - huhu_s;
    // console.log("interval time = " + i);
    // if (i >= interval) {
    //     huhu_s = e;
    //     console.log("------------ad1----------------");
    //     if (adInstance.adSdk_isReady) {
    //         adInstance.interstitialAd({
    //             beforeAd() {
    //                 preload && preload();
    //             },
    //             afterAd() {
    //                 success && success();
    //             },
    //             error(err) {
    //                 console.log(err);
    //                 failure && failure();
    //             }
    //         });
    //     } else {
    //         failure && failure();
    //     }
    // }
};
window.HUHU_showRewardedVideoAd = (success, failure) => {
    console.log("HUHU_showRewardedVideoAd:");
    loadGoogleAd(1, success, failure);
};

function promptTxT(msg, duration) {
    if (!this.prompt_) {
        this.prompt_ = document.createElement('div');
        this.prompt_.style.cssText = "font-family:siyuan;max-width:80%;min-width:320px;padding:10px 10px 10px 10px;min-height:40px;color: rgb(255, 255, 255);line-height: 20px;text-align:center;border-radius: 4px;position: fixed;top: 40%;left: 50%;transform: translate(-50%, -50%);z-index: 999999;background: rgba(0, 0, 0,.7);font-size: 16px;";
        document.body.appendChild(this.prompt_);
    }
    this.prompt_.innerHTML = msg;
    duration = isNaN(duration) ? 2000 : duration;
    this.prompt_.style.display = "inline";
    this.prompt_.style.opacity = '1';
    setTimeout(function () {
        var d = 0.5;
        this.prompt_.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';
        this.prompt_.style.opacity = '0';
        this.prompt_.style.display = "none";
    }.bind(this), duration);
}