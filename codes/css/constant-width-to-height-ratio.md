| 标题                                         | 标签         |
| -------------------------------------------- | ------------ |
| constant-width-to-height-ratio(恒定的宽高比) | layout(布局) |

确保具有可变宽度的元素将保留成比例的高度值。

- 在 :before 伪元素上应用 padding-top，使元素的高度等于其宽度的百分比。
- 可以根据需要更改高度与宽度的比例。 例如，100% 的 padding-top 将创建一个响应式正方形（1:1 比例）。

```html
<div class="constant-width-to-height-ratio"></div>
```

```css
.constant-width-to-height-ratio {
  width: 50%;
  background: linear-gradient(135deg, #4848e7 10%, #0e022e 90%);
}
.constant-width-to-height-ratio::before {
  content: '';
  padding-top: 100%;
  float: left;
}
.constant-width-to-height-ratio::after {
  content: '';
  display: block;
  clear: both;
}
```

> 应用场景

<div class="code-editor" data-url="codes/css/html/constant-width-to-height-ratio.html" data-language="html"></div>

结果如下:

<iframe src="codes/css/html/constant-width-to-height-ratio.html"></iframe>
