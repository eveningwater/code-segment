| 标题                     | 标签                       |
| ------------------------ | -------------------------- |
| vectorDistance(向量距离) | math,algorithm(数学，算法) |

计算两个向量之间的距离。

- 使用 Array.prototype.reduce()、Math.pow() 和 Math.sqrt() 计算两个向量之间的欧几里得距离。

```js
const vectorDistance = (x, y) =>
  Math.sqrt(x.reduce((acc, val, i) => acc + Math.pow(val - y[i], 2), 0));
```

> 调用方式:

```js
vectorDistance([10, 0, 5], [20, 0, 10]); // 11.180339887498949
```

> 应用场景
