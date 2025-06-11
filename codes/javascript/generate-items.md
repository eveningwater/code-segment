| 标题                                              | 标签                      |
| ------------------------------------------------- | ------------------------- |
| generateItems(使用给定函数生成给定数量元素的数组) | array,function(数组,函数) |

使用给定函数生成具有给定数量项目的数组。

- 使用 Array.from() 创建一个特定长度的空数组，使用每个新创建元素的索引调用 handler。
- 回调接受一个参数 - 每个元素的索引。

```js
const generateItems = (n, handler) =>
  Array.from({ length: n }, (_, i) => handler(i));
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/gcd.ts" data-language="typescript"></div>

> 调用方式:

```js
generateItems(10, Math.random);
// [0.21, 0.08, 0.40, 0.96, 0.96, 0.24, 0.19, 0.96, 0.42, 0.70]
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/generate-items.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/generate-items.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/generate-items.html"></iframe>
