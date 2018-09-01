function add(a,b){
    console.log(a+b)
}
function add1(a,b){
    console.log(a-b)
}
function add2(a,b){
    console.log(a*b)
}
function add3(a,b){
    console.log(a/b)
}
function add4(a,b){
    console.log(a%b)
}

var json=[];
json.push(add);
json.push(add1);
json.push(add2);
json.push(add3);
json.push(add4);
var object={
    add:add,
    add1:add1,
    add2:add2,
    add3:add3,
    add4:add4
}
/* module.exports=json; */
exports.add =object;