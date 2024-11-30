| 标题                                  | 标签                              |
| ------------------------------------- | --------------------------------- |
| HSLToRGB(HSL 颜色模式转 RGB 颜色模式) | math,intermediate(数学，两者之间) |

将`HSL`颜色模式转成`RGB`颜色模式。

- 使用[HSL 到 RGB 的转换公式](https://en.wikipedia.org/wiki/HSL_and_HSV#HSL_to_RGB)可以转换为合适的颜色模式
- 输入参数的范围为`H:[0,360]`，`S:[0,100]`，`B:[0,100]`
- 输出值的范围为`[0,255]`

> 代码如下:

```js
const HSLToRGB = (h, s, l) => {
  s /= 100;
  l /= 100;
  const k = (n) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n) => l - a * Math.max(-1, Math.min(k(n) - 3, 9 - k(n), 1));
  return [255 * f(0), 255 * f(8), 255 * f(4)];
};
```

ts代码如下:

<div class="code-editor" data-url="codes/javascript/ts/hsl-to-rgb.ts" data-language="typescript"></div>

> 注:`k`值的公式如下图:

![k值](../../images/3.svg)

---

> 注:`a`值的公式如下图:

![a值](../../images/4.svg)

---

> 注:`f`值的公式如下图:

![f值](../../images/5.svg)

> 调用方式:

```js
HSLToRGB(13, 100, 11); // [56.1, 12.155, 0]
```

> 应用场景

以下是基于上述代码实现的<a href="codes/javascript/html/hsl-to-rgb.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/hsl-to-rgb.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/hsl-to-rgb.html"></iframe>
