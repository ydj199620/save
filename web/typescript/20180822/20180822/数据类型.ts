// 声明变量   注意：变量的类型    let 变量:数据类型=值;
// 布尔值   boolean
let isOk:boolean=false;//ts
var isOn=false;//js
// 数字 number 
let num:number=111;//ts
var num1=222;//js
// 字符串   string
let str1:string="hello";//ts
var str2="world";//js

//字符串的拼接   ``
let world="world";
let str3:string=`hello ${world}`;//ts
var str4="hello"+"world";//js
// 数组   Array   1.数组项类型[]     2.Array<数组项类型>
let arr:number[]=[1,2,3,4];
let arr2:Array<string>=['a','a','b'];
let arr3:Array<any>=[1,2,3,'a',{"name":"航三"}];//ts
var arr4=[1,2,3,'a','b'];//js
// 元组   Tuple   数组的一种   数组项类型不单一
let x:[string,number]=['你好',111];//ts
// let y:[string,number]=['你好',222,222];
// console.log(y[0]);
// 枚举  enum  对象    变量值是多个，不经常变化，使用枚举
// 类似数组，对象有默认的下标 从0开始    下标可自定义 
enum Color{red,blue,green,yellow};
let hongse=Color.red;
console.log(Color[0]);
enum Color2{red=2,blue,green,yellow};
console.log(Color2[3]);
// void  没有任何类型
function func():void{
    console.log("没有任何类型")
}

function func1(x,y){//js实现求和
    return x+y
}

function func2(x:number,y:number):number{//ts标准定义
    return x+y
}




















