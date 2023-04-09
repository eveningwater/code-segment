| 标题                                         | 标签        |
| -------------------------------------------- | ----------- |
| shank(实现数组的 splice 方法,但不改变原数组) | array(数组) |

与 [Array.prototype.splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) 具有相同的功能，但返回一个新数组而不是改变原始数组。

- 在删除现有元素和/或添加新元素后，使用 Array.prototype.slice() 和 Array.prototype.concat() 获取包含新内容的数组。
- 省略第二个参数 index，从 0 开始。
- 省略第三个参数 delCount，以删除 0 个元素。
- 省略第四个参数，元素，以便不添加任何新元素。

```js
const shank = (arr, index = 0, delCount = 0, ...elements) =>
  arr
    .slice(0, index)
    .concat(elements)
    .concat(arr.slice(index + delCount));
```

> 调用方式:

```js
const names = ['alpha', 'bravo', 'charlie'];
const namesAndDelta = shank(names, 1, 0, 'delta');
// [ 'alpha', 'delta', 'bravo', 'charlie' ]
const namesNoBravo = shank(names, 1, 1); // [ 'alpha', 'charlie' ]
console.log(names); // ['alpha', 'bravo', 'charlie']
```

> 应用场景
