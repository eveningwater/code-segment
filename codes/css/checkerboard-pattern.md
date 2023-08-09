| 标题                               | 标签           |
| ---------------------------------- | -------------- |
| checkerboard-pattern(棋盘背景图案) | visual(视觉的) |

创建棋盘背景图案。

- 使用 background-color 设置白色背景。
- 使用具有两个 linear-gradient() 值的背景图像。 给每个人一个不同的角度来创建棋盘图案。
- 使用 background-size 指定图案的大小。
- 注意：元素的固定高度和宽度仅用于演示目的。

```html
<div class="checkerboard"></div>
```

```css
.checkerboard {
  width: 240px;
  height: 240px;
  background-color: #fff;
  background-image: linear-gradient(
      45deg,
      #000 25%,
      transparent 25%,
      transparent 75%,
      #000 75%,
      #000
    ), linear-gradient(-45deg, #000 25%, transparent 25%, transparent 75%, #000
        75%, #000);
  background-size: 60px 60px;
  background-repeat: repeat;
}
```

> 应用场景

<div class="code-editor" data-url="codes/css/html/checkerboard-pattern.html" data-language="html"></div>

结果如下:

<iframe src="codes/css/html/checkerboard-pattern.html"></iframe>
