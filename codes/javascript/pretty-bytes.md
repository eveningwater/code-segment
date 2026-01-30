| 标题                      | 标签                      |
| ------------------------- | ------------------------- |
| prettyBytes(格式化字节数) | string,math(字符串，数学) |

将字节数转换为可读的字符串。

- 使用要根据指数访问的单位数组字典。
- 使用 Number.prototype.toPrecision() 将数字截断为特定位数。
- 通过构建它返回美化的字符串，同时考虑提供的选项以及它是否为负数。
- 省略第二个参数 precision，以使用默认的 3 位精度。
- 省略第三个参数 addSpace，默认情况下在数字和单位之间添加空格。

```js
const prettyBytes = (num, precision = 3, addSpace = true) => {
  const UNITS = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  if (Math.abs(num) < 1) return num + (addSpace ? ' ' : '') + UNITS[0];
  const exponent = Math.min(
    Math.floor(Math.log10(num < 0 ? -num : num) / 3),
    UNITS.length - 1
  );
  const n = Number(
    ((num < 0 ? -num : num) / 1000 ** exponent).toPrecision(precision)
  );
  return (num < 0 ? '-' : '') + n + (addSpace ? ' ' : '') + UNITS[exponent];
};
```

<div class="code-editor" data-url="codes/javascript/ts/pretty-bytes.ts" data-language="typescript"></div>

> 调用方式:

```js
prettyBytes(1000); // '1 KB'
prettyBytes(-27145424323.5821, 5); // '-27.145 GB'
prettyBytes(123456789, 3, false); // '123MB'
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/pretty-bytes.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/pretty-bytes.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/pretty-bytes.html"></iframe>