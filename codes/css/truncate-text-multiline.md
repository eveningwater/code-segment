| 标题                             | 标签           |
| -------------------------------- | -------------- |
| truncate-text-multiline(截断多行文本) | layout(布局) |

截断超过一行的文本。

* 使用 overflow: hidden 来防止文本溢出其尺寸。
* 设置固定宽度以确保元素至少具有一个恒定尺寸。
* 设置height:109.2px，根据字体大小计算，使用公式字体大小 * 行高 * numberOfLines（在本例中为 26 * 1.4 * 3 = 109.2）。
* 设置高度：为渐变容器计算的 36.4px，基于公式字体大小 * 行高（在本例中为 26 * 1.4 = 36.4）。
* 使用带有 linear-gradient() 的背景来创建从透明到背景颜色的渐变。

```html
<p class="truncate-text-multiline">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
    eirmod tempor invidunt ut labore et.
</p>
```

```css
.truncate-text-multiline {
    position: relative;
    overflow: hidden;
    display: block;
    height: 109.2px;
    margin: 0 auto;
    font-size: 26px;
    line-height: 1.4;
    width: 400px;
    background-color: #f5f6f9;
    color: #333;
}

.truncate-text-multiline::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 150px;
    height: 36.4px;
    background: linear-gradient(to right, rgba(0, 0, 0, 0), #f5f6f9 50%);
}
```

> 应用场景

<iframe src="codes/css/html/truncate-text-multiline.html"></iframe>
