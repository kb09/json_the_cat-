// require the request library,
const request = require('request');

//URL which will return cat breed results.
const breedData = function(breedName, callback) {

  const url = 'https://api.thecatapi.com/v1/breeds/search';

  //Access the first entry in the data array and print out the description

  const descrp = data[0].description
  }

  // convert the JSON string into an actual object

  const data = JSON.parse(body);
  console.log(data);
  console.log(typeof data);
}