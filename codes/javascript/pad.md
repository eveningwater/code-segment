|  标题   | 标签  |
|  ----  | ----  |
| pad(为字符串两边填充字符) | string(字符串) |

如果字符串短于指定长度，则用指定字符在其两侧填充字符串。

* 使用 String.prototype.padStart() 和 String.prototype.padEnd() 填充给定字符串的两边。
* 省略第三个参数 char，以使用空白字符作为默认填充字符。

```js
const pad = (str,length,char = ' ') => str.padStart((str.length + length) / 2,char).padEnd(length,char);
```

> 调用方式:

```js
pad('cat', 8); // '  cat   '
pad(String(42), 6, '0'); // '004200'
pad('foobar', 3); // 'foobar'
```

> 应用场景
