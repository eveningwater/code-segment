| 标题                                | 标签        |
| ----------------------------------- | ----------- |
| initializeArrayWithValues(生成数组) | array(数组) |

用指定的值初始化并填充数组。

- 使用 Array.from() 创建所需长度的数组，使用 Array.prototype.fill() 填充所需值。
- 省略最后一个参数 val，以使用默认值 0。

```js
const initializeArrayWithValues = (n, val = 0) =>
  Array.from({ length: n }).fill(val);
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/initialize-array-with-values.ts" data-language="typescript"></div>

> 调用方式:

```js
initializeArrayWithValues(5, 2); // [2, 2, 2, 2, 2]
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/initialize-array-with-values.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/initialize-array-with-values.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/initialize-array-with-values.html"></iframe>
