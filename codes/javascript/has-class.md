| 标题                               | 标签                            |
| ---------------------------------- | ------------------------------- |
| hasClass(检查 HTML 元素是否有类名) | browser,css(浏览器，层叠样式表) |

检查给定元素是否具有指定的类。

- 使用 Element.classList 和 DOMTokenList.contains() 检查元素是否具有指定的类。

```js
const hasClass = (el, className) => el.classList.contains(className);
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/has-class.ts" data-language="typescript"></div>

> 调用方式:

```js
hasClass(document.querySelector('p.special'), 'special'); // true
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/has-class.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/has-class.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/has-class.html"></iframe>
