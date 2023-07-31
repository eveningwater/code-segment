| 标题                             | 标签           |
| -------------------------------- | -------------- |
| border-with-top-triangle(对话框) | visual(视觉的) |

创建一个顶部带有三角形的内容容器。

- 使用 :before 和 :after 伪元素创建两个三角形。
- 两个三角形的颜色应分别与容器的边框颜色和容器的背景颜色相同。
- 一个三角形的边框宽度 (:before) 应该比另一个三角形 (:after) 宽 1px，以便充当边框。
- 较小的三角形 (:after) 应位于较大三角形 (:before) 右侧 1px 处，以允许显示其左边框。

```css
.container {
  --borderColor--: #ddd;
  --bgColor--: #fff;
  position: relative;
  background-color: var(--bgColor--);
  padding: 15px;
  margin-top: 20px;
  border: 1px solid var(--borderColor--);
}
.container:before,
.container:after {
  content: '';
  position: absolute;
  bottom: 100%;
  left: 19px;
  border: 11px solid transparent;
  border-bottom-color: var(--borderColor--);
}
.container:after {
  left: 20px;
  border: 10px solid transparent;
  border-bottom-color: var(--bgColor--);
}
```

```html
<div class="container">Border with top triangle</div>
```

> 应用场景

<div class="code-editor" data-url="codes/css/html/border-with-top-triangle.html" data-language="html"></div>

结果如下:

<iframe src="codes/css/html/border-with-top-triangle.html"></iframe>
