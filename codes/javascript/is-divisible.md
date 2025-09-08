| 标题                      | 标签       |
| ------------------------- | ---------- |
| isDivisible(是否可被整除) | math(数学) |

检查第一个数字参数是否可以被第二个整除。

- 使用模运算符 (%) 检查余数是否等于 0。

```js
const isDivisible = (dividend, divisor) => dividend % divisor === 0;
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/is-divisible.ts" data-language="typescript"></div>

> 调用方式:

```js
isDivisible(6, 3); // true
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/is-divisible.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/is-divisible.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/is-divisible.html"></iframe>
