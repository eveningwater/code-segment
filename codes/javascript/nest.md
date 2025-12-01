|  标题   | 标签  |
|  ----  | ----  |
| nest(嵌套相互链接的对象) | object,recursion(对象，递归) |

在平面数组中递归嵌套相互链接的对象。

* 使用递归。
* 使用 Array.prototype.filter() 过滤 id 与链接匹配的项目。
* 使用 Array.prototype.map() 将每个项目映射到一个新对象，该对象具有 children 属性，该属性根据哪些项目是当前项目的子项递归嵌套项目。
* 省略第二个参数 id，默认为 null，表示该对象未链接到另一个对象（即它是顶级对象）。
* 省略第三个参数 link，以使用“parent_id”作为默认属性，通过其 id 将对象链接到另一个对象。

```js
const nest = (items,id = null,link = 'parent_id') => items.filter(item => item[link] === id).map(item => ({ ...item,children:nest(items,item.id,link )}));
```

<div class="code-editor" data-url="codes/javascript/ts/nest.ts" data-language="typescript"></div>

> 调用方式:

```js
const comments = [
  { id: 1, parent_id: null },
  { id: 2, parent_id: 1 },
  { id: 3, parent_id: 1 },
  { id: 4, parent_id: 2 },
  { id: 5, parent_id: 4 }
];
const nestedComments = nest(comments);
// [{ id: 1, parent_id: null, children: [...] }]
```

> 应用场景

以下是一个实战<a href="codes/javascript/html/nest.html" target="_blank" rel="noopener noreferrer">示例</a>:

<div class="code-editor" data-url="codes/javascript/html/nest.html" data-language="html"></div>

结果如下:

<iframe src="codes/javascript/html/nest.html"></iframe>