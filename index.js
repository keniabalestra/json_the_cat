const { fetchBreedDescription } = require('./breedFetcher_refactored');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    //console.log('Error fetch details:', error);
    return error;
  } else {
    //console.log(desc);
    return desc;
  }
});