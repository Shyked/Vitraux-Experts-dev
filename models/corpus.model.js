const Hypertopic = require('../node_modules/hypertopic/index.js');

db = new Hypertopic([
  "http://argos2.hypertopic.org",
  "http://steatite.hypertopic.org"
]);


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
