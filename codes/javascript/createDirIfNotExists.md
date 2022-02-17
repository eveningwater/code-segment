|  标题   | 标签  |
|  ----  | ----  |
| counter(如果目录不存在创建目录) | node,beginner(nodejs，初学者) |

如果目录不存在，则创建目录。

* 使用 `fs.existsSync()` 检查目录是否存在，使用 `fs.mkdirSync()` 创建它。

> 代码如下:

```js
const fs = require("fs");
const createDirIfNotExists = dir => (!fs.existsSync(dir) ? fs.mkdirSync(dir) : undefined);
```

> 调用方式:

```js
createDirIfNotExists('test');
// creates the directory 'test', if it doesn't exist
```

> 应用场景