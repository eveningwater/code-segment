|  标题   | 标签  |
|  ----  | ----  |
| kMeans([K均值聚类算法](https://baike.baidu.com/item/K%E5%9D%87%E5%80%BC%E8%81%9A%E7%B1%BB%E7%AE%97%E6%B3%95/15779627?fr=aladdin)) | algorithm,array(算法，数组) |

使用 [K均值聚类](https://en.wikipedia.org/wiki/K-means_clustering)算法将给定数据分组到 k 个聚类中。

* 使用 Array.from() 和 Array.prototype.slice() 为集群质心、距离和类初始化适当的变量。
* 使用 while 循环重复分配和更新步骤，只要之前的迭代中有变化，如 itr 所示。
* 使用 Math.hypot()、Object.keys() 和 Array.prototype.map() 计算每个数据点和质心之间的欧几里得距离。
* 使用 Array.prototype.indexOf() 和 Math.min() 找到最近的质心。
* 使用 Array.from() 和 Array.prototype.reduce()，以及 parseFloat() 和 Number.prototype.toFixed() 来计算新的质心。

```js
const kMeans = (data, k = 1) => {
  const centroids = data.slice(0, k);
  const distances = Array.from({ length: data.length }, () =>
    Array.from({ length: k }, () => 0)
  );
  const classes = Array.from({ length: data.length }, () => -1);
  let itr = true;

  while (itr) {
    itr = false;

    for (let d in data) {
      for (let c = 0; c < k; c++) {
        distances[d][c] = Math.hypot(
          ...Object.keys(data[0]).map(key => data[d][key] - centroids[c][key])
        );
      }
      const m = distances[d].indexOf(Math.min(...distances[d]));
      if (classes[d] !== m) itr = true;
      classes[d] = m;
    }

    for (let c = 0; c < k; c++) {
      centroids[c] = Array.from({ length: data[0].length }, () => 0);
      const size = data.reduce((acc, _, d) => {
        if (classes[d] === c) {
          acc++;
          for (let i in data[0]) centroids[c][i] += data[d][i];
        }
        return acc;
      }, 0);
      for (let i in data[0]) {
        centroids[c][i] = parseFloat(Number(centroids[c][i] / size).toFixed(2));
      }
    }
  }

  return classes;
};
```

> 调用方式:

```js
kMeans([[0, 0], [0, 1], [1, 3], [2, 0]], 2); // [0, 1, 1, 0]
```

> 应用场景

