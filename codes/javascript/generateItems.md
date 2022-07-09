|  标题   | 标签  |
|  ----  | ----  |
| generateItems(使用给定函数生成给定数量元素的数组) | array,function(数组,函数) |

使用给定函数生成具有给定数量项目的数组。

* 使用 Array.from() 创建一个特定长度的空数组，使用每个新创建元素的索引调用 handler。
* 回调接受一个参数 - 每个元素的索引。

```js
const generateItems = (n,handler) => Array.from({ length:n },(_,i) => handler(i));
```

> 调用方式:

```js
generateItems(10, Math.random);
// [0.21, 0.08, 0.40, 0.96, 0.96, 0.24, 0.19, 0.96, 0.42, 0.70]
```

> 应用场景




