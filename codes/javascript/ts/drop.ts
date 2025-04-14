const drop = <T>(arr:T[], n = 1) => arr.slice(n);

drop([1, 2, 3]); // [2, 3]
drop([1, 2, 3], 2); // [3]
drop([1, 2, 3], 42); // []