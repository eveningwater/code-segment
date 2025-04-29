| 标题                    | 标签                       |
| ----------------------- | -------------------------- |
| fibonacci(斐波那契数列) | math,algorithm(数学，算法) |

生成一个数组，包含斐波那契数列，直到第 n 项。

- 使用 `Array.from()` 创建一个特定长度的空数组，初始化前两个值（0 和 1）。
- 使用 `Array.prototype.reduce()` 和 `Array.prototype.concat()` 将值添加到数组中，使用最后两个值的总和，前两个除外。

> 代码如下:

```js
const fibonacci = (n) =>
  Array.from({ length: n }).reduce(
    (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
    []
  );
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/fibonacci.ts" data-language="typescript"></div>

> 调用方式:

```js
fibonacci(6); // [0, 1, 1, 2, 3, 5]
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/fibonacci.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/fibonacci.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/fibonacci.html"></iframe>
