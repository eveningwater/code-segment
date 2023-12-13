| 标题                    | 标签                     |
| ----------------------- | ------------------------ |
| Maximum(查找数组最大值) | extends,infer(继承,推断) |

查找数组最大值。

- 创建一个 Equal 类型，用于比较两个类型是否相等，实现原理可参考[Equal](codes/typescript/Equal.md)。

```ts
type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
  ? 1
  : 2
  ? true
  : false;
```

- 为该类型新增 2 个参数，第二个参数默认赋值数组第一项，第三个参数为一个任意类型数组，用于存储数组每一项数值代表的元素数，首先判断是空数组，则返回 never,然后判断第二个参数与第三个数组参数长度相同，返回第二个参数，否则递归，递归第一个参数不变，第二个参数需要将其值和第三个参数长度做比较，相等则返回 never,相当于重置数组项，否则不变，第三个参数则每次添加一个元素，并将原数组即第三个参数展开合并到一起。

> 代码如下:

```ts
type Maximum<
  T extends any[],
  U = T[number],
  N extends any[] = []
> = T extends []
  ? never
  : Equal<U, N['length']> extends true
  ? U
  : Maximum<T, U extends N['length'] ? never : U, [...N, unknown]>;
```

> 使用方式:

```ts
type MaximumRes1 = Maximum<[]>; // never
type MaximumRes2 = Maximum<[0, 2, 1]>; // 2
type MaximumRes3 = Maximum<[1, 20, 200, 150]>; // 200
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/Maximum.ts" data-language="typescript"></div>
