var frisby = require('frisby');
frisby.create('Post New Source')
/// ITEM_source : /corpus/source with body {id_item: varchar, id_corpus: varchar, id_user: varchar, text: varchar, url: 
    .post('http://localhost:3000/api/corpus/source', {
    id_item: "_fake_item_",
    id_corpus: "_fake_corpus_",
    id_user: "baz",
	url: "http://wwww.utt.fr"
  })
  .expectStatus(200)
.toss();


