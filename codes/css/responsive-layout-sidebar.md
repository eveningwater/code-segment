| 标题                             | 标签           |
| -------------------------------- | -------------- |
| responsive-layout-sidebar(重置所有样式) | layout(布局) |

创建带有内容区域和侧边栏的响应式布局。

* 在父容器上使用 display:grid 来创建网格布局。
* 对第二列（侧边栏）使用 minmax() 以使其占据 150 像素到 20% 之间。
* 第一列（主要内容）使用 1fr 来占用剩余空间。

```html
<div class="container">
    <main class="main">
        This element is 1fr large.
    </main>
    <aside class="aside">
        Min: 150px / Max: 20%
    </aside>
</div>
```

```css
.container {
    display: grid;
    grid-template-columns: 1fr minmax(150px,20%);
    height: 100px;
}
.main,.aside {
    padding: 12px;
    text-align: center;
    color:#fff;
}
.main {
    background-color: #eb7d16;
}
.aside {
    background-color: #1e4fee;
}
```

> 应用场景

<iframe src="codes/css/html/responsive-layout-sidebar.html"></iframe>




