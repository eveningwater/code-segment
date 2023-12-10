| 标题                     | 标签           |
| ------------------------ | -------------- |
| extendHex(扩展 hex 颜色) | string(字符串) |

将 3 位颜色代码扩展为 6 位颜色代码。

- 使用 `Array.prototype.map()`、`String.prototype.split()` 和 `Array.prototype.join()` 加入映射数组，以将 3 位 RGB 表示的十六进制颜色代码转换为 6 位形式。
- `Array.prototype.slice()` 用于从字符串开头删除`#`，因为它添加了一次。

> 代码如下:

```js
const extendHex = shortHex =>
  '#' +
  shortHex
    .slice(shortHex.startsWith('#') ? 1 : 0)
    .split('')
    .map(x => x + x)
    .join('');
```

> 调用方式:

```js
extendHex('#03f'); // '#0033ff'
extendHex('05a'); // '#0055aa'
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/extendHex.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/extendHex.html"></iframe>
