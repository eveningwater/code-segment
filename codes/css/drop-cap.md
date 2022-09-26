| 标题                             | 标签           |
| -------------------------------- | -------------- |
| drop-cap(首个字符样式设置) | visual(视觉的) |

使第一个字母大于文本的其余部分。

* 使用 ::first-letter 伪元素来设置段落的第一个元素的样式。

```html
<p class="drop-cap">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam commodo ligula quis tincidunt cursus. Integer
consectetur tempor ex eget hendrerit. Cras facilisis sodales odio nec maximus. Pellentesque lacinia convallis
libero, rhoncus tincidunt ante dictum at. Nullam facilisis lectus tellus, sit amet congue erat sodales commodo.
</p>
<p class="drop-cap">
Donec magna erat, imperdiet non odio sed, sodales tempus magna. Integer vitae orci lectus. Nullam consectetur orci at pellentesque efficitur.
</p>
```

```css
.drop-cap::first-letter {
    float: left;
    color: #5f79ff;
    margin: 0 8px 0 4px;
    font-size: 3rem;
    font-weight: bold;
    line-height: 1;
}
```

> 应用场景

<iframe src="codes/css/html/drop-cap.html"></iframe>




