| 标题                           | 标签       |
| ------------------------------ | ---------- |
| numberOnlyInput(纯数字输入框) | form(表单) |

仅数字输入并不像你想象的那么简单。大多数人会本能地使用 type="number" 属性，但这可能还不够。当然，它在移动设备上显示数字键盘，但允许用户输入非数字字符。此外，桌面上的上下箭头对于输入 PIN 码或信用卡号等并不是特别有用。

相反，我们可以使用 inputmode="numeric"。这可确保移动键盘仅输入数字，甚至不包括一些可用的符号。我们还应该添加 pattern="[0-9]+" 来限制输入值。至于 type 属性，这取决于你。type="text" 或 type="number" 都可以正常工作。

```html
<label>
  纯数字输入框
  <input type="text" inputmode="numeric" pattern="[0-9]+"" />
</label>
```

> 重要提示:大多数浏览器不会费心验证输入是否为纯数字，即使 type="number" 也是如此。这与数字输入通常接受科学计数法（例如 1e3）相结合，意味着你需要自己编写一些验证逻辑。

> 使用示例

<div class="code-editor" data-url="codes/html/html/number-only-input.html" data-language="html"></div>

结果如下:

<iframe src="codes/html/html/number-only-input.html"></iframe>