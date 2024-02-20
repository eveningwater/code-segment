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

> 调用方式:

```js
includesCaseInsensitive('Blue Whale', 'blue'); // true
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/includesCaseInsensitive.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/includesCaseInsensitive.html"></iframe>
