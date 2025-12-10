const objectFromPairs = <T>(arr:Iterable<T[]>) => [...arr].reduce<Record<string,T>>((res,[key,val]) => ((res[key as string] = val),res),{});

objectFromPairs([['a', 1], ['b', 2]]); // {a: 1, b: 2}
objectFromPairs(new Map([['a', 1], ['b', 2]])); // {a: 1, b: 2}