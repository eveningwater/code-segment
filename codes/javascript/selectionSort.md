| 标题                        | 标签                        |
| --------------------------- | --------------------------- |
| selectionSort(选择排序算法) | algorithm,array(算法，数组) |

使用选择排序算法对数字数组进行排序。

- 使用扩展运算符 (...) 克隆原始数组 arr。
- 使用 for 循环遍历数组中的元素。
- 使用 Array.prototype.slice() 和 Array.prototype.reduce() 找到子数组中当前索引右侧的最小元素的索引。 如有必要，执行交换。

```js
const selectionSort = arr => {
  const a = [...arr];
  for (let i = 0; i < a.length; i++) {
    const min = a
      .slice(i + 1)
      .reduce((acc, val, j) => (val < a[acc] ? j + i + 1 : acc), i);
    if (min !== i) [a[i], a[min]] = [a[min], a[i]];
  }
  return a;
};
```

> 调用方式:

```js
selectionSort([5, 1, 4, 2, 3]); // [1, 2, 3, 4, 5]
```

> 应用场景
