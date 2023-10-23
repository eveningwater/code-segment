| 标题                            | 标签           |
| ------------------------------- | -------------- |
| zig-zag-pattern(锯齿形背景图案) | visual(视觉的) |

创建锯齿形背景图案。

- 使用 background-color 设置白色背景。
- 使用具有四个 linear-gradient() 值的背景图像来创建锯齿形图案的各个部分。
- 使用 background-size 指定图案的大小。 使用 background-position 将图案的各个部分放置在正确的位置。
- 注意：元素的固定高度和宽度仅用于演示目的。

```html
<div class="zig-zag"></div>
```

```css
.zig-zag {
  width: 240px;
  height: 240px;
  background-color: #fff;
  background-size: 60px 60px;
  background-repeat: repeat;
  background-position: -30px 0, -30px 0, 0 0, 0 0;
  background-image: linear-gradient(135deg, #000 25%, transparent 25%),
    linear-gradient(225deg, #000 25%, transparent 25%), linear-gradient(
      3155deg,
      #000 25%,
      transparent 25%
    ), linear-gradient(455deg, #000 25%, transparent 25%);
}
```

> 应用场景

<div class="code-editor" data-url="codes/css/html/zebra-striped-list.html" data-language="html"></div>

结果如下:

<iframe src="codes/css/html/zebra-striped-list.html"></iframe>
