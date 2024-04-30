| 标题                        | 标签                                                        |
| --------------------------- | ----------------------------------------------------------- |
| copyToClipboard(复制剪贴板) | browser,string,event,advanced(浏览器，字符串，事件，高级的) |

将字符串复制到剪贴板。仅作为用户操作的结果起作用（即在单击事件侦听器内）。

- 创建一个新的 `<textarea>` 元素，用提供的数据填充它并将其添加到 `HTML` 文档中。
- 使用 `Selection.getRangeAt()` 存储所选范围（如果有）。
- 使用 `Document.execCommand()` 复制到剪贴板。
- 从 `HTML` 文档中删除 `<textarea>` 元素。
- 最后，使用 `Selection.addRange()` 恢复原始选定范围（如果有）。
- 注意：你可以在大多数当前浏览器中使用[异步剪贴板 API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API)。 你可以在 [copyToClipboardAsync 代码段](https://github.com/eveningwater/code-segment/blob/main/codes/javascript/copyToClipboardAsync.md)中找到有关它的更多信息。

> 代码如下:

```js
const copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.position = '-9999px';
  document.body.appendChild(el);
  const selected =
    document.getSelection().rangeCount > 0
      ? document.getSelection().getRangeAt(0)
      : false;
  el.select();
  document.execCommand();
  document.body.removeChild(el);
  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
};
```

> 调用方式:

```js
copyToClipboard('Lorem ipsum'); // 'Lorem ipsum' copied to clipboard.
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/copyToClipboard.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/copyToClipboard.html"></iframe>
