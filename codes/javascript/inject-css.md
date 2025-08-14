| 标题                | 标签                            |
| ------------------- | ------------------------------- |
| injectCSS(注入样式) | browser,css(浏览器，层叠样式表) |

将给定的 CSS 代码注入当前文档

- 使用 Document.createElement() 创建一个新的样式元素并将其类型设置为 text/css。
- 使用 Element.innerText 将值设置为给定的 CSS 字符串。
- 使用 Document.head 和 Element.appendChild() 将新元素附加到文档头部。
- 返回新创建的样式元素。

```js
const injectCSS = css => {
  const style = document.createElement('style');
  style.innerText = css;
  style.type = 'text/css';
  document.head.appendChild(style);
  return style;
};
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/inject-css.ts" data-language="typescript"></div>

> 调用方式:

```js
injectCSS('body { background-color: #000 }');
// '<style type="text/css">body { background-color: #000 }</style>'
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/inject-css.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/inject-css.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/inject-css.html"></iframe>
