viewpointCtrl = require('../controllers/viewpoint.controller');
var express = require('express')
	, router = express.Router();




router.route('/:viewpointId')
	.get(viewpointCtrl.getById)



router.param('viewpointId', viewpointCtrl.getById);


module.exports = router;
