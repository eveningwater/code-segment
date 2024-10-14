const allUnique = <T>(arr:T[]) => arr.length === new Set(arr).size;

allUnique([1, 2, 3, 4]); // true
allUnique([1, 1, 2, 3]); // false