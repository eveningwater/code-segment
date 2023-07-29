| 标题                                       | 标签                                                     |
| ------------------------------------------ | -------------------------------------------------------- |
| border-rounded-button(border 实现圆角效果) | border,:before,:after(边框，before 伪元素，after 伪元素) |

border 实现圆角效果。

- 为元素设置相对定位(position:relative)，并且设置与伪元素边框相同的背景色（以遮住边框色，从视觉上达到圆角效果）。
- 为元素的:before 和:after 设置绝对定位，并设置 left 和 right 偏移量为 0，使边框宽度能够填充满整个元素所占的空间，边框类型为实线边框。
- :before 除 top 方向的边框宽度为 0 其余设置为数值宽度(例如设置为 2)px，并且 top 偏移量设置为-数值宽度(例如设置为-2)的 px，边框颜色除了 bottom 方向设置颜色，其余方向设置透明。
- :after 除 bottom 方向的边框宽度为 0 其余设置为数值宽度(例如设置为 2)px，并且 bottom 偏移量设置为-数值宽度(例如设置为-2)的 px，边框颜色除了 top 方向设置颜色，其余方向设置透明。

> PS: 核心原理实际上就是利用 border 的特性创建了上下两个梯形，和背景色结合在一起，就达到了圆角按钮的效果。

```css
.rounded-button {
  /* 重点代码 */
  position: relative;
  /* 注意这里设置该颜色，伪元素的边框颜色也应该是这个色值 */
  background-color: #2396ef;
  /* 非必须代码，自行调整 */
  display: inline-block;
  padding: 12px 24px;
  border: 0;
  color: #fff;
  cursor: pointer;
}
.rounded-button:before,
.rounded-button:after {
  content: '';
  border-style: solid;
  position: absolute;
  left: 0;
  right: 0;
}
.rounded-button:before {
  top: -4px;
  border-width: 0 4px 4px;
  border-color: transparent transparent #2396ef;
}
.rounded-button:after {
  bottom: -4px;
  border-width: 4px 4px 0;
  border-color: #2396ef transparent transparent;
}
```

```html
<button type="button" class="rounded-button">
  圆角为4px的圆角按钮（border实现）
</button>
```

> 应用场景

<div class="code-editor" data-url="codes/css/html/border-rounded-button.html" data-language="html"></div>

结果如下:

<iframe src="codes/css/html/border-rounded-button.html"></iframe>
