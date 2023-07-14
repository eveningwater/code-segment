| 标题                                             | 标签                         |
| ------------------------------------------------ | ---------------------------- |
| HasPrototypeObject(判断对象属性是否存在于原型中) | object,prototype(对象，原型) |

判断属性名存在于实例对象中还是存在于原型对象中。

- 使用[Object.hasOwnProperty()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)方法与[in 操作符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/in)就能确定是实例对象中含有该属性还是原型对象中含有该属性。
- 第一个参数为传入的对象，即实例对象或原型对象。
- 第二个参数为属性名，即要判断的属性名。

> 代码如下:

```js
const hasPrototypeObject = (obj, name) =>
  !obj.hasOwnProperty(name) && name in obj;
```

> 调用方式:

```js
function Person() {}
Person.prototype.name = "夕水";
let person = new Person();
hasPrototypeObject(person, "name"); //true
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/hasPrototypeObject.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/hasPrototypeObject.html"></iframe>
