Viewpoint = require('../models/viewpoint.model');
Helper = require('../helpers/helper.js');



exports.getById = function(req, res) {
	Viewpoint.getById(function (err, viewpoint) {
		console.log(err, viewpoint)
    if (!err) {
			res.send(viewpoint)
	}
	else {
		res.send(err.message)
	}
}, req.params.viewpointId)
};
