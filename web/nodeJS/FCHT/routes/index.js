var express = require('express');
var router = express.Router();
var mongo = require('./mongo.js')
var crypto1 = require('crypto');//引入加密的模块
var ObjectId = require('mongodb').ObjectID;//引入mongodb//就是可以处理ObjectId(_id)(后面的ObjectID中ID是大写)

/* GET home page. */
// localhost:3000/VueHandler/AdminLoginAndRegHandler?action=verification
function User(users){//容器。存储用户信息
  this.digit=users.str1,//验证码
  this.userName=users.userName,//用户名
  this.password =users.password,//登录的密码
  this.id=users.id//用户id
}
//迭代删除
/* var dieDelete =function(data,res){//data都是问题数据
  if(data.length==0){//如果没有问题数据
    res.send("{success:'删除成功'}")
  }else{
     //修改的条件不变。只处理问题数据中的第一个数据
    var selector3 = [{'userName':data[0].userName},{$inc:{'tokenId':-1}}]
    mongo('upData','fcht','administors',selector3,function(result){
      if(result.length==0){
        res.send("{err:'修改失败'}")
      }else{
        data.shift();//修改成功后，删除问题数据中的第一个数据
        if(data.length>0){
          dieDelete(data,res)//迭代删除
        }else{
          res.send("{success:'修改成功'}")
        }
      }
    })
  }
} */


//验证码接口
/*
 1.通过页面原生js访问数据接口
 2.服务器路由接受前端的数据请求，动态生成4位随机数
 3.返回给客户端请求
 * */
// localhost:3000/VueHandler/AdminLoginAndRegHandler?action=verification
router.get('/AdminLoginAndRegHandler', function(req, res){
  if(req.query.action==='verification'){
    var str='ABCDEFGHIJKLMNOBQRSTUVWSYZ1234567890';//随机数的范围
    var str1 = '';//保存随机数
    var randomNum = function(min,max){//随机数的取值范围
      return Math.floor(Math.random()*(max-min)); 
    }//4来表示str中的下标
    for(var i =0;i<4;i++){//for循环，循环4次。生成4个随机数
      var digit = str[randomNum(0,str.length)];
      str1+=digit;
    }
    //实例化User对象
    var user1 = new User({
      str1:str1,
      userName:''
    })
    //把实例化的用户信息存储在session中
    req.session.user = user1;
  }else if(req.query.action==='checkVerification'){
    //校验验证码
		/*
		 1.获取前端传过来的验证码
		 2.和session中的验证码进行比较
		 * */
    if(req.query.veri==req.session.user.digit){
      res.send("{success:'成功'}");
    }else{
      res.send("{err:'失败'}");
    }
  }
});


//添加管理员
/*
 1.收集用户的信息
 2.向数据库做插入操作之前，判断用户是否输入信息，其次再判断用户名是否已被注册
 3.再调用mongodb的操作
 * */

///VueHandler/AdminLoginAndRegHandler?action=add
router.post('/AdminLoginAndRegHandler',function(req,res){
  var userinfo ={}////需要一个容器，收集，整理前端发送的用户信息
  if(req.query.action==='add'){
    //添加管理员的逻辑
    //查询集合administors  
		/*
		 find:向数据库数据的进行的操作:查询
		 fcht:数据库名字
		 administors:集合的名字
		 * */
    mongo('find1','fcht','administors',null,function(result){
      //获取集合中的数据长度，让下一条数据的tokenId =result.length+1; 
      userinfo.tokenId = result.length+1;//tokenId动态递增
      userinfo.createAt =new Date();//日期
      userinfo.userName = req.body.userName==''?'false':req.body.userName;//用户名
      userinfo.trueName = req.body.trueName==''?'false':req.body.trueName;//姓名
       //.digest('base64');
		 //base64是一种基于64位可打印的字符来表示二进制数据的方法
      var MD5 = crypto1.createHash('md5');
      userinfo.password = MD5.update(req.body.password).digest('base64');//密码
      userinfo.power = req.body.power;
      userinfo.powerCode = req.body.power=='系统管理员'?1:2;//权限代码
      userinfo.phone = /^1\d{10}$/.test(req.body.phone)?req.body.phone:false;//电话
       /*
		 add:向数据库数据的进行的操作:插入
		 fcht:数据库名字
		 administors:集合的名字
		 userInfo：插入的用户信息（即用户注册时输入的信息）
		 * */
      if(userinfo.userName=='false'||userinfo.trueName=='false'){
        res.send("{err:'请填写重要信息'}")
      }else{
        //再做插入操作之前，需向数据库查询，用户名是否已存在
        mongo('find1','fcht','administors',{userName:req.body.userName},function(b){
          if(b.length>0){
            res.send("{err:'用户账号已被注册'}")
          }else{//数据库中没有此用户名，可进行插入操作
            mongo('insert1','fcht','administors',userinfo,function(a){
              if(a.ops.length>0){
                res.send("{success:'注册成功'}")
              }else{
                res.send("{err:'注册失败'}")
              }
            })
          }
        })
      }
    })
  }else if(req.query.action==='login'){//VueHandler/AdminLoginAndRegHandler?action=login
    //用户登录的操作 post
		/*
		 1.获取前端用户输入的用户名和密码
		 2.把密码加密，因为注册的时候密码是加密插入数据库的，所有需要把用户输入的密码进行加密，和数据库进行匹配
		 3.拿着用户的用户名和密码去数据库查询，如果有，登录成，如果没有，登录失败
		 * */
		/*密码进行加密*/
    mongo('find1','fcht','administors',{userName:req.body.userName},function(c){
      var MD5 = crypto1.createHash('md5');
       /* userinfo.password = MD5.update(req.body.password).digest('base64'); */
      if(c.length>0){
        mongo('find1','fcht','administors',{password: MD5.update(req.body.password).digest('base64')},function(d){
          if(d.length>0){

            //用session记录用户的登录信息
            req.session.user.ususerName = req.body.userName;
            var MD5 = crypto1.createHash('md5');
            req.session.user.password = MD5.update(req.body.password).digest('base64');
            req.session.user.id = d[0]._id;
            res.send("{success:'登录成功'}")
          }else{
            res.send("{err:'密码不正确'}")
          }
        })
      }else{
        res.send("{err:'账号不正确'}")
      }
    })
  }
})

//退出登录
///VueHandler/AdminHandler?action=quit
///VueHandler/AdminHandler?action=show//列表的请求/查询
///VueHandler/AdminHandler?action=delete//删除管理员
router.get('/AdminHandler', function(req, res){
  if(req.query.action=='quit'){
    //退出功能
		/*
		 1.判断登录没有登录
		 * */
    if(req.session.user){
      req.session.user = null;//清空用户信息
      res.send("{success:'退出成功'}")
    }else{
      res.send("{err:'请先登录'}")
    }
  }else if(req.query.action=='show'){
    //列表的模糊查询
		//获取前端传过来的查询条件；按姓名 查询
		//管理员的查询功能、、模糊查询mongo中的正则$regex:匹配条件
		//按姓名的迷糊查询，是否区分大小写。“i”不区分
    var selector = {'trueName':{$regex:'.*'+req.query.searchText+'.*',$options:'i'}};
    var selector2 = {'tokenId':{$gt:(req.query.pageStart-1)*3,$lte:req.query.pageStart*3}}//分页查询
    ///查询的条件的权重问题
    var selectorEnd = req.query.searchText!=''?selector:selector2;
    mongo('find1','fcht','administors',selectorEnd,function(e){
      if(e.length>0){
        res.send(e)
      }else{
        res.send("{err:'查找失败'}")
      }
    })
  }else if(req.query.action=='delete'){///VueHandler/AdminHandler?action=delete
    //删除管理员的操作
    mongo('remove1','fcht','administors',{'tokenId':parseInt(req.query.tokenId)},function(result){
      if(result.n==0){
        res.send("{err:'删除失败'}")
      }else{
        //在做删除操作的时候，tokenId会发生错误
				//因为我们想数据库做插入操作的时候，是以数据库的长度为为前提的
				/*$inc   -1*/
				//[
				//{tokenId:1},
				/*{tokenId:2},*/
				//{tokenId:3},
				//{tokenId:4}]
        //迭代删除
        
        //第一种方法 封装的updata方法是修改一个
       /*  mongo('find1','fcht','administors',{'tokenId':{$gt:parseInt(req.query.tokenId)}},function(data){
					//res.send(data);
					//data中存放的是问题数据   [{tokenId:3},{tokenId:4}]
					//修改[{修改谁},{怎么修改}]
					//var sele = [{},{}];
          dieDelete(data,res);//迭代删除
          for循环有bug，不推荐使用
        }) */
        /*
					 for循环的时候，如果删除后再继续删除会出现bug :Error: Cannot set headers after they are sent to the client
					 原因是for循环中send中，一个请求只能一个res.send()响应
					 * */
        /* for(var i=0;i<data.length;i++){
          //修改数据库中所有的问题数据，tokenId -1
          mongo('upData','fcht','administors',[{'_id':data[i]._id},{$inc:{'tokenId':-1}}],function(a){
            if(a.length ==0){
              res.send('{"err":"修改失败"}');
            }else{
              res.send('{"err":"修改成功"}');
            }
            })
          } */
          

        //第二种方法
        mongo('upData1','fcht','administors',[{'tokenId':{$gt:parseInt(req.query.tokenId)}},{$inc:{'tokenId':-1}}],function(a){
          if(a.n==0){
            res.send("{err:'修改失败'}")
          }else{
            res.send("{success:'修改成功'}")
          }
        })
      }
    })
  }
})

//修改密码
// post   /VueHandler/AdminHandler?action=updatepass
// post   /VueHandler/AdminHandler?action=update

router.post('/AdminHandler',function(req,res){
  if(req.query.action=='updatepass'){
    //修改密码的逻辑
		/*
		 *1.用户登录的信息放在session中，session中有密码
		 * 2.拿着用户输入的原始密码去和session中密码进行匹配，如果成功，则可以修改密码
		 * 3.因为session中的密码是加密，所有我要把用户输入的密码加密后再匹配
		 * */
    var md5 = crypto1.createHash('md5');
    //加密的密码===session中的密码
    var password1 = md5.update(req.body.userPwd).digest('base64');
    //var password2 = md5.update(req.body.newPwd).digest('base64');//不能合在一起写，写了会报错，必须分开来加密
    if(password1==req.session.user.password){
      //向数据库做修改密码的操作
			/*
			 1.你要修改谁？我们可以通过_id,userName ,tokenId ，唯一标识
			 2。所有对密码都要加密
			 * */
      var md6 = crypto1.createHash('md5');
      //加密的密码===新密码（必须分开来加密，重写写一个md5加密，合在一起写时报错）
      var password2 = md6.update(req.body.newPwd).digest('base64');
      var arr = [
        {'_id':new ObjectId(req.session.user.id)},//也可以使用req.session.user.ususerName来查找
        {
        $set:{
          'password':password2,
          'upDateAt':new Date()
        }
      }]
    mongo('upData1','fcht','administors',arr,function(j){
        console.log(j)
        if(j.length==0){
          res.send("{err:'修改失败'}")
        }else{
          res.send("{success:'修改成功'}")
        }
      })
    }else{
      res.send("{err:'请输入正确的密码'}")
    }
  }else if(req.query.action=='update'){//修改管理员信息
    //修改管理员信息
		//1.修改谁？tokenId。前端用户传过来的
		//2.怎么修改  。收集前端用户传过来的参数
    var arr1 = [
      {'tokenId':parseInt(req.body.tokenId)},//把用户传过来tokenId转成数字类型的
      {
      $set:{
        'userName':req.body.userName,
        'trueName':req.body.trueName,
        'phone':req.body.phone,
        'power':req.body.power,
        'upDateAt':new Date()
      }
    }]
    mongo('upData1','fcht','administors',arr1,function(k){
      if(k.length==0){
        res.send("{err:'修改失败'}")
      }else{
        res.send("{success:'修改成功'}")
      }
    })
  }
})

module.exports = router;
