| 标题              | 标签       |
| ----------------- | ---------- |
| isOdd(是否是偶数) | math(数学) |

检查给定的数字是否为奇数。

- 使用模 (%) 运算符检查数字是奇数还是偶数。
- 如果数字是奇数，则返回 true，如果数字是偶数，则返回 false。

```js
const isOdd = num => num % 2 === 1;
```

> 调用方式:

```js
isOdd(3); // true
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/isOdd.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/isOdd.html"></iframe>
