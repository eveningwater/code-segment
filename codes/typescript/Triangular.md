| 标题                                      | 标签                     |
| ----------------------------------------- | ------------------------ |
| Triangular(求三角数（正整数前 n 项之和）) | extends,infer(继承,推断) |

求三角数（正整数前 n 项之和）。

- 使用一个数组用来存储每个正整数，比如正整数 6，那么这个数字将会存储 6 次，数组项可以是任意数值，然后使用另一个数组来存储结果，如果存储正整数的数组长度等于 n，则返回存储结果数组长度，否则递归添加数值:

> 代码如下:

```ts
type Triangular<
  N extends number,
  T extends number[] = [],
  U extends number[] = []
> = T['length'] extends N
  ? U['length']
  : Triangular<N, [...T, 0], [...T, ...U, 0]>;
```

> 使用方式:

```ts
type TriangularRes1 = Triangular<0>; // 0
type TriangularRes2 = Triangular<1>; // 1
type TriangularRes3 = Triangular<3>; // 6
type TriangularRes4 = Triangular<10>; // 55
type TriangularRes5 = Triangular<20>; // 210
type TriangularRes6 = Triangular<55>; // 1540
type TriangularRes7 = Triangular<100>; // 5050
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/Triangular.ts" data-language="typescript"></div>
