| 标题                         | 标签         |
| ---------------------------- | ------------ |
| isSameOrigin(是否是同源 url) | object(对象) |

检查两个 URL 是否在同一个来源。

- 使用 URL.protocol 和 URL.host 检查两个 URL 是否具有相同的协议和主机。

```js
const isSameOrigin = (origin, destination) =>
  origin.protocol === destination.protocol && origin.host === destination.host;
```


ts代码如下:

<div class="code-editor" data-url="codes/javascript/ts/is-same-origin.ts" data-language="typescript"></div>

> 调用方式:

```js
const origin = new URL('https://eveningwater.com/my-web-projects/');
const destination = new URL('https://eveningwater.com/my-web-projects/home/');
isSameOrigin(origin, destination); // true
const other = new URL('https://developer.mozilla.org');
isSameOrigin(origin, other); // false
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/is-same-origin.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/is-same-origin.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/is-same-origin.html"></iframe>
