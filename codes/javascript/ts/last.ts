const last = <T>(arr: T[] | null | undefined) => arr && arr.length ? arr[arr.length - 1] : undefined;

last([1, 2, 3]); // 3
last([]); // undefined
last(null); // undefined
last(undefined); // undefined
