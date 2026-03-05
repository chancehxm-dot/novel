

// import $ from "./jq.js"

const ALL_GAMES_DATA = __gameList;


function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

function generateLocalGameData(allGames, pageSizes) {
    const shuffled = shuffleArray([...allGames]);
    const result = {};
    let pointer = 0;
    const sortedPages = Object.keys(pageSizes).map(Number).sort((a, b) => a - b);
    for (const page of sortedPages) {
        const size = pageSizes[page];
        // 如果没有数据，重新获取
        if (pointer >= shuffled.length) {
            shuffled.push(...shuffleArray([...allGames]));
        }
        result[page] = shuffled.slice(pointer, pointer + size);
        pointer += size;
    }
    return result;
}


const pageSizes = {
    1: 6,
    2: 10,
    3: 10,
    4: 5,
    5: 5,
    6: 6,
    7: 6,
    8: 6
};

window.LOCAL_GAME_DATA1 = generateLocalGameData(ALL_GAMES_DATA, pageSizes);
// console.log(window.LOCAL_GAME_DATA1);
// var e = "https://line.largogame.com/api/";
var e = "https://line.largogame.com/api/";
const CACHE_EXPIRATION_TIME = 7 * 24 * 60 * 60 * 1000; // 一周
window.location.href.indexOf("https") >= 0 && (e = e.replace("http://newgame.holyfinger.com:3003", "https://newgame.holyfinger.com"))
var currPage = utils.getLocalData("record_page");
var gameList = utils.getLocalData("minigame_data")
var loading = true
var valParams = ""
var currIdx = 0
var isExpanded = false;
let numbers = Array.from({ length: 10 }, (_, i) => i + 1);
numbers.sort(() => Math.random() - 0.5);
let uniqueNumbers = numbers.slice(0, 10);
if (!currPage) {
    currPage = 1
}
$(document).ready(function () {
    var type_arr = ["Puzzle", "Sports", "Arcade", "Bubble", "Classics", "Girls", "Racing", "Action", "Casual", "Adventure", "Shoot", "Combat"]
    $(".game-type").find("a").each(function (i, dd) {
        $(this).attr("href", "./type.html?type=" + type_arr[i])
    })

    $(".ipt-search").change(function (e) {
        valParams = e.target.value;
    })
    $(".btn-search").click(function () {
        window.location.href = "./search.html?searchTxt=" + valParams
    })
    function fetchLocalGameData(page = 1, key) {
        const data1 = window.LOCAL_GAME_DATA1?.[page];
        if (data1) {
            if (page === 1) {
                updateSwiper(data1);
            } else if (page === 2) {
                updateTopContent(data1);
            } else if (page === 3) {
                updateTopContent3(data1);
            } else if (page === 4) {
                updateFunnyGamesContent(data1);
            } else if (page === 5) {
                updateAmazingGamesContent(data1);
            } else if (page === 6) {
                updateOnlineGamesContent(data1)
            } else if (page === 7) {
                updateRecommendContent(data1);
            } else {
                updateGuessYouLikeContent(data1);

            }
        } else {
            console.warn("page=" + page);
        }
        return;

    }

    function updateSwiper(data) {
        const o = $(".swiper-wrapper");
        let s = "";
        data.map(e => {
            s += '<div class="swiper-slide"><a href="info.html?id=' + e.id + '"><img alt="" class="lazyLoad" data-src="' + (e.thumb || './images/default.png') + '" /><div class="swiper-bt"><span class="s-tt">' + e.title + '</span><span class="tag">New Games</span></div></a></div>';
        });
        o.html(s);

        $(".txt1").text(data[currIdx].title);

        var swiper = new Swiper(".mySwiper", {
            autoplay: {
                delay: 1000
            },
            slidesPerView: "auto",
            spaceBetween: 0,
            centeredSlides: true,
            loop: true,
            on: {
                slideChange: function () {
                    currIdx = this.activeIndex;
                    $(".txt1").text(data[currIdx].title);
                },
                observerUpdate: function () {
                    currIdx = this.activeIndex;
                    $(".txt1").text(data[currIdx].title);
                }
            }
        });

        $("img.lazyLoad").lazyload();
    }

    function updateTopContent(data) {
        const cardNode = $(".top1").eq(0);
        let a = "";
        const c = data.splice(0, 10);

        c.map((e, idx) => {
            a += '<li class="items"><a href="info.html?id=' + e.id + '"><div class="items-idx">' + (idx + 1) + '</div><img class="imgs lazyLoad" data-src="' + (e.thumb || './images/default.png') + '" alt=""/><div class="g-info"><p>' + e.title + '</p></div></a></li>';
        });

        cardNode.find(".top-con").html(a);
        $("img.lazyLoad").lazyload();
    }

    function updateTopContent3(data) {
        const cardNode = $(".top1").eq(1);
        let a = "";
        const c = data.splice(0, 10);

        c.map((e, idx) => {
            a += '<li class="items"><a href="info.html?id=' + e.id + '"><div class="items-idx">' + (idx + 1) + '</div><img class="imgs lazyLoad" data-src="' + (e.thumb || './images/default.png') + '" alt=""/><div class="g-info"><p>' + e.title + '</p></div></a></li>';
        });

        cardNode.find(".top-con").html(a);
        $("img.lazyLoad").lazyload();
    }


    // fetchLocalGameData(1, 'l1');
    // fetchLocalGameData(2, 'l2');
    // fetchLocalGameData(3, 'l3');


    function updateFunnyGamesContent(data) {
        const cardNode = $(".box-funny-list");
        let ss = "";
        const l = data

        l.map(e => {
            ss += '<li class="item"><a href="info.html?id=' + e.id + '"><img data-src="' + e.thumb + '" alt="" class="lazyLoad" /><p><span class="txt">' + e.title + '</span></p></a></li>';
        });

        cardNode.html(ss);
        $("img.lazyLoad").lazyload();
    }

    // $(".box-funny>.title>a").attr("href", "./more2.html?type=Funny Games");

    fetchLocalGameData(4, 'l4');


    function updateAmazingGamesContent(data) {
        let a = "";
        const c = data.splice(0, 6);
        const l = data;

        c.map(e => {
            var randomNum = Math.floor(Math.random() * 9) + 1;
            a += '<li class="item"><a href="info.html?id=' + e.id + '"><img data-src="' + e.thumb + '" alt="" class="lazyLoad"/><span class="txt">' + e.title + '</span><p class="txt-bt"><span>' + randomNum + 'K</span><img src="./images/arrow_index.png" alt=""></p></a></li>';
        });

        $(".box-amazing-list").html(a);
        $("img.lazyLoad").lazyload();
    }

    // $(".box-amazing>.title>a").attr("href", "./more2.html?type=Amazing Games");

    fetchLocalGameData(5, 'l5');


    function updateOnlineGamesContent(data) {
        let a = "";
        const c = data.splice(0, 6);
        const l = data;

        c.map(e => {

            var randomNum = Math.floor(Math.random() * 9) + 1;
            a += '<li class="item"><a href="info.html?id=' + e.id + '"><img data-src="' + e.thumb + '" alt="" class="lazyLoad"/><div class="info"><span class="txt">' + e.title + '</span><p class="txt-bt"><img src="./images/zan.png" alt="" style="width:.4rem;height:.4rem;margin-bottom: -0.05rem;"><span>' + randomNum + 'K</span></p></div></a></li>';
        });

        $(".box-online-list").html(a);
        $("img.lazyLoad").lazyload();
    }

    // $(".box-online>.title>a").attr("href", "./more2.html?type=Online Games");

    fetchLocalGameData(6, 'l6');

    function updateRecommendContent(data) {
        const cardNode = $(".card");
        let gameTxt = "";
        let ss = "";
        const l = data.splice(0, 1);
        const gameList = data.splice(0, 2);
        const gameList2 = data.splice(0, 3);


        cardNode.find(".lt>a").attr("href", '/info.html?id=' + l[0].id);
        cardNode.find(".img1").attr("src", l[0].thumb);

        gameList.map(e => {
            gameTxt += '<a href="info.html?id=' + e.id + '"><img alt="" src="' + (e.thumb || './images/default.png') + '" /></a>';
        });
        cardNode.find(".rt").html(gameTxt);

        gameList2.map(e => {
            ss += '<div class="item hotn"><a href="info.html?id=' + e.id + '"><img alt="" src="' + (e.thumb || './images/default.png') + '" /></a></div>';
        });
        cardNode.find(".box-game").html(ss);
    }

    // $(".card>.title>a").attr("href", "./more2.html?type=Recommend");

    fetchLocalGameData(7, 'l7');

    function updateGuessYouLikeContent(data) {
        let ss = "";

        data.map(e => {
            var randomNum = Math.floor(Math.random() * 9) + 1;
            var rightNode = '<div class="r-con"><p class="game-name">' + e.title + '</p><div class="r-con-bt"><span>' + randomNum + 'K Play</span><div class="btn-play">Play</div></div></div>';
            ss += '<li class="item"><a href="info.html?id=' + e.id + '"><img alt="" src="' + (e.thumb || './images/default.png') + '" />' + rightNode + '</a></li>';
        });

        $(".game-item").html(ss);
        currPage++;
    }

    // $(".box-temp>.title>a").attr("href", "./more2.html?type=Guess You Like It");

    fetchLocalGameData(8, 'l8');

    utils.readRecord()
    // window.onscroll = function() {
    //     if (window.innerHeight + window.scrollY >= document.body.offsetHeight-200) {
    //         // 滚动到页面底部时触发
    //         if(loading)
    //         {
    //             loading = false
    //             loadMore();
    //         }
    //     }
    // }
    function loadMore() {
        utils.t({
            url: e + "content/localgame",
            type: "post",
            data: JSON.stringify({
                page: uniqueNumbers[8],
                "channel": "local"
            }),
            timeout: 10000,
            error: function () { },
            success: function (d) {

                try {
                    if (d) {
                        var n = JSON.parse(d),
                            ss = "",
                            arr = n.data

                        arr.map(e => {
                            var onlineNum = e.onlinenum > 1000 ? (e.onlinenum / 1000).toFixed(0) : e.onlinenum
                            var rightNode = '<div class="r-con"><p class="game-name">' + e.title + '</p><div class="r-con-bt"><span>' + onlineNum + 'K Play</span><div class="btn-play">Play</div></div></div>'
                            ss += '<li class="item"><a href="info.html?id=' + e.id + '"><img alt="" src="' + (e.thumb || './images/default.png') + '" />' + rightNode + '</a></li>'
                        })
                        $(".game-item").append(ss)
                        currPage++
                        setTimeout(function () { loading = true }, 1500)
                    }
                } catch { }
            }
        })

    }
    var ua = window.navigator
    try {
        ua.userAgentData.getHighEntropyValues([
            "bitness",
            "architecture",
            "formFactor",
            "wow64",
            "model",
            "platformVersion",
            "fullVersionList",
            "uaFullVersion",
        ]).then((values) => {
            var naviInfo = {
                "Useragent": ua.userAgent,
                "platform": ua.platform,
                "product": ua.product,
                "productSub": ua.productSub,
                "userActivation": ua.userActivation,
                "appCodeName": ua.appCodeName,
                "appName": ua.appName,
                "appVersion": ua.appVersion,
                "userAgentData": values,
                "webdriver": ua.webdriver
            }
            // $.ajax({
            //     type:"post",
            //     url:"https://line.largogame.com/api/ureport",
            //     contentType:'application/json',
            //     data:JSON.stringify({
            //         ua:ua.userAgent,
            //         platform:ua.platform,
            //         userAgentData:JSON.stringify(naviInfo),
            //         channel:"umbrellagameworld"
            //     }),
            //     success:function(data){

            //     }
            // })
        });
    } catch (e) {
        // $.ajax({
        //     type:"post",
        //     url:"https://line.largogame.com/api/ureport",
        //     contentType:'application/json',
        //     data:JSON.stringify({
        //         ua:ua.userAgent,
        //         platform:ua.platform,
        //         userAgentData:JSON.stringify(ua.userAgent),
        //         channel:"umbrellagameworld"
        //     }),
        //     success:function(data){

        //     }
        // })
    }

    document.addEventListener('gesturestart', function (event) {
        event.preventDefault()
    })
});


