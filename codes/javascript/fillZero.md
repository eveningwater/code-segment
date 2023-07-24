| 标题                | 标签           |
| ------------------- | -------------- |
| fillZero(补 0 函数) | string(字符串) |

补 0 函数。

- 在字符串的前面补一个 0，然后使用 String.prototype.slice 方法截取字符串。

> 特别说明: `string.slice(-2)`可以理解为从字符串末端开始截取长度为 2 的子字符串，例如`'010'.slice(-2)`结果为'01'。

> 代码如下:

```js
const fillZero = v => `0${v}`.slice(-2);
```

> 调用方式:

```js
fillZero('1'); // 01
fillZero('11'); // 11
```

> 应用场景

fillZero.html 如下:

<div class="code-editor" data-url="codes/javascript/html/fillZero.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/fillZero.html"></iframe>
