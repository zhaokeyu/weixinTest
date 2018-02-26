var myurl  = location.href;
$.ajax({
    type: 'post',
    url: "http://xj.bjsidao.com/boss10171023/common/getTicket",
    dataType: "json",
    success: function (data){
        console.log(data.appId);
        wx.config({
            debug: false,
            appId: data.appId,
            timestamp: data.timestamp,
            nonceStr: data.nonceStr,
            signature: data.signature,
            jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage']
        })
        initShar();
    },
    error: function (data){
        console.log("加载系统变量失败，请重新登录","登录错误");
    }
});

function initShar() {
    wx.onMenuShareTimeline({
        title: '三星美式自由空间冰箱 ',
        link: 'http://xj.bjsidao.com/sanxing1/index.html',
        imgUrl: 'http://xj.bjsidao.com/sanxing1/img/share1.jpg?v=aaa',
        success: shar
    });
    wx.onMenuShareAppMessage({
        title: '三星美式自由空间冰箱',
        desc: ' 美式生活 自由空间',
        link: 'http://xj.bjsidao.com/sanxing1/index.html',
        imgUrl: 'http://xj.bjsidao.com/sanxing1/img/share1.jpg?v=aaa',
        success: shar
    });
}
wx.ready(initShar);
var shar = function(){
    // console.log("分享了")
}


















