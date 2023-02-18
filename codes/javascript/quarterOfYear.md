| 标题                | 标签       |
| ------------------- | ---------- |
| quarterOfYear(季度) | date(日期) |

返回提供的日期所属的季度和年份。

- 使用 Date.prototype.getMonth() 获取范围 (0, 11) 中的当前月份，加 1 将其映射到范围 (1, 12)。
- 使用 Math.ceil() 并将月份除以 3 以获得当前季度。
- 使用 Date.prototype.getFullYear() 从给定日期获取年份。
- 省略参数 date，默认使用当前日期。

```js
const quarterOfYear = (date = new Date()) => [
  Math.ceil((date.getMonth() + 1) / 3),
  date.getFullYear()
];
```

> 调用方式:

```js
quarterOfYear(new Date('07/10/2018')); // [ 3, 2018 ]
quarterOfYear(); // [ 4, 2020 ]
```

> 应用场景
