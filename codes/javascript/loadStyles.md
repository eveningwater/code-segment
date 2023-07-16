| 标题                 | 标签                       |
| -------------------- | -------------------------- |
| loadStyles(加载样式) | document,style(文档，样式) |

加载样式文件。

- 使用[Document.createElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)创建一个 link 元素,并设置 type,rel,以及 href 属性。
- 获取 head 元素，并使用 appendChild 方法将 link 元素添加到 head 元素中。

> 代码如下:

```js
const loadStyles = url => {
  const link = document.createElement('link');
  link.href = url;
  link.rel = 'stylesheet';
  link.type = 'text/css';
  const head = document.getElementsByTagName('head')[0];
  head.appendChild(link);
};
```

> 调用方式:

```js
// 假设有样式文件loadStyles.css,里面内容为.test { color:#2396ef; }
// 假设页面有元素<div class='test'></div>
loadStyles('loadStyles.css'); // 页面字体元素将会是#2396ef;
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/loadStyles.css" data-language="css"></div>
<div class="code-editor" data-url="codes/javascript/html/loadStyles.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/loadStyles.html"></iframe>
