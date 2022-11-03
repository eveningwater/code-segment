| 标题                             | 标签           |
| -------------------------------- | -------------- |
| pulse-loader(脉冲效果加载器) | animation(动画) |

使用 animation-delay 属性创建一个脉冲效果加载器动画。

* 使用 @keyframes 在循环中的两个点定义动画。 在开始处（0%），两个 `<div>` 元素没有宽度或高度，并且位于中心。 最后（100%），两个 `<div>` 元素的宽度和高度都增加了，但它们的位置被重置为 0。
* 制作动画时使用 opacity 从 1 过渡到 0，以使 `<div>` 元素在展开时具有消失的效果。
* 为父容器 .ripple-loader 设置预定义的宽度和高度，并使用 position: relative 定位其子容器。
* 在第二个 `<div>` 元素上使用动画延迟，以便每个元素在不同的时间开始其动画。

```html
<div class="ripple-loader">
    <div class="ripple-loader-item"></div>
    <div class="ripple-loader-item"></div>
</div>
```

```css
.ripple-loader {
    position: relative;
    width: 64px;
    height: 64px;
}
.ripple-loader-item {
    position: absolute;
    border: 4px solid #2396ef;
    border-radius: 50%;
    animation: rippleLoader 1s ease-in-out infinite;
}
@keyframes rippleLoader {
    0% {
        top: 32px;
        left: 32px;
        width: 0;
        height: 0;
        opacity: 1;
    }
    100% {
        top: 0;
        left: 0;
        width: 64px;
        height: 64px;
        opacity: 0;
    }
}
```

> 应用场景

<iframe src="codes/css/html/pulse-loader.html"></iframe>




