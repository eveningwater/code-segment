| 标题            | 标签                        |
| --------------- | --------------------------- |
| offscreen(离屏) | visual,layout(视觉的，布局) |

在 DOM 中完全（在视觉上和位置上）隐藏一个元素，同时仍然允许它被访问。

- 删除所有边框和填充并隐藏元素的溢出。
- 使用剪辑来定义不显示元素的任何部分。
- 将元素的高度和宽度设为 1px，并使用 margin: -1px 将它们取反。
- 使用 position: absolute 以便元素不占用 DOM 中的空间。
- 注意：此技术提供了一种可访问且布局友好的替代方法 display: none （屏幕阅读器不可读）和 visibility: hidden （占用 DOM 中的物理空间）。

```html
<a href="https://www.eveningwater.com" class="button" target="_blank">
  Learn More <span class="offscreen">about pants</span>
</a>
```

```css
.offscreen {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}
```

> 应用场景

<div class="code-editor" data-url="codes/css/html/offscreen.html" data-language="html"></div>

结果如下:

<iframe src="codes/css/html/offscreen.html"></iframe>
