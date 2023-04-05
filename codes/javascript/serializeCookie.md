| 标题                           | 标签                           |
| ------------------------------ | ------------------------------ |
| serializeCookie(序列化 cookie) | browser,string(浏览器，字符串) |

将 cookie 名称-值对序列化为 Set-Cookie 标头字符串。

- 使用模板字符串和 encodeURIComponent() 创建适当的字符串。

```js
const serializeCookie = (name, val) =>
  `${encodeURIComponent(name)}=${encodeURIComponent(val)}`;
```

> 调用方式:

```js
serializeCookie('foo', 'bar'); // 'foo=bar'
```

> 应用场景
