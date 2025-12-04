|  标题   | 标签  |
|  ----  | ----  |
| normalizeLineEndings(规范化行尾) | string,regexp(字符串，正则表达式) |

规范化字符串中的行结尾。

* 使用 String.prototype.replace() 和正则表达式来匹配和替换行尾与规范化版本。
* 省略第二个参数，规范化，使用默认值 '\r\n'。

```js
const normalizeLineEndings = (str,normalized = "\r\n") => str.replace(/\r?\n/g,normalized);
```

<div class="code-editor" data-url="codes/javascript/ts/normalize-line-endings.ts" data-language="typescript"></div>

> 调用方式:

```js
normalizeLineEndings('This\r\nis a\nmultiline\nstring.\r\n');
// 'This\r\nis a\r\nmultiline\r\nstring.\r\n'
normalizeLineEndings('This\r\nis a\nmultiline\nstring.\r\n', '\n');
// 'This\nis a\nmultiline\nstring.\n'
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/normalize-line-endings.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/normalize-line-endings.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/normalize-line-endings.html"></iframe>