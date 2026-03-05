var utils = {
    n:function(e){
        var n = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"),
            t = window.location.search.substr(1).match(n);
        return t != null ? unescape(t[2]) : ""
    },
    t:function(e){
        var t, n, e = e || {},
            s = function() {
                t.readyState == 4 && (clearTimeout(n), t.status == 200 || t.status == 0 ? e.success && e.success(t.responseText) : e.error && e.error(t.responseText))
            };
        window.XMLHttpRequest ? t = new XMLHttpRequest : window.ActiveXObject && (t = new ActiveXObject("Microsoft.XMLHTTP")), t && (t.open(e.type, e.url), t.setRequestHeader("Content-type", "application/json"), t.onreadystatechange = s, e.data = e.data || null, t.send(e.data)), e.timeout && (n = setTimeout(function() {
            t.abort(), e.error && e.error(t.responseText)
        }, e.timeout))
    },
    setLocalData:function(key,obj){
        window.localStorage.setItem(key,JSON.stringify(obj))
    },
    getLocalData:function(key){
        if(window.localStorage.getItem(key))
        {
            var str = window.localStorage.getItem(key)
            return JSON.parse(str)
        }
    },
    isInSight:function(el) {
        const bound = el.getBoundingClientRect();
        const clientHeight = window.innerHeight;
        //如果只考虑向下滚动加载
        //const clientWidth = window.innerWeight;
        return bound.top <= clientHeight + 100;
    },
    lazyload:function(imgs){
        Array.from(imgs).forEach((el,i) => {
            if (utils.isInSight(el)) {
                (function(i) {
                    setTimeout(function() {
                        var temp = imgs[i].getAttribute('data-img');
                        imgs[i].setAttribute('style',"background:url("+temp+") center center no-repeat;background-size:100%;")

                    }, 500)

                })(i)
            }
        })
    },
    historyRecord:function(obj){
        var objArr = []
        var myHistory = utils.getLocalData("my_history")

        if(myHistory)
        {
            objArr = JSON.parse(myHistory)
            if(objArr.length>=16)
            {
                objArr = objArr.splice(0,15)
            }
            if(myHistory&&myHistory.indexOf(obj.id)>=0)
            {
                return false
            }
            objArr.unshift(obj)
        }
        else
        {
            objArr.unshift(obj)
        }
        utils.setLocalData("my_history",JSON.stringify(objArr))
    },
    readRecord:function(){
        var historyList = utils.getLocalData("my_history")
        var listHtml="";
        
        if(historyList)
        {
            var hisList =  JSON.parse(historyList)
            if(hisList.length>=16)
            {
                hisList = hisList.splice(0,9)
            }//<p><span class="txt">'+e.gamename+'</span></p>
            hisList.map(e => {
                listHtml += '<li class="item"><a href="info.html?id='+e.id+'"><img src="'+(e.gamelogo||'./images/default.png')+'" alt=""/></a></li>'
            })
             $(".recent-list").html(listHtml)
             //$(".history").show()
        }
        else
        {
            //$(".history").hide()
            $(".recent-index").html("<li style='display:flex;align-items:center;justify-content:center;width:100%;height:1.6rem;font-size:0.3rem;color:#3D3D3D'>Haven't played the game yet.<li>").css("overflow","hidden")
            
        }

    }
    
}