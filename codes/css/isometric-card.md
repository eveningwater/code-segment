| 标题                             | 标签           |
| -------------------------------- | -------------- |
| isometric-card(等轴测卡片) | visual(视觉的) |

创建等轴测卡片。

* 使用带有 rotateX() 和 rotateY() 的变换以及 box-shadow 来创建等距卡片。
* 使用过渡为卡片设置动画，当用户将鼠标悬停在卡片上时创建提升效果。

```html
<div class="isometric-card"></div>
```

```css
.isometric-card {
    margin: 0 auto;
    transform: rotateX(51deg) rotateZ(43deg);
    transform-style: preserve-3d;
    background-color: #fcfcfc;
    will-change: transform;
    width: 240px;
    height: 320px;
    border-radius: 2rem;
    box-shadow: 1px 1px 0 1px #f9f9fb,-1px 0 28px 0 rgba(34,33,81,.01),
                28px 28px 28px 0 rgba(34,33,81,.25);
    transition: .4s ease-in-out transform,.3s ease-in-out box-shadow;
    cursor: pointer;
}
.isometric-card:hover {
    transform: translate3d(0px,-16px,0px) rotateX(51deg) rotateZ(43deg);
    box-shadow: 1px 1px 0 1px #f9f9fb,-1px 0 28px 0 rgba(34,33,81,0.01),
                54px 54px 28px -10px rgba(34,33,81,.15);
}
```

> 应用场景

<iframe src="codes/css/html/isometric-card.html"></iframe>




