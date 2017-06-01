var frisby = require('frisby');
frisby.create('Get Collection by User Benel')
  .get('http://localhost:3000/api/corpus/Vitraux%20-%20B%C3%A9nel/0105eaada11cf24bc10d723c48ef6ab11d15880f')
  .expectStatus(200)
.toss();