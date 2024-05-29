const fs = require('fs');
const isStream = val =>
  val !== null && typeof val === 'object' && typeof val.pipe === 'function';
console.log(isStream(fs.createReadStream('test.txt'))); // true
