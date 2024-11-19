| 标题                            | 标签                                        |
| ------------------------------- | ------------------------------------------- |
| binomialCoefficient(二项式系数) | math,algorithm,beginner(数学，算法，初学者) |

计算从 n 个项目中选择 k 个项目的方法数，不重复且无顺序。

- 使用 `Number.isNaN()` 检查两个值中是否有任何一个为 `NaN`。
- 检查 `k` 是否小于 `0`、大于或等于 `n`、等于 `1` 或 `n - 1` 并返回适当的结果。
- 检查 `n - k` 是否小于 `k` 并相应地切换它们的值。
- 从 `2` 到 `k` 循环并计算二项式系数。
- 使用 `Math.round()` 来解决计算中的舍入误差。

## 特别说明

二项式系数（Binomial Coefficient）是组合数学中的一个重要概念，通常用于表示从 n 个不同元素中选择 k 个元素的方式数。二项式系数在代数学中也非常重要，出现在二项式定理中。

### 定义

二项式系数(C(n, k))表示从 n 个元素中选取 k 个元素的组合数。它也可以表示为：

```js
C(n, k) = n! / (k! \* (n - k)!)
```

其中，n!是 n 的阶乘，表示从 1 乘到 n 的所有正整数的积。

- 阶乘 (factorial) 是一个数的所有正整数之积，表示为 `n! = n * (n−1) * (n−2) * ... * 1`。
- 特别地，`0 != 1`。

### 二项式系数的几何意义

二项式系数(C(n, k))可以看作是从 n 个元素中选择 k 个元素的方式数。这是一个组合问题，与排列不同，排列考虑了顺序，而组合则不考虑顺序。举个例子：

- 从 3 个不同的球（例如红球、蓝球和绿球）中选取 2 个球的不同组合数就是 `C(3,2) = 3 * 2 * 1 / 2 * 1 * (3 - 2) * 1 = 3`,可以选择（红球和蓝球）、（红球和绿球）、（蓝球和绿球）。

### 二项式定理

二项式定理（Binomial Theorem）描述了一个二项式表达式的展开式：

```js
(x + y) ^ n = sum_{k=0} ^ {n} C(n, k) * x ^ (n - k) * y ^ k
```

其中，C(n, k)就是二项式系数，表示从n项中选取k项的系数。

#### 示例

#### 计算二项式系数

例如，计算 C(5,2)：

`C(5,2) = 5! / (2! \* (5 - 2)!)`

计算各阶乘：

- `5! = 5 * 4 * 3 * 2 * 1 = 120`
- `2! = 2 * 1 = 2`
- `(5 - 2)! = (3 * 2 * 1) = 6`

所以：

`C(5,2) = 120 / 2 * 6 = 120 / 12 = 10`

因此，C(5,2) = 10。

#### 计算二项式定理中的展开式

假设 x = 1 和 y = 2，我们要展开 `(1 + 2) ^ 3`。

根据二项式定理：

`(1 + 2) ^ 3 = sum_{k=0} ^ {3} C(3, k) * x ^ (3 - k) * y ^ k`

展开每一项：

- `k = 0: {3}{0} 1^{3-0} 2^0 = 1 * 1 * 1 = 1`
- `k = 1: {3}{1} 1^{3-1} 2^1 = 3 * 1 * 2 = 6`
- `k = 2: {3}{2} 1^{3-2} 2^2 = 3 * 1 * 4 = 12`
- `k = 3: {3}{3} 1^{3-3} 2^3 = 1 * 1 * 8 = 8`

因此，展开式为：`(1 + 2)^3 = 1 + 6 + 12 + 8 = 27`。

### 编程实现：计算二项式系数

可以使用递归或动态规划来计算二项式系数，下面是一个简单的 JavaScript 示例：

```javascript
// 计算阶乘
function factorial(n) {
    if (n === 0) return 1;
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

// 计算二项式系数
function binomialCoefficient(n, k) {
    return factorial(n) / (factorial(k) * factorial(n - k));
}

// 示例：计算 binomialCoefficient(5, 2)
console.log(binomialCoefficient(5, 2)); // 输出: 10
```

### 性能优化：动态规划方法

递归计算阶乘会有性能问题，特别是对于大的 n 值。你可以使用动态规划来优化二项式系数的计算。

```javascript
function binomialCoefficientDP(n, k) {
    let dp = Array(n + 1).fill().map(() => Array(k + 1).fill(0));

    // 基本情况
    for (let i = 0; i <= n; i++) {
        dp[i][0] = 1; // 任何数选择 0 个元素的组合数都是 1
    }
    for (let j = 0; j <= k; j++) {
        dp[j][j] = 1; // 任何数选择自身个数的组合数也是 1
    }

    // 填充 DP 表
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= Math.min(i, k); j++) {
            dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
        }
    }

    return dp[n][k];
}

// 示例：计算 binomialCoefficientDP(5, 2)
console.log(binomialCoefficientDP(5, 2)); // 输出: 10
```

### 总结

- **二项式系数**是组合数学中的一个重要概念，表示从 n 个元素中选择 k 个元素的方式数，计算公式为：`C(n, k) = n! / (k! * (n - k)!)`。
- 它在二项式定理中有着广泛应用，用于展开表达式 `(x + y) ^ n`。
- 通过不同的方法（如阶乘法、递归、动态规划等）可以高效地计算二项式系数。

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

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/binomialCoefficient.ts" data-language="typescript"></div>

> 调用方式:

```js
binomialCoefficient(8, 2); // 28
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/binomialCoefficient.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/binomialCoefficient.html"></iframe>
