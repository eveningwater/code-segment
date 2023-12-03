| 标题                       | 标签            |
| -------------------------- | --------------- |
| elementIsFocused(二者之一) | browser(浏览器) |

检查给定元素是否聚焦。

- 使用 `Document.activeElement` 确定给定元素是否获得焦点。

> 代码如下:

```js
const elementIsFocused = el => el === document.activeElement;
```

> 调用方式:

```js
elementIsFocused(el); // true if the element is focused
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/elementIsFocused.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/elementIsFocused.html"></iframe>
