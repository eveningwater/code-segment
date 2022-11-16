| 标题                             | 标签           |
| -------------------------------- | -------------- |
| text-backdrop-overlay(文本背景覆盖) | visual(视觉的)) |

使用覆盖在图像顶部显示的文本。

* 使用背景滤镜应用模糊（14 像素）和亮度（80%）效果。 无论背景图像和颜色如何，这都使文本可读。

```html
<div class="container">
    <h3 class="text-overlay">Hello,world!</h3>
    <img src="https://www.eveningwater.com/img/segmentfault/1.png" alt="图片加载中" class="img">
</div>
```

```css
.container {
    position: relative;
}
.text-overlay {
    position: absolute;
    top: 0;
    left: 0;
    padding: 1rem;
    font-size: 2rem;
    font-weight: 300;
    color: #ffffff;
    backdrop-filter: blur(14px) brightness(80%);
}
.img {
    width: 300px;
    height: 300px;
}
```



> 应用场景

<iframe src="codes/css/html/text-backdrop-overlay.html"></iframe>




