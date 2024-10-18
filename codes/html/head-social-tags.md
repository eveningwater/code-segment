| 标题                           | 标签       |
| ------------------------------ | ---------- |
| headSocialTags(社交媒体的标签) | head(头部标签) |

社交媒体对于任何内容的成功都起着重要作用。为了确保你的内容在社交媒体上得到正确分享，你应该在 `<head>` 元素中包含一些必要的标签：

```html
<head>
  <meta property="og:title" content="Page Title">
  <meta property="og:description" content="Page description. No longer than 155 characters.">
  <meta property="og:image" content="https://xxxxx.com/image.jpg">
  <meta property="og:site_name" content="xxx">
  <meta property="og:url" content="https://xxxxx.com/page.html">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Page Title">
  <meta name="twitter:description" content="Page description. No longer than 155 characters.">
  <meta name="twitter:image" content="https://xxxxx.com/image.jpg">
  <meta name="twitter:site" content="@xxxxx">
</head>
```

上述代码片段包含 OpenGraph 和 Twitter 标签。Facebook 和其他社交媒体平台使用 OpenGraph 标签来显示页面共享时的预览。同样，Twitter 使用 Twitter 标签来显示相同​​的信息。以下是每个标签的细分：

* og:title 和 twitter:title 元标签用于在预览中显示页面的标题。
* og:description 和 twitter:description 元标签用于在预览中显示页面的简短描述。
* og:image 和 twitter:image 元标签用于在预览中显示图像。
* og:site_name 元标签用于在预览中显示站点的名称。
* og:url 元标签用于在预览中显示页面的 URL。
* twitter:card 元标签用于显示页面共享时的预览。可用值为 summary、summary_large_image、app 和 player。
* twitter:site 元标记用于在预览中显示网站的 Twitter 名称。