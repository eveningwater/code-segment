| 标题                    | 标签                                  |
| ----------------------- | ------------------------------------- |
| toggle-switch(开关切换) | visual,interactivity(视觉的，交互性)) |

仅使用 CSS 创建一个切换开关。

- 使用 for 属性将 `<label>` 与复选框 `<input>` 元素相关联。
- 使用 `<label>` 的 ::after 伪元素为开关创建一个圆形旋钮。
- 使用 :checked 伪类选择器更改旋钮的位置，使用 transform: translateX(20px) 和开关的背景颜色。
- 使用 position: absolute 和 left: -9999px 在视觉上隐藏 `<input>` 元素。

```html
<input type="checkbox" id="toggle" class="offscreen checkbox" />
<label for="toggle" class="switch"></label>
```

```css
.offscreen {
  position: absolute;
  left: -9999px;
}
.checkbox:checked + .switch::after {
  transform: translateX(20px);
}
.checkbox:checked + .switch {
  background-color: #7983ff;
}
.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.25);
  transition: all 0.3s;
  cursor: pointer;
}
.switch::after {
  content: '';
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 18px;
  background-color: #fff;
  top: 1px;
  left: 1px;
  transition: all 0.3s;
}
```

> 应用场景

<div class="code-editor" data-url="codes/css/html/toggle-switch.html" data-language="html"></div>

结果如下:

<iframe src="codes/css/html/toggle-switch.html"></iframe>
