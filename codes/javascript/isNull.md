|  标题   | 标签  |
|  ----  | ----  |
| isNull(是否null) | type(类型) |

检查指定的值是否为空或未定义。

* 使用严格相等运算符检查 val 的值是否等于 null。

```js
const isNull = val => val === null;
```

> 调用方式:

```js
isNull(null); // true
isNull(undefined); // true
isNull(''); // false
```

> 应用场景
