| 标题              | 标签                     |
| ----------------- | ------------------------ |
| groupBy(元素分组) | array,object(数组，对象) |

根据给定的函数对数组的元素进行分组。

- 使用 Array.prototype.map() 将数组的值映射到函数或属性名称。
- 使用 Array.prototype.reduce() 创建一个对象，其中的键是从映射的结果中生成的。

```js
const groupBy = (arr, handler) =>
  arr
    .map(typeof handler === 'function' ? handler : val => val[handler])
    .reduce((acc, val, i) => {
      acc[val] = (acc[val] || []).concat(arr[i]);
      return acc;
    }, {});
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/group-by.ts" data-language="typescript"></div>

> 调用方式:

```js
groupBy([6.1, 4.2, 6.3], Math.floor); // {4: [4.2], 6: [6.1, 6.3]}
groupBy(['one', 'two', 'three'], 'length'); // {3: ['one', 'two'], 5: ['three']}
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/group-by.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/group-by.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/group-by.html"></iframe>
