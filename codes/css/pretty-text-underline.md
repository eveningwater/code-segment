| 标题                                    | 标签           |
| --------------------------------------- | -------------- |
| pretty-text-underline(漂亮的文本下划线) | visual(视觉的) |

为文本装饰提供了一个更好的替代方案：下划线，其中下划线不剪裁下划线。

- 使用 text-shadow 应用 4 个值，偏移量覆盖 4x4 px 区域。 这确保了下划线有一个厚阴影，覆盖了下行夹住它的线。 为获得最佳效果，请使用与背景匹配的颜色，并针对较大字体调整 px 值。
- 使用带有 linear-gradient() 和 currentColor 的 background-image 创建一个渐变，作为实际的下划线。
- 设置 background-position、background-repeat 和 background-size 以将渐变放置在正确的位置。
- 使用 ::selection 伪类选择器来确保文本阴影不会干扰文本选择。
- 注意：这是原生实现的: text-decoration-skip-ink: auto,但它对下划线的控制较少。

```html
<div class="container">
  <p class="pretty-text-underline">
    Pretty text underline without clipping descenders.
  </p>
</div>
```

```css
.container {
  background-color: #2396ef;
  color: #535455;
  padding: 8px 0;
}
.pretty-text-underline {
  display: inline;
  text-shadow: 1px 1px #f5f6f9, -1px 1px #f5f6f9, -1px -1px #f5f6f9, 1px -1px
      #f5f6f9;
  background-image: linear-gradient(90deg, currentColor 100%, transparent 100%);
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 100% 1px;
}
.pretty-text-underline::selection {
  background-color: rgba(0, 150, 255, 0.3);
  text-shadow: none;
}
```

> 应用场景

<div class="code-editor" data-url="codes/css/html/pretty-text-underline.html" data-language="html"></div>

结果如下:

<iframe src="codes/css/html/pretty-text-underline.html"></iframe>
