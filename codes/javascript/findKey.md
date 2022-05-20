|  标题   | 标签  |
|  ----  | ----  |
| findKey(根据回调函数指定的返回值查找对象属性名) | object(对象) |

找到满足提供的测试功能的第一个键。 否则返回未定义。

* 使用 `Object.keys()` 获取对象的所有属性，`Array.prototype.find()` 使用 `handler` 测试每个键值对。
* 回调接收三个参数——值、键和对象。

> 代码如下:

```js
const findKey = (obj,handler) => Object.keys(obj).find(key => handler(obj[key],key,obj));
```

> 调用方式:

```js
findKey(
  {
    barney: { age: 36, active: true },
    fred: { age: 40, active: false },
    pebbles: { age: 1, active: true }
  },
  x => x['active']
); // 'barney'
```

> 应用场景