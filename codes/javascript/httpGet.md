| 标题              | 标签            |
| ----------------- | --------------- |
| httpGet(Get 请求) | browser(浏览器) |

向传递的 URL 发出 GET 请求。

- 使用 XMLHttpRequest Web API 向给定的 url 发出 GET 请求。
- 通过调用给定的回调 responseText 来处理 onload 事件。
- 通过运行提供的 err 函数来处理 onerror 事件。
- 省略第三个参数 err，默认情况下将错误记录到控制台的错误流中。

```js
const httpGet = (url, callback, error = console.error) => {
  const request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.onload = () => callback(request.responseText);
  request.onerror = () => error(request);
  request.send();
};
```

> 调用方式:

```js
httpGet('https://jsonplaceholder.typicode.com/posts/1', console.log); /*
Logs: {
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}
*/
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/httpGet.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/httpGet.html"></iframe>
