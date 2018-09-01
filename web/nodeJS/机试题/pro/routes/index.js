var express = require('express');
var router = express.Router();

var mongo = require('mongodb');
var mongoClient = mongo.MongoClient;
var url = 'mongodb://127.0.0.1:27017'
/* GET home page. */
router.get('/hhh', function(req, res, next) {
  mongoClient.connect(url,function(err,client){
    if(err){
      throw err;
    }
    var dbs = client.db('aa');
    var coll = dbs.collection('userinfo');
    coll.find({user:req.query.user}).toArray(function(err,result){
      if(err){
        throw err;
      }
      if(result.length>0){
        if(req.query.password==result[0].password){
          res.send('登录成功')
        }else{
          res.send('请输入正确的密码')
        }
      }else{
        res.send('请输入正确的账号')
      }
    })
  })
});

module.exports = router;
