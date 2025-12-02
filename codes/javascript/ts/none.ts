const none = <T>(arr:T[], fn:(value: T, index: number, array: T[]) => boolean = Boolean) => !arr.some(fn);

none([0, 1, 3, 0], x => x == 2); // true
none([0, 0, 0]); // true