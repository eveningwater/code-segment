| 标题                           | 标签       |
| ------------------------------ | ---------- |
| openAllLinksInNewTab(在新选项卡中打开 HTML 文档中的所有链接) | link(链接) |

`<base>` 元素是使用较少的 HTML 元素之一。此元素的目的是为文档中的所有相对 URL 指定一个基本 URL。这意味着，如果文档中有一堆链接，则可以使用 `<base>` 元素指定所有这些链接都应具有基本 href 或 target 属性，或两者兼有。

利用此元素，我们可以将 target 属性设置为 _blank，以使文档中的所有链接在新选项卡中打开。只需在 HTML 文档的 `<head>` 中添加一行即可。

```html
<!DOCTYPE html>
<html>
  <head>
    <base target="_blank">
  </head>
  <body>
    <a href="https://www.eveningwater.com">夕水的个人网页</a>
    <a href="https://www.eveningwater.com/docs/">夕水的文档</a>
  </body>
</html>
```

> 警告: 在新标签页中打开链接存在一些安全风险。请务必阅读有关保护 target="_blank" 链接的[提示]()，了解如何保护用户免受恶意网站的侵害。

> 使用示例

<div class="code-editor" data-url="codes/html/html/open-all-links-in-new-tab.html" data-language="html"></div>

结果如下:

<iframe src="codes/html/html/open-all-links-in-new-tab.html"></iframe>