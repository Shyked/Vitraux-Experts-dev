const Hypertopic = require('../node_modules/hypertopic/index.js');

db = new Hypertopic([
  "http://argos2.hypertopic.org",
  "http://steatite.hypertopic.org"
]);



//Get one user
exports.byUsername = function(callback, name) {
  console.log('we are looking for '+name)
  db.getView('/user/'+name, x => {
    var rows = x;
    callback(null, rows)
  })
}
