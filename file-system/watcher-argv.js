const fs = require('fs'),
      filename = process.argv[2];

if (!filename) {
  throw Error('A file to watch must be specified!')
}

// make sure the file exists before proceeding. statSync will trigger
// an error if the file is missing from the file system.
fs.statSync(filename)

fs.watch(filename, function() {
  console.log(`File ${filename} just changed!`)
})

console.log(`Now watching ${filename} for changes...`)
