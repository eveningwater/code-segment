| 标题                   | 标签                   |
| ---------------------- | ---------------------- |
| prod(求数值数组的乘积) | math,array(数学，数组) |

计算两个或多个数字/数组的乘积。

- 使用 Array.prototype.reduce() 将每个值与累加器相乘，累加器初始化为 1。

```js
const prod = (...arr) => [...arr].reduce((acc, val) => acc * val, 1);
```

<div class="code-editor" data-url="codes/javascript/ts/prod.ts" data-language="typescript"></div>

> 调用方式:

```js
prod(1, 2, 3, 4); // 24
prod(...[1, 2, 3, 4]); // 24
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/prod.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/prod.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/prod.html"></iframe>