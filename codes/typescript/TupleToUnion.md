| 标题                         | 标签                                |
| ---------------------------- | ----------------------------------- |
| TupleToUnion(元组转联合类型) | tuple,union,extends(元组,联合,继承) |

元组转联合类型。

- 使用 Array 泛型，并使用 infer 推断数组项的类型，如果 T 继承这个类型，则返回推断的类型，否则返回 never。

> 代码如下:

```ts
type TupleToUnion<T> = T extends Array<infer Items> ? Items : never;
```

> 使用方式:

```ts
type TupleToUnionArr = ['1', '2', '3'];

type TupleToUnionTest = TupleToUnion<TupleToUnionArr>; // '1' | '2' | '3'
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/TupleToUnion.ts" data-language="typescript"></div>
