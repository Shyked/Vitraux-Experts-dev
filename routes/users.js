userCtrl = require('../controllers/user.controller');
var express = require('express')
	, router = express.Router();




router.route('/:userName')
	.get(userCtrl.getByUsername)



router.param('userName', userCtrl.getByUsername);


module.exports = router;
