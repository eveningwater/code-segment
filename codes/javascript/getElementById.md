| 标题                             | 标签                           |
| -------------------------------- | ------------------------------ |
| getElementById(通过 id 获取元素) | browser,document(浏览器，文档) |

实现通过 id 获取 dom 元素的函数。

- 判断是否存在 Document.getElementById 方法，存在则调用。
- 判断是否存在 Document.all 属性，存在则通过 id 获取属性值。
- 抛出错误。

```js
const getElementById = id => {
  if (document.getElementById) {
    return document.getElementById(id);
  } else if (document.all) {
    return document.all[id];
  } else {
    throw new Error('No way to retrieve element!');
  }
};
```

> 调用方式:

```js
// 如果页面存在类似元素<div id="test">.....</div>
const test = getElementById('test');
console.log(test); // <div id="test">.....</div>
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/getElementById.html" data-language="javascript"></div>

<iframe src="codes/javascript/html/getElementById.html"></iframe>
