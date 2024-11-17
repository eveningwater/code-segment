| 标题                 | 标签                            |
| -------------------- | ------------------------------- |
| byteSize(字节的大小) | string,beginner(字符串，初学者) |

以字节为单位返回字符串的长度。

- 将给定的字符串转换为 [Blob 对象](https://developer.mozilla.org/en-US/docs/Web/API/Blob)。
- 使用 `Blob.size` 获取字符串的长度（以字节为单位）。

> 代码如下:

```js
const byteSize = str => new Blob([str]).size;
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/byteSize.ts" data-language="typescript"></div>

> 调用方式:

```js
byteSize('😀'); // 4
byteSize('Hello World'); // 11
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/byteSize.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/byteSize.html"></iframe>
