| 标题                | 标签           |
| ------------------- | -------------- |
| timeTaken(消耗时间) | function(函数) |

测量函数执行所需的时间。

- 使用 console.time() 和 console.timeEnd() 测量开始时间和结束时间之间的差异，以确定回调执行的时间。

```js
const timeTaken = callback => {
  console.time('timeTaken');
  const r = callback();
  console.timeEnd('timeTaken');
  return r;
};
```

> 调用方式:

```js
timeTaken(() => Math.pow(2, 10)); // 1024, (logged): timeTaken: 0.02099609375ms
```

> 应用场景
