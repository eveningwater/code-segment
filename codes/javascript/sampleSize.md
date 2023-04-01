| 标题                                  | 标签                     |
| ------------------------------------- | ------------------------ |
| sampleSize(随机从数组中取出 n 个元素) | array,random(数组，随机) |

从数组的唯一键处获取 n 个随机元素，直到数组的大小。

- 使用 [Fisher-Yates 算法](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle)打乱数组。
- 使用 Array.prototype.slice() 获取前 n 个元素。
- 省略第二个参数 n，以仅从数组中随机获取一个元素。

```js
const sampleSize = ([...arr], n = 1) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr.slice(0, n);
};
```

> 调用方式:

```js
sampleSize([1, 2, 3], 2); // [3, 1]
sampleSize([1, 2, 3], 4); // [2, 3, 1]
```

> 应用场景
