| 标题                                     | 标签                          |
| ---------------------------------------- | ----------------------------- |
| setBrowserUrl(不刷新修改浏览器 url 地址) | history,browser(历史，浏览器) |

不刷新修改浏览器 url 地址。

- 使用 history.pushState 方法修改 url 地址，不会刷新页面。

```js
const setBrowserUrl = url => {
  history.pushState({ url: url }, '', url);
};
```

> 调用方式:

```js
setBrowserUrl('https://www.eveningwater.com/docs/index.html?type=javascript');
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/setBrowserUrl.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/setBrowserUrl.html"></iframe>
