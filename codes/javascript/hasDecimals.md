| 标题                              | 标签       |
| --------------------------------- | ---------- |
| hasDecimals(检查数字是否有小数位) | math(数学) |

检查数字是否有小数位

- 使用模 (%) 运算符检查数字是否可被 1 整除并返回结果。

```js
const hasDecimals = num => num % 1 !== 0;
```

> 调用方式:

```js
hasDecimals(1); // false
hasDecimals(1.001); // true
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/hasDecimals.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/hasDecimals.html"></iframe>
