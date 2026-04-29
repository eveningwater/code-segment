| 标题                         | 标签                              |
| ---------------------------- | --------------------------------- |
| splitLines(字符串分割成数组) | string,regexp(字符串，正则表达式) |

将多行字符串拆分为行数组。

- 使用 String.prototype.split() 和一个正则表达式来匹配换行符并创建一个数组。

```js
const splitLines = str => str.split(/\r?\n/);
```

<div class="code-editor" data-url="codes/javascript/ts/split-lines.ts" data-language="typescript"></div>

> 调用方式:

```js
splitLines('This\nis a\nmultiline\nstring.\n');
// ['This', 'is a', 'multiline', 'string.' , '']
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/split-lines.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/split-lines.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/split-lines.html"></iframe>