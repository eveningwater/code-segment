|  标题   | 标签  |
|  ----  | ----  |
| cartesianProduct (笛卡尔积) | math,array,beginner(数学，数组，初学者) |

计算两个数组的笛卡尔积。

* 使用 `Array.prototype.reduce()`、`Array.prototype.map()` 和扩展运算符 (...) 从两个数组中生成所有可能的元素对。


> 代码如下:

```js
    const cartesianProduct  = (a,b) => a.reduce((p,x) => [...p,...b.map(y => [x,y])],[]);
```

> 调用方式:

```js
    cartesianProduct(['x', 'y'], [1, 2]);
    // [['x', 1], ['x', 2], ['y', 1], ['y', 2]]
```

> 应用场景