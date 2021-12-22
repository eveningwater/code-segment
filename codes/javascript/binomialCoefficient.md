|  标题   | 标签  |
|  ----  | ----  |
| binomialCoefficient(二项式系数) | math,algorithm,beginner(数学，算法，初学者) |

计算从n个项目中选择k个项目的方法数，不重复且无顺序。

* 使用 `Number.isNaN()` 检查两个值中是否有任何一个为 `NaN`。
* 检查 `k` 是否小于 `0`、大于或等于 `n`、等于 `1` 或 `n - 1` 并返回适当的结果。
* 检查 `n - k` 是否小于 `k` 并相应地切换它们的值。
* 从 `2` 到 `k` 循环并计算二项式系数。
* 使用 `Math.round()` 来解决计算中的舍入误差。

> 代码如下:

```js
    const binomialCoefficient = (n, k) => {
        if (Number.isNaN(n) || Number.isNaN(k)) return NaN;
        if (k < 0 || k > n) return 0;
        if (k === 0 || k === n) return 1;
        if (k === 1 || k === n - 1) return n;
        if (n - k < k) k = n - k;
        let res = n;
        for (let j = 2; j <= k; j++) res *= (n - j + 1) / j;
        return Math.round(res);
    };
```

> 调用方式:

```js
    binomialCoefficient(8, 2); // 28
```

> 应用场景