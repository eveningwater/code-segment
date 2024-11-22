const cartesianProduct = <T, U>(a: T[], b: U[]) =>
    a.reduce<(T | U)[][]>((p, x) => [...p, ...b.map(y => [x, y])], []);

cartesianProduct(['x', 'y'], [1, 2]);
// [['x', 1], ['x', 2], ['y', 1], ['y', 2]]