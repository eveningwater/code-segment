| 标题                  | 标签                                           |
| --------------------- | ---------------------------------------------- |
| walkThrough(遍历对象) | object,recursion,generator(对象，递归，生成器) |

创建一个生成器，遍历给定对象的所有键。

- 使用递归。
- 定义一个生成器函数 walk，它接受一个对象和一个键数组。
- 使用 for...of 循环和 Object.keys() 迭代对象的键。
- 使用 typeof 检查给定对象中的每个值本身是否是一个对象。
- 如果是这样，请使用 yield\* 表达式递归委托给同一个生成器函数 walk，将当前键附加到键数组中。 否则，生成表示当前路径和给定键的值的键数组。
- 使用 yield\* 表达式委托给 walk 生成器函数。

```js
const walkThrough = function* (obj) {
  const walk = function* (x, previous = []) {
    for (let key of Object.keys(x)) {
      if (typeof x[key] === 'object') yield* walk(x[key], [...previous, key]);
      else yield [[...previous, key], x[key]];
    }
  };
  yield* walk(obj);
};
```

> 调用方式:

```js
const obj = {
  a: 10,
  b: 20,
  c: {
    d: 10,
    e: 20,
    f: [30, 40]
  },
  g: [
    {
      h: 10,
      i: 20
    },
    {
      j: 30
    },
    40
  ]
};
[...walkThrough(obj)];
/*
[
  [['a'], 10],
  [['b'], 20],
  [['c', 'd'], 10],
  [['c', 'e'], 20],
  [['c', 'f', '0'], 30],
  [['c', 'f', '1'], 40],
  [['g', '0', 'h'], 10],
  [['g', '0', 'i'], 20],
  [['g', '1', 'j'], 30],
  [['g', '2'], 40]
]
*/
```

> 应用场景
