|  标题   | 标签  |
|  ----  | ----  |
| maxDate(查找最大日期) | date(日期) |

返回给定日期的最大值。

* 使用带有 Math.max() 的 ES6 传播语法来查找最大日期值。
* 使用 Date 构造函数将其转换为 Date 对象。

```js
const maxDate = (...dates) => new Date(Math.max(...dates));
```

> 调用方式:

```js
const dates = [
  new Date(2017, 4, 13),
  new Date(2018, 2, 12),
  new Date(2016, 0, 10),
  new Date(2016, 0, 9)
];
maxDate(...dates); // 2018-03-11T22:00:00.000Z
```

> 应用场景