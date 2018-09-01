var express = require('express');
var fs = require('fs');
var router = express.Router();
router.get('/',function(req,res){
   /*  fs.readFile('guanwang/about.html','utf-8',function(err,data){
        if(err){
            throw err
        }
        //data1=data;
        res.send(data);
    }) */
    res.redirect('about.html')
})
module.exports=router;