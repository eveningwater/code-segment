|  标题   | 标签  |
|  ----  | ----  |
| findLast(查找提供的函数为其返回真值的最后一个元素) | array(数组) |

查找提供的函数为其返回真值的最后一个元素。

* 使用 `Array.prototype.filter()` 删除 `handler` 返回错误值的元素。
* 使用 `Array.prototype.pop()` 获取过滤后的数组中的最后一个元素。

> 代码如下:

```js
const findLast = (arr,handler) => arr.filter(handler).pop();
```

> 调用方式:

```js
findLast([1, 2, 3, 4], n => n % 2 === 1); // 3
```

> 应用场景