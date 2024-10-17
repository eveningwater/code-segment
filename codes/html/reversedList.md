| 标题                           | 标签       |
| ------------------------------ | ---------- |
| reversedList(倒序列表) | list(列表) |

你是否知道有一种简单的方法可以用纯 HTML 创建降序编号项目列表？你唯一需要的是 reversed 属性。此布尔属性特定于 ol 元素，并指定列表的元素按相反顺序排列（即从高到低编号）。

```html
<ol reversed>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ol>
<!--
  3. 1
  2. 2
  1. 3
-->
```

此外，你还可以将 reversed 与 start 属性结合使用，后者是一个整数，用于指定列表计数器的初始值。例如，如果你想在反向的 3 项列表中显示数字 6 到 4，只需添加 start="6"。

> 使用示例

<div class="code-editor" data-url="codes/html/html/reversed-list.html" data-language="html"></div>

结果如下:

<iframe src="codes/html/html/reversed-list.html"></iframe>