| 标题                     | 标签                       |
| ------------------------ | -------------------------- |
| line-clamp(悬浮覆盖图片) | layout,visual(布局,视觉的) |

将多行文本限制为给定的行数。

- 使用 -webkit-line-clamp 设置要显示的最大行数。
- 将 display 设置为 -webkit-box 并将 -webkit-box-orient 设置为 vertical，因为它们是应用 -webkit-line-clamp 所必需的。
- 应用溢出：隐藏以隐藏文本修剪后的任何溢出。

```html
<p class="excerpt">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod enim
  eget ultricies sollicitudin. Nunc aliquam arcu arcu, non suscipit metus luctus
  id. Aliquam sodales turpis ipsum, in vehicula dui tempor sit amet. Nullam quis
  urna erat. Pellentesque mattis dolor purus. Aliquam nisl urna, tempor a
  euismod a, placerat in mauris. Phasellus neque quam, dapibus quis nunc at,
  feugiat suscipit tortor. Duis vel posuere dolor. Phasellus risus erat,
  lobortis et mi vel, viverra faucibus lectus. Etiam ut posuere sapien. Nulla
  ultrices dui turpis, interdum consectetur urna tempus at.
</p>
```

```css
.excerpt {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
```

> 应用场景

<div class="code-editor" data-url="codes/css/html/line-clamp.html" data-language="html"></div>

结果如下:

<iframe src="codes/css/html/line-clamp.html"></iframe>
