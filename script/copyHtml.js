const fs = require('fs');

fs.copyFile('./build/index.html', './build/secondPage.html', (err) => {
  if (err) {
    console.log('Error during copying index.html');
    throw err;
  }
});
