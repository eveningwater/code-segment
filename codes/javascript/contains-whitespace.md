| 标题                                         | 标签                                               |
| -------------------------------------------- | -------------------------------------------------- |
| containsWhitespace(判断字符串中是否包含空白) | string,regexp,beginner(字符串，正则表达式，初学者) |

检查给定的字符串是否包含任何空白字符。

- 使用正则表达式中的 `RegExp.prototype.test()` 来检查给定字符串是否包含任何空白字符。

> 代码如下:

```js
const containsWhitespace = str => /\s/.test(str);
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/contains-whitespace.ts" data-language="typescript"></div>

> 调用方式:

```js
containsWhitespace('lorem'); // false
containsWhitespace('lorem ipsum'); // true
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/contains-whitespace.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/contains-whitespace.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/contains-whitespace.html"></iframe>
