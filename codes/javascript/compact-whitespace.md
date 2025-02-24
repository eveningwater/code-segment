| 标题                        | 标签                                               |
| --------------------------- | -------------------------------------------------- |
| compactWhitespace(过滤空白) | string,regexp,beginner(字符串，正则表达式，初学者) |

过滤字符串中的空格。

- 将 `String.prototype.replace()` 与正则表达式一起使用，将所有出现的 2 个或更多空白字符替换为单个空格。

> 代码如下:

```js
const compactWhitespace = str => str.replace(/\s{2,}/g, ' ');
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/compact-whitespace.ts" data-language="typescript"></div>

> 调用方式:

```js
compactWhitespace('Lorem    Ipsum'); // 'Lorem Ipsum'
compactWhitespace('Lorem \n Ipsum'); // 'Lorem Ipsum'
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/compact-whitespace.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/compact-whitespace.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/compact-whitespace.html"></iframe>
