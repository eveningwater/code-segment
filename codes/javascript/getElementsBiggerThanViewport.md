| 标题                                                      | 标签            |
| --------------------------------------------------------- | --------------- |
| getElementsBiggerThanViewport(获取元素宽度超过视图的元素) | browser(浏览器) |

返回宽度大于视口宽度的 HTML 元素数组。

- 使用 HTMLElement.offsetWidth 获取 Document 的宽度。
- 在 Document.querySelectorAll() 的结果上使用 Array.prototype.filter() 来检查文档中所有元素的宽度。

```js
const getElementsBiggerThanViewport = () => {
  const docWidth = document.documentElement.offsetWidth;
  return [...document.querySelectorAll('*')].filter(
    el => el.offsetWidth > docWidth
  );
};
```

> 调用方式:

```js
getElementsBiggerThanViewport(); // <div id="ultra-wide-item" />
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/getElementsBiggerThanViewport.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/getElementsBiggerThanViewport.html"></iframe>
