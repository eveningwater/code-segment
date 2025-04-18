| 标题                     | 标签        |
| ------------------------ | ----------- |
| dropRightWhile(截取数组) | array(数组) |

从数组末尾删除元素，直到传递的函数返回 true。 返回数组中剩余的元素。

- 遍历数组，使用 `Array.prototype.slice()` 删除数组的最后一个元素，直到 handler 返回的值为真。
- 返回剩余的元素。

> 代码如下:

```js
const dropRightWhile = (arr, handler) => {
  let rightIndex = arr.length;
  while (rightIndex-- && !handler(arr[rightIndex]));
  return arr.slice(0, rightIndex);
};
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/drop-right-while.ts" data-language="typescript"></div>

> 调用方式:

```js
dropRightWhile([1, 2, 3, 4], (n) => n < 3); // [1, 2]
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/drop-right-while.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/drop-right-while.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/drop-right-while.html"></iframe>
