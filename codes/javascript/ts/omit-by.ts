const omitBy = <T>(obj: Record<string, T>,fn: (value: T, key: string) => boolean) => Object.keys(obj).filter(k => !fn(obj[k],k)).reduce<Record<string,T>>((acc,key) => (acc[key] = obj[key],acc),{});

omitBy({ a: 1, b: '2', c: 3 }, x => typeof x === 'number'); // { b: '2' }