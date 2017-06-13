var express = require('express');
var index = require('./routes/index');
var app = express();
var bodyParser = require('body-parser');
//var multer  = require('multer')
//var upload = multer({ dest: 'medias/posts/'});
var fs = require('fs');



 app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return next();
  });



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



	app.use('/api', index);
	//app.use('/static', express.static('./medias'));



app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});
