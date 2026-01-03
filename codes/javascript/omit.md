|  标题   | 标签  |
|  ----  | ----  |
| omit(通过给定数组键值删除对象属性) | object(对象) |

省略与对象中给定键对应的键值对。

* 使用 Object.keys()、Array.prototype.filter() 和 Array.prototype.includes() 删除提供的键。
* 使用 Array.prototype.reduce() 将过滤后的键转换回具有相应键值对的对象。

```js
const omit = (obj,arr = []) => Object.keys(obj).filter(k => !arr.includes(k)).reduce((acc,item) => (acc[item] = obj[item],acc),{});
```

<div class="code-editor" data-url="codes/javascript/ts/omit.ts" data-language="typescript"></div>

> 调用方式:

```js
omit({ a: 1, b: '2', c: 3 }, ['b']); // { 'a': 1, 'c': 3 }
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/omit.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/omit.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/omit.html"></iframe>