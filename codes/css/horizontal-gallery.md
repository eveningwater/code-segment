| 标题                                 | 标签                                |
| ------------------------------------ | ----------------------------------- |
| horizontal-gallery(水平滚动图片画廊) | visual,interactivity(视觉的,交互性) |

创建一个水平滚动的图像库。

- 使用 position: absolute 将 .thumbnails 定位在容器底部。
- 使用 scroll-snap-type: x 强制和 overscroll-behavior-x: contains 在水平滚动上创建捕捉效果。使用 scroll-snap-align: start 将元素对齐到容器的开头。
- 使用 scrollbar-width: none 隐藏滚动条并将伪元素 ::-webkit-scrollbar 设置为 display: none。
- 使用 Element.scrollTo() 定义一个 scrollToElement 函数，它将画廊滚动到给定的项目。
- 使用 Array.prototype.map() 和 Array.prototype.join() 填充 .thumbnails 元素。给每个缩略图一个带有图像索引的 data-id 属性。
- 使用 Document.querySelectorAll() 获取所有缩略图元素。使用 Array.prototype.forEach() 为每个缩略图上的“单击”事件注册一个处理程序，使用 EventTarget.addEventListener() 和 scrollToElement 函数。
- 使用 Document.querySelector() 和 EventTarget.addEventListener() 为“滚动”事件注册一个处理程序。使用 highlightThumbnail 函数更新 .thumbnails 元素以匹配当前滚动位置。

```html
<div class="gallery-container">
  <div class="thumbnails"></div>
  <div class="slides"></div>
</div>
```

```css
.gallery-container {
  position: relative;
  display: flex;
  justify-content: center;
}
.thumbnails {
  position: absolute;
  bottom: 8px;
  display: flex;
  flex-direction: row;
  gap: 6px;
}
.thumbnails-item {
  width: 8px;
  height: 8px;
  cursor: pointer;
  background-color: #ffffff;
  border-radius: 50%;
}
.thumbnails-item.highlighted {
  background-color: #2d2e2e;
}
.slides {
  margin: 0 16px;
  display: grid;
  grid-auto-flow: column;
  gap: 1rem;
  width: 540px;
  padding: 0 0.25rem;
  height: 720px;
  overflow-y: auto;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
}
.slides-item {
  scroll-snap-align: start;
}
.slides-item-img {
  width: 540px;
  object-fit: contain;
}
.slides::-webkit-scrollbar {
  display: none;
}
```

```js
const baseURL = 'https://www.eveningwater.com/my-web-projects/js/26/img/';
const slideGallery = document.querySelector('.slides');
const createSlides = function (element, count = 15) {
  return new Promise(resolve => {
    let template = '';
    for (let i = 0; i < count; i++) {
      template += `<div class="slides-item"><img src="${
        baseURL + (i + 1)
      }.jpg" alt="图片加载中" class="slides-item-img"></div>`;
    }
    element.innerHTML = template;
    resolve();
  });
};
const createScroll = () => {
  const slides = slideGallery.querySelectorAll('.slides-item'),
    thumbnailsContainer = document.querySelector('.thumbnails'),
    slideWidth = slides[0].offsetWidth,
    slideCount = slides.length;
  const highlightThumbnail = () => {
    thumbnailsContainer
      .querySelectorAll('.thumbnails-item')
      .forEach(el => el.classList.remove('highlighted'));
    const index = Math.floor(slideGallery.scrollLeft / slideWidth);
    thumbnailsContainer
      .querySelector(`div[data-id="${index}"]`)
      ?.classList.add('highlighted');
  };
  const scrollElement = el => {
    const index = parseInt(el.dataset.id, 10);
    slideGallery.scrollTo(index * slideWidth, 0);
  };

  thumbnailsContainer.innerHTML += [...slides]
    .map((slide, i) => `<div data-id="${i}" class="thumbnails-item"></div>`)
    .join('');

  thumbnailsContainer.querySelectorAll('.thumbnails-item').forEach(el => {
    el.addEventListener('click', () => scrollElement(el));
  });

  slideGallery.addEventListener('scroll', e => highlightThumbnail());

  highlightThumbnail();
};

createSlides(slideGallery).then(() => createScroll());
```

> 应用场景

<div class="code-editor" data-url="codes/css/html/horizontal-gallery.html" data-language="html"></div>

结果如下:

<iframe src="codes/css/html/horizontal-gallery.html"></iframe>
