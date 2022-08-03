|  标题   | 标签  |
|  ----  | ----  |
| hasMany(匹配数组是否含有满足给定函数条件的数组项) | array(数组) |

检查数组是否有多个与给定函数匹配的值。

* 结合使用 Array.prototype.filter() 和 handler 来查找所有匹配的数组元素。
* 使用 Array.prototype.length 检查是否有多个元素匹配 handler。

```js
const hasMany = (arr,handler) => arr.filter(handler).length > 1; 
```

> 调用方式:

```js
hasMany([1, 3], x => x % 2); // true
hasMany([1, 2], x => x % 2); // false
```


> 应用场景















