| 标题                        | 标签                                    |
| --------------------------- | --------------------------------------- |
| and(检查两个参数是否都为真) | math,logic,beginner(数学，逻辑，初学者) |

检查两个参数是否都为真。

- 使用逻辑且操作符`&&`在给予的两个值之间进行判断。

> 代码如下:

```js
const and = (a, b) => a && b;
```

ts代码如下:

<div class="code-editor" data-url="codes/javascript/ts/and.ts" data-language="typescript"></div>

> 调用方式:

```js
and(true, true); // true
and(true, false); // false
and(false, false); // false
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/and.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/and.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/and.html"></iframe>
