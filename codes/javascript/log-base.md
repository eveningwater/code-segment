|  标题   | 标签  |
|  ----  | ----  |
| logBase(计算给定基数的对数) | math(数学) |

计算给定基数中给定数字的对数。

* 使用 Math.log() 从值和基数中获取对数并将它们相除。

```js
const logBase = (n,base) => Math.log(n) / Math.log(base);
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/log-base.ts" data-language="typescript"></div>

> 调用方式:

```js
logBase(10, 10); // 1
logBase(100, 10); // 2
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/log-base.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/log-base.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/log-base.html"></iframe>
