|  标题   | 标签  |
|  ----  | ----  |
| atob(解码) | node,string,beginner(node.js，字符串，初始的) |

解码已使用`base-64编码`编码的数据字符串。

* 使用`base-64编码`为给定的字符串创建一个`Buffer`，并使用`Buffer.toString('binary')`返回解码后的字符串。

> 代码如下:

```js
    const atob = str => Buffer.from(str,'base64').toString('binary');
```

> 调用方式:

```js
    atob('Zm9vYmFy'); // 'foobar'
```

> 应用场景