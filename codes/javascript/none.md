|  标题   | 标签  |
|  ----  | ----  |
| none(检查所有数组项是否为false) | array(数组) |

检查提供的谓词函数是否为集合中的所有元素返回 false。

* 使用 Array.prototype.some() 来测试集合中的任何元素是否基于 fn 返回 true。
* 省略第二个参数 fn，默认使用布尔值。

```js
const none = (arr,fn = Boolean) => !arr.some(fn);
```

> 调用方式:

```js
none([0, 1, 3, 0], x => x == 2); // true
none([0, 0, 0]); // true
```

> 应用场景