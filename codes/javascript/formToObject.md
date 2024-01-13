| 标题                             | 标签                         |
| -------------------------------- | ---------------------------- |
| formToObject(表单对象转普通对象) | browser,object(浏览器，对象) |

将一组表单元素编码为对象。

- 使用 `FormData` 构造函数将 `HTML` 表单转换为 `FormData` 并使用 `Array.from()` 转换为数组。
- 使用 `Array.prototype.reduce()` 从数组中收集对象。

```js
const formToObject = form =>
  Array.from(new FormData(form)).reduce(
    (acc, [k, v]) => ({ ...acc, [k]: v }),
    {}
  );
```

> 调用方式:

```js
formToObject(document.querySelector('#form'));
// { email: 'test@email.com', name: 'Test Name' }
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/formToObject.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/formToObject.html"></iframe>
