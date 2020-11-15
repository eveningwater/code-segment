|  标题   | 标签  |
|  ----  | ----  |
| URLJoin(将给定的URL连接在一起并规范化URL) | string,regexp,advanced(字符串，正则表达式，高级的) |

将所有给定的URL段连接在一起，然后规范化结果URL。

* 使用`String.prototype.join('/')`组合URL段
* 使用一系列带有各种正则表达式的`String.prototype.replace()`调用来规范化所得的URL（删除双斜杠，为协议添加适当的斜杠，在参数之前删除斜杠，将参数与“&”组合以及对第一个参数定界符进行标准化）。

> 代码如下:

```js
    const URLJoin = (...args) => (
        args.join('/').replace(/[\/]+/g, '/').replace(/^(.+):\//, '$1://').replace(/^file:/, 'file:/').replace(/\/(\?|&|#[^!])/g, '$1').replace(/\?/g, '&').replace('&', '?')
    )
```

> 调用方式:

```js
    URLJoin('http://www.google.com', 'a', '/b/cd', '?foo=123', '?bar=foo');
    // 'http://www.google.com/a/b/cd?foo=123&bar=foo'
```

> 应用场景