| 标题                           | 标签       |
| ------------------------------ | ---------- |
| targetBlank(打开新标签页) | link,security(链接，安全) |

通常，当从我们的网站链接到外部资源时，我们使用 target="_blank" 在新选项卡或窗口中打开链接页面。但我们应该注意安全风险。新选项卡通过 Window.opener 获得对链接页面（即我们的网站）的有限访问权限，然后可以使用它通过 window.opener.location 更改链接页面的 URL（这称为 tabnabbing）。

如果外部资源不可信、可能已被黑客入侵、域名多年来已更换所有者等，这可能会成为问题。无论第三方资源多么可信，都无法保证其确实值得信赖，以确保用户的安全，作为开发人员，我们应该始终意识到这种风险。

```html
<!-- 缺点：容易受到欺骗 -->
<a href="xxx" target="_blank">
  链接网站
</a>

<!-- 优点：新标签页不会造成问题 -->
<a
  href="xxx"
  target="_blank"
  rel="noopener noreferrer"
>
  链接网站
</a>
```

为了防止在新标签中打开的链接引起任何问题，我们应该始终向所有 target="_blank" 链接添加 `rel="noopener noreferrer"` 属性。

> ps: 如果是使用在js中，还可以使用[打开新标签页代码段](codes/javascript/openNewWindow.md)来完成该功能。

> 使用示例

<div class="code-editor" data-url="codes/html/html/target-blank.html" data-language="html"></div>

结果如下:

<iframe src="codes/html/html/target-blank.html"></iframe>