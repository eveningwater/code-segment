| 标题                      | 标签       |
| ------------------------- | ---------- |
| degreesToRads(角度转弧度) | math(数学) |

将角度从度数转换为弧度。

- 使用 `Math.PI` 和度数到弧度公式将角度从度数转换为弧度。

> 代码如下:

```js
const degreesToRads = deg => (Math.PI * deg) / 180.0;
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/degrees-to-rads.ts" data-language="typescript"></div>

> 调用方式:

```js
degreesToRads(90.0); // ~1.5708
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/degrees-to-rads.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/degrees-to-rads.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/degrees-to-rads.html"></iframe>
