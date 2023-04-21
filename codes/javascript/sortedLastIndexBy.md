| 标题                                                  | 标签        |
| ----------------------------------------------------- | ----------- |
| sortedLastIndexBy(根据回调函数查找排序最后插入索引值) | array(数组) |

根据提供的迭代器函数，查找应将值插入数组以维护其排序顺序的最高索引。

- 松散地检查数组是否按降序排序。
- 使用 Array.prototype.map() 将迭代器函数应用于数组的所有元素。
- 根据提供的迭代器函数，使用 Array.prototype.reverse() 和 Array.prototype.findIndex() 找到应插入元素的适当的最后一个索引。

```js
const sortedLastIndexBy = (arr, n, fn) => {
  const isDescending = fn(arr[0]) > fn(arr[arr.length - 1]);
  const val = fn(n);
  const index = arr
    .map(fn)
    .reverse()
    .findIndex(el => (isDescending ? val <= el : val >= el));
  return index === -1 ? 0 : arr.length - index;
};
```

> 调用方式:

```js
sortedLastIndexBy([{ x: 4 }, { x: 5 }], { x: 4 }, o => o.x); // 1
```

> 应用场景
