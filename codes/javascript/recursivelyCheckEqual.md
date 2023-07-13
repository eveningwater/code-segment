| 标题                                      | 标签                         |
| ----------------------------------------- | ---------------------------- |
| recursivelyCheckEqual(检测多个值是否相等) | object,recursive(对象，递归) |

检测多个值是否相等。

- 使用[Object.is](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is)方法判断两个值是否相等。
- 如果是多个值，则递归调用recursivelyCheckEqual方法检查。


> 代码如下:

```js
const recursivelyCheckEqual = (a,..rest) => Object.is(a,rest[0]) && (rest.length < 2 || recursivelyCheckEqual(...rest));
```

> 调用方式:

```js
recursivelyCheckEqual('NaN' * 1, Number('true'), NaN); // true
recursivelyCheckEqual(+true, Number('1'), 1); // true
recursivelyCheckEqual(+false, Number('1'), 1); // false
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/recursivelyCheckEqual.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/recursivelyCheckEqual.html"></iframe>
