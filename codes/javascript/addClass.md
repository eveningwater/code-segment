| 标题               | 标签            |
| ------------------ | --------------- |
| addClass(新增类名) | browser(浏览器) |

将类添加到 HTML 元素。

- 使用 `Element.classList` 和 `DOMTokenList.add()` 将指定的类添加到元素中。

> 代码如下:

```js
const addClass = (el, className) => el.classList.add(className);
```

> 调用方式:

```js
addClass(document.querySelector('p'), 'special');
// The paragraph will now have the 'special' class
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/addClass.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/addClass.html"></iframe>
