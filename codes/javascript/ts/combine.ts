const combine = <T,U>(a:T[], b:U[], prop:string) =>
  Object.values<T & U>(
    [...a, ...b].reduce((acc, v) => {
      const item = v[prop];
      if (item) {
        acc[item] = acc[item] ? { ...acc[item], ...v } : { ...v };
      }
      return acc;
    }, {})
  );

const x = [
  { id: 1, name: "John" },
  { id: 2, name: "Maria" },
];
const y = [{ id: 1, age: 28 }, { id: 3, age: 26 }, { age: 3 }];
combine(x, y, "id");
// [
//  { id: 1, name: 'John', age: 28 },
//  { id: 2, name: 'Maria' },
//  { id: 3, age: 26 }
// ]
