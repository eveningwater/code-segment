| 标题                           | 标签       |
| ------------------------------ | ---------- |
| startOrderedListAtDifferentNumber(从不同数字开始有序列表) | list(列表) |

HTML 中的有序列表默认从数字 1 开始。但你知道你可以自定义有序列表的起始数字吗？这可能感觉像是一种不常见的需求。

`<ol>` 标签的一个鲜为人知的属性是 start 属性。此属性允许你指定列表应从哪个数字开始。

```html
<ol start="4">
  <li>列表1</li>
  <li>列表2</li>
  <li>
    <ol start="12">
      <li>列表3-1</li>
      <li>列表3-2</li>
    </ol>
  </li>
  <li>列表4</li>
  <li>列表5</li>
</ol>
```

```css
ol {
  list-style-type: lower-roman;
}
```

如你所见，你可以将其用于有序列表以及嵌套顺序列表。它甚至可以与你可以想到的所有列表样式类型配合使用，包括罗马数字和字母字符。

> 使用示例

<div class="code-editor" data-url="codes/html/html/start-ordered-list-at-different-number.html" data-language="html"></div>

结果如下:

<iframe src="codes/html/html/start-ordered-list-at-different-number.html"></iframe>