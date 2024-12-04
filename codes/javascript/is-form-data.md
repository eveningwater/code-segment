| 标题                           | 标签               |
| ------------------------------ | ------------------ |
| isFormData(判断是否是表单对象) | FormData(表单对象) |

判断一个对象是否是表单对象。

- 使用[typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)操作符判断`FormData`对象是否存在，然后使用[instanceof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)操作符判断传入的值是否是`FormData`对象的实例

> 代码如下:

```js
const isFormData = val =>
  typeof FormData !== 'undefined' && val instanceof FormData;
```

ts代码如下:

<div class="code-editor" data-url="codes/javascript/ts/is-form-data.ts" data-language="typescript"></div>

> 调用方式:

```js
let formData = new FormData();
isFormData(formData); //true
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/is-form-data.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/is-form-data.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/is-form-data.html"></iframe>
