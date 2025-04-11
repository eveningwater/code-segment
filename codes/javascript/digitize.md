| 标题                     | 标签       |
| ------------------------ | ---------- |
| digitize(数字转换成数组) | math(数学) |

将数字转换为数字数组，必要时删除其符号。

- 使用 `Math.abs()` 去除数字的符号。
- 将数字转换为字符串，使用扩展运算符 (`...`) 构建数组。
- 使用 `Array.prototype.map()` 和 `parseInt()` 将每个值转换为整数。

> 代码如下:

```js
const digitize = n => [...`${Math.abs(n)}`].map(i => parseInt(i));
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/digitize.ts" data-language="typescript"></div>

> 调用方式:

```js
digitize(123); // [1, 2, 3]
digitize(-123); // [1, 2, 3]
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/digitize.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/digitize.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/digitize.html"></iframe>
