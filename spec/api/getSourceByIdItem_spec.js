var frisby = require('frisby');
frisby.create('Get item sources')
//  ITEM_sources : /corpus/Vitraux - Bénel/00745c3e27d91d00e3d4db33828dd8797e9c2195/sources
  .get('http://localhost:3000/api/corpus/_fake_corpus_/_fake_item_/sources')
  .expectStatus(200)
    .expectJSONTypes("0", {
    id: Number,
	id_item: String,
	id_corpus: String,
	user: String,
	text: String,
	date: String,
})
.toss();

frisby.create('Get item comments ERROR')
  .get('http://localhost:3000/api/corpus/NONDEFINI/comment/NONDEFINI/sources')
  .expectStatus(404)
.toss();