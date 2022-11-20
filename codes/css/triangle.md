| 标题                             | 标签           |
| -------------------------------- | -------------- |
| triangle(三角形) | visual(视觉的)) |

使用纯 CSS 创建一个三角形。

* 使用三个边框创建一个三角形。
* 所有边框应具有相同的边框宽度（20 像素）。
* 三角形指向的另一侧（即三角形向下指向的顶部）应具有所需的边框颜色。 相邻边框（即左右）的边框颜色应为透明。
* 更改边框宽度值将更改三角形的比例。

```html
<div class="triangle"></div>
```

```css
.triangle {
    width: 0;
    height: 0;
    border-top: 20px solid #9c27b0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
}
```

> 应用场景

<iframe src="codes/css/html/triangle.html"></iframe>