|  标题   | 标签  |
|  ----  | ----  |
| currentURL(当前路径) | browser,beginner(浏览器，初学者) |

返回当前路径。

* 使用`Window.location.href`得到当前路径。

> 代码如下:

```js
const currentURL = () => window.location.href;
```

> 调用方式:

```js
currentURL(); // 'https://www.google.com/'
```

> 应用场景