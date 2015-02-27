var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/about', function(req, res) {
  res.render('about',{ title: 'ATuna - 了解Tuna' });
});


module.exports = router;
