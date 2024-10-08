| 标题                           | 标签       |
| ------------------------------ | ---------- |
| lazyLoadingImages(懒加载图片) | image(图片) |

在当今的数字环境中，图像在吸引用户注意力和传达信息方面发挥着关键作用。然而，它们对网页加载时间的影响可能很大，导致用户体验不佳和搜索引擎排名较低。这使得图像优化成为任何网站性能优化策略的重要组成部分。

优化图像的最常见技术是懒加载。这通常以懒加载初始视口之外的图像的形式出现，直到它们接近滚动到视图中。通过推迟加载图像直到需要它们时，懒加载可以优化页面性能并确保无缝的浏览体验。

幸运的是，HTML 标准已经包含一个内置解决方案，可以轻松实现懒加载，即 loading 属性。只需将 loading="lazy" 添加到所需图像，即可解锁懒加载的强大功能，并允许浏览器优化资源分配和加载优先级。

```html
<img src="/img/duck.png" alt="A rubber duck" loading="lazy" />
```

> 注意:除 Safari 外，大多数现代浏览器都支持加载属性，但 IE 等旧版浏览器不支持。就这一点而言，懒加载可以看作是支持它的浏览器的渐进式增强，因此对于任何可以从中受益的用户来说，它仍然值得添加。

> 使用示例

<div class="code-editor" data-url="codes/html/html/lazy-loading-image.html" data-language="html"></div>

结果如下:

<iframe src="codes/html/html/lazy-loading-image.html"></iframe>