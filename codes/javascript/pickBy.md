|  标题   | 标签  |
|  ----  | ----  |
| pickBy(从对象中选取符合回调函数的键值对) | object(对象) |

创建一个由给定函数返回 true 的属性组成的对象。

* 使用 Object.keys() 和 Array.prototype.filter() 删除 fn 返回虚假值的键。
* 使用 Array.prototype.reduce() 将过滤后的键转换回具有相应键值对的对象。
* 使用两个参数调用回调函数：(value, key)。

```js
const pickBy = (obj,fn) => Object.keys(obj).filter(key => fn(obj[key],key)).reduce((acc,key) => (key in obj && (acc[key] = obj[key]),acc),{});
```

> 调用方式:

```js
pickBy({ a: 1, b: '2', c: 3 }, x => typeof x === 'number');
// { 'a': 1, 'c': 3 }
```

> 应用场景