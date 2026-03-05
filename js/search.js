function debounce(fn, delay) {
    let timer = null
    return function () {
        let that = this
        let args = arguments
        console.log(timer)
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.apply(that, args)
            clearTimeout(timer)
            timer = null
        }, delay)
    }
}

function searchData(keyword) {
    $.ajax({
        type: 'post',
        contentType: "application/json; charset=utf-8",
        url: 'https://www.migame.vip/gamefront/gameList/search',
        dataType: "json",
        data: JSON.stringify({
            gameName: keyword,
            page: 1,
            limit: 30
        }),
        success: function (res) {
            $('#search-results').empty();
            res.data.forEach(function (item) {
                $('#search-results').append(`<li class="gameName"> <a href="search.html?gameChannel=${gameChannelId}&keyword=${item.gameName}"><span>${item.gameName}</span></a> </li>`);
            });
        },
        error: function (error) {
            console.log(error, '#error');
        }
    })
}

function renderSearchDom(gameChannelId = 5870) {
    const searchDom = `
    <div class="search">
        <div class="search-menu">
            <input class="search_input" type="text" id="search-input">
            <div class="search-btn">
                <img class="search-btn_img" src="./img/icon-search.png" alt="search_icon" width="20">
            </div>
            <div class="search-table" style="display: none">
                <ul id="search-results"></ul>
            </div>
        </div>
    </div>

    <a class="to-search" href="search.html?gameChannelId=${gameChannelId}">
      <img src="./img/search.png" alt="search_icon" width="35">
    </a>

    <script>
        $(document).ready(function () {
            var timer;
            var keyword;
            var results
            const newSearchData = debounce(searchData, 500)
            // 监听搜索框输入事件
            $('#search-input').on('input', function () {
                clearTimeout(timer);
                // 获取搜索关键词
                keyword = $(this).val();

                if (keyword.length === 0) {
                    $('.search-table').hide()
                } else {
                    $('.search-table').show()
                }
                newSearchData(keyword)
            });

            $('.search-btn').click(function () {
                location.href = 'search.html?gameChannel=' + gameChannelId + '&keyword=' + $('#search-input').val() + ''
            })

            var placeHolder =  getQueryVariable('keyword') ? decodeURIComponent(getQueryVariable('keyword')) : 'Search Game...'

            $('.search_input').attr("placeholder", placeHolder)
        });

    </script>
`
    $('.header').append(searchDom)
}