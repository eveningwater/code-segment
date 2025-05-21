const flatIterator = function* <T>(iter: Iterable<T>) {
  for (let item of iter) {
    if (item[Symbol.iterator]) {
      yield* flatIterator(item as Iterable<T>);
    } else {
      yield item;
    }
  }
};
const arr = [1, 2, [3, 4], [5, [6, [7], 8]], 9, new Set([10, 11])];
[...flatIterator(arr)]; // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
