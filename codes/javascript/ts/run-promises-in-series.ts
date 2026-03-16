   const runPromisesInSeries = (ps: Array<() => Promise<any>>) =>
            ps.reduce((p, next) => p.then(next), Promise.resolve());

const delay = (d: number) => new Promise(r => setTimeout(r, d));
runPromisesInSeries([() => delay(1000), () => delay(2000)]);
// Executes each promise sequentially, taking a total of 3 seconds to complete