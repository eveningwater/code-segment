| 标题                                     | 标签        |
| ---------------------------------------- | ----------- |
| intersectionBy(求数组交集(根据回调函数)) | array(数组) |

在将提供的函数应用于两者的每个数组元素后，返回两个数组中存在的元素。

- 通过将 handler 应用于 b 中的所有元素来创建一个 Set。
- 在 a 上使用 Array.prototype.filter() 只保留元素，当 handler 应用于它们时，这些元素会产生包含在 b 中的值。

```js
const intersectionBy = (a, b, handler) => {
  const s = new Set(b.map(handler));
  return [...new Set(a)].filter(x => s.has(handler(x)));
};
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/intersection-by.ts" data-language="typescript"></div>

> 调用方式:

```js
intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [2.1]
intersectionBy(
  [{ title: 'Apple' }, { title: 'Orange' }],
  [{ title: 'Orange' }, { title: 'Melon' }],
  x => x.title
); // [{ title: 'Orange' }]
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/intersection-by.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/intersection-by.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/intersection-by.html"></iframe>
