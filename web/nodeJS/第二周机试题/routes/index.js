var express = require('express');
var router = express.Router();
var mongo = require('./mongo.js');
var crypto1 = require('crypto');//引入加密的模块
var ObjectId = require('mongodb').ObjectID;//引入mongodb//就是可以处理ObjectId(_id)(后面的ObjectID中ID是大写)

function User(users1){//容器。存储用户信息
  this.userName=users1.userName,//用户名
  this.password =users1.password//登录的密码
}

/* GET home page. */
router.post('/register', function(req, res, next) {
  var arr={};
  if(req.query.action=='add'){
    mongo('find1','testdata','users',null,function(result){
      arr.userName = req.body.userName==''?'false':req.body.userName;
      arr.turename =req.body.turename==''?'false':req.body.turename;
      arr.sex = req.body.sex;
      arr.age = req.body.age;
      var MD5 = crypto1.createHash('md5');
      arr.password = MD5.update(req.body.password).digest('base64');
      arr.phone= /^1\d{10}$/.test(req.body.phone)?req.body.phone:'false';
      arr.createAt = new Date();

      if(arr.userName=='false'||arr.turename=='false'||arr.phone=='false'){
        res.redirect('cuo.html')
      }else{
        mongo('find1','testdata','users',{userName:req.body.userName},function(b){
          if(b.length>0){
            res.redirect('cuo.html')
          }else{
            mongo('insert1','testdata','users',arr,function(a){
              if(a.ops.length>0){
                res.redirect('success.html')
              }else{
                res.redirect('cuo.html')
              }
            })
          }
        })
      }
    })
  }
});

router.post('/login',function(req,res){
  if(req.query.action=='login'){
    var selector = {'turename':{$regex:'.*'+req.body.turename+'.*',$options:'i'}};
    mongo('find1','testdata','users',selector,function(e){
      if(e.length>0){
        res.send(e)
      }else{
        res.send("{err:'查找失败'}")
      }
    })
  }
})

router.get('/register',function(req,res){
  if(req.query.action=='register'){
    mongo('find1','testdata','users',{userName:req.query.userName},function(result){
        if(result.length>0){
          var MD3 = crypto1.createHash('md5');
          mongo('find1','testdata','users',{password: MD3.update(req.query.password).digest('base64')},function(k){
            if(k.length>0){
              var MD2 = crypto1.createHash('md5');
              var user1 = new User({
                userName: req.query.userName,
                password:MD2.update(req.query.password).digest('base64'),
              })
              req.session.user = user1;
              res.redirect('quit.html')
            }else{
              res.send("{err:'密码不正确'}");
            }
          })
        }else{
          res.send("{err:'账号不正确'}");
        }
    })
  }
})
router.get('/quit',function(req,res){
  if(req.query.action=='quit'){
    if(req.session.user){
      req.session.user = null;//清空用户信息
      res.send("{success:'退出成功'}")
    }else{
      res.send("{err:'请先登录'}")
    }
  }
})
module.exports = router;
