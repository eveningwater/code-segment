| 标题                             | 标签           |
| -------------------------------- | -------------- |
| vertical-gallery(垂直画廊) | visual,interactivity(视觉的，交互性)) |

创建一个可水平滚动的图片库。

* 使用 display: flex 和 justify-content: center 来设置容器的布局。
* 使用 display: flex 和 flex-direction: column 来设置幻灯片的布局。
* 使用 scroll-snap-type: y 强制和 overscroll-behavior-y: contains 在垂直滚动上创建捕捉效果。使用 scroll-snap-align: start 将元素对齐到容器的开头。
* 使用 scrollbar-width: none 隐藏滚动条并将伪元素 ::-webkit-scrollbar 设置为 display: none。
* 使用 Element.scrollTo() 定义一个 scrollToElement 函数，它将画廊滚动到给定的项目。
* 使用 Array.prototype.map() 和 Array.prototype.join() 填充 .thumbnails 元素。给每个缩略图一个带有图像索引的 data-id 属性。
* 使用 Document.querySelectorAll() 获取所有缩略图元素。使用 Array.prototype.forEach() 为每个缩略图上的“单击”事件注册一个处理程序，使用 EventTarget.addEventListener() 和 scrollToElement 函数。
* 使用 Document.querySelector() 和 EventTarget.addEventListener() 为“滚动”事件注册一个处理程序。使用 scrollThumb 函数更新 .thumbnails 和 .scrollbar 元素以匹配当前滚动位置。

```html
<div class="gallery-container">
    <div class="thumbnails"></div>
    <div class="scrollbar">
        <div class="thumb"></div>
    </div>
    <div class="slides">
        <div class="slides-item"><img src="https://www.eveningwater.com/img/segmentfault/1.png" alt="图片加载中"></div>
        <div class="slides-item"><img src="https://www.eveningwater.com/img/segmentfault/2.png" alt="图片加载中"></div>
        <div class="slides-item"><img src="https://www.eveningwater.com/img/segmentfault/3.png" alt="图片加载中"></div>
        <div class="slides-item"><img src="https://www.eveningwater.com/img/segmentfault/4.png" alt="图片加载中"></div>
        <div class="slides-item"><img src="https://www.eveningwater.com/img/segmentfault/5.png" alt="图片加载中"></div>
        <div class="slides-item"><img src="https://www.eveningwater.com/img/segmentfault/6.png" alt="图片加载中"></div>
        <div class="slides-item"><img src="https://www.eveningwater.com/img/segmentfault/7.png" alt="图片加载中"></div>
        <div class="slides-item"><img src="https://www.eveningwater.com/img/segmentfault/8.png" alt="图片加载中"></div>
        <div class="slides-item"><img src="https://www.eveningwater.com/img/segmentfault/9.png" alt="图片加载中"></div>
    </div>
</div>
```

```css
.gallery-container {
    display: flex;
    justify-content: center;
}
.thumbnails {
    display: flex;
    flex-direction: column;
    gap: 8px;
}
.thumbnails > .thumbnails-img {
    width: 40px;
    height: 40px;
    cursor: pointer;
}
.scrollbar {
    width: 1px;
    height: 720px;
    background-color: #cecece;
    display: block;
    margin: 0 0 0 8px;
}
.thumb {
    width: 1px;
    background-color: #2396ef;
    height: 0;
    position: absolute;
}
.slides {
    margin: 0 16px;
    display: grid;
    grid-auto-flow: row;
    gap: 1rem;
    width: calc(540px + 1rem);
    padding: 0 .25rem;
    height: 720px;
    overflow-y: auto;
    overscroll-behavior-y: contain;
    scroll-snap-type: y mandatory;
    scrollbar-width: none;
}
.slides-item {
    scroll-snap-align: start;
}
.slides-item > img {
    width: 540px;
    object-fit: contain;
}
.slides::-webkit-scrollbar {
    display: none;
}
```

```js
const slideGallery = document.querySelector('.slides'),
      slides = slideGallery.querySelectorAll('.slides-item'),
      scrollbarThumb = document.querySelector('.thumb'),
      slideCount = slides.length,
      slideHeight = 720,
      marginTop = 16;
const scrollThumb = () => {
    const index = Math.floor(slideGallery.scrollTop / slideHeight);
    scrollbarThumb.style.height = `${((index + 1) / slideCount) * slideHeight}px`
}
const scrollToElement = el => {
    const index = parseInt(el.dataset.id,10);
    slideGallery.scrollTo(0,index * slideHeight + marginTop);
}
document.querySelector('.thumbnails').innerHTML += [...slides].map((slide,i) => `<img src="${slide.querySelector('img').src}" data-id="${i}" class="thumbnails-img" />`).join('');
slideGallery.addEventListener('scroll',e => scrollThumb());
```

> 应用场景

<iframe src="codes/css/html/vertical-gallery.html"></iframe>

