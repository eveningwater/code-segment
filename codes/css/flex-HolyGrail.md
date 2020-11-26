|  标题  |  标签  |
|  ----  |  ----  |
| flex-Holy Grail(使用flex实现三栏布局) | 3-column layout,flex(三栏布局，弹性盒子布局) |

flex实现中间自适应，两边定宽的三栏布局

* 通过设置元素的`display`属性为`flex`可以使用弹性盒子布局
* 使用`flex:1`实现自适应，使用`flex:0 1 200px`实现定宽，并使用`order`属性将左侧内容拉至左侧

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
     display: flex;
     border-bottom: 1px solid #ccc;
 }
 .middle {
     flex: 1;
     order: 2;
 }
 .left {
     flex: 0 1 200px;
     order: 1;
 }
 .right {
     flex: 0 1 200px;
     order: 3;
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
