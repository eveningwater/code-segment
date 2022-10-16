| 标题                             | 标签           |
| -------------------------------- | -------------- |
| hover-pespective(悬浮变换) | visual(视觉的) |

将带有悬停动画的透视变换应用于元素。

* 使用带有 perspective() 和 rotateY() 函数的 transform 来为元素创建一个透视图。
* 在悬停时使用转换更新变换属性的值。
* 将 rotateY() 值更改为负值以从左到右镜像透视效果。

```html
<div class="card-container">
    <div class="image-card perspective-left"></div>
    <div class="image-card perspective-right"></div>
</div>
```

```css
 .image-card {
    display: inline-block;
    box-sizing: border-box;
    margin: 1rem;
    width: 240px;
    height: 320px;
    padding: 8px;
    border-radius: 1rem;
    background: url("https://www.eveningwater.com/my-web-projects/js/26/img/1.jpg");
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
}
.perspective-left {
    transform: perspective(1500px) rotateY(15deg);
    transition: transform 1s ease 0s;
}
.perspective-left:hover {
    transform: perspective(3000px) rotateY(5deg);
}
.perspective-right {
    transform: perspective(1500px) rotateY(-15deg);
    transition: transform 1s ease 0s;
}
.perspective-right:hover {
    transform: perspective(3000px) rotateY(-5deg);
}
```

> 应用场景

<iframe src="codes/css/html/hover-pespective.html"></iframe>




