| 标题                      | 标签            |
| ------------------------- | --------------- |
| getSiblings(获取兄弟节点) | browser(浏览器) |

返回一个包含给定元素的所有兄弟元素的数组。

- 使用 Node.parentNode 和 Node.childNodes 获取包含在元素父级中的所有元素的 NodeList。
- 使用扩展运算符 (...) 和 Array.prototype.filter() 转换为数组并从中删除给定的元素。

```js
//the nodeType of text node is 3
const getSiblings = el =>
  [...el.parentNode.childNodes].filter(
    item => item !== el && node.nodeType !== 3
  );
```

> 调用方式:

```js
getSiblings(document.querySelector('head')); // ['body']
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/getSiblings.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/getSiblings.html"></iframe>
