var user = "Jane User";
var isok = true; //布尔类型
var isok1 = 1234; //数字
var isok2 = 'qwert'; //字符串
var isok3 = ['qwe', 'rty']; //数组中字符串
var isok4 = ['qwe', 'rty']; //数组中字符串
var isok5 = ['qwe', 123]; //元祖
var a;
(function (a) {
    a[a["green"] = 0] = "green";
    a[a["blue"] = 1] = "blue";
})(a || (a = {}));
;
var isok6 = a.green;
var isok7 = ['string' + 123];
console.log(isok7);
function timeout(ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, ms, 'done');
    });
}
timeout(100).then(function (value) {
    console.log(value);
});
