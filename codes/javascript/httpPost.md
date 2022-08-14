|  标题   | 标签  |
|  ----  | ----  |
| httpPost(Get请求) | browser(浏览器) |

向传递的 URL 发出 POST 请求。

* 使用 XMLHttpRequest Web API 向给定的 url 发出 POST 请求。
* 使用 setRequestHeader 方法设置 HTTP 请求标头的值。
* 通过调用给定的回调 responseText 来处理 onload 事件。
* 通过运行提供的 err 函数来处理 onerror 事件。
* 省略第四个参数 err，默认情况下将错误记录到控制台的错误流中。

```js
const httpPost = (url,data,callback,error = console.error) => {
    const request = new XMLHttpRequest();
    request.open('POST',url,true);
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.onload = () => callback(request.responseText);
    request.onerror = () => error(request);
    request.send(data);
}
```

> 调用方式:

```js
const newPost = {
  userId: 1,
  id: 1337,
  title: 'Foo',
  body: 'bar bar bar'
};
const data = JSON.stringify(newPost);
httpPost(
  'https://jsonplaceholder.typicode.com/posts',
  data,
  console.log
); /*
Logs: {
  "userId": 1,
  "id": 1337,
  "title": "Foo",
  "body": "bar bar bar"
}
*/
httpPost(
  'https://jsonplaceholder.typicode.com/posts',
  null, // does not send a body
  console.log
); /*
Logs: {
  "id": 101
}
*/
```

> 应用场景

<iframe src="codes/javascript/html/httpPost.html"></iframe>




















