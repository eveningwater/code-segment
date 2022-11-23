|  标题   | 标签  |
|  ----  | ----  |
| mapConsecutive(映射连续元素) | array(数组) |

使用给定函数 fn 映射包含 n 个连续元素的每个块。

* 使用 Array.prototype.slice() 获取从左侧删除 n 个元素的 arr。
* 使用 Array.prototype.map() 和 Array.prototype.slice() 将 fn 应用于 arr 中 n 个连续元素的每个块。

```js
const mapConsecutive = (arr,n,fn) => arr.slice(n - 1).map((v,i) => fn(arr.slice(i,i + n)));
```

> 调用方式:

```js
mapConsecutive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, x => x.join('-'));
// ['1-2-3', '2-3-4', '3-4-5', '4-5-6', '5-6-7', '6-7-8', '7-8-9', '8-9-10'];
```

> 应用场景
