| 标题               | 标签            |
| ------------------ | --------------- |
| addClass(新增类名) | browser(浏览器) |

将类添加到 HTML 元素。

- 使用 `Element.classList` 和 `DOMTokenList.add()` 将指定的类添加到元素中。

> 代码如下:

```js
const addClass = (el, className) =>
  el.classList.add(...(Array.isArray(className) ? className : [className]));
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/add-class.ts" data-language="typescript"></div>

> 调用方式:

```js
addClass(document.querySelector("p"), "special");
// The paragraph will now have the 'special' class
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/add-class.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/add-class.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/add-class.html"></iframe>
