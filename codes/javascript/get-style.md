| 标题               | 标签                           |
| ------------------ | ------------------------------ |
| getStyle(获取样式) | browser,css(浏览器,层叠样式表) |

检索指定元素的 CSS 规则的值。

- 使用 Window.getComputedStyle() 获取指定元素的 CSS 规则的值。

```js
const getStyle = (el, ruleName) => getComputedStyle(el)[ruleName];
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/get-style.ts" data-language="typescript"></div>

> 调用方式:

```js
getStyle(document.querySelector('p'), 'font-size'); // '16px'
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/get-style.html" target="_blank" rel="noopener noreferrer">示例</a>:


<div class="code-editor" data-url="codes/javascript/html/get-stylehtml" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/get-stylehtml"></iframe>
