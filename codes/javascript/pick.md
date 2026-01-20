|  标题   | 标签  |
|  ----  | ----  |
| pick(从对象中选取给定的键值对) | object(对象) |

从对象中选择与给定键对应的键值对。

* 如果对象中存在键，则使用 Array.prototype.reduce() 将筛选/选择的键转换回具有相应键值对的对象。

```js
const pick = (obj,arr) => arr.reduce((acc,key) => (key in obj && (acc[key] = obj[key]),acc),{});
```

<div class="code-editor" data-url="codes/javascript/ts/pick.ts" data-language="typescript"></div>

> 调用方式:

```js
pick({ a: 1, b: '2', c: 3 }, ['a', 'c']); // { 'a': 1, 'c': 3 }
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/pick.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/pick.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/pick.html"></iframe>