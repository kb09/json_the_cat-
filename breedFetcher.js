// require the request library,
const request = require('request');

//URL which will return cat breed results.
const fetchBreedDescription = function(breedName, callback) {

  const url = 'https://api.thecatapi.com/v1/breeds/search';

  // convert the JSON string into an actual object
  
  const data = JSON.parse(body);
  console.log(data);
  console.log(typeof data);
}