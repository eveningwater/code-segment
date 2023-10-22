| 标题                          | 标签                     |
| ----------------------------- | ------------------------ |
| PermutationsOfTuple(排列元组) | extends,infer(继承,推断) |

排列元组。

- 创建第二个参数 A 用来存储结果，默认是空数组。
- 使用 infer 从数组第一项开始推断，然后将第一项和剩余项递归展开合并并和剩余项 R 联合，如果 R 为空数组则和 never 联合，否则继续递归数组剩余项，否则返回空数组。

> 代码如下:

```ts
type PermutationsOfTuple<
  T extends unknown[],
  A extends unknown[] = []
> = T extends [infer F, ...infer R]
  ?
      | [F, ...PermutationsOfTuple<[...R, ...A]>]
      | (R extends [] ? never : PermutationsOfTuple<R, [...A, F]>)
  : [];
```

> 使用方式:

```ts
type PermutationsOfTupleRes1 = PermutationsOfTuple<[]>; // []
type PermutationsOfTupleRes2 = PermutationsOfTuple<[any]>; // [any]
type PermutationsOfTupleRes3 = PermutationsOfTuple<[any, unknown]>; // [any, unknown] | [unknown, any]
type PermutationsOfTupleRes4 = PermutationsOfTuple<[any, unknown, never]>;
//   [any, unknown, never]
//   | [unknown, any, never]
//   | [unknown, never, any]
//   | [any, never, unknown]
//   | [never, any, unknown]
//   | [never, unknown, any]
type PermutationsOfTupleRes5 = PermutationsOfTuple<[1, number, unknown]>;
//   [1, number, unknown]
//     | [1, unknown, number]
//     | [number, 1, unknown]
//     | [unknown, 1, number]
//     | [number, unknown, 1]
//     | [unknown, number, 1]
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/PermutationsOfTuple.ts" data-language="typescript"></div>
