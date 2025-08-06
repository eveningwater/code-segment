| 标题                              | 标签                     |
| --------------------------------- | ------------------------ |
| indexBy(基于函数将数组转换成对象) | array,object(数组，对象) |

从数组创建对象，使用函数将每个值映射到键。

- 使用 Array.prototype.reduce() 从 arr 创建一个对象。
- 将 fn 应用于 arr 的每个值以生成一个键并将键值对添加到对象中。

```js
const indexBy = (arr, handler) =>
  arr.reduce((obj, v, i) => {
    obj[handler(v, i, arr)] = v;
    return obj;
  }, {});
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/index-by.ts" data-language="typescript"></div>

> 调用方式:

```js
indexBy(
  [
    { id: 10, name: 'apple' },
    { id: 20, name: 'orange' }
  ],
  x => x.id
);
// { '10': { id: 10, name: 'apple' }, '20': { id: 20, name: 'orange' } }
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/index-by.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/index-by.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/index-by.html"></iframe>
