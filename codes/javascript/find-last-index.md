| 标题                                                          | 标签        |
| ------------------------------------------------------------- | ----------- |
| findLastIndex(查找提供的函数为其返回真值的最后一个元素的索引) | array(数组) |

查找提供的函数为其返回真值的最后一个元素的索引。

- 使用 `Array.prototype.map()` 将每个元素映射到具有其索引和值的数组。
- 使用 `Array.prototype.filter()` 删除 `handler` 返回错误值的元素
- 使用 `Array.prototype.pop()` 获取过滤后的数组中的最后一个元素。
- 如果没有匹配的元素，则返回 `-1`。

> 代码如下:

```js
const findLastIndex = (arr, handler) =>
  (arr
    .map((val, i) => [i, val])
    .filter(([i, val]) => handler(val, i, arr))
    .pop() || [-1])[0];
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/find-last-index.ts" data-language="typescript"></div>

> 调用方式:

```js
findLastIndex([1, 2, 3, 4], (n) => n % 2 === 1); // 2 (index of the value 3)
findLastIndex([1, 2, 3, 4], (n) => n === 5); // -1 (default value when not found)
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/find-last-index.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/find-last-index.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/find-last-index.html"></iframe>
