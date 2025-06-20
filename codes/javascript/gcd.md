| 标题                                                                                           | 标签                                      |
| ---------------------------------------------------------------------------------------------- | ----------------------------------------- |
| gcd(最大[公约数](https://baike.baidu.com/item/%E5%85%AC%E7%BA%A6%E6%95%B0/1063409?fr=aladdin)) | math,algorithm,recursion(数学,算法，递归) |

计算两个或多个数字/数组之间的最大公约数。

- 内部 \_gcd 函数使用递归。
- 基本情况是 y 等于 0。在这种情况下，返回 x。
- 否则，返回 y 的 GCD 和除法 x / y 的余数。

## 特别解释

**最大公约数（Greatest Common Divisor, GCD）**，又称 **最大公因数（Greatest Common Factor, GCF）**，是指能够同时整除两个或多个整数的最大整数。换句话说，最大公约数是这两个数的所有公约数中最大的一个。

### 计算最大公约数的方法

1. **辗转相除法（欧几里得算法）**  
   这是计算两个数最大公约数的经典方法，基于以下定理：

   - 对于两个整数 a 和 b （假设 a > b ），它们的最大公约数等于 a 除以 b 的余数和 b 的最大公约数，即：
     ```tex
     \text{GCD}(a, b) = \text{GCD}(b, a \mod b)
     ```
   - 这个过程会重复进行，直到余数为 0，此时较小的数即为最大公约数。

   **步骤：**

   1. 计算 a % b 的余数 r 。
   2. 将 a 替换为 b ，将 b 替换为余数 r 。
   3. 重复上述步骤，直到余数为 0，此时的 b 即为最大公约数。

   **示例：**  
   计算GCD(48, 18)：
   - 48 % 18 = 2 余数 12 ；
   - 18 % 12 = 1 余数 6 ；
   - 12 % 6 = 2 余数 0 ；
   - 余数为 0 时，最大公约数为 6。

2. **列举法**  
   列举法是指将两个数的所有公约数列举出来，选择其中最大的一个。例如：

   - 对于 48 和 18 ，可以列举出它们的约数：
     - 48 的约数：1, 2, 3, 4, 6, 8, 12, 16, 24, 48
     - 18 的约数：1, 2, 3, 6, 9, 18
     - 公约数：1, 2, 3, 6
     - 最大公约数是 6。

3. **质因数分解法**  
   质因数分解法是将每个数分解为质因数的乘积，然后取公共的质因数的最低次幂。

   **示例：**

   - 
   ```tex
   48 = 2^4 \times 3
   ```
   - 
   ```tex
   18 = 2 \times 3^2
   ```
   - 公共的质因数是 2 和 3，取它们的最低次幂：
  
     ```tex
     2^1 \times 3^1 = 6
     ```
   - 所以， 

   ```tex
   \text{GCD}(48, 18) = 6 
   ```
   。

### Python 中计算最大公约数

Python 提供了内置的函数 `math.gcd()` 来计算两个数的最大公约数。你只需要传入两个整数即可。

```python
import math

a = 48
b = 18

gcd = math.gcd(a, b)
print(f"最大公约数是: {gcd}")
```

### 最小公倍数与最大公约数的关系

最大公约数和最小公倍数是两个相关的概念。对于两个数 a 和 b ，它们的 **最小公倍数（LCM）** 和 **最大公约数（GCD）** 满足以下关系：

```tex
\text{LCM}(a, b) \times \text{GCD}(a, b) = a \times b
```

这个公式意味着，如果你知道两个数的最大公约数，你可以计算出它们的最小公倍数，反之亦然。

### 总结

- **最大公约数（GCD）** 是两个数的所有公约数中最大的一个。
- 常见的计算方法有 **辗转相除法**、**列举法** 和 **质因数分解法**。
- 在 Python 中，可以使用 `math.gcd()` 来快速计算最大公约数。

> ps: 根据上述，这里采用了第一种方法，辗转相除法，也即欧几里得算法来计算。

代码如下:

```js
const gcd = (...arr) => {
  const _gcd = (x, y) => (!y ? x : gcd(y, x % y));
  return [...arr].reduce((a, b) => _gcd(a, b));
};
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/gcd.ts" data-language="typescript"></div>

> 调用方式:

```js
gcd(8, 36); // 4
gcd(...[12, 8, 32]); // 4
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/gcd.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/gcd.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/gcd.html"></iframe>
