| 标题                     | 标签                    |
| ------------------------ | ----------------------- |
| isDuplexStream(是否是流) | node,type(node.js,类型) |

检查给定参数是否是双工（可读和可写）流。

- 检查该值是否不同于 null。
- 使用 typeof 检查值是否为 object 类型，并且 pipe 属性是否为 function 类型。
- 另外检查 \_read、\_write 和 \_readableState、\_writableState 属性的类型是否分别是函数和对象。

```js
const isDuplexStream = val =>
  val !== null &&
  typeof val === 'object' &&
  typeof val.pipe === 'function' &&
  typeof val._read === 'function' &&
  typeof val._readableState === 'object' &&
  typeof val._write === 'function' &&
  typeof val._writableState === 'object';
```

> 调用方式:

```js
const Stream = require('stream');
isDuplexStream(new Stream.Duplex()); // true
```

> 应用场景

<div class="code-editor" data-url="codes/node/demo/hashNode/isDuplexStream.js" data-language="javascript"></div>

在当前文件路径下打开终端，执行命令:

```shell
node isDuplexStream.js
```
