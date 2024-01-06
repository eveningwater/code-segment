| 标题                | 标签                       |
| ------------------- | -------------------------- |
| flatten(扁平化数组) | array,recursion(数组,递归) |

将数组展平到指定的深度。

- 使用递归，对于每个深度级别将深度递减 `1`。
- 使用 `Array.prototype.reduce()` 和 `Array.prototype.concat()` 合并元素或数组。
- 基本情况，对于深度等于 `1` 停止递归。
- 省略第二个参数 `depth`，仅展平到 `1` 的深度（单展平）。

> 代码如下:

```js
const flatten = (arr, depth = 1) =>
  arr.reduce(
    (a, v) =>
      a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v),
    []
  );
```

> 调用方式:

```js
flatten([1, [2], 3, 4]); // [1, 2, 3, 4]
flatten([1, [2, [3, [4, 5], 6], 7], 8], 2); // [1, 2, 3, [4, 5], 6, 7, 8]
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/flatten.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/flatten.html"></iframe>
