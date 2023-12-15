| 标题                       | 标签                     |
| -------------------------- | ------------------------ |
| UnionReplace(元组元素替代) | extends,infer(继承,推断) |

元组元素替代。

- 如果第二个参数有超过 2 个以上的元素，则使用 infer 推断，并依次递归，如果第一项参数联合类型 T 等于第一项，则返回第二项，否则返回本身，否则返回本身。

> 代码如下:

```ts
type UnionReplace<T, U extends [any, any][]> = U extends [
  infer F extends [any, any],
  ...infer R extends [any, any][]
]
  ? UnionReplace<T extends F[0] ? F[1] : T, R>
  : T;
```

> 使用方式:

```ts
// string -> null
type UnionReplaceRes1 = UnionReplace<number | string, [[string, null]]>; // number | null
// string -> null
type UnionReplaceRes2 = UnionReplace<
  number | string,
  [[string, null], [Date, Function]]
>; // number | null
// Date -> string; Function -> undefined
type UnionReplaceRes3 = UnionReplace<
  Function | Date | object,
  [[Date, string], [Function, undefined]]
>; // undefined | string | object
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/UnionReplace.ts" data-language="typescript"></div>
