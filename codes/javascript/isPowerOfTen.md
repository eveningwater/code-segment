| 标题                       | 标签       |
| -------------------------- | ---------- |
| isPowerOfTen(是否 10 的幂) | math(数学) |

检查给定数字是否是 10 的幂。

- 使用 Math.log10() 和模运算符 (%) 确定 n 是否为 10 的幂。

```js
const isPowerOfTen = n => Math.log10(n) % 1 === 0;
```

> 调用方式:

```js
isPowerOfTen(1); // true
isPowerOfTen(10); // true
isPowerOfTen(20); // false
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/isPowerOfTen.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/isPowerOfTen.html"></iframe>
