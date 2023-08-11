| 标题               | 标签                     |
| ------------------ | ------------------------ |
| Last(数组最后一项) | array,extends(数组,继承) |

数组最后一项。

- T 继承任意数组类型，使用 infer 关键字推断数组项，前面的数组项需要使用“...”展开运算符展开,最后返回最后一项。

> 代码如下:

```ts
type Last<T extends any[]> = T extends [...infer _, infer L] ? L : never;
```

> 使用方式:

```ts
type arr1 = ['a', 'b', 'c'];
type arr2 = [3, 2, 1];

type tail1 = Last<arr1>; // 'c'
type tail2 = Last<arr2>; // 1
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/Last.ts" data-language="typescript"></div>
