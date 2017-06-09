var frisby = require('frisby');
frisby.create('Get item by Corpus/Id')
  .get('http://localhost:3001/api/corpus/Vitraux%20-%20B%C3%A9nel/0105eaada11cf24bc10d723c48ef6ab11d15880f')
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
  .expectJSON({
  "Vitraux - Bénel": {
    "0105eaada11cf24bc10d723c48ef6ab11d15880f": {
      "creator": [
        "Aurélien Bénel"
      ],
      "resource": [
        "http://steatite.hypertopic.org/picture/0105eaada11cf24bc10d723c48ef6ab11d15880f"
      ],
      "spatial": [
        "Église Sainte-Savine, Sainte-Savine"
      ],
      "name": [
        "SS 011"
      ],
      "thumbnail": [
        "http://steatite.hypertopic.org/thumbnail/0105eaada11cf24bc10d723c48ef6ab11d15880f"
      ],
      "created": [
        "2016-09-17"
      ]
    }
  }
})
.toss();

