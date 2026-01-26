| 标题                    | 标签                    |
| ----------------------- | ----------------------- |
| pluck(对象数组中提取值) | array,object(数组,对象) |

将对象数组转换为与指定键对应的值数组。

- 使用 Array.prototype.map() 将对象数组映射到每个对象的键值。

```js
const pluck = (arr, k) => arr.map(i => i[k]);
```

<div class="code-editor" data-url="codes/javascript/ts/pluck.ts" data-language="typescript"></div>

> 调用方式:

```js
const simpsons = [
  { name: 'lisa', age: 8 },
  { name: 'homer', age: 36 },
  { name: 'marge', age: 34 },
  { name: 'bart', age: 10 }
];
pluck(simpsons, 'age'); // [8, 36, 34, 10]
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/pluck.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/pluck.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/pluck.html"></iframe>