|  标题   | 标签  |
|  ----  | ----  |
| isISOString(是否是合格的日期字符串) | date(日期) |

检查给定字符串在简化扩展 ISO 格式 (ISO 8601) 中是否有效。

* 使用 Date 构造函数从给定的字符串创建一个 Date 对象。
* 使用 Date.prototype.valueOf() 和 Number.isNaN() 检查生成的日期对象是否有效。
* 使用 Date.prototype.toISOString() 将日期的 ISO 格式字符串表示与原始字符串进行比较。

```js
const isISOString = val => {
    const d = new Date(val);
    return !Number.isNaN(d.valueOf() && d.toISOString() === val);
}
```

> 调用方式:

```js
isISOString('2020-10-12T10:10:10.000Z'); // true
isISOString('2020-10-12'); // false
```

> 应用场景
