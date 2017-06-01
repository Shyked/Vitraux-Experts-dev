corpusCtrl = require('../controllers/corpus.controller');
var express = require('express')
	, router = express.Router();




router.route('/:corpusName')
	.get(corpusCtrl.getByUsername)

router.route('/:corpusNamee/:itemId')
	.get(corpusCtrl.getItemById)



router.param('corpusName', corpusCtrl.getByUsername);
router.param('corpusNamee', corpusCtrl.getItemById);
router.param('itemId', corpusCtrl.getItemById);


module.exports = router;
