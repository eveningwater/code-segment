|  标题   | 标签  |
|  ----  | ----  |
| isSameOrigin(是否是同源url) | object(对象) |

检查两个 URL 是否在同一个来源。

* 使用 URL.protocol 和 URL.host 检查两个 URL 是否具有相同的协议和主机。

```js
const isSameOrigin = (origin,destination) => origin.protocol === destination.protocol && origin.host === destination.host;
```

> 调用方式:

```js
const origin = new URL('https://eveningwater.com/my-web-projects/');
const destination = new URL('https://eveningwater.com/my-web-projects/home/');
isSameOrigin(origin, destination); // true
const other = new URL('https://developer.mozilla.org);
isSameOrigin(origin, other); // false
```

> 应用场景
