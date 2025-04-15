const dropRight = <T>(arr: T[], n = 1) => arr.slice(0, -n);

dropRight([1, 2, 3]); // [1, 2]
dropRight([1, 2, 3], 2); // [1]
dropRight([1, 2, 3], 42); // []
