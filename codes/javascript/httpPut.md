|  标题   | 标签  |
|  ----  | ----  |
| httpPut(Get请求) | browser(浏览器) |

向传递的 URL 发出 PUT 请求。

* 使用 XMLHttpRequest web api 向给定的 url 发出 PUT 请求。
* 使用 setRequestHeader 方法设置 HTTP 请求标头的值。
* 通过运行提供的回调函数来处理 onload 事件。
* 通过运行提供的 err 函数来处理 onerror 事件。
* 省略最后一个参数 err 默认将请求记录到控制台的错误流中。

```js
const httpPut = (url,data,callback,error = console.error) => {
    const request = new XMLHttpRequest();
    request.open('PUT',url,true);
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.onload = () => callback(request.responseText);
    request.onerror = () => error(request);
    request.send(data);
}
```

> 调用方式:

```js
const password = 'fooBaz';
const data = JSON.stringify({
  id: 1,
  title: 'foo',
  body: 'bar',
  userId: 1
});
httpPut('https://jsonplaceholder.typicode.com/posts/1', data, request => {
  console.log(request.responseText);
}); /*
Logs: {
  id: 1,
  title: 'foo',
  body: 'bar',
  userId: 1
}
*/
```

> 应用场景

<iframe src="codes/javascript/html/httpPut.html"></iframe>





















