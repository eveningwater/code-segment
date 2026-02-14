| 标题                             | 标签                      |
| -------------------------------- | ------------------------- |
| randomHexColorCode(随机生成颜色) | math,random(数学，随机数) |

生成一个随机的十六进制颜色代码。

- 使用 Math.random() 生成一个随机的 24 位（6 \* 4 位）十六进制数。
- 使用位移位，然后使用 Number.prototype.toString() 将其转换为十六进制字符串。

```js
const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};
```

<div class="code-editor" data-url="codes/javascript/ts/random-hex-color-code.ts" data-language="typescript"></div>


> 调用方式:

```js
randomHexColorCode(); // '#e34155'
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/random-hex-color-code.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/random-hex-color-code.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/random-hex-color-code.html"></iframe>