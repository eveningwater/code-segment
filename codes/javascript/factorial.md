| 标题                        | 标签                                       |
| --------------------------- | ------------------------------------------ |
| factorial(计算一个数的阶乘) | math,algorithm,recursion(数学，算法，递归) |

计算一个数的阶乘。

- 使用递归。
- 如果 n 小于或等于 1，则返回 1。
- 否则，返回 n 和 n - 1 的阶乘的乘积。
- 如果 n 是负数，则抛出 TypeError。

> 代码如下:

```js
const factorial = (n) =>
  n < 0
    ? (() => {
        throw new TypeError("Negative numbers are not allowed!");
      })()
    : n <= 1
    ? 1
    : n * factorial(n - 1);
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/factorial.ts" data-language="typescript"></div>

> 调用方式:

```js
factorial(6); // 720
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/factorial.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/factorial.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/factorial.html"></iframe>
