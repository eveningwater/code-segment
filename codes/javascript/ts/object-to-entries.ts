const objectToEntries = <T>(obj: Record<string, T>) => Object.keys(obj).map(k => [k,obj[k]]);

objectToEntries({ a: 1, b: 2 }); // [ ['a', 1], ['b', 2] ]