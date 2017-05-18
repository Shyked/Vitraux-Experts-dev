userCtrl = require('../controllers/user.controller');
var express = require('express')
	, router = express.Router();


// router.route('/')
// 	.get(userCtrl.list)
// 	.post(userCtrl.post)

router.route('/follow')
	.post(userCtrl.follow)

// router.route('/:id')
// 	.get(userCtrl.get)

router.route('/:userName')
	.get(userCtrl.getByUsername)



router.param('userName', userCtrl.getByUsername);
router.param('id', userCtrl.get);


module.exports = router;
