| 标题                  | 标签           |
| --------------------- | -------------- |
| domContains(包含方法) | document(文档) |

实现一个判断父节点是否包含子节点的方法。

- 使用[Document.compareDocumentPosition](https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition)方法比较两个元素得到定位值。
- 计算方法得到的结果与 0X10 执行按位与&操作符得到后的结果，在调用 Boolean 方法转换成布尔值。

> 代码如下:

```js
const domContains = (parent, child) =>
  Boolean(0x10 & parent.compareDocumentPosition(child));
```

> 调用方式:

```js
// 假设页面存在如下dom元素
{
  /* <div id="app">
<p id="child">p元素是app元素的子元素，打开控制台可以查看验证结果。</p>
</div> */
}
<div id="next">兄弟元素</div>;
const child = document.querySelector('#child');
const parent = document.querySelector('#app');
const next = document.querySelector('#next');
console.log(
  domContains(parent, child),
  domContains(parent, parent),
  domContains(parent, next)
); // true false false
```

> 应用场景

domContains.html 如下:

<div class="code-editor" data-url="codes/javascript/html/domContains.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/domContains.html"></iframe>
