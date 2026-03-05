var gameChannelId = 5870

function renderCate(gameChannelId = 5870) {
  const hotGames = {
    cateName: 'Hot Games',
    typeName: 'hot',
    imgUrl: './img/hot.png'
  }
  const racingGames = {
    cateName: 'Racing Games',
    typeName: 'racing',
    imgUrl: './img/racing-game.png'
  }
  const shooterGames = {
    cateName: 'Shooter Games',
    typeName: 'shooter',
    imgUrl: './img/shooting-game.png'
  }
  const actionGames = {
    cateName: 'Action Games',
    typeName: 'action',
    imgUrl: './img/action-game.png'
  }
  const casualGames = {
    cateName: 'Casual Games',
    typeName: 'casual',
    imgUrl: './img/casual.png'
  }

  const girlGames = {
    cateName: 'Girls Games',
    typeName: 'girl',
    imgUrl: './img/girls.png'
  }

  const cate = ['index', hotGames, racingGames, shooterGames, actionGames, casualGames, girlGames]
  
  let str = ''
  // 生成 pc 端categories
  for (const val of cate) {
    if (val === 'index') {
      str += `
          <a href="index.html?gameChannelId=${gameChannelId}" class="logo"><img class="pmt" src="./img/logo.png" alt="icon" width="125" height="60">
          </a>`
    } else {
      str += `<a href="type.html?gameChannelId=${gameChannelId}&type=${val.typeName}" class="label">
      <i class="label_icon">
        <img src="${val.imgUrl}" alt="${val.cateName}">
      </i>
      <span class="label_name">${val.cateName}</span>`
    }
  }

  str += `<div class="home-icon"><img src="./img/list.png"></div>`

  let mobileCate = ''
  // 生成移动端categories
  for (const val of cate) {
    if (val != 'index') {
      mobileCate += `
      <a class="label-container" href="type.html?gameChannelId=${gameChannelId}&type=${val.typeName}">
        <i class="label_icon">
          <img src="${val.imgUrl}">
        </i>
        <span class="label-name">${val.cateName}</span>
      </a>
      `
    }
  }
  mobileCate = `<div class="label-panel">${mobileCate}</div>`

  const menu = `
  <div class="home-icon"><img src="./img/list.png">
    <script>
    $('.home-icon').click(() => {
      if($(".label-panel").is(":visible")) {
        $('.label-panel').hide()
      } else {
        $('.label-panel').show()
      }
    })
    </script>
  </div>`


  $('.header').append(str)
  $('.header').append(menu)
  $('.header').append(mobileCate)
}

function loadGAScript(GA, accountInfo) {
  var adjs = document.createElement('script')
  adjs.async = 'async'
  adjs.src = `https://www.googletagmanager.com/gtag/js?id=${GA}`

  document.body.append(adjs)

  if (accountInfo.ga2.length) {
    var adjs1 = document.createElement('script')
    adjs1.async = 'async'
    adjs1.src = `https://www.googletagmanager.com/gtag/js?id=${this.accountInfo.ga2}`

    document.body.append(adjs1)
  }

}

function getAdData(adChannel) {
  var adjs = document.createElement('script')
  adjs.async = 'async'
  adjs.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-00023i84'
  adjs.crossorigin = 'anonymous'
  adjs.setAttribute("data-ad-frequency-hint", "30s");
  adjs.setAttribute("data-ad-channel", adChannel);
  // adjs.setAttribute("data-adbreak-test","on");

  document.head.append(adjs)
}

function handleScroll() {
  var imgs = document.querySelectorAll('.pic')
  var game_items = document.querySelectorAll('.newGame')
  let scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
  for (var i = 0; i < imgs.length; i++) {
    if ((window.innerHeight + scrolltop) > lazyload(game_items[i])) {
      (i => {
        setTimeout(() => {
          var temp = new Image()
          temp.src = imgs[i].getAttribute("data-src")
          temp.onload = () => {
            imgs[i].src = imgs[i].getAttribute("data-src")
          }
        }, 100)
      })(i)
    }
  }
}

function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return (false);
}

function lazyload(e) {
  if (e != undefined) {
    return e.offsetTop
  }
}
$(document).ready(function () {
  handleScroll()
})
window.addEventListener("scroll", handleScroll, true)

function getDetail(gameChannelId, gameId) {
  $.ajax({
    type: "post",
    contentType: "application/json; charset=utf-8",
    url: 'https://www.migame.vip/gamefront/gameList/tempGameDetails',
    dataType: "json",
    data: JSON.stringify({
      gameChannelId: gameChannelId,
      gameId: gameId
    }),
    success: function (res) {
      if (res.data.gameScreenDirection == 2) {
        window.localStorage.setItem('direction', true)
        $('#gameIframe').css('width', '100%')
        $('#gameIframe').css('height', '100%')
      } else {
        window.localStorage.removeItem('direction')
        $('#gameIframe').css('width', '100%')
      }
      $('#title').text(res.data.gameName)
      $('.play-desc-review_content').text(res.data.gameDesc)
      $('.pc').click(() => {
        gtag('event', 'playGame', {
          'playGame': '开始游戏',
          'gameId': 'id' + gameId
        })
        preAd()
        $('.play-container').hide()
        $('.game-load').hide()
        localStorage.setItem('gameName', res.data.gameFileName)
        $('#gameIframe').attr('src', `./utils/index.html`)
      })
      if (res) {
        $('.mo').click(() => {
          gtag('event', 'playGame', {
            'playGame': '开始游戏',
            'gameId': 'id' + gameId
          })
          localStorage.setItem('gameName', res.data.gameFileName)
          preAd().then(() => {
            window.location.href = `play.html?gameChannelId=${gameChannelId}&gameFileName=${res.data.gameFileName}`
          })
        })
      }
      $('.info-pic').attr('src', res.data.gameLogo)
      $('.game-name').text(res.data.gameName)
      $('.txt-cut').text(res.data.gameName)
    },
    error: function (res) {
      console.log(res, "#error");
    }
  })

}

function getMoreList(gameChannelId) {
  $.ajax({
    type: "post",
    contentType: "application/json; charset=utf-8",
    url: 'https://www.migame.vip/gamefront/gameList/index',
    dataType: "json",
    data: JSON.stringify({
      page: 2,
      limit: 21,
      isTop: -1
    }),
    success: function (res) {
      //   console.log(res.data);

      for (let i = 0; i < res.data.length; i++) {
        const element = res.data[i];
        let str = ''
        str += `
            <div class="game-box"><i class="icon-h5 sprite"></i>
                            <a class="game newGame" href="detail.html?gameChannelId=${gameChannelId}&gameId=${element.gameId}">
                                <img class="pic lazyload fmt"
                                    src="../img/picture.gif"
                                    data-src="${element.gameLogo}"
                                    alt="${element.gameName}"> <span class="name">${element.gameName}</span>
                            </a>
            </div>

            `
        $('.moreGame').append(str)
      }
    },
    error: function (res) {
      console.log(res, "#error");
    }
  })

}

function adPrepare() {
  window.adsbygoogle = window.adsbygoogle || [];
  window.adBreak = window.adConfig = function (o) {
    adsbygoogle.push(o);
  }
}

function preAd() {
  return new Promise((resolve, reject) => {
    adBreak({
      type: 'preroll',
      name: 'preroll-ad',
      adBreakDone: (breakStatus) => {
        console.log(3, breakStatus)
        resolve()
      },
    });
  })
}