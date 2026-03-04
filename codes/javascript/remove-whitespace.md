| 标题                               | 标签                              |
| ---------------------------------- | --------------------------------- |
| removeWhitespace(移除字符串的空白) | string,regexp(字符串，正则表达式) |

返回删除了空格的字符串。

- 将 String.prototype.replace() 与正则表达式结合使用，将所有出现的空白字符替换为空字符串。

```js
const removeWhitespace = str => str.replace(/\s+/, '');
```

<div class="code-editor" data-url="codes/javascript/ts/remove-whitespace.ts" data-language="typescript"></div>

> 调用方式:

```js
removeWhitespace('Lorem ipsum.\n Dolor sit amet. ');
// 'Loremipsum.Dolorsitamet.'
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/remove-whitespace.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/remove-whitespace.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/remove-whitespace.html"></iframe>