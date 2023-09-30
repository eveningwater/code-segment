| 标题                     | 标签                                                          |
| ------------------------ | ------------------------------------------------------------- |
| chunkify(可迭代对象分块) | function,generator,array,advanced(函数，生成器，数组，高级的) |

将可迭代对象分块为指定大小的较小数组。

- 在给定的可迭代对象上使用 `for...of` 循环，使用 `Array.prototype.push()` 将每个新值添加到当前块。
- 使用 `Array.prototype.length` 检查当前块是否具有所需的大小，如果是则产生值。
- 最后，使用 `Array.prototype.length` 检查最终块，如果它不为空，则生成它。

> 代码如下:

```js
const chunkify = function* (itr, size) {
  const chunk = [];
  for (const item of itr) {
    chunk.push(item);
    if (chunk.length === size) {
      yield chunk;
      chunk = [];
    }
  }
  if (chunk.length) {
    yield chunk;
  }
};
```

> 调用方式:

```js
const x = new Set([1, 2, 1, 3, 4, 1, 2, 5]);
[...chunkify(x, 2)]; // [[1, 2], [3, 4], [5]]
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/chunkify.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/chunkify.html"></iframe>
