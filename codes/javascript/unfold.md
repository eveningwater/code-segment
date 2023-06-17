| 标题                 | 标签                      |
| -------------------- | ------------------------- |
| unfold(未折叠的数组) | function,array(函数,数组) |

使用迭代器函数和初始种子值构建一个数组。

- 使用 while 循环和 Array.prototype.push() 重复调用该函数，直到它返回 false。
- 迭代器函数接受一个参数（种子），并且必须始终返回一个包含两个元素（[value, nextSeed]）的数组，否则返回 false 以终止。

```js
const unfold = (fn, seed) => {
  let result = [],
    val = [null, seed];
  while ((val = fn(val[1]))) result.push(val[0]);
  return result;
};
```

> 调用方式:

```js
var f = n => (n > 50 ? false : [-n, n + 10]);
unfold(f, 10); // [-10, -20, -30, -40, -50]
```

> 应用场景
