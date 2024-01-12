| 标题                                   | 标签       |
| -------------------------------------- | ---------- |
| computedYearDays(计算一年过去了多少天) | math(数学) |

计算一年过去了多少天。

- 判断年是否是闰年(即是 4 的倍数但不是 100 的倍数或者是 400 的倍数)。
- 默认计算非闰年每一月的天数。
- 回调接收三个参数——值、键和对象。

```js
const computedYearDays = (year, month, day) => {
  // 非闰年每个月天数
  const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const isLeapYear = y => (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
  let days = day;
  for (let i = 0; i < month - 1; i++) {
    days += monthDays[i];
  }
  // 判断是否是闰年，如果是闰年则天数要多加1
  if (isLeapYear(year) && month > 2) {
    days++;
  }
  return days;
};
```

> 调用方式:

```js
computedYearDays(2022, 6, 13); //164
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/computedYearDays.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/computedYearDays.html"></iframe>
