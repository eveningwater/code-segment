| 标题                     | 标签            |
| ------------------------ | --------------- |
| setStyle(序列化表单对象) | browser(浏览器) |

为指定的 HTML 元素设置 CSS 样式属性的值。

- 使用 HTMLElement.style 将指定元素的 CSS 样式属性的值设置为对应值。

```js
const setStyle = (el, prop, val) => (el.style[prop] = val);
```

更好的写法：

```js
const setStyle = (el, prop, val) => el.style.setProperty(prop, val);
```

<div class="code-editor" data-url="codes/javascript/ts/set-style.ts" data-language="typescript"></div>

> 调用方式:

```js
setStyle(document.querySelector('p'), 'font-size', '20px');
// The first <p> element on the page will have a font-size of 20px
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/set-style.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/set-style.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/set-style.html"></iframe>

> ps: 以上是一个不错的实用函数
