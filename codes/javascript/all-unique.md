| 标题                            | 标签                         |
| ------------------------------- | ---------------------------- |
| allUnique(检查数组元素是否唯一) | array,beginner(数组，初学者) |

检查数组中所有元素是否是唯一。

- 将数组传入`new Set()`以创建一个`Set`数据类型达到保留唯一值出现在该数据类型中。
- 使用`Array.prototype.length`和`Set.prototype.size`将唯一值的长度与原始数组进行比较。

> 代码如下:

```js
const allUnique = arr => arr.length === new Set(arr).size;
```

ts代码如下:

<div class="code-editor" data-url="codes/javascript/ts/all-unique.ts" data-language="typescript"></div>

> 调用方式:

```js
allUnique([1, 2, 3, 4]); // true
allUnique([1, 1, 2, 3]); // false
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/all-unique.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/all-unique.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/all-unique.html"></iframe>
