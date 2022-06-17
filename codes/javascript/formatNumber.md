|  标题   | 标签  |
|  ----  | ----  |
| formatNumber(格式化数字) | string,math(字符串,数学) |

使用本地数字格式顺序格式化数字。

* 使用 `Number.prototype.toLocaleString()` 将数字转换为使用本地数字格式分隔符。

```js
const formatNumber = num => num.toLocaleString();
```

> 调用方式:

```js
formatNumber(123456); // '123,456' in `en-US`
formatNumber(15675436903); // '15.675.436.903' in `de-DE`
```

> 应用场景

