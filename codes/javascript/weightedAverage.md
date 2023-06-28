| 标题                        | 标签       |
| --------------------------- | ---------- |
| weightedAverage(加权平均值) | math(数学) |

计算两个或多个数字的加权平均值。

- 使用 Array.prototype.reduce() 创建值的加权和以及权重的总和。
- 将它们相互除以得到加权平均值。

```js
const weightedAverage = (nums, weights) => {
  const [sum, weightSum] = weights.reduce(
    (acc, w, i) => {
      acc[0] = acc[0] + nums[i] * w;
      acc[1] = acc[1] + w;
      return acc;
    },
    [0, 0]
  );
  return sum / weightSum;
};
```

> 调用方式:

```js
weightedAverage([1, 2, 3], [0.6, 0.2, 0.3]); // 1.72727
```

> 应用场景
