| 标题                    | 标签            |
| ----------------------- | --------------- |
| httpDelete(Delete 请求) | browser(浏览器) |

向传递的 URL 发出 DELETE 请求。

- 使用 XMLHttpRequest Web API 向给定的 url 发出 DELETE 请求。
- 通过运行提供的回调函数来处理 onload 事件。
- 通过运行提供的 err 函数来处理 onerror 事件。
- 省略第三个参数 err 默认将请求记录到控制台的错误流。

```js
const httpDelete = (url, callback, error = console.error) => {
  const request = new XMLHttpRequest();
  request.open('DELETE', url, true);
  request.onload = () => callback(request);
  request.onerror = () => error(request);
  request.send();
};
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/http-delete.ts" data-language="typescript"></div>

> 调用方式:

```js
httpDelete('https://jsonplaceholder.typicode.com/posts/1', request => {
  console.log(request.responseText);
}); // Logs: {}
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/http-delete.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/http-delete.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/http-delete.html"></iframe>
