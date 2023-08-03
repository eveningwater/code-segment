| 标题                                  | 标签            |
| ------------------------------------- | --------------- |
| button-border-animation(动画边框按钮) | animation(动画) |

在悬停时创建边框动画。

- 使用 :before 和 :after 伪元素创建两个 24px 宽的盒子，在盒子的上方和下方彼此相对。
- 使用 :hover 伪类在悬停时将这些元素的宽度扩展到 100% 并使用过渡动画更改。

```html
<button class="animated-border-button">Submit</button>
```

```css
.animated-border-button {
  outline: none;
  background-color: #2396ef;
  padding: 12px 40px 10px;
  border: none;
  position: relative;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
}
.animated-border-button::before,
.animated-border-button::after {
  content: '';
  position: absolute;
  border: 0 solid transparent;
  height: 0;
  width: 24px;
  transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.animated-border-button::before {
  border-top: 2px solid #2396ef;
  top: -4px;
  right: 0;
}
.animated-border-button::after {
  border-bottom: 2px solid #2396ef;
  bottom: -4px;
  left: 0;
}
.animated-border-button:hover::before,
.animated-border-button:hover::after {
  width: 100%;
}
```

> 应用场景

<div class="code-editor" data-url="codes/css/html/button-border-animation.html" data-language="html"></div>

结果如下:

<iframe src="codes/css/html/button-border-animation.html"></iframe>
