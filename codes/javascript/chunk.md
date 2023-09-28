| 标题            | 标签                               |
| --------------- | ---------------------------------- |
| chunk(数组分块) | array,intermediate(数组，两者之间) |

将数组分块为指定大小的较小数组。

- 使用 `Array.from()` 创建一个新数组，该数组适合将要生成的块数。
- 使用 `Array.prototype.slice()` 将新数组的每个元素映射到长度为 `size` 的块。
- 如果原始数组不能被平均分割，最终的块将包含剩余的元素。

> 代码如下:

```js
const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );
```

> 调用方式:

```js
chunk([1, 2, 3, 4, 5], 2); // [[1, 2], [3, 4], [5]]
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/chunk.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/chunk.html"></iframe>
