| 标题                      | 标签        |
| ------------------------- | ----------- |
| includesAll(包含所有数字) | array(数组) |

检查值中的所有元素是否都包含在 arr 中。

- 使用 Array.prototype.every() 和 Array.prototype.includes() 检查值的所有元素是否都包含在 arr 中。

```js
const includesAll = (arr, values) => values.every(v => arr.includes(v));
```

> 调用方式:

```js
includesAll([1, 2, 3, 4], [1, 4]); // true
includesAll([1, 2, 3, 4], [1, 5]); // false
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/includesAll.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/includesAll.html"></iframe>
