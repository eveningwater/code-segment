| 标题                               | 标签                  |
| ---------------------------------- | --------------------- |
| vertical-scroll-snap(垂直滚动捕捉) | interactivity(交互性) |

创建一个可滚动的容器，在滚动时将捕捉到元素。

- 使用 display: grid 和 grid-auto-flow: row 创建垂直布局。
- 使用 scroll-snap-type: y 强制和 overscroll-behavior-y: contains 在垂直滚动上创建捕捉效果。
- 您可以使用 scroll-snap-align 与 start、stop 或 center 来更改对齐对齐方式。

```html
<div class="vertical-snap">
  <a
    href="#"
    target="_blank"
    rel="noopener noreferrer"
    class="vertical-snap-link"
  >
    <img
      src="https://www.eveningwater.com/img/segmentfault/1.png"
      alt="图片加载中"
      class="vertical-snap-img"
    />
  </a>
  <a
    href="#"
    target="_blank"
    rel="noopener noreferrer"
    class="vertical-snap-link"
  >
    <img
      src="https://www.eveningwater.com/img/segmentfault/2.png"
      alt="图片加载中"
      class="vertical-snap-img"
    />
  </a>
  <a
    href="#"
    target="_blank"
    rel="noopener noreferrer"
    class="vertical-snap-link"
  >
    <img
      src="https://www.eveningwater.com/img/segmentfault/3.png"
      alt="图片加载中"
      class="vertical-snap-img"
    />
  </a>
  <a
    href="#"
    target="_blank"
    rel="noopener noreferrer"
    class="vertical-snap-link"
  >
    <img
      src="https://www.eveningwater.com/img/segmentfault/4.png"
      alt="图片加载中"
      class="vertical-snap-img"
    />
  </a>
  <a
    href="#"
    target="_blank"
    rel="noopener noreferrer"
    class="vertical-snap-link"
  >
    <img
      src="https://www.eveningwater.com/img/segmentfault/5.png"
      alt="图片加载中"
      class="vertical-snap-img"
    />
  </a>
  <a
    href="#"
    target="_blank"
    rel="noopener noreferrer"
    class="vertical-snap-link"
  >
    <img
      src="https://www.eveningwater.com/img/segmentfault/6.png"
      alt="图片加载中"
      class="vertical-snap-img"
    />
  </a>
  <a
    href="#"
    target="_blank"
    rel="noopener noreferrer"
    class="vertical-snap-link"
  >
    <img
      src="https://www.eveningwater.com/img/segmentfault/7.png"
      alt="图片加载中"
      class="vertical-snap-img"
    />
  </a>
  <a
    href="#"
    target="_blank"
    rel="noopener noreferrer"
    class="vertical-snap-link"
  >
    <img
      src="https://www.eveningwater.com/img/segmentfault/8.png"
      alt="图片加载中"
      class="vertical-snap-img"
    />
  </a>
  <a
    href="#"
    target="_blank"
    rel="noopener noreferrer"
    class="vertical-snap-link"
  >
    <img
      src="https://www.eveningwater.com/img/segmentfault/9.png"
      alt="图片加载中"
      class="vertical-snap-img"
    />
  </a>
</div>
```

```css
.vertical-snap {
  display: grid;
  grid-auto-flow: row;
  gap: 1rem;
  margin: 0 auto;
  width: calc(180px + 1rem);
  padding: 1rem;
  height: 480px;
  overflow-y: auto;
  overflow-x: hidden;
  overscroll-behavior-y: contain;
  scroll-snap-type: y mandatory;
}
.vertical-snap-link {
  scroll-snap-align: center;
}
.vertical-snap-img {
  width: 180px;
  object-fit: contain;
  border-radius: 1rem;
}
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  background-color: #535455;
}
::-webkit-scrollbar-thumb {
  width: 5px;
  height: 5px;
  background-color: #2396ef;
}
```

> 应用场景

<div class="code-editor" data-url="codes/css/html/vertical-scroll-snap.html" data-language="html"></div>

结果如下:

<iframe src="codes/css/html/vertical-scroll-snap.html"></iframe>
