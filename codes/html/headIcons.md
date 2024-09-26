| 标题                                                       | 标签                            |
| ---------------------------------------------------------- | ------------------------------- |
| headIcons(头部图标) | icon(图标) |

多年来，我看到了许多关于网站图标和哪些标签必不可少的不同且经常相互冲突的指导原则。如今，我认为你可以使用一组非常少的元标签，并根据需要随时调整它们。以下是我建议的你应该在 `<head>`元素中包含的最低限度：

> 代码如下所示:

```html
<head>
  <link rel="icon" sizes="192x192" href="favicon.png">
  <link rel="apple-touch-icon" href="favicon.png">
  <link rel="mask-icon" href="favicon.svg" color="#000000">
</head>
```

通过创建单个 192x192 PNG 资源，你可以轻松覆盖几乎所有现代设备和浏览器。如果你想更进一步，可以很容易地添加更多资源。只需缩小图像并添加更多具有不同尺寸属性的 `rel="icon"` 元标记即可。

> 使用示例

<div class="code-editor" data-url="codes/html/html/head-icons.html" data-language="html"></div>

结果如下:

<iframe src="codes/html/html/head-icons.html"></iframe>

