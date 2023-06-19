| 标题                              | 标签        |
| --------------------------------- | ----------- |
| unzip(将数组元素按照相同类型分类) | array(数组) |

创建一个二维数组，对生成的数组中的元素进行解组。

- 使用 Math.max()、Function.prototype.apply() 获取数组中最长的子数组，Array.prototype.map() 使每个元素成为一个数组。
- 使用 Array.prototype.reduce() 和 Array.prototype.forEach() 将分组值映射到单个数组。

```js
const unzip = arr =>
  arr.reduce(
    (acc, val) => (val.forEach((v, i) => acc[i].push(v)), acc),
    Array.from({
      length: Math.max(...arr.map(x => x.length))
    }).map(x => [])
  );
```

> 调用方式:

```js
unzip([
  ['a', 1, true],
  ['b', 2, false]
]); // [['a', 'b'], [1, 2], [true, false]]
unzip([
  ['a', 1, true],
  ['b', 2]
]); // [['a', 'b'], [1, 2], [true]]
```

> 应用场景
