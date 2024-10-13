| 标题                           | 标签       |
| ------------------------------ | ---------- |
| prefetchingResources(预先请求资源) | resources,prefrech(资源，预先请求) |

资源预先请求是一种很好的技术，可以提高你网站上的感知页面速度并提供更好的用户体验，而无需付出太多努力。预先请求在浏览器空闲时立即发生，这意味着它不会减慢初始加载速度，而是利用空闲时间来获取和缓存以后可能有用的资源。

要预先请求资源，你可以在文档的 `<head>` 或 `<body>` 内添加带有 `rel="prefetch"` 属性的 `<link>` 标签：

```html
<link rel="prefetch" href="xxxx">
```

这样做的目的是提示浏览器我们将需要此资源，因此它应该在空闲时下载并存储在缓存中。请记住，预先请求更多的是提示浏览器，而不是其他任何东西，因此在某些情况下浏览器可能会忽略它（由于其他浏览器下载、用户设置、连接问题等）。

预先请求资源可以增加经常请求的页面或资源的感知加载时间，同时还可以为 webfonts 等资源提供重大性能优势，因为它们将在浏览器下载、解析和设置 DOM 样式后下载。目前，资源预先请求仅支持 http:// 和 https:// 链接，但同源限制不适用于资源预先请求，因此你可以根据需要下载外部资源。

同样，你可以使用 rel="preload" 属性预加载资源，这不是提示，而是浏览器必须遵循的指示：

```html
<link rel="preload" href="xxx">
```

与预先请求相比，预加载资源的唯一缺点是，[浏览器支持](https://caniuse.com/#search=preload)程度可能较低。

> 使用示例

<div class="code-editor" data-url="codes/html/html/prefetching-resources.html" data-language="html"></div>

结果如下:

<iframe src="codes/html/html/prefetching-resources.html"></iframe>