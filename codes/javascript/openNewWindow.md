| 标题                     | 标签           |
| ------------------------ | -------------- |
| openNewWindow(打开新窗口) | link,window(链接,窗口) |

打开一个新窗口。

- 使用[Document.creatElement](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/createElement)创建一个超链接元素，并赋值打开的url和相关属性。
- 将超链接添加到dom中并自动触发点击事件，触发完成之后再从dom中移除超链接。


```js
const openNewWindow = (url, linkOption = {
    target: '_blank',
    rel: 'noopener noreferrer'
}) => {
    const link = document.createElement('a');
    link.href = url;
    if (typeof linkOption === 'object' && linkOption && Object.keys(linkOption).length > 0) {
        Object.keys(linkOption).forEach(key => {
            link[key] = linkOption[key];
        });
    }
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
```

ts代码如下:

<div class="code-editor" data-url="codes/javascript/ts/openNewWindow.ts" data-language="typescript"></div>

> 调用方式:

```js
openNewWindow('https://www.eveningwater.com');
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/openNewWindow.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/openNewWindow.html"></iframe>
