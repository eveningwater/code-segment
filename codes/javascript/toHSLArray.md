| 标题                           | 标签                             |
| ------------------------------ | -------------------------------- |
| toHSLArray(颜色字符串转成数组) | string,regexp(字符串,正则表达式) |

将 hsl() 颜色字符串转换为值数组。

- 使用 String.prototype.match() 获取一个包含 3 个字符串和数值的数组。
- 将 Array.prototype.map() 与 Number 结合使用，将它们转换为数值数组。

```js
const toHSLArray = s => (s.match(/\d+/g) || []).map(Number);
```

> 调用方式:

```js
toHSLArray('hsl(50, 10%, 10%)'); // [50, 10, 10]
```

> 应用场景
