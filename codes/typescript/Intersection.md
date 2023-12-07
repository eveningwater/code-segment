| 标题                           | 标签                     |
| ------------------------------ | ------------------------ |
| Intersection(求多个数组的交集) | extends,infer(继承,推断) |

求多个数组的交集。

- 使用 infer 推断数组的每一项，从第一项开始，如果是数组则返回每一数组项，否则返回第一项，与剩余项求交集,否则返回 unknown。

> 代码如下:

```ts
type Intersection<T extends any[]> = T extends [infer F, ...infer R]
  ? (F extends any[] ? F[number] : F) & Intersection<R>
  : unknown;
```

> 使用方式:

```ts
type IntersectionRes1 = Intersection<[[1, 2], [2, 3], [2, 2]]>; //  2
type IntersectionRes2 = Intersection<[[1, 2, 3], [2, 3, 4], [2, 2, 3]]>; //  2 | 3
type IntersectionRes3 = Intersection<[[1, 2], [3, 4], [5, 6]]>; //  never
type IntersectionRes4 = Intersection<[[1, 2, 3], [2, 3, 4], 3]>; //  3
type IntersectionRes5 = Intersection<[[1, 2, 3], 2 | 3 | 4, 2 | 3]>; //  2 | 3
type IntersectionRes6 = Intersection<[[1, 2, 3], 2, 3]>; //  never
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/Intersection.ts" data-language="typescript"></div>
