| 标题                       | 标签                                 |
| -------------------------- | ------------------------------------ |
| formatDuration(格式化时间) | date,math,string(日期，数学，字符串) |

返回给定毫秒数的人类可读格式。

- 将 `ms` 除以适当的值以获得适当的日、小时、分钟、秒和毫秒值。
- 使用 `Object.entries()` 和 `Array.prototype.filter()` 只保留非零值。
- 使用 `Array.prototype.map()` 为每个值创建字符串，并适当地复数。
- 使用 `String.prototype.join()` 将值组合成一个字符串。

```js
const formatDuration = ms => {
  if (ms < 0) {
    ms = -ms;
  }
  const time = {
    day: Math.floor(ms / 86400000),
    hour: Math.floor(ms / 3600000) % 24,
    minute: Math.floor(ms / 60000) % 60,
    second: Math.floor(ms / 1000) % 60,
    millisecond: Math.floor(ms) % 1000
  };
  return Object.entries(time)
    .filter(val => val[1] !== 0)
    .map(([k, v]) => `${v} ${k}${v !== 1 ? 's' : ''}`)
    .join(',');
};
```

> 调用方式:

```js
formatDuration(1001); // '1 second, 1 millisecond'
formatDuration(34325055574);
// '397 days, 6 hours, 44 minutes, 15 seconds, 574 milliseconds'
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/formatDuration.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/formatDuration.html"></iframe>
