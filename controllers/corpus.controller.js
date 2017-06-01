Corpus = require('../models/corpus.model');
Helper = require('../helpers/helper.js');



exports.getByUsername = function(req, res) {
	Corpus.byUsername(function (err, corpus) {
		//console.log(err, corpus)
    if (!err) {
			res.send(corpus)
	}
	else {
		res.send(err.message)
	}
}, req.params.corpusName)
};

exports.getItemById = function(req, res) {
	Corpus.getItemById(function (err, item) {
		//console.log(err, item)
    if (!err) {
			res.send(item)
	}
	else {
		res.send(err.message)
	}
}, req.params.corpusNamee, req.params.itemId)
};
