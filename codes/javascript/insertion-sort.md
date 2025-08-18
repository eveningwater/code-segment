| 标题                    | 标签                        |
| ----------------------- | --------------------------- |
| insertionSort(插入排序) | algorithm,array(算法，数组) |

使用插入排序算法对数字数组进行排序。

- 使用 Array.prototype.reduce() 遍历给定数组中的所有元素。
- 如果累加器的长度为 0，则将当前元素添加到其中。
- 使用 Array.prototype.some() 迭代累加器中的结果，直到找到正确的位置。
- 使用 Array.prototype.splice() 将当前元素插入累加器。

```js
const insertionSort = arr =>
  arr.reduce((res, i) => {
    if (!res.length) {
      return [i];
    }
    res.some((j, index) => {
      if (i <= j) {
        res.splice(index, 0, i);
        return true;
      }
      if (i >= j && index === res.length - 1) {
        res.splice(index + 1, 0, i);
        return true;
      }
      return false;
    });
    return res;
  }, []);
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/insertion-sort.ts" data-language="typescript"></div>

> 调用方式:

```js
insertionSort([6, 3, 4, 1]); // [1, 3, 4, 6]
```

插入排序算法另一种实现可以参考[这里](https://github.com/eveningwater/my-web-projects/blob/master/utils/insertSort.js)，也可以通过这里的实现来理清插入排序算法的实现原理。

> 应用场景

以下是一个实战<a href="codes/javascript/html/insertion-sort.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/insertion-sort.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/insertion-sort.html"></iframe>
