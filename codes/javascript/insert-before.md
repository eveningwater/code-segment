| 标题                       | 标签            |
| -------------------------- | --------------- |
| insertBefore(前面插入元素) | browser(浏览器) |

在指定元素的开始之前插入一个 HTML 字符串。

- 使用位置为 'beforebegin' 的 Element.insertAdjacentHTML() 来解析 htmlString 并将其插入到 el 的开始之前。

```js
const insertBefore = (el, html) => el.insertAdjacentHTML('beforebegin', html);
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/insert-before.ts" data-language="typescript"></div>

> 调用方式:

```js
insertBefore(document.getElementById('myId'), '<p>before</p>');
// <p>before</p> <div id="myId">...</div>
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/insert-before.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/insert-before.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/insert-before.html"></iframe>
