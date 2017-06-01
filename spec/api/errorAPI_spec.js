var frisby = require('frisby');
frisby.create('Get NO User AAF ')
  .get('http://localhost:3000/api/userSS/NOUSERaaf')
  .expectStatus(404)
.toss();