| 标题                                          | 标签       |
| --------------------------------------------- | ---------- |
| fahrenheitToCelsius(将华氏温度转换为摄氏温度) | math(数学) |

将华氏温度转换为摄氏温度。

- 遵循转换公式 `C = (F - 32) * 5 / 9`。

> 代码如下:

```js
const fahrenheitToCelsius = (degrees) => ((degrees - 32) * 5) / 9;
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/fahrenheit-to-celsius.ts" data-language="typescript"></div>

> 调用方式:

```js
fahrenheitToCelsius(32); // 0
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/fahrenheit-to-celsius.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/fahrenheit-to-celsius.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/fahrenheit-to-celsius.html"></iframe>
