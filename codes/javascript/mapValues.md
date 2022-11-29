|  标题   | 标签  |
|  ----  | ----  |
| mapValues(映射对象值) | object(对象) |

使用提供的函数映射对象的值，生成具有相同键的新对象。

* 使用 Object.keys() 迭代对象的键。
* 使用 Array.prototype.reduce() 使用 fn 创建一个具有相同键和映射值的新对象。

```js
const mapValues = (obj,fn) => Object.keys(obj).reduce((acc,item) => {
    acc[item] = fn(obj[item],item,obj);
    return acc;
},{})
```

> 调用方式:

```js
const users = {
  fred: { user: 'fred', age: 40 },
  pebbles: { user: 'pebbles', age: 1 }
};
mapValues(users, u => u.age); // { fred: 40, pebbles: 1 }
```

> 应用场景