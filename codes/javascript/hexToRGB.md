| 标题                               | 标签                     |
| ---------------------------------- | ------------------------ |
| hexToRGB(HEX 颜色转换成 RGBA 颜色) | string,math(字符串,数学) |

如果提供了 alpha 值，则将颜色代码转换为 rgb() 或 rgba() 字符串。

- 使用按位右移运算符和带有 & (and) 运算符的掩码位将十六进制颜色代码（带或不带 # 前缀）转换为具有 RGB 值的字符串。
- 如果是 3 位色码，请先转换为 6 位版本。
- 如果 alpha 值与 6 位十六进制一起提供，则返回 rgba() 字符串。

```js
const hexToRGB = hex => {
  let alpha = false,
    h = hex.slice(hex.startsWith('#') ? 1 : 0);

  if (h.length === 3) {
    h = [...h].map(x => x.repeat(2)).join('');
  } else if (h.length === 8) {
    alpha = true;
  }

  h = parseInt(h, 16);

  const letterA = alpha ? 'a' : '';
  // r,g,b,a
  const r = h >>> (alpha ? 24 : 16);
  const g = (h & (alpha ? 0x00ff0000 : 0x00ff00)) >>> (alpha ? 16 : 8);
  const b = (h & (alpha ? 0x0000ff00 : 0x0000ff)) >>> (alpha ? 8 : 0);
  const a = alpha ? `,${h & 0x000000ff}` : '';

  return `rgb${letterA}(${r},${g},${b}${a})`;
};
```

> 调用方式:

```js
hexToRGB('#27ae60ff'); // 'rgba(39, 174, 96, 255)'
hexToRGB('27ae60'); // 'rgb(39, 174, 96)'
hexToRGB('#fff'); // 'rgb(255, 255, 255)'
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/hexToRGB.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/hexToRGB.html"></iframe>
