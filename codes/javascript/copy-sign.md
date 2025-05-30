| 标题                     | 标签                        |
| ------------------------ | --------------------------- |
| copySign(复制数字的符号) | math,beginner(数学，初学者) |

返回第一个数字的绝对值，但返回第二个数字的符号。

- 使用 `Math.sign()` 检查两个数字是否具有相同的符号。
- 如果有则返回 `x`，否则返回 `-x`。

> 代码如下:

```js
const copySign = (x, y) => (Math.sign(x) === Math.sign(y) ? x : -x);
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/copy-sign.ts" data-language="typescript"></div>

> 调用方式:

```js
copySign(2, 3); // 2
copySign(2, -3); // -2
copySign(-2, 3); // 2
copySign(-2, -3); // -2
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/copy-sign.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/copy-sign.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/copy-sign.html"></iframe>
