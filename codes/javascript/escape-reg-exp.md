| 标题                         | 标签                              |
| ---------------------------- | --------------------------------- |
| escapeRegExp(转义正则表达式) | string,regexp(字符串，正则表达式) |

转义要在正则表达式中使用的字符串。

- 使用 `String.prototype.replace()` 转义特殊字符。

> 代码如下:

```js
const escapeRegExp = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/escape-reg-exp.ts" data-language="typescript"></div>

> 调用方式:

```js
escapeRegExp("(test)"); // \\(test\\)
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/escape-reg-exp.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/escape-reg-exp.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/escape-reg-exp.html"></iframe>
