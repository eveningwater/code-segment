|  标题   | 标签  |
|  ----  | ----  |
| hasOne(匹配数组是否含有满足给定函数条件的一个数组项) | array(数组) |

检查数组是否只有一个与给定函数匹配的值。

* 结合使用 Array.prototype.filter() 和 handler 来查找所有匹配的数组元素。
* 使用 Array.prototype.length 检查是否只有一个元素与 handler 匹配。

```js
const hasOne = (arr,handler) => arr.filter(handler).length === 1; 
```

> 调用方式:

```js
hasOne([1, 2], x => x % 2); // true
hasOne([1, 3], x => x % 2); // false
```


> 应用场景















