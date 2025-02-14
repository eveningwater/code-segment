const chunkify = function* <T>(itr: Iterable<T>, size: number) {
  let chunk: T[] = [];
  for (const item of itr) {
    chunk.push(item);
    if (chunk.length === size) {
      yield chunk;
      chunk = [];
    }
  }
  if (chunk.length) {
    yield chunk;
  }
};

const x = new Set([1, 2, 1, 3, 4, 1, 2, 5]);
const a = [...chunkify(x, 2)];
console.log(a); // [[1, 2], [3, 4], [5]]
