| 标题               | 标签                       |
| ------------------ | -------------------------- |
| powerset(数组幂集) | math,algorithm(数学，算法) |

返回给定数字数组的幂集。

- 使用 Array.prototype.reduce() 结合 Array.prototype.map() 迭代元素并组合成包含所有组合的数组。

```js
const powerset = arr =>
  arr.reduce((a, v) => a.concat(a.map(r => r.concat(v))), [[]]);
```

> 调用方式:

```js
powerset([1, 2]); // [[], [1], [2], [1, 2]]
```

> 应用场景
