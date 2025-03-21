| 标题                                                       | 标签                            |
| ---------------------------------------------------------- | ------------------------------- |
| altVsTitle(alt与title属性的区别) | image(图片) |

如[这篇文章](codes/html/image-alt.md)所述，如果用户无法查看图像，则 alt 属性会提供图像的替代信息。当无法加载图像时，浏览器将在其位置显示 alt 文本，以便用户了解包含该图像的原因。

另一方面，title 属性提供有关图像的附加信息。当用户将鼠标悬停在图像上时，此信息将为图片提供提示。

> 代码如下所示:

```html
<img src="image.jpg" alt="替代文本" title="其他信息">
```

总体而言，应为所有 `<img>` 元素指定 alt 属性，因为它对于可访问性和 SEO 都很重要。另一方面，title 属性是可选的，仅应在需要提供有关图像的其他信息时使用。

> 使用示例

<div class="code-editor" data-url="codes/html/html/alt-vs-title.html" data-language="html"></div>

结果如下:

<iframe src="codes/html/html/alt-vs-title.html"></iframe>

