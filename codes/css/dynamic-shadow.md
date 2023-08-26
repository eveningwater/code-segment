| 标题                     | 标签           |
| ------------------------ | -------------- |
| dynamic-shadow(动态阴影) | visual(视觉的) |

创建一个类似于 box-shadow 但基于元素本身颜色的阴影。

- 使用 :after 伪元素与 position: absolute 和 width 和 height 等于 100% 来填充父元素中的可用空间。
- 使用 background:inherit 继承父元素的背景。
- 使用 top 稍微偏移伪元素， filter: blur() 创建阴影和不透明度使其半透明。
- 在父元素上使用 z-index: 1 并在伪元素上使用 z-index: -1 将其定位在其父元素的后面。

```html
<div class="dynamic-shadow"></div>
```

```css
.dynamic-shadow {
  position: relative;
  width: 10rem;
  height: 10rem;
  background: linear-gradient(75deg, #6db1ff, #063bad);
  z-index: 1;
}
.dynamic-shadow::after {
  content: '';
  width: 100%;
  height: 100%;
  background: inherit;
  top: 0.5rem;
  position: absolute;
  opacity: 0.7;
  z-index: -1;
  filter: blur(0.4rem);
}
```

> 应用场景

<div class="code-editor" data-url="codes/css/html/dynamic-shadow.html" data-language="html"></div>

结果如下:

<iframe src="codes/css/html/dynamic-shadow.html"></iframe>
