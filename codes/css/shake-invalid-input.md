| 标题                                | 标签            |
| ----------------------------------- | --------------- |
| shake-invalid-input(摇动无效输入框) | animation(动画) |

在无效输入上创建抖动动画。

- 使用模式属性定义输入值必须匹配的正则表达式。
- 使用 @keyframes 定义一个摇动动画，使用 margin-left 属性。
- 使用 :invalid 伪类应用动画以使元素抖动。

```html
<input
  type="text"
  class="shake-input"
  placeholder="Letters only"
  pattern="[a-zA-Z]*"
/>
```

```css
.shake-input {
  border: 1px solid #afafaf;
  padding: 10px 15px;
  outline: none;
  border-radius: 6pc;
  color: #535455;
}
.shake-input:focus {
  border-color: #2396ef;
}
.shake-input:invalid {
  box-shadow: 0 0 0.6rem #f8bcbc;
  animation: shake 0.4s ease-in 0s 2;
}
@keyframes shake {
  0% {
    margin-left: 0;
  }
  25% {
    margin-left: 0.5rem;
  }
  75% {
    margin-left: -0.5rem;
  }
  100% {
    margin-left: 0;
  }
}
```

> 应用场景

<div class="code-editor" data-url="codes/css/html/shake-invalid-input.html" data-language="html"></div>

结果如下:

<iframe src="codes/css/html/shake-invalid-input.html"></iframe>
