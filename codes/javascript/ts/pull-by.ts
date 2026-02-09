type ArgsWithLastFunc<T, F> = [...T[][], (v: T) => F];

const pullBy = <T, F>(arr: T[], ...args: ArgsWithLastFunc<T, F>) => {
    const length = args.length;
    let fn = length > 1 ? args[length - 1] : undefined;
    fn = (typeof fn === 'function' ? (args.pop(), fn) : undefined) as (v: T) => F;
    let argState = (Array.isArray(args[0]) ? args[0] : args).map(val => fn(val as T));
    let pulled = arr.filter((v) => !argState.includes(fn(v)));
    arr.length = 0;
    pulled.forEach(v => arr.push(v));
};

var myPullByArray: { x: number; }[] = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 1 }];
pullBy(myPullByArray, [{ x: 1 }, { x: 3 }], o => o.x); // myArray = [{ x: 2 }]