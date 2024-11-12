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

**二项式系数**（Binomial Coefficient），是组合数学中的一个重要概念，通常用来表示从 \( n \) 个不同元素中选取 \( k \) 个元素的不同方式的数量。它被表示为：

\[
\binom{n}{k} = \frac{n!}{k!(n-k)!}
\]

其中，\( n! \) 表示 \( n \) 的阶乘，定义为 \( n! = n \times (n-1) \times (n-2) \times \cdots \times 2 \times 1 \)，且 \( 0! = 1 \)（约定）。二项式系数 \( \binom{n}{k} \) 的读法是“从 \( n \) 中选 \( k \)”，表示从 \( n \) 个物品中选择 \( k \) 个物品的组合数。

### 例子：

- \( \binom{5}{2} = \frac{5!}{2!(5-2)!} = \frac{5!}{2!3!} = \frac{5 \times 4}{2 \times 1} = 10 \)  
  这意味着从 5 个物品中选择 2 个物品的不同组合方式有 10 种。

### 公式解释：

1. **阶乘**：\( n! \) 是所有小于或等于 \( n \) 的整数的乘积。例如，\( 5! = 5 \times 4 \times 3 \times 2 \times 1 = 120 \)。
2. **组合公式**：二项式系数的公式 \( \frac{n!}{k!(n-k)!} \) 表示，在 \( n \) 个物品中选取 \( k \) 个物品时，首先从 \( n \) 个物品中选择 \( k \) 个物品的排列方式（即 \( n! \)）然后再除以所选 \( k \) 个物品内部的排列方式（即 \( k! \)）以及未选物品的排列方式（即 \( (n-k)! \)）。这样就得到“选择”的数量。

### 二项式定理中的应用：

二项式系数在 **二项式定理** 中非常重要，二项式定理表达了多项式的展开公式：

\[
(a + b)^n = \sum\_{k=0}^{n} \binom{n}{k} a^{n-k} b^k
\]

在这个公式中，\( \binom{n}{k} \) 是展开式中各项的系数，表示 \( (a + b)^n \) 的展开式中第 \( k \) 项的系数。

### 其他性质：

- **对称性**： \( \binom{n}{k} = \binom{n}{n-k} \)，即从 \( n \) 个物品中选 \( k \) 个和从 \( n \) 个物品中选 \( n-k \) 个的组合数是相同的。
- **递推关系**：二项式系数满足递推关系：

  \[
  \binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}
  \]

  这个关系也称为帕斯卡三角形的递推公式，常用来计算二项式系数。

总的来说，二项式系数是组合数学中的基础概念，广泛应用于概率、代数、数论等领域。

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
