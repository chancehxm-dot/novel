

var e = "https://line.largogame.com/api/";
// window.location.href.indexOf("https") >= 0 && (e = e.replace("http://newgame.holyfinger.com:3003", "https://newgame.holyfinger.com"))
var loading = true
var isExpanded = false
var valParams = ""
var typeParams = utils.n("type")

$(document).ready(function(){

    $(".txt2").text(typeParams)
    if($(".game-type"))
    {
        $(".ipt-search").change(function(e){
            valParams = e.target.value;
        })
        $(".btn-search").click(function(){
            window.location.href="./search.html?searchTxt="+valParams
        })
        var type_arr = ["Puzzle","Sports","Arcade","Bubble","Classics","Girls","Racing","Action","Casual","Adventure","Shoot","Combat"]
        $(".game-type").find("a").each(function(i,dd){
            $(this).attr("href","./type.html?type="+type_arr[i])
        })
    }
    var randomNum = Math.floor(Math.random() * 8)+1
    utils.t({
        url: "/home.json",
        type: "get",
        data: JSON.stringify({
            "page":randomNum,
            "channel":"local"
        }),
        timeout: 10000,
        error: function() {},
        success: function(d) {

            try {
                if (d) {
                    var n = JSON.parse(d),
                        t = n.data,
                        ss="",
                        gameTxt="";

                        t.map(e => {
                            var randomN = Math.floor(Math.random() * 9)+1
                            var rightNode = '<div class="r-con"><p class="game-name">'+e.gamename+'</p><div class="r-con-bt"><span>'+randomN+'K</span><div class="btn-play">Play</div></div></div>'
                            ss += '<li class="item"><a href="./info.html?id=' + e.gid + '"><img alt="" src="' + (e.icon||'./images/default.png') + '" />'+rightNode+'</a></li>'
                        })
      
                        $(".game-item").html(ss);
                }
            } catch {}
        }
    })
    utils.t({
        url: "/home.json",
        type: "get",
        data: JSON.stringify({
            "page":randomNum + 3,
            "channel":"local"
        }),
        timeout: 10000,
        error: function() {},
        success: function(d) {
            var  cardNode = $(".card")
            
            try {
                if (d&&cardNode) {
                    function shuffle(array) {
                        for (let i = array.length - 1; i > 0; i--) {
                            const j = Math.floor(Math.random() * (i + 1));
                            [array[i], array[j]] = [array[j], array[i]];
                        }
                        return array;
                    }
                    var n = JSON.parse(d),
                        t = n.newgames,
                        shuffled = shuffle(t),
                        l=  shuffled.splice(0,1),
                        gameList = shuffled.splice(0,2),
                        gameList2 = shuffled.splice(0,3),
                        ss="",
                        gameTxt="";
                       
                        cardNode.find(".lt>a").attr("href",'./info.html?id='+l[0].gid)
                        cardNode.find(".img1").attr("src",l[0].icon)
                        gameList.map(e=>{
                            gameTxt+='<a href="./info.html?id=' + e.gid + '"><img alt="" src="' + (e.icon||'./images/default.png') + '" /></a>'
                        })
                        cardNode.find(".rt").html(gameTxt)
                        gameList2.map(e => {
                            ss += '<div class="item hotn"><a href="./info.html?id=' + e.gid + '"><img alt="" src="' + (e.icon||'./images/default.png') + '" /></a></div>'
                        })
                        cardNode.find(".box-game").html(ss);
                }
            } catch {}
        }
    })
})