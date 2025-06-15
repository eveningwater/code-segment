const generatorToArray = <T>(gen: IterableIterator<T>) => [...gen];

const s = new Set([1, 2, 1, 3, 1, 4]);
generatorToArray(s.entries()); // [[ 1, 1 ], [ 2, 2 ], [ 3, 3 ], [ 4, 4 ]]
