|  标题   | 标签  |
|  ----  | ----  |
| initializeNDArray(生成给定值的n维数组) | array,recursion(数组,递归) |

创建具有给定值的 n 维数组。

* 使用递归。
* 使用 Array.from()、Array.prototype.map() 生成行，其中每个行都是使用 initializeNDArray() 初始化的新数组。

```js
const initializeNDArray = (val,...args) => args.length === 0 ? val : Array.from({ length: args[0] }).map(() => initializeNDArray(val,...args.slice(1)));
```

> 调用方式:

```js
initializeNDArray(1, 3); // [1, 1, 1]
initializeNDArray(5, 2, 2, 2); // [[[5, 5], [5, 5]], [[5, 5], [5, 5]]]
```

> 应用场景

<iframe src="codes/javascript/html/initializeNDArray.html"></iframe>







