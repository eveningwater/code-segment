| 标题                          | 标签                             |
| ----------------------------- | -------------------------------- |
| JSONToFile(JSON 对象转成文件) | node,intermediate(node,两者之间) |

将一个`JSON`对象写成一个文件。

- 使用`fs.writeFileSync()`方法，引入的`fs`模块与[JSON.stringify()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)方法来将一个`JSON`对象写成一个文件

> 代码如下:

```js
const fs = require('fs');
const JSONToFile = (obj, fileName) =>
  fs.writeFileSync(`${fileName}.json`, JSON.stringify(obj, null, 2));
```

> 调用方式:

```js
JSONToFile({ test: 'is passed' }, 'testJsonFile');
// writes the object to 'testJsonFile.json'
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/node/JSONToFile.js" data-language="javascript" style="min-height:150px;"></div>

在当前文件路径下打开终端，执行命令:

```shell
node JSONToFile.js
```

然后就会看到如下文件内容:

<div class="code-editor" data-url="codes/javascript/node/testJsonFile.json" data-language="json" style="min-height:30px;"></div>
