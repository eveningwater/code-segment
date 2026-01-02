|  标题   | 标签  |
|  ----  | ----  |
| omitBy(通过给定函数删除对象属性) | object(对象) |

省略与给定函数返回 falsy 的对象的键对应的键值对。

* 使用 Object.keys() 和 Array.prototype.filter() 删除 fn 返回真值的键。
* 使用 Array.prototype.reduce() 将过滤后的键转换回具有相应键值对的对象。
* 使用两个参数调用回调函数：(value, key)。

```js
const omitBy = (obj,fn) => Object.keys(obj).filter(k => !fn(obj[k],k)).reduce((acc,key) => (acc[key] = obj[key],acc),{});
```

<div class="code-editor" data-url="codes/javascript/ts//omit-by.ts" data-language="typescript"></div>

> 调用方式:

```js
omitBy({ a: 1, b: '2', c: 3 }, x => typeof x === 'number'); // { b: '2' }
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/omit-by.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/omit-by.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/omit-by.html"></iframe>