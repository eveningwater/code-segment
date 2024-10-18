| 标题                                                       | 标签                            |
| ---------------------------------------------------------- | ------------------------------- |
| headLinks(头部链接) | link(链接) |

HTML 文档的 `<head>` 元素可用于包含指向外部资源（例如 CSS 样式表和 JavaScript 文件）的链接。但是，某些 `<link>` 元素对于 SEO 和元数据目的而言非常重要。以下是包含的一些非常重要的元素的列表：

```html
<head>
  <link rel="canonical" href="https://xxx.com/index.html">
  <link rel="sitemap" type="application/xml" href="https://xxx.com/sitemap.xml">
  <link rel="alternate" type="application/rss+xml" title="RSS" href="https://xxx.com/rss.xml">
  <link rel="search" type="application/opensearchdescription+xml" title="Search" href="https://xxx.com/search.xml">
</head>
```

* canonical: 规范链接元素告诉搜索引擎哪个 URL 是页面的规范版本。这有助于防止重复内容问题并确保索引正确的页面。
* sitemap: 站点地图链接元素告诉搜索引擎在哪里可以找到网站的站点地图。站点地图是 XML 文件，其中包含网站上所有页面及其元数据的列表。搜索引擎使用它们来索引网站并将其显示在搜索结果中。
* alternate: 备用链接元素告诉搜索引擎在哪里可以找到网站的 RSS 提要。RSS 提要是 XML 文件，其中包含网站上最新帖子的列表。搜索引擎使用它们在搜索结果中显示网站内容，RSS 阅读器也使用它们以更方便的格式显示网站内容。
* search: 浏览器使用搜索链接元素在浏览器的地址栏中显示搜索框。这允许用户直接从地址栏搜索网站，而不必导航到搜索页面。