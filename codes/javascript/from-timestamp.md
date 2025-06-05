| 标题                        | 标签       |
| --------------------------- | ---------- |
| fromTimestamp(时间戳转日期) | date(日期) |

从 Unix 时间戳创建一个 Date 对象。

- 通过乘以 1000 将时间戳转换为毫秒。
- 使用 Date 构造函数创建一个新的 Date 对象。

```js
const fromTimestamp = timestamp => new Date(timestamp * 1000);
```

> 调用方式:

```js
fromTimestamp(1602162242); // 2020-10-08T13:04:02.000Z
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/from-timestamp.ts" data-language="typescript"></div>

> 应用场景

以下是一个实战<a href="codes/javascript/html/from-timestamp.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/from-timestamp.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/from-timestamp.html"></iframe>
