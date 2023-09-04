| 标题                             | 标签         |
| -------------------------------- | ------------ |
| grid-centering(网格垂直水平居中) | layout(布局) |

使用网格在父元素中水平和垂直居中子元素。

- 使用 display:grid 创建网格布局。
- 使用 justify-content: center 将子节点水平居中。
- 使用 align-items: center 将子节点垂直居中。

```html
<div class="grid-centering">
  <div class="child">Centered content</div>
</div>
```

```css
.grid-centering {
  display: grid;
  height: 100px;
  justify-content: center;
  align-items: center;
}
```

> 应用场景

<div class="code-editor" data-url="codes/css/html/grid-centering.html" data-language="html"></div>

结果如下:

<iframe src="codes/css/html/grid-centering.html"></iframe>
