| 标题            | 标签                               |
| --------------- | ---------------------------------- |
| chunk(数组分块) | array,intermediate(数组，两者之间) |

将一个数组分成 n 个较小的数组。

- 使用 `Math.ceil()` 和 `Array.prototype.length` 获取每个块的大小。
- 使用 `Array.from()` 创建一个大小为 `n` 的新数组。
- 使用 `Array.prototype.slice()` 将新数组的每个元素映射到长度为 `size` 的块。
- 如果原始数组不能被平均分割，最终的块将包含剩余的元素。

> 代码如下:

```js
const chunkIntoN = (arr, n) => {
  const size = Math.ceil(arr.length / n);
  return Array.from({ length: n }, (v, i) =>
    arr.slice(size * i, size * i + size)
  );
};
```

> 调用方式:

```js
chunkIntoN([1, 2, 3, 4, 5, 6, 7], 4); // [[1, 2], [3, 4], [5, 6], [7]]
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/chunkIntoN.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/chunkIntoN.html"></iframe>
