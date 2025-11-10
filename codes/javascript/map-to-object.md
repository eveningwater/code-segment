|  标题   | 标签  |
|  ----  | ----  |
| mapToObject(映射转对象) | object(对象) |

将 Map 转换为对象。

* 使用 Map.prototype.entries() 将 Map 转换为键值对数组。
* 使用 Object.fromEntries() 将数组转换为对象。

```js
const mapToObject = map => Object.fromEntries(map.entries());
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/map-to-object.ts" data-language="typescript"></div>

> 调用方式:

```js
mapToObject(new Map([['a', 1], ['b', 2]])); // {a: 1, b: 2}
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/map-to-object.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/map-to-object.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/map-to-object.html"></iframe>