corpusCtrl = require('../controllers/corpus.controller');
var express = require('express')
	, router = express.Router();




router.route('/:corpusName')
	.get(corpusCtrl.getByUsername)

router.route('/:corpusNamee/:itemId')
	.get(corpusCtrl.getItemById)

router.route('/comment')
	.post(corpusCtrl.create_comment)

router.route('/:corpusNameee/:itemIdd/comment')
	.get(corpusCtrl.get_comments)



router.param('corpusName', corpusCtrl.getByUsername);
router.param('corpusNamee', corpusCtrl.getItemById);
router.param('corpusNameee', corpusCtrl.get_comments);
router.param('itemId', corpusCtrl.getItemById);
router.param('itemIdd', corpusCtrl.get_comments);


module.exports = router;
