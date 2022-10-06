| 标题                             | 标签           |
| -------------------------------- | -------------- |
| full-width-image(全屏图像) | 	layout(布局) |

创建全屏图像。

* 使用 left: 50% 和 right: 50% 将图像定位在父元素的中间。
* 使用 margin-left: -50vw 和 margin-right: -50vw 来偏移两侧的图像相对于视口的大小。
* 使用 width: 100vw 和 max-width: 100vw 来调整相对于视口的图像大小。

```html
<main class="main">
    <h4>Lorem ipsum dolor sit amet</h4>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris molestie
        lobortis sapien, sit amet iaculis est interdum tincidunt. Nunc egestas nibh
        ut metus elementum consequat. Integer elit orci, rhoncus efficitur lectus
        eu, faucibus interdum felis.
    </p>
    <p>
        <img class="full-width image" src="https://picsum.photos/id/257/2560/1440.jpg" />
    </p>
    <p>
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Nullam pretium lectus sed ex efficitur, ac varius sapien
        gravida. Sed facilisis elit quis sem sollicitudin, ut aliquam neque
        eleifend. Maecenas sagittis neque sapien, ac tempus nulla tempus nec.
        Curabitur tellus est, convallis id dolor ut, porta hendrerit quam.
    </p>
</main>
```

```css
.main {
    max-width: 640px;
    margin: 0 auto;
    background: linear-gradient(135deg,#97c1eb 10%,#0674e2 90%);
    color: #fff;
    padding: 15px;
}
.image {
    height: auto;
    max-width: 100%;
}
.full-width {
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    max-width: 100vw;
    width: 100vw;
}
```

> 应用场景

<iframe src="codes/css/html/full-width-image.html"></iframe>




