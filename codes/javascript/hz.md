| 标题             | 标签           |
| ---------------- | -------------- |
| hz(赫兹函数频率) | function(函数) |

测量每秒执行函数的次数（赫兹/赫兹）。

- 使用 performance.now() 获取迭代循环前后的毫秒差值，以计算执行函数迭代次数所用的时间。
- 通过将毫秒转换为秒并将其除以经过的时间，返回每秒的周期数。
- 省略第二个参数，迭代，以使用 100 次迭代的默认值。

```js
const hz = (handler, iterations = 100) => {
  const before = performance.now();
  for (let i = 0; i < iterations; i++) {
    handler();
  }
  return (1000 * iterations) / (performance.now() - before);
};
```

> 调用方式:

```js
const numbers = Array(10000)
  .fill()
  .map((_, i) => i);

const sumReduce = () => numbers.reduce((acc, n) => acc + n, 0);
const sumForLoop = () => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  return sum;
};

Math.round(hz(sumReduce)); // 572
Math.round(hz(sumForLoop)); // 4784
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/hz.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/hz.html"></iframe>
