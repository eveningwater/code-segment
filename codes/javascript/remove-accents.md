| 标题                              | 标签           |
| --------------------------------- | -------------- |
| removeAccents(从字符串中删除重音) | string(字符串) |

从字符串中删除重音。

- 使用 String.prototype.normalize() 将字符串转换为规范化的 Unicode 格式。
- 使用 String.prototype.replace() 将给定 Unicode 范围内的变音符号替换为空字符串。

```js
const removeAccents = str =>
  str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
```

<div class="code-editor" data-url="codes/javascript/ts/remove-accents.ts" data-language="typescript"></div>

> 调用方式:

```js
removeAccents('Antoine de Saint-Exupéry'); // 'Antoine de Saint-Exupery'
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/remove-accents.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/remove-accents.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/remove-accents.html"></iframe>