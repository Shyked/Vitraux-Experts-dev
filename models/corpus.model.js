const Hypertopic = require('../node_modules/hypertopic/index.js');

db = new Hypertopic([
  "http://argos2.hypertopic.org",
  "http://steatite.hypertopic.org"
]);

var nano = require('nano')('http://localhost:3306');
var vitraux_db = nano.db.use('vitraux-db');
var fs = require('fs');
var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'server',
  password : 'aqwzsxedc',
  database : 'vitraux-db'
});


//Get one corpus
exports.byUsername = function(callback, name) {
  console.log('we are looking for '+name)
  db.getView('/corpus/'+name, x => {
    var rows = x;
    callback(null, rows)
  })
}

//Get one item
exports.getItemById = function(callback, name, id) {
  console.log('we are looking for '+name)
  db.getView('/item/'+name+'/'+id, x => {
    var rows = x;
    callback(null, rows)
  })
}

//create comment on a specific item
exports.create_comment = function(post_body, callback) {
	var query = "INSERT INTO comments SET ?";
	var query = connection.query(query, post_body, function(err, result) {
		console.log(query.sql)
	callback(err, result)
});
}

//Get comments for one specific item
exports.getComments = function(callback, id_corpus, id_item) {
  	var query = "SELECT * FROM comments WHERE id_corpus = ? AND  id_item = ?"
  	var inserts = [id_corpus, id_item]
  	query = mysql.format(query, inserts);
  	connection.query(query, function(err, rows, fields) {
  	callback(err, rows)
  });
}

//add source on a specific item
exports.add_source = function(post_body, callback) {
	var query = "INSERT INTO sources SET ?";
	var query = connection.query(query, post_body, function(err, result) {
		console.log(query.sql)
	callback(err, result)
});
}

//Get sources for one specific item
exports.getSources = function(callback, id_corpus, id_item) {
  	var query = "SELECT * FROM sources WHERE id_corpus = ? AND  id_item = ?"
  	var inserts = [id_corpus, id_item]
  	query = mysql.format(query, inserts);
  	connection.query(query, function(err, rows, fields) {
  	callback(err, rows)
  });
}
