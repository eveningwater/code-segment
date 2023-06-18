| 标题                              | 标签        |
| --------------------------------- | ----------- |
| unzipWith(将数组根据回调函数展开) | array(数组) |

创建一个元素数组，将 zip 生成的数组中的元素解组并应用提供的函数。

- 使用 Math.max() 和扩展运算符 (...) 获取数组中最长的子数组，Array.prototype.map() 使每个元素成为一个数组。
- 使用 Array.prototype.reduce() 和 Array.prototype.forEach() 将分组值映射到单个数组。
- 使用 Array.prototype.map() 和扩展运算符 (...) 将 fn 应用于每个单独的元素组。

```js
const unzipWith = (arr, fn) =>
  arr
    .reduce(
      (acc, val) => (val.forEach((v, i) => acc[i].push(v)), acc),
      Array.from({
        length: Math.max(...arr.map(x => x.length))
      }).map(x => [])
    )
    .map(val => fn(...val));
```

> 调用方式:

```js
unzipWith(
  [
    [1, 10, 100],
    [2, 20, 200]
  ],
  (...args) => args.reduce((acc, v) => acc + v, 0)
);
// [3, 30, 300]
```

> 应用场景
