| 标题                      | 标签                      |
| ------------------------- | ------------------------- |
| randomBoolean(随机布尔值) | math,random(数学，随机数) |

生成一个随机布尔值。

- 使用 Math.random() 生成随机数并检查它是否大于或等于 0.5。

```js
const randomBoolean = () => Math.random() >= 0.5;
```

<div class="code-editor" data-url="codes/javascript/ts/random-boolean.ts" data-language="typescript"></div>

> 调用方式:

```js
randomBoolean(); // true / false
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/random-boolean.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/random-boolean.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/random-boolean.html"></iframe>