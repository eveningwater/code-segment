| 标题                | 标签            |
| ------------------- | --------------- |
| addStyles(添加样式) | browser(浏览器) |

将提供的样式添加到给定的 HTML 元素。

- 使用 `Object.assign()` 和 `ElementCSSInlineStyle.style` 将提供的样式对象合并到给定元素的样式中。

> 代码如下:

```js
const addStyles = (el, styles) => Object.assign(el.style, styles);
```

> 调用方式:

```js
addStyles(document.getElementById('my-element'), {
  background: 'red',
  color: '#ffff00',
  fontSize: '3rem'
});
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/addStyles.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/addStyles.html"></iframe>
