// 声明变量   注意：变量的类型    let 变量:数据类型=值;
// 布尔值   boolean
var isOk = false; //ts
var isOn = false; //js
// 数字 number 
var num = 111; //ts
var num1 = 222; //js
// 字符串   string
var str1 = "hello"; //ts
var str2 = "world"; //js
//字符串的拼接   ``
var world = "world";
var str3 = "hello " + world; //ts
var str4 = "hello" + "world"; //js
// 数组   Array   1.数组项类型[]     2.Array<数组项类型>
var arr = [1, 2, 3, 4];
var arr2 = ['a', 'a', 'b'];
var arr3 = [1, 2, 3, 'a', { "name": "航三" }]; //ts
var arr4 = [1, 2, 3, 'a', 'b']; //js
// 元组   Tuple   数组的一种   数组项类型不单一
var x = ['你好', 111]; //ts
// let y:[string,number]=['你好',222,222];
// console.log(y[0]);
// 枚举  enum  对象    变量值是多个，不经常变化，使用枚举
// 类似数组，对象有默认的下标 从0开始    下标可自定义 
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["blue"] = 1] = "blue";
    Color[Color["green"] = 2] = "green";
    Color[Color["yellow"] = 3] = "yellow";
})(Color || (Color = {}));
;
var hongse = Color.red;
console.log(Color[0]);
var Color2;
(function (Color2) {
    Color2[Color2["red"] = 2] = "red";
    Color2[Color2["blue"] = 3] = "blue";
    Color2[Color2["green"] = 4] = "green";
    Color2[Color2["yellow"] = 5] = "yellow";
})(Color2 || (Color2 = {}));
;
console.log(Color2[3]);
// void  没有任何类型
function func() {
    console.log("没有任何类型");
}
function func1(x, y) {
    return x + y;
}
function func2(x, y) {
    return x + y;
}
