| 标题                             | 标签        |
| -------------------------------- | ----------- |
| indexOfAll(查找所有匹配的数组项) | array(数组) |

在数组中查找 val 的所有索引。 如果 val 从未出现，则返回一个空数组。

- 使用 Array.prototype.reduce() 循环遍历元素并存储匹配元素的索引。

```js
const indexOfAll = (arr, val) =>
  arr.reduce((acc, item, i) => (item === val ? [...acc, i] : acc), []);
```

> 调用方式:

```js
indexOfAll([1, 2, 3, 1, 2, 3], 1); // [0, 3]
indexOfAll([1, 2, 3], 4); // []
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/indexOfAll.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/indexOfAll.html"></iframe>
