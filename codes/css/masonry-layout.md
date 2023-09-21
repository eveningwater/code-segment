| 标题                     | 标签         |
| ------------------------ | ------------ |
| masonry-layout(砌体布局) | layout(布局) |

创建在处理图像时特别有用的砌体式布局。

- 创建一个由“砖块”组成的砌体式布局，这些砖块以固定宽度（垂直布局）或固定高度（水平布局）相互落入，形成完美契合。 在处理图像时特别有用。
- 定义 .masonry-container 这是砌体布局和 .masonry-columns 的容器，.masonry-columns 是一个内部容器，其中将放置 .masonry-brick 元素。
- 将 display: block 应用于 .masonry-brick 元素以允许布局正确流动。
- 使用 :first-child 伪元素选择器为第一个元素应用不同的边距以说明其定位。
- 使用 CSS 变量和媒体查询以获得更大的灵活性和响应能力。

```html
<div class="masonry-container">
  <div class="masonry-columns">
    <img
      class="masonry-brick"
      src="https://www.eveningwater.com/img/segmentfault/1.png"
      alt="An image"
    />
    <img
      class="masonry-brick"
      src="https://www.eveningwater.com/img/segmentfault/2.png"
      alt="Another image"
    />
    <img
      class="masonry-brick"
      src="https://www.eveningwater.com/img/segmentfault/3.png"
      alt="Another image"
    />
    <img
      class="masonry-brick"
      src="https://www.eveningwater.com/img/segmentfault/4.png"
      alt="One more image"
    />
    <img
      class="masonry-brick"
      src="https://www.eveningwater.com/img/segmentfault/5.png"
      alt="And another one"
    />
    <img
      class="masonry-brick"
      src="https://www.eveningwater.com/img/segmentfault/6.png"
      alt="Last one"
    />
  </div>
</div>
```

```css
.masonry-container {
  --column-count-small--: 1;
  --column-count-medium--: 2;
  --column-count-large--: 3;
  --column-gap--: 0.125rem;
  padding: var(--column-gap--);
}
.masonry-columns {
  column-gap: var(--column-gap--);
  column-count: var(--column-count-small--);
  column-width: calc(1 / var(--column-count-small--) * 100%);
}
@media only screen and (min-width: 640px) {
  .masonry-columns {
    column-count: var(--column-count-medium--);
    column-width: calc(1 / var(--column-count-medium--) * 100%);
  }
}
@media only screen and (min-width: 800px) {
  .masonry-columns {
    column-count: var(--column-count-large--);
    column-width: calc(1 / var(--column-count-large--) * 100%);
  }
}
.masonry-brick {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 50%;
  margin: var(--column-gap--);
  display: block;
}
.masonry-brick:first-child {
  margin: 0 0 var(--column-gap--);
}
```

> 应用场景

<div class="code-editor" data-url="codes/css/html/masonry-layout.html" data-language="html"></div>

结果如下:

<iframe src="codes/css/html/masonry-layout.html"></iframe>
