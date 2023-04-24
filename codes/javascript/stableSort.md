| 标题                 | 标签           |
| -------------------- | -------------- |
| stableSort(稳定排序) | function(函数) |

执行数组的稳定排序，当项的值相同时保留项的初始索引。

- 使用 Array.prototype.map() 将输入数组的每个元素与其相应的索引配对。
- 使用 Array.prototype.sort() 和比较函数对列表进行排序，如果比较的项目相等，则保留它们的初始顺序。
- 使用 Array.prototype.map() 转换回初始数组项。
- 不改变原始数组，而是返回一个新数组。

```js
const stableSort = (arr, compare) =>
  arr
    .map((item, index) => ({ item, index }))
    .sort((a, b) => compare(a.item, b.item) || a.index - b.index)
    .map(({ item }) => item);
```

> 调用方式:

```js
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const stable = stableSort(arr, () => 0); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

> 应用场景
