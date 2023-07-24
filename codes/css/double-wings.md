| 标题                 | 标签                                                 |
| -------------------- | ---------------------------------------------------- |
| Holy Grail(圣杯布局) | 3-column layout,margin,float(三栏布局，外边距，浮动) |

双飞翼布局

- 通过设置元素的`float`和`margin`实现主内容区在文档流的最前面的两边定宽，中间自适应布局
- 双飞翼布局就是对[圣杯布局](holy-grail.md)的改进，消除了圣杯布局的相对定位可能带来的一些影响，但额外的增加了一个标签

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
  border-bottom: 1px solid #ccc;
}
.main::after {
  content: '';
  display: table;
  clear: both;
}
.middle-wrap {
  float: left;
  width: 100%;
}
.middle {
  margin: 0 200px;
  padding: 3px 10px;
}
.left {
  width: 200px;
  float: left;
  margin-left: -100%;
}
.right {
  float: left;
  width: 200px;
  margin-left: -200px;
}
```

```html
<header class="header">header</header>
<main class="main">
  <section class="middle-wrap">
    <section class="middle">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolorem
      ducimus facilis sint voluptate? Consequuntur deserunt doloribus earum
      eveniet fugiat id laboriosam modi numquam, placeat provident qui quia
      rerum, sunt.
    </section>
  </section>
  <section class="left">left text</section>
  <section class="right">right text</section>
</main>
<footer class="footer">footer text</footer>
```

> 应用场景

<div class="code-editor" data-url="codes/css/html/double-wings.html" data-language="html"></div>

结果如下:

<iframe src="codes/css/html/double-wings.html"></iframe>
