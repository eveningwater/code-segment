|  标题   | 标签  |
|  ----  | ----  |
| compact(过滤数组) | array,beginner(数组，初学者) |

从数组中删除转换为布尔值为false值。

* 使用 `Array.prototype.filter()` 过滤掉转换为布尔值是false的值（false、null、0、""、undefined 和 NaN）。

> 代码如下:

```js
const compact = arr => arr.filter(Boolean);
```

> 调用方式:

```js
compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]); 
// [ 1, 2, 3, 'a', 's', 34 ]    
```

> 应用场景