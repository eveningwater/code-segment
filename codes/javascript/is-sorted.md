| 标题                       | 标签        |
| -------------------------- | ----------- |
| isSorted(数值数组是否排序) | array(数组) |

检查数值数组是否已排序。

- 计算第一对相邻数组元素的排序方向。
- 如果给定数组为空、只有一个元素或任何一对相邻数组元素的方向发生变化，则返回 0。
- 使用 Math.sign() 将方向的最终值转换为 -1（降序）或 1（升序）。

```js
const isSorted = arr => {
  if (!Array.isArray(arr) || arr.length <= 1) {
    return 0;
  }
  const direction = arr[1] - arr[0];
  for (let i = 2; i < arr.length; i++) {
    if ((arr[i] - arr[i - 1]) * direction < 0) {
      return 0;
    }
  }
  return Math.sign(direction);
};
```

ts代码如下:

<div class="code-editor" data-url="codes/javascript/ts/is-sorted.ts" data-language="typescript"></div>

> 调用方式:

```js
isSorted([0, 1, 2, 2]); // 1
isSorted([4, 3, 2]); // -1
isSorted([4, 3, 5]); // 0
isSorted([4]); // 0
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/is-sorted.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/is-sorted.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/is-sorted.html"></iframe>
