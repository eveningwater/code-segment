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

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/get-scrollbar-width.ts" data-language="typescript"></div>

> 调用方式:

```js
getScrollbarWidth(); // 15
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/get-scrollbar-width.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/get-scrollbar-width.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/get-scrollbar-width.html"></iframe>
