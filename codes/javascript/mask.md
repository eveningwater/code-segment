|  标题   | 标签  |
|  ----  | ----  |
| mask(遮盖一些字符) | string(字符串) |

用指定的掩码字符替换除最后几个字符之外的所有字符。

* 使用 String.prototype.slice() 获取将保持未屏蔽的字符部分。
* 使用 String.prototype.padStart() 将字符串的开头填充到原始长度的掩码字符。
* 如果 num 为负数，则未屏蔽的字符将位于字符串的开头。
* 省略第二个参数 num，以保留 4 个未屏蔽的默认字符。
* 省略第三个参数 mask，以使用默认字符“*”作为掩码。

```js
const mask = (cc,num = 4,mask = "*") => `${cc}`.slice(-num).padStart(`${cc}`.length,mask);
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/mask.ts" data-language="typescript"></div>

> 调用方式:

```js
mask(1234567890); // '******7890'
mask(1234567890, 3); // '*******890'
mask(1234567890, -4, '$'); // '$$$$567890'
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/mask.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/mask.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/mask.html"></iframe>