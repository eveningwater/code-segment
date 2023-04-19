| 标题                                      | 标签                   |
| ----------------------------------------- | ---------------------- |
| sortedIndexBy(根据回调函数查找排序索引值) | array,math(数组，数学) |

根据提供的迭代器函数，找到应将值插入数组以保持其排序顺序的最低索引。

- 松散地检查数组是否按降序排序。
- 根据迭代器函数 fn，使用 Array.prototype.findIndex() 找到应插入元素的适当索引。

```js
const sortedIndexBy = (arr, n, fn) => {
  const isDescending = fn(arr[0]) > fn(arr[arr.length - 1]);
  const val = fn(n);
  const index = arr.findIndex(el => (isDescending ? val >= el : val <= el));
  return index === -1 ? arr.length : index;
};
```

> 调用方式:

```js
sortedIndexBy([{ x: 4 }, { x: 5 }], { x: 4 }, o => o.x); // 0
```

> 应用场景
