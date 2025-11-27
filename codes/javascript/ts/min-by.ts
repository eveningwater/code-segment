const minBy = <T>(arr: T[],fn: ((item: T) => number) | string) => Math.min(...arr.map(typeof fn === 'function' ? fn : val => val[fn]));

minBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], x => x.n); // 2
minBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 2