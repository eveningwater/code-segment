| 标题                                                 | 标签        |
| ---------------------------------------------------- | ----------- |
| findLastN(查找提供的函数为其返回真值的最后 n 个元素) | array(数组) |

查找提供的函数为其返回真值的最后 n 个元素。

- 使用 `for` 循环为 `arr` 的每个元素执行提供的匹配器。
- 使用 `Array.prototype.unshift()` 将元素添加到结果数组并在其长度等于 `n` 时返回它们。

> 代码如下:

```js
const findLastN = (arr, matcher, n = 1) => {
  const res = [];
  for (let i = arr.length - 1; i > 0; i--) {
    const el = arr[i];
    const match = matcher(el, i, arr);
    if (match) {
      res.unshift(el);
    }
    if (res.length === n) {
      return res;
    }
  }
  return res;
};
```

> 调用方式:

```js
findLastN([1, 2, 4, 6], n => n % 2 === 0, 2); // [4, 6]
findLastN([1, 2, 4, 6], n => n % 2 === 0, 5); // [2, 4, 6]
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/findLastN.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/findLastN.html"></iframe>
