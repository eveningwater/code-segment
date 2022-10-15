| 标题                             | 标签           |
| -------------------------------- | -------------- |
| hover-additional-content(水平滚动) | visual(视觉的) |

创建一个在悬停时显示附加内容的卡片。

* 使用overflow:hidden 在卡片上隐藏垂直溢出的元素。
* 如果元素悬停、聚焦或其任何后代都聚焦，则使用 :hover 和 :focus-within 伪类选择器来更改卡片的样式。
* 设置过渡：0.3s 缓和所有以在悬停/焦点上创建过渡效果。

```html
 <div class="card">
    <img src="https://www.eveningwater.com/my-web-projects/js/26/img/1.jpg" />
    <h3>Lorem ipsum</h3>
    <div class="focus-content">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> <a href="#">Link to source</a>
        </p>
    </div>
</div>
```

```css
.card {
    width: 300px;
    height: 280px;
    padding: 0;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    box-sizing: border-box;
    overflow: hidden;
}
.card * {
    transition: 0.3s ease all;
}
.card img {
    margin: 0;
    width: 300px;
    height: 224px;
    object-fit: cover;
    display: block;
}
.card h3 {
    margin: 0;
    padding: 12px 12px 48px;
    line-height: 32px;
    font-weight: 500;
    font-size: 20px;
}
.card .focus-content {
    display: block;
    padding: 8px 12px;
}
.card p {
    margin: 0;
    line-height: 1.5;
}
.card:hover img,
.card:focus-within img {
    margin-top: -80px;
}
.card:hover h3,
.card:focus-within h3 {
    padding: 8px 12px 0;
}
```

> 应用场景

<iframe src="codes/css/html/hover-additional-content.html"></iframe>




