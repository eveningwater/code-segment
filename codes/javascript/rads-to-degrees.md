| 标题                    | 标签       |
| ----------------------- | ---------- |
| radsToDegrees(弧度转度) | math(数学) |

将角度从弧度转换为度数。

- 使用 Math.PI 和弧度转度公式将角度从弧度转换为度数。

```js
const radsToDegrees = rad => (rad * 180.0) / Math.PI;
```

<div class="code-editor" data-url="codes/javascript/ts/rads-to-degrees.ts" data-language="typescript"></div>

> 调用方式:

```js
radsToDegrees(Math.PI / 2); // 90
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/rads-to-degrees.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/rads-to-degrees.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/rads-to-degrees.html"></iframe>