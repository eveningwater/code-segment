| 标题                            | 标签                  |
| ------------------------------- | --------------------- |
| disable-selection(禁止文本选中) | interactivity(交互性) |

使内容无法选择。

- 使用 user-select: none 使元素的内容不可选择。
- 注意：这不是防止用户复制内容的安全方法。

```html
<p>You can select me.</p>
<p class="unselectable">You can't select me!</p>
```

```css
.unselectable {
  user-select: none;
}
```

> 应用场景

<div class="code-editor" data-url="codes/css/html/disable-selection.html" data-language="html"></div>

结果如下:

<iframe src="codes/css/html/disable-selection.html"></iframe>
