| 标题                             | 标签           |
| -------------------------------- | -------------- |
| image-hover-menu(悬浮图片按钮) | layout,animation(布局，动画) |

当用户将鼠标悬停在图像上时显示菜单叠加。

* 使用 `<figure>` 包装 `<img>` 元素和将包含菜单链接的 `<div>` 元素。
* 使用 opacity 和 right 属性在悬停时为图像设置动画，创建滑动效果。
* 将 `<div>` 的 left 属性设置为元素宽度的负值。 将鼠标悬停在父元素上以在菜单中滑动时将其重置为 0。
* 在 `<div>` 上使用 display: flex, flex-direction: column 和 justify-content: center 来垂直居中菜单项。

```html
<figure class="hover-menu">
    <img src="https://www.eveningwater.com/img/segmentfault/1.png" alt="图片加载中" class="hover-menu-img">
    <div class="hover-menu-container">
        <a href="#" class="hover-menu-link">Home</a>
        <a href="#" class="hover-menu-link">Pricing</a>
        <a href="#" class="hover-menu-link">About</a>
    </div>
</figure>
```

```css
.hover-menu {
    position: relative;
    overflow: hidden;
    margin: 8px;
    min-width: 340px;
    max-width: 480px;
    max-height: 290px;
    width: 100%;
    background-color: #000;
    text-align: center;
    box-sizing: border-box;
}
.hover-menu * {
    box-sizing: border-box;
}
.hover-menu .hover-menu-img {
    position: relative;
    max-width: 100%;
    top: 0;
    right: 0;
    opacity: 1;
    transition: .3s ease-in-out;
    object-fit: cover;
}
.hover-menu .hover-menu-container {
    position: absolute;
    top: 0;
    left: -120px;
    width: 120px;
    height: 100%;
    padding: 8px 4px;
    background-color: #000;
    transition: .3s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.hover-menu .hover-menu-container .hover-menu-link {
    display: block;
    line-height: 2;
    color: #fff;
    text-decoration: none;
    opacity: .8;
    padding: 5px 15px;
    position: relative;
    transition: .3s ease-in-out;
}
.hover-menu .hover-menu-container .hover-menu-link:hover {
    text-decoration: underline;
}
.hover-menu:hover .hover-menu-img {
    opacity: .5;
    right: -120px;
}
.hover-menu:hover .hover-menu-container {
    left: 0;
    opacity: 1;
}
```

> 应用场景

<iframe src="codes/css/html/image-hover-menu.html"></iframe>




