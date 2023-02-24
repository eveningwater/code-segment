| 标题                             | 标签                      |
| -------------------------------- | ------------------------- |
| randomHexColorCode(随机生成颜色) | math,random(数学，随机数) |

生成一个随机的十六进制颜色代码。

- 使用 Math.random() 生成一个随机的 24 位（6 \* 4 位）十六进制数。
- 使用位移位，然后使用 Number.prototype.toString() 将其转换为十六进制字符串。

```js
const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};
```

> 调用方式:

```js
randomHexColorCode(); // '#e34155'
```

> 应用场景
