/* function runAsync1(){ 
var p = new Promise(function(resolve, reject){ 
//做一些异步操作 
setTimeout(function(){ 
console.log('异步任务1执行完成'); 
resolve('随便什么数据1'); 
}, 2000); 
}); 
return p; 
} 
function runAsync2(){ 
var p = new Promise(function(resolve, reject){ 
//做一些异步操作 
setTimeout(function(){ 
console.log('异步任务2执行完成'); 
resolve('随便什么数据2'); 
}, 2000); 
}); 
return p; 
} 
function runAsync3(){ 
var p = new Promise(function(resolve, reject){ 
//做一些异步操作 
setTimeout(function(){ 
console.log('异步任务3执行完成'); 
resolve('随便什么数据3'); 
}, 2000); 
}); 
return p; 
} 
runAsync1() 
.then(function(data){ 
console.log(data); 
return runAsync2(); 
}) 
.then(function(data){ 
console.log(data); 
return runAsync3(); 
}) 
.then(function(data){ 
console.log(data); 
}); 
 */
var a =[1,2,11,12,3,4,6]
var b=0
for(var i=0;i<a.length;i++){
    for(var j=0;j<a.length-1-i;j++){
        if(a[j]>a[j+1]){
            b=a[j]
            a[j]=a[j+1]
            a[j+1]=b
        }
    }
}
console.log(a)