当前index.html页面中有两个广告位置，分别给他们加点击和展示的上报
第一个广告：
div-gpt-ad-1770106603233-0
第一个图片素材
adx-container
谷歌广告展示：https://acezi.info/b.gif?s=blogulluiatanase{|m}&a=1_google{|m}&t=ms&_={时间戳}
谷歌广告点击：https://acezi.info/b.gif?s=blogulluiatanase{|m}&a=1_google{|m}&t=mc&_={时间戳}
兜底广告展示：https://acezi.info/b.gif?s=blogulluiatanase{|m}&a=1_house{|m}&t=ms&_={时间戳}
兜底广告点击：https://acezi.info/b.gif?s=blogulluiatanase{|m}&a=1_house{|m}&t=mc&_={时间戳}

第二个广告：
div-gpt-ad-1772435248258-0
第二个图片素材兜底
banner-placeholder-footer
谷歌广告展示：https://acezi.info/b.gif?s=blogulluiatanase{|m}&a=2_google{|m}&t=ms&_={时间戳}
谷歌广告点击：https://acezi.info/b.gif?s=blogulluiatanase{|m}&a=2_google{|m}&t=mc&_={时间戳}
兜底广告展示：https://acezi.info/b.gif?s=blogulluiatanase{|m}&a=2_house{|m}&t=ms&_={时间戳}
兜底广告点击：https://acezi.info/b.gif?s=blogulluiatanase{|m}&a=2_house{|m}&t=mc&_={时间戳}

执行对应的时机的时候就要上报：
1.创建一个img来做上报，兼容处理，只支持get
2.要区分是否是移动和pc， 移动端带上m，拼接在s=xxxx最末尾
3.上报的地址，根据上报的时机来区分，展示的时候是ms，点击的时候是mc
4.上报的地址，根据上报的广告类型来区分，第一个广告是1_google，第二个广告是2_google
5.上报的地址，根据上报的广告素材来区分，谷歌广告是google，兜底广告是house

开发要求：
1.编写成一个js插件，方便以后在其他页面使用
2.使用中文注释，并做好模块标注
3.在生产环境中也可正常运行