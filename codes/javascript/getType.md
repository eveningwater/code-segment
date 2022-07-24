|  标题   | 标签  |
|  ----  | ----  |
| getType(获取数据类型) | type(数据类型) |

返回值的数据类型。

* 如果值为 undefined 或 null，则返回 'undefined' 或 'null'。
* 否则，使用 Object.prototype.constructor 和 Function.prototype.name 来获取构造函数的名称。

```js
const getType = v => v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name;
```

> 调用方式:

```js
getType(new Set([1, 2, 3])); // 'Set'
```


> 应用场景

<iframe src="codes/javascript/html/getType.html"></iframe>












