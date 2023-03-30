| 标题                              | 标签                         |
| --------------------------------- | ---------------------------- |
| runPromisesInSeries(连续运行期约) | function,promise(函数，期约) |

连续运行期约。

- 使用 Array.prototype.reduce() 创建承诺链，其中每个承诺在解决后返回下一个承诺。

```js
const runPromisesInSeries = ps =>
  ps.reduce((p, next) => p.then(next), Promise.resolve());
```

> 调用方式:

```js
const delay = d => new Promise(r => setTimeout(r, d));
runPromisesInSeries([() => delay(1000), () => delay(2000)]);
// Executes each promise sequentially, taking a total of 3 seconds to complete
```

> 应用场景
