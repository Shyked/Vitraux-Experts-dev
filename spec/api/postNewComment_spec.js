var frisby = require('frisby');
frisby.create('Post New Comment')
    .post('http://localhost:3000/api/comment', {
    arr: [1, 2, 3, 4],
    foo: "bar",
    bar: "baz",
    answer: 42
  })
  .expectStatus(201)
.toss();

