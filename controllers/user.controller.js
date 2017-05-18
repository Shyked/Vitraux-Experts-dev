User = require('../models/user.model');
Helper = require('../helpers/helper.js');


/* GET home page. */
exports.list = function(req, res) {
	User.all(function (err, user) {
    if (!err) {
	res.send(user)	
	}
	else {
		res.send(err.message)
	}
  })
};

exports.get = function(req, res) {
	User.byId(function (err, user) {
    if (!err) {
			res.send(user)
	}
	else {
		res.send(err.message)
	}
  }, req.params.id, req.query.user)
};

exports.getByUsername = function(req, res) {
	User.byUsername(function (err, user) {
		console.log(err, user)
    if (!err) {
			res.send(user)
	}
	else {
		res.send(err.message)
	}
  }, req.params.userName, req.query.user)
};

exports.post = function(req, res) {
	
			User.create(req.body, function(err, response) {	
				if (!err) {
				res.send(response)	
				}
				else {
					res.send(err.message)
				}
			})
}

exports.follow = function(req, res) {
		var arg = {from: req.query.from, to: req.query.to};
		User.follow(arg, function (err, response) {
		if(!err) {
			res.send(response)
		}
		else {
			res.send(err.message)
		}
	})
}