| 标题                     | 标签            |
| ------------------------ | --------------- |
| setStyle(序列化表单对象) | browser(浏览器) |

为指定的 HTML 元素设置 CSS 样式属性的值。

- 使用 HTMLElement.style 将指定元素的 CSS 样式属性的值设置为对应值。

```js
const setStyle = (el, prop, val) => (el.style[prop] = val);
```

> 调用方式:

```js
setStyle(document.querySelector('p'), 'font-size', '20px');
// The first <p> element on the page will have a font-size of 20px
```

> 应用场景

<iframe src="codes/javascript/html/setStyle.html"></iframe>

> ps: 以上是一个不错的实用函数
