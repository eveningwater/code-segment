| 标题                      | 标签                       |
| ------------------------- | -------------------------- |
| nonrandom(非重随机数数组) | random,array(随机数，数组) |

非重随机数数组。

- 使用`...`操作符获取并解析参数，取得随机数组的两个边界值。再通过循环生成包括边界值在内的所有整数的数组，接着使用`Math.random()`方法将有序数组乱序排列。

> 代码如下：

```js
const nonrandom = (...num) => {
  if (Array.isArray(num[0])) {
    num = num[0];
  }
  let maxNum = parseInt(num[0]) || 10,
    minNum = parseInt(num[1]) || 1;
  if (minNum === maxNum) {
    return maxNum;
  }
  minNum > maxNum ? ([minNum, maxNum] = [maxNum, minNum]) : '';
  let randomArr = [];
  for (let i = minNum; i <= maxNum; i++) {
    randomArr.push(i);
  }
  let index = randomArr.length;
  while (index) {
    const r = Math.floor(Math.random() * index--);
    [randomArr[r], randomArr[index]] = [randomArr[index], randomArr[r]];
  }
  return randomArr;
}
```

ts代码如下:

<div class="code-editor" data-url="codes/javascript/ts/nonrandom.ts" data-language="typescript"></div>

> 调用方式：

```js
nonrandom(); // [9, 7, 8, 4, 6, 1, 5, 2, 10, 3]
nonrandom(7); // [2, 7, 3, 1, 6, 4, 5]
nonrandom(8, 16); // [16, 15, 11, 10, 13, 9, 14, 12, 8]
nonrandom(['5', '13']); // [9, 10, 5, 11, 12, 13, 7, 6, 8]
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/nonrandom.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/nonrandom.html"></iframe>
