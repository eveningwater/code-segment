| 标题                             | 标签           |
| -------------------------------- | -------------- |
| gradient-text(渐变文本) | visual(视觉的) |

为文本提供渐变颜色。

* 使用带有 linear-gradient() 值的背景为文本元素提供渐变背景。
* 使用 webkit-text-fill-color: transparent 以透明颜色填充文本。
* 使用 webkit-background-clip: text 用文本剪辑背景，用渐变背景作为颜色填充文本。

```html
<div class="gradient-text">Gradient text</div>
```

```css
.gradient-text {
    background: linear-gradient(#70d6ff,#00072d);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-size: 32px;
}
```

> 应用场景

<iframe src="codes/css/html/gradient-text.html"></iframe>




