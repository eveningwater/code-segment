| 标题                                      | 标签                      |
| ----------------------------------------- | ------------------------- |
| randomNumberInRange(随机生成范围内的数值) | math,random(数学，随机数) |

生成指定范围内的随机数。

- 使用 Math.random() 生成随机值，使用乘法将其映射到所需范围。

```js
const randomNumberInRange = (min, max) => Math.random() * (max - min) + min;
```

<div class="code-editor" data-url="codes/javascript/ts/random-number-in-range.ts" data-language="typescript"></div>

> 调用方式:

```js
randomNumberInRange(2, 10); // 6.0211363285087005
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/random-number-in-range.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/random-number-in-range.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/random-number-in-range.html"></iframe>