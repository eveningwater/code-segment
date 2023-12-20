| 标题                                              | 标签        |
| ------------------------------------------------- | ----------- |
| findFirstN(查找根据回调函数返回真值的前 n 个元素) | array(数组) |

查找提供的函数为其返回真值的前 `n` 个元素。

- 使用 `for...in` 循环为 `arr` 的每个元素执行提供的匹配器。
- 使用 `Array.prototype.push()` 将元素附加到结果数组并在其长度等于 `n` 时返回它们。

> 代码如下:

```js
const findFirstN = (arr, matcher, n = 1) => {
  const res = [];
  for (const i in arr) {
    const el = arr[i];
    if (matcher(el, i, arr)) {
      res.push(el);
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
findFirstN([1, 2, 4, 6], n => n % 2 === 0, 2); // [2, 4]
findFirstN([1, 2, 4, 6], n => n % 2 === 0, 5); // [2, 4, 6]
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/findFirstN.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/findFirstN.html"></iframe>
