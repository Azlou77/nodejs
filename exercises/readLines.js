// Dependencies NodeJS
const { open } = require('node:fs/promises');

// Read lines from a file
(async () => {
  const file = await open('index.html', 'r');

  for await (const line of file.readLines()) {
    console.log(line);
  }
})();

/*Other options use the fs module with the readFileSync method for big files
  const fs = require('node:fs');

  fs.readFile('/Users/joe/test.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });

*/