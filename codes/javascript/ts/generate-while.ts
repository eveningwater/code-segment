const generateWhile = function* <T, U>(
  seed: T,
  condition: (val: T) => boolean,
  next: (val: T, nextSeed: U | null) => T
) {
  let val = seed;
  let nextSeed: U | null = null;
  while (condition(val)) {
    nextSeed = yield val;
    val = next(val, nextSeed);
  }
  return val;
};

const whileRes = [
  ...generateWhile(
    1,
    (v) => v <= 5,
    (v) => ++v
  ),
]; // [1, 2, 3, 4, 5]
