| 标题                             | 标签                      |
| -------------------------------- | ------------------------- |
| downloadByAnchor(超链接实现下载) | link,download(链接，下载) |

超链接实现下载。

- 使用[Document.createElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)创建一个 a 元素,并设置 download 属性，将 style.display 设置为 none。
- 判断如果传入的参数是一个字符串，则直接赋值给 a 元素的 href，否则使用 JSON.stringify 方法将参数转成字符串，然后传递给[new Blob](https://developer.mozilla.org/zh-CN/docs/Web/API/Blob/Blob) 方法的参数以创建一个 blob，最后传递给[URL.createObjectURL](https://developer.mozilla.org/zh-CN/docs/Web/API/URL/createObjectURL_static)方法的参数以创建一个 url 文件。
- 往 body 中添加 a 元素，并执行 click 事件，执行完毕后移除该元素。

> 代码如下:

```js
const downloadByAnchor = (urlOrData, fileName) => {
  const a = document.createElement('a');
  a.style.display = 'none';
  a.href =
    typeof urlOrData === 'string'
      ? urlOrData
      : URL.createObjectURL(new Blob([JSON.stringify(urlOrData)]));
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};
```

> 调用方式:

```js
downloadByAnchor({ a: 1, b: 1 }, 'test.json');
downloadByAnchor('./test.html', 'test.html');
```

> 应用场景

downloadByAnchor.html 如下:

<div class="code-editor" data-url="codes/javascript/html/downloadByAnchor.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/downloadByAnchor.html"></iframe>
