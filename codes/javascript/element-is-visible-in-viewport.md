| 标题                                                | 标签            |
| --------------------------------------------------- | --------------- |
| elementIsVisibleInViewport (检测元素是否在视口可见) | browser(浏览器) |

检查指定的元素是否在视口中可见。

- 使用 Element.getBoundingClientRect()、Window.innerWidth 和 Window.innerHeight 来确定给定元素是否在视口中可见。
- 省略第二个参数以确定元素是否完全可见，或指定 true 以确定它是否部分可见。

> 代码如下:

```js
const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
  const { top, left, bottom, right } = el.getBoundingClientRect();
  const { innerHeight, innerWidth } = window;
  return partiallyVisible
    ? ((top > 0 && top < innerHeight) ||
        (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
    : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
};
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/element-is-visible-in-viewport.ts" data-language="typescript"></div>

> 调用方式:

```js
// e.g. 100x100 viewport and a 10x10px element at position {top: -1, left: 0, bottom: 9, right: 10}
elementIsVisibleInViewport(el); // false - (not fully visible)
elementIsVisibleInViewport(el, true); // true - (partially visible)
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/element-is-visible-in-viewport.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/element-is-visible-in-viewport.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/element-is-visible-in-viewport.html"></iframe>
