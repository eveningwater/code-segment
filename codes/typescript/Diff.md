| 标题                         | 标签                   |
| ---------------------------- | ---------------------- |
| Diff(获取两个接口的差值属性) | extends,key(继承,属性) |

获取两个接口的差值属性。

- 泛型约束 T 和 U 的类型为任意对象 `Record<string | number | symbol, any>`。
- 属性 K 在 T 和 U 的合并类型之间，并断言如果是它们的联合类型（即存在一样的属性），则返回 never，否则返回 K。
- 值取合并即可。

> 代码如下:

```ts
type Diff<
  T extends Record<string | number | symbol, any>,
  U extends Record<string | number | symbol, any>
> = {
  [K in keyof (T & U) as K extends keyof (T | U) ? never : K]: (T & U)[K];
};
```

也可以使用 Omit 类型实现，如下所示:

```ts
type Diff<O, O1> = Omit<O & O1, keyof (O | O1)>;
```

> 使用方式:

```ts
type DiffFoo = {
  a: string;
  b: number;
};
type DiffBar = {
  a: string;
  c: boolean;
};

type DiffResult1 = Diff<DiffFoo, DiffBar>; // { b: number, c: boolean }
type DiffResult2 = Diff<DiffBar, DiffFoo>; // { b: number, c: boolean }
```

> 应用场景

如下所示,鼠标悬浮到对应的类型变量可以查看类型。

<div class="code-editor" data-url="codes/typescript/demo/Diff.ts" data-language="typescript"></div>
