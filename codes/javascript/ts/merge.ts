export const merge = (...args: Record<string, any>[]) => [...args].reduce((acc,item) => Object.keys(item).reduce((a,k) => {
    acc[k] = acc.hasOwnProperty(k) ? [].concat(acc[k]).concat(item[k]) : item[k];
    return acc;
},{}),{});

const object = {
    a: [{ x: 2 }, { y: 4 }],
    b: 1
  };
  const other = {
    a: { z: 3 },
    b: [2, 3],
    c: 'foo'
  };
  merge(object, other);
  // { a: [ { x: 2 }, { y: 4 }, { z: 3 } ], b: [ 1, 2, 3 ], c: 'foo' }