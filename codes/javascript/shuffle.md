| 标题                  | 标签                                     |
| --------------------- | ---------------------------------------- |
| shuffle(随机打乱数组) | array,random,algorithm(数组，随机，算法) |

随机化数组值的顺序，返回一个新数组。

- 使用 [Fisher-Yates 算法](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#Fisher_and_Yates'_original_method)对数组的元素重新排序。

```js
const shuffle = ([...arr]) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};
```

> 调用方式:

```js
const foo = [1, 2, 3];
shuffle(foo); // [2, 3, 1], foo = [1, 2, 3]
```

> 应用场景
