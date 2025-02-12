| 标题                          | 标签                        |
| ----------------------------- | --------------------------- |
| getArrayDepth(获取数组的维度) | array,recursion(数组，递归) |

获取给定数组的维度。

- 使用 `Array.isArray` 判断是否是一个数组，不是则返回维度为0。
- 如果长度为0，代表是空数组[],则返回数组维度为1。
- 初始化一个维度1，迭代数组，然后递归遍历数组每一项，将每一项的维度加1，然后取两者之间的最大值。

> 代码如下:

```js
const getArrayDepth = (arr) => {
    if (!Array.isArray(arr)) {
      return 0;
    }
    if (arr.length === 0) {
      return 1;
    }
    let maxDepth = 1;
    for (let i = 0; i < arr.length; i++) {
      const depth = getArrayDepth(arr[i]);
      maxDepth = Math.max(maxDepth, depth + 1);
    }
    return maxDepth;
}
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/get-array-depth.ts" data-language="typescript"></div>

> 调用方式:

```js
getArrayDepth([1,2,3]); // 1
getArrayDepth([1,2,3,[1,2,3]]); // 2
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/get-array-depth.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/get-array-depth.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/get-array-depth.html"></iframe>
