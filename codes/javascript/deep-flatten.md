| 标题                        | 标签                        |
| --------------------------- | --------------------------- |
| deepFlatten(深度扁平化数组) | array,recursion(数组，递归) |

深度扁平化数组。

- 使用递归。
- 将 `Array.prototype.concat()` 与空数组 (`[]`) 和展开运算符 (`...`) 一起使用以展平数组。
- 递归地展平作为数组的每个元素。

> 代码如下:

```js
const deepFlatten = arr =>
  [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/deep-flatten.ts" data-language="typescript"></div>

> 调用方式:

```js
deepFlatten([1, [2], [[3], 4], 5]); // [1, 2, 3, 4, 5]
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/deep-flatten.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/deep-flatten.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/deep-flatten.html"></iframe>
