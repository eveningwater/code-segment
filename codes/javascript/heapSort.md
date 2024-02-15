| 标题                 | 标签                                        |
| -------------------- | ------------------------------------------- |
| heapSort(堆排序算法) | algorithm,array,recursion(算法，数组，递归) |

使用堆排序算法对数字数组进行排序。

- 使用递归。
- 使用扩展运算符 (...) 克隆原始数组 arr。
- 使用闭包来声明一个变量 l 和一个函数 heapify。
- 使用 for 循环和 Math.floor() 结合 heapify 从数组创建一个最大堆。
- 使用 for 循环重复缩小考虑的范围，根据需要使用 heapify 和交换值，以便对克隆的数组进行排序。

```js
const heapSort = arr => {
  const copyArr = [...arr];
  let l = copyArr.length;
  // 创建一个最大堆
  const heapify = (data, i) => {
    const left = 2 * i + 1,
      right = 2 * i + 2;

    let max = i;
    // 计算最大堆
    if (left < l && data[left] > data[max]) {
      max = left;
    }
    if (right < l && data[right] > data[max]) {
      max = right;
    }

    if (max !== i) {
      // 数组结构交换元素
      [data[max], data[i]] = [data[i], data[max]];
      // 递归
      heapify(data, max);
    }
  };

  for (let i = Math.floor(l / 2); i >= 0; i--) {
    heapify(copyArr, i);
  }
  // 重复缩小范围
  for (let i = copyArr.length - 1; i >= 0; i--) {
    [copyArr[0], copyArr[i]] = [copyArr[i], copyArr[0]];
    l--;
    heapify(copyArr, 0);
  }
  return copyArr;
};
```

> 调用方式:

```js
heapSort([6, 3, 4, 1]); // [1, 3, 4, 6]
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/heapSort.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/heapSort.html"></iframe>
