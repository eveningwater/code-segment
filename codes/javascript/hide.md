|  标题   | 标签  |
|  ----  | ----  |
| hide(隐藏所有DOM元素) | browser,css(浏览器，层叠样式表) |

隐藏所有指定的元素。

* 使用展开运算符 (...) 和 Array.prototype.forEach() 将 display: none 应用于指定的每个元素。

```js
const hide = (...elements) => elements.forEach(el => el.style.display = 'none');
```

> 调用方式:

```js
hide(...document.querySelectorAll('img')); // Hides all <img> elements on the page
```

> 应用场景

<iframe src="codes/javascript/html/hide.html"></iframe>

















