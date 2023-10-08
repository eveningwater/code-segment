| 标题                      | 标签                      |
| ------------------------- | ------------------------- |
| Subsequence(数组所有组合) | extends,array(继承，数组) |

数组所有组合。

- 添加一个额外的参数存储结果，使用 infer 推断如果第一个参数 T 满足首项与剩余项组成的数组在，则递归剩余项，并将结果数组 S 与第一项组合而成的数组联合，然后返回，否则直接返回第二个参数 S。

> 代码如下:

```ts
type Subsequence<T extends any[], S extends any[] = []> = T extends [
  infer F,
  ...infer R
]
  ? Subsequence<R, S | [...S, F]>
  : S;
```

> 使用方式:

```ts
type SubsequenceRes1 = Subsequence<[1, 2]>; // [] | [1] | [2] | [1, 2]
type SubsequenceRes2 = Subsequence<[1, 2, 3]>; // [] | [1] | [2] | [1, 2] | [3] | [1, 3] | [2, 3] | [1, 2, 3]
```

> 应用场景

如下所示, 鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/Subsequence.ts" data-language="typescript"></div>
