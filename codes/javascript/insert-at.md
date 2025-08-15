| 标题                               | 标签        |
| ---------------------------------- | ----------- |
| insertAt(往数组特定索引中插入元素) | array(数组) |

改变原始数组以在指定索引之后插入给定值。

- 使用具有适当索引和删除计数为 0 的 Array.prototype.splice()，分散要插入的给定值。

```js
const insertAt = (arr, i, ...v) => {
  if (!Array.isArray(arr)) {
    return console.error('First argument should be an array!');
  }
  if (typeof i !== 'number' || (i | 0) !== i) {
    return console.error('Second argument should be an inter index!');
  }
  arr.splice(i + 1, 0, ...v);
  return arr;
};
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/insert-at.ts" data-language="typescript"></div>

> 调用方式:

```js
let myArray = [1, 2, 3, 4];
insertAt(myArray, 2, 5); // myArray = [1, 2, 3, 5, 4]

let otherArray = [2, 10];
insertAt(otherArray, 0, 4, 6, 8); // otherArray = [2, 4, 6, 8, 10]
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/insert-at.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/insert-at.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/insert-at.html"></iframe>
