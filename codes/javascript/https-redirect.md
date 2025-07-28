| 标题                        | 标签            |
| --------------------------- | --------------- |
| httpsRedirect(https 重定向) | browser(浏览器) |

如果页面当前在 HTTP 中，则将页面重定向到 HTTPS。

- 使用 location.protocol 获取当前使用的协议。
- 如果不是 HTTPS，请使用 location.replace() 将现有页面替换为页面的 HTTPS 版本。
- 使用 location.href 获取完整地址，使用 String.prototype.split() 拆分它并删除 URL 的协议部分。
- 请注意，按下后退按钮不会将其返回到 HTTP 页面，因为它已在历史记录中被替换。

```js
const httpsRedirect = () => {
  if (location.protocol !== 'https:') {
    location.replace('https://' + location.href.split('//')[1]);
  }
};
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/https-redirect.ts" data-language="typescript"></div>

> 调用方式:

```js
httpsRedirect();
// If you are on http://mydomain.com, you are redirected to https://mydomain.com
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/https-redirect.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/https-redirect.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/https-redirect.html"></iframe>
