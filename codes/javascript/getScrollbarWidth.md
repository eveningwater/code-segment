| 标题                                        | 标签            |
| ------------------------------------------- | --------------- |
| getScrollbarWidth(计算窗口垂直滚动条的宽度) | browser(浏览器) |

计算窗口垂直滚动条的宽度。

- 使用 Window.innerWidth 获取窗口的内部宽度。
- 使用 Element.clientWidth 获取 Document 元素的内部宽度。
- 减去这两个值得到垂直滚动条的宽度。

```js
const getScrollbarWidth = () =>
  window.innerWidth - document.documentElement.clientWidth;
```

> 调用方式:

```js
getScrollbarWidth(); // 15
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/getScrollbarWidth.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/getScrollbarWidth.html"></iframe>
