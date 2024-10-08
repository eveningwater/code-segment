| 标题                           | 标签       |
| ------------------------------ | ---------- |
| imageAlt(图片alt属性) | image(图片) |

如果用户无法查看图片，则 alt 属性会提供图片的替代信息。这可能是由于连接问题、浏览器限制、HTTP 错误或用户正在使用屏幕阅读器造成的。如果不提供 alt 属性，无法查看图片的用户将获得糟糕的用户体验。

```html
<img src="image.jpg" alt="图片文本替代信息">
```

## 如何撰写不错的的替代信息

应使用 alt 属性来描述图像，以便让无法看到图像的人也能理解。描述必须准确简洁。有些屏幕阅读器会在 125 个字符后截断描述，因此最好将描述写得简短。

让我们看一个例子。假设你想描述一张在海上航行的船的图像。你可以使用以下 alt 属性：

```html
<img src="boat.jpg" alt="一个航行在海上的船">
```

在此示例中，我们尝试像在电话中向某人描述一样描述图像。请注意，我们在描述中没有使用“图片”或“图像”一词。此外，我们没有简单地说“船”，因为这样无法提供足够的上下文。

## 如果图像纯粹是装饰性的怎么办？

如果图像纯粹是装饰性的，那么最好将 alt 属性留空。这将告诉屏幕阅读器跳过该图像。

```html
<img src="decorative.jpg" alt="">
```

请注意，在此示例中，我们仍然包含 alt 属性，但将其留空。这与完全不包含 alt 属性不同。如果不包含 alt 属性，则屏幕阅读器将读取图像的文件名。

> 使用示例

<div class="code-editor" data-url="codes/html/html/image-alt.html" data-language="html"></div>

结果如下:

<iframe src="codes/html/html/image-alt.html"></iframe>