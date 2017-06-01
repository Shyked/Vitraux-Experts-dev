var frisby = require('frisby');
frisby.create('Get User AAF ')
  .get('http://localhost:3000/api/users/aaf')
  .expectStatus(200)
  .expectJSON(
{"aaf":{"viewpoint":[{"id":"56e092d8a6179a788c74b618b29801c0","name":"Histoire des religions"},{"id":"a76306e4f17ed4f79e7e481eb9a1bd06","name":"Histoire de l'art"}],"corpus":[{"id":"Vitraux - Bénel","name":"Vitraux - Bénel"},{"id":"Vitraux - Dr. Krieger","name":"Vitraux - Dr. Krieger"},{"id":"Vitraux - Recensement","name":"Vitraux - Recensement"}]}}
)
.toss();