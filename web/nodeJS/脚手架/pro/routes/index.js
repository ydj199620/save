var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('index666.html')
});
router.get('/hhh', function(req, res, next) {
  res.send(req.query);
});

module.exports = router;
