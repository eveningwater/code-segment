| 标题                  | 标签                  |
| --------------------- | --------------------- |
| popout-menu(弹出菜单) | interactivity(交互性) |

在悬停/聚焦时显示交互式弹出菜单。

- 使用 left: 100% 将弹出菜单移动到父级的右侧。
- 使用 visibility: hidden 最初隐藏弹出菜单，允许应用转换（与 display: none 不同）。
- 使用 :hover 、 :focus 和 :focus-within 伪类选择器来应用 visibility: visible 到弹出菜单，当父元素悬停/聚焦时显示它。

```html
<div class="reference" tabindex="0">
  <div class="popout-menu">Popout menu</div>
</div>
```

```css
.reference {
  position: relative;
  background: #2396ef;
  width: 100px;
  height: 80px;
  cursor: pointer;
}
.popout-menu {
  position: absolute;
  visibility: hidden;
  left: 100%;
  background-color: #9c27b0;
  color: #fff;
  padding: 16px;
  transition: visibility 0.4s ease-in-out;
}
.reference:hover > .popout-menu,
.reference:focus > .popout-menu,
.reference:focus-within > .popout-menu {
  visibility: visible;
}
```

> 应用场景

<div class="code-editor" data-url="codes/css/html/popout-menu.html" data-language="html"></div>

结果如下:

<iframe src="codes/css/html/popout-menu.html"></iframe>
