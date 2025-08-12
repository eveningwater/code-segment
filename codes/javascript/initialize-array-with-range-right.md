| 标题                                                    | 标签        |
| ------------------------------------------------------- | ----------- |
| initializeArrayWithRangeRight(生成连续范围数组（降序）) | array(数组) |

初始化一个数组，其中包含指定范围内的数字（反向），其中 start 和 end 包含它们的共同差步长。

- 使用 Array.from() 创建所需长度的数组，(end - start + 1) / step。
- 使用 Array.prototype.map() 用给定范围内的所需值填充数组。
- 省略第二个参数 start 以使用默认值 0。
- 省略最后一个参数 step 以使用默认值 1。

```js
const initializeArrayWithRangeRight = (end, start = 0, step = 1) =>
  Array.from({ length: Math.ceil((end - start + 1) / step) }).map(
    (v, i, arr) => (arr.length - i - 1) * step + start
  );
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/initialize-array-with-range-right.ts" data-language="typescript"></div>

> 调用方式:

```js
initializeArrayWithRangeRight(5); // [5, 4, 3, 2, 1, 0]
initializeArrayWithRangeRight(7, 3); // [7, 6, 5, 4, 3]
initializeArrayWithRangeRight(9, 0, 2); // [8, 6, 4, 2, 0]
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/initialize-array-with-range-right.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/initialize-array-with-range-right.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/initialize-array-with-range-right.html"></iframe>
