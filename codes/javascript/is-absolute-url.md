| 标题                          | 标签                                              |
| ----------------------------- | ------------------------------------------------- |
| isAbsoluteURL(是否是绝对路径) | string,browser,regexp(字符串，浏览器，正则表达式) |

检查给定的字符串是否是绝对 URL。

- 使用 RegExp.prototype.test() 测试字符串是否为绝对 URL。

```js
const isAbsoluteURL = url => /^[a-z][a-z+.-]*:/.test(url);
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/is-absolute-url.ts" data-language="typescript"></div>

> 调用方式:

```js
isAbsoluteURL('https://google.com'); // true
isAbsoluteURL('ftp://www.myserver.net'); // true
isAbsoluteURL('/foo/bar'); // false
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/is-absolute-url.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/is-absolute-url.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/is-absolute-url.html"></iframe>
