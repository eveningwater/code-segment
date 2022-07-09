|  标题   | 标签  |
|  ----  | ----  |
| filterNonUnique(数组去重) | array(数组) |

创建一个过滤掉非唯一值的数组。

* 使用 `Set` 构造函数和展开运算符 (`...`) 在 `arr` 中创建唯一值数组。
* 使用 `Array.prototype.filter()` 创建一个仅包含唯一值的数组。

> 代码如下:

```js
const filterNonUnique = arr => [...new Set(arr)].filter(i => arr.indexOf(i) === arr.lastIndexOf(i));
```

> 调用方式:

```js
filterNonUnique([1, 2, 2, 3, 4, 4, 5]); // [1, 3, 5]
```

> 应用场景