| 标题                            | 标签          |
| ------------------------------- | ------------- |
| requireUncached(加载未缓存模块) | node(node.js) |

从缓存中删除模块后加载模块（如果存在）。

- 使用 delete 从缓存中删除模块（如果存在）。
- 使用 require() 再次加载模块。

```js
const requireUncached = module => {
  delete require.cache(require.resolve(module));
  return require(module);
};
```

> 调用方式:

```js
const fs = requireUncached('fs'); // 'fs' will be loaded fresh every time
```

> 应用场景

<div class="code-editor" data-url="codes/node/demo/requireUncached.js" data-language="javascript" style="min-height:150px;"></div>

在当前文件路径下打开终端，执行命令:

```shell
node requireUncached.js
```