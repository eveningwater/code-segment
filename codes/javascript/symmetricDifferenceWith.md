| 标题                                  | 标签        |
| ------------------------------------- | ----------- |
| symmetricDifferenceWith(数组元素差集) | array(数组) |

使用提供的函数作为比较器，返回两个数组之间的对称差异。

- 使用 Array.prototype.filter() 和 Array.prototype.findIndex() 找到合适的值。

```js
const symmetricDifferenceWith = (arr, val, comp) => [
  ...arr.filter(a => val.findIndex(b => comp(a, b)) === -1),
  ...val.filter(a => arr.findIndex(b => comp(a, b)) === -1)
];
```

> 调用方式:

```js
symmetricDifferenceWith(
  [1, 1.2, 1.5, 3, 0],
  [1.9, 3, 0, 3.9],
  (a, b) => Math.round(a) === Math.round(b)
); // [1, 1.2, 3.9]
```

> 应用场景
