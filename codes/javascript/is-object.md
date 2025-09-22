| 标题                   | 标签                   |
| ---------------------- | ---------------------- |
| isObject(是否一个对象) | type,object(类型,对象) |

检查传递的值是否为对象。

- 使用 Object 构造函数为给定值创建对象包装器。
- 如果值为 null 或未定义，则创建并返回一个空对象。
- 否则，返回与给定值对应的类型的对象。

```js
const isObject = obj => obj === Object(obj);
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/is-object.ts" data-language="typescript"></div>

> 调用方式:

```js
isObject([1, 2, 3, 4]); // true
isObject([]); // true
isObject(['Hello!']); // true
isObject({ a: 1 }); // true
isObject({}); // true
isObject(true); // false
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/is-object.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/is-object.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/is-object.html"></iframe>
