var frisby = require('frisby');
frisby.create('Get Collection by corpus User Benel')
  .get('http://localhost:3001/api/corpus/Vitraux%20-%20B%C3%A9nel')
  .expectStatus(200)
  .expectJSONTypes("Vitraux - Bénel", {
    name: Array,
	user: Array
})
  .expectJSON("Vitraux - Bénel", {
    name: ["Vitraux - Bénel"]
})
  .expectJSON("Vitraux - Bénel", {
    user: ["aaf"]
})
.toss();