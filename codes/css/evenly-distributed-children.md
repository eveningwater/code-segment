| 标题                                        | 标签         |
| ------------------------------------------- | ------------ |
| evenly-distributed-children(均匀分布子元素) | layout(布局) |

在父元素内均匀分布子元素。

- 使用 display: flex 来使用 flexbox 布局。
- 使用 justify-content: space-between 水平均匀分布子元素。 第一项位于左边缘，而最后一项位于右边缘。
- 或者，使用 justify-content: space-around 分配孩子周围的空间，而不是在他们之间。

```html
<div class="evenly-distributed-children">
  <p>Item1</p>
  <p>Item2</p>
  <p>Item3</p>
</div>
```

```css
.evenly-distributed-children {
  display: flex;
  justify-content: space-between;
}
```

> 应用场景

<div class="code-editor" data-url="codes/css/html/evenly-distributed-children.html" data-language="html"></div>

结果如下:

<iframe src="codes/css/html/evenly-distributed-children.html"></iframe>
