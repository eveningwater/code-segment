| 标题                                     | 标签                       |
| ---------------------------------------- | -------------------------- |
| weightedSample(根据概率获取数组中的元素) | array,random(数组，随机数) |

使用提供的权重作为每个元素的概率，从数组中获取随机元素。

- 使用 Array.prototype.reduce() 为权重中的每个值创建部分和的数组。
- 使用 Math.random() 生成随机数，并使用 Array.prototype.findIndex() 根据之前生成的数组查找正确的索引。
- 最后，返回带有生成索引的 arr 元素。

```js
const weightedSample = (arr, weights) => {
  let roll = Math.random();
  return arr[
    weights
      .reduce(
        (acc, w, i) => (i === 0 ? [w] : [...acc, acc[acc.length - 1] + w]),
        []
      )
      .findIndex((v, i, s) => roll >= (i === 0 ? 0 : s[i - 1]) && roll < v)
  ];
};
```

> 调用方式:

```js
weightedSample([3, 7, 9, 11], [0.1, 0.2, 0.6, 0.1]); // 9
```

> 应用场景
