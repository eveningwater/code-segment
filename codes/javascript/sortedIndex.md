| 标题                    | 标签                   |
| ----------------------- | ---------------------- |
| sortedIndex(排序索引值) | array,math(数组，数学) |

查找应将值插入数组以保持其排序顺序的最低索引。

- 松散地检查数组是否按降序排序。
- 使用 Array.prototype.findIndex() 找到应插入元素的适当索引。

```js
const sortedIndex = (arr, n) => {
  const isDescending = arr[0] > arr[arr.length - 1];
  const index = arr.findIndex(el => (isDescending ? n >= el : n <= el));
  return index === -1 ? arr.length : index;
};
```

> 调用方式:

```js
sortedIndex([5, 3, 2, 1], 4); // 1
sortedIndex([30, 50], 40); // 1
```

> 应用场景
