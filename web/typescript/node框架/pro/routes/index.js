var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var mongoClient = mongo.MongoClient;
var url = 'mongodb://127.0.0.1:27017';

/* GET home page. */
router.get('/haha', function(req, res) {
  if(req.query.action=='find'){
    mongoClient.connect(url,function(err,client){
      if(err){
        throw err
      }
      var dbs = client.db('aa')
      var coll = dbs.collection('aa');
      coll.find(null).toArray(function(err,result){
        if(err){
          throw err
        }
        res.send(result)
      })
    })
  }
});

module.exports = router;
