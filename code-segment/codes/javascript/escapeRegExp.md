|  标题   | 标签  |
|  ----  | ----  |
| escapeRegExp(转义正则表达式) | string,regexp(字符串，正则表达式) |

转义要在正则表达式中使用的字符串。

* 使用 `String.prototype.replace()` 转义特殊字符。

> 代码如下:

```js
const escapeRegExp = str => str.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
```

> 调用方式:

```js
escapeRegExp('(test)'); // \\(test\\)
```

> 应用场景