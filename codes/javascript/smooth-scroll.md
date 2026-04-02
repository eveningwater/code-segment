| 标题                   | 标签                           |
| ---------------------- | ------------------------------ |
| smoothScroll(平滑滚动) | browser,css(浏览器,层叠样式表) |

平滑地将调用它的元素滚动到浏览器窗口的可见区域。

- 使用 Element.scrollIntoView() 滚动元素。
- 使用 { behavior: 'smooth' } 平滑滚动。

```js
const smoothScroll = element =>
  document.querySelector(element).scrollIntoView({ behavior: 'smooth' });
```

<div class="code-editor" data-url="codes/javascript/ts/smooth-scroll.ts" data-language="typescript"></div>

> 调用方式:

```js
smoothScroll('#fooBar'); // scrolls smoothly to the element with the id fooBar
smoothScroll('.fooBar');
// scrolls smoothly to the first element with a class of fooBar
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/smooth-scroll.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/smooth-scroll.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/smooth-scroll.html"></iframe>

> ps: 以上是一个不错的实用函数
