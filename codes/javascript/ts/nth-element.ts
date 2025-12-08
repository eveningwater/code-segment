const nthElement = <T>(arr:T[],n = 0) => (n === -1 ? arr.slice(n) : arr.slice(n,n + 1))[0];

nthElement(['a', 'b', 'c'], 1); // 'b'
nthElement(['a', 'b', 'b'], -3); // 'a'