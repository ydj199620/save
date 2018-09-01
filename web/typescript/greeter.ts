let user = "Jane User";
let isok:boolean = true;//布尔类型
let isok1:number = 1234;//数字
let isok2:string ='qwert'//字符串
let isok3:Array<string>= ['qwe','rty']//数组中字符串
let isok4:string[]=['qwe','rty']//数组中字符串
let isok5:[string,number]=['qwe',123]//元祖
enum a {green,blue};
let isok6:a=a.green;
let isok7:any= ['string'+123];
console.log(isok7);
