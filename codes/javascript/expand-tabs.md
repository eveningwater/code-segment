| 标题                           | 标签                              |
| ------------------------------ | --------------------------------- |
| expandTabs(将制表符转换为空格) | string,regexp(字符串，正则表达式) |

将制表符转换为空格，其中每个制表符对应于计数空格。

- 使用带有正则表达式的 `String.prototype.replace()` 和 `String.prototype.repeat()` 将每个制表符替换为计数空格。

> 代码如下:

```js
const expandTabs = (str, count) => str.replace(/\t/g, " ".repeat(count));
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/expand-tabs.ts" data-language="typescript"></div>

> 调用方式:

```js
expandTabs("\t\tlorem", 3); // '      lorem'
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/expand-tabs.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/expand-tabs.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/expand-tabs.html"></iframe>
