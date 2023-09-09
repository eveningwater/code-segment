| 标题                             | 标签                  |
| -------------------------------- | --------------------- |
| horizontal-scroll-snap(水平滚动) | interactivity(交互性) |

创建一个水平滚动的容器，在滚动时会吸附在元素上。

- 使用 display: grid 和 grid-auto-flow: column 创建水平布局。
- 使用 scroll-snap-type: x 强制和 overscroll-behavior-x: contains 在水平滚动上创建捕捉效果。
- 将滚动对齐对齐更改为开始、停止或居中以更改对齐对齐方式。

```html
<div class="horizontal-snap">
  <a href="#" target="_blank" rel="noopener noreferrer" class="link">
    <img
      src="https://www.eveningwater.com/my-web-projects/js/26/img/1.jpg"
      alt="图片加载中"
      class="img"
    />
  </a>
  <a href="#" target="_blank" rel="noopener noreferrer" class="link">
    <img
      src="https://www.eveningwater.com/my-web-projects/js/26/img/2.jpg"
      alt="图片加载中"
      class="img"
    />
  </a>
  <a href="#" target="_blank" rel="noopener noreferrer" class="link">
    <img
      src="https://www.eveningwater.com/my-web-projects/js/26/img/3.jpg"
      alt="图片加载中"
      class="img"
    />
  </a>
  <a href="#" target="_blank" rel="noopener noreferrer" class="link">
    <img
      src="https://www.eveningwater.com/my-web-projects/js/26/img/4.jpg"
      alt="图片加载中"
      class="img"
    />
  </a>
  <a href="#" target="_blank" rel="noopener noreferrer" class="link">
    <img
      src="https://www.eveningwater.com/my-web-projects/js/26/img/5.jpg"
      alt="图片加载中"
      class="img"
    />
  </a>
  <a href="#" target="_blank" rel="noopener noreferrer" class="link">
    <img
      src="https://www.eveningwater.com/my-web-projects/js/26/img/6.jpg"
      alt="图片加载中"
      class="img"
    />
  </a>
  <a href="#" target="_blank" rel="noopener noreferrer" class="link">
    <img
      src="https://www.eveningwater.com/my-web-projects/js/26/img/7.jpg"
      alt="图片加载中"
      class="img"
    />
  </a>
  <a href="#" target="_blank" rel="noopener noreferrer" class="link">
    <img
      src="https://www.eveningwater.com/my-web-projects/js/26/img/8.jpg"
      alt="图片加载中"
      class="img"
    />
  </a>
  <a href="#" target="_blank" rel="noopener noreferrer" class="link">
    <img
      src="https://www.eveningwater.com/my-web-projects/js/26/img/9.jpg"
      alt="图片加载中"
      class="img"
    />
  </a>
</div>
```

```css
.horizontal-snap {
  margin: 0 auto;
  display: grid;
  grid-auto-flow: column;
  gap: 1rem;
  height: calc(180px + 1rem);
  padding: 1rem;
  max-width: 480px;
  overflow-y: auto;
  overscroll-behavior: contain;
  scroll-snap-type: x mandatory;
}
.horizontal-snap .link {
  scroll-snap-align: center;
}
.horizontal-snap .img {
  width: 180px;
  max-width: none;
  object-fit: contain;
  border-radius: 1rem;
}
.horizontal-snap::-webkit-scrollbar {
  display: none;
}
```

> 应用场景

<div class="code-editor" data-url="codes/css/html/horizontal-scroll-snap.html" data-language="html"></div>

结果如下:

<iframe src="codes/css/html/horizontal-scroll-snap.html"></iframe>
