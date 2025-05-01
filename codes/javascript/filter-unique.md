| 标题                         | 标签        |
| ---------------------------- | ----------- |
| filterUnique(获取数组的交集) | array(数组) |

创建一个过滤掉唯一值的数组。

- 使用 `Set` 构造函数和展开运算符 (`...`) 在 `arr` 中创建唯一值数组。
- 使用 `Array.prototype.filter()` 创建一个仅包含非唯一值的数组。

> 代码如下:

```js
const filterUnique = (arr) =>
  [...new Set(arr)].filter((i) => arr.indexOf(i) !== arr.lastIndexOf(i));
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/filter-unique.ts" data-language="typescript"></div>

> 调用方式:

```js
filterUnique([1, 2, 2, 3, 4, 4, 5]); // [2, 4]
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/filter-unique.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/filter-unique.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/filter-unique.html"></iframe>
