| 标题                                    | 标签                     |
| --------------------------------------- | ------------------------ |
| indexOn(根据提供的属性名将数组转成对象) | array,object(数组，对象) |

从数组中创建一个对象，使用指定的键并将其从每个值中排除。

- 使用 Array.prototype.reduce() 从 arr 创建一个对象。
- 使用对象解构来获取给定键的值和关联的数据，并将键值对添加到对象中。

```js
const indexOn = (arr, key) =>
  arr.reduce((acc, val) => {
    const { [key]: id, ...data } = val;
    acc[id] = data;
    return acc;
  }, {});
```

ts 代码如下:

<div class="code-editor" data-url="codes/javascript/ts/index-on.ts" data-language="typescript"></div>

> 调用方式:

```js
indexOn(
  [
    { id: 10, name: 'apple' },
    { id: 20, name: 'orange' }
  ],
  'id'
);
// { '10': { name: 'apple' }, '20': { name: 'orange' } }
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/index-on.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/index-on.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/index-on.html"></iframe>
