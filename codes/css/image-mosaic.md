| 标题                             | 标签           |
| -------------------------------- | -------------- |
| image-mosaic(悬浮旋转) | layout(布局) |

创建响应式图像马赛克。

* 使用 display:grid 创建适当的响应式网格布局。
* 使用 grid-row: span 2 / auto 和 grid-column: span 2 / auto 创建分别跨越两行或两列的项目。
* 将以前的样式包装到媒体查询中，以避免在小屏幕尺寸上应用。

```html
<div class="image-mosaic">
    <div class="card card-tall card-wide" style="background-image: url('https://www.eveningwater.com/img/segmentfault/1.png');"></div>
    <div class="card card-tall" style="background-image: url('https://www.eveningwater.com/img/segmentfault/2.png');"></div>
    <div class="card" style="background-image: url('https://www.eveningwater.com/img/segmentfault/3.png');"></div>
    <div class="card" style="background-image: url('https://www.eveningwater.com/img/segmentfault/4.png');"></div>
    <div class="card" style="background-image: url('https://www.eveningwater.com/img/segmentfault/5.png');"></div>
    <div class="card" style="background-image: url('https://www.eveningwater.com/img/segmentfault/6.png');"></div>
    <div class="card card-wide" style="background-image: url('https://www.eveningwater.com/img/segmentfault/6.png');"></div>
    <div class="card" style="background-image: url('https://www.eveningwater.com/img/segmentfault/7.png');"></div>
    <div class="card" style="background-image: url('https://www.eveningwater.com/img/segmentfault/8.png');"></div>
    <div class="card" style="background-image: url('https://www.eveningwater.com/img/segmentfault/9.png');"></div>
    <div class="card" style="background-image: url('https://www.eveningwater.com/img/segmentfault/10.png');"></div>
    <div class="card" style="background-image: url('https://www.eveningwater.com/img/segmentfault/11.png');"></div>
    <div class="card" style="background-image: url('https://www.eveningwater.com/img/segmentfault/12.png');"></div>
</div>
```

```css
.image-mosaic {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit,minmax(240px,1fr));
    grid-auto-rows: 240px;
}
.card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #353555;
    font-size: 3rem;
    color: #fff;
    height: 100%;
    width: 100%;
    border-radius: 4px;
    transition: all 500ms;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    margin: 0;
    padding: 0;
    box-shadow: rgba(3,8,20,.1) 0px .15rem .5rem,rgba(2,8,20,.1) 0px 0.075rem .175rem;
}
@media screen and (min-width: 600px) {
    .card-tall {
        grid-row: span 2 / auto;
    }
    .card-wide {
        grid-column: span 2 / auto;
    }
}
```

> 应用场景

<iframe src="codes/css/html/image-mosaic.html"></iframe>




