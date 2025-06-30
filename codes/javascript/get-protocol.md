| 标题                            | 标签            |
| ------------------------------- | --------------- |
| getProtocol(获取当前页面的协议) | browser(浏览器) |

获取当前页面使用的协议。

- 使用 Window.location.protocol 获取当前页面的协议（http: 或 https:）。

```js
const getProtocol = () => window.location.protocol;
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/get-protocol.ts" data-language="typescript"></div>

> 调用方式:

```js
getProtocol(); // 'https:'
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/get-protocol.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/get-protocol.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/get-protocol.html"></iframe>
