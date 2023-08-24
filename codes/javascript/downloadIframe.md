| 标题                                 | 标签                            |
| ------------------------------------ | ------------------------------- |
| downloadIframe(监听 iframe 下载完成) | iframe,download(内联框架，下载) |

通过定时器轮询监听`readyState`的状态，如果值是`complete`或者`interactive`说明文件下载完成。

- 使用定时器以及递归，传入一个文件下载路径`path`。
- 如果不传入第二个参数，则使用默认的`1s`作为轮询时间。
- 第三个参数作为当下载成功之后的回调函数。

> 代码如下:

```js
const downloadIframe = (path, resolve, time = 1000) => {
  let iframe = document.createElement('iframe');
  iframe.src = path;
  iframe.style.display = 'none';
  document.body.appendChild(iframe);
  let timer = null;
  let handler = function () {
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    if (['complete', 'interactive'].indexOf(iframeDoc.readyState) > -1) {
      document.body.removeAttribute(iframe);
      if (timer) clearTimeout(timer);
      resolve('success');
    } else {
      timer = setTimeout(handler, time);
      resolve('downloading');
    }
  };
  handler();
};
```

> 调用方式:

```js
downloadIframe('XXX.txt', status => {
  if (status === 'success') {
    //下载完成之后的操作
  }
});
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/downloadIframe.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/downloadIframe.html"></iframe>
