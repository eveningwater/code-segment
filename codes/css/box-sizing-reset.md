| 标题                           | 标签         |
| ------------------------------ | ------------ |
| box-sizing-reset(重置盒子模型) | layout(布局) |

重置盒子模型，使宽度和高度不受边框或填充的影响。

- 在计算元素的宽度和高度时，使用 box-sizing:border-box 包括填充和边框的宽度和高度。
- 使用 box-sizing:inherit 将 box-sizing 属性从父元素传递给子元素。

```html
<div class="box border-box"></div>
<div class="box content-box"></div>
```

```css
*,
*::before,
*::after {
  box-sizing: inherit;
}
.content-box {
  box-sizing: content-box;
}
.border-box {
  box-sizing: border-box;
}
.box {
  display: inline-block;
  width: 120px;
  height: 120px;
  padding: 8px;
  margin: 8px;
  background-color: #f24333;
  color: #fff;
  border: 1px solid #ba1b1d;
  border-radius: 4px;
}
```

> 应用场景

<div class="code-editor" data-url="codes/css/html/box-sizing-reset.html" data-language="html"></div>

结果如下:

<iframe src="codes/css/html/box-sizing-reset.html"></iframe>
