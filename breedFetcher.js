const request = require('request');

const args = process.argv.slice(2);
let breed = args[0];


const breedFetcher = function(breed) {
  request.get(('https://api.thecatapi.com/v1/breeds/search?q=' + breed), (err, res, body) => {
    if (err) {
      return console.log(err);
    }
    const data = JSON.parse(body);
    const breed = data[0];

    if (!breed) {
      console.log("Breed not found!");
      return;
    }
    console.log(breed.description);
  });
};
breedFetcher(breed);