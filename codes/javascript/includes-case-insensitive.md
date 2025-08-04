| 标题                                              | 标签           |
| ------------------------------------------------- | -------------- |
| includesCaseInsensitive(包含字符（不区分大小写）) | string(字符串) |

检查字符串是否包含子字符串，不区分大小写。

- 使用带有 'i' 标志的 RegExp 构造函数来创建一个正则表达式，它匹配给定的 searchString，忽略大小写。
- 使用 RegExp.prototype.test() 检查字符串是否包含子字符串。

```js
const includesCaseInsensitive = (str, searchString) =>
  new RegExp(searchString, 'i').test(str);
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/includes-case-insensitive.ts" data-language="typescript"></div>

> 调用方式:

```js
includesCaseInsensitive('Blue Whale', 'blue'); // true
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/includes-case-insensitive.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/includes-case-insensitive.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/includes-case-insensitive.html"></iframe>
