|  标题   | 标签  |
|  ----  | ----  |
| nthRoot(n次方根) | math(数学) |

计算给定数字的 n 次方根。

* 使用 Math.pow() 计算 x 的 1 / n 次方，等于 x 的第 n 次方根。

```js
const nthRoot = (x,n) => Math.pow(x,1 / n);
```

<div class="code-editor" data-url="codes/javascript/ts/nth-root.ts" data-language="typescript"></div>

> 调用方式:

```js
nthRoot(32, 5); // 2
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/nth-root.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/nth-root.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/nth-root.html"></iframe>