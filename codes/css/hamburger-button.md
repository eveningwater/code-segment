| 标题                             | 标签           |
| -------------------------------- | -------------- |
| hamburger-button(汉堡按钮) | interactivity(交互性) |

显示一个汉堡菜单，悬停时转换为十字按钮。

* 使用包含顶部、底部和中间条的 .hamburger-menu 容器 div。
* 将容器设置为 display: flex 以及 flex-flow: column wrap。
* 使用 justify-content: space-between 添加条之间的距离。
* 使用 transform: rotate() 将顶部和底部条旋转 45 度，使用 opacity: 0 在悬停时淡化中间条。
* 使用 transform-origin: left 使条形图围绕左点旋转。

```html
<div class="hamburger-menu">
    <div class="bar top"></div>
    <div class="bar middle"></div>
    <div class="bar bottom"></div>
</div>
```

```css
.hamburger-menu {
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    width: 2.5rem;
    height: 2.5rem;
    cursor: pointer;
}
.bar {
    height: 5px;
    background-color: #000;
    border-radius: 5px;
    margin: 3px 0;
    transform-origin: left;
    transition: all .5s;
}
.hamburger-menu:hover .top {
    transform: rotate(45deg);
}
.hamburger-menu:hover .middle {
    opacity: 0;
}
.hamburger-menu:hover .bottom {
    transform: rotate(-45deg);
}
```

> 应用场景

<iframe src="codes/css/html/hamburger-button.html"></iframe>




