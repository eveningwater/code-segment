| 标题                            | 标签                    |
| ------------------------------- | ----------------------- |
| frequencies(计算元素出现的次数) | array,object(数组,对象) |

创建一个对象，其中数组的唯一值作为键，它们的频率作为值。

- 使用 `Array.prototype.reduce()` 将唯一值映射到对象的键，每次遇到相同值时添加到现有键。

```js
const frequencies = arr =>
  arr.reduce((a, v) => ((a[v] = a[v] ? a[v] + 1 : 1), a), {});
```

> 调用方式:

```js
frequencies(['a', 'b', 'a', 'c', 'a', 'a', 'b']); // { a: 4, b: 2, c: 1 }
frequencies([...'ball']); // { b: 1, a: 1, l: 2 }
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/frequencies.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/frequencies.html"></iframe>
