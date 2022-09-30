|  标题   | 标签  |
|  ----  | ----  |
| isEmpty(是否是空对象) | type,array,object,string(类型，数组，对象，字符串) |

检查 a 值是否为空对象/集合、没有可枚举属性或任何不被视为集合的类型。

* 检查提供的值是否为 null 或其长度是否等于 0。

```js
const isEmpty = val => val === null || !(Object.keys(val) || val).length;
```

> 调用方式:

```js
isEmpty([]); // true
isEmpty({}); // true
isEmpty(''); // true
isEmpty([1, 2]); // false
isEmpty({ a: 1, b: 2 }); // false
isEmpty('text'); // false
isEmpty(123); // true - type is not considered a collection
isEmpty(true); // true - type is not considered a collection
```

> 应用场景
