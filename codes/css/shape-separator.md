| 标题                        | 标签           |
| --------------------------- | -------------- |
| shape-separator(形状分隔符) | visual(视觉的) |

使用 SVG 形状在两个不同的块之间创建分隔符。

- 使用 ::after 伪元素创建分隔元素。
- 使用 background-image 通过数据 URI 添加 SVG（24x12 三角形）形状。 背景图像将默认重复，覆盖伪元素的整个区域。
- 使用父元素的背景为分隔符设置所需的颜色。

```html
<div class="shape-separator"></div>
```

```css
.shape-separator {
  width: 100%;
  position: relative;
  height: 48px;
  background-color: #9c27bd;
}
.shape-separator::after {
  content: '';
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 12'%3E%3Cpath d='m12 0l12 12h-24z' fill='transparent'/%3E%3C/svg%3E");
  position: absolute;
  width: 100%;
  height: 12px;
  bottom: 0;
  border: 1px solid #c85fe6;
}
```

> 应用场景

<div class="code-editor" data-url="codes/css/html/shape-separator.html" data-language="html"></div>

结果如下:

<iframe src="codes/css/html/shape-separator.html"></iframe>
