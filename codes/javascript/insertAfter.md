|  标题   | 标签  |
|  ----  | ----  |
| insertAfter(后续插入元素) | browser(浏览器) |

在指定元素的末尾插入一个 HTML 字符串。

* 使用位置为 'afterend' 的 Element.insertAdjacentHTML() 来解析 htmlString 并将其插入到 el 的末尾之后。

```js
const insertAfter = (el,html) => el.insertAdjacentHTML('afterend',html);
```

> 调用方式:

```js
insertAfter(document.getElementById('myId'), '<p>after</p>');
// <div id="myId">...</div> <p>after</p>
```

> 应用场景

<iframe src="codes/javascript/html/insertAfter.html"></iframe>







