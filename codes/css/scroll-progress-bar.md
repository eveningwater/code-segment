| 标题                            | 标签                           |
| ------------------------------- | ------------------------------ |
| scroll-progress-bar(滚动进度条) | animation,visual(动画,视觉的)) |

创建一个进度条，指示页面的滚动百分比。

- 使用 position: fixed 和较大的 z-index 值将元素放置在页面顶部和任何内容之上。
- 使用 EventTarget.addEventListener() 和 Element.scrollTop 确定文档的滚动百分比并将其应用于元素的宽度。

```html
<div class="scroll-progress-bar" id="scroll-progress-bar"></div>
```

```css
body {
  min-height: 200vh;
}
.scroll-progress-bar {
  width: 0%;
  position: fixed;
  top: 0;
  left: 0;
  height: 4px;
  background: linear-gradient(135deg, #b3d5f7 10%, #9643e9 90%);
  z-index: 10000;
}
```

```js
const scrollBar = document.getElementById('scroll-progress-bar');
const height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;
window.addEventListener('scroll', () => {
  const scrollTop =
    document.body.scrollTop || document.documentElement.scrollTop;
  scrollBar.style.width = `${(scrollTop / height) * 100}%`;
});
```

> 应用场景

<div class="code-editor" data-url="codes/css/html/scroll-progress-bar.html" data-language="html"></div>

结果如下:

<iframe src="codes/css/html/scroll-progress-bar.html"></iframe>
