const maxBy = <T>(arr:T[], fn: ((item: T) => number) | string): number => Math.max(...arr.map(typeof fn === "function" ? fn : val => val[fn]));

maxBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], x => x.n); // 8
maxBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 8