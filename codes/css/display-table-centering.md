| 标题                                              | 标签         |
| ------------------------------------------------- | ------------ |
| display-table-centering(水平垂直居中（表格布局）) | layout(布局) |

使用 display: table 将子元素在其父元素中垂直和水平居中。

- 使用 display: table 使 .center 元素表现得像 `<table>` 元素。
- 将高度和宽度设置为 100% 以使元素填充其父元素内的可用空间。
- 在子元素上使用 display: table-cell 使其表现得像 `<td>` 元素。
- 在子元素上使用 text-align: center 和 vertical-align: middle 使其水平和垂直居中。
- 外部父级 (.container) 必须具有固定的宽度和高度。

```html
<div class="container">
  <div class="center">
    <span>Centered content</span>
  </div>
</div>
```

```css
.container {
  width: 250px;
  height: 250px;
  border: 1px solid #9c27bd;
}
.center {
  width: 100%;
  height: 100%;
  display: table;
}
.center > span {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}
```

> 应用场景

<div class="code-editor" data-url="codes/css/html/display-table-centering.html" data-language="html"></div>

结果如下:

<iframe src="codes/css/html/display-table-centering.html"></iframe>
