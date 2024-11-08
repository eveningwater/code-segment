| 标题                   | 标签                                         |
| ---------------------- | -------------------------------------------- |
| binarySearch(二分查询) | algorithm,array,beginner(算法，数组，初学者) |

使用二分搜索算法在排序数组中查找给定元素的索引。

- 声明左右搜索边界`l`和`r`，分别初始化为`0`和数组的长度。
- 使用 `while` 循环反复缩小搜索子数组的范围，使用 `Math.floor()` 将其切成两半。
- 如果找到则返回元素的索引，否则返回`-1`。
- 注意：不考虑数组中的重复值。

> 代码如下:

```js
const binarySearch = (arr, item) => {
  let l = 0,
    r = arr.length - 1;
  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    if (arr[m] === item) {
      return m;
    } else if (arr[m] > item) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }
  return -1;
};
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/binarySearch.ts" data-language="typescript"></div>

> 调用方式:

```js
binarySearch([1, 2, 3, 4, 5], 1); // 0
binarySearch([1, 2, 3, 4, 5], 5); // 4
binarySearch([1, 2, 3, 4, 5], 6); // -1
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/binarySearch.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/binarySearch.html"></iframe>
