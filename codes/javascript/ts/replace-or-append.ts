const replaceOrAppend = <T>(arr: T[], val: T, compFn: (a: T, b: T) => boolean) => {
  const res = [...arr];
  const i = res.findIndex(v => compFn(v, val));
  if (i === -1) {
    res.push(val);
  } else {
    res.splice(i, 1, val);
  }
  return res;
};

const people = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 28 }
];
const jane = { name: 'Jane', age: 29 };
const jack = { name: 'Jack', age: 28 };
replaceOrAppend(people, jane, (a, b) => a.name === b.name);
// [ { name: 'John', age: 30 }, { name: 'Jane', age: 29 } ]
replaceOrAppend(people, jack, (a, b) => a.name === b.name);
// [
//   { name: 'John', age: 30 },
//   { name: 'Jane', age: 28 },
//   { name: 'Jack', age: 28 }
// ]