| 标题         | 标签           |
| ------------ | -------------- |
| circle(画圆) | visual(视觉的) |

用纯 CSS 创建一个圆形。

- 使用 border-radius: 50% 来弯曲元素的边界以创建一个圆形。
- 由于圆在任何给定点具有相同的半径，因此宽度和高度必须相同。 不同的值将创建一个椭圆。

```html
<div class="circle"></div>
```

```css
.circle {
  border-radius: 50%;
  width: 32px;
  height: 32px;
  background-color: #9c27bd;
}
```

> 应用场景

<div class="code-editor" data-url="codes/css/html/circle.html" data-language="html"></div>

结果如下:

<iframe src="codes/css/html/circle.html"></iframe>
