| 标题                   | 标签                                 |
| ---------------------- | ------------------------------------ |
| focus-within(关注焦点) | visual,interactivity(视觉的，交互性) |

如果窗体的任何子元素集中，则更改窗体的外观。

- 如果任何子元素获得焦点，请使用伪类 :focus-within 将样式应用于父元素。

```html
<form class="form">
  <label for="username" class="label">Username:</label>
  <input type="text" id="username" class="input" />
  <br />
  <label for="password" class="label">Password:</label>
  <input type="text" id="password" class="input" />
</form>
```

```css
.form {
  border: 2px solid #52bb82;
  padding: 8px;
  border-radius: 2px;
  margin: 8px;
}
.form:focus-within {
  background-color: #7cf0bd;
}
.form:focus-within .label {
  color: #fff;
}
.label {
  width: 72px;
  display: inline-block;
}
.input {
  margin: 4px 12px;
  border: 1px solid #59595a;
  border-radius: 4px;
  padding: 8px 16px;
  outline: none;
}
```

> 应用场景

<div class="code-editor" data-url="codes/css/html/focus-within.html" data-language="html"></div>

结果如下:

<iframe src="codes/css/html/focus-within.html"></iframe>
