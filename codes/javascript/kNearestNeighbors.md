|  标题   | 标签  |
|  ----  | ----  |
| kNearestNeighbors([k近邻算法](https://baike.baidu.com/item/k%E8%BF%91%E9%82%BB%E7%AE%97%E6%B3%95/9512781?fr=aladdin)) | algorithm,array(算法，数组) |

使用 [k-最近邻算法](https://en.wikipedia.org/wiki/K-nearest_neighbors_algorithm)对相对于标记数据集的数据点进行分类。

使用 Array.prototype.map() 将数据映射到对象。 每个对象都包含元素到点的欧几里德距离，使用 Math.hypot()、Object.keys() 及其标签计算。
使用 Array.prototype.sort() 和 Array.prototype.slice() 获取点的 k 个最近邻居。
结合使用 Array.prototype.reduce() 和 Object.keys() 和 Array.prototype.indexOf() 找到其中最频繁的标签

```js
const kNearestNeighbors = (data, labels, point, k = 3) => {
  const kNearest = data
    .map((el, i) => ({
      dist: Math.hypot(...Object.keys(el).map(key => point[key] - el[key])),
      label: labels[i]
    }))
    .sort((a, b) => a.dist - b.dist)
    .slice(0, k);

  return kNearest.reduce(
    (acc, { label }, i) => {
      acc.classCounts[label] =
        Object.keys(acc.classCounts).indexOf(label) !== -1
          ? acc.classCounts[label] + 1
          : 1;
      if (acc.classCounts[label] > acc.topClassCount) {
        acc.topClassCount = acc.classCounts[label];
        acc.topClass = label;
      }
      return acc;
    },
    {
      classCounts: {},
      topClass: kNearest[0].label,
      topClassCount: 0
    }
  ).topClass;
};
```

> 调用方式:

```js
const data = [[0, 0], [0, 1], [1, 3], [2, 0]];
const labels = [0, 1, 1, 0];

kNearestNeighbors(data, labels, [1, 2], 2); // 1
kNearestNeighbors(data, labels, [1, 0], 2); // 0
```

> 应用场景

