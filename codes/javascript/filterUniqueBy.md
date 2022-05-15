|  标题   | 标签  |
|  ----  | ----  |
| filterUniqueBy(获取数组的交集(根据回调函数)) | array(数组) |

根据提供的比较器函数，创建一个过滤掉唯一值的数组。

* 使用 `Array.prototype.filter()` 和 `Array.prototype.every()` 根据比较器函数 `handler` 创建一个仅包含非唯一值的数组。
* 比较器函数有四个参数：被比较的两个元素的值及其索引。

> 代码如下:

```js
const filterUniqueBy = (arr,handler) => arr.filter((v,i) => arr.some((x,j) => (i !== j) === handler(v,x,i,j)));
```

> 调用方式:

```js
filterUniqueBy(
  [
    { id: 0, value: 'a' },
    { id: 1, value: 'b' },
    { id: 2, value: 'c' },
    { id: 3, value: 'd' },
    { id: 0, value: 'e' }
  ],
  (a, b) => a.id == b.id
); // [ { id: 0, value: 'a' }, { id: 0, value: 'e' } ]
```

> 应用场景