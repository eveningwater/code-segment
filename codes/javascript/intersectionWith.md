|  标题   | 标签  |
|  ----  | ----  |
| intersectionBy(求数组交集(基于函数)) | array(数组) |

使用提供的比较器函数返回两个数组中存在的元素。

* 将 Array.prototype.filter() 和 Array.prototype.findIndex() 与提供的比较器结合使用来确定相交值。

```js
const intersectionWith = (a,b,handler) => a.filter(x => b.findIndex(y => handler(x,y)) !== -1);
```

> 调用方式:

```js
intersectionWith(
  [1, 1.2, 1.5, 3, 0],
  [1.9, 3, 0, 3.9],
  (a, b) => Math.round(a) === Math.round(b)
); // [1.5, 3, 0]
```


> 应用场景


