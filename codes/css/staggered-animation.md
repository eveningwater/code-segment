| 标题                             | 标签           |
| -------------------------------- | -------------- |
| staggered-animation(交错动画) | animation(动画)) |

为列表的元素创建交错动画。

* 设置 opacity: 0 和 transform: translateX(100%) 使列表元素透明并将它们一直向右移动。
* 为列表元素指定相同的转换属性，转换延迟除外。
* 使用内联样式为每个列表元素指定 --i 的值。 这将反过来用于转换延迟以创建交错效果。
* 使用复选框的 :checked 伪类选择器来设置列表元素的样式。 将不透明度设置为 1 并转换为 translateX(0) 以使它们出现并滑入视图。

```html
<div class="container">
    <input type="checkbox" name="menu" id="menu" class="menu-toggler" />
    <label for="menu" class="menu-toggler-label">Menu</label>
    <ul class="stagger-menu">
        <li style="--i--:0;">Home</li>
        <li style="--i--:1;">Pricing</li>
        <li style="--i--:2;">Account</li>
        <li style="--i--:3;">Support</li>
        <li style="--i--:4;">About</li>
    </ul>
</div>
```

```css
.container {
    overflow-x: hidden;
    width: 100%;
}
.menu-toggler {
    display: none;
}
.menu-toggler-label {
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
}
.stagger-menu {
    list-style-type: none;
    margin: 16px 0;
    padding: 0;
}
.stagger-menu > li {
    margin-bottom: 8px;
    font-size: 18px;
    opacity: 0;
    transform: translateX(100%);
    transition-property: opacity,transform;
    transition-duration: .3s;
    transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
}
.menu-toggler:checked ~ .stagger-menu > li {
    opacity: 1;
    transform: translateX(0);
    transition-delay: calc(.055s * var(--i--));
}
```



> 应用场景

<iframe src="codes/css/html/staggered-animation.html"></iframe>




