var frisby = require('frisby');
frisby.create('Get item comments')
//  ITEM_comments : /corpus/Vitraux - Bénel/00745c3e27d91d00e3d4db33828dd8797e9c2195/comment
  .get('http://localhost:3001/api/corpus/_fake_corpus_/_fake_item_/comment')
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
//  ITEM_comments : /corpus/Vitraux - Bénel/00745c3e27d91d00e3d4db33828dd8797e9c2195/comment
  .get('http://localhost:3001/api/corpus/NONDEFINI/comment/NONDEFINI/comment')
  .expectStatus(404)
.toss();