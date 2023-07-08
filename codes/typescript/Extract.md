| 标题              | 标签                       |
| ----------------- | -------------------------- |
| Extract(提取类型) | extract,extends(提取,继承) |

从 T 中提取可分配给 U 的类型。

- 使用 extends 关键字判断类型 T 是否继承类型 U，是则返回 T,否则返回 never。

> 代码如下:

```ts
type Extract<T, U> = T extends U ? T : never;
```

> 使用方式:

```ts
type A = string | boolean | number;
type B = string;
type C = Extract<A, B>; // string;

type D = string | number;
type E = Extract<D, number>; // number

type F = Extract<D, string | number>; // string | number
type G = Extract<A, string & number>; // never
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/Extract.ts" data-language="typescript"></div>
