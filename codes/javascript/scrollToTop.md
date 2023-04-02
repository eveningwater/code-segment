| 标题                  | 标签            |
| --------------------- | --------------- |
| scrollToTop(回到顶部) | browser(浏览器) |

平滑滚动到页面顶部。

- 使用 Document.documentElement 或 Document.body 和 Element.scrollTop 从顶部获取距离。
- 从顶部滚动一小部分距离。
- 使用 Window.requestAnimationFrame() 为滚动设置动画。

```js
const scrollToTop = () => {
  let c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};
```

> 调用方式:

```js
scrollToTop(); // Smooth-scrolls to the top of the page
```

> 应用场景

<iframe src="codes/javascript/html/scrollToTop.html"></iframe>

> ps: 以上是一个不错的实用函数
