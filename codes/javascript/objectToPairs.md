|  标题   | 标签  |
|  ----  | ----  |
| objectToPairs(从对象创建键值对) | object,array(对象，数组) |

从一个对象创建一个键值对数组。

* 使用 Object.entries() 从给定对象中获取键值对数组。

```js
const objectToPairs = obj => Object.entries(obj);
```

> 调用方式:

```js
objectToPairs({ a: 1, b: 2 }); // [ ['a', 1], ['b', 2] ]
```

> 应用场景