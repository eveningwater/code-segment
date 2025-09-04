const isDeepFrozen = (obj) =>
  Object.isFrozen(obj) &&
  Object.keys(obj).every(
    (val) => typeof val !== "object" || isDeepFrozen(obj[val])
  );

const x = Object.freeze({ a: 1 });
const y = Object.freeze({ b: { c: 2 } });
isDeepFrozen(x); // true
isDeepFrozen(y); // false
