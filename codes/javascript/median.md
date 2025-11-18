| 标题                         | 标签                   |
| ---------------------------- | ---------------------- |
| median(获取数字数组的中位数) | math,array(数学，数组) |

计算数字数组的[中位数](https://baike.baidu.com/item/%E4%B8%AD%E4%BD%8D%E6%95%B0/3087401?fr=aladdin)。

- 找到数组的中间位置，使用 Array.prototype.sort() 对值进行排序。
- 如果 Array.prototype.length 为奇数，则返回中点的数字，否则返回中间两个数字的平均值。

```js
const median = (arr) => {
  const mid = Math.floor(arr.length / 2),
    newArr = arr.sort((a, b) => a - b);
  return arr.length % 2 !== 0
    ? newArr[mid]
    : (newArr[mid - 1] + newArr[mid]) / 2;
};
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/median.ts" data-language="typescript"></div>

> 调用方式:

```js
median([5, 6, 50, 1, -5]); // 5
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/median.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/median.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/median.html"></iframe>