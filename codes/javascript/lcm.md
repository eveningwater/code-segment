| 标题            | 标签                                       |
| --------------- | ------------------------------------------ |
| lcm(最小公倍数) | math,algorithm,recursion(数学，算法，递归) |

计算两个或多个数字的最小公倍数。

- 使用最大公约数 (GCD) 公式和 `lcm(x, y) = x \* y / gcd(x, y)` 的公式来确定最小公倍数。
- GCD 公式使用递归。

```js
const lcm = (...arr) => {
  const gcd = (x, y) => (!y ? x : gcd(y, x % y));
  const _lcm = (x, y) => (x * y) / gcd(x, y);
  return [...arr].reduce((a, b) => _lcm(a, b));
};
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/lcm.ts" data-language="typescript"></div>

> 调用方式:

```js
lcm(12, 7); // 84
lcm(...[1, 3, 4, 5]); // 60
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/lcm.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/lcm.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/lcm.html"></iframe>