| 标题                             | 标签           |
| -------------------------------- | -------------- |
| custom-text-selection(自定义文本选中) | visual(视觉的) |

更改文本选择的样式。

* 选中时，使用 ::selection 伪选择器在其中设置文本样式。

```html
<p class="custom-text-selection">Select some of this text</p>
```

```css
::selection {
    background-color: rgba(0,0,0,.85);
    background-color: #f2f3f4;
}
.custom-text-selection::selection {
    color:rgba(255,255,255,.85);
    background-color: #2396ef;
}
```

> 应用场景

<iframe src="codes/css/html/custom-scrollbar.html"></iframe>




