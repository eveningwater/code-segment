|  标题   | 标签  |
|  ----  | ----  |
| isPrimitive(是否是原始数据) | type(类型) |

检查传递的值是否是原始的。

* 从 val 创建一个对象并将其与 val 进行比较以确定传递的值是否是原始的（即不等于创建的对象）。

```js
const isPrimitive = val => Object(val) !== val;
```

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
