| 标题                                              | 标签        |
| ------------------------------------------------- | ----------- |
| reduceWhich(根据提供的回调函数对数组元素重新排列) | array(数组) |

在应用提供的函数设置比较规则后，返回数组的最小值/最大值。

- 将 Array.prototype.reduce() 与比较器函数结合使用，以获取数组中的适当元素。
- 省略第二个参数 comparator，以使用返回数组中最小元素的默认参数。

```js
const reduceWhich = (arr, comparator = (a, b) => a - b) =>
  arr.reduce((a, b) => (comparator(a, b) >= 0 ? b : a));
```

> 调用方式:

```js
reduceWhich([1, 3, 2]); // 1
reduceWhich([1, 3, 2], (a, b) => b - a); // 3
reduceWhich(
  [
    { name: 'Tom', age: 12 },
    { name: 'Jack', age: 18 },
    { name: 'Lucy', age: 9 }
  ],
  (a, b) => a.age - b.age
); // {name: 'Lucy', age: 9}
```

> 应用场景
