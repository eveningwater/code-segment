|  标题   | 标签  |
|  ----  | ----  |
| hasClass(检查 HTML 元素是否有类名) | browser,css(浏览器，层叠样式表) |

检查给定元素是否具有指定的类。

* 使用 Element.classList 和 DOMTokenList.contains() 检查元素是否具有指定的类。

```js
const hasClass = (el,className) => el.classList.contains(className);
```

> 调用方式:

```js
hasClass(document.querySelector('p.special'), 'special'); // true
```


> 应用场景

<iframe src="codes/javascript/html/hasClass.html"></iframe>













