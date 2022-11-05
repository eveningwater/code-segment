|  标题   | 标签  |
|  ----  | ----  |
| isWritableStream(是否是可写流) | node,type(node.js,类型) |

检查给定参数是否是可写流。

* 检查该值是否不同于 null。
* 使用 typeof 检查值是否为 object 类型，管道属性是否为 function 类型。
* 另外检查 _write 和 _writableState 属性的类型是否分别是函数和对象。

```js
const isWritableStream = val => val !== null &&
typeof val === 'object' &&
typeof val.pipe === 'function' &&
typeof val._write === 'function' &&
typeof val._writableState === 'object';
```

> 调用方式:

```js
const fs = require('fs');

isWritableStream(fs.createWriteStream('test.txt')); // true
```

> 应用场景

