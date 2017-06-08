var frisby = require('frisby');
frisby.create('Get item comments')
  .get('http://localhost:3000/api/comment/Vitraux%20-%20B%C3%A9nel/0105eaada11cf24bc10d723c48ef6ab11d15880f')
  .expectStatus(200)
  .expectJSONTypes("Vitraux - Bénel", {
	  "0105eaada11cf24bc10d723c48ef6ab11d15880f": Object
})
  .expectJSONTypes("Vitraux - Bénel.0105eaada11cf24bc10d723c48ef6ab11d15880f", {
	  creator: Array,
	  resource: Array,
	  spatial: Array,
	  name: Array,
	  thumbnail: Array,
	  created: Array  
})
  .get('http://localhost:3000/api/comment/NONDEFINI')
  .expectStatus(404)
.toss();

