| 标题              | 标签                       |
| ----------------- | -------------------------- |
| Permutation(排列) | extends,exclude(继承,排除) |

排列。

- 类型有 2 个参数，第一个参数表示泛型 T,第二个参数 K 等于 T,判断如果[T]继承[never],则返回空数组，如果 K 继承 K，则递归的调用排除 T 中的 K，否则返回 never。

> 代码如下:

```ts
type Permutation<T, K = T> = [T] extends [never]
  ? []
  : K extends K
  ? [K, ...Permutation<Exclude<T, K>>]
  : never;
```

> 使用方式:

```ts
type permPermutation = Permutation<'A' | 'B' | 'C'>; // ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/Permutation.ts" data-language="typescript"></div>
