|  标题   | 标签  |
|  ----  | ----  |
| mapToObject(映射转对象) | object(对象) |

将 Map 转换为对象。

* 使用 Map.prototype.entries() 将 Map 转换为键值对数组。
* 使用 Object.fromEntries() 将数组转换为对象。

```js
const mapToObject = map => Object.fromEntries(map.entries());
```

> 调用方式:

```js
mapToObject(new Map([['a', 1], ['b', 2]])); // {a: 1, b: 2}
```

> 应用场景