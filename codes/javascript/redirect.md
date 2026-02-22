| 标题             | 标签            |
| ---------------- | --------------- |
| redirect(重定向) | browser(浏览器) |

重定向到指定的 URL。

- 使用 Window.location.href 或 Window.location.replace() 重定向到 url。
- 传递第二个参数来模拟链接点击（true - 默认）或 HTTP 重定向（false）。

```js
const redirect = (url, asLink = true) =>
  asLink ? (window.location.href = url) : window.location.replace(url);
```

<div class="code-editor" data-url="codes/javascript/ts/redirect.ts" data-language="typescript"></div>

> 调用方式:

```js
redirect('https://google.com');
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/redirect.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/redirect.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/redirect.html"></iframe>