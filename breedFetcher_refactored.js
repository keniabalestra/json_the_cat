const request = require('request');





const fetchBreedDescription = function(breedName, callback) {
  request.get(('https://api.thecatapi.com/v1/breeds/search?q=' + breedName), (err, res, body) => {
    if (err) {
      callback(err, null);
    }
    const data = JSON.parse(body);
    const breed = data[0];

    if (breed) {
      callback(null, breed.description);
    } else {
      callback("Breed not found!", null);
    }
  });
};
//breedFetcher(breedName);


module.exports = { fetchBreedDescription };