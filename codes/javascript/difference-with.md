| 标题                                                           | 标签        |
| -------------------------------------------------------------- | ----------- |
| differenceWith(计算数组的差集（通过指定不为 true 的比较函数）) | array(数组) |

从数组中过滤出比较器函数不返回 true 的所有值。

- 使用 Array.prototype.filter() 和 Array.prototype.findIndex() 找到合适的值。
- 省略最后一个参数 handler，以使用默认的严格相等比较器。

> 代码如下:

```js
const differenceWith = (a, b, handler = (a, b) => a === b) =>
  a.filter(v1 => b.findIndex(v2 => handler(v1, v2)) === -1);
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/difference-with.ts" data-language="typescript"></div>

> 调用方式:

```js
differenceWith(
  [1, 1.2, 1.5, 3, 0],
  [1.9, 3, 0],
  (a, b) => Math.round(a) === Math.round(b)
); // [1, 1.2]
differenceWith([1, 1.2, 1.3], [1, 1.3, 1.5]); // [1.2]
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/difference-with.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/difference-with.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/difference-with.html"></iframe>
