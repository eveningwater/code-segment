| 标题                            | 标签            |
| ------------------------------- | --------------- |
| getProtocol(获取当前页面的协议) | browser(浏览器) |

获取当前页面使用的协议。

- 使用 Window.location.protocol 获取当前页面的协议（http: 或 https:）。

```js
const getProtocol = () => window.location.protocol;
```

> 调用方式:

```js
getProtocol(); // 'https:'
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/getProtocol.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/getProtocol.html"></iframe>
