| 标题                             | 标签           |
| -------------------------------- | -------------- |
| hover-underline-animation(悬浮下划线) | animation(动画) |

当用户将鼠标悬停在文本上时创建动画下划线效果。

* 使用 display: inline-block 使下划线跨越文本内容的宽度。
* 使用具有 width: 100% 和 position: absolute 的 :after 伪元素将其放置在内容下方。
* 使用 transform: scaleX(0) 最初隐藏伪元素。
* 使用 :hover 伪类选择器应用 transform: scaleX(1) 并在悬停时显示伪元素。
* 使用 transform-origin: left 和适当的过渡动画变换。
* 删除 transform-origin 属性以使变换起源于元素的中心。

```html
<p class="hover-underline-animation">Hover this text to see the effect!</p>
```

```css
.hover-underline-animation {
    display: inline-block;
    position: relative;
    color:#0087ca;
    cursor: pointer;
}
.hover-underline-animation::after {
    content:'';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: #0087ca;
    transform-origin: bottom right;
    transition: transform .25s ease-out;
}
.hover-underline-animation:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
}
```

> 应用场景

<iframe src="codes/css/html/hover-underline-animation.html"></iframe>




