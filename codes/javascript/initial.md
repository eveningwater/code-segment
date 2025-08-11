| 标题                                          | 标签        |
| --------------------------------------------- | ----------- |
| initial(截取除了最后一个元素的所有元素的数组) | array(数组) |

返回数组中除最后一个元素之外的所有元素。

- 使用 Array.prototype.slice() 返回数组中除最后一个元素之外的所有元素。

```js
const initial = arr => arr.slice(0, -1);
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/initial.ts" data-language="typescript"></div>

> 调用方式:

```js
initial([1, 2, 3]); // [1, 2]
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/initial.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/initial.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/initial.html"></iframe>
