| 标题                  | 标签                     |
| --------------------- | ------------------------ |
| Pop(删除数组最后一项) | array,extends(数组,继承) |

删除数组最后一项。

- T 继承任意数组类型，使用 infer 关键字推断数组项，前面的数组项需要使用“...”展开运算符展开,最后返回前面展开的所有数组项。

> 代码如下:

```ts
type Pop<T extends any[]> = T extends [...infer Rest, infer _] ? Rest : never;
```

> 使用方式:

```ts
type popArr1 = ['a', 'b', 'c', 'd'];
type popArr2 = [3, 2, 1];

type PopRe1 = Pop<popArr1>; // ['a', 'b', 'c']
type PopRe2 = Pop<popArr2>; // [3, 2]
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/Pop.ts" data-language="typescript"></div>
