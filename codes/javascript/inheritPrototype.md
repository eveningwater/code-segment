| 标题                             | 标签                      |
| -------------------------------- | ------------------------- |
| inheritPrototype(寄生组合式继承) | object,extend(对象，继承) |

寄生组合式继承。

- 新建一个 object 函数，函数内部创建一个函数 F,并将函数 F 的原型对象赋值给 object 函数的对象参数，返回 F 的构造函数。
- 利用 object 函数创建一个父类 superType 的原型对象副本，并将原型对象的构造函数指针指向子类 subType，然后将该副本赋值给子类 subType 的原型对象。

> 代码如下:

```js
const inheritPrototype = (subType, supType) => {
  const object = o => {
    function F() {}
    F.prototype = o;
    return new F();
  };
  const pro = object(supType.prototype);
  pro.constructor = subType;
  subType.prototype = pro;
};
```

> 调用方式:

```js
function SuperType(name) {
  this.name = name;
  this.colors = ['red', 'blue', 'green'];
}
SuperType.prototype.sayName = function () {
  console.log(this.name);
};
function SubType(name, age) {
  SuperType.call(this, name);
  this.age = age;
}
inheritPrototype(SubType, SuperType);
SubType.prototype.sayAge = function () {
  console.log(this.age);
};

const sub1 = new SubType('eveningwater');
sub1.sayName(); // eveningwater
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/inheritPrototype.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/inheritPrototype.html"></iframe>
