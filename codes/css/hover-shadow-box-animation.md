| 标题                             | 标签           |
| -------------------------------- | -------------- |
| hover-shadow-box-animation(悬浮阴影) | animation(动画) |

悬停时在文本周围创建一个阴影框。

* 设置 transform: perspective(1px) 通过影响 Z 平面和用户之间的距离为元素提供 3D 空间，并设置 translate(0) 以在 3D 空间中沿 z 轴重新定位 p 元素。
* 使用 box-shadow 使盒子透明。
* 使用 transition-property 为 box-shadow 和 transform 启用转换。
* 使用 :hover、:active 和 :focus 伪类选择器来应用新的 box-shadow 和 transform: scale(1.2) 来改变文本的比例。

```html
<p class="hover-shadow-box-animation">Box it!</p>
```

```css
.hover-shadow-box-animation {
    display: inline-block;
    vertical-align: middle;
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px transparent;
    margin: 10px;
    transition-duration: .3s;
    transition-property: box-shadow,transform;
}
.hover-shadow-box-animation:hover,.hover-shadow-box-animation:active,.hover-shadow-box-animation:focus {
    transform: scale(1.2);
    box-shadow: 1px 10px 10px -10px rgba(0,0,24,.5);
}
```

> 应用场景

<iframe src="codes/css/html/hover-shadow-box-animation.html"></iframe>




