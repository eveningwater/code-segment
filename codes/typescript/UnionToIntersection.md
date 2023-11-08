| 标题                            | 标签                     |
| ------------------------------- | ------------------------ |
| UnionToIntersection(并集到交集) | extends,infer(继承,推断) |

并集到交集。

- 类型参数 T 如果是任意类型，则构造成函数，参数为类型 T，返回值为任意类型，并使用 infer 推断参数类型 I,推断出则返回 I,否则返回 never。

> 代码如下:

```ts
type UnionToIntersection<T> = (
  T extends any ? (args: T) => any : never
) extends (args: infer I) => any
  ? I
  : never;
```

> 使用方式:

```ts
type UnionToIntersectionRes1 = UnionToIntersection<'foo' | 42 | true>; // 'foo' & 42 & true <=> never
type UnionToIntersectionRes2 = UnionToIntersection<
  (() => 'foo') | ((i: 42) => true)
>; // (() => 'foo') & ((i: 42) => true)
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/UnionToIntersection.ts" data-language="typescript"></div>
