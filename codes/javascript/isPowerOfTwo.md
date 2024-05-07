| 标题                      | 标签       |
| ------------------------- | ---------- |
| isPowerOfTwo(是否 2 的幂) | math(数学) |

检查给定数字是否为 2 的幂。

- 使用按位二进制 AND 运算符 (&) 确定 n 是否为 2 的幂。
- 此外，检查 n 是否不假。

```js
const isPowerOfTwo = n => !!n && (n & (n - 1)) === 0;
```

> 调用方式:

```js
isPowerOfTwo(0); // false
isPowerOfTwo(1); // true
isPowerOfTwo(8); // true
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/isPowerOfTwo.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/isPowerOfTwo.html"></iframe>
