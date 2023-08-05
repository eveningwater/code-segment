| 标题                               | 标签            |
| ---------------------------------- | --------------- |
| animated-fill-button(填充动画按钮) | animation(动画) |

在悬停时创建填充动画。

- 设置颜色和背景，并使用适当的过渡来动画元素的变化。
- 当用户将鼠标悬停在元素上时，使用 :hover 伪类更改元素的背景和颜色。

```html
<button class="animated-fill-button">submit</button>
```

```css
.animated-fill-button {
  padding: 10px 25px;
  background-color: #fff;
  color: rgba(0, 0, 0, 0.85);
  border: 1px solid #dedfdf;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
}
.animated-fill-button:hover {
  background-color: #2396ef;
  color: #fff;
  border-color: #46a8f3;
}
```

> 应用场景

<div class="code-editor" data-url="codes/css/html/animated-fill-button.html" data-language="html"></div>

结果如下:

<iframe src="codes/css/html/animated-fill-button.html"></iframe>
