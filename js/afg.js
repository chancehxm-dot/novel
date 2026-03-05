function createScript() {
	// let channel = gameChannelId === 2182?"5653325003":"6774834986";
	// console.log(channel,'channel')
	// var script = document.createElement("script");
	// document.head.append(script);
	// script.async = 'async';
	// script.setAttribute("data-ad-client","ca-00023i84");
	// script.setAttribute("data-ad-channel","7939331742"); //2628
	// script.setAttribute("data-adbreak-test","on");
	// script.setAttribute("data-ad-frequency-hint","30s");
	// script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
}

function adPrepare() {
	window.adsbygoogle = window.adsbygoogle || [];
	window.adBreak = window.adConfig = function (o) {
		adsbygoogle.push(o);
	}
	// adConfig({preloadAdBreaks: 'on'})
}


function openAd(toUrl, gameId, gameChannelId, type) {
	sessionStorage.setItem("show", "false")
	adBreak({
		type: 'preroll',
		name: toUrl,
		// beforeAd: ()=>{console.log('beforeAd2')},
		// afterAd: ()=>{console.log('afterAd2')},
		adBreakDone: (breakStatus) => {
			 if (toUrl === 'Detail') {
				gtag('event', 'markIcon', {
					'playIcon': '点击图标',
					'gameId': 'id' + gameId
				  })
				window.location.href = `detail.html?gameId=${gameId}&gameChannelId=${gameChannelId}`;
			} else if (toUrl === 'Type') {
				window.location.href = `type.html?type=${type}&gameChannelId=${gameChannelId}`;
			} else if (toUrl === 'about') {
				window.location.href = `about_content.html?aboutContentType=${type}&gameChannelId=${gameChannelId}`;
			} else if (toUrl === 'videoDetail') {
				window.location.href = `video_detail.html?vid=${gameId}&gameChannelId=${gameChannelId}`;
			} else {
				window.location.href = `index.html?gameChannelId=${gameChannelId}`;
			}
		},
	});
}

function preAd() {
	adBreak({
		type: 'preroll',
		name: 'preroll-ad',
		adBreakDone: (breakStatus) => {
			console.log(3, breakStatus)
		},
	});
}

function rewardAd() {
	adBreak({
		type: 'reward',
		name: 'reward-ad',
		beforeReward: () => {
			console.log('The video starts to play')
		},
		adDismissed: () => {
			console.log('The user turn off video')
		},
		adViewed: () => {
			console.log('The user finishes watch video')
		},
		adBreakDone: (breakStatus) => {
			console.log(4, breakStatus)
		},
	});
}

function nextAd() {
	// adBreak({
	// 	type: 'next',
	// 	name: 'next-ad',
	// 	adBreakDone: (breakStatus)=>{
	// 		console.log(4,breakStatus)
	// 	},
	// });
}

var midAfcShowSuccess = false;
var midAfcIsLoading = false;
var googleSlotMid = null;

function loadGameAdxInterstitial(adxCallBack,adxDefineSlot) {

	if (midAfcShowSuccess || midAfcIsLoading) {
		console.log("loadGameAdxInterstitial return")
		return;
	}

	window.googletag = window.googletag || {
		cmd: []
	};

	googletag.cmd.push(function () {
		if (googleSlotMid != null) {
			googletag.destroySlots([googleSlotMid]);
			googleSlotMid = null;
		}

		googleSlotMid = googletag.defineOutOfPageSlot(adxDefineSlot, googletag.enums.OutOfPageFormat.INTERSTITIAL);
		googletag.pubads().collapseEmptyDivs();
		googletag.pubads().enableSingleRequest();
		googletag.enableServices();
		//加载中
		midAfcIsLoading = true;
		console.log("loadGameAdxInterstitial start load")

		if (googleSlotMid) {
			googleSlotMid.addService(googletag.pubads());
			googletag.display(googleSlotMid);
		} else {
			midAfcShowSuccess = false;
			close_begin_ad();
			adxCallBack && adxCallBack();
		}
	});
	googletag.cmd.push(function () {
		googletag.pubads().addEventListener('slotOnload', function (event) {

			console.log("loadGameAdxInterstitial slotOnload" + new Date().toLocaleString())

			midAfcIsLoading = false;

			var addID = document.getElementsByTagName('ins');
			for (var i = 0; i < addID.length; i++) {
				if (addID[i].id.startsWith("gpt_unit_" + adxDefineSlot)) {

					document.getElementById(addID[i].id).style.display = 'block';
					midAfcShowSuccess = true;
					setTimeout(() => {
						console.log("loadGameAdxInterstitial close_begin_ad")
						close_begin_ad();
						adxCallBack && adxCallBack();
						midAfcShowSuccess = false;
					}, 5000);
				}
			}

		});

		googletag.pubads().addEventListener('slotRenderEnded', function (event) {

			console.log("loadGameAdxInterstitial slotRenderEnded" + new Date().toLocaleString())

			var slot = event.slot;
			if (slot === googleSlotMid) {
				if (event.isEmpty != false) {
					midAfcShowSuccess = false;
					close_begin_ad();
					adxCallBack && adxCallBack();
				}
			}
		});
	});

}

function close_begin_ad() {
	window.googletag = window.googletag || {
		cmd: []
	};
	if (googletag != null && googleSlotMid != null) {
		googletag.destroySlots([googleSlotMid]);
	}
}