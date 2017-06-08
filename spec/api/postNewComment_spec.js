var frisby = require('frisby');
frisby.create('Post New Comment')
///corpus/comment with body {id_item: varchar, id_corpus: varchar, user: varchar, text: varchar
    .post('http://localhost:3000/api/corpus/comment', {
    id_item: "_fake_item_",
    id_corpus: "_fake_corpus_",
    user: "baz",
    text: "Ceci est un commentaire de test"
  })
  .expectStatus(200)
.toss();


