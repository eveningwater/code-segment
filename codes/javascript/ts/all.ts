

type EveryParamter<T> = (this: void, value: T, index: number, array: T[]) => boolean
const all = <T extends unknown>(arr: T[], fn: EveryParamter<T> = Boolean) => arr.every(fn);

all([4, 2, 3], x => x > 1); // true
all([1, 2, 3]); // true
all([1, 2, 3], x => x < 2); //false