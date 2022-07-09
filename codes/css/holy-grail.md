|  标题  |  标签  |
|  ----  |  ----  |
| Holy Grail(圣杯布局) | 3-column layout,margin,float,position(三栏布局，外边距，浮动，定位) |

圣杯布局

* 通过设置元素的`float,margin`和`position`实现主内容区在文档流的最前面的两边定宽，中间自适应布局

> 代码如下

```css
 body {
    margin: 0;
}
.header,
.footer {
    line-height: 60px;
    text-align: center;
    font-size: 24px;
    border-bottom: 1px solid #ccc;
}
.main {
    padding: 0 200px;
    border-bottom: 1px solid #ccc;
}
.main::after {
    content: '';
    display: table;
    clear: both;
}
.middle {
    float: left;
    width: 100%;
}
.left {
    position: relative;
    left: -200px;
    width: 200px;
    float: left;
    margin-left: -100%;
}
.right {
    position: relative;
    right: -200px;
    float: left;
    width: 200px;
    margin-left: -200px;
}
```

```html
<header class="header">header</header>
<main class="main">
    <section class="middle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolorem ducimus facilis sint voluptate? Consequuntur deserunt doloribus earum eveniet fugiat id laboriosam modi numquam, placeat provident qui quia rerum, sunt.</section>
    <section class="left">left text</section>
    <section class="right">right text</section>
</main>
<footer class="footer">footer text</footer>
```

> 应用场景

<iframe src="codes/css/html/holy-grail.html"></iframe>

