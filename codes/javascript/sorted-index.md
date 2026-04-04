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

<div class="code-editor" data-url="codes/javascript/ts/sorted-index.ts" data-language="typescript"></div>

> 调用方式:

```js
sortedIndex([5, 3, 2, 1], 4); // 1
sortedIndex([30, 50], 40); // 1
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/sorted-index.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/sorted-index.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/sorted-index.html"></iframe>