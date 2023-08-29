| 标题                             | 标签                       |
| -------------------------------- | -------------------------- |
| fit-image-in-container(填充图片) | layout,visual(布局,视觉的) |

将图像适当地放置在其容器内，同时保持其纵横比。

- 使用 object-fit: contains 来适应容器内的整个图像，同时保持其纵横比。
- 使用 object-fit:cover 用图像填充容器，同时保持其纵横比。
- 使用 object-position: center 将图像定位在容器的中心。

```html
<img class="image image-contain" src="https://picsum.photos/600/200" />
<img class="image image-cover" src="https://picsum.photos/600/200" />
```

```css
.image {
  width: 200px;
  height: 200px;
  border: 1px solid #34495e;
  background-color: #34495e;
}
.image-contain {
  object-fit: contain;
  object-position: center;
}
.image-cover {
  object-fit: cover;
  object-position: right top;
}
```

> 应用场景

<div class="code-editor" data-url="codes/css/html/fit-image-in-container.html" data-language="html"></div>

结果如下:

<iframe src="codes/css/html/fit-image-in-container.html"></iframe>
