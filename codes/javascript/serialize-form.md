| 标题                          | 标签                          |
| ----------------------------- | ----------------------------- |
| serializeForm(序列化表单对象) | browser,string(浏览器,字符串) |

将一组表单元素编码为查询字符串。

- 使用 FormData 构造函数将 HTML 表单转换为 FormData。
- 使用 Array.from() 转换为数组，将 map 函数作为第二个参数传递。
- 使用 Array.prototype.map() 和 encodeURIComponent() 对每个字段的值进行编码。
- 使用带有适当参数的 Array.prototype.join() 来生成适当的查询字符串。

```js
const serializeForm = form =>
  Array.from(new FormData(form), field =>
    field.map(decodeURIComponent).join('=')
  ).join('&');
```

<div class="code-editor" data-url="codes/javascript/ts/serialize-form.ts" data-language="typescript"></div>

> 调用方式:

```js
serializeForm(document.querySelector('.form'));
// nickname=夕水&password=123456
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/serialize-form.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/serialize-form.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/serialize-form.html"></iframe>

> ps: 以上是一个不错的实用函数
