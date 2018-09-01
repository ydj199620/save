var mongo = require('mongodb');
var mongoClient = mongo.MongoClient;
var url = 'mongodb://127.0.0.1:27017';
var insert1 =function(a1,a2,a3,a4,fn){//传client值、数据库、数据集合、插入数据字段
    var dbs = a1.db(a2);
    var coll = dbs.collection(a3);
    coll.insert(a4,function(err,result){
        if(err){
            throw err
        }
        fn(result)
        a1.close();//关闭连接
    })
}
//删除
var remove1 =function(a1,a2,a3,a4,fn){//传client值、数据库、数据集合、插入数据字段
    var dbs = a1.db(a2);
    var coll = dbs.collection(a3);
    coll.remove(a4,function(err,result){
        if(err){
            throw err
        }
        fn(result)
        a1.close();//关闭连接
    })
}
//查找
var find1=function(a1,a2,a3,a4,fn){
    var dbs = a1.db(a2);
    var coll = dbs.collection(a3);
    coll.find(a4).toArray(function(err,result){
        if(err){
            throw err
        }
        fn(result)
        a1.close();//关闭连接
    })
}
//修改
var upData=function(a1,a2,a3,a4,fn){
    var dbs = a1.db(a2);
    var coll = dbs.collection(a3);
    coll.updateMany(a4[0],a4[1],function(err,result){
        if(err){
            throw err
        }
        fn(result)
        a1.close();//关闭连接
    })
}
var typeDate = {
    insert1:insert1,
    remove1:remove1,
    find1:find1,
    upData:upData
}
module.exports = function(type,a2,a3,a4,fn){
    mongoClient.connect(url,function(err,client){
        if(err){
            throw err
        }
        typeDate[type](client,a2,a3,a4,fn);
    })
}
