// Dependencies: nodeJS
const https = require('node:https');

// Method get 
https.get('https://rickandmortyapi.com/api/character/499', (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  // Get data from the response
  res.on('data', (d) => {
    process.stdout.write(d);
  });

// Error handling
}).on('error', (e) => {
  console.error(e);
}); 