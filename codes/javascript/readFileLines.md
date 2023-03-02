| 标题                      | 标签                      |
| ------------------------- | ------------------------- |
| readFileLines(读取文件行) | node,array(node.js，数组) |

返回指定文件中的行数组。

- 使用 fs.readFileSync() 从文件创建缓冲区。
- 使用 Buffer.prototype.toString() 将缓冲区转换为字符串。
- 使用 String.prototype.split() 从文件的内容创建一个行数组。

```js
const fs = require('fs');
const readFileLines = filename => {
  fs.readFileSync(filename).toString('UTF8').split('\n');
};
```

> 调用方式:

```js
/*
contents of test.txt :
  line1
  line2
  line3
  ___________________________
*/
let arr = readFileLines('test.txt');
console.log(arr); // ['line1', 'line2', 'line3']
```

> 应用场景
