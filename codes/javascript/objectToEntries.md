|  标题   | 标签  |
|  ----  | ----  |
| objectToEntries(从给定对象创建键值对) | object,array(对象，数组) |

从一个对象创建一个键值对数组。

* 使用 Object.keys() 和 Array.prototype.map() 迭代对象的键并生成具有键值对的数组。
* [Object.entries()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries) 提供了类似的功能。

```js
const objectToEntries = obj => Object.keys(obj).map(k => [k,obj[k]]);
```

> 调用方式:

```js
objectToEntries({ a: 1, b: 2 }); // [ ['a', 1], ['b', 2] ]
```

> 应用场景