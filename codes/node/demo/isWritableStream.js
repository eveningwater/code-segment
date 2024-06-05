const fs = require('fs');
const isWritableStream = val =>
  val !== null &&
  typeof val === 'object' &&
  typeof val.pipe === 'function' &&
  typeof val._write === 'function' &&
  typeof val._writableState === 'object';
console.log(isWritableStream(fs.createWriteStream('test.txt')));
