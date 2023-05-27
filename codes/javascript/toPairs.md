| 标题                  | 标签                     |
| --------------------- | ------------------------ |
| toPairs(对象成对数组) | object,array(对象，数组) |

从对象或其他可迭代对象创建键值对数组。

- 检查是否定义了 Symbol.iterator，如果定义了，则使用 Array.prototype.entries() 获取给定可迭代对象的迭代器。
- 使用 Array.from() 将结果转换为键值对数组的数组。
- 如果没有为 obj 定义 Symbol.iterator，请改用 Object.entries()。

```js
const toPairs = obj =>
  obj[Symbol.iterator] instanceof Function && obj.entries instanceof Function
    ? Array.from(obj.entries())
    : Object.entries(obj);
```

> 调用方式:

```js
toPairs({ a: 1, b: 2 }); // [['a', 1], ['b', 2]]
toPairs([2, 4, 8]); // [[0, 2], [1, 4], [2, 8]]
toPairs('shy'); // [['0', 's'], ['1', 'h'], ['2', 'y']]
toPairs(new Set(['a', 'b', 'c', 'a'])); // [['a', 'a'], ['b', 'b'], ['c', 'c']]
```

> 应用场景
