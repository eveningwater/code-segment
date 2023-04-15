| 标题                          | 标签                              |
| ----------------------------- | --------------------------------- |
| slugify(将字符串用短横线连接) | string,regexp(字符串，正则表达式) |

将字符串转换为短横线连接字符串。

- 使用 String.prototype.toLowerCase() 和 String.prototype.trim() 规范化字符串。
- 使用 String.prototype.replace() 将空格、破折号和下划线替换为 - 并删除特殊字符。

```js
const slugify = str =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
```

> 调用方式:

```js
slugify('Hello World!'); // 'hello-world'
```

> 应用场景
