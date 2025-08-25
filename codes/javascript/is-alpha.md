| 标题                            | 标签                              |
| ------------------------------- | --------------------------------- |
| isAlpha(判断字符是否只包含字母) | string,regexp(字符串，正则表达式) |

检查字符串是否仅包含字母字符。

- 使用 RegExp.prototype.test() 检查给定的字符串是否与字母正则表达式模式匹配。

```js
const isAlpha = str => /^[a-zA-Z]*$/.test(str);
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/is-alpha.ts" data-language="typescript"></div>

> 调用方式:

```js
isAlpha('sampleInput'); // true
isAlpha('this Will fail'); // false
isAlpha('123'); // false
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/is-alpha.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/is-alpha.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/is-alpha.html"></iframe>
