| 标题                      | 标签                                                                     |
| ------------------------- | ------------------------------------------------------------------------ |
| changeLightness(改变亮度) | string,browser,regexp,intermediate(字符串，浏览器，正则表达式，两者之间) |

更改 hsl() 颜色字符串的亮度值。

- 使用 `String.prototype.match()` 获取一个包含 3 个字符串的数组，其中包含数值。
- 结合使用 `Array.prototype.map()` 和 `Number` 将它们转换为数值数组。
- 使用 `Math.max()` 和 `Math.min()` 确保亮度在有效范围内（0 到 100 之间）。
- 使用模板文字创建具有更新值的新 `hsl()` 字符串。

> 代码如下:

```js
const changeLightness = (delta, hsl) => {
  const [hue, saturation, lightness] = hsl.match(/\d+/g).map(Number);
  const newLightness = Math.max(
    0,
    Math.min(100, lightness + parseFloat(delta))
  );
  return `hsl(${hue},${saturation}%,${newLightness}%)`;
};
```

> ps: js代码不严谨，详见如下ts版本代码。

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/change-lightness.ts" data-language="typescript"></div>

> 调用方式:

```js
changeLightness(10, 'hsl(330, 50%, 50%)'); // 'hsl(330, 50%, 60%)'
changeLightness(-10, 'hsl(330, 50%, 50%)'); // 'hsl(330, 50%, 40%)'
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/change-lightness.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/change-lightness.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/change-lightness.html"></iframe>
