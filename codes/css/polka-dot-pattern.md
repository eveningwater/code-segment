| 标题                             | 标签           |
| -------------------------------- | -------------- |
| polka-dot-pattern(圆点背景图案) | visual(视觉的) |

创建圆点背景图案。

* 使用 background-color 设置黑色背景。
* 使用带有两个radial-gradient() 值的背景图像来创建两个点。
* 使用 background-size 指定图案的大小。 使用 background-position 适当地放置两个渐变。
* 注意：元素的固定高度和宽度仅用于演示目的。

```html
<div class="polka-dot"></div>
```

```css
.polka-dot {
    width: 240px;
    height: 240px;
    background-color: #000;
    background-image: radial-gradient(#fff 10%,transparent 11%),radial-gradient(#fff 10%, transparent 11%);
    background-size: 60px 60px;
    background-position: 0 0,30px 30px;
    background-repeat: repeat;
}
```

> 应用场景

<iframe src="codes/css/html/polka-dot-pattern.html"></iframe>




