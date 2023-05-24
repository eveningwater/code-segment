| 标题                            | 标签                             |
| ------------------------------- | -------------------------------- |
| toHSLObject(颜色字符串转成对象) | string,regexp(字符串,正则表达式) |

将 hsl() 颜色字符串转换为具有每种颜色值的对象。

- 使用 String.prototype.match() 获取一个包含 3 个字符串和数值的数组。
- 将 Array.prototype.map() 与 Number 结合使用，将它们转换为数值数组。
- 使用数组解构将值存储到命名变量中，并从中创建适当的对象。

```js
const toHSLArray = s => {
  const [hue, saturation, lightness] = (s.match(/\d+/g) || []).map(Number);
  return { hue, saturation, lightness };
};
```

> 调用方式:

```js
toHSLObject('hsl(50, 10%, 10%)'); // { hue: 50, saturation: 10, lightness: 10 }
```

> 应用场景
