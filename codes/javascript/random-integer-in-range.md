| 标题                                       | 标签                      |
| ------------------------------------------ | ------------------------- |
| randomIntegerInRange(随机生成范围内的整数) | math,random(数学，随机数) |

生成指定范围内的随机整数。

- 使用 Math.random() 生成随机数并将其映射到所需范围。
- 使用 Math.floor() 使其成为整数。

```js
const randomIntegerInRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
```

<div class="code-editor" data-url="codes/javascript/ts/random-integer-in-range.ts" data-language="typescript"></div>

> 调用方式:

```js
randomIntegerInRange(0, 5); // 2
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/random-integer-in-range.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/random-integer-in-range.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/random-integer-in-range.html"></iframe>