| 标题                            | 标签            |
| ------------------------------- | --------------- |
| getSelectedText(获取选中的文本) | browser(浏览器) |

获取当前选定的文本。

- 使用 Window.getSelection() 和 Selection.toString() 获取当前选定的文本。

```js
const getSelectedText = () => window.getSelection().toString();
```

> 调用方式:

```js
getSelectedText(); //选中的文本
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/getSelectedText.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/getSelectedText.html"></iframe>
