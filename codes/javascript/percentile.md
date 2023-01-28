|  标题   | 标签  |
|  ----  | ----  |
| percentile(计算百分比) | math(数学) |

计算给定数组中小于或等于给定值的数字的百分比。

* 使用 Array.prototype.reduce() 来计算有多少数字低于该值以及有多少数字是相同的值并应用百分位数公式。

```js
const percentile = (arr,val) => 100 * arr.reduce((acc,v) => acc + (v < val ? 1 : 0) + (v === val ? 0.5 : 0),0) / arr.length;
```

> 调用方式:

```js
percentile([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6); // 55
```

> 应用场景