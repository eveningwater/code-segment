| 标题                             | 标签           |
| -------------------------------- | -------------- |
| input-with-prefix(悬浮覆盖图片) | interactivity,visual(交互性,视觉的) |

使用可视的、不可编辑的前缀创建输入。

* 使用 display: flex 创建容器元素。
* 从 `<input>` 字段中删除边框和轮廓。 将它们应用于父元素，使其看起来像一个输入框。
* 当用户与 `<input>` 字段交互时，使用 :focus-within 伪类选择器相应地设置父元素的样式。

```html
<div class="input-box">
    <span class="prefix">+30</span>
    <input type="tel" class="input" placeholder="210 123 4567">
</div>
```

```css
.input-box {
    display: flex;
    align-items: center;
    max-width: 300px;
    background-color: #fff;
    border: 1px solid #a0a0a0;
    border-radius: 4px;
    padding-left: 0.5rem;
    overflow: hidden;
    font-family: sans-serif;
}
.input-box .prefix {
    font-weight: 300;
    font-size: 14px;
    color: #999;
}
.input-box .input {
    flex-grow: 1;
    font-size: 14px;
    border: none;
    outline: none;
    padding: 0.5rem;
    background-color: #fff;
}
.input-box:focus-visible {
    border-color: #777;
}
```

> 应用场景

<iframe src="codes/css/html/input-with-prefix.html"></iframe>




