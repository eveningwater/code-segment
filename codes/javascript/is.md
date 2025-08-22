| 标题             | 标签                   |
| ---------------- | ---------------------- |
| is(检查数据类型) | type,array(类型，数组) |

检查提供的值是否属于指定类型。

- 使用 Array.prototype.includes() 确保该值不是 undefined 或 null。
- 使用 Object.prototype.constructor 将值的构造函数属性与类型进行比较，以检查提供的值是否属于指定类型。

```js
const is = (type, val) => ![, null].includes(val) && val.constructor === type;
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/is.ts" data-language="typescript"></div>

> 调用方式:

```js
is(Array, [1]); // true
is(ArrayBuffer, new ArrayBuffer()); // true
is(Map, new Map()); // true
is(RegExp, /./g); // true
is(Set, new Set()); // true
is(WeakMap, new WeakMap()); // true
is(WeakSet, new WeakSet()); // true
is(String, ''); // true
is(String, new String('')); // true
is(Number, 1); // true
is(Number, new Number(1)); // true
is(Boolean, true); // true
is(Boolean, new Boolean(true)); // true
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/is.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/is.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/is.html"></iframe>
