| 标题                       | 标签          |
| -------------------------- | ------------- |
| MergeAll(合并所有接口对象) | extends(继承) |

合并所有接口对象。

- 创建一个结果对象存储结果，并且第一个参数应该是任意对象数组。
- 如果任意对象数组等价于第一项和剩余对象数组组成的数组（使用 infer 推断），则递归剩余对象数组项，并将当前结果对象中的属性排除，和第一个对象做合并。
- 否则直接排除当前结果对象中的 never 属性。

> 代码如下:

```ts
type MergeAll<T extends Record<string, unknown>[], Res = {}> = T extends [
  infer F,
  ...infer R extends Record<string, unknown>[]
]
  ? MergeAll<
      R,
      Omit<Res, keyof F> & {
        [P in keyof F]: P extends keyof Res ? F[P] | Res[P] : F[P];
      }
    >
  : Omit<Res, never>;
```

> 使用方式:

```ts
type MergeAllRes1 = MergeAll<[]>; // {}
type MergeAllRes2 = MergeAll<[{ a: 1 }]>; // { a: 1 }
type MergeAllRes3 = MergeAll<[{ a: string }, { a: string }]>; // { a: string }
type MergeAllRes4 = MergeAll<[{}, { a: string }]>; //{ a: string }
type MergeAllRes5 = MergeAll<[{ a: 1 }, { c: 2 }]>; // { a: 1; c: 2 }
type MergeAllRes6 = MergeAll<[{ a: 1; b: 2 }, { a: 2 }, { c: 3 }]>; // { a: 1 | 2; b: 2; c: 3 }
type MergeAllRes7 = MergeAll<[{ a: 1 }, { a: number }]>; // { a: number }
type MergeAllRes8 = MergeAll<[{ a: number }, { a: 1 }]>; // { a: number }
type MergeAllRes9 = MergeAll<[{ a: 1 | 2 }, { a: 1 | 3 }]>; // { a: 1 | 2 | 3 }
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/MergeAll.ts" data-language="typescript"></div>
