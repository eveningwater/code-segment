| 标题                     | 标签         |
| ------------------------ | ------------ |
| shallowClone(浅复制对象) | object(对象) |

创建对象的浅克隆。

- 使用 Object.assign() 和空对象 ({}) 创建原始对象的浅表克隆。

```js
const shallowClone = obj => Object.assign({}, obj);
```

<div class="code-editor" data-url="codes/javascript/ts/shallow-clone.ts" data-language="typescript"></div>

> 调用方式:

```js
const a = { x: true, y: 1 };
const b = shallowClone(a); // a !== b
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/shallow-clone.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/shallow-clone.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/shallow-clone.html"></iframe>