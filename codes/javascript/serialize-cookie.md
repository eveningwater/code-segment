| 标题                           | 标签                           |
| ------------------------------ | ------------------------------ |
| serializeCookie(序列化 cookie) | browser,string(浏览器，字符串) |

将 cookie 名称-值对序列化为 Set-Cookie 标头字符串。

- 使用模板字符串和 encodeURIComponent() 创建适当的字符串。

```js
const serializeCookie = (name, val) =>
  `${encodeURIComponent(name)}=${encodeURIComponent(val)}`;
```

<div class="code-editor" data-url="codes/javascript/ts/serialize-cookie.ts" data-language="typescript"></div>

> 调用方式:

```js
serializeCookie('foo', 'bar'); // 'foo=bar'
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/serialize-cookie.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/serialize-cookie.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/serialize-cookie.html"></iframe>