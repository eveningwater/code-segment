| 标题                                               | 标签        |
| -------------------------------------------------- | ----------- |
| findLast(查找提供的函数为其返回真值的最后一个元素) | array(数组) |

查找提供的函数为其返回真值的最后一个元素。

- 使用 `Array.prototype.filter()` 删除 `handler` 返回错误值的元素。
- 使用 `Array.prototype.pop()` 获取过滤后的数组中的最后一个元素。

> 代码如下:

```js
const findLast = (arr, handler) => arr.filter(handler).pop();
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/find-last.ts" data-language="typescript"></div>

> 调用方式:

```js
findLast([1, 2, 3, 4], (n) => n % 2 === 1); // 3
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/find-last.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/find-last.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/find-last.html"></iframe>
