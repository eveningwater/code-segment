| 标题                             | 标签           |
| -------------------------------- | -------------- |
| transform-centering(位移居中) | layout(布局)) |

使用 CSS 转换将子元素在其父元素中垂直和水平居中。

* 将父级的位置设置为相对位置，将子级的位置设置为绝对位置，以使其相对于其父级。
* 使用 left: 50% 和 top: 50% 将子元素从包含块的左上边缘偏移 50%。
* 使用 transform: translate(-50%, -50%) 取反它的位置，使其垂直和水平居中。
* 注意：父元素的固定高度和宽度仅用于演示目的。

```html
<div class="parent">
    <div class="child">Centered content</div>
</div>
```

```css
.parent {
    border: 1px solid #9c27b0;
    height: 250px;
    width: 250px;
    position: relative;
}
.child {
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
```

> 应用场景

<iframe src="codes/css/html/transform-centering.html"></iframe>




