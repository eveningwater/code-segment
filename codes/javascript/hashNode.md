|  标题   | 标签  |
|  ----  | ----  |
| hashNode(基于nodejs的hash算法) | node,promise(nodejs，期约) |

使用 [SHA-256](https://en.wikipedia.org/wiki/SHA-2) 算法为值创建哈希，返回一个期约。

* 使用 crypto.createHash() 使用适当的算法创建一个 Hash 对象。
* 使用 hash.update() 将 val 中的数据添加到 Hash 中， hash.digest() 计算数据的摘要。
* 使用 setTimeout() 防止长时间操作阻塞。 返回一个 Promise 给它一个熟悉的界面。

```js
const crypto = require('crypto');
const hashNode = val => new Promise(resolve => setTimeout(() => resolve(crypto.createHash('sha256').update(val).digest('hex')) ,0));
```

> 调用方式:

```js
// create a js file called test(or other)
// write code about hasNode method and apply the hasNode method
// the run `node test.js` in terminal
hashNode(JSON.stringify({ a: 'a', b: [1, 2, 3, 4], foo: { c: 'bar' } })).then(
  console.log
);
// '04aa106279f5977f59f9067fa9712afc4aedc6f5862a8defc34552d8c7206393'
```

> 应用场景
















