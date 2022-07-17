|  标题   | 标签  |
|  ----  | ----  |
| getProtocol(获取当前页面的协议) | browser(浏览器) |

返回当前页面的滚动位置。

* 如果已定义，则使用 Window.pageXOffset 和 Window.pageYOffset，否则使用 Element.scrollLeft 和 Element.scrollTop。
* 省略单个参数 el 以使用全局 Window 对象。

```js
const getScrollPosition = (el = window) => ({
    x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
    y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
})
```

> 调用方式:

```js
getScrollPosition(); // {x: 0, y: 200}
```


> 应用场景

<iframe src="codes/javascript/html/getScrollPosition.html"></iframe>














