| 标题                                       | 标签                                 |
| ------------------------------------------ | ------------------------------------ |
| allEqual(检查一个数组中是否每个元素都相等) | array,intermediate(数组，两者之间的) |

检查在一个数组中是否所有元素都相等。

- 使用`Array.prototype.every()`检查在数组中的所有元素是否和第一个元素相等。
- 使用严格的比较运算符比较数组中的元素，该运算符不考虑`NaN`自不等式。

> 代码如下:

```js
const allEqual = arr => arr.every(item => item === arr[0]);
```

> 调用方式:

```js
allEqual([1, 2, 3, 4, 5, 6]); // false
allEqual([1, 1, 1, 1]); // true
```

> 应用场景

<div class="code-editor" data-url="codes/javascript/html/allEqual.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/allEqual.html"></iframe>
