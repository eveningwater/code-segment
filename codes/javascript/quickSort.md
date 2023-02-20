| 标题                    | 标签                                        |
| ----------------------- | ------------------------------------------- |
| quickSort(快速排序算法) | algorithm,array,recursion(算法，数组，递归) |

使用快速排序算法对数字数组进行排序。

- 使用递归。
- 使用扩展运算符 (...) 克隆原始数组 arr。
- 如果数组的长度小于 2，则返回克隆的数组。
- 使用 Math.floor() 计算枢轴元素的索引。
- 使用 Array.prototype.reduce() 和 Array.prototype.push() 将数组拆分为两个子数组。 第一个包含小于或等于 pivot 的元素，第二个包含大于它的元素。 将结果解构为两个数组。
- 在创建的子数组上递归调用 quickSort()。

```js
const quickSort = arr => {
  const a = [...arr];
  if (a.length < 2) return a;
  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = a[pivotIndex];
  const [lo, hi] = a.reduce(
    (acc, val, i) => {
      if (val < pivot || (val === pivot && i != pivotIndex)) {
        acc[0].push(val);
      } else if (val > pivot) {
        acc[1].push(val);
      }
      return acc;
    },
    [[], []]
  );
  return [...quickSort(lo), pivot, ...quickSort(hi)];
};
```

> 调用方式:

```js
quickSort([1, 6, 1, 5, 3, 2, 1, 4]); // [1, 1, 1, 2, 3, 4, 5, 6]
```

> 应用场景
