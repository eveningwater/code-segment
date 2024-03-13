| 标题                      | 标签       |
| ------------------------- | ---------- |
| isDivisible(是否可被整除) | math(数学) |

检查第一个数字参数是否可以被第二个整除。

- 使用模运算符 (%) 检查余数是否等于 0。

```js
const isDivisible = (dividend, divisor) => dividend % divisor === 0;
```

> 调用方式:

```js
isDivisible(6, 3); // true
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/isDivisible.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/isDivisible.html"></iframe>
