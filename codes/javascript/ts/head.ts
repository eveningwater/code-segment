const head = <T>(arr: T[] | null | undefined) => (Array.isArray(arr) && arr.length ? arr[0] : void 0);

head([1, 2, 3]); // 1
head([]); // undefined
head(null); // undefined
head(undefined); // undefined