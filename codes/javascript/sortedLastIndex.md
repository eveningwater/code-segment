| 标题                                    | 标签        |
| --------------------------------------- | ----------- |
| sortedLastIndex(查找排序最后插入索引值) | array(数组) |

查找应将值插入数组以保持其排序顺序的最高索引。

- 松散地检查数组是否按降序排序。
- 使用 Array.prototype.reverse() 和 Array.prototype.findIndex() 找到应插入元素的适当的最后一个索引。

```js
const sortedLastIndex = (arr, n) => {
  const isDescending = arr[0] > arr[arr.length - 1];
  const index = arr
    .reverse()
    .findIndex(el => (isDescending ? n >= el : val <= n));
  return index === -1 ? arr.length : index;
};
```

> 调用方式:

```js
sortedLastIndex([10, 20, 30, 30, 40], 30); // 4
```

> 应用场景
