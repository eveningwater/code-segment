|  标题   | 标签  |
|  ----  | ----  |
| padNumber(填充数字) | string,math(字符串，数学) |

将给定数字填充到指定长度。

* 在将数字转换为字符串后，使用 String.prototype.padStart() 将数字填充到指定长度。

```js
const padNumber = (n,l) => `${n}`.padStart(l,'0');
```

<div class="code-editor" data-url="codes/javascript/ts/pad-number.ts" data-language="typescript"></div>

> 调用方式:

```js
padNumber(1234, 6); // '001234'
```

> 应用场景


以下是一个实战<a href="codes/javascript/html/pad-number.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/pad-number.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/pad-number.html"></iframe>