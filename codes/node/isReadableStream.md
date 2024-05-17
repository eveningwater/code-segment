| 标题                             | 标签                    |
| -------------------------------- | ----------------------- |
| isReadableStream(是否是可读的流) | node,type(node.js,类型) |

检查给定参数是否是可读的流。

- 检查该值是否不同于 null。
- 使用 TypeOf 检查该值是否为类型对象，并且管道属性是类型函数。
- 另外，检查\_read 和\_readableState 属性的类型是否分别是函数和对象。

```js
const isReadableStream = val =>
  val !== null &&
  typeof val === 'object' &&
  typeof val.pipe === 'function' &&
  typeof val._read === 'function' &&
  typeof val._readableState === 'object';
```

> 调用方式:

```js
const fs = require('fs');
isReadableStream(fs.createReadStream('test.txt')); // true
```

> 应用场景

<div class="code-editor" data-url="codes/node/demo/isReadableStream.js" data-language="javascript"></div>

在当前文件路径下打开终端，执行命令:

```shell
node isReadableStream.js
```
