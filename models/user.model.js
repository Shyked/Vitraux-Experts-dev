const Hypertopic = require('../node_modules/hypertopic/index.js');

db = new Hypertopic([
  "http://argos2.hypertopic.org",
  "http://steatite.hypertopic.org"
]);


//Get all users /!\ not working
exports.all = function(callback) {
  console.log('all users')
  db.getView('/user', x => {
    var rows = x;
    callback(null, rows)
  })


}

//Get one user
exports.byUsername = function(callback, name, from) {
  console.log('we are looking for '+name)
  db.getView('/user/'+name, x => {
    var rows = x;
    callback(null, rows)
  })
}

// exports.byId = function(callback, id, from) {
// 	console.log(query)
// 	var query = "SELECT t.*, count(f.id) as fol FROM (SELECT uf.* FROM users_full uf WHERE uf.id = ?) t LEFT JOIN follow f ON f.from = ? AND f.to = ? GROUP BY t.id "
// 	var inserts = [id,from,id]
// 	query = mysql.format(query, inserts);
// 	console.log(query)
// 	connection.query(query, function(err, rows, fields) {
// 	callback(err, rows)
// });
// }
//
// exports.create = function(user_body, callback) {
// 	var query = "INSERT INTO users SET ?";
// 	var query = connection.query(query, user_body, function(err, result) {
// 		console.log(query.sql)
// 	callback(err, result)
// });
// }
//
// exports.follow = function(arg, callback) {
// 	console.log(JSON.stringify(arg))
// 	var query = "SELECT * FROM follow f WHERE f.from = ? AND f.to = ? "
// 	var inserts = [arg.from, arg.to]
// 	var query = connection.query(query, inserts, function(err, result) {
//
// 	if (err) {
// 		callback(err)
// 	}
// 	else {
// 		if (result && result.length > 0) {
// 			console.log(JSON.stringify(result))
// 			var query = "DELETE FROM follow WHERE id = ?";
// 			var inserts = [result[0].id]
// 			var query = connection.query(query, inserts, function(err, result) {
// 			console.log(query.sql)
// 			callback(err, result)
// 		});
// 		}
// 		else {
// 			console.log(JSON.stringify(result))
// 			var query = "INSERT INTO follow SET ? "
// 			connection.query(query, {from: arg.from, to: arg.to}, function(err, rows, fields) {
// 			callback(err, rows)
// 			});
// 		}
// 	}
// });
// }
