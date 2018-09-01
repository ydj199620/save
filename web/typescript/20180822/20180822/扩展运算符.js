// ...   扩展运算符
console.log(1,2,3,...[4,5,6]);

// rest   ...的逆运算
function fn1(...rest){
    console.log(rest);
}
fn1(1,2,3,4,5,6,7);

function fn2(x,y,z){
     console.log(arguments)
}
fn2("a","b","c");
fn2(1,2,3)





