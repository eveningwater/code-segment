| 标题                        | 标签       |
| --------------------------- | ---------- |
| minMaxValue(最大最小值限定) | math(数学) |

最大最小值限定。

- 使用 Math.min 和 Math.max 在最小值与最大值之间做取舍。

```js
const minMaxValue = (value, min = -Infinity, max = Infinity) =>
  Math.max(min, Math.min(value, max));
```

> 调用方式:

```js
const arr = [1, 2, 3, 4];
const currentValue = 3;
const currentIndex = arr.indexOf(currentValue);
minMaxValue(currentIndex, 0, arr.length - 1); // 2
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/minMaxValue.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/minMaxValue.html"></iframe>
