| 标题           | 标签        |
| -------------- | ----------- |
| drop(截取数组) | array(数组) |

创建一个新数组，其中从左侧删除了 `n` 个元素。

- 使用 `Array.prototype.slice()` 从左侧移除指定数量的元素。
- 省略最后一个参数 `n`，以使用默认值 `1`。

> 代码如下:

```js
const drop = (arr, n = 1) => arr.slice(n);
```

> 调用方式:

```js
drop([1, 2, 3]); // [2, 3]
drop([1, 2, 3], 2); // [3]
drop([1, 2, 3], 42); // []
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/drop.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/drop.html"></iframe>
