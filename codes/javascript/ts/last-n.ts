const lastN = <T>(arr: T[], n: number) => arr.slice(-n);

lastN(["a", "b", "c", "d"], 2); // ['c', 'd']