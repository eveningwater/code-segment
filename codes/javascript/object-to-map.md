|  标题   | 标签  |
|  ----  | ----  |
| objectToMap(将对象转成map数据结构) | object,map(对象，map数据结构) |

将对象转换为map。

* 使用 Object.entries() 将对象转换为键值对数组。
* 使用 Map 构造函数将数组转换为 Map。

```js
const objectToMap = obj => new Map(Object.entries(obj));
```

<div class="code-editor" data-url="codes/javascript/ts/object-to-map.ts" data-language="typescript"></div>

> 调用方式:

```js
objectToMap({a: 1, b: 2}); // Map {'a' => 1, 'b' => 2}
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/object-to-map.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/object-to-map.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/object-to-map.html"></iframe>