var frisby = require('frisby');
frisby.create('Like a Comment')
///corpus/comment with body {id_item: varchar, id_corpus: varchar, user: varchar, text: varchar
    .put('http://localhost:3001/api/corpus/comment/like/', {
    id: 4
  })
  .expectStatus(200)
.toss();


frisby.create('Dislike a Comment')
///corpus/comment with body {id_item: varchar, id_corpus: varchar, user: varchar, text: varchar
    .put('http://localhost:3001/api/corpus/comment/dislike/', {
  id: 4
  })
  .expectStatus(200)
.toss();

