| 标题                        | 标签        |
| --------------------------- | ----------- |
| pullAtValue(根据值过滤数组) | array(数组) |

改变原始数组以过滤掉指定的值。 返回删除的元素。

- 使用 Array.prototype.filter() 和 Array.prototype.includes() 提取不需要的值。
- 设置 Array.prototype.length 以通过将其长度重置为 0 来改变传入的数组。
- 使用 Array.prototype.push() 仅使用拉取的值重新填充它。
- 使用 Array.prototype.push() 来跟踪提取的值。

```js
const pullAtValue = (arr, pullArr) => {
  let removed = [],
    pushToRemove = arr.forEach((v, i) =>
      pullArr.includes(v) ? removed.push(v) : v
    ),
    mutateTo = arr.filter((v, i) => !pullArr.includes(v));
  arr.length = 0;
  mutateTo.forEach(v => arr.push(v));
  return removed;
};
```

<div class="code-editor" data-url="codes/javascript/ts/pull-at-value.ts" data-language="typescript"></div>

> 调用方式:

```js
let myArray = ['a', 'b', 'c', 'd'];
let pulled = pullAtValue(myArray, ['b', 'd']);
// myArray = [ 'a', 'c' ] , pulled = [ 'b', 'd' ]
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/pull-at-value.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/pull-at-value.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/pull-at-value.html"></iframe>