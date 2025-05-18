| 标题                            | 标签                    |
| ------------------------------- | ----------------------- |
| findLastN(字符串数组转换为对象) | array,object(数组,对象) |

将字符串数组转换为对象映射为真。

- 使用 `Array.prototype.reduce()` 将数组转换为对象，其中每个数组值都用作值设置为 `true` 的键。

> 代码如下:

```js
const flags = arr => arr.reduce((acc, item) => ({ ...acc, [item]: true }), {});
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/flags.ts" data-language="typescript"></div>

> 调用方式:

```js
flags(['red', 'green']); // { red: true, green: true }
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/flags.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/flags.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/flags.html"></iframe>
