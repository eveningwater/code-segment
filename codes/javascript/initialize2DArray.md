| 标题                                      | 标签        |
| ----------------------------------------- | ----------- |
| initialize2DArray(初始化给定值的二维数组) | array(数组) |

初始化给定宽度和高度和值的二维数组。

- 使用 Array.from() 和 Array.prototype.map() 生成 h 行，其中每行是一个大小为 w 的新数组。
- 使用 Array.prototype.fill() 初始化所有值为 val 的项目。
- 省略最后一个参数 val，以使用默认值 null。

```js
const initialize2DArray = (w, h, val = null) =>
  Array.from({ length: h }).map(() => Array.from({ length: w }).fill(val));
```

> 调用方式:

```js
initialize2DArray(2, 2, 0); // [[0, 0], [0, 0]]
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/initialize2DArray.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/initialize2DArray.html"></iframe>
