var frisby = require('frisby');
frisby.create('Get Collection by User Benel')
  .get('http://localhost:3000/api/corpus/Vitraux%20-%20B%C3%A9nel')
  .expectStatus(200)
.toss();