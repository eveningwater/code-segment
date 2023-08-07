| 标题                                        | 标签            |
| ------------------------------------------- | --------------- |
| button-hover-shrink-animation(收缩动画按钮) | animation(动画) |

在悬停时创建收缩动画。

- 使用适当的过渡来为元素的更改设置动画。
- 使用 :hover 伪类将变换更改为 scale(0.8)，当用户将鼠标悬停在元素上时缩小元素。

```html
<button class="shrink-button">submit</button>
```

```css
.shrink-button {
  display: inline-block;
  color: #65b5f6;
  background-color: transparent;
  border: 1px solid #65b5f6;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.shrink-button:hover {
  transform: scale(0.8);
}
```

> 应用场景

<div class="code-editor" data-url="codes/css/html/button-hover-shrink-animation.html" data-language="html"></div>

结果如下:

<iframe src="codes/css/html/button-hover-shrink-animation.html"></iframe>
