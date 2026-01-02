const omit = <T>(obj: Record<string, T>,arr: string [] = []) => Object.keys(obj).filter(k => !arr.includes(k)).reduce<Record<string,T>>((acc,item) => (acc[item] = obj[item],acc),{});

omit({ a: 1, b: '2', c: 3 }, ['b']); // { 'a': 1, 'c': 3 }