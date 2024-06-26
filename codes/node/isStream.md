| 标题                   | 标签                    |
| ---------------------- | ----------------------- |
| isStream(是否是一个流) | node,type(node.js,类型) |

检查给定参数是否为流。

- 检查该值是否不同于 null。
- 使用 typeof 检查值是否为 object 类型，pipe 属性是否为 function 类型。

```js
const isStream = val =>
  val !== null && typeof val === 'object' && typeof val.pipe === 'function';
```

> 调用方式:

```js
const fs = require('fs');
isStream(fs.createReadStream('test.txt')); // true
```

> 应用场景

<div class="code-editor" data-url="codes/node/demo/isStream.js" data-language="javascript"></div>

在当前文件路径下打开终端，执行命令:

```shell
node isStream.js
```
