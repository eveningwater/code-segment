| 标题                           | 标签       |
| ------------------------------ | ---------- |
| passwordAutocompleteSuggestion(密码自动完成) | form(表单) |

HTML autocomplete 属性为 `<input>` 字段提供了多种选项。其中之一是 new-password 值，当要求用户创建新密码时（例如注册或重置密码表单），可以使用该值。此值可确保浏览器不会意外填写现有密码，同时还允许浏览器建议安全密码：

```html
<form action="signup" method="post">
  <input type="text" autocomplete="username">
  <input type="password" autocomplete="new-password">
  <input type="submit" value="Sign up">
</form>
```

此外，如果表单包含第二个密码字段，要求用户重新输入新创建的密码，则应对两个密码字段都使用 autocomplete="new-password"。

> 使用示例

<div class="code-editor" data-url="codes/html/html/password-autocomplete-suggestion.html" data-language="html"></div>

结果如下:

<iframe src="codes/html/html/password-autocomplete-suggestion.html"></iframe>