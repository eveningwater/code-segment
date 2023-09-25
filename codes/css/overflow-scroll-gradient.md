| 标题                               | 标签           |
| ---------------------------------- | -------------- |
| overflow-scroll-gradient(渐变滚动) | visual(视觉的) |

为溢出的元素添加渐变，以更好地指示要滚动的内容更多。

- 使用 :after 伪元素创建一个线性渐变（），从透明渐变为白色（从上到下）。
- 使用 position: absolute、width 和 height 在其父元素中放置和调整伪元素的大小。
- 使用 pointer-events: none 从鼠标事件中排除伪元素，使其后面的文本仍然可以选择/交互。

```html
<div class="overflow-scroll-gradient">
  <div class="overflow-scroll-gradient-scroller">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
    Iure id exercitationem nulla qui repellat laborum vitae, <br />
    molestias tempora velit natus. Quas, assumenda nisi. <br />
    Quisquam enim qui iure, consequatur velit sit? <br />
    Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
    Iure id exercitationem nulla qui repellat laborum vitae, <br />
    molestias tempora velit natus. Quas, assumenda nisi. <br />
    Quisquam enim qui iure, consequatur velit sit?
  </div>
</div>
```

```css
.overflow-scroll-gradient {
  position: relative;
}
.overflow-scroll-gradient::after {
  content: '';
  position: absolute;
  width: 250px;
  bottom: 0;
  height: 25px;
  background: linear-gradient(transparent, white);
  pointer-events: none;
}
.overflow-scroll-gradient-scroller {
  overflow-y: scroll;
  background-color: #fff;
  width: 240px;
  height: 200px;
  padding: 15px;
  line-height: 1.2;
}
```

> 应用场景

<div class="code-editor" data-url="codes/css/html/overflow-scroll-gradient.html" data-language="html"></div>

结果如下:

<iframe src="codes/css/html/overflow-scroll-gradient.html"></iframe>
