| 标题                             | 标签           |
| -------------------------------- | -------------- |
| clearfix(清除浮动) | layout(布局) |

确保元素自清除其子元素。

* 使用 :after 伪元素并应用 content: '' 以允许它影响布局。
* 使用 clear: both 使元素通过左右浮动都清晰。
* 要使此技术正常工作，请确保容器中没有非浮动子项，并且在 clearfixed 容器之前没有高浮动但在相同的格式上下文中（例如浮动列）。
* 注意：这仅在您使用浮动构建布局时才有用。 考虑使用更现代的方法，例如 flexbox 或网格布局。

```html
<div class="clearfix">
    <div class="floated">float a</div>
    <div class="floated">float b</div>
    <div class="floated">float c</div>
</div>
```

```css
.clearfix::after {
    content:"";
    clear: both;
    display: block;
}
.floated {
    float: left;
    padding: 4px;
}
```

> 应用场景

<iframe src="codes/css/html/clearfix.html"></iframe>




