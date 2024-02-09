| 标题                                     | 标签          |
| ---------------------------------------- | ------------- |
| hasFlags(检查当前进程是否包含指定的标识) | node(node.js) |

检查当前进程的参数是否包含指定的标识。

- 使用 Array.prototype.every() 和 Array.prototype.includes() 检查 process.argv 是否包含所有指定的标志。
- 使用正则表达式来测试指定的标志是否带有前缀 - 或 -- 并相应地作为前缀。

```js
const hasFlags = (...flags) =>
  flags.every(flag =>
    process.argv.includes(/^-{1,2}/.test(flag) ? flag : '--' + flag)
  );
```

> 调用方式:

```js
// node myScript.js -s --test --cool=true
hasFlags('-s'); // true
hasFlags('--test', 'cool=true', '-s'); // true
hasFlags('special'); // false
```

> 应用场景

<div class="code-editor" data-url="codes/node/demo/hasFlags.js" data-language="javascript"></div>

在当前文件路径下打开终端，执行命令:

```shell
node hasFlags.js -s --test --cool=true
```
