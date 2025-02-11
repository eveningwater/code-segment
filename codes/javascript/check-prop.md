| 标题                | 标签                                               |
| ------------------- | -------------------------------------------------- |
| checkProp(验证属性) | function,object,intermediate(函数，对象，两者之间) |

创建一个函数，该函数将为给定对象的指定属性调用谓词函数。

- 返回一个 curried 函数，它将调用 obj 上指定 prop 的谓词并返回一个布尔值。

> 代码如下:

```js
const checkProp = (predicate, prop) => obj => !!predicate(obj[prop]);
```

> 调用方式:

```js
const lengthIs4 = checkProp(l => l === 4, 'length');
lengthIs4([]); // false
lengthIs4([1, 2, 3, 4]); // true
lengthIs4(new Set([1, 2, 3, 4])); // false (Set uses Size, not length)

const session = { user: {} };
const validUserSession = checkProp(u => u.active && !u.disabled, 'user');

validUserSession(session); // false

session.user.active = true;
validUserSession(session); // true

const noLength = checkProp(l => l === undefined, 'length');
noLength([]); // false
noLength({}); // true
noLength(new Set()); // true
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/check-prop.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/check-prop.html"></iframe>
