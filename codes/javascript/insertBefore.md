|  标题   | 标签  |
|  ----  | ----  |
| insertBefore(前面插入元素) | browser(浏览器) |

在指定元素的开始之前插入一个 HTML 字符串。

* 使用位置为 'beforebegin' 的 Element.insertAdjacentHTML() 来解析 htmlString 并将其插入到 el 的开始之前。

```js
const insertBefore = (el,html) => el.insertAdjacentHTML('beforebegin',html);
```

> 调用方式:

```js
insertBefore(document.getElementById('myId'), '<p>before</p>');
// <p>before</p> <div id="myId">...</div>
```

> 应用场景

<iframe src="codes/javascript/html/insertBefore.html"></iframe>

