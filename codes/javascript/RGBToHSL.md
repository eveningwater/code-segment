| 标题                                 | 标签                              |
| ------------------------------------ | --------------------------------- |
| RGBToHSL(将 RGB 颜色转换成 HSL 颜色) | math,intermediate(数学，两者之间) |

将一个`RGB`颜色转换成`HSL`颜色模式。

- 使用[RGB 颜色转换成 HSL 的转换公式](https://www.niwa.nu/2013/05/math-behind-colorspace-conversions-rgb-hsl/)来转换为合适的颜色模式
- 所有的输入参数范围为`[0, 255]`
- 输出结果的值的范围是`H:[0, 360], S:[0, 100], B:[0, 100]`

> 代码如下:

```js
const RGBToHSL = (r, g, b) => {
  r /= 255;
  g /= 255;
  b /= 255;

  const l = Math.max(r, g, b);
  const s = l - Math.min(r, g, b);
  const h = s
    ? l === r
      ? (g - b) / s
      : l === g
      ? 2 + (b - r) / s
      : 4 + (r - g) / s
    : 0;
  return [
    60 * h < 0 ? 60 * h + 360 : 60 * h,
    100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0),
    (100 * (2 * l - s)) / 2
  ];
};
```

ts代码如下:

<div class="code-editor" data-url="codes/javascript/ts/RGBToHSL.ts" data-language="typescript"></div>

> 注:涉及的转换公式以及步骤如下所示:

- 步骤 1：把 RGB 值转成【0，1】中数值。
- 步骤 2：找出 R,G 和 B 中的最大值。
- 步骤 3：计算亮度：`L=(maxColor + minColor)/2`
- 步骤 4：如果最大和最小的颜色值相同，即表示灰色，那么 S 定义为 0，而 H 未定义并在程序中通常写成 0。
- 步骤 5：否则，根据亮度 L 计算饱和度 S：
  `    If L<0.5, S=(maxColor-minColor)/(maxColor + minColor)
    If L>=0.5, S=(maxColor-minColor)/(2.0-maxColor-minColor)`
- 步骤 6:计算色调 H：
  `    If R=maxColor, H=(G-B)/(maxColor-minColor)
    If G=maxColor, H=2.0+(B-R)/(maxColor-minColor)
    If B=maxColor, H=4.0+(R-G)/(maxColor-minColor)`
  `H = H * 60.0`,如果`H`为负值，则加`360`。

> 说明：

1. 由步骤 3 的式子可以看出亮度仅与图像的最多颜色成分和最少的颜色成分的总量有关。亮度越小，图像越趋于黑色。亮度越高图像越趋于明亮的白色。
2. 由步骤 5 的式子可以看出饱和度与图像的最多颜色成分和最少的颜色成分的差量有关。饱和度越小，图像越趋于灰度图像。饱和度越大，图像越鲜艳，给人的感觉是彩色的，而不是黑白灰的图像。
3. 色调觉得了人对图像的不同的颜色感受。
4. 从第 6 步的计算看，H 分成 0 ～ 6 区域。RGB 颜,色空间是一个立方体而 HSL 颜色空间是两个六角形锥体，其中的 L 是 RGB 立方体的主对角线。因此，RGB 立方体的顶点：红、黄、绿、青、蓝和品红就成为 HSL 六角形的顶点，而数值 0 ～ 6 就告诉我们 H 在哪个部分。

> 调用方式:

```js
RGBToHSL(45, 23, 11); // [21.17647, 60.71428, 10.98039]
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/RGBToHSL.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/RGBToHSL.html"></iframe>
