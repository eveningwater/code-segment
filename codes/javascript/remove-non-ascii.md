| 标题                            | 标签                              |
| ------------------------------- | --------------------------------- |
| removeNonASCII(移除 ASCII 字符) | string,regexp(字符串，正则表达式) |

删除不可打印的 ASCII 字符。

- 使用带有正则表达式的 String.prototype.replace() 来删除不可打印的 ASCII 字符。

```js
const removeNonASCII = str => str.replace(/[^\x20-\x7E]/g, '');
```

<div class="code-editor" data-url="codes/javascript/ts/remove-non-ascii.ts" data-language="typescript"></div>

> 调用方式:

```js
removeNonASCII('äÄçÇéÉêlorem-ipsumöÖÐþúÚ'); // 'lorem-ipsum'
```

> 应用场景

以下是一个实战<a href="codes/javascript/html//remove-non-ascii.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html//remove-non-ascii.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/remove-non-ascii.html"></iframe>