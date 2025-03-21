| 标题                        | 标签                                                          |
| --------------------------- | ------------------------------------------------------------- |
| copyToClipboardAsync(复制剪贴板) | browser,string,promise,advanced(浏览器，字符串，异步，高级的) |

将字符串复制到剪贴板，返回一个在剪贴板内容更新时解析的 promise。

- 检查剪贴板 API 是否可用。 使用 if 语句确保 `Navigator、Navigator.clipboard` 和 `Navigator.clipboard.writeText` 为真。
- 使用 `Clipboard.writeText()` 将给定值 `str` 写入剪贴板。
- 返回 `Clipboard.writeText()` 的结果，这是一个 promise，当剪贴板的内容更新时解决。
- 如果剪贴板 API 不可用，请使用 `Promise.reject()` 通过适当的消息拒绝。
- 注意：如果你需要支持旧版浏览器，你可能需要使用 `Document.execCommand()` 代替。 你可以在[copyToClipboard 片段](./copy-to-clipboard)中找到更多相关信息。

> 代码如下:

```js
const copyToClipboardAsync = str => {
  if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
    return navigator.clipboard.writeText(str);
  }
  return Promise.reject('The Clipboard API is not available.');
};
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/copy-to-clipboard-async.ts" data-language="typescript"></div>

> 调用方式:

```js
copyToClipboardAsync('Lorem ipsum'); // 'Lorem ipsum' copied to clipboard.
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/copy-to-clipboard-async.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/copy-to-clipboard-async.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/copy-to-clipboard-async.html"></iframe>
