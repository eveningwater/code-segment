| 标题                                      | 标签                                                |
| ----------------------------------------- | --------------------------------------------------- |
| UUIDGeneratorNode(在 node.js 中生成 UUID) | node,random,intermediate(node 环境，随机，两者之间) |

在[node.js](https://nodejs.org/en/)中生成 UUID。

- 使用`Crypto.getRandomValues()`生成符合[RFC4122](https://www.ietf.org/rfc/rfc4122.txt)版本 4 的 UUID。
- 使用`Number.prototype.toString(16)`将其转换为合适的 UUID。

> 代码如下:

```js
const crypto = require('crypto');

const UUIDGeneratorNode = () =>
  ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (c ^ (crypto.randomBytes(1)[0] & (15 >> (c / 4)))).toString(16)
  );
```

> 调用方式:

```js
UUIDGeneratorNode(); // '79c7c136-60ee-40a2-beb2-856f1feabefc'
```

> 应用场景

<div class="code-editor" data-url="codes/node/demo/UUIDGeneratorNode.js" data-language="js"></div>
