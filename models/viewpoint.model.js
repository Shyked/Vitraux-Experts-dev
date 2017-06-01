const Hypertopic = require('../node_modules/hypertopic/index.js');

db = new Hypertopic([
  "http://argos2.hypertopic.org",
  "http://steatite.hypertopic.org"
]);



//Get one user
exports.getById = function(callback, id) {
  console.log('we are looking for '+id)
  db.getView('/viewpoint/'+id, x => {
    var rows = x;
    callback(null, rows)
  })
}
