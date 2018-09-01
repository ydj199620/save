var express = require('express');
var path = require('path');
var a = express();
a.use(express.static(path.join(__dirname,'guanwang')));
a.listen(9999);