|  标题   | 标签  |
|  ----  | ----  |
| isBrowserTabFocused(检查页面的浏览器选项卡是否获得焦点) | browser,node(浏览器，节点) |

检查页面的浏览器选项卡是否获得焦点。

* 使用 [Page Visibility API](https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API) 引入的 Document.hidden 属性来检查页面的浏览器选项卡是可见还是隐藏。

```js
const isBrowserTabFocused = () => !document.hidden;
```

> 调用方式:

```js
isBrowserTabFocused(); // true
```

> 应用场景

<iframe src="codes/javascript/html/isBrowserTabFocused.html"></iframe>







