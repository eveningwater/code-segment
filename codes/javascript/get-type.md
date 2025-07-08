| 标题                  | 标签           |
| --------------------- | -------------- |
| getType(获取数据类型) | type(数据类型) |

返回值的数据类型。

- 如果值为 undefined 或 null，则返回 'undefined' 或 'null'。
- 否则，使用 Object.prototype.constructor 和 Function.prototype.name 来获取构造函数的名称。

```js
const getType = v =>
  v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name;
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/get-type.ts" data-language="typescript"></div>

> 调用方式:

```js
getType(new Set([1, 2, 3])); // 'Set'
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/get-type.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/get-type.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/get-type.html"></iframe>
