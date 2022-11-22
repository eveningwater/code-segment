| 标题                             | 标签           |
| -------------------------------- | -------------- |
| truncate-text(单行文本截断) | layout(布局)) |

截断超过一行的文本，在末尾添加一个省略号 (...)。

* 使用溢出：隐藏来防止文本溢出其尺寸。
* 使用 white-space: nowrap 来防止文本超过一行的高度。
* 使用 text-overflow: ellipsis 来制作它，这样如果文本超出其尺寸，它将以省略号结尾。
* 为元素指定固定宽度以了解何时显示省略号。
* 仅适用于单行元素。

```html
<p class="truncate-text">If I exceed one line's width, I will be truncated.</p>
```

```css
.truncate-text {
    width: 200px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
```

> 应用场景

<iframe src="codes/css/html/truncate-text.html"></iframe>