|  标题   | 标签  |
|  ----  | ----  |
| cloneRegExp(正则表达式的复制) | type,intermediate(类型，两者之间的) |

复制一个正则表达式。

* 使用 `new RegExp()`、`RegExp.prototype.source` 和 `RegExp.prototype.flags` 复制给定的正则表达式。

> 代码如下:

```js
    const cloneRegExp = regExp => new RegExp(regExp.source,regExp.flags);
```

> 调用方式:

```js
    const regExp = /lorem ipsum/gi;
    const regExp2 = cloneRegExp(regExp); // regExp !== regExp2
```

> 应用场景