| 标题                                    | 标签        |
| --------------------------------------- | ----------- |
| takeUntil(截取不满足规定条件的元素数组) | array(数组) |

删除数组中的元素，直到传递的函数返回 true。 返回删除的元素。

- 遍历数组，在 Array.prototype.entries() 上使用 for...of 循环，直到函数的返回值为真。
- 使用 Array.prototype.slice() 返回移除的元素。
- 回调函数 fn 接受一个参数，即元素的值。

```js
const takeUntil = (arr, fn) => {
  for (const [i, val] of arr.entries()) {
    if (fn(val)) {
      return arr.slice(0, i);
    }
  }
  return arr;
};
```

> 调用方式:

```js
takeUntil([1, 2, 3, 4], n => n >= 3); // [1, 2]
```

> 应用场景
