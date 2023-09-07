| 标题                        | 标签           |
| --------------------------- | -------------- |
| hide-scrollbars(隐藏滚动条) | visual(视觉的) |

隐藏元素上的滚动条，同时仍然允许它可滚动。

- 使用溢出：自动允许元素可滚动。
- 使用 scrollbar-width: none 在 Firefox 上隐藏滚动条。
- 在 ::-webkit-scrollbar 伪元素上使用 display: none 来隐藏 WebKit 浏览器（Chrome、Edge、Safari）上的滚动条。

```html
<div class="no-scrollbars element">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum id
    leo a consectetur. Integer justo magna, ultricies vel enim vitae, egestas
    efficitur leo. Ut nulla orci, rutrum eu augue sed, tempus pellentesque quam.
  </p>
</div>
```

```css
.element {
  width: 200px;
  height: 100px;
  border: 1px solid;
  border-radius: 5px;
}
.no-scrollbars {
  overflow: auto;
  scrollbar-width: none;
}
.no-scrollbars::-webkit-scrollbar {
  display: none;
}
```

> 应用场景

<div class="code-editor" data-url="codes/css/html/hide-scrollbars.html" data-language="html"></div>

结果如下:

<iframe src="codes/css/html/hide-scrollbars.html"></iframe>
