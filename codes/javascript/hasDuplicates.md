| 标题                                | 标签        |
| ----------------------------------- | ----------- |
| hasDuplicates(检查数组是否有重复项) | array(数组) |

检查平面数组中是否存在重复值。

- 使用 Set 获取数组中的唯一值。
- 使用 Set.prototype.size 和 Array.prototype.length 检查唯一值的计数是否与原始数组中的元素相同。

```js
const hasDuplicates = arr => new Set(arr).size !== arr.length;
```

> 调用方式:

```js
hasDuplicates([0, 1, 1, 2]); // true
hasDuplicates([0, 1, 2, 3]); // false
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/hasDuplicates.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/hasDuplicates.html"></iframe>
