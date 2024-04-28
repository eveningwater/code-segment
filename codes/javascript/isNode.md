| 标题                   | 标签                             |
| ---------------------- | -------------------------------- |
| isNode(是否 node 环境) | node,browser(node.js,浏览器环境) |

确定当前运行时环境是否为 Node.js。

- 使用提供有关当前 Node.js 进程信息的进程全局对象。
- 检查是否定义了 process、process.versions 和 process.versions.node。

```js
const isNode = () =>
  typeof process !== 'undefined' &&
  !!process.versions &&
  !!process.versions.node;
```

> 调用方式:

```js
isNode(); // true (Node)
isNode(); // false (browser)
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/isNode.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/isNode.html"></iframe>
