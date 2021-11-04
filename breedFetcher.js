// require the request library,
const request = require('request');

//URL which will return cat breed results.
const breedData = function(breedName, callback) {

  const url = 'https://api.thecatapi.com/v1/breeds/search';

  request(url, function(error, respnose, body){
    // if error
    if(error) {
      return callback(error,null); 
    
    }


  

  // convert the JSON string into an actual object

  const data = JSON.parse(body);
  
  console.log(data);
  console.log(typeof data);

  //Access the first entry in the data array and print out the description

  // const descrp = data[0].description
  
  if(data[0]) {
      let descpt = data[0]['description'];
      return callback(null,descpt);
    } else {
       let noDescpt = "Breed not found"; // if breed name not found 
       return callback(noDescpt,null);
    }
  }); // end of request function 
}; // end of breedData function

  


  