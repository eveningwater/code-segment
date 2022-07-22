|  标题   | 标签  |
|  ----  | ----  |
| getStyle(获取样式) | browser,css(浏览器,层叠样式表) |

检索指定元素的 CSS 规则的值。

* 使用 Window.getComputedStyle() 获取指定元素的 CSS 规则的值。

```js
const getStyle = (el,ruleName) => getComputedStyle(el)[ruleName];
```

> 调用方式:

```js
getStyle(document.querySelector('p'), 'font-size'); // '16px'
```


> 应用场景

<iframe src="codes/javascript/html/getStyle.html"></iframe>












