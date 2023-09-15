| 标题                         | 标签                          |
| ---------------------------- | ----------------------------- |
| image-hover-rotate(悬浮旋转) | animation,visual(动画,视觉的) |

为悬停时的图像创建旋转效果。

- 将鼠标悬停在父元素 (`<figure>`) 上时，使用 scale()、rotate() 和 transition 属性为图像设置动画。
- 使用 overflow:hidden 在父元素上隐藏多余的图像变换。

```html
<figure class="hover-rotate">
  <img
    src="https://www.eveningwater.com/img/segmentfault/1.png"
    alt="图片加载中"
    class="hover-rotate-img"
  />
</figure>
```

```css
.hover-rotate {
  overflow: hidden;
  margin: 8px;
  min-width: 240px;
  max-width: 320px;
  width: 100%;
  cursor: pointer;
}
.hover-rotate-img {
  transition: all 0.3s;
  box-sizing: border-box;
  max-width: 100%;
}
.hover-rotate:hover .hover-rotate-img {
  transform: scale(1.3) rotate(5deg);
}
```

> 应用场景

<div class="code-editor" data-url="codes/css/html/image-hover-rotate.html" data-language="html"></div>

结果如下:

<iframe src="codes/css/html/image-hover-rotate.html"></iframe>
