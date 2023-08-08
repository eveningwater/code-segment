| 标题                            | 标签                                   |
| ------------------------------- | -------------------------------------- |
| border-contour(border 等高布局) | border,layout,contour(边框，布局,等高) |

使用 border 实现等高布局。

- 给盒子元素设置一个左边框，边框宽度由子元素的宽度决定，这里是 150px。
- 给盒子元素的伪类设置清除浮动，这里不能使用 overflow:hidden 来清除。
- 给盒子元素的左边导航元素设置左浮动，并设置宽度和左负间距，间距值等于宽度值。
- 给盒子元素的右边内容元素设置 overflow:hidden。
- 导航子元素设置行高和右边子元素设置行高。

```html
<section class="box">
  <nav class="box-nav">
    <div class="box-nav-item">导航1</div>
  </nav>
  <section class="box-content">
    <div class="box-content-module">模块1</div>
  </section>
</section>
```

```css
.box {
  border-left: 150px solid #232425;
  background-color: #eeeded;
}

.box::after {
  content: '';
  clear: both;
  display: block;
}

.box-nav {
  width: 150px;
  margin-left: -150px;
  float: left;
}

.box-nav-item {
  line-height: 40px;
  color: #fff;
  text-align: center;
}

.box-content-module {
  line-height: 40px;
  text-align: center;
  color: #c40dd4;
}

.box-content {
  overflow: hidden;
}
```

> 注意: 示例写了 javascript 代码来动态增加导航和模块。

javascript 代码如下:

```js
const navMore = document.getElementById('addNav'),
  moduleMore = document.getElementById('addContent');

if (navMore && moduleMore) {
  const nav = document.querySelector('.box-nav'),
    section = document.querySelector('.box-content');
  let navIndex = nav.children.length,
    sectionIndex = 1;
  let rand = () => 'f' + (Math.random() + '').slice(-1);
  navMore.onclick = function () {
    navIndex++;
    nav.insertAdjacentHTML(
      'beforeEnd',
      '<div class="box-nav-item">导航' + navIndex + '</div>'
    );
  };
  moduleMore.onclick = function () {
    sectionIndex++;
    section.insertAdjacentHTML(
      'beforeEnd',
      '<div class="box-content-module" style="background:#' +
        [rand(), rand(), rand()].join('') +
        '">模块' +
        sectionIndex +
        '</div>'
    );
  };
}
```

> 应用场景

<div class="code-editor" data-url="codes/css/html/border-contour.html" data-language="html"></div>

结果如下:

<iframe src="codes/css/html/border-contour.html"></iframe>
