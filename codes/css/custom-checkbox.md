| 标题                          | 标签                           |
| ----------------------------- | ------------------------------ |
| custom-checkbox(自定义复选框) | visual,animation(视觉的，动画) |

创建带有状态更改动画的样式复选框。

- 使用 `<svg>` 元素创建检查 `<symbol>` 并通过 `<use>` 元素将其插入以创建可重用的 SVG 图标。
- 创建一个 .ew-checkbox-group 并使用 flexbox 为复选框创建适当的布局。
- 隐藏 `<input>` 元素并使用与其关联的标签来显示复选框和提供的文本。
- 使用 stroke-dashoffset 在状态更改时为检查符号设置动画。
- 通过 CSS 动画使用 transform: scale(0.9) 创建缩放动画效果。

```html
<div class="ew-checkbox-group">
  <label class="ew-checkbox">
    <svg class="ew-checkbox-symbol">
      <symbol id="ew-check" viewbox="0 0 12 10">
        <polyline
          points="1.5 6 4.5 9 10.5 1"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        ></polyline>
      </symbol>
    </svg>
    <input type="checkbox" class="ew-checkbox-input" />
    <span class="ew-checkbox-item">
      <svg class="ew-checkbox-icon" width="12px" height="10px">
        <use xlink:href="#ew-check"></use>
      </svg>
    </span>
    <span class="ew-checkbox-item"> Apples </span>
  </label>
  <label class="ew-checkbox">
    <input type="checkbox" class="ew-checkbox-input" />
    <span class="ew-checkbox-item">
      <svg class="ew-checkbox-icon" width="12px" height="10px">
        <use xlink:href="#ew-check"></use>
      </svg>
    </span>
    <span class="ew-checkbox-item"> Oranges </span>
  </label>
</div>
```

```css
.ew-checkbox-group {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.85);
  height: 64px;
  display: flex;
  flex-wrap: row wrap;
  justify-content: center;
  align-items: center;
}
.ew-checkbox-group .ew-checkbox-symbol {
  width: 0;
  height: 0;
  position: absolute;
  pointer-events: none;
  user-select: none;
}
.ew-checkbox-group * {
  box-sizing: border-box;
}
.ew-checkbox-input {
  position: absolute;
  visibility: hidden;
}
.ew-checkbox {
  user-select: none;
  cursor: pointer;
  padding: 6px 8px;
  border-radius: 6px;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  display: flex;
}
.ew-checkbox:not(:last-of-type) {
  margin-right: 6px;
}
.ew-checkbox:hover {
  background-color: rgba(0, 120, 255, 0.06);
}
.ew-checkbox .ew-checkbox-item {
  vertical-align: middle;
  transform: translate3d(0, 0, 0);
}
.ew-checkbox .ew-checkbox-item:first-of-type {
  position: relative;
  flex: 0 0 18px;
  width: 18px;
  height: 18px;
  border-radius: 4px;
  transform: scale(1);
  border: 1px solid #cdcdfd;
  transition: all 0.4s ease;
}
.ew-checkbox .ew-checkbox-icon {
  position: absolute;
  top: 3px;
  left: 2px;
  fill: none;
  stroke: #fff;
  stroke-dasharray: 16px;
  stroke-dashoffset: 16px;
  transition: all 0.4s ease;
  transform: translate3d(0, 0, 0);
}
.ew-checkbox .ew-checkbox-item:last-of-type {
  padding-left: 8px;
  line-height: 18px;
}
.ew-checkbox:hover .ew-checkbox-item:first-of-type {
  border-color: #2396ef;
}
.ew-checkbox-input:checked + .ew-checkbox-item:first-of-type {
  animation: zoom-in-out 0.3s ease;
  background-color: #2396ef;
  border-color: #2396ef;
}
.ew-checkbox-input:checked + .ew-checkbox-item .ew-checkbox-icon {
  stroke-dashoffset: 0;
}
@keyframes zoom-in-out {
  50% {
    transform: scale(0.9);
  }
}
```

> 应用场景

<div class="code-editor" data-url="codes/css/html/custom-checkbox.html" data-language="html"></div>

结果如下:

<iframe src="codes/css/html/custom-checkbox.html"></iframe>
