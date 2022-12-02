|  标题   | 标签  |
|  ----  | ----  |
| matchesWith(通过回调函数匹配对象属性) | object(对象) |

根据提供的函数比较两个对象以确定第一个对象是否包含与第二个对象等效的属性值。

* 使用 Object.keys() 获取第二个对象的所有键。
* 使用 Array.prototype.every()、Object.prototype.hasOwnProperty() 和提供的函数来确定第一个对象中是否存在所有键并具有等效值。
* 如果未提供函数，将使用相等运算符比较值。

```js
const matchesWith = (obj,source,fn) => Object.keys(source).every(k => obj.hasOwnProperty(k) && fn ? fn(obj[k],source[k],k,obj,source) : obj[k] === source[k]);
```

> 调用方式:

```js
const isGreeting = val => /^h(?:i|ello)$/.test(val);
matchesWith(
  { greeting: 'hello' },
  { greeting: 'hi' },
  (oV, sV) => isGreeting(oV) && isGreeting(sV)
); // true
```

> 应用场景