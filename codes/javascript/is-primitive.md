| 标题                        | 标签       |
| --------------------------- | ---------- |
| isPrimitive(是否是原始数据) | type(类型) |

检查传递的值是否是原始的。

- 从 val 创建一个对象并将其与 val 进行比较以确定传递的值是否是原始的（即不等于创建的对象）。

```js
const isPrimitive = val => Object(val) !== val;
```

ts代码如下:

<div class="code-editor" data-url="codes/javascript/ts/is-primitive.ts" data-language="typescript"></div>

> 调用方式:

```js
isPrimitive(null); // true
isPrimitive(undefined); // true
isPrimitive(50); // true
isPrimitive('Hello!'); // true
isPrimitive(false); // true
isPrimitive(Symbol()); // true
isPrimitive([]); // false
isPrimitive({}); // false
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/is-primitive.html" target="_blank" rel="noopener noreferrer">示例</a>:


<div class="code-editor" data-url="codes/javascript/html/is-primitive.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/is-primitive.html"></iframe>
