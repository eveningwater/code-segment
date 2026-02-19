const rangeGenerator = function* (start: number, end: number, step = 1) {
  let i = start;
  while (i < end) {
    yield i;
    i += step;
  }
};

for (let i of rangeGenerator(6, 10)) console.log(i);
// Logs 6, 7, 8, 9