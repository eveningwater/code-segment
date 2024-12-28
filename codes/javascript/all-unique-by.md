| 标题                                                  | 标签                         |
| ----------------------------------------------------- | ---------------------------- |
| allUniqueBy(根据提供的回调函数来检查数组元素是否唯一) | array,beginner(数组，初学者) |

根据提供的回调函数来检查数组元素是否唯一。

- 使用`Array.prototype.map()`来让数组中的每一个元素调用提供的回调函数`fn`。
- 将数组传入`new Set()`以创建一个`Set`数据类型达到保留唯一值出现在该数据类型中。
- 使用`Array.prototype.length`和`Set.prototype.size`将唯一值的长度与原始数组进行比较。

> 代码如下:

```js
const allUniqueBy = (arr, fn) => arr.length === new Set(arr.map(fn)).size;
```

ts代码如下:

<div class="code-editor" data-url="codes/javascript/ts/all-unique-by.ts" data-language="typescript"></div>

> 调用方式:

```js
allUniqueBy([1.2, 2.4, 2.9], Math.round); // true
allUniqueBy([1.2, 2.3, 2.4], Math.round); // false
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/all-unique-by.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/all-unique-by.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/all-unique-by.html"></iframe>
