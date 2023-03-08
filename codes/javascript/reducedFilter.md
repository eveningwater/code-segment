| 标题                                              | 标签        |
| ------------------------------------------------- | ----------- |
| reduceWhich(根据提供的回调函数对数组元素重新排列) | array(数组) |

根据条件过滤对象数组，同时也过滤掉未指定的键。

- 使用 Array.prototype.filter() 根据谓词 fn 过滤数组，以便它返回条件返回真值的对象。
- 在过滤后的数组上，使用 Array.prototype.map() 返回新对象。
- 使用 Array.prototype.reduce() 过滤掉未作为 keys 参数提供的键。

```js
const reducedFilter = (arr, keys, fn) =>
  arr
    .filter(fn)
    .map(item => keys.reduce((acc, key) => ((acc[key] = item[key]), acc), {}));
```

> 调用方式:

```js
const data = [
  {
    id: 1,
    name: 'john',
    age: 24
  },
  {
    id: 2,
    name: 'mike',
    age: 50
  }
];
reducedFilter(data, ['id', 'name'], item => item.age > 24);
// [{ id: 2, name: 'mike'}]
```

> 应用场景
