const differenceBy = <T, U>(a: T[], b: T[], handler: (value: T, index: number, array: T[]) => U) => {
    const s = new Set(b.map(handler));
    return a.map(handler).filter(x => !s.has(x));
};

differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [1]
differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], v => v.x); // [2]