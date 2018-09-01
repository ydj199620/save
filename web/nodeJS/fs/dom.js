var fs = require('fs');
/* fs.unlink('one.txt',function(err){
    if(err){
        throw err;
    }
    console.log('删除成功')
}) */
/* fs.rename('one.txt','two.txt',function(err){
    if(err){
        throw err;
    }
    console.log('修改成功')
}) */
/* fs.readFile('two.txt','utf-8',function(err,data){
    if(err){
        throw err;
    }
    console.log(data)
}) */
/* fs.writeFile('two.txt','俞彭威唱征服',function(err){
    if(err){
        throw err;
    }
    console.log('完成修改')
})
 */
/* fs.appendFile('two.txt','忐忑',function(){
    console.log('完成')
}) */
var rs =fs.createReadStream('3.docx');
var ws = fs.createWriteStream('4.docx ');
rs.on('data',function(chunk){
    ws.write(chunk);
})
rs.on('end',function(){
    console.log('读写成功')
})