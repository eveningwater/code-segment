| 标题                     | 标签                                         |
| ------------------------ | -------------------------------------------- |
| bubbleSort(冒泡排序算法) | algorithm,array,beginner(算法，数组，初学者) |

使用冒泡排序算法对数字数组进行排序。

- 声明一个变量，swapped，指示在当前迭代期间是否交换了任何值。
- 使用扩展运算符 (...) 克隆原始数组 arr。
- 使用 for 循环遍历克隆数组的元素，在最后一个元素之前终止。
- 使用嵌套的 for 循环遍历 0 和 i 之间的数组段，交换任何相邻的乱序元素并将 swapped 设置为 true。
- 如果在迭代后 swapped 为 false，则不需要更多更改，因此返回克隆的数组。

> 代码如下:

```js
const bubbleSort = arr => {
  let swapped = false;
  let a = [...arr];
  for (let i = 0; i < a.length; i++) {
    swapped = false;
    for (let j = 0; j < a.length - i; j++) {
      if (a[j + 1] < a[j]) {
        //数组解构的方式
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
        swapped = true;
      }
    }
    if (!swapped) {
      return a;
    }
  }
  return a;
};
```

> 调用方式:

```js
bubbleSort([2, 1, 4, 3]); // [1, 2, 3, 4]
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/bubbleSort.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/bubbleSort.html"></iframe>
