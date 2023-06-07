| 标题                | 标签         |
| ------------------- | ------------ |
| transform(对象转换) | object(对象) |

对累加器和对象中的每个键应用函数（从左到右）。

- 使用 Object.keys() 迭代对象中的每个键。
- 使用 Array.prototype.reduce() 对给定的累加器应用指定的函数。

```js
const transform = (obj, fn, acc) =>
  Object.keys(obj).reduce((a, k) => fn(a, obj[k], k, obj), acc);
```

> 调用方式:

```js
transform(
  { a: 1, b: 2, c: 1 },
  (r, v, k) => {
    (r[v] || (r[v] = [])).push(k);
    return r;
  },
  {}
); // { '1': ['a', 'c'], '2': ['b'] }
```

> 应用场景
