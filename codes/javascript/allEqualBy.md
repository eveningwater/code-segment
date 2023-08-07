| 标题                                                       | 标签                                 |
| ---------------------------------------------------------- | ------------------------------------ |
| allEqual(根据提供的回调函数来检查数组中的所有元素是否相等) | array,intermediate(数组，两者之间的) |

根据提供的回调函数来检查数组中的所有元素是否相等。

- 为第一个元素`arr`提供回调函数`fn`。
- 使用`Array.prototype.every()`检查`fn`处理的第一个元素是否与数组中的所有元素相同。
- 使用严格的比较运算符比较数组中的元素，该运算符不考虑`NaN`自不等式。

> 代码如下:

```js
const allEqualBy = (arr, fn) => arr.every(item => item === fn(arr[0]));
```

> 调用方式:

```js
allEqualBy([1.1, 1.2, 1.3], Math.round); // true
allEqualBy([1.1, 1.3, 1.6], Math.round); // false
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/allEqualBy.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/allEqualBy.html"></iframe>
