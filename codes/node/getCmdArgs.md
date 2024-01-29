| 标题                             | 标签          |
| -------------------------------- | ------------- |
| getCmdArgs(获取脚本的命令行参数) | node(node.js) |

获取传递给 Node.js 脚本的命令行参数。

- 使用 process.argv 获取所有命令行参数的数组。
- 使用 Array.prototype.slice() 删除前两个元素（Node.js 可执行文件的路径和正在执行的文件）。

```js
const getCmdArgs = () => process.argv.slice(2);
```

> 调用方式:

```js
// node my-script.js --name=John --age=30
getCmdArgs(); // ['--name=John', '--age=30']
```

> 应用场景

<div class="code-editor" data-url="codes/node/demo/getCmdArgs.js" data-language="javascript"></div>

在当前文件路径下打开终端，执行命令:

```shell
node getCmdArgs.js --name=eveningwater --age=28
```
