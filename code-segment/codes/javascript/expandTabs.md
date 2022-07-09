|  标题   | 标签  |
|  ----  | ----  |
| expandTabs(将制表符转换为空格) | string,regexp(字符串，正则表达式) |

将制表符转换为空格，其中每个制表符对应于计数空格。

* 使用带有正则表达式的 `String.prototype.replace()` 和 `String.prototype.repeat()` 将每个制表符替换为计数空格。

> 代码如下:

```js
const expandTabs = (str,count) => str.replace(/\t/g,' '.repeat(count));
```

> 调用方式:

```js
expandTabs('\t\tlorem', 3); // '      lorem'
```

> 应用场景