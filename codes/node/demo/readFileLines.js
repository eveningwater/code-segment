const fs = require('fs');
const readFileLines = filename => {
  return fs.readFileSync(filename).toString('UTF8').split('\n');
};

let arr = readFileLines('test.txt');
console.log(arr); // [xxx]