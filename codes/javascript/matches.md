|  标题   | 标签  |
|  ----  | ----  |
| matches(匹配对象属性) | object(对象) |

比较两个对象以确定第一个对象是否包含与第二个对象等效的属性值。

* 使用 Object.keys() 获取第二个对象的所有键。
* 使用 Array.prototype.every()、Object.prototype.hasOwnProperty() 和严格比较来确定所有键是否存在于第一个对象中并且具有相同的值。

```js
const matches = (obj,source) => Object.keys(source).every(key => obj.hasOwnProperty(key) && source[key] === obj[key]);
```

> 调用方式:

```js
matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true });
// true
matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true });
// false
```

> 应用场景