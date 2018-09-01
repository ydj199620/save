// 百度地图API功能
var map = new BMap.Map('allmap');
var poi = new BMap.Point(118.7988334688,32.0552612648);
map.centerAndZoom(poi, 16);
map.enableScrollWheelZoom();

var content = '<div style="margin:0;line-height:20px;padding:2px;">' +
                '<img src="img/videoBtn2_c83e42d.png" alt="" style="float:right;zoom:1;overflow:hidden;width:100px;height:100px;margin-left:3px;"/>' +
                '地址：江苏省南京市珠江大厦10楼<br/>电话：(025)10000<br/>简介：南京诺博联信息科技有限公司位于南京市玄武区浮桥地铁站附近，珠江大厦10楼。' +
              '</div>';

//创建检索信息窗口对象
var searchInfoWindow = null;
searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
        title  : "南京诺博联信息科技有限公司",      //标题
        width  : 290,             //宽度
        height : 105,              //高度
        panel  : "panel",         //检索结果面板
        enableAutoPan : true,     //自动平移
        searchTypes   :[
            BMAPLIB_TAB_SEARCH,   //周边检索
            BMAPLIB_TAB_TO_HERE,  //到这里去
            BMAPLIB_TAB_FROM_HERE //从这里出发
        ]
    });
var marker = new BMap.Marker(poi); //创建marker对象
marker.enableDragging(); //marker可拖拽
marker.addEventListener("click", function(e){
    searchInfoWindow.open(marker);
})
map.addOverlay(marker); //在地图中添加marker
marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
//样式1
var searchInfoWindow1 = new BMapLib.SearchInfoWindow(map, "信息框1内容", {
    title: "信息框1", //标题
    panel : "panel", //检索结果面板
    enableAutoPan : true, //自动平移
    searchTypes :[
        BMAPLIB_TAB_FROM_HERE, //从这里出发
        BMAPLIB_TAB_SEARCH   //周边检索
    ]
});
function openInfoWindow1() {
    searchInfoWindow1.open(new BMap.Point(116.319852,40.057031));
}