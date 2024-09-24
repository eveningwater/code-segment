| 标题                                                       | 标签                            |
| ---------------------------------------------------------- | ------------------------------- |
| customFileDownloadNames(自定义可下载文件的名称) | link(链接) |

HTML5 引入了我们许多人每天都会用到的各种便捷功能。由于我很少使用可下载链接，因此我最近发现，除了触发下载之外，你还可以在 `<a>` 元素上使用下载属性。事实上，你可以向其传递一个字符串值，该字符串值将充当可下载文件的名称，从而有效地允许你自定义其名称：

```html
<!-- 下载的文件名是'测试.pdf' -->
<a href="/test.pdf" download="测试.pdf">测试pdf</a>
```

> 使用示例

<div class="code-editor" data-url="codes/html/html/custom-file-download-names.html" data-language="html"></div>

结果如下:

<iframe src="codes/html/html/custom-file-download-names.html"></iframe>