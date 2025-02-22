| 标题                         | 标签                           |
| ---------------------------- | ------------------------------ |
| myNew(实现 new 操作符的功能) | prototype,function(原型，函数) |

用函数模拟实现一个 new 操作符的功能。

- `new`的作用是实例化一个对象，并且将这个对象的 this 指向了传入的构造器，也就是改变这个对象的原型指向传入的构造器
- 如果不指定返回的值，或者指定的是返回的基本类型值,则返回这个构造函数对象
- 如果指定返回的值是一个对象，则返回这个对象

> 代码如下：

```js
function myNew() {
  const o = Object.create({});
  const currentConstructor = Array.prototype.shift.call(arguments);
  o.__proto__ = currentConstructor.prototype;
  let res = currentConstructor.apply(o, arguments);
  return typeof res === 'object' ? res : o;
}
```
ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/my-new.ts" data-language="typescript"></div>

> 调用方式：

```js
function Test(name) {
  this.name = name;
}
const n1 = myNew(Test, 'eveningwater');
console.log(n1);
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/my-new.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/my-new.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/my-new.html"></iframe>
