| 标题                                  | 标签                              |
| ------------------------------------- | --------------------------------- |
| HSBToRGB(HSB 颜色模式转 RGB 颜色模式) | math,intermediate(数学，两者之间) |

将`HSB`颜色模式转成`RGB`颜色模式。

- 使用[HSB 到 RGB 的转换公式](https://en.wikipedia.org/wiki/HSL_and_HSV#HSV_to_RGB)可以转换为合适的颜色模式
- 输入参数的范围为`H:[0,360]`，`S:[0,100]`，`B:[0,100]`
- 输出值的范围为`[0,255]`

> 代码如下:

```js
const HSBToRGB = (h, s, b) => {
  s /= 100;
  b /= 100;
  const k = (i) => (i + h / 60) % 6;
  const f = (n) => b * (1 - s * Math.max(0, Math.min(k(n), 4 - k(n), 1)));
  return [255 * f(5), 255 * f(3), 255 * f(1)];
};
```

ts代码如下:

<div class="code-editor" data-url="codes/javascript/ts/HSBToRGB.ts" data-language="typescript"></div>

> 注:`k`值的公式如下图:

![k值](../../images/1.svg)

---

> 注:`f`值的公式如下图:

![f值](../../images/2.svg)

> 图中的`v`指的就是函数里的`b`。

> 调用方式:

```js
HSBToRGB(18, 81, 99); // [252.45, 109.31084999999996, 47.965499999999984]
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/HSBToRGB.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/HSBToRGB.html"></iframe>
