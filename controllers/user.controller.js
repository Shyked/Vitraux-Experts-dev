User = require('../models/user.model');
Helper = require('../helpers/helper.js');



exports.getByUsername = function(req, res) {
	User.byUsername(function (err, user) {
		console.log(err, user)
    if (!err) {
			res.send(user)
	}
	else {
		res.send(err.message)
	}
  }, req.params.userName)
};
