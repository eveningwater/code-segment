| 标题                      | 标签       |
| ------------------------- | ---------- |
| standardDeviation(标准差) | math(数学) |

计算数字数组的标准差。

- 使用 Array.prototype.reduce() 计算值的均值、方差和方差之和，并确定标准差。
- 省略第二个参数 usePopulation 以获得样本标准偏差或将其设置为 true 以获得总体标准偏差。

```js
const standardDeviation = (arr, usePopulation = false) => {
  const mean = arr.reduce((acc, val) => acc + val, 0) / arr.length;
  return Math.sqrt(
    arr
      .reduce((acc, val) => acc.concat((val - mean) ** 2), [])
      .reduce((acc, val) => acc + val, 0) /
      (arr.length - (usePopulation ? 0 : 1))
  );
};
```

> 调用方式:

```js
standardDeviation([10, 2, 38, 23, 38, 23, 21]); // 13.284434142114991 (sample)
standardDeviation([10, 2, 38, 23, 38, 23, 21], true);
// 12.29899614287479 (population)
```

> 应用场景
