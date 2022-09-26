| 标题                             | 标签           |
| -------------------------------- | -------------- |
| donut-spinner(旋转加载器) | animation(动画) |

创建一个可用于指示内容加载的甜甜圈微调器。

* 为整个元素使用半透明边框。 排除将作为甜甜圈加载指示器的一侧。
* 定义并使用适当的动画，使用 transform: rotate() 来旋转元素。

```html
<div class="donut"></div>
```

```css
.donut {
    display: inline-block;
    border: 4px solid rgba(0,0,0,.1);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border-left-color: #7983ff;
    animation: donut-spin 1.2s linear infinite;
}
@keyframes donut-spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
```

> 应用场景

<iframe src="codes/css/html/donut-spinner.html"></iframe>




