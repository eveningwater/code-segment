// const bifurcateBy = <T>(arr: T[], handler: (v:T,i:number) => boolean) =>
//   arr.reduce<T[][]>(
//     (acc, val, i) => (acc[handler(val, i) ? 0 : 1].push(val), acc),
//     [[], []]
//   );
const bifurcateBy = <T>(arr: T[], handler: (v: T, i: number) => boolean) => arr.reduce<T[][]>((acc, val, i) => (acc[Number(!handler(val, i))].push(val), acc), [[], []]);
bifurcateBy(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b');
// [ ['beep', 'boop', 'bar'], ['foo'] ]