| 标题                               | 标签        |
| ---------------------------------- | ----------- |
| takeRightWhile(截取满足条件的数组) | array(数组) |

从数组末尾删除元素，直到传递的函数返回 false。 返回删除的元素。

- 使用扩展运算符 (...) 和 Array.prototype.reverse() 创建数组的反向副本。
- 遍历反向副本，在 Array.prototype.entries() 上使用 for...of 循环，直到函数的返回值为 falsy。
- 使用 Array.prototype.slice() 返回移除的元素。
- 回调函数 fn 接受一个参数，即元素的值。

```js
const takeRightWhile = (arr, fn) => {
  for (const [i, val] of [...arr].reverse().entries())
    if (!fn(val)) return i === 0 ? [] : arr.slice(-i);
  return arr;
};
```

> 调用方式:

```js
takeRightWhile([1, 2, 3, 4], n => n >= 3); // [3, 4]
```

> 应用场景
