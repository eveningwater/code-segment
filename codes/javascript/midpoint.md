|  标题   | 标签  |
|  ----  | ----  |
| midpoint(两对点之间的中点) | math(数学) |

计算两对 (x,y) 点之间的中点。

* 解构数组以获得 x1、y1、x2 和 y2。
* 通过将两个端点的总和除以 2 来计算每个维度的中点。

```js
const midpoint = ([x1,y1],[x2,y2]) => [(x1 + y1) / 2,(x2 + y2) / 2];
```

> 调用方式:

```js
midpoint([2, 2], [4, 4]); // [3, 3]
midpoint([4, 4], [6, 6]); // [5, 5]
midpoint([1, 3], [2, 4]); // [1.5, 3.5]
```

> 应用场景