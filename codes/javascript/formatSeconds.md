|  标题   | 标签  |
|  ----  | ----  |
| formatSeconds(格式化秒) | date,math,string(日期，数学，字符串) |

返回给定秒数的 ISO 格式。

* 将 `s` 除以适当的值以获得小时、分钟和秒的适当值。
* 将符号存储在变量中以将其添加到结果中。
* 结合使用 `Array.prototype.map()` 和 `Math.floor()` 和 `String.prototype.padStart()` 对每个段进行字符串化和格式化。
* 使用 `String.prototype.join()` 将值组合成一个字符串。

```js
const formatSeconds = s => {
    const [hour,minute,second,sign] = s > 0 ? [s / 3600,(s / 60) % 60,s % 60,""] : [-s / 3600,(-s / 60) % 60,-s % 60,"-"];
    return sign + [hour,minute,second].map(v => `${Math.floor(v)}`.padStart(2,'0')).join(":");
}
```

> 调用方式:

```js
formatSeconds(200); // '00:03:20'
formatSeconds(-200); // '-00:03:20'
formatSeconds(99999); // '27:46:39'
```

> 应用场景

