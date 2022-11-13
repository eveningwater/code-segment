| 标题                             | 标签           |
| -------------------------------- | -------------- |
| stripes-pattern(条纹背景) | visual(视觉的)) |

创建条纹背景图案。

* 使用 background-color 设置白色背景。
* 使用带有径向渐变（）值的背景图像来创建垂直条纹。
* 使用 background-size 指定图案的大小。
* 注意：元素的固定高度和宽度仅用于演示目的。

```html
<div class="stripes stripes-x"></div>
<div class="stripes stripes-y"></div>
```

```css
.stripes {
    width: 240px;
    height: 240px;
    background-color: #fff;
    background-size: 60px 60px;
    background-repeat: repeat;
    border: 1px solid #6d6d6d;
    border-radius: 10px;
    display: inline-block;
    margin: 5px;
}
.stripes-x {
    background-image: linear-gradient(180deg,transparent 50%,#000 50%);
}
.stripes-y {
    background-image: linear-gradient(90deg,transparent 50%,#000 50%);
}
```



> 应用场景

<iframe src="codes/css/html/stripes-pattern.html"></iframe>




