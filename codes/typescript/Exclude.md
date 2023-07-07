| 标题              | 标签                       |
| ----------------- | -------------------------- |
| Exclude(排除类型) | exclude,extends(排除,继承) |

从类型 T 中排除类型 U。

- 使用 extends 关键字判断类型 T 是否继承类型 U，是则返回 never,否则返回 T。

> 代码如下:

```ts
type Exclude<T, U> = T extends U ? never : T;
```

> 使用方式:

```ts
type A = string | boolean | number;
type B = string;
type C = Exclude<A, B>; // boolean | number;

type D = string | number;
type E = Exclude<D, number>; // string

type F = Exclude<D, string | number>; // never
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/Exclude.ts"></div>
