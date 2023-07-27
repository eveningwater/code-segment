| 标题                      | 标签                                                    |
| ------------------------- | ------------------------------------------------------- |
| css-bar(css 实现的柱状图) | bar,:before,:after(柱状图，before 伪元素，after 伪元素) |

CSS 实现一个柱状图。

- 创建一个容器元素，宽高各位 256px,将容器元素的文本布局方式设置为两端对齐（重点）。
- 为容器元素设置一个底部边框，并将容器元素的:before 和:after 伪元素 content 设置为空，并且设置为内联元素(display:inline-block)。
- 容器伪元素的:before 设置高度为 100%,:after 设置宽度为 100%。
- 创建每个 bar 子元素，每一个子元素设置为内联元素(display:inline-block),并设置固定宽度为 20px,高度设置为不均匀的高度，使之呈现不同高度的柱状图。
- 为每一个 bar 子元素设置不同的背景色

> 代码如下:

```css
.box {
  width: 256px;
  height: 256px;
  text-align: justify;
  border-bottom: 1px dashed #dedede;
}
.box::before,
.box::after {
  content: '';
  display: inline-block;
}
.box::before {
  height: 100%;
}
.box::after {
  width: 100%;
}
.bar {
  display: inline-block;
  width: 20px;
}
.bar:first-of-type {
  background-color: #f15252;
  height: 156px;
}
.bar:nth-of-type(2) {
  background-color: #f1e152;
  height: 56px;
}
.bar:nth-of-type(3) {
  background-color: #92f152;
  height: 106px;
}
.bar:nth-of-type(4) {
  background-color: #52f1c9;
  height: 76px;
}
.bar:nth-of-type(5) {
  background-color: #52b7f1;
  height: 32px;
}
.bar:nth-of-type(6) {
  background-color: #5262f1;
  height: 15px;
}
.bar:nth-of-type(7) {
  background-color: #f152f1;
  height: 175px;
}
.bar:nth-of-type(8) {
  background-color: #a952f1;
  height: 152px;
}
.bar:nth-of-type(9) {
  background-color: #f152af;
  height: 255px;
}
.bar:nth-of-type(8) {
  background-color: #f1527a;
  height: 234px;
}
```

```html
<div class="box">
  <div class="bar"></div>
  <div class="bar"></div>
  <div class="bar"></div>
  <div class="bar"></div>
  <div class="bar"></div>
  <div class="bar"></div>
  <div class="bar"></div>
  <div class="bar"></div>
  <div class="bar"></div>
  <div class="bar"></div>
</div>
```

> 特别说明: 子元素可以使用 javascript 动态生成，包括高度和背景颜色的设置，可以使用如下的 javascript 代码。

```js
const eleBox = document.querySelector('.box');
// 目前柱子元素和个数
const eleBars = document.querySelectorAll('.bar');
let lenBar = eleBars.length;
if (eleBox && lenBar) {
  for (let indexBar = 0; indexBar < lenBar; indexBar += 1) {
    // 柱形图的柱子高度和背景色随机
    eleBars[indexBar].style.height = Math.ceil(256 * Math.random()) + 'px';
    eleBars[indexBar].style.backgroundColor =
      '#' + (Math.random() + '').slice(-6);
  }
}

// 增加数据,此处可以添加一个id为button的按钮，使用点击事件
const eleBtn = document.getElementById('button');
if (eleBtn && lenBar) {
  eleBtn.onclick = function () {
    // 随机高度和背景色
    const height = Math.ceil(256 * Math.random()) + 'px';
    const backgroundColor = '#' + (Math.random() + '').slice(-6);

    // 创建柱子元素
    const eleClone = eleBars[0].cloneNode();

    eleClone.style.height = height;
    eleClone.style.backgroundColor = backgroundColor;

    lenBar += 1;
    // 最多10条数据
    if (lenBar == 10) {
      this.setAttribute('disabled', 'disabled');
    }
  };
}
```

> 应用场景

<div class="code-editor" data-url="codes/css/html/css-bar.html" data-language="html"></div>

结果如下:

<iframe src="codes/css/html/css-bar.html"></iframe>
