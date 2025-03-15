| 标题                               | 标签                                                        |
| ---------------------------------- | ----------------------------------------------------------- |
| dateRangeGenerator(日期范围生成器) | date,function,generator,advanced(日期,函数，生成器，高级的) |

创建一个生成器，它使用给定的步骤生成给定范围内的所有日期。

- 使用 `while` 循环从头到尾进行迭代，使用 `yield` 返回范围内的每个日期，使用 `Date` 构造函数。
- 在返回每个后续值后，使用 `Date.prototype.getDate()` 和 `Date.prototype.setDate()` 逐步递增。
- 省略第三个参数 `step` 以使用默认值 `1`。

> 代码如下:

```js
const dateRangeGenerator = function* (start, end, step = 1) {
  let d = start;
  while (d <= end) {
    yield new Date(d);
    d.setDate(d.getDate() + step);
  }
};
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/date-range-generator.ts" data-language="typescript"></div>

> 调用方式:

```js
[...dateRangeGenerator(new Date('2021-06-01'), new Date('2021-06-04'))];
// [ 2021-06-01, 2021-06-02, 2021-06-03,2021-06-04 ]
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/date-range-generator.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/date-range-generator.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/date-range-generator.html"></iframe>
