// const bifurcate = <T, U>(arr: T[], filter: U[]) =>
//     arr.reduce<T[][]>(
//         (acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc),
//         [[], []]
//     );

const bifurcate = <T, U>(arr: T[], filter: U[]) => arr.reduce<T[][]>((acc, val, i) => (acc[Number(!filter[i])].push(val), acc), [[], []]);
bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]);
// [ ['beep', 'boop', 'bar'], ['foo'] ]