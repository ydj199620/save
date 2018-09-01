var express = require('express');
var router = require('./router.js');
var path = require('path');
var add = express();
add.use(express.static(path.join(__dirname,'guanwang')))
add.use('/hhh',router)
add.listen(8080)