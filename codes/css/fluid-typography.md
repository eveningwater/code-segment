| 标题                       | 标签           |
| -------------------------- | -------------- |
| fluid-typography(流体排版) | visual(视觉的) |

创建根据视口宽度缩放的文本。

- 使用 clamp() CSS 函数将 font-size 的值限制在 1rem 和 3rem 之间。
- 使用公式 8vw - 2rem 计算字体大小的响应值（1rem 为 600 像素，3rem 为 1000 像素）。

```html
<p class="fluid-type">Hello,World!</p>
```

```css
.fluid-type {
  font-size: clamp(1rem, 8vw - 2rem, 3rem);
}
```

> 应用场景

<div class="code-editor" data-url="codes/css/html/fluid-typography.html" data-language="html"></div>

结果如下:

<iframe src="codes/css/html/fluid-typography.html"></iframe>
