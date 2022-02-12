|  标题   | 标签  |
|  ----  | ----  |
| countBy(根据参数条件来计数的函数) | array,object,intermediate(数组，对象，两者之间的) |

根据给定函数对数组的元素进行分组，并返回每组中元素的计数。

* 使用 `Array.prototype.map()` 将数组的值映射到函数或属性名称。
* 使用 `Array.prototype.reduce()` 创建一个对象，其中的键是从映射的结果中生成的。

> 代码如下:

```js
const countBy = (arr,handler) => arr.map(typeof handler === "function" ? handler : val => val[handler]).reduce((acc,item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
},{});
```

> 调用方式:

```js
// countBy([6.1, 4.2, 6.3], Math.floor); // {4: 1, 6: 2}
// countBy(['one', 'two', 'three'], 'length'); // {3: 2, 5: 1}
// countBy([{ count: 5 }, { count: 10 }, { count: 5 }], x => x.count)
// // {5: 2, 10: 1}
```

> 应用场景