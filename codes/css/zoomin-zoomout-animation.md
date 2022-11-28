| 标题                             | 标签           |
| -------------------------------- | -------------- |
| zoomin-zoomout-animation(放大缩小动画) | animation(动画)) |

创建放大缩小动画。

* 使用@keyframes 定义三步动画。 在开始 (0%) 和结束 (100%) 处，元素是其原始大小 (scale(1 ,1))。 到一半 (50%) 时，它被放大到原来大小的 1.5 倍（scale(1.5, 1.5)）。
* 使用宽度和高度为元素指定特定大小。
* 使用动画为元素设置适当的值以使其具有动画效果。

```html
<div class="zoom-in-out-box"></div>
```

```css
.zoom-in-out-box {
    margin: 24px;
    width: 50px;
    height: 50px;
    background-color: #2396ef;
    animation: zoom-in-out 1s ease-in-out infinite;
}
@keyframes zoom-in-out {
    0% {
        transform: scale(1,1);
    }
    50% {
        transform: scale(1.5,1.5);
    }
    100% {
        transform: scale(1,1);
    }
}
```

> 应用场景

<iframe src="codes/css/html/zoomin-zoomout-animation.html"></iframe>




