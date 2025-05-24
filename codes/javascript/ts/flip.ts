const flip =
  <T, U>(handler: (...args: T[]) => U) =>
  (first: T, ...rest: T[]) =>
    handler(...rest, first);

let a = { name: "John Smith" };
let b = {};
const mergeFrom = flip(Object.assign);
let mergePerson = mergeFrom.bind(null, a);
mergePerson(b); // == b
b = {};
Object.assign(b, a); // == b
