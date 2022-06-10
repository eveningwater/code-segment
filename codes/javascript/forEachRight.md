|  标题   | 标签  |
|  ----  | ----  |
| forEachRight(倒转遍历数组) | array(数组) |

从数组的最后一个元素开始，为每个数组元素执行一次提供的函数。

* 使用 `Array.prototype.slice()` 克隆给定的数组，使用 `Array.prototype.reverse()` 反转它。
* 使用 `Array.prototype.forEach()` 遍历反转数组。

```js
const forEachRight = (arr,callback) => arr.slice().reverse().forEach(callback);
```

> 调用方式:

```js
forEachRight([1, 2, 3, 4], val => console.log(val)); // '4', '3', '2', '1'
```

> 应用场景