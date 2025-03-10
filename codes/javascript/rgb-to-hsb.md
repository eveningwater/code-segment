| 标题                                 | 标签                              |
| ------------------------------------ | --------------------------------- |
| RGBToHSB(将 RGB 颜色转换成 HSB 颜色) | math,intermediate(数学，两者之间) |

将一个`RGB`颜色转换成`HSB`颜色模式。

- 使用[RGB 颜色转换成 HSB 的转换公式](https://en.wikipedia.org/wiki/HSL_and_HSV#From_RGB)来转换为合适的颜色模式
- 所有的输入参数范围为`[0, 255]`
- 输出结果的值的范围是`H:[0, 360], S:[0, 100], B:[0, 100]`

> 代码如下:

```js
const RGBToHSB = (r, g, b) => {
  r /= 255;
  g /= 255;
  b /= 255;
  const v = Math.max(r, g, b);
  const n = v - Math.min(r, g, b);
  const h =
    n && v === r ? (g - b) / n : v === g ? 2 + (b - r) / n : 4 + (r - g) / n;
  // h,s = n / v,b = v
  return [60 * (h < 0 ? h + 6 : h), v && (n / v) * 100, v * 100];
};
```

ts代码如下:

<div class="code-editor" data-url="codes/javascript/ts/rgb-to-hsb.ts" data-language="typescript"></div>

> 注:`v`值的公式如下图:

![v值](../../images/6.svg)

---

> 注:`n`值的公式如下图:

![n值](../../images/7.svg)

![n值](../../images/8.svg)

---

> 注:`h`值的公式如下图:

![h值](../../images/9.svg)

---

> 注:`v`值的公式如下图:

![v值](../../images/10.svg)

> 调用方式:

```js
RGBToHSB(252, 111, 48);
// [18.529411764705856, 80.95238095238095, 98.82352941176471]
```

> 应用场景

以下是基于上述代码实现的<a href="codes/javascript/html/rgb-to-hsb.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/rgb-to-hsb.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/rgb-to-hsb.html"></iframe>
