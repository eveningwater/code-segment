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

> 调用方式:

```js
let formData = new FormData();
isFormData(formData); //true
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/isFormData.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/isFormData.html"></iframe>
