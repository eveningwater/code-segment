| 标题                                           | 标签         |
| ---------------------------------------------- | ------------ |
| tile-layout-using-inline-block(内联块平铺布局) | layout(布局) |

使用 display: inline-block 水平对齐项目以创建 3-tile 布局。

- 使用 display: inline-block 创建平铺布局，而不使用浮动、弹性或网格。
- 使用 width 结合 calc 将容器的宽度均匀地分成 3 列。
- 将 .tiles 的 font-size 设置为 0 以避免空白，将 `<div>` 元素设置为 14px 以显示文本。
- 注意：如果您使用相对单位（例如 em），使用 font-size: 0 来消除块之间的空白可能会导致副作用。

```html
<div class="tiles">
  <div class="tile">
    <img
      src="https://www.eveningwater.com/img/segmentfault/1.png"
      alt=""
      class="tile-img"
    />
    <div class="tile-title">30 Seconds of css</div>
  </div>
  <div class="tile">
    <img
      src="https://www.eveningwater.com/img/segmentfault/2.png"
      alt=""
      class="tile-img"
    />
    <div class="tile-title">30 Seconds of css</div>
  </div>
  <div class="tile">
    <img
      src="https://www.eveningwater.com/img/segmentfault/3.png"
      alt=""
      class="tile-img"
    />
    <div class="tile-title">30 Seconds of css</div>
  </div>
</div>
```

```css
.tiles {
  width: 600px;
  font-size: 0;
  margin: 0 auto;
  color: #535455;
}
.tile {
  width: calc(600px / 3 - 45px);
  display: inline-block;
  margin-right: 15px;
}
.tile .tile-title {
  font-size: 15px;
  margin-top: 10px;
}
.tile .tile-img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}
```

> 应用场景

<div class="code-editor" data-url="codes/css/html/tile-layout-using-inline-block.html" data-language="html"></div>

结果如下:

<iframe src="codes/css/html/tile-layout-using-inline-block.html"></iframe>
