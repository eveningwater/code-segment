| 标题                        | 标签                   |
| --------------------------- | ---------------------- |
| isPlainObject(是否普通对象) | type,object(类型,对象) |

检查提供的值是否是由 Object 构造函数创建的对象。

- 检查提供的值是否真实。
- 使用 typeof 检查它是否是一个对象，并使用 Object.prototype.constructor 确保构造函数等于 Object。

```js
const isPlainObject = val =>
  !!val && typeof val === 'object' && val.constructor === Object;
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/is-plain-object.ts" data-language="typescript"></div>

> 调用方式:

```js
isPlainObject({ a: 1 }); // true
isPlainObject(new Map()); // false
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/is-plain-object.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/is-plain-object.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/is-plain-object.html"></iframe>
