| 标题                  | 标签           |
| --------------------- | -------------- |
| isLowerCase(是否小写) | string(字符串) |

检查字符串是否为小写。

- 使用 String.prototype.toLowerCase() 将给定的字符串转换为小写并将其与原始字符串进行比较。

```js
const isLowerCase = str => str === str.toLowerCase();
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/is-lower-case.ts" data-language="typescript"></div>

> 调用方式:

```js
isLowerCase('abc'); // true
isLowerCase('a3@$'); // true
isLowerCase('Ab4'); // false
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/is-lower-case.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/is-lower-case.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/is-lower-case.html"></iframe>
