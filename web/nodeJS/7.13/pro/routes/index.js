var express = require('express');
var router = express.Router();
var mongo = require('./mongo.js')

/* GET home page. */
/* router.get('/AdminHandler', function(req, res, next) {
  if(req.query.action=='add'){
    mongo('insert1','bb','userAdmin',{user:req.query.user,age:req.query.age},function(a){
      console.log(a)
    });
    res.send('成功')
  }else{
    res.send('注册失败')
  }
}); */


router.post('/AdminHandler', function(req, res, next) {
  if(req.query.action=='add'){
    mongo('insert1','bb','userAdmin',{user:req.body.user,age:req.body.age},function(a){
      console.log(a)
    });
    res.send('成功')
  }else{
    res.send('注册失败')
  }
});
module.exports = router;
