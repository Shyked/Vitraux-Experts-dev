var express = require('express');
var router = express.Router();
var users  = require('./users');
var corpus  = require('./corpus');
var viewpoint  = require('./viewpoint');



//routes/users
router.use('/users', users)
router.use('/corpus', corpus)
router.use('/viewpoint', viewpoint)

module.exports = router;
