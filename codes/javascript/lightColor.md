| 标题                            | 标签                      |
| ------------------------------- | ------------------------- |
| lightColor(16 进制颜色高亮函数) | color,function(颜色,函数) |

实现一个 16 进制颜色高亮函数。

- 将 16 进制颜色拆分成 3 个区间段。
- 每个区间段使用 parseInt 方法转成 16 进制数乘以 x(默认是 1.6)倍，然后使用 Math.round 方法四舍五入值。
- 判断值是否在 16 ~ 255 之间，然后取最大值和最小值，利用 toString 方法转成字符串。
- 使用 # 将 3 个区间段的色值拼接起来。

> 代码如下:

```js
const lightColor = (color, n = 1.6) => {
  const everyLightColor = subColor => {
    const value = Math.round(parseInt(subColor, 16) * n);
    return Math.min(255, Math.max(value, 16)).toString(16);
  };
  const resColor = [
    color.slice(1, 3),
    color.slice(3, 5),
    color.slice(5, 7)
  ].reduce((res, item) => (res += everyLightColor(item)), '');
  return `#${resColor}`;
};
```

> 调用方式:

```js
lightColor('#2396ef'); // #38f0ff
```

> 应用场景

lightColor.html 如下:

<div class="code-editor" data-url="codes/javascript/html/lightColor.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/lightColor.html"></iframe>
