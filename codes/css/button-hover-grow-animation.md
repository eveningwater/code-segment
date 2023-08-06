| 标题                                      | 标签            |
| ----------------------------------------- | --------------- |
| button-hover-grow-animation(增长动画按钮) | animation(动画) |

在悬停时创建一个增长动画。

- 使用适当的过渡来为元素的更改设置动画。
- 使用 :hover 伪类将变换更改为 scale(1.1)，当用户将鼠标悬停在元素上时会增大元素。

```html
<button class="grow-button">submit</button>
```

```css
.grow-button {
  padding: 8px 20px;
  display: inline-block;
  background-color: transparent;
  border: 1px solid #6567ee;
  border-radius: 4px;
  outline: none;
  color: rgba(0, 0, 0, 0.87);
  letter-spacing: 2px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.grow-button:hover {
  transform: scale(1.1);
}
```

> 应用场景

<div class="code-editor" data-url="codes/css/html/button-hover-grow-animation.html" data-language="html"></div>

结果如下:

<iframe src="codes/css/html/button-hover-grow-animation.html"></iframe>
