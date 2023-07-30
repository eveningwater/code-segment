| 标题                                 | 标签                                |
| ------------------------------------ | ----------------------------------- |
| aspect-ratio(指定纵横比的响应式容器) | layout,position,var(布局,定位,变量) |

创建具有指定纵横比的响应式容器。

- 使用 CSS 自定义属性 --aspect-ratio 来定义所需的纵横比。
- 将容器元素设置为 position: relative 和 height: 0，使用 calc() 函数和 --aspect-ratio 自定义属性计算其高度。
- 将容器元素的直接子元素设置为 position: absolute 并将其填充为父元素，同时为其赋予 object-fit:cover 以保持纵横比。

```css
.container {
  position: relative;
  height: 0;
  --aspect-ratio--: 16 / 9;
  padding-bottom: calc(100% / (var(--aspect-ratio--)));
}
.container > .container-img {
  position: absolute;
  object-fit: cover;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
```

```html
<div class="container">
  <img src="https://picsum.photos/id/119/800/450" class="container-img" />
</div>
```

> 应用场景

<div class="code-editor" data-url="codes/css/html/aspect-ratio.html" data-language="html"></div>

结果如下:

<iframe src="codes/css/html/aspect-ratio.html"></iframe>
