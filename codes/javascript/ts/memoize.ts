const memoize = <T, U>(fn: (...args: T[]) => U) => {
  const cache = new Map();
  const cached = (val: T) =>
    cache.has(val)
      ? cache.get(val)
      : cache.set(val, fn.call(this, val)) && cache.get(val);
  cached.cache = cache;
  return cached;
};

const median = <T extends number>(arr: T[]) => {
  const mid = Math.floor(arr.length / 2),
    newArr = arr.sort((a, b) => a - b);
  return arr.length % 2 !== 0
    ? newArr[mid]
    : (newArr[mid - 1] + newArr[mid]) / 2;
};
const medianCache = memoize<number[], number>(median);
medianCache([5, 6, 50, 1, -5]);
medianCache([5, 6, 50, 1, -5]);
console.log(medianCache.cache); // Map(2) { [ -5, 1, 5, 6, 50 ] => 5, [ -5, 1, 5, 6, 50 ] => 5 }
