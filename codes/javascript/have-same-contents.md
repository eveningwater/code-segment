| 标题                                               | 标签        |
| -------------------------------------------------- | ----------- |
| haveSameContents(判断两个数组是否含有相同的数组项) | array(数组) |

无论顺序如何，检查两个数组是否包含相同的元素。

- 对从两个数组的值创建的 Set 使用 for...of 循环。
- 使用 Array.prototype.filter() 比较两个数组中每个不同值的出现次数。
- 如果计数与任何元素都不匹配，则返回 false，否则返回 true。

```js
const haveSameContents = (a, b) => {
  for (const v of new Set([...a, ...b])) {
    if (a.filter(e => e === v).length !== b.filter(e => e === v).length) {
      return false;
    }
  }
  return true;
};
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/have-same-contents.ts" data-language="typescript"></div>

> 调用方式:

```js
haveSameContents([1, 2, 4], [2, 4, 1]); // true
haveSameContents([1, 2, 4], [2, 4]); // false
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/have-same-contents.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/have-same-contents.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/have-same-contents.html"></iframe>
