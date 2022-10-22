| 标题                             | 标签           |
| -------------------------------- | -------------- |
| image-overlay-hover(悬浮覆盖图片) | visual,animation(视觉的，动画) |

显示图像叠加效果对悬停。

* 使用:before和:after伪元素用于叠加层的顶部和底栏。设置其不透明度，转换和过渡以产生预期的效果。
* 使用`<figcaption>`进行覆盖文本。 设置显示：Flex，Flex方向：列和合理性：中心将文本集中到图像中。
* 使用：悬浮伪类:hover来更新所有元素的不透明度和转换，并显示覆盖层。

```html
<figure class="hover-box">
    <img src="https://www.eveningwater.com/img/segmentfault/10.png" alt="图片加载中" class="hover-box-img">
    <figcaption class="hover-box-content">
        <h3 class="hover-box-content-title">Lorem <br>Ipsum</h3>
    </figcaption>
</figure>
```

```css
.hover-box {
    background-color: #000;
    color: #fff;
    display: inline-block;
    margin: 8px;
    max-width: 320px;
    min-width: 240px;
    overflow: hidden;
    position: relative;
    width: 100%;
    text-align: center;
}
.hover-box * {
    box-sizing: border-box;
    transition: all .45s ease;
}
.hover-box::before,.hover-box::after {
    content:"";
    background-color: rgba(0,0,0,.5);
    border-top: 32px solid rgba(0,0,0,.5);
    border-bottom: 32px solid rgba(0,0,0,.5);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transition: all .3s ease;
    z-index: 1;
    opacity: 0;
    transform: scaleY(2);
}
.hover-box .hover-box-img {
    vertical-align: top;
    max-width: 100%;
    backface-visibility: hidden;
}
.hover-box .hover-box-content {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    align-items: center;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 1.1em;
    opacity: 0;
    z-index: 2;
    transition-delay: .1s;
    font-size: 24px;
    font-family: sans-serif;
    font-weight: 400;
    letter-spacing: 1px;
    text-transform: uppercase;
}
.hover-box:hover::before,
.hover-box:hover::after {
    transform: scale(1);
    opacity: 1;
}
.hover-box:hover > .hover-box-img {
    opacity: .7;
}
.hover-box:hover .hover-box-content {
    opacity: 1;
}
```

> 应用场景

<iframe src="codes/css/html/image-overlay-hover.html"></iframe>




