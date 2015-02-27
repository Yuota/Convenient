var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{ title: 'ATuna - Together the fly' });
});

router.get('/member', function(req, res, next) {
	res.render('member',{ title: 'ATuna - Happiness is beginning, happiness continuation' });
});

router.get('/architecture', function(req, res, next) {
	res.render('architecture',{ title: 'ATuna - Mass originates from self service comes from itself' });
});

router.get('/about', function(req, res, next) {
	res.render('about',{ title: 'ATuna - It is high time to change the Act' });
});

module.exports = router;
