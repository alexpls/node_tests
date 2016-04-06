'use strict'

const file = require('file'),
      rdfParser = require('./lib/rdf-parser.js');

console.log('beginning directory walk')

// this is meant to serve as an example and exhaust the system's
// allowed number of open file descriptors
file.walk(__dirname + '/cache', function(err, dirPath, dirs, files) {
  files.forEach(function(path) {
    rdfParser(path, function(err, doc) {
      if (err) { throw err; }
      console.log(doc)
    })
  })
})
