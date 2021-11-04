// require the request library,
const request = require('request');

//URL which will return cat breed results.
const breedData = function(breedName, callback) {

  const url = 'https://api.thecatapi.com/v1/breeds/search';

  // convert the JSON string into an actual object

  const data = JSON.parse(body);
  console.log(data);
  console.log(typeof data);

  //Access the first entry in the data array and print out the description

  const descrp = data[0].description

  if(data[0]) {
      let desc = data[0]['description'];
      return callback(null,desc);
    } else {
       let noDesc = "Breed not found"; // if breed name not found 
       return callback(noDesc,null);
    }

  } // end of breedData function

  


  