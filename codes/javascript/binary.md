| 标题                   | 标签                                    |
| ---------------------- | --------------------------------------- |
| binary(二个参数的函数) | function,intermediate(函数，两者之间的) |

创建一个最多接受两个参数的函数，忽略任何其他参数。

- 使用给出的前两个参数调用提供的函数 `fn`。

> 代码如下:

```js
const binary = handler => (a, b) => handler(a, b);
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/binary.ts" data-language="typescript"></div>

> 调用方式:

```js
// 此处示例类型不严谨,详情可查看ts代码
['2', '1', '0'].map(binary(Math.max)); // [2, 1, 2]
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/binary.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/binary.html"></iframe>
