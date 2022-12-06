|  标题   | 标签  |
|  ----  | ----  |
| maxSubArray(在数字数组中查找具有最大总和的连续子数组) | algorithm,math,array(算法，数学，数组) |

在数字数组中查找具有最大总和的连续子数组。

* 使用贪婪的方法来跟踪当前总和和当前最大值 maxSum。如果所有值都是负数，则将 maxSum 设置为 -Infinity 以确保返回最大的负值。
* 定义变量以跟踪最大起始索引 sMax、最大结束索引 eMax 和当前起始索引 s。
* 使用 Array.prototype.forEach() 迭代值并将当前值添加到总和中。
* 如果当前总和大于 maxSum，则更新索引值和 maxSum。
* 如果总和低于 0，则将其重置为 0 并将 s 的值更新为下一个索引。
* 使用 Array.prototype.slice() 返回索引变量指示的子数组。

```js
const maxSubArray = (...arr) => {
    let maxSum = -Infinity,
        sum = 0,
        sMax = 0,
        eMax = arr.length - 1,
        s = 0;
    arr.forEach((n,i) => {
        sum += n;
        if(maxSum < sum){
            maxSum = sum;
            sMax = s;
            eMax = i;
        }
        if(sum < 0){
            s = i + 1;
            sum = 0;
        }
    })
    return arr.slice(sMax,eMax + 1);
}
```

> 调用方式:

```js
maxSubArray(-2, 1, -3, 4, -1, 2, 1, -5, 4); // [4, -1, 2, 1]
```

> 应用场景