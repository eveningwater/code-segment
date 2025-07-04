| 标题                            | 标签            |
| ------------------------------- | --------------- |
| getSelectedText(获取选中的文本) | browser(浏览器) |

获取当前选定的文本。

- 使用 Window.getSelection() 和 Selection.toString() 获取当前选定的文本。

```js
const getSelectedText = () => window.getSelection().toString();
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/get-selected-text.ts" data-language="typescript"></div>

> 调用方式:

```js
getSelectedText(); //选中的文本
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/get-selected-text.html" target="_blank" rel="noopener noreferrer">示例</a>:


<div class="code-editor" data-url="codes/javascript/html/get-selected-text.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/get-selected-text.html"></iframe>
