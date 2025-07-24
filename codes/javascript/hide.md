| 标题                    | 标签                            |
| ----------------------- | ------------------------------- |
| hide(隐藏所有 DOM 元素) | browser,css(浏览器，层叠样式表) |

隐藏所有指定的元素。

- 使用展开运算符 (...) 和 Array.prototype.forEach() 将 display: none 应用于指定的每个元素。

```js
const hide = (...elements) =>
  elements.forEach(el => (el.style.display = 'none'));
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/hide.ts" data-language="typescript"></div>

> 调用方式:

```js
hide(...document.querySelectorAll('img')); // Hides all <img> elements on the page
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/hide.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/hide.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/hide.html"></iframe>
