| 标题                      | 标签                        |
| ------------------------- | --------------------------- |
| clampNumber(限定数字范围) | math,beginner(数学，初学者) |

将 `num` 限制在边界值 `a` 和 `b` 指定的包含范围内。

- 如果 `num` 在范围内，则返回 `num`。
- 否则，返回范围内最接近的数字。

> 代码如下:

```js
const clampNumber = (num, a, b) =>
  Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/clamp-number.ts" data-language="typescript"></div>

> 调用方式:

```js
clampNumber(2, 3, 5); // 3
clampNumber(1, -1, -5); // -1
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/clamp-number.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/clamp-number.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/clamp-number.html"></iframe>
