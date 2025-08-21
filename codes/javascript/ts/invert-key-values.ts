const invertKeyValues = <T>(obj: Record<string, T>, handler?: (value: T) => string) =>
  Object.keys(obj).reduce<Record<string, string[]>>((acc, key) => {
    const val = (handler ? handler(obj[key]) : obj[key]) as string;
    acc[val] = acc[val] || [];
    acc[val].push(key);
    return acc;
  }, {});

invertKeyValues({ a: 1, b: 2, c: 1 }); // { 1: [ 'a', 'c' ], 2: [ 'b' ] }
invertKeyValues({ a: 1, b: 2, c: 1 }, (value) => "group" + value);
// { group1: [ 'a', 'c' ], group2: [ 'b' ] }
