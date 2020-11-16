|  标题   | 标签  |
|  ----  | ----  |
| flex-center(弹性盒子布局的垂直水平居中) | flex,center(弹性盒子布局，居中) |

弹性盒子布局的垂直水平居中。

* 通过设置元素的`display`属性为`flex`可以使用弹性盒子布局
* 使用`align-items:center;`以及`justify-content:center;`就能让元素水平垂直居中了

> 代码如下:

```css
    .flex-center {
        display:flex;
        align-items:center;
        justify-content:center;
        min-height:100vh;/*这行代码不能少*/
    }
```

```html
  <div class="flex-center"></div>
```

> 应用场景