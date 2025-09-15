| 标题                     | 标签       |
| ------------------------ | ---------- |
| isNegativeZero(是否负零) | math(数学) |

检查给定值是否等于负零 (-0)。

- 检查传递的值是否等于 0，以及 1 除以该值是否等于 -Infinity。

```js
const isNegativeZero = val => val === 0 && 1 / val === -Infinity;
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/is-negative-zero.ts" data-language="typescript"></div>

> 调用方式:

```js
isNegativeZero(-0); // true
isNegativeZero(0); // false
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/is-negative-zero.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/is-negative-zero.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/is-negative-zero.html"></iframe>
