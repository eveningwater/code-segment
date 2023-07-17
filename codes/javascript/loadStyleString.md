| 标题                      | 标签                       |
| ------------------------- | -------------------------- |
| loadStyleString(加载样式) | document,style(文档，样式) |

加载样式文件。

- 使用[Document.createElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)创建一个 style 元素,并设置 type 属性。
- 使用[Document.createTextNode](https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode)创建样式文本内容。
- 使用 try...catch 包裹设置 style 的内容，如果通过 appendChild 方法添加样式代码出错，则直接设置 style 元素的 styleSheet.cssText 属性为样式代码内容。
- 获取 head 元素，并使用 appendChild 方法将 style 元素添加到 head 元素中。

> 代码如下:

```js
const loadStyleString = code => {
  const style = document.createElement('style');
  style.type = 'text/css';
  try {
    style.appendChild(document.createTextNode(code));
  } catch (ex) {
    style.styleSheet.cssText = code;
  }
  const head = document.getElementsByTagName('head')[0];
  head.appendChild(style);
};
```

> 调用方式:

```js
// 假设页面当中存在类似<div class="test"></div>元素
loadStyleString('.test{ color:#2396ef;}'); // 页面字体元素将会是#2396ef;
```

> 应用场景

loadStyleString.html 如下:

<div class="code-editor" data-url="codes/javascript/html/loadStyleString.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/loadStyleString.html"></iframe>
