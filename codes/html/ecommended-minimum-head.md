| 标题                                      | 标签                      |
| ----------------------------------------- | ------------------------- |
| ecommendedMinimumHead(推荐的最小化html头) | metadata,head(元数据，头) |

HTML 文档的一个重要部分是 `<head>` 元素，它包含有关文档的元数据。一些重要信息（例如文档的标题和字符编码）存储在 `<head>` 元素中。你还可以在其中包含指向外部资源（例如 CSS 样式表和 JavaScript 文件）的链接。

通常，这种元数据的复杂性会随着时间的推移而增加。但是，有一些重要的事情绝不能忽略。以下是你应该在 `<head>` 元素中包含的最低限度信息列表：

```html
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>页面标题</title>
  <meta name="description" content="页面描述信息，不超过155个字符">
</head>
```

* charset 元标记告诉浏览器在呈现文档时使用什么字符编码。
* viewport 元标记告诉浏览器如何在移动设备上呈现页面。
* 搜索引擎使用 title 元素在搜索结果中显示页面的标题。
* 搜索引擎使用 description 元标记在搜索结果中显示页面的简短描述。