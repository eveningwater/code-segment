const generateUntil = function* <T, U>(
  seed: T,
  condition: (val: T) => boolean,
  next: (val: T, nextSeed: U) => T
) {
  let val = seed;
  let nextSeed: U | null = null;
  while (!condition(val)) {
    nextSeed = yield val;
    val = next(val, nextSeed as U);
  }
  return val;
};

const res = [
  ...generateUntil(
    1,
    (v) => v > 5,
    (v) => ++v
  ),
]; // [1, 2, 3, 4, 5]
