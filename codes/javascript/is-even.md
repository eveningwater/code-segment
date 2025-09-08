| 标题               | 标签       |
| ------------------ | ---------- |
| isEven(是否是偶数) | math(数学) |

检查给定的数字是否是偶数。

- 使用模 (%) 运算符检查数字是奇数还是偶数。
- 如果数字是偶数，则返回 true，如果数字是奇数，则返回 false。

```js
const isEven = num => num % 2 === 0;
```

可以使用位运算符实现:

```js
const isEven = num => (num & 1) === 0;
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/is-even.ts" data-language="typescript"></div>

> 调用方式:

```js
isEven(3); // false
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/is-even.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/is-even.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/is-even.html"></iframe>
