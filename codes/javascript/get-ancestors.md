| 标题                             | 标签            |
| -------------------------------- | --------------- |
| getAncestors(获取元素的祖先元素) | browser(浏览器) |

返回从文档根到给定元素的元素的所有祖先。

- 使用 Node.parentNode 和 while 循环向上移动元素的祖先树。
- 使用 Array.prototype.unshift() 将每个新祖先添加到数组的开头。

```js
const getAncestors = el => {
  const ancestors = [];
  while (el) {
    ancestors.unshift(el);
    el = el.parentNode;
  }
  return ancestors;
};
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/get-ancestors.ts" data-language="typescript"></div>

> 调用方式:

```js
getAncestors(document.querySelector('nav'));
// [document, html, body, header, nav]
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/get-ancestors.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/get-ancestors.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/get-ancestors.html"></iframe>
