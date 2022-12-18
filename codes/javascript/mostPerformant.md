|  标题   | 标签  |
|  ----  | ----  |
| mostPerformant(性能最强的函数) | function(函数) |

返回该函数在执行速度最快的函数数组中的索引。

* 使用array .prototype.map()生成一个数组，其中每个值都是迭代次数之后执行函数所花费的总时间。
* 使用之前和之后的performance.now()值的差异来获得以毫秒为单位的总时间，以达到较高的精度。
* 使用Math.min()找到最小的执行时间，并返回与性能最好的函数的索引相对应的最短时间的索引。
* 省略第二个参数，iterations，以使用默认值10000。
* 迭代次数越多，结果就越可靠，但耗时也越长。

```js
const mostPerformant = (fns,iterations = 10000) => {
    const times = fns.map(fn => {
        const before = performance.now();
        for(let i = 0;i < iterations;i++){
            fn();
        }
        return performance.now() - before;
    });
    return times.indexOf(Math.min(...times));
}
```

> 调用方式:

```js
mostPerformant([
  () => {
    // Loops through the entire array before returning `false`
    [1, 2, 3, 4, 5, 6, 7, 8, 9, '10'].every(el => typeof el === 'number');
  },
  () => {
    // Only needs to reach index `1` before returning `false`
    [1, '2', 3, 4, 5, 6, 7, 8, 9, 10].every(el => typeof el === 'number');
  }
]); // 1
```

> 应用场景