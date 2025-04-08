| 标题                             | 标签        |
| -------------------------------- | ----------- |
| differenceBy(计算数组之间的差集) | array(数组) |

在将提供的函数应用于两个数组的每个数组元素后，返回两个数组之间的差集。

- 通过将 handler 应用于 b 中的每个元素来创建一个 Set。
- 使用 Array.prototype.map() 将 handler 应用于 a 中的每个元素。
- 将 Array.prototype.filter() 与 a 上的 handler 结合使用，使用 Set.prototype.has() 仅保留 b 中不包含的值。

> 代码如下:

```js
const differenceBy = (a, b, handler) => {
  const s = new Set(b.map(handler));
  return a.map(handler).filter(x => !s.has(x));
};
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/difference-by.ts" data-language="typescript"></div>

> 调用方式:

```js
differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [1]
differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], v => v.x); // [2]
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/difference-by.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/difference-by.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/difference-by.html"></iframe>
