| 标题             | 标签            |
| ---------------- | --------------- |
| either(二者之一) | browser(浏览器) |

检查父元素是否包含子元素。

- 检查父元素是否与子元素不同。
- 使用 `Node.contains()` 检查父元素是否包含子元素。

> 代码如下:

```js
const elementContains = (parent, child) =>
  parent !== child && parent.contains(child);
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/element-contains.ts" data-language="typescript"></div>

> 调用方式:

```js
elementContains(
  document.querySelector("head"),
  document.querySelector("title")
);
// true
elementContains(document.querySelector("body"), document.querySelector("body"));
// false
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/element-contains.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/element-contains.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/element-contains.html"></iframe>
