| 标题                      | 标签                       |
| ------------------------- | -------------------------- |
| functions(函数属性名数组) | object,function(对象,函数) |

从对象自己的（和可选继承的）可枚举属性中获取函数属性名称数组。

- 使用 Object.keys() 迭代对象自己的属性。
- 如果 inherited 为真，则使用 Object.getPrototypeOf() 来获取对象的继承属性。
- 使用 Array.prototype.filter() 仅保留那些作为函数的属性。
- 省略第二个参数，inherited，默认情况下不包括继承的属性。

```js
const functions = (obj, inherited = false) =>
  (inherited
    ? [...Object.keys(obj), ...Object.keys(Object.getPrototypeOf(obj))]
    : Object.keys(obj)
  ).filter(k => typeof obj[k] === 'function');
```

> 调用方式:

```js
function Foo() {
  this.a = () => 1;
  this.b = () => 2;
}
Foo.prototype.c = () => 3;
functions(new Foo()); // ['a', 'b']
functions(new Foo(), true); // ['a', 'b', 'c']
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/functions.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/functions.html"></iframe>
