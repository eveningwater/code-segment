| 标题                         | 标签        |
| ---------------------------- | ----------- |
| pullBy(根据回调函数过滤数组) | array(数组) |

根据给定的迭代器函数改变原始数组以过滤掉指定的值。

- 检查提供的最后一个参数是否是一个函数。
- 使用 Array.prototype.map() 将迭代器函数 fn 应用于所有数组元素。
- 使用 Array.prototype.filter() 和 Array.prototype.includes() 提取不需要的值。
- 设置 Array.prototype.length 以通过将其长度重置为 0 来改变传入的数组。
- 使用 Array.prototype.push() 仅使用拉取的值重新填充它。

```js
const pullBy = (arr, ...args) => {
  const length = args.length;
  let fn = length > 1 ? args[length - 1] : undefined;
  fn = typeof fn === 'function' ? (args.pop(), fn) : undefined;
  let argState = (Array.isArray(args[0]) ? args[0] : args).map(val => fn(val));
  let pulled = arr.filter((v, i) => !argState.includes(fn(v)));
  arr.length = 0;
  pulled.forEach(v => arr.push(v));
};
```

> 调用方式:

```js
var myArray = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 1 }];
pullBy(myArray, [{ x: 1 }, { x: 3 }], o => o.x); // myArray = [{ x: 2 }]
```

> 应用场景
