| 标题                     | 标签                     |
| ------------------------ | ------------------------ |
| formatNumber(格式化数字) | string,math(字符串,数学) |

使用本地数字格式顺序格式化数字。

- 使用 `Number.prototype.toLocaleString()` 将数字转换为使用本地数字格式分隔符。

```js
const formatNumber = num => num.toLocaleString();
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/format-number.ts" data-language="typescript"></div>

> 调用方式:

```js
formatNumber(123456); // '123,456' in `en-US`
formatNumber(15675436903); // '15.675.436.903' in `de-DE`
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/format-number.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/format-number.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/format-number.html"></iframe>
