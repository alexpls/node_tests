const fs = require('fs')

fs.writeFile('target.txt', 'hey hey', function(err) {
  if (err) { throw err; }
  console.log('File saved!')
})
