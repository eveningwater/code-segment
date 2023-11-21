| 标题                | 标签                     |
| ------------------- | ------------------------ |
| FilterOut(过滤元组) | extends,infer(继承,推断) |

过滤元组。

- 使用 infer 推断元组每一项，如果每一项与给定类型相等，则递归剩余数组项，否则返回数组，并将不相等的类型添加到数组中，其余项继续递归，否则返回空数组。

> 代码如下:

```ts
type FilterOut<T extends any[], U> = T extends [infer F, ...infer R]
  ? [F] extends [U]
    ? FilterOut<R, U>
    : [F, ...FilterOut<R, U>]
  : [];
```

> 使用方式:

```ts
type FilterOutRes1 = FilterOut<[], never>; //  []
type FilterOutRes2 = FilterOut<[never], never>; //  []
type FilterOutRes3 = FilterOut<['a', never], never>; //  ['a']
type FilterOutRes4 = FilterOut<[1, never, 'a'], never>; //  [1, 'a']
type FilterOutRes5 = FilterOut<
  [never, 1, 'a', undefined, false, null],
  never | null | undefined
>; //  [1, 'a', false]
type FilterOutRes6 = FilterOut<
  [number | null | undefined, never],
  never | null | undefined
>; //  [number | null | undefined]
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/FilterOut.ts" data-language="typescript"></div>
